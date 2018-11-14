/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{h as t}from"./chunk-b9ec67ac.js";class s{constructor(){this.disabled=!1}valueChanged(e){this.updateButtons(),this.ionChange.emit({value:e})}segmentClick(e){this.value=e.target.value}componentDidLoad(){if(null==this.value){const e=this.getButtons().find(e=>e.checked);e&&(this.value=e.value)}this.updateButtons()}updateButtons(){const e=this.value;for(const t of this.getButtons())t.checked=t.value===e}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}hostData(){return{class:Object.assign({},t(this.color),{"segment-disabled":this.disabled})}}static get is(){return"ion-segment"}static get encapsulation(){return"scoped"}static get properties(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},mode:{type:String,attr:"mode"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionSelect",method:"segmentClick"}]}static get style(){return".sc-ion-segment-ios-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit);text-align:center}.sc-ion-segment-ios-s > ion-segment-button{--btn-background:var(--background);--btn-border-color:var(--border-color);color:var(--color)}.sc-ion-segment-ios-s > .segment-button-checked{--btn-background:var(--background-checked);--btn-border-color:var(--border-color-checked);color:var(--color-checked)}.sc-ion-segment-ios-s > .segment-button-disabled, .segment-disabled.sc-ion-segment-ios-h{pointer-events:none}.sc-ion-segment-ios-h{--background:transparent;--background-checked:var(--ion-color-primary,#3880ff);--border-color:currentColor;--border-color-checked:var(--ion-color-primary,#3880ff);--border-color-disabled:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary,#3880ff);--color-checked:var(--ion-color-primary-contrast,#fff);--color-disabled:rgba(var(--ion-color-primary-rgb,56,128,255),0.3)}.segment-disabled.sc-ion-segment-ios-h{opacity:.4}.sc-ion-segment-ios-s > ion-segment-button{--border-radius:4px;--border-width:1px;--border-style:solid;--transition:100ms all linear;--icon-size:26px;height:32px;font-size:13px;line-height:37px}.sc-ion-segment-ios-s > .segment-button-disabled{--btn-border-color:var(--border-color-disabled);color:var(--color-disabled)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > ion-segment-button{color:var(--ion-color-base)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked{--btn-background:var(--ion-color-base);--btn-border-color:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-disabled{--btn-border-color:var(--ion-color-base);color:rgba(var(--ion-color-base-rgb),.5)}ion-toolbar.sc-ion-segment-ios-h, ion-toolbar   .sc-ion-segment-ios-h{left:0;right:0;top:0;bottom:0;margin:0;position:absolute}.sc-ion-segment-ios-hion-toolbar.sc-ion-segment-ios-s > ion-segment-button, ion-toolbar .sc-ion-segment-ios-h.sc-ion-segment-ios-s > ion-segment-button{max-width:100px;height:30px;font-size:12px;line-height:22px}ion-toolbar.ion-color.sc-ion-segment-ios-h:not(.ion-color), ion-toolbar.ion-color   .sc-ion-segment-ios-h:not(.ion-color){--color:var(--ion-color-contrast);--color-checked:var(--ion-color-base);--color-disabled:rgba(var(--ion-color-contrast-rgb),0.3);--background-checked:var(--ion-color-contrast);--border-color-checked:var(--ion-color-contrast);--border-color-disabled:var(--ion-color-contrast)}"}static get styleMode(){return"ios"}}let n=0;class a{constructor(){this.checked=!1,this.disabled=!1,this.value="ion-sb-"+n++}checkedChanged(e,t){e&&!t&&this.ionSelect.emit()}hostData(){const{disabled:e,checked:s,color:n}=this;return{"ion-activatable":!0,class:Object.assign({},t(n),{"segment-button-disabled":e,"segment-button-checked":s})}}render(){return[e("button",{type:"button","aria-pressed":this.checked?"true":null,class:"button-native",disabled:this.disabled,onClick:()=>this.checked=!0},e("slot",null),"md"===this.mode&&e("ion-ripple-effect",null))]}static get is(){return"ion-segment-button"}static get encapsulation(){return"shadow"}static get properties(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},mode:{type:String,attr:"mode"},value:{type:String,attr:"value"}}}static get events(){return[{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;--icon-size:1em;--btn-background:inherit;--btn-border-color:inherit;-ms-flex:1;flex:1;color:inherit;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}:host(:first-of-type) .button-native{--padding-end:0;border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}:host(:not(:first-of-type)) .button-native{border-left-width:0}:host(:last-of-type) .button-native{--padding-start:0;border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--btn-border-color);outline:none;background:var(--btn-background);contain:content;cursor:pointer;overflow:hidden}::slotted(ion-icon){font-size:var(--icon-size)}"}}export{s as IonSegment,a as IonSegmentButton};