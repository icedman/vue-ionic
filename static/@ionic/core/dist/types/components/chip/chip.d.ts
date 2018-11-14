import { ComponentInterface } from '../../stencil.core';
import { Color, Mode } from '../../interface';
export declare class Chip implements ComponentInterface {
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
    hostData(): {
        class: import("../../../../../../../../../Users/manualmeida/repos/ionic/ionic/core/src/interface").CssClassMap | undefined;
    };
}
