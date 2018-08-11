var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import "./chunk-db5a015e.js";
var iosTransitionAnimation = function () { return import("./ios.transition.js"); }, mdTransitionAnimation = function () { return import("./md.transition.js"); };
function transition(i) {
    var _this = this;
    return new Promise(function (n) { i.queue.write(function () { return __awaiter(_this, void 0, void 0, function () { var e, a; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                beforeTransition(i);
                return [4 /*yield*/, getAnimationBuilder(i)];
            case 1:
                e = _a.sent(), a = e ? animation(e, i) : noAnimation(i);
                n(a);
                return [2 /*return*/];
        }
    }); }); }); });
}
function getAnimationBuilder(i) {
    return __awaiter(this, void 0, void 0, function () { var _a, _b; return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (!(i.leavingEl && !1 !== i.animated && 0 !== i.duration)) return [3 /*break*/, 7];
                if (!i.animationBuilder) return [3 /*break*/, 1];
                _a = i.animationBuilder;
                return [3 /*break*/, 6];
            case 1:
                if (!("ios" === i.mode)) return [3 /*break*/, 3];
                return [4 /*yield*/, iosTransitionAnimation()];
            case 2:
                _b = (_c.sent()).iosTransitionAnimation;
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, mdTransitionAnimation()];
            case 4:
                _b = (_c.sent()).mdTransitionAnimation;
                _c.label = 5;
            case 5:
                _a = _b;
                _c.label = 6;
            case 6: return [2 /*return*/, _a];
            case 7: return [2 /*return*/];
        }
    }); });
}
function beforeTransition(i) { var n = i.enteringEl, e = i.leavingEl; setZIndex(n, e, i.direction), i.showGoBack ? n.classList.add("can-go-back") : n.classList.remove("can-go-back"), setPageHidden(n, !1), e && setPageHidden(e, !1); }
function setPageHidden(i, n) { n ? (i.setAttribute("aria-hidden", "true"), i.classList.add("ion-page-hidden")) : (i.hidden = !1, i.removeAttribute("aria-hidden"), i.classList.remove("ion-page-hidden")); }
function animation(i, n) {
    return __awaiter(this, void 0, void 0, function () { var e; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, waitForReady(n, !0)];
            case 1:
                _a.sent();
                return [4 /*yield*/, n.animationCtrl.create(i, n.baseEl, n)];
            case 2:
                e = _a.sent();
                fireWillEvents(n.window, n.enteringEl, n.leavingEl);
                return [4 /*yield*/, playTransition(e, n)];
            case 3: return [2 /*return*/, (_a.sent(), e.hasCompleted && fireDidEvents(n.window, n.enteringEl, n.leavingEl), e)];
        }
    }); });
}
function noAnimation(i) {
    return __awaiter(this, void 0, void 0, function () { var n, e; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                n = i.enteringEl, e = i.leavingEl;
                n && n.classList.remove("ion-page-invisible"), e && e.classList.remove("ion-page-invisible");
                return [4 /*yield*/, waitForReady(i, !1)];
            case 1: return [2 /*return*/, (_a.sent(), fireWillEvents(i.window, n, e), fireDidEvents(i.window, n, e), null)];
        }
    }); });
}
function waitForReady(i, n) {
    return __awaiter(this, void 0, void 0, function () { var e; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e = (null != i.deepWait ? i.deepWait : n) ? [deepReady(i.enteringEl), deepReady(i.leavingEl)] : [shallowReady(i.enteringEl), shallowReady(i.leavingEl)];
                return [4 /*yield*/, Promise.all(e)];
            case 1:
                _a.sent();
                return [4 /*yield*/, notifyViewReady(i.viewIsReady, i.enteringEl)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    }); });
}
function notifyViewReady(i, n) {
    return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = i;
                if (!_a) return [3 /*break*/, 2];
                return [4 /*yield*/, i(n)];
            case 1:
                _a = (_b.sent());
                _b.label = 2;
            case 2:
                _a;
                return [2 /*return*/];
        }
    }); });
}
function playTransition(i, n) { var e = n.progressCallback, a = new Promise(function (n) { return i.onFinish(n); }); return e ? (i.progressStart(), e(i)) : i.play(), a; }
function fireWillEvents(i, n, e) { lifecycle(i, e, "ionViewWillLeave"), lifecycle(i, n, "ionViewWillEnter"); }
function fireDidEvents(i, n, e) { lifecycle(i, n, "ionViewDidEnter"), lifecycle(i, e, "ionViewDidLeave"); }
function lifecycle(i, n, e) { if (n) {
    var a = new (0, i.CustomEvent)(e, { bubbles: !1, cancelable: !1 });
    n.dispatchEvent(a);
} }
function shallowReady(i) { return i && i.componentOnReady ? i.componentOnReady() : Promise.resolve(); }
function deepReady(i) {
    return __awaiter(this, void 0, void 0, function () { var n, _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                n = i;
                if (!n) return [3 /*break*/, 4];
                _a = n.componentOnReady;
                if (!_a) return [3 /*break*/, 2];
                return [4 /*yield*/, n.componentOnReady()];
            case 1:
                _a = (_b.sent());
                _b.label = 2;
            case 2:
                if (_a)
                    return [2 /*return*/];
                return [4 /*yield*/, Promise.all(Array.from(n.children).map(deepReady))];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4: return [2 /*return*/];
        }
    }); });
}
function setZIndex(i, n, e) { i && (i.style.zIndex = "back" === e ? "99" : "101"), n && (n.style.zIndex = "100"); }
export { lifecycle as a, setPageHidden as b, transition as c };
