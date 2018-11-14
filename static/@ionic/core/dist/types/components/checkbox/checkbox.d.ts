import '../../stencil.core';
import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { CheckedInputChangeEvent, Color, Mode, StyleEvent } from '../../interface';
export declare class Checkbox implements ComponentInterface {
    private inputId;
    private labelId;
    el: HTMLElement;
    keyFocus: boolean;
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
     * The name of the control, which is submitted with the form data.
     */
    name: string;
    /**
     * If `true`, the checkbox is selected. Defaults to `false`.
     */
    checked: boolean;
    /**
     * If `true`, the user cannot interact with the checkbox. Defaults to `false`.
     */
    disabled: boolean;
    /**
     * The value of the toggle does not mean if it's checked or not, use the `checked`
     * property for that.
     *
     * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
     * it's only used when the toggle participates in a native `<form>`.
     * Defaults to `on`.
     */
    value: string;
    /**
     * Emitted when the checked property has changed.
     */
    ionChange: EventEmitter<CheckedInputChangeEvent>;
    /**
     * Emitted when the toggle has focus.
     */
    ionFocus: EventEmitter<void>;
    /**
     * Emitted when the toggle loses focus.
     */
    ionBlur: EventEmitter<void>;
    /**
     * Emitted when the styles change.
     */
    ionStyle: EventEmitter<StyleEvent>;
    componentWillLoad(): void;
    checkedChanged(isChecked: boolean): void;
    emitStyle(): void;
    private onChange;
    private onKeyUp;
    private onFocus;
    private onBlur;
    hostData(): {
        class: {
            'in-item': boolean;
            'checkbox-checked': boolean;
            'checkbox-disabled': boolean;
            'checkbox-key': boolean;
            'interactive': boolean;
        } | {
            'in-item': boolean;
            'checkbox-checked': boolean;
            'checkbox-disabled': boolean;
            'checkbox-key': boolean;
            'interactive': boolean;
        };
    };
    render(): JSX.Element[];
}
