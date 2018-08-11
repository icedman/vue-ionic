import '../../stencil.core';
import { EventEmitter, QueueApi } from '../../stencil.core';
import { ComponentProps, Config, FrameworkDelegate, Mode, NavComponent, NavOptions, NavOutlet, RouteID, RouteWrite, TransitionDoneFn, ViewController } from '../../interface';
export declare class Nav implements NavOutlet {
    private transInstr;
    private sbTrns?;
    private useRouter;
    private isTransitioning;
    private destroyed;
    private views;
    private gesture?;
    mode: Mode;
    el: HTMLElement;
    queue: QueueApi;
    config: Config;
    win: Window;
    animationCtrl: HTMLIonAnimationControllerElement;
    /**
     * If the nav component should allow for swipe-to-go-back
     */
    swipeBackEnabled?: boolean;
    swipeBackEnabledChanged(): void;
    /**
     * If the nav should animate the components or not
     */
    animated?: boolean;
    /** @hidden */
    delegate?: FrameworkDelegate;
    /**
     * Any parameters for the root component
     */
    rootParams?: ComponentProps;
    /**
     * Root NavComponent to load
     */
    root?: NavComponent;
    rootChanged(): void;
    /**
     * Event fired when Nav will load a component
     */
    ionNavWillLoad: EventEmitter<void>;
    /**
     * Event fired when the nav will components
     */
    ionNavWillChange: EventEmitter<void>;
    /**
     * Event fired when the nav has changed components
     */
    ionNavDidChange: EventEmitter<void>;
    componentWillLoad(): void;
    componentDidLoad(): Promise<void>;
    componentDidUnload(): void;
    /**
     * Push a new component onto the current navigation stack. Pass any aditional information along as an object. This additional information is accessible through NavParams
     */
    push(component: NavComponent, componentProps?: ComponentProps | null, opts?: NavOptions | null, done?: TransitionDoneFn): Promise<boolean>;
    /**
     * Inserts a component into the nav stack at the specified index. This is useful if you need to add a component at any point in your navigation stack.
     */
    insert(insertIndex: number, component: NavComponent, componentProps?: ComponentProps | null, opts?: NavOptions | null, done?: TransitionDoneFn): Promise<boolean>;
    /**
     * Inserts an array of components into the nav stack at the specified index. The last component in the array will become instantiated as a view, and animate in to become the active view.
     */
    insertPages(insertIndex: number, insertComponents: NavComponent[], opts?: NavOptions | null, done?: TransitionDoneFn): Promise<boolean>;
    /**
     * Call to navigate back from a current component. Similar to push(), you can also pass navigation options.
     */
    pop(opts?: NavOptions | null, done?: TransitionDoneFn): Promise<boolean>;
    /**
     * Pop to a specific index in the navigation stack
     */
    popTo(indexOrViewCtrl: number | ViewController, opts?: NavOptions | null, done?: TransitionDoneFn): Promise<boolean>;
    /**
     * Navigate back to the root of the stack, no matter how far back that is.
     */
    popToRoot(opts?: NavOptions | null, done?: TransitionDoneFn): Promise<boolean>;
    /**
     * Removes a page from the nav stack at the specified index.
     */
    removeIndex(startIndex: number, removeCount?: number, opts?: NavOptions | null, done?: TransitionDoneFn): Promise<boolean>;
    /**
     * Set the root for the current navigation stack.
     */
    setRoot(component: NavComponent, componentProps?: ComponentProps | null, opts?: NavOptions | null, done?: TransitionDoneFn): Promise<boolean>;
    /**
     * Set the views of the current navigation stack and navigate to the last view. By default animations are disabled, but they can be enabled by passing options to the navigation controller.You can also pass any navigation params to the individual pages in the array.
     */
    setPages(views: any[], opts?: NavOptions | null, done?: TransitionDoneFn): Promise<boolean>;
    /** @hidden */
    setRouteId(id: string, params: any, direction: number): Promise<RouteWrite>;
    /** @hidden */
    getRouteId(): RouteID | undefined;
    /**
     * Returns true or false if the current view can go back
     */
    canGoBack(view?: ViewController | undefined): boolean;
    /**
     * Gets the active view
     */
    getActive(): ViewController | undefined;
    /**
     * Returns the view at the index
     */
    getByIndex(index: number): ViewController | undefined;
    /**
     * Gets the previous view
     */
    getPrevious(view?: ViewController | undefined): ViewController | undefined;
    /**
     * Returns the length of navigation stack
     */
    isAnimating(): boolean;
    length(): number;
    private queueTrns;
    private success;
    private failed;
    private fireError;
    private nextTrns;
    private runTransition;
    private prepareTI;
    private getEnteringView;
    private postViewInit;
    private transition;
    private transitionFinish;
    private insertViewAt;
    private removeView;
    private destroyView;
    /**
     * DOM WRITE
     */
    private cleanup;
    private swipeBackStart;
    private swipeBackProgress;
    private swipeBackEnd;
    private canSwipeBack;
    render(): JSX.Element[];
}
