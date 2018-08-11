import { debounceEvent } from '../../utils/helpers';
import { createColorClasses } from '../../utils/theme';
export class Searchbar {
    constructor() {
        this.isCancelVisible = false;
        this.shouldAlignLeft = true;
        this.focused = false;
        /**
         * If true, enable searchbar animation. Default `false`.
         */
        this.animated = false;
        /**
         * Set the input's autocomplete property. Values: `"on"`, `"off"`. Default `"off"`.
         */
        this.autocomplete = 'off';
        /**
         * Set the input's autocorrect property. Values: `"on"`, `"off"`. Default `"off"`.
         */
        this.autocorrect = 'off';
        /**
         * Set the cancel button icon. Only applies to `md` mode. Defaults to `"md-arrow-back"`.
         */
        this.cancelButtonIcon = 'md-arrow-back';
        /**
         * Set the the cancel button text. Only applies to `ios` mode. Default: `"Cancel"`.
         */
        this.cancelButtonText = 'Cancel';
        /**
         * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. Default `250`.
         */
        this.debounce = 250;
        /**
         * Set the input's placeholder. Default `"Search"`.
         */
        this.placeholder = 'Search';
        /**
         * If true, show the cancel button. Default `false`.
         */
        this.showCancelButton = false;
        /**
         * If true, enable spellcheck on the input. Default `false`.
         */
        this.spellcheck = false;
        /**
         * Set the type of the input. Values: `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, `"url"`. Default `"search"`.
         */
        this.type = 'search';
        /**
         * the value of the searchbar.
         */
        this.value = '';
    }
    debounceChanged() {
        this.ionChange = debounceEvent(this.ionChange, this.debounce);
    }
    valueChanged() {
        const inputEl = this.nativeInput;
        const value = this.value;
        if (inputEl && inputEl.value !== value) {
            inputEl.value = value;
        }
        this.ionChange.emit({ value });
    }
    componentDidLoad() {
        this.positionElements();
        this.debounceChanged();
    }
    /**
     * Clears the input field and triggers the control change.
     */
    clearInput(ev) {
        this.ionClear.emit();
        if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        // setTimeout() fixes https://github.com/ionic-team/ionic/issues/7527
        // wait for 4 frames
        setTimeout(() => {
            const value = this.value;
            if (value !== undefined && value !== '') {
                this.value = '';
                this.ionInput.emit();
            }
        }, 16 * 4);
    }
    /**
     * Clears the input field and tells the input to blur since
     * the clearInput function doesn't want the input to blur
     * then calls the custom cancel function if the user passed one in.
     */
    cancelSearchbar() {
        this.ionCancel.emit();
        this.clearInput();
    }
    /**
     * Update the Searchbar input value when the input changes
     */
    onInput(ev) {
        const input = ev.target;
        if (input) {
            this.value = input.value;
        }
        this.ionInput.emit(ev);
    }
    /**
     * Sets the Searchbar to not focused and checks if it should align left
     * based on whether there is a value in the searchbar or not.
     */
    onBlur() {
        this.focused = false;
        this.ionBlur.emit();
        this.positionElements();
    }
    /**
     * Sets the Searchbar to focused and active on input focus.
     */
    onFocus() {
        this.focused = true;
        this.ionFocus.emit();
        this.positionElements();
    }
    /**
     * Positions the input search icon, placeholder, and the cancel button
     * based on the input value and if it is focused. (ios only)
     */
    positionElements() {
        const prevAlignLeft = this.shouldAlignLeft;
        const shouldAlignLeft = (!this.animated || (this.value && this.value.toString().trim() !== '') || this.focused === true);
        this.shouldAlignLeft = shouldAlignLeft;
        if (this.mode !== 'ios') {
            return;
        }
        if (prevAlignLeft !== shouldAlignLeft) {
            this.positionPlaceholder();
        }
        if (this.animated) {
            this.positionCancelButton();
        }
    }
    /**
     * Positions the input placeholder
     */
    positionPlaceholder() {
        const isRTL = this.doc.dir === 'rtl';
        const inputEl = this.nativeInput;
        const iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');
        if (this.shouldAlignLeft) {
            inputEl.removeAttribute('style');
            iconEl.removeAttribute('style');
        }
        else {
            // Create a dummy span to get the placeholder width
            const doc = this.doc;
            const tempSpan = doc.createElement('span');
            tempSpan.innerHTML = this.placeholder;
            doc.body.appendChild(tempSpan);
            // Get the width of the span then remove it
            const textWidth = tempSpan.offsetWidth;
            tempSpan.remove();
            // Calculate the input padding
            const inputLeft = 'calc(50% - ' + (textWidth / 2) + 'px)';
            // Calculate the icon margin
            const iconLeft = 'calc(50% - ' + ((textWidth / 2) + 30) + 'px)';
            // Set the input padding start and icon margin start
            if (isRTL) {
                inputEl.style.paddingRight = inputLeft;
                iconEl.style.marginRight = iconLeft;
            }
            else {
                inputEl.style.paddingLeft = inputLeft;
                iconEl.style.marginLeft = iconLeft;
            }
        }
    }
    /**
     * Show the iOS Cancel button on focus, hide it offscreen otherwise
     */
    positionCancelButton() {
        const isRTL = this.doc.dir === 'rtl';
        const cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button');
        const shouldShowCancel = this.focused;
        if (cancelButton && shouldShowCancel !== this.isCancelVisible) {
            const cancelStyle = cancelButton.style;
            this.isCancelVisible = shouldShowCancel;
            if (shouldShowCancel) {
                if (isRTL) {
                    cancelStyle.marginLeft = '0';
                }
                else {
                    cancelStyle.marginRight = '0';
                }
            }
            else {
                const offset = cancelButton.offsetWidth;
                if (offset > 0) {
                    if (isRTL) {
                        cancelStyle.marginLeft = -offset + 'px';
                    }
                    else {
                        cancelStyle.marginRight = -offset + 'px';
                    }
                }
            }
        }
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'searchbar-animated': this.animated, 'searchbar-has-value': (this.value !== ''), 'searchbar-show-cancel': this.showCancelButton, 'searchbar-left-aligned': this.shouldAlignLeft, 'searchbar-has-focus': this.focused })
        };
    }
    render() {
        const clearIcon = this.clearIcon || (this.mode === 'ios' ? 'ios-close-circle' : 'md-close');
        const searchIcon = this.searchIcon || 'search';
        const cancelButton = (this.showCancelButton)
            ? h("button", { type: "button", tabIndex: this.mode === 'ios' && !this.focused ? -1 : undefined, onClick: this.cancelSearchbar.bind(this), class: "searchbar-cancel-button" }, this.mode === 'md'
                ? h("ion-icon", { mode: this.mode, icon: this.cancelButtonIcon, lazy: false })
                : this.cancelButtonText)
            : null;
        return [
            h("div", { class: "searchbar-input-container" },
                this.mode === 'md' && cancelButton,
                h("ion-icon", { mode: this.mode, icon: searchIcon, lazy: false, class: "searchbar-search-icon" }),
                h("input", { ref: el => this.nativeInput = el, class: "searchbar-input", onInput: this.onInput.bind(this), onBlur: this.onBlur.bind(this), onFocus: this.onFocus.bind(this), placeholder: this.placeholder, type: this.type, value: this.value, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, spellCheck: this.spellcheck }),
                h("button", { type: "button", "no-blur": true, class: "searchbar-clear-button", onClick: this.clearInput.bind(this), onMouseDown: this.clearInput.bind(this), onTouchStart: this.clearInput.bind(this) },
                    h("ion-icon", { mode: this.mode, icon: clearIcon, lazy: false, class: "searchbar-clear-icon" }))),
            this.mode === 'ios' && cancelButton
        ];
    }
    static get is() { return "ion-searchbar"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return {
        "animated": {
            "type": Boolean,
            "attr": "animated"
        },
        "autocomplete": {
            "type": String,
            "attr": "autocomplete"
        },
        "autocorrect": {
            "type": String,
            "attr": "autocorrect"
        },
        "cancelButtonIcon": {
            "type": String,
            "attr": "cancel-button-icon"
        },
        "cancelButtonText": {
            "type": String,
            "attr": "cancel-button-text"
        },
        "clearIcon": {
            "type": String,
            "attr": "clear-icon"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "debounce": {
            "type": Number,
            "attr": "debounce",
            "watchCallbacks": ["debounceChanged"]
        },
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "focused": {
            "state": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "searchIcon": {
            "type": String,
            "attr": "search-icon"
        },
        "showCancelButton": {
            "type": Boolean,
            "attr": "show-cancel-button"
        },
        "spellcheck": {
            "type": Boolean,
            "attr": "spellcheck"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true,
            "watchCallbacks": ["valueChanged"]
        }
    }; }
    static get events() { return [{
            "name": "ionInput",
            "method": "ionInput",
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
            "name": "ionCancel",
            "method": "ionCancel",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionClear",
            "method": "ionClear",
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
            "name": "ionFocus",
            "method": "ionFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ion-searchbar:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-searchbar:**/"; }
}
