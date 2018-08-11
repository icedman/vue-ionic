/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{a as e,d as i,c as s}from"./chunk-f7b6af08.js";class r{constructor(){this.itemStyles=new Map,this.button=!1,this.detailIcon="ios-arrow-forward",this.disabled=!1,this.type="button"}itemStyle(t){t.stopPropagation();const e=t.target.tagName,i=t.detail,s=Object.keys(t.detail),r={},o=this.itemStyles.get(e)||{};let n=!1;for(const t of s){const e=`item-${t}`,s=i[t];s!==o[e]&&(n=!0),r[e]=s}n&&(this.itemStyles.set(e,r),this.el.forceUpdate())}componentDidLoad(){Array.from(this.el.querySelectorAll("ion-button")).forEach(t=>{t.size||(t.size="small")})}isClickable(){return!!(this.href||this.el.onclick||this.button)}hostData(){const t={};for(const e of this.itemStyles.values())Object.assign(t,e);return{tappable:this.isClickable(),class:Object.assign({},t,e(this.color),{[`item-lines-${this.lines}`]:!!this.lines,"item-disabled":this.disabled,"in-list":i("ion-list",this.el),item:!0})}}render(){const{href:e,detail:i,mode:r,win:o,state:n,detailIcon:a,el:l,routerDirection:c,type:d}=this,p=this.isClickable(),u=p?e?"a":"button":"div",h="button"===u?{type:d}:{href:e},y=null!=i?i:"ios"===r&&p;return t(u,Object.assign({},h,{class:"item-native",onClick:t=>s(o,e,t,c)}),t("slot",{name:"start"}),t("div",{class:"item-inner"},t("div",{class:"input-wrapper"},t("slot",null)),t("slot",{name:"end"}),y&&t("ion-icon",{icon:a,lazy:!1,class:"item-detail-icon"})),n&&t("div",{class:"item-state"}),p&&"md"===r&&t("ion-ripple-effect",{tapClick:!0,parent:l}))}static get is(){return"ion-item"}static get encapsulation(){return"shadow"}static get properties(){return{button:{type:Boolean,attr:"button"},color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},detailIcon:{type:String,attr:"detail-icon"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},state:{type:String,attr:"state"},type:{type:String,attr:"type"},win:{context:"window"}}}static get listeners(){return[{name:"ionStyle",method:"itemStyle"}]}static get style(){return":host{--min-height:44px;--background:var(--ion-color-base);--background-active:var(--ion-color-tint);--color:var(--ion-color-contrast);--detail-push-color:var(--ion-color-shade);--border-radius:0;--border-width:0;--border-style:solid;--border-color:var(--ion-color-shade);--inner-border-width:0;--padding-top:0;--padding-bottom:0;--padding-end:0;--padding-start:0;--inner-padding-top:0;--inner-padding-bottom:0;--inner-padding-start:0;--inner-padding-end:0;--box-shadow:none;--inner-box-shadow:none;--highlight-color-focus:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #10dc60);--highlight-color-invalid:var(--ion-color-danger, #f04141);--highlight-height:2px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;color:var(--ion-color-contrast);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.activated){--background:var(--background-active)}:host(.item-disabled){cursor:default;opacity:.3;pointer-events:none}.item-native{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);border-radius:var(--border-radius);margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:0;background-color:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}a,button{cursor:pointer}.item-state{left:0;right:0;bottom:0;position:absolute;height:var(--highlight-height)}.item-inner{margin:0;padding:var(--inner-padding-top) var(--inner-padding-end) var(--inner-padding-bottom) var(--inner-padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.input-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-input),:host([vertical-align-top]){-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}:host(.item-label-floating) .input-wrapper,:host(.item-label-stacked) .input-wrapper{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host(.item-label-floating)::slotted(ion-select),:host(.item-label-stacked)::slotted(ion-select){-ms-flex-item-align:stretch;align-self:stretch;max-width:100%}:host(.item-textarea){-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){max-width:100%}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}:host{--ion-color-base:var(--ion-item-background, transparent);--ion-color-contrast:var(--ion-item-text-color, var(--ion-text-color, #000));--ion-color-tint:var(--ion-item-background-color-active, #f1f1f1);--ion-color-shade:rgba(var(--ion-item-border-color-rgb, 0, 0, 0), 0.13);--transition:background-color 300ms cubic-bezier(.4, 0, .2, 1);--padding-start:16px;--inner-padding-end:8px;--padding-start:16px;font-family:var(--ion-font-family,inherit);font-size:16px;font-weight:400;text-transform:none}:host(.item-interactive){--border-width:0 0 1px 0}:host(.item-lines-full){--border-width:0 0 1px 0}:host(.item-lines-inset){--inner-border-width:0 0 1px 0}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0}.item-detail-icon{color:var(--detail-push-color);font-size:20px}::slotted(:not(.interactive)[slot=end]),::slotted(:not(.interactive)[slot=start]){margin:2px 8px 2px 0}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:3px;margin-bottom:2px}::slotted(ion-icon[slot=start])+.item-inner,::slotted(ion-icon[slot=start])+.item-interactive{margin-left:24px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin:8px 16px 8px 0}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin:8px}:host(.item-label-floating) ::slotted([slot=end]),:host(.item-label-stacked) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small-md){--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;--height:25px;font-size:12px}::slotted(.button-small-md) ion-icon[slot=icon-only]{padding:0}::slotted(ion-avatar){width:40px;height:40px}::slotted(ion-thumbnail){width:80px;height:80px}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0}:host(.item-label-floating) ::slotted(ion-input),:host(.item-label-floating) ::slotted(ion-textarea),:host(.item-label-stacked) ::slotted(ion-input),:host(.item-label-stacked) ::slotted(ion-textarea){--padding-top:8px;--padding-bottom:8px;--padding-start:0}:host(:not(.item-label)) ::slotted(ion-input),:host(:not(.item-label)) ::slotted(ion-textarea){--padding-start:0}"}static get styleMode(){return"md"}}class o{componentDidLoad(){Array.from(this.el.querySelectorAll("ion-button")).forEach(t=>{t.size||(t.size="small")})}hostData(){return{class:e(this.color)}}render(){return[t("slot",{name:"start"}),t("div",{class:"item-divider-inner"},t("div",{class:"item-divider-wrapper"},t("slot",null)),t("slot",{name:"end"}))]}static get is(){return"ion-item-divider"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},el:{elementRef:!0},mode:{type:String,attr:"mode"}}}static get style(){return":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:30px;background-color:var(--ion-color-base);color:var(--ion-color-contrast);overflow:hidden;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box}:host([sticky]){position:-webkit-sticky;position:sticky;top:0}.item-divider-inner{margin:0;padding:0 8px 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border:0;overflow:hidden}.item-divider-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden}:host{--ion-color-base:var(--ion-background-color, #fff);--ion-color-contrast:var(--ion-text-color-step-600, #999999);padding-left:16px;border-bottom:1px solid rgba(var(--ion-item-border-color-rgb,0,0,0),.13);font-family:var(--ion-font-family,inherit);font-size:14px}:host([slot=end]),:host([slot=start]){margin:2px 8px 2px 0}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:3px;margin-bottom:2px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin:8px 16px 8px 0}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin:8px}::slotted(h1){margin:0 0 2px;font-size:24px;font-weight:400}::slotted(h2){margin:2px 0;font-size:16px;font-weight:400}::slotted(h3,h4,h5,h6){margin:2px 0;font-size:14px;font-weight:400;line-height:normal}::slotted(p){margin:0 0 2px;color:var(--ion-text-color-step-400,#666);font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}"}static get styleMode(){return"md"}}class n{hostData(){return{class:e(this.color)}}render(){return t("slot",null)}static get is(){return"ion-list-header"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}}static get style(){return":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0 0 13px;padding:0 0 0 16px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;background:var(--ion-color-base);color:var(--ion-color-contrast);overflow:hidden;--ion-color-base:transparent;--ion-color-contrast:var(--ion-text-color-step-400, #666666);min-height:45px;font-size:14px}"}static get styleMode(){return"md"}}class a{hostData(){return{class:Object.assign({},e(this.color))}}render(){return t("slot",null)}static get is(){return"ion-note"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}}static get style(){return":host{color:var(--ion-color-base);--ion-color-base:var(--ion-text-color-step-800, #cccccc);font-family:var(--ion-font-family,inherit)}"}static get styleMode(){return"md"}}class l{constructor(){this.width="100%"}render(){return t("span",{style:{width:this.width}}," ")}static get is(){return"ion-skeleton-text"}static get encapsulation(){return"shadow"}static get properties(){return{width:{type:String,attr:"width"}}}static get style(){return":host{display:inline-block;width:100%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}span{display:inline-block;font-size:8px;background-color:var(--ion-text-color,#000);opacity:.1}"}static get styleMode(){return"md"}}export{r as IonItem,o as IonItemDivider,n as IonListHeader,a as IonNote,l as IonSkeletonText};