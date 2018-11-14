import '../../stencil.core';
import { ComponentInterface } from '../../stencil.core';
import { Config, Mode } from '../../interface';
export declare class InfiniteScrollContent implements ComponentInterface {
    mode: Mode;
    config: Config;
    /**
     * An animated SVG spinner that shows while loading.
     */
    loadingSpinner?: string;
    /**
     * Optional text to display while loading.
     */
    loadingText?: string;
    componentDidLoad(): void;
    hostData(): {
        class: import("../../../../../../../../../Users/manualmeida/repos/ionic/ionic/core/src/interface").CssClassMap;
    };
    render(): JSX.Element;
}
