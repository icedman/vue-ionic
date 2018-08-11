import { EventEmitter } from '../../stencil.core';
import { Color, Mode, StyleEvent } from '../../interface';
export declare class Label {
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
     * Possible values are: 'inline' | 'fixed' | 'stacked' | 'floating'
     */
    position?: 'fixed' | 'stacked' | 'floating';
    /**
     * Emitted when the styles change.
     */
    ionStyle: EventEmitter<StyleEvent>;
    getText(): string;
    componentDidLoad(): void;
    positionChanged(): void;
    hostData(): {
        class: {};
    };
}
