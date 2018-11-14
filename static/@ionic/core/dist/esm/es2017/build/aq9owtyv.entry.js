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
    static get style() { return ":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.checkbox-icon{border-radius:var(--border-radius);position:relative;width:var(--size);height:var(--size);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict}.checkbox-inner{border-color:var(--checkmark-color);opacity:0}:host(.checkbox-checked) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-inner{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--size:16px;--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:var(--ion-border-color,#c1c4cd);--background:var(--ion-item-background,var(--ion-background-color,#fff));--transition:background 280ms cubic-bezier(0.4,0,0.2,1)}:host(.checkbox-checked) .checkbox-inner{left:calc(var(--size) * .3);top:calc(var(--size) * .05);position:absolute;width:calc(var(--size) * .3125);height:calc(var(--size) * .625);-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:calc(var(--size) * .125);border-top-width:0;border-left-width:0;border-style:solid}:host(.checkbox-disabled){opacity:.3}:host(.checkbox-key) .checkbox-icon:after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host(.in-item){margin:11px 10px 10px 0;display:block;position:static}:host(.in-item[slot=start]){margin:9px 36px 9px 4px}"; }
    static get styleMode() { return "md"; }
}
let checkboxIds = 0;

export { Checkbox as IonCheckbox };
