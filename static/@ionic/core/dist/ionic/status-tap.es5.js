/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("status-tap.js",["exports"],function(n){window,n.startStatusTap=function(n,t){n.addEventListener("statusTap",function(){t.read(function(){var e=n.document.elementFromPoint(n.innerWidth/2,n.innerHeight/2);if(e){var o=e.closest("ion-content");o&&o.componentOnReady().then(function(){t.write(function(){return o.scrollToTop(300)})})}})})},Object.defineProperty(n,"__esModule",{value:!0})});