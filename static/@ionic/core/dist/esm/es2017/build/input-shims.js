/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { j as pointerCoord } from './chunk-c23403d0.js';

const RELOCATED_KEY = '$ionRelocated';
function relocateInput(componentEl, inputEl, shouldRelocate, inputRelativeY = 0) {
    if (componentEl[RELOCATED_KEY] === shouldRelocate) {
        return;
    }
    console.debug(`native-input, hideCaret, shouldHideCaret: ${shouldRelocate}, input value: ${inputEl.value}`);
    if (shouldRelocate) {
        cloneInputComponent(componentEl, inputEl);
        const doc = componentEl.ownerDocument;
        const tx = doc.dir === 'rtl' ? 9999 : -9999;
        inputEl.style.transform = `translate3d(${tx}px,${inputRelativeY}px,0)`;
    }
    else {
        removeClone(componentEl, inputEl);
    }
    componentEl[RELOCATED_KEY] = shouldRelocate;
}
function isFocused(input) {
    return input === input.ownerDocument.activeElement;
}
function removeClone(componentEl, inputEl) {
    if (componentEl && componentEl.parentElement) {
        Array.from(componentEl.parentElement.querySelectorAll('.cloned-input'))
            .forEach(clon => clon.remove());
        componentEl.style.pointerEvents = '';
    }
    inputEl.style['transform'] = '';
    inputEl.style.opacity = '';
}
function cloneInputComponent(componentEl, inputEl) {
    const parentElement = componentEl.parentElement;
    const doc = componentEl.ownerDocument;
    if (componentEl && parentElement) {
        const srcTop = componentEl.offsetTop;
        const srcLeft = componentEl.offsetLeft;
        const srcWidth = componentEl.offsetWidth;
        const srcHeight = componentEl.offsetHeight;
        const clonedComponentEle = doc.createElement('div');
        const clonedStyle = clonedComponentEle.style;
        clonedComponentEle.classList.add(...Array.from(componentEl.classList));
        clonedComponentEle.classList.add('cloned-input');
        clonedComponentEle.setAttribute('aria-hidden', 'true');
        clonedStyle.pointerEvents = 'none';
        clonedStyle.position = 'absolute';
        clonedStyle.top = srcTop + 'px';
        clonedStyle.left = srcLeft + 'px';
        clonedStyle.width = srcWidth + 'px';
        clonedStyle.height = srcHeight + 'px';
        const clonedInputEl = doc.createElement('input');
        clonedInputEl.classList.add(...Array.from(inputEl.classList));
        clonedInputEl.value = inputEl.value;
        clonedInputEl.type = inputEl.type;
        clonedInputEl.placeholder = inputEl.placeholder;
        clonedInputEl.tabIndex = -1;
        clonedComponentEle.appendChild(clonedInputEl);
        parentElement.appendChild(clonedComponentEle);
        componentEl.style.pointerEvents = 'none';
    }
    inputEl.style.transform = 'scale(0)';
}

function enableHideCaretOnScroll(componentEl, inputEl, scrollEl) {
    if (!scrollEl || !inputEl) {
        return () => { return; };
    }
    console.debug('Input: enableHideCaretOnScroll');
    const scrollHideCaret = (shouldHideCaret) => {
        if (isFocused(inputEl)) {
            relocateInput(componentEl, inputEl, shouldHideCaret);
        }
    };
    const onBlur = () => relocateInput(componentEl, inputEl, false);
    const hideCaret = () => scrollHideCaret(true);
    const showCaret = () => scrollHideCaret(false);
    scrollEl.addEventListener('ionScrollStart', hideCaret);
    scrollEl.addEventListener('ionScrollEnd', showCaret);
    inputEl.addEventListener('blur', onBlur);
    return () => {
        scrollEl.removeEventListener('ionScrollStart', hideCaret);
        scrollEl.removeEventListener('ionScrollEnd', showCaret);
        inputEl.addEventListener('ionBlur', onBlur);
    };
}

