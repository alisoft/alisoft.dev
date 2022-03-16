__NUXT_JSONP__("/zh/docs/configuration-glossary/configuration-plugins", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK){return {data:[{page:{key:"content:zh:docs:5.configuration-glossary:22.configuration-plugins.md",generatedAt:new Date(1647437349256),mtime:new Date(1647437349249),slug:"configuration-plugins",title:"The plugins Property",position:"999900050022",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-plugins",draft:u,page:q,language:"zh",navigation:{title:v},description:O,menu:v,category:"configuration-glossary",empty:u,excerpt:void 0,body:{raw:"---\ntitle: The plugins Property\nnavigation.title: plugins\ndescription: Use vue.js plugins with the plugins option of Nuxt.\nmenu: plugins\ncategory: configuration-glossary\n---\n# The plugins property\n\nUse vue.js plugins with the plugins option of Nuxt.\n\n---\n\n**Note**: Since Nuxt 2.4, `mode` has been introduced as option of `plugins` to specify plugin type, possible value are: `client` or `server`. `ssr: false` will be adapted to `mode: 'client'` and deprecated in next major release.\n\n- Type: `Array`\n  - Items: `String` or `Object`\n\nIf the item is an object, the properties are:\n\n- src: `String` (path of the file)\n- mode: `String` (can be `client` or `server`) _If defined, the file will be included only on the respective (client or server) side._\n\n**Note**: Old version\n\n- Type: `Array`\n  - Items: `String` or `Object`\n\nIf the item is an object, the properties are:\n\n- src: `String` (path of the file)\n- ssr: `Boolean` (default to `true`) _If false, the file will be included only on the client-side._\n\n\u003E The plugins property lets you add Vue.js plugins easily to your main application.\n\n```js{}[nuxt.config.js]\nexport default {\n  plugins: [\n    { src: '~\u002Fplugins\u002Fboth-sides.js' },\n    { src: '~\u002Fplugins\u002Fclient-only.js', mode: 'client' },\n    { src: '~\u002Fplugins\u002Fserver-only.js', mode: 'server' }\n  ]\n}\n```\n\n```js{}[nuxt.config.js]\nexport default {\n  plugins: ['@\u002Fplugins\u002Fant-design-vue']\n}\n```\n\n```js{}[plugins\u002Fant-design-vue.js]\nimport Vue from 'vue'\nimport Antd from 'ant-design-vue'\nimport 'ant-design-vue\u002Fdist\u002Fantd.css' \u002F\u002F Per Ant Design's docs\n\nVue.use(Antd)\n```\n\nNote that the css was [imported as per Ant Design Documentation](https:\u002F\u002Fvue.ant.design\u002Fdocs\u002Fvue\u002Fgetting-started\u002F#3.-Use-antd's-Components 'External tip relevant to building plugins')\n\nAll the paths defined in the `plugins` property will be **imported** before initializing the main application.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-plugins-property"},children:[{type:a,value:"The plugins property"}]},{type:a,value:c},{type:b,tag:l,props:{class:"d-heading-description"},children:[{type:a,value:O}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:B,props:{},children:[{type:a,value:P}]},{type:a,value:": Since Nuxt 2.4, "},{type:b,tag:h,props:{},children:[{type:a,value:"mode"}]},{type:a,value:" has been introduced as option of "},{type:b,tag:h,props:{},children:[{type:a,value:v}]},{type:a,value:" to specify plugin type, possible value are: "},{type:b,tag:h,props:{},children:[{type:a,value:Q}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:R}]},{type:a,value:". "},{type:b,tag:h,props:{},children:[{type:a,value:"ssr: false"}]},{type:a,value:" will be adapted to "},{type:b,tag:h,props:{},children:[{type:a,value:"mode: 'client'"}]},{type:a,value:" and deprecated in next major release."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:a,value:S},{type:b,tag:h,props:{},children:[{type:a,value:T}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:a,value:U},{type:b,tag:h,props:{},children:[{type:a,value:r}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:W}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:a,value:X},{type:b,tag:h,props:{},children:[{type:a,value:r}]},{type:a,value:Y},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:a,value:"mode: "},{type:b,tag:h,props:{},children:[{type:a,value:r}]},{type:a,value:" (can be "},{type:b,tag:h,props:{},children:[{type:a,value:Q}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:R}]},{type:a,value:Z},{type:b,tag:_,props:{},children:[{type:a,value:"If defined, the file will be included only on the respective (client or server) side."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:B,props:{},children:[{type:a,value:P}]},{type:a,value:": Old version"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:a,value:S},{type:b,tag:h,props:{},children:[{type:a,value:T}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:a,value:U},{type:b,tag:h,props:{},children:[{type:a,value:r}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:W}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:a,value:X},{type:b,tag:h,props:{},children:[{type:a,value:r}]},{type:a,value:Y},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:a,value:"ssr: "},{type:b,tag:h,props:{},children:[{type:a,value:"Boolean"}]},{type:a,value:" (default to "},{type:b,tag:h,props:{},children:[{type:a,value:"true"}]},{type:a,value:Z},{type:b,tag:_,props:{},children:[{type:a,value:"If false, the file will be included only on the client-side."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"prose-blockquote",props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"The plugins property lets you add Vue.js plugins easily to your main application."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:b,tag:d,props:{className:[D]},children:[{type:a,value:$}]},{type:b,tag:E,props:{className:[F,G]},children:[{type:b,tag:H,props:{},children:[{type:b,tag:d,props:{className:[e,i,j]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,i,j]},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:s}]},{type:a,value:ac},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:ad}]},{type:a,value:I},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:s}]},{type:a,value:J},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"'~\u002Fplugins\u002Fboth-sides.js'"}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:t}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:I},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:s}]},{type:a,value:J},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"'~\u002Fplugins\u002Fclient-only.js'"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:ae},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"'client'"}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:t}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:I},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:s}]},{type:a,value:J},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"'~\u002Fplugins\u002Fserver-only.js'"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:ae},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"'server'"}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:t}]},{type:a,value:"\n  "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:af}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:t}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:b,tag:d,props:{className:[D]},children:[{type:a,value:$}]},{type:b,tag:E,props:{className:[F,G]},children:[{type:b,tag:H,props:{},children:[{type:b,tag:d,props:{className:[e,i,j]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,i,j]},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:s}]},{type:a,value:ac},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:ad}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"'@\u002Fplugins\u002Fant-design-vue'"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:af}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:t}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:b,tag:d,props:{className:[D]},children:[{type:a,value:"plugins\u002Fant-design-vue.js"}]},{type:b,tag:E,props:{className:[F,G]},children:[{type:b,tag:H,props:{},children:[{type:b,tag:d,props:{className:[e,i,j]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,ag]},children:[{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:ah}]}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,i,j]},children:[{type:a,value:ai}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"'vue'"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i,j]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,ag]},children:[{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:aj}]}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,i,j]},children:[{type:a,value:ai}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"'ant-design-vue'"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i,j]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"'ant-design-vue\u002Fdist\u002Fantd.css'"}]},{type:a,value:f},{type:b,tag:d,props:{className:[e,"comment"]},children:[{type:a,value:"\u002F\u002F Per Ant Design's docs"}]},{type:a,value:"\n\n"},{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:ah}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"."}]},{type:b,tag:d,props:{className:[e,"method","function","property-access"]},children:[{type:a,value:"use"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"("}]},{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:aj}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:")"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Note that the css was "},{type:b,tag:"prose-a",props:{href:"https:\u002F\u002Fvue.ant.design\u002Fdocs\u002Fvue\u002Fgetting-started\u002F#3.-Use-antd's-Components",rel:["nofollow","noopener","noreferrer"],target:"_blank",title:"External tip relevant to building plugins"},children:[{type:a,value:"imported as per Ant Design Documentation"}]}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"All the paths defined in the "},{type:b,tag:h,props:{},children:[{type:a,value:v}]},{type:a,value:" property will be "},{type:b,tag:B,props:{},children:[{type:a,value:"imported"}]},{type:a,value:" before initializing the main application."}]}]},toc:{title:ak,searchDepth:al,depth:al,links:[]}},template:am},templateOptions:{header:q,footer:q,aside:q,asideClass:ak,fluid:u,banner:q},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:an,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:ao,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:ap,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:am,subtitle:"Create fast websites easily",slug:"docs",to:aq,icon:"docs.svg",color:"bg-green-500"},{title:ar,subtitle:"Understand everything in Nuxt",slug:"examples",to:as,icon:"examples.svg",color:"bg-green-600"},{title:at,subtitle:"Learn with concrete cases",slug:"tutorials",to:au,icon:"tutorials.svg",color:"bg-green-700"},{title:z,subtitle:L,href:A,icon:M,color:N}]},{title:"Explore",items:[{title:av,subtitle:"How to Deploy Nuxt",slug:"deployments",to:aw,icon:"deployments.svg",color:"bg-indigo-light"},{title:ax,subtitle:"Extend the power of Nuxt",href:ay,icon:"modules.svg",color:"bg-indigo"},{title:az,subtitle:"Get started with themes",slug:"themes",to:aA,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aB,subtitle:"Latest news about Nuxt",slug:"announcements",to:aC,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aD,subtitle:"They are Nuxt",slug:"teams",to:aE,icon:"teams.svg",color:"bg-mint-light"},{title:aF,subtitle:"All the code we have released",slug:"releases",to:aG,icon:"releases.svg",color:"bg-mint"},{title:aH,subtitle:"They trust us",slug:"sponsors",to:aI,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aJ}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aJ},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aB,to:aC},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aH,to:aI},{title:aD,to:aE},{title:at,to:au},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aq},{title:ar,to:as},{title:av,to:aw},{title:z,href:A},{title:ax,href:ay},{title:aF,to:aG},{title:an,to:ao},{title:az,to:aA}]}],showCookieBanner:u},"AsideBottom:0":{lastRelease:aK,masterCoursesLink:{title:z,subtitle:L,href:A,icon:M,color:N}},"AsideBottom:1":{lastRelease:aK,masterCoursesLink:{title:z,subtitle:L,href:A,icon:M,color:N}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev",prev:{slug:"configuration-modulesdir",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-modulesdir",title:"The modulesDir Property"},next:{slug:"configuration-render",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-render",title:"The render Property"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fzh\u002Fdocs\u002F5.configuration-glossary\u002F22.configuration-plugins.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",ap,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","\n","span","token"," ","punctuation","prose-code-inline","keyword","module","string","prose-paragraph","prose-li","operator",":","prose-ul",true,"String","{","}",false,"plugins"," or ",",","maybe-class-name","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-strong","prose-code","filename","pre","language-js","line-numbers","code","\n    "," src","import","Learn more with experts","master-courses.svg","bg-green-800","Use vue.js plugins with the plugins option of Nuxt.","Note","client","server","Type: ","Array","Items: ","Object","If the item is an object, the properties are:","src: "," (path of the file)",") ","prose-em","nuxt.config.js","export","default","\n  plugins","["," mode","]","imports","Vue","from","Antd","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));