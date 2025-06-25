import{_,c as f,o as w,a as l,f as p,d as S,w as c,j as a,b1 as L,b as n,t as D,F as b,h as A}from"./index-BGIMdqyN.js";import{V as d}from"./VSwitch-G--hzIdu.js";import{_ as F}from"./AppCardCode-C-zO1RUn.js";import{V as C,a as h}from"./VRow-BFNCnCWI.js";import"./VInput-CH8dtMYl.js";import"./form-DbIa-vyG.js";import"./VImg-nOKaZD-s.js";import"./VSelectionControl-Dyu49DZR.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VAvatar-CYJWVBhL.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";/* empty css              */const M={__name:"DemoSwitchStates",setup(r,{expose:t}){t();const o=p("on"),e=p("on"),i=p(!0),m={switchOn:o,switchOnDisabled:e,switchOnLoading:i};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}},P={class:"demo-space-x"};function T(r,t,o,e,i,m){return w(),f("div",P,[l(d,{modelValue:e.switchOn,"onUpdate:modelValue":t[0]||(t[0]=s=>e.switchOn=s),value:"on",label:"On"},null,8,["modelValue"]),l(d,{label:"Off"}),l(d,{modelValue:e.switchOnDisabled,"onUpdate:modelValue":t[1]||(t[1]=s=>e.switchOnDisabled=s),value:"on",disabled:"",label:"On disabled"},null,8,["modelValue"]),l(d,{disabled:"",label:"Off disabled"}),l(d,{modelValue:e.switchOnLoading,"onUpdate:modelValue":t[2]||(t[2]=s=>e.switchOnLoading=s),loading:"warning",label:`${e.switchOnLoading?"On":"Off"} loading`},null,8,["modelValue","label"])])}const U=_(M,[["render",T],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/switch/DemoSwitchStates.vue"]]),j={__name:"DemoSwitchTrueAndFalseValue",setup(r,{expose:t}){t();const o=p(1),e=p("Show"),i={switch1:o,switch2:e};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},E={class:"demo-space-x"};function J(r,t,o,e,i,m){return w(),f("div",E,[l(d,{modelValue:e.switch1,"onUpdate:modelValue":t[0]||(t[0]=s=>e.switch1=s),label:e.switch1.toString(),"true-value":1,"false-value":0},null,8,["modelValue","label"]),l(d,{modelValue:e.switch2,"onUpdate:modelValue":t[1]||(t[1]=s=>e.switch2=s),label:e.switch2.toString(),"true-value":"Show","false-value":"Hide"},null,8,["modelValue","label"])])}const $=_(j,[["render",J],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/switch/DemoSwitchTrueAndFalseValue.vue"]]),z={__name:"DemoSwitchLabelSlot",setup(r,{expose:t}){t();const e={switchMe:p(!1)};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function I(r,t,o,e,i,m){return w(),S(d,{modelValue:e.switchMe,"onUpdate:modelValue":t[0]||(t[0]=s=>e.switchMe=s)},{label:c(()=>[t[1]||(t[1]=a(" Turn on the progress: ")),l(L,{indeterminate:e.switchMe,class:"ms-2"},null,8,["indeterminate"])]),_:1},8,["modelValue"])}const B=_(z,[["render",I],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/switch/DemoSwitchLabelSlot.vue"]]),k={__name:"DemoSwitchModelAsArray",setup(r,{expose:t}){t();const e={people:p(["John"])};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},W={class:"demo-space-x"},H={class:"mt-2 mb-0"};function N(r,t,o,e,i,m){return w(),f(b,null,[n("div",W,[l(d,{modelValue:e.people,"onUpdate:modelValue":t[0]||(t[0]=s=>e.people=s),label:"John",value:"John"},null,8,["modelValue"]),l(d,{modelValue:e.people,"onUpdate:modelValue":t[1]||(t[1]=s=>e.people=s),label:"Jacob",value:"Jacob"},null,8,["modelValue"])]),n("p",H,D(e.people),1)],64)}const R=_(k,[["render",N],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/switch/DemoSwitchModelAsArray.vue"]]),q={__name:"DemoSwitchColors",setup(r,{expose:t}){t();const o=p(["Primary","Secondary","Success","Info","Warning","Error"]),e=p(["Primary","Secondary","Success","Info","Warning","Error"]),i={selectedSwitch:o,switches:e};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},G={class:"demo-space-x"};function K(r,t,o,e,i,m){return w(),f("div",G,[(w(!0),f(b,null,A(e.switches,s=>(w(),S(d,{key:s,modelValue:e.selectedSwitch,"onUpdate:modelValue":t[0]||(t[0]=u=>e.selectedSwitch=u),label:s,value:s,color:s.toLowerCase()},null,8,["modelValue","label","value","color"]))),128))])}const Q=_(q,[["render",K],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/switch/DemoSwitchColors.vue"]]),X={__name:"DemoSwitchInset",setup(r,{expose:t}){t();const o=p(!0),e=p(!1),i={insetSwitch1:o,insetSwitch2:e};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},Y={class:"demo-space-x"};function Z(r,t,o,e,i,m){return w(),f("div",Y,[l(d,{modelValue:e.insetSwitch1,"onUpdate:modelValue":t[0]||(t[0]=s=>e.insetSwitch1=s),label:`Switch 1: ${e.insetSwitch1.toString()}`},null,8,["modelValue","label"]),l(d,{modelValue:e.insetSwitch2,"onUpdate:modelValue":t[1]||(t[1]=s=>e.insetSwitch2=s),label:`Switch 2: ${e.insetSwitch2.toString()}`},null,8,["modelValue","label"])])}const ee=_(X,[["render",Z],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/switch/DemoSwitchInset.vue"]]),te={__name:"DemoSwitchBasic",setup(r,{expose:t}){t();const o=p(!0),e=p(!1),m={toggleSwitch:o,toggleFalseSwitch:e,capitalizedLabel:s=>{const u=s.toString();return u.charAt(0).toUpperCase()+u.slice(1)}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}},le={class:"demo-space-x"};function se(r,t,o,e,i,m){return w(),f("div",le,[l(d,{modelValue:e.toggleSwitch,"onUpdate:modelValue":t[0]||(t[0]=s=>e.toggleSwitch=s),label:e.capitalizedLabel(e.toggleSwitch)},null,8,["modelValue","label"]),l(d,{modelValue:e.toggleFalseSwitch,"onUpdate:modelValue":t[1]||(t[1]=s=>e.toggleFalseSwitch=s),label:e.capitalizedLabel(e.toggleFalseSwitch)},null,8,["modelValue","label"])])}const oe=_(te,[["render",se],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/switch/DemoSwitchBasic.vue"]]),ne={ts:`<script lang="ts" setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`,js:`<script setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`},ae={ts:`<script lang="ts" setup>
const selectedSwitch = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const switches = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`,js:`<script setup>
const selectedSwitch = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const switches = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`},ie={ts:`<script lang="ts" setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`},ce={ts:`<script lang="ts" setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`,js:`<script setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`},re={ts:`<script lang="ts" setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`,js:`<script setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`},de={ts:`<script setup lang="ts">
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      :label="\`\${switchOnLoading ? 'On' : 'Off'} loading\`"
    />
  </div>
</template>
`,js:`<script setup>
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      :label="\`\${switchOnLoading ? 'On' : 'Off'} loading\`"
    />
  </div>
</template>
`},me={ts:`<script lang="ts" setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`,js:`<script setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`},pe={__name:"switch",setup(r,{expose:t}){t();const o={get basic(){return ne},get colors(){return ae},get inset(){return ie},get labelSlot(){return ce},get modelAsArray(){return re},get states(){return de},get trueAndFalseValue(){return me}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function ue(r,t,o,e,i,m){const s=oe,u=F,v=ee,g=Q,V=R,O=B,x=$,y=U;return w(),S(C,null,{default:c(()=>[l(h,{cols:"12",md:"6"},{default:c(()=>[l(u,{title:"Basic",code:e.basic},{default:c(()=>[t[0]||(t[0]=n("p",null,[a("A "),n("code",null,"v-switch"),a(" in its simplest form provides a toggle between 2 values.")],-1)),l(s)]),_:1,__:[0]},8,["code"])]),_:1}),l(h,{cols:"12",md:"6"},{default:c(()=>[l(u,{title:"Inset",code:e.inset},{default:c(()=>[t[1]||(t[1]=n("p",null,[a("To change the default "),n("code",null,"inset"),a(" switch, simply modify the inset prop to a "),n("code",null,"false"),a(" value.")],-1)),l(v)]),_:1,__:[1]},8,["code"])]),_:1}),l(h,{cols:"12",md:"6"},{default:c(()=>[l(u,{title:"Colors",code:e.colors},{default:c(()=>[t[2]||(t[2]=n("p",null,[a("Switches can be colored by using any of the builtin colors and contextual names using the "),n("code",null,"color"),a(" prop.")],-1)),l(g)]),_:1,__:[2]},8,["code"])]),_:1}),l(h,{cols:"12",md:"6"},{default:c(()=>[l(u,{title:"Model as array",code:e.modelAsArray},{default:c(()=>[t[3]||(t[3]=n("p",null,[a("Multiple "),n("code",null,"v-switch"),a("'s can share the same "),n("code",null,"v-model"),a(" by using an array.")],-1)),l(V)]),_:1,__:[3]},8,["code"])]),_:1}),l(h,{cols:"12",md:"6"},{default:c(()=>[l(u,{title:"Label slot",code:e.labelSlot},{default:c(()=>[t[4]||(t[4]=n("p",null,[a("Switch labels can be defined in "),n("code",null,"label"),a(" slot - that will allow to use HTML content.")],-1)),l(O)]),_:1,__:[4]},8,["code"])]),_:1}),l(h,{cols:"12",md:"6"},{default:c(()=>[l(u,{title:"True and False Value",code:e.trueAndFalseValue},{default:c(()=>[t[5]||(t[5]=n("p",null,[a(" Use "),n("code",null,"false-value"),a(" and "),n("code",null,"true-value"),a(" prop to sets value for truthy and falsy state ")],-1)),l(x)]),_:1,__:[5]},8,["code"])]),_:1}),l(h,{cols:"12",md:"6"},{default:c(()=>[l(u,{title:"States",code:e.states},{default:c(()=>[t[6]||(t[6]=n("p",null,[n("code",null,"v-switch"),a(" can have different states such as "),n("code",null,"default"),a(", "),n("code",null,"disabled"),a(", and "),n("code",null,"loading"),a(".")],-1)),l(y)]),_:1,__:[6]},8,["code"])]),_:1})]),_:1})}const Ae=_(pe,[["render",ue],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/switch.vue"]]);export{Ae as default};