const SKIP_SELECTOR = 'input, textarea, [no-blur]';
function enableInputBlurring(doc) {
    console.debug('Input: enableInputBlurring');
    let focused = true;
    let didScroll = false;
    function onScroll() {
        didScroll = true;
    }
    function onFocusin() {
        focused = true;
    }
    function onTouchend(ev) {
        if (didScroll) {
            didScroll = false;
            return;
        }
        const active = doc.activeElement;
        if (!active) {
            return;
        }
        if (active.matches(SKIP_SELECTOR)) {
            return;
        }
        const tapped = ev.target;
        if (tapped === active) {
            return;
        }
        if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {
            return;
        }
        if (tapped.classList.contains('input-cover')) {
            return;
        }
        focused = false;
        setTimeout(() => {
            if (!focused) {
                active.blur();
            }
        }, 50);
    }
    doc.addEventListener('ionScrollStart', onScroll);
    doc.addEventListener('focusin', onFocusin, true);
    doc.addEventListener('touchend', onTouchend, false);
    return () => {
        doc.removeEventListener('ionScrollStart', onScroll, true);
        doc.removeEventListener('focusin', onFocusin, true);
        doc.removeEventListener('touchend', onTouchend, false);
    };
}

const SCROLL_ASSIST_SPEED = 0.3;
function getScrollData(componentEl, contentEl, keyboardHeight) {
    const itemEl = componentEl.closest('ion-item,[ion-item]') || componentEl;
    return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, window.innerHeight);
}
function calcScrollData(inputRect, contentRect, keyboardHeight, plaformHeight) {
    const inputTop = inputRect.top;
    const inputBottom = inputRect.bottom;
    const visibleAreaTop = contentRect.top;
    const visibleAreaBottom = Math.min(contentRect.bottom, plaformHeight - keyboardHeight);
    const safeAreaTop = visibleAreaTop + 10;
    const safeAreaBottom = visibleAreaBottom / 2.0;
    const distanceToBottom = safeAreaBottom - inputBottom;
    const distanceToTop = safeAreaTop - inputTop;
    const scrollAmount = Math.round((distanceToBottom < 0)
        ? -distanceToBottom
        : (distanceToTop > 0)
            ? -distanceToTop
            : 0);
    const distance = Math.abs(scrollAmount);
    const duration = distance / SCROLL_ASSIST_SPEED;
    const scrollDuration = Math.min(400, Math.max(150, duration));
    return {
        scrollAmount,
        scrollDuration,
        scrollPadding: keyboardHeight,
        inputSafeY: -(inputTop - safeAreaTop) + 4
    };
}

function enableScrollAssist(componentEl, inputEl, contentEl, keyboardHeight) {
    let coord;
    const touchStart = (ev) => {
        coord = pointerCoord(ev);
        console.debug(`input-base, pointerStart, type: ${ev.type}`);
    };
    const touchEnd = (ev) => {
        console.debug(`input-base, pointerEnd, type: ${ev.type}`);
        if (!coord) {
            return;
        }
        const endCoord = pointerCoord(ev);
        if (!hasPointerMoved(6, coord, endCoord) && !isFocused(inputEl)) {
            ev.preventDefault();
            ev.stopPropagation();
            jsSetFocus(componentEl, inputEl, contentEl, keyboardHeight);
        }
    };
    componentEl.addEventListener('touchstart', touchStart, true);
    componentEl.addEventListener('touchend', touchEnd, true);
    return () => {
        componentEl.removeEventListener('touchstart', touchStart, true);
        componentEl.removeEventListener('touchend', touchEnd, true);
    };
}
function jsSetFocus(componentEl, inputEl, contentEl, keyboardHeight) {
    const scrollData = getScrollData(componentEl, contentEl, keyboardHeight);
    if (Math.abs(scrollData.scrollAmount) < 4) {
        inputEl.focus();
        return;
    }
    relocateInput(componentEl, inputEl, true, scrollData.inputSafeY);
    inputEl.focus();
    contentEl.scrollByPoint(0, scrollData.scrollAmount, scrollData.scrollDuration).then(() => {
        relocateInput(componentEl, inputEl, false, scrollData.inputSafeY);
        inputEl.focus();
    });
}
function hasPointerMoved(threshold, startCoord, endCoord) {
    if (startCoord && endCoord) {
        const deltaX = (startCoord.x - endCoord.x);
        const deltaY = (startCoord.y - endCoord.y);
        const distance = deltaX * deltaX + deltaY * deltaY;
        return distance > (threshold * threshold);
    }
    return false;
}

