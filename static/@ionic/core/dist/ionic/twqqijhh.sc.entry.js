/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{h as t,j as i}from"./chunk-b9ec67ac.js";class a{constructor(){this.inputId=`ion-rb-${o++}`,this.keyFocus=!1,this.name=this.inputId,this.disabled=!1,this.checked=!1,this.onClick=(()=>{this.checkedChanged(!0)}),this.onChange=(()=>{this.checked=!0,this.nativeInput.focus()}),this.onKeyUp=(()=>{this.keyFocus=!0}),this.onFocus=(()=>{this.ionFocus.emit()}),this.onBlur=(()=>{this.keyFocus=!1,this.ionBlur.emit()})}componentWillLoad(){null==this.value&&(this.value=this.inputId),this.emitStyle()}componentDidLoad(){this.ionRadioDidLoad.emit(),this.nativeInput.checked=this.checked;const e=this.nativeInput.closest("ion-item");if(e){const t=e.querySelector("ion-label");t&&(t.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",t.id))}}componentDidUnload(){this.ionRadioDidUnload.emit()}colorChanged(){this.emitStyle()}checkedChanged(e){this.nativeInput.checked!==e&&(this.nativeInput.checked=e),e&&this.ionSelect.emit({checked:!0,value:this.value}),this.emitStyle()}disabledChanged(e){this.nativeInput.disabled=e,this.emitStyle()}emitStyle(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})}hostData(){return{class:Object.assign({},t(this.color),{"in-item":i("ion-item",this.el),interactive:!0,"radio-checked":this.checked,"radio-disabled":this.disabled,"radio-key":this.keyFocus})}}render(){return[e("div",{class:"radio-icon"},e("div",{class:"radio-inner"})),e("input",{type:"radio",onClick:this.onClick,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,onKeyUp:this.onKeyUp,id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:e=>this.nativeInput=e})]}static get is(){return"ion-radio"}static get encapsulation(){return"shadow"}static get properties(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color",watchCallbacks:["colorChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:"Any",attr:"value",mutable:!0}}}static get events(){return[{name:"ionRadioDidLoad",method:"ionRadioDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRadioDidUnload",method:"ionRadioDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-radio-md-h{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.radio-disabled.sc-ion-radio-md-h{pointer-events:none}.radio-icon.sc-ion-radio-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:var(--width);height:var(--height);contain:layout size style}.radio-inner.sc-ion-radio-md{width:var(--inner-width);height:var(--inner-height)}input.sc-ion-radio-md{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.radio-icon.sc-ion-radio-md, .radio-inner.sc-ion-radio-md{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-radio-md-h{--color:var(--ion-text-color-step-600,#999);--color-checked:var(--ion-color-primary,#3880ff);--width:20px;--height:20px;--border-width:2px;--border-style:solid;--inner-width:calc(var(--width) / 2);--inner-height:calc(var(--height) / 2)}.ion-color.sc-ion-radio-md-h   .radio-inner.sc-ion-radio-md{background:var(--ion-color-base)}.ion-color.radio-checked.sc-ion-radio-md-h   .radio-icon.sc-ion-radio-md{border-color:var(--ion-color-base)}.radio-icon.sc-ion-radio-md{margin:0;border-radius:50%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner.sc-ion-radio-md{border-radius:50%;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);background:var(--color-checked)}.radio-checked.sc-ion-radio-md-h   .radio-icon.sc-ion-radio-md{border-color:var(--color-checked)}.radio-checked.sc-ion-radio-md-h   .radio-inner.sc-ion-radio-md{-webkit-transform:scaleX(1);transform:scaleX(1)}.radio-disabled.sc-ion-radio-md-h{opacity:.3}.radio-key.sc-ion-radio-md-h   .radio-icon.sc-ion-radio-md:after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}.in-item.sc-ion-radio-md-h{margin:9px 10px 9px 0;display:block;position:static}.in-item[slot=start].sc-ion-radio-md-h{margin:11px 36px 10px 4px}"}static get styleMode(){return"md"}}let o=0;class n{constructor(){this.inputId=`ion-rg-${s++}`,this.labelId=`${this.inputId}-lbl`,this.radios=[],this.allowEmptySelection=!1,this.name=this.inputId}valueChanged(e){this.updateRadios(),this.ionChange.emit({value:e})}onRadioDidLoad(e){const t=e.target;t.name=this.name,this.radios.push(t),null==this.value&&t.checked?this.value=t.value:this.updateRadios()}onRadioDidUnload(e){const t=this.radios.indexOf(e.target);t>-1&&this.radios.splice(t,1)}onRadioSelect(e){const t=e.target;t&&(this.value=t.value)}componentDidLoad(){let e=this.el.querySelector("ion-list-header");if(e||(e=this.el.querySelector("ion-item-divider")),e){const t=e.querySelector("ion-label");t&&(this.labelId=t.id=this.name+"-lbl")}this.updateRadios()}updateRadios(){const e=this.value;let t=!1;for(const i of this.radios)t||i.value!==e?i.checked=!1:(t=!0,i.checked=!0)}hostData(){return{role:"radiogroup","aria-labelledby":this.labelId}}static get is(){return"ion-radio-group"}static get properties(){return{allowEmptySelection:{type:Boolean,attr:"allow-empty-selection"},el:{elementRef:!0},name:{type:String,attr:"name"},value:{type:"Any",attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionRadioDidLoad",method:"onRadioDidLoad"},{name:"ionRadioDidUnload",method:"onRadioDidUnload"},{name:"ionSelect",method:"onRadioSelect"}]}}let s=0;export{a as IonRadio,n as IonRadioGroup};