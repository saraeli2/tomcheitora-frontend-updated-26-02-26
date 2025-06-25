import{_ as f,c as S,o as _,b as r,a as o,t as h,w as t,d as v,i as I,B as z,c5 as L,Y,a2 as x,F as D,f as p,W as y,j as n}from"./index-BGIMdqyN.js";import{V as N}from"./VAvatar-CYJWVBhL.js";import{V as c}from"./VSlider-DQ2_r4yS.js";import{a as G}from"./VImg-nOKaZD-s.js";import{a as i,V as b}from"./VRow-BFNCnCWI.js";import{V as C}from"./VTextField-DRZWT-VU.js";import{_ as W}from"./AppTextField-DHa-jRMo.js";import{_ as q}from"./AppCardCode-C-zO1RUn.js";import"./VSliderTrack-c1UIYGry.js";import"./VInput-CH8dtMYl.js";import"./form-DbIa-vyG.js";/* empty css              *//* empty css                   */import"./VCounter-A4qJAdeX.js";import"./VField-B7Xo4Lej.js";import"./easing-Bybner-F.js";import"./forwardRefs-C-GTDzx5.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";const g=40,k=218,H={__name:"DemoSliderAppendAndPrepend",setup(u,{expose:e}){e();const a=p(40),l=p(!1),m=y(()=>a.value<100?"primary":a.value<125?"success":a.value<140?"info":a.value<175?"warning":"error"),d=y(()=>`${60/a.value}s`),w={bpm:a,min:g,max:k,isPlaying:l,color:m,animationDuration:d,decrement:()=>{a.value>g&&(a.value-=1)},increment:()=>{a.value<k&&(a.value+=1)}};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}},J={class:"d-flex justify-space-between ma-4"},K=["textContent"];function Q(u,e,a,l,m,d){return _(),S(D,null,[r("div",J,[r("div",null,[r("span",{class:"text-6xl font-weight-light",textContent:h(l.bpm)},null,8,K),e[2]||(e[2]=r("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),o(L,null,{default:t(()=>[l.isPlaying?(_(),v(N,{key:0,color:l.color,style:z({animationDuration:l.animationDuration}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):I("",!0)]),_:1})]),r("div",null,[o(x,{color:l.color,icon:"",elevation:"0",onClick:e[0]||(e[0]=s=>l.isPlaying=!l.isPlaying)},{default:t(()=>[o(Y,{size:"large",icon:l.isPlaying?"tabler-pause":"tabler-play"},null,8,["icon"])]),_:1},8,["color"])])]),o(c,{modelValue:l.bpm,"onUpdate:modelValue":e[1]||(e[1]=s=>l.bpm=s),color:l.color,step:1,min:l.min,max:l.max,"track-color":"secondary"},{prepend:t(()=>[o(x,{size:"small",variant:"text",icon:"tabler-minus",color:l.color,onClick:l.decrement},null,8,["color"])]),append:t(()=>[o(x,{size:"small",variant:"text",icon:"tabler-plus",color:l.color,onClick:l.increment},null,8,["color"])]),_:1},8,["modelValue","color"])],64)}const X=f(H,[["render",Q],["__scopeId","data-v-edf4d1fa"],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/slider/DemoSliderAppendAndPrepend.vue"]]),Z={__name:"DemoSliderAppendTextField",setup(u,{expose:e}){e();const a=p(161),l=p(105),m=p(225),d={redColorValue:a,greenColorValue:l,blueColorValue:m};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}},$={class:"d-flex justify-space-between"},ee={class:"d-flex justify-space-between"},le={class:"d-flex justify-space-between"};function oe(u,e,a,l,m,d){return _(),S(D,null,[o(G,{style:z({background:`rgb(${l.redColorValue}, ${l.greenColorValue}, ${l.blueColorValue})`}),height:"150px"},null,8,["style"]),o(b,{class:"mt-5"},{default:t(()=>[o(i,{cols:"12"},{default:t(()=>[r("div",$,[o(c,{modelValue:l.redColorValue,"onUpdate:modelValue":e[0]||(e[0]=s=>l.redColorValue=s),max:255,step:1,"prepend-icon":"tabler-letter-r"},null,8,["modelValue"]),o(C,{modelValue:l.redColorValue,"onUpdate:modelValue":e[1]||(e[1]=s=>l.redColorValue=s),type:"number",placeholder:"10",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),o(i,{cols:"12"},{default:t(()=>[r("div",ee,[o(c,{modelValue:l.greenColorValue,"onUpdate:modelValue":e[2]||(e[2]=s=>l.greenColorValue=s),max:255,step:1,"prepend-icon":"tabler-letter-g"},null,8,["modelValue"]),o(C,{modelValue:l.greenColorValue,"onUpdate:modelValue":e[3]||(e[3]=s=>l.greenColorValue=s),type:"number",placeholder:"20",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),o(i,{cols:"12"},{default:t(()=>[r("div",le,[o(c,{modelValue:l.blueColorValue,"onUpdate:modelValue":e[4]||(e[4]=s=>l.blueColorValue=s),max:255,step:1,"prepend-icon":"tabler-letter-b"},null,8,["modelValue"]),o(C,{modelValue:l.blueColorValue,"onUpdate:modelValue":e[5]||(e[5]=s=>l.blueColorValue=s),type:"number",placeholder:"30",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1})]),_:1})],64)}const te=f(Z,[["render",oe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/slider/DemoSliderAppendTextField.vue"]]),se={__name:"DemoSliderVertical",setup(u,{expose:e}){e();const l={value:p(10)};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function re(u,e,a,l,m,d){return _(),v(c,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s),direction:"vertical"},null,8,["modelValue"])}const ae=f(se,[["render",re],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/slider/DemoSliderVertical.vue"]]),ne={__name:"DemoSliderTicks",setup(u,{expose:e}){e();const a=p(0),l=p(1),d={value:a,fruits:l,ticksLabels:{0:"Figs",1:"Lemon",2:"Pear",3:"Apple"}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function ie(u,e,a,l,m,d){return _(),v(b,null,{default:t(()=>[o(i,{cols:"12"},{default:t(()=>[e[4]||(e[4]=r("div",{class:"text-caption"}," Show ticks when using slider ",-1)),o(c,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1,__:[4]}),o(i,{cols:"12"},{default:t(()=>[e[5]||(e[5]=r("div",{class:"text-caption"}," Always show ticks ",-1)),o(c,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=s=>l.value=s),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1,__:[5]}),o(i,{cols:"12"},{default:t(()=>[e[6]||(e[6]=r("div",{class:"text-caption"}," Tick size ",-1)),o(c,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=s=>l.value=s),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1,__:[6]}),o(i,{cols:"12"},{default:t(()=>[e[7]||(e[7]=r("div",{class:"text-caption"}," Tick labels ",-1)),o(c,{modelValue:l.fruits,"onUpdate:modelValue":e[3]||(e[3]=s=>l.fruits=s),ticks:l.ticksLabels,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1,__:[7]})]),_:1})}const de=f(ne,[["render",ie],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/slider/DemoSliderTicks.vue"]]),me={__name:"DemoSliderThumb",setup(u,{expose:e}){e();const a=["😭","😢","😔","🙁","😐","🙂","😊","😁","😄","😍"],l=p(45),m={satisfactionEmojis:a,slider:l};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}};function ce(u,e,a,l,m,d){return _(),v(b,null,{default:t(()=>[o(i,{cols:"12"},{default:t(()=>[e[4]||(e[4]=r("div",{class:"text-caption"}," Show thumb when using slider ",-1)),o(c,{modelValue:l.slider,"onUpdate:modelValue":e[0]||(e[0]=s=>l.slider=s),"thumb-label":""},null,8,["modelValue"])]),_:1,__:[4]}),o(i,{cols:"12"},{default:t(()=>[e[5]||(e[5]=r("div",{class:"text-caption"}," Always show thumb label ",-1)),o(c,{modelValue:l.slider,"onUpdate:modelValue":e[1]||(e[1]=s=>l.slider=s),"thumb-label":"always"},null,8,["modelValue"])]),_:1,__:[5]}),o(i,{cols:"12"},{default:t(()=>[e[6]||(e[6]=r("div",{class:"text-caption"}," Custom thumb size ",-1)),o(c,{modelValue:l.slider,"onUpdate:modelValue":e[2]||(e[2]=s=>l.slider=s),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1,__:[6]}),o(i,{cols:"12"},{default:t(()=>[e[7]||(e[7]=r("div",{class:"text-caption"}," Custom thumb label ",-1)),o(c,{modelValue:l.slider,"onUpdate:modelValue":e[3]||(e[3]=s=>l.slider=s),"thumb-label":"always"},{"thumb-label":t(({modelValue:s})=>[n(h(l.satisfactionEmojis[Math.min(Math.floor(s/10),9)]),1)]),_:1},8,["modelValue"])]),_:1,__:[7]})]),_:1})}const ue=f(me,[["render",ce],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/slider/DemoSliderThumb.vue"]]),pe={};function Ve(u,e){return _(),v(c,{step:10,"show-ticks":"","thumb-size":18,"tick-size":3,"track-size":2})}const _e=f(pe,[["render",Ve],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/slider/DemoSliderSize.vue"]]),fe={__name:"DemoSliderMinAndMax",setup(u,{expose:e}){e();const a=p(-50),l=p(90),m=p(40),d={min:a,max:l,slider:m};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}},ve={class:"d-flex justify-space-between"};function be(u,e,a,l,m,d){const s=W;return _(),S("div",ve,[o(c,{modelValue:l.slider,"onUpdate:modelValue":e[0]||(e[0]=V=>l.slider=V),max:l.max,min:l.min,step:1},null,8,["modelValue","max","min"]),o(s,{modelValue:l.slider,"onUpdate:modelValue":e[1]||(e[1]=V=>l.slider=V),type:"number",placeholder:"10",style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])}const we=f(fe,[["render",be],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/slider/DemoSliderMinAndMax.vue"]]),xe={__name:"DemoSliderValidation",setup(u,{expose:e}){e();const m={value:p(30),rules:[d=>d<=40||"Only 40 in stock"]};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}};function Ce(u,e,a,l,m,d){return _(),v(c,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s),error:l.value>40,rules:l.rules,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"])}const Se=f(xe,[["render",Ce],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/slider/DemoSliderValidation.vue"]]),ye={__name:"DemoSliderStep",setup(u,{expose:e}){e();const l={value:p(0)};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function ge(u,e,a,l,m,d){return _(),v(c,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue"])}const ke=f(ye,[["render",ge],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/slider/DemoSliderStep.vue"]]),he={__name:"DemoSliderIcons",setup(u,{expose:e}){e();const a=p(0),l=p(0),m=p(10),d={mediaSlider:a,alarmSlider:l,zoomInOut:m};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function ze(u,e,a,l,m,d){return _(),v(b,null,{default:t(()=>[o(i,{cols:"12"},{default:t(()=>[o(c,{modelValue:l.mediaSlider,"onUpdate:modelValue":e[0]||(e[0]=s=>l.mediaSlider=s),"prepend-icon":"tabler-volume"},null,8,["modelValue"])]),_:1}),o(i,{cols:"12"},{default:t(()=>[o(c,{modelValue:l.alarmSlider,"onUpdate:modelValue":e[1]||(e[1]=s=>l.alarmSlider=s),"append-icon":"tabler-alarm"},null,8,["modelValue"])]),_:1}),o(i,{cols:"12"},{default:t(()=>[o(c,{modelValue:l.zoomInOut,"onUpdate:modelValue":e[2]||(e[2]=s=>l.zoomInOut=s),"append-icon":"tabler-minus","prepend-icon":"tabler-plus"},null,8,["modelValue"])]),_:1})]),_:1})}const De=f(he,[["render",ze],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/slider/DemoSliderIcons.vue"]]),Te={__name:"DemoSliderColors",setup(u,{expose:e}){e();const a=p(25),l=p(75),m=p(50),d={sliderColorValue:a,sliderTrackColorValue:l,sliderThumbColorValue:m};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function je(u,e,a,l,m,d){return _(),v(b,null,{default:t(()=>[o(i,{cols:"12"},{default:t(()=>[e[3]||(e[3]=r("div",{class:"text-caption"}," color ",-1)),o(c,{modelValue:l.sliderColorValue,"onUpdate:modelValue":e[0]||(e[0]=s=>l.sliderColorValue=s),color:"error"},null,8,["modelValue"])]),_:1,__:[3]}),o(i,{cols:"12"},{default:t(()=>[e[4]||(e[4]=r("div",{class:"text-caption"}," track-color ",-1)),o(c,{modelValue:l.sliderTrackColorValue,"onUpdate:modelValue":e[1]||(e[1]=s=>l.sliderTrackColorValue=s),"track-color":"error"},null,8,["modelValue"])]),_:1,__:[4]}),o(i,{cols:"12"},{default:t(()=>[e[5]||(e[5]=r("div",{class:"text-caption"}," thumb-color ",-1)),o(c,{modelValue:l.sliderThumbColorValue,"onUpdate:modelValue":e[2]||(e[2]=s=>l.sliderThumbColorValue=s),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1,__:[5]})]),_:1})}const Re=f(Te,[["render",je],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/slider/DemoSliderColors.vue"]]),Ae={};function Pe(u,e){return _(),v(b,null,{default:t(()=>[o(i,{cols:"12"},{default:t(()=>[e[0]||(e[0]=r("div",{class:"text-caption"}," Disabled ",-1)),o(c,{disabled:"",label:"Disabled","model-value":30})]),_:1,__:[0]}),o(i,{cols:"12"},{default:t(()=>[e[1]||(e[1]=r("div",{class:"text-caption"}," Readonly ",-1)),o(c,{readonly:"",label:"Readonly","model-value":30})]),_:1,__:[1]})]),_:1})}const Ue=f(Ae,[["render",Pe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/slider/DemoSliderDisabledAndReadonly.vue"]]),Fe={__name:"DemoSliderBasic",setup(u,{expose:e}){e();const l={sliderValue:p(30)};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function Be(u,e,a,l,m,d){return _(),v(b,null,{default:t(()=>[o(i,{cols:"12"},{default:t(()=>[o(c)]),_:1}),o(i,{cols:"12"},{default:t(()=>[o(c,{modelValue:l.sliderValue,"onUpdate:modelValue":e[0]||(e[0]=s=>l.sliderValue=s)},null,8,["modelValue"])]),_:1})]),_:1})}const Oe=f(Fe,[["render",Be],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/slider/DemoSliderBasic.vue"]]),Ee={ts:`<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'tabler-pause' : 'tabler-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`,js:`<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})

const animationDuration = computed(() => {
  return \`\${ 60 / bpm.value }s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'tabler-pause' : 'tabler-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`},Me={ts:`<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-r"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-g"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-b"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-r"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-g"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-b"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`},Ie={ts:`<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`},Le={ts:`<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`},Ye={ts:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`},Ne={ts:`<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="tabler-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="tabler-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="tabler-minus"
        prepend-icon="tabler-plus"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="tabler-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="tabler-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="tabler-minus"
        prepend-icon="tabler-plus"
      />
    </VCol>
  </VRow>
</template>
`},Ge={ts:`<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <AppTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`,js:`<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <AppTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`},We={ts:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`,js:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`},qe={ts:`<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,js:`<script setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`},He={ts:`<script lang="ts" setup>
const satisfactionEmojis = ['😭', '😢', '😔', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const satisfactionEmojis = [
  '😭',
  '😢',
  '😔',
  '🙁',
  '😐',
  '🙂',
  '😊',
  '😁',
  '😄',
  '😍',
]

const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Je={ts:`<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const value = ref(0)
const fruits = ref(1)

const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`},Ke={ts:`<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`,js:`<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`},Qe={ts:`<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`},Xe={__name:"slider",setup(u,{expose:e}){e();const a={get appendAndPrepend(){return Ee},get appendTextField(){return Me},get basic(){return Ie},get colors(){return Le},get disabledAndReadonly(){return Ye},get icons(){return Ne},get minAndMax(){return Ge},get size(){return We},get step(){return qe},get thumb(){return He},get ticks(){return Je},get validation(){return Ke},get vertical(){return Qe}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function Ze(u,e,a,l,m,d){const s=Oe,V=q,w=Ue,T=Re,j=De,R=ke,A=Se,P=we,U=_e,F=ue,B=de,O=ae,E=te,M=X;return _(),v(b,{class:"match-height"},{default:t(()=>[o(i,{cols:"12",md:"6"},{default:t(()=>[o(V,{title:"Basic",code:l.basic},{default:t(()=>[e[0]||(e[0]=r("p",null,[n("The "),r("code",null,"v-slider"),n(" component is a better visualization of the number input.")],-1)),o(s)]),_:1,__:[0]},8,["code"])]),_:1}),o(i,{cols:"12",md:"6"},{default:t(()=>[o(V,{title:"Disabled and Readonly",code:l.disabledAndReadonly},{default:t(()=>[e[1]||(e[1]=r("p",null,[n("You cannot interact with "),r("code",null,"disabled"),n(" and "),r("code",null,"readonly"),n(" sliders.")],-1)),o(w)]),_:1,__:[1]},8,["code"])]),_:1}),o(i,{cols:"12",md:"6"},{default:t(()=>[o(V,{title:"Colors",code:l.colors},{default:t(()=>[e[2]||(e[2]=r("p",null,[n("You can set the colors of the slider using the props "),r("code",null,"color"),n(", "),r("code",null,"track-color"),n(" and "),r("code",null,"thumb-color"),n(".")],-1)),o(T)]),_:1,__:[2]},8,["code"])]),_:1}),o(i,{cols:"12",md:"6"},{default:t(()=>[o(V,{title:"Icons",code:l.icons},{default:t(()=>[e[3]||(e[3]=r("p",null,[n("You can add icons to the slider with the "),r("code",null,"append-icon"),n(" and "),r("code",null,"prepend-icon"),n(" props.")],-1)),o(j)]),_:1,__:[3]},8,["code"])]),_:1}),o(i,{cols:"12",md:"6"},{default:t(()=>[o(V,{title:"Step",code:l.step},{default:t(()=>[e[4]||(e[4]=r("p",null,[n("Using the "),r("code",null,"step"),n(" prop you can control the precision of the slider, and how much it should move each step.")],-1)),o(R)]),_:1,__:[4]},8,["code"])]),_:1}),o(i,{cols:"12",md:"6"},{default:t(()=>[o(V,{title:"Validation",code:l.validation},{default:t(()=>[e[5]||(e[5]=r("p",null,[n("Vuetify includes simple validation through the "),r("code",null,"rules"),n(" prop.")],-1)),o(A)]),_:1,__:[5]},8,["code"])]),_:1}),o(i,{cols:"12",md:"6"},{default:t(()=>[o(V,{title:"Min and Max",code:l.minAndMax},{default:t(()=>[e[6]||(e[6]=r("p",null,[n("You can set "),r("code",null,"min"),n(" and "),r("code",null,"max"),n(" values of sliders.")],-1)),o(P)]),_:1,__:[6]},8,["code"])]),_:1}),o(i,{cols:"12",md:"6"},{default:t(()=>[o(V,{title:"Size",code:l.size},{default:t(()=>[e[7]||(e[7]=r("p",null,[n("Use "),r("code",null,"thumb-size"),n(", "),r("code",null,"tick-size"),n(", and "),r("code",null,"track-size"),n(" prop to increase and decrease the size of thumb, tick and track. ")],-1)),o(U)]),_:1,__:[7]},8,["code"])]),_:1}),o(i,{cols:"12",md:"6"},{default:t(()=>[o(V,{title:"Thumb",code:l.thumb},{default:t(()=>[e[8]||(e[8]=r("p",null,[n("You can display a thumb label while sliding or always with the "),r("code",null,"thumb-label"),n(" prop.")],-1)),o(F)]),_:1,__:[8]},8,["code"])]),_:1}),o(i,{cols:"12",md:"6"},{default:t(()=>[o(V,{title:"Ticks",code:l.ticks},{default:t(()=>[e[9]||(e[9]=r("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1)),o(B)]),_:1,__:[9]},8,["code"])]),_:1}),o(i,{cols:"12",md:"6"},{default:t(()=>[o(V,{title:"Vertical",code:l.vertical},{default:t(()=>[e[10]||(e[10]=r("p",null,[n(" You can use the "),r("code",null,"vertical"),n(" prop to switch sliders to a vertical orientation. ")],-1)),o(O)]),_:1,__:[10]},8,["code"])]),_:1}),o(i,{cols:"12",md:"6"},{default:t(()=>[o(V,{title:"Append text field",code:l.appendTextField},{default:t(()=>[e[11]||(e[11]=r("p",null,[n("Sliders can be combined with other components in its "),r("code",null,"append"),n(" slot, such as "),r("code",null,"v-text-field"),n(", to add additional functionality to the component.")],-1)),o(E)]),_:1,__:[11]},8,["code"])]),_:1}),o(i,{cols:"12",md:"6"},{default:t(()=>[o(V,{title:"Append and prepend",code:l.appendAndPrepend},{default:t(()=>[e[12]||(e[12]=r("p",null,[n("Use slots such as "),r("code",null,"append"),n(" and "),r("code",null,"prepend"),n(" to easily customize the "),r("code",null,"v-slider"),n(" to fit any situation.")],-1)),o(M)]),_:1,__:[12]},8,["code"])]),_:1})]),_:1})}const xl=f(Xe,[["render",Ze],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/slider.vue"]]);export{xl as default};
