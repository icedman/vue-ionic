import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { Animation, AnimationBuilder, Config, Mode, OverlayEventDetail, OverlayInterface, PickerButton, PickerColumn } from '../../interface';
export declare class Picker implements OverlayInterface {
    private durationTimeout;
    mode: Mode;
    presented: boolean;
    animation?: Animation;
    el: HTMLElement;
    private showSpinner;
    private spinner;
    animationCtrl: HTMLIonAnimationControllerElement;
    config: Config;
    /** @hidden */
    overlayId: number;
    /**
     * If the keyboard should be able to close the picker. Defaults to true.
     */
    keyboardClose: boolean;
    /**
     * Animation to use when the picker is presented.
     */
    enterAnimation?: AnimationBuilder;
    /**
     * Animation to use when the picker is dismissed.
     */
    leaveAnimation?: AnimationBuilder;
    /**
     * Array of buttons to be displayed at the top of the picker.
     */
    buttons: PickerButton[];
    /**
     * Array of columns to be displayed in the picker.
     */
    columns: PickerColumn[];
    /**
     * Additional classes to apply for custom CSS. If multiple classes are
     * provided they should be separated by spaces.
     */
    cssClass?: string | string[];
    /**
     * Number of milliseconds to wait before dismissing the picker.
     */
    duration?: number;
    /**
     * If true, a backdrop will be displayed behind the picker. Defaults to `true`.
     */
    showBackdrop: boolean;
    /**
     * If true, the picker will be dismissed when the backdrop is clicked. Defaults to `true`.
     */
    enableBackdropDismiss: boolean;
    /**
     * If true, the picker will animate. Defaults to `true`.
     */
    willAnimate: boolean;
    /**
     * Emitted after the picker has loaded.
     */
    ionPickerDidLoad: EventEmitter<void>;
    /**
     * Emitted after the picker has presented.
     */
    didPresent: EventEmitter<void>;
    /**
     * Emitted before the picker has presented.
     */
    willPresent: EventEmitter<void>;
    /**
     * Emitted before the picker has dismissed.
     */
    willDismiss: EventEmitter<OverlayEventDetail>;
    /**
     * Emitted after the picker has dismissed.
     */
    didDismiss: EventEmitter<OverlayEventDetail>;
    /**
     * Emitted after the picker has unloaded.
     */
    ionPickerDidUnload: EventEmitter<void>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    protected onBackdropTap(): void;
    /**
     * Present the picker overlay after it has been created.
     */
    present(): Promise<void>;
    /**
     * Dismiss the picker overlay after it has been presented.
     */
    dismiss(data?: any, role?: string): Promise<void>;
    /**
     * Returns a promise that resolves when the picker did dismiss. It also accepts a callback
     * that is called in the same circustances.
     *
     */
    onDidDismiss(callback?: (detail: OverlayEventDetail) => void): Promise<OverlayEventDetail>;
    /**
     * Returns a promise that resolves when the picker will dismiss. It also accepts a callback
     * that is called in the same circustances.
     *
     */
    onWillDismiss(callback?: (detail: OverlayEventDetail) => void): Promise<OverlayEventDetail>;
    /**
     * Add a new PickerButton to the picker
     */
    addButton(button: PickerButton): void;
    /**
     * Add a new PickerColumn to the picker
     */
    addColumn(column: PickerColumn): void;
    /**
     * Returns the column the matches the specified name
     */
    getColumn(name: string): PickerColumn | undefined;
    /**
     * Returns all the PickerColumns
     */
    getColumns(): PickerColumn[];
    private buttonClick;
    private getSelected;
    hostData(): {
        class: {
            [x: string]: boolean;
        };
        style: {
            zIndex: number;
        };
    };
    render(): JSX.Element[];
}
