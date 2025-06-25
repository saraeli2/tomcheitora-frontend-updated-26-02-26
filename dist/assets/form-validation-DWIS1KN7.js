import{r as m,b as M,i as T,a as k,d as x,l as R,p as U,c as _,f as j,e as v,u as O}from"./validators-DOkm11CL.js";import{_ as w,d as h,o as F,w as i,a as o,a0 as s,a2 as y,j as b,a1 as g,f as n,b as N}from"./index-BGIMdqyN.js";import{_ as q}from"./AppTextField-DHa-jRMo.js";import{V as C,a as t}from"./VRow-BFNCnCWI.js";import{V as P}from"./VForm-DRVTTq0N.js";import{_ as Y}from"./AppCardCode-C-zO1RUn.js";import"./helpers-DK5QwNv0.js";import"./form-DbIa-vyG.js";import"./VTextField-DRZWT-VU.js";/* empty css                   */import"./VCounter-A4qJAdeX.js";import"./VImg-nOKaZD-s.js";import"./VField-B7Xo4Lej.js";import"./easing-Bybner-F.js";import"./VInput-CH8dtMYl.js";import"./forwardRefs-C-GTDzx5.js";/* empty css              */import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VAvatar-CYJWVBhL.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";const I={__name:"DemoFormValidationValidationTypes",setup(e,{expose:r}){r();const u=n(""),l=n(""),c=n(""),V=n(""),d=n(""),a=n(""),p=n(""),f=n(""),E=n(""),B=n(""),S=n(""),D=n(""),L=n(),A={requiredField:u,numberBetween10to20:l,onlyConsistNumber:c,matchRegularEx:V,onlyAlphabeticCharacters:d,specifiedLength:a,password:p,digits:f,repeatPassword:E,onlyAlphabeticNumbersDashesUnderscores:B,email:S,validURL:D,refForm:L,get VForm(){return P}};return Object.defineProperty(A,"__isScriptSetup",{enumerable:!1,value:!0}),A}};function J(e,r,u,l,c,V){const d=q;return F(),h(l.VForm,{ref:"refForm",onSubmit:r[13]||(r[13]=g(()=>{},["prevent"]))},{default:i(()=>[o(C,null,{default:i(()=>[o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.requiredField,"onUpdate:modelValue":r[0]||(r[0]=a=>l.requiredField=a),"persistent-placeholder":"",placeholder:"This field is required",rules:["requiredValidator"in e?e.requiredValidator:s(m)]},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.numberBetween10to20,"onUpdate:modelValue":r[1]||(r[1]=a=>l.numberBetween10to20=a),"persistent-placeholder":"",placeholder:"Enter Number between 10 & 20",rules:["requiredValidator"in e?e.requiredValidator:s(m),("betweenValidator"in e?e.betweenValidator:s(M))(l.numberBetween10to20,10,20)]},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.onlyConsistNumber,"onUpdate:modelValue":r[2]||(r[2]=a=>l.onlyConsistNumber=a),"persistent-placeholder":"",placeholder:"Must only consist of numbers",rules:["requiredValidator"in e?e.requiredValidator:s(m),"integerValidator"in e?e.integerValidator:s(T)]},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.matchRegularEx,"onUpdate:modelValue":r[3]||(r[3]=a=>l.matchRegularEx=a),"persistent-placeholder":"",placeholder:"Must match the specified regular expression : ^([0-9]+)$ - numbers only",rules:["requiredValidator"in e?e.requiredValidator:s(m),("regexValidator"in e?e.regexValidator:s(k))(l.matchRegularEx,"^([0-9]+)$")]},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.onlyAlphabeticCharacters,"onUpdate:modelValue":r[4]||(r[4]=a=>l.onlyAlphabeticCharacters=a),"persistent-placeholder":"",placeholder:"Only alphabetic characters",rules:["requiredValidator"in e?e.requiredValidator:s(m),"alphaValidator"in e?e.alphaValidator:s(x)]},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.specifiedLength,"onUpdate:modelValue":r[5]||(r[5]=a=>l.specifiedLength=a),"persistent-placeholder":"",placeholder:"Length must be exactly 3 characters.",rules:["requiredValidator"in e?e.requiredValidator:s(m),("lengthValidator"in e?e.lengthValidator:s(R))(l.specifiedLength,3)]},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.password,"onUpdate:modelValue":r[6]||(r[6]=a=>l.password=a),"persistent-placeholder":"",placeholder:"Password Input Field",type:"password",rules:["requiredValidator"in e?e.requiredValidator:s(m),"passwordValidator"in e?e.passwordValidator:s(U)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.digits,"onUpdate:modelValue":r[7]||(r[7]=a=>l.digits=a),"persistent-placeholder":"",placeholder:"The digits field must be numeric and exactly contain 3 digits",rules:["requiredValidator"in e?e.requiredValidator:s(m),("lengthValidator"in e?e.lengthValidator:s(R))(l.digits,3),"integerValidator"in e?e.integerValidator:s(T)]},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.repeatPassword,"onUpdate:modelValue":r[8]||(r[8]=a=>l.repeatPassword=a),"persistent-placeholder":"",placeholder:"Repeat password must match",type:"password",rules:["requiredValidator"in e?e.requiredValidator:s(m),("confirmedValidator"in e?e.confirmedValidator:s(_))(l.repeatPassword,l.password)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.onlyAlphabeticNumbersDashesUnderscores,"onUpdate:modelValue":r[9]||(r[9]=a=>l.onlyAlphabeticNumbersDashesUnderscores=a),"persistent-placeholder":"",placeholder:"Only alphabetic characters, numbers, dashes or underscores",rules:["requiredValidator"in e?e.requiredValidator:s(m),"alphaDashValidator"in e?e.alphaDashValidator:s(j)]},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.email,"onUpdate:modelValue":r[10]||(r[10]=a=>l.email=a),"persistent-placeholder":"",placeholder:"Must be a valid email",rules:["requiredValidator"in e?e.requiredValidator:s(m),"emailValidator"in e?e.emailValidator:s(v)]},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.validURL,"onUpdate:modelValue":r[11]||(r[11]=a=>l.validURL=a),"persistent-placeholder":"",placeholder:"Must be a valid url",rules:["requiredValidator"in e?e.requiredValidator:s(m),"urlValidator"in e?e.urlValidator:s(O)]},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12"},{default:i(()=>[o(y,{type:"submit",onClick:r[12]||(r[12]=a=>{var p;return(p=l.refForm)==null?void 0:p.validate()})},{default:i(()=>r[14]||(r[14]=[b(" Submit ")])),_:1,__:[14]})]),_:1})]),_:1})]),_:1},512)}const z=w(I,[["render",J],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-validation/DemoFormValidationValidationTypes.vue"]]),G={__name:"DemoFormValidationValidatingMultipleRules",setup(e,{expose:r}){r();const u=n(),l=n(),c=n(),V=n(),d=n(),a=n(!1),p=n(!1),f={name:u,email:l,refForm:c,password:V,confirmPassword:d,isPasswordVisible:a,isConfirmPasswordVisible:p,get VForm(){return P}};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}};function H(e,r,u,l,c,V){const d=q;return F(),h(l.VForm,{ref:"refForm",onSubmit:g(()=>{},["prevent"])},{default:i(()=>[o(C,null,{default:i(()=>[o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.name,"onUpdate:modelValue":r[0]||(r[0]=a=>l.name=a),label:"Name",placeholder:"Your Name",rules:["requiredValidator"in e?e.requiredValidator:s(m)]},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.email,"onUpdate:modelValue":r[1]||(r[1]=a=>l.email=a),label:"Email",placeholder:"Your Email",rules:["requiredValidator"in e?e.requiredValidator:s(m),"emailValidator"in e?e.emailValidator:s(v)]},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.password,"onUpdate:modelValue":r[2]||(r[2]=a=>l.password=a),label:"Password",type:l.isPasswordVisible?"text":"password","append-inner-icon":l.isPasswordVisible?"tabler-eye-off":"tabler-eye",placeholder:"Enter Password",rules:["requiredValidator"in e?e.requiredValidator:s(m),"passwordValidator"in e?e.passwordValidator:s(U)],autocomplete:"on","onClick:appendInner":r[3]||(r[3]=a=>l.isPasswordVisible=!l.isPasswordVisible)},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.confirmPassword,"onUpdate:modelValue":r[4]||(r[4]=a=>l.confirmPassword=a),label:"Confirm Password",autocomplete:"confirm-password",type:l.isConfirmPasswordVisible?"text":"password",placeholder:"Confirm Password","append-inner-icon":l.confirmPassword?"tabler-eye-off":"tabler-eye",rules:["requiredValidator"in e?e.requiredValidator:s(m),("confirmedValidator"in e?e.confirmedValidator:s(_))(l.confirmPassword,l.password)],"onClick:appendInner":r[5]||(r[5]=a=>l.isConfirmPasswordVisible=!l.isConfirmPasswordVisible)},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1}),o(t,{cols:"12"},{default:i(()=>[o(y,{type:"submit",onClick:r[6]||(r[6]=a=>{var p;return(p=l.refForm)==null?void 0:p.validate()})},{default:i(()=>r[7]||(r[7]=[b(" Submit ")])),_:1,__:[7]})]),_:1})]),_:1})]),_:1},512)}const K=w(G,[["render",H],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-validation/DemoFormValidationValidatingMultipleRules.vue"]]),Q={__name:"DemoFormValidationSimpleFormValidation",setup(e,{expose:r}){r();const u=n(""),l=n(""),c=n(),V={firstName:u,email:l,refForm:c,get VForm(){return P}};return Object.defineProperty(V,"__isScriptSetup",{enumerable:!1,value:!0}),V}};function W(e,r,u,l,c,V){const d=q;return F(),h(l.VForm,{ref:"refForm",onSubmit:g(()=>{},["prevent"])},{default:i(()=>[o(C,null,{default:i(()=>[o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.firstName,"onUpdate:modelValue":r[0]||(r[0]=a=>l.firstName=a),label:"First Name",placeholder:"John",rules:["requiredValidator"in e?e.requiredValidator:s(m)]},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(d,{modelValue:l.email,"onUpdate:modelValue":r[1]||(r[1]=a=>l.email=a),label:"Email",placeholder:"john@email.com",rules:["requiredValidator"in e?e.requiredValidator:s(m),"emailValidator"in e?e.emailValidator:s(v)]},null,8,["modelValue","rules"])]),_:1}),o(t,{cols:"12"},{default:i(()=>[o(y,{type:"submit",onClick:r[2]||(r[2]=a=>{var p;return(p=l.refForm)==null?void 0:p.validate()})},{default:i(()=>r[3]||(r[3]=[b(" Submit ")])),_:1,__:[3]})]),_:1})]),_:1})]),_:1},512)}const X=w(Q,[["render",W],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-validation/DemoFormValidationSimpleFormValidation.vue"]]),Z={ts:`<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'

const firstName = ref('')
const email = ref('')

const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="john@email.com"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const firstName = ref('')
const email = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="john@email.com"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},$={ts:`<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'

const name = ref()
const email = ref()
const refForm = ref<VForm>()
const password = ref()
const confirmPassword = ref()
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="name"
          label="Name"
          placeholder="Your Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="Your Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          label="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
          placeholder="Enter Password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="confirmPassword"
          label="Confirm Password"
          autocomplete="confirm-password"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          placeholder="Confirm Password"
          :append-inner-icon="confirmPassword ? 'tabler-eye-off' : 'tabler-eye'"
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const name = ref()
const email = ref()
const refForm = ref()
const password = ref()
const confirmPassword = ref()
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="name"
          label="Name"
          placeholder="Your Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="Your Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          label="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
          placeholder="Enter Password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="confirmPassword"
          label="Confirm Password"
          autocomplete="confirm-password"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          placeholder="Confirm Password"
          :append-inner-icon="confirmPassword ? 'tabler-eye-off' : 'tabler-eye'"
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},ee={ts:`<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length must be exactly 3 characters."
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length must be exactly 3 characters."
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},le={__name:"form-validation",setup(e,{expose:r}){r();const u={get simpleFormValidation(){return Z},get validatingMultipleRules(){return $},get validationTypes(){return ee}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function re(e,r,u,l,c,V){const d=X,a=Y,p=K,f=z;return F(),h(C,null,{default:i(()=>[o(t,{cols:"12"},{default:i(()=>[o(a,{title:"Simple Form Validation",code:l.simpleFormValidation},{default:i(()=>[r[0]||(r[0]=N("p",null,[b("Use "),N("code",null,"Rules"),b(" prop to validate the input.")],-1)),o(d)]),_:1,__:[0]},8,["code"])]),_:1}),o(t,{cols:"12"},{default:i(()=>[o(a,{title:"Validating Multiple Rules",code:l.validatingMultipleRules},{default:i(()=>[o(p)]),_:1},8,["code"])]),_:1}),o(t,{cols:"12"},{default:i(()=>[o(a,{title:"Validation Types",code:l.validationTypes},{default:i(()=>[o(f)]),_:1},8,["code"])]),_:1})]),_:1})}const Pe=w(le,[["render",re],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/form-validation.vue"]]);export{Pe as default};
