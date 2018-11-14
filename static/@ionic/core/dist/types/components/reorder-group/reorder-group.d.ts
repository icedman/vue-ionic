import { ComponentInterface, EventEmitter, QueueApi } from '../../stencil.core';
import { ItemReorderDetail } from '../../interface';
declare const enum ReordeGroupState {
    Idle = 0,
    Active = 1,
    Complete = 2
}
export declare class ReorderGroup implements ComponentInterface {
    private selectedItemEl?;
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
    state: ReordeGroupState;
    el: HTMLElement;
    queue: QueueApi;
    doc: Document;
    /**
     * If `true`, the reorder will be hidden. Defaults to `true`.
     */
    disabled: boolean;
    disabledChanged(): void;
    /**
     * Event that needs to be listen to in order to respond to reorder action.
     * `ion-reorder-group` uses this event to delegate to the user the reordering of data array.
     *
     *
     * The complete() method exposed as
     */
    ionItemReorder: EventEmitter<ItemReorderDetail>;
    componentDidLoad(): Promise<void>;
    componentDidUnload(): void;
    /**
     * This method must be called once the `ionItemReorder` event is handled in order
     * to complete the reorder operation.
     */
    complete(listOrReorder?: boolean | any[]): Promise<any>;
    private canStart;
    private onStart;
    private onMove;
    private onEnd;
    private completeSync;
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
export {};