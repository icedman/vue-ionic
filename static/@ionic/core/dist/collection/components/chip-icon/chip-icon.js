import { createColorClasses } from '../../utils/theme';
export class ChipIcon {
    constructor() {
        this.fill = 'clear';
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { [`chip-icon-${this.fill}`]: true })
        };
    }
    render() {
        return h("ion-icon", { name: this.name, src: this.src, mode: this.mode });
    }
    static get is() { return "ion-chip-icon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "fill": {
            "type": String,
            "attr": "fill"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "src": {
            "type": String,
            "attr": "src"
        }
    }; }
    static get style() { return "/**style-placeholder:ion-chip-icon:**/"; }
}
