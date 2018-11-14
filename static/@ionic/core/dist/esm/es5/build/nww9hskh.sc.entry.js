/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../ionic.core.js";import{b as dismiss,c as eventMethod,e as present,f as createOverlay,g as dismissOverlay,h as getOverlay}from"./chunk-2994e275.js";import{h as createColorClasses,g as getClassMap}from"./chunk-b9ec67ac.js";function iosEnterAnimation(t,e,o){var n=new t,i=new t,a=e.querySelector(".toast-wrapper");switch(i.addElement(a),o){case"top":i.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":var s=Math.floor(e.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(i))}function iosLeaveAnimation(t,e,o){var n=new t,i=new t,a=e.querySelector(".toast-wrapper");switch(i.addElement(a),o){case"top":i.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}function mdEnterAnimation(t,e,o){var n=new t,i=new t,a=e.querySelector(".toast-wrapper");switch(i.addElement(a),o){case"top":i.fromTo("translateY","-100%","0%");break;case"middle":var s=Math.floor(e.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%","0%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(i))}function mdLeaveAnimation(t,e,o){var n=new t,i=new t,a=e.querySelector(".toast-wrapper");switch(i.addElement(a),o){case"top":i.fromTo("translateY","0px","-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY","0px","100%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}var Toast=function(){function t(){this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0}return t.prototype.componentDidLoad=function(){this.ionToastDidLoad.emit()},t.prototype.componentDidUnload=function(){this.ionToastDidUnload.emit()},t.prototype.present=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var t=this;return tslib_1.__generator(this,function(e){switch(e.label){case 0:return[4,present(this,"toastEnter",iosEnterAnimation,mdEnterAnimation,this.position)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss(void 0,"timeout")},this.duration)),[2]}})})},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),dismiss(this,t,e,"toastLeave",iosLeaveAnimation,mdLeaveAnimation,this.position)},t.prototype.onDidDismiss=function(){return eventMethod(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return eventMethod(this.el,"ionToastWillDismiss")},t.prototype.hostData=function(){return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign({},createColorClasses(this.color),getClassMap(this.cssClass),{"toast-translucent":this.translucent})}},t.prototype.render=function(){var t,e=this,o=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return h("div",{class:o},h("div",{class:"toast-container"},void 0!==this.message&&h("div",{class:"toast-message"},this.message),this.showCloseButton&&h("ion-button",{fill:"clear","ion-activatable":!0,class:"toast-button",onClick:function(){return e.dismiss(void 0,"cancel")}},this.closeButtonText||"Close")))},Object.defineProperty(t,"is",{get:function(){return"ion-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},closeButtonText:{type:String,attr:"close-button-text"},color:{type:String,attr:"color"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionToastDidLoad",method:"ionToastDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidUnload",method:"ionToastDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-toast-ios-h{--button-color:inherit;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}.ion-color.sc-ion-toast-ios-h{--color:var(--ion-color-contrast);--background:var(--ion-color-base);--button-color:inherit}.toast-wrapper.sc-ion-toast-ios{background:var(--background)}.toast-wrapper.toast-top.sc-ion-toast-ios{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-bottom.sc-ion-toast-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-container.sc-ion-toast-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button.sc-ion-toast-ios{color:var(--button-color);font-size:15px}.toast-message.sc-ion-toast-ios{-ms-flex:1;flex:1}.sc-ion-toast-ios-h{--background:var(--ion-background-color-step-50,#f2f2f2);--button-color:var(--ion-text-color-step-400,#666);--color:var(--ion-text-color-step-150,#262626);font-size:14px}.toast-wrapper.sc-ion-toast-ios{left:10px;right:10px;margin:auto;border-radius:14px;display:block;position:absolute;max-width:700px;z-index:10}.toast-translucent.sc-ion-toast-ios-h   .toast-wrapper.sc-ion-toast-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.toast-wrapper.toast-middle.sc-ion-toast-ios{opacity:.01}.toast-message.sc-ion-toast-ios{padding:15px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),ToastController=function(){function t(){}return t.prototype.create=function(t){return createOverlay(this.doc.createElement("ion-toast"),t)},t.prototype.dismiss=function(t,e,o){return dismissOverlay(this.doc,t,e,"ion-toast",o)},t.prototype.getTop=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){return[2,getOverlay(this.doc,"ion-toast")]})})},Object.defineProperty(t,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),t}();export{Toast as IonToast,ToastController as IonToastController};