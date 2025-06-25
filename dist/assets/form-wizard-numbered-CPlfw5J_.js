import{_ as z}from"./AppCardCode-C-zO1RUn.js";import{_ as h}from"./AppSelect-if1Bwnix.js";import{_ as x}from"./AppTextField-DHa-jRMo.js";import{_ as I}from"./AppStepper-n8pRJdb1.js";import{_ as y,d as P,w as a,a as o,b as n,a2 as f,j as b,Y as g,f as c,o as S,c as q,F as G,a1 as U,a0 as u,n as K}from"./index-BGIMdqyN.js";import{V as A}from"./VCardText-DfrFZhA0.js";import{V as W}from"./VDivider-B1B4kDZB.js";import{V as L}from"./VForm-DRVTTq0N.js";import{a as T,V as v}from"./VWindowItem-CCqLyGax.js";import{V as p,a as r}from"./VRow-BFNCnCWI.js";import{V as N}from"./VCard-CF2BClSY.js";import{r as F,e as M,p as O,c as Y,u as _}from"./validators-DOkm11CL.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./form-DbIa-vyG.js";import"./VSelect-BBtbosdO.js";import"./VTextField-DRZWT-VU.js";/* empty css                   */import"./VCounter-A4qJAdeX.js";import"./VImg-nOKaZD-s.js";import"./VField-B7Xo4Lej.js";import"./easing-Bybner-F.js";import"./VInput-CH8dtMYl.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-BdNXyVV_.js";import"./ssrBoot-DUtO1XoE.js";import"./VAvatar-CYJWVBhL.js";import"./VMenu-DJ9pZS3t.js";import"./VOverlay-qz3yYbIb.js";import"./lazy-CKhx2O3m.js";import"./scopeId-DfGkhZ3B.js";import"./dialog-transition-Cz0UmEa5.js";import"./VCheckboxBtn-C50DCjx7.js";import"./VSelectionControl-Dyu49DZR.js";import"./VChip-BZnN8JqM.js";import"./VSlideGroup-C-0uVn6B.js";/* empty css              */import"./helpers-DK5QwNv0.js";const H={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        class="stepper-icon-step-bg"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="tabler-arrow-left"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="tabler-arrow-right"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        class="stepper-icon-step-bg"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="tabler-arrow-left"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="tabler-arrow-right"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`},J={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <!-- 👉 Stepper -->
  <div class="mb-6">
    <AppStepper
      v-model:current-step="currentStep"
      align="start"
      :items="numberedSteps"
    />
  </div>

  <VCard>
    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>
        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="tabler-arrow-left"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>
          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>
          <VBtn
            v-else
            @click="currentStep++"
          >
            Next
            <VIcon
              icon="tabler-arrow-right"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <!-- 👉 Stepper -->
  <div class="mb-6">
    <AppStepper
      v-model:current-step="currentStep"
      align="start"
      :items="numberedSteps"
    />
  </div>

  <VCard>
    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>
        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="tabler-arrow-left"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>
          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>
          <VBtn
            v-else
            @click="currentStep++"
          >
            Next
            <VIcon
              icon="tabler-arrow-right"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`},Q={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="4"
    >
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        direction="vertical"
        :items="numberedSteps"
      />
    </VCol>
    <!-- 👉 stepper content -->
    <VCol
      cols="12"
      md="8"
    >
      <VCard>
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>
            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="tabler-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>
              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>
              <VBtn
                v-else
                @click="currentStep++"
              >
                Next
                <VIcon
                  icon="tabler-arrow-right"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="4"
    >
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        direction="vertical"
        :items="numberedSteps"
      />
    </VCol>
    <!-- 👉 stepper content -->
    <VCol
      cols="12"
      md="8"
    >
      <VCard>
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>
            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="tabler-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>
              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>
              <VBtn
                v-else
                @click="currentStep++"
              >
                Next
                <VIcon
                  icon="tabler-arrow-right"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
`},X={ts:`<script setup lang="ts">
import { VForm } from 'vuetify/components/VForm'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref<VForm>()
const refPersonalForm = ref<VForm>()
const refSocialLinkForm = ref<VForm>()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true

      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
    }
    else { isCurrentStepValid.value = false }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        :is-active-step-valid="isCurrentStepValid"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.password"
                  label="Password"
                  placeholder="············"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :rules="[requiredValidator, confirmedValidator(accountForm.cPassword, accountForm.password)]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    disabled
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.LinkedIn"
                  placeholder="https://likedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref()
