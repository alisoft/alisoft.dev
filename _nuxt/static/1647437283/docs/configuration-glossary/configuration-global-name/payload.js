__NUXT_JSONP__("/docs/configuration-glossary/configuration-global-name", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF){return {data:[{page:{key:"content:en:docs:5.configuration-glossary:12.configuration-global-name.md",generatedAt:new Date(1647437362909),mtime:new Date(1647437362903),slug:"configuration-global-name",title:Q,position:"999900050012",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-global-name",draft:B,page:x,language:"en",navigation:{title:i},description:R,menu:i,category:"configuration-glossary",empty:B,excerpt:void 0,body:{raw:"---\ntitle: The globalName property\nnavigation.title: globalName\ndescription: Nuxt lets you customize the global ID used in the main HTML template as well as the main Vue instance name and other options.\nmenu: globalName\ncategory: configuration-glossary\n---\n# The globalName property\n\nNuxt lets you customize the global ID used in the main HTML template as well as the main Vue instance name and other options.\n\n---\n\n- Type: `String`\n- Default: `nuxt`\n\n```js{}[nuxt.config.js]\n{\n  globalName: 'myCustomName'\n}\n```\n\n::alert{type=\"warning\"}\nThe `globalName` needs to be a valid JavaScript identifier, and changing it may break support for certain plugins that rely on Nuxt-named functions. If you're looking to just change the visible `__nuxt` HTML ID, then use the `globals` property.\n::\n\n## The globals property\n\n\u003E Customizes specific global names which are based on `globalName` by default.\n\n- Type: `Object`\n- Default:\n\n```js{}[nuxt.config.js]\nglobals: {\n  id: globalName =\u003E `__${globalName}`,\n  nuxt: globalName =\u003E `$${globalName}`,\n  context: globalName =\u003E `__${globalName.toUpperCase()}__`,\n  pluginPrefix: globalName =\u003E globalName,\n  readyCallback: globalName =\u003E `on${_.capitalize(globalName)}Ready`,\n  loadedCallback: globalName =\u003E `_on${_.capitalize(globalName)}Loaded`\n},\n```\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-globalname-property"},children:[{type:a,value:Q}]},{type:a,value:e},{type:b,tag:F,props:{class:"d-heading-description"},children:[{type:a,value:R}]},{type:a,value:e},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:e},{type:b,tag:S,props:{},children:[{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:e},{type:a,value:T},{type:b,tag:p,props:{},children:[{type:a,value:"String"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:e},{type:a,value:"Default: "},{type:b,tag:p,props:{},children:[{type:a,value:U}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:V,props:{},children:[{type:b,tag:c,props:{className:[W]},children:[{type:a,value:X}]},{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:$,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aa}]},{type:a,value:"\n  globalName"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"'myCustomName'"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:"alert",props:{type:"warning"},children:[{type:b,tag:F,props:{},children:[{type:a,value:"The "},{type:b,tag:p,props:{},children:[{type:a,value:i}]},{type:a,value:" needs to be a valid JavaScript identifier, and changing it may break support for certain plugins that rely on Nuxt-named functions. If you're looking to just change the visible "},{type:b,tag:p,props:{},children:[{type:a,value:"__nuxt"}]},{type:a,value:" HTML ID, then use the "},{type:b,tag:p,props:{},children:[{type:a,value:ab}]},{type:a,value:" property."}]}]},{type:a,value:e},{type:b,tag:"prose-h2",props:{id:ac},children:[{type:b,tag:"prose-a",props:{href:"#the-globals-property"},children:[{type:a,value:ad}]}]},{type:a,value:e},{type:b,tag:"prose-blockquote",props:{},children:[{type:a,value:e},{type:b,tag:F,props:{},children:[{type:a,value:"Customizes specific global names which are based on "},{type:b,tag:p,props:{},children:[{type:a,value:i}]},{type:a,value:" by default."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:S,props:{},children:[{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:e},{type:a,value:T},{type:b,tag:p,props:{},children:[{type:a,value:"Object"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:e},{type:a,value:"Default:"},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:V,props:{},children:[{type:b,tag:c,props:{className:[W]},children:[{type:a,value:X}]},{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:$,props:{},children:[{type:a,value:ab},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aa}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,s,n]},children:[{type:a,value:"id"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u,j]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,k,h]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:A}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,k,h]},children:[{type:a,value:l}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,s,n]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u,j]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,k,h]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"$"}]},{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:A}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,k,h]},children:[{type:a,value:l}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,s,n]},children:[{type:a,value:"context"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u,j]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,k,h]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:A}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,I,n,J]},children:[{type:a,value:"toUpperCase"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,k,h]},children:[{type:a,value:l}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,s,n]},children:[{type:a,value:"pluginPrefix"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u,j]},children:[{type:a,value:v}]},{type:a,value:" globalName"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,s,n]},children:[{type:a,value:"readyCallback"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u,j]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,k,h]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"on"}]},{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:A}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,I,n,J]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"Ready"}]},{type:b,tag:c,props:{className:[d,k,h]},children:[{type:a,value:l}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,s,n]},children:[{type:a,value:"loadedCallback"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u,j]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,k,h]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"_on"}]},{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:A}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,I,n,J]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"Loaded"}]},{type:b,tag:c,props:{className:[d,k,h]},children:[{type:a,value:l}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:e}]}]}]}]},toc:{title:ag,searchDepth:M,depth:M,links:[{id:ac,depth:M,text:ad}]}},template:ah},templateOptions:{header:x,footer:x,aside:x,asideClass:ag,fluid:B,banner:x},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:ai,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:aj,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:ak,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:ah,subtitle:"Create fast websites easily",slug:"docs",to:al,icon:"docs.svg",color:"bg-green-500"},{title:am,subtitle:"Understand everything in Nuxt",slug:"examples",to:an,icon:"examples.svg",color:"bg-green-600"},{title:ao,subtitle:"Learn with concrete cases",slug:"tutorials",to:ap,icon:"tutorials.svg",color:"bg-green-700"},{title:D,subtitle:N,href:E,icon:O,color:P}]},{title:"Explore",items:[{title:aq,subtitle:"How to Deploy Nuxt",slug:"deployments",to:ar,icon:"deployments.svg",color:"bg-indigo-light"},{title:as,subtitle:"Extend the power of Nuxt",href:at,icon:"modules.svg",color:"bg-indigo"},{title:au,subtitle:"Get started with themes",slug:"themes",to:av,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aw,subtitle:"Latest news about Nuxt",slug:"announcements",to:ax,icon:"announcements.svg",color:"bg-mint-lighter"},{title:ay,subtitle:"They are Nuxt",slug:"teams",to:az,icon:"teams.svg",color:"bg-mint-light"},{title:aA,subtitle:"All the code we have released",slug:"releases",to:aB,icon:"releases.svg",color:"bg-mint"},{title:aC,subtitle:"They trust us",slug:"sponsors",to:aD,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aE}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aE},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aw,to:ax},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aC,to:aD},{title:ay,to:az},{title:ao,to:ap},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:al},{title:am,to:an},{title:aq,to:ar},{title:D,href:E},{title:as,href:at},{title:aA,to:aB},{title:ai,to:aj},{title:au,to:av}]}],showCookieBanner:B},"AsideBottom:0":{lastRelease:aF,masterCoursesLink:{title:D,subtitle:N,href:E,icon:O,color:P}},"AsideBottom:1":{lastRelease:aF,masterCoursesLink:{title:D,subtitle:N,href:E,icon:O,color:P}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev",prev:{slug:"configuration-generate",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate",title:"The generate Property"},next:{slug:"configuration-head",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-head",title:"The head Property"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fen\u002Fdocs\u002F5.configuration-glossary\u002F12.configuration-global-name.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",ak,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","span","token","\n","punctuation"," ","string","globalName","operator","template-punctuation","`","interpolation-punctuation","function",":","prose-code-inline","}","\n  ","function-variable","parameter","arrow","=\u003E",",",true,"template-string","interpolation","${",false,"prose-li","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-paragraph","__",".","method","property-access","(",")",2,"Learn more with experts","master-courses.svg","bg-green-800","The globalName property","Nuxt lets you customize the global ID used in the main HTML template as well as the main Vue instance name and other options.","prose-ul","Type: ","nuxt","prose-code","filename","nuxt.config.js","pre","language-js","line-numbers","code","{","globals","the-globals-property","The globals property","_","capitalize","","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));