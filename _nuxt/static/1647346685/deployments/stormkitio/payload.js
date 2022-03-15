__NUXT_JSONP__("/deployments/stormkitio", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag){return {data:[{page:{key:"content:en:deployments:stormkitio.md",generatedAt:new Date(1647346881638),mtime:new Date(1647346881627),slug:"stormkitio",title:p,position:"999999990000",to:"\u002Fdeployments\u002Fstormkitio",draft:m,page:o,language:"en",template:"Guide",description:q,target:"Static & Server",category:"deployment",logo:{light:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002FStormkit.svg",dark:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002FStormkit.svg"},empty:m,excerpt:void 0,body:{raw:"---\ntemplate: guide\ntitle: Stormkit.io\ndescription: How to deploy Nuxt with Stormkit.io?\ntarget: Static & Server\ncategory: deployment\nlogo:\n  light: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002FStormkit.svg\"\n  dark: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002FStormkit.svg\"\n---\n# Deploy with Stormkit\n\nHow to deploy Nuxt with Stormkit.io?\n\n---\n\nEasily build, deploy and scale your Nuxt applications with [Stormkit.io](https:\u002F\u002Fwww.stormkit.io). It supports instant rollbacks, serverless-side logic, snippet injections, multiple development environments and more...\n\n## Prerequisites\n\nThis guide assumes you already have a Nuxt project to deploy. If you need a project, use the [create-nuxt-app](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcreate-nuxt-app) to get started or fork Stormkit's [Nuxt Example](https:\u002F\u002Fgithub.com\u002Fstormkit-dev\u002Fhackernews-nuxt) before continuing.\n\n## Setup\n\n1. Go to [app.stormkit.io](https:\u002F\u002Fapp.stormkit.io) and log in by selecting your git provider.\n2. Once logged in, Stormkit will ask you in which provider your codebase is located. Click on the provider once more.\n3. If Github, click on ‘Connect more repositories’ and grant Stormkit access to it.\n4. Next, select your repository. This will create the application on Stormkit.\n5. On your application's page, find the **Production** environment and click on that.\n6. Click on edit to configure your application. You will provide the build command and the\n   environment variables in this screen.\n\n## Static websites\n\nYou don't have to do anything for static websites. Applications built with `nuxt generate` will be handled out of the box.\n\n## Single page applications\n\nFor single page applications, all you have to do is to provide a `stormkit.config.yml` which redirects\nall requests to `index.html`. To do so, create a `stormkit.config.yml` file on the top level of your project and specify the following rule:\n\n```\napp:\n- redirects:\n    - from: \u002F*\n      to: \u002Findex.html\n      assets: false\n```\n\n## Hybrid applications\n\nFor hybrid applications, you'll have to turn on the `Serverless` toggle on the build configuration page. This will tell Stormkit to serve the requests from the lambdas instead of the CDN. You can find more on [this guide](https:\u002F\u002Fwww.stormkit.io\u002Fdocs\u002Fdeployments\u002Fconfiguration\u002Fnuxt#hybrid) to configure your hybrid serverless applications.\n\n## Hosting using Stormkit\n\nStormkit generates a unique URL for each deployment. You can preview your application using these links. Later, you can connect your domain and publish any deployment so that the users will start to see that version of your application. You can also do staged-rollouts or A\u002FB testing by publishing multiple versions at the same time.\n\n## Support\n\nIf you need additional support, you can chat with Stormkit developers and other community members on [Discord](https:\u002F\u002Fdiscord.gg\u002F6yQWhyY).\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"deploy-with-stormkit"},children:[{type:a,value:"Deploy with Stormkit"}]},{type:a,value:c},{type:b,tag:f,props:{class:"d-heading-description"},children:[{type:a,value:q}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Easily build, deploy and scale your Nuxt applications with "},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.stormkit.io",rel:[h,i,j],target:k},children:[{type:a,value:p}]},{type:a,value:". It supports instant rollbacks, serverless-side logic, snippet injections, multiple development environments and more..."}]},{type:a,value:c},{type:b,tag:g,props:{id:r},children:[{type:b,tag:d,props:{href:"#prerequisites"},children:[{type:a,value:s}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"This guide assumes you already have a Nuxt project to deploy. If you need a project, use the "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcreate-nuxt-app",rel:[h,i,j],target:k},children:[{type:a,value:"create-nuxt-app"}]},{type:a,value:" to get started or fork Stormkit's "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fstormkit-dev\u002Fhackernews-nuxt",rel:[h,i,j],target:k},children:[{type:a,value:"Nuxt Example"}]},{type:a,value:" before continuing."}]},{type:a,value:c},{type:b,tag:g,props:{id:t},children:[{type:b,tag:d,props:{href:"#setup"},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:"prose-ol",props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:"Go to "},{type:b,tag:d,props:{href:"https:\u002F\u002Fapp.stormkit.io",rel:[h,i,j],target:k},children:[{type:a,value:"app.stormkit.io"}]},{type:a,value:" and log in by selecting your git provider."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:"Once logged in, Stormkit will ask you in which provider your codebase is located. Click on the provider once more."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:"If Github, click on ‘Connect more repositories’ and grant Stormkit access to it."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:"Next, select your repository. This will create the application on Stormkit."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:"On your application's page, find the "},{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"Production"}]},{type:a,value:" environment and click on that."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:"Click on edit to configure your application. You will provide the build command and the\nenvironment variables in this screen."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{id:v},children:[{type:b,tag:d,props:{href:"#static-websites"},children:[{type:a,value:w}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"You don't have to do anything for static websites. Applications built with "},{type:b,tag:n,props:{},children:[{type:a,value:"nuxt generate"}]},{type:a,value:" will be handled out of the box."}]},{type:a,value:c},{type:b,tag:g,props:{id:x},children:[{type:b,tag:d,props:{href:"#single-page-applications"},children:[{type:a,value:y}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"For single page applications, all you have to do is to provide a "},{type:b,tag:n,props:{},children:[{type:a,value:z}]},{type:a,value:" which redirects\nall requests to "},{type:b,tag:n,props:{},children:[{type:a,value:"index.html"}]},{type:a,value:". To do so, create a "},{type:b,tag:n,props:{},children:[{type:a,value:z}]},{type:a,value:" file on the top level of your project and specify the following rule:"}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:a,value:"app:\n- redirects:\n    - from: \u002F*\n      to: \u002Findex.html\n      assets: false\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{id:A},children:[{type:b,tag:d,props:{href:"#hybrid-applications"},children:[{type:a,value:B}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"For hybrid applications, you'll have to turn on the "},{type:b,tag:n,props:{},children:[{type:a,value:"Serverless"}]},{type:a,value:" toggle on the build configuration page. This will tell Stormkit to serve the requests from the lambdas instead of the CDN. You can find more on "},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.stormkit.io\u002Fdocs\u002Fdeployments\u002Fconfiguration\u002Fnuxt#hybrid",rel:[h,i,j],target:k},children:[{type:a,value:"this guide"}]},{type:a,value:" to configure your hybrid serverless applications."}]},{type:a,value:c},{type:b,tag:g,props:{id:C},children:[{type:b,tag:d,props:{href:"#hosting-using-stormkit"},children:[{type:a,value:D}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Stormkit generates a unique URL for each deployment. You can preview your application using these links. Later, you can connect your domain and publish any deployment so that the users will start to see that version of your application. You can also do staged-rollouts or A\u002FB testing by publishing multiple versions at the same time."}]},{type:a,value:c},{type:b,tag:g,props:{id:E},children:[{type:b,tag:d,props:{href:"#support"},children:[{type:a,value:F}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If you need additional support, you can chat with Stormkit developers and other community members on "},{type:b,tag:d,props:{href:"https:\u002F\u002Fdiscord.gg\u002F6yQWhyY",rel:[h,i,j],target:k},children:[{type:a,value:"Discord"}]},{type:a,value:"."}]}]},toc:{title:G,searchDepth:e,depth:e,links:[{id:r,depth:e,text:s},{id:t,depth:e,text:u},{id:v,depth:e,text:w},{id:x,depth:e,text:y},{id:A,depth:e,text:B},{id:C,depth:e,text:D},{id:E,depth:e,text:F}]}}},templateOptions:{header:o,footer:o,aside:m,asideClass:G,fluid:m,banner:o},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/DeveloperThomas.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F01e0e4.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png","/_ipx/https://github.com/MrJmpl3.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3e840f.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/mtlynch.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F525213.png","/_ipx/https://github.com/book000.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3838a1.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/meirroth.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe09bc9.png","/_ipx/https://github.com/Brettanda.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F25f97d.png","/_ipx/https://github.com/armgitaar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0c63ae.png","/_ipx/https://github.com/thomasbnt.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F9f568f.png","/_ipx/https://github.com/karur4n.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F8dcce9.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:H,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:I,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:J,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:"Docs",subtitle:"Create fast websites easily",slug:"docs",to:K,icon:"docs.svg",color:"bg-green-500"},{title:L,subtitle:"Understand everything in Nuxt",slug:"examples",to:M,icon:"examples.svg",color:"bg-green-600"},{title:N,subtitle:"Learn with concrete cases",slug:"tutorials",to:O,icon:"tutorials.svg",color:"bg-green-700"},{title:P,subtitle:"Learn more with experts",href:Q,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:R,subtitle:"How to Deploy Nuxt",slug:"deployments",to:S,icon:"deployments.svg",color:"bg-indigo-light"},{title:T,subtitle:"Extend the power of Nuxt",href:U,icon:"modules.svg",color:"bg-indigo"},{title:V,subtitle:"Get started with themes",slug:"themes",to:W,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:X,subtitle:"Latest news about Nuxt",slug:"announcements",to:Y,icon:"announcements.svg",color:"bg-mint-lighter"},{title:Z,subtitle:"They are Nuxt",slug:"teams",to:_,icon:"teams.svg",color:"bg-mint-light"},{title:$,subtitle:"All the code we have released",slug:"releases",to:aa,icon:"releases.svg",color:"bg-mint"},{title:ab,subtitle:"They trust us",slug:"sponsors",to:ac,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:ad}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:ad},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:X,to:Y},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:ab,to:ac},{title:Z,to:_},{title:N,to:O},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:K},{title:L,to:M},{title:R,to:S},{title:P,href:Q},{title:T,href:U},{title:$,to:aa},{title:H,to:I},{title:V,to:W}]}],showCookieBanner:m},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Fen\u002Fdeployments\u002Fstormkitio.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:ae,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:ae},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:af,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:af},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"DeveloperThomas"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:ag,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:ag},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"},{name:"José Manuel Casani Guerra",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21302114?u=8ea39b04340fe8c4ebd63b1097497e1bf0d1454f&v=4",login:"MrJmpl3"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=2998231cea5f2bd7268cba898c9a947cb1d525b8&v=4",login:"owlnai"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Michael Lynch",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7783288?u=b6d8f48d38d7a64cddc633db4cfcd6915b997794&v=4",login:"mtlynch"},{name:"Tomachi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8929706?u=bb51b21fd7735505d999e27f7340c5f886f4d9fe&v=4",login:"book000"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Meir Roth",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F12494197?u=7828b437d2bc2402a6e8a4edd9ada378139f4742&v=4",login:"meirroth"},{name:"Brett",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14969098?u=34d0910e6ded49668e2a114eedbc26ab7b5979e7&v=4",login:"Brettanda"},{name:"Adam Miedema",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F30202878?u=aad565699f6b02961c47297dc931e5179d9ff8e1&v=4",login:"armgitaar"},{name:"Thomas Bnt",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14293805?u=e3f70b334910b6cfd43ad99c9f5b0523c07bd38a&v=4",login:"thomasbnt"},{name:"Kazuki Furukawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6816398?v=4",login:"karur4n"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","ProseEm","HomeLearnMaster","SectionContentItem","ProseHr","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",J,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link"])},mutations:[]}}("text","element","\n","prose-a",2,"prose-paragraph","prose-h2","nofollow","noopener","noreferrer","_blank","prose-li",false,"prose-code-inline",true,"Stormkit.io","How to deploy Nuxt with Stormkit.io?","prerequisites","Prerequisites","setup","Setup","static-websites","Static websites","single-page-applications","Single page applications","stormkit.config.yml","hybrid-applications","Hybrid applications","hosting-using-stormkit","Hosting using Stormkit","support","Support","","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners","Ayouli","felipesuri","syagawa")));