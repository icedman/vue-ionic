/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:n}=window.Ionic,i=()=>import("./ios.transition.js"),e=()=>import("./md.transition.js");function t(n){return new Promise((t,l)=>{n.queue.write(()=>{!function(n){const i=n.enteringEl,e=n.leavingEl;(function(i,e,t){void 0!==i&&(i.style.zIndex="back"===n.direction?"99":"101"),void 0!==e&&(e.style.zIndex="100")})(i,e),n.showGoBack?i.classList.add("can-go-back"):i.classList.remove("can-go-back"),u(i,!1),e&&u(e,!1)}(n),async function(n){const t=await async function(n){if(n.leavingEl&&n.animated&&0!==n.duration)return n.animationBuilder?n.animationBuilder:"ios"===n.mode?(await i()).iosTransitionAnimation:(await e()).mdTransitionAnimation}(n);return t?async function(n,i){await o(i,!0);const e=await i.animationCtrl.create(n,i.baseEl,i);return s(i.window,i.enteringEl,i.leavingEl),await function(n,i){const e=i.progressCallback,t=new Promise(i=>n.onFinish(i));return e?(n.progressStart(),e(n)):n.play(),t}(e,i),e.hasCompleted&&r(i.window,i.enteringEl,i.leavingEl),{hasCompleted:e.hasCompleted,animation:e}}(t,n):async function(n){const i=n.enteringEl,e=n.leavingEl;return await o(n,!1),s(n.window,i,e),r(n.window,i,e),{hasCompleted:!0}}(n)}(n).then(i=>{i.animation&&i.animation.destroy(),a(n),t(i)},i=>{a(n),l(i)})})})}function a(n){const i=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==i&&i.classList.remove("ion-page-invisible")}async function o(n,i){const e=(void 0!==n.deepWait?n.deepWait:i)?[d(n.enteringEl),d(n.leavingEl)]:[c(n.enteringEl),c(n.leavingEl)];await Promise.all(e),await async function(n,i){n&&await n(i)}(n.viewIsReady,n.enteringEl)}function s(n,i,e){l(n,e,"ionViewWillLeave"),l(n,i,"ionViewWillEnter")}function r(n,i,e){l(n,i,"ionViewDidEnter"),l(n,e,"ionViewDidLeave")}function l(n,i,e){if(i){const t=new(0,n.CustomEvent)(e,{bubbles:!1,cancelable:!1});i.dispatchEvent(t)}}function c(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()}async function d(n){const i=n;if(i){if(null!=i.componentOnReady&&null!=await i.componentOnReady())return;await Promise.all(Array.from(i.children).map(d))}}function u(n,i){i?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))}export{d as a,l as b,u as c,t as d};