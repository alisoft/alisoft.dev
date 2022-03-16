__NUXT_JSONP__("/zh/deployments/koyeb", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF){return {data:[{page:{key:"content:zh:deployments:koyeb.md",generatedAt:new Date(1647437324681),mtime:new Date(1647437324656),slug:"koyeb",title:K,position:"999999990000",to:"\u002Fdeployments\u002Fkoyeb",draft:y,page:B,language:"zh",template:"Guide",description:L,target:"Server",category:"deployment",logo:{light:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002FKoyeb.svg",dark:"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002FKoyeb.svg"},empty:y,excerpt:void 0,body:{raw:"---\ntemplate: guide\ntitle: Koyeb\ndescription: Deploy Nuxt on Koyeb Serverless Platform with Docker\ntarget: Server\ncategory: deployment\nlogo:\n  light: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Flight\u002FKoyeb.svg\"\n  dark: \"\u002Fimg\u002Fcompanies\u002Fsquare\u002Fdark\u002FKoyeb.svg\"\n---\n# Deploy Nuxt on Koyeb Serverless Platform\n\nDeploy Nuxt on Koyeb Serverless Platform with Docker\n\n---\n\n[Koyeb](https:\u002F\u002Fwww.koyeb.com) is a developer-friendly serverless platform to deploy apps globally. The platform lets you seamlessly run Docker containers, web apps, and APIs with git-based deployment, native autoscaling, a global edge network, and built-in service mesh and discovery.\n\nIn this guide, we showcase how to dockerize and deploy a Nuxt application on the Koyeb platform.\n\n\u003E Koyeb allows you to deploy Docker containers from the registry of your choice. In this guide we use the Docker Hub to store our image but you are free to use the [GitHub Container Registry](https:\u002F\u002Fdocs.github.com\u002Fen\u002Fpackages\u002Fworking-with-a-github-packages-registry\u002Fworking-with-the-container-registry), the [GitLab Container Registry](https:\u002F\u002Fdocs.gitlab.com\u002Fee\u002Fuser\u002Fpackages\u002Fcontainer_registry\u002F) or any other container registry provider.\n\n## Requirements\n\nTo successfully follow and complete this guide, you need:\n\n1. A Nuxt project to deploy. You can use the [create-nuxt-app](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcreate-nuxt-app) to create a Nuxt project and get started\n2. A [Koyeb account](https:\u002F\u002Fapp.koyeb.com) to deploy and run the dockerized Nuxt application\n3. A [Docker Hub](https:\u002F\u002Fhub.docker.com\u002F) account to push the Docker image and deploy it on Koyeb\n\n## Getting started\n\nIn your Nuxt application directory run the following command to install dependencies:\n\n```bash\nyarn\n```\n\nOnce the dependencies are installed, launch your application and ensure everything is working fine:\n\n```bash\nyarn dev\n```\n\n## Dockerize your application\n\nTo Dockerize your Nuxt application, you need to create a `Dockerfile` in your project directory containing the content below:\n\n```dockerfile\nFROM node:lts as builder\n\nWORKDIR \u002Fapp\n\nCOPY . .\n\nRUN yarn install \\\n  --prefer-offline \\\n  --frozen-lockfile \\\n  --non-interactive \\\n  --production=false\n\nRUN yarn build\n\nRUN rm -rf node_modules && \\\n  NODE_ENV=production yarn install \\\n  --prefer-offline \\\n  --pure-lockfile \\\n  --non-interactive \\\n  --production=true\n\nFROM node:lts\n\nWORKDIR \u002Fapp\n\nCOPY --from=builder \u002Fapp  .\n\nENV HOST 0.0.0.0\nEXPOSE 80\n\nCMD [ \"yarn\", \"start\" ]\n```\n\nTo build the Docker image execute the following command:\n\n```bash\ndocker build . -t \u003CYOUR_DOCKER_HUB_USERNAME\u003E\u002Fmy-nuxt-project\n```\n\nThis command will build the Docker image with the name \u003CYOUR_DOCKER_HUB\u003E\u002Fmy-nuxt-project. Once the build is over, you can run a container using the image locally to validate everything is working as expected running:\n\n```bash\ndocker run -p 3000:3000 \u003CYOUR_DOCKER_HUB_USERNAME\u003E\u002Fmy-nuxt-project\n```\n\nOpen your browser and navigate to http:\u002F\u002Flocalhost:3000 to view your project landing page.\n\n## Push your Docker image to a container registry\n\nSince our Docker image is built and functional in our test, we can now upload it to a container registry. In this documentation, we will store our image on the Docker Hub. In your terminal run the command below to push the image:\n\n```bash\ndocker push \u003CYOUR_DOCKER_HUB_USERNAME\u003E\u002Fmy-nuxt-project\n```\n\n## Deploy the Nuxt application to production on Koyeb\n\nOn the Koyeb Control Panel, click the **Create App** button.\n\nIn the form, fill the `Docker image` field with the name of the image we previously created which should look like `\u003CYOUR_DOCKER_HUB_USERNAME\u003E\u002Fmy-nuxt-project`.\n\nCheck the box `Use a private registry` and, in the select field, click **Create Registry Secret**.\n\nA modal opens asking for:\n\n- a name for the Secret which will be created, we can use for instance `docker-hub-secret`\n- the registry provider to generate the secret containing your private registry credentials, in our case Docker Hub\n- your Docker Hub username and password. We recommend you to [generate an access token](https:\u002F\u002Fhub.docker.com\u002Fsettings\u002Fsecurity) from the Docker Hub to use instead of your password.\n  Once you've filled all the fields, click the **Create** button.\n\nWe don't need to change the _Path_, our app will be available at the root of our domain: `\u002F`.\n\nGive your App a name, i.e `nuxt-app`, and click **Create App**.\n\n_You can add more regions to deploy your applications, set environment variables, and define the horizontal scaling according to your needs._\n\nYou will automatically be redirected to the Koyeb App page where you can follow the progress of your Nuxt application deployment. In a few seconds, once your app is deployed, click on the _Public URL_ ending with `koyeb.app`.\n\nYour Nuxt application is now running on Koyeb and benefits from native autoscaling, automatic HTTPS (SSL), auto-healing, and global load-balancing across our edge network.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"deploy-nuxt-on-koyeb-serverless-platform"},children:[{type:a,value:"Deploy Nuxt on Koyeb Serverless Platform"}]},{type:a,value:c},{type:b,tag:f,props:{class:"d-heading-description"},children:[{type:a,value:L}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fwww.koyeb.com",rel:[m,n,o],target:p},children:[{type:a,value:K}]},{type:a,value:" is a developer-friendly serverless platform to deploy apps globally. The platform lets you seamlessly run Docker containers, web apps, and APIs with git-based deployment, native autoscaling, a global edge network, and built-in service mesh and discovery."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"In this guide, we showcase how to dockerize and deploy a Nuxt application on the Koyeb platform."}]},{type:a,value:c},{type:b,tag:"prose-blockquote",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Koyeb allows you to deploy Docker containers from the registry of your choice. In this guide we use the Docker Hub to store our image but you are free to use the "},{type:b,tag:h,props:{href:"https:\u002F\u002Fdocs.github.com\u002Fen\u002Fpackages\u002Fworking-with-a-github-packages-registry\u002Fworking-with-the-container-registry",rel:[m,n,o],target:p},children:[{type:a,value:"GitHub Container Registry"}]},{type:a,value:", the "},{type:b,tag:h,props:{href:"https:\u002F\u002Fdocs.gitlab.com\u002Fee\u002Fuser\u002Fpackages\u002Fcontainer_registry\u002F",rel:[m,n,o],target:p},children:[{type:a,value:"GitLab Container Registry"}]},{type:a,value:" or any other container registry provider."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:z,props:{id:M},children:[{type:b,tag:h,props:{href:"#requirements"},children:[{type:a,value:N}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"To successfully follow and complete this guide, you need:"}]},{type:a,value:c},{type:b,tag:"prose-ol",props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:a,value:"A Nuxt project to deploy. You can use the "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcreate-nuxt-app",rel:[m,n,o],target:p},children:[{type:a,value:"create-nuxt-app"}]},{type:a,value:" to create a Nuxt project and get started"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:a,value:O},{type:b,tag:h,props:{href:"https:\u002F\u002Fapp.koyeb.com",rel:[m,n,o],target:p},children:[{type:a,value:"Koyeb account"}]},{type:a,value:" to deploy and run the dockerized Nuxt application"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:a,value:O},{type:b,tag:h,props:{href:"https:\u002F\u002Fhub.docker.com\u002F",rel:[m,n,o],target:p},children:[{type:a,value:"Docker Hub"}]},{type:a,value:" account to push the Docker image and deploy it on Koyeb"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:z,props:{id:P},children:[{type:b,tag:h,props:{href:"#getting-started"},children:[{type:a,value:Q}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"In your Nuxt application directory run the following command to install dependencies:"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:b,tag:u,props:{className:[v,A]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:d,props:{className:[e,R]},children:[{type:a,value:S}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Once the dependencies are installed, launch your application and ensure everything is working fine:"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:b,tag:u,props:{className:[v,A]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:d,props:{className:[e,R]},children:[{type:a,value:S}]},{type:a,value:" dev\n"}]}]}]},{type:a,value:c},{type:b,tag:z,props:{id:T},children:[{type:b,tag:h,props:{href:"#dockerize-your-application"},children:[{type:a,value:U}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"To Dockerize your Nuxt application, you need to create a "},{type:b,tag:q,props:{},children:[{type:a,value:"Dockerfile"}]},{type:a,value:" in your project directory containing the content below:"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:b,tag:u,props:{className:[v,"language-dockerfile"]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:V}]},{type:a,value:" node:lts "},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"as"}]},{type:a,value:" builder"}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:W}]},{type:a,value:X}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:Y}]},{type:a,value:" . ."}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:D}]},{type:a,value:" yarn install "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:l}]},{type:a,value:Z},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:l}]},{type:a,value:"\n  --frozen-lockfile "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:l}]},{type:a,value:_},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:l}]},{type:a,value:"\n  --production=false"}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:D}]},{type:a,value:" yarn build"}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:D}]},{type:a,value:" rm -rf node_modules && "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:l}]},{type:a,value:"\n  NODE_ENV=production yarn install "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:l}]},{type:a,value:Z},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:l}]},{type:a,value:"\n  --pure-lockfile "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:l}]},{type:a,value:_},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:l}]},{type:a,value:"\n  --production=true"}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:V}]},{type:a,value:" node:lts"}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:W}]},{type:a,value:X}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:Y}]},{type:a,value:" "},{type:b,tag:d,props:{className:[e,"options"]},children:[{type:b,tag:d,props:{className:[e,"property"]},children:[{type:a,value:"--from"}]},{type:b,tag:d,props:{className:[e,"punctuation"]},children:[{type:a,value:"="}]},{type:b,tag:d,props:{className:[e,E]},children:[{type:a,value:"builder"}]}]},{type:a,value:" \u002Fapp  ."}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"ENV"}]},{type:a,value:" HOST 0.0.0.0"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"EXPOSE"}]},{type:a,value:" 80"}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"CMD"}]},{type:a,value:" [ "},{type:b,tag:d,props:{className:[e,E]},children:[{type:a,value:"\"yarn\""}]},{type:a,value:", "},{type:b,tag:d,props:{className:[e,E]},children:[{type:a,value:"\"start\""}]},{type:a,value:" ]"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"To build the Docker image execute the following command:"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:b,tag:u,props:{className:[v,A]},children:[{type:b,tag:w,props:{},children:[{type:a,value:"docker build "},{type:b,tag:d,props:{className:[e,"builtin","class-name"]},children:[{type:a,value:x}]},{type:a,value:" -t "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:a,value:G},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:H}]},{type:a,value:I}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"This command will build the Docker image with the name \u003CYOUR_DOCKER_HUB\u003E\u002Fmy-nuxt-project. Once the build is over, you can run a container using the image locally to validate everything is working as expected running:"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:b,tag:u,props:{className:[v,A]},children:[{type:b,tag:w,props:{},children:[{type:a,value:"docker run -p "},{type:b,tag:d,props:{className:[e,"number"]},children:[{type:a,value:"3000"}]},{type:a,value:":3000 "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:a,value:G},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:H}]},{type:a,value:I}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Open your browser and navigate to "},{type:b,tag:h,props:{href:$,rel:[m,n,o],target:p},children:[{type:a,value:$}]},{type:a,value:" to view your project landing page."}]},{type:a,value:c},{type:b,tag:z,props:{id:aa},children:[{type:b,tag:h,props:{href:"#push-your-docker-image-to-a-container-registry"},children:[{type:a,value:ab}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Since our Docker image is built and functional in our test, we can now upload it to a container registry. In this documentation, we will store our image on the Docker Hub. In your terminal run the command below to push the image:"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:b,tag:u,props:{className:[v,A]},children:[{type:b,tag:w,props:{},children:[{type:a,value:"docker push "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:F}]},{type:a,value:G},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:H}]},{type:a,value:I}]}]}]},{type:a,value:c},{type:b,tag:z,props:{id:ac},children:[{type:b,tag:h,props:{href:"#deploy-the-nuxt-application-to-production-on-koyeb"},children:[{type:a,value:ad}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"On the Koyeb Control Panel, click the "},{type:b,tag:C,props:{},children:[{type:a,value:ae}]},{type:a,value:af}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"In the form, fill the "},{type:b,tag:q,props:{},children:[{type:a,value:"Docker image"}]},{type:a,value:" field with the name of the image we previously created which should look like "},{type:b,tag:q,props:{},children:[{type:a,value:"\u003CYOUR_DOCKER_HUB_USERNAME\u003E\u002Fmy-nuxt-project"}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Check the box "},{type:b,tag:q,props:{},children:[{type:a,value:"Use a private registry"}]},{type:a,value:" and, in the select field, click "},{type:b,tag:C,props:{},children:[{type:a,value:"Create Registry Secret"}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"A modal opens asking for:"}]},{type:a,value:c},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:a,value:"a name for the Secret which will be created, we can use for instance "},{type:b,tag:q,props:{},children:[{type:a,value:"docker-hub-secret"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:a,value:"the registry provider to generate the secret containing your private registry credentials, in our case Docker Hub"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:a,value:"your Docker Hub username and password. We recommend you to "},{type:b,tag:h,props:{href:"https:\u002F\u002Fhub.docker.com\u002Fsettings\u002Fsecurity",rel:[m,n,o],target:p},children:[{type:a,value:"generate an access token"}]},{type:a,value:" from the Docker Hub to use instead of your password.\nOnce you've filled all the fields, click the "},{type:b,tag:C,props:{},children:[{type:a,value:"Create"}]},{type:a,value:af},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"We don't need to change the "},{type:b,tag:J,props:{},children:[{type:a,value:"Path"}]},{type:a,value:", our app will be available at the root of our domain: "},{type:b,tag:q,props:{},children:[{type:a,value:"\u002F"}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Give your App a name, i.e "},{type:b,tag:q,props:{},children:[{type:a,value:"nuxt-app"}]},{type:a,value:", and click "},{type:b,tag:C,props:{},children:[{type:a,value:ae}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:J,props:{},children:[{type:a,value:"You can add more regions to deploy your applications, set environment variables, and define the horizontal scaling according to your needs."}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"You will automatically be redirected to the Koyeb App page where you can follow the progress of your Nuxt application deployment. In a few seconds, once your app is deployed, click on the "},{type:b,tag:J,props:{},children:[{type:a,value:"Public URL"}]},{type:a,value:" ending with "},{type:b,tag:q,props:{},children:[{type:a,value:"koyeb.app"}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Your Nuxt application is now running on Koyeb and benefits from native autoscaling, automatic HTTPS (SSL), auto-healing, and global load-balancing across our edge network."}]}]},toc:{title:ag,searchDepth:r,depth:r,links:[{id:M,depth:r,text:N},{id:P,depth:r,text:Q},{id:T,depth:r,text:U},{id:aa,depth:r,text:ab},{id:ac,depth:r,text:ad}]}}},templateOptions:{header:B,footer:B,aside:y,asideClass:ag,fluid:y,banner:B},_img:{"/_ipx/https://github.com/see.png%3Fsize=32":"\u002F_nuxt\u002Fimage\u002Fe5f29a.png"}}],fetch:{"AppLayout:0":{headerLinks:[{title:"Discover",items:[{title:ah,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:ai,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:aj,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:"Docs",subtitle:"Create fast websites easily",slug:"docs",to:ak,icon:"docs.svg",color:"bg-green-500"},{title:al,subtitle:"Understand everything in Nuxt",slug:"examples",to:am,icon:"examples.svg",color:"bg-green-600"},{title:an,subtitle:"Learn with concrete cases",slug:"tutorials",to:ao,icon:"tutorials.svg",color:"bg-green-700"},{title:ap,subtitle:"Learn more with experts",href:aq,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:ar,subtitle:"How to Deploy Nuxt",slug:"deployments",to:as,icon:"deployments.svg",color:"bg-indigo-light"},{title:at,subtitle:"Extend the power of Nuxt",href:au,icon:"modules.svg",color:"bg-indigo"},{title:av,subtitle:"Get started with themes",slug:"themes",to:aw,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:ax,subtitle:"Latest news about Nuxt",slug:"announcements",to:ay,icon:"announcements.svg",color:"bg-mint-lighter"},{title:az,subtitle:"They are Nuxt",slug:"teams",to:aA,icon:"teams.svg",color:"bg-mint-light"},{title:aB,subtitle:"All the code we have released",slug:"releases",to:aC,icon:"releases.svg",color:"bg-mint"},{title:aD,subtitle:"They trust us",slug:"sponsors",to:aE,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aF}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aF},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:ax,to:ay},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aD,to:aE},{title:az,to:aA},{title:an,to:ao},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:ak},{title:al,to:am},{title:ar,to:as},{title:ap,href:aq},{title:at,href:au},{title:aB,to:aC},{title:ah,to:ai},{title:av,to:aw}]}],showCookieBanner:y},"EditOnGithub:0":{link:"https:\u002F\u002Fgithub.com\u002Falisoft\u002Falisoft.dev\u002Fedit\u002Fmaster\u002Fcontent\u002Fzh\u002Fdeployments\u002Fkoyeb.md",contributors:[{name:"Kimmy",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F19725091?u=1e6c4f73bc640ea6c9deeb7bc4fa95bea7bd6337&v=4",login:"see"}]},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",aj,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","List","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable"])},mutations:[]}}("text","element","\n","span","token","prose-paragraph","operator","prose-a","keyword","instruction","\n\n","\\","nofollow","noopener","noreferrer","_blank","prose-code-inline",2,"prose-li","prose-code","pre","line-numbers","code",".",false,"prose-h2","language-bash",true,"prose-strong","RUN","string","\u003C","YOUR_DOCKER_HUB_USERNAME","\u003E","\u002Fmy-nuxt-project\n","prose-em","Koyeb","Deploy Nuxt on Koyeb Serverless Platform with Docker","requirements","Requirements","A ","getting-started","Getting started","function","yarn","dockerize-your-application","Dockerize your application","FROM","WORKDIR"," \u002Fapp","COPY","\n  --prefer-offline ","\n  --non-interactive ","http:\u002F\u002Flocalhost:3000","push-your-docker-image-to-a-container-registry","Push your Docker image to a container registry","deploy-the-nuxt-application-to-production-on-koyeb","Deploy the Nuxt application to production on Koyeb","Create App"," button.","","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));