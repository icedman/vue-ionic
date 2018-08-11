import { attachComponent } from '../../utils/framework-delegate';
export class Tab {
    constructor() {
        this.loaded = false;
        /**
         * If true, sets the tab as the active tab.
         */
        this.active = false;
        /**
         * If true, the user cannot interact with the tab. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * If true, the tab will be selected. Defaults to `false`.
         */
        this.selected = false;
        /**
         * If true, the tab button is visible within the tabbar. Defaults to `true`.
         */
        this.show = true;
        /**
         * If true, hide the tabs on child pages.
         */
        this.tabsHideOnSubPages = false;
    }
    selectedChanged(selected) {
        if (selected) {
            this.ionSelect.emit();
        }
    }
    componentWillLoad() {
        if (false) {
            if (this.component && this.el.childElementCount > 0) {
                console.error('You can not use a lazy-loaded component in a tab and inlined content at the same time.' +
                    `- Remove the component attribute in: <ion-tab component="${this.component}">` +
                    ` or` +
                    `- Remove the embedded content inside the ion-tab: <ion-tab></ion-tab>`);
            }
        }
    }
    onPropChanged() {
        this.ionTabMutated.emit();
    }
    /** Get the Id for the tab */
    getTabId() {
        if (this.name) {
            return this.name;
        }
        if (typeof this.component === 'string') {
            return this.component;
        }
        return null;
    }
    /** Set the active component for the tab */
    async setActive() {
        await this.prepareLazyLoaded();
        this.active = true;
    }
    prepareLazyLoaded() {
        if (!this.loaded && this.component) {
            this.loaded = true;
            return attachComponent(this.delegate, this.el, this.component, ['ion-page']);
        }
        return Promise.resolve();
    }
    hostData() {
        const { btnId, active, component } = this;
        return {
            'aria-labelledby': btnId,
            'aria-hidden': !active ? 'true' : null,
            'role': 'tabpanel',
            'class': {
                'ion-page': !component,
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
        "badge": {
            "type": String,
            "attr": "badge",
            "watchCallbacks": ["onPropChanged"]
        },
        "badgeColor": {
            "type": String,
            "attr": "badge-color",
            "watchCallbacks": ["onPropChanged"]
        },
        "btnId": {
            "type": String,
            "attr": "btn-id"
        },
        "component": {
            "type": String,
            "attr": "component"
        },
        "delegate": {
            "type": "Any",
            "attr": "delegate"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["onPropChanged"]
        },
        "el": {
            "elementRef": true
        },
        "getTabId": {
            "method": true
        },
        "href": {
            "type": String,
            "attr": "href",
            "watchCallbacks": ["onPropChanged"]
        },
        "icon": {
            "type": String,
            "attr": "icon",
            "watchCallbacks": ["onPropChanged"]
        },
        "label": {
            "type": String,
            "attr": "label",
            "watchCallbacks": ["onPropChanged"]
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "selected": {
            "type": Boolean,
            "attr": "selected",
            "watchCallbacks": ["selectedChanged"]
        },
        "setActive": {
            "method": true
        },
        "show": {
            "type": Boolean,
            "attr": "show",
            "watchCallbacks": ["onPropChanged"]
        },
        "tabsHideOnSubPages": {
            "type": Boolean,
            "attr": "tabs-hide-on-sub-pages"
        }
    }; }
    static get events() { return [{
            "name": "ionSelect",
            "method": "ionSelect",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionTabMutated",
            "method": "ionTabMutated",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ion-tab:**/"; }
}
