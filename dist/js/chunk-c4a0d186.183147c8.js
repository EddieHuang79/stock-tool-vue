(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4a0d186"],{"0234":function(e,t,r){"use strict";function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.pushParams=s,t.popParams=c,t.withParams=p,t._setTarget=t.target=void 0;var o=[],u=null;t.target=u;var l=function(e){t.target=u=e};function s(){null!==u&&o.push(u),t.target=u={}}function c(){var e=u,r=t.target=u=o.pop()||null;return r&&(Array.isArray(r.$sub)||(r.$sub=[]),r.$sub.push(e)),e}function f(e){if("object"!==i(e)||Array.isArray(e))throw new Error("params must be an object");t.target=u=n({},u,e)}function d(e,t){return y(function(r){return function(){r(e);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t.apply(this,a)}})}function y(e){var t=e(f);return function(){s();try{for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(this,r)}finally{c()}}}function p(e,t){return"object"===i(e)&&void 0!==t?d(e,t):y(e)}t._setTarget=l},"0fc9":function(e,t,r){var n=r("3a38"),a=Math.max,i=Math.min;e.exports=function(e,t){return e=n(e),e<0?a(e+t,0):i(e,t)}},1109:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a}),r.d(t,"d",function(){return i}),r.d(t,"c",function(){return o});var n={account:{text:"帳號",value:"account",class:"subheading grey--text text--darken-1",sortable:!0,type:1,display:!0},email:{text:"E-mail",value:"email",class:"subheading grey--text text--darken-1",sortable:!0,type:1,display:!0},auth:{text:"權限",value:"auth",class:"subheading grey--text text--darken-1",sortable:!1,type:5,display:!1},status:{text:"狀態",value:"status",class:"subheading grey--text text--darken-1",sortable:!1,type:1,display:!0},button:{text:"功能",value:"button",class:"subheading grey--text text--darken-1",sortable:!1,type:4,display:!0}},a=[{key:"account",title:"帳號",type:1,desc:"至少4碼",class:[],value:"",placeholder:"請輸入帳號"},{key:"password",title:"密碼",type:7,desc:"需包含大小寫英文+數字, 至少8碼",class:[],value:"",placeholder:"請輸入密碼"},{key:"email",title:"E-mail",type:1,desc:"Email格式錯誤",class:[],value:"",placeholder:"請輸入E-mail"},{key:"auth",title:"權限",type:6,desc:"至少勾選一組權限",class:[],value:[],data:[]},{key:"status",title:"狀態",type:3,desc:"",class:[],value:1,placeholder:"請選擇狀態",data:[{text:"啟用",value:1},{text:"停用",value:2}]}],i={code:{text:"股票代號",value:"code",class:"subheading grey--text text--darken-1",sortable:!0,type:1,display:!0},name:{text:"股票名稱",value:"name",class:"subheading grey--text text--darken-1",sortable:!0,type:1,display:!0},first_data:{text:"資料起始日期",value:"first_data",class:"subheading grey--text text--darken-1",sortable:!0,type:1,display:!0},last_updated:{text:"最後更新日期",value:"last_updated",class:"subheading grey--text text--darken-1",sortable:!0,type:1,display:!0},button:{text:"功能",value:"button",class:"subheading grey--text text--darken-1",sortable:!1,type:7,display:!0}},o=[{key:"code",title:"股票代號",type:1,desc:"",class:[],value:"",placeholder:"請輸入股票代號"},{key:"name",title:"股票名稱",type:1,desc:"",class:[],value:"",placeholder:"請輸入股票名稱"}]},1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("integer",/^-?[0-9]*$/);t.default=a},1691:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1dce":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vuelidate=z,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return a.withParams}}),t.default=t.validationMixin=void 0;var n=r("fbf4"),a=r("0234");function i(e){return l(e)||u(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function l(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){c(e,t,r[t])})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}var d=function(){return null},y=function(e,t,r){return e.reduce(function(e,n){return e[r?r(n):n]=t(n),e},{})};function p(e){return"function"===typeof e}function b(e){return null!==e&&("object"===f(e)||p(e))}function v(e){return b(e)&&p(e.then)}var h=function(e,t,r,n){if("function"===typeof r)return r.call(e,t,n);r=Array.isArray(r)?r:r.split(".");for(var a=0;a<r.length;a++){if(!t||"object"!==f(t))return n;t=t[r[a]]}return"undefined"===typeof t?n:t},m="__isVuelidateAsyncVm";function g(e,t){var r=new e({data:{p:!0,v:!1}});return t.then(function(e){r.p=!1,r.v=e},function(e){throw r.p=!1,r.v=!1,e}),r[m]=!0,r}var k={$invalid:function(){var e=this,t=this.proxy;return this.nestedKeys.some(function(t){return e.refProxy(t).$invalid})||this.ruleKeys.some(function(e){return!t[e]})},$dirty:function(){var e=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.every(function(t){return e.refProxy(t).$dirty})},$anyDirty:function(){var e=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.some(function(t){return e.refProxy(t).$anyDirty})},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$anyError:function(){return this.$anyDirty&&!this.$pending&&this.$invalid},$pending:function(){var e=this;return this.ruleKeys.some(function(t){return e.getRef(t).$pending})||this.nestedKeys.some(function(t){return e.refProxy(t).$pending})},$params:function(){var e=this,t=this.validations;return s({},y(this.nestedKeys,function(e){return t[e]&&t[e].$params||null}),y(this.ruleKeys,function(t){return e.getRef(t).$params}))}};function _(e){this.dirty=e;var t=this.proxy,r=e?"$touch":"$reset";this.nestedKeys.forEach(function(e){t[e][r]()})}var P={$touch:function(){_.call(this,!0)},$reset:function(){_.call(this,!1)},$flattenParams:function(){var e=this.proxy,t=[];for(var r in this.$params)if(this.isNested(r)){for(var n=e[r].$flattenParams(),a=0;a<n.length;a++)n[a].path.unshift(r);t=t.concat(n)}else t.push({path:[],name:r,params:this.$params[r]});return t}},$=Object.keys(k),x=Object.keys(P),O=null,j=function(e){if(O)return O;var t=e.extend({computed:{refs:function(){var e=this._vval;this._vval=this.children,(0,n.patchChildren)(e,this._vval);var t={};return this._vval.forEach(function(e){t[e.key]=e.vm}),t}},beforeCreate:function(){this._vval=null},beforeDestroy:function(){this._vval&&((0,n.patchChildren)(this._vval),this._vval=null)},methods:{getModel:function(){return this.lazyModel?this.lazyModel(this.prop):this.model},getModelKey:function(e){var t=this.getModel();if(t)return t[e]},hasIter:function(){return!1}}}),r=t.extend({data:function(){return{rule:null,lazyModel:null,model:null,lazyParentModel:null,rootModel:null}},methods:{runRule:function(t){var r=this.getModel();(0,a.pushParams)();var n=this.rule.call(this.rootModel,r,t),i=v(n)?g(e,n):n,o=(0,a.popParams)(),u=o&&o.$sub?o.$sub.length>1?o:o.$sub[0]:null;return{output:i,params:u}}},computed:{run:function(){var e=this,t=this.lazyParentModel(),r=Array.isArray(t)&&t.__ob__;if(r){var n=t.__ob__.dep;n.depend();var a=n.constructor.target;if(!this._indirectWatcher){var i=a.constructor;this._indirectWatcher=new i(this,function(){return e.runRule(t)},null,{lazy:!0})}var o=this.getModel();if(!this._indirectWatcher.dirty&&this._lastModel===o)return this._indirectWatcher.depend(),a.value;this._lastModel=o,this._indirectWatcher.evaluate(),this._indirectWatcher.depend()}else this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null);return this._indirectWatcher?this._indirectWatcher.value:this.runRule(t)},$params:function(){return this.run.params},proxy:function(){var e=this.run.output;return e[m]?!!e.v:!!e},$pending:function(){var e=this.run.output;return!!e[m]&&e.p}},destroyed:function(){this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null)}}),o=t.extend({data:function(){return{dirty:!1,validations:null,lazyModel:null,model:null,prop:null,lazyParentModel:null,rootModel:null}},methods:s({},P,{refProxy:function(e){return this.getRef(e).proxy},getRef:function(e){return this.refs[e]},isNested:function(e){return"function"!==typeof this.validations[e]}}),computed:s({},k,{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var e=this;return this.keys.filter(function(t){return!e.isNested(t)})},keys:function(){return Object.keys(this.validations).filter(function(e){return"$params"!==e})},proxy:function(){var e=this,t=y(this.keys,function(t){return{enumerable:!0,configurable:!0,get:function(){return e.refProxy(t)}}}),r=y($,function(t){return{enumerable:!0,configurable:!0,get:function(){return e[t]}}}),n=y(x,function(t){return{enumerable:!1,configurable:!0,get:function(){return e[t]}}}),a=this.hasIter()?{$iter:{enumerable:!0,value:Object.defineProperties({},s({},t))}}:{};return Object.defineProperties({},s({},t,a,{$model:{enumerable:!0,get:function(){var t=e.lazyParentModel();return null!=t?t[e.prop]:null},set:function(t){var r=e.lazyParentModel();null!=r&&(r[e.prop]=t,e.$touch())}}},r,n))},children:function(){var e=this;return i(this.nestedKeys.map(function(t){return c(e,t)})).concat(i(this.ruleKeys.map(function(t){return f(e,t)}))).filter(Boolean)}})}),u=o.extend({methods:{isNested:function(e){return"undefined"!==typeof this.validations[e]()},getRef:function(e){var t=this;return{get proxy(){return t.validations[e]()||!1}}}}}),l=o.extend({computed:{keys:function(){var e=this.getModel();return b(e)?Object.keys(e):[]},tracker:function(){var e=this,t=this.validations.$trackBy;return t?function(r){return"".concat(h(e.rootModel,e.getModelKey(r),t))}:function(e){return"".concat(e)}},getModelLazy:function(){var e=this;return function(){return e.getModel()}},children:function(){var e=this,t=this.validations,r=this.getModel(),a=s({},t);delete a["$trackBy"];var i={};return this.keys.map(function(t){var u=e.tracker(t);return i.hasOwnProperty(u)?null:(i[u]=!0,(0,n.h)(o,u,{validations:a,prop:t,lazyParentModel:e.getModelLazy,model:r[t],rootModel:e.rootModel}))}).filter(Boolean)}},methods:{isNested:function(){return!0},getRef:function(e){return this.refs[this.tracker(e)]},hasIter:function(){return!0}}}),c=function(e,t){if("$each"===t)return(0,n.h)(l,t,{validations:e.validations[t],lazyParentModel:e.lazyParentModel,prop:t,lazyModel:e.getModel,rootModel:e.rootModel});var r=e.validations[t];if(Array.isArray(r)){var a=e.rootModel,i=y(r,function(e){return function(){return h(a,a.$v,e)}},function(e){return Array.isArray(e)?e.join("."):e});return(0,n.h)(u,t,{validations:i,lazyParentModel:d,prop:t,lazyModel:d,rootModel:a})}return(0,n.h)(o,t,{validations:r,lazyParentModel:e.getModel,prop:t,lazyModel:e.getModelKey,rootModel:e.rootModel})},f=function(e,t){return(0,n.h)(r,t,{rule:e.validations[t],lazyParentModel:e.lazyParentModel,lazyModel:e.getModel,rootModel:e.rootModel})};return O={VBase:t,Validation:o},O},M=null;function w(e){if(M)return M;var t=e.constructor;while(t.super)t=t.super;return M=t,t}var S=function(e,t){var r=w(e),a=j(r),i=a.Validation,o=a.VBase,u=new o({computed:{children:function(){var r="function"===typeof t?t.call(e):t;return[(0,n.h)(i,"$v",{validations:r,lazyParentModel:d,prop:"$v",model:e,rootModel:e})]}}});return u},A={data:function(){var e=this.$options.validations;return e&&(this._vuelidate=S(this,e)),{}},beforeCreate:function(){var e=this.$options,t=e.validations;t&&(e.computed||(e.computed={}),e.computed.$v||(e.computed.$v=function(){return this._vuelidate?this._vuelidate.refs.$v.proxy:null}))},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};function z(e){e.mixin(A)}t.validationMixin=A;var q=z;t.default=q},"241e":function(e,t,r){var n=r("25eb");e.exports=function(e){return Object(n(e))}},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxLength",max:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e})};t.default=a},"335c":function(e,t,r){var n=r("6b4c");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce(function(t,r){return t&&r.apply(e,n)},!0)})};t.default=a},"355d":function(e,t){t.f={}.propertyIsEnumerable},"36c3":function(e,t,r){var n=r("335c"),a=r("25eb");e.exports=function(e){return n(a(e))}},"3a38":function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=a},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("numeric",/^[0-9]*$/);t.default=a},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxValue",max:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e})};t.default=a},5176:function(e,t,r){e.exports=r("51b6")},"51b6":function(e,t,r){r("a3c3"),e.exports=r("584a").Object.assign},5559:function(e,t,r){var n=r("dbdb")("keys"),a=r("62a0");e.exports=function(e){return n[e]||(n[e]=a(e))}},"5b4e":function(e,t,r){var n=r("36c3"),a=r("b447"),i=r("0fc9");e.exports=function(e){return function(t,r,o){var u,l=n(t),s=a(l.length),c=i(o,s);if(e&&r!=r){while(s>c)if(u=l[c++],u!=u)return!0}else for(;s>c;c++)if((e||c in l)&&l[c]===r)return e||c||0;return!e&&-1}}},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,i=(0,n.regex)("email",a);t.default=i},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minLength",min:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e})};t.default=a},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=a},"62a0":function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"not"},function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)})};t.default=a},"6b4c":function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[\/?#]\S*)?$/i,i=(0,n.regex)("url",a);t.default=i},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=a(r("8750"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;var u=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};t.len=u;var l=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=l;var s=function(e,t){return(0,n.default)({type:e},function(e){return!o(e)||t.test(e)})};t.regex=s},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",BASE_URL:""}).BUILD?r("cb69").withParams:r("0234").withParams,a=n;t.default=a},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(i)})};t.default=a;var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},9306:function(e,t,r){"use strict";var n=r("c3a1"),a=r("9aa9"),i=r("355d"),o=r("241e"),u=r("335c"),l=Object.assign;e.exports=!l||r("294c")(function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(e){t[e]=e}),7!=l({},e)[r]||Object.keys(l({},t)).join("")!=n})?function(e,t){var r=o(e),l=arguments.length,s=1,c=a.f,f=i.f;while(l>s){var d,y=u(arguments[s++]),p=c?n(y).concat(c(y)):n(y),b=p.length,v=0;while(b>v)f.call(y,d=p[v++])&&(r[d]=y[d])}return r}:l},"9aa9":function(e,t){t.f=Object.getOwnPropertySymbols},a3c3:function(e,t,r){var n=r("63b6");n(n.S+n.F,"Object",{assign:r("9306")})},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)})};t.default=a},acf7:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"animated fadeIn"},[e.setting.length>0?r("b-row",[r("b-col",{attrs:{md:"12"}},[r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[e._v("輸入表單")])]),r("b-form",[e._l(e.setting,function(t,n){return r("div",[1===t.type?r("b-form-group",{class:t.attrClass,attrs:{label:t.title,"label-for":t.key,"label-cols":3}},[r("b-form-input",{attrs:{id:t.key,name:t.key,type:"text",placeholder:t.placeholder,state:e.chkState(t.key),"aria-describedby":"Feedback"+t.key,autofocus:""},model:{value:e.$v.data[t.key].$model,callback:function(r){e.$set(e.$v.data[t.key],"$model","string"===typeof r?r.trim():r)},expression:"$v.data[item.key].$model"}}),r("b-form-invalid-feedback",{attrs:{id:"Feedback"+t.key}},[e._v("\n                "+e._s(t.desc)+"\n              ")])],1):e._e(),2===t.type?r("b-form-group",{class:t.attrClass,attrs:{label:t.title,"label-for":t.key,"label-cols":3}},[r("b-form-select",{attrs:{id:t.key,plain:!0,options:t.data,value:"null",state:e.chkState(t.key),"aria-describedby":"Feedback"+t.key},model:{value:e.data[t.key],callback:function(r){e.$set(e.data,t.key,r)},expression:"data[item.key]"}}),r("b-form-invalid-feedback",{attrs:{id:"Feedback"+t.key}},[e._v("\n                "+e._s(t.desc)+"\n              ")])],1):e._e(),3===t.type?r("b-form-group",{class:t.attrClass,attrs:{label:t.title,"label-for":t.key,"label-cols":3}},[r("b-form-radio-group",{attrs:{id:t.key,plain:!0,options:t.data,checked:"",state:e.chkState(t.key),"aria-describedby":"Feedback"+t.key,inline:""},model:{value:e.$v.data[t.key].$model,callback:function(r){e.$set(e.$v.data[t.key],"$model","string"===typeof r?r.trim():r)},expression:"$v.data[item.key].$model"}}),r("b-form-invalid-feedback",{attrs:{id:"Feedback"+t.key}},[e._v("\n                "+e._s(t.desc)+"\n              ")])],1):e._e(),5===t.type?r("b-form-group",{class:t.attrClass,attrs:{label:t.title,"label-for":t.key,"label-cols":3},model:{value:e.data[t.key],callback:function(r){e.$set(e.data,t.key,r)},expression:"data[item.key]"}},[r("b-form-input",{attrs:{plaintext:"",id:t.key,name:t.key,value:t.value,type:"text",state:e.chkState(t.key),"aria-describedby":"Feedback"+t.key}}),r("b-form-invalid-feedback",{attrs:{id:"Feedback"+t.key}},[e._v("\n                "+e._s(t.desc)+"\n              ")])],1):e._e(),6===t.type?r("b-form-group",{class:t.attrClass,attrs:{label:t.title,"label-for":t.key,"label-cols":3}},[r("b-form-checkbox-group",{attrs:{inline:"",id:t.key,name:t.key,plain:!0,checked:[],state:e.chkState(t.key),"aria-describedby":"Feedback"+t.key},model:{value:e.$v.data[t.key].$model,callback:function(r){e.$set(e.$v.data[t.key],"$model","string"===typeof r?r.trim():r)},expression:"$v.data[item.key].$model"}},e._l(e.dataItem,function(t,n){return r("b-form-checkbox",{key:n,attrs:{value:t.value}},[e._v(e._s(t.text))])}),1),r("b-form-invalid-feedback",{attrs:{id:"Feedback"+t.key}},[e._v("\n                "+e._s(t.desc)+"\n              ")])],1):e._e(),7===t.type?r("b-form-group",{class:t.attrClass,attrs:{label:t.title,"label-for":t.key,"label-cols":3}},[r("b-form-input",{attrs:{id:t.key,name:t.key,type:"password",placeholder:t.placeholder,state:e.chkState(t.key),"aria-describedby":"Feedback"+t.key,autofocus:""},model:{value:e.$v.data[t.key].$model,callback:function(r){e.$set(e.$v.data[t.key],"$model","string"===typeof r?r.trim():r)},expression:"$v.data[item.key].$model"}}),r("b-form-invalid-feedback",{attrs:{id:"Feedback"+t.key}},[e._v("\n                "+e._s(t.desc)+"\n              ")])],1):e._e(),8===t.type?r("b-form-group",{class:t.attrClass,attrs:{label:t.title,"label-for":t.key,"label-cols":3,state:e.chkState(t.key),"aria-describedby":"Feedback"+t.key},model:{value:e.data[t.key],callback:function(r){e.$set(e.data,t.key,r)},expression:"data[item.key]"}},[r("b-form-file",{attrs:{id:t.key,plain:!0}}),r("b-form-invalid-feedback",{attrs:{id:"Feedback"+t.key}},[e._v("\n                "+e._s(t.desc)+"\n              ")])],1):e._e()],1)}),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:e.sendData}},[r("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" "+e._s(e.txt.submit))]),r("b-button",{attrs:{type:"button",size:"sm",variant:"danger"},on:{click:e.back}},[r("i",{staticClass:"fa fa-arrow-left"}),e._v(" "+e._s(e.txt.back))])],1)],2)],1)],1)],1):e._e(),e.setting.length<1?r("div",{staticClass:"alert alert-danger"},[e._v(e._s(e.txt.notSetting))]):e._e()],1)},a=[],i=r("5176"),o=r.n(i),u=r("90ce"),l=r("1dce"),s=r("b5ae"),c=s["helpers"].regex("strongPass",/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/),f={data:function(){return{txt:u["a"],data:{}}},mounted:function(){setTimeout(function(){this.data=o()({},this.defaultData)}.bind(this),500)},computed:{isValid:function(){return!this.$v.data.$anyError},isDirty:function(){return this.$v.data.$anyDirty}},mixins:[l["validationMixin"]],validations:{data:{account:{required:s["required"],minLength:Object(s["minLength"])(4)},email:{required:s["required"],email:s["email"]},password:{required:s["required"],minLength:Object(s["minLength"])(8),strongPass:c},auth:{required:s["required"],minLength:Object(s["minLength"])(1)},status:{required:s["required"],integer:s["integer"]},code:{required:s["required"],minLength:Object(s["minLength"])(4)},name:{required:s["required"]}}},props:["setting","dataItem","defaultData"],methods:{sendData:function(){this.$emit("senddata")},back:function(){this.$router.go(-1)},chkState:function(e){var t=this.$v.data[e];return!t.$dirty||!t.$invalid},findFirstError:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(!1===t.state){if(t.$refs.input)return t.$refs.input.focus(),!0;if(t.$refs.check)return t.$refs.check.focus(),!0}var r=!1;return t.$children.some(function(t){return r=e.findFirstError(t),r}),r},validate:function(){var e=this;return this.$v.$touch(),this.$nextTick(function(){return e.findFirstError()}),this.isValid}}},d=f,y=r("2877"),p=Object(y["a"])(d,n,a,!1,null,null,null);t["a"]=p.exports},b447:function(e,t,r){var n=r("3a38"),a=Math.min;e.exports=function(e){return e>0?a(n(e),9007199254740991):0}},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return $.default}}),t.helpers=void 0;var n=j(r("6235")),a=j(r("3a54")),i=j(r("45b8")),o=j(r("ec11")),u=j(r("5d75")),l=j(r("c99d")),s=j(r("91d3")),c=j(r("2a12")),f=j(r("5db3")),d=j(r("d4f4")),y=j(r("aa82")),p=j(r("e652")),b=j(r("b6cb")),v=j(r("772d")),h=j(r("d294")),m=j(r("3360")),g=j(r("6417")),k=j(r("eb66")),_=j(r("46bc")),P=j(r("1331")),$=j(r("c301")),x=O(r("78ef"));function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function j(e){return e&&e.__esModule?e:{default:e}}t.helpers=x},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"sameAs",eq:e},function(t,r){return t===(0,n.ref)(e,this,r)})};t.default=a},b8e3:function(e,t){e.exports=!0},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=a},c3a1:function(e,t,r){var n=r("e6f3"),a=r("1691");e.exports=Object.keys||function(e){return n(e,a)}},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"ipAddress"},function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)});t.default=a;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},a=function(e,t){return"object"===r(e)&&void 0!==t?t:e(function(){})},i=n.vuelidate?n.vuelidate.withParams:a;t.withParams=i}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce(function(t,r){return t||r.apply(e,n)},!1)})};t.default=a},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"required"},n.req);t.default=a},dbdb:function(e,t,r){var n=r("584a"),a=r("e53d"),i="__core-js_shared__",o=a[i]||(a[i]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:r("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)})};t.default=a},e6f3:function(e,t,r){var n=r("07e3"),a=r("36c3"),i=r("5b4e")(!1),o=r("5559")("IE_PROTO");e.exports=function(e,t){var r,u=a(e),l=0,s=[];for(r in u)r!=o&&n(u,r)&&s.push(r);while(t.length>l)n(u,r=t[l++])&&(~i(s,r)||s.push(r));return s}},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minValue",min:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e})};t.default=a},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r})};t.default=a},fbf4:function(e,t,r){"use strict";function n(e){return null===e||void 0===e}function a(e){return null!==e&&void 0!==e}function i(e,t){return t.tag===e.tag&&t.key===e.key}function o(e){var t=e.tag;e.vm=new t({data:e.args})}function u(e){for(var t=Object.keys(e.args),r=0;r<t.length;r++)t.forEach(function(t){e.vm[t]=e.args[t]})}function l(e,t,r){var n,i,o={};for(n=t;n<=r;++n)i=e[n].key,a(i)&&(o[i]=n);return o}function s(e,t){var r,u,s,y=0,p=0,b=e.length-1,v=e[0],h=e[b],m=t.length-1,g=t[0],k=t[m];while(y<=b&&p<=m)n(v)?v=e[++y]:n(h)?h=e[--b]:i(v,g)?(d(v,g),v=e[++y],g=t[++p]):i(h,k)?(d(h,k),h=e[--b],k=t[--m]):i(v,k)?(d(v,k),v=e[++y],k=t[--m]):i(h,g)?(d(h,g),h=e[--b],g=t[++p]):(n(r)&&(r=l(e,y,b)),u=a(g.key)?r[g.key]:null,n(u)?(o(g),g=t[++p]):(s=e[u],i(s,g)?(d(s,g),e[u]=void 0,g=t[++p]):(o(g),g=t[++p])));y>b?c(t,p,m):p>m&&f(e,y,b)}function c(e,t,r){for(;t<=r;++t)o(e[t])}function f(e,t,r){for(;t<=r;++t){var n=e[t];a(n)&&(n.vm.$destroy(),n.vm=null)}}function d(e,t){e!==t&&(t.vm=e.vm,u(t))}function y(e,t){a(e)&&a(t)?e!==t&&s(e,t):a(t)?c(t,0,t.length-1):a(e)&&f(e,0,e.length-1)}function p(e,t,r){return{tag:e,key:t,args:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.patchChildren=y,t.h=p}}]);
//# sourceMappingURL=chunk-c4a0d186.183147c8.js.map