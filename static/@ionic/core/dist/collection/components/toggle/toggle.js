import { hapticSelection } from '../../utils/haptic';
import { renderHiddenInput } from '../../utils/helpers';
import { createColorClasses, hostContext } from '../../utils/theme';
export class Toggle {
    constructor() {
        this.inputId = `ion-tg-${toggleIds++}`;
        this.pivotX = 0;
        this.activated = false;
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
    checkedChanged(isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
    }
    disabledChanged() {
        this.emitStyle();
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    componentWillLoad() {
        this.emitStyle();
    }
    async componentDidLoad() {
        const parentItem = this.nativeInput.closest('ion-item');
        if (parentItem) {
            const itemLabel = parentItem.querySelector('ion-label');
            if (itemLabel) {
                itemLabel.id = this.inputId + '-lbl';
                this.nativeInput.setAttribute('aria-labelledby', itemLabel.id);
            }
        }
        this.gesture = (await import('../../utils/gesture/gesture')).createGesture({
            el: this.el,
            queue: this.queue,
            gestureName: 'toggle',
            gesturePriority: 100,
            threshold: 0,
            onStart: ev => this.onStart(ev),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.disabledChanged();
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive-disabled': this.disabled,
        });
    }
    onStart(detail) {
        this.pivotX = detail.currentX;
        this.activated = true;
        detail.event.preventDefault();
        return true;
    }
    onMove(detail) {
        const currentX = detail.currentX;
        if (shouldToggle(this.checked, currentX - this.pivotX, -15)) {
            this.checked = !this.checked;
            this.pivotX = currentX;
            hapticSelection();
        }
    }
    onEnd(detail) {
        const delta = detail.currentX - this.pivotX;
        if (shouldToggle(this.checked, delta, 4)) {
            this.checked = !this.checked;
            hapticSelection();
        }
        this.activated = false;
        this.nativeInput.focus();
    }
    getValue() {
        return this.value || '';
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'in-item': hostContext('ion-item', this.el), 'toggle-activated': this.activated, 'toggle-checked': this.checked, 'toggle-disabled': this.disabled, 'toggle-key': this.keyFocus, 'interactive': true })
        };
    }
    render() {
        const value = this.getValue();
        renderHiddenInput(this.el, this.name, (this.checked ? value : ''), this.disabled);
        return [
            h("div", { class: "toggle-icon" },
                h("div", { class: "toggle-inner" })),
            h("input", { type: "checkbox", onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, onKeyUp: this.onKeyUp, checked: this.checked, id: this.inputId, name: this.name, value: value, disabled: this.disabled, ref: r => this.nativeInput = r }),
            h("slot", null)
        ];
    }
    static get is() { return "ion-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "activated": {
            "state": true
        },
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
        "queue": {
            "context": "queue"
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
    static get style() { return "/**style-placeholder:ion-toggle:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-toggle:**/"; }
}
function shouldToggle(checked, deltaX, margin) {
    const isRTL = document.dir === 'rtl';
    if (checked) {
        return (!isRTL && (margin > deltaX)) ||
            (isRTL && (-margin < deltaX));
    }
    else {
        return (!isRTL && (-margin < deltaX)) ||
            (isRTL && (margin > deltaX));
    }
}
let toggleIds = 0;
