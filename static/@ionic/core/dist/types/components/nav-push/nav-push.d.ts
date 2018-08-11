import { ComponentProps, NavComponent } from '../../interface';
export declare class NavPush {
    el: HTMLElement;
    /**
     * Component to navigate to
     */
    component?: NavComponent;
    /**
     * Data you want to pass to the component as props
     */
    componentProps?: ComponentProps;
    push(): Promise<any>;
}
