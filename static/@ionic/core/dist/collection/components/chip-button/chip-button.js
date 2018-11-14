import { createColorClasses } from '../../utils/theme';
export class ChipButton {
    constructor() {
        this.disabled = false;
        this.fill = 'clear';
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { [`chip-button-${this.fill}`]: true })
        };
    }
    render() {
        const TagType = this.href === undefined ? 'button' : 'a';
        return (h(TagType, { type: "button", class: "button-native", disabled: this.disabled, href: this.href },
            h("span", { class: "button-inner" },
                h("slot", null)),
            this.mode === 'md' && h("ion-ripple-effect", null)));
    }
    static get is() { return "ion-chip-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
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
        "fill": {
            "type": String,
            "attr": "fill"
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return "/**style-placeholder:ion-chip-button:**/"; }
}
