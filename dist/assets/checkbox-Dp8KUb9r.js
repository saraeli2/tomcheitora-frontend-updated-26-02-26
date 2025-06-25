import{_ as h,c as f,o as x,a as t,w as s,F as g,f as m,d as C,b as c,j as a,m as O,a1 as I,t as z,h as D}from"./index-BGIMdqyN.js";import{_ as U}from"./AppTextField-DHa-jRMo.js";import{a as u,V as _}from"./VRow-BFNCnCWI.js";import{V as i}from"./VCheckbox-TzXZlS86.js";import{V as A}from"./VTooltip-Dan-XaZs.js";import{_ as E}from"./AppCardCode-C-zO1RUn.js";import"./form-DbIa-vyG.js";import"./VTextField-DRZWT-VU.js";/* empty css                   */import"./VCounter-A4qJAdeX.js";import"./VImg-nOKaZD-s.js";import"./VField-B7Xo4Lej.js";import"./easing-Bybner-F.js";import"./VInput-CH8dtMYl.js";import"./forwardRefs-C-GTDzx5.js";/* empty css              */import"./VCheckboxBtn-C50DCjx7.js";import"./VSelectionControl-Dyu49DZR.js";import"./VOverlay-qz3yYbIb.js";import"./lazy-CKhx2O3m.js";import"./scopeId-DfGkhZ3B.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VAvatar-CYJWVBhL.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";const j={__name:"DemoCheckboxInlineTextField",setup(b,{expose:o}){o();const n=m(!0),e=m(!1),r={includeFiles:n,isInputEnabled:e};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function P(b,o,n,e,r,p){const l=U;return x(),f(g,null,[t(_,null,{default:s(()=>[t(u,{sm:"1",cols:"2",class:"d-flex align-end"},{default:s(()=>[t(i,{modelValue:e.includeFiles,"onUpdate:modelValue":o[0]||(o[0]=d=>e.includeFiles=d)},null,8,["modelValue"])]),_:1}),t(u,{sm:"11",cols:"10"},{default:s(()=>[t(l,{label:"Include files",placeholder:"Placeholder Text"})]),_:1})]),_:1}),t(_,null,{default:s(()=>[t(u,{cols:"2",sm:"1",class:"d-flex align-end"},{default:s(()=>[t(i,{modelValue:e.isInputEnabled,"onUpdate:modelValue":o[1]||(o[1]=d=>e.isInputEnabled=d)},null,8,["modelValue"])]),_:1}),t(u,{cols:"10",sm:"11"},{default:s(()=>[t(l,{disabled:!e.isInputEnabled,label:"I only work if you check the box",placeholder:"Placeholder Text"},null,8,["disabled"])]),_:1})]),_:1})],64)}const J=h(j,[["render",P],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/checkbox/DemoCheckboxInlineTextField.vue"]]),F={__name:"DemoCheckboxLabelSlot",setup(b,{expose:o}){o();const e={checkbox:m(!1)};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function R(b,o,n,e,r,p){return x(),C(i,{modelValue:e.checkbox,"onUpdate:modelValue":o[1]||(o[1]=l=>e.checkbox=l)},{label:s(()=>[c("div",null,[o[3]||(o[3]=a(" I agree that ")),t(A,{location:"bottom"},{activator:s(({props:l})=>[c("a",O({href:"https://vuetifyjs.com/",target:"_blank",rel:"noopener noreferrer"},l,{onClick:o[0]||(o[0]=I(()=>{},["stop"]))})," Vuetify ",16)]),default:s(()=>[o[2]||(o[2]=a(" Opens in new window "))]),_:1,__:[2]}),o[4]||(o[4]=a(" is awesome "))])]),_:1},8,["modelValue"])}const B=h(F,[["render",R],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/checkbox/DemoCheckboxLabelSlot.vue"]]),M={__name:"DemoCheckboxStates",setup(b,{expose:o}){o();const n=m(!0),e=m(!0),r=m(!0),p=m(!1),l={toggleCheckbox:n,toggleIndeterminateCheckbox:e,disabledCheckbox:r,toggleOffCheckbox:p};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},W={class:"demo-space-x"};function H(b,o,n,e,r,p){return x(),f("div",W,[t(i,{modelValue:e.toggleCheckbox,"onUpdate:modelValue":o[0]||(o[0]=l=>e.toggleCheckbox=l),label:"On"},null,8,["modelValue"]),t(i,{modelValue:e.toggleOffCheckbox,"onUpdate:modelValue":o[1]||(o[1]=l=>e.toggleOffCheckbox=l),label:"Off"},null,8,["modelValue"]),t(i,{indeterminate:e.toggleIndeterminateCheckbox,"onUpdate:indeterminate":o[2]||(o[2]=l=>e.toggleIndeterminateCheckbox=l),modelValue:e.toggleIndeterminateCheckbox,"onUpdate:modelValue":o[3]||(o[3]=l=>e.toggleIndeterminateCheckbox=l),label:"Indeterminate"},null,8,["indeterminate","modelValue"]),t(i,{"model-value":e.disabledCheckbox,disabled:"",label:"On disabled"},null,8,["model-value"]),t(i,{disabled:"",label:"Off disabled"})])}const N=h(M,[["render",H],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/checkbox/DemoCheckboxStates.vue"]]),$={__name:"DemoCheckboxCheckboxValue",setup(b,{expose:o}){o();const n=m(1),e=m("Show"),r={checkbox:n,checkboxString:e};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},Y={class:"demo-space-x"};function q(b,o,n,e,r,p){return x(),f("div",Y,[t(i,{modelValue:e.checkbox,"onUpdate:modelValue":o[0]||(o[0]=l=>e.checkbox=l),"true-value":1,"false-value":0,label:`${e.checkbox.toString()}`},null,8,["modelValue","label"]),t(i,{modelValue:e.checkboxString,"onUpdate:modelValue":o[1]||(o[1]=l=>e.checkboxString=l),"true-value":"Show","false-value":"Hide",color:"success",label:`${e.checkboxString.toString()}`},null,8,["modelValue","label"])])}const G=h($,[["render",q],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/checkbox/DemoCheckboxCheckboxValue.vue"]]),K={__name:"DemoCheckboxIcon",setup(b,{expose:o}){o();const n=m(!0),e=m(!0),r=m(!0),l={toggleCheckboxOne:n,toggleCheckboxTwo:e,toggleCheckboxThree:r,capitalizedLabel:d=>{const k=d.toString();return k.charAt(0).toUpperCase()+k.slice(1)}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},Q={class:"demo-space-x"};function X(b,o,n,e,r,p){return x(),f("div",Q,[t(i,{modelValue:e.toggleCheckboxOne,"onUpdate:modelValue":o[0]||(o[0]=l=>e.toggleCheckboxOne=l),label:e.capitalizedLabel(e.toggleCheckboxOne),"true-icon":"tabler-check","false-icon":"tabler-x"},null,8,["modelValue","label"]),t(i,{modelValue:e.toggleCheckboxTwo,"onUpdate:modelValue":o[1]||(o[1]=l=>e.toggleCheckboxTwo=l),label:e.capitalizedLabel(e.toggleCheckboxTwo),"true-icon":"tabler-alarm","false-icon":"tabler-alarm",color:"success"},null,8,["modelValue","label"]),t(i,{modelValue:e.toggleCheckboxThree,"onUpdate:modelValue":o[2]||(o[2]=l=>e.toggleCheckboxThree=l),label:e.capitalizedLabel(e.toggleCheckboxThree),"true-icon":"tabler-check","false-icon":"tabler-circle-x",color:"error"},null,8,["modelValue","label"])])}const Z=h(K,[["render",X],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/checkbox/DemoCheckboxIcon.vue"]]),ee={__name:"DemoCheckboxModelAsArray",setup(b,{expose:o}){o();const e={selected:m(["John"])};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},oe={class:"demo-space-x"},le={class:"mt-1"};function te(b,o,n,e,r,p){return x(),f(g,null,[c("div",oe,[t(i,{modelValue:e.selected,"onUpdate:modelValue":o[0]||(o[0]=l=>e.selected=l),label:"John",value:"John"},null,8,["modelValue"]),t(i,{modelValue:e.selected,"onUpdate:modelValue":o[1]||(o[1]=l=>e.selected=l),label:"Jacob",color:"success",value:"Jacob"},null,8,["modelValue"]),t(i,{modelValue:e.selected,"onUpdate:modelValue":o[2]||(o[2]=l=>e.selected=l),label:"Johnson",color:"info",value:"Johnson"},null,8,["modelValue"])]),c("p",le,z(e.selected),1)],64)}const ce=h(ee,[["render",te],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/checkbox/DemoCheckboxModelAsArray.vue"]]),ae={__name:"DemoCheckboxColors",setup(b,{expose:o}){o();const n=m(["Primary","Secondary","Success","Info","Warning","Error"]),e=m(["Primary","Secondary","Success","Info","Warning","Error"]),r={colorCheckbox:n,selectedCheckbox:e};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},ne={class:"demo-space-x"};function se(b,o,n,e,r,p){return x(),f("div",ne,[(x(!0),f(g,null,D(e.colorCheckbox,l=>(x(),C(i,{key:l,modelValue:e.selectedCheckbox,"onUpdate:modelValue":o[0]||(o[0]=d=>e.selectedCheckbox=d),label:l,color:l.toLowerCase(),value:l},null,8,["modelValue","label","color","value"]))),128))])}const re=h(ae,[["render",se],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/checkbox/DemoCheckboxColors.vue"]]),de={__name:"DemoCheckboxDensity",setup(b,{expose:o}){o();const n=m(!0),e=m(!1),p={checkboxOne:n,checkboxTwo:e,capitalizedLabel:l=>{const d=l.toString();return d.charAt(0).toUpperCase()+d.slice(1)}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}},ie={class:"demo-space-x"};function be(b,o,n,e,r,p){return x(),f("div",ie,[t(i,{modelValue:e.checkboxOne,"onUpdate:modelValue":o[0]||(o[0]=l=>e.checkboxOne=l),density:"compact",label:e.capitalizedLabel(e.checkboxOne)},null,8,["modelValue","label"]),t(i,{modelValue:e.checkboxTwo,"onUpdate:modelValue":o[1]||(o[1]=l=>e.checkboxTwo=l),density:"compact",label:e.capitalizedLabel(e.checkboxTwo)},null,8,["modelValue","label"])])}const me=h(de,[["render",be],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/checkbox/DemoCheckboxDensity.vue"]]),pe={__name:"DemoCheckboxBasic",setup(b,{expose:o}){o();const n=m(!0),e=m(!1),p={checkboxOne:n,checkboxTwo:e,capitalizedLabel:l=>{const d=l.toString();return d.charAt(0).toUpperCase()+d.slice(1)}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}},ue={class:"demo-space-x"};function xe(b,o,n,e,r,p){return x(),f("div",ue,[t(i,{modelValue:e.checkboxOne,"onUpdate:modelValue":o[0]||(o[0]=l=>e.checkboxOne=l),label:e.capitalizedLabel(e.checkboxOne)},null,8,["modelValue","label"]),t(i,{modelValue:e.checkboxTwo,"onUpdate:modelValue":o[1]||(o[1]=l=>e.checkboxTwo=l),label:e.capitalizedLabel(e.checkboxTwo)},null,8,["modelValue","label"])])}const he=h(pe,[["render",xe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/checkbox/DemoCheckboxBasic.vue"]]),fe={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},ke={ts:`<script lang="ts" setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`},_e={ts:`<script lang="ts" setup>
const colorCheckbox = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const selectedCheckbox = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`,js:`<script setup>
const colorCheckbox = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const selectedCheckbox = ref([
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
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`},ge={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},Ce={ts:`<script lang="ts" setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="tabler-check"
      false-icon="tabler-x"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="tabler-alarm"
      false-icon="tabler-alarm"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="tabler-check"
      false-icon="tabler-circle-x"
      color="error"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="tabler-check"
      false-icon="tabler-x"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="tabler-alarm"
      false-icon="tabler-alarm"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="tabler-check"
      false-icon="tabler-circle-x"
      color="error"
    />
  </div>
</template>
`},ve={ts:`<script lang="ts" setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
      class="d-flex align-end"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <AppTextField
        label="Include files"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
      class="d-flex align-end"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <AppTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
      class="d-flex align-end"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <AppTextField
        label="Include files"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
      class="d-flex align-end"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <AppTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},Ve={ts:`<script lang="ts" setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`,js:`<script setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`},we={ts:`<script lang="ts" setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`,js:`<script setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`},Te={ts:`<script setup lang="ts">
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`},Se={__name:"checkbox",setup(b,{expose:o}){o();const n={get basic(){return fe},get checkboxValue(){return ke},get colors(){return _e},get density(){return ge},get icon(){return Ce},get inlineTextField(){return ve},get labelSlot(){return Ve},get modelAsArray(){return we},get states(){return Te}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function ye(b,o,n,e,r,p){const l=he,d=E,k=me,v=re,V=ce,w=Z,T=G,S=N,y=B,L=J;return x(),C(_,{class:"match-height"},{default:s(()=>[t(u,{cols:"12",md:"6"},{default:s(()=>[t(d,{title:"Basic",code:e.basic},{default:s(()=>[o[0]||(o[0]=c("p",null,[c("code",null,"v-checkbox"),a(" in its simplest form provides a toggle between 2 values.")],-1)),t(l)]),_:1,__:[0]},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:s(()=>[t(d,{title:"Density",code:e.density},{default:s(()=>[o[1]||(o[1]=c("p",null,[a("Use "),c("code",null,"density"),a(" prop to reduces the input height. Available options are: "),c("code",null,"default"),a(", "),c("code",null,"comfortable"),a(", and "),c("code",null,"compact"),a(".")],-1)),t(k)]),_:1,__:[1]},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:s(()=>[t(d,{title:"Colors",code:e.colors},{default:s(()=>[o[2]||(o[2]=c("p",null,[a("Checkboxes can be colored by using any of the builtin colors and contextual names using the "),c("code",null,"color"),a(" prop.")],-1)),t(v)]),_:1,__:[2]},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:s(()=>[t(d,{title:"Model as array",code:e.modelAsArray},{default:s(()=>[o[3]||(o[3]=c("p",null,[a("Multiple "),c("code",null,"v-checkbox"),a("'s can share the same "),c("code",null,"v-model"),a(" by using an array.")],-1)),t(V)]),_:1,__:[3]},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:s(()=>[t(d,{title:"Icon",code:e.icon},{default:s(()=>[o[4]||(o[4]=c("p",null,[a("Use "),c("code",null,"false-icon"),a(" and "),c("code",null,"true-icon"),a(" prop to change the icon on the checkbox.")],-1)),t(w)]),_:1,__:[4]},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:s(()=>[t(d,{title:"Checkbox Value",code:e.checkboxValue},{default:s(()=>[o[5]||(o[5]=c("p",null,[a("Use "),c("code",null,"false-value"),a(" and "),c("code",null,"true-value"),a(" prop to sets value for truthy and falsy state")],-1)),t(T)]),_:1,__:[5]},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:s(()=>[t(d,{title:"States",code:e.states},{default:s(()=>[o[6]||(o[6]=c("p",null,[c("code",null,"v-checkbox"),a(" can have different states such as "),c("code",null,"default"),a(", "),c("code",null,"disabled"),a(", and "),c("code",null,"indeterminate"),a(".")],-1)),t(S)]),_:1,__:[6]},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:s(()=>[t(d,{title:"Label Slot",code:e.labelSlot},{default:s(()=>[o[7]||(o[7]=c("p",null,[a("Checkbox labels can be defined in "),c("code",null,"label"),a(" slot - that will allow to use HTML content.")],-1)),t(y)]),_:1,__:[7]},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:s(()=>[t(d,{title:"Inline text-field",code:e.inlineTextField},{default:s(()=>[o[8]||(o[8]=c("p",null,[a("You can place "),c("code",null,"v-checkbox"),a(" in line with other components such as "),c("code",null,"v-text-field"),a(".")],-1)),t(L)]),_:1,__:[8]},8,["code"])]),_:1})]),_:1})}const eo=h(Se,[["render",ye],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/checkbox.vue"]]);export{eo as default};
