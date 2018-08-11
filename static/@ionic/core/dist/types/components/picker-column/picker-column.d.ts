import '../../stencil.core';
import { QueueApi } from '../../stencil.core';
import { Mode, PickerColumn } from '../../interface';
/** @hidden */
export declare class PickerColumnCmp {
    mode: Mode;
    private bounceFrom;
    private lastIndex?;
    private lastTempIndex?;
    private minY;
    private maxY;
    private optHeight;
    private pos;
    private rotateFactor;
    private scaleFactor;
    private startY?;
    private velocity;
    private y;
    private gesture?;
    el: HTMLElement;
    queue: QueueApi;
    col: PickerColumn;
    componentWillLoad(): void;
    componentDidLoad(): Promise<void>;
    private optClick;
    private setSelected;
    private update;
    private decelerate;
    private canStart;
    private onDragStart;
    private onDragMove;
    private onDragEnd;
    private refresh;
    hostData(): {
        class: {
            'picker-opts-left': boolean;
            'picker-opts-right': boolean;
        };
        style: {
            'max-width': string | undefined;
        };
    };
    render(): JSX.Element[];
}
export declare const PICKER_OPT_SELECTED = "picker-opt-selected";
export declare const DECELERATION_FRICTION = 0.97;
export declare const FRAME_MS: number;
export declare const MAX_PICKER_SPEED = 60;
