import { ComponentInterface } from '../../stencil.core';
import { Mode } from '../../interface';
export declare class Footer implements ComponentInterface {
    /**
     * The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     */
    mode: Mode;
    /**
     * If `true`, the footer will be translucent.
     * Note: In order to scroll content behind the footer, the `fullscreen`
     * attribute needs to be set on the content.
     * Defaults to `false`.
     */
    translucent: boolean;
    hostData(): {
        class: {};
    };
}
