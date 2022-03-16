__NUXT_JSONP__("/docs/features/component-discovery", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb){return {data:[{page:{key:"content:en:docs:3.features:9.component-discovery.md",generatedAt:new Date(1647437381689),mtime:new Date(1647437381664),slug:"component-discovery",title:"Component Discovery",position:"999900030009",to:"\u002Fdocs\u002Ffeatures\u002Fcomponent-discovery",draft:I,page:C,language:"en",description:"By default, Nuxt is configured to cover most use cases. This default configuration can be overwritten with the nuxt.config.js file.",category:"features",img:"\u002Fdocs\u002Fcomponents.png",imgAlt:"nuxt components module",empty:I,excerpt:void 0,body:{raw:"---\ntitle: Component Discovery\ndescription: By default, Nuxt is configured to cover most use cases. This default configuration can be overwritten with the nuxt.config.js file.\ncategory: features\nimg: \u002Fdocs\u002Fcomponents.png\nimgAlt: nuxt components module\n---\n\n## Enabling Auto-Discovery\n\nStarting from `v2.13`, Nuxt can auto import your components when used in your templates. To activate this feature, set `components: true` in your configuration:\n\n```js{}[nuxt.config.js]\nexport default {\n  components: true\n}\n```\n\n::alert{type=\"info\"}\nCheck out [how to configure component auto-discovery](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-components#advanced).\n::\n\n## Using Components\n\nOnce you create your components in the components directory they will then be available throughout your app without the need to import them.\n\n```bash\n| components\u002F\n--| TheHeader.vue\n--| TheFooter.vue\n```\n\n```html{}[layouts\u002Fdefault.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003CTheHeader \u002F\u003E\n    \u003CNuxt \u002F\u003E\n    \u003CTheFooter \u002F\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n::alert{type=\"info\"}\nSee [live demo](https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fnuxt-components-cou9k) or [video example](https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=lQ8OBrgVVr8).\n::\n\n## Component Names\n\nIf you have components in nested directories such as:\n\n```bash\n| components\u002F\n--| base\u002F\n----| foo\u002F\n------| Button.vue\n```\n\nThe component name will be based on its own path directory and filename. Therefore, the component will be:\n\n```html\n\u003CBaseFooButton \u002F\u003E\n```\n\n::alert\nFor clarity, it is recommend that the component file name matches its name. (So, in the example above, you could rename `Button.vue` to be `BaseFooButton.vue`.)\n::\n\nIf you want to use a custom directory structure that should not be part of the component name, you can explicitly specify these directories:\n\n```bash\n| components\u002F\n--| base\u002F\n----| foo\u002F\n------| Button.vue\n```\n\n```bash{}[nuxt.config.js]\ncomponents: {\n  dirs: [\n    '~\u002Fcomponents',\n    '~\u002Fcomponents\u002Fbase'\n  ]\n}\n```\n\nAnd now in your template you can use `FooButton` instead of `BaseFooButton`.\n\n```html{}[pages\u002Findex.vue]\n\u003CFooButton \u002F\u003E\n```\n\n::alert{type=\"info\"}\nConsider naming your components and directories following the [Vue Style Guide](https:\u002F\u002Fvuejs.org\u002Fv2\u002Fstyle-guide\u002F).\n::\n\n## Dynamic Imports\n\nTo dynamically import a component (also known as lazy-loading a component) all you need to do is add the `Lazy` prefix to the component name.\n\n```html{}[layouts\u002Fdefault.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003CTheHeader \u002F\u003E\n    \u003CNuxt \u002F\u003E\n    \u003CLazyTheFooter \u002F\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\nThis is particularly useful if the component is not always needed. By using the `Lazy` prefix you can delay loading the component code until the right moment, which can be helpful for optimizing your JavaScript bundle size.\n\n```html{}[pages\u002Findex.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003Ch1\u003EMountains\u003C\u002Fh1\u003E\n    \u003CLazyMountainsList v-if=\"show\" \u002F\u003E\n    \u003Cbutton v-if=\"!show\" @click=\"show = true\"\u003EShow List\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript\u003E\nexport default {\n  data() {\n    return {\n      show: false\n    }\n  }\n}\n\u003C\u002Fscript\u003E\n```\n\n## Cheatsheet\n\n:modal{src=\"img\" alt=\"imgAlt\"}\n",ast:{type:"root",children:[{type:b,tag:D,props:{id:ab},children:[{type:b,tag:s,props:{href:"#enabling-auto-discovery"},children:[{type:a,value:ac}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Starting from "},{type:b,tag:w,props:{},children:[{type:a,value:"v2.13"}]},{type:a,value:", Nuxt can auto import your components when used in your templates. To activate this feature, set "},{type:b,tag:w,props:{},children:[{type:a,value:"components: true"}]},{type:a,value:" in your configuration:"}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:ad}]},{type:b,tag:p,props:{className:[q,"language-js"]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,E,J]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,E,J]},children:[{type:a,value:af}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:"\n  components"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ag}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:"true"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:K,props:{type:P},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Check out "},{type:b,tag:s,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-components#advanced"},children:[{type:a,value:"how to configure component auto-discovery"}]},{type:a,value:L}]}]},{type:a,value:g},{type:b,tag:D,props:{id:ai},children:[{type:b,tag:s,props:{href:"#using-components"},children:[{type:a,value:aj}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Once you create your components in the components directory they will then be available throughout your app without the need to import them."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:p,props:{className:[q,M]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:" TheHeader.vue\n--"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:" TheFooter.vue\n"}]}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:ak}]},{type:b,tag:p,props:{className:[q,H]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:al}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:am}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"TheFooter"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:K,props:{type:P},children:[{type:b,tag:l,props:{},children:[{type:a,value:"See "},{type:b,tag:s,props:{href:"https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fnuxt-components-cou9k",rel:[R,S,T],target:U},children:[{type:a,value:"live demo"}]},{type:a,value:" or "},{type:b,tag:s,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=lQ8OBrgVVr8",rel:[R,S,T],target:U},children:[{type:a,value:"video example"}]},{type:a,value:L}]}]},{type:a,value:g},{type:b,tag:D,props:{id:an},children:[{type:b,tag:s,props:{href:"#component-names"},children:[{type:a,value:ao}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"If you have components in nested directories such as:"}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:p,props:{className:[q,M]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:ar}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"The component name will be based on its own path directory and filename. Therefore, the component will be:"}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:p,props:{className:[q,H]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:as}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:K,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"For clarity, it is recommend that the component file name matches its name. (So, in the example above, you could rename "},{type:b,tag:w,props:{},children:[{type:a,value:"Button.vue"}]},{type:a,value:" to be "},{type:b,tag:w,props:{},children:[{type:a,value:"BaseFooButton.vue"}]},{type:a,value:".)"}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"If you want to use a custom directory structure that should not be part of the component name, you can explicitly specify these directories:"}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:p,props:{className:[q,M]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:ar}]}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:ad}]},{type:b,tag:p,props:{className:[q,M]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"components: "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:"\n  dirs: "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"'~\u002Fcomponents'"}]},{type:a,value:",\n    "},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"'~\u002Fcomponents\u002Fbase'"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"And now in your template you can use "},{type:b,tag:w,props:{},children:[{type:a,value:au}]},{type:a,value:" instead of "},{type:b,tag:w,props:{},children:[{type:a,value:as}]},{type:a,value:L}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:av}]},{type:b,tag:p,props:{className:[q,H]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:au}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:K,props:{type:P},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Consider naming your components and directories following the "},{type:b,tag:s,props:{href:"https:\u002F\u002Fvuejs.org\u002Fv2\u002Fstyle-guide\u002F",rel:[R,S,T],target:U},children:[{type:a,value:"Vue Style Guide"}]},{type:a,value:L}]}]},{type:a,value:g},{type:b,tag:D,props:{id:aw},children:[{type:b,tag:s,props:{href:"#dynamic-imports"},children:[{type:a,value:ax}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"To dynamically import a component (also known as lazy-loading a component) all you need to do is add the "},{type:b,tag:w,props:{},children:[{type:a,value:ay}]},{type:a,value:" prefix to the component name."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:ak}]},{type:b,tag:p,props:{className:[q,H]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:al}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:am}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"LazyTheFooter"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"This is particularly useful if the component is not always needed. By using the "},{type:b,tag:w,props:{},children:[{type:a,value:ay}]},{type:a,value:" prefix you can delay loading the component code until the right moment, which can be helpful for optimizing your JavaScript bundle size."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:av}]},{type:b,tag:p,props:{className:[q,H]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"Mountains"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"LazyMountainsList"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,e,X]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:"show"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aB}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,e,X]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:"!show"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:"@click"}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,e,X]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:"show = true"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"Show List"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:g},{type:b,tag:c,props:{className:[d,E,J]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,E,J]},children:[{type:a,value:af}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:"data"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"("}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:")"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,E,"control-flow"]},children:[{type:a,value:"return"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:"\n      show"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ag}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:"false"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:D,props:{id:aC},children:[{type:b,tag:s,props:{href:"#cheatsheet"},children:[{type:a,value:aD}]}]},{type:a,value:g},{type:b,tag:"modal",props:{":alt":"imgAlt",":src":"img"},children:[]}]},toc:{title:aE,searchDepth:x,depth:x,links:[{id:ab,depth:x,text:ac},{id:ai,depth:x,text:aj},{id:an,depth:x,text:ao},{id:aw,depth:x,text:ax},{id:aC,depth:x,text:aD}]}},template:aF},templateOptions:{header:C,footer:C,aside:C,asideClass:aE,fluid:I,banner:C},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:aG,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:aH,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:aI,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:aF,subtitle:"Create fast websites easily",slug:"docs",to:aJ,icon:"docs.svg",color:"bg-green-500"},{title:aK,subtitle:"Understand everything in Nuxt",slug:"examples",to:aL,icon:"examples.svg",color:"bg-green-600"},{title:aM,subtitle:"Learn with concrete cases",slug:"tutorials",to:aN,icon:"tutorials.svg",color:"bg-green-700"},{title:N,subtitle:_,href:O,icon:$,color:aa}]},{title:"Explore",items:[{title:aO,subtitle:"How to Deploy Nuxt",slug:"deployments",to:aP,icon:"deployments.svg",color:"bg-indigo-light"},{title:aQ,subtitle:"Extend the power of Nuxt",href:aR,icon:"modules.svg",color:"bg-indigo"},{title:aS,subtitle:"Get started with themes",slug:"themes",to:aT,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aU,subtitle:"Latest news about Nuxt",slug:"announcements",to:aV,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aW,subtitle:"They are Nuxt",slug:"teams",to:aX,icon:"teams.svg",color:"bg-mint-light"},{title:aY,subtitle:"All the code we have released",slug:"releases",to:aZ,icon:"releases.svg",color:"bg-mint"},{title:a_,subtitle:"They trust us",slug:"sponsors",to:a$,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:ba}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:ba},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aU,to:aV},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:a_,to:a$},{title:aW,to:aX},{title:aM,to:aN},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aJ},{title:aK,to:aL},{title:aO,to:aP},{title:N,href:O},{title:aQ,href:aR},{title:aY,to:aZ},{title:aG,to:aH},{title:aS,to:aT}]}],showCookieBanner:I},"AsideBottom:0":{lastRelease:bb,masterCoursesLink:{title:N,subtitle:_,href:O,icon:$,color:aa}},"AsideBottom:1":{lastRelease:bb,masterCoursesLink:{title:N,subtitle:_,href:O,icon:$,color:aa}},"Docs:0":{repoUrl:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev",prev:{slug:"nuxt-components",to:"\u002Fdocs\u002Ffeatures\u002Fnuxt-components",title:"Built-in Components"},next:{slug:"transitions",to:"\u002Fdocs\u002Ffeatures\u002Ftransitions",title:"Transitions"}},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fen\u002Fdocs\u002F3.features\u002F9.component-discovery.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",aI,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link","Sandbox"])},mutations:[]}}("text","element","span","token","punctuation","tag","\n"," ","\u003C","\u003E","operator","prose-paragraph","\n    ","|","prose-code","pre","line-numbers","code","prose-a","\n  ","\u002F\u003E","\u003C\u002F","prose-code-inline",2,"filename","template","div","\"",true,"prose-h2","keyword","{","}","language-html",false,"module","alert",".","language-bash","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","info"," components\u002F\n--","nofollow","noopener","noreferrer","_blank","attr-name","attr-value","attr-equals","=","script","Learn more with experts","master-courses.svg","bg-green-800","enabling-auto-discovery","Enabling Auto-Discovery","nuxt.config.js","export","default",":","boolean","using-components","Using Components","layouts\u002Fdefault.vue","TheHeader","Nuxt","component-names","Component Names"," base\u002F\n----"," foo\u002F\n------"," Button.vue\n","BaseFooButton","string","FooButton","pages\u002Findex.vue","dynamic-imports","Dynamic Imports","Lazy","h1","v-if","button","cheatsheet","Cheatsheet","","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));