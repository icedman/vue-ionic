/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { h as clamp, d as renderHiddenInput } from './chunk-c23403d0.js';
import { j as hostContext, k as createThemedClasses, g as getClassMap, c as hapticSelectionChanged } from './chunk-b9ec67ac.js';
import { b as dismiss, c as eventMethod, e as present, f as createOverlay, g as dismissOverlay, h as getOverlay } from './chunk-2994e275.js';
import './chunk-5f438245.js';

function renderDatetime(template, value, locale) {
    if (value === undefined) {
        return undefined;
    }
    const tokens = [];
    let hasText = false;
    FORMAT_KEYS.forEach((format, index) => {
        if (template.indexOf(format.f) > -1) {
            const token = '{' + index + '}';
            const text = renderTextFormat(format.f, value[format.k], value, locale);
            if (!hasText && text !== undefined && value[format.k] != null) {
                hasText = true;
            }
            tokens.push(token, text || '');
            template = template.replace(format.f, token);
        }
    });
    if (!hasText) {
        return undefined;
    }
    for (let i = 0; i < tokens.length; i += 2) {
        template = template.replace(tokens[i], tokens[i + 1]);
    }
    return template;
}
function renderTextFormat(format, value, date, locale) {
    if ((format === FORMAT_DDDD || format === FORMAT_DDD)) {
        try {
            value = (new Date(date.year, date.month - 1, date.day)).getDay();
            if (format === FORMAT_DDDD) {
                return (locale.dayNames ? locale.dayNames : DAY_NAMES)[value];
            }
            return (locale.dayShortNames ? locale.dayShortNames : DAY_SHORT_NAMES)[value];
        }
        catch (e) {
        }
        return undefined;
    }
    if (format === FORMAT_A) {
        return date !== undefined && date.hour !== undefined
            ? (date.hour < 12 ? 'AM' : 'PM')
            : value ? value.toUpperCase() : '';
    }
    if (format === FORMAT_a) {
        return date !== undefined && date.hour !== undefined
            ? (date.hour < 12 ? 'am' : 'pm')
            : value || '';
    }
    if (value == null) {
        return '';
    }
    if (format === FORMAT_YY || format === FORMAT_MM ||
        format === FORMAT_DD || format === FORMAT_HH ||
        format === FORMAT_mm || format === FORMAT_ss) {
        return twoDigit(value);
    }
    if (format === FORMAT_YYYY) {
        return fourDigit(value);
    }
    if (format === FORMAT_MMMM) {
        return (locale.monthNames ? locale.monthNames : MONTH_NAMES)[value - 1];
    }
    if (format === FORMAT_MMM) {
        return (locale.monthShortNames ? locale.monthShortNames : MONTH_SHORT_NAMES)[value - 1];
    }
    if (format === FORMAT_hh || format === FORMAT_h) {
        if (value === 0) {
            return '12';
        }
        if (value > 12) {
            value -= 12;
        }
        if (format === FORMAT_hh && value < 10) {
            return ('0' + value);
        }
    }
    return value.toString();
}
function dateValueRange(format, min, max) {
    const opts = [];
    if (format === FORMAT_YYYY || format === FORMAT_YY) {
        if (max.year === undefined || min.year === undefined) {
            throw new Error('min and max year is undefined');
        }
        for (let i = max.year; i >= min.year; i--) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_MMMM || format === FORMAT_MMM ||
        format === FORMAT_MM || format === FORMAT_M ||
        format === FORMAT_hh || format === FORMAT_h) {
        for (let i = 1; i < 13; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_DDDD || format === FORMAT_DDD ||
        format === FORMAT_DD || format === FORMAT_D) {
        for (let i = 1; i < 32; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_HH || format === FORMAT_H) {
        for (let i = 0; i < 24; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_mm || format === FORMAT_m) {
        for (let i = 0; i < 60; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_ss || format === FORMAT_s) {
        for (let i = 0; i < 60; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_A || format === FORMAT_a) {
        opts.push('am', 'pm');
    }
    return opts;
}
function dateSortValue(year, month, day, hour = 0, minute = 0) {
    return parseInt(`1${fourDigit(year)}${twoDigit(month)}${twoDigit(day)}${twoDigit(hour)}${twoDigit(minute)}`, 10);
}
function dateDataSortValue(data) {
    return dateSortValue(data.year, data.month, data.day, data.hour, data.minute);
}
function daysInMonth(month, year) {
    return (month === 4 || month === 6 || month === 9 || month === 11) ? 30 : (month === 2) ? isLeapYear(year) ? 29 : 28 : 31;
}
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const ISO_8601_REGEXP = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
const TIME_REGEXP = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
function parseDate(val) {
    let parse = null;
    if (val != null) {
        parse = TIME_REGEXP.exec(val);
        if (parse) {
            parse.unshift(undefined, undefined);
            parse[2] = parse[3] = undefined;
        }
        else {
            parse = ISO_8601_REGEXP.exec(val);
        }
    }
    if (parse === null) {
        return undefined;
    }
    for (let i = 1; i < 8; i++) {
        parse[i] = parse[i] !== undefined ? parseInt(parse[i], 10) : undefined;
    }
    let tzOffset = 0;
    if (parse[9] && parse[10]) {
        tzOffset = parseInt(parse[10], 10) * 60;
        if (parse[11]) {
            tzOffset += parseInt(parse[11], 10);
        }
        if (parse[9] === '-') {
            tzOffset *= -1;
        }
    }
    return {
        year: parse[1],
        month: parse[2],
        day: parse[3],
        hour: parse[4],
        minute: parse[5],
        second: parse[6],
        millisecond: parse[7],
        tzOffset,
    };
}
function updateDate(existingData, newData) {
    if (newData && newData !== '') {
        if (typeof newData === 'string') {
            newData = parseDate(newData);
            if (newData) {
                Object.assign(existingData, newData);
                return true;
            }
        }
        else if ((newData.year || newData.hour || newData.month || newData.day || newData.minute || newData.second)) {
            if (newData.ampm && newData.hour) {
                newData.hour.value = (newData.ampm.value === 'pm')
                    ? (newData.hour.value === 12 ? 12 : newData.hour.value + 12)
                    : (newData.hour.value === 12 ? 0 : newData.hour.value);
            }
            for (const key of Object.keys(newData)) {
                existingData[key] = newData[key].value;
            }
            return true;
        }
        console.warn(`Error parsing date: "${newData}". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime`);
    }
    else {
        for (const k in existingData) {
            if (existingData.hasOwnProperty(k)) {
                delete existingData[k];
            }
        }
    }
    return false;
}
function parseTemplate(template) {
    const formats = [];
    template = template.replace(/[^\w\s]/gi, ' ');
    FORMAT_KEYS.forEach(format => {
        if (format.f.length > 1 && template.indexOf(format.f) > -1 && template.indexOf(format.f + format.f.charAt(0)) < 0) {
            template = template.replace(format.f, ' ' + format.f + ' ');
        }
    });
    const words = template.split(' ').filter(w => w.length > 0);
    words.forEach((word, i) => {
        FORMAT_KEYS.forEach(format => {
            if (word === format.f) {
                if (word === FORMAT_A || word === FORMAT_a) {
                    if ((formats.indexOf(FORMAT_h) < 0 && formats.indexOf(FORMAT_hh) < 0) ||
                        VALID_AMPM_PREFIX.indexOf(words[i - 1]) === -1) {
                        return;
                    }
                }
                formats.push(word);
            }
        });
    });
    return formats;
}
function getValueFromFormat(date, format) {
    if (format === FORMAT_A || format === FORMAT_a) {
        return (date.hour < 12 ? 'am' : 'pm');
    }
    if (format === FORMAT_hh || format === FORMAT_h) {
        return (date.hour > 12 ? date.hour - 12 : date.hour);
    }
    return date[convertFormatToKey(format)];
}
function convertFormatToKey(format) {
    for (const k in FORMAT_KEYS) {
        if (FORMAT_KEYS[k].f === format) {
            return FORMAT_KEYS[k].k;
        }
    }
    return undefined;
}
function convertDataToISO(data) {
    let rtn = '';
    if (data.year !== undefined) {
        rtn = fourDigit(data.year);
        if (data.month !== undefined) {
            rtn += '-' + twoDigit(data.month);
            if (data.day !== undefined) {
                rtn += '-' + twoDigit(data.day);
                if (data.hour !== undefined) {
                    rtn += `T${twoDigit(data.hour)}:${twoDigit(data.minute)}:${twoDigit(data.second)}`;
                    if (data.millisecond > 0) {
                        rtn += '.' + threeDigit(data.millisecond);
                    }
                    if (data.tzOffset === undefined) {
                        rtn += 'Z';
                    }
                    else {
                        rtn += (data.tzOffset > 0 ? '+' : '-') + twoDigit(Math.floor(Math.abs(data.tzOffset / 60))) + ':' + twoDigit(data.tzOffset % 60);
                    }
                }
            }
        }
    }
    else if (data.hour !== undefined) {
        rtn = twoDigit(data.hour) + ':' + twoDigit(data.minute);
        if (data.second !== undefined) {
            rtn += ':' + twoDigit(data.second);
            if (data.millisecond !== undefined) {
                rtn += '.' + threeDigit(data.millisecond);
            }
        }
    }
    return rtn;
}
function convertToArrayOfStrings(input, type) {
    if (input == null) {
        return undefined;
    }
    if (typeof input === 'string') {
        input = input.replace(/\[|\]/g, '').split(',');
    }
    let values;
    if (Array.isArray(input)) {
        values = input.map(val => val.toString().trim());
    }
    if (values === undefined || values.length === 0) {
        console.warn(`Invalid "${type}Names". Must be an array of strings, or a comma separated string.`);
    }
    return values;
}
function convertToArrayOfNumbers(input, type) {
    if (typeof input === 'string') {
        input = input.replace(/\[|\]|\s/g, '').split(',');
    }
    let values;
    if (Array.isArray(input)) {
        values = input
            .map((num) => parseInt(num, 10))
            .filter(isFinite);
    }
    else {
        values = [input];
    }
    if (values.length === 0) {
        console.warn(`Invalid "${type}Values". Must be an array of numbers, or a comma separated string of numbers.`);
    }
    return values;
}
function twoDigit(val) {
    return ('0' + (val !== undefined ? Math.abs(val) : '0')).slice(-2);
}
function threeDigit(val) {
    return ('00' + (val !== undefined ? Math.abs(val) : '0')).slice(-3);
}
function fourDigit(val) {
    return ('000' + (val !== undefined ? Math.abs(val) : '0')).slice(-4);
}
const FORMAT_YYYY = 'YYYY';
const FORMAT_YY = 'YY';
const FORMAT_MMMM = 'MMMM';
const FORMAT_MMM = 'MMM';
const FORMAT_MM = 'MM';
const FORMAT_M = 'M';
const FORMAT_DDDD = 'DDDD';
const FORMAT_DDD = 'DDD';
const FORMAT_DD = 'DD';
const FORMAT_D = 'D';
const FORMAT_HH = 'HH';
const FORMAT_H = 'H';
const FORMAT_hh = 'hh';
const FORMAT_h = 'h';
const FORMAT_mm = 'mm';
const FORMAT_m = 'm';
const FORMAT_ss = 'ss';
const FORMAT_s = 's';
const FORMAT_A = 'A';
const FORMAT_a = 'a';
const FORMAT_KEYS = [
    { f: FORMAT_YYYY, k: 'year' },
    { f: FORMAT_MMMM, k: 'month' },
    { f: FORMAT_DDDD, k: 'day' },
    { f: FORMAT_MMM, k: 'month' },
    { f: FORMAT_DDD, k: 'day' },
    { f: FORMAT_YY, k: 'year' },
    { f: FORMAT_MM, k: 'month' },
    { f: FORMAT_DD, k: 'day' },
    { f: FORMAT_HH, k: 'hour' },
    { f: FORMAT_hh, k: 'hour' },
    { f: FORMAT_mm, k: 'minute' },
    { f: FORMAT_ss, k: 'second' },
    { f: FORMAT_M, k: 'month' },
    { f: FORMAT_D, k: 'day' },
    { f: FORMAT_H, k: 'hour' },
    { f: FORMAT_h, k: 'hour' },
    { f: FORMAT_m, k: 'minute' },
    { f: FORMAT_s, k: 'second' },
    { f: FORMAT_A, k: 'ampm' },
    { f: FORMAT_a, k: 'ampm' },
];
const DAY_NAMES = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
const DAY_SHORT_NAMES = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
];
const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const MONTH_SHORT_NAMES = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
const VALID_AMPM_PREFIX = [
    FORMAT_hh, FORMAT_h, FORMAT_mm, FORMAT_m, FORMAT_ss, FORMAT_s
];

class Datetime {
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
    static get style() { return ":host{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:.3}.datetime-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;overflow:inherit}:host{--placeholder-color:var(--ion-text-color-step-600,#999);--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}"; }
    static get styleMode() { return "ios"; }
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

function iosEnterAnimation(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.picker-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.26);
    wrapperAnimation.fromTo('translateY', '100%', '0%');
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}

function iosLeaveAnimation(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.picker-wrapper'));
    backdropAnimation.fromTo('opacity', 0.26, 0.01);
    wrapperAnimation.fromTo('translateY', '0%', '100%');
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}

class Picker {
    constructor() {
        this.presented = false;
        this.keyboardClose = true;
        this.buttons = [];
        this.columns = [];
        this.duration = 0;
        this.showBackdrop = true;
        this.backdropDismiss = true;
        this.animated = true;
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
    async present() {
        await present(this, 'pickerEnter', iosEnterAnimation, iosEnterAnimation, undefined);
        if (this.duration > 0) {
            this.durationTimeout = setTimeout(() => this.dismiss(), this.duration);
        }
    }
    dismiss(data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return dismiss(this, data, role, 'pickerLeave', iosLeaveAnimation, iosLeaveAnimation);
    }
    onDidDismiss() {
        return eventMethod(this.el, 'ionPickerDidDismiss');
    }
    onWillDismiss() {
        return eventMethod(this.el, 'ionPickerWillDismiss');
    }
    getColumn(name) {
        return Promise.resolve(this.columns.find(column => column.name === name));
    }
    buttonClick(button) {
        let shouldDismiss = true;
        if (button.handler) {
            if (button.handler(this.getSelected()) === false) {
                shouldDismiss = false;
            }
        }
        if (shouldDismiss) {
            return this.dismiss();
        }
        return Promise.resolve(false);
    }
    getSelected() {
        const selected = {};
        this.columns.forEach((col, index) => {
            const selectedColumn = col.selectedIndex !== undefined
                ? col.options[col.selectedIndex]
                : undefined;
            selected[col.name] = {
                text: selectedColumn ? selectedColumn.text : undefined,
                value: selectedColumn ? selectedColumn.value : undefined,
                columnIndex: index
            };
        });
        return selected;
    }
    hostData() {
        return {
            class: Object.assign({}, createThemedClasses(this.mode, 'picker'), getClassMap(this.cssClass)),
            style: {
                zIndex: 20000 + this.overlayIndex
            }
        };
    }
    render() {
        return [
            h("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }),
            h("div", { class: "picker-wrapper", role: "dialog" },
                h("div", { class: "picker-toolbar" }, this.buttons.map(b => (h("div", { class: buttonWrapperClass(b) },
                    h("button", { type: "button", "ion-activatable": true, onClick: () => this.buttonClick(b), class: buttonClass(b) }, b.text))))),
                h("div", { class: "picker-columns" },
                    h("div", { class: "picker-above-highlight" }),
                    this.columns.map(c => h("ion-picker-column", { col: c })),
                    h("div", { class: "picker-below-highlight" })))
        ];
    }
    static get is() { return "ion-picker"; }
    static get properties() { return {
        "animated": {
            "type": Boolean,
            "attr": "animated"
        },
        "animationCtrl": {
            "connect": "ion-animation-controller"
        },
        "backdropDismiss": {
            "type": Boolean,
            "attr": "backdrop-dismiss"
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
        "enterAnimation": {
            "type": "Any",
            "attr": "enter-animation"
        },
        "getColumn": {
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
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "onDidDismiss": {
            "method": true
        },
        "onWillDismiss": {
            "method": true
        },
        "overlayIndex": {
            "type": Number,
            "attr": "overlay-index"
        },
        "present": {
            "method": true
        },
        "showBackdrop": {
            "type": Boolean,
            "attr": "show-backdrop"
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
    static get style() { return "ion-picker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.picker-toolbar{width:100%;contain:strict;z-index:1}.picker-wrapper{left:0;right:0;bottom:0;margin:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;max-width:500px;z-index:10}.picker-columns,.picker-wrapper{display:-ms-flexbox;display:flex;contain:strict;overflow:hidden}.picker-columns{-ms-flex-pack:center;margin-bottom:var(--ion-safe-area-bottom,0)}.picker-col,.picker-columns{position:relative;justify-content:center}.picker-col{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-pack:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-prefix{text-align:end}.picker-prefix,.picker-suffix{position:relative;-ms-flex:2;flex:2;min-width:45%;max-width:50%;white-space:nowrap}.picker-suffix{text-align:start}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-above-highlight,.picker-below-highlight{display:none;pointer-events:none}.picker-button{border:0;font-family:inherit}.picker-button:active,.picker-button:focus,.picker-opt:active,.picker-opt:focus{outline:none}.picker-ios .picker-wrapper{height:260px;border-top:1px solid var(--ion-item-border-color,var(--ion-border-color,#c8c7cc));background:var(--ion-background-color,#fff)}.picker-ios .picker-toolbar{display:-ms-flexbox;display:flex;height:44px;border-bottom:.55px solid var(--ion-item-border-color,var(--ion-border-color,#c8c7cc));background:var(--ion-background-color,#fff)}.picker-ios .picker-toolbar-button{-ms-flex:1;flex:1;text-align:end}.picker-ios .picker-toolbar-button:last-child .picker-button{font-weight:600}.picker-ios .picker-toolbar-button:first-child{font-weight:400;text-align:start}.picker-ios .picker-button,.picker-ios .picker-button.activated{margin:0;padding:0 1em;height:44px;background:transparent;color:var(--ion-color-primary,#3880ff);font-size:16px}.picker-columns{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-ios .picker-col{padding:0 4px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-ios .picker-opts,.picker-ios .picker-prefix,.picker-ios .picker-suffix{top:77px;pointer-events:none}.picker-ios .picker-opt,.picker-ios .picker-opts,.picker-ios .picker-prefix,.picker-ios .picker-suffix{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:var(--ion-item-color,var(--ion-text-color,#000));font-size:20px;line-height:42px}.picker-ios .picker-opt{padding:0;margin:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-ios .picker-above-highlight{top:0;height:81px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,#c8c7cc));background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(180deg,var(--ion-background-color,#fff) 20%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:10}.picker-ios .picker-above-highlight,.picker-ios .picker-below-highlight{left:0;-webkit-transform:translateZ(90px);transform:translateZ(90px);display:block;position:absolute;width:100%}.picker-ios .picker-below-highlight{top:115px;height:119px;border-top:1px solid var(--ion-item-border-color,var(--ion-border-color,#c8c7cc));background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(0deg,var(--ion-background-color,#fff) 30%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:11}"; }
    static get styleMode() { return "ios"; }
}
function buttonWrapperClass(button) {
    return {
        [`picker-toolbar-${button.role}`]: button.role !== undefined,
        'picker-toolbar-button': true
    };
}
function buttonClass(button) {
    return Object.assign({ 'picker-button': true }, getClassMap(button.cssClass));
}

class PickerColumnCmp {
    constructor() {
        this.optHeight = 0;
        this.rotateFactor = 0;
        this.scaleFactor = 1;
        this.velocity = 0;
        this.y = 0;
        this.noAnimate = true;
    }
    componentWillLoad() {
        let pickerRotateFactor = 0;
        let pickerScaleFactor = 0.81;
        if (this.mode === 'ios') {
            pickerRotateFactor = -0.46;
            pickerScaleFactor = 1;
        }
        this.rotateFactor = pickerRotateFactor;
        this.scaleFactor = pickerScaleFactor;
    }
    async componentDidLoad() {
        const colEl = this.optsEl;
        if (colEl) {
            this.optHeight = (colEl.firstElementChild ? colEl.firstElementChild.clientHeight : 0);
        }
        this.refresh();
        this.gesture = (await import("./gesture.js")).createGesture({
            el: this.el,
            queue: this.queue,
            gestureName: 'picker-swipe',
            gesturePriority: 100,
            threshold: 0,
            onStart: ev => this.onStart(ev),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.gesture.setDisabled(false);
        this.tmrId = setTimeout(() => {
            this.noAnimate = false;
            this.refresh(true);
        }, 250);
    }
    componentDidUnload() {
        cancelAnimationFrame(this.rafId);
        clearTimeout(this.tmrId);
    }
    setSelected(selectedIndex, duration) {
        const y = (selectedIndex > -1) ? -(selectedIndex * this.optHeight) : 0;
        this.velocity = 0;
        cancelAnimationFrame(this.rafId);
        this.update(y, duration, true);
    }
    update(y, duration, saveY) {
        if (!this.optsEl) {
            return;
        }
        let translateY = 0;
        let translateZ = 0;
        const { col, rotateFactor } = this;
        const selectedIndex = col.selectedIndex = this.indexForY(-y);
        const durationStr = (duration === 0) ? null : duration + 'ms';
        const scaleStr = `scale(${this.scaleFactor})`;
        const children = this.optsEl.children;
        for (let i = 0; i < children.length; i++) {
            const button = children[i];
            const opt = col.options[i];
            const optOffset = (i * this.optHeight) + y;
            let transform = '';
            if (rotateFactor !== 0) {
                const rotateX = optOffset * rotateFactor;
                if (Math.abs(rotateX) <= 90) {
                    translateY = 0;
                    translateZ = 90;
                    transform = `rotateX(${rotateX}deg) `;
                }
                else {
                    translateY = -9999;
                }
            }
            else {
                translateZ = 0;
                translateY = optOffset;
            }
            const selected = selectedIndex === i;
            transform += `translate3d(0px,${translateY}px,${translateZ}px) `;
            if (this.scaleFactor !== 1 && !selected) {
                transform += scaleStr;
            }
            if (this.noAnimate) {
                opt.duration = 0;
                button.style.transitionDuration = '';
            }
            else if (duration !== opt.duration) {
                opt.duration = duration;
                button.style.transitionDuration = durationStr;
            }
            if (transform !== opt.transform) {
                opt.transform = transform;
                button.style.transform = transform;
            }
            if (selected !== opt.selected) {
                opt.selected = selected;
                if (selected) {
                    button.classList.add(PICKER_OPT_SELECTED);
                }
                else {
                    button.classList.remove(PICKER_OPT_SELECTED);
                }
            }
        }
        this.col.prevSelected = selectedIndex;
        if (saveY) {
            this.y = y;
        }
        if (this.lastIndex !== selectedIndex) {
            hapticSelectionChanged();
            this.lastIndex = selectedIndex;
        }
    }
    decelerate() {
        if (this.velocity !== 0) {
            this.velocity *= DECELERATION_FRICTION;
            this.velocity = (this.velocity > 0)
                ? Math.max(this.velocity, 1)
                : Math.min(this.velocity, -1);
            let y = this.y + this.velocity;
            if (y > this.minY) {
                y = this.minY;
                this.velocity = 0;
            }
            else if (y < this.maxY) {
                y = this.maxY;
                this.velocity = 0;
            }
            this.update(y, 0, true);
            const notLockedIn = (Math.round(y) % this.optHeight !== 0) || (Math.abs(this.velocity) > 1);
            if (notLockedIn) {
                this.rafId = requestAnimationFrame(() => this.decelerate());
            }
        }
        else if (this.y % this.optHeight !== 0) {
            const currentPos = Math.abs(this.y % this.optHeight);
            this.velocity = (currentPos > (this.optHeight / 2) ? 1 : -1);
            this.decelerate();
        }
    }
    indexForY(y) {
        return Math.min(Math.max(Math.abs(Math.round(y / this.optHeight)), 0), this.col.options.length - 1);
    }
    onStart(detail) {
        detail.event.preventDefault();
        detail.event.stopPropagation();
        cancelAnimationFrame(this.rafId);
        const options = this.col.options;
        let minY = (options.length - 1);
        let maxY = 0;
        for (let i = 0; i < options.length; i++) {
            if (!options[i].disabled) {
                minY = Math.min(minY, i);
                maxY = Math.max(maxY, i);
            }
        }
        this.minY = -(minY * this.optHeight);
        this.maxY = -(maxY * this.optHeight);
    }
    onMove(detail) {
        detail.event.preventDefault();
        detail.event.stopPropagation();
        let y = this.y + detail.deltaY;
        if (y > this.minY) {
            y = Math.pow(y, 0.8);
            this.bounceFrom = y;
        }
        else if (y < this.maxY) {
            y += Math.pow(this.maxY - y, 0.9);
            this.bounceFrom = y;
        }
        else {
            this.bounceFrom = 0;
        }
        this.update(y, 0, false);
    }
    onEnd(detail) {
        if (this.bounceFrom > 0) {
            this.update(this.minY, 100, true);
            return;
        }
        else if (this.bounceFrom < 0) {
            this.update(this.maxY, 100, true);
            return;
        }
        this.velocity = clamp(-MAX_PICKER_SPEED, detail.velocityY * 23, MAX_PICKER_SPEED);
        if (this.velocity === 0 && detail.deltaY === 0) {
            const opt = detail.event.target.closest('.picker-opt');
            if (opt && opt.hasAttribute('opt-index')) {
                this.setSelected(parseInt(opt.getAttribute('opt-index'), 10), TRANSITION_DURATION);
            }
        }
        else {
            this.y += detail.deltaY;
            this.decelerate();
        }
    }
    refresh(forceRefresh) {
        let min = this.col.options.length - 1;
        let max = 0;
        const options = this.col.options;
        for (let i = 0; i < options.length; i++) {
            if (!options[i].disabled) {
                min = Math.min(min, i);
                max = Math.max(max, i);
            }
        }
        const selectedIndex = clamp(min, this.col.selectedIndex || 0, max);
        if (this.col.prevSelected !== selectedIndex || forceRefresh) {
            const y = (selectedIndex * this.optHeight) * -1;
            this.velocity = 0;
            this.update(y, TRANSITION_DURATION, true);
        }
    }
    hostData() {
        return {
            class: {
                'picker-col': true,
                'picker-opts-left': this.col.align === 'left',
                'picker-opts-right': this.col.align === 'right'
            },
            style: {
                'max-width': this.col.columnWidth
            }
        };
    }
    render() {
        const col = this.col;
        const Button = 'button';
        return [
            col.prefix && (h("div", { class: "picker-prefix", style: { width: col.prefixWidth } }, col.prefix)),
            h("div", { class: "picker-opts", style: { maxWidth: col.optionsWidth }, ref: el => this.optsEl = el }, col.options.map((o, index) => h(Button, { type: "button", class: { 'picker-opt': true, 'picker-opt-disabled': !!o.disabled }, "opt-index": index }, o.text))),
            col.suffix && (h("div", { class: "picker-suffix", style: { width: col.suffixWidth } }, col.suffix))
        ];
    }
    static get is() { return "ion-picker-column"; }
    static get properties() { return {
        "col": {
            "type": "Any",
            "attr": "col"
        },
        "el": {
            "elementRef": true
        },
        "queue": {
            "context": "queue"
        }
    }; }
}
const PICKER_OPT_SELECTED = 'picker-opt-selected';
const DECELERATION_FRICTION = 0.97;
const MAX_PICKER_SPEED = 90;
const TRANSITION_DURATION = 150;

class PickerController {
    create(opts) {
        return createOverlay(this.doc.createElement('ion-picker'), opts);
    }
    dismiss(data, role, id) {
        return dismissOverlay(this.doc, data, role, 'ion-picker', id);
    }
    async getTop() {
        return getOverlay(this.doc, 'ion-picker');
    }
    static get is() { return "ion-picker-controller"; }
    static get properties() { return {
        "create": {
            "method": true
        },
        "dismiss": {
            "method": true
        },
        "doc": {
            "context": "document"
        },
        "getTop": {
            "method": true
        }
    }; }
}

export { Datetime as IonDatetime, Picker as IonPicker, PickerColumnCmp as IonPickerColumn, PickerController as IonPickerController };