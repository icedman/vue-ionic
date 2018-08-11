import { QueueApi } from '../../stencil.core';
export interface GestureDetail {
    type: string;
    startX: number;
    startY: number;
    startTimeStamp: number;
    currentX: number;
    currentY: number;
    velocityX: number;
    velocityY: number;
    deltaX: number;
    deltaY: number;
    timeStamp: number;
    event: UIEvent;
    data?: any;
}
export declare type GestureCallback = (detail?: GestureDetail) => boolean | void;
export interface GestureConfig {
    el: Node;
    disableScroll?: boolean;
    queue: QueueApi;
    direction?: 'x' | 'y';
    gestureName: string;
    gesturePriority?: number;
    passive?: boolean;
    maxAngle?: number;
    threshold?: number;
    canStart?: GestureCallback;
    onWillStart?: (_: GestureDetail) => Promise<void>;
    onStart?: GestureCallback;
    onMove?: GestureCallback;
    onEnd?: GestureCallback;
    notCaptured?: GestureCallback;
}
export declare function create(config: GestureConfig): Gesture;
export declare class Gesture {
    private detail;
    private positions;
    private gesture;
    private pan;
    private hasCapturedPan;
    private hasStartedPan;
    private hasFiredStart;
    private isMoveQueued;
    private pointerEvents;
    private canStart?;
    private onWillStart?;
    private onStart?;
    private onMove?;
    private onEnd?;
    private notCaptured?;
    private threshold;
    private queue;
    constructor(config: GestureConfig);
    disabled: boolean;
    destroy(): void;
    private pointerDown;
    private pointerMove;
    private fireOnMove;
    private calcGestureData;
    private tryToCapturePan;
    private fireOnStart;
    private abortGesture;
    private reset;
    private pointerUp;
}
