import { QueueApi } from '../stencil.core';
import { ViewLifecycle } from '..';
import { Animation, NavOptions } from '../interface';
export declare function transition(opts: TransitionOptions): Promise<Animation | null>;
export declare function setPageHidden(el: HTMLElement, hidden: boolean): void;
export declare function lifecycle(win: Window, el: HTMLElement | undefined, eventName: ViewLifecycle): void;
export interface TransitionOptions extends NavOptions {
    animationCtrl: HTMLIonAnimationControllerElement;
    queue: QueueApi;
    progressCallback?: ((ani: Animation) => void);
    window: Window;
    baseEl: HTMLElement;
    enteringEl: HTMLElement;
    leavingEl: HTMLElement | undefined;
}
