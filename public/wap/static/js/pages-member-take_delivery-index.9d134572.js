(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-take_delivery-index"],{"04da":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"content-top"},[i("v-uni-view",{staticClass:"ad"},[i("v-uni-image",{staticClass:"ad-img",attrs:{src:"/static/demo-img/banner.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"search"},[i("v-uni-view",{staticClass:"search-c"},[i("v-uni-image",{staticClass:"icon search-icon",attrs:{src:"/static/image/zoom.png"}}),i("v-uni-input",{staticClass:"search-input",attrs:{"placeholder-class":"search-input-p",placeholder:"请输入完整提货单号、订单号、提货手机号"},model:{value:t.key,callback:function(a){t.key=a},expression:"key"}})],1),i("v-uni-button",{staticClass:"btn btn-g",attrs:{"hover-class":"btn-hover2"},on:{click:function(a){a=t.$handleEvent(a),t.search(a)}}},[t._v("查询")])],1),t.allData.length?i("v-uni-view",[i("v-uni-checkbox-group",{on:{change:function(a){a=t.$handleEvent(a),t.checkboxChange(a)}}},[i("v-uni-view",{staticClass:"img-list"},t._l(t.allData,function(a,e){return i("v-uni-view",{key:e,staticClass:"img-list-c"},[i("v-uni-view",{staticClass:"img-list-title"},[i("v-uni-view",{staticClass:"ilt-left"},[i("v-uni-text",{staticClass:"color-6"},[t._v("订单号:")]),i("v-uni-text",{staticClass:"color-9"},[t._v(t._s(a.order_id))])],1),i("v-uni-view",{staticClass:"ilt-right  color-9"},[t._v(t._s(a.status_name))])],1),i("v-uni-view",{staticClass:"img-list-bot"},[i("v-uni-label",{staticClass:"uni-list-cell uni-list-cell-pd"},[a.disabled?t._e():i("v-uni-view",{staticClass:"img-list-checkbox"},[a.disabled?i("v-uni-checkbox",{staticClass:"checkboxNo",attrs:{color:"#FF7159",value:a.id,checked:a.checked,disabled:a.disabled}}):i("v-uni-checkbox",{attrs:{color:"#FF7159",value:a.id,checked:a.checked,disabled:a.disabled}})],1)],1),i("v-uni-view",{staticClass:"img-list-right"},t._l(a.goods,function(a,e){return i("v-uni-view",{key:e,staticClass:"img-list-content"},[i("v-uni-view",{staticClass:"img-list-item"},[i("v-uni-image",{staticClass:"img-list-item-l",attrs:{src:a.image_url,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"img-list-item-r"},[i("v-uni-view",{staticClass:"goods-name list-goods-name"},[t._v(t._s(a.name))]),i("v-uni-view",{staticClass:"goods-item-c"},[i("v-uni-view",{staticClass:"goods-buy"},[i("v-uni-view",{staticClass:"goods-salesvolume"},[t._v("规格："+t._s(a.addon))]),i("v-uni-view",{staticClass:"goods-salesvolume"},[t._v("数量："+t._s(a.nums))]),i("v-uni-view",{staticClass:"goods-salesvolume"},[t._v("SN码："+t._s(a.sn))]),i("v-uni-view",{staticClass:"goods-salesvolume"},[t._v("BN码："+t._s(a.bn))])],1)],1)],1)],1)],1)}),1)],1)],1)}),1)],1)],1):t._e()],1),t.allData.length?i("v-uni-view",{staticClass:"button-bottom"},[t.checkedIds.length?i("v-uni-button",{staticClass:"btn btn-b btn-square",on:{click:function(a){a=t.$handleEvent(a),t.write(a)}}},[t._v("确认核销")]):i("v-uni-button",{staticClass:"btn btn-b btn-square completed"},[t._v("请选择待核销订单")])],1):t._e()],1)},s=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return s})},"0bf9":function(t,a,i){"use strict";i.r(a);var e=i("25ef"),s=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(a,t,function(){return e[t]})}(n);a["default"]=s.a},"25ef":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("6762"),i("2fdb"),i("ac6a");var e={data:function(){return{key:"",isgo:!1,isgotext:"确认核销",allData:[]}},onLoad:function(t){t.id&&(this.key=t.id),this.getLadingInfo()},computed:{checkedIds:function(){var t=[];return this.allData.forEach(function(a){!a.disabled&&a.checked&&1===a.status&&t.push(a.id)}),t}},methods:{checkboxChange:function(t){var a=t.detail.value;this.allData.forEach(function(t){a.includes(t.id)?t.checked=!0:t.checked=!1})},getLadingInfo:function(){var t=this;if(this.key){var a={key:this.key};this.$api.ladingInfo(a,function(a){a.status?t.allData=t.formatData(a.data):(t.allData=[],t.$common.modelShow("提示",a.msg,function(){}))})}},search:function(){if(""==this.key)return this.$common.errorToShow("请输入查询关键字"),!1;this.getLadingInfo()},isGoWrite:function(t){var a=!1;2==t.order_info.pay_status&&3==t.order_info.ship_status?(a=!0,this.lading_id=t.id,this.goodsList=t.goods,this.allData=t):this.$common.modelShow("无法核销","订单必须支付并已发货才可以核销",function(){}),this.isgo=a},formatData:function(t){var a=this;return t.forEach(function(t){2===t.status?(a.$set(t,"checked",!1),a.$set(t,"disabled",!0)):(a.$set(t,"checked",!0),a.$set(t,"disabled",!1))}),t},write:function(){var t=this;this.$common.modelShow("提示","您确认核销吗？",function(a){var i={lading_ids:t.checkedIds.join()};t.$api.ladingExec(i,function(a){a.status&&t.$common.successToShow(a.msg,t.afterChangeDataStatus())})})},afterChangeDataStatus:function(){var t=this;this.allData.forEach(function(a){t.checkedIds.indexOf(a.id)>-1&&(a.status=2,a.checked=!1,a.disabled=!0)})}}};a.default=e},6212:function(t,a,i){var e=i("b137");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=i("4f06").default;s("451030b8",e,!0,{sourceMap:!1,shadowMode:!1})},a56e:function(t,a,i){"use strict";i.r(a);var e=i("04da"),s=i("0bf9");for(var n in s)"default"!==n&&function(t){i.d(a,t,function(){return s[t]})}(n);i("ada7");var o=i("2877"),c=Object(o["a"])(s["default"],e["a"],e["b"],!1,null,"c2552a9e",null);a["default"]=c.exports},ada7:function(t,a,i){"use strict";var e=i("6212"),s=i.n(e);s.a},b137:function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".ad[data-v-c2552a9e]{width:100%;\n\t/* margin: 20upx 0; */overflow:hidden}.ad-img[data-v-c2552a9e]{width:100%;float:left;margin-bottom:%?20?%}.ad-img[data-v-c2552a9e]:last-child{margin-bottom:0}.search[data-v-c2552a9e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.search-c[data-v-c2552a9e]{width:85%;margin-right:2%}.search-icon[data-v-c2552a9e]{left:%?20?%}.search-input[data-v-c2552a9e]{padding:%?10?% %?30?% %?10?% %?70?%}.search-input-p[data-v-c2552a9e]{padding:0!important}.search .btn[data-v-c2552a9e]{width:15%;border:none;background-color:#f1f1f1;font-size:%?26?%;color:#333;border-radius:%?6?%;line-height:%?72?%;padding-left:%?18?%;padding-right:%?18?%}.list-goods-name[data-v-c2552a9e]{margin-bottom:%?8?%}.goods-salesvolume[data-v-c2552a9e]{display:block;margin-bottom:%?6?%}.completed[data-v-c2552a9e]{background-color:#d9d9d9;color:#4e4e4e}.img-list-bot[data-v-c2552a9e]{background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?30?% %?26?%}.img-list-title[data-v-c2552a9e]{padding:%?26?% %?26?% 0;background-color:#fff;font-size:%?28?%;overflow:hidden}.ilt-left[data-v-c2552a9e]{float:left}.ilt-right[data-v-c2552a9e]{float:right}.img-list-checkbox[data-v-c2552a9e]{\r\n\t/* display: inline-block; */position:relative;height:100%}.img-list-checkbox uni-checkbox[data-v-c2552a9e]{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.img-list-right[data-v-c2552a9e]{\r\n\t/* display: inline-block; */margin-left:%?60?%}.img-list-item[data-v-c2552a9e]{padding:0}.img-list-item-r[data-v-c2552a9e]{width:%?360?%}",""])}}]);