__NUXT_JSONP__("/docs/configuration-glossary/configuration-srcdir", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG){return {data:[{page:{key:"content:en:docs:5.configuration-glossary:29.configuration-srcdir.md",generatedAt:new Date(1647603125985),mtime:new Date(1647603125974),slug:"configuration-srcdir",title:"The srcDir Property",position:"999900050029",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-srcdir",draft:s,page:r,language:"en",navigation:{title:B},description:F,menu:B,category:"configuration-glossary",empty:s,excerpt:void 0,body:{raw:"---\ntitle: The srcDir Property\nnavigation.title: srcDir\ndescription: Define the source directory of your Nuxt application.\nmenu: srcDir\ncategory: configuration-glossary\n---\n# The srcDir property\n\nDefine the source directory of your Nuxt application.\n\n---\n\n- Type: `String`\n- Default: [rootDir value](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-rootdir)\n\nIf a relative path is specified it will be relative to the `rootDir`.\n\nExample 1: Prerequisites:\n\n```js{}[nuxt.config.js]\nexport default {\n  srcDir: 'client\u002F'\n}\n```\n\n```js{}[package.json]\n  \"script\": {\n    \"dev\": \"yarn nuxt\"\n  }\n```\n\nworks with the following folder structure (note that nuxt.config is listed in the app directory)\n\n```bash\n-| app\u002F\n---| node_modules\u002F\n---| nuxt.config.js\n---| package.json\n---| client\u002F\n------| assets\u002F\n------| components\u002F\n------| layouts\u002F\n------| middleware\u002F\n------| pages\u002F\n------| plugins\u002F\n------| static\u002F\n------| store\u002F\n```\n\nExample 2:\n\nInstead of example 1 you can also move the nuxt.config into your `client` folder. In this case you only need to specify `client` as the `rootDir` and you can leave `srcDir` empty:\n\nPrerequisites:\n\n```js{}[nuxt.config.js]\nexport default {\n  srcDir: '' \u002F\u002F or just remove it\n}\n```\n\n```js{}[package.json]\n  \"script\": {\n    \"dev\": \"yarn nuxt client\" \u002F\u002F this sets client as the rootDir\n  }\n```\n\nworks with the following folder structure (note that nuxt.config is listed in the client directory)\n\n```bash\n-| app\u002F\n---| node_modules\u002F\n---| package.json\n---| client\u002F\n------| nuxt.config.js\n------| assets\u002F\n------| components\u002F\n------| layouts\u002F\n------| middleware\u002F\n------| pages\u002F\n------| plugins\u002F\n------| static\u002F\n------| store\u002F\n```\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-srcdir-property"},children:[{type:a,value:"The srcDir property"}]},{type:a,value:f},{type:b,tag:i,props:{class:"d-heading-description"},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:f},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:f},{type:b,tag:G,props:{},children:[{type:a,value:f},{type:a,value:"Type: "},{type:b,tag:l,props:{},children:[{type:a,value:"String"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:G,props:{},children:[{type:a,value:f},{type:a,value:"Default: "},{type:b,tag:"prose-a",props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-rootdir"},children:[{type:a,value:"rootDir value"}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"If a relative path is specified it will be relative to the "},{type:b,tag:l,props:{},children:[{type:a,value:H}]},{type:a,value:"."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Example 1: Prerequisites:"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[t]},children:[{type:a,value:I}]},{type:b,tag:n,props:{className:[o,u]},children:[{type:b,tag:p,props:{},children:[{type:b,tag:c,props:{className:[d,v,w]},children:[{type:a,value:J}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,v,w]},children:[{type:a,value:K}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'client\u002F'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:y}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[t]},children:[{type:a,value:M}]},{type:b,tag:n,props:{className:[o,u]},children:[{type:b,tag:p,props:{},children:[{type:a,value:N},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"yarn nuxt\""}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:y}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"works with the following folder structure (note that nuxt.config is listed in the app directory)"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:n,props:{className:[o,S]},children:[{type:b,tag:p,props:{},children:[{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" nuxt.config.js\n---"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ad}]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Example 2:"}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Instead of example 1 you can also move the nuxt.config into your "},{type:b,tag:l,props:{},children:[{type:a,value:ae}]},{type:a,value:" folder. In this case you only need to specify "},{type:b,tag:l,props:{},children:[{type:a,value:ae}]},{type:a,value:" as the "},{type:b,tag:l,props:{},children:[{type:a,value:H}]},{type:a,value:" and you can leave "},{type:b,tag:l,props:{},children:[{type:a,value:B}]},{type:a,value:" empty:"}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Prerequisites:"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[t]},children:[{type:a,value:I}]},{type:b,tag:n,props:{className:[o,u]},children:[{type:b,tag:p,props:{},children:[{type:b,tag:c,props:{className:[d,v,w]},children:[{type:a,value:J}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,v,w]},children:[{type:a,value:K}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"''"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:"\u002F\u002F or just remove it"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:y}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[t]},children:[{type:a,value:M}]},{type:b,tag:n,props:{className:[o,u]},children:[{type:b,tag:p,props:{},children:[{type:a,value:N},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"yarn nuxt client\""}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:"\u002F\u002F this sets client as the rootDir"}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:y}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"works with the following folder structure (note that nuxt.config is listed in the client directory)"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:n,props:{className:[o,S]},children:[{type:b,tag:p,props:{},children:[{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" nuxt.config.js\n------"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ad}]}]}]}]},toc:{title:ag,searchDepth:ah,depth:ah,links:[]}},template:ai},templateOptions:{header:r,footer:r,aside:r,asideClass:ag,fluid:s,banner:r},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:aj,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:ak,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:al,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:ai,subtitle:"Create fast websites easily",slug:"docs",to:am,icon:"docs.svg",color:"bg-green-500"},{title:an,subtitle:"Understand everything in Nuxt",slug:"examples",to:ao,icon:"examples.svg",color:"bg-green-600"},{title:ap,subtitle:"Learn with concrete cases",slug:"tutorials",to:aq,icon:"tutorials.svg",color:"bg-green-700"},{title:z,subtitle:C,href:A,icon:D,color:E}]},{title:"Explore",items:[{title:ar,subtitle:"How to Deploy Nuxt",slug:"deployments",to:as,icon:"deployments.svg",color:"bg-indigo-light"},{title:at,subtitle:"Extend the power of Nuxt",href:au,icon:"modules.svg",color:"bg-indigo"},{title:av,subtitle:"Get started with themes",slug:"themes",to:aw,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:ax,subtitle:"Latest news about Nuxt",slug:"announcements",to:ay,icon:"announcements.svg",color:"bg-mint-lighter"},{title:az,subtitle:"They are Nuxt",slug:"teams",to:aA,icon:"teams.svg",color:"bg-mint-light"},{title:aB,subtitle:"All the code we have released",slug:"releases",to:aC,icon:"releases.svg",color:"bg-mint"},{title:aD,subtitle:"They trust us",slug:"sponsors",to:aE,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aF}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aF},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:ax,to:ay},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aD,to:aE},{title:az,to:aA},{title:ap,to:aq},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:am},{title:an,to:ao},{title:ar,to:as},{title:z,href:A},{title:at,href:au},{title:aB,to:aC},{title:aj,to:ak},{title:av,to:aw}]}],showCookieBanner:s},"AsideBottom:0":{lastRelease:aG,masterCoursesLink:{title:z,subtitle:C,href:A,icon:D,color:E}},"AsideBottom:1":{lastRelease:aG,masterCoursesLink:{title:z,subtitle:C,href:A,icon:D,color:E}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev",prev:{slug:"configuration-servermiddleware",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-servermiddleware",title:"The serverMiddleware Property"},next:{slug:"configuration-ssr",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-ssr",title:"The ssr Property"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fen\u002Fdocs\u002F5.configuration-glossary\u002F29.configuration-srcdir.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",al,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","span","token","operator","\n","|"," ","prose-paragraph","punctuation","string","prose-code-inline","prose-code","pre","line-numbers","code",":",true,false,"filename","language-js","keyword","module","{","}","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","srcDir","Learn more with experts","master-courses.svg","bg-green-800","Define the source directory of your Nuxt application.","prose-li","rootDir","nuxt.config.js","export","default","\n  srcDir","package.json","  ","\"script\"","\n    ","\"dev\"","\n  ","language-bash","-"," app\u002F\n---"," node_modules\u002F\n---"," package.json\n---"," client\u002F\n------"," assets\u002F\n------"," components\u002F\n------"," layouts\u002F\n------"," middleware\u002F\n------"," pages\u002F\n------"," plugins\u002F\n------"," static\u002F\n------"," store\u002F\n","client","comment","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));