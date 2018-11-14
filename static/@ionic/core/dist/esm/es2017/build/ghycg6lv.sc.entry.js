/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { b as dismiss, c as eventMethod, e as present, f as createOverlay, g as dismissOverlay, h as getOverlay } from './chunk-2994e275.js';
import { h as createColorClasses, g as getClassMap } from './chunk-b9ec67ac.js';

function iosEnterAnimation(AnimationC, baseEl, position) {
    const baseAnimation = new AnimationC();
    const wrapperAnimation = new AnimationC();
    const wrapperEle = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
    const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '-100%', top);
            break;
        case 'middle':
            const topPosition = Math.floor(baseEl.clientHeight / 2 - wrapperEle.clientHeight / 2);
            wrapperEle.style.top = `${topPosition}px`;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperAnimation.fromTo('translateY', '100%', bottom);
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.155,1.105,.295,1.12)')
        .duration(400)
        .add(wrapperAnimation));
}

function iosLeaveAnimation(AnimationC, baseEl, position) {
    const baseAnimation = new AnimationC();
    const wrapperAnimation = new AnimationC();
    const wrapperEle = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
    const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', top, '-100%');
            break;
        case 'middle':
            wrapperAnimation.fromTo('opacity', 0.99, 0);
            break;
        default:
            wrapperAnimation.fromTo('translateY', bottom, '100%');
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .add(wrapperAnimation));
}

function mdEnterAnimation(AnimationC, baseEl, position) {
    const baseAnimation = new AnimationC();
    const wrapperAnimation = new AnimationC();
    const wrapperEle = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '-100%', '0%');
            break;
        case 'middle':
            const topPosition = Math.floor(baseEl.clientHeight / 2 - wrapperEle.clientHeight / 2);
            wrapperEle.style.top = `${topPosition}px`;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperAnimation.fromTo('translateY', '100%', '0%');
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(wrapperAnimation));
}

function mdLeaveAnimation(AnimationC, baseEl, position) {
    const baseAnimation = new AnimationC();
    const wrapperAnimation = new AnimationC();
    const wrapperEle = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '0px', '-100%');
            break;
        case 'middle':
            wrapperAnimation.fromTo('opacity', 0.99, 0);
            break;
        default:
            wrapperAnimation.fromTo('translateY', `0px`, '100%');
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .add(wrapperAnimation));
}

class Toast {
    constructor() {
        this.presented = false;
        this.duration = 0;
        this.keyboardClose = false;
        this.position = 'bottom';
        this.showCloseButton = false;
        this.translucent = false;
        this.animated = true;
    }
    componentDidLoad() {
        this.ionToastDidLoad.emit();
    }
    componentDidUnload() {
        this.ionToastDidUnload.emit();
    }
    async present() {
        await present(this, 'toastEnter', iosEnterAnimation, mdEnterAnimation, this.position);
        if (this.duration > 0) {
            this.durationTimeout = setTimeout(() => this.dismiss(undefined, 'timeout'), this.duration);
        }
    }
    dismiss(data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return dismiss(this, data, role, 'toastLeave', iosLeaveAnimation, mdLeaveAnimation, this.position);
    }
    onDidDismiss() {
        return eventMethod(this.el, 'ionToastDidDismiss');
    }
    onWillDismiss() {
        return eventMethod(this.el, 'ionToastWillDismiss');
    }
    hostData() {
        return {
            style: {
                zIndex: 60000 + this.overlayIndex,
            },
            class: Object.assign({}, createColorClasses(this.color), getClassMap(this.cssClass), { 'toast-translucent': this.translucent })
        };
    }
    render() {
        const wrapperClass = {
            'toast-wrapper': true,
            [`toast-${this.position}`]: true
        };
        return (h("div", { class: wrapperClass },
            h("div", { class: "toast-container" },
                this.message !== undefined &&
                    h("div", { class: "toast-message" }, this.message),
                this.showCloseButton &&
                    h("ion-button", { fill: "clear", "ion-activatable": true, class: "toast-button", onClick: () => this.dismiss(undefined, 'cancel') }, this.closeButtonText || 'Close'))));
    }
    static get is() { return "ion-toast"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "animated": {
            "type": Boolean,
            "attr": "animated"
        },
        "animationCtrl": {
            "connect": "ion-animation-controller"
        },
        "closeButtonText": {
            "type": String,
            "attr": "close-button-text"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "config": {
            "context": "config"
        },
        "cssClass": {
            "type": String,
            "attr": "css-class"
        },
        "dismiss": {
            "method": true
        },
        "duration": {
            "type": Number,
            "attr": "duration"
        },
        "el": {
            "elementRef": true
        },
        "enterAnimation": {
            "type": "Any",
            "attr": "enter-animation"
        },
        "keyboardClose": {
            "type": Boolean,
            "attr": "keyboard-close"
        },
        "leaveAnimation": {
            "type": "Any",
            "attr": "leave-animation"
        },
        "message": {
            "type": String,
            "attr": "message"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "onDidDismiss": {
            "method": true
        },
        "onWillDismiss": {
            "method": true
        },
        "overlayIndex": {
            "type": Number,
            "attr": "overlay-index"
        },
        "position": {
            "type": String,
            "attr": "position"
        },
        "present": {
            "method": true
        },
        "showCloseButton": {
            "type": Boolean,
            "attr": "show-close-button"
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        }
    }; }
    static get events() { return [{
            "name": "ionToastDidLoad",
            "method": "ionToastDidLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionToastDidPresent",
            "method": "didPresent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionToastWillPresent",
            "method": "willPresent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionToastWillDismiss",
            "method": "willDismiss",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionToastDidDismiss",
            "method": "didDismiss",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionToastDidUnload",
            "method": "ionToastDidUnload",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-ion-toast-md-h{--button-color:inherit;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}.ion-color.sc-ion-toast-md-h{--color:var(--ion-color-contrast);--background:var(--ion-color-base);--button-color:inherit}.toast-wrapper.sc-ion-toast-md{background:var(--background)}.toast-wrapper.toast-top.sc-ion-toast-md{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-bottom.sc-ion-toast-md{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-container.sc-ion-toast-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button.sc-ion-toast-md{color:var(--button-color);font-size:15px}.toast-message.sc-ion-toast-md{-ms-flex:1;flex:1}.sc-ion-toast-md-h{--background:var(--ion-text-color-step-150,#262626);--color:var(--ion-background-color,#fff);font-size:15px}.toast-wrapper.sc-ion-toast-md{left:0;right:0;margin:auto;display:block;position:absolute;width:100%;max-width:700px;z-index:10}.toast-wrapper.toast-top.sc-ion-toast-md{padding-top:var(--ion-safe-area-top,0)}.toast-wrapper.toast-bottom.sc-ion-toast-md{padding-bottom:var(--ion-safe-area-bottom,0)}.toast-wrapper.toast-middle.sc-ion-toast-md{opacity:.01}.toast-message.sc-ion-toast-md{padding:19px 16px 17px}"; }
    static get styleMode() { return "md"; }
}

class ToastController {
    create(opts) {
        return createOverlay(this.doc.createElement('ion-toast'), opts);
    }
    dismiss(data, role, id) {
        return dismissOverlay(this.doc, data, role, 'ion-toast', id);
    }
    async getTop() {
        return getOverlay(this.doc, 'ion-toast');
    }
    static get is() { return "ion-toast-controller"; }
    static get properties() { return {
        "create": {
            "method": true
        },
        "dismiss": {
            "method": true
        },
        "doc": {
            "context": "document"
        },
        "getTop": {
            "method": true
        }
    }; }
}

export { Toast as IonToast, ToastController as IonToastController };
