import{ab as fe,ac as _e,aW as ve,aJ as ge,b4 as H,W as h,cE as X,f as I,X as we,aw as Fe,g as K,ao as be,ci as Ve,a as l,F as A,m as M,ak as he,ce as Ie,_ as w,d as v,o as f,w as s,c as ye,h as Ce,j as o,t as De,b as i}from"./index-BGIMdqyN.js";import{V as q,m as Se}from"./VField-B7Xo4Lej.js";import{V as G,m as ze}from"./VInput-CH8dtMYl.js";import{a as ke}from"./form-DbIa-vyG.js";import{f as Pe}from"./forwardRefs-C-GTDzx5.js";import{V as $e}from"./VCounter-A4qJAdeX.js";import{V as Q}from"./VChip-BZnN8JqM.js";import{a as d,V as Z}from"./VRow-BFNCnCWI.js";import{_ as je}from"./AppCardCode-C-zO1RUn.js";import"./easing-Bybner-F.js";import"./VImg-nOKaZD-s.js";import"./VSlideGroup-C-0uVn6B.js";import"./VAvatar-CYJWVBhL.js";/* empty css              */import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VCardText-DfrFZhA0.js";import"./VDivider-B1B4kDZB.js";const xe=_e({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...ze({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:e=>e.multiple?[]:null,validator:e=>H(e).every(t=>t!=null&&typeof t=="object")},...Se({clearable:!0})},"VFileInput"),m=fe()({name:"VFileInput",inheritAttrs:!1,props:xe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:_,emit:a,slots:u}=t;const{t:V}=ve(),p=ge(e,"modelValue",e.modelValue,n=>H(n),n=>!e.multiple&&Array.isArray(n)?n[0]:n),{isFocused:r,focus:B,blur:E}=ke(e),D=h(()=>typeof e.showSize!="boolean"?e.showSize:void 0),S=h(()=>(p.value??[]).reduce((n,c)=>{let{size:F=0}=c;return n+F},0)),z=h(()=>X(S.value,D.value)),y=h(()=>(p.value??[]).map(n=>{const{name:c="",size:F=0}=n;return e.showSize?`${c} (${X(F,D.value)})`:c})),R=h(()=>{var c;const n=((c=p.value)==null?void 0:c.length)??0;return e.showSize?V(e.counterSizeString,n,z.value):V(e.counterString,n)}),k=I(),P=I(),g=I(),N=we(()=>r.value||e.active),T=h(()=>["plain","underlined"].includes(e.variant)),$=Fe(!1);function L(){var n;g.value!==document.activeElement&&((n=g.value)==null||n.focus()),r.value||B()}function ee(n){var c;(c=g.value)==null||c.click()}function le(n){a("mousedown:control",n)}function te(n){var c;(c=g.value)==null||c.click(),a("click:control",n)}function ne(n){n.stopPropagation(),L(),he(()=>{p.value=[],Ie(e["onClick:clear"],n)})}function ie(n){n.preventDefault(),n.stopImmediatePropagation(),$.value=!0}function oe(n){n.preventDefault(),$.value=!1}function ae(n){var F,j;if(n.preventDefault(),n.stopImmediatePropagation(),$.value=!1,!((j=(F=n.dataTransfer)==null?void 0:F.files)!=null&&j.length)||!g.value)return;const c=new DataTransfer;for(const O of n.dataTransfer.files)c.items.add(O);g.value.files=c.files,g.value.dispatchEvent(new Event("change",{bubbles:!0}))}return K(p,n=>{(!Array.isArray(n)||!n.length)&&g.value&&(g.value.value="")}),be(()=>{const n=!!(u.counter||e.counter),c=!!(n||u.details),[F,j]=Ve(_),{modelValue:O,...se}=G.filterProps(e),ue=q.filterProps(e);return l(G,M({ref:k,modelValue:e.multiple?p.value:p.value[0],class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-file-input--dragging":$.value,"v-file-input--hide":e.hideInput,"v-input--plain-underlined":T.value},e.class],style:e.style,"onClick:prepend":ee},F,se,{centerAffix:!T.value,focused:r.value}),{...u,default:U=>{let{id:x,isDisabled:C,isDirty:W,isReadonly:Y,isValid:re}=U;return l(q,M({ref:P,"prepend-icon":e.prependIcon,onMousedown:le,onClick:te,"onClick:clear":ne,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},ue,{id:x.value,active:N.value||W.value,dirty:W.value||e.dirty,disabled:C.value,focused:r.value,error:re.value===!1,onDragover:ie,onDrop:ae}),{...u,default:ce=>{var J;let{props:{class:pe,...de}}=ce;return l(A,null,[l("input",M({ref:g,type:"file",readonly:Y.value,disabled:C.value,multiple:e.multiple,name:e.name,onClick:b=>{b.stopPropagation(),Y.value&&b.preventDefault(),L()},onChange:b=>{if(!b.target)return;const me=b.target;p.value=[...me.files??[]]},onDragleave:oe,onFocus:L,onBlur:E},de,j),null),l("div",{class:pe},[!!((J=p.value)!=null&&J.length)&&!e.hideInput&&(u.selection?u.selection({fileNames:y.value,totalBytes:S.value,totalBytesReadable:z.value}):e.chips?y.value.map(b=>l(Q,{key:b,size:"small",text:b},null)):y.value.join(", "))])])}})},details:c?U=>{var x,C;return l(A,null,[(x=u.details)==null?void 0:x.call(u,U),n&&l(A,null,[l("span",null,null),l($e,{active:!!((C=p.value)!=null&&C.length),value:R.value,disabled:e.disabled},u.counter)])])}:void 0})}),Pe({},k,P,g)}}),Ae={__name:"DemoFileInputLoading",setup(e,{expose:t}){t();const _=I(),a=I(!0);K(_,()=>{a.value=!_.value[0]});const u={file:_,loading:a};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function Be(e,t,_,a,u,V){return f(),v(m,{modelValue:a.file,"onUpdate:modelValue":t[0]||(t[0]=p=>a.file=p),loading:a.loading,color:"primary",label:"File input",variant:"outlined"},null,8,["modelValue","loading"])}const Ee=w(Ae,[["render",Be],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/file-input/DemoFileInputLoading.vue"]]),Re={__name:"DemoFileInputSelectionSlot",setup(e,{expose:t}){t();const a={files:I([])};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function Ne(e,t,_,a,u,V){return f(),v(m,{modelValue:a.files,"onUpdate:modelValue":t[0]||(t[0]=p=>a.files=p),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-icon":"tabler-paperclip"},{selection:s(({fileNames:p})=>[(f(!0),ye(A,null,Ce(p,r=>(f(),v(Q,{key:r,label:"",size:"small",color:"primary",class:"me-2"},{default:s(()=>[o(De(r),1)]),_:2},1024))),128))]),_:1},8,["modelValue"])}const Le=w(Re,[["render",Ne],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/file-input/DemoFileInputSelectionSlot.vue"]]),Ue={__name:"DemoFileInputValidation",setup(e,{expose:t}){t();const a={rules:[u=>!u||!u.length||u[0].size<1e6||"Avatar size should be less than 1 MB!"]};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function Me(e,t,_,a,u,V){return f(),v(m,{rules:a.rules,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"tabler-camera"})}const Te=w(Ue,[["render",Me],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/file-input/DemoFileInputValidation.vue"]]),Oe={};function We(e,t){return f(),v(m,{"show-size":"",label:"File input"})}const Ye=w(Oe,[["render",We],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/file-input/DemoFileInputShowSize.vue"]]),Je={};function Xe(e,t){return f(),v(m,{label:"File input","prepend-icon":"tabler-camera"})}const qe=w(Je,[["render",Xe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/file-input/DemoFileInputPrependIcon.vue"]]),Ge={};function He(e,t){return f(),v(m,{multiple:"",label:"File input"})}const Ke=w(Ge,[["render",He],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/file-input/DemoFileInputMultiple.vue"]]),Qe={};function Ze(e,t){return f(),v(m,{"show-size":"",counter:"",multiple:"",label:"File input"})}const el=w(Qe,[["render",Ze],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/file-input/DemoFileInputCounter.vue"]]),ll={};function tl(e,t){return f(),v(m,{chips:"",label:"File input w/ chips"})}const nl=w(ll,[["render",tl],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/file-input/DemoFileInputChips.vue"]]),il={};function ol(e,t){return f(),v(m,{accept:"image/*",label:"File input"})}const al=w(il,[["render",ol],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/file-input/DemoFileInputAccept.vue"]]),sl={};function ul(e,t){return f(),v(Z,null,{default:s(()=>[l(d,{cols:"12",sm:"6"},{default:s(()=>[l(m,{label:"Outlined"})]),_:1}),l(d,{cols:"12",sm:"6"},{default:s(()=>[l(m,{label:"Filled",variant:"filled"})]),_:1}),l(d,{cols:"12",sm:"6"},{default:s(()=>[l(m,{label:"Solo",variant:"solo"})]),_:1}),l(d,{cols:"12",sm:"6"},{default:s(()=>[l(m,{label:"Plain",variant:"plain"})]),_:1}),l(d,{cols:"12",sm:"6"},{default:s(()=>[l(m,{label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1})}const rl=w(sl,[["render",ul],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/file-input/DemoFileInputVariant.vue"]]),cl={};function pl(e,t){return f(),v(m,{label:"File input",density:"compact"})}const dl=w(cl,[["render",pl],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/file-input/DemoFileInputDensity.vue"]]),ml={};function fl(e,t){return f(),v(m,{label:"File input"})}const _l=w(ml,[["render",fl],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/file-input/DemoFileInputBasic.vue"]]),vl={ts:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},gl={ts:`<template>
  <VFileInput label="File input" />
</template>
`,js:`<template>
  <VFileInput label="File input" />
</template>
`},wl={ts:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},Fl={ts:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},bl={ts:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`},Vl={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
    variant="outlined"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
    variant="outlined"
  />
</template>
`},hl={ts:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`},Il={ts:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`},yl={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`},Cl={ts:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`},Dl={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`},Sl={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
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
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},zl={__name:"file-input",setup(e,{expose:t}){t();const _={get accept(){return vl},get basic(){return gl},get chips(){return wl},get counter(){return Fl},get density(){return bl},get loading(){return Vl},get multiple(){return hl},get prependIcon(){return Il},get selectionSlot(){return yl},get showSize(){return Cl},get validation(){return Dl},get variant(){return Sl}};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}};function kl(e,t,_,a,u,V){const p=_l,r=je,B=dl,E=rl,D=al,S=nl,z=el,y=Ke,R=qe,k=Ye,P=Te,g=Le,N=Ee;return f(),v(Z,{class:"match-height"},{default:s(()=>[l(d,{cols:"12",md:"6"},{default:s(()=>[l(r,{title:"Basic",code:a.basic},{default:s(()=>[t[0]||(t[0]=i("p",null,[o("The "),i("code",null,"v-file-input"),o(" component is used to selecting files.")],-1)),l(p)]),_:1,__:[0]},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(r,{title:"Density",code:a.density},{default:s(()=>[t[1]||(t[1]=i("p",null,[o("You can reduces the file input height with "),i("code",null,"density"),o(" prop. Available options are: "),i("code",null,"default"),o(", "),i("code",null,"comfortable"),o(", and "),i("code",null,"compact"),o(".")],-1)),l(B)]),_:1,__:[1]},8,["code"])]),_:1}),l(d,{cols:"12"},{default:s(()=>[l(r,{title:"Variant",code:a.variant},{default:s(()=>[t[2]||(t[2]=i("p",null,[o("use "),i("code",null,"solo"),o(", "),i("code",null,"filled"),o(", "),i("code",null,"outlined"),o(", "),i("code",null,"plain"),o(" and "),i("code",null,"underlined"),o(" option of "),i("code",null,"variant"),o(" prop to change the look of file input.")],-1)),l(E)]),_:1,__:[2]},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(r,{title:"Accept",code:a.accept},{default:s(()=>[t[3]||(t[3]=i("p",null,[i("code",null,"v-file-input"),o(" component can accept only specific media formats/file types if you want.")],-1)),l(D)]),_:1,__:[3]},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(r,{title:"Chips",code:a.chips},{default:s(()=>[t[4]||(t[4]=i("p",null,[o("Use "),i("code",null,"chip"),o(" prop to display the selected file as a chip.")],-1)),l(S)]),_:1,__:[4]},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(r,{title:"Counter",code:a.counter},{default:s(()=>[t[5]||(t[5]=i("p",null,[o("When using the "),i("code",null,"show-size"),o(" property along with "),i("code",null,"counter"),o(", the total number of files and size will be displayed under the input.")],-1)),l(z)]),_:1,__:[5]},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(r,{title:"Multiple",code:a.multiple},{default:s(()=>[t[6]||(t[6]=i("p",null,[o(" The "),i("code",null,"v-file-input"),o(" can contain multiple files at the same time when using the "),i("code",null,"multiple"),o(" prop. ")],-1)),l(y)]),_:1,__:[6]},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(r,{title:"Prepend icon",code:a.prependIcon},{default:s(()=>[t[7]||(t[7]=i("p",null,[o(" The "),i("code",null,"v-file-input"),o(" has a default "),i("code",null,"prepend-icon"),o(" that can be set on the component or adjusted globally. ")],-1)),l(R)]),_:1,__:[7]},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(r,{title:"Show size",code:a.showSize},{default:s(()=>[t[8]||(t[8]=i("p",null,[o("The displayed size of the selected file(s) can be configured with the "),i("code",null,"show-size"),o(" property.")],-1)),l(k)]),_:1,__:[8]},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(r,{title:"Validation",code:a.validation},{default:s(()=>[t[9]||(t[9]=i("p",null,[o("You can use the "),i("code",null,"rules"),o(" prop to create your own custom validation parameters.")],-1)),l(P)]),_:1,__:[9]},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(r,{title:"Selection slot",code:a.selectionSlot},{default:s(()=>[t[10]||(t[10]=i("p",null,[o("Using the "),i("code",null,"selection"),o(" slot, you can customize the appearance of your input selections.")],-1)),l(g)]),_:1,__:[10]},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(r,{title:"Loading",code:a.loading},{default:s(()=>[t[11]||(t[11]=i("p",null,[o("Use "),i("code",null,"loading"),o(" prop to displays linear progress bar.")],-1)),l(N)]),_:1,__:[11]},8,["code"])]),_:1})]),_:1})}const ql=w(zl,[["render",kl],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/file-input.vue"]]);export{ql as default};
