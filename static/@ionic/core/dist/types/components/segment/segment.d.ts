import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { Color, Mode, TextInputChangeEvent } from '../../interface';
export declare class Segment implements ComponentInterface {
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
     * If `true`, the user cannot interact with the segment. Defaults to `false`.
     */
    disabled: boolean;
    /**
     * the value of the segment.
     */
    value?: string | null;
    protected valueChanged(value: string | undefined): void;
    /**
     * Emitted when the value property has changed.
     */
    ionChange: EventEmitter<TextInputChangeEvent>;
    segmentClick(ev: CustomEvent): void;
    componentDidLoad(): void;
    private updateButtons;
    private getButtons;
    hostData(): {
        class: {
            'segment-disabled': boolean;
        } | {
            'segment-disabled': boolean;
        };
    };
}
