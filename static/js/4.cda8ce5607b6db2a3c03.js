webpackJsonp([4],{"7KYw":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var _=s("lxVV"),l=s("XoMy"),i=s.n(l),e=s("PO8r"),n=s("NFr2"),c=s("bYoP"),o=s("kg1Y"),r=!1,v={name:"About",data:function(){return{global:_.a,guarantee_text_idx:0}},components:{Menu:e.a,LangTransfer:n.a,Footer:c.a,Logo:o.a},beforeCreate:function(){_.a.refresh_windows_size(),_.a.set_lang_pack()},created:function(){},mounted:function(){this.start_anime(),e.a.methods.change_logo_color("#251714","#efcd24",1e3)},destroyed:function(){},watch:{"global.lang":function(t,a){this.refresh_page()}},methods:{start_anime:function(){this.guarantee_anime()},guarantee_anime:function(){i()({targets:this,guarantee_text_idx:[0,1,2,3,4,5,6,7,8],easing:"linear",loop:!0,direction:"alternate",duration:16e3,round:1})},expend:function(t){if(!r){r=!0;var a=document.getElementById("part_"+t).clientHeight,s=document.getElementsByClassName("part_"+t)[0].clientHeight;i()({targets:"div.part_"+t,height:0===s?a:0,easing:"linear",duration:a/2,complete:function(){r=!1}}),i()({targets:"div.add_"+t,rotate:0===s?45:0,easing:"linear",duration:200})}},refresh_page:function(){for(var t=0;t<document.getElementsByClassName("expand_part").length;t++){0!==document.getElementsByClassName("part_"+t)[0].clientHeight&&(r=!1,this.expend(t))}}}},d={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about_page",attrs:{id:"about_page",onselectstart:"return false",ondragstart:"return false"}},[0===t.global.mode?s("div",[s("div",{staticClass:"title_part"},[s("div",{class:"title_"+t.global.lang},[t._v(t._s(t.global.lang_pack.about))])]),t._v(" "),s("div",{staticClass:"main_part"},[s("div",{staticClass:"subtitle_box"},[s("div",{staticClass:"subtitle_text"},[t._v("\n            "+t._s(t.global.lang_pack.who_are_we)+"\n          ")])]),t._v(" "),s("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.who_are_we_content))]),t._v(" "),s("div",{staticClass:"we_guarantee",attrs:{id:"we_guarantee"}},[t._v("\n          "+t._s(t.global.lang_pack.we_guarantee)+"\n        ")]),t._v(" "),s("div",{staticClass:"guarantee_part",attrs:{id:"guarantee_part"}},[s("svg",{staticClass:"quotation_mark_left",attrs:{viewBox:"0 0 100 77.32",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("clipPath",{attrs:{id:"clip-path",transform:"translate(0 0)"}},[s("rect",{staticClass:"quota_1",attrs:{height:"77.32",width:"45.86"}})]),t._v(" "),s("clipPath",{attrs:{id:"clip-path-2",transform:"translate(0 0)"}},[s("rect",{staticClass:"quota_1",attrs:{height:"77.32",width:"45.86",x:"54.14"}})])]),t._v(" "),s("path",{staticClass:"quota_color",attrs:{d:"M40.63,0H5.25A5.23,5.23,0,0,0,0,5.23V39.86S-1.82,72.73,40,77.29A5.23,5.23,0,0,0,42,67c-5.9-1.51-16.68-6-19.38-18.85a5.24,5.24,0,0,1,5.12-6.33H40.63a5.23,5.23,0,0,0,5.23-5.23V5.23A5.23,5.23,0,0,0,40.63,0",transform:"translate(0 0)"}}),t._v(" "),s("path",{staticClass:"quota_color",attrs:{d:"M94.77,0H59.38a5.23,5.23,0,0,0-5.23,5.23V39.86s-1.83,32.87,40,37.43A5.23,5.23,0,0,0,96.09,67c-5.9-1.51-16.68-6-19.39-18.85a5.25,5.25,0,0,1,5.13-6.33H94.77A5.23,5.23,0,0,0,100,36.62V5.23A5.23,5.23,0,0,0,94.77,0",transform:"translate(0 0)"}})]),t._v(" "),s("div",{staticClass:"guarantee_text",attrs:{id:"guarantee_text"}},[t._v("\n            "+t._s(t.global.lang_pack.we_guarantee_text[t.guarantee_text_idx])+"\n          ")]),t._v(" "),s("svg",{staticClass:"quotation_mark_right",attrs:{viewBox:"0 0 100 77.32",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("clipPath",{attrs:{id:"clip-path",transform:"translate(0 0)"}},[s("rect",{staticClass:"quota_1",attrs:{height:"77.32",width:"45.86"}})]),t._v(" "),s("clipPath",{attrs:{id:"clip-path-2",transform:"translate(0 0)"}},[s("rect",{staticClass:"quota_1",attrs:{height:"77.32",width:"45.86",x:"54.14"}})])]),t._v(" "),s("path",{staticClass:"quota_color",attrs:{d:"M40.63,0H5.25A5.23,5.23,0,0,0,0,5.23V39.86S-1.82,72.73,40,77.29A5.23,5.23,0,0,0,42,67c-5.9-1.51-16.68-6-19.38-18.85a5.24,5.24,0,0,1,5.12-6.33H40.63a5.23,5.23,0,0,0,5.23-5.23V5.23A5.23,5.23,0,0,0,40.63,0",transform:"translate(0 0)"}}),t._v(" "),s("path",{staticClass:"quota_color",attrs:{d:"M94.77,0H59.38a5.23,5.23,0,0,0-5.23,5.23V39.86s-1.83,32.87,40,37.43A5.23,5.23,0,0,0,96.09,67c-5.9-1.51-16.68-6-19.39-18.85a5.25,5.25,0,0,1,5.13-6.33H94.77A5.23,5.23,0,0,0,100,36.62V5.23A5.23,5.23,0,0,0,94.77,0",transform:"translate(0 0)"}})])]),t._v(" "),s("div",{staticClass:"grey_line",staticStyle:{"margin-top":"80px"}}),t._v(" "),s("div",{staticClass:"subtitle_box"},[s("div",{staticClass:"subtitle_text"},[t._v("\n            "+t._s(t.global.lang_pack.how_we_do)+"\n          ")]),t._v(" "),s("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.how_we_do_content))]),t._v(" "),s("div",{staticClass:"subsubtitle_box"},[s("div",{staticClass:"subsubtitle_text"},[t._v("\n              "+t._s(t.global.lang_pack.consistency)+"\n            ")]),t._v(" "),s("div",{staticClass:"subsubtitle_num"},[t._v("01")])]),t._v(" "),s("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.consistency_text))]),t._v(" "),s("div",{staticClass:"subsubtitle_box"},[s("div",{staticClass:"subsubtitle_text"},[t._v("\n              "+t._s(t.global.lang_pack.fusion)+"\n            ")]),t._v(" "),s("div",{staticClass:"subsubtitle_num"},[t._v("02")])]),t._v(" "),s("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.fusion_text))]),t._v(" "),s("div",{staticClass:"subsubtitle_box"},[s("div",{staticClass:"subsubtitle_text"},[t._v("\n              "+t._s(t.global.lang_pack.scientific)+"\n            ")]),t._v(" "),s("div",{staticClass:"subsubtitle_num"},[t._v("03")])]),t._v(" "),s("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.scientific_text))])]),t._v(" "),s("div",{staticClass:"grey_line",staticStyle:{"margin-top":"80px"}}),t._v(" "),s("div",{staticClass:"subtitle_box"},[s("div",{staticClass:"subtitle_text"},[t._v("\n            "+t._s(t.global.lang_pack.we_hold)+"\n          ")])]),t._v(" "),s("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.we_hold_content))]),t._v(" "),s("div",{staticClass:"grey_line",staticStyle:{"margin-top":"80px"}}),t._v(" "),s("div",{staticClass:"subtitle_box"},[s("div",{staticClass:"subtitle_text"},[t._v("\n            "+t._s(t.global.lang_pack.what_we_do)+"\n          ")]),t._v(" "),s("div",{staticClass:"what_we_do_list_box"},t._l(t.global.lang_pack.what_we_do_list,function(a,_){return s("div",{key:_,staticClass:"what_we_do_item"},[t._v(t._s(a)+"\n            ")])}),0)])])]):t._e(),t._v(" "),1===t.global.mode?s("div",{staticClass:"mobile_body"},[s("div",{staticClass:"title_part"},[s("div",{class:"title_"+t.global.lang},[t._v(t._s(t.global.lang_pack.about))])]),t._v(" "),s("div",{staticClass:"separator_line"}),t._v(" "),s("div",{staticClass:"part_box"},[s("div",{staticClass:"part_click_box",on:{click:function(a){return t.expend(0)}}},[s("div",{staticClass:"subtitle"},[t._v(t._s(t.global.lang_pack.who_are_we))]),t._v(" "),s("div",{staticClass:"add_sign add_0"})]),t._v(" "),s("div",{staticClass:"expand_part_box part_0"},[s("div",{staticClass:"expand_part",attrs:{id:"part_0"}},[s("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.who_are_we_content))]),t._v(" "),s("div",{staticClass:"we_guarantee"},[t._v("\n              "+t._s(t.global.lang_pack.we_guarantee)+"\n            ")]),t._v(" "),s("div",{staticClass:"guarantee_part"},[s("svg",{staticClass:"quotation_mark_left",attrs:{viewBox:"0 0 100 77.32",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("clipPath",{attrs:{id:"clip-path",transform:"translate(0 0)"}},[s("rect",{staticClass:"quota_1",attrs:{height:"77.32",width:"45.86"}})]),t._v(" "),s("clipPath",{attrs:{id:"clip-path-2",transform:"translate(0 0)"}},[s("rect",{staticClass:"quota_1",attrs:{height:"77.32",width:"45.86",x:"54.14"}})])]),t._v(" "),s("path",{staticClass:"quota_color",attrs:{d:"M40.63,0H5.25A5.23,5.23,0,0,0,0,5.23V39.86S-1.82,72.73,40,77.29A5.23,5.23,0,0,0,42,67c-5.9-1.51-16.68-6-19.38-18.85a5.24,5.24,0,0,1,5.12-6.33H40.63a5.23,5.23,0,0,0,5.23-5.23V5.23A5.23,5.23,0,0,0,40.63,0",transform:"translate(0 0)"}}),t._v(" "),s("path",{staticClass:"quota_color",attrs:{d:"M94.77,0H59.38a5.23,5.23,0,0,0-5.23,5.23V39.86s-1.83,32.87,40,37.43A5.23,5.23,0,0,0,96.09,67c-5.9-1.51-16.68-6-19.39-18.85a5.25,5.25,0,0,1,5.13-6.33H94.77A5.23,5.23,0,0,0,100,36.62V5.23A5.23,5.23,0,0,0,94.77,0",transform:"translate(0 0)"}})]),t._v(" "),s("div",{staticClass:"guarantee_text"},[t._v("\n                "+t._s(t.global.lang_pack.we_guarantee_text[t.guarantee_text_idx])+"\n              ")]),t._v(" "),s("svg",{staticClass:"quotation_mark_right",attrs:{viewBox:"0 0 100 77.32",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("clipPath",{attrs:{id:"clip-path",transform:"translate(0 0)"}},[s("rect",{staticClass:"quota_1",attrs:{height:"77.32",width:"45.86"}})]),t._v(" "),s("clipPath",{attrs:{id:"clip-path-2",transform:"translate(0 0)"}},[s("rect",{staticClass:"quota_1",attrs:{height:"77.32",width:"45.86",x:"54.14"}})])]),t._v(" "),s("path",{staticClass:"quota_color",attrs:{d:"M40.63,0H5.25A5.23,5.23,0,0,0,0,5.23V39.86S-1.82,72.73,40,77.29A5.23,5.23,0,0,0,42,67c-5.9-1.51-16.68-6-19.38-18.85a5.24,5.24,0,0,1,5.12-6.33H40.63a5.23,5.23,0,0,0,5.23-5.23V5.23A5.23,5.23,0,0,0,40.63,0",transform:"translate(0 0)"}}),t._v(" "),s("path",{staticClass:"quota_color",attrs:{d:"M94.77,0H59.38a5.23,5.23,0,0,0-5.23,5.23V39.86s-1.83,32.87,40,37.43A5.23,5.23,0,0,0,96.09,67c-5.9-1.51-16.68-6-19.39-18.85a5.25,5.25,0,0,1,5.13-6.33H94.77A5.23,5.23,0,0,0,100,36.62V5.23A5.23,5.23,0,0,0,94.77,0",transform:"translate(0 0)"}})])]),t._v(" "),s("div",{staticClass:"blank_box"})])])]),t._v(" "),s("div",{staticClass:"separator_line"}),t._v(" "),s("div",{staticClass:"part_box"},[s("div",{staticClass:"part_click_box",on:{click:function(a){return t.expend(1)}}},[s("div",{staticClass:"subtitle"},[t._v(t._s(t.global.lang_pack.how_we_do))]),t._v(" "),s("div",{staticClass:"add_sign add_1"})]),t._v(" "),s("div",{staticClass:"expand_part_box part_1"},[s("div",{staticClass:"expand_part",attrs:{id:"part_1"}},[s("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.how_we_do_content))]),t._v(" "),s("div",{staticClass:"subsubtitle_box"},[s("div",{staticClass:"subsubtitle_num"},[t._v("01")]),t._v(" "),s("div",{staticClass:"subsubtitle_text"},[t._v("\n                "+t._s(t.global.lang_pack.consistency)+"\n              ")])]),t._v(" "),s("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.consistency_text))]),t._v(" "),s("div",{staticClass:"subsubtitle_box"},[s("div",{staticClass:"subsubtitle_num"},[t._v("02")]),t._v(" "),s("div",{staticClass:"subsubtitle_text"},[t._v(t._s(t.global.lang_pack.fusion))])]),t._v(" "),s("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.fusion_text))]),t._v(" "),s("div",{staticClass:"subsubtitle_box"},[s("div",{staticClass:"subsubtitle_num"},[t._v("03")]),t._v(" "),s("div",{staticClass:"subsubtitle_text"},[t._v(t._s(t.global.lang_pack.scientific))])]),t._v(" "),s("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.scientific_text))]),t._v(" "),s("div",{staticClass:"blank_box"})])])]),t._v(" "),s("div",{staticClass:"separator_line"}),t._v(" "),s("div",{staticClass:"part_box"},[s("div",{staticClass:"part_click_box",on:{click:function(a){return t.expend(2)}}},[s("div",{staticClass:"subtitle"},[t._v(t._s(t.global.lang_pack.we_hold))]),t._v(" "),s("div",{staticClass:"add_sign add_2"})]),t._v(" "),s("div",{staticClass:"expand_part_box part_2"},[s("div",{staticClass:"expand_part",attrs:{id:"part_2"}},[s("div",{class:"content_text_"+t.global.lang},[t._v(t._s(t.global.lang_pack.we_hold_content))]),t._v(" "),s("div",{staticClass:"blank_box"})])])]),t._v(" "),s("div",{staticClass:"separator_line"}),t._v(" "),s("div",{staticClass:"part_box"},[s("div",{staticClass:"part_click_box",on:{click:function(a){return t.expend(3)}}},[s("div",{staticClass:"subtitle"},[t._v(t._s(t.global.lang_pack.what_we_do))]),t._v(" "),s("div",{staticClass:"add_sign add_3"})]),t._v(" "),s("div",{staticClass:"expand_part_box part_3"},[s("div",{staticClass:"expand_part",attrs:{id:"part_3"}},[s("div",{staticClass:"what_we_do_list_box"},t._l(t.global.lang_pack.what_we_do_list,function(a,_){return s("div",{key:_,staticClass:"what_we_do_item"},[t._v(t._s(a)+"\n              ")])}),0),t._v(" "),s("div",{staticStyle:{height:"60px"}})])])]),t._v(" "),s("div",{staticClass:"separator_line"}),t._v(" "),s("div",{staticStyle:{height:"60px"}})]):t._e(),t._v(" "),s("Footer"),t._v(" "),s("LangTransfer"),t._v(" "),s("Menu"),t._v(" "),s("Logo")],1)},staticRenderFns:[]};var g=s("VU/8")(v,d,!1,function(t){s("U8Gj")},"data-v-f5d99934",null);a.default=g.exports},U8Gj:function(t,a){}});
//# sourceMappingURL=4.cda8ce5607b6db2a3c03.js.map