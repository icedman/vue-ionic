/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{a as e,k as o}from"./chunk-c23403d0.js";import{h as s,j as l,k as r}from"./chunk-b9ec67ac.js";class n{componentDidLoad(){e(()=>{const{win:t,config:e,queue:s}=this;e.getBoolean("_testing")||function(t){import("./tap-click.js").then(e=>e.startTapClick(t.document))}(t),function(t,e){e.getBoolean("inputShims",function(t){return o(t,"ios")&&o(t,"mobile")}(t))&&import("./input-shims.js").then(o=>o.startInputShims(t.document,e))}(t,e),function(t,e,s){e.getBoolean("statusTap",o(t,"hybrid"))&&import("./status-tap.js").then(e=>e.startStatusTap(t,s))}(t,e,s),function(t,e){e.getBoolean("hardwareBackButton",o(t,"hybrid"))&&import("./hardware-back-button.js").then(e=>e.startHardwareBackButton(t))}(t,e)})}hostData(){return{class:{"ion-page":!0,"force-statusbar-padding":this.config.getBoolean("_forceStatusbarPadding")}}}static get is(){return"ion-app"}static get properties(){return{config:{context:"config"},el:{elementRef:!0},queue:{context:"queue"},win:{context:"window"}}}static get style(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"}}class i{static get is(){return"ion-buttons"}static get encapsulation(){return"scoped"}static get style(){return".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s  ion-button {--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;--padding-start:0;--padding-end:0;--box-shadow:none;margin-left:2px;margin-right:2px;--padding-top:0;--padding-bottom:0;--padding-start:5px;--padding-end:5px;--height:32px;font-size:17px;font-weight:400}.sc-ion-buttons-ios-s  ion-button:not(.button-round) {--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button {--color:initial;--color-activated:initial}\@media (any-hover:hover){.sc-ion-buttons-ios-s  .button-solid-ios:hover {opacity:.4}}.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin:0;margin-right:.3em;font-size:24px;line-height:.67}.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin:0;margin-left:.4em;font-size:24px;line-height:.67}.sc-ion-buttons-ios-s  ion-icon[slot=icon-only] {padding:0;margin:0;font-size:31px;line-height:.67}[slot=start].sc-ion-buttons-ios-h{-ms-flex-order:2;order:2}[slot=secondary].sc-ion-buttons-ios-h{-ms-flex-order:3;order:3}[slot=primary].sc-ion-buttons-ios-h{-ms-flex-order:5;order:5;text-align:end}[slot=end].sc-ion-buttons-ios-h{-ms-flex-order:6;order:6;text-align:end}"}static get styleMode(){return"ios"}}class c{constructor(){this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}onNavChanged(){this.resize()}componentWillLoad(){void 0===this.forceOverscroll&&(this.forceOverscroll="ios"===this.mode&&o(this.win,"mobile"))}componentDidLoad(){this.resize()}componentDidUnload(){this.watchDog&&clearInterval(this.watchDog)}resize(){this.fullscreen?this.queue.read(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())}readDimensions(){const t=function(t){const e=t.closest("ion-tabs");if(e)return e;const o=t.closest("ion-app,ion-page,.ion-page,page-inner");return o||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)}(this.el),e=Math.max(this.el.offsetTop,0),o=Math.max(t.offsetHeight-e-this.el.offsetHeight,0);(e!==this.cTop||o!==this.cBottom)&&(this.cTop=e,this.cBottom=o,this.el.forceUpdate())}onScroll(t){const e=Date.now(),o=!this.isScrolling;this.lastScroll=e,o&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,this.queue.read(e=>{this.queued=!1,this.detail.event=t,function(t,e,o,s){const l=t.currentX,r=t.currentY,n=t.timeStamp,i=e.scrollLeft,c=e.scrollTop;s&&(t.startTimeStamp=o,t.startX=i,t.startY=c,t.velocityX=t.velocityY=0),t.timeStamp=o,t.currentX=t.scrollLeft=i,t.currentY=t.scrollTop=c,t.deltaX=i-t.startX,t.deltaY=c-t.startY;const a=o-n;if(a>0&&a<100){const e=(c-r)/a;t.velocityX=.7*((i-l)/a)+.3*t.velocityX,t.velocityY=.7*e+.3*t.velocityY}}(this.detail,this.scrollEl,e,o),this.ionScroll.emit(this.detail)}))}getScrollElement(){return Promise.resolve(this.scrollEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}scrollToBottom(t=0){return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}scrollByPoint(t,e,o){return this.scrollToPoint(t+this.scrollEl.scrollLeft,e+this.scrollEl.scrollTop,o)}async scrollToPoint(t,e,o=0){const s=this.scrollEl;if(o<32)return null!=e&&(s.scrollTop=e),void(null!=t&&(s.scrollLeft=t));let l,r=0;const n=new Promise(t=>l=t),i=s.scrollTop,c=s.scrollLeft,a=null!=e?e-i:0,h=null!=t?t-c:0,u=t=>{const e=Math.min(1,(t-r)/o)-1,n=Math.pow(e,3)+1;0!==a&&(s.scrollTop=Math.floor(n*a+i)),0!==h&&(s.scrollLeft=Math.floor(n*h+c)),n<1?requestAnimationFrame(u):l()};return requestAnimationFrame(t=>{r=t,u(t)}),n}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()},100)}onScrollEnd(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1})}hostData(){return{class:Object.assign({},s(this.color),{"content-sizing":l("ion-popover",this.el),overscroll:!!this.forceOverscroll}),style:{"--offset-top":`${this.cTop}px`,"--offset-bottom":`${this.cBottom}px`}}}render(){const{scrollX:e,scrollY:o,forceOverscroll:s}=this;return this.resize(),[t("div",{class:{"inner-scroll":!0,"scroll-x":e,"scroll-y":o,overscroll:(e||o)&&!!s},ref:t=>this.scrollEl=t,onScroll:t=>this.onScroll(t)},t("slot",null)),t("slot",{name:"fixed"})]}static get is(){return"ion-content"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},forceOverscroll:{type:Boolean,attr:"force-overscroll",mutable:!0},fullscreen:{type:Boolean,attr:"fullscreen"},getScrollElement:{method:!0},queue:{context:"queue"},scrollByPoint:{method:!0},scrollEvents:{type:Boolean,attr:"scroll-events"},scrollToBottom:{method:!0},scrollToPoint:{method:!0},scrollToTop:{method:!0},scrollX:{type:Boolean,attr:"scroll-x"},scrollY:{type:Boolean,attr:"scroll-y"},win:{context:"window"}}}static get events(){return[{name:"ionScrollStart",method:"ionScrollStart",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScroll",method:"ionScroll",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScrollEnd",method:"ionScrollEnd",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"body:ionNavDidChange",method:"onNavChanged"}]}static get style(){return":host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:layout size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-background-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding:calc(var(--padding-top) + var(--offset-top)) var(--padding-end) calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom)) var(--padding-start);position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{overflow-y:var(--overflow)}.scroll-x{overflow-x:var(--overflow)}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}"}}class a{constructor(){this.translucent=!1}hostData(){const t=r(this.mode,"footer"),e=this.translucent?r(this.mode,"footer-translucent"):null;return{class:Object.assign({},t,e)}}static get is(){return"ion-footer"}static get properties(){return{mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}}static get style(){return"ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-ios ion-toolbar:first-child{--border-width:0.55px 0 0}.footer-ios[no-border] ion-toolbar:first-child{--border-width:0}.footer-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}"}static get styleMode(){return"ios"}}class h{constructor(){this.translucent=!1}hostData(){const t=r(this.mode,"header"),e=this.translucent?r(this.mode,"header-translucent"):null;return{class:Object.assign({},t,e)}}static get is(){return"ion-header"}static get properties(){return{mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}}static get style(){return"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}"}static get styleMode(){return"ios"}}class u{getMode(){const t=this.el.closest("ion-toolbar");return t&&t.mode||this.mode}hostData(){const t=this.getMode();return{class:Object.assign({},s(this.color),{[`title-${t}`]:!0})}}render(){return[t("div",{class:"toolbar-title"},t("slot",null))]}static get is(){return"ion-title"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},el:{elementRef:!0}}}static get style(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;color:var(--color)}:host,:host(.title-ios){-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.title-ios){left:0;top:0;padding:0 90px;position:absolute;width:100%;height:100%;font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.title-md){padding:0 12px;font-size:20px;font-weight:500}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"}}class d{hostData(){return{class:s(this.color)}}render(){return[t("div",{class:"toolbar-background"}),t("div",{class:"toolbar-container"},t("slot",{name:"start"}),t("slot",{name:"secondary"}),t("div",{class:"toolbar-content"},t("slot",null)),t("slot",{name:"primary"}),t("slot",{name:"end"}))]}static get is(){return"ion-toolbar"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},mode:{type:String,attr:"mode"}}}static get style(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}:host{--background:var(--ion-toolbar-background,#f8f8f8);--color:var(--ion-toolbar-color,var(--ion-text-color,#000));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,rgba(0,0,0,0.2)));--padding-top:4px;--padding-bottom:4px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}"}static get styleMode(){return"ios"}}export{n as IonApp,i as IonButtons,c as IonContent,a as IonFooter,h as IonHeader,u as IonTitle,d as IonToolbar};