import { dismiss, eventMethod, present } from '../../utils/overlays';
import { createThemedClasses, getClassMap } from '../../utils/theme';
import { iosEnterAnimation } from './animations/ios.enter';
import { iosLeaveAnimation } from './animations/ios.leave';
export class Picker {
    constructor() {
        this.presented = false;
        /**
         * If the keyboard should be able to close the picker. Defaults to true.
         */
        this.keyboardClose = true;
        /**
         * Array of buttons to be displayed at the top of the picker.
         */
        this.buttons = [];
        /**
         * Array of columns to be displayed in the picker.
         */
        this.columns = [];
        /**
         * If true, a backdrop will be displayed behind the picker. Defaults to `true`.
         */
        this.showBackdrop = true;
        /**
         * If true, the picker will be dismissed when the backdrop is clicked. Defaults to `true`.
         */
        this.enableBackdropDismiss = true;
        /**
         * If true, the picker will animate. Defaults to `true`.
         */
        this.willAnimate = true;
    }
    componentWillLoad() {
        if (!this.spinner) {
            const defaultSpinner = this.mode === 'ios' ? 'lines' : 'crescent';
            this.spinner = this.config.get('pickerSpinner', defaultSpinner);
        }
        if (this.showSpinner === undefined) {
            this.showSpinner = !!(this.spinner && this.spinner !== 'hide');
        }
    }
    componentDidLoad() {
        this.ionPickerDidLoad.emit();
    }
    componentDidUnload() {
        this.ionPickerDidUnload.emit();
    }
    onBackdropTap() {
        const cancelBtn = this.buttons.find(b => b.role === 'cancel');
        if (cancelBtn) {
            this.buttonClick(cancelBtn);
        }
        else {
            this.dismiss();
        }
    }
    /**
     * Present the picker overlay after it has been created.
     */
    async present() {
        await present(this, 'pickerEnter', iosEnterAnimation, iosEnterAnimation, undefined);
        if (this.duration) {
            this.durationTimeout = setTimeout(() => this.dismiss(), this.duration);
        }
    }
    /**
     * Dismiss the picker overlay after it has been presented.
     */
    dismiss(data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return dismiss(this, data, role, 'pickerLeave', iosLeaveAnimation, iosLeaveAnimation);
    }
    /**
     * Returns a promise that resolves when the picker did dismiss. It also accepts a callback
     * that is called in the same circustances.
     *
     */
    onDidDismiss(callback) {
        return eventMethod(this.el, 'ionPickerDidDismiss', callback);
    }
    /**
     * Returns a promise that resolves when the picker will dismiss. It also accepts a callback
     * that is called in the same circustances.
     *
     */
    onWillDismiss(callback) {
        return eventMethod(this.el, 'ionPickerWillDismiss', callback);
    }
    /**
     * Add a new PickerButton to the picker
     */
    addButton(button) {
        this.buttons.push(button);
    }
    /**
     * Add a new PickerColumn to the picker
     */
    addColumn(column) {
        this.columns.push(column);
    }
    /**
     * Returns the column the matches the specified name
     */
    getColumn(name) {
        return this.columns.find(column => column.name === name);
    }
    /**
     * Returns all the PickerColumns
     */
    getColumns() {
        return this.columns;
    }
    buttonClick(button) {
        // if (this.disabled) {
        //   return;
        // }
        // keep the time of the most recent button click
        let shouldDismiss = true;
        if (button.handler) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            if (button.handler(this.getSelected()) === false) {
                // if the return value of the handler is false then do not dismiss
                shouldDismiss = false;
            }
        }
        if (shouldDismiss) {
            this.dismiss();
        }
    }
    getSelected() {
        const selected = {};
        this.columns.forEach((col, index) => {
            const selectedColumn = col.selectedIndex
                ? col.options[col.selectedIndex]
                : null;
            selected[col.name] = {
                text: selectedColumn ? selectedColumn.text : null,
                value: selectedColumn ? selectedColumn.value : null,
                columnIndex: index
            };
        });
        return selected;
    }
    hostData() {
        return {
            class: Object.assign({}, createThemedClasses(this.mode, 'picker'), getClassMap(this.cssClass)),
            style: {
                zIndex: 20000 + this.overlayId
            }
        };
    }
    render() {
        const buttons = this.buttons.map(b => {
            return (typeof b === 'string')
                ? { text: b }
                : b;
        });
        const columns = this.columns;
        // // clean up dat data
        // data.columns = data.columns.map(column => {
        //   if (!isPresent(column.options)) {
        //     column.options = [];
        //   }
        //   column.selectedIndex = column.selectedIndex || 0;
        //   column.options = column.options.map(inputOpt => {
        //     let opt: PickerColumnOption = {
        //       text: '',
        //       value: '',
        //       disabled: inputOpt.disabled,
        //     };
        //     if (isPresent(inputOpt)) {
        //       if (isString(inputOpt) || isNumber(inputOpt)) {
        //         opt.text = inputOpt.toString();
        //         opt.value = inputOpt;
        //       } else {
        //         opt.text = isPresent(inputOpt.text) ? inputOpt.text : inputOpt.value;
        //         opt.value = isPresent(inputOpt.value) ? inputOpt.value : inputOpt.text;
        //       }
        //     }
        //     return opt;
        //   });
        //   return column;
        // });
        return [
            h("ion-backdrop", { visible: this.showBackdrop, tappable: this.enableBackdropDismiss }),
            h("div", { class: "picker-wrapper", role: "dialog" },
                h("div", { class: "picker-toolbar" }, buttons.map(b => (h("div", { class: buttonWrapperClass(b) },
                    h("button", { onClick: () => this.buttonClick(b), class: buttonClass(b) }, b.text))))),
                h("div", { class: "picker-columns" },
                    h("div", { class: "picker-above-highlight" }),
                    columns.map(c => h("ion-picker-column", { col: c })),
                    h("div", { class: "picker-below-highlight" })))
        ];
    }
    static get is() { return "ion-picker"; }
    static get properties() { return {
        "addButton": {
            "method": true
        },
        "addColumn": {
            "method": true
        },
        "animationCtrl": {
            "connect": "ion-animation-controller"
        },
        "buttons": {
            "type": "Any",
            "attr": "buttons"
        },
        "columns": {
            "type": "Any",
            "attr": "columns"
        },
        "config": {
            "context": "config"
        },
        "cssClass": {
            "type": String,
            "attr": "css-class"
        },
        "dismiss": {
            "method": true
        },
        "duration": {
            "type": Number,
            "attr": "duration"
        },
        "el": {
            "elementRef": true
        },
        "enableBackdropDismiss": {
            "type": Boolean,
            "attr": "enable-backdrop-dismiss"
        },
        "enterAnimation": {
            "type": "Any",
            "attr": "enter-animation"
        },
        "getColumn": {
            "method": true
        },
        "getColumns": {
            "method": true
        },
        "keyboardClose": {
            "type": Boolean,
            "attr": "keyboard-close"
        },
        "leaveAnimation": {
            "type": "Any",
            "attr": "leave-animation"
        },
        "onDidDismiss": {
            "method": true
        },
        "onWillDismiss": {
            "method": true
        },
        "overlayId": {
            "type": Number,
            "attr": "overlay-id"
        },
        "present": {
            "method": true
        },
        "showBackdrop": {
            "type": Boolean,
            "attr": "show-backdrop"
        },
        "showSpinner": {
            "state": true
        },
        "spinner": {
            "state": true
        },
        "willAnimate": {
            "type": Boolean,
            "attr": "will-animate"
        }
    }; }
    static get events() { return [{
            "name": "ionPickerDidLoad",
            "method": "ionPickerDidLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionPickerDidPresent",
            "method": "didPresent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionPickerWillPresent",
            "method": "willPresent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionPickerWillDismiss",
            "method": "willDismiss",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionPickerDidDismiss",
            "method": "didDismiss",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionPickerDidUnload",
            "method": "ionPickerDidUnload",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "ionBackdropTap",
            "method": "onBackdropTap"
        }]; }
    static get style() { return "/**style-placeholder:ion-picker:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-picker:**/"; }
}
function buttonWrapperClass(button) {
    return {
        [`picker-toolbar-${button.role}`]: !!button.role,
        'picker-toolbar-button': true
    };
}
function buttonClass(button) {
    return Object.assign({ 'picker-button': true }, getClassMap(button.cssClass));
}
