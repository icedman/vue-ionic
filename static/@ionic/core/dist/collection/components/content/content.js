import { createColorClasses } from '../../utils/theme';
export class Content {
    constructor() {
        this.cTop = -1;
        this.cBottom = -1;
        this.dirty = false;
        /**
         * If true, the content will scroll behind the headers
         * and footers. This effect can easily be seen by setting the toolbar
         * to transparent.
         */
        this.fullscreen = false;
        /**
         * By default `ion-content` uses an `ion-scroll` under the hood to implement scrolling,
         * if you want to disable the content scrolling for a given page, set this property to `false`.
         */
        this.scrollEnabled = true;
        /**
         * Because of performance reasons, ionScroll events are disabled by default, in order to enable them
         * and start listening from (ionScroll), set this property to `true`.
         */
        this.scrollEvents = false;
    }
    onNavChanged() {
        this.resize();
    }
    componentDidLoad() {
        this.resize();
    }
    componentDidUnload() {
        this.scrollEl = undefined;
    }
    getScrollElement() {
        return this.scrollEl;
    }
    resize() {
        if (!this.scrollEl) {
            return;
        }
        if (this.fullscreen) {
            this.queue.read(() => {
                this.queue.read(this.readDimensions.bind(this));
                this.queue.write(this.writeDimensions.bind(this));
            });
        }
        else {
            this.cTop = this.cBottom = -1;
            this.queue.write(() => this.scrollEl && this.scrollEl.removeAttribute('style'));
        }
    }
    readDimensions() {
        const page = getPageElement(this.el);
        const top = Math.max(this.el.offsetTop, 0);
        const bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
        this.dirty = top !== this.cTop || bottom !== this.cBottom;
        this.cTop = top;
        this.cBottom = bottom;
    }
    writeDimensions() {
        if (this.dirty && this.scrollEl) {
            const style = this.scrollEl.style;
            style.paddingTop = this.cTop + 'px';
            style.paddingBottom = this.cBottom + 'px';
            style.top = -this.cTop + 'px';
            style.bottom = -this.cBottom + 'px';
            this.dirty = false;
        }
    }
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    render() {
        this.resize();
        const innerScroll = h("div", { class: "scroll-inner" },
            h("slot", null));
        return [
            (this.scrollEnabled)
                ? h("ion-scroll", { ref: el => this.scrollEl = el, mode: this.mode, scrollEvents: this.scrollEvents, forceOverscroll: this.forceOverscroll }, innerScroll)
                : innerScroll,
            h("slot", { name: "fixed" })
        ];
    }
    static get is() { return "ion-content"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "config": {
            "context": "config"
        },
        "el": {
            "elementRef": true
        },
        "forceOverscroll": {
            "type": Boolean,
            "attr": "force-overscroll"
        },
        "fullscreen": {
            "type": Boolean,
            "attr": "fullscreen"
        },
        "getScrollElement": {
            "method": true
        },
        "queue": {
            "context": "queue"
        },
        "scrollEnabled": {
            "type": Boolean,
            "attr": "scroll-enabled"
        },
        "scrollEvents": {
            "type": Boolean,
            "attr": "scroll-events"
        }
    }; }
    static get listeners() { return [{
            "name": "body:ionNavDidChange",
            "method": "onNavChanged"
        }]; }
    static get style() { return "/**style-placeholder:ion-content:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-content:**/"; }
}
function getParentElement(el) {
    if (el.parentElement) {
        // normal element with a parent element
        return el.parentElement;
    }
    if (el.parentNode && el.parentNode.host) {
        // shadow dom's document fragment
        return el.parentNode.host;
    }
    return null;
}
function getPageElement(el) {
    const tabs = el.closest('ion-tabs');
    if (tabs) {
        return tabs;
    }
    const page = el.closest('ion-app,ion-page,.ion-page,page-inner');
    if (page) {
        return page;
    }
    return getParentElement(el);
}
