/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import{h}from"../ionic.core.js";import{h as createColorClasses,k as createThemedClasses}from"./chunk-b9ec67ac.js";var Card=function(){function e(){}return e.prototype.hostData=function(){return{class:createColorClasses(this.color)}},Object.defineProperty(e,"is",{get:function(){return"ion-card"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-card-md-h{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden}.ion-color.sc-ion-card-md-h{background:var(--ion-color-base)}.ion-color.sc-ion-card-md-h, .sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-header , .sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-subtitle , .sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-title {color:var(--ion-color-contrast)}.sc-ion-card-md-s  img {display:block;width:100%}.sc-ion-card-md-s  ion-list {margin:0}.sc-ion-card-md-h{--background:var(--ion-item-background,transparent);--color:var(--ion-text-color-step-450,#737373);margin:10px;border-radius:4px;font-size:14px;-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),CardContent=function(){function e(){}return e.prototype.hostData=function(){return{class:createThemedClasses(this.mode,"card-content")}},Object.defineProperty(e,"is",{get:function(){return"ion-card-content"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-card-content{display:block;position:relative}.card-content-md{padding:13px 16px;font-size:14px;line-height:1.5}.card-content-md h1{margin:0 0 2px;font-size:24px;font-weight:400}.card-content-md h2{margin:2px 0;font-size:16px;font-weight:400}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin:2px 0;font-size:14px;font-weight:400}.card-content-md p{margin:0 0 2px;font-size:14px;font-weight:400;line-height:1.5}ion-card-header+.card-content-md{padding-top:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),CardHeader=function(){function e(){this.translucent=!1}return e.prototype.hostData=function(){return{class:Object.assign({},createColorClasses(this.color),{"card-header-translucent":this.translucent})}},e.prototype.render=function(){return h("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-card-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) ::slotted(ion-card-subtitle),:host(.ion-color) ::slotted(ion-card-title){color:currentColor}:host{padding:16px}::slotted(ion-card-subtitle:not(:first-child)),::slotted(ion-card-title:not(:first-child)){margin-top:8px}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),CardSubtitle=function(){function e(){}return e.prototype.hostData=function(){return{class:createColorClasses(this.color),role:"heading","aria-level":"3"}},e.prototype.render=function(){return h("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-card-subtitle"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color-step-450,#737373);margin:0;padding:0;font-size:14px;font-weight:500}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),CardTitle=function(){function e(){}return e.prototype.hostData=function(){return{class:createColorClasses(this.color),role:"heading","aria-level":"2"}},e.prototype.render=function(){return h("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-card-title"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color-step-150,#262626);margin:0;padding:0;font-size:20px;font-weight:500;line-height:1.2}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();export{Card as IonCard,CardContent as IonCardContent,CardHeader as IonCardHeader,CardSubtitle as IonCardSubtitle,CardTitle as IonCardTitle};