/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("chunk-b34e377b.js",["exports"],function(n){function t(n){return!!n.shadowRoot&&!!n.attachShadow}function e(n,t){var e;return void 0===t&&(t=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(e),e=setTimeout.apply(void 0,[n,t].concat(r))}}window;var r={ipad:function(n){return d(n,/iPad/i)},iphone:function(n){return d(n,/iPhone/i)},ios:function(n){return d(n,/iPad|iPhone|iPod/i)},android:function(n){return d(n,/android|sink/i)},phablet:function(n){var t=n.innerWidth,e=n.innerHeight,r=Math.min(t,e),i=Math.max(t,e);return r>390&&r<520&&i>620&&i<800},tablet:function(n){var t=n.innerWidth,e=n.innerHeight,r=Math.min(t,e),i=Math.max(t,e);return r>460&&r<820&&i>780&&i<1400},cordova:u,capacitor:c,electron:function(n){return d(n,/electron/)},pwa:function(n){return n.matchMedia("(display-mode: standalone)").matches},mobile:a,desktop:function(n){return!a(n)},hybrid:function(n){return u(n)||c(n)}};function i(n){return o(n)}function o(n){n.Ionic=n.Ionic||{};var t=n.Ionic.platforms;if(null==t){t=n.Ionic.platforms=function(n){return Object.keys(r).filter(function(t){return r[t](n)})}(n);var e=n.document.documentElement.classList;t.forEach(function(n){return e.add("plt-"+n)})}return t}function a(n){return function(n,t){return n.matchMedia("(any-pointer:coarse)").matches}(n)}function u(n){return!!(n.cordova||n.phonegap||n.PhoneGap)}function c(n){var t=n.Capacitor;return!(!t||!t.isNative)}function d(n,t){return t.test(n.navigator.userAgent)}n.rIC=function(n){"requestIdleCallback"in window?window.requestIdleCallback(n):setTimeout(n,32)},n.now=function(n){return n.timeStamp||Date.now()},n.hasShadowDom=t,n.renderHiddenInput=function(n,e,r,i){if(t(n)){var o=n.querySelector("input.aux-input");o||((o=n.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),n.appendChild(o)),o.disabled=i,o.name=e,o.value=r||""}},n.debounceEvent=function(n,t){var r=n._original||n;return{_original:n,emit:e(r.emit.bind(r),t)}},n.isEndSide=function(n,t){var e="rtl"===n.document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},n.assert=function(n,t){if(!n){var e="ASSERT: "+t;throw console.error(e),new Error(e)}},n.clamp=function(n,t,e){return Math.max(n,Math.min(t,e))},n.debounce=e,n.pointerCoord=function(n){if(n){var t=n.changedTouches;if(t&&t.length>0){var e=t[0];return{x:e.clientX,y:e.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}},n.isPlatform=function(n,t){return i(n).includes(t)},n.PLATFORMS_MAP=r,n.getPlatforms=i,n.setupPlatforms=o});