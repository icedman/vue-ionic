import '../../stencil.core';
import { EventEmitter, QueueApi } from '../../stencil.core';
import { Color, Mode, TabbarLayout, TabbarPlacement } from '../../interface';
export declare class Tabbar {
    private scrollEl?;
    mode: Mode;
    color?: Color;
    el: HTMLElement;
    queue: QueueApi;
    doc: Document;
    canScrollLeft: boolean;
    canScrollRight: boolean;
    keyboardVisible: boolean;
    /**
     * Set the layout of the text and icon in the tabbar. Available options: `"icon-top"`, `"icon-start"`, `"icon-end"`, `"icon-bottom"`, `"icon-hide"`, `"label-hide"`.
     */
    layout: TabbarLayout;
    /**
     * Set the position of the tabbar, relative to the content. Available options: `"top"`, `"bottom"`.
     */
    placement: TabbarPlacement;
    /** The selected tab component */
    selectedTab?: HTMLIonTabElement;
    /**
     * If true, the tabs will be scrollable when there are enough tabs to overflow the width of the screen.
     */
    scrollable: boolean;
    /** The tabs to render */
    tabs: HTMLIonTabElement[];
    selectedTabChanged(): void;
    /**
     * If true, show the tab highlight bar under the selected tab.
     */
    highlight: boolean;
    /**
     * If true, the tabbar will be translucent. Defaults to `false`.
     */
    translucent: boolean;
    /** Emitted when the tab bar is clicked  */
    ionTabbarClick: EventEmitter<HTMLIonTabElement>;
    protected onKeyboardWillHide(): void;
    protected onKeyboardWillShow(): void;
    onResize(): void;
    componentDidLoad(): void;
    protected analyzeTabs(): {
        previous: {
            tab: HTMLIonTabButtonElement;
            amount: number;
        } | undefined;
        next: {
            tab: HTMLIonTabButtonElement;
            amount: number;
        } | undefined;
    };
    private getSelectedButton;
    protected scrollToSelectedButton(): void;
    private scrollByTab;
    private updateBoundaries;
    private updateHighlight;
    hostData(): {
        role: string;
        'aria-hidden': string | null;
        class: {
            'tabbar-translucent': boolean;
            'tabbar-hidden': boolean;
            'scrollable': boolean;
        } | {
            [x: string]: boolean;
            'tabbar-translucent': boolean;
            'tabbar-hidden': boolean;
            'scrollable': boolean;
        };
    };
    render(): (JSX.Element | null)[];
}
