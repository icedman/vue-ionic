/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { d as renderHiddenInput } from './chunk-c23403d0.js';
import { j as hostContext } from './chunk-b9ec67ac.js';

class Select {
    constructor() {
        this.childOpts = [];
        this.inputId = `ion-sel-${selectIds++}`;
        this.isExpanded = false;
        this.keyFocus = false;
        this.text = '';
        this.disabled = false;
        this.cancelText = 'Cancel';
        this.okText = 'OK';
        this.name = this.inputId;
        this.multiple = false;
        this.interface = 'alert';
        this.interfaceOptions = {};
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
    disabledChanged() {
        this.emitStyle();
    }
    valueChanged() {
        if (this.value === undefined) {
            this.childOpts.filter(o => o.selected).forEach(selectOption => {
                selectOption.selected = false;
            });
            this.text = '';
        }
        else {
            let hasChecked = false;
            const texts = [];
            this.childOpts.forEach(selectOption => {
                if ((Array.isArray(this.value) && this.value.includes(selectOption.value)) || (selectOption.value === this.value)) {
                    if (!selectOption.selected && (this.multiple || !hasChecked)) {
                        selectOption.selected = true;
                    }
                    else if (!this.multiple && hasChecked && selectOption.selected) {
                        selectOption.selected = false;
                    }
                    hasChecked = true;
                }
                else if (selectOption.selected) {
                    selectOption.selected = false;
                }
                if (selectOption.selected) {
                    texts.push(selectOption.textContent || '');
                }
            });
            this.text = texts.join(', ');
        }
        this.ionChange.emit({
            value: this.value,
            text: this.text
        });
        this.emitStyle();
    }
    optLoad(ev) {
        const selectOption = ev.target;
        this.childOpts = Array.from(this.el.querySelectorAll('ion-select-option'));
        if (this.value != null && (Array.isArray(this.value) && this.value.includes(selectOption.value)) || (selectOption.value === this.value)) {
            selectOption.selected = true;
        }
        else if (Array.isArray(this.value) && this.multiple && selectOption.selected) {
            this.value.push(selectOption.value);
        }
        else if (this.value === undefined && selectOption.selected) {
            this.value = selectOption.value;
        }
        else if (selectOption.selected) {
            selectOption.selected = false;
        }
    }
    optUnload(ev) {
        const index = this.childOpts.indexOf(ev.target);
        if (index > -1) {
            this.childOpts.splice(index, 1);
        }
    }
    onSelect(ev) {
        this.childOpts.forEach(selectOption => {
            if (selectOption === ev.target) {
                this.value = selectOption.value;
            }
            else {
                selectOption.selected = false;
            }
        });
    }
    componentWillLoad() {
        if (!this.value) {
            this.value = this.multiple ? [] : undefined;
        }
    }
    componentDidLoad() {
        const label = this.getLabel();
        if (label) {
            this.labelId = label.id = this.name + '-lbl';
        }
        if (this.multiple) {
            const checked = this.childOpts.filter(o => o.selected);
            this.value.length = 0;
            checked.forEach(o => {
                this.value.push(o.value);
            });
            this.text = checked.map(o => o.textContent).join(', ');
        }
        else {
            const checked = this.childOpts.find(o => o.selected);
            if (checked) {
                this.value = checked.value;
                this.text = checked.textContent || '';
            }
        }
        this.emitStyle();
    }
    open(ev) {
        let selectInterface = this.interface;
        if ((selectInterface === 'action-sheet' || selectInterface === 'popover') && this.multiple) {
            console.warn(`Select interface cannot be "${selectInterface}" with a multi-value select. Using the "alert" interface instead.`);
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover' && !ev) {
            console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover') {
            return this.openPopover(ev);
        }
        if (selectInterface === 'action-sheet') {
            return this.openActionSheet();
        }
        return this.openAlert();
    }
    getLabel() {
        const item = this.el.closest('ion-item');
        if (item) {
            return item.querySelector('ion-label');
        }
        return null;
    }
    async openPopover(ev) {
        const interfaceOptions = this.interfaceOptions;
        const popoverOpts = Object.assign({}, interfaceOptions, { component: 'ion-select-popover', cssClass: ['select-popover', interfaceOptions.cssClass], event: ev, componentProps: {
                header: interfaceOptions.header,
                subHeader: interfaceOptions.subHeader,
                message: interfaceOptions.message,
                value: this.value,
                options: this.childOpts.map(o => {
                    return {
                        text: o.textContent,
                        value: o.value,
                        checked: o.selected,
                        disabled: o.disabled,
                        handler: () => {
                            this.value = o.value;
                            this.close();
                        }
                    };
                })
            } });
        const popover = this.overlay = await this.popoverCtrl.create(popoverOpts);
        await popover.present();
        this.isExpanded = true;
        return popover;
    }
    async openActionSheet() {
        const actionSheetButtons = this.childOpts.map(option => {
            return {
                role: (option.selected ? 'selected' : ''),
                text: option.textContent,
                handler: () => {
                    this.value = option.value;
                }
            };
        });
        actionSheetButtons.push({
            text: this.cancelText,
            role: 'cancel',
            handler: () => {
                this.ionCancel.emit();
            }
        });
        const interfaceOptions = this.interfaceOptions;
        const actionSheetOpts = Object.assign({}, interfaceOptions, { buttons: actionSheetButtons, cssClass: ['select-action-sheet', interfaceOptions.cssClass] });
        const actionSheet = this.overlay = await this.actionSheetCtrl.create(actionSheetOpts);
        await actionSheet.present();
        this.isExpanded = true;
        return actionSheet;
    }
    async openAlert() {
        const label = this.getLabel();
        const labelText = (label) ? label.textContent : null;
        const interfaceOptions = this.interfaceOptions;
        const inputType = (this.multiple ? 'checkbox' : 'radio');
        const alertOpts = Object.assign({}, interfaceOptions, { header: interfaceOptions.header ? interfaceOptions.header : labelText, inputs: this.childOpts.map(o => {
                return {
                    type: inputType,
                    label: o.textContent,
                    value: o.value,
                    checked: o.selected,
                    disabled: o.disabled
                };
            }), buttons: [
                {
                    text: this.cancelText,
                    role: 'cancel',
                    handler: () => {
                        this.ionCancel.emit();
                    }
                },
                {
                    text: this.okText,
                    handler: (selectedValues) => {
                        this.value = selectedValues;
                    }
                }
            ], cssClass: ['select-alert', interfaceOptions.cssClass,
                (this.multiple ? 'multiple-select-alert' : 'single-select-alert')] });
        const alert = this.overlay = await this.alertCtrl.create(alertOpts);
        await alert.present();
        this.isExpanded = true;
        return alert;
    }
    close() {
        if (!this.overlay) {
            return Promise.resolve(false);
        }
        const overlay = this.overlay;
        this.overlay = undefined;
        this.isExpanded = false;
        return overlay.dismiss();
    }
    hasValue() {
        if (Array.isArray(this.value)) {
            return this.value.length > 0;
        }
        return (this.value != null && this.value !== undefined && this.value !== '');
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive': true,
            'select': true,
            'has-value': this.hasValue(),
            'interactive-disabled': this.disabled,
            'select-disabled': this.disabled
        });
    }
    hostData() {
        return {
            class: {
                'in-item': hostContext('ion-item', this.el),
                'select-disabled': this.disabled,
                'select-key': this.keyFocus
            }
        };
    }
    render() {
        renderHiddenInput(this.el, this.name, parseValue(this.value), this.disabled);
        let addPlaceholderClass = false;
        let selectText = this.selectedText || this.text;
        if (selectText === '' && this.placeholder != null) {
            selectText = this.placeholder;
            addPlaceholderClass = true;
        }
        const selectTextClasses = {
            'select-text': true,
            'select-placeholder': addPlaceholderClass
        };
        return [
            h("div", { role: "textbox", "aria-multiline": "false", class: selectTextClasses }, selectText),
            h("div", { class: "select-icon", role: "presentation" },
                h("div", { class: "select-icon-inner" })),
            h("button", { type: "button", role: "combobox", "aria-haspopup": "dialog", "aria-labelledby": this.labelId, "aria-expanded": this.isExpanded ? 'true' : null, "aria-disabled": this.disabled ? 'true' : null, onClick: this.open.bind(this), onKeyUp: this.onKeyUp, onFocus: this.onFocus, onBlur: this.onBlur, class: "select-cover" },
                h("slot", null),
                this.mode === 'md' && h("ion-ripple-effect", null))
        ];
    }
    static get is() { return "ion-select"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "actionSheetCtrl": {
            "connect": "ion-action-sheet-controller"
        },
        "alertCtrl": {
            "connect": "ion-alert-controller"
        },
        "cancelText": {
            "type": String,
            "attr": "cancel-text"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
        },
        "el": {
            "elementRef": true
        },
        "interface": {
            "type": String,
            "attr": "interface"
        },
        "interfaceOptions": {
            "type": "Any",
            "attr": "interface-options"
        },
        "isExpanded": {
            "state": true
        },
        "keyFocus": {
            "state": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "multiple": {
            "type": Boolean,
            "attr": "multiple"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "okText": {
            "type": String,
            "attr": "ok-text"
        },
        "open": {
            "method": true
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "popoverCtrl": {
            "connect": "ion-popover-controller"
        },
        "selectedText": {
            "type": String,
            "attr": "selected-text"
        },
        "text": {
            "state": true
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
        }, {
            "name": "ionCancel",
            "method": "ionCancel",
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
    static get listeners() { return [{
            "name": "ionSelectOptionDidLoad",
            "method": "optLoad"
        }, {
            "name": "ionSelectOptionDidUnload",
            "method": "optUnload"
        }, {
            "name": "ionSelect",
            "method": "onSelect"
        }]; }
    static get style() { return ":host{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-ms-flexbox;display:flex;position:relative;color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.select-key) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color)}.select-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:var(--icon-color);pointer-events:none}::slotted(ion-select-option){display:none}button:focus{outline:none}:host{--color:var(--ion-text-color,#000);--icon-color:var(--ion-text-color-step-600,#999);--padding-top:11px;--padding-end:8px;--padding-bottom:11px;--padding-start:16px;--placeholder-color:var(--ion-text-color-step-600,#999)}.select-icon{width:12px;height:19px}"; }
    static get styleMode() { return "md"; }
}
function parseValue(value) {
    if (value == null) {
        return undefined;
    }
    if (Array.isArray(value)) {
        return value.join(',');
    }
    return value.toString();
}
let selectIds = 0;

class SelectOption {
    constructor() {
        this.inputId = `ion-selopt-${selectOptionIds++}`;
        this.disabled = false;
        this.selected = false;
    }
    componentWillLoad() {
        if (this.value == null) {
            this.value = this.el.textContent || '';
        }
    }
    componentDidLoad() {
        this.ionSelectOptionDidLoad.emit();
    }
    componentDidUnload() {
        this.ionSelectOptionDidUnload.emit();
    }
    hostData() {
        return {
            'role': 'option',
            'id': this.inputId
        };
    }
    static get is() { return "ion-select-option"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "el": {
            "elementRef": true
        },
        "selected": {
            "type": Boolean,
            "attr": "selected"
        },
        "value": {
            "type": "Any",
            "attr": "value",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "ionSelectOptionDidLoad",
            "method": "ionSelectOptionDidLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSelectOptionDidUnload",
            "method": "ionSelectOptionDidUnload",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
}
let selectOptionIds = 0;

class SelectPopover {
    constructor() {
        this.options = [];
    }
    onSelect(ev) {
        const option = this.options.find(o => o.value === ev.target.value);
        if (option && option.handler) {
            option.handler();
        }
    }
    render() {
        return (h("ion-list", null,
            this.header !== undefined && h("ion-list-header", null, this.header),
            (this.subHeader !== undefined || this.message !== undefined) &&
                h("ion-item", null,
                    h("ion-label", { "text-wrap": true },
                        this.subHeader !== undefined && h("h3", null, this.subHeader),
                        this.message !== undefined && h("p", null, this.message))),
            h("ion-radio-group", null, this.options.map(option => h("ion-item", null,
                h("ion-label", null, option.text),
                h("ion-radio", { checked: option.checked, value: option.value, disabled: option.disabled }))))));
    }
    static get is() { return "ion-select-popover"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return {
        "header": {
            "type": String,
            "attr": "header"
        },
        "message": {
            "type": String,
            "attr": "message"
        },
        "options": {
            "type": "Any",
            "attr": "options"
        },
        "subHeader": {
            "type": String,
            "attr": "sub-header"
        }
    }; }
    static get listeners() { return [{
            "name": "ionSelect",
            "method": "onSelect"
        }]; }
    static get style() { return ".sc-ion-select-popover-h   ion-list.sc-ion-select-popover{margin:-1px 0}.sc-ion-select-popover-h   ion-label.sc-ion-select-popover, .sc-ion-select-popover-h   ion-list-header.sc-ion-select-popover{margin:0}"; }
}

export { Select as IonSelect, SelectOption as IonSelectOption, SelectPopover as IonSelectPopover };
