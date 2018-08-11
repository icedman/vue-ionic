import { PopoverOptions } from '../../interface';
import { OverlayController } from '../../utils/overlays';
export declare class PopoverController implements OverlayController {
    private popovers;
    doc: Document;
    protected popoverWillPresent(ev: any): void;
    protected popoverWillDismiss(ev: any): void;
    protected escapeKeyUp(): void;
    /**
     * Create a popover overlay with popover options.
     */
    create(opts?: PopoverOptions): Promise<HTMLIonPopoverElement>;
    /**
     * Dismiss the open popover overlay.
     */
    dismiss(data?: any, role?: string, popoverId?: number): Promise<void>;
    /**
     * Get the most recently opened popover overlay.
     */
    getTop(): HTMLIonPopoverElement;
}
