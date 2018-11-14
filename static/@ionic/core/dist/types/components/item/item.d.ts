import '../../stencil.core';
import { ComponentInterface } from '../../stencil.core';
import { Color, Mode, RouterDirection, StyleEvent } from '../../interface';
export declare class Item implements ComponentInterface {
    private itemStyles;
    el: HTMLStencilElement;
    multipleInputs: boolean;
    win: Window;
    /**
     * The color to use from your application's color palette.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information on colors, see [theming](/docs/theming/basics).
     */
    color?: Color;
    /**
     * The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     */
    mode: Mode;
    /**
     * If `true`, a button tag will be rendered and the item will be tappable. Defaults to `false`.
     */
    button: boolean;
    /**
     * If `true`, a detail arrow will appear on the item. Defaults to `false` unless the `mode`
     * is `ios` and an `href`, `onclick` or `button` property is present.
     */
    detail?: boolean;
    /**
     * The icon to use when `detail` is set to `true`. Defaults to `"ios-arrow-forward"`.
     */
    detailIcon: string;
    /**
     * If `true`, the user cannot interact with the item. Defaults to `false`.
     */
    disabled: boolean;
    /**
     * Contains a URL or a URL fragment that the hyperlink points to.
     * If this property is set, an anchor tag will be rendered.
     */
    href?: string;
    /**
     * How the bottom border should be displayed on the item.
     * Available options: `"full"`, `"inset"`, `"none"`.
     */
    lines?: 'full' | 'inset' | 'none';
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    routerDirection?: RouterDirection;
    /**
     * The type of the button. Only used when an `onclick` or `button` property is present.
     * Possible values are: `"submit"`, `"reset"` and `"button"`.
     * Default value is: `"button"`
     */
    type: 'submit' | 'reset' | 'button';
    itemStyle(ev: CustomEvent<StyleEvent>): void;
    componentDidLoad(): void;
    private isClickable;
    hostData(): {
        'ion-activatable': boolean;
        class: {
            'item-disabled': boolean;
            'in-list': boolean;
            'item': boolean;
            'item-multiple-inputs': boolean;
        } | {
            'item-disabled': boolean;
            'in-list': boolean;
            'item': boolean;
            'item-multiple-inputs': boolean;
        };
    };
    render(): JSX.Element[];
}
