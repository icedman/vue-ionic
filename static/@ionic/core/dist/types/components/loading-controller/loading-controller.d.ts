import { LoadingOptions } from '../../interface';
import { OverlayController } from '../../utils/overlays';
export declare class LoadingController implements OverlayController {
    private loadings;
    doc: Document;
    protected loadingWillPresent(ev: any): void;
    protected loadingWillDismiss(ev: any): void;
    protected escapeKeyUp(): void;
    /**
     * Create a loading overlay with loading options.
     */
    create(opts?: LoadingOptions): Promise<HTMLIonLoadingElement>;
    /**
     * Dismiss the open loading overlay.
     */
    dismiss(data?: any, role?: string, loadingId?: number): Promise<void>;
    /**
     * Get the most recently opened loading overlay.
     */
    getTop(): HTMLIonLoadingElement;
}
