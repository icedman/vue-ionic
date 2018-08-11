var PanRecognizer = /** @class */ (function () {
    function PanRecognizer(t, e, s) {
        this.dirty = !1, this.isPan = 0;
        var i = s * (Math.PI / 180);
        this.isDirX = "x" === t, this.maxCosine = Math.cos(i), this.threshold = e * e;
    }
    PanRecognizer.prototype.start = function (t, e) { this.startX = t, this.startY = e, this.isPan = 0, this.dirty = !0; };
    PanRecognizer.prototype.detect = function (t, e) { if (!this.dirty)
        return !1; var s = t - this.startX, i = e - this.startY, r = s * s + i * i; if (r < this.threshold)
        return !1; var h = Math.sqrt(r), o = (this.isDirX ? s : i) / h; return o > this.maxCosine ? this.isPan = 1 : o < -this.maxCosine ? this.isPan = -1 : this.isPan = 0, this.dirty = !1, !0; };
    PanRecognizer.prototype.isGesture = function () { return 0 !== this.isPan; };
    PanRecognizer.prototype.getDirection = function () { return this.isPan; };
    return PanRecognizer;
}());
var GestureController = /** @class */ (function () {
    function GestureController(t) {
        this.doc = t, this.gestureId = 0, this.requestedStart = new Map, this.disabledGestures = new Map, this.disabledScroll = new Set, this.capturedId = null;
    }
    GestureController.prototype.createGesture = function (t) { return new GestureDelegate(this, this.newID(), t.name, t.priority ? t.priority : 0, !!t.disableScroll); };
    GestureController.prototype.createBlocker = function (t) {
        if (t === void 0) { t = {}; }
        return new BlockerDelegate(this.newID(), this, t.disable, !!t.disableScroll);
    };
    GestureController.prototype.start = function (t, e, s) { return this.canStart(t) ? (this.requestedStart.set(e, s), !0) : (this.requestedStart.delete(e), !1); };
    GestureController.prototype.capture = function (t, e, s) { if (!this.start(t, e, s))
        return !1; var i = this.requestedStart; var r = -1e4; if (i.forEach(function (t) { r = Math.max(r, t); }), r === s) {
        this.capturedId = e, i.clear();
        var s_1 = new CustomEvent("ionGestureCaptured", { detail: t });
        return this.doc.body.dispatchEvent(s_1), !0;
    } return i.delete(e), !1; };
    GestureController.prototype.release = function (t) { this.requestedStart.delete(t), this.capturedId && t === this.capturedId && (this.capturedId = null); };
    GestureController.prototype.disableGesture = function (t, e) { var s = this.disabledGestures.get(t); s || (s = new Set, this.disabledGestures.set(t, s)), s.add(e); };
    GestureController.prototype.enableGesture = function (t, e) { var s = this.disabledGestures.get(t); s && s.delete(e); };
    GestureController.prototype.disableScroll = function (t) { this.disabledScroll.add(t); };
    GestureController.prototype.enableScroll = function (t) { this.disabledScroll.delete(t); };
    GestureController.prototype.canStart = function (t) { return !this.capturedId && !this.isDisabled(t); };
    GestureController.prototype.isCaptured = function () { return !!this.capturedId; };
    GestureController.prototype.isScrollDisabled = function () { return this.disabledScroll.size > 0; };
    GestureController.prototype.isDisabled = function (t) { var e = this.disabledGestures.get(t); return !!(e && e.size > 0); };
    GestureController.prototype.newID = function () { return this.gestureId++, this.gestureId; };
    return GestureController;
}());
var GestureDelegate = /** @class */ (function () {
    function GestureDelegate(t, e, s, i, r) {
        this.id = e, this.name = s, this.priority = i, this.disableScroll = r, this.ctrl = t;
    }
    GestureDelegate.prototype.canStart = function () { return !!this.ctrl && this.ctrl.canStart(this.name); };
    GestureDelegate.prototype.start = function () { return !!this.ctrl && this.ctrl.start(this.name, this.id, this.priority); };
    GestureDelegate.prototype.capture = function () { if (!this.ctrl)
        return !1; var t = this.ctrl.capture(this.name, this.id, this.priority); return t && this.disableScroll && this.ctrl.disableScroll(this.id), t; };
    GestureDelegate.prototype.release = function () { this.ctrl && (this.ctrl.release(this.id), this.disableScroll && this.ctrl.enableScroll(this.id)); };
    GestureDelegate.prototype.destroy = function () { this.release(), this.ctrl = void 0; };
    return GestureDelegate;
}());
var BlockerDelegate = /** @class */ (function () {
    function BlockerDelegate(t, e, s, i) {
        this.id = t, this.disable = s, this.disableScroll = i, this.ctrl = e;
    }
    BlockerDelegate.prototype.block = function () { if (this.ctrl) {
        if (this.disable)
            for (var _i = 0, _a = this.disable; _i < _a.length; _i++) {
                var t = _a[_i];
                this.ctrl.disableGesture(t, this.id);
            }
        this.disableScroll && this.ctrl.disableScroll(this.id);
    } };
    BlockerDelegate.prototype.unblock = function () { if (this.ctrl) {
        if (this.disable)
            for (var _i = 0, _a = this.disable; _i < _a.length; _i++) {
                var t = _a[_i];
                this.ctrl.enableGesture(t, this.id);
            }
        this.disableScroll && this.ctrl.enableScroll(this.id);
    } };
    BlockerDelegate.prototype.destroy = function () { this.unblock(), this.ctrl = void 0; };
    return BlockerDelegate;
}());
var gestureController = new GestureController(document);
var _sPassive;
function supportsPassive(t) { if (void 0 === _sPassive)
    try {
        var e = Object.defineProperty({}, "passive", { get: function () { _sPassive = !0; } });
        t.addEventListener("optsTest", function () { }, e);
    }
    catch (t) {
        _sPassive = !1;
    } return !!_sPassive; }
