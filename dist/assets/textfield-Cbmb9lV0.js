import{_ as b}from"./AppTextField-DHa-jRMo.js";import{V as j}from"./VNodeRenderer-B6AKa4pN.js";import{_,d as u,o as c,w as o,a as l,a2 as U,c as q,i as L,Y as T,c5 as N,b1 as H,j as s,m as $,f,I as B,b as a,a0 as v}from"./index-BGIMdqyN.js";import{V as z}from"./VTooltip-Dan-XaZs.js";import{a as i,V as h}from"./VRow-BFNCnCWI.js";import{r as O,e as W}from"./validators-DOkm11CL.js";import{V as Y}from"./VForm-DRVTTq0N.js";import{V as g}from"./VTextField-DRZWT-VU.js";import{_ as G}from"./AppCardCode-C-zO1RUn.js";import"./form-DbIa-vyG.js";import"./VOverlay-qz3yYbIb.js";import"./easing-Bybner-F.js";import"./lazy-CKhx2O3m.js";import"./scopeId-DfGkhZ3B.js";import"./VImg-nOKaZD-s.js";import"./forwardRefs-C-GTDzx5.js";/* empty css              */import"./helpers-DK5QwNv0.js";/* empty css                   */import"./VCounter-A4qJAdeX.js";import"./VField-B7Xo4Lej.js";import"./VInput-CH8dtMYl.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VAvatar-CYJWVBhL.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";const J={__name:"DemoTextfieldIconSlots",setup(d,{expose:e}){e();const r=f("Hey!"),t=f(!1),m={message:r,loading:t,clickMe:()=>{t.value=!0,r.value="Wait for it...",setTimeout(()=>{t.value=!1,r.value="You've clicked me!"},2e3)},get VNodeRenderer(){return j},get themeConfig(){return B}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}},K={key:0,class:"ms-3"};function Q(d,e,r,t,x,m){const p=b;return c(),u(p,{modelValue:t.message,"onUpdate:modelValue":e[0]||(e[0]=n=>t.message=n),clearable:"",label:"Message",placeholder:"Hey!!",type:"text",class:"textfield-demo-icon-slot"},{prepend:o(()=>[l(z,{location:"bottom"},{activator:o(({props:n})=>[l(T,$(n,{icon:"tabler-help"}),null,16)]),default:o(()=>[e[1]||(e[1]=s(" I'm a tooltip "))]),_:1,__:[1]})]),"append-inner":o(()=>[l(N,{"leave-absolute":""},{default:o(()=>[t.loading?(c(),u(H,{key:0,color:"primary",width:"3",size:"24",indeterminate:""})):(c(),u(t.VNodeRenderer,{key:1,class:"text-2xl",nodes:t.themeConfig.app.logo},null,8,["nodes"]))]),_:1})]),append:o(()=>[l(U,{icon:d.$vuetify.display.smAndDown,onClick:t.clickMe},{default:o(()=>[l(T,{icon:"tabler-viewfinder",color:"#fff",size:"22"}),d.$vuetify.display.mdAndUp?(c(),q("span",K,"Click me")):L("",!0)]),_:1},8,["icon"])]),_:1},8,["modelValue"])}const X=_(J,[["render",Q],["__scopeId","data-v-105bd068"],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textfield/DemoTextfieldIconSlots.vue"]]),Z={__name:"DemoTextfieldPasswordInput",setup(d,{expose:e}){e();const r=f(!1),t=f(!0),x=f("Password"),m=f("wqfasds"),n={show1:r,show2:t,password:x,confirmPassword:m,rules:{required:V=>!!V||"Required.",min:V=>V.length>=8||"Min 8 characters"}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function ee(d,e,r,t,x,m){const p=b;return c(),u(h,null,{default:o(()=>[l(i,{cols:"12",sm:"6"},{default:o(()=>[l(p,{modelValue:t.password,"onUpdate:modelValue":e[0]||(e[0]=n=>t.password=n),"append-inner-icon":t.show1?"tabler-eye-off":"tabler-eye",rules:[t.rules.required,t.rules.min],type:t.show1?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",placeholder:"············",counter:"","onClick:appendInner":e[1]||(e[1]=n=>t.show1=!t.show1)},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),l(i,{cols:"12",sm:"6"},{default:o(()=>[l(p,{modelValue:t.confirmPassword,"onUpdate:modelValue":e[2]||(e[2]=n=>t.confirmPassword=n),rules:[t.rules.required,t.rules.min],"append-inner-icon":t.show2?"tabler-eye-off":"tabler-eye",type:t.show2?"text":"password",name:"input-10-2",placeholder:"············",label:"Visible",hint:"At least 8 characters","onClick:appendInner":e[3]||(e[3]=n=>t.show2=!t.show2)},null,8,["modelValue","rules","append-inner-icon","type"])]),_:1})]),_:1})}const le=_(Z,[["render",ee],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textfield/DemoTextfieldPasswordInput.vue"]]),te={};function oe(d,e){const r=b;return c(),u(r,null,{label:o(()=>[e[0]||(e[0]=s(" What about  ")),e[1]||(e[1]=a("strong",null,"icon",-1)),e[2]||(e[2]=s(" here? ")),l(T,{icon:"tabler-file-search"})]),_:1})}const ne=_(te,[["render",oe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textfield/DemoTextfieldLabelSlot.vue"]]),ae={__name:"DemoTextfieldIconEvents",setup(d,{expose:e}){e();const r=f("Hey!"),t=f(!0),x=f(0),m=()=>{t.value=!t.value},p=()=>{r.value=""},n=()=>{x.value=0},w={message:r,marker:t,iconIndex:x,toggleMarker:m,clearMessage:p,resetIcon:n,sendMessage:()=>{n(),p()}};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}};function re(d,e,r,t,x,m){const p=b;return c(),u(p,{modelValue:t.message,"onUpdate:modelValue":e[0]||(e[0]=n=>t.message=n),clearable:"",type:"text",label:"Message",color:"primary",placeholder:"Hey!!","clear-icon":"tabler-circle-x","append-icon":t.message?d.$vuetify.locale.isRtl?"tabler-arrow-big-left-lines":"tabler-arrow-big-right-lines":"tabler-microphone","append-inner-icon":t.marker?"tabler-map-pin":"tabler-map-pin-off","onClick:appendInner":t.toggleMarker,"onClick:append":t.sendMessage,"onClick:clear":t.clearMessage},null,8,["modelValue","append-icon","append-inner-icon"])}const se=_(ae,[["render",re],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textfield/DemoTextfieldIconEvents.vue"]]),ie={__name:"DemoTextfieldValidation",setup(d,{expose:e}){e();const t={email:f("")};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function de(d,e,r,t,x,m){const p=b;return c(),u(Y,null,{default:o(()=>[l(p,{modelValue:t.email,"onUpdate:modelValue":e[0]||(e[0]=n=>t.email=n),rules:["requiredValidator"in d?d.requiredValidator:v(O),"emailValidator"in d?d.emailValidator:v(W)],placeholder:"johnedoe@email.com",label:"E-mail"},null,8,["modelValue","rules"])]),_:1})}const pe=_(ie,[["render",de],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textfield/DemoTextfieldValidation.vue"]]),ce={};function me(d,e){const r=b;return c(),u(r,{label:"Regular",placeholder:"Placeholder Text","single-line":""})}const ue=_(ce,[["render",me],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textfield/DemoTextfieldSingleLine.vue"]]),fe={__name:"DemoTextfieldPrefixesAndSuffixes",setup(d,{expose:e}){e();const r=f(10.05),t=f(28.02),x=f("example"),m=f("04:56"),p={amount:r,weight:t,email:x,time:m};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function _e(d,e,r,t,x,m){const p=b;return c(),u(h,null,{default:o(()=>[l(i,{cols:"12"},{default:o(()=>[l(p,{modelValue:t.amount,"onUpdate:modelValue":e[0]||(e[0]=n=>t.amount=n),label:"Amount",prefix:"$",type:"number",placeholder:"10.05"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(p,{modelValue:t.weight,"onUpdate:modelValue":e[1]||(e[1]=n=>t.weight=n),label:"Weight",suffix:"lbs",type:"number",placeholder:"28.02"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(p,{modelValue:t.email,"onUpdate:modelValue":e[2]||(e[2]=n=>t.email=n),label:"Email address",suffix:"@gmail.com",placeholder:"example"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(p,{modelValue:t.time,"onUpdate:modelValue":e[3]||(e[3]=n=>t.time=n),label:"Label Text",type:"time",suffix:"PST",placeholder:"04:56"},null,8,["modelValue"])]),_:1})]),_:1})}const xe=_(fe,[["render",_e],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textfield/DemoTextfieldPrefixesAndSuffixes.vue"]]),be={};function he(d,e){const r=b;return c(),u(h,null,{default:o(()=>[l(i,{cols:"12"},{default:o(()=>[l(r,{label:"Prepend","prepend-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(r,{label:"Prepend Inner","prepend-inner-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(r,{label:"Append","append-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(r,{label:"Append Inner","append-inner-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1})]),_:1})}const Ve=_(be,[["render",he],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textfield/DemoTextfieldIcons.vue"]]),ge={};function we(d,e){const r=b;return c(),u(r,{color:"success",label:"First name",placeholder:"Placeholder Text"})}const Te=_(ge,[["render",we],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textfield/DemoTextfieldCustomColors.vue"]]),ve={};function Ce(d,e){const r=b;return c(),u(r,{placeholder:"Placeholder Text",label:"Regular",clearable:""})}const ye=_(ve,[["render",Ce],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textfield/DemoTextfieldClearable.vue"]]),Ae={__name:"DemoTextfieldCounter",setup(d,{expose:e}){e();const r=f("Preliminary report"),t=f("California is a state in the western United States"),m={title:r,description:t,rules:[p=>p.length<=25||"Max 25 characters"]};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}};function Fe(d,e,r,t,x,m){const p=b;return c(),u(h,null,{default:o(()=>[l(i,{cols:"12"},{default:o(()=>[l(p,{modelValue:t.title,"onUpdate:modelValue":e[0]||(e[0]=n=>t.title=n),rules:t.rules,counter:"25",placeholder:"Placeholder Text",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(p,{modelValue:t.description,"onUpdate:modelValue":e[1]||(e[1]=n=>t.description=n),rules:t.rules,counter:"",maxlength:"25",placeholder:"Placeholder Text",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1})}const Pe=_(Ae,[["render",Fe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textfield/DemoTextfieldCounter.vue"]]),ke={};function Re(d,e){const r=b;return c(),u(h,null,{default:o(()=>[l(i,null,{default:o(()=>[l(r,{label:"Disabled",placeholder:"Placeholder Text",disabled:""})]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(r,{placeholder:"Placeholder Text",label:"Readonly",readonly:""})]),_:1})]),_:1})}const Ie=_(ke,[["render",Re],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textfield/DemoTextfieldState.vue"]]),Se={};function De(d,e){return c(),u(h,null,{default:o(()=>[l(i,{cols:"12",md:"6"},{default:o(()=>[l(g,{label:"Outlined",variant:"outlined"})]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(g,{label:"Filled",variant:"filled"})]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(g,{label:"Solo",variant:"solo"})]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(g,{label:"Plain",variant:"plain"})]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(g,{label:"Underlined",variant:"underlined"})]),_:1})]),_:1})}const Me=_(Se,[["render",De],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textfield/DemoTextfieldVariant.vue"]]),Ee={};function je(d,e){const r=b;return c(),u(r,{label:"Compact",density:"compact",placeholder:"Placeholder Text"})}const Ue=_(Ee,[["render",je],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textfield/DemoTextfieldDensity.vue"]]),qe={};function Le(d,e){const r=b;return c(),u(r,{label:"Regular",placeholder:"Placeholder Text"})}const Ne=_(qe,[["render",Le],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textfield/DemoTextfieldBasic.vue"]]),He={ts:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`},$e={ts:`<template>
  <AppTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <AppTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`},Be={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},ze={ts:`<template>
  <AppTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`},Oe={ts:`<template>
  <AppTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`},We={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="tabler-circle-x"
    :append-icon="message ? $vuetify.locale.isRtl ? 'tabler-arrow-big-left-lines' : 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="tabler-circle-x"
    :append-icon="message ? $vuetify.locale.isRtl ? 'tabler-arrow-big-left-lines' : 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},Ye={ts:`<script setup lang="ts">
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    placeholder="Hey!!"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="primary"
          width="3"
          size="24"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon
          icon="tabler-viewfinder"
          color="#fff"
          size="22"
        />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
// .textfield-demo-icon-slot {
//   :deep(.v-input) {
//     align-content: center;

//     .v-input__prepend,
//     .v-input__append {
//       padding-block-start: 0 !important;
//     }

//     .v-input__prepend {
//       align-items: center;
//     }

//     .v-field__append-inner .v-progress-circular svg {
//       block-size: 1.3em;
//       inline-size: 1.3em;
//     }

//     .v-field__append-inner svg {
//       margin-block-start: 0.1rem;
//     }
//   }
// }
</style>
`,js:`<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    placeholder="Hey!!"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="primary"
          width="3"
          size="24"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon
          icon="tabler-viewfinder"
          color="#fff"
          size="22"
        />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
// .textfield-demo-icon-slot {
//   :deep(.v-input) {
//     align-content: center;

//     .v-input__prepend,
//     .v-input__append {
//       padding-block-start: 0 !important;
//     }

//     .v-input__prepend {
//       align-items: center;
//     }

//     .v-field__append-inner .v-progress-circular svg {
//       block-size: 1.3em;
//       inline-size: 1.3em;
//     }

//     .v-field__append-inner svg {
//       margin-block-start: 0.1rem;
//     }
//   }
// }
</style>
`},Ge={ts:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},Je={ts:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </AppTextField>
</template>
`,js:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </AppTextField>
</template>
`},Ke={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye' "
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye' "
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},Qe={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`},Xe={ts:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`},Ze={ts:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},el={ts:`<script lang="ts" setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`},ll={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`},tl={__name:"textfield",setup(d,{expose:e}){e();const r={get basic(){return He},get clearable(){return $e},get counter(){return Be},get customColors(){return ze},get density(){return Oe},get iconEvents(){return We},get iconSlots(){return Ye},get icons(){return Ge},get labelSlot(){return Je},get passwordInput(){return Ke},get prefixesAndSuffixes(){return Qe},get singleLine(){return Xe},get state(){return Ze},get validation(){return el},get variant(){return ll}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function ol(d,e,r,t,x,m){const p=Ne,n=G,V=Ue,w=Me,C=Ie,y=Pe,A=ye,F=Te,P=Ve,k=xe,R=ue,I=pe,S=se,D=ne,M=le,E=X;return c(),u(h,{class:"match-height"},{default:o(()=>[l(i,{cols:"12",md:"6"},{default:o(()=>[l(n,{title:"Basic",code:t.basic},{default:o(()=>[e[0]||(e[0]=a("p",null,"Text fields components are used for collecting user provided information.",-1)),l(p)]),_:1,__:[0]},8,["code"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(n,{title:"Density",code:t.density},{default:o(()=>[e[1]||(e[1]=a("p",null,[s("The "),a("code",null,"density"),s(" prop decreases the height of the text field based upon levels of density; "),a("code",null,"default"),s(","),a("code",null,"comfortable"),s(", and "),a("code",null,"compact"),s(".")],-1)),l(V)]),_:1,__:[1]},8,["code"])]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(n,{title:"Variant",code:t.variant},{default:o(()=>[e[2]||(e[2]=a("p",null,[s("Use "),a("code",null,"solo"),s(", "),a("code",null,"filled"),s(", "),a("code",null,"outlined"),s(", "),a("code",null,"plain"),s(" and "),a("code",null,"underlined"),s(" option of "),a("code",null,"variant"),s(" prop to change the look of the textfield. ")],-1)),l(w)]),_:1,__:[2]},8,["code"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(n,{title:"State",code:t.state},{default:o(()=>[e[3]||(e[3]=a("p",null,"Text fields can be disabled or readonly.",-1)),l(C)]),_:1,__:[3]},8,["code"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(n,{title:"Counter",code:t.counter},{default:o(()=>[e[4]||(e[4]=a("p",null,[s("Use a "),a("code",null,"counter"),s(" prop to inform a user of the character limit.")],-1)),l(y)]),_:1,__:[4]},8,["code"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(n,{title:"Clearable",code:t.clearable},{default:o(()=>[e[5]||(e[5]=a("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1)),l(A)]),_:1,__:[5]},8,["code"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(n,{title:"Custom Colors",code:t.customColors},{default:o(()=>[e[6]||(e[6]=a("p",null,[s("Use "),a("code",null,"color"),s(" prop to change the input border color.")],-1)),l(F)]),_:1,__:[6]},8,["code"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(n,{title:"Icons",code:t.icons},{default:o(()=>[e[7]||(e[7]=a("p",null,[s("You can add icons to the text field with "),a("code",null,"prepend-icon"),s(", "),a("code",null,"append-icon"),s(" and "),a("code",null,"append-inner-icon"),s(" and "),a("code",null,"prepend-inner-icon"),s(" props.")],-1)),l(P)]),_:1,__:[7]},8,["code"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(n,{title:"Prefixes and suffixes",code:t.prefixesAndSuffixes},{default:o(()=>[e[8]||(e[8]=a("p",null,[s("The "),a("code",null,"prefix"),s(" and "),a("code",null,"suffix"),s(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1)),l(k)]),_:1,__:[8]},8,["code"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(n,{title:"Single line",code:t.singleLine},{default:o(()=>[e[9]||(e[9]=a("p",null,[a("code",null,"single-line"),s(" text fields do not float their label on focus or with data.")],-1)),l(R)]),_:1,__:[9]},8,["code"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(n,{title:"Validation",code:t.validation},{default:o(()=>[e[10]||(e[10]=a("p",null,[s("Vuetify includes simple validation through the "),a("code",null,"rules"),s(" prop.")],-1)),l(I)]),_:1,__:[10]},8,["code"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(n,{title:"Icon events",code:t.iconEvents},{default:o(()=>[e[11]||(e[11]=a("p",null,[a("code",null,"click:prepend"),s(", "),a("code",null,"click:append"),s(", "),a("code",null,"click:append-inner"),s(", and "),a("code",null,"click:clear"),s(" will be emitted when you click on the respective icon")],-1)),l(S)]),_:1,__:[11]},8,["code"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(n,{title:"Label Slot",code:t.labelSlot},{default:o(()=>[e[12]||(e[12]=a("p",null,[s("Text field label can be defined in "),a("code",null,"label"),s(" slot - that will allow to use HTML content.")],-1)),l(D)]),_:1,__:[12]},8,["code"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(n,{title:"Password input",code:t.passwordInput},{default:o(()=>[e[13]||(e[13]=a("p",null,[s("Using the HTML input "),a("code",null,"type"),s(" password can be used with an appended icon and callback to control the visibility.")],-1)),l(M)]),_:1,__:[13]},8,["code"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(n,{title:"Icon slots",code:t.iconSlots},{default:o(()=>[e[14]||(e[14]=a("p",null,[s("Instead of using "),a("code",null,"prepend"),s("/"),a("code",null,"append"),s("/"),a("code",null,"append-inner"),s(" icons you can use slots to extend input's functionality.")],-1)),l(E)]),_:1,__:[14]},8,["code"])]),_:1})]),_:1})}const Il=_(tl,[["render",ol],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/textfield.vue"]]);export{Il as default};
