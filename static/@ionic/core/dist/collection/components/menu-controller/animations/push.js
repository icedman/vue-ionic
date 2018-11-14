import { baseAnimation } from './base';
export function menuPushAnimation(AnimationC, _, menu) {
    let contentOpenedX;
    let menuClosedX;
    const width = menu.width;
    if (menu.isEndSide) {
        contentOpenedX = -width + 'px';
        menuClosedX = width + 'px';
    }
    else {
        contentOpenedX = width + 'px';
        menuClosedX = -width + 'px';
    }
    const menuAni = new AnimationC()
        .addElement(menu.menuInnerEl)
        .fromTo('translateX', menuClosedX, '0px');
    const contentAni = new AnimationC()
        .addElement(menu.contentEl)
        .fromTo('translateX', '0px', contentOpenedX);
    const backdropAni = new AnimationC()
        .addElement(menu.backdropEl)
        .fromTo('opacity', 0.01, 0.2);
    return baseAnimation(AnimationC).then(animation => {
        return animation.add(menuAni)
            .add(backdropAni)
            .add(contentAni);
    });
}
