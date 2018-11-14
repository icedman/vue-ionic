/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function c(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(c,a)}u((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Ionic.loadBundle("p3td2uac",["exports","./chunk-dd673b2a.js"],function(t,e){var n=window.Ionic.h,r=function(){function t(){}return t.prototype.hostData=function(){return{class:e.createColorClasses(this.color),"ion-activatable":!0}},t.prototype.render=function(){var t=this;return n("a",{href:this.href,onClick:function(n){return e.openURL(t.win,t.href,n,t.routerDirection)}},n("slot",null))},Object.defineProperty(t,"is",{get:function(){return"ion-anchor"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},href:{type:String,attr:"href"},routerDirection:{type:String,attr:"router-direction"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},enumerable:!0,configurable:!0}),t}(),o=function(){function t(){}return t.prototype.onClick=function(t){return __awaiter(this,void 0,void 0,function(){var n,r;return __generator(this,function(o){switch(o.label){case 0:return n=this.el.closest("ion-nav"),t.preventDefault(),(r=n)?[4,n.canGoBack()]:[3,2];case 1:r=o.sent(),o.label=2;case 2:return r?[2,n.pop({skipIfBusy:!0})]:[2,e.openURL(this.win,this.defaultHref,t,"back")]}})})},t.prototype.hostData=function(){var t=void 0!==this.defaultHref;return{"ion-activatable":!0,class:Object.assign({},e.createColorClasses(this.color),{button:!0,"show-back-button":t})}},t.prototype.render=function(){var t=this,e="ios"===this.mode?"Back":null,r=null!=this.icon?this.icon:this.config.get("backButtonIcon","arrow-back"),o=null!=this.text?this.text:this.config.get("backButtonText",e);return n("button",{type:"button",class:"button-native",onClick:function(e){return t.onClick(e)}},n("span",{class:"button-inner"},r&&n("ion-icon",{icon:r,lazy:!1}),o&&n("span",{class:"button-text"},o),"md"===this.mode&&n("ion-ripple-effect",null)),"md"===this.mode&&n("ion-ripple-effect",null))},Object.defineProperty(t,"is",{get:function(){return"ion-back-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:String,attr:"mode"},text:{type:String,attr:"text"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-back-button-md-h{--background:transparent;--ripple-color:currentColor;--transition:background-color,opacity 100ms linear;--opacity:1;display:none;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.ion-color.sc-ion-back-button-md-h   .button-native.sc-ion-back-button-md{color:var(--ion-color-base)}.activated.sc-ion-back-button-md-h   .button-native.sc-ion-back-button-md{opacity:.4}.show-back-button.sc-ion-back-button-md-h, .can-go-back.sc-ion-back-button-md-h > ion-header.sc-ion-back-button-md, .can-go-back > ion-header   .sc-ion-back-button-md-h{display:block}.button-native.sc-ion-back-button-md{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;min-width:var(--min-width);min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner.sc-ion-back-button-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}ion-icon.sc-ion-back-button-md{padding:var(--icon-padding-top) var(--icon-padding-end) var(--icon-padding-bottom) var(--icon-padding-start);margin:var(--icon-margin-top) var(--icon-margin-end) var(--icon-margin-bottom) var(--icon-margin-start);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}.sc-ion-back-button-md-h{--color:currentColor;--margin-top:1px;--margin-end:6px;--margin-bottom:0;--margin-start:0;--padding-top:0;--padding-end:5px;--padding-bottom:0;--padding-start:5px;--min-height:32px;--min-width:44px;--icon-padding-end:.3em;--icon-padding-start:.3em;--icon-margin-top:0;--icon-margin-end:6px;--icon-margin-bottom:0;--icon-margin-start:6px;--icon-font-size:24px;--icon-font-weight:normal;font-size:14px;font-weight:500;text-transform:uppercase}.button-native.sc-ion-back-button-md{-webkit-box-shadow:none;box-shadow:none}ion-icon.sc-ion-back-button-md{line-height:.67;text-align:start}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();t.IonAnchor=r,t.IonBackButton=o,Object.defineProperty(t,"__esModule",{value:!0})});