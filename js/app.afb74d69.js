(function(){"use strict";var t={6917:function(t,e,r){var n=r(144),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("v-btn",{attrs:{href:".",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Welcome")])]),r("v-btn",{attrs:{href:"logocurs",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Логотип КУРСа")])]),r("v-btn",{attrs:{href:"logoplatform",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Логотип Платформы")])]),r("v-btn",{attrs:{href:"navigator",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Навигатор")])]),r("v-btn",{attrs:{href:"grid",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Грид")])]),r("v-btn",{attrs:{href:"urlstate",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Состояние в url")])])],1),r("v-main",[r("router-view")],1)],1)},a=[],l={name:"App",data:()=>({})},s=l,i=r(1001),c=r(3453),u=r.n(c),f=r(7524),p=r(3583),v=r(112),m=r(7877),d=(0,i.Z)(s,o,a,!1,null,null,null),b=d.exports;u()(d,{VApp:f.Z,VAppBar:p.Z,VBtn:v.Z,VMain:m.Z});var h=r(8345),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("br"),n("br"),n("v-row",[n("v-col",{staticClass:"font-weight-bold"},[n("h2",[t._v("Версии")]),n("br"),n("v-text-field",{attrs:{readonly:"",outlined:"",label:"showcase2"},model:{value:t.libVersion,callback:function(e){t.libVersion=e},expression:"libVersion"}}),n("v-text-field",{attrs:{readonly:"",outlined:"",label:"showcase2-demo"},model:{value:t.appVersion,callback:function(e){t.appVersion=e},expression:"appVersion"}})],1),n("br"),n("v-col",[n("v-img",{attrs:{src:r(7404),contain:""}})],1)],1)],1)},Z=[],w={i8:"1.1.21"},V=r(7062);const C="Демо showcase2";function _(t){document.title=t?t+" - "+C:C}var x={name:"WelcomePage",data:()=>({appVersion:w.i8,libVersion:V.i8}),created(){_("Welcome")}},y=x,O=r(2102),P=r(247),j=r(7047),k=r(2877),E=r(1141),$=(0,i.Z)(y,g,Z,!1,null,"b2bac944",null),R=$.exports;u()($,{VCol:O.Z,VContainer:P.Z,VImg:j.Z,VRow:k.Z,VTextField:E.Z});var S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("logo-curs",{attrs:{id:"lcurs1"}}),r("logo-curs",{attrs:{id:"lcurs2"}})],1),r("v-col",{attrs:{cols:"6"}},[r("logo-curs",{attrs:{id:"lcurs3"}}),r("logo-curs",{attrs:{id:"lcurs4"}})],1)],1)],1)},T=[],M={name:"LogoCursPage",components:{},data:()=>({}),created(){_("Логотип КУРСа")}},A=M,B=(0,i.Z)(A,S,T,!1,null,null,null),W=B.exports;u()(B,{VCol:O.Z,VContainer:P.Z,VRow:k.Z});var F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("br"),r("br"),r("logo-platform",{attrs:{id:"lplatform1"}}),r("br"),r("br"),r("logo-platform",{attrs:{id:"lplatform2"}})],1),r("v-col",{attrs:{cols:"6"}},[r("br"),r("br"),r("logo-platform",{attrs:{id:"lplatform3"}}),r("br"),r("br"),r("logo-platform",{attrs:{id:"lplatform4"}})],1)],1)],1)},L=[],G={name:"LogoPlatformPage",components:{},data:()=>({}),created(){_("Логотип Платформы")}},I=G,N=(0,i.Z)(I,F,L,!1,null,null,null),U=N.exports;u()(N,{VCol:O.Z,VContainer:P.Z,VRow:k.Z});var q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"fill-height":"",fluid:""}},[r("v-row",{staticClass:"text-center"},[r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-3 font-weight-bold mb-3"},[t._v("Демонстрация навигатора")])])],1)],1)},z=[],D={name:"NavigatorPage",created(){_("Навигатор")}},H=D,J=(0,i.Z)(H,q,z,!1,null,null,null),K=J.exports;u()(J,{VCol:O.Z,VContainer:P.Z,VRow:k.Z});var Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"fill-height":"",fluid:""}},[r("v-row",{staticClass:"text-center"},[r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-3 font-weight-bold mb-3"},[t._v("Демонстрация грида")])])],1)],1)},X=[],Y={name:"GridPage",created(){_("Грид")}},tt=Y,et=(0,i.Z)(tt,Q,X,!1,null,null,null),rt=et.exports;u()(et,{VCol:O.Z,VContainer:P.Z,VRow:k.Z});var nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"fill-height":"",fluid:""}},[r("v-row",{staticClass:"text-center"},[r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-3 font-weight-bold mb-3"},[t._v(" Демонстрация состояния в url ")])])],1)],1)},ot=[],at={name:"UrlStatePage",created(){_("Состояние в url")}},lt=at,st=(0,i.Z)(lt,nt,ot,!1,null,null,null),it=st.exports;u()(st,{VCol:O.Z,VContainer:P.Z,VRow:k.Z}),n.Z.use(h.Z);const ct=[{path:"/",name:"welcome",component:R},{path:"/logocurs",name:"logocurs",component:W},{path:"/logoplatform",name:"logoplatform",component:U},{path:"/navigator",name:"navigator",component:K},{path:"/grid",name:"grid",component:rt},{path:"/urlstate",name:"urlstate",component:it}],ut=new h.Z({mode:"history",base:"/showcase2-demo/",routes:ct});var ft=ut,pt=r(1910);n.Z.use(pt.Z);var vt=new pt.Z({}),mt=r(4692);n.Z.use(mt.uB),n.Z.config.productionTip=!1,new n.Z({router:ft,vuetify:vt,render:t=>t(b)}).$mount("#app")},7404:function(t,e,r){t.exports=r.p+"img/welcome.0e094ac5.png"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,n,o,a){if(!n){var l=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],a=t[u][2];for(var s=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(r.O).every((function(t){return r.O[t](n[i])}))?n.splice(i--,1):(s=!1,a<l&&(l=a));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,o,a]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/showcase2-demo/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,a,l=n[0],s=n[1],i=n[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(i)var u=i(r)}for(e&&e(n);c<l.length;c++)a=l[c],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(u)},n=self["webpackChunkshowcase2_demo"]=self["webpackChunkshowcase2_demo"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(6917)}));n=r.O(n)})();
//# sourceMappingURL=app.afb74d69.js.map