webpackJsonp([8],{Hl98:function(t,e){},Thf4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("lxVV"),o=(n("XoMy"),n("PO8r")),s=n("NFr2"),r=n("bYoP"),c=n("kg1Y"),i={name:"About",data:function(){return{global:a.a,dots:""}},components:{Menu:o.a,LangTransfer:s.a,Footer:r.a,Logo:c.a},beforeCreate:function(){a.a.refresh_windows_size(),a.a.set_lang_pack()},created:function(){},mounted:function(){var t=this;o.a.methods.change_logo_color("#251714","#efcd24",1e3);setInterval(function(){t.dots+=".",t.dots.length>6&&(t.dots="")},500)},destroyed:function(){},watch:{},methods:{}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"past_page",attrs:{id:"past_page"}},[n("div",{style:{height:t.global.height+"px"}},[n("div",{staticClass:"coming_soon_text"},[t._v(t._s(t.global.lang_pack.coming_soon+"\n"+t.dots)+"\n      ")])]),t._v(" "),n("LangTransfer"),t._v(" "),n("Menu"),t._v(" "),n("Logo",{attrs:{canBeHidden:!1}})],1)},staticRenderFns:[]};var l=n("VU/8")(i,d,!1,function(t){n("Hl98")},"data-v-49e950c9",null);e.default=l.exports}});
//# sourceMappingURL=8.10a94dea6817af5b709e.js.map