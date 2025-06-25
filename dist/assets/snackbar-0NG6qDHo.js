import{ab as G,ac as K,aJ as Q,bF as X,ad as Z,bb as h,aH as aa,f as c,aw as U,O as ea,aA as ta,av as na,aB as ia,g as L,H as ra,cz as sa,W as oa,ao as la,a as t,bf as ca,ah as ba,aS as ka,m as M,bn as Va,af as ma,aV as da,aN as ua,bG as Sa,a$ as pa,aC as fa,ak as va,cA as _a,_ as f,c as w,o as v,w as i,j as r,a2 as l,Y as p,F as I,d as Ba,b}from"./index-BGIMdqyN.js";import{V as H,a as wa}from"./VOverlay-qz3yYbIb.js";import{f as ga}from"./forwardRefs-C-GTDzx5.js";import{u as ya}from"./scopeId-DfGkhZ3B.js";import{_ as xa}from"./AppCardCode-C-zO1RUn.js";import{V as Ta,a as B}from"./VRow-BFNCnCWI.js";import"./easing-Bybner-F.js";import"./lazy-CKhx2O3m.js";import"./VImg-nOKaZD-s.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VAvatar-CYJWVBhL.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";/* empty css              */function Ia(s){const a=U(s());let o=-1;function e(){clearInterval(o)}function m(){e(),va(()=>a.value=s())}function V(n){const d=n?getComputedStyle(n):{transitionDuration:.2},_=parseFloat(d.transitionDuration)*1e3||200;if(e(),a.value<=0)return;const g=performance.now();o=window.setInterval(()=>{const y=performance.now()-g+_;a.value=Math.max(s()-y,0),a.value<=0&&e()},_)}return fa(e),{clear:e,time:a,start:V,reset:m}}const Ca=K({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...pa({location:"bottom"}),...Sa(),...ua(),...da(),...ma(),...Va(wa({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),k=G()({name:"VSnackbar",props:Ca(),emits:{"update:modelValue":s=>!0},setup(s,a){let{slots:o}=a;const e=Q(s,"modelValue"),{positionClasses:m}=X(s),{scopeId:V}=ya(),{themeClasses:n}=Z(s),{colorClasses:d,colorStyles:_,variantClasses:g}=h(s),{roundedClasses:y}=aa(s),S=Ia(()=>Number(s.timeout)),C=c(),O=c(),x=U(!1),F=U(0),j=c(),q=ea(_a,void 0);ta(()=>!!q,()=>{const u=na();ia(()=>{j.value=u.mainStyles.value})}),L(e,D),L(()=>s.timeout,D),ra(()=>{e.value&&D()});let P=-1;function D(){S.reset(),window.clearTimeout(P);const u=Number(s.timeout);if(!e.value||u===-1)return;const T=sa(O.value);S.start(T),P=window.setTimeout(()=>{e.value=!1},u)}function N(){S.reset(),window.clearTimeout(P)}function z(){x.value=!0,N()}function A(){x.value=!1,D()}function W(u){F.value=u.touches[0].clientY}function J(u){Math.abs(F.value-u.changedTouches[0].clientY)>50&&(e.value=!1)}function Y(){x.value&&A()}const $=oa(()=>s.location.split(" ").reduce((u,T)=>(u[`v-snackbar--${T}`]=!0,u),{}));return la(()=>{const u=H.filterProps(s),T=!!(o.default||o.text||s.text);return t(H,M({ref:C,class:["v-snackbar",{"v-snackbar--active":e.value,"v-snackbar--multi-line":s.multiLine&&!s.vertical,"v-snackbar--timer":!!s.timer,"v-snackbar--vertical":s.vertical},$.value,m.value,s.class],style:[j.value,s.style]},u,{modelValue:e.value,"onUpdate:modelValue":E=>e.value=E,contentProps:M({class:["v-snackbar__wrapper",n.value,d.value,y.value,g.value],style:[_.value],onPointerenter:z,onPointerleave:A},u.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:W,onTouchend:J,onAfterLeave:Y},V),{default:()=>{var E,R;return[ca(!1,"v-snackbar"),s.timer&&!x.value&&t("div",{key:"timer",class:"v-snackbar__timer"},[t(ba,{ref:O,color:typeof s.timer=="string"?s.timer:"info",max:s.timeout,"model-value":S.time.value},null)]),T&&t("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((E=o.text)==null?void 0:E.call(o))??s.text,(R=o.default)==null?void 0:R.call(o)]),o.actions&&t(ka,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[t("div",{class:"v-snackbar__actions"},[o.actions({isActive:e})])]})]},activator:o.activator})}),ga({},C)}}),Oa={__name:"DemoSnackbarTransition",setup(s,{expose:a}){a();const o=c(!1),e=c(!1),m=c(!1),V={isSnackbarFadeVisible:o,isSnackbarScaleVisible:e,isSnackbarScrollReverseVisible:m};return Object.defineProperty(V,"__isScriptSetup",{enumerable:!1,value:!0}),V}},Da={class:"demo-space-x"};function Ea(s,a,o,e,m,V){return v(),w("div",Da,[t(l,{onClick:a[0]||(a[0]=n=>e.isSnackbarFadeVisible=!0)},{default:i(()=>a[6]||(a[6]=[r(" fade snackbar ")])),_:1,__:[6]}),t(k,{modelValue:e.isSnackbarFadeVisible,"onUpdate:modelValue":a[1]||(a[1]=n=>e.isSnackbarFadeVisible=n),transition:"fade-transition",location:"top start"},{default:i(()=>a[7]||(a[7]=[r(" I'm a fade transition snackbar. ")])),_:1,__:[7]},8,["modelValue"]),t(l,{onClick:a[2]||(a[2]=n=>e.isSnackbarScaleVisible=!0)},{default:i(()=>a[8]||(a[8]=[r(" Scale snackbar ")])),_:1,__:[8]}),t(k,{modelValue:e.isSnackbarScaleVisible,"onUpdate:modelValue":a[3]||(a[3]=n=>e.isSnackbarScaleVisible=n),transition:"scale-transition",location:"bottom end"},{default:i(()=>a[9]||(a[9]=[r(" I'm a scale transition snackbar. ")])),_:1,__:[9]},8,["modelValue"]),t(l,{onClick:a[4]||(a[4]=n=>e.isSnackbarScrollReverseVisible=!0)},{default:i(()=>a[10]||(a[10]=[r(" scroll y reverse ")])),_:1,__:[10]}),t(k,{modelValue:e.isSnackbarScrollReverseVisible,"onUpdate:modelValue":a[5]||(a[5]=n=>e.isSnackbarScrollReverseVisible=n),transition:"scroll-y-reverse-transition",location:"top end"},{default:i(()=>a[11]||(a[11]=[r(" I'm a scroll y reverse transition snackbar. ")])),_:1,__:[11]},8,["modelValue"])])}const Pa=f(Oa,[["render",Ea],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/snackbar/DemoSnackbarTransition.vue"]]),Ua={__name:"DemoSnackbarVariants",setup(s,{expose:a}){a();const o=c(!1),e=c(!1),m=c(!1),V=c(!1),n=c(!1),d={isDefaultSnackbarVisible:o,isTonalSnackbarVisible:e,isTextSnackbarVisible:m,isOutlinedSnackbarVisible:V,isFlatSnackbarVisible:n};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}},Fa={class:"demo-space-x"};function ja(s,a,o,e,m,V){return v(),w("div",Fa,[t(l,{onClick:a[0]||(a[0]=n=>e.isDefaultSnackbarVisible=!0)},{default:i(()=>a[10]||(a[10]=[r(" Default ")])),_:1,__:[10]}),t(k,{modelValue:e.isDefaultSnackbarVisible,"onUpdate:modelValue":a[1]||(a[1]=n=>e.isDefaultSnackbarVisible=n),location:"top start"},{default:i(()=>a[11]||(a[11]=[r(" Jelly chocolate bar candy canes apple pie. ")])),_:1,__:[11]},8,["modelValue"]),t(l,{onClick:a[2]||(a[2]=n=>e.isTonalSnackbarVisible=!0)},{default:i(()=>a[12]||(a[12]=[r(" tonal ")])),_:1,__:[12]}),t(k,{modelValue:e.isTonalSnackbarVisible,"onUpdate:modelValue":a[3]||(a[3]=n=>e.isTonalSnackbarVisible=n),location:"top end",variant:"tonal"},{default:i(()=>a[13]||(a[13]=[r(" Ice cream cake candy canes. ")])),_:1,__:[13]},8,["modelValue"]),t(l,{onClick:a[4]||(a[4]=n=>e.isTextSnackbarVisible=!0)},{default:i(()=>a[14]||(a[14]=[r(" Text ")])),_:1,__:[14]}),t(k,{modelValue:e.isTextSnackbarVisible,"onUpdate:modelValue":a[5]||(a[5]=n=>e.isTextSnackbarVisible=n),location:"end center",variant:"text"},{default:i(()=>a[15]||(a[15]=[r(" Pie icing biscuit soufflé liquorice topping. ")])),_:1,__:[15]},8,["modelValue"]),t(l,{onClick:a[6]||(a[6]=n=>e.isOutlinedSnackbarVisible=!0)},{default:i(()=>a[16]||(a[16]=[r(" Outlined ")])),_:1,__:[16]}),t(k,{modelValue:e.isOutlinedSnackbarVisible,"onUpdate:modelValue":a[7]||(a[7]=n=>e.isOutlinedSnackbarVisible=n),location:"bottom end",variant:"outlined",color:"error"},{default:i(()=>a[17]||(a[17]=[r(" Oat cake caramels sesame snaps candy. ")])),_:1,__:[17]},8,["modelValue"]),t(l,{onClick:a[8]||(a[8]=n=>e.isFlatSnackbarVisible=!0)},{default:i(()=>a[18]||(a[18]=[r(" Flat ")])),_:1,__:[18]}),t(k,{modelValue:e.isFlatSnackbarVisible,"onUpdate:modelValue":a[9]||(a[9]=n=>e.isFlatSnackbarVisible=n),location:"bottom start",variant:"flat",color:"error"},{default:i(()=>a[19]||(a[19]=[r(" Oat cake caramels sesame snaps candy. ")])),_:1,__:[19]},8,["modelValue"])])}const Aa=f(Ua,[["render",ja],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/snackbar/DemoSnackbarVariants.vue"]]),Ra={__name:"DemoSnackbarPosition",setup(s,{expose:a}){a();const o=c(!1),e=c(!1),m=c(!1),V=c(!1),n=c(!1),d=c(!1),_=c(!1),g=c(!1),y=c(!1),S={isSnackbarTopStartVisible:o,isSnackbarTopVisible:e,isSnackbarTopEndVisible:m,isSnackbarBottomEndVisible:V,isSnackbarBottomVisible:n,isSnackbarBottomStartVisible:d,isSnackbarEndVisible:_,isSnackbarStartVisible:g,isSnackbarCenteredVisible:y};return Object.defineProperty(S,"__isScriptSetup",{enumerable:!1,value:!0}),S}},La={class:"demo-space-x"};function Ma(s,a,o,e,m,V){return v(),w("div",La,[t(l,{icon:"",variant:"text",onClick:a[0]||(a[0]=n=>e.isSnackbarTopVisible=!0)},{default:i(()=>[t(p,{icon:"tabler-arrow-up"})]),_:1}),t(k,{modelValue:e.isSnackbarTopVisible,"onUpdate:modelValue":a[1]||(a[1]=n=>e.isSnackbarTopVisible=n),location:"top"},{default:i(()=>a[18]||(a[18]=[r(" I'm a top snackbar. ")])),_:1,__:[18]},8,["modelValue"]),t(l,{icon:"",variant:"text",onClick:a[2]||(a[2]=n=>e.isSnackbarTopEndVisible=!0)},{default:i(()=>[t(p,{icon:"tabler-arrow-up-right"})]),_:1}),t(k,{modelValue:e.isSnackbarTopEndVisible,"onUpdate:modelValue":a[3]||(a[3]=n=>e.isSnackbarTopEndVisible=n),location:"top end"},{default:i(()=>a[19]||(a[19]=[r(" I'm a top right snackbar. ")])),_:1,__:[19]},8,["modelValue"]),t(l,{icon:"",variant:"text",onClick:a[4]||(a[4]=n=>e.isSnackbarEndVisible=!0)},{default:i(()=>[t(p,{icon:"tabler-arrow-right"})]),_:1}),t(k,{modelValue:e.isSnackbarEndVisible,"onUpdate:modelValue":a[5]||(a[5]=n=>e.isSnackbarEndVisible=n),location:"end center"},{default:i(()=>a[20]||(a[20]=[r(" I'm a center end snackbar. ")])),_:1,__:[20]},8,["modelValue"]),t(l,{icon:"",variant:"text",onClick:a[6]||(a[6]=n=>e.isSnackbarBottomEndVisible=!0)},{default:i(()=>[t(p,{icon:"tabler-arrow-down-right"})]),_:1}),t(k,{modelValue:e.isSnackbarBottomEndVisible,"onUpdate:modelValue":a[7]||(a[7]=n=>e.isSnackbarBottomEndVisible=n),location:"bottom end"},{default:i(()=>a[21]||(a[21]=[r(" I'm a bottom end snackbar. ")])),_:1,__:[21]},8,["modelValue"]),t(l,{icon:"",variant:"text",onClick:a[8]||(a[8]=n=>e.isSnackbarBottomVisible=!0)},{default:i(()=>[t(p,{icon:"tabler-arrow-down"})]),_:1}),t(k,{modelValue:e.isSnackbarBottomVisible,"onUpdate:modelValue":a[9]||(a[9]=n=>e.isSnackbarBottomVisible=n)},{default:i(()=>a[22]||(a[22]=[r(" I'm a bottom snackbar. ")])),_:1,__:[22]},8,["modelValue"]),t(l,{icon:"",variant:"text",onClick:a[10]||(a[10]=n=>e.isSnackbarBottomStartVisible=!0)},{default:i(()=>[t(p,{icon:"tabler-arrow-down-left"})]),_:1}),t(k,{modelValue:e.isSnackbarBottomStartVisible,"onUpdate:modelValue":a[11]||(a[11]=n=>e.isSnackbarBottomStartVisible=n),location:"bottom start"},{default:i(()=>a[23]||(a[23]=[r(" I'm a bottom start snackbar. ")])),_:1,__:[23]},8,["modelValue"]),t(l,{icon:"",variant:"text",onClick:a[12]||(a[12]=n=>e.isSnackbarStartVisible=!0)},{default:i(()=>[t(p,{icon:"tabler-arrow-left"})]),_:1}),t(k,{modelValue:e.isSnackbarStartVisible,"onUpdate:modelValue":a[13]||(a[13]=n=>e.isSnackbarStartVisible=n),location:"start center"},{default:i(()=>a[24]||(a[24]=[r(" I'm a center start snackbar. ")])),_:1,__:[24]},8,["modelValue"]),t(l,{icon:"",variant:"text",onClick:a[14]||(a[14]=n=>e.isSnackbarTopStartVisible=!0)},{default:i(()=>[t(p,{icon:"tabler-arrow-up-left"})]),_:1}),t(k,{modelValue:e.isSnackbarTopStartVisible,"onUpdate:modelValue":a[15]||(a[15]=n=>e.isSnackbarTopStartVisible=n),location:"top start"},{default:i(()=>a[25]||(a[25]=[r(" I'm a top start snackbar. ")])),_:1,__:[25]},8,["modelValue"]),t(l,{icon:"",variant:"text",onClick:a[16]||(a[16]=n=>e.isSnackbarCenteredVisible=!0)},{default:i(()=>[t(p,{icon:"tabler-arrows-minimize"})]),_:1}),t(k,{modelValue:e.isSnackbarCenteredVisible,"onUpdate:modelValue":a[17]||(a[17]=n=>e.isSnackbarCenteredVisible=n),location:"center"},{default:i(()=>a[26]||(a[26]=[r(" I'm a center snackbar. ")])),_:1,__:[26]},8,["modelValue"])])}const Ha=f(Ra,[["render",Ma],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/snackbar/DemoSnackbarPosition.vue"]]),qa={__name:"DemoSnackbarVertical",setup(s,{expose:a}){a();const e={isSnackbarVisible:c(!1)};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function Na(s,a,o,e,m,V){return v(),w(I,null,[t(l,{onClick:a[0]||(a[0]=n=>e.isSnackbarVisible=!0)},{default:i(()=>a[4]||(a[4]=[r(" Open Snackbar ")])),_:1,__:[4]}),t(k,{modelValue:e.isSnackbarVisible,"onUpdate:modelValue":a[3]||(a[3]=n=>e.isSnackbarVisible=n),vertical:""},{actions:i(()=>[t(l,{color:"success",onClick:a[1]||(a[1]=n=>e.isSnackbarVisible=!1)},{default:i(()=>a[5]||(a[5]=[r(" Undo ")])),_:1,__:[5]}),t(l,{color:"error",onClick:a[2]||(a[2]=n=>e.isSnackbarVisible=!1)},{default:i(()=>a[6]||(a[6]=[r(" Close ")])),_:1,__:[6]})]),default:i(()=>[a[7]||(a[7]=r(" Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy. "))]),_:1,__:[7]},8,["modelValue"])],64)}const za=f(qa,[["render",Na],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/snackbar/DemoSnackbarVertical.vue"]]),Wa={__name:"DemoSnackbarTimeout",setup(s,{expose:a}){a();const e={isSnackbarVisible:c(!1)};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function Ja(s,a,o,e,m,V){return v(),w(I,null,[t(l,{onClick:a[0]||(a[0]=n=>e.isSnackbarVisible=!0)},{default:i(()=>a[2]||(a[2]=[r(" Open Snackbar ")])),_:1,__:[2]}),t(k,{modelValue:e.isSnackbarVisible,"onUpdate:modelValue":a[1]||(a[1]=n=>e.isSnackbarVisible=n),timeout:2e3},{default:i(()=>a[3]||(a[3]=[r(" My timeout is set to 2000. ")])),_:1,__:[3]},8,["modelValue"])],64)}const Ya=f(Wa,[["render",Ja],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/snackbar/DemoSnackbarTimeout.vue"]]),$a={__name:"DemoSnackbarMultiLine",setup(s,{expose:a}){a();const e={isSnackbarVisible:c(!1)};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function Ga(s,a,o,e,m,V){return v(),w(I,null,[t(l,{onClick:a[0]||(a[0]=n=>e.isSnackbarVisible=!0)},{default:i(()=>a[3]||(a[3]=[r(" Open Snackbar ")])),_:1,__:[3]}),t(k,{modelValue:e.isSnackbarVisible,"onUpdate:modelValue":a[2]||(a[2]=n=>e.isSnackbarVisible=n),"multi-line":""},{actions:i(()=>[t(l,{color:"error",onClick:a[1]||(a[1]=n=>e.isSnackbarVisible=!1)},{default:i(()=>a[4]||(a[4]=[r(" Close ")])),_:1,__:[4]})]),default:i(()=>[a[5]||(a[5]=r(" I am a multi-line snackbar. I can have more than one line. This is another line that is quite long. "))]),_:1,__:[5]},8,["modelValue"])],64)}const Ka=f($a,[["render",Ga],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/snackbar/DemoSnackbarMultiLine.vue"]]),Qa={__name:"DemoSnackbarWithAction",setup(s,{expose:a}){a();const e={isSnackbarVisibility:c(!1)};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function Xa(s,a,o,e,m,V){return v(),w(I,null,[t(l,{onClick:a[0]||(a[0]=n=>e.isSnackbarVisibility=!0)},{default:i(()=>a[3]||(a[3]=[r(" Open Snackbar ")])),_:1,__:[3]}),t(k,{modelValue:e.isSnackbarVisibility,"onUpdate:modelValue":a[2]||(a[2]=n=>e.isSnackbarVisibility=n)},{actions:i(()=>[t(l,{color:"error",onClick:a[1]||(a[1]=n=>e.isSnackbarVisibility=!1)},{default:i(()=>a[4]||(a[4]=[r(" Close ")])),_:1,__:[4]})]),default:i(()=>[a[5]||(a[5]=r(" Hello, I'm a snackbar with actions. "))]),_:1,__:[5]},8,["modelValue"])],64)}const Za=f(Qa,[["render",Xa],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/snackbar/DemoSnackbarWithAction.vue"]]),ha={__name:"DemoSnackbarBasic",setup(s,{expose:a}){a();const e={isSnackbarVisible:c(!1)};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function ae(s,a,o,e,m,V){return v(),w(I,null,[t(l,{onClick:a[0]||(a[0]=n=>e.isSnackbarVisible=!0)},{default:i(()=>a[2]||(a[2]=[r(" Open Snackbar ")])),_:1,__:[2]}),t(k,{modelValue:e.isSnackbarVisible,"onUpdate:modelValue":a[1]||(a[1]=n=>e.isSnackbarVisible=n)},{default:i(()=>a[3]||(a[3]=[r(" Hello, I'm a snackbar ")])),_:1,__:[3]},8,["modelValue"])],64)}const ee=f(ha,[["render",ae],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/snackbar/DemoSnackbarBasic.vue"]]),te={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`},ne={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},ie={ts:`<script lang="ts" setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="tabler-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="tabler-arrow-up-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="tabler-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="tabler-arrow-down-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="tabler-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="tabler-arrow-down-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="tabler-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="tabler-arrow-up-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="tabler-arrows-minimize" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="tabler-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="tabler-arrow-up-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="tabler-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="tabler-arrow-down-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="tabler-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="tabler-arrow-down-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="tabler-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="tabler-arrow-up-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="tabler-arrows-minimize" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`},re={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`},se={ts:`<script lang="ts" setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`},oe={ts:`<script lang="ts" setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`},le={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},ce={ts:`<script lang="ts" setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},be={__name:"snackbar",setup(s,{expose:a}){a();const o={get basic(){return te},get multiLine(){return ne},get position(){return ie},get timeout(){return re},get transition(){return se},get variants(){return oe},get vertical(){return le},get withAction(){return ce}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function ke(s,a,o,e,m,V){const n=ee,d=xa,_=Za,g=Ka,y=Ya,S=za,C=Ha,O=Aa,x=Pa;return v(),Ba(Ta,{class:"match-height"},{default:i(()=>[t(B,{cols:"12",md:"6"},{default:i(()=>[t(d,{title:"Basic",code:e.basic},{default:i(()=>[a[0]||(a[0]=b("p",null,[r("The "),b("code",null,"v-snackbar"),r(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")],-1)),t(n)]),_:1,__:[0]},8,["code"])]),_:1}),t(B,{cols:"12",md:"6"},{default:i(()=>[t(d,{title:"With Action",code:e.withAction},{default:i(()=>[a[1]||(a[1]=b("p",null,[r("Use "),b("code",null,"actions"),r(" slot to add action button. A "),b("code",null,"v-snackbar"),r(" in its simplest form displays a temporary and closable notification to the user.")],-1)),t(_)]),_:1,__:[1]},8,["code"])]),_:1}),t(B,{cols:"12",md:"6"},{default:i(()=>[t(d,{title:"Multi Line",code:e.multiLine},{default:i(()=>[a[2]||(a[2]=b("p",null,[r("The "),b("code",null,"multi-line"),r(" property extends the height of the "),b("code",null,"v-snackbar"),r(" to give you a little more room for content.")],-1)),t(g)]),_:1,__:[2]},8,["code"])]),_:1}),t(B,{cols:"12",md:"6"},{default:i(()=>[t(d,{title:"Timeout",code:e.timeout},{default:i(()=>[a[3]||(a[3]=b("p",null,[r("The "),b("code",null,"timeout"),r(" property lets you customize the delay before the "),b("code",null,"v-snackbar"),r(" is hidden.")],-1)),t(y)]),_:1,__:[3]},8,["code"])]),_:1}),t(B,{cols:"12",md:"6"},{default:i(()=>[t(d,{title:"Vertical",code:e.vertical},{default:i(()=>[a[4]||(a[4]=b("p",null,[r("The "),b("code",null,"vertical"),r(" property allows you to stack the content of your "),b("code",null,"v-snackbar"),r(".")],-1)),t(S)]),_:1,__:[4]},8,["code"])]),_:1}),t(B,{cols:"12",md:"6"},{default:i(()=>[t(d,{title:"Position",code:e.position},{default:i(()=>[a[5]||(a[5]=b("p",null,[r("Use "),b("code",null,"location"),r(" prop to change the position of snackbar.")],-1)),t(C)]),_:1,__:[5]},8,["code"])]),_:1}),t(B,{cols:"12",md:"6"},{default:i(()=>[t(d,{title:"Variants",code:e.variants},{default:i(()=>[a[6]||(a[6]=b("p",null,[r("Apply different styles to the snackbar using props such as "),b("code",null,"shaped"),r(", "),b("code",null,"rounded"),r(", "),b("code",null,"color"),r(", "),b("code",null,"text"),r(", "),b("code",null,"outlined"),r(", "),b("code",null,"tile"),r(" and more.")],-1)),t(O)]),_:1,__:[6]},8,["code"])]),_:1}),t(B,{cols:"12",md:"6"},{default:i(()=>[t(d,{title:"Transition",code:e.transition},{default:i(()=>[a[7]||(a[7]=b("p",null,"Use transition prop to sets the component transition.",-1)),t(x)]),_:1,__:[7]},8,["code"])]),_:1})]),_:1})}const Ie=f(be,[["render",ke],["__file","E:/wamp64/www/sales/frontend/src/pages/components/snackbar.vue"]]);export{Ie as default};
