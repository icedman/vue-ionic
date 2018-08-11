import { ModalOptions } from '../../interface';
import { OverlayController } from '../../utils/overlays';
export declare class ModalController implements OverlayController {
    private modals;
    doc: Document;
    protected modalWillPresent(ev: any): void;
    protected modalWillDismiss(ev: any): void;
    protected escapeKeyUp(): void;
    /**
     * Create a modal overlay with modal options.
     */
    create(opts?: ModalOptions): Promise<HTMLIonModalElement>;
    /**
     * Dismiss the open modal overlay.
     */
    dismiss(data?: any, role?: string, modalId?: number): Promise<void>;
    /**
     * Get the most recently opened modal overlay.
     */
    getTop(): HTMLIonModalElement;
}
