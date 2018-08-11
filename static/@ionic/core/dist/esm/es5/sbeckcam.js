/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import{h}from"./ionic.core.js";import{e as BACKDROP,f as dismiss,g as eventMethod,h as isCancel,i as present}from"./chunk-13543983.js";import{a as createColorClasses,e as getClassMap}from"./chunk-f7b6af08.js";function iosEnterAnimation(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;r.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.01,.4),r.fromTo("translateY","100%","0%");var i=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(o).add(r);return Promise.resolve(i)}function iosLeaveAnimation(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;r.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.4,0),r.fromTo("translateY","0%","100%");var i=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(o).add(r);return Promise.resolve(i)}function mdEnterAnimation(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;r.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.01,.26),r.fromTo("translateY","100%","0%");var i=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(o).add(r);return Promise.resolve(i)}function mdLeaveAnimation(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;r.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.26,0),r.fromTo("translateY","0%","100%");var i=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(o).add(r);return Promise.resolve(i)}var ActionSheet=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.enableBackdropDismiss=!0,this.translucent=!1,this.willAnimate=!0}return e.prototype.componentDidLoad=function(){this.ionActionSheetDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionActionSheetDidUnload.emit()},e.prototype.onBackdropTap=function(){this.dismiss(null,BACKDROP)},e.prototype.dispatchCancelHandler=function(e){var t=e.detail.role;if(isCancel(t)){var n=this.buttons.find(function(e){return"cancel"===e.role});this.callButtonHandler(n)}},e.prototype.present=function(){return present(this,"actionSheetEnter",iosEnterAnimation,mdEnterAnimation)},e.prototype.dismiss=function(e,t){return dismiss(this,e,t,"actionSheetLeave",iosLeaveAnimation,mdLeaveAnimation)},e.prototype.onDidDismiss=function(e){return eventMethod(this.el,"ionActionSheetDidDismiss",e)},e.prototype.onWillDismiss=function(e){return eventMethod(this.el,"ionActionSheetWillDismiss",e)},e.prototype.buttonClick=function(e){var t=e.role;isCancel(t)?this.dismiss(void 0,t):this.callButtonHandler(e)&&this.dismiss(void 0,e.role)},e.prototype.callButtonHandler=function(e){if(e&&e.handler)try{if(!1===e.handler())return!1}catch(e){console.error(e)}return!0},e.prototype.hostData=function(){return{style:{zIndex:2e4+this.overlayId},class:Object.assign({},createColorClasses(this.color),getClassMap(this.cssClass),{"action-sheet-translucent":this.translucent})}},e.prototype.render=function(){var e=this,t=this.buttons.map(function(e){return"string"==typeof e?{text:e}:e}),n=t.find(function(e){return"cancel"===e.role}),o=t.filter(function(e){return"cancel"!==e.role});return[h("ion-backdrop",{tappable:this.enableBackdropDismiss}),h("div",{class:"action-sheet-wrapper",role:"dialog"},h("div",{class:"action-sheet-container"},h("div",{class:"action-sheet-group"},this.header&&h("div",{class:"action-sheet-title"},this.header,this.subHeader&&h("div",{class:"action-sheet-sub-title"},this.subHeader)),o.map(function(t){return h("button",{class:buttonClass(t),onClick:function(){return e.buttonClick(t)}},h("span",{class:"action-sheet-button-inner"},t.icon&&h("ion-icon",{icon:t.icon,lazy:!1,class:"action-sheet-icon"}),t.text))})),n&&h("div",{class:"action-sheet-group action-sheet-group-cancel"},h("button",{class:buttonClass(n),onClick:function(){return e.buttonClick(n)}},h("span",{class:"action-sheet-button-inner"},n.icon&&h("ion-icon",{icon:n.icon,lazy:!1,class:"action-sheet-icon"}),n.text)))))]},Object.defineProperty(e,"is",{get:function(){return"ion-action-sheet"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animationCtrl:{connect:"ion-animation-controller"},buttons:{type:"Any",attr:"buttons"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayId:{type:Number,attr:"overlay-id"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionActionSheetDidLoad",method:"ionActionSheetDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidUnload",method:"ionActionSheetDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionActionSheetWillDismiss",method:"dispatchCancelHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--width:100%;--max-width:500px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;-ms-touch-action:none;touch-action:none;z-index:1000}.action-sheet-wrapper{left:0;right:0;top:0;bottom:0;margin:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);max-width:var(--max-width);z-index:10;pointer-events:none;margin:env(safe-area-inset-top) auto env(safe-area-inset-bottom)}.action-sheet-button{width:var(--width);border:0;outline:0;font-family:inherit}.action-sheet-button-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%;padding:0 10px}.action-sheet-group{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:scroll;-webkit-overflow-scrolling:touch;pointer-events:all;border-radius:13px;margin-bottom:8px;background:var(--ion-overlay-background-color,#f9f9f9)}.action-sheet-group::-webkit-scrollbar{display:none}.action-sheet-group-cancel{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}:host{font-family:var(--ion-font-family,inherit);text-align:center}.action-sheet-group:first-child{margin-top:10px}.action-sheet-group:last-child{margin-bottom:10px}:host(.action-sheet-translucent) .action-sheet-group{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.action-sheet-title{padding:14px 14px 13px;border-bottom:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);color:var(--ion-text-color-step-600,#999);font-size:13px;font-weight:400;text-align:center}.action-sheet-sub-title{padding:15px 0 0;font-size:12px}.action-sheet-button{margin:0;padding:18px;height:56px;border-bottom:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);background:0 0;color:var(--ion-color-primary,#3880ff);font-size:20px;contain:strict}.action-sheet-button .action-sheet-icon{margin-right:.1em;font-size:28px}.action-sheet-button:last-child{border-bottom-color:transparent}.action-sheet-button.activated{margin-top:-.55px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.1);border-bottom-color:rgba(var(--ion-text-color-rgb,0,0,0),.1);background:rgba(var(--ion-text-color-rgb,0,0,0),.1)}.action-sheet-selected{background:var(--ion-background-color,#fff);font-weight:700}.action-sheet-destructive{color:var(--ion-color-danger,#f04141)}.action-sheet-cancel{background:var(--ion-background-color,#fff);font-weight:600}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();function buttonClass(e){var t;return Object.assign(((t={"action-sheet-button":!0})["action-sheet-"+e.role]=!!e.role,t),getClassMap(e.cssClass))}function iosEnterAnimation$1(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;r.addElement(t.querySelector(".alert-wrapper")),o.fromTo("opacity",.01,.3),r.fromTo("opacity",.01,1).fromTo("scale",1.1,1);var i=n.addElement(t).easing("ease-in-out").duration(200).add(o).add(r);return Promise.resolve(i)}function iosLeaveAnimation$1(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;r.addElement(t.querySelector(".alert-wrapper")),o.fromTo("opacity",.3,0),r.fromTo("opacity",.99,0).fromTo("scale",1,.9);var i=n.addElement(t).easing("ease-in-out").duration(200).add(o).add(r);return Promise.resolve(i)}function mdEnterAnimation$1(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".alert-wrapper")),o.fromTo("opacity",.01,.5),r.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(n.addElement(t).easing("ease-in-out").duration(200).add(o).add(r))}function mdLeaveAnimation$1(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".alert-wrapper")),o.fromTo("opacity",.5,0),r.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(n.addElement(t).easing("ease-in-out").duration(200).add(o).add(r))}var Alert=function(){function e(){this.processedInputs=[],this.processedButtons=[],this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.inputs=[],this.enableBackdropDismiss=!0,this.translucent=!1,this.willAnimate=!0}return e.prototype.buttonsChanged=function(){var e=this.buttons;this.processedButtons=e.map(function(e){return"string"==typeof e?{text:e,role:"cancel"===e.toLowerCase()?"cancel":void 0}:e}).filter(function(e){return null!=e})},e.prototype.inputsChanged=function(){var e=this,t=this.inputs,n=new Set(t.map(function(e){return e.type}));(n.has("checkbox")||n.has("radio"))&&console.warn("Alert cannot mix input types: "+Array.from(n.values()).join("/")+". Please see alert docs for more info."),this.inputType=n.values().next().value,this.processedInputs=t.map(function(t,n){return{type:t.type||"text",name:t.name?t.name:n+"",placeholder:t.placeholder?t.placeholder:"",value:t.value?t.value:"",label:t.label,checked:!!t.checked,disabled:!!t.disabled,id:t.id?t.id:"alert-input-"+e.overlayId+"-"+n,handler:t.handler,min:t.min,max:t.max}})},e.prototype.componentWillLoad=function(){this.inputsChanged(),this.buttonsChanged()},e.prototype.componentDidLoad=function(){this.ionAlertDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionAlertDidUnload.emit()},e.prototype.onBackdropTap=function(){this.dismiss(null,BACKDROP)},e.prototype.dispatchCancelHandler=function(e){var t=e.detail.role;if(isCancel(t)){var n=this.processedButtons.find(function(e){return"cancel"===e.role});this.callButtonHandler(n)}},e.prototype.present=function(){return present(this,"alertEnter",iosEnterAnimation$1,mdEnterAnimation$1)},e.prototype.dismiss=function(e,t){return dismiss(this,e,t,"alertLeave",iosLeaveAnimation$1,mdLeaveAnimation$1)},e.prototype.onDidDismiss=function(e){return eventMethod(this.el,"ionAlertDidDismiss",e)},e.prototype.onWillDismiss=function(e){return eventMethod(this.el,"ionAlertWillDismiss",e)},e.prototype.rbClick=function(e){for(var t=0,n=this.processedInputs;t<n.length;t++){var o=n[t];o.checked=o===e}this.activeId=e.id,e.handler&&e.handler(e),this.el.forceUpdate()},e.prototype.cbClick=function(e){e.checked=!e.checked,e.handler&&e.handler(e),this.el.forceUpdate()},e.prototype.buttonClick=function(e){var t=e.role,n=this.getValues();if(isCancel(t))this.dismiss({values:n},t);else{var o=this.callButtonHandler(e,n);!1!==o&&this.dismiss(Object.assign({values:n},o),e.role)}},e.prototype.callButtonHandler=function(e,t){if(e&&e.handler){var n=e.handler(t);if(!1===n)return!1;if("object"==typeof n)return n}return{}},e.prototype.getValues=function(){if(0!==this.processedInputs.length){if("radio"===this.inputType){var e=this.processedInputs.find(function(e){return!0===e.checked});return e?e.value:void 0}if("checkbox"===this.inputType)return this.processedInputs.filter(function(e){return e.checked}).map(function(e){return e.value});var t={};return this.processedInputs.forEach(function(e){t[e.name]=e.value||""}),t}},e.prototype.renderAlertInputs=function(e){switch(this.inputType){case"checkbox":return this.renderCheckbox(e);case"radio":return this.renderRadio(e);default:return this.renderInput(e)}},e.prototype.renderCheckbox=function(e){var t=this,n=this.processedInputs;return 0===n.length?null:h("div",{class:"alert-checkbox-group","aria-labelledby":e},n.map(function(e){return h("button",{onClick:function(){return t.cbClick(e)},"aria-checked":e.checked?"true":null,id:e.id,disabled:e.disabled,tabIndex:0,role:"checkbox",class:"alert-tappable alert-checkbox alert-checkbox-button"},h("div",{class:"alert-button-inner"},h("div",{class:"alert-checkbox-icon"},h("div",{class:"alert-checkbox-inner"})),h("div",{class:"alert-checkbox-label"},e.label)),"md"===t.mode&&h("ion-ripple-effect",{tapClick:!0}))}))},e.prototype.renderRadio=function(e){var t=this,n=this.processedInputs;return 0===n.length?null:h("div",{class:"alert-radio-group",role:"radiogroup","aria-labelledby":e,"aria-activedescendant":this.activeId},n.map(function(e){return h("button",{onClick:function(){return t.rbClick(e)},"aria-checked":e.checked?"true":null,disabled:e.disabled,id:e.id,tabIndex:0,class:"alert-radio-button alert-tappable alert-radio",role:"radio"},h("div",{class:"alert-button-inner"},h("div",{class:"alert-radio-icon"},h("div",{class:"alert-radio-inner"})),h("div",{class:"alert-radio-label"},e.label)),"md"===t.mode&&h("ion-ripple-effect",{tapClick:!0}))}))},e.prototype.renderInput=function(e){var t=this.processedInputs;return 0===t.length?null:h("div",{class:"alert-input-group","aria-labelledby":e},t.map(function(e){return h("div",{class:"alert-input-wrapper"},h("input",{placeholder:e.placeholder,value:e.value,type:e.type,min:e.min,max:e.max,onInput:function(t){return e.value=t.target.value},id:e.id,disabled:e.disabled,tabIndex:0,class:"alert-input"}))}))},e.prototype.hostData=function(){return{role:"alertdialog",style:{zIndex:2e4+this.overlayId},class:Object.assign({},createColorClasses(this.color),getClassMap(this.cssClass),{"alert-translucent":this.translucent})}},e.prototype.renderAlertButtons=function(){var e=this,t=this.processedButtons,n={"alert-button-group":!0,"alert-button-group-vertical":t.length>2};return h("div",{class:n},t.map(function(t){return h("button",{class:buttonClass$1(t),tabIndex:0,onClick:function(){return e.buttonClick(t)}},h("span",{class:"alert-button-inner"},t.text))}))},e.prototype.render=function(){var e,t="alert-"+this.overlayId+"-hdr",n="alert-"+this.overlayId+"-sub-hdr",o="alert-"+this.overlayId+"-msg";return this.header?e=t:this.subHeader&&(e=n),[h("ion-backdrop",{tappable:this.enableBackdropDismiss}),h("div",{class:"alert-wrapper"},h("div",{class:"alert-head"},this.header&&h("h2",{id:t,class:"alert-title"},this.header),this.subHeader&&h("h2",{id:n,class:"alert-sub-title"},this.subHeader)),h("div",{id:o,class:"alert-message",innerHTML:this.message}),this.renderAlertInputs(e),this.renderAlertButtons())]},Object.defineProperty(e,"is",{get:function(){return"ion-alert"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animationCtrl:{connect:"ion-animation-controller"},buttons:{type:"Any",attr:"buttons",watchCallbacks:["buttonsChanged"]},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},inputs:{type:"Any",attr:"inputs",mutable:!0,watchCallbacks:["inputsChanged"]},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayId:{type:Number,attr:"overlay-id"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionAlertDidLoad",method:"ionAlertDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidUnload",method:"ionAlertDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionAlertWillDismiss",method:"dispatchCancelHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--min-width:250px;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;contain:strict;-ms-touch-action:none;touch-action:none;z-index:1000}:host(.alert-top){padding-top:50px;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.alert-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:var(--min-width);max-width:var(--max-width);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title{margin:0;padding:0}.alert-sub-title{margin:5px 0 0;padding:0;font-weight:400}.alert-message{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:scroll;overscroll-behavior-y:contain;max-height:240px}.alert-message::-webkit-scrollbar{display:none}.alert-input{width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button{display:block;border:0;line-height:20px;z-index:0}.alert-button-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-tappable{margin:0;padding:0;width:100%;border:0;background:0 0;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-webkit-box;display:-ms-flexbox;display:flex;height:44px;contain:strict}.alert-button:active,.alert-button:focus,.alert-checkbox:active,.alert-checkbox:focus,.alert-input:active,.alert-input:focus,.alert-radio:active,.alert-radio:focus{outline:0}.alert-checkbox-icon,.alert-checkbox-inner,.alert-radio-icon{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--background:var(--ion-overlay-background-color, #f9f9f9);--max-width:270px;font-family:var(--ion-font-family,inherit);font-size:14px}.alert-wrapper{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}:host(.alert-translucent) .alert-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.alert-head{padding:12px 16px 7px;text-align:center}.alert-title{margin-top:8px;color:var(--ion-text-color,#000);font-size:17px;font-weight:600}.alert-sub-title{color:var(--ion-text-color-step-400,#666);font-size:14px}.alert-input-group,.alert-message{padding:0 16px 21px;color:var(--ion-text-color,#000);font-size:13px;text-align:center}.alert-message:empty{padding:0 0 12px}.alert-input{border-radius:4px;margin-top:10px;padding:6px;border:.55px solid var(--ion-background-color-step-250,#bfbfbf);background-color:var(--ion-background-color,#fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}.alert-input::-webkit-input-placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input:-ms-input-placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input::-ms-input-placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input::placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-checkbox-group,.alert-radio-group{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);overflow-y:scroll;-webkit-overflow-scrolling:touch}.alert-radio-label{padding:13px;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[aria-checked=true] .alert-radio-label{color:var(--ion-color-primary,#3880ff)}.alert-radio-icon{position:relative;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true] .alert-radio-inner{left:7px;top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0 2px 2px 0;border-style:solid;border-color:var(--ion-color-primary,#3880ff)}.alert-checkbox-label{padding:13px;-webkit-box-flex:1;-ms-flex:1;flex:1;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.alert-checkbox-icon{border-radius:50%;margin:10px 6px 10px 16px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color,#c8c7cc);background-color:var(--ion-item-background-color,var(--ion-background-color,#fff));contain:strict}[aria-checked=true] .alert-checkbox-icon{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true] .alert-checkbox-inner{left:9px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0 1px 1px 0;border-style:solid;border-color:var(--ion-background-color,#fff)}.alert-button-group{margin-right:-.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}.alert-button{margin:0;border-radius:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);background-color:transparent;color:var(--ion-color-primary,#3880ff);font-size:17px;overflow:hidden}.alert-button:last-child{border-right:0;font-weight:700}.alert-button.activated{background-color:rgba(var(--ion-text-color-rgb,0,0,0),.1)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();function buttonClass$1(e){return Object.assign({"alert-button":!0},getClassMap(e.cssClass))}var Buttons=function(){function e(){}return Object.defineProperty(e,"is",{get:function(){return"ion-buttons"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99;pointer-events:none}::slotted(*) .button{--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--box-shadow:none;pointer-events:auto;--padding-top:0;--pading-bottom:0;--padding-start:5px;--padding-end:5px;--height:32px;font-size:17px;font-weight:400}::slotted(*) .button:not(.button-round){--border-radius:4px}:host-context(.ion-color)::slotted(*) .button{--ion-color-base:currentColor}::slotted(*) ion-icon[slot=start]{margin:0 .3em 0 0;font-size:24px;line-height:.67;pointer-events:none}::slotted(*) ion-icon[slot=end]{margin:0 0 0 .4em;font-size:24px;line-height:.67;pointer-events:none}::slotted(*) ion-icon[slot=icon-only]{padding:0;margin:0;font-size:31px;line-height:.67;pointer-events:none}::slotted(*) .button.button-clear{--height:35px}::slotted(*) .button.button-solid-ios:hover{opacity:.4}:host([slot=start]){-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}:host([slot=secondary]){-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}:host([slot=primary]){-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5;text-align:end}:host([slot=end]){-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6;text-align:end}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),Card=function(){function e(){}return e.prototype.hostData=function(){return{class:createColorClasses(this.color)}},Object.defineProperty(e,"is",{get:function(){return"ion-card"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--ion-color-base);color:var(--ion-color-contrast);overflow:hidden;--ion-color-base:var(--ion-item-background, transparent);--ion-color-contrast:var(--ion-text-color-step-400, #666666);margin:30px 20px;border-radius:8px;width:calc(100% - 40px);-webkit-transform:translateZ(0);transform:translateZ(0);font-family:var(--ion-font-family,inherit);font-size:14px;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.12);box-shadow:0 4px 16px rgba(0,0,0,.12)}:host(.ion-color)::slotted(*) ion-card-subtitle,:host(.ion-color)::slotted(*) ion-card-title{color:currentColor}::slotted(*) img{display:block;width:100%}::slotted(*) ion-list{margin-bottom:0}::slotted(*) .item{--border-width:0;--inner-border-width:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),Chip=function(){function e(){}return e.prototype.hostData=function(){return{class:createColorClasses(this.color)}},Object.defineProperty(e,"is",{get:function(){return"ion-chip"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-contrast:var(--ion-color-primary-contrast, #fff);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-item-align:center;align-self:center;background-color:var(--ion-color-base);color:var(--ion-color-contrast);font-weight:400;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;--ion-color-base:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--ion-color-contrast:var(--ion-text-color-step-150, #262626);border-radius:16px;margin:2px 0;height:32px;font-family:var(--ion-font-family,inherit);font-size:13px}::slotted(*) ion-label{margin:0 10px}::slotted(ion-icon){background-color:var(--ion-color-primary,#3880ff);color:var(--ion-color-primary-contrast,#fff)}::slotted(*) ion-avatar{width:32px;height:32px}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),Label=function(){function e(){}return e.prototype.getText=function(){return this.el.textContent||""},e.prototype.componentDidLoad=function(){this.positionChanged()},e.prototype.positionChanged=function(){var e,t=this.position;this.ionStyle.emit(((e={label:!0})["label-"+t]=!!t,e))},e.prototype.hostData=function(){var e,t=this.position;return{class:Object.assign({},createColorClasses(this.color),(e={},e["label-"+t]=!!t,e))}},Object.defineProperty(e,"is",{get:function(){return"ion-label"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0},getText:{method:!0},mode:{type:String,attr:"mode"},position:{type:String,attr:"position",watchCallbacks:["positionChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host([text-wrap]){white-space:normal;font-size:14px;line-height:1.5}:host-context(.item-interactive-disabled){cursor:default;opacity:.3;pointer-events:none}:host-context(.item-input){-webkit-box-flex:initial;-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}:host(.label-fixed){-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.label-floating),:host(.label-stacked){margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}:host-context(.item-has-focus).label-floating,:host-context(.item-has-value).label-floating{-webkit-transform:translate3d(0,0,0) scale(.8);transform:translate3d(0,0,0) scale(.8)}:host{margin:10px 8px 10px 0;font-family:var(--ion-font-family,inherit)}:host(.label-stacked){margin-bottom:4px;font-size:12px}:host(.label-floating){margin-bottom:0;-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out,-webkit-transform 150ms ease-in-out}::slotted(*) h1{margin:0 0 2px;font-size:24px;font-weight:400}::slotted(*) h2{margin:0 0 2px;font-size:17px;font-weight:400}::slotted(*) h3,::slotted(*) h4,::slotted(*) h5,::slotted(*) h6{margin:0 0 3px;font-size:14px;font-weight:400;line-height:normal}::slotted(*) p{margin:0 0 2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}::slotted(p){color:var(--ion-text-color-step-600,#999)}:host-context(.ion-color)::slotted(p){color:inherit}::slotted(*) h2:last-child,::slotted(*) h3:last-child,::slotted(*) h4:last-child,::slotted(*) h5:last-child,::slotted(*) h6:last-child,::slotted(*) p:last-child{margin-bottom:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();export{ActionSheet as IonActionSheet,Alert as IonAlert,Buttons as IonButtons,Card as IonCard,Chip as IonChip,Label as IonLabel};