import { Animation, AnimationBuilder, AnimationController } from '../../interface';
/** @hidden */
export declare class AnimationControllerImpl implements AnimationController {
    /**
     * Creates an animation instance
     */
    create(animationBuilder?: AnimationBuilder, baseEl?: any, opts?: any): Promise<Animation>;
}
