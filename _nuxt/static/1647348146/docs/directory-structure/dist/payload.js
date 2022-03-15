__NUXT_JSONP__("/docs/directory-structure/dist", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB){return {data:[{page:{key:"content:en:docs:4.directory-structure:5.dist.md",generatedAt:new Date(1647348393659),mtime:new Date(1647348393636),slug:r,title:I,position:"999900040005",to:"\u002Fdocs\u002Fdirectory-structure\u002Fdist",draft:s,page:k,language:"en",navigation:{title:r},description:"The dist folder, short for distribution folder, is dynamically generated when using the nuxt generate commands and includes the generated production ready HTML files and assets that are necessary to deploy and run your statically generated Nuxt application.",category:"directory-structure",csb_link:"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F04_directory_structure\u002F05_dist?fontsize=14&hidenavigation=1&theme=dark",empty:s,excerpt:void 0,body:{raw:"---\ntitle: Dist directory\nnavigation.title: dist\ndescription: The dist folder, short for distribution folder, is dynamically generated when using the nuxt generate commands and includes the generated production ready HTML files and assets that are necessary to deploy and run your statically generated Nuxt application.\ncategory: directory-structure\ncsb_link: https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F04_directory_structure\u002F05_dist?fontsize=14&hidenavigation=1&theme=dark\n---\n# Dist directory\n\nThe `dist` folder, short for *distribution* folder, is dynamically generated when using the `nuxt generate` commands and includes the generated production ready HTML files and assets that are necessary to deploy and run your statically generated Nuxt application.\n\n---\n\n### Deploying\n\nThis is the folder you need to **upload for static hosting** as it contains your generated production ready HTML files and assets\n\n::alert{type=\"warning\"}\nThe `dist` directory should not be committed to your version control system and should be ignored through your `.gitignore` as it will be generated automatically every time you run `nuxt generate`.\n::\n\n### The dir property\n\nThe dist folder is named dist by default but can be configured in your nuxt.config file.\n\n```js{}[nuxt.config.js]\ngenerate: {\n  dir: 'my-site'\n}\n```\n\n::alert{type=\"warning\"}\nIf you do change your dist folder then you will need to add that to your version control so that git will ignore it.\n::\n\n### The subFolders Property\n\nNuxt puts all your generated pages inside a folder by default, however you can change this if you want by modifying the nuxt.config and changing the subFolders to be false.\n\n```js{}[nuxt.config.js]\ngenerate: {\n  subFolders: false\n}\n```\n\n### The fallback Property\n\nWhen deploying your site you will need to make sure the fallback HTML path is set correctly. It should be set as the error page so that unknown routes are rendered via Nuxt. If it is unset Nuxt will use the default value which is 200.html.\n\nWhen running a single page application it makes more sense to use 200.html as it is the only file necessary as no other routes are generated.\n\nWhen working with statically generated pages it is recommended to use a 404.html for error pages.\n\n::alert{type=\"warning\"}\nDepending on where you are hosting your site, you may have to use 200.html or 404.html. Please check with your hosting provider. Netlify, for example uses 404.html.\n::\n\n```js{}[nuxt.config.js]\nexport default {\n  generate: {\n    fallback: '404.html'\n  }\n}\n```\n\n### The excludes property\n\nYou can exclude pages from being generated by using the generate excludes property. Instead of being generated as a static page it will fallback to be a single page application page and will only be rendered on the client side.\n\n```js{}[nuxt.config.js]\ngenerate: {\n  exclude: [\u002Fadmin\u002F]\n}\n```\n\n::alert{type=\"info\"}\nYou can also use a regex expression here to exclude pages starting or ending with a particular word\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"dist-directory"},children:[{type:a,value:I}]},{type:a,value:d},{type:b,tag:f,props:{class:"d-heading-description"},children:[{type:a,value:J},{type:b,tag:l,props:{},children:[{type:a,value:r}]},{type:a,value:" folder, short for "},{type:b,tag:"prose-em",props:{},children:[{type:a,value:"distribution"}]},{type:a,value:" folder, is dynamically generated when using the "},{type:b,tag:l,props:{},children:[{type:a,value:K}]},{type:a,value:" commands and includes the generated production ready HTML files and assets that are necessary to deploy and run your statically generated Nuxt application."}]},{type:a,value:d},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:d},{type:b,tag:m,props:{id:L},children:[{type:b,tag:n,props:{href:"#deploying"},children:[{type:a,value:M}]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"This is the folder you need to "},{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"upload for static hosting"}]},{type:a,value:" as it contains your generated production ready HTML files and assets"}]},{type:a,value:d},{type:b,tag:t,props:{type:D},children:[{type:b,tag:f,props:{},children:[{type:a,value:J},{type:b,tag:l,props:{},children:[{type:a,value:r}]},{type:a,value:" directory should not be committed to your version control system and should be ignored through your "},{type:b,tag:l,props:{},children:[{type:a,value:".gitignore"}]},{type:a,value:" as it will be generated automatically every time you run "},{type:b,tag:l,props:{},children:[{type:a,value:K}]},{type:a,value:"."}]}]},{type:a,value:d},{type:b,tag:m,props:{id:N},children:[{type:b,tag:n,props:{href:"#the-dir-property"},children:[{type:a,value:O}]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"The dist folder is named dist by default but can be configured in your nuxt.config file."}]},{type:a,value:d},{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[v]},children:[{type:a,value:w}]},{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:a,value:E},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:o}]},{type:a,value:"\n  dir"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[e,P]},children:[{type:a,value:"'my-site'"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:p}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:t,props:{type:D},children:[{type:b,tag:f,props:{},children:[{type:a,value:"If you do change your dist folder then you will need to add that to your version control so that git will ignore it."}]}]},{type:a,value:d},{type:b,tag:m,props:{id:Q},children:[{type:b,tag:n,props:{href:"#the-subfolders-property"},children:[{type:a,value:R}]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"Nuxt puts all your generated pages inside a folder by default, however you can change this if you want by modifying the nuxt.config and changing the subFolders to be false."}]},{type:a,value:d},{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[v]},children:[{type:a,value:w}]},{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:a,value:E},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:o}]},{type:a,value:"\n  subFolders"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[e,"boolean"]},children:[{type:a,value:"false"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:p}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:m,props:{id:S},children:[{type:b,tag:n,props:{href:"#the-fallback-property"},children:[{type:a,value:T}]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"When deploying your site you will need to make sure the fallback HTML path is set correctly. It should be set as the error page so that unknown routes are rendered via Nuxt. If it is unset Nuxt will use the default value which is 200.html."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"When running a single page application it makes more sense to use 200.html as it is the only file necessary as no other routes are generated."}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"When working with statically generated pages it is recommended to use a 404.html for error pages."}]},{type:a,value:d},{type:b,tag:t,props:{type:D},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Depending on where you are hosting your site, you may have to use 200.html or 404.html. Please check with your hosting provider. Netlify, for example uses 404.html."}]}]},{type:a,value:d},{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[v]},children:[{type:a,value:w}]},{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[e,U,V]},children:[{type:a,value:"export"}]},{type:a,value:h},{type:b,tag:c,props:{className:[e,U,V]},children:[{type:a,value:"default"}]},{type:a,value:h},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:o}]},{type:a,value:"\n  generate"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:o}]},{type:a,value:"\n    fallback"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[e,P]},children:[{type:a,value:"'404.html'"}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:p}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:p}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:m,props:{id:W},children:[{type:b,tag:n,props:{href:"#the-excludes-property"},children:[{type:a,value:X}]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"You can exclude pages from being generated by using the generate excludes property. Instead of being generated as a static page it will fallback to be a single page application page and will only be rendered on the client side."}]},{type:a,value:d},{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[v]},children:[{type:a,value:w}]},{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:a,value:E},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:o}]},{type:a,value:"\n  exclude"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[e,"regex"]},children:[{type:b,tag:c,props:{className:[e,Y]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[e,"regex-source","language-regex"]},children:[{type:a,value:"admin"}]},{type:b,tag:c,props:{className:[e,Y]},children:[{type:a,value:Z}]}]},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:"]"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:p}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:t,props:{type:"info"},children:[{type:b,tag:f,props:{},children:[{type:a,value:"You can also use a regex expression here to exclude pages starting or ending with a particular word"}]}]}]},toc:{title:_,searchDepth:$,depth:$,links:[{id:L,depth:q,text:M},{id:N,depth:q,text:O},{id:Q,depth:q,text:R},{id:S,depth:q,text:T},{id:W,depth:q,text:X}]}},template:aa},templateOptions:{header:k,footer:k,aside:k,asideClass:_,fluid:s,banner:k},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/DeveloperThomas.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F01e0e4.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png","/_ipx/https://github.com/MrJmpl3.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3e840f.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/mtlynch.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F525213.png","/_ipx/https://github.com/book000.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3838a1.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/meirroth.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe09bc9.png","/_ipx/https://github.com/Brettanda.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F25f97d.png","/_ipx/https://github.com/armgitaar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0c63ae.png","/_ipx/https://github.com/thomasbnt.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F9f568f.png","/_ipx/https://github.com/karur4n.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F8dcce9.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:ab,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:ac,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:ad,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:aa,subtitle:"Create fast websites easily",slug:"docs",to:ae,icon:"docs.svg",color:"bg-green-500"},{title:af,subtitle:"Understand everything in Nuxt",slug:"examples",to:ag,icon:"examples.svg",color:"bg-green-600"},{title:ah,subtitle:"Learn with concrete cases",slug:"tutorials",to:ai,icon:"tutorials.svg",color:"bg-green-700"},{title:B,subtitle:F,href:C,icon:G,color:H}]},{title:"Explore",items:[{title:aj,subtitle:"How to Deploy Nuxt",slug:"deployments",to:ak,icon:"deployments.svg",color:"bg-indigo-light"},{title:al,subtitle:"Extend the power of Nuxt",href:am,icon:"modules.svg",color:"bg-indigo"},{title:an,subtitle:"Get started with themes",slug:"themes",to:ao,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:ap,subtitle:"Latest news about Nuxt",slug:"announcements",to:aq,icon:"announcements.svg",color:"bg-mint-lighter"},{title:ar,subtitle:"They are Nuxt",slug:"teams",to:as,icon:"teams.svg",color:"bg-mint-light"},{title:at,subtitle:"All the code we have released",slug:"releases",to:au,icon:"releases.svg",color:"bg-mint"},{title:av,subtitle:"They trust us",slug:"sponsors",to:aw,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:ax}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:ax},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:ap,to:aq},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:av,to:aw},{title:ar,to:as},{title:ah,to:ai},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:ae},{title:af,to:ag},{title:aj,to:ak},{title:B,href:C},{title:al,href:am},{title:at,to:au},{title:ab,to:ac},{title:an,to:ao}]}],showCookieBanner:s},"AsideBottom:0":{lastRelease:ay,masterCoursesLink:{title:B,subtitle:F,href:C,icon:G,color:H}},"AsideBottom:1":{lastRelease:ay,masterCoursesLink:{title:B,subtitle:F,href:C,icon:G,color:H}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org",prev:{slug:"content",to:"\u002Fdocs\u002Fdirectory-structure\u002Fcontent",title:"Content directory"},next:{slug:"layouts",to:"\u002Fdocs\u002Fdirectory-structure\u002Flayouts",title:"Layouts directory"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Fen\u002Fdocs\u002F4.directory-structure\u002F5.dist.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:az,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:az},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:aA,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:aA},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"DeveloperThomas"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:aB,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:aB},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"},{name:"José Manuel Casani Guerra",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21302114?u=8ea39b04340fe8c4ebd63b1097497e1bf0d1454f&v=4",login:"MrJmpl3"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=2998231cea5f2bd7268cba898c9a947cb1d525b8&v=4",login:"owlnai"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Michael Lynch",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7783288?u=b6d8f48d38d7a64cddc633db4cfcd6915b997794&v=4",login:"mtlynch"},{name:"Tomachi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8929706?u=bb51b21fd7735505d999e27f7340c5f886f4d9fe&v=4",login:"book000"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Meir Roth",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F12494197?u=7828b437d2bc2402a6e8a4edd9ada378139f4742&v=4",login:"meirroth"},{name:"Brett",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14969098?u=34d0910e6ded49668e2a114eedbc26ab7b5979e7&v=4",login:"Brettanda"},{name:"Adam Miedema",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F30202878?u=aad565699f6b02961c47297dc931e5179d9ff8e1&v=4",login:"armgitaar"},{name:"Thomas Bnt",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14293805?u=e3f70b334910b6cfd43ad99c9f5b0523c07bd38a&v=4",login:"thomasbnt"},{name:"Kazuki Furukawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6816398?v=4",login:"karur4n"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",ad,"HomeTestimonials","ProseEm","ProseHr","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","span","\n","token","prose-paragraph","punctuation"," ","operator",":",true,"prose-code-inline","prose-h3","prose-a","{","}",3,"dist",false,"alert","prose-code","filename","nuxt.config.js","pre","language-js","line-numbers","code","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","warning","generate","Learn more with experts","master-courses.svg","bg-green-800","Dist directory","The ","nuxt generate","deploying","Deploying","the-dir-property","The dir property","string","the-subfolders-property","The subFolders Property","the-fallback-property","The fallback Property","keyword","module","the-excludes-property","The excludes property","regex-delimiter","\u002F","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners","v2.15.8","Ayouli","felipesuri","syagawa")));