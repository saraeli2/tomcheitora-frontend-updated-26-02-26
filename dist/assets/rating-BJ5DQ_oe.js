import{_,d as g,o as d,w as r,a as n,Y as j,m as $,f,c as w,b as l,t as E,F as V,h as I,j as s}from"./index-BGIMdqyN.js";import{V as c}from"./VRating-BHCsqqSL.js";import{V as U}from"./VSlider-DQ2_r4yS.js";import{_ as k}from"./AppCardCode-C-zO1RUn.js";import{V as F,a as u}from"./VRow-BFNCnCWI.js";import"./VSliderTrack-c1UIYGry.js";import"./VInput-CH8dtMYl.js";import"./form-DbIa-vyG.js";import"./VImg-nOKaZD-s.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VAvatar-CYJWVBhL.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";/* empty css              */const P={__name:"DemoRatingItemSlot",setup(a,{expose:e}){e();const t={rating:f(4.5)};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function B(a,e,i,t,p,v){return d(),g(c,{modelValue:t.rating,"onUpdate:modelValue":e[0]||(e[0]=o=>t.rating=o)},{item:r(o=>[n(j,$(o,{size:25,color:o.isFilled?"success":"secondary",class:"me-3",icon:o.isFilled?"tabler-mood-smile-beam":"tabler-mood-sad"}),null,16,["color","icon"])]),_:1},8,["modelValue"])}const O=_(P,[["render",B],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/rating/DemoRatingItemSlot.vue"]]),L={__name:"DemoRatingIncremented",setup(a,{expose:e}){e();const t={rating:f(4.5)};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function T(a,e,i,t,p,v){return d(),g(c,{modelValue:t.rating,"onUpdate:modelValue":e[0]||(e[0]=o=>t.rating=o),"half-increments":"",hover:""},null,8,["modelValue"])}const H=_(L,[["render",T],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/rating/DemoRatingIncremented.vue"]]),M={};function N(a,e){return d(),g(c,{hover:""})}const A=_(M,[["render",N],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/rating/DemoRatingHover.vue"]]),Y={};function q(a,e){return d(),g(c,{readonly:"","model-value":4})}const G=_(Y,[["render",q],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/rating/DemoRatingReadonly.vue"]]),J={};function K(a,e){return d(),g(c,{clearable:""})}const Q=_(J,[["render",K],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/rating/DemoRatingClearable.vue"]]),W={__name:"DemoRatingLength",setup(a,{expose:e}){e();const i=f(5),t=f(2),p={length:i,rating:t};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}},X={class:"font-weight-medium mb-0"};function Z(a,e,i,t,p,v){return d(),w(V,null,[e[2]||(e[2]=l("div",{class:"text-caption"}," Custom length ",-1)),n(U,{modelValue:t.length,"onUpdate:modelValue":e[0]||(e[0]=o=>t.length=o),min:1,max:7},null,8,["modelValue"]),n(c,{modelValue:t.rating,"onUpdate:modelValue":e[1]||(e[1]=o=>t.rating=o),length:t.length},null,8,["modelValue","length"]),l("p",X," Model: "+E(t.rating),1)],64)}const ee=_(W,[["render",Z],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/rating/DemoRatingLength.vue"]]),te={__name:"DemoRatingSize",setup(a,{expose:e}){e();const t={rating:f(4)};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},ne={class:"d-flex flex-column"};function oe(a,e,i,t,p,v){return d(),w("div",ne,[n(c,{modelValue:t.rating,"onUpdate:modelValue":e[0]||(e[0]=o=>t.rating=o),size:"x-small"},null,8,["modelValue"]),n(c,{modelValue:t.rating,"onUpdate:modelValue":e[1]||(e[1]=o=>t.rating=o),size:"small"},null,8,["modelValue"]),n(c,{modelValue:t.rating,"onUpdate:modelValue":e[2]||(e[2]=o=>t.rating=o),size:"large"},null,8,["modelValue"])])}const re=_(te,[["render",oe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/rating/DemoRatingSize.vue"]]),le={__name:"DemoRatingColors",setup(a,{expose:e}){e();const p={rating:f(4),ratingColors:["primary","secondary","success","info","warning","error"]};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}},se={class:"d-flex flex-column"};function ae(a,e,i,t,p,v){return d(),w("div",se,[(d(),w(V,null,I(t.ratingColors,o=>n(c,{key:o,modelValue:t.rating,"onUpdate:modelValue":e[0]||(e[0]=m=>t.rating=m),color:o},null,8,["modelValue","color"])),64))])}const ie=_(le,[["render",ae],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/rating/DemoRatingColors.vue"]]),me={};function ce(a,e){return d(),g(c,{density:"compact"})}const de=_(me,[["render",ce],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/rating/DemoRatingDensity.vue"]]),pe={};function _e(a,e){return d(),g(c)}const ue=_(pe,[["render",_e],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/rating/DemoRatingBasic.vue"]]),ge={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},fe={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},ve={ts:`<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)

const ratingColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`},we={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},Ve={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},Re={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`},be={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`},ye={ts:`<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`,js:`<script setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`},he={ts:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`,js:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`},xe={ts:`<script lang="ts" setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating
      v-model="rating"
      size="large"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating
      v-model="rating"
      size="large"
    />
  </div>
</template>
`},De={__name:"rating",setup(a,{expose:e}){e();const i={get basic(){return ge},get clearable(){return fe},get colors(){return ve},get density(){return we},get hover(){return Ve},get incremented(){return Re},get itemSlot(){return be},get length(){return ye},get readonly(){return he},get size(){return xe}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function Se(a,e,i,t,p,v){const o=ue,m=k,R=de,b=ie,y=re,h=ee,x=Q,D=G,S=A,z=H,C=O;return d(),g(F,{class:"match-height"},{default:r(()=>[n(u,{cols:"12",md:"6"},{default:r(()=>[n(m,{title:"Basic",code:t.basic},{default:r(()=>[e[0]||(e[0]=l("p",null,[s("The "),l("code",null,"v-rating"),s(" component provides a simple interface for gathering user feedback.")],-1)),n(o)]),_:1,__:[0]},8,["code"])]),_:1}),n(u,{cols:"12",md:"6"},{default:r(()=>[n(m,{title:"Density",code:t.density},{default:r(()=>[e[1]||(e[1]=l("p",null,[s("Control the space occupied by "),l("code",null,"v-rating"),s(" items using the "),l("code",null,"density"),s(" prop.")],-1)),n(R)]),_:1,__:[1]},8,["code"])]),_:1}),n(u,{cols:"12",md:"6"},{default:r(()=>[n(m,{title:"Colors",code:t.colors},{default:r(()=>[e[2]||(e[2]=l("p",null,[s("The "),l("code",null,"v-rating"),s(" component can be colored as you want, you can set both selected and not selected colors.")],-1)),n(b)]),_:1,__:[2]},8,["code"])]),_:1}),n(u,{cols:"12",md:"6"},{default:r(()=>[n(m,{title:"Size",code:t.size},{default:r(()=>[e[3]||(e[3]=l("p",null,[s("Utilize the same sizing classes available in "),l("code",null,"v-icon"),s(" or provide your own with the "),l("code",null,"size"),s(" prop.")],-1)),n(y)]),_:1,__:[3]},8,["code"])]),_:1}),n(u,{cols:"12",md:"6"},{default:r(()=>[n(m,{title:"Length",code:t.length},{default:r(()=>[e[4]||(e[4]=l("p",null,[s("Change the number of items by modifying the the "),l("code",null,"length"),s(" prop.")],-1)),n(h)]),_:1,__:[4]},8,["code"])]),_:1}),n(u,{cols:"12",md:"6"},{default:r(()=>[n(m,{title:"Clearable",code:t.clearable},{default:r(()=>[e[5]||(e[5]=l("p",null,[s("Use "),l("code",null,"clearable"),s(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1)),n(x)]),_:1,__:[5]},8,["code"])]),_:1}),n(u,{cols:"12",md:"6"},{default:r(()=>[n(m,{title:"Readonly",code:t.readonly},{default:r(()=>[e[6]||(e[6]=l("p",null,[s("For ratings that are not meant to be changed you can use "),l("code",null,"readonly"),s(" prop.")],-1)),n(D)]),_:1,__:[6]},8,["code"])]),_:1}),n(u,{cols:"12",md:"6"},{default:r(()=>[n(m,{title:"Hover",code:t.hover},{default:r(()=>[e[7]||(e[7]=l("p",null,"Provides visual feedback when hovering over icons",-1)),n(S)]),_:1,__:[7]},8,["code"])]),_:1}),n(u,{cols:"12",md:"6"},{default:r(()=>[n(m,{title:"Incremented",code:t.incremented},{default:r(()=>[e[8]||(e[8]=l("p",null,[s("The "),l("code",null,"half-increments"),s(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1)),n(z)]),_:1,__:[8]},8,["code"])]),_:1}),n(u,{cols:"12",md:"6"},{default:r(()=>[n(m,{title:"Item slot",code:t.itemSlot},{default:r(()=>[e[9]||(e[9]=l("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1)),n(C)]),_:1,__:[9]},8,["code"])]),_:1})]),_:1})}const Me=_(De,[["render",Se],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/rating.vue"]]);export{Me as default};
