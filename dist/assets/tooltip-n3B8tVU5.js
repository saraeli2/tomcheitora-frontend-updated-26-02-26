import{a as S}from"./avatar-4-C1cD5bAZ.js";import{_ as c,c as v,o as d,a as t,w as n,j as a,a2 as p,b as i,Y as f,m as B,f as D,d as O}from"./index-BGIMdqyN.js";import{V as e}from"./VTooltip-Dan-XaZs.js";import{V as E}from"./VImg-nOKaZD-s.js";import{V as H}from"./VAvatar-CYJWVBhL.js";import{_ as $}from"./AppCardCode-C-zO1RUn.js";import{V as k,a as _}from"./VRow-BFNCnCWI.js";import"./VOverlay-qz3yYbIb.js";import"./easing-Bybner-F.js";import"./lazy-CKhx2O3m.js";import"./scopeId-DfGkhZ3B.js";import"./forwardRefs-C-GTDzx5.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";/* empty css              */const I={__name:"DemoTooltipTooltipOnVariousElements",setup(r,{expose:o}){o();const s={get avatar4(){return S}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},j={class:"demo-space-x"};function A(r,o,s,l,V,T){return d(),v("div",j,[t(p,null,{default:n(()=>[o[1]||(o[1]=a(" Button ")),t(e,{location:"top",activator:"parent"},{default:n(()=>o[0]||(o[0]=[a(" Tooltip ")])),_:1,__:[0]})]),_:1,__:[1]}),t(H,{color:"info"},{default:n(()=>[t(E,{src:l.avatar4},null,8,["src"]),t(e,{location:"top",activator:"parent"},{default:n(()=>o[2]||(o[2]=[a(" Tooltip on Avatar ")])),_:1,__:[2]})]),_:1}),t(e,{location:"top"},{activator:n(({props:m})=>[t(f,B(m,{size:"30",icon:"tabler-user"}),null,16)]),default:n(()=>[o[3]||(o[3]=i("span",null,"Tooltip on Icon",-1))]),_:1,__:[3]})])}const M=c(I,[["render",A],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tooltip/DemoTooltipTooltipOnVariousElements.vue"]]),P={},F={class:"demo-space-x"};function X(r,o){return d(),v("div",F,[t(p,null,{default:n(()=>[o[1]||(o[1]=a(" scale transition ")),t(e,{location:"top",transition:"scale-transition",activator:"parent"},{default:n(()=>o[0]||(o[0]=[i("span",null,"Scale Transition",-1)])),_:1,__:[0]})]),_:1,__:[1]}),t(p,null,{default:n(()=>[o[3]||(o[3]=a(" scroll X transition ")),t(e,{location:"top",activator:"parent",transition:"scroll-x-transition"},{default:n(()=>o[2]||(o[2]=[i("span",null,"Scroll X Transition",-1)])),_:1,__:[2]})]),_:1,__:[3]}),t(p,null,{default:n(()=>[o[5]||(o[5]=a(" scroll y transition ")),t(e,{location:"top",activator:"parent",transition:"scroll-y-transition"},{default:n(()=>o[4]||(o[4]=[i("span",null,"Scroll Y Transition",-1)])),_:1,__:[4]})]),_:1,__:[5]})])}const C=c(P,[["render",X],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tooltip/DemoTooltipTransition.vue"]]),Y={__name:"DemoTooltipVModelSupport",setup(r,{expose:o}){o();const l={isTooltipVisible:D(!1)};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},z={class:"demo-space-x"};function L(r,o,s,l,V,T){return d(),v("div",z,[t(p,{onClick:o[0]||(o[0]=m=>l.isTooltipVisible=!l.isTooltipVisible)},{default:n(()=>o[1]||(o[1]=[a(" toggle tooltip ")])),_:1,__:[1]}),t(e,{"model-value":l.isTooltipVisible,location:"top"},{activator:n(({props:m})=>[t(f,B(m,{icon:"tabler-brand-instagram"}),null,16)]),default:n(()=>[o[2]||(o[2]=i("span",null,"Programmatic tooltip",-1))]),_:1,__:[2]},8,["model-value"])])}const N=c(Y,[["render",L],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tooltip/DemoTooltipVModelSupport.vue"]]),U={};function R(r,o){return d(),O(p,{variant:"outlined"},{default:n(()=>[o[1]||(o[1]=i("span",null,"Open Delay On Hover",-1)),o[2]||(o[2]=a()),t(e,{"open-delay":"500",location:"top",activator:"parent"},{default:n(()=>o[0]||(o[0]=[i("span",null,"Open Delay On Hover",-1)])),_:1,__:[0]})]),_:1,__:[1,2]})}const q=c(U,[["render",R],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tooltip/DemoTooltipDelayOnHover.vue"]]),G={},J={class:"demo-space-x"};function K(r,o){return d(),v("div",J,[t(p,{variant:"outlined"},{default:n(()=>[o[1]||(o[1]=i("span",null,"Open On Hover",-1)),t(e,{activator:"parent",location:"top"},{default:n(()=>o[0]||(o[0]=[a(" Open On Hover ")])),_:1,__:[0]})]),_:1,__:[1]}),t(p,{variant:"outlined",color:"primary"},{default:n(()=>[o[3]||(o[3]=i("span",null,"Open On click",-1)),t(e,{"open-on-click":"","open-on-hover":!1,location:"top",activator:"parent"},{default:n(()=>o[2]||(o[2]=[a(" Open On click ")])),_:1,__:[2]})]),_:1,__:[3]}),t(p,{variant:"outlined"},{default:n(()=>[o[5]||(o[5]=i("span",null,"Open On Hover + Focus",-1)),t(e,{"open-on-focus":"",location:"top",activator:"parent"},{default:n(()=>o[4]||(o[4]=[a(" Open On Hover + Focus ")])),_:1,__:[4]})]),_:1,__:[5]})])}const Q=c(G,[["render",K],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tooltip/DemoTooltipEvents.vue"]]),W={},Z={class:"demo-space-x"};function h(r,o){return d(),v("div",Z,[t(p,{variant:"tonal"},{default:n(()=>[o[1]||(o[1]=a(" Tooltip on End ")),t(e,{activator:"parent",location:"end"},{default:n(()=>o[0]||(o[0]=[a(" End Tooltip ")])),_:1,__:[0]})]),_:1,__:[1]}),t(p,{variant:"tonal"},{default:n(()=>[o[3]||(o[3]=a(" Tooltip on Start ")),t(e,{activator:"parent",location:"start"},{default:n(()=>o[2]||(o[2]=[a(" Start Tooltip ")])),_:1,__:[2]})]),_:1,__:[3]}),t(p,{variant:"tonal"},{default:n(()=>[o[5]||(o[5]=a(" Tooltip on Top ")),t(e,{activator:"parent",location:"top"},{default:n(()=>o[4]||(o[4]=[a(" Top Tooltip ")])),_:1,__:[4]})]),_:1,__:[5]}),t(p,{variant:"tonal"},{default:n(()=>[o[7]||(o[7]=a(" Tooltip on Bottom ")),t(e,{activator:"parent",location:"bottom"},{default:n(()=>o[6]||(o[6]=[a(" Bottom Tooltip ")])),_:1,__:[6]})]),_:1,__:[7]})])}const oo=c(W,[["render",h],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tooltip/DemoTooltipLocation.vue"]]),to={ts:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`,js:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`},no={ts:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`},ao={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`},io={ts:`<script setup lang="ts">
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="tabler-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="tabler-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`},lo={ts:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`},eo={ts:`<script lang="ts" setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="tabler-brand-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="tabler-brand-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`},po={__name:"tooltip",setup(r,{expose:o}){o();const s={get delayOnHover(){return to},get events(){return no},get location(){return ao},get tooltipOnVariousElements(){return io},get transition(){return lo},get vModelSupport(){return eo}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function ro(r,o,s,l,V,T){const m=oo,u=$,w=Q,g=q,b=N,y=C,x=M;return d(),O(k,null,{default:n(()=>[t(_,{cols:"12"},{default:n(()=>[t(u,{title:"Location",code:l.location},{default:n(()=>[o[0]||(o[0]=i("p",null,[a("Use the "),i("code",null,"location"),a(" prop to specify on which side of the element the tooltip should show")],-1)),t(m)]),_:1,__:[0]},8,["code"])]),_:1}),t(_,{cols:"12"},{default:n(()=>[t(u,{title:"Events",code:l.events},{default:n(()=>[t(w)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12"},{default:n(()=>[t(u,{title:"Delay On Hover",code:l.delayOnHover},{default:n(()=>[o[1]||(o[1]=i("p",null,[a("Delay (in ms) after which tooltip opens (when "),i("code",null,"open-on-hover"),a(" prop is set to true)")],-1)),t(g)]),_:1,__:[1]},8,["code"])]),_:1}),t(_,{cols:"12"},{default:n(()=>[t(u,{title:"V-Model Support",code:l.vModelSupport},{default:n(()=>[o[2]||(o[2]=i("p",null,[a("Tooltip visibility can be programmatically changed using "),i("code",null,"v-model"),a(".")],-1)),t(b)]),_:1,__:[2]},8,["code"])]),_:1}),t(_,{cols:"12"},{default:n(()=>[t(u,{title:"Transition",code:l.transition},{default:n(()=>[o[3]||(o[3]=i("p",null,[a("Use "),i("code",null,"transition"),a(" prop to sets the component transition.")],-1)),t(y)]),_:1,__:[3]},8,["code"])]),_:1}),t(_,{cols:"12"},{default:n(()=>[t(u,{title:"Tooltip on Various Elements",code:l.tooltipOnVariousElements},{default:n(()=>[o[4]||(o[4]=i("p",null,"Tooltips can wrap any element.",-1)),t(x)]),_:1,__:[4]},8,["code"])]),_:1})]),_:1})}const Do=c(po,[["render",ro],["__file","E:/wamp64/www/sales/frontend/src/pages/components/tooltip.vue"]]);export{Do as default};
