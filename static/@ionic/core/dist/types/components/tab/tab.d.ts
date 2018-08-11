import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { Color, ComponentRef, FrameworkDelegate } from '../../interface';
export declare class Tab {
    private loaded;
    el: HTMLIonTabElement;
    /**
     * If true, sets the tab as the active tab.
     */
    active: boolean;
    /** hidden */
    btnId?: string;
    /** hidden */
    delegate?: FrameworkDelegate;
    /**
     * The label of the tab.
     */
    label?: string;
    /**
     * The URL which will be used as the `href` within this tab's `<ion-tab-button>` anchor.
     */
    href?: string;
    /**
     * The icon for the tab.
     */
    icon?: string;
    /**
     * The badge for the tab.
     */
    badge?: string;
    /**
     * The badge color for the tab button.
     */
    badgeColor?: Color;
    /**
     * The component to display inside of the tab.
     */
    component?: ComponentRef;
    /**
     * The name of the tab.
     */
    name?: string;
    /**
     * If true, the user cannot interact with the tab. Defaults to `false`.
     */
    disabled: boolean;
    /**
     * If true, the tab will be selected. Defaults to `false`.
     */
    selected: boolean;
    selectedChanged(selected: boolean): void;
    /**
     * If true, the tab button is visible within the tabbar. Defaults to `true`.
     */
    show: boolean;
    /**
     * If true, hide the tabs on child pages.
     */
    tabsHideOnSubPages: boolean;
    /**
     * Emitted when the current tab is selected.
     */
    ionSelect: EventEmitter<void>;
    /**
     * Emitted when the tab props mutates. Used internally.
     */
    ionTabMutated: EventEmitter<void>;
    componentWillLoad(): void;
    onPropChanged(): void;
    /** Get the Id for the tab */
    getTabId(): string | null;
    /** Set the active component for the tab */
    setActive(): Promise<void>;
    private prepareLazyLoaded;
    hostData(): {
        'aria-labelledby': string | undefined;
        'aria-hidden': string | null;
        'role': string;
        'class': {
            'ion-page': boolean;
            'tab-hidden': boolean;
        };
    };
    render(): JSX.Element;
}
