import { ComponentInterface, QueueApi } from '../../stencil.core';
import { Config } from '../../interface';
export declare class RippleEffect implements ComponentInterface {
    el: HTMLElement;
    queue: QueueApi;
    win: Window;
    config: Config;
    /**
     * Adds the ripple effect to the parent element
     */
    addRipple(pageX: number, pageY: number): void;
    private prepareRipple;
}
