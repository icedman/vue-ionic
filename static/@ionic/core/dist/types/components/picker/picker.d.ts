import '../../stencil.core';
import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { Animation, AnimationBuilder, Config, Mode, OverlayEventDetail, OverlayInterface, PickerButton, PickerColumn } from '../../interface';
export declare class Picker implements ComponentInterface, OverlayInterface {
    private durationTimeout;
    presented: boolean;
    animation?: Animation;
    el: HTMLElement;
    animationCtrl: HTMLIonAnimationControllerElement;
    config: Config;
    /** @internal */
    overlayIndex: number;
    /**
     * The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     */
    mode: Mode;
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
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
    duration: number;
    /**
     * If `true`, a backdrop will be displayed behind the picker. Defaults to `true`.
     */
    showBackdrop: boolean;
    /**
     * If `true`, the picker will be dismissed when the backdrop is clicked. Defaults to `true`.
     */
    backdropDismiss: boolean;
    /**
     * If `true`, the picker will animate. Defaults to `true`.
     */
    animated: boolean;
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
    dismiss(data?: any, role?: string): Promise<boolean>;
    /**
     * Returns a promise that resolves when the picker did dismiss.
     */
    onDidDismiss(): Promise<OverlayEventDetail>;
    /**
     * Returns a promise that resolves when the picker will dismiss.
     */
    onWillDismiss(): Promise<OverlayEventDetail>;
    /**
     * Returns the column the matches the specified name
     */
    getColumn(name: string): Promise<PickerColumn | undefined>;
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
