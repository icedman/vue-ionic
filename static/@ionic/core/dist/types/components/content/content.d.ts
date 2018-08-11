import '../../stencil.core';
import { QueueApi } from '../../stencil.core';
import { Color, Config, Mode } from '../../interface';
export declare class Content {
    private cTop;
    private cBottom;
    private dirty;
    private scrollEl?;
    mode: Mode;
    color?: Color;
    el: HTMLElement;
    config: Config;
    queue: QueueApi;
    /**
     * If true, the content will scroll behind the headers
     * and footers. This effect can easily be seen by setting the toolbar
     * to transparent.
     */
    fullscreen: boolean;
    /**
     * If true and the content does not cause an overflow scroll, the scroll interaction will cause a bounce.
     * If the content exceeds the bounds of ionContent, nothing will change.
     * Note, the does not disable the system bounce on iOS. That is an OS level setting.
     */
    forceOverscroll?: boolean;
    /**
     * By default `ion-content` uses an `ion-scroll` under the hood to implement scrolling,
     * if you want to disable the content scrolling for a given page, set this property to `false`.
     */
    scrollEnabled: boolean;
    /**
     * Because of performance reasons, ionScroll events are disabled by default, in order to enable them
     * and start listening from (ionScroll), set this property to `true`.
     */
    scrollEvents: boolean;
    onNavChanged(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    getScrollElement(): HTMLIonScrollElement;
    private resize;
    private readDimensions;
    private writeDimensions;
    hostData(): {
        class: import("../../../../../../../../../Users/manualmeida/repos/ionic/ionic/core/src/interface").CssClassMap | null;
    };
    render(): JSX.Element[];
}
