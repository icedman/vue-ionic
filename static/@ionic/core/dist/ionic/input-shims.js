/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{j as e}from"./chunk-76b36062.js";const n="$ionRelocated";function o(t,e,o,r=0){if(t[n]!==o){if(e.value,o){!function(t,e){const n=t.parentElement,o=t.ownerDocument;if(t&&n){const r=t.offsetTop,i=t.offsetLeft,s=t.offsetWidth,c=t.offsetHeight,a=o.createElement("div"),l=a.style;a.classList.add(...Array.from(t.classList)),a.classList.add("cloned-input"),a.setAttribute("aria-hidden","true"),l.pointerEvents="none",l.position="absolute",l.top=r+"px",l.left=i+"px",l.width=s+"px",l.height=c+"px";const u=o.createElement("input");u.classList.add(...Array.from(e.classList)),u.value=e.value,u.type=e.type,u.placeholder=e.placeholder,u.tabIndex=-1,a.appendChild(u),n.appendChild(a),t.style.pointerEvents="none"}e.style.transform="scale(0)"}(t,e);const n="rtl"===t.ownerDocument.dir?9999:-9999;e.style.transform=`translate3d(${n}px,${r}px,0)`}else!function(t,e){t&&t.parentElement&&(Array.from(t.parentElement.querySelectorAll(".cloned-input")).forEach(t=>t.remove()),t.style.pointerEvents=""),e.style.transform="",e.style.opacity=""}(t,e);t[n]=o}}function r(t){return t===t.ownerDocument.activeElement}const i="input, textarea, [no-blur]",s=.3;function c(t,n,i,c){let a;const l=t=>{a=e(t),t.type},u=l=>{if(l.type,!a)return;const u=e(l);(function(t,e,n){if(e&&n){const t=e.x-n.x,o=e.y-n.y;return t*t+o*o>36}return!1})(0,a,u)||r(n)||(l.preventDefault(),l.stopPropagation(),function(t,e,n,r){const i=function(t,e,n){return e?function(t,e,n,o){const r=t.top,i=t.bottom,c=e.top+10,a=Math.min(e.bottom,o-n)/2-i,l=c-r,u=Math.round(a<0?-a:l>0?-l:0),d=Math.abs(u)/s;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,d)),scrollPadding:n,inputSafeY:4-(r-c)}}((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),e.getBoundingClientRect(),n,window.innerHeight):{scrollAmount:0,scrollPadding:0,scrollDuration:0,inputSafeY:0}}(t,n,r);Math.abs(i.scrollAmount)<4?e.focus():(o(t,e,!0,i.inputSafeY),e.focus(),n.getScrollElement().scrollByPoint(0,i.scrollAmount,i.scrollDuration).then(()=>{o(t,e,!1,i.inputSafeY),e.focus()}))}(t,n,i,c))};return t.addEventListener("touchstart",l,!0),t.addEventListener("touchend",u,!0),()=>{t.removeEventListener("touchstart",l,!0),t.removeEventListener("touchend",u,!0)}}const a="$ionPaddingTimer";function l(t,e){if("INPUT"!==t.tagName)return;if(t.parentElement&&"ION-INPUT"===t.parentElement.tagName)return;const n=t.closest("ion-content");if(!n)return;const o=n[a];o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",`${e}px`):n[a]=setTimeout(()=>{n.style.setProperty("--keyboard-offset","0px")},120)}const u=!0,d=!0;function f(t,e){const n=e.getNumber("keyboardHeight",290),s=e.getBoolean("scrollAssist",!0),a=e.getBoolean("hideCaretOnScroll",!0),f=e.getBoolean("inputBlurring",!0),p=e.getBoolean("scrollPadding",!0),m=new WeakMap,v=new WeakMap;function E(t){const e=(t.shadowRoot||t).querySelector("input"),i=t.closest("ion-content"),l=i&&i.getScrollElement();if(e){if(l&&a&&!m.has(t)){const n=function(t,e,n){if(!n||!e)return()=>{};const i=n=>{r(e)&&o(t,e,n)},s=()=>o(t,e,!1),c=()=>i(!0),a=()=>i(!1);return n&&(n.addEventListener("ionScrollStart",c),n.addEventListener("ionScrollEnd",a)),e.addEventListener("blur",s),()=>{n.removeEventListener("ionScrollStart",c),n.removeEventListener("ionScrollEnd",a),e.addEventListener("ionBlur",s)}}(t,e,l);m.set(t,n)}if(i&&s&&!v.has(t)){const o=c(t,e,i,n);v.set(t,o)}}}f&&u&&function(t){let e=!0,n=!1;t.addEventListener("ionScrollStart",function(){n=!0}),t.addEventListener("focusin",function(){e=!0},!0),t.addEventListener("touchend",function(o){if(n)return void(n=!1);const r=t.activeElement;if(!r)return;if(r.matches(i))return;const s=o.target;s!==r&&(s.matches(i)||s.closest(i)||s.classList.contains("input-cover")||(e=!1,setTimeout(()=>{e||r.blur()},50)))},!1)}(t),p&&d&&function(t,e){t.addEventListener("focusin",function(t){l(t.target,e)}),t.addEventListener("focusout",function(t){l(t.target,0)})}(t,n);const h=Array.from(t.querySelectorAll("ion-input"));for(const t of h)E(t);t.body.addEventListener("ionInputDidLoad",t=>{E(t.target)}),t.body.addEventListener("ionInputDidUnload",t=>{!function(t){if(a){const e=m.get(t);e&&e(),m.delete(t)}if(s){const e=v.get(t);e&&e(),v.delete(t)}}(t.target)})}export{f as startInputShims};