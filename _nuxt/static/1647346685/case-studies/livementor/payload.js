__NUXT_JSONP__("/case-studies/livementor", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X){return {data:[{page:{key:"content:en:case-studies:1.livementor.md",generatedAt:new Date(1647346793942),mtime:new Date(1647346793932),slug:"livementor",title:"LiveMentor",position:"999900010000",to:"\u002Fcase-studies\u002Flivementor",draft:h,page:i,language:"en",template:"Post",description:"LiveMentor is one of the world's leading education companies focused on entrepreneurship. They decided to migrate their existing front-end to Nuxt. We met with Romain and Alexandre to talk about their journey.",imgUrl:"img\u002Fcase-studies\u002Flivementor\u002Fcover.png",headingImg:{hidden:i},empty:h,excerpt:void 0,body:{raw:"---\ntemplate: post\ntitle: LiveMentor\ndescription: LiveMentor is one of the world's leading education companies focused on entrepreneurship. They decided to migrate their existing front-end to Nuxt. We met with Romain and Alexandre to talk about their journey.\nimgUrl: img\u002Fcase-studies\u002Flivementor\u002Fcover.png\nheadingImg:\n  hidden: true\n---\n\n![Livementor dashboard](img\u002Fcase-studies\u002Flivementor\u002Fmockup-m1-3.png){width=736 height=404}\n\n## What is LiveMentor?\n\nLiveMentor is one of the world's leading education companies focused on entrepreneurship. We help creators to go from the idea stage to being able to make a living from their projects. So basically being profitable. We have been doing online courses for almost 10 years now, and trying a lot of different ways to teach online. We have tried what we called CBC (cool-off based courses), soft courses, courses with only content and eventually we decided four years ago to focus on one-on-one mentoring. Our three months' training is powered by a messaging app where you can chat with your mentor. We have trained more than 10,000 people so far and we are now on track to train 10,000 people per year.\n\nOur platform combines technology with storytelling, teachers and community integration. We teach the topics that are most important for someone who's starting a business: sales, marketing, hiring, financing, business planning, and all the basics that you need when you are creating a company.\n\nWe focus on helping you start a business, quit your day job and make a living from your own business. We have students in 30 countries, but all our lessons are in French, so many of them are French people living abroad. We have 100 people working at LiveMentor.\n\n## How did you discover Nuxt?\n\nWe started LiveMentor as a monolithic app on a Rails stack, which allowed us to iterate quickly during the first few years. Two years ago, we decided to solidify our codebase, and chose VueJS for a rich client-side experience.\n\nTo make the transition progressively, we began by building micro Vue apps functioning at the page level, with a wrapper rendered by Rails. But loading times kept going up, and we knew we had to go a step further.\n\nWe found Nuxt at this time, via [Twitter](https:\u002F\u002Ftwitter.com\u002Fnuxt_js), and made a Proof of Concept project that went very well. Since then, we have been moving all our pages to Nuxt progressively.\n\n## So you're making a progressive transition?\n\nYes, and we're now close to the end. We really wanted to reduce that transition phase, so we extracted features \"as-is\" to Nuxt. **It's important to say that Nuxt made it really easy to make this progressive transition, it all fits together very simply.**\n\nRegarding deployments, Nuxt also helps a lot by abstracting the Node parts. We're using Heroku, and with a well configured Docker, it was seamless.\n\n## Are you using dynamic or static rendering? Why?\n\nWe use dynamic rendering because our pages are not static and we have a lot of content updated constantly, so we use SSR to do this because it's not really a static site.\n\nWe are focused like crazy on reactivity because all our pedagogical experience, all the learning experience is based on the messaging app between the mentor and the students. We had trouble with our previous messaging system, latency and messages not showing up.\n\nThe Firebase plus Nuxt combo made it much better.\n\n## What is your favorite feature?\n\nThe first feature that made us choose Nuxt was the project's architecture. Be it file-based routing or folder separation, it all fits in an intuitive way. Just dropping a file in your [pages\u002F](\u002Fdocs\u002Fdirectory-structure\u002Fpages) folder without having to configure a router is a must.\n\nAt the moment, we use Vuex a lot, but we're thinking about moving a little bit away from it by leveraging the Composition API.\n\n## Do you have performance benchmarks before & after using Nuxt?\n\nOn the migrated pages, **we managed to cut our loading time in half**. When we launched the new messaging, one of the first comments we had from our users was \"Wow this is really fast!\"\n\nWe also noticed that the team velocity increased, as we can now have people who only focus on the front-end, and others on the API. There's a big bonus in development time. But we still work with cross-functional teams, where we're allowed to do Pull Requests in all repositories! So the teams are not siloed by technologies, but more focused.\n\n## Would you recommend Nuxt?\n\nYes, of course. We have no doubts about the framework's future, it's well maintained by a [solid team](\u002Fteams). The community is reactive to our messages and we believe Nuxt will keep growing in the coming years.\n",ast:{type:"root",children:[{type:b,tag:d,props:{class:"d-heading-description"},children:[{type:b,tag:"prose-img",props:{alt:"Livementor dashboard",height:404,src:"img\u002Fcase-studies\u002Flivementor\u002Fmockup-m1-3.png",width:736},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{id:k},children:[{type:b,tag:e,props:{href:"#what-is-livementor"},children:[{type:a,value:l}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"LiveMentor is one of the world's leading education companies focused on entrepreneurship. We help creators to go from the idea stage to being able to make a living from their projects. So basically being profitable. We have been doing online courses for almost 10 years now, and trying a lot of different ways to teach online. We have tried what we called CBC (cool-off based courses), soft courses, courses with only content and eventually we decided four years ago to focus on one-on-one mentoring. Our three months' training is powered by a messaging app where you can chat with your mentor. We have trained more than 10,000 people so far and we are now on track to train 10,000 people per year."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Our platform combines technology with storytelling, teachers and community integration. We teach the topics that are most important for someone who's starting a business: sales, marketing, hiring, financing, business planning, and all the basics that you need when you are creating a company."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We focus on helping you start a business, quit your day job and make a living from your own business. We have students in 30 countries, but all our lessons are in French, so many of them are French people living abroad. We have 100 people working at LiveMentor."}]},{type:a,value:c},{type:b,tag:g,props:{id:m},children:[{type:b,tag:e,props:{href:"#how-did-you-discover-nuxt"},children:[{type:a,value:n}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We started LiveMentor as a monolithic app on a Rails stack, which allowed us to iterate quickly during the first few years. Two years ago, we decided to solidify our codebase, and chose VueJS for a rich client-side experience."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To make the transition progressively, we began by building micro Vue apps functioning at the page level, with a wrapper rendered by Rails. But loading times kept going up, and we knew we had to go a step further."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We found Nuxt at this time, via "},{type:b,tag:e,props:{href:"https:\u002F\u002Ftwitter.com\u002Fnuxt_js",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Twitter"}]},{type:a,value:", and made a Proof of Concept project that went very well. Since then, we have been moving all our pages to Nuxt progressively."}]},{type:a,value:c},{type:b,tag:g,props:{id:o},children:[{type:b,tag:e,props:{href:"#so-youre-making-a-progressive-transition"},children:[{type:a,value:p}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Yes, and we're now close to the end. We really wanted to reduce that transition phase, so we extracted features \"as-is\" to Nuxt. "},{type:b,tag:q,props:{},children:[{type:a,value:"It's important to say that Nuxt made it really easy to make this progressive transition, it all fits together very simply."}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Regarding deployments, Nuxt also helps a lot by abstracting the Node parts. We're using Heroku, and with a well configured Docker, it was seamless."}]},{type:a,value:c},{type:b,tag:g,props:{id:r},children:[{type:b,tag:e,props:{href:"#are-you-using-dynamic-or-static-rendering-why"},children:[{type:a,value:s}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We use dynamic rendering because our pages are not static and we have a lot of content updated constantly, so we use SSR to do this because it's not really a static site."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We are focused like crazy on reactivity because all our pedagogical experience, all the learning experience is based on the messaging app between the mentor and the students. We had trouble with our previous messaging system, latency and messages not showing up."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The Firebase plus Nuxt combo made it much better."}]},{type:a,value:c},{type:b,tag:g,props:{id:t},children:[{type:b,tag:e,props:{href:"#what-is-your-favorite-feature"},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The first feature that made us choose Nuxt was the project's architecture. Be it file-based routing or folder separation, it all fits in an intuitive way. Just dropping a file in your "},{type:b,tag:e,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fpages"},children:[{type:a,value:"pages\u002F"}]},{type:a,value:" folder without having to configure a router is a must."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"At the moment, we use Vuex a lot, but we're thinking about moving a little bit away from it by leveraging the Composition API."}]},{type:a,value:c},{type:b,tag:g,props:{id:v},children:[{type:b,tag:e,props:{href:"#do-you-have-performance-benchmarks-before--after-using-nuxt"},children:[{type:a,value:w}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"On the migrated pages, "},{type:b,tag:q,props:{},children:[{type:a,value:"we managed to cut our loading time in half"}]},{type:a,value:". When we launched the new messaging, one of the first comments we had from our users was \"Wow this is really fast!\""}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We also noticed that the team velocity increased, as we can now have people who only focus on the front-end, and others on the API. There's a big bonus in development time. But we still work with cross-functional teams, where we're allowed to do Pull Requests in all repositories! So the teams are not siloed by technologies, but more focused."}]},{type:a,value:c},{type:b,tag:g,props:{id:x},children:[{type:b,tag:e,props:{href:"#would-you-recommend-nuxt"},children:[{type:a,value:y}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Yes, of course. We have no doubts about the framework's future, it's well maintained by a "},{type:b,tag:e,props:{href:j},children:[{type:a,value:"solid team"}]},{type:a,value:". The community is reactive to our messages and we believe Nuxt will keep growing in the coming years."}]}]},toc:{title:z,searchDepth:f,depth:f,links:[{id:k,depth:f,text:l},{id:m,depth:f,text:n},{id:o,depth:f,text:p},{id:r,depth:f,text:s},{id:t,depth:f,text:u},{id:v,depth:f,text:w},{id:x,depth:f,text:y}]}}},templateOptions:{header:i,footer:i,aside:h,asideClass:z,fluid:h,banner:i},_img:{"/_ipx/img/case-studies/livementor/mockup-m1-3.png?s=736_404":"\u002F_nuxt\u002Fimage\u002F896870.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:A,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:B,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:C,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:"Docs",subtitle:"Create fast websites easily",slug:"docs",to:D,icon:"docs.svg",color:"bg-green-500"},{title:E,subtitle:"Understand everything in Nuxt",slug:"examples",to:F,icon:"examples.svg",color:"bg-green-600"},{title:G,subtitle:"Learn with concrete cases",slug:"tutorials",to:H,icon:"tutorials.svg",color:"bg-green-700"},{title:I,subtitle:"Learn more with experts",href:J,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:K,subtitle:"How to Deploy Nuxt",slug:"deployments",to:L,icon:"deployments.svg",color:"bg-indigo-light"},{title:M,subtitle:"Extend the power of Nuxt",href:N,icon:"modules.svg",color:"bg-indigo"},{title:O,subtitle:"Get started with themes",slug:"themes",to:P,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:Q,subtitle:"Latest news about Nuxt",slug:"announcements",to:R,icon:"announcements.svg",color:"bg-mint-lighter"},{title:S,subtitle:"They are Nuxt",slug:"teams",to:j,icon:"teams.svg",color:"bg-mint-light"},{title:T,subtitle:"All the code we have released",slug:"releases",to:U,icon:"releases.svg",color:"bg-mint"},{title:V,subtitle:"They trust us",slug:"sponsors",to:W,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:X}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:X},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:Q,to:R},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:V,to:W},{title:S,to:j},{title:G,to:H},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:D},{title:E,to:F},{title:K,to:L},{title:I,href:J},{title:M,href:N},{title:T,to:U},{title:A,to:B},{title:O,to:P}]}],showCookieBanner:h},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","ProseEm","HomeLearnMaster","SectionContentItem","ProseHr","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",C,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link"])},mutations:[]}}("text","element","\n","prose-paragraph","prose-a",2,"prose-h2",false,true,"\u002Fteams","what-is-livementor","What is LiveMentor?","how-did-you-discover-nuxt","How did you discover Nuxt?","so-youre-making-a-progressive-transition","So you're making a progressive transition?","prose-strong","are-you-using-dynamic-or-static-rendering-why","Are you using dynamic or static rendering? Why?","what-is-your-favorite-feature","What is your favorite feature?","do-you-have-performance-benchmarks-before--after-using-nuxt","Do you have performance benchmarks before & after using Nuxt?","would-you-recommend-nuxt","Would you recommend Nuxt?","","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));