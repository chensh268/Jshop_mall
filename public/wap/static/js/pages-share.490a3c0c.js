(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-share"],{2056:function(t,n,a){"use strict";a.r(n);var e=a("57d7"),o=a("bbf4");for(var i in o)"default"!==i&&function(t){a.d(n,t,function(){return o[t]})}(i);a("921a");var s=a("2877"),c=Object(s["a"])(o["default"],e["a"],e["b"],!1,null,"2b6d00ca",null);n["default"]=c.exports},"57d7":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"share-top"},[a("img",{staticClass:"share-img",attrs:{src:t.poster,mode:"widthFix"}})]),a("v-uni-view",{staticClass:"share-bot"},[t.weiXinBrowser?a("v-uni-button",{staticClass:"btn btn-b"},[t._v("长按图片保存到手机")]):a("v-uni-button",{staticClass:"btn btn-b",on:{click:function(n){n=t.$handleEvent(n),t.savePoster()}}},[t._v("保存到本地")]),a("v-uni-button",{staticClass:"btn btn-w",on:{click:function(n){n=t.$handleEvent(n),t.goBack()}}},[t._v("返回")])],1)],1)},o=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return o})},"921a":function(t,n,a){"use strict";var e=a("d248"),o=a.n(e);o.a},bbf4:function(t,n,a){"use strict";a.r(n);var e=a("bf21"),o=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,function(){return e[t]})}(i);n["default"]=o.a},bf21:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{poster:""}},onLoad:function(t){this.poster=t.poster},computed:{weiXinBrowser:function(){return this.$common.isWeiXinBrowser()}},methods:{goBack:function(){uni.navigateBack({delta:1})},savePoster:function(){var t=this;t.downloadIamge(t.poster,"image")},downloadIamge:function(t,n){var a=new Image;a.setAttribute("crossorigin","anonymous"),a.onload=function(){var t=document.createElement("canvas");t.width=a.width,t.height=a.height;var e=t.getContext("2d");e.drawImage(a,0,0,a.width,a.height);var o=t.toDataURL("image/png"),i=document.createElement("a"),s=new MouseEvent("click");i.download=n||"photo",i.href=o,i.dispatchEvent(s)},a.src=t},downloadImageOfMp:function(t){}}};n.default=e},cbc7:function(t,n,a){n=t.exports=a("2350")(!1),n.push([t.i,".share-top[data-v-2b6d00ca]{margin-bottom:%?50?%;padding-top:%?50?%;text-align:center}.share-img[data-v-2b6d00ca]{-webkit-box-shadow:0 0 %?20?% #ccc;box-shadow:0 0 %?20?% #ccc;width:80%}.share-bot[data-v-2b6d00ca]{width:80%;margin:0 auto}.share-bot .btn[data-v-2b6d00ca]{width:100%;margin:%?20?% 0}",""])},d248:function(t,n,a){var e=a("cbc7");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("faddd154",e,!0,{sourceMap:!1,shadowMode:!1})}}]);