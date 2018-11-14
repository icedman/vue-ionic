/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import*as tslib_1 from"../polyfills/tslib.js";var iosTransitionAnimation=function(){return import("./ios.transition.js")},mdTransitionAnimation=function(){return import("./md.transition.js")};function transition(n){return new Promise(function(e,i){n.queue.write(function(){beforeTransition(n),runTransition(n).then(function(i){i.animation&&i.animation.destroy(),afterTransition(n),e(i)},function(e){afterTransition(n),i(e)})})})}function beforeTransition(n){var e=n.enteringEl,i=n.leavingEl;setZIndex(e,i,n.direction),n.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),setPageHidden(e,!1),i&&setPageHidden(i,!1)}function runTransition(n){return tslib_1.__awaiter(this,void 0,void 0,function(){var e;return tslib_1.__generator(this,function(i){switch(i.label){case 0:return[4,getAnimationBuilder(n)];case 1:return[2,(e=i.sent())?animation(e,n):noAnimation(n)]}})})}function afterTransition(n){var e=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")}function getAnimationBuilder(n){return tslib_1.__awaiter(this,void 0,void 0,function(){var e;return tslib_1.__generator(this,function(i){switch(i.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,iosTransitionAnimation()]:[2,void 0];case 1:return e=i.sent().iosTransitionAnimation,[3,4];case 2:return[4,mdTransitionAnimation()];case 3:e=i.sent().mdTransitionAnimation,i.label=4;case 4:return[2,e]}})})}function animation(n,e){return tslib_1.__awaiter(this,void 0,void 0,function(){var i;return tslib_1.__generator(this,function(t){switch(t.label){case 0:return[4,waitForReady(e,!0)];case 1:return t.sent(),[4,e.animationCtrl.create(n,e.baseEl,e)];case 2:return i=t.sent(),fireWillEvents(e.window,e.enteringEl,e.leavingEl),[4,playTransition(i,e)];case 3:return t.sent(),i.hasCompleted&&fireDidEvents(e.window,e.enteringEl,e.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function noAnimation(n){return tslib_1.__awaiter(this,void 0,void 0,function(){var e,i;return tslib_1.__generator(this,function(t){switch(t.label){case 0:return e=n.enteringEl,i=n.leavingEl,[4,waitForReady(n,!1)];case 1:return t.sent(),fireWillEvents(n.window,e,i),fireDidEvents(n.window,e,i),[2,{hasCompleted:!0}]}})})}function waitForReady(n,e){return tslib_1.__awaiter(this,void 0,void 0,function(){var i;return tslib_1.__generator(this,function(t){switch(t.label){case 0:return i=(void 0!==n.deepWait?n.deepWait:e)?[deepReady(n.enteringEl),deepReady(n.leavingEl)]:[shallowReady(n.enteringEl),shallowReady(n.leavingEl)],[4,Promise.all(i)];case 1:return t.sent(),[4,notifyViewReady(n.viewIsReady,n.enteringEl)];case 2:return t.sent(),[2]}})})}function notifyViewReady(n,e){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(i){switch(i.label){case 0:return n?[4,n(e)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})}function playTransition(n,e){var i=e.progressCallback,t=new Promise(function(e){return n.onFinish(e)});return i?(n.progressStart(),i(n)):n.play(),t}function fireWillEvents(n,e,i){lifecycle(n,i,"ionViewWillLeave"),lifecycle(n,e,"ionViewWillEnter")}function fireDidEvents(n,e,i){lifecycle(n,e,"ionViewDidEnter"),lifecycle(n,i,"ionViewDidLeave")}function lifecycle(n,e,i){if(e){var t=new(0,n.CustomEvent)(i,{bubbles:!1,cancelable:!1});e.dispatchEvent(t)}}function shallowReady(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()}function deepReady(n){return tslib_1.__awaiter(this,void 0,void 0,function(){var e;return tslib_1.__generator(this,function(i){switch(i.label){case 0:return(e=n)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=i.sent())return[2];i.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(deepReady))];case 3:i.sent(),i.label=4;case 4:return[2]}})})}function setPageHidden(n,e){e?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))}function setZIndex(n,e,i){void 0!==n&&(n.style.zIndex="back"===i?"99":"101"),void 0!==e&&(e.style.zIndex="100")}export{deepReady as a,lifecycle as b,setPageHidden as c,transition as d};