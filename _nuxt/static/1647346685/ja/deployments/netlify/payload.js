__NUXT_JSONP__("/ja/deployments/netlify", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB){return {data:[{page:{key:"content:ja:deployments:1.netlify.md",generatedAt:new Date(1647346782358),mtime:new Date(1647346782349),slug:"netlify",title:B,position:"999900010000",to:"\u002Fdeployments\u002Fnetlify",draft:m,page:r,language:"ja",template:"Guide",description:C,target:"Static",category:"deployment",logo:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002Fnetlify.svg",empty:m,excerpt:void 0,body:{raw:"---\ntemplate: guide\ntitle: Netlify\ndescription: Nuxt を Netlify にどうやってデプロイするのか？\ntarget: Static\ncategory: deployment\nlogo: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002Fnetlify.svg\"\n---\n\n# Nuxt を Netlify でデプロイする\n\nNuxt を Netlify にどうやってデプロイするのか？\n\n---\n\n[Netlify](https:\u002F\u002Fwww.netlify.com) へのデプロイは、**静的に生成された** Nuxt サイトを素早くオンラインにするためのあつれきがないオプションです。\n\nこのプロセスでは、デプロイ時に `nuxt generate`(\u003C= v2.12) コマンドを使用して、Nuxt アプリの静的バージョンを `dist` ディレクトリに構築します。このディレクトリの内容は、本番用のURLにデプロイされます。\n\n\u003Cdiv class=\"Promo__Video\"\u003E\n  \u003Ca href=\"https:\u002F\u002Fexplorers.netlify.com\u002Flearn\u002Fget-started-with-nuxt\u002Fnuxt-generate-and-deploy\" target=\"_blank\"\u003E\n    \u003Cp class=\"Promo__Video__Icon\"\u003E\n      Watch a free lesson on \u003Cstrong\u003EHow to deploy Nuxt to Netlify\u003C\u002Fstrong\u003E on Jamstack Explorers\n    \u003C\u002Fp\u003E\n  \u003C\u002Fa\u003E\n\u003C\u002Fdiv\u003E\n\n## はじめに\n\nNetlify のダッシュボードにある _\"New site from Git\"_ ボタンを押してください。リポジトリホストで認証し、デプロイするリポジトリを選択して、次に進みます。ステップ3の _\"Build options, and deploy!\"_ が表示されます。\n\n## 設定:\n### 静的に生成されたサイト向け\n\n`nuxt.config` に `target: 'static'` があることを確認してください。\n\n1. **デプロイするブランチ：** `main`、または任意のブランチ\n1. **ビルドコマンド：** `npm run generate`\n1. **公開するディレクトリ：** `dist`\n\n### クライアントサイドレンダリングのみ向け\n\n`nuxt.config` に `target: 'static'` と `ssr: false` があることを確認してください。\n\n1. **デプロイするブランチ：** `main`、または任意のブランチ\n1. **ビルドコマンド：** `npm run generate`.\n1. **公開するディレクトリ：** `dist`\n\nクライアント側のレンダリングについては、Netlify のデフォルトでは、サイトが _\"404 not found\"_ にリダイレクトされるため、リフレッシュに問題があります。生成されていないページは、SPA モードにフォールバックされ、更新したりリンクを共有したりすると、Netlify の 404 ページが表示されます。これは、生成されなかったページが実際には存在しないためで、実際にはシングルページアプリケーションなので、このページを更新すると、そのページの URL が実際には存在しないため、404 が表示されます。404.html にリダイレクトすることで、Nuxt は SPA フォールバックで正しくページを再読み込みします。\n\nこの問題を解決する最も簡単な方法は、[generate プロパティ](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#fallback)を `nuxt.config` に追加して、`fallback: true` を設定することです。そうすると、SPA モードのときに、Netlify の 404 ページではなく、生成された 404.html にフォールバックされます。\n\n```js\nexport default {\n  generate: {\n    fallback: true\n  }\n}\n```\n\nしかし、アプリケーションのヘッダーやリダイレクトを自動的に適用したい場合は、そのためのモジュールがあります。これは、カスタムヘッダー\u002Fリダイレクト（`_headers` または `_redirects` ファイル）を使用している場合に特に便利です：\n\n[netlify-files-module](https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fnetlify-files-module)\n\n\u003E Netlify のリダイレクトについての詳細は、[Netlify ドキュメント](https:\u002F\u002Fwww.netlify.com\u002Fdocs\u002Fredirects\u002F#rewrites-and-proxying)を参照してください。\n\n\u003E Netlify のリダイレクトに関する簡単なリファレンスは、Divya Sasidharan 氏のブログ[記事](https:\u002F\u002Fwww.netlify.com\u002Fblog\u002F2019\u002F01\u002F16\u002Fredirect-rules-for-all-how-to-configure-redirects-for-your-static-site)をご覧ください。\n\n\u003E オプションとして、_\"Advanced\"_ ボタンで ENV 変数を追加することができます。これらは、別の API 認証情報を入れ替えたりするのに役立ちます。Netlify はまた、[default ENV variables](https:\u002F\u002Fwww.netlify.com\u002Fdocs\u002Fbuild-settings\u002F#build-environment-variables)を提供しており、Nuxt アプリケーションがビルド時に読み取ることができます。\n\n_Deploy site\"_ をクリックすると、すぐにデプロイが開始されます。あなたの Netlify サイトにはランダムな URL が割り当てられ、`nuxt generate` コマンドを使ってデプロイされます。\n\nそうです！ あなたの Nuxt アプリケーションは、Netlify 上でホストされています！\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"nuxt-を-netlify-でデプロイする"},children:[{type:a,value:"Nuxt を Netlify でデプロイする"}]},{type:a,value:c},{type:b,tag:e,props:{class:"d-heading-description"},children:[{type:a,value:C}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.netlify.com",rel:[n,o,p],target:k},children:[{type:a,value:B}]},{type:a,value:" へのデプロイは、"},{type:b,tag:j,props:{},children:[{type:a,value:"静的に生成された"}]},{type:a,value:" Nuxt サイトを素早くオンラインにするためのあつれきがないオプションです。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"このプロセスでは、デプロイ時に "},{type:b,tag:d,props:{},children:[{type:a,value:D}]},{type:a,value:"(\u003C= v2.12) コマンドを使用して、Nuxt アプリの静的バージョンを "},{type:b,tag:d,props:{},children:[{type:a,value:x}]},{type:a,value:" ディレクトリに構築します。このディレクトリの内容は、本番用のURLにデプロイされます。"}]},{type:a,value:c},{type:b,tag:"div",props:{className:["Promo__Video"]},children:[{type:a,value:y},{type:b,tag:"a",props:{href:"https:\u002F\u002Fexplorers.netlify.com\u002Flearn\u002Fget-started-with-nuxt\u002Fnuxt-generate-and-deploy",target:k},children:[{type:a,value:"\n    "},{type:b,tag:"p",props:{className:["Promo__Video__Icon"]},children:[{type:a,value:"\n      Watch a free lesson on "},{type:b,tag:"strong",props:{},children:[{type:a,value:"How to deploy Nuxt to Netlify"}]},{type:a,value:" on Jamstack Explorers\n    "}]},{type:a,value:y}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:E,props:{id:s},children:[{type:b,tag:f,props:{href:"#%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB"},children:[{type:a,value:s}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Netlify のダッシュボードにある "},{type:b,tag:q,props:{},children:[{type:a,value:"\"New site from Git\""}]},{type:a,value:" ボタンを押してください。リポジトリホストで認証し、デプロイするリポジトリを選択して、次に進みます。ステップ3の "},{type:b,tag:q,props:{},children:[{type:a,value:"\"Build options, and deploy!\""}]},{type:a,value:" が表示されます。"}]},{type:a,value:c},{type:b,tag:E,props:{id:F},children:[{type:b,tag:f,props:{href:"#%E8%A8%AD%E5%AE%9A"},children:[{type:a,value:G}]}]},{type:a,value:c},{type:b,tag:H,props:{id:t},children:[{type:b,tag:f,props:{href:"#%E9%9D%99%E7%9A%84%E3%81%AB%E7%94%9F%E6%88%90%E3%81%95%E3%82%8C%E3%81%9F%E3%82%B5%E3%82%A4%E3%83%88%E5%90%91%E3%81%91"},children:[{type:a,value:t}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:I},{type:b,tag:d,props:{},children:[{type:a,value:J}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:L,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:N}]},{type:a,value:O},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:P}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:Q}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:x}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:H,props:{id:u},children:[{type:b,tag:f,props:{href:"#%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%82%B5%E3%82%A4%E3%83%89%E3%83%AC%E3%83%B3%E3%83%80%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%AE%E3%81%BF%E5%90%91%E3%81%91"},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:I},{type:b,tag:d,props:{},children:[{type:a,value:J}]},{type:a,value:" と "},{type:b,tag:d,props:{},children:[{type:a,value:"ssr: false"}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:L,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:N}]},{type:a,value:O},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:P}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:Q}]},{type:a,value:"."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:d,props:{},children:[{type:a,value:x}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"クライアント側のレンダリングについては、Netlify のデフォルトでは、サイトが "},{type:b,tag:q,props:{},children:[{type:a,value:"\"404 not found\""}]},{type:a,value:" にリダイレクトされるため、リフレッシュに問題があります。生成されていないページは、SPA モードにフォールバックされ、更新したりリンクを共有したりすると、Netlify の 404 ページが表示されます。これは、生成されなかったページが実際には存在しないためで、実際にはシングルページアプリケーションなので、このページを更新すると、そのページの URL が実際には存在しないため、404 が表示されます。404.html にリダイレクトすることで、Nuxt は SPA フォールバックで正しくページを再読み込みします。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"この問題を解決する最も簡単な方法は、"},{type:b,tag:f,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#fallback"},children:[{type:a,value:"generate プロパティ"}]},{type:a,value:"を "},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:" に追加して、"},{type:b,tag:d,props:{},children:[{type:a,value:"fallback: true"}]},{type:a,value:" を設定することです。そうすると、SPA モードのときに、Netlify の 404 ページではなく、生成された 404.html にフォールバックされます。"}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-js","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:h,props:{className:[i,S,T]},children:[{type:a,value:"export"}]},{type:a,value:g},{type:b,tag:h,props:{className:[i,S,T]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:h,props:{className:[i,v]},children:[{type:a,value:U}]},{type:a,value:"\n  generate"},{type:b,tag:h,props:{className:[i,V]},children:[{type:a,value:W}]},{type:a,value:g},{type:b,tag:h,props:{className:[i,v]},children:[{type:a,value:U}]},{type:a,value:"\n    fallback"},{type:b,tag:h,props:{className:[i,V]},children:[{type:a,value:W}]},{type:a,value:g},{type:b,tag:h,props:{className:[i,"boolean"]},children:[{type:a,value:"true"}]},{type:a,value:y},{type:b,tag:h,props:{className:[i,v]},children:[{type:a,value:X}]},{type:a,value:c},{type:b,tag:h,props:{className:[i,v]},children:[{type:a,value:X}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"しかし、アプリケーションのヘッダーやリダイレクトを自動的に適用したい場合は、そのためのモジュールがあります。これは、カスタムヘッダー\u002Fリダイレクト（"},{type:b,tag:d,props:{},children:[{type:a,value:"_headers"}]},{type:a,value:" または "},{type:b,tag:d,props:{},children:[{type:a,value:"_redirects"}]},{type:a,value:" ファイル）を使用している場合に特に便利です："}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fnetlify-files-module",rel:[n,o,p],target:k},children:[{type:a,value:"netlify-files-module"}]}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Netlify のリダイレクトについての詳細は、"},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.netlify.com\u002Fdocs\u002Fredirects\u002F#rewrites-and-proxying",rel:[n,o,p],target:k},children:[{type:a,value:"Netlify ドキュメント"}]},{type:a,value:"を参照してください。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Netlify のリダイレクトに関する簡単なリファレンスは、Divya Sasidharan 氏のブログ"},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.netlify.com\u002Fblog\u002F2019\u002F01\u002F16\u002Fredirect-rules-for-all-how-to-configure-redirects-for-your-static-site",rel:[n,o,p],target:k},children:[{type:a,value:"記事"}]},{type:a,value:"をご覧ください。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"オプションとして、"},{type:b,tag:q,props:{},children:[{type:a,value:"\"Advanced\""}]},{type:a,value:" ボタンで ENV 変数を追加することができます。これらは、別の API 認証情報を入れ替えたりするのに役立ちます。Netlify はまた、"},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.netlify.com\u002Fdocs\u002Fbuild-settings\u002F#build-environment-variables",rel:[n,o,p],target:k},children:[{type:a,value:"default ENV variables"}]},{type:a,value:"を提供しており、Nuxt アプリケーションがビルド時に読み取ることができます。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:q,props:{},children:[{type:a,value:"Deploy site\""}]},{type:a,value:" をクリックすると、すぐにデプロイが開始されます。あなたの Netlify サイトにはランダムな URL が割り当てられ、"},{type:b,tag:d,props:{},children:[{type:a,value:D}]},{type:a,value:" コマンドを使ってデプロイされます。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"そうです！ あなたの Nuxt アプリケーションは、Netlify 上でホストされています！"}]}]},toc:{title:Y,searchDepth:w,depth:w,links:[{id:s,depth:w,text:s},{id:F,depth:w,text:G,children:[{id:t,depth:Z,text:t},{id:u,depth:Z,text:u}]}]}}},templateOptions:{header:r,footer:r,aside:m,asideClass:Y,fluid:m,banner:r},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/DeveloperThomas.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F01e0e4.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png","/_ipx/https://github.com/MrJmpl3.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3e840f.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/mtlynch.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F525213.png","/_ipx/https://github.com/book000.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3838a1.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/meirroth.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe09bc9.png","/_ipx/https://github.com/Brettanda.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F25f97d.png","/_ipx/https://github.com/armgitaar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0c63ae.png","/_ipx/https://github.com/thomasbnt.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F9f568f.png","/_ipx/https://github.com/karur4n.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F8dcce9.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"見る",items:[{title:_,subtitle:"Nuxt で作られた Web サイトセレクション",slug:"showcases",to:$,icon:"showcases.svg",color:"bg-sand"},{title:"事例紹介",subtitle:"企業による Nuxt の活用方法",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"著名人の声",subtitle:"私たちのことをどう思っているのか",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"学ぶ",items:[{title:aa,subtitle:"高速な Web サイトを簡単に作成する",slug:"docs",to:ab,icon:"docs.svg",color:"bg-green-500"},{title:ac,subtitle:"Nuxt のすべてを理解する",slug:"examples",to:ad,icon:"examples.svg",color:"bg-green-600"},{title:ae,subtitle:"具体的なケースで学習する",slug:"tutorials",to:af,icon:"tutorials.svg",color:"bg-green-700"},{title:ag,subtitle:"エキスパートといっしょにもっと学習する",href:ah,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"探す",items:[{title:ai,subtitle:"Nuxt のデプロイの仕方",slug:"deployments",to:aj,icon:"deployments.svg",color:"bg-indigo-light"},{title:ak,subtitle:"Nuxt のパワーを拡張する",href:al,icon:"modules.svg",color:"bg-indigo"},{title:am,subtitle:"テーマで始める",slug:"themes",to:an,icon:"themes.svg",color:"bg-indigo-dark"},{title:ao,subtitle:"ステップバイステップで学習する",slug:"video-courses",to:ap,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"コミュニティ",items:[{title:aq,subtitle:"Nuxt について最新ニュース",slug:"announcements",to:ar,icon:"announcements.svg",color:"bg-mint-lighter"},{title:as,subtitle:"They are Nuxt",slug:"teams",to:at,icon:"teams.svg",color:"bg-mint-light"},{title:au,subtitle:"私たちがリリースしたすべてのコード",slug:"releases",to:av,icon:"releases.svg",color:"bg-mint"},{title:aw,subtitle:"私たちを信頼しています",slug:"sponsors",to:ax,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"パートナー",slug:"partners",to:ay}],footerLinks:[{title:"私たちについて",items:[{title:"連絡先",href:"mailto:hello@nuxtjs.com"},{title:"エンタープライズサポート",to:"\u002Fsupport"},{title:"NuxtLabs について",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"オープンソースソフトウェア",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"パートナーシップ",to:ay},{title:"テレメトリ",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"エコシステム",items:[{title:aq,to:ar},{title:"貢献",to:"\u002Fcontribution-guide"},{title:"チャット",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"イベント",to:"\u002Fevents"},{title:aw,to:ax},{title:as,to:at},{title:ae,to:af},{title:ao,to:ap}]},{title:"リソース",items:[{title:"デザイン",to:"\u002Fdesign"},{title:aa,to:ab},{title:ac,to:ad},{title:ai,to:aj},{title:ag,href:ah},{title:ak,href:al},{title:au,to:av},{title:_,to:$},{title:am,to:an}]}],showCookieBanner:m},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Fja\u002Fdeployments\u002F1.netlify.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:az,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:az},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:aA,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:aA},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"DeveloperThomas"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:aB,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:aB},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"},{name:"José Manuel Casani Guerra",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21302114?u=8ea39b04340fe8c4ebd63b1097497e1bf0d1454f&v=4",login:"MrJmpl3"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=2998231cea5f2bd7268cba898c9a947cb1d525b8&v=4",login:"owlnai"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Michael Lynch",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7783288?u=b6d8f48d38d7a64cddc633db4cfcd6915b997794&v=4",login:"mtlynch"},{name:"Tomachi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8929706?u=bb51b21fd7735505d999e27f7340c5f886f4d9fe&v=4",login:"book000"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Meir Roth",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F12494197?u=7828b437d2bc2402a6e8a4edd9ada378139f4742&v=4",login:"meirroth"},{name:"Brett",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14969098?u=34d0910e6ded49668e2a114eedbc26ab7b5979e7&v=4",login:"Brettanda"},{name:"Adam Miedema",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F30202878?u=aad565699f6b02961c47297dc931e5179d9ff8e1&v=4",login:"armgitaar"},{name:"Thomas Bnt",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14293805?u=e3f70b334910b6cfd43ad99c9f5b0523c07bd38a&v=4",login:"thomasbnt"},{name:"Kazuki Furukawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6816398?v=4",login:"karur4n"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","ProseEm","HomeLearnMaster","SectionContentItem","ProseHr","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link"])},mutations:[]}}("text","element","\n","prose-code-inline","prose-paragraph","prose-a"," ","span","token","prose-strong","_blank","prose-li",false,"nofollow","noopener","noreferrer","prose-em",true,"はじめに","静的に生成されたサイト向け","クライアントサイドレンダリングのみ向け","punctuation",2,"dist","\n  ","nuxt.config","prose-blockquote","Netlify","Nuxt を Netlify にどうやってデプロイするのか？","nuxt generate","prose-h2","設定","設定:","prose-h3"," に ","target: 'static'"," があることを確認してください。","prose-ol","デプロイするブランチ：","main","、または任意のブランチ","ビルドコマンド：","npm run generate","公開するディレクトリ：","keyword","module","{","operator",":","}","",3,"導入事例","\u002Fshowcases","ドキュメント","\u002Fdocs","例","\u002Fexamples","チュートリアル","\u002Ftutorials","マスターコース","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","デプロイ","\u002Fdeployments","モジュール","https:\u002F\u002Fmodules.nuxtjs.org","テーマ","\u002Fthemes","ビデオコース","\u002Fvideo-courses","お知らせ","\u002Fannouncements","チーム","\u002Fteams","リリース","\u002Freleases","スポンサー","\u002Fsponsors","\u002Fpartners","Ayouli","felipesuri","syagawa")));