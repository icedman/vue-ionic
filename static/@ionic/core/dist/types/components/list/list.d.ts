import { Mode } from '../../interface';
export declare class List {
    private openItem?;
    mode: Mode;
    /**
     * How the bottom border should be displayed on all items.
     */
    lines?: 'full' | 'inset' | 'none';
    /**
     * If true, the list will have margin around it and rounded corners. Defaults to `false`.
     */
    inset: boolean;
    /**
     * Get the [Item Sliding](../../item-sliding/ItemSliding) that is currently open.
     */
    getOpenItem(): HTMLIonItemSlidingElement | undefined;
    /**
     * Set an [Item Sliding](../../item-sliding/ItemSliding) as the open item.
     */
    setOpenItem(itemSliding: HTMLIonItemSlidingElement | undefined): void;
    /**
     * Close the sliding items. Items can also be closed from the [Item Sliding](../../item-sliding/ItemSliding).
     * Returns a boolean value of whether it closed an item or not.
     */
    closeSlidingItems(): boolean;
    hostData(): {
        class: {
            [x: string]: boolean;
            'list-inset': boolean;
        };
    };
}
