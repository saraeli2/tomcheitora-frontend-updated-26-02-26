import{_ as p,d as u,i as g,o as l,w as i,c as C,F as I,h as w,m as k,a,n as y,b as d,x,j as V,t as _,f,e as G,Y as q}from"./index-BGIMdqyN.js";import{a as b,V as v}from"./VRow-BFNCnCWI.js";import{V as h}from"./form-DbIa-vyG.js";import{V as R}from"./VCheckbox-TzXZlS86.js";import{a as F,V as A}from"./VRadioGroup-Q44qFrB_.js";import{_ as N}from"./CustomRadiosWithIcon-B5-UVJY1.js";import{V as T}from"./VSpacer-nyw7s6Rx.js";import{_ as L}from"./AppCardCode-C-zO1RUn.js";import{_ as J}from"./CustomRadios-BH7STh2O.js";/* empty css              */import"./VCheckboxBtn-C50DCjx7.js";import"./VSelectionControl-Dyu49DZR.js";import"./VInput-CH8dtMYl.js";import"./VImg-nOKaZD-s.js";import"./VAvatar-CYJWVBhL.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";const Y={__name:"CustomCheckboxesWithImage",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(r,{expose:o,emit:c}){o();const e=r,s=c,t={props:e,emit:s,updateSelectedOption:n=>{typeof n!="boolean"&&n!==null&&s("update:selectedCheckbox",n)}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},K=["src"];function H(r,o,c,e,s,m){return e.props.checkboxContent&&e.props.selectedCheckbox?(l(),u(v,{key:0,class:"custom-input-wrapper"},{default:i(()=>[(l(!0),C(I,null,w(e.props.checkboxContent,t=>(l(),u(b,k({key:t.value,ref_for:!0},c.gridColumn),{default:i(()=>[a(h,{class:y(["custom-input custom-checkbox rounded cursor-pointer w-100",e.props.selectedCheckbox.includes(t.value)?"active":""])},{default:i(()=>[d("div",null,[a(R,{id:`custom-checkbox-with-img-${t.value}`,"model-value":e.props.selectedCheckbox,value:t.value,"onUpdate:modelValue":e.updateSelectedOption},null,8,["id","model-value","value"])]),d("img",{src:t.bgImage,alt:"bg-img",class:"custom-checkbox-image"},null,8,K)]),_:2},1032,["class"]),t.label||r.$slots.label?(l(),u(h,{key:0,for:`custom-checkbox-with-img-${t.value}`,class:"cursor-pointer"},{default:i(()=>[x(r.$slots,"label",{label:t.label},()=>[V(_(t.label),1)],!0)]),_:2},1032,["for"])):g("",!0)]),_:2},1040))),128))]),_:3})):g("",!0)}const X=p(Y,[["render",H],["__scopeId","data-v-893e8228"],["__file","E:/wamp64/www/sales/frontend/src/@core/components/app-form-elements/CustomCheckboxesWithImage.vue"]]),S="/assets/custom-checkbox-img-1-CN62rwL8.png",W="/assets/custom-checkbox-img-2-CESZ7JlS.png",$="/assets/custom-checkbox-img-3-CFGEoD3K.png",Z={__name:"DemoCustomInputCustomCheckboxesWithImage",setup(r,{expose:o}){o();const c=[{bgImage:S,value:"basic"},{bgImage:W,value:"premium"},{bgImage:$,value:"enterprise"}],e=f(["basic"]),s={checkboxContent:c,selectedCheckbox:e,get bg1(){return S},get bg2(){return W},get bg3(){return $}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function M(r,o,c,e,s,m){const t=X;return l(),u(t,{"selected-checkbox":e.selectedCheckbox,"onUpdate:selectedCheckbox":o[0]||(o[0]=n=>e.selectedCheckbox=n),"checkbox-content":e.checkboxContent,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}const Q=p(Z,[["render",M],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/custom-input/DemoCustomInputCustomCheckboxesWithImage.vue"]]),ee={__name:"CustomRadiosWithImage",props:{selectedRadio:{type:String,required:!0},radioContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedRadio"],setup(r,{expose:o,emit:c}){o();const e=r,s=c,t={props:e,emit:s,updateSelectedOption:n=>{n!==null&&s("update:selectedRadio",n)}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},te=["src"];function oe(r,o,c,e,s,m){return e.props.radioContent?(l(),u(A,{key:0,"model-value":e.props.selectedRadio,class:"custom-input-wrapper","onUpdate:modelValue":e.updateSelectedOption},{default:i(()=>[a(v,null,{default:i(()=>[(l(!0),C(I,null,w(e.props.radioContent,t=>(l(),u(b,k({key:t.bgImage,ref_for:!0},c.gridColumn),{default:i(()=>[a(h,{class:y(["custom-input custom-radio rounded cursor-pointer w-100",e.props.selectedRadio===t.value?"active":""])},{default:i(()=>[x(r.$slots,"content",{item:t},()=>[typeof t.bgImage=="object"?(l(),u(G(t.bgImage),{key:0,class:"custom-radio-image"})):(l(),C("img",{key:1,src:t.bgImage,alt:"bg-img",class:"custom-radio-image"},null,8,te))],!0),a(F,{id:`custom-radio-with-img-${t.value}`,name:`custom-radio-with-img-${t.value}`,value:t.value},null,8,["id","name","value"])]),_:2},1032,["class"]),t.label||r.$slots.label?(l(),u(h,{key:0,for:`custom-radio-with-img-${t.value}`,class:"cursor-pointer"},{default:i(()=>[x(r.$slots,"label",{label:t.label},()=>[V(_(t.label),1)],!0)]),_:2},1032,["for"])):g("",!0)]),_:2},1040))),128))]),_:3})]),_:3},8,["model-value"])):g("",!0)}const se=p(ee,[["render",oe],["__scopeId","data-v-471a152c"],["__file","E:/wamp64/www/sales/frontend/src/@core/components/app-form-elements/CustomRadiosWithImage.vue"]]),j="/assets/custom-radio-img-1-YrBKH0Sm.png",D="/assets/custom-radio-img-2-Ph1YXgv1.png",O="/assets/custom-radio-img-3-Bg8gANbN.png",ce={__name:"DemoCustomInputCustomRadiosWithImage",setup(r,{expose:o}){o();const c=[{bgImage:j,value:"basic"},{bgImage:D,value:"premium"},{bgImage:O,value:"enterprise"}],e=f("basic"),s={radioContent:c,selectedRadio:e,get bg1(){return j},get bg2(){return D},get bg3(){return O}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function ne(r,o,c,e,s,m){const t=se;return l(),u(t,{"selected-radio":e.selectedRadio,"onUpdate:selectedRadio":o[0]||(o[0]=n=>e.selectedRadio=n),"radio-content":e.radioContent,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}const re=p(ce,[["render",ne],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/custom-input/DemoCustomInputCustomRadiosWithImage.vue"]]),ae={__name:"CustomCheckboxesWithIcon",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(r,{expose:o,emit:c}){o();const e=r,s=c,t={props:e,emit:s,updateSelectedOption:n=>{typeof n!="boolean"&&n!==null&&s("update:selectedCheckbox",n)}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},ie={class:"d-flex flex-column align-center text-center gap-2"},le={class:"cr-title text-base"},ue={class:"text-sm clamp-text mb-0"};function me(r,o,c,e,s,m){return e.props.checkboxContent&&e.props.selectedCheckbox?(l(),u(v,{key:0,class:"custom-input-wrapper"},{default:i(()=>[(l(!0),C(I,null,w(e.props.checkboxContent,t=>(l(),u(b,k({key:t.title,ref_for:!0},c.gridColumn),{default:i(()=>[a(h,{class:y(["custom-input custom-checkbox-icon rounded cursor-pointer",e.props.selectedCheckbox.includes(t.value)?"active":""])},{default:i(()=>[x(r.$slots,"default",{item:t},()=>[d("div",ie,[a(q,k({ref_for:!0},t.icon,{class:"text-high-emphasis"}),null,16),d("h6",le,_(t.title),1),d("p",ue,_(t.desc),1)])],!0),d("div",null,[a(R,{"model-value":e.props.selectedCheckbox,value:t.value,"onUpdate:modelValue":e.updateSelectedOption},null,8,["model-value","value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):g("",!0)}const de=p(ae,[["render",me],["__scopeId","data-v-c2d397d2"],["__file","E:/wamp64/www/sales/frontend/src/@core/components/app-form-elements/CustomCheckboxesWithIcon.vue"]]),pe={__name:"DemoCustomInputCustomCheckboxesWithIcon",setup(r,{expose:o}){o();const c=[{title:"Backup",desc:"Backup every file from your project.",value:"backup",icon:{icon:"tabler-server-2",size:"28"}},{title:"Encrypt",desc:"Translate your data to encrypted text.",value:"encrypt",icon:{icon:"tabler-ban",size:"28"}},{title:"Site Lock",desc:"Security tool to protect your website.",value:"site-lock",icon:{icon:"tabler-lock",size:"28"}}],e=f(["backup"]),s={checkboxContent:c,selectedCheckbox:e};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function be(r,o,c,e,s,m){const t=de;return l(),u(t,{"selected-checkbox":e.selectedCheckbox,"onUpdate:selectedCheckbox":o[0]||(o[0]=n=>e.selectedCheckbox=n),"checkbox-content":e.checkboxContent,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}const _e=p(pe,[["render",be],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/custom-input/DemoCustomInputCustomCheckboxesWithIcon.vue"]]),ge={__name:"DemoCustomInputCustomRadiosWithIcon",setup(r,{expose:o}){o();const c=[{title:"Starter",desc:"For freelancers who work with multiple clients",value:"starter",icon:{icon:"tabler-rocket",size:"28"}},{title:"Personal",desc:"Join our talented community of talented digital agencies",value:"personal",icon:{icon:"tabler-star",size:"28"}},{title:"Enterprise",desc:"Team plan for free upto 15 seats",value:"enterprise",icon:{icon:"tabler-crown",size:"28"}}],e=f("starter"),s={radioContent:c,selectedRadio:e};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function Ce(r,o,c,e,s,m){const t=N;return l(),u(t,{"selected-radio":e.selectedRadio,"onUpdate:selectedRadio":o[0]||(o[0]=n=>e.selectedRadio=n),"radio-content":e.radioContent,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}const he=p(ge,[["render",Ce],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/custom-input/DemoCustomInputCustomRadiosWithIcon.vue"]]),fe={__name:"CustomCheckboxes",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(r,{expose:o,emit:c}){o();const e=r,s=c,t={props:e,emit:s,updateSelectedOption:n=>{typeof n!="boolean"&&n!==null&&s("update:selectedCheckbox",n)}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},ke={class:"flex-grow-1"},xe={class:"d-flex align-center mb-2"},ve={class:"cr-title text-base"},Ie={key:0,class:"text-disabled text-body-2"},we={class:"text-sm mb-0"};function ye(r,o,c,e,s,m){return e.props.checkboxContent&&e.props.selectedCheckbox?(l(),u(v,{key:0,class:"custom-input-wrapper"},{default:i(()=>[(l(!0),C(I,null,w(e.props.checkboxContent,t=>(l(),u(b,k({key:t.title,ref_for:!0},c.gridColumn),{default:i(()=>[a(h,{class:y(["custom-input custom-checkbox rounded cursor-pointer",e.props.selectedCheckbox.includes(t.value)?"active":""])},{default:i(()=>[d("div",null,[a(R,{"model-value":e.props.selectedCheckbox,value:t.value,"onUpdate:modelValue":e.updateSelectedOption},null,8,["model-value","value"])]),x(r.$slots,"default",{item:t},()=>[d("div",ke,[d("div",xe,[d("h6",ve,_(t.title),1),a(T),t.subtitle?(l(),C("span",Ie,_(t.subtitle),1)):g("",!0)]),d("p",we,_(t.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):g("",!0)}const Re=p(fe,[["render",ye],["__scopeId","data-v-6341abab"],["__file","E:/wamp64/www/sales/frontend/src/@core/components/app-form-elements/CustomCheckboxes.vue"]]),Se={__name:"DemoCustomInputCustomCheckboxes",setup(r,{expose:o}){o();const c=[{title:"Discount",subtitle:"20%",desc:"Wow! Get 20% off on your next purchase!",value:"discount"},{title:"Updates",subtitle:"Free",desc:"Get Updates regarding related products.",value:"updates"}],e=f(["discount"]),s={checkboxContent:c,selectedCheckbox:e};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function We(r,o,c,e,s,m){const t=Re;return l(),u(t,{"selected-checkbox":e.selectedCheckbox,"onUpdate:selectedCheckbox":o[0]||(o[0]=n=>e.selectedCheckbox=n),"checkbox-content":e.checkboxContent,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-checkbox"])}const $e=p(Se,[["render",We],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/custom-input/DemoCustomInputCustomCheckboxes.vue"]]),je={__name:"DemoCustomInputCustomRadios",setup(r,{expose:o}){o();const c=[{title:"Basic",subtitle:"Free",desc:"Get 1 project with 1 team member.",value:"basic"},{title:"Premium",subtitle:"$45.80",value:"premium",desc:"Get 5 projects with 5 team members."}],e=f("basic"),s={radioContent:c,selectedRadio:e};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function De(r,o,c,e,s,m){const t=J;return l(),u(t,{"selected-radio":e.selectedRadio,"onUpdate:selectedRadio":o[0]||(o[0]=n=>e.selectedRadio=n),"radio-content":e.radioContent,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])}const Oe=p(je,[["render",De],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/custom-input/DemoCustomInputCustomRadios.vue"]]),Ve={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},Ee={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: { icon: 'tabler-server-2', size: '28' },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: { icon: 'tabler-ban', size: '28' },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: { icon: 'tabler-lock', size: '28' },
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: {
      icon: 'tabler-server-2',
      size: '28',
    },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: {
      icon: 'tabler-ban',
      size: '28',
    },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: {
      icon: 'tabler-lock',
      size: '28',
    },
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},ze={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Pe={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},Ue={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: { icon: 'tabler-rocket', size: '28' },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: { icon: 'tabler-star', size: '28' },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: { icon: 'tabler-crown', size: '28' },
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: {
      icon: 'tabler-rocket',
      size: '28',
    },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: {
      icon: 'tabler-star',
      size: '28',
    },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: {
      icon: 'tabler-crown',
      size: '28',
    },
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Be={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Ge={__name:"custom-input",setup(r,{expose:o}){o();const c={get customCheckboxes(){return Ve},get customCheckboxesWithIcon(){return Ee},get customCheckboxesWithImage(){return ze},get customRadios(){return Pe},get customRadiosWithIcon(){return Ue},get customRadiosWithImage(){return Be}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function qe(r,o,c,e,s,m){const t=Oe,n=L,E=$e,z=he,P=_e,U=re,B=Q;return l(),u(v,null,{default:i(()=>[a(b,{cols:"12",md:"6"},{default:i(()=>[a(n,{title:"Custom Radios",code:e.customRadios},{default:i(()=>[a(t)]),_:1},8,["code"])]),_:1}),a(b,{cols:"12",md:"6"},{default:i(()=>[a(n,{title:"Custom Checkboxes",code:e.customCheckboxes},{default:i(()=>[a(E)]),_:1},8,["code"])]),_:1}),a(b,{cols:"12",md:"6"},{default:i(()=>[a(n,{title:"Custom Radios With Icon",code:e.customRadiosWithIcon},{default:i(()=>[a(z)]),_:1},8,["code"])]),_:1}),a(b,{cols:"12",md:"6"},{default:i(()=>[a(n,{title:"Custom Checkboxes With Icon",code:e.customCheckboxesWithIcon},{default:i(()=>[a(P)]),_:1},8,["code"])]),_:1}),a(b,{cols:"12",md:"6"},{default:i(()=>[a(n,{title:"Custom Radios With Image",code:e.customRadiosWithImage},{default:i(()=>[a(U)]),_:1},8,["code"])]),_:1}),a(b,{cols:"12",md:"6"},{default:i(()=>[a(n,{title:"Custom Checkboxes With Image",code:e.customCheckboxesWithImage},{default:i(()=>[a(B)]),_:1},8,["code"])]),_:1})]),_:1})}const rt=p(Ge,[["render",qe],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/custom-input.vue"]]);export{rt as default};
