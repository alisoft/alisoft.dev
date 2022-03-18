__NUXT_JSONP__("/zh/docs/internals-glossary/internals-generator", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X){return {data:[{page:{key:"content:zh:docs:6.internals-glossary:8.internals-generator.md",generatedAt:new Date(1647603154586),mtime:new Date(1647603154569),slug:"internals-generator",title:q,position:"999900060008",to:"\u002Fdocs\u002Finternals-glossary\u002Finternals-generator",draft:h,page:g,language:"zh",navigation:{title:"Generator"},description:"Nuxt Generator Class",category:"internals-glossary",empty:h,excerpt:void 0,body:{raw:"---\ntitle: The Generator class\nnavigation.title: Generator\ndescription: Nuxt Generator Class\ncategory: internals-glossary\n---\n\n# The Generator class\n\n---\n\n- Source: **[generator\u002Fgenerator.js](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fgenerator\u002Fsrc\u002Fgenerator.js)**\n\n## Hooks\n\n`generate:` hooks:\n\n| Hook                    | Arguments                    | When                                                                                                                                          |\n| ----------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |\n| `generate:before`       | (generator, generateOptions) | Hook on before generation                                                                                                                     |\n| `generate:distRemoved`  | (generator)                  | Hook on destination folder cleaned                                                                                                            |\n| `generate:distCopied`   | (generator)                  | Hook on copy static and built files                                                                                                           |\n| `generate:route`        | ({ route, setPayload })      | Hook before generating the page, useful for dynamic payload, see [#7422](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fpull\u002F7422), available for Nuxt 2.13+ |\n| `generate:page`         | ({ route, path, html })      | Hook to let user update the path & html after generation                                                                                      |\n| `generate:routeCreated` | ({ route, path, errors })    | Hook on saving generated page success                                                                                                         |\n| `generate:extendRoutes` | (routes)                     | Hook to let user update the routes to generate                                                                                                |\n| `generate:routeFailed`  | ({ route, errors })          | Hook on saving generated page failure                                                                                                         |\n| `generate:done`         | (generator, errors)          | Hook on generation finished                                                                                                                   |\n",ast:{type:"root",children:[{type:c,tag:"prose-h1",props:{class:"d-heading-title",id:"the-generator-class"},children:[{type:a,value:q}]},{type:a,value:b},{type:c,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:b},{type:c,tag:"prose-ul",props:{},children:[{type:a,value:b},{type:c,tag:"prose-li",props:{},children:[{type:a,value:b},{type:a,value:"Source: "},{type:c,tag:"prose-strong",props:{},children:[{type:c,tag:k,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fgenerator\u002Fsrc\u002Fgenerator.js",rel:[r,s,t],target:u},children:[{type:a,value:"generator\u002Fgenerator.js"}]}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:"prose-h2",props:{id:v},children:[{type:c,tag:k,props:{href:"#hooks"},children:[{type:a,value:w}]}]},{type:a,value:b},{type:c,tag:"prose-paragraph",props:{},children:[{type:c,tag:e,props:{},children:[{type:a,value:"generate:"}]},{type:a,value:" hooks:"}]},{type:a,value:b},{type:c,tag:"prose-table",props:{},children:[{type:a,value:b},{type:c,tag:"prose-thead",props:{},children:[{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:l,props:{},children:[{type:a,value:"Hook"}]},{type:a,value:b},{type:c,tag:l,props:{},children:[{type:a,value:"Arguments"}]},{type:a,value:b},{type:c,tag:l,props:{},children:[{type:a,value:"When"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:"prose-tbody",props:{},children:[{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:e,props:{},children:[{type:a,value:"generate:before"}]}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"(generator, generateOptions)"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Hook on before generation"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:e,props:{},children:[{type:a,value:"generate:distRemoved"}]}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:x}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Hook on destination folder cleaned"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:e,props:{},children:[{type:a,value:"generate:distCopied"}]}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:x}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Hook on copy static and built files"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:e,props:{},children:[{type:a,value:"generate:route"}]}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"({ route, setPayload })"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Hook before generating the page, useful for dynamic payload, see "},{type:c,tag:k,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fpull\u002F7422",rel:[r,s,t],target:u},children:[{type:a,value:"#7422"}]},{type:a,value:", available for Nuxt 2.13+"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:e,props:{},children:[{type:a,value:"generate:page"}]}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"({ route, path, html })"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Hook to let user update the path & html after generation"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:e,props:{},children:[{type:a,value:"generate:routeCreated"}]}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"({ route, path, errors })"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Hook on saving generated page success"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:e,props:{},children:[{type:a,value:"generate:extendRoutes"}]}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"(routes)"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Hook to let user update the routes to generate"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:e,props:{},children:[{type:a,value:"generate:routeFailed"}]}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"({ route, errors })"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Hook on saving generated page failure"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:e,props:{},children:[{type:a,value:"generate:done"}]}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"(generator, errors)"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Hook on generation finished"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b}]}]},toc:{title:y,searchDepth:m,depth:m,links:[{id:v,depth:m,text:w}]}},template:z},templateOptions:{header:g,footer:g,aside:g,asideClass:y,fluid:h,banner:g},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:A,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:B,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:C,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:z,subtitle:"Create fast websites easily",slug:"docs",to:D,icon:"docs.svg",color:"bg-green-500"},{title:E,subtitle:"Understand everything in Nuxt",slug:"examples",to:F,icon:"examples.svg",color:"bg-green-600"},{title:G,subtitle:"Learn with concrete cases",slug:"tutorials",to:H,icon:"tutorials.svg",color:"bg-green-700"},{title:i,subtitle:n,href:j,icon:o,color:p}]},{title:"Explore",items:[{title:I,subtitle:"How to Deploy Nuxt",slug:"deployments",to:J,icon:"deployments.svg",color:"bg-indigo-light"},{title:K,subtitle:"Extend the power of Nuxt",href:L,icon:"modules.svg",color:"bg-indigo"},{title:M,subtitle:"Get started with themes",slug:"themes",to:N,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:O,subtitle:"Latest news about Nuxt",slug:"announcements",to:P,icon:"announcements.svg",color:"bg-mint-lighter"},{title:Q,subtitle:"They are Nuxt",slug:"teams",to:R,icon:"teams.svg",color:"bg-mint-light"},{title:S,subtitle:"All the code we have released",slug:"releases",to:T,icon:"releases.svg",color:"bg-mint"},{title:U,subtitle:"They trust us",slug:"sponsors",to:V,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:W}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:W},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:O,to:P},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:U,to:V},{title:Q,to:R},{title:G,to:H},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:D},{title:E,to:F},{title:I,to:J},{title:i,href:j},{title:K,href:L},{title:S,to:T},{title:A,to:B},{title:M,to:N}]}],showCookieBanner:h},"AsideBottom:0":{lastRelease:X,masterCoursesLink:{title:i,subtitle:n,href:j,icon:o,color:p}},"AsideBottom:1":{lastRelease:X,masterCoursesLink:{title:i,subtitle:n,href:j,icon:o,color:p}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev",prev:{slug:"internals-builder",to:"\u002Fdocs\u002Finternals-glossary\u002Finternals-builder",title:"The Builder class"},next:{slug:"nuxt",to:"\u002Fdocs\u002Finternals-glossary\u002Fnuxt",title:"Using Nuxt Programmatically"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fzh\u002Fdocs\u002F6.internals-glossary\u002F8.internals-generator.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",C,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","\n","element","prose-td","prose-code-inline","prose-tr",true,false,"Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-a","prose-th",2,"Learn more with experts","master-courses.svg","bg-green-800","The Generator class","nofollow","noopener","noreferrer","_blank","hooks","Hooks","(generator)","","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));