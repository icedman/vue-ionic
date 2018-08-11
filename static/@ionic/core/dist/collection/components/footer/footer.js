import { createThemedClasses } from '../../utils/theme';
export class Footer {
    constructor() {
        /**
         * If true, the footer will be translucent.
         * Note: In order to scroll content behind the footer, the `fullscreen`
         * attribute needs to be set on the content.
         * Defaults to `false`.
         */
        this.translucent = false;
    }
    hostData() {
        const themedClasses = createThemedClasses(this.mode, 'footer');
        const translucentClasses = this.translucent ? createThemedClasses(this.mode, 'footer-translucent') : null;
        return {
            class: Object.assign({}, themedClasses, translucentClasses)
        };
    }
    static get is() { return "ion-footer"; }
    static get properties() { return {
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        }
    }; }
    static get style() { return "/**style-placeholder:ion-footer:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-footer:**/"; }
}
