(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b42c197"],{2149:function(t,a,e){"use strict";e("e01a")},"6cea":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tool-page"},[e("div",{staticClass:"calc-mode"},[e("div",{staticClass:"title"},[t._v("计算模式")]),e("div",{staticClass:"content"},[e("el-select",{attrs:{size:"small"},model:{value:t.mode,callback:function(a){t.mode=a},expression:"mode"}},[e("el-option",{attrs:{label:"1 -> 2",value:"1-to-2"}}),e("el-option",{attrs:{label:"2 -> 1",value:"2-to-1"}})],1)],1)]),e("div",{staticClass:"decimals"},[e("div",{staticClass:"title"},[t._v("小数位数")]),e("div",{staticClass:"content"},[e("el-input-number",{attrs:{"controls-position":"right",size:"small",min:0,max:10,step:1,"step-strictly":""},on:{change:function(a){return t.update()}},model:{value:t.decimals,callback:function(a){t.decimals=a},expression:"decimals"}})],1)]),e("div",{staticClass:"ratio-base"},[e("div",{staticClass:"title"},[t._v("基础比例")]),e("div",{staticClass:"content"},[e("el-input-number",{attrs:{"controls-position":"right",size:"small",min:t.limit.min,max:t.limit.max,step:1,"step-strictly":""},on:{change:function(a){return t.update()}},model:{value:t.base.a,callback:function(a){t.$set(t.base,"a",a)},expression:"base.a"}}),e("span",{staticClass:"split"},[t._v(":")]),e("el-input-number",{attrs:{"controls-position":"right",size:"small",min:t.limit.min,max:t.limit.max,step:1,"step-strictly":""},on:{change:function(a){return t.update()}},model:{value:t.base.b,callback:function(a){t.$set(t.base,"b",a)},expression:"base.b"}})],1)]),e("div",{staticClass:"ratio-calc"},[e("div",{staticClass:"title"},[t._v("计算比例")]),e("div",{staticClass:"content"},[e("el-input-number",{attrs:{"controls-position":"right",size:"small",step:1,disabled:"2-to-1"===t.mode},on:{change:function(a){return t.update()}},model:{value:t.calc.a,callback:function(a){t.$set(t.calc,"a",a)},expression:"calc.a"}}),e("span",{staticClass:"split"},[t._v(":")]),e("el-input-number",{attrs:{"controls-position":"right",size:"small",step:1,disabled:"1-to-2"===t.mode},on:{change:function(a){return t.update()}},model:{value:t.calc.b,callback:function(a){t.$set(t.calc,"b",a)},expression:"calc.b"}})],1)])])},i=[],c=e("7909"),l={name:"CalcRatio",data:function(){return{base:{a:1,b:1},calc:{a:1,b:1},decimals:5,limit:{min:-99999999,max:99999999},mode:"1-to-2"}},methods:{calculate:function(){var t=this.base,a=this.calc,e=this.decimals,s=this.mode,i=this.limit,l=i.min,n=i.max,o=Object(c["c"])(Object(c["b"])(t.a),Object(c["b"])(t.b));"1-to-2"===s?(a.a=Object(c["d"])(a.a),a.a<l&&(a.a=l),a.a>n&&(a.a=n),a.b=Object(c["g"])(Object(c["c"])(Object(c["b"])(a.a),o),e)):"2-to-1"===s&&(a.b=Object(c["d"])(a.b),a.b<l&&(a.b=l),a.b>n&&(a.b=n),a.a=Object(c["g"])(Object(c["f"])(Object(c["b"])(a.b),o),e))},update:function(){var t=this;this.$nextTick((function(){t.calculate()}))}}},n=l,o=(e("2149"),e("2877")),b=Object(o["a"])(n,s,i,!1,null,"351e2a3c",null);a["default"]=b.exports},e01a:function(t,a,e){}}]);