__NUXT_JSONP__("/docs/configuration-glossary/configuration-alias", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN){return {data:[{page:{key:"content:en:docs:5.configuration-glossary:1.configuration-alias.md",generatedAt:new Date(1647346926269),mtime:new Date(1647346926261),slug:"configuration-alias",title:"The alias Property",position:"999900050001",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-alias",draft:w,page:t,language:"en",navigation:{title:Z},description:_,menu:Z,category:"configuration-glossary",empty:w,excerpt:void 0,body:{raw:"---\ntitle: The alias Property\nnavigation.title: alias\ndescription: Nuxt allows you to use aliases to access custom directories within your JavaScript and CSS\nmenu: alias\ncategory: configuration-glossary\n---\n# The alias property\n\nNuxt allows you to use aliases to access custom directories within your JavaScript and CSS\n\n---\n\n- Type: `Object`\n- Default:\n  ```js\n  {\n    '~~': `\u003CrootDir\u003E`,\n    '@@': `\u003CrootDir\u003E`,\n    '~': `\u003CsrcDir\u003E`,\n    '@': `\u003CsrcDir\u003E`,\n    'assets': `\u003CsrcDir\u003E\u002Fassets`, \u002F\u002F (unless you have set a custom `dir.assets`)\n    'static': `\u003CsrcDir\u003E\u002Fstatic`, \u002F\u002F (unless you have set a custom `dir.static`)\n  }\n  ```\n\nThis option lets you define aliases to directories within your project (in addition to the ones above). These aliases can be used within your JavaScript and CSS.\n\n```js{}[nuxt.config.js]\nimport { resolve } from 'path'\nexport default {\n  alias: {\n    'images': resolve(__dirname, '.\u002Fassets\u002Fimages'),\n    'style': resolve(__dirname, '.\u002Fassets\u002Fstyle'),\n    'data': resolve(__dirname, '.\u002Fassets\u002Fother\u002Fdata')\n  }\n}\n```\n\n```html{}[components\u002Fexample.vue]\n\u003Ctemplate\u003E\n  \u003Cimg src=\"~images\u002Fmain-bg.jpg\"\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript\u003E\nimport data from 'data\u002Ftest.json'\n\n\u002F\u002F etc.\n\u003C\u002Fscript\u003E\n\n\u003Cstyle\u003E\n@import '~style\u002Fvariables.scss';\n@import '~style\u002Futils.scss';\n@import '~style\u002Fbase.scss';\n\nbody {\n  background-image: url('~images\u002Fmain-bg.jpg');\n}\n\u003C\u002Fstyle\u003E\n```\n\n::alert{type=\"warning\"}\nWithin a Webpack context (image sources, CSS - but _not_ JavaScript) you must prefix your alias with `~` (as in the example above).\n::\n\n::alert{type=\"info\"}\nIf you are using TypeScript and want to use the alias you define within your TypeScript files, you will need to add the aliases to your `paths` object within `tsconfig.json`.\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-alias-property"},children:[{type:a,value:"The alias property"}]},{type:a,value:g},{type:b,tag:x,props:{class:"d-heading-description"},children:[{type:a,value:_}]},{type:a,value:g},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:g},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:g},{type:b,tag:$,props:{},children:[{type:a,value:g},{type:a,value:"Type: "},{type:b,tag:y,props:{},children:[{type:a,value:"Object"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:$,props:{},children:[{type:a,value:g},{type:a,value:"Default:"},{type:a,value:g},{type:b,tag:H,props:{},children:[{type:b,tag:I,props:{className:[J,aa]},children:[{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'~~'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'@@'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'~'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'@'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'assets'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u003CsrcDir\u003E\u002Fassets"}]},{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"\u002F\u002F (unless you have set a custom `dir.assets`)"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'static'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u003CsrcDir\u003E\u002Fstatic"}]},{type:b,tag:c,props:{className:[d,j,f]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"\u002F\u002F (unless you have set a custom `dir.static`)"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g}]}]}]},{type:a,value:g}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:x,props:{},children:[{type:a,value:"This option lets you define aliases to directories within your project (in addition to the ones above). These aliases can be used within your JavaScript and CSS."}]},{type:a,value:g},{type:b,tag:H,props:{},children:[{type:b,tag:c,props:{className:[ad]},children:[{type:a,value:"nuxt.config.js"}]},{type:b,tag:I,props:{className:[J,aa]},children:[{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[d,r,s]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,af]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:" resolve "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r,s]},children:[{type:a,value:ag}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'path'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r,s]},children:[{type:a,value:"export"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r,s]},children:[{type:a,value:"default"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"\n  alias"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'images'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'.\u002Fassets\u002Fimages'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'style'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'.\u002Fassets\u002Fstyle'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'data'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'.\u002Fassets\u002Fother\u002Fdata'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:H,props:{},children:[{type:b,tag:c,props:{className:[ad]},children:[{type:a,value:"components\u002Fexample.vue"}]},{type:b,tag:I,props:{className:[J,"language-html"]},children:[{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:"img"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"attr-name"]},children:[{type:a,value:"src"}]},{type:b,tag:c,props:{className:[d,"attr-value"]},children:[{type:b,tag:c,props:{className:[d,e,"attr-equals"]},children:[{type:a,value:"="}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]},{type:a,value:"~images\u002Fmain-bg.jpg"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,Q]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:g},{type:b,tag:c,props:{className:[d,r,s]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:"data"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r,s]},children:[{type:a,value:ag}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'data\u002Ftest.json'"}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"\u002F\u002F etc."}]},{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,"language-css"]},children:[{type:a,value:g},{type:b,tag:c,props:{className:[d,S]},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:U}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'~style\u002Fvariables.scss'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,S]},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:U}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'~style\u002Futils.scss'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,S]},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:U}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"'~style\u002Fbase.scss'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,"selector"]},children:[{type:a,value:"body"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,"property"]},children:[{type:a,value:"background-image"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,V]},children:[{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,f,V]},children:[{type:a,value:"'~images\u002Fmain-bg.jpg'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:aj,props:{type:"warning"},children:[{type:b,tag:x,props:{},children:[{type:a,value:"Within a Webpack context (image sources, CSS - but "},{type:b,tag:"prose-em",props:{},children:[{type:a,value:"not"}]},{type:a,value:" JavaScript) you must prefix your alias with "},{type:b,tag:y,props:{},children:[{type:a,value:"~"}]},{type:a,value:" (as in the example above)."}]}]},{type:a,value:g},{type:b,tag:aj,props:{type:"info"},children:[{type:b,tag:x,props:{},children:[{type:a,value:"If you are using TypeScript and want to use the alias you define within your TypeScript files, you will need to add the aliases to your "},{type:b,tag:y,props:{},children:[{type:a,value:"paths"}]},{type:a,value:" object within "},{type:b,tag:y,props:{},children:[{type:a,value:"tsconfig.json"}]},{type:a,value:"."}]}]}]},toc:{title:ak,searchDepth:al,depth:al,links:[]}},template:am},templateOptions:{header:t,footer:t,aside:t,asideClass:ak,fluid:w,banner:t},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/DeveloperThomas.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F01e0e4.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png","/_ipx/https://github.com/MrJmpl3.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3e840f.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/mtlynch.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F525213.png","/_ipx/https://github.com/book000.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3838a1.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/meirroth.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe09bc9.png","/_ipx/https://github.com/Brettanda.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F25f97d.png","/_ipx/https://github.com/armgitaar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0c63ae.png","/_ipx/https://github.com/thomasbnt.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F9f568f.png","/_ipx/https://github.com/karur4n.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F8dcce9.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:an,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:ao,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:ap,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:am,subtitle:"Create fast websites easily",slug:"docs",to:aq,icon:"docs.svg",color:"bg-green-500"},{title:ar,subtitle:"Understand everything in Nuxt",slug:"examples",to:as,icon:"examples.svg",color:"bg-green-600"},{title:at,subtitle:"Learn with concrete cases",slug:"tutorials",to:au,icon:"tutorials.svg",color:"bg-green-700"},{title:F,subtitle:W,href:G,icon:X,color:Y}]},{title:"Explore",items:[{title:av,subtitle:"How to Deploy Nuxt",slug:"deployments",to:aw,icon:"deployments.svg",color:"bg-indigo-light"},{title:ax,subtitle:"Extend the power of Nuxt",href:ay,icon:"modules.svg",color:"bg-indigo"},{title:az,subtitle:"Get started with themes",slug:"themes",to:aA,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aB,subtitle:"Latest news about Nuxt",slug:"announcements",to:aC,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aD,subtitle:"They are Nuxt",slug:"teams",to:aE,icon:"teams.svg",color:"bg-mint-light"},{title:aF,subtitle:"All the code we have released",slug:"releases",to:aG,icon:"releases.svg",color:"bg-mint"},{title:aH,subtitle:"They trust us",slug:"sponsors",to:aI,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aJ}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aJ},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aB,to:aC},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aH,to:aI},{title:aD,to:aE},{title:at,to:au},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aq},{title:ar,to:as},{title:av,to:aw},{title:F,href:G},{title:ax,href:ay},{title:aF,to:aG},{title:an,to:ao},{title:az,to:aA}]}],showCookieBanner:w},"AsideBottom:0":{lastRelease:aK,masterCoursesLink:{title:F,subtitle:W,href:G,icon:X,color:Y}},"AsideBottom:1":{lastRelease:aK,masterCoursesLink:{title:F,subtitle:W,href:G,icon:X,color:Y}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org",prev:{slug:"nuxt3-beta",to:"\u002Fannouncements\u002Fnuxt3-beta",title:"Introducing Nuxt 3 Beta"},next:{slug:"html-head",to:"\u002Fexamples\u002Fseo\u002Fhtml-head",title:"SEO HTML Head"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Fen\u002Fdocs\u002F5.configuration-glossary\u002F1.configuration-alias.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:aL,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:aL},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:aM,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:aM},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"DeveloperThomas"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:aN,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:aN},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"},{name:"José Manuel Casani Guerra",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21302114?u=8ea39b04340fe8c4ebd63b1097497e1bf0d1454f&v=4",login:"MrJmpl3"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=2998231cea5f2bd7268cba898c9a947cb1d525b8&v=4",login:"owlnai"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Michael Lynch",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7783288?u=b6d8f48d38d7a64cddc633db4cfcd6915b997794&v=4",login:"mtlynch"},{name:"Tomachi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8929706?u=bb51b21fd7735505d999e27f7340c5f886f4d9fe&v=4",login:"book000"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Meir Roth",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F12494197?u=7828b437d2bc2402a6e8a4edd9ada378139f4742&v=4",login:"meirroth"},{name:"Brett",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14969098?u=34d0910e6ded49668e2a114eedbc26ab7b5979e7&v=4",login:"Brettanda"},{name:"Adam Miedema",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F30202878?u=aad565699f6b02961c47297dc931e5179d9ff8e1&v=4",login:"armgitaar"},{name:"Thomas Bnt",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14293805?u=e3f70b334910b6cfd43ad99c9f5b0523c07bd38a&v=4",login:"thomasbnt"},{name:"Kazuki Furukawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6816398?v=4",login:"karur4n"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","ProseEm","HomeLearnMaster","SectionContentItem","ProseHr","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",ap,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","span","token","punctuation","string","\n"," ","tag","template-punctuation","`",":",",","operator","\n  ","\u003E","template-string","keyword","module",true,"{","}",false,"prose-paragraph","prose-code-inline","function","(",")","\u003C","\n\n",";","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-code","pre","line-numbers","code","comment","\n    ","resolve","__dirname","\u003C\u002F","script","style","atrule","rule","@import","url","Learn more with experts","master-courses.svg","bg-green-800","alias","Nuxt allows you to use aliases to access custom directories within your JavaScript and CSS","prose-li","language-js","\u003CrootDir\u003E","\u003CsrcDir\u003E","filename","import","imports","from","template","\"","alert","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners","v2.15.8","Ayouli","felipesuri","syagawa")));