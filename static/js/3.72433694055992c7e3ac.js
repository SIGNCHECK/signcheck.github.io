webpackJsonp([3],{"5LeU":function(t,e){},"z+ph":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("lxVV"),s=(n("XoMy"),n("PO8r")),a={name:"Map",data:function(){return{global:o.a,dots:""}},components:{Menu:s.a},beforeCreate:function(){o.a.change_root_size(),o.a.set_lang_pack()},created:function(){},mounted:function(){var t=this;window.onresize=function(){o.a.change_root_size()},this.refresh_root_size(),s.a.methods.change_logo_color("#251714","#efcd24",1e3);var e=0;setInterval(function(){t.dots+=".",7===++e&&(e=0,t.dots="")},1e3)},watch:{"global.width":function(t,e){this.refresh_root_size()}},destroyed:function(){},methods:{refresh_root_size:function(){o.a.width<0?document.documentElement.style.fontSize="0px":document.documentElement.style.fontSize=o.a.width/1920+"px"}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map_page",attrs:{id:"map_page"}},[e("div",{staticClass:"COMMING",attrs:{id:"COMMING"}},[this._v("\n    COMMING SOON\n  ")]),this._v(" "),e("div",{staticClass:"dots",attrs:{id:"dots"}},[this._v("\n    "+this._s(this.dots)+"\n  ")]),this._v(" "),e("Menu")],1)},staticRenderFns:[]};var r=n("VU/8")(a,i,!1,function(t){n("5LeU")},"data-v-7d6631b0",null);e.default=r.exports}});
//# sourceMappingURL=3.72433694055992c7e3ac.js.map