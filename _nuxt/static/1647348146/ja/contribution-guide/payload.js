__NUXT_JSONP__("/ja/contribution-guide", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap){return {data:[{page:{key:"content:ja:contribution-guide:index.md",generatedAt:new Date(1647348188208),mtime:new Date(1647348188186),slug:H,title:"貢献ガイド",position:"999999990000",to:J,draft:m,page:q,language:"ja",template:"Post",description:K,back:m,empty:m,excerpt:void 0,body:{raw:"---\ntemplate: post\ntitle: 貢献ガイド\ndescription: Nuxt へどんな貢献も大歓迎です！\nback: false\n---\n\n\u003E Nuxt へどんな貢献も大歓迎です！\n\n## 問題の報告\n\nプロジェクトに貢献するには、問題が発生したときに詳細なレポートを送信するのが良い方法です： [バグレポート](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fissues\u002Fnew?assignees=&labels=bug-report&template=bug-report.md&title=)\n\nその際には、必ずバグを再現できるように、再現用のリポジトリや [CodeSandBox](https:\u002F\u002Ftemplate.nuxtjs.org\u002F) を用意してください。バグの再現性が高ければ高いほど、早く修正に取り掛かることができます。\n\n## プルリクエスト\n\n誤字脱字の修正だけでも構いませんので、プルリクエストをお待ちしております！\n\nですが、重要な改善は、既存の[機能要求](https:\u002F\u002Ffeature.nuxtjs.org\u002F)または[バグレポート](https:\u002F\u002Fbug.nuxtjs.org\u002F)に関連付ける必要があります。\n\n### はじめる\n\n1. あなた自身の GitHub アカウントに [Nuxt レポジトリ](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js) を [フォーク (Fork)](https:\u002F\u002Fhelp.github.com\u002Farticles\u002Ffork-a-repo\u002F) し、それからあなたのローカルデバイスに[クローン (clone)](https:\u002F\u002Fhelp.github.com\u002Farticles\u002Fcloning-a-repository\u002F) します。\n2. 依存モジュールをインストールするために `npm install` または `yarn install` を実行します。\n\n\u003E _**npm** と **yarn** の両方で、依存関係のインストールを失敗することが確認されています。この問題を解決するには、サンプルアプリの `node_modules` ディレクトリを削除して再度インストールするか、不足している依存関係をローカルにインストールしてください。_\n\n\u003E 依存モジュールを追加する場合は、`yarn add` を使用してください。 `yarn.lock` ファイルは、すべての Nuxt の依存関係の正しい源です。\n\n### セットアップ\n\nテストを実行する前に、すべての依存するパッケージが満たされていることを確認し、すべてのパッケージをビルドします：\n\n```sh\nyarn\nyarn build\n```\n\n### テスト構造\n\nバグ修正や新機能を含む優れたプルリクエストには、しばしばテストが含まれます。優れたテストを書くために、私たちのテスト構造を説明しましょう：\n\n#### フィクスチャ\n\nフィクスチャ (`tests\u002Ffixtures` の配下にあります) には、いくつかの Nuxt アプリケーションが含まれています。ビルド時間をできるだけ短くするために、テストごとに独自の Nuxt アプリケーションをビルドすることはありません。その代わり、フィクスチャは実際のユニットテストを実行する前にビルドされます (`yarn test:fixture`)。\n\nプルリクエストを提出する際には、変更内容が適切に反映されるよう、必ず**変える**または**新しいフィクスチャの追加**を行ってください（該当する場合)\n\nまた、フィクスチャを変更した後は、`jest test\u002Ffixtures\u002Fmy-fixture\u002Fmy-fixture.test.js` で対応するテストを実行して、フィクスチャを**再構築**することを忘れないでください！\n\n#### 単体テスト\n\n単体テストは `tests\u002Funit` にあり、フィクスチャのビルド後に実行されます。テストごとに新しい Nuxt サーバーが使用されるので、共有された状態（ビルドステップの初期状態を除く）は存在しません。\n\nユニットテストを追加した後は、それらを直接実行することができます：\n\n```sh\njest test\u002Funit\u002Ftest.js\n```\n\nまた、単体テストスイート全体を実行することもできます：\n\n```sh\nyarn test:unit\n```\n\n繰り返しになりますが、以前のフィクスチャを作り直さなければならないかもしれませんのでご了承ください！\n\n### 変更のテスト\n\nプルリクエストを作成している間に、フィクスチャが正しくセットアップされているかどうかを確認したり、現在の変更点をデバッグしたりすることがあるでしょう。\n\nそのためには、Nuxt スクリプト自体を使って、たとえばフィクスチャやサンプルアプリを起動することができます：\n\n```sh\nyarn nuxt examples\u002Fyour-app\nyarn nuxt test\u002Ffixtures\u002Fyour-fixture-app\n```\n\n\u003E `npm link` も同様に機能しますが、これにはいくつかの問題があることが知られています。そのため、サンプルの実行には `yarn nuxt` を直接呼び出すことをお勧めします。\n\n### 例\n\n大きな機能に取り組んでいる場合は、`examples\u002F` にサンプルアプリを設定してください。これは変更点を理解するのに大いに役立ちますし、Nuxt ユーザーがあなたの作った機能を深く理解するのにも役立ちます。\n\n### リント\n\nすでにお気づきかもしれませんが、私たちは ESLint を使ってコードスタイルの標準化を徹底しています。変更をコミットする前に `yarn lint` を実行して、コードスタイルが正しいかどうかを確認してください。正しくない場合は、`yarn lint --fix` または `npm run lint -- --fix` (タイポではありません！) を使用して、ほとんどのスタイル変更を修正することができます。それでもエラーが残っている場合は、手動で修正する必要があります。\n\n### ドキュメント\n\n新しい機能を追加したり、リファクタリングを行ったり、Nuxt の動作を変更したりする場合、その変更を文書化したいと思うでしょう。その際は、[docs](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fdocs\u002Fpulls) リポジトリにプルリクエストしてください。すぐにドキュメントを書く必要はありません（ただし、プルリクエストが十分に成熟したらすぐに書いてください）。\n\n### 最終チェックリスト\n\nプルリクエストを提出する際には、簡単なテンプレートが用意されていますので、それに沿って記入してください。チェックリストの適切な \"回答 (anwers)\" にすべてチェックを入れてください。\n\n### トラブルシューティング\n\n#### macOS 上でのデバッグテスト\n\n`getPort()` を検索すると、テスト中に新しい Nuxt プロセスを起動するために使用されていることがわかります。macOS では動作しないことがあり、テストのために手動でポートを設定する必要があるかもしれません。\n\nまた、よくある問題として、フィクスチャテストの実行時に Nuxt プロセスがメモリ内でハングアップすることがあります。ゴーストプロセスが発生すると、後続のテストが動作しなくなることがよくあります。この問題が発生していると思われる場合は、`ps aux | grep -i node` を実行して、ハングアップしているテストプロセスを調べてください。\n",ast:{type:"root",children:[{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:K}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:L,props:{id:s},children:[{type:b,tag:e,props:{href:"#%E5%95%8F%E9%A1%8C%E3%81%AE%E5%A0%B1%E5%91%8A"},children:[{type:a,value:s}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"プロジェクトに貢献するには、問題が発生したときに詳細なレポートを送信するのが良い方法です： "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fissues\u002Fnew?assignees=&labels=bug-report&template=bug-report.md&title=",rel:[i,j,k],target:l},children:[{type:a,value:M}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"その際には、必ずバグを再現できるように、再現用のリポジトリや "},{type:b,tag:e,props:{href:"https:\u002F\u002Ftemplate.nuxtjs.org\u002F",rel:[i,j,k],target:l},children:[{type:a,value:"CodeSandBox"}]},{type:a,value:" を用意してください。バグの再現性が高ければ高いほど、早く修正に取り掛かることができます。"}]},{type:a,value:c},{type:b,tag:L,props:{id:t},children:[{type:b,tag:e,props:{href:"#%E3%83%97%E3%83%AB%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88"},children:[{type:a,value:t}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"誤字脱字の修正だけでも構いませんので、プルリクエストをお待ちしております！"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ですが、重要な改善は、既存の"},{type:b,tag:e,props:{href:"https:\u002F\u002Ffeature.nuxtjs.org\u002F",rel:[i,j,k],target:l},children:[{type:a,value:"機能要求"}]},{type:a,value:N},{type:b,tag:e,props:{href:"https:\u002F\u002Fbug.nuxtjs.org\u002F",rel:[i,j,k],target:l},children:[{type:a,value:M}]},{type:a,value:"に関連付ける必要があります。"}]},{type:a,value:c},{type:b,tag:g,props:{id:u},children:[{type:b,tag:e,props:{href:"#%E3%81%AF%E3%81%98%E3%82%81%E3%82%8B"},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:"prose-ol",props:{},children:[{type:a,value:c},{type:b,tag:O,props:{},children:[{type:a,value:c},{type:a,value:"あなた自身の GitHub アカウントに "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js",rel:[i,j,k],target:l},children:[{type:a,value:"Nuxt レポジトリ"}]},{type:a,value:" を "},{type:b,tag:e,props:{href:"https:\u002F\u002Fhelp.github.com\u002Farticles\u002Ffork-a-repo\u002F",rel:[i,j,k],target:l},children:[{type:a,value:"フォーク (Fork)"}]},{type:a,value:" し、それからあなたのローカルデバイスに"},{type:b,tag:e,props:{href:"https:\u002F\u002Fhelp.github.com\u002Farticles\u002Fcloning-a-repository\u002F",rel:[i,j,k],target:l},children:[{type:a,value:"クローン (clone)"}]},{type:a,value:" します。"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:O,props:{},children:[{type:a,value:c},{type:a,value:"依存モジュールをインストールするために "},{type:b,tag:f,props:{},children:[{type:a,value:"npm install"}]},{type:a,value:P},{type:b,tag:f,props:{},children:[{type:a,value:"yarn install"}]},{type:a,value:" を実行します。"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"prose-em",props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:"npm"}]},{type:a,value:" と "},{type:b,tag:p,props:{},children:[{type:a,value:"yarn"}]},{type:a,value:" の両方で、依存関係のインストールを失敗することが確認されています。この問題を解決するには、サンプルアプリの "},{type:b,tag:f,props:{},children:[{type:a,value:"node_modules"}]},{type:a,value:" ディレクトリを削除して再度インストールするか、不足している依存関係をローカルにインストールしてください。"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"依存モジュールを追加する場合は、"},{type:b,tag:f,props:{},children:[{type:a,value:"yarn add"}]},{type:a,value:" を使用してください。 "},{type:b,tag:f,props:{},children:[{type:a,value:"yarn.lock"}]},{type:a,value:" ファイルは、すべての Nuxt の依存関係の正しい源です。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{id:v},children:[{type:b,tag:e,props:{href:"#%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97"},children:[{type:a,value:v}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"テストを実行する前に、すべての依存するパッケージが満たされていることを確認し、すべてのパッケージをビルドします："}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"yarn\nyarn build\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{id:B},children:[{type:b,tag:e,props:{href:"#%E3%83%86%E3%82%B9%E3%83%88%E6%A7%8B%E9%80%A0"},children:[{type:a,value:B}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"バグ修正や新機能を含む優れたプルリクエストには、しばしばテストが含まれます。優れたテストを書くために、私たちのテスト構造を説明しましょう："}]},{type:a,value:c},{type:b,tag:I,props:{id:Q},children:[{type:b,tag:e,props:{href:"#%E3%83%95%E3%82%A3%E3%82%AF%E3%82%B9%E3%83%81%E3%83%A3"},children:[{type:a,value:Q}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"フィクスチャ ("},{type:b,tag:f,props:{},children:[{type:a,value:"tests\u002Ffixtures"}]},{type:a,value:" の配下にあります) には、いくつかの Nuxt アプリケーションが含まれています。ビルド時間をできるだけ短くするために、テストごとに独自の Nuxt アプリケーションをビルドすることはありません。その代わり、フィクスチャは実際のユニットテストを実行する前にビルドされます ("},{type:b,tag:f,props:{},children:[{type:a,value:"yarn test:fixture"}]},{type:a,value:")。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"プルリクエストを提出する際には、変更内容が適切に反映されるよう、必ず"},{type:b,tag:p,props:{},children:[{type:a,value:"変える"}]},{type:a,value:N},{type:b,tag:p,props:{},children:[{type:a,value:"新しいフィクスチャの追加"}]},{type:a,value:"を行ってください（該当する場合)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"また、フィクスチャを変更した後は、"},{type:b,tag:f,props:{},children:[{type:a,value:"jest test\u002Ffixtures\u002Fmy-fixture\u002Fmy-fixture.test.js"}]},{type:a,value:" で対応するテストを実行して、フィクスチャを"},{type:b,tag:p,props:{},children:[{type:a,value:"再構築"}]},{type:a,value:"することを忘れないでください！"}]},{type:a,value:c},{type:b,tag:I,props:{id:R},children:[{type:b,tag:e,props:{href:"#%E5%8D%98%E4%BD%93%E3%83%86%E3%82%B9%E3%83%88"},children:[{type:a,value:R}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"単体テストは "},{type:b,tag:f,props:{},children:[{type:a,value:"tests\u002Funit"}]},{type:a,value:" にあり、フィクスチャのビルド後に実行されます。テストごとに新しい Nuxt サーバーが使用されるので、共有された状態（ビルドステップの初期状態を除く）は存在しません。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ユニットテストを追加した後は、それらを直接実行することができます："}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"jest test\u002Funit\u002Ftest.js\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"また、単体テストスイート全体を実行することもできます："}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"yarn test:unit\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"繰り返しになりますが、以前のフィクスチャを作り直さなければならないかもしれませんのでご了承ください！"}]},{type:a,value:c},{type:b,tag:g,props:{id:C},children:[{type:b,tag:e,props:{href:"#%E5%A4%89%E6%9B%B4%E3%81%AE%E3%83%86%E3%82%B9%E3%83%88"},children:[{type:a,value:C}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"プルリクエストを作成している間に、フィクスチャが正しくセットアップされているかどうかを確認したり、現在の変更点をデバッグしたりすることがあるでしょう。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"そのためには、Nuxt スクリプト自体を使って、たとえばフィクスチャやサンプルアプリを起動することができます："}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"yarn nuxt examples\u002Fyour-app\nyarn nuxt test\u002Ffixtures\u002Fyour-fixture-app\n"}]}]}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"npm link"}]},{type:a,value:" も同様に機能しますが、これにはいくつかの問題があることが知られています。そのため、サンプルの実行には "},{type:b,tag:f,props:{},children:[{type:a,value:"yarn nuxt"}]},{type:a,value:" を直接呼び出すことをお勧めします。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{id:n},children:[{type:b,tag:e,props:{href:"#%E4%BE%8B"},children:[{type:a,value:n}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"大きな機能に取り組んでいる場合は、"},{type:b,tag:f,props:{},children:[{type:a,value:"examples\u002F"}]},{type:a,value:" にサンプルアプリを設定してください。これは変更点を理解するのに大いに役立ちますし、Nuxt ユーザーがあなたの作った機能を深く理解するのにも役立ちます。"}]},{type:a,value:c},{type:b,tag:g,props:{id:D},children:[{type:b,tag:e,props:{href:"#%E3%83%AA%E3%83%B3%E3%83%88"},children:[{type:a,value:D}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"すでにお気づきかもしれませんが、私たちは ESLint を使ってコードスタイルの標準化を徹底しています。変更をコミットする前に "},{type:b,tag:f,props:{},children:[{type:a,value:"yarn lint"}]},{type:a,value:" を実行して、コードスタイルが正しいかどうかを確認してください。正しくない場合は、"},{type:b,tag:f,props:{},children:[{type:a,value:"yarn lint --fix"}]},{type:a,value:P},{type:b,tag:f,props:{},children:[{type:a,value:"npm run lint -- --fix"}]},{type:a,value:" (タイポではありません！) を使用して、ほとんどのスタイル変更を修正することができます。それでもエラーが残っている場合は、手動で修正する必要があります。"}]},{type:a,value:c},{type:b,tag:g,props:{id:o},children:[{type:b,tag:e,props:{href:"#%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88"},children:[{type:a,value:o}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"新しい機能を追加したり、リファクタリングを行ったり、Nuxt の動作を変更したりする場合、その変更を文書化したいと思うでしょう。その際は、"},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fdocs\u002Fpulls",rel:[i,j,k],target:l},children:[{type:a,value:S}]},{type:a,value:" リポジトリにプルリクエストしてください。すぐにドキュメントを書く必要はありません（ただし、プルリクエストが十分に成熟したらすぐに書いてください）。"}]},{type:a,value:c},{type:b,tag:g,props:{id:E},children:[{type:b,tag:e,props:{href:"#%E6%9C%80%E7%B5%82%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%88"},children:[{type:a,value:E}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"プルリクエストを提出する際には、簡単なテンプレートが用意されていますので、それに沿って記入してください。チェックリストの適切な \"回答 (anwers)\" にすべてチェックを入れてください。"}]},{type:a,value:c},{type:b,tag:g,props:{id:F},children:[{type:b,tag:e,props:{href:"#%E3%83%88%E3%83%A9%E3%83%96%E3%83%AB%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0"},children:[{type:a,value:F}]}]},{type:a,value:c},{type:b,tag:I,props:{id:"macos-上でのデバッグテスト"},children:[{type:b,tag:e,props:{href:"#macos-%E4%B8%8A%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0%E3%83%86%E3%82%B9%E3%83%88"},children:[{type:a,value:"macOS 上でのデバッグテスト"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"getPort()"}]},{type:a,value:" を検索すると、テスト中に新しい Nuxt プロセスを起動するために使用されていることがわかります。macOS では動作しないことがあり、テストのために手動でポートを設定する必要があるかもしれません。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"また、よくある問題として、フィクスチャテストの実行時に Nuxt プロセスがメモリ内でハングアップすることがあります。ゴーストプロセスが発生すると、後続のテストが動作しなくなることがよくあります。この問題が発生していると思われる場合は、"},{type:b,tag:f,props:{},children:[{type:a,value:"ps aux | grep -i node"}]},{type:a,value:" を実行して、ハングアップしているテストプロセスを調べてください。"}]}]},toc:{title:H,searchDepth:G,depth:G,links:[{id:s,depth:G,text:s},{id:t,depth:G,text:t,children:[{id:u,depth:h,text:u},{id:v,depth:h,text:v},{id:B,depth:h,text:B},{id:C,depth:h,text:C},{id:n,depth:h,text:n},{id:D,depth:h,text:D},{id:o,depth:h,text:o},{id:E,depth:h,text:E},{id:F,depth:h,text:F}]}]}}},templateOptions:{header:q,footer:q,aside:m,asideClass:H,fluid:m,banner:q},_img:{"/_ipx/https://source.unsplash.com/random":"\u002F_nuxt\u002Fimage\u002F3682c6[ext]"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"見る",items:[{title:T,subtitle:"Nuxt で作られた Web サイトセレクション",slug:"showcases",to:U,icon:"showcases.svg",color:"bg-sand"},{title:"事例紹介",subtitle:"企業による Nuxt の活用方法",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"著名人の声",subtitle:"私たちのことをどう思っているのか",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"学ぶ",items:[{title:o,subtitle:"高速な Web サイトを簡単に作成する",slug:S,to:V,icon:"docs.svg",color:"bg-green-500"},{title:n,subtitle:"Nuxt のすべてを理解する",slug:"examples",to:W,icon:"examples.svg",color:"bg-green-600"},{title:X,subtitle:"具体的なケースで学習する",slug:"tutorials",to:Y,icon:"tutorials.svg",color:"bg-green-700"},{title:Z,subtitle:"エキスパートといっしょにもっと学習する",href:_,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"探す",items:[{title:$,subtitle:"Nuxt のデプロイの仕方",slug:"deployments",to:aa,icon:"deployments.svg",color:"bg-indigo-light"},{title:ab,subtitle:"Nuxt のパワーを拡張する",href:ac,icon:"modules.svg",color:"bg-indigo"},{title:ad,subtitle:"テーマで始める",slug:"themes",to:ae,icon:"themes.svg",color:"bg-indigo-dark"},{title:af,subtitle:"ステップバイステップで学習する",slug:"video-courses",to:ag,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"コミュニティ",items:[{title:ah,subtitle:"Nuxt について最新ニュース",slug:"announcements",to:ai,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aj,subtitle:"They are Nuxt",slug:"teams",to:ak,icon:"teams.svg",color:"bg-mint-light"},{title:al,subtitle:"私たちがリリースしたすべてのコード",slug:"releases",to:am,icon:"releases.svg",color:"bg-mint"},{title:an,subtitle:"私たちを信頼しています",slug:"sponsors",to:ao,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"パートナー",slug:"partners",to:ap}],footerLinks:[{title:"私たちについて",items:[{title:"連絡先",href:"mailto:hello@nuxtjs.com"},{title:"エンタープライズサポート",to:"\u002Fsupport"},{title:"NuxtLabs について",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"オープンソースソフトウェア",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"パートナーシップ",to:ap},{title:"テレメトリ",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"エコシステム",items:[{title:ah,to:ai},{title:"貢献",to:J},{title:"チャット",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"イベント",to:"\u002Fevents"},{title:an,to:ao},{title:aj,to:ak},{title:X,to:Y},{title:af,to:ag}]},{title:"リソース",items:[{title:"デザイン",to:"\u002Fdesign"},{title:o,to:V},{title:n,to:W},{title:$,to:aa},{title:Z,href:_},{title:ab,href:ac},{title:al,to:am},{title:T,to:U},{title:ad,to:ae}]}],showCookieBanner:m},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseEm","ProseHr","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer"])},mutations:[]}}("text","element","\n","prose-paragraph","prose-a","prose-code-inline","prose-h3",3,"nofollow","noopener","noreferrer","_blank",false,"例","ドキュメント","prose-strong",true,"prose-blockquote","問題の報告","プルリクエスト","はじめる","セットアップ","prose-code","pre","language-text","line-numbers","code","テスト構造","変更のテスト","リント","最終チェックリスト","トラブルシューティング",2,"","prose-h4","\u002Fcontribution-guide","Nuxt へどんな貢献も大歓迎です！","prose-h2","バグレポート","または","prose-li"," または ","フィクスチャ","単体テスト","docs","導入事例","\u002Fshowcases","\u002Fdocs","\u002Fexamples","チュートリアル","\u002Ftutorials","マスターコース","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","デプロイ","\u002Fdeployments","モジュール","https:\u002F\u002Fmodules.nuxtjs.org","テーマ","\u002Fthemes","ビデオコース","\u002Fvideo-courses","お知らせ","\u002Fannouncements","チーム","\u002Fteams","リリース","\u002Freleases","スポンサー","\u002Fsponsors","\u002Fpartners")));