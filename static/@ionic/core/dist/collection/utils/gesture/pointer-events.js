import { addEventListener } from './listener';
const MOUSE_WAIT = 2000;
export class PointerEvents {
    constructor(el, pointerDown, pointerMove, pointerUp, options) {
        this.el = el;
        this.pointerDown = pointerDown;
        this.pointerMove = pointerMove;
        this.pointerUp = pointerUp;
        this.options = options;
        this.lastTouchEvent = 0;
        this.bindTouchEnd = this.handleTouchEnd.bind(this);
        this.bindMouseUp = this.handleMouseUp.bind(this);
    }
    set disabled(disabled) {
        if (disabled) {
            if (this.rmTouchStart) {
                this.rmTouchStart();
            }
            if (this.rmMouseStart) {
                this.rmMouseStart();
            }
            this.rmTouchStart = this.rmMouseStart = undefined;
            this.stop();
        }
        else {
            if (!this.rmTouchStart) {
                this.rmTouchStart = addEventListener(this.el, 'touchstart', this.handleTouchStart.bind(this), this.options);
            }
            if (!this.rmMouseStart) {
                this.rmMouseStart = addEventListener(this.el, 'mousedown', this.handleMouseDown.bind(this), this.options);
            }
        }
    }
    stop() {
        this.stopTouch();
        this.stopMouse();
    }
    destroy() {
        this.disabled = true;
        this.pointerUp = this.pointerMove = this.pointerDown = undefined;
    }
    handleTouchStart(ev) {
        this.lastTouchEvent = Date.now() + MOUSE_WAIT;
        if (!this.pointerDown(ev, POINTER_EVENT_TYPE_TOUCH)) {
            return;
        }
        if (!this.rmTouchMove && this.pointerMove) {
            this.rmTouchMove = addEventListener(this.el, 'touchmove', this.pointerMove, this.options);
        }
        if (!this.rmTouchEnd) {
            this.rmTouchEnd = addEventListener(this.el, 'touchend', this.bindTouchEnd, this.options);
        }
        if (!this.rmTouchCancel) {
            this.rmTouchCancel = addEventListener(this.el, 'touchcancel', this.bindTouchEnd, this.options);
        }
    }
    handleMouseDown(ev) {
        if (this.lastTouchEvent > Date.now()) {
            console.debug('mousedown event dropped because of previous touch');
            return;
        }
        if (!this.pointerDown(ev, POINTER_EVENT_TYPE_MOUSE)) {
            return;
        }
        if (!this.rmMouseMove && this.pointerMove) {
            this.rmMouseMove = addEventListener(getDocument(this.el), 'mousemove', this.pointerMove, this.options);
        }
        if (!this.rmMouseUp) {
            this.rmMouseUp = addEventListener(getDocument(this.el), 'mouseup', this.bindMouseUp, this.options);
        }
    }
    handleTouchEnd(ev) {
        this.stopTouch();
        if (this.pointerUp) {
            this.pointerUp(ev, POINTER_EVENT_TYPE_TOUCH);
        }
    }
    handleMouseUp(ev) {
        this.stopMouse();
        if (this.pointerUp) {
            this.pointerUp(ev, POINTER_EVENT_TYPE_MOUSE);
        }
    }
    stopTouch() {
        if (this.rmTouchMove) {
            this.rmTouchMove();
        }
        if (this.rmTouchEnd) {
            this.rmTouchEnd();
        }
        if (this.rmTouchCancel) {
            this.rmTouchCancel();
        }
        this.rmTouchMove = this.rmTouchEnd = this.rmTouchCancel = undefined;
    }
    stopMouse() {
        if (this.rmMouseMove) {
            this.rmMouseMove();
        }
        if (this.rmMouseUp) {
            this.rmMouseUp();
        }
        this.rmMouseMove = this.rmMouseUp = undefined;
    }
}
function getDocument(node) {
    return node instanceof Document ? node : node.ownerDocument;
}
export const POINTER_EVENT_TYPE_MOUSE = 1;
export const POINTER_EVENT_TYPE_TOUCH = 2;
