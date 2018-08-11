/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("input-shims.js",["exports","./chunk-5b27ab2d.js"],function(t,e){window.Ionic.h;var n="$ionRelocated";function o(t,e,o,r){if(void 0===r&&(r=0),t[n]!==o){if(e.value,o){!function(t,e){var n,o,r=t.parentElement,i=t.ownerDocument;if(t&&r){var a=t.offsetTop,l=t.offsetLeft,s=t.offsetWidth,u=t.offsetHeight,c=i.createElement("div"),d=c.style;(n=c.classList).add.apply(n,Array.from(t.classList)),c.classList.add("cloned-input"),c.setAttribute("aria-hidden","true"),d.pointerEvents="none",d.position="absolute",d.top=a+"px",d.left=l+"px",d.width=s+"px",d.height=u+"px";var f=i.createElement("input");(o=f.classList).add.apply(o,Array.from(e.classList)),f.value=e.value,f.type=e.type,f.placeholder=e.placeholder,f.tabIndex=-1,c.appendChild(f),r.appendChild(c),t.style.pointerEvents="none"}e.style.transform="scale(0)"}(t,e);var i="rtl"===t.ownerDocument.dir?9999:-9999;e.style.transform="translate3d("+i+"px,"+r+"px,0)"}else!function(t,e){t&&t.parentElement&&(Array.from(t.parentElement.querySelectorAll(".cloned-input")).forEach(function(t){return t.remove()}),t.style.pointerEvents=""),e.style.transform="",e.style.opacity=""}(t,e);t[n]=o}}function r(t){return t===t.ownerDocument.activeElement}var i="input, textarea, [no-blur]",a=.3;function l(t,n,i,l){var s,u=function(t){s=e.pointerCoord(t),t.type},c=function(u){if(u.type,s){var c=e.pointerCoord(u);(function(t,e,n){if(e&&n){var o=e.x-n.x,r=e.y-n.y;return o*o+r*r>36}return!1})(0,s,c)||r(n)||(u.preventDefault(),u.stopPropagation(),function(t,e,n,r){var i=function(t,e,n){return e?function(t,e,n,o){var r=t.top,i=t.bottom,l=e.top+10,s=Math.min(e.bottom,o-n)/2-i,u=l-r,c=Math.round(s<0?-s:u>0?-u:0),d=Math.abs(c)/a;return{scrollAmount:c,scrollDuration:Math.min(400,Math.max(150,d)),scrollPadding:n,inputSafeY:4-(r-l)}}((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),e.getBoundingClientRect(),n,window.innerHeight):{scrollAmount:0,scrollPadding:0,scrollDuration:0,inputSafeY:0}}(t,n,l);Math.abs(i.scrollAmount)<4?e.focus():(o(t,e,!0,i.inputSafeY),e.focus(),n.getScrollElement().scrollByPoint(0,i.scrollAmount,i.scrollDuration).then(function(){o(t,e,!1,i.inputSafeY),e.focus()}))}(t,n,i))}};return t.addEventListener("touchstart",u,!0),t.addEventListener("touchend",c,!0),function(){t.removeEventListener("touchstart",u,!0),t.removeEventListener("touchend",c,!0)}}var s="$ionPaddingTimer";function u(t,e){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)){var n=t.closest("ion-content");if(n){var o=n[s];o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",e+"px"):n[s]=setTimeout(function(){n.style.setProperty("--keyboard-offset","0px")},120)}}}t.startInputShims=function(t,e){var n=e.getNumber("keyboardHeight",290),a=e.getBoolean("scrollAssist",!0),s=e.getBoolean("hideCaretOnScroll",!0),c=e.getBoolean("inputBlurring",!0),d=e.getBoolean("scrollPadding",!0),f=new WeakMap,p=new WeakMap;function v(t){var e=(t.shadowRoot||t).querySelector("input"),i=t.closest("ion-content"),u=i&&i.getScrollElement();if(e){if(u&&s&&!f.has(t)){var c=function(t,e,n){if(!n||!e)return function(){};var i=function(n){r(e)&&o(t,e,n)},a=function(){return o(t,e,!1)},l=function(){return i(!0)},s=function(){return i(!1)};return n&&(n.addEventListener("ionScrollStart",l),n.addEventListener("ionScrollEnd",s)),e.addEventListener("blur",a),function(){n.removeEventListener("ionScrollStart",l),n.removeEventListener("ionScrollEnd",s),e.addEventListener("ionBlur",a)}}(t,e,u);f.set(t,c)}if(i&&a&&!p.has(t)){var d=l(t,e,i,n);p.set(t,d)}}}c&&function(t){var e=!0,n=!1;t.addEventListener("ionScrollStart",function(){n=!0}),t.addEventListener("focusin",function(){e=!0},!0),t.addEventListener("touchend",function(o){if(n)n=!1;else{var r=t.activeElement;if(r&&!r.matches(i)){var a=o.target;a!==r&&(a.matches(i)||a.closest(i)||a.classList.contains("input-cover")||(e=!1,setTimeout(function(){e||r.blur()},50)))}}},!1)}(t),d&&function(t,e){t.addEventListener("focusin",function(t){u(t.target,e)}),t.addEventListener("focusout",function(t){u(t.target,0)})}(t,n);for(var m=0,h=Array.from(t.querySelectorAll("ion-input"));m<h.length;m++)v(h[m]);t.body.addEventListener("ionInputDidLoad",function(t){v(t.target)}),t.body.addEventListener("ionInputDidUnload",function(t){!function(t){if(s){var e=f.get(t);e&&e(),f.delete(t)}if(a){var n=p.get(t);n&&n(),p.delete(t)}}(t.target)})},Object.defineProperty(t,"__esModule",{value:!0})});