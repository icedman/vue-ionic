import '../../stencil.core';
import { ComponentInterface, EventEmitter, QueueApi } from '../../stencil.core';
import { Color, Mode, TabbarChangedDetail, TabbarLayout } from '../../interface';
export declare class TabBar implements ComponentInterface {
    el: HTMLElement;
    queue: QueueApi;
    doc: Document;
    keyboardVisible: boolean;
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
     * Set the layout of the text and icon in the tab bar.
     */
    layout: TabbarLayout;
    /**
     * The selected tab component
     */
    selectedTab?: string;
    selectedTabChanged(): void;
    /**
     * If `true`, the tab bar will be translucent. Defaults to `false`.
     */
    translucent: boolean;
    /** @internal */
    ionTabBarChanged: EventEmitter<TabbarChangedDetail>;
    protected onKeyboardWillHide(): void;
    protected onKeyboardWillShow(): void;
    componentWillLoad(): void;
    hostData(): {
        'role': string;
        'aria-hidden': string | null;
        class: {
            'tabbar-translucent': boolean;
            'tabbar-hidden': boolean;
        } | {
            'tabbar-translucent': boolean;
            'tabbar-hidden': boolean;
        };
    };
    render(): JSX.Element;
}
