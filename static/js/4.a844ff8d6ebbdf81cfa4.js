webpackJsonp([4],{ZQEM:function(t,e){},wXUp:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("lxVV"),n=i("XoMy"),s=i.n(n),d=i("kg1Y"),o=!1,l={name:"Home",data:function(){return{global:a.a,idea:[]}},components:{Logo:d.a},beforeCreate:function(){a.a.change_root_size(),a.a.set_lang_pack()},created:function(){},mounted:function(){window.onresize=function(){a.a.change_root_size()},d.a.methods.change_color("#251714","#efcd24",0),this.refresh_root_size(),this.start_idea_anime(),this.start_guide_anime()},destroyed:function(){o=!0},watch:{"global.width":function(t,e){this.refresh_root_size()}},methods:{refresh_root_size:function(){a.a.width<700?document.documentElement.style.fontSize=700/1920+"px":document.documentElement.style.fontSize=a.a.width/1920+"px"},start_idea_anime:function(){var t=this,e=0,i=this.global.lang_pack.home_idea_list;o=!1;!function a(){var n=i[e];e++,e%=3,t.idea=[],document.getElementById("idea_bg").style.width="0px";for(var d=0;d<n.length;d++)t.idea.push({idx:d,letter:n[d],visibility:"hidden"});for(var l=function(e){setTimeout(function(){if(t.idea[e].visibility="visible",e===n.length-1){var i=document.getElementById("idea_box").clientWidth;new s.a({targets:"div.idea_bg",width:i+"px",delay:100,duration:100*n.length,easing:"linear"})}},150*e)},r=0;r<n.length;r++)l(r);!1===o&&setTimeout(function(){a()},250*n.length+200)}()},start_guide_anime:function(){new s.a({targets:"div.guide_ball",opacity:[{value:["0%","100%"],duration:250},{value:["100%","0%"],delay:750,duration:250}],scaleY:[{value:2,duration:250,delay:250},{value:1,duration:250}],scaleX:[{value:.5,duration:250,delay:250},{value:1,duration:250}],translateY:[{value:"30rem",duration:250,delay:250},{value:"70rem",duration:250}],endDelay:250,loop:!0,easing:"linear"})}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home_page",attrs:{id:"home_page"}},[i("div",{staticClass:"text_part",attrs:{id:"text_part"}},[i("div",{staticClass:"idea_box",attrs:{id:"idea_box"}},[i("div",{staticClass:"idea_bg",attrs:{id:"idea_bg"}}),t._v(" "),t._l(t.idea,function(e){return i("div",{key:e.idx,staticClass:"idea_letter",style:{visibility:e.visibility},attrs:{id:"idea_letter"}},[t._v("\n        "+t._s(e.letter)+"\n      ")])})],2),t._v(" "),i("div",{staticClass:"check_box",attrs:{id:"check_box"}},[t._v("\n      "+t._s(t.global.lang_pack.check)+"\n    ")])]),t._v(" "),t._m(0),t._v(" "),i("Logo")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"guide_part",attrs:{id:"guide_part"}},[e("div",{staticClass:"guide_box",attrs:{id:"guide_box"}},[e("div",{staticClass:"guide_ball",attrs:{id:"guide_ball"}})])])}]};var u=i("VU/8")(l,r,!1,function(t){i("ZQEM")},null,null);e.default=u.exports}});
//# sourceMappingURL=4.a844ff8d6ebbdf81cfa4.js.map