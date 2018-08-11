import { calcCells, calcHeightIndex, doRender, findCellIndex, getRange, getShouldUpdate, getViewport, inplaceUpdate, positionForIndex, resizeBuffer, updateVDom } from './virtual-scroll-utils';
export class VirtualScroll {
    constructor() {
        this.range = { offset: 0, length: 0 };
        this.viewportHeight = 0;
        this.cells = [];
        this.virtualDom = [];
        this.isEnabled = false;
        this.viewportOffset = 0;
        this.currentScrollTop = 0;
        this.indexDirty = 0;
        this.lastItemLen = 0;
        this.totalHeight = 0;
        /**
         * It is important to provide this
         * if virtual item height will be significantly larger than the default
         * The approximate height of each virtual item template's cell.
         * This dimension is used to help determine how many cells should
         * be created when initialized, and to help calculate the height of
         * the scrollable area. This height value can only use `px` units.
         * Note that the actual rendered size of each cell comes from the
         * app's CSS, whereas this approximation is used to help calculate
         * initial dimensions before the item has been rendered. Default is
         * `45`.
         */
        this.approxItemHeight = 45;
        /**
         * The approximate height of each header template's cell.
         * This dimension is used to help determine how many cells should
         * be created when initialized, and to help calculate the height of
         * the scrollable area. This height value can only use `px` units.
         * Note that the actual rendered size of each cell comes from the
         * app's CSS, whereas this approximation is used to help calculate
         * initial dimensions before the item has been rendered. Default is `40px`.
         */
        this.approxHeaderHeight = 40;
        /**
         * The approximate width of each footer template's cell.
         * This dimension is used to help determine how many cells should
         * be created when initialized, and to help calculate the height of
         * the scrollable area. This value can use either `px` or `%` units.
         * Note that the actual rendered size of each cell comes from the
         * app's CSS, whereas this approximation is used to help calculate
         * initial dimensions before the item has been rendered. Default is `100%`.
         */
        this.approxFooterHeight = 40;
    }
    itemsChanged() {
        this.calcCells();
    }
    componentDidLoad() {
        const contentEl = this.el.closest('ion-content');
        if (!contentEl) {
            console.error('virtual-scroll must be used inside ion-scroll/ion-content');
            return;
        }
        contentEl.componentOnReady().then(() => {
            this.scrollEl = contentEl.getScrollElement();
            this.calcCells();
            this.updateState();
        });
    }
    componentDidUpdate() {
        this.updateState();
    }
    componentDidUnload() {
        this.scrollEl = undefined;
    }
    onScroll() {
        this.updateVirtualScroll();
    }
    onResize() {
        this.indexDirty = 0;
        this.calcCells();
        this.updateVirtualScroll();
    }
    positionForItem(index) {
        return positionForIndex(index, this.cells, this.getHeightIndex());
    }
    markDirty(offset, len = -1) {
        // TODO: kind of hacky how we do in-place updated of the cells
        // array. this part needs a complete refactor
        if (!this.items) {
            return;
        }
        if (len === -1) {
            len = this.items.length - offset;
        }
        const max = this.lastItemLen;
        let j = 0;
        if (offset > 0 && offset < max) {
            j = findCellIndex(this.cells, offset);
        }
        else if (offset === 0) {
            j = 0;
        }
        else if (offset === max) {
            j = this.cells.length;
        }
        else {
            console.warn('bad values for markDirty');
            return;
        }
        const cells = calcCells(this.items, this.itemHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, j, offset, len);
        console.debug('[virtual] cells recalculated', cells.length);
        this.cells = inplaceUpdate(this.cells, cells, offset);
        this.lastItemLen = this.items.length;
        this.indexDirty = Math.max(offset - 1, 0);
        this.scheduleUpdate();
    }
    markDirtyTail() {
        if (this.items) {
            const offset = this.lastItemLen;
            this.markDirty(offset, this.items.length - offset);
        }
    }
    updateVirtualScroll() {
        // do nothing if virtual-scroll is disabled
        if (!this.isEnabled || !this.scrollEl) {
            return;
        }
        // unschedule future updates
        if (this.timerUpdate) {
            clearTimeout(this.timerUpdate);
            this.timerUpdate = null;
        }
        // schedule DOM operations into the stencil queue
        this.queue.read(this.readVS.bind(this));
        this.queue.write(this.writeVS.bind(this));
    }
    readVS() {
        const { scrollEl, el } = this;
        let topOffset = 0;
        let node = el;
        while (node && node !== scrollEl) {
            topOffset += node.offsetTop;
            node = node.parentElement;
        }
        this.viewportOffset = topOffset;
        if (scrollEl) {
            this.viewportHeight = scrollEl.offsetHeight;
            this.currentScrollTop = scrollEl.scrollTop;
        }
    }
    writeVS() {
        const dirtyIndex = this.indexDirty;
        // get visible viewport
        const scrollTop = this.currentScrollTop - this.viewportOffset;
        const viewport = getViewport(scrollTop, this.viewportHeight, 100);
        // compute lazily the height index
        const heightIndex = this.getHeightIndex();
        // get array bounds of visible cells base in the viewport
        const range = getRange(heightIndex, viewport, 2);
        // fast path, do nothing
        const shouldUpdate = getShouldUpdate(dirtyIndex, this.range, range);
        if (!shouldUpdate) {
            return;
        }
        this.range = range;
        // in place mutation of the virtual DOM
        updateVDom(this.virtualDom, heightIndex, this.cells, range);
        // Write DOM
        // Different code paths taken depending of the render API used
        if (this.nodeRender) {
            doRender(this.el, this.nodeRender, this.virtualDom, this.updateCellHeight.bind(this));
        }
        else if (this.domRender) {
            this.domRender(this.virtualDom);
        }
        else if (this.renderItem) {
            this.el.forceUpdate();
        }
    }
    updateCellHeight(cell, node) {
        const update = () => {
            if (node['$ionCell'] === cell) {
                const style = this.win.getComputedStyle(node);
                const height = node.offsetHeight + parseFloat(style.getPropertyValue('margin-bottom'));
                this.setCellHeight(cell, height);
            }
        };
        if (node && node.componentOnReady) {
            node.componentOnReady().then(update);
        }
        else {
            update();
        }
    }
    setCellHeight(cell, height) {
        const index = cell.i;
        // the cell might changed since the height update was scheduled
        if (cell !== this.cells[index]) {
            return;
        }
        cell.visible = true;
        if (cell.height !== height) {
            console.debug(`[virtual] cell height changed ${cell.height}px -> ${height}px`);
            cell.height = height;
            this.indexDirty = Math.min(this.indexDirty, index);
            this.scheduleUpdate();
        }
    }
    scheduleUpdate() {
        clearTimeout(this.timerUpdate);
        this.timerUpdate = setTimeout(() => this.updateVirtualScroll(), 100);
    }
    updateState() {
        const shouldEnable = !!(this.scrollEl &&
            this.cells);
        if (shouldEnable !== this.isEnabled) {
            this.enableScrollEvents(shouldEnable);
            if (shouldEnable) {
                this.updateVirtualScroll();
            }
        }
    }
    calcCells() {
        if (!this.items) {
            return;
        }
        this.lastItemLen = this.items.length;
        this.cells = calcCells(this.items, this.itemHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, 0, 0, this.lastItemLen);
        console.debug('[virtual] cells recalculated', this.cells.length);
        this.indexDirty = 0;
    }
    getHeightIndex() {
        if (this.indexDirty !== Infinity) {
            this.calcHeightIndex(this.indexDirty);
        }
        return this.heightIndex;
    }
    calcHeightIndex(index = 0) {
        // TODO: optimize, we don't need to calculate all the cells
        this.heightIndex = resizeBuffer(this.heightIndex, this.cells.length);
        this.totalHeight = calcHeightIndex(this.heightIndex, this.cells, index);
        console.debug('[virtual] height index recalculated', this.heightIndex.length - index);
        this.indexDirty = Infinity;
    }
    enableScrollEvents(shouldListen) {
        if (this.scrollEl) {
            this.isEnabled = shouldListen;
            this.enableListener(this, 'scroll', shouldListen, this.scrollEl);
        }
    }
    renderVirtualNode(node) {
        const { type, value, index } = node.cell;
        switch (type) {
            case 0 /* Item */: return this.renderItem(value, index);
            case 1 /* Header */: return this.renderHeader(value, index);
            case 2 /* Footer */: return this.renderFooter(value, index);
        }
    }
    hostData() {
        return {
            style: {
                height: `${this.totalHeight}px`
            }
        };
    }
    render() {
        const renderItem = this.renderItem;
        if (renderItem) {
            return this.virtualDom.map(node => {
                const item = this.renderVirtualNode(node);
                const classes = ['virtual-item'];
                if (!item.vattrs) {
                    item.vattrs = {};
                }
                if (!node.visible) {
                    classes.push('virtual-loading');
                }
                item.vattrs.class += classes.join(' ');
                if (!item.vattrs.style) {
                    item.vattrs.style = {};
                }
                item.vattrs.style['transform'] = `translate3d(0,${node.top}px,0)`;
                return item;
            });
        }
        return undefined;
    }
    static get is() { return "ion-virtual-scroll"; }
    static get properties() { return {
        "approxFooterHeight": {
            "type": Number,
            "attr": "approx-footer-height"
        },
        "approxHeaderHeight": {
            "type": Number,
            "attr": "approx-header-height"
        },
        "approxItemHeight": {
            "type": Number,
            "attr": "approx-item-height"
        },
        "domRender": {
            "type": "Any",
            "attr": "dom-render"
        },
        "el": {
            "elementRef": true
        },
        "enableListener": {
            "context": "enableListener"
        },
        "footerFn": {
            "type": "Any",
            "attr": "footer-fn"
        },
        "headerFn": {
            "type": "Any",
            "attr": "header-fn"
        },
        "itemHeight": {
            "type": "Any",
            "attr": "item-height",
            "watchCallbacks": ["itemsChanged"]
        },
        "items": {
            "type": "Any",
            "attr": "items",
            "watchCallbacks": ["itemsChanged"]
        },
        "markDirty": {
            "method": true
        },
        "markDirtyTail": {
            "method": true
        },
        "nodeRender": {
            "type": "Any",
            "attr": "node-render"
        },
        "positionForItem": {
            "method": true
        },
        "queue": {
            "context": "queue"
        },
        "renderFooter": {
            "type": "Any",
            "attr": "render-footer"
        },
        "renderHeader": {
            "type": "Any",
            "attr": "render-header"
        },
        "renderItem": {
            "type": "Any",
            "attr": "render-item"
        },
        "totalHeight": {
            "state": true
        },
        "win": {
            "context": "window"
        }
    }; }
    static get listeners() { return [{
            "name": "scroll",
            "method": "onScroll",
            "disabled": true
        }, {
            "name": "window:resize",
            "method": "onResize",
            "passive": true
        }]; }
    static get style() { return "/**style-placeholder:ion-virtual-scroll:**/"; }
}
