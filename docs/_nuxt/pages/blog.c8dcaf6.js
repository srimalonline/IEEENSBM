(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{435:function(t,e,o){var content=o(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("12ef2b62",content,!0,{sourceMap:!1})},438:function(t,e,o){"use strict";o(435)},439:function(t,e,o){var r=o(17)(!1);r.push([t.i,".floatOnHover[data-v-180ab0a5]{cursor:pointer;position:relative;top:0;transition:top .5s ease}.floatOnHover[data-v-180ab0a5]:hover{top:-8px}",""]),t.exports=r},444:function(t,e,o){var content=o(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("3a5f9cb1",content,!0,{sourceMap:!1})},447:function(t,e,o){"use strict";o.r(e);var r={name:"BlogArticleCard",props:{blog:Object}},n=(o(438),o(67)),l=o(127),c=o.n(l),d=o(195),v=o(191),f=o(159),_=o(192),h=o(157),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"ma-1 floatOnHover",attrs:{ripple:"","max-width":"256"}},[o("v-img",{staticClass:"ImgFilter",attrs:{contain:"",width:"256",src:t.blog.image}}),t._v(" "),o("v-card-title",{staticStyle:{"word-break":"normal !important"}},[o("span",{staticClass:"font-weight-black",staticStyle:{"background-color":"white"}},[t._v(t._s(t.blog.title))])]),t._v(" "),o("v-card-subtitle",[t._v("\n    by "+t._s(t.blog.author)+" - "+t._s(t.blog.date)+"\n  ")]),t._v(" "),o("v-card-text",[t._v("\n    "+t._s(t.blog.description)+"\n  ")]),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{outlined:"",block:""}},[t._v("\n      Read More "),o("v-icon",[t._v("mdi-chevron-right-circle")])],1)],1)],1)}),[],!1,null,"180ab0a5",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VIcon:_.a,VImg:h.a})},450:function(t,e,o){"use strict";o(444)},451:function(t,e,o){var r=o(17)(!1);r.push([t.i,".ImgFilter[data-v-297a14ce]{filter:brightness(500)}",""]),t.exports=r},487:function(t,e,o){"use strict";o.r(e);var r={name:"blog",data:function(){return{Blogs:[]}},mounted:function(){var t=this;this.$content("articles").fetch().then((function(e){t.Blogs=e,console.log(e)}))}},n=(o(450),o(67)),l=o(127),c=o.n(l),d=o(191),v=o(424),f=o(425),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"pa-4"},[o("v-row",{attrs:{"no-gutters":"",justify:"start"}},[o("v-col",{attrs:{cols:"auto"}},t._l(t.Blogs,(function(t){return o("BlogArticleCard",{key:t.createdAt,attrs:{blog:t}})})),1)],1)],1)}),[],!1,null,"297a14ce",null);e.default=component.exports;c()(component,{BlogArticleCard:o(447).default}),c()(component,{VCard:d.a,VCol:v.a,VRow:f.a})}}]);