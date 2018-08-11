import { ToastOptions } from '../../interface';
import { OverlayController } from '../../utils/overlays';
export declare class ToastController implements OverlayController {
    private toasts;
    doc: Document;
    protected toastWillPresent(ev: any): void;
    protected toastWillDismiss(ev: any): void;
    protected escapeKeyUp(): void;
    /**
     * Create a toast overlay with toast options.
     */
    create(opts?: ToastOptions): Promise<HTMLIonToastElement>;
    /**
     * Dismiss the open toast overlay.
     */
    dismiss(data?: any, role?: string, toastId?: number): Promise<void>;
    /**
     * Get the most recently opened toast overlay.
     */
    getTop(): HTMLIonToastElement;
}
