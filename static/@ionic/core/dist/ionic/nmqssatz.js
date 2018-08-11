/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{a as e}from"./chunk-d3dac993.js";import{a}from"./chunk-f7b6af08.js";class s{constructor(){this.loaded=!1,this.active=!1,this.disabled=!1,this.selected=!1,this.show=!0,this.tabsHideOnSubPages=!1}selectedChanged(t){t&&this.ionSelect.emit()}componentWillLoad(){}onPropChanged(){this.ionTabMutated.emit()}getTabId(){return this.name?this.name:"string"==typeof this.component?this.component:null}async setActive(){await this.prepareLazyLoaded(),this.active=!0}prepareLazyLoaded(){return!this.loaded&&this.component?(this.loaded=!0,e(this.delegate,this.el,this.component,["ion-page"])):Promise.resolve()}hostData(){const{btnId:t,active:e,component:a}=this;return{"aria-labelledby":t,"aria-hidden":e?null:"true",role:"tabpanel",class:{"ion-page":!a,"tab-hidden":!e}}}render(){return t("slot",null)}static get is(){return"ion-tab"}static get encapsulation(){return"shadow"}static get properties(){return{active:{type:Boolean,attr:"active",mutable:!0},badge:{type:String,attr:"badge",watchCallbacks:["onPropChanged"]},badgeColor:{type:String,attr:"badge-color",watchCallbacks:["onPropChanged"]},btnId:{type:String,attr:"btn-id"},component:{type:String,attr:"component"},delegate:{type:"Any",attr:"delegate"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["onPropChanged"]},el:{elementRef:!0},getTabId:{method:!0},href:{type:String,attr:"href",watchCallbacks:["onPropChanged"]},icon:{type:String,attr:"icon",watchCallbacks:["onPropChanged"]},label:{type:String,attr:"label",watchCallbacks:["onPropChanged"]},name:{type:String,attr:"name"},selected:{type:Boolean,attr:"selected",watchCallbacks:["selectedChanged"]},setActive:{method:!0},show:{type:Boolean,attr:"show",watchCallbacks:["onPropChanged"]},tabsHideOnSubPages:{type:Boolean,attr:"tabs-hide-on-sub-pages"}}}static get events(){return[{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0},{name:"ionTabMutated",method:"ionTabMutated",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host(.tab-hidden){display:none!important}"}}class i{constructor(){this.keyFocus=!1,this.selected=!1}onKeyUp(){this.keyFocus=!0}onBlur(){this.keyFocus=!1}hostData(){const t=this.selected,e=!!this.label,s=!!this.icon,i=e&&!s,o=s&&!e,l=!!this.badge;return{role:"tab","aria-selected":t?"true":null,class:Object.assign({},a(this.color),{"tab-selected":t,"has-label":e,"has-icon":s,"has-label-only":i,"has-icon-only":o,"has-badge":l,"tab-button-disabled":this.disabled,focused:this.keyFocus})}}render(){const{icon:e,label:a,href:s,badge:i,badgeColor:o,mode:l}=this;return[t("a",{href:s||"#",class:"tab-button-native",onKeyUp:this.onKeyUp.bind(this),onBlur:this.onBlur.bind(this)},e&&t("ion-icon",{class:"tab-button-icon",icon:e,lazy:!1}),a&&t("span",{class:"tab-button-text"},a),i&&t("ion-badge",{class:"tab-badge",color:o},i),"md"===l&&t("ion-ripple-effect",{tapClick:!0}))]}static get is(){return"ion-tab-button"}static get encapsulation(){return"shadow"}static get properties(){return{badge:{type:String,attr:"badge"},badgeColor:{type:String,attr:"badge-color"},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},icon:{type:String,attr:"icon"},keyFocus:{state:!0},label:{type:String,attr:"label"},mode:{type:String,attr:"mode"},selected:{type:Boolean,attr:"selected"}}}static get style(){return":host{border-radius:0;margin:0;display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;height:100%;border:0;background:var(--background);color:var(--color);text-align:center;text-decoration:none;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;box-sizing:border-box}:host(.focused){background:var(--background-focused)}:host(.tab-selected),:host(:hover){color:var(--color-selected)}:host(.tab-hidden){display:none!important}a{text-decoration:none}.tab-button-native{margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;height:100%;border:0;background:0 0;color:inherit;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box}.tab-button-native:active,.tab-button-native:focus{outline:0}:host(.tab-button-disabled){pointer-events:none}:host(.tab-button-disabled) .tab-button-native{opacity:.4}.tab-button-icon,.tab-button-text{display:none;-ms-flex-item-align:center;align-self:center;min-width:26px;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.has-icon) .tab-button-icon,:host(.has-label) .tab-button-text{display:block}:host(.has-label-only) .tab-button-text{white-space:normal}:host(.has-icon-only) .tab-button-native,:host(.has-label-only) .tab-button-native{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tab-badge{right:4%;top:6%;right:calc(50% - 50px);padding:1px 6px;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;height:auto;font-size:12px;line-height:16px}:host(.has-icon) .tab-badge{right:calc(50% - 30px)}.layout-icon-start .tab-button{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout-icon-end .tab-button{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.layout-icon-bottom .tab-button{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.layout-icon-end .tab-button,.layout-icon-hide .tab-button,.layout-icon-start .tab-button,.layout-label-hide .tab-button{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.layout-icon-hide .tab-button-icon,.layout-label-hide .tab-button-text{display:none}.layout-icon-bottom .tab-badge,.layout-icon-end .tab-badge,.layout-icon-start .tab-badge{right:calc(50% - 50px)}:host{--color:var(--ion-tabbar-text-color, var(--ion-text-color-step-400, #666666));--color-selected:var(--ion-tabbar-text-color-active, #488aff);--background-focused:var(--ion-tabbar-background-color-focused, #dadada);max-width:168px;font-weight:400}.tab-button-native{padding:8px 12px 10px;display:-webkit-box;display:-ms-flexbox;display:flex}.tab-button-text{margin:0;-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out;font-size:12px;text-transform:none}:host(.tab-selected) .tab-button-text{-webkit-transform:scale3d(1.16667,1.16667,1);transform:scale3d(1.16667,1.16667,1);-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.tab-button-icon{-webkit-transform-origin:center center;transform-origin:center center;width:24px;height:24px;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out;font-size:24px}:host(.tab-selected) .tab-button-icon{-webkit-transform:translate3d(0,-2px,0);transform:translate3d(0,-2px,0)}.layout-icon-end .tab-button-md.tab-selected .tab-button-icon{-webkit-transform:translate3d(2px,0,0);transform:translate3d(2px,0,0)}.layout-icon-bottom .tab-button-md.tab-selected .tab-button-icon{-webkit-transform:translate3d(0,2px,0);transform:translate3d(0,2px,0)}.layout-icon-start .tab-button-md.tab-selected .tab-button-icon{-webkit-transform:translate3d(-2px,0,0);transform:translate3d(-2px,0,0)}.layout-icon-top .tab-button-md .has-icon .tab-button-text{margin-bottom:-2px}.layout-icon-bottom .tab-button-md .tab-button-text{-webkit-transform-origin:center top;transform-origin:center top;margin-top:-2px}.layout-icon-hide .tab-button-md,.layout-label-hide .tab-button-md{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}"}static get styleMode(){return"md"}}class o{constructor(){this.canScrollLeft=!1,this.canScrollRight=!1,this.keyboardVisible=!1,this.layout="icon-top",this.placement="bottom",this.scrollable=!1,this.tabs=[],this.highlight=!1,this.translucent=!1}selectedTabChanged(){this.scrollToSelectedButton(),this.updateHighlight()}onKeyboardWillHide(){setTimeout(()=>this.keyboardVisible=!1,50)}onKeyboardWillShow(){"bottom"===this.placement&&(this.keyboardVisible=!0)}onResize(){this.updateHighlight()}componentDidLoad(){this.updateBoundaries(),this.updateHighlight()}analyzeTabs(){const t=Array.from(this.doc.querySelectorAll("ion-tab-button")),e=this.scrollEl.scrollLeft,a=this.scrollEl.clientWidth;let s,i;for(const o of t){const t=o.offsetLeft,l=t+o.offsetWidth;t<e&&(s={tab:o,amount:t}),!i&&l>a+e&&(i={tab:o,amount:l-a})}return{previous:s,next:i}}getSelectedButton(){return Array.from(this.el.querySelectorAll("ion-tab-button")).find(t=>t.selected)}scrollToSelectedButton(){this.scrollEl&&this.scrollable&&this.queue.read(()=>{const t=this.getSelectedButton();if(t){const e=this.scrollEl.scrollLeft,a=this.scrollEl.clientWidth,s=t.offsetLeft,i=s+t.offsetWidth;let o=0;i>a+e?o=i-a:s<e&&(o=s),0!==o&&this.queue.write(()=>{this.scrollEl.scrollToPoint(o,0,250).then(()=>{this.updateBoundaries()})})}})}scrollByTab(t){this.queue.read(()=>{const{previous:e,next:a}=this.analyzeTabs(),s="right"===t?a:e,i=s&&s.amount;s&&i&&this.scrollEl.scrollToPoint(i,0,250).then(()=>{this.updateBoundaries()})})}updateBoundaries(){this.scrollEl&&this.scrollable&&(this.canScrollLeft=0!==this.scrollEl.scrollLeft,this.canScrollRight=this.scrollEl.scrollLeft<this.scrollEl.scrollWidth-this.scrollEl.offsetWidth)}updateHighlight(){this.highlight&&this.queue.read(()=>{const t=this.getSelectedButton(),e=this.el.querySelector("div.tabbar-highlight");t&&e&&(e.style.transform=`translate3d(${t.offsetLeft}px,0,0) scaleX(${t.offsetWidth})`)})}hostData(){const{color:t,translucent:e,layout:s,placement:i,keyboardVisible:o,scrollable:l}=this;return{role:"tablist","aria-hidden":o?"true":null,class:Object.assign({},a(t),{"tabbar-translucent":e,[`layout-${s}`]:!0,[`placement-${i}`]:!0,"tabbar-hidden":o,scrollable:l})}}render(){const e=this.selectedTab,a=this.highlight?t("div",{class:"animated tabbar-highlight"}):null,s=this.tabs.map(a=>t("ion-tab-button",{id:a.btnId,label:a.label,icon:a.icon,badge:a.badge,disabled:a.disabled,badgeColor:a.badgeColor,href:a.href,selected:e===a,mode:this.mode,color:this.color,"aria-hidden":a.show?null:"true",class:{"tab-hidden":!a.show},onClick:t=>{a.disabled||this.ionTabbarClick.emit(a),t.stopPropagation(),t.preventDefault()}}));return this.scrollable?[t("ion-button",{onClick:()=>this.scrollByTab("left"),fill:"clear",class:{inactive:!this.canScrollLeft}},t("ion-icon",{name:"arrow-dropleft",lazy:!1})),t("ion-scroll",{forceOverscroll:!1,ref:t=>this.scrollEl=t},s,a),t("ion-button",{onClick:()=>this.scrollByTab("right"),fill:"clear",class:{inactive:!this.canScrollRight}},t("ion-icon",{name:"arrow-dropright",lazy:!1}))]:[...s,a]}static get is(){return"ion-tabbar"}static get encapsulation(){return"shadow"}static get properties(){return{canScrollLeft:{state:!0},canScrollRight:{state:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},highlight:{type:Boolean,attr:"highlight"},keyboardVisible:{state:!0},layout:{type:String,attr:"layout"},mode:{type:String,attr:"mode"},placement:{type:String,attr:"placement"},queue:{context:"queue"},scrollable:{type:Boolean,attr:"scrollable"},selectedTab:{type:"Any",attr:"selected-tab",watchCallbacks:["selectedTabChanged"]},tabs:{type:"Any",attr:"tabs"},translucent:{type:Boolean,attr:"translucent"}}}static get events(){return[{name:"ionTabbarClick",method:"ionTabbarClick",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"body:keyboardWillHide",method:"onKeyboardWillHide"},{name:"body:keyboardWillShow",method:"onKeyboardWillShow"},{name:"window:resize",method:"onResize",passive:!0}]}static get style(){return":host{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:100%;background:var(--background);color:var(--color);z-index:10}:host(.ion-color),:host(.ion-color) ion-tab-button{--background:var(--ion-color-base);--color:rgba(var(--ion-color-contrast-rgb), 0.7);--color-selected:var(--ion-color-contrast)}:host(.tabbar-hidden){display:none!important}:host(.placement-top){-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}\@supports (padding-top:env(safe-area-inset-top)){:host(.placement-bottom){padding-bottom:env(safe-area-inset-bottom)}}.tabbar-highlight{left:0;bottom:0;-webkit-transform-origin:0 0;transform-origin:0 0;display:block;position:absolute;width:1px;height:2px;-webkit-transform:translateZ(0);transform:translateZ(0);background:currentColor}.tabbar-highlight.animated{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform}:host(.placement-top) .tabbar-highlight{bottom:0}:host(.placement-bottom) .tabbar-highlight{top:0}ion-scroll{overflow:hidden;margin:0 8px;max-width:650px}.scroll-inner{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}ion-button.inactive{visibility:hidden}:host{--background:var(--ion-tabbar-background-color, #f8f8f8);--color:var(--ion-tabbar-text-color-active, #488aff);height:56px;border-top:1px solid rgba(var(--ion-tabbar-border-color-rgb,0,0,0),.07);contain:strict}:host(.placement-top) .tab-button.tab-selected .tab-button-icon,:host(.placement-top) .tab-button.tab-selected .tab-button-text{-webkit-transform:inherit;transform:inherit}.scrollable .tab-button{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;overflow:hidden}"}static get styleMode(){return"md"}}class l{constructor(){this.ids=-1,this.transitioning=!1,this.tabsId=++n,this.tabs=[],this.tabbarHidden=!1,this.translucent=!1,this.scrollable=!1,this.useRouter=!1}componentWillLoad(){this.useRouter||(this.useRouter=!!this.doc.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.loadConfig("tabbarLayout","bottom"),this.loadConfig("tabbarLayout","icon-top"),this.loadConfig("tabbarHighlight",!1),this.initTabs(),this.ionNavWillLoad.emit()}async componentDidLoad(){await this.initSelect()}componentDidUnload(){this.tabs.length=0,this.selectedTab=this.leavingTab=void 0}onTabMutated(){this.el.forceUpdate()}onTabClicked(t){const e=t.detail;if(this.useRouter&&null!=e.href){const t=this.doc.querySelector("ion-router");t&&t.push(e.href)}else this.select(e)}async select(t){const e=this.getTab(t);return!!this.shouldSwitch(e)&&(await this.setActive(e),await this.notifyRouter(),this.tabSwitch(),!0)}async setRouteId(t){const e=this.getTab(t);return this.shouldSwitch(e)?(await this.setActive(e),{changed:!0,element:this.selectedTab,markVisible:()=>this.tabSwitch()}):{changed:!1,element:this.selectedTab}}getRouteId(){const t=this.selectedTab&&this.selectedTab.getTabId();return t?{id:t,element:this.selectedTab}:void 0}getTab(t){return"string"==typeof t?this.tabs.find(e=>e.getTabId()===t):"number"==typeof t?this.tabs[t]:t}getSelected(){return this.selectedTab}initTabs(){(this.tabs=Array.from(this.el.querySelectorAll("ion-tab"))).forEach(t=>{const e=`t-${this.tabsId}-${++this.ids}`;t.btnId="tab-"+e,t.id="tabpanel-"+e})}async initSelect(){const t=this.tabs;if(this.useRouter)return;const e=t.find(t=>t.selected)||t.find(t=>t.show&&!t.disabled);for(const a of t)a!==e&&(a.selected=!1);e&&await e.setActive(),this.selectedTab=e,e&&(e.selected=!0,e.active=!0)}loadConfig(t,e){void 0===this[t]&&(this[t]=this.config.get(t,e))}setActive(t){if(this.transitioning)return Promise.reject("transitioning already happening");if(!t)return Promise.reject("no tab is selected");for(const e of this.tabs)t!==e&&(e.selected=!1);return this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionNavWillChange.emit(),t.setActive()}tabSwitch(){const t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&(t.selected=!0,e!==t&&(e&&(e.active=!1),this.ionChange.emit({tab:t}),this.ionNavDidChange.emit()))}notifyRouter(){if(this.useRouter){const t=this.doc.querySelector("ion-router");if(t)return t.navChanged(1)}return Promise.resolve(!1)}shouldSwitch(t){const e=this.selectedTab;return!(!t||t===e||this.transitioning)}hostData(){return{class:a(this.color)}}render(){const e=[t("div",{class:"tabs-inner"},t("slot",null))];return this.tabbarHidden||e.push(t("ion-tabbar",{tabs:this.tabs.slice(),color:this.color,selectedTab:this.selectedTab,highlight:this.tabbarHighlight,placement:this.tabbarPlacement,layout:this.tabbarLayout,translucent:this.translucent,scrollable:this.scrollable})),e}static get is(){return"ion-tabs"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},doc:{context:"document"},el:{elementRef:!0},getRouteId:{method:!0},getSelected:{method:!0},getTab:{method:!0},name:{type:String,attr:"name"},scrollable:{type:Boolean,attr:"scrollable"},select:{method:!0},selectedTab:{state:!0},setRouteId:{method:!0},tabbarHidden:{type:Boolean,attr:"tabbar-hidden"},tabbarHighlight:{type:Boolean,attr:"tabbar-highlight",mutable:!0},tabbarLayout:{type:String,attr:"tabbar-layout",mutable:!0},tabbarPlacement:{type:String,attr:"tabbar-placement",mutable:!0},tabs:{state:!0},translucent:{type:Boolean,attr:"translucent"},useRouter:{type:Boolean,attr:"use-router",mutable:!0}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionTabMutated",method:"onTabMutated"},{name:"ionTabbarClick",method:"onTabClicked"}]}static get style(){return":host{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;contain:layout size style}"}}let n=-1;export{s as IonTab,i as IonTabButton,o as IonTabbar,l as IonTabs};