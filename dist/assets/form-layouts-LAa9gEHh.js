import{_ as se}from"./CustomRadiosWithIcon-B5-UVJY1.js";import{_ as S}from"./AppSelect-if1Bwnix.js";import{_ as Q}from"./AppTextarea-CAfswUIh.js";import{_ as g}from"./AppTextField-DHa-jRMo.js";import{_ as x,d as v,o as y,w as o,b as m,a as e,j as b,a2 as _,C as G,c as P,F as O,h as X,n as D,D as K,f as d,a1 as A,t as re,Y as ne,a0 as R}from"./index-BGIMdqyN.js";import{b as de,V as Z}from"./VCard-CF2BClSY.js";import{V as me}from"./VSpacer-nyw7s6Rx.js";import{V as J}from"./VCardText-DfrFZhA0.js";import{V as u,a}from"./VRow-BFNCnCWI.js";import{V as w}from"./VForm-DRVTTq0N.js";import{V as F}from"./VCheckbox-TzXZlS86.js";import{V as N,a as h}from"./VRadioGroup-Q44qFrB_.js";import{V as k}from"./VDivider-B1B4kDZB.js";import{V as ie,a as ce}from"./VList-BdNXyVV_.js";import{a as M,b as j,c as H,V as pe}from"./VExpansionPanels-Eun4d29Z.js";import{V as ue}from"./form-DbIa-vyG.js";import{_ as Ve}from"./AppDateTimePicker-STOjBPu-.js";import{V as q,a as fe}from"./VTabs-DDU38cHN.js";import{a as be,V as W}from"./VWindowItem-CCqLyGax.js";import{r as L,e as Ce}from"./validators-DOkm11CL.js";import{_ as _e}from"./AppAutocomplete-B63K0KNH.js";import{_ as ye}from"./AppCardCode-C-zO1RUn.js";import"./VSelect-BBtbosdO.js";import"./VTextField-DRZWT-VU.js";/* empty css                   */import"./VCounter-A4qJAdeX.js";import"./VImg-nOKaZD-s.js";import"./VField-B7Xo4Lej.js";import"./easing-Bybner-F.js";import"./VInput-CH8dtMYl.js";import"./forwardRefs-C-GTDzx5.js";import"./VMenu-DJ9pZS3t.js";import"./VOverlay-qz3yYbIb.js";import"./lazy-CKhx2O3m.js";import"./scopeId-DfGkhZ3B.js";import"./dialog-transition-Cz0UmEa5.js";import"./VCheckboxBtn-C50DCjx7.js";import"./VSelectionControl-Dyu49DZR.js";import"./VAvatar-CYJWVBhL.js";import"./VChip-BZnN8JqM.js";import"./VSlideGroup-C-0uVn6B.js";/* empty css              */import"./ssrBoot-DUtO1XoE.js";import"./helpers-DK5QwNv0.js";import"./filter-ChHSF7Vv.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";const we={__name:"DemoFormLayoutSticky",setup(V,{expose:l}){l();const p=[{title:"Standard",desc:"Delivery in 3-5 days.",value:"standard",icon:{icon:"tabler-briefcase-2",size:"32"}},{title:"Express",desc:"Delivery within 2 days.",value:"express",icon:{icon:"tabler-rocket",size:"32"}},{title:"Overnight",desc:"Delivery within a days.",value:"overnight",icon:{icon:"tabler-crown",size:"32"}}],t=[{code:"TAKEITALL",desc:"Apply this code to get 15% discount on orders above 20$."},{code:"FESTIVE10",desc:"Apply this code to get 10% discount on all orders."},{code:"MYSTERYDEAL",desc:"Apply this code to get discount between 10% - 50%."}],C=d({fullName:"",email:"",contactNumber:null,altContactNumber:null,address:"",pincode:null,Landmark:"",city:"",state:null,defaultAddress:!1,addressType:"home",deliveryType:"overnight",promoCode:"",paymentMethod:"card",cardNumber:null,cardName:"",cardExDate:"",cardCvv:""}),f={radioContent:p,promoCodeList:t,formData:C};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}},ve={class:"w-100 sticky-header overflow-hidden rounded-t"},xe={class:"d-flex align-center gap-4 flex-wrap bg-custom-background pa-6"},he={class:"d-flex align-center gap-4"},ge={class:"d-flex align-center gap-2 my-4"};function Fe(V,l,p,t,C,f){const r=g,s=Q,i=S,n=se;return y(),v(Z,{class:"overflow-visible"},{default:o(()=>[m("div",ve,[m("div",xe,[e(de,null,{default:o(()=>l[14]||(l[14]=[b("Sticky Action Bar")])),_:1,__:[14]}),e(me),m("div",null,[e(_,{variant:"tonal",class:"me-4"},{default:o(()=>l[15]||(l[15]=[b(" Back ")])),_:1,__:[15]}),e(_,null,{default:o(()=>l[16]||(l[16]=[b("Place Order")])),_:1,__:[16]})])])]),e(J,null,{default:o(()=>[e(u,null,{default:o(()=>[e(a,{md:"8",cols:"12",class:"mx-auto"},{default:o(()=>[e(w,null,{default:o(()=>[l[22]||(l[22]=m("h5",{class:"text-h5 mb-6"}," 1. Delivery Address ",-1)),e(u,null,{default:o(()=>[e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.formData.fullName,"onUpdate:modelValue":l[0]||(l[0]=c=>t.formData.fullName=c),label:"Full Name",placeholder:"John Doe"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.formData.email,"onUpdate:modelValue":l[1]||(l[1]=c=>t.formData.email=c),label:"Email",placeholder:"john.doe",suffix:"@example.com"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.formData.contactNumber,"onUpdate:modelValue":l[2]||(l[2]=c=>t.formData.contactNumber=c),label:"Contact Number",placeholder:"658 123 4567",type:"number"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.formData.altContactNumber,"onUpdate:modelValue":l[3]||(l[3]=c=>t.formData.altContactNumber=c),label:"Alternate Number",placeholder:"658 123 4567",type:"number"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(s,{modelValue:t.formData.address,"onUpdate:modelValue":l[4]||(l[4]=c=>t.formData.address=c),label:"Address",placeholder:"1456, Mall Road",rows:"2"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.formData.pincode,"onUpdate:modelValue":l[5]||(l[5]=c=>t.formData.pincode=c),label:"Pincode",placeholder:"658468",type:"number"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.formData.Landmark,"onUpdate:modelValue":l[6]||(l[6]=c=>t.formData.Landmark=c),label:"Landmark",placeholder:"Nr. Wall Street"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.formData.city,"onUpdate:modelValue":l[7]||(l[7]=c=>t.formData.city=c),label:"City",placeholder:"Jackson"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:t.formData.state,"onUpdate:modelValue":l[8]||(l[8]=c=>t.formData.state=c),label:"State",placeholder:"Select State",items:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida"]},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(F,{modelValue:t.formData.defaultAddress,"onUpdate:modelValue":l[9]||(l[9]=c=>t.formData.defaultAddress=c),label:"Use this as default delivery address"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[l[17]||(l[17]=m("p",{class:"text-high-emphasis text-base mb-1"}," Address Type ",-1)),e(N,{modelValue:t.formData.addressType,"onUpdate:modelValue":l[10]||(l[10]=c=>t.formData.addressType=c),inline:""},{default:o(()=>[e(h,{label:"Home (All day delivery)",value:"home",class:"me-3"}),e(h,{label:"Office (Delivery between 10 AM - 5 PM)",value:"work"})]),_:1},8,["modelValue"])]),_:1,__:[17]})]),_:1}),e(k,{class:"my-6"}),l[23]||(l[23]=m("h5",{class:"text-h5 mb-6"}," 2. Delivery Type ",-1)),e(n,{"selected-radio":t.formData.deliveryType,"onUpdate:selectedRadio":l[11]||(l[11]=c=>t.formData.deliveryType=c),"radio-content":t.radioContent,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"]),e(k,{class:"my-6"}),l[24]||(l[24]=m("h5",{class:"text-h5 my-6"}," 3. Apply Promo code ",-1)),m("div",he,[e(r,{modelValue:t.formData.promoCode,"onUpdate:modelValue":l[12]||(l[12]=c=>t.formData.promoCode=c),placeholder:"TAKEITALL"},null,8,["modelValue"]),e(_,null,{default:o(()=>l[18]||(l[18]=[b("Apply")])),_:1,__:[18]})]),m("div",ge,[e(k,{style:{"border-style":"dashed"}}),l[19]||(l[19]=m("span",null,"OR",-1)),e(k,{style:{"border-style":"dashed"}})]),e(ie,{class:"border rounded py-0",lines:"two"},{default:o(()=>[(y(),P(O,null,X(t.promoCodeList,(c,T)=>e(ce,{key:c.code,title:c.code,subtitle:c.desc,class:D(T!==0?"border-t":"")},{append:o(()=>[e(_,{variant:"tonal",class:"ms-4"},{default:o(()=>[...l[20]||(l[20]=[b(" Apply ")])]),_:1,__:[20]})]),_:2},1032,["title","subtitle","class"])),64))]),_:1}),e(k,{class:"my-6"}),l[25]||(l[25]=m("h5",{class:"text-h5 mb-6"}," 4. Payment Method ",-1)),e(N,{modelValue:t.formData.paymentMethod,"onUpdate:modelValue":l[13]||(l[13]=c=>t.formData.paymentMethod=c),inline:"",class:"mb-4"},{default:o(()=>[e(h,{value:"card",label:"Credit/Debit/ATM Card",class:"me-3"}),e(h,{value:"cash-on-delivery",label:"Cash On Delivery"})]),_:1},8,["modelValue"]),G(e(u,null,{default:o(()=>[e(a,{cols:"12"},{default:o(()=>[e(r,{label:"Card Number",placeholder:"1356 3215 6548 7898"})]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{label:"Name",placeholder:"John Doe"})]),_:1}),e(a,{cols:"6",md:"3"},{default:o(()=>[e(r,{label:"Exp. Date",placeholder:"MM/YY"})]),_:1}),e(a,{cols:"6",md:"3"},{default:o(()=>[e(r,{label:"CVV Code",placeholder:"654"})]),_:1})]),_:1},512),[[K,t.formData.paymentMethod==="card"]]),G(m("div",null,l[21]||(l[21]=[m("p",null," Cash on delivery is a mode of payment where you make the payment after the goods/services are received. ",-1),m("p",null,"You can pay cash or make the payment via debit/credit card directly to the delivery person.",-1)]),512),[[K,t.formData.paymentMethod==="cash-on-delivery"]])]),_:1,__:[22,23,24,25]})]),_:1})]),_:1})]),_:1})]),_:1})}const ke=x(we,[["render",Fe],["__scopeId","data-v-b3ee530c"],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-layout/DemoFormLayoutSticky.vue"]]),Ae={__name:"DemoFormLayoutCollapsible",setup(V,{expose:l}){l();const p=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii"],t=d("home"),C=d("standard"),f=d("credit-debit-card"),r=d(0),i={stateList:p,radios:t,deliveryOption:C,paymentMethod:f,panel:r,paymentMethods:[{radioValue:"credit-debit-card",radioLabel:"Credit/Debit/ATM Card",icon:"tabler-credit-card"},{radioValue:"cash-on-delivery",radioLabel:"Cash On Delivery",icon:"tabler-help"}]};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},Te={class:"me-1"},Re={class:"d-flex gap-4"};function Ne(V,l,p,t,C,f){const r=g,s=Q,i=S;return y(),v(pe,{modelValue:t.panel,"onUpdate:modelValue":l[6]||(l[6]=n=>t.panel=n)},{default:o(()=>[e(M,null,{default:o(()=>[e(j,null,{default:o(()=>l[7]||(l[7]=[b("Delivery Address")])),_:1,__:[7]}),e(H,null,{default:o(()=>[e(w,{class:"pt-4 pb-2",onSubmit:A(()=>{},["prevent"])},{default:o(()=>[e(u,null,{default:o(()=>[e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{label:"Full Name",placeholder:"John Doe"})]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{label:"Phone No",type:"number",placeholder:"+1 123 456 7890"})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(s,{label:"Address",placeholder:"1234 Main St, New York, NY 10001, USA",rows:"3"})]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{label:"Pincode",placeholder:"123456",type:"number"})]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{label:"Landmark",placeholder:"Near City Mall"})]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{label:"City",placeholder:"New York"})]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(i,{items:t.stateList,label:"State",placeholder:"Select State"})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(ue,{class:"mb-3"},{default:o(()=>l[8]||(l[8]=[b(" Address Type ")])),_:1,__:[8]}),e(N,{modelValue:t.radios,"onUpdate:modelValue":l[0]||(l[0]=n=>t.radios=n),inline:""},{default:o(()=>[m("div",null,[e(h,{label:"Home (All day delivery)",value:"home",class:"me-3"}),e(h,{label:"Office (Delivery between 10 AM - 5 PM)",value:"office"})])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(M,null,{default:o(()=>[e(j,null,{default:o(()=>l[9]||(l[9]=[b("Delivery Options")])),_:1,__:[9]}),e(H,null,{default:o(()=>[e(N,{modelValue:t.deliveryOption,"onUpdate:modelValue":l[4]||(l[4]=n=>t.deliveryOption=n),class:"delivery-options pt-4 pb-2"},{default:o(()=>[m("div",{class:D(["delivery-option d-flex rounded-t",t.deliveryOption==="standard"?"active":""]),onClick:l[1]||(l[1]=n=>t.deliveryOption="standard")},[e(h,{inline:"",value:"standard",class:"mt-n4"}),l[10]||(l[10]=m("div",{class:"w-100"},[m("div",{class:"d-flex justify-space-between"},[m("h6",{class:"text-base font-weight-medium"}," Standard 3-5 Days "),m("h6",{class:"text-base font-weight-medium"}," Free ")]),m("span",{class:"text-sm"},"Friday, 15 Nov - Monday, 18 Nov")],-1))],2),m("div",{class:D(["delivery-option d-flex",t.deliveryOption==="express"?"active":""]),onClick:l[2]||(l[2]=n=>t.deliveryOption="express")},[e(h,{inline:"",class:"mt-n4",value:"express"}),l[11]||(l[11]=m("div",{class:"w-100"},[m("div",{class:"d-flex justify-space-between"},[m("h5",{class:"text-base font-weight-medium"}," Express "),m("h6",{class:"text-base font-weight-medium"}," $5.00 ")]),m("span",{class:"text-sm"},"Friday, 15 Nov - Sunday, 17 Nov")],-1))],2),m("div",{class:D(["delivery-option d-flex rounded-b",t.deliveryOption==="overnight"?"active":""]),onClick:l[3]||(l[3]=n=>t.deliveryOption="overnight")},[e(h,{inline:"",class:"mt-n4",value:"overnight"}),l[12]||(l[12]=m("div",{class:"w-100"},[m("div",{class:"d-flex justify-space-between"},[m("h6",{class:"text-base font-weight-medium"}," Overnight "),m("h6",{class:"text-base font-weight-medium"}," $10.00 ")]),m("span",{class:"text-sm"},"Friday, 15 Nov - Saturday, 16 Nov")],-1))],2)]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(M,null,{default:o(()=>[e(j,null,{default:o(()=>l[13]||(l[13]=[b("Payment Method")])),_:1,__:[13]}),e(H,null,{default:o(()=>[e(u,null,{default:o(()=>[e(a,{md:"6",cols:"12"},{default:o(()=>[e(w,{class:"pt-4 pb-2"},{default:o(()=>[m("div",null,[e(N,{modelValue:t.paymentMethod,"onUpdate:modelValue":l[5]||(l[5]=n=>t.paymentMethod=n),inline:""},{default:o(()=>[m("div",null,[(y(),P(O,null,X(t.paymentMethods,n=>e(h,{key:n.radioValue,value:n.radioValue,class:"me-3"},{label:o(()=>[m("span",Te,re(n.radioLabel),1),e(ne,{size:"18",icon:n.icon},null,8,["icon"])]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"])]),t.paymentMethod==="credit-debit-card"?(y(),v(u,{key:0},{default:o(()=>[e(a,{cols:"12"},{default:o(()=>[e(r,{label:"Card Number",type:"number",placeholder:"1234 5678 9012 3456"})]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{label:"Name",placeholder:"john doe"})]),_:1}),e(a,{cols:"6",md:"3"},{default:o(()=>[e(r,{label:"Expiry Date",placeholder:"MM/YY"})]),_:1}),e(a,{cols:"6",md:"3"},{default:o(()=>[e(r,{label:"CVV Code",type:"number",max:"3",placeholder:"123"})]),_:1})]),_:1})):(y(),v(u,{key:1},{default:o(()=>[e(a,null,{default:o(()=>l[14]||(l[14]=[m("div",{class:"text-high-emphasis"}," Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. ",-1)])),_:1,__:[14]})]),_:1}))]),_:1})]),_:1})]),_:1}),e(k,{class:"my-5"}),m("div",Re,[e(_,null,{default:o(()=>l[15]||(l[15]=[b("Place Order")])),_:1,__:[15]}),e(_,{color:"secondary",variant:"tonal"},{default:o(()=>l[16]||(l[16]=[b(" Cancel ")])),_:1,__:[16]})])]),_:1})]),_:1})]),_:1},8,["modelValue"])}const Le=x(Ae,[["render",Ne],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-layout/DemoFormLayoutCollapsible.vue"]]),De={__name:"DemoFormLayoutFormWithTabs",setup(V,{expose:l}){l();const p=d("personal-info"),t=d(""),C=d(""),f=d(),r=d(""),s=d(),i=["USA","Canada","UK","Denmark","Germany","Iceland","Israel","Mexico"],n=["English","German","French","Spanish","Portuguese","Russian","Korean"],c=d(""),T=d(""),I=d(""),U=d(""),B=d(""),E=d(""),z=d(""),$=d(""),ee=d(""),le=d(""),oe=d([]),te=d(!1),ae=d(!1),Y={tab:p,firstName:t,lastName:C,country:f,birthDate:r,phoneNo:s,countryList:i,languageList:n,username:c,email:T,password:I,cPassword:U,twitterLink:B,facebookLink:E,googlePlusLink:z,linkedInLink:$,instagramLink:ee,quoraLink:le,languages:oe,isPasswordVisible:te,isCPasswordVisible:ae};return Object.defineProperty(Y,"__isScriptSetup",{enumerable:!1,value:!0}),Y}};function Se(V,l,p,t,C,f){const r=g,s=S,i=Ve;return y(),P(O,null,[e(fe,{modelValue:t.tab,"onUpdate:modelValue":l[0]||(l[0]=n=>t.tab=n)},{default:o(()=>[e(q,{value:"personal-info"},{default:o(()=>l[20]||(l[20]=[b(" Personal Info ")])),_:1,__:[20]}),e(q,{value:"account-details"},{default:o(()=>l[21]||(l[21]=[b(" Account Details ")])),_:1,__:[21]}),e(q,{value:"social-links"},{default:o(()=>l[22]||(l[22]=[b(" Social Links ")])),_:1,__:[22]})]),_:1},8,["modelValue"]),e(Z,{flat:""},{default:o(()=>[e(J,null,{default:o(()=>[e(be,{modelValue:t.tab,"onUpdate:modelValue":l[19]||(l[19]=n=>t.tab=n),class:"disable-tab-transition"},{default:o(()=>[e(W,{value:"personal-info"},{default:o(()=>[e(w,{class:"mt-2"},{default:o(()=>[e(u,null,{default:o(()=>[e(a,{md:"6",cols:"12"},{default:o(()=>[e(r,{modelValue:t.firstName,"onUpdate:modelValue":l[1]||(l[1]=n=>t.firstName=n),label:"First name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(a,{md:"6",cols:"12"},{default:o(()=>[e(r,{modelValue:t.lastName,"onUpdate:modelValue":l[2]||(l[2]=n=>t.lastName=n),label:"Last name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{modelValue:t.country,"onUpdate:modelValue":l[3]||(l[3]=n=>t.country=n),items:t.countryList,label:"Country",placeholder:"Select Country"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{modelValue:t.languages,"onUpdate:modelValue":l[4]||(l[4]=n=>t.languages=n),items:t.languageList,multiple:"",chips:"",clearable:"",label:"Language",placeholder:"Select Language"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:t.birthDate,"onUpdate:modelValue":l[5]||(l[5]=n=>t.birthDate=n),label:"Birth Date",placeholder:"Select Birth Date"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.phoneNo,"onUpdate:modelValue":l[6]||(l[6]=n=>t.phoneNo=n),type:"number",label:"Phone No.",placeholder:"+1 123 456 7890"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(W,{value:"account-details"},{default:o(()=>[e(w,{class:"mt-2"},{default:o(()=>[e(u,null,{default:o(()=>[e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.username,"onUpdate:modelValue":l[7]||(l[7]=n=>t.username=n),label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.email,"onUpdate:modelValue":l[8]||(l[8]=n=>t.email=n),label:"Email",suffix:"@example.com",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.password,"onUpdate:modelValue":l[9]||(l[9]=n=>t.password=n),label:"Password",placeholder:"············",type:t.isPasswordVisible?"text":"password",autocomplete:"password","append-inner-icon":t.isPasswordVisible?"tabler-eye-off":"tabler-eye","onClick:appendInner":l[10]||(l[10]=n=>t.isPasswordVisible=!t.isPasswordVisible)},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.cPassword,"onUpdate:modelValue":l[11]||(l[11]=n=>t.cPassword=n),label:"Confirm Password",autocomplete:"confirm-password",placeholder:"············",type:t.isCPasswordVisible?"text":"password","append-inner-icon":t.isCPasswordVisible?"tabler-eye-off":"tabler-eye","onClick:appendInner":l[12]||(l[12]=n=>t.isCPasswordVisible=!t.isCPasswordVisible)},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(W,{value:"social-links"},{default:o(()=>[e(w,{class:"mt-2"},{default:o(()=>[e(u,null,{default:o(()=>[e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.twitterLink,"onUpdate:modelValue":l[13]||(l[13]=n=>t.twitterLink=n),label:"Twitter",placeholder:"https://twitter.com/username"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.facebookLink,"onUpdate:modelValue":l[14]||(l[14]=n=>t.facebookLink=n),label:"Facebook",placeholder:"https://facebook.com/username"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.googlePlusLink,"onUpdate:modelValue":l[15]||(l[15]=n=>t.googlePlusLink=n),label:"Google+",placeholder:"https://plus.google.com/username"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.linkedInLink,"onUpdate:modelValue":l[16]||(l[16]=n=>t.linkedInLink=n),label:"LinkedIn",placeholder:"https://linkedin.com/username"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.instagramLink,"onUpdate:modelValue":l[17]||(l[17]=n=>t.instagramLink=n),label:"Instagram",placeholder:"https://instagram.com/username"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.quoraLink,"onUpdate:modelValue":l[18]||(l[18]=n=>t.quoraLink=n),label:"Quora",placeholder:"https://quora.com/username"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(k),e(J,{class:"d-flex gap-4"},{default:o(()=>[e(_,null,{default:o(()=>l[23]||(l[23]=[b("Submit")])),_:1,__:[23]}),e(_,{color:"secondary",variant:"tonal"},{default:o(()=>l[24]||(l[24]=[b(" Cancel ")])),_:1,__:[24]})]),_:1})]),_:1})],64)}const Pe=x(De,[["render",Se],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-layout/DemoFormLayoutFormWithTabs.vue"]]),Ie={__name:"DemoFormLayoutFormValidation",setup(V,{expose:l}){l();const p=d(""),t=d(""),C=["Item 1","Item 2","Item 3","Item 4"],f=d(),r=d(!1),s=d(),i={name:p,email:t,items:C,select:f,checkbox:r,form:s};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function Ue(V,l,p,t,C,f){const r=g,s=S;return y(),v(w,{ref:"form","lazy-validation":""},{default:o(()=>[e(u,null,{default:o(()=>[e(a,{cols:"12"},{default:o(()=>[e(r,{modelValue:t.name,"onUpdate:modelValue":l[0]||(l[0]=i=>t.name=i),rules:["requiredValidator"in V?V.requiredValidator:R(L)],label:"Name",placeholder:"John Doe",required:""},null,8,["modelValue","rules"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(r,{modelValue:t.email,"onUpdate:modelValue":l[1]||(l[1]=i=>t.email=i),rules:["emailValidator"in V?V.emailValidator:R(Ce),"requiredValidator"in V?V.requiredValidator:R(L)],label:"E-mail",placeholder:"johndoe@email.com",required:""},null,8,["modelValue","rules"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(s,{modelValue:t.select,"onUpdate:modelValue":l[2]||(l[2]=i=>t.select=i),items:t.items,rules:["requiredValidator"in V?V.requiredValidator:R(L)],placeholder:"Select an Item",label:"Item",name:"select",require:""},null,8,["modelValue","rules"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(F,{modelValue:t.checkbox,"onUpdate:modelValue":l[3]||(l[3]=i=>t.checkbox=i),rules:["requiredValidator"in V?V.requiredValidator:R(L)],label:"Do you agree?",required:""},null,8,["modelValue","rules"])]),_:1}),e(a,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:o(()=>[e(_,{color:"success",onClick:l[4]||(l[4]=i=>{var n;return(n=t.form)==null?void 0:n.validate()})},{default:o(()=>l[7]||(l[7]=[b(" Validate ")])),_:1,__:[7]}),e(_,{color:"error",onClick:l[5]||(l[5]=i=>{var n;return(n=t.form)==null?void 0:n.reset()})},{default:o(()=>l[8]||(l[8]=[b(" Reset Form ")])),_:1,__:[8]}),e(_,{color:"warning",onClick:l[6]||(l[6]=i=>{var n;return(n=t.form)==null?void 0:n.resetValidation()})},{default:o(()=>l[9]||(l[9]=[b(" Reset Validation ")])),_:1,__:[9]})]),_:1})]),_:1})]),_:1},512)}const Be=x(Ie,[["render",Ue],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-layout/DemoFormLayoutFormValidation.vue"]]),Ee={__name:"DemoFormLayoutFormHint",setup(V,{expose:l}){l();const p=d(""),t=d(""),C=d(),f=d(!1),r=["foo","bar","fizz","buzz"],s=d([]),i={username:p,email:t,password:C,checkbox:f,items:r,values:s};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function ze(V,l,p,t,C,f){const r=g,s=_e;return y(),v(w,{onSubmit:A(()=>{},["prevent"])},{default:o(()=>[e(u,null,{default:o(()=>[e(a,{cols:"12"},{default:o(()=>[e(r,{modelValue:t.username,"onUpdate:modelValue":l[0]||(l[0]=i=>t.username=i),label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(r,{modelValue:t.email,"onUpdate:modelValue":l[1]||(l[1]=i=>t.email=i),label:"Email",type:"email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(r,{modelValue:t.password,"onUpdate:modelValue":l[2]||(l[2]=i=>t.password=i),label:"Password",autocomplete:"on",type:"password","persistent-hint":"",placeholder:"············",hint:"Your password must be 8-20 characters long."},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(s,{modelValue:t.values,"onUpdate:modelValue":l[3]||(l[3]=i=>t.values=i),items:t.items,chips:"",multiple:"",label:"Autocomplete",placeholder:"Select"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(F,{modelValue:t.checkbox,"onUpdate:modelValue":l[4]||(l[4]=i=>t.checkbox=i),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",class:"d-flex gap-4"},{default:o(()=>[e(_,{type:"submit"},{default:o(()=>l[5]||(l[5]=[b(" Submit ")])),_:1,__:[5]}),e(_,{color:"secondary",type:"reset",variant:"tonal"},{default:o(()=>l[6]||(l[6]=[b(" Reset ")])),_:1,__:[6]})]),_:1})]),_:1})]),_:1})}const Me=x(Ee,[["render",ze],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-layout/DemoFormLayoutFormHint.vue"]]),je={__name:"DemoFormLayoutMultipleColumn",setup(V,{expose:l}){l();const p=d(""),t=d(""),C=d(""),f=d(""),r=d(""),s=d(""),i=d(!1),n={firstName:p,lastName:t,city:C,country:f,company:r,email:s,checkbox:i};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function He(V,l,p,t,C,f){const r=g;return y(),v(w,{onSubmit:A(()=>{},["prevent"])},{default:o(()=>[e(u,null,{default:o(()=>[e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.firstName,"onUpdate:modelValue":l[0]||(l[0]=s=>t.firstName=s),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.lastName,"onUpdate:modelValue":l[1]||(l[1]=s=>t.lastName=s),label:"Last Name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.email,"onUpdate:modelValue":l[2]||(l[2]=s=>t.email=s),label:"Email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.city,"onUpdate:modelValue":l[3]||(l[3]=s=>t.city=s),label:"City",placeholder:"New York"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.country,"onUpdate:modelValue":l[4]||(l[4]=s=>t.country=s),label:"Country",placeholder:"United States"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{modelValue:t.company,"onUpdate:modelValue":l[5]||(l[5]=s=>t.company=s),label:"Company",placeholder:"Pixinvent"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(F,{modelValue:t.checkbox,"onUpdate:modelValue":l[6]||(l[6]=s=>t.checkbox=s),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",class:"d-flex gap-4"},{default:o(()=>[e(_,{type:"submit"},{default:o(()=>l[7]||(l[7]=[b(" Submit ")])),_:1,__:[7]}),e(_,{type:"reset",color:"secondary",variant:"tonal"},{default:o(()=>l[8]||(l[8]=[b(" Reset ")])),_:1,__:[8]})]),_:1})]),_:1})]),_:1})}const qe=x(je,[["render",He],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-layout/DemoFormLayoutMultipleColumn.vue"]]),We={__name:"DemoFormLayoutVerticalFormWithIcons",setup(V,{expose:l}){l();const p=d(""),t=d(""),C=d(),f=d(),r=d(!1),s={firstName:p,email:t,mobile:C,password:f,checkbox:r};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function Je(V,l,p,t,C,f){const r=g;return y(),v(w,{onSubmit:A(s=>({}),["prevent"])},{default:o(()=>[e(u,null,{default:o(()=>[e(a,{cols:"12"},{default:o(()=>[e(r,{modelValue:t.firstName,"onUpdate:modelValue":l[0]||(l[0]=s=>t.firstName=s),"prepend-inner-icon":"tabler-user",label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(r,{modelValue:t.email,"onUpdate:modelValue":l[1]||(l[1]=s=>t.email=s),"prepend-inner-icon":"tabler-mail",label:"Email",type:"email",placeholder:"johndoe@example.com"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(r,{modelValue:t.mobile,"onUpdate:modelValue":l[2]||(l[2]=s=>t.mobile=s),"prepend-inner-icon":"tabler-device-mobile",label:"Mobile",placeholder:"+1 123 456 7890",type:"number"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(r,{modelValue:t.password,"onUpdate:modelValue":l[3]||(l[3]=s=>t.password=s),"prepend-inner-icon":"tabler-lock",label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(F,{modelValue:t.checkbox,"onUpdate:modelValue":l[4]||(l[4]=s=>t.checkbox=s),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(_,{type:"submit",class:"me-2"},{default:o(()=>l[5]||(l[5]=[b(" Submit ")])),_:1,__:[5]}),e(_,{color:"secondary",type:"reset",variant:"tonal"},{default:o(()=>l[6]||(l[6]=[b(" Reset ")])),_:1,__:[6]})]),_:1})]),_:1})]),_:1})}const Oe=x(We,[["render",Je],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-layout/DemoFormLayoutVerticalFormWithIcons.vue"]]),Ye={__name:"DemoFormLayoutVerticalForm",setup(V,{expose:l}){l();const p=d(""),t=d(""),C=d(),f=d(),r=d(!1),s={firstName:p,email:t,mobile:C,password:f,checkbox:r};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function Ge(V,l,p,t,C,f){const r=g;return y(),v(w,{onSubmit:A(()=>{},["prevent"])},{default:o(()=>[e(u,null,{default:o(()=>[e(a,{cols:"12"},{default:o(()=>[e(r,{modelValue:t.firstName,"onUpdate:modelValue":l[0]||(l[0]=s=>t.firstName=s),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(r,{modelValue:t.email,"onUpdate:modelValue":l[1]||(l[1]=s=>t.email=s),label:"Email",type:"email",placeholder:"johndoe@example.com"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(r,{modelValue:t.mobile,"onUpdate:modelValue":l[2]||(l[2]=s=>t.mobile=s),label:"Mobile",placeholder:"+1 123 456 7890",type:"number"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(r,{modelValue:t.password,"onUpdate:modelValue":l[3]||(l[3]=s=>t.password=s),label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(F,{modelValue:t.checkbox,"onUpdate:modelValue":l[4]||(l[4]=s=>t.checkbox=s),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",class:"d-flex gap-4"},{default:o(()=>[e(_,{type:"submit"},{default:o(()=>l[5]||(l[5]=[b(" Submit ")])),_:1,__:[5]}),e(_,{type:"reset",color:"secondary",variant:"tonal"},{default:o(()=>l[6]||(l[6]=[b(" Reset ")])),_:1,__:[6]})]),_:1})]),_:1})]),_:1})}const Ke=x(Ye,[["render",Ge],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-layout/DemoFormLayoutVerticalForm.vue"]]),Qe={__name:"DemoFormLayoutHorizontalFormWithIcons",setup(V,{expose:l}){l();const p=d(""),t=d(""),C=d(),f=d(),r=d(!1),s={firstName:p,email:t,mobile:C,password:f,checkbox:r};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function Xe(V,l,p,t,C,f){const r=g;return y(),v(w,{onSubmit:A(()=>{},["prevent"])},{default:o(()=>[e(u,null,{default:o(()=>[e(a,{cols:"12"},{default:o(()=>[e(u,{"no-gutters":""},{default:o(()=>[e(a,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:o(()=>l[5]||(l[5]=[m("label",{class:"v-label text-body-2 text-high-emphasis",for:"firstNameHorizontalIcons"},"First Name",-1)])),_:1,__:[5]}),e(a,{cols:"12",md:"9"},{default:o(()=>[e(r,{id:"firstNameHorizontalIcons",modelValue:t.firstName,"onUpdate:modelValue":l[0]||(l[0]=s=>t.firstName=s),"prepend-inner-icon":"tabler-user",placeholder:"John","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(u,{"no-gutters":""},{default:o(()=>[e(a,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:o(()=>l[6]||(l[6]=[m("label",{class:"v-label text-body-2 text-high-emphasis",for:"emailHorizontalIcons"},"Email",-1)])),_:1,__:[6]}),e(a,{cols:"12",md:"9"},{default:o(()=>[e(r,{id:"emailHorizontalIcons",modelValue:t.email,"onUpdate:modelValue":l[1]||(l[1]=s=>t.email=s),"prepend-inner-icon":"tabler-mail",placeholder:"johndoe@email.com","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(u,{"no-gutters":""},{default:o(()=>[e(a,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:o(()=>l[7]||(l[7]=[m("label",{class:"v-label text-body-2 text-high-emphasis",for:"mobileHorizontalIcons"},"Mobile",-1)])),_:1,__:[7]}),e(a,{cols:"12",md:"9"},{default:o(()=>[e(r,{id:"mobileHorizontalIcons",modelValue:t.mobile,"onUpdate:modelValue":l[2]||(l[2]=s=>t.mobile=s),type:"number","prepend-inner-icon":"tabler-device-mobile",placeholder:"+1 123 456 7890","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(u,{"no-gutters":""},{default:o(()=>[e(a,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:o(()=>l[8]||(l[8]=[m("label",{class:"v-label text-body-2 text-high-emphasis",for:"passwordHorizontalIcons"},"Password",-1)])),_:1,__:[8]}),e(a,{cols:"12",md:"9"},{default:o(()=>[e(r,{id:"passwordHorizontalIcons",modelValue:t.password,"onUpdate:modelValue":l[3]||(l[3]=s=>t.password=s),"prepend-inner-icon":"tabler-lock",autocomplete:"on",type:"password",placeholder:"············","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(u,{"no-gutters":""},{default:o(()=>[e(a,{cols:"12",md:"3"}),e(a,{cols:"12",md:"9"},{default:o(()=>[e(F,{modelValue:t.checkbox,"onUpdate:modelValue":l[4]||(l[4]=s=>t.checkbox=s),label:"Remember me"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(u,{"no-gutters":""},{default:o(()=>[e(a,{cols:"12",md:"3"}),e(a,{cols:"12",md:"9"},{default:o(()=>[e(_,{type:"submit",class:"me-4"},{default:o(()=>l[9]||(l[9]=[b(" Submit ")])),_:1,__:[9]}),e(_,{color:"secondary",variant:"tonal",type:"reset"},{default:o(()=>l[10]||(l[10]=[b(" Reset ")])),_:1,__:[10]})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Ze=x(Qe,[["render",Xe],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-layout/DemoFormLayoutHorizontalFormWithIcons.vue"]]),$e={__name:"DemoFormLayoutHorizontalForm",setup(V,{expose:l}){l();const p=d(""),t=d(""),C=d(),f=d(),r=d(!1),s={firstName:p,email:t,mobile:C,password:f,checkbox:r};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function el(V,l,p,t,C,f){const r=g;return y(),v(w,{onSubmit:A(()=>{},["prevent"])},{default:o(()=>[e(u,null,{default:o(()=>[e(a,{cols:"12"},{default:o(()=>[e(u,{"no-gutters":""},{default:o(()=>[e(a,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:o(()=>l[5]||(l[5]=[m("label",{class:"v-label text-body-2 text-high-emphasis",for:"firstName"},"First Name",-1)])),_:1,__:[5]}),e(a,{cols:"12",md:"9"},{default:o(()=>[e(r,{id:"firstName",modelValue:t.firstName,"onUpdate:modelValue":l[0]||(l[0]=s=>t.firstName=s),placeholder:"John","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(u,{"no-gutters":""},{default:o(()=>[e(a,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:o(()=>l[6]||(l[6]=[m("label",{class:"v-label text-body-2 text-high-emphasis",for:"email"},"Email",-1)])),_:1,__:[6]}),e(a,{cols:"12",md:"9"},{default:o(()=>[e(r,{id:"email",modelValue:t.email,"onUpdate:modelValue":l[1]||(l[1]=s=>t.email=s),placeholder:"johndoe@email.com","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(u,{"no-gutters":""},{default:o(()=>[e(a,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:o(()=>l[7]||(l[7]=[m("label",{class:"v-label text-body-2 text-high-emphasis",for:"mobile"},"Mobile",-1)])),_:1,__:[7]}),e(a,{cols:"12",md:"9"},{default:o(()=>[e(r,{id:"mobile",modelValue:t.mobile,"onUpdate:modelValue":l[2]||(l[2]=s=>t.mobile=s),type:"number",placeholder:"+1 123 456 7890","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(u,{"no-gutters":""},{default:o(()=>[e(a,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:o(()=>l[8]||(l[8]=[m("label",{class:"v-label text-body-2 text-high-emphasis",for:"password"},"Password",-1)])),_:1,__:[8]}),e(a,{cols:"12",md:"9"},{default:o(()=>[e(r,{id:"password",modelValue:t.password,"onUpdate:modelValue":l[3]||(l[3]=s=>t.password=s),autocomplete:"on",type:"password",placeholder:"············","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(u,{"no-gutters":""},{default:o(()=>[e(a,{cols:"12",md:"3"}),e(a,{cols:"12",md:"9"},{default:o(()=>[e(F,{modelValue:t.checkbox,"onUpdate:modelValue":l[4]||(l[4]=s=>t.checkbox=s),label:"Remember me"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(u,{"no-gutters":""},{default:o(()=>[e(a,{cols:"12",md:"3"}),e(a,{cols:"12",md:"9"},{default:o(()=>[e(_,{type:"submit",class:"me-4"},{default:o(()=>l[9]||(l[9]=[b(" Submit ")])),_:1,__:[9]}),e(_,{color:"secondary",variant:"tonal",type:"reset"},{default:o(()=>l[10]||(l[10]=[b(" Reset ")])),_:1,__:[10]})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const ll=x($e,[["render",el],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-layout/DemoFormLayoutHorizontalForm.vue"]]),ol={ts:`<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <AppTextField
          v-model="username"
          label="Username"
          placeholder="Johndoe"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          persistent-hint
          placeholder="············"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
          placeholder="Select"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)

const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <AppTextField
          v-model="username"
          label="Username"
          placeholder="Johndoe"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          persistent-hint
          placeholder="············"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
          placeholder="Select"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},tl={ts:`<script lang="ts" setup>
import type { VForm } from 'vuetify/components/VForm'

const name = ref('')
const email = ref('')
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'] as const
const select = ref<typeof items[number]>()
const checkbox = ref(false)
const form = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          placeholder="John Doe"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          placeholder="johndoe@email.com"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          placeholder="Select an Item"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const name = ref('')
const email = ref('')

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]

const select = ref()
const checkbox = ref(false)
const form = ref()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          placeholder="John Doe"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          placeholder="johndoe@email.com"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          placeholder="Select an Item"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},al={ts:`<script lang="ts" setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref<number>()
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico']
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean'] as const
const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref<typeof languageList[number][]>([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="firstName"
                  label="First name"
                  placeholder="John"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="lastName"
                  label="Last name"
                  placeholder="Doe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                  placeholder="Select Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                  placeholder="Select Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppDateTimePicker
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="Select Birth Date"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                  placeholder="+1 123 456 7890"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="username"
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="twitterLink"
                  label="Twitter"
                  placeholder="https://twitter.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="facebookLink"
                  label="Facebook"
                  placeholder="https://facebook.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="googlePlusLink"
                  label="Google+"
                  placeholder="https://plus.google.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                  placeholder="https://linkedin.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="instagramLink"
                  label="Instagram"
                  placeholder="https://instagram.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="quoraLink"
                  label="Quora"
                  placeholder="https://quora.com/username"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref()

const countryList = [
  'USA',
  'Canada',
  'UK',
  'Denmark',
  'Germany',
  'Iceland',
  'Israel',
  'Mexico',
]

const languageList = [
  'English',
  'German',
  'French',
  'Spanish',
  'Portuguese',
  'Russian',
  'Korean',
]

const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="firstName"
                  label="First name"
                  placeholder="John"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="lastName"
                  label="Last name"
                  placeholder="Doe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                  placeholder="Select Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                  placeholder="Select Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppDateTimePicker
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="Select Birth Date"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                  placeholder="+1 123 456 7890"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="username"
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="twitterLink"
                  label="Twitter"
                  placeholder="https://twitter.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="facebookLink"
                  label="Facebook"
                  placeholder="https://facebook.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="googlePlusLink"
                  label="Google+"
                  placeholder="https://plus.google.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                  placeholder="https://linkedin.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="instagramLink"
                  label="Instagram"
                  placeholder="https://instagram.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="quoraLink"
                  label="Quora"
                  placeholder="https://quora.com/username"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},sl={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="firstName"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="email"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="email"
              v-model="email"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="password"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="password"
              v-model="password"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VBtn
              type="submit"
              class="me-4"
            >
              Submit
            </VBtn>
            <VBtn
              color="secondary"
              variant="tonal"
              type="reset"
            >
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="firstName"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="email"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="email"
              v-model="email"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="password"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="password"
              v-model="password"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VBtn
              type="submit"
              class="me-4"
            >
              Submit
            </VBtn>
            <VBtn
              color="secondary"
              variant="tonal"
              type="reset"
            >
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VForm>
</template>
`},rl={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstNameHorizontalIcons"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="emailHorizontalIcons"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobileHorizontalIcons"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="passwordHorizontalIcons"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VBtn
              type="submit"
              class="me-4"
            >
              Submit
            </VBtn>
            <VBtn
              color="secondary"
              variant="tonal"
              type="reset"
            >
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstNameHorizontalIcons"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="emailHorizontalIcons"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobileHorizontalIcons"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="passwordHorizontalIcons"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VBtn
              type="submit"
              class="me-4"
            >
              Submit
            </VBtn>
            <VBtn
              color="secondary"
              variant="tonal"
              type="reset"
            >
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VForm>
</template>
`},nl={ts:`<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="City"
          placeholder="New York"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="country"
          label="Country"
          placeholder="United States"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Company"
          placeholder="Pixinvent"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="City"
          placeholder="New York"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="country"
          label="Country"
          placeholder="United States"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Company"
          placeholder="Pixinvent"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},dl={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},ml={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},il={__name:"form-layouts",setup(V,{expose:l}){l();const p={get formHint(){return ol},get formValidation(){return tl},get formWithTabs(){return al},get horizontalForm(){return sl},get horizontalFormWithIcons(){return rl},get multipleColumn(){return nl},get verticalForm(){return dl},get verticalFormWithIcons(){return ml}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function cl(V,l,p,t,C,f){const r=ll,s=ye,i=Ze,n=Ke,c=Oe,T=qe,I=Me,U=Be,B=Pe,E=Le,z=ke;return y(),P("div",null,[e(u,null,{default:o(()=>[e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Horizontal Form",code:t.horizontalForm},{default:o(()=>[e(r)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Horizontal Form with Icons",code:t.horizontalFormWithIcons},{default:o(()=>[e(i)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Vertical Form",code:t.verticalForm},{default:o(()=>[e(n)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Vertical Form with Icons",code:t.verticalFormWithIcons},{default:o(()=>[e(c)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(s,{title:"Multiple Column",code:t.multipleColumn},{default:o(()=>[e(T)]),_:1},8,["code"])]),_:1})]),_:1}),e(u,{class:"match-height my-3"},{default:o(()=>[e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Form Hint",code:t.formHint},{default:o(()=>[e(I)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Form Validation",code:t.formValidation},{default:o(()=>[e(U)]),_:1},8,["code"])]),_:1})]),_:1}),e(u,null,{default:o(()=>[e(a,{cols:"12"},{default:o(()=>[e(s,{title:"Form with Tabs","no-padding":"",code:t.formWithTabs},{default:o(()=>[e(B)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[l[0]||(l[0]=m("h6",{class:"text-h6 mb-6"}," Collapsible Section ",-1)),e(E)]),_:1,__:[0]}),e(a,{cols:"12"},{default:o(()=>[l[1]||(l[1]=m("h6",{class:"text-h6 mb-6"}," Sticky Section ",-1)),e(z)]),_:1,__:[1]})]),_:1})])}const ao=x(il,[["render",cl],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/form-layouts.vue"]]);export{ao as default};
