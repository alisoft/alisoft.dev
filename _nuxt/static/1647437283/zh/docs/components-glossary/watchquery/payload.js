__NUXT_JSONP__("/zh/docs/components-glossary/watchquery", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al){return {data:[{page:{key:"content:zh:docs:7.components-glossary:10.watchquery.md",generatedAt:new Date(1647437372076),mtime:new Date(1647437372071),slug:"watchquery",title:"The watchQuery Property",position:"999900070010",to:"\u002Fdocs\u002Fcomponents-glossary\u002Fwatchquery",draft:l,page:i,language:"zh",description:x,navigation:{title:"WatchQuery Property"},category:"components-glossary",empty:l,excerpt:void 0,body:{raw:"---\ntitle: 'The watchQuery Property'\ndescription: Watch query strings and execute component methods on change (asyncData, fetch, validate, layout, ...)\nnavigation.title: WatchQuery Property\ncategory: components-glossary\n---\n# The watchQuery property\n\nWatch query strings and execute component methods on change (asyncData, fetch, validate, layout, ...)\n\n---\n\n- **Type:** `Boolean` or `Array` or `Function` (default: `[]`)\n\nUse the `watchQuery` key to set up a watcher for query strings. If the defined strings change, all component methods (asyncData, fetch(context), validate, layout, ...) will be called. Watching is disabled by default to improve performance.\n\nIf you want to set up a watcher for all query strings, set `watchQuery: true`.\n\n```js\nexport default {\n  watchQuery: ['page']\n}\n```\n\nYou can also use the function `watchQuery(newQuery, oldQuery)` to have more refined watchers.\n\n```js\nexport default {\n  watchQuery(newQuery, oldQuery) {\n    \u002F\u002F Only execute component methods if the old query string contained `bar`\n    \u002F\u002F and the new query string contains `foo`\n    return newQuery.foo && oldQuery.bar\n  }\n}\n```\n\n::alert{type=\"warning\"}\n**Warning**: The new `fetch` hook introduced in 2.12 is not affected by `watchQuery`. For more information see [listening to query string changes](\u002Fdocs\u002Ffeatures\u002Fdata-fetching#the-fetch-hook).\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-watchquery-property"},children:[{type:a,value:"The watchQuery property"}]},{type:a,value:e},{type:b,tag:j,props:{class:"d-heading-description"},children:[{type:a,value:x}]},{type:a,value:e},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:e},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:e},{type:b,tag:"prose-li",props:{},children:[{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:"Type:"}]},{type:a,value:h},{type:b,tag:g,props:{},children:[{type:a,value:"Boolean"}]},{type:a,value:z},{type:b,tag:g,props:{},children:[{type:a,value:"Array"}]},{type:a,value:z},{type:b,tag:g,props:{},children:[{type:a,value:"Function"}]},{type:a,value:" (default: "},{type:b,tag:g,props:{},children:[{type:a,value:"[]"}]},{type:a,value:A},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Use the "},{type:b,tag:g,props:{},children:[{type:a,value:q}]},{type:a,value:" key to set up a watcher for query strings. If the defined strings change, all component methods (asyncData, fetch(context), validate, layout, ...) will be called. Watching is disabled by default to improve performance."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"If you want to set up a watcher for all query strings, set "},{type:b,tag:g,props:{},children:[{type:a,value:"watchQuery: true"}]},{type:a,value:m}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,k,n]},children:[{type:a,value:G}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k,n]},children:[{type:a,value:H}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:"\n  watchQuery"},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:":"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"'page'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"]"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"You can also use the function "},{type:b,tag:g,props:{},children:[{type:a,value:"watchQuery(newQuery, oldQuery)"}]},{type:a,value:" to have more refined watchers."}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,k,n]},children:[{type:a,value:G}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k,n]},children:[{type:a,value:H}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"("}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"newQuery"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:","}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"\u002F\u002F Only execute component methods if the old query string contained `bar`"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"\u002F\u002F and the new query string contains `foo`"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,k,"control-flow"]},children:[{type:a,value:"return"}]},{type:a,value:" newQuery"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"foo"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"&&"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"bar"}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:"alert",props:{type:"warning"},children:[{type:b,tag:j,props:{},children:[{type:b,tag:y,props:{},children:[{type:a,value:"Warning"}]},{type:a,value:": The new "},{type:b,tag:g,props:{},children:[{type:a,value:"fetch"}]},{type:a,value:" hook introduced in 2.12 is not affected by "},{type:b,tag:g,props:{},children:[{type:a,value:q}]},{type:a,value:". For more information see "},{type:b,tag:"prose-a",props:{href:"\u002Fdocs\u002Ffeatures\u002Fdata-fetching#the-fetch-hook"},children:[{type:a,value:"listening to query string changes"}]},{type:a,value:m}]}]}]},toc:{title:N,searchDepth:O,depth:O,links:[]}},template:P},templateOptions:{header:i,footer:i,aside:i,asideClass:N,fluid:l,banner:i},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:Q,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:R,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:S,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:P,subtitle:"Create fast websites easily",slug:"docs",to:T,icon:"docs.svg",color:"bg-green-500"},{title:U,subtitle:"Understand everything in Nuxt",slug:"examples",to:V,icon:"examples.svg",color:"bg-green-600"},{title:W,subtitle:"Learn with concrete cases",slug:"tutorials",to:X,icon:"tutorials.svg",color:"bg-green-700"},{title:o,subtitle:u,href:p,icon:v,color:w}]},{title:"Explore",items:[{title:Y,subtitle:"How to Deploy Nuxt",slug:"deployments",to:Z,icon:"deployments.svg",color:"bg-indigo-light"},{title:_,subtitle:"Extend the power of Nuxt",href:$,icon:"modules.svg",color:"bg-indigo"},{title:aa,subtitle:"Get started with themes",slug:"themes",to:ab,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:ac,subtitle:"Latest news about Nuxt",slug:"announcements",to:ad,icon:"announcements.svg",color:"bg-mint-lighter"},{title:ae,subtitle:"They are Nuxt",slug:"teams",to:af,icon:"teams.svg",color:"bg-mint-light"},{title:ag,subtitle:"All the code we have released",slug:"releases",to:ah,icon:"releases.svg",color:"bg-mint"},{title:ai,subtitle:"They trust us",slug:"sponsors",to:aj,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:ak}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:ak},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:ac,to:ad},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:ai,to:aj},{title:ae,to:af},{title:W,to:X},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:T},{title:U,to:V},{title:Y,to:Z},{title:o,href:p},{title:_,href:$},{title:ag,to:ah},{title:Q,to:R},{title:aa,to:ab}]}],showCookieBanner:l},"AsideBottom:0":{lastRelease:al,masterCoursesLink:{title:o,subtitle:u,href:p,icon:v,color:w}},"AsideBottom:1":{lastRelease:al,masterCoursesLink:{title:o,subtitle:u,href:p,icon:v,color:w}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev",prev:{slug:"validate",to:"\u002Fdocs\u002Fcomponents-glossary\u002Fvalidate",title:"The validate Method"},next:{slug:"pentest-tools",to:"\u002Fcase-studies\u002Fpentest-tools",title:"Pentest Tools"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fzh\u002Fdocs\u002F7.components-glossary\u002F10.watchquery.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",S,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","span","token","\n","punctuation","prose-code-inline"," ",true,"prose-paragraph","keyword",false,".","module","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","watchQuery","{","}","\n    ","Learn more with experts","master-courses.svg","bg-green-800","Watch query strings and execute component methods on change (asyncData, fetch, validate, layout, ...)","prose-strong"," or ",")","prose-code","pre","language-js","line-numbers","code","export","default","operator","\n  "," oldQuery","comment","property-access","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));