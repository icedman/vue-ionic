/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { h as createColorClasses, j as hostContext } from './chunk-b9ec67ac.js';

class Radio {
    constructor() {
        this.inputId = `ion-rb-${radioButtonIds++}`;
        this.keyFocus = false;
        this.name = this.inputId;
        this.disabled = false;
        this.checked = false;
        this.onClick = () => {
            this.checkedChanged(true);
        };
        this.onChange = () => {
            this.checked = true;
            this.nativeInput.focus();
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
        if (this.value == null) {
            this.value = this.inputId;
        }
        this.emitStyle();
    }
    componentDidLoad() {
        this.ionRadioDidLoad.emit();
        this.nativeInput.checked = this.checked;
        const parentItem = this.nativeInput.closest('ion-item');
        if (parentItem) {
            const itemLabel = parentItem.querySelector('ion-label');
            if (itemLabel) {
                itemLabel.id = this.inputId + '-lbl';
                this.nativeInput.setAttribute('aria-labelledby', itemLabel.id);
            }
        }
    }
    componentDidUnload() {
        this.ionRadioDidUnload.emit();
    }
    colorChanged() {
        this.emitStyle();
    }
    checkedChanged(isChecked) {
        if (this.nativeInput.checked !== isChecked) {
            this.nativeInput.checked = isChecked;
        }
        if (isChecked) {
            this.ionSelect.emit({
                checked: true,
                value: this.value
            });
        }
        this.emitStyle();
    }
    disabledChanged(isDisabled) {
        this.nativeInput.disabled = isDisabled;
        this.emitStyle();
    }
    emitStyle() {
        this.ionStyle.emit({
            'radio-checked': this.checked,
            'interactive-disabled': this.disabled,
        });
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'in-item': hostContext('ion-item', this.el), 'interactive': true, 'radio-checked': this.checked, 'radio-disabled': this.disabled, 'radio-key': this.keyFocus })
        };
    }
    render() {
        return [
            h("div", { class: "radio-icon" },
                h("div", { class: "radio-inner" })),
            h("input", { type: "radio", onClick: this.onClick, onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, onKeyUp: this.onKeyUp, id: this.inputId, name: this.name, value: this.value, disabled: this.disabled, ref: r => this.nativeInput = r })
        ];
    }
    static get is() { return "ion-radio"; }
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
            "attr": "color",
            "watchCallbacks": ["colorChanged"]
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
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
            "type": "Any",
            "attr": "value",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "ionRadioDidLoad",
            "method": "ionRadioDidLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionRadioDidUnload",
            "method": "ionRadioDidUnload",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionStyle",
            "method": "ionStyle",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSelect",
            "method": "ionSelect",
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
        }]; }
    static get style() { return ".sc-ion-radio-md-h{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.radio-disabled.sc-ion-radio-md-h{pointer-events:none}.radio-icon.sc-ion-radio-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:var(--width);height:var(--height);contain:layout size style}.radio-inner.sc-ion-radio-md{width:var(--inner-width);height:var(--inner-height)}input.sc-ion-radio-md{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.radio-icon.sc-ion-radio-md, .radio-inner.sc-ion-radio-md{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-radio-md-h{--color:var(--ion-text-color-step-600,#999);--color-checked:var(--ion-color-primary,#3880ff);--width:20px;--height:20px;--border-width:2px;--border-style:solid;--inner-width:calc(var(--width) / 2);--inner-height:calc(var(--height) / 2)}.ion-color.sc-ion-radio-md-h   .radio-inner.sc-ion-radio-md{background:var(--ion-color-base)}.ion-color.radio-checked.sc-ion-radio-md-h   .radio-icon.sc-ion-radio-md{border-color:var(--ion-color-base)}.radio-icon.sc-ion-radio-md{margin:0;border-radius:50%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner.sc-ion-radio-md{border-radius:50%;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);background:var(--color-checked)}.radio-checked.sc-ion-radio-md-h   .radio-icon.sc-ion-radio-md{border-color:var(--color-checked)}.radio-checked.sc-ion-radio-md-h   .radio-inner.sc-ion-radio-md{-webkit-transform:scaleX(1);transform:scaleX(1)}.radio-disabled.sc-ion-radio-md-h{opacity:.3}.radio-key.sc-ion-radio-md-h   .radio-icon.sc-ion-radio-md:after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}.in-item.sc-ion-radio-md-h{margin:9px 10px 9px 0;display:block;position:static}.in-item[slot=start].sc-ion-radio-md-h{margin:11px 36px 10px 4px}"; }
    static get styleMode() { return "md"; }
}
let radioButtonIds = 0;

class RadioGroup {
    constructor() {
        this.inputId = `ion-rg-${radioGroupIds++}`;
        this.labelId = `${this.inputId}-lbl`;
        this.radios = [];
        this.allowEmptySelection = false;
        this.name = this.inputId;
    }
    valueChanged(value) {
        this.updateRadios();
        this.ionChange.emit({ value });
    }
    onRadioDidLoad(ev) {
        const radio = ev.target;
        radio.name = this.name;
        this.radios.push(radio);
        if (this.value == null && radio.checked) {
            this.value = radio.value;
        }
        else {
            this.updateRadios();
        }
    }
    onRadioDidUnload(ev) {
        const index = this.radios.indexOf(ev.target);
        if (index > -1) {
            this.radios.splice(index, 1);
        }
    }
    onRadioSelect(ev) {
        const selectedRadio = ev.target;
        if (selectedRadio) {
            this.value = selectedRadio.value;
        }
    }
    componentDidLoad() {
        let header = this.el.querySelector('ion-list-header');
        if (!header) {
            header = this.el.querySelector('ion-item-divider');
        }
        if (header) {
            const label = header.querySelector('ion-label');
            if (label) {
                this.labelId = label.id = this.name + '-lbl';
            }
        }
        this.updateRadios();
    }
    updateRadios() {
        const value = this.value;
        let hasChecked = false;
        for (const radio of this.radios) {
            if (!hasChecked && radio.value === value) {
                hasChecked = true;
                radio.checked = true;
            }
            else {
                radio.checked = false;
            }
        }
    }
    hostData() {
        return {
            'role': 'radiogroup',
            'aria-labelledby': this.labelId
        };
    }
    static get is() { return "ion-radio-group"; }
    static get properties() { return {
        "allowEmptySelection": {
            "type": Boolean,
            "attr": "allow-empty-selection"
        },
        "el": {
            "elementRef": true
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "value": {
            "type": "Any",
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
            "name": "ionRadioDidLoad",
            "method": "onRadioDidLoad"
        }, {
            "name": "ionRadioDidUnload",
            "method": "onRadioDidUnload"
        }, {
            "name": "ionSelect",
            "method": "onRadioSelect"
        }]; }
}
let radioGroupIds = 0;

export { Radio as IonRadio, RadioGroup as IonRadioGroup };
