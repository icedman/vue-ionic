/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { d as renderHiddenInput } from './chunk-c23403d0.js';
import { h as createColorClasses, j as hostContext } from './chunk-b9ec67ac.js';

class Checkbox {
    constructor() {
        this.inputId = `ion-cb-${checkboxIds++}`;
        this.labelId = `${this.inputId}-lbl`;
        this.keyFocus = false;
        this.name = this.inputId;
        this.checked = false;
        this.disabled = false;
        this.value = 'on';
        this.onChange = () => {
            this.checked = !this.checked;
        };
        this.onKeyUp = () => {
            this.keyFocus = true;
        };
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.keyFocus = false;
            this.ionBlur.emit();
        };
    }
    componentWillLoad() {
        this.emitStyle();
    }
    checkedChanged(isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
        this.emitStyle();
    }
    emitStyle() {
        this.ionStyle.emit({
            'checkbox-checked': this.checked,
            'interactive-disabled': this.disabled,
        });
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'in-item': hostContext('ion-item', this.el), 'checkbox-checked': this.checked, 'checkbox-disabled': this.disabled, 'checkbox-key': this.keyFocus, 'interactive': true })
        };
    }
    render() {
        renderHiddenInput(this.el, this.name, this.value, this.disabled);
        return [
            h("div", { class: "checkbox-icon" },
                h("div", { class: "checkbox-inner" })),
            h("input", { type: "checkbox", id: this.inputId, "aria-labelledby": this.labelId, onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, onKeyUp: this.onKeyUp, checked: this.checked, name: this.name, value: this.value, disabled: this.disabled })
        ];
    }
    static get is() { return "ion-checkbox"; }
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
            "attr": "disabled",
            "watchCallbacks": ["emitStyle"]
        },
        "el": {
            "elementRef": true
        },
        "keyFocus": {
            "state": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get events() { return [{
            "name": "ionChange",
            "method": "ionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionFocus",
            "method": "ionFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionBlur",
            "method": "ionBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionStyle",
            "method": "ionStyle",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-ion-checkbox-ios-h{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.ion-color.sc-ion-checkbox-ios-h{--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}input.sc-ion-checkbox-ios{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.checkbox-icon.sc-ion-checkbox-ios{border-radius:var(--border-radius);position:relative;width:var(--size);height:var(--size);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict}.checkbox-inner.sc-ion-checkbox-ios{border-color:var(--checkmark-color);opacity:0}.checkbox-checked.sc-ion-checkbox-ios-h   .checkbox-icon.sc-ion-checkbox-ios{border-color:var(--border-color-checked);background:var(--background-checked)}.checkbox-checked.sc-ion-checkbox-ios-h   .checkbox-inner.sc-ion-checkbox-ios{opacity:1}.checkbox-disabled.sc-ion-checkbox-ios-h{pointer-events:none}.sc-ion-checkbox-ios-h{--size:24px;--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:var(--ion-item-border-color,var(--ion-border-color,#c8c7cc));--background:var(--ion-item-background,var(--ion-background-color,#fff))}.checkbox-inner.sc-ion-checkbox-ios{left:calc(var(--size) / 2.5 - 1px);top:calc(var(--size) / 6);position:absolute;width:calc(var(--size) / 6 + 1px);height:calc(var(--size) / 2);-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid}.checkbox-disabled.sc-ion-checkbox-ios-h{opacity:.3}.checkbox-key.sc-ion-checkbox-ios-h   .checkbox-icon.sc-ion-checkbox-ios:after{border-radius:50%;left:-9px;top:-9px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}.in-item.sc-ion-checkbox-ios-h{margin:10px 8px 9px 0;display:block;position:static}.in-item[slot=start].sc-ion-checkbox-ios-h{margin:8px 16px 8px 2px}"; }
    static get styleMode() { return "ios"; }
}
let checkboxIds = 0;

export { Checkbox as IonCheckbox };
