__NUXT_JSONP__("/fr/announcements/nuxt-static-improvements", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn){return {data:[{page:{key:"content:fr:announcements:0.nuxt-static-improvements.md",generatedAt:new Date(1647346729964),mtime:new Date(1647346729934),slug:"nuxt-static-improvements",title:"Nuxt Static Improvements",position:"999900000000",to:"\u002Fannouncements\u002Fnuxt-static-improvements",draft:w,page:C,language:"fr",template:"Post",description:"With Nuxt version 2.13, the full-static mode has been introduced. In addition, a new command nuxt export was added to pre-render your pages without triggering a webpack build with the goal to separate the rendering and build process. The only issue was that most Nuxt users weren't able to unleash the full potential of the separation... until now.",imgUrl:"blog\u002Fnuxt-static-improvements\u002Fmain.jpeg",imgCredits:"Naresh Bojja",imgCreditsUrl:"https:\u002F\u002Funsplash.com\u002F@nareshbojja",date:new Date(1595808000000),authors:[{name:"Alexander Lichter",avatarUrl:"https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1316077440414998528\u002FmY2rcM7__400x400.jpg",link:"https:\u002F\u002Ftwitter.com\u002FTheAlexLichter"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1042510623962275840\u002F1Iw_Mvud_400x400.jpg",link:"https:\u002F\u002Ftwitter.com\u002Fatinux"},{name:"Pooya Parsa",avatarUrl:"https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1268227177612541952\u002F9-fujxqt_400x400.jpg",link:"https:\u002F\u002Ftwitter.com\u002F_pi0_"}],tags:["release","full-static","framework"],category:"Release",empty:w,excerpt:void 0,body:{raw:"---\ntemplate: post\ntitle: Nuxt Static Improvements\ndescription: With Nuxt version 2.13, the full-static mode has been introduced. In addition, a new command nuxt export was added to pre-render your pages without triggering a webpack build with the goal to separate the rendering and build process. The only issue was that most Nuxt users weren't able to unleash the full potential of the separation... until now.\nimgUrl: blog\u002Fnuxt-static-improvements\u002Fmain.jpeg\nimgCredits: Naresh Bojja\nimgCreditsUrl: https:\u002F\u002Funsplash.com\u002F@nareshbojja\ndate: 2020-07-27\nauthors:\n  - name: Alexander Lichter\n    avatarUrl: https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1316077440414998528\u002FmY2rcM7__400x400.jpg\n    link: https:\u002F\u002Ftwitter.com\u002FTheAlexLichter\n  - name: Sébastien Chopin\n    avatarUrl: https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1042510623962275840\u002F1Iw_Mvud_400x400.jpg\n    link: https:\u002F\u002Ftwitter.com\u002Fatinux\n  - name: Pooya Parsa\n    avatarUrl: https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1268227177612541952\u002F9-fujxqt_400x400.jpg\n    link: https:\u002F\u002Ftwitter.com\u002F_pi0_\ntags:\n  - release\n  - full-static\n  - framework\ncategory: Release\n---\n\n## Introduction\n\nWith Nuxt version 2.13, the [full-static mode](\u002Fannouncements\u002Fgoing-full-static) has been introduced. In addition, a new command `nuxt export` was added to pre-render your pages without triggering a webpack build with the goal to separate the rendering and build process. The only issue was that most Nuxt users weren't able to unleash the full potential of the separation... **until now.**\n\n- [Introduction](#introduction)\n- [Faster Static Deployments](#faster-static-deployments)\n- [Generate time: cache vs full webpack build](#generate-time-cache-vs-full-webpack-build)\n- [Using in your projects](#using-in-your-projects)\n  - [Excluding Files from Cache](#excluding-files-from-cache)\n  - [Module Authors](#module-authors)\n- [How it works](#how-it-works)\n  - [Back to old school commands](#back-to-old-school-commands)\n- [What to do next](#what-to-do-next)\n\n## Faster Static Deployments\n\nWith v2.14, `nuxt generate` will **automagically skip webpack build step when no code has been changed** and use the previous build using cache. This will help to drastically improve static deployments time by avoiding unnecessary builds which is usually the most time-consuming part of generation process. Cache support is **platform-agnostic** and works on Netlify, Vercel, or any other CI\u002FCD setup that is caching `node_modules`.\n\n::video-player\n---\nsources:\n- src: https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1595852304\u002Fnuxt-smart-generate_pjaat1.webm\n  type: video\u002Fwebm\n- src: https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1595852304\u002Fnuxt-smart-generate_pjaat1.mp4\n  type: video\u002Fmp4\n- src: https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1595852304\u002Fnuxt-smart-generate_pjaat1.ogv\n  type: video\u002Fogg\nposter: https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1595852304\u002Fnuxt-smart-generate_pjaat1.jpg\n---\n::\n\n## Generate time: cache vs full webpack build\n\nSee the comparison in seconds between two `nuxt generate`:\n\n- `Build` is when a webpack build is required\n- `Cache` is only when the content has changed (webpack build skipped)\n\n\u003Cbar-chart-cache-build\u003E\u003C\u002Fbar-chart-cache-build\u003E\n\n::alert{type=\"next\"}\nThe static site generation of our projects on content changes are now **~3.6x times** faster 🚀\n::\n\nProject links: [Basic](https:\u002F\u002Fgithub.com\u002Fpi0\u002Fnuxt-static-demo), [Strapi Module Docs](https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fstrapi-module\u002Ftree\u002Fmaster\u002Fdocs), [Content Module Docs](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcontent\u002Ftree\u002Fmaster\u002Fdocs) and [Nuxt Docs](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org).\n\n## Using in your projects\n\n1. Update `nuxt` to the latest minor version, which is v2.14.\n\n::code-group\n```bash [Yarn]\nyarn upgrade nuxt\n```\n```bash [NPM]\nnpm update\n```\n::\n\n2. Ensure `target` is `static` inside your `nuxt.config`\n\n```js{}[nuxt.config.js]\nexport default {\n  target: 'static'\n  \u002F\u002F ...\n}\n```\n\n`nuxt generate` will behave as before to avoid breaking changes and provide legacy compatibility if you keep `target: ‘server’` or don't specify target.\n\n3. That’s it 🙌\n\nNow, the `nuxt generate` command will build the project only if necessary, which is the case when files inside the project have been changed. It will always re-render your routes to static HTML files, like `nuxt export` is doing already.\n\nNow you only have to change your build command back from `nuxt build && nuxt export` to `nuxt generate` on the platform you are using. If you are using a CI, ensure that you are properly caching `node_modules`.\n\n### Excluding Files from Cache\n\nBy default, nuxt ignores these directories so if any change happens inside them, build will not be triggered:\n\n- Build directory (`.nuxt\u002F`)\n- Static directory (`static\u002F`)\n- Generate dist (`dist\u002F`)\n- `node_modules`\n- `README.md`\n- Hidden dotfiles (like `.npmrc`)\n\nYou can add more patterns using [generate.cache.ignore](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#cache) option in `nuxt.config`:\n\n```js{}[nuxt.config.js]\nexport default {\n  generate: {\n    cache: {\n      ignore: [\n        \u002F\u002F When something changed in the docs folder, do not re-build via webpack\n        'docs'\n      ]\n    }\n  }\n}\n```\n\nIt is also possible to use a function for `ignore` option to override default ignore entries.\n\n### Module Authors\n\nWhat if you are developing a nuxt module that is working with files that should not trigger a rebuild? The best example is for [@nuxt\u002Fcontent](https:\u002F\u002Fcontent.nuxtjs.org) module that reads markdown files from the repository. In this case, these files are used within a runtime module, which is the case when using `@nuxt\u002Fcontent`, the module itself can tell nuxt to ignore these files for you already so you don't have to do anything! Module authors can use the new `generate:cache:ignore` hook to do so:\n\n```js\nnuxt.hook('generate:cache:ignore', ignore =\u003E ignore.push('content'))\n```\n\n## How it works\n\nWhen using the new `nuxt generate` with `static` target, a snapshot including checksum of non-ignored project files as well as nuxt version and some other configuration will be written `.nuxt\u002Fbuild.json`. In addition, we also move the build directory to `node_modules\u002F.cache\u002Fnuxt`. Because `node_modules` is cached by all major platforms (Netlify, Vercel, ...) and common CI\u002FCD scripts, this solution works out of the box without additional configuration.\n\nWhen `nuxt generate` is called subsequently, it will again create a checksum based on your project files and then compare it to the existing one inside `node_modules\u002F.cache\u002Fnuxt\u002Fbuild.json`.\n\nIf they match, it means that nothing is changed that needs rebuild so we can directly start rendering pages.\n\nIf a mismatch is detected, it means that a full rebuild would be necessary. You can also see what file caused rebuild by checking console logs. After the build, nuxt generate will save the new checksum inside `.nuxt\u002Fbuild.json`. You can check full implementation [here](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fpull\u002F7712).\n\n### Back to old school commands\n\nWith Nuxt v2.13, we introduced `nuxt export` and `nuxt serve` specially designed for the static target. With Nuxt v2.14, they are deprecated as `nuxt generate` and `nuxt start` is smart to detect the target and build when necessary.\n\nServer target:\n\n- `nuxt dev` = development server\n- `nuxt build` = build your application for production\n- `nuxt start` = start the production server (use it for Node.js hosting like Heroku, Digital Ocean, etc)\n\nStatic target:\n\n- `nuxt dev` = development server\n- `nuxt generate` = build if needed and statically export to `dist\u002F`\n- `nuxt start` = serve the `dist\u002F` directory like your static hosting would do (Netlify, Vercel, Surge, etc), great for testing before deploying\n\n## What to do next\n\n- Upgrade your project to [nuxt@2.14.0](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Freleases\u002Ftag\u002Fv2.14.0)\n- Use `nuxt generate` instead of `nuxt export`\n- Use `nuxt start` instead of `nuxt serve`\n- Enjoy fast deployments 🤙\n",ast:{type:"root",children:[{type:b,tag:t,props:{id:ab},children:[{type:b,tag:h,props:{href:ac},children:[{type:a,value:P}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"With Nuxt version 2.13, the "},{type:b,tag:h,props:{href:"\u002Fannouncements\u002Fgoing-full-static"},children:[{type:a,value:"full-static mode"}]},{type:a,value:" has been introduced. In addition, a new command "},{type:b,tag:d,props:{},children:[{type:a,value:D}]},{type:a,value:" was added to pre-render your pages without triggering a webpack build with the goal to separate the rendering and build process. The only issue was that most Nuxt users weren't able to unleash the full potential of the separation... "},{type:b,tag:E,props:{},children:[{type:a,value:"until now."}]}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{href:ac},children:[{type:a,value:P}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{href:ad},children:[{type:a,value:Q}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{href:ae},children:[{type:a,value:R}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{href:af},children:[{type:a,value:S}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{href:ag},children:[{type:a,value:T}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{href:ah},children:[{type:a,value:U}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{href:ai},children:[{type:a,value:V}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{href:aj},children:[{type:a,value:W}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{href:ak},children:[{type:a,value:X}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{id:al},children:[{type:b,tag:h,props:{href:ad},children:[{type:a,value:Q}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"With v2.14, "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" will "},{type:b,tag:E,props:{},children:[{type:a,value:"automagically skip webpack build step when no code has been changed"}]},{type:a,value:" and use the previous build using cache. This will help to drastically improve static deployments time by avoiding unnecessary builds which is usually the most time-consuming part of generation process. Cache support is "},{type:b,tag:E,props:{},children:[{type:a,value:"platform-agnostic"}]},{type:a,value:" and works on Netlify, Vercel, or any other CI\u002FCD setup that is caching "},{type:b,tag:d,props:{},children:[{type:a,value:F}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:"video-player",props:{":sources":"[{\"src\":\"https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1595852304\u002Fnuxt-smart-generate_pjaat1.webm\",\"type\":\"video\u002Fwebm\"},{\"src\":\"https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1595852304\u002Fnuxt-smart-generate_pjaat1.mp4\",\"type\":\"video\u002Fmp4\"},{\"src\":\"https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1595852304\u002Fnuxt-smart-generate_pjaat1.ogv\",\"type\":\"video\u002Fogg\"}]",poster:"https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1595852304\u002Fnuxt-smart-generate_pjaat1.jpg"},children:[]},{type:a,value:c},{type:b,tag:t,props:{id:am},children:[{type:b,tag:h,props:{href:ae},children:[{type:a,value:R}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"See the comparison in seconds between two "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Build"}]},{type:a,value:" is when a webpack build is required"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cache"}]},{type:a,value:" is only when the content has changed (webpack build skipped)"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"bar-chart-cache-build",props:{},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:"alert",props:{type:"next"},children:[{type:b,tag:i,props:{},children:[{type:a,value:"The static site generation of our projects on content changes are now "},{type:b,tag:E,props:{},children:[{type:a,value:"~3.6x times"}]},{type:a,value:" faster 🚀"}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Project links: "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fpi0\u002Fnuxt-static-demo",rel:[p,q,r],target:s},children:[{type:a,value:"Basic"}]},{type:a,value:an},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fstrapi-module\u002Ftree\u002Fmaster\u002Fdocs",rel:[p,q,r],target:s},children:[{type:a,value:"Strapi Module Docs"}]},{type:a,value:an},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcontent\u002Ftree\u002Fmaster\u002Fdocs",rel:[p,q,r],target:s},children:[{type:a,value:"Content Module Docs"}]},{type:a,value:Y},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org",rel:[p,q,r],target:s},children:[{type:a,value:"Nuxt Docs"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:t,props:{id:ao},children:[{type:b,tag:h,props:{href:af},children:[{type:a,value:S}]}]},{type:a,value:c},{type:b,tag:Z,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Update "},{type:b,tag:d,props:{},children:[{type:a,value:ap}]},{type:a,value:" to the latest minor version, which is v2.14."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"code-group",props:{},children:[{type:b,tag:x,props:{},children:[{type:b,tag:e,props:{className:[G]},children:[{type:a,value:"Yarn"}]},{type:b,tag:y,props:{className:[z,aq]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:e,props:{className:[f,H]},children:[{type:a,value:"yarn"}]},{type:a,value:" upgrade nuxt\n"}]}]}]},{type:b,tag:x,props:{},children:[{type:b,tag:e,props:{className:[G]},children:[{type:a,value:"NPM"}]},{type:b,tag:y,props:{className:[z,aq]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:e,props:{className:[f,H]},children:[{type:a,value:"npm"}]},{type:a,value:" update\n"}]}]}]}]},{type:a,value:c},{type:b,tag:Z,props:{start:m},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Ensure "},{type:b,tag:d,props:{},children:[{type:a,value:"target"}]},{type:a,value:" is "},{type:b,tag:d,props:{},children:[{type:a,value:ar}]},{type:a,value:" inside your "},{type:b,tag:d,props:{},children:[{type:a,value:as}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:b,tag:e,props:{className:[G]},children:[{type:a,value:at}]},{type:b,tag:y,props:{className:[z,_]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:e,props:{className:[f,I,J]},children:[{type:a,value:au}]},{type:a,value:l},{type:b,tag:e,props:{className:[f,I,J]},children:[{type:a,value:av}]},{type:a,value:l},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:K}]},{type:a,value:"\n  target"},{type:b,tag:e,props:{className:[f,B]},children:[{type:a,value:u}]},{type:a,value:l},{type:b,tag:e,props:{className:[f,L]},children:[{type:a,value:"'static'"}]},{type:a,value:aw},{type:b,tag:e,props:{className:[f,ax]},children:[{type:a,value:"\u002F\u002F ..."}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:M}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" will behave as before to avoid breaking changes and provide legacy compatibility if you keep "},{type:b,tag:d,props:{},children:[{type:a,value:"target: ‘server’"}]},{type:a,value:" or don't specify target."}]},{type:a,value:c},{type:b,tag:Z,props:{start:N},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"That’s it 🙌"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Now, the "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" command will build the project only if necessary, which is the case when files inside the project have been changed. It will always re-render your routes to static HTML files, like "},{type:b,tag:d,props:{},children:[{type:a,value:D}]},{type:a,value:" is doing already."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Now you only have to change your build command back from "},{type:b,tag:d,props:{},children:[{type:a,value:"nuxt build && nuxt export"}]},{type:a,value:" to "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" on the platform you are using. If you are using a CI, ensure that you are properly caching "},{type:b,tag:d,props:{},children:[{type:a,value:F}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:$,props:{id:ay},children:[{type:b,tag:h,props:{href:ag},children:[{type:a,value:T}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"By default, nuxt ignores these directories so if any change happens inside them, build will not be triggered:"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Build directory ("},{type:b,tag:d,props:{},children:[{type:a,value:".nuxt\u002F"}]},{type:a,value:v},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Static directory ("},{type:b,tag:d,props:{},children:[{type:a,value:"static\u002F"}]},{type:a,value:v},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Generate dist ("},{type:b,tag:d,props:{},children:[{type:a,value:aa}]},{type:a,value:v},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:F}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"README.md"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Hidden dotfiles (like "},{type:b,tag:d,props:{},children:[{type:a,value:".npmrc"}]},{type:a,value:v},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"You can add more patterns using "},{type:b,tag:h,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#cache"},children:[{type:a,value:"generate.cache.ignore"}]},{type:a,value:" option in "},{type:b,tag:d,props:{},children:[{type:a,value:as}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:b,tag:e,props:{className:[G]},children:[{type:a,value:at}]},{type:b,tag:y,props:{className:[z,_]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:e,props:{className:[f,I,J]},children:[{type:a,value:au}]},{type:a,value:l},{type:b,tag:e,props:{className:[f,I,J]},children:[{type:a,value:av}]},{type:a,value:l},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:K}]},{type:a,value:"\n  generate"},{type:b,tag:e,props:{className:[f,B]},children:[{type:a,value:u}]},{type:a,value:l},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:K}]},{type:a,value:"\n    cache"},{type:b,tag:e,props:{className:[f,B]},children:[{type:a,value:u}]},{type:a,value:l},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:K}]},{type:a,value:"\n      ignore"},{type:b,tag:e,props:{className:[f,B]},children:[{type:a,value:u}]},{type:a,value:l},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:"["}]},{type:a,value:az},{type:b,tag:e,props:{className:[f,ax]},children:[{type:a,value:"\u002F\u002F When something changed in the docs folder, do not re-build via webpack"}]},{type:a,value:az},{type:b,tag:e,props:{className:[f,L]},children:[{type:a,value:"'docs'"}]},{type:a,value:"\n      "},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:"]"}]},{type:a,value:"\n    "},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:M}]},{type:a,value:aw},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:M}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:M}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"It is also possible to use a function for "},{type:b,tag:d,props:{},children:[{type:a,value:aA}]},{type:a,value:" option to override default ignore entries."}]},{type:a,value:c},{type:b,tag:$,props:{id:aB},children:[{type:b,tag:h,props:{href:ah},children:[{type:a,value:U}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"What if you are developing a nuxt module that is working with files that should not trigger a rebuild? The best example is for "},{type:b,tag:h,props:{href:"https:\u002F\u002Fcontent.nuxtjs.org",rel:[p,q,r],target:s},children:[{type:a,value:aC}]},{type:a,value:" module that reads markdown files from the repository. In this case, these files are used within a runtime module, which is the case when using "},{type:b,tag:d,props:{},children:[{type:a,value:aC}]},{type:a,value:", the module itself can tell nuxt to ignore these files for you already so you don't have to do anything! Module authors can use the new "},{type:b,tag:d,props:{},children:[{type:a,value:"generate:cache:ignore"}]},{type:a,value:" hook to do so:"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:b,tag:y,props:{className:[z,_]},children:[{type:b,tag:A,props:{},children:[{type:a,value:ap},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:o}]},{type:b,tag:e,props:{className:[f,aD,H,aE]},children:[{type:a,value:"hook"}]},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:aF}]},{type:b,tag:e,props:{className:[f,L]},children:[{type:a,value:"'generate:cache:ignore'"}]},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:","}]},{type:a,value:l},{type:b,tag:e,props:{className:[f,"parameter"]},children:[{type:a,value:aA}]},{type:a,value:l},{type:b,tag:e,props:{className:[f,"arrow",B]},children:[{type:a,value:"=\u003E"}]},{type:a,value:" ignore"},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:o}]},{type:b,tag:e,props:{className:[f,aD,H,aE]},children:[{type:a,value:"push"}]},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:aF}]},{type:b,tag:e,props:{className:[f,L]},children:[{type:a,value:"'content'"}]},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:v}]},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:v}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:t,props:{id:aG},children:[{type:b,tag:h,props:{href:ai},children:[{type:a,value:V}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"When using the new "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" with "},{type:b,tag:d,props:{},children:[{type:a,value:ar}]},{type:a,value:" target, a snapshot including checksum of non-ignored project files as well as nuxt version and some other configuration will be written "},{type:b,tag:d,props:{},children:[{type:a,value:aH}]},{type:a,value:". In addition, we also move the build directory to "},{type:b,tag:d,props:{},children:[{type:a,value:"node_modules\u002F.cache\u002Fnuxt"}]},{type:a,value:". Because "},{type:b,tag:d,props:{},children:[{type:a,value:F}]},{type:a,value:" is cached by all major platforms (Netlify, Vercel, ...) and common CI\u002FCD scripts, this solution works out of the box without additional configuration."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"When "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" is called subsequently, it will again create a checksum based on your project files and then compare it to the existing one inside "},{type:b,tag:d,props:{},children:[{type:a,value:"node_modules\u002F.cache\u002Fnuxt\u002Fbuild.json"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"If they match, it means that nothing is changed that needs rebuild so we can directly start rendering pages."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"If a mismatch is detected, it means that a full rebuild would be necessary. You can also see what file caused rebuild by checking console logs. After the build, nuxt generate will save the new checksum inside "},{type:b,tag:d,props:{},children:[{type:a,value:aH}]},{type:a,value:". You can check full implementation "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fpull\u002F7712",rel:[p,q,r],target:s},children:[{type:a,value:"here"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:$,props:{id:aI},children:[{type:b,tag:h,props:{href:aj},children:[{type:a,value:W}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"With Nuxt v2.13, we introduced "},{type:b,tag:d,props:{},children:[{type:a,value:D}]},{type:a,value:Y},{type:b,tag:d,props:{},children:[{type:a,value:aJ}]},{type:a,value:" specially designed for the static target. With Nuxt v2.14, they are deprecated as "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:Y},{type:b,tag:d,props:{},children:[{type:a,value:O}]},{type:a,value:" is smart to detect the target and build when necessary."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Server target:"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:aK}]},{type:a,value:aL},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"nuxt build"}]},{type:a,value:" = build your application for production"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:O}]},{type:a,value:" = start the production server (use it for Node.js hosting like Heroku, Digital Ocean, etc)"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Static target:"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:aK}]},{type:a,value:aL},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" = build if needed and statically export to "},{type:b,tag:d,props:{},children:[{type:a,value:aa}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:O}]},{type:a,value:" = serve the "},{type:b,tag:d,props:{},children:[{type:a,value:aa}]},{type:a,value:" directory like your static hosting would do (Netlify, Vercel, Surge, etc), great for testing before deploying"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{id:aM},children:[{type:b,tag:h,props:{href:ak},children:[{type:a,value:X}]}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Upgrade your project to "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Freleases\u002Ftag\u002Fv2.14.0",rel:[p,q,r],target:s},children:[{type:a,value:"nuxt@2.14.0"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:aN},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:aO},{type:b,tag:d,props:{},children:[{type:a,value:D}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:aN},{type:b,tag:d,props:{},children:[{type:a,value:O}]},{type:a,value:aO},{type:b,tag:d,props:{},children:[{type:a,value:aJ}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Enjoy fast deployments 🤙"},{type:a,value:c}]},{type:a,value:c}]}]},toc:{title:aP,searchDepth:m,depth:m,links:[{id:ab,depth:m,text:P},{id:al,depth:m,text:Q},{id:am,depth:m,text:R},{id:ao,depth:m,text:S,children:[{id:ay,depth:N,text:T},{id:aB,depth:N,text:U}]},{id:aG,depth:m,text:V,children:[{id:aI,depth:N,text:W}]},{id:aM,depth:m,text:X}]}}},templateOptions:{header:C,footer:C,aside:w,asideClass:aP,fluid:w,banner:C},_img:{"/_ipx/https://pbs.twimg.com/profile_images/1316077440414998528/mY2rcM7__400x400.jpg?s=32_32":"\u002F_nuxt\u002Fimage\u002F75708f.jpg","/_ipx/https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg?s=32_32":"\u002F_nuxt\u002Fimage\u002Fc24e94.jpg","/_ipx/https://pbs.twimg.com/profile_images/1268227177612541952/9-fujxqt_400x400.jpg?s=32_32":"\u002F_nuxt\u002Fimage\u002Fa02823.jpg","/_ipx/blog/nuxt-static-improvements/main.jpeg":"\u002F_nuxt\u002Fimage\u002Fb07ac2.jpeg","/_ipx/https://res.cloudinary.com/nuxt/video/upload/v1595852304/nuxt-smart-generate_pjaat1.jpg?s=670_377":"\u002F_nuxt\u002Fimage\u002F07f870.jpg"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Découvrir",items:[{title:aQ,subtitle:"Sélection de sites créés avec Nuxt",slug:"showcases",to:aR,icon:"showcases.svg",color:"bg-sand"},{title:"Étude de cas",subtitle:"Comment Nuxt est utilisé par les entreprises",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Témoignages",subtitle:"Ce qu'ils pensent de nous",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Apprendre",items:[{title:"Docs",subtitle:"Créez un site web facilement",slug:"docs",to:aS,icon:"docs.svg",color:"bg-green-500"},{title:aT,subtitle:"Comprendre tout sur Nuxt",slug:"examples",to:aU,icon:"examples.svg",color:"bg-green-600"},{title:aV,subtitle:"Apprenez avec des cas concrets",slug:"tutorials",to:aW,icon:"tutorials.svg",color:"bg-green-700"},{title:aX,subtitle:"Apprenez en plus grâce aux experts",href:aY,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explorer",items:[{title:aZ,subtitle:"Comment déployer Nuxt",slug:"deployments",to:a_,icon:"deployments.svg",color:"bg-indigo-light"},{title:a$,subtitle:"Toute la puissance de Nuxt",href:ba,icon:"modules.svg",color:"bg-indigo"},{title:bb,subtitle:"Commencez avec les thèmes",slug:"themes",to:bc,icon:"themes.svg",color:"bg-indigo-dark"},{title:bd,subtitle:"Apprendre étape par étape",slug:"video-courses",to:be,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Communauté",items:[{title:bf,subtitle:"Les dernières nouvelles concernant Nuxt",slug:"announcements",to:bg,icon:"announcements.svg",color:"bg-mint-lighter"},{title:bh,subtitle:"Nous sommes Nuxt",slug:"teams",to:bi,icon:"teams.svg",color:"bg-mint-light"},{title:bj,subtitle:"Tout le code que nous avons publié",slug:"releases",to:bk,icon:"releases.svg",color:"bg-mint"},{title:bl,subtitle:"Ils croient en nous",slug:"sponsors",to:bm,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partenaires",slug:"partners",to:bn}],footerLinks:[{title:"À propos",items:[{title:"Nous contacter",href:"mailto:hello@nuxtjs.com"},{title:"Support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open source softwares",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partenariat",href:bn},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Écosystème",items:[{title:bf,to:bg},{title:"Contribuer",to:"\u002Fcontribution-guide"},{title:"Discutez avec nous",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Événements",to:"\u002Fevents"},{title:bl,to:bm},{title:bh,to:bi},{title:aV,to:aW},{title:bd,to:be}]},{title:"Ressources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aS},{title:aT,to:aU},{title:aZ,to:a_},{title:aX,href:aY},{title:a$,href:ba},{title:bj,to:bk},{title:aQ,to:aR},{title:bb,to:bc}]}],showCookieBanner:w},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","ProseEm","HomeLearnMaster","SectionContentItem","ProseHr","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl"])},mutations:[]}}("text","element","\n","prose-code-inline","span","token","prose-li","prose-a","prose-paragraph","punctuation","nuxt generate"," ",2,"prose-ul",".","nofollow","noopener","noreferrer","_blank","prose-h2",":",")",false,"prose-code","pre","line-numbers","code","operator",true,"nuxt export","prose-strong","node_modules","filename","function","keyword","module","{","string","}",3,"nuxt start","Introduction","Faster Static Deployments","Generate time: cache vs full webpack build","Using in your projects","Excluding Files from Cache","Module Authors","How it works","Back to old school commands","What to do next"," and ","prose-ol","language-js","prose-h3","dist\u002F","introduction","#introduction","#faster-static-deployments","#generate-time-cache-vs-full-webpack-build","#using-in-your-projects","#excluding-files-from-cache","#module-authors","#how-it-works","#back-to-old-school-commands","#what-to-do-next","faster-static-deployments","generate-time-cache-vs-full-webpack-build",", ","using-in-your-projects","nuxt","language-bash","static","nuxt.config","nuxt.config.js","export","default","\n  ","comment","excluding-files-from-cache","\n        ","ignore","module-authors","@nuxt\u002Fcontent","method","property-access","(","how-it-works",".nuxt\u002Fbuild.json","back-to-old-school-commands","nuxt serve","nuxt dev"," = development server","what-to-do-next","Use "," instead of ","","Showcases","\u002Fshowcases","\u002Fdocs","Exemples","\u002Fexamples","Tutoriels","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Déploiements","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Thèmes","\u002Fthemes","Cours vidéo","\u002Fvideo-courses","Annonces","\u002Fannouncements","Équipes","\u002Fteams","Notes de version","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));