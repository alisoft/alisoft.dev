(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{998:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r(3),c=(r(12),r(27),r(14),r(13),r(9),r(19),r(20),r(1));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(c.defineComponent)({asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.$docus,t.i18n,n=t.route,o=t.error,n.params.slug){e.next=4;break}return e.abrupt("return",o({statusCode:404,message:"Partner not found"}));case 4:return e.next=6,r.search("/collections/partners",{deep:!0}).where({slug:{$in:n.params.slug}}).fetch();case 6:if(null!=(c=e.sent)&&c.length){e.next=9;break}return e.abrupt("return",o({statusCode:404,message:"Partner not found"}));case 9:return l=c[0],f=d(d({},r.settings.value.layout),{},{aside:!1,asideClass:""}),e.abrupt("return",{page:l,templateOptions:f});case 12:case"end":return e.stop()}}),e)})))()},head:function(){var title=this.page.title,t=this.page.description;return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"og:title",property:"og:title",content:"Nuxt - ".concat(title)},{hid:"og:description",property:"og:description",content:t},{hid:"twitter:title",name:"twitter:title",content:"Nuxt - ".concat(title)},{hid:"twitter:description",name:"twitter:description",content:t}]}},created:function(){this.$docus.layout.value=this.templateOptions,this.$docus.currentPage.value=this.page,this.$docus.currentPath.value="/".concat(this.$route.params.pathMatch)},render:function(t){return t(this.page.template,{props:{page:this.page}})}}),h=r(0),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Partner",{attrs:{page:t.page}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Partner:r(364).default})}}]);