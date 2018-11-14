/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import{k as createThemedClasses}from"./chunk-b9ec67ac.js";var SPLIT_PANE_MAIN="split-pane-main",SPLIT_PANE_SIDE="split-pane-side",QUERY={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},SplitPane=function(){function e(){this.visible=!1,this.disabled=!1,this.when=QUERY.lg}return e.prototype.visibleChanged=function(e){var t={visible:e,isPane:this.isPane.bind(this)};this.ionChange.emit(t),this.ionSplitPaneVisible.emit(t)},e.prototype.componentDidLoad=function(){this.styleChildren(),this.updateState()},e.prototype.componentDidUnload=function(){this.rmL&&(this.rmL(),this.rmL=void 0)},e.prototype.updateState=function(){var e=this;if(!this.isServer)if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)this.visible=!1;else{var t=this.when;if("boolean"!=typeof t){var i=QUERY[t]||t;if(0!==i.length){var n=function(t){return e.visible=t.matches},s=this.win.matchMedia(i);s.addListener(n),this.rmL=function(){return s.removeListener(n)},this.visible=s.matches}else this.visible=!1}else this.visible=t}},e.prototype.isPane=function(e){return!!this.visible&&e.parentElement===this.el&&e.classList.contains(SPLIT_PANE_SIDE)},e.prototype.styleChildren=function(){if(!this.isServer){for(var e=this.el.children,t=this.el.childElementCount,i=!1,n=0;n<t;n++){var s=e[n],a=s.hasAttribute("main");if(a){if(i)return void console.warn("split pane can not have more than one main node");i=!0}setPaneClass(s,a)}i||console.warn("split pane could not found any main node")}},e.prototype.hostData=function(){return{class:Object.assign({},createThemedClasses(this.mode,"split-pane"),{"split-pane-visible":this.visible})}},Object.defineProperty(e,"is",{get:function(){return"ion-split-pane"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{disabled:{type:Boolean,attr:"disabled",watchCallbacks:["updateState"]},el:{elementRef:!0},isServer:{context:"isServer"},visible:{state:!0,watchCallbacks:["visibleChanged"]},when:{type:"Any",attr:"when",watchCallbacks:["updateState"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!1,cancelable:!0,composed:!0},{name:"ionSplitPaneVisible",method:"ionSplitPaneVisible",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".split-pane{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-ms-flex-order:1;order:1}.split-pane-md{--border:1px solid var(--ion-item-border-color,var(--ion-border-color,rgba(0,0,0,0.13)))}.split-pane-md.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-md.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function setPaneClass(e,t){var i,n;t?(i=SPLIT_PANE_MAIN,n=SPLIT_PANE_SIDE):(i=SPLIT_PANE_SIDE,n=SPLIT_PANE_MAIN);var s=e.classList;s.add(i),s.remove(n)}export{SplitPane as IonSplitPane};