import '../../stencil.core';
import { Color, Mode } from '../../interface';
export declare class TabButton {
    el: HTMLElement;
    mode: Mode;
    color?: Color;
    keyFocus: boolean;
    /**
     * If true, the tab button will be selected. Defaults to `false`.
     */
    selected: boolean;
    label?: string;
    icon?: string;
    badge?: string;
    disabled?: boolean;
    badgeColor?: string;
    href?: string;
    private onKeyUp;
    private onBlur;
    hostData(): {
        'role': string;
        'aria-selected': string | null;
        class: {
            'tab-selected': boolean;
            'has-label': boolean;
            'has-icon': boolean;
            'has-label-only': boolean;
            'has-icon-only': boolean;
            'has-badge': boolean;
            'tab-button-disabled': boolean | undefined;
            'focused': boolean;
        } | {
            'tab-selected': boolean;
            'has-label': boolean;
            'has-icon': boolean;
            'has-label-only': boolean;
            'has-icon-only': boolean;
            'has-badge': boolean;
            'tab-button-disabled': boolean | undefined;
            'focused': boolean;
        };
    };
    render(): JSX.Element[];
}
