import{_ as g,d as _,o as f,f as S,w as o,a,cC as R,Y as $,g as j,m as C,b as l,j as m}from"./index-BGIMdqyN.js";import{_ as b,V as w}from"./AppAutocomplete-B63K0KNH.js";import{a as y}from"./avatar-1-DJJIeD8a.js";import{a as V}from"./avatar-2-1LL-7nu5.js";import{a as x}from"./avatar-3-CtWENZpf.js";import{a as M}from"./avatar-4-C1cD5bAZ.js";import{a as k}from"./avatar-5-p3RmcuSl.js";import{a as N}from"./avatar-6-BvOsbCKD.js";import{a as T}from"./avatar-7-BMj-EsUq.js";import{a as I}from"./avatar-8-BIeCscep.js";import{a as H}from"./VList-BdNXyVV_.js";import{V as L}from"./VChip-BZnN8JqM.js";import{a as d,V as D}from"./VRow-BFNCnCWI.js";import{_ as U}from"./AppCardCode-C-zO1RUn.js";import"./form-DbIa-vyG.js";import"./VSelect-BBtbosdO.js";import"./VTextField-DRZWT-VU.js";/* empty css                   */import"./VCounter-A4qJAdeX.js";import"./VImg-nOKaZD-s.js";import"./VField-B7Xo4Lej.js";import"./easing-Bybner-F.js";import"./VInput-CH8dtMYl.js";import"./forwardRefs-C-GTDzx5.js";import"./VMenu-DJ9pZS3t.js";import"./VOverlay-qz3yYbIb.js";import"./lazy-CKhx2O3m.js";import"./scopeId-DfGkhZ3B.js";import"./dialog-transition-Cz0UmEa5.js";import"./VCheckboxBtn-C50DCjx7.js";import"./VSelectionControl-Dyu49DZR.js";import"./VAvatar-CYJWVBhL.js";import"./filter-ChHSF7Vv.js";import"./ssrBoot-DUtO1XoE.js";import"./VDivider-B1B4kDZB.js";import"./VSlideGroup-C-0uVn6B.js";/* empty css              */import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VCardText-DfrFZhA0.js";const q={__name:"DemoAutocompleteValidation",setup(c,{expose:t}){t();const s=["foo","bar","fizz","buzz"],e=S(["foo"]),p={items:s,values:e,nameRules:[r=>!!r.length||"Select at least one option."]};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function z(c,t,s,e,n,p){const r=b;return f(),_(r,{modelValue:e.values,"onUpdate:modelValue":t[0]||(t[0]=i=>e.values=i),items:e.items,rules:e.nameRules,placeholder:"Select Option",multiple:""},null,8,["modelValue"])}const Y=g(q,[["render",z],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/autocomplete/DemoAutocompleteValidation.vue"]]),B={__name:"DemoAutocompleteStateSelector",setup(c,{expose:t}){t();const s=S(!1),e=S(null),p={isEditing:s,selectedState:e,states:["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function J(c,t,s,e,n,p){const r=b;return f(),_(r,{modelValue:e.selectedState,"onUpdate:modelValue":t[1]||(t[1]=i=>e.selectedState=i),hint:e.isEditing?"Click the icon to save":"Click the icon to edit",placeholder:"Select Your State",items:e.states,readonly:!e.isEditing,label:`State — ${e.isEditing?"Editable":"Readonly"}`,"persistent-hint":"","prepend-icon":"tabler-building","menu-props":{maxHeight:"200px"}},{append:o(()=>[a(R,{mode:"out-in"},{default:o(()=>[(f(),_($,{key:`icon-${e.isEditing}`,color:e.isEditing?"success":"info",icon:e.isEditing?"tabler-checks":"tabler-edit-circle",onClick:t[0]||(t[0]=i=>e.isEditing=!e.isEditing)},null,8,["color","icon"]))]),_:1})]),_:1},8,["modelValue","hint","readonly","label"])}const K=g(B,[["render",J],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/autocomplete/DemoAutocompleteStateSelector.vue"]]),X={__name:"DemoAutocompleteAsyncItems",setup(c,{expose:t}){t();const s=S(!1),e=S(),n=S(null),p=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],r=S(p),i=v=>{s.value=!0,setTimeout(()=>{r.value=p.filter(h=>(h||"").toLowerCase().includes((v||"").toLowerCase())),s.value=!1},500)};j(e,v=>{v&&v!==n.value&&i(v)});const u={loading:s,search:e,select:n,states:p,items:r,querySelections:i};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function Q(c,t,s,e,n,p){return f(),_(w,{modelValue:e.select,"onUpdate:modelValue":t[0]||(t[0]=r=>e.select=r),search:e.search,"onUpdate:search":t[1]||(t[1]=r=>e.search=r),loading:e.loading,items:e.items,placeholder:"Search for a state",label:"What state are you from?",variant:"underlined","menu-props":{maxHeight:"200px"}},null,8,["modelValue","search","loading","items"])}const Z=g(X,[["render",Q],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/autocomplete/DemoAutocompleteAsyncItems.vue"]]),ee={__name:"DemoAutocompleteSlots",setup(c,{expose:t}){t();const n={friends:S(["Sandra Adams","Britta Holt"]),people:[{name:"Sandra Adams",group:"Group 1",avatar:y},{name:"Ali Connors",group:"Group 1",avatar:V},{name:"Trevor Hansen",group:"Group 1",avatar:x},{name:"Tucker Smith",group:"Group 1",avatar:M},{name:"Britta Holt",group:"Group 2",avatar:k},{name:"Jane Smith ",group:"Group 2",avatar:N},{name:"John Smith",group:"Group 2",avatar:T},{name:"Sandra Williams",group:"Group 2",avatar:I}],get avatar1(){return y},get avatar2(){return V},get avatar3(){return x},get avatar4(){return M},get avatar5(){return k},get avatar6(){return N},get avatar7(){return T},get avatar8(){return I}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function te(c,t,s,e,n,p){const r=b;return f(),_(r,{modelValue:e.friends,"onUpdate:modelValue":t[0]||(t[0]=i=>e.friends=i),chips:"","closable-chips":"",multiple:"",items:e.people,"item-title":"name","item-value":"name",placeholder:"Select User",label:"Select"},{chip:o(({props:i,item:u})=>[a(L,C(i,{"prepend-avatar":u.raw.avatar,text:u.raw.name}),null,16,["prepend-avatar","text"])]),item:o(({props:i,item:u})=>{var v,h,A;return[a(H,C(i,{"prepend-avatar":(v=u==null?void 0:u.raw)==null?void 0:v.avatar,title:(h=u==null?void 0:u.raw)==null?void 0:h.name,subtitle:(A=u==null?void 0:u.raw)==null?void 0:A.group}),null,16,["prepend-avatar","title","subtitle"])]}),_:1},8,["modelValue"])}const ae=g(ee,[["render",te],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/autocomplete/DemoAutocompleteSlots.vue"]]),oe={__name:"DemoAutocompleteCustomFilter",setup(c,{expose:t}){t();const s=[{name:"Florida",abbr:"FL",id:1},{name:"Georgia",abbr:"GA",id:2},{name:"Nebraska",abbr:"NE",id:3},{name:"California",abbr:"CA",id:4},{name:"New York",abbr:"NY",id:5}];function e(p,r,i){const u=i.raw.name.toLowerCase(),v=i.raw.abbr.toLowerCase(),h=r.toLowerCase();return u.includes(h)||v.includes(h)}const n={states:s,customFilter:e};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function se(c,t,s,e,n,p){const r=b;return f(),_(r,{label:"States",items:e.states,"custom-filter":e.customFilter,"item-title":"name","item-value":"abbr",placeholder:"Select State"})}const re=g(oe,[["render",se],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/autocomplete/DemoAutocompleteCustomFilter.vue"]]),ie={__name:"DemoAutocompleteChips",setup(c,{expose:t}){t();const e={items:["California","Colorado","Florida","Georgia","Texas","Wyoming"]};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function le(c,t,s,e,n,p){const r=b;return f(),_(r,{label:"States",items:e.items,placeholder:"Select State",chips:"",multiple:"","closable-chips":""})}const ne=g(ie,[["render",le],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/autocomplete/DemoAutocompleteChips.vue"]]),me={__name:"DemoAutocompleteClearable",setup(c,{expose:t}){t();const e={items:["California","Colorado","Florida","Georgia","Texas","Wyoming"]};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function ce(c,t,s,e,n,p){const r=b;return f(),_(r,{label:"States",items:e.items,multiple:"",placeholder:"Select State",clearable:""})}const pe=g(me,[["render",ce],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/autocomplete/DemoAutocompleteClearable.vue"]]),ue={__name:"DemoAutocompleteMultiple",setup(c,{expose:t}){t();const e={items:["California","Colorado","Florida","Georgia","Texas","Wyoming"]};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function de(c,t,s,e,n,p){const r=b;return f(),_(r,{label:"States",items:e.items,placeholder:"Select State",multiple:"",eager:""})}const _e=g(ue,[["render",de],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/autocomplete/DemoAutocompleteMultiple.vue"]]),fe={__name:"DemoAutocompleteVariant",setup(c,{expose:t}){t();const e={items:["California","Colorado","Florida","Georgia","Texas","Wyoming"]};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function ve(c,t,s,e,n,p){return f(),_(D,null,{default:o(()=>[a(d,{cols:"12",md:"6"},{default:o(()=>[a(w,{variant:"solo",label:"Solo",items:e.items,placeholder:"Select State"})]),_:1}),a(d,{cols:"12",md:"6"},{default:o(()=>[a(w,{variant:"outlined",label:"Outlined",placeholder:"Select State",items:e.items})]),_:1}),a(d,{cols:"12",md:"6"},{default:o(()=>[a(w,{variant:"underlined",label:"Underlined",placeholder:"Select State",items:e.items})]),_:1}),a(d,{cols:"12",md:"6"},{default:o(()=>[a(w,{variant:"filled",label:"Filled",placeholder:"Select State",items:e.items})]),_:1}),a(d,{cols:"12",md:"6"},{default:o(()=>[a(w,{variant:"plain",label:"Plain",placeholder:"Select State",items:e.items})]),_:1})]),_:1})}const ge=g(fe,[["render",ve],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/autocomplete/DemoAutocompleteVariant.vue"]]),he={__name:"DemoAutocompleteDensity",setup(c,{expose:t}){t();const n={select:S("Florida"),items:["California","Colorado","Florida","Georgia","Texas","Wyoming"]};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function Se(c,t,s,e,n,p){const r=b;return f(),_(r,{modelValue:e.select,"onUpdate:modelValue":t[0]||(t[0]=i=>e.select=i),label:"States",density:"compact",placeholder:"Select State",items:e.items},null,8,["modelValue"])}const be=g(he,[["render",Se],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/autocomplete/DemoAutocompleteDensity.vue"]]),we={__name:"DemoAutocompleteBasic",setup(c,{expose:t}){t();const e={items:["California","Colorado","Florida","Georgia","Texas","Wyoming"]};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function Ae(c,t,s,e,n,p){const r=b;return f(),_(r,{label:"States",items:e.items,placeholder:"Select State"})}const Ce=g(we,[["render",Ae],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/autocomplete/DemoAutocompleteBasic.vue"]]),ye={ts:`<script setup lang="ts">
const loading = ref(false)
const search = ref()
const select = ref(null)

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
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = (query: string) => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`,js:`<script setup>
const loading = ref(false)
const search = ref()
const select = ref(null)

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
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = query => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`},Ve={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`},xe={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
    closable-chips
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
    closable-chips
  />
</template>
`},Me={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`},ke={ts:`<script setup lang="ts">
const states = [
  { name: 'Florida', abbr: 'FL', id: 1 },
  { name: 'Georgia', abbr: 'GA', id: 2 },
  { name: 'Nebraska', abbr: 'NE', id: 3 },
  { name: 'California', abbr: 'CA', id: 4 },
  { name: 'New York', abbr: 'NY', id: 5 },
]

function customFilter(itemTitle: any, queryText: any, item: any) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()

  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const states = [
  {
    name: 'Florida',
    abbr: 'FL',
    id: 1,
  },
  {
    name: 'Georgia',
    abbr: 'GA',
    id: 2,
  },
  {
    name: 'Nebraska',
    abbr: 'NE',
    id: 3,
  },
  {
    name: 'California',
    abbr: 'CA',
    id: 4,
  },
  {
    name: 'New York',
    abbr: 'NY',
    id: 5,
  },
]

function customFilter(itemTitle, queryText, item) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()
  
  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`},Ne={ts:`<script setup lang="ts">
const select = ref('Florida')
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`,js:`<script setup>
const select = ref('Florida')

const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`},Te={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
    eager
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
    eager
  />
</template>
`},Ie={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref(['Sandra Adams', 'Britta Holt'])

const people = [
  { name: 'Sandra Adams', group: 'Group 1', avatar: avatar1 },
  { name: 'Ali Connors', group: 'Group 1', avatar: avatar2 },
  { name: 'Trevor Hansen', group: 'Group 1', avatar: avatar3 },
  { name: 'Tucker Smith', group: 'Group 1', avatar: avatar4 },
  { name: 'Britta Holt', group: 'Group 2', avatar: avatar5 },
  { name: 'Jane Smith ', group: 'Group 2', avatar: avatar6 },
  { name: 'John Smith', group: 'Group 2', avatar: avatar7 },
  { name: 'Sandra Williams', group: 'Group 2', avatar: avatar8 },
]
<\/script>

<template>
  <AppAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </AppAutocomplete>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref([
  'Sandra Adams',
  'Britta Holt',
])

const people = [
  {
    name: 'Sandra Adams',
    group: 'Group 1',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    group: 'Group 1',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    group: 'Group 1',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    group: 'Group 1',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    group: 'Group 2',
    avatar: avatar5,
  },
  {
    name: 'Jane Smith ',
    group: 'Group 2',
    avatar: avatar6,
  },
  {
    name: 'John Smith',
    group: 'Group 2',
    avatar: avatar7,
  },
  {
    name: 'Sandra Williams',
    group: 'Group 2',
    avatar: avatar8,
  },
]
<\/script>

<template>
  <AppAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </AppAutocomplete>
</template>
`},De={ts:`<script setup lang="ts">
const isEditing = ref(false)
const selectedState = ref(null)

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
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="tabler-building"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'tabler-checks' : 'tabler-edit-circle'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </AppAutocomplete>
</template>
`,js:`<script setup>
const isEditing = ref(false)
const selectedState = ref(null)

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
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="tabler-building"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'tabler-checks' : 'tabler-edit-circle'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </AppAutocomplete>
</template>
`},Ge={ts:`<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v: string) => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <AppAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref(['foo'])
const nameRules = [v => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <AppAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`},Fe={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="Solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="Outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="Underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="Filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="Plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="Solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="Outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="Underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="Filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="Plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`},We={__name:"autocomplete",setup(c,{expose:t}){t();const s={get asyncItems(){return ye},get basic(){return Ve},get chips(){return xe},get clearable(){return Me},get customFilter(){return ke},get density(){return Ne},get multiple(){return Te},get slots(){return Ie},get stateSelector(){return De},get validation(){return Ge},get variant(){return Fe}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function Ee(c,t,s,e,n,p){const r=Ce,i=U,u=be,v=ge,h=_e,A=pe,G=ne,F=re,W=ae,E=Z,O=K,P=Y;return f(),_(D,{class:"match-height"},{default:o(()=>[a(d,{cols:"12",md:"6"},{default:o(()=>[a(i,{title:"Basic",code:e.basic},{default:o(()=>[t[0]||(t[0]=l("p",null,[m(" The "),l("code",null," v-autocomplete "),m(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")],-1)),a(r)]),_:1,__:[0]},8,["code"])]),_:1}),a(d,{cols:"12",md:"6"},{default:o(()=>[a(i,{title:"Density",code:e.density},{default:o(()=>[t[1]||(t[1]=l("p",null,[m(" You can use "),l("code",null," density "),m(" prop to adjusts vertical spacing within the component. Available options are: "),l("code",null,"default"),m(", "),l("code",null,"comfortable"),m(", and "),l("code",null,"compact"),m(". ")],-1)),a(u)]),_:1,__:[1]},8,["code"])]),_:1}),a(d,{cols:"12",md:"12"},{default:o(()=>[a(i,{title:"Variant",code:e.variant},{default:o(()=>[t[2]||(t[2]=l("p",null,[m("Use "),l("code",null,"Solo"),m(", "),l("code",null,"Outlined"),m(", "),l("code",null,"Underlined"),m(", "),l("code",null,"Filled"),m(" and "),l("code",null,"Plain"),m(" options of "),l("code",null,"variant"),m(" prop to change the look of Autocomplete. ")],-1)),a(v)]),_:1,__:[2]},8,["code"])]),_:1}),a(d,{cols:"12",md:"6"},{default:o(()=>[a(i,{title:"Multiple",code:e.multiple},{default:o(()=>[t[3]||(t[3]=l("p",null,[m("Use "),l("code",null,"multiple"),m(" prop to select multiple. Accepts array for value")],-1)),a(h)]),_:1,__:[3]},8,["code"])]),_:1}),a(d,{cols:"12",md:"6"},{default:o(()=>[a(i,{title:"Clearable",code:e.clearable},{default:o(()=>[t[4]||(t[4]=l("p",null,[m("Use "),l("code",null,"clearable"),m(" prop to add input clear functionality.")],-1)),a(A)]),_:1,__:[4]},8,["code"])]),_:1}),a(d,{cols:"12",md:"6"},{default:o(()=>[a(i,{title:"Chips",code:e.chips},{default:o(()=>[t[5]||(t[5]=l("p",null,[m("Use "),l("code",null," chips "),m(" prop to use chips in select.")],-1)),a(G)]),_:1,__:[5]},8,["code"])]),_:1}),a(d,{cols:"12",md:"6"},{default:o(()=>[a(i,{title:"Custom-Filter",code:e.customFilter},{default:o(()=>[t[6]||(t[6]=l("p",null,[m("The "),l("code",null," custom-filter "),m(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")],-1)),a(F)]),_:1,__:[6]},8,["code"])]),_:1}),a(d,{cols:"12",md:"6"},{default:o(()=>[a(i,{title:"Slots",code:e.slots},{default:o(()=>[t[7]||(t[7]=l("p",null,"With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items using their props. ",-1)),a(W)]),_:1,__:[7]},8,["code"])]),_:1}),a(d,{cols:"12",md:"6"},{default:o(()=>[a(i,{title:"Async items",code:e.asyncItems},{default:o(()=>[t[8]||(t[8]=l("p",null,"Sometimes you need to load data externally based upon a search query. ",-1)),a(E)]),_:1,__:[8]},8,["code"])]),_:1}),a(d,{cols:"12",md:"6"},{default:o(()=>[a(i,{title:"State Selector",code:e.stateSelector},{default:o(()=>[t[9]||(t[9]=l("p",null,"Using a combination of v-autocomplete slots and transitions, you can create a stylish toggle able autocomplete field such as below state selector.",-1)),a(O)]),_:1,__:[9]},8,["code"])]),_:1}),a(d,{cols:"12",md:"6"},{default:o(()=>[a(i,{title:"validation",code:e.validation},{default:o(()=>[t[10]||(t[10]=l("p",null,[m("Use "),l("code",null,"rules"),m(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")],-1)),a(P)]),_:1,__:[10]},8,["code"])]),_:1})]),_:1})}const Ct=g(We,[["render",Ee],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/autocomplete.vue"]]);export{Ct as default};
