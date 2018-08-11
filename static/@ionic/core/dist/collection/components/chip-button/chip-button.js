import { createColorClasses } from '../../utils/theme';
export class ChipButton {
    constructor() {
        /**
         * If true, the user cannot interact with the chip button. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * Set to `"clear"` for a transparent button style.
         */
        this.fill = 'default';
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { [`chip-button-${this.fill}`]: true })
        };
    }
    render() {
        const TagType = this.href ? 'a' : 'button';
        return (h(TagType, { class: "chip-button-native", disabled: this.disabled, href: this.href },
            h("span", { class: "chip-button-inner" },
                h("slot", null)),
            this.mode === 'md' && h("ion-ripple-effect", { tapClick: true })));
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
