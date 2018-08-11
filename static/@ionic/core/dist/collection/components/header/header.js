import { createThemedClasses } from '../../utils/theme';
export class Header {
    constructor() {
        /**
         * If true, the header will be translucent.
         * Note: In order to scroll content behind the header, the `fullscreen`
         * attribute needs to be set on the content.
         * Defaults to `false`.
         */
        this.translucent = false;
    }
    hostData() {
        const themedClasses = createThemedClasses(this.mode, 'header');
        const translucentClasses = this.translucent ? createThemedClasses(this.mode, 'header-translucent') : null;
        return {
            class: Object.assign({}, themedClasses, translucentClasses)
        };
    }
    static get is() { return "ion-header"; }
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
    static get style() { return "/**style-placeholder:ion-header:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-header:**/"; }
}
