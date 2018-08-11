import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { Color, InputChangeEvent, Mode } from '../../interface';
export declare class Segment {
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
    disabled: boolean;
    /**
     * the value of the segment.
     */
    value?: string;
    protected valueChanged(value: string | undefined): void;
    /**
     * Emitted when the value property has changed.
     */
    ionChange: EventEmitter<InputChangeEvent>;
    segmentClick(ev: CustomEvent): void;
    componentDidLoad(): void;
    private updateButtons;
    private getButtons;
    hostData(): {
        class: {
            'segment-disabled': boolean;
            'in-toolbar': boolean;
            'in-color-toolbar': boolean;
        } | {
            'segment-disabled': boolean;
            'in-toolbar': boolean;
            'in-color-toolbar': boolean;
        };
    };
    render(): JSX.Element;
}
