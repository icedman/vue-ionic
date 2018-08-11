/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(a,r){function i(t){try{s(o.next(t))}catch(t){r(t)}}function l(t){try{s(o.throw(t))}catch(t){r(t)}}function s(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(i,l)}s((o=o.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,o,a,r,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(a=2&r[0]?o.return:r[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,r[1])).done)return a;switch(o=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,o=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){i=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){i.label=r[1];break}if(6===r[0]&&i.label<a[1]){i.label=a[1],a=r;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(r);break}a[2]&&i.ops.pop(),i.trys.pop();continue}r=e.call(t,i)}catch(t){r=[6,t],o=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}};import{h}from"./ionic.core.js";import{a as attachComponent}from"./chunk-d3dac993.js";import{a as createColorClasses}from"./chunk-f7b6af08.js";var Tab=function(){function t(){this.loaded=!1,this.active=!1,this.disabled=!1,this.selected=!1,this.show=!0,this.tabsHideOnSubPages=!1}return t.prototype.selectedChanged=function(t){t&&this.ionSelect.emit()},t.prototype.componentWillLoad=function(){},t.prototype.onPropChanged=function(){this.ionTabMutated.emit()},t.prototype.getTabId=function(){return this.name?this.name:"string"==typeof this.component?this.component:null},t.prototype.setActive=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.prepareLazyLoaded()];case 1:return t.sent(),this.active=!0,[2]}})})},t.prototype.prepareLazyLoaded=function(){return!this.loaded&&this.component?(this.loaded=!0,attachComponent(this.delegate,this.el,this.component,["ion-page"])):Promise.resolve()},t.prototype.hostData=function(){var t=this.btnId,e=this.active;return{"aria-labelledby":t,"aria-hidden":e?null:"true",role:"tabpanel",class:{"ion-page":!this.component,"tab-hidden":!e}}},t.prototype.render=function(){return h("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-tab"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{active:{type:Boolean,attr:"active",mutable:!0},badge:{type:String,attr:"badge",watchCallbacks:["onPropChanged"]},badgeColor:{type:String,attr:"badge-color",watchCallbacks:["onPropChanged"]},btnId:{type:String,attr:"btn-id"},component:{type:String,attr:"component"},delegate:{type:"Any",attr:"delegate"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["onPropChanged"]},el:{elementRef:!0},getTabId:{method:!0},href:{type:String,attr:"href",watchCallbacks:["onPropChanged"]},icon:{type:String,attr:"icon",watchCallbacks:["onPropChanged"]},label:{type:String,attr:"label",watchCallbacks:["onPropChanged"]},name:{type:String,attr:"name"},selected:{type:Boolean,attr:"selected",watchCallbacks:["selectedChanged"]},setActive:{method:!0},show:{type:Boolean,attr:"show",watchCallbacks:["onPropChanged"]},tabsHideOnSubPages:{type:Boolean,attr:"tabs-hide-on-sub-pages"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0},{name:"ionTabMutated",method:"ionTabMutated",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".tab-hidden.sc-ion-tab-h{display:none!important}"},enumerable:!0,configurable:!0}),t}(),TabButton=function(){function t(){this.keyFocus=!1,this.selected=!1}return t.prototype.onKeyUp=function(){this.keyFocus=!0},t.prototype.onBlur=function(){this.keyFocus=!1},t.prototype.hostData=function(){var t=this.selected,e=!!this.label,n=!!this.icon,o=e&&!n,a=n&&!e,r=!!this.badge;return{role:"tab","aria-selected":t?"true":null,class:Object.assign({},createColorClasses(this.color),{"tab-selected":t,"has-label":e,"has-icon":n,"has-label-only":o,"has-icon-only":a,"has-badge":r,"tab-button-disabled":this.disabled,focused:this.keyFocus})}},t.prototype.render=function(){var t=this,e=t.icon,n=t.label,o=t.href,a=t.badge,r=t.badgeColor,i=t.mode;return[h("a",{href:o||"#",class:"tab-button-native",onKeyUp:this.onKeyUp.bind(this),onBlur:this.onBlur.bind(this)},e&&h("ion-icon",{class:"tab-button-icon",icon:e,lazy:!1}),n&&h("span",{class:"tab-button-text"},n),a&&h("ion-badge",{class:"tab-badge",color:r},a),"md"===i&&h("ion-ripple-effect",{tapClick:!0}))]},Object.defineProperty(t,"is",{get:function(){return"ion-tab-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{badge:{type:String,attr:"badge"},badgeColor:{type:String,attr:"badge-color"},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},icon:{type:String,attr:"icon"},keyFocus:{state:!0},label:{type:String,attr:"label"},mode:{type:String,attr:"mode"},selected:{type:Boolean,attr:"selected"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-tab-button-md-h{border-radius:0;margin:0;display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;height:100%;border:0;background:var(--background);color:var(--color);text-align:center;text-decoration:none;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;box-sizing:border-box}.focused.sc-ion-tab-button-md-h{background:var(--background-focused)}.tab-selected.sc-ion-tab-button-md-h, .sc-ion-tab-button-md-h:hover{color:var(--color-selected)}.tab-hidden.sc-ion-tab-button-md-h{display:none!important}a.sc-ion-tab-button-md{text-decoration:none}.tab-button-native.sc-ion-tab-button-md{margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;height:100%;border:0;background:0 0;color:inherit;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box}.tab-button-native.sc-ion-tab-button-md:active, .tab-button-native.sc-ion-tab-button-md:focus{outline:0}.tab-button-disabled.sc-ion-tab-button-md-h{pointer-events:none}.tab-button-disabled.sc-ion-tab-button-md-h   .tab-button-native.sc-ion-tab-button-md{opacity:.4}.tab-button-icon.sc-ion-tab-button-md, .tab-button-text.sc-ion-tab-button-md{display:none;-ms-flex-item-align:center;align-self:center;min-width:26px;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.has-icon.sc-ion-tab-button-md-h   .tab-button-icon.sc-ion-tab-button-md, .has-label.sc-ion-tab-button-md-h   .tab-button-text.sc-ion-tab-button-md{display:block}.has-label-only.sc-ion-tab-button-md-h   .tab-button-text.sc-ion-tab-button-md{white-space:normal}.has-icon-only.sc-ion-tab-button-md-h   .tab-button-native.sc-ion-tab-button-md, .has-label-only.sc-ion-tab-button-md-h   .tab-button-native.sc-ion-tab-button-md{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tab-badge.sc-ion-tab-button-md{right:4%;top:6%;right:calc(50% - 50px);padding:1px 6px;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;height:auto;font-size:12px;line-height:16px}.has-icon.sc-ion-tab-button-md-h   .tab-badge.sc-ion-tab-button-md{right:calc(50% - 30px)}.layout-icon-start.sc-ion-tab-button-md   .tab-button.sc-ion-tab-button-md{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout-icon-end.sc-ion-tab-button-md   .tab-button.sc-ion-tab-button-md{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.layout-icon-bottom.sc-ion-tab-button-md   .tab-button.sc-ion-tab-button-md{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.layout-icon-end.sc-ion-tab-button-md   .tab-button.sc-ion-tab-button-md, .layout-icon-hide.sc-ion-tab-button-md   .tab-button.sc-ion-tab-button-md, .layout-icon-start.sc-ion-tab-button-md   .tab-button.sc-ion-tab-button-md, .layout-label-hide.sc-ion-tab-button-md   .tab-button.sc-ion-tab-button-md{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.layout-icon-hide.sc-ion-tab-button-md   .tab-button-icon.sc-ion-tab-button-md, .layout-label-hide.sc-ion-tab-button-md   .tab-button-text.sc-ion-tab-button-md{display:none}.layout-icon-bottom.sc-ion-tab-button-md   .tab-badge.sc-ion-tab-button-md, .layout-icon-end.sc-ion-tab-button-md   .tab-badge.sc-ion-tab-button-md, .layout-icon-start.sc-ion-tab-button-md   .tab-badge.sc-ion-tab-button-md{right:calc(50% - 50px)}.sc-ion-tab-button-md-h{--color:var(--ion-tabbar-text-color, var(--ion-text-color-step-400, #666666));--color-selected:var(--ion-tabbar-text-color-active, #488aff);--background-focused:var(--ion-tabbar-background-color-focused, #dadada);max-width:168px;font-weight:400}.tab-button-native.sc-ion-tab-button-md{padding:8px 12px 10px;display:-webkit-box;display:-ms-flexbox;display:flex}.tab-button-text.sc-ion-tab-button-md{margin:0;-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out;font-size:12px;text-transform:none}.tab-selected.sc-ion-tab-button-md-h   .tab-button-text.sc-ion-tab-button-md{-webkit-transform:scale3d(1.16667,1.16667,1);transform:scale3d(1.16667,1.16667,1);-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.tab-button-icon.sc-ion-tab-button-md{-webkit-transform-origin:center center;transform-origin:center center;width:24px;height:24px;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out;font-size:24px}.tab-selected.sc-ion-tab-button-md-h   .tab-button-icon.sc-ion-tab-button-md{-webkit-transform:translate3d(0,-2px,0);transform:translate3d(0,-2px,0)}.layout-icon-end.sc-ion-tab-button-md   .tab-button-md.tab-selected.sc-ion-tab-button-md   .tab-button-icon.sc-ion-tab-button-md{-webkit-transform:translate3d(2px,0,0);transform:translate3d(2px,0,0)}.layout-icon-bottom.sc-ion-tab-button-md   .tab-button-md.tab-selected.sc-ion-tab-button-md   .tab-button-icon.sc-ion-tab-button-md{-webkit-transform:translate3d(0,2px,0);transform:translate3d(0,2px,0)}.layout-icon-start.sc-ion-tab-button-md   .tab-button-md.tab-selected.sc-ion-tab-button-md   .tab-button-icon.sc-ion-tab-button-md{-webkit-transform:translate3d(-2px,0,0);transform:translate3d(-2px,0,0)}.layout-icon-top.sc-ion-tab-button-md   .tab-button-md.sc-ion-tab-button-md   .has-icon.sc-ion-tab-button-md   .tab-button-text.sc-ion-tab-button-md{margin-bottom:-2px}.layout-icon-bottom.sc-ion-tab-button-md   .tab-button-md.sc-ion-tab-button-md   .tab-button-text.sc-ion-tab-button-md{-webkit-transform-origin:center top;transform-origin:center top;margin-top:-2px}.layout-icon-hide.sc-ion-tab-button-md   .tab-button-md.sc-ion-tab-button-md, .layout-label-hide.sc-ion-tab-button-md   .tab-button-md.sc-ion-tab-button-md{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),Tabbar=function(){function t(){this.canScrollLeft=!1,this.canScrollRight=!1,this.keyboardVisible=!1,this.layout="icon-top",this.placement="bottom",this.scrollable=!1,this.tabs=[],this.highlight=!1,this.translucent=!1}return t.prototype.selectedTabChanged=function(){this.scrollToSelectedButton(),this.updateHighlight()},t.prototype.onKeyboardWillHide=function(){var t=this;setTimeout(function(){return t.keyboardVisible=!1},50)},t.prototype.onKeyboardWillShow=function(){"bottom"===this.placement&&(this.keyboardVisible=!0)},t.prototype.onResize=function(){this.updateHighlight()},t.prototype.componentDidLoad=function(){this.updateBoundaries(),this.updateHighlight()},t.prototype.analyzeTabs=function(){for(var t,e,n=Array.from(this.doc.querySelectorAll("ion-tab-button")),o=this.scrollEl.scrollLeft,a=this.scrollEl.clientWidth,r=0,i=n;r<i.length;r++){var l=i[r],s=l.offsetLeft,c=s+l.offsetWidth;s<o&&(t={tab:l,amount:s}),!e&&c>a+o&&(e={tab:l,amount:c-a})}return{previous:t,next:e}},t.prototype.getSelectedButton=function(){return Array.from(this.el.querySelectorAll("ion-tab-button")).find(function(t){return t.selected})},t.prototype.scrollToSelectedButton=function(){var t=this;this.scrollEl&&this.scrollable&&this.queue.read(function(){var e=t.getSelectedButton();if(e){var n=t.scrollEl.scrollLeft,o=t.scrollEl.clientWidth,a=e.offsetLeft,r=a+e.offsetWidth,i=0;r>o+n?i=r-o:a<n&&(i=a),0!==i&&t.queue.write(function(){t.scrollEl.scrollToPoint(i,0,250).then(function(){t.updateBoundaries()})})}})},t.prototype.scrollByTab=function(t){var e=this;this.queue.read(function(){var n=e.analyzeTabs(),o=n.previous,a=n.next,r="right"===t?a:o,i=r&&r.amount;r&&i&&e.scrollEl.scrollToPoint(i,0,250).then(function(){e.updateBoundaries()})})},t.prototype.updateBoundaries=function(){this.scrollEl&&this.scrollable&&(this.canScrollLeft=0!==this.scrollEl.scrollLeft,this.canScrollRight=this.scrollEl.scrollLeft<this.scrollEl.scrollWidth-this.scrollEl.offsetWidth)},t.prototype.updateHighlight=function(){var t=this;this.highlight&&this.queue.read(function(){var e=t.getSelectedButton(),n=t.el.querySelector("div.tabbar-highlight");e&&n&&(n.style.transform="translate3d("+e.offsetLeft+"px,0,0) scaleX("+e.offsetWidth+")")})},t.prototype.hostData=function(){var t,e=this,n=e.color,o=e.translucent,a=e.layout,r=e.placement,i=e.keyboardVisible,l=e.scrollable;return{role:"tablist","aria-hidden":i?"true":null,class:Object.assign({},createColorClasses(n),(t={"tabbar-translucent":o},t["layout-"+a]=!0,t["placement-"+r]=!0,t["tabbar-hidden"]=i,t.scrollable=l,t))}},t.prototype.render=function(){var t=this,e=this.selectedTab,n=this.highlight?h("div",{class:"animated tabbar-highlight"}):null,o=this.tabs.map(function(n){return h("ion-tab-button",{id:n.btnId,label:n.label,icon:n.icon,badge:n.badge,disabled:n.disabled,badgeColor:n.badgeColor,href:n.href,selected:e===n,mode:t.mode,color:t.color,"aria-hidden":n.show?null:"true",class:{"tab-hidden":!n.show},onClick:function(e){n.disabled||t.ionTabbarClick.emit(n),e.stopPropagation(),e.preventDefault()}})});return this.scrollable?[h("ion-button",{onClick:function(){return t.scrollByTab("left")},fill:"clear",class:{inactive:!this.canScrollLeft}},h("ion-icon",{name:"arrow-dropleft",lazy:!1})),h("ion-scroll",{forceOverscroll:!1,ref:function(e){return t.scrollEl=e}},o,n),h("ion-button",{onClick:function(){return t.scrollByTab("right")},fill:"clear",class:{inactive:!this.canScrollRight}},h("ion-icon",{name:"arrow-dropright",lazy:!1}))]:o.concat([n])},Object.defineProperty(t,"is",{get:function(){return"ion-tabbar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{canScrollLeft:{state:!0},canScrollRight:{state:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},highlight:{type:Boolean,attr:"highlight"},keyboardVisible:{state:!0},layout:{type:String,attr:"layout"},mode:{type:String,attr:"mode"},placement:{type:String,attr:"placement"},queue:{context:"queue"},scrollable:{type:Boolean,attr:"scrollable"},selectedTab:{type:"Any",attr:"selected-tab",watchCallbacks:["selectedTabChanged"]},tabs:{type:"Any",attr:"tabs"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionTabbarClick",method:"ionTabbarClick",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:keyboardWillHide",method:"onKeyboardWillHide"},{name:"body:keyboardWillShow",method:"onKeyboardWillShow"},{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-tabbar-md-h{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:100%;background:var(--background);color:var(--color);z-index:10}.ion-color.sc-ion-tabbar-md-h, .ion-color.sc-ion-tabbar-md-h   ion-tab-button.sc-ion-tabbar-md{--background:var(--ion-color-base);--color:rgba(var(--ion-color-contrast-rgb), 0.7);--color-selected:var(--ion-color-contrast)}.tabbar-hidden.sc-ion-tabbar-md-h{display:none!important}.placement-top.sc-ion-tabbar-md-h{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}\@supports (padding-top:env(safe-area-inset-top)){.placement-bottom.sc-ion-tabbar-md-h{padding-bottom:env(safe-area-inset-bottom)}}.tabbar-highlight.sc-ion-tabbar-md{left:0;bottom:0;-webkit-transform-origin:0 0;transform-origin:0 0;display:block;position:absolute;width:1px;height:2px;-webkit-transform:translateZ(0);transform:translateZ(0);background:currentColor}.tabbar-highlight.animated.sc-ion-tabbar-md{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform}.placement-top.sc-ion-tabbar-md-h   .tabbar-highlight.sc-ion-tabbar-md{bottom:0}.placement-bottom.sc-ion-tabbar-md-h   .tabbar-highlight.sc-ion-tabbar-md{top:0}ion-scroll.sc-ion-tabbar-md{overflow:hidden;margin:0 8px;max-width:650px}.scroll-inner.sc-ion-tabbar-md{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}ion-button.inactive.sc-ion-tabbar-md{visibility:hidden}.sc-ion-tabbar-md-h{--background:var(--ion-tabbar-background-color, #f8f8f8);--color:var(--ion-tabbar-text-color-active, #488aff);height:56px;border-top:1px solid rgba(var(--ion-tabbar-border-color-rgb,0,0,0),.07);contain:strict}.placement-top.sc-ion-tabbar-md-h   .tab-button.tab-selected.sc-ion-tabbar-md   .tab-button-icon.sc-ion-tabbar-md, .placement-top.sc-ion-tabbar-md-h   .tab-button.tab-selected.sc-ion-tabbar-md   .tab-button-text.sc-ion-tabbar-md{-webkit-transform:inherit;transform:inherit}.scrollable.sc-ion-tabbar-md   .tab-button.sc-ion-tabbar-md{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;overflow:hidden}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),Tabs=function(){function t(){this.ids=-1,this.transitioning=!1,this.tabsId=++tabIds,this.tabs=[],this.tabbarHidden=!1,this.translucent=!1,this.scrollable=!1,this.useRouter=!1}return t.prototype.componentWillLoad=function(){this.useRouter||(this.useRouter=!!this.doc.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.loadConfig("tabbarLayout","bottom"),this.loadConfig("tabbarLayout","icon-top"),this.loadConfig("tabbarHighlight",!1),this.initTabs(),this.ionNavWillLoad.emit()},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.initSelect()];case 1:return t.sent(),[2]}})})},t.prototype.componentDidUnload=function(){this.tabs.length=0,this.selectedTab=this.leavingTab=void 0},t.prototype.onTabMutated=function(){this.el.forceUpdate()},t.prototype.onTabClicked=function(t){var e=t.detail;if(this.useRouter&&null!=e.href){var n=this.doc.querySelector("ion-router");n&&n.push(e.href)}else this.select(e)},t.prototype.select=function(t){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(n){switch(n.label){case 0:return e=this.getTab(t),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,!1];case 1:return n.sent(),[4,this.notifyRouter()];case 2:return n.sent(),this.tabSwitch(),[2,!0]}})})},t.prototype.setRouteId=function(t){return __awaiter(this,void 0,void 0,function(){var e,n=this;return __generator(this,function(o){switch(o.label){case 0:return e=this.getTab(t),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,{changed:!1,element:this.selectedTab}];case 1:return o.sent(),[2,{changed:!0,element:this.selectedTab,markVisible:function(){return n.tabSwitch()}}]}})})},t.prototype.getRouteId=function(){var t=this.selectedTab&&this.selectedTab.getTabId();return t?{id:t,element:this.selectedTab}:void 0},t.prototype.getTab=function(t){return"string"==typeof t?this.tabs.find(function(e){return e.getTabId()===t}):"number"==typeof t?this.tabs[t]:t},t.prototype.getSelected=function(){return this.selectedTab},t.prototype.initTabs=function(){var t=this;(this.tabs=Array.from(this.el.querySelectorAll("ion-tab"))).forEach(function(e){var n="t-"+t.tabsId+"-"+ ++t.ids;e.btnId="tab-"+n,e.id="tabpanel-"+n})},t.prototype.initSelect=function(){return __awaiter(this,void 0,void 0,function(){var t,e,n,o,a;return __generator(this,function(r){switch(r.label){case 0:if(t=this.tabs,this.useRouter)return[2];for(e=t.find(function(t){return t.selected})||t.find(function(t){return t.show&&!t.disabled}),n=0,o=t;n<o.length;n++)(a=o[n])!==e&&(a.selected=!1);return e?[4,e.setActive()]:[3,2];case 1:r.sent(),r.label=2;case 2:return this.selectedTab=e,e&&(e.selected=!0,e.active=!0),[2]}})})},t.prototype.loadConfig=function(t,e){void 0===this[t]&&(this[t]=this.config.get(t,e))},t.prototype.setActive=function(t){if(this.transitioning)return Promise.reject("transitioning already happening");if(!t)return Promise.reject("no tab is selected");for(var e=0,n=this.tabs;e<n.length;e++){var o=n[e];t!==o&&(o.selected=!1)}return this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionNavWillChange.emit(),t.setActive()},t.prototype.tabSwitch=function(){var t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&(t.selected=!0,e!==t&&(e&&(e.active=!1),this.ionChange.emit({tab:t}),this.ionNavDidChange.emit()))},t.prototype.notifyRouter=function(){if(this.useRouter){var t=this.doc.querySelector("ion-router");if(t)return t.navChanged(1)}return Promise.resolve(!1)},t.prototype.shouldSwitch=function(t){var e=this.selectedTab;return!(!t||t===e||this.transitioning)},t.prototype.hostData=function(){return{class:createColorClasses(this.color)}},t.prototype.render=function(){var t=[h("div",{class:"tabs-inner"},h("slot",null))];return this.tabbarHidden||t.push(h("ion-tabbar",{tabs:this.tabs.slice(),color:this.color,selectedTab:this.selectedTab,highlight:this.tabbarHighlight,placement:this.tabbarPlacement,layout:this.tabbarLayout,translucent:this.translucent,scrollable:this.scrollable})),t},Object.defineProperty(t,"is",{get:function(){return"ion-tabs"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},doc:{context:"document"},el:{elementRef:!0},getRouteId:{method:!0},getSelected:{method:!0},getTab:{method:!0},name:{type:String,attr:"name"},scrollable:{type:Boolean,attr:"scrollable"},select:{method:!0},selectedTab:{state:!0},setRouteId:{method:!0},tabbarHidden:{type:Boolean,attr:"tabbar-hidden"},tabbarHighlight:{type:Boolean,attr:"tabbar-highlight",mutable:!0},tabbarLayout:{type:String,attr:"tabbar-layout",mutable:!0},tabbarPlacement:{type:String,attr:"tabbar-placement",mutable:!0},tabs:{state:!0},translucent:{type:Boolean,attr:"translucent"},useRouter:{type:Boolean,attr:"use-router",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionTabMutated",method:"onTabMutated"},{name:"ionTabbarClick",method:"onTabClicked"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-tabs-h{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner.sc-ion-tabs{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;contain:layout size style}"},enumerable:!0,configurable:!0}),t}(),tabIds=-1;export{Tab as IonTab,TabButton as IonTabButton,Tabbar as IonTabbar,Tabs as IonTabs};