const refPersonalForm = ref()
const refSocialLinkForm = ref()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true
      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
    } else {
      isCurrentStepValid.value = false
    }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        :is-active-step-valid="isCurrentStepValid"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.password"
                  label="Password"
                  placeholder="············"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :rules="[requiredValidator, confirmedValidator(accountForm.cPassword, accountForm.password)]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    disabled
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.LinkedIn"
                  placeholder="https://likedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Z={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      autocomplete="password"
                      :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      autocomplete="confirm-password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="tabler-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="tabler-arrow-right"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      autocomplete="password"
                      :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      autocomplete="confirm-password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="tabler-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="tabler-arrow-right"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
`},$={__name:"DemoFormWizardNumberedBasic",setup(i,{expose:e}){e();const V=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],l=c(0),w=c(!1),C=c(!1),d=c({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),m={numberedSteps:V,currentStep:l,isPasswordVisible:w,isCPasswordVisible:C,formData:d,onSubmit:()=>{console.log(d.value)}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}},ee={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"};function le(i,e,V,l,w,C){const d=I,s=x,m=h;return S(),P(N,null,{default:a(()=>[o(A,null,{default:a(()=>[o(d,{"current-step":l.currentStep,"onUpdate:currentStep":e[0]||(e[0]=t=>l.currentStep=t),items:l.numberedSteps,class:"stepper-icon-step-bg"},null,8,["current-step"])]),_:1}),o(W),o(A,null,{default:a(()=>[o(L,null,{default:a(()=>[o(T,{modelValue:l.currentStep,"onUpdate:modelValue":e[15]||(e[15]=t=>l.currentStep=t),class:"disable-tab-transition"},{default:a(()=>[o(v,null,{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>e[18]||(e[18]=[n("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),n("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.username,"onUpdate:modelValue":e[1]||(e[1]=t=>l.formData.username=t),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.email,"onUpdate:modelValue":e[2]||(e[2]=t=>l.formData.email=t),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.password,"onUpdate:modelValue":e[3]||(e[3]=t=>l.formData.password=t),label:"Password",placeholder:"············",type:l.isPasswordVisible?"text":"password",autocomplete:"password","append-inner-icon":l.isPasswordVisible?"tabler-eye-off":"tabler-eye","onClick:appendInner":e[4]||(e[4]=t=>l.isPasswordVisible=!l.isPasswordVisible)},null,8,["modelValue","type","append-inner-icon"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.cPassword,"onUpdate:modelValue":e[5]||(e[5]=t=>l.formData.cPassword=t),label:"Confirm Password",autocomplete:"confirm-password",placeholder:"············",type:l.isCPasswordVisible?"text":"password","append-inner-icon":l.isCPasswordVisible?"tabler-eye-off":"tabler-eye","onClick:appendInner":e[6]||(e[6]=t=>l.isCPasswordVisible=!l.isCPasswordVisible)},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),o(v,null,{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>e[19]||(e[19]=[n("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),n("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[19]}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.firstName,"onUpdate:modelValue":e[7]||(e[7]=t=>l.formData.firstName=t),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.lastName,"onUpdate:modelValue":e[8]||(e[8]=t=>l.formData.lastName=t),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(m,{modelValue:l.formData.country,"onUpdate:modelValue":e[9]||(e[9]=t=>l.formData.country=t),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(m,{modelValue:l.formData.language,"onUpdate:modelValue":e[10]||(e[10]=t=>l.formData.language=t),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(v,null,{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>e[20]||(e[20]=[n("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),n("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[20]}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.twitter,"onUpdate:modelValue":e[11]||(e[11]=t=>l.formData.twitter=t),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.facebook,"onUpdate:modelValue":e[12]||(e[12]=t=>l.formData.facebook=t),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.googlePlus,"onUpdate:modelValue":e[13]||(e[13]=t=>l.formData.googlePlus=t),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.linkedIn,"onUpdate:modelValue":e[14]||(e[14]=t=>l.formData.linkedIn=t),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),n("div",ee,[o(f,{color:"secondary",variant:"tonal",disabled:l.currentStep===0,onClick:e[16]||(e[16]=t=>l.currentStep--)},{default:a(()=>[o(g,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),e[21]||(e[21]=b(" Previous "))]),_:1,__:[21]},8,["disabled"]),l.numberedSteps.length-1===l.currentStep?(S(),P(f,{key:0,color:"success",onClick:l.onSubmit},{default:a(()=>e[22]||(e[22]=[b(" submit ")])),_:1,__:[22]})):(S(),P(f,{key:1,onClick:e[17]||(e[17]=t=>l.currentStep++)},{default:a(()=>[e[23]||(e[23]=b(" Next ")),o(g,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[23]}))])]),_:1})]),_:1})]),_:1})}const oe=y($,[["render",le],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-wizard/form-wizard-numbered/DemoFormWizardNumberedBasic.vue"]]),ae={__name:"DemoFormWizardNumberedModernBasic",setup(i,{expose:e}){e();const V=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],l=c(0),w=c(!1),C=c(!1),d=c({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),m={numberedSteps:V,currentStep:l,isPasswordVisible:w,isCPasswordVisible:C,formData:d,onSubmit:()=>{console.log(d.value)}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}},te={class:"mb-6"},re={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"};function se(i,e,V,l,w,C){const d=I,s=x,m=h;return S(),q(G,null,[n("div",te,[o(d,{"current-step":l.currentStep,"onUpdate:currentStep":e[0]||(e[0]=t=>l.currentStep=t),align:"start",items:l.numberedSteps},null,8,["current-step"])]),o(N,null,{default:a(()=>[o(A,null,{default:a(()=>[o(L,null,{default:a(()=>[o(T,{modelValue:l.currentStep,"onUpdate:modelValue":e[15]||(e[15]=t=>l.currentStep=t),class:"disable-tab-transition"},{default:a(()=>[o(v,null,{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>e[18]||(e[18]=[n("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),n("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.username,"onUpdate:modelValue":e[1]||(e[1]=t=>l.formData.username=t),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.email,"onUpdate:modelValue":e[2]||(e[2]=t=>l.formData.email=t),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.password,"onUpdate:modelValue":e[3]||(e[3]=t=>l.formData.password=t),label:"Password",placeholder:"············",type:l.isPasswordVisible?"text":"password","append-inner-icon":l.isPasswordVisible?"tabler-eye-off":"tabler-eye","onClick:appendInner":e[4]||(e[4]=t=>l.isPasswordVisible=!l.isPasswordVisible)},null,8,["modelValue","type","append-inner-icon"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.cPassword,"onUpdate:modelValue":e[5]||(e[5]=t=>l.formData.cPassword=t),label:"Confirm Password",placeholder:"············",type:l.isCPasswordVisible?"text":"password","append-inner-icon":l.isCPasswordVisible?"tabler-eye-off":"tabler-eye","onClick:appendInner":e[6]||(e[6]=t=>l.isCPasswordVisible=!l.isCPasswordVisible)},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),o(v,null,{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>e[19]||(e[19]=[n("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),n("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[19]}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.firstName,"onUpdate:modelValue":e[7]||(e[7]=t=>l.formData.firstName=t),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.lastName,"onUpdate:modelValue":e[8]||(e[8]=t=>l.formData.lastName=t),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(m,{modelValue:l.formData.country,"onUpdate:modelValue":e[9]||(e[9]=t=>l.formData.country=t),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(m,{modelValue:l.formData.language,"onUpdate:modelValue":e[10]||(e[10]=t=>l.formData.language=t),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(v,null,{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>e[20]||(e[20]=[n("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),n("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[20]}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.twitter,"onUpdate:modelValue":e[11]||(e[11]=t=>l.formData.twitter=t),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.facebook,"onUpdate:modelValue":e[12]||(e[12]=t=>l.formData.facebook=t),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.googlePlus,"onUpdate:modelValue":e[13]||(e[13]=t=>l.formData.googlePlus=t),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.linkedIn,"onUpdate:modelValue":e[14]||(e[14]=t=>l.formData.linkedIn=t),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),n("div",re,[o(f,{color:"secondary",variant:"tonal",disabled:l.currentStep===0,onClick:e[16]||(e[16]=t=>l.currentStep--)},{default:a(()=>[o(g,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),e[21]||(e[21]=b(" Previous "))]),_:1,__:[21]},8,["disabled"]),l.numberedSteps.length-1===l.currentStep?(S(),P(f,{key:0,color:"success",onClick:l.onSubmit},{default:a(()=>e[22]||(e[22]=[b(" submit ")])),_:1,__:[22]})):(S(),P(f,{key:1,onClick:e[17]||(e[17]=t=>l.currentStep++)},{default:a(()=>[e[23]||(e[23]=b(" Next ")),o(g,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[23]}))])]),_:1})]),_:1})]),_:1})],64)}const ie=y(ae,[["render",se],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-wizard/form-wizard-numbered/DemoFormWizardNumberedModernBasic.vue"]]),ne={__name:"DemoFormWizardNumberedModernVertical",setup(i,{expose:e}){e();const V=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],l=c(0),w=c(!1),C=c(!1),d=c({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),m={numberedSteps:V,currentStep:l,isPasswordVisible:w,isCPasswordVisible:C,formData:d,onSubmit:()=>{console.log(d.value)}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}},de={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"};function me(i,e,V,l,w,C){const d=I,s=x,m=h;return S(),P(p,null,{default:a(()=>[o(r,{cols:"12",md:"4"},{default:a(()=>[o(d,{"current-step":l.currentStep,"onUpdate:currentStep":e[0]||(e[0]=t=>l.currentStep=t),direction:"vertical",items:l.numberedSteps},null,8,["current-step"])]),_:1}),o(r,{cols:"12",md:"8"},{default:a(()=>[o(N,null,{default:a(()=>[o(A,null,{default:a(()=>[o(L,null,{default:a(()=>[o(T,{modelValue:l.currentStep,"onUpdate:modelValue":e[15]||(e[15]=t=>l.currentStep=t),class:"disable-tab-transition"},{default:a(()=>[o(v,null,{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>e[18]||(e[18]=[n("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),n("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.username,"onUpdate:modelValue":e[1]||(e[1]=t=>l.formData.username=t),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.email,"onUpdate:modelValue":e[2]||(e[2]=t=>l.formData.email=t),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.password,"onUpdate:modelValue":e[3]||(e[3]=t=>l.formData.password=t),placeholder:"············",label:"Password",type:l.isPasswordVisible?"text":"password","append-inner-icon":l.isPasswordVisible?"tabler-eye-off":"tabler-eye","onClick:appendInner":e[4]||(e[4]=t=>l.isPasswordVisible=!l.isPasswordVisible)},null,8,["modelValue","type","append-inner-icon"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.cPassword,"onUpdate:modelValue":e[5]||(e[5]=t=>l.formData.cPassword=t),placeholder:"············",label:"Confirm Password",type:l.isCPasswordVisible?"text":"password","append-inner-icon":l.isCPasswordVisible?"tabler-eye-off":"tabler-eye","onClick:appendInner":e[6]||(e[6]=t=>l.isCPasswordVisible=!l.isCPasswordVisible)},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),o(v,null,{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>e[19]||(e[19]=[n("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),n("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[19]}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.firstName,"onUpdate:modelValue":e[7]||(e[7]=t=>l.formData.firstName=t),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.lastName,"onUpdate:modelValue":e[8]||(e[8]=t=>l.formData.lastName=t),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(m,{modelValue:l.formData.country,"onUpdate:modelValue":e[9]||(e[9]=t=>l.formData.country=t),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(m,{modelValue:l.formData.language,"onUpdate:modelValue":e[10]||(e[10]=t=>l.formData.language=t),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(v,null,{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>e[20]||(e[20]=[n("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),n("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[20]}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.twitter,"onUpdate:modelValue":e[11]||(e[11]=t=>l.formData.twitter=t),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.facebook,"onUpdate:modelValue":e[12]||(e[12]=t=>l.formData.facebook=t),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.googlePlus,"onUpdate:modelValue":e[13]||(e[13]=t=>l.formData.googlePlus=t),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.linkedIn,"onUpdate:modelValue":e[14]||(e[14]=t=>l.formData.linkedIn=t),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),n("div",de,[o(f,{color:"secondary",variant:"tonal",disabled:l.currentStep===0,onClick:e[16]||(e[16]=t=>l.currentStep--)},{default:a(()=>[o(g,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),e[21]||(e[21]=b(" Previous "))]),_:1,__:[21]},8,["disabled"]),l.numberedSteps.length-1===l.currentStep?(S(),P(f,{key:0,color:"success",onClick:l.onSubmit},{default:a(()=>e[22]||(e[22]=[b(" submit ")])),_:1,__:[22]})):(S(),P(f,{key:1,onClick:e[17]||(e[17]=t=>l.currentStep++)},{default:a(()=>[e[23]||(e[23]=b(" Next ")),o(g,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[23]}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const ce=y(ne,[["render",me],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-wizard/form-wizard-numbered/DemoFormWizardNumberedModernVertical.vue"]]),ue={__name:"DemoFormWizardNumberedValidation",setup(i,{expose:e}){e();const V=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],l=c(0),w=c(!1),C=c(!1),d=c(!0),s=c(),m=c(),t=c(),B=c({username:"",email:"",password:"",cPassword:""}),R=c({firstName:"",lastName:"",country:void 0,language:void 0}),j=c({twitter:"",facebook:"",googlePlus:"",linkedIn:""}),E={numberedSteps:V,currentStep:l,isPasswordVisible:w,isCPasswordVisible:C,isCurrentStepValid:d,refAccountForm:s,refPersonalForm:m,refSocialLinkForm:t,accountForm:B,personalForm:R,socialForm:j,validateAccountForm:()=>{var D;(D=s.value)==null||D.validate().then(k=>{k.valid?(l.value++,d.value=!0):d.value=!1})},validatePersonalForm:()=>{var D;(D=m.value)==null||D.validate().then(k=>{k.valid?(l.value++,d.value=!0):d.value=!1})},validateSocialLinkForm:()=>{var D;(D=t.value)==null||D.validate().then(k=>{k.valid?(d.value=!0,console.log({...B.value,...R.value,...j.value})):d.value=!1})},get VForm(){return L}};return Object.defineProperty(E,"__isScriptSetup",{enumerable:!1,value:!0}),E}},pe={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},Ve={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},fe={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"};function be(i,e,V,l,w,C){const d=I,s=x,m=h;return S(),P(N,null,{default:a(()=>[o(A,null,{default:a(()=>[o(d,{"current-step":l.currentStep,"onUpdate:currentStep":e[0]||(e[0]=t=>l.currentStep=t),items:l.numberedSteps,"is-active-step-valid":l.isCurrentStepValid},null,8,["current-step","is-active-step-valid"])]),_:1}),o(W),o(A,null,{default:a(()=>[o(T,{modelValue:l.currentStep,"onUpdate:modelValue":e[17]||(e[17]=t=>l.currentStep=t),class:"disable-tab-transition"},{default:a(()=>[o(v,null,{default:a(()=>[o(l.VForm,{ref:"refAccountForm",onSubmit:U(l.validateAccountForm,["prevent"])},{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>e[18]||(e[18]=[n("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),n("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.accountForm.username,"onUpdate:modelValue":e[1]||(e[1]=t=>l.accountForm.username=t),placeholder:"CarterLeonardo",rules:["requiredValidator"in i?i.requiredValidator:u(F)],label:"Username"},null,8,["modelValue","rules"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.accountForm.email,"onUpdate:modelValue":e[2]||(e[2]=t=>l.accountForm.email=t),placeholder:"carterleonardo@gmail.com",rules:["requiredValidator"in i?i.requiredValidator:u(F),"emailValidator"in i?i.emailValidator:u(M)],label:"Email"},null,8,["modelValue","rules"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.accountForm.password,"onUpdate:modelValue":e[3]||(e[3]=t=>l.accountForm.password=t),label:"Password",placeholder:"············",rules:["requiredValidator"in i?i.requiredValidator:u(F),"passwordValidator"in i?i.passwordValidator:u(O)],type:l.isPasswordVisible?"text":"password",autocomplete:"password","append-inner-icon":l.isPasswordVisible?"tabler-eye-off":"tabler-eye","onClick:appendInner":e[4]||(e[4]=t=>l.isPasswordVisible=!l.isPasswordVisible)},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.accountForm.cPassword,"onUpdate:modelValue":e[5]||(e[5]=t=>l.accountForm.cPassword=t),label:"Confirm Password",autocomplete:"confirm-password",placeholder:"············",rules:["requiredValidator"in i?i.requiredValidator:u(F),("confirmedValidator"in i?i.confirmedValidator:u(Y))(l.accountForm.cPassword,l.accountForm.password)],type:l.isCPasswordVisible?"text":"password","append-inner-icon":l.isCPasswordVisible?"tabler-eye-off":"tabler-eye","onClick:appendInner":e[6]||(e[6]=t=>l.isCPasswordVisible=!l.isCPasswordVisible)},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),o(r,{cols:"12"},{default:a(()=>[n("div",pe,[o(f,{color:"secondary",variant:"tonal",disabled:""},{default:a(()=>[o(g,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),e[19]||(e[19]=b(" Previous "))]),_:1,__:[19]}),o(f,{type:"submit"},{default:a(()=>[e[20]||(e[20]=b(" Next ")),o(g,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[20]})])]),_:1})]),_:1})]),_:1},512)]),_:1}),o(v,null,{default:a(()=>[o(l.VForm,{ref:"refPersonalForm",onSubmit:U(l.validatePersonalForm,["prevent"])},{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>e[21]||(e[21]=[n("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),n("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[21]}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.personalForm.firstName,"onUpdate:modelValue":e[7]||(e[7]=t=>l.personalForm.firstName=t),label:"First Name",rules:["requiredValidator"in i?i.requiredValidator:u(F)],placeholder:"Leonard"},null,8,["modelValue","rules"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.personalForm.lastName,"onUpdate:modelValue":e[8]||(e[8]=t=>l.personalForm.lastName=t),label:"Last Name",rules:["requiredValidator"in i?i.requiredValidator:u(F)],placeholder:"Carter"},null,8,["modelValue","rules"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(m,{modelValue:l.personalForm.country,"onUpdate:modelValue":e[9]||(e[9]=t=>l.personalForm.country=t),label:"Country",rules:["requiredValidator"in i?i.requiredValidator:u(F)],placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue","rules"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(m,{modelValue:l.personalForm.language,"onUpdate:modelValue":e[10]||(e[10]=t=>l.personalForm.language=t),label:"Language",rules:["requiredValidator"in i?i.requiredValidator:u(F)],placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue","rules"])]),_:1}),o(r,{cols:"12"},{default:a(()=>[n("div",Ve,[o(f,{color:"secondary",variant:"tonal",onClick:e[11]||(e[11]=t=>l.currentStep--)},{default:a(()=>[o(g,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),e[22]||(e[22]=b(" Previous "))]),_:1,__:[22]}),o(f,{type:"submit"},{default:a(()=>[e[23]||(e[23]=b(" Next ")),o(g,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[23]})])]),_:1})]),_:1})]),_:1},512)]),_:1}),o(v,null,{default:a(()=>[o(l.VForm,{ref:"refSocialLinkForm",onSubmit:U(l.validateSocialLinkForm,["prevent"])},{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>e[24]||(e[24]=[n("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),n("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[24]}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.socialForm.twitter,"onUpdate:modelValue":e[12]||(e[12]=t=>l.socialForm.twitter=t),placeholder:"https://twitter.com/abc",rules:["requiredValidator"in i?i.requiredValidator:u(F),"urlValidator"in i?i.urlValidator:u(_)],label:"Twitter"},null,8,["modelValue","rules"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.socialForm.facebook,"onUpdate:modelValue":e[13]||(e[13]=t=>l.socialForm.facebook=t),placeholder:"https://facebook.com/abc",rules:["requiredValidator"in i?i.requiredValidator:u(F),"urlValidator"in i?i.urlValidator:u(_)],label:"Facebook"},null,8,["modelValue","rules"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.socialForm.googlePlus,"onUpdate:modelValue":e[14]||(e[14]=t=>l.socialForm.googlePlus=t),placeholder:"https://plus.google.com/abc",rules:["requiredValidator"in i?i.requiredValidator:u(F),"urlValidator"in i?i.urlValidator:u(_)],label:"Google+"},null,8,["modelValue","rules"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.socialForm.linkedIn,"onUpdate:modelValue":e[15]||(e[15]=t=>l.socialForm.linkedIn=t),placeholder:"https://likedin.com/abc",rules:["requiredValidator"in i?i.requiredValidator:u(F),"urlValidator"in i?i.urlValidator:u(_)],label:"LinkedIn"},null,8,["modelValue","rules"])]),_:1}),o(r,{cols:"12"},{default:a(()=>[n("div",fe,[o(f,{color:"secondary",variant:"tonal",onClick:e[16]||(e[16]=t=>l.currentStep--)},{default:a(()=>[o(g,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),e[25]||(e[25]=b(" Previous "))]),_:1,__:[25]}),o(f,{color:"success",type:"submit"},{default:a(()=>e[26]||(e[26]=[b(" submit ")])),_:1,__:[26]})])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}const we=y(ue,[["render",be],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-wizard/form-wizard-numbered/DemoFormWizardNumberedValidation.vue"]]),Ce={__name:"DemoFormWizardNumberedVertical",setup(i,{expose:e}){e();const V=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],l=c(0),w=c(!1),C=c(!1),d=c({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),m={numberedSteps:V,currentStep:l,isPasswordVisible:w,isCPasswordVisible:C,formData:d,onSubmit:()=>{console.log(d.value)}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}},ve={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"};function Se(i,e,V,l,w,C){const d=I,s=x,m=h;return S(),P(N,null,{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12",md:"4",class:K(i.$vuetify.display.smAndDown?"border-b":"border-e")},{default:a(()=>[o(A,null,{default:a(()=>[o(d,{"current-step":l.currentStep,"onUpdate:currentStep":e[0]||(e[0]=t=>l.currentStep=t),direction:"vertical",items:l.numberedSteps},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),o(r,{cols:"12",md:"8"},{default:a(()=>[o(A,null,{default:a(()=>[o(L,null,{default:a(()=>[o(T,{modelValue:l.currentStep,"onUpdate:modelValue":e[15]||(e[15]=t=>l.currentStep=t),class:"disable-tab-transition"},{default:a(()=>[o(v,null,{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>e[18]||(e[18]=[n("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),n("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.username,"onUpdate:modelValue":e[1]||(e[1]=t=>l.formData.username=t),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.email,"onUpdate:modelValue":e[2]||(e[2]=t=>l.formData.email=t),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.password,"onUpdate:modelValue":e[3]||(e[3]=t=>l.formData.password=t),placeholder:"············",label:"Password",type:l.isPasswordVisible?"text":"password",autocomplete:"password","append-inner-icon":l.isPasswordVisible?"tabler-eye-off":"tabler-eye","onClick:appendInner":e[4]||(e[4]=t=>l.isPasswordVisible=!l.isPasswordVisible)},null,8,["modelValue","type","append-inner-icon"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.cPassword,"onUpdate:modelValue":e[5]||(e[5]=t=>l.formData.cPassword=t),placeholder:"············",label:"Confirm Password",autocomplete:"confirm-password",type:l.isCPasswordVisible?"text":"password","append-inner-icon":l.isCPasswordVisible?"tabler-eye-off":"tabler-eye","onClick:appendInner":e[6]||(e[6]=t=>l.isCPasswordVisible=!l.isCPasswordVisible)},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),o(v,null,{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>e[19]||(e[19]=[n("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),n("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[19]}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.firstName,"onUpdate:modelValue":e[7]||(e[7]=t=>l.formData.firstName=t),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.lastName,"onUpdate:modelValue":e[8]||(e[8]=t=>l.formData.lastName=t),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(m,{modelValue:l.formData.country,"onUpdate:modelValue":e[9]||(e[9]=t=>l.formData.country=t),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(m,{modelValue:l.formData.language,"onUpdate:modelValue":e[10]||(e[10]=t=>l.formData.language=t),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(v,null,{default:a(()=>[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>e[20]||(e[20]=[n("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),n("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[20]}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.twitter,"onUpdate:modelValue":e[11]||(e[11]=t=>l.formData.twitter=t),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.facebook,"onUpdate:modelValue":e[12]||(e[12]=t=>l.formData.facebook=t),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.googlePlus,"onUpdate:modelValue":e[13]||(e[13]=t=>l.formData.googlePlus=t),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:a(()=>[o(s,{modelValue:l.formData.linkedIn,"onUpdate:modelValue":e[14]||(e[14]=t=>l.formData.linkedIn=t),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),n("div",ve,[o(f,{color:"secondary",variant:"tonal",disabled:l.currentStep===0,onClick:e[16]||(e[16]=t=>l.currentStep--)},{default:a(()=>[o(g,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),e[21]||(e[21]=b(" Previous "))]),_:1,__:[21]},8,["disabled"]),l.numberedSteps.length-1===l.currentStep?(S(),P(f,{key:0,color:"success",onClick:l.onSubmit},{default:a(()=>e[22]||(e[22]=[b(" submit ")])),_:1,__:[22]})):(S(),P(f,{key:1,onClick:e[17]||(e[17]=t=>l.currentStep++)},{default:a(()=>[e[23]||(e[23]=b(" Next ")),o(g,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[23]}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const ge=y(Ce,[["render",Se],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-wizard/form-wizard-numbered/DemoFormWizardNumberedVertical.vue"]]),Fe={__name:"form-wizard-numbered",setup(i,{expose:e}){e();const V={get basic(){return H},get modernBasic(){return J},get modernVertical(){return Q},get validation(){return X},get vertical(){return Z},DemoFormWizardNumberedBasic:oe,DemoFormWizardNumberedModernBasic:ie,DemoFormWizardNumberedModernVertical:ce,DemoFormWizardNumberedValidation:we,DemoFormWizardNumberedVertical:ge};return Object.defineProperty(V,"__isScriptSetup",{enumerable:!1,value:!0}),V}};function Pe(i,e,V,l,w,C){const d=z;return S(),q(G,null,[o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>[o(d,{variant:"outlined",title:"Basic",code:l.basic},{default:a(()=>[o(l.DemoFormWizardNumberedBasic)]),_:1},8,["code"])]),_:1}),o(r,{cols:"12"},{default:a(()=>[o(d,{variant:"outlined",title:"Validation",code:l.validation},{default:a(()=>[o(l.DemoFormWizardNumberedValidation)]),_:1},8,["code"])]),_:1}),o(r,{cols:"12"},{default:a(()=>[o(d,{variant:"outlined",title:"Vertical",code:l.vertical},{default:a(()=>[o(l.DemoFormWizardNumberedVertical)]),_:1},8,["code"])]),_:1})]),_:1}),o(W,{class:"my-10 mx-n6"}),e[0]||(e[0]=n("h3",{class:"text-h3 my-4"}," Modern ",-1)),o(p,null,{default:a(()=>[o(r,{cols:"12"},{default:a(()=>[o(d,{variant:"outlined",title:"Modern Vertical",code:l.modernVertical},{default:a(()=>[o(l.DemoFormWizardNumberedModernVertical)]),_:1},8,["code"])]),_:1}),o(r,{cols:"12"},{default:a(()=>[o(d,{variant:"outlined",title:"Modern Basic",code:l.modernBasic},{default:a(()=>[o(l.DemoFormWizardNumberedModernBasic)]),_:1},8,["code"])]),_:1})]),_:1})],64)}const ml=y(Fe,[["render",Pe],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/form-wizard-numbered.vue"]]);export{ml as default};
