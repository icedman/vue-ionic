/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { a as rIC } from './chunk-c23403d0.js';

class RippleEffect {
    addRipple(pageX, pageY) {
        if (this.config.getBoolean('animated', true)) {
            rIC(() => this.prepareRipple(pageX, pageY));
        }
    }
    prepareRipple(pageX, pageY) {
        let x;
        let y;
        let size;
        this.queue.read(() => {
            const rect = this.el.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            size = Math.min(Math.sqrt(width * width + height * height) * 2, MAX_RIPPLE_DIAMETER);
            x = pageX - rect.left - (size * 0.5);
            y = pageY - rect.top - (size * 0.5);
        });
        this.queue.write(() => {
            const div = this.win.document.createElement('div');
            div.classList.add('ripple-effect');
            const style = div.style;
            const duration = Math.max(RIPPLE_FACTOR * Math.sqrt(size), MIN_RIPPLE_DURATION);
            style.top = y + 'px';
            style.left = x + 'px';
            style.width = style.height = size + 'px';
            style.animationDuration = duration + 'ms';
            const container = this.el.shadowRoot || this.el;
            container.appendChild(div);
            setTimeout(() => div.remove(), duration + 50);
        });
    }
    static get is() { return "ion-ripple-effect"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "addRipple": {
            "method": true
        },
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
    static get style() { return ".sc-ion-ripple-effect-h{left:0;right:0;top:0;bottom:0}.ripple-effect.sc-ion-ripple-effect, .sc-ion-ripple-effect-h{position:absolute;contain:strict}.ripple-effect.sc-ion-ripple-effect{border-radius:50%;background-color:currentColor;color:inherit;opacity:0;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;will-change:transform,opacity;pointer-events:none}\@-webkit-keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}\@keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"; }
}
const RIPPLE_FACTOR = 35;
const MIN_RIPPLE_DURATION = 260;
const MAX_RIPPLE_DIAMETER = 550;

export { RippleEffect as IonRippleEffect };
