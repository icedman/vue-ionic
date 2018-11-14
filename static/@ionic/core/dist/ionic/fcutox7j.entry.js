/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{c as e,d as s,e as o}from"./chunk-b9ec67ac.js";class r{render(){return t("slot",null,t("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"}))}static get is(){return"ion-reorder"}static get encapsulation(){return"shadow"}static get style(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:31px;opacity:.3}"}static get styleMode(){return"md"}}class i{constructor(){this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.setDisabled(this.disabled)}async componentDidLoad(){const t=this.el.closest("ion-content");t&&(await t.componentOnReady(),this.scrollEl=await t.getScrollElement()),this.gesture=(await import("./gesture.js")).createGesture({el:this.doc.body,queue:this.queue,gestureName:"reorder",gesturePriority:90,threshold:0,direction:"y",passive:!1,canStart:t=>this.canStart(t),onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:()=>this.onEnd()}),this.disabledChanged()}componentDidUnload(){this.onEnd()}complete(t){return Promise.resolve(this.completeSync(t))}canStart(t){if(this.selectedItemEl||0!==this.state)return!1;const e=t.event.target.closest("ion-reorder");if(!e)return!1;const s=function(t,e){let s,o=0;for(;t&&o<6;){if((s=t.parentNode)===e)return t;t=s,o++}}(e,this.el);return s?(t.data=s,!0):(console.error("reorder node not found"),!1)}onStart(t){t.event.preventDefault();const e=this.selectedItemEl=t.data,s=this.cachedHeights;s.length=0;const r=this.el,i=r.children;if(!i||0===i.length)return;let c=0;for(let t=0;t<i.length;t++){const e=i[t];s.push(c+=e.offsetHeight),e.$ionIndex=t}const h=r.getBoundingClientRect();if(this.containerTop=h.top,this.containerBottom=h.bottom,this.scrollEl){const t=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=t.top+n,this.scrollElBottom=t.bottom-n}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=l(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(a),o()}onMove(t){const s=this.selectedItemEl;if(!s)return;const o=this.autoscroll(t.currentY),r=this.containerTop-o,i=Math.max(r,Math.min(t.currentY,this.containerBottom-o)),n=o+i-t.startY,c=this.itemIndexForTop(i-r);if(c!==this.lastToIndex){const t=l(s);this.lastToIndex=c,e(),this.reorderMove(t,c)}s.style.transform=`translateY(${n}px)`}onEnd(){const t=this.selectedItemEl;if(this.state=2,!t)return void(this.state=0);const e=this.lastToIndex,o=l(t);e===o?(t.style.transition="transform 200ms ease-in-out",setTimeout(()=>this.completeSync(),200)):this.ionItemReorder.emit({from:o,to:e,complete:this.completeSync.bind(this)}),s()}completeSync(t){const e=this.selectedItemEl;if(e&&2===this.state){const s=this.el.children,o=s.length,r=this.lastToIndex,i=l(e);!0===t&&this.el.insertBefore(e,i<r?s[r+1]:s[r]),Array.isArray(t)&&(t=function(t,e,s){const o=t[i];return t.splice(i,1),t.splice(s,0,o),t.slice()}(t,0,r));for(let t=0;t<o;t++)s[t].style.transform="";e.style.transition="",e.classList.remove(a),this.selectedItemEl=void 0,this.state=0}return t}itemIndexForTop(t){const e=this.cachedHeights;let s=0;for(s=0;s<e.length&&!(e[s]>t);s++);return s}reorderMove(t,e){const s=this.selectedItemHeight,o=this.el.children;for(let r=0;r<o.length;r++){let i="";r>t&&r<=e?i=`translateY(${-s}px)`:r<t&&r>=e&&(i=`translateY(${s}px)`),o[r].style.transform=i}}autoscroll(t){if(!this.scrollEl)return 0;let e=0;return t<this.scrollElTop?e=-c:t>this.scrollElBottom&&(e=c),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial}hostData(){return{class:{"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}}}static get is(){return"ion-reorder-group"}static get properties(){return{complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},queue:{context:"queue"},state:{state:!0}}}static get events(){return[{name:"ionItemReorder",method:"ionItemReorder",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"}}function l(t){return t.$ionIndex}const n=60,c=10,a="reorder-selected";export{r as IonReorder,i as IonReorderGroup};