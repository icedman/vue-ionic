import { createThemedClasses } from '../../utils/theme';
export class Thumbnail {
    hostData() {
        return {
            class: createThemedClasses(this.mode, 'thumbnail')
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-thumbnail"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:ion-thumbnail:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-thumbnail:**/"; }
}
