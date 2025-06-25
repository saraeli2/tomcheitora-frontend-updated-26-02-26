import{_ as m,c as g,o as p,a as r,ah as t,w as a,b as s,t as h,f as _,d as V,H as B,ay as D,g as x,j as l}from"./index-BGIMdqyN.js";import{_ as M}from"./AppCardCode-C-zO1RUn.js";import{V as S,a as v}from"./VRow-BFNCnCWI.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VAvatar-CYJWVBhL.js";import"./VImg-nOKaZD-s.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";/* empty css              */const $={},I={class:"demo-space-y"};function j(d,e){return p(),g("div",I,[r(t,{color:"rgb(var(--v-theme-primary))","model-value":"75",striped:""}),r(t,{color:"rgb(var(--v-theme-success))","model-value":"55",striped:""}),r(t,{color:"rgb(var(--v-theme-warning))","model-value":"35",striped:""})])}const E=m($,[["render",j],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/progress-linear/DemoProgressLinearStriped.vue"]]),U={__name:"DemoProgressLinearSlots",setup(d,{expose:e}){e();const i=_(20),o=_(33),u=_(78),c={skill:i,knowledge:o,power:u};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}},R={class:"demo-space-y"};function T(d,e,i,o,u,c){return p(),g("div",R,[r(t,{modelValue:o.power,"onUpdate:modelValue":e[0]||(e[0]=n=>o.power=n),color:"primary",height:"8"},null,8,["modelValue"]),r(t,{modelValue:o.skill,"onUpdate:modelValue":e[1]||(e[1]=n=>o.skill=n),color:"primary",height:"20"},{default:a(({value:n})=>[s("span",null,h(Math.ceil(n))+"%",1)]),_:1},8,["modelValue"]),r(t,{modelValue:o.knowledge,"onUpdate:modelValue":e[2]||(e[2]=n=>o.knowledge=n),height:"20",color:"primary"},{default:a(()=>[s("span",null,h(Math.ceil(o.knowledge))+"%",1)]),_:1},8,["modelValue"])])}const C=m(U,[["render",T],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/progress-linear/DemoProgressLinearSlots.vue"]]),N={},O={class:"demo-space-y"};function Y(d,e){return p(),g("div",O,[r(t,{"model-value":"78",height:"8",color:"primary",rounded:!1}),r(t,{"model-value":"20",color:"primary",height:"20",rounded:!1}),r(t,{"model-value":"33",height:"20",color:"primary",rounded:!1})])}const A=m(N,[["render",Y],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/progress-linear/DemoProgressLinearRounded.vue"]]),H={};function q(d,e){return p(),V(t,{color:"primary",indeterminate:"",reverse:""})}const z=m(H,[["render",q],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/progress-linear/DemoProgressLinearReversed.vue"]]),F={};function G(d,e){return p(),V(t,{indeterminate:"",color:"primary"})}const J=m(F,[["render",G],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/progress-linear/DemoProgressLinearIndeterminate.vue"]]),K={__name:"DemoProgressLinearBuffering",setup(d,{expose:e}){e();const i=_(10),o=_(20),u=_(),c=()=>{clearInterval(u.value),u.value=setInterval(()=>{i.value+=Math.random()*10+5,o.value+=Math.random()*10+6},2e3)};B(c),D(()=>{clearInterval(u.value)}),x(i,()=>{if(i.value<100)return!1;i.value=0,o.value=10,c()});const n={modelValue:i,bufferValue:o,interval:u,startBuffer:c};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},Q={class:"demo-space-y"};function W(d,e,i,o,u,c){return p(),g("div",Q,[r(t,{modelValue:o.modelValue,"onUpdate:modelValue":e[0]||(e[0]=n=>o.modelValue=n),color:"primary","buffer-value":o.bufferValue},null,8,["modelValue","buffer-value"])])}const X=m(K,[["render",W],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/progress-linear/DemoProgressLinearBuffering.vue"]]),Z={},ee={class:"demo-space-y"};function re(d,e){return p(),g("div",ee,[r(t,{"model-value":"15",color:"primary"}),r(t,{"model-value":"30",color:"secondary"}),r(t,{"model-value":"45",color:"success"})])}const oe=m(Z,[["render",re],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/progress-linear/DemoProgressLinearColor.vue"]]),se={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`},le={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      color="success"
    />
  </div>
</template>
`},ae={ts:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`,js:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`},te={ts:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`,js:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`},ne={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`},ie={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`},de={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`},ue={__name:"progress-linear",setup(d,{expose:e}){e();const i={get buffering(){return se},get color(){return le},get indeterminate(){return ae},get reversed(){return te},get rounded(){return ne},get slots(){return ie},get striped(){return de}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function ce(d,e,i,o,u,c){const n=oe,f=M,w=X,y=J,P=z,L=A,b=C,k=E;return p(),V(S,{class:"match-height"},{default:a(()=>[r(v,{cols:"12",md:"6"},{default:a(()=>[r(f,{title:"Color",code:o.color},{default:a(()=>[e[0]||(e[0]=s("p",null,[l("Use the props "),s("code",null,"color"),l(" and "),s("code",null,"background-color"),l(" to set colors.")],-1)),r(n)]),_:1,__:[0]},8,["code"])]),_:1}),r(v,{cols:"12",md:"6"},{default:a(()=>[r(f,{title:"Buffering",code:o.buffering},{default:a(()=>[e[1]||(e[1]=s("p",null,[l("The primary value is controlled by "),s("code",null,"v-model"),l(", whereas the buffer is controlled by the "),s("code",null,"buffer-value"),l(" prop.")],-1)),r(w)]),_:1,__:[1]},8,["code"])]),_:1}),r(v,{cols:"12",md:"6"},{default:a(()=>[r(f,{title:"Indeterminate",code:o.indeterminate},{default:a(()=>[e[2]||(e[2]=s("p",null,[l("for continuously animating progress bar,use prop "),s("code",null,"indeterminate"),l(". This indicates continuous process. ")],-1)),r(y)]),_:1,__:[2]},8,["code"])]),_:1}),r(v,{cols:"12",md:"6"},{default:a(()=>[r(f,{title:"Reversed",code:o.reversed},{default:a(()=>[e[3]||(e[3]=s("p",null,[l("Use prop "),s("code",null,"reverse"),l(" to animate continuously in reverse direction. The component also has RTL support.")],-1)),r(P)]),_:1,__:[3]},8,["code"])]),_:1}),r(v,{cols:"12",md:"6"},{default:a(()=>[r(f,{title:"Rounded",code:o.rounded},{default:a(()=>[e[4]||(e[4]=s("p",null,[l(" The "),s("code",null," rounded "),l("prop is used to apply a border radius to the v-progress-linear component. By default we have set "),s("code",null,"rounded"),l(" prop true. You can disable it by using "),s("code",null,":rounded='false'"),l(". ")],-1)),r(L)]),_:1,__:[4]},8,["code"])]),_:1}),r(v,{cols:"12",md:"6"},{default:a(()=>[r(f,{title:"Slots",code:o.slots},{default:a(()=>[e[5]||(e[5]=s("p",null,[l("The v-progress-linear component will be responsive to user input when using "),s("code",null,"v-model"),l(". You can use the default slot or bind a local model to display inside of the progress.")],-1)),r(b)]),_:1,__:[5]},8,["code"])]),_:1}),r(v,{cols:"12",md:"6"},{default:a(()=>[r(f,{title:"Striped",code:o.striped},{default:a(()=>[e[6]||(e[6]=s("p",null,[l(" The "),s("code",null,"striped"),l(" prop is used to apply striped background.")],-1)),r(k)]),_:1,__:[6]},8,["code"])]),_:1})]),_:1})}const Pe=m(ue,[["render",ce],["__file","E:/wamp64/www/sales/frontend/src/pages/components/progress-linear.vue"]]);export{Pe as default};
