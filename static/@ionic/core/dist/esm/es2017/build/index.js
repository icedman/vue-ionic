/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

export { l as PLATFORMS_MAP, m as getPlatforms, k as isPlatform, n as setupPlatforms } from './chunk-c23403d0.js';

function setupConfig(config) {
    const win = window;
    const Ionic = win.Ionic;
    if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
        console.error('ionic config was already initialized');
        return;
    }
    win.Ionic = win.Ionic || {};
    win.Ionic.config = Object.assign({}, win.Ionic.config, config);
    return win.Ionic.config;
}

export { setupConfig };
