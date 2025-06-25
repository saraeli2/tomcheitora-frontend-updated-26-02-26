import{_ as d,d as V,o as a,w as r,a as i,j as o,a2 as W,Y as _,a7 as z,a8 as A,f as C,c as h,b as s,i as v}from"./index-BGIMdqyN.js";import{V as M,a as L,b as j,d as $}from"./VList-BdNXyVV_.js";import{V as J}from"./VListItemAction-BfdjXiey.js";import{V as l}from"./VChip-BZnN8JqM.js";import{V as T}from"./VMenu-DJ9pZS3t.js";import{_ as N}from"./AppCombobox-Dv106ljY.js";import{a as B}from"./avatar-1-DJJIeD8a.js";import{a as O}from"./avatar-2-1LL-7nu5.js";import{a as R}from"./avatar-3-CtWENZpf.js";import{a as Y}from"./avatar-4-C1cD5bAZ.js";import{V as S}from"./VAvatar-CYJWVBhL.js";import{_ as F}from"./AppCardCode-C-zO1RUn.js";import{V as U,a as u}from"./VRow-BFNCnCWI.js";import"./ssrBoot-DUtO1XoE.js";import"./VImg-nOKaZD-s.js";import"./VDivider-B1B4kDZB.js";import"./VSlideGroup-C-0uVn6B.js";import"./VOverlay-qz3yYbIb.js";import"./easing-Bybner-F.js";import"./lazy-CKhx2O3m.js";import"./scopeId-DfGkhZ3B.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Cz0UmEa5.js";import"./form-DbIa-vyG.js";import"./VSelect-BBtbosdO.js";import"./VTextField-DRZWT-VU.js";/* empty css                   */import"./VCounter-A4qJAdeX.js";import"./VField-B7Xo4Lej.js";import"./VInput-CH8dtMYl.js";import"./VCheckboxBtn-C50DCjx7.js";import"./VSelectionControl-Dyu49DZR.js";import"./filter-ChHSF7Vv.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VCardText-DfrFZhA0.js";/* empty css              */const q={__name:"DemoChipExpandable",setup(p,{expose:e}){e();const t={isMenuVisible:C(!1)};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function G(p,e,c,t,f,b){return a(),V(T,{modelValue:t.isMenuVisible,"onUpdate:modelValue":e[1]||(e[1]=n=>t.isMenuVisible=n),transition:"scale-transition"},{activator:r(({props:n})=>[i(l,z(A(n)),{default:r(()=>e[2]||(e[2]=[o(" VueJS ")])),_:2,__:[2]},1040)]),default:r(()=>[i(M,null,{default:r(()=>[i(L,null,{append:r(()=>[i(J,{class:"ms-3"},{default:r(()=>[i(W,{icon:"",variant:"text",size:"x-small",color:"default",onClick:e[0]||(e[0]=n=>t.isMenuVisible=!1)},{default:r(()=>[i(_,{size:"20",icon:"tabler-x"})]),_:1})]),_:1})]),default:r(()=>[i(j,{class:"mb-2"},{default:r(()=>e[3]||(e[3]=[o(" VueJS ")])),_:1,__:[3]}),i($,null,{default:r(()=>e[4]||(e[4]=[o("The Progressive JavaScript Framework")])),_:1,__:[4]})]),_:1})]),_:1})]),_:1},8,["modelValue"])}const H=d(q,[["render",G],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/chip/DemoChipExpandable.vue"]]),K={__name:"DemoChipInSelects",setup(p,{expose:e}){e();const c=C(["Programming","Playing games","Sleeping"]),t=C(["Streaming","Eating","Programming","Playing games","Sleeping"]),f={chips:c,items:t};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}};function Q(p,e,c,t,f,b){const n=N;return a(),V(n,{modelValue:t.chips,"onUpdate:modelValue":e[0]||(e[0]=m=>t.chips=m),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"tabler-circle-x",items:t.items,label:"Your favorite hobbies","prepend-icon":"tabler-filter"},null,8,["modelValue","items"])}const X=d(K,[["render",Q],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/chip/DemoChipInSelects.vue"]]),Z={},ee={class:"demo-space-x"};function ie(p,e){return a(),h("div",ee,[i(l,{size:"x-small"},{default:r(()=>e[0]||(e[0]=[o(" x-small chip ")])),_:1,__:[0]}),i(l,{size:"small"},{default:r(()=>e[1]||(e[1]=[o(" small chip ")])),_:1,__:[1]}),i(l,{size:"default"},{default:r(()=>e[2]||(e[2]=[o(" Default ")])),_:1,__:[2]}),i(l,{size:"large"},{default:r(()=>e[3]||(e[3]=[o(" large chip ")])),_:1,__:[3]}),i(l,{size:"x-large"},{default:r(()=>e[4]||(e[4]=[o(" x-large chip ")])),_:1,__:[4]})])}const re=d(Z,[["render",ie],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/chip/DemoChipSizes.vue"]]),oe={__name:"DemoChipWithAvatar",setup(p,{expose:e}){e();const c={get avatar1(){return B},get avatar2(){return O},get avatar3(){return R},get avatar4(){return Y}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}},te={class:"demo-space-x"};function le(p,e,c,t,f,b){return a(),h("div",te,[i(l,null,{default:r(()=>[i(S,{start:"",image:t.avatar1},null,8,["image"]),e[0]||(e[0]=s("span",null,"John Doe",-1))]),_:1,__:[0]}),i(l,null,{default:r(()=>[i(S,{start:"",image:t.avatar2},null,8,["image"]),e[1]||(e[1]=s("span",null,"Darcy Nooser",-1))]),_:1,__:[1]}),i(l,{pill:"",label:!1,"prepend-avatar":t.avatar3},{default:r(()=>e[2]||(e[2]=[s("span",null,"Felicia Risker",-1)])),_:1,__:[2]},8,["prepend-avatar"]),i(l,{pill:"",label:!1},{default:r(()=>[i(S,{start:"",image:t.avatar4},null,8,["image"]),e[3]||(e[3]=s("span",null,"Minnie Mostly",-1))]),_:1,__:[3]})])}const se=d(oe,[["render",le],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/chip/DemoChipWithAvatar.vue"]]),ae={},ne={class:"demo-space-x"};function pe(p,e){return a(),h("div",ne,[i(l,null,{default:r(()=>[i(_,{start:"",icon:"tabler-user"}),e[0]||(e[0]=o(" Account "))]),_:1,__:[0]}),i(l,{color:"primary"},{default:r(()=>[i(_,{start:"",icon:"tabler-star"}),e[1]||(e[1]=o(" Premium "))]),_:1,__:[1]}),i(l,{color:"secondary"},{default:r(()=>[i(_,{start:"",icon:"tabler-cake"}),e[2]||(e[2]=o(" 1 Year "))]),_:1,__:[2]}),i(l,{color:"success"},{default:r(()=>[i(_,{start:"",icon:"tabler-bell"}),e[3]||(e[3]=o(" Notification "))]),_:1,__:[3]}),i(l,{color:"info"},{default:r(()=>[i(_,{start:"",icon:"tabler-messages"}),e[4]||(e[4]=o(" Message "))]),_:1,__:[4]}),i(l,{color:"warning"},{default:r(()=>[i(_,{start:"",icon:"tabler-alert-triangle"}),e[5]||(e[5]=o(" Warning "))]),_:1,__:[5]}),i(l,{color:"error"},{default:r(()=>[i(_,{start:"",icon:"tabler-alert-circle"}),e[6]||(e[6]=o(" Error "))]),_:1,__:[6]})])}const ce=d(ae,[["render",pe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/chip/DemoChipWithIcon.vue"]]),me={__name:"DemoChipClosable",setup(p,{expose:e}){e();const c=C(!0),t=C(!0),f=C(!0),b=C(!0),n=C(!0),m=C(!0),y=C(!0),g={isDefaultChipVisible:c,isPrimaryChipVisible:t,isSecondaryChipVisible:f,isSuccessChipVisible:b,isInfoChipVisible:n,isWarningChipVisible:m,isErrorChipVisible:y};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}},de={class:"demo-space-x"};function ue(p,e,c,t,f,b){return a(),h("div",de,[t.isDefaultChipVisible?(a(),V(l,{key:0,closable:"","onClick:close":e[0]||(e[0]=n=>t.isDefaultChipVisible=!t.isDefaultChipVisible)},{default:r(()=>e[7]||(e[7]=[o(" Default ")])),_:1,__:[7]})):v("",!0),t.isPrimaryChipVisible?(a(),V(l,{key:1,closable:"",color:"primary","onClick:close":e[1]||(e[1]=n=>t.isPrimaryChipVisible=!t.isPrimaryChipVisible)},{default:r(()=>e[8]||(e[8]=[o(" Primary ")])),_:1,__:[8]})):v("",!0),t.isSecondaryChipVisible?(a(),V(l,{key:2,closable:"",color:"secondary","onClick:close":e[2]||(e[2]=n=>t.isSecondaryChipVisible=!t.isSecondaryChipVisible)},{default:r(()=>e[9]||(e[9]=[o(" Secondary ")])),_:1,__:[9]})):v("",!0),t.isSuccessChipVisible?(a(),V(l,{key:3,closable:"",color:"success","onClick:close":e[3]||(e[3]=n=>t.isSuccessChipVisible=!t.isSuccessChipVisible)},{default:r(()=>e[10]||(e[10]=[o(" Success ")])),_:1,__:[10]})):v("",!0),t.isInfoChipVisible?(a(),V(l,{key:4,closable:"",color:"info","onClick:close":e[4]||(e[4]=n=>t.isInfoChipVisible=!t.isInfoChipVisible)},{default:r(()=>e[11]||(e[11]=[o(" Info ")])),_:1,__:[11]})):v("",!0),t.isWarningChipVisible?(a(),V(l,{key:5,closable:"",color:"warning","onClick:close":e[5]||(e[5]=n=>t.isWarningChipVisible=!t.isWarningChipVisible)},{default:r(()=>e[12]||(e[12]=[o(" Warning ")])),_:1,__:[12]})):v("",!0),t.isErrorChipVisible?(a(),V(l,{key:6,closable:"",color:"error","onClick:close":e[6]||(e[6]=n=>t.isErrorChipVisible=!t.isErrorChipVisible)},{default:r(()=>e[13]||(e[13]=[o(" Error ")])),_:1,__:[13]})):v("",!0)])}const Ve=d(me,[["render",ue],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/chip/DemoChipClosable.vue"]]),Ce={},fe={class:"demo-space-x"};function _e(p,e){return a(),h("div",fe,[i(l,{label:!1},{default:r(()=>e[0]||(e[0]=[o(" Default ")])),_:1,__:[0]}),i(l,{label:!1,color:"primary"},{default:r(()=>e[1]||(e[1]=[o(" Primary ")])),_:1,__:[1]}),i(l,{label:!1,color:"secondary"},{default:r(()=>e[2]||(e[2]=[o(" Secondary ")])),_:1,__:[2]}),i(l,{label:!1,color:"success"},{default:r(()=>e[3]||(e[3]=[o(" Success ")])),_:1,__:[3]}),i(l,{label:!1,color:"info"},{default:r(()=>e[4]||(e[4]=[o(" Info ")])),_:1,__:[4]}),i(l,{label:!1,color:"warning"},{default:r(()=>e[5]||(e[5]=[o(" Warning ")])),_:1,__:[5]}),i(l,{label:!1,color:"error"},{default:r(()=>e[6]||(e[6]=[o(" Error ")])),_:1,__:[6]})])}const he=d(Ce,[["render",_e],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/chip/DemoChipRounded.vue"]]),ve={},be={class:"demo-space-x"};function ge(p,e){return a(),h("div",be,[i(l,{variant:"outlined"},{default:r(()=>e[0]||(e[0]=[o(" Default ")])),_:1,__:[0]}),i(l,{color:"primary",variant:"outlined"},{default:r(()=>e[1]||(e[1]=[o(" Primary ")])),_:1,__:[1]}),i(l,{color:"secondary",variant:"outlined"},{default:r(()=>e[2]||(e[2]=[o(" Secondary ")])),_:1,__:[2]}),i(l,{color:"success",variant:"outlined"},{default:r(()=>e[3]||(e[3]=[o(" Success ")])),_:1,__:[3]}),i(l,{color:"info",variant:"outlined"},{default:r(()=>e[4]||(e[4]=[o(" Info ")])),_:1,__:[4]}),i(l,{color:"warning",variant:"outlined"},{default:r(()=>e[5]||(e[5]=[o(" Warning ")])),_:1,__:[5]}),i(l,{color:"error",variant:"outlined"},{default:r(()=>e[6]||(e[6]=[o(" Error ")])),_:1,__:[6]})])}const ye=d(ve,[["render",ge],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/chip/DemoChipOutlined.vue"]]),Se={},we={class:"demo-space-x"};function xe(p,e){return a(),h("div",we,[i(l,{variant:"elevated"},{default:r(()=>e[0]||(e[0]=[o(" Default ")])),_:1,__:[0]}),i(l,{color:"primary",variant:"elevated"},{default:r(()=>e[1]||(e[1]=[o(" Primary ")])),_:1,__:[1]}),i(l,{color:"secondary",variant:"elevated"},{default:r(()=>e[2]||(e[2]=[o(" Secondary ")])),_:1,__:[2]}),i(l,{color:"success",variant:"elevated"},{default:r(()=>e[3]||(e[3]=[o(" Success ")])),_:1,__:[3]}),i(l,{color:"info",variant:"elevated"},{default:r(()=>e[4]||(e[4]=[o(" Info ")])),_:1,__:[4]}),i(l,{color:"warning",variant:"elevated"},{default:r(()=>e[5]||(e[5]=[o(" Warning ")])),_:1,__:[5]}),i(l,{color:"error",variant:"elevated"},{default:r(()=>e[6]||(e[6]=[o(" Error ")])),_:1,__:[6]})])}const Ie=d(Se,[["render",xe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/chip/DemoChipElevated.vue"]]),De={},Ee={class:"demo-space-x"};function Pe(p,e){return a(),h("div",Ee,[i(l,null,{default:r(()=>e[0]||(e[0]=[o(" Default ")])),_:1,__:[0]}),i(l,{color:"primary"},{default:r(()=>e[1]||(e[1]=[o(" Primary ")])),_:1,__:[1]}),i(l,{color:"secondary"},{default:r(()=>e[2]||(e[2]=[o(" Secondary ")])),_:1,__:[2]}),i(l,{color:"success"},{default:r(()=>e[3]||(e[3]=[o(" Success ")])),_:1,__:[3]}),i(l,{color:"info"},{default:r(()=>e[4]||(e[4]=[o(" Info ")])),_:1,__:[4]}),i(l,{color:"warning"},{default:r(()=>e[5]||(e[5]=[o(" Warning ")])),_:1,__:[5]}),i(l,{color:"error"},{default:r(()=>e[6]||(e[6]=[o(" Error ")])),_:1,__:[6]})])}const ke=d(De,[["render",Pe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/chip/DemoChipColor.vue"]]),We={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},ze={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},Ae={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},Me={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="tabler-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="tabler-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},Le={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing games', 'Sleeping'])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="tabler-circle-x"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="tabler-filter"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing games',
  'Sleeping',
])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="tabler-circle-x"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="tabler-filter"
  />
