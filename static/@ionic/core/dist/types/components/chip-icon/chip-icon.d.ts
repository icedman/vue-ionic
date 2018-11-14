import '../../stencil.core';
import { ComponentInterface } from '../../stencil.core';
import { Color, Mode } from '../../interface';
export declare class ChipIcon implements ComponentInterface {
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
     * Set to `"clear"` for a transparent icon or to `"solid"` for a filled background.
     * Defaults to `"clear"`.
     */
    fill: 'clear' | 'solid';
    /**
     * The icon to use.
     * Possible values are the same as `"ion-icon"`.
     */
    name?: string;
    /**
     * The icon src to use.
     * Possible values are the same as `"ion-icon"`.
     */
    src?: string;
    hostData(): {
        class: {};
    };
    render(): JSX.Element;
}
