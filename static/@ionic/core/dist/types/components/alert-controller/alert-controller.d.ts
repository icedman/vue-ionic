import { AlertOptions } from '../../interface';
import { OverlayController } from '../../utils/overlays';
export declare class AlertController implements OverlayController {
    private alerts;
    doc: Document;
    protected alertWillPresent(ev: any): void;
    protected alertWillDismiss(ev: any): void;
    protected escapeKeyUp(): void;
    /**
     * Create an alert overlay with alert options
     */
    create(opts?: AlertOptions): Promise<HTMLIonAlertElement>;
    /**
     * Dismiss the open alert overlay.
     */
    dismiss(data?: any, role?: string, alertId?: number): Promise<void>;
    /**
     * Get the most recently opened alert overlay.
     */
    getTop(): HTMLIonAlertElement;
}
