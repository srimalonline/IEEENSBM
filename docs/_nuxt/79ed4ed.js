(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4],{436:function(t,e,o){var content=o(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("1930a9a0",content,!0,{sourceMap:!1})},437:function(t,e,o){var content=o(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("445c8038",content,!0,{sourceMap:!1})},440:function(t,e,o){"use strict";o(436)},441:function(t,e,o){var r=o(17)(!1);r.push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=r},442:function(t,e,o){"use strict";o(437)},443:function(t,e,o){var r=o(17)(!1);r.push([t.i,".VuetifyLogo{height:180px;width:180px;transform:rotateY(560deg);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=r},446:function(t,e,o){var content=o(468);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("3896c890",content,!0,{sourceMap:!1})},448:function(t,e,o){"use strict";o.r(e);o(440);var r=o(67),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"VueToNuxtLogo"},[o("div",{staticClass:"Triangle Triangle--two"}),t._v(" "),o("div",{staticClass:"Triangle Triangle--one"}),t._v(" "),o("div",{staticClass:"Triangle Triangle--three"}),t._v(" "),o("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);e.default=component.exports},449:function(t,e,o){"use strict";o.r(e);o(442);var r=o(67),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"VuetifyLogo",attrs:{alt:"Vuetify Logo",src:"/vuetify-logo.svg"}})}),[],!1,null,null,null);e.default=component.exports},467:function(t,e,o){"use strict";o(446)},468:function(t,e,o){var r=o(17)(!1);r.push([t.i,".floatOnHover[data-v-7ff7bb5b]{cursor:pointer;position:relative;top:0;transition:top .5s ease}.floatOnHover[data-v-7ff7bb5b]:hover{top:-8px}.BlurMa[data-v-7ff7bb5b]{height:72vh;position:absolute;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);z-index:1;width:100%!important}",""]),t.exports=r},492:function(t,e,o){"use strict";o.r(e);var r=o(448),n=o(449),l={components:{Logo:r.default,VuetifyLogo:n.default},data:function(){return{Articles:[]}},mounted:function(){var t=this;this.$content("articles").limit(10).fetch().then((function(data){console.log(data),t.Articles=data}))}},c=(o(467),o(67)),d=o(127),f=o.n(d),h=o(191),v=o(424),m=o(434),w=o(425),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-card",{staticClass:"rounded-t-0",attrs:{color:"white"}},[o("v-row",{attrs:{align:"baseline",justify:"center","no-gutters":""}},[o("v-col",{staticClass:"hidden-sm-and-down",attrs:{cols:"auto"}},[o("v-card",{staticClass:"rounded-circle",attrs:{rounded:"",width:"128",height:"128"}},[o("nuxt-img",{staticClass:"rounded-circle",attrs:{alt:"CS logo",quality:"96",format:"webp",height:"128",width:"128",src:"/Assets/Logos/CS_Logo.png"}})],1)],1),t._v(" "),o("v-card",{staticClass:"ma-4",attrs:{height:"256",width:"256"}},[o("nuxt-img",{attrs:{quality:"96",format:"webp",fit:"contain",alt:"NSBM IEEE Student Logo",height:"256",width:"256",src:"/Assets/Logos/SB_Logo.png"}})],1),t._v(" "),o("v-col",{staticClass:"hidden-sm-and-down",attrs:{cols:"auto"}},[o("v-card",{staticClass:"rounded-circle",attrs:{width:"128",height:"128"}},[o("nuxt-img",{staticClass:"rounded-circle",attrs:{quality:"96",format:"webp",alt:"WIE Logo",fit:"contain",height:"128","max-width":"128",src:"/Assets/Logos/WIE_Logo.png"}})],1)],1)],1),t._v(" "),o("v-row",{attrs:{justify:"center","no-gutters":""}},[o("h1",{staticClass:"IEEEFont text-center"},[t._v("Welcome to IEEE NSBM Student Branch!")])]),t._v(" "),o("v-container",[o("v-col",[o("v-row",{attrs:{justify:"center","no-gutters":""}},[o("h1",{staticClass:"IEEEFont"},[t._v("What is IEEE?")])]),t._v(" "),o("p",{staticClass:"text-justify"},[t._v("\n          IEEE is the world’s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE’s highly cited publications, conferences, technology standards, and professional and educational activities.\n          IEEE, pronounced “Eye-triple-E,” stands for the Institute of Electrical and Electronics Engineers. The association is chartered under this name and it is the full legal name. To learn more about the association’s name, for more information please read the "),o("a",{attrs:{rel:"noreferrer",href:"https://www.ieee.org/about/ieee-history.html",target:"_blank"}},[t._v("History of IEEE")]),t._v(".\n        ")]),t._v(" "),o("v-col",[o("v-col",[o("v-row",{attrs:{justify:"center","no-gutters":""}},[o("h1",{staticClass:"IEEEFont"},[t._v("Mission")])]),t._v(" "),o("p",{staticClass:"text-center"},[t._v("\n              IEEE’s core purpose is to foster technological innovation and excellence for the benefit of humanity.\n            ")])],1),t._v(" "),o("v-col",[o("v-row",{attrs:{justify:"center","no-gutters":""}},[o("h1",{staticClass:"IEEEFont"},[t._v("Vision")])]),t._v(" "),o("p",{staticClass:"text-center"},[t._v("\n              IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,"7ff7bb5b",null);e.default=component.exports;f()(component,{VCard:h.a,VCol:v.a,VContainer:m.a,VRow:w.a})}}]);