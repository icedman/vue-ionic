import '../../stencil.core';
import { ComponentInterface } from '../../stencil.core';
import { Config } from '../../interface';
export declare class RefresherContent implements ComponentInterface {
    config: Config;
    /**
     * A static icon to display when you begin to pull down
     */
    pullingIcon?: string;
    /**
     * The text you want to display when you begin to pull down
     */
    pullingText?: string;
    /**
     * An animated SVG spinner that shows when refreshing begins
     */
    refreshingSpinner?: string;
    /**
     * The text you want to display when performing a refresh
     */
    refreshingText?: string;
    componentDidLoad(): void;
    render(): JSX.Element[];
}
