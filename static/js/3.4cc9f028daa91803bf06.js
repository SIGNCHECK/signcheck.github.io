webpackJsonp([3],{FhoZ:function(t,e,a){"use strict";(function(e){const r=a("o/zv");t.exports={dev:{assetsSubDirectory:"static",assetsPublicPath:"",proxyTable:{},host:"localhost",port:8080,autoOpenBrowser:!1,errorOverlay:!0,notifyOnErrors:!0,poll:!1,devtool:"cheap-module-eval-source-map",cacheBusting:!0,cssSourceMap:!0},build:{index:r.resolve(e,"../dist/index.html"),assetsRoot:r.resolve(e,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"./",productionSourceMap:!0,devtool:"#source-map",productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report}}}).call(e,"/")},S8GH:function(t,e){},W2nU:function(t,e){var a,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function s(t){if(a===setTimeout)return setTimeout(t,0);if((a===i||!a)&&setTimeout)return a=setTimeout,setTimeout(t,0);try{return a(t,0)}catch(e){try{return a.call(null,t,0)}catch(e){return a.call(this,t,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:i}catch(t){a=i}try{r="function"==typeof clearTimeout?clearTimeout:n}catch(t){r=n}}();var l,c=[],u=!1,g=-1;function f(){u&&l&&(u=!1,l.length?c=l.concat(c):g=-1,c.length&&h())}function h(){if(!u){var t=s(f);u=!0;for(var e=c.length;e;){for(l=c,c=[];++g<e;)l&&l[g].run();g=-1,e=c.length}l=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===n||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)e[a-1]=arguments[a];c.push(new p(t,e)),1!==c.length||u||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"o/zv":function(t,e,a){(function(t){function a(t,e){for(var a=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),a++):a&&(t.splice(r,1),a--)}if(e)for(;a--;a)t.unshift("..");return t}function r(t,e){if(t.filter)return t.filter(e);for(var a=[],r=0;r<t.length;r++)e(t[r],r,t)&&a.push(t[r]);return a}e.resolve=function(){for(var e="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var n=i>=0?arguments[i]:t.cwd();if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(e=n+"/"+e,o="/"===n.charAt(0))}return e=a(r(e.split("/"),function(t){return!!t}),!o).join("/"),(o?"/":"")+e||"."},e.normalize=function(t){var i=e.isAbsolute(t),n="/"===o(t,-1);return(t=a(r(t.split("/"),function(t){return!!t}),!i).join("/"))||i||(t="."),t&&n&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,a){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var a=t.length-1;a>=0&&""===t[a];a--);return e>a?[]:t.slice(e,a-e+1)}t=e.resolve(t).substr(1),a=e.resolve(a).substr(1);for(var o=r(t.split("/")),i=r(a.split("/")),n=Math.min(o.length,i.length),s=n,l=0;l<n;l++)if(o[l]!==i[l]){s=l;break}var c=[];for(l=s;l<o.length;l++)c.push("..");return(c=c.concat(i.slice(s))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),a=47===e,r=-1,o=!0,i=t.length-1;i>=1;--i)if(47===(e=t.charCodeAt(i))){if(!o){r=i;break}}else o=!1;return-1===r?a?"/":".":a&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var a=function(t){"string"!=typeof t&&(t+="");var e,a=0,r=-1,o=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!o){a=e+1;break}}else-1===r&&(o=!1,r=e+1);return-1===r?"":t.slice(a,r)}(t);return e&&a.substr(-1*e.length)===e&&(a=a.substr(0,a.length-e.length)),a},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,a=0,r=-1,o=!0,i=0,n=t.length-1;n>=0;--n){var s=t.charCodeAt(n);if(47!==s)-1===r&&(o=!1,r=n+1),46===s?-1===e?e=n:1!==i&&(i=1):-1!==e&&(i=-1);else if(!o){a=n+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===a+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,a){return t.substr(e,a)}:function(t,e,a){return e<0&&(e=t.length+e),t.substr(e,a)}}).call(e,a("W2nU"))},qxW8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("lxVV"),o=a("XoMy"),i=a.n(o),n=a("PO8r"),s=a("NFr2"),l=a("bYoP"),c=a("kg1Y"),u=(a("FhoZ"),void 0),g={name:"Stories",data:function(){return{global:r.a,pageRotate:0,curPageIdx:0,tarPageIdx:0,pageLeftSrc:null,pageRotateSrc:null,pageRightSrc:null,pageList:[],totalPageNum:9,shadowMax:.2,animeMaxLength:660,animeFloatL1:0,animeFloatL2:.2,animeFloatL3:.8,animeFloatL4:.4,floatLeftValue:0,floatRightValue:0}},components:{Menu:n.a,LangTransfer:s.a,Footer:l.a,Logo:c.a},beforeCreate:function(){r.a.refresh_windows_size(),r.a.set_lang_pack()},created:function(){this.init(),this.resize_book()},mounted:function(){var t=this;window.onresize=function(){return r.a.refresh_windows_size(),void t.resize_book()},n.a.methods.change_logo_color("#251714","#efcd24",1e3)},watch:{pageRotate:function(t,e){e>t&&e-t<179?-180===t&&(this.curPageIdx+=1,this.pageRotate=0):e<t&&t-e<179&&-180===e&&(this.curPageIdx-=1),this.updateImg(),this.updateMove()}},methods:{resize_book:function(){if(0===r.a.mode)return document.documentElement.style.setProperty("--book_width","1200rem"),void document.documentElement.style.setProperty("--book_height","700rem");var t=700/752.6,e=r.a.height/r.a.width*750;document.documentElement.style.setProperty("--screen_height",e+"rem"),1320*t>e-170&&(t=(e-170)/1320),document.documentElement.style.setProperty("--book_width",1320*t+"rem"),document.documentElement.style.setProperty("--book_height",752.6*t+"rem")},init:function(){var t=this,e=void 0;0===r.a.mode?e="pc":1===r.a.mode&&(e="mobile");for(var a=1;a<=this.totalPageNum;a++)this.pageList.push({L1:"/static/book/"+e+"/"+a+"/1.png",L2:"/static/book/"+e+"/"+a+"/2.png",L3:"/static/book/"+e+"/"+a+"/3.png",L4:"/static/book/"+e+"/"+a+"/4.png"});this.updateImg(),setTimeout(function(){t.autoRightToLeft()},500)},prepareRightToLeft:function(){-180===this.pageRotate&&(this.pageRotate=0),this.pageRightSrc=this.pageList[this.curPageIdx+1]},prepareLeftToRight:function(){0===this.pageRotate&&(this.pageRotate=-180),this.pageRightSrc=this.pageList[this.curPageIdx]},drag_right_to_left:function(t){var e=t.target,a=t.clientX-e.offsetLeft,r=t.clientY-e.offsetTop;document.onmousemove=function(t){var e=t.clientX-a,o=t.clientY-r;console.log(e),console.log(o)},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}},drag_left_to_right:function(){console.log("drag")},updateImg:function(){this.pageLeftSrc=this.pageList[this.curPageIdx],this.curPageIdx+1!==this.pageList.length&&(this.pageRightSrc=this.pageList[this.curPageIdx+1],this.pageRotateSrc=this.pageRotate>=-90?this.pageList[this.curPageIdx]:this.pageList[this.curPageIdx+1])},updateMove:function(){this.floatLeftValue=this.pageRotate/180*this.animeMaxLength,this.floatRightValue=this.floatLeftValue+this.animeMaxLength},autoLeftToRight:function(){0!==this.curPageIdx&&0!==this.tarPageIdx&&null==u&&(this.tarPageIdx-=1,this.prepareLeftToRight(),u=this.flipAnime(this.pageRotate,0))},autoRightToLeft:function(){this.curPageIdx!==this.pageList.length-1&&this.tarPageIdx!==this.pageList.length-1&&null==u&&(this.tarPageIdx+=1,this.prepareRightToLeft(),u=this.flipAnime(this.pageRotate,-180))},flipAnime:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;return i()({targets:this,pageRotate:[t,e],duration:a,easing:"linear",complete:function(){u=null}})}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"book_page",attrs:{id:"book_page",onselectstart:"return false",ondragstart:"return false"}},[a("v-touch",{on:{swipeup:t.autoRightToLeft,swipedown:t.autoLeftToRight}},[a("div",{staticClass:"body_part"},[a("div",{staticClass:"books"},[a("div",{staticClass:"about_page"},[a("div",{staticClass:"page_left",on:{click:t.autoLeftToRight,mousedown:t.drag_right_to_left}},[t.pageRotateSrc.L1?a("img",{staticClass:"img_left",style:"transform: translateX("+t.floatLeftValue*t.animeFloatL1+"rem);",attrs:{src:t.pageLeftSrc.L1}}):t._e(),t._v(" "),t.pageRotateSrc.L2?a("img",{staticClass:"img_left",style:"transform: translateX("+t.floatLeftValue*t.animeFloatL2+"rem);",attrs:{src:t.pageLeftSrc.L2}}):t._e(),t._v(" "),t.pageRotateSrc.L3?a("img",{staticClass:"img_left",style:"transform: translateX("+t.floatLeftValue*t.animeFloatL3+"rem);",attrs:{src:t.pageLeftSrc.L3}}):t._e(),t._v(" "),t.pageRotateSrc.L4?a("img",{staticClass:"img_left",style:"transform: translateX("+t.floatLeftValue*t.animeFloatL4+"rem);",attrs:{src:t.pageLeftSrc.L4}}):t._e()]),t._v(" "),a("div",{class:t.pageRotate>=-90?"page_rotate":"page_rotate_left",style:"transform: rotateY("+t.pageRotate+"deg)",on:{click:t.autoRightToLeft,mousedown:t.drag_left_to_right}},[a("img",{staticClass:"page_shadow",style:t.pageRotate>=-90?"opacity:"+-t.pageRotate/90*t.shadowMax:"transform: scaleX(1); opacity:"+(180+t.pageRotate)/90*t.shadowMax,attrs:{src:"/static/book/page_shadow.png"}}),t._v(" "),t.pageRotateSrc.L1?a("img",{staticClass:"img_right",style:"transform: translateX("+(t.pageRotate>=-90?t.floatLeftValue*t.animeFloatL1+"rem);":-t.floatRightValue*t.animeFloatL1+"rem) scaleX(-1);"),attrs:{src:t.pageRotateSrc.L1}}):t._e(),t._v(" "),t.pageRotateSrc.L2?a("img",{staticClass:"img_right",style:"transform: translateX("+(t.pageRotate>=-90?t.floatLeftValue*t.animeFloatL2+"rem);":-t.floatRightValue*t.animeFloatL2+"rem) scaleX(-1);"),attrs:{src:t.pageRotateSrc.L2}}):t._e(),t._v(" "),t.pageRotateSrc.L3?a("img",{staticClass:"img_right",style:"transform: translateX("+(t.pageRotate>=-90?t.floatLeftValue*t.animeFloatL3+"rem);":-t.floatRightValue*t.animeFloatL3+"rem) scaleX(-1);"),attrs:{src:t.pageRotateSrc.L3}}):t._e(),t._v(" "),t.pageRotateSrc.L4?a("img",{staticClass:"img_right",style:"transform: translateX("+(t.pageRotate>=-90?t.floatLeftValue*t.animeFloatL4+"rem);":-t.floatRightValue*t.animeFloatL4+"rem) scaleX(-1);"),attrs:{src:t.pageRotateSrc.L4}}):t._e()]),t._v(" "),a("div",{staticClass:"page_right",on:{click:t.autoRightToLeft}},[t.pageRotateSrc.L1?a("img",{staticClass:"img_right",style:"transform: translateX("+t.floatRightValue*t.animeFloatL1+"rem);",attrs:{src:t.pageRightSrc.L1}}):t._e(),t._v(" "),t.pageRotateSrc.L2?a("img",{staticClass:"img_right",style:"transform: translateX("+t.floatRightValue*t.animeFloatL2+"rem);",attrs:{src:t.pageRightSrc.L2}}):t._e(),t._v(" "),t.pageRotateSrc.L3?a("img",{staticClass:"img_right",style:"transform: translateX("+t.floatRightValue*t.animeFloatL3+"rem);",attrs:{src:t.pageRightSrc.L3}}):t._e(),t._v(" "),t.pageRotateSrc.L4?a("img",{staticClass:"img_right",style:"transform: translateX("+t.floatRightValue*t.animeFloatL4+"rem);",attrs:{src:t.pageRightSrc.L4}}):t._e()])])])])]),t._v(" "),a("LangTransfer"),t._v(" "),a("Logo",{attrs:{canBeHidden:!1}}),t._v(" "),a("Menu")],1)},staticRenderFns:[]};var h=a("VU/8")(g,f,!1,function(t){a("S8GH")},"data-v-4875282c",null);e.default=h.exports}});
//# sourceMappingURL=3.4cc9f028daa91803bf06.js.map