import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { Mode } from '../../interface.js';
export declare class Slides {
    private container;
    private swiper;
    mode: Mode;
    el: HTMLStencilElement;
    /**
     * Emitted after Swiper initialization
     */
    ionSlidesDidLoad: EventEmitter;
    /**
     * Emitted when the user taps/clicks on the slide's container.
     */
    ionSlideTap: EventEmitter;
    /**
     * Emitted when the user double taps on the slide's container.
     */
    ionSlideDoubleTap: EventEmitter;
    /**
     * Emitted before the active slide has changed.
     */
    ionSlideWillChange: EventEmitter;
    /**
     * Emitted after the active slide has changed.
     */
    ionSlideDidChange: EventEmitter;
    /**
     * Emitted when the next slide has started.
     */
    ionSlideNextStart: EventEmitter;
    /**
     * Emitted when the previous slide has started.
     */
    ionSlidePrevStart: EventEmitter;
    /**
     * Emitted when the next slide has ended.
     */
    ionSlideNextEnd: EventEmitter;
    /**
     * Emitted when the previous slide has ended.
     */
    ionSlidePrevEnd: EventEmitter;
    /**
     * Emitted when the slide transition has started.
     */
    ionSlideTransitionStart: EventEmitter;
    /**
     * Emitted when the slide transition has ended.
     */
    ionSlideTransitionEnd: EventEmitter;
    /**
     * Emitted when the slider is actively being moved.
     */
    ionSlideDrag: EventEmitter;
    /**
     * Emitted when the slider is at its initial position.
     */
    ionSlideReachStart: EventEmitter;
    /**
     * Emitted when the slider is at the last slide.
     */
    ionSlideReachEnd: EventEmitter;
    /**
     * Emitted when the user first touches the slider.
     */
    ionSlideTouchStart: EventEmitter;
    /**
     * Emitted when the user releases the touch.
     */
    ionSlideTouchEnd: EventEmitter;
    /**
     * Options to pass to the swiper instance.
     * See http://idangero.us/swiper/api/ for valid options
     */
    options: any;
    updateSwiperOptions(): void;
    /**
     * If true, show the pagination. Defaults to `false`.
     */
    pager: boolean;
    /**
     * If true, show the scrollbar. Defaults to `false`.
     */
    scrollbar: boolean;
    componentDidLoad(): void;
    componentDidUnload(): void;
    private initSlides;
    /**
     * Update the underlying slider implementation. Call this if you've added or removed
     * child slides.
     */
    update(): void;
    /**
     * Transition to the specified slide.
     */
    slideTo(index: number, speed?: number, runCallbacks?: boolean): void;
    /**
     * Transition to the next slide.
     */
    slideNext(speed?: number, runCallbacks?: boolean): void;
    /**
     * Transition to the previous slide.
     */
    slidePrev(speed?: number, runCallbacks?: boolean): void;
    /**
     * Get the index of the active slide.
     */
    getActiveIndex(): number;
    /**
     * Get the index of the previous slide.
     */
    getPreviousIndex(): number;
    /**
     * Get the total number of slides.
     */
    length(): number;
    /**
     * Get whether or not the current slide is the last slide.
     *
     */
    isEnd(): boolean;
    /**
     * Get whether or not the current slide is the first slide.
     */
    isBeginning(): boolean;
    /**
     * Start auto play.
     */
    startAutoplay(): void;
    /**
     * Stop auto play.
     */
    stopAutoplay(): void;
    /**
     * Lock or unlock the ability to slide to the next slides.
     */
    lockSwipeToNext(shouldLockSwipeToNext: boolean): any;
    /**
     * Lock or unlock the ability to slide to the previous slides.
     */
    lockSwipeToPrev(shouldLockSwipeToPrev: boolean): any;
    /**
     * Lock or unlock the ability to slide to change slides.
     */
    lockSwipes(shouldLockSwipes: boolean): any;
    private normalizeOptions;
    hostData(): {
        class: import("../../../../../../../../../Users/manualmeida/repos/ionic/ionic/core/src/interface.js").CssClassMap;
    };
    render(): JSX.Element;
}
