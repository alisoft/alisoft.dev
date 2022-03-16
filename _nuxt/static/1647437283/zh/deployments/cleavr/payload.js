__NUXT_JSONP__("/zh/deployments/cleavr", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y){return {data:[{page:{key:"content:zh:deployments:cleavr.md",generatedAt:new Date(1647437322886),mtime:new Date(1647437322880),slug:"cleavr",title:m,position:"999999990000",to:"\u002Fdeployments\u002Fcleavr",draft:g,page:j,language:"zh",template:"Guide",description:n,target:"Static & Server",category:"deployment",logo:{light:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002Fcleavr.svg",dark:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002Fcleavr.svg"},empty:g,excerpt:void 0,body:{raw:"---\ntemplate: guide\ntitle: Cleavr\ndescription: How to deploy a Nuxt app with Cleavr?\ntarget: Static & Server\ncategory: deployment\nlogo:\n  light: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002Fcleavr.svg\"\n  dark: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002Fcleavr.svg\"\n---\n# Deploy Nuxt with Cleavr\n\nHow to deploy a Nuxt app with Cleavr?\n\n---\n\n[Cleavr](https:\u002F\u002Fcleavr.io) is a server management console that integrates with multiple VPS (cloud hosting) providers and helps you configure servers to host your Nuxt apps as well as deploys your Nuxt apps in just a couple of clicks.\n\nCleavr includes the following features:\n\n- Provision and configure servers ready to run Nuxt SSR and Static applications\n- Secure servers and provides free SSL certs\n- Deploy code from GitHub, GitLab, and Bitbucket repositories with zero-downtime\n- Auto-installs and configures PM2 (with cluster mode enabled) for Nuxt SSR apps\n- GitHub Actions integration to build app with no additional configuration required\n\n## Prerequisites\n\n- Your Cleavr account is connected to your VPS and version control (e.g. GitHub, GitLab, Bitbucket) providers\n- You have a Nuxt SSR or Static project ready to deploy\n- You have an existing provisioned server\n\n## Step 1: Initial setup\n\nIn Cleavr, navigate to the server to add the new app to and select **Add Site**.\n\nSelect either **Nuxt SSR** or **Nuxt Static** web app type depending on which target you intend to deploy. Fill out the remaining website info and click **Add**.\n\nThis will add the site to your server and configure the server with any missing required environment dependencies.\n\nOnce the site has been successfully added, go to the Web App section and navigate to settings \u003E code repository for the web app that was added.\n\nFill in your version control provider, repository, and branch to deploy fields and then click **Update**.\n\n## Step 2: Deploy\n\nYou're now ready to deploy your web app.\n\nOn the web app's deployment page, click **Deploy**.\n\nThe deployment process will begin and complete in a few moments.\n\n[View the Cleavr documentation for more info.](https:\u002F\u002Fdocs.cleavr.io\u002Fguides\u002Fnuxt)\n",ast:{type:"root",children:[{type:c,tag:"prose-h1",props:{class:"d-heading-title",id:"deploy-nuxt-with-cleavr"},children:[{type:a,value:"Deploy Nuxt with Cleavr"}]},{type:a,value:b},{type:c,tag:d,props:{class:"d-heading-description"},children:[{type:a,value:n}]},{type:a,value:b},{type:c,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:h,props:{href:"https:\u002F\u002Fcleavr.io",rel:[o,p,q],target:r},children:[{type:a,value:m}]},{type:a,value:" is a server management console that integrates with multiple VPS (cloud hosting) providers and helps you configure servers to host your Nuxt apps as well as deploys your Nuxt apps in just a couple of clicks."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Cleavr includes the following features:"}]},{type:a,value:b},{type:c,tag:s,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:a,value:"Provision and configure servers ready to run Nuxt SSR and Static applications"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:a,value:"Secure servers and provides free SSL certs"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:a,value:"Deploy code from GitHub, GitLab, and Bitbucket repositories with zero-downtime"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:a,value:"Auto-installs and configures PM2 (with cluster mode enabled) for Nuxt SSR apps"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:a,value:"GitHub Actions integration to build app with no additional configuration required"},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:l,props:{id:t},children:[{type:c,tag:h,props:{href:"#prerequisites"},children:[{type:a,value:u}]}]},{type:a,value:b},{type:c,tag:s,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:a,value:"Your Cleavr account is connected to your VPS and version control (e.g. GitHub, GitLab, Bitbucket) providers"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:a,value:"You have a Nuxt SSR or Static project ready to deploy"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:a,value:"You have an existing provisioned server"},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:l,props:{id:v},children:[{type:c,tag:h,props:{href:"#step-1-initial-setup"},children:[{type:a,value:w}]}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"In Cleavr, navigate to the server to add the new app to and select "},{type:c,tag:f,props:{},children:[{type:a,value:"Add Site"}]},{type:a,value:k}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Select either "},{type:c,tag:f,props:{},children:[{type:a,value:"Nuxt SSR"}]},{type:a,value:" or "},{type:c,tag:f,props:{},children:[{type:a,value:"Nuxt Static"}]},{type:a,value:" web app type depending on which target you intend to deploy. Fill out the remaining website info and click "},{type:c,tag:f,props:{},children:[{type:a,value:"Add"}]},{type:a,value:k}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"This will add the site to your server and configure the server with any missing required environment dependencies."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Once the site has been successfully added, go to the Web App section and navigate to settings \u003E code repository for the web app that was added."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Fill in your version control provider, repository, and branch to deploy fields and then click "},{type:c,tag:f,props:{},children:[{type:a,value:"Update"}]},{type:a,value:k}]},{type:a,value:b},{type:c,tag:l,props:{id:x},children:[{type:c,tag:h,props:{href:"#step-2-deploy"},children:[{type:a,value:y}]}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"You're now ready to deploy your web app."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"On the web app's deployment page, click "},{type:c,tag:f,props:{},children:[{type:a,value:"Deploy"}]},{type:a,value:k}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"The deployment process will begin and complete in a few moments."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:h,props:{href:"https:\u002F\u002Fdocs.cleavr.io\u002Fguides\u002Fnuxt",rel:[o,p,q],target:r},children:[{type:a,value:"View the Cleavr documentation for more info."}]}]}]},toc:{title:z,searchDepth:i,depth:i,links:[{id:t,depth:i,text:u},{id:v,depth:i,text:w},{id:x,depth:i,text:y}]}}},templateOptions:{header:j,footer:j,aside:g,asideClass:z,fluid:g,banner:j},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:A,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:B,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:C,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:"Docs",subtitle:"Create fast websites easily",slug:"docs",to:D,icon:"docs.svg",color:"bg-green-500"},{title:E,subtitle:"Understand everything in Nuxt",slug:"examples",to:F,icon:"examples.svg",color:"bg-green-600"},{title:G,subtitle:"Learn with concrete cases",slug:"tutorials",to:H,icon:"tutorials.svg",color:"bg-green-700"},{title:I,subtitle:"Learn more with experts",href:J,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:K,subtitle:"How to Deploy Nuxt",slug:"deployments",to:L,icon:"deployments.svg",color:"bg-indigo-light"},{title:M,subtitle:"Extend the power of Nuxt",href:N,icon:"modules.svg",color:"bg-indigo"},{title:O,subtitle:"Get started with themes",slug:"themes",to:P,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:Q,subtitle:"Latest news about Nuxt",slug:"announcements",to:R,icon:"announcements.svg",color:"bg-mint-lighter"},{title:S,subtitle:"They are Nuxt",slug:"teams",to:T,icon:"teams.svg",color:"bg-mint-light"},{title:U,subtitle:"All the code we have released",slug:"releases",to:V,icon:"releases.svg",color:"bg-mint"},{title:W,subtitle:"They trust us",slug:"sponsors",to:X,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:Y}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:Y},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:Q,to:R},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:W,to:X},{title:S,to:T},{title:G,to:H},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:D},{title:E,to:F},{title:K,to:L},{title:I,href:J},{title:M,href:N},{title:U,to:V},{title:A,to:B},{title:O,to:P}]}],showCookieBanner:g},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fzh\u002Fdeployments\u002Fcleavr.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",C,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable"])},mutations:[]}}("text","\n","element","prose-paragraph","prose-li","prose-strong",false,"prose-a",2,true,".","prose-h2","Cleavr","How to deploy a Nuxt app with Cleavr?","nofollow","noopener","noreferrer","_blank","prose-ul","prerequisites","Prerequisites","step-1-initial-setup","Step 1: Initial setup","step-2-deploy","Step 2: Deploy","","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));