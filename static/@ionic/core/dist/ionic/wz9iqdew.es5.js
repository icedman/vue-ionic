/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(s,o){function r(t){try{a(n.next(t))}catch(t){o(t)}}function h(t){try{a(n.throw(t))}catch(t){o(t)}}function a(t){t.done?s(t.value):new i(function(e){e(t.value)}).then(r,h)}a((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var i,n,s,o,r={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:h(0),throw:h(1),return:h(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function h(o){return function(h){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,n&&(s=2&o[0]?n.return:o[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,o[1])).done)return s;switch(n=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,n=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(s=(s=r.trys).length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){r.label=o[1];break}if(6===o[0]&&r.label<s[1]){r.label=s[1],s=o;break}if(s&&r.label<s[2]){r.label=s[2],r.ops.push(o);break}s[2]&&r.ops.pop(),r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t],n=0}finally{i=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,h])}}};Ionic.loadBundle("wz9iqdew",["require","exports","./chunk-5b27ab2d.js"],function(t,e,i){window.Ionic.h;var n=function(){function t(){this.side="end"}return t.prototype.isEndSide=function(){return i.isEndSide(this.win,this.side)},t.prototype.width=function(){return this.el.offsetWidth},t.prototype.fireSwipeEvent=function(){this.ionSwipe.emit()},t.prototype.hostData=function(){var t=this.isEndSide();return{class:{"item-options-start":!t,"item-options-end":t}}},Object.defineProperty(t,"is",{get:function(){return"ion-item-options"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},fireSwipeEvent:{method:!0},isEndSide:{method:!0},side:{type:String,attr:"side"},width:{method:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionSwipe",method:"ionSwipe",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-item-options{top:0;right:0;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;z-index:1}ion-item-options.hydrated{visibility:hidden}.item-options-start{right:auto;left:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.item-sliding-active-slide ion-item-options{display:-webkit-box;display:-ms-flexbox;display:flex}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color,#c8c7cc)}.item-options-ios.item-options-end{border-bottom-width:.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:.55px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),s=function(){function e(){this.item=null,this.list=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.state=2}return e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(i){switch(i.label){case 0:return this.item=this.el.querySelector("ion-item"),this.list=this.el.closest("ion-list"),this.updateOptions(),e=this,[4,new Promise(function(e,i){t(["./gesture.js"],e,i)})];case 1:return e.gesture=i.sent().create({el:this.el,queue:this.queue,gestureName:"item-swipe",gesturePriority:-10,threshold:5,canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this)}),this.gesture.disabled=!1,[2]}})})},e.prototype.componentDidUnload=function(){this.gesture&&this.gesture.destroy(),this.item=this.list=null,this.leftOptions=this.rightOptions=void 0},e.prototype.getOpenAmount=function(){return this.openAmount},e.prototype.getSlidingRatio=function(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0},e.prototype.close=function(){this.setOpenAmount(0,!0)},e.prototype.closeOpened=function(){return!(!this.list||!this.list.closeSlidingItems())},e.prototype.updateOptions=function(){var t=this.el.querySelectorAll("ion-item-options"),e=0;this.leftOptions=this.rightOptions=void 0;for(var i=0;i<t.length;i++){var n=t.item(i);n.isEndSide()?(this.rightOptions=n,e|=2):(this.leftOptions=n,e|=1)}this.optsDirty=!0,this.sides=e},e.prototype.canStart=function(){var t=this.list&&this.list.getOpenItem();return!t||t===this.el||(this.closeOpened(),!1)},e.prototype.onDragStart=function(){this.list&&this.list.setOpenItem(this.el),this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")},e.prototype.onDragMove=function(t){this.optsDirty&&this.calculateOptsWidth();var e,i=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:i=Math.max(0,i);break;case 1:i=Math.min(0,i);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}i>this.optsWidthRightSide?i=(e=this.optsWidthRightSide)+.55*(i-e):i<-this.optsWidthLeftSide&&(i=(e=-this.optsWidthLeftSide)+.55*(i-e)),this.setOpenAmount(i,!1)},e.prototype.onDragEnd=function(t){var e=t.velocityX,i=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;(function(t,e,i){return!e&&i||t&&e})(this.openAmount>0==!(e<0),Math.abs(e)>.3,Math.abs(this.openAmount)<Math.abs(i/2))&&(i=0),this.setOpenAmount(i,!0),32&this.state&&this.rightOptions?this.rightOptions.fireSwipeEvent():64&this.state&&this.leftOptions&&this.leftOptions.fireSwipeEvent()},e.prototype.calculateOptsWidth=function(){this.optsWidthRightSide=0,this.rightOptions&&(this.optsWidthRightSide=this.rightOptions.width()),this.optsWidthLeftSide=0,this.leftOptions&&(this.optsWidthLeftSide=this.leftOptions.width()),this.optsDirty=!1},e.prototype.setOpenAmount=function(t,e){var i=this;if(this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),this.item){var n=this.item.style;if(this.openAmount=t,e&&(n.transition=""),t>0)this.state=t>=this.optsWidthRightSide+30?40:8;else{if(!(t<0))return this.tmr=window.setTimeout(function(){i.state=2,i.tmr=void 0},600),this.list&&this.list.setOpenItem(void 0),void(n.transform="");this.state=t<=-this.optsWidthLeftSide-30?80:16}n.transform="translate3d("+-t+"px,0,0)",this.ionDrag.emit({amount:t})}},e.prototype.hostData=function(){return{class:{"item-sliding":!0,"item-sliding-active-slide":2!==this.state,"item-sliding-active-options-end":!!(8&this.state),"item-sliding-active-options-start":!!(16&this.state),"item-sliding-active-swipe-end":!!(32&this.state),"item-sliding-active-swipe-start":!!(64&this.state)}}},Object.defineProperty(e,"is",{get:function(){return"ion-item-sliding"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{close:{method:!0},closeOpened:{method:!0},el:{elementRef:!0},getOpenAmount:{method:!0},getSlidingRatio:{method:!0},queue:{context:"queue"},state:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionDrag",method:"ionDrag",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);background:var(--ion-item-background-color,var(--ion-background-color,#fff));opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:90%;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:90%;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}"},enumerable:!0,configurable:!0}),e}();e.IonItemOptions=n,e.IonItemSliding=s,Object.defineProperty(e,"__esModule",{value:!0})});