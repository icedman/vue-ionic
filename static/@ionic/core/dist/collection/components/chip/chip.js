import { createColorClasses } from '../../utils/theme';
export class Chip {
    hostData() {
        return {
            class: createColorClasses(this.color),
        };
    }
    static get is() { return "ion-chip"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return "/**style-placeholder:ion-chip:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-chip:**/"; }
}
