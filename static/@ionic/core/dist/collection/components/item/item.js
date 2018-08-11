import { createColorClasses, hostContext, openURL } from '../../utils/theme';
export class Item {
    constructor() {
        this.itemStyles = new Map();
        /**
         * If true, a button tag will be rendered and the item will be tappable. Defaults to `false`.
         */
        this.button = false;
        /**
         * The icon to use when `detail` is set to `true`. Defaults to `"ios-arrow-forward"`.
         */
        this.detailIcon = 'ios-arrow-forward';
        /**
         * If true, the user cannot interact with the item. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * The type of the button. Only used when an `onclick` or `button` property is present.
         * Possible values are: `"submit"`, `"reset"` and `"button"`.
         * Default value is: `"button"`
         */
        this.type = 'button';
    }
    itemStyle(ev) {
        ev.stopPropagation();
        const tagName = ev.target.tagName;
        const updatedStyles = ev.detail;
        const updatedKeys = Object.keys(ev.detail);
        const newStyles = {};
        const childStyles = this.itemStyles.get(tagName) || {};
        let hasStyleChange = false;
        for (const key of updatedKeys) {
            const itemKey = `item-${key}`;
            const newValue = updatedStyles[key];
            if (newValue !== childStyles[itemKey]) {
                hasStyleChange = true;
            }
            newStyles[itemKey] = newValue;
        }
        if (hasStyleChange) {
            this.itemStyles.set(tagName, newStyles);
            this.el.forceUpdate();
        }
    }
    componentDidLoad() {
        // Change the button size to small for each ion-button in the item
        // unless the size is explicitly set
        Array.from(this.el.querySelectorAll('ion-button')).forEach(button => {
            if (!button.size) {
                button.size = 'small';
            }
        });
    }
    isClickable() {
        return !!(this.href || this.el.onclick || this.button);
    }
    hostData() {
        const childStyles = {};
        for (const value of this.itemStyles.values()) {
            Object.assign(childStyles, value);
        }
        return {
            'tappable': this.isClickable(),
            class: Object.assign({}, childStyles, createColorClasses(this.color), { [`item-lines-${this.lines}`]: !!this.lines, 'item-disabled': this.disabled, 'in-list': hostContext('ion-list', this.el), 'item': true })
        };
    }
    render() {
        const { href, detail, mode, win, state, detailIcon, el, routerDirection, type } = this;
        const clickable = this.isClickable();
        const TagType = clickable ? (href ? 'a' : 'button') : 'div';
        const attrs = TagType === 'button' ? { type } : { href };
        const showDetail = detail != null ? detail : mode === 'ios' && clickable;
        return (h(TagType, Object.assign({}, attrs, { class: "item-native", onClick: ev => openURL(win, href, ev, routerDirection) }),
            h("slot", { name: "start" }),
            h("div", { class: "item-inner" },
                h("div", { class: "input-wrapper" },
                    h("slot", null)),
                h("slot", { name: "end" }),
                showDetail && h("ion-icon", { icon: detailIcon, lazy: false, class: "item-detail-icon" })),
            state && h("div", { class: "item-state" }),
            clickable && mode === 'md' && h("ion-ripple-effect", { tapClick: true, parent: el })));
    }
    static get is() { return "ion-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "button": {
            "type": Boolean,
            "attr": "button"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "detail": {
            "type": Boolean,
            "attr": "detail"
        },
        "detailIcon": {
            "type": String,
            "attr": "detail-icon"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "el": {
            "elementRef": true
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "lines": {
            "type": String,
            "attr": "lines"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "routerDirection": {
            "type": String,
            "attr": "router-direction"
        },
        "state": {
            "type": String,
            "attr": "state"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get listeners() { return [{
            "name": "ionStyle",
            "method": "itemStyle"
        }]; }
    static get style() { return "/**style-placeholder:ion-item:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-item:**/"; }
}
