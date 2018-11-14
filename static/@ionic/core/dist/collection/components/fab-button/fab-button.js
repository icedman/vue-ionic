import { createColorClasses, hostContext, openURL } from '../../utils/theme';
export class FabButton {
    constructor() {
        this.keyFocus = false;
        this.activated = false;
        this.disabled = false;
        this.show = false;
        this.translucent = false;
        this.type = 'button';
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onKeyUp = () => {
            this.keyFocus = true;
        };
        this.onBlur = () => {
            this.keyFocus = false;
            this.ionBlur.emit();
        };
    }
    hostData() {
        const inList = hostContext('ion-fab-list', this.el);
        return {
            'ion-activatable': true,
            class: Object.assign({}, createColorClasses(this.color), { 'fab-button-in-list': inList, 'fab-button-translucent-in-list': inList && this.translucent, 'fab-button-close-active': this.activated, 'fab-button-show': this.show, 'fab-button-disabled': this.disabled, 'fab-button-translucent': this.translucent, 'focused': this.keyFocus })
        };
    }
    render() {
        const TagType = this.href === undefined ? 'button' : 'a';
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : { href: this.href };
        return (h(TagType, Object.assign({}, attrs, { class: "button-native", disabled: this.disabled, onFocus: this.onFocus, onKeyUp: this.onKeyUp, onBlur: this.onBlur, onClick: ev => openURL(this.win, this.href, ev, this.routerDirection) }),
            h("span", { class: "close-icon" },
                h("ion-icon", { name: "close", lazy: false })),
            h("span", { class: "button-inner" },
                h("slot", null)),
            this.mode === 'md' && h("ion-ripple-effect", null)));
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
        "keyFocus": {
            "state": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "routerDirection": {
            "type": String,
            "attr": "router-direction"
        },
        "show": {
            "type": Boolean,
            "attr": "show"
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get events() { return [{
            "name": "ionFocus",
            "method": "ionFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionBlur",
            "method": "ionBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ion-fab-button:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-fab-button:**/"; }
}
