import { createColorClasses } from '../../utils/theme';
export class Tabbar {
    constructor() {
        this.canScrollLeft = false;
        this.canScrollRight = false;
        this.keyboardVisible = false;
        /**
         * Set the layout of the text and icon in the tabbar. Available options: `"icon-top"`, `"icon-start"`, `"icon-end"`, `"icon-bottom"`, `"icon-hide"`, `"label-hide"`.
         */
        this.layout = 'icon-top';
        /**
         * Set the position of the tabbar, relative to the content. Available options: `"top"`, `"bottom"`.
         */
        this.placement = 'bottom';
        /**
         * If true, the tabs will be scrollable when there are enough tabs to overflow the width of the screen.
         */
        this.scrollable = false;
        /** The tabs to render */
        this.tabs = [];
        /**
         * If true, show the tab highlight bar under the selected tab.
         */
        this.highlight = false;
        /**
         * If true, the tabbar will be translucent. Defaults to `false`.
         */
        this.translucent = false;
    }
    selectedTabChanged() {
        this.scrollToSelectedButton();
        this.updateHighlight();
    }
    onKeyboardWillHide() {
        setTimeout(() => this.keyboardVisible = false, 50);
    }
    onKeyboardWillShow() {
        if (this.placement === 'bottom') {
            this.keyboardVisible = true;
        }
    }
    onResize() {
        this.updateHighlight();
    }
    componentDidLoad() {
        this.updateBoundaries();
        this.updateHighlight();
    }
    analyzeTabs() {
        const tabs = Array.from(this.doc.querySelectorAll('ion-tab-button'));
        const scrollLeft = this.scrollEl.scrollLeft;
        const tabsWidth = this.scrollEl.clientWidth;
        let previous;
        let next;
        for (const tab of tabs) {
            const left = tab.offsetLeft;
            const right = left + tab.offsetWidth;
            if (left < scrollLeft) {
                previous = { tab, amount: left };
            }
            if (!next && right > (tabsWidth + scrollLeft)) {
                const amount = right - tabsWidth;
                next = { tab, amount };
            }
        }
        return { previous, next };
    }
    getSelectedButton() {
        return Array.from(this.el.querySelectorAll('ion-tab-button'))
            .find(btn => btn.selected);
    }
    scrollToSelectedButton() {
        if (!this.scrollEl || !this.scrollable) {
            return;
        }
        this.queue.read(() => {
            const activeTabButton = this.getSelectedButton();
            if (activeTabButton) {
                const scrollLeft = this.scrollEl.scrollLeft;
                const tabsWidth = this.scrollEl.clientWidth;
                const left = activeTabButton.offsetLeft;
                const right = left + activeTabButton.offsetWidth;
                let amount = 0;
                if (right > (tabsWidth + scrollLeft)) {
                    amount = right - tabsWidth;
                }
                else if (left < scrollLeft) {
                    amount = left;
                }
                if (amount !== 0) {
                    this.queue.write(() => {
                        this.scrollEl.scrollToPoint(amount, 0, 250).then(() => {
                            this.updateBoundaries();
                        });
                    });
                }
            }
        });
    }
    scrollByTab(direction) {
        this.queue.read(() => {
            const { previous, next } = this.analyzeTabs();
            const info = direction === 'right' ? next : previous;
            const amount = info && info.amount;
            if (info && amount) {
                this.scrollEl.scrollToPoint(amount, 0, 250).then(() => {
                    this.updateBoundaries();
                });
            }
        });
    }
    updateBoundaries() {
        if (this.scrollEl && this.scrollable) {
            this.canScrollLeft = this.scrollEl.scrollLeft !== 0;
            this.canScrollRight = this.scrollEl.scrollLeft < (this.scrollEl.scrollWidth - this.scrollEl.offsetWidth);
        }
    }
    updateHighlight() {
        if (!this.highlight) {
            return;
        }
        this.queue.read(() => {
            const btn = this.getSelectedButton();
            const highlight = this.el.querySelector('div.tabbar-highlight');
            if (btn && highlight) {
                highlight.style.transform = `translate3d(${btn.offsetLeft}px,0,0) scaleX(${btn.offsetWidth})`;
            }
        });
    }
    hostData() {
        const { color, translucent, layout, placement, keyboardVisible, scrollable } = this;
        return {
            role: 'tablist',
            'aria-hidden': keyboardVisible ? 'true' : null,
            class: Object.assign({}, createColorClasses(color), { 'tabbar-translucent': translucent, [`layout-${layout}`]: true, [`placement-${placement}`]: true, 'tabbar-hidden': keyboardVisible, 'scrollable': scrollable })
        };
    }
    render() {
        const selectedTab = this.selectedTab;
        const ionTabbarHighlight = this.highlight ? h("div", { class: "animated tabbar-highlight" }) : null;
        const tabButtons = this.tabs.map(tab => h("ion-tab-button", { id: tab.btnId, label: tab.label, icon: tab.icon, badge: tab.badge, disabled: tab.disabled, badgeColor: tab.badgeColor, href: tab.href, selected: selectedTab === tab, mode: this.mode, color: this.color, "aria-hidden": !tab.show ? 'true' : null, class: { 'tab-hidden': !tab.show }, onClick: ev => {
                if (!tab.disabled) {
                    this.ionTabbarClick.emit(tab);
                }
                ev.stopPropagation();
                ev.preventDefault();
            } }));
        if (this.scrollable) {
            return [
                h("ion-button", { onClick: () => this.scrollByTab('left'), fill: "clear", class: { inactive: !this.canScrollLeft } },
                    h("ion-icon", { name: "arrow-dropleft", lazy: false })),
                h("ion-scroll", { forceOverscroll: false, ref: scrollEl => this.scrollEl = scrollEl },
                    tabButtons,
                    ionTabbarHighlight),
                h("ion-button", { onClick: () => this.scrollByTab('right'), fill: "clear", class: { inactive: !this.canScrollRight } },
                    h("ion-icon", { name: "arrow-dropright", lazy: false }))
            ];
        }
        else {
            return [
                ...tabButtons,
                ionTabbarHighlight
            ];
        }
    }
    static get is() { return "ion-tabbar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "canScrollLeft": {
            "state": true
        },
        "canScrollRight": {
            "state": true
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "highlight": {
            "type": Boolean,
            "attr": "highlight"
        },
        "keyboardVisible": {
            "state": true
        },
        "layout": {
            "type": String,
            "attr": "layout"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "placement": {
            "type": String,
            "attr": "placement"
        },
        "queue": {
            "context": "queue"
        },
        "scrollable": {
            "type": Boolean,
            "attr": "scrollable"
        },
        "selectedTab": {
            "type": "Any",
            "attr": "selected-tab",
            "watchCallbacks": ["selectedTabChanged"]
        },
        "tabs": {
            "type": "Any",
            "attr": "tabs"
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        }
    }; }
    static get events() { return [{
            "name": "ionTabbarClick",
            "method": "ionTabbarClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "body:keyboardWillHide",
            "method": "onKeyboardWillHide"
        }, {
            "name": "body:keyboardWillShow",
            "method": "onKeyboardWillShow"
        }, {
            "name": "window:resize",
            "method": "onResize",
            "passive": true
        }]; }
    static get style() { return "/**style-placeholder:ion-tabbar:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-tabbar:**/"; }
}
