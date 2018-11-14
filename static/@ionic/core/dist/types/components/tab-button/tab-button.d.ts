import '../../stencil.core';
import { ComponentInterface, EventEmitter, QueueApi } from '../../stencil.core';
import { Color, Mode, TabbarClickDetail, TabbarLayout } from '../../interface';
import { TabbarChangedDetail } from '../tab-bar/tab-bar-interface';
export declare class TabButton implements ComponentInterface {
    el: HTMLElement;
    queue: QueueApi;
    doc: Document;
    /**
     * The selected tab component
     */
    selected: boolean;
    /**
     * The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     */
    mode: Mode;
    /**
     * The color to use from your application's color palette.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information on colors, see [theming](/docs/theming/basics).
     */
    color?: Color;
    /**
     * Set the layout of the text and icon in the tabbar.
     */
    layout: TabbarLayout;
    /**
     * The URL which will be used as the `href` within this tab's button anchor.
     */
    href?: string;
    /**
     * A tab id must be provided for each `ion-tab`. It's used internally to reference
     * the selected tab or by the router to switch between them.
     */
    tab?: string;
    /**
     * The selected tab component
     */
    disabled: boolean;
    /**
     * Emitted when the tab bar is clicked
     * @internal
     */
    ionTabButtonClick: EventEmitter<TabbarClickDetail>;
    onTabbarChanged(ev: CustomEvent<TabbarChangedDetail>): void;
    onClick(ev: Event): void;
    componentWillLoad(): void;
    private readonly hasLabel;
    private readonly hasIcon;
    hostData(): {
        'role': string;
        'ion-activatable': boolean;
        'aria-selected': string | null;
        'id': string;
        'aria-controls': string;
        class: {
            'tab-selected': boolean;
            'tab-disabled': boolean;
            'tab-has-label': boolean;
            'tab-has-icon': boolean;
            'tab-has-label-only': boolean;
            'tab-has-icon-only': boolean;
        } | {
            [x: string]: boolean;
            'tab-selected': boolean;
            'tab-disabled': boolean;
            'tab-has-label': boolean;
            'tab-has-icon': boolean;
            'tab-has-label-only': boolean;
            'tab-has-icon-only': boolean;
        };
    };
    render(): JSX.Element;
}
