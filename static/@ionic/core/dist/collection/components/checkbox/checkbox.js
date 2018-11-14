import { renderHiddenInput } from '../../utils/helpers';
import { createColorClasses, hostContext } from '../../utils/theme';
export class Checkbox {
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
    static get style() { return "/**style-placeholder:ion-checkbox:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-checkbox:**/"; }
}
let checkboxIds = 0;
