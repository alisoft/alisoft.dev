__NUXT_JSONP__("/fr/contribution-guide", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw){return {data:[{page:{key:"content:fr:contribution-guide:index.md",generatedAt:new Date(1647346730336),mtime:new Date(1647346730322),slug:x,title:"Guide de contribution",position:"999999990000",to:B,draft:m,page:o,language:"fr",template:"Post",description:C,back:m,empty:m,excerpt:void 0,body:{raw:"---\ntemplate: post\ntitle: Guide de contribution\ndescription: Toute contribution à Nuxt est plus que bienvenue !\nback: false\n---\n\n\u003E Toute contribution à Nuxt est plus que bienvenue !\n\n## Signaler des erreurs\n\nUne excellente façon de contribuer au projet est d'envoyer un rapport détaillé lorsque vous rencontrez un problème : [Bug report](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fissues\u002Fnew?assignees=&labels=bug-report&template=bug-report.md&title=)\n\nVeuillez vous assurer d'inclure un dépôt de reproduction ou [CodeSandBox](https:\u002F\u002Ftemplate.nuxtjs.org\u002F) afin que les bogues puissent être reproduits sans grands efforts. Plus un bug peut être reproduit, plus vite nous pouvons commencer à le corriger !\n\n## Pull Requests\n\nNous serons ravis de recevoir vos demandes de modification, même s'il s'agit simplement de corriger une coquille !\n\nCependant, toute amélioration significative doit être associée à une demande de [fonctionnalité](https:\u002F\u002Ffeature.nuxtjs.org\u002F) ou d'un [bug report](https:\u002F\u002Fbug.nuxtjs.org\u002F).\n\n### Pour commencer\n\n1. [Dupliquez (Fork)](https:\u002F\u002Fhelp.github.com\u002Farticles\u002Ffork-a-repo\u002F) le [dépôt Nuxt](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js) sur votre propre compte GitHub, puis le [cloner](https:\u002F\u002Fhelp.github.com\u002Farticles\u002Fcloning-a-repository\u002F) sur votre machine locale.\n2. Exécutez `npm install` ou `yarn install` pour installer les dépendances.\n\n\u003E _Notez que **npm** et **yarn** ont été vus comme manquant l'installation des dépendances. Pour remédier à cela, vous pouvez soit supprimer le dossier `node_modules` de votre application d'exemple et l'installer à nouveau, soit faire une installation locale des dépendances manquantes._\n\n\u003E Si vous ajoutez une dépendance, veuillez utiliser `yarn add`. Le fichier `yarn.lock` est la source de vérité pour toutes les dépendances de Nuxt.\n\n### Installation\n\nAvant d'exécuter les tests, assurez-vous que toutes les dépendances ont bien été installées et vous pouvez alors construire les paquets :\n\n```sh\nyarn\nyarn build\n```\n\n### Structure d'un Test\n\nUne bonne Pull Request, qu'il s'agisse d'une correction de bogue ou d'une nouvelle fonctionnalité, comprendra souvent des tests. Pour écrire de bons tests, nous allons vous expliquer la structure attendue :\n\n#### Fixtures\n\nLes fixtures (trouvées sous `tests\u002Ffixtures`) contiennent plusieurs applications Nuxt. Pour que le temps de construction soit le plus court possible, nous ne construisons pas une application Nuxt par test. Au lieu de cela, les fixtures sont construites (`yarn test:fixtures`) avant d'exécuter les tests unitaires.\n\nVeillez à **modifier** ou **ajouter une nouvelle fixture** lorsque vous soumettez une PR afin de refléter correctement les changements (si applicable).\n\nN'oubliez pas non plus de **reconstruire** une fixture après l'avoir modifié en exécutant le test correspondant avec `jest test\u002Ffixtures\u002Fmy-fixture\u002Fmy-fixture.test.js`!\n\n#### Tests unitaires\n\nLes tests unitaires peuvent être trouvés dans `tests\u002Funit` et seront exécutés après la construction des fixtures. Un nouveau serveur Nuxt sera utilisé pour chaque test afin qu'aucun état partagé (excepté l'état initial de l'étape de construction) ne soit présent.\n\nAprès avoir ajouté vos tests unitaires, vous pouvez les exécuter directement :\n\n```sh\njest test\u002Funit\u002Ftest.js\n```\n\nOu vous pouvez exécuter toute la suite de tests unitaires :\n\n```sh\nyarn test:unit\n```\n\nEncore une fois, sachez qu'il se peut que vous deviez reconstruire vos fixtures avant !\n\n### Tester vos changements\n\nPendant que vous travaillez sur votre PR, vous voudrez probablement vérifier si votre fixture est configurée correctement ou déboguer vos modifications en cours.\n\nPour ce faire, vous pouvez utiliser le script Nuxt pour lancer, par exemple, votre fixture ou une application d'exemple :\n\n```sh\nyarn nuxt examples\u002Fyour-app\nyarn nuxt test\u002Ffixtures\u002Fyour-fixture-app\n```\n\n\u003E `npm link` pourrait également fonctionner pour cela (et fonctionne, dans une certaine mesure), mais il est connu pour présenter quelques problèmes. C'est pourquoi nous recommandons d'appeler directement `yarn nuxt` pour exécuter les exemples.\n\n### Exemples\n\nSi vous travaillez sur une fonctionnalité plus importante, veuillez mettre en place une application d'exemple dans `examples\u002F`. Cela aidera grandement à comprendre les changements et permettra aux utilisateurs de Nuxt à comprendre la fonctionnalité que vous avez construite en profondeur.\n\n### Linting\n\nComme vous l'avez peut-être déjà remarqué, nous utilisons ESLint afin de standardiser le code. Veuillez lancer `yarn lint` avant de valider vos modifications pour vérifier que le style du code est correct. Si ce n'est pas le cas, vous pouvez utiliser `yarn lint --fix` ou `npm run lint -- --fix` (sans faute de frappe !) pour corriger la plupart des changements de style. S'il reste des erreurs, vous devez les corriger manuellement.\n\n### Documentation\n\nSi vous ajoutez une nouvelle fonctionnalité, ou si vous modifiez le comportement de Nuxt de toute autre manière, vous voudrez probablement documenter les changements. Veuillez le faire avec une PR dans le dépôt [docs](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fdocs\u002Fpulls). Vous n'êtes pas obligé de rédiger la documentation immédiatement (mais faites-le dès que votre PR est prête).\n\n### Liste de vérification finale\n\nLorsque vous soumettez votre PR, il existe un modèle simple que vous devez remplir. Veuillez cocher toutes les \"réponses\" appropriées dans les listes de contrôle.\n\n### Dépannage\n\n#### Débogage des tests sur macOS\n\nLa recherche de `getPort()` révélera qu'il est utilisé pour démarrer de nouveaux processus Nuxt pendant les tests. Il a été constaté qu'elle ne fonctionne pas toujours sous macOS et peut vous obliger à définir manuellement un port pour les tests.\n\nUn autre problème courant est celui des processus Nuxt qui peuvent rester en mémoire lors de l'exécution des tests de fixture. Un processus fantôme empêchera souvent les tests suivants de fonctionner. Exécutez `ps aux | grep -i node` pour inspecter les processus de test suspendus si vous pensez que cela se produit.\n",ast:{type:"root",children:[{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:D,props:{id:E},children:[{type:b,tag:e,props:{href:"#signaler-des-erreurs"},children:[{type:a,value:F}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Une excellente façon de contribuer au projet est d'envoyer un rapport détaillé lorsque vous rencontrez un problème : "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fissues\u002Fnew?assignees=&labels=bug-report&template=bug-report.md&title=",rel:[i,j,k],target:l},children:[{type:a,value:"Bug report"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Veuillez vous assurer d'inclure un dépôt de reproduction ou "},{type:b,tag:e,props:{href:"https:\u002F\u002Ftemplate.nuxtjs.org\u002F",rel:[i,j,k],target:l},children:[{type:a,value:"CodeSandBox"}]},{type:a,value:" afin que les bogues puissent être reproduits sans grands efforts. Plus un bug peut être reproduit, plus vite nous pouvons commencer à le corriger !"}]},{type:a,value:c},{type:b,tag:D,props:{id:G},children:[{type:b,tag:e,props:{href:"#pull-requests"},children:[{type:a,value:H}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Nous serons ravis de recevoir vos demandes de modification, même s'il s'agit simplement de corriger une coquille !"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cependant, toute amélioration significative doit être associée à une demande de "},{type:b,tag:e,props:{href:"https:\u002F\u002Ffeature.nuxtjs.org\u002F",rel:[i,j,k],target:l},children:[{type:a,value:"fonctionnalité"}]},{type:a,value:" ou d'un "},{type:b,tag:e,props:{href:"https:\u002F\u002Fbug.nuxtjs.org\u002F",rel:[i,j,k],target:l},children:[{type:a,value:"bug report"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:g,props:{id:I},children:[{type:b,tag:e,props:{href:"#pour-commencer"},children:[{type:a,value:J}]}]},{type:a,value:c},{type:b,tag:"prose-ol",props:{},children:[{type:a,value:c},{type:b,tag:K,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{href:"https:\u002F\u002Fhelp.github.com\u002Farticles\u002Ffork-a-repo\u002F",rel:[i,j,k],target:l},children:[{type:a,value:"Dupliquez (Fork)"}]},{type:a,value:" le "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js",rel:[i,j,k],target:l},children:[{type:a,value:"dépôt Nuxt"}]},{type:a,value:" sur votre propre compte GitHub, puis le "},{type:b,tag:e,props:{href:"https:\u002F\u002Fhelp.github.com\u002Farticles\u002Fcloning-a-repository\u002F",rel:[i,j,k],target:l},children:[{type:a,value:"cloner"}]},{type:a,value:" sur votre machine locale."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:K,props:{},children:[{type:a,value:c},{type:a,value:"Exécutez "},{type:b,tag:f,props:{},children:[{type:a,value:"npm install"}]},{type:a,value:y},{type:b,tag:f,props:{},children:[{type:a,value:"yarn install"}]},{type:a,value:" pour installer les dépendances."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"prose-em",props:{},children:[{type:a,value:"Notez que "},{type:b,tag:n,props:{},children:[{type:a,value:"npm"}]},{type:a,value:" et "},{type:b,tag:n,props:{},children:[{type:a,value:"yarn"}]},{type:a,value:" ont été vus comme manquant l'installation des dépendances. Pour remédier à cela, vous pouvez soit supprimer le dossier "},{type:b,tag:f,props:{},children:[{type:a,value:"node_modules"}]},{type:a,value:" de votre application d'exemple et l'installer à nouveau, soit faire une installation locale des dépendances manquantes."}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Si vous ajoutez une dépendance, veuillez utiliser "},{type:b,tag:f,props:{},children:[{type:a,value:"yarn add"}]},{type:a,value:". Le fichier "},{type:b,tag:f,props:{},children:[{type:a,value:"yarn.lock"}]},{type:a,value:" est la source de vérité pour toutes les dépendances de Nuxt."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{id:L},children:[{type:b,tag:e,props:{href:"#installation"},children:[{type:a,value:M}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Avant d'exécuter les tests, assurez-vous que toutes les dépendances ont bien été installées et vous pouvez alors construire les paquets :"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"yarn\nyarn build\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{id:N},children:[{type:b,tag:e,props:{href:"#structure-dun-test"},children:[{type:a,value:O}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Une bonne Pull Request, qu'il s'agisse d'une correction de bogue ou d'une nouvelle fonctionnalité, comprendra souvent des tests. Pour écrire de bons tests, nous allons vous expliquer la structure attendue :"}]},{type:a,value:c},{type:b,tag:z,props:{id:"fixtures"},children:[{type:b,tag:e,props:{href:"#fixtures"},children:[{type:a,value:"Fixtures"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Les fixtures (trouvées sous "},{type:b,tag:f,props:{},children:[{type:a,value:"tests\u002Ffixtures"}]},{type:a,value:") contiennent plusieurs applications Nuxt. Pour que le temps de construction soit le plus court possible, nous ne construisons pas une application Nuxt par test. Au lieu de cela, les fixtures sont construites ("},{type:b,tag:f,props:{},children:[{type:a,value:"yarn test:fixtures"}]},{type:a,value:") avant d'exécuter les tests unitaires."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Veillez à "},{type:b,tag:n,props:{},children:[{type:a,value:"modifier"}]},{type:a,value:y},{type:b,tag:n,props:{},children:[{type:a,value:"ajouter une nouvelle fixture"}]},{type:a,value:" lorsque vous soumettez une PR afin de refléter correctement les changements (si applicable)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"N'oubliez pas non plus de "},{type:b,tag:n,props:{},children:[{type:a,value:"reconstruire"}]},{type:a,value:" une fixture après l'avoir modifié en exécutant le test correspondant avec "},{type:b,tag:f,props:{},children:[{type:a,value:"jest test\u002Ffixtures\u002Fmy-fixture\u002Fmy-fixture.test.js"}]},{type:a,value:"!"}]},{type:a,value:c},{type:b,tag:z,props:{id:"tests-unitaires"},children:[{type:b,tag:e,props:{href:"#tests-unitaires"},children:[{type:a,value:"Tests unitaires"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Les tests unitaires peuvent être trouvés dans "},{type:b,tag:f,props:{},children:[{type:a,value:"tests\u002Funit"}]},{type:a,value:" et seront exécutés après la construction des fixtures. Un nouveau serveur Nuxt sera utilisé pour chaque test afin qu'aucun état partagé (excepté l'état initial de l'étape de construction) ne soit présent."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Après avoir ajouté vos tests unitaires, vous pouvez les exécuter directement :"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"jest test\u002Funit\u002Ftest.js\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ou vous pouvez exécuter toute la suite de tests unitaires :"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"yarn test:unit\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Encore une fois, sachez qu'il se peut que vous deviez reconstruire vos fixtures avant !"}]},{type:a,value:c},{type:b,tag:g,props:{id:P},children:[{type:b,tag:e,props:{href:"#tester-vos-changements"},children:[{type:a,value:Q}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pendant que vous travaillez sur votre PR, vous voudrez probablement vérifier si votre fixture est configurée correctement ou déboguer vos modifications en cours."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour ce faire, vous pouvez utiliser le script Nuxt pour lancer, par exemple, votre fixture ou une application d'exemple :"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"yarn nuxt examples\u002Fyour-app\nyarn nuxt test\u002Ffixtures\u002Fyour-fixture-app\n"}]}]}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"npm link"}]},{type:a,value:" pourrait également fonctionner pour cela (et fonctionne, dans une certaine mesure), mais il est connu pour présenter quelques problèmes. C'est pourquoi nous recommandons d'appeler directement "},{type:b,tag:f,props:{},children:[{type:a,value:"yarn nuxt"}]},{type:a,value:" pour exécuter les exemples."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{id:R},children:[{type:b,tag:e,props:{href:"#exemples"},children:[{type:a,value:v}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Si vous travaillez sur une fonctionnalité plus importante, veuillez mettre en place une application d'exemple dans "},{type:b,tag:f,props:{},children:[{type:a,value:"examples\u002F"}]},{type:a,value:". Cela aidera grandement à comprendre les changements et permettra aux utilisateurs de Nuxt à comprendre la fonctionnalité que vous avez construite en profondeur."}]},{type:a,value:c},{type:b,tag:g,props:{id:S},children:[{type:b,tag:e,props:{href:"#linting"},children:[{type:a,value:T}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Comme vous l'avez peut-être déjà remarqué, nous utilisons ESLint afin de standardiser le code. Veuillez lancer "},{type:b,tag:f,props:{},children:[{type:a,value:"yarn lint"}]},{type:a,value:" avant de valider vos modifications pour vérifier que le style du code est correct. Si ce n'est pas le cas, vous pouvez utiliser "},{type:b,tag:f,props:{},children:[{type:a,value:"yarn lint --fix"}]},{type:a,value:y},{type:b,tag:f,props:{},children:[{type:a,value:"npm run lint -- --fix"}]},{type:a,value:" (sans faute de frappe !) pour corriger la plupart des changements de style. S'il reste des erreurs, vous devez les corriger manuellement."}]},{type:a,value:c},{type:b,tag:g,props:{id:U},children:[{type:b,tag:e,props:{href:"#documentation"},children:[{type:a,value:A}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Si vous ajoutez une nouvelle fonctionnalité, ou si vous modifiez le comportement de Nuxt de toute autre manière, vous voudrez probablement documenter les changements. Veuillez le faire avec une PR dans le dépôt "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fdocs\u002Fpulls",rel:[i,j,k],target:l},children:[{type:a,value:V}]},{type:a,value:". Vous n'êtes pas obligé de rédiger la documentation immédiatement (mais faites-le dès que votre PR est prête)."}]},{type:a,value:c},{type:b,tag:g,props:{id:W},children:[{type:b,tag:e,props:{href:"#liste-de-v%C3%A9rification-finale"},children:[{type:a,value:X}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Lorsque vous soumettez votre PR, il existe un modèle simple que vous devez remplir. Veuillez cocher toutes les \"réponses\" appropriées dans les listes de contrôle."}]},{type:a,value:c},{type:b,tag:g,props:{id:Y},children:[{type:b,tag:e,props:{href:"#d%C3%A9pannage"},children:[{type:a,value:Z}]}]},{type:a,value:c},{type:b,tag:z,props:{id:"débogage-des-tests-sur-macos"},children:[{type:b,tag:e,props:{href:"#d%C3%A9bogage-des-tests-sur-macos"},children:[{type:a,value:"Débogage des tests sur macOS"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"La recherche de "},{type:b,tag:f,props:{},children:[{type:a,value:"getPort()"}]},{type:a,value:" révélera qu'il est utilisé pour démarrer de nouveaux processus Nuxt pendant les tests. Il a été constaté qu'elle ne fonctionne pas toujours sous macOS et peut vous obliger à définir manuellement un port pour les tests."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Un autre problème courant est celui des processus Nuxt qui peuvent rester en mémoire lors de l'exécution des tests de fixture. Un processus fantôme empêchera souvent les tests suivants de fonctionner. Exécutez "},{type:b,tag:f,props:{},children:[{type:a,value:"ps aux | grep -i node"}]},{type:a,value:" pour inspecter les processus de test suspendus si vous pensez que cela se produit."}]}]},toc:{title:x,searchDepth:w,depth:w,links:[{id:E,depth:w,text:F},{id:G,depth:w,text:H,children:[{id:I,depth:h,text:J},{id:L,depth:h,text:M},{id:N,depth:h,text:O},{id:P,depth:h,text:Q},{id:R,depth:h,text:v},{id:S,depth:h,text:T},{id:U,depth:h,text:A},{id:W,depth:h,text:X},{id:Y,depth:h,text:Z}]}]}}},templateOptions:{header:o,footer:o,aside:m,asideClass:x,fluid:m,banner:o},_img:{"/_ipx/https://source.unsplash.com/random":"\u002F_nuxt\u002Fimage\u002F3682c6[ext]"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Découvrir",items:[{title:_,subtitle:"Sélection de sites créés avec Nuxt",slug:"showcases",to:$,icon:"showcases.svg",color:"bg-sand"},{title:"Étude de cas",subtitle:"Comment Nuxt est utilisé par les entreprises",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Témoignages",subtitle:"Ce qu'ils pensent de nous",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Apprendre",items:[{title:"Docs",subtitle:"Créez un site web facilement",slug:V,to:aa,icon:"docs.svg",color:"bg-green-500"},{title:v,subtitle:"Comprendre tout sur Nuxt",slug:"examples",to:ab,icon:"examples.svg",color:"bg-green-600"},{title:ac,subtitle:"Apprenez avec des cas concrets",slug:"tutorials",to:ad,icon:"tutorials.svg",color:"bg-green-700"},{title:ae,subtitle:"Apprenez en plus grâce aux experts",href:af,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explorer",items:[{title:ag,subtitle:"Comment déployer Nuxt",slug:"deployments",to:ah,icon:"deployments.svg",color:"bg-indigo-light"},{title:ai,subtitle:"Toute la puissance de Nuxt",href:aj,icon:"modules.svg",color:"bg-indigo"},{title:ak,subtitle:"Commencez avec les thèmes",slug:"themes",to:al,icon:"themes.svg",color:"bg-indigo-dark"},{title:am,subtitle:"Apprendre étape par étape",slug:"video-courses",to:an,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Communauté",items:[{title:ao,subtitle:"Les dernières nouvelles concernant Nuxt",slug:"announcements",to:ap,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aq,subtitle:"Nous sommes Nuxt",slug:"teams",to:ar,icon:"teams.svg",color:"bg-mint-light"},{title:as,subtitle:"Tout le code que nous avons publié",slug:"releases",to:at,icon:"releases.svg",color:"bg-mint"},{title:au,subtitle:"Ils croient en nous",slug:"sponsors",to:av,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partenaires",slug:"partners",to:aw}],footerLinks:[{title:"À propos",items:[{title:"Nous contacter",href:"mailto:hello@nuxtjs.com"},{title:"Support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open source softwares",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partenariat",href:aw},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Écosystème",items:[{title:ao,to:ap},{title:"Contribuer",to:B},{title:"Discutez avec nous",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Événements",to:"\u002Fevents"},{title:au,to:av},{title:aq,to:ar},{title:ac,to:ad},{title:am,to:an}]},{title:"Ressources",items:[{title:"Design",to:"\u002Fdesign"},{title:A,to:aa},{title:v,to:ab},{title:ag,to:ah},{title:ae,href:af},{title:ai,href:aj},{title:as,to:at},{title:_,to:$},{title:ak,to:al}]}],showCookieBanner:m},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","ProseEm","HomeLearnMaster","SectionContentItem","ProseHr","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer"])},mutations:[]}}("text","element","\n","prose-paragraph","prose-a","prose-code-inline","prose-h3",3,"nofollow","noopener","noreferrer","_blank",false,"prose-strong",true,"prose-blockquote","prose-code","pre","language-text","line-numbers","code","Exemples",2,""," ou ","prose-h4","Documentation","\u002Fcontribution-guide","Toute contribution à Nuxt est plus que bienvenue !","prose-h2","signaler-des-erreurs","Signaler des erreurs","pull-requests","Pull Requests","pour-commencer","Pour commencer","prose-li","installation","Installation","structure-dun-test","Structure d'un Test","tester-vos-changements","Tester vos changements","exemples","linting","Linting","documentation","docs","liste-de-vérification-finale","Liste de vérification finale","dépannage","Dépannage","Showcases","\u002Fshowcases","\u002Fdocs","\u002Fexamples","Tutoriels","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Déploiements","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Thèmes","\u002Fthemes","Cours vidéo","\u002Fvideo-courses","Annonces","\u002Fannouncements","Équipes","\u002Fteams","Notes de version","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));