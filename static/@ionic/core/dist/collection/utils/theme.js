export function hostContext(selector, el) {
    return el.closest(selector) !== null;
}
export function createColorClasses(color) {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
}
export function createThemedClasses(mode, name) {
    return {
        [name]: true,
        [`${name}-${mode}`]: !!mode
    };
}
export function getClassList(classes) {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
}
export function getClassMap(classes) {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
}
export async function openURL(win, url, ev, direction) {
    if (url != null && url[0] !== '#' && url.indexOf('://') === -1) {
        const router = win.document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            await router.componentOnReady();
            return router.push(url, direction);
        }
    }
    return false;
}