function addEventListener(t, e, s, i) { var r = supportsPassive(t) ? { capture: !!i.capture, passive: !!i.passive } : !!i.capture; var h, o; return t.__zone_symbol__addEventListener ? (h = "__zone_symbol__addEventListener", o = "__zone_symbol__removeEventListener") : (h = "addEventListener", o = "removeEventListener"), t[h](e, s, r), function () { t[o](e, s, r); }; }
var MOUSE_WAIT = 2e3;
var PointerEvents = /** @class */ (function () {
    function PointerEvents(t, e, s, i, r) {
        this.el = t, this.pointerDown = e, this.pointerMove = s, this.pointerUp = i, this.options = r, this.lastTouchEvent = 0, this.bindTouchEnd = this.handleTouchEnd.bind(this), this.bindMouseUp = this.handleMouseUp.bind(this);
    }
    Object.defineProperty(PointerEvents.prototype, "disabled", {
        set: function (t) { t ? (this.rmTouchStart && this.rmTouchStart(), this.rmMouseStart && this.rmMouseStart(), this.rmTouchStart = this.rmMouseStart = void 0, this.stop()) : (this.rmTouchStart || (this.rmTouchStart = addEventListener(this.el, "touchstart", this.handleTouchStart.bind(this), this.options)), this.rmMouseStart || (this.rmMouseStart = addEventListener(this.el, "mousedown", this.handleMouseDown.bind(this), this.options))); },
        enumerable: true,
        configurable: true
    });
    PointerEvents.prototype.stop = function () { this.stopTouch(), this.stopMouse(); };
    PointerEvents.prototype.destroy = function () { this.disabled = !0, this.pointerUp = this.pointerMove = this.pointerDown = void 0; };
    PointerEvents.prototype.handleTouchStart = function (t) { this.lastTouchEvent = Date.now() + MOUSE_WAIT, this.pointerDown(t, POINTER_EVENT_TYPE_TOUCH) && (!this.rmTouchMove && this.pointerMove && (this.rmTouchMove = addEventListener(this.el, "touchmove", this.pointerMove, this.options)), this.rmTouchEnd || (this.rmTouchEnd = addEventListener(this.el, "touchend", this.bindTouchEnd, this.options)), this.rmTouchCancel || (this.rmTouchCancel = addEventListener(this.el, "touchcancel", this.bindTouchEnd, this.options))); };
    PointerEvents.prototype.handleMouseDown = function (t) { this.lastTouchEvent > Date.now() || this.pointerDown(t, POINTER_EVENT_TYPE_MOUSE) && (!this.rmMouseMove && this.pointerMove && (this.rmMouseMove = addEventListener(getDocument(this.el), "mousemove", this.pointerMove, this.options)), this.rmMouseUp || (this.rmMouseUp = addEventListener(getDocument(this.el), "mouseup", this.bindMouseUp, this.options))); };
    PointerEvents.prototype.handleTouchEnd = function (t) { this.stopTouch(), this.pointerUp && this.pointerUp(t, POINTER_EVENT_TYPE_TOUCH); };
    PointerEvents.prototype.handleMouseUp = function (t) { this.stopMouse(), this.pointerUp && this.pointerUp(t, POINTER_EVENT_TYPE_MOUSE); };
    PointerEvents.prototype.stopTouch = function () { this.rmTouchMove && this.rmTouchMove(), this.rmTouchEnd && this.rmTouchEnd(), this.rmTouchCancel && this.rmTouchCancel(), this.rmTouchMove = this.rmTouchEnd = this.rmTouchCancel = void 0; };
    PointerEvents.prototype.stopMouse = function () { this.rmMouseMove && this.rmMouseMove(), this.rmMouseUp && this.rmMouseUp(), this.rmMouseMove = this.rmMouseUp = void 0; };
    return PointerEvents;
}());
function getDocument(t) { return t instanceof Document ? t : t.ownerDocument; }
var POINTER_EVENT_TYPE_MOUSE = 1, POINTER_EVENT_TYPE_TOUCH = 2;
function create(t) { return new Gesture(t); }
var Gesture = /** @class */ (function () {
    function Gesture(t) {
        this.positions = [], this.hasCapturedPan = !1, this.hasStartedPan = !1, this.hasFiredStart = !0, this.isMoveQueued = !1;
        var e = Object.assign({ disableScroll: !1, direction: "x", gesturePriority: 0, passive: !0, maxAngle: 40, threshold: 10 }, t);
        this.canStart = e.canStart, this.onWillStart = e.onWillStart, this.onStart = e.onStart, this.onEnd = e.onEnd, this.onMove = e.onMove, this.threshold = e.threshold, this.queue = e.queue, this.detail = { type: "pan", startX: 0, startY: 0, startTimeStamp: 0, currentX: 0, currentY: 0, velocityX: 0, velocityY: 0, deltaX: 0, deltaY: 0, timeStamp: 0, event: void 0, data: void 0 }, this.pointerEvents = new PointerEvents(e.el, this.pointerDown.bind(this), this.pointerMove.bind(this), this.pointerUp.bind(this), { capture: !1 }), this.pan = new PanRecognizer(e.direction, e.threshold, e.maxAngle), this.gesture = gestureController.createGesture({ name: t.gestureName, priority: t.gesturePriority, disableScroll: t.disableScroll });
    }
    Object.defineProperty(Gesture.prototype, "disabled", {
        set: function (t) { this.pointerEvents.disabled = t; },
        enumerable: true,
        configurable: true
    });
    Gesture.prototype.destroy = function () { this.gesture.destroy(), this.pointerEvents.destroy(); };
    Gesture.prototype.pointerDown = function (t) { var e = now(t); if (this.hasStartedPan || !this.hasFiredStart)
        return !1; var s = this.detail; return updateDetail(t, s), s.startX = s.currentX, s.startY = s.currentY, s.startTimeStamp = s.timeStamp = e, s.velocityX = s.velocityY = s.deltaX = s.deltaY = 0, s.event = t, this.positions.length = 0, (!this.canStart || !1 !== this.canStart(s)) && (this.gesture.release(), !!this.gesture.start() && (this.positions.push(s.currentX, s.currentY, e), this.hasStartedPan = !0, 0 === this.threshold ? this.tryToCapturePan() : (this.pan.start(s.startX, s.startY), !0))); };
    Gesture.prototype.pointerMove = function (t) { if (this.hasCapturedPan)
        return void (!this.isMoveQueued && this.hasFiredStart && (this.isMoveQueued = !0, this.calcGestureData(t), this.queue.write(this.fireOnMove.bind(this)))); var e = this.detail; this.calcGestureData(t), this.pan.detect(e.currentX, e.currentY) && this.pan.isGesture() && (this.tryToCapturePan() || this.abortGesture()); };
    Gesture.prototype.fireOnMove = function () { if (!this.hasCapturedPan)
        return; var t = this.detail; this.isMoveQueued = !1, this.onMove && this.onMove(t); };
    Gesture.prototype.calcGestureData = function (t) { var e = this.detail; updateDetail(t, e); var s = e.currentX, i = e.currentY, r = e.timeStamp = now(t); e.deltaX = s - e.startX, e.deltaY = i - e.startY, e.event = t; var h = r - 100, o = this.positions; var n = o.length - 1; for (; n > 0 && o[n] > h;)
        n -= 3; if (n > 1) {
        var t_1 = 1 / (o[n] - r), h_1 = o[n - 1] - i, a = o[n - 2] - s;
        e.velocityX = a * t_1, e.velocityY = h_1 * t_1;
    }
    else
        e.velocityX = 0, e.velocityY = 0; o.push(s, i, r); };
    Gesture.prototype.tryToCapturePan = function () { if (this.gesture && !this.gesture.capture())
        return !1; this.hasCapturedPan = !0, this.hasFiredStart = !1; var t = this.detail; return t.startX = t.currentX, t.startY = t.currentY, t.startTimeStamp = t.timeStamp, this.onWillStart ? this.onWillStart(this.detail).then(this.fireOnStart.bind(this)) : this.fireOnStart(), !0; };
    Gesture.prototype.fireOnStart = function () { this.onStart && this.onStart(this.detail), this.hasFiredStart = !0; };
    Gesture.prototype.abortGesture = function () { this.reset(), this.pointerEvents.stop(), this.notCaptured && this.notCaptured(this.detail); };
    Gesture.prototype.reset = function () { this.hasCapturedPan = !1, this.hasStartedPan = !1, this.isMoveQueued = !1, this.hasFiredStart = !0, this.gesture && this.gesture.release(); };
    Gesture.prototype.pointerUp = function (t) { var e = this.hasCapturedPan, s = this.hasFiredStart; if (this.reset(), !s)
        return; this.calcGestureData(t); var i = this.detail; e ? this.onEnd && this.onEnd(i) : this.notCaptured && this.notCaptured(i); };
    return Gesture;
}());
function updateDetail(t, e) { var s = 0, i = 0; if (t) {
    var e_1 = t.changedTouches;
    if (e_1 && e_1.length > 0) {
        var t_2 = e_1[0];
        s = t_2.clientX, i = t_2.clientY;
    }
    else
        void 0 !== t.pageX && (s = t.pageX, i = t.pageY);
} e.currentX = s, e.currentY = i; }
function now(t) { return t.timeStamp || Date.now(); }
export { create, Gesture };
