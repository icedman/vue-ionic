/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,u)}s((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Ionic.loadBundle("2pz3wrvd",["exports","./chunk-b34e377b.js","./chunk-dd673b2a.js","./chunk-80b321f6.js"],function(t,e,n,r){var o=window.Ionic.h,i=function(){function t(){this.url=""}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var o=0,i=n;o<i.length;o++){var a=i[o];if(t[a]!==e[a])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.componentDidLoad=function(){this.ionRouteDataChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{component:{type:String,attr:"component",watchCallbacks:["onUpdate"]},componentProps:{type:"Any",attr:"component-props",watchCallbacks:["onComponentProps"]},url:{type:String,attr:"url",watchCallbacks:["onUpdate"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteDataChanged",method:"ionRouteDataChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}(),a=function(){function t(){this.from=""}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidLoad=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route-redirect"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{from:{type:String,attr:"from",watchCallbacks:["propDidChange"]},to:{type:String,attr:"to",watchCallbacks:["propDidChange"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteRedirectChanged",method:"ionRouteRedirectChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}();function u(t){return"/"+t.filter(function(t){return t.length>0}).join("/")}function s(t){if(null==t)return[""];var e=t.split("/").map(function(t){return t.trim()}).filter(function(t){return t.length>0});return 0===e.length?[""]:e}var c=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";function l(t){if(t)return t.matches(c)?t:t.querySelector(c)||void 0}function h(t,e){return e.find(function(e){return function(t,e){var n=e.from;if(void 0===e.to)return!1;if(n.length>t.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==t[r])return!1}return n.length===t.length}(t,e)})}function f(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n&&t[r].toLowerCase()===e[r].id;r++);return r}function d(t,e){for(var n,r=new g(t),o=!1,i=0;i<e.length;i++){var a=e[i].path;if(""===a[0])o=!0;else{for(var u=0,s=a;u<s.length;u++){var c=s[u],l=r.next();if(":"===c[0]){if(""===l)return null;((n=n||[])[i]||(n[i]={}))[c.slice(1)]=l}else if(l!==c)return null}o=!1}}return o&&o!==(""===r.next())?null:n?e.map(function(t,e){return{id:t.id,path:t.path,params:p(t.params,n[e])}}):e}function p(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign({},t,e):void 0}function m(t){for(var e=1,n=1,r=0,o=t;r<o.length;r++)for(var i=0,a=o[r].path;i<a.length;i++){var u=a[i];":"===u[0]?e+=Math.pow(1,n):""!==u&&(e+=Math.pow(2,n)),n++}return e}var g=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}();function v(t){return Array.from(t.children).filter(function(t){return"ION-ROUTE-REDIRECT"===t.tagName}).map(function(t){var e=y(t,"to");return{from:s(y(t,"from")),to:null==e?void 0:s(e)}})}function b(t){return function(t){for(var e=[],n=0,r=t;n<r.length;n++){w([],e,r[n])}return e}(function t(e,n){return void 0===n&&(n=e),Array.from(n.children).filter(function(t){return"ION-ROUTE"===t.tagName&&t.component}).map(function(n){var r=y(n,"component");if(null==r)throw new Error("component missing in ion-route");return{path:s(y(n,"url")),id:r.toLowerCase(),params:n.componentProps,children:t(e,n)}})}(t))}function y(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null}function w(t,e,n){var r=t.slice();if(r.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(var o=0,i=n.children;o<i.length;o++)w(r,e,i[o]);else e.push(r)}var _=function(){function t(){this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,(e=this.win,l(e.document.body)?Promise.resolve():new Promise(function(t){e.addEventListener("ionNavWillLoad",t,{once:!0})}))];case 1:return t.sent(),[4,this.onRoutesChanged()];case 2:return t.sent(),[2]}var e})})},t.prototype.componentDidLoad=function(){this.win.addEventListener("ionRouteRedirectChanged",e.debounce(this.onRedirectChanged.bind(this),10)),this.win.addEventListener("ionRouteDataChanged",e.debounce(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){var t=this.historyDirection(),e=this.getPath();return this.writeNavStateRoot(e,t)},t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,function(){return e.goBack()})},t.prototype.push=function(t,e){void 0===e&&(e="forward"),t.startsWith(".")&&(t=new URL(t,window.location.href).pathname);var n=s(t),r=R[e];return this.setPath(n,r),this.writeNavStateRoot(n,r)},t.prototype.goBack=function(){return this.win.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){this.getPath(),function(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=function(t){var e=[];t.forEach(function(t){return e.push.apply(e,t.path)});var n=t.map(function(t){return t.id});u(e),n.join(", ")},n=0,r=t;n<r.length;n++)e(r[n]);console.groupEnd()}(b(this.el)),function(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var r=n[e];r.to&&(u(r.from),u(r.to))}console.groupEnd()}(v(this.el))},t.prototype.navChanged=function(t){return __awaiter(this,void 0,void 0,function(){var e,n,r,o,i,a;return __generator(this,function(u){switch(u.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,function(t){return __awaiter(this,void 0,void 0,function(){var e,n,r,o;return __generator(this,function(i){switch(i.label){case 0:e=[],r=t,i.label=1;case 1:return(n=l(r))?[4,n.getRouteId()]:[3,3];case 2:return(o=i.sent())?(r=o.element,o.element=void 0,e.push(o),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}})})}(this.win.document.body)];case 1:return e=u.sent(),n=e.ids,r=e.outlet,o=b(this.el),(i=function(t,e){for(var n=null,r=0,o=t.map(function(t){return t.id}),i=0,a=e;i<a.length;i++){var u=a[i],s=f(o,u);s>r&&(n=u,r=s)}return n?n.map(function(e,n){return{id:e.id,path:e.path,params:p(e.params,t[n]&&t[n].params)}}):null}(n,o))?(a=function(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,a=o.path;i<a.length;i++){var u=a[i];if(":"===u[0]){var s=o.params&&o.params[u.slice(1)];if(!s)return null;e.push(s)}else""!==u&&e.push(u)}return e}(i))?(this.setPath(a,t),[4,this.safeWriteNavState(r,i,0,a,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",n.map(function(t){return t.id})),[2,!1]);case 2:return u.sent(),[2,!0]}})})},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&h(t,v(this.el))&&this.writeNavStateRoot(t,0)},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),0)},t.prototype.historyDirection=function(){null===this.win.history.state&&(this.state++,this.win.history.replaceState(this.state,this.win.document.title,this.win.document.location.href));var t=this.win.history.state,e=this.lastState;return this.lastState=t,t>e?1:t<e?-1:0},t.prototype.writeNavStateRoot=function(t,e){return __awaiter(this,void 0,void 0,function(){var n,r,o,i,a;return __generator(this,function(u){return t?(n=v(this.el),r=h(t,n),o=null,r&&(this.setPath(r.to,e),o=r.from,t=r.to),i=b(this.el),(a=function(t,e){for(var n=null,r=0,o=0,a=i;o<a.length;o++){var u=d(t,a[o]);if(null!==u){var s=m(u);s>r&&(r=s,n=u)}}return n}(t))?[2,this.safeWriteNavState(this.win.document.body,a,e,t,o)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])})})},t.prototype.safeWriteNavState=function(t,e,n,r,o,i){return void 0===i&&(i=0),__awaiter(this,void 0,void 0,function(){var a,u,s;return __generator(this,function(c){switch(c.label){case 0:return[4,this.lock()];case 1:a=c.sent(),u=!1,c.label=2;case 2:return c.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,r,o,i)];case 3:return u=c.sent(),[3,5];case 4:return s=c.sent(),console.error(s),[3,5];case 5:return a(),[2,u]}})})},t.prototype.lock=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise(function(t){return e=t}),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}})})},t.prototype.writeNavState=function(t,e,n,r,o,i){return void 0===i&&(i=0),__awaiter(this,void 0,void 0,function(){var a,u;return __generator(this,function(s){switch(s.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(a=this.routeChangeEvent(r,o))&&this.ionRouteWillChange.emit(a),[4,function t(e,n,r,o,i){return void 0===i&&(i=!1),__awaiter(this,void 0,void 0,function(){var a,u,s,c;return __generator(this,function(h){switch(h.label){case 0:return h.trys.push([0,6,,7]),a=l(e),o>=n.length||!a?[2,i]:[4,a.componentOnReady()];case 1:return h.sent(),[4,a.setRouteId((u=n[o]).id,u.params,r)];case 2:return(s=h.sent()).changed&&(r=0,i=!0),[4,t(s.element,n,r,o+1,i)];case 3:return i=h.sent(),s.markVisible?[4,s.markVisible()]:[3,5];case 4:h.sent(),h.label=5;case 5:return[2,i];case 6:return c=h.sent(),console.error(c),[2,!1];case 7:return[2]}})})}(t,e,n,i)]);case 1:return u=s.sent(),this.busy=!1,a&&this.ionRouteDidChange.emit(a),[2,u]}})})},t.prototype.setPath=function(t,e){this.state++,function(t,e,n,r,o,i){var a=u(s(e).concat(r));n&&(a="#"+a),1===o?t.pushState(i,"",a):t.replaceState(i,"",a)}(this.win.history,this.root,this.useHash,t,e,this.state)},t.prototype.getPath=function(){return function(t,e,n){var r=t.pathname;if(n){var o=t.hash;r="#"===o[0]?o.slice(1):""}return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(s(e),s(r))}(this.win.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,r=u(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:e?u(e):null,to:r}},Object.defineProperty(t,"is",{get:function(){return"ion-router"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{config:{context:"config"},el:{elementRef:!0},goBack:{method:!0},navChanged:{method:!0},printDebug:{method:!0},push:{method:!0},queue:{context:"queue"},root:{type:String,attr:"root"},useHash:{type:Boolean,attr:"use-hash"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteWillChange",method:"ionRouteWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRouteDidChange",method:"ionRouteDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:popstate",method:"onPopState"},{name:"document:ionBackButton",method:"onBackButton"}]},enumerable:!0,configurable:!0}),t}(),R={back:-1,root:0,forward:1},C=function(){function t(){this.animated=!0}return t.prototype.componentWillLoad=function(){this.ionNavWillLoad.emit()},t.prototype.componentDidUnload=function(){this.activeEl=this.activeComponent=void 0},t.prototype.setRoot=function(t,e,r){return __awaiter(this,void 0,void 0,function(){var o,i;return __generator(this,function(a){switch(a.label){case 0:return this.activeComponent===t?[2,!1]:(o=this.activeEl,[4,n.attachComponent(this.delegate,this.el,t,["ion-page","ion-page-invisible"],e)]);case 1:return i=a.sent(),this.activeComponent=t,this.activeEl=i,[4,this.commit(i,o,r)];case 2:return a.sent(),[4,n.detachComponent(this.delegate,o)];case 3:return a.sent(),[2,!0]}})})},t.prototype.commit=function(t,e,n){return __awaiter(this,void 0,void 0,function(){var r,o,i;return __generator(this,function(a){switch(a.label){case 0:return[4,this.lock()];case 1:r=a.sent(),o=!1,a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this.transition(t,e,n)];case 3:return o=a.sent(),[3,5];case 4:return i=a.sent(),console.error(i),[3,5];case 5:return r(),[2,o]}})})},t.prototype.setRouteId=function(t,e,n){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(r){switch(r.label){case 0:return[4,this.setRoot(t,e,{duration:0===n?0:void 0,direction:-1===n?"back":"forward"})];case 1:return[2,{changed:r.sent(),element:this.activeEl}]}})})},t.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){return[2,(t=this.activeEl)?{id:t.tagName,element:t}:void 0]})})},t.prototype.lock=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise(function(t){return e=t}),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}})})},t.prototype.transition=function(t,e,n){return __awaiter(this,void 0,void 0,function(){var o,i,a,u,s,c,l,h;return __generator(this,function(f){switch(f.label){case 0:return e===t?[2,!1]:(this.ionNavWillChange.emit(),n=n||{},i=(o=this).mode,a=o.queue,u=o.animationCtrl,s=o.win,c=o.el,l=this.animated&&this.config.getBoolean("animated",!0),h=this.animation||n.animationBuilder||this.config.get("navAnimation"),[4,r.transition(Object.assign({mode:i,queue:a,animated:l,animationCtrl:u,animationBuilder:h,window:s,enteringEl:t,leavingEl:e,baseEl:c},n))]);case 1:return f.sent(),this.ionNavDidChange.emit(),[2,!0]}})})},t.prototype.render=function(){return["ios"===this.mode&&o("div",{class:"nav-decor"}),o("slot",null)]},Object.defineProperty(t,"is",{get:function(){return"ion-router-outlet"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animation:{type:"Any",attr:"animation"},animationCtrl:{connect:"ion-animation-controller"},commit:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getRouteId:{method:!0},queue:{context:"queue"},setRoot:{method:!0},setRouteId:{method:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-router-outlet-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}.nav-decor.sc-ion-router-outlet{display:none}.show-decor.sc-ion-router-outlet-h   .nav-decor.sc-ion-router-outlet{left:0;right:0;top:0;bottom:0;display:block;position:absolute;background:#000;z-index:0;pointer-events:none}"},enumerable:!0,configurable:!0}),t}();t.IonRoute=i,t.IonRouteRedirect=a,t.IonRouter=_,t.IonRouterOutlet=C,Object.defineProperty(t,"__esModule",{value:!0})});