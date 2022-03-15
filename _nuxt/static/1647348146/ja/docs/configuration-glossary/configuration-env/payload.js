__NUXT_JSONP__("/ja/docs/configuration-glossary/configuration-env", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP){return {data:[{page:{key:"content:ja:docs:5.configuration-glossary:9.configuration-env.md",generatedAt:new Date(1647348291039),mtime:new Date(1647348291028),slug:"configuration-env",title:S,position:"999900050009",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-env",draft:t,page:q,language:"ja",navigation:{title:j},description:T,menu:j,category:"configuration-glossary",empty:t,excerpt:void 0,body:{raw:"---\ntitle: env プロパティ\nnavigation.title: env\ndescription: クライアントサイドとサーバーサイドでる環境変数を共有できます。\nmenu: env\ncategory: configuration-glossary\n---\n\n# env プロパティ\n\nクライアントサイドとサーバーサイドでる環境変数を共有できます。\n\n---\n\n- 型: `Object`\n\n\u003E Nuxt ではクライアントサイドとサーバーサイドで共有される環境変数を作成できます。\n\nenv プロパティはクライアントサイドで使用できる環境変数を定義します。これらはサーバーサイド環境変数や [dotenv モジュール](https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fdotenv-module)などを使用して割り当てることができます。\n\n::alert\nnuxt のバージョン \u003E 2.12+ では、（ビルド時ではなく）ランタイムに環境変数が必要な場合、`env` プロパティを[Runtime config プロパティ](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-runtime-config)の `publicRuntimeOptions` と `privateRuntimeOptions` で代替することが推奨されます。\n\u003Cbr\u003E\n詳細は、チュートリアルの [Moving from @nuxtjs\u002Fdotenv to runtime config] (\u002Ftutorials\u002Fmoving-from-nuxtjs-dotenv-to-runtime-config\u002F)をご覧ください。\n::\n\n**より良いトラブルシューティングのために、後述の `process.env` と `process.env == {}` を必ず読んでください。**\n\n```js{}[nuxt.config.js]\nexport default {\n  env: {\n    baseUrl: process.env.BASE_URL || 'http:\u002F\u002Flocalhost:3000'\n  }\n}\n```\n\nこれによりサーバーサイドの環境変数 `BASE_URL` が利用可能または定義されていれば、`BASE_URL` と等しい baseUrl プロパティを作成できます。\nもし `BASE_URL` が利用不可であったり定義されていなれば、クライアントサイドの `baseUrl` は `'http:\u002F\u002Flocalhost:3000'` になります。サーバーサイドの環境変数 BASE_URL は `nuxt.config.js` の `env` プロパティを経由してクライアントサイドにコピーされます。または、他の値が定義されています。\n\nそして `baseUrl` 変数にアクセスするには 2 つの方法があります：\n\n1. `process.env.baseUrl` 経由でアクセスする。\n2. `context.env.baseUrl` 経由でアクセスする。詳細は [context API](\u002Fdocs\u002Finternals-glossary\u002Fcontext) を参照してください。\n\n例えば `env` プロパティを使って公開トークンを付与できます。\n\n上記の例として、env プロパティを使って [axios](https:\u002F\u002Fgithub.com\u002Fmzabriskie\u002Faxios) を設定できます。\n\n```js{}[plugins\u002Faxios.js]\nimport axios from 'axios'\n\nexport default axios.create({\n  baseURL: process.env.baseUrl\n})\n```\n\nこのように記述するとページ内で `import axios from '~\u002Fplugins\u002Faxios'` という具合に axios をインポートできます。\n\n## 環境変数の自動注入\n\nビルドフェーズで `NUXT_ENV_` で始まる環境変数を定義（例えば `NUXT_ENV_COOL_WORD=freezing nuxt build` または Windows の console に対して `SET NUXT_ENV_COOL_WORD=freezing & nuxt build`）した場合、この環境変数はプロセス環境に自動的に注入されます。`nuxt.config.js` 内に定義した同名変数よりも優先されるので注意してください。\n\n## process.env == {}\n\nNuxt は webpack の `definePlugin` を用いて環境変数を定義することに注意してください。つまり、Node.js の実際の `process` または `process.env` が利用可能でもなければ定義されてもいないことを意味します。nuxt.config.js で定義された `env` プロパティは `process.env.xxxx` へそれぞれ個別にマップされコンパイル時に変換されます。\n\nつまり、`console.log(process.env)` は `{}` を出力しますが、`console.log(process.env.your_var)` は定義された値を出力します。コードが webpack でコンパイルされると、`process.env.your_var` と記述されたすべての箇所が定義した値に置き換えられます。例えば、`env.test = 'testing123'` と定義すると、コード中に `process.env.test` と記述してある箇所がすべて 'testing123' へ置き換えられます。\n\n前\n\n```js\nif (process.env.test == 'testing123')\n```\n\n後\n\n```js\nif ('testing123' == 'testing123')\n```\n\n## serverMiddleware\n\n[serverMiddleware](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-servermiddleware) はメインの Nuxt ビルドから分離されているので、`nuxt.config.js` に定義された `env` 変数は使用できません。\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"env-プロパティ"},children:[{type:a,value:S}]},{type:a,value:e},{type:b,tag:h,props:{class:"d-heading-description"},children:[{type:a,value:T}]},{type:a,value:e},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:e},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:e},{type:b,tag:E,props:{},children:[{type:a,value:e},{type:a,value:"型: "},{type:b,tag:f,props:{},children:[{type:a,value:"Object"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:"prose-blockquote",props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Nuxt ではクライアントサイドとサーバーサイドで共有される環境変数を作成できます。"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"env プロパティはクライアントサイドで使用できる環境変数を定義します。これらはサーバーサイド環境変数や "},{type:b,tag:k,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fdotenv-module",rel:[U,V,W],target:X},children:[{type:a,value:"dotenv モジュール"}]},{type:a,value:"などを使用して割り当てることができます。"}]},{type:a,value:e},{type:b,tag:"alert",props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"nuxt のバージョン \u003E 2.12+ では、（ビルド時ではなく）ランタイムに環境変数が必要な場合、"},{type:b,tag:f,props:{},children:[{type:a,value:j}]},{type:a,value:" プロパティを"},{type:b,tag:k,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-runtime-config"},children:[{type:a,value:"Runtime config プロパティ"}]},{type:a,value:"の "},{type:b,tag:f,props:{},children:[{type:a,value:"publicRuntimeOptions"}]},{type:a,value:Y},{type:b,tag:f,props:{},children:[{type:a,value:"privateRuntimeOptions"}]},{type:a,value:" で代替することが推奨されます。\n"},{type:b,tag:"br",props:{},children:[]},{type:a,value:"\n詳細は、チュートリアルの "},{type:b,tag:c,props:{},children:[{type:a,value:"Moving from "},{type:b,tag:k,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxtjs\u002Fdotenv"},children:[{type:b,tag:Z,props:{},children:[{type:a,value:"@nuxtjs\u002Fdotenv"}]}]},{type:a,value:" to runtime config"}]},{type:a,value:" (\u002Ftutorials\u002Fmoving-from-nuxtjs-dotenv-to-runtime-config\u002F)をご覧ください。"}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:Z,props:{},children:[{type:a,value:"より良いトラブルシューティングのために、後述の "},{type:b,tag:f,props:{},children:[{type:a,value:_}]},{type:a,value:Y},{type:b,tag:f,props:{},children:[{type:a,value:F}]},{type:a,value:" を必ず読んでください。"}]}]},{type:a,value:e},{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[$]},children:[{type:a,value:v}]},{type:b,tag:w,props:{className:[x,y]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,l,n]},children:[{type:a,value:aa}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,l,n]},children:[{type:a,value:ab}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:G}]},{type:a,value:"\n  env"},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:H}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:G}]},{type:a,value:"\n    baseUrl"},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:H}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,"constant"]},children:[{type:a,value:A}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"||"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ad}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"これによりサーバーサイドの環境変数 "},{type:b,tag:f,props:{},children:[{type:a,value:A}]},{type:a,value:" が利用可能または定義されていれば、"},{type:b,tag:f,props:{},children:[{type:a,value:A}]},{type:a,value:" と等しい baseUrl プロパティを作成できます。\nもし "},{type:b,tag:f,props:{},children:[{type:a,value:A}]},{type:a,value:" が利用不可であったり定義されていなれば、クライアントサイドの "},{type:b,tag:f,props:{},children:[{type:a,value:J}]},{type:a,value:ae},{type:b,tag:f,props:{},children:[{type:a,value:ad}]},{type:a,value:" になります。サーバーサイドの環境変数 BASE_URL は "},{type:b,tag:f,props:{},children:[{type:a,value:v}]},{type:a,value:" の "},{type:b,tag:f,props:{},children:[{type:a,value:j}]},{type:a,value:" プロパティを経由してクライアントサイドにコピーされます。または、他の値が定義されています。"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"そして "},{type:b,tag:f,props:{},children:[{type:a,value:J}]},{type:a,value:" 変数にアクセスするには 2 つの方法があります："}]},{type:a,value:e},{type:b,tag:"prose-ol",props:{},children:[{type:a,value:e},{type:b,tag:E,props:{},children:[{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"process.env.baseUrl"}]},{type:a,value:" 経由でアクセスする。"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:E,props:{},children:[{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"context.env.baseUrl"}]},{type:a,value:" 経由でアクセスする。詳細は "},{type:b,tag:k,props:{href:"\u002Fdocs\u002Finternals-glossary\u002Fcontext"},children:[{type:a,value:"context API"}]},{type:a,value:" を参照してください。"},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"例えば "},{type:b,tag:f,props:{},children:[{type:a,value:j}]},{type:a,value:" プロパティを使って公開トークンを付与できます。"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"上記の例として、env プロパティを使って "},{type:b,tag:k,props:{href:"https:\u002F\u002Fgithub.com\u002Fmzabriskie\u002Faxios",rel:[U,V,W],target:X},children:[{type:a,value:af}]},{type:a,value:" を設定できます。"}]},{type:a,value:e},{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[$]},children:[{type:a,value:"plugins\u002Faxios.js"}]},{type:b,tag:w,props:{className:[x,y]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,l,n]},children:[{type:a,value:"import"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:a,value:af}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,l,n]},children:[{type:a,value:"from"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"'axios'"}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,l,n]},children:[{type:a,value:aa}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,l,n]},children:[{type:a,value:ab}]},{type:a,value:" axios"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,"method","function",p]},children:[{type:a,value:"create"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:G}]},{type:a,value:"\n  baseURL"},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:H}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:L}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"このように記述するとページ内で "},{type:b,tag:f,props:{},children:[{type:a,value:"import axios from '~\u002Fplugins\u002Faxios'"}]},{type:a,value:" という具合に axios をインポートできます。"}]},{type:a,value:e},{type:b,tag:M,props:{id:B},children:[{type:b,tag:k,props:{href:"#%E7%92%B0%E5%A2%83%E5%A4%89%E6%95%B0%E3%81%AE%E8%87%AA%E5%8B%95%E6%B3%A8%E5%85%A5"},children:[{type:a,value:B}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"ビルドフェーズで "},{type:b,tag:f,props:{},children:[{type:a,value:"NUXT_ENV_"}]},{type:a,value:" で始まる環境変数を定義（例えば "},{type:b,tag:f,props:{},children:[{type:a,value:"NUXT_ENV_COOL_WORD=freezing nuxt build"}]},{type:a,value:" または Windows の console に対して "},{type:b,tag:f,props:{},children:[{type:a,value:"SET NUXT_ENV_COOL_WORD=freezing & nuxt build"}]},{type:a,value:"）した場合、この環境変数はプロセス環境に自動的に注入されます。"},{type:b,tag:f,props:{},children:[{type:a,value:v}]},{type:a,value:" 内に定義した同名変数よりも優先されるので注意してください。"}]},{type:a,value:e},{type:b,tag:M,props:{id:ag},children:[{type:b,tag:k,props:{href:"#processenv--"},children:[{type:a,value:F}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Nuxt は webpack の "},{type:b,tag:f,props:{},children:[{type:a,value:"definePlugin"}]},{type:a,value:" を用いて環境変数を定義することに注意してください。つまり、Node.js の実際の "},{type:b,tag:f,props:{},children:[{type:a,value:ah}]},{type:a,value:" または "},{type:b,tag:f,props:{},children:[{type:a,value:_}]},{type:a,value:" が利用可能でもなければ定義されてもいないことを意味します。nuxt.config.js で定義された "},{type:b,tag:f,props:{},children:[{type:a,value:j}]},{type:a,value:" プロパティは "},{type:b,tag:f,props:{},children:[{type:a,value:"process.env.xxxx"}]},{type:a,value:" へそれぞれ個別にマップされコンパイル時に変換されます。"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"つまり、"},{type:b,tag:f,props:{},children:[{type:a,value:"console.log(process.env)"}]},{type:a,value:ae},{type:b,tag:f,props:{},children:[{type:a,value:"{}"}]},{type:a,value:" を出力しますが、"},{type:b,tag:f,props:{},children:[{type:a,value:"console.log(process.env.your_var)"}]},{type:a,value:" は定義された値を出力します。コードが webpack でコンパイルされると、"},{type:b,tag:f,props:{},children:[{type:a,value:"process.env.your_var"}]},{type:a,value:" と記述されたすべての箇所が定義した値に置き換えられます。例えば、"},{type:b,tag:f,props:{},children:[{type:a,value:"env.test = 'testing123'"}]},{type:a,value:" と定義すると、コード中に "},{type:b,tag:f,props:{},children:[{type:a,value:"process.env.test"}]},{type:a,value:" と記述してある箇所がすべて 'testing123' へ置き換えられます。"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"前"}]},{type:a,value:e},{type:b,tag:u,props:{},children:[{type:b,tag:w,props:{className:[x,y]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,l,ai]},children:[{type:a,value:aj}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:K}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"test"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ak}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:L}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"後"}]},{type:a,value:e},{type:b,tag:u,props:{},children:[{type:b,tag:w,props:{className:[x,y]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,l,ai]},children:[{type:a,value:aj}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:N}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ak}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:L}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:M,props:{id:al},children:[{type:b,tag:k,props:{href:"#servermiddleware"},children:[{type:a,value:O}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:k,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-servermiddleware"},children:[{type:a,value:O}]},{type:a,value:" はメインの Nuxt ビルドから分離されているので、"},{type:b,tag:f,props:{},children:[{type:a,value:v}]},{type:a,value:" に定義された "},{type:b,tag:f,props:{},children:[{type:a,value:j}]},{type:a,value:" 変数は使用できません。"}]}]},toc:{title:am,searchDepth:s,depth:s,links:[{id:B,depth:s,text:B},{id:ag,depth:s,text:F},{id:al,depth:s,text:O}]}},template:"Docs"},templateOptions:{header:q,footer:q,aside:q,asideClass:am,fluid:t,banner:q},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/DeveloperThomas.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F01e0e4.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png","/_ipx/https://github.com/MrJmpl3.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3e840f.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/mtlynch.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F525213.png","/_ipx/https://github.com/book000.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3838a1.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/meirroth.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe09bc9.png","/_ipx/https://github.com/Brettanda.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F25f97d.png","/_ipx/https://github.com/armgitaar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0c63ae.png","/_ipx/https://github.com/thomasbnt.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F9f568f.png","/_ipx/https://github.com/karur4n.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F8dcce9.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"見る",items:[{title:an,subtitle:"Nuxt で作られた Web サイトセレクション",slug:"showcases",to:ao,icon:"showcases.svg",color:"bg-sand"},{title:"事例紹介",subtitle:"企業による Nuxt の活用方法",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"著名人の声",subtitle:"私たちのことをどう思っているのか",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"学ぶ",items:[{title:ap,subtitle:"高速な Web サイトを簡単に作成する",slug:"docs",to:aq,icon:"docs.svg",color:"bg-green-500"},{title:ar,subtitle:"Nuxt のすべてを理解する",slug:"examples",to:as,icon:"examples.svg",color:"bg-green-600"},{title:at,subtitle:"具体的なケースで学習する",slug:"tutorials",to:au,icon:"tutorials.svg",color:"bg-green-700"},{title:C,subtitle:P,href:D,icon:Q,color:R}]},{title:"探す",items:[{title:av,subtitle:"Nuxt のデプロイの仕方",slug:"deployments",to:aw,icon:"deployments.svg",color:"bg-indigo-light"},{title:ax,subtitle:"Nuxt のパワーを拡張する",href:ay,icon:"modules.svg",color:"bg-indigo"},{title:az,subtitle:"テーマで始める",slug:"themes",to:aA,icon:"themes.svg",color:"bg-indigo-dark"},{title:aB,subtitle:"ステップバイステップで学習する",slug:"video-courses",to:aC,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"コミュニティ",items:[{title:aD,subtitle:"Nuxt について最新ニュース",slug:"announcements",to:aE,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aF,subtitle:"They are Nuxt",slug:"teams",to:aG,icon:"teams.svg",color:"bg-mint-light"},{title:aH,subtitle:"私たちがリリースしたすべてのコード",slug:"releases",to:aI,icon:"releases.svg",color:"bg-mint"},{title:aJ,subtitle:"私たちを信頼しています",slug:"sponsors",to:aK,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"パートナー",slug:"partners",to:aL}],footerLinks:[{title:"私たちについて",items:[{title:"連絡先",href:"mailto:hello@nuxtjs.com"},{title:"エンタープライズサポート",to:"\u002Fsupport"},{title:"NuxtLabs について",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"オープンソースソフトウェア",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"パートナーシップ",to:aL},{title:"テレメトリ",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"エコシステム",items:[{title:aD,to:aE},{title:"貢献",to:"\u002Fcontribution-guide"},{title:"チャット",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"イベント",to:"\u002Fevents"},{title:aJ,to:aK},{title:aF,to:aG},{title:at,to:au},{title:aB,to:aC}]},{title:"リソース",items:[{title:"デザイン",to:"\u002Fdesign"},{title:ap,to:aq},{title:ar,to:as},{title:av,to:aw},{title:C,href:D},{title:ax,href:ay},{title:aH,to:aI},{title:an,to:ao},{title:az,to:aA}]}],showCookieBanner:t},"AsideBottom:0":{lastRelease:aM,masterCoursesLink:{title:C,subtitle:P,href:D,icon:Q,color:R}},"AsideBottom:1":{lastRelease:aM,masterCoursesLink:{title:C,subtitle:P,href:D,icon:Q,color:R}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org",prev:{slug:"configuration-dir",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-dir",title:"dir プロパティ"},next:{slug:"configuration-extend-plugins",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-extend-plugins",title:"extendPlugins プロパティ"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Fja\u002Fdocs\u002F5.configuration-glossary\u002F9.configuration-env.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:aN,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:aN},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:aO,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:aO},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"DeveloperThomas"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:aP,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:aP},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"},{name:"José Manuel Casani Guerra",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21302114?u=8ea39b04340fe8c4ebd63b1097497e1bf0d1454f&v=4",login:"MrJmpl3"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=2998231cea5f2bd7268cba898c9a947cb1d525b8&v=4",login:"owlnai"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Michael Lynch",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7783288?u=b6d8f48d38d7a64cddc633db4cfcd6915b997794&v=4",login:"mtlynch"},{name:"Tomachi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8929706?u=bb51b21fd7735505d999e27f7340c5f886f4d9fe&v=4",login:"book000"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Meir Roth",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F12494197?u=7828b437d2bc2402a6e8a4edd9ada378139f4742&v=4",login:"meirroth"},{name:"Brett",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14969098?u=34d0910e6ded49668e2a114eedbc26ab7b5979e7&v=4",login:"Brettanda"},{name:"Adam Miedema",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F30202878?u=aad565699f6b02961c47297dc931e5179d9ff8e1&v=4",login:"armgitaar"},{name:"Thomas Bnt",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14293805?u=e3f70b334910b6cfd43ad99c9f5b0523c07bd38a&v=4",login:"thomasbnt"},{name:"Kazuki Furukawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6816398?v=4",login:"karur4n"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseEm","ProseHr","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","span","token","\n","prose-code-inline","punctuation","prose-paragraph"," ","env","prose-a","keyword",".","module","operator","property-access",true,"string",2,false,"prose-code","nuxt.config.js","pre","language-js","line-numbers","code","BASE_URL","環境変数の自動注入","マスターコース","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-li","process.env == {}","{",":","}","baseUrl","(",")","prose-h2","'testing123'","serverMiddleware","エキスパートといっしょにもっと学習する","master-courses.svg","bg-green-800","env プロパティ","クライアントサイドとサーバーサイドでる環境変数を共有できます。","nofollow","noopener","noreferrer","_blank"," と ","prose-strong","process.env","filename","export","default"," process","'http:\u002F\u002Flocalhost:3000'"," は ","axios","processenv--","process","control-flow","if","==","servermiddleware","","導入事例","\u002Fshowcases","ドキュメント","\u002Fdocs","例","\u002Fexamples","チュートリアル","\u002Ftutorials","デプロイ","\u002Fdeployments","モジュール","https:\u002F\u002Fmodules.nuxtjs.org","テーマ","\u002Fthemes","ビデオコース","\u002Fvideo-courses","お知らせ","\u002Fannouncements","チーム","\u002Fteams","リリース","\u002Freleases","スポンサー","\u002Fsponsors","\u002Fpartners","v2.15.8","Ayouli","felipesuri","syagawa")));