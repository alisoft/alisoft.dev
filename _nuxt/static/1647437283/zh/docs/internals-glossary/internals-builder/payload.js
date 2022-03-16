__NUXT_JSONP__("/zh/docs/internals-glossary/internals-builder", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa){return {data:[{page:{key:"content:zh:docs:6.internals-glossary:7.internals-builder.md",generatedAt:new Date(1647437386802),mtime:new Date(1647437386796),slug:"internals-builder",title:t,position:"999900060007",to:"\u002Fdocs\u002Finternals-glossary\u002Finternals-builder",draft:k,page:j,language:"zh",navigation:{title:"Builder"},description:"Nuxt Builder Class",category:"internals-glossary",empty:k,excerpt:void 0,body:{raw:"---\ntitle: The Builder class\nnavigation.title: Builder\ndescription: Nuxt Builder Class\ncategory: internals-glossary\n---\n\n# The Builder class\n\n---\n\n- Source: **[builder\u002Fbuilder.js](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fbuilder\u002Fsrc\u002Fbuilder.js)**\n\n## Hooks\n\nWe can register hooks on certain life cycle events.\n\n```js\n\u002F\u002F Add hook for build\nthis.nuxt.hook('build:done', (builder) =\u003E {\n  ...\n})\n```\n\n| Hook                    | Arguments                                   | When                                                                                                                                    |\n| ----------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |\n| `build:before`          | (nuxt, buildOptions)                        | Before Nuxt build started                                                                                                               |\n| `builder:prepared`      | (nuxt, buildOptions)                        | The build directories have been created                                                                                                 |\n| `builder:extendPlugins` | (plugins)                                   | Generating plugins                                                                                                                      |\n| `build:templates`       | ({ templatesFiles, templateVars, resolve }) | Generating `.nuxt` template files                                                                                                       |\n| `build:extendRoutes`    | (routes, resolve)                           | Generating routes                                                                                                                       |\n| `webpack:config`        | (webpackConfigs)                            | Before configuration of compilers                                                                                                       |\n| `build:compile`         | ({ name, compiler })                        | Before webpack compile (compiler is a webpack `Compiler` instance), if universal mode, called twice with name `'client'` and `'server'` |\n| `build:compiled`        | ({ name, compiler, stats })                 | webpack build finished                                                                                                                  |\n| `build:done`            | (nuxt)                                      | Nuxt build finished                                                                                                                     |\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-builder-class"},children:[{type:a,value:t}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:c},{type:b,tag:"prose-li",props:{},children:[{type:a,value:c},{type:a,value:"Source: "},{type:b,tag:"prose-strong",props:{},children:[{type:b,tag:u,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fbuilder\u002Fsrc\u002Fbuilder.js",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"builder\u002Fbuilder.js"}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"prose-h2",props:{id:v},children:[{type:b,tag:u,props:{href:"#hooks"},children:[{type:a,value:w}]}]},{type:a,value:c},{type:b,tag:"prose-paragraph",props:{},children:[{type:a,value:"We can register hooks on certain life cycle events."}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-js","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:e,props:{className:[f,"comment"]},children:[{type:a,value:"\u002F\u002F Add hook for build"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,"keyword"]},children:[{type:a,value:"this"}]},{type:b,tag:e,props:{className:[f,i]},children:[{type:a,value:x}]},{type:b,tag:e,props:{className:[f,y]},children:[{type:a,value:"nuxt"}]},{type:b,tag:e,props:{className:[f,i]},children:[{type:a,value:x}]},{type:b,tag:e,props:{className:[f,"method","function",y]},children:[{type:a,value:"hook"}]},{type:b,tag:e,props:{className:[f,i]},children:[{type:a,value:z}]},{type:b,tag:e,props:{className:[f,"string"]},children:[{type:a,value:"'build:done'"}]},{type:b,tag:e,props:{className:[f,i]},children:[{type:a,value:","}]},{type:a,value:n},{type:b,tag:e,props:{className:[f,i]},children:[{type:a,value:z}]},{type:b,tag:e,props:{className:[f,"parameter"]},children:[{type:a,value:"builder"}]},{type:b,tag:e,props:{className:[f,i]},children:[{type:a,value:A}]},{type:a,value:n},{type:b,tag:e,props:{className:[f,"arrow",B]},children:[{type:a,value:"=\u003E"}]},{type:a,value:n},{type:b,tag:e,props:{className:[f,i]},children:[{type:a,value:"{"}]},{type:a,value:"\n  "},{type:b,tag:e,props:{className:[f,"spread",B]},children:[{type:a,value:"..."}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,i]},children:[{type:a,value:"}"}]},{type:b,tag:e,props:{className:[f,i]},children:[{type:a,value:A}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:"prose-table",props:{},children:[{type:a,value:c},{type:b,tag:"prose-thead",props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:"Hook"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:"Arguments"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:"When"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"prose-tbody",props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"build:before"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Before Nuxt build started"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"builder:prepared"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The build directories have been created"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"builder:extendPlugins"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(plugins)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Generating plugins"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"build:templates"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"({ templatesFiles, templateVars, resolve })"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Generating "},{type:b,tag:g,props:{},children:[{type:a,value:".nuxt"}]},{type:a,value:" template files"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"build:extendRoutes"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(routes, resolve)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Generating routes"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"webpack:config"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(webpackConfigs)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Before configuration of compilers"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"build:compile"}]},{type:a,value:"      "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"({ name, compiler })"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Before webpack compile (compiler is a webpack "},{type:b,tag:g,props:{},children:[{type:a,value:"Compiler"}]},{type:a,value:" instance), if universal mode, called twice with name "},{type:b,tag:g,props:{},children:[{type:a,value:"'client'"}]},{type:a,value:" and "},{type:b,tag:g,props:{},children:[{type:a,value:"'server'"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"build:compiled"}]},{type:a,value:"    "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"({ name, compiler, stats })"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"webpack build finished"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"build:done"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(nuxt)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Nuxt build finished"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]}]},toc:{title:D,searchDepth:p,depth:p,links:[{id:v,depth:p,text:w}]}},template:E},templateOptions:{header:j,footer:j,aside:j,asideClass:D,fluid:k,banner:j},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:F,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:G,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:H,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:E,subtitle:"Create fast websites easily",slug:"docs",to:I,icon:"docs.svg",color:"bg-green-500"},{title:J,subtitle:"Understand everything in Nuxt",slug:"examples",to:K,icon:"examples.svg",color:"bg-green-600"},{title:L,subtitle:"Learn with concrete cases",slug:"tutorials",to:M,icon:"tutorials.svg",color:"bg-green-700"},{title:l,subtitle:q,href:m,icon:r,color:s}]},{title:"Explore",items:[{title:N,subtitle:"How to Deploy Nuxt",slug:"deployments",to:O,icon:"deployments.svg",color:"bg-indigo-light"},{title:P,subtitle:"Extend the power of Nuxt",href:Q,icon:"modules.svg",color:"bg-indigo"},{title:R,subtitle:"Get started with themes",slug:"themes",to:S,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:T,subtitle:"Latest news about Nuxt",slug:"announcements",to:U,icon:"announcements.svg",color:"bg-mint-lighter"},{title:V,subtitle:"They are Nuxt",slug:"teams",to:W,icon:"teams.svg",color:"bg-mint-light"},{title:X,subtitle:"All the code we have released",slug:"releases",to:Y,icon:"releases.svg",color:"bg-mint"},{title:Z,subtitle:"They trust us",slug:"sponsors",to:_,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:$}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:$},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:T,to:U},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:Z,to:_},{title:V,to:W},{title:L,to:M},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:I},{title:J,to:K},{title:N,to:O},{title:l,href:m},{title:P,href:Q},{title:X,to:Y},{title:F,to:G},{title:R,to:S}]}],showCookieBanner:k},"AsideBottom:0":{lastRelease:aa,masterCoursesLink:{title:l,subtitle:q,href:m,icon:r,color:s}},"AsideBottom:1":{lastRelease:aa,masterCoursesLink:{title:l,subtitle:q,href:m,icon:r,color:s}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev",prev:{slug:"internals-module-container",to:"\u002Fdocs\u002Finternals-glossary\u002Finternals-module-container",title:"The ModuleContainer class"},next:{slug:"internals-generator",to:"\u002Fdocs\u002Finternals-glossary\u002Finternals-generator",title:"The Generator class"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fzh\u002Fdocs\u002F6.internals-glossary\u002F7.internals-builder.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",H,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","\n","prose-td","span","token","prose-code-inline","prose-tr","punctuation",true,false,"Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite"," ","prose-th",2,"Learn more with experts","master-courses.svg","bg-green-800","The Builder class","prose-a","hooks","Hooks",".","property-access","(",")","operator","(nuxt, buildOptions)","","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));