__NUXT_JSONP__("/zh/docs/internals-glossary/nuxt-render-and-get-window", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB){return {data:[{page:{key:"content:zh:docs:6.internals-glossary:12.nuxt-render-and-get-window.md",generatedAt:new Date(1647437387346),mtime:new Date(1647437387340),slug:"nuxt-render-and-get-window",title:J,position:"999900060012",to:"\u002Fdocs\u002Finternals-glossary\u002Fnuxt-render-and-get-window",draft:s,page:q,language:"zh",navigation:{title:K},description:"Get the window from a given URL of a Nuxt Application.",category:"internals-glossary",empty:s,excerpt:void 0,body:{raw:"---\ntitle: nuxt.renderAndGetWindow(url, options)\nnavigation.title: renderAndGetWindow\ndescription: Get the window from a given URL of a Nuxt Application.\ncategory: internals-glossary\n---\n# nuxt.renderAndGetWindow(url, options)\n\nGet the `window` from a given URL of a Nuxt Application.\n\n---\n\n- Type: `Function`\n- Argument: `String`\n  1. `String`: URL to render\n  2. _Optional_, `Object`: options\n  - virtualConsole: `Boolean` (default: `true`)\n- Returns: `Promise`\n  - Returns: `window`\n\n::alert{type=\"warning\"}\nThis method is made for test purposes.\n::\n\nTo use this function, you have to install `jsdom`:\n\n```bash\nnpm install --save-dev jsdom\n```\n\nExample:\n\n```js\nconst { loadNuxt } = require('nuxt')\n\nasync function init() {\n  \u002F\u002F Assuming you've already built your project\n  const nuxt = await loadNuxt({ for: 'start' })\n  await nuxt.listen(3000)\n  const window = await nuxt.renderAndGetWindow('http:\u002F\u002Flocalhost:3000')\n  \u002F\u002F Display the head `\u003Ctitle\u003E`\n  console.log(window.document.title)\n  nuxt.close()\n}\n\ninit()\n```\n\n### What's next\n\n::alert{type=\"next\"}\nCheck out the the [Components Glossary book](\u002Fdocs\u002Fcomponents-glossary\u002Ffetch)\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"nuxtrenderandgetwindowurl-options"},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:r,props:{class:"d-heading-description"},children:[{type:a,value:"Get the "},{type:b,tag:i,props:{},children:[{type:a,value:t}]},{type:a,value:" from a given URL of a Nuxt Application."}]},{type:a,value:e},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:e},{type:b,tag:z,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:"Type: "},{type:b,tag:i,props:{},children:[{type:a,value:"Function"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:"Argument: "},{type:b,tag:i,props:{},children:[{type:a,value:L}]},{type:a,value:e},{type:b,tag:"prose-ol",props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:L}]},{type:a,value:": URL to render"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:"prose-em",props:{},children:[{type:a,value:"Optional"}]},{type:a,value:", "},{type:b,tag:i,props:{},children:[{type:a,value:"Object"}]},{type:a,value:": options"},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:z,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:"virtualConsole: "},{type:b,tag:i,props:{},children:[{type:a,value:"Boolean"}]},{type:a,value:" (default: "},{type:b,tag:i,props:{},children:[{type:a,value:"true"}]},{type:a,value:j},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:M},{type:b,tag:i,props:{},children:[{type:a,value:"Promise"}]},{type:a,value:e},{type:b,tag:z,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:M},{type:b,tag:i,props:{},children:[{type:a,value:t}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:N,props:{type:"warning"},children:[{type:b,tag:r,props:{},children:[{type:a,value:"This method is made for test purposes."}]}]},{type:a,value:e},{type:b,tag:r,props:{},children:[{type:a,value:"To use this function, you have to install "},{type:b,tag:i,props:{},children:[{type:a,value:"jsdom"}]},{type:a,value:O}]},{type:a,value:e},{type:b,tag:P,props:{},children:[{type:b,tag:Q,props:{className:[R,"language-bash"]},children:[{type:b,tag:S,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"npm"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"install"}]},{type:a,value:" --save-dev jsdom\n"}]}]}]},{type:a,value:e},{type:b,tag:r,props:{},children:[{type:a,value:"Example:"}]},{type:a,value:e},{type:b,tag:P,props:{},children:[{type:b,tag:Q,props:{className:[R,"language-js"]},children:[{type:b,tag:S,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:" loadNuxt "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"require"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"'nuxt'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"async"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:"\u002F\u002F Assuming you've already built your project"}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:" nuxt "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k,v]},children:[{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"loadNuxt"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k,v]},children:[{type:a,value:"for"}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"'start'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,k,v]},children:[{type:a,value:F}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,w,h,p]},children:[{type:a,value:"listen"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"3000"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,X,Y]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k,v]},children:[{type:a,value:F}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,w,h,p]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"'http:\u002F\u002Flocalhost:3000'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:"\u002F\u002F Display the head `\u003Ctitle\u003E`"}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,Z,"class-name"]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,w,h,p]},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,X,Y]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"document"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"title"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:"\n  nuxt"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,w,h,p]},children:[{type:a,value:"close"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:"prose-h3",props:{id:_},children:[{type:b,tag:$,props:{href:"#whats-next"},children:[{type:a,value:aa}]}]},{type:a,value:e},{type:b,tag:N,props:{type:"next"},children:[{type:b,tag:r,props:{},children:[{type:a,value:"Check out the the "},{type:b,tag:$,props:{href:"\u002Fdocs\u002Fcomponents-glossary\u002Ffetch"},children:[{type:a,value:"Components Glossary book"}]}]}]}]},toc:{title:ab,searchDepth:ac,depth:ac,links:[{id:_,depth:3,text:aa}]}},template:ad},templateOptions:{header:q,footer:q,aside:q,asideClass:ab,fluid:s,banner:q},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:ae,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:af,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:ag,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:ad,subtitle:"Create fast websites easily",slug:"docs",to:ah,icon:"docs.svg",color:"bg-green-500"},{title:ai,subtitle:"Understand everything in Nuxt",slug:"examples",to:aj,icon:"examples.svg",color:"bg-green-600"},{title:ak,subtitle:"Learn with concrete cases",slug:"tutorials",to:al,icon:"tutorials.svg",color:"bg-green-700"},{title:x,subtitle:G,href:y,icon:H,color:I}]},{title:"Explore",items:[{title:am,subtitle:"How to Deploy Nuxt",slug:"deployments",to:an,icon:"deployments.svg",color:"bg-indigo-light"},{title:ao,subtitle:"Extend the power of Nuxt",href:ap,icon:"modules.svg",color:"bg-indigo"},{title:aq,subtitle:"Get started with themes",slug:"themes",to:ar,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:as,subtitle:"Latest news about Nuxt",slug:"announcements",to:at,icon:"announcements.svg",color:"bg-mint-lighter"},{title:au,subtitle:"They are Nuxt",slug:"teams",to:av,icon:"teams.svg",color:"bg-mint-light"},{title:aw,subtitle:"All the code we have released",slug:"releases",to:ax,icon:"releases.svg",color:"bg-mint"},{title:ay,subtitle:"They trust us",slug:"sponsors",to:az,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aA}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aA},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:as,to:at},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:ay,to:az},{title:au,to:av},{title:ak,to:al},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:ah},{title:ai,to:aj},{title:am,to:an},{title:x,href:y},{title:ao,href:ap},{title:aw,to:ax},{title:ae,to:af},{title:aq,to:ar}]}],showCookieBanner:s},"AsideBottom:0":{lastRelease:aB,masterCoursesLink:{title:x,subtitle:G,href:y,icon:H,color:I}},"AsideBottom:1":{lastRelease:aB,masterCoursesLink:{title:x,subtitle:G,href:y,icon:H,color:I}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev",prev:{slug:"nuxt-render-route",to:"\u002Fdocs\u002Finternals-glossary\u002Fnuxt-render-route",title:"nuxt.renderRoute(route, context)"},next:{slug:"new-york-public-radio",to:"\u002Fcase-studies\u002Fnew-york-public-radio",title:"New York Public Radio"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fzh\u002Fdocs\u002F6.internals-glossary\u002F12.nuxt-render-and-get-window.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",ag,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","span","token","\n","punctuation"," ","function","prose-code-inline",")","keyword","(","prose-li","\n  ",".","property-access",true,"prose-paragraph",false,"window","operator","control-flow","method","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-ul","const","{","}","=","string","await","Learn more with experts","master-courses.svg","bg-green-800","nuxt.renderAndGetWindow(url, options)","renderAndGetWindow","String","Returns: ","alert",":","prose-code","pre","line-numbers","code","\n\n","init","comment"," nuxt","dom","variable","console","whats-next","prose-a","What's next","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));