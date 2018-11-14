import { clamp, renderHiddenInput } from '../../utils/helpers';
import { hostContext } from '../../utils/theme';
import { convertDataToISO, convertFormatToKey, convertToArrayOfNumbers, convertToArrayOfStrings, dateDataSortValue, dateSortValue, dateValueRange, daysInMonth, getValueFromFormat, parseDate, parseTemplate, renderDatetime, renderTextFormat, updateDate } from './datetime-util';
export class Datetime {
    constructor() {
        this.inputId = `ion-dt-${datetimeIds++}`;
        this.labelId = `${this.inputId}-lbl`;
        this.locale = {};
        this.datetimeMin = {};
        this.datetimeMax = {};
        this.datetimeValue = {};
        this.name = this.inputId;
        this.disabled = false;
        this.displayFormat = 'MMM D, YYYY';
        this.cancelText = 'Cancel';
        this.doneText = 'Done';
    }
    disabledChanged() {
        this.emitStyle();
    }
    valueChanged() {
        this.updateDatetimeValue(this.value);
        this.emitStyle();
        this.ionChange.emit({
            value: this.value
        });
    }
    componentWillLoad() {
        this.locale = {
            monthNames: convertToArrayOfStrings(this.monthNames, 'monthNames'),
            monthShortNames: convertToArrayOfStrings(this.monthShortNames, 'monthShortNames'),
            dayNames: convertToArrayOfStrings(this.dayNames, 'dayNames'),
            dayShortNames: convertToArrayOfStrings(this.dayShortNames, 'dayShortNames')
        };
        this.updateDatetimeValue(this.value);
        this.emitStyle();
    }
    async open() {
        if (this.disabled) {
            return;
        }
        const pickerOptions = this.generatePickerOptions();
        const picker = this.picker = await this.pickerCtrl.create(pickerOptions);
        await this.validate();
        await picker.present();
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive': true,
            'datetime': true,
            'has-value': this.hasValue(),
            'interactive-disabled': this.disabled,
        });
    }
    updateDatetimeValue(value) {
        updateDate(this.datetimeValue, value);
        this.updateText();
    }
    generatePickerOptions() {
        const pickerOptions = Object.assign({}, this.pickerOptions, { columns: this.generateColumns() });
        const buttons = pickerOptions.buttons;
        if (!buttons || buttons.length === 0) {
            pickerOptions.buttons = [
                {
                    text: this.cancelText,
                    role: 'cancel',
                    handler: () => {
                        this.ionCancel.emit();
                    }
                },
                {
                    text: this.doneText,
                    handler: (data) => {
                        this.updateDatetimeValue(data);
                        this.value = convertDataToISO(this.datetimeValue);
                    }
                }
            ];
        }
        return pickerOptions;
    }
    generateColumns() {
        let template = this.pickerFormat || this.displayFormat || DEFAULT_FORMAT;
        if (template.length === 0) {
            return [];
        }
        this.calcMinMax();
        template = template.replace('DDDD', '{~}').replace('DDD', '{~}');
        if (template.indexOf('D') === -1) {
            template = template.replace('{~}', 'D');
        }
        template = template.replace(/{~}/g, '');
        const columns = parseTemplate(template).map((format) => {
            const key = convertFormatToKey(format);
            let values;
            const self = this;
            values = self[key + 'Values']
                ? convertToArrayOfNumbers(self[key + 'Values'], key)
                : dateValueRange(format, this.datetimeMin, this.datetimeMax);
            const colOptions = values.map(val => {
                return {
                    value: val,
                    text: renderTextFormat(format, val, undefined, this.locale),
                };
            });
            const optValue = getValueFromFormat(this.datetimeValue, format);
            const selectedIndex = colOptions.findIndex(opt => opt.value === optValue);
            return {
                name: key,
                selectedIndex: selectedIndex >= 0 ? selectedIndex : 0,
                options: colOptions
            };
        });
        const min = this.datetimeMin;
        const max = this.datetimeMax;
        ['month', 'day', 'hour', 'minute']
            .filter(name => !columns.find(column => column.name === name))
            .forEach(name => {
            min[name] = 0;
            max[name] = 0;
        });
        return divyColumns(columns);
    }
    async validate() {
        const today = new Date();
        const minCompareVal = dateDataSortValue(this.datetimeMin);
        const maxCompareVal = dateDataSortValue(this.datetimeMax);
        const yearCol = await this.picker.getColumn('year');
        let selectedYear = today.getFullYear();
        if (yearCol) {
            if (!yearCol.options.find(col => col.value === today.getFullYear())) {
                selectedYear = yearCol.options[0].value;
            }
            const selectedIndex = yearCol.selectedIndex;
            if (selectedIndex !== undefined) {
                const yearOpt = yearCol.options[selectedIndex];
                if (yearOpt) {
                    selectedYear = yearOpt.value;
                }
            }
        }
        const selectedMonth = await this.validateColumn('month', 1, minCompareVal, maxCompareVal, [selectedYear, 0, 0, 0, 0], [selectedYear, 12, 31, 23, 59]);
        const numDaysInMonth = daysInMonth(selectedMonth, selectedYear);
        const selectedDay = await this.validateColumn('day', 2, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, 0, 0, 0], [selectedYear, selectedMonth, numDaysInMonth, 23, 59]);
        const selectedHour = await this.validateColumn('hour', 3, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, 0, 0], [selectedYear, selectedMonth, selectedDay, 23, 59]);
        await this.validateColumn('minute', 4, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, selectedHour, 0], [selectedYear, selectedMonth, selectedDay, selectedHour, 59]);
    }
    calcMinMax(now) {
        const todaysYear = (now || new Date()).getFullYear();
        if (this.yearValues !== undefined) {
            const years = convertToArrayOfNumbers(this.yearValues, 'year');
            if (this.min === undefined) {
                this.min = Math.min.apply(Math, years);
            }
            if (this.max === undefined) {
                this.max = Math.max.apply(Math, years);
            }
        }
        else {
            if (this.min === undefined) {
                this.min = (todaysYear - 100).toString();
            }
            if (this.max === undefined) {
                this.max = todaysYear.toString();
            }
        }
        const min = this.datetimeMin = parseDate(this.min);
        const max = this.datetimeMax = parseDate(this.max);
        min.year = min.year || todaysYear;
        max.year = max.year || todaysYear;
        min.month = min.month || 1;
        max.month = max.month || 12;
        min.day = min.day || 1;
        max.day = max.day || 31;
        min.hour = min.hour || 0;
        max.hour = max.hour || 23;
        min.minute = min.minute || 0;
        max.minute = max.minute || 59;
        min.second = min.second || 0;
        max.second = max.second || 59;
        if (min.year > max.year) {
            console.error('min.year > max.year');
            min.year = max.year - 100;
        }
        if (min.year === max.year) {
            if (min.month > max.month) {
                console.error('min.month > max.month');
                min.month = 1;
            }
            else if (min.month === max.month && min.day > max.day) {
                console.error('min.day > max.day');
                min.day = 1;
            }
        }
    }
    async validateColumn(name, index, min, max, lowerBounds, upperBounds) {
        const column = await this.picker.getColumn(name);
        if (!column) {
            return 0;
        }
        const lb = lowerBounds.slice();
        const ub = upperBounds.slice();
        const options = column.options;
        let indexMin = options.length - 1;
        let indexMax = 0;
        for (let i = 0; i < options.length; i++) {
            const opts = options[i];
            const value = opts.value;
            lb[index] = opts.value;
            ub[index] = opts.value;
            const disabled = opts.disabled = (value < lowerBounds[index] ||
                value > upperBounds[index] ||
                dateSortValue(ub[0], ub[1], ub[2], ub[3], ub[4]) < min ||
                dateSortValue(lb[0], lb[1], lb[2], lb[3], lb[4]) > max);
            if (!disabled) {
                indexMin = Math.min(indexMin, i);
                indexMax = Math.max(indexMax, i);
            }
        }
        const selectedIndex = column.selectedIndex = clamp(indexMin, column.selectedIndex, indexMax);
        const opt = column.options[selectedIndex];
        if (opt) {
            return opt.value;
        }
        return 0;
    }
    updateText() {
        const template = this.displayFormat || this.pickerFormat || DEFAULT_FORMAT;
        this.text = renderDatetime(template, this.datetimeValue, this.locale);
    }
    hasValue() {
        const val = this.datetimeValue;
        return Object.keys(val).length > 0;
    }
    hostData() {
        const addPlaceholderClass = (this.text == null && this.placeholder != null) ? true : false;
        return {
            class: {
                'datetime-disabled': this.disabled,
                'datetime-placeholder': addPlaceholderClass,
                'in-item': hostContext('ion-item', this.el)
            }
        };
    }
    render() {
        let datetimeText = this.text;
        if (datetimeText == null) {
            datetimeText = this.placeholder != null ? this.placeholder : '';
        }
        renderHiddenInput(this.el, this.name, this.value, this.disabled);
        return [
            h("div", { class: "datetime-text" }, datetimeText),
            h("button", { type: "button", "aria-haspopup": "true", "aria-labelledby": this.labelId, "aria-disabled": this.disabled ? 'true' : null, onClick: this.open.bind(this), class: "datetime-cover" }),
            h("slot", null)
        ];
    }
    static get is() { return "ion-datetime"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "cancelText": {
            "type": String,
            "attr": "cancel-text"
        },
        "dayNames": {
            "type": String,
            "attr": "day-names"
        },
        "dayShortNames": {
            "type": String,
            "attr": "day-short-names"
        },
        "dayValues": {
            "type": "Any",
            "attr": "day-values"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
        },
        "displayFormat": {
            "type": String,
            "attr": "display-format"
        },
        "doneText": {
            "type": String,
            "attr": "done-text"
        },
        "el": {
            "elementRef": true
        },
        "hourValues": {
            "type": "Any",
            "attr": "hour-values"
        },
        "max": {
            "type": String,
            "attr": "max",
            "mutable": true
        },
        "min": {
            "type": String,
            "attr": "min",
            "mutable": true
        },
        "minuteValues": {
            "type": "Any",
            "attr": "minute-values"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "monthNames": {
            "type": String,
            "attr": "month-names"
        },
        "monthShortNames": {
            "type": String,
            "attr": "month-short-names"
        },
        "monthValues": {
            "type": "Any",
            "attr": "month-values"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "open": {
            "method": true
        },
        "pickerCtrl": {
            "connect": "ion-picker-controller"
        },
        "pickerFormat": {
            "type": String,
            "attr": "picker-format"
        },
        "pickerOptions": {
            "type": "Any",
            "attr": "picker-options"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "text": {
            "state": true
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true,
            "watchCallbacks": ["valueChanged"]
        },
        "yearValues": {
            "type": "Any",
            "attr": "year-values"
        }
    }; }
    static get events() { return [{
            "name": "ionCancel",
            "method": "ionCancel",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionChange",
            "method": "ionChange",
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
    static get style() { return "/**style-placeholder:ion-datetime:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-datetime:**/"; }
}
function divyColumns(columns) {
    const columnsWidth = [];
    let col;
    let width;
    for (let i = 0; i < columns.length; i++) {
        col = columns[i];
        columnsWidth.push(0);
        for (const option of col.options) {
            width = option.text.length;
            if (width > columnsWidth[i]) {
                columnsWidth[i] = width;
            }
        }
    }
    if (columnsWidth.length === 2) {
        width = Math.max(columnsWidth[0], columnsWidth[1]);
        columns[0].align = 'right';
        columns[1].align = 'left';
        columns[0].optionsWidth = columns[1].optionsWidth = `${width * 17}px`;
    }
    else if (columnsWidth.length === 3) {
        width = Math.max(columnsWidth[0], columnsWidth[2]);
        columns[0].align = 'right';
        columns[1].columnWidth = `${columnsWidth[1] * 17}px`;
        columns[0].optionsWidth = columns[2].optionsWidth = `${width * 17}px`;
        columns[2].align = 'left';
    }
    return columns;
}
let datetimeIds = 0;
const DEFAULT_FORMAT = 'MMM D, YYYY';
