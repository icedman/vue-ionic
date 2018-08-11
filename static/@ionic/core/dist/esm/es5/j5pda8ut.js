/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import{h}from"./ionic.core.js";import{d as hasShadowDom}from"./chunk-76b36062.js";import{c as openURL}from"./chunk-f7b6af08.js";var Button=function(){function t(){this.keyFocus=!1,this.buttonType="button",this.disabled=!1,this.strong=!1,this.type="button"}return t.prototype.componentWillLoad=function(){void 0===this.fill&&(this.fill=this.el.closest("ion-buttons")?"clear":"solid")},t.prototype.onFocus=function(){this.ionFocus.emit()},t.prototype.onKeyUp=function(){this.keyFocus=!0},t.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},t.prototype.onClick=function(t){if("button"===this.type)openURL(this.win,this.href,t,this.routerDirection);else if(hasShadowDom(this.el)){var e=this.el.closest("form");if(e){t.preventDefault(),t.stopPropagation();var o=document.createElement("button");o.type=this.type,o.style.display="none",e.appendChild(o),o.click(),o.remove()}}},t.prototype.hostData=function(){var t=this,e=t.buttonType,o=t.color,n=t.expand,i=t.fill,r=t.mode,s=t.shape,a=t.size,l=t.strong;return{class:Object.assign({},getButtonClassMap(e,r),getButtonTypeClassMap(e,n,r),getButtonTypeClassMap(e,a,r),getButtonTypeClassMap(e,s,r),getButtonTypeClassMap(e,l?"strong":void 0,r),getColorClassMap(e,o,i,r),{focused:this.keyFocus}),tappable:!0}},t.prototype.render=function(){var t=this.href?"a":"button",e="button"===t?{type:this.type}:{href:this.href};return h(t,Object.assign({},e,{class:"button-native",disabled:this.disabled,onFocus:this.onFocus.bind(this),onKeyUp:this.onKeyUp.bind(this),onBlur:this.onBlur.bind(this),onClick:this.onClick.bind(this)}),h("span",{class:"button-inner"},h("slot",{name:"icon-only"}),h("slot",{name:"start"}),h("slot",null),h("slot",{name:"end"})),"md"===this.mode&&h("ion-ripple-effect",{tapClick:!0,parent:this.el}))},Object.defineProperty(t,"is",{get:function(){return"ion-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{buttonType:{type:String,attr:"button-type",mutable:!0},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},el:{elementRef:!0},expand:{type:String,attr:"expand",reflectToAttr:!0},fill:{type:String,attr:"fill",reflectToAttr:!0,mutable:!0},href:{type:String,attr:"href"},keyFocus:{state:!0},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},shape:{type:String,attr:"shape",reflectToAttr:!0},size:{type:String,attr:"size",reflectToAttr:!0},strong:{type:Boolean,attr:"strong"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-contrast:var(--ion-color-primary-contrast, #fff);--ion-color-shade:var(--ion-color-primary-shade, #3171e0);--overflow:hidden;--ripple-color:currentColor;display:inline-block;text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle}:host([disabled]){pointer-events:none}:host(.button-solid){--background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline){--border-color:var(--ion-color-base);--background:transparent;color:var(--ion-color-base);--border-radius:12px;--border-width:1px;--border-style:solid}:host(.button-clear){--border-width:0;--background:transparent;color:var(--ion-color-base)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:strict}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:strict}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:inline-block;position:relative;height:var(--height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:content;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);vertical-align:top;vertical-align:-webkit-baseline-middle;z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-font-kerning:none;font-kerning:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native[disabled]{cursor:default;opacity:.5;pointer-events:none}.button-native:active,.button-native:focus{outline:0}.button-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin:0 .3em 0 -.3em}::slotted(ion-icon[slot=end]){margin:0 -.2em 0 .3em}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}:host{--border-radius:12px;--margin-top:4px;--margin-bottom:4px;--margin-start:2px;--margin-end:2px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--height:2.8em;--transition:background-color,opacity 100ms linear;font-family:var(--ion-font-family,inherit);font-size:16px;font-weight:500;letter-spacing:-.03em}:host(.button-solid:hover){--opacity:0.8}:host(.button-solid.focused){--background:var(--ion-color-shade)}:host(.button-solid.activated){--background:var(--ion-color-shade);--opacity:1}:host(.button-outline.activated){--background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.focused){--background:rgba(var(--ion-color-base-rgb), 0.1)}:host(.button-outline.activated.focused){--border-color:var(--ion-color-shade);--background:var(--ion-color-shade)}:host(.button-clear:hover){--opacity:0.6}:host(.button-clear.activated){--opacity:0.4}:host(.button-clear.focused){--background:rgba(var(--ion-color-base-rgb), 0.1)}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--border-radius:14px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;--height:2.8em;font-size:20px}:host(.button-small){--border-radius:8px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;--height:2.1em;font-size:13px}:host(.button-strong){font-weight:600}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();function getButtonClassMap(t,e){var o;return t?((o={})[t]=!0,o[t+"-"+e]=!0,o):{}}function getButtonTypeClassMap(t,e,o){var n;return e?((n={})[t+"-"+(e=e.toLocaleLowerCase())]=!0,n[t+"-"+e+"-"+o]=!0,n):{}}function getColorClassMap(t,e,o,n){var i,r=t;o&&(r+="-"+o.toLowerCase());var s=((i={})[r]=!0,i[r+"-"+n]=!0,i);return e&&(s["ion-color-"+e]=!0),s}var Icon=function(){function t(){this.isVisible=!1,this.lazy=!0}return t.prototype.componentWillLoad=function(){var t=this;this.waitUntilVisible(this.el,"50px",function(){t.isVisible=!0,t.loadIcon()})},t.prototype.componentDidUnload=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.waitUntilVisible=function(t,e,o){var n=this;if(this.lazy&&this.win&&this.win.IntersectionObserver){var i=this.io=new this.win.IntersectionObserver(function(t){t[0].isIntersecting&&(i.disconnect(),n.io=void 0,o())},{rootMargin:e});i.observe(t)}else o()},t.prototype.loadIcon=function(){var t=this;if(!this.isServer&&this.isVisible){var e=this.getUrl();e&&getSvgContent(e).then(function(e){t.svgContent=validateContent(t.doc,e,t.el["s-sc"])})}if(!this.ariaLabel){var o=getName(this.name,this.mode,this.ios,this.md);o&&(this.ariaLabel=o.replace("ios-","").replace("md-","").replace(/\-/g," "))}},t.prototype.getUrl=function(){var t=getSrc(this.src);return t||((t=getName(this.name,this.mode,this.ios,this.md))?this.getNamedUrl(t):(t=getSrc(this.icon))?t:(t=getName(this.icon,this.mode,this.ios,this.md))?this.getNamedUrl(t):null)},t.prototype.getNamedUrl=function(t){return this.resourcesUrl+"svg/"+t+".svg"},t.prototype.hostData=function(){var t;return{role:"img",class:Object.assign({},createColorClasses(this.color),(t={},t["icon-"+this.size]=!!this.size,t))}},t.prototype.render=function(){return!this.isServer&&this.svgContent?h("div",{class:"icon-inner",innerHTML:this.svgContent}):h("div",{class:"icon-inner"})},Object.defineProperty(t,"is",{get:function(){return"ion-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.icon-small){font-size:var(--ion-icon-size-small,18px)!important}:host(.icon-large){font-size:var(--ion-icon-size-large,32px)!important}.icon-inner,svg{display:block;height:100%;width:100%}svg{fill:currentColor;stroke:currentColor}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"},enumerable:!0,configurable:!0}),t}(),requests=new Map;function getSvgContent(t){var e=requests.get(t);return e||(e=fetch(t,{cache:"force-cache"}).then(function(t){return t.ok?t.text():Promise.resolve(null)}),requests.set(t,e)),e}function getName(t,e,o,n){return e=(e||"md").toLowerCase(),o&&"ios"===e?t=o.toLowerCase():n&&"md"===e?t=n.toLowerCase():t&&(t=t.toLowerCase(),/^md-|^ios-|^logo-/.test(t)||(t=e+"-"+t)),"string"!=typeof t||""===t.trim()?null:""!==t.replace(/[a-z]|-|\d/gi,"")?null:t}function getSrc(t){return"string"==typeof t&&(t=t.trim()).length>0&&/(\/|\.)/.test(t)?t:null}function validateContent(t,e,o){if(e){var n=t.createDocumentFragment(),i=t.createElement("div");i.innerHTML=e,n.appendChild(i);for(var r=i.childNodes.length-1;r>=0;r--)"svg"!==i.childNodes[r].nodeName.toLowerCase()&&i.removeChild(i.childNodes[r]);var s=i.firstElementChild;if(s&&"svg"===s.nodeName.toLowerCase()&&(o&&s.setAttribute(o,""),isValid(s)))return i.innerHTML}return""}function isValid(t){if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(var e=0;e<t.attributes.length;e++){var o=t.attributes[e].value;if("string"==typeof o&&0===o.toLowerCase().indexOf("on"))return!1}for(e=0;e<t.childNodes.length;e++)if(!isValid(t.childNodes[e]))return!1}return!0}function createColorClasses(t){var e;return t?((e={"ion-color":!0})["ion-color-"+t]=!0,e):null}export{Button as IonButton,Icon as IonIcon};