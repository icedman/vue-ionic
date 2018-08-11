import { isDevice, isHybrid, needInputShims } from '../../utils/platform';
import { createThemedClasses } from '../../utils/theme';
export class App {
    constructor() {
        this.isDevice = false;
    }
    componentWillLoad() {
        this.isDevice = this.config.getBoolean('isDevice', isDevice(this.win));
    }
    componentDidLoad() {
        importTapClick(this.win, this.isDevice);
        importInputShims(this.win, this.config);
        importStatusTap(this.win, this.isDevice, this.queue);
    }
    hostData() {
        const hybrid = isHybrid(this.win);
        const statusbarPadding = this.config.get('statusbarPadding', hybrid);
        return {
            class: Object.assign({}, createThemedClasses(this.mode, 'app'), { 'is-device': this.isDevice, 'is-hydrid': hybrid, 'statusbar-padding': statusbarPadding })
        };
    }
    static get is() { return "ion-app"; }
    static get properties() { return {
        "config": {
            "context": "config"
        },
        "el": {
            "elementRef": true
        },
        "queue": {
            "context": "queue"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get style() { return "/**style-placeholder:ion-app:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-app:**/"; }
}
async function importStatusTap(win, device, queue) {
    if (device) {
        (await import('../../utils/status-tap')).startStatusTap(win, queue);
    }
}
async function importTapClick(win, device) {
    if (device) {
        (await import('../../utils/tap-click')).startTapClick(win.document);
    }
}
async function importInputShims(win, config) {
    const inputShims = config.getBoolean('inputShims', needInputShims(win));
    if (inputShims) {
        (await import('../../utils/input-shims/input-shims')).startInputShims(win.document, config);
    }
}
