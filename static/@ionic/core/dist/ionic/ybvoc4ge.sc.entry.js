/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic,e=2;function i(t,e){const i=function(t,e){switch(e){case 0:return t.querySelector("template:not([name])");case 1:return t.querySelector("template[name=header]");case 2:return t.querySelector("template[name=footer]")}}(t,e);return i?t.ownerDocument.importNode(i.content,!0).children[0]:null}function s(t,i,s,r,n,l,o,h,a,c){const d=[],p=c+a;for(let c=a;c<p;c++){const a=t[c];if(s){const i=s(a,c,t);null!=i&&d.push({i:h++,type:1,value:i,index:c,height:n,reads:e,visible:!1})}if(d.push({i:h++,type:0,value:a,index:c,height:i?i(a,c):o,reads:i?0:e,visible:!!i}),r){const e=r(a,c,t);null!=e&&d.push({i:h++,type:2,value:e,index:c,height:l,reads:2,visible:!1})}}return d}class r{constructor(){this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=40,this.approxFooterHeight=40}itemsChanged(){this.calcCells(),this.updateVirtualScroll()}async componentDidLoad(){const t=this.el.closest("ion-content");t?(await t.componentOnReady(),this.contentEl=t,this.scrollEl=await t.getScrollElement(),this.calcCells(),this.updateState()):console.error("virtual-scroll must be used inside ion-content")}componentDidUpdate(){this.updateState()}componentDidUnload(){this.scrollEl=void 0}onScroll(){this.updateVirtualScroll()}onResize(){this.updateVirtualScroll()}positionForItem(t){return Promise.resolve(function(t,e,i){const s=e.find(e=>0===e.type&&e.index===t);return s?i[s.i]:-1}(t,this.cells,this.getHeightIndex()))}markDirty(t,e=-1){if(!this.items)return;const i=-1===e?this.items.length-t:e,r=this.lastItemLen;let n=0;if(t>0&&t<r)n=function(t,e){return 0===e?0:t.findIndex(t=>t.index===e)}(this.cells,t);else if(0===t)n=0;else{if(t!==r)return void console.warn("bad values for markDirty");n=this.cells.length}const l=s(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,n,t,i);this.cells=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(let s=0;s<e.length;s++)t[s+i]=e[s];return t}(this.cells,l,t),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}markDirtyTail(){if(this.items){const t=this.lastItemLen;this.markDirty(t,this.items.length-t)}}updateVirtualScroll(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),this.queue.read(this.readVS.bind(this)),this.queue.write(this.writeVS.bind(this)))}readVS(){const{contentEl:t,scrollEl:e,el:i}=this;let s=0,r=i;for(;r&&r!==t;)s+=r.offsetTop,r=r.parentElement;this.viewportOffset=s,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}writeVS(){const t=this.indexDirty,e=function(t,e,i){return{top:Math.max(t-100,0),bottom:t+e+100}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight),s=this.getHeightIndex(),r=function(t,e,i){const s=e.top,r=e.bottom;let n=0;for(;n<t.length&&!(t[n]>s);n++);const l=Math.max(n-2-1,0);for(;n<t.length&&!(t[n]>=r);n++);return{offset:l,length:Math.min(n+2,t.length)-l}}(s,e);(function(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(t,this.range,r)&&(this.range=r,function(t,e,i,s){for(const e of t)e.change=0,e.d=!0;const r=[],n=s.offset+s.length;for(let l=s.offset;l<n;l++){const s=i[l],n=t.find(t=>t.d&&t.cell===s);if(n){const t=e[l];t!==n.top&&(n.top=t,n.change=1),n.d=!1}else r.push(s)}const l=t.filter(t=>t.d);for(const i of r){const s=l.find(t=>t.d&&t.cell.type===i.type),r=i.index;s?(s.d=!1,s.change=2,s.cell=i,s.top=e[r]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[r]})}t.filter(t=>t.d&&-9999!==t.top).forEach(t=>{t.change=1,t.top=-9999})}(this.virtualDom,s,this.cells,r),this.nodeRender?function(t,e,s,r){const n=Array.from(t.children).filter(t=>"TEMPLATE"!==t.tagName),l=n.length;let o;for(let h=0;h<s.length;h++){const a=s[h],c=a.cell;if(2===a.change){if(h<l)e(o=n[h],c,h);else{const s=i(t,c.type);(o=e(s,c,h)||s).classList.add("virtual-item"),t.appendChild(o)}o.$ionCell=c}else o=n[h];0!==a.change&&(o.style.transform=`translate3d(0,${a.top}px,0)`);const d=c.visible;a.visible!==d&&(d?o.classList.remove("virtual-loading"):o.classList.add("virtual-loading"),a.visible=d),c.reads>0&&(r(c,o),c.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate())}updateCellHeight(t,e){const i=()=>{if(e.$ionCell===t){const i=this.win.getComputedStyle(e),s=e.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));this.setCellHeight(t,s)}};e&&e.componentOnReady?e.componentOnReady().then(i):i()}setCellHeight(t,e){const i=t.i;t===this.cells[i]&&(t.visible=!0,t.height!==e&&(t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))}scheduleUpdate(){clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(()=>this.updateVirtualScroll(),100)}updateState(){const t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}calcCells(){this.items&&(this.lastItemLen=this.items.length,this.cells=s(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}getHeightIndex(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}calcHeightIndex(t=0){this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){const i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,i){let s=t[i];for(let r=i;r<t.length;r++)t[r]=s,s+=e[r].height;return s}(this.heightIndex,this.cells,t),this.indexDirty=1/0}enableScrollEvents(t){this.scrollEl&&(this.isEnabled=t,this.enableListener(this,"scroll",t,this.scrollEl))}renderVirtualNode(t){const{type:e,value:i,index:s}=t.cell;switch(e){case 0:return this.renderItem(i,s);case 1:return this.renderHeader(i,s);case 2:return this.renderFooter(i,s)}}hostData(){return{style:{height:`${this.totalHeight}px`}}}render(){if(this.renderItem)return t(n,{dom:this.virtualDom},this.virtualDom.map(t=>this.renderVirtualNode(t)))}static get is(){return"ion-virtual-scroll"}static get properties(){return{approxFooterHeight:{type:Number,attr:"approx-footer-height"},approxHeaderHeight:{type:Number,attr:"approx-header-height"},approxItemHeight:{type:Number,attr:"approx-item-height"},domRender:{type:"Any",attr:"dom-render"},el:{elementRef:!0},enableListener:{context:"enableListener"},footerFn:{type:"Any",attr:"footer-fn"},headerFn:{type:"Any",attr:"header-fn"},itemHeight:{type:"Any",attr:"item-height",watchCallbacks:["itemsChanged"]},items:{type:"Any",attr:"items",watchCallbacks:["itemsChanged"]},markDirty:{method:!0},markDirtyTail:{method:!0},nodeRender:{type:"Any",attr:"node-render"},positionForItem:{method:!0},queue:{context:"queue"},renderFooter:{type:"Any",attr:"render-footer"},renderHeader:{type:"Any",attr:"render-header"},renderItem:{type:"Any",attr:"render-item"},totalHeight:{state:!0},win:{context:"window"}}}static get listeners(){return[{name:"scroll",method:"onScroll",disabled:!0},{name:"window:resize",method:"onResize",passive:!0}]}static get style(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.virtual-loading{opacity:0}.virtual-item{left:0;right:0;top:0;position:absolute;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}const n=({dom:t},e,i)=>i.map(e,(e,i)=>{const s=t[i],r=e.vattrs||{};let n=r.class||"";return n+="virtual-item ",s.visible||(n+="virtual-loading"),Object.assign({},e,{vattrs:Object.assign({},r,{class:n,style:Object.assign({},r.style,{transform:`translate3d(0,${s.top}px,0)`})})})});export{r as IonVirtualScroll};