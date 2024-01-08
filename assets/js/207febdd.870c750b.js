"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[9437],{5367:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=i(5893),r=i(1151);const s={sidebar_position:4},t="Configuration Language",o={id:"configuration-language",title:"Configuration Language",description:"A managed service is described using Xpanse Service Description Language",source:"@site/docs/configuration-language.md",sourceDirName:".",slug:"/configuration-language",permalink:"/xpanse/docs/configuration-language",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Authentication and Authorization",permalink:"/xpanse/docs/authentication-authorization"},next:{title:"Cloud Provider Credentials",permalink:"/xpanse/docs/cloud-provider-credentials"}},l={},c=[{value:"Deployment Scripts",id:"deployment-scripts",level:3},{value:"Flavors",id:"flavors",level:3},{value:"Flavor properties",id:"flavor-properties",level:3},{value:"Deployment Variables",id:"deployment-variables",level:3},{value:"XSDL loading",id:"xsdl-loading",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"configuration-language",children:"Configuration Language"}),"\n",(0,a.jsx)(n.p,{children:"A managed service is described using Xpanse Service Description Language\n(XSDL)."}),"\n",(0,a.jsx)(n.p,{children:"XSDL is a yaml descriptor of a managed service which fully describes the service and the way to deploy the service."}),"\n",(0,a.jsxs)(n.p,{children:["Examples of managed services described using XSDL for multiple clouds can be found ",(0,a.jsx)(n.a,{href:"https://github.com/eclipse-xpanse/xpanse/tree/main/samples",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"deployment-scripts",children:"Deployment Scripts"}),"\n",(0,a.jsx)(n.p,{children:"In XSDL, the deployer can contain the script that must be executed for provisioning the managed service.\nCurrently, the only allowed script is Terraform."}),"\n",(0,a.jsx)(n.h3,{id:"flavors",children:"Flavors"}),"\n",(0,a.jsx)(n.p,{children:"For each managed service, we can define different flavors of it. For example, different sizes of the VM, etc. End user\ncan then select the flavor of their preference for the service while ordering."}),"\n",(0,a.jsx)(n.h3,{id:"flavor-properties",children:"Flavor properties"}),"\n",(0,a.jsx)(n.p,{children:"Flavors can have properties which can be simply declared and referred in the deployment script too with the same\nproperty names. Runtime will ensure that these variables are automatically available for the deployment scripts"}),"\n",(0,a.jsx)(n.h3,{id:"deployment-variables",children:"Deployment Variables"}),"\n",(0,a.jsxs)(n.p,{children:["As part of the XSDL, the managed service provider can define variables that can be either entered by the user or\navailable as defaults or variables that can be read for any other sources such as the environment variables. All possible types of variables are defined\nhere ",(0,a.jsx)(n.a,{href:"https://github.com/eclipse-xpanse/xpanse/blob/main/modules/models/src/main/java/org/eclipse/xpanse/modules/models/service/register/DeployVariable.java",children:"Deployment Variables"}),"\nThe variables can then be used in the deployment scripts."]}),"\n",(0,a.jsx)(n.h2,{id:"xsdl-loading",children:"XSDL loading"}),"\n",(0,a.jsx)(n.p,{children:"Xpanse provides different options to register service templates defined using XSDL:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"REST API on the xpanse runtime"}),"\n",(0,a.jsx)(n.li,{children:"Xpanse UI"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>t});var a=i(7294);const r={},s=a.createContext(r);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);