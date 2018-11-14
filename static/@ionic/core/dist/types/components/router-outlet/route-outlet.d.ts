import '../../stencil.core';
import { ComponentInterface, EventEmitter, QueueApi } from '../../stencil.core';
import { AnimationBuilder, ComponentProps, ComponentRef, Config, FrameworkDelegate, Mode, NavOutlet, RouteID, RouteWrite, RouterOutletOptions } from '../../interface';
export declare class RouterOutlet implements ComponentInterface, NavOutlet {
    private activeEl;
    private activeComponent;
    private waitPromise?;
    mode: Mode;
    el: HTMLElement;
    config: Config;
    animationCtrl: HTMLIonAnimationControllerElement;
    win: Window;
    queue: QueueApi;
    /** @internal */
    delegate?: FrameworkDelegate;
    /**
     * If `true`, the router-outlet should animate the transition of components. Default to `true`.
     */
    animated: boolean;
    /**
     * By default `ion-nav` animates transition between pages based in the mode (ios or material design).
     * However, this property allows to create custom transition using `AnimateBuilder` functions.
     */
    animation?: AnimationBuilder;
    /**
     * @internal
     */
    ionNavWillLoad: EventEmitter<void>;
    /**
     * @internal
     */
    ionNavWillChange: EventEmitter<void>;
    /**
     * @internal
     */
    ionNavDidChange: EventEmitter<void>;
    componentWillLoad(): void;
    componentDidUnload(): void;
    /**
     * Set the root component for the given navigation stack
     */
    setRoot(component: ComponentRef, params?: ComponentProps, opts?: RouterOutletOptions): Promise<boolean>;
    /** @internal */
    commit(enteringEl: HTMLElement, leavingEl: HTMLElement | undefined, opts?: RouterOutletOptions): Promise<boolean>;
    /** @internal */
    setRouteId(id: string, params: ComponentProps | undefined, direction: number): Promise<RouteWrite>;
    /** @internal */
    getRouteId(): Promise<RouteID | undefined>;
    private lock;
    transition(enteringEl: HTMLElement, leavingEl: HTMLElement | undefined, opts?: RouterOutletOptions): Promise<boolean>;
    render(): JSX.Element[];
}
