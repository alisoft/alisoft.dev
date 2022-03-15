__NUXT_JSONP__("/fr/deployments/netlify", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE){return {data:[{page:{key:"content:fr:deployments:1.netlify.md",generatedAt:new Date(1647348232273),mtime:new Date(1647348232263),slug:"netlify",title:A,position:"999900010000",to:"\u002Fdeployments\u002Fnetlify",draft:m,page:r,language:"fr",template:"Guide",description:B,target:"Static",category:"deployment",logo:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002Fnetlify.svg",empty:m,excerpt:void 0,body:{raw:"---\ntemplate: guide\ntitle: Netlify\ndescription: Comment déployer Nuxt sur Netlify ?\ntarget: Static\ncategory: deployment\nlogo: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002Fnetlify.svg\"\n---\n\n# Déployer Nuxt sur Netlify\n\nComment déployer Nuxt sur Netlify ?\n\n---\n\nLe déploiement sur [Netlify](https:\u002F\u002Fwww.netlify.com) est une option simple et rapide afin de mettre en ligne un site **généré statiquement** avec Nuxt.\n\nLe cœur du processus utilise la commande `nuxt generate`(\u003C= v2.12) pendant le déploiement pour créer une version statique de votre application Nuxt dans un répertoire `dist`. Le contenu de ce répertoire est ensuite déployé sur une URL de production.\n\n\u003Cdiv class=\"Promo__Video\"\u003E\n  \u003Ca href=\"https:\u002F\u002Fexplorers.netlify.com\u002Flearn\u002Fget-started-with-nuxt\u002Fnuxt-generate-and-deploy\" target=\"_blank\"\u003E\n    \u003Cp class=\"Promo__Video__Icon\"\u003E\n      Watch a free lesson on \u003Cstrong\u003EHow to deploy Nuxt to Netlify\u003C\u002Fstrong\u003E on Jamstack Explorers\n    \u003C\u002Fp\u003E\n  \u003C\u002Fa\u003E\n\u003C\u002Fdiv\u003E\n\n## Commencer\n\nAppuyez sur le bouton _\"New site from Git\"_ du tableau de bord Netlify.\n\nAuthentifiez-vous auprès de votre hébergeur Git puis sélectionnez un repository à déployer et continuez.\n\nVous devriez atterrir à l'étape 3: _\"Build options, and deploy!\"_\n\n## Configurer\n\n### Pour un site généré statiquement\n\nAssurez-vous que vous avez `target: 'static'` dans votre `nuxt.config`.\n\n1. **Branche à déployer:** `main`, ou la branche que vous préférez\n1. **Commande de construction:** `npm run generate`\n1. **Répertoire de publication:** `dist`\n\n### Pour le rendu côté client uniquement\n\nAssurez-vous que vous avez `target: 'static'` et `ssr: false` dans votre `nuxt.config`.\n\n1. **Branche à déployer:** `main`, ou la branche que vous préférez\n1. **Commande de construction:** `npm run generate`\n1. **Répertoire de publication:** `dist`\n\nPour le rendu côté client, il y a un problème d'actualisation car par défaut sur Netlify le site redirige vers _\"404 not found\"_. Pour toutes les pages qui ne sont pas générées, elles reviendront en mode SPA, puis si vous actualisez ou partagez ce lien, vous obtiendrez la page 404 de Netlify. C'est parce que les pages qui ne sont pas générées n'existent pas réellement. En redirigeant vers le 404.html, Nuxt rechargera correctement votre page dans SPA fallback.\n\nLe moyen le plus simple de résoudre ce problème est d'ajouter une [propriété generate](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#fallback) dans votre `nuxt.config` et en définissant `fallback: true`. Ainsi, il reviendra au 404.html généré en mode SPA au lieu de la page 404 de Netlify.\n\n```js\nexport default {\n  generate: {\n    fallback: true\n  }\n}\n```\n\nSi toutefois vous souhaitez appliquer automatiquement les en-têtes et les redirections de l'application, il existe un module pour cela, particulièrement utile pour les headers\u002Fredirects custom (dans un `_headers` ou `_redirects`):\n\n[netlify-files-module](https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fnetlify-files-module)\n\n\u003E Pour plus d'informations sur les redirections Netlify, consultez la [documentation Netlify](https:\u002F\u002Fwww.netlify.com\u002Fdocs\u002Fredirects\u002F#rewrites-and-proxying).\n\n\u003E Pour une référence simple sur les redirections Netlify, lisez cet [article de blog](https:\u002F\u002Fwww.netlify.com\u002Fblog\u002F2019\u002F01\u002F16\u002Fredirect-rules-for-all-how-to-configure-redirects-for-your-static-site) by Divya Sasidharan\n\n\u003E En option, vous pouvez ajouter des variables ENV supplémentaires via le bouton _\"Advanced\"_. Celles-ci peuvent être utiles pour échanger des informations d'identification d'API alternatives, etc. Netlify fournit également des [variables ENV par défaut](https:\u002F\u002Fwww.netlify.com\u002Fdocs\u002Fbuild-settings\u002F#build-environment-variables) qui peuvent être lues par votre application Nuxt au moment de la construction.\n\nCliquez sur _\"Deploy site\"_ pour déclencher immédiatement un déploiement. Votre site Netlify recevra une URL aléatoire et sera déployé à l'aide de la commande `nuxt generate`.\n\nVoilà ! Votre application Nuxt est désormais hébergée sur Netlify !\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"déployer-nuxt-sur-netlify"},children:[{type:a,value:"Déployer Nuxt sur Netlify"}]},{type:a,value:c},{type:b,tag:e,props:{class:"d-heading-description"},children:[{type:a,value:B}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Le déploiement sur "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.netlify.com",rel:[n,o,p],target:k},children:[{type:a,value:A}]},{type:a,value:" est une option simple et rapide afin de mettre en ligne un site "},{type:b,tag:j,props:{},children:[{type:a,value:"généré statiquement"}]},{type:a,value:" avec Nuxt."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Le cœur du processus utilise la commande "},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:"(\u003C= v2.12) pendant le déploiement pour créer une version statique de votre application Nuxt dans un répertoire "},{type:b,tag:d,props:{},children:[{type:a,value:v}]},{type:a,value:". Le contenu de ce répertoire est ensuite déployé sur une URL de production."}]},{type:a,value:c},{type:b,tag:"div",props:{className:["Promo__Video"]},children:[{type:a,value:w},{type:b,tag:"a",props:{href:"https:\u002F\u002Fexplorers.netlify.com\u002Flearn\u002Fget-started-with-nuxt\u002Fnuxt-generate-and-deploy",target:k},children:[{type:a,value:"\n    "},{type:b,tag:"p",props:{className:["Promo__Video__Icon"]},children:[{type:a,value:"\n      Watch a free lesson on "},{type:b,tag:"strong",props:{},children:[{type:a,value:"How to deploy Nuxt to Netlify"}]},{type:a,value:" on Jamstack Explorers\n    "}]},{type:a,value:w}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:D,props:{id:E},children:[{type:b,tag:f,props:{href:"#commencer"},children:[{type:a,value:F}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Appuyez sur le bouton "},{type:b,tag:q,props:{},children:[{type:a,value:"\"New site from Git\""}]},{type:a,value:" du tableau de bord Netlify."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Authentifiez-vous auprès de votre hébergeur Git puis sélectionnez un repository à déployer et continuez."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Vous devriez atterrir à l'étape 3: "},{type:b,tag:q,props:{},children:[{type:a,value:"\"Build options, and deploy!\""}]}]},{type:a,value:c},{type:b,tag:D,props:{id:G},children:[{type:b,tag:f,props:{href:"#configurer"},children:[{type:a,value:H}]}]},{type:a,value:c},{type:b,tag:I,props:{id:J},children:[{type:b,tag:f,props:{href:"#pour-un-site-g%C3%A9n%C3%A9r%C3%A9-statiquement"},children:[{type:a,value:K}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:L},{type:b,tag:d,props:{},children:[{type:a,value:M}]},{type:a,value:x},{type:b,tag:d,props:{},children:[{type:a,value:y}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:N,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:P}]},{type:a,value:Q},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:S}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:T}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:v}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:I,props:{id:U},children:[{type:b,tag:f,props:{href:"#pour-le-rendu-c%C3%B4t%C3%A9-client-uniquement"},children:[{type:a,value:V}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:L},{type:b,tag:d,props:{},children:[{type:a,value:M}]},{type:a,value:" et "},{type:b,tag:d,props:{},children:[{type:a,value:"ssr: false"}]},{type:a,value:x},{type:b,tag:d,props:{},children:[{type:a,value:y}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:N,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:P}]},{type:a,value:Q},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:S}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:T}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:v}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Pour le rendu côté client, il y a un problème d'actualisation car par défaut sur Netlify le site redirige vers "},{type:b,tag:q,props:{},children:[{type:a,value:"\"404 not found\""}]},{type:a,value:". Pour toutes les pages qui ne sont pas générées, elles reviendront en mode SPA, puis si vous actualisez ou partagez ce lien, vous obtiendrez la page 404 de Netlify. C'est parce que les pages qui ne sont pas générées n'existent pas réellement. En redirigeant vers le 404.html, Nuxt rechargera correctement votre page dans SPA fallback."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Le moyen le plus simple de résoudre ce problème est d'ajouter une "},{type:b,tag:f,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#fallback"},children:[{type:a,value:"propriété generate"}]},{type:a,value:x},{type:b,tag:d,props:{},children:[{type:a,value:y}]},{type:a,value:" et en définissant "},{type:b,tag:d,props:{},children:[{type:a,value:"fallback: true"}]},{type:a,value:". Ainsi, il reviendra au 404.html généré en mode SPA au lieu de la page 404 de Netlify."}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-js","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:h,props:{className:[i,W,X]},children:[{type:a,value:"export"}]},{type:a,value:g},{type:b,tag:h,props:{className:[i,W,X]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:h,props:{className:[i,t]},children:[{type:a,value:Y}]},{type:a,value:"\n  generate"},{type:b,tag:h,props:{className:[i,Z]},children:[{type:a,value:_}]},{type:a,value:g},{type:b,tag:h,props:{className:[i,t]},children:[{type:a,value:Y}]},{type:a,value:"\n    fallback"},{type:b,tag:h,props:{className:[i,Z]},children:[{type:a,value:_}]},{type:a,value:g},{type:b,tag:h,props:{className:[i,"boolean"]},children:[{type:a,value:"true"}]},{type:a,value:w},{type:b,tag:h,props:{className:[i,t]},children:[{type:a,value:$}]},{type:a,value:c},{type:b,tag:h,props:{className:[i,t]},children:[{type:a,value:$}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Si toutefois vous souhaitez appliquer automatiquement les en-têtes et les redirections de l'application, il existe un module pour cela, particulièrement utile pour les headers\u002Fredirects custom (dans un "},{type:b,tag:d,props:{},children:[{type:a,value:"_headers"}]},{type:a,value:" ou "},{type:b,tag:d,props:{},children:[{type:a,value:"_redirects"}]},{type:a,value:"):"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fnetlify-files-module",rel:[n,o,p],target:k},children:[{type:a,value:"netlify-files-module"}]}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Pour plus d'informations sur les redirections Netlify, consultez la "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.netlify.com\u002Fdocs\u002Fredirects\u002F#rewrites-and-proxying",rel:[n,o,p],target:k},children:[{type:a,value:"documentation Netlify"}]},{type:a,value:s}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Pour une référence simple sur les redirections Netlify, lisez cet "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.netlify.com\u002Fblog\u002F2019\u002F01\u002F16\u002Fredirect-rules-for-all-how-to-configure-redirects-for-your-static-site",rel:[n,o,p],target:k},children:[{type:a,value:"article de blog"}]},{type:a,value:" by Divya Sasidharan"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"En option, vous pouvez ajouter des variables ENV supplémentaires via le bouton "},{type:b,tag:q,props:{},children:[{type:a,value:"\"Advanced\""}]},{type:a,value:". Celles-ci peuvent être utiles pour échanger des informations d'identification d'API alternatives, etc. Netlify fournit également des "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.netlify.com\u002Fdocs\u002Fbuild-settings\u002F#build-environment-variables",rel:[n,o,p],target:k},children:[{type:a,value:"variables ENV par défaut"}]},{type:a,value:" qui peuvent être lues par votre application Nuxt au moment de la construction."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Cliquez sur "},{type:b,tag:q,props:{},children:[{type:a,value:"\"Deploy site\""}]},{type:a,value:" pour déclencher immédiatement un déploiement. Votre site Netlify recevra une URL aléatoire et sera déployé à l'aide de la commande "},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Voilà ! Votre application Nuxt est désormais hébergée sur Netlify !"}]}]},toc:{title:aa,searchDepth:u,depth:u,links:[{id:E,depth:u,text:F},{id:G,depth:u,text:H,children:[{id:J,depth:ab,text:K},{id:U,depth:ab,text:V}]}]}}},templateOptions:{header:r,footer:r,aside:m,asideClass:aa,fluid:m,banner:r},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/DeveloperThomas.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F01e0e4.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png","/_ipx/https://github.com/MrJmpl3.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3e840f.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/mtlynch.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F525213.png","/_ipx/https://github.com/book000.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3838a1.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/meirroth.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe09bc9.png","/_ipx/https://github.com/Brettanda.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F25f97d.png","/_ipx/https://github.com/armgitaar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0c63ae.png","/_ipx/https://github.com/thomasbnt.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F9f568f.png","/_ipx/https://github.com/karur4n.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F8dcce9.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Découvrir",items:[{title:ac,subtitle:"Sélection de sites créés avec Nuxt",slug:"showcases",to:ad,icon:"showcases.svg",color:"bg-sand"},{title:"Étude de cas",subtitle:"Comment Nuxt est utilisé par les entreprises",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Témoignages",subtitle:"Ce qu'ils pensent de nous",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Apprendre",items:[{title:"Docs",subtitle:"Créez un site web facilement",slug:"docs",to:ae,icon:"docs.svg",color:"bg-green-500"},{title:af,subtitle:"Comprendre tout sur Nuxt",slug:"examples",to:ag,icon:"examples.svg",color:"bg-green-600"},{title:ah,subtitle:"Apprenez avec des cas concrets",slug:"tutorials",to:ai,icon:"tutorials.svg",color:"bg-green-700"},{title:aj,subtitle:"Apprenez en plus grâce aux experts",href:ak,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explorer",items:[{title:al,subtitle:"Comment déployer Nuxt",slug:"deployments",to:am,icon:"deployments.svg",color:"bg-indigo-light"},{title:an,subtitle:"Toute la puissance de Nuxt",href:ao,icon:"modules.svg",color:"bg-indigo"},{title:ap,subtitle:"Commencez avec les thèmes",slug:"themes",to:aq,icon:"themes.svg",color:"bg-indigo-dark"},{title:ar,subtitle:"Apprendre étape par étape",slug:"video-courses",to:as,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Communauté",items:[{title:at,subtitle:"Les dernières nouvelles concernant Nuxt",slug:"announcements",to:au,icon:"announcements.svg",color:"bg-mint-lighter"},{title:av,subtitle:"Nous sommes Nuxt",slug:"teams",to:aw,icon:"teams.svg",color:"bg-mint-light"},{title:ax,subtitle:"Tout le code que nous avons publié",slug:"releases",to:ay,icon:"releases.svg",color:"bg-mint"},{title:az,subtitle:"Ils croient en nous",slug:"sponsors",to:aA,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partenaires",slug:"partners",to:aB}],footerLinks:[{title:"À propos",items:[{title:"Nous contacter",href:"mailto:hello@nuxtjs.com"},{title:"Support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open source softwares",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partenariat",href:aB},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Écosystème",items:[{title:at,to:au},{title:"Contribuer",to:"\u002Fcontribution-guide"},{title:"Discutez avec nous",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Événements",to:"\u002Fevents"},{title:az,to:aA},{title:av,to:aw},{title:ah,to:ai},{title:ar,to:as}]},{title:"Ressources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:ae},{title:af,to:ag},{title:al,to:am},{title:aj,href:ak},{title:an,href:ao},{title:ax,to:ay},{title:ac,to:ad},{title:ap,to:aq}]}],showCookieBanner:m},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Ffr\u002Fdeployments\u002F1.netlify.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:aC,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:aC},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:aD,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:aD},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"DeveloperThomas"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:aE,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:aE},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"},{name:"José Manuel Casani Guerra",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21302114?u=8ea39b04340fe8c4ebd63b1097497e1bf0d1454f&v=4",login:"MrJmpl3"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=2998231cea5f2bd7268cba898c9a947cb1d525b8&v=4",login:"owlnai"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Michael Lynch",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7783288?u=b6d8f48d38d7a64cddc633db4cfcd6915b997794&v=4",login:"mtlynch"},{name:"Tomachi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8929706?u=bb51b21fd7735505d999e27f7340c5f886f4d9fe&v=4",login:"book000"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Meir Roth",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F12494197?u=7828b437d2bc2402a6e8a4edd9ada378139f4742&v=4",login:"meirroth"},{name:"Brett",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14969098?u=34d0910e6ded49668e2a114eedbc26ab7b5979e7&v=4",login:"Brettanda"},{name:"Adam Miedema",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F30202878?u=aad565699f6b02961c47297dc931e5179d9ff8e1&v=4",login:"armgitaar"},{name:"Thomas Bnt",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14293805?u=e3f70b334910b6cfd43ad99c9f5b0523c07bd38a&v=4",login:"thomasbnt"},{name:"Kazuki Furukawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6816398?v=4",login:"karur4n"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseEm","ProseHr","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link"])},mutations:[]}}("text","element","\n","prose-code-inline","prose-paragraph","prose-a"," ","span","token","prose-strong","_blank","prose-li",false,"nofollow","noopener","noreferrer","prose-em",true,".","punctuation",2,"dist","\n  "," dans votre ","nuxt.config","prose-blockquote","Netlify","Comment déployer Nuxt sur Netlify ?","nuxt generate","prose-h2","commencer","Commencer","configurer","Configurer","prose-h3","pour-un-site-généré-statiquement","Pour un site généré statiquement","Assurez-vous que vous avez ","target: 'static'","prose-ol","Branche à déployer:","main",", ou la branche que vous préférez","Commande de construction:","npm run generate","Répertoire de publication:","pour-le-rendu-côté-client-uniquement","Pour le rendu côté client uniquement","keyword","module","{","operator",":","}","",3,"Showcases","\u002Fshowcases","\u002Fdocs","Exemples","\u002Fexamples","Tutoriels","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Déploiements","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Thèmes","\u002Fthemes","Cours vidéo","\u002Fvideo-courses","Annonces","\u002Fannouncements","Équipes","\u002Fteams","Notes de version","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners","Ayouli","felipesuri","syagawa")));