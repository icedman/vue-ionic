/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{e,d as a}from"./chunk-c23403d0.js";import{h as i}from"./chunk-b9ec67ac.js";class s{constructor(){this.inputId=`ion-input-${n++}`,this.didBlurAfterEdit=!1,this.hasFocus=!1,this.autocapitalize="none",this.autofocus=!1,this.clearOnEdit=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.value="",this.onInput=(t=>{this.value=this.nativeInput.value,this.emitStyle(),this.ionInput.emit(t)}),this.onFocus=(()=>{this.hasFocus=!0,this.focusChange(),this.ionFocus.emit()}),this.onBlur=(()=>{this.hasFocus=!1,this.focusChange(),this.ionBlur.emit()}),this.onKeyDown=(()=>{this.checkClearOnEdit()})}debounceChanged(){this.ionChange=e(this.ionChange,this.debounce)}disabledChanged(){this.emitStyle()}valueChanged(){const t=this.nativeInput,e=this.getValue();t.value!==e&&(t.value=e),this.ionChange.emit({value:e})}componentWillLoad(){this.emitStyle()}componentDidLoad(){this.debounceChanged()}setFocus(){this.nativeInput&&this.nativeInput.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,textarea:!0,input:!0,"interactive-disabled":this.disabled,"has-value":this.hasValue(),"has-focus":this.hasFocus})}checkClearOnEdit(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&(this.value=""),this.didBlurAfterEdit=!1)}focusChange(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0),this.emitStyle()}hasValue(){return""!==this.getValue()}getValue(){return this.value||""}hostData(){return{class:Object.assign({},i(this.color))}}render(){const e=this.getValue();return a(this.el,this.name,e,this.disabled),t("textarea",{class:"native-textarea",ref:t=>this.nativeInput=t,autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder,readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeyDown},e)}static get is(){return"ion-textarea"}static get encapsulation(){return"shadow"}static get properties(){return{autocapitalize:{type:String,attr:"autocapitalize"},autofocus:{type:Boolean,attr:"autofocus"},clearOnEdit:{type:Boolean,attr:"clear-on-edit",mutable:!0},color:{type:String,attr:"color"},cols:{type:Number,attr:"cols"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},hasFocus:{state:!0},maxlength:{type:Number,attr:"maxlength"},minlength:{type:Number,attr:"minlength"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},placeholder:{type:String,attr:"placeholder"},readonly:{type:Boolean,attr:"readonly"},required:{type:Boolean,attr:"required"},rows:{type:Number,attr:"rows"},setFocus:{method:!0},spellcheck:{type:Boolean,attr:"spellcheck"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]},wrap:{type:String,attr:"wrap"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:inherit;--placeholder-font-weight:inherit;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);z-index:2}:host(.ion-color){background:initial;color:var(--ion-color-base)}:host(.in-item){position:static}.native-textarea{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);margin:0;padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:block;width:100%;height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-textarea::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled]{opacity:.4}:host{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}"}static get styleMode(){return"ios"}}let n=0;export{s as IonTextarea};