import { isMatch } from '../../utils/media';
const SUPPORTS_VARS = !!(CSS && CSS.supports && CSS.supports('--a', '0'));
const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];
export class Col {
    onResize() {
        this.el.forceUpdate();
    }
    // Loop through all of the breakpoints to see if the media query
    // matches and grab the column value from the relevant prop if so
    getColumns(property) {
        let matched;
        for (const breakpoint of BREAKPOINTS) {
            const matches = isMatch(breakpoint);
            // Grab the value of the property, if it exists and our
            // media query matches we return the value
            const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
            if (matches && columns !== undefined) {
                matched = columns;
            }
        }
        // Return the last matched columns since the breakpoints
        // increase in size and we want to return the largest match
        return matched;
    }
    calculateSize() {
        const columns = this.getColumns('size');
        // If size wasn't set for any breakpoint
        // or if the user set the size without a value
        // it means we need to stick with the default and return
        // e.g. <ion-col size-md>
        if (!columns || columns === '') {
            return;
        }
        // If the size is set to auto then don't calculate a size
        const colSize = (columns === 'auto')
            ? 'auto'
            // If CSS supports variables we should use the grid columns var
            : SUPPORTS_VARS ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
                // Convert the columns to a percentage by dividing by the total number
                // of columns (12) and then multiplying by 100
                : ((columns / 12) * 100) + '%';
        return {
            'flex': `0 0 ${colSize}`,
            'width': `${colSize}`,
            'max-width': `${colSize}`
        };
    }
    // Called by push, pull, and offset since they use the same calculations
    calculatePosition(property, modifier) {
        const columns = this.getColumns(property);
        if (!columns) {
            return;
        }
        // If the number of columns passed are greater than 0 and less than
        // 12 we can position the column, else default to auto
        const amount = SUPPORTS_VARS
            // If CSS supports variables we should use the grid columns var
            ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
            // Convert the columns to a percentage by dividing by the total number
            // of columns (12) and then multiplying by 100
            : (columns > 0 && columns < 12) ? (columns / 12 * 100) + '%' : 'auto';
        return {
            [modifier]: amount
        };
    }
    calculateOffset() {
        return this.calculatePosition('offset', 'margin-left');
    }
    calculatePull() {
        return this.calculatePosition('pull', 'right');
    }
    calculatePush() {
        return this.calculatePosition('push', 'left');
    }
    hostData() {
        return {
            style: Object.assign({}, this.calculateOffset(), this.calculatePull(), this.calculatePush(), this.calculateSize())
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-col"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "offset": {
            "type": String,
            "attr": "offset"
        },
        "offsetLg": {
            "type": String,
            "attr": "offset-lg"
        },
        "offsetMd": {
            "type": String,
            "attr": "offset-md"
        },
        "offsetSm": {
            "type": String,
            "attr": "offset-sm"
        },
        "offsetXl": {
            "type": String,
            "attr": "offset-xl"
        },
        "offsetXs": {
            "type": String,
            "attr": "offset-xs"
        },
        "pull": {
            "type": String,
            "attr": "pull"
        },
        "pullLg": {
            "type": String,
            "attr": "pull-lg"
        },
        "pullMd": {
            "type": String,
            "attr": "pull-md"
        },
        "pullSm": {
            "type": String,
            "attr": "pull-sm"
        },
        "pullXl": {
            "type": String,
            "attr": "pull-xl"
        },
        "pullXs": {
            "type": String,
            "attr": "pull-xs"
        },
        "push": {
            "type": String,
            "attr": "push"
        },
        "pushLg": {
            "type": String,
            "attr": "push-lg"
        },
        "pushMd": {
            "type": String,
            "attr": "push-md"
        },
        "pushSm": {
            "type": String,
            "attr": "push-sm"
        },
        "pushXl": {
            "type": String,
            "attr": "push-xl"
        },
        "pushXs": {
            "type": String,
            "attr": "push-xs"
        },
        "size": {
            "type": String,
            "attr": "size"
        },
        "sizeLg": {
            "type": String,
            "attr": "size-lg"
        },
        "sizeMd": {
            "type": String,
            "attr": "size-md"
        },
        "sizeSm": {
            "type": String,
            "attr": "size-sm"
        },
        "sizeXl": {
            "type": String,
            "attr": "size-xl"
        },
        "sizeXs": {
            "type": String,
            "attr": "size-xs"
        }
    }; }
    static get listeners() { return [{
            "name": "window:resize",
            "method": "onResize",
            "passive": true
        }]; }
    static get style() { return "/**style-placeholder:ion-col:**/"; }
}
