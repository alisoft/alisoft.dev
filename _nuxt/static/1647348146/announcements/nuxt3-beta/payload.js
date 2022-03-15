__NUXT_JSONP__("/announcements/nuxt3-beta", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah){return {data:[{page:{key:"content:en:announcements:5.nuxt3-beta.md",generatedAt:new Date(1647348258083),mtime:new Date(1647348258056),slug:"nuxt3-beta",title:"Introducing Nuxt 3 Beta",position:"999900050000",to:"\u002Fannouncements\u002Fnuxt3-beta",draft:n,page:p,language:"en",template:"Post",description:"468 days after the first commit, the Nuxt 3 beta has finally arrived. Discover what's inside and what to expect from it. Yes, it includes Vue 3 and Vite ⚡️",imgUrl:"blog\u002Fnuxt3-beta\u002Fmain.jpg",date:new Date(1633996800000),authors:[{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1042510623962275840\u002F1Iw_Mvud_400x400.jpg",link:"https:\u002F\u002Ftwitter.com\u002Fatinux"},{name:"Pooya Parsa",avatarUrl:"https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1268227177612541952\u002F9-fujxqt_400x400.jpg",link:"https:\u002F\u002Ftwitter.com\u002F_pi0_"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1326211963614007302\u002FUJyvtK2f_400x400.jpg",link:"https:\u002F\u002Ftwitter.com\u002Fdanielcroe"},{name:"Alexandre Chopin",avatarUrl:"https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1255027239458091009\u002FqMp_q8vy_400x400.jpg",link:"https:\u002F\u002Ftwitter.com\u002FIAmNuxt"}],tags:["framework","release","beta"],category:"Release",empty:n,excerpt:void 0,body:{raw:"---\ntemplate: post\ntitle: Introducing Nuxt 3 Beta\ndescription: \"468 days after the first commit, the Nuxt 3 beta has finally arrived. Discover what's inside and what to expect from it. Yes, it includes Vue 3 and Vite ⚡️\"\nimgUrl: blog\u002Fnuxt3-beta\u002Fmain.jpg\ndate: 2021-10-12\nauthors:\n  - name: Sébastien Chopin\n    avatarUrl: https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1042510623962275840\u002F1Iw_Mvud_400x400.jpg\n    link: https:\u002F\u002Ftwitter.com\u002Fatinux\n  - name: Pooya Parsa\n    avatarUrl: https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1268227177612541952\u002F9-fujxqt_400x400.jpg\n    link: https:\u002F\u002Ftwitter.com\u002F_pi0_\n  - name: Daniel Roe\n    avatarUrl: https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1326211963614007302\u002FUJyvtK2f_400x400.jpg\n    link: https:\u002F\u002Ftwitter.com\u002Fdanielcroe\n  - name: Alexandre Chopin\n    avatarUrl: https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1255027239458091009\u002FqMp_q8vy_400x400.jpg\n    link: https:\u002F\u002Ftwitter.com\u002FIAmNuxt\ntags:\n  - framework\n  - release\n  - beta\ncategory: Release\n---\n\nWe are excited to open source Nuxt 3 after more than a year of intense development. The repository is available on GitHub on [nuxt\u002Fframework](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework) under the [MIT](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002FLICENSE) license.\n\n::alert{type=success}\nThe documentation is available on https:\u002F\u002Fv3.nuxtjs.org.\n::\n\n## A new foundation\n\nOn top of supporting [Vue 3](https:\u002F\u002Fv3.vuejs.org) or [Vite](https:\u002F\u002Fvitejs.dev), Nuxt 3 contains a new [server engine](https:\u002F\u002Fv3.nuxtjs.org\u002Fconcepts\u002Fserver-engine), unlocking new full-stack capabilities to Nuxt server and beyond. It's the first JavaScript application server that is portable across a variety of modern cloud hosting providers.\n\nIn production, it builds your Vue application and server into one universal `.output` directory. This output is light: minified and without any other Node.js dependencies (except polyfills). You can deploy this output on any system supporting JavaScript, whether Node.js, Serverless, Workers, Edge-side rendering or purely static.\n\n**Bonus:** this server engine can be used on existing Nuxt 2 projects with [Nuxt Bridge](https:\u002F\u002Fv3.nuxtjs.org\u002Fgetting-started\u002Fbridge) 🚀\n\nHead over the [Nuxt 3 homepage](https:\u002F\u002Fv3.nuxtjs.org) to learn more about Nuxt Nitro and Nuxt Bridge.\n\n## Important notes\n\nNuxt 3 is currently in beta, so expect things to break (and be fixed quickly). We have [plenty of work left](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fissues) but we want to open it publicly to gather feedback and contributions from the community 💚\n\n**Do not use it for production until we reach the first release candidate.**\n\nDuring the beta, almost every commit will [trigger a new npm release](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002F.github\u002Fworkflows\u002Fci.yml#L111-L119); you may want to look at the [merged pull requests](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fpulls?q=is%3Apr+is%3Amerged) until we begin generating automated changelogs in the documentation.\n\nWe are working every day to improve the documentation, explaining as much as possible all the concepts, features and usage of Nuxt 3.\n\nCheck out the community section of the Nuxt 3 website for [getting help](https:\u002F\u002Fv3.nuxtjs.org\u002Fcommunity\u002Fgetting-help), [reporting bugs](https:\u002F\u002Fv3.nuxtjs.org\u002Fcommunity\u002Freporting-bugs) or [contributing to the framework](https:\u002F\u002Fv3.nuxtjs.org\u002Fcommunity\u002Fcontribution).\n\n## Timeline\n\nHere some major milestones we've achieved on the way to Nuxt 3:\n\n::list\n- **Jul 2, 2020**: Nuxt 3 first commit with full TypeScript rewrite\n- **Aug 7, 2020**: Webpack 5 support\n- **Sep 15, 2020**: [`pages\u002F`](https:\u002F\u002Fv3.nuxtjs.org\u002Fdocs\u002Fdirectory-structure\u002Fpages) support\n- **Oct 29, 2020**: [Vue 3](https:\u002F\u002Fv3.vuejs.org) support with bundle-renderer\n- **Nov 2, 2020**: [Nuxt Nitro](https:\u002F\u002Fv3.nuxtjs.org\u002Fconcepts\u002Fserver-engine) initial work\n- **Jan 22, 2021**: Initial [Vite](https:\u002F\u002Fvitejs.dev) support\n- **Feb 4, 2021**: Nuxt can deploy on [major serverless platforms](https:\u002F\u002Fv3.nuxtjs.org\u002Fdocs\u002Fdeployment)\n- **Mar 6, 2021**: [UnJS](https:\u002F\u002Fgithub.com\u002Funjs) organisation created on GitHub\n- **Mar 28, 2021**: Init Nuxt Kit and Nuxt CLI ([nuxi](https:\u002F\u002Fv3.nuxtjs.org\u002Fgetting-started\u002Fcommands))\n- **May 20, 2021**: [`app.vue`](https:\u002F\u002Fv3.nuxtjs.org\u002Fdocs\u002Fdirectory-structure\u002Fapp) support (`pages\u002F` becomes optional)\n- **Jun 30, 2021**: [`layouts\u002F`](https:\u002F\u002Fv3.nuxtjs.org\u002Fdocs\u002Fdirectory-structure\u002Flayouts) support\n- **Jul 15, 2021**: Native ESM support\n- **Aug 10, 2021**: Auto import of composables and components\n- **Sep 5, 2021**: Init [Nuxt Bridge](https:\u002F\u002Fv3.nuxtjs.org\u002Fgetting-started\u002Fbridge) for improving Nuxt 2 experience\n- **Sep 7, 2021**: Support Vite build for production\n- **Oct 11, 2021**: Add [`useState`](https:\u002F\u002Fv3.nuxtjs.org\u002Fdocs\u002Fusage\u002Fstate) and [`useFetch`](https:\u002F\u002Fv3.nuxtjs.org\u002Fdocs\u002Fusage\u002Fdata-fetching#usefetch) composables\n::\n\nSo far, we've merged [385 pull requests](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fpulls?q=is%3Apr+is%3Amerged), closed [229 issues](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fissues?q=is%3Aissue+is%3Aclosed) and made [925+ commits](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fcommits\u002Fmain).\n\nWe are excited to hear your thoughts and we thank you for your patience.\n\nNow you can go over the [Nuxt 3 documentation](https:\u002F\u002Fv3.nuxtjs.org) 😊\n\nDon't forget to follow us on [Twitter](https:\u002F\u002Ftwitter.com\u002Fnuxt_js) to get the latest news about Nuxt!\n",ast:{type:"root",children:[{type:b,tag:j,props:{class:"d-heading-description"},children:[{type:a,value:"We are excited to open source Nuxt 3 after more than a year of intense development. The repository is available on GitHub on "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework",rel:[e,f,g],target:h},children:[{type:a,value:"nuxt\u002Fframework"}]},{type:a,value:" under the "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002FLICENSE",rel:[e,f,g],target:h},children:[{type:a,value:"MIT"}]},{type:a,value:" license."}]},{type:a,value:c},{type:b,tag:"alert",props:{type:"success"},children:[{type:b,tag:j,props:{},children:[{type:a,value:"The documentation is available on "},{type:b,tag:d,props:{href:q,rel:[e,f,g],target:h},children:[{type:a,value:q}]},{type:a,value:r}]}]},{type:a,value:c},{type:b,tag:s,props:{id:u},children:[{type:b,tag:d,props:{href:"#a-new-foundation"},children:[{type:a,value:v}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"On top of supporting "},{type:b,tag:d,props:{href:w,rel:[e,f,g],target:h},children:[{type:a,value:x}]},{type:a,value:y},{type:b,tag:d,props:{href:z,rel:[e,f,g],target:h},children:[{type:a,value:A}]},{type:a,value:", Nuxt 3 contains a new "},{type:b,tag:d,props:{href:B,rel:[e,f,g],target:h},children:[{type:a,value:"server engine"}]},{type:a,value:", unlocking new full-stack capabilities to Nuxt server and beyond. It's the first JavaScript application server that is portable across a variety of modern cloud hosting providers."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"In production, it builds your Vue application and server into one universal "},{type:b,tag:l,props:{},children:[{type:a,value:".output"}]},{type:a,value:" directory. This output is light: minified and without any other Node.js dependencies (except polyfills). You can deploy this output on any system supporting JavaScript, whether Node.js, Serverless, Workers, Edge-side rendering or purely static."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"Bonus:"}]},{type:a,value:" this server engine can be used on existing Nuxt 2 projects with "},{type:b,tag:d,props:{href:C,rel:[e,f,g],target:h},children:[{type:a,value:D}]},{type:a,value:" 🚀"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Head over the "},{type:b,tag:d,props:{href:q,rel:[e,f,g],target:h},children:[{type:a,value:"Nuxt 3 homepage"}]},{type:a,value:" to learn more about Nuxt Nitro and Nuxt Bridge."}]},{type:a,value:c},{type:b,tag:s,props:{id:E},children:[{type:b,tag:d,props:{href:"#important-notes"},children:[{type:a,value:F}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Nuxt 3 is currently in beta, so expect things to break (and be fixed quickly). We have "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fissues",rel:[e,f,g],target:h},children:[{type:a,value:"plenty of work left"}]},{type:a,value:" but we want to open it publicly to gather feedback and contributions from the community 💚"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"Do not use it for production until we reach the first release candidate."}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"During the beta, almost every commit will "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002F.github\u002Fworkflows\u002Fci.yml#L111-L119",rel:[e,f,g],target:h},children:[{type:a,value:"trigger a new npm release"}]},{type:a,value:"; you may want to look at the "},{type:b,tag:d,props:{href:G,rel:[e,f,g],target:h},children:[{type:a,value:"merged pull requests"}]},{type:a,value:" until we begin generating automated changelogs in the documentation."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"We are working every day to improve the documentation, explaining as much as possible all the concepts, features and usage of Nuxt 3."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Check out the community section of the Nuxt 3 website for "},{type:b,tag:d,props:{href:"https:\u002F\u002Fv3.nuxtjs.org\u002Fcommunity\u002Fgetting-help",rel:[e,f,g],target:h},children:[{type:a,value:"getting help"}]},{type:a,value:", "},{type:b,tag:d,props:{href:"https:\u002F\u002Fv3.nuxtjs.org\u002Fcommunity\u002Freporting-bugs",rel:[e,f,g],target:h},children:[{type:a,value:"reporting bugs"}]},{type:a,value:y},{type:b,tag:d,props:{href:"https:\u002F\u002Fv3.nuxtjs.org\u002Fcommunity\u002Fcontribution",rel:[e,f,g],target:h},children:[{type:a,value:"contributing to the framework"}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:s,props:{id:H},children:[{type:b,tag:d,props:{href:"#timeline"},children:[{type:a,value:I}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Here some major milestones we've achieved on the way to Nuxt 3:"}]},{type:a,value:c},{type:b,tag:"list",props:{},children:[{type:b,tag:"prose-ul",props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Jul 2, 2020"}]},{type:a,value:": Nuxt 3 first commit with full TypeScript rewrite"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Aug 7, 2020"}]},{type:a,value:": Webpack 5 support"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Sep 15, 2020"}]},{type:a,value:m},{type:b,tag:d,props:{href:"https:\u002F\u002Fv3.nuxtjs.org\u002Fdocs\u002Fdirectory-structure\u002Fpages",rel:[e,f,g],target:h},children:[{type:b,tag:l,props:{},children:[{type:a,value:J}]}]},{type:a,value:t},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Oct 29, 2020"}]},{type:a,value:m},{type:b,tag:d,props:{href:w,rel:[e,f,g],target:h},children:[{type:a,value:x}]},{type:a,value:" support with bundle-renderer"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Nov 2, 2020"}]},{type:a,value:m},{type:b,tag:d,props:{href:B,rel:[e,f,g],target:h},children:[{type:a,value:"Nuxt Nitro"}]},{type:a,value:" initial work"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Jan 22, 2021"}]},{type:a,value:": Initial "},{type:b,tag:d,props:{href:z,rel:[e,f,g],target:h},children:[{type:a,value:A}]},{type:a,value:t},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Feb 4, 2021"}]},{type:a,value:": Nuxt can deploy on "},{type:b,tag:d,props:{href:"https:\u002F\u002Fv3.nuxtjs.org\u002Fdocs\u002Fdeployment",rel:[e,f,g],target:h},children:[{type:a,value:"major serverless platforms"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Mar 6, 2021"}]},{type:a,value:m},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Funjs",rel:[e,f,g],target:h},children:[{type:a,value:"UnJS"}]},{type:a,value:" organisation created on GitHub"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Mar 28, 2021"}]},{type:a,value:": Init Nuxt Kit and Nuxt CLI ("},{type:b,tag:d,props:{href:"https:\u002F\u002Fv3.nuxtjs.org\u002Fgetting-started\u002Fcommands",rel:[e,f,g],target:h},children:[{type:a,value:"nuxi"}]},{type:a,value:")"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"May 20, 2021"}]},{type:a,value:m},{type:b,tag:d,props:{href:"https:\u002F\u002Fv3.nuxtjs.org\u002Fdocs\u002Fdirectory-structure\u002Fapp",rel:[e,f,g],target:h},children:[{type:b,tag:l,props:{},children:[{type:a,value:"app.vue"}]}]},{type:a,value:" support ("},{type:b,tag:l,props:{},children:[{type:a,value:J}]},{type:a,value:" becomes optional)"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Jun 30, 2021"}]},{type:a,value:m},{type:b,tag:d,props:{href:"https:\u002F\u002Fv3.nuxtjs.org\u002Fdocs\u002Fdirectory-structure\u002Flayouts",rel:[e,f,g],target:h},children:[{type:b,tag:l,props:{},children:[{type:a,value:"layouts\u002F"}]}]},{type:a,value:t},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Jul 15, 2021"}]},{type:a,value:": Native ESM support"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Aug 10, 2021"}]},{type:a,value:": Auto import of composables and components"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Sep 5, 2021"}]},{type:a,value:": Init "},{type:b,tag:d,props:{href:C,rel:[e,f,g],target:h},children:[{type:a,value:D}]},{type:a,value:" for improving Nuxt 2 experience"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Sep 7, 2021"}]},{type:a,value:": Support Vite build for production"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Oct 11, 2021"}]},{type:a,value:": Add "},{type:b,tag:d,props:{href:"https:\u002F\u002Fv3.nuxtjs.org\u002Fdocs\u002Fusage\u002Fstate",rel:[e,f,g],target:h},children:[{type:b,tag:l,props:{},children:[{type:a,value:"useState"}]}]},{type:a,value:" and "},{type:b,tag:d,props:{href:"https:\u002F\u002Fv3.nuxtjs.org\u002Fdocs\u002Fusage\u002Fdata-fetching#usefetch",rel:[e,f,g],target:h},children:[{type:b,tag:l,props:{},children:[{type:a,value:"useFetch"}]}]},{type:a,value:" composables"},{type:a,value:c}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"So far, we've merged "},{type:b,tag:d,props:{href:G,rel:[e,f,g],target:h},children:[{type:a,value:"385 pull requests"}]},{type:a,value:", closed "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fissues?q=is%3Aissue+is%3Aclosed",rel:[e,f,g],target:h},children:[{type:a,value:"229 issues"}]},{type:a,value:" and made "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fcommits\u002Fmain",rel:[e,f,g],target:h},children:[{type:a,value:"925+ commits"}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"We are excited to hear your thoughts and we thank you for your patience."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Now you can go over the "},{type:b,tag:d,props:{href:q,rel:[e,f,g],target:h},children:[{type:a,value:"Nuxt 3 documentation"}]},{type:a,value:" 😊"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Don't forget to follow us on "},{type:b,tag:d,props:{href:"https:\u002F\u002Ftwitter.com\u002Fnuxt_js",rel:[e,f,g],target:h},children:[{type:a,value:"Twitter"}]},{type:a,value:" to get the latest news about Nuxt!"}]}]},toc:{title:K,searchDepth:o,depth:o,links:[{id:u,depth:o,text:v},{id:E,depth:o,text:F},{id:H,depth:o,text:I}]}}},templateOptions:{header:p,footer:p,aside:n,asideClass:K,fluid:n,banner:p},_img:{"/_ipx/https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg?s=32_32":"\u002F_nuxt\u002Fimage\u002Fc24e94.jpg","/_ipx/https://pbs.twimg.com/profile_images/1268227177612541952/9-fujxqt_400x400.jpg?s=32_32":"\u002F_nuxt\u002Fimage\u002Fa02823.jpg","/_ipx/https://pbs.twimg.com/profile_images/1326211963614007302/UJyvtK2f_400x400.jpg?s=32_32":"\u002F_nuxt\u002Fimage\u002F42335d.jpg","/_ipx/https://pbs.twimg.com/profile_images/1255027239458091009/qMp_q8vy_400x400.jpg?s=32_32":"\u002F_nuxt\u002Fimage\u002F3baf23.jpg","/_ipx/blog/nuxt3-beta/main.jpg":"\u002F_nuxt\u002Fimage\u002Faa2435.jpg"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:L,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:M,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:N,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:"Docs",subtitle:"Create fast websites easily",slug:"docs",to:O,icon:"docs.svg",color:"bg-green-500"},{title:P,subtitle:"Understand everything in Nuxt",slug:"examples",to:Q,icon:"examples.svg",color:"bg-green-600"},{title:R,subtitle:"Learn with concrete cases",slug:"tutorials",to:S,icon:"tutorials.svg",color:"bg-green-700"},{title:T,subtitle:"Learn more with experts",href:U,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:V,subtitle:"How to Deploy Nuxt",slug:"deployments",to:W,icon:"deployments.svg",color:"bg-indigo-light"},{title:X,subtitle:"Extend the power of Nuxt",href:Y,icon:"modules.svg",color:"bg-indigo"},{title:Z,subtitle:"Get started with themes",slug:"themes",to:_,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:$,subtitle:"Latest news about Nuxt",slug:"announcements",to:aa,icon:"announcements.svg",color:"bg-mint-lighter"},{title:ab,subtitle:"They are Nuxt",slug:"teams",to:ac,icon:"teams.svg",color:"bg-mint-light"},{title:ad,subtitle:"All the code we have released",slug:"releases",to:ae,icon:"releases.svg",color:"bg-mint"},{title:af,subtitle:"They trust us",slug:"sponsors",to:ag,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:ah}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:ah},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:$,to:aa},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:af,to:ag},{title:ab,to:ac},{title:R,to:S},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:O},{title:P,to:Q},{title:V,to:W},{title:T,href:U},{title:X,href:Y},{title:ad,to:ae},{title:L,to:M},{title:Z,to:_}]}],showCookieBanner:n},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",N,"HomeTestimonials","ProseEm","ProseHr","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link"])},mutations:[]}}("text","element","\n","prose-a","nofollow","noopener","noreferrer","_blank","prose-strong","prose-paragraph","prose-li","prose-code-inline",": ",false,2,true,"https:\u002F\u002Fv3.nuxtjs.org",".","prose-h2"," support","a-new-foundation","A new foundation","https:\u002F\u002Fv3.vuejs.org","Vue 3"," or ","https:\u002F\u002Fvitejs.dev","Vite","https:\u002F\u002Fv3.nuxtjs.org\u002Fconcepts\u002Fserver-engine","https:\u002F\u002Fv3.nuxtjs.org\u002Fgetting-started\u002Fbridge","Nuxt Bridge","important-notes","Important notes","https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fpulls?q=is%3Apr+is%3Amerged","timeline","Timeline","pages\u002F","","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));