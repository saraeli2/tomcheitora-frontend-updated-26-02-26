import{_ as ee,c as H,o as G,b as pe,F as K,h as J,t as Et,a as B,w as R,j as je,a1 as Ae,a2 as De,f as dt,Y as Vt,d as ai}from"./index-BGIMdqyN.js";import{V as se}from"./VImg-nOKaZD-s.js";import{V as Bt}from"./VCardText-DfrFZhA0.js";import{V as Gt}from"./VCard-CF2BClSY.js";import{_ as oi}from"./AppCardCode-C-zO1RUn.js";import{V as li,a as re}from"./VRow-BFNCnCWI.js";import"./VAvatar-CYJWVBhL.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VDivider-B1B4kDZB.js";/* empty css              */function It(r){return r!==null&&typeof r=="object"&&"constructor"in r&&r.constructor===Object}function Tt(r,e){r===void 0&&(r={}),e===void 0&&(e={});const i=["__proto__","constructor","prototype"];Object.keys(e).filter(t=>i.indexOf(t)<0).forEach(t=>{typeof r[t]>"u"?r[t]=e[t]:It(e[t])&&It(r[t])&&Object.keys(e[t]).length>0&&Tt(r[t],e[t])})}const Ht={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Z(){const r=typeof document<"u"?document:{};return Tt(r,Ht),r}const pi={document:Ht,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(r){return typeof setTimeout>"u"?(r(),null):setTimeout(r,0)},cancelAnimationFrame(r){typeof setTimeout>"u"||clearTimeout(r)}};function W(){const r=typeof window<"u"?window:{};return Tt(r,pi),r}function ve(r){return r===void 0&&(r=""),r.trim().split(" ").filter(e=>!!e.trim())}function di(r){const e=r;Object.keys(e).forEach(i=>{try{e[i]=null}catch{}try{delete e[i]}catch{}})}function Se(r,e){return e===void 0&&(e=0),setTimeout(r,e)}function le(){return Date.now()}function ci(r){const e=W();let i;return e.getComputedStyle&&(i=e.getComputedStyle(r,null)),!i&&r.currentStyle&&(i=r.currentStyle),i||(i=r.style),i}function vt(r,e){e===void 0&&(e="x");const i=W();let t,s,n;const o=ci(r);return i.WebKitCSSMatrix?(s=o.transform||o.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(c=>c.replace(",",".")).join(", ")),n=new i.WebKitCSSMatrix(s==="none"?"":s)):(n=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=n.toString().split(",")),e==="x"&&(i.WebKitCSSMatrix?s=n.m41:t.length===16?s=parseFloat(t[12]):s=parseFloat(t[4])),e==="y"&&(i.WebKitCSSMatrix?s=n.m42:t.length===16?s=parseFloat(t[13]):s=parseFloat(t[5])),s||0}function Oe(r){return typeof r=="object"&&r!==null&&r.constructor&&Object.prototype.toString.call(r).slice(8,-1)==="Object"}function fi(r){return typeof window<"u"&&typeof window.HTMLElement<"u"?r instanceof HTMLElement:r&&(r.nodeType===1||r.nodeType===11)}function ae(){const r=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){const t=i<0||arguments.length<=i?void 0:arguments[i];if(t!=null&&!fi(t)){const s=Object.keys(Object(t)).filter(n=>e.indexOf(n)<0);for(let n=0,o=s.length;n<o;n+=1){const c=s[n],f=Object.getOwnPropertyDescriptor(t,c);f!==void 0&&f.enumerable&&(Oe(r[c])&&Oe(t[c])?t[c].__swiper__?r[c]=t[c]:ae(r[c],t[c]):!Oe(r[c])&&Oe(t[c])?(r[c]={},t[c].__swiper__?r[c]=t[c]:ae(r[c],t[c])):r[c]=t[c])}}}return r}function $e(r,e,i){r.style.setProperty(e,i)}function Rt(r){let{swiper:e,targetPosition:i,side:t}=r;const s=W(),n=-e.translate;let o=null,c;const f=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const d=i>n?"next":"prev",p=(v,w)=>d==="next"&&v>=w||d==="prev"&&v<=w,u=()=>{c=new Date().getTime(),o===null&&(o=c);const v=Math.max(Math.min((c-o)/f,1),0),w=.5-Math.cos(v*Math.PI)/2;let a=n+w*(i-n);if(p(a,i)&&(a=i),e.wrapperEl.scrollTo({[t]:a}),p(a,i)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[t]:a})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(u)};u()}function xe(r){return r.querySelector(".swiper-slide-transform")||r.shadowRoot&&r.shadowRoot.querySelector(".swiper-slide-transform")||r}function Q(r,e){e===void 0&&(e="");const i=W(),t=[...r.children];return i.HTMLSlotElement&&r instanceof HTMLSlotElement&&t.push(...r.assignedElements()),e?t.filter(s=>s.matches(e)):t}function ui(r,e){const i=[e];for(;i.length>0;){const t=i.shift();if(r===t)return!0;i.push(...t.children,...t.shadowRoot?t.shadowRoot.children:[],...t.assignedElements?t.assignedElements():[])}}function mi(r,e){const i=W();let t=e.contains(r);return!t&&i.HTMLSlotElement&&e instanceof HTMLSlotElement&&(t=[...e.assignedElements()].includes(r),t||(t=ui(r,e))),t}function qe(r){try{console.warn(r);return}catch{}}function oe(r,e){e===void 0&&(e=[]);const i=document.createElement(r);return i.classList.add(...Array.isArray(e)?e:ve(e)),i}function Ue(r){const e=W(),i=Z(),t=r.getBoundingClientRect(),s=i.body,n=r.clientTop||s.clientTop||0,o=r.clientLeft||s.clientLeft||0,c=r===e?e.scrollY:r.scrollTop,f=r===e?e.scrollX:r.scrollLeft;return{top:t.top+c-n,left:t.left+f-o}}function wi(r,e){const i=[];for(;r.previousElementSibling;){const t=r.previousElementSibling;e?t.matches(e)&&i.push(t):i.push(t),r=t}return i}function gi(r,e){const i=[];for(;r.nextElementSibling;){const t=r.nextElementSibling;e?t.matches(e)&&i.push(t):i.push(t),r=t}return i}function be(r,e){return W().getComputedStyle(r,null).getPropertyValue(e)}function Be(r){let e=r,i;if(e){for(i=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(i+=1);return i}}function ye(r,e){const i=[];let t=r.parentElement;for(;t;)e?t.matches(e)&&i.push(t):i.push(t),t=t.parentElement;return i}function Ve(r,e){function i(t){t.target===r&&(e.call(r,t),r.removeEventListener("transitionend",i))}e&&r.addEventListener("transitionend",i)}function bt(r,e,i){const t=W();return r[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(t.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(t.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function N(r){return(Array.isArray(r)?r:[r]).filter(e=>!!e)}function Ke(r){return e=>Math.abs(e)>0&&r.browser&&r.browser.need3dFix&&Math.abs(e)%90===0?e+.001:e}function fe(r,e){e===void 0&&(e=""),typeof trustedTypes<"u"?r.innerHTML=trustedTypes.createPolicy("html",{createHTML:i=>i}).createHTML(e):r.innerHTML=e}let ct;function hi(){const r=W(),e=Z();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in r||r.DocumentTouch&&e instanceof r.DocumentTouch)}}function Xt(){return ct||(ct=hi()),ct}let ft;function vi(r){let{userAgent:e}=r===void 0?{}:r;const i=Xt(),t=W(),s=t.navigator.platform,n=e||t.navigator.userAgent,o={ios:!1,android:!1},c=t.screen.width,f=t.screen.height,d=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),v=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),w=s==="Win32";let a=s==="MacIntel";const l=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!p&&a&&i.touch&&l.indexOf(`${c}x${f}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),a=!1),d&&!w&&(o.os="android",o.android=!0),(p||v||u)&&(o.os="ios",o.ios=!0),o}function Nt(r){return r===void 0&&(r={}),ft||(ft=vi(r)),ft}let ut;function bi(){const r=W(),e=Nt();let i=!1;function t(){const c=r.navigator.userAgent.toLowerCase();return c.indexOf("safari")>=0&&c.indexOf("chrome")<0&&c.indexOf("android")<0}if(t()){const c=String(r.navigator.userAgent);if(c.includes("Version/")){const[f,d]=c.split("Version/")[1].split(" ")[0].split(".").map(p=>Number(p));i=f<16||f===16&&d<2}}const s=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent),n=t(),o=n||s&&e.ios;return{isSafari:i||n,needPerspectiveFix:i,need3dFix:o,isWebView:s}}function Yt(){return ut||(ut=bi()),ut}function yi(r){let{swiper:e,on:i,emit:t}=r;const s=W();let n=null,o=null;const c=()=>{!e||e.destroyed||!e.initialized||(t("beforeResize"),t("resize"))},f=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(u=>{o=s.requestAnimationFrame(()=>{const{width:v,height:w}=e;let a=v,l=w;u.forEach(h=>{let{contentBoxSize:b,contentRect:g,target:m}=h;m&&m!==e.el||(a=g?g.width:(b[0]||b).inlineSize,l=g?g.height:(b[0]||b).blockSize)}),(a!==v||l!==w)&&c()})}),n.observe(e.el))},d=()=>{o&&s.cancelAnimationFrame(o),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},p=()=>{!e||e.destroyed||!e.initialized||t("orientationchange")};i("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){f();return}s.addEventListener("resize",c),s.addEventListener("orientationchange",p)}),i("destroy",()=>{d(),s.removeEventListener("resize",c),s.removeEventListener("orientationchange",p)})}function Si(r){let{swiper:e,extendParams:i,on:t,emit:s}=r;const n=[],o=W(),c=function(p,u){u===void 0&&(u={});const v=o.MutationObserver||o.WebkitMutationObserver,w=new v(a=>{if(e.__preventObserver__)return;if(a.length===1){s("observerUpdate",a[0]);return}const l=function(){s("observerUpdate",a[0])};o.requestAnimationFrame?o.requestAnimationFrame(l):o.setTimeout(l,0)});w.observe(p,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:e.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),n.push(w)},f=()=>{if(e.params.observer){if(e.params.observeParents){const p=ye(e.hostEl);for(let u=0;u<p.length;u+=1)c(p[u])}c(e.hostEl,{childList:e.params.observeSlideChildren}),c(e.wrapperEl,{attributes:!1})}},d=()=>{n.forEach(p=>{p.disconnect()}),n.splice(0,n.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",f),t("destroy",d)}var xi={on(r,e,i){const t=this;if(!t.eventsListeners||t.destroyed||typeof e!="function")return t;const s=i?"unshift":"push";return r.split(" ").forEach(n=>{t.eventsListeners[n]||(t.eventsListeners[n]=[]),t.eventsListeners[n][s](e)}),t},once(r,e,i){const t=this;if(!t.eventsListeners||t.destroyed||typeof e!="function")return t;function s(){t.off(r,s),s.__emitterProxy&&delete s.__emitterProxy;for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];e.apply(t,o)}return s.__emitterProxy=e,t.on(r,s,i)},onAny(r,e){const i=this;if(!i.eventsListeners||i.destroyed||typeof r!="function")return i;const t=e?"unshift":"push";return i.eventsAnyListeners.indexOf(r)<0&&i.eventsAnyListeners[t](r),i},offAny(r){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const i=e.eventsAnyListeners.indexOf(r);return i>=0&&e.eventsAnyListeners.splice(i,1),e},off(r,e){const i=this;return!i.eventsListeners||i.destroyed||!i.eventsListeners||r.split(" ").forEach(t=>{typeof e>"u"?i.eventsListeners[t]=[]:i.eventsListeners[t]&&i.eventsListeners[t].forEach((s,n)=>{(s===e||s.__emitterProxy&&s.__emitterProxy===e)&&i.eventsListeners[t].splice(n,1)})}),i},emit(){const r=this;if(!r.eventsListeners||r.destroyed||!r.eventsListeners)return r;let e,i,t;for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return typeof n[0]=="string"||Array.isArray(n[0])?(e=n[0],i=n.slice(1,n.length),t=r):(e=n[0].events,i=n[0].data,t=n[0].context||r),i.unshift(t),(Array.isArray(e)?e:e.split(" ")).forEach(f=>{r.eventsAnyListeners&&r.eventsAnyListeners.length&&r.eventsAnyListeners.forEach(d=>{d.apply(t,[f,...i])}),r.eventsListeners&&r.eventsListeners[f]&&r.eventsListeners[f].forEach(d=>{d.apply(t,i)})}),r}};function Ei(){const r=this;let e,i;const t=r.el;typeof r.params.width<"u"&&r.params.width!==null?e=r.params.width:e=t.clientWidth,typeof r.params.height<"u"&&r.params.height!==null?i=r.params.height:i=t.clientHeight,!(e===0&&r.isHorizontal()||i===0&&r.isVertical())&&(e=e-parseInt(be(t,"padding-left")||0,10)-parseInt(be(t,"padding-right")||0,10),i=i-parseInt(be(t,"padding-top")||0,10)-parseInt(be(t,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(i)&&(i=0),Object.assign(r,{width:e,height:i,size:r.isHorizontal()?e:i}))}function Ti(){const r=this;function e(T,z){return parseFloat(T.getPropertyValue(r.getDirectionLabel(z))||0)}const i=r.params,{wrapperEl:t,slidesEl:s,size:n,rtlTranslate:o,wrongRTL:c}=r,f=r.virtual&&i.virtual.enabled,d=f?r.virtual.slides.length:r.slides.length,p=Q(s,`.${r.params.slideClass}, swiper-slide`),u=f?r.virtual.slides.length:p.length;let v=[];const w=[],a=[];let l=i.slidesOffsetBefore;typeof l=="function"&&(l=i.slidesOffsetBefore.call(r));let h=i.slidesOffsetAfter;typeof h=="function"&&(h=i.slidesOffsetAfter.call(r));const b=r.snapGrid.length,g=r.slidesGrid.length;let m=i.spaceBetween,y=-l,x=0,k=0;if(typeof n>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*n:typeof m=="string"&&(m=parseFloat(m)),r.virtualSize=-m,p.forEach(T=>{o?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),i.centeredSlides&&i.cssMode&&($e(t,"--swiper-centered-offset-before",""),$e(t,"--swiper-centered-offset-after",""));const C=i.grid&&i.grid.rows>1&&r.grid;C?r.grid.initSlides(p):r.grid&&r.grid.unsetSlides();let I;const S=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(T=>typeof i.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<u;T+=1){I=0;let z;if(p[T]&&(z=p[T]),C&&r.grid.updateSlide(T,z,p),!(p[T]&&be(z,"display")==="none")){if(i.slidesPerView==="auto"){S&&(p[T].style[r.getDirectionLabel("width")]="");const P=getComputedStyle(z),M=z.style.transform,L=z.style.webkitTransform;if(M&&(z.style.transform="none"),L&&(z.style.webkitTransform="none"),i.roundLengths)I=r.isHorizontal()?bt(z,"width"):bt(z,"height");else{const A=e(P,"width"),O=e(P,"padding-left"),E=e(P,"padding-right"),_=e(P,"margin-left"),V=e(P,"margin-right"),X=P.getPropertyValue("box-sizing");if(X&&X==="border-box")I=A+_+V;else{const{clientWidth:q,offsetWidth:U}=z;I=A+O+E+_+V+(U-q)}}M&&(z.style.transform=M),L&&(z.style.webkitTransform=L),i.roundLengths&&(I=Math.floor(I))}else I=(n-(i.slidesPerView-1)*m)/i.slidesPerView,i.roundLengths&&(I=Math.floor(I)),p[T]&&(p[T].style[r.getDirectionLabel("width")]=`${I}px`);p[T]&&(p[T].swiperSlideSize=I),a.push(I),i.centeredSlides?(y=y+I/2+x/2+m,x===0&&T!==0&&(y=y-n/2-m),T===0&&(y=y-n/2-m),Math.abs(y)<1/1e3&&(y=0),i.roundLengths&&(y=Math.floor(y)),k%i.slidesPerGroup===0&&v.push(y),w.push(y)):(i.roundLengths&&(y=Math.floor(y)),(k-Math.min(r.params.slidesPerGroupSkip,k))%r.params.slidesPerGroup===0&&v.push(y),w.push(y),y=y+I+m),r.virtualSize+=I+m,x=I,k+=1}}if(r.virtualSize=Math.max(r.virtualSize,n)+h,o&&c&&(i.effect==="slide"||i.effect==="coverflow")&&(t.style.width=`${r.virtualSize+m}px`),i.setWrapperSize&&(t.style[r.getDirectionLabel("width")]=`${r.virtualSize+m}px`),C&&r.grid.updateWrapperSize(I,v),!i.centeredSlides){const T=[];for(let z=0;z<v.length;z+=1){let P=v[z];i.roundLengths&&(P=Math.floor(P)),v[z]<=r.virtualSize-n&&T.push(P)}v=T,Math.floor(r.virtualSize-n)-Math.floor(v[v.length-1])>1&&v.push(r.virtualSize-n)}if(f&&i.loop){const T=a[0]+m;if(i.slidesPerGroup>1){const z=Math.ceil((r.virtual.slidesBefore+r.virtual.slidesAfter)/i.slidesPerGroup),P=T*i.slidesPerGroup;for(let M=0;M<z;M+=1)v.push(v[v.length-1]+P)}for(let z=0;z<r.virtual.slidesBefore+r.virtual.slidesAfter;z+=1)i.slidesPerGroup===1&&v.push(v[v.length-1]+T),w.push(w[w.length-1]+T),r.virtualSize+=T}if(v.length===0&&(v=[0]),m!==0){const T=r.isHorizontal()&&o?"marginLeft":r.getDirectionLabel("marginRight");p.filter((z,P)=>!i.cssMode||i.loop?!0:P!==p.length-1).forEach(z=>{z.style[T]=`${m}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let T=0;a.forEach(P=>{T+=P+(m||0)}),T-=m;const z=T>n?T-n:0;v=v.map(P=>P<=0?-l:P>z?z+h:P)}if(i.centerInsufficientSlides){let T=0;a.forEach(P=>{T+=P+(m||0)}),T-=m;const z=(i.slidesOffsetBefore||0)+(i.slidesOffsetAfter||0);if(T+z<n){const P=(n-T-z)/2;v.forEach((M,L)=>{v[L]=M-P}),w.forEach((M,L)=>{w[L]=M+P})}}if(Object.assign(r,{slides:p,snapGrid:v,slidesGrid:w,slidesSizesGrid:a}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){$e(t,"--swiper-centered-offset-before",`${-v[0]}px`),$e(t,"--swiper-centered-offset-after",`${r.size/2-a[a.length-1]/2}px`);const T=-r.snapGrid[0],z=-r.slidesGrid[0];r.snapGrid=r.snapGrid.map(P=>P+T),r.slidesGrid=r.slidesGrid.map(P=>P+z)}if(u!==d&&r.emit("slidesLengthChange"),v.length!==b&&(r.params.watchOverflow&&r.checkOverflow(),r.emit("snapGridLengthChange")),w.length!==g&&r.emit("slidesGridLengthChange"),i.watchSlidesProgress&&r.updateSlidesOffset(),r.emit("slidesUpdated"),!f&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const T=`${i.containerModifierClass}backface-hidden`,z=r.el.classList.contains(T);u<=i.maxBackfaceHiddenSlides?z||r.el.classList.add(T):z&&r.el.classList.remove(T)}}function _i(r){const e=this,i=[],t=e.virtual&&e.params.virtual.enabled;let s=0,n;typeof r=="number"?e.setTransition(r):r===!0&&e.setTransition(e.params.speed);const o=c=>t?e.slides[e.getSlideIndexByData(c)]:e.slides[c];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(c=>{i.push(c)});else for(n=0;n<Math.ceil(e.params.slidesPerView);n+=1){const c=e.activeIndex+n;if(c>e.slides.length&&!t)break;i.push(o(c))}else i.push(o(e.activeIndex));for(n=0;n<i.length;n+=1)if(typeof i[n]<"u"){const c=i[n].offsetHeight;s=c>s?c:s}(s||s===0)&&(e.wrapperEl.style.height=`${s}px`)}function Mi(){const r=this,e=r.slides,i=r.isElement?r.isHorizontal()?r.wrapperEl.offsetLeft:r.wrapperEl.offsetTop:0;for(let t=0;t<e.length;t+=1)e[t].swiperSlideOffset=(r.isHorizontal()?e[t].offsetLeft:e[t].offsetTop)-i-r.cssOverflowAdjustment()}const zt=(r,e,i)=>{e&&!r.classList.contains(i)?r.classList.add(i):!e&&r.classList.contains(i)&&r.classList.remove(i)};function Pi(r){r===void 0&&(r=this&&this.translate||0);const e=this,i=e.params,{slides:t,rtlTranslate:s,snapGrid:n}=e;if(t.length===0)return;typeof t[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-r;s&&(o=r),e.visibleSlidesIndexes=[],e.visibleSlides=[];let c=i.spaceBetween;typeof c=="string"&&c.indexOf("%")>=0?c=parseFloat(c.replace("%",""))/100*e.size:typeof c=="string"&&(c=parseFloat(c));for(let f=0;f<t.length;f+=1){const d=t[f];let p=d.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(p-=t[0].swiperSlideOffset);const u=(o+(i.centeredSlides?e.minTranslate():0)-p)/(d.swiperSlideSize+c),v=(o-n[0]+(i.centeredSlides?e.minTranslate():0)-p)/(d.swiperSlideSize+c),w=-(o-p),a=w+e.slidesSizesGrid[f],l=w>=0&&w<=e.size-e.slidesSizesGrid[f],h=w>=0&&w<e.size-1||a>1&&a<=e.size||w<=0&&a>=e.size;h&&(e.visibleSlides.push(d),e.visibleSlidesIndexes.push(f)),zt(d,h,i.slideVisibleClass),zt(d,l,i.slideFullyVisibleClass),d.progress=s?-u:u,d.originalProgress=s?-v:v}}function Ci(r){const e=this;if(typeof r>"u"){const p=e.rtlTranslate?-1:1;r=e&&e.translate&&e.translate*p||0}const i=e.params,t=e.maxTranslate()-e.minTranslate();let{progress:s,isBeginning:n,isEnd:o,progressLoop:c}=e;const f=n,d=o;if(t===0)s=0,n=!0,o=!0;else{s=(r-e.minTranslate())/t;const p=Math.abs(r-e.minTranslate())<1,u=Math.abs(r-e.maxTranslate())<1;n=p||s<=0,o=u||s>=1,p&&(s=0),u&&(s=1)}if(i.loop){const p=e.getSlideIndexByData(0),u=e.getSlideIndexByData(e.slides.length-1),v=e.slidesGrid[p],w=e.slidesGrid[u],a=e.slidesGrid[e.slidesGrid.length-1],l=Math.abs(r);l>=v?c=(l-v)/a:c=(l+a-w)/a,c>1&&(c-=1)}Object.assign(e,{progress:s,progressLoop:c,isBeginning:n,isEnd:o}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&e.updateSlidesProgress(r),n&&!f&&e.emit("reachBeginning toEdge"),o&&!d&&e.emit("reachEnd toEdge"),(f&&!n||d&&!o)&&e.emit("fromEdge"),e.emit("progress",s)}const mt=(r,e,i)=>{e&&!r.classList.contains(i)?r.classList.add(i):!e&&r.classList.contains(i)&&r.classList.remove(i)};function Ii(){const r=this,{slides:e,params:i,slidesEl:t,activeIndex:s}=r,n=r.virtual&&i.virtual.enabled,o=r.grid&&i.grid&&i.grid.rows>1,c=u=>Q(t,`.${i.slideClass}${u}, swiper-slide${u}`)[0];let f,d,p;if(n)if(i.loop){let u=s-r.virtual.slidesBefore;u<0&&(u=r.virtual.slides.length+u),u>=r.virtual.slides.length&&(u-=r.virtual.slides.length),f=c(`[data-swiper-slide-index="${u}"]`)}else f=c(`[data-swiper-slide-index="${s}"]`);else o?(f=e.find(u=>u.column===s),p=e.find(u=>u.column===s+1),d=e.find(u=>u.column===s-1)):f=e[s];f&&(o||(p=gi(f,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!p&&(p=e[0]),d=wi(f,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!d===0&&(d=e[e.length-1]))),e.forEach(u=>{mt(u,u===f,i.slideActiveClass),mt(u,u===p,i.slideNextClass),mt(u,u===d,i.slidePrevClass)}),r.emitSlidesClasses()}const Fe=(r,e)=>{if(!r||r.destroyed||!r.params)return;const i=()=>r.isElement?"swiper-slide":`.${r.params.slideClass}`,t=e.closest(i());if(t){let s=t.querySelector(`.${r.params.lazyPreloaderClass}`);!s&&r.isElement&&(t.shadowRoot?s=t.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{t.shadowRoot&&(s=t.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`),s&&s.remove())})),s&&s.remove()}},wt=(r,e)=>{if(!r.slides[e])return;const i=r.slides[e].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},yt=r=>{if(!r||r.destroyed||!r.params)return;let e=r.params.lazyPreloadPrevNext;const i=r.slides.length;if(!i||!e||e<0)return;e=Math.min(e,i);const t=r.params.slidesPerView==="auto"?r.slidesPerViewDynamic():Math.ceil(r.params.slidesPerView),s=r.activeIndex;if(r.params.grid&&r.params.grid.rows>1){const o=s,c=[o-e];c.push(...Array.from({length:e}).map((f,d)=>o+t+d)),r.slides.forEach((f,d)=>{c.includes(f.column)&&wt(r,d)});return}const n=s+t-1;if(r.params.rewind||r.params.loop)for(let o=s-e;o<=n+e;o+=1){const c=(o%i+i)%i;(c<s||c>n)&&wt(r,c)}else for(let o=Math.max(s-e,0);o<=Math.min(n+e,i-1);o+=1)o!==s&&(o>n||o<s)&&wt(r,o)};function zi(r){const{slidesGrid:e,params:i}=r,t=r.rtlTranslate?r.translate:-r.translate;let s;for(let n=0;n<e.length;n+=1)typeof e[n+1]<"u"?t>=e[n]&&t<e[n+1]-(e[n+1]-e[n])/2?s=n:t>=e[n]&&t<e[n+1]&&(s=n+1):t>=e[n]&&(s=n);return i.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function Li(r){const e=this,i=e.rtlTranslate?e.translate:-e.translate,{snapGrid:t,params:s,activeIndex:n,realIndex:o,snapIndex:c}=e;let f=r,d;const p=w=>{let a=w-e.virtual.slidesBefore;return a<0&&(a=e.virtual.slides.length+a),a>=e.virtual.slides.length&&(a-=e.virtual.slides.length),a};if(typeof f>"u"&&(f=zi(e)),t.indexOf(i)>=0)d=t.indexOf(i);else{const w=Math.min(s.slidesPerGroupSkip,f);d=w+Math.floor((f-w)/s.slidesPerGroup)}if(d>=t.length&&(d=t.length-1),f===n&&!e.params.loop){d!==c&&(e.snapIndex=d,e.emit("snapIndexChange"));return}if(f===n&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=p(f);return}const u=e.grid&&s.grid&&s.grid.rows>1;let v;if(e.virtual&&s.virtual.enabled&&s.loop)v=p(f);else if(u){const w=e.slides.find(l=>l.column===f);let a=parseInt(w.getAttribute("data-swiper-slide-index"),10);Number.isNaN(a)&&(a=Math.max(e.slides.indexOf(w),0)),v=Math.floor(a/s.grid.rows)}else if(e.slides[f]){const w=e.slides[f].getAttribute("data-swiper-slide-index");w?v=parseInt(w,10):v=f}else v=f;Object.assign(e,{previousSnapIndex:c,snapIndex:d,previousRealIndex:o,realIndex:v,previousIndex:n,activeIndex:f}),e.initialized&&yt(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==v&&e.emit("realIndexChange"),e.emit("slideChange"))}function ki(r,e){const i=this,t=i.params;let s=r.closest(`.${t.slideClass}, swiper-slide`);!s&&i.isElement&&e&&e.length>1&&e.includes(r)&&[...e.slice(e.indexOf(r)+1,e.length)].forEach(c=>{!s&&c.matches&&c.matches(`.${t.slideClass}, swiper-slide`)&&(s=c)});let n=!1,o;if(s){for(let c=0;c<i.slides.length;c+=1)if(i.slides[c]===s){n=!0,o=c;break}}if(s&&n)i.clickedSlide=s,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=o;else{i.clickedSlide=void 0,i.clickedIndex=void 0;return}t.slideToClickedSlide&&i.clickedIndex!==void 0&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var ji={updateSize:Ei,updateSlides:Ti,updateAutoHeight:_i,updateSlidesOffset:Mi,updateSlidesProgress:Pi,updateProgress:Ci,updateSlidesClasses:Ii,updateActiveIndex:Li,updateClickedSlide:ki};function Ai(r){r===void 0&&(r=this.isHorizontal()?"x":"y");const e=this,{params:i,rtlTranslate:t,translate:s,wrapperEl:n}=e;if(i.virtualTranslate)return t?-s:s;if(i.cssMode)return s;let o=vt(n,r);return o+=e.cssOverflowAdjustment(),t&&(o=-o),o||0}function Di(r,e){const i=this,{rtlTranslate:t,params:s,wrapperEl:n,progress:o}=i;let c=0,f=0;const d=0;i.isHorizontal()?c=t?-r:r:f=r,s.roundLengths&&(c=Math.floor(c),f=Math.floor(f)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?c:f,s.cssMode?n[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-c:-f:s.virtualTranslate||(i.isHorizontal()?c-=i.cssOverflowAdjustment():f-=i.cssOverflowAdjustment(),n.style.transform=`translate3d(${c}px, ${f}px, ${d}px)`);let p;const u=i.maxTranslate()-i.minTranslate();u===0?p=0:p=(r-i.minTranslate())/u,p!==o&&i.updateProgress(r),i.emit("setTranslate",i.translate,e)}function Oi(){return-this.snapGrid[0]}function $i(){return-this.snapGrid[this.snapGrid.length-1]}function Vi(r,e,i,t,s){r===void 0&&(r=0),e===void 0&&(e=this.params.speed),i===void 0&&(i=!0),t===void 0&&(t=!0);const n=this,{params:o,wrapperEl:c}=n;if(n.animating&&o.preventInteractionOnTransition)return!1;const f=n.minTranslate(),d=n.maxTranslate();let p;if(t&&r>f?p=f:t&&r<d?p=d:p=r,n.updateProgress(p),o.cssMode){const u=n.isHorizontal();if(e===0)c[u?"scrollLeft":"scrollTop"]=-p;else{if(!n.support.smoothScroll)return Rt({swiper:n,targetPosition:-p,side:u?"left":"top"}),!0;c.scrollTo({[u?"left":"top"]:-p,behavior:"smooth"})}return!0}return e===0?(n.setTransition(0),n.setTranslate(p),i&&(n.emit("beforeTransitionStart",e,s),n.emit("transitionEnd"))):(n.setTransition(e),n.setTranslate(p),i&&(n.emit("beforeTransitionStart",e,s),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(v){!n||n.destroyed||v.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,n.animating=!1,i&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var Bi={getTranslate:Ai,setTranslate:Di,minTranslate:Oi,maxTranslate:$i,translateTo:Vi};function Gi(r,e){const i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${r}ms`,i.wrapperEl.style.transitionDelay=r===0?"0ms":""),i.emit("setTransition",r,e)}function Ft(r){let{swiper:e,runCallbacks:i,direction:t,step:s}=r;const{activeIndex:n,previousIndex:o}=e;let c=t;c||(n>o?c="next":n<o?c="prev":c="reset"),e.emit(`transition${s}`),i&&c==="reset"?e.emit(`slideResetTransition${s}`):i&&n!==o&&(e.emit(`slideChangeTransition${s}`),c==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`))}function Hi(r,e){r===void 0&&(r=!0);const i=this,{params:t}=i;t.cssMode||(t.autoHeight&&i.updateAutoHeight(),Ft({swiper:i,runCallbacks:r,direction:e,step:"Start"}))}function Ri(r,e){r===void 0&&(r=!0);const i=this,{params:t}=i;i.animating=!1,!t.cssMode&&(i.setTransition(0),Ft({swiper:i,runCallbacks:r,direction:e,step:"End"}))}var Xi={setTransition:Gi,transitionStart:Hi,transitionEnd:Ri};function Ni(r,e,i,t,s){r===void 0&&(r=0),i===void 0&&(i=!0),typeof r=="string"&&(r=parseInt(r,10));const n=this;let o=r;o<0&&(o=0);const{params:c,snapGrid:f,slidesGrid:d,previousIndex:p,activeIndex:u,rtlTranslate:v,wrapperEl:w,enabled:a}=n;if(!a&&!t&&!s||n.destroyed||n.animating&&c.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=n.params.speed);const l=Math.min(n.params.slidesPerGroupSkip,o);let h=l+Math.floor((o-l)/n.params.slidesPerGroup);h>=f.length&&(h=f.length-1);const b=-f[h];if(c.normalizeSlideIndex)for(let C=0;C<d.length;C+=1){const I=-Math.floor(b*100),S=Math.floor(d[C]*100),T=Math.floor(d[C+1]*100);typeof d[C+1]<"u"?I>=S&&I<T-(T-S)/2?o=C:I>=S&&I<T&&(o=C+1):I>=S&&(o=C)}if(n.initialized&&o!==u&&(!n.allowSlideNext&&(v?b>n.translate&&b>n.minTranslate():b<n.translate&&b<n.minTranslate())||!n.allowSlidePrev&&b>n.translate&&b>n.maxTranslate()&&(u||0)!==o))return!1;o!==(p||0)&&i&&n.emit("beforeSlideChangeStart"),n.updateProgress(b);let g;o>u?g="next":o<u?g="prev":g="reset";const m=n.virtual&&n.params.virtual.enabled;if(!(m&&s)&&(v&&-b===n.translate||!v&&b===n.translate))return n.updateActiveIndex(o),c.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),c.effect!=="slide"&&n.setTranslate(b),g!=="reset"&&(n.transitionStart(i,g),n.transitionEnd(i,g)),!1;if(c.cssMode){const C=n.isHorizontal(),I=v?b:-b;if(e===0)m&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),m&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{w[C?"scrollLeft":"scrollTop"]=I})):w[C?"scrollLeft":"scrollTop"]=I,m&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1});else{if(!n.support.smoothScroll)return Rt({swiper:n,targetPosition:I,side:C?"left":"top"}),!0;w.scrollTo({[C?"left":"top"]:I,behavior:"smooth"})}return!0}const k=Yt().isSafari;return m&&!s&&k&&n.isElement&&n.virtual.update(!1,!1,o),n.setTransition(e),n.setTranslate(b),n.updateActiveIndex(o),n.updateSlidesClasses(),n.emit("beforeTransitionStart",e,t),n.transitionStart(i,g),e===0?n.transitionEnd(i,g):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(I){!n||n.destroyed||I.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(i,g))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function Yi(r,e,i,t){r===void 0&&(r=0),i===void 0&&(i=!0),typeof r=="string"&&(r=parseInt(r,10));const s=this;if(s.destroyed)return;typeof e>"u"&&(e=s.params.speed);const n=s.grid&&s.params.grid&&s.params.grid.rows>1;let o=r;if(s.params.loop)if(s.virtual&&s.params.virtual.enabled)o=o+s.virtual.slidesBefore;else{let c;if(n){const v=o*s.params.grid.rows;c=s.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else c=s.getSlideIndexByData(o);const f=n?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:d}=s.params;let p=s.params.slidesPerView;p==="auto"?p=s.slidesPerViewDynamic():(p=Math.ceil(parseFloat(s.params.slidesPerView,10)),d&&p%2===0&&(p=p+1));let u=f-c<p;if(d&&(u=u||c<Math.ceil(p/2)),t&&d&&s.params.slidesPerView!=="auto"&&!n&&(u=!1),u){const v=d?c<s.activeIndex?"prev":"next":c-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?c+1:c-f+1,slideRealIndex:v==="next"?s.realIndex:void 0})}if(n){const v=o*s.params.grid.rows;o=s.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else o=s.getSlideIndexByData(o)}return requestAnimationFrame(()=>{s.slideTo(o,e,i,t)}),s}function Fi(r,e,i){e===void 0&&(e=!0);const t=this,{enabled:s,params:n,animating:o}=t;if(!s||t.destroyed)return t;typeof r>"u"&&(r=t.params.speed);let c=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(c=Math.max(t.slidesPerViewDynamic("current",!0),1));const f=t.activeIndex<n.slidesPerGroupSkip?1:c,d=t.virtual&&n.virtual.enabled;if(n.loop){if(o&&!d&&n.loopPreventsSliding)return!1;if(t.loopFix({direction:"next"}),t._clientLeft=t.wrapperEl.clientLeft,t.activeIndex===t.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{t.slideTo(t.activeIndex+f,r,e,i)}),!0}return n.rewind&&t.isEnd?t.slideTo(0,r,e,i):t.slideTo(t.activeIndex+f,r,e,i)}function Wi(r,e,i){e===void 0&&(e=!0);const t=this,{params:s,snapGrid:n,slidesGrid:o,rtlTranslate:c,enabled:f,animating:d}=t;if(!f||t.destroyed)return t;typeof r>"u"&&(r=t.params.speed);const p=t.virtual&&s.virtual.enabled;if(s.loop){if(d&&!p&&s.loopPreventsSliding)return!1;t.loopFix({direction:"prev"}),t._clientLeft=t.wrapperEl.clientLeft}const u=c?t.translate:-t.translate;function v(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const w=v(u),a=n.map(g=>v(g)),l=s.freeMode&&s.freeMode.enabled;let h=n[a.indexOf(w)-1];if(typeof h>"u"&&(s.cssMode||l)){let g;n.forEach((m,y)=>{w>=m&&(g=y)}),typeof g<"u"&&(h=l?n[g]:n[g>0?g-1:g])}let b=0;if(typeof h<"u"&&(b=o.indexOf(h),b<0&&(b=t.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(b=b-t.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),s.rewind&&t.isBeginning){const g=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1;return t.slideTo(g,r,e,i)}else if(s.loop&&t.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{t.slideTo(b,r,e,i)}),!0;return t.slideTo(b,r,e,i)}function qi(r,e,i){e===void 0&&(e=!0);const t=this;if(!t.destroyed)return typeof r>"u"&&(r=t.params.speed),t.slideTo(t.activeIndex,r,e,i)}function Ui(r,e,i,t){e===void 0&&(e=!0),t===void 0&&(t=.5);const s=this;if(s.destroyed)return;typeof r>"u"&&(r=s.params.speed);let n=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,n),c=o+Math.floor((n-o)/s.params.slidesPerGroup),f=s.rtlTranslate?s.translate:-s.translate;if(f>=s.snapGrid[c]){const d=s.snapGrid[c],p=s.snapGrid[c+1];f-d>(p-d)*t&&(n+=s.params.slidesPerGroup)}else{const d=s.snapGrid[c-1],p=s.snapGrid[c];f-d<=(p-d)*t&&(n-=s.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,s.slidesGrid.length-1),s.slideTo(n,r,e,i)}function Ki(){const r=this;if(r.destroyed)return;const{params:e,slidesEl:i}=r,t=e.slidesPerView==="auto"?r.slidesPerViewDynamic():e.slidesPerView;let s=r.clickedIndex,n;const o=r.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(r.animating)return;n=parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?s<r.loopedSlides-t/2||s>r.slides.length-r.loopedSlides+t/2?(r.loopFix(),s=r.getSlideIndex(Q(i,`${o}[data-swiper-slide-index="${n}"]`)[0]),Se(()=>{r.slideTo(s)})):r.slideTo(s):s>r.slides.length-t?(r.loopFix(),s=r.getSlideIndex(Q(i,`${o}[data-swiper-slide-index="${n}"]`)[0]),Se(()=>{r.slideTo(s)})):r.slideTo(s)}else r.slideTo(s)}var Zi={slideTo:Ni,slideToLoop:Yi,slideNext:Fi,slidePrev:Wi,slideReset:qi,slideToClosest:Ui,slideToClickedSlide:Ki};function Qi(r,e){const i=this,{params:t,slidesEl:s}=i;if(!t.loop||i.virtual&&i.params.virtual.enabled)return;const n=()=>{Q(s,`.${t.slideClass}, swiper-slide`).forEach((v,w)=>{v.setAttribute("data-swiper-slide-index",w)})},o=i.grid&&t.grid&&t.grid.rows>1,c=t.slidesPerGroup*(o?t.grid.rows:1),f=i.slides.length%c!==0,d=o&&i.slides.length%t.grid.rows!==0,p=u=>{for(let v=0;v<u;v+=1){const w=i.isElement?oe("swiper-slide",[t.slideBlankClass]):oe("div",[t.slideClass,t.slideBlankClass]);i.slidesEl.append(w)}};if(f){if(t.loopAddBlankSlides){const u=c-i.slides.length%c;p(u),i.recalcSlides(),i.updateSlides()}else qe("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else if(d){if(t.loopAddBlankSlides){const u=t.grid.rows-i.slides.length%t.grid.rows;p(u),i.recalcSlides(),i.updateSlides()}else qe("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else n();i.loopFix({slideRealIndex:r,direction:t.centeredSlides?void 0:"next",initial:e})}function Ji(r){let{slideRealIndex:e,slideTo:i=!0,direction:t,setTranslate:s,activeSlideIndex:n,initial:o,byController:c,byMousewheel:f}=r===void 0?{}:r;const d=this;if(!d.params.loop)return;d.emit("beforeLoopFix");const{slides:p,allowSlidePrev:u,allowSlideNext:v,slidesEl:w,params:a}=d,{centeredSlides:l,initialSlide:h}=a;if(d.allowSlidePrev=!0,d.allowSlideNext=!0,d.virtual&&a.virtual.enabled){i&&(!a.centeredSlides&&d.snapIndex===0?d.slideTo(d.virtual.slides.length,0,!1,!0):a.centeredSlides&&d.snapIndex<a.slidesPerView?d.slideTo(d.virtual.slides.length+d.snapIndex,0,!1,!0):d.snapIndex===d.snapGrid.length-1&&d.slideTo(d.virtual.slidesBefore,0,!1,!0)),d.allowSlidePrev=u,d.allowSlideNext=v,d.emit("loopFix");return}let b=a.slidesPerView;b==="auto"?b=d.slidesPerViewDynamic():(b=Math.ceil(parseFloat(a.slidesPerView,10)),l&&b%2===0&&(b=b+1));const g=a.slidesPerGroupAuto?b:a.slidesPerGroup;let m=g;m%g!==0&&(m+=g-m%g),m+=a.loopAdditionalSlides,d.loopedSlides=m;const y=d.grid&&a.grid&&a.grid.rows>1;p.length<b+m||d.params.effect==="cards"&&p.length<b+m*2?qe("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):y&&a.grid.fill==="row"&&qe("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const x=[],k=[],C=y?Math.ceil(p.length/a.grid.rows):p.length,I=o&&C-h<b&&!l;let S=I?h:d.activeIndex;typeof n>"u"?n=d.getSlideIndex(p.find(O=>O.classList.contains(a.slideActiveClass))):S=n;const T=t==="next"||!t,z=t==="prev"||!t;let P=0,M=0;const A=(y?p[n].column:n)+(l&&typeof s>"u"?-b/2+.5:0);if(A<m){P=Math.max(m-A,g);for(let O=0;O<m-A;O+=1){const E=O-Math.floor(O/C)*C;if(y){const _=C-E-1;for(let V=p.length-1;V>=0;V-=1)p[V].column===_&&x.push(V)}else x.push(C-E-1)}}else if(A+b>C-m){M=Math.max(A-(C-m*2),g),I&&(M=Math.max(M,b-C+h+1));for(let O=0;O<M;O+=1){const E=O-Math.floor(O/C)*C;y?p.forEach((_,V)=>{_.column===E&&k.push(V)}):k.push(E)}}if(d.__preventObserver__=!0,requestAnimationFrame(()=>{d.__preventObserver__=!1}),d.params.effect==="cards"&&p.length<b+m*2&&(k.includes(n)&&k.splice(k.indexOf(n),1),x.includes(n)&&x.splice(x.indexOf(n),1)),z&&x.forEach(O=>{p[O].swiperLoopMoveDOM=!0,w.prepend(p[O]),p[O].swiperLoopMoveDOM=!1}),T&&k.forEach(O=>{p[O].swiperLoopMoveDOM=!0,w.append(p[O]),p[O].swiperLoopMoveDOM=!1}),d.recalcSlides(),a.slidesPerView==="auto"?d.updateSlides():y&&(x.length>0&&z||k.length>0&&T)&&d.slides.forEach((O,E)=>{d.grid.updateSlide(E,O,d.slides)}),a.watchSlidesProgress&&d.updateSlidesOffset(),i){if(x.length>0&&z){if(typeof e>"u"){const O=d.slidesGrid[S],_=d.slidesGrid[S+P]-O;f?d.setTranslate(d.translate-_):(d.slideTo(S+Math.ceil(P),0,!1,!0),s&&(d.touchEventsData.startTranslate=d.touchEventsData.startTranslate-_,d.touchEventsData.currentTranslate=d.touchEventsData.currentTranslate-_))}else if(s){const O=y?x.length/a.grid.rows:x.length;d.slideTo(d.activeIndex+O,0,!1,!0),d.touchEventsData.currentTranslate=d.translate}}else if(k.length>0&&T)if(typeof e>"u"){const O=d.slidesGrid[S],_=d.slidesGrid[S-M]-O;f?d.setTranslate(d.translate-_):(d.slideTo(S-M,0,!1,!0),s&&(d.touchEventsData.startTranslate=d.touchEventsData.startTranslate-_,d.touchEventsData.currentTranslate=d.touchEventsData.currentTranslate-_))}else{const O=y?k.length/a.grid.rows:k.length;d.slideTo(d.activeIndex-O,0,!1,!0)}}if(d.allowSlidePrev=u,d.allowSlideNext=v,d.controller&&d.controller.control&&!c){const O={slideRealIndex:e,direction:t,setTranslate:s,activeSlideIndex:n,byController:!0};Array.isArray(d.controller.control)?d.controller.control.forEach(E=>{!E.destroyed&&E.params.loop&&E.loopFix({...O,slideTo:E.params.slidesPerView===a.slidesPerView?i:!1})}):d.controller.control instanceof d.constructor&&d.controller.control.params.loop&&d.controller.control.loopFix({...O,slideTo:d.controller.control.params.slidesPerView===a.slidesPerView?i:!1})}d.emit("loopFix")}function er(){const r=this,{params:e,slidesEl:i}=r;if(!e.loop||!i||r.virtual&&r.params.virtual.enabled)return;r.recalcSlides();const t=[];r.slides.forEach(s=>{const n=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;t[n]=s}),r.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),t.forEach(s=>{i.append(s)}),r.recalcSlides(),r.slideTo(r.realIndex,0)}var tr={loopCreate:Qi,loopFix:Ji,loopDestroy:er};function ir(r){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const i=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=r?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function rr(){const r=this;r.params.watchOverflow&&r.isLocked||r.params.cssMode||(r.isElement&&(r.__preventObserver__=!0),r[r.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",r.isElement&&requestAnimationFrame(()=>{r.__preventObserver__=!1}))}var sr={setGrabCursor:ir,unsetGrabCursor:rr};function nr(r,e){e===void 0&&(e=this);function i(t){if(!t||t===Z()||t===W())return null;t.assignedSlot&&(t=t.assignedSlot);const s=t.closest(r);return!s&&!t.getRootNode?null:s||i(t.getRootNode().host)}return i(e)}function Lt(r,e,i){const t=W(),{params:s}=r,n=s.edgeSwipeDetection,o=s.edgeSwipeThreshold;return n&&(i<=o||i>=t.innerWidth-o)?n==="prevent"?(e.preventDefault(),!0):!1:!0}function ar(r){const e=this,i=Z();let t=r;t.originalEvent&&(t=t.originalEvent);const s=e.touchEventsData;if(t.type==="pointerdown"){if(s.pointerId!==null&&s.pointerId!==t.pointerId)return;s.pointerId=t.pointerId}else t.type==="touchstart"&&t.targetTouches.length===1&&(s.touchId=t.targetTouches[0].identifier);if(t.type==="touchstart"){Lt(e,t,t.targetTouches[0].pageX);return}const{params:n,touches:o,enabled:c}=e;if(!c||!n.simulateTouch&&t.pointerType==="mouse"||e.animating&&n.preventInteractionOnTransition)return;!e.animating&&n.cssMode&&n.loop&&e.loopFix();let f=t.target;if(n.touchEventsTarget==="wrapper"&&!mi(f,e.wrapperEl)||"which"in t&&t.which===3||"button"in t&&t.button>0||s.isTouched&&s.isMoved)return;const d=!!n.noSwipingClass&&n.noSwipingClass!=="",p=t.composedPath?t.composedPath():t.path;d&&t.target&&t.target.shadowRoot&&p&&(f=p[0]);const u=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,v=!!(t.target&&t.target.shadowRoot);if(n.noSwiping&&(v?nr(u,f):f.closest(u))){e.allowClick=!0;return}if(n.swipeHandler&&!f.closest(n.swipeHandler))return;o.currentX=t.pageX,o.currentY=t.pageY;const w=o.currentX,a=o.currentY;if(!Lt(e,t,w))return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=w,o.startY=a,s.touchStartTime=le(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,n.threshold>0&&(s.allowThresholdMove=!1);let l=!0;f.matches(s.focusableElements)&&(l=!1,f.nodeName==="SELECT"&&(s.isTouched=!1)),i.activeElement&&i.activeElement.matches(s.focusableElements)&&i.activeElement!==f&&(t.pointerType==="mouse"||t.pointerType!=="mouse"&&!f.matches(s.focusableElements))&&i.activeElement.blur();const h=l&&e.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||h)&&!f.isContentEditable&&t.preventDefault(),n.freeMode&&n.freeMode.enabled&&e.freeMode&&e.animating&&!n.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",t)}function or(r){const e=Z(),i=this,t=i.touchEventsData,{params:s,touches:n,rtlTranslate:o,enabled:c}=i;if(!c||!s.simulateTouch&&r.pointerType==="mouse")return;let f=r;if(f.originalEvent&&(f=f.originalEvent),f.type==="pointermove"&&(t.touchId!==null||f.pointerId!==t.pointerId))return;let d;if(f.type==="touchmove"){if(d=[...f.changedTouches].find(x=>x.identifier===t.touchId),!d||d.identifier!==t.touchId)return}else d=f;if(!t.isTouched){t.startMoving&&t.isScrolling&&i.emit("touchMoveOpposite",f);return}const p=d.pageX,u=d.pageY;if(f.preventedByNestedSwiper){n.startX=p,n.startY=u;return}if(!i.allowTouchMove){f.target.matches(t.focusableElements)||(i.allowClick=!1),t.isTouched&&(Object.assign(n,{startX:p,startY:u,currentX:p,currentY:u}),t.touchStartTime=le());return}if(s.touchReleaseOnEdges&&!s.loop)if(i.isVertical()){if(u<n.startY&&i.translate<=i.maxTranslate()||u>n.startY&&i.translate>=i.minTranslate()){t.isTouched=!1,t.isMoved=!1;return}}else{if(o&&(p>n.startX&&-i.translate<=i.maxTranslate()||p<n.startX&&-i.translate>=i.minTranslate()))return;if(!o&&(p<n.startX&&i.translate<=i.maxTranslate()||p>n.startX&&i.translate>=i.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(t.focusableElements)&&e.activeElement!==f.target&&f.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&f.target===e.activeElement&&f.target.matches(t.focusableElements)){t.isMoved=!0,i.allowClick=!1;return}t.allowTouchCallbacks&&i.emit("touchMove",f),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=p,n.currentY=u;const v=n.currentX-n.startX,w=n.currentY-n.startY;if(i.params.threshold&&Math.sqrt(v**2+w**2)<i.params.threshold)return;if(typeof t.isScrolling>"u"){let x;i.isHorizontal()&&n.currentY===n.startY||i.isVertical()&&n.currentX===n.startX?t.isScrolling=!1:v*v+w*w>=25&&(x=Math.atan2(Math.abs(w),Math.abs(v))*180/Math.PI,t.isScrolling=i.isHorizontal()?x>s.touchAngle:90-x>s.touchAngle)}if(t.isScrolling&&i.emit("touchMoveOpposite",f),typeof t.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(t.startMoving=!0),t.isScrolling||f.type==="touchmove"&&t.preventTouchMoveFromPointerMove){t.isTouched=!1;return}if(!t.startMoving)return;i.allowClick=!1,!s.cssMode&&f.cancelable&&f.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&f.stopPropagation();let a=i.isHorizontal()?v:w,l=i.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;s.oneWayMovement&&(a=Math.abs(a)*(o?1:-1),l=Math.abs(l)*(o?1:-1)),n.diff=a,a*=s.touchRatio,o&&(a=-a,l=-l);const h=i.touchesDirection;i.swipeDirection=a>0?"prev":"next",i.touchesDirection=l>0?"prev":"next";const b=i.params.loop&&!s.cssMode,g=i.touchesDirection==="next"&&i.allowSlideNext||i.touchesDirection==="prev"&&i.allowSlidePrev;if(!t.isMoved){if(b&&g&&i.loopFix({direction:i.swipeDirection}),t.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){const x=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(x)}t.allowMomentumBounce=!1,s.grabCursor&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!0),i.emit("sliderFirstMove",f)}if(new Date().getTime(),s._loopSwapReset!==!1&&t.isMoved&&t.allowThresholdMove&&h!==i.touchesDirection&&b&&g&&Math.abs(a)>=1){Object.assign(n,{startX:p,startY:u,currentX:p,currentY:u,startTranslate:t.currentTranslate}),t.loopSwapReset=!0,t.startTranslate=t.currentTranslate;return}i.emit("sliderMove",f),t.isMoved=!0,t.currentTranslate=a+t.startTranslate;let m=!0,y=s.resistanceRatio;if(s.touchReleaseOnEdges&&(y=0),a>0?(b&&g&&t.allowThresholdMove&&t.currentTranslate>(s.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-(s.slidesPerView!=="auto"&&i.slides.length-s.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),t.currentTranslate>i.minTranslate()&&(m=!1,s.resistance&&(t.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+t.startTranslate+a)**y))):a<0&&(b&&g&&t.allowThresholdMove&&t.currentTranslate<(s.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+(s.slidesPerView!=="auto"&&i.slides.length-s.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-(s.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),t.currentTranslate<i.maxTranslate()&&(m=!1,s.resistance&&(t.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-t.startTranslate-a)**y))),m&&(f.preventedByNestedSwiper=!0),!i.allowSlideNext&&i.swipeDirection==="next"&&t.currentTranslate<t.startTranslate&&(t.currentTranslate=t.startTranslate),!i.allowSlidePrev&&i.swipeDirection==="prev"&&t.currentTranslate>t.startTranslate&&(t.currentTranslate=t.startTranslate),!i.allowSlidePrev&&!i.allowSlideNext&&(t.currentTranslate=t.startTranslate),s.threshold>0)if(Math.abs(a)>s.threshold||t.allowThresholdMove){if(!t.allowThresholdMove){t.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,t.currentTranslate=t.startTranslate,n.diff=i.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{t.currentTranslate=t.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&i.freeMode||s.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(t.currentTranslate),i.setTranslate(t.currentTranslate))}function lr(r){const e=this,i=e.touchEventsData;let t=r;t.originalEvent&&(t=t.originalEvent);let s;if(t.type==="touchend"||t.type==="touchcancel"){if(s=[...t.changedTouches].find(x=>x.identifier===i.touchId),!s||s.identifier!==i.touchId)return}else{if(i.touchId!==null||t.pointerId!==i.pointerId)return;s=t}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(t.type)&&!(["pointercancel","contextmenu"].includes(t.type)&&(e.browser.isSafari||e.browser.isWebView)))return;i.pointerId=null,i.touchId=null;const{params:o,touches:c,rtlTranslate:f,slidesGrid:d,enabled:p}=e;if(!p||!o.simulateTouch&&t.pointerType==="mouse")return;if(i.allowTouchCallbacks&&e.emit("touchEnd",t),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&o.grabCursor&&e.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}o.grabCursor&&i.isMoved&&i.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=le(),v=u-i.touchStartTime;if(e.allowClick){const x=t.path||t.composedPath&&t.composedPath();e.updateClickedSlide(x&&x[0]||t.target,x),e.emit("tap click",t),v<300&&u-i.lastClickTime<300&&e.emit("doubleTap doubleClick",t)}if(i.lastClickTime=le(),Se(()=>{e.destroyed||(e.allowClick=!0)}),!i.isTouched||!i.isMoved||!e.swipeDirection||c.diff===0&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;let w;if(o.followFinger?w=f?e.translate:-e.translate:w=-i.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:w});return}const a=w>=-e.maxTranslate()&&!e.params.loop;let l=0,h=e.slidesSizesGrid[0];for(let x=0;x<d.length;x+=x<o.slidesPerGroupSkip?1:o.slidesPerGroup){const k=x<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof d[x+k]<"u"?(a||w>=d[x]&&w<d[x+k])&&(l=x,h=d[x+k]-d[x]):(a||w>=d[x])&&(l=x,h=d[d.length-1]-d[d.length-2])}let b=null,g=null;o.rewind&&(e.isBeginning?g=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(b=0));const m=(w-d[l])/h,y=l<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(v>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(m>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?b:l+y):e.slideTo(l)),e.swipeDirection==="prev"&&(m>1-o.longSwipesRatio?e.slideTo(l+y):g!==null&&m<0&&Math.abs(m)>o.longSwipesRatio?e.slideTo(g):e.slideTo(l))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(t.target===e.navigation.nextEl||t.target===e.navigation.prevEl)?t.target===e.navigation.nextEl?e.slideTo(l+y):e.slideTo(l):(e.swipeDirection==="next"&&e.slideTo(b!==null?b:l+y),e.swipeDirection==="prev"&&e.slideTo(g!==null?g:l))}}function kt(){const r=this,{params:e,el:i}=r;if(i&&i.offsetWidth===0)return;e.breakpoints&&r.setBreakpoint();const{allowSlideNext:t,allowSlidePrev:s,snapGrid:n}=r,o=r.virtual&&r.params.virtual.enabled;r.allowSlideNext=!0,r.allowSlidePrev=!0,r.updateSize(),r.updateSlides(),r.updateSlidesClasses();const c=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&r.isEnd&&!r.isBeginning&&!r.params.centeredSlides&&!c?r.slideTo(r.slides.length-1,0,!1,!0):r.params.loop&&!o?r.slideToLoop(r.realIndex,0,!1,!0):r.slideTo(r.activeIndex,0,!1,!0),r.autoplay&&r.autoplay.running&&r.autoplay.paused&&(clearTimeout(r.autoplay.resizeTimeout),r.autoplay.resizeTimeout=setTimeout(()=>{r.autoplay&&r.autoplay.running&&r.autoplay.paused&&r.autoplay.resume()},500)),r.allowSlidePrev=s,r.allowSlideNext=t,r.params.watchOverflow&&n!==r.snapGrid&&r.checkOverflow()}function pr(r){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&r.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(r.stopPropagation(),r.stopImmediatePropagation())))}function dr(){const r=this,{wrapperEl:e,rtlTranslate:i,enabled:t}=r;if(!t)return;r.previousTranslate=r.translate,r.isHorizontal()?r.translate=-e.scrollLeft:r.translate=-e.scrollTop,r.translate===0&&(r.translate=0),r.updateActiveIndex(),r.updateSlidesClasses();let s;const n=r.maxTranslate()-r.minTranslate();n===0?s=0:s=(r.translate-r.minTranslate())/n,s!==r.progress&&r.updateProgress(i?-r.translate:r.translate),r.emit("setTranslate",r.translate,!1)}function cr(r){const e=this;Fe(e,r.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function fr(){const r=this;r.documentTouchHandlerProceeded||(r.documentTouchHandlerProceeded=!0,r.params.touchReleaseOnEdges&&(r.el.style.touchAction="auto"))}const Wt=(r,e)=>{const i=Z(),{params:t,el:s,wrapperEl:n,device:o}=r,c=!!t.nested,f=e==="on"?"addEventListener":"removeEventListener",d=e;!s||typeof s=="string"||(i[f]("touchstart",r.onDocumentTouchStart,{passive:!1,capture:c}),s[f]("touchstart",r.onTouchStart,{passive:!1}),s[f]("pointerdown",r.onTouchStart,{passive:!1}),i[f]("touchmove",r.onTouchMove,{passive:!1,capture:c}),i[f]("pointermove",r.onTouchMove,{passive:!1,capture:c}),i[f]("touchend",r.onTouchEnd,{passive:!0}),i[f]("pointerup",r.onTouchEnd,{passive:!0}),i[f]("pointercancel",r.onTouchEnd,{passive:!0}),i[f]("touchcancel",r.onTouchEnd,{passive:!0}),i[f]("pointerout",r.onTouchEnd,{passive:!0}),i[f]("pointerleave",r.onTouchEnd,{passive:!0}),i[f]("contextmenu",r.onTouchEnd,{passive:!0}),(t.preventClicks||t.preventClicksPropagation)&&s[f]("click",r.onClick,!0),t.cssMode&&n[f]("scroll",r.onScroll),t.updateOnWindowResize?r[d](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",kt,!0):r[d]("observerUpdate",kt,!0),s[f]("load",r.onLoad,{capture:!0}))};function ur(){const r=this,{params:e}=r;r.onTouchStart=ar.bind(r),r.onTouchMove=or.bind(r),r.onTouchEnd=lr.bind(r),r.onDocumentTouchStart=fr.bind(r),e.cssMode&&(r.onScroll=dr.bind(r)),r.onClick=pr.bind(r),r.onLoad=cr.bind(r),Wt(r,"on")}function mr(){Wt(this,"off")}var wr={attachEvents:ur,detachEvents:mr};const jt=(r,e)=>r.grid&&e.grid&&e.grid.rows>1;function gr(){const r=this,{realIndex:e,initialized:i,params:t,el:s}=r,n=t.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const o=Z(),c=t.breakpointsBase==="window"||!t.breakpointsBase?t.breakpointsBase:"container",f=["window","container"].includes(t.breakpointsBase)||!t.breakpointsBase?r.el:o.querySelector(t.breakpointsBase),d=r.getBreakpoint(n,c,f);if(!d||r.currentBreakpoint===d)return;const u=(d in n?n[d]:void 0)||r.originalParams,v=jt(r,t),w=jt(r,u),a=r.params.grabCursor,l=u.grabCursor,h=t.enabled;v&&!w?(s.classList.remove(`${t.containerModifierClass}grid`,`${t.containerModifierClass}grid-column`),r.emitContainerClasses()):!v&&w&&(s.classList.add(`${t.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&t.grid.fill==="column")&&s.classList.add(`${t.containerModifierClass}grid-column`),r.emitContainerClasses()),a&&!l?r.unsetGrabCursor():!a&&l&&r.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(k=>{if(typeof u[k]>"u")return;const C=t[k]&&t[k].enabled,I=u[k]&&u[k].enabled;C&&!I&&r[k].disable(),!C&&I&&r[k].enable()});const b=u.direction&&u.direction!==t.direction,g=t.loop&&(u.slidesPerView!==t.slidesPerView||b),m=t.loop;b&&i&&r.changeDirection(),ae(r.params,u);const y=r.params.enabled,x=r.params.loop;Object.assign(r,{allowTouchMove:r.params.allowTouchMove,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev}),h&&!y?r.disable():!h&&y&&r.enable(),r.currentBreakpoint=d,r.emit("_beforeBreakpoint",u),i&&(g?(r.loopDestroy(),r.loopCreate(e),r.updateSlides()):!m&&x?(r.loopCreate(e),r.updateSlides()):m&&!x&&r.loopDestroy()),r.emit("breakpoint",u)}function hr(r,e,i){if(e===void 0&&(e="window"),!r||e==="container"&&!i)return;let t=!1;const s=W(),n=e==="window"?s.innerHeight:i.clientHeight,o=Object.keys(r).map(c=>{if(typeof c=="string"&&c.indexOf("@")===0){const f=parseFloat(c.substr(1));return{value:n*f,point:c}}return{value:c,point:c}});o.sort((c,f)=>parseInt(c.value,10)-parseInt(f.value,10));for(let c=0;c<o.length;c+=1){const{point:f,value:d}=o[c];e==="window"?s.matchMedia(`(min-width: ${d}px)`).matches&&(t=f):d<=i.clientWidth&&(t=f)}return t||"max"}var vr={setBreakpoint:gr,getBreakpoint:hr};function br(r,e){const i=[];return r.forEach(t=>{typeof t=="object"?Object.keys(t).forEach(s=>{t[s]&&i.push(e+s)}):typeof t=="string"&&i.push(e+t)}),i}function yr(){const r=this,{classNames:e,params:i,rtl:t,el:s,device:n}=r,o=br(["initialized",i.direction,{"free-mode":r.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:t},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&i.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);e.push(...o),s.classList.add(...e),r.emitContainerClasses()}function Sr(){const r=this,{el:e,classNames:i}=r;!e||typeof e=="string"||(e.classList.remove(...i),r.emitContainerClasses())}var xr={addClasses:yr,removeClasses:Sr};function Er(){const r=this,{isLocked:e,params:i}=r,{slidesOffsetBefore:t}=i;if(t){const s=r.slides.length-1,n=r.slidesGrid[s]+r.slidesSizesGrid[s]+t*2;r.isLocked=r.size>n}else r.isLocked=r.snapGrid.length===1;i.allowSlideNext===!0&&(r.allowSlideNext=!r.isLocked),i.allowSlidePrev===!0&&(r.allowSlidePrev=!r.isLocked),e&&e!==r.isLocked&&(r.isEnd=!1),e!==r.isLocked&&r.emit(r.isLocked?"lock":"unlock")}var Tr={checkOverflow:Er},St={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function _r(r,e){return function(t){t===void 0&&(t={});const s=Object.keys(t)[0],n=t[s];if(typeof n!="object"||n===null){ae(e,t);return}if(r[s]===!0&&(r[s]={enabled:!0}),s==="navigation"&&r[s]&&r[s].enabled&&!r[s].prevEl&&!r[s].nextEl&&(r[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&r[s]&&r[s].enabled&&!r[s].el&&(r[s].auto=!0),!(s in r&&"enabled"in n)){ae(e,t);return}typeof r[s]=="object"&&!("enabled"in r[s])&&(r[s].enabled=!0),r[s]||(r[s]={enabled:!1}),ae(e,t)}}const gt={eventsEmitter:xi,update:ji,translate:Bi,transition:Xi,slide:Zi,loop:tr,grabCursor:sr,events:wr,breakpoints:vr,checkOverflow:Tr,classes:xr},ht={};class ne{constructor(){let e,i;for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];s.length===1&&s[0].constructor&&Object.prototype.toString.call(s[0]).slice(8,-1)==="Object"?i=s[0]:[e,i]=s,i||(i={}),i=ae({},i),e&&!i.el&&(i.el=e);const o=Z();if(i.el&&typeof i.el=="string"&&o.querySelectorAll(i.el).length>1){const p=[];return o.querySelectorAll(i.el).forEach(u=>{const v=ae({},i,{el:u});p.push(new ne(v))}),p}const c=this;c.__swiper__=!0,c.support=Xt(),c.device=Nt({userAgent:i.userAgent}),c.browser=Yt(),c.eventsListeners={},c.eventsAnyListeners=[],c.modules=[...c.__modules__],i.modules&&Array.isArray(i.modules)&&c.modules.push(...i.modules);const f={};c.modules.forEach(p=>{p({params:i,swiper:c,extendParams:_r(i,f),on:c.on.bind(c),once:c.once.bind(c),off:c.off.bind(c),emit:c.emit.bind(c)})});const d=ae({},St,f);return c.params=ae({},d,ht,i),c.originalParams=ae({},c.params),c.passedParams=ae({},i),c.params&&c.params.on&&Object.keys(c.params.on).forEach(p=>{c.on(p,c.params.on[p])}),c.params&&c.params.onAny&&c.onAny(c.params.onAny),Object.assign(c,{enabled:c.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return c.params.direction==="horizontal"},isVertical(){return c.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:c.params.allowSlideNext,allowSlidePrev:c.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:c.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:c.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),c.emit("_swiper"),c.params.init&&c.init(),c}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:i,params:t}=this,s=Q(i,`.${t.slideClass}, swiper-slide`),n=Be(s[0]);return Be(e)-n}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(i=>i.getAttribute("data-swiper-slide-index")*1===e))}recalcSlides(){const e=this,{slidesEl:i,params:t}=e;e.slides=Q(i,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,i){const t=this;e=Math.min(Math.max(e,0),1);const s=t.minTranslate(),o=(t.maxTranslate()-s)*e+s;t.translateTo(o,typeof i>"u"?0:i),t.updateActiveIndex(),t.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=e.el.className.split(" ").filter(t=>t.indexOf("swiper")===0||t.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",i.join(" "))}getSlideClasses(e){const i=this;return i.destroyed?"":e.className.split(" ").filter(t=>t.indexOf("swiper-slide")===0||t.indexOf(i.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const i=[];e.slides.forEach(t=>{const s=e.getSlideClasses(t);i.push({slideEl:t,classNames:s}),e.emit("_slideClass",t,s)}),e.emit("_slideClasses",i)}slidesPerViewDynamic(e,i){e===void 0&&(e="current"),i===void 0&&(i=!1);const t=this,{params:s,slides:n,slidesGrid:o,slidesSizesGrid:c,size:f,activeIndex:d}=t;let p=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let u=n[d]?Math.ceil(n[d].swiperSlideSize):0,v;for(let w=d+1;w<n.length;w+=1)n[w]&&!v&&(u+=Math.ceil(n[w].swiperSlideSize),p+=1,u>f&&(v=!0));for(let w=d-1;w>=0;w-=1)n[w]&&!v&&(u+=n[w].swiperSlideSize,p+=1,u>f&&(v=!0))}else if(e==="current")for(let u=d+1;u<n.length;u+=1)(i?o[u]+c[u]-o[d]<f:o[u]-o[d]<f)&&(p+=1);else for(let u=d-1;u>=0;u-=1)o[d]-o[u]<f&&(p+=1);return p}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:i,params:t}=e;t.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Fe(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function s(){const o=e.rtlTranslate?e.translate*-1:e.translate,c=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(c),e.updateActiveIndex(),e.updateSlidesClasses()}let n;if(t.freeMode&&t.freeMode.enabled&&!t.cssMode)s(),t.autoHeight&&e.updateAutoHeight();else{if((t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!t.centeredSlides){const o=e.virtual&&t.virtual.enabled?e.virtual.slides:e.slides;n=e.slideTo(o.length-1,0,!1,!0)}else n=e.slideTo(e.activeIndex,0,!1,!0);n||s()}t.watchOverflow&&i!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,i){i===void 0&&(i=!0);const t=this,s=t.params.direction;return e||(e=s==="horizontal"?"vertical":"horizontal"),e===s||e!=="horizontal"&&e!=="vertical"||(t.el.classList.remove(`${t.params.containerModifierClass}${s}`),t.el.classList.add(`${t.params.containerModifierClass}${e}`),t.emitContainerClasses(),t.params.direction=e,t.slides.forEach(n=>{e==="vertical"?n.style.width="":n.style.height=""}),t.emit("changeDirection"),i&&t.update()),t}changeLanguageDirection(e){const i=this;i.rtl&&e==="rtl"||!i.rtl&&e==="ltr"||(i.rtl=e==="rtl",i.rtlTranslate=i.params.direction==="horizontal"&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(e){const i=this;if(i.mounted)return!0;let t=e||i.params.el;if(typeof t=="string"&&(t=document.querySelector(t)),!t)return!1;t.swiper=i,t.parentNode&&t.parentNode.host&&t.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);const s=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=t&&t.shadowRoot&&t.shadowRoot.querySelector?t.shadowRoot.querySelector(s()):Q(t,s())[0];return!o&&i.params.createElements&&(o=oe("div",i.params.wrapperClass),t.append(o),Q(t,`.${i.params.slideClass}`).forEach(c=>{o.append(c)})),Object.assign(i,{el:t,wrapperEl:o,slidesEl:i.isElement&&!t.parentNode.host.slideSlots?t.parentNode.host:o,hostEl:i.isElement?t.parentNode.host:t,mounted:!0,rtl:t.dir.toLowerCase()==="rtl"||be(t,"direction")==="rtl",rtlTranslate:i.params.direction==="horizontal"&&(t.dir.toLowerCase()==="rtl"||be(t,"direction")==="rtl"),wrongRTL:be(o,"display")==="-webkit-box"}),!0}init(e){const i=this;if(i.initialized||i.mount(e)===!1)return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(void 0,!0),i.attachEvents();const s=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&s.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(n=>{n.complete?Fe(i,n):n.addEventListener("load",o=>{Fe(i,o.target)})}),yt(i),i.initialized=!0,yt(i),i.emit("init"),i.emit("afterInit"),i}destroy(e,i){e===void 0&&(e=!0),i===void 0&&(i=!0);const t=this,{params:s,el:n,wrapperEl:o,slides:c}=t;return typeof t.params>"u"||t.destroyed||(t.emit("beforeDestroy"),t.initialized=!1,t.detachEvents(),s.loop&&t.loopDestroy(),i&&(t.removeClasses(),n&&typeof n!="string"&&n.removeAttribute("style"),o&&o.removeAttribute("style"),c&&c.length&&c.forEach(f=>{f.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),f.removeAttribute("style"),f.removeAttribute("data-swiper-slide-index")})),t.emit("destroy"),Object.keys(t.eventsListeners).forEach(f=>{t.off(f)}),e!==!1&&(t.el&&typeof t.el!="string"&&(t.el.swiper=null),di(t)),t.destroyed=!0),null}static extendDefaults(e){ae(ht,e)}static get extendedDefaults(){return ht}static get defaults(){return St}static installModule(e){ne.prototype.__modules__||(ne.prototype.__modules__=[]);const i=ne.prototype.__modules__;typeof e=="function"&&i.indexOf(e)<0&&i.push(e)}static use(e){return Array.isArray(e)?(e.forEach(i=>ne.installModule(i)),ne):(ne.installModule(e),ne)}}Object.keys(gt).forEach(r=>{Object.keys(gt[r]).forEach(e=>{ne.prototype[e]=gt[r][e]})});ne.use([yi,Si]);function Mr(r){let{swiper:e,extendParams:i,on:t,emit:s}=r;i({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let n;const o=Z();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const c=o.createElement("div");function f(a,l){const h=e.params.virtual;if(h.cache&&e.virtual.cache[l])return e.virtual.cache[l];let b;return h.renderSlide?(b=h.renderSlide.call(e,a,l),typeof b=="string"&&(setInnerHTML(c,b),b=c.children[0])):e.isElement?b=oe("swiper-slide"):b=oe("div",e.params.slideClass),b.setAttribute("data-swiper-slide-index",l),h.renderSlide||setInnerHTML(b,a),h.cache&&(e.virtual.cache[l]=b),b}function d(a,l,h){const{slidesPerView:b,slidesPerGroup:g,centeredSlides:m,loop:y,initialSlide:x}=e.params;if(l&&!y&&x>0)return;const{addSlidesBefore:k,addSlidesAfter:C}=e.params.virtual,{from:I,to:S,slides:T,slidesGrid:z,offset:P}=e.virtual;e.params.cssMode||e.updateActiveIndex();const M=typeof h>"u"?e.activeIndex||0:h;let L;e.rtlTranslate?L="right":L=e.isHorizontal()?"left":"top";let A,O;m?(A=Math.floor(b/2)+g+C,O=Math.floor(b/2)+g+k):(A=b+(g-1)+C,O=(y?b:g)+k);let E=M-O,_=M+A;y||(E=Math.max(E,0),_=Math.min(_,T.length-1));let V=(e.slidesGrid[E]||0)-(e.slidesGrid[0]||0);y&&M>=O?(E-=O,m||(V+=e.slidesGrid[0])):y&&M<O&&(E=-O,m&&(V+=e.slidesGrid[0])),Object.assign(e.virtual,{from:E,to:_,offset:V,slidesGrid:e.slidesGrid,slidesBefore:O,slidesAfter:A});function X(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),s("virtualUpdate")}if(I===E&&S===_&&!a){e.slidesGrid!==z&&V!==P&&e.slides.forEach(j=>{j.style[L]=`${V-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),s("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:V,from:E,to:_,slides:function(){const $=[];for(let Y=E;Y<=_;Y+=1)$.push(T[Y]);return $}()}),e.params.virtual.renderExternalUpdate?X():s("virtualUpdate");return}const q=[],U=[],ce=j=>{let $=j;return j<0?$=T.length+j:$>=T.length&&($=$-T.length),$};if(a)e.slides.filter(j=>j.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(j=>{j.remove()});else for(let j=I;j<=S;j+=1)if(j<E||j>_){const $=ce(j);e.slides.filter(Y=>Y.matches(`.${e.params.slideClass}[data-swiper-slide-index="${$}"], swiper-slide[data-swiper-slide-index="${$}"]`)).forEach(Y=>{Y.remove()})}const ze=y?-T.length:0,D=y?T.length*2:T.length;for(let j=ze;j<D;j+=1)if(j>=E&&j<=_){const $=ce(j);typeof S>"u"||a?U.push($):(j>S&&U.push($),j<I&&q.push($))}if(U.forEach(j=>{e.slidesEl.append(f(T[j],j))}),y)for(let j=q.length-1;j>=0;j-=1){const $=q[j];e.slidesEl.prepend(f(T[$],$))}else q.sort((j,$)=>$-j),q.forEach(j=>{e.slidesEl.prepend(f(T[j],j))});Q(e.slidesEl,".swiper-slide, swiper-slide").forEach(j=>{j.style[L]=`${V-Math.abs(e.cssOverflowAdjustment())}px`}),X()}function p(a){if(typeof a=="object"&&"length"in a)for(let l=0;l<a.length;l+=1)a[l]&&e.virtual.slides.push(a[l]);else e.virtual.slides.push(a);d(!0)}function u(a){const l=e.activeIndex;let h=l+1,b=1;if(Array.isArray(a)){for(let g=0;g<a.length;g+=1)a[g]&&e.virtual.slides.unshift(a[g]);h=l+a.length,b=a.length}else e.virtual.slides.unshift(a);if(e.params.virtual.cache){const g=e.virtual.cache,m={};Object.keys(g).forEach(y=>{const x=g[y],k=x.getAttribute("data-swiper-slide-index");k&&x.setAttribute("data-swiper-slide-index",parseInt(k,10)+b),m[parseInt(y,10)+b]=x}),e.virtual.cache=m}d(!0),e.slideTo(h,0)}function v(a){if(typeof a>"u"||a===null)return;let l=e.activeIndex;if(Array.isArray(a))for(let h=a.length-1;h>=0;h-=1)e.params.virtual.cache&&(delete e.virtual.cache[a[h]],Object.keys(e.virtual.cache).forEach(b=>{b>a&&(e.virtual.cache[b-1]=e.virtual.cache[b],e.virtual.cache[b-1].setAttribute("data-swiper-slide-index",b-1),delete e.virtual.cache[b])})),e.virtual.slides.splice(a[h],1),a[h]<l&&(l-=1),l=Math.max(l,0);else e.params.virtual.cache&&(delete e.virtual.cache[a],Object.keys(e.virtual.cache).forEach(h=>{h>a&&(e.virtual.cache[h-1]=e.virtual.cache[h],e.virtual.cache[h-1].setAttribute("data-swiper-slide-index",h-1),delete e.virtual.cache[h])})),e.virtual.slides.splice(a,1),a<l&&(l-=1),l=Math.max(l,0);d(!0),e.slideTo(l,0)}function w(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),d(!0),e.slideTo(0,0)}t("beforeInit",()=>{if(!e.params.virtual.enabled)return;let a;if(typeof e.passedParams.virtual.slides>"u"){const l=[...e.slidesEl.children].filter(h=>h.matches(`.${e.params.slideClass}, swiper-slide`));l&&l.length&&(e.virtual.slides=[...l],a=!0,l.forEach((h,b)=>{h.setAttribute("data-swiper-slide-index",b),e.virtual.cache[b]=h,h.remove()}))}a||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,d(!1,!0)}),t("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(n),n=setTimeout(()=>{d()},100)):d())}),t("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&$e(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:p,prependSlide:u,removeSlide:v,removeAllSlides:w,update:d})}function Pr(r){let{swiper:e,extendParams:i,on:t,emit:s}=r;const n=Z(),o=W();e.keyboard={enabled:!1},i({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function c(p){if(!e.enabled)return;const{rtlTranslate:u}=e;let v=p;v.originalEvent&&(v=v.originalEvent);const w=v.keyCode||v.charCode,a=e.params.keyboard.pageUpDown,l=a&&w===33,h=a&&w===34,b=w===37,g=w===39,m=w===38,y=w===40;if(!e.allowSlideNext&&(e.isHorizontal()&&g||e.isVertical()&&y||h)||!e.allowSlidePrev&&(e.isHorizontal()&&b||e.isVertical()&&m||l))return!1;if(!(v.shiftKey||v.altKey||v.ctrlKey||v.metaKey)&&!(n.activeElement&&n.activeElement.nodeName&&(n.activeElement.nodeName.toLowerCase()==="input"||n.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(l||h||b||g||m||y)){let x=!1;if(ye(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&ye(e.el,`.${e.params.slideActiveClass}`).length===0)return;const k=e.el,C=k.clientWidth,I=k.clientHeight,S=o.innerWidth,T=o.innerHeight,z=Ue(k);u&&(z.left-=k.scrollLeft);const P=[[z.left,z.top],[z.left+C,z.top],[z.left,z.top+I],[z.left+C,z.top+I]];for(let M=0;M<P.length;M+=1){const L=P[M];if(L[0]>=0&&L[0]<=S&&L[1]>=0&&L[1]<=T){if(L[0]===0&&L[1]===0)continue;x=!0}}if(!x)return}e.isHorizontal()?((l||h||b||g)&&(v.preventDefault?v.preventDefault():v.returnValue=!1),((h||g)&&!u||(l||b)&&u)&&e.slideNext(),((l||b)&&!u||(h||g)&&u)&&e.slidePrev()):((l||h||m||y)&&(v.preventDefault?v.preventDefault():v.returnValue=!1),(h||y)&&e.slideNext(),(l||m)&&e.slidePrev()),s("keyPress",w)}}function f(){e.keyboard.enabled||(n.addEventListener("keydown",c),e.keyboard.enabled=!0)}function d(){e.keyboard.enabled&&(n.removeEventListener("keydown",c),e.keyboard.enabled=!1)}t("init",()=>{e.params.keyboard.enabled&&f()}),t("destroy",()=>{e.keyboard.enabled&&d()}),Object.assign(e.keyboard,{enable:f,disable:d})}function Cr(r){let{swiper:e,extendParams:i,on:t,emit:s}=r;const n=W();i({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let o,c=le(),f;const d=[];function p(m){let C=0,I=0,S=0,T=0;return"detail"in m&&(I=m.detail),"wheelDelta"in m&&(I=-m.wheelDelta/120),"wheelDeltaY"in m&&(I=-m.wheelDeltaY/120),"wheelDeltaX"in m&&(C=-m.wheelDeltaX/120),"axis"in m&&m.axis===m.HORIZONTAL_AXIS&&(C=I,I=0),S=C*10,T=I*10,"deltaY"in m&&(T=m.deltaY),"deltaX"in m&&(S=m.deltaX),m.shiftKey&&!S&&(S=T,T=0),(S||T)&&m.deltaMode&&(m.deltaMode===1?(S*=40,T*=40):(S*=800,T*=800)),S&&!C&&(C=S<1?-1:1),T&&!I&&(I=T<1?-1:1),{spinX:C,spinY:I,pixelX:S,pixelY:T}}function u(){e.enabled&&(e.mouseEntered=!0)}function v(){e.enabled&&(e.mouseEntered=!1)}function w(m){return e.params.mousewheel.thresholdDelta&&m.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&le()-c<e.params.mousewheel.thresholdTime?!1:m.delta>=6&&le()-c<60?!0:(m.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),s("scroll",m.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),s("scroll",m.raw)),c=new n.Date().getTime(),!1)}function a(m){const y=e.params.mousewheel;if(m.direction<0){if(e.isEnd&&!e.params.loop&&y.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&y.releaseOnEdges)return!0;return!1}function l(m){let y=m,x=!0;if(!e.enabled||m.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const k=e.params.mousewheel;e.params.cssMode&&y.preventDefault();let C=e.el;e.params.mousewheel.eventsTarget!=="container"&&(C=document.querySelector(e.params.mousewheel.eventsTarget));const I=C&&C.contains(y.target);if(!e.mouseEntered&&!I&&!k.releaseOnEdges)return!0;y.originalEvent&&(y=y.originalEvent);let S=0;const T=e.rtlTranslate?-1:1,z=p(y);if(k.forceToAxis)if(e.isHorizontal())if(Math.abs(z.pixelX)>Math.abs(z.pixelY))S=-z.pixelX*T;else return!0;else if(Math.abs(z.pixelY)>Math.abs(z.pixelX))S=-z.pixelY;else return!0;else S=Math.abs(z.pixelX)>Math.abs(z.pixelY)?-z.pixelX*T:-z.pixelY;if(S===0)return!0;k.invert&&(S=-S);let P=e.getTranslate()+S*k.sensitivity;if(P>=e.minTranslate()&&(P=e.minTranslate()),P<=e.maxTranslate()&&(P=e.maxTranslate()),x=e.params.loop?!0:!(P===e.minTranslate()||P===e.maxTranslate()),x&&e.params.nested&&y.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const M={time:le(),delta:Math.abs(S),direction:Math.sign(S),raw:m};d.length>=2&&d.shift();const L=d.length?d[d.length-1]:void 0;if(d.push(M),L?(M.direction!==L.direction||M.delta>L.delta||M.time>L.time+150)&&w(M):w(M),a(M))return!0}else{const M={time:le(),delta:Math.abs(S),direction:Math.sign(S)},L=f&&M.time<f.time+500&&M.delta<=f.delta&&M.direction===f.direction;if(!L){f=void 0;let A=e.getTranslate()+S*k.sensitivity;const O=e.isBeginning,E=e.isEnd;if(A>=e.minTranslate()&&(A=e.minTranslate()),A<=e.maxTranslate()&&(A=e.maxTranslate()),e.setTransition(0),e.setTranslate(A),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!O&&e.isBeginning||!E&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:M.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(o),o=void 0,d.length>=15&&d.shift();const _=d.length?d[d.length-1]:void 0,V=d[0];if(d.push(M),_&&(M.delta>_.delta||M.direction!==_.direction))d.splice(0);else if(d.length>=15&&M.time-V.time<500&&V.delta-M.delta>=1&&M.delta<=6){const X=S>0?.8:.2;f=M,d.splice(0),o=Se(()=>{e.destroyed||!e.params||e.slideToClosest(e.params.speed,!0,void 0,X)},0)}o||(o=Se(()=>{if(e.destroyed||!e.params)return;const X=.5;f=M,d.splice(0),e.slideToClosest(e.params.speed,!0,void 0,X)},500))}if(L||s("scroll",y),e.params.autoplay&&e.params.autoplay.disableOnInteraction&&e.autoplay.stop(),k.releaseOnEdges&&(A===e.minTranslate()||A===e.maxTranslate()))return!0}}return y.preventDefault?y.preventDefault():y.returnValue=!1,!1}function h(m){let y=e.el;e.params.mousewheel.eventsTarget!=="container"&&(y=document.querySelector(e.params.mousewheel.eventsTarget)),y[m]("mouseenter",u),y[m]("mouseleave",v),y[m]("wheel",l)}function b(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",l),!0):e.mousewheel.enabled?!1:(h("addEventListener"),e.mousewheel.enabled=!0,!0)}function g(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,l),!0):e.mousewheel.enabled?(h("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}t("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&g(),e.params.mousewheel.enabled&&b()}),t("destroy",()=>{e.params.cssMode&&b(),e.mousewheel.enabled&&g()}),Object.assign(e.mousewheel,{enable:b,disable:g})}function _t(r,e,i,t){return r.params.createElements&&Object.keys(t).forEach(s=>{if(!i[s]&&i.auto===!0){let n=Q(r.el,`.${t[s]}`)[0];n||(n=oe("div",t[s]),n.className=t[s],r.el.append(n)),i[s]=n,e[s]=n}}),i}function Ir(r){let{swiper:e,extendParams:i,on:t,emit:s}=r;i({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function n(a){let l;return a&&typeof a=="string"&&e.isElement&&(l=e.el.querySelector(a)||e.hostEl.querySelector(a),l)?l:(a&&(typeof a=="string"&&(l=[...document.querySelectorAll(a)]),e.params.uniqueNavElements&&typeof a=="string"&&l&&l.length>1&&e.el.querySelectorAll(a).length===1?l=e.el.querySelector(a):l&&l.length===1&&(l=l[0])),a&&!l?a:l)}function o(a,l){const h=e.params.navigation;a=N(a),a.forEach(b=>{b&&(b.classList[l?"add":"remove"](...h.disabledClass.split(" ")),b.tagName==="BUTTON"&&(b.disabled=l),e.params.watchOverflow&&e.enabled&&b.classList[e.isLocked?"add":"remove"](h.lockClass))})}function c(){const{nextEl:a,prevEl:l}=e.navigation;if(e.params.loop){o(l,!1),o(a,!1);return}o(l,e.isBeginning&&!e.params.rewind),o(a,e.isEnd&&!e.params.rewind)}function f(a){a.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),s("navigationPrev"))}function d(a){a.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),s("navigationNext"))}function p(){const a=e.params.navigation;if(e.params.navigation=_t(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(a.nextEl||a.prevEl))return;let l=n(a.nextEl),h=n(a.prevEl);Object.assign(e.navigation,{nextEl:l,prevEl:h}),l=N(l),h=N(h);const b=(g,m)=>{g&&g.addEventListener("click",m==="next"?d:f),!e.enabled&&g&&g.classList.add(...a.lockClass.split(" "))};l.forEach(g=>b(g,"next")),h.forEach(g=>b(g,"prev"))}function u(){let{nextEl:a,prevEl:l}=e.navigation;a=N(a),l=N(l);const h=(b,g)=>{b.removeEventListener("click",g==="next"?d:f),b.classList.remove(...e.params.navigation.disabledClass.split(" "))};a.forEach(b=>h(b,"next")),l.forEach(b=>h(b,"prev"))}t("init",()=>{e.params.navigation.enabled===!1?w():(p(),c())}),t("toEdge fromEdge lock unlock",()=>{c()}),t("destroy",()=>{u()}),t("enable disable",()=>{let{nextEl:a,prevEl:l}=e.navigation;if(a=N(a),l=N(l),e.enabled){c();return}[...a,...l].filter(h=>!!h).forEach(h=>h.classList.add(e.params.navigation.lockClass))}),t("click",(a,l)=>{let{nextEl:h,prevEl:b}=e.navigation;h=N(h),b=N(b);const g=l.target;let m=b.includes(g)||h.includes(g);if(e.isElement&&!m){const y=l.path||l.composedPath&&l.composedPath();y&&(m=y.find(x=>h.includes(x)||b.includes(x)))}if(e.params.navigation.hideOnClick&&!m){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===g||e.pagination.el.contains(g)))return;let y;h.length?y=h[0].classList.contains(e.params.navigation.hiddenClass):b.length&&(y=b[0].classList.contains(e.params.navigation.hiddenClass)),s(y===!0?"navigationShow":"navigationHide"),[...h,...b].filter(x=>!!x).forEach(x=>x.classList.toggle(e.params.navigation.hiddenClass))}});const v=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),p(),c()},w=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(e.navigation,{enable:v,disable:w,update:c,init:p,destroy:u})}function me(r){return r===void 0&&(r=""),`.${r.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function zr(r){let{swiper:e,extendParams:i,on:t,emit:s}=r;const n="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:g=>g,formatFractionTotal:g=>g,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),e.pagination={el:null,bullets:[]};let o,c=0;function f(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function d(g,m){const{bulletActiveClass:y}=e.params.pagination;g&&(g=g[`${m==="prev"?"previous":"next"}ElementSibling`],g&&(g.classList.add(`${y}-${m}`),g=g[`${m==="prev"?"previous":"next"}ElementSibling`],g&&g.classList.add(`${y}-${m}-${m}`)))}function p(g,m,y){if(g=g%y,m=m%y,m===g+1)return"next";if(m===g-1)return"previous"}function u(g){const m=g.target.closest(me(e.params.pagination.bulletClass));if(!m)return;g.preventDefault();const y=Be(m)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===y)return;const x=p(e.realIndex,y,e.slides.length);x==="next"?e.slideNext():x==="previous"?e.slidePrev():e.slideToLoop(y)}else e.slideTo(y)}function v(){const g=e.rtl,m=e.params.pagination;if(f())return;let y=e.pagination.el;y=N(y);let x,k;const C=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,I=e.params.loop?Math.ceil(C/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(k=e.previousRealIndex||0,x=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(x=e.snapIndex,k=e.previousSnapIndex):(k=e.previousIndex||0,x=e.activeIndex||0),m.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const S=e.pagination.bullets;let T,z,P;if(m.dynamicBullets&&(o=bt(S[0],e.isHorizontal()?"width":"height"),y.forEach(M=>{M.style[e.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&k!==void 0&&(c+=x-(k||0),c>m.dynamicMainBullets-1?c=m.dynamicMainBullets-1:c<0&&(c=0)),T=Math.max(x-c,0),z=T+(Math.min(S.length,m.dynamicMainBullets)-1),P=(z+T)/2),S.forEach(M=>{const L=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(A=>`${m.bulletActiveClass}${A}`)].map(A=>typeof A=="string"&&A.includes(" ")?A.split(" "):A).flat();M.classList.remove(...L)}),y.length>1)S.forEach(M=>{const L=Be(M);L===x?M.classList.add(...m.bulletActiveClass.split(" ")):e.isElement&&M.setAttribute("part","bullet"),m.dynamicBullets&&(L>=T&&L<=z&&M.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),L===T&&d(M,"prev"),L===z&&d(M,"next"))});else{const M=S[x];if(M&&M.classList.add(...m.bulletActiveClass.split(" ")),e.isElement&&S.forEach((L,A)=>{L.setAttribute("part",A===x?"bullet-active":"bullet")}),m.dynamicBullets){const L=S[T],A=S[z];for(let O=T;O<=z;O+=1)S[O]&&S[O].classList.add(...`${m.bulletActiveClass}-main`.split(" "));d(L,"prev"),d(A,"next")}}if(m.dynamicBullets){const M=Math.min(S.length,m.dynamicMainBullets+4),L=(o*M-o)/2-P*o,A=g?"right":"left";S.forEach(O=>{O.style[e.isHorizontal()?A:"top"]=`${L}px`})}}y.forEach((S,T)=>{if(m.type==="fraction"&&(S.querySelectorAll(me(m.currentClass)).forEach(z=>{z.textContent=m.formatFractionCurrent(x+1)}),S.querySelectorAll(me(m.totalClass)).forEach(z=>{z.textContent=m.formatFractionTotal(I)})),m.type==="progressbar"){let z;m.progressbarOpposite?z=e.isHorizontal()?"vertical":"horizontal":z=e.isHorizontal()?"horizontal":"vertical";const P=(x+1)/I;let M=1,L=1;z==="horizontal"?M=P:L=P,S.querySelectorAll(me(m.progressbarFillClass)).forEach(A=>{A.style.transform=`translate3d(0,0,0) scaleX(${M}) scaleY(${L})`,A.style.transitionDuration=`${e.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(fe(S,m.renderCustom(e,x+1,I)),T===0&&s("paginationRender",S)):(T===0&&s("paginationRender",S),s("paginationUpdate",S)),e.params.watchOverflow&&e.enabled&&S.classList[e.isLocked?"add":"remove"](m.lockClass)})}function w(){const g=e.params.pagination;if(f())return;const m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let y=e.pagination.el;y=N(y);let x="";if(g.type==="bullets"){let k=e.params.loop?Math.ceil(m/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&k>m&&(k=m);for(let C=0;C<k;C+=1)g.renderBullet?x+=g.renderBullet.call(e,C,g.bulletClass):x+=`<${g.bulletElement} ${e.isElement?'part="bullet"':""} class="${g.bulletClass}"></${g.bulletElement}>`}g.type==="fraction"&&(g.renderFraction?x=g.renderFraction.call(e,g.currentClass,g.totalClass):x=`<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`),g.type==="progressbar"&&(g.renderProgressbar?x=g.renderProgressbar.call(e,g.progressbarFillClass):x=`<span class="${g.progressbarFillClass}"></span>`),e.pagination.bullets=[],y.forEach(k=>{g.type!=="custom"&&fe(k,x||""),g.type==="bullets"&&e.pagination.bullets.push(...k.querySelectorAll(me(g.bulletClass)))}),g.type!=="custom"&&s("paginationRender",y[0])}function a(){e.params.pagination=_t(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const g=e.params.pagination;if(!g.el)return;let m;typeof g.el=="string"&&e.isElement&&(m=e.el.querySelector(g.el)),!m&&typeof g.el=="string"&&(m=[...document.querySelectorAll(g.el)]),m||(m=g.el),!(!m||m.length===0)&&(e.params.uniqueNavElements&&typeof g.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...e.el.querySelectorAll(g.el)],m.length>1&&(m=m.find(y=>ye(y,".swiper")[0]===e.el))),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(e.pagination,{el:m}),m=N(m),m.forEach(y=>{g.type==="bullets"&&g.clickable&&y.classList.add(...(g.clickableClass||"").split(" ")),y.classList.add(g.modifierClass+g.type),y.classList.add(e.isHorizontal()?g.horizontalClass:g.verticalClass),g.type==="bullets"&&g.dynamicBullets&&(y.classList.add(`${g.modifierClass}${g.type}-dynamic`),c=0,g.dynamicMainBullets<1&&(g.dynamicMainBullets=1)),g.type==="progressbar"&&g.progressbarOpposite&&y.classList.add(g.progressbarOppositeClass),g.clickable&&y.addEventListener("click",u),e.enabled||y.classList.add(g.lockClass)}))}function l(){const g=e.params.pagination;if(f())return;let m=e.pagination.el;m&&(m=N(m),m.forEach(y=>{y.classList.remove(g.hiddenClass),y.classList.remove(g.modifierClass+g.type),y.classList.remove(e.isHorizontal()?g.horizontalClass:g.verticalClass),g.clickable&&(y.classList.remove(...(g.clickableClass||"").split(" ")),y.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(y=>y.classList.remove(...g.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const g=e.params.pagination;let{el:m}=e.pagination;m=N(m),m.forEach(y=>{y.classList.remove(g.horizontalClass,g.verticalClass),y.classList.add(e.isHorizontal()?g.horizontalClass:g.verticalClass)})}),t("init",()=>{e.params.pagination.enabled===!1?b():(a(),w(),v())}),t("activeIndexChange",()=>{typeof e.snapIndex>"u"&&v()}),t("snapIndexChange",()=>{v()}),t("snapGridLengthChange",()=>{w(),v()}),t("destroy",()=>{l()}),t("enable disable",()=>{let{el:g}=e.pagination;g&&(g=N(g),g.forEach(m=>m.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),t("lock unlock",()=>{v()}),t("click",(g,m)=>{const y=m.target,x=N(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&x&&x.length>0&&!y.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&y===e.navigation.nextEl||e.navigation.prevEl&&y===e.navigation.prevEl))return;const k=x[0].classList.contains(e.params.pagination.hiddenClass);s(k===!0?"paginationShow":"paginationHide"),x.forEach(C=>C.classList.toggle(e.params.pagination.hiddenClass))}});const h=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:g}=e.pagination;g&&(g=N(g),g.forEach(m=>m.classList.remove(e.params.pagination.paginationDisabledClass))),a(),w(),v()},b=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:g}=e.pagination;g&&(g=N(g),g.forEach(m=>m.classList.add(e.params.pagination.paginationDisabledClass))),l()};Object.assign(e.pagination,{enable:h,disable:b,render:w,update:v,init:a,destroy:l})}function Lr(r){let{swiper:e,extendParams:i,on:t,emit:s}=r;const n=Z();let o=!1,c=null,f=null,d,p,u,v;i({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function w(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:P,rtlTranslate:M}=e,{dragEl:L,el:A}=P,O=e.params.scrollbar,E=e.params.loop?e.progressLoop:e.progress;let _=p,V=(u-p)*E;M?(V=-V,V>0?(_=p-V,V=0):-V+p>u&&(_=u+V)):V<0?(_=p+V,V=0):V+p>u&&(_=u-V),e.isHorizontal()?(L.style.transform=`translate3d(${V}px, 0, 0)`,L.style.width=`${_}px`):(L.style.transform=`translate3d(0px, ${V}px, 0)`,L.style.height=`${_}px`),O.hide&&(clearTimeout(c),A.style.opacity=1,c=setTimeout(()=>{A.style.opacity=0,A.style.transitionDuration="400ms"},1e3))}function a(P){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${P}ms`)}function l(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:P}=e,{dragEl:M,el:L}=P;M.style.width="",M.style.height="",u=e.isHorizontal()?L.offsetWidth:L.offsetHeight,v=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?p=u*v:p=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?M.style.width=`${p}px`:M.style.height=`${p}px`,v>=1?L.style.display="none":L.style.display="",e.params.scrollbar.hide&&(L.style.opacity=0),e.params.watchOverflow&&e.enabled&&P.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function h(P){return e.isHorizontal()?P.clientX:P.clientY}function b(P){const{scrollbar:M,rtlTranslate:L}=e,{el:A}=M;let O;O=(h(P)-Ue(A)[e.isHorizontal()?"left":"top"]-(d!==null?d:p/2))/(u-p),O=Math.max(Math.min(O,1),0),L&&(O=1-O);const E=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*O;e.updateProgress(E),e.setTranslate(E),e.updateActiveIndex(),e.updateSlidesClasses()}function g(P){const M=e.params.scrollbar,{scrollbar:L,wrapperEl:A}=e,{el:O,dragEl:E}=L;o=!0,d=P.target===E?h(P)-P.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,P.preventDefault(),P.stopPropagation(),A.style.transitionDuration="100ms",E.style.transitionDuration="100ms",b(P),clearTimeout(f),O.style.transitionDuration="0ms",M.hide&&(O.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),s("scrollbarDragStart",P)}function m(P){const{scrollbar:M,wrapperEl:L}=e,{el:A,dragEl:O}=M;o&&(P.preventDefault&&P.cancelable?P.preventDefault():P.returnValue=!1,b(P),L.style.transitionDuration="0ms",A.style.transitionDuration="0ms",O.style.transitionDuration="0ms",s("scrollbarDragMove",P))}function y(P){const M=e.params.scrollbar,{scrollbar:L,wrapperEl:A}=e,{el:O}=L;o&&(o=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",A.style.transitionDuration=""),M.hide&&(clearTimeout(f),f=Se(()=>{O.style.opacity=0,O.style.transitionDuration="400ms"},1e3)),s("scrollbarDragEnd",P),M.snapOnRelease&&e.slideToClosest())}function x(P){const{scrollbar:M,params:L}=e,A=M.el;if(!A)return;const O=A,E=L.passiveListeners?{passive:!1,capture:!1}:!1,_=L.passiveListeners?{passive:!0,capture:!1}:!1;if(!O)return;const V=P==="on"?"addEventListener":"removeEventListener";O[V]("pointerdown",g,E),n[V]("pointermove",m,E),n[V]("pointerup",y,_)}function k(){!e.params.scrollbar.el||!e.scrollbar.el||x("on")}function C(){!e.params.scrollbar.el||!e.scrollbar.el||x("off")}function I(){const{scrollbar:P,el:M}=e;e.params.scrollbar=_t(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const L=e.params.scrollbar;if(!L.el)return;let A;if(typeof L.el=="string"&&e.isElement&&(A=e.el.querySelector(L.el)),!A&&typeof L.el=="string"){if(A=n.querySelectorAll(L.el),!A.length)return}else A||(A=L.el);e.params.uniqueNavElements&&typeof L.el=="string"&&A.length>1&&M.querySelectorAll(L.el).length===1&&(A=M.querySelector(L.el)),A.length>0&&(A=A[0]),A.classList.add(e.isHorizontal()?L.horizontalClass:L.verticalClass);let O;A&&(O=A.querySelector(me(e.params.scrollbar.dragClass)),O||(O=oe("div",e.params.scrollbar.dragClass),A.append(O))),Object.assign(P,{el:A,dragEl:O}),L.draggable&&k(),A&&A.classList[e.enabled?"remove":"add"](...ve(e.params.scrollbar.lockClass))}function S(){const P=e.params.scrollbar,M=e.scrollbar.el;M&&M.classList.remove(...ve(e.isHorizontal()?P.horizontalClass:P.verticalClass)),C()}t("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;const P=e.params.scrollbar;let{el:M}=e.scrollbar;M=N(M),M.forEach(L=>{L.classList.remove(P.horizontalClass,P.verticalClass),L.classList.add(e.isHorizontal()?P.horizontalClass:P.verticalClass)})}),t("init",()=>{e.params.scrollbar.enabled===!1?z():(I(),l(),w())}),t("update resize observerUpdate lock unlock changeDirection",()=>{l()}),t("setTranslate",()=>{w()}),t("setTransition",(P,M)=>{a(M)}),t("enable disable",()=>{const{el:P}=e.scrollbar;P&&P.classList[e.enabled?"remove":"add"](...ve(e.params.scrollbar.lockClass))}),t("destroy",()=>{S()});const T=()=>{e.el.classList.remove(...ve(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...ve(e.params.scrollbar.scrollbarDisabledClass)),I(),l(),w()},z=()=>{e.el.classList.add(...ve(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...ve(e.params.scrollbar.scrollbarDisabledClass)),S()};Object.assign(e.scrollbar,{enable:T,disable:z,updateSize:l,setTranslate:w,init:I,destroy:S})}function kr(r){let{swiper:e,extendParams:i,on:t}=r;i({parallax:{enabled:!1}});const s="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",n=(f,d)=>{const{rtl:p}=e,u=p?-1:1,v=f.getAttribute("data-swiper-parallax")||"0";let w=f.getAttribute("data-swiper-parallax-x"),a=f.getAttribute("data-swiper-parallax-y");const l=f.getAttribute("data-swiper-parallax-scale"),h=f.getAttribute("data-swiper-parallax-opacity"),b=f.getAttribute("data-swiper-parallax-rotate");if(w||a?(w=w||"0",a=a||"0"):e.isHorizontal()?(w=v,a="0"):(a=v,w="0"),w.indexOf("%")>=0?w=`${parseInt(w,10)*d*u}%`:w=`${w*d*u}px`,a.indexOf("%")>=0?a=`${parseInt(a,10)*d}%`:a=`${a*d}px`,typeof h<"u"&&h!==null){const m=h-(h-1)*(1-Math.abs(d));f.style.opacity=m}let g=`translate3d(${w}, ${a}, 0px)`;if(typeof l<"u"&&l!==null){const m=l-(l-1)*(1-Math.abs(d));g+=` scale(${m})`}if(b&&typeof b<"u"&&b!==null){const m=b*d*-1;g+=` rotate(${m}deg)`}f.style.transform=g},o=()=>{const{el:f,slides:d,progress:p,snapGrid:u,isElement:v}=e,w=Q(f,s);e.isElement&&w.push(...Q(e.hostEl,s)),w.forEach(a=>{n(a,p)}),d.forEach((a,l)=>{let h=a.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(h+=Math.ceil(l/2)-p*(u.length-1)),h=Math.min(Math.max(h,-1),1),a.querySelectorAll(`${s}, [data-swiper-parallax-rotate]`).forEach(b=>{n(b,h)})})},c=function(f){f===void 0&&(f=e.params.speed);const{el:d,hostEl:p}=e,u=[...d.querySelectorAll(s)];e.isElement&&u.push(...p.querySelectorAll(s)),u.forEach(v=>{let w=parseInt(v.getAttribute("data-swiper-parallax-duration"),10)||f;f===0&&(w=0),v.style.transitionDuration=`${w}ms`})};t("beforeInit",()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),t("init",()=>{e.params.parallax.enabled&&o()}),t("setTranslate",()=>{e.params.parallax.enabled&&o()}),t("setTransition",(f,d)=>{e.params.parallax.enabled&&c(d)})}function jr(r){let{swiper:e,extendParams:i,on:t,emit:s}=r;const n=W();i({zoom:{enabled:!1,limitToOriginalSize:!1,maxRatio:3,minRatio:1,panOnMouseMove:!1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let o=1,c=!1,f=!1,d={x:0,y:0};const p=-3;let u,v;const w=[],a={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},l={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},h={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let b=1;Object.defineProperty(e.zoom,"scale",{get(){return b},set(D){if(b!==D){const j=a.imageEl,$=a.slideEl;s("zoomChange",D,j,$)}b=D}});function g(){if(w.length<2)return 1;const D=w[0].pageX,j=w[0].pageY,$=w[1].pageX,Y=w[1].pageY;return Math.sqrt(($-D)**2+(Y-j)**2)}function m(){const D=e.params.zoom,j=a.imageWrapEl.getAttribute("data-swiper-zoom")||D.maxRatio;if(D.limitToOriginalSize&&a.imageEl&&a.imageEl.naturalWidth){const $=a.imageEl.naturalWidth/a.imageEl.offsetWidth;return Math.min($,j)}return j}function y(){if(w.length<2)return{x:null,y:null};const D=a.imageEl.getBoundingClientRect();return[(w[0].pageX+(w[1].pageX-w[0].pageX)/2-D.x-n.scrollX)/o,(w[0].pageY+(w[1].pageY-w[0].pageY)/2-D.y-n.scrollY)/o]}function x(){return e.isElement?"swiper-slide":`.${e.params.slideClass}`}function k(D){const j=x();return!!(D.target.matches(j)||e.slides.filter($=>$.contains(D.target)).length>0)}function C(D){const j=`.${e.params.zoom.containerClass}`;return!!(D.target.matches(j)||[...e.hostEl.querySelectorAll(j)].filter($=>$.contains(D.target)).length>0)}function I(D){if(D.pointerType==="mouse"&&w.splice(0,w.length),!k(D))return;const j=e.params.zoom;if(u=!1,v=!1,w.push(D),!(w.length<2)){if(u=!0,a.scaleStart=g(),!a.slideEl){a.slideEl=D.target.closest(`.${e.params.slideClass}, swiper-slide`),a.slideEl||(a.slideEl=e.slides[e.activeIndex]);let $=a.slideEl.querySelector(`.${j.containerClass}`);if($&&($=$.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),a.imageEl=$,$?a.imageWrapEl=ye(a.imageEl,`.${j.containerClass}`)[0]:a.imageWrapEl=void 0,!a.imageWrapEl){a.imageEl=void 0;return}a.maxRatio=m()}if(a.imageEl){const[$,Y]=y();a.originX=$,a.originY=Y,a.imageEl.style.transitionDuration="0ms"}c=!0}}function S(D){if(!k(D))return;const j=e.params.zoom,$=e.zoom,Y=w.findIndex(te=>te.pointerId===D.pointerId);Y>=0&&(w[Y]=D),!(w.length<2)&&(v=!0,a.scaleMove=g(),a.imageEl&&($.scale=a.scaleMove/a.scaleStart*o,$.scale>a.maxRatio&&($.scale=a.maxRatio-1+($.scale-a.maxRatio+1)**.5),$.scale<j.minRatio&&($.scale=j.minRatio+1-(j.minRatio-$.scale+1)**.5),a.imageEl.style.transform=`translate3d(0,0,0) scale(${$.scale})`))}function T(D){if(!k(D)||D.pointerType==="mouse"&&D.type==="pointerout")return;const j=e.params.zoom,$=e.zoom,Y=w.findIndex(te=>te.pointerId===D.pointerId);Y>=0&&w.splice(Y,1),!(!u||!v)&&(u=!1,v=!1,a.imageEl&&($.scale=Math.max(Math.min($.scale,a.maxRatio),j.minRatio),a.imageEl.style.transitionDuration=`${e.params.speed}ms`,a.imageEl.style.transform=`translate3d(0,0,0) scale(${$.scale})`,o=$.scale,c=!1,$.scale>1&&a.slideEl?a.slideEl.classList.add(`${j.zoomedSlideClass}`):$.scale<=1&&a.slideEl&&a.slideEl.classList.remove(`${j.zoomedSlideClass}`),$.scale===1&&(a.originX=0,a.originY=0,a.slideEl=void 0)))}let z;function P(){e.touchEventsData.preventTouchMoveFromPointerMove=!1}function M(){clearTimeout(z),e.touchEventsData.preventTouchMoveFromPointerMove=!0,z=setTimeout(()=>{e.destroyed||P()})}function L(D){const j=e.device;if(!a.imageEl||l.isTouched)return;j.android&&D.cancelable&&D.preventDefault(),l.isTouched=!0;const $=w.length>0?w[0]:D;l.touchesStart.x=$.pageX,l.touchesStart.y=$.pageY}function A(D){const $=D.pointerType==="mouse"&&e.params.zoom.panOnMouseMove;if(!k(D)||!C(D))return;const Y=e.zoom;if(!a.imageEl)return;if(!l.isTouched||!a.slideEl){$&&_(D);return}if($){_(D);return}l.isMoved||(l.width=a.imageEl.offsetWidth||a.imageEl.clientWidth,l.height=a.imageEl.offsetHeight||a.imageEl.clientHeight,l.startX=vt(a.imageWrapEl,"x")||0,l.startY=vt(a.imageWrapEl,"y")||0,a.slideWidth=a.slideEl.offsetWidth,a.slideHeight=a.slideEl.offsetHeight,a.imageWrapEl.style.transitionDuration="0ms");const te=l.width*Y.scale,we=l.height*Y.scale;if(l.minX=Math.min(a.slideWidth/2-te/2,0),l.maxX=-l.minX,l.minY=Math.min(a.slideHeight/2-we/2,0),l.maxY=-l.minY,l.touchesCurrent.x=w.length>0?w[0].pageX:D.pageX,l.touchesCurrent.y=w.length>0?w[0].pageY:D.pageY,Math.max(Math.abs(l.touchesCurrent.x-l.touchesStart.x),Math.abs(l.touchesCurrent.y-l.touchesStart.y))>5&&(e.allowClick=!1),!l.isMoved&&!c){if(e.isHorizontal()&&(Math.floor(l.minX)===Math.floor(l.startX)&&l.touchesCurrent.x<l.touchesStart.x||Math.floor(l.maxX)===Math.floor(l.startX)&&l.touchesCurrent.x>l.touchesStart.x)){l.isTouched=!1,P();return}if(!e.isHorizontal()&&(Math.floor(l.minY)===Math.floor(l.startY)&&l.touchesCurrent.y<l.touchesStart.y||Math.floor(l.maxY)===Math.floor(l.startY)&&l.touchesCurrent.y>l.touchesStart.y)){l.isTouched=!1,P();return}}D.cancelable&&D.preventDefault(),D.stopPropagation(),M(),l.isMoved=!0;const ue=(Y.scale-o)/(a.maxRatio-e.params.zoom.minRatio),{originX:he,originY:ie}=a;l.currentX=l.touchesCurrent.x-l.touchesStart.x+l.startX+ue*(l.width-he*2),l.currentY=l.touchesCurrent.y-l.touchesStart.y+l.startY+ue*(l.height-ie*2),l.currentX<l.minX&&(l.currentX=l.minX+1-(l.minX-l.currentX+1)**.8),l.currentX>l.maxX&&(l.currentX=l.maxX-1+(l.currentX-l.maxX+1)**.8),l.currentY<l.minY&&(l.currentY=l.minY+1-(l.minY-l.currentY+1)**.8),l.currentY>l.maxY&&(l.currentY=l.maxY-1+(l.currentY-l.maxY+1)**.8),h.prevPositionX||(h.prevPositionX=l.touchesCurrent.x),h.prevPositionY||(h.prevPositionY=l.touchesCurrent.y),h.prevTime||(h.prevTime=Date.now()),h.x=(l.touchesCurrent.x-h.prevPositionX)/(Date.now()-h.prevTime)/2,h.y=(l.touchesCurrent.y-h.prevPositionY)/(Date.now()-h.prevTime)/2,Math.abs(l.touchesCurrent.x-h.prevPositionX)<2&&(h.x=0),Math.abs(l.touchesCurrent.y-h.prevPositionY)<2&&(h.y=0),h.prevPositionX=l.touchesCurrent.x,h.prevPositionY=l.touchesCurrent.y,h.prevTime=Date.now(),a.imageWrapEl.style.transform=`translate3d(${l.currentX}px, ${l.currentY}px,0)`}function O(){const D=e.zoom;if(w.length=0,!a.imageEl)return;if(!l.isTouched||!l.isMoved){l.isTouched=!1,l.isMoved=!1;return}l.isTouched=!1,l.isMoved=!1;let j=300,$=300;const Y=h.x*j,te=l.currentX+Y,we=h.y*$,ge=l.currentY+we;h.x!==0&&(j=Math.abs((te-l.currentX)/h.x)),h.y!==0&&($=Math.abs((ge-l.currentY)/h.y));const ue=Math.max(j,$);l.currentX=te,l.currentY=ge;const he=l.width*D.scale,ie=l.height*D.scale;l.minX=Math.min(a.slideWidth/2-he/2,0),l.maxX=-l.minX,l.minY=Math.min(a.slideHeight/2-ie/2,0),l.maxY=-l.minY,l.currentX=Math.max(Math.min(l.currentX,l.maxX),l.minX),l.currentY=Math.max(Math.min(l.currentY,l.maxY),l.minY),a.imageWrapEl.style.transitionDuration=`${ue}ms`,a.imageWrapEl.style.transform=`translate3d(${l.currentX}px, ${l.currentY}px,0)`}function E(){const D=e.zoom;a.slideEl&&e.activeIndex!==e.slides.indexOf(a.slideEl)&&(a.imageEl&&(a.imageEl.style.transform="translate3d(0,0,0) scale(1)"),a.imageWrapEl&&(a.imageWrapEl.style.transform="translate3d(0,0,0)"),a.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),D.scale=1,o=1,a.slideEl=void 0,a.imageEl=void 0,a.imageWrapEl=void 0,a.originX=0,a.originY=0)}function _(D){if(o<=1||!a.imageWrapEl||!k(D)||!C(D))return;const j=n.getComputedStyle(a.imageWrapEl).transform,$=new n.DOMMatrix(j);if(!f){f=!0,d.x=D.clientX,d.y=D.clientY,l.startX=$.e,l.startY=$.f,l.width=a.imageEl.offsetWidth||a.imageEl.clientWidth,l.height=a.imageEl.offsetHeight||a.imageEl.clientHeight,a.slideWidth=a.slideEl.offsetWidth,a.slideHeight=a.slideEl.offsetHeight;return}const Y=(D.clientX-d.x)*p,te=(D.clientY-d.y)*p,we=l.width*o,ge=l.height*o,ue=a.slideWidth,he=a.slideHeight,ie=Math.min(ue/2-we/2,0),de=-ie,Le=Math.min(he/2-ge/2,0),Xe=-Le,Ee=Math.max(Math.min(l.startX+Y,de),ie),Te=Math.max(Math.min(l.startY+te,Xe),Le);a.imageWrapEl.style.transitionDuration="0ms",a.imageWrapEl.style.transform=`translate3d(${Ee}px, ${Te}px, 0)`,d.x=D.clientX,d.y=D.clientY,l.startX=Ee,l.startY=Te,l.currentX=Ee,l.currentY=Te}function V(D){const j=e.zoom,$=e.params.zoom;if(!a.slideEl){D&&D.target&&(a.slideEl=D.target.closest(`.${e.params.slideClass}, swiper-slide`)),a.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?a.slideEl=Q(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:a.slideEl=e.slides[e.activeIndex]);let ke=a.slideEl.querySelector(`.${$.containerClass}`);ke&&(ke=ke.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),a.imageEl=ke,ke?a.imageWrapEl=ye(a.imageEl,`.${$.containerClass}`)[0]:a.imageWrapEl=void 0}if(!a.imageEl||!a.imageWrapEl)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),a.slideEl.classList.add(`${$.zoomedSlideClass}`);let Y,te,we,ge,ue,he,ie,de,Le,Xe,Ee,Te,Ne,Ye,nt,at,ot,lt;typeof l.touchesStart.x>"u"&&D?(Y=D.pageX,te=D.pageY):(Y=l.touchesStart.x,te=l.touchesStart.y);const pt=o,_e=typeof D=="number"?D:null;o===1&&_e&&(Y=void 0,te=void 0,l.touchesStart.x=void 0,l.touchesStart.y=void 0);const Ct=m();j.scale=_e||Ct,o=_e||Ct,D&&!(o===1&&_e)?(ot=a.slideEl.offsetWidth,lt=a.slideEl.offsetHeight,we=Ue(a.slideEl).left+n.scrollX,ge=Ue(a.slideEl).top+n.scrollY,ue=we+ot/2-Y,he=ge+lt/2-te,Le=a.imageEl.offsetWidth||a.imageEl.clientWidth,Xe=a.imageEl.offsetHeight||a.imageEl.clientHeight,Ee=Le*j.scale,Te=Xe*j.scale,Ne=Math.min(ot/2-Ee/2,0),Ye=Math.min(lt/2-Te/2,0),nt=-Ne,at=-Ye,pt>0&&_e&&typeof l.currentX=="number"&&typeof l.currentY=="number"?(ie=l.currentX*j.scale/pt,de=l.currentY*j.scale/pt):(ie=ue*j.scale,de=he*j.scale),ie<Ne&&(ie=Ne),ie>nt&&(ie=nt),de<Ye&&(de=Ye),de>at&&(de=at)):(ie=0,de=0),_e&&j.scale===1&&(a.originX=0,a.originY=0),l.currentX=ie,l.currentY=de,a.imageWrapEl.style.transitionDuration="300ms",a.imageWrapEl.style.transform=`translate3d(${ie}px, ${de}px,0)`,a.imageEl.style.transitionDuration="300ms",a.imageEl.style.transform=`translate3d(0,0,0) scale(${j.scale})`}function X(){const D=e.zoom,j=e.params.zoom;if(!a.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?a.slideEl=Q(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:a.slideEl=e.slides[e.activeIndex];let $=a.slideEl.querySelector(`.${j.containerClass}`);$&&($=$.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),a.imageEl=$,$?a.imageWrapEl=ye(a.imageEl,`.${j.containerClass}`)[0]:a.imageWrapEl=void 0}!a.imageEl||!a.imageWrapEl||(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),D.scale=1,o=1,l.currentX=void 0,l.currentY=void 0,l.touchesStart.x=void 0,l.touchesStart.y=void 0,a.imageWrapEl.style.transitionDuration="300ms",a.imageWrapEl.style.transform="translate3d(0,0,0)",a.imageEl.style.transitionDuration="300ms",a.imageEl.style.transform="translate3d(0,0,0) scale(1)",a.slideEl.classList.remove(`${j.zoomedSlideClass}`),a.slideEl=void 0,a.originX=0,a.originY=0,e.params.zoom.panOnMouseMove&&(d={x:0,y:0},f&&(f=!1,l.startX=0,l.startY=0)))}function q(D){const j=e.zoom;j.scale&&j.scale!==1?X():V(D)}function U(){const D=e.params.passiveListeners?{passive:!0,capture:!1}:!1,j=e.params.passiveListeners?{passive:!1,capture:!0}:!0;return{passiveListener:D,activeListenerWithCapture:j}}function ce(){const D=e.zoom;if(D.enabled)return;D.enabled=!0;const{passiveListener:j,activeListenerWithCapture:$}=U();e.wrapperEl.addEventListener("pointerdown",I,j),e.wrapperEl.addEventListener("pointermove",S,$),["pointerup","pointercancel","pointerout"].forEach(Y=>{e.wrapperEl.addEventListener(Y,T,j)}),e.wrapperEl.addEventListener("pointermove",A,$)}function ze(){const D=e.zoom;if(!D.enabled)return;D.enabled=!1;const{passiveListener:j,activeListenerWithCapture:$}=U();e.wrapperEl.removeEventListener("pointerdown",I,j),e.wrapperEl.removeEventListener("pointermove",S,$),["pointerup","pointercancel","pointerout"].forEach(Y=>{e.wrapperEl.removeEventListener(Y,T,j)}),e.wrapperEl.removeEventListener("pointermove",A,$)}t("init",()=>{e.params.zoom.enabled&&ce()}),t("destroy",()=>{ze()}),t("touchStart",(D,j)=>{e.zoom.enabled&&L(j)}),t("touchEnd",(D,j)=>{e.zoom.enabled&&O()}),t("doubleTap",(D,j)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&q(j)}),t("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&E()}),t("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&E()}),Object.assign(e.zoom,{enable:ce,disable:ze,in:V,out:X,toggle:q})}function Ar(r){let{swiper:e,extendParams:i,on:t}=r;i({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function s(d,p){const u=function(){let l,h,b;return(g,m)=>{for(h=-1,l=g.length;l-h>1;)b=l+h>>1,g[b]<=m?h=b:l=b;return l}}();this.x=d,this.y=p,this.lastIndex=d.length-1;let v,w;return this.interpolate=function(l){return l?(w=u(this.x,l),v=w-1,(l-this.x[v])*(this.y[w]-this.y[v])/(this.x[w]-this.x[v])+this.y[v]):0},this}function n(d){e.controller.spline=e.params.loop?new s(e.slidesGrid,d.slidesGrid):new s(e.snapGrid,d.snapGrid)}function o(d,p){const u=e.controller.control;let v,w;const a=e.constructor;function l(h){if(h.destroyed)return;const b=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(n(h),w=-e.controller.spline.interpolate(-b)),(!w||e.params.controller.by==="container")&&(v=(h.maxTranslate()-h.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(v)||!Number.isFinite(v))&&(v=1),w=(b-e.minTranslate())*v+h.minTranslate()),e.params.controller.inverse&&(w=h.maxTranslate()-w),h.updateProgress(w),h.setTranslate(w,e),h.updateActiveIndex(),h.updateSlidesClasses()}if(Array.isArray(u))for(let h=0;h<u.length;h+=1)u[h]!==p&&u[h]instanceof a&&l(u[h]);else u instanceof a&&p!==u&&l(u)}function c(d,p){const u=e.constructor,v=e.controller.control;let w;function a(l){l.destroyed||(l.setTransition(d,e),d!==0&&(l.transitionStart(),l.params.autoHeight&&Se(()=>{l.updateAutoHeight()}),Ve(l.wrapperEl,()=>{v&&l.transitionEnd()})))}if(Array.isArray(v))for(w=0;w<v.length;w+=1)v[w]!==p&&v[w]instanceof u&&a(v[w]);else v instanceof u&&p!==v&&a(v)}function f(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}t("beforeInit",()=>{if(typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)){(typeof e.params.controller.control=="string"?[...document.querySelectorAll(e.params.controller.control)]:[e.params.controller.control]).forEach(p=>{if(e.controller.control||(e.controller.control=[]),p&&p.swiper)e.controller.control.push(p.swiper);else if(p){const u=`${e.params.eventsPrefix}init`,v=w=>{e.controller.control.push(w.detail[0]),e.update(),p.removeEventListener(u,v)};p.addEventListener(u,v)}});return}e.controller.control=e.params.controller.control}),t("update",()=>{f()}),t("resize",()=>{f()}),t("observerUpdate",()=>{f()}),t("setTranslate",(d,p,u)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(p,u)}),t("setTransition",(d,p,u)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(p,u)}),Object.assign(e.controller,{setTranslate:o,setTransition:c})}function Dr(r){let{swiper:e,extendParams:i,on:t}=r;i({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),e.a11y={clicked:!1};let s=null,n,o,c=new Date().getTime();function f(E){const _=s;_.length!==0&&fe(_,E)}function d(E){const _=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(E).replace(/x/g,_)}function p(E){E=N(E),E.forEach(_=>{_.setAttribute("tabIndex","0")})}function u(E){E=N(E),E.forEach(_=>{_.setAttribute("tabIndex","-1")})}function v(E,_){E=N(E),E.forEach(V=>{V.setAttribute("role",_)})}function w(E,_){E=N(E),E.forEach(V=>{V.setAttribute("aria-roledescription",_)})}function a(E,_){E=N(E),E.forEach(V=>{V.setAttribute("aria-controls",_)})}function l(E,_){E=N(E),E.forEach(V=>{V.setAttribute("aria-label",_)})}function h(E,_){E=N(E),E.forEach(V=>{V.setAttribute("id",_)})}function b(E,_){E=N(E),E.forEach(V=>{V.setAttribute("aria-live",_)})}function g(E){E=N(E),E.forEach(_=>{_.setAttribute("aria-disabled",!0)})}function m(E){E=N(E),E.forEach(_=>{_.setAttribute("aria-disabled",!1)})}function y(E){if(E.keyCode!==13&&E.keyCode!==32)return;const _=e.params.a11y,V=E.target;if(!(e.pagination&&e.pagination.el&&(V===e.pagination.el||e.pagination.el.contains(E.target))&&!E.target.matches(me(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const X=N(e.navigation.prevEl);N(e.navigation.nextEl).includes(V)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?f(_.lastSlideMessage):f(_.nextSlideMessage)),X.includes(V)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?f(_.firstSlideMessage):f(_.prevSlideMessage))}e.pagination&&V.matches(me(e.params.pagination.bulletClass))&&V.click()}}function x(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:E,prevEl:_}=e.navigation;_&&(e.isBeginning?(g(_),u(_)):(m(_),p(_))),E&&(e.isEnd?(g(E),u(E)):(m(E),p(E)))}function k(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function C(){return k()&&e.params.pagination.clickable}function I(){const E=e.params.a11y;k()&&e.pagination.bullets.forEach(_=>{e.params.pagination.clickable&&(p(_),e.params.pagination.renderBullet||(v(_,"button"),l(_,E.paginationBulletMessage.replace(/\{\{index\}\}/,Be(_)+1)))),_.matches(me(e.params.pagination.bulletActiveClass))?_.setAttribute("aria-current","true"):_.removeAttribute("aria-current")})}const S=(E,_,V)=>{p(E),E.tagName!=="BUTTON"&&(v(E,"button"),E.addEventListener("keydown",y)),l(E,V),a(E,_)},T=E=>{o&&o!==E.target&&!o.contains(E.target)&&(n=!0),e.a11y.clicked=!0},z=()=>{n=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},P=E=>{c=new Date().getTime()},M=E=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-c<100)return;const _=E.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!_||!e.slides.includes(_))return;o=_;const V=e.slides.indexOf(_)===e.activeIndex,X=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(_);V||X||E.sourceCapabilities&&E.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{n||(e.params.loop?e.slideToLoop(parseInt(_.getAttribute("data-swiper-slide-index")),0):e.slideTo(e.slides.indexOf(_),0),n=!1)}))},L=()=>{const E=e.params.a11y;E.itemRoleDescriptionMessage&&w(e.slides,E.itemRoleDescriptionMessage),E.slideRole&&v(e.slides,E.slideRole);const _=e.slides.length;E.slideLabelMessage&&e.slides.forEach((V,X)=>{const q=e.params.loop?parseInt(V.getAttribute("data-swiper-slide-index"),10):X,U=E.slideLabelMessage.replace(/\{\{index\}\}/,q+1).replace(/\{\{slidesLength\}\}/,_);l(V,U)})},A=()=>{const E=e.params.a11y;e.el.append(s);const _=e.el;E.containerRoleDescriptionMessage&&w(_,E.containerRoleDescriptionMessage),E.containerMessage&&l(_,E.containerMessage),E.containerRole&&v(_,E.containerRole);const V=e.wrapperEl,X=E.id||V.getAttribute("id")||`swiper-wrapper-${d(16)}`,q=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";h(V,X),b(V,q),L();let{nextEl:U,prevEl:ce}=e.navigation?e.navigation:{};U=N(U),ce=N(ce),U&&U.forEach(D=>S(D,X,E.nextSlideMessage)),ce&&ce.forEach(D=>S(D,X,E.prevSlideMessage)),C()&&N(e.pagination.el).forEach(j=>{j.addEventListener("keydown",y)}),Z().addEventListener("visibilitychange",P),e.el.addEventListener("focus",M,!0),e.el.addEventListener("focus",M,!0),e.el.addEventListener("pointerdown",T,!0),e.el.addEventListener("pointerup",z,!0)};function O(){s&&s.remove();let{nextEl:E,prevEl:_}=e.navigation?e.navigation:{};E=N(E),_=N(_),E&&E.forEach(X=>X.removeEventListener("keydown",y)),_&&_.forEach(X=>X.removeEventListener("keydown",y)),C()&&N(e.pagination.el).forEach(q=>{q.removeEventListener("keydown",y)}),Z().removeEventListener("visibilitychange",P),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",M,!0),e.el.removeEventListener("pointerdown",T,!0),e.el.removeEventListener("pointerup",z,!0))}t("beforeInit",()=>{s=oe("span",e.params.a11y.notificationClass),s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true")}),t("afterInit",()=>{e.params.a11y.enabled&&A()}),t("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&L()}),t("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&x()}),t("paginationUpdate",()=>{e.params.a11y.enabled&&I()}),t("destroy",()=>{e.params.a11y.enabled&&O()})}function Or(r){let{swiper:e,extendParams:i,on:t}=r;i({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let s=!1,n={};const o=w=>w.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),c=w=>{const a=W();let l;w?l=new URL(w):l=a.location;const h=l.pathname.slice(1).split("/").filter(y=>y!==""),b=h.length,g=h[b-2],m=h[b-1];return{key:g,value:m}},f=(w,a)=>{const l=W();if(!s||!e.params.history.enabled)return;let h;e.params.url?h=new URL(e.params.url):h=l.location;const b=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${a}"]`):e.slides[a];let g=o(b.getAttribute("data-history"));if(e.params.history.root.length>0){let y=e.params.history.root;y[y.length-1]==="/"&&(y=y.slice(0,y.length-1)),g=`${y}/${w?`${w}/`:""}${g}`}else h.pathname.includes(w)||(g=`${w?`${w}/`:""}${g}`);e.params.history.keepQuery&&(g+=h.search);const m=l.history.state;m&&m.value===g||(e.params.history.replaceState?l.history.replaceState({value:g},null,g):l.history.pushState({value:g},null,g))},d=(w,a,l)=>{if(a)for(let h=0,b=e.slides.length;h<b;h+=1){const g=e.slides[h];if(o(g.getAttribute("data-history"))===a){const y=e.getSlideIndex(g);e.slideTo(y,w,l)}}else e.slideTo(0,w,l)},p=()=>{n=c(e.params.url),d(e.params.speed,n.value,!1)},u=()=>{const w=W();if(e.params.history){if(!w.history||!w.history.pushState){e.params.history.enabled=!1,e.params.hashNavigation.enabled=!0;return}if(s=!0,n=c(e.params.url),!n.key&&!n.value){e.params.history.replaceState||w.addEventListener("popstate",p);return}d(0,n.value,e.params.runCallbacksOnInit),e.params.history.replaceState||w.addEventListener("popstate",p)}},v=()=>{const w=W();e.params.history.replaceState||w.removeEventListener("popstate",p)};t("init",()=>{e.params.history.enabled&&u()}),t("destroy",()=>{e.params.history.enabled&&v()}),t("transitionEnd _freeModeNoMomentumRelease",()=>{s&&f(e.params.history.key,e.activeIndex)}),t("slideChange",()=>{s&&e.params.cssMode&&f(e.params.history.key,e.activeIndex)})}function $r(r){let{swiper:e,extendParams:i,emit:t,on:s}=r,n=!1;const o=Z(),c=W();i({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(v,w){if(e.virtual&&e.params.virtual.enabled){const a=e.slides.find(h=>h.getAttribute("data-hash")===w);return a?parseInt(a.getAttribute("data-swiper-slide-index"),10):0}return e.getSlideIndex(Q(e.slidesEl,`.${e.params.slideClass}[data-hash="${w}"], swiper-slide[data-hash="${w}"]`)[0])}}});const f=()=>{t("hashChange");const v=o.location.hash.replace("#",""),w=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],a=w?w.getAttribute("data-hash"):"";if(v!==a){const l=e.params.hashNavigation.getSlideIndex(e,v);if(typeof l>"u"||Number.isNaN(l))return;e.slideTo(l)}},d=()=>{if(!n||!e.params.hashNavigation.enabled)return;const v=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],w=v?v.getAttribute("data-hash")||v.getAttribute("data-history"):"";e.params.hashNavigation.replaceState&&c.history&&c.history.replaceState?(c.history.replaceState(null,null,`#${w}`||""),t("hashSet")):(o.location.hash=w||"",t("hashSet"))},p=()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;n=!0;const v=o.location.hash.replace("#","");if(v){const a=e.params.hashNavigation.getSlideIndex(e,v);e.slideTo(a||0,0,e.params.runCallbacksOnInit,!0)}e.params.hashNavigation.watchState&&c.addEventListener("hashchange",f)},u=()=>{e.params.hashNavigation.watchState&&c.removeEventListener("hashchange",f)};s("init",()=>{e.params.hashNavigation.enabled&&p()}),s("destroy",()=>{e.params.hashNavigation.enabled&&u()}),s("transitionEnd _freeModeNoMomentumRelease",()=>{n&&d()}),s("slideChange",()=>{n&&e.params.cssMode&&d()})}function Vr(r){let{swiper:e,extendParams:i,on:t,emit:s,params:n}=r;e.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,c,f=n&&n.autoplay?n.autoplay.delay:3e3,d=n&&n.autoplay?n.autoplay.delay:3e3,p,u=new Date().getTime(),v,w,a,l,h,b,g;function m(_){!e||e.destroyed||!e.wrapperEl||_.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",m),!(g||_.detail&&_.detail.bySwiperTouchMove)&&T())}const y=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?v=!0:v&&(d=p,v=!1);const _=e.autoplay.paused?p:u+d-new Date().getTime();e.autoplay.timeLeft=_,s("autoplayTimeLeft",_,_/f),c=requestAnimationFrame(()=>{y()})},x=()=>{let _;return e.virtual&&e.params.virtual.enabled?_=e.slides.find(X=>X.classList.contains("swiper-slide-active")):_=e.slides[e.activeIndex],_?parseInt(_.getAttribute("data-swiper-autoplay"),10):void 0},k=_=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(c),y();let V=typeof _>"u"?e.params.autoplay.delay:_;f=e.params.autoplay.delay,d=e.params.autoplay.delay;const X=x();!Number.isNaN(X)&&X>0&&typeof _>"u"&&(V=X,f=X,d=X),p=V;const q=e.params.speed,U=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(q,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,q,!0,!0),s("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(q,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,q,!0,!0),s("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{k()})))};return V>0?(clearTimeout(o),o=setTimeout(()=>{U()},V)):requestAnimationFrame(()=>{U()}),V},C=()=>{u=new Date().getTime(),e.autoplay.running=!0,k(),s("autoplayStart")},I=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(c),s("autoplayStop")},S=(_,V)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),_||(b=!0);const X=()=>{s("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",m):T()};if(e.autoplay.paused=!0,V){h&&(p=e.params.autoplay.delay),h=!1,X();return}p=(p||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&p<0&&!e.params.loop)&&(p<0&&(p=0),X())},T=()=>{e.isEnd&&p<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),b?(b=!1,k(p)):k(),e.autoplay.paused=!1,s("autoplayResume"))},z=()=>{if(e.destroyed||!e.autoplay.running)return;const _=Z();_.visibilityState==="hidden"&&(b=!0,S(!0)),_.visibilityState==="visible"&&T()},P=_=>{_.pointerType==="mouse"&&(b=!0,g=!0,!(e.animating||e.autoplay.paused)&&S(!0))},M=_=>{_.pointerType==="mouse"&&(g=!1,e.autoplay.paused&&T())},L=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",P),e.el.addEventListener("pointerleave",M))},A=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",P),e.el.removeEventListener("pointerleave",M))},O=()=>{Z().addEventListener("visibilitychange",z)},E=()=>{Z().removeEventListener("visibilitychange",z)};t("init",()=>{e.params.autoplay.enabled&&(L(),O(),C())}),t("destroy",()=>{A(),E(),e.autoplay.running&&I()}),t("_freeModeStaticRelease",()=>{(a||b)&&T()}),t("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?I():S(!0,!0)}),t("beforeTransitionStart",(_,V,X)=>{e.destroyed||!e.autoplay.running||(X||!e.params.autoplay.disableOnInteraction?S(!0,!0):I())}),t("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){I();return}w=!0,a=!1,b=!1,l=setTimeout(()=>{b=!0,a=!0,S(!0)},200)}}),t("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!w)){if(clearTimeout(l),clearTimeout(o),e.params.autoplay.disableOnInteraction){a=!1,w=!1;return}a&&e.params.cssMode&&T(),a=!1,w=!1}}),t("slideChange",()=>{e.destroyed||!e.autoplay.running||(h=!0)}),Object.assign(e.autoplay,{start:C,stop:I,pause:S,resume:T})}function Br(r){let{swiper:e,extendParams:i,on:t}=r;i({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let s=!1,n=!1;e.thumbs={swiper:null};function o(){const d=e.thumbs.swiper;if(!d||d.destroyed)return;const p=d.clickedIndex,u=d.clickedSlide;if(u&&u.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof p>"u"||p===null)return;let v;d.params.loop?v=parseInt(d.clickedSlide.getAttribute("data-swiper-slide-index"),10):v=p,e.params.loop?e.slideToLoop(v):e.slideTo(v)}function c(){const{thumbs:d}=e.params;if(s)return!1;s=!0;const p=e.constructor;if(d.swiper instanceof p){if(d.swiper.destroyed)return s=!1,!1;e.thumbs.swiper=d.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update()}else if(Oe(d.swiper)){const u=Object.assign({},d.swiper);Object.assign(u,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new p(u),n=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",o),!0}function f(d){const p=e.thumbs.swiper;if(!p||p.destroyed)return;const u=p.params.slidesPerView==="auto"?p.slidesPerViewDynamic():p.params.slidesPerView;let v=1;const w=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(v=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(v=1),v=Math.floor(v),p.slides.forEach(h=>h.classList.remove(w)),p.params.loop||p.params.virtual&&p.params.virtual.enabled)for(let h=0;h<v;h+=1)Q(p.slidesEl,`[data-swiper-slide-index="${e.realIndex+h}"]`).forEach(b=>{b.classList.add(w)});else for(let h=0;h<v;h+=1)p.slides[e.realIndex+h]&&p.slides[e.realIndex+h].classList.add(w);const a=e.params.thumbs.autoScrollOffset,l=a&&!p.params.loop;if(e.realIndex!==p.realIndex||l){const h=p.activeIndex;let b,g;if(p.params.loop){const m=p.slides.find(y=>y.getAttribute("data-swiper-slide-index")===`${e.realIndex}`);b=p.slides.indexOf(m),g=e.activeIndex>e.previousIndex?"next":"prev"}else b=e.realIndex,g=b>e.previousIndex?"next":"prev";l&&(b+=g==="next"?a:-1*a),p.visibleSlidesIndexes&&p.visibleSlidesIndexes.indexOf(b)<0&&(p.params.centeredSlides?b>h?b=b-Math.floor(u/2)+1:b=b+Math.floor(u/2)-1:b>h&&p.params.slidesPerGroup,p.slideTo(b,d?0:void 0))}}t("beforeInit",()=>{const{thumbs:d}=e.params;if(!(!d||!d.swiper))if(typeof d.swiper=="string"||d.swiper instanceof HTMLElement){const p=Z(),u=()=>{const w=typeof d.swiper=="string"?p.querySelector(d.swiper):d.swiper;if(w&&w.swiper)d.swiper=w.swiper,c(),f(!0);else if(w){const a=`${e.params.eventsPrefix}init`,l=h=>{d.swiper=h.detail[0],w.removeEventListener(a,l),c(),f(!0),d.swiper.update(),e.update()};w.addEventListener(a,l)}return w},v=()=>{if(e.destroyed)return;u()||requestAnimationFrame(v)};requestAnimationFrame(v)}else c(),f(!0)}),t("slideChange update resize observerUpdate",()=>{f()}),t("setTransition",(d,p)=>{const u=e.thumbs.swiper;!u||u.destroyed||u.setTransition(p)}),t("beforeDestroy",()=>{const d=e.thumbs.swiper;!d||d.destroyed||n&&d.destroy()}),Object.assign(e.thumbs,{init:c,update:f})}function Gr(r){let{swiper:e,extendParams:i,emit:t,once:s}=r;i({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function n(){if(e.params.cssMode)return;const f=e.getTranslate();e.setTranslate(f),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function o(){if(e.params.cssMode)return;const{touchEventsData:f,touches:d}=e;f.velocities.length===0&&f.velocities.push({position:d[e.isHorizontal()?"startX":"startY"],time:f.touchStartTime}),f.velocities.push({position:d[e.isHorizontal()?"currentX":"currentY"],time:le()})}function c(f){let{currentPos:d}=f;if(e.params.cssMode)return;const{params:p,wrapperEl:u,rtlTranslate:v,snapGrid:w,touchEventsData:a}=e,h=le()-a.touchStartTime;if(d<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(d>-e.maxTranslate()){e.slides.length<w.length?e.slideTo(w.length-1):e.slideTo(e.slides.length-1);return}if(p.freeMode.momentum){if(a.velocities.length>1){const I=a.velocities.pop(),S=a.velocities.pop(),T=I.position-S.position,z=I.time-S.time;e.velocity=T/z,e.velocity/=2,Math.abs(e.velocity)<p.freeMode.minimumVelocity&&(e.velocity=0),(z>150||le()-I.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=p.freeMode.momentumVelocityRatio,a.velocities.length=0;let b=1e3*p.freeMode.momentumRatio;const g=e.velocity*b;let m=e.translate+g;v&&(m=-m);let y=!1,x;const k=Math.abs(e.velocity)*20*p.freeMode.momentumBounceRatio;let C;if(m<e.maxTranslate())p.freeMode.momentumBounce?(m+e.maxTranslate()<-k&&(m=e.maxTranslate()-k),x=e.maxTranslate(),y=!0,a.allowMomentumBounce=!0):m=e.maxTranslate(),p.loop&&p.centeredSlides&&(C=!0);else if(m>e.minTranslate())p.freeMode.momentumBounce?(m-e.minTranslate()>k&&(m=e.minTranslate()+k),x=e.minTranslate(),y=!0,a.allowMomentumBounce=!0):m=e.minTranslate(),p.loop&&p.centeredSlides&&(C=!0);else if(p.freeMode.sticky){let I;for(let S=0;S<w.length;S+=1)if(w[S]>-m){I=S;break}Math.abs(w[I]-m)<Math.abs(w[I-1]-m)||e.swipeDirection==="next"?m=w[I]:m=w[I-1],m=-m}if(C&&s("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(v?b=Math.abs((-m-e.translate)/e.velocity):b=Math.abs((m-e.translate)/e.velocity),p.freeMode.sticky){const I=Math.abs((v?-m:m)-e.translate),S=e.slidesSizesGrid[e.activeIndex];I<S?b=p.speed:I<2*S?b=p.speed*1.5:b=p.speed*2.5}}else if(p.freeMode.sticky){e.slideToClosest();return}p.freeMode.momentumBounce&&y?(e.updateProgress(x),e.setTransition(b),e.setTranslate(m),e.transitionStart(!0,e.swipeDirection),e.animating=!0,Ve(u,()=>{!e||e.destroyed||!a.allowMomentumBounce||(t("momentumBounce"),e.setTransition(p.speed),setTimeout(()=>{e.setTranslate(x),Ve(u,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(t("_freeModeNoMomentumRelease"),e.updateProgress(m),e.setTransition(b),e.setTranslate(m),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,Ve(u,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(m),e.updateActiveIndex(),e.updateSlidesClasses()}else if(p.freeMode.sticky){e.slideToClosest();return}else p.freeMode&&t("_freeModeNoMomentumRelease");(!p.freeMode.momentum||h>=p.longSwipesMs)&&(t("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:n,onTouchMove:o,onTouchEnd:c}})}function Hr(r){let{swiper:e,extendParams:i,on:t}=r;i({grid:{rows:1,fill:"column"}});let s,n,o,c;const f=()=>{let l=e.params.spaceBetween;return typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*e.size:typeof l=="string"&&(l=parseFloat(l)),l},d=l=>{const{slidesPerView:h}=e.params,{rows:b,fill:g}=e.params.grid,m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:l.length;o=Math.floor(m/b),Math.floor(m/b)===m/b?s=m:s=Math.ceil(m/b)*b,h!=="auto"&&g==="row"&&(s=Math.max(s,h*b)),n=s/b},p=()=>{e.slides&&e.slides.forEach(l=>{l.swiperSlideGridSet&&(l.style.height="",l.style[e.getDirectionLabel("margin-top")]="")})},u=(l,h,b)=>{const{slidesPerGroup:g}=e.params,m=f(),{rows:y,fill:x}=e.params.grid,k=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:b.length;let C,I,S;if(x==="row"&&g>1){const T=Math.floor(l/(g*y)),z=l-y*g*T,P=T===0?g:Math.min(Math.ceil((k-T*y*g)/y),g);S=Math.floor(z/P),I=z-S*P+T*g,C=I+S*s/y,h.style.order=C}else x==="column"?(I=Math.floor(l/y),S=l-I*y,(I>o||I===o&&S===y-1)&&(S+=1,S>=y&&(S=0,I+=1))):(S=Math.floor(l/n),I=l-S*n);h.row=S,h.column=I,h.style.height=`calc((100% - ${(y-1)*m}px) / ${y})`,h.style[e.getDirectionLabel("margin-top")]=S!==0?m&&`${m}px`:"",h.swiperSlideGridSet=!0},v=(l,h)=>{const{centeredSlides:b,roundLengths:g}=e.params,m=f(),{rows:y}=e.params.grid;if(e.virtualSize=(l+m)*s,e.virtualSize=Math.ceil(e.virtualSize/y)-m,e.params.cssMode||(e.wrapperEl.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),b){const x=[];for(let k=0;k<h.length;k+=1){let C=h[k];g&&(C=Math.floor(C)),h[k]<e.virtualSize+h[0]&&x.push(C)}h.splice(0,h.length),h.push(...x)}},w=()=>{c=e.params.grid&&e.params.grid.rows>1},a=()=>{const{params:l,el:h}=e,b=l.grid&&l.grid.rows>1;c&&!b?(h.classList.remove(`${l.containerModifierClass}grid`,`${l.containerModifierClass}grid-column`),o=1,e.emitContainerClasses()):!c&&b&&(h.classList.add(`${l.containerModifierClass}grid`),l.grid.fill==="column"&&h.classList.add(`${l.containerModifierClass}grid-column`),e.emitContainerClasses()),c=b};t("init",w),t("update",a),e.grid={initSlides:d,unsetSlides:p,updateSlide:u,updateWrapperSize:v}}function Rr(r){const e=this,{params:i,slidesEl:t}=e;i.loop&&e.loopDestroy();const s=n=>{if(typeof n=="string"){const o=document.createElement("div");fe(o,n),t.append(o.children[0]),fe(o,"")}else t.append(n)};if(typeof r=="object"&&"length"in r)for(let n=0;n<r.length;n+=1)r[n]&&s(r[n]);else s(r);e.recalcSlides(),i.loop&&e.loopCreate(),(!i.observer||e.isElement)&&e.update()}function Xr(r){const e=this,{params:i,activeIndex:t,slidesEl:s}=e;i.loop&&e.loopDestroy();let n=t+1;const o=c=>{if(typeof c=="string"){const f=document.createElement("div");fe(f,c),s.prepend(f.children[0]),fe(f,"")}else s.prepend(c)};if(typeof r=="object"&&"length"in r){for(let c=0;c<r.length;c+=1)r[c]&&o(r[c]);n=t+r.length}else o(r);e.recalcSlides(),i.loop&&e.loopCreate(),(!i.observer||e.isElement)&&e.update(),e.slideTo(n,0,!1)}function Nr(r,e){const i=this,{params:t,activeIndex:s,slidesEl:n}=i;let o=s;t.loop&&(o-=i.loopedSlides,i.loopDestroy(),i.recalcSlides());const c=i.slides.length;if(r<=0){i.prependSlide(e);return}if(r>=c){i.appendSlide(e);return}let f=o>r?o+1:o;const d=[];for(let p=c-1;p>=r;p-=1){const u=i.slides[p];u.remove(),d.unshift(u)}if(typeof e=="object"&&"length"in e){for(let p=0;p<e.length;p+=1)e[p]&&n.append(e[p]);f=o>r?o+e.length:o}else n.append(e);for(let p=0;p<d.length;p+=1)n.append(d[p]);i.recalcSlides(),t.loop&&i.loopCreate(),(!t.observer||i.isElement)&&i.update(),t.loop?i.slideTo(f+i.loopedSlides,0,!1):i.slideTo(f,0,!1)}function Yr(r){const e=this,{params:i,activeIndex:t}=e;let s=t;i.loop&&(s-=e.loopedSlides,e.loopDestroy());let n=s,o;if(typeof r=="object"&&"length"in r){for(let c=0;c<r.length;c+=1)o=r[c],e.slides[o]&&e.slides[o].remove(),o<n&&(n-=1);n=Math.max(n,0)}else o=r,e.slides[o]&&e.slides[o].remove(),o<n&&(n-=1),n=Math.max(n,0);e.recalcSlides(),i.loop&&e.loopCreate(),(!i.observer||e.isElement)&&e.update(),i.loop?e.slideTo(n+e.loopedSlides,0,!1):e.slideTo(n,0,!1)}function Fr(){const r=this,e=[];for(let i=0;i<r.slides.length;i+=1)e.push(i);r.removeSlide(e)}function Wr(r){let{swiper:e}=r;Object.assign(e,{appendSlide:Rr.bind(e),prependSlide:Xr.bind(e),addSlide:Nr.bind(e),removeSlide:Yr.bind(e),removeAllSlides:Fr.bind(e)})}function Ce(r){const{effect:e,swiper:i,on:t,setTranslate:s,setTransition:n,overwriteParams:o,perspective:c,recreateShadows:f,getEffectParams:d}=r;t("beforeInit",()=>{if(i.params.effect!==e)return;i.classNames.push(`${i.params.containerModifierClass}${e}`),c&&c()&&i.classNames.push(`${i.params.containerModifierClass}3d`);const u=o?o():{};Object.assign(i.params,u),Object.assign(i.originalParams,u)}),t("setTranslate _virtualUpdated",()=>{i.params.effect===e&&s()}),t("setTransition",(u,v)=>{i.params.effect===e&&n(v)}),t("transitionEnd",()=>{if(i.params.effect===e&&f){if(!d||!d().slideShadows)return;i.slides.forEach(u=>{u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(v=>v.remove())}),f()}});let p;t("virtualUpdate",()=>{i.params.effect===e&&(i.slides.length||(p=!0),requestAnimationFrame(()=>{p&&i.slides&&i.slides.length&&(s(),p=!1)}))})}function Ge(r,e){const i=xe(e);return i!==e&&(i.style.backfaceVisibility="hidden",i.style["-webkit-backface-visibility"]="hidden"),i}function Ze(r){let{swiper:e,duration:i,transformElements:t,allSlides:s}=r;const{activeIndex:n}=e,o=c=>c.parentElement?c.parentElement:e.slides.find(d=>d.shadowRoot&&d.shadowRoot===c.parentNode);if(e.params.virtualTranslate&&i!==0){let c=!1,f;s?f=t:f=t.filter(d=>{const p=d.classList.contains("swiper-slide-transform")?o(d):d;return e.getSlideIndex(p)===n}),f.forEach(d=>{Ve(d,()=>{if(c||!e||e.destroyed)return;c=!0,e.animating=!1;const p=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(p)})})}}function qr(r){let{swiper:e,extendParams:i,on:t}=r;i({fadeEffect:{crossFade:!1}}),Ce({effect:"fade",swiper:e,on:t,setTranslate:()=>{const{slides:o}=e,c=e.params.fadeEffect;for(let f=0;f<o.length;f+=1){const d=e.slides[f];let u=-d.swiperSlideOffset;e.params.virtualTranslate||(u-=e.translate);let v=0;e.isHorizontal()||(v=u,u=0);const w=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(d.progress),0):1+Math.min(Math.max(d.progress,-1),0),a=Ge(c,d);a.style.opacity=w,a.style.transform=`translate3d(${u}px, ${v}px, 0px)`}},setTransition:o=>{const c=e.slides.map(f=>xe(f));c.forEach(f=>{f.style.transitionDuration=`${o}ms`}),Ze({swiper:e,duration:o,transformElements:c,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Ur(r){let{swiper:e,extendParams:i,on:t}=r;i({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const s=(f,d,p)=>{let u=p?f.querySelector(".swiper-slide-shadow-left"):f.querySelector(".swiper-slide-shadow-top"),v=p?f.querySelector(".swiper-slide-shadow-right"):f.querySelector(".swiper-slide-shadow-bottom");u||(u=oe("div",`swiper-slide-shadow-cube swiper-slide-shadow-${p?"left":"top"}`.split(" ")),f.append(u)),v||(v=oe("div",`swiper-slide-shadow-cube swiper-slide-shadow-${p?"right":"bottom"}`.split(" ")),f.append(v)),u&&(u.style.opacity=Math.max(-d,0)),v&&(v.style.opacity=Math.max(d,0))};Ce({effect:"cube",swiper:e,on:t,setTranslate:()=>{const{el:f,wrapperEl:d,slides:p,width:u,height:v,rtlTranslate:w,size:a,browser:l}=e,h=Ke(e),b=e.params.cubeEffect,g=e.isHorizontal(),m=e.virtual&&e.params.virtual.enabled;let y=0,x;b.shadow&&(g?(x=e.wrapperEl.querySelector(".swiper-cube-shadow"),x||(x=oe("div","swiper-cube-shadow"),e.wrapperEl.append(x)),x.style.height=`${u}px`):(x=f.querySelector(".swiper-cube-shadow"),x||(x=oe("div","swiper-cube-shadow"),f.append(x))));for(let C=0;C<p.length;C+=1){const I=p[C];let S=C;m&&(S=parseInt(I.getAttribute("data-swiper-slide-index"),10));let T=S*90,z=Math.floor(T/360);w&&(T=-T,z=Math.floor(-T/360));const P=Math.max(Math.min(I.progress,1),-1);let M=0,L=0,A=0;S%4===0?(M=-z*4*a,A=0):(S-1)%4===0?(M=0,A=-z*4*a):(S-2)%4===0?(M=a+z*4*a,A=a):(S-3)%4===0&&(M=-a,A=3*a+a*4*z),w&&(M=-M),g||(L=M,M=0);const O=`rotateX(${h(g?0:-T)}deg) rotateY(${h(g?T:0)}deg) translate3d(${M}px, ${L}px, ${A}px)`;P<=1&&P>-1&&(y=S*90+P*90,w&&(y=-S*90-P*90)),I.style.transform=O,b.slideShadows&&s(I,P,g)}if(d.style.transformOrigin=`50% 50% -${a/2}px`,d.style["-webkit-transform-origin"]=`50% 50% -${a/2}px`,b.shadow)if(g)x.style.transform=`translate3d(0px, ${u/2+b.shadowOffset}px, ${-u/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${b.shadowScale})`;else{const C=Math.abs(y)-Math.floor(Math.abs(y)/90)*90,I=1.5-(Math.sin(C*2*Math.PI/360)/2+Math.cos(C*2*Math.PI/360)/2),S=b.shadowScale,T=b.shadowScale/I,z=b.shadowOffset;x.style.transform=`scale3d(${S}, 1, ${T}) translate3d(0px, ${v/2+z}px, ${-v/2/T}px) rotateX(-89.99deg)`}const k=(l.isSafari||l.isWebView)&&l.needPerspectiveFix?-a/2:0;d.style.transform=`translate3d(0px,0,${k}px) rotateX(${h(e.isHorizontal()?0:y)}deg) rotateY(${h(e.isHorizontal()?-y:0)}deg)`,d.style.setProperty("--swiper-cube-translate-z",`${k}px`)},setTransition:f=>{const{el:d,slides:p}=e;if(p.forEach(u=>{u.style.transitionDuration=`${f}ms`,u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(v=>{v.style.transitionDuration=`${f}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){const u=d.querySelector(".swiper-cube-shadow");u&&(u.style.transitionDuration=`${f}ms`)}},recreateShadows:()=>{const f=e.isHorizontal();e.slides.forEach(d=>{const p=Math.max(Math.min(d.progress,1),-1);s(d,p,f)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function Me(r,e,i){const t=`swiper-slide-shadow${i?`-${i}`:""}${r?` swiper-slide-shadow-${r}`:""}`,s=xe(e);let n=s.querySelector(`.${t.split(" ").join(".")}`);return n||(n=oe("div",t.split(" ")),s.append(n)),n}function Kr(r){let{swiper:e,extendParams:i,on:t}=r;i({flipEffect:{slideShadows:!0,limitRotation:!0}});const s=(f,d)=>{let p=e.isHorizontal()?f.querySelector(".swiper-slide-shadow-left"):f.querySelector(".swiper-slide-shadow-top"),u=e.isHorizontal()?f.querySelector(".swiper-slide-shadow-right"):f.querySelector(".swiper-slide-shadow-bottom");p||(p=Me("flip",f,e.isHorizontal()?"left":"top")),u||(u=Me("flip",f,e.isHorizontal()?"right":"bottom")),p&&(p.style.opacity=Math.max(-d,0)),u&&(u.style.opacity=Math.max(d,0))};Ce({effect:"flip",swiper:e,on:t,setTranslate:()=>{const{slides:f,rtlTranslate:d}=e,p=e.params.flipEffect,u=Ke(e);for(let v=0;v<f.length;v+=1){const w=f[v];let a=w.progress;e.params.flipEffect.limitRotation&&(a=Math.max(Math.min(w.progress,1),-1));const l=w.swiperSlideOffset;let b=-180*a,g=0,m=e.params.cssMode?-l-e.translate:-l,y=0;e.isHorizontal()?d&&(b=-b):(y=m,m=0,g=-b,b=0),w.style.zIndex=-Math.abs(Math.round(a))+f.length,p.slideShadows&&s(w,a);const x=`translate3d(${m}px, ${y}px, 0px) rotateX(${u(g)}deg) rotateY(${u(b)}deg)`,k=Ge(p,w);k.style.transform=x}},setTransition:f=>{const d=e.slides.map(p=>xe(p));d.forEach(p=>{p.style.transitionDuration=`${f}ms`,p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>{u.style.transitionDuration=`${f}ms`})}),Ze({swiper:e,duration:f,transformElements:d})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(f=>{let d=f.progress;e.params.flipEffect.limitRotation&&(d=Math.max(Math.min(f.progress,1),-1)),s(f,d)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Zr(r){let{swiper:e,extendParams:i,on:t}=r;i({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Ce({effect:"coverflow",swiper:e,on:t,setTranslate:()=>{const{width:o,height:c,slides:f,slidesSizesGrid:d}=e,p=e.params.coverflowEffect,u=e.isHorizontal(),v=e.translate,w=u?-v+o/2:-v+c/2,a=u?p.rotate:-p.rotate,l=p.depth,h=Ke(e);for(let b=0,g=f.length;b<g;b+=1){const m=f[b],y=d[b],x=m.swiperSlideOffset,k=(w-x-y/2)/y,C=typeof p.modifier=="function"?p.modifier(k):k*p.modifier;let I=u?a*C:0,S=u?0:a*C,T=-l*Math.abs(C),z=p.stretch;typeof z=="string"&&z.indexOf("%")!==-1&&(z=parseFloat(p.stretch)/100*y);let P=u?0:z*C,M=u?z*C:0,L=1-(1-p.scale)*Math.abs(C);Math.abs(M)<.001&&(M=0),Math.abs(P)<.001&&(P=0),Math.abs(T)<.001&&(T=0),Math.abs(I)<.001&&(I=0),Math.abs(S)<.001&&(S=0),Math.abs(L)<.001&&(L=0);const A=`translate3d(${M}px,${P}px,${T}px)  rotateX(${h(S)}deg) rotateY(${h(I)}deg) scale(${L})`,O=Ge(p,m);if(O.style.transform=A,m.style.zIndex=-Math.abs(Math.round(C))+1,p.slideShadows){let E=u?m.querySelector(".swiper-slide-shadow-left"):m.querySelector(".swiper-slide-shadow-top"),_=u?m.querySelector(".swiper-slide-shadow-right"):m.querySelector(".swiper-slide-shadow-bottom");E||(E=Me("coverflow",m,u?"left":"top")),_||(_=Me("coverflow",m,u?"right":"bottom")),E&&(E.style.opacity=C>0?C:0),_&&(_.style.opacity=-C>0?-C:0)}}},setTransition:o=>{e.slides.map(f=>xe(f)).forEach(f=>{f.style.transitionDuration=`${o}ms`,f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d=>{d.style.transitionDuration=`${o}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Qr(r){let{swiper:e,extendParams:i,on:t}=r;i({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const s=c=>typeof c=="string"?c:`${c}px`;Ce({effect:"creative",swiper:e,on:t,setTranslate:()=>{const{slides:c,wrapperEl:f,slidesSizesGrid:d}=e,p=e.params.creativeEffect,{progressMultiplier:u}=p,v=e.params.centeredSlides,w=Ke(e);if(v){const a=d[0]/2-e.params.slidesOffsetBefore||0;f.style.transform=`translateX(calc(50% - ${a}px))`}for(let a=0;a<c.length;a+=1){const l=c[a],h=l.progress,b=Math.min(Math.max(l.progress,-p.limitProgress),p.limitProgress);let g=b;v||(g=Math.min(Math.max(l.originalProgress,-p.limitProgress),p.limitProgress));const m=l.swiperSlideOffset,y=[e.params.cssMode?-m-e.translate:-m,0,0],x=[0,0,0];let k=!1;e.isHorizontal()||(y[1]=y[0],y[0]=0);let C={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};b<0?(C=p.next,k=!0):b>0&&(C=p.prev,k=!0),y.forEach((L,A)=>{y[A]=`calc(${L}px + (${s(C.translate[A])} * ${Math.abs(b*u)}))`}),x.forEach((L,A)=>{let O=C.rotate[A]*Math.abs(b*u);x[A]=O}),l.style.zIndex=-Math.abs(Math.round(h))+c.length;const I=y.join(", "),S=`rotateX(${w(x[0])}deg) rotateY(${w(x[1])}deg) rotateZ(${w(x[2])}deg)`,T=g<0?`scale(${1+(1-C.scale)*g*u})`:`scale(${1-(1-C.scale)*g*u})`,z=g<0?1+(1-C.opacity)*g*u:1-(1-C.opacity)*g*u,P=`translate3d(${I}) ${S} ${T}`;if(k&&C.shadow||!k){let L=l.querySelector(".swiper-slide-shadow");if(!L&&C.shadow&&(L=Me("creative",l)),L){const A=p.shadowPerProgress?b*(1/p.limitProgress):b;L.style.opacity=Math.min(Math.max(Math.abs(A),0),1)}}const M=Ge(p,l);M.style.transform=P,M.style.opacity=z,C.origin&&(M.style.transformOrigin=C.origin)}},setTransition:c=>{const f=e.slides.map(d=>xe(d));f.forEach(d=>{d.style.transitionDuration=`${c}ms`,d.querySelectorAll(".swiper-slide-shadow").forEach(p=>{p.style.transitionDuration=`${c}ms`})}),Ze({swiper:e,duration:c,transformElements:f,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function Jr(r){let{swiper:e,extendParams:i,on:t}=r;i({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),Ce({effect:"cards",swiper:e,on:t,setTranslate:()=>{const{slides:o,activeIndex:c,rtlTranslate:f}=e,d=e.params.cardsEffect,{startTranslate:p,isTouched:u}=e.touchEventsData,v=f?-e.translate:e.translate;for(let w=0;w<o.length;w+=1){const a=o[w],l=a.progress,h=Math.min(Math.max(l,-4),4);let b=a.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(b-=o[0].swiperSlideOffset);let g=e.params.cssMode?-b-e.translate:-b,m=0;const y=-100*Math.abs(h);let x=1,k=-d.perSlideRotate*h,C=d.perSlideOffset-Math.abs(h)*.75;const I=e.virtual&&e.params.virtual.enabled?e.virtual.from+w:w,S=(I===c||I===c-1)&&h>0&&h<1&&(u||e.params.cssMode)&&v<p,T=(I===c||I===c+1)&&h<0&&h>-1&&(u||e.params.cssMode)&&v>p;if(S||T){const L=(1-Math.abs((Math.abs(h)-.5)/.5))**.5;k+=-28*h*L,x+=-.5*L,C+=96*L,m=`${-25*L*Math.abs(h)}%`}if(h<0?g=`calc(${g}px ${f?"-":"+"} (${C*Math.abs(h)}%))`:h>0?g=`calc(${g}px ${f?"-":"+"} (-${C*Math.abs(h)}%))`:g=`${g}px`,!e.isHorizontal()){const L=m;m=g,g=L}const z=h<0?`${1+(1-x)*h}`:`${1-(1-x)*h}`,P=`
        translate3d(${g}, ${m}, ${y}px)
        rotateZ(${d.rotate?f?-k:k:0}deg)
        scale(${z})
      `;if(d.slideShadows){let L=a.querySelector(".swiper-slide-shadow");L||(L=Me("cards",a)),L&&(L.style.opacity=Math.min(Math.max((Math.abs(h)-.5)/.5,0),1))}a.style.zIndex=-Math.abs(Math.round(l))+o.length;const M=Ge(d,a);M.style.transform=P}},setTransition:o=>{const c=e.slides.map(f=>xe(f));c.forEach(f=>{f.style.transitionDuration=`${o}ms`,f.querySelectorAll(".swiper-slide-shadow").forEach(d=>{d.style.transitionDuration=`${o}ms`})}),Ze({swiper:e,duration:o,transformElements:c})},perspective:()=>!0,overwriteParams:()=>({_loopSwapReset:!1,watchSlidesProgress:!0,loopAdditionalSlides:e.params.cardsEffect.rotate?3:2,centeredSlides:!0,virtualTranslate:!e.params.cssMode})})}const es=[Mr,Pr,Cr,Ir,zr,Lr,kr,jr,Ar,Dr,Or,$r,Vr,Br,Gr,Hr,Wr,qr,Ur,Kr,Zr,Qr,Jr];ne.use(es);const Qe=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Pe(r){return typeof r=="object"&&r!==null&&r.constructor&&Object.prototype.toString.call(r).slice(8,-1)==="Object"&&!r.__swiper__}function xt(r,e){const i=["__proto__","constructor","prototype"];Object.keys(e).filter(t=>i.indexOf(t)<0).forEach(t=>{typeof r[t]>"u"?r[t]=e[t]:Pe(e[t])&&Pe(r[t])&&Object.keys(e[t]).length>0?e[t].__swiper__?r[t]=e[t]:xt(r[t],e[t]):r[t]=e[t]})}function ts(r){return r===void 0&&(r={}),r.navigation&&typeof r.navigation.nextEl>"u"&&typeof r.navigation.prevEl>"u"}function is(r){return r===void 0&&(r={}),r.pagination&&typeof r.pagination.el>"u"}function rs(r){return r===void 0&&(r={}),r.scrollbar&&typeof r.scrollbar.el>"u"}function We(r){return r===void 0&&(r=""),r.replace(/-[a-z]/g,e=>e.toUpperCase().replace("-",""))}function ss(r){let{swiper:e,slides:i,passedParams:t,changedParams:s,nextEl:n,prevEl:o,scrollbarEl:c,paginationEl:f}=r;const d=s.filter(S=>S!=="children"&&S!=="direction"&&S!=="wrapperClass"),{params:p,pagination:u,navigation:v,scrollbar:w,virtual:a,thumbs:l}=e;let h,b,g,m,y,x,k,C;s.includes("thumbs")&&t.thumbs&&t.thumbs.swiper&&!t.thumbs.swiper.destroyed&&p.thumbs&&(!p.thumbs.swiper||p.thumbs.swiper.destroyed)&&(h=!0),s.includes("controller")&&t.controller&&t.controller.control&&p.controller&&!p.controller.control&&(b=!0),s.includes("pagination")&&t.pagination&&(t.pagination.el||f)&&(p.pagination||p.pagination===!1)&&u&&!u.el&&(g=!0),s.includes("scrollbar")&&t.scrollbar&&(t.scrollbar.el||c)&&(p.scrollbar||p.scrollbar===!1)&&w&&!w.el&&(m=!0),s.includes("navigation")&&t.navigation&&(t.navigation.prevEl||o)&&(t.navigation.nextEl||n)&&(p.navigation||p.navigation===!1)&&v&&!v.prevEl&&!v.nextEl&&(y=!0);const I=S=>{e[S]&&(e[S].destroy(),S==="navigation"?(e.isElement&&(e[S].prevEl.remove(),e[S].nextEl.remove()),p[S].prevEl=void 0,p[S].nextEl=void 0,e[S].prevEl=void 0,e[S].nextEl=void 0):(e.isElement&&e[S].el.remove(),p[S].el=void 0,e[S].el=void 0))};s.includes("loop")&&e.isElement&&(p.loop&&!t.loop?x=!0:!p.loop&&t.loop?k=!0:C=!0),d.forEach(S=>{if(Pe(p[S])&&Pe(t[S]))Object.assign(p[S],t[S]),(S==="navigation"||S==="pagination"||S==="scrollbar")&&"enabled"in t[S]&&!t[S].enabled&&I(S);else{const T=t[S];(T===!0||T===!1)&&(S==="navigation"||S==="pagination"||S==="scrollbar")?T===!1&&I(S):p[S]=t[S]}}),d.includes("controller")&&!b&&e.controller&&e.controller.control&&p.controller&&p.controller.control&&(e.controller.control=p.controller.control),s.includes("children")&&i&&a&&p.virtual.enabled?(a.slides=i,a.update(!0)):s.includes("virtual")&&a&&p.virtual.enabled&&(i&&(a.slides=i),a.update(!0)),s.includes("children")&&i&&p.loop&&(C=!0),h&&l.init()&&l.update(!0),b&&(e.controller.control=p.controller.control),g&&(e.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-pagination"),f.part.add("pagination"),e.el.appendChild(f)),f&&(p.pagination.el=f),u.init(),u.render(),u.update()),m&&(e.isElement&&(!c||typeof c=="string")&&(c=document.createElement("div"),c.classList.add("swiper-scrollbar"),c.part.add("scrollbar"),e.el.appendChild(c)),c&&(p.scrollbar.el=c),w.init(),w.updateSize(),w.setTranslate()),y&&(e.isElement&&((!n||typeof n=="string")&&(n=document.createElement("div"),n.classList.add("swiper-button-next"),fe(n,e.hostEl.constructor.nextButtonSvg),n.part.add("button-next"),e.el.appendChild(n)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),fe(o,e.hostEl.constructor.prevButtonSvg),o.part.add("button-prev"),e.el.appendChild(o))),n&&(p.navigation.nextEl=n),o&&(p.navigation.prevEl=o),v.init(),v.update()),s.includes("allowSlideNext")&&(e.allowSlideNext=t.allowSlideNext),s.includes("allowSlidePrev")&&(e.allowSlidePrev=t.allowSlidePrev),s.includes("direction")&&e.changeDirection(t.direction,!1),(x||C)&&e.loopDestroy(),(k||C)&&e.loopCreate(),e.update()}const At=r=>{if(parseFloat(r)===Number(r))return Number(r);if(r==="true"||r==="")return!0;if(r==="false")return!1;if(r==="null")return null;if(r!=="undefined"){if(typeof r=="string"&&r.includes("{")&&r.includes("}")&&r.includes('"')){let e;try{e=JSON.parse(r)}catch{e=r}return e}return r}},Dt=["a11y","autoplay","controller","cards-effect","coverflow-effect","creative-effect","cube-effect","fade-effect","flip-effect","free-mode","grid","hash-navigation","history","keyboard","mousewheel","navigation","pagination","parallax","scrollbar","thumbs","virtual","zoom"];function Ot(r,e,i){const t={},s={};xt(t,St);const n=[...Qe,"on"],o=n.map(f=>f.replace(/_/,""));n.forEach(f=>{f=f.replace("_",""),typeof r[f]<"u"&&(s[f]=r[f])});const c=[...r.attributes];return typeof e=="string"&&typeof i<"u"&&c.push({name:e,value:Pe(i)?{...i}:i}),c.forEach(f=>{const d=Dt.find(p=>f.name.startsWith(`${p}-`));if(d){const p=We(d),u=We(f.name.split(`${d}-`)[1]);typeof s[p]>"u"&&(s[p]={}),s[p]===!0&&(s[p]={enabled:!0}),s[p][u]=At(f.value)}else{const p=We(f.name);if(!o.includes(p))return;const u=At(f.value);s[p]&&Dt.includes(f.name)&&!Pe(u)?(s[p].constructor!==Object&&(s[p]={}),s[p].enabled=!!u):s[p]=u}}),xt(t,s),t.navigation?t.navigation={prevEl:".swiper-button-prev",nextEl:".swiper-button-next",...t.navigation!==!0?t.navigation:{}}:t.navigation===!1&&delete t.navigation,t.scrollbar?t.scrollbar={el:".swiper-scrollbar",...t.scrollbar!==!0?t.scrollbar:{}}:t.scrollbar===!1&&delete t.scrollbar,t.pagination?t.pagination={el:".swiper-pagination",...t.pagination!==!0?t.pagination:{}}:t.pagination===!1&&delete t.pagination,{params:t,passedParams:s}}const ns=":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}",as="::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}";class os{}const qt=typeof window>"u"||typeof HTMLElement>"u"?os:HTMLElement,$t=`<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `,Ut=(r,e)=>{if(typeof CSSStyleSheet<"u"&&r.adoptedStyleSheets){const i=new CSSStyleSheet;i.replaceSync(e),r.adoptedStyleSheets=[i]}else{const i=document.createElement("style");i.rel="stylesheet",i.textContent=e,r.appendChild(i)}};class Kt extends qt{constructor(){super(),this.attachShadow({mode:"open"})}static get nextButtonSvg(){return $t}static get prevButtonSvg(){return $t.replace("/></svg>",' transform-origin="center" transform="rotate(180)"/></svg>')}cssStyles(){return[ns,...this.injectStyles&&Array.isArray(this.injectStyles)?this.injectStyles:[]].join(`
`)}cssLinks(){return this.injectStylesUrls||[]}calcSlideSlots(){const e=this.slideSlots||0,i=[...this.querySelectorAll("[slot^=slide-]")].map(t=>parseInt(t.getAttribute("slot").split("slide-")[1],10));if(this.slideSlots=i.length?Math.max(...i)+1:0,!!this.rendered){if(this.slideSlots>e)for(let t=e;t<this.slideSlots;t+=1){const s=document.createElement("swiper-slide");s.setAttribute("part",`slide slide-${t+1}`);const n=document.createElement("slot");n.setAttribute("name",`slide-${t+1}`),s.appendChild(n),this.shadowRoot.querySelector(".swiper-wrapper").appendChild(s)}else if(this.slideSlots<e){const t=this.swiper.slides;for(let s=t.length-1;s>=0;s-=1)s>this.slideSlots&&t[s].remove()}}}render(){if(this.rendered)return;this.calcSlideSlots();let e=this.cssStyles();this.slideSlots>0&&(e=e.replace(/::slotted\(([a-z-0-9.]*)\)/g,"$1")),e.length&&Ut(this.shadowRoot,e),this.cssLinks().forEach(t=>{if(this.shadowRoot.querySelector(`link[href="${t}"]`))return;const n=document.createElement("link");n.rel="stylesheet",n.href=t,this.shadowRoot.appendChild(n)});const i=document.createElement("div");i.classList.add("swiper"),i.part="container",fe(i,`
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({length:this.slideSlots}).map((t,s)=>`
        <swiper-slide part="slide slide-${s}">
          <slot name="slide-${s}"></slot>
        </swiper-slide>
        `).join("")}
      </div>
      <slot name="container-end"></slot>
      ${ts(this.passedParams)?`
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      `:""}
      ${is(this.passedParams)?`
        <div part="pagination" class="swiper-pagination"></div>
      `:""}
      ${rs(this.passedParams)?`
        <div part="scrollbar" class="swiper-scrollbar"></div>
      `:""}
    `),this.shadowRoot.appendChild(i),this.rendered=!0}initialize(){var e=this;if(this.swiper&&this.swiper.initialized)return;const{params:i,passedParams:t}=Ot(this);this.swiperParams=i,this.passedParams=t,delete this.swiperParams.init,this.render(),this.swiper=new ne(this.shadowRoot.querySelector(".swiper"),{...i.virtual?{}:{observer:!0},...i,touchEventsTarget:"container",onAny:function(s){s==="observerUpdate"&&e.calcSlideSlots();const n=i.eventsPrefix?`${i.eventsPrefix}${s.toLowerCase()}`:s.toLowerCase();for(var o=arguments.length,c=new Array(o>1?o-1:0),f=1;f<o;f++)c[f-1]=arguments[f];const d=new CustomEvent(n,{detail:c,bubbles:s!=="hashChange",cancelable:!0});e.dispatchEvent(d)}})}connectedCallback(){this.swiper&&this.swiper.initialized&&this.nested&&this.closest("swiper-slide")&&this.closest("swiper-slide").swiperLoopMoveDOM||this.init===!1||this.getAttribute("init")==="false"||this.initialize()}disconnectedCallback(){this.nested&&this.closest("swiper-slide")&&this.closest("swiper-slide").swiperLoopMoveDOM||this.swiper&&this.swiper.destroy&&this.swiper.destroy()}updateSwiperOnPropChange(e,i){const{params:t,passedParams:s}=Ot(this,e,i);this.passedParams=s,this.swiperParams=t,!(this.swiper&&this.swiper.params[e]===i)&&ss({swiper:this.swiper,passedParams:this.passedParams,changedParams:[We(e)],...e==="navigation"&&s[e]?{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}:{},...e==="pagination"&&s[e]?{paginationEl:".swiper-pagination"}:{},...e==="scrollbar"&&s[e]?{scrollbarEl:".swiper-scrollbar"}:{}})}attributeChangedCallback(e,i,t){this.swiper&&this.swiper.initialized&&(i==="true"&&t===null&&(t=!1),this.updateSwiperOnPropChange(e,t))}static get observedAttributes(){return Qe.filter(i=>i.includes("_")).map(i=>i.replace(/[A-Z]/g,t=>`-${t}`).replace("_","").toLowerCase())}}Qe.forEach(r=>{r!=="init"&&(r=r.replace("_",""),Object.defineProperty(Kt.prototype,r,{configurable:!0,get(){return(this.passedParams||{})[r]},set(e){this.passedParams||(this.passedParams={}),this.passedParams[r]=e,this.swiper&&this.swiper.initialized&&this.updateSwiperOnPropChange(r,e)}}))});class ls extends qt{constructor(){super(),this.attachShadow({mode:"open"})}render(){const e=this.lazy||this.getAttribute("lazy")===""||this.getAttribute("lazy")==="true";if(Ut(this.shadowRoot,as),this.shadowRoot.appendChild(document.createElement("slot")),e){const i=document.createElement("div");i.classList.add("swiper-lazy-preloader"),i.part.add("preloader"),this.shadowRoot.appendChild(i)}}initialize(){this.render()}connectedCallback(){this.swiperLoopMoveDOM||this.initialize()}}const F=()=>{typeof window>"u"||(window.customElements.get("swiper-container")||window.customElements.define("swiper-container",Kt),window.customElements.get("swiper-slide")||window.customElements.define("swiper-slide",ls))};typeof window<"u"&&(window.SwiperElementRegisterParams=r=>{Qe.push(...r)});const ps={__name:"DemoSwiperVirtualSlides",setup(r,{expose:e}){e(),F();const i=Array.from({length:500},(p,u)=>`Slides ${u+1}`),t=dt(null),s=dt(1),n=dt(500),d={slides:i,swiperEl:t,prependNumber:s,appendNumber:n,toSlide:p=>{var u;(u=t.value)==null||u.swiper.slideTo(p-1)},prependSlide:()=>{var p;(p=t.value)==null||p.swiper.prependSlide([`<swiper-slide>Slide ${--s.value} </swiper-slide>`,`<swiper-slide>Slide ${--s.value} </swiper-slide>`])},appendSlide:()=>{var p;(p=t.value)==null||p.swiper.appendSlide([`<swiper-slide>Slide ${++n.value} </swiper-slide>`])},get register(){return F}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}},ds={class:"swiper-virtual"},cs=["slides"],fs={class:"text-secondary"},us={class:"d-flex justify-center gap-4 flex-wrap"};function ms(r,e,i,t,s,n){return G(),H("section",ds,[pe("swiper-container",{ref:"swiperEl",virtual:"true",slides:t.slides,navigation:"true","slides-per-view":"5","space-between":"50","free-mode":"true","events-prefix":"swiper-",breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},[(G(!0),H(K,null,J(t.slides,(o,c)=>(G(),H("swiper-slide",{key:c},[pe("div",fs,Et(o),1)]))),128))],8,cs),pe("div",us,[B(De,{variant:"outlined",color:"primary",onClick:Ae(t.prependSlide,["prevent"])},{default:R(()=>e[3]||(e[3]=[je(" Prepend 2 Slides ")])),_:1,__:[3]}),B(De,{variant:"outlined",color:"primary",onClick:e[0]||(e[0]=Ae(o=>t.toSlide(1),["prevent"]))},{default:R(()=>e[4]||(e[4]=[je(" Slide 1 ")])),_:1,__:[4]}),B(De,{variant:"outlined",color:"primary",onClick:e[1]||(e[1]=Ae(o=>t.toSlide(250),["prevent"]))},{default:R(()=>e[5]||(e[5]=[je(" Slide 250 ")])),_:1,__:[5]}),B(De,{variant:"outlined",color:"primary",onClick:e[2]||(e[2]=Ae(o=>t.toSlide(500),["prevent"]))},{default:R(()=>e[6]||(e[6]=[je(" Slide 500 ")])),_:1,__:[6]}),B(De,{variant:"outlined",color:"primary",onClick:Ae(t.appendSlide,["prevent"])},{default:R(()=>e[7]||(e[7]=[je(" Append Slide ")])),_:1,__:[7]})])])}const ws=ee(ps,[["render",ms],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperVirtualSlides.vue"]]),Je="/assets/banner-31-D6mS0gQn.jpg",He="/assets/banner-32-B8kg_gZc.jpg",et="/assets/banner-33-DfQ0Urdo.jpg",tt="/assets/banner-34-CMWn1p69.jpg",it="/assets/banner-35-avrf_yoA.jpg",Zt="/assets/banner-36-BiLQv0qP.jpg",Qt="/assets/banner-37-CxyHDUrj.jpg",Jt="/assets/banner-38-CFPERer_.jpg",Mt="/assets/banner-39-D9mpewKd.jpg",gs={__name:"DemoSwiperResponsiveBreakpoints",setup(r,{expose:e}){e(),F();const i={get register(){return F},get swiper31(){return Je},get swiper32(){return He},get swiper33(){return et},get swiper34(){return tt},get swiper35(){return it},get swiper36(){return Zt},get swiper37(){return Qt},get swiper38(){return Jt},get swiper39(){return Mt}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},hs={"pagination-clickable":"true","slides-per-view":"5","space-between":"50","events-prefix":"swiper-",breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}};function vs(r,e,i,t,s,n){return G(),H("swiper-container",hs,[(G(!0),H(K,null,J([t.swiper31,t.swiper32,t.swiper33,t.swiper34,t.swiper35,t.swiper36,t.swiper37,t.swiper38,t.swiper39],o=>(G(),H("swiper-slide",{key:o},[B(se,{src:o},null,8,["src"])]))),128))])}const bs=ee(gs,[["render",vs],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperResponsiveBreakpoints.vue"]]),Re="/assets/banner-20-D60huBoA.jpg",rt="/assets/banner-4-EPycabrm.jpg",ei="/assets/banner-5-DVgdLDIC.jpg",Ie="/assets/banner-7-C3Ec249A.jpg",st="/assets/banner-8-CS7lrdd8.jpg",Pt="/assets/banner-9-CN54Uf8b.jpg",ys={__name:"DemoSwiperLazyLoading",setup(r,{expose:e}){e(),F();const i={get register(){return F},get swiper20(){return Re},get swiper4(){return rt},get swiper5(){return ei},get swiper7(){return Ie},get swiper8(){return st},get swiper9(){return Pt}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},Ss={"pagination-clickable":"true",autoplay:"true",navigation:"true","events-prefix":"swiper-"};function xs(r,e,i,t,s,n){return G(),H("swiper-container",Ss,[(G(!0),H(K,null,J([t.swiper4,t.swiper5,t.swiper9,t.swiper7,t.swiper8,t.swiper20],o=>(G(),H("swiper-slide",{key:o,lazy:"true"},[B(se,{src:o,cover:"",loading:"lazy"},null,8,["src"])]))),128))])}const Es=ee(ys,[["render",xs],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperLazyLoading.vue"]]),ti="/assets/banner-11-ClWmypCi.jpg",ii="/assets/banner-12-C2cDgitj.jpg",ri="/assets/banner-13-Cforbb5S.jpg",Ts="/assets/banner-15-DVoX7is_.jpg",si="/assets/banner-16-BBt3y7wv.jpg",_s={__name:"DemoSwiperGallery",setup(r,{expose:e}){e(),F();const i={get register(){return F},get swiper11(){return ti},get swiper12(){return ii},get swiper13(){return ri},get swiper15(){return Ts},get swiper16(){return si}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},Ms={class:"mySwiper","thumbs-swiper":".mySwiper2",loop:"true","space-between":"10",navigation:"true","centered-slides":"true","events-prefix":"swiper-"},Ps={class:"mySwiper2",loop:"true","free-mode":"true","events-prefix":"swiper-","slides-per-view":"4"};function Cs(r,e,i,t,s,n){return G(),H(K,null,[pe("swiper-container",Ms,[(G(!0),H(K,null,J([t.swiper11,t.swiper12,t.swiper13,t.swiper15,t.swiper16,t.swiper11,t.swiper12,t.swiper13],o=>(G(),H("swiper-slide",{key:o},[B(se,{src:o,cover:""},null,8,["src"])]))),128))]),pe("swiper-container",Ps,[(G(!0),H(K,null,J([t.swiper11,t.swiper12,t.swiper13,t.swiper15,t.swiper16,t.swiper11,t.swiper12,t.swiper13],o=>(G(),H("swiper-slide",{key:o},[B(se,{src:o,cover:""},null,8,["src"])]))),128))])],64)}const Is=ee(_s,[["render",Cs],["__scopeId","data-v-0d423b7f"],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperGallery.vue"]]),zs="/assets/banner-10-C2w4rcW8.jpg",Ls={__name:"DemoSwiperAutoplay",setup(r,{expose:e}){e(),F();const i={get register(){return F},get swiper10(){return zs},get swiper11(){return ti},get swiper20(){return Re},get swiper7(){return Ie},get swiper8(){return st},get swiper9(){return Pt}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},ks={pagination:"true",navigation:"true",autoplay:"true","centered-slides":"true","events-prefix":"swiper-"};function js(r,e,i,t,s,n){return G(),H("swiper-container",ks,[(G(!0),H(K,null,J([t.swiper7,t.swiper8,t.swiper9,t.swiper10,t.swiper11,t.swiper20],o=>(G(),H("swiper-slide",{key:o},[B(se,{src:o,cover:""},null,8,["src"])]))),128))])}const As=ee(Ls,[["render",js],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperAutoplay.vue"]]),Ds={__name:"DemoSwiperCoverflowEffect",setup(r,{expose:e}){e(),F();const i={get register(){return F},get swiper31(){return Je},get swiper32(){return He},get swiper33(){return et},get swiper34(){return tt},get swiper35(){return it},get swiper36(){return Zt},get swiper37(){return Qt},get swiper38(){return Jt},get swiper39(){return Mt}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},Os={pagination:"true",effect:"coverflow","grab-cursor":"true","centered-slides":"true","slides-per-view":"auto","coverflow-effect-rotate":"50","coverflow-effect-stretch":"0","coverflow-effect-depth":"100","coverflow-effect-modifier":"1","coverflow-effect-slide-shadows":"true","events-prefix":"swiper-"};function $s(r,e,i,t,s,n){return G(),H("swiper-container",Os,[(G(!0),H(K,null,J([t.swiper31,t.swiper32,t.swiper33,t.swiper34,t.swiper35,t.swiper36,t.swiper37,t.swiper38,t.swiper39],o=>(G(),H("swiper-slide",{key:o},[B(se,{src:o},null,8,["src"])]))),128))])}const Vs=ee(Ds,[["render",$s],["__scopeId","data-v-13ce18d2"],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperCoverflowEffect.vue"]]),Bs="/assets/banner-21-BbDBzY5j.jpg",Gs="/assets/banner-23-eu_41WqH.jpg",Hs="/assets/banner-24-BNOF4zrU.jpg",Rs={__name:"DemoSwiperCubeEffect",setup(r,{expose:e}){e(),F();const i={get register(){return F},get swiper21(){return Bs},get swiper23(){return Gs},get swiper24(){return Hs},get swiper32(){return He}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},Xs={pagination:"true","centered-slides":"true",effect:"cube","grab-cursor":"true","cube-effect-shadow":"true","cube-effect-slide-shadows":"true","cube-effect-shadow-scale":"0.94","events-prefix":"swiper-"};function Ns(r,e,i,t,s,n){return G(),H("swiper-container",Xs,[(G(!0),H(K,null,J([t.swiper21,t.swiper32,t.swiper23,t.swiper24],o=>(G(),H("swiper-slide",{key:o},[B(se,{src:o},null,8,["src"])]))),128))])}const Ys=ee(Rs,[["render",Ns],["__scopeId","data-v-a88b5586"],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperCubeEffect.vue"]]),Fs="/assets/banner-17-vuA5wUeU.jpg",Ws="/assets/banner-18-rnuWLp8J.jpg",qs="/assets/banner-19-DKrHObKZ.jpg",Us={__name:"DemoSwiperFade",setup(r,{expose:e}){e(),F();const i={get register(){return F},get swiper16(){return si},get swiper17(){return Fs},get swiper18(){return Ws},get swiper19(){return qs},get swiper20(){return Re}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},Ks={"space-between":"30",pagination:"true",navigation:"true",effect:"fade","events-prefix":"swiper-"};function Zs(r,e,i,t,s,n){return G(),H("swiper-container",Ks,[(G(!0),H(K,null,J([t.swiper20,t.swiper19,t.swiper18,t.swiper17,t.swiper16],o=>(G(),H("swiper-slide",{key:o},[B(se,{src:o},null,8,["src"])]))),128))])}const Qs=ee(Us,[["render",Zs],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperFade.vue"]]),Js={__name:"DemoSwiperCenteredSlidesOption2",setup(r,{expose:e}){e(),F();const i={get register(){return F}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},en={"centered-slides":"true","space-between":"30","slides-per-view":"1","events-prefix":"swiper-",breakpoints:{992:{slidesPerView:4,spaceBetween:30},780:{slidesPerView:3,spaceBetween:30},460:{slidesPerView:2,spaceBetween:20}}},tn={class:"d-flex align-center gap-x-3"},rn={class:"font-weight-medium"};function sn(r,e,i,t,s,n){return G(),H("swiper-container",en,[(G(),H(K,null,J([{icon:"tabler-brand-github",text:"Getting Started"},{icon:"tabler-brand-facebook",text:"Pricing & Plans"},{icon:"tabler-brand-twitter",text:"Sales Question"},{icon:"tabler-brand-instagram",text:"Usage Guidelines"},{icon:"tabler-brand-gitlab",text:"General Guide"}],({icon:o,text:c})=>pe("swiper-slide",{key:c},[B(Gt,{class:"bg-default"},{default:R(()=>[B(Bt,null,{default:R(()=>[pe("div",tn,[B(Vt,{icon:o,size:"28"},null,8,["icon"]),pe("span",rn,Et(c),1)])]),_:2},1024)]),_:2},1024)])),64))])}const nn=ee(Js,[["render",sn],["__scopeId","data-v-2b03ea28"],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperCenteredSlidesOption2.vue"]]),an={__name:"DemoSwiperCenteredSlidesOption1",setup(r,{expose:e}){e(),F();const i={get register(){return F}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},on={class:"swiper-centered-slide"},ln={navigation:"true","centered-slides":"true","space-between":"30","slides-per-view":"1","events-prefix":"swiper-",injectStyles:[`
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        `],breakpoints:{992:{slidesPerView:4,spaceBetween:30},780:{slidesPerView:3,spaceBetween:30},460:{slidesPerView:2,spaceBetween:20}}},pn={class:"d-flex flex-column align-center gap-y-3"},dn={class:"text-high-emphasis"};function cn(r,e,i,t,s,n){return G(),H("div",on,[pe("swiper-container",ln,[(G(),H(K,null,J([{icon:"tabler-brand-github",text:"Getting Started"},{icon:"tabler-brand-facebook",text:"Pricing & Plans"},{icon:"tabler-brand-twitter",text:"Sales Question"},{icon:"tabler-brand-instagram",text:"Usage Guidelines"},{icon:"tabler-brand-gitlab",text:"General Guide"}],({icon:o,text:c})=>pe("swiper-slide",{key:c},[B(Gt,null,{default:R(()=>[B(Bt,null,{default:R(()=>[pe("div",pn,[B(Vt,{icon:o,size:"28"},null,8,["icon"]),pe("span",dn,Et(c),1)])]),_:2},1024)]),_:2},1024)])),64))])])}const fn=ee(an,[["render",cn],["__scopeId","data-v-ed799cc8"],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperCenteredSlidesOption1.vue"]]),un="/assets/banner-26-Co29d348.jpg",mn="/assets/banner-28-BavDZX16.jpg",wn="/assets/banner-29-Bw5q4Gpe.jpg",gn="/assets/banner-30-BcnSNmsG.jpg",hn={__name:"DemoSwiperGrid",setup(r,{expose:e}){e(),F();const i={get register(){return F},get swiper26(){return un},get swiper28(){return mn},get swiper29(){return wn},get swiper30(){return gn},get swiper31(){return Je},get swiper32(){return He},get swiper33(){return et},get swiper34(){return tt},get swiper35(){return it},get swiper39(){return Mt}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},vn={"slides-per-view":"4","grid-fill":"rows","space-between":"30","grid-rows":"2","pagination-clickable":"true","events-prefix":"swiper-"};function bn(r,e,i,t,s,n){return G(),H("swiper-container",vn,[(G(!0),H(K,null,J([t.swiper26,t.swiper39,t.swiper28,t.swiper29,t.swiper30,t.swiper31,t.swiper32,t.swiper33,t.swiper34,t.swiper35,t.swiper26,t.swiper39],o=>(G(),H("swiper-slide",{key:o},[B(se,{src:o},null,8,["src"])]))),128))])}const yn=ee(hn,[["render",bn],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperGrid.vue"]]),Sn={__name:"DemoSwiperMultipleSlidesPerView",setup(r,{expose:e}){e(),F();const i={get register(){return F},get swiper31(){return Je},get swiper32(){return He},get swiper33(){return et},get swiper34(){return tt},get swiper35(){return it}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},xn={pagination:"true","slides-per-view":"3","space-between":"25","events-prefix":"swiper-"};function En(r,e,i,t,s,n){return G(),H("swiper-container",xn,[(G(!0),H(K,null,J([t.swiper31,t.swiper32,t.swiper33,t.swiper34,t.swiper35],o=>(G(),H("swiper-slide",{key:o},[B(se,{src:o},null,8,["src"])]))),128))])}const Tn=ee(Sn,[["render",En],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperMultipleSlidesPerView.vue"]]),_n={__name:"DemoSwiperProgress",setup(r,{expose:e}){e(),F();const i={get register(){return F},get swiper5(){return ei},get swiper8(){return st},get swiper20(){return Re},get swiper4(){return rt},get swiper7(){return Ie}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},Mn={navigation:"true","pagination-type":"progressbar","events-prefix":"swiper-"};function Pn(r,e,i,t,s,n){return G(),H("swiper-container",Mn,[(G(!0),H(K,null,J([t.swiper8,t.swiper7,t.swiper20,t.swiper4,t.swiper5],o=>(G(),H("swiper-slide",{key:o},[B(se,{src:o},null,8,["src"])]))),128))])}const Cn=ee(_n,[["render",Pn],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperProgress.vue"]]),In={__name:"DemoSwiperPagination",setup(r,{expose:e}){e(),F();const i={get register(){return F},get swiper8(){return st},get swiper9(){return Pt},get swiper12(){return ii},get swiper20(){return Re},get swiper7(){return Ie}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},zn={pagination:"true","events-prefix":"swiper-"};function Ln(r,e,i,t,s,n){return G(),H("swiper-container",zn,[(G(!0),H(K,null,J([t.swiper12,t.swiper9,t.swiper8,t.swiper7,t.swiper20],o=>(G(),H("swiper-slide",{key:o},[B(se,{src:o},null,8,["src"])]))),128))])}const kn=ee(In,[["render",Ln],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperPagination.vue"]]),jn="/assets/banner-14-bNfFS-GU.jpg",ni="/assets/banner-2-SWMk04gr.jpg",An="/assets/banner-3-S5UpPGOJ.jpg",Dn={__name:"DemoSwiperNavigation",setup(r,{expose:e}){e(),F();const i={get register(){return F},get swiper14(){return jn},get swiper2(){return ni},get swiper3(){return An},get swiper4(){return rt},get swiper7(){return Ie}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},On={navigation:"true","events-prefix":"swiper-"};function $n(r,e,i,t,s,n){return G(),H("swiper-container",On,[(G(!0),H(K,null,J([t.swiper7,t.swiper4,t.swiper14,t.swiper3,t.swiper2],o=>(G(),H("swiper-slide",{key:o},[B(se,{src:o},null,8,["src"])]))),128))])}const Vn=ee(Dn,[["render",$n],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperNavigation.vue"]]),Bn="/assets/banner-1-rgqr7rAW.jpg",Gn={__name:"DemoSwiperBasic",setup(r,{expose:e}){e(),F();const i={get register(){return F},get swiper1(){return Bn},get swiper13(){return ri},get swiper2(){return ni},get swiper4(){return rt},get swiper7(){return Ie}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},Hn={"events-prefix":"swiper-"};function Rn(r,e,i,t,s,n){return G(),H("swiper-container",Hn,[(G(!0),H(K,null,J([t.swiper1,t.swiper2,t.swiper4,t.swiper7,t.swiper13],o=>(G(),H("swiper-slide",{key:o},[B(se,{src:o},null,8,["src"])]))),128))])}const Xn=ee(Gn,[["render",Rn],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/swiper/DemoSwiperBasic.vue"]]),Nn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper10 from '@images/banner/banner-10.jpg'
import swiper11 from '@images/banner/banner-11.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    navigation="true"
    autoplay="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in
        [
          swiper7,
          swiper8,
          swiper9,
          swiper10,
          swiper11,
          swiper20,
        ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper10 from '@images/banner/banner-10.jpg'
import swiper11 from '@images/banner/banner-11.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    navigation="true"
    autoplay="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in
        [
          swiper7,
          swiper8,
          swiper9,
          swiper10,
          swiper11,
          swiper20,
        ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>
`},Yn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper1 from '@images/banner/banner-1.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container events-prefix="swiper-">
    <swiper-slide
      v-for="swiperImg in [
        swiper1,
        swiper2,
        swiper4,
        swiper7,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper1 from '@images/banner/banner-1.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container events-prefix="swiper-">
    <swiper-slide
      v-for="swiperImg in [
        swiper1,
        swiper2,
        swiper4,
        swiper7,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},Fn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="swiper-centered-slide">
    <swiper-container
      navigation="true"
      centered-slides="true"
      space-between="30"
      slides-per-view="1"
      events-prefix="swiper-"
      :injectStyles="[
        \`
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        \`,
      ]"
      :breakpoints="{
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        780: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }"
    >
      <swiper-slide
        v-for="{ icon, text } in [
          { icon: 'tabler-brand-github', text: 'Getting Started' },
          { icon: 'tabler-brand-facebook', text: 'Pricing & Plans' },
          { icon: 'tabler-brand-twitter', text: 'Sales Question' },
          { icon: 'tabler-brand-instagram', text: 'Usage Guidelines' },
          { icon: 'tabler-brand-gitlab', text: 'General Guide' },
        ]"
        :key="text"
      >
        <VCard>
          <VCardText>
            <div class="d-flex flex-column align-center gap-y-3">
              <VIcon
                :icon="icon"
                size="28"
              />
              <span class="text-high-emphasis">{{ text }}</span>
            </div>
          </VCardText>
        </VCard>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));

      .v-icon {
        color: rgb(var(--v-theme-primary));
      }
    }
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="swiper-centered-slide">
    <swiper-container
      navigation="true"
      centered-slides="true"
      space-between="30"
      slides-per-view="1"
      events-prefix="swiper-"
      :injectStyles="[
        \`
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        \`,
      ]"
      :breakpoints="{
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        780: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }"
    >
      <swiper-slide
        v-for="{ icon, text } in [
          { icon: 'tabler-brand-github', text: 'Getting Started' },
          { icon: 'tabler-brand-facebook', text: 'Pricing & Plans' },
          { icon: 'tabler-brand-twitter', text: 'Sales Question' },
          { icon: 'tabler-brand-instagram', text: 'Usage Guidelines' },
          { icon: 'tabler-brand-gitlab', text: 'General Guide' },
        ]"
        :key="text"
      >
        <VCard>
          <VCardText>
            <div class="d-flex flex-column align-center gap-y-3">
              <VIcon
                :icon="icon"
                size="28"
              />
              <span class="text-high-emphasis">{{ text }}</span>
            </div>
          </VCardText>
        </VCard>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));

      .v-icon {
        color: rgb(var(--v-theme-primary));
      }
    }
  }
}
</style>
`},Wn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <swiper-container
    centered-slides="true"
    space-between="30"
    slides-per-view="1"
    events-prefix="swiper-"
    :breakpoints="{
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }"
  >
    <swiper-slide
      v-for="{ icon, text } in [
        { icon: 'tabler-brand-github', text: 'Getting Started' },
        { icon: 'tabler-brand-facebook', text: 'Pricing & Plans' },
        { icon: 'tabler-brand-twitter', text: 'Sales Question' },
        { icon: 'tabler-brand-instagram', text: 'Usage Guidelines' },
        { icon: 'tabler-brand-gitlab', text: 'General Guide' },
      ]"
      :key="text"
    >
      <VCard class="bg-default">
        <VCardText>
          <div class="d-flex align-center gap-x-3">
            <VIcon
              :icon="icon"
              size="28"
            />
            <span class="font-weight-medium">{{ text }}</span>
          </div>
        </VCardText>
      </VCard>
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));
      background: rgb(var(--v-theme-primary));
      color: rgb(var(--v-theme-on-primary));
    }
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <swiper-container
    centered-slides="true"
    space-between="30"
    slides-per-view="1"
    events-prefix="swiper-"
    :breakpoints="{
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }"
  >
    <swiper-slide
      v-for="{ icon, text } in [
        { icon: 'tabler-brand-github', text: 'Getting Started' },
        { icon: 'tabler-brand-facebook', text: 'Pricing & Plans' },
        { icon: 'tabler-brand-twitter', text: 'Sales Question' },
        { icon: 'tabler-brand-instagram', text: 'Usage Guidelines' },
        { icon: 'tabler-brand-gitlab', text: 'General Guide' },
      ]"
      :key="text"
    >
      <VCard class="bg-default">
        <VCardText>
          <div class="d-flex align-center gap-x-3">
            <VIcon
              :icon="icon"
              size="28"
            />
            <span class="font-weight-medium">{{ text }}</span>
          </div>
        </VCardText>
      </VCard>
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));
      background: rgb(var(--v-theme-primary));
      color: rgb(var(--v-theme-on-primary));
    }
  }
}
</style>
`},qn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    effect="coverflow"
    grab-cursor="true"
    centered-slides="true"
    slides-per-view="auto"
    coverflow-effect-rotate="50"
    coverflow-effect-stretch="0"
    coverflow-effect-depth="100"
    coverflow-effect-modifier="1"
    coverflow-effect-slide-shadows="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 300px;
  inline-size: 300px;
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    effect="coverflow"
    grab-cursor="true"
    centered-slides="true"
    slides-per-view="auto"
    coverflow-effect-rotate="50"
    coverflow-effect-stretch="0"
    coverflow-effect-depth="100"
    coverflow-effect-modifier="1"
    coverflow-effect-slide-shadows="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 300px;
  inline-size: 300px;
}
</style>
`},Un={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper21 from '@images/banner/banner-21.jpg'
import swiper23 from '@images/banner/banner-23.jpg'
import swiper24 from '@images/banner/banner-24.jpg'
import swiper32 from '@images/banner/banner-32.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    centered-slides="true"
    effect="cube"
    grab-cursor="true"
    cube-effect-shadow="true"
    cube-effect-slide-shadows="true"
    cube-effect-shadow-scale="0.94"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper21,
        swiper32,
        swiper23,
        swiper24,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 250px;
  inline-size: 250px;
}

swiper-container {
  margin: auto;
  block-size: 250px;
  inline-size: 250px;
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper21 from '@images/banner/banner-21.jpg'
import swiper23 from '@images/banner/banner-23.jpg'
import swiper24 from '@images/banner/banner-24.jpg'
import swiper32 from '@images/banner/banner-32.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    centered-slides="true"
    effect="cube"
    grab-cursor="true"
    cube-effect-shadow="true"
    cube-effect-slide-shadows="true"
    cube-effect-shadow-scale="0.94"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper21,
        swiper32,
        swiper23,
        swiper24,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 250px;
  inline-size: 250px;
}

swiper-container {
  margin: auto;
  block-size: 250px;
  inline-size: 250px;
}
</style>
`},Kn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper16 from '@images/banner/banner-16.jpg'
import swiper17 from '@images/banner/banner-17.jpg'
import swiper18 from '@images/banner/banner-18.jpg'
import swiper19 from '@images/banner/banner-19.jpg'
import swiper20 from '@images/banner/banner-20.jpg'

register()
<\/script>

<template>
  <swiper-container
    space-between="30"
    pagination="true"
    navigation="true"
    effect="fade"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper20,
        swiper19,
        swiper18,
        swiper17,
        swiper16,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper16 from '@images/banner/banner-16.jpg'
import swiper17 from '@images/banner/banner-17.jpg'
import swiper18 from '@images/banner/banner-18.jpg'
import swiper19 from '@images/banner/banner-19.jpg'
import swiper20 from '@images/banner/banner-20.jpg'

register()
<\/script>

<template>
  <swiper-container
    space-between="30"
    pagination="true"
    navigation="true"
    effect="fade"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper20,
        swiper19,
        swiper18,
        swiper17,
        swiper16,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},Zn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper11 from '@images/banner/banner-11.jpg'
import swiper12 from '@images/banner/banner-12.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper15 from '@images/banner/banner-15.jpg'
import swiper16 from '@images/banner/banner-16.jpg'

register()
<\/script>

<template>
  <swiper-container
    class="mySwiper"
    thumbs-swiper=".mySwiper2"
    loop="true"
    space-between="10"
    navigation="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,

      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>

  <swiper-container
    class="mySwiper2"
    loop="true"
    free-mode="true"
    events-prefix="swiper-"
    slides-per-view="4"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container {
  background-color: #000;
}

.mySwiper2 {
  swiper-slide {
    border: 5px solid black;
    block-size: 100%;
    inline-size: 25%;
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper11 from '@images/banner/banner-11.jpg'
import swiper12 from '@images/banner/banner-12.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper15 from '@images/banner/banner-15.jpg'
import swiper16 from '@images/banner/banner-16.jpg'

register()
<\/script>

<template>
  <swiper-container
    class="mySwiper"
    thumbs-swiper=".mySwiper2"
    loop="true"
    space-between="10"
    navigation="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,

      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>

  <swiper-container
    class="mySwiper2"
    loop="true"
    free-mode="true"
    events-prefix="swiper-"
    slides-per-view="4"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container {
  background-color: #000;
}

.mySwiper2 {
  swiper-slide {
    border: 5px solid black;
    block-size: 100%;
    inline-size: 25%;
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
`},Qn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper26 from '@images/banner/banner-26.jpg'
import swiper28 from '@images/banner/banner-28.jpg'
import swiper29 from '@images/banner/banner-29.jpg'
import swiper30 from '@images/banner/banner-30.jpg'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    slides-per-view="4"
    grid-fill="rows"
    space-between="30"
    grid-rows="2"
    pagination-clickable="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper26,
        swiper39,
        swiper28,
        swiper29,
        swiper30,
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper26,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper26 from '@images/banner/banner-26.jpg'
import swiper28 from '@images/banner/banner-28.jpg'
import swiper29 from '@images/banner/banner-29.jpg'
import swiper30 from '@images/banner/banner-30.jpg'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    slides-per-view="4"
    grid-fill="rows"
    space-between="30"
    grid-rows="2"
    pagination-clickable="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper26,
        swiper39,
        swiper28,
        swiper29,
        swiper30,
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper26,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},Jn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    autoplay="true"
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper4,
        swiper5,
        swiper9,
        swiper7,
        swiper8,
        swiper20,
      ]"
      :key="swiperImg"
      lazy="true"
    >
      <VImg
        :src="swiperImg"
        cover
        loading="lazy"
      />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    autoplay="true"
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper4,
        swiper5,
        swiper9,
        swiper7,
        swiper8,
        swiper20,
      ]"
      :key="swiperImg"
      lazy="true"
    >
      <VImg
        :src="swiperImg"
        cover
        loading="lazy"
      />
    </swiper-slide>
  </swiper-container>
