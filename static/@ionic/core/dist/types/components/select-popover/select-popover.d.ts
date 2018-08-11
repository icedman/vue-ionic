import '../../stencil.core';
import { Mode, SelectPopoverOption } from '../../interface';
export declare class SelectPopover {
    mode: Mode;
    /** Header text for the popover */
    header?: string;
    /** Subheader text for the popover */
    subHeader?: string;
    /** Text for popover body */
    message?: string;
    /** Array of options for the popover */
    options: SelectPopoverOption[];
    onSelect(ev: any): void;
    hostData(): {
        class: import("../../../../../../../../../Users/manualmeida/repos/ionic/ionic/core/src/interface").CssClassMap;
    };
    render(): JSX.Element;
}
