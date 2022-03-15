__NUXT_JSONP__("/ja/deployments/platformsh", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R){return {data:[{page:{key:"content:ja:deployments:platformsh.md",generatedAt:new Date(1647346787389),mtime:new Date(1647346787383),slug:"platformsh",title:j,position:"999999990000",to:"\u002Fdeployments\u002Fplatformsh",draft:e,page:g,language:"ja",template:"Guide",description:k,target:"Static & Server",category:"deployment",logo:{light:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002FPlatformsh.svg",dark:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002FPlatformsh.svg"},empty:e,excerpt:void 0,body:{raw:"---\ntemplate: guide\ntitle: Platform.sh\ndescription: Nuxt を Platform.sh にどうやってデプロイするのか？\ntarget: Static & Server\ncategory: deployment\nlogo:\n  light: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002FPlatformsh.svg\"\n  dark: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002FPlatformsh.svg\"\n---\n# Nuxt を Platform.sh にデプロイする\n\nNuxt を Platform.sh にどうやってデプロイするのか？\n\n---\n\n[Platform.sh](https:\u002F\u002Fplatform.sh\u002F)は、ステージング環境と本番環境の両方に対応した、フル機能を備えたエンドツーエンドの継続的デプロイメントクラウドホスティングシステムです。様々な言語で書かれた静的なアプリケーションと動的なアプリケーションの両方をホスティングすることができます。\n\nPlatform.shには以下のような機能があります：\n\n- アプリケーションの構築、デプロイ、管理、拡張が可能です。\n- どのブランチもステージング環境とすることができ、簡単に環境を作成、削除することができます。\n- Node.js、PHP、Python、Ruby、Go、または Java アプリケーションといったほとんどサポートしており、任意のバージョンを選択できます。\n- 自動 TLS 証明書\n- 統合されたビルドパイプラインにより、アプリケーションのビルドプロセスを必要に応じてカスタマイズできます。\n- Infrastructure-as-code：3つの YAML ファイルを定義するだけで、必要に応じてクラスター全体が作成されます。サービスの追加と削除が簡単にできます。\n- GitHub や GitLab のリポジトリから直接コードをデプロイできます。\n\n## セットアップ\n\nPlatform.sh には、Nuxt 用のテンプレートがあらかじめ用意されています。以下のリンクをクリックすると、新しい Platform.sh プロジェクトが作成され、Nuxt のサンプルアプリケーションがあらかじめ用意されています。それをカスタマイズしてみてください。\n\n\u003Cp align=\"center\"\u003E\n\u003Ca href=\"https:\u002F\u002Fconsole.platform.sh\u002Fprojects\u002Fcreate-project?template=https:\u002F\u002Fraw.githubusercontent.com\u002Fplatformsh\u002Ftemplate-builder\u002Fmaster\u002Ftemplates\u002Fnuxtjs\u002F.platform.template.yaml&utm_content=nuxtjs&utm_source=nuxtjs_orgb&utm_medium=button&utm_campaign=deploy_on_platform\" target=\"_blank\"\u003E\n    \u003Cimg src=\"https:\u002F\u002Fplatform.sh\u002Fimages\u002Fdeploy\u002Flg-blue.svg\" alt=\"Deploy on Platform.sh\" height=\"40px\" width=\"180px\" \u002F\u003E\n\u003C\u002Fa\u003E\n\u003C\u002Fp\u003E\n\n`README.md`ファイルには、提供されたデフォルト設定の詳細が含まれています。Platform.sh の新規アカウントは、最初の 30 日間は無料です。\n",ast:{type:"root",children:[{type:c,tag:"prose-h1",props:{class:"d-heading-title",id:"nuxt-を-platformsh-にデプロイする"},children:[{type:a,value:"Nuxt を Platform.sh にデプロイする"}]},{type:a,value:b},{type:c,tag:f,props:{class:"d-heading-description"},children:[{type:a,value:k}]},{type:a,value:b},{type:c,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:c,tag:l,props:{href:"https:\u002F\u002Fplatform.sh\u002F",rel:["nofollow","noopener","noreferrer"],target:m},children:[{type:a,value:j}]},{type:a,value:"は、ステージング環境と本番環境の両方に対応した、フル機能を備えたエンドツーエンドの継続的デプロイメントクラウドホスティングシステムです。様々な言語で書かれた静的なアプリケーションと動的なアプリケーションの両方をホスティングすることができます。"}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:"Platform.shには以下のような機能があります："}]},{type:a,value:b},{type:c,tag:"prose-ul",props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:a,value:"アプリケーションの構築、デプロイ、管理、拡張が可能です。"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:a,value:"どのブランチもステージング環境とすることができ、簡単に環境を作成、削除することができます。"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:a,value:"Node.js、PHP、Python、Ruby、Go、または Java アプリケーションといったほとんどサポートしており、任意のバージョンを選択できます。"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:a,value:"自動 TLS 証明書"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:a,value:"統合されたビルドパイプラインにより、アプリケーションのビルドプロセスを必要に応じてカスタマイズできます。"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:a,value:"Infrastructure-as-code：3つの YAML ファイルを定義するだけで、必要に応じてクラスター全体が作成されます。サービスの追加と削除が簡単にできます。"},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:a,value:"GitHub や GitLab のリポジトリから直接コードをデプロイできます。"},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:"prose-h2",props:{id:h},children:[{type:c,tag:l,props:{href:"#%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97"},children:[{type:a,value:h}]}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:"Platform.sh には、Nuxt 用のテンプレートがあらかじめ用意されています。以下のリンクをクリックすると、新しい Platform.sh プロジェクトが作成され、Nuxt のサンプルアプリケーションがあらかじめ用意されています。それをカスタマイズしてみてください。"}]},{type:a,value:b},{type:c,tag:"p",props:{align:"center"},children:[{type:a,value:b},{type:c,tag:"a",props:{href:"https:\u002F\u002Fconsole.platform.sh\u002Fprojects\u002Fcreate-project?template=https:\u002F\u002Fraw.githubusercontent.com\u002Fplatformsh\u002Ftemplate-builder\u002Fmaster\u002Ftemplates\u002Fnuxtjs\u002F.platform.template.yaml&utm_content=nuxtjs&utm_source=nuxtjs_orgb&utm_medium=button&utm_campaign=deploy_on_platform",target:m},children:[{type:a,value:"\n    "},{type:c,tag:"img",props:{src:"https:\u002F\u002Fplatform.sh\u002Fimages\u002Fdeploy\u002Flg-blue.svg",alt:"Deploy on Platform.sh",height:"40px",width:"180px"},children:[]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:c,tag:"prose-code-inline",props:{},children:[{type:a,value:"README.md"}]},{type:a,value:"ファイルには、提供されたデフォルト設定の詳細が含まれています。Platform.sh の新規アカウントは、最初の 30 日間は無料です。"}]}]},toc:{title:n,searchDepth:i,depth:i,links:[{id:h,depth:i,text:h}]}}},templateOptions:{header:g,footer:g,aside:e,asideClass:n,fluid:e,banner:g},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/DeveloperThomas.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F01e0e4.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png","/_ipx/https://github.com/MrJmpl3.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3e840f.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/mtlynch.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F525213.png","/_ipx/https://github.com/book000.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3838a1.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/meirroth.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe09bc9.png","/_ipx/https://github.com/Brettanda.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F25f97d.png","/_ipx/https://github.com/armgitaar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0c63ae.png","/_ipx/https://github.com/thomasbnt.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F9f568f.png","/_ipx/https://github.com/karur4n.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F8dcce9.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"見る",items:[{title:o,subtitle:"Nuxt で作られた Web サイトセレクション",slug:"showcases",to:p,icon:"showcases.svg",color:"bg-sand"},{title:"事例紹介",subtitle:"企業による Nuxt の活用方法",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"著名人の声",subtitle:"私たちのことをどう思っているのか",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"学ぶ",items:[{title:q,subtitle:"高速な Web サイトを簡単に作成する",slug:"docs",to:r,icon:"docs.svg",color:"bg-green-500"},{title:s,subtitle:"Nuxt のすべてを理解する",slug:"examples",to:t,icon:"examples.svg",color:"bg-green-600"},{title:u,subtitle:"具体的なケースで学習する",slug:"tutorials",to:v,icon:"tutorials.svg",color:"bg-green-700"},{title:w,subtitle:"エキスパートといっしょにもっと学習する",href:x,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"探す",items:[{title:y,subtitle:"Nuxt のデプロイの仕方",slug:"deployments",to:z,icon:"deployments.svg",color:"bg-indigo-light"},{title:A,subtitle:"Nuxt のパワーを拡張する",href:B,icon:"modules.svg",color:"bg-indigo"},{title:C,subtitle:"テーマで始める",slug:"themes",to:D,icon:"themes.svg",color:"bg-indigo-dark"},{title:E,subtitle:"ステップバイステップで学習する",slug:"video-courses",to:F,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"コミュニティ",items:[{title:G,subtitle:"Nuxt について最新ニュース",slug:"announcements",to:H,icon:"announcements.svg",color:"bg-mint-lighter"},{title:I,subtitle:"They are Nuxt",slug:"teams",to:J,icon:"teams.svg",color:"bg-mint-light"},{title:K,subtitle:"私たちがリリースしたすべてのコード",slug:"releases",to:L,icon:"releases.svg",color:"bg-mint"},{title:M,subtitle:"私たちを信頼しています",slug:"sponsors",to:N,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"パートナー",slug:"partners",to:O}],footerLinks:[{title:"私たちについて",items:[{title:"連絡先",href:"mailto:hello@nuxtjs.com"},{title:"エンタープライズサポート",to:"\u002Fsupport"},{title:"NuxtLabs について",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"オープンソースソフトウェア",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"パートナーシップ",to:O},{title:"テレメトリ",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"エコシステム",items:[{title:G,to:H},{title:"貢献",to:"\u002Fcontribution-guide"},{title:"チャット",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"イベント",to:"\u002Fevents"},{title:M,to:N},{title:I,to:J},{title:u,to:v},{title:E,to:F}]},{title:"リソース",items:[{title:"デザイン",to:"\u002Fdesign"},{title:q,to:r},{title:s,to:t},{title:y,to:z},{title:w,href:x},{title:A,href:B},{title:K,to:L},{title:o,to:p},{title:C,to:D}]}],showCookieBanner:e},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Fja\u002Fdeployments\u002Fplatformsh.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:P,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:P},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:Q,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:Q},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"DeveloperThomas"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:R,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:R},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"},{name:"José Manuel Casani Guerra",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21302114?u=8ea39b04340fe8c4ebd63b1097497e1bf0d1454f&v=4",login:"MrJmpl3"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=2998231cea5f2bd7268cba898c9a947cb1d525b8&v=4",login:"owlnai"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Michael Lynch",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7783288?u=b6d8f48d38d7a64cddc633db4cfcd6915b997794&v=4",login:"mtlynch"},{name:"Tomachi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8929706?u=bb51b21fd7735505d999e27f7340c5f886f4d9fe&v=4",login:"book000"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Meir Roth",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F12494197?u=7828b437d2bc2402a6e8a4edd9ada378139f4742&v=4",login:"meirroth"},{name:"Brett",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14969098?u=34d0910e6ded49668e2a114eedbc26ab7b5979e7&v=4",login:"Brettanda"},{name:"Adam Miedema",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F30202878?u=aad565699f6b02961c47297dc931e5179d9ff8e1&v=4",login:"armgitaar"},{name:"Thomas Bnt",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14293805?u=e3f70b334910b6cfd43ad99c9f5b0523c07bd38a&v=4",login:"thomasbnt"},{name:"Kazuki Furukawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6816398?v=4",login:"karur4n"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","ProseEm","HomeLearnMaster","SectionContentItem","ProseHr","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link"])},mutations:[]}}("text","\n","element","prose-li",false,"prose-paragraph",true,"セットアップ",2,"Platform.sh","Nuxt を Platform.sh にどうやってデプロイするのか？","prose-a","_blank","","導入事例","\u002Fshowcases","ドキュメント","\u002Fdocs","例","\u002Fexamples","チュートリアル","\u002Ftutorials","マスターコース","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","デプロイ","\u002Fdeployments","モジュール","https:\u002F\u002Fmodules.nuxtjs.org","テーマ","\u002Fthemes","ビデオコース","\u002Fvideo-courses","お知らせ","\u002Fannouncements","チーム","\u002Fteams","リリース","\u002Freleases","スポンサー","\u002Fsponsors","\u002Fpartners","Ayouli","felipesuri","syagawa")));