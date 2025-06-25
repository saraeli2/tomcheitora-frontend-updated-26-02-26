import{_ as n,c as _,o as u,a as r,b1 as e,w as t,j as s,t as p,f as v,H as y,ay as z,d as h,b as l}from"./index-BGIMdqyN.js";import{_ as x}from"./AppCardCode-C-zO1RUn.js";import{V as D,a as g}from"./VRow-BFNCnCWI.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VAvatar-CYJWVBhL.js";import"./VImg-nOKaZD-s.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";/* empty css              */const I={},b={class:"demo-space-x"};function S(c,a){return u(),_("div",b,[r(e,{size:30,width:"3",color:"primary",indeterminate:""}),r(e,{size:40,color:"primary",indeterminate:""}),r(e,{size:50,color:"primary",indeterminate:""}),r(e,{size:60,color:"primary",indeterminate:""})])}const j=n(I,[["render",S],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/progress-circular/DemoProgressCircularSize.vue"]]),B={__name:"DemoProgressCircularRotate",setup(c,{expose:a}){a();const i=v(),o=v(0);y(()=>{i.value=setInterval(()=>{if(o.value===100)return o.value=0;o.value+=10},1e3)}),z(()=>{clearInterval(i.value)});const d={interval:i,progressValue:o};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}},$={class:"demo-space-x"};function E(c,a,i,o,d,V){return u(),_("div",$,[r(e,{rotate:360,size:70,width:6,"model-value":o.progressValue,color:"primary"},{default:t(()=>[s(p(o.progressValue),1)]),_:1},8,["model-value"]),r(e,{rotate:90,size:70,width:6,"model-value":o.progressValue,color:"primary"},{default:t(()=>[s(p(o.progressValue),1)]),_:1},8,["model-value"]),r(e,{rotate:170,size:70,width:6,"model-value":o.progressValue,color:"primary"},{default:t(()=>[s(p(o.progressValue),1)]),_:1},8,["model-value"]),r(e,{rotate:-90,size:70,width:6,"model-value":o.progressValue,color:"primary"},{default:t(()=>[s(p(o.progressValue),1)]),_:1},8,["model-value"])])}const R=n(B,[["render",E],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/progress-circular/DemoProgressCircularRotate.vue"]]),U={},k={class:"demo-space-x"};function M(c,a){return u(),_("div",k,[r(e,{indeterminate:"",color:"primary"}),r(e,{indeterminate:"",color:"secondary"}),r(e,{indeterminate:"",color:"success"}),r(e,{indeterminate:"",color:"info"}),r(e,{indeterminate:"",color:"warning"}),r(e,{indeterminate:"",color:"error"})])}const N=n(U,[["render",M],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/progress-circular/DemoProgressCircularIndeterminate.vue"]]),T={},A={class:"demo-space-x"};function O(c,a){return u(),_("div",A,[r(e,{"model-value":"50",color:"primary"}),r(e,{"model-value":"50",color:"secondary"}),r(e,{"model-value":"50",color:"success"}),r(e,{"model-value":"50",color:"info"}),r(e,{"model-value":"50",color:"warning"}),r(e,{"model-value":"50",color:"error"})])}const H=n(T,[["render",O],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/progress-circular/DemoProgressCircularColor.vue"]]),q={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
`},F={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`},G={ts:`<script setup lang="ts">
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`,js:`<script setup>
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`},J={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
`},K={__name:"progress-circular",setup(c,{expose:a}){a();const i={get color(){return q},get indeterminate(){return F},get rotate(){return G},get size(){return J}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function L(c,a,i,o,d,V){const f=H,m=x,C=N,P=R,w=j;return u(),h(D,{class:"match-height"},{default:t(()=>[r(g,{cols:"12",md:"6"},{default:t(()=>[r(m,{title:"color",code:o.color},{default:t(()=>[a[0]||(a[0]=l("p",null,[s("Alternate colors can be applied to "),l("code",null,"v-progress-circular"),s(" using the "),l("code",null,"color"),s(" prop.")],-1)),r(f)]),_:1,__:[0]},8,["code"])]),_:1}),r(g,{cols:"12",md:"6"},{default:t(()=>[r(m,{title:"Indeterminate",code:o.indeterminate},{default:t(()=>[a[1]||(a[1]=l("p",null,[s("Using the "),l("code",null,"indeterminate"),s(" prop, a "),l("code",null,"v-progress-circular"),s(" continues to animate indefinitely.")],-1)),r(C)]),_:1,__:[1]},8,["code"])]),_:1}),r(g,{cols:"12",md:"6"},{default:t(()=>[r(m,{title:"Rotate",code:o.rotate},{default:t(()=>[a[2]||(a[2]=l("p",null,[s("The "),l("code",null,"rotate"),s(" prop gives you the ability to customize the "),l("code",null,"v-progress-circular"),s("'s origin.")],-1)),r(P)]),_:1,__:[2]},8,["code"])]),_:1}),r(g,{cols:"12",md:"6"},{default:t(()=>[r(m,{title:"Size",code:o.size},{default:t(()=>[a[3]||(a[3]=l("p",null,[s("The "),l("code",null,"size"),s(" and "),l("code",null,"width"),s(" props allow you to easily alter the size and width of the "),l("code",null,"v-progress-circular"),s(" component.")],-1)),r(w)]),_:1,__:[3]},8,["code"])]),_:1})]),_:1})}const lr=n(K,[["render",L],["__file","E:/wamp64/www/sales/frontend/src/pages/components/progress-circular.vue"]]);export{lr as default};
