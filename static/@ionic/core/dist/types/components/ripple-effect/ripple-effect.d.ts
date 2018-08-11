import { EventListenerEnable, QueueApi } from '../../stencil.core';
export declare class RippleEffect {
    private lastClick;
    el: HTMLElement;
    queue: QueueApi;
    enableListener: EventListenerEnable;
    doc: Document;
    parent?: HTMLElement | string;
    /** If true, the ripple effect will listen to any click events and animate */
    tapClick: boolean;
    tapClickChanged(tapClick: boolean): void;
    ionActivated(ev: CustomEvent): void;
    touchStart(ev: TouchEvent): void;
    mouseDown(ev: MouseEvent): void;
    componentDidLoad(): void;
    /**
     * Adds the ripple effect to the parent elment
     */
    addRipple(pageX: number, pageY: number): void;
    render(): null;
}
