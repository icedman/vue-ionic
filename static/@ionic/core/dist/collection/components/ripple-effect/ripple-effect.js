import { now } from '../../utils/helpers';
export class RippleEffect {
    constructor() {
        this.lastClick = -10000;
        this.parent = 'parent';
        /** If true, the ripple effect will listen to any click events and animate */
        this.tapClick = false;
    }
    tapClickChanged(tapClick) {
        this.enableListener(this, 'ionActivated', tapClick, this.parent);
        this.enableListener(this, 'touchstart', !tapClick);
        this.enableListener(this, 'mousedown', !tapClick);
    }
    ionActivated(ev) {
        this.addRipple(ev.detail.x, ev.detail.y);
    }
    touchStart(ev) {
        this.lastClick = now(ev);
        const touches = ev.touches[0];
        this.addRipple(touches.clientX, touches.clientY);
    }
    mouseDown(ev) {
        const timeStamp = now(ev);
        if (this.lastClick < (timeStamp - 1000)) {
            this.addRipple(ev.pageX, ev.pageY);
        }
    }
    componentDidLoad() {
        this.tapClickChanged(this.tapClick);
    }
    /**
     * Adds the ripple effect to the parent elment
     */
    addRipple(pageX, pageY) {
        let x;
        let y;
        let size;
        this.queue.read(() => {
            const rect = this.el.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            size = Math.min(Math.sqrt(width * width + height * height) * 2, MAX_RIPPLE_DIAMETER);
            x = pageX - rect.left - (size / 2);
            y = pageY - rect.top - (size / 2);
        });
        this.queue.write(() => {
            const div = this.doc.createElement('div');
            div.classList.add('ripple-effect');
            const style = div.style;
            const duration = Math.max(RIPPLE_FACTOR * Math.sqrt(size), MIN_RIPPLE_DURATION);
            style.top = y + 'px';
            style.left = x + 'px';
            style.width = size + 'px';
            style.height = size + 'px';
            style.animationDuration = duration + 'ms';
            const container = this.el.shadowRoot || this.el;
            container.appendChild(div);
            setTimeout(() => div.remove(), duration + 50);
        });
    }
    render() {
        return null;
    }
    static get is() { return "ion-ripple-effect"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "addRipple": {
            "method": true
        },
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "enableListener": {
            "context": "enableListener"
        },
        "parent": {
            "type": String,
            "attr": "parent"
        },
        "queue": {
            "context": "queue"
        },
        "tapClick": {
            "type": Boolean,
            "attr": "tap-click",
            "watchCallbacks": ["tapClickChanged"]
        }
    }; }
    static get listeners() { return [{
            "name": "ionActivated",
            "method": "ionActivated",
            "disabled": true
        }, {
            "name": "touchstart",
            "method": "touchStart",
            "disabled": true,
            "passive": true
        }, {
            "name": "mousedown",
            "method": "mouseDown",
            "disabled": true,
            "passive": true
        }]; }
    static get style() { return "/**style-placeholder:ion-ripple-effect:**/"; }
}
const RIPPLE_FACTOR = 35;
const MIN_RIPPLE_DURATION = 260;
const MAX_RIPPLE_DIAMETER = 550;
