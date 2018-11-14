import { createColorClasses } from '../../utils/theme';
export class TabButton {
    constructor() {
        this.selected = false;
        this.layout = 'icon-top';
        this.disabled = false;
    }
    onTabbarChanged(ev) {
        this.selected = this.tab === ev.detail.tab;
    }
    onClick(ev) {
        if (!this.disabled) {
            this.ionTabButtonClick.emit({
                tab: this.tab,
                href: this.href
            });
        }
        ev.preventDefault();
    }
    componentWillLoad() {
        if (this.tab === undefined) {
            console.warn(`ion-tab-button needs a tab name, so it can be selected.
  <ion-tab-button tab="TAB_NAME">`);
        }
    }
    get hasLabel() {
        return !!this.el.querySelector('ion-label');
    }
    get hasIcon() {
        return !!this.el.querySelector('ion-icon');
    }
    hostData() {
        const { color, tab, selected, layout, disabled, hasLabel, hasIcon } = this;
        return {
            'role': 'tab',
            'ion-activatable': true,
            'aria-selected': selected ? 'true' : null,
            'id': `tab-button-${tab}`,
            'aria-controls': `tab-view-${tab}`,
            class: Object.assign({}, createColorClasses(color), { 'tab-selected': selected, 'tab-disabled': disabled, 'tab-has-label': hasLabel, 'tab-has-icon': hasIcon, 'tab-has-label-only': hasLabel && !hasIcon, 'tab-has-icon-only': hasIcon && !hasLabel, [`tab-layout-${layout}`]: true })
        };
    }
    render() {
        const { mode, href } = this;
        return (h("a", { href: href || '#' },
            h("slot", null),
            mode === 'md' && h("ion-ripple-effect", null)));
    }
    static get is() { return "ion-tab-button"; }
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
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "layout": {
            "type": String,
            "attr": "layout"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "queue": {
            "context": "queue"
        },
        "selected": {
            "state": true
        },
        "tab": {
            "type": String,
            "attr": "tab"
        }
    }; }
    static get events() { return [{
            "name": "ionTabButtonClick",
            "method": "ionTabButtonClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "parent:ionTabBarChanged",
            "method": "onTabbarChanged"
        }, {
            "name": "click",
            "method": "onClick"
        }]; }
    static get style() { return "/**style-placeholder:ion-tab-button:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-tab-button:**/"; }
}