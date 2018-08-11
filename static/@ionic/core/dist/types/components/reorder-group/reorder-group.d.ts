import { QueueApi } from '../../stencil.core';
import { Mode } from '../../interface';
export declare class ReorderGroup {
    private selectedItemEl;
    private selectedItemHeight;
    private lastToIndex;
    private cachedHeights;
    private scrollEl?;
    private gesture?;
    private scrollElTop;
    private scrollElBottom;
    private scrollElInitial;
    private containerTop;
    private containerBottom;
    mode: Mode;
    activated: boolean;
    el: HTMLElement;
    queue: QueueApi;
    doc: Document;
    /**
     * If true, the reorder will be hidden. Defaults to `true`.
     */
    disabled: boolean;
    disabledChanged(): void;
    componentDidLoad(): Promise<void>;
    componentDidUnload(): void;
    private canStart;
    private onDragStart;
    private onDragMove;
    private onDragEnd;
    private itemIndexForTop;
    /********* DOM WRITE ********* */
    private reorderMove;
    private autoscroll;
    hostData(): {
        class: {
            'reorder-enabled': boolean;
            'reorder-list-active': boolean;
        };
    };
}
