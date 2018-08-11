export declare class PointerEvents {
    private el;
    private pointerDown;
    private pointerMove;
    private pointerUp;
    private options;
    private rmTouchStart?;
    private rmTouchMove?;
    private rmTouchEnd?;
    private rmTouchCancel?;
    private rmMouseStart?;
    private rmMouseMove?;
    private rmMouseUp?;
    private bindTouchEnd;
    private bindMouseUp;
    private lastTouchEvent;
    constructor(el: Node, pointerDown: any, pointerMove: any, pointerUp: any, options: EventListenerOptions);
    disabled: boolean;
    stop(): void;
    destroy(): void;
    private handleTouchStart;
    private handleMouseDown;
    private handleTouchEnd;
    private handleMouseUp;
    private stopTouch;
    private stopMouse;
}
export declare const POINTER_EVENT_TYPE_MOUSE = 1;
export declare const POINTER_EVENT_TYPE_TOUCH = 2;
export interface PointerEventsConfig {
    element?: HTMLElement;
    pointerDown: (ev: any) => boolean;
    pointerMove?: (ev: any) => void;
    pointerUp?: (ev: any) => void;
    zone?: boolean;
    capture?: boolean;
    passive?: boolean;
}
