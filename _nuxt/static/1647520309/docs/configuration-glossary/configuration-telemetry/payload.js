__NUXT_JSONP__("/docs/configuration-glossary/configuration-telemetry", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at){return {data:[{page:{key:"content:en:docs:5.configuration-glossary:32.configuration-telemetry.md",generatedAt:new Date(1647520387618),mtime:new Date(1647520387611),slug:"configuration-telemetry",title:w,position:"999900050032",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-telemetry",draft:r,page:l,language:"en",navigation:{title:I},description:J,menu:I,category:"configuration-glossary",empty:r,excerpt:void 0,body:{raw:"---\ntitle: The telemetry Property\nnavigation.title: telemetry\ndescription: Nuxt collects anonymous telemetry data about general usage. This helps us to accurately gauge Nuxt feature usage and customization across all our users.\nmenu: telemetry\ncategory: configuration-glossary\n---\n# The telemetry property\n\nNuxt collects anonymous telemetry data about general usage. This helps us to accurately gauge Nuxt feature usage and customization across all our users.\n\n---\n\n## The telemetry Property\n\n\u003E Nuxt v2.13.0 introduces Nuxt Telemetry to collect anonymous telemetry data about general usage. This helps us to accurately gauge Nuxt feature usage and customization across all our users.\n\n- Type: `Boolean`\n- Default is based on your user preferences\n\n## Why collect Telemetry\n\nNuxt has grown a lot from its [initial release](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Freleases\u002Ftag\u002Fv0.2.0) (7 Nov 2016) and we are keep listening to [community feedback](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fissues) to improve it.\n\nHowever, this manual process only collects feedback from a subset of users that takes the time to fill the issue template and it may have different needs or use-case than you.\n\nNuxt Telemetry collects **anonymous telemetry data about general usage**. This helps us to accurately gauge feature usage and customization across all our users. This data will let us better understand how Nuxt is used globally, measuring improvements made (DX and performances) and their relevance.\n\nWe collect multiple events:\n\n- Command invoked (nuxt dev, nuxt build, etc)\n- Versions of Nuxt and Node.js\n- General machine information (MacOS\u002FLinux\u002FWindows and if command is run within CI, the CI name)\n- Duration of the Webpack build and average size of the application, as well as the generation stats (when using nuxt generate)\n- What are the public dependency of your project (Nuxt modules)\n\nThe code is open source and available at https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry.\n\n## Opting-out\n\nYou can disable [Nuxt Telemetry](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry) for your project with several ways:\n\n1. Using `npx nuxt telemetry disable`\n\n```bash\nnpx nuxt telemetry [status|enable|disable] [-g,--global] [dir]\n```\n\n2. Using an environment variable\n\n```bash\nNUXT_TELEMETRY_DISABLED=1\n```\n\n3. Setting `telemetry: false` in your `nuxt.config.js`:\n\n```js{}[nuxt.config.js]\nexport default {\n  telemetry: false\n}\n```\n\nYou can learn more about Nuxt Telemetry and the events sent on https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-telemetry-property"},children:[{type:a,value:"The telemetry property"}]},{type:a,value:c},{type:b,tag:g,props:{class:"d-heading-description"},children:[{type:a,value:J}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:x,props:{id:K},children:[{type:b,tag:h,props:{href:"#the-telemetry-property-1"},children:[{type:a,value:w}]}]},{type:a,value:c},{type:b,tag:"prose-blockquote",props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt v2.13.0 introduces Nuxt Telemetry to collect anonymous telemetry data about general usage. This helps us to accurately gauge Nuxt feature usage and customization across all our users."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:L,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"Type: "},{type:b,tag:s,props:{},children:[{type:a,value:"Boolean"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"Default is based on your user preferences"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{id:M},children:[{type:b,tag:h,props:{href:"#why-collect-telemetry"},children:[{type:a,value:N}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt has grown a lot from its "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Freleases\u002Ftag\u002Fv0.2.0",rel:[m,n,o],target:p},children:[{type:a,value:"initial release"}]},{type:a,value:" (7 Nov 2016) and we are keep listening to "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fissues",rel:[m,n,o],target:p},children:[{type:a,value:"community feedback"}]},{type:a,value:" to improve it."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"However, this manual process only collects feedback from a subset of users that takes the time to fill the issue template and it may have different needs or use-case than you."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt Telemetry collects "},{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"anonymous telemetry data about general usage"}]},{type:a,value:". This helps us to accurately gauge feature usage and customization across all our users. This data will let us better understand how Nuxt is used globally, measuring improvements made (DX and performances) and their relevance."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"We collect multiple events:"}]},{type:a,value:c},{type:b,tag:L,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"Command invoked (nuxt dev, nuxt build, etc)"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"Versions of Nuxt and Node.js"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"General machine information (MacOS\u002FLinux\u002FWindows and if command is run within CI, the CI name)"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"Duration of the Webpack build and average size of the application, as well as the generation stats (when using nuxt generate)"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"What are the public dependency of your project (Nuxt modules)"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The code is open source and available at "},{type:b,tag:h,props:{href:j,rel:[m,n,o],target:p},children:[{type:a,value:j}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:x,props:{id:O},children:[{type:b,tag:h,props:{href:"#opting-out"},children:[{type:a,value:P}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You can disable "},{type:b,tag:h,props:{href:j,rel:[m,n,o],target:p},children:[{type:a,value:"Nuxt Telemetry"}]},{type:a,value:" for your project with several ways:"}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"Using "},{type:b,tag:s,props:{},children:[{type:a,value:"npx nuxt telemetry disable"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:b,tag:A,props:{className:[B,Q]},children:[{type:b,tag:C,props:{},children:[{type:a,value:"npx nuxt telemetry "},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:D}]},{type:a,value:"status"},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:R}]},{type:b,tag:d,props:{className:[e,"builtin","class-name"]},children:[{type:a,value:"enable"}]},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:R}]},{type:a,value:"disable"},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:E}]},{type:a,value:q},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:D}]},{type:a,value:"-g,--global"},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:E}]},{type:a,value:q},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:D}]},{type:a,value:"dir"},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:E}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:y,props:{start:k},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"Using an environment variable"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:b,tag:A,props:{className:[B,Q]},children:[{type:b,tag:C,props:{},children:[{type:b,tag:d,props:{className:[e,"assign-left","variable"]},children:[{type:a,value:"NUXT_TELEMETRY_DISABLED"}]},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:"="}]},{type:b,tag:d,props:{className:[e,"number"]},children:[{type:a,value:"1"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:y,props:{start:3},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"Setting "},{type:b,tag:s,props:{},children:[{type:a,value:"telemetry: false"}]},{type:a,value:" in your "},{type:b,tag:s,props:{},children:[{type:a,value:S}]},{type:a,value:T},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:b,tag:d,props:{className:["filename"]},children:[{type:a,value:S}]},{type:b,tag:A,props:{className:[B,"language-js"]},children:[{type:b,tag:C,props:{},children:[{type:b,tag:d,props:{className:[e,U,V]},children:[{type:a,value:"export"}]},{type:a,value:q},{type:b,tag:d,props:{className:[e,U,V]},children:[{type:a,value:"default"}]},{type:a,value:q},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"{"}]},{type:a,value:"\n  telemetry"},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:T}]},{type:a,value:q},{type:b,tag:d,props:{className:[e,"boolean"]},children:[{type:a,value:"false"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"}"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You can learn more about Nuxt Telemetry and the events sent on "},{type:b,tag:h,props:{href:j,rel:[m,n,o],target:p},children:[{type:a,value:j}]}]}]},toc:{title:W,searchDepth:k,depth:k,links:[{id:K,depth:k,text:w},{id:M,depth:k,text:N},{id:O,depth:k,text:P}]}},template:X},templateOptions:{header:l,footer:l,aside:l,asideClass:W,fluid:r,banner:l},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:Y,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:Z,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:_,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:X,subtitle:"Create fast websites easily",slug:"docs",to:$,icon:"docs.svg",color:"bg-green-500"},{title:aa,subtitle:"Understand everything in Nuxt",slug:"examples",to:ab,icon:"examples.svg",color:"bg-green-600"},{title:ac,subtitle:"Learn with concrete cases",slug:"tutorials",to:ad,icon:"tutorials.svg",color:"bg-green-700"},{title:u,subtitle:F,href:v,icon:G,color:H}]},{title:"Explore",items:[{title:ae,subtitle:"How to Deploy Nuxt",slug:"deployments",to:af,icon:"deployments.svg",color:"bg-indigo-light"},{title:ag,subtitle:"Extend the power of Nuxt",href:ah,icon:"modules.svg",color:"bg-indigo"},{title:ai,subtitle:"Get started with themes",slug:"themes",to:aj,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:ak,subtitle:"Latest news about Nuxt",slug:"announcements",to:al,icon:"announcements.svg",color:"bg-mint-lighter"},{title:am,subtitle:"They are Nuxt",slug:"teams",to:an,icon:"teams.svg",color:"bg-mint-light"},{title:ao,subtitle:"All the code we have released",slug:"releases",to:ap,icon:"releases.svg",color:"bg-mint"},{title:aq,subtitle:"They trust us",slug:"sponsors",to:ar,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:as}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:as},{title:"Telemetry",href:j}]},{title:"Ecosystem",items:[{title:ak,to:al},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aq,to:ar},{title:am,to:an},{title:ac,to:ad},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:$},{title:aa,to:ab},{title:ae,to:af},{title:u,href:v},{title:ag,href:ah},{title:ao,to:ap},{title:Y,to:Z},{title:ai,to:aj}]}],showCookieBanner:r},"AsideBottom:0":{lastRelease:at,masterCoursesLink:{title:u,subtitle:F,href:v,icon:G,color:H}},"AsideBottom:1":{lastRelease:at,masterCoursesLink:{title:u,subtitle:F,href:v,icon:G,color:H}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev",prev:{slug:"configuration-target",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-target",title:"The target Property"},next:{slug:"configuration-transition",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-transition",title:"Transition Properties"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fen\u002Fdocs\u002F5.configuration-glossary\u002F32.configuration-telemetry.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",_,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","\n","span","token","prose-li","prose-paragraph","prose-a","punctuation","https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry",2,true,"nofollow","noopener","noreferrer","_blank"," ",false,"prose-code-inline","operator","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","The telemetry Property","prose-h2","prose-ol","prose-code","pre","line-numbers","code","[","]","Learn more with experts","master-courses.svg","bg-green-800","telemetry","Nuxt collects anonymous telemetry data about general usage. This helps us to accurately gauge Nuxt feature usage and customization across all our users.","the-telemetry-property-1","prose-ul","why-collect-telemetry","Why collect Telemetry","opting-out","Opting-out","language-bash","|","nuxt.config.js",":","keyword","module","","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));