__NUXT_JSONP__("/zh/deployments/google-appengine", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at){return {data:[{page:{key:"content:zh:deployments:google-appengine.md",generatedAt:new Date(1647583538857),mtime:new Date(1647583538850),slug:"google-appengine",title:r,position:"999999990000",to:"\u002Fdeployments\u002Fgoogle-appengine",draft:n,page:o,language:"zh",template:"Guide",description:D,target:"Server",category:"deployment",logo:{light:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002FGoogle_engine_app.svg",dark:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002FGoogle_engine_app.svg"},empty:n,excerpt:void 0,body:{raw:"---\ntemplate: guide\ntitle: Google App Engine\ndescription: How to deploy Nuxt on Google App Engine?\ntarget: Server\ncategory: deployment\nlogo:\n  light: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002FGoogle_engine_app.svg\"\n  dark: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002FGoogle_engine_app.svg\"\n---\n# Deploy Nuxt on Google App Engine\n\nHow to deploy Nuxt on Google App Engine?\n\n---\n\nDeploying to [Google App Engine](https:\u002F\u002Fcloud.google.com\u002Fappengine\u002F) is a fast and easy solution for hosting your universal Nuxt application on Google's Cloud Services.\n\nIn this guide, we build the application locally and then simply upload the entire project folder to Google App Engine. After the upload, Google App Engine will automatically start the `start` script in our package.json and your app will be available immediately.\n\n## Getting Started\n\nMake sure you have a Google Cloud Account, a project and an empty Google App Engine app set up on [Google App Engine](https:\u002F\u002Fcloud.google.com\u002Fappengine\u002F). Furthermore, make sure to download and install the Cloud SDK (CLI) from Google as explained [here](https:\u002F\u002Fcloud.google.com\u002Fsdk\u002F) and log into your Google Cloud Account.\n\n## Configure your application\n\nAll you need to add to your universal Nuxt app for deploying it to the App Engine is a file called `app.yaml`. Create a new file with that name in your root project directory and add the following content:\n\n```yaml\nruntime: nodejs10\n\ninstance_class: F2\n\nhandlers:\n  - url: \u002F_nuxt\n    static_dir: .nuxt\u002Fdist\u002Fclient\n    secure: always\n\n  - url: \u002F(.*\\.(gif|png|jpg|ico|txt))$\n    static_files: static\u002F\\1\n    upload: static\u002F.*\\.(gif|png|jpg|ico|txt)$\n    secure: always\n\n  - url: \u002F.*\n    script: auto\n    secure: always\n\nenv_variables:\n  HOST: '0.0.0.0'\n```\n\nor for flexible environment the minimal configuration is:\n\n```yaml\nruntime: nodejs\nenv: flex\n```\n\n## Build and deploy the app\n\nNow build your app with `npm run build` or `yarn build`.\n\nAt this point, your app is ready to be uploaded to Google App Engine. Now just run the following command:\n\n```\ngcloud app deploy app.yaml --project [project-id]\n```\n\nVoilà! Your Nuxt application is now hosted on Google App Engine!\n\n## Further Information\n\n- The `instance_class` attribute in your app.yaml file sets the class of your app instance. Instance F2 is not completely free, but has the minimum memory needed to run a Nuxt application.\n- Make sure `start` in package.json is the command that you want to run after deployment. If you usually run by `start:prod` or some other command, your app will not work as expected.\n\nMake sure to put the `project-id` and not the `project-name` in the deploy command. These are two different things but easy to mix up.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"deploy-nuxt-on-google-app-engine"},children:[{type:a,value:"Deploy Nuxt on Google App Engine"}]},{type:a,value:e},{type:b,tag:j,props:{class:"d-heading-description"},children:[{type:a,value:D}]},{type:a,value:e},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Deploying to "},{type:b,tag:l,props:{href:E,rel:[s,t,u],target:v},children:[{type:a,value:r}]},{type:a,value:" is a fast and easy solution for hosting your universal Nuxt application on Google's Cloud Services."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"In this guide, we build the application locally and then simply upload the entire project folder to Google App Engine. After the upload, Google App Engine will automatically start the "},{type:b,tag:k,props:{},children:[{type:a,value:F}]},{type:a,value:" script in our package.json and your app will be available immediately."}]},{type:a,value:e},{type:b,tag:p,props:{id:G},children:[{type:b,tag:l,props:{href:"#getting-started"},children:[{type:a,value:H}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Make sure you have a Google Cloud Account, a project and an empty Google App Engine app set up on "},{type:b,tag:l,props:{href:E,rel:[s,t,u],target:v},children:[{type:a,value:r}]},{type:a,value:". Furthermore, make sure to download and install the Cloud SDK (CLI) from Google as explained "},{type:b,tag:l,props:{href:"https:\u002F\u002Fcloud.google.com\u002Fsdk\u002F",rel:[s,t,u],target:v},children:[{type:a,value:"here"}]},{type:a,value:" and log into your Google Cloud Account."}]},{type:a,value:e},{type:b,tag:p,props:{id:I},children:[{type:b,tag:l,props:{href:"#configure-your-application"},children:[{type:a,value:J}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"All you need to add to your universal Nuxt app for deploying it to the App Engine is a file called "},{type:b,tag:k,props:{},children:[{type:a,value:"app.yaml"}]},{type:a,value:". Create a new file with that name in your root project directory and add the following content:"}]},{type:a,value:e},{type:b,tag:w,props:{},children:[{type:b,tag:x,props:{className:[y,K]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:" nodejs10\n\n"},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:" F2\n\n"},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:"handlers"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:" \u002F_nuxt\n    "},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:"static_dir"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:" .nuxt\u002Fdist\u002Fclient\n    "},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:" \u002F(."},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"*\\.(gif|png|jpg|ico|txt))$"}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:"static_files"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:" static\u002F\\1\n    "},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:"upload"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:" static\u002F."},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"*\\.(gif|png|jpg|ico|txt)$"}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:" \u002F.*\n    "},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:"script"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:" auto\n    "},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:" always\n\n"},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:"env_variables"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:"HOST"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"'0.0.0.0'"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"or for flexible environment the minimal configuration is:"}]},{type:a,value:e},{type:b,tag:w,props:{},children:[{type:b,tag:x,props:{className:[y,K]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:" nodejs\n"},{type:b,tag:c,props:{className:[d,g,h]},children:[{type:a,value:"env"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:" flex\n"}]}]}]},{type:a,value:e},{type:b,tag:p,props:{id:R},children:[{type:b,tag:l,props:{href:"#build-and-deploy-the-app"},children:[{type:a,value:S}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Now build your app with "},{type:b,tag:k,props:{},children:[{type:a,value:"npm run build"}]},{type:a,value:" or "},{type:b,tag:k,props:{},children:[{type:a,value:"yarn build"}]},{type:a,value:"."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"At this point, your app is ready to be uploaded to Google App Engine. Now just run the following command:"}]},{type:a,value:e},{type:b,tag:w,props:{},children:[{type:b,tag:x,props:{className:[y,"language-text"]},children:[{type:b,tag:z,props:{},children:[{type:a,value:"gcloud app deploy app.yaml --project [project-id]\n"}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Voilà! Your Nuxt application is now hosted on Google App Engine!"}]},{type:a,value:e},{type:b,tag:p,props:{id:T},children:[{type:b,tag:l,props:{href:"#further-information"},children:[{type:a,value:U}]}]},{type:a,value:e},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:e},{type:b,tag:V,props:{},children:[{type:a,value:e},{type:a,value:"The "},{type:b,tag:k,props:{},children:[{type:a,value:M}]},{type:a,value:" attribute in your app.yaml file sets the class of your app instance. Instance F2 is not completely free, but has the minimum memory needed to run a Nuxt application."},{type:a,value:e}]},{type:a,value:e},{type:b,tag:V,props:{},children:[{type:a,value:e},{type:a,value:"Make sure "},{type:b,tag:k,props:{},children:[{type:a,value:F}]},{type:a,value:" in package.json is the command that you want to run after deployment. If you usually run by "},{type:b,tag:k,props:{},children:[{type:a,value:"start:prod"}]},{type:a,value:" or some other command, your app will not work as expected."},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Make sure to put the "},{type:b,tag:k,props:{},children:[{type:a,value:"project-id"}]},{type:a,value:" and not the "},{type:b,tag:k,props:{},children:[{type:a,value:"project-name"}]},{type:a,value:" in the deploy command. These are two different things but easy to mix up."}]}]},toc:{title:W,searchDepth:m,depth:m,links:[{id:G,depth:m,text:H},{id:I,depth:m,text:J},{id:R,depth:m,text:S},{id:T,depth:m,text:U}]}}},templateOptions:{header:o,footer:o,aside:n,asideClass:W,fluid:n,banner:o},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:X,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:Y,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:Z,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:"Docs",subtitle:"Create fast websites easily",slug:"docs",to:_,icon:"docs.svg",color:"bg-green-500"},{title:$,subtitle:"Understand everything in Nuxt",slug:"examples",to:aa,icon:"examples.svg",color:"bg-green-600"},{title:ab,subtitle:"Learn with concrete cases",slug:"tutorials",to:ac,icon:"tutorials.svg",color:"bg-green-700"},{title:ad,subtitle:"Learn more with experts",href:ae,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:af,subtitle:"How to Deploy Nuxt",slug:"deployments",to:ag,icon:"deployments.svg",color:"bg-indigo-light"},{title:ah,subtitle:"Extend the power of Nuxt",href:ai,icon:"modules.svg",color:"bg-indigo"},{title:aj,subtitle:"Get started with themes",slug:"themes",to:ak,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:al,subtitle:"Latest news about Nuxt",slug:"announcements",to:am,icon:"announcements.svg",color:"bg-mint-lighter"},{title:an,subtitle:"They are Nuxt",slug:"teams",to:ao,icon:"teams.svg",color:"bg-mint-light"},{title:ap,subtitle:"All the code we have released",slug:"releases",to:aq,icon:"releases.svg",color:"bg-mint"},{title:ar,subtitle:"They trust us",slug:"sponsors",to:as,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:at}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:at},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:al,to:am},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:ar,to:as},{title:an,to:ao},{title:ab,to:ac},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:_},{title:$,to:aa},{title:af,to:ag},{title:ad,href:ae},{title:ah,href:ai},{title:ap,to:aq},{title:X,to:Y},{title:aj,to:ak}]}],showCookieBanner:n},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fzh\u002Fdeployments\u002Fgoogle-appengine.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",Z,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable"])},mutations:[]}}("text","element","span","token","\n","punctuation","key","atrule",":","prose-paragraph","prose-code-inline","prose-a",2,false,true,"prose-h2"," ","Google App Engine","nofollow","noopener","noreferrer","_blank","prose-code","pre","line-numbers","code","-","url","secure","How to deploy Nuxt on Google App Engine?","https:\u002F\u002Fcloud.google.com\u002Fappengine\u002F","start","getting-started","Getting Started","configure-your-application","Configure your application","language-yaml","runtime","instance_class","\n  "," always\n\n  ","important","\n    ","build-and-deploy-the-app","Build and deploy the app","further-information","Further Information","prose-li","","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));