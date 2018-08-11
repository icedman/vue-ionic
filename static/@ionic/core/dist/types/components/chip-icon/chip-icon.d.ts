import '../../stencil.core';
import { Color, Mode } from '../../interface';
export declare class ChipIcon {
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
     * The icon to use.
     * Possible values are the same as `"ion-icon"`.
     */
    name?: string;
    hostData(): {
        class: {};
    };
    render(): JSX.Element;
}
