import { ActionSheetOptions } from '../../interface';
import { OverlayController } from '../../utils/overlays';
export declare class ActionSheetController implements OverlayController {
    private actionSheets;
    doc: Document;
    protected actionSheetWillPresent(ev: any): void;
    protected actionSheetWillDismiss(ev: any): void;
    protected escapeKeyUp(): void;
    /**
     * Create an action sheet overlay with action sheet options.
     */
    create(opts?: ActionSheetOptions): Promise<HTMLIonActionSheetElement>;
    /**
     * Dismiss the open action sheet overlay.
     */
    dismiss(data?: any, role?: string, actionSheetId?: number): Promise<void>;
    /**
     * Get the most recently opened action sheet overlay.
     */
    getTop(): HTMLIonActionSheetElement;
}
