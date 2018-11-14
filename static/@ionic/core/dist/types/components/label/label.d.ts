import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { Color, Mode, StyleEvent } from '../../interface';
export declare class Label implements ComponentInterface {
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
     * The position determines where and how the label behaves inside an item.
     */
    position?: 'fixed' | 'stacked' | 'floating';
    /**
     * Emitted when the styles change.
     */
    ionStyle: EventEmitter<StyleEvent>;
    noAnimate: boolean;
    componentWillLoad(): void;
    componentDidLoad(): void;
    positionChanged(): void;
    private emitStyle;
    hostData(): {
        class: {
            [`label-no-animate`]: boolean;
        } | {
            [x: string]: boolean;
            [`label-no-animate`]: boolean;
        };
    };
}