</template>
`},ea={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    slides-per-view="3"
    space-between="25"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    slides-per-view="3"
    space-between="25"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},ta={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper14 from '@images/banner/banner-14.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper3 from '@images/banner/banner-3.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper7,
        swiper4,
        swiper14,
        swiper3,
        swiper2,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper14 from '@images/banner/banner-14.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper3 from '@images/banner/banner-3.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper7,
        swiper4,
        swiper14,
        swiper3,
        swiper2,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},ia={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

import swiper12 from '@images/banner/banner-12.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper12,
        swiper9,
        swiper8,
        swiper7,
        swiper20,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'
import swiper12 from '@images/banner/banner-12.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper12,
        swiper9,
        swiper8,
        swiper7,
        swiper20,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},ra={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper8 from '@images/banner/banner-8.jpg'

import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    pagination-type="progressbar"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper8,
        swiper7,
        swiper20,
        swiper4,
        swiper5,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    pagination-type="progressbar"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper8,
        swiper7,
        swiper20,
        swiper4,
        swiper5,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},sa={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    slides-per-view="5"
    space-between="50"
    events-prefix="swiper-"
    :breakpoints="{
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    slides-per-view="5"
    space-between="50"
    events-prefix="swiper-"
    :breakpoints="{
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},na={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()

const slides = Array.from({ length: 500 }, (_, index) => \`Slides \${index + 1}\`)
const swiperEl = ref<any>(null)
const prependNumber = ref(1)
const appendNumber = ref(500)

const toSlide = (index: number) => {
  swiperEl.value?.swiper.slideTo(index - 1)
}

const prependSlide = () => {
  swiperEl.value?.swiper.prependSlide([
    \`<swiper-slide>Slide \${(--prependNumber.value)} </swiper-slide>\`,
    \`<swiper-slide>Slide \${(--prependNumber.value)} </swiper-slide>\`,
  ])
}

const appendSlide = () => {
  swiperEl.value?.swiper.appendSlide([
    \`<swiper-slide>Slide \${(++appendNumber.value)} </swiper-slide>\`,
  ])
}
<\/script>

<template>
  <section class="swiper-virtual">
    <swiper-container
      ref="swiperEl"
      virtual="true"
      :slides="slides"
      navigation="true"
      slides-per-view="5"
      space-between="50"
      free-mode="true"
      events-prefix="swiper-"
      :breakpoints="{
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }"
    >
      <swiper-slide
        v-for="(item, index) in slides"
        :key="index"
      >
        <div class="text-secondary">
          {{ item }}
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="d-flex justify-center gap-4 flex-wrap">
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="prependSlide"
      >
        Prepend 2 Slides
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(1)"
      >
        Slide 1
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(250)"
      >
        Slide 250
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(500)"
      >
        Slide 500
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="appendSlide"
      >
        Append Slide
      </VBtn>
    </div>
  </section>
</template>

<style lang="scss">
.swiper-virtual {
  swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 18px;
    text-align: center;
  }

  swiper-container {
    block-size: 300px;
    inline-size: 100%;
    margin-block: 20px;
    margin-inline: auto;
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'

register()

const slides = Array.from({ length: 500 }, (_, index) => \`Slides \${ index + 1 }\`)
const swiperEl = ref(null)
const prependNumber = ref(1)
const appendNumber = ref(500)

const toSlide = index => {
  swiperEl.value?.swiper.slideTo(index - 1)
}

const prependSlide = () => {
  swiperEl.value?.swiper.prependSlide([
    \`<swiper-slide>Slide \${ --prependNumber.value } </swiper-slide>\`,
    \`<swiper-slide>Slide \${ --prependNumber.value } </swiper-slide>\`,
  ])
}

const appendSlide = () => {
  swiperEl.value?.swiper.appendSlide([\`<swiper-slide>Slide \${ ++appendNumber.value } </swiper-slide>\`])
}
<\/script>

<template>
  <section class="swiper-virtual">
    <swiper-container
      ref="swiperEl"
      virtual="true"
      :slides="slides"
      navigation="true"
      slides-per-view="5"
      space-between="50"
      free-mode="true"
      events-prefix="swiper-"
      :breakpoints="{
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }"
    >
      <swiper-slide
        v-for="(item, index) in slides"
        :key="index"
      >
        <div class="text-secondary">
          {{ item }}
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="d-flex justify-center gap-4 flex-wrap">
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="prependSlide"
      >
        Prepend 2 Slides
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(1)"
      >
        Slide 1
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(250)"
      >
        Slide 250
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(500)"
      >
        Slide 500
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="appendSlide"
      >
        Append Slide
      </VBtn>
    </div>
  </section>
</template>

<style lang="scss">
.swiper-virtual {
  swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 18px;
    text-align: center;
  }

  swiper-container {
    block-size: 300px;
    inline-size: 100%;
    margin-block: 20px;
    margin-inline: auto;
  }
}
</style>
`},aa={__name:"swiper",setup(r,{expose:e}){e();const i={get autoplay(){return Nn},get basic(){return Yn},get centeredSlidesOption1(){return Fn},get centeredSlidesOption2(){return Wn},get coverflowEffect(){return qn},get cubeEffect(){return Un},get fade(){return Kn},get gallery(){return Zn},get grid(){return Qn},get lazyLoading(){return Jn},get multipleSlidesPerView(){return ea},get navigation(){return ta},get pagination(){return ia},get progress(){return ra},get responsiveBreakpoints(){return sa},get virtualSlides(){return na}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function oa(r,e,i,t,s,n){const o=Xn,c=oi,f=Vn,d=kn,p=Cn,u=Tn,v=yn,w=fn,a=nn,l=Qs,h=Ys,b=Vs,g=As,m=Is,y=Es,x=bs,k=ws;return G(),ai(li,null,{default:R(()=>[B(re,null,{default:R(()=>[B(c,{title:"Basic",code:t.basic},{default:R(()=>[B(o)]),_:1},8,["code"])]),_:1}),B(re,null,{default:R(()=>[B(c,{title:"Navigation",code:t.navigation},{default:R(()=>[B(f)]),_:1},8,["code"])]),_:1}),B(re,null,{default:R(()=>[B(c,{title:"Pagination",code:t.pagination},{default:R(()=>[B(d)]),_:1},8,["code"])]),_:1}),B(re,null,{default:R(()=>[B(c,{title:"Progress",code:t.progress},{default:R(()=>[B(p)]),_:1},8,["code"])]),_:1}),B(re,null,{default:R(()=>[B(c,{title:"Multiple Slides Per View",code:t.multipleSlidesPerView},{default:R(()=>[B(u)]),_:1},8,["code"])]),_:1}),B(re,null,{default:R(()=>[B(c,{title:"Grid",code:t.grid},{default:R(()=>[B(v)]),_:1},8,["code"])]),_:1}),B(re,null,{default:R(()=>[B(c,{variant:"text",title:"Centered Slides Option 1",code:t.centeredSlidesOption1},{default:R(()=>[B(w)]),_:1},8,["code"])]),_:1}),B(re,null,{default:R(()=>[B(c,{title:"Centered Slides Option 2",code:t.centeredSlidesOption2},{default:R(()=>[B(a)]),_:1},8,["code"])]),_:1}),B(re,null,{default:R(()=>[B(c,{title:"Fade",code:t.fade},{default:R(()=>[B(l)]),_:1},8,["code"])]),_:1}),B(re,null,{default:R(()=>[B(c,{title:"Cube Effect",code:t.cubeEffect},{default:R(()=>[B(h)]),_:1},8,["code"])]),_:1}),B(re,null,{default:R(()=>[B(c,{title:"Coverflow Effect",code:t.coverflowEffect},{default:R(()=>[B(b)]),_:1},8,["code"])]),_:1}),B(re,null,{default:R(()=>[B(c,{title:"Autoplay",code:t.autoplay},{default:R(()=>[B(g)]),_:1},8,["code"])]),_:1}),B(re,null,{default:R(()=>[B(c,{title:"Gallery",code:t.gallery},{default:R(()=>[B(m)]),_:1},8,["code"])]),_:1}),B(re,null,{default:R(()=>[B(c,{title:"Lazy Loading",code:t.lazyLoading},{default:R(()=>[B(y)]),_:1},8,["code"])]),_:1}),B(re,null,{default:R(()=>[B(c,{title:"Responsive Breakpoints",code:t.responsiveBreakpoints},{default:R(()=>[B(x)]),_:1},8,["code"])]),_:1}),B(re,null,{default:R(()=>[B(c,{title:"Virtual Slides",code:t.virtualSlides},{default:R(()=>[B(k)]),_:1},8,["code"])]),_:1})]),_:1})}const va=ee(aa,[["render",oa],["__file","E:/wamp64/www/sales/frontend/src/pages/extensions/swiper.vue"]]);export{va as default};
