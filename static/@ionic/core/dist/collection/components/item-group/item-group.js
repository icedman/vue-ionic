import { createThemedClasses } from '../../utils/theme';
export class ItemGroup {
    hostData() {
        return {
            class: Object.assign({}, createThemedClasses(this.mode, 'item-group'), { 'item': true })
        };
    }
    static get is() { return "ion-item-group"; }
    static get style() { return "/**style-placeholder:ion-item-group:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-item-group:**/"; }
}