const PADDING_TIMER_KEY = '$ionPaddingTimer';
function enableScrollPadding(doc, keyboardHeight) {
    console.debug('Input: enableScrollPadding');
    function onFocusin(ev) {
        setScrollPadding(ev.target, keyboardHeight);
    }
    function onFocusout(ev) {
        setScrollPadding(ev.target, 0);
    }
    doc.addEventListener('focusin', onFocusin);
    doc.addEventListener('focusout', onFocusout);
    return () => {
        doc.removeEventListener('focusin', onFocusin);
        doc.removeEventListener('focusout', onFocusout);
    };
}
function setScrollPadding(input, keyboardHeight) {
    if (input.tagName !== 'INPUT') {
        return;
    }
    if (input.parentElement && input.parentElement.tagName === 'ION-INPUT') {
        return;
    }
    const el = input.closest('ion-content');
    if (el === null) {
        return;
    }
    const timer = el[PADDING_TIMER_KEY];
    if (timer) {
        clearTimeout(timer);
    }
    if (keyboardHeight > 0) {
        el.style.setProperty('--keyboard-offset', `${keyboardHeight}px`);
    }
    else {
        el[PADDING_TIMER_KEY] = setTimeout(() => {
            el.style.setProperty('--keyboard-offset', '0px');
        }, 120);
    }
}

const INPUT_BLURRING = true;
const SCROLL_PADDING = true;
function startInputShims(doc, config) {
    const keyboardHeight = config.getNumber('keyboardHeight', 290);
    const scrollAssist = config.getBoolean('scrollAssist', true);
    const hideCaret = config.getBoolean('hideCaretOnScroll', true);
    const inputBlurring = config.getBoolean('inputBlurring', true);
    const scrollPadding = config.getBoolean('scrollPadding', true);
    const hideCaretMap = new WeakMap();
    const scrollAssistMap = new WeakMap();
    function registerInput(componentEl) {
        const inputEl = (componentEl.shadowRoot || componentEl).querySelector('input');
        const scrollEl = componentEl.closest('ion-content');
        if (!inputEl) {
            return;
        }
        if (!!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
            const rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
            hideCaretMap.set(componentEl, rmFn);
        }
        if (!!scrollEl && scrollAssist && !scrollAssistMap.has(componentEl)) {
            const rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, keyboardHeight);
            scrollAssistMap.set(componentEl, rmFn);
        }
    }
    function unregisterInput(componentEl) {
        if (hideCaret) {
            const fn = hideCaretMap.get(componentEl);
            if (fn) {
                fn();
            }
            hideCaretMap.delete(componentEl);
        }
        if (scrollAssist) {
            const fn = scrollAssistMap.get(componentEl);
            if (fn) {
                fn();
            }
            scrollAssistMap.delete(componentEl);
        }
    }
    if (inputBlurring && INPUT_BLURRING) {
        enableInputBlurring(doc);
    }
    if (scrollPadding && SCROLL_PADDING) {
        enableScrollPadding(doc, keyboardHeight);
    }
    const inputs = Array.from(doc.querySelectorAll('ion-input'));
    for (const input of inputs) {
        registerInput(input);
    }
    doc.body.addEventListener('ionInputDidLoad', event => {
        registerInput(event.target);
    });
    doc.body.addEventListener('ionInputDidUnload', event => {
        unregisterInput(event.target);
    });
}

export { startInputShims };
