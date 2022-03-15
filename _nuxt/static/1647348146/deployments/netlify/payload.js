__NUXT_JSONP__("/deployments/netlify", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD){return {data:[{page:{key:"content:en:deployments:1.netlify.md",generatedAt:new Date(1647348253004),mtime:new Date(1647348252993),slug:"netlify",title:z,position:"999900010000",to:"\u002Fdeployments\u002Fnetlify",draft:m,page:r,language:"en",template:"Guide",description:A,target:"Static",category:"deployment",logo:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002Fnetlify.svg",empty:m,excerpt:void 0,body:{raw:"---\ntemplate: guide\ntitle: Netlify\ndescription: How to deploy Nuxt on Netlify?\ntarget: Static\ncategory: deployment\nlogo: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002Fnetlify.svg\"\n---\n# Deploy Nuxt on Netlify\n\nHow to deploy Nuxt on Netlify?\n\n---\n\nDeploying to [Netlify](https:\u002F\u002Fwww.netlify.com) is a low friction option for getting a **statically generated** Nuxt site online quickly.\n\nThe core of the process leverages the `nuxt generate`(\u003C= v2.12) command during deployment to build a static version of your Nuxt app into a `dist` directory. The contents of this directory are then deployed to a production URL.\n\n\u003Cdiv class=\"Promo__Video\"\u003E\n  \u003Ca href=\"https:\u002F\u002Fexplorers.netlify.com\u002Flearn\u002Fget-started-with-nuxt\u002Fnuxt-generate-and-deploy\" target=\"_blank\"\u003E\n    \u003Cp class=\"Promo__Video__Icon\"\u003E\n      Watch a free lesson on \u003Cstrong\u003EHow to deploy Nuxt to Netlify\u003C\u002Fstrong\u003E on Jamstack Explorers\n    \u003C\u002Fp\u003E\n  \u003C\u002Fa\u003E\n\u003C\u002Fdiv\u003E\n\n## Getting Started\n\nPress the _\"New site from Git\"_ button on the Netlify dashboard. Authenticate with your repository host, select a repository to deploy, and continue. You should land on step 3: _\"Build options, and deploy!\"_\n\n## Configure:\n\n### For a statically generated site\n\nMake sure you have `target: 'static'`in your `nuxt.config`.\n\n1. **Branch to deploy:** `main`, or which-ever branch you prefer\n1. **Build command:** `npm run generate`\n1. **Publish directory:** `dist`\n\n### For client side rendering only\n\nMake sure you have `target: 'static'` and `ssr: false`in your `nuxt.config`.\n\n1. **Branch to deploy:** `main`, or which-ever branch you prefer\n1. **Build command:** `npm run generate`\n1. **Publish directory:** `dist`\n\nFor client side rendering there is a problem with refresh as by default on Netlify the site redirects to _\"404 not found\"_. For any pages that are not generated they will fallback to SPA mode and then if you refresh or share that link you will get Netlify's 404 page. This is because the pages that are not generated don't actually exist as they are actually a single page application so if you refresh this page you will get a 404 because the url for that page doesn't actually exist. By redirecting to the 404.html Nuxt will reload your page correctly in SPA fallback.\n\nThe easiest way to fix this is by adding a [generate property](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#fallback) in your `nuxt.config` and setting `fallback: true`. Then it will fallback to the generated 404.html when in SPA mode instead of Netlify's 404 page.\n\n```js\nexport default {\n  generate: {\n    fallback: true\n  }\n}\n```\n\nIf however you want to automatically apply headers and redirects of the application then there is a module for that, this is especially useful for when you have custom headers\u002Fredirects (in a `_headers` or `_redirects` file):\n\n[netlify-files-module](https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fnetlify-files-module)\n\n\u003E For more information on Netlify redirects see the [Netlify docs](https:\u002F\u002Fwww.netlify.com\u002Fdocs\u002Fredirects\u002F#rewrites-and-proxying).\n\n\u003E For simple reference on Netlify redirects read blog [post](https:\u002F\u002Fwww.netlify.com\u002Fblog\u002F2019\u002F01\u002F16\u002Fredirect-rules-for-all-how-to-configure-redirects-for-your-static-site) by Divya Sasidharan\n\n\u003E Optionally, you can add additional ENV variables via the _\"Advanced\"_ button. These can be helpful for swapping in alternative API credentials and so on. Netlify also provides a [default ENV variables](https:\u002F\u002Fwww.netlify.com\u002Fdocs\u002Fbuild-settings\u002F#build-environment-variables) which can be read by your Nuxt application at build time.\n\nClick _\"Deploy site\"_ to immediately trigger a deploy. Your Netlify site will be assigned a random URL and deployed using the `nuxt generate` command.\n\nVoilà! Your Nuxt application is now hosted on Netlify!\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"deploy-nuxt-on-netlify"},children:[{type:a,value:"Deploy Nuxt on Netlify"}]},{type:a,value:c},{type:b,tag:e,props:{class:"d-heading-description"},children:[{type:a,value:A}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Deploying to "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.netlify.com",rel:[n,o,p],target:k},children:[{type:a,value:z}]},{type:a,value:" is a low friction option for getting a "},{type:b,tag:j,props:{},children:[{type:a,value:"statically generated"}]},{type:a,value:" Nuxt site online quickly."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The core of the process leverages the "},{type:b,tag:d,props:{},children:[{type:a,value:B}]},{type:a,value:"(\u003C= v2.12) command during deployment to build a static version of your Nuxt app into a "},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:" directory. The contents of this directory are then deployed to a production URL."}]},{type:a,value:c},{type:b,tag:"div",props:{className:["Promo__Video"]},children:[{type:a,value:v},{type:b,tag:"a",props:{href:"https:\u002F\u002Fexplorers.netlify.com\u002Flearn\u002Fget-started-with-nuxt\u002Fnuxt-generate-and-deploy",target:k},children:[{type:a,value:"\n    "},{type:b,tag:"p",props:{className:["Promo__Video__Icon"]},children:[{type:a,value:"\n      Watch a free lesson on "},{type:b,tag:"strong",props:{},children:[{type:a,value:"How to deploy Nuxt to Netlify"}]},{type:a,value:" on Jamstack Explorers\n    "}]},{type:a,value:v}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:C,props:{id:D},children:[{type:b,tag:f,props:{href:"#getting-started"},children:[{type:a,value:E}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Press the "},{type:b,tag:q,props:{},children:[{type:a,value:"\"New site from Git\""}]},{type:a,value:" button on the Netlify dashboard. Authenticate with your repository host, select a repository to deploy, and continue. You should land on step 3: "},{type:b,tag:q,props:{},children:[{type:a,value:"\"Build options, and deploy!\""}]}]},{type:a,value:c},{type:b,tag:C,props:{id:F},children:[{type:b,tag:f,props:{href:"#configure"},children:[{type:a,value:G}]}]},{type:a,value:c},{type:b,tag:H,props:{id:I},children:[{type:b,tag:f,props:{href:"#for-a-statically-generated-site"},children:[{type:a,value:J}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:K},{type:b,tag:d,props:{},children:[{type:a,value:L}]},{type:a,value:M},{type:b,tag:d,props:{},children:[{type:a,value:w}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:N,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:P}]},{type:a,value:Q},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:S}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:T}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:H,props:{id:U},children:[{type:b,tag:f,props:{href:"#for-client-side-rendering-only"},children:[{type:a,value:V}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:K},{type:b,tag:d,props:{},children:[{type:a,value:L}]},{type:a,value:" and "},{type:b,tag:d,props:{},children:[{type:a,value:"ssr: false"}]},{type:a,value:M},{type:b,tag:d,props:{},children:[{type:a,value:w}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:N,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:P}]},{type:a,value:Q},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:S}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:T}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"For client side rendering there is a problem with refresh as by default on Netlify the site redirects to "},{type:b,tag:q,props:{},children:[{type:a,value:"\"404 not found\""}]},{type:a,value:". For any pages that are not generated they will fallback to SPA mode and then if you refresh or share that link you will get Netlify's 404 page. This is because the pages that are not generated don't actually exist as they are actually a single page application so if you refresh this page you will get a 404 because the url for that page doesn't actually exist. By redirecting to the 404.html Nuxt will reload your page correctly in SPA fallback."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The easiest way to fix this is by adding a "},{type:b,tag:f,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#fallback"},children:[{type:a,value:"generate property"}]},{type:a,value:" in your "},{type:b,tag:d,props:{},children:[{type:a,value:w}]},{type:a,value:" and setting "},{type:b,tag:d,props:{},children:[{type:a,value:"fallback: true"}]},{type:a,value:". Then it will fallback to the generated 404.html when in SPA mode instead of Netlify's 404 page."}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-js","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:h,props:{className:[i,W,X]},children:[{type:a,value:"export"}]},{type:a,value:g},{type:b,tag:h,props:{className:[i,W,X]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:h,props:{className:[i,s]},children:[{type:a,value:Y}]},{type:a,value:"\n  generate"},{type:b,tag:h,props:{className:[i,Z]},children:[{type:a,value:_}]},{type:a,value:g},{type:b,tag:h,props:{className:[i,s]},children:[{type:a,value:Y}]},{type:a,value:"\n    fallback"},{type:b,tag:h,props:{className:[i,Z]},children:[{type:a,value:_}]},{type:a,value:g},{type:b,tag:h,props:{className:[i,"boolean"]},children:[{type:a,value:"true"}]},{type:a,value:v},{type:b,tag:h,props:{className:[i,s]},children:[{type:a,value:$}]},{type:a,value:c},{type:b,tag:h,props:{className:[i,s]},children:[{type:a,value:$}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If however you want to automatically apply headers and redirects of the application then there is a module for that, this is especially useful for when you have custom headers\u002Fredirects (in a "},{type:b,tag:d,props:{},children:[{type:a,value:"_headers"}]},{type:a,value:" or "},{type:b,tag:d,props:{},children:[{type:a,value:"_redirects"}]},{type:a,value:" file):"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fnetlify-files-module",rel:[n,o,p],target:k},children:[{type:a,value:"netlify-files-module"}]}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"For more information on Netlify redirects see the "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.netlify.com\u002Fdocs\u002Fredirects\u002F#rewrites-and-proxying",rel:[n,o,p],target:k},children:[{type:a,value:"Netlify docs"}]},{type:a,value:x}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"For simple reference on Netlify redirects read blog "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.netlify.com\u002Fblog\u002F2019\u002F01\u002F16\u002Fredirect-rules-for-all-how-to-configure-redirects-for-your-static-site",rel:[n,o,p],target:k},children:[{type:a,value:"post"}]},{type:a,value:" by Divya Sasidharan"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Optionally, you can add additional ENV variables via the "},{type:b,tag:q,props:{},children:[{type:a,value:"\"Advanced\""}]},{type:a,value:" button. These can be helpful for swapping in alternative API credentials and so on. Netlify also provides a "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.netlify.com\u002Fdocs\u002Fbuild-settings\u002F#build-environment-variables",rel:[n,o,p],target:k},children:[{type:a,value:"default ENV variables"}]},{type:a,value:" which can be read by your Nuxt application at build time."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Click "},{type:b,tag:q,props:{},children:[{type:a,value:"\"Deploy site\""}]},{type:a,value:" to immediately trigger a deploy. Your Netlify site will be assigned a random URL and deployed using the "},{type:b,tag:d,props:{},children:[{type:a,value:B}]},{type:a,value:" command."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Voilà! Your Nuxt application is now hosted on Netlify!"}]}]},toc:{title:aa,searchDepth:t,depth:t,links:[{id:D,depth:t,text:E},{id:F,depth:t,text:G,children:[{id:I,depth:ab,text:J},{id:U,depth:ab,text:V}]}]}}},templateOptions:{header:r,footer:r,aside:m,asideClass:aa,fluid:m,banner:r},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/DeveloperThomas.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F01e0e4.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png","/_ipx/https://github.com/MrJmpl3.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3e840f.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/mtlynch.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F525213.png","/_ipx/https://github.com/book000.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3838a1.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/meirroth.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe09bc9.png","/_ipx/https://github.com/Brettanda.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F25f97d.png","/_ipx/https://github.com/armgitaar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0c63ae.png","/_ipx/https://github.com/thomasbnt.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F9f568f.png","/_ipx/https://github.com/karur4n.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F8dcce9.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:ac,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:ad,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:ae,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:"Docs",subtitle:"Create fast websites easily",slug:"docs",to:af,icon:"docs.svg",color:"bg-green-500"},{title:ag,subtitle:"Understand everything in Nuxt",slug:"examples",to:ah,icon:"examples.svg",color:"bg-green-600"},{title:ai,subtitle:"Learn with concrete cases",slug:"tutorials",to:aj,icon:"tutorials.svg",color:"bg-green-700"},{title:ak,subtitle:"Learn more with experts",href:al,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:am,subtitle:"How to Deploy Nuxt",slug:"deployments",to:an,icon:"deployments.svg",color:"bg-indigo-light"},{title:ao,subtitle:"Extend the power of Nuxt",href:ap,icon:"modules.svg",color:"bg-indigo"},{title:aq,subtitle:"Get started with themes",slug:"themes",to:ar,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:as,subtitle:"Latest news about Nuxt",slug:"announcements",to:at,icon:"announcements.svg",color:"bg-mint-lighter"},{title:au,subtitle:"They are Nuxt",slug:"teams",to:av,icon:"teams.svg",color:"bg-mint-light"},{title:aw,subtitle:"All the code we have released",slug:"releases",to:ax,icon:"releases.svg",color:"bg-mint"},{title:ay,subtitle:"They trust us",slug:"sponsors",to:az,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aA}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aA},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:as,to:at},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:ay,to:az},{title:au,to:av},{title:ai,to:aj},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:af},{title:ag,to:ah},{title:am,to:an},{title:ak,href:al},{title:ao,href:ap},{title:aw,to:ax},{title:ac,to:ad},{title:aq,to:ar}]}],showCookieBanner:m},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Fen\u002Fdeployments\u002F1.netlify.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:aB,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:aB},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:aC,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:aC},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"DeveloperThomas"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:aD,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:aD},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"},{name:"José Manuel Casani Guerra",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21302114?u=8ea39b04340fe8c4ebd63b1097497e1bf0d1454f&v=4",login:"MrJmpl3"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=2998231cea5f2bd7268cba898c9a947cb1d525b8&v=4",login:"owlnai"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Michael Lynch",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7783288?u=b6d8f48d38d7a64cddc633db4cfcd6915b997794&v=4",login:"mtlynch"},{name:"Tomachi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8929706?u=bb51b21fd7735505d999e27f7340c5f886f4d9fe&v=4",login:"book000"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Meir Roth",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F12494197?u=7828b437d2bc2402a6e8a4edd9ada378139f4742&v=4",login:"meirroth"},{name:"Brett",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14969098?u=34d0910e6ded49668e2a114eedbc26ab7b5979e7&v=4",login:"Brettanda"},{name:"Adam Miedema",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F30202878?u=aad565699f6b02961c47297dc931e5179d9ff8e1&v=4",login:"armgitaar"},{name:"Thomas Bnt",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14293805?u=e3f70b334910b6cfd43ad99c9f5b0523c07bd38a&v=4",login:"thomasbnt"},{name:"Kazuki Furukawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6816398?v=4",login:"karur4n"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",ae,"HomeTestimonials","ProseEm","ProseHr","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link"])},mutations:[]}}("text","element","\n","prose-code-inline","prose-paragraph","prose-a"," ","span","token","prose-strong","_blank","prose-li",false,"nofollow","noopener","noreferrer","prose-em",true,"punctuation",2,"dist","\n  ","nuxt.config",".","prose-blockquote","Netlify","How to deploy Nuxt on Netlify?","nuxt generate","prose-h2","getting-started","Getting Started","configure","Configure:","prose-h3","for-a-statically-generated-site","For a statically generated site","Make sure you have ","target: 'static'","in your ","prose-ol","Branch to deploy:","main",", or which-ever branch you prefer","Build command:","npm run generate","Publish directory:","for-client-side-rendering-only","For client side rendering only","keyword","module","{","operator",":","}","",3,"Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners","Ayouli","felipesuri","syagawa")));