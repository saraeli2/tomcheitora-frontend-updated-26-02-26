import{_ as S}from"./AppSelect-if1Bwnix.js";import{a as g}from"./avatar-1-DJJIeD8a.js";import{a as A}from"./avatar-2-1LL-7nu5.js";import{a as h}from"./avatar-3-CtWENZpf.js";import{a as C}from"./avatar-4-C1cD5bAZ.js";import{a as w}from"./avatar-5-p3RmcuSl.js";import{_ as u,d as _,o as f,w as l,a,b as r,t as $,f as b,j as i}from"./index-BGIMdqyN.js";import{V as j}from"./VChip-BZnN8JqM.js";import{V as k}from"./VAvatar-CYJWVBhL.js";import{a as p,V}from"./VRow-BFNCnCWI.js";import{a as v}from"./VSelect-BBtbosdO.js";import{_ as P}from"./AppCardCode-C-zO1RUn.js";import"./form-DbIa-vyG.js";import"./VSlideGroup-C-0uVn6B.js";import"./VImg-nOKaZD-s.js";/* empty css              */import"./VTextField-DRZWT-VU.js";/* empty css                   */import"./VCounter-A4qJAdeX.js";import"./VField-B7Xo4Lej.js";import"./easing-Bybner-F.js";import"./VInput-CH8dtMYl.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-BdNXyVV_.js";import"./ssrBoot-DUtO1XoE.js";import"./VDivider-B1B4kDZB.js";import"./VMenu-DJ9pZS3t.js";import"./VOverlay-qz3yYbIb.js";import"./lazy-CKhx2O3m.js";import"./scopeId-DfGkhZ3B.js";import"./dialog-transition-Cz0UmEa5.js";import"./VCheckboxBtn-C50DCjx7.js";import"./VSelectionControl-Dyu49DZR.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VCardText-DfrFZhA0.js";const G={__name:"DemoSelectSelectionSlot",setup(c,{expose:t}){t();const o=[{name:"Sandra Adams",avatar:g},{name:"Ali Connors",avatar:A},{name:"Trevor Hansen",avatar:h},{name:"Tucker Smith",avatar:C},{name:"Britta Holt",avatar:w}],e=b(["Sandra Adams"]),n={items:o,value:e,get avatar1(){return g},get avatar2(){return A},get avatar3(){return h},get avatar4(){return C},get avatar5(){return w}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function T(c,t,o,e,n,d){const m=S;return f(),_(m,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=s=>e.value=s),items:e.items,"item-title":"name","item-value":"name",label:"Select Item",placeholder:"Select Item",multiple:"",clearable:"","clear-icon":"tabler-x"},{selection:l(({item:s})=>[a(j,null,{prepend:l(()=>[a(k,{start:"",image:s.raw.avatar},null,8,["image"])]),default:l(()=>[r("span",null,$(s.title),1)]),_:2},1024)]),_:1},8,["modelValue"])}const N=u(G,[["render",T],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/select/DemoSelectSelectionSlot.vue"]]),M={__name:"DemoSelectMultiple",setup(c,{expose:t}){t();const n={selectedOptions:b(["Alabama"]),states:["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"]};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function E(c,t,o,e,n,d){const m=S;return f(),_(m,{modelValue:e.selectedOptions,"onUpdate:modelValue":t[0]||(t[0]=s=>e.selectedOptions=s),items:e.states,"menu-props":{maxHeight:"400"},label:"Select",multiple:"","persistent-hint":"",placeholder:"Select State"},null,8,["modelValue"])}const U=u(M,[["render",E],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/select/DemoSelectMultiple.vue"]]),H={__name:"DemoSelectMenuProps",setup(c,{expose:t}){t();const e={items:["Foo","Bar","Fizz","Buzz"]};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function L(c,t,o,e,n,d){const m=S;return f(),_(m,{items:e.items,"menu-props":{transition:"scroll-y-transition"},label:"Label",placeholder:"Select Item"})}const R=u(H,[["render",L],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/select/DemoSelectMenuProps.vue"]]),Y={__name:"DemoSelectChips",setup(c,{expose:t}){t();const o=["foo","bar","fizz","buzz"],e=b(["foo","bar","fizz","buzz"]),n={items:o,selected:e};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function q(c,t,o,e,n,d){const m=S;return f(),_(m,{modelValue:e.selected,"onUpdate:modelValue":t[0]||(t[0]=s=>e.selected=s),items:e.items,placeholder:"Select Item",label:"Chips",chips:"",multiple:"","closable-chips":""},null,8,["modelValue"])}const J=u(Y,[["render",q],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/select/DemoSelectChips.vue"]]),K={__name:"DemoSelectIcons",setup(c,{expose:t}){t();const o=b("Florida"),e=b("Texas"),d={selectedOption1:o,selectedOption2:e,states:["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"]};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function Q(c,t,o,e,n,d){const m=S;return f(),_(V,null,{default:l(()=>[a(p,{cols:"12"},{default:l(()=>[a(m,{modelValue:e.selectedOption1,"onUpdate:modelValue":t[0]||(t[0]=s=>e.selectedOption1=s),items:e.states,label:"Select","prepend-icon":"tabler-map","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1}),a(p,{cols:"12"},{default:l(()=>[a(m,{modelValue:e.selectedOption2,"onUpdate:modelValue":t[1]||(t[1]=s=>e.selectedOption2=s),items:e.states,"append-icon":"tabler-map",label:"Select","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1})]),_:1})}const W=u(K,[["render",Q],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/select/DemoSelectIcons.vue"]]),X={__name:"DemoSelectCustomTextAndValue",setup(c,{expose:t}){t();const n={selectedOption:b({state:"Florida",abbr:"FL"}),items:[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}]};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function Z(c,t,o,e,n,d){const m=S;return f(),_(m,{modelValue:e.selectedOption,"onUpdate:modelValue":t[0]||(t[0]=s=>e.selectedOption=s),hint:`${e.selectedOption.state}, ${e.selectedOption.abbr}`,items:e.items,"item-title":"state","item-value":"abbr",label:"Select","persistent-hint":"","return-object":"","single-line":"",placeholder:"Select State"},null,8,["modelValue","hint"])}const ee=u(X,[["render",Z],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/select/DemoSelectCustomTextAndValue.vue"]]),te={__name:"DemoSelectVariant",setup(c,{expose:t}){t();const e={items:["Foo","Bar","Fizz","Buzz"]};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function ae(c,t,o,e,n,d){return f(),_(V,null,{default:l(()=>[a(p,{cols:"12",sm:"6"},{default:l(()=>[a(v,{items:e.items,label:"Outlined",placeholder:"Select Item"})]),_:1}),a(p,{cols:"12",sm:"6"},{default:l(()=>[a(v,{items:e.items,label:"Filled",placeholder:"Select Item",variant:"filled"})]),_:1}),a(p,{cols:"12",sm:"6"},{default:l(()=>[a(v,{items:e.items,label:"Solo",placeholder:"Select Item",variant:"solo"})]),_:1}),a(p,{cols:"12",sm:"6"},{default:l(()=>[a(v,{items:e.items,label:"Plain",placeholder:"Select Item",variant:"plain"})]),_:1}),a(p,{cols:"12",sm:"6"},{default:l(()=>[a(v,{items:e.items,label:"Underlined",variant:"underlined",placeholder:"Select Item"})]),_:1})]),_:1})}const le=u(te,[["render",ae],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/select/DemoSelectVariant.vue"]]),oe={__name:"DemoSelectDensity",setup(c,{expose:t}){t();const e={items:["Foo","Bar","Fizz","Buzz"]};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function se(c,t,o,e,n,d){const m=S;return f(),_(m,{items:e.items,label:"Density",density:"compact",placeholder:"Select Item"})}const re=u(oe,[["render",se],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/select/DemoSelectDensity.vue"]]),ne={__name:"DemoSelectBasic",setup(c,{expose:t}){t();const e={items:["Foo","Bar","Fizz","Buzz"]};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function ie(c,t,o,e,n,d){const m=S;return f(),_(m,{items:e.items,label:"Standard",placeholder:"Select Item"})}const ce=u(ne,[["render",ie],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/select/DemoSelectBasic.vue"]]),me={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
  />
</template>
`},pe={ts:`<script lang="ts" setup>
const items = ['foo', 'bar', 'fizz', 'buzz']
const selected = ref(['foo', 'bar', 'fizz', 'buzz'])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
    closable-chips
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const selected = ref([
  'foo',
  'bar',
  'fizz',
  'buzz',
])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
    closable-chips
  />
</template>
`},de={ts:`<script lang="ts" setup>
const selectedOption = ref({ state: 'Florida', abbr: 'FL' })

const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const selectedOption = ref({
  state: 'Florida',
  abbr: 'FL',
})

const items = [
  {
    state: 'Florida',
    abbr: 'FL',
  },
  {
    state: 'Georgia',
    abbr: 'GA',
  },
  {
    state: 'Nebraska',
    abbr: 'NE',
  },
  {
    state: 'California',
    abbr: 'CA',
  },
  {
    state: 'New York',
    abbr: 'NY',
  },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
`},ue={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
`},_e={ts:`<script lang="ts" setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
`},fe={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
`},Se={ts:`<script lang="ts" setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
`},be={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items: { name: string; avatar: string }[] = [
  { name: 'Sandra Adams', avatar: avatar1 },
  { name: 'Ali Connors', avatar: avatar2 },
  { name: 'Trevor Hansen', avatar: avatar3 },
  { name: 'Tucker Smith', avatar: avatar4 },
  { name: 'Britta Holt', avatar: avatar5 },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    placeholder="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <template #prepend>
          <VAvatar
            start
            :image="item.raw.avatar"
          />
        </template>

        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </AppSelect>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items = [
  {
    name: 'Sandra Adams',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    avatar: avatar5,
  },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    placeholder="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <template #prepend>
          <VAvatar
            start
            :image="item.raw.avatar"
          />
        </template>

        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </AppSelect>
</template>
`},ve={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
`},Ve={__name:"select",setup(c,{expose:t}){t();const o={get basic(){return me},get chips(){return pe},get customTextAndValue(){return de},get density(){return ue},get icons(){return _e},get menuProps(){return fe},get multiple(){return Se},get selectionSlot(){return be},get variant(){return ve}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function ge(c,t,o,e,n,d){const m=ce,s=P,z=re,F=le,O=ee,D=W,x=J,I=R,B=U,y=N;return f(),_(V,null,{default:l(()=>[a(p,{cols:"12",md:"6"},{default:l(()=>[a(s,{title:"Basic",code:e.basic},{default:l(()=>[t[0]||(t[0]=r("p",null,"Select fields components are used for collecting user provided information from a list of options.",-1)),a(m)]),_:1,__:[0]},8,["code"])]),_:1}),a(p,{cols:"12",md:"6"},{default:l(()=>[a(s,{title:"Density",code:e.density},{default:l(()=>[t[1]||(t[1]=r("p",null,[i("You can use "),r("code",null,"density"),i(" prop to reduce the field height and lower max height of list items.")],-1)),a(z)]),_:1,__:[1]},8,["code"])]),_:1}),a(p,{cols:"12"},{default:l(()=>[a(s,{title:"Variant",code:e.variant},{default:l(()=>[t[2]||(t[2]=r("p",null,[i(" Use "),r("code",null,"filled"),i(", "),r("code",null,"outlined"),i(", "),r("code",null,"solo"),i(", "),r("code",null,"underlined"),i(" and "),r("code",null,"plain"),i(" options of "),r("code",null,"variant"),i(" prop to change appearance of select. ")],-1)),a(F)]),_:1,__:[2]},8,["code"])]),_:1}),a(p,{cols:"12",md:"6"},{default:l(()=>[a(s,{title:"Custom text and value",code:e.customTextAndValue},{default:l(()=>[t[3]||(t[3]=r("p",null,"You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection.",-1)),a(O)]),_:1,__:[3]},8,["code"])]),_:1}),a(p,{cols:"12",md:"6"},{default:l(()=>[a(s,{title:"Icons",code:e.icons},{default:l(()=>[t[4]||(t[4]=r("p",null,[i("Use a custom "),r("code",null,"prepend"),i(" or "),r("code",null,"appended"),i(" icon.")],-1)),a(D)]),_:1,__:[4]},8,["code"])]),_:1}),a(p,{cols:"12",md:"6"},{default:l(()=>[a(s,{title:"Chips",code:e.chips},{default:l(()=>[t[5]||(t[5]=r("p",null,[i("Use "),r("code",null,"chips"),i(" prop to make selected option as chip.")],-1)),a(x)]),_:1,__:[5]},8,["code"])]),_:1}),a(p,{cols:"12",md:"6"},{default:l(()=>[a(s,{title:"Menu Props",code:e.menuProps},{default:l(()=>[t[6]||(t[6]=r("p",null,[i("Custom props can be passed directly to "),r("code",null,"v-menu"),i(" using "),r("code",null,"menuProps"),i(" prop.")],-1)),a(I)]),_:1,__:[6]},8,["code"])]),_:1}),a(p,{cols:"12",md:"6"},{default:l(()=>[a(s,{title:"Multiple",code:e.multiple},{default:l(()=>[t[7]||(t[7]=r("p",null,[i("Use "),r("code",null,"multiple"),i(" prop to select multiple option.")],-1)),a(B)]),_:1,__:[7]},8,["code"])]),_:1}),a(p,{cols:"12",md:"6"},{default:l(()=>[a(s,{title:"Selection slot",code:e.selectionSlot},{default:l(()=>[t[8]||(t[8]=r("p",null,[i("The "),r("code",null,"selection"),i(" slot can be used to customize the way selected values are shown in the input.")],-1)),a(y)]),_:1,__:[8]},8,["code"])]),_:1})]),_:1})}const lt=u(Ve,[["render",ge],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/select.vue"]]);export{lt as default};
