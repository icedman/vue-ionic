/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:n}=window.Ionic;function o(n,o){o.read(async()=>{const t=n.innerWidth,e=n.innerWidth,c=n.document.elementFromPoint(t/2,e/2);if(!c)return;const i=c.closest("ion-content");i&&(await i.componentOnReady(),o.write(()=>{i.getScrollElement().scrollToTop(300)}))})}export{o as startStatusTap};