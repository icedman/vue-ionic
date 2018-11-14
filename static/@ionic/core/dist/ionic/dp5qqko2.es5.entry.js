/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(c,a)}s((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,i,o,r,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,i=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){c.label=r[1];break}if(6===r[0]&&c.label<o[1]){c.label=o[1],o=r;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(r);break}o[2]&&c.ops.pop(),c.trys.pop();continue}r=t.call(e,c)}catch(e){r=[6,e],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}};Ionic.loadBundle("dp5qqko2",["require","exports","./chunk-dd673b2a.js","./chunk-b34e377b.js"],function(e,t,n,i){var o=window.Ionic.h,r=function(){function t(){var e=this;this.inputId="ion-tg-"+a++,this.pivotX=0,this.activated=!1,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onChange=function(){e.checked=!e.checked},this.onKeyUp=function(){e.keyFocus=!0},this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.keyFocus=!1,e.ionBlur.emit()}}return t.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value})},t.prototype.disabledChanged=function(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t,n,i,o=this;return __generator(this,function(r){switch(r.label){case 0:return(t=this.nativeInput.closest("ion-item"))&&(n=t.querySelector("ion-label"))&&(n.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",n.id)),i=this,[4,new Promise(function(t,n){e(["./gesture.js"],t,n)})];case 1:return i.gesture=r.sent().createGesture({el:this.el,queue:this.queue,gestureName:"toggle",gesturePriority:100,threshold:0,onStart:function(e){return o.onStart(e)},onMove:function(e){return o.onMove(e)},onEnd:function(e){return o.onEnd(e)}}),this.disabledChanged(),[2]}})})},t.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},t.prototype.onStart=function(e){return this.pivotX=e.currentX,this.activated=!0,e.event.preventDefault(),!0},t.prototype.onMove=function(e){var t=e.currentX;c(this.checked,t-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=t,n.hapticSelection())},t.prototype.onEnd=function(e){c(this.checked,e.currentX-this.pivotX,4)&&(this.checked=!this.checked,n.hapticSelection()),this.activated=!1,this.nativeInput.focus()},t.prototype.getValue=function(){return this.value||""},t.prototype.hostData=function(){return{class:Object.assign({},n.createColorClasses(this.color),{"in-item":n.hostContext("ion-item",this.el),"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus,interactive:!0})}},t.prototype.render=function(){var e=this,t=this.getValue();return i.renderHiddenInput(this.el,this.name,this.checked?t:"",this.disabled),[o("div",{class:"toggle-icon"},o("div",{class:"toggle-inner"})),o("input",{type:"checkbox",onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,onKeyUp:this.onKeyUp,checked:this.checked,id:this.inputId,name:this.name,value:t,disabled:this.disabled,ref:function(t){return e.nativeInput=t}}),o("slot",null)]},Object.defineProperty(t,"is",{get:function(){return"ion-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},queue:{context:"queue"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.toggle-key) input{border:2px solid #5e9ed6}:host(:focus){outline:none}:host(.toggle-disabled),input{pointer-events:none}input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host{--background:var(--ion-item-background,var(--ion-background-color,#fff));--background-checked:var(--ion-color-primary,#3880ff);--handle-background:var(--ion-item-background,var(--ion-background-color,#fff));--handle-background-checked:var(--ion-item-background,var(--ion-background-color,#fff));-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-contrast)}.toggle-icon{border-radius:16px;display:block;position:relative;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:background-color .3s;transition:background-color .3s;background-color:var(--ion-background-color-step-50,#f2f2f2);overflow:hidden;pointer-events:none}.toggle-icon:before{right:2px;bottom:2px;border-radius:16px;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;background:var(--background);content:\"\"}.toggle-icon:before,.toggle-inner{left:2px;top:2px;position:absolute}.toggle-inner{border-radius:14px;width:28px;height:28px;-webkit-transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;background:var(--handle-background);-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);will-change:transform;contain:strict}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-activated) .toggle-icon:before,:host(.toggle-checked) .toggle-icon:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0);background:var(--handle-background-checked)}:host(.toggle-activated.toggle-checked) .toggle-inner:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-activated) .toggle-inner{width:34px}:host(.toggle-activated.toggle-checked) .toggle-inner{left:-4px}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin:0;padding:6px 8px 5px 16px}:host(.in-item[slot=start]){padding:6px 16px 5px 0}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();function c(e,t,n){var i="rtl"===document.dir;return e?!i&&n>t||i&&-n<t:!i&&-n<t||i&&n>t}var a=0;t.IonToggle=r,Object.defineProperty(t,"__esModule",{value:!0})});