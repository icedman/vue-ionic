import { attachComponent } from '../../utils/framework-delegate';
export class Tab {
    constructor() {
        this.loaded = false;
        this.active = false;
    }
    componentWillLoad() {
        if (Build.isDev) {
            if (this.component !== undefined && this.el.childElementCount > 0) {
                console.error('You can not use a lazy-loaded component in a tab and inlined content at the same time.' +
                    `- Remove the component attribute in: <ion-tab component="${this.component}">` +
                    ` or` +
                    `- Remove the embedded content inside the ion-tab: <ion-tab></ion-tab>`);
            }
            if (this.tab === undefined) {
                console.error(`Tab views need to have an unique id attribute:
  <ion-tab tab="my-unique-id">`);
            }
        }
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
    static get style() { return "/**style-placeholder:ion-tab:**/"; }
}
