import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { Color, Config, NavOutlet, RouteID, RouteWrite, TabbarLayout, TabbarPlacement } from '../../interface';
export declare class Tabs implements NavOutlet {
    private ids;
    private transitioning;
    private tabsId;
    private leavingTab?;
    el: HTMLStencilElement;
    tabs: HTMLIonTabElement[];
    selectedTab?: HTMLIonTabElement;
    config: Config;
    doc: Document;
    /**
     * The color to use from your application's color palette.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information on colors, see [theming](/docs/theming/basics).
     */
    color?: Color;
    /**
     * A unique name for the tabs.
     */
    name?: string;
    /**
     * If true, the tabbar will be hidden. Defaults to `false`.
     */
    tabbarHidden: boolean;
    /**
     * If true, show the tab highlight bar under the selected tab.
     */
    tabbarHighlight?: boolean;
    /**
     * Set the layout of the text and icon in the tabbar. Available options: `"icon-top"`, `"icon-start"`, `"icon-end"`, `"icon-bottom"`, `"icon-hide"`, `"label-hide"`.
     */
    tabbarLayout?: TabbarLayout;
    /**
     * Set the position of the tabbar, relative to the content. Available options: `"top"`, `"bottom"`.
     */
    tabbarPlacement?: TabbarPlacement;
    /**
     * If true, the tabs will be translucent.
     * Note: In order to scroll content behind the tabs, the `fullscreen`
     * attribute needs to be set on the content.
     * Defaults to `false`.
     */
    translucent: boolean;
    /**
     * If true, the tabs will be scrollable when there are enough tabs to overflow the width of the screen.
     */
    scrollable: boolean;
    /**
     * If true, the tabs will use the router and `selectedTab` will not do anything.
     */
    useRouter: boolean;
    /**
     * Emitted when the tab changes.
     */
    ionChange: EventEmitter<{
        tab: HTMLIonTabElement;
    }>;
    /**
     * Emitted when the navigation will load a component.
     */
    ionNavWillLoad: EventEmitter<void>;
    /**
     * Emitted when the navigation is about to transition to a new component.
     */
    ionNavWillChange: EventEmitter<void>;
    /**
     * Emitted when the navigation has finished transitioning to a new component.
     */
    ionNavDidChange: EventEmitter<void>;
    componentWillLoad(): void;
    componentDidLoad(): Promise<void>;
    componentDidUnload(): void;
    protected onTabMutated(): void;
    protected onTabClicked(ev: CustomEvent<HTMLIonTabElement>): void;
    /**
     * Index or the Tab instance, of the tab to select.
     */
    select(tabOrIndex: number | HTMLIonTabElement): Promise<boolean>;
    /** @hidden */
    setRouteId(id: string): Promise<RouteWrite>;
    /** @hidden */
    getRouteId(): RouteID | undefined;
    /** Get the tab at the given index */
    getTab(tabOrIndex: string | number | HTMLIonTabElement): HTMLIonTabElement | undefined;
    /**
     * Get the currently selected tab
     */
    getSelected(): HTMLIonTabElement | undefined;
    private initTabs;
    private initSelect;
    private loadConfig;
    private setActive;
    private tabSwitch;
    private notifyRouter;
    private shouldSwitch;
    hostData(): {
        class: import("../../../../../../../../../Users/manualmeida/repos/ionic/ionic/core/src/interface").CssClassMap | null;
    };
    render(): JSX.Element[];
}
