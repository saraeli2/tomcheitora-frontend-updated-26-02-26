import{_ as f,d as G,o as p,w as t,c as V,F as b,h as y,a,f as m,b as i,j as r}from"./index-BGIMdqyN.js";import{a as u,V as _}from"./VRadioGroup-Q44qFrB_.js";import{V as D}from"./VDivider-B1B4kDZB.js";import{_ as $}from"./AppCardCode-C-zO1RUn.js";import{V as L,a as v}from"./VRow-BFNCnCWI.js";import"./VSelectionControl-Dyu49DZR.js";import"./form-DbIa-vyG.js";import"./VInput-CH8dtMYl.js";import"./VImg-nOKaZD-s.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VAvatar-CYJWVBhL.js";import"./VCardText-DfrFZhA0.js";/* empty css              */const j={__name:"DemoRadioValidation",setup(s,{expose:e}){e();const d={radioGroup:m(1),rules:[c=>c!==3?!0:"Do not select the third one!"]};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function C(s,e,n,o,d,c){return p(),G(_,{modelValue:o.radioGroup,"onUpdate:modelValue":e[0]||(e[0]=l=>o.radioGroup=l),inline:"",rules:o.rules},{default:t(()=>[(p(),V(b,null,y(3,l=>a(u,{key:l,error:o.radioGroup===3,label:`Radio ${l}`,value:l},null,8,["error","label","value"])),64))]),_:1},8,["modelValue"])}const U=f(j,[["render",C],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/radio/DemoRadioValidation.vue"]]),E={__name:"DemoRadioIcon",setup(s,{expose:e}){e();const o={radioGroup:m(1)};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function I(s,e,n,o,d,c){return p(),G(_,{modelValue:o.radioGroup,"onUpdate:modelValue":e[0]||(e[0]=l=>o.radioGroup=l),"false-icon":"tabler-bell-off","true-icon":"tabler-bell"},{default:t(()=>[(p(),V(b,null,y(2,l=>a(u,{key:l,label:`Radio ${l}`,value:l},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}const P=f(E,[["render",I],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/radio/DemoRadioIcon.vue"]]),B={__name:"DemoRadioLabelSlot",setup(s,{expose:e}){e();const o={radios:m("DuckDuckGo")};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function A(s,e,n,o,d,c){return p(),G(_,{modelValue:o.radios,"onUpdate:modelValue":e[0]||(e[0]=l=>o.radios=l)},{label:t(()=>e[1]||(e[1]=[i("div",null,[r("Your favorite "),i("strong",null,"search engine")],-1)])),default:t(()=>[a(u,{value:"Google"},{label:t(()=>e[2]||(e[2]=[i("div",null,[r(" Of course it's "),i("span",{class:"text-success"}," Google ")],-1)])),_:1}),a(u,{value:"DuckDuckGo"},{label:t(()=>e[3]||(e[3]=[i("div",null,[r(" Definitely "),i("span",{class:"text-primary"}," DuckDuckGo ")],-1)])),_:1})]),_:1},8,["modelValue"])}const F=f(B,[["render",A],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/radio/DemoRadioLabelSlot.vue"]]),N={__name:"DemoRadioDensity",setup(s,{expose:e}){e();const n=m("radio-1"),o=m("radio-1"),d={columnRadio:n,inlineRadio:o};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function T(s,e,n,o,d,c){return p(),V(b,null,[a(_,{modelValue:o.columnRadio,"onUpdate:modelValue":e[0]||(e[0]=l=>o.columnRadio=l)},{default:t(()=>[a(u,{label:"Option 1",value:"radio-1",density:"compact"}),a(u,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"]),a(D,{class:"my-3"}),a(_,{modelValue:o.inlineRadio,"onUpdate:modelValue":e[1]||(e[1]=l=>o.inlineRadio=l),inline:""},{default:t(()=>[a(u,{label:"Option 1",value:"radio-1",density:"compact"}),a(u,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"])],64)}const W=f(N,[["render",T],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/radio/DemoRadioDensity.vue"]]),Y={__name:"DemoRadioInline",setup(s,{expose:e}){e();const n=m("radio-1"),o=m("radio-1"),d={columnRadio:n,inlineRadio:o};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function H(s,e,n,o,d,c){return p(),V(b,null,[a(_,{modelValue:o.columnRadio,"onUpdate:modelValue":e[0]||(e[0]=l=>o.columnRadio=l)},{default:t(()=>[a(u,{label:"Option 1",value:"radio-1"}),a(u,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"]),a(D,{class:"my-4"}),a(_,{modelValue:o.inlineRadio,"onUpdate:modelValue":e[1]||(e[1]=l=>o.inlineRadio=l),inline:""},{default:t(()=>[a(u,{label:"Option 1",value:"radio-1"}),a(u,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"])],64)}const M=f(Y,[["render",H],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/radio/DemoRadioInline.vue"]]),q={__name:"DemoRadioColors",setup(s,{expose:e}){e();const d={selectedRadio:m("primary"),colorsRadio:["Primary","Secondary","Success","Info","Warning","Error"]};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function z(s,e,n,o,d,c){return p(),G(_,{modelValue:o.selectedRadio,"onUpdate:modelValue":e[0]||(e[0]=l=>o.selectedRadio=l),inline:""},{default:t(()=>[i("div",null,[(p(),V(b,null,y(o.colorsRadio,l=>a(u,{key:l,label:l,color:l.toLocaleLowerCase(),value:l.toLocaleLowerCase()},null,8,["label","color","value"])),64))])]),_:1},8,["modelValue"])}const J=f(q,[["render",z],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/radio/DemoRadioColors.vue"]]),K={__name:"DemoRadioBasic",setup(s,{expose:e}){e();const o={radioGroup:m(1)};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}},Q={class:""};function X(s,e,n,o,d,c){return p(),V("div",Q,[a(_,{modelValue:o.radioGroup,"onUpdate:modelValue":e[0]||(e[0]=l=>o.radioGroup=l)},{default:t(()=>[(p(),V(b,null,y(2,l=>a(u,{key:l,label:`Radio ${l}`,value:l},null,8,["label","value"])),64))]),_:1},8,["modelValue"])])}const Z=f(K,[["render",X],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/radio/DemoRadioBasic.vue"]]),h={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`},ee={ts:`<script lang="ts" setup>
const selectedRadio = ref('primary')
const colorsRadio = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error']
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
      />
    </div>
  </VRadioGroup>
</template>
`,js:`<script setup>
const selectedRadio = ref('primary')

const colorsRadio = [
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
]
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
      />
    </div>
  </VRadioGroup>
</template>
`},oe={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`},ae={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="tabler-bell-off"
    true-icon="tabler-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="tabler-bell-off"
    true-icon="tabler-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},le={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`},ie={ts:`<script lang="ts" setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`,js:`<script setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`},te={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
const rules = [(value: number) => (value !== 3 ? true : 'Do not select the third one!')]
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
const rules = [value => value !== 3 ? true : 'Do not select the third one!']
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},re={__name:"radio",setup(s,{expose:e}){e();const n={get basic(){return h},get colors(){return ee},get density(){return oe},get icon(){return ae},get inline(){return le},get labelSlot(){return ie},get validation(){return te}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function ne(s,e,n,o,d,c){const l=Z,R=$,w=J,g=M,O=W,k=F,S=P,x=U;return p(),G(L,{class:"match-height"},{default:t(()=>[a(v,{cols:"12",md:"6"},{default:t(()=>[a(R,{title:"Basic",code:o.basic},{default:t(()=>[e[0]||(e[0]=i("p",null,[r("The "),i("code",null,"v-radio"),r(" component is a simple radio button.")],-1)),a(l)]),_:1,__:[0]},8,["code"])]),_:1}),a(v,{cols:"12",md:"6"},{default:t(()=>[a(R,{title:"Colors",code:o.colors},{default:t(()=>[e[1]||(e[1]=i("p",null,[r("Radios can be colored by using any of the built-in colors and contextual names using the "),i("code",null,"color"),r(" prop.")],-1)),a(w)]),_:1,__:[1]},8,["code"])]),_:1}),a(v,{cols:"12",md:"6"},{default:t(()=>[a(R,{title:"Inline",code:o.inline},{default:t(()=>[e[2]||(e[2]=i("p",null,[r("Use "),i("code",null,"inline"),r(" prop to displays radio buttons in row.")],-1)),a(g)]),_:1,__:[2]},8,["code"])]),_:1}),a(v,{cols:"12",md:"6"},{default:t(()=>[a(R,{title:"Density",code:o.density},{default:t(()=>[e[3]||(e[3]=i("p",null,[r("Use "),i("code",null,"density"),r(" prop to adjusts the spacing within the component. Available options are: "),i("code",null,"default"),r(", "),i("code",null,"comfortable"),r(", and "),i("code",null,"compact"),r(".")],-1)),a(O)]),_:1,__:[3]},8,["code"])]),_:1}),a(v,{cols:"12",md:"6"},{default:t(()=>[a(R,{title:"Label Slot",code:o.labelSlot},{default:t(()=>[e[4]||(e[4]=i("p",null,[r("Radio Group labels can be defined in "),i("code",null,"label"),r(" slot - that will allow to use HTML content.")],-1)),a(k)]),_:1,__:[4]},8,["code"])]),_:1}),a(v,{cols:"12",md:"6"},{default:t(()=>[a(R,{title:"Icon",code:o.icon},{default:t(()=>[e[5]||(e[5]=i("p",null,[r("Use "),i("code",null,"false-icon"),r(" and "),i("code",null,"true-icon"),r(" prop to set icon on inactive and active state.")],-1)),a(S)]),_:1,__:[5]},8,["code"])]),_:1}),a(v,{cols:"12",md:"6"},{default:t(()=>[a(R,{title:"Validation",code:o.validation},{default:t(()=>[e[6]||(e[6]=i("p",null,[r("Use "),i("code",null,"rules"),r(" prop to validate a radio. Accepts a mixed array of types "),i("code",null,"function"),r(", "),i("code",null,"boolean"),r(" and "),i("code",null,"string"),r(". Functions pass an input value as an argument and must return either "),i("code",null,"true"),r(" / "),i("code",null,"false"),r(" or a string containing an error message.")],-1)),a(x)]),_:1,__:[6]},8,["code"])]),_:1})]),_:1})}const De=f(re,[["render",ne],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/radio.vue"]]);export{De as default};
