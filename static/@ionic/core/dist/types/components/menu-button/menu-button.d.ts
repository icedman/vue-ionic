import '../../stencil.core';
import { Color, Config, Mode } from '../../interface';
export declare class MenuButton {
    config: Config;
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
     * Optional property that maps to a Menu's `menuId` prop. Can also be `left` or `right` for the menu side. This is used to find the correct menu to toggle
     */
    menu?: string;
    /**
     * Automatically hides the menu button when the corresponding menu is not active
     */
    autoHide: boolean;
    hostData(): {
        class: {
            'button': boolean;
        };
    };
    render(): JSX.Element;
}
