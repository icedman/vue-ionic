import { PLATFORM_CONFIGS, detectPlatforms, updateTestResults } from '../../utils/show-hide-when-utils';
export class ShowWhen {
    constructor() {
        /**
         * If false, and two or more conditions are set, the element will show when all are true.
         * If true, and two or more conditions are set, the element will show when at least one is true.
         */
        this.or = false;
        this.passesTest = false;
    }
    componentWillLoad() {
        this.calculatedPlatforms = detectPlatforms(this.win, PLATFORM_CONFIGS);
        this.onResize();
    }
    onResize() {
        updateTestResults(this);
    }
    hostData() {
        return {
            class: {
                'show-content': this.passesTest,
                'hide-content': !this.passesTest
            }
        };
    }
    static get is() { return "ion-show-when"; }
    static get properties() { return {
        "calculatedPlatforms": {
            "context": "platforms"
        },
        "config": {
            "context": "config"
        },
        "element": {
            "elementRef": true
        },
        "mediaQuery": {
            "type": String,
            "attr": "media-query"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "or": {
            "type": Boolean,
            "attr": "or"
        },
        "orientation": {
            "type": String,
            "attr": "orientation"
        },
        "passesTest": {
            "state": true
        },
        "platform": {
            "type": String,
            "attr": "platform"
        },
        "size": {
            "type": String,
            "attr": "size"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get listeners() { return [{
            "name": "window:resize",
            "method": "onResize",
            "passive": true
        }]; }
    static get style() { return "/**style-placeholder:ion-show-when:**/"; }
}
