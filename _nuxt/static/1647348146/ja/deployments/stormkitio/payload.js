__NUXT_JSONP__("/ja/deployments/stormkitio", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac){return {data:[{page:{key:"content:ja:deployments:stormkitio.md",generatedAt:new Date(1647348222582),mtime:new Date(1647348222576),slug:"stormkitio",title:v,position:"999999990000",to:"\u002Fdeployments\u002Fstormkitio",draft:n,page:o,language:"ja",template:"Guide",description:"Nuxt を Stormkit.io にどうやってデプロイするのか？",target:"Static & Server",category:"deployment",logo:{light:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002FStormkit.svg",dark:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002FStormkit.svg"},empty:n,excerpt:void 0,body:{raw:"---\ntemplate: guide\ntitle: Stormkit.io\ndescription: Nuxt を Stormkit.io にどうやってデプロイするのか？\ntarget: Static & Server\ncategory: deployment\nlogo:\n  light: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002FStormkit.svg\"\n  dark: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002FStormkit.svg\"\n---\n# Deploy with Stormkit\n\nHow to deploy Nuxt with Stormkit.io?\n\n---\n\n[Stormkit.io](https:\u002F\u002Fwww.stormkit.io) を使って、Nuxt アプリケーションを簡単に構築、デプロイ、スケーリングすることができます。インスタントロールバック、サーバーレスサイドロジック、スニペットインジェクション、複数の開発環境など...をサポートしています。\n\n## 前提条件\n\nこのガイドでは、デプロイする Nuxt プロジェクトがすでにあることを前提としています。プロジェクトが必要な場合は、[create-nuxt-app](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcreate-nuxt-app) を使用して開始するか、Stormkitの[Nuxt Example](https:\u002F\u002Fgithub.com\u002Fstormkit-dev\u002Fhackernews-nuxt)をフォークしてから続行してください。\n\n## セットアップ\n\n1. [app.stormkit.io](https:\u002F\u002Fapp.stormkit.io)にアクセスし、git プロバイダを選択してログインします。\n2. ログインすると、コードベースがどのプロバイダーに置かれているかをストームキットが尋ねてきます。もう一度プロバイダをクリックします。\n3. GitHub の場合、'Connect more repositories' をクリックし、Stormkit のアクセスを許可します。\n4. 次に、リポジトリを選択します。これで Stormkit 上にアプリケーションが作成されます。\n5. アプリケーションのページで、**本番**環境を見つけて、それをクリックします。\n6. 編集をクリックして、アプリケーションを設定します。この画面では、ビルドコマンドと環境変数を指定します。\n   環境変数の設定を行いますが、この画面では\n\n## 静的サイト\n\n静的なウェブサイトでは何もする必要はありません。`nuxt generate` で構築されたアプリケーションは、すぐに処理されます。\n\n## シングルページアプリケーション\n\nシングルページアプリケーションの場合は、すべてのリクエストを `index.html` にリダイレクトする `stormkit.config.yml` を用意するだけでよいでしょう。\nすべてのリクエストを `index.html` にリダイレクトします。そのためには、プロジェクトのトップレベルに `stormkit.config.yml` ファイルを作成し、以下のルールを指定します：\n\n```\napp:\n- redirects:\n    - from: \u002F*\n      to: \u002Findex.html\n      assets: false\n```\n\n## ハイブリッドアプリケーション\n\nハイブリッドアプリケーションの場合は、ビルド設定ページで `Serverless` のトグルをオンにする必要があります。これにより、Stormkit は CDN ではなく lamdas からリクエストを処理するようになります。ハイブリッドサーバーレスアプリケーションの設定については、[こちらのガイド](https:\u002F\u002Fwww.stormkit.io\u002Fdocs\u002Fdeployments\u002Fconfiguration\u002Fnuxt#hybrid)で詳しく説明しています。\n\n## Stormkit を使ったホスティング\n\nStormkit は、各デプロイメントに固有の URL を生成します。これらのリンクを使用して、アプリケーションをプレビューすることができます。その後、ドメインに接続して任意のデプロイメントを公開すると、ユーザーにそのバージョンのアプリケーションが表示されるようになります。また、複数のバージョンを同時に公開することで、段階的なロールアウトやA\u002FBテストを行うことができます。\n\n## サポート\n\nさらにサポートが必要な場合は、[Discord](https:\u002F\u002Fdiscord.gg\u002F6yQWhyY)で Stormkit の開発者や他のコミュニティメンバーとチャットすることができます。\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"deploy-with-stormkit"},children:[{type:a,value:"Deploy with Stormkit"}]},{type:a,value:c},{type:b,tag:f,props:{class:"d-heading-description"},children:[{type:a,value:"How to deploy Nuxt with Stormkit.io?"}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.stormkit.io",rel:[h,i,j],target:k},children:[{type:a,value:v}]},{type:a,value:" を使って、Nuxt アプリケーションを簡単に構築、デプロイ、スケーリングすることができます。インスタントロールバック、サーバーレスサイドロジック、スニペットインジェクション、複数の開発環境など...をサポートしています。"}]},{type:a,value:c},{type:b,tag:g,props:{id:p},children:[{type:b,tag:d,props:{href:"#%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6"},children:[{type:a,value:p}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"このガイドでは、デプロイする Nuxt プロジェクトがすでにあることを前提としています。プロジェクトが必要な場合は、"},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcreate-nuxt-app",rel:[h,i,j],target:k},children:[{type:a,value:"create-nuxt-app"}]},{type:a,value:" を使用して開始するか、Stormkitの"},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fstormkit-dev\u002Fhackernews-nuxt",rel:[h,i,j],target:k},children:[{type:a,value:"Nuxt Example"}]},{type:a,value:"をフォークしてから続行してください。"}]},{type:a,value:c},{type:b,tag:g,props:{id:q},children:[{type:b,tag:d,props:{href:"#%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97"},children:[{type:a,value:q}]}]},{type:a,value:c},{type:b,tag:"prose-ol",props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{href:"https:\u002F\u002Fapp.stormkit.io",rel:[h,i,j],target:k},children:[{type:a,value:"app.stormkit.io"}]},{type:a,value:"にアクセスし、git プロバイダを選択してログインします。"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:"ログインすると、コードベースがどのプロバイダーに置かれているかをストームキットが尋ねてきます。もう一度プロバイダをクリックします。"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:"GitHub の場合、'Connect more repositories' をクリックし、Stormkit のアクセスを許可します。"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:"次に、リポジトリを選択します。これで Stormkit 上にアプリケーションが作成されます。"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:"アプリケーションのページで、"},{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"本番"}]},{type:a,value:"環境を見つけて、それをクリックします。"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:"編集をクリックして、アプリケーションを設定します。この画面では、ビルドコマンドと環境変数を指定します。\n環境変数の設定を行いますが、この画面では"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{id:r},children:[{type:b,tag:d,props:{href:"#%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88"},children:[{type:a,value:r}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"静的なウェブサイトでは何もする必要はありません。"},{type:b,tag:m,props:{},children:[{type:a,value:"nuxt generate"}]},{type:a,value:" で構築されたアプリケーションは、すぐに処理されます。"}]},{type:a,value:c},{type:b,tag:g,props:{id:s},children:[{type:b,tag:d,props:{href:"#%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E3%83%9A%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3"},children:[{type:a,value:s}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"シングルページアプリケーションの場合は、すべてのリクエストを "},{type:b,tag:m,props:{},children:[{type:a,value:w}]},{type:a,value:" にリダイレクトする "},{type:b,tag:m,props:{},children:[{type:a,value:x}]},{type:a,value:" を用意するだけでよいでしょう。\nすべてのリクエストを "},{type:b,tag:m,props:{},children:[{type:a,value:w}]},{type:a,value:" にリダイレクトします。そのためには、プロジェクトのトップレベルに "},{type:b,tag:m,props:{},children:[{type:a,value:x}]},{type:a,value:" ファイルを作成し、以下のルールを指定します："}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:a,value:"app:\n- redirects:\n    - from: \u002F*\n      to: \u002Findex.html\n      assets: false\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{id:t},children:[{type:b,tag:d,props:{href:"#%E3%83%8F%E3%82%A4%E3%83%96%E3%83%AA%E3%83%83%E3%83%89%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3"},children:[{type:a,value:t}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"ハイブリッドアプリケーションの場合は、ビルド設定ページで "},{type:b,tag:m,props:{},children:[{type:a,value:"Serverless"}]},{type:a,value:" のトグルをオンにする必要があります。これにより、Stormkit は CDN ではなく lamdas からリクエストを処理するようになります。ハイブリッドサーバーレスアプリケーションの設定については、"},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.stormkit.io\u002Fdocs\u002Fdeployments\u002Fconfiguration\u002Fnuxt#hybrid",rel:[h,i,j],target:k},children:[{type:a,value:"こちらのガイド"}]},{type:a,value:"で詳しく説明しています。"}]},{type:a,value:c},{type:b,tag:g,props:{id:y},children:[{type:b,tag:d,props:{href:"#stormkit-%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%83%9B%E3%82%B9%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0"},children:[{type:a,value:z}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Stormkit は、各デプロイメントに固有の URL を生成します。これらのリンクを使用して、アプリケーションをプレビューすることができます。その後、ドメインに接続して任意のデプロイメントを公開すると、ユーザーにそのバージョンのアプリケーションが表示されるようになります。また、複数のバージョンを同時に公開することで、段階的なロールアウトやA\u002FBテストを行うことができます。"}]},{type:a,value:c},{type:b,tag:g,props:{id:u},children:[{type:b,tag:d,props:{href:"#%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88"},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"さらにサポートが必要な場合は、"},{type:b,tag:d,props:{href:"https:\u002F\u002Fdiscord.gg\u002F6yQWhyY",rel:[h,i,j],target:k},children:[{type:a,value:"Discord"}]},{type:a,value:"で Stormkit の開発者や他のコミュニティメンバーとチャットすることができます。"}]}]},toc:{title:A,searchDepth:e,depth:e,links:[{id:p,depth:e,text:p},{id:q,depth:e,text:q},{id:r,depth:e,text:r},{id:s,depth:e,text:s},{id:t,depth:e,text:t},{id:y,depth:e,text:z},{id:u,depth:e,text:u}]}}},templateOptions:{header:o,footer:o,aside:n,asideClass:A,fluid:n,banner:o},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/DeveloperThomas.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F01e0e4.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png","/_ipx/https://github.com/MrJmpl3.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3e840f.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/mtlynch.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F525213.png","/_ipx/https://github.com/book000.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3838a1.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/meirroth.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe09bc9.png","/_ipx/https://github.com/Brettanda.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F25f97d.png","/_ipx/https://github.com/armgitaar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0c63ae.png","/_ipx/https://github.com/thomasbnt.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F9f568f.png","/_ipx/https://github.com/karur4n.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F8dcce9.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"見る",items:[{title:B,subtitle:"Nuxt で作られた Web サイトセレクション",slug:"showcases",to:C,icon:"showcases.svg",color:"bg-sand"},{title:"事例紹介",subtitle:"企業による Nuxt の活用方法",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"著名人の声",subtitle:"私たちのことをどう思っているのか",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"学ぶ",items:[{title:D,subtitle:"高速な Web サイトを簡単に作成する",slug:"docs",to:E,icon:"docs.svg",color:"bg-green-500"},{title:F,subtitle:"Nuxt のすべてを理解する",slug:"examples",to:G,icon:"examples.svg",color:"bg-green-600"},{title:H,subtitle:"具体的なケースで学習する",slug:"tutorials",to:I,icon:"tutorials.svg",color:"bg-green-700"},{title:J,subtitle:"エキスパートといっしょにもっと学習する",href:K,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"探す",items:[{title:L,subtitle:"Nuxt のデプロイの仕方",slug:"deployments",to:M,icon:"deployments.svg",color:"bg-indigo-light"},{title:N,subtitle:"Nuxt のパワーを拡張する",href:O,icon:"modules.svg",color:"bg-indigo"},{title:P,subtitle:"テーマで始める",slug:"themes",to:Q,icon:"themes.svg",color:"bg-indigo-dark"},{title:R,subtitle:"ステップバイステップで学習する",slug:"video-courses",to:S,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"コミュニティ",items:[{title:T,subtitle:"Nuxt について最新ニュース",slug:"announcements",to:U,icon:"announcements.svg",color:"bg-mint-lighter"},{title:V,subtitle:"They are Nuxt",slug:"teams",to:W,icon:"teams.svg",color:"bg-mint-light"},{title:X,subtitle:"私たちがリリースしたすべてのコード",slug:"releases",to:Y,icon:"releases.svg",color:"bg-mint"},{title:Z,subtitle:"私たちを信頼しています",slug:"sponsors",to:_,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"パートナー",slug:"partners",to:$}],footerLinks:[{title:"私たちについて",items:[{title:"連絡先",href:"mailto:hello@nuxtjs.com"},{title:"エンタープライズサポート",to:"\u002Fsupport"},{title:"NuxtLabs について",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"オープンソースソフトウェア",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"パートナーシップ",to:$},{title:"テレメトリ",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"エコシステム",items:[{title:T,to:U},{title:"貢献",to:"\u002Fcontribution-guide"},{title:"チャット",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"イベント",to:"\u002Fevents"},{title:Z,to:_},{title:V,to:W},{title:H,to:I},{title:R,to:S}]},{title:"リソース",items:[{title:"デザイン",to:"\u002Fdesign"},{title:D,to:E},{title:F,to:G},{title:L,to:M},{title:J,href:K},{title:N,href:O},{title:X,to:Y},{title:B,to:C},{title:P,to:Q}]}],showCookieBanner:n},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Fja\u002Fdeployments\u002Fstormkitio.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:aa,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:aa},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:ab,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:ab},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"DeveloperThomas"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:ac,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:ac},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"},{name:"José Manuel Casani Guerra",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21302114?u=8ea39b04340fe8c4ebd63b1097497e1bf0d1454f&v=4",login:"MrJmpl3"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=2998231cea5f2bd7268cba898c9a947cb1d525b8&v=4",login:"owlnai"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Michael Lynch",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7783288?u=b6d8f48d38d7a64cddc633db4cfcd6915b997794&v=4",login:"mtlynch"},{name:"Tomachi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8929706?u=bb51b21fd7735505d999e27f7340c5f886f4d9fe&v=4",login:"book000"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Meir Roth",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F12494197?u=7828b437d2bc2402a6e8a4edd9ada378139f4742&v=4",login:"meirroth"},{name:"Brett",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14969098?u=34d0910e6ded49668e2a114eedbc26ab7b5979e7&v=4",login:"Brettanda"},{name:"Adam Miedema",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F30202878?u=aad565699f6b02961c47297dc931e5179d9ff8e1&v=4",login:"armgitaar"},{name:"Thomas Bnt",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14293805?u=e3f70b334910b6cfd43ad99c9f5b0523c07bd38a&v=4",login:"thomasbnt"},{name:"Kazuki Furukawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6816398?v=4",login:"karur4n"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseEm","ProseHr","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable"])},mutations:[]}}("text","element","\n","prose-a",2,"prose-paragraph","prose-h2","nofollow","noopener","noreferrer","_blank","prose-li","prose-code-inline",false,true,"前提条件","セットアップ","静的サイト","シングルページアプリケーション","ハイブリッドアプリケーション","サポート","Stormkit.io","index.html","stormkit.config.yml","stormkit-を使ったホスティング","Stormkit を使ったホスティング","","導入事例","\u002Fshowcases","ドキュメント","\u002Fdocs","例","\u002Fexamples","チュートリアル","\u002Ftutorials","マスターコース","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","デプロイ","\u002Fdeployments","モジュール","https:\u002F\u002Fmodules.nuxtjs.org","テーマ","\u002Fthemes","ビデオコース","\u002Fvideo-courses","お知らせ","\u002Fannouncements","チーム","\u002Fteams","リリース","\u002Freleases","スポンサー","\u002Fsponsors","\u002Fpartners","Ayouli","felipesuri","syagawa")));