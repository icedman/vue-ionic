import '../../stencil.core';
export declare class Grid {
    /**
     * If true, the grid will have a fixed width based on the screen size. Defaults to `false`.
     */
    fixed: boolean;
    hostData(): {
        class: {
            'grid-fixed': boolean;
        };
    };
    render(): JSX.Element;
}
