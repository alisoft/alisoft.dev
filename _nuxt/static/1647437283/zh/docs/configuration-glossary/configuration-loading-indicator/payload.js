__NUXT_JSONP__("/zh/docs/configuration-glossary/configuration-loading-indicator", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai){return {data:[{page:{key:"content:zh:docs:5.configuration-glossary:17.configuration-loading-indicator.md",generatedAt:new Date(1647437384144),mtime:new Date(1647437384138),slug:"configuration-loading-indicator",title:w,position:"999900050017",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-loading-indicator",draft:j,page:i,language:"zh",navigation:{title:"loading indicator"},description:x,menu:y,category:"configuration-glossary",empty:j,excerpt:void 0,body:{raw:"---\ntitle: The loading indicator Property\nnavigation.title: loading indicator\ndescription: Show fancy loading indicator while page is loading!\nmenu: loadingIndicator\ncategory: configuration-glossary\n---\n# The loading indicator Property\n\nShow fancy loading indicator while page is loading!\n\n---\n\nWithout Server Side Rendering (when `ssr` option is `false`), there is no content from the server side on the first page load. So, instead of showing a blank page while the page loads, we may show a spinner.\n\nThis property can have 3 different types: `string` or `false` or `object`. If a string value is provided it is converted to object style.\n\nDefault value is:\n\n```js\nloadingIndicator: {\n  name: 'circle',\n  color: '#3B8070',\n  background: 'white'\n}\n```\n\n## Built-in indicators\n\nThese indicators are imported from the awesome [SpinKit](http:\u002F\u002Ftobiasahlin.com\u002Fspinkit) project. You can use its demo page to preview spinners.\n\n- circle\n- cube-grid\n- fading-circle\n- folding-cube\n- chasing-dots\n- nuxt\n- pulse\n- rectangle-bounce\n- rotating-plane\n- three-bounce\n- wandering-cubes\n\nBuilt-in indicators support `color` and `background` options.\n\n## Custom indicators\n\nIf you need your own special indicator, a String value or Name key can also be a path to an HTML template of indicator source code! All of the options are passed to the template, too.\n\nNuxt's built-in [source code](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Ftree\u002Fdev\u002Fpackages\u002Fvue-app\u002Ftemplate\u002Fviews\u002Floading) is also available if you need a base!\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-loading-indicator-property"},children:[{type:a,value:w}]},{type:a,value:c},{type:b,tag:g,props:{class:"d-heading-description"},children:[{type:a,value:x}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Without Server Side Rendering (when "},{type:b,tag:h,props:{},children:[{type:a,value:"ssr"}]},{type:a,value:" option is "},{type:b,tag:h,props:{},children:[{type:a,value:z}]},{type:a,value:"), there is no content from the server side on the first page load. So, instead of showing a blank page while the page loads, we may show a spinner."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"This property can have 3 different types: "},{type:b,tag:h,props:{},children:[{type:a,value:k}]},{type:a,value:A},{type:b,tag:h,props:{},children:[{type:a,value:z}]},{type:a,value:A},{type:b,tag:h,props:{},children:[{type:a,value:"object"}]},{type:a,value:". If a string value is provided it is converted to object style."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Default value is:"}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-js","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:a,value:y},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:"{"}]},{type:a,value:"\n  name"},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"'circle'"}]},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:B}]},{type:a,value:"\n  color"},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"'#3B8070'"}]},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:B}]},{type:a,value:"\n  background"},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"'white'"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:"}"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:C,props:{id:D},children:[{type:b,tag:p,props:{href:"#built-in-indicators"},children:[{type:a,value:E}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"These indicators are imported from the awesome "},{type:b,tag:p,props:{href:"http:\u002F\u002Ftobiasahlin.com\u002Fspinkit",rel:[F,G,H],target:I},children:[{type:a,value:"SpinKit"}]},{type:a,value:" project. You can use its demo page to preview spinners."}]},{type:a,value:c},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"circle"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"cube-grid"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"fading-circle"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"folding-cube"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"chasing-dots"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"nuxt"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"pulse"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"rectangle-bounce"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"rotating-plane"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"three-bounce"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"wandering-cubes"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Built-in indicators support "},{type:b,tag:h,props:{},children:[{type:a,value:"color"}]},{type:a,value:" and "},{type:b,tag:h,props:{},children:[{type:a,value:"background"}]},{type:a,value:" options."}]},{type:a,value:c},{type:b,tag:C,props:{id:J},children:[{type:b,tag:p,props:{href:"#custom-indicators"},children:[{type:a,value:K}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"If you need your own special indicator, a String value or Name key can also be a path to an HTML template of indicator source code! All of the options are passed to the template, too."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt's built-in "},{type:b,tag:p,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Ftree\u002Fdev\u002Fpackages\u002Fvue-app\u002Ftemplate\u002Fviews\u002Floading",rel:[F,G,H],target:I},children:[{type:a,value:"source code"}]},{type:a,value:" is also available if you need a base!"}]}]},toc:{title:L,searchDepth:q,depth:q,links:[{id:D,depth:q,text:E},{id:J,depth:q,text:K}]}},template:M},templateOptions:{header:i,footer:i,aside:i,asideClass:L,fluid:j,banner:i},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:N,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:O,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:P,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:M,subtitle:"Create fast websites easily",slug:"docs",to:Q,icon:"docs.svg",color:"bg-green-500"},{title:R,subtitle:"Understand everything in Nuxt",slug:"examples",to:S,icon:"examples.svg",color:"bg-green-600"},{title:T,subtitle:"Learn with concrete cases",slug:"tutorials",to:U,icon:"tutorials.svg",color:"bg-green-700"},{title:r,subtitle:t,href:s,icon:u,color:v}]},{title:"Explore",items:[{title:V,subtitle:"How to Deploy Nuxt",slug:"deployments",to:W,icon:"deployments.svg",color:"bg-indigo-light"},{title:X,subtitle:"Extend the power of Nuxt",href:Y,icon:"modules.svg",color:"bg-indigo"},{title:Z,subtitle:"Get started with themes",slug:"themes",to:_,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:$,subtitle:"Latest news about Nuxt",slug:"announcements",to:aa,icon:"announcements.svg",color:"bg-mint-lighter"},{title:ab,subtitle:"They are Nuxt",slug:"teams",to:ac,icon:"teams.svg",color:"bg-mint-light"},{title:ad,subtitle:"All the code we have released",slug:"releases",to:ae,icon:"releases.svg",color:"bg-mint"},{title:af,subtitle:"They trust us",slug:"sponsors",to:ag,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:ah}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:ah},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:$,to:aa},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:af,to:ag},{title:ab,to:ac},{title:T,to:U},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:Q},{title:R,to:S},{title:V,to:W},{title:r,href:s},{title:X,href:Y},{title:ad,to:ae},{title:N,to:O},{title:Z,to:_}]}],showCookieBanner:j},"AsideBottom:0":{lastRelease:ai,masterCoursesLink:{title:r,subtitle:t,href:s,icon:u,color:v}},"AsideBottom:1":{lastRelease:ai,masterCoursesLink:{title:r,subtitle:t,href:s,icon:u,color:v}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev",prev:{slug:"configuration-loading",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-loading",title:"The loading Property"},next:{slug:"configuration-mode",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-mode",title:"The mode Property"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fzh\u002Fdocs\u002F5.configuration-glossary\u002F17.configuration-loading-indicator.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",P,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","\n","span","token","prose-li","prose-paragraph","prose-code-inline",true,false,"string","operator",":"," ","punctuation","prose-a",2,"Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Learn more with experts","master-courses.svg","bg-green-800","The loading indicator Property","Show fancy loading indicator while page is loading!","loadingIndicator","false"," or ",",","prose-h2","built-in-indicators","Built-in indicators","nofollow","noopener","noreferrer","_blank","custom-indicators","Custom indicators","","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));