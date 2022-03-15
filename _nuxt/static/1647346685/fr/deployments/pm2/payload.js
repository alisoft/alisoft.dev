__NUXT_JSONP__("/fr/deployments/pm2", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as){return {data:[{page:{key:"content:fr:deployments:pm2.md",generatedAt:new Date(1647346766286),mtime:new Date(1647346766279),slug:"pm2",title:v,position:"999999990000",to:"\u002Fdeployments\u002Fpm2",draft:m,page:q,language:"fr",template:"Guide",description:w,target:"Server",category:"deployment",logo:{light:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002Fpm2.png",dark:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002Fpm2.png"},empty:m,excerpt:void 0,body:{raw:"---\ntemplate: guide\ntitle: PM2\ndescription: Comment déployer Nuxt avec le mode cluster PM2 activé ?\ntarget: Server\ncategory: deployment\nlogo:\n  light: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002Fpm2.png\"\n  dark: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002Fpm2.png\"\n---\n# Déployer Nuxt en utilisant PM2\n\nComment déployer Nuxt avec le mode cluster PM2 activé ?\n\n---\n\nLe déploiement à l'aide de [PM2](https:\u002F\u002Fpm2.keymetrics.io\u002F) (Process Manager 2) est une solution rapide et facile pour héberger votre application universelle Nuxt sur votre serveur ou votre VM.\n\nDans ce guide, nous construisons l'application localement et la servons via un fichier de configuration PM2 avec le mode cluster activé. Le mode cluster permet d'éviter les temps d'arrêt en permettant aux applications d'être mises à l'échelle sur plusieurs CPU.\n\n## Commencer\n\nAssurez-vous que pm2 est installé sur votre serveur. Si ce n'est pas le cas, installez-le simplement de façon globale à partir de yarn ou npm.\n\n```bash\n# yarn pm2 install\n$ sudo yarn global add pm2 --prefix \u002Fusr\u002Flocal\n\n# npm pm2 install\n$ npm install pm2 -g\n```\n\n## Configurer votre application\n\nTout ce que vous devez ajouter à votre application universelle Nuxt pour la servir via PM2 est un fichier appelé `ecosystem.config.js`. Créez un nouveau fichier avec ce nom dans le répertoire racine de votre projet et ajoutez le contenu suivant :\n\n```javascript\nmodule.exports = {\n  apps: [\n    {\n      name: 'NuxtAppName',\n      exec_mode: 'cluster',\n      instances: 'max', \u002F\u002F Ou un certain nombre d'instances\n      script: '.\u002Fnode_modules\u002Fnuxt\u002Fbin\u002Fnuxt.js',\n      args: 'start'\n    }\n  ]\n}\n```\n\n## Créer et servir l'application\n\nMaintenant, construisez votre application avec `npm run build`.\n\nEt le servir avec `pm2 start`.\n\nVérifier le statut `pm2 ls`.\n\nVotre application Nuxt est maintenant en service !\n\n## Informations complémentaires\n\nCette solution garantit l'absence de temps d'arrêt pour votre application sur ce serveur. Vous devez éviter les pannes de serveur par la redondance ou par des solutions de haute disponibilité en cloud.\n\nVous pouvez trouver des configurations supplémentaires de PM2 [ici](https:\u002F\u002Fpm2.keymetrics.io\u002Fdocs\u002Fusage\u002Fapplication-declaration\u002F#general).\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"déployer-nuxt-en-utilisant-pm2"},children:[{type:a,value:"Déployer Nuxt en utilisant PM2"}]},{type:a,value:e},{type:b,tag:f,props:{class:"d-heading-description"},children:[{type:a,value:w}]},{type:a,value:e},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Le déploiement à l'aide de "},{type:b,tag:j,props:{href:"https:\u002F\u002Fpm2.keymetrics.io\u002F",rel:[x,y,z],target:A},children:[{type:a,value:v}]},{type:a,value:" (Process Manager 2) est une solution rapide et facile pour héberger votre application universelle Nuxt sur votre serveur ou votre VM."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Dans ce guide, nous construisons l'application localement et la servons via un fichier de configuration PM2 avec le mode cluster activé. Le mode cluster permet d'éviter les temps d'arrêt en permettant aux applications d'être mises à l'échelle sur plusieurs CPU."}]},{type:a,value:e},{type:b,tag:r,props:{id:B},children:[{type:b,tag:j,props:{href:"#commencer"},children:[{type:a,value:C}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Assurez-vous que pm2 est installé sur votre serveur. Si ce n'est pas le cas, installez-le simplement de façon globale à partir de yarn ou npm."}]},{type:a,value:e},{type:b,tag:D,props:{},children:[{type:b,tag:E,props:{className:[F,"language-bash"]},children:[{type:b,tag:G,props:{},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"# yarn pm2 install"}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"sudo"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"yarn"}]},{type:a,value:" global "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"add"}]},{type:a,value:" pm2 --prefix \u002Fusr\u002Flocal\n\n"},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"# npm pm2 install"}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"npm"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"install"}]},{type:a,value:" pm2 -g\n"}]}]}]},{type:a,value:e},{type:b,tag:r,props:{id:I},children:[{type:b,tag:j,props:{href:"#configurer-votre-application"},children:[{type:a,value:J}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Tout ce que vous devez ajouter à votre application universelle Nuxt pour la servir via PM2 est un fichier appelé "},{type:b,tag:s,props:{},children:[{type:a,value:"ecosystem.config.js"}]},{type:a,value:". Créez un nouveau fichier avec ce nom dans le répertoire racine de votre projet et ajoutez le contenu suivant :"}]},{type:a,value:e},{type:b,tag:D,props:{},children:[{type:b,tag:E,props:{className:[F,"language-javascript"]},children:[{type:b,tag:G,props:{},children:[{type:a,value:"module"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,"property-access"]},children:[{type:a,value:"exports"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"="}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:K}]},{type:a,value:"\n  apps"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"["}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:K}]},{type:a,value:"\n      name"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'NuxtAppName'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:"\n      exec_mode"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'cluster'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:"\n      instances"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'max'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F Ou un certain nombre d'instances"}]},{type:a,value:"\n      script"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'.\u002Fnode_modules\u002Fnuxt\u002Fbin\u002Fnuxt.js'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:"\n      args"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'start'"}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"]"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:r,props:{id:N},children:[{type:b,tag:j,props:{href:"#cr%C3%A9er-et-servir-lapplication"},children:[{type:a,value:O}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Maintenant, construisez votre application avec "},{type:b,tag:s,props:{},children:[{type:a,value:"npm run build"}]},{type:a,value:o}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Et le servir avec "},{type:b,tag:s,props:{},children:[{type:a,value:"pm2 start"}]},{type:a,value:o}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Vérifier le statut "},{type:b,tag:s,props:{},children:[{type:a,value:"pm2 ls"}]},{type:a,value:o}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Votre application Nuxt est maintenant en service !"}]},{type:a,value:e},{type:b,tag:r,props:{id:P},children:[{type:b,tag:j,props:{href:"#informations-compl%C3%A9mentaires"},children:[{type:a,value:Q}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Cette solution garantit l'absence de temps d'arrêt pour votre application sur ce serveur. Vous devez éviter les pannes de serveur par la redondance ou par des solutions de haute disponibilité en cloud."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Vous pouvez trouver des configurations supplémentaires de PM2 "},{type:b,tag:j,props:{href:"https:\u002F\u002Fpm2.keymetrics.io\u002Fdocs\u002Fusage\u002Fapplication-declaration\u002F#general",rel:[x,y,z],target:A},children:[{type:a,value:"ici"}]},{type:a,value:o}]}]},toc:{title:R,searchDepth:l,depth:l,links:[{id:B,depth:l,text:C},{id:I,depth:l,text:J},{id:N,depth:l,text:O},{id:P,depth:l,text:Q}]}}},templateOptions:{header:q,footer:q,aside:m,asideClass:R,fluid:m,banner:q},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/DeveloperThomas.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F01e0e4.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png","/_ipx/https://github.com/MrJmpl3.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3e840f.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/mtlynch.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F525213.png","/_ipx/https://github.com/book000.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3838a1.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/meirroth.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe09bc9.png","/_ipx/https://github.com/Brettanda.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F25f97d.png","/_ipx/https://github.com/armgitaar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0c63ae.png","/_ipx/https://github.com/thomasbnt.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F9f568f.png","/_ipx/https://github.com/karur4n.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F8dcce9.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Découvrir",items:[{title:S,subtitle:"Sélection de sites créés avec Nuxt",slug:"showcases",to:T,icon:"showcases.svg",color:"bg-sand"},{title:"Étude de cas",subtitle:"Comment Nuxt est utilisé par les entreprises",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Témoignages",subtitle:"Ce qu'ils pensent de nous",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Apprendre",items:[{title:"Docs",subtitle:"Créez un site web facilement",slug:"docs",to:U,icon:"docs.svg",color:"bg-green-500"},{title:V,subtitle:"Comprendre tout sur Nuxt",slug:"examples",to:W,icon:"examples.svg",color:"bg-green-600"},{title:X,subtitle:"Apprenez avec des cas concrets",slug:"tutorials",to:Y,icon:"tutorials.svg",color:"bg-green-700"},{title:Z,subtitle:"Apprenez en plus grâce aux experts",href:_,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explorer",items:[{title:$,subtitle:"Comment déployer Nuxt",slug:"deployments",to:aa,icon:"deployments.svg",color:"bg-indigo-light"},{title:ab,subtitle:"Toute la puissance de Nuxt",href:ac,icon:"modules.svg",color:"bg-indigo"},{title:ad,subtitle:"Commencez avec les thèmes",slug:"themes",to:ae,icon:"themes.svg",color:"bg-indigo-dark"},{title:af,subtitle:"Apprendre étape par étape",slug:"video-courses",to:ag,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Communauté",items:[{title:ah,subtitle:"Les dernières nouvelles concernant Nuxt",slug:"announcements",to:ai,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aj,subtitle:"Nous sommes Nuxt",slug:"teams",to:ak,icon:"teams.svg",color:"bg-mint-light"},{title:al,subtitle:"Tout le code que nous avons publié",slug:"releases",to:am,icon:"releases.svg",color:"bg-mint"},{title:an,subtitle:"Ils croient en nous",slug:"sponsors",to:ao,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partenaires",slug:"partners",to:ap}],footerLinks:[{title:"À propos",items:[{title:"Nous contacter",href:"mailto:hello@nuxtjs.com"},{title:"Support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open source softwares",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partenariat",href:ap},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Écosystème",items:[{title:ah,to:ai},{title:"Contribuer",to:"\u002Fcontribution-guide"},{title:"Discutez avec nous",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Événements",to:"\u002Fevents"},{title:an,to:ao},{title:aj,to:ak},{title:X,to:Y},{title:af,to:ag}]},{title:"Ressources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:U},{title:V,to:W},{title:$,to:aa},{title:Z,href:_},{title:ab,href:ac},{title:al,to:am},{title:S,to:T},{title:ad,to:ae}]}],showCookieBanner:m},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Ffr\u002Fdeployments\u002Fpm2.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:aq,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:aq},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:ar,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:ar},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"DeveloperThomas"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:as,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:as},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"},{name:"José Manuel Casani Guerra",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21302114?u=8ea39b04340fe8c4ebd63b1097497e1bf0d1454f&v=4",login:"MrJmpl3"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=2998231cea5f2bd7268cba898c9a947cb1d525b8&v=4",login:"owlnai"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Michael Lynch",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7783288?u=b6d8f48d38d7a64cddc633db4cfcd6915b997794&v=4",login:"mtlynch"},{name:"Tomachi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8929706?u=bb51b21fd7735505d999e27f7340c5f886f4d9fe&v=4",login:"book000"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Meir Roth",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F12494197?u=7828b437d2bc2402a6e8a4edd9ada378139f4742&v=4",login:"meirroth"},{name:"Brett",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14969098?u=34d0910e6ded49668e2a114eedbc26ab7b5979e7&v=4",login:"Brettanda"},{name:"Adam Miedema",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F30202878?u=aad565699f6b02961c47297dc931e5179d9ff8e1&v=4",login:"armgitaar"},{name:"Thomas Bnt",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14293805?u=e3f70b334910b6cfd43ad99c9f5b0523c07bd38a&v=4",login:"thomasbnt"},{name:"Kazuki Furukawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6816398?v=4",login:"karur4n"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","ProseEm","HomeLearnMaster","SectionContentItem","ProseHr","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable"])},mutations:[]}}("text","element","span","token","\n","prose-paragraph"," ","punctuation","operator","prose-a",":",2,false,"function",".","string",true,"prose-h2","prose-code-inline",",","comment","PM2","Comment déployer Nuxt avec le mode cluster PM2 activé ?","nofollow","noopener","noreferrer","_blank","commencer","Commencer","prose-code","pre","line-numbers","code","\n$ ","configurer-votre-application","Configurer votre application","{","\n    ","}","créer-et-servir-lapplication","Créer et servir l'application","informations-complémentaires","Informations complémentaires","","Showcases","\u002Fshowcases","\u002Fdocs","Exemples","\u002Fexamples","Tutoriels","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Déploiements","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Thèmes","\u002Fthemes","Cours vidéo","\u002Fvideo-courses","Annonces","\u002Fannouncements","Équipes","\u002Fteams","Notes de version","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners","Ayouli","felipesuri","syagawa")));