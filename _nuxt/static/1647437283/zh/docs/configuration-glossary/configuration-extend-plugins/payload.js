__NUXT_JSONP__("/zh/docs/configuration-glossary/configuration-extend-plugins", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao){return {data:[{page:{key:"content:zh:docs:5.configuration-glossary:10.configuration-extend-plugins.md",generatedAt:new Date(1647437382343),mtime:new Date(1647437382241),slug:"configuration-extend-plugins",title:z,position:"999900050010",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-extend-plugins",draft:m,page:j,language:"zh",navigation:{title:s},description:"The extendPlugins property lets you customize Nuxt plugins.",menu:s,category:"configuration-glossary",empty:m,excerpt:void 0,body:{raw:"---\ntitle: The extendPlugins Property\nnavigation.title: extendPlugins\ndescription: The extendPlugins property lets you customize Nuxt plugins.\nmenu: extendPlugins\ncategory: configuration-glossary\n---\n# The extendPlugins Property\n\nThe extendPlugins property lets you customize Nuxt plugins. ([options.plugins](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-plugins)).\n\n---\n\n- Type: `Function`\n- Default: `undefined`\n\nYou may want to extend plugins or change plugins order created by Nuxt. This function accepts an array of [plugin](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-plugins) objects and should return array of plugin objects.\n\nExample of changing plugins order:\n\n```js{}[nuxt.config.js]\nexport default {\n  extendPlugins(plugins) {\n    const pluginIndex = plugins.findIndex(\n      plugin =\u003E (typeof plugin === 'string' ? plugin : plugin.src) === '~\u002Fplugins\u002FshouldBeFirst.js'\n    )\n    const shouldBeFirstPlugin = plugins[pluginIndex]\n\n    plugins.splice(pluginIndex, 1)\n    plugins.unshift(shouldBeFirstPlugin)\n\n    return plugins\n  }\n}\n```\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-extendplugins-property"},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:t,props:{class:"d-heading-description"},children:[{type:a,value:"The extendPlugins property lets you customize Nuxt plugins. ("},{type:b,tag:A,props:{href:B},children:[{type:a,value:"options.plugins"}]},{type:a,value:")."}]},{type:a,value:f},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:f},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:f},{type:b,tag:C,props:{},children:[{type:a,value:f},{type:a,value:"Type: "},{type:b,tag:D,props:{},children:[{type:a,value:"Function"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:C,props:{},children:[{type:a,value:f},{type:a,value:"Default: "},{type:b,tag:D,props:{},children:[{type:a,value:"undefined"}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"You may want to extend plugins or change plugins order created by Nuxt. This function accepts an array of "},{type:b,tag:A,props:{href:B},children:[{type:a,value:E}]},{type:a,value:" objects and should return array of plugin objects."}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Example of changing plugins order:"}]},{type:a,value:f},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:c,props:{className:["filename"]},children:[{type:a,value:"nuxt.config.js"}]},{type:b,tag:"pre",props:{className:["language-js","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,i,F]},children:[{type:a,value:"export"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,F]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"plugins"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:a,value:" pluginIndex "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,v,n,p]},children:[{type:a,value:"findIndex"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"\n      "},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"arrow",h]},children:[{type:a,value:"=\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"typeof"}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:"'string'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"?"}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:":"}]},{type:a,value:" plugin"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"src"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:"'~\u002Fplugins\u002FshouldBeFirst.js'"}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:a,value:" shouldBeFirstPlugin "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:J}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:"\n\n    plugins"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,v,n,p]},children:[{type:a,value:"splice"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:","}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n    plugins"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,v,n,p]},children:[{type:a,value:"unshift"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"shouldBeFirstPlugin"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n\n    "},{type:b,tag:c,props:{className:[d,i,"control-flow"]},children:[{type:a,value:"return"}]},{type:a,value:" plugins\n  "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f}]}]}]}]},toc:{title:Q,searchDepth:R,depth:R,links:[]}},template:S},templateOptions:{header:j,footer:j,aside:j,asideClass:Q,fluid:m,banner:j},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:T,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:U,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:V,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:S,subtitle:"Create fast websites easily",slug:"docs",to:W,icon:"docs.svg",color:"bg-green-500"},{title:X,subtitle:"Understand everything in Nuxt",slug:"examples",to:Y,icon:"examples.svg",color:"bg-green-600"},{title:Z,subtitle:"Learn with concrete cases",slug:"tutorials",to:_,icon:"tutorials.svg",color:"bg-green-700"},{title:q,subtitle:w,href:r,icon:x,color:y}]},{title:"Explore",items:[{title:$,subtitle:"How to Deploy Nuxt",slug:"deployments",to:aa,icon:"deployments.svg",color:"bg-indigo-light"},{title:ab,subtitle:"Extend the power of Nuxt",href:ac,icon:"modules.svg",color:"bg-indigo"},{title:ad,subtitle:"Get started with themes",slug:"themes",to:ae,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:af,subtitle:"Latest news about Nuxt",slug:"announcements",to:ag,icon:"announcements.svg",color:"bg-mint-lighter"},{title:ah,subtitle:"They are Nuxt",slug:"teams",to:ai,icon:"teams.svg",color:"bg-mint-light"},{title:aj,subtitle:"All the code we have released",slug:"releases",to:ak,icon:"releases.svg",color:"bg-mint"},{title:al,subtitle:"They trust us",slug:"sponsors",to:am,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:an}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:an},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:af,to:ag},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:al,to:am},{title:ah,to:ai},{title:Z,to:_},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:W},{title:X,to:Y},{title:$,to:aa},{title:q,href:r},{title:ab,href:ac},{title:aj,to:ak},{title:T,to:U},{title:ad,to:ae}]}],showCookieBanner:m},"AsideBottom:0":{lastRelease:ao,masterCoursesLink:{title:q,subtitle:w,href:r,icon:x,color:y}},"AsideBottom:1":{lastRelease:ao,masterCoursesLink:{title:q,subtitle:w,href:r,icon:x,color:y}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev",prev:{slug:"configuration-env",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-env",title:"The env property"},next:{slug:"configuration-generate",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate",title:"The generate Property"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fzh\u002Fdocs\u002F5.configuration-glossary\u002F10.configuration-extend-plugins.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",V,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","span","token","punctuation","\n"," ","operator","keyword",true,"(",")",false,"function",".","property-access","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","extendPlugins","prose-paragraph","\n    ","method","Learn more with experts","master-courses.svg","bg-green-800","The extendPlugins Property","prose-a","\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-plugins","prose-li","prose-code-inline","plugin","module","{","parameter","const","="," plugins"," plugin ","===","string","pluginIndex","}","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));