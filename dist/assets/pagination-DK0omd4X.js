import{_ as g,c as v,o as m,a as n,f as d,d as P,w as s,b as o,j as a}from"./index-BGIMdqyN.js";import{V as u}from"./VPagination-CER73K8u.js";import{_ as j}from"./AppCardCode-C-zO1RUn.js";import{V as C,a as f}from"./VRow-BFNCnCWI.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VAvatar-CYJWVBhL.js";import"./VImg-nOKaZD-s.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";/* empty css              */const E={__name:"DemoPaginationSize",setup(i,{expose:e}){e();const r=d(1),t=d(2),p=d(3),c={xSmallPagination:r,smallPagination:t,largePagination:p};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}},U={class:"d-flex flex-column gap-6 px-4"};function O(i,e,r,t,p,c){return m(),v("div",U,[n(u,{modelValue:t.xSmallPagination,"onUpdate:modelValue":e[0]||(e[0]=l=>t.xSmallPagination=l),length:7,size:"small"},null,8,["modelValue"]),n(u,{modelValue:t.smallPagination,"onUpdate:modelValue":e[1]||(e[1]=l=>t.smallPagination=l),length:7},null,8,["modelValue"]),n(u,{modelValue:t.largePagination,"onUpdate:modelValue":e[2]||(e[2]=l=>t.largePagination=l),length:7,"total-visible":i.$vuetify.display.xs?1:7,size:"large"},null,8,["modelValue","total-visible"])])}const z=g(E,[["render",O],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/pagination/DemoPaginationSize.vue"]]),I={__name:"DemoPaginationColor",setup(i,{expose:e}){e();const r=d(1),t=d(2),p=d(3),c={pageSuccess:r,pageError:t,pageInfo:p};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}},T={class:"d-flex flex-column gap-6"};function B(i,e,r,t,p,c){return m(),v("div",T,[n(u,{modelValue:t.pageSuccess,"onUpdate:modelValue":e[0]||(e[0]=l=>t.pageSuccess=l),length:7,"active-color":"success"},null,8,["modelValue"]),n(u,{modelValue:t.pageError,"onUpdate:modelValue":e[1]||(e[1]=l=>t.pageError=l),length:7,"active-color":"error"},null,8,["modelValue"]),n(u,{modelValue:t.pageInfo,"onUpdate:modelValue":e[2]||(e[2]=l=>t.pageInfo=l),length:7,"active-color":"info"},null,8,["modelValue"])])}const A=g(I,[["render",B],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/pagination/DemoPaginationColor.vue"]]),L={__name:"DemoPaginationTotalVisible",setup(i,{expose:e}){e();const t={currentPage:d(1)};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function k(i,e,r,t,p,c){return m(),P(u,{modelValue:t.currentPage,"onUpdate:modelValue":e[0]||(e[0]=l=>t.currentPage=l),length:15,"total-visible":i.$vuetify.display.mdAndUp?7:3},null,8,["modelValue","total-visible"])}const N=g(L,[["render",k],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/pagination/DemoPaginationTotalVisible.vue"]]),R={__name:"DemoPaginationLength",setup(i,{expose:e}){e();const t={currentPage:d(1)};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function Y(i,e,r,t,p,c){return m(),P(u,{modelValue:t.currentPage,"onUpdate:modelValue":e[0]||(e[0]=l=>t.currentPage=l),length:15},null,8,["modelValue"])}const q=g(R,[["render",Y],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/pagination/DemoPaginationLength.vue"]]),F={__name:"DemoPaginationIcons",setup(i,{expose:e}){e();const t={currentPage:d(1)};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function G(i,e,r,t,p,c){return m(),P(u,{modelValue:t.currentPage,"onUpdate:modelValue":e[0]||(e[0]=l=>t.currentPage=l),length:5,"prev-icon":"tabler-caret-left","next-icon":"tabler-caret-right"},null,8,["modelValue"])}const H=g(F,[["render",G],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/pagination/DemoPaginationIcons.vue"]]),J={};function K(i,e){return m(),P(u,{length:5,disabled:""})}const M=g(J,[["render",K],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/pagination/DemoPaginationDisabled.vue"]]),Q={__name:"DemoPaginationOutlineCircle",setup(i,{expose:e}){e();const t={currentPage:d(1)};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function W(i,e,r,t,p,c){return m(),P(u,{modelValue:t.currentPage,"onUpdate:modelValue":e[0]||(e[0]=l=>t.currentPage=l),variant:"outlined",length:5,rounded:"circle"},null,8,["modelValue"])}const X=g(Q,[["render",W],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/pagination/DemoPaginationOutlineCircle.vue"]]),Z={__name:"DemoPaginationCircle",setup(i,{expose:e}){e();const t={currentPage:d(1)};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function ee(i,e,r,t,p,c){return m(),P(u,{modelValue:t.currentPage,"onUpdate:modelValue":e[0]||(e[0]=l=>t.currentPage=l),length:5,rounded:"circle"},null,8,["modelValue"])}const te=g(Z,[["render",ee],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/pagination/DemoPaginationCircle.vue"]]),ne={__name:"DemoPaginationOutline",setup(i,{expose:e}){e();const t={currentPage:d(1)};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function oe(i,e,r,t,p,c){return m(),P(u,{modelValue:t.currentPage,"onUpdate:modelValue":e[0]||(e[0]=l=>t.currentPage=l),variant:"outlined",length:5},null,8,["modelValue"])}const ae=g(ne,[["render",oe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/pagination/DemoPaginationOutline.vue"]]),le={__name:"DemoPaginationBasic",setup(i,{expose:e}){e();const t={currentPage:d(1)};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function re(i,e,r,t,p,c){return m(),P(u,{modelValue:t.currentPage,"onUpdate:modelValue":e[0]||(e[0]=l=>t.currentPage=l),length:5},null,8,["modelValue"])}const ie=g(le,[["render",re],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/pagination/DemoPaginationBasic.vue"]]),se={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`},ce={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`},ue={ts:`<script setup lang="ts">
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`,js:`<script setup>
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`},pe={ts:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`,js:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`},de={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="tabler-caret-left"
    next-icon="tabler-caret-right"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="tabler-caret-left"
    next-icon="tabler-caret-right"
  />
</template>
`},ge={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`},me={ts:`<script setup lang="ts">
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
  />
</template>
`},_e={ts:`<script setup lang="ts">
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
    rounded="circle"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
    rounded="circle"
  />
</template>
`},fe={ts:`<script setup lang="ts">
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6 px-4">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      :total-visible="$vuetify.display.xs ? 1 : 7"
      size="large"
    />
  </div>
</template>
`,js:`<script setup>
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6 px-4">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      :total-visible="$vuetify.display.xs ? 1 : 7"
      size="large"
    />
  </div>
</template>
`},Pe={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="$vuetify.display.mdAndUp ? 7 : 3"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="$vuetify.display.mdAndUp ? 7 : 3"
  />
</template>
`},ve={__name:"pagination",setup(i,{expose:e}){e();const r={get basic(){return se},get circle(){return ce},get color(){return ue},get disabled(){return pe},get icons(){return de},get length(){return ge},get outline(){return me},get outlineCircle(){return _e},get size(){return fe},get totalVisible(){return Pe}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function Ve(i,e,r,t,p,c){const l=ie,_=j,V=ae,b=te,w=X,x=M,h=H,S=q,D=N,$=A,y=z;return m(),P(C,{class:"match-height"},{default:s(()=>[n(f,{cols:"12",md:"6"},{default:s(()=>[n(_,{title:"Basic",code:t.basic},{default:s(()=>[e[0]||(e[0]=o("p",null,[a("The "),o("code",null,"v-pagination"),a(" component is used to separate long sets of data.")],-1)),n(l)]),_:1,__:[0]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:s(()=>[n(_,{title:"Outline",code:t.outline},{default:s(()=>[e[1]||(e[1]=o("p",null,[a("The "),o("code",null,"variant='outline'"),a(" prop is used to give outline to pagination item.")],-1)),n(V)]),_:1,__:[1]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:s(()=>[n(_,{title:"Circle",code:t.circle},{default:s(()=>[e[2]||(e[2]=o("p",null,[a("The "),o("code",null,"rounded"),a(" prop allows you to render pagination buttons with alternative styles.")],-1)),n(b)]),_:1,__:[2]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:s(()=>[n(_,{title:"Outline Circle",code:t.outlineCircle},{default:s(()=>[e[3]||(e[3]=o("p",null,[a("The "),o("code",null,"variant='outline'"),a(" and "),o("code",null,"rounded"),a(" prop is used to give rounded outline to pagination item.")],-1)),n(w)]),_:1,__:[3]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:s(()=>[n(_,{title:"Disabled",code:t.disabled},{default:s(()=>[e[4]||(e[4]=o("p",null,[a("Pagination items can be manually deactivated using the "),o("code",null,"disabled"),a(" prop.")],-1)),n(x)]),_:1,__:[4]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:s(()=>[n(_,{title:"Icons",code:t.icons},{default:s(()=>[e[5]||(e[5]=o("p",null,[a("Previous and next page icons can be customized with the "),o("code",null,"prev-icon"),a(" and "),o("code",null,"next-icon"),a(" props.")],-1)),n(h)]),_:1,__:[5]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:s(()=>[n(_,{title:"Length",code:t.length},{default:s(()=>[e[6]||(e[6]=o("p",null,[a("Using the "),o("code",null,"length"),a(" prop you can set the length of "),o("code",null,"v-pagination"),a(", if the number of page buttons exceeds the parent container, it will truncate the list.")],-1)),n(S)]),_:1,__:[6]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:s(()=>[n(_,{title:"Total visible",code:t.totalVisible},{default:s(()=>[e[7]||(e[7]=o("p",null,[a("You can also manually set the maximum number of visible page buttons with the "),o("code",null,"total-visible"),a(" prop.")],-1)),n(D)]),_:1,__:[7]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:s(()=>[n(_,{title:"Color",code:t.color},{default:s(()=>[e[8]||(e[8]=o("p",null,[a("Use "),o("code",null,"active-color"),a(" prop for create different color pagination.")],-1)),n($)]),_:1,__:[8]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:s(()=>[n(_,{title:"Size",code:t.size},{default:s(()=>[e[9]||(e[9]=o("p",null,[a("Use "),o("code",null,"size"),a(" prop to sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: "),o("strong",null,"x-small"),a(", "),o("strong",null,"small"),a(", "),o("strong",null,"default"),a(", "),o("strong",null,"large"),a(", and "),o("strong",null,"x-large"),a(".")],-1)),n(y)]),_:1,__:[9]},8,["code"])]),_:1})]),_:1})}const Ue=g(ve,[["render",Ve],["__file","E:/wamp64/www/sales/frontend/src/pages/components/pagination.vue"]]);export{Ue as default};
