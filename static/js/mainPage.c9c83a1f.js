(function(e){function t(t){for(var o,a,i=t[0],r=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);h&&h(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(o=!1)}o&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={mainPage:0},s={mainPage:0},c=[];function i(e){return r.p+"static/js/"+({}[e]||e)+"."+{"chunk-25401a5d":"f3f6b506","chunk-4440e2bf":"c505e037","chunk-4bf2628e":"f9ec2eee","chunk-ce461106":"c67cf791","chunk-d56c519e":"69a99f1d","chunk-075073fe":"d6ff7d42","chunk-08a15932":"67799ade","chunk-0a57fce3":"01e24260","chunk-0c070ad6":"3dd65ed0","chunk-138a37ca":"c1b7c39d","chunk-2fc8e342":"69e6f718","chunk-429c8c68":"f387c685","chunk-4544a07e":"055691a8","chunk-4dc2c7e6":"bc02e876","chunk-63109900":"8797dac4","chunk-0b42c197":"6c9b33ef","chunk-35db44c4":"6955f23a","chunk-7ee9a267":"a2d44291","chunk-bafece98":"14bcb030"}[e]+".js"}function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n={"chunk-25401a5d":1,"chunk-4440e2bf":1,"chunk-4bf2628e":1,"chunk-ce461106":1,"chunk-d56c519e":1,"chunk-075073fe":1,"chunk-08a15932":1,"chunk-0a57fce3":1,"chunk-0c070ad6":1,"chunk-138a37ca":1,"chunk-2fc8e342":1,"chunk-429c8c68":1,"chunk-4544a07e":1,"chunk-4dc2c7e6":1,"chunk-0b42c197":1,"chunk-35db44c4":1,"chunk-7ee9a267":1,"chunk-bafece98":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="static/css/"+({}[e]||e)+"."+{"chunk-25401a5d":"b35c5ea1","chunk-4440e2bf":"6b11498a","chunk-4bf2628e":"c3a535b7","chunk-ce461106":"1e7303fb","chunk-d56c519e":"c42cb956","chunk-075073fe":"e96f0d48","chunk-08a15932":"fdbf55e5","chunk-0a57fce3":"fb571009","chunk-0c070ad6":"0b14b5f9","chunk-138a37ca":"8ccd76bf","chunk-2fc8e342":"7a243fcf","chunk-429c8c68":"d0d9bd4c","chunk-4544a07e":"0e0a6c79","chunk-4dc2c7e6":"a9f1eba1","chunk-63109900":"31d6cfe0","chunk-0b42c197":"c1a98db1","chunk-35db44c4":"c78fb0a2","chunk-7ee9a267":"a61e5cf4","chunk-bafece98":"8768d95e"}[e]+".css",s=r.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===o||l===s)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete a[e],h.parentNode.removeChild(h),n(c)},h.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[e]=0})));var o=s[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=s[e]=[t,n]}));t.push(o[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=s[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}s[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"267e":function(e,t,n){},"39e3":function(e,t,n){},"470c":function(e,t,n){"use strict";n("39e3")},"49dc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),a=n("5c96"),s=n.n(a),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.config.loading.subPage,expression:"config.loading.subPage"}],staticClass:"loading-bar"},[n("div",{staticClass:"bar-content"})]),n("el-container",[n("el-header",{staticClass:"main-header shadow-1"},[n("div",{staticClass:"logo"}),n("el-menu",{staticClass:"menu",attrs:{"default-active":e.headerDefaultActive,mode:"horizontal",router:""}},[n("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.config.storage.showSiteTitle,expression:"config.storage.showSiteTitle"}],staticClass:"title",attrs:{index:"title",disabled:""}},[e._v("Frost 网址导航")]),e._l(e.headerMenuItems,(function(t){return n("el-menu-item",{key:t.id,staticClass:"item-normal",attrs:{index:t.id,route:{name:t.routeName}}},[e._v(e._s(t.label))])})),n("el-menu-item",{class:["item-dropdown",{active:e.showHeaderDropdown}],on:{click:function(t){e.showHeaderDropdown=!e.showHeaderDropdown}}},[n("i",{staticClass:"fa fa-bars"})])],2)],1),n("el-menu",{class:["header-dropdown","shadow-2",{show:e.showHeaderDropdown}],attrs:{"default-active":e.headerDefaultActive,router:""}},e._l(e.headerMenuItems,(function(t){return n("el-menu-item",{key:t.id,staticClass:"item-normal",attrs:{index:t.id,route:{name:t.routeName}}},[e._v(e._s(t.label))])})),1),n("keep-alive",[n("router-view",{staticClass:"main-container"})],1)],1),n("FloatingBtn")],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"floatingBtn",staticClass:"floating-btn"},[n("div",{class:["btns-inner",{show:e.showInner}]},[n("button",{staticClass:"btn",attrs:{type:"button",title:"折叠侧边菜单"},on:{click:function(t){return e.toggleSideCollapse()}}},[n("i",{staticClass:"el-icon-menu",attrs:{"aria-hidden":"true"}})]),n("button",{staticClass:"btn",attrs:{type:"button",title:"刷新"},on:{click:function(t){return e.refreshPage()}}},[n("i",{staticClass:"el-icon-refresh-right",attrs:{"aria-hidden":"true"}})]),n("button",{staticClass:"btn",attrs:{type:"button",title:"返回主页"},on:{click:function(t){return e.backToHome()}}},[n("i",{staticClass:"el-icon-s-home",attrs:{"aria-hidden":"true"}})])]),e._m(0)])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"btns-outer"},[n("button",{staticClass:"btn",attrs:{type:"button",title:"菜单"}},[n("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])])}],l={name:"FloatingBtn",data(){return{config:this.$root.config.storage,showInner:!1}},mounted(){this.initAnimation()},methods:{initAnimation(){var e=this,t=e.$refs["floatingBtn"],n=t.querySelectorAll(".btn"),o="animate";n.forEach(t=>{t.addEventListener("click",(function(){this.classList.remove(o),setTimeout(()=>{this.classList.add(o),e.toggleInnerBtns()},20)}))})},toggleInnerBtns(){this.showInner=!this.showInner},backToHome(){var e="Home";this.$route.name!=e?this.$router.push({name:e}).then(()=>{window.location.reload()}):this.$message({duration:2e3,message:"已经在主页啦~",type:"warning"})},refreshPage(){window.location.reload()},toggleSideCollapse(){var e=this.config;e.sideMenuCollapse=!e.sideMenuCollapse}}},d=l,h=(n("a087"),n("2877")),f=Object(h["a"])(d,r,u,!1,null,"fd981300",null),m=f.exports,b={name:"App",components:{FloatingBtn:m},data(){return{config:this.$root.config,debounce:{saveConfig:null,updateConfig:null},headerMenuItems:[{id:"home",label:"主页",routeName:"Home"},{id:"tools",label:"小工具",routeName:"Tools"},{id:"settings",label:"设置",routeName:"Settings"},{id:"about",label:"关于",routeName:"About"}],showHeaderDropdown:!1}},computed:{headerDefaultActive(){var e=this.$route.name,t="";return e&&(t=e.toLowerCase()),t}},watch:{"$route.name":{handler(){this.showHeaderDropdown=!1}},"config.storage":{handler(e){clearTimeout(this.debounce.saveConfig),this.debounce.saveConfig=setTimeout(()=>{localStorage.setItem("navConfig",JSON.stringify(e))},2e3)},deep:!0},"config.storage.fontSize":{handler(e){clearTimeout(this.debounce.updateConfig),this.debounce.updateConfig=setTimeout(()=>{document.documentElement.style.fontSize=e+"px"},1e3)}}},mounted(){var e=localStorage.getItem("navConfig"),t={};null!=e&&(t=JSON.parse(e),Object.assign(this.config.storage,t))}},w=b,g=(n("7c55"),n("470c"),Object(h["a"])(w,c,i,!1,null,"662ee754",null)),p=g.exports,v=n("8c4f");const k=[{name:"Home",path:"/",meta:{loadingBar:!0},component:e=>n.e("chunk-d56c519e").then(function(){var t=[n("bb51")];e.apply(null,t)}.bind(this)).catch(n.oe)},{name:"Tools",path:"/tools",meta:{loadingBar:!0},component:e=>n.e("chunk-ce461106").then(function(){var t=[n("d5d4")];e.apply(null,t)}.bind(this)).catch(n.oe),children:[{path:"/tools/:category/:name",name:"ToolsDetail",component:e=>n.e("chunk-25401a5d").then(function(){var t=[n("a7f9")];e.apply(null,t)}.bind(this)).catch(n.oe)}]},{name:"Settings",path:"/settings",meta:{loadingBar:!0},component:e=>n.e("chunk-4bf2628e").then(function(){var t=[n("26d3")];e.apply(null,t)}.bind(this)).catch(n.oe)},{name:"About",path:"/about",meta:{loadingBar:!0},component:e=>n.e("chunk-4440e2bf").then(function(){var t=[n("f820")];e.apply(null,t)}.bind(this)).catch(n.oe)}];var y=k;let C={loading:{subPage:!1},searchEngines:{search:{title:"搜索",list:[{name:"百度",desc:"www.baidu.com",url:"https://www.baidu.com/s?wd=%keyword%",icon:"website/baidu.svg",show:!0},{name:"必应",desc:"cn.bing.com",url:"https://cn.bing.com/search?q=%keyword%",icon:"website/bing.svg",show:!0},{name:"秘迹",desc:"mijisou.com",url:"https://mijisou.com/?q=%keyword%",icon:"website/mijisou.svg",show:!0},{name:"搜狗",desc:"www.sogou.com",url:"https://www.sogou.com/web?query=%keyword%",icon:"website/sogou.svg",show:!0},{name:"360",desc:"www.so.com",url:"https://www.so.com/s?q=%keyword%",icon:"website/360.svg",show:!0},{name:"Google",desc:"www.google.com",url:"https://www.google.com/search?q=%keyword%",icon:"website/google.svg",show:!0},{name:"Yandex",desc:"yandex.com",url:"https://yandex.com/search/?text=%keyword%",icon:"website/yandex.svg",show:!0}]},media:{title:"多媒体",list:[{name:"网易云音乐",desc:"music.163.com",url:"https://music.163.com/#/search/m/?s=%keyword%",icon:"website/netease_music.svg",show:!0},{name:"AcFun",desc:"www.acfun.cn",url:"https://www.acfun.cn/search/?keyword=%keyword%",icon:"website/acfun.svg",show:!0},{name:"bilibili",desc:"search.bilibili.com",url:"https://search.bilibili.com/all?keyword=%keyword%",icon:"website/bilibili.svg",show:!0},{name:"QQ音乐",desc:"y.qq.com",url:"https://y.qq.com/n/ryqq/search?w=%keyword%",icon:"website/qq_music.svg",show:!0}]},technology:{title:"技术",list:[{name:"CSDN",desc:"so.csdn.net",url:"https://so.csdn.net/so/search/all?q=%keyword%",icon:"website/csdn.svg",show:!0},{name:"GitHub",desc:"github.com",url:"https://github.com/search?q=%keyword%",icon:"website/github.svg",show:!0},{name:"MDN",desc:"developer.mozilla.org",url:"https://developer.mozilla.org/zh-CN/search?q=%keyword%",icon:"website/mdn.svg",show:!0}]},design:{title:"设计",list:[{name:"站酷",desc:"www.zcool.com.cn",url:"https://www.zcool.com.cn/search/content?word=%keyword%",icon:"website/zcool.svg",show:!0},{name:"Iconfont",desc:"www.iconfont.cn",url:"https://www.iconfont.cn/search/index?searchType=icon&q=%keyword%",icon:"website/iconfont.svg",show:!0}]},community:{title:"社区",list:[{name:"天涯",desc:"search.tianya.cn",url:"https://search.tianya.cn/bbs?q=%keyword%",icon:"website/tianya.svg",show:!0},{name:"知乎",desc:"www.zhihu.com",url:"https://www.zhihu.com/search?type=content&q=%keyword%",icon:"website/zhihu.svg",show:!0}]}},siteName:"Frost 网址导航",storage:{fontSize:16,showSiteTitle:!0,sideMenuCollapse:!0,searchEngine:"百度",searchSuggestion:!1}};var S=C;o["default"].use(v["a"]);const N=new v["a"]({routes:y});N.beforeEach((e,t,n)=>{e.meta.loadingBar&&(S.loading.subPage=!0),n()}),N.afterEach(e=>{e.meta.loadingBar&&(S.loading.subPage=!1)});var T=N;let x={list:[],version:""},E=[],_={init:function(){var e=a["Loading"].service({customClass:"loading-link",lock:!0,spinner:"el-icon-loading",text:""}),t=0,n=0,o=n=>{t+=1,n.id=t,void 0!=n.links&&(void 0===n.sub&&(n.sub=[]),n.links.forEach((e,t,o)=>{try{n.sub.push(e)}catch(a){console.warn("[添加链接到 sub]",a),console.warn("[出错的 obj]",n)}t===o.length-1&&delete n.links})),void 0!=n.sub&&n.sub.forEach(e=>{setTimeout(()=>{o(e)},2*t)}),e.text=`初始化导航链接，请稍候 [${t}]`},s=setInterval(()=>{n===t&&(clearInterval(s),console.log("[导航链接] 初始化完毕"),e.close(),x.list=JSON.parse(JSON.stringify(E)),setTimeout(()=>{this.cache("W",E)},1e3)),n=t},5e3);return o},cache:function(e,t){var n,o={},a={};if("R"===e)return n=localStorage.getItem("navLinksCache"),null===n?{status:0}:(o=JSON.parse(n),void 0===o.list||0===o.list.length||o.version!=x.version?{status:0}:{status:1,list:o.list});"W"===e&&(a.version=x.version,a.list=t,localStorage.setItem("navLinksCache",JSON.stringify(a)))}};(function(){let e=document.createElement("script");e.onload=function(){if(void 0===window.frostNavLinks)return void a["Notification"].error({title:"错误",message:"导航链接载入失败",duration:0});x.version=window.frostNavLinks.version,E=window.frostNavLinks.list;let e=_.cache("R");if(1===e.status)return void(x.list=e.list);let t=_.init();E.forEach(e=>{t(e)})},e.setAttribute("type","text/javascript"),e.setAttribute("src","static/js/frostNavLinks.js"),document.body.appendChild(e)})();var P=x;class j{constructor(){}changeTitle(e){document.title=(e?e+" - ":"")+S.siteName}jsonp(e){var t={url:"",cbName:"cb",cbFunc:function(e){console.log("[JSONP]",e)}},n=document.createElement("script");Object.assign(t,e),window[t.cbName]=t.cbFunc,n.addEventListener("load",(function(){this.remove()})),n.setAttribute("src",t.url),document.body.appendChild(n)}readFileAsText(e,t){const n=[],o=e.currentTarget,a=o.files;if(!a||0===a.length)return Promise.resolve(n);const s=(e,s)=>{const c=[];for(let t=0;t<a.length;t++){const e=a[t],n=new FileReader,o=(t,o)=>{n.onload=()=>{t(n.result)},n.onerror=()=>{o("")},n.readAsText(e)};c.push(new Promise(o))}Promise.all(c).then(n=>{e(n),t&&o.setAttribute("value","")}).catch(()=>{s(n)})};return new Promise(s)}}const O=new j;var q=O;n("e13f"),n("1f54"),n("267e"),n("bd4b");o["default"].use(s.a),o["default"].config.productionTip=!1,new o["default"]({router:T,data:function(){return{config:S,navLinks:P,utils:q}},render:e=>e(p)}).$mount("#app")},"5ba8":function(e,t,n){},"7c55":function(e,t,n){"use strict";n("5ba8")},a087:function(e,t,n){"use strict";n("49dc")},bd4b:function(e,t,n){}});