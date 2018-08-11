import '../../stencil.core';
import { Color, Mode } from '../../interface';
export declare class FabButton {
    private inList;
    el: HTMLElement;
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
     * If true, the fab button will be show a close icon. Defaults to `false`.
     */
    activated: boolean;
    /**
     * If true, the user cannot interact with the fab button. Defaults to `false`.
     */
    disabled: boolean;
    /**
     * Contains a URL or a URL fragment that the hyperlink points to.
     * If this property is set, an anchor tag will be rendered.
     */
    href?: string;
    /**
     * If true, the fab button will be translucent. Defaults to `false`.
     */
    translucent: boolean;
    /**
     * If true, the fab button will show when in a fab-list.
     */
    show: boolean;
    componentWillLoad(): void;
    /**
     * Get the classes for fab buttons in lists
     */
    private getFabClassMap;
    hostData(): {
        'tappable': boolean;
        class: {
            'fab-button-translucent': boolean;
        } | {
            'fab-button-translucent': boolean;
        };
    };
    render(): JSX.Element;
}
