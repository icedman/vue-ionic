import { Animator } from './animator';
/** @hidden */
export class AnimationControllerImpl {
    /**
     * Creates an animation instance
     */
    create(animationBuilder, baseEl, opts) {
        if (animationBuilder) {
            return animationBuilder(Animator, baseEl, opts);
        }
        return Promise.resolve(new Animator());
    }
    static get is() { return "ion-animation-controller"; }
    static get properties() { return {
        "create": {
            "method": true
        }
    }; }
}
