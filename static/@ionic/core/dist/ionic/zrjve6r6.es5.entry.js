/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("zrjve6r6",["exports","./chunk-b34e377b.js"],function(e,t){window;var n=function(){function e(){}return e.prototype.addRipple=function(e,n){var i=this;this.config.getBoolean("animated",!0)&&t.rIC(function(){return i.prepareRipple(e,n)})},e.prototype.prepareRipple=function(e,t){var n,u,a,p=this;this.queue.read(function(){var i=p.el.getBoundingClientRect(),o=i.width,c=i.height;a=Math.min(2*Math.sqrt(o*o+c*c),r),n=e-i.left-.5*a,u=t-i.top-.5*a}),this.queue.write(function(){var e=p.win.document.createElement("div");e.classList.add("ripple-effect");var t=e.style,r=Math.max(i*Math.sqrt(a),o);t.top=u+"px",t.left=n+"px",t.width=t.height=a+"px",t.animationDuration=r+"ms",(p.el.shadowRoot||p.el).appendChild(e),setTimeout(function(){return e.remove()},r+50)})},Object.defineProperty(e,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{addRipple:{method:!0},config:{context:"config"},el:{elementRef:!0},queue:{context:"queue"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0}.ripple-effect,:host{position:absolute;contain:strict}.ripple-effect{border-radius:50%;background-color:currentColor;color:inherit;opacity:0;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;will-change:transform,opacity;pointer-events:none}\@-webkit-keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}\@keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"},enumerable:!0,configurable:!0}),e}(),i=35,o=260,r=550;e.IonRippleEffect=n,Object.defineProperty(e,"__esModule",{value:!0})});