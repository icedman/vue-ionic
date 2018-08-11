import { a as now, j as pointerCoord } from "./chunk-76b36062.js";
function startTapClick(t) { var e, n, o = 10 * -MOUSE_WAIT, i = 0, a = !1; var s = new WeakMap; function c(t) { o = now(t), d(t); } function r() { clearTimeout(n), e && (l(!1), e = void 0), a = !0; } function E(t) { e || (a = !1, u(getActivatableTarget(t.target), t)); } function d(t) { u(void 0, t), a && t.cancelable && t.preventDefault(); } function u(t, o) { if (t && t === e)
    return; clearTimeout(n), n = void 0; var _a = pointerCoord(o), i = _a.x, a = _a.y; if (e) {
    if (s.has(e))
        throw new Error("internal error");
    e.classList.contains(ACTIVATED) || T(e, i, a), l(!0);
} if (t) {
    var e_1 = s.get(t);
    e_1 && (clearTimeout(e_1), s.delete(t)), t.classList.remove(ACTIVATED), n = setTimeout(function () { T(t, i, a), n = void 0; }, ADD_ACTIVATED_DEFERS);
} e = t; } function T(t, e, n) { i = Date.now(), t.classList.add(ACTIVATED); var o = new CustomEvent("ionActivated", { bubbles: !1, detail: { x: e, y: n } }); t.dispatchEvent(o); } function l(t) { var n = e; if (!n)
    return; var o = CLEAR_STATE_DEFERS - Date.now() + i; if (t && o > 0) {
    var t_1 = setTimeout(function () { n.classList.remove(ACTIVATED), s.delete(n); }, CLEAR_STATE_DEFERS);
    s.set(n, t_1);
}
else
    n.classList.remove(ACTIVATED); } t.body.addEventListener("click", function (t) { a && (t.preventDefault(), t.stopPropagation()); }, !0), t.body.addEventListener("ionScrollStart", r), t.body.addEventListener("ionGestureCaptured", r), t.addEventListener("touchstart", function (t) { o = now(t), E(t); }, !0), t.addEventListener("touchcancel", c, !0), t.addEventListener("touchend", c, !0), t.addEventListener("mousedown", function (t) { var e = now(t) - MOUSE_WAIT; o < e && E(t); }, !0), t.addEventListener("mouseup", function (t) { var e = now(t) - MOUSE_WAIT; o < e && d(t); }, !0); }
function getActivatableTarget(t) { return t.closest(":not([tappable]) > a, :not([tappable]) > button, [tappable]"); }
var ACTIVATED = "activated", ADD_ACTIVATED_DEFERS = 200, CLEAR_STATE_DEFERS = 200, MOUSE_WAIT = 2500;
export { startTapClick };
