import '../../stencil.core';
import { Color, Mode } from '../../interface';
export declare class ToolbarTitle {
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
    hostData(): {
        class: import("../../../../../../../../../Users/manualmeida/repos/ionic/ionic/core/src/interface").CssClassMap | null;
    };
    render(): JSX.Element[];
}
