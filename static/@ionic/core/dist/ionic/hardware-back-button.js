/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;function n(t){let n=!1;t.document.addEventListener("backbutton",()=>{if(n)return;const e=[],o=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,n){e.push({priority:t,handler:n})}}});if(t.document.dispatchEvent(o),e.length>0){let t,o=Number.MIN_SAFE_INTEGER;e.forEach(n=>{n.priority>=o&&(o=n.priority,t=n.handler)}),n=!0,async function(t){try{if(t){const n=t();null!=n&&await n}}catch(t){console.error(t)}}(t).then(()=>n=!1)}})}export{n as startHardwareBackButton};