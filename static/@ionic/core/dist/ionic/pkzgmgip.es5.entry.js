/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{u(i.next(e))}catch(e){r(e)}}function s(e){try{u(i.throw(e))}catch(e){r(e)}}function u(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(o,s)}u((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,i,a,r,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,i=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){o=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){o.label=r[1];break}if(6===r[0]&&o.label<a[1]){o.label=a[1],a=r;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(r);break}a[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};Ionic.loadBundle("pkzgmgip",["require","exports","./chunk-b34e377b.js","./chunk-dd673b2a.js"],function(e,t,n,i){var a=window.Ionic.h,r=function(){function t(){this.noUpdate=!1,this.hasFocus=!1,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.disabled=!1,this.value=0}return t.prototype.debounceChanged=function(){this.ionChange=n.debounceEvent(this.ionChange,this.debounce)},t.prototype.minChanged=function(){this.noUpdate||this.updateRatio()},t.prototype.maxChanged=function(){this.noUpdate||this.updateRatio()},t.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled),this.emitStyle()},t.prototype.valueChanged=function(e){this.noUpdate||this.updateRatio(),this.ionChange.emit({value:e})},t.prototype.componentWillLoad=function(){this.updateRatio(),this.debounceChanged(),this.emitStyle()},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t,n=this;return __generator(this,function(i){switch(i.label){case 0:return t=this,[4,new Promise(function(t,n){e(["./gesture.js"],t,n)})];case 1:return t.gesture=i.sent().createGesture({el:this.rangeSlider,queue:this.queue,gestureName:"range",gesturePriority:100,threshold:0,onStart:function(e){return n.onStart(e)},onMove:function(e){return n.onMove(e)},onEnd:function(e){return n.onEnd(e)}}),this.gesture.setDisabled(this.disabled),[2]}})})},t.prototype.keyChng=function(e){var t=this.step;t=t>0?t:1,t/=this.max-this.min,e.detail.isIncrease||(t*=-1),"A"===e.detail.knob?this.ratioA+=t:this.ratioB+=t,this.updateValue()},t.prototype.handleKeyboard=function(e,t){var n=this.step;n=n>0?n:1,n/=this.max-this.min,t||(n*=-1),"A"===e?this.ratioA+=n:this.ratioB+=n,this.updateValue()},t.prototype.getValue=function(){var e=this.value||0;return this.dualKnobs?"object"==typeof e?e:{lower:0,upper:e}:"object"==typeof e?e.upper:e},t.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},t.prototype.fireBlur=function(){this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},t.prototype.fireFocus=function(){this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())},t.prototype.onStart=function(e){this.fireFocus();var t=this.rect=this.rangeSlider.getBoundingClientRect(),i=e.currentX,a=n.clamp(0,(i-t.left)/t.width,1);this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-a)<Math.abs(this.ratioB-a)?"A":"B",this.update(i)},t.prototype.onMove=function(e){this.update(e.currentX)},t.prototype.onEnd=function(e){this.update(e.currentX),this.pressedKnob=void 0,this.fireBlur()},t.prototype.update=function(e){var t=this.rect,i=n.clamp(0,(e-t.left)/t.width,1);this.snaps&&(i=u(s(i,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=i:this.ratioB=i,this.updateValue()},Object.defineProperty(t.prototype,"valA",{get:function(){return s(this.ratioA,this.min,this.max,this.step)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"valB",{get:function(){return s(this.ratioB,this.min,this.max,this.step)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ratioLower",{get:function(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ratioUpper",{get:function(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA},enumerable:!0,configurable:!0}),t.prototype.updateRatio=function(){var e=this.getValue(),t=this.min,n=this.max;this.dualKnobs?(this.ratioA=u(e.lower,t,n),this.ratioB=u(e.upper,t,n)):this.ratioA=u(e,t,n)},t.prototype.updateValue=function(){this.noUpdate=!0;var e=this.valA,t=this.valB;this.value=this.dualKnobs?{lower:Math.min(e,t),upper:Math.max(e,t)}:e,this.noUpdate=!1},t.prototype.hostData=function(){return{class:Object.assign({},i.createColorClasses(this.color),{"in-item":i.hostContext("ion-item",this.el),"range-disabled":this.disabled,"range-pressed":void 0!==this.pressedKnob,"range-has-pin":this.pin})}},t.prototype.render=function(){var e=this,t=this,n=t.min,i=t.max,r=t.step,s=t.ratioLower,l=t.ratioUpper,h=100*s+"%",c=100-100*l+"%",p=[];if(this.snaps)for(var d=n;d<=i;d+=r){var b=u(d,n,i);p.push({ratio:b,active:b>=s&&b<=l,left:100*b+"%"})}return[a("slot",{name:"start"}),a("div",{class:"range-slider",ref:function(t){return e.rangeSlider=t}},p.map(function(e){return a("div",{style:{left:e.left},role:"presentation",class:{"range-tick":!0,"range-tick-active":e.active}})}),a("div",{class:"range-bar",role:"presentation"}),a("div",{class:"range-bar range-bar-active",role:"presentation",style:{left:h,right:c}}),o({knob:"A",pressed:"A"===this.pressedKnob,value:this.valA,ratio:this.ratioA,pin:this.pin,disabled:this.disabled,handleKeyboard:this.handleKeyboard.bind(this),min:n,max:i}),this.dualKnobs&&o({knob:"B",pressed:"B"===this.pressedKnob,value:this.valB,ratio:this.ratioB,pin:this.pin,disabled:this.disabled,handleKeyboard:this.handleKeyboard.bind(this),min:n,max:i})),a("slot",{name:"end"})]},Object.defineProperty(t,"is",{get:function(){return"ion-range"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},dualKnobs:{type:Boolean,attr:"dual-knobs"},el:{elementRef:!0},max:{type:Number,attr:"max",watchCallbacks:["maxChanged"]},min:{type:Number,attr:"min",watchCallbacks:["minChanged"]},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},pin:{type:Boolean,attr:"pin"},pressedKnob:{state:!0},queue:{context:"queue"},ratioA:{state:!0},ratioB:{state:!0},snaps:{type:Boolean,attr:"snaps"},step:{type:Number,attr:"step"},value:{type:Number,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionIncrease",method:"keyChng"},{name:"ionDecrease",method:"keyChng"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{left:0;top:calc((var(--height) - var(--bar-height)) / 2);width:100%;height:var(--bar-height);background:var(--bar-background)}.range-bar,.range-knob{position:absolute;pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow)}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.range-pressed) .range-knob-handle{will-change:left}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb,56,128,255),0.26);--bar-background-active:var(--ion-color-primary,#3880ff);--height:42px;--pin-background:var(--ion-color-primary,#3880ff);--pin-color:var(--ion-color-primary-contrast,#fff);padding:8px;font-size:12px}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin:before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb),.26)}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(.67);transform:scale(.67);-webkit-transition-duration:.12s;transition-duration:.12s;-webkit-transition-property:background-color,border,-webkit-transform;transition-property:background-color,border,-webkit-transform;transition-property:transform,background-color,border;transition-property:transform,background-color,border,-webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding:8px 0;border-radius:50%;-webkit-transform:translateZ(0) scale(.01);transform:translateZ(0) scale(.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background .12s ease,-webkit-transform .12s ease;transition:background .12s ease,-webkit-transform .12s ease;transition:transform .12s ease,background .12s ease;transition:transform .12s ease,background .12s ease,-webkit-transform .12s ease;color:var(--pin-color);text-align:center}.range-pin,.range-pin:before{background:var(--pin-background)}.range-pin:before{left:50%;top:3px;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-right-radius:50%;border-bottom-left-radius:0;margin-left:-13px;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background .12s ease;transition:background .12s ease;content:\"\";z-index:-1}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,-24px,0) scale(1);transform:translate3d(0,-24px,0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar,:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-knob,:host(.range-disabled) .range-tick{background-color:var(--ion-background-color-step-250,#bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(.55);transform:scale(.55);outline:5px solid #fff}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();function o(e){var t=e.knob,n=e.value,i=e.min,r=e.max,o=e.disabled,s=e.handleKeyboard;return a("div",{onKeyDown:function(e){var n=e.key;"ArrowLeft"===n||"ArrowDown"===n?(s(t,!1),e.preventDefault(),e.stopPropagation()):"ArrowRight"!==n&&"ArrowUp"!==n||(s(t,!0),e.preventDefault(),e.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-pressed":e.pressed,"range-knob-min":n===i,"range-knob-max":n===r},style:{left:100*e.ratio+"%"},role:"slider",tabindex:o?-1:0,"aria-valuemin":i,"aria-valuemax":r,"aria-disabled":o?"true":null,"aria-valuenow":n},e.pin&&a("div",{class:"range-pin",role:"presentation"},Math.round(n)),a("div",{class:"range-knob",role:"presentation"}))}function s(e,t,i,a){var r=(i-t)*e;return a>0&&(r=Math.round(r/a)*a+t),n.clamp(t,r,i)}function u(e,t,i){return n.clamp(0,(e-t)/(i-t),1)}t.IonRange=r,Object.defineProperty(t,"__esModule",{value:!0})});