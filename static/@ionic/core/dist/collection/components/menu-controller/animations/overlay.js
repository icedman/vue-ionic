import { baseAnimation } from './base';
const BOX_SHADOW_WIDTH = 8;
export function menuOverlayAnimation(AnimationC, _, menu) {
    let closedX;
    let openedX;
    const width = menu.width + BOX_SHADOW_WIDTH;
    if (menu.isEndSide) {
        closedX = width + 'px';
        openedX = '0px';
    }
    else {
        closedX = -width + 'px';
        openedX = '0px';
    }
    const menuAni = new AnimationC()
        .addElement(menu.menuInnerEl)
        .fromTo('translateX', closedX, openedX);
    const backdropAni = new AnimationC()
        .addElement(menu.backdropEl)
        .fromTo('opacity', 0.01, 0.3);
    return baseAnimation(AnimationC).then(animation => {
        return animation.add(menuAni)
            .add(backdropAni);
    });
}
