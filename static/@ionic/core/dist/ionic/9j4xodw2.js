/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{a as t,d as s}from"./chunk-f7b6af08.js";class n{constructor(){this.disabled=!1}valueChanged(e){this.updateButtons(),this.ionChange.emit({value:e})}segmentClick(e){const t=e.target;this.value=t.value}componentDidLoad(){if(void 0===this.value){const e=this.getButtons().find(e=>e.checked);e&&(this.value=e.value)}this.updateButtons()}updateButtons(){const e=this.value;for(const t of this.getButtons())t.checked=t.value===e}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}hostData(){return{class:Object.assign({},t(this.color),{"segment-disabled":this.disabled,"in-toolbar":s("ion-toolbar",this.el),"in-color-toolbar":s("ion-toolbar.ion-color",this.el)})}}render(){return e("slot",null)}static get is(){return"ion-segment"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},mode:{type:String,attr:"mode"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionSelect",method:"segmentClick"}]}static get style(){return":host{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255);--ion-color-contrast:var(--ion-color-primary-contrast, #fff);--ion-color-shade:var(--ion-color-primary-shade, #3171e0);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit)}:host(.segment-disabled){opacity:.4;pointer-events:none}::slotted(ion-segment-button){--border-radius:4px;--border-width:1px;--border-style:solid;--border-color:var(--ion-color-base);--background:transparent;--transition:100ms all linear;--icon-size:26px;height:32px;color:var(--ion-color-base);font-size:13px;line-height:37px}::slotted(.segment-checked){--background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted(.segment-button-disabled){color:rgba(var(--ion-color-base-rgb),.5);pointer-events:none}::slotted(ion-segment-button):hover:not(.segment-checked){--background:rgba(var(--ion-color-base-rgb), 0.1)}::slotted(ion-segment-button):active:not(.segment-checked){--background:rgba(var(--ion-color-base-rgb), 0.1)}:host(.in-toolbar){left:0;right:0;top:0;bottom:0;position:absolute}:host(.in-toolbar) ::slotted(ion-segment-button){max-width:100px;height:30px;font-size:12px;line-height:22px}:host(.in-color-toolbar){--ion-color-base:inherit}:host(.in-color-toolbar) ::slotted(ion-segment-button){--border-color:currentColor;color:inherit}:host(.in-color-toolbar) ::slotted(ion-segment-button.segment-checked){--background:var(--ion-color-contrast);--border-color:var(--ion-color-contrast);color:var(--ion-color-base)}"}static get styleMode(){return"ios"}}let a=0;class o{constructor(){this.checked=!1,this.disabled=!1,this.value="ion-sb-"+a++}checkedChanged(e,t){e&&!t&&this.ionSelect.emit()}hostData(){const{disabled:e,checked:s,color:n}=this;return{class:Object.assign({},t(n),{"segment-button-disabled":e,"segment-checked":s}),tappable:!0}}render(){return[e("button",{"aria-pressed":this.checked?"true":null,class:"segment-button-native",disabled:this.disabled,onClick:()=>this.checked=!0},e("slot",null),"md"===this.mode&&e("ion-ripple-effect",{tapClick:!0,parent:this.el}))]}static get is(){return"ion-segment-button"}static get encapsulation(){return"shadow"}static get properties(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},mode:{type:String,attr:"mode"},value:{type:String,attr:"value"}}}static get events(){return[{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;--icon-size:1em;-webkit-box-flex:1;-ms-flex:1;flex:1}:host(:first-of-type) .segment-button-native{--padding-end:0;border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}:host(:not(:first-of-type)) .segment-button-native{border-left-width:0}:host(:last-of-type) .segment-button-native{--padding-start:0;border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}.segment-button-native{margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:inherit;font-size:inherit;font-weight:inherit;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:inherit;white-space:nowrap;contain:content;cursor:pointer;overflow:hidden;-webkit-font-kerning:none;font-kerning:none}.segment-button-native:active,.segment-button-native:focus{outline:0}::slotted(ion-icon){font-size:var(--icon-size)}"}}export{n as IonSegment,o as IonSegmentButton};