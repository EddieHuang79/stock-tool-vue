(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2137a2"],{ad9b:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"animated fadeIn"},[e("basic-form",{ref:"basicForm",attrs:{page:"users",title:a.txt.CreateAccountBtn,setting:a.data,"data-item":a.serviceList,"default-data":a.dataSchema},on:{senddata:a.submitForm}})],1)},r=[],o=e("5176"),i=e.n(o),n=e("e814"),d=e.n(n),p=e("acf7"),h=e("90ce"),u=e("1109"),f=e("bc3a"),$=e.n(f),c={name:"CreateUser",components:{BasicForm:p["a"]},mounted:function(){this.loadData(),this.CreateSchema()},data:function(){return{txt:h["a"],data:u["b"],serviceList:[],dataSchema:{}}},methods:{loadData:function(){var a=this;this.$root.$refs.app.showLoadingPage(),$.a.get(this.$root.$refs.app.serverURL+"/service?_token="+this.$root.$refs.app.token).then(function(t){a.$root.$refs.app.closeLoadingPage(),!1===t.data.error?a.serviceList=t.data.data:(a.$root.$refs.app.$refs.SystemMessage.showModal(2,t.data.msg),a.$router.push({path:"/login"}))})},CreateSchema:function(){var a=this;if("undefined"!==typeof this.$route.params.id){var t=d()(this.$route.params.id);$.a.get(this.$root.$refs.app.serverURL+"/user/"+t+"?_token="+this.$root.$refs.app.token).then(function(t){!1===t.data.error?a.dataSchema=i()({},t.data.data):(a.$root.$refs.app.$refs.SystemMessage.showModal(2,t.data.msg),a.$router.push({path:"/login"}))})}else for(var e in this.data)this.$set(this.dataSchema,this.data[e].key,this.data[e].value)},submitForm:function(){var a,t,e,s,r=this;for(var o in a=new FormData,t=this.$refs.basicForm.data,e="undefined"!==typeof this.$route.params.id?this.$route.params.id:"",s="undefined"!==typeof this.$route.params.id?this.$root.$refs.app.serverURL+"/user/"+this.$route.params.id:this.$root.$refs.app.serverURL+"/user",a.append("account",t.account),a.append("password",t.password),a.append("email",t.email),a.append("status",t.status),a.append("_token",this.$root.$refs.app.token),t.auth)a.append("auth["+o+"]",t.auth[o]);""!==e&&a.append("_method","patch"),$.a.post(s,a).then(function(a){!0===a.data.error?r.$root.$refs.app.$refs.SystemMessage.showModal(2,a.data.msg):(r.$root.$refs.app.$refs.SystemMessage.showModal(2,a.data.msg),r.$root.$refs.app.$refs.SystemMessage.hideModal(),r.$router.push({path:"/users"}))})}}},m=c,l=e("2877"),g=Object(l["a"])(m,s,r,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d2137a2.8e8ef948.js.map