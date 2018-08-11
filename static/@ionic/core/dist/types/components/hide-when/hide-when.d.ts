import { Config, Mode } from '../../interface';
import { DisplayWhen, PlatformConfig } from '../../utils/show-hide-when-utils';
export declare class HideWhen implements DisplayWhen {
    calculatedPlatforms: PlatformConfig[];
    element: HTMLElement;
    config: Config;
    win: Window;
    /**
     * If the current platform matches the given value, the element will hide.
     * Accepts a comma separated list of modes to match against.
     */
    mode: Mode;
    /**
     * If the current orientation matches this value, the element will hide.
     */
    orientation?: string;
    /**
     * If the current media query matches this value, the element will hide.
     */
    mediaQuery?: string;
    /**
     * If the current screen width matches the given size, the element will hide.
     * Uses the build in sizes of xs, sm, md, lg, xl.
     */
    size?: string;
    /**
     * If the current platform matches the given value, the element will hide.
     * Accepts a comma separated list of platform to match against.
     */
    platform?: string;
    /**
     * If false, and two or more conditions are set, the element will hide when all are true.
     * If true, and two or more conditions are set, the element will hide when at least one is true.
     */
    or: boolean;
    passesTest: boolean;
    componentWillLoad(): void;
    onResize(): void;
    hostData(): {
        class: {
            'show-content': boolean;
            'hide-content': boolean;
        };
    };
}
