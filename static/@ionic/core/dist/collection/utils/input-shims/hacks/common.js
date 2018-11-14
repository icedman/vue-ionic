const RELOCATED_KEY = '$ionRelocated';
export function relocateInput(componentEl, inputEl, shouldRelocate, inputRelativeY = 0) {
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
export function isFocused(input) {
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
