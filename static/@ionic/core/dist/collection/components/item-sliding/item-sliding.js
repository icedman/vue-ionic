const SWIPE_MARGIN = 30;
const ELASTIC_FACTOR = 0.55;
export class ItemSliding {
    constructor() {
        this.item = null;
        this.list = null;
        this.openAmount = 0;
        this.initialOpenAmount = 0;
        this.optsWidthRightSide = 0;
        this.optsWidthLeftSide = 0;
        this.sides = 0 /* None */;
        this.optsDirty = true;
        this.state = 2 /* Disabled */;
    }
    async componentDidLoad() {
        this.item = this.el.querySelector('ion-item');
        this.list = this.el.closest('ion-list');
        this.updateOptions();
        this.gesture = (await import('../../utils/gesture/gesture')).create({
            el: this.el,
            queue: this.queue,
            gestureName: 'item-swipe',
            gesturePriority: -10,
            threshold: 5,
            canStart: this.canStart.bind(this),
            onStart: this.onDragStart.bind(this),
            onMove: this.onDragMove.bind(this),
            onEnd: this.onDragEnd.bind(this),
        });
        this.gesture.disabled = false;
    }
    componentDidUnload() {
        if (this.gesture) {
            this.gesture.destroy();
        }
        this.item = this.list = null;
        this.leftOptions = this.rightOptions = undefined;
    }
    /**
     * Get the amount the item is open in pixels.
     */
    getOpenAmount() {
        return this.openAmount;
    }
    /**
     * Get the ratio of the open amount of the item compared to the width of the options.
     * If the number returned is positive, then the options on the right side are open.
     * If the number returned is negative, then the options on the left side are open.
     * If the absolute value of the number is greater than 1, the item is open more than
     * the width of the options.
     */
    getSlidingRatio() {
        if (this.openAmount > 0) {
            return this.openAmount / this.optsWidthRightSide;
        }
        else if (this.openAmount < 0) {
            return this.openAmount / this.optsWidthLeftSide;
        }
        else {
            return 0;
        }
    }
    /**
     * Close the sliding item. Items can also be closed from the [List](../../list/List).
     */
    close() {
        this.setOpenAmount(0, true);
    }
    /**
     * Close all of the sliding items in the list. Items can also be closed from the [List](../../list/List).
     */
    closeOpened() {
        return !!(this.list && this.list.closeSlidingItems());
    }
    updateOptions() {
        const options = this.el.querySelectorAll('ion-item-options');
        let sides = 0;
        // Reset left and right options in case they were removed
        this.leftOptions = this.rightOptions = undefined;
        for (let i = 0; i < options.length; i++) {
            const option = options.item(i);
            if (option.isEndSide()) {
                this.rightOptions = option;
                sides |= 2 /* End */;
            }
            else {
                this.leftOptions = option;
                sides |= 1 /* Start */;
            }
        }
        this.optsDirty = true;
        this.sides = sides;
    }
    canStart() {
        const selected = this.list && this.list.getOpenItem();
        if (selected && selected !== this.el) {
            this.closeOpened();
            return false;
        }
        return true;
    }
    onDragStart() {
        if (this.list) {
            this.list.setOpenItem(this.el);
        }
        if (this.tmr) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (this.openAmount === 0) {
            this.optsDirty = true;
            this.state = 4 /* Enabled */;
        }
        this.initialOpenAmount = this.openAmount;
        if (this.item) {
            this.item.style.transition = 'none';
        }
    }
    onDragMove(gesture) {
        if (this.optsDirty) {
            this.calculateOptsWidth();
        }
        let openAmount = this.initialOpenAmount - gesture.deltaX;
        switch (this.sides) {
            case 2 /* End */:
                openAmount = Math.max(0, openAmount);
                break;
            case 1 /* Start */:
                openAmount = Math.min(0, openAmount);
                break;
            case 3 /* Both */: break;
            case 0 /* None */: return;
            default:
                console.warn('invalid ItemSideFlags value', this.sides);
                break;
        }
        let optsWidth;
        if (openAmount > this.optsWidthRightSide) {
            optsWidth = this.optsWidthRightSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        else if (openAmount < -this.optsWidthLeftSide) {
            optsWidth = -this.optsWidthLeftSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        this.setOpenAmount(openAmount, false);
    }
    onDragEnd(gesture) {
        const velocity = gesture.velocityX;
        let restingPoint = (this.openAmount > 0)
            ? this.optsWidthRightSide
            : -this.optsWidthLeftSide;
        // Check if the drag didn't clear the buttons mid-point
        // and we aren't moving fast enough to swipe open
        const isResetDirection = (this.openAmount > 0) === !(velocity < 0);
        const isMovingFast = Math.abs(velocity) > 0.3;
        const isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
        if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
            restingPoint = 0;
        }
        this.setOpenAmount(restingPoint, true);
        if (this.state & 32 /* SwipeEnd */ && this.rightOptions) {
            this.rightOptions.fireSwipeEvent();
        }
        else if (this.state & 64 /* SwipeStart */ && this.leftOptions) {
            this.leftOptions.fireSwipeEvent();
        }
    }
    calculateOptsWidth() {
        this.optsWidthRightSide = 0;
        if (this.rightOptions) {
            this.optsWidthRightSide = this.rightOptions.width();
        }
        this.optsWidthLeftSide = 0;
        if (this.leftOptions) {
            this.optsWidthLeftSide = this.leftOptions.width();
        }
        this.optsDirty = false;
    }
    setOpenAmount(openAmount, isFinal) {
        if (this.tmr) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (!this.item) {
            return;
        }
        const style = this.item.style;
        this.openAmount = openAmount;
        if (isFinal) {
            style.transition = '';
        }
        if (openAmount > 0) {
            this.state = (openAmount >= (this.optsWidthRightSide + SWIPE_MARGIN))
                ? 8 /* End */ | 32 /* SwipeEnd */
                : 8 /* End */;
        }
        else if (openAmount < 0) {
            this.state = (openAmount <= (-this.optsWidthLeftSide - SWIPE_MARGIN))
                ? 16 /* Start */ | 64 /* SwipeStart */
                : 16 /* Start */;
        }
        else {
            this.tmr = window.setTimeout(() => {
                this.state = 2 /* Disabled */;
                this.tmr = undefined;
            }, 600);
            if (this.list) {
                this.list.setOpenItem(undefined);
            }
            style.transform = '';
            return;
        }
        style.transform = `translate3d(${-openAmount}px,0,0)`;
        this.ionDrag.emit({
            amount: openAmount
        });
    }
    hostData() {
        return {
            class: {
                'item-sliding': true,
                'item-sliding-active-slide': (this.state !== 2 /* Disabled */),
                'item-sliding-active-options-end': !!(this.state & 8 /* End */),
                'item-sliding-active-options-start': !!(this.state & 16 /* Start */),
                'item-sliding-active-swipe-end': !!(this.state & 32 /* SwipeEnd */),
                'item-sliding-active-swipe-start': !!(this.state & 64 /* SwipeStart */)
            }
        };
    }
    static get is() { return "ion-item-sliding"; }
    static get properties() { return {
        "close": {
            "method": true
        },
        "closeOpened": {
            "method": true
        },
        "el": {
            "elementRef": true
        },
        "getOpenAmount": {
            "method": true
        },
        "getSlidingRatio": {
            "method": true
        },
        "queue": {
            "context": "queue"
        },
        "state": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "ionDrag",
            "method": "ionDrag",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ion-item-sliding:**/"; }
}
/** @hidden */
export function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
    // The logic required to know when the sliding item should close (openAmount=0)
    // depends on three booleans (isCloseDirection, isMovingFast, isOnCloseZone)
    // and it ended up being too complicated to be written manually without errors
    // so the truth table is attached below: (0=false, 1=true)
    // isCloseDirection | isMovingFast | isOnCloseZone || shouldClose
    //         0        |       0      |       0       ||    0
    //         0        |       0      |       1       ||    1
    //         0        |       1      |       0       ||    0
    //         0        |       1      |       1       ||    0
    //         1        |       0      |       0       ||    0
    //         1        |       0      |       1       ||    1
    //         1        |       1      |       0       ||    1
    //         1        |       1      |       1       ||    1
    // The resulting expression was generated by resolving the K-map (Karnaugh map):
    return (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
}
