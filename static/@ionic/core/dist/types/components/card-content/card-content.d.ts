import { ComponentInterface } from '../../stencil.core';
import { Mode } from '../../interface';
export declare class CardContent implements ComponentInterface {
    /**
     * The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     */
    mode: Mode;
    hostData(): {
        class: import("../../../../../../../../../Users/manualmeida/repos/ionic/ionic/core/src/interface").CssClassMap;
    };
}
