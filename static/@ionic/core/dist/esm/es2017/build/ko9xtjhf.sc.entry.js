/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { a as attachComponent, h as createColorClasses } from './chunk-b9ec67ac.js';

class Tab {
    constructor() {
        this.loaded = false;
        this.active = false;
    }
    componentWillLoad() {
    }
    async setActive() {
        await this.prepareLazyLoaded();
        this.active = true;
    }
    prepareLazyLoaded() {
        if (!this.loaded && this.component != null) {
            this.loaded = true;
            return attachComponent(this.delegate, this.el, this.component, ['ion-page']);
        }
        return Promise.resolve();
    }
    hostData() {
        const { tab, active, component } = this;
        return {
            'role': 'tabpanel',
            'aria-hidden': !active ? 'true' : null,
            'aria-labelledby': `tab-button-${tab}`,
            'id': `tab-view-${tab}`,
            'class': {
                'ion-page': component === undefined,
                'tab-hidden': !active
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-tab"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "active": {
            "type": Boolean,
            "attr": "active",
            "mutable": true
        },
        "component": {
            "type": String,
            "attr": "component"
        },
        "delegate": {
            "type": "Any",
            "attr": "delegate"
        },
        "el": {
            "elementRef": true
        },
        "setActive": {
            "method": true
        },
        "tab": {
            "type": String,
            "attr": "tab"
        }
    }; }
    static get style() { return ".tab-hidden.sc-ion-tab-h{display:none!important}"; }
}

class TabBar {
    constructor() {
        this.keyboardVisible = false;
        this.layout = 'icon-top';
        this.translucent = false;
    }
    selectedTabChanged() {
        this.ionTabBarChanged.emit({
            tab: this.selectedTab
        });
    }
    onKeyboardWillHide() {
        setTimeout(() => this.keyboardVisible = false, 50);
    }
    onKeyboardWillShow() {
        if (this.el.getAttribute('slot') === 'bottom') {
            this.keyboardVisible = true;
        }
    }
    componentWillLoad() {
        this.selectedTabChanged();
    }
    hostData() {
        const { color, translucent, keyboardVisible } = this;
        return {
            'role': 'tablist',
            'aria-hidden': keyboardVisible ? 'true' : null,
            class: Object.assign({}, createColorClasses(color), { 'tabbar-translucent': translucent, 'tabbar-hidden': keyboardVisible })
        };
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "ion-tab-bar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "keyboardVisible": {
            "state": true
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
        "selectedTab": {
            "type": String,
            "attr": "selected-tab",
            "watchCallbacks": ["selectedTabChanged"]
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        }
    }; }
    static get events() { return [{
            "name": "ionTabBarChanged",
            "method": "ionTabBarChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "body:keyboardWillHide",
            "method": "onKeyboardWillHide"
        }, {
            "name": "body:keyboardWillShow",
            "method": "onKeyboardWillShow"
        }]; }
    static get style() { return ".sc-ion-tab-bar-md-h{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.ion-color.sc-ion-tab-bar-md-h{--background:var(--ion-color-base)}.sc-ion-tab-bar-md-h.ion-color .sc-ion-tab-bar-md-s > ion-tab-button{--color:rgba(var(--ion-color-contrast-rgb),0.7);--color-selected:var(--ion-color-contrast);--background-focused:var(--ion-color-shade)}[slot=top].sc-ion-tab-bar-md-h{border-bottom:var(--border)}[slot=bottom].sc-ion-tab-bar-md-h{padding-bottom:var(--ion-safe-area-bottom,0);border-top:var(--border)}.tabbar-hidden.sc-ion-tab-bar-md-h{display:none!important}.sc-ion-tab-bar-md-h{--background:var(--ion-tab-bar-background,#f8f8f8);--border:1px solid var(--ion-tab-bar-border-color,var(--ion-border-color,rgba(0,0,0,0.07)));height:56px}"; }
    static get styleMode() { return "md"; }
}

