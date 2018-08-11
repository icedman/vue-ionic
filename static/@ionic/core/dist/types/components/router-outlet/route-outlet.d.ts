import '../../stencil.core';
import { EventEmitter, QueueApi } from '../../stencil.core';
import { AnimationBuilder, ComponentProps, ComponentRef, Config, FrameworkDelegate, Mode, NavOutlet, RouteID, RouteWrite, RouterOutletOptions } from '../../interface';
export declare class RouterOutlet implements NavOutlet {
    private isTransitioning;
    private activeEl;
    private activeComponent;
    mode: Mode;
    el: HTMLElement;
    config: Config;
    animationCtrl: HTMLIonAnimationControllerElement;
    win: Window;
    queue: QueueApi;
    animated?: boolean;
    animationBuilder?: AnimationBuilder;
    delegate?: FrameworkDelegate;
    ionNavWillLoad: EventEmitter<void>;
    ionNavWillChange: EventEmitter<void>;
    ionNavDidChange: EventEmitter<void>;
    componentWillLoad(): void;
    componentDidUnload(): void;
    /**
     * Set the root component for the given navigation stack
     */
    setRoot(component: ComponentRef, params?: ComponentProps, opts?: RouterOutletOptions): Promise<boolean>;
    /** @hidden */
    commit(enteringEl: HTMLElement, leavingEl: HTMLElement | undefined, opts?: RouterOutletOptions): Promise<boolean>;
    /** @hidden */
    setRouteId(id: string, params: any, direction: number): Promise<RouteWrite>;
    /** Returns the ID for the current route */
    getRouteId(): RouteID | undefined;
    render(): JSX.Element[];
}
