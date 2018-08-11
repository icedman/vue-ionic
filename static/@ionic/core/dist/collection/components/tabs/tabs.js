import { createColorClasses } from '../../utils/theme';
export class Tabs {
    constructor() {
        this.ids = -1;
        this.transitioning = false;
        this.tabsId = (++tabIds);
        this.tabs = [];
        /**
         * If true, the tabbar will be hidden. Defaults to `false`.
         */
        this.tabbarHidden = false;
        /**
         * If true, the tabs will be translucent.
         * Note: In order to scroll content behind the tabs, the `fullscreen`
         * attribute needs to be set on the content.
         * Defaults to `false`.
         */
        this.translucent = false;
        /**
         * If true, the tabs will be scrollable when there are enough tabs to overflow the width of the screen.
         */
        this.scrollable = false;
        /**
         * If true, the tabs will use the router and `selectedTab` will not do anything.
         */
        this.useRouter = false;
    }
    componentWillLoad() {
        if (!this.useRouter) {
            this.useRouter = !!this.doc.querySelector('ion-router') && !this.el.closest('[no-router]');
        }
        this.loadConfig('tabbarLayout', 'bottom');
        this.loadConfig('tabbarLayout', 'icon-top');
        this.loadConfig('tabbarHighlight', false);
        this.initTabs();
        this.ionNavWillLoad.emit();
    }
    async componentDidLoad() {
        await this.initSelect();
    }
    componentDidUnload() {
        this.tabs.length = 0;
        this.selectedTab = this.leavingTab = undefined;
    }
    onTabMutated() {
        this.el.forceUpdate();
    }
    onTabClicked(ev) {
        const selectedTab = ev.detail;
        if (this.useRouter && selectedTab.href != null) {
            const router = this.doc.querySelector('ion-router');
            if (router) {
                router.push(selectedTab.href);
            }
            return;
        }
        this.select(selectedTab);
    }
    /**
     * Index or the Tab instance, of the tab to select.
     */
    async select(tabOrIndex) {
        const selectedTab = this.getTab(tabOrIndex);
        if (!this.shouldSwitch(selectedTab)) {
            return false;
        }
        await this.setActive(selectedTab);
        await this.notifyRouter();
        this.tabSwitch();
        return true;
    }
    /** @hidden */
    async setRouteId(id) {
        const selectedTab = this.getTab(id);
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
    /** @hidden */
    getRouteId() {
        const id = this.selectedTab && this.selectedTab.getTabId();
        return id ? { id, element: this.selectedTab } : undefined;
    }
    /** Get the tab at the given index */
    getTab(tabOrIndex) {
        if (typeof tabOrIndex === 'string') {
            return this.tabs.find(tab => tab.getTabId() === tabOrIndex);
        }
        if (typeof tabOrIndex === 'number') {
            return this.tabs[tabOrIndex];
        }
        return tabOrIndex;
    }
    /**
     * Get the currently selected tab
     */
    getSelected() {
        return this.selectedTab;
    }
    initTabs() {
        const tabs = this.tabs = Array.from(this.el.querySelectorAll('ion-tab'));
        tabs.forEach(tab => {
            const id = `t-${this.tabsId}-${++this.ids}`;
            tab.btnId = 'tab-' + id;
            tab.id = 'tabpanel-' + id;
        });
    }
    async initSelect() {
        const tabs = this.tabs;
        if (this.useRouter) {
            if (false) {
                const tab = tabs.find(t => t.selected);
                if (tab) {
                    console.warn('When using a router (ion-router) <ion-tab selected="true"> makes no difference' +
                        'Define routes properly the define which tab is selected');
                }
            }
            return;
        }
        // find pre-selected tabs
        const selectedTab = tabs.find(t => t.selected) ||
            tabs.find(t => t.show && !t.disabled);
        // reset all tabs none is selected
        for (const tab of tabs) {
            if (tab !== selectedTab) {
                tab.selected = false;
            }
        }
        if (selectedTab) {
            await selectedTab.setActive();
        }
        this.selectedTab = selectedTab;
        if (selectedTab) {
            selectedTab.selected = true;
            selectedTab.active = true;
        }
    }
    loadConfig(attrKey, fallback) {
        const val = this[attrKey];
        if (typeof val === 'undefined') {
            this[attrKey] = this.config.get(attrKey, fallback);
        }
    }
    setActive(selectedTab) {
        if (this.transitioning) {
            return Promise.reject('transitioning already happening');
        }
        if (!selectedTab) {
            return Promise.reject('no tab is selected');
        }
        // Reset rest of tabs
        for (const tab of this.tabs) {
            if (selectedTab !== tab) {
                tab.selected = false;
            }
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
        selectedTab.selected = true;
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
        return !!(selectedTab && selectedTab !== leavingTab && !this.transitioning);
    }
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    render() {
        const dom = [
            h("div", { class: "tabs-inner" },
                h("slot", null))
        ];
        if (!this.tabbarHidden) {
            dom.push(h("ion-tabbar", { tabs: this.tabs.slice(), color: this.color, selectedTab: this.selectedTab, highlight: this.tabbarHighlight, placement: this.tabbarPlacement, layout: this.tabbarLayout, translucent: this.translucent, scrollable: this.scrollable }));
        }
        return dom;
    }
    static get is() { return "ion-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
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
        "name": {
            "type": String,
            "attr": "name"
        },
        "scrollable": {
            "type": Boolean,
            "attr": "scrollable"
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
        "tabbarHidden": {
            "type": Boolean,
            "attr": "tabbar-hidden"
        },
        "tabbarHighlight": {
            "type": Boolean,
            "attr": "tabbar-highlight",
            "mutable": true
        },
        "tabbarLayout": {
            "type": String,
            "attr": "tabbar-layout",
            "mutable": true
        },
        "tabbarPlacement": {
            "type": String,
            "attr": "tabbar-placement",
            "mutable": true
        },
        "tabs": {
            "state": true
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        },
        "useRouter": {
            "type": Boolean,
            "attr": "use-router",
            "mutable": true
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
            "name": "ionTabMutated",
            "method": "onTabMutated"
        }, {
            "name": "ionTabbarClick",
            "method": "onTabClicked"
        }]; }
    static get style() { return "/**style-placeholder:ion-tabs:**/"; }
}
let tabIds = -1;
