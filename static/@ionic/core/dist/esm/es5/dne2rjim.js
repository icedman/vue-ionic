/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))(function(n,i){function s(t){try{a(o.next(t))}catch(t){i(t)}}function l(t){try{a(o.throw(t))}catch(t){i(t)}}function a(t){t.done?n(t.value):new r(function(e){e(t.value)}).then(s,l)}a((o=o.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var r,o,n,i,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(n=2&i[0]?o.return:i[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,i[1])).done)return n;switch(o=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){s.label=i[1];break}if(6===i[0]&&s.label<n[1]){s.label=n[1],n=i;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(i);break}n[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],o=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};import{a as hapticSelectionChanged,b as hapticSelectionEnd,c as hapticSelectionStart}from"./chunk-db5a015e.js";import{b as createThemedClasses}from"./chunk-f7b6af08.js";var ReorderGroup=function(){function t(){this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.activated=!1,this.disabled=!0}return t.prototype.disabledChanged=function(){this.gesture&&(this.gesture.disabled=this.disabled)},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(r){switch(r.label){case 0:return(t=this.el.closest("ion-content"))?[4,t.componentOnReady()]:[3,2];case 1:r.sent(),this.scrollEl=t.getScrollElement(),r.label=2;case 2:return e=this,[4,import("./gesture.js")];case 3:return e.gesture=r.sent().create({el:this.doc.body,queue:this.queue,gestureName:"reorder",gesturePriority:30,disableScroll:!0,threshold:0,direction:"y",passive:!1,canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this)}),this.disabledChanged(),[2]}})})},t.prototype.componentDidUnload=function(){this.onDragEnd()},t.prototype.canStart=function(t){if(this.selectedItemEl)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var r=findReorderItem(e,this.el);return r?(t.data=r,!0):(console.error("reorder node not found"),!1)},t.prototype.onDragStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;var o=this.el.children;if(o&&0!==o.length){for(var n=0,i=0;i<o.length;i++){var s=o[i];n+=s.offsetHeight,r.push(n),s.$ionIndex=i}var l=this.el.getBoundingClientRect();if(this.containerTop=l.top,this.containerBottom=l.bottom,this.scrollEl){var a=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=a.top+AUTO_SCROLL_MARGIN,this.scrollElBottom=a.bottom-AUTO_SCROLL_MARGIN}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=indexForItem(e),this.selectedItemHeight=e.offsetHeight,this.activated=!0,e.classList.add(ITEM_REORDER_SELECTED),hapticSelectionStart()}},t.prototype.onDragMove=function(t){var e=this.selectedItemEl;if(e){var r=this.autoscroll(t.currentY),o=this.containerTop-r,n=this.containerBottom-r,i=Math.max(o,Math.min(t.currentY,n)),s=r+i-t.startY,l=i-o,a=this.itemIndexForTop(l);if(void 0!==a&&a!==this.lastToIndex){var c=indexForItem(e);this.lastToIndex=a,hapticSelectionChanged(),this.reorderMove(c,a)}e.style.transform="translateY("+s+"px)"}},t.prototype.onDragEnd=function(){var t=this;this.activated=!1;var e=this.selectedItemEl;if(e){var r=this.el.children,o=this.lastToIndex,n=indexForItem(e),i=n<o?r[o+1]:r[o];this.el.insertBefore(e,i);for(var s=r.length,l=0;l<s;l++)r[l].style.transform="";var a=function(){t.selectedItemEl&&(t.selectedItemEl.style.transition="",t.selectedItemEl.classList.remove(ITEM_REORDER_SELECTED),t.selectedItemEl=void 0)};o===n?(e.style.transition="transform 200ms ease-in-out",setTimeout(a,200)):a(),hapticSelectionEnd()}},t.prototype.itemIndexForTop=function(t){var e=this.cachedHeights,r=0;for(r=0;r<e.length&&!(e[r]>t);r++);return r},t.prototype.reorderMove=function(t,e){for(var r=this.selectedItemHeight,o=this.el.children,n=0;n<o.length;n++){var i="";n>t&&n<=e?i="translateY("+-r+"px)":n<t&&n>=e&&(i="translateY("+r+"px)"),o[n].style.transform=i}},t.prototype.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-SCROLL_JUMP:t>this.scrollElBottom&&(e=SCROLL_JUMP),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},t.prototype.hostData=function(){return{class:Object.assign({},createThemedClasses(this.mode,"reorder-group"),{"reorder-enabled":!this.disabled,"reorder-list-active":this.activated})}},Object.defineProperty(t,"is",{get:function(){return"ion-reorder-group"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activated:{state:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},queue:{context:"queue"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}"},enumerable:!0,configurable:!0}),t}();function indexForItem(t){return t.$ionIndex}function findReorderItem(t,e){for(var r,o=0;t&&o<6;){if((r=t.parentNode)===e)return t;t=r,o++}return null}var AUTO_SCROLL_MARGIN=60,SCROLL_JUMP=10,ITEM_REORDER_SELECTED="reorder-selected";export{ReorderGroup as IonReorderGroup};