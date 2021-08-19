webpackJsonp([6],{wXUp:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("lxVV"),s=e("XoMy"),l=e.n(s),n=e("kg1Y"),o=e("PO8r"),c=e("NFr2"),d=!1,r={name:"Home",data:function(){return{global:i.a,idea:[]}},components:{Logo:n.a,Menu:o.a,LangTransfer:c.a},beforeCreate:function(){i.a.refresh_windows_size(),i.a.set_lang_pack()},created:function(){},mounted:function(){window.onresize=function(){i.a.refresh_windows_size()},n.a.methods.change_color("#251714","#efcd24",0),this.start_idea_anime(),this.start_guide_anime(),document.getElementById("home_page").addEventListener("wheel",this.handleScroll)},destroyed:function(){d=!0},watch:{},methods:{start_idea_anime:function(){var t=this,a=0,e=this.global.lang_pack.home_idea_list;d=!1;!function i(){var s=e[a];if(a++,a%=3,t.idea=[],null!==document.getElementById("idea_bg")){document.getElementById("idea_bg").style.width="0px";for(var n=0;n<s.length;n++)t.idea.push({idx:n,letter:s[n],visibility:"hidden"});for(var o=function(a){setTimeout(function(){if(t.idea[a].visibility="visible",a===s.length-1){if(null===document.getElementById("idea_box"))return;var e=document.getElementById("idea_box").clientWidth;new l.a({targets:"div.idea_bg",width:e+"px",delay:100,duration:100*s.length,easing:"linear"})}},150*a)},c=0;c<s.length;c++)o(c);!1===d&&setTimeout(function(){i()},250*s.length+200)}}()},start_guide_anime:function(){new l.a({targets:"div.guide_ball",opacity:[{value:["0%","100%"],duration:250},{value:["100%","0%"],delay:750,duration:250}],scaleY:[{value:2,duration:250,delay:250},{value:1,duration:250}],scaleX:[{value:.5,duration:250,delay:250},{value:1,duration:250}],translateY:[{value:"30px",duration:250,delay:250},{value:"70px",duration:250}],endDelay:250,loop:!0,easing:"linear"})},handleScroll:function(t){this.scroll=document.documentElement.scrollTop||document.body.scrollTop,t.deltaY>0&&this.to_stories()},to_stories:function(){this.$router.push("/Stories")}}},_={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home_page"},[e("div",{staticClass:"home_page",attrs:{id:"home_page"},on:{click:t.to_stories}},[e("div",{staticClass:"text_part",attrs:{id:"text_part"}},[e("div",{staticClass:"idea_box",attrs:{id:"idea_box"}},[e("div",{staticClass:"idea_bg",attrs:{id:"idea_bg"}}),t._v(" "),t._l(t.idea,function(a){return e("div",{key:a.idx,staticClass:"idea_letter",style:{visibility:a.visibility},attrs:{id:"idea_letter"}},[t._v("\n          "+t._s(a.letter)+"\n        ")])})],2)]),t._v(" "),e("div",{staticClass:"check_box"},[e("svg",{staticClass:"check",attrs:{viewBox:"0 0 460 97.56",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{staticClass:"check_color",attrs:{d:"M113.39.8a4,4,0,0,1,4.11,4.12V92.64a4.11,4.11,0,0,1-8.22,0V4.92A4,4,0,0,1,113.39.8m7.68,44.69a4,4,0,0,1,4.11-4.11h36.46a4.11,4.11,0,1,1,0,8.22H125.18a4,4,0,0,1-4.11-4.11M173.15.8a4,4,0,0,1,4.12,4.12V92.64a4.12,4.12,0,0,1-8.23,0V4.92A4,4,0,0,1,173.15.8"}}),t._v(" "),e("path",{staticClass:"check_color",attrs:{d:"M173.15,97.56a4.86,4.86,0,0,1-4.91-4.92V4.92a4.92,4.92,0,1,1,9.83,0V92.64a4.87,4.87,0,0,1-4.92,4.92m0-95.95a3.23,3.23,0,0,0-3.3,3.31V92.64a3.31,3.31,0,1,0,6.61,0V4.92a3.23,3.23,0,0,0-3.31-3.31m-59.76,96a4.86,4.86,0,0,1-4.91-4.92V4.92a4.92,4.92,0,1,1,9.83,0V92.64a4.87,4.87,0,0,1-4.92,4.92m0-95.95a3.23,3.23,0,0,0-3.31,3.31V92.64a3.31,3.31,0,0,0,6.62,0V4.92a3.23,3.23,0,0,0-3.31-3.31M161.64,50.4H125.18a4.92,4.92,0,1,1,0-9.83h36.46a4.92,4.92,0,1,1,0,9.83m-36.46-8.22a3.31,3.31,0,0,0,0,6.62h36.46a3.31,3.31,0,1,0,0-6.62Z"}}),t._v(" "),e("path",{staticClass:"check_color",attrs:{d:"M206.7,92.64a4,4,0,0,1,4.11-4.11h47.27a4.11,4.11,0,1,1,0,8.22H210.81a4,4,0,0,1-4.11-4.11M262.05,4.92A4,4,0,0,1,257.94,9H211.09A4,4,0,0,1,207,4.92,4,4,0,0,1,211.09.8h46.85a4,4,0,0,1,4.11,4.12"}}),t._v(" "),e("path",{staticClass:"check_color",attrs:{d:"M258.08,97.56H210.81a4.92,4.92,0,0,1,0-9.83h47.27a4.92,4.92,0,0,1,0,9.83"}}),t._v(" "),e("path",{staticClass:"check_color",attrs:{d:"M210.81,89.33a3.31,3.31,0,0,0,0,6.62h47.27a3.31,3.31,0,1,0,0-6.62Z"}}),t._v(" "),e("path",{staticClass:"check_color",attrs:{d:"M253.83,50.4H215.06a4.92,4.92,0,0,1,0-9.83h38.77a4.92,4.92,0,0,1,0,9.83"}}),t._v(" "),e("path",{staticClass:"check_color",attrs:{d:"M215.06,42.18a3.31,3.31,0,0,0,0,6.62h38.77a3.31,3.31,0,0,0,0-6.62Z"}}),t._v(" "),e("path",{staticClass:"check_color",attrs:{d:"M257.87,9.83H211a4.86,4.86,0,0,1-4.91-4.91A4.86,4.86,0,0,1,211,0h46.85a4.87,4.87,0,0,1,4.92,4.92,4.86,4.86,0,0,1-4.92,4.91"}}),t._v(" "),e("path",{staticClass:"check_color",attrs:{d:"M211,1.61a3.23,3.23,0,0,0-3.31,3.31A3.23,3.23,0,0,0,211,8.22h46.85a3.23,3.23,0,0,0,3.31-3.3,3.23,3.23,0,0,0-3.31-3.31Z"}}),t._v(" "),e("path",{staticClass:"check_color",attrs:{d:"M76,78.41a4.88,4.88,0,0,1,4.88,4.88,4.65,4.65,0,0,1-1.4,3.41A47.88,47.88,0,0,1,48.78,97.56,47,47,0,0,1,14.3,83.26,47,47,0,0,1,0,48.78,47,47,0,0,1,14.3,14.3,47,47,0,0,1,48.78,0a47.55,47.55,0,0,1,31,11.16,4.84,4.84,0,0,1,1.41,3.47,4.69,4.69,0,0,1-1.44,3.45,4.66,4.66,0,0,1-3.44,1.43,4.79,4.79,0,0,1-3.48-1.46A37.26,37.26,0,0,0,48.78,9.76,37.6,37.6,0,0,0,21.19,21.19,37.6,37.6,0,0,0,9.76,48.78,37.6,37.6,0,0,0,21.19,76.37,37.6,37.6,0,0,0,48.78,87.8a37.34,37.34,0,0,0,24.39-8.53,4.74,4.74,0,0,1,2.8-.86"}}),t._v(" "),e("path",{staticClass:"check_color",attrs:{d:"M364.5,78.41a4.88,4.88,0,0,1,4.88,4.88A4.65,4.65,0,0,1,368,86.7a47.88,47.88,0,0,1-30.67,10.86,47,47,0,0,1-34.48-14.3,47,47,0,0,1-14.3-34.48,47,47,0,0,1,14.3-34.48A47,47,0,0,1,337.31,0a47.57,47.57,0,0,1,31,11.16,4.87,4.87,0,0,1,1.4,3.47,4.88,4.88,0,0,1-4.88,4.88,4.79,4.79,0,0,1-3.48-1.46,37.23,37.23,0,0,0-24.08-8.29,37.6,37.6,0,0,0-27.59,11.43,37.6,37.6,0,0,0-11.43,27.59,37.6,37.6,0,0,0,11.43,27.59,39.07,39.07,0,0,0,52,2.9,4.76,4.76,0,0,1,2.8-.86"}}),t._v(" "),e("path",{staticClass:"check_color",attrs:{d:"M396.59,4.88A4.74,4.74,0,0,1,398,1.43a4.86,4.86,0,0,1,6.89,0,4.71,4.71,0,0,1,1.44,3.45V46.71L451.52,1.52A5.09,5.09,0,0,1,455.12,0a4.74,4.74,0,0,1,3.45,1.43A4.74,4.74,0,0,1,460,4.88a4.85,4.85,0,0,1-1.4,3.47L424.33,42.62l34.76,47.13A4.72,4.72,0,0,1,460,92.5a4.91,4.91,0,0,1-1.95,4.08,4.9,4.9,0,0,1-6.95-1.1L417.32,49.63l-11,11V92.68a4.88,4.88,0,0,1-9.76,0Z"}})])]),t._v(" "),t._m(0)]),t._v(" "),e("Menu"),t._v(" "),1===t.global.mode?e("LangTransfer"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"guide_part",attrs:{id:"guide_part"}},[a("div",{staticClass:"guide_box",attrs:{id:"guide_box"}},[a("div",{staticClass:"guide_ball",attrs:{id:"guide_ball"}})])])}]};var u=e("VU/8")(r,_,!1,function(t){e("ybMc")},null,null);a.default=u.exports},ybMc:function(t,a){}});
//# sourceMappingURL=6.71aba5ea5ea5fc3e6cc7.js.map