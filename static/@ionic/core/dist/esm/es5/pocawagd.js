/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import{h}from"./ionic.core.js";import{a as createColorClasses,b as createThemedClasses}from"./chunk-f7b6af08.js";var Avatar=function(){function e(){}return e.prototype.render=function(){return h("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-avatar"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:block;border-radius:50%;width:48px;height:48px}::slotted(img),::slotted(ion-img){width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:50%;overflow:hidden}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),Badge=function(){function e(){}return e.prototype.hostData=function(){return{class:createColorClasses(this.color)}},e.prototype.render=function(){return h("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-badge"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-contrast:var(--ion-color-primary-contrast, #fff);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding:3px 8px;display:inline-block;min-width:10px;background-color:var(--ion-color-base);color:var(--ion-color-contrast);font-size:13px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline;border-radius:10px;font-family:var(--ion-font-family,inherit)}:host(:empty){display:none}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),Thumbnail=function(){function e(){}return e.prototype.hostData=function(){return{class:createThemedClasses(this.mode,"thumbnail")}},e.prototype.render=function(){return h("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-thumbnail"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:block;border-radius:0;width:48px;height:48px}::slotted(img),::slotted(ion-img){width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:0;overflow:hidden}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();export{Avatar as IonAvatar,Badge as IonBadge,Thumbnail as IonThumbnail};