/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))(function(r,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){e.done?r(e.value):new i(function(t){t(e.value)}).then(a,s)}l((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var i,n,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Ionic.loadBundle("wllrw9yf",["require","exports","./chunk-b34e377b.js","./chunk-dd673b2a.js","./chunk-7b31d227.js","./chunk-80b321f6.js"],function(e,t,i,n,r,o){var a=window.Ionic.h;function s(e,t,i,n){if(e!==w&&e!==S){if(e===_)return void 0!==i&&void 0!==i.hour?i.hour<12?"AM":"PM":t?t.toUpperCase():"";if(e===A)return void 0!==i&&void 0!==i.hour?i.hour<12?"am":"pm":t||"";if(null==t)return"";if(e===k||e===D||e===P||e===C||e===Y||e===T)return y(t);if(e===g)return b(t);if(e===x)return(n.monthNames?n.monthNames:E)[t-1];if(e===M)return(n.monthShortNames?n.monthShortNames:V)[t-1];if(e===O||e===I){if(0===t)return"12";if(t>12&&(t-=12),e===O&&t<10)return"0"+t}return t.toString()}try{return t=new Date(i.year,i.month-1,i.day).getDay(),e===w?(n.dayNames?n.dayNames:N)[t]:(n.dayShortNames?n.dayShortNames:j)[t]}catch(e){}}function l(e,t,i,n,r){return void 0===n&&(n=0),void 0===r&&(r=0),parseInt("1"+b(e)+y(t)+y(i)+y(n)+y(r),10)}function u(e){return l(e.year,e.month,e.day,e.hour,e.minute)}var c=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,h=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;function d(e){var t=null;if(null!=e&&((t=h.exec(e))?(t.unshift(void 0,void 0),t[2]=t[3]=void 0):t=c.exec(e)),null!==t){for(var i=1;i<8;i++)t[i]=void 0!==t[i]?parseInt(t[i],10):void 0;var n=0;return t[9]&&t[10]&&(n=60*parseInt(t[10],10),t[11]&&(n+=parseInt(t[11],10)),"-"===t[9]&&(n*=-1)),{year:t[1],month:t[2],day:t[3],hour:t[4],minute:t[5],second:t[6],millisecond:t[7],tzOffset:n}}}function p(e){for(var t in F)if(F[t].f===e)return F[t].k}function m(e,t){var i;if(null!=e)return"string"==typeof e&&(e=e.replace(/\[|\]/g,"").split(",")),Array.isArray(e)&&(i=e.map(function(e){return e.toString().trim()})),void 0!==i&&0!==i.length||console.warn('Invalid "'+t+'Names". Must be an array of strings, or a comma separated string.'),i}function f(e,t){var i;return"string"==typeof e&&(e=e.replace(/\[|\]|\s/g,"").split(",")),0===(i=Array.isArray(e)?e.map(function(e){return parseInt(e,10)}).filter(isFinite):[e]).length&&console.warn('Invalid "'+t+'Values". Must be an array of numbers, or a comma separated string of numbers.'),i}function y(e){return("0"+(void 0!==e?Math.abs(e):"0")).slice(-2)}function v(e){return("00"+(void 0!==e?Math.abs(e):"0")).slice(-3)}function b(e){return("000"+(void 0!==e?Math.abs(e):"0")).slice(-4)}var g="YYYY",k="YY",x="MMMM",M="MMM",D="MM",w="DDDD",S="DDD",P="DD",C="HH",O="hh",I="h",Y="mm",T="ss",_="A",A="a",F=[{f:g,k:"year"},{f:x,k:"month"},{f:w,k:"day"},{f:M,k:"month"},{f:S,k:"day"},{f:k,k:"year"},{f:D,k:"month"},{f:P,k:"day"},{f:C,k:"hour"},{f:O,k:"hour"},{f:Y,k:"minute"},{f:T,k:"second"},{f:"M",k:"month"},{f:"D",k:"day"},{f:"H",k:"hour"},{f:I,k:"hour"},{f:"m",k:"minute"},{f:"s",k:"second"},{f:_,k:"ampm"},{f:A,k:"ampm"}],N=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],j=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],E=["January","February","March","April","May","June","July","August","September","October","November","December"],V=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],W=[O,I,Y,"m",T,"s"],H=function(){function e(){this.inputId="ion-dt-"+B++,this.labelId=this.inputId+"-lbl",this.locale={},this.datetimeMin={},this.datetimeMax={},this.datetimeValue={},this.name=this.inputId,this.disabled=!1,this.displayFormat="MMM D, YYYY",this.cancelText="Cancel",this.doneText="Done"}return e.prototype.disabledChanged=function(){this.emitStyle()},e.prototype.valueChanged=function(){this.updateDatetimeValue(this.value),this.emitStyle(),this.ionChange.emit({value:this.value})},e.prototype.componentWillLoad=function(){this.locale={monthNames:m(this.monthNames,"monthNames"),monthShortNames:m(this.monthShortNames,"monthShortNames"),dayNames:m(this.dayNames,"dayNames"),dayShortNames:m(this.dayShortNames,"dayShortNames")},this.updateDatetimeValue(this.value),this.emitStyle()},e.prototype.open=function(){return __awaiter(this,void 0,void 0,function(){var e,t,i;return __generator(this,function(n){switch(n.label){case 0:return this.disabled?[2]:(e=this.generatePickerOptions(),i=this,[4,this.pickerCtrl.create(e)]);case 1:return t=i.picker=n.sent(),[4,this.validate()];case 2:return n.sent(),[4,t.present()];case 3:return n.sent(),[2]}})})},e.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,datetime:!0,"has-value":this.hasValue(),"interactive-disabled":this.disabled})},e.prototype.updateDatetimeValue=function(e){!function(e,t){if(t&&""!==t){if("string"==typeof t){if(t=d(t))return Object.assign(e,t),!0}else if(t.year||t.hour||t.month||t.day||t.minute||t.second){t.ampm&&t.hour&&(t.hour.value="pm"===t.ampm.value?12===t.hour.value?12:t.hour.value+12:12===t.hour.value?0:t.hour.value);for(var i=0,n=Object.keys(t);i<n.length;i++){var r=n[i];e[r]=t[r].value}return!0}console.warn('Error parsing date: "'+t+'". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime')}else for(var o in e)e.hasOwnProperty(o)&&delete e[o]}(this.datetimeValue,e),this.updateText()},e.prototype.generatePickerOptions=function(){var e=this,t=Object.assign({},this.pickerOptions,{columns:this.generateColumns()}),i=t.buttons;return i&&0!==i.length||(t.buttons=[{text:this.cancelText,role:"cancel",handler:function(){e.ionCancel.emit()}},{text:this.doneText,handler:function(t){e.updateDatetimeValue(t),e.value=function(e){var t="";return void 0!==e.year?(t=b(e.year),void 0!==e.month&&(t+="-"+y(e.month),void 0!==e.day&&(t+="-"+y(e.day),void 0!==e.hour&&(t+="T"+y(e.hour)+":"+y(e.minute)+":"+y(e.second),e.millisecond>0&&(t+="."+v(e.millisecond)),t+=void 0===e.tzOffset?"Z":(e.tzOffset>0?"+":"-")+y(Math.floor(Math.abs(e.tzOffset/60)))+":"+y(e.tzOffset%60))))):void 0!==e.hour&&(t=y(e.hour)+":"+y(e.minute),void 0!==e.second&&(t+=":"+y(e.second),void 0!==e.millisecond&&(t+="."+v(e.millisecond)))),t}(e.datetimeValue)}}]),t},e.prototype.generateColumns=function(){var e=this,t=this.pickerFormat||this.displayFormat||q;if(0===t.length)return[];this.calcMinMax(),-1===(t=t.replace("DDDD","{~}").replace("DDD","{~}")).indexOf("D")&&(t=t.replace("{~}","D"));var i=function(e){var t=[];e=e.replace(/[^\w\s]/gi," "),F.forEach(function(t){t.f.length>1&&e.indexOf(t.f)>-1&&e.indexOf(t.f+t.f.charAt(0))<0&&(e=e.replace(t.f," "+t.f+" "))});var i=e.split(" ").filter(function(e){return e.length>0});return i.forEach(function(e,n){F.forEach(function(r){if(e===r.f){if((e===_||e===A)&&(t.indexOf(I)<0&&t.indexOf(O)<0||-1===W.indexOf(i[n-1])))return;t.push(e)}})}),t}(t=t.replace(/{~}/g,"")).map(function(t){var i=p(t),n=(e[i+"Values"]?f(e[i+"Values"],i):function(e,t,i){var n=[];if(e===g||e===k){if(void 0===i.year||void 0===t.year)throw new Error("min and max year is undefined");for(var r=i.year;r>=t.year;r--)n.push(r)}else if(e===x||e===M||e===D||"M"===e||e===O||e===I)for(r=1;r<13;r++)n.push(r);else if(e===w||e===S||e===P||"D"===e)for(r=1;r<32;r++)n.push(r);else if(e===C||"H"===e)for(r=0;r<24;r++)n.push(r);else if(e===Y||"m"===e)for(r=0;r<60;r++)n.push(r);else if(e===T||"s"===e)for(r=0;r<60;r++)n.push(r);else e!==_&&e!==A||n.push("am","pm");return n}(t,e.datetimeMin,e.datetimeMax)).map(function(i){return{value:i,text:s(t,i,void 0,e.locale)}}),r=function(e,t){return t===_||t===A?e.hour<12?"am":"pm":t===O||t===I?e.hour>12?e.hour-12:e.hour:e[p(t)]}(e.datetimeValue,t),o=n.findIndex(function(e){return e.value===r});return{name:i,selectedIndex:o>=0?o:0,options:n}}),n=this.datetimeMin,r=this.datetimeMax;return["month","day","hour","minute"].filter(function(e){return!i.find(function(t){return t.name===e})}).forEach(function(e){n[e]=0,r[e]=0}),function(e){for(var t,i,n=[],r=0;r<e.length;r++){t=e[r],n.push(0);for(var o=0,a=t.options;o<a.length;o++){(i=a[o].text.length)>n[r]&&(n[r]=i)}}return 2===n.length?(i=Math.max(n[0],n[1]),e[0].align="right",e[1].align="left",e[0].optionsWidth=e[1].optionsWidth=17*i+"px"):3===n.length&&(i=Math.max(n[0],n[2]),e[0].align="right",e[1].columnWidth=17*n[1]+"px",e[0].optionsWidth=e[2].optionsWidth=17*i+"px",e[2].align="left"),e}(i)},e.prototype.validate=function(){return __awaiter(this,void 0,void 0,function(){var e,t,i,n,r,o,a,s,l,c,h;return __generator(this,function(d){switch(d.label){case 0:return e=new Date,t=u(this.datetimeMin),i=u(this.datetimeMax),[4,this.picker.getColumn("year")];case 1:return n=d.sent(),r=e.getFullYear(),n&&(n.options.find(function(t){return t.value===e.getFullYear()})||(r=n.options[0].value),void 0!==(o=n.selectedIndex)&&(a=n.options[o])&&(r=a.value)),[4,this.validateColumn("month",1,t,i,[r,0,0,0,0],[r,12,31,23,59])];case 2:return s=d.sent(),l=4===(p=s)||6===p||9===p||11===p?30:2===p?function(e){return e%4==0&&e%100!=0||e%400==0}(r)?29:28:31,[4,this.validateColumn("day",2,t,i,[r,s,0,0,0],[r,s,l,23,59])];case 3:return c=d.sent(),[4,this.validateColumn("hour",3,t,i,[r,s,c,0,0],[r,s,c,23,59])];case 4:return h=d.sent(),[4,this.validateColumn("minute",4,t,i,[r,s,c,h,0],[r,s,c,h,59])];case 5:return d.sent(),[2]}var p})})},e.prototype.calcMinMax=function(e){var t=(e||new Date).getFullYear();if(void 0!==this.yearValues){var i=f(this.yearValues,"year");void 0===this.min&&(this.min=Math.min.apply(Math,i)),void 0===this.max&&(this.max=Math.max.apply(Math,i))}else void 0===this.min&&(this.min=(t-100).toString()),void 0===this.max&&(this.max=t.toString());var n=this.datetimeMin=d(this.min),r=this.datetimeMax=d(this.max);n.year=n.year||t,r.year=r.year||t,n.month=n.month||1,r.month=r.month||12,n.day=n.day||1,r.day=r.day||31,n.hour=n.hour||0,r.hour=r.hour||23,n.minute=n.minute||0,r.minute=r.minute||59,n.second=n.second||0,r.second=r.second||59,n.year>r.year&&(console.error("min.year > max.year"),n.year=r.year-100),n.year===r.year&&(n.month>r.month?(console.error("min.month > max.month"),n.month=1):n.month===r.month&&n.day>r.day&&(console.error("min.day > max.day"),n.day=1))},e.prototype.validateColumn=function(e,t,n,r,o,a){return __awaiter(this,void 0,void 0,function(){var s,u,c,h,d,p,m,f,y,v,b;return __generator(this,function(g){switch(g.label){case 0:return[4,this.picker.getColumn(e)];case 1:if(!(s=g.sent()))return[2,0];for(u=o.slice(),c=a.slice(),d=(h=s.options).length-1,p=0,m=0;m<h.length;m++)y=(f=h[m]).value,u[t]=f.value,c[t]=f.value,(f.disabled=y<o[t]||y>a[t]||l(c[0],c[1],c[2],c[3],c[4])<n||l(u[0],u[1],u[2],u[3],u[4])>r)||(d=Math.min(d,m),p=Math.max(p,m));return v=s.selectedIndex=i.clamp(d,s.selectedIndex,p),(b=s.options[v])?[2,b.value]:[2,0]}})})},e.prototype.updateText=function(){this.text=function(e,t,i){if(void 0!==t){var n=[],r=!1;if(F.forEach(function(o,a){if(e.indexOf(o.f)>-1){var l="{"+a+"}",u=s(o.f,t[o.k],t,i);r||void 0===u||null==t[o.k]||(r=!0),n.push(l,u||""),e=e.replace(o.f,l)}}),r){for(var o=0;o<n.length;o+=2)e=e.replace(n[o],n[o+1]);return e}}}(this.displayFormat||this.pickerFormat||q,this.datetimeValue,this.locale)},e.prototype.hasValue=function(){return Object.keys(this.datetimeValue).length>0},e.prototype.hostData=function(){return{class:{"datetime-disabled":this.disabled,"datetime-placeholder":null==this.text&&null!=this.placeholder,"in-item":n.hostContext("ion-item",this.el)}}},e.prototype.render=function(){var e=this.text;return null==e&&(e=null!=this.placeholder?this.placeholder:""),i.renderHiddenInput(this.el,this.name,this.value,this.disabled),[a("div",{class:"datetime-text"},e),a("button",{type:"button","aria-haspopup":"true","aria-labelledby":this.labelId,"aria-disabled":this.disabled?"true":null,onClick:this.open.bind(this),class:"datetime-cover"}),a("slot",null)]},Object.defineProperty(e,"is",{get:function(){return"ion-datetime"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{cancelText:{type:String,attr:"cancel-text"},dayNames:{type:String,attr:"day-names"},dayShortNames:{type:String,attr:"day-short-names"},dayValues:{type:"Any",attr:"day-values"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},displayFormat:{type:String,attr:"display-format"},doneText:{type:String,attr:"done-text"},el:{elementRef:!0},hourValues:{type:"Any",attr:"hour-values"},max:{type:String,attr:"max",mutable:!0},min:{type:String,attr:"min",mutable:!0},minuteValues:{type:"Any",attr:"minute-values"},mode:{type:String,attr:"mode"},monthNames:{type:String,attr:"month-names"},monthShortNames:{type:String,attr:"month-short-names"},monthValues:{type:"Any",attr:"month-values"},name:{type:String,attr:"name"},open:{method:!0},pickerCtrl:{connect:"ion-picker-controller"},pickerFormat:{type:String,attr:"picker-format"},pickerOptions:{type:"Any",attr:"picker-options"},placeholder:{type:String,attr:"placeholder"},text:{state:!0},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]},yearValues:{type:"Any",attr:"year-values"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-datetime-ios-h{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}.in-item.sc-ion-datetime-ios-h{position:static}.datetime-placeholder.sc-ion-datetime-ios-h{color:var(--placeholder-color)}.datetime-disabled.sc-ion-datetime-ios-h{opacity:.3}.datetime-cover.sc-ion-datetime-ios{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.datetime-text.sc-ion-datetime-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;overflow:inherit}.sc-ion-datetime-ios-h{--placeholder-color:var(--ion-text-color-step-600,#999);--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),B=0,q="MMM D, YYYY";function L(e,t){var i=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".picker-wrapper")),n.fromTo("opacity",.01,.26),r.fromTo("translateY","100%","0%"),Promise.resolve(i.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(n).add(r))}function z(e,t){var i=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".picker-wrapper")),n.fromTo("opacity",.26,.01),r.fromTo("translateY","0%","100%"),Promise.resolve(i.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(n).add(r))}var J=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.columns=[],this.duration=0,this.showBackdrop=!0,this.backdropDismiss=!0,this.animated=!0}return e.prototype.componentDidLoad=function(){this.ionPickerDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionPickerDidUnload.emit()},e.prototype.onBackdropTap=function(){var e=this.buttons.find(function(e){return"cancel"===e.role});e?this.buttonClick(e):this.dismiss()},e.prototype.present=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){switch(t.label){case 0:return[4,r.present(this,"pickerEnter",L,L,void 0)];case 1:return t.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return e.dismiss()},this.duration)),[2]}})})},e.prototype.dismiss=function(e,t){return this.durationTimeout&&clearTimeout(this.durationTimeout),r.dismiss(this,e,t,"pickerLeave",z,z)},e.prototype.onDidDismiss=function(){return r.eventMethod(this.el,"ionPickerDidDismiss")},e.prototype.onWillDismiss=function(){return r.eventMethod(this.el,"ionPickerWillDismiss")},e.prototype.getColumn=function(e){return Promise.resolve(this.columns.find(function(t){return t.name===e}))},e.prototype.buttonClick=function(e){var t=!0;return e.handler&&!1===e.handler(this.getSelected())&&(t=!1),t?this.dismiss():Promise.resolve(!1)},e.prototype.getSelected=function(){var e={};return this.columns.forEach(function(t,i){var n=void 0!==t.selectedIndex?t.options[t.selectedIndex]:void 0;e[t.name]={text:n?n.text:void 0,value:n?n.value:void 0,columnIndex:i}}),e},e.prototype.hostData=function(){return{class:Object.assign({},n.createThemedClasses(this.mode,"picker"),n.getClassMap(this.cssClass)),style:{zIndex:2e4+this.overlayIndex}}},e.prototype.render=function(){var e=this;return[a("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),a("div",{class:"picker-wrapper",role:"dialog"},a("div",{class:"picker-toolbar"},this.buttons.map(function(t){return a("div",{class:(i=t,(r={})["picker-toolbar-"+i.role]=void 0!==i.role,r["picker-toolbar-button"]=!0,r)},a("button",{type:"button","ion-activatable":!0,onClick:function(){return e.buttonClick(t)},class:Object.assign({"picker-button":!0},n.getClassMap(t.cssClass))},t.text));var i,r})),a("div",{class:"picker-columns"},a("div",{class:"picker-above-highlight"}),this.columns.map(function(e){return a("ion-picker-column",{col:e})}),a("div",{class:"picker-below-highlight"})))]},Object.defineProperty(e,"is",{get:function(){return"ion-picker"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons"},columns:{type:"Any",attr:"columns"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},getColumn:{method:!0},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionPickerDidLoad",method:"ionPickerDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidUnload",method:"ionPickerDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-picker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.picker-toolbar{width:100%;contain:strict;z-index:1}.picker-wrapper{left:0;right:0;bottom:0;margin:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;max-width:500px;z-index:10}.picker-columns,.picker-wrapper{display:-ms-flexbox;display:flex;contain:strict;overflow:hidden}.picker-columns{-ms-flex-pack:center;margin-bottom:var(--ion-safe-area-bottom,0)}.picker-col,.picker-columns{position:relative;justify-content:center}.picker-col{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-pack:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-prefix{text-align:end}.picker-prefix,.picker-suffix{position:relative;-ms-flex:2;flex:2;min-width:45%;max-width:50%;white-space:nowrap}.picker-suffix{text-align:start}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-above-highlight,.picker-below-highlight{display:none;pointer-events:none}.picker-button{border:0;font-family:inherit}.picker-button:active,.picker-button:focus,.picker-opt:active,.picker-opt:focus{outline:none}.picker-ios .picker-wrapper{height:260px;border-top:1px solid var(--ion-item-border-color,var(--ion-border-color,#c8c7cc));background:var(--ion-background-color,#fff)}.picker-ios .picker-toolbar{display:-ms-flexbox;display:flex;height:44px;border-bottom:.55px solid var(--ion-item-border-color,var(--ion-border-color,#c8c7cc));background:var(--ion-background-color,#fff)}.picker-ios .picker-toolbar-button{-ms-flex:1;flex:1;text-align:end}.picker-ios .picker-toolbar-button:last-child .picker-button{font-weight:600}.picker-ios .picker-toolbar-button:first-child{font-weight:400;text-align:start}.picker-ios .picker-button,.picker-ios .picker-button.activated{margin:0;padding:0 1em;height:44px;background:transparent;color:var(--ion-color-primary,#3880ff);font-size:16px}.picker-columns{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-ios .picker-col{padding:0 4px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-ios .picker-opts,.picker-ios .picker-prefix,.picker-ios .picker-suffix{top:77px;pointer-events:none}.picker-ios .picker-opt,.picker-ios .picker-opts,.picker-ios .picker-prefix,.picker-ios .picker-suffix{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:var(--ion-item-color,var(--ion-text-color,#000));font-size:20px;line-height:42px}.picker-ios .picker-opt{padding:0;margin:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-ios .picker-above-highlight{top:0;height:81px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,#c8c7cc));background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(180deg,var(--ion-background-color,#fff) 20%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:10}.picker-ios .picker-above-highlight,.picker-ios .picker-below-highlight{left:0;-webkit-transform:translateZ(90px);transform:translateZ(90px);display:block;position:absolute;width:100%}.picker-ios .picker-below-highlight{top:115px;height:119px;border-top:1px solid var(--ion-item-border-color,var(--ion-border-color,#c8c7cc));background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(0deg,var(--ion-background-color,#fff) 30%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:11}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),U=function(){function t(){this.optHeight=0,this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0,this.noAnimate=!0}return t.prototype.componentWillLoad=function(){var e=0,t=.81;"ios"===this.mode&&(e=-.46,t=1),this.rotateFactor=e,this.scaleFactor=t},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t,i,n=this;return __generator(this,function(r){switch(r.label){case 0:return(t=this.optsEl)&&(this.optHeight=t.firstElementChild?t.firstElementChild.clientHeight:0),this.refresh(),i=this,[4,new Promise(function(t,i){e(["./gesture.js"],t,i)})];case 1:return i.gesture=r.sent().createGesture({el:this.el,queue:this.queue,gestureName:"picker-swipe",gesturePriority:100,threshold:0,onStart:function(e){return n.onStart(e)},onMove:function(e){return n.onMove(e)},onEnd:function(e){return n.onEnd(e)}}),this.gesture.setDisabled(!1),this.tmrId=setTimeout(function(){n.noAnimate=!1,n.refresh(!0)},250),[2]}})})},t.prototype.componentDidUnload=function(){cancelAnimationFrame(this.rafId),clearTimeout(this.tmrId)},t.prototype.setSelected=function(e,t){var i=e>-1?-e*this.optHeight:0;this.velocity=0,cancelAnimationFrame(this.rafId),this.update(i,t,!0)},t.prototype.update=function(e,t,i){if(this.optsEl){for(var r=0,o=0,a=this.col,s=this.rotateFactor,l=a.selectedIndex=this.indexForY(-e),u=0===t?null:t+"ms",c="scale("+this.scaleFactor+")",h=this.optsEl.children,d=0;d<h.length;d++){var p=h[d],m=a.options[d],f=d*this.optHeight+e,y="";if(0!==s){var v=f*s;Math.abs(v)<=90?(r=0,o=90,y="rotateX("+v+"deg) "):r=-9999}else o=0,r=f;var b=l===d;y+="translate3d(0px,"+r+"px,"+o+"px) ",1===this.scaleFactor||b||(y+=c),this.noAnimate?(m.duration=0,p.style.transitionDuration=""):t!==m.duration&&(m.duration=t,p.style.transitionDuration=u),y!==m.transform&&(m.transform=y,p.style.transform=y),b!==m.selected&&(m.selected=b,b?p.classList.add(R):p.classList.remove(R))}this.col.prevSelected=l,i&&(this.y=e),this.lastIndex!==l&&(n.hapticSelectionChanged(),this.lastIndex=l)}},t.prototype.decelerate=function(){var e=this;if(0!==this.velocity){this.velocity*=Z,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1);var t=this.y+this.velocity;t>this.minY?(t=this.minY,this.velocity=0):t<this.maxY&&(t=this.maxY,this.velocity=0),this.update(t,0,!0),(Math.round(t)%this.optHeight!=0||Math.abs(this.velocity)>1)&&(this.rafId=requestAnimationFrame(function(){return e.decelerate()}))}else if(this.y%this.optHeight!=0){var i=Math.abs(this.y%this.optHeight);this.velocity=i>this.optHeight/2?1:-1,this.decelerate()}},t.prototype.indexForY=function(e){return Math.min(Math.max(Math.abs(Math.round(e/this.optHeight)),0),this.col.options.length-1)},t.prototype.onStart=function(e){e.event.preventDefault(),e.event.stopPropagation(),cancelAnimationFrame(this.rafId);for(var t=this.col.options,i=t.length-1,n=0,r=0;r<t.length;r++)t[r].disabled||(i=Math.min(i,r),n=Math.max(n,r));this.minY=-i*this.optHeight,this.maxY=-n*this.optHeight},t.prototype.onMove=function(e){e.event.preventDefault(),e.event.stopPropagation();var t=this.y+e.deltaY;t>this.minY?(t=Math.pow(t,.8),this.bounceFrom=t):t<this.maxY?(t+=Math.pow(this.maxY-t,.9),this.bounceFrom=t):this.bounceFrom=0,this.update(t,0,!1)},t.prototype.onEnd=function(e){if(this.bounceFrom>0)this.update(this.minY,100,!0);else if(this.bounceFrom<0)this.update(this.maxY,100,!0);else if(this.velocity=i.clamp(-G,23*e.velocityY,G),0===this.velocity&&0===e.deltaY){var t=e.event.target.closest(".picker-opt");t&&t.hasAttribute("opt-index")&&this.setSelected(parseInt(t.getAttribute("opt-index"),10),$)}else this.y+=e.deltaY,this.decelerate()},t.prototype.refresh=function(e){for(var t=this.col.options.length-1,n=0,r=this.col.options,o=0;o<r.length;o++)r[o].disabled||(t=Math.min(t,o),n=Math.max(n,o));var a=i.clamp(t,this.col.selectedIndex||0,n);if(this.col.prevSelected!==a||e){var s=a*this.optHeight*-1;this.velocity=0,this.update(s,$,!0)}},t.prototype.hostData=function(){return{class:{"picker-col":!0,"picker-opts-left":"left"===this.col.align,"picker-opts-right":"right"===this.col.align},style:{"max-width":this.col.columnWidth}}},t.prototype.render=function(){var e=this,t=this.col;return[t.prefix&&a("div",{class:"picker-prefix",style:{width:t.prefixWidth}},t.prefix),a("div",{class:"picker-opts",style:{maxWidth:t.optionsWidth},ref:function(t){return e.optsEl=t}},t.options.map(function(e,t){return a("button",{type:"button",class:{"picker-opt":!0,"picker-opt-disabled":!!e.disabled},"opt-index":t},e.text)})),t.suffix&&a("div",{class:"picker-suffix",style:{width:t.suffixWidth}},t.suffix)]},Object.defineProperty(t,"is",{get:function(){return"ion-picker-column"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{col:{type:"Any",attr:"col"},el:{elementRef:!0},queue:{context:"queue"}}},enumerable:!0,configurable:!0}),t}(),R="picker-opt-selected",Z=.97,G=90,$=150,X=function(){function e(){}return e.prototype.create=function(e){return r.createOverlay(this.doc.createElement("ion-picker"),e)},e.prototype.dismiss=function(e,t,i){return r.dismissOverlay(this.doc,e,t,"ion-picker",i)},e.prototype.getTop=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,r.getOverlay(this.doc,"ion-picker")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-picker-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}();t.IonDatetime=H,t.IonPicker=J,t.IonPickerColumn=U,t.IonPickerController=X,Object.defineProperty(t,"__esModule",{value:!0})});