__NUXT_JSONP__("/ja/docs/get-started/directory-structure", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am){return {data:[{page:{key:"content:ja:docs:1.get-started:3.directory-structure.md",generatedAt:new Date(1647346793324),mtime:new Date(1647346793314),slug:"directory-structure",title:t,position:"999900010003",to:"\u002Fdocs\u002Fget-started\u002Fdirectory-structure",draft:m,page:k,language:"ja",description:C,category:"get-started",csb_link:"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F01_get_started\u002F03_directory_structure?fontsize=14&hidenavigation=1&theme=dark",empty:m,excerpt:void 0,body:{raw:"---\ntitle: ディレクトリ構造\ndescription: デフォルトの Nuxt のアプリケーション構造は小規模なものから大規模なものまで両方のアプリケーションにとって素晴らしい出発点を提供することを目的としています。アプリケーションは自由に構成でき、必要に応じて他のディレクトリを作成することができます。\ncategory: get-started\ncsb_link: https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F01_get_started\u002F03_directory_structure?fontsize=14&hidenavigation=1&theme=dark\n---\n# ディレクトリ構造\n\nデフォルトの Nuxt のアプリケーション構造は小規模なものから大規模なものまで両方のアプリケーションにとって素晴らしい出発点を提供することを目的としています。アプリケーションは自由に構成でき、必要に応じて他のディレクトリを作成することができます。\n\n---\n\nプロジェクトにまだ存在しないディレクトリとファイルを作成してみましょう。\n\n\n```bash\nmkdir components assets static\ntouch nuxt.config.js\n```\n\nこれらは Nuxt アプリケーションを構築する際に使用する主なディレクトリとファイルです。それぞれについての説明は後述します。\n\n::alert{type=\"info\"}\nこれらの名前のディレクトリを作成することで、Nuxt プロジェクトの機能を利用できるようになります。\n::\n\n## ディレクトリ\n\n### pages ディレクトリ\n\n`pages` ディレクトリにはアプリケーションのビューとルートが含まれています。前の章で学んだように、Nuxt はこのディレクトリ内の `.vue` ファイルをすべて読み込み、アプリケーションのルーターを作成します。\n\n::alert{type=\"next\"}\n[pages ディレクトリ](\u002Fdocs\u002Fdirectory-structure\u002Fpages) についてより理解する\n::\n\n### components ディレクトリ\n\n`components` ディレクトリにはページにインポートするすべての Vue.js のコンポーネントファイルを入れます。\n\nNuxt を使用すると、作成したコンポーネントを .vue ファイルに自動でインポートすることができます。（訳注: nuxt.config.js 内の）components を true に設定すると、Nuxt がスキャンして自動でインポートしてくれます。\n\n::alert{type=\"next\"}\n[components ディレクトリ](\u002Fdocs\u002Fdirectory-structure\u002Fcomponents) についてより理解する\n::\n\n### assets ディレクトリ\n\n`assets` ディレクトリにはスタイルや画像、フォントなどコンパイルされていないアセットを入れます。\n\n::alert{type=\"next\"}\n[assets ディレクトリ](\u002Fdocs\u002Fdirectory-structure\u002Fassets) についてより理解する\n::\n\n### static ディレクトリ\n\n`static` \nディレクトリは直接サーバのルートに配置され、名前を保持しなければいけないファイル（例えば `robots.txt`) _または_ 変更されない可能性の高いファイルが含まれています（例えば、favicon など）。\n\n::alert{type=\"next\"}\n[static ディレクトリ](\u002Fdocs\u002Fdirectory-structure\u002Fstatic) についてより理解する\n::\n\n### nuxt.config.js ファイル\n\n`nuxt.config.js` ファイルは Nuxt の設定を行う唯一の場所です。モジュールの追加やデフォルトの設定を上書きしたい場合にここで変更を適用します。\n\n::alert{type=\"next\"}\n[nuxt.config.js ファイル](\u002Fdocs\u002Fdirectory-structure\u002Fnuxt-config) についてより理解する\n::\n\n### package.json ファイル\n\n`package.json` ファイルには、アプリケーションのすべての依存関係とスクリプトが含まれています。\n\n## プロジェクト構造についての詳細\n\n[content](\u002Fdocs\u002Fdirectory-structure\u002Fcontent)、[layouts](\u002Fdocs\u002Fdirectory-structure\u002Flayouts)、[middleware](\u002Fdocs\u002Fdirectory-structure\u002Fmiddleware)、[modules](\u002Fdocs\u002Fdirectory-structure\u002Fmodules)、[plugins](\u002Fdocs\u002Fdirectory-structure\u002Fplugins) そして [store](\u002Fdocs\u002Fdirectory-structure\u002Fstore)など、さらに役立つディレクトリやファイルがあります。これらは小規模なアプリケーションには必要ないのでここでは説明しません。\n\n::alert{type=\"next\"}\nすべてのディレクトリについての詳細は [Directory Structure book](\u002Fdocs\u002Fdirectory-structure\u002Fnuxt) を参照してください。\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:t},children:[{type:a,value:t}]},{type:a,value:c},{type:b,tag:e,props:{class:"d-heading-description"},children:[{type:a,value:C}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"プロジェクトにまだ存在しないディレクトリとファイルを作成してみましょう。"}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-bash","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:D,props:{className:[E,F]},children:[{type:a,value:"mkdir"}]},{type:a,value:" components assets static\n"},{type:b,tag:D,props:{className:[E,F]},children:[{type:a,value:"touch"}]},{type:a,value:" nuxt.config.js\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"これらは Nuxt アプリケーションを構築する際に使用する主なディレクトリとファイルです。それぞれについての説明は後述します。"}]},{type:a,value:c},{type:b,tag:g,props:{type:"info"},children:[{type:b,tag:e,props:{},children:[{type:a,value:"これらの名前のディレクトリを作成することで、Nuxt プロジェクトの機能を利用できるようになります。"}]}]},{type:a,value:c},{type:b,tag:G,props:{id:n},children:[{type:b,tag:d,props:{href:"#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA"},children:[{type:a,value:n}]}]},{type:a,value:c},{type:b,tag:h,props:{id:H},children:[{type:b,tag:d,props:{href:"#pages-%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA"},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"pages"}]},{type:a,value:" ディレクトリにはアプリケーションのビューとルートが含まれています。前の章で学んだように、Nuxt はこのディレクトリ内の "},{type:b,tag:f,props:{},children:[{type:a,value:".vue"}]},{type:a,value:" ファイルをすべて読み込み、アプリケーションのルーターを作成します。"}]},{type:a,value:c},{type:b,tag:g,props:{type:i},children:[{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fpages"},children:[{type:a,value:u}]},{type:a,value:l}]}]},{type:a,value:c},{type:b,tag:h,props:{id:I},children:[{type:b,tag:d,props:{href:"#components-%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA"},children:[{type:a,value:v}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"components"}]},{type:a,value:" ディレクトリにはページにインポートするすべての Vue.js のコンポーネントファイルを入れます。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Nuxt を使用すると、作成したコンポーネントを .vue ファイルに自動でインポートすることができます。（訳注: nuxt.config.js 内の）components を true に設定すると、Nuxt がスキャンして自動でインポートしてくれます。"}]},{type:a,value:c},{type:b,tag:g,props:{type:i},children:[{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fcomponents"},children:[{type:a,value:v}]},{type:a,value:l}]}]},{type:a,value:c},{type:b,tag:h,props:{id:J},children:[{type:b,tag:d,props:{href:"#assets-%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA"},children:[{type:a,value:w}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"assets"}]},{type:a,value:" ディレクトリにはスタイルや画像、フォントなどコンパイルされていないアセットを入れます。"}]},{type:a,value:c},{type:b,tag:g,props:{type:i},children:[{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fassets"},children:[{type:a,value:w}]},{type:a,value:l}]}]},{type:a,value:c},{type:b,tag:h,props:{id:K},children:[{type:b,tag:d,props:{href:"#static-%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA"},children:[{type:a,value:x}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"static"}]},{type:a,value:" \nディレクトリは直接サーバのルートに配置され、名前を保持しなければいけないファイル（例えば "},{type:b,tag:f,props:{},children:[{type:a,value:"robots.txt"}]},{type:a,value:") "},{type:b,tag:"prose-em",props:{},children:[{type:a,value:"または"}]},{type:a,value:" 変更されない可能性の高いファイルが含まれています（例えば、favicon など）。"}]},{type:a,value:c},{type:b,tag:g,props:{type:i},children:[{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fstatic"},children:[{type:a,value:x}]},{type:a,value:l}]}]},{type:a,value:c},{type:b,tag:h,props:{id:L},children:[{type:b,tag:d,props:{href:"#nuxtconfigjs-%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB"},children:[{type:a,value:y}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"nuxt.config.js"}]},{type:a,value:" ファイルは Nuxt の設定を行う唯一の場所です。モジュールの追加やデフォルトの設定を上書きしたい場合にここで変更を適用します。"}]},{type:a,value:c},{type:b,tag:g,props:{type:i},children:[{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fnuxt-config"},children:[{type:a,value:y}]},{type:a,value:l}]}]},{type:a,value:c},{type:b,tag:h,props:{id:M},children:[{type:b,tag:d,props:{href:"#packagejson-%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB"},children:[{type:a,value:N}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"package.json"}]},{type:a,value:" ファイルには、アプリケーションのすべての依存関係とスクリプトが含まれています。"}]},{type:a,value:c},{type:b,tag:G,props:{id:o},children:[{type:b,tag:d,props:{href:"#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%A7%8B%E9%80%A0%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AE%E8%A9%B3%E7%B4%B0"},children:[{type:a,value:o}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fcontent"},children:[{type:a,value:"content"}]},{type:a,value:p},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Flayouts"},children:[{type:a,value:"layouts"}]},{type:a,value:p},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fmiddleware"},children:[{type:a,value:"middleware"}]},{type:a,value:p},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fmodules"},children:[{type:a,value:"modules"}]},{type:a,value:p},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fplugins"},children:[{type:a,value:"plugins"}]},{type:a,value:" そして "},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fstore"},children:[{type:a,value:"store"}]},{type:a,value:"など、さらに役立つディレクトリやファイルがあります。これらは小規模なアプリケーションには必要ないのでここでは説明しません。"}]},{type:a,value:c},{type:b,tag:g,props:{type:i},children:[{type:b,tag:e,props:{},children:[{type:a,value:"すべてのディレクトリについての詳細は "},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fnuxt"},children:[{type:a,value:"Directory Structure book"}]},{type:a,value:" を参照してください。"}]}]}]},toc:{title:O,searchDepth:q,depth:q,links:[{id:n,depth:q,text:n,children:[{id:H,depth:j,text:u},{id:I,depth:j,text:v},{id:J,depth:j,text:w},{id:K,depth:j,text:x},{id:L,depth:j,text:y},{id:M,depth:j,text:N}]},{id:o,depth:q,text:o}]}},template:"Docs"},templateOptions:{header:k,footer:k,aside:k,asideClass:O,fluid:m,banner:k},_img:{}}],fetch:{"AppLayout:0":{headerLinks:[{title:"見る",items:[{title:P,subtitle:"Nuxt で作られた Web サイトセレクション",slug:"showcases",to:Q,icon:"showcases.svg",color:"bg-sand"},{title:"事例紹介",subtitle:"企業による Nuxt の活用方法",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"著名人の声",subtitle:"私たちのことをどう思っているのか",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"学ぶ",items:[{title:R,subtitle:"高速な Web サイトを簡単に作成する",slug:"docs",to:S,icon:"docs.svg",color:"bg-green-500"},{title:T,subtitle:"Nuxt のすべてを理解する",slug:"examples",to:U,icon:"examples.svg",color:"bg-green-600"},{title:V,subtitle:"具体的なケースで学習する",slug:"tutorials",to:W,icon:"tutorials.svg",color:"bg-green-700"},{title:r,subtitle:z,href:s,icon:A,color:B}]},{title:"探す",items:[{title:X,subtitle:"Nuxt のデプロイの仕方",slug:"deployments",to:Y,icon:"deployments.svg",color:"bg-indigo-light"},{title:Z,subtitle:"Nuxt のパワーを拡張する",href:_,icon:"modules.svg",color:"bg-indigo"},{title:$,subtitle:"テーマで始める",slug:"themes",to:aa,icon:"themes.svg",color:"bg-indigo-dark"},{title:ab,subtitle:"ステップバイステップで学習する",slug:"video-courses",to:ac,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"コミュニティ",items:[{title:ad,subtitle:"Nuxt について最新ニュース",slug:"announcements",to:ae,icon:"announcements.svg",color:"bg-mint-lighter"},{title:af,subtitle:"They are Nuxt",slug:"teams",to:ag,icon:"teams.svg",color:"bg-mint-light"},{title:ah,subtitle:"私たちがリリースしたすべてのコード",slug:"releases",to:ai,icon:"releases.svg",color:"bg-mint"},{title:aj,subtitle:"私たちを信頼しています",slug:"sponsors",to:ak,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"パートナー",slug:"partners",to:al}],footerLinks:[{title:"私たちについて",items:[{title:"連絡先",href:"mailto:hello@nuxtjs.com"},{title:"エンタープライズサポート",to:"\u002Fsupport"},{title:"NuxtLabs について",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"オープンソースソフトウェア",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"パートナーシップ",to:al},{title:"テレメトリ",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"エコシステム",items:[{title:ad,to:ae},{title:"貢献",to:"\u002Fcontribution-guide"},{title:"チャット",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"イベント",to:"\u002Fevents"},{title:aj,to:ak},{title:af,to:ag},{title:V,to:W},{title:ab,to:ac}]},{title:"リソース",items:[{title:"デザイン",to:"\u002Fdesign"},{title:R,to:S},{title:T,to:U},{title:X,to:Y},{title:r,href:s},{title:Z,href:_},{title:ah,to:ai},{title:P,to:Q},{title:$,to:aa}]}],showCookieBanner:m},"AsideBottom:0":{lastRelease:am,masterCoursesLink:{title:r,subtitle:z,href:s,icon:A,color:B}},"AsideBottom:1":{lastRelease:am,masterCoursesLink:{title:r,subtitle:z,href:s,icon:A,color:B}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org",prev:{slug:"active-link-classes",to:"\u002Fexamples\u002Frouting\u002Factive-link-classes",title:"Active Link クラス"},next:{slug:"dynamic-pages",to:"\u002Fexamples\u002Frouting\u002Fdynamic-pages",title:"動的ページ"}},"EditOnGithub:0":{_error:{message:"body used already for: https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fnuxt\u002Fnuxtjs.org\u002Fmain\u002Fcontent\u002F",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","ProseEm","HomeLearnMaster","SectionContentItem","ProseHr","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link"])},mutations:[]}}("text","element","\n","prose-a","prose-paragraph","prose-code-inline","alert","prose-h3","next",3,true," についてより理解する",false,"ディレクトリ","プロジェクト構造についての詳細","、",2,"マスターコース","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","ディレクトリ構造","pages ディレクトリ","components ディレクトリ","assets ディレクトリ","static ディレクトリ","nuxt.config.js ファイル","エキスパートといっしょにもっと学習する","master-courses.svg","bg-green-800","デフォルトの Nuxt のアプリケーション構造は小規模なものから大規模なものまで両方のアプリケーションにとって素晴らしい出発点を提供することを目的としています。アプリケーションは自由に構成でき、必要に応じて他のディレクトリを作成することができます。","span","token","function","prose-h2","pages-ディレクトリ","components-ディレクトリ","assets-ディレクトリ","static-ディレクトリ","nuxtconfigjs-ファイル","packagejson-ファイル","package.json ファイル","","導入事例","\u002Fshowcases","ドキュメント","\u002Fdocs","例","\u002Fexamples","チュートリアル","\u002Ftutorials","デプロイ","\u002Fdeployments","モジュール","https:\u002F\u002Fmodules.nuxtjs.org","テーマ","\u002Fthemes","ビデオコース","\u002Fvideo-courses","お知らせ","\u002Fannouncements","チーム","\u002Fteams","リリース","\u002Freleases","スポンサー","\u002Fsponsors","\u002Fpartners","v2.15.8")));