__NUXT_JSONP__("/docs/directory-structure/nuxt", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah){return {data:[{page:{key:"content:en:docs:4.directory-structure:1.nuxt.md",generatedAt:new Date(1647437369101),mtime:new Date(1647437369093),slug:"nuxt",title:v,position:"999900040001",to:"\u002Fdocs\u002Fdirectory-structure\u002Fnuxt",draft:j,page:h,language:"en",description:"The .nuxt directory is the so-called \"build directory\". It is dynamically generated and hidden by default. Inside the directory you can find automatically generated files when using nuxt dev or your build artifacts when using nuxt build.",navigation:{title:i},category:"directory-structure",empty:j,excerpt:void 0,body:{raw:"---\ntitle: Nuxt build directory\ndescription: The .nuxt directory is the so-called \"build directory\". It is dynamically generated and hidden by default. Inside the directory you can find automatically generated files when using nuxt dev or your build artifacts when using nuxt build.\nnavigation.title: .nuxt\ncategory: directory-structure\n---\n\n# Nuxt build directory\n\nThe `.nuxt` directory is the so-called _build directory_. It is dynamically generated and hidden by default. Inside the directory you can find automatically generated files when using `nuxt dev` or your build artifacts when using `nuxt build`. Modifying these files is great for debugging but remember that they are generated files and once you run the `dev` or `build` command again, anything that was saved here will be regenerated.\n\n---\n\n::alert{type=\"warning\"}\nThe `.nuxt` directory should not be committed to your version control system and should be ignored through your `.gitignore` as it will be generated automatically when executing `nuxt dev` or `nuxt build`.\n::\n\n### The buildDir Property\n\nBy default, many tools assume that `.nuxt` is a hidden directory, because its name starts with a dot. You can use the buildDir option to prevent that. If you do change the name remember to add the new name to your `.gitignore` file.\n\n```js{}[nuxt.config.js]\nexport default {\n  buildDir: 'nuxt-dist'\n}\n```\n\n### Inside the .nuxt folder:\n\n- The router.js file is the generated router file that Nuxt generates for you when you put `.vue` files inside the pages folder. You can use this file for debugging for when you want to look up which routes are generated for vue-router and find out the names of a specific route.\n- The router.scrollBehavior.js which is your Router ScrollBehavior\n- The Components folder has all your Nuxt components such as NuxtChild and NuxtLink. It also contains the nuxt-build-indicator which is the page we see when your application is building and nuxt-loading which is your loading component that gets seen when we are waiting for your page to load. You will also find the nuxt-error page in here which contains the Nuxt default error page.\n- The mixins folder has the files needed for the Nuxt `$fetch` method.\n- The views folder contains your app template and your server error page.\n- The app.js is your main application file.\n- The client.js file is your client file needed for everything that happens client side.\n- The empty file is intentionally left empty for no-op aliases\n- The index.js file bootstraps your application.\n- The loading.html is the file that is used when the page is loading.\n- The middleware file is where your middleware is kept\n- The server.js file is all the code that is ran on the server\n- the utilities contains the utilities that Nuxt needs for it to work.\n\n### Deploying\n\nThe `.nuxt` folder is part of the files needed to deploy your SSR application. It is not needed for deploying your static Nuxt app though because we use the `dist` folder for that.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"nuxt-build-directory"},children:[{type:a,value:v}]},{type:a,value:c},{type:b,tag:k,props:{class:"d-heading-description"},children:[{type:a,value:n},{type:b,tag:d,props:{},children:[{type:a,value:i}]},{type:a,value:" directory is the so-called "},{type:b,tag:"prose-em",props:{},children:[{type:a,value:"build directory"}]},{type:a,value:". It is dynamically generated and hidden by default. Inside the directory you can find automatically generated files when using "},{type:b,tag:d,props:{},children:[{type:a,value:w}]},{type:a,value:" or your build artifacts when using "},{type:b,tag:d,props:{},children:[{type:a,value:x}]},{type:a,value:". Modifying these files is great for debugging but remember that they are generated files and once you run the "},{type:b,tag:d,props:{},children:[{type:a,value:"dev"}]},{type:a,value:y},{type:b,tag:d,props:{},children:[{type:a,value:"build"}]},{type:a,value:" command again, anything that was saved here will be regenerated."}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:"alert",props:{type:"warning"},children:[{type:b,tag:k,props:{},children:[{type:a,value:n},{type:b,tag:d,props:{},children:[{type:a,value:i}]},{type:a,value:" directory should not be committed to your version control system and should be ignored through your "},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:" as it will be generated automatically when executing "},{type:b,tag:d,props:{},children:[{type:a,value:w}]},{type:a,value:y},{type:b,tag:d,props:{},children:[{type:a,value:x}]},{type:a,value:"."}]}]},{type:a,value:c},{type:b,tag:o,props:{id:A},children:[{type:b,tag:p,props:{href:"#the-builddir-property"},children:[{type:a,value:B}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"By default, many tools assume that "},{type:b,tag:d,props:{},children:[{type:a,value:i}]},{type:a,value:" is a hidden directory, because its name starts with a dot. You can use the buildDir option to prevent that. If you do change the name remember to add the new name to your "},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:" file."}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:f,props:{className:["filename"]},children:[{type:a,value:"nuxt.config.js"}]},{type:b,tag:"pre",props:{className:["language-js","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:f,props:{className:[g,C,D]},children:[{type:a,value:"export"}]},{type:a,value:q},{type:b,tag:f,props:{className:[g,C,D]},children:[{type:a,value:"default"}]},{type:a,value:q},{type:b,tag:f,props:{className:[g,E]},children:[{type:a,value:"{"}]},{type:a,value:"\n  buildDir"},{type:b,tag:f,props:{className:[g,"operator"]},children:[{type:a,value:":"}]},{type:a,value:q},{type:b,tag:f,props:{className:[g,"string"]},children:[{type:a,value:"'nuxt-dist'"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g,E]},children:[{type:a,value:"}"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:o,props:{id:F},children:[{type:b,tag:p,props:{href:"#inside-the-nuxt-folder"},children:[{type:a,value:G}]}]},{type:a,value:c},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:a,value:"The router.js file is the generated router file that Nuxt generates for you when you put "},{type:b,tag:d,props:{},children:[{type:a,value:".vue"}]},{type:a,value:" files inside the pages folder. You can use this file for debugging for when you want to look up which routes are generated for vue-router and find out the names of a specific route."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:a,value:"The router.scrollBehavior.js which is your Router ScrollBehavior"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:a,value:"The Components folder has all your Nuxt components such as NuxtChild and NuxtLink. It also contains the nuxt-build-indicator which is the page we see when your application is building and nuxt-loading which is your loading component that gets seen when we are waiting for your page to load. You will also find the nuxt-error page in here which contains the Nuxt default error page."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:a,value:"The mixins folder has the files needed for the Nuxt "},{type:b,tag:d,props:{},children:[{type:a,value:"$fetch"}]},{type:a,value:" method."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:a,value:"The views folder contains your app template and your server error page."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:a,value:"The app.js is your main application file."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:a,value:"The client.js file is your client file needed for everything that happens client side."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:a,value:"The empty file is intentionally left empty for no-op aliases"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:a,value:"The index.js file bootstraps your application."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:a,value:"The loading.html is the file that is used when the page is loading."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:a,value:"The middleware file is where your middleware is kept"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:a,value:"The server.js file is all the code that is ran on the server"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:a,value:"the utilities contains the utilities that Nuxt needs for it to work."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:H},children:[{type:b,tag:p,props:{href:"#deploying"},children:[{type:a,value:I}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:n},{type:b,tag:d,props:{},children:[{type:a,value:i}]},{type:a,value:" folder is part of the files needed to deploy your SSR application. It is not needed for deploying your static Nuxt app though because we use the "},{type:b,tag:d,props:{},children:[{type:a,value:"dist"}]},{type:a,value:" folder for that."}]}]},toc:{title:J,searchDepth:K,depth:K,links:[{id:A,depth:r,text:B},{id:F,depth:r,text:G},{id:H,depth:r,text:I}]}},template:L},templateOptions:{header:h,footer:h,aside:h,asideClass:J,fluid:j,banner:h},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:M,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:N,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:O,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:L,subtitle:"Create fast websites easily",slug:"docs",to:P,icon:"docs.svg",color:"bg-green-500"},{title:Q,subtitle:"Understand everything in Nuxt",slug:"examples",to:R,icon:"examples.svg",color:"bg-green-600"},{title:S,subtitle:"Learn with concrete cases",slug:"tutorials",to:T,icon:"tutorials.svg",color:"bg-green-700"},{title:l,subtitle:s,href:m,icon:t,color:u}]},{title:"Explore",items:[{title:U,subtitle:"How to Deploy Nuxt",slug:"deployments",to:V,icon:"deployments.svg",color:"bg-indigo-light"},{title:W,subtitle:"Extend the power of Nuxt",href:X,icon:"modules.svg",color:"bg-indigo"},{title:Y,subtitle:"Get started with themes",slug:"themes",to:Z,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:_,subtitle:"Latest news about Nuxt",slug:"announcements",to:$,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aa,subtitle:"They are Nuxt",slug:"teams",to:ab,icon:"teams.svg",color:"bg-mint-light"},{title:ac,subtitle:"All the code we have released",slug:"releases",to:ad,icon:"releases.svg",color:"bg-mint"},{title:ae,subtitle:"They trust us",slug:"sponsors",to:af,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:ag}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:ag},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:_,to:$},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:ae,to:af},{title:aa,to:ab},{title:S,to:T},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:P},{title:Q,to:R},{title:U,to:V},{title:l,href:m},{title:W,href:X},{title:ac,to:ad},{title:M,to:N},{title:Y,to:Z}]}],showCookieBanner:j},"AsideBottom:0":{lastRelease:ah,masterCoursesLink:{title:l,subtitle:s,href:m,icon:t,color:u}},"AsideBottom:1":{lastRelease:ah,masterCoursesLink:{title:l,subtitle:s,href:m,icon:t,color:u}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev",prev:{slug:"introducing-smart-prefetching",to:"\u002Fannouncements\u002Fintroducing-smart-prefetching",title:"Introducing Smart Prefetching"},next:{slug:"transitions",to:"\u002Fexamples\u002Ftransitions\u002Ftransitions",title:"Nuxt transitions"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fen\u002Fdocs\u002F4.directory-structure\u002F1.nuxt.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",O,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","\n","prose-code-inline","prose-li","span","token",true,".nuxt",false,"prose-paragraph","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","The ","prose-h3","prose-a"," ",3,"Learn more with experts","master-courses.svg","bg-green-800","Nuxt build directory","nuxt dev","nuxt build"," or ",".gitignore","the-builddir-property","The buildDir Property","keyword","module","punctuation","inside-the-nuxt-folder","Inside the .nuxt folder:","deploying","Deploying","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));