(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{446:function(t,e,c){var content=c(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(18).default)("bc2f4b9e",content,!0,{sourceMap:!1})},468:function(t,e,c){"use strict";c(446)},469:function(t,e,c){var n=c(17)(!1);n.push([t.i,".ArticleStyle[data-v-41ebda6d],.ArticleStyle[data-v-41ebda6d] a{color:#fff!important}",""]),t.exports=n},495:function(t,e,c){"use strict";c.r(e);c(29),c(42);var n={name:"articleview",data:function(){return{article:Object}},mounted:function(){var t=this;this.$content(this.$route.path.replace("/","")).fetch().then((function(e){t.article=e,console.log(e)})),console.log(this.$route.path.replace("/",""))}},r=(c(468),c(67)),l=c(127),o=c.n(l),d=c(434),h=c(157),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("v-img",{attrs:{height:"480",width:"100%",src:t.article.image}}),t._v(" "),c("v-container",[c("h1",{staticClass:"white--text"},[t._v(t._s(t.article.title))]),t._v(" "),c("h4",{staticClass:"white--text"},[t._v("\n      by "+t._s(t.article.author)+" - "+t._s(t.article.date)+"\n    ")]),t._v(" "),c("div",{staticClass:"ArticleStyle"},[c("nuxt-content",{staticClass:"white--text ",attrs:{document:t.article}})],1)])],1)}),[],!1,null,"41ebda6d",null);e.default=component.exports;o()(component,{VContainer:d.a,VImg:h.a})}}]);