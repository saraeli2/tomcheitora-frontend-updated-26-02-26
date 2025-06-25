import{_ as d,d as i,o as u,f,w as o,a as e,b as t,j as r}from"./index-BGIMdqyN.js";import{_,V as w}from"./AppTextarea-CAfswUIh.js";import{a as s,V as T}from"./VRow-BFNCnCWI.js";import{_ as $}from"./AppCardCode-C-zO1RUn.js";import"./form-DbIa-vyG.js";/* empty css                   */import"./VCounter-A4qJAdeX.js";import"./VImg-nOKaZD-s.js";import"./VField-B7Xo4Lej.js";import"./easing-Bybner-F.js";import"./VInput-CH8dtMYl.js";import"./forwardRefs-C-GTDzx5.js";/* empty css              */import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VAvatar-CYJWVBhL.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";const j={__name:"DemoTextareaValidation",setup(p,{expose:l}){l();const x={textareaValue:f("Hello!"),rules:[h=>h.length<=25||"Max 25 characters"]};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}};function z(p,l,n,a,x,h){const m=_;return u(),i(m,{modelValue:a.textareaValue,"onUpdate:modelValue":l[0]||(l[0]=c=>a.textareaValue=c),label:"Validation",rules:a.rules,rows:"2",placeholder:"Placeholder Text"},null,8,["modelValue"])}const k=d(j,[["render",z],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textarea/DemoTextareaValidation.vue"]]),S={__name:"DemoTextareaNoResize",setup(p,{expose:l}){l();const a={value:f("Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.")};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function E(p,l,n,a,x,h){const m=_;return u(),i(m,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=c=>a.value=c),label:"Text","no-resize":"",rows:"2",placeholder:"Placeholder Text"},null,8,["modelValue"])}const H=d(S,[["render",E],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textarea/DemoTextareaNoResize.vue"]]),O={};function U(p,l){const n=_;return u(),i(T,null,{default:o(()=>[e(s,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"One row","auto-grow":"",rows:"1","row-height":"15",placeholder:"Placeholder Text"})]),_:1}),e(s,{cols:"12",sm:"6"},{default:o(()=>[e(n,{"auto-grow":"",label:"Two rows",rows:"2",placeholder:"Placeholder Text","row-height":"20"})]),_:1}),e(s,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"Three rows","auto-grow":"",rows:"3",placeholder:"Placeholder Text","row-height":"25"})]),_:1}),e(s,{cols:"12",sm:"6"},{default:o(()=>[e(n,{"auto-grow":"",label:"Four rows",placeholder:"Placeholder Text",rows:"4","row-height":"30"})]),_:1})]),_:1})}const G=d(O,[["render",U],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textarea/DemoTextareaRows.vue"]]),B={};function M(p,l){const n=_;return u(),i(T,null,{default:o(()=>[e(s,{cols:"12"},{default:o(()=>[e(n,{label:"prepend-icon",rows:"1",placeholder:"Placeholder Text","prepend-icon":"tabler-message-2"})]),_:1}),e(s,{cols:"12"},{default:o(()=>[e(n,{"append-icon":"tabler-message-2",placeholder:"Placeholder Text",label:"append-icon",rows:"1"})]),_:1}),e(s,{cols:"12"},{default:o(()=>[e(n,{"prepend-inner-icon":"tabler-message-2",label:"prepend-inner-icon",placeholder:"Placeholder Text",rows:"1"})]),_:1}),e(s,{cols:"12"},{default:o(()=>[e(n,{"append-inner-icon":"tabler-message-2",label:"append-inner-icon",placeholder:"Placeholder Text",rows:"1"})]),_:1})]),_:1})}const N=d(B,[["render",M],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textarea/DemoTextareaIcons.vue"]]),F={__name:"DemoTextareaCounter",setup(p,{expose:l}){l();const a={textareaValue:f("Hello!")};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function W(p,l,n,a,x,h){const m=_;return u(),i(m,{modelValue:a.textareaValue,"onUpdate:modelValue":l[0]||(l[0]=c=>a.textareaValue=c),counter:"",label:"Text",placeholder:"Placeholder Text"},null,8,["modelValue"])}const I=d(F,[["render",W],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textarea/DemoTextareaCounter.vue"]]),Y={__name:"DemoTextareaClearable",setup(p,{expose:l}){l();const a={textareaValue:f("This is clearable text.")};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function q(p,l,n,a,x,h){const m=_;return u(),i(m,{modelValue:a.textareaValue,"onUpdate:modelValue":l[0]||(l[0]=c=>a.textareaValue=c),clearable:"","clear-icon":"tabler-circle-x",label:"Text",placeholder:"Placeholder Text"},null,8,["modelValue"])}const J=d(Y,[["render",q],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textarea/DemoTextareaClearable.vue"]]),K={};function L(p,l){const n=_;return u(),i(n,{autocomplete:"email",label:"Email",placeholder:"johndoe@email.com"})}const Q=d(K,[["render",L],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textarea/DemoTextareaBrowserAutocomplete.vue"]]),X={};function Z(p,l){const n=_;return u(),i(T,null,{default:o(()=>[e(s,{cols:"12"},{default:o(()=>[e(n,{disabled:"",label:"Disabled",hint:"Hint text",placeholder:"Placeholder Text",rows:"2"})]),_:1}),e(s,{cols:"12"},{default:o(()=>[e(n,{readonly:"",rows:"2",label:"Readonly",placeholder:"Placeholder Text",hint:"Hint text"})]),_:1})]),_:1})}const ee=d(X,[["render",Z],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textarea/DemoTextareaStates.vue"]]),le={};function oe(p,l){return u(),i(T,null,{default:o(()=>[e(s,{cols:"12",sm:"6"},{default:o(()=>[e(w,{label:"Default",rows:"2",placeholder:"Placeholder Text"})]),_:1}),e(s,{cols:"12",sm:"6"},{default:o(()=>[e(w,{label:"Solo",placeholder:"Placeholder Text",rows:"2",variant:"solo"})]),_:1}),e(s,{cols:"12",sm:"6"},{default:o(()=>[e(w,{label:"Filled",rows:"2",placeholder:"Placeholder Text",variant:"filled"})]),_:1}),e(s,{cols:"12",sm:"6"},{default:o(()=>[e(w,{label:"Outlined",rows:"2",placeholder:"Placeholder Text",variant:"outlined"})]),_:1}),e(s,{cols:"12",sm:"6"},{default:o(()=>[e(w,{label:"Underlined",rows:"2",placeholder:"Placeholder Text",variant:"underlined"})]),_:1}),e(s,{cols:"12",sm:"6"},{default:o(()=>[e(w,{label:"Plain",rows:"2",placeholder:"Placeholder Text",variant:"plain"})]),_:1})]),_:1})}const ae=d(le,[["render",oe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textarea/DemoTextareaVariant.vue"]]),te={__name:"DemoTextareaAutoGrow",setup(p,{expose:l}){l();const a={textareaValue:f("The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.")};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function re(p,l,n,a,x,h){const m=_;return u(),i(m,{modelValue:a.textareaValue,"onUpdate:modelValue":l[0]||(l[0]=c=>a.textareaValue=c),label:"Auto Grow",placeholder:"Placeholder Text","auto-grow":""},null,8,["modelValue"])}const ne=d(te,[["render",re],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textarea/DemoTextareaAutoGrow.vue"]]),se={};function ce(p,l){const n=_;return u(),i(n,{label:"Default",placeholder:"Placeholder Text"})}const pe=d(se,[["render",ce],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/textarea/DemoTextareaBasic.vue"]]),de={ts:`<script setup lang="ts">
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    label="Auto Grow"
    placeholder="Placeholder Text"
    auto-grow
  />
</template>
`,js:`<script setup>
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    label="Auto Grow"
    placeholder="Placeholder Text"
    auto-grow
  />
</template>
`},ie={ts:`<template>
  <AppTextarea
    label="Default"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextarea
    label="Default"
    placeholder="Placeholder Text"
  />
</template>
`},ue={ts:`<template>
  <AppTextarea
    autocomplete="email"
    label="Email"
    placeholder="johndoe@email.com"
  />
</template>
`,js:`<template>
  <AppTextarea
    autocomplete="email"
    label="Email"
    placeholder="johndoe@email.com"
  />
</template>
`},me={ts:`<script setup lang="ts">
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    clearable
    clear-icon="tabler-circle-x"
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    clearable
    clear-icon="tabler-circle-x"
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
`},_e={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    counter
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    counter
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
`},xe={ts:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextarea
        label="prepend-icon"
        rows="1"
        placeholder="Placeholder Text"
        prepend-icon="tabler-message-2"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        append-icon="tabler-message-2"
        placeholder="Placeholder Text"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        prepend-inner-icon="tabler-message-2"
        label="prepend-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        append-inner-icon="tabler-message-2"
        label="append-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextarea
        label="prepend-icon"
        rows="1"
        placeholder="Placeholder Text"
        prepend-icon="tabler-message-2"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        append-icon="tabler-message-2"
        placeholder="Placeholder Text"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        prepend-inner-icon="tabler-message-2"
        label="prepend-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        append-inner-icon="tabler-message-2"
        label="append-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`},he={ts:`<script lang="ts" setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <AppTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<script setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <AppTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
`},we={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        auto-grow
        label="Two rows"
        rows="2"
        placeholder="Placeholder Text"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        label="Three rows"
        auto-grow
        rows="3"
        placeholder="Placeholder Text"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        auto-grow
        label="Four rows"
        placeholder="Placeholder Text"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        auto-grow
        label="Two rows"
        rows="2"
        placeholder="Placeholder Text"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        label="Three rows"
        auto-grow
        rows="3"
        placeholder="Placeholder Text"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        auto-grow
        label="Four rows"
        placeholder="Placeholder Text"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`},fe={ts:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        placeholder="Placeholder Text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        readonly
        rows="2"
        label="Readonly"
        placeholder="Placeholder Text"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        placeholder="Placeholder Text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        readonly
        rows="2"
        label="Readonly"
        placeholder="Placeholder Text"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`},Te={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
`},Ve={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        placeholder="Placeholder Text"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        placeholder="Placeholder Text"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        placeholder="Placeholder Text"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        placeholder="Placeholder Text"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        placeholder="Placeholder Text"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        placeholder="Placeholder Text"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`},be={__name:"textarea",setup(p,{expose:l}){l();const n={get autoGrow(){return de},get basic(){return ie},get browserAutocomplete(){return ue},get clearable(){return me},get counter(){return _e},get icons(){return xe},get noResize(){return he},get rows(){return we},get states(){return fe},get validation(){return Te},get variant(){return Ve}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function ge(p,l,n,a,x,h){const m=pe,c=$,V=ne,b=ae,g=ee,v=Q,P=J,C=I,A=N,D=G,R=H,y=k;return u(),i(T,{class:"match-height"},{default:o(()=>[e(s,{cols:"12",md:"6"},{default:o(()=>[e(c,{title:"Basic",code:a.basic},{default:o(()=>[l[0]||(l[0]=t("p",null," v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text. ",-1)),e(m)]),_:1,__:[0]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(c,{title:"Auto Grow",code:a.autoGrow},{default:o(()=>[l[1]||(l[1]=t("p",null,[r("When using the "),t("code",null,"auto-grow"),r(" prop, textarea's will automatically increase in size when the contained text exceeds its size.")],-1)),e(V)]),_:1,__:[1]},8,["code"])]),_:1}),e(s,{cols:"12"},{default:o(()=>[e(c,{title:"Variant",code:a.variant},{default:o(()=>[l[2]||(l[2]=t("p",null,[r("Use "),t("code",null,"filled"),r(", "),t("code",null,"plain"),r(", "),t("code",null,"outlined"),r(", "),t("code",null,"solo"),r(" and "),t("code",null,"underlined"),r(" option of "),t("code",null,"variant"),r(" prop to change the look of file input.")],-1)),e(b)]),_:1,__:[2]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(c,{title:"States",code:a.states},{default:o(()=>[l[3]||(l[3]=t("p",null,[r("Use "),t("code",null,"disabled"),r(" and "),t("code",null,"readonly"),r(" prop to change the state of textarea.")],-1)),e(g)]),_:1,__:[3]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(c,{title:"Browser autocomplete",code:a.browserAutocomplete},{default:o(()=>[l[4]||(l[4]=t("p",null,[r(" The "),t("code",null,"autocomplete"),r(" prop gives you the option to enable the browser to predict user input. ")],-1)),e(v)]),_:1,__:[4]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(c,{title:"Clearable",code:a.clearable},{default:o(()=>[l[5]||(l[5]=t("p",null,[r("You can clear the text from a "),t("code",null,"v-textarea"),r(" by using the "),t("code",null,"clearable"),r(" prop, and customize the icon used with the "),t("code",null,"clearable-icon"),r(" prop.")],-1)),e(P)]),_:1,__:[5]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(c,{title:"Counter",code:a.counter},{default:o(()=>[l[6]||(l[6]=t("p",null,[r(" The "),t("code",null,"counter"),r(" prop informs the user of a character limit for the "),t("code",null,"v-textarea"),r(". ")],-1)),e(C)]),_:1,__:[6]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(c,{title:"Icons",code:a.icons},{default:o(()=>[l[7]||(l[7]=t("p",null,[r("The "),t("code",null,"append-icon"),r(", "),t("code",null,"prepend-icon"),r(", "),t("code",null,"append-inner-icon"),r(" and "),t("code",null,"prepend-inner-icon"),r(" props help add context to v-textarea.")],-1)),e(A)]),_:1,__:[7]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(c,{title:"Rows",code:a.rows},{default:o(()=>[l[8]||(l[8]=t("p",null,[r("The "),t("code",null,"rows"),r(" prop allows you to define how many rows the textarea has, when combined with the "),t("code",null,"row-height"),r(" prop you can further customize your rows by defining their height.")],-1)),e(D)]),_:1,__:[8]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(c,{title:"No resize",code:a.noResize},{default:o(()=>[l[9]||(l[9]=t("p",null,[t("code",null,"v-textarea"),r("'s have the option to remain the same size regardless of their content's size, using the "),t("code",null,"no-resize"),r(" prop.")],-1)),e(R)]),_:1,__:[9]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(c,{title:"Validation",code:a.validation},{default:o(()=>[l[10]||(l[10]=t("p",null,[r("Use "),t("code",null,"rules"),r(" prop to validate the textarea.")],-1)),e(y)]),_:1,__:[10]},8,["code"])]),_:1})]),_:1})}const Me=d(be,[["render",ge],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/textarea.vue"]]);export{Me as default};
