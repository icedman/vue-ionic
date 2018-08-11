import { createThemedClasses } from '../../utils/theme.js';
import { Swiper } from './vendor/swiper.js';
export class Slides {
    constructor() {
        /**
         * If true, show the pagination. Defaults to `false`.
         */
        this.pager = false;
        /**
         * If true, show the scrollbar. Defaults to `false`.
         */
        this.scrollbar = false;
    }
    updateSwiperOptions() {
        const newOptions = this.normalizeOptions();
        this.swiper.params = Object.assign({}, this.swiper.params, newOptions);
        this.update();
    }
    componentDidLoad() {
        setTimeout(this.initSlides.bind(this), 10);
    }
    componentDidUnload() {
        this.swiper.destroy(true, true);
    }
    initSlides() {
        this.container = (this.el.shadowRoot || this.el).querySelector('.swiper-container');
        const finalOptions = this.normalizeOptions();
        // init swiper core
        this.swiper = new Swiper(this.container, finalOptions);
    }
    /**
     * Update the underlying slider implementation. Call this if you've added or removed
     * child slides.
     */
    update() {
        this.swiper.update();
    }
    /**
     * Transition to the specified slide.
     */
    slideTo(index, speed, runCallbacks) {
        this.swiper.slideTo(index, speed, runCallbacks);
    }
    /**
     * Transition to the next slide.
     */
    slideNext(speed, runCallbacks) {
        this.swiper.slideNext(runCallbacks, speed);
    }
    /**
     * Transition to the previous slide.
     */
    slidePrev(speed, runCallbacks) {
        this.swiper.slidePrev(runCallbacks, speed);
    }
    /**
     * Get the index of the active slide.
     */
    getActiveIndex() {
        return this.swiper.activeIndex;
    }
    /**
     * Get the index of the previous slide.
     */
    getPreviousIndex() {
        return this.swiper.previousIndex;
    }
    /**
     * Get the total number of slides.
     */
    length() {
        return this.swiper.slides.length;
    }
    /**
     * Get whether or not the current slide is the last slide.
     *
     */
    isEnd() {
        return this.swiper.isEnd;
    }
    /**
     * Get whether or not the current slide is the first slide.
     */
    isBeginning() {
        return this.swiper.isBeginning;
    }
    /**
     * Start auto play.
     */
    startAutoplay() {
        this.swiper.autoplay.start();
    }
    /**
     * Stop auto play.
     */
    stopAutoplay() {
        this.swiper.autoplay.stop();
    }
    /**
     * Lock or unlock the ability to slide to the next slides.
     */
    lockSwipeToNext(shouldLockSwipeToNext) {
        if (shouldLockSwipeToNext) {
            return this.swiper.lockSwipeToNext();
        }
        this.swiper.unlockSwipeToNext();
    }
    /**
     * Lock or unlock the ability to slide to the previous slides.
     */
    lockSwipeToPrev(shouldLockSwipeToPrev) {
        if (shouldLockSwipeToPrev) {
            return this.swiper.lockSwipeToPrev();
        }
        this.swiper.unlockSwipeToPrev();
    }
    /**
     * Lock or unlock the ability to slide to change slides.
     */
    lockSwipes(shouldLockSwipes) {
        if (shouldLockSwipes) {
            return this.swiper.lockSwipes();
        }
        this.swiper.unlockSwipes();
    }
    normalizeOptions() {
        // Base options, can be changed
        const swiperOptions = {
            effect: 'slide',
            direction: 'horizontal',
            initialSlide: 0,
            loop: false,
            pager: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            parallax: false,
            scrollbar: {
                el: this.scrollbar ? '.swiper-scrollbar' : null,
                hide: true,
            },
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 300,
            zoom: false,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            touchEventsTarget: 'container',
            autoplayDisableOnInteraction: true,
            autoplayStopOnLast: false,
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            autoHeight: false,
            setWrapperSize: false,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: true,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            onlyExternal: false,
            threshold: 0,
            touchMoveStopPropagation: true,
            touchReleaseOnEdges: false,
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            paginationClickable: false,
            paginationHide: false,
            resistance: true,
            resistanceRatio: 0.85,
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loopAdditionalSlides: 0,
            noSwiping: true,
            runCallbacksOnInit: true,
            controlBy: 'slide',
            controlInverse: false,
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            flip: {
                slideShadows: true,
                limitRotation: true
            },
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fade: {
                crossFade: false
            },
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide'
        };
        // Keep the event options separate, we dont want users
        // overwriting these
        const eventOptions = {
            on: {
                init: () => {
                    setTimeout(() => {
                        this.ionSlidesDidLoad.emit();
                    }, 20);
                },
                slideChangeTransitionStart: this.ionSlideWillChange.emit,
                slideChangeTransitionEnd: this.ionSlideDidChange.emit,
                slideNextTransitionStart: this.ionSlideNextStart.emit,
                slidePrevTransitionStart: this.ionSlidePrevStart.emit,
                slideNextTransitionEnd: this.ionSlideNextEnd.emit,
                slidePrevTransitionEnd: this.ionSlidePrevEnd.emit,
                transitionStart: this.ionSlideTransitionStart.emit,
                transitionEnd: this.ionSlideTransitionEnd.emit,
                sliderMove: this.ionSlideDrag.emit,
                reachBeginning: this.ionSlideReachStart.emit,
                reachEnd: this.ionSlideReachEnd.emit,
                touchStart: this.ionSlideTouchStart.emit,
                touchEnd: this.ionSlideTouchEnd.emit,
                tap: this.ionSlideTap.emit,
                doubleTap: this.ionSlideDoubleTap.emit
            }
        };
        // Merge the base, user options, and events together then pas to swiper
        return Object.assign({}, swiperOptions, this.options, eventOptions);
    }
    hostData() {
        return {
            class: createThemedClasses(this.mode, 'slides')
        };
    }
    render() {
        return (h("div", { class: "swiper-container", ref: el => this.container = el },
            h("div", { class: "swiper-wrapper" },
                h("slot", null)),
            this.pager ? h("div", { class: "swiper-pagination" }) : null,
            this.scrollbar ? h("div", { class: "swiper-scrollbar" }) : null));
    }
    static get is() { return "ion-slides"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "getActiveIndex": {
            "method": true
        },
        "getPreviousIndex": {
            "method": true
        },
        "isBeginning": {
            "method": true
        },
        "isEnd": {
            "method": true
        },
        "length": {
            "method": true
        },
        "lockSwipes": {
            "method": true
        },
        "lockSwipeToNext": {
            "method": true
        },
        "lockSwipeToPrev": {
            "method": true
        },
        "options": {
            "type": "Any",
            "attr": "options",
            "watchCallbacks": ["updateSwiperOptions"]
        },
        "pager": {
            "type": Boolean,
            "attr": "pager"
        },
        "scrollbar": {
            "type": Boolean,
            "attr": "scrollbar"
        },
        "slideNext": {
            "method": true
        },
        "slidePrev": {
            "method": true
        },
        "slideTo": {
            "method": true
        },
        "startAutoplay": {
            "method": true
        },
        "stopAutoplay": {
            "method": true
        },
        "update": {
            "method": true
        }
    }; }
    static get events() { return [{
            "name": "ionSlidesDidLoad",
            "method": "ionSlidesDidLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideTap",
            "method": "ionSlideTap",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideDoubleTap",
            "method": "ionSlideDoubleTap",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideWillChange",
            "method": "ionSlideWillChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideDidChange",
            "method": "ionSlideDidChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideNextStart",
            "method": "ionSlideNextStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlidePrevStart",
            "method": "ionSlidePrevStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideNextEnd",
            "method": "ionSlideNextEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlidePrevEnd",
            "method": "ionSlidePrevEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideTransitionStart",
            "method": "ionSlideTransitionStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideTransitionEnd",
            "method": "ionSlideTransitionEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideDrag",
            "method": "ionSlideDrag",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideReachStart",
            "method": "ionSlideReachStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideReachEnd",
            "method": "ionSlideReachEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideTouchStart",
            "method": "ionSlideTouchStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideTouchEnd",
            "method": "ionSlideTouchEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ion-slides:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-slides:**/"; }
}
