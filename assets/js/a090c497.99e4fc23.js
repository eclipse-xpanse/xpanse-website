"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[4952],{5221:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=i(5893),t=i(1151),s=i(6367);const r={sidebar_position:4},l="Configuration Language",o={id:"configuration-language",title:"Configuration Language",description:"A managed service is described using xpanse Service Description Language",source:"@site/docs/configuration-language.mdx",sourceDirName:".",slug:"/configuration-language",permalink:"/xpanse/docs/configuration-language",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Authentication and Authorization",permalink:"/xpanse/docs/authentication-authorization"},next:{title:"Cloud Provider Credentials",permalink:"/xpanse/docs/cloud-provider-credentials"}},c={},d=[{value:"Deployment Scripts",id:"deployment-scripts",level:3},{value:"Flavors",id:"flavors",level:3},{value:"Flavor properties",id:"flavor-properties",level:3},{value:"Deployment Variables",id:"deployment-variables",level:3},{value:"Availability Zones",id:"availability-zones",level:3},{value:"ISV Contact Details",id:"isv-contact-details",level:3},{value:"XSDL loading",id:"xsdl-loading",level:2}];function p(e){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"configuration-language",children:"Configuration Language"}),"\n",(0,a.jsx)(n.p,{children:"A managed service is described using xpanse Service Description Language\n(XSDL)."}),"\n",(0,a.jsx)(n.p,{children:"XSDL is a yaml descriptor of a managed service which fully describes the service and the way to deploy the service."}),"\n",(0,a.jsxs)(n.p,{children:["Examples of managed services described using XSDL for multiple clouds can be found ",(0,a.jsx)(s.Z,{name:"here",url:"https://github.com/eclipse-xpanse/xpanse/tree/main/samples"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"deployment-scripts",children:"Deployment Scripts"}),"\n",(0,a.jsx)(n.p,{children:"In XSDL, the deployer can contain the script that must be executed for provisioning the managed service.\nCurrently, the only allowed script is Terraform."}),"\n",(0,a.jsx)(n.h3,{id:"flavors",children:"Flavors"}),"\n",(0,a.jsx)(n.p,{children:"For each managed service, we can define different flavors of it. For example, different sizes of the VM, etc. End user\ncan then select the flavor of their preference for the service while ordering."}),"\n",(0,a.jsx)(n.h3,{id:"flavor-properties",children:"Flavor properties"}),"\n",(0,a.jsx)(n.p,{children:"Flavors can have properties which can be simply declared and referred in the deployment script too with the same\nproperty names. Runtime will ensure that these variables are automatically available for the deployment scripts"}),"\n",(0,a.jsx)(n.h3,{id:"deployment-variables",children:"Deployment Variables"}),"\n",(0,a.jsxs)(n.p,{children:["As part of the XSDL, the managed service provider can define variables that can be either entered by the user or\navailable as defaults or variables that can be read for any other sources such as the environment variables. All possible types of variables are defined\nhere ",(0,a.jsx)(s.Z,{name:"Deployment Variables",url:"https://github.com/eclipse-xpanse/xpanse/blob/main/modules/models/src/main/java/org/eclipse/xpanse/modules/models/servicetemplate/DeployVariable.java"}),"\nThe variables can then be used in the deployment scripts."]}),"\n",(0,a.jsx)(n.h3,{id:"availability-zones",children:"Availability Zones"}),"\n",(0,a.jsx)(n.p,{children:"OCL provides a way to define if the service supports deploying on availability zones which the end user wishes."}),"\n",(0,a.jsx)(n.p,{children:"Or even if the service needs the end user to select multiple availability zones, even that's possible. The availability zone information can be directly injected into deployment scripts."}),"\n",(0,a.jsx)(n.h3,{id:"isv-contact-details",children:"ISV Contact Details"}),"\n",(0,a.jsx)(n.p,{children:"Each ISV can provide their support contacts as part of OCL. This can then be used by end user or the CSP in case of issues with the service deployment or managing the service after deployment."}),"\n",(0,a.jsx)(n.h2,{id:"xsdl-loading",children:"XSDL loading"}),"\n",(0,a.jsx)(n.p,{children:"xpanse provides different options to register service templates defined using XSDL:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"REST API on the xpanse runtime"}),"\n",(0,a.jsx)(n.li,{children:"xpanse UI"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},6367:(e,n,i)=>{i.d(n,{Z:()=>t});i(7294);var a=i(5893);function t(e){let{name:n,url:i,isOpenInNewTab:t=!0}=e;return(0,a.jsx)("a",{href:i,className:"link-text",target:t?"_blank":"_self",children:n})}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var a=i(7294);const t={},s=a.createContext(t);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);