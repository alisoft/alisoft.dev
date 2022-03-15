__NUXT_JSONP__("/ja/docs/internals-glossary/nuxt-render-route", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au){return {data:[{page:{key:"content:ja:docs:6.internals-glossary:11.nuxt-render-route.md",generatedAt:new Date(1647347055920),mtime:new Date(1647347055888),slug:"nuxt-render-route",title:I,position:"999900060011",to:"\u002Fdocs\u002Finternals-glossary\u002Fnuxt-render-route",draft:q,page:m,language:"ja",navigation:{title:J},description:K,category:"internals-glossary",empty:q,excerpt:void 0,body:{raw:"---\ntitle: nuxt.renderRoute(route, context)\nnavigation.title: renderRoute\ndescription: 渡されたコンテキストを使い、特定のルートをレンダリングします。\ncategory: internals-glossary\n---\n# nuxt.renderRoute(route, context)\n\n渡されたコンテキストを使い、特定のルートをレンダリングします。\n\n---\n\n- 型: `Function`\n- 引数:\n  1. `String` : レンダリングするルート\n  2. _オプション_ `Object`、渡されたコンテキスト、利用可能なキー: `req` と `res`\n- 戻り値: `Promise`\n  - `html`: `String`\n  - `error`: `null` または `Object`\n  - `redirected`: `false` または `Object`\n\nこのメソッドはほとんどの場合 [`nuxt.renderAndGetWindow`](\u002Fdocs\u002Finternals-glossary\u002Fnuxt-render-and-get-window) とともにテストする目的で使われます。\n\n::alert{type=\"warning\"}\n`nuxt.renderRoute` はプロダクションモードではビルド処理の後に実行するといいでしょう。\n::\n\n```js\nconst { loadNuxt, build } = require('nuxt')\n\nasync function start() {\n  \u002F\u002F 起動用の nuxt インスタンスを取得します（プロダクションモード）\n  \u002F\u002F このスクリプトを実行する前に `nuxt build` を実行していることを確認してください\n  const nuxt = await loadNuxt({ for: 'start' })\n\n  const { html, error, redirected } = await nuxt.renderRoute('\u002F')\n\n  \u002F\u002F `html` は常に文字列になります\n\n  \u002F\u002F エラーレイアウトが表示されるときは `error` は null ではありません。エラーフォーマットは下記:\n  \u002F\u002F { statusCode: 500, message: 'My error message' }\n\n  \u002F\u002F `asyncData()` または `fetch()` 内で `redirect()` が使われたときは `redirected` は `false` ではありません\n  \u002F\u002F { path: '\u002Fother-path', query: {}, status: 302 }\n}\n\nstart()\n```\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"nuxtrenderrouteroute-context"},children:[{type:a,value:I}]},{type:a,value:e},{type:b,tag:x,props:{class:"d-heading-description"},children:[{type:a,value:K}]},{type:a,value:e},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:e},{type:b,tag:L,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:e},{type:a,value:"型: "},{type:b,tag:g,props:{},children:[{type:a,value:"Function"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:e},{type:a,value:"引数:"},{type:a,value:e},{type:b,tag:"prose-ol",props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:M}]},{type:a,value:" : レンダリングするルート"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:e},{type:b,tag:"prose-em",props:{},children:[{type:a,value:"オプション"}]},{type:a,value:h},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:"、渡されたコンテキスト、利用可能なキー: "},{type:b,tag:g,props:{},children:[{type:a,value:"req"}]},{type:a,value:" と "},{type:b,tag:g,props:{},children:[{type:a,value:"res"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:e},{type:a,value:"戻り値: "},{type:b,tag:g,props:{},children:[{type:a,value:"Promise"}]},{type:a,value:e},{type:b,tag:L,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"html"}]},{type:a,value:z},{type:b,tag:g,props:{},children:[{type:a,value:M}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"error"}]},{type:a,value:z},{type:b,tag:g,props:{},children:[{type:a,value:"null"}]},{type:a,value:N},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"redirected"}]},{type:a,value:z},{type:b,tag:g,props:{},children:[{type:a,value:"false"}]},{type:a,value:N},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:x,props:{},children:[{type:a,value:"このメソッドはほとんどの場合 "},{type:b,tag:"prose-a",props:{href:O},children:[{type:b,tag:g,props:{},children:[{type:a,value:"nuxt.renderAndGetWindow"}]}]},{type:a,value:" とともにテストする目的で使われます。"}]},{type:a,value:e},{type:b,tag:"alert",props:{type:"warning"},children:[{type:b,tag:x,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"nuxt.renderRoute"}]},{type:a,value:" はプロダクションモードではビルド処理の後に実行するといいでしょう。"}]}]},{type:a,value:e},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-js","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:" loadNuxt"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:" build "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:C}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"require"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"'nuxt'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"async"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\u002F\u002F 起動用の nuxt インスタンスを取得します（プロダクションモード）"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\u002F\u002F このスクリプトを実行する前に `nuxt build` を実行していることを確認してください"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:A}]},{type:a,value:" nuxt "},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:C}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j,E]},children:[{type:a,value:R}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"loadNuxt"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j,E]},children:[{type:a,value:"for"}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:":"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"'start'"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:" html"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:" error"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:" redirected "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:C}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j,E]},children:[{type:a,value:R}]},{type:a,value:" nuxt"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"."}]},{type:b,tag:c,props:{className:[d,"method",l,"property-access"]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"'\u002F'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\u002F\u002F `html` は常に文字列になります"}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\u002F\u002F エラーレイアウトが表示されるときは `error` は null ではありません。エラーフォーマットは下記:"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\u002F\u002F { statusCode: 500, message: 'My error message' }"}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\u002F\u002F `asyncData()` または `fetch()` 内で `redirect()` が使われたときは `redirected` は `false` ではありません"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\u002F\u002F { path: '\u002Fother-path', query: {}, status: 302 }"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e}]}]}]}]},toc:{title:S,searchDepth:T,depth:T,links:[]}},template:"Docs"},templateOptions:{header:m,footer:m,aside:m,asideClass:S,fluid:q,banner:m},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/DeveloperThomas.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F01e0e4.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png","/_ipx/https://github.com/MrJmpl3.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3e840f.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/mtlynch.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F525213.png","/_ipx/https://github.com/book000.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3838a1.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/meirroth.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe09bc9.png","/_ipx/https://github.com/Brettanda.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F25f97d.png","/_ipx/https://github.com/armgitaar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0c63ae.png","/_ipx/https://github.com/thomasbnt.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F9f568f.png","/_ipx/https://github.com/karur4n.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F8dcce9.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"見る",items:[{title:U,subtitle:"Nuxt で作られた Web サイトセレクション",slug:"showcases",to:V,icon:"showcases.svg",color:"bg-sand"},{title:"事例紹介",subtitle:"企業による Nuxt の活用方法",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"著名人の声",subtitle:"私たちのことをどう思っているのか",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"学ぶ",items:[{title:W,subtitle:"高速な Web サイトを簡単に作成する",slug:"docs",to:X,icon:"docs.svg",color:"bg-green-500"},{title:Y,subtitle:"Nuxt のすべてを理解する",slug:"examples",to:Z,icon:"examples.svg",color:"bg-green-600"},{title:_,subtitle:"具体的なケースで学習する",slug:"tutorials",to:$,icon:"tutorials.svg",color:"bg-green-700"},{title:v,subtitle:F,href:w,icon:G,color:H}]},{title:"探す",items:[{title:aa,subtitle:"Nuxt のデプロイの仕方",slug:"deployments",to:ab,icon:"deployments.svg",color:"bg-indigo-light"},{title:ac,subtitle:"Nuxt のパワーを拡張する",href:ad,icon:"modules.svg",color:"bg-indigo"},{title:ae,subtitle:"テーマで始める",slug:"themes",to:af,icon:"themes.svg",color:"bg-indigo-dark"},{title:ag,subtitle:"ステップバイステップで学習する",slug:"video-courses",to:ah,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"コミュニティ",items:[{title:ai,subtitle:"Nuxt について最新ニュース",slug:"announcements",to:aj,icon:"announcements.svg",color:"bg-mint-lighter"},{title:ak,subtitle:"They are Nuxt",slug:"teams",to:al,icon:"teams.svg",color:"bg-mint-light"},{title:am,subtitle:"私たちがリリースしたすべてのコード",slug:"releases",to:an,icon:"releases.svg",color:"bg-mint"},{title:ao,subtitle:"私たちを信頼しています",slug:"sponsors",to:ap,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"パートナー",slug:"partners",to:aq}],footerLinks:[{title:"私たちについて",items:[{title:"連絡先",href:"mailto:hello@nuxtjs.com"},{title:"エンタープライズサポート",to:"\u002Fsupport"},{title:"NuxtLabs について",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"オープンソースソフトウェア",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"パートナーシップ",to:aq},{title:"テレメトリ",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"エコシステム",items:[{title:ai,to:aj},{title:"貢献",to:"\u002Fcontribution-guide"},{title:"チャット",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"イベント",to:"\u002Fevents"},{title:ao,to:ap},{title:ak,to:al},{title:_,to:$},{title:ag,to:ah}]},{title:"リソース",items:[{title:"デザイン",to:"\u002Fdesign"},{title:W,to:X},{title:Y,to:Z},{title:aa,to:ab},{title:v,href:w},{title:ac,href:ad},{title:am,to:an},{title:U,to:V},{title:ae,to:af}]}],showCookieBanner:q},"AsideBottom:0":{lastRelease:ar,masterCoursesLink:{title:v,subtitle:F,href:w,icon:G,color:H}},"AsideBottom:1":{lastRelease:ar,masterCoursesLink:{title:v,subtitle:F,href:w,icon:G,color:H}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org",prev:{slug:"nuxt-render",to:"\u002Fdocs\u002Finternals-glossary\u002Fnuxt-render",title:"nuxt.render(req, res)"},next:{slug:"nuxt-render-and-get-window",to:O,title:"nuxt.renderAndGetWindow(url, options)"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Fja\u002Fdocs\u002F6.internals-glossary\u002F11.nuxt-render-route.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:as,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:as},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:at,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:at},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"DeveloperThomas"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:au,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:au},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"},{name:"José Manuel Casani Guerra",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21302114?u=8ea39b04340fe8c4ebd63b1097497e1bf0d1454f&v=4",login:"MrJmpl3"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=2998231cea5f2bd7268cba898c9a947cb1d525b8&v=4",login:"owlnai"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Michael Lynch",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7783288?u=b6d8f48d38d7a64cddc633db4cfcd6915b997794&v=4",login:"mtlynch"},{name:"Tomachi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8929706?u=bb51b21fd7735505d999e27f7340c5f886f4d9fe&v=4",login:"book000"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Meir Roth",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F12494197?u=7828b437d2bc2402a6e8a4edd9ada378139f4742&v=4",login:"meirroth"},{name:"Brett",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14969098?u=34d0910e6ded49668e2a114eedbc26ab7b5979e7&v=4",login:"Brettanda"},{name:"Adam Miedema",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F30202878?u=aad565699f6b02961c47297dc931e5179d9ff8e1&v=4",login:"armgitaar"},{name:"Thomas Bnt",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14293805?u=e3f70b334910b6cfd43ad99c9f5b0523c07bd38a&v=4",login:"thomasbnt"},{name:"Kazuki Furukawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6816398?v=4",login:"karur4n"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","ProseEm","HomeLearnMaster","SectionContentItem","ProseHr","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","span","token","\n","punctuation","prose-code-inline"," ","prose-li","keyword","comment","function",true,"(",")","\n  ",false,"{","}","operator","\n\n  ","マスターコース","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-paragraph","Object",": ","const",",","=","string","control-flow","エキスパートといっしょにもっと学習する","master-courses.svg","bg-green-800","nuxt.renderRoute(route, context)","renderRoute","渡されたコンテキストを使い、特定のルートをレンダリングします。","prose-ul","String"," または ","\u002Fdocs\u002Finternals-glossary\u002Fnuxt-render-and-get-window","\n\n","start","await","",2,"導入事例","\u002Fshowcases","ドキュメント","\u002Fdocs","例","\u002Fexamples","チュートリアル","\u002Ftutorials","デプロイ","\u002Fdeployments","モジュール","https:\u002F\u002Fmodules.nuxtjs.org","テーマ","\u002Fthemes","ビデオコース","\u002Fvideo-courses","お知らせ","\u002Fannouncements","チーム","\u002Fteams","リリース","\u002Freleases","スポンサー","\u002Fsponsors","\u002Fpartners","v2.15.8","Ayouli","felipesuri","syagawa")));