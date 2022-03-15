__NUXT_JSONP__("/fr/docs/configuration-glossary/configuration-transition", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY){return {data:[{page:{key:"content:fr:docs:5.configuration-glossary:33.configuration-transition.md",generatedAt:new Date(1647347016885),mtime:new Date(1647347016875),slug:"configuration-transition",title:Q,position:"999900050033",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-transition",draft:v,page:q,language:"fr",navigation:{title:E},description:R,menu:E,category:"configuration-glossary",empty:v,excerpt:void 0,body:{raw:"---\ntitle: Les propriétés de transition\nnavigation.title: transition\ndescription: Définissez les propriétés par défaut de la page et des transitions de mise en page.\nmenu: transition\ncategory: configuration-glossary\n---\n\n# Les propriétés de transition\n\nDéfinissez les propriétés par défaut de la page et des transitions de mise en page.\n\n---\n\n## La propriété pageTransition\n\n\u003E Nuxt v2.7.0 introduit la clé \"pageTransition\" en faveur de la clé \"transition\" pour consolider le nommage avec les clés de transition de mise en page.\n\n- Type: `String` ou `Object`\n\n\u003E Utilisé pour définir les propriétés par défaut des transitions de page.\n\nPar défaut :\n\n```js\n{\n  name: 'page',\n  mode: 'out-in'\n}\n```\n\n```js{}[nuxt.config.js]\nexport default {\n  pageTransition: 'page'\n  \u002F\u002F ou\n  pageTransition: {\n    name: 'page',\n    mode: 'out-in',\n    beforeEnter (el) {\n      console.log('Before enter...');\n    }\n  }\n}\n```\n\nLa clé de transition dans `nuxt.config.js` est utilisée pour définir les propriétés par défaut des transitions de page. Pour en savoir plus sur les clés disponibles, voir la [propriété de transition des pages](\u002Fdocs\u002Ffeatures\u002Ftransitions).\n\n## La propriété layoutTransition\n\n- Type: `String` ou `Object`\n\n\u003E Utilisé pour définir les propriétés par défaut des transitions de la mise en page. La valeur fournie dans l'option `name` est configurée pour fonctionner avec le nom fourni dans `layout` de notre répertoire `layouts`.\n\nPar défaut :\n\n```js\n{\n  name: 'layout',\n  mode: 'out-in'\n}\n```\n\n```js{}[nuxt.config.js]\nexport default {\n  layoutTransition: 'layout'\n  \u002F\u002F ou\n  layoutTransition: {\n    name: 'layout',\n    mode: 'out-in'\n  }\n}\n```\n\n```css{}[assets\u002Fmain.css]\n.layout-enter-active,\n.layout-leave-active {\n  transition: opacity 0.5s;\n}\n.layout-enter,\n.layout-leave-active {\n  opacity: 0;\n}\n```\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"les-propriétés-de-transition"},children:[{type:a,value:Q}]},{type:a,value:e},{type:b,tag:n,props:{class:"d-heading-description"},children:[{type:a,value:R}]},{type:a,value:e},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:e},{type:b,tag:S,props:{id:T},children:[{type:b,tag:F,props:{href:"#la-propri%C3%A9t%C3%A9-pagetransition"},children:[{type:a,value:U}]}]},{type:a,value:e},{type:b,tag:G,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Nuxt v2.7.0 introduit la clé \"pageTransition\" en faveur de la clé \"transition\" pour consolider le nommage avec les clés de transition de mise en page."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:V,props:{},children:[{type:a,value:e},{type:b,tag:W,props:{},children:[{type:a,value:e},{type:a,value:X},{type:b,tag:m,props:{},children:[{type:a,value:Y}]},{type:a,value:Z},{type:b,tag:m,props:{},children:[{type:a,value:_}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:G,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Utilisé pour définir les propriétés par défaut des transitions de page."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:$}]},{type:a,value:e},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{className:[t,w]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[I]},children:[{type:a,value:J}]},{type:b,tag:s,props:{className:[t,w]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,y,z]},children:[{type:a,value:ac}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y,z]},children:[{type:a,value:ad}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:H}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:ag}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:"beforeEnter"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"el"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:am}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:"\n      "},{type:b,tag:c,props:{className:[d,an,"class-name"]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,"method",ak,"property-access"]},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'Before enter...'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"La clé de transition dans "},{type:b,tag:m,props:{},children:[{type:a,value:J}]},{type:a,value:" est utilisée pour définir les propriétés par défaut des transitions de page. Pour en savoir plus sur les clés disponibles, voir la "},{type:b,tag:F,props:{href:"\u002Fdocs\u002Ffeatures\u002Ftransitions"},children:[{type:a,value:"propriété de transition des pages"}]},{type:a,value:K}]},{type:a,value:e},{type:b,tag:S,props:{id:ao},children:[{type:b,tag:F,props:{href:"#la-propri%C3%A9t%C3%A9-layouttransition"},children:[{type:a,value:ap}]}]},{type:a,value:e},{type:b,tag:V,props:{},children:[{type:a,value:e},{type:b,tag:W,props:{},children:[{type:a,value:e},{type:a,value:X},{type:b,tag:m,props:{},children:[{type:a,value:Y}]},{type:a,value:Z},{type:b,tag:m,props:{},children:[{type:a,value:_}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:G,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Utilisé pour définir les propriétés par défaut des transitions de la mise en page. La valeur fournie dans l'option "},{type:b,tag:m,props:{},children:[{type:a,value:"name"}]},{type:a,value:" est configurée pour fonctionner avec le nom fourni dans "},{type:b,tag:m,props:{},children:[{type:a,value:"layout"}]},{type:a,value:" de notre répertoire "},{type:b,tag:m,props:{},children:[{type:a,value:"layouts"}]},{type:a,value:K}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:$}]},{type:a,value:e},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{className:[t,w]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[I]},children:[{type:a,value:J}]},{type:b,tag:s,props:{className:[t,w]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,y,z]},children:[{type:a,value:ac}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y,z]},children:[{type:a,value:ad}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:M}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:ag}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[I]},children:[{type:a,value:"assets\u002Fmain.css"}]},{type:b,tag:s,props:{className:[t,"language-css"]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,ar]},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:".layout-enter-active"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:as}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:" opacity "},{type:b,tag:c,props:{className:[d,au]},children:[{type:a,value:"0.5"}]},{type:b,tag:c,props:{className:[d,"unit"]},children:[{type:a,value:"s"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,ar]},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:".layout-enter"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:as}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"opacity"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,au]},children:[{type:a,value:"0"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e}]}]}]}]},toc:{title:av,searchDepth:B,depth:B,links:[{id:T,depth:B,text:U},{id:ao,depth:B,text:ap}]}},template:aw},templateOptions:{header:q,footer:q,aside:q,asideClass:av,fluid:v,banner:q},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/DeveloperThomas.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F01e0e4.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png","/_ipx/https://github.com/MrJmpl3.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3e840f.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/mtlynch.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F525213.png","/_ipx/https://github.com/book000.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3838a1.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/meirroth.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe09bc9.png","/_ipx/https://github.com/Brettanda.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F25f97d.png","/_ipx/https://github.com/armgitaar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0c63ae.png","/_ipx/https://github.com/thomasbnt.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F9f568f.png","/_ipx/https://github.com/karur4n.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F8dcce9.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Découvrir",items:[{title:ax,subtitle:"Sélection de sites créés avec Nuxt",slug:"showcases",to:ay,icon:"showcases.svg",color:"bg-sand"},{title:"Étude de cas",subtitle:"Comment Nuxt est utilisé par les entreprises",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Témoignages",subtitle:"Ce qu'ils pensent de nous",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Apprendre",items:[{title:aw,subtitle:"Créez un site web facilement",slug:"docs",to:az,icon:"docs.svg",color:"bg-green-500"},{title:aA,subtitle:"Comprendre tout sur Nuxt",slug:"examples",to:aB,icon:"examples.svg",color:"bg-green-600"},{title:aC,subtitle:"Apprenez avec des cas concrets",slug:"tutorials",to:aD,icon:"tutorials.svg",color:"bg-green-700"},{title:C,subtitle:N,href:D,icon:O,color:P}]},{title:"Explorer",items:[{title:aE,subtitle:"Comment déployer Nuxt",slug:"deployments",to:aF,icon:"deployments.svg",color:"bg-indigo-light"},{title:aG,subtitle:"Toute la puissance de Nuxt",href:aH,icon:"modules.svg",color:"bg-indigo"},{title:aI,subtitle:"Commencez avec les thèmes",slug:"themes",to:aJ,icon:"themes.svg",color:"bg-indigo-dark"},{title:aK,subtitle:"Apprendre étape par étape",slug:"video-courses",to:aL,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Communauté",items:[{title:aM,subtitle:"Les dernières nouvelles concernant Nuxt",slug:"announcements",to:aN,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aO,subtitle:"Nous sommes Nuxt",slug:"teams",to:aP,icon:"teams.svg",color:"bg-mint-light"},{title:aQ,subtitle:"Tout le code que nous avons publié",slug:"releases",to:aR,icon:"releases.svg",color:"bg-mint"},{title:aS,subtitle:"Ils croient en nous",slug:"sponsors",to:aT,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partenaires",slug:"partners",to:aU}],footerLinks:[{title:"À propos",items:[{title:"Nous contacter",href:"mailto:hello@nuxtjs.com"},{title:"Support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open source softwares",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partenariat",href:aU},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Écosystème",items:[{title:aM,to:aN},{title:"Contribuer",to:"\u002Fcontribution-guide"},{title:"Discutez avec nous",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Événements",to:"\u002Fevents"},{title:aS,to:aT},{title:aO,to:aP},{title:aC,to:aD},{title:aK,to:aL}]},{title:"Ressources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:az},{title:aA,to:aB},{title:aE,to:aF},{title:C,href:D},{title:aG,href:aH},{title:aQ,to:aR},{title:ax,to:ay},{title:aI,to:aJ}]}],showCookieBanner:v},"AsideBottom:0":{lastRelease:aV,masterCoursesLink:{title:C,subtitle:N,href:D,icon:O,color:P}},"AsideBottom:1":{lastRelease:aV,masterCoursesLink:{title:C,subtitle:N,href:D,icon:O,color:P}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org",prev:{slug:"configuration-telemetry",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-telemetry",title:"La propriété telemetry"},next:{slug:"configuration-vue-config",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-vue-config",title:"La propriété vue.config"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Ffr\u002Fdocs\u002F5.configuration-glossary\u002F33.configuration-transition.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:aW,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:aW},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:aX,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:aX},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"DeveloperThomas"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:aY,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:aY},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"},{name:"José Manuel Casani Guerra",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21302114?u=8ea39b04340fe8c4ebd63b1097497e1bf0d1454f&v=4",login:"MrJmpl3"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=2998231cea5f2bd7268cba898c9a947cb1d525b8&v=4",login:"owlnai"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Michael Lynch",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7783288?u=b6d8f48d38d7a64cddc633db4cfcd6915b997794&v=4",login:"mtlynch"},{name:"Tomachi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8929706?u=bb51b21fd7735505d999e27f7340c5f886f4d9fe&v=4",login:"book000"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Meir Roth",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F12494197?u=7828b437d2bc2402a6e8a4edd9ada378139f4742&v=4",login:"meirroth"},{name:"Brett",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14969098?u=34d0910e6ded49668e2a114eedbc26ab7b5979e7&v=4",login:"Brettanda"},{name:"Adam Miedema",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F30202878?u=aad565699f6b02961c47297dc931e5179d9ff8e1&v=4",login:"armgitaar"},{name:"Thomas Bnt",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14293805?u=e3f70b334910b6cfd43ad99c9f5b0523c07bd38a&v=4",login:"thomasbnt"},{name:"Kazuki Furukawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6816398?v=4",login:"karur4n"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","ProseEm","HomeLearnMaster","SectionContentItem","ProseHr","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","span","token","\n","punctuation"," ",":","operator","string","{","}","prose-code-inline","prose-paragraph",",","\n  ",true,"prose-code","pre","line-numbers","code",false,"language-js","'out-in'","keyword","module","class",2,"Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","transition","prose-a","prose-blockquote","'page'","filename","nuxt.config.js",".",";","'layout'","Apprenez en plus grâce aux experts","master-courses.svg","bg-green-800","Les propriétés de transition","Définissez les propriétés par défaut de la page et des transitions de mise en page.","prose-h2","la-propriété-pagetransition","La propriété pageTransition","prose-ul","prose-li","Type: ","String"," ou ","Object","Par défaut :","\n  name","\n  mode","export","default","\n  pageTransition","comment","\u002F\u002F ou","\n    name","\n    mode","\n    ","function","(",")","console","la-propriété-layouttransition","La propriété layoutTransition","\n  layoutTransition","selector",".layout-leave-active","property","number","","Docs","Showcases","\u002Fshowcases","\u002Fdocs","Exemples","\u002Fexamples","Tutoriels","\u002Ftutorials","Déploiements","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Thèmes","\u002Fthemes","Cours vidéo","\u002Fvideo-courses","Annonces","\u002Fannouncements","Équipes","\u002Fteams","Notes de version","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners","v2.15.8","Ayouli","felipesuri","syagawa")));