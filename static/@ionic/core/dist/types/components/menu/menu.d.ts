import '../../stencil.core';
import { EventEmitter, EventListenerEnable, QueueApi } from '../../stencil.core';
import { Config, MenuChangeEventDetail, Mode, Side } from '../../interface';
export declare class Menu {
    private animation?;
    private _isOpen;
    private lastOnEnd;
    private gesture?;
    mode: Mode;
    isAnimating: boolean;
    width: number;
    backdropEl?: HTMLElement;
    menuInnerEl?: HTMLElement;
    contentEl?: HTMLElement;
    menuCtrl?: HTMLIonMenuControllerElement;
    el: HTMLIonMenuElement;
    isPaneVisible: boolean;
    isEndSide: boolean;
    config: Config;
    isServer: boolean;
    lazyMenuCtrl: HTMLIonMenuControllerElement;
    enableListener: EventListenerEnable;
    win: Window;
    queue: QueueApi;
    doc: Document;
    /**
     * The content's id the menu should use.
     */
    contentId?: string;
    /**
     * An id for the menu.
     */
    menuId?: string;
    /**
     * The display type of the menu.
     * Available options: `"overlay"`, `"reveal"`, `"push"`.
     */
    type: string;
    typeChanged(type: string, oldType: string | null): void;
    /**
     * If true, the menu is disabled. Default `false`.
     */
    disabled: boolean;
    protected disabledChanged(): void;
    /**
     * Which side of the view the menu should be placed. Default `"start"`.
     */
    side: Side;
    protected sideChanged(): void;
    /**
     * If true, swiping the menu is enabled. Default `true`.
     */
    swipeEnabled: boolean;
    protected swipeEnabledChanged(): void;
    /**
     * The edge threshold for dragging the menu open.
     * If a drag/swipe happens over this value, the menu is not triggered.
     */
    maxEdgeStart: number;
    /**
     * Emitted when the menu is open.
     */
    ionOpen: EventEmitter<void>;
    /**
     * Emitted when the menu is closed.
     */
    ionClose: EventEmitter<void>;
    /**
     * Emitted when the menu state is changed.
     */
    protected ionMenuChange: EventEmitter<MenuChangeEventDetail>;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): Promise<void>;
    componentDidUnload(): void;
    onSplitPaneChanged(ev: CustomEvent): void;
    onBackdropClick(ev: any): void;
    isOpen(): boolean;
    open(animated?: boolean): Promise<boolean>;
    close(animated?: boolean): Promise<boolean>;
    toggle(animated?: boolean): Promise<boolean>;
    setOpen(shouldOpen: boolean, animated?: boolean): Promise<boolean>;
    _setOpen(shouldOpen: boolean, animated?: boolean): Promise<boolean>;
    isActive(): boolean;
    getWidth(): number;
    private loadAnimation;
    private startAnimation;
    private canSwipe;
    private canStart;
    private onWillStart;
    private onDragStart;
    private onDragMove;
    private onDragEnd;
    private beforeAnimation;
    private afterAnimation;
    private updateState;
    private forceClosing;
    hostData(): {
        role: string;
        class: {
            [x: string]: boolean;
            'menu-enabled': boolean;
            'menu-side-end': boolean;
            'menu-side-start': boolean;
            'menu-pane-visible': boolean;
        };
    };
    render(): JSX.Element[];
}
