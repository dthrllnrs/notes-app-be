"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[879],{7879:(t,a,e)=>{e.r(a),e.d(a,{default:()=>i});var s=e(9470);const o={data:function(){return{payload:{email:"",password:""}}},methods:{login:function(){var t=this;s.N.$emit("showLoading"),this.$store.dispatch("auth/login",this.payload).then((function(){t.$router.replace({path:"/"})})).catch((function(t){console.log(t)})).finally((function(){s.N.$emit("hideLoading")}))},checkAuth:function(){this.$store.dispatch("auth/check")}}};const i=(0,e(1900).Z)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-row",[e("b-col",{attrs:{cols:"12",md:"4"}},[e("b-card",{staticClass:"text-center",attrs:{"bg-variant":"light",header:"Login"}},[e("b-form",{staticClass:"text-left"},[e("b-form-group",{attrs:{label:"Email:"}},[e("b-form-input",{attrs:{required:"",type:"email"},model:{value:t.payload.email,callback:function(a){t.$set(t.payload,"email",a)},expression:"payload.email"}})],1),t._v(" "),e("b-form-group",{attrs:{label:"Password"}},[e("b-form-input",{attrs:{required:"",type:"password"},model:{value:t.payload.password,callback:function(a){t.$set(t.payload,"password",a)},expression:"payload.password"}})],1),t._v(" "),e("div",{staticClass:"text-center"},[e("b-button",{staticClass:"w-50",attrs:{type:"submit",variant:"info",size:"sm"},on:{click:t.login}},[t._v("Login")])],1)],1),t._v(" "),e("div",{staticClass:"text-center mt-3 pt-3 border-top"},[e("b-button",{staticClass:"w-50",attrs:{variant:"info",size:"sm",href:"/register"}},[t._v("Create New Account")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);