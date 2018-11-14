/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../ionic.core.js";import{d as renderHiddenInput}from"./chunk-c23403d0.js";import{j as hostContext}from"./chunk-b9ec67ac.js";var Select=function(){function e(){var e=this;this.childOpts=[],this.inputId="ion-sel-"+selectIds++,this.isExpanded=!1,this.keyFocus=!1,this.text="",this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onKeyUp=function(){e.keyFocus=!0},this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.keyFocus=!1,e.ionBlur.emit()}}return e.prototype.disabledChanged=function(){this.emitStyle()},e.prototype.valueChanged=function(){var e=this;if(void 0===this.value)this.childOpts.filter(function(e){return e.selected}).forEach(function(e){e.selected=!1}),this.text="";else{var t=!1,n=[];this.childOpts.forEach(function(i){Array.isArray(e.value)&&e.value.includes(i.value)||i.value===e.value?(i.selected||!e.multiple&&t?!e.multiple&&t&&i.selected&&(i.selected=!1):i.selected=!0,t=!0):i.selected&&(i.selected=!1),i.selected&&n.push(i.textContent||"")}),this.text=n.join(", ")}this.ionChange.emit({value:this.value,text:this.text}),this.emitStyle()},e.prototype.optLoad=function(e){var t=e.target;this.childOpts=Array.from(this.el.querySelectorAll("ion-select-option")),null!=this.value&&Array.isArray(this.value)&&this.value.includes(t.value)||t.value===this.value?t.selected=!0:Array.isArray(this.value)&&this.multiple&&t.selected?this.value.push(t.value):void 0===this.value&&t.selected?this.value=t.value:t.selected&&(t.selected=!1)},e.prototype.optUnload=function(e){var t=this.childOpts.indexOf(e.target);t>-1&&this.childOpts.splice(t,1)},e.prototype.onSelect=function(e){var t=this;this.childOpts.forEach(function(n){n===e.target?t.value=n.value:n.selected=!1})},e.prototype.componentWillLoad=function(){this.value||(this.value=this.multiple?[]:void 0)},e.prototype.componentDidLoad=function(){var e=this,t=this.getLabel();if(t&&(this.labelId=t.id=this.name+"-lbl"),this.multiple){var n=this.childOpts.filter(function(e){return e.selected});this.value.length=0,n.forEach(function(t){e.value.push(t.value)}),this.text=n.map(function(e){return e.textContent}).join(", ")}else(n=this.childOpts.find(function(e){return e.selected}))&&(this.value=n.value,this.text=n.textContent||"");this.emitStyle()},e.prototype.open=function(e){var t=this.interface;return"action-sheet"!==t&&"popover"!==t||!this.multiple||(console.warn('Select interface cannot be "'+t+'" with a multi-value select. Using the "alert" interface instead.'),t="alert"),"popover"!==t||e||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),t="alert"),"popover"===t?this.openPopover(e):"action-sheet"===t?this.openActionSheet():this.openAlert()},e.prototype.getLabel=function(){var e=this.el.closest("ion-item");return e?e.querySelector("ion-label"):null},e.prototype.openPopover=function(e){return tslib_1.__awaiter(this,void 0,void 0,function(){var t,n,i,o,l=this;return tslib_1.__generator(this,function(s){switch(s.label){case 0:return t=this.interfaceOptions,n=Object.assign({},t,{component:"ion-select-popover",cssClass:["select-popover",t.cssClass],event:e,componentProps:{header:t.header,subHeader:t.subHeader,message:t.message,value:this.value,options:this.childOpts.map(function(e){return{text:e.textContent,value:e.value,checked:e.selected,disabled:e.disabled,handler:function(){l.value=e.value,l.close()}}})}}),o=this,[4,this.popoverCtrl.create(n)];case 1:return[4,(i=o.overlay=s.sent()).present()];case 2:return s.sent(),this.isExpanded=!0,[2,i]}})})},e.prototype.openActionSheet=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e,t,n,i,o,l=this;return tslib_1.__generator(this,function(s){switch(s.label){case 0:return(e=this.childOpts.map(function(e){return{role:e.selected?"selected":"",text:e.textContent,handler:function(){l.value=e.value}}})).push({text:this.cancelText,role:"cancel",handler:function(){l.ionCancel.emit()}}),t=this.interfaceOptions,n=Object.assign({},t,{buttons:e,cssClass:["select-action-sheet",t.cssClass]}),o=this,[4,this.actionSheetCtrl.create(n)];case 1:return[4,(i=o.overlay=s.sent()).present()];case 2:return s.sent(),this.isExpanded=!0,[2,i]}})})},e.prototype.openAlert=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e,t,n,i,o,l,s,r=this;return tslib_1.__generator(this,function(a){switch(a.label){case 0:return e=this.getLabel(),t=e?e.textContent:null,n=this.interfaceOptions,i=this.multiple?"checkbox":"radio",o=Object.assign({},n,{header:n.header?n.header:t,inputs:this.childOpts.map(function(e){return{type:i,label:e.textContent,value:e.value,checked:e.selected,disabled:e.disabled}}),buttons:[{text:this.cancelText,role:"cancel",handler:function(){r.ionCancel.emit()}},{text:this.okText,handler:function(e){r.value=e}}],cssClass:["select-alert",n.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]}),s=this,[4,this.alertCtrl.create(o)];case 1:return[4,(l=s.overlay=a.sent()).present()];case 2:return a.sent(),this.isExpanded=!0,[2,l]}})})},e.prototype.close=function(){if(!this.overlay)return Promise.resolve(!1);var e=this.overlay;return this.overlay=void 0,this.isExpanded=!1,e.dismiss()},e.prototype.hasValue=function(){return Array.isArray(this.value)?this.value.length>0:null!=this.value&&void 0!==this.value&&""!==this.value},e.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,select:!0,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})},e.prototype.hostData=function(){return{class:{"in-item":hostContext("ion-item",this.el),"select-disabled":this.disabled,"select-key":this.keyFocus}}},e.prototype.render=function(){renderHiddenInput(this.el,this.name,parseValue(this.value),this.disabled);var e=!1,t=this.selectedText||this.text;return""===t&&null!=this.placeholder&&(t=this.placeholder,e=!0),[h("div",{role:"textbox","aria-multiline":"false",class:{"select-text":!0,"select-placeholder":e}},t),h("div",{class:"select-icon",role:"presentation"},h("div",{class:"select-icon-inner"})),h("button",{type:"button",role:"combobox","aria-haspopup":"dialog","aria-labelledby":this.labelId,"aria-expanded":this.isExpanded?"true":null,"aria-disabled":this.disabled?"true":null,onClick:this.open.bind(this),onKeyUp:this.onKeyUp,onFocus:this.onFocus,onBlur:this.onBlur,class:"select-cover"},h("slot",null),"md"===this.mode&&h("ion-ripple-effect",null))]},Object.defineProperty(e,"is",{get:function(){return"ion-select"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{actionSheetCtrl:{connect:"ion-action-sheet-controller"},alertCtrl:{connect:"ion-alert-controller"},cancelText:{type:String,attr:"cancel-text"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},interface:{type:String,attr:"interface"},interfaceOptions:{type:"Any",attr:"interface-options"},isExpanded:{state:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},multiple:{type:Boolean,attr:"multiple"},name:{type:String,attr:"name"},okText:{type:String,attr:"ok-text"},open:{method:!0},placeholder:{type:String,attr:"placeholder"},popoverCtrl:{connect:"ion-popover-controller"},selectedText:{type:String,attr:"selected-text"},text:{state:!0},value:{type:"Any",attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionSelectOptionDidLoad",method:"optLoad"},{name:"ionSelectOptionDidUnload",method:"optUnload"},{name:"ionSelect",method:"onSelect"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-ms-flexbox;display:flex;position:relative;color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.select-key) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color)}.select-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:var(--icon-color);pointer-events:none}::slotted(ion-select-option){display:none}button:focus{outline:none}:host{--color:var(--ion-text-color,#000);--icon-color:var(--ion-text-color-step-600,#999);--padding-top:11px;--padding-end:8px;--padding-bottom:11px;--padding-start:16px;--placeholder-color:var(--ion-text-color-step-600,#999)}.select-icon{width:12px;height:19px}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function parseValue(e){if(null!=e)return Array.isArray(e)?e.join(","):e.toString()}var selectIds=0,SelectOption=function(){function e(){this.inputId="ion-selopt-"+selectOptionIds++,this.disabled=!1,this.selected=!1}return e.prototype.componentWillLoad=function(){null==this.value&&(this.value=this.el.textContent||"")},e.prototype.componentDidLoad=function(){this.ionSelectOptionDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionSelectOptionDidUnload.emit()},e.prototype.hostData=function(){return{role:"option",id:this.inputId}},Object.defineProperty(e,"is",{get:function(){return"ion-select-option"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},selected:{type:Boolean,attr:"selected"},value:{type:"Any",attr:"value",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionSelectOptionDidLoad",method:"ionSelectOptionDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionSelectOptionDidUnload",method:"ionSelectOptionDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),e}(),selectOptionIds=0,SelectPopover=function(){function e(){this.options=[]}return e.prototype.onSelect=function(e){var t=this.options.find(function(t){return t.value===e.target.value});t&&t.handler&&t.handler()},e.prototype.render=function(){return h("ion-list",null,void 0!==this.header&&h("ion-list-header",null,this.header),(void 0!==this.subHeader||void 0!==this.message)&&h("ion-item",null,h("ion-label",{"text-wrap":!0},void 0!==this.subHeader&&h("h3",null,this.subHeader),void 0!==this.message&&h("p",null,this.message))),h("ion-radio-group",null,this.options.map(function(e){return h("ion-item",null,h("ion-label",null,e.text),h("ion-radio",{checked:e.checked,value:e.value,disabled:e.disabled}))})))},Object.defineProperty(e,"is",{get:function(){return"ion-select-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{header:{type:String,attr:"header"},message:{type:String,attr:"message"},options:{type:"Any",attr:"options"},subHeader:{type:String,attr:"sub-header"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionSelect",method:"onSelect"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-select-popover-h   ion-list.sc-ion-select-popover{margin:-1px 0}.sc-ion-select-popover-h   ion-label.sc-ion-select-popover, .sc-ion-select-popover-h   ion-list-header.sc-ion-select-popover{margin:0}"},enumerable:!0,configurable:!0}),e}();export{Select as IonSelect,SelectOption as IonSelectOption,SelectPopover as IonSelectPopover};