/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../ionic.core.js";var MIN_READS=2;function updateVDom(t,e,i,r){for(var n=0,o=t;n<o.length;n++){var s=o[n];s.change=0,s.d=!0}for(var l=[],a=r.offset+r.length,h=function(r){var n=i[r],o=t.find(function(t){return t.d&&t.cell===n});if(o){var s=e[r];s!==o.top&&(o.top=s,o.change=1),o.d=!1}else l.push(n)},c=r.offset;c<a;c++)h(c);for(var u=t.filter(function(t){return t.d}),d=function(i){var r=u.find(function(t){return t.d&&t.cell.type===i.type}),n=i.index;r?(r.d=!1,r.change=2,r.cell=i,r.top=e[n]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[n]})},p=0,f=l;p<f.length;p++)d(f[p]);t.filter(function(t){return t.d&&-9999!==t.top}).forEach(function(t){t.change=1,t.top=-9999})}function doRender(t,e,i,r){for(var n,o=Array.from(t.children).filter(function(t){return"TEMPLATE"!==t.tagName}),s=o.length,l=0;l<i.length;l++){var a=i[l],h=a.cell;if(2===a.change){if(l<s)e(n=o[l],h,l);else{var c=createNode(t,h.type);(n=e(c,h,l)||c).classList.add("virtual-item"),t.appendChild(n)}n.$ionCell=h}else n=o[l];0!==a.change&&(n.style.transform="translate3d(0,"+a.top+"px,0)");var u=h.visible;a.visible!==u&&(u?n.classList.remove("virtual-loading"):n.classList.add("virtual-loading"),a.visible=u),h.reads>0&&(r(h,n),h.reads--)}}function createNode(t,e){var i=getTemplate(t,e);return i?t.ownerDocument.importNode(i.content,!0).children[0]:null}function getTemplate(t,e){switch(e){case 0:return t.querySelector("template:not([name])");case 1:return t.querySelector("template[name=header]");case 2:return t.querySelector("template[name=footer]")}}function getViewport(t,e,i){return{top:Math.max(t-i,0),bottom:t+e+i}}function getRange(t,e,i){for(var r=e.top,n=e.bottom,o=0;o<t.length&&!(t[o]>r);o++);for(var s=Math.max(o-i-1,0);o<t.length&&!(t[o]>=n);o++);return{offset:s,length:Math.min(o+i,t.length)-s}}function getShouldUpdate(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length}function findCellIndex(t,e){return 0===e?0:t.findIndex(function(t){return t.index===e})}function inplaceUpdate(t,e,i){if(0===i&&e.length>=t.length)return e;for(var r=0;r<e.length;r++)t[r+i]=e[r];return t}function calcCells(t,e,i,r,n,o,s,l,a,h){for(var c=[],u=h+a,d=a;d<u;d++){var p,f=t[d];i&&null!=(p=i(f,d,t))&&c.push({i:l++,type:1,value:p,index:d,height:n,reads:MIN_READS,visible:!1}),c.push({i:l++,type:0,value:f,index:d,height:e?e(f,d):s,reads:e?0:MIN_READS,visible:!!e}),r&&null!=(p=r(f,d,t))&&c.push({i:l++,type:2,value:p,index:d,height:o,reads:2,visible:!1})}return c}function calcHeightIndex(t,e,i){for(var r=t[i],n=i;n<t.length;n++)t[n]=r,r+=e[n].height;return r}function resizeBuffer(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}function positionForIndex(t,e,i){var r=e.find(function(e){return 0===e.type&&e.index===t});return r?i[r.i]:-1}var VirtualScroll=function(){function t(){this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=40,this.approxFooterHeight=40}return t.prototype.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.componentDidLoad=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var t,e;return tslib_1.__generator(this,function(i){switch(i.label){case 0:return(t=this.el.closest("ion-content"))?[4,t.componentOnReady()]:(console.error("virtual-scroll must be used inside ion-content"),[2]);case 1:return i.sent(),this.contentEl=t,e=this,[4,t.getScrollElement()];case 2:return e.scrollEl=i.sent(),this.calcCells(),this.updateState(),[2]}})})},t.prototype.componentDidUpdate=function(){this.updateState()},t.prototype.componentDidUnload=function(){this.scrollEl=void 0},t.prototype.onScroll=function(){this.updateVirtualScroll()},t.prototype.onResize=function(){this.updateVirtualScroll()},t.prototype.positionForItem=function(t){return Promise.resolve(positionForIndex(t,this.cells,this.getHeightIndex()))},t.prototype.markDirty=function(t,e){if(void 0===e&&(e=-1),this.items){var i=-1===e?this.items.length-t:e,r=this.lastItemLen,n=0;if(t>0&&t<r)n=findCellIndex(this.cells,t);else if(0===t)n=0;else{if(t!==r)return void console.warn("bad values for markDirty");n=this.cells.length}var o=calcCells(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,n,t,i);this.cells=inplaceUpdate(this.cells,o,t),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}},t.prototype.markDirtyTail=function(){if(this.items){var t=this.lastItemLen;this.markDirty(t,this.items.length-t)}},t.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),this.queue.read(this.readVS.bind(this)),this.queue.write(this.writeVS.bind(this)))},t.prototype.readVS=function(){for(var t=this.contentEl,e=this.scrollEl,i=0,r=this.el;r&&r!==t;)i+=r.offsetTop,r=r.parentElement;this.viewportOffset=i,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)},t.prototype.writeVS=function(){var t=this.indexDirty,e=getViewport(this.currentScrollTop-this.viewportOffset,this.viewportHeight,100),i=this.getHeightIndex(),r=getRange(i,e,2);getShouldUpdate(t,this.range,r)&&(this.range=r,updateVDom(this.virtualDom,i,this.cells,r),this.nodeRender?doRender(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate())},t.prototype.updateCellHeight=function(t,e){var i=this,r=function(){if(e.$ionCell===t){var r=i.win.getComputedStyle(e),n=e.offsetHeight+parseFloat(r.getPropertyValue("margin-bottom"));i.setCellHeight(t,n)}};e&&e.componentOnReady?e.componentOnReady().then(r):r()},t.prototype.setCellHeight=function(t,e){var i=t.i;t===this.cells[i]&&(t.visible=!0,t.height!==e&&(t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))},t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return t.updateVirtualScroll()},100)},t.prototype.updateState=function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},t.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=calcCells(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)},t.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},t.prototype.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=resizeBuffer(this.heightIndex,this.cells.length),this.totalHeight=calcHeightIndex(this.heightIndex,this.cells,t),this.indexDirty=1/0},t.prototype.enableScrollEvents=function(t){this.scrollEl&&(this.isEnabled=t,this.enableListener(this,"scroll",t,this.scrollEl))},t.prototype.renderVirtualNode=function(t){var e=t.cell,i=e.value,r=e.index;switch(e.type){case 0:return this.renderItem(i,r);case 1:return this.renderHeader(i,r);case 2:return this.renderFooter(i,r)}},t.prototype.hostData=function(){return{style:{height:this.totalHeight+"px"}}},t.prototype.render=function(){var t=this;if(this.renderItem)return h(VirtualProxy,{dom:this.virtualDom},this.virtualDom.map(function(e){return t.renderVirtualNode(e)}))},Object.defineProperty(t,"is",{get:function(){return"ion-virtual-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{approxFooterHeight:{type:Number,attr:"approx-footer-height"},approxHeaderHeight:{type:Number,attr:"approx-header-height"},approxItemHeight:{type:Number,attr:"approx-item-height"},domRender:{type:"Any",attr:"dom-render"},el:{elementRef:!0},enableListener:{context:"enableListener"},footerFn:{type:"Any",attr:"footer-fn"},headerFn:{type:"Any",attr:"header-fn"},itemHeight:{type:"Any",attr:"item-height",watchCallbacks:["itemsChanged"]},items:{type:"Any",attr:"items",watchCallbacks:["itemsChanged"]},markDirty:{method:!0},markDirtyTail:{method:!0},nodeRender:{type:"Any",attr:"node-render"},positionForItem:{method:!0},queue:{context:"queue"},renderFooter:{type:"Any",attr:"render-footer"},renderHeader:{type:"Any",attr:"render-header"},renderItem:{type:"Any",attr:"render-item"},totalHeight:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",disabled:!0},{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.virtual-loading{opacity:0}.virtual-item{left:0;right:0;top:0;position:absolute;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"},enumerable:!0,configurable:!0}),t}(),VirtualProxy=function(t,e,i){var r=t.dom;return i.map(e,function(t,e){var i=r[e],n=t.vattrs||{},o=n.class||"";return o+="virtual-item ",i.visible||(o+="virtual-loading"),Object.assign({},t,{vattrs:Object.assign({},n,{class:o,style:Object.assign({},n.style,{transform:"translate3d(0,"+i.top+"px,0)"})})})})};export{VirtualScroll as IonVirtualScroll};