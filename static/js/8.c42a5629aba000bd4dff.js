webpackJsonp([8],{"1iJl":function(t,a){},IGa6:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("lxVV"),l=i("PO8r"),_=i("NFr2"),e=i("bYoP"),n=i("kg1Y"),c=i("XoMy"),o=i.n(c),r=!1,d={name:"Contact",data:function(){return{global:s.a,idea:[]}},components:{Menu:l.a,LangTransfer:_.a,Footer:e.a,Logo:n.a},beforeCreate:function(){s.a.set_lang_pack()},created:function(){},mounted:function(){l.a.methods.change_logo_color("#251714","#efcd24",1e3),this.start_idea_anime()},destroyed:function(){r=!0},watch:{},methods:{start_idea_anime:function(){var t=this,a=0,i=this.global.lang_pack.contact_idea_list;r=!1;!function s(){var l=i[a];if(a++,a%=i.length,t.idea=[],null!==document.getElementById("contact_idea_bg")){document.getElementById("contact_idea_bg").style.width="0px";for(var _=0;_<l.length;_++)t.idea.push({idx:_,letter:l[_],visibility:"hidden"});for(var e=function(a){setTimeout(function(){if(t.idea[a].visibility="visible",a===l.length-1){if(null===document.getElementById("contact_idea_box"))return;var i=document.getElementById("contact_idea_box").clientWidth;document.getElementById("contact_idea_bg").style.right="calc(100% - "+(i+5)+"px)",new o.a({targets:"div.contact_idea_bg",width:i+10+"px",delay:100,duration:100*l.length,easing:"linear"})}},150*a)},n=0;n<l.length;n++)e(n);if(!1===r){var c={t:c};new o.a({targets:c,t:[0,0],duration:250*l.length+200,easing:"linear",complete:function(){s()}})}}}()}}},g={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"about_page",attrs:{id:"contact_page",ondragstart:"return false"}},[0===t.global.mode?i("div",[i("div",{staticClass:"title_part"},[i("div",{class:"title_"+t.global.lang},[t._v(t._s(t.global.lang_pack.contact))])]),t._v(" "),i("div",{staticClass:"info_part"},[i("div",{staticClass:"info_row"},[i("div",{staticClass:"info_first "},[t._v(t._s(t.global.lang_pack.there_an))]),t._v(" "),i("div",{staticClass:"info_second"},[t._v(t._s(t.global.lang_pack.unlimited))])]),t._v(" "),i("div",{staticClass:"info_row"},[i("div",{staticClass:"info_first "},[t._v(t._s(t.global.lang_pack.amount_of))]),t._v(" "),i("div",{staticClass:"contact_idea_box",attrs:{id:"contact_idea_box"}},[t._l(t.idea,function(a){return i("div",{key:a.idx,staticClass:"contact_idea_letter",style:{visibility:a.visibility},attrs:{id:"contact_idea_letter"}},[t._v("\n            "+t._s(a.letter)+"\n          ")])}),t._v(" "),i("div",{staticClass:"contact_idea_bg",attrs:{id:"contact_idea_bg"}})],2)]),t._v(" "),i("div",{staticClass:"info_row"},[i("div",{staticClass:"info_first "},[t._v(t._s(t.global.lang_pack.if_your_are))]),t._v(" "),i("div",{staticClass:"info_second"},[t._v(t._s(t.global.lang_pack.ready))])])]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"contact_part"},[i("div",{staticClass:"right_part"},[i("div",{staticClass:"right_title"},[t._v(t._s(t.global.lang_pack.let_connect))]),t._v(" "),i("a",{staticClass:"connect_email",attrs:{href:"mailto:info@signcheckhk.com"}},[t._v(t._s(t.global.lang_pack.connect_email))]),t._v("--\x3e\n        "),i("div",{staticClass:"apply_line"})]),t._v(" "),i("div",{staticClass:"right_part"},[i("div",{staticClass:"right_title"},[t._v(t._s(t.global.lang_pack.hongkong))]),t._v(" "),i("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.hongkong_address))])]),t._v(" "),i("div",{staticClass:"right_part"},[i("div",{staticClass:"right_title shenzhen_title"},[t._v(t._s(t.global.lang_pack.shenzhen))]),t._v(" "),i("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.shenzhen_address))])])])]):t._e(),t._v(" "),1===t.global.mode?i("div",{staticClass:"mobile_body"},[i("div",{staticClass:"title_part"},[i("div",{class:"title_"+t.global.lang},[t._v(t._s(t.global.lang_pack.contact))])]),t._v(" "),i("div",{staticClass:"info_part"},[i("div",{staticClass:"info_row"},[i("div",{staticClass:"info_first "},[t._v(t._s(t.global.lang_pack.there_an))]),t._v(" "),i("div",{staticClass:"info_second"},[t._v(t._s(t.global.lang_pack.unlimited))])]),t._v(" "),i("div",{staticClass:"info_row"},[i("div",{staticClass:"info_first "},[t._v(t._s(t.global.lang_pack.amount_of))]),t._v(" "),i("div",{staticClass:"contact_idea_box",attrs:{id:"contact_idea_box"}},[t._l(t.idea,function(a){return i("div",{key:a.idx,staticClass:"contact_idea_letter",style:{visibility:a.visibility},attrs:{id:"contact_idea_letter"}},[t._v("\n            "+t._s(a.letter)+"\n          ")])}),t._v(" "),i("div",{staticClass:"contact_idea_bg",attrs:{id:"contact_idea_bg"}})],2)]),t._v(" "),i("div",{staticClass:"info_row"},[i("div",{staticClass:"info_first "},[t._v(t._s(t.global.lang_pack.if_your_are))]),t._v(" "),i("div",{staticClass:"info_second"},[t._v(t._s(t.global.lang_pack.ready))])])]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"right_part",staticStyle:{"margin-top":"30px","margin-bottom":"30px"}},[i("div",{staticClass:"right_title"},[t._v(t._s(t.global.lang_pack.let_connect))]),t._v(" "),i("a",{staticClass:"connect_email",attrs:{href:"mailto:info@signcheckhk.com"}},[t._v(t._s(t.global.lang_pack.connect_email))]),t._v("--\x3e\n      "),i("div",{staticClass:"apply_line"})]),t._v(" "),i("div",{staticClass:"right_part"},[i("div",{staticClass:"right_title"},[t._v(t._s(t.global.lang_pack.hongkong))]),t._v(" "),i("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.hongkong_address))]),t._v(" "),i("div",{staticClass:"right_title shenzhen_title"},[t._v(t._s(t.global.lang_pack.shenzhen))]),t._v(" "),i("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.shenzhen_address))])])]):t._e(),t._v(" "),i("Footer"),t._v(" "),i("LangTransfer"),t._v(" "),i("Menu"),t._v(" "),i("Logo")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"people_run_part",attrs:{href:"mailto:info@signcheckhk.com"}},[a("img",{staticClass:"people_run_img",attrs:{src:"/static/about/people_run.png"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"people_run_part",attrs:{href:"mailto:info@signcheckhk.com"}},[a("img",{staticClass:"people_run_img",attrs:{src:"/static/about/people_run.png"}})])}]};var v=i("VU/8")(d,g,!1,function(t){i("1iJl")},"data-v-02381476",null);a.default=v.exports}});
//# sourceMappingURL=8.c42a5629aba000bd4dff.js.map