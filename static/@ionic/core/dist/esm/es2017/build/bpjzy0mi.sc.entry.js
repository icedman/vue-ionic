/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { h as createColorClasses } from './chunk-b9ec67ac.js';

class Segment {
    constructor() {
        this.disabled = false;
    }
    valueChanged(value) {
        this.updateButtons();
        this.ionChange.emit({ value });
    }
    segmentClick(ev) {
        const selectedButton = ev.target;
        this.value = selectedButton.value;
    }
    componentDidLoad() {
        if (this.value == null) {
            const checked = this.getButtons().find(b => b.checked);
            if (checked) {
                this.value = checked.value;
            }
        }
        this.updateButtons();
    }
    updateButtons() {
        const value = this.value;
        for (const button of this.getButtons()) {
            button.checked = (button.value === value);
        }
    }
    getButtons() {
        return Array.from(this.el.querySelectorAll('ion-segment-button'));
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'segment-disabled': this.disabled })
        };
    }
    static get is() { return "ion-segment"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "el": {
            "elementRef": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true,
            "watchCallbacks": ["valueChanged"]
        }
    }; }
    static get events() { return [{
            "name": "ionChange",
            "method": "ionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "ionSelect",
            "method": "segmentClick"
        }]; }
    static get style() { return ".sc-ion-segment-ios-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit);text-align:center}.sc-ion-segment-ios-s > ion-segment-button{--btn-background:var(--background);--btn-border-color:var(--border-color);color:var(--color)}.sc-ion-segment-ios-s > .segment-button-checked{--btn-background:var(--background-checked);--btn-border-color:var(--border-color-checked);color:var(--color-checked)}.sc-ion-segment-ios-s > .segment-button-disabled, .segment-disabled.sc-ion-segment-ios-h{pointer-events:none}.sc-ion-segment-ios-h{--background:transparent;--background-checked:var(--ion-color-primary,#3880ff);--border-color:currentColor;--border-color-checked:var(--ion-color-primary,#3880ff);--border-color-disabled:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary,#3880ff);--color-checked:var(--ion-color-primary-contrast,#fff);--color-disabled:rgba(var(--ion-color-primary-rgb,56,128,255),0.3)}.segment-disabled.sc-ion-segment-ios-h{opacity:.4}.sc-ion-segment-ios-s > ion-segment-button{--border-radius:4px;--border-width:1px;--border-style:solid;--transition:100ms all linear;--icon-size:26px;height:32px;font-size:13px;line-height:37px}.sc-ion-segment-ios-s > .segment-button-disabled{--btn-border-color:var(--border-color-disabled);color:var(--color-disabled)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > ion-segment-button{color:var(--ion-color-base)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked{--btn-background:var(--ion-color-base);--btn-border-color:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-disabled{--btn-border-color:var(--ion-color-base);color:rgba(var(--ion-color-base-rgb),.5)}ion-toolbar.sc-ion-segment-ios-h, ion-toolbar   .sc-ion-segment-ios-h{left:0;right:0;top:0;bottom:0;margin:0;position:absolute}.sc-ion-segment-ios-hion-toolbar.sc-ion-segment-ios-s > ion-segment-button, ion-toolbar .sc-ion-segment-ios-h.sc-ion-segment-ios-s > ion-segment-button{max-width:100px;height:30px;font-size:12px;line-height:22px}ion-toolbar.ion-color.sc-ion-segment-ios-h:not(.ion-color), ion-toolbar.ion-color   .sc-ion-segment-ios-h:not(.ion-color){--color:var(--ion-color-contrast);--color-checked:var(--ion-color-base);--color-disabled:rgba(var(--ion-color-contrast-rgb),0.3);--background-checked:var(--ion-color-contrast);--border-color-checked:var(--ion-color-contrast);--border-color-disabled:var(--ion-color-contrast)}"; }
    static get styleMode() { return "ios"; }
}

let ids = 0;
class SegmentButton {
    constructor() {
        this.checked = false;
        this.disabled = false;
        this.value = 'ion-sb-' + (ids++);
    }
    checkedChanged(checked, prev) {
        if (checked && !prev) {
            this.ionSelect.emit();
        }
    }
    hostData() {
        const { disabled, checked, color } = this;
        return {
            'ion-activatable': true,
            class: Object.assign({}, createColorClasses(color), { 'segment-button-disabled': disabled, 'segment-button-checked': checked })
        };
    }
    render() {
        return [
            h("button", { type: "button", "aria-pressed": this.checked ? 'true' : null, class: "button-native", disabled: this.disabled, onClick: () => this.checked = true },
                h("slot", null),
                this.mode === 'md' && h("ion-ripple-effect", null))
        ];
    }
    static get is() { return "ion-segment-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "checked": {
            "type": Boolean,
            "attr": "checked",
            "mutable": true,
            "watchCallbacks": ["checkedChanged"]
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "el": {
            "elementRef": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get events() { return [{
            "name": "ionSelect",
            "method": "ionSelect",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-ion-segment-button-h{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;--icon-size:1em;--btn-background:inherit;--btn-border-color:inherit;-ms-flex:1;flex:1;color:inherit;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.sc-ion-segment-button-h:first-of-type   .button-native.sc-ion-segment-button{--padding-end:0;border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}.sc-ion-segment-button-h:not(:first-of-type)   .button-native.sc-ion-segment-button{border-left-width:0}.sc-ion-segment-button-h:last-of-type   .button-native.sc-ion-segment-button{--padding-start:0;border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}.button-native.sc-ion-segment-button{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--btn-border-color);outline:none;background:var(--btn-background);contain:content;cursor:pointer;overflow:hidden}.sc-ion-segment-button-s > ion-icon{font-size:var(--icon-size)}"; }
}

export { Segment as IonSegment, SegmentButton as IonSegmentButton };
