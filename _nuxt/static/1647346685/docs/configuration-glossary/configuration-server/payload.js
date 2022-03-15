__NUXT_JSONP__("/docs/configuration-glossary/configuration-server", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl){return {data:[{page:{key:"content:en:docs:5.configuration-glossary:27.configuration-server.md",generatedAt:new Date(1647347007325),mtime:new Date(1647347007312),slug:"configuration-server",title:"The server Property",position:"999900050027",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-server",draft:K,page:G,language:"en",navigation:{title:W},description:"Nuxt let you define the server connection variables for your application inside nuxt.config.js.",menu:W,category:"configuration-glossary",empty:K,excerpt:void 0,body:{raw:"---\ntitle: The server Property\nnavigation.title: server\ndescription: Nuxt let you define the server connection variables for your application inside nuxt.config.js.\nmenu: server\ncategory: configuration-glossary\n---\n# The server property\n\nNuxt let you define the server connection variables for your application inside `nuxt.config.js`.\n\n---\n\n- Type: `Object`\n\n## Basic example:\n\n```js{}[nuxt.config.js]\nexport default {\n  server: {\n    port: 8000, \u002F\u002F default: 3000\n    host: '0.0.0.0', \u002F\u002F default: localhost,\n    timing: false\n  }\n}\n```\n\nThis lets you specify the [host and port](\u002Fdocs\u002Ffeatures\u002Fconfiguration#edit-host-and-port) for your Nuxt server instance.\n\n## Example using HTTPS configuration\n\n```js{}[nuxt.config.js]\nimport path from 'path'\nimport fs from 'fs'\n\nexport default {\n  server: {\n    https: {\n      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),\n      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))\n    }\n  }\n}\n```\n\nYou can find additional information on creating server keys and certificates on `localhost` on [certificates for localhost](https:\u002F\u002Fletsencrypt.org\u002Fdocs\u002Fcertificates-for-localhost\u002F) article.\n\n## Example using sockets configuration\n\n```js{}[nuxt.config.js]\nexport default {\n  server: {\n    socket: '\u002Ftmp\u002Fnuxt.socket'\n  }\n}\n```\n\n## timing\n\n- Type: `Object` or `Boolean`\n- Default: `false`\n\nEnabling the `server.timing` option adds a middleware to measure the time elapsed during server-side rendering and adds it to the headers as 'Server-Timing'\n\n### Example using timing configuration\n\n`server.timing` can be an object for providing options. Currently, only `total` is supported (which directly tracks the whole time spent on server-side rendering)\n\n```js{}[nuxt.config.js]\nexport default {\n  server: {\n    timing: {\n      total: true\n    }\n  }\n}\n```\n\n### Using timing API\n\nThe `timing` API is also injected into the `response` on server-side when `server.time` is enabled.\n\n#### Syntax\n\n```js\nres.timing.start(name, description)\nres.timing.end(name)\n```\n\n#### Example using timing in serverMiddleware\n\n```js\nexport default function (req, res, next) {\n  res.timing.start('midd', 'Middleware timing description')\n  \u002F\u002F server side operation..\n  \u002F\u002F ...\n  res.timing.end('midd')\n  next()\n}\n```\n\nThen `server-timing` head will be included in response header like:\n\n```bash\nServer-Timing: midd;desc=\"Middleware timing description\";dur=2.4\n```\n\nPlease refer to [Server-Timing MDN](https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FHeaders\u002FServer-Timing) for more details.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-server-property"},children:[{type:a,value:"The server property"}]},{type:a,value:f},{type:b,tag:x,props:{class:"d-heading-description"},children:[{type:a,value:"Nuxt let you define the server connection variables for your application inside "},{type:b,tag:k,props:{},children:[{type:a,value:H}]},{type:a,value:l}]},{type:a,value:f},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:f},{type:b,tag:X,props:{},children:[{type:a,value:f},{type:b,tag:R,props:{},children:[{type:a,value:f},{type:a,value:Y},{type:b,tag:k,props:{},children:[{type:a,value:Z}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:L,props:{id:_},children:[{type:b,tag:o,props:{href:"#basic-example"},children:[{type:a,value:$}]}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[M]},children:[{type:a,value:H}]},{type:b,tag:A,props:{className:[B,E]},children:[{type:b,tag:C,props:{},children:[{type:b,tag:c,props:{className:[d,h,j]},children:[{type:a,value:I}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,j]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n    port"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:"8000"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"\u002F\u002F default: 3000"}]},{type:a,value:"\n    host"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"'0.0.0.0'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"\u002F\u002F default: localhost,"}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:ad}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"This lets you specify the "},{type:b,tag:o,props:{href:"\u002Fdocs\u002Ffeatures\u002Fconfiguration#edit-host-and-port"},children:[{type:a,value:"host and port"}]},{type:a,value:" for your Nuxt server instance."}]},{type:a,value:f},{type:b,tag:L,props:{id:ae},children:[{type:b,tag:o,props:{href:"#example-using-https-configuration"},children:[{type:a,value:af}]}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[M]},children:[{type:a,value:H}]},{type:b,tag:A,props:{className:[B,E]},children:[{type:b,tag:C,props:{},children:[{type:b,tag:c,props:{className:[d,h,j]},children:[{type:a,value:ag}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,j]},children:[{type:a,value:ai}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"'path'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,j]},children:[{type:a,value:ag}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:"fs"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,j]},children:[{type:a,value:ai}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"'fs'"}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,h,j]},children:[{type:a,value:I}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,j]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n    https"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n      key"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,y,s,n]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,y,s,n]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"'server.key'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:"\n      cert"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,y,s,n]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,y,s,n]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"'server.crt'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"You can find additional information on creating server keys and certificates on "},{type:b,tag:k,props:{},children:[{type:a,value:"localhost"}]},{type:a,value:" on "},{type:b,tag:o,props:{href:"https:\u002F\u002Fletsencrypt.org\u002Fdocs\u002Fcertificates-for-localhost\u002F",rel:[ao,ap,aq],target:ar},children:[{type:a,value:"certificates for localhost"}]},{type:a,value:" article."}]},{type:a,value:f},{type:b,tag:L,props:{id:as},children:[{type:b,tag:o,props:{href:"#example-using-sockets-configuration"},children:[{type:a,value:at}]}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[M]},children:[{type:a,value:H}]},{type:b,tag:A,props:{className:[B,E]},children:[{type:b,tag:C,props:{},children:[{type:b,tag:c,props:{className:[d,h,j]},children:[{type:a,value:I}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,j]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n    socket"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"'\u002Ftmp\u002Fnuxt.socket'"}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:L,props:{id:w},children:[{type:b,tag:o,props:{href:"#timing"},children:[{type:a,value:w}]}]},{type:a,value:f},{type:b,tag:X,props:{},children:[{type:a,value:f},{type:b,tag:R,props:{},children:[{type:a,value:f},{type:a,value:Y},{type:b,tag:k,props:{},children:[{type:a,value:Z}]},{type:a,value:" or "},{type:b,tag:k,props:{},children:[{type:a,value:"Boolean"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:R,props:{},children:[{type:a,value:f},{type:a,value:"Default: "},{type:b,tag:k,props:{},children:[{type:a,value:ad}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"Enabling the "},{type:b,tag:k,props:{},children:[{type:a,value:au}]},{type:a,value:" option adds a middleware to measure the time elapsed during server-side rendering and adds it to the headers as 'Server-Timing'"}]},{type:a,value:f},{type:b,tag:av,props:{id:aw},children:[{type:b,tag:o,props:{href:"#example-using-timing-configuration"},children:[{type:a,value:ax}]}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:au}]},{type:a,value:" can be an object for providing options. Currently, only "},{type:b,tag:k,props:{},children:[{type:a,value:"total"}]},{type:a,value:" is supported (which directly tracks the whole time spent on server-side rendering)"}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[M]},children:[{type:a,value:H}]},{type:b,tag:A,props:{className:[B,E]},children:[{type:b,tag:C,props:{},children:[{type:b,tag:c,props:{className:[d,h,j]},children:[{type:a,value:I}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,j]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n      total"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:"true"}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:av,props:{id:ay},children:[{type:b,tag:o,props:{href:"#using-timing-api"},children:[{type:a,value:az}]}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"The "},{type:b,tag:k,props:{},children:[{type:a,value:w}]},{type:a,value:" API is also injected into the "},{type:b,tag:k,props:{},children:[{type:a,value:"response"}]},{type:a,value:" on server-side when "},{type:b,tag:k,props:{},children:[{type:a,value:"server.time"}]},{type:a,value:" is enabled."}]},{type:a,value:f},{type:b,tag:aA,props:{id:"syntax"},children:[{type:b,tag:o,props:{href:"#syntax"},children:[{type:a,value:"Syntax"}]}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:b,tag:A,props:{className:[B,E]},children:[{type:b,tag:C,props:{},children:[{type:a,value:"res"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,y,s,n]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:" description"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"\nres"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,y,s,n]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:aA,props:{id:"example-using-timing-in-servermiddleware"},children:[{type:b,tag:o,props:{href:"#example-using-timing-in-servermiddleware"},children:[{type:a,value:"Example using timing in serverMiddleware"}]}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:b,tag:A,props:{className:[B,E]},children:[{type:b,tag:C,props:{},children:[{type:b,tag:c,props:{className:[d,h,j]},children:[{type:a,value:I}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h,j]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"req"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:" res"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:" next"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,y,s,n]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"'Middleware timing description'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"\u002F\u002F server side operation.."}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"\u002F\u002F ..."}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,y,s,n]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"next"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"Then "},{type:b,tag:k,props:{},children:[{type:a,value:"server-timing"}]},{type:a,value:" head will be included in response header like:"}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:b,tag:A,props:{className:[B,"language-bash"]},children:[{type:b,tag:C,props:{},children:[{type:a,value:"Server-Timing: midd"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,aH,aI]},children:[{type:a,value:"desc"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"\"Middleware timing description\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,aH,aI]},children:[{type:a,value:"dur"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:"2.4"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"Please refer to "},{type:b,tag:o,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FHeaders\u002FServer-Timing",rel:[ao,ap,aq],target:ar},children:[{type:a,value:"Server-Timing MDN"}]},{type:a,value:" for more details."}]}]},toc:{title:aK,searchDepth:F,depth:F,links:[{id:_,depth:F,text:$},{id:ae,depth:F,text:af},{id:as,depth:F,text:at},{id:w,depth:F,text:w,children:[{id:aw,depth:aL,text:ax},{id:ay,depth:aL,text:az}]}]}},template:aM},templateOptions:{header:G,footer:G,aside:G,asideClass:aK,fluid:K,banner:G},_img:{"/_ipx/https://github.com/nazarepiedady.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd5c785.png","/_ipx/https://github.com/eltociear.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0a4949.png","/_ipx/https://github.com/azizurrahmaan.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F879caa.png","/_ipx/https://github.com/clemcode.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F77339c.png","/_ipx/https://github.com/Ayouli.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa827f5.png","/_ipx/https://github.com/fhinkel.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F26e625.png","/_ipx/https://github.com/felipesuri.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa2c3fe.png","/_ipx/https://github.com/smarroufin.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc9abac.png","/_ipx/https://github.com/ChristopheCVB.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbe1aa1.png","/_ipx/https://github.com/literakl.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F496416.png","/_ipx/https://github.com/trizotti.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fff04b5.png","/_ipx/https://github.com/Atinux.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe847b9.png","/_ipx/https://github.com/pilotkid.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F48fe7a.png","/_ipx/https://github.com/blupdew.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Ff00d82.png","/_ipx/https://github.com/DeveloperThomas.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F01e0e4.png","/_ipx/https://github.com/shekeg.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0bf9bc.png","/_ipx/https://github.com/LukaszFormela.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F61a24f.png","/_ipx/https://github.com/HZooly.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0de44d.png","/_ipx/https://github.com/KareemDa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc79dfa.png","/_ipx/https://github.com/vencho-mdp.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe17244.png","/_ipx/https://github.com/danielroe.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0786f3.png","/_ipx/https://github.com/rannien.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe08048.png","/_ipx/https://github.com/mercs600.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd7cb9b.png","/_ipx/https://github.com/iamnbutler.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0219e9.png","/_ipx/https://github.com/SandraRodgers.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F87a47f.png","/_ipx/https://github.com/iamarpitpatidar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fc302c1.png","/_ipx/https://github.com/mkuehn.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fb2c5d4.png","/_ipx/https://github.com/duboiss.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd9412d.png","/_ipx/https://github.com/jtlindsey.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F7eb268.png","/_ipx/https://github.com/syagawa.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F42da1b.png","/_ipx/https://github.com/Mxime.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fbdcb89.png","/_ipx/https://github.com/karuhi.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F45bedd.png","/_ipx/https://github.com/alpower.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F483f8e.png","/_ipx/https://github.com/Flosciante.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fa088da.png","/_ipx/https://github.com/quanghm27.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F44d54c.png","/_ipx/https://github.com/MrJmpl3.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3e840f.png","/_ipx/https://github.com/owlnai.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0340f1.png","/_ipx/https://github.com/kazupon.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fd6247a.png","/_ipx/https://github.com/mtlynch.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F525213.png","/_ipx/https://github.com/book000.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F3838a1.png","/_ipx/https://github.com/pi0.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F368a8d.png","/_ipx/https://github.com/meirroth.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe09bc9.png","/_ipx/https://github.com/Brettanda.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F25f97d.png","/_ipx/https://github.com/armgitaar.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F0c63ae.png","/_ipx/https://github.com/thomasbnt.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F9f568f.png","/_ipx/https://github.com/karur4n.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002F8dcce9.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:aN,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:aO,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:aP,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:aM,subtitle:"Create fast websites easily",slug:"docs",to:aQ,icon:"docs.svg",color:"bg-green-500"},{title:aR,subtitle:"Understand everything in Nuxt",slug:"examples",to:aS,icon:"examples.svg",color:"bg-green-600"},{title:aT,subtitle:"Learn with concrete cases",slug:"tutorials",to:aU,icon:"tutorials.svg",color:"bg-green-700"},{title:P,subtitle:T,href:Q,icon:U,color:V}]},{title:"Explore",items:[{title:aV,subtitle:"How to Deploy Nuxt",slug:"deployments",to:aW,icon:"deployments.svg",color:"bg-indigo-light"},{title:aX,subtitle:"Extend the power of Nuxt",href:aY,icon:"modules.svg",color:"bg-indigo"},{title:aZ,subtitle:"Get started with themes",slug:"themes",to:a_,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:a$,subtitle:"Latest news about Nuxt",slug:"announcements",to:ba,icon:"announcements.svg",color:"bg-mint-lighter"},{title:bb,subtitle:"They are Nuxt",slug:"teams",to:bc,icon:"teams.svg",color:"bg-mint-light"},{title:bd,subtitle:"All the code we have released",slug:"releases",to:be,icon:"releases.svg",color:"bg-mint"},{title:bf,subtitle:"They trust us",slug:"sponsors",to:bg,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:bh}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:bh},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:a$,to:ba},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:bf,to:bg},{title:bb,to:bc},{title:aT,to:aU},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aQ},{title:aR,to:aS},{title:aV,to:aW},{title:P,href:Q},{title:aX,href:aY},{title:bd,to:be},{title:aN,to:aO},{title:aZ,to:a_}]}],showCookieBanner:K},"AsideBottom:0":{lastRelease:bi,masterCoursesLink:{title:P,subtitle:T,href:Q,icon:U,color:V}},"AsideBottom:1":{lastRelease:bi,masterCoursesLink:{title:P,subtitle:T,href:Q,icon:U,color:V}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org",prev:{slug:"configuration-runtime-config",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-runtime-config",title:"RuntimeConfig properties"},next:{slug:"configuration-servermiddleware",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-servermiddleware",title:"The serverMiddleware Property"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxtjs.org\u002Fedit\u002Fmain\u002Fcontent\u002Fen\u002Fdocs\u002F5.configuration-glossary\u002F27.configuration-server.md",contributors:[{name:"Nazaré da Piedade",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F31008635?u=db0d466a654b2a0f0f1e8308d7736ec4c3d3a887&v=4",login:"nazarepiedady"},{name:"Ikko Ashimine",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F22633385?u=29190f6c8aed91fa9574b064a9995f1e49944acf&v=4",login:"eltociear"},{name:"FamCodings",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F47059124?u=da54487c754dcf47639eb129714e318f75056dde&v=4",login:"azizurrahmaan"},{name:"Clément Ollivier",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1439623?u=674a9e28e5bab7c584058d5be3e86117d5c16d64&v=4",login:"clemcode"},{name:bj,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F64593523?u=951854d785aab570caa37383a691c421dbdb12c1&v=4",login:bj},{name:"F. Hinkelmann",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F101553?u=ba04735186648afde39087bcc13d86e44c232a76&v=4",login:"fhinkel"},{name:bk,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F50281523?u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4",login:bk},{name:"Sylvain Marroufin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7547335?u=e8e9429d55aa562ded7903ed3779fb498509f9ee&v=4",login:"smarroufin"},{name:"Christophe Carvalho Vilas-Boas",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F946345?v=4",login:"ChristopheCVB"},{name:"Leoš Literák",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6383287?u=2f32f5447b0d317b7a16b3a70711e8eb4e6fff05&v=4",login:"literakl"},{name:"Trizotti",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F26180773?u=d8c9871560516c287e38c14a5ebbfddf0ed3efd1&v=4",login:"trizotti"},{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F904724?u=c6c29f476e8aced6f47a2edcf057f83ceaeddade&v=4",login:"Atinux"},{name:"Marcello Bachechi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6385285?u=b2b9c6a7781171bdb1b98d9c25d23deaddaac4f5&v=4",login:"pilotkid"},{name:"Rodolphe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7911262?u=20458afd5138c7815635922bf67c3fb5b3a02d70&v=4",login:"blupdew"},{name:"Thomas Underwood",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F75150197?u=37b67f4610e955622eb06c7043643c433a31db01&v=4",login:"DeveloperThomas"},{name:"Shek Evgeniy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F34533417?v=4",login:"shekeg"},{name:"Lukasz Formela",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F39266504?u=6cf0ad79b52b3f6fb12f0e25218ffb9da95b6cf4&v=4",login:"LukaszFormela"},{name:"Hugo Torzuoli",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7328625?u=227635090b531c5e0ae13a81b5e1129cfeeb2f5b&v=4",login:"HZooly"},{name:"Kareem Dabbeet",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F42810389?u=618ea45a53bdd708c7382c52ad25bd1af2c3e53f&v=4",login:"KareemDa"},{name:"tramplay",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F65968861?u=72bcdf905cf1e310bb5c0dfd53bc689e81d555f9&v=4",login:"vencho-mdp"},{name:"Daniel Roe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28706372?u=4a401a8a0f03e301ab349d6ecf5d4df0225f0cc5&v=4",login:"danielroe"},{name:"verebelyicsaba",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F2854597?u=0921782d1bb9ac671c8366b4c24a874e04556d0a&v=4",login:"rannien"},{name:"Adam",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7935392?u=78bb022a2f1d92ec39318aa8581d98169a0a1238&v=4",login:"mercs600"},{name:"Nate Butler",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1714999?u=2e194390963db335b878d385e82007faf14009f8&v=4",login:"iamnbutler"},{name:"Sandra Rodgers",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F45321563?u=f97fdd01635a6ba630e27ab9c8f23383e92ae4c9&v=4",login:"SandraRodgers"},{name:"Arpit Patidar",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F44097148?u=35746725bec61a2d2ae36dcbbeeca2fcb38f1bef&v=4",login:"iamarpitpatidar"},{name:"Matthew Kuehn",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F1794897?u=65cc59dbe22893a8d27936a208a124f35db538a5&v=4",login:"mkuehn"},{name:"Steven DUBOIS",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F29716703?v=4",login:"duboiss"},{name:"Travis Lindsey",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7409277?u=e208e954de1d5cb9ac7fdc8a85e1a15b4a1213e0&v=4",login:"jtlindsey"},{name:bl,avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F10936660?u=396523726509caa34a0153f14082d05fc3f47a19&v=4",login:bl},{name:"Maxime",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3755401?u=09be999610c9d656c29f8c770eff92e9d0e6929a&v=4",login:"Mxime"},{name:"かる",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F15998572?u=aeb6d62f2e09dc96ee632a258b5a798418e49bee&v=4",login:"karuhi"},{name:"Al Power",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F858646?u=c35be09afa4ed838c91a1b2abb5db4362564522e&v=4",login:"alpower"},{name:"Florent Delerue",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6696789?u=0305b5aa4a18f1032e7c258dbbff319ad54a6fba&v=4",login:"Flosciante"},{name:"quanghm",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F28060255?u=f2a1e2ca2a40f078ca2e0b4d6e6a470170f0cf7e&v=4",login:"quanghm27"},{name:"José Manuel Casani Guerra",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F21302114?u=8ea39b04340fe8c4ebd63b1097497e1bf0d1454f&v=4",login:"MrJmpl3"},{name:"Unai Mengual",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F20427094?u=2998231cea5f2bd7268cba898c9a947cb1d525b8&v=4",login:"owlnai"},{name:"kazuya kawaguchi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F72989?u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4",login:"kazupon"},{name:"Michael Lynch",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7783288?u=b6d8f48d38d7a64cddc633db4cfcd6915b997794&v=4",login:"mtlynch"},{name:"Tomachi",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F8929706?u=bb51b21fd7735505d999e27f7340c5f886f4d9fe&v=4",login:"book000"},{name:"pooya parsa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F5158436?u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4",login:"pi0"},{name:"Meir Roth",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F12494197?u=7828b437d2bc2402a6e8a4edd9ada378139f4742&v=4",login:"meirroth"},{name:"Brett",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14969098?u=34d0910e6ded49668e2a114eedbc26ab7b5979e7&v=4",login:"Brettanda"},{name:"Adam Miedema",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F30202878?u=aad565699f6b02961c47297dc931e5179d9ff8e1&v=4",login:"armgitaar"},{name:"Thomas Bnt",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F14293805?u=e3f70b334910b6cfd43ad99c9f5b0523c07bd38a&v=4",login:"thomasbnt"},{name:"Kazuki Furukawa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F6816398?v=4",login:"karur4n"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","ProseEm","HomeLearnMaster","SectionContentItem","ProseHr","HomeFeatures","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",aP,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","ProseH3","ProseCodeInline","ProseLi","ProseUl","ProseStrong","ProseBlockquote","ProseCode","ProseH2","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","VideoPlayer","CodeGroup","Alert","ProseH4","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","span","token","punctuation","\n"," ","keyword","operator","module","prose-code-inline",".",":","property-access","prose-a","{","}","string","function","(",")",",","timing","prose-paragraph","method","prose-code","pre","line-numbers","code","\n  ","language-js",2,true,"nuxt.config.js","export","default",false,"prose-h2","filename","\n  server","comment","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-li","path","Learn more with experts","master-courses.svg","bg-green-800","server","prose-ul","Type: ","Object","basic-example","Basic example:","number","\n    timing","boolean","false","example-using-https-configuration","Example using HTTPS configuration","import","imports","from"," fs","readFileSync","resolve","__dirname","\n    ","nofollow","noopener","noreferrer","_blank","example-using-sockets-configuration","Example using sockets configuration","server.timing","prose-h3","example-using-timing-configuration","Example using timing configuration","using-timing-api","Using timing API","prose-h4","start","name","end","\n  res","'midd'",";","assign-left","variable","=","",3,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners","v2.15.8","Ayouli","felipesuri","syagawa")));