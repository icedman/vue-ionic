/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import{h}from"./ionic.core.js";import{a as createColorClasses,b as createThemedClasses}from"./chunk-f7b6af08.js";var Content=function(){function e(){this.cTop=-1,this.cBottom=-1,this.dirty=!1,this.fullscreen=!1,this.scrollEnabled=!0,this.scrollEvents=!1}return e.prototype.onNavChanged=function(){this.resize()},e.prototype.componentDidLoad=function(){this.resize()},e.prototype.componentDidUnload=function(){this.scrollEl=void 0},e.prototype.getScrollElement=function(){return this.scrollEl},e.prototype.resize=function(){var e=this;this.scrollEl&&(this.fullscreen?this.queue.read(function(){e.queue.read(e.readDimensions.bind(e)),e.queue.write(e.writeDimensions.bind(e))}):(this.cTop=this.cBottom=-1,this.queue.write(function(){return e.scrollEl&&e.scrollEl.removeAttribute("style")})))},e.prototype.readDimensions=function(){var e=getPageElement(this.el),t=Math.max(this.el.offsetTop,0),o=Math.max(e.offsetHeight-t-this.el.offsetHeight,0);this.dirty=t!==this.cTop||o!==this.cBottom,this.cTop=t,this.cBottom=o},e.prototype.writeDimensions=function(){if(this.dirty&&this.scrollEl){var e=this.scrollEl.style;e.paddingTop=this.cTop+"px",e.paddingBottom=this.cBottom+"px",e.top=-this.cTop+"px",e.bottom=-this.cBottom+"px",this.dirty=!1}},e.prototype.hostData=function(){return{class:createColorClasses(this.color)}},e.prototype.render=function(){var e=this;this.resize();var t=h("div",{class:"scroll-inner"},h("slot",null));return[this.scrollEnabled?h("ion-scroll",{ref:function(t){return e.scrollEl=t},mode:this.mode,scrollEvents:this.scrollEvents,forceOverscroll:this.forceOverscroll},t):t,h("slot",{name:"fixed"})]},Object.defineProperty(e,"is",{get:function(){return"ion-content"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},forceOverscroll:{type:Boolean,attr:"force-overscroll"},fullscreen:{type:Boolean,attr:"fullscreen"},getScrollElement:{method:!0},queue:{context:"queue"},scrollEnabled:{type:Boolean,attr:"scroll-enabled"},scrollEvents:{type:Boolean,attr:"scroll-events"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"body:ionNavDidChange",method:"onNavChanged"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-content-ios-h{--ion-color-base:var(--ion-background-color, #fff);--ion-color-contrast:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;background-color:var(--ion-color-base);color:var(--ion-color-contrast);contain:layout size style;font-family:var(--ion-font-family,inherit)}.ion-color-outer.sc-ion-content-ios-h, .outer-content.sc-ion-content-ios-h{--ion-color-base:var(--ion-background-color-step-50, #f2f2f2)}.scroll-inner.sc-ion-content-ios{padding:var(--padding-top) var(--padding-end) calc(var(--padding-bottom) + var(--keyboard-offset)) var(--padding-start);-webkit-box-sizing:border-box;box-sizing:border-box;min-height:100%;-webkit-margin-collapse:discard}.sc-ion-content-ios-s > hr{height:.55px;background-color:rgba(var(--ion-text-color-rgb,0,0,0),.12)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();function getParentElement(e){return e.parentElement?e.parentElement:e.parentNode&&e.parentNode.host?e.parentNode.host:null}function getPageElement(e){var t=e.closest("ion-tabs");return t||(e.closest("ion-app,ion-page,.ion-page,page-inner")||getParentElement(e))}var Scroll=function(){function e(){this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.scrollEvents=!1,this.detail={positions:[],scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0}}return e.prototype.componentWillLoad=function(){void 0===this.forceOverscroll&&(this.forceOverscroll="ios"===this.mode&&"ontouchstart"in this.win)},e.prototype.componentDidUnload=function(){this.watchDog&&clearInterval(this.watchDog)},e.prototype.onScroll=function(e){var t=this,o=Date.now(),r=!this.isScrolling;this.lastScroll=o,r&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,this.queue.read(function(o){t.queued=!1,t.detail.event=e,updateScrollDetail(t.detail,t.el,o,r),t.ionScroll.emit(t.detail)}))},e.prototype.scrollToTop=function(e){return this.scrollToPoint(0,0,e)},e.prototype.scrollToBottom=function(e){var t=this.el?this.el.scrollHeight-this.el.clientHeight:0;return this.scrollToPoint(0,t,e)},e.prototype.scrollByPoint=function(e,t,o){return this.scrollToPoint(e+this.el.scrollLeft,t+this.el.scrollTop,o)},e.prototype.scrollToPoint=function(e,t,o){var r,n=this,l=new Promise(function(e){r=e}),i=this,c=i.el;if(!c)return r(),l;if(o<32)return c.scrollTop=t,c.scrollLeft=e,r(),l;var s,a=c.scrollTop,u=c.scrollLeft,f=o/16+100,p=0,h=!1;function d(n){if(p++,!i.el||h||p>f)return i.isScrolling=!1,c.style.transform=c.style.webkitTransform="",void r();var l=Math.min(1,(n-s)/o),m=--l*l*l+1;a!==t&&(c.scrollTop=m*(t-a)+a),u!==e&&(c.scrollLeft=Math.floor(m*(e-u)+u)),m<1?i.queue.read(d):(h=!0,i.isScrolling=!1,c.style.transform=c.style.webkitTransform="",r())}return i.isScrolling=!0,this.queue.write(function(){n.queue.write(function(e){s=e,d(e)})}),l},e.prototype.onScrollStart=function(){var e=this;this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(function(){e.lastScroll<Date.now()-120&&e.onScrollEnd()},100)},e.prototype.onScrollEnd=function(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1})},e.prototype.hostData=function(){return{class:Object.assign({},createThemedClasses(this.mode,"scroll"),{overscroll:this.forceOverscroll})}},e.prototype.render=function(){return h("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{config:{context:"config"},el:{elementRef:!0},forceOverscroll:{type:Boolean,attr:"force-overscroll",mutable:!0},mode:{type:String,attr:"mode"},queue:{context:"queue"},scrollByPoint:{method:!0},scrollEvents:{type:Boolean,attr:"scroll-events"},scrollToBottom:{method:!0},scrollToPoint:{method:!0},scrollToTop:{method:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionScrollStart",method:"ionScrollStart",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScroll",method:"ionScroll",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScrollEnd",method:"ionScrollEnd",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-scroll-h{left:0;right:0;top:0;bottom:0;display:block;position:absolute;contain:size style layout;z-index:1;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;will-change:scroll-position}.overscroll.sc-ion-scroll-h::after, .overscroll.sc-ion-scroll-h::before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll.sc-ion-scroll-h::before{bottom:-1px}.overscroll.sc-ion-scroll-h::after{top:-1px}"},enumerable:!0,configurable:!0}),e}();function updateScrollDetail(e,t,o,r){var n=t.scrollTop,l=t.scrollLeft,i=e.positions;r&&(e.startTimeStamp=o,e.startY=n,e.startX=l,i.length=0),e.timeStamp=o,e.currentY=e.scrollTop=n,e.currentX=e.scrollLeft=l,e.deltaY=n-e.startY,e.deltaX=l-e.startX,i.push(n,l,o);for(var c=o-100,s=i.length-1;s>0&&i[s]>c;)s-=3;if(s>3){var a=1/(i[s]-o),u=i[s-1]-l,f=i[s-2]-n;e.velocityX=u*a,e.velocityY=f*a}else e.velocityX=0,e.velocityY=0}var ToolbarTitle=function(){function e(){}return e.prototype.hostData=function(){return{class:createColorClasses(this.color)}},e.prototype.render=function(){return[h("div",{class:"toolbar-title"},h("slot",null))]},Object.defineProperty(e,"is",{get:function(){return"ion-title"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-title-ios-h{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ion-color.sc-ion-title-ios-h{color:var(--ion-color-base)}.toolbar-title.sc-ion-title-ios{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}.sc-ion-title-ios-h{left:0;top:0;padding:0 90px;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),Toolbar=function(){function e(){}return e.prototype.hostData=function(){return{class:createColorClasses(this.color)}},e.prototype.render=function(){return[h("div",{class:"toolbar-background"}),h("div",{class:"toolbar-container"},h("slot",{name:"start"}),h("slot",{name:"secondary"}),h("div",{class:"toolbar-content"},h("slot",null)),h("slot",{name:"primary"}),h("slot",{name:"end"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-toolbar"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-toolbar-ios-h{--border-width:0;--border-style:solid;--background:var(--ion-color-base);--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;width:100%;color:var(--ion-color-contrast);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box;--ion-color-base:var(--ion-toolbar-background-color, #f8f8f8);--ion-color-contrast:var(--ion-toolbar-text-color, var(--ion-text-color, #000));--border-color:rgba(var(--ion-toolbar-border-color-rgb, 0, 0, 0), 0.2);--translucent-filter:saturate(180%) blur(20px);--padding-top:4px;--padding-bottom:4px;--padding-start:4px;--padding-end:4px;--min-height:44px;font-family:var(--ion-font-family,inherit)}.toolbar-container.sc-ion-toolbar-ios{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background.sc-ion-toolbar-ios{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-content.sc-ion-toolbar-ios{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4;min-width:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();export{Content as IonContent,Scroll as IonScroll,ToolbarTitle as IonTitle,Toolbar as IonToolbar};