import{_ as f,d as M,o as V,w as o,a as e,b as s,a2 as m,a7 as d,a8 as _,j as a,m as B,r as P,f as S,c as w,F as D,h as k,t as C}from"./index-BGIMdqyN.js";import{V as u,a as h}from"./VList-BdNXyVV_.js";import{V as $}from"./VTooltip-Dan-XaZs.js";import{V as c}from"./VMenu-DJ9pZS3t.js";import{a as A}from"./avatar-1-DJJIeD8a.js";import{V as j,c as I}from"./VCard-CF2BClSY.js";import{V as E}from"./VDivider-B1B4kDZB.js";import{V as H}from"./VCardText-DfrFZhA0.js";import{_ as F}from"./AppCardCode-C-zO1RUn.js";import{V as G,a as b}from"./VRow-BFNCnCWI.js";import"./ssrBoot-DUtO1XoE.js";import"./VImg-nOKaZD-s.js";import"./VAvatar-CYJWVBhL.js";import"./VOverlay-qz3yYbIb.js";import"./easing-Bybner-F.js";import"./lazy-CKhx2O3m.js";import"./scopeId-DfGkhZ3B.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Cz0UmEa5.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";/* empty css              */const J={__name:"DemoMenuActivatorAndTooltip",setup(l,{expose:t}){t();const n={items:[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}],mergeProps:B};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function N(l,t,r,n,v,O){return V(),M(c,{location:"top"},{activator:o(({props:i})=>[e($,{location:"top"},{activator:o(({props:p})=>[e(m,d(_(n.mergeProps(i,p))),{default:o(()=>t[0]||(t[0]=[a(" Dropdown w/ Tooltip ")])),_:2,__:[0]},1040)]),default:o(()=>[t[1]||(t[1]=s("span",null,"I am a Tooltip",-1))]),_:2,__:[1]},1024)]),default:o(()=>[e(u,{items:n.items})]),_:1})}const R=f(J,[["render",N],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/menu/DemoMenuActivatorAndTooltip.vue"]]),X={__name:"DemoMenuPopover",setup(l,{expose:t}){t();const n={menu:S(!1),get avatar1(){return A}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function Y(l,t,r,n,v,O){const i=P("IconBtn");return V(),M(c,{modelValue:n.menu,"onUpdate:modelValue":t[0]||(t[0]=p=>n.menu=p),location:"top"},{activator:o(({props:p})=>[e(m,d(_(p)),{default:o(()=>t[1]||(t[1]=[a(" Menu as Popover ")])),_:2,__:[1]},1040)]),default:o(()=>[e(j,{"max-width":"300"},{default:o(()=>[e(u,null,{default:o(()=>[e(h,{"prepend-avatar":n.avatar1,title:"John Leider",subtitle:"Founder of Vuetify",class:"mx-0"},null,8,["prepend-avatar"])]),_:1}),e(E),e(H,null,{default:o(()=>t[2]||(t[2]=[a(" Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake. Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee. ")])),_:1,__:[2]}),e(I,null,{default:o(()=>[e(i,{icon:"tabler-heart"}),e(i,{icon:"tabler-bookmark"}),e(i,{icon:"tabler-thumb-down"})]),_:1})]),_:1})]),_:1},8,["modelValue"])}const U=f(X,[["render",Y],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/menu/DemoMenuPopover.vue"]]),z={__name:"DemoMenuOpenOnHover",setup(l,{expose:t}){t();const n={items:[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}]};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function W(l,t,r,n,v,O){return V(),M(c,{"open-on-hover":""},{activator:o(({props:i})=>[e(m,d(_(i)),{default:o(()=>t[0]||(t[0]=[a(" On hover ")])),_:2,__:[0]},1040)]),default:o(()=>[e(u,{items:n.items})]),_:1})}const q=f(z,[["render",W],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/menu/DemoMenuOpenOnHover.vue"]]),K={__name:"DemoMenuLocation",setup(l,{expose:t}){t();const n={items:[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}]};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},Q={class:"demo-space-x"};function Z(l,t,r,n,v,O){return V(),w("div",Q,[e(c,{location:"top"},{activator:o(({props:i})=>[e(m,d(_(i)),{default:o(()=>t[0]||(t[0]=[a(" Top ")])),_:2,__:[0]},1040)]),default:o(()=>[e(u,{items:n.items})]),_:1}),e(c,{location:"bottom"},{activator:o(({props:i})=>[e(m,d(_(i)),{default:o(()=>t[1]||(t[1]=[a(" Bottom ")])),_:2,__:[1]},1040)]),default:o(()=>[e(u,{items:n.items})]),_:1}),e(c,{location:"start"},{activator:o(({props:i})=>[e(m,d(_(i)),{default:o(()=>t[2]||(t[2]=[a(" Start ")])),_:2,__:[2]},1040)]),default:o(()=>[e(u,{items:n.items})]),_:1}),e(c,{location:"end"},{activator:o(({props:i})=>[e(m,d(_(i)),{default:o(()=>t[3]||(t[3]=[a(" End ")])),_:2,__:[3]},1040)]),default:o(()=>[e(u,{items:n.items})]),_:1})])}const tt=f(K,[["render",Z],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/menu/DemoMenuLocation.vue"]]),et={__name:"DemoMenuCustomTransitions",setup(l,{expose:t}){t();const n={items:[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}]};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},ot={class:"demo-space-x"};function nt(l,t,r,n,v,O){return V(),w("div",ot,[e(c,{transition:"scale-transition"},{activator:o(({props:i})=>[e(m,d(_(i)),{default:o(()=>t[0]||(t[0]=[a(" Scale Transition ")])),_:2,__:[0]},1040)]),default:o(()=>[e(u,{items:n.items})]),_:1}),e(c,{transition:"slide-x-transition"},{activator:o(({props:i})=>[e(m,d(_(i)),{default:o(()=>t[1]||(t[1]=[a(" Slide X Transition ")])),_:2,__:[1]},1040)]),default:o(()=>[e(u,{items:n.items})]),_:1}),e(c,{transition:"slide-y-transition"},{activator:o(({props:i})=>[e(m,d(_(i)),{default:o(()=>t[2]||(t[2]=[a(" Slide Y Transition ")])),_:2,__:[2]},1040)]),default:o(()=>[e(u,{items:n.items})]),_:1})])}const it=f(et,[["render",nt],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/menu/DemoMenuCustomTransitions.vue"]]),at={__name:"DemoMenuBasic",setup(l,{expose:t}){t();const v={menusVariant:["primary","secondary","success","info","warning","error"],items:[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}]};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}},st={class:"demo-space-x"};function rt(l,t,r,n,v,O){return V(),w("div",st,[(V(),w(D,null,k(n.menusVariant,i=>e(c,{key:i},{activator:o(({props:p})=>[e(m,B({color:i,ref_for:!0},p),{default:o(()=>[a(C(i),1)]),_:2},1040,["color"])]),default:o(()=>[e(u,{items:n.items})]),_:2},1024)),64))])}const pt=f(at,[["render",rt],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/menu/DemoMenuBasic.vue"]]),lt={ts:`<script lang="ts" setup>
import { mergeProps } from 'vue'

const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
import { mergeProps } from 'vue'

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},mt={ts:`<script lang="ts" setup>
const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const menusVariant = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},ut={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},ct={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},dt={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},_t={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
          class="mx-0"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <IconBtn icon="tabler-heart" />
        <IconBtn icon="tabler-bookmark" />
        <IconBtn icon="tabler-thumb-down" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
          class="mx-0"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <IconBtn icon="tabler-heart" />
        <IconBtn icon="tabler-bookmark" />
        <IconBtn icon="tabler-thumb-down" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`},vt={__name:"menu",setup(l,{expose:t}){t();const r={get activatorAndTooltip(){return lt},get basic(){return mt},get customTransitions(){return ut},get location(){return ct},get openOnHover(){return dt},get popover(){return _t}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function Vt(l,t,r,n,v,O){const i=pt,p=F,g=it,x=tt,T=q,L=U,y=R;return V(),M(G,{class:"match-height"},{default:o(()=>[e(b,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Basic",code:n.basic},{default:o(()=>[t[0]||(t[0]=s("p",null," Remember to put the element that activates the menu in the activator slot. ",-1)),e(i)]),_:1,__:[0]},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Custom transitions",code:n.customTransitions},{default:o(()=>[t[1]||(t[1]=s("p",null,[a("Vuetify comes with 3 standard transitions, "),s("code",null,"scale"),a(", "),s("code",null,"slide-x"),a(" and "),s("code",null,"slide-y"),a(". Use "),s("code",null,"transition"),a(" prop to add transition to a menu.")],-1)),e(g)]),_:1,__:[1]},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Location",code:n.location},{default:o(()=>[t[2]||(t[2]=s("p",null,[a("Menu can be offset relative to the activator by using the "),s("code",null,"location"),a(" prop.")],-1)),e(x)]),_:1,__:[2]},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Open on hover",code:n.openOnHover},{default:o(()=>[t[3]||(t[3]=s("p",null,[a("Menus can be accessed using hover instead of clicking with the "),s("code",null,"open-on-hover"),a(" prop.")],-1)),e(T)]),_:1,__:[3]},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Popover",code:n.popover},{default:o(()=>[t[4]||(t[4]=s("p",null,"A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.",-1)),e(L)]),_:1,__:[4]},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Activator and tooltip",code:n.activatorAndTooltip},{default:o(()=>[t[5]||(t[5]=s("p",null,[a("With the new "),s("code",null,"v-slot"),a(" syntax, nested activators such as those seen with a "),s("code",null,"v-menu"),a(" and "),s("code",null,"v-tooltip"),a(" attached to the same activator button, need a particular setup in order to function correctly")],-1)),e(y)]),_:1,__:[5]},8,["code"])]),_:1})]),_:1})}const Et=f(vt,[["render",Vt],["__file","E:/wamp64/www/sales/frontend/src/pages/components/menu.vue"]]);export{Et as default};
