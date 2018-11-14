export function iosEnterAnimation(AnimationC, baseEl, position) {
    const baseAnimation = new AnimationC();
    const wrapperAnimation = new AnimationC();
    const wrapperEle = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
    const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '-100%', top);
            break;
        case 'middle':
            const topPosition = Math.floor(baseEl.clientHeight / 2 - wrapperEle.clientHeight / 2);
            wrapperEle.style.top = `${topPosition}px`;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperAnimation.fromTo('translateY', '100%', bottom);
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.155,1.105,.295,1.12)')
        .duration(400)
        .add(wrapperAnimation));
}
