/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
function startStatusTap(t,n){t.addEventListener("statusTap",function(){n.read(function(){var e=t.document.elementFromPoint(t.innerWidth/2,t.innerHeight/2);if(e){var o=e.closest("ion-content");o&&o.componentOnReady().then(function(){n.write(function(){return o.scrollToTop(300)})})}})})}export{startStatusTap};