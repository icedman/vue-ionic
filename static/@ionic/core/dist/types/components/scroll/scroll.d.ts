import '../../stencil.core';
import { EventEmitter, QueueApi } from '../../stencil.core';
import { Config, Mode, ScrollBaseDetail, ScrollDetail } from '../../interface';
export declare class Scroll {
    private watchDog;
    private isScrolling;
    private lastScroll;
    private detail;
    private queued;
    el: HTMLElement;
    config: Config;
    queue: QueueApi;
    win: Window;
    /** The mode for component. */
    mode: Mode;
    /**
     * If true and the content does not cause an overflow scroll, the scroll interaction will cause a bounce.
     * If the content exceeds the bounds of ionScroll, nothing will change.
     * Note, the does not disable the system bounce on iOS. That is an OS level setting.
     */
    forceOverscroll?: boolean;
    /** If true, the component will emit scroll events. */
    scrollEvents: boolean;
    /**
     * Emitted when the scroll has started.
     */
    ionScrollStart: EventEmitter<ScrollBaseDetail>;
    /**
     * Emitted while scrolling. This event is disabled by default.
     * Look at the property: `scrollEvents`
     */
    ionScroll: EventEmitter<ScrollDetail>;
    /**
     * Emitted when the scroll has ended.
     */
    ionScrollEnd: EventEmitter<ScrollBaseDetail>;
    constructor();
    componentWillLoad(): void;
    componentDidUnload(): void;
    onScroll(ev: UIEvent): void;
    /** Scroll to the top of the component */
    scrollToTop(duration: number): Promise<void>;
    /** Scroll to the bottom of the component */
    scrollToBottom(duration: number): Promise<void>;
    /** Scroll by a specified X/Y distance in the component */
    scrollByPoint(x: number, y: number, duration: number): Promise<any>;
    /** Scroll to a specified X/Y location in the component */
    scrollToPoint(x: number, y: number, duration: number): Promise<void>;
    private onScrollStart;
    private onScrollEnd;
    hostData(): {
        class: {
            overscroll: boolean | undefined;
        };
    };
    render(): JSX.Element;
}
