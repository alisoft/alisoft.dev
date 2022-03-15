__NUXT_JSONP__("/fr/docs/configuration-glossary/configuration-telemetry", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az){return {data:[{page:{key:"content:fr:docs:5.configuration-glossary:32.configuration-telemetry.md",generatedAt:new Date(1647348412822),mtime:new Date(1647348412812),slug:"configuration-telemetry",title:H,position:"999900050032",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-telemetry",draft:s,page:l,language:"fr",navigation:{title:I},description:J,menu:I,category:"configuration-glossary",empty:s,excerpt:void 0,body:{raw:"---\ntitle: La propriété telemetry\nnavigation.title: telemetry\ndescription: Nuxt collecte de la télémétrie anonyme à propos de l'usage général. Cela aide l'équipe à gauger précisément l'usage des fonctionnalités de Nuxt et la personnalisation répartie sur tous les utilisateurs.\nmenu: telemetry\ncategory: configuration-glossary\n---\n\n# La propriété telemetry\n\nNuxt collecte de la télémétrie anonyme à propos de l'usage général. Cela aide l'équipe à gauger précisément l'usage des fonctionnalités de Nuxt et la personnalisation répartie sur tous les utilisateurs.\n\n---\n\n## La propriété de télémétrie\n\n\u003E Depuis la version 2.13.0, Nuxt collecte de la télémétrie **anonyme** à propos de l'usage général. Cela aide l'équipe à gauger précisément l'usage des fonctionnalités de Nuxt et la personnalisation répartie sur tous les utilisateurs.\n\n- Type: `Boolean`\n- Par défaut: basé sur les préférences de l'utilisateur\n\n## Pourquoi collecter de la télémétrie ?\n\nNuxt a beaucoup grandi depuis sa [publication initiale](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Freleases\u002Ftag\u002Fv0.2.0) (7 Nov 2016) et l'équipe fait toujours attention au [feedback de la communauté](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fissues) pour améliorer le framework.\n\nCe processus manuel récupère le feedback de seulement certains utilisateurs: ceux qui prennent le temps de remplir l'issue template et qui ont des besoins ou des utilisations différents des nôtres.\n\nPlusieurs events sont intéressants:\n\n- commandes invoquées (`nuxt dev`, `nuxt build`, etc)\n- versions de Nuxt et de Node.js\n- informations générales sur la machine (MacOs\u002FLinux\u002FWindows et le nom de la CI si la commande est executé dans ce contexte là)\n- durée du build Webpack ainsi que taille moyenne de l'application, ainsi que les statistiques de la génération (lors d'un `nuxt generate`)\n- quelles sont les dépendances publiques du projet (Nuxt modules)\n\nLe code est open source et disponible ici: https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry.\n\n## Opt out\n\nOn peut désactiver la [télémétrie](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry) pour notre projet de plusieurs façons:\n\n1. En utilisant `npx nuxt telemetry disable`\n\n```bash\nnpx nuxt telemetry [status|enable|disable] [-g,--global] [dir]\n```\n\n2. En utilisant une variable d'environnement\n\n```bash\nNUXT_TELEMETRY_DISABLED=1\n```\n\n3. En définissant `telemetry: false` dans notre fichier `nuxt.config.js`:\n\n```js{}[nuxt.config.js]\nexport default {\n  telemetry: false\n}\n```\n\nPour plus d'informations sur la télémétrie de Nuxt et les events envoyés, voir [Nuxt Telemetry](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry).\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"la-propriété-telemetry"},children:[{type:a,value:H}]},{type:a,value:c},{type:b,tag:g,props:{class:"d-heading-description"},children:[{type:a,value:J}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:w,props:{id:K},children:[{type:b,tag:h,props:{href:"#la-propri%C3%A9t%C3%A9-de-t%C3%A9l%C3%A9m%C3%A9trie"},children:[{type:a,value:L}]}]},{type:a,value:c},{type:b,tag:"prose-blockquote",props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Depuis la version 2.13.0, Nuxt collecte de la télémétrie "},{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"anonyme"}]},{type:a,value:" à propos de l'usage général. Cela aide l'équipe à gauger précisément l'usage des fonctionnalités de Nuxt et la personnalisation répartie sur tous les utilisateurs."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:M,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"Type: "},{type:b,tag:j,props:{},children:[{type:a,value:"Boolean"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"Par défaut: basé sur les préférences de l'utilisateur"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:w,props:{id:N},children:[{type:b,tag:h,props:{href:"#pourquoi-collecter-de-la-t%C3%A9l%C3%A9m%C3%A9trie-"},children:[{type:a,value:O}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt a beaucoup grandi depuis sa "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Freleases\u002Ftag\u002Fv0.2.0",rel:[m,n,o],target:p},children:[{type:a,value:"publication initiale"}]},{type:a,value:" (7 Nov 2016) et l'équipe fait toujours attention au "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fissues",rel:[m,n,o],target:p},children:[{type:a,value:"feedback de la communauté"}]},{type:a,value:" pour améliorer le framework."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Ce processus manuel récupère le feedback de seulement certains utilisateurs: ceux qui prennent le temps de remplir l'issue template et qui ont des besoins ou des utilisations différents des nôtres."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Plusieurs events sont intéressants:"}]},{type:a,value:c},{type:b,tag:M,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"commandes invoquées ("},{type:b,tag:j,props:{},children:[{type:a,value:"nuxt dev"}]},{type:a,value:", "},{type:b,tag:j,props:{},children:[{type:a,value:"nuxt build"}]},{type:a,value:", etc)"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"versions de Nuxt et de Node.js"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"informations générales sur la machine (MacOs\u002FLinux\u002FWindows et le nom de la CI si la commande est executé dans ce contexte là)"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"durée du build Webpack ainsi que taille moyenne de l'application, ainsi que les statistiques de la génération (lors d'un "},{type:b,tag:j,props:{},children:[{type:a,value:"nuxt generate"}]},{type:a,value:")"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"quelles sont les dépendances publiques du projet (Nuxt modules)"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Le code est open source et disponible ici: "},{type:b,tag:h,props:{href:q,rel:[m,n,o],target:p},children:[{type:a,value:q}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:w,props:{id:Q},children:[{type:b,tag:h,props:{href:"#opt-out"},children:[{type:a,value:R}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"On peut désactiver la "},{type:b,tag:h,props:{href:q,rel:[m,n,o],target:p},children:[{type:a,value:"télémétrie"}]},{type:a,value:" pour notre projet de plusieurs façons:"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"En utilisant "},{type:b,tag:j,props:{},children:[{type:a,value:"npx nuxt telemetry disable"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:b,tag:z,props:{className:[A,S]},children:[{type:b,tag:B,props:{},children:[{type:a,value:"npx nuxt telemetry "},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:C}]},{type:a,value:"status"},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:T}]},{type:b,tag:d,props:{className:[e,"builtin","class-name"]},children:[{type:a,value:"enable"}]},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:T}]},{type:a,value:"disable"},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:D}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:C}]},{type:a,value:"-g,--global"},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:D}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:C}]},{type:a,value:"dir"},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:D}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:x,props:{start:k},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"En utilisant une variable d'environnement"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:b,tag:z,props:{className:[A,S]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:d,props:{className:[e,"assign-left","variable"]},children:[{type:a,value:"NUXT_TELEMETRY_DISABLED"}]},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:"="}]},{type:b,tag:d,props:{className:[e,"number"]},children:[{type:a,value:"1"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:x,props:{start:3},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"En définissant "},{type:b,tag:j,props:{},children:[{type:a,value:"telemetry: false"}]},{type:a,value:" dans notre fichier "},{type:b,tag:j,props:{},children:[{type:a,value:U}]},{type:a,value:V},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:b,tag:d,props:{className:["filename"]},children:[{type:a,value:U}]},{type:b,tag:z,props:{className:[A,"language-js"]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:d,props:{className:[e,W,X]},children:[{type:a,value:"export"}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,W,X]},children:[{type:a,value:"default"}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"{"}]},{type:a,value:"\n  telemetry"},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:V}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,"boolean"]},children:[{type:a,value:"false"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"}"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Pour plus d'informations sur la télémétrie de Nuxt et les events envoyés, voir "},{type:b,tag:h,props:{href:q,rel:[m,n,o],target:p},children:[{type:a,value:"Nuxt Telemetry"}]},{type:a,value:P}]}]},toc:{title:Y,searchDepth:k,depth:k,links:[{id:K,depth:k,text:L},{id:N,depth:k,text:O},{id:Q,depth:k,text:R}]}},template:Z},templateOptions:{header:l,footer:l,aside:l,asideClass:Y,fluid:s,banner:l},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/DeveloperThomas.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F01e0e4.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png","/_ipx/https://github.com/MrJmpl3.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3e840f.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/mtlynch.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F525213.png","/_ipx/https://github.com/book000.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3838a1.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/meirroth.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe09bc9.png","/_ipx/https://github.com/Brettanda.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F25f97d.png","/_ipx/https://github.com/armgitaar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0c63ae.png","/_ipx/https://github.com/thomasbnt.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F9f568f.png","/_ipx/https://github.com/karur4n.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F8dcce9.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Découvrir",items:[{title:_,subtitle:"Sélection de sites créés avec Nuxt",slug:"showcases",to:$,icon:"showcases.svg",color:"bg-sand"},{title:"Étude de cas",subtitle:"Comment Nuxt est utilisé par les entreprises",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Témoignages",subtitle:"Ce qu'ils pensent de nous",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Apprendre",items:[{title:Z,subtitle:"Créez un site web facilement",slug:"docs",to:aa,icon:"docs.svg",color:"bg-green-500"},{title:ab,subtitle:"Comprendre tout sur Nuxt",slug:"examples",to:ac,icon:"examples.svg",color:"bg-green-600"},{title:ad,subtitle:"Apprenez avec des cas concrets",slug:"tutorials",to:ae,icon:"tutorials.svg",color:"bg-green-700"},{title:u,subtitle:E,href:v,icon:F,color:G}]},{title:"Explorer",items:[{title:af,subtitle:"Comment déployer Nuxt",slug:"deployments",to:ag,icon:"deployments.svg",color:"bg-indigo-light"},{title:ah,subtitle:"Toute la puissance de Nuxt",href:ai,icon:"modules.svg",color:"bg-indigo"},{title:aj,subtitle:"Commencez avec les thèmes",slug:"themes",to:ak,icon:"themes.svg",color:"bg-indigo-dark"},{title:al,subtitle:"Apprendre étape par étape",slug:"video-courses",to:am,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Communauté",items:[{title:an,subtitle:"Les dernières nouvelles concernant Nuxt",slug:"announcements",to:ao,icon:"announcements.svg",color:"bg-mint-lighter"},{title:ap,subtitle:"Nous sommes Nuxt",slug:"teams",to:aq,icon:"teams.svg",color:"bg-mint-light"},{title:ar,subtitle:"Tout le code que nous avons publié",slug:"releases",to:as,icon:"releases.svg",color:"bg-mint"},{title:at,subtitle:"Ils croient en nous",slug:"sponsors",to:au,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partenaires",slug:"partners",to:av}],footerLinks:[{title:"À propos",items:[{title:"Nous contacter",href:"mailto:hello@nuxtjs.com"},{title:"Support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open source softwares",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partenariat",href:av},{title:"Telemetry",href:q}]},{title:"Écosystème",items:[{title:an,to:ao},{title:"Contribuer",to:"\u002Fcontribution-guide"},{title:"Discutez avec nous",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Événements",to:"\u002Fevents"},{title:at,to:au},{title:ap,to:aq},{title:ad,to:ae},{title:al,to:am}]},{title:"Ressources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aa},{title:ab,to:ac},{title:af,to:ag},{title:u,href:v},{title:ah,href:ai},{title:ar,to:as},{title:_,to:$},{title:aj,to:ak}]}],showCookieBanner:s},"AsideBottom:0":{lastRelease:aw,masterCoursesLink:{title:u,subtitle:E,href:v,icon:F,color:G}},"AsideBottom:1":{lastRelease:aw,masterCoursesLink:{title:u,subtitle:E,href:v,icon:F,color:G}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org",prev:{slug:"configuration-target",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-target",title:"La propriété target"},next:{slug:"configuration-transition",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-transition",title:"Les propriétés de transition"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Ffr\u002Fdocs\u002F5.configuration-glossary\u002F32.configuration-telemetry.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:ax,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:ax},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:ay,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:ay},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"DeveloperThomas"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:az,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:az},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"},{name:"José Manuel Casani Guerra",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21302114?u=8ea39b04340fe8c4ebd63b1097497e1bf0d1454f&v=4",login:"MrJmpl3"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=2998231cea5f2bd7268cba898c9a947cb1d525b8&v=4",login:"owlnai"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Michael Lynch",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7783288?u=b6d8f48d38d7a64cddc633db4cfcd6915b997794&v=4",login:"mtlynch"},{name:"Tomachi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8929706?u=bb51b21fd7735505d999e27f7340c5f886f4d9fe&v=4",login:"book000"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Meir Roth",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F12494197?u=7828b437d2bc2402a6e8a4edd9ada378139f4742&v=4",login:"meirroth"},{name:"Brett",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14969098?u=34d0910e6ded49668e2a114eedbc26ab7b5979e7&v=4",login:"Brettanda"},{name:"Adam Miedema",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F30202878?u=aad565699f6b02961c47297dc931e5179d9ff8e1&v=4",login:"armgitaar"},{name:"Thomas Bnt",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14293805?u=e3f70b334910b6cfd43ad99c9f5b0523c07bd38a&v=4",login:"thomasbnt"},{name:"Kazuki Furukawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6816398?v=4",login:"karur4n"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseEm","ProseHr","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","\n","span","token","prose-li","prose-paragraph","prose-a","punctuation","prose-code-inline",2,true,"nofollow","noopener","noreferrer","_blank","https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"," ",false,"operator","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-h2","prose-ol","prose-code","pre","line-numbers","code","[","]","Apprenez en plus grâce aux experts","master-courses.svg","bg-green-800","La propriété telemetry","telemetry","Nuxt collecte de la télémétrie anonyme à propos de l'usage général. Cela aide l'équipe à gauger précisément l'usage des fonctionnalités de Nuxt et la personnalisation répartie sur tous les utilisateurs.","la-propriété-de-télémétrie","La propriété de télémétrie","prose-ul","pourquoi-collecter-de-la-télémétrie-","Pourquoi collecter de la télémétrie ?",".","opt-out","Opt out","language-bash","|","nuxt.config.js",":","keyword","module","","Docs","Showcases","\u002Fshowcases","\u002Fdocs","Exemples","\u002Fexamples","Tutoriels","\u002Ftutorials","Déploiements","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Thèmes","\u002Fthemes","Cours vidéo","\u002Fvideo-courses","Annonces","\u002Fannouncements","Équipes","\u002Fteams","Notes de version","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners","v2.15.8","Ayouli","felipesuri","syagawa")));