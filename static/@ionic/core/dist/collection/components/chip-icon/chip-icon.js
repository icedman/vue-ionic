import { createColorClasses } from '../../utils/theme';
export class ChipIcon {
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color))
        };
    }
    render() {
        return h("ion-icon", { name: this.name });
    }
    static get is() { return "ion-chip-icon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "name": {
            "type": String,
            "attr": "name"
        }
    }; }
    static get style() { return "/**style-placeholder:ion-chip-icon:**/"; }
}
