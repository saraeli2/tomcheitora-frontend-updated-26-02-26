import{_ as d,d as v,o as c,w as n,a as o,a2 as r,aU as z,f as b,c as p,j as e,Y as B,b as a}from"./index-BGIMdqyN.js";import{a as i,V as w}from"./VRow-BFNCnCWI.js";import{_ as O}from"./AppCardCode-C-zO1RUn.js";import{V as g}from"./VAlert-47OZaPCp.js";/* empty css              */import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VAvatar-CYJWVBhL.js";import"./VImg-nOKaZD-s.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";const N={__name:"DemoButtonGroup",setup(s,{expose:t}){t();const l={toggleExclusive:b(1)};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function R(s,t,_,l,f,V){return c(),v(z,{modelValue:l.toggleExclusive,"onUpdate:modelValue":t[0]||(t[0]=m=>l.toggleExclusive=m),density:"comfortable"},{default:n(()=>[o(r,{icon:"tabler-align-left"}),o(r,{icon:"tabler-align-center"}),o(r,{icon:"tabler-align-right"}),o(r,{icon:"tabler-align-justified"})]),_:1},8,["modelValue"])}const U=d(N,[["render",R],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/button/DemoButtonGroup.vue"]]),A={},G={class:"demo-space-x"};function Y(s,t){return c(),p("div",G,[o(r,{href:"https://pixinvent.com/"},{default:n(()=>t[0]||(t[0]=[e(" String Literal ")])),_:1,__:[0]}),o(r,{href:"https://pixinvent.com/",target:"_blank",rel:"noopener noreferrer"},{default:n(()=>t[1]||(t[1]=[e(" Open New Tab ")])),_:1,__:[1]})])}const q=d(A,[["render",Y],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/button/DemoButtonLink.vue"]]),F={},Q={class:"demo-space-x"};function H(s,t){return c(),p("div",Q,[o(r,{to:"alert"},{default:n(()=>t[0]||(t[0]=[e(" String Literal ")])),_:1,__:[0]}),o(r,{color:"warning",to:{path:"alert"}},{default:n(()=>t[1]||(t[1]=[e(" Object Path ")])),_:1,__:[1]}),o(r,{color:"success",to:{name:"components-alert"}},{default:n(()=>t[2]||(t[2]=[e(" Named Router ")])),_:1,__:[2]}),o(r,{color:"secondary",to:{path:"alert",query:{plan:"private"}}},{default:n(()=>t[3]||(t[3]=[e(" With Query ")])),_:1,__:[3]})])}const J=d(F,[["render",H],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/button/DemoButtonRouter.vue"]]),K={__name:"DemoButtonLoaders",setup(s,{expose:t}){t();const _=b([]),f={loadings:_,load:V=>{_.value[V]=!0,setTimeout(()=>{_.value[V]=!1},3e3)}};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}},M={class:"demo-space-x"},X={class:"custom-loader"};function Z(s,t,_,l,f,V){return c(),p("div",M,[o(r,{loading:l.loadings[0],disabled:l.loadings[0],color:"primary",onClick:t[0]||(t[0]=m=>l.load(0))},{default:n(()=>t[5]||(t[5]=[e(" Accept Terms ")])),_:1,__:[5]},8,["loading","disabled"]),o(r,{loading:l.loadings[1],disabled:l.loadings[1],color:"secondary",onClick:t[1]||(t[1]=m=>l.load(1))},{default:n(()=>[t[6]||(t[6]=e(" Upload ")),o(B,{end:"",icon:"tabler-cloud-upload"})]),_:1,__:[6]},8,["loading","disabled"]),o(r,{loading:l.loadings[2],disabled:l.loadings[2],color:"success",onClick:t[2]||(t[2]=m=>l.load(2))},{loader:n(()=>t[7]||(t[7]=[a("span",null,"Loading...",-1)])),default:n(()=>[t[8]||(t[8]=e(" Loader slot "))]),_:1,__:[8]},8,["loading","disabled"]),o(r,{loading:l.loadings[3],disabled:l.loadings[3],color:"info",onClick:t[3]||(t[3]=m=>l.load(3))},{loader:n(()=>[a("span",X,[o(B,{icon:"tabler-refresh"})])]),default:n(()=>[t[9]||(t[9]=e(" Icon Loader "))]),_:1,__:[9]},8,["loading","disabled"]),o(r,{loading:l.loadings[4],disabled:l.loadings[4],color:"warning",icon:"tabler-cloud-upload",onClick:t[4]||(t[4]=m=>l.load(4))},null,8,["loading","disabled"])])}const h=d(K,[["render",Z],["__scopeId","data-v-2665b7ae"],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/button/DemoButtonLoaders.vue"]]),tt={};function ot(s,t){return c(),v(w,null,{default:n(()=>[o(i,{cols:"12",sm:"6"},{default:n(()=>[o(r,{block:""},{default:n(()=>t[0]||(t[0]=[e(" Block Button ")])),_:1,__:[0]})]),_:1}),o(i,{cols:"12",sm:"6"},{default:n(()=>[o(r,{variant:"outlined",block:""},{default:n(()=>t[1]||(t[1]=[e(" Block Button ")])),_:1,__:[1]})]),_:1})]),_:1})}const nt=d(tt,[["render",ot],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/button/DemoButtonBlock.vue"]]),et={},rt={class:"demo-space-x"};function lt(s,t){return c(),p("div",rt,[o(r,{size:"x-large"},{default:n(()=>t[0]||(t[0]=[e(" Extra large Button ")])),_:1,__:[0]}),o(r,{color:"success",size:"large"},{default:n(()=>t[1]||(t[1]=[e(" Large Button ")])),_:1,__:[1]}),o(r,{color:"info"},{default:n(()=>t[2]||(t[2]=[e(" Normal Button ")])),_:1,__:[2]}),o(r,{size:"small",color:"warning"},{default:n(()=>t[3]||(t[3]=[e(" Small Button ")])),_:1,__:[3]}),o(r,{size:"x-small",color:"error"},{default:n(()=>t[4]||(t[4]=[e(" Extra small Button ")])),_:1,__:[4]})])}const at=d(et,[["render",lt],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/button/DemoButtonSizing.vue"]]),st={},it={class:"demo-space-x"};function dt(s,t){return c(),p("div",it,[o(r,{icon:"tabler-briefcase",rounded:""}),o(r,{variant:"tonal",icon:"tabler-user-plus"}),o(r,{icon:"tabler-search",variant:"outlined",color:"success"}),o(r,{icon:"tabler-thumb-up",variant:"text",color:"info"}),o(r,{icon:"tabler-star",variant:"tonal",color:"success",rounded:""}),o(r,{icon:"tabler-heart",variant:"text",color:"error"})])}const ct=d(st,[["render",dt],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/button/DemoButtonIconOnly.vue"]]),ut={},pt={class:"demo-space-x"};function _t(s,t){return c(),p("div",pt,[o(r,null,{default:n(()=>[t[0]||(t[0]=e(" Accept ")),o(B,{end:"",icon:"tabler-checkbox"})]),_:1,__:[0]}),o(r,{color:"secondary"},{default:n(()=>[o(B,{start:"",icon:"tabler-circle-minus"}),t[1]||(t[1]=e("Cancel "))]),_:1,__:[1]}),o(r,{color:"success"},{default:n(()=>[t[2]||(t[2]=e(" Upload ")),o(B,{end:"",icon:"tabler-cloud-upload"})]),_:1,__:[2]}),o(r,{color:"info"},{default:n(()=>[o(B,{start:"",icon:"tabler-arrow-left"}),t[3]||(t[3]=e(" Back "))]),_:1,__:[3]}),o(r,{color:"warning"},{default:n(()=>[o(B,{icon:"tabler-settings"})]),_:1}),o(r,{color:"error"},{default:n(()=>[o(B,{icon:"tabler-circle-off"})]),_:1})])}const mt=d(ut,[["render",_t],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/button/DemoButtonIcon.vue"]]),Bt={},ft={class:"demo-space-x"};function Vt(s,t){return c(),p("div",ft,[o(r,{variant:"tonal"},{default:n(()=>t[0]||(t[0]=[e(" Primary ")])),_:1,__:[0]}),o(r,{color:"secondary",variant:"tonal"},{default:n(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1,__:[1]}),o(r,{color:"success",variant:"tonal"},{default:n(()=>t[2]||(t[2]=[e(" Success ")])),_:1,__:[2]}),o(r,{color:"info",variant:"tonal"},{default:n(()=>t[3]||(t[3]=[e(" Info ")])),_:1,__:[3]}),o(r,{color:"warning",variant:"tonal"},{default:n(()=>t[4]||(t[4]=[e(" Warning ")])),_:1,__:[4]}),o(r,{color:"error",variant:"tonal"},{default:n(()=>t[5]||(t[5]=[e(" Error ")])),_:1,__:[5]})])}const vt=d(Bt,[["render",Vt],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/button/DemoButtonTonal.vue"]]),gt={},bt={class:"demo-space-x"};function wt(s,t){return c(),p("div",bt,[o(r,{variant:"plain"},{default:n(()=>t[0]||(t[0]=[e(" Primary ")])),_:1,__:[0]}),o(r,{color:"secondary",variant:"plain"},{default:n(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1,__:[1]}),o(r,{color:"success",variant:"plain"},{default:n(()=>t[2]||(t[2]=[e(" Success ")])),_:1,__:[2]}),o(r,{color:"info",variant:"plain"},{default:n(()=>t[3]||(t[3]=[e(" Info ")])),_:1,__:[3]}),o(r,{color:"warning",variant:"plain"},{default:n(()=>t[4]||(t[4]=[e(" Warning ")])),_:1,__:[4]}),o(r,{color:"error",variant:"plain"},{default:n(()=>t[5]||(t[5]=[e(" Error ")])),_:1,__:[5]})])}const xt=d(gt,[["render",wt],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/button/DemoButtonPlain.vue"]]),yt={},kt={class:"demo-space-x"};function St(s,t){return c(),p("div",kt,[o(r,{variant:"text"},{default:n(()=>t[0]||(t[0]=[e(" Primary ")])),_:1,__:[0]}),o(r,{variant:"text",color:"secondary"},{default:n(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1,__:[1]}),o(r,{variant:"text",color:"success"},{default:n(()=>t[2]||(t[2]=[e(" Success ")])),_:1,__:[2]}),o(r,{variant:"text",color:"info"},{default:n(()=>t[3]||(t[3]=[e(" Info ")])),_:1,__:[3]}),o(r,{variant:"text",color:"warning"},{default:n(()=>t[4]||(t[4]=[e(" Warning ")])),_:1,__:[4]}),o(r,{variant:"text",color:"error"},{default:n(()=>t[5]||(t[5]=[e(" Error ")])),_:1,__:[5]})])}const Et=d(yt,[["render",St],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/button/DemoButtonText.vue"]]),It={},Dt={class:"demo-space-x"};function Pt(s,t){return c(),p("div",Dt,[o(r,null,{default:n(()=>t[0]||(t[0]=[e(" Normal Button ")])),_:1,__:[0]}),o(r,{rounded:"lg",color:"secondary"},{default:n(()=>t[1]||(t[1]=[e(" Rounded Button ")])),_:1,__:[1]}),o(r,{rounded:0,color:"success"},{default:n(()=>t[2]||(t[2]=[e(" Tile Button ")])),_:1,__:[2]}),o(r,{rounded:"pill",color:"info"},{default:n(()=>t[3]||(t[3]=[e(" Pill Button ")])),_:1,__:[3]})])}const Tt=d(It,[["render",Pt],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/button/DemoButtonRounded.vue"]]),$t={},jt={class:"demo-space-x"};function Lt(s,t){return c(),p("div",jt,[o(r,{variant:"flat"},{default:n(()=>t[0]||(t[0]=[e(" Primary ")])),_:1,__:[0]}),o(r,{variant:"flat",color:"secondary"},{default:n(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1,__:[1]}),o(r,{variant:"flat",color:"success"},{default:n(()=>t[2]||(t[2]=[e(" Success ")])),_:1,__:[2]}),o(r,{variant:"flat",color:"info"},{default:n(()=>t[3]||(t[3]=[e(" Info ")])),_:1,__:[3]}),o(r,{variant:"flat",color:"warning"},{default:n(()=>t[4]||(t[4]=[e(" Warning ")])),_:1,__:[4]}),o(r,{variant:"flat",color:"error"},{default:n(()=>t[5]||(t[5]=[e(" Error ")])),_:1,__:[5]})])}const Ct=d($t,[["render",Lt],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/button/DemoButtonFlat.vue"]]),Wt={},zt={class:"demo-space-x"};function Ot(s,t){return c(),p("div",zt,[o(r,{variant:"outlined"},{default:n(()=>t[0]||(t[0]=[e(" Primary ")])),_:1,__:[0]}),o(r,{variant:"outlined",color:"secondary"},{default:n(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1,__:[1]}),o(r,{variant:"outlined",color:"success"},{default:n(()=>t[2]||(t[2]=[e(" Success ")])),_:1,__:[2]}),o(r,{variant:"outlined",color:"info"},{default:n(()=>t[3]||(t[3]=[e(" Info ")])),_:1,__:[3]}),o(r,{variant:"outlined",color:"warning"},{default:n(()=>t[4]||(t[4]=[e(" Warning ")])),_:1,__:[4]}),o(r,{variant:"outlined",color:"error"},{default:n(()=>t[5]||(t[5]=[e(" Error ")])),_:1,__:[5]})])}const Nt=d(Wt,[["render",Ot],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/button/DemoButtonOutlined.vue"]]),Rt={},Ut={class:"demo-space-x"};function At(s,t){return c(),p("div",Ut,[o(r,{color:"primary"},{default:n(()=>t[0]||(t[0]=[e(" Primary ")])),_:1,__:[0]}),o(r,{color:"secondary"},{default:n(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1,__:[1]}),o(r,{color:"success"},{default:n(()=>t[2]||(t[2]=[e(" Success ")])),_:1,__:[2]}),o(r,{color:"info"},{default:n(()=>t[3]||(t[3]=[e(" Info ")])),_:1,__:[3]}),o(r,{color:"warning"},{default:n(()=>t[4]||(t[4]=[e(" Warning ")])),_:1,__:[4]}),o(r,{color:"error"},{default:n(()=>t[5]||(t[5]=[e(" Error ")])),_:1,__:[5]})])}const Gt=d(Rt,[["render",At],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/button/DemoButtonColors.vue"]]),Yt={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`},qt={ts:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`},Ft={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Qt={ts:`<script lang="ts" setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    density="comfortable"
  >
    <VBtn icon="tabler-align-left" />
    <VBtn icon="tabler-align-center" />
    <VBtn icon="tabler-align-right" />
    <VBtn icon="tabler-align-justified" />
  </VBtnToggle>
</template>
`,js:`<script setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    density="comfortable"
  >
    <VBtn icon="tabler-align-left" />
    <VBtn icon="tabler-align-center" />
    <VBtn icon="tabler-align-right" />
    <VBtn icon="tabler-align-justified" />
  </VBtnToggle>
</template>
`},Ht={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="tabler-checkbox"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="tabler-circle-minus"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="tabler-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="tabler-settings" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="tabler-circle-off" />
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="tabler-checkbox"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="tabler-circle-minus"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="tabler-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="tabler-settings" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="tabler-circle-off" />
    </VBtn>
  </div>
</template>
`},Jt={ts:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="tabler-briefcase"
      rounded
    />

    <VBtn
      variant="tonal"
      icon="tabler-user-plus"
    />

    <VBtn
      icon="tabler-search"
      variant="outlined"
      color="success"
    />

    <VBtn
      icon="tabler-thumb-up"
      variant="text"
      color="info"
    />

    <VBtn
      icon="tabler-star"
      variant="tonal"
      color="success"
      rounded
    />

    <VBtn
      icon="tabler-heart"
      variant="text"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="tabler-briefcase"
      rounded
    />

    <VBtn
      variant="tonal"
      icon="tabler-user-plus"
    />

    <VBtn
      icon="tabler-search"
      variant="outlined"
      color="success"
    />

    <VBtn
      icon="tabler-thumb-up"
      variant="text"
      color="info"
    />

    <VBtn
      icon="tabler-star"
      variant="tonal"
      color="success"
      rounded
    />

    <VBtn
      icon="tabler-heart"
      variant="text"
      color="error"
    />
  </div>
</template>
`},Kt={ts:`<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`},Mt={ts:`<script lang="ts" setup>
const loadings = ref<boolean[]>([])

const load = (i: number) => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="tabler-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="tabler-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`,js:`<script setup>
const loadings = ref([])

const load = i => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="tabler-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="tabler-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`},Xt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Zt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
`},ht={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`},to={ts:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`},oo={ts:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`},no={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},eo={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
`},ro={__name:"button",setup(s,{expose:t}){t();const _={get block(){return Yt},get colors(){return qt},get flat(){return Ft},get group(){return Qt},get icon(){return Ht},get iconOnly(){return Jt},get link(){return Kt},get loaders(){return Mt},get outlined(){return Xt},get plain(){return Zt},get rounded(){return ht},get router(){return to},get sizing(){return oo},get text(){return no},get tonal(){return eo}};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}};function lo(s,t,_,l,f,V){const m=Gt,u=O,x=Nt,y=Ct,k=Tt,S=Et,E=xt,I=vt,D=mt,P=ct,T=at,$=nt,j=h,L=J,C=q,W=U;return c(),v(w,null,{default:n(()=>[o(i,{cols:"12"},{default:n(()=>[o(u,{title:"Colors",code:l.colors},{default:n(()=>[t[0]||(t[0]=a("p",null,[e("The "),a("code",null,"color"),e(" prop is used to change the background color of the alert.")],-1)),o(m)]),_:1,__:[0]},8,["code"])]),_:1}),o(i,{cols:"12"},{default:n(()=>[o(u,{title:"Outlined",code:l.outlined},{default:n(()=>[t[1]||(t[1]=a("p",null,[e("The "),a("code",null,"outlined"),e(" variant option is used to create outlined buttons.")],-1)),o(x)]),_:1,__:[1]},8,["code"])]),_:1}),o(i,{cols:"12"},{default:n(()=>[o(u,{title:"Flat",code:l.flat},{default:n(()=>[t[2]||(t[2]=a("p",null,[e("The "),a("code",null,"flat"),e(" buttons still maintain their background color, but have no box shadow.")],-1)),o(y)]),_:1,__:[2]},8,["code"])]),_:1}),o(i,{cols:"12"},{default:n(()=>[o(u,{title:"Rounded",code:l.rounded},{default:n(()=>[t[3]||(t[3]=a("p",null,[e("Use the "),a("code",null,"rounded"),e(" prop to control the border radius of buttons.")],-1)),o(k)]),_:1,__:[3]},8,["code"])]),_:1}),o(i,{cols:"12"},{default:n(()=>[o(u,{title:"Text",code:l.text},{default:n(()=>[t[4]||(t[4]=a("p",null,[e("Use "),a("code",null,"text"),e(" variant option to create text button. Text buttons have no box shadow and no background.")],-1)),o(S)]),_:1,__:[4]},8,["code"])]),_:1}),o(i,{cols:"12"},{default:n(()=>[o(u,{title:"Plain",code:l.plain},{default:n(()=>[t[5]||(t[5]=a("p",null,[e("Use "),a("code",null,"plain"),e(" variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.")],-1)),o(E)]),_:1,__:[5]},8,["code"])]),_:1}),o(i,{cols:"12"},{default:n(()=>[o(u,{title:"Tonal",code:l.tonal},{default:n(()=>[t[6]||(t[6]=a("p",null,[e("Use "),a("code",null,"tonal"),e(" variant option to a create a light background button.")],-1)),o(I)]),_:1,__:[6]},8,["code"])]),_:1}),o(i,{cols:"12"},{default:n(()=>[o(u,{title:"Icon",code:l.icon},{default:n(()=>[t[7]||(t[7]=a("p",null,"Icons can be used inside of buttons to add emphasis to the action.",-1)),o(D)]),_:1,__:[7]},8,["code"])]),_:1}),o(i,{cols:"12"},{default:n(()=>[o(u,{title:"Icon Only",code:l.iconOnly},{default:n(()=>[t[8]||(t[8]=a("p",null,[e("Use "),a("code",null,"VIcon"),e(" component inside button to create buttons that looks like rest of the theme.")],-1)),o(P)]),_:1,__:[8]},8,["code"])]),_:1}),o(i,{cols:"12"},{default:n(()=>[o(u,{title:"Sizing",code:l.sizing},{default:n(()=>[t[9]||(t[9]=a("p",null,"Buttons can be given different sizing options to fit a multitude of scenarios.",-1)),o(T)]),_:1,__:[9]},8,["code"])]),_:1}),o(i,{cols:"12"},{default:n(()=>[o(u,{title:"Block",code:l.block},{default:n(()=>[t[10]||(t[10]=a("p",null,[e("The "),a("code",null,"block"),e(" prop allows buttons to extend the full available width.")],-1)),o($)]),_:1,__:[10]},8,["code"])]),_:1}),o(i,{cols:"12"},{default:n(()=>[o(u,{title:"Loaders",code:l.loaders},{default:n(()=>[t[11]||(t[11]=a("p",null,[e("Using the "),a("code",null,"loading"),e(" prop, you can notify a user that there is processing taking place. The default behavior is to use a "),a("code",null,"v-progress-circular"),e(" component but this can be customized.")],-1)),o(j)]),_:1,__:[11]},8,["code"])]),_:1}),o(i,{cols:"12"},{default:n(()=>[o(u,{title:"Router",code:l.router},{default:n(()=>[t[13]||(t[13]=a("p",null,[e("Use "),a("code",null,"to"),e(" prop to create button with router support.")],-1)),o(g,{color:"warning",variant:"tonal",class:"mb-4"},{default:n(()=>t[12]||(t[12]=[e(" Note: On click of the link button, You will get redirected to another page. ")])),_:1,__:[12]}),o(L)]),_:1,__:[13]},8,["code"])]),_:1}),o(i,{cols:"12"},{default:n(()=>[o(u,{title:"Link",code:l.link},{default:n(()=>[t[15]||(t[15]=a("p",null,[e("Designates that the component is a link. This is automatic when using the "),a("code",null,"href"),e(" or "),a("code",null,"to"),e(" prop.")],-1)),o(g,{color:"warning",variant:"tonal",class:"mb-4"},{default:n(()=>t[14]||(t[14]=[e(" Note: On click of the link button, You will get redirected to another page. ")])),_:1,__:[14]}),o(C)]),_:1,__:[15]},8,["code"])]),_:1}),o(i,{cols:"12"},{default:n(()=>[o(u,{title:"Group",code:l.group},{default:n(()=>[t[16]||(t[16]=a("p",null,[e(" Wrap buttons with the "),a("code",null,"v-btn-toggle"),e(" component to create a group button. You can add a visual divider between buttons with the "),a("code",null,"divided"),e(" prop. ")],-1)),o(W)]),_:1,__:[16]},8,["code"])]),_:1})]),_:1})}const vo=d(ro,[["render",lo],["__file","E:/wamp64/www/sales/frontend/src/pages/components/button.vue"]]);export{vo as default};
