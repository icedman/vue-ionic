export class MenuButton {
    constructor() {
        /**
         * Automatically hides the menu button when the corresponding menu is not active
         */
        this.autoHide = true;
    }
    hostData() {
        return {
            class: {
                'button': true
            }
        };
    }
    render() {
        const menuIcon = this.config.get('menuIcon', 'menu');
        return (h("ion-menu-toggle", { menu: this.menu, autoHide: this.autoHide },
            h("button", null,
                h("slot", null,
                    h("ion-icon", { icon: menuIcon, mode: this.mode, color: this.color, lazy: false })))));
    }
    static get is() { return "ion-menu-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "autoHide": {
            "type": Boolean,
            "attr": "auto-hide"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "config": {
            "context": "config"
        },
        "menu": {
            "type": String,
            "attr": "menu"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return "/**style-placeholder:ion-menu-button:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-menu-button:**/"; }
}
