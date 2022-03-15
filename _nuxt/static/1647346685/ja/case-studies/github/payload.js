__NUXT_JSONP__("/ja/case-studies/github", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag){return {data:[{page:{key:"content:ja:case-studies:0.github.md",generatedAt:new Date(1647346778695),mtime:new Date(1647346778664),slug:"github",title:n,position:"999900000000",to:"\u002Fcase-studies\u002Fgithub",draft:l,page:m,language:"ja",template:"Post",description:"GitHub Stars recognises those folks who are going above and beyond in helping others in the developer world. These exceptional folks are not only maintaining projects but they are going out there to educate. They are inspiring people and influencing people, both online and offline in everyday things that they do. It's for this purpose that GitHub created the GitHub Stars program.",imgUrl:"img\u002Fcase-studies\u002Fgithub\u002Fcover.png",headingImg:{hidden:m},empty:l,excerpt:void 0,body:{raw:"---\ntemplate: post\ntitle: GitHub Stars\ndescription: \"GitHub Stars recognises those folks who are going above and beyond in helping others in the developer world. These exceptional folks are not only maintaining projects but they are going out there to educate. They are inspiring people and influencing people, both online and offline in everyday things that they do. It's for this purpose that GitHub created the GitHub Stars program.\"\nimgUrl: img\u002Fcase-studies\u002Fgithub\u002Fcover.png\nheadingImg:\n  hidden: true\n---\n![Github Stars homepage](img\u002Fcase-studies\u002Fgithub\u002Fmain.png){width=736 height=370}\n\n## What is GitHub?\n\nGitHub is the home for millions of developers. We have over 65 million developers and essentially it's a place where developers can go and create, share and make their best code possible. We try and make it easy for developers to meet developers, work together, solve challenging problems and create the world's most important technologies. Our community is made up from a diverse set of people from students to hobbyists, enterprise professionals, partners and executives, and the list goes on. GitHub is not just code, it is much more than code, it's the home of open source collaboration. It's where new developers can come and get started. It's where experienced developers can expand their knowledge with developers solving the unsolvable and testing the limits of what software can do.\n\n## Is GitHub open sourced?\n\nIt is an idea that is worth considering and there are parts of GitHub across infrastructure tooling that are already open source. At github.com\u002Fgithub you will be able to see all of the open source projects that we have there. Two notable examples are:\n\n  The [GitHub load balancer](https:\u002F\u002Fgithub.blog\u002F2018-08-08-glb-director-open-source-load-balancer\u002F) which we open sourced back in 2018. It is our scalable load balancer solution for the bare metal data centres and it powers the majority of GitHub's web and git traffic as well as it is fronting some of the principal intel systems.\n\n  [GitHub Docs](https:\u002F\u002Fgithub.blog\u002F2020-10-14-how-we-open-sourced-docs-github-com\u002F) which we open sourced in mid October 2020. With this effort, we're able to source new ideas from a broader and diverse set of individuals, especially from those who are  experts in the community and GitHub.\n\n## What is GitHub Stars?\n\n[GitHub Stars](http:\u002F\u002Fstars.github.com\u002F) recognises those folks who are going above and beyond in helping others in the developer world. These exceptional folks are not only maintaining projects but they are going out there to educate. They are inspiring people and influencing people, both online and offline in everyday things that they do. It's for this purpose that we created the [GitHub Stars program](http:\u002F\u002Fstars.github.com\u002F). \n\nIt's our way to say thank you to these amazing people. It gives Stars a platform to showcase their work, enable them to reach more people and help everyone benefit from the vast amount of knowledge, excitement and expertise that they have. A lot of these folks are doing what they are doing because they love it and it's all without an expectation of a reward. So they do things like podcasts, videos, blogs, meetups etc, to share their stories and best practices, their work and their learnings around GitHub. \n\nWe [officially launched the program in September 2020](https:\u002F\u002Fgithub.blog\u002F2020-09-03-introducing-the-github-stars-program\u002F), and have already seen more than 12k nominations. It has been very exciting to see the sheer amount of nominations, which is a good problem to have, but it is a lot of nominations that we need to go through and review with strict criteria. We want to make sure we are rewarding these folks by giving them a platform so they can continue doing what they are doing and go out to help others. It has been a fantastic journey, difficult but very exciting, and we could not have done it without the help from Josep Jaume Rey and his team at [Codegram](https:\u002F\u002Fwww.codegram.com\u002F). It has been great to put the website together and everything that has gone around that has really put the cherry on the top of the cake.\n\n## How is the GitHub Stars website built?\n\nAt the very beginning we were planning on having a fully static website. The idea was to replicate what we did on the GitHub Hackaton website. The way people contributed to it was to send a pull request and when the pull request got merged the website would get re-generated. This was the initial idea to have it full static and rely on the GitHub repository but we figured that there were some interactions that were not that straight forward to do, such as nominating. This could be potentially a little bit risky to do it on the GitHub repo because we didn't know how many nominations there would be and it turns out it was a good call. Instead, we created a full static website with some refinements around the nomination part. For nominations, this hits an API which then talks to a GraphQL API that is built on top of an Apollo server and Prisma, which all synchronises with Airtable as an admin interface.\n\n## Why did you choose Nuxt as your frontend framework?\n\nNuxt was the perfect candidate because of the fact that it can play well as a full static website but you can progressively change it to a fully dynamic website. We thought that maybe in the future, we might not be happy about having a bit of a delay due to having to regenerate the site when changes are made in the admin dashboard. We already loved Vue and Nuxt but this feature in particular was very helpful. We had the assurance that at any particular moment we could change the approach. \n\n## Are you using dynamic or static rendering? Why?\n\nGitHub Stars is a statically generated website hosted on GitHub Pages and it gets redeployed and regenerated every 15 minutes. The nominations are sent to a Postgres database which gets stored there until the next redeploy. We don't need it in real-time as the nominations are not shown anywhere on the public website, so everything goes to the nominations database that gets synchronised to Airtable. From there, the GitHub team decides who gets awarded as a GitHub Star, which is then published on the website.\n\n![Github Stars page](img\u002Fcase-studies\u002Fgithub\u002F1.png){width=736 height=382}\n\n## What is your favorite feature?\n\nThe full static mode and the way URLs are automatically crawled so you don't have to manually list them anymore. It was a really cool idea to solve that particular problem and things are faster now because of the pre-loading. We were able to remove a lot of code we had for generating URLs. We love that feature.\n\nAnother great feature is the folder structure because for non-developers it makes it easier as they know exactly where to go and understand where to find things. I think the folder structure is genius. \n\nAnd the fact that Nuxt is open source - and at GitHub we \u003C3 open source, is definitely one of the things we love about Nuxt. As one of our top 100 open source projects, we work closely with Nuxt and take feedback to understand how we can improve GitHub.\n\n## Would you recommend Nuxt?\n\nYes! We pride ourselves on providing a first-class developer experience. We’re developers too, and we love how the framework is simple, yet powerful.\n",ast:{type:"root",children:[{type:b,tag:d,props:{class:"d-heading-description"},children:[{type:b,tag:o,props:{alt:"Github Stars homepage",height:370,src:"img\u002Fcase-studies\u002Fgithub\u002Fmain.png",width:p},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{id:q},children:[{type:b,tag:e,props:{href:"#what-is-github"},children:[{type:a,value:r}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"GitHub is the home for millions of developers. We have over 65 million developers and essentially it's a place where developers can go and create, share and make their best code possible. We try and make it easy for developers to meet developers, work together, solve challenging problems and create the world's most important technologies. Our community is made up from a diverse set of people from students to hobbyists, enterprise professionals, partners and executives, and the list goes on. GitHub is not just code, it is much more than code, it's the home of open source collaboration. It's where new developers can come and get started. It's where experienced developers can expand their knowledge with developers solving the unsolvable and testing the limits of what software can do."}]},{type:a,value:c},{type:b,tag:g,props:{id:s},children:[{type:b,tag:e,props:{href:"#is-github-open-sourced"},children:[{type:a,value:t}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It is an idea that is worth considering and there are parts of GitHub across infrastructure tooling that are already open source. At github.com\u002Fgithub you will be able to see all of the open source projects that we have there. Two notable examples are:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.blog\u002F2018-08-08-glb-director-open-source-load-balancer\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"GitHub load balancer"}]},{type:a,value:" which we open sourced back in 2018. It is our scalable load balancer solution for the bare metal data centres and it powers the majority of GitHub's web and git traffic as well as it is fronting some of the principal intel systems."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.blog\u002F2020-10-14-how-we-open-sourced-docs-github-com\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"GitHub Docs"}]},{type:a,value:" which we open sourced in mid October 2020. With this effort, we're able to source new ideas from a broader and diverse set of individuals, especially from those who are  experts in the community and GitHub."}]},{type:a,value:c},{type:b,tag:g,props:{id:u},children:[{type:b,tag:e,props:{href:"#what-is-github-stars"},children:[{type:a,value:v}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:w,rel:[h,i,j],target:k},children:[{type:a,value:n}]},{type:a,value:" recognises those folks who are going above and beyond in helping others in the developer world. These exceptional folks are not only maintaining projects but they are going out there to educate. They are inspiring people and influencing people, both online and offline in everyday things that they do. It's for this purpose that we created the "},{type:b,tag:e,props:{href:w,rel:[h,i,j],target:k},children:[{type:a,value:"GitHub Stars program"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It's our way to say thank you to these amazing people. It gives Stars a platform to showcase their work, enable them to reach more people and help everyone benefit from the vast amount of knowledge, excitement and expertise that they have. A lot of these folks are doing what they are doing because they love it and it's all without an expectation of a reward. So they do things like podcasts, videos, blogs, meetups etc, to share their stories and best practices, their work and their learnings around GitHub."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.blog\u002F2020-09-03-introducing-the-github-stars-program\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"officially launched the program in September 2020"}]},{type:a,value:", and have already seen more than 12k nominations. It has been very exciting to see the sheer amount of nominations, which is a good problem to have, but it is a lot of nominations that we need to go through and review with strict criteria. We want to make sure we are rewarding these folks by giving them a platform so they can continue doing what they are doing and go out to help others. It has been a fantastic journey, difficult but very exciting, and we could not have done it without the help from Josep Jaume Rey and his team at "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.codegram.com\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"Codegram"}]},{type:a,value:". It has been great to put the website together and everything that has gone around that has really put the cherry on the top of the cake."}]},{type:a,value:c},{type:b,tag:g,props:{id:x},children:[{type:b,tag:e,props:{href:"#how-is-the-github-stars-website-built"},children:[{type:a,value:y}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"At the very beginning we were planning on having a fully static website. The idea was to replicate what we did on the GitHub Hackaton website. The way people contributed to it was to send a pull request and when the pull request got merged the website would get re-generated. This was the initial idea to have it full static and rely on the GitHub repository but we figured that there were some interactions that were not that straight forward to do, such as nominating. This could be potentially a little bit risky to do it on the GitHub repo because we didn't know how many nominations there would be and it turns out it was a good call. Instead, we created a full static website with some refinements around the nomination part. For nominations, this hits an API which then talks to a GraphQL API that is built on top of an Apollo server and Prisma, which all synchronises with Airtable as an admin interface."}]},{type:a,value:c},{type:b,tag:g,props:{id:z},children:[{type:b,tag:e,props:{href:"#why-did-you-choose-nuxt-as-your-frontend-framework"},children:[{type:a,value:A}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Nuxt was the perfect candidate because of the fact that it can play well as a full static website but you can progressively change it to a fully dynamic website. We thought that maybe in the future, we might not be happy about having a bit of a delay due to having to regenerate the site when changes are made in the admin dashboard. We already loved Vue and Nuxt but this feature in particular was very helpful. We had the assurance that at any particular moment we could change the approach."}]},{type:a,value:c},{type:b,tag:g,props:{id:B},children:[{type:b,tag:e,props:{href:"#are-you-using-dynamic-or-static-rendering-why"},children:[{type:a,value:C}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"GitHub Stars is a statically generated website hosted on GitHub Pages and it gets redeployed and regenerated every 15 minutes. The nominations are sent to a Postgres database which gets stored there until the next redeploy. We don't need it in real-time as the nominations are not shown anywhere on the public website, so everything goes to the nominations database that gets synchronised to Airtable. From there, the GitHub team decides who gets awarded as a GitHub Star, which is then published on the website."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:o,props:{alt:"Github Stars page",height:382,src:"img\u002Fcase-studies\u002Fgithub\u002F1.png",width:p},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{id:D},children:[{type:b,tag:e,props:{href:"#what-is-your-favorite-feature"},children:[{type:a,value:E}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The full static mode and the way URLs are automatically crawled so you don't have to manually list them anymore. It was a really cool idea to solve that particular problem and things are faster now because of the pre-loading. We were able to remove a lot of code we had for generating URLs. We love that feature."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Another great feature is the folder structure because for non-developers it makes it easier as they know exactly where to go and understand where to find things. I think the folder structure is genius."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And the fact that Nuxt is open source - and at GitHub we \u003C3 open source, is definitely one of the things we love about Nuxt. As one of our top 100 open source projects, we work closely with Nuxt and take feedback to understand how we can improve GitHub."}]},{type:a,value:c},{type:b,tag:g,props:{id:F},children:[{type:b,tag:e,props:{href:"#would-you-recommend-nuxt"},children:[{type:a,value:G}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Yes! We pride ourselves on providing a first-class developer experience. We’re developers too, and we love how the framework is simple, yet powerful."}]}]},toc:{title:H,searchDepth:f,depth:f,links:[{id:q,depth:f,text:r},{id:s,depth:f,text:t},{id:u,depth:f,text:v},{id:x,depth:f,text:y},{id:z,depth:f,text:A},{id:B,depth:f,text:C},{id:D,depth:f,text:E},{id:F,depth:f,text:G}]}}},templateOptions:{header:m,footer:m,aside:l,asideClass:H,fluid:l,banner:m},_img:{"/_ipx/img/case-studies/github/main.png?s=736_370":"\u002F_nuxt\u002Fimage\u002F9c5818.png","/_ipx/img/case-studies/github/1.png?s=736_382":"\u002F_nuxt\u002Fimage\u002Fff1b48.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"見る",items:[{title:I,subtitle:"Nuxt で作られた Web サイトセレクション",slug:"showcases",to:J,icon:"showcases.svg",color:"bg-sand"},{title:"事例紹介",subtitle:"企業による Nuxt の活用方法",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"著名人の声",subtitle:"私たちのことをどう思っているのか",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"学ぶ",items:[{title:K,subtitle:"高速な Web サイトを簡単に作成する",slug:"docs",to:L,icon:"docs.svg",color:"bg-green-500"},{title:M,subtitle:"Nuxt のすべてを理解する",slug:"examples",to:N,icon:"examples.svg",color:"bg-green-600"},{title:O,subtitle:"具体的なケースで学習する",slug:"tutorials",to:P,icon:"tutorials.svg",color:"bg-green-700"},{title:Q,subtitle:"エキスパートといっしょにもっと学習する",href:R,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"探す",items:[{title:S,subtitle:"Nuxt のデプロイの仕方",slug:"deployments",to:T,icon:"deployments.svg",color:"bg-indigo-light"},{title:U,subtitle:"Nuxt のパワーを拡張する",href:V,icon:"modules.svg",color:"bg-indigo"},{title:W,subtitle:"テーマで始める",slug:"themes",to:X,icon:"themes.svg",color:"bg-indigo-dark"},{title:Y,subtitle:"ステップバイステップで学習する",slug:"video-courses",to:Z,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"コミュニティ",items:[{title:_,subtitle:"Nuxt について最新ニュース",slug:"announcements",to:$,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aa,subtitle:"They are Nuxt",slug:"teams",to:ab,icon:"teams.svg",color:"bg-mint-light"},{title:ac,subtitle:"私たちがリリースしたすべてのコード",slug:"releases",to:ad,icon:"releases.svg",color:"bg-mint"},{title:ae,subtitle:"私たちを信頼しています",slug:"sponsors",to:af,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"パートナー",slug:"partners",to:ag}],footerLinks:[{title:"私たちについて",items:[{title:"連絡先",href:"mailto:hello@nuxtjs.com"},{title:"エンタープライズサポート",to:"\u002Fsupport"},{title:"NuxtLabs について",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"オープンソースソフトウェア",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"パートナーシップ",to:ag},{title:"テレメトリ",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"エコシステム",items:[{title:_,to:$},{title:"貢献",to:"\u002Fcontribution-guide"},{title:"チャット",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"イベント",to:"\u002Fevents"},{title:ae,to:af},{title:aa,to:ab},{title:O,to:P},{title:Y,to:Z}]},{title:"リソース",items:[{title:"デザイン",to:"\u002Fdesign"},{title:K,to:L},{title:M,to:N},{title:S,to:T},{title:Q,href:R},{title:U,href:V},{title:ac,to:ad},{title:I,to:J},{title:W,to:X}]}],showCookieBanner:l},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","ProseEm","HomeLearnMaster","SectionContentItem","ProseHr","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link"])},mutations:[]}}("text","element","\n","prose-paragraph","prose-a",2,"prose-h2","nofollow","noopener","noreferrer","_blank",false,true,"GitHub Stars","prose-img",736,"what-is-github","What is GitHub?","is-github-open-sourced","Is GitHub open sourced?","what-is-github-stars","What is GitHub Stars?","http:\u002F\u002Fstars.github.com\u002F","how-is-the-github-stars-website-built","How is the GitHub Stars website built?","why-did-you-choose-nuxt-as-your-frontend-framework","Why did you choose Nuxt as your frontend framework?","are-you-using-dynamic-or-static-rendering-why","Are you using dynamic or static rendering? Why?","what-is-your-favorite-feature","What is your favorite feature?","would-you-recommend-nuxt","Would you recommend Nuxt?","","導入事例","\u002Fshowcases","ドキュメント","\u002Fdocs","例","\u002Fexamples","チュートリアル","\u002Ftutorials","マスターコース","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","デプロイ","\u002Fdeployments","モジュール","https:\u002F\u002Fmodules.nuxtjs.org","テーマ","\u002Fthemes","ビデオコース","\u002Fvideo-courses","お知らせ","\u002Fannouncements","チーム","\u002Fteams","リリース","\u002Freleases","スポンサー","\u002Fsponsors","\u002Fpartners")));