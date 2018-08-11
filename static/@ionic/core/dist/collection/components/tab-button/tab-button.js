import { createColorClasses } from '../../utils/theme';
export class TabButton {
    constructor() {
        this.keyFocus = false;
        /**
         * If true, the tab button will be selected. Defaults to `false`.
         */
        this.selected = false;
    }
    onKeyUp() {
        this.keyFocus = true;
    }
    onBlur() {
        this.keyFocus = false;
    }
    hostData() {
        const selected = this.selected;
        const hasLabel = !!this.label;
        const hasIcon = !!this.icon;
        const hasLabelOnly = (hasLabel && !hasIcon);
        const hasIconOnly = (hasIcon && !hasLabel);
        const hasBadge = !!this.badge;
        return {
            'role': 'tab',
            'aria-selected': selected ? 'true' : null,
            class: Object.assign({}, createColorClasses(this.color), { 'tab-selected': selected, 'has-label': hasLabel, 'has-icon': hasIcon, 'has-label-only': hasLabelOnly, 'has-icon-only': hasIconOnly, 'has-badge': hasBadge, 'tab-button-disabled': this.disabled, 'focused': this.keyFocus })
        };
    }
    render() {
        const { icon, label, href, badge, badgeColor, mode } = this;
        return [
            h("a", { href: href || '#', class: "tab-button-native", onKeyUp: this.onKeyUp.bind(this), onBlur: this.onBlur.bind(this) },
                icon && h("ion-icon", { class: "tab-button-icon", icon: icon, lazy: false }),
                label && h("span", { class: "tab-button-text" }, label),
                badge && h("ion-badge", { class: "tab-badge", color: badgeColor }, badge),
                mode === 'md' && h("ion-ripple-effect", { tapClick: true }))
        ];
    }
    static get is() { return "ion-tab-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "badge": {
            "type": String,
            "attr": "badge"
        },
        "badgeColor": {
            "type": String,
            "attr": "badge-color"
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
        "icon": {
            "type": String,
            "attr": "icon"
        },
        "keyFocus": {
            "state": true
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "selected": {
            "type": Boolean,
            "attr": "selected"
        }
    }; }
    static get style() { return "/**style-placeholder:ion-tab-button:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-tab-button:**/"; }
}
