import { createColorClasses, openURL } from '../../utils/theme';
export class BackButton {
    async onClick(ev) {
        const nav = this.el.closest('ion-nav');
        if (nav && nav.canGoBack()) {
            ev.preventDefault();
            if (!nav.isAnimating()) {
                nav.pop();
            }
        }
        else if (this.defaultHref) {
            openURL(this.win, this.defaultHref, ev, 'back');
        }
    }
    hostData() {
        const showBackButton = !!this.defaultHref;
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'button': true, 'show-back-button': showBackButton }),
            'tappable': true,
        };
    }
    render() {
        const backButtonIcon = this.icon || this.config.get('backButtonIcon', 'arrow-back');
        const backButtonText = this.text != null ? this.text : this.config.get('backButtonText', 'Back');
        return (h("button", { class: "back-button-native", onClick: ev => this.onClick(ev) },
            h("span", { class: "back-button-inner" },
                backButtonIcon && h("ion-icon", { icon: backButtonIcon, lazy: false }),
                this.mode === 'ios' && backButtonText && h("span", { class: "button-text" }, backButtonText),
                this.mode === 'md' && h("ion-ripple-effect", { tapClick: true, parent: this.el }))));
    }
    static get is() { return "ion-back-button"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "config": {
            "context": "config"
        },
        "defaultHref": {
            "type": String,
            "attr": "default-href"
        },
        "el": {
            "elementRef": true
        },
        "icon": {
            "type": String,
            "attr": "icon"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "text": {
            "type": String,
            "attr": "text"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get style() { return "/**style-placeholder:ion-back-button:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-back-button:**/"; }
}
