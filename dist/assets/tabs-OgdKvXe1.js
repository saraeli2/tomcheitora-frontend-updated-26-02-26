import{_ as g,c as m,o as u,b as s,a as t,w as a,j as r,Y as W,f as I,F as p,h as w,t as v,d as V,a2 as S,g as N}from"./index-BGIMdqyN.js";import{V as i,a as _}from"./VTabs-DDU38cHN.js";import{V as C}from"./VCardText-DfrFZhA0.js";import{a as y,V as f}from"./VWindowItem-CCqLyGax.js";import{V as k}from"./VCard-CF2BClSY.js";import{_ as U}from"./AppCardCode-C-zO1RUn.js";import{V as $,a as x}from"./VRow-BFNCnCWI.js";import"./forwardRefs-C-GTDzx5.js";import"./easing-Bybner-F.js";import"./VSlideGroup-C-0uVn6B.js";import"./scopeId-DfGkhZ3B.js";import"./lazy-CKhx2O3m.js";import"./ssrBoot-DUtO1XoE.js";import"./VImg-nOKaZD-s.js";import"./VAvatar-CYJWVBhL.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VDivider-B1B4kDZB.js";/* empty css              */const M={__name:"DemoTabsVerticalPill",setup(c,{expose:e}){e();const n={currentTab:I("window-1")};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},G={class:"d-flex gap-6"};function H(c,e,l,n,d,T){return u(),m("div",G,[s("div",null,[t(_,{modelValue:n.currentTab,"onUpdate:modelValue":e[0]||(e[0]=o=>n.currentTab=o),direction:"vertical",class:"v-tabs-pill"},{default:a(()=>[t(i,null,{default:a(()=>[t(W,{start:"",icon:"tabler-user"}),e[2]||(e[2]=r(" Option 1 "))]),_:1,__:[2]}),t(i,null,{default:a(()=>[t(W,{start:"",icon:"tabler-lock"}),e[3]||(e[3]=r(" Option 2 "))]),_:1,__:[3]}),t(i,null,{default:a(()=>[t(W,{start:"",icon:"tabler-access-point"}),e[4]||(e[4]=r(" Option 3 "))]),_:1,__:[4]})]),_:1},8,["modelValue"])]),t(k,null,{default:a(()=>[t(C,null,{default:a(()=>[t(y,{modelValue:n.currentTab,"onUpdate:modelValue":e[1]||(e[1]=o=>n.currentTab=o)},{default:a(()=>[t(f,{value:"window-1"},{default:a(()=>e[5]||(e[5]=[s("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),s("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et. ",-1)])),_:1,__:[5]}),t(f,{value:"window-2"},{default:a(()=>e[6]||(e[6]=[s("p",{class:"mb-0"}," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1)])),_:1,__:[6]}),t(f,{value:"window-3"},{default:a(()=>e[7]||(e[7]=[s("p",{class:"mb-0"}," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1)])),_:1,__:[7]})]),_:1},8,["modelValue"])]),_:1})]),_:1})])}const R=g(M,[["render",H],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tabs/DemoTabsVerticalPill.vue"]]),L="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",Y={__name:"DemoTabsBasicPill",setup(c,{expose:e}){e();const n={currentTab:I("window1"),tabItemContent:L};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function J(c,e,l,n,d,T){return u(),m(p,null,[t(_,{modelValue:n.currentTab,"onUpdate:modelValue":e[0]||(e[0]=o=>n.currentTab=o),class:"v-tabs-pill"},{default:a(()=>[t(i,null,{default:a(()=>e[2]||(e[2]=[r("Tab One")])),_:1,__:[2]}),t(i,null,{default:a(()=>e[3]||(e[3]=[r("Tab Two")])),_:1,__:[3]}),t(i,null,{default:a(()=>e[4]||(e[4]=[r("Tab Three")])),_:1,__:[4]})]),_:1},8,["modelValue"]),t(k,{class:"mt-5"},{default:a(()=>[t(C,null,{default:a(()=>[t(y,{modelValue:n.currentTab,"onUpdate:modelValue":e[1]||(e[1]=o=>n.currentTab=o)},{default:a(()=>[(u(),m(p,null,w(3,o=>t(f,{key:`window${o}`},{default:a(()=>[r(v(n.tabItemContent))]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)}const K=g(Y,[["render",J],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tabs/DemoTabsBasicPill.vue"]]),Q={__name:"DemoTabsDynamic",setup(c,{expose:e}){e();const l=I(3),n=I(0);N(l,T=>{n.value=T-1});const d={totalTabs:l,currentTab:n};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function X(c,e,l,n,d,T){return u(),V(k,null,{default:a(()=>[t(_,{modelValue:n.currentTab,"onUpdate:modelValue":e[0]||(e[0]=o=>n.currentTab=o)},{default:a(()=>[(u(!0),m(p,null,w(n.totalTabs,o=>(u(),V(i,{key:o,value:o},{default:a(()=>[r(" Tab "+v(o),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),t(C,{class:"text-center d-flex items-center gap-y-2 flex-wrap"},{default:a(()=>[t(S,{disabled:!n.totalTabs,class:"me-4",variant:n.totalTabs?void 0:"tonal",onClick:e[1]||(e[1]=o=>n.totalTabs--)},{default:a(()=>e[3]||(e[3]=[r(" Remove Tab ")])),_:1,__:[3]},8,["disabled","variant"]),t(S,{onClick:e[2]||(e[2]=o=>n.totalTabs++)},{default:a(()=>e[4]||(e[4]=[r(" Add Tab ")])),_:1,__:[4]})]),_:1})]),_:1})}const Z=g(Q,[["render",X],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tabs/DemoTabsDynamic.vue"]]),ee="Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.",te={__name:"DemoTabsProgrammaticNavigation",setup(c,{expose:e}){e();const l=I(1),n=["Appetizers","Entrees","Deserts","Cocktails"],d=n.length,b={currentTab:l,items:n,tabItemText:ee,totalTabs:d,preTab:()=>{l.value!==1&&(l.value-=1)},nextTab:()=>{l.value!==d&&(l.value+=1)}};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}},ae={class:"d-flex justify-center gap-4 mt-3"};function ne(c,e,l,n,d,T){return u(),V(k,null,{default:a(()=>[t(_,{modelValue:n.currentTab,"onUpdate:modelValue":e[0]||(e[0]=o=>n.currentTab=o),grow:""},{default:a(()=>[(u(!0),m(p,null,w(n.items.length,o=>(u(),V(i,{key:o,value:o},{default:a(()=>[r(v(n.items[o-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),t(C,null,{default:a(()=>[t(y,{modelValue:n.currentTab,"onUpdate:modelValue":e[1]||(e[1]=o=>n.currentTab=o)},{default:a(()=>[(u(!0),m(p,null,w(n.items.length,o=>(u(),V(f,{key:o,value:o},{default:a(()=>[r(v(n.tabItemText))]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),s("div",ae,[t(S,{disabled:n.currentTab===1,onClick:n.preTab},{default:a(()=>e[2]||(e[2]=[r(" Previous ")])),_:1,__:[2]},8,["disabled"]),t(S,{disabled:n.currentTab===n.totalTabs,onClick:n.nextTab},{default:a(()=>e[3]||(e[3]=[r(" Next ")])),_:1,__:[3]},8,["disabled"])])]),_:1})]),_:1})}const oe=g(te,[["render",ne],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tabs/DemoTabsProgrammaticNavigation.vue"]]),re="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.",se={__name:"DemoTabsGrow",setup(c,{expose:e}){e();const d={currentTab:I("Appetizers"),items:["Appetizers","Entrees","Deserts","Cocktails"],tabItemText:re};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function le(c,e,l,n,d,T){return u(),V(k,null,{default:a(()=>[t(_,{modelValue:n.currentTab,"onUpdate:modelValue":e[0]||(e[0]=o=>n.currentTab=o),grow:""},{default:a(()=>[(u(),m(p,null,w(n.items,o=>t(i,{key:o},{default:a(()=>[r(v(o),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),t(C,null,{default:a(()=>[t(y,{modelValue:n.currentTab,"onUpdate:modelValue":e[1]||(e[1]=o=>n.currentTab=o)},{default:a(()=>[(u(),m(p,null,w(n.items,o=>t(f,{key:o,value:o},{default:a(()=>[r(v(n.tabItemText))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}const ie=g(se,[["render",le],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tabs/DemoTabsGrow.vue"]]),ue="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.",ce={__name:"DemoTabsFixed",setup(c,{expose:e}){e();const d={currentTab:I("Appetizers"),items:["Fixed Tab 1","Fixed Tab 2","Fixed Tab 3","Fixed Tab 4"],tabItemText:ue};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function de(c,e,l,n,d,T){return u(),V(k,null,{default:a(()=>[t(_,{modelValue:n.currentTab,"onUpdate:modelValue":e[0]||(e[0]=o=>n.currentTab=o),"fixed-tabs":""},{default:a(()=>[(u(),m(p,null,w(n.items,o=>t(i,{key:o,value:o},{default:a(()=>[r(v(o),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),t(C,null,{default:a(()=>[t(y,{modelValue:n.currentTab,"onUpdate:modelValue":e[1]||(e[1]=o=>n.currentTab=o)},{default:a(()=>[(u(),m(p,null,w(n.items,o=>t(f,{key:o,value:o},{default:a(()=>[r(v(n.tabItemText))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}const me=g(ce,[["render",de],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tabs/DemoTabsFixed.vue"]]),be="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.",pe={__name:"DemoTabsCustomIcons",setup(c,{expose:e}){e();const n={currentTab:I(0),tabItemText:be};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function Te(c,e,l,n,d,T){return u(),V(k,null,{default:a(()=>[t(_,{"next-icon":"tabler-arrow-right","prev-icon":"tabler-arrow-left"},{default:a(()=>[(u(),m(p,null,w(10,o=>t(i,{key:o},{default:a(()=>[r(" Item "+v(o),1)]),_:2},1024)),64))]),_:1}),t(C,null,{default:a(()=>[t(y,{modelValue:n.currentTab,"onUpdate:modelValue":e[0]||(e[0]=o=>n.currentTab=o)},{default:a(()=>[(u(),m(p,null,w(10,o=>t(f,{key:o,value:o},{default:a(()=>[r(v(n.tabItemText))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}const Ve=g(pe,[["render",Te],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tabs/DemoTabsCustomIcons.vue"]]),_e="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.",fe={__name:"DemoTabsPagination",setup(c,{expose:e}){e();const n={currentTab:I("item1"),tabItemText:_e};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function we(c,e,l,n,d,T){return u(),V(k,null,{default:a(()=>[t(_,{modelValue:n.currentTab,"onUpdate:modelValue":e[0]||(e[0]=o=>n.currentTab=o)},{default:a(()=>[(u(),m(p,null,w(10,o=>t(i,{key:o},{default:a(()=>[r(" Item "+v(o),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),t(C,null,{default:a(()=>[t(y,{modelValue:n.currentTab,"onUpdate:modelValue":e[1]||(e[1]=o=>n.currentTab=o)},{default:a(()=>[(u(),m(p,null,w(10,o=>t(f,{key:o,value:`item${o}`},{default:a(()=>[r(v(n.tabItemText))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}const ve=g(fe,[["render",we],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tabs/DemoTabsPagination.vue"]]),ge={};function xe(c,e){return u(),V(k,null,{default:a(()=>[t(C,{class:"d-flex flex-column gap-4"},{default:a(()=>[s("div",null,[t(_,null,{default:a(()=>[t(i,null,{default:a(()=>e[0]||(e[0]=[r("Home")])),_:1,__:[0]}),t(i,null,{default:a(()=>e[1]||(e[1]=[r("Service")])),_:1,__:[1]}),t(i,null,{default:a(()=>e[2]||(e[2]=[r("Account")])),_:1,__:[2]})]),_:1})]),s("div",null,[t(_,{"align-tabs":"center"},{default:a(()=>[t(i,null,{default:a(()=>e[3]||(e[3]=[r("Home")])),_:1,__:[3]}),t(i,null,{default:a(()=>e[4]||(e[4]=[r("Service")])),_:1,__:[4]}),t(i,null,{default:a(()=>e[5]||(e[5]=[r("Account")])),_:1,__:[5]})]),_:1})]),s("div",null,[t(_,{"align-tabs":"end"},{default:a(()=>[t(i,null,{default:a(()=>e[6]||(e[6]=[r("Home")])),_:1,__:[6]}),t(i,null,{default:a(()=>e[7]||(e[7]=[r("Service")])),_:1,__:[7]}),t(i,null,{default:a(()=>e[8]||(e[8]=[r("Account")])),_:1,__:[8]})]),_:1})])]),_:1})]),_:1})}const Ie=g(ge,[["render",xe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tabs/DemoTabsAlignment.vue"]]),Ce={__name:"DemoTabsVertical",setup(c,{expose:e}){e();const n={currentTab:I("tab-1")};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},ke={class:"d-flex"};function ye(c,e,l,n,d,T){return u(),V(k,null,{default:a(()=>[s("div",ke,[s("div",null,[t(_,{modelValue:n.currentTab,"onUpdate:modelValue":e[0]||(e[0]=o=>n.currentTab=o),direction:"vertical"},{default:a(()=>[t(i,null,{default:a(()=>[t(W,{start:"",icon:"tabler-user"}),e[2]||(e[2]=r(" Option 1 "))]),_:1,__:[2]}),t(i,null,{default:a(()=>[t(W,{start:"",icon:"tabler-lock"}),e[3]||(e[3]=r(" Option 2 "))]),_:1,__:[3]}),t(i,null,{default:a(()=>[t(W,{start:"",icon:"tabler-access-point"}),e[4]||(e[4]=r(" Option 3 "))]),_:1,__:[4]})]),_:1},8,["modelValue"])]),t(C,null,{default:a(()=>[t(y,{modelValue:n.currentTab,"onUpdate:modelValue":e[1]||(e[1]=o=>n.currentTab=o),class:"ms-3"},{default:a(()=>[t(f,{value:"tab-1"},{default:a(()=>e[5]||(e[5]=[s("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),s("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget. ",-1)])),_:1,__:[5]}),t(f,{value:"tab-2"},{default:a(()=>e[6]||(e[6]=[s("p",{class:"mb-0"}," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero. ",-1)])),_:1,__:[6]}),t(f,{value:"tab-3"},{default:a(()=>e[7]||(e[7]=[s("p",{class:"mb-0"}," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper. ",-1)])),_:1,__:[7]})]),_:1},8,["modelValue"])]),_:1})])]),_:1})}const We=g(Ce,[["render",ye],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tabs/DemoTabsVertical.vue"]]),Se="Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.",Pe={__name:"DemoTabsStacked",setup(c,{expose:e}){e();const n={currentTab:I("tab-1"),tabItemText:Se};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function qe(c,e,l,n,d,T){return u(),V(k,null,{default:a(()=>[t(_,{modelValue:n.currentTab,"onUpdate:modelValue":e[0]||(e[0]=o=>n.currentTab=o),grow:"",stacked:""},{default:a(()=>[t(i,null,{default:a(()=>[t(W,{icon:"tabler-phone",class:"mb-2"}),e[2]||(e[2]=s("span",null,"Recent",-1))]),_:1,__:[2]}),t(i,null,{default:a(()=>[t(W,{icon:"tabler-heart",class:"mb-2"}),e[3]||(e[3]=s("span",null,"Favorites",-1))]),_:1,__:[3]}),t(i,null,{default:a(()=>[t(W,{icon:"tabler-user",class:"mb-2"}),e[4]||(e[4]=s("span",null,"Nearby",-1))]),_:1,__:[4]})]),_:1},8,["modelValue"]),t(C,null,{default:a(()=>[t(y,{modelValue:n.currentTab,"onUpdate:modelValue":e[1]||(e[1]=o=>n.currentTab=o)},{default:a(()=>[(u(),m(p,null,w(3,o=>t(f,{key:o,value:`tab-${o}`},{default:a(()=>[r(v(n.tabItemText))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}const De=g(Pe,[["render",qe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tabs/DemoTabsStacked.vue"]]),he="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",je={__name:"DemoTabsBasic",setup(c,{expose:e}){e();const n={currentTab:I("item-1"),tabItemContent:he};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function Fe(c,e,l,n,d,T){return u(),V(k,null,{default:a(()=>[t(_,{modelValue:n.currentTab,"onUpdate:modelValue":e[0]||(e[0]=o=>n.currentTab=o)},{default:a(()=>[t(i,null,{default:a(()=>e[2]||(e[2]=[r("Tab One")])),_:1,__:[2]}),t(i,null,{default:a(()=>e[3]||(e[3]=[r("Tab Two")])),_:1,__:[3]}),t(i,null,{default:a(()=>e[4]||(e[4]=[r("Tab Three")])),_:1,__:[4]})]),_:1},8,["modelValue"]),t(C,null,{default:a(()=>[t(y,{modelValue:n.currentTab,"onUpdate:modelValue":e[1]||(e[1]=o=>n.currentTab=o)},{default:a(()=>[(u(),m(p,null,w(3,o=>t(f,{key:o,value:`item-${o}`},{default:a(()=>[r(v(n.tabItemContent))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}const Oe=g(je,[["render",Fe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/tabs/DemoTabsBasic.vue"]]),Be={ts:`<template>
  <VCard>
    <VCardText class="d-flex flex-column gap-4">
      <!-- Default -->
      <div>
        <VTabs>
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- Center -->
      <div>
        <VTabs align-tabs="center">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- End -->
      <div>
        <VTabs align-tabs="end">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>
    </VCardText>
  </VCard>
</template>
`,js:`<template>
  <VCard>
    <VCardText class="d-flex flex-column gap-4">
      <!-- Default -->
      <div>
        <VTabs>
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- Center -->
      <div>
        <VTabs align-tabs="center">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- End -->
      <div>
        <VTabs align-tabs="end">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>
    </VCardText>
  </VCard>
</template>
`},Ae={ts:`<script lang="ts" setup>
const currentTab = ref('item-1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab>Tab One</VTab>
      <VTab>Tab Two</VTab>
      <VTab>Tab Three</VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
          :value="\`item-\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('item-1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab>Tab One</VTab>
      <VTab>Tab Two</VTab>
      <VTab>Tab Three</VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
          :value="\`item-\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Ee={ts:`<script lang="ts" setup>
const currentTab = ref('window1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="\`window\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('window1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="\`window\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},ze={ts:`<script setup lang="ts">
const currentTab = ref(0)
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs
      next-icon="tabler-arrow-right"
      prev-icon="tabler-arrow-left"
    >
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs
      next-icon="tabler-arrow-right"
      prev-icon="tabler-arrow-left"
    >
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Ne={ts:`<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="n in totalTabs"
        :key="n"
        :value="n"
      >
        Tab {{ n }}
      </VTab>
    </VTabs>

    <!-- buttons -->
    <VCardText class="text-center d-flex items-center gap-y-2 flex-wrap">
      <VBtn
        :disabled="!totalTabs"
        class="me-4"
        :variant="!totalTabs ? 'tonal' : undefined"
        @click="totalTabs--"
      >
        Remove Tab
      </VBtn>

      <VBtn @click="totalTabs++">
        Add Tab
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="n in totalTabs"
        :key="n"
        :value="n"
      >
        Tab {{ n }}
      </VTab>
    </VTabs>

    <!-- buttons -->
    <VCardText class="text-center d-flex items-center gap-y-2 flex-wrap">
      <VBtn
        :disabled="!totalTabs"
        class="me-4"
        :variant="!totalTabs ? 'tonal' : undefined"
        @click="totalTabs--"
      >
        Remove Tab
      </VBtn>

      <VBtn @click="totalTabs++">
        Add Tab
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},Ue={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Fixed Tab 1', 'Fixed Tab 2', 'Fixed Tab 3', 'Fixed Tab 4']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      fixed-tabs
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Fixed Tab 1',
  'Fixed Tab 2',
  'Fixed Tab 3',
  'Fixed Tab 4',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      fixed-tabs
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},$e={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Me={ts:`<script setup lang="ts">
const currentTab = ref('item1')
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="\`item\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('item1')
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="\`item\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Ge={ts:`<script lang="ts" setup>
const currentTab = ref(1)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items.length"
        :key="item"
        :value="item"
      >
        {{ items[item - 1] }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items.length"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>

      <div class="d-flex justify-center gap-4 mt-3">
        <VBtn
          :disabled="currentTab === 1"
          @click="preTab"
        >
          Previous
        </VBtn>

        <VBtn
          :disabled="currentTab === totalTabs"
          @click="nextTab"
        >
          Next
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(1)

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items.length"
        :key="item"
        :value="item"
      >
        {{ items[item - 1] }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items.length"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>

      <div class="d-flex justify-center gap-4 mt-3">
        <VBtn
          :disabled="currentTab === 1"
          @click="preTab"
        >
          Previous
        </VBtn>

        <VBtn
          :disabled="currentTab === totalTabs"
          @click="nextTab"
        >
          Next
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
`},He={ts:`<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
      stacked
    >
      <VTab>
        <VIcon
          icon="tabler-phone"
          class="mb-2"
        />
        <span>Recent</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-heart"
          class="mb-2"
        />
        <span>Favorites</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-user"
          class="mb-2"
        />
        <span>Nearby</span>
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 3"
          :key="i"
          :value="\`tab-\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
      stacked
    >
      <VTab>
        <VIcon
          icon="tabler-phone"
          class="mb-2"
        />
        <span>Recent</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-heart"
          class="mb-2"
        />
        <span>Favorites</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-user"
          class="mb-2"
        />
        <span>Nearby</span>
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 3"
          :key="i"
          :value="\`tab-\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Re={ts:`<script setup lang="ts">
const currentTab = ref('tab-1')
<\/script>

<template>
  <VCard>
    <div class="d-flex">
      <div>
        <VTabs
          v-model="currentTab"
          direction="vertical"
        >
          <VTab>
            <VIcon
              start
              icon="tabler-user"
            />
            Option 1
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-lock"
            />
            Option 2
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-access-point"
            />
            Option 3
          </VTab>
        </VTabs>
      </div>

      <VCardText>
        <VWindow
          v-model="currentTab"
          class="ms-3"
        >
          <VWindowItem value="tab-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </div>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
<\/script>

<template>
  <VCard>
    <div class="d-flex">
      <div>
        <VTabs
          v-model="currentTab"
          direction="vertical"
        >
          <VTab>
            <VIcon
              start
              icon="tabler-user"
            />
            Option 1
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-lock"
            />
            Option 2
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-access-point"
            />
            Option 3
          </VTab>
        </VTabs>
      </div>

      <VCardText>
        <VWindow
          v-model="currentTab"
          class="ms-3"
        >
          <VWindowItem value="tab-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </div>
  </VCard>
</template>
`},Le={ts:`<script setup lang="ts">
const currentTab = ref('window-1')
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="tabler-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-access-point"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VCard>
      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem value="window-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et.
            </p>
          </VWindowItem>

          <VWindowItem value="window-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>
          </VWindowItem>

          <VWindowItem value="window-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref('window-1')
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="tabler-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-access-point"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VCard>
      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem value="window-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et.
            </p>
          </VWindowItem>

          <VWindowItem value="window-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>
          </VWindowItem>

          <VWindowItem value="window-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </div>
</template>
`},Ye={__name:"tabs",setup(c,{expose:e}){e();const l={get alignment(){return Be},get basic(){return Ae},get basicPill(){return Ee},get customIcons(){return ze},get dynamic(){return Ne},get fixed(){return Ue},get grow(){return $e},get pagination(){return Me},get programmaticNavigation(){return Ge},get stacked(){return He},get vertical(){return Re},get verticalPill(){return Le}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function Je(c,e,l,n,d,T){const o=Oe,b=U,P=De,q=We,D=Ie,h=ve,j=Ve,F=me,O=ie,B=oe,A=Z,E=K,z=R;return u(),V($,{class:"match-height"},{default:a(()=>[t(x,{cols:"12",md:"6"},{default:a(()=>[t(b,{title:"Basic",variant:"outlined",code:n.basic},{default:a(()=>[e[0]||(e[0]=s("p",null,[r("The "),s("code",null,"v-tabs"),r(" component is used for hiding content behind a selectable item.")],-1)),t(o)]),_:1,__:[0]},8,["code"])]),_:1}),t(x,{cols:"12",md:"6"},{default:a(()=>[t(b,{title:"Stacked",variant:"outlined",code:n.stacked},{default:a(()=>[e[1]||(e[1]=s("p",null,[r("Using "),s("code",null,"stacked"),r(" prop you can have buttons that use both icons and text.")],-1)),t(P)]),_:1,__:[1]},8,["code"])]),_:1}),t(x,{cols:"12",md:"6"},{default:a(()=>[t(b,{title:"Vertical",variant:"outlined",code:n.vertical},{default:a(()=>[e[2]||(e[2]=s("p",null,[r("The "),s("code",null,"vertical"),r(" prop allows for "),s("code",null,"v-tab"),r(" components to stack vertically.")],-1)),t(q)]),_:1,__:[2]},8,["code"])]),_:1}),t(x,{cols:"12",md:"6"},{default:a(()=>[t(b,{title:"Alignment",variant:"outlined",code:n.alignment},{default:a(()=>[e[3]||(e[3]=s("p",null,[r("Use "),s("code",null,"align-tabs"),r(" prop to change the tabs alignment.")],-1)),t(D)]),_:1,__:[3]},8,["code"])]),_:1}),t(x,{cols:"12",md:"6"},{default:a(()=>[t(b,{title:"Pagination",variant:"outlined",code:n.pagination},{default:a(()=>[e[4]||(e[4]=s("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1)),t(h)]),_:1,__:[4]},8,["code"])]),_:1}),t(x,{cols:"12",md:"6"},{default:a(()=>[t(b,{title:"Custom Icons",variant:"outlined",code:n.customIcons},{default:a(()=>[e[5]||(e[5]=s("p",null,[s("code",null,"prev-icon"),r(" and "),s("code",null,"next-icon"),r(" props can be used for applying custom pagination icons.")],-1)),t(j)]),_:1,__:[5]},8,["code"])]),_:1}),t(x,{cols:"12",md:"6"},{default:a(()=>[t(b,{title:"Fixed",variant:"outlined",code:n.fixed},{default:a(()=>[e[6]||(e[6]=s("p",null,[r("The "),s("code",null,"fixed-tabs"),r(" prop forces "),s("code",null,"v-tab"),r(" to take up all available space up to the maximum width (300px).")],-1)),t(F)]),_:1,__:[6]},8,["code"])]),_:1}),t(x,{cols:"12",md:"6"},{default:a(()=>[t(b,{title:"Grow",variant:"outlined",code:n.grow},{default:a(()=>[e[7]||(e[7]=s("p",null,[r("The "),s("code",null,"grow"),r(" prop will make the tab items take up all available space with no limit.")],-1)),t(O)]),_:1,__:[7]},8,["code"])]),_:1}),t(x,{cols:"12",md:"6"},{default:a(()=>[t(b,{title:"Programmatic Navigation",variant:"outlined",code:n.programmaticNavigation},{default:a(()=>[t(B)]),_:1},8,["code"])]),_:1}),t(x,{cols:"12",md:"6"},{default:a(()=>[t(b,{title:"Dynamic",variant:"outlined",code:n.dynamic},{default:a(()=>[e[8]||(e[8]=s("p",null,[r("Tabs can be dynamically added and removed. This allows you to update to any number and the "),s("code",null,"v-tabs"),r(" component will react.")],-1)),t(A)]),_:1,__:[8]},8,["code"])]),_:1}),t(x,{cols:"12",md:"6"},{default:a(()=>[t(b,{title:"Basic Pill",variant:"outlined",code:n.basicPill},{default:a(()=>[e[9]||(e[9]=s("p",null,[r("Use our custom class "),s("code",null,".v-tabs-pill"),r(" along with "),s("code",null,"v-tabs"),r(" component to style pill tabs.")],-1)),t(E)]),_:1,__:[9]},8,["code"])]),_:1}),t(x,{cols:"12",md:"6"},{default:a(()=>[t(b,{title:"Vertical Pill",variant:"outlined",code:n.verticalPill},{default:a(()=>[e[10]||(e[10]=s("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1)),t(z)]),_:1,__:[10]},8,["code"])]),_:1})]),_:1})}const pt=g(Ye,[["render",Je],["__file","E:/wamp64/www/sales/frontend/src/pages/components/tabs.vue"]]);export{pt as default};
