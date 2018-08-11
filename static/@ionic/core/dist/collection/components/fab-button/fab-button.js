import { createColorClasses } from '../../utils/theme';
export class FabButton {
    constructor() {
        this.inList = false;
        /**
         * If true, the fab button will be show a close icon. Defaults to `false`.
         */
        this.activated = false;
        /**
         * If true, the user cannot interact with the fab button. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * If true, the fab button will be translucent. Defaults to `false`.
         */
        this.translucent = false;
        /**
         * If true, the fab button will show when in a fab-list.
         */
        this.show = false;
    }
    componentWillLoad() {
        const parentNode = this.el.parentNode;
        const parentTag = parentNode ? parentNode.nodeName : null;
        this.inList = parentTag === 'ION-FAB-LIST';
    }
    /**
     * Get the classes for fab buttons in lists
     */
    getFabClassMap() {
        return {
            'fab-button-in-list': this.inList,
            'fab-button-translucent-in-list': this.inList && this.translucent,
            'fab-button-close-active': this.activated,
            'fab-button-show': this.show
        };
    }
    hostData() {
        return {
            'tappable': !this.disabled,
            class: Object.assign({}, createColorClasses(this.color), this.getFabClassMap(), { 'fab-button-translucent': this.translucent })
        };
    }
    render() {
        const TagType = this.href ? 'a' : 'button';
        return (h(TagType, { class: "fab-button-native", disabled: this.disabled, href: this.href },
            h("span", { class: "fab-button-close-icon" },
                h("ion-icon", { name: "close", lazy: false })),
            h("span", { class: "fab-button-inner" },
                h("slot", null)),
            this.mode === 'md' && h("ion-ripple-effect", { tapClick: true, parent: this.el })));
    }
    static get is() { return "ion-fab-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "activated": {
            "type": Boolean,
            "attr": "activated"
        },
        "color": {
            "type": String,
            "attr": "color"
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
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "show": {
            "type": Boolean,
            "attr": "show"
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        }
    }; }
    static get style() { return "/**style-placeholder:ion-fab-button:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-fab-button:**/"; }
}