class TabButton {
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
    static get style() { return ".sc-ion-tab-button-md-h{--badge-end:4%;-ms-flex:1;flex:1;color:var(--color)}.sc-ion-tab-button-md-h, a.sc-ion-tab-button-md{height:100%}a.sc-ion-tab-button-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;width:100%;border:0;outline:none;background:var(--background);text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}a.sc-ion-tab-button-md:focus-visible{background:var(--background-focused)}\@media (any-hover:hover){a.sc-ion-tab-button-md:hover{color:var(--color-selected)}}.tab-selected.sc-ion-tab-button-md-h{color:var(--color-selected)}.tab-hidden.sc-ion-tab-button-md-h{display:none!important}.tab-disabled.sc-ion-tab-button-md-h{pointer-events:none;opacity:.4}.sc-ion-tab-button-md-s > ion-label{-ms-flex-order:0;order:0}.sc-ion-tab-button-md-s > ion-icon{-ms-flex-order:-1;order:-1;height:1em}.sc-ion-tab-button-md-s > ion-icon, .sc-ion-tab-button-md-s > ion-label{display:block;-ms-flex-item-align:center;align-self:center;min-width:26px;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-tab-button-md-h.tab-has-label-only .sc-ion-tab-button-md-s > ion-label{white-space:normal}.sc-ion-tab-button-md-s > ion-badge{right:var(--badge-end);padding:1px 6px;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;height:auto;font-size:12px;line-height:16px}.tab-layout-icon-start.sc-ion-tab-button-md-h   a.sc-ion-tab-button-md{-ms-flex-direction:row;flex-direction:row}.tab-layout-icon-end.sc-ion-tab-button-md-h   a.sc-ion-tab-button-md{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.tab-layout-icon-bottom.sc-ion-tab-button-md-h   a.sc-ion-tab-button-md{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.tab-has-icon-only.sc-ion-tab-button-md-h   a.sc-ion-tab-button-md, .tab-has-label-only.sc-ion-tab-button-md-h   a.sc-ion-tab-button-md, .tab-layout-icon-end.sc-ion-tab-button-md-h   a.sc-ion-tab-button-md, .tab-layout-icon-hide.sc-ion-tab-button-md-h   a.sc-ion-tab-button-md, .tab-layout-icon-start.sc-ion-tab-button-md-h   a.sc-ion-tab-button-md, .tab-layout-label-hide.sc-ion-tab-button-md-h   a.sc-ion-tab-button-md{-ms-flex-pack:center;justify-content:center}.sc-ion-tab-button-md-h.tab-layout-icon-hide .sc-ion-tab-button-md-s > ion-icon, .sc-ion-tab-button-md-h.tab-layout-label-hide .sc-ion-tab-button-md-s > ion-label{display:none}.tab-has-icon-only.sc-ion-tab-button-md-h, .tab-layout-icon-bottom.sc-ion-tab-button-md-h, .tab-layout-icon-only.sc-ion-tab-button-md-h, .tab-layout-icon-top.sc-ion-tab-button-md-h, .tab-layout-label-hide.sc-ion-tab-button-md-h{--badge-end:calc(50% - 30px)}.tab-has-label-only.sc-ion-tab-button-md-h, .tab-layout-icon-end.sc-ion-tab-button-md-h, .tab-layout-icon-hide.sc-ion-tab-button-md-h, .tab-layout-icon-start.sc-ion-tab-button-md-h{--badge-end:calc(50% - 50px)}.sc-ion-tab-button-md-h{--padding-top:8px;--padding-end:12px;--padding-bottom:10px;--padding-start:12px;--color:var(--ion-tab-bar-color,var(--ion-text-color-step-400,#666));--color-selected:var(--ion-tab-bar-color-activated,var(--ion-color-primary,#3880ff));--background:transparent;--background-focused:var(--ion-tab-bar-background-focused,#dadada);max-width:168px;font-size:12px;font-weight:400}.sc-ion-tab-button-md-s > ion-label{margin:0;-webkit-transform-origin:center bottom;transform-origin:center bottom;text-transform:none}.sc-ion-tab-button-md-s > .tab-selected -shadowcssslotted(ion-label), .sc-ion-tab-button-md-s > ion-label{-webkit-transition:-webkit-transform .1s ease-in-out;transition:-webkit-transform .1s ease-in-out;transition:transform .1s ease-in-out;transition:transform .1s ease-in-out,-webkit-transform .1s ease-in-out}.sc-ion-tab-button-md-s > .tab-selected -shadowcssslotted(ion-label){-webkit-transform:scale3d(1.16667,1.16667,1);transform:scale3d(1.16667,1.16667,1)}.sc-ion-tab-button-md-s > ion-icon{-webkit-transform-origin:center center;transform-origin:center center;width:22px;height:22px;-webkit-transition:-webkit-transform .1s ease-in-out;transition:-webkit-transform .1s ease-in-out;transition:transform .1s ease-in-out;transition:transform .1s ease-in-out,-webkit-transform .1s ease-in-out;font-size:22px}.sc-ion-tab-button-md-h.tab-layout-icon-top .sc-ion-tab-button-md-s > ion-label{margin-bottom:-2px}.sc-ion-tab-button-md-h.tab-layout-icon-bottom .sc-ion-tab-button-md-s > ion-label{margin-top:-2px}.sc-ion-tab-button-md-h.tab-selected .sc-ion-tab-button-md-s > ion-label{-webkit-transform:scale3d(1.16667,1.16667,1);transform:scale3d(1.16667,1.16667,1)}.sc-ion-tab-button-md-h.tab-selected .sc-ion-tab-button-md-s > ion-icon{-webkit-transform:translate3d(0,-2px,0);transform:translate3d(0,-2px,0)}.sc-ion-tab-button-md-h.tab-layout-icon-end.tab-selected .sc-ion-tab-button-md-s > ion-icon{-webkit-transform:translate3d(6px,0,0);transform:translate3d(6px,0,0)}.sc-ion-tab-button-md-h.tab-layout-icon-bottom.tab-selected .sc-ion-tab-button-md-s > ion-icon{-webkit-transform:translate3d(0,2px,0);transform:translate3d(0,2px,0)}.sc-ion-tab-button-md-h.tab-layout-icon-start.tab-selected .sc-ion-tab-button-md-s > ion-icon{-webkit-transform:translate3d(-6px,0,0);transform:translate3d(-6px,0,0)}"; }
    static get styleMode() { return "md"; }
}

