import { createColorClasses } from '../../utils/theme';
export class Toolbar {
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    render() {
        return [
            h("div", { class: "toolbar-background" }),
            h("div", { class: "toolbar-container" },
                h("slot", { name: "start" }),
                h("slot", { name: "secondary" }),
                h("div", { class: "toolbar-content" },
                    h("slot", null)),
                h("slot", { name: "primary" }),
                h("slot", { name: "end" }))
        ];
    }
    static get is() { return "ion-toolbar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "config": {
            "context": "config"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return "/**style-placeholder:ion-toolbar:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-toolbar:**/"; }
}
