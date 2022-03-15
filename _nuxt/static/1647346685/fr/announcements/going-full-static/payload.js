__NUXT_JSONP__("/fr/announcements/going-full-static", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv){return {data:[{page:{key:"content:fr:announcements:1.going-full-static.md",generatedAt:new Date(1647346768788),mtime:new Date(1647346768753),slug:"going-full-static",title:"Going Full Static",position:"999900010000",to:"\u002Fannouncements\u002Fgoing-full-static",draft:r,page:t,language:"fr",template:"Post",description:"Long awaited features for JAMstack fans has been shipped in v2.13: full static export, improved smart prefetching, integrated crawler, faster re-deploy, built-in web server and new target option for config ⚡️",imgUrl:"blog\u002Fgoing-full-static\u002Fmain.jpeg",imgCredits:"Vincent Ledvina",imgCreditsUrl:"https:\u002F\u002Funsplash.com\u002F@vincentledvina",date:new Date(1592438400000),authors:[{name:"Sebastien Chopin",avatarUrl:"https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1042510623962275840\u002F1Iw_Mvud_400x400.jpg",link:"https:\u002F\u002Ftwitter.com\u002FAtinux"}],tags:["Nuxt","Static","Crawler","Live Preview"],category:"Release",empty:r,excerpt:void 0,body:{raw:"---\ntemplate: post\ntitle: 'Going Full Static'\ndescription: 'Long awaited features for JAMstack fans has been shipped in v2.13: full static export, improved smart prefetching, integrated crawler, faster re-deploy, built-in web server and new target option for config ⚡️'\nimgUrl: blog\u002Fgoing-full-static\u002Fmain.jpeg\nimgCredits: Vincent Ledvina\nimgCreditsUrl: https:\u002F\u002Funsplash.com\u002F@vincentledvina\ndate: 2020-06-18\nauthors:\n  - name: Sebastien Chopin\n    avatarUrl: https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1042510623962275840\u002F1Iw_Mvud_400x400.jpg\n    link: https:\u002F\u002Ftwitter.com\u002FAtinux\ntags:\n  - Nuxt\n  - Static\n  - Crawler\n  - Live Preview\ncategory: Release\n---\n\n## Too long to read\n\n1. Upgrade nuxt to `2.14.0`\n2. Set `target: 'static'` in your `nuxt.config.js`\n3. Run `nuxt generate`\n4. That's it ✨\n\n_Bonus: you can run `nuxt start` to run a local server serving your generated static application._\n\n::video-player\n---\nsources:\n- src: https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1588095794\u002Fnuxt-full-static_rnnbvm.webm\n  type: video\u002Fwebm\n- src: https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1592503417\u002Fnuxt-full-static_rnnbvm.mp4\n  type: video\u002Fmp4\n- src: https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1588095794\u002Fnuxt-full-static_rnnbvm.ogv\n  type: video\u002Fogg\nposter: https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1588095794\u002Fnuxt-full-static_rnnbvm.jpg\n---\n::\n\n\u003Cp\u003E\n\nNote: in this video we are using `nuxt export` which has been deprecated in favor of `nuxt generate`.\n\n\u003C\u002Fp\u003E\n\n## Table of Contents\n\n- [Too long to read](#too-long-to-read)\n- [Table of Contents](#table-of-contents)\n- [History](#history)\n- [Current issues](#current-issues)\n- [New config option: `target`](#new-config-option-target)\n- [Smarter `nuxt generate`](#smarter-nuxt-generate)\n  - [Crazy fast static applications](#crazy-fast-static-applications)\n  - [Crawler integrated](#crawler-integrated)\n  - [Faster re-deploy](#faster-re-deploy)\n- [Smarter `nuxt start`](#smarter-nuxt-start)\n- [Preview mode](#preview-mode)\n- [Commands](#commands)\n  - [What to do next](#what-to-do-next)\n\n## History\n\nNuxt had the static generation feature with `nuxt generate` since [v0.3.2](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Freleases\u002Ftag\u002Fv0.3.2) (November 2016), since then we have improved it in multiple ways but never achieved full static generation. Today I am excited to announce that full static export is now possible with Nuxt 2.13.\n\n## Current issues\n\n`nuxt generate` is mostly pre-rendering, when you navigate client-side, `asyncData` and `fetch` are called, _making a request to your API_. A lot of users asked to support a \"full static\" mode, meaning to not call these 2 hooks on navigation, since the next page has been already pre-rendered.\n\nAlso, the developer experience is not optimal:\n\n- You have access to `req` or `res` on SSR but not when running `nuxt generate`\n- `process.static` is `true` only when running `nuxt generate`, making it slow to develop Nuxt modules or plugins for static generation\n- You have to specify all your [dynamic routes](\u002Fdocs\u002Ffeatures\u002Ffile-system-routing#dynamic-routes) in `generate.routes`, making it harder since you don't have access to nuxt modules there.\n- You cannot test the [SPA fallback](\u002Fdocs\u002Fconcepts\u002Fstatic-site-generation#spa-fallback) in development, the fallback is a client-only version of your Nuxt application that loads when hitting a 404 page\n- `nuxt generate` runs `nuxt build` by default, making it slower to generate your website if only your content changed\n\nNote that it was possible to have full static support with [nuxt-payload-extractor](https:\u002F\u002Fgithub.com\u002FDreaMinder\u002Fnuxt-payload-extractor) module but it was more verbose to use and had limitations.\n\n## New config option: `target`\n\nTo improve the user experience as well as telling Nuxt that you want to export your application to static hosting, we are introducing a `target` option in your `nuxt.config.js`:\n\n```js{}[nuxt.config.js]\nexport default {\n  target: 'static' \u002F\u002F default is 'server'\n}\n```\n\n\u003Cbase-alert type=\"warning\"\u003E\n\nFull static doesn't work with `ssr: 'false'` (which is the same as the deprecated `mode: 'spa'`) as this is used for client-side rendering only (Single Page Applications).\n\n\u003C\u002Fbase-alert\u003E\n\nRunning `nuxt dev` with the static target will improve the developer experience:\n\n- Remove `req` & `res` from context\n- Fallback to client-side rendering on 404, errors and redirects (see [SPA fallback](\u002Fdocs\u002Fconcepts\u002Fstatic-site-generation#spa-fallback))\n- `$route.query` will always be equal to `{}` on server-side rendering\n- `process.static` is `true`\n\nWe are also exposing `process.target` for modules author to add logic depending on the user target.\n\n## Smarter `nuxt generate`\n\nNow with `v2.14.0`, you can use `nuxt generate`, it will smartly know if it has to build or not.\n\n### Crazy fast static applications\n\n`nuxt generate` with `target: 'static'` will pre-render all your pages to HTML and save a payload file in order to mock `asyncData` and `fetch` on client-side navigation, this means **no** **more HTTP calls to your API on client-side navigation.** By extracting the page payload to a js file, **it also reduces the HTML size** served as well as preloading it (from the \u003Clink\u003E in the header) for optimal performance.\n\nWe also improved the [smart prefetching](\u002Fannouncements\u002Fintroducing-smart-prefetching) when doing full static, it will also fetch the payloads, making navigation instant 👀\n\n### Crawler integrated\n\nOn top of that, it also has a crawler inside, detecting every relative link and generating it:\n\nIf you want to exclude a bunch of routes, use the [generate.exclude](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#exclude). You can keep using [generate.routes](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#routes) to add extra routes that the crawler could not detect.\n\nTo disable the crawler, set `generate.crawler: false` in your `nuxt.config.js`\n\n### Faster re-deploy\n\nBy separating `nuxt build` and `nuxt export`, we are opening a new range of improvements: pre-render your pages only if you content has changed, this means: no webpack build → faster re-deployments.\n\n## Smarter `nuxt start`\n\nOnce you statically generated your Nuxt app into `dist\u002F`, use `nuxt start` to start a production HTTP server and serve your static app, supporting [SPA Fallback](\u002Fdocs\u002Fconcepts\u002Fstatic-site-generation#spa-fallback).\n\nThis command is perfect to locally test your static application before pushing to your favorite static hosting provider.\n\n## Preview mode\n\nWe do support live preview out of the box to keep calling your API:\n\n```js{}[plugins\u002Fpreview.client.js]\nexport default async function ({ query, enablePreview }) {\n  if (query.preview) {\n    enablePreview()\n  }\n}\n```\n\nIt will automatically refresh the page data (calling `nuxtServerInit`, `asyncData` and `fetch`).\n\nWhen the preview mode is activated, `asyncData` and `fetch` original methods will be called.\n\n## Commands\n\nDepending of the `target`, you can run these commands.\n\n- `server`\n  - `nuxt dev`: Start the development server\n  - `nuxt build`: Bundle your Nuxt application for production\n  - `nuxt start`: Start the production server\n- `static`\n  - `nuxt dev`: Start the development server (static aware)\n  - `nuxt generate`: Bundle your Nuxt application for production if needed (static aware) and export your application to static HTML in `dist\u002F` directory\n  - `nuxt start`: Serve your production application from `dist\u002F`\n\n### What to do next\n\n::alert{type=\"next\"}\nTo learn more about how to move from @nuxtjs\u002Fdotenv to runtime config check out [this article](\u002Ftutorials\u002Fmoving-from-nuxtjs-dotenv-to-runtime-config).\n::\n\n::alert{type=\"next\"}\n[Subscribe to the newsletter](#subscribe-to-newsletter) to not miss the upcoming articles and resources.\n::\n",ast:{type:"root",children:[{type:b,tag:n,props:{id:W},children:[{type:b,tag:e,props:{href:X},children:[{type:a,value:H}]}]},{type:a,value:c},{type:b,tag:"prose-ol",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"Upgrade nuxt to "},{type:b,tag:d,props:{},children:[{type:a,value:"2.14.0"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"Set "},{type:b,tag:d,props:{},children:[{type:a,value:Y}]},{type:a,value:Z},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"Run "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"That's it ✨"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:_,props:{},children:[{type:a,value:"Bonus: you can run "},{type:b,tag:d,props:{},children:[{type:a,value:q}]},{type:a,value:" to run a local server serving your generated static application."}]}]},{type:a,value:c},{type:b,tag:"video-player",props:{":sources":"[{\"src\":\"https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1588095794\u002Fnuxt-full-static_rnnbvm.webm\",\"type\":\"video\u002Fwebm\"},{\"src\":\"https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1592503417\u002Fnuxt-full-static_rnnbvm.mp4\",\"type\":\"video\u002Fmp4\"},{\"src\":\"https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1588095794\u002Fnuxt-full-static_rnnbvm.ogv\",\"type\":\"video\u002Fogg\"}]",poster:"https:\u002F\u002Fres.cloudinary.com\u002Fnuxt\u002Fvideo\u002Fupload\u002Fv1588095794\u002Fnuxt-full-static_rnnbvm.jpg"},children:[]},{type:a,value:c},{type:b,tag:"p",props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Note: in this video we are using "},{type:b,tag:d,props:{},children:[{type:a,value:$}]},{type:a,value:" which has been deprecated in favor of "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:v}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:aa},children:[{type:b,tag:e,props:{href:ab},children:[{type:a,value:I}]}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{href:X},children:[{type:a,value:H}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{href:ab},children:[{type:a,value:I}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{href:ac},children:[{type:a,value:J}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{href:ad},children:[{type:a,value:K}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{href:ae},children:[{type:a,value:af},{type:b,tag:d,props:{},children:[{type:a,value:w}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{href:ag},children:[{type:a,value:x},{type:b,tag:d,props:{},children:[{type:a,value:k}]}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{href:ah},children:[{type:a,value:L}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{href:ai},children:[{type:a,value:M}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{href:aj},children:[{type:a,value:N}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{href:ak},children:[{type:a,value:x},{type:b,tag:d,props:{},children:[{type:a,value:q}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{href:al},children:[{type:a,value:O}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{href:am},children:[{type:a,value:P}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{href:an},children:[{type:a,value:Q}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:ao},children:[{type:b,tag:e,props:{href:ac},children:[{type:a,value:J}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Nuxt had the static generation feature with "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" since "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Freleases\u002Ftag\u002Fv0.3.2",rel:[ap,aq,ar],target:as},children:[{type:a,value:"v0.3.2"}]},{type:a,value:" (November 2016), since then we have improved it in multiple ways but never achieved full static generation. Today I am excited to announce that full static export is now possible with Nuxt 2.13."}]},{type:a,value:c},{type:b,tag:n,props:{id:at},children:[{type:b,tag:e,props:{href:ad},children:[{type:a,value:K}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" is mostly pre-rendering, when you navigate client-side, "},{type:b,tag:d,props:{},children:[{type:a,value:y}]},{type:a,value:s},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:" are called, "},{type:b,tag:_,props:{},children:[{type:a,value:"making a request to your API"}]},{type:a,value:". A lot of users asked to support a \"full static\" mode, meaning to not call these 2 hooks on navigation, since the next page has been already pre-rendered."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Also, the developer experience is not optimal:"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"You have access to "},{type:b,tag:d,props:{},children:[{type:a,value:au}]},{type:a,value:" or "},{type:b,tag:d,props:{},children:[{type:a,value:av}]},{type:a,value:" on SSR but not when running "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:aw}]},{type:a,value:ax},{type:b,tag:d,props:{},children:[{type:a,value:ay}]},{type:a,value:" only when running "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:", making it slow to develop Nuxt modules or plugins for static generation"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"You have to specify all your "},{type:b,tag:e,props:{href:"\u002Fdocs\u002Ffeatures\u002Ffile-system-routing#dynamic-routes"},children:[{type:a,value:"dynamic routes"}]},{type:a,value:" in "},{type:b,tag:d,props:{},children:[{type:a,value:az}]},{type:a,value:", making it harder since you don't have access to nuxt modules there."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"You cannot test the "},{type:b,tag:e,props:{href:R},children:[{type:a,value:aA}]},{type:a,value:" in development, the fallback is a client-only version of your Nuxt application that loads when hitting a 404 page"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" runs "},{type:b,tag:d,props:{},children:[{type:a,value:S}]},{type:a,value:" by default, making it slower to generate your website if only your content changed"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Note that it was possible to have full static support with "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002FDreaMinder\u002Fnuxt-payload-extractor",rel:[ap,aq,ar],target:as},children:[{type:a,value:"nuxt-payload-extractor"}]},{type:a,value:" module but it was more verbose to use and had limitations."}]},{type:a,value:c},{type:b,tag:n,props:{id:aB},children:[{type:b,tag:e,props:{href:ae},children:[{type:a,value:af},{type:b,tag:d,props:{},children:[{type:a,value:w}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"To improve the user experience as well as telling Nuxt that you want to export your application to static hosting, we are introducing a "},{type:b,tag:d,props:{},children:[{type:a,value:w}]},{type:a,value:" option in your "},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:aC}]},{type:a,value:c},{type:b,tag:aD,props:{},children:[{type:b,tag:g,props:{className:[aE]},children:[{type:a,value:u}]},{type:b,tag:aF,props:{className:[aG,aH]},children:[{type:b,tag:aI,props:{},children:[{type:b,tag:g,props:{className:[h,p,A]},children:[{type:a,value:aJ}]},{type:a,value:l},{type:b,tag:g,props:{className:[h,p,A]},children:[{type:a,value:aK}]},{type:a,value:l},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:B}]},{type:a,value:"\n  target"},{type:b,tag:g,props:{className:[h,"operator"]},children:[{type:a,value:aC}]},{type:a,value:l},{type:b,tag:g,props:{className:[h,"string"]},children:[{type:a,value:"'static'"}]},{type:a,value:l},{type:b,tag:g,props:{className:[h,"comment"]},children:[{type:a,value:"\u002F\u002F default is 'server'"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:C}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:"base-alert",props:{type:"warning"},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Full static doesn't work with "},{type:b,tag:d,props:{},children:[{type:a,value:"ssr: 'false'"}]},{type:a,value:" (which is the same as the deprecated "},{type:b,tag:d,props:{},children:[{type:a,value:"mode: 'spa'"}]},{type:a,value:") as this is used for client-side rendering only (Single Page Applications)."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Running "},{type:b,tag:d,props:{},children:[{type:a,value:T}]},{type:a,value:" with the static target will improve the developer experience:"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"Remove "},{type:b,tag:d,props:{},children:[{type:a,value:au}]},{type:a,value:" & "},{type:b,tag:d,props:{},children:[{type:a,value:av}]},{type:a,value:" from context"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:a,value:"Fallback to client-side rendering on 404, errors and redirects (see "},{type:b,tag:e,props:{href:R},children:[{type:a,value:aA}]},{type:a,value:D},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"$route.query"}]},{type:a,value:" will always be equal to "},{type:b,tag:d,props:{},children:[{type:a,value:"{}"}]},{type:a,value:" on server-side rendering"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:aw}]},{type:a,value:ax},{type:b,tag:d,props:{},children:[{type:a,value:ay}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"We are also exposing "},{type:b,tag:d,props:{},children:[{type:a,value:"process.target"}]},{type:a,value:" for modules author to add logic depending on the user target."}]},{type:a,value:c},{type:b,tag:n,props:{id:aL},children:[{type:b,tag:e,props:{href:ag},children:[{type:a,value:x},{type:b,tag:d,props:{},children:[{type:a,value:k}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Now with "},{type:b,tag:d,props:{},children:[{type:a,value:"v2.14.0"}]},{type:a,value:", you can use "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:", it will smartly know if it has to build or not."}]},{type:a,value:c},{type:b,tag:E,props:{id:aM},children:[{type:b,tag:e,props:{href:ah},children:[{type:a,value:L}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" with "},{type:b,tag:d,props:{},children:[{type:a,value:Y}]},{type:a,value:" will pre-render all your pages to HTML and save a payload file in order to mock "},{type:b,tag:d,props:{},children:[{type:a,value:y}]},{type:a,value:s},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:" on client-side navigation, this means "},{type:b,tag:F,props:{},children:[{type:a,value:"no"}]},{type:a,value:l},{type:b,tag:F,props:{},children:[{type:a,value:"more HTTP calls to your API on client-side navigation."}]},{type:a,value:" By extracting the page payload to a js file, "},{type:b,tag:F,props:{},children:[{type:a,value:"it also reduces the HTML size"}]},{type:a,value:" served as well as preloading it (from the "},{type:b,tag:"link",props:{},children:[]},{type:a,value:" in the header) for optimal performance."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"We also improved the "},{type:b,tag:e,props:{href:"\u002Fannouncements\u002Fintroducing-smart-prefetching"},children:[{type:a,value:"smart prefetching"}]},{type:a,value:" when doing full static, it will also fetch the payloads, making navigation instant 👀"}]},{type:a,value:c},{type:b,tag:E,props:{id:aN},children:[{type:b,tag:e,props:{href:ai},children:[{type:a,value:M}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"On top of that, it also has a crawler inside, detecting every relative link and generating it:"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"If you want to exclude a bunch of routes, use the "},{type:b,tag:e,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#exclude"},children:[{type:a,value:"generate.exclude"}]},{type:a,value:". You can keep using "},{type:b,tag:e,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#routes"},children:[{type:a,value:az}]},{type:a,value:" to add extra routes that the crawler could not detect."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"To disable the crawler, set "},{type:b,tag:d,props:{},children:[{type:a,value:"generate.crawler: false"}]},{type:a,value:Z},{type:b,tag:d,props:{},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:E,props:{id:aO},children:[{type:b,tag:e,props:{href:aj},children:[{type:a,value:N}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"By separating "},{type:b,tag:d,props:{},children:[{type:a,value:S}]},{type:a,value:s},{type:b,tag:d,props:{},children:[{type:a,value:$}]},{type:a,value:", we are opening a new range of improvements: pre-render your pages only if you content has changed, this means: no webpack build → faster re-deployments."}]},{type:a,value:c},{type:b,tag:n,props:{id:aP},children:[{type:b,tag:e,props:{href:ak},children:[{type:a,value:x},{type:b,tag:d,props:{},children:[{type:a,value:q}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Once you statically generated your Nuxt app into "},{type:b,tag:d,props:{},children:[{type:a,value:U}]},{type:a,value:", use "},{type:b,tag:d,props:{},children:[{type:a,value:q}]},{type:a,value:" to start a production HTTP server and serve your static app, supporting "},{type:b,tag:e,props:{href:R},children:[{type:a,value:"SPA Fallback"}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"This command is perfect to locally test your static application before pushing to your favorite static hosting provider."}]},{type:a,value:c},{type:b,tag:n,props:{id:aQ},children:[{type:b,tag:e,props:{href:al},children:[{type:a,value:O}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"We do support live preview out of the box to keep calling your API:"}]},{type:a,value:c},{type:b,tag:aD,props:{},children:[{type:b,tag:g,props:{className:[aE]},children:[{type:a,value:"plugins\u002Fpreview.client.js"}]},{type:b,tag:aF,props:{className:[aG,aH]},children:[{type:b,tag:aI,props:{},children:[{type:b,tag:g,props:{className:[h,p,A]},children:[{type:a,value:aJ}]},{type:a,value:l},{type:b,tag:g,props:{className:[h,p,A]},children:[{type:a,value:aK}]},{type:a,value:l},{type:b,tag:g,props:{className:[h,p]},children:[{type:a,value:"async"}]},{type:a,value:l},{type:b,tag:g,props:{className:[h,p]},children:[{type:a,value:aR}]},{type:a,value:l},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:V}]},{type:b,tag:g,props:{className:[h,"parameter"]},children:[{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:B}]},{type:a,value:" query"},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:","}]},{type:a,value:" enablePreview "},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:C}]}]},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:D}]},{type:a,value:l},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:B}]},{type:a,value:aS},{type:b,tag:g,props:{className:[h,p,"control-flow"]},children:[{type:a,value:"if"}]},{type:a,value:l},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:V}]},{type:a,value:"query"},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:v}]},{type:b,tag:g,props:{className:[h,"property-access"]},children:[{type:a,value:"preview"}]},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:D}]},{type:a,value:l},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:B}]},{type:a,value:"\n    "},{type:b,tag:g,props:{className:[h,aR]},children:[{type:a,value:"enablePreview"}]},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:V}]},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:D}]},{type:a,value:aS},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:C}]},{type:a,value:c},{type:b,tag:g,props:{className:[h,j]},children:[{type:a,value:C}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"It will automatically refresh the page data (calling "},{type:b,tag:d,props:{},children:[{type:a,value:"nuxtServerInit"}]},{type:a,value:", "},{type:b,tag:d,props:{},children:[{type:a,value:y}]},{type:a,value:s},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:")."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"When the preview mode is activated, "},{type:b,tag:d,props:{},children:[{type:a,value:y}]},{type:a,value:s},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:" original methods will be called."}]},{type:a,value:c},{type:b,tag:n,props:{id:aT},children:[{type:b,tag:e,props:{href:am},children:[{type:a,value:P}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Depending of the "},{type:b,tag:d,props:{},children:[{type:a,value:w}]},{type:a,value:", you can run these commands."}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"server"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:T}]},{type:a,value:": Start the development server"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:S}]},{type:a,value:": Bundle your Nuxt application for production"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:q}]},{type:a,value:": Start the production server"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"static"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:T}]},{type:a,value:": Start the development server (static aware)"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:": Bundle your Nuxt application for production if needed (static aware) and export your application to static HTML in "},{type:b,tag:d,props:{},children:[{type:a,value:U}]},{type:a,value:" directory"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:q}]},{type:a,value:": Serve your production application from "},{type:b,tag:d,props:{},children:[{type:a,value:U}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:E,props:{id:aU},children:[{type:b,tag:e,props:{href:an},children:[{type:a,value:Q}]}]},{type:a,value:c},{type:b,tag:aV,props:{type:aW},children:[{type:b,tag:i,props:{},children:[{type:a,value:"To learn more about how to move from "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxtjs\u002Fdotenv"},children:[{type:b,tag:F,props:{},children:[{type:a,value:"@nuxtjs\u002Fdotenv"}]}]},{type:a,value:" to runtime config check out "},{type:b,tag:e,props:{href:"\u002Ftutorials\u002Fmoving-from-nuxtjs-dotenv-to-runtime-config"},children:[{type:a,value:"this article"}]},{type:a,value:v}]}]},{type:a,value:c},{type:b,tag:aV,props:{type:aW},children:[{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{href:"#subscribe-to-newsletter"},children:[{type:a,value:"Subscribe to the newsletter"}]},{type:a,value:" to not miss the upcoming articles and resources."}]}]}]},toc:{title:aX,searchDepth:m,depth:m,links:[{id:W,depth:m,text:H},{id:aa,depth:m,text:I},{id:ao,depth:m,text:J},{id:at,depth:m,text:K},{id:aB,depth:m,text:"New config option: target"},{id:aL,depth:m,text:"Smarter nuxt generate",children:[{id:aM,depth:G,text:L},{id:aN,depth:G,text:M},{id:aO,depth:G,text:N}]},{id:aP,depth:m,text:"Smarter nuxt start"},{id:aQ,depth:m,text:O},{id:aT,depth:m,text:P,children:[{id:aU,depth:G,text:Q}]}]}}},templateOptions:{header:t,footer:t,aside:r,asideClass:aX,fluid:r,banner:t},_img:{"/_ipx/https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg?s=32_32":"\u002F_nuxt\u002Fimage\u002Fc24e94.jpg","/_ipx/blog/going-full-static/main.jpeg":"\u002F_nuxt\u002Fimage\u002F1811c6.jpeg","/_ipx/https://res.cloudinary.com/nuxt/video/upload/v1588095794/nuxt-full-static_rnnbvm.jpg?s=670_377":"\u002F_nuxt\u002Fimage\u002F575f56.jpg"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Découvrir",items:[{title:aY,subtitle:"Sélection de sites créés avec Nuxt",slug:"showcases",to:aZ,icon:"showcases.svg",color:"bg-sand"},{title:"Étude de cas",subtitle:"Comment Nuxt est utilisé par les entreprises",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Témoignages",subtitle:"Ce qu'ils pensent de nous",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Apprendre",items:[{title:"Docs",subtitle:"Créez un site web facilement",slug:"docs",to:a_,icon:"docs.svg",color:"bg-green-500"},{title:a$,subtitle:"Comprendre tout sur Nuxt",slug:"examples",to:ba,icon:"examples.svg",color:"bg-green-600"},{title:bb,subtitle:"Apprenez avec des cas concrets",slug:"tutorials",to:bc,icon:"tutorials.svg",color:"bg-green-700"},{title:bd,subtitle:"Apprenez en plus grâce aux experts",href:be,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explorer",items:[{title:bf,subtitle:"Comment déployer Nuxt",slug:"deployments",to:bg,icon:"deployments.svg",color:"bg-indigo-light"},{title:bh,subtitle:"Toute la puissance de Nuxt",href:bi,icon:"modules.svg",color:"bg-indigo"},{title:bj,subtitle:"Commencez avec les thèmes",slug:"themes",to:bk,icon:"themes.svg",color:"bg-indigo-dark"},{title:bl,subtitle:"Apprendre étape par étape",slug:"video-courses",to:bm,icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Communauté",items:[{title:bn,subtitle:"Les dernières nouvelles concernant Nuxt",slug:"announcements",to:bo,icon:"announcements.svg",color:"bg-mint-lighter"},{title:bp,subtitle:"Nous sommes Nuxt",slug:"teams",to:bq,icon:"teams.svg",color:"bg-mint-light"},{title:br,subtitle:"Tout le code que nous avons publié",slug:"releases",to:bs,icon:"releases.svg",color:"bg-mint"},{title:bt,subtitle:"Ils croient en nous",slug:"sponsors",to:bu,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partenaires",slug:"partners",to:bv}],footerLinks:[{title:"À propos",items:[{title:"Nous contacter",href:"mailto:hello@nuxtjs.com"},{title:"Support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open source softwares",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partenariat",href:bv},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Écosystème",items:[{title:bn,to:bo},{title:"Contribuer",to:"\u002Fcontribution-guide"},{title:"Discutez avec nous",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Événements",to:"\u002Fevents"},{title:bt,to:bu},{title:bp,to:bq},{title:bb,to:bc},{title:bl,to:bm}]},{title:"Ressources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:a_},{title:a$,to:ba},{title:bf,to:bg},{title:bd,href:be},{title:bh,href:bi},{title:br,to:bs},{title:aY,to:aZ},{title:bj,to:bk}]}],showCookieBanner:r},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","ProseEm","HomeLearnMaster","SectionContentItem","ProseHr","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity","Testimonials","HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link"])},mutations:[]}}("text","element","\n","prose-code-inline","prose-a","prose-li","span","token","prose-paragraph","punctuation","nuxt generate"," ",2,"prose-h2","prose-ul","keyword","nuxt start",false," and ",true,"nuxt.config.js",".","target","Smarter ","asyncData","fetch","module","{","}",")","prose-h3","prose-strong",3,"Too long to read","Table of Contents","History","Current issues","Crazy fast static applications","Crawler integrated","Faster re-deploy","Preview mode","Commands","What to do next","\u002Fdocs\u002Fconcepts\u002Fstatic-site-generation#spa-fallback","nuxt build","nuxt dev","dist\u002F","(","too-long-to-read","#too-long-to-read","target: 'static'"," in your ","prose-em","nuxt export","table-of-contents","#table-of-contents","#history","#current-issues","#new-config-option-target","New config option: ","#smarter-nuxt-generate","#crazy-fast-static-applications","#crawler-integrated","#faster-re-deploy","#smarter-nuxt-start","#preview-mode","#commands","#what-to-do-next","history","nofollow","noopener","noreferrer","_blank","current-issues","req","res","process.static"," is ","true","generate.routes","SPA fallback","new-config-option-target",":","prose-code","filename","pre","language-js","line-numbers","code","export","default","smarter-nuxt-generate","crazy-fast-static-applications","crawler-integrated","faster-re-deploy","smarter-nuxt-start","preview-mode","function","\n  ","commands","what-to-do-next","alert","next","","Showcases","\u002Fshowcases","\u002Fdocs","Exemples","\u002Fexamples","Tutoriels","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Déploiements","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Thèmes","\u002Fthemes","Cours vidéo","\u002Fvideo-courses","Annonces","\u002Fannouncements","Équipes","\u002Fteams","Notes de version","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));