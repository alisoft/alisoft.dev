__NUXT_JSONP__("/docs/components-glossary/middleware", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX){return {data:[{page:{key:"content:en:docs:7.components-glossary:6.middleware.md",generatedAt:new Date(1647437380160),mtime:new Date(1647437380155),slug:V,title:"The middleware Property",position:"999900070006",to:"\u002Fdocs\u002Fcomponents-glossary\u002Fmiddleware",draft:v,page:u,language:"en",description:W,navigation:{title:"Middleware Property"},category:"components-glossary",empty:v,excerpt:void 0,body:{raw:"---\ntitle: The middleware Property\ndescription: Set the middleware for a specific page of the application.\nnavigation.title: Middleware Property\ncategory: components-glossary\n---\n# The middleware property\n\nSet the middleware for a specific page of the application.\n\n---\n\n- Type: `String` or `Array` or `Function`\n  - Items: `String` or `Function`\n\n## Named middleware\n\nYou can create named middleware by creating a file inside the `middleware\u002F` directory, the file name will be the middleware name.\n\n```js{}[middleware\u002Fauthenticated.js]\nexport default function ({ store, redirect }) {\n  \u002F\u002F If the user is not authenticated\n  if (!store.state.authenticated) {\n    return redirect('\u002Flogin')\n  }\n}\n```\n\n```html{}[pages\u002Fsecret.vue]\n\u003Ctemplate\u003E\n  \u003Ch1\u003ESecret page\u003C\u002Fh1\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript\u003E\n  export default {\n    middleware: 'authenticated'\n  }\n\u003C\u002Fscript\u003E\n```\n\n## Anonymous middleware\n\nIf you need to use a middleware only for a specific page, you can directly use a function for it (or an array of functions):\n\n```html{}[pages\u002Fsecret.vue]\n\u003Ctemplate\u003E\n  \u003Ch1\u003ESecret page\u003C\u002Fh1\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript\u003E\n  export default {\n    middleware({ store, redirect }) {\n      \u002F\u002F If the user is not authenticated\n      if (!store.state.authenticated) {\n        return redirect('\u002Flogin')\n      }\n    }\n  }\n\u003C\u002Fscript\u003E\n```\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-middleware-property"},children:[{type:a,value:"The middleware property"}]},{type:a,value:f},{type:b,tag:F,props:{class:"d-heading-description"},children:[{type:a,value:W}]},{type:a,value:f},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:f},{type:b,tag:X,props:{},children:[{type:a,value:f},{type:b,tag:Y,props:{},children:[{type:a,value:f},{type:a,value:"Type: "},{type:b,tag:n,props:{},children:[{type:a,value:Z}]},{type:a,value:G},{type:b,tag:n,props:{},children:[{type:a,value:"Array"}]},{type:a,value:G},{type:b,tag:n,props:{},children:[{type:a,value:_}]},{type:a,value:f},{type:b,tag:X,props:{},children:[{type:a,value:f},{type:b,tag:Y,props:{},children:[{type:a,value:f},{type:a,value:"Items: "},{type:b,tag:n,props:{},children:[{type:a,value:Z}]},{type:a,value:G},{type:b,tag:n,props:{},children:[{type:a,value:_}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:$,props:{id:aa},children:[{type:b,tag:ab,props:{href:"#named-middleware"},children:[{type:a,value:ac}]}]},{type:a,value:f},{type:b,tag:F,props:{},children:[{type:a,value:"You can create named middleware by creating a file inside the "},{type:b,tag:n,props:{},children:[{type:a,value:"middleware\u002F"}]},{type:a,value:" directory, the file name will be the middleware name."}]},{type:a,value:f},{type:b,tag:H,props:{},children:[{type:b,tag:c,props:{className:[I]},children:[{type:a,value:"middleware\u002Fauthenticated.js"}]},{type:b,tag:J,props:{className:[K,"language-js"]},children:[{type:b,tag:L,props:{},children:[{type:b,tag:c,props:{className:[d,j,o]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j,o]},children:[{type:a,value:N}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:w}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,ad]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:ai}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,j,x]},children:[{type:a,value:aj}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:ak}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,j,x]},children:[{type:a,value:ao}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:H,props:{},children:[{type:b,tag:c,props:{className:[I]},children:[{type:a,value:ar}]},{type:b,tag:J,props:{className:[K,as]},children:[{type:b,tag:L,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,av]},children:[{type:a,value:k},{type:b,tag:c,props:{className:[d,j,o]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j,o]},children:[{type:a,value:N}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n    middleware"},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:":"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:"'authenticated'"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:$,props:{id:aw},children:[{type:b,tag:ab,props:{href:"#anonymous-middleware"},children:[{type:a,value:ax}]}]},{type:a,value:f},{type:b,tag:F,props:{},children:[{type:a,value:"If you need to use a middleware only for a specific page, you can directly use a function for it (or an array of functions):"}]},{type:a,value:f},{type:b,tag:H,props:{},children:[{type:b,tag:c,props:{className:[I]},children:[{type:a,value:ar}]},{type:b,tag:J,props:{className:[K,as]},children:[{type:b,tag:L,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,av]},children:[{type:a,value:k},{type:b,tag:c,props:{className:[d,j,o]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j,o]},children:[{type:a,value:N}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,ad]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:ai}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,j,x]},children:[{type:a,value:aj}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:ak}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,j,x]},children:[{type:a,value:ao}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:f}]}]}]}]},toc:{title:ay,searchDepth:C,depth:C,links:[{id:aa,depth:C,text:ac},{id:aw,depth:C,text:ax}]}},template:az},templateOptions:{header:u,footer:u,aside:u,asideClass:ay,fluid:v,banner:u},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:aA,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:aB,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:aC,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:az,subtitle:"Create fast websites easily",slug:"docs",to:aD,icon:"docs.svg",color:"bg-green-500"},{title:aE,subtitle:"Understand everything in Nuxt",slug:"examples",to:aF,icon:"examples.svg",color:"bg-green-600"},{title:aG,subtitle:"Learn with concrete cases",slug:"tutorials",to:aH,icon:"tutorials.svg",color:"bg-green-700"},{title:D,subtitle:S,href:E,icon:T,color:U}]},{title:"Explore",items:[{title:aI,subtitle:"How to Deploy Nuxt",slug:"deployments",to:aJ,icon:"deployments.svg",color:"bg-indigo-light"},{title:aK,subtitle:"Extend the power of Nuxt",href:aL,icon:"modules.svg",color:"bg-indigo"},{title:aM,subtitle:"Get started with themes",slug:"themes",to:aN,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aO,subtitle:"Latest news about Nuxt",slug:"announcements",to:aP,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aQ,subtitle:"They are Nuxt",slug:"teams",to:aR,icon:"teams.svg",color:"bg-mint-light"},{title:aS,subtitle:"All the code we have released",slug:"releases",to:aT,icon:"releases.svg",color:"bg-mint"},{title:aU,subtitle:"They trust us",slug:"sponsors",to:aV,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aW}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aW},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aO,to:aP},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aU,to:aV},{title:aQ,to:aR},{title:aG,to:aH},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aD},{title:aE,to:aF},{title:aI,to:aJ},{title:D,href:E},{title:aK,href:aL},{title:aS,to:aT},{title:aA,to:aB},{title:aM,to:aN}]}],showCookieBanner:v},"AsideBottom:0":{lastRelease:aX,masterCoursesLink:{title:D,subtitle:S,href:E,icon:T,color:U}},"AsideBottom:1":{lastRelease:aX,masterCoursesLink:{title:D,subtitle:S,href:E,icon:T,color:U}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev",prev:{slug:"loading",to:"\u002Fdocs\u002Fcomponents-glossary\u002Floading",title:"The loading Property"},next:{slug:"transition",to:"\u002Fdocs\u002Fcomponents-glossary\u002Ftransition",title:"The page transition Property"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fen\u002Fdocs\u002F7.components-glossary\u002F6.middleware.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",aC,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","span","token","punctuation","\n","tag"," ","\u003E","keyword","\n  ","{","}","prose-code-inline","module","(",")","\u003C","\u003C\u002F","script",true,false,"function","control-flow",".","property-access","template","h1",2,"Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-paragraph"," or ","prose-code","filename","pre","line-numbers","code","export","default","operator","\n    ","string","\n      ","Learn more with experts","master-courses.svg","bg-green-800","middleware","Set the middleware for a specific page of the application.","prose-ul","prose-li","String","Function","prose-h2","named-middleware","prose-a","Named middleware","parameter"," store",","," redirect ","comment","\u002F\u002F If the user is not authenticated","if","!","store","state","authenticated","return","redirect","'\u002Flogin'","pages\u002Fsecret.vue","language-html","Secret page","\n\n","language-javascript","anonymous-middleware","Anonymous middleware","","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));