</template>
`},je={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},$e={ts:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},Je={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},Te={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},Ne={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="tabler-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="tabler-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="tabler-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="tabler-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="tabler-messages"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="tabler-alert-triangle"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="tabler-alert-circle"
      />
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="tabler-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="tabler-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="tabler-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="tabler-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="tabler-messages"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="tabler-alert-triangle"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="tabler-alert-circle"
      />
      Error
    </VChip>
  </div>
</template>
`},Be={__name:"chip",setup(p,{expose:e}){e();const c={get closable(){return We},get color(){return ze},get elevated(){return Ae},get expandable(){return Me},get inSelects(){return Le},get outlined(){return je},get rounded(){return $e},get sizes(){return Je},get withAvatar(){return Te},get withIcon(){return Ne}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function Oe(p,e,c,t,f,b){const n=ke,m=F,y=Ie,g=ye,w=he,x=Ve,I=ce,D=se,E=re,P=X,k=H;return a(),V(U,{class:"match-height"},{default:r(()=>[i(u,{cols:"12",md:"6"},{default:r(()=>[i(m,{title:"Color",code:t.color},{default:r(()=>[e[0]||(e[0]=s("p",null,[o("Use "),s("code",null,"color"),o(" prop to change the background color of chips.")],-1)),i(n)]),_:1,__:[0]},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:r(()=>[i(m,{title:"Elevated",code:t.elevated},{default:r(()=>[e[1]||(e[1]=s("p",null,[o("Use "),s("code",null,"elevated"),o(" variant option to create filled chips.")],-1)),i(y)]),_:1,__:[1]},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:r(()=>[i(m,{title:"Outlined",code:t.outlined},{default:r(()=>[e[2]||(e[2]=s("p",null,[o("Use "),s("code",null,"outlined"),o(" variant option to create outline border chips.")],-1)),i(g)]),_:1,__:[2]},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:r(()=>[i(m,{title:"Rounded",code:t.rounded},{default:r(()=>[e[3]||(e[3]=s("p",null,[o("To use the rounded chip, set "),s("code",null,"label"),o(" props value to "),s("strong",null,"false"),o(".")],-1)),i(w)]),_:1,__:[3]},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:r(()=>[i(m,{title:"Closable",code:t.closable},{default:r(()=>[e[4]||(e[4]=s("p",null,[o("Closable chips can be controlled with a "),s("code",null,"v-model"),o(".")],-1)),i(x)]),_:1,__:[4]},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:r(()=>[i(m,{title:"With Icon",code:t.withIcon},{default:r(()=>[e[5]||(e[5]=s("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1)),i(I)]),_:1,__:[5]},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:r(()=>[i(m,{title:"With Avatar",code:t.withAvatar},{default:r(()=>[e[6]||(e[6]=s("p",null,[o("Use "),s("code",null,"pill"),o(" prop to remove the "),s("code",null,"v-avatar"),o(" padding.")],-1)),i(D)]),_:1,__:[6]},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:r(()=>[i(m,{title:"Sizes",code:t.sizes},{default:r(()=>[e[7]||(e[7]=s("p",null,[o("The "),s("code",null,"v-chip"),o(" component can have various sizes from "),s("code",null,"x-small"),o(" to "),s("code",null,"x-large"),o(".")],-1)),i(E)]),_:1,__:[7]},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:r(()=>[i(m,{title:"In Selects",code:t.inSelects},{default:r(()=>[e[8]||(e[8]=s("p",null,[o("Selects can use "),s("code",null,"chips"),o(" to display the selected data. Try adding your own tags below.")],-1)),i(P)]),_:1,__:[8]},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:r(()=>[i(m,{title:"Expandable",code:t.expandable},{default:r(()=>[e[9]||(e[9]=s("p",null,[o("Chips can be combined with "),s("code",null,"v-menu"),o(" to enable a specific set of actions for a chip.")],-1)),i(k)]),_:1,__:[9]},8,["code"])]),_:1})]),_:1})}const Ii=d(Be,[["render",Oe],["__file","E:/wamp64/www/sales/frontend/src/pages/components/chip.vue"]]);export{Ii as default};