class Tabs {
    constructor() {
        this.transitioning = false;
        this.useRouter = false;
        this.tabs = [];
    }
    async componentWillLoad() {
        this.useRouter = !!this.doc.querySelector('ion-router') && !this.el.closest('[no-router]');
        this.tabs = Array.from(this.el.querySelectorAll('ion-tab'));
        this.ionNavWillLoad.emit();
        this.componentWillUpdate();
    }
    componentDidLoad() {
        this.initSelect();
    }
    componentDidUnload() {
        this.tabs.length = 0;
        this.selectedTab = this.leavingTab = undefined;
    }
    componentWillUpdate() {
        const tabbar = this.el.querySelector('ion-tab-bar');
        if (tabbar) {
            const tab = this.selectedTab ? this.selectedTab.tab : undefined;
            tabbar.selectedTab = tab;
        }
    }
    onTabClicked(ev) {
        const { href, tab } = ev.detail;
        const selectedTab = this.tabs.find(t => t.tab === tab);
        if (this.useRouter && href !== undefined) {
            const router = this.doc.querySelector('ion-router');
            if (router) {
                router.push(href);
            }
        }
        else if (selectedTab) {
            this.select(selectedTab);
        }
    }
    async select(tab) {
        const selectedTab = await this.getTab(tab);
        if (!this.shouldSwitch(selectedTab)) {
            return false;
        }
        await this.setActive(selectedTab);
        await this.notifyRouter();
        this.tabSwitch();
        return true;
    }
    async setRouteId(id) {
        const selectedTab = await this.getTab(id);
        if (!this.shouldSwitch(selectedTab)) {
            return { changed: false, element: this.selectedTab };
        }
        await this.setActive(selectedTab);
        return {
            changed: true,
            element: this.selectedTab,
            markVisible: () => this.tabSwitch(),
        };
    }
    async getRouteId() {
        const tabId = this.selectedTab && this.selectedTab.tab;
        return tabId !== undefined ? { id: tabId, element: this.selectedTab } : undefined;
    }
    async getTab(tab) {
        const tabEl = (typeof tab === 'string')
            ? this.tabs.find(t => t.tab === tab)
            : tab;
        if (!tabEl) {
            console.error(`tab with id: "${tabEl}" does not exist`);
        }
        return tabEl;
    }
    getSelected() {
        return Promise.resolve(this.selectedTab);
    }
    async initSelect() {
        if (this.useRouter) {
            return;
        }
        await Promise.all(this.tabs.map(tab => tab.componentOnReady()));
        await this.select(this.tabs[0]);
    }
    setActive(selectedTab) {
        if (this.transitioning) {
            return Promise.reject('transitioning already happening');
        }
        this.transitioning = true;
        this.leavingTab = this.selectedTab;
        this.selectedTab = selectedTab;
        this.ionNavWillChange.emit();
        return selectedTab.setActive();
    }
    tabSwitch() {
        const selectedTab = this.selectedTab;
        const leavingTab = this.leavingTab;
        this.leavingTab = undefined;
        this.transitioning = false;
        if (!selectedTab) {
            return;
        }
        if (leavingTab !== selectedTab) {
            if (leavingTab) {
                leavingTab.active = false;
            }
            this.ionChange.emit({ tab: selectedTab });
            this.ionNavDidChange.emit();
        }
    }
    notifyRouter() {
        if (this.useRouter) {
            const router = this.doc.querySelector('ion-router');
            if (router) {
                return router.navChanged(1);
            }
        }
        return Promise.resolve(false);
    }
    shouldSwitch(selectedTab) {
        const leavingTab = this.selectedTab;
        return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
    }
    render() {
        return [
            h("slot", { name: "top" }),
            h("div", { class: "tabs-inner" },
                h("slot", null)),
            h("slot", { name: "bottom" })
        ];
    }
    static get is() { return "ion-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "config": {
            "context": "config"
        },
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "getRouteId": {
            "method": true
        },
        "getSelected": {
            "method": true
        },
        "getTab": {
            "method": true
        },
        "select": {
            "method": true
        },
        "selectedTab": {
            "state": true
        },
        "setRouteId": {
            "method": true
        },
        "tabs": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "ionChange",
            "method": "ionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionNavWillLoad",
            "method": "ionNavWillLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionNavWillChange",
            "method": "ionNavWillChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionNavDidChange",
            "method": "ionNavDidChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "ionTabButtonClick",
            "method": "onTabClicked"
        }]; }
    static get style() { return ".sc-ion-tabs-h{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner.sc-ion-tabs, .sc-ion-tabs-h{contain:layout size style}.tabs-inner.sc-ion-tabs{position:relative;-ms-flex:1;flex:1}"; }
}

export { Tab as IonTab, TabBar as IonTabBar, TabButton as IonTabButton, Tabs as IonTabs };
