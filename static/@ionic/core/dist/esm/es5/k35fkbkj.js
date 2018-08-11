/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import{b as createThemedClasses}from"./chunk-f7b6af08.js";var SPLIT_PANE_MAIN="split-pane-main",SPLIT_PANE_SIDE="split-pane-side",QUERY={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},SplitPane=function(){function e(){this.visible=!1,this.disabled=!1,this.when=QUERY.md}return e.prototype.visibleChanged=function(e){var i={visible:e};this.ionChange.emit(i),this.ionSplitPaneVisible.emit(i)},e.prototype.componentDidLoad=function(){this._styleChildren(),this.whenChanged()},e.prototype.componentDidUnload=function(){this.rmL&&(this.rmL(),this.rmL=void 0)},e.prototype.whenChanged=function(){var e=this;if(!this.isServer)if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)this.visible=!1;else{var i=this.when;if("boolean"!=typeof i){var t=QUERY[i]||i;if(t&&0!==t.length){var n=function(i){return e.visible=i.matches},s=this.win.matchMedia(t);s.addListener(n),this.rmL=function(){return s.removeListener(n)},this.visible=s.matches}else this.visible=!1}else this.visible=i}},e.prototype.isVisible=function(){return this.visible},e.prototype.isPane=function(e){return!!this.visible&&e.parentElement===this.el&&e.classList.contains(SPLIT_PANE_SIDE)},e.prototype._styleChildren=function(){if(!this.isServer){for(var e=this.el.children,i=this.el.childElementCount,t=!1,n=0;n<i;n++){var s=e[n],a=s.hasAttribute("main");if(a){if(t)return void console.warn("split pane can not have more than one main node");t=!0}setPaneClass(s,a)}t||console.warn("split pane could not found any main node")}},e.prototype.hostData=function(){return{class:Object.assign({},createThemedClasses(this.mode,"split-pane"),{"split-pane-visible":this.visible})}},Object.defineProperty(e,"is",{get:function(){return"ion-split-pane"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},isPane:{method:!0},isServer:{context:"isServer"},isVisible:{method:!0},visible:{state:!0,watchCallbacks:["visibleChanged"]},when:{type:"Any",attr:"when",watchCallbacks:["whenChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionSplitPaneVisible",method:"ionSplitPaneVisible",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".split-pane{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side[side=start]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.split-pane-visible>.split-pane-side[side=left]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=right]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.split-pane-md.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:1px solid rgba(var(--ion-item-border-color-rgb,0,0,0),.13);border-left:0}.split-pane-md.split-pane-visible>.split-pane-side[side=right]{border-right:0;border-left:1px solid rgba(var(--ion-item-border-color-rgb,0,0,0),.13)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function setPaneClass(e,i){var t,n;i?(t=SPLIT_PANE_MAIN,n=SPLIT_PANE_SIDE):(t=SPLIT_PANE_SIDE,n=SPLIT_PANE_MAIN);var s=e.classList;s.add(t),s.remove(n)}export{SplitPane as IonSplitPane};