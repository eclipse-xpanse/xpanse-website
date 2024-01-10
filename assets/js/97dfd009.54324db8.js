"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[866],{9975:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=i(5893),t=i(1151),a=i(6367);const r={sidebar_position:10},o="UI",l={id:"ui",title:"UI",description:"This is the frontend for the Xpanse project which allows cloud service providers to register managed services to the",source:"@site/docs/ui.mdx",sourceDirName:".",slug:"/ui",permalink:"/xpanse/docs/ui",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Supported Clouds",permalink:"/xpanse/docs/supported-clouds"},next:{title:"New Developers",permalink:"/xpanse/docs/Contribute/new-developers"}},c={},d=[{value:"Development Setup",id:"development-setup",level:2},{value:"Zitadel Configuration",id:"zitadel-configuration",level:2},{value:"Configuration Properties",id:"configuration-properties",level:2},{value:"Setting Configuration Values",id:"setting-configuration-values",level:3},{value:".env Files",id:"env-files",level:4},{value:"Environment Variables",id:"environment-variables",level:4},{value:"Getting Configuration Values",id:"getting-configuration-values",level:3},{value:"Starting local development server",id:"starting-local-development-server",level:2},{value:"Static Code Analysis",id:"static-code-analysis",level:3},{value:"Code Formatting",id:"code-formatting",level:3},{value:"Generate Rest Client for Xpanse API",id:"generate-rest-client-for-xpanse-api",level:3},{value:"Build for production",id:"build-for-production",level:2},{value:"Docker Image",id:"docker-image",level:2},{value:"Run UI Container",id:"run-ui-container",level:3},{value:"Application Logs",id:"application-logs",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ui",children:"UI"}),"\n",(0,s.jsx)(n.p,{children:"This is the frontend for the Xpanse project which allows cloud service providers to register managed services to the\nservice catalog and also for end users to deploy services from the service catalog and manage them."}),"\n",(0,s.jsx)(n.h2,{id:"development-setup",children:"Development Setup"}),"\n",(0,s.jsxs)(n.p,{children:["Project is built using ",(0,s.jsx)(n.code,{children:"ReactJS"})," library. As we use ",(0,s.jsx)(n.code,{children:"TypeScript"})," here, we must ensure all objects have its type explicit\ndefined."]}),"\n",(0,s.jsxs)(n.p,{children:["GUI components are built using ",(0,s.jsx)(n.code,{children:"antd"})," library."]}),"\n",(0,s.jsxs)(n.p,{children:["Authentication and authorization are built using ",(0,s.jsx)(n.code,{children:"Zitadel"})," which is an oauth2 provider."]}),"\n",(0,s.jsx)(n.h2,{id:"zitadel-configuration",children:"Zitadel Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Before we can start using the UI, we must ensure ",(0,s.jsx)(n.code,{children:"Zitadel"})," instance that we consider using,\nhas all the required configuration. Details can be found ",(0,s.jsx)(a.Z,{name:"here",url:"https://github.com/eclipse-xpanse/xpanse-iam/blob/main/zitadel/terraform/README.md"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-properties",children:"Configuration Properties"}),"\n",(0,s.jsxs)(n.p,{children:["All required configuration parameters must be added to .env\nfile ",(0,s.jsx)(a.Z,{name:"here",url:"https://github.com/eclipse-xpanse/xpanse-ui/blob/main/.env"}),".\nEven if we do not have a valid default value, we must just add empty value.\nThis file serves as a reference to all required properties."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Very Important"}),": Since React is compiled to a static app, all configuration values can be seen directly in the\nbrowser too.\nTherefore, no secure configurations such as passwords, keys, etc. must be added here."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"setting-configuration-values",children:"Setting Configuration Values"}),"\n",(0,s.jsx)(n.h4,{id:"env-files",children:".env Files"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Set values in the .env files.\nAll default values are set in .env files.\nThese are automatically loaded by ",(0,s.jsx)(n.code,{children:"React"})," and there is no need to do anything for this to be loaded."]}),"\n",(0,s.jsxs)(n.li,{children:["For non-default properties or to override the values is .env, we can set the values in new .env files and load them\nusing ",(0,s.jsx)(n.code,{children:"env-cmd"})," framework which will automatically inject the variables.\nExample can be\nfound ",(0,s.jsx)(a.Z,{name:"here",url:"https://github.com/eclipse-xpanse/xpanse-ui/blob/main/package.json#L25"})]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important"}),": .env files must be used only for default configurations or for dev configurations values."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,s.jsxs)(n.p,{children:["All variables can be overridden by setting environment variables and then running the ",(0,s.jsx)(n.code,{children:"npm run start"})," for development or\nwith ",(0,s.jsx)(n.code,{children:"docker run"})," for production."]}),"\n",(0,s.jsx)(n.h3,{id:"getting-configuration-values",children:"Getting Configuration Values"}),"\n",(0,s.jsx)(n.p,{children:"We have a custom implementation which reads the configuration from all sources and provides a unified configuration map.\nOnly this must be used for reading configuration from the React app."}),"\n",(0,s.jsxs)(n.p,{children:["Implementation can be found ",(0,s.jsx)(a.Z,{name:"here",url:"https://github.com/eclipse-xpanse/xpanse-ui/blob/main/src/config/config.ts#L16"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"starting-local-development-server",children:"Starting local development server"}),"\n",(0,s.jsxs)(n.p,{children:["In the project directory, you can run the below command to start the local development server. This also additionally\nneeds ",(0,s.jsx)(n.code,{children:"nodejs"})," to be installed on the development machine."]}),"\n",(0,s.jsxs)(n.p,{children:["If there is a local development Zitadel instance and backend API instance, then we must\nset ",(0,s.jsx)(n.code,{children:"REACT_APP_ZITADEL_CLIENT_ID"})," and ",(0,s.jsx)(n.code,{children:"REACT_APP_XPANSE_API_URL"})," environment variables with respective values\nand then run the below command for the application to start."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ npm run start\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you wish to use our central Zitadel testbed instance, then simply start the application with the below command."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ npm run start-with-zitadel-testbed\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," to view it in the browser."]}),"\n",(0,s.jsx)(n.h3,{id:"static-code-analysis",children:"Static Code Analysis"}),"\n",(0,s.jsxs)(n.p,{children:["We use ",(0,s.jsx)(n.code,{children:"eslint"})," and ",(0,s.jsx)(n.code,{children:"knip"})," to statically analyze code.\nAlways run the below command locally to ensure the changes made results in no errors. This will also validate the code\nformat.\nIn case of any errors, the CI pipeline will fail when a PR is opened."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:" npx eslint . --ext .js,.jsx,.ts,.tsx --config package.json --max-warnings=0\n npx knip\n"})}),"\n",(0,s.jsx)(n.h3,{id:"code-formatting",children:"Code Formatting"}),"\n",(0,s.jsxs)(n.p,{children:["We use ",(0,s.jsx)(n.code,{children:"prettier"})," to format our UI code. To auto format the code, you can run the below command."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npx prettier --config .prettierrc --write .\n"})}),"\n",(0,s.jsx)(n.h3,{id:"generate-rest-client-for-xpanse-api",children:"Generate Rest Client for Xpanse API"}),"\n",(0,s.jsx)(n.p,{children:"We use the openapi generator to generate data models and rest client from the openapi json file.\nThe following steps must be followed to generate a new client and data models whenever there is a new version if the\nswagger json."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Copy the openapi file\nto ",(0,s.jsx)(a.Z,{name:"OpenApi JSON File",url:"https://github.com/eclipse-xpanse/xpanse-ui/blob/main/src/xpanse-api/api.json"})]}),"\n",(0,s.jsxs)(n.li,{children:["Run the code generator as below","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"    cd src/xpanse-api\n    npx openapi-typescript-codegen --input api.json --output ./generated --exportSchemas false\n"})}),"\n","This step will generate all required models and client"]}),"\n",(0,s.jsx)(n.li,{children:"Add license headers."}),"\n",(0,s.jsx)(n.li,{children:"Format newly generated files."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"build-for-production",children:"Build for production"}),"\n",(0,s.jsx)(n.p,{children:"The only recommended way to run UI in production is to use the docker image"}),"\n",(0,s.jsx)(n.h2,{id:"docker-image",children:"Docker Image"}),"\n",(0,s.jsx)(n.p,{children:"Docker image for the UI project is based on nginx base image. This is because the project only serves static content."}),"\n",(0,s.jsxs)(n.p,{children:["As part of our UI release process, we deliver our official images to GitHub packages.\nAll available images can be found ",(0,s.jsx)(a.Z,{name:"here",url:"https://github.com/orgs/eclipse-xpanse/packages?tab=packages&q=xpanse-ui"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"run-ui-container",children:"Run UI Container"}),"\n",(0,s.jsxs)(n.p,{children:["Container runs the application on port ",(0,s.jsx)(n.code,{children:"3000"})," by default and exposes the UI using HTTP.\nWe must use another SSL load balancer to expose the UI for end users."]}),"\n",(0,s.jsxs)(n.p,{children:["Production configuration values must be passed as environment variables to docker run for the below vars using ",(0,s.jsx)(n.code,{children:"-e"})," option."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dotenv",children:"REACT_APP_ZITADEL_AUTHORITY_NAME # URL for the Oauth provider\nREACT_APP_ZITADEL_CLIENT_ID # Client ID provided by the Oauth provider for UI\nREACT_APP_XPANSE_API_URL # Backend API URL\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker pull ghcr.io/eclipse-xpanse/xpanse-ui:${version}\ndocker run -d --name ui xpanse-ui\n"})}),"\n",(0,s.jsx)(n.h3,{id:"application-logs",children:"Application Logs"}),"\n",(0,s.jsx)(n.p,{children:"All logs from nginx are routed to stdout by default. Using the below command, all application logs can be viewed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker logs ui\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},6367:(e,n,i)=>{i.d(n,{Z:()=>t});i(7294);var s=i(5893);function t(e){let{name:n,url:i,isOpenInNewTab:t=!0}=e;return(0,s.jsx)("a",{href:i,className:"link-text",target:t?"_blank":"_self",children:n})}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var s=i(7294);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);