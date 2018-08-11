import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { Color, Mode } from '../../interface';
export declare class SegmentButton {
    el: HTMLElement;
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
     * If true, the segment button is selected. Defaults to `false`.
     */
    checked: boolean;
    disabled: boolean;
    /**
     * The value of the segment button.
     */
    value: string;
    /**
     * Emitted when the segment button is clicked.
     */
    ionSelect: EventEmitter<void>;
    checkedChanged(checked: boolean, prev: boolean): void;
    hostData(): {
        class: {
            'segment-button-disabled': boolean;
            'segment-checked': boolean;
        } | {
            'segment-button-disabled': boolean;
            'segment-checked': boolean;
        };
        'tappable': boolean;
    };
    render(): JSX.Element[];
}
