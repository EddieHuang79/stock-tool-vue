(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc833"],{"4df3":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"animated fadeIn"},[e("basic-form",{ref:"basicForm",attrs:{page:"stock",title:t.txt.CreateAccountBtn,setting:t.data,"data-item":t.serviceList,"default-data":t.dataSchema},on:{senddata:t.submitForm}})],1)},o=[],r=(e("7f7f"),e("5176")),n=e.n(r),i=e("e814"),d=e.n(i),p=e("acf7"),c=e("90ce"),f=e("1109"),h=e("bc3a"),m=e.n(h),u={name:"CreateUser",components:{BasicForm:p["a"]},mounted:function(){this.loadData()},data:function(){return{txt:c["a"],data:f["c"],serviceList:[],dataSchema:{}}},methods:{loadData:function(){var t=this;if("undefined"!==typeof this.$route.params.id){var a=d()(this.$route.params.id);m.a.get(this.$root.$refs.app.serverURL+"/stock/"+a+"?_token="+this.$root.$refs.app.token).then(function(a){!1===a.data.error?t.dataSchema=n()({},a.data.data):(t.$root.$refs.app.$refs.SystemMessage.showModal(2,a.data.msg),t.$router.push({path:"/login"}))})}else for(var e in this.data)this.$set(this.dataSchema,this.data[e].key,this.data[e].value)},submitForm:function(){var t,a,e,s,o=this;t=new FormData,a=this.$refs.basicForm.data,e="undefined"!==typeof this.$route.params.id?this.$route.params.id:"",s="undefined"!==typeof this.$route.params.id?this.$root.$refs.app.serverURL+"/stock/"+this.$route.params.id:this.$root.$refs.app.serverURL+"/stock",t.append("code",a.code),t.append("name",a.name),t.append("_token",this.$root.$refs.app.token),""!==e&&t.append("_method","patch"),m.a.post(s,t).then(function(t){!0===t.data.error?o.$root.$refs.app.$refs.SystemMessage.showModal(2,t.data.msg):(o.$root.$refs.app.$refs.SystemMessage.showModal(1,t.data.msg),o.$root.$refs.app.$refs.SystemMessage.hideModal(),o.$router.push({path:"/stock"}))})}}},$=u,l=e("2877"),k=Object(l["a"])($,s,o,!1,null,null,null);a["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d0cc833.80afb07d.js.map