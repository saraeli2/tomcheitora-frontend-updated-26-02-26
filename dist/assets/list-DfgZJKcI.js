import{_ as g,d as v,o as l,w as t,c as V,F as L,h,a as e,t as I,Y as x,i as U,j as r,ah as Q,b as d,a2 as J,m as T,f as Y}from"./index-BGIMdqyN.js";import{a as c,b as y,V as _,d as S,c as O,e as B}from"./VList-BdNXyVV_.js";import{V as A}from"./VAvatar-CYJWVBhL.js";import{V as G}from"./VDivider-B1B4kDZB.js";import{a as k}from"./avatar-1-DJJIeD8a.js";import{a as C}from"./avatar-2-1LL-7nu5.js";import{a as D}from"./avatar-3-CtWENZpf.js";import{a as j}from"./avatar-4-C1cD5bAZ.js";import{V as q}from"./VBadge-CKundsNG.js";import{V as P}from"./VListItemAction-BfdjXiey.js";import{V as $}from"./VCheckbox-TzXZlS86.js";import{_ as X}from"./AppCardCode-C-zO1RUn.js";import{V as Z,a as f}from"./VRow-BFNCnCWI.js";import{V as m}from"./VCardText-DfrFZhA0.js";import"./ssrBoot-DUtO1XoE.js";import"./VImg-nOKaZD-s.js";import"./VCheckboxBtn-C50DCjx7.js";import"./VSelectionControl-Dyu49DZR.js";import"./form-DbIa-vyG.js";import"./VInput-CH8dtMYl.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";/* empty css              */const ee={__name:"DemoListShaped",setup(o,{expose:a}){a();const s={items:[{text:"Cupcake sesame snaps dessert marzipan.",icon:"tabler-brand-instagram"},{text:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",icon:"tabler-brand-facebook"},{text:"Bonbon macaroon gummies pie jelly",icon:"tabler-brand-twitter"}]};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function te(o,a,n,s,p,b){return l(),v(_,null,{default:t(()=>[(l(),V(L,null,h(s.items,(i,u)=>e(c,{key:u,value:i.text,rounded:"shaped"},{prepend:t(()=>[e(x,{icon:i.icon},null,8,["icon"])]),default:t(()=>[e(y,{textContent:I(i.text)},null,8,["textContent"])]),_:2},1032,["value"])),64))]),_:1})}const ae=g(ee,[["render",te],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/list/DemoListShaped.vue"]]),se={__name:"DemoListProgressList",setup(o,{expose:a}){a();const p={languageProgress:[{avatar:"tabler-brand-react",title:"React is a JavaScript library for building user interfaces",language:"react",amount:90},{avatar:"tabler-brand-bootstrap",title:"Bootstrap is an open source toolkit",language:"bootstrap",amount:80},{avatar:"tabler-brand-vue",title:"Vue.js is the Progressive JavaScript Framework",language:"vue",amount:65},{avatar:"tabler-brand-angular",title:"Angular implements Functional Programming concepts",language:"angular",amount:75},{avatar:"tabler-brand-javascript",title:"JavaScript is the programming language of the Web",language:"javascript",amount:70}],resolveStatusColor:{react:"info",bootstrap:"primary",vue:"success",angular:"error",javascript:"warning"}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function ie(o,a,n,s,p,b){return l(),v(_,{lines:"two",border:""},{default:t(()=>[(l(),V(L,null,h(s.languageProgress,(i,u)=>(l(),V(L,{key:i.language},[e(c,null,{prepend:t(()=>[e(A,{size:"36",rounded:"",variant:"tonal",icon:i.avatar,color:s.resolveStatusColor[i.language]},null,8,["icon","color"])]),default:t(()=>[e(y,null,{default:t(()=>[r(I(i.title),1)]),_:2},1024),e(S,{class:"mt-2"},{default:t(()=>[e(Q,{height:"6",rounded:"","rounded-bar":"","model-value":i.amount,color:s.resolveStatusColor[i.language]},null,8,["model-value","color"])]),_:2},1024)]),_:2},1024),u!==s.languageProgress.length-1?(l(),v(G,{key:0})):U("",!0)],64))),64))]),_:1})}const re=g(se,[["render",ie],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/list/DemoListProgressList.vue"]]),ne={__name:"DemoListUserList",setup(o,{expose:a}){a();const p={users:[{avatar:k,name:"Caroline Black",status:"Online",lastVisited:"13 minutes ago"},{avatar:C,name:"Alfred Copeland",status:"Away",lastVisited:"11 minutes ago"},{avatar:D,name:"Celia Schneider",status:"Offline",lastVisited:"9 minutes ago"},{avatar:j,name:"Max Rogan",status:"In Meeting",lastVisited:"28 minutes ago"}],resolveStatusColor:{Online:"success",Away:"warning",Offline:"secondary","In Meeting":"error"},get avatar1(){return k},get avatar2(){return C},get avatar3(){return D},get avatar4(){return j}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}},le={class:"ms-4"},oe={class:"text-xs text-disabled"};function ue(o,a,n,s,p,b){return l(),v(_,{lines:"two",border:""},{default:t(()=>[(l(),V(L,null,h(s.users,(i,u)=>(l(),V(L,{key:i.name},[e(c,null,{prepend:t(()=>[e(A,{image:i.avatar},null,8,["image"])]),append:t(()=>[e(J,{size:"small"},{default:t(()=>[...a[0]||(a[0]=[r(" Add ")])]),_:1,__:[0]})]),default:t(()=>[e(y,null,{default:t(()=>[r(I(i.name),1)]),_:2},1024),e(S,{class:"mt-1"},{default:t(()=>[e(q,{dot:"",location:"start center","offset-x":"2",color:s.resolveStatusColor[i.status],class:"me-3"},{default:t(()=>[d("span",le,I(i.status),1)]),_:2},1032,["color"]),d("span",oe,I(i.lastVisited),1)]),_:2},1024)]),_:2},1024),u!==s.users.length-1?(l(),v(G,{key:0})):U("",!0)],64))),64))]),_:1})}const pe=g(ne,[["render",ue],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/list/DemoListUserList.vue"]]),me={__name:"DemoListThreeLine",setup(o,{expose:a}){a();const s={items:[{type:"subheader",title:"Today"},{prependAvatar:k,title:"Brunch this weekend?",subtitle:`<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`},{type:"divider",inset:!0},{prependAvatar:C,title:"Summer BBQ",subtitle:`<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`},{type:"divider",inset:!0},{prependAvatar:D,title:"Oui oui",subtitle:'<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'},{type:"divider",inset:!0},{prependAvatar:j,title:"Birthday gift",subtitle:'<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'}],get avatar1(){return k},get avatar2(){return C},get avatar3(){return D},get avatar4(){return j}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},de=["innerHTML"];function ce(o,a,n,s,p,b){return l(),v(_,{lines:"three",items:s.items,"item-props":""},{subtitle:t(({subtitle:i})=>[d("div",{innerHTML:i},null,8,de)]),_:1})}const ve=g(me,[["render",ce],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/list/DemoListThreeLine.vue"]]),be={__name:"DemoListTwoLinesAndSubheader",setup(o,{expose:a}){a();const p={files:[{color:"blue",icon:"tabler-clipboard-text",subtitle:"Jan 20, 2014",title:"Vacation itinerary"},{color:"amber",icon:"tabler-device-mobile-rotated",subtitle:"Jan 10, 2014",title:"Kitchen remodel"}],folders:[{subtitle:"Jan 9, 2014",title:"Photos"},{subtitle:"Jan 17, 2014",title:"Recipes"},{subtitle:"Jan 28, 2014",title:"Work"}]};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function ge(o,a,n,s,p,b){return l(),v(_,{lines:"two"},{default:t(()=>[e(O,{inset:""},{default:t(()=>a[0]||(a[0]=[r(" Folders ")])),_:1,__:[0]}),(l(),V(L,null,h(s.folders,i=>e(c,{key:i.title,title:i.title,subtitle:i.subtitle},{prepend:t(()=>[e(A,{color:"secondary",variant:"tonal"},{default:t(()=>[e(x,{size:22,icon:"tabler-folder"})]),_:1})]),append:t(()=>[e(J,{variant:"text",color:"default",icon:"tabler-info-circle"})]),_:2},1032,["title","subtitle"])),64)),e(G,{inset:""}),e(O,{inset:""},{default:t(()=>a[1]||(a[1]=[r(" Files ")])),_:1,__:[1]}),(l(),V(L,null,h(s.files,i=>e(c,{key:i.title,title:i.title,subtitle:i.subtitle},{prepend:t(()=>[e(A,{color:"secondary",variant:"tonal"},{default:t(()=>[e(x,{size:22,icon:i.icon},null,8,["icon"])]),_:2},1024)]),append:t(()=>[e(J,{variant:"text",color:"default",icon:"tabler-info-circle"})]),_:2},1032,["title","subtitle"])),64))]),_:1})}const fe=g(be,[["render",ge],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/list/DemoListTwoLinesAndSubheader.vue"]]),_e={__name:"DemoListSubGroup",setup(o,{expose:a}){a();const b={open:Y(["Users","Admin"]),admins:[["Management","tabler-users"],["Settings","tabler-settings"]],cruds:[["Create","tabler-plus"],["Read","tabler-file"],["Update","tabler-reload"],["Delete","tabler-trash"]]};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}};function Ve(o,a,n,s,p,b){return l(),v(_,{opened:s.open,"onUpdate:opened":a[0]||(a[0]=i=>s.open=i)},{default:t(()=>[e(c,{"prepend-icon":"tabler-home",title:"Home",value:"Home"}),e(B,{value:"Users"},{activator:t(({props:i})=>[e(c,T(i,{"prepend-icon":"tabler-users",title:"Users"}),null,16)]),default:t(()=>[e(B,{value:"Admin"},{activator:t(({props:i})=>[e(c,T(i,{title:"Admin"}),null,16)]),default:t(()=>[(l(),V(L,null,h(s.admins,([i,u],w)=>e(c,{key:w,value:i,title:i,"prepend-icon":u},null,8,["value","title","prepend-icon"])),64))]),_:1}),e(B,{value:"Actions"},{activator:t(({props:i})=>[e(c,T(i,{title:"Actions"}),null,16)]),default:t(()=>[(l(),V(L,null,h(s.cruds,([i,u],w)=>e(c,{key:w,value:i,title:i,"prepend-icon":u},null,8,["value","title","prepend-icon"])),64))]),_:1})]),_:1})]),_:1},8,["opened"])}const Le=g(_e,[["render",Ve],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/list/DemoListSubGroup.vue"]]),he={};function ye(o,a){return l(),v(_,{lines:"three",density:"compact","select-strategy":"classic",class:"action-item-group-list"},{default:t(()=>[e(O,null,{default:t(()=>a[0]||(a[0]=[r("General")])),_:1,__:[0]}),e(c,{value:"notifications"},{prepend:t(({isActive:n})=>[e(P,null,{default:t(()=>[e($,{"model-value":n,color:"primary",class:"mt-1"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(y,null,{default:t(()=>a[1]||(a[1]=[r("Notifications")])),_:1,__:[1]}),e(S,null,{default:t(()=>a[2]||(a[2]=[r("Notify me about updates to apps or games that I downloaded")])),_:1,__:[2]})]),_:1}),e(c,{value:"sound"},{prepend:t(({isActive:n})=>[e(P,null,{default:t(()=>[e($,{"model-value":n,color:"primary",class:"mt-1"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(y,null,{default:t(()=>a[3]||(a[3]=[r("Sound")])),_:1,__:[3]}),e(S,null,{default:t(()=>a[4]||(a[4]=[r("Auto-update apps at any time. Data charges may apply")])),_:1,__:[4]})]),_:1}),e(c,{value:"widgets"},{prepend:t(({isActive:n})=>[e(P,null,{default:t(()=>[e($,{"model-value":n,color:"primary",class:"mt-1"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(y,null,{default:t(()=>a[5]||(a[5]=[r("Auto-add widgets")])),_:1,__:[5]}),e(S,null,{default:t(()=>a[6]||(a[6]=[r("Automatically add home screen widgets when downloads complete")])),_:1,__:[6]})]),_:1})]),_:1})}const Ie=g(he,[["render",ye],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/list/DemoListActionAndItemGroup.vue"]]),we={__name:"DemoListNav",setup(o,{expose:a}){a();const s={items:[{title:"My Files",value:1,prependIcon:"tabler-folder"},{title:"Shared with me",value:2,prependIcon:"tabler-users"},{title:"Starred",value:3,prependIcon:"tabler-star"},{title:"Recent",value:4,prependIcon:"tabler-history"},{title:"Offline",value:5,prependIcon:"tabler-circle-check"},{title:"Uploads",value:6,prependIcon:"tabler-upload"},{title:"Backups",value:7,prependIcon:"tabler-cloud-upload"}]};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function Se(o,a,n,s,p,b){return l(),v(_,{nav:"",lines:!1},{default:t(()=>[(l(),V(L,null,h(s.items,i=>e(c,{key:i.value,value:i.value},{prepend:t(()=>[e(x,{icon:i.prependIcon},null,8,["icon"])]),default:t(()=>[e(y,null,{default:t(()=>[r(I(i.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})}const xe=g(we,[["render",Se],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/list/DemoListNav.vue"]]),Ae={__name:"DemoListDensity",setup(o,{expose:a}){a();const s={items:[{title:"halvah icing marshmallow",value:1},{title:"Cake caramels donut danish muffin biscuit",value:2},{title:"Chocolate cake pie lollipop",value:3},{title:"Apple pie toffee pudding gummi bears",value:4},{title:"Jujubes chupa chups cheesecake tart",value:5},{title:"Candy fruitcake bonbon sesame snaps dessert",value:6},{title:"Candy wafer tiramisu sugar plum sweet.",value:7},{title:"Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.",value:8}]};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function ke(o,a,n,s,p,b){return l(),v(_,{density:"comfortable",items:s.items})}const Ce=g(Ae,[["render",ke],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/list/DemoListDensity.vue"]]),De={__name:"DemoListRounded",setup(o,{expose:a}){a();const s={items:[{title:"Cupcake sesame snaps dessert marzipan.",value:1,props:{prependIcon:"tabler-brand-instagram",rounded:"xl"}},{title:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",value:2,props:{prependIcon:"tabler-brand-facebook",rounded:"xl"}},{title:"Bonbon macaroon gummies pie jelly",value:3,props:{prependIcon:"tabler-brand-twitter",rounded:"xl"}},{title:"halvah icing marshmallow",value:4,props:{prependIcon:"tabler-brand-instagram",rounded:"xl"}}]};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function je(o,a,n,s,p,b){return l(),v(_,{items:s.items})}const Te=g(De,[["render",je],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/list/DemoListRounded.vue"]]),Be={__name:"DemoListBasic",setup(o,{expose:a}){a();const s={items:["Cras justo odio","Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac"]};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function Pe(o,a,n,s,p,b){return l(),v(_,{items:s.items})}const $e=g(Be,[["render",Pe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/components/list/DemoListBasic.vue"]]),Je={ts:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
    class="action-item-group-list"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`,js:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
    class="action-item-group-list"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`},Oe={ts:`<script setup lang="ts">
const items = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac']
<\/script>

<template>
  <VList :items="items" />
</template>
`,js:`<script setup>
const items = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Morbi leo risus',
  'Porta ac consectetur ac',
]
<\/script>

<template>
  <VList :items="items" />
</template>
`},Ge={ts:`<script lang="ts" setup>
const items = [
  { title: 'halvah icing marshmallow', value: 1 },
  { title: 'Cake caramels donut danish muffin biscuit', value: 2 },
  { title: 'Chocolate cake pie lollipop', value: 3 },
  { title: 'Apple pie toffee pudding gummi bears', value: 4 },
  { title: 'Jujubes chupa chups cheesecake tart', value: 5 },
  { title: 'Candy fruitcake bonbon sesame snaps dessert', value: 6 },
  { title: 'Candy wafer tiramisu sugar plum sweet.', value: 7 },
  { title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.', value: 8 },
]
<\/script>

<template>
  <VList
    density="comfortable"
    :items="items"
  />
</template>
`,js:`<script setup>
const items = [
  {
    title: 'halvah icing marshmallow',
    value: 1,
  },
  {
    title: 'Cake caramels donut danish muffin biscuit',
    value: 2,
  },
  {
    title: 'Chocolate cake pie lollipop',
    value: 3,
  },
  {
    title: 'Apple pie toffee pudding gummi bears',
    value: 4,
  },
  {
    title: 'Jujubes chupa chups cheesecake tart',
    value: 5,
  },
  {
    title: 'Candy fruitcake bonbon sesame snaps dessert',
    value: 6,
  },
  {
    title: 'Candy wafer tiramisu sugar plum sweet.',
    value: 7,
  },
  {
    title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.',
    value: 8,
  },
]
<\/script>

<template>
  <VList
    density="comfortable"
    :items="items"
  />
</template>
`},Ue={ts:`<script lang="ts" setup>
const items = [
  { title: 'My Files', value: 1, prependIcon: 'tabler-folder' },
  { title: 'Shared with me', value: 2, prependIcon: 'tabler-users' },
  { title: 'Starred', value: 3, prependIcon: 'tabler-star' },
  { title: 'Recent', value: 4, prependIcon: 'tabler-history' },
  { title: 'Offline', value: 5, prependIcon: 'tabler-circle-check' },
  { title: 'Uploads', value: 6, prependIcon: 'tabler-upload' },
  { title: 'Backups', value: 7, prependIcon: 'tabler-cloud-upload' },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon :icon="item.prependIcon" />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'My Files',
    value: 1,
    prependIcon: 'tabler-folder',
  },
  {
    title: 'Shared with me',
    value: 2,
    prependIcon: 'tabler-users',
  },
  {
    title: 'Starred',
    value: 3,
    prependIcon: 'tabler-star',
  },
  {
    title: 'Recent',
    value: 4,
    prependIcon: 'tabler-history',
  },
  {
    title: 'Offline',
    value: 5,
    prependIcon: 'tabler-circle-check',
  },
  {
    title: 'Uploads',
    value: 6,
    prependIcon: 'tabler-upload',
  },
  {
    title: 'Backups',
    value: 7,
    prependIcon: 'tabler-cloud-upload',
  },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon :icon="item.prependIcon" />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`},Me={ts:`<script setup lang="ts">
interface Language {
  'react': string
  'bootstrap': string
  'vue': string
  'angular': string
  'javascript': string
}

interface Progress {
  avatar: string
  title: string
  language: keyof Language
  amount: number
}

const languageProgress: Progress[] = [
  {
    avatar: 'tabler-brand-react',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'tabler-brand-bootstrap',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'tabler-brand-vue',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'tabler-brand-angular',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'tabler-brand-javascript',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor: Language = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            rounded-bar
            :model-value="progress.amount"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
`,js:`<script setup>
const languageProgress = [
  {
    avatar: 'tabler-brand-react',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'tabler-brand-bootstrap',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'tabler-brand-vue',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'tabler-brand-angular',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'tabler-brand-javascript',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            rounded-bar
            :model-value="progress.amount"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
`},He={ts:`<script lang="ts" setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    props: {
      prependIcon: 'tabler-brand-instagram',
      rounded: 'xl',
    },
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    props: {
      prependIcon: 'tabler-brand-facebook',
      rounded: 'xl',
    },
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    props: {
      prependIcon: 'tabler-brand-twitter',
      rounded: 'xl',
    },
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    props: {
      prependIcon: 'tabler-brand-instagram',
      rounded: 'xl',
    },
  },
]
<\/script>

<template>
  <VList :items="items" />
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    props: {
      prependIcon: 'tabler-brand-instagram',
      rounded: 'xl',
    },
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    props: {
      prependIcon: 'tabler-brand-facebook',
      rounded: 'xl',
    },
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    props: {
      prependIcon: 'tabler-brand-twitter',
      rounded: 'xl',
    },
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    props: {
      prependIcon: 'tabler-brand-instagram',
      rounded: 'xl',
    },
  },
]
<\/script>

<template>
  <VList :items="items" />
</template>
`},Re={ts:`<script lang="ts" setup>
const items = [
  { text: 'Cupcake sesame snaps dessert marzipan.', icon: 'tabler-brand-instagram' },
  { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', icon: 'tabler-brand-facebook' },
  { text: 'Bonbon macaroon gummies pie jelly', icon: 'tabler-brand-twitter' },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    text: 'Cupcake sesame snaps dessert marzipan.',
    icon: 'tabler-brand-instagram',
  },
  {
    text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    icon: 'tabler-brand-facebook',
  },
  {
    text: 'Bonbon macaroon gummies pie jelly',
    icon: 'tabler-brand-twitter',
  },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`},ze={ts:`<script lang="ts" setup>
const open = ref(['Users', 'Admin'])

const admins = [
  ['Management', 'tabler-users'],
  ['Settings', 'tabler-settings'],
]

const cruds = [
  ['Create', 'tabler-plus'],
  ['Read', 'tabler-file'],
  ['Update', 'tabler-reload'],
  ['Delete', 'tabler-trash'],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="tabler-home"
      title="Home"
      value="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="tabler-users"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`,js:`<script setup>
const open = ref([
  'Users',
  'Admin',
])

const admins = [
  [
    'Management',
    'tabler-users',
  ],
  [
    'Settings',
    'tabler-settings',
  ],
]

const cruds = [
  [
    'Create',
    'tabler-plus',
  ],
  [
    'Read',
    'tabler-file',
  ],
  [
    'Update',
    'tabler-reload',
  ],
  [
    'Delete',
    'tabler-trash',
  ],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="tabler-home"
      title="Home"
      value="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="tabler-users"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`},Fe={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const items = [
  { type: 'subheader', title: 'Today' },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const items = [
  {
    type: 'subheader',
    title: 'Today',
  },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`},Ne={ts:`<script lang="ts" setup>
const files = [
  {
    color: 'blue',
    icon: 'tabler-clipboard-text',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'tabler-device-mobile-rotated',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            icon="tabler-folder"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="tabler-info-circle"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="tabler-info-circle"
        />
      </template>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const files = [
  {
    color: 'blue',
    icon: 'tabler-clipboard-text',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'tabler-device-mobile-rotated',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            icon="tabler-folder"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="tabler-info-circle"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="tabler-info-circle"
        />
      </template>
    </VListItem>
  </VList>
</template>
`},Ee={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

interface Status {
  'Online': string
  'Away': string
  'Offline': string
  'In Meeting': string
}

interface Users {
  avatar: string
  name: string
  status: keyof Status
  lastVisited: string
}

const users: Users[] = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor: Status = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const users = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
`},We={__name:"list",setup(o,{expose:a}){a();const n={get actionAndItemGroup(){return Je},get basic(){return Oe},get density(){return Ge},get nav(){return Ue},get progressList(){return Me},get rounded(){return He},get shaped(){return Re},get subGroup(){return ze},get threeLine(){return Fe},get twoLinesAndSubheader(){return Ne},get userList(){return Ee}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function Ke(o,a,n,s,p,b){const i=$e,u=X,w=Te,M=Ce,H=xe,R=Ie,z=Le,F=fe,N=ve,E=pe,W=re,K=ae;return l(),v(Z,{class:"match-height"},{default:t(()=>[e(f,{cols:"12",md:"6"},{default:t(()=>[e(u,{title:"Basic","no-padding":"",code:s.basic},{default:t(()=>[e(m,null,{default:t(()=>a[0]||(a[0]=[d("code",null,"v-list",-1),r(" component can contain an avatar, content, actions and much more.")])),_:1,__:[0]}),e(m,null,{default:t(()=>[e(i)]),_:1})]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(u,{title:"Rounded","no-padding":"",code:s.rounded},{default:t(()=>[e(m,null,{default:t(()=>a[1]||(a[1]=[r("You can make "),d("code",null,"v-list-item",-1),r(" rounded using "),d("code",null,"rounded",-1),r(" prop.")])),_:1,__:[1]}),e(m,null,{default:t(()=>[e(w)]),_:1})]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(u,{title:"Density",code:s.density,"no-padding":""},{default:t(()=>[e(m,null,{default:t(()=>a[2]||(a[2]=[r("Use "),d("code",null,"density",-1),r(" prop to adjusts the spacing within the component. Available options are: "),d("code",null,"default",-1),r(", "),d("code",null,"comfortable",-1),r(", and "),d("code",null,"compact",-1),r(".")])),_:1,__:[2]}),e(m,null,{default:t(()=>[e(M)]),_:1})]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(u,{title:"Nav","no-padding":"",code:s.nav},{default:t(()=>[e(m,null,{default:t(()=>a[3]||(a[3]=[r("Lists can receive an alternative "),d("code",null,"nav",-1),r(" styling that reduces the width "),d("code",null,"v-list-item",-1),r(" takes up as well as adding a border radius.")])),_:1,__:[3]}),e(m,null,{default:t(()=>[e(H)]),_:1})]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(u,{title:"Action and item group","no-padding":"",code:s.actionAndItemGroup},{default:t(()=>[e(m,null,{default:t(()=>a[4]||(a[4]=[r("A "),d("code",null,"three-line",-1),r(" list with actions. Utilizing "),d("code",null,"v-list-group",-1),r(", easily connect actions to your tiles.")])),_:1,__:[4]}),e(m,null,{default:t(()=>[e(R)]),_:1})]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(u,{title:"Sub Group","no-padding":"",code:s.subGroup},{default:t(()=>[e(m,null,{default:t(()=>a[5]||(a[5]=[r(" Using the "),d("code",null,"v-list-group",-1),r(" component you can create up to 2 levels in depth using the sub-group prop. ")])),_:1,__:[5]}),e(m,null,{default:t(()=>[e(z)]),_:1})]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(u,{title:"Two lines and subheader","no-padding":"",code:s.twoLinesAndSubheader},{default:t(()=>[e(m,null,{default:t(()=>a[6]||(a[6]=[r("Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.")])),_:1,__:[6]}),e(m,null,{default:t(()=>[e(F)]),_:1})]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(u,{title:"Three Line","no-padding":"",code:s.threeLine},{default:t(()=>[e(m,null,{default:t(()=>a[7]||(a[7]=[r("For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.")])),_:1,__:[7]}),e(m,null,{default:t(()=>[e(N)]),_:1})]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(u,{title:"User List","no-padding":"",code:s.userList},{default:t(()=>[e(m,null,{default:t(()=>[e(E)]),_:1})]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(u,{title:"Progress List","no-padding":"",code:s.progressList},{default:t(()=>[e(m,null,{default:t(()=>[e(W)]),_:1})]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(u,{title:"Shaped","no-padding":"",code:s.shaped},{default:t(()=>[e(m,null,{default:t(()=>a[8]||(a[8]=[r(" Shaped lists have rounded borders on one side of the "),d("code",null,"v-list-item",-1),r(". ")])),_:1,__:[8]}),e(m,null,{default:t(()=>[e(K)]),_:1})]),_:1},8,["code"])]),_:1})]),_:1})}const _t=g(We,[["render",Ke],["__file","E:/wamp64/www/sales/frontend/src/pages/components/list.vue"]]);export{_t as default};
