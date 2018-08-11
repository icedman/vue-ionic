/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,s){function o(e){try{a(n.next(e))}catch(e){s(e)}}function l(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,l)}a((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function l(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}};Ionic.loadBundle("6qwikw1c",["require","exports","./chunk-db50cf96.js"],function(e,t,r){var n=window.Ionic.h,i=function(){function t(){this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.disabled=!1}return t.prototype.disabledChanged=function(){this.gesture&&(this.gesture.disabled=this.disabled)},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t,r;return __generator(this,function(n){switch(n.label){case 0:return"fixed"!==this.el.getAttribute("slot")?(console.error('Make sure you use: <ion-refresher slot="fixed">'),[2]):(t=this.el.closest("ion-content"))?[4,t.componentOnReady()]:[3,2];case 1:return n.sent(),this.scrollEl=t.getScrollElement(),[3,3];case 2:console.error("ion-refresher did not attach, make sure the parent is an ion-content."),n.label=3;case 3:return r=this,[4,new Promise(function(t,r){e(["./gesture.js"],t,r)})];case 4:return r.gesture=n.sent().create({el:this.el.closest("ion-content"),queue:this.queue,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:5,passive:!1,canStart:this.canStart.bind(this),onStart:this.onStart.bind(this),onMove:this.onMove.bind(this),onEnd:this.onEnd.bind(this)}),this.disabledChanged(),[2]}})})},t.prototype.componentDidUnload=function(){this.scrollEl=void 0},t.prototype.complete=function(){this.close(32,"120ms")},t.prototype.cancel=function(){this.close(16,"")},t.prototype.getProgress=function(){return this.progress},t.prototype.canStart=function(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)},t.prototype.onStart=function(){this.progress=0,this.state=1},t.prototype.onMove=function(e){if(!this.scrollEl)return 0;var t=e.event;if(t.touches&&t.touches.length>1)return 1;if(56&this.state)return 2;var r=e.deltaY;if(r<=0)return this.progress=0,this.state=1,this.appliedStyles?(this.setCss(0,"",!1,""),5):6;if(1===this.state){if(this.scrollEl.scrollTop>0)return this.progress=0,7;this.state=2}if(t.preventDefault(),this.setCss(r,"0ms",!0,""),!r)return this.progress=0,8;var n=this.pullMin;return this.progress=r/n,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),r<n?(this.state=2,2):r>this.pullMax?(this.beginRefresh(),3):(this.state=4,4)},t.prototype.onEnd=function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()},t.prototype.beginRefresh=function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit()},t.prototype.close=function(e,t){var r=this;setTimeout(function(){r.state=1,r.progress=0,r.didStart=!1,r.setCss(0,"0ms",!1,"")},600),this.state=e,this.setCss(0,"",!0,t)},t.prototype.setCss=function(e,t,r,n){var i=this;this.appliedStyles=e>0,this.queue.write(function(){if(i.scrollEl){var s=i.scrollEl.style;s.transform=e>0?"translateY("+e+"px) translateZ(0px)":"translateZ(0px)",s.transitionDuration=t,s.transitionDelay=n,s.overflow=r?"hidden":""}})},t.prototype.hostData=function(){return{class:Object.assign({},r.createThemedClasses(this.mode,"refresher"),{"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state})}},Object.defineProperty(t,"is",{get:function(){return"ion-refresher"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{cancel:{method:!0},closeDuration:{type:String,attr:"close-duration"},complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},getProgress:{method:!0},pullMax:{type:Number,attr:"pull-max"},pullMin:{type:Number,attr:"pull-min"},queue:{context:"queue"},snapbackDuration:{type:String,attr:"snapback-duration"},state:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRefresh",method:"ionRefresh",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPull",method:"ionPull",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStart",method:"ionStart",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-refresher{left:0;display:none;position:absolute;top:0;width:100%;height:60px;z-index:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-icon,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-crescent circle,.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line{stroke:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),s=function(){function e(){}return e.prototype.componentDidLoad=function(){this.pullingIcon||(this.pullingIcon=this.config.get("ionPullIcon","arrow-down")),this.refreshingSpinner||(this.refreshingSpinner=this.config.get("ionRefreshingSpinner",this.config.get("spinner","lines")))},e.prototype.render=function(){return[n("div",{class:"refresher-pulling"},this.pullingIcon&&n("div",{class:"refresher-pulling-icon"},n("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&n("div",{class:"refresher-pulling-text",innerHTML:this.pullingText})),n("div",{class:"refresher-refreshing"},this.refreshingSpinner&&n("div",{class:"refresher-refreshing-icon"},n("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&n("div",{class:"refresher-refreshing-text",innerHTML:this.refreshingText}))]},Object.defineProperty(e,"is",{get:function(){return"ion-refresher-content"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{config:{context:"config"},pullingIcon:{type:String,attr:"pulling-icon",mutable:!0},pullingText:{type:String,attr:"pulling-text"},refreshingSpinner:{type:String,attr:"refreshing-spinner",mutable:!0},refreshingText:{type:String,attr:"refreshing-text"}}},enumerable:!0,configurable:!0}),e}();t.IonRefresher=i,t.IonRefresherContent=s,Object.defineProperty(t,"__esModule",{value:!0})});