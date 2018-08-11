import { QueueApi } from '../../stencil.core';
import { Config, Mode } from '../../interface';
export declare class App {
    private isDevice;
    mode: Mode;
    el: HTMLElement;
    win: Window;
    config: Config;
    queue: QueueApi;
    componentWillLoad(): void;
    componentDidLoad(): void;
    hostData(): {
        class: {
            'is-device': boolean;
            'is-hydrid': boolean;
            'statusbar-padding': any;
        };
    };
}
