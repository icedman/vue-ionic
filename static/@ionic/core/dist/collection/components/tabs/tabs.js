export class Tabs {
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
    static get style() { return "/**style-placeholder:ion-tabs:**/"; }
}
