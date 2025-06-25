import{_ as b,d as _,o as V,f as u,w as l,a as o,j as a,b as n,t as C,g as P,ak as D}from"./index-BGIMdqyN.js";import{_ as g,V as f}from"./AppCombobox-Dv106ljY.js";import{a as A,b as U}from"./VList-BdNXyVV_.js";import{a as p,V as y}from"./VRow-BFNCnCWI.js";import{V as L}from"./VChip-BZnN8JqM.js";import{V as S}from"./VAvatar-CYJWVBhL.js";import{_ as j}from"./AppCardCode-C-zO1RUn.js";import"./form-DbIa-vyG.js";import"./VSelect-BBtbosdO.js";import"./VTextField-DRZWT-VU.js";/* empty css                   */import"./VCounter-A4qJAdeX.js";import"./VImg-nOKaZD-s.js";import"./VField-B7Xo4Lej.js";import"./easing-Bybner-F.js";import"./VInput-CH8dtMYl.js";import"./forwardRefs-C-GTDzx5.js";import"./VMenu-DJ9pZS3t.js";import"./VOverlay-qz3yYbIb.js";import"./lazy-CKhx2O3m.js";import"./scopeId-DfGkhZ3B.js";import"./dialog-transition-Cz0UmEa5.js";import"./VCheckboxBtn-C50DCjx7.js";import"./VSelectionControl-Dyu49DZR.js";import"./filter-ChHSF7Vv.js";import"./ssrBoot-DUtO1XoE.js";import"./VDivider-B1B4kDZB.js";/* empty css              */import"./VSlideGroup-C-0uVn6B.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VCardText-DfrFZhA0.js";const k={__name:"DemoComboboxClearable",setup(d,{expose:e}){e();const i={select:u(["Vuetify","Programming"]),items:["Programming","Design","Vue","Vuetify"]};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function N(d,e,r,t,i,c){const s=g;return V(),_(s,{modelValue:t.select,"onUpdate:modelValue":e[0]||(e[0]=m=>t.select=m),items:t.items,label:"Combobox",multiple:"",placeholder:"deployment",clearable:""},null,8,["modelValue"])}const O=b(k,[["render",N],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/combobox/DemoComboboxClearable.vue"]]),R={__name:"DemoComboboxNoDataWithChips",setup(d,{expose:e}){e();const r=["Gaming","Programming","Vue","Vuetify"],t=u(["Vuetify"]),i=u(null);P(t,s=>{s.length>5&&D(()=>t.value.pop())});const c={items:r,selectedList:t,search:i};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function T(d,e,r,t,i,c){const s=g;return V(),_(s,{modelValue:t.selectedList,"onUpdate:modelValue":e[0]||(e[0]=m=>t.selectedList=m),"search-input":t.search,"onUpdate:searchInput":e[1]||(e[1]=m=>t.search=m),items:t.items,"hide-selected":"","hide-no-data":!1,placeholder:"deployment",hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":l(()=>[o(A,null,{default:l(()=>[o(U,null,{default:l(()=>[e[2]||(e[2]=a(' No results matching "')),n("strong",null,C(t.search),1),e[3]||(e[3]=a('". Press ')),e[4]||(e[4]=n("kbd",null,"enter",-1)),e[5]||(e[5]=a(" to create a new one "))]),_:1,__:[2,3,4,5]})]),_:1})]),_:1},8,["modelValue","search-input"])}const B=b(R,[["render",T],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/combobox/DemoComboboxNoDataWithChips.vue"]]),E={__name:"DemoComboboxMultiple",setup(d,{expose:e}){e();const i={selectedItem:u(["Vuetify","Programming"]),items:["Programming","Design","Vue","Vuetify"]};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function M(d,e,r,t,i,c){const s=g;return V(),_(y,null,{default:l(()=>[o(p,{cols:"12"},{default:l(()=>[o(s,{modelValue:t.selectedItem,"onUpdate:modelValue":e[0]||(e[0]=m=>t.selectedItem=m),items:t.items,placeholder:"deployment",label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),o(p,{cols:"12"},{default:l(()=>[o(s,{modelValue:t.selectedItem,"onUpdate:modelValue":e[1]||(e[1]=m=>t.selectedItem=m),items:t.items,placeholder:"deployment",label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),o(p,{cols:"12"},{default:l(()=>[o(s,{modelValue:t.selectedItem,"onUpdate:modelValue":e[2]||(e[2]=m=>t.selectedItem=m),placeholder:"deployment",label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),o(p,{cols:"12"},{default:l(()=>[o(s,{modelValue:t.selectedItem,"onUpdate:modelValue":e[3]||(e[3]=m=>t.selectedItem=m),items:t.items,placeholder:"deployment",label:"I use selection slot",multiple:""},{selection:l(({item:m})=>[o(L,{size:"small"},{prepend:l(()=>[o(S,{start:"",color:"primary",size:"16"},{default:l(()=>[a(C(String(m.title).charAt(0).toUpperCase()),1)]),_:2},1024)]),default:l(()=>[a(" "+C(m.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1})}const W=b(E,[["render",M],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/combobox/DemoComboboxMultiple.vue"]]),z={__name:"DemoComboboxVariant",setup(d,{expose:e}){e();const i={selectedItem:u(["Programming"]),items:["Programming","Design","Vue","Vuetify"]};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function F(d,e,r,t,i,c){return V(),_(y,null,{default:l(()=>[o(p,{cols:"12"},{default:l(()=>[o(f,{modelValue:t.selectedItem,"onUpdate:modelValue":e[0]||(e[0]=s=>t.selectedItem=s),items:t.items,multiple:"",placeholder:"deployment",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),o(p,{cols:"12"},{default:l(()=>[o(f,{modelValue:t.selectedItem,"onUpdate:modelValue":e[1]||(e[1]=s=>t.selectedItem=s),multiple:"",items:t.items,placeholder:"deployment",variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),o(p,{cols:"12"},{default:l(()=>[o(f,{modelValue:t.selectedItem,"onUpdate:modelValue":e[2]||(e[2]=s=>t.selectedItem=s),multiple:"",items:t.items,placeholder:"deployment",variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),o(p,{cols:"12"},{default:l(()=>[o(f,{modelValue:t.selectedItem,"onUpdate:modelValue":e[3]||(e[3]=s=>t.selectedItem=s),multiple:"",items:t.items,placeholder:"deployment",variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),o(p,{cols:"12"},{default:l(()=>[o(f,{modelValue:t.selectedItem,"onUpdate:modelValue":e[4]||(e[4]=s=>t.selectedItem=s),multiple:"",items:t.items,variant:"plain",placeholder:"deployment",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1})}const G=b(z,[["render",F],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/combobox/DemoComboboxVariant.vue"]]),Y={__name:"DemoComboboxDensity",setup(d,{expose:e}){e();const i={select:u(["Vuetify","Programming"]),items:["Programming","Design","Vue","Vuetify"]};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function q(d,e,r,t,i,c){const s=g;return V(),_(s,{modelValue:t.select,"onUpdate:modelValue":e[0]||(e[0]=m=>t.select=m),items:t.items,label:"Combobox",density:"compact",placeholder:"deployment",multiple:""},null,8,["modelValue"])}const H=b(Y,[["render",q],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/combobox/DemoComboboxDensity.vue"]]),J={__name:"DemoComboboxBasic",setup(d,{expose:e}){e();const i={selectedItem:u("Programming"),items:["Programming","Design","Vue","Vuetify"]};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function K(d,e,r,t,i,c){const s=g;return V(),_(s,{modelValue:t.selectedItem,"onUpdate:modelValue":e[0]||(e[0]=m=>t.selectedItem=m),items:t.items,placeholder:"deployment"},null,8,["modelValue"])}const Q=b(J,[["render",K],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/combobox/DemoComboboxBasic.vue"]]),X={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`},Z={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`},$={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`},ee={ts:`<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
                size="16"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
                size="16"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`},te={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`},oe={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},le={__name:"combobox",setup(d,{expose:e}){e();const r={get basic(){return X},get clearable(){return Z},get density(){return $},get multiple(){return ee},get noDataWithChips(){return te},get variant(){return oe}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function me(d,e,r,t,i,c){const s=Q,m=j,x=H,v=G,h=W,I=B,w=O;return V(),_(y,{class:"match-height"},{default:l(()=>[o(p,{cols:"12",md:"6"},{default:l(()=>[o(m,{title:"Basic",code:t.basic},{default:l(()=>[e[0]||(e[0]=n("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1)),o(s)]),_:1,__:[0]},8,["code"])]),_:1}),o(p,{cols:"12",md:"6"},{default:l(()=>[o(m,{title:"Density",code:t.density},{default:l(()=>[e[1]||(e[1]=n("p",null,[a(" You can use "),n("code",null,"Density"),a(" prop to reduce combobox height and lower max height of list items. Available options are: "),n("code",null,"default"),a(", "),n("code",null,"comfortable"),a(", and "),n("code",null,"compact"),a(". ")],-1)),o(x)]),_:1,__:[1]},8,["code"])]),_:1}),o(p,{cols:"12",md:"6"},{default:l(()=>[o(m,{title:"Variant",code:t.variant},{default:l(()=>[e[2]||(e[2]=n("p",null,[a("Use "),n("code",null,"solo"),a(", "),n("code",null,"outlined"),a(", "),n("code",null,"underlined"),a(", "),n("code",null,"filled"),a(" and "),n("code",null,"plain"),a(" options of "),n("code",null,"variant"),a(" prop to change the look of combobox. ")],-1)),o(v)]),_:1,__:[2]},8,["code"])]),_:1}),o(p,{cols:"12",md:"6"},{default:l(()=>[o(m,{title:"Multiple",code:t.multiple},{default:l(()=>[e[3]||(e[3]=n("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1)),o(h)]),_:1,__:[3]},8,["code"])]),_:1}),o(p,{cols:"12",md:"6"},{default:l(()=>[o(m,{title:"No data with chips",code:t.noDataWithChips},{default:l(()=>[e[4]||(e[4]=n("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1)),o(I)]),_:1,__:[4]},8,["code"])]),_:1}),o(p,{cols:"12",md:"6"},{default:l(()=>[o(m,{title:"Clearable",code:t.clearable},{default:l(()=>[e[5]||(e[5]=n("p",null,[a("Use "),n("code",null,"clearable"),a(" prop to clear combobox.")],-1)),o(w)]),_:1,__:[5]},8,["code"])]),_:1})]),_:1})}const Te=b(le,[["render",me],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/combobox.vue"]]);export{Te as default};
