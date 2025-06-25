import{ab as X,ac as Z,f as g,aD as ee,aJ as le,W as N,ao as se,a as r,F as te,m as ae,_ as w,d as R,o as h,w as m,Y as re,b as c,j as f}from"./index-BGIMdqyN.js";import{u as ne,a as oe,V as ue,b as Y,m as ie,g as J}from"./VSliderTrack-c1UIYGry.js";import{V as q,m as de}from"./VInput-CH8dtMYl.js";import{a as ce,V as me,b as pe}from"./form-DbIa-vyG.js";import{_ as _e}from"./AppCardCode-C-zO1RUn.js";import{V as fe,a as $}from"./VRow-BFNCnCWI.js";import"./VImg-nOKaZD-s.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VAvatar-CYJWVBhL.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";/* empty css              */const ve=Z({...pe(),...de(),...ie(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),x=X()({name:"VRangeSlider",props:ve(),emits:{"update:focused":s=>!0,"update:modelValue":s=>!0,end:s=>!0,start:s=>!0},setup(s,e){let{slots:t,emit:l}=e;const n=g(),o=g(),u=g(),{rtlClasses:S}=ee();function U(p){if(!n.value||!o.value)return;const _=J(p,n.value.$el,s.direction),d=J(p,o.value.$el,s.direction),i=Math.abs(_),b=Math.abs(d);return i<b||i===b&&_<0?n.value.$el:o.value.$el}const F=ne(s),a=le(s,"modelValue",void 0,p=>p!=null&&p.length?p.map(_=>F.roundValue(_)):[0,0]),{activeThumbRef:v,hasLabels:E,max:B,min:k,mousePressed:G,onSliderMousedown:H,onSliderTouchstart:K,position:L,trackContainerRef:Q,readonly:M}=oe({props:s,steps:F,onSliderStart:()=>{l("start",a.value)},onSliderEnd:p=>{var i;let{value:_}=p;const d=v.value===((i=n.value)==null?void 0:i.$el)?[_,a.value[1]]:[a.value[0],_];!s.strict&&d[0]<d[1]&&(a.value=d),l("end",a.value)},onSliderMove:p=>{var b,y,D,V;let{value:_}=p;const[d,i]=a.value;!s.strict&&d===i&&d!==k.value&&(v.value=_>d?(b=o.value)==null?void 0:b.$el:(y=n.value)==null?void 0:y.$el,(D=v.value)==null||D.focus()),v.value===((V=n.value)==null?void 0:V.$el)?a.value=[Math.min(_,i),i]:a.value=[d,Math.max(d,_)]},getActiveThumb:U}),{isFocused:O,focus:I,blur:z}=ce(s),W=N(()=>L(a.value[0])),A=N(()=>L(a.value[1]));return se(()=>{const p=q.filterProps(s),_=!!(s.label||t.label||t.prepend);return r(q,ae({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!t["tick-label"]||E.value,"v-slider--focused":O.value,"v-slider--pressed":G.value,"v-slider--disabled":s.disabled},S.value,s.class],style:s.style,ref:u},p,{focused:O.value}),{...t,prepend:_?d=>{var i,b;return r(te,null,[((i=t.label)==null?void 0:i.call(t,d))??(s.label?r(me,{class:"v-slider__label",text:s.label},null):void 0),(b=t.prepend)==null?void 0:b.call(t,d)])}:void 0,default:d=>{var y,D;let{id:i,messagesId:b}=d;return r("div",{class:"v-slider__container",onMousedown:M.value?void 0:H,onTouchstartPassive:M.value?void 0:K},[r("input",{id:`${i.value}_start`,name:s.name||i.value,disabled:!!s.disabled,readonly:!!s.readonly,tabindex:"-1",value:a.value[0]},null),r("input",{id:`${i.value}_stop`,name:s.name||i.value,disabled:!!s.disabled,readonly:!!s.readonly,tabindex:"-1",value:a.value[1]},null),r(ue,{ref:Q,start:W.value,stop:A.value},{"tick-label":t["tick-label"]}),r(Y,{ref:n,"aria-describedby":b.value,focused:O&&v.value===((y=n.value)==null?void 0:y.$el),modelValue:a.value[0],"onUpdate:modelValue":V=>a.value=[V,a.value[1]],onFocus:V=>{var P,T,j,C;I(),v.value=(P=n.value)==null?void 0:P.$el,B.value!==k.value&&a.value[0]===a.value[1]&&a.value[1]===k.value&&V.relatedTarget!==((T=o.value)==null?void 0:T.$el)&&((j=n.value)==null||j.$el.blur(),(C=o.value)==null||C.$el.focus())},onBlur:()=>{z(),v.value=void 0},min:k.value,max:a.value[1],position:W.value,ripple:s.ripple},{"thumb-label":t["thumb-label"]}),r(Y,{ref:o,"aria-describedby":b.value,focused:O&&v.value===((D=o.value)==null?void 0:D.$el),modelValue:a.value[1],"onUpdate:modelValue":V=>a.value=[a.value[0],V],onFocus:V=>{var P,T,j,C;I(),v.value=(P=o.value)==null?void 0:P.$el,B.value!==k.value&&a.value[0]===a.value[1]&&a.value[0]===B.value&&V.relatedTarget!==((T=n.value)==null?void 0:T.$el)&&((j=o.value)==null||j.$el.blur(),(C=n.value)==null||C.$el.focus())},onBlur:()=>{z(),v.value=void 0},min:a.value[0],max:B.value,position:A.value,ripple:s.ripple},{"thumb-label":t["thumb-label"]})])}})}),{}}}),be={__name:"DemoRangeSliderVertical",setup(s,{expose:e}){e();const l={sliderValues:g([20,40])};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function Ve(s,e,t,l,n,o){return h(),R(x,{modelValue:l.sliderValues,"onUpdate:modelValue":e[0]||(e[0]=u=>l.sliderValues=u),direction:"vertical"},null,8,["modelValue"])}const ge=w(be,[["render",Ve],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/range-slider/DemoRangeSliderVertical.vue"]]),Se={__name:"DemoRangeSliderThumbLabel",setup(s,{expose:e}){e();const t=["Winter","Spring","Summer","Fall"],l=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],n=g([1,2]),o={seasons:t,icons:l,sliderValues:n};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function we(s,e,t,l,n,o){return h(),R(x,{modelValue:l.sliderValues,"onUpdate:modelValue":e[0]||(e[0]=u=>l.sliderValues=u),tick:l.seasons,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":m(({modelValue:u})=>[r(re,{icon:l.icons[u]},null,8,["icon"])]),_:1},8,["modelValue"])}const Re=w(Se,[["render",we],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/range-slider/DemoRangeSliderThumbLabel.vue"]]),he={__name:"DemoRangeSliderStep",setup(s,{expose:e}){e();const l={sliderValues:g([20,40])};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function $e(s,e,t,l,n,o){return h(),R(x,{modelValue:l.sliderValues,"onUpdate:modelValue":e[0]||(e[0]=u=>l.sliderValues=u),step:"10"},null,8,["modelValue"])}const xe=w(he,[["render",$e],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/range-slider/DemoRangeSliderStep.vue"]]),ke={__name:"DemoRangeSliderColor",setup(s,{expose:e}){e();const l={sliderValues:g([10,60])};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function ye(s,e,t,l,n,o){return h(),R(x,{modelValue:l.sliderValues,"onUpdate:modelValue":e[0]||(e[0]=u=>l.sliderValues=u),color:"success"},null,8,["modelValue"])}const De=w(ke,[["render",ye],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/range-slider/DemoRangeSliderColor.vue"]]),Pe={__name:"DemoRangeSliderDisabled",setup(s,{expose:e}){e();const l={slidersValues:g([30,60])};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function Te(s,e,t,l,n,o){return h(),R(x,{modelValue:l.slidersValues,"onUpdate:modelValue":e[0]||(e[0]=u=>l.slidersValues=u),disabled:"",label:"Disabled"},null,8,["modelValue"])}const je=w(Pe,[["render",Te],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/range-slider/DemoRangeSliderDisabled.vue"]]),Ce={__name:"DemoRangeSliderBasic",setup(s,{expose:e}){e();const l={sliderValues:g([10,60])};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function Fe(s,e,t,l,n,o){return h(),R(x,{modelValue:l.sliderValues,"onUpdate:modelValue":e[0]||(e[0]=u=>l.sliderValues=u)},null,8,["modelValue"])}const Be=w(Ce,[["render",Fe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/range-slider/DemoRangeSliderBasic.vue"]]),Oe={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},Ue={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`},Ee={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},Le={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},Me={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},Ie={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},ze={__name:"range-slider",setup(s,{expose:e}){e();const t={get basic(){return Oe},get color(){return Ue},get disabled(){return Ee},get step(){return Le},get thumbLabel(){return Me},get vertical(){return Ie}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function We(s,e,t,l,n,o){const u=Be,S=_e,U=je,F=De,a=xe,v=Re,E=ge;return h(),R(fe,null,{default:m(()=>[r($,{cols:"12",md:"6"},{default:m(()=>[r(S,{title:"Basic",code:l.basic},{default:m(()=>[e[0]||(e[0]=c("p",null,[f("The "),c("code",null,"v-slider"),f(" component is a better visualization of the number input.")],-1)),r(u)]),_:1,__:[0]},8,["code"])]),_:1}),r($,{cols:"12",md:"6"},{default:m(()=>[r(S,{title:"Disabled",code:l.disabled},{default:m(()=>[e[1]||(e[1]=c("p",null,[f("You cannot interact with "),c("code",null,"disabled"),f(" sliders.")],-1)),r(U)]),_:1,__:[1]},8,["code"])]),_:1}),r($,{cols:"12",md:"6"},{default:m(()=>[r(S,{title:"Color",code:l.color},{default:m(()=>[e[2]||(e[2]=c("p",null,[f("Use "),c("code",null,"color"),f(" prop to the sets the slider color. "),c("code",null,"track-color"),f(" prop to sets the color of slider's unfilled track.")],-1)),r(F)]),_:1,__:[2]},8,["code"])]),_:1}),r($,{cols:"12",md:"6"},{default:m(()=>[r(S,{title:"Step",code:l.step},{default:m(()=>[e[3]||(e[3]=c("p",null,[c("code",null,"v-range-slider"),f(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1)),r(a)]),_:1,__:[3]},8,["code"])]),_:1}),r($,{cols:"12",md:"6"},{default:m(()=>[r(S,{title:"Thumb label",code:l.thumbLabel},{default:m(()=>[e[4]||(e[4]=c("p",null,[f(" Using the "),c("code",null,"tick-labels"),f(" prop along with the "),c("code",null,"thumb-label"),f(" slot, you can create a very customized solution. ")],-1)),r(v)]),_:1,__:[4]},8,["code"])]),_:1}),r($,{cols:"12",md:"6"},{default:m(()=>[r(S,{title:"Vertical",code:l.vertical},{default:m(()=>[e[5]||(e[5]=c("p",null,[f("You can use the "),c("code",null,"vertical"),f(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1)),r(E)]),_:1,__:[5]},8,["code"])]),_:1})]),_:1})}const sl=w(ze,[["render",We],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/range-slider.vue"]]);export{sl as default};
