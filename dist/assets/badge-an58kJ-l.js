import{a as b}from"./avatar-1-DJJIeD8a.js";import{_,c as B,o as p,a as e,w as t,a2 as w,j as s,d as z,F as R,h as E,t as j,Y as u,f as I,L as A,b as d}from"./index-BGIMdqyN.js";import{V as i}from"./VAvatar-CYJWVBhL.js";import{V as l}from"./VImg-nOKaZD-s.js";import{V as r}from"./VBadge-CKundsNG.js";import{V as k,a as P}from"./VTabs-DDU38cHN.js";import{_ as W}from"./AppCardCode-C-zO1RUn.js";import{V as C,a as V}from"./VRow-BFNCnCWI.js";import"./forwardRefs-C-GTDzx5.js";import"./easing-Bybner-F.js";import"./VWindowItem-CCqLyGax.js";import"./lazy-CKhx2O3m.js";import"./ssrBoot-DUtO1XoE.js";import"./VSlideGroup-C-0uVn6B.js";import"./scopeId-DfGkhZ3B.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";/* empty css              */const N={__name:"DemoBadgeTonal",setup(c,{expose:a}){a();const n={get avatar1(){return b}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},M={class:"demo-space-x"};function Y(c,a,n,o,m,f){return p(),B("div",M,[e(r,{content:"5",class:"v-badge--tonal"},{default:t(()=>[e(i,{size:"48"},{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1}),e(r,{content:"1",class:"v-badge--tonal",color:"error"},{default:t(()=>[e(w,{color:"error"},{default:t(()=>a[0]||(a[0]=[s(" Default ")])),_:1,__:[0]})]),_:1}),e(r,{icon:"tabler-lock-open",color:"info",class:"v-badge--tonal"},{default:t(()=>[e(i,null,{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1})])}const U=_(N,[["render",Y],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/badge/DemoBadgeTonal.vue"]]),F={__name:"DemoBadgeMaximumValue",setup(c,{expose:a}){a();const n={get avatar1(){return b}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},L={class:"demo-space-x"};function q(c,a,n,o,m,f){return p(),B("div",L,[e(r,{content:"99",max:"99","offset-x":"5","offset-y":"-1"},{default:t(()=>[e(i,{size:"48"},{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1}),e(r,{content:"100",max:"99","offset-x":"5","offset-y":"-1"},{default:t(()=>[e(i,{size:"48"},{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1}),e(r,{content:"1000",max:"999","offset-x":"5","offset-y":"-1"},{default:t(()=>[e(i,{size:"48"},{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1})])}const G=_(F,[["render",q],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/badge/DemoBadgeMaximumValue.vue"]]),J={__name:"DemoBadgeTabs",setup(c,{expose:a}){a();const o={tabs:[{badge:"3",content:"Item One"},{badge:"1",content:"Item Two"},{badge:"2",content:"Item Three"}]};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function K(c,a,n,o,m,f){return p(),z(P,{grow:""},{default:t(()=>[(p(),B(R,null,E(o.tabs,v=>e(k,{key:v.content,value:v.content},{default:t(()=>[e(r,{content:v.badge,"offset-x":-18,"offset-y":6},{default:t(()=>[s(j(v.content),1)]),_:2},1032,["content"])]),_:2},1032,["value"])),64))]),_:1})}const Q=_(J,[["render",K],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/badge/DemoBadgeTabs.vue"]]),X={__name:"DemoBadgeShowOnHover",setup(c,{expose:a}){a();const n=I(),o=I(),m=I(),f=A(o),v=A(n),g=A(m),x={tRefInstagramBadge:n,tRefTwitterBadge:o,tRefWhatsappBadge:m,showTwitterBadgeOnHover:f,showInstagramBadgeOnHover:v,showWhatsappBadgeOnHover:g};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}},Z={class:"demo-space-x"};function ee(c,a,n,o,m,f){return p(),B("div",Z,[e(r,{content:"3",transition:"slide-x-transition","model-value":o.showTwitterBadgeOnHover},{default:t(()=>[e(u,{ref:"tRefTwitterBadge",size:"25",icon:"tabler-brand-twitter"},null,512)]),_:1},8,["model-value"]),e(r,{content:"5",transition:"scale-transition","model-value":o.showInstagramBadgeOnHover},{default:t(()=>[e(u,{ref:"tRefInstagramBadge",size:"25",icon:"tabler-brand-instagram"},null,512)]),_:1},8,["model-value"]),e(r,{content:"1",transition:"slide-x-transition","model-value":o.showWhatsappBadgeOnHover},{default:t(()=>[e(u,{ref:"tRefWhatsappBadge",size:"25",icon:"tabler-brand-whatsapp"},null,512)]),_:1},8,["model-value"])])}const te=_(X,[["render",ee],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/badge/DemoBadgeShowOnHover.vue"]]),ae={__name:"DemoBadgeDynamicNotifications",setup(c,{expose:a}){a();const o={notifications:I()};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}},oe={class:"d-flex align-center"},ne={class:"demo-space-x"};function re(c,a,n,o,m,f){return p(),B("div",oe,[e(r,{content:o.notifications,"model-value":!!o.notifications,color:"success",class:"me-5"},{default:t(()=>[e(u,{size:"40",icon:"tabler-brand-vue"})]),_:1},8,["content","model-value"]),d("div",ne,[e(w,{onClick:a[0]||(a[0]=v=>o.notifications=(o.notifications||0)+1)},{default:t(()=>a[2]||(a[2]=[s(" Send Message ")])),_:1,__:[2]}),e(w,{color:"error",onClick:a[1]||(a[1]=v=>o.notifications=0)},{default:t(()=>a[3]||(a[3]=[s(" Clear Notifications ")])),_:1,__:[3]})])])}const se=_(ae,[["render",re],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/badge/DemoBadgeDynamicNotifications.vue"]]),de={__name:"DemoBadgeAvatarStatus",setup(c,{expose:a}){a();const n={get avatar1(){return b}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},ce={class:"demo-space-x"};function ie(c,a,n,o,m,f){return p(),B("div",ce,[e(r,{dot:"",bordered:"",color:"success",location:"bottom end","offset-x":5,"offset-y":1},{default:t(()=>[e(i,{size:"large"},{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1}),e(r,{dot:"",bordered:"",color:"warning",location:"bottom end","offset-x":5,"offset-y":1},{default:t(()=>[e(i,{size:"large"},{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1}),e(r,{dot:"",bordered:"",color:"error",location:"bottom end","offset-x":5,"offset-y":1},{default:t(()=>[e(i,{size:"large"},{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1})])}const le=_(de,[["render",ie],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/badge/DemoBadgeAvatarStatus.vue"]]),me={__name:"DemoBadgeIcon",setup(c,{expose:a}){a();const n={get avatar1(){return b}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},ge={class:"demo-space-x"};function pe(c,a,n,o,m,f){return p(),B("div",ge,[e(r,null,{badge:t(()=>[e(u,{icon:"tabler-bulb"})]),default:t(()=>[e(i,null,{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1}),e(r,{icon:"tabler-lock-open"},{default:t(()=>[e(i,null,{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1})])}const fe=_(me,[["render",pe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/badge/DemoBadgeIcon.vue"]]),ue={__name:"DemoBadgePosition",setup(c,{expose:a}){a();const n={get avatar1(){return b}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},_e={class:"demo-space-x"};function ve(c,a,n,o,m,f){return p(),B("div",_e,[e(r,{content:"1",location:"end top"},{default:t(()=>[e(i,{size:"48"},{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1}),e(r,{location:"bottom start",content:"2"},{default:t(()=>[e(i,{size:"48"},{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1}),e(r,{location:"bottom end",content:"3"},{default:t(()=>[e(i,{size:"48"},{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1}),e(r,{location:"top start",content:"4"},{default:t(()=>[e(i,{size:"48"},{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1})])}const Ve=_(ue,[["render",ve],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/badge/DemoBadgePosition.vue"]]),Be={},be={class:"demo-space-x"};function we(c,a){return p(),B("div",be,[e(r,{dot:"",color:"primary"},{default:t(()=>[e(u,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),e(r,{dot:"",color:"secondary"},{default:t(()=>[e(u,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),e(r,{dot:"",color:"success"},{default:t(()=>[e(u,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),e(r,{dot:"",color:"info"},{default:t(()=>[e(u,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),e(r,{dot:"",color:"warning"},{default:t(()=>[e(u,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),e(r,{dot:"",color:"error"},{default:t(()=>[e(u,{size:"25",icon:"tabler-brand-instagram"})]),_:1})])}const xe=_(Be,[["render",we],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/badge/DemoBadgeColor.vue"]]),Ie={__name:"DemoBadgeStyle",setup(c,{expose:a}){a();const n={get avatar1(){return b}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},Ae={class:"demo-space-x d-flex align-center flex-wrap"};function ze(c,a,n,o,m,f){return p(),B("div",Ae,[e(r,{content:"1"},{default:t(()=>[e(w,{variant:"tonal"},{default:t(()=>a[0]||(a[0]=[s(" Default ")])),_:1,__:[0]})]),_:1}),e(r,{content:"5",bordered:""},{default:t(()=>[e(w,{variant:"tonal"},{default:t(()=>a[1]||(a[1]=[s(" Border ")])),_:1,__:[1]})]),_:1}),e(r,{dot:"",location:"bottom end","offset-x":"3","offset-y":"3"},{default:t(()=>[e(i,{size:"48"},{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1}),e(r,{inline:"",content:"5"},{default:t(()=>[e(i,{size:"48"},{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1}),e(r,{rounded:"sm",content:"5"},{default:t(()=>[e(i,{size:"48"},{default:t(()=>[e(l,{src:o.avatar1},null,8,["src"])]),_:1})]),_:1})])}const ye=_(Ie,[["render",ze],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/badge/DemoBadgeStyle.vue"]]),he={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},Se={ts:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>
  </div>
</template>
`},Te={ts:`<script lang="ts" setup>
const notifications = ref<number>()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="tabler-brand-vue"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`,js:`<script setup>
const notifications = ref()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="tabler-brand-vue"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`},De={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="tabler-bulb" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="tabler-lock-open">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="tabler-bulb" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="tabler-lock-open">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},Oe={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},$e={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},He={ts:`<script lang="ts" setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()

const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="tabler-brand-twitter"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="tabler-brand-whatsapp"
      />
    </VBadge>
  </div>
</template>
`,js:`<script setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()
const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="tabler-brand-twitter"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="tabler-brand-whatsapp"
      />
    </VBadge>
  </div>
</template>
`},Re={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},Ee={ts:`<script setup lang="ts">
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs grow>
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-18"
        :offset-y="6"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`,js:`<script setup>
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs grow>
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-18"
        :offset-y="6"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`},je={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="5"
      class="v-badge--tonal"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- default -->
    <VBadge
      content="1"
      class="v-badge--tonal"
      color="error"
    >
      <VBtn color="error">
        Default
      </VBtn>
    </VBadge>

    <!-- icon -->
    <VBadge
      icon="tabler-lock-open"
      color="info"
      class="v-badge--tonal"
    >
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="5"
      class="v-badge--tonal"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- default -->
    <VBadge
      content="1"
      class="v-badge--tonal"
      color="error"
    >
      <VBtn color="error">
        Default
      </VBtn>
    </VBadge>

    <!-- icon -->
    <VBadge
      icon="tabler-lock-open"
      color="info"
      class="v-badge--tonal"
    >
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},ke={__name:"badge",setup(c,{expose:a}){a();const n={get avatarStatus(){return he},get color(){return Se},get dynamicNotifications(){return Te},get icon(){return De},get maximumValue(){return Oe},get position(){return $e},get showOnHover(){return He},get style(){return Re},get tabs(){return Ee},get tonal(){return je}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function Pe(c,a,n,o,m,f){const v=ye,g=W,x=xe,y=Ve,h=fe,S=le,T=se,D=te,O=Q,$=G,H=U;return p(),z(C,{class:"match-height"},{default:t(()=>[e(V,{cols:"12",md:"6"},{default:t(()=>[e(g,{title:"Style",code:o.style},{default:t(()=>[a[0]||(a[0]=d("p",null,[s("You can use various props like "),d("code",null,"bordered"),s(", "),d("code",null,"dot"),s(", "),d("code",null,"inline"),s(", "),d("code",null,"rounded"),s(" etc. to style the badge.")],-1)),e(v)]),_:1,__:[0]},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:t(()=>[e(g,{title:"Color",code:o.color},{default:t(()=>[a[1]||(a[1]=d("p",null,[s("Use "),d("code",null,"color"),s(" prop to create various background badges.")],-1)),e(x)]),_:1,__:[1]},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:t(()=>[e(g,{title:"Position",code:o.position},{default:t(()=>[a[2]||(a[2]=d("p",null,[s("You can use "),d("code",null,"location"),s(" prop to change the position of the badge. Possible values are "),d("code",null,"top-end"),s(", "),d("code",null,"bottom-end"),s(", "),d("code",null,"bottom-start"),s(", "),d("code",null,"top-start"),s(".")],-1)),e(y)]),_:1,__:[2]},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:t(()=>[e(g,{title:"Icon",code:o.icon},{default:t(()=>[a[3]||(a[3]=d("p",null,[s("You can use "),d("code",null,"icon"),s(" prop or use "),d("code",null,"slot"),s(" to render the icon")],-1)),e(h)]),_:1,__:[3]},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:t(()=>[e(g,{title:"Avatar Status",code:o.avatarStatus},{default:t(()=>[a[4]||(a[4]=d("p",null,"You can use badge with avatar as status.",-1)),e(S)]),_:1,__:[4]},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:t(()=>[e(g,{title:"Dynamic notifications",code:o.dynamicNotifications},{default:t(()=>[a[5]||(a[5]=d("p",null,"You can incorporate badges with dynamic content to make things such as a notification system.",-1)),e(T)]),_:1,__:[5]},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:t(()=>[e(g,{title:"Show on hover",code:o.showOnHover},{default:t(()=>[a[6]||(a[6]=d("p",null,"You can do many things with visibility control, for example, show badge on hover.",-1)),e(D)]),_:1,__:[6]},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:t(()=>[e(g,{title:"Tabs",code:o.tabs},{default:t(()=>[a[7]||(a[7]=d("p",null,"Badges help convey information to the user in a variety of ways.",-1)),e(O)]),_:1,__:[7]},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:t(()=>[e(g,{title:"Maximum Value",code:o.maximumValue},{default:t(()=>[a[8]||(a[8]=d("p",null,[s("Use "),d("code",null,"max"),s(" prop to cap the value of the badge content")],-1)),e($)]),_:1,__:[8]},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:t(()=>[e(g,{title:"Tonal",code:o.tonal},{default:t(()=>[a[9]||(a[9]=d("p",null,[s("Use class "),d("code",null,"v-badge--tonal"),s(" for using tonal variant badge.")],-1)),e(H)]),_:1,__:[9]},8,["code"])]),_:1})]),_:1})}const rt=_(ke,[["render",Pe],["__file","E:/wamp64/www/sales/frontend/src/pages/components/badge.vue"]]);export{rt as default};
