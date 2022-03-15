__NUXT_JSONP__("/ja/case-studies/new-york-public-radio", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag){return {data:[{page:{key:"content:ja:case-studies:7.new-york-public-radio.md",generatedAt:new Date(1647348215049),mtime:new Date(1647348215025),slug:"new-york-public-radio",title:"New York Public Radio",position:"999900070000",to:"\u002Fcase-studies\u002Fnew-york-public-radio",draft:h,page:i,language:"ja",template:"Post",description:"New York Public Radio is a nonprofit member network of National Public Radio. They recently rebuilt the WNYC radio page and their news website Gothamist with Nuxt. We talked with Kim LaRocca, Senior Engineering Manager at NYPR about their migration to Nuxt and their future plans.",imgUrl:"img\u002Fcase-studies\u002Fnypr\u002Fcover.png",headingImg:{hidden:i},empty:h,excerpt:void 0,body:{raw:"---\ntemplate: post\ntitle: New York Public Radio\ndescription: \"New York Public Radio is a nonprofit member network of National Public Radio. They recently rebuilt the WNYC radio page and their news website Gothamist with Nuxt. We talked with Kim LaRocca, Senior Engineering Manager at NYPR about their migration to Nuxt and their future plans.\"\nimgUrl: img\u002Fcase-studies\u002Fnypr\u002Fcover.png\nheadingImg:\n  hidden: true\n---\n\n![WNYC Radio page](img\u002Fcase-studies\u002Fnypr\u002Fmain.png){width=736 height=407}\n\n## What is New York Public Radio?\n\nNew York Public Radio is a nonprofit member network of [National Public Radio](https:\u002F\u002Fwww.npr.org). We also own several public radio stations such as WNYC, WQXR, New Jersey Public Radio and we own a performance space called the Green Space in New York City. And we also own [Gothamist](https:\u002F\u002Fgothamist.com\u002F), which is a news site for New York City. We're working on reshaping audio and news for the new generation, reaching out to our community. We're trying to stay on top of modern technologies to better serve our listeners and our members.\n\n## How did you discover Nuxt?\n\nI started using Vue five years ago, back when I was developing with PHP and Laravel. Vue was shipped with Laravel; that's how I found out about it and started using it. I loved Vue, and then we had a project where we needed SSR, so I did some research and I found Nuxt. Everyone loved it, so I just decided to try it out and really enjoyed it and I've been using it ever since.\n\n## A number of the New York Public Radio frontends were built with Ember. Why did you choose to migrate to Nuxt?\n\nWell Ember is tough to work with because no one knows it. On our engineering team in New York Public Radio history, we've never hired one person who already knew Ember, we had to teach them on the job and we kind of got stuck with it, and the community support isn't great. The learning curve is also very, very high. So, when they hired me to manage the engineering team, my boss at the time wanted to switch everything to Vue. So it became my job to switch everything to Vue and of course I'm going to use Nuxt because we need the SEO benefits for our sites, so we just started doing it very gradually. We had to rebuild our whole design system in Vue. And then we started chipping away at some of our websites.\n\n## What are your favorite Nuxt features?\n\nThere's so many features that I love! How everything's built in, you don't have to worry about configuring the build process with Webpack and Babel. The automatic code splitting and [smart prefetching](\u002Fannouncements\u002Fintroducing-smart-prefetching) is amazing. **The first load is fast but then when you navigate between page, it's instant and everyone noticed that and even our users have commented on how fast it is.** Stuff like that already built in makes it amazing to use. \n\nIn addition, even something as simple as managing meta tags is really easy to do with Nuxt. Whereas with Ember, it was like you're jumping through all these hoops to figure out how to make that dynamic. Besides that, comparing this to other frameworks I've worked with, the community is great, the documentation is great, the modules are awesome. If we want to add Google Analytics or authentication, it's just a couple lines of code. You don't have to worry about it. **It really lets us focus on just building cool things and not worrying about the infrastructure**.\n\n## For now you have two projects built with Nuxt, the WNYC player, and Gothamist.\n\nYes, the first thing we did was build the [WNYC radio page](https:\u002F\u002Fwww.wnyc.org\u002Fradio\u002F) in Nuxt, it's a subset of the WNYC site where people can go to listen to the radio online to the FM stream or the AM stream. We have a stream coming in through WebSockets, and we built a couple NPM packages to help with streaming audio services. But besides that, everything else was just built in with Nuxt so it's pretty easy to do.\n\n![Gothamist article](img\u002Fcase-studies\u002Fnypr\u002F1.png){width=736 height=407}\n\n## What are your next steps, do you have any intents to build another project with Nuxt?\n\nWe have every intention! All our new projects are going to use Nuxt and Vue, and the next step is rebuilding the Radiolab website, it's one of our most popular shows on the radio, and besides that we're probably going to rebuild the rest of the WNYC site to use Nuxt and Vue. Gothamist launch a couple of months ago has gotten rave reviews. Everyone noticed that it was fast so we have company approval now. Now we just need the time and the resources to actually start rebuilding but it is our every intention to use it for everything.\n\n## Your projects are open source, can you tell me more about it?\n\nI pushed for having [open source for all our projects](https:\u002F\u002Fgithub.com\u002Fnypublicradio), so our design system is open source, and Gothamist code is open source. We're hoping that we can help some other developers along the way to make their sites better and also to attract people to work on the team because we're working with some cool technologies. We built the WNYC Radio and the design system in open source from the beginning. So if anyone was following it they saw all the problems and issues we had along the way, and how we solved them.\n\n## Would you recommend Nuxt, and for what kind of projects?\n\nWell, obviously, I'm highly gonna recommend Nuxt because I love it. At first I used to think that maybe it was overkill for small projects, but over the past couple of years I just started using it for everything so even if I have a one page, personal site, I'll still use it because it's just easier, it's faster to get it going and it's easier to work with. It's more fun than just the standard traditional Vue application so if anyone asks, I say: \"Use it for everything. Any project.\"\n",ast:{type:"root",children:[{type:b,tag:e,props:{class:"d-heading-description"},children:[{type:b,tag:n,props:{alt:"WNYC Radio page",height:o,src:"img\u002Fcase-studies\u002Fnypr\u002Fmain.png",width:p},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{id:q},children:[{type:b,tag:d,props:{href:"#what-is-new-york-public-radio"},children:[{type:a,value:r}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"New York Public Radio is a nonprofit member network of "},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.npr.org",rel:[j,k,l],target:m},children:[{type:a,value:"National Public Radio"}]},{type:a,value:". We also own several public radio stations such as WNYC, WQXR, New Jersey Public Radio and we own a performance space called the Green Space in New York City. And we also own "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgothamist.com\u002F",rel:[j,k,l],target:m},children:[{type:a,value:"Gothamist"}]},{type:a,value:", which is a news site for New York City. We're working on reshaping audio and news for the new generation, reaching out to our community. We're trying to stay on top of modern technologies to better serve our listeners and our members."}]},{type:a,value:c},{type:b,tag:g,props:{id:s},children:[{type:b,tag:d,props:{href:"#how-did-you-discover-nuxt"},children:[{type:a,value:t}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"I started using Vue five years ago, back when I was developing with PHP and Laravel. Vue was shipped with Laravel; that's how I found out about it and started using it. I loved Vue, and then we had a project where we needed SSR, so I did some research and I found Nuxt. Everyone loved it, so I just decided to try it out and really enjoyed it and I've been using it ever since."}]},{type:a,value:c},{type:b,tag:g,props:{id:u},children:[{type:b,tag:d,props:{href:"#a-number-of-the-new-york-public-radio-frontends-were-built-with-ember-why-did-you-choose-to-migrate-to-nuxt"},children:[{type:a,value:v}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Well Ember is tough to work with because no one knows it. On our engineering team in New York Public Radio history, we've never hired one person who already knew Ember, we had to teach them on the job and we kind of got stuck with it, and the community support isn't great. The learning curve is also very, very high. So, when they hired me to manage the engineering team, my boss at the time wanted to switch everything to Vue. So it became my job to switch everything to Vue and of course I'm going to use Nuxt because we need the SEO benefits for our sites, so we just started doing it very gradually. We had to rebuild our whole design system in Vue. And then we started chipping away at some of our websites."}]},{type:a,value:c},{type:b,tag:g,props:{id:w},children:[{type:b,tag:d,props:{href:"#what-are-your-favorite-nuxt-features"},children:[{type:a,value:x}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"There's so many features that I love! How everything's built in, you don't have to worry about configuring the build process with Webpack and Babel. The automatic code splitting and "},{type:b,tag:d,props:{href:"\u002Fannouncements\u002Fintroducing-smart-prefetching"},children:[{type:a,value:"smart prefetching"}]},{type:a,value:" is amazing. "},{type:b,tag:y,props:{},children:[{type:a,value:"The first load is fast but then when you navigate between page, it's instant and everyone noticed that and even our users have commented on how fast it is."}]},{type:a,value:" Stuff like that already built in makes it amazing to use."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"In addition, even something as simple as managing meta tags is really easy to do with Nuxt. Whereas with Ember, it was like you're jumping through all these hoops to figure out how to make that dynamic. Besides that, comparing this to other frameworks I've worked with, the community is great, the documentation is great, the modules are awesome. If we want to add Google Analytics or authentication, it's just a couple lines of code. You don't have to worry about it. "},{type:b,tag:y,props:{},children:[{type:a,value:"It really lets us focus on just building cool things and not worrying about the infrastructure"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:g,props:{id:z},children:[{type:b,tag:d,props:{href:"#for-now-you-have-two-projects-built-with-nuxt-the-wnyc-player-and-gothamist"},children:[{type:a,value:A}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Yes, the first thing we did was build the "},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.wnyc.org\u002Fradio\u002F",rel:[j,k,l],target:m},children:[{type:a,value:"WNYC radio page"}]},{type:a,value:" in Nuxt, it's a subset of the WNYC site where people can go to listen to the radio online to the FM stream or the AM stream. We have a stream coming in through WebSockets, and we built a couple NPM packages to help with streaming audio services. But besides that, everything else was just built in with Nuxt so it's pretty easy to do."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:n,props:{alt:"Gothamist article",height:o,src:"img\u002Fcase-studies\u002Fnypr\u002F1.png",width:p},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{id:B},children:[{type:b,tag:d,props:{href:"#what-are-your-next-steps-do-you-have-any-intents-to-build-another-project-with-nuxt"},children:[{type:a,value:C}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"We have every intention! All our new projects are going to use Nuxt and Vue, and the next step is rebuilding the Radiolab website, it's one of our most popular shows on the radio, and besides that we're probably going to rebuild the rest of the WNYC site to use Nuxt and Vue. Gothamist launch a couple of months ago has gotten rave reviews. Everyone noticed that it was fast so we have company approval now. Now we just need the time and the resources to actually start rebuilding but it is our every intention to use it for everything."}]},{type:a,value:c},{type:b,tag:g,props:{id:D},children:[{type:b,tag:d,props:{href:"#your-projects-are-open-source-can-you-tell-me-more-about-it"},children:[{type:a,value:E}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"I pushed for having "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnypublicradio",rel:[j,k,l],target:m},children:[{type:a,value:"open source for all our projects"}]},{type:a,value:", so our design system is open source, and Gothamist code is open source. We're hoping that we can help some other developers along the way to make their sites better and also to attract people to work on the team because we're working with some cool technologies. We built the WNYC Radio and the design system in open source from the beginning. So if anyone was following it they saw all the problems and issues we had along the way, and how we solved them."}]},{type:a,value:c},{type:b,tag:g,props:{id:F},children:[{type:b,tag:d,props:{href:"#would-you-recommend-nuxt-and-for-what-kind-of-projects"},children:[{type:a,value:G}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Well, obviously, I'm highly gonna recommend Nuxt because I love it. At first I used to think that maybe it was overkill for small projects, but over the past couple of years I just started using it for everything so even if I have a one page, personal site, I'll still use it because it's just easier, it's faster to get it going and it's easier to work with. It's more fun than just the standard traditional Vue application so if anyone asks, I say: \"Use it for everything. Any project.\""}]}]},toc:{title:H,searchDepth:f,depth:f,links:[{id:q,depth:f,text:r},{id:s,depth:f,text:t},{id:u,depth:f,text:v},{id:w,depth:f,text:x},{id:z,depth:f,text:A},{id:B,depth:f,text:C},{id:D,depth:f,text:E},{id:F,depth:f,text:G}]}}},templateOptions:{header:i,footer:i,aside:h,asideClass:H,fluid:h,banner:i},_img:{"/_ipx/img/case-studies/nypr/main.png?s=736_407":"\u002F_nuxt\u002Fimage\u002Ffd7c0a.png","/_ipx/img/case-studies/nypr/1.png?s=736_407":"\u002F_nuxt\u002Fimage\u002F2fe86b.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"見る",items:[{title:I,subtitle:"Nuxt で作られた Web サイトセレクション",slug:"showcases",to:J,icon:"showcases.svg",color:"bg-sand"},{title:"事例紹介",subtitle:"企業による Nuxt の活用方法",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"著名人の声",subtitle:"私たちのことをどう思っているのか",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"学ぶ",items:[{title:K,subtitle:"高速な Web サイトを簡単に作成する",slug:"docs",to:L,icon:"docs.svg",color:"bg-green-500"},{title:M,subtitle:"Nuxt のすべてを理解する",slug:"examples",to:N,icon:"examples.svg",color:"bg-green-600"},{title:O,subtitle:"具体的なケースで学習する",slug:"tutorials",to:P,icon:"tutorials.svg",color:"bg-green-700"},{title:Q,subtitle:"エキスパートといっしょにもっと学習する",href:R,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"探す",items:[{title:S,subtitle:"Nuxt のデプロイの仕方",slug:"deployments",to:T,icon:"deployments.svg",color:"bg-indigo-light"},{title:U,subtitle:"Nuxt のパワーを拡張する",href:V,icon:"modules.svg",color:"bg-indigo"},{title:W,subtitle:"テーマで始める",slug:"themes",to:X,icon:"themes.svg",color:"bg-indigo-dark"},{title:Y,subtitle:"ステップバイステップで学習する",slug:"video-courses",to:Z,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"コミュニティ",items:[{title:_,subtitle:"Nuxt について最新ニュース",slug:"announcements",to:$,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aa,subtitle:"They are Nuxt",slug:"teams",to:ab,icon:"teams.svg",color:"bg-mint-light"},{title:ac,subtitle:"私たちがリリースしたすべてのコード",slug:"releases",to:ad,icon:"releases.svg",color:"bg-mint"},{title:ae,subtitle:"私たちを信頼しています",slug:"sponsors",to:af,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"パートナー",slug:"partners",to:ag}],footerLinks:[{title:"私たちについて",items:[{title:"連絡先",href:"mailto:hello@nuxtjs.com"},{title:"エンタープライズサポート",to:"\u002Fsupport"},{title:"NuxtLabs について",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"オープンソースソフトウェア",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"パートナーシップ",to:ag},{title:"テレメトリ",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"エコシステム",items:[{title:_,to:$},{title:"貢献",to:"\u002Fcontribution-guide"},{title:"チャット",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"イベント",to:"\u002Fevents"},{title:ae,to:af},{title:aa,to:ab},{title:O,to:P},{title:Y,to:Z}]},{title:"リソース",items:[{title:"デザイン",to:"\u002Fdesign"},{title:K,to:L},{title:M,to:N},{title:S,to:T},{title:Q,href:R},{title:U,href:V},{title:ac,to:ad},{title:I,to:J},{title:W,to:X}]}],showCookieBanner:h},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseEm","ProseHr","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg"])},mutations:[]}}("text","element","\n","prose-a","prose-paragraph",2,"prose-h2",false,true,"nofollow","noopener","noreferrer","_blank","prose-img",407,736,"what-is-new-york-public-radio","What is New York Public Radio?","how-did-you-discover-nuxt","How did you discover Nuxt?","a-number-of-the-new-york-public-radio-frontends-were-built-with-ember-why-did-you-choose-to-migrate-to-nuxt","A number of the New York Public Radio frontends were built with Ember. Why did you choose to migrate to Nuxt?","what-are-your-favorite-nuxt-features","What are your favorite Nuxt features?","prose-strong","for-now-you-have-two-projects-built-with-nuxt-the-wnyc-player-and-gothamist","For now you have two projects built with Nuxt, the WNYC player, and Gothamist.","what-are-your-next-steps-do-you-have-any-intents-to-build-another-project-with-nuxt","What are your next steps, do you have any intents to build another project with Nuxt?","your-projects-are-open-source-can-you-tell-me-more-about-it","Your projects are open source, can you tell me more about it?","would-you-recommend-nuxt-and-for-what-kind-of-projects","Would you recommend Nuxt, and for what kind of projects?","","導入事例","\u002Fshowcases","ドキュメント","\u002Fdocs","例","\u002Fexamples","チュートリアル","\u002Ftutorials","マスターコース","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","デプロイ","\u002Fdeployments","モジュール","https:\u002F\u002Fmodules.nuxtjs.org","テーマ","\u002Fthemes","ビデオコース","\u002Fvideo-courses","お知らせ","\u002Fannouncements","チーム","\u002Fteams","リリース","\u002Freleases","スポンサー","\u002Fsponsors","\u002Fpartners")));