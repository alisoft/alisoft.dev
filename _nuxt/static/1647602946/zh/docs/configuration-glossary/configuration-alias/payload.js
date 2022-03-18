__NUXT_JSONP__("/zh/docs/configuration-glossary/configuration-alias", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK){return {data:[{page:{key:"content:zh:docs:5.configuration-glossary:1.configuration-alias.md",generatedAt:new Date(1647603138584),mtime:new Date(1647603138570),slug:"configuration-alias",title:"The alias Property",position:"999900050001",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-alias",draft:w,page:t,language:"zh",navigation:{title:Z},description:_,menu:Z,category:"configuration-glossary",empty:w,excerpt:void 0,body:{raw:"---\ntitle: The alias Property\nnavigation.title: alias\ndescription: Nuxt allows you to use aliases to access custom directories within your JavaScript and CSS\nmenu: alias\ncategory: configuration-glossary\n---\n# The alias property\n\nNuxt allows you to use aliases to access custom directories within your JavaScript and CSS\n\n---\n\n- Type: `Object`\n- Default:\n  ```js\n  {\n    '~~': `\u003CrootDir\u003E`,\n    '@@': `\u003CrootDir\u003E`,\n    '~': `\u003CsrcDir\u003E`,\n    '@': `\u003CsrcDir\u003E`,\n    'assets': `\u003CsrcDir\u003E\u002Fassets`, \u002F\u002F (unless you have set a custom `dir.assets`)\n    'static': `\u003CsrcDir\u003E\u002Fstatic`, \u002F\u002F (unless you have set a custom `dir.static`)\n  }\n  ```\n\nThis option lets you define aliases to directories within your project (in addition to the ones above). These aliases can be used within your JavaScript and CSS.\n\n```js{}[nuxt.config.js]\nimport { resolve } from 'path'\nexport default {\n  alias: {\n    'images': resolve(__dirname, '.\u002Fassets\u002Fimages'),\n    'style': resolve(__dirname, '.\u002Fassets\u002Fstyle'),\n    'data': resolve(__dirname, '.\u002Fassets\u002Fother\u002Fdata')\n  }\n}\n```\n\n```html{}[components\u002Fexample.vue]\n\u003Ctemplate\u003E\n  \u003Cimg src=\"~images\u002Fmain-bg.jpg\"\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript\u003E\nimport data from 'data\u002Ftest.json'\n\n\u002F\u002F etc.\n\u003C\u002Fscript\u003E\n\n\u003Cstyle\u003E\n@import '~style\u002Fvariables.scss';\n@import '~style\u002Futils.scss';\n@import '~style\u002Fbase.scss';\n\nbody {\n  background-image: url('~images\u002Fmain-bg.jpg');\n}\n\u003C\u002Fstyle\u003E\n```\n\n::alert{type=\"warning\"}\nWithin a Webpack context (image sources, CSS - but _not_ JavaScript) you must prefix your alias with `~` (as in the example above).\n::\n\n::alert{type=\"info\"}\nIf you are using TypeScript and want to use the alias you define within your TypeScript files, you will need to add the aliases to your `paths` object within `tsconfig.json`.\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-alias-property"},children:[{type:a,value:"The alias property"}]},{type:a,value:g},{type:b,tag:x,props:{class:"d-heading-description"},children:[{type:a,value:_}]},{type:a,value:g},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:g},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:g},{type:b,tag:$,props:{},children:[{type:a,value:g},{type:a,value:"Type: "},{type:b,tag:y,props:{},children:[{type:a,value:"Object"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:$,props:{},children:[{type:a,value:g},{type:a,value:"Default:"},{type:a,value:g},{type:b,tag:H,props:{},children:[{type:b,tag:I,props:{className:[J,aa]},children:[{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'~~'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'@@'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'~'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'@'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'assets'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u003CsrcDir\u003E\u002Fassets"}]},{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"\u002F\u002F (unless you have set a custom `dir.assets`)"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'static'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u003CsrcDir\u003E\u002Fstatic"}]},{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"\u002F\u002F (unless you have set a custom `dir.static`)"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g}]}]}]},{type:a,value:g}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:x,props:{},children:[{type:a,value:"This option lets you define aliases to directories within your project (in addition to the ones above). These aliases can be used within your JavaScript and CSS."}]},{type:a,value:g},{type:b,tag:H,props:{},children:[{type:b,tag:c,props:{className:[ad]},children:[{type:a,value:"nuxt.config.js"}]},{type:b,tag:I,props:{className:[J,aa]},children:[{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[d,r,s]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,af]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:" resolve "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r,s]},children:[{type:a,value:ag}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'path'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r,s]},children:[{type:a,value:"export"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r,s]},children:[{type:a,value:"default"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"\n  alias"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'images'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'.\u002Fassets\u002Fimages'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'style'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'.\u002Fassets\u002Fstyle'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'data'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'.\u002Fassets\u002Fother\u002Fdata'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:H,props:{},children:[{type:b,tag:c,props:{className:[ad]},children:[{type:a,value:"components\u002Fexample.vue"}]},{type:b,tag:I,props:{className:[J,"language-html"]},children:[{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:"img"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"attr-name"]},children:[{type:a,value:"src"}]},{type:b,tag:c,props:{className:[d,"attr-value"]},children:[{type:b,tag:c,props:{className:[d,e,"attr-equals"]},children:[{type:a,value:"="}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]},{type:a,value:"~images\u002Fmain-bg.jpg"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,Q]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:g},{type:b,tag:c,props:{className:[d,r,s]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:"data"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r,s]},children:[{type:a,value:ag}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'data\u002Ftest.json'"}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"\u002F\u002F etc."}]},{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,"language-css"]},children:[{type:a,value:g},{type:b,tag:c,props:{className:[d,S]},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:U}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'~style\u002Fvariables.scss'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,S]},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:U}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'~style\u002Futils.scss'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,S]},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:U}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'~style\u002Fbase.scss'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,"selector"]},children:[{type:a,value:"body"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,"property"]},children:[{type:a,value:"background-image"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,V]},children:[{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,f,V]},children:[{type:a,value:"'~images\u002Fmain-bg.jpg'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:aj,props:{type:"warning"},children:[{type:b,tag:x,props:{},children:[{type:a,value:"Within a Webpack context (image sources, CSS - but "},{type:b,tag:"prose-em",props:{},children:[{type:a,value:"not"}]},{type:a,value:" JavaScript) you must prefix your alias with "},{type:b,tag:y,props:{},children:[{type:a,value:"~"}]},{type:a,value:" (as in the example above)."}]}]},{type:a,value:g},{type:b,tag:aj,props:{type:"info"},children:[{type:b,tag:x,props:{},children:[{type:a,value:"If you are using TypeScript and want to use the alias you define within your TypeScript files, you will need to add the aliases to your "},{type:b,tag:y,props:{},children:[{type:a,value:"paths"}]},{type:a,value:" object within "},{type:b,tag:y,props:{},children:[{type:a,value:"tsconfig.json"}]},{type:a,value:"."}]}]}]},toc:{title:ak,searchDepth:al,depth:al,links:[]}},template:am},templateOptions:{header:t,footer:t,aside:t,asideClass:ak,fluid:w,banner:t},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:an,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:ao,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:ap,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:am,subtitle:"Create fast websites easily",slug:"docs",to:aq,icon:"docs.svg",color:"bg-green-500"},{title:ar,subtitle:"Understand everything in Nuxt",slug:"examples",to:as,icon:"examples.svg",color:"bg-green-600"},{title:at,subtitle:"Learn with concrete cases",slug:"tutorials",to:au,icon:"tutorials.svg",color:"bg-green-700"},{title:F,subtitle:W,href:G,icon:X,color:Y}]},{title:"Explore",items:[{title:av,subtitle:"How to Deploy Nuxt",slug:"deployments",to:aw,icon:"deployments.svg",color:"bg-indigo-light"},{title:ax,subtitle:"Extend the power of Nuxt",href:ay,icon:"modules.svg",color:"bg-indigo"},{title:az,subtitle:"Get started with themes",slug:"themes",to:aA,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aB,subtitle:"Latest news about Nuxt",slug:"announcements",to:aC,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aD,subtitle:"They are Nuxt",slug:"teams",to:aE,icon:"teams.svg",color:"bg-mint-light"},{title:aF,subtitle:"All the code we have released",slug:"releases",to:aG,icon:"releases.svg",color:"bg-mint"},{title:aH,subtitle:"They trust us",slug:"sponsors",to:aI,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aJ}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aJ},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aB,to:aC},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aH,to:aI},{title:aD,to:aE},{title:at,to:au},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aq},{title:ar,to:as},{title:av,to:aw},{title:F,href:G},{title:ax,href:ay},{title:aF,to:aG},{title:an,to:ao},{title:az,to:aA}]}],showCookieBanner:w},"AsideBottom:0":{lastRelease:aK,masterCoursesLink:{title:F,subtitle:W,href:G,icon:X,color:Y}},"AsideBottom:1":{lastRelease:aK,masterCoursesLink:{title:F,subtitle:W,href:G,icon:X,color:Y}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev",prev:{slug:"nuxt3-beta",to:"\u002Fannouncements\u002Fnuxt3-beta",title:"Introducing Nuxt 3 Beta"},next:{slug:"html-head",to:"\u002Fexamples\u002Fseo\u002Fhtml-head",title:"SEO HTML Head"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fzh\u002Fdocs\u002F5.configuration-glossary\u002F1.configuration-alias.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",ap,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","span","token","punctuation","string","\n"," ","tag","template-punctuation","`",":",",","operator","\n  ","\u003E","template-string","keyword","module",true,"{","}",false,"prose-paragraph","prose-code-inline","function","(",")","\u003C","\n\n",";","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-code","pre","line-numbers","code","comment","\n    ","resolve","__dirname","\u003C\u002F","script","style","atrule","rule","@import","url","Learn more with experts","master-courses.svg","bg-green-800","alias","Nuxt allows you to use aliases to access custom directories within your JavaScript and CSS","prose-li","language-js","\u003CrootDir\u003E","\u003CsrcDir\u003E","filename","import","imports","from","template","\"","alert","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));