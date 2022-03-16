__NUXT_JSONP__("/deployments/21yunbox", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae){return {data:[{page:{key:"content:en:deployments:21yunbox.md",generatedAt:new Date(1647437334614),mtime:new Date(1647437334594),slug:"21yunbox",title:s,position:"999999990000",to:"\u002Fdeployments\u002F21yunbox",draft:m,page:o,language:"en",template:"Guide",description:t,target:"Static",category:"deployment",logo:{light:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002FYunbox.svg",dark:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002FYunbox.svg"},empty:m,excerpt:void 0,body:{raw:"---\ntemplate: guide\ntitle: 21YunBox\ndescription: \"How to deploy Nuxt on 21YunBox?\"\ntarget: Static\ncategory: deployment\nlogo:\n  light: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002FYunbox.svg\"\n  dark: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002FYunbox.svg\"\n---\n# Deploy Nuxt on 21YunBox\n\nHow to deploy Nuxt on 21YunBox?\n\n---\n\n[21YunBox](https:\u002F\u002Fwww.21yunbox.com) provides blazing fast Chinese CDN, continuous deployment, one-click HTTPS and [other services like managed databases and backend web services](https:\u002F\u002Fwww.21yunbox.com\u002Fdocs\u002F), providing an avenue to launch web projects in China.\n\n21YunBox includes the following features:\n\n- Continuous, automatic builds & deploys from GitHub and Gitee\n- Automatic SSL certificates through [Let's Encrypt](https:\u002F\u002Fletsencrypt.org)\n- Instant cache invalidation with a blazing fast, Chinese CDN\n- Unlimited [custom domains](https:\u002F\u002Fwww.21yunbox.com\u002Fdocs\u002F#\u002Fcustom-domains)\n- Automatic [Brotli compression](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FBrotli) for faster sites\n- Native HTTP\u002F2 support\n- Automatic HTTP → HTTPS redirects\n- Custom URL redirects and rewrites\n\n## Prerequisites\n\nThis guide assumes you already have a Nuxt project to deploy. If you need a project, use the [create-nuxt-app](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcreate-nuxt-app) to get started or fork 21YunBox's [Nuxt Example](https:\u002F\u002Fgitee.com\u002Feryiyunbox-examples\u002Fnuxtjs) before continuing.\n\n## Setup\n\nYou can set up a Nuxt site on 21YunBox in two quick steps:\n\n1. Create a new web service on 21YunBox, and give 21YunBox permission to access your GitHub or Gitee repo.\n2. Use the following values during creation:\n\n   |                       |                                                     |\n   | --------------------- | --------------------------------------------------- |\n   | **Environment**       | `Static Site`                                       |\n   | **Build Command**     | `yarn && yarn generate` (or your own build command) |\n   | **Publish Directory** | `.\u002Fdist` (or your own output directory)             |\n\nThat's it! Your site will be live on your 21YunBox URL (which looks like `yoursite.21yunbox.com`) as soon as the build is done.\n\n## Continuous deploys\n\nNow that 21YunBox is connected to your repo, it will automatically build and publish your site any time you push to GitHub.\n\n## 21YunBox CDN and cache invalidation\n\n21YunBox hosts your site on a Chinese, blazing fast CDN which ensures the fastest possible download times for all your users across China.\n\nEvery deploy automatically and instantly invalidates the CDN cache, so your users can always access the latest content on your site.\n\n## Custom domains\n\nAdd your own domains to your site easily using 21YunBox's [custom domains](https:\u002F\u002Fwww.21yunbox.com\u002Fdocs\u002F#\u002Fcustom-domains) guide.\n",ast:{type:"root",children:[{type:c,tag:"prose-h1",props:{class:"d-heading-title",id:"deploy-nuxt-on-21yunbox"},children:[{type:a,value:"Deploy Nuxt on 21YunBox"}]},{type:a,value:b},{type:c,tag:e,props:{class:"d-heading-description"},children:[{type:a,value:t}]},{type:a,value:b},{type:c,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:c,tag:d,props:{href:"https:\u002F\u002Fwww.21yunbox.com",rel:[g,h,i],target:j},children:[{type:a,value:s}]},{type:a,value:" provides blazing fast Chinese CDN, continuous deployment, one-click HTTPS and "},{type:c,tag:d,props:{href:"https:\u002F\u002Fwww.21yunbox.com\u002Fdocs\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"other services like managed databases and backend web services"}]},{type:a,value:", providing an avenue to launch web projects in China."}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"21YunBox includes the following features:"}]},{type:a,value:b},{type:c,tag:"prose-ul",props:{},children:[{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:a,value:"Continuous, automatic builds & deploys from GitHub and Gitee"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:a,value:"Automatic SSL certificates through "},{type:c,tag:d,props:{href:"https:\u002F\u002Fletsencrypt.org",rel:[g,h,i],target:j},children:[{type:a,value:"Let's Encrypt"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:a,value:"Instant cache invalidation with a blazing fast, Chinese CDN"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:a,value:"Unlimited "},{type:c,tag:d,props:{href:u,rel:[g,h,i],target:j},children:[{type:a,value:v}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:a,value:"Automatic "},{type:c,tag:d,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FBrotli",rel:[g,h,i],target:j},children:[{type:a,value:"Brotli compression"}]},{type:a,value:" for faster sites"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:a,value:"Native HTTP\u002F2 support"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:a,value:"Automatic HTTP → HTTPS redirects"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:a,value:"Custom URL redirects and rewrites"},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:n,props:{id:w},children:[{type:c,tag:d,props:{href:"#prerequisites"},children:[{type:a,value:x}]}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"This guide assumes you already have a Nuxt project to deploy. If you need a project, use the "},{type:c,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcreate-nuxt-app",rel:[g,h,i],target:j},children:[{type:a,value:"create-nuxt-app"}]},{type:a,value:" to get started or fork 21YunBox's "},{type:c,tag:d,props:{href:"https:\u002F\u002Fgitee.com\u002Feryiyunbox-examples\u002Fnuxtjs",rel:[g,h,i],target:j},children:[{type:a,value:"Nuxt Example"}]},{type:a,value:" before continuing."}]},{type:a,value:b},{type:c,tag:n,props:{id:y},children:[{type:c,tag:d,props:{href:"#setup"},children:[{type:a,value:z}]}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"You can set up a Nuxt site on 21YunBox in two quick steps:"}]},{type:a,value:b},{type:c,tag:"prose-ol",props:{},children:[{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:a,value:"Create a new web service on 21YunBox, and give 21YunBox permission to access your GitHub or Gitee repo."},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:a,value:"Use the following values during creation:"},{type:a,value:b},{type:c,tag:"prose-table",props:{},children:[{type:a,value:b},{type:c,tag:"prose-thead",props:{},children:[{type:a,value:b},{type:c,tag:p,props:{},children:[{type:a,value:b},{type:c,tag:A,props:{},children:[]},{type:a,value:b},{type:c,tag:A,props:{},children:[]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:"prose-tbody",props:{},children:[{type:a,value:b},{type:c,tag:p,props:{},children:[{type:a,value:b},{type:c,tag:l,props:{},children:[{type:c,tag:r,props:{},children:[{type:a,value:"Environment"}]}]},{type:a,value:b},{type:c,tag:l,props:{},children:[{type:c,tag:q,props:{},children:[{type:a,value:"Static Site"}]}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:p,props:{},children:[{type:a,value:b},{type:c,tag:l,props:{},children:[{type:c,tag:r,props:{},children:[{type:a,value:"Build Command"}]}]},{type:a,value:b},{type:c,tag:l,props:{},children:[{type:c,tag:q,props:{},children:[{type:a,value:"yarn && yarn generate"}]},{type:a,value:" (or your own build command)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:p,props:{},children:[{type:a,value:b},{type:c,tag:l,props:{},children:[{type:c,tag:r,props:{},children:[{type:a,value:"Publish Directory"}]}]},{type:a,value:b},{type:c,tag:l,props:{},children:[{type:c,tag:q,props:{},children:[{type:a,value:".\u002Fdist"}]},{type:a,value:" (or your own output directory)"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"That's it! Your site will be live on your 21YunBox URL (which looks like "},{type:c,tag:q,props:{},children:[{type:a,value:"yoursite.21yunbox.com"}]},{type:a,value:") as soon as the build is done."}]},{type:a,value:b},{type:c,tag:n,props:{id:B},children:[{type:c,tag:d,props:{href:"#continuous-deploys"},children:[{type:a,value:C}]}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"Now that 21YunBox is connected to your repo, it will automatically build and publish your site any time you push to GitHub."}]},{type:a,value:b},{type:c,tag:n,props:{id:D},children:[{type:c,tag:d,props:{href:"#21yunbox-cdn-and-cache-invalidation"},children:[{type:a,value:E}]}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"21YunBox hosts your site on a Chinese, blazing fast CDN which ensures the fastest possible download times for all your users across China."}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"Every deploy automatically and instantly invalidates the CDN cache, so your users can always access the latest content on your site."}]},{type:a,value:b},{type:c,tag:n,props:{id:F},children:[{type:c,tag:d,props:{href:"#custom-domains"},children:[{type:a,value:G}]}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"Add your own domains to your site easily using 21YunBox's "},{type:c,tag:d,props:{href:u,rel:[g,h,i],target:j},children:[{type:a,value:v}]},{type:a,value:" guide."}]}]},toc:{title:H,searchDepth:k,depth:k,links:[{id:w,depth:k,text:x},{id:y,depth:k,text:z},{id:B,depth:k,text:C},{id:D,depth:k,text:E},{id:F,depth:k,text:G}]}}},templateOptions:{header:o,footer:o,aside:m,asideClass:H,fluid:m,banner:o},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:I,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:J,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:K,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:"Docs",subtitle:"Create fast websites easily",slug:"docs",to:L,icon:"docs.svg",color:"bg-green-500"},{title:M,subtitle:"Understand everything in Nuxt",slug:"examples",to:N,icon:"examples.svg",color:"bg-green-600"},{title:O,subtitle:"Learn with concrete cases",slug:"tutorials",to:P,icon:"tutorials.svg",color:"bg-green-700"},{title:Q,subtitle:"Learn more with experts",href:R,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:S,subtitle:"How to Deploy Nuxt",slug:"deployments",to:T,icon:"deployments.svg",color:"bg-indigo-light"},{title:U,subtitle:"Extend the power of Nuxt",href:V,icon:"modules.svg",color:"bg-indigo"},{title:W,subtitle:"Get started with themes",slug:"themes",to:X,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:Y,subtitle:"Latest news about Nuxt",slug:"announcements",to:Z,icon:"announcements.svg",color:"bg-mint-lighter"},{title:_,subtitle:"They are Nuxt",slug:"teams",to:$,icon:"teams.svg",color:"bg-mint-light"},{title:aa,subtitle:"All the code we have released",slug:"releases",to:ab,icon:"releases.svg",color:"bg-mint"},{title:ac,subtitle:"They trust us",slug:"sponsors",to:ad,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:ae}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:ae},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:Y,to:Z},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:ac,to:ad},{title:_,to:$},{title:O,to:P},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:L},{title:M,to:N},{title:S,to:T},{title:Q,href:R},{title:U,href:V},{title:aa,to:ab},{title:I,to:J},{title:W,to:X}]}],showCookieBanner:m},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fen\u002Fdeployments\u002F21yunbox.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",K,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link"])},mutations:[]}}("text","\n","element","prose-a","prose-paragraph","prose-li","nofollow","noopener","noreferrer","_blank",2,"prose-td",false,"prose-h2",true,"prose-tr","prose-code-inline","prose-strong","21YunBox","How to deploy Nuxt on 21YunBox?","https:\u002F\u002Fwww.21yunbox.com\u002Fdocs\u002F#\u002Fcustom-domains","custom domains","prerequisites","Prerequisites","setup","Setup","prose-th","continuous-deploys","Continuous deploys","21yunbox-cdn-and-cache-invalidation","21YunBox CDN and cache invalidation","custom-domains","Custom domains","","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));