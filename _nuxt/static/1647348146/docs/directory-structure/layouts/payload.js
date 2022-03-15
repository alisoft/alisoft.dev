__NUXT_JSONP__("/docs/directory-structure/layouts", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ){return {data:[{page:{key:"content:en:docs:4.directory-structure:6.layouts.md",generatedAt:new Date(1647348282990),mtime:new Date(1647348282968),slug:E,title:Y,position:"999900040006",to:"\u002Fdocs\u002Fdirectory-structure\u002Flayouts",draft:F,page:v,language:"en",navigation:{title:E},description:Z,category:"directory-structure",csb_link:"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F04_directory_structure\u002F07_layouts?fontsize=14&hidenavigation=1&theme=dark",empty:F,excerpt:void 0,body:{raw:"---\ntitle: Layouts directory\nnavigation.title: layouts\ndescription: Layouts are a great help when you want to change the look and feel of your Nuxt app. Whether you want to include a sidebar or have distinct layouts for mobile and desktop.\ncategory: directory-structure\ncsb_link: https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F04_directory_structure\u002F07_layouts?fontsize=14&hidenavigation=1&theme=dark\n---\n# Layouts directory\n\nLayouts are a great help when you want to change the look and feel of your Nuxt app. Whether you want to include a sidebar or have distinct layouts for mobile and desktop.\n\n---\n\n::alert{type=\"warning\"}\nThis directory cannot be renamed without extra configuration.\n::\n\n### Default Layout\n\nYou can extend the main layout by adding a `layouts\u002Fdefault.vue` file. It will be used for all pages that don't have a layout specified. Make sure to add the `\u003CNuxt\u003E` component when creating a layout to actually include the page component.\n\nAll you need in your layout is three lines of code which will render the page component.\n\n```html{}[layouts\u002Fdefault.vue]\n\u003Ctemplate\u003E\n  \u003CNuxt \u002F\u003E\n\u003C\u002Ftemplate\u003E\n```\n\nYou can add more components here such as Navigation, Header, Footer etc.\n\n```html{}[layouts\u002Fdefault.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003CTheHeader \u002F\u003E\n    \u003CNuxt \u002F\u003E\n    \u003CTheFooter \u002F\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n::alert{type=\"info\"}\nIf you have [components set to true](\u002Fdocs\u002Fdirectory-structure\u002Fcomponents) then there is no need to add any import statements for your components.\n::\n\n### Custom Layout\n\nEvery file (_top-level_) in the `layouts` directory will create a custom layout accessible with the `layout` property in the page components.\n\nLet's say we want to create a blog layout and save it to `layouts\u002Fblog.vue`:\n\n```html{}[layouts\u002Fblog.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003Cdiv\u003EMy blog navigation bar here\u003C\u002Fdiv\u003E\n    \u003CNuxt \u002F\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\nThen you have to tell the pages to use your custom layout\n\n```js{}[pages\u002Fposts.vue]\n\u003Cscript\u003E\nexport default {\n  layout: 'blog',\n  \u002F\u002F OR\n  layout (context) {\n    return 'blog'\n  }\n}\n\u003C\u002Fscript\u003E\n```\n\n## Error Page\n\nThe error page is a *page component* which is always displayed when an error occurs (that is not thrown on the server-side).\n\n::alert{type=\"warning\"}\nThough this file is placed in the `layouts` folder, it should be treated as a page.\n::\n\nAs mentioned above, this layout is special and you should not include `\u003CNuxt\u003E` inside its template. You must see this layout as a component displayed when an error occurs (`404`, `500`, etc.). Similar to other page components, you can set a custom layout for the error page as well in the usual way.\n\nYou can customize the error page by adding a `layouts\u002Ferror.vue` file:\n\n```js{}[layouts\u002Ferror.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv class=\"container\"\u003E\n    \u003Ch1 v-if=\"error.statusCode === 404\"\u003EPage not found\u003C\u002Fh1\u003E\n    \u003Ch1 v-else\u003EAn error occurred\u003C\u002Fh1\u003E\n    \u003CNuxtLink to=\"\u002F\"\u003EHome page\u003C\u002FNuxtLink\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript\u003E\nexport default {\n  props: ['error'],\n  layout: 'blog' \u002F\u002F you can set a custom layout for the error page\n}\n\u003C\u002Fscript\u003E\n```\n\n::alert{type=\"info\"}\nThe default error page source code is [available on GitHub](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fvue-app\u002Ftemplate\u002Fcomponents\u002Fnuxt-error.vue).\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"layouts-directory"},children:[{type:a,value:Y}]},{type:a,value:g},{type:b,tag:l,props:{class:"d-heading-description"},children:[{type:a,value:Z}]},{type:a,value:g},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:g},{type:b,tag:G,props:{type:_},children:[{type:b,tag:l,props:{},children:[{type:a,value:"This directory cannot be renamed without extra configuration."}]}]},{type:a,value:g},{type:b,tag:$,props:{id:aa},children:[{type:b,tag:w,props:{href:"#default-layout"},children:[{type:a,value:ab}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"You can extend the main layout by adding a "},{type:b,tag:m,props:{},children:[{type:a,value:M}]},{type:a,value:" file. It will be used for all pages that don't have a layout specified. Make sure to add the "},{type:b,tag:m,props:{},children:[{type:a,value:ac}]},{type:a,value:" component when creating a layout to actually include the page component."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"All you need in your layout is three lines of code which will render the page component."}]},{type:a,value:g},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:M}]},{type:b,tag:z,props:{className:[A,N]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:O}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"You can add more components here such as Navigation, Header, Footer etc."}]},{type:a,value:g},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:M}]},{type:b,tag:z,props:{className:[A,N]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"TheHeader"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:O}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"TheFooter"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:G,props:{type:ad},children:[{type:b,tag:l,props:{},children:[{type:a,value:"If you have "},{type:b,tag:w,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fcomponents"},children:[{type:a,value:"components set to true"}]},{type:a,value:" then there is no need to add any import statements for your components."}]}]},{type:a,value:g},{type:b,tag:$,props:{id:ae},children:[{type:b,tag:w,props:{href:"#custom-layout"},children:[{type:a,value:af}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Every file ("},{type:b,tag:ag,props:{},children:[{type:a,value:"top-level"}]},{type:a,value:") in the "},{type:b,tag:m,props:{},children:[{type:a,value:E}]},{type:a,value:" directory will create a custom layout accessible with the "},{type:b,tag:m,props:{},children:[{type:a,value:ah}]},{type:a,value:" property in the page components."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Let's say we want to create a blog layout and save it to "},{type:b,tag:m,props:{},children:[{type:a,value:ai}]},{type:a,value:H}]},{type:a,value:g},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:ai}]},{type:b,tag:z,props:{className:[A,N]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"My blog navigation bar here"},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:O}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Then you have to tell the pages to use your custom layout"}]},{type:a,value:g},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:"pages\u002Fposts.vue"}]},{type:b,tag:z,props:{className:[A,aj]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,J]},children:[{type:a,value:ak}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,q,J]},children:[{type:a,value:al}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:an}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,ao]},children:[{type:a,value:"\u002F\u002F OR"}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:ah}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"("}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"context"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:")"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,q,R]},children:[{type:a,value:"return"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:Q}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:"prose-h2",props:{id:ap},children:[{type:b,tag:w,props:{href:"#error-page"},children:[{type:a,value:aq}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"The error page is a "},{type:b,tag:ag,props:{},children:[{type:a,value:"page component"}]},{type:a,value:" which is always displayed when an error occurs (that is not thrown on the server-side)."}]},{type:a,value:g},{type:b,tag:G,props:{type:_},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Though this file is placed in the "},{type:b,tag:m,props:{},children:[{type:a,value:E}]},{type:a,value:" folder, it should be treated as a page."}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"As mentioned above, this layout is special and you should not include "},{type:b,tag:m,props:{},children:[{type:a,value:ac}]},{type:a,value:" inside its template. You must see this layout as a component displayed when an error occurs ("},{type:b,tag:m,props:{},children:[{type:a,value:"404"}]},{type:a,value:", "},{type:b,tag:m,props:{},children:[{type:a,value:"500"}]},{type:a,value:", etc.). Similar to other page components, you can set a custom layout for the error page as well in the usual way."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"You can customize the error page by adding a "},{type:b,tag:m,props:{},children:[{type:a,value:ar}]},{type:a,value:" file:"}]},{type:a,value:g},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:ar}]},{type:b,tag:z,props:{className:[A,aj]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:"div "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"class"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"container\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,q,R]},children:[{type:a,value:"if"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"error.statusCode === 404\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"Page"}]},{type:a,value:" not found"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,q,R]},children:[{type:a,value:"else"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"An"}]},{type:a,value:" error occurred"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:av}]},{type:a,value:" to"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"\u002F\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"Home"}]},{type:a,value:" page"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,J]},children:[{type:a,value:ak}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,q,J]},children:[{type:a,value:al}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:"\n  props"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'error'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:an}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:Q}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ao]},children:[{type:a,value:"\u002F\u002F you can set a custom layout for the error page"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:G,props:{type:ad},children:[{type:b,tag:l,props:{},children:[{type:a,value:"The default error page source code is "},{type:b,tag:w,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fvue-app\u002Ftemplate\u002Fcomponents\u002Fnuxt-error.vue",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"available on GitHub"}]},{type:a,value:"."}]}]}]},toc:{title:aw,searchDepth:U,depth:U,links:[{id:aa,depth:ax,text:ab},{id:ae,depth:ax,text:af},{id:ap,depth:U,text:aq}]}},template:ay},templateOptions:{header:v,footer:v,aside:v,asideClass:aw,fluid:F,banner:v},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/DeveloperThomas.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F01e0e4.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png","/_ipx/https://github.com/MrJmpl3.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3e840f.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/mtlynch.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F525213.png","/_ipx/https://github.com/book000.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3838a1.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/meirroth.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe09bc9.png","/_ipx/https://github.com/Brettanda.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F25f97d.png","/_ipx/https://github.com/armgitaar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0c63ae.png","/_ipx/https://github.com/thomasbnt.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F9f568f.png","/_ipx/https://github.com/karur4n.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F8dcce9.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:az,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:aA,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:aB,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:ay,subtitle:"Create fast websites easily",slug:"docs",to:aC,icon:"docs.svg",color:"bg-green-500"},{title:aD,subtitle:"Understand everything in Nuxt",slug:"examples",to:aE,icon:"examples.svg",color:"bg-green-600"},{title:aF,subtitle:"Learn with concrete cases",slug:"tutorials",to:aG,icon:"tutorials.svg",color:"bg-green-700"},{title:K,subtitle:V,href:L,icon:W,color:X}]},{title:"Explore",items:[{title:aH,subtitle:"How to Deploy Nuxt",slug:"deployments",to:aI,icon:"deployments.svg",color:"bg-indigo-light"},{title:aJ,subtitle:"Extend the power of Nuxt",href:aK,icon:"modules.svg",color:"bg-indigo"},{title:aL,subtitle:"Get started with themes",slug:"themes",to:aM,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aN,subtitle:"Latest news about Nuxt",slug:"announcements",to:aO,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aP,subtitle:"They are Nuxt",slug:"teams",to:aQ,icon:"teams.svg",color:"bg-mint-light"},{title:aR,subtitle:"All the code we have released",slug:"releases",to:aS,icon:"releases.svg",color:"bg-mint"},{title:aT,subtitle:"They trust us",slug:"sponsors",to:aU,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aV}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aV},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aN,to:aO},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aT,to:aU},{title:aP,to:aQ},{title:aF,to:aG},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aC},{title:aD,to:aE},{title:aH,to:aI},{title:K,href:L},{title:aJ,href:aK},{title:aR,to:aS},{title:az,to:aA},{title:aL,to:aM}]}],showCookieBanner:F},"AsideBottom:0":{lastRelease:aW,masterCoursesLink:{title:K,subtitle:V,href:L,icon:W,color:X}},"AsideBottom:1":{lastRelease:aW,masterCoursesLink:{title:K,subtitle:V,href:L,icon:W,color:X}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org",prev:{slug:"dist",to:"\u002Fdocs\u002Fdirectory-structure\u002Fdist",title:"Dist directory"},next:{slug:"middleware",to:"\u002Fdocs\u002Fdirectory-structure\u002Fmiddleware",title:"Middleware directory"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Fen\u002Fdocs\u002F4.directory-structure\u002F6.layouts.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:aX,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:aX},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:aY,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:aY},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"DeveloperThomas"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:aZ,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:aZ},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"},{name:"José Manuel Casani Guerra",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21302114?u=8ea39b04340fe8c4ebd63b1097497e1bf0d1454f&v=4",login:"MrJmpl3"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=2998231cea5f2bd7268cba898c9a947cb1d525b8&v=4",login:"owlnai"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Michael Lynch",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7783288?u=b6d8f48d38d7a64cddc633db4cfcd6915b997794&v=4",login:"mtlynch"},{name:"Tomachi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8929706?u=bb51b21fd7735505d999e27f7340c5f886f4d9fe&v=4",login:"book000"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Meir Roth",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F12494197?u=7828b437d2bc2402a6e8a4edd9ada378139f4742&v=4",login:"meirroth"},{name:"Brett",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14969098?u=34d0910e6ded49668e2a114eedbc26ab7b5979e7&v=4",login:"Brettanda"},{name:"Adam Miedema",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F30202878?u=aad565699f6b02961c47297dc931e5179d9ff8e1&v=4",login:"armgitaar"},{name:"Thomas Bnt",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14293805?u=e3f70b334910b6cfd43ad99c9f5b0523c07bd38a&v=4",login:"thomasbnt"},{name:"Kazuki Furukawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6816398?v=4",login:"karur4n"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",aB,"HomeTestimonials","ProseEm","ProseHr","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","span","token","punctuation","operator","\n","tag","\u003E","\u003C"," ","prose-paragraph","prose-code-inline","\n  ","\n    ","template","keyword","div","string","\u002F","\u003C\u002F",true,"prose-a","prose-code","filename","pre","line-numbers","code","\u002F\u003E","maybe-class-name","layouts",false,"alert",":","script","module","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","layouts\u002Fdefault.vue","language-html","Nuxt","{","'blog'","control-flow","}","=",2,"Learn more with experts","master-courses.svg","bg-green-800","Layouts directory","Layouts are a great help when you want to change the look and feel of your Nuxt app. Whether you want to include a sidebar or have distinct layouts for mobile and desktop.","warning","prose-h3","default-layout","Default Layout","\u003CNuxt\u003E","info","custom-layout","Custom Layout","prose-em","layout","layouts\u002Fblog.vue","language-js","export","default","\n  layout",",","comment","error-page","Error Page","layouts\u002Ferror.vue","h1 v","-","h1","NuxtLink","",3,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners","v2.15.8","Ayouli","felipesuri","syagawa")));