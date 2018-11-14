import '../../stencil.core';
import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { Animation, AnimationBuilder, Config, Mode, OverlayEventDetail, OverlayInterface } from '../../interface';
export declare class Loading implements ComponentInterface, OverlayInterface {
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
     * Animation to use when the loading indicator is presented.
     */
    enterAnimation?: AnimationBuilder;
    /**
     * Animation to use when the loading indicator is dismissed.
     */
    leaveAnimation?: AnimationBuilder;
    /**
     * Optional text content to display in the loading indicator.
     */
    message?: string;
    /**
     * Additional classes to apply for custom CSS. If multiple classes are
     * provided they should be separated by spaces.
     */
    cssClass?: string | string[];
    /**
     * Number of milliseconds to wait before dismissing the loading indicator.
     */
    duration: number;
    /**
     * If `true`, the loading indicator will be dismissed when the backdrop is clicked. Defaults to `false`.
     */
    backdropDismiss: boolean;
    /**
     * If `true`, a backdrop will be displayed behind the loading indicator. Defaults to `true`.
     */
    showBackdrop: boolean;
    /**
     * The name of the spinner to display. Possible values are: `"lines"`, `"lines-small"`, `"dots"`,
     * `"bubbles"`, `"circles"`, `"crescent"`.
     */
    spinner?: string;
    /**
     * If `true`, the loading indicator will be translucent. Defaults to `false`.
     */
    translucent: boolean;
    /**
     * If `true`, the loading indicator will animate. Defaults to `true`.
     */
    animated: boolean;
    /**
     * Emitted after the loading has unloaded.
     */
    ionLoadingDidUnload: EventEmitter<void>;
    /**
     * Emitted after the loading has loaded.
     */
    ionLoadingDidLoad: EventEmitter<void>;
    /**
     * Emitted after the loading has presented.
     */
    didPresent: EventEmitter<void>;
    /**
     * Emitted before the loading has presented.
     */
    willPresent: EventEmitter<void>;
    /**
     * Emitted before the loading has dismissed.
     */
    willDismiss: EventEmitter<OverlayEventDetail>;
    /**
     * Emitted after the loading has dismissed.
     */
    didDismiss: EventEmitter<OverlayEventDetail>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    protected onBackdropTap(): void;
    /**
     * Present the loading overlay after it has been created.
     */
    present(): Promise<void>;
    /**
     * Dismiss the loading overlay after it has been presented.
     */
    dismiss(data?: any, role?: string): Promise<boolean>;
    /**
     * Returns a promise that resolves when the loading did dismiss.
     */
    onDidDismiss(): Promise<OverlayEventDetail>;
    /**
     * Returns a promise that resolves when the loading will dismiss.
     */
    onWillDismiss(): Promise<OverlayEventDetail>;
    hostData(): {
        style: {
            zIndex: number;
        };
        class: {
            [x: string]: boolean;
        };
    };
    render(): JSX.Element[];
}
