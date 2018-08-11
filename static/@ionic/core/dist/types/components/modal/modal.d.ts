import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { Animation, AnimationBuilder, ComponentProps, ComponentRef, Config, FrameworkDelegate, Mode, OverlayEventDetail, OverlayInterface } from '../../interface';
export declare class Modal implements OverlayInterface {
    private usersElement?;
    animation: Animation | undefined;
    presented: boolean;
    mode: Mode;
    el: HTMLElement;
    animationCtrl: HTMLIonAnimationControllerElement;
    config: Config;
    overlayId: number;
    delegate?: FrameworkDelegate;
    keyboardClose: boolean;
    /**
     * Animation to use when the modal is presented.
     */
    enterAnimation?: AnimationBuilder;
    /**
     * Animation to use when the modal is dismissed.
     */
    leaveAnimation?: AnimationBuilder;
    /**
     * The component to display inside of the modal.
     */
    component: ComponentRef;
    /**
     * The data to pass to the modal component.
     */
    componentProps?: ComponentProps;
    /**
     * Additional classes to apply for custom CSS. If multiple classes are
     * provided they should be separated by spaces.
     */
    cssClass?: string | string[];
    /**
     * If true, the modal will be dismissed when the backdrop is clicked. Defaults to `true`.
     */
    enableBackdropDismiss: boolean;
    /**
     * If true, a backdrop will be displayed behind the modal. Defaults to `true`.
     */
    showBackdrop: boolean;
    /**
     * If true, the modal will animate. Defaults to `true`.
     */
    willAnimate: boolean;
    /**
     * Emitted after the modal has loaded.
     */
    ionModalDidLoad: EventEmitter<void>;
    /**
     * Emitted after the modal has unloaded.
     */
    ionModalDidUnload: EventEmitter<void>;
    /**
     * Emitted after the modal has presented.
     */
    didPresent: EventEmitter<void>;
    /**
     * Emitted before the modal has presented.
     */
    willPresent: EventEmitter<void>;
    /**
     * Emitted before the modal has dismissed.
     */
    willDismiss: EventEmitter<OverlayEventDetail>;
    /**
     * Emitted after the modal has dismissed.
     */
    didDismiss: EventEmitter<OverlayEventDetail>;
    componentDidLoad(): void;
    componentDidUnload(): void;
    protected onDismiss(ev: UIEvent): void;
    protected onBackdropTap(): void;
    protected lifecycle(modalEvent: CustomEvent): void;
    /**
     * Present the modal overlay after it has been created.
     */
    present(): Promise<void>;
    /**
     * Dismiss the modal overlay after it has been presented.
     */
    dismiss(data?: any, role?: string): Promise<void>;
    /**
     * Returns a promise that resolves when the modal did dismiss. It also accepts a callback
     * that is called in the same circustances.
     *
     */
    onDidDismiss(callback?: (detail: OverlayEventDetail) => void): Promise<OverlayEventDetail>;
    /**
     * Returns a promise that resolves when the modal will dismiss. It also accepts a callback
     * that is called in the same circustances.
     *
     */
    onWillDismiss(callback?: (detail: OverlayEventDetail) => void): Promise<OverlayEventDetail>;
    hostData(): {
        'no-router': boolean;
        class: {
            [x: string]: boolean;
        };
        style: {
            zIndex: number;
        };
    };
    render(): JSX.Element[];
}
