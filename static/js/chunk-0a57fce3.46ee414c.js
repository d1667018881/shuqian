(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a57fce3"],{"502f":function(s,e,t){},"9f0b":function(s,e,t){"use strict";t.r(e);var i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"tool-page"},[t("div",{staticClass:"link-base"},[t("div",{staticClass:"title"},[s._v("链接模板")]),t("div",{staticClass:"content"},[t("el-input",{attrs:{size:"medium",placeholder:"使用 {n} 表示变量",clearable:""},model:{value:s.linkBase,callback:function(e){s.linkBase=e},expression:"linkBase"}})],1)]),t("div",{staticClass:"config"},[t("div",{staticClass:"title"},[s._v("参数配置")]),t("div",{staticClass:"content"},[t("el-radio-group",{model:{value:s.mode,callback:function(e){s.mode=e},expression:"mode"}},[t("div",{staticClass:"mode-item mode-as"},[t("div",{staticClass:"config-row"},[t("el-radio",{attrs:{label:"as"}},[s._v("等差数列")])],1),t("div",{staticClass:"config-row"},[t("div",{staticClass:"config-item"},[t("span",{staticClass:"label"},[s._v("首项")]),t("el-input-number",{attrs:{"controls-position":"right",size:"medium",step:1,"step-strictly":""},model:{value:s.modes.as.first,callback:function(e){s.$set(s.modes.as,"first",e)},expression:"modes.as.first"}})],1),t("div",{staticClass:"config-item"},[t("span",{staticClass:"label"},[s._v("公差")]),t("el-input-number",{attrs:{"controls-position":"right",size:"medium",step:1,"step-strictly":""},model:{value:s.modes.as.diff,callback:function(e){s.$set(s.modes.as,"diff",e)},expression:"modes.as.diff"}})],1),t("div",{staticClass:"config-item"},[t("span",{staticClass:"label"},[s._v("项数")]),t("el-input-number",{attrs:{"controls-position":"right",size:"medium",step:1,"step-strictly":""},model:{value:s.modes.as.count,callback:function(e){s.$set(s.modes.as,"count",e)},expression:"modes.as.count"}})],1)]),t("div",{staticClass:"config-row"},[t("div",{staticClass:"config-item"},[t("span",{staticClass:"label"},[s._v("格式")]),t("el-checkbox",{model:{value:s.modes.as.zero,callback:function(e){s.$set(s.modes.as,"zero",e)},expression:"modes.as.zero"}},[s._v("补零")]),t("el-checkbox",{model:{value:s.modes.as.reverse,callback:function(e){s.$set(s.modes.as,"reverse",e)},expression:"modes.as.reverse"}},[s._v("倒序")])],1)])]),t("div",{staticClass:"mode-item mode-ps"},[t("div",{staticClass:"config-row"},[t("el-radio",{attrs:{label:"ps"}},[s._v("等比数列")])],1),t("div",{staticClass:"config-row"},[t("div",{staticClass:"config-item"},[t("span",{staticClass:"label"},[s._v("首项")]),t("el-input-number",{attrs:{"controls-position":"right",size:"medium",step:1,"step-strictly":""},model:{value:s.modes.ps.first,callback:function(e){s.$set(s.modes.ps,"first",e)},expression:"modes.ps.first"}})],1),t("div",{staticClass:"config-item"},[t("span",{staticClass:"label"},[s._v("公比")]),t("el-input-number",{attrs:{"controls-position":"right",size:"medium",step:1,"step-strictly":""},model:{value:s.modes.ps.diff,callback:function(e){s.$set(s.modes.ps,"diff",e)},expression:"modes.ps.diff"}})],1),t("div",{staticClass:"config-item"},[t("span",{staticClass:"label"},[s._v("项数")]),t("el-input-number",{attrs:{"controls-position":"right",size:"medium",step:1,"step-strictly":""},model:{value:s.modes.ps.count,callback:function(e){s.$set(s.modes.ps,"count",e)},expression:"modes.ps.count"}})],1)]),t("div",{staticClass:"config-row"},[t("div",{staticClass:"config-item"},[t("span",{staticClass:"label"},[s._v("格式")]),t("el-checkbox",{model:{value:s.modes.ps.zero,callback:function(e){s.$set(s.modes.ps,"zero",e)},expression:"modes.ps.zero"}},[s._v("补零")]),t("el-checkbox",{model:{value:s.modes.ps.reverse,callback:function(e){s.$set(s.modes.ps,"reverse",e)},expression:"modes.ps.reverse"}},[s._v("倒序")])],1)])]),t("div",{staticClass:"mode-item mode-lc"},[t("div",{staticClass:"config-row"},[t("el-radio",{attrs:{label:"lc"}},[s._v("字母变化")])],1),t("div",{staticClass:"config-row"},[t("span",{staticClass:"label"},[s._v("从")]),t("el-input",{attrs:{size:"medium",maxlength:1},model:{value:s.modes.lc.start,callback:function(e){s.$set(s.modes.lc,"start",e)},expression:"modes.lc.start"}}),t("span",{staticClass:"label"},[s._v("到")]),t("el-input",{attrs:{size:"medium",maxlength:1},model:{value:s.modes.lc.end,callback:function(e){s.$set(s.modes.lc,"end",e)},expression:"modes.lc.end"}}),t("el-checkbox",{model:{value:s.modes.lc.reverse,callback:function(e){s.$set(s.modes.lc,"reverse",e)},expression:"modes.lc.reverse"}},[s._v("倒序")])],1)])])],1)]),t("div",{staticClass:"action"},[t("div",{staticClass:"title"},[s._v("操作")]),t("div",{staticClass:"content"},[t("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(e){return s.generate()}}},[s._v("生成链接")]),t("el-button",{attrs:{type:"danger",size:"small",plain:""},on:{click:function(e){return s.clear()}}},[s._v("清空结果")])],1)]),t("div",{staticClass:"link-result"},[t("div",{staticClass:"title"},[s._v("生成结果")]),t("div",{staticClass:"content"},[t("el-input",{attrs:{type:"textarea",rows:10},model:{value:s.linkResult,callback:function(e){s.linkResult=e},expression:"linkResult"}})],1)])])},a=[],l={name:"GenLinks",data(){return{linkBase:"",linkResult:"",linkReg:/\{n\}/g,mode:"as",modes:{as:{first:0,diff:1,count:10,zero:!1,reverse:!1},ps:{first:1,diff:2,count:10,zero:!1,reverse:!1},lc:{start:"a",end:"z",reverse:!1}}}},methods:{clear(){this.linkResult=""},generate(){const s=this.mode;switch(s){case"as":this.linkResult=this.generateSeq("as");break;case"ps":this.linkResult=this.generateSeq("ps");break;case"lc":this.linkResult=this.generateLetter();break;default:break}},generateSeq(s){const e=this.linkBase,t=this.linkReg;if(!e)return"";const i=this.modes[s];if(!i)return"";const a=i.first,l=i.count,o=i.diff,n={digits:0,numbers:[]},c=[],r=s=>a+(s-1)*o,d=s=>a*Math.pow(o,s-1),m="as"===s?r:d;for(let u=1;u<=l;u++){const s=m(u),e=Math.abs(s).toString().length;e>n.digits&&(n.digits=e),n.numbers.push(s)}if(i.zero){const s=n.digits,e=Math.pow(10,s),t=n.numbers;for(let i=0;i<t.length;i++){const a=t[i];t[i]=a>=0?(a/e).toFixed(s).substr(2):"-"+(a/e).toFixed(s).substr(3)}}return i.reverse&&n.numbers.reverse(),n.numbers.forEach(s=>{c.push(e.replace(t,s))}),c.join("\n")},generateLetter(){const s=this.linkBase,e=this.linkReg;if(!s)return"";const t=this.modes.lc,i=t.start.charCodeAt(0),a=t.end.charCodeAt(0),l=[],o=[];if(!(i>=65&&i<=122&&a>=65&&a<=122))return"输入有误，请检查。";if(!(i<a))return i>a?"字母先后顺序有误。注意：大写字母需要在前。":i===a?"仅有 1 条链接，无需生成。":"未知错误。";for(let n=i;n<=a;n++)n>=91&&n<=96||l.push(String.fromCharCode(n));return t.reverse&&l.reverse(),l.forEach(t=>{o.push(s.replace(e,t))}),o.join("\n")}}},o=l,n=(t("bfd6"),t("2877")),c=Object(n["a"])(o,i,a,!1,null,"5512ee1c",null);e["default"]=c.exports},bfd6:function(s,e,t){"use strict";t("502f")}}]);