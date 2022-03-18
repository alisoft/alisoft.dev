__NUXT_JSONP__("/deployments/azure-static-web-apps", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG){return {data:[{page:{key:"content:en:deployments:azure-static-web-apps.md",generatedAt:new Date(1647583550477),mtime:new Date(1647583550451),slug:"azure-static-web-apps",title:"Azure Static Web Apps",position:"999999990000",to:"\u002Fdeployments\u002Fazure-static-web-apps",draft:t,page:w,language:"en",template:"Guide",description:C,target:"Static",category:"deployment",logo:{light:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002FAzure.svg",dark:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002FAzure.svg"},empty:t,excerpt:void 0,body:{raw:"---\ntemplate: guide\ntitle: Azure Static Web Apps\ndescription: How to deploy a Nuxt application on Azure Static Web Apps?\ntarget: Static\ncategory: deployment\nlogo:\n  light: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002FAzure.svg\"\n  dark: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002FAzure.svg\"\n---\n# Deploy on Azure Static Web Apps\n\nHow to deploy a Nuxt application on Azure Static Web Apps?\n\n---\n\nYou can now deploy your static sites to Azure using Azure static web apps. You will need to have your app in GitHub as Azure static web apps leverages GitHub actions which allow you to re-build your static site on every git push.\n\nThere are 2 things you need to configure in order to deploy your app to Azure static web apps. The first one is to modify the build command as Azure reads the build command from your package.json and for static sites we need to use the generate command.\n\n`package.json`\n\n```json\nbuild: \"nuxt generate\"\n```\n\nThe second one is to add a routes.json file which is important for catching custom 404 pages and spa fallback pages.\n\n`static\u002Froutes.json`\n\n```jsx\n{\n \"routes\": [],\n \"platformErrorOverrides\": [\n   {\n    \"errorType\": \"NotFound\",\n    \"serve\": \"\u002F200.html\",\n    \"statusCode\": 200\n   }\n ]\n}\n```\n\nIf you want to test out deploying to Azure static web apps, we have created a small demo application that is all setup and configured. You will just need to clone it and add it to your GitHub repo. You can then follow the steps on - Deploying your app with Azure Static Web Apps.\n\n[Clone the demo app](https:\u002F\u002Fgithub.com\u002Fdebs-obrien\u002Fnuxtjs-azure-static-app)\n\n## Deploying your app with Azure Static Web Apps\n\n### Step 1: **Create Azure static web apps**\n\n1. Navigate to the [Azure Portal](https:\u002F\u002Fportal.azure.com\u002F).\n2. Click **Create a Resource** then search for **Static App** and select it.\n3. Select a subscription from the *Subscription* drop-down list or use the default one.\n4. Click the **New** link below the *Resource group* dropdown. In *New resource group name*, type **nuxt** and click **OK**\n5. Provide a globally unique name for your app in the **Name** text box. Valid characters include `a-z`, `A-Z`, `0-9`, and `-`. The app name is used to identify the app in your list of resources therefore it is a good idea to name your app using the name of your repository.\n6. In the *Region* dropdown, choose a region closest to you.\n\n![Azure Portal resource and app setup](https:\u002F\u002Fuser-images.githubusercontent.com\u002F13063165\u002F82118135-71891b00-9775-11ea-8284-aa94d17a3bc3.png)\n\n### Step 2: **Add a GitHub repository**\n\nAzure App Service Static App needs access to the repository where your Nuxt app lives so it can automatically deploy commits:\n\n1. Click the **Sign in with GitHub button**\n2. Select the **Organization** under which you created the repo for your Nuxt project. It can also be your GitHub username.\n3. Find the name of the repository you created earlier and select it.\n4. Choose **master** as the branch from the *Branch* dropdown.\n\n![how to add github](https:\u002F\u002Fuser-images.githubusercontent.com\u002F13063165\u002F82118359-38ea4100-9777-11ea-9c5e-7ba5c4da708e.png)\n\n### Step 3: **Configure the build process**\n\nThere are few things that Azure App Service Static App can assume - things like automatically installing npm modules and running `npm run build`. There are also few you have to be explicit about, like what folder will the static app be copied to after build so the static site can be served from there.\n\n1. Click on the **Build** tab to configure the static output folder.\n2. Type **dist** in the *App artifact location* text box.\n\n![Azure portal configure build](https:\u002F\u002Fuser-images.githubusercontent.com\u002F13063165\u002F82118277-71d5e600-9776-11ea-88ad-48cf0793905d.png)\n\n### Step 4: **Review and create**\n\n1. Click the **Review + Create** button to verify the details are all correct.\n2. Click **Create** to start the creation of the resource and also provision a GitHub Action for deployment.\n3. Once the deployment is completed, click **Go to resource**\n\n![azure portal deployment complete message](https:\u002F\u002Fuser-images.githubusercontent.com\u002F13063165\u002F82118390-67681c00-9777-11ea-9778-671dc768393e.png)\n\n4. On the resource screen, click the *URL* link to open your deployed application.\n\n![resource screen with url to your deployed app](https:\u002F\u002Fuser-images.githubusercontent.com\u002F13063165\u002F82118042-d001c980-9774-11ea-94f5-57d995aa5391.png)\n\nCongrats your static site is now hosted on Azure static web apps.\n\n## Rebuild your static app and monitoring deployment\n\nNow all you have to do is modify your code and push your changes. Pushing your changes will activate a GitHub action and your new site will automatically rebuild. You can monitor the workflow by clicking on the actions tab in your GitHub repo and you can inspect even further by selecting the last commit you made. You can then watch to see when the deploy is finished or inspect the log if you have any deployment errors.\n\n![GitHub actions screen](https:\u002F\u002Fuser-images.githubusercontent.com\u002F13063165\u002F82118249-34715880-9776-11ea-92e2-dbd21bbf7cb6.png)\n\n## Did you know?\n\n### **How to handle dynamic routes**\n\nIf you are working with dynamic pages such as `_id.vue` then you you will need to add these routes to the generate property in your nuxt config.\n\n[See the documentation on how to handle dynamic routes.](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#routes)\n\n\u003Cdiv class=\"Alert\"\u003E\nIf you are using Nuxt 2.13+ then you won't have to worry about this as there is a built in crawler which will crawl all dynamics by crawling the links in your site.\n\u003C\u002Fdiv\u003E\n\n### How to add an error page\n\nIn order to not have the default 404 page you can create an `error.vue` file in your layouts folder.\n\n### How to add SPA fallback\n\nIf you would like some pages to not be generated but act as a single page application you can do so using the generate.excludes property in your nuxt.config file.\n\n[See the documentation on spa fallback](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#exclude)\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"deploy-on-azure-static-web-apps"},children:[{type:a,value:"Deploy on Azure Static Web Apps"}]},{type:a,value:c},{type:b,tag:f,props:{class:"d-heading-description"},children:[{type:a,value:C}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"You can now deploy your static sites to Azure using Azure static web apps. You will need to have your app in GitHub as Azure static web apps leverages GitHub actions which allow you to re-build your static site on every git push."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"There are 2 things you need to configure in order to deploy your app to Azure static web apps. The first one is to modify the build command as Azure reads the build command from your package.json and for static sites we need to use the generate command."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:"package.json"}]}]},{type:a,value:c},{type:b,tag:D,props:{},children:[{type:b,tag:E,props:{className:[F,"language-json"]},children:[{type:b,tag:G,props:{},children:[{type:a,value:"build"},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"\"nuxt generate\""}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"The second one is to add a routes.json file which is important for catching custom 404 pages and spa fallback pages."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:"static\u002Froutes.json"}]}]},{type:a,value:c},{type:b,tag:D,props:{},children:[{type:b,tag:E,props:{className:[F,"language-jsx"]},children:[{type:b,tag:G,props:{},children:[{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:H}]},{type:a,value:x},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"\"routes\""}]},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:I}]},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:J}]},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:y}]},{type:a,value:x},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"\"platformErrorOverrides\""}]},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:I}]},{type:a,value:K},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:H}]},{type:a,value:z},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"\"errorType\""}]},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"\"NotFound\""}]},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:y}]},{type:a,value:z},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"\"serve\""}]},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"\"\u002F200.html\""}]},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:y}]},{type:a,value:z},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"\"statusCode\""}]},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,"number"]},children:[{type:a,value:"200"}]},{type:a,value:K},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:L}]},{type:a,value:x},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:J}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:L}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If you want to test out deploying to Azure static web apps, we have created a small demo application that is all setup and configured. You will just need to clone it and add it to your GitHub repo. You can then follow the steps on - Deploying your app with Azure Static Web Apps."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{href:"https:\u002F\u002Fgithub.com\u002Fdebs-obrien\u002Fnuxtjs-azure-static-app",rel:[M,N,O],target:P},children:[{type:a,value:"Clone the demo app"}]}]},{type:a,value:c},{type:b,tag:A,props:{id:Q},children:[{type:b,tag:i,props:{href:"#deploying-your-app-with-azure-static-web-apps"},children:[{type:a,value:R}]}]},{type:a,value:c},{type:b,tag:m,props:{id:S},children:[{type:b,tag:i,props:{href:"#step-1-create-azure-static-web-apps"},children:[{type:a,value:"Step 1: "},{type:b,tag:g,props:{},children:[{type:a,value:"Create Azure static web apps"}]}]}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:"Navigate to the "},{type:b,tag:i,props:{href:"https:\u002F\u002Fportal.azure.com\u002F",rel:[M,N,O],target:P},children:[{type:a,value:"Azure Portal"}]},{type:a,value:"."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:T},{type:b,tag:g,props:{},children:[{type:a,value:"Create a Resource"}]},{type:a,value:" then search for "},{type:b,tag:g,props:{},children:[{type:a,value:"Static App"}]},{type:a,value:" and select it."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:"Select a subscription from the "},{type:b,tag:n,props:{},children:[{type:a,value:"Subscription"}]},{type:a,value:" drop-down list or use the default one."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:B},{type:b,tag:g,props:{},children:[{type:a,value:"New"}]},{type:a,value:" link below the "},{type:b,tag:n,props:{},children:[{type:a,value:"Resource group"}]},{type:a,value:" dropdown. In "},{type:b,tag:n,props:{},children:[{type:a,value:"New resource group name"}]},{type:a,value:", type "},{type:b,tag:g,props:{},children:[{type:a,value:"nuxt"}]},{type:a,value:" and click "},{type:b,tag:g,props:{},children:[{type:a,value:"OK"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:"Provide a globally unique name for your app in the "},{type:b,tag:g,props:{},children:[{type:a,value:"Name"}]},{type:a,value:" text box. Valid characters include "},{type:b,tag:k,props:{},children:[{type:a,value:"a-z"}]},{type:a,value:U},{type:b,tag:k,props:{},children:[{type:a,value:"A-Z"}]},{type:a,value:U},{type:b,tag:k,props:{},children:[{type:a,value:"0-9"}]},{type:a,value:", and "},{type:b,tag:k,props:{},children:[{type:a,value:"-"}]},{type:a,value:". The app name is used to identify the app in your list of resources therefore it is a good idea to name your app using the name of your repository."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:"In the "},{type:b,tag:n,props:{},children:[{type:a,value:"Region"}]},{type:a,value:" dropdown, choose a region closest to you."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:s,props:{alt:"Azure Portal resource and app setup",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F13063165\u002F82118135-71891b00-9775-11ea-8284-aa94d17a3bc3.png"},children:[]}]},{type:a,value:c},{type:b,tag:m,props:{id:V},children:[{type:b,tag:i,props:{href:"#step-2-add-a-github-repository"},children:[{type:a,value:"Step 2: "},{type:b,tag:g,props:{},children:[{type:a,value:"Add a GitHub repository"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Azure App Service Static App needs access to the repository where your Nuxt app lives so it can automatically deploy commits:"}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:B},{type:b,tag:g,props:{},children:[{type:a,value:"Sign in with GitHub button"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:"Select the "},{type:b,tag:g,props:{},children:[{type:a,value:"Organization"}]},{type:a,value:" under which you created the repo for your Nuxt project. It can also be your GitHub username."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:"Find the name of the repository you created earlier and select it."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:"Choose "},{type:b,tag:g,props:{},children:[{type:a,value:"master"}]},{type:a,value:" as the branch from the "},{type:b,tag:n,props:{},children:[{type:a,value:"Branch"}]},{type:a,value:" dropdown."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:s,props:{alt:"how to add github",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F13063165\u002F82118359-38ea4100-9777-11ea-9c5e-7ba5c4da708e.png"},children:[]}]},{type:a,value:c},{type:b,tag:m,props:{id:W},children:[{type:b,tag:i,props:{href:"#step-3-configure-the-build-process"},children:[{type:a,value:"Step 3: "},{type:b,tag:g,props:{},children:[{type:a,value:"Configure the build process"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"There are few things that Azure App Service Static App can assume - things like automatically installing npm modules and running "},{type:b,tag:k,props:{},children:[{type:a,value:"npm run build"}]},{type:a,value:". There are also few you have to be explicit about, like what folder will the static app be copied to after build so the static site can be served from there."}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:"Click on the "},{type:b,tag:g,props:{},children:[{type:a,value:"Build"}]},{type:a,value:" tab to configure the static output folder."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:"Type "},{type:b,tag:g,props:{},children:[{type:a,value:"dist"}]},{type:a,value:" in the "},{type:b,tag:n,props:{},children:[{type:a,value:"App artifact location"}]},{type:a,value:" text box."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:s,props:{alt:"Azure portal configure build",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F13063165\u002F82118277-71d5e600-9776-11ea-88ad-48cf0793905d.png"},children:[]}]},{type:a,value:c},{type:b,tag:m,props:{id:X},children:[{type:b,tag:i,props:{href:"#step-4-review-and-create"},children:[{type:a,value:"Step 4: "},{type:b,tag:g,props:{},children:[{type:a,value:"Review and create"}]}]}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:B},{type:b,tag:g,props:{},children:[{type:a,value:"Review + Create"}]},{type:a,value:" button to verify the details are all correct."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:T},{type:b,tag:g,props:{},children:[{type:a,value:"Create"}]},{type:a,value:" to start the creation of the resource and also provision a GitHub Action for deployment."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:"Once the deployment is completed, click "},{type:b,tag:g,props:{},children:[{type:a,value:"Go to resource"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:s,props:{alt:"azure portal deployment complete message",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F13063165\u002F82118390-67681c00-9777-11ea-9778-671dc768393e.png"},children:[]}]},{type:a,value:c},{type:b,tag:u,props:{start:4},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:a,value:"On the resource screen, click the "},{type:b,tag:n,props:{},children:[{type:a,value:"URL"}]},{type:a,value:" link to open your deployed application."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:s,props:{alt:"resource screen with url to your deployed app",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F13063165\u002F82118042-d001c980-9774-11ea-94f5-57d995aa5391.png"},children:[]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Congrats your static site is now hosted on Azure static web apps."}]},{type:a,value:c},{type:b,tag:A,props:{id:Y},children:[{type:b,tag:i,props:{href:"#rebuild-your-static-app-and-monitoring-deployment"},children:[{type:a,value:Z}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Now all you have to do is modify your code and push your changes. Pushing your changes will activate a GitHub action and your new site will automatically rebuild. You can monitor the workflow by clicking on the actions tab in your GitHub repo and you can inspect even further by selecting the last commit you made. You can then watch to see when the deploy is finished or inspect the log if you have any deployment errors."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:s,props:{alt:"GitHub actions screen",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F13063165\u002F82118249-34715880-9776-11ea-92e2-dbd21bbf7cb6.png"},children:[]}]},{type:a,value:c},{type:b,tag:A,props:{id:_},children:[{type:b,tag:i,props:{href:"#did-you-know"},children:[{type:a,value:$}]}]},{type:a,value:c},{type:b,tag:m,props:{id:aa},children:[{type:b,tag:i,props:{href:"#how-to-handle-dynamic-routes"},children:[{type:b,tag:g,props:{},children:[{type:a,value:ab}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If you are working with dynamic pages such as "},{type:b,tag:k,props:{},children:[{type:a,value:"_id.vue"}]},{type:a,value:" then you you will need to add these routes to the generate property in your nuxt config."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#routes"},children:[{type:a,value:"See the documentation on how to handle dynamic routes."}]}]},{type:a,value:c},{type:b,tag:"div",props:{className:[ac]},children:[{type:a,value:"\nIf you are using Nuxt 2.13+ then you won't have to worry about this as there is a built in crawler which will crawl all dynamics by crawling the links in your site.\n"}]},{type:a,value:c},{type:b,tag:m,props:{id:ad},children:[{type:b,tag:i,props:{href:"#how-to-add-an-error-page"},children:[{type:a,value:ae}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"In order to not have the default 404 page you can create an "},{type:b,tag:k,props:{},children:[{type:a,value:"error.vue"}]},{type:a,value:" file in your layouts folder."}]},{type:a,value:c},{type:b,tag:m,props:{id:af},children:[{type:b,tag:i,props:{href:"#how-to-add-spa-fallback"},children:[{type:a,value:ag}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If you would like some pages to not be generated but act as a single page application you can do so using the generate.excludes property in your nuxt.config file."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#exclude"},children:[{type:a,value:"See the documentation on spa fallback"}]}]}]},toc:{title:ah,searchDepth:v,depth:v,links:[{id:Q,depth:v,text:R,children:[{id:S,depth:o,text:"Step 1: Create Azure static web apps"},{id:V,depth:o,text:"Step 2: Add a GitHub repository"},{id:W,depth:o,text:"Step 3: Configure the build process"},{id:X,depth:o,text:"Step 4: Review and create"}]},{id:Y,depth:v,text:Z},{id:_,depth:v,text:$,children:[{id:aa,depth:o,text:ab},{id:ad,depth:o,text:ae},{id:af,depth:o,text:ag}]}]}}},templateOptions:{header:w,footer:w,aside:t,asideClass:ah,fluid:t,banner:w},_img:{"/_ipx/https://user-images.githubusercontent.com/13063165/82118135-71891b00-9775-11ea-8284-aa94d17a3bc3.png":"\u002F_nuxt\u002Fimage\u002F642fad.png","/_ipx/https://user-images.githubusercontent.com/13063165/82118359-38ea4100-9777-11ea-9c5e-7ba5c4da708e.png":"\u002F_nuxt\u002Fimage\u002Fe6ea7e.png","/_ipx/https://user-images.githubusercontent.com/13063165/82118277-71d5e600-9776-11ea-88ad-48cf0793905d.png":"\u002F_nuxt\u002Fimage\u002F7f0a10.png","/_ipx/https://user-images.githubusercontent.com/13063165/82118390-67681c00-9777-11ea-9778-671dc768393e.png":"\u002F_nuxt\u002Fimage\u002F52840e.png","/_ipx/https://user-images.githubusercontent.com/13063165/82118042-d001c980-9774-11ea-94f5-57d995aa5391.png":"\u002F_nuxt\u002Fimage\u002F37dba3.png","/_ipx/https://user-images.githubusercontent.com/13063165/82118249-34715880-9776-11ea-92e2-dbd21bbf7cb6.png":"\u002F_nuxt\u002Fimage\u002F7ab696.png","/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:ai,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:aj,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:ak,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:"Docs",subtitle:"Create fast websites easily",slug:"docs",to:al,icon:"docs.svg",color:"bg-green-500"},{title:am,subtitle:"Understand everything in Nuxt",slug:"examples",to:an,icon:"examples.svg",color:"bg-green-600"},{title:ao,subtitle:"Learn with concrete cases",slug:"tutorials",to:ap,icon:"tutorials.svg",color:"bg-green-700"},{title:aq,subtitle:"Learn more with experts",href:ar,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:as,subtitle:"How to Deploy Nuxt",slug:"deployments",to:at,icon:"deployments.svg",color:"bg-indigo-light"},{title:au,subtitle:"Extend the power of Nuxt",href:av,icon:"modules.svg",color:"bg-indigo"},{title:aw,subtitle:"Get started with themes",slug:"themes",to:ax,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:ay,subtitle:"Latest news about Nuxt",slug:"announcements",to:az,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aA,subtitle:"They are Nuxt",slug:"teams",to:aB,icon:"teams.svg",color:"bg-mint-light"},{title:aC,subtitle:"All the code we have released",slug:"releases",to:aD,icon:"releases.svg",color:"bg-mint"},{title:aE,subtitle:"They trust us",slug:"sponsors",to:aF,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aG}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aG},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:ay,to:az},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aE,to:aF},{title:aA,to:aB},{title:ao,to:ap},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:al},{title:am,to:an},{title:as,to:at},{title:aq,href:ar},{title:au,href:av},{title:aC,to:aD},{title:ai,to:aj},{title:aw,to:ax}]}],showCookieBanner:t},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fen\u002Fdeployments\u002Fazure-static-web-apps.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",ak,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup",ac,"ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","BaseAlert","Link"])},mutations:[]}}("text","element","\n","span","token","prose-paragraph","prose-strong","prose-li","prose-a","punctuation","prose-code-inline","string","prose-h3","prose-em",3,"operator",":"," ","prose-img",false,"prose-ol",2,true,"\n ",",","\n    ","prose-h2","Click the ","How to deploy a Nuxt application on Azure Static Web Apps?","prose-code","pre","line-numbers","code","{","[","]","\n   ","}","nofollow","noopener","noreferrer","_blank","deploying-your-app-with-azure-static-web-apps","Deploying your app with Azure Static Web Apps","step-1-create-azure-static-web-apps","Click ",", ","step-2-add-a-github-repository","step-3-configure-the-build-process","step-4-review-and-create","rebuild-your-static-app-and-monitoring-deployment","Rebuild your static app and monitoring deployment","did-you-know","Did you know?","how-to-handle-dynamic-routes","How to handle dynamic routes","Alert","how-to-add-an-error-page","How to add an error page","how-to-add-spa-fallback","How to add SPA fallback","","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));