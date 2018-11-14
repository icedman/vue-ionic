import '../../stencil.core';
import { ComponentInterface, EventEmitter, QueueApi } from '../../stencil.core';
import { Color, InputChangeEvent, Mode, RangeValue, StyleEvent } from '../../interface';
import { RangeEventDetail } from './range-interface';
export declare class Range implements ComponentInterface {
    private noUpdate;
    private rect;
    private hasFocus;
    private rangeSlider?;
    private gesture?;
    el: HTMLStencilElement;
    queue: QueueApi;
    private ratioA;
    private ratioB;
    private pressedKnob;
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
     * How long, in milliseconds, to wait to trigger the
     * `ionChange` event after each change in the range value. Default `0`.
     */
    debounce: number;
    protected debounceChanged(): void;
    /**
     * The name of the control, which is submitted with the form data.
     */
    name: string;
    /**
     * Show two knobs. Defaults to `false`.
     */
    dualKnobs: boolean;
    /**
     * Minimum integer value of the range. Defaults to `0`.
     */
    min: number;
    protected minChanged(): void;
    /**
     * Maximum integer value of the range. Defaults to `100`.
     */
    max: number;
    protected maxChanged(): void;
    /**
     * If `true`, a pin with integer value is shown when the knob
     * is pressed. Defaults to `false`.
     */
    pin: boolean;
    /**
     * If `true`, the knob snaps to tick marks evenly spaced based
     * on the step property value. Defaults to `false`.
     */
    snaps: boolean;
    /**
     * Specifies the value granularity. Defaults to `1`.
     */
    step: number;
    /**
     * If `true`, the user cannot interact with the range. Defaults to `false`.
     */
    disabled: boolean;
    protected disabledChanged(): void;
    /**
     * the value of the range.
     */
    value: RangeValue;
    protected valueChanged(value: RangeValue): void;
    /**
     * Emitted when the value property has changed.
     */
    ionChange: EventEmitter<InputChangeEvent>;
    /**
     * Emitted when the styles change.
     */
    ionStyle: EventEmitter<StyleEvent>;
    /**
     * Emitted when the range has focus.
     */
    ionFocus: EventEmitter<void>;
    /**
     * Emitted when the range loses focus.
     */
    ionBlur: EventEmitter<void>;
    componentWillLoad(): void;
    componentDidLoad(): Promise<void>;
    keyChng(ev: CustomEvent<RangeEventDetail>): void;
    private handleKeyboard;
    private getValue;
    private emitStyle;
    private fireBlur;
    private fireFocus;
    private onStart;
    private onMove;
    private onEnd;
    private update;
    private readonly valA;
    private readonly valB;
    private readonly ratioLower;
    private readonly ratioUpper;
    private updateRatio;
    private updateValue;
    hostData(): {
        class: {
            'in-item': boolean;
            'range-disabled': boolean;
            'range-pressed': boolean;
            'range-has-pin': boolean;
        } | {
            'in-item': boolean;
            'range-disabled': boolean;
            'range-pressed': boolean;
            'range-has-pin': boolean;
        };
    };
    render(): JSX.Element[];
}
