import '../../stencil.core';
import { Color, Config, Mode } from '../../interface';
export declare class BackButton {
    el: HTMLElement;
    config: Config;
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
     * The url to navigate back to by default when there is no history.
     */
    defaultHref?: string;
    /**
     * The icon name to use for the back button.
     */
    icon?: string;
    /**
     * The text to display in the back button.
     */
    text?: string;
    private onClick;
    hostData(): {
        class: {
            'button': boolean;
            'show-back-button': boolean;
        } | {
            'button': boolean;
            'show-back-button': boolean;
        };
        'tappable': boolean;
    };
    render(): JSX.Element;
}
