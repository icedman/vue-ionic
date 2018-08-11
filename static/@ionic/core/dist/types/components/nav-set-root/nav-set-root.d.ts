import { ComponentProps, NavComponent } from '../../interface';
export declare class NavSetRoot {
    el: HTMLElement;
    /**
     * Component you want to make root for the navigation stack
     *
     */
    component?: NavComponent;
    /**
     * Data you want to pass to the component as props
     */
    componentProps?: ComponentProps;
    push(): Promise<any>;
}
