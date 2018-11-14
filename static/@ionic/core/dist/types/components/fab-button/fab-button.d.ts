import '../../stencil.core';
import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { Color, Mode, RouterDirection } from '../../interface';
export declare class FabButton implements ComponentInterface {
    el: HTMLElement;
    keyFocus: boolean;
    win: Window;
    /**
     * The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     */
    mode: Mode;
    /**
     * The color to use from your application's color palette.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information on colors, see [theming](/docs/theming/basics).
     */
    color?: Color;
    /**
     * If `true`, the fab button will be show a close icon. Defaults to `false`.
     */
    activated: boolean;
    /**
     * If `true`, the user cannot interact with the fab button. Defaults to `false`.
     */
    disabled: boolean;
    /**
     * Contains a URL or a URL fragment that the hyperlink points to.
     * If this property is set, an anchor tag will be rendered.
     */
    href?: string;
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    routerDirection?: RouterDirection;
    /**
     * If `true`, the fab button will show when in a fab-list.
     */
    show: boolean;
    /**
     * If `true`, the fab button will be translucent. Defaults to `false`.
     */
    translucent: boolean;
    /**
     * The type of the button.
     * Possible values are: `"submit"`, `"reset"` and `"button"`.
     * Default value is: `"button"`
     */
    type: 'submit' | 'reset' | 'button';
    /**
     * Emitted when the button has focus.
     */
    ionFocus: EventEmitter<void>;
    /**
     * Emitted when the button loses focus.
     */
    ionBlur: EventEmitter<void>;
    private onFocus;
    private onKeyUp;
    private onBlur;
    hostData(): {
        'ion-activatable': boolean;
        class: {
            'fab-button-in-list': boolean;
            'fab-button-translucent-in-list': boolean;
            'fab-button-close-active': boolean;
            'fab-button-show': boolean;
            'fab-button-disabled': boolean;
            'fab-button-translucent': boolean;
            'focused': boolean;
        } | {
            'fab-button-in-list': boolean;
            'fab-button-translucent-in-list': boolean;
            'fab-button-close-active': boolean;
            'fab-button-show': boolean;
            'fab-button-disabled': boolean;
            'fab-button-translucent': boolean;
            'focused': boolean;
        };
    };
    render(): JSX.Element;
}
