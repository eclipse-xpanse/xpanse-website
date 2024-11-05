"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[3238],{612:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"configuration-language","title":"Configuration Language","description":"A native fully managed service is described using xpanse Service Description Language","source":"@site/docs/configuration-language.mdx","sourceDirName":".","slug":"/configuration-language","permalink":"/xpanse/docs/configuration-language","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Authentication and Authorization","permalink":"/xpanse/docs/authentication-authorization"},"next":{"title":"Cloud Provider Credentials","permalink":"/xpanse/docs/cloud-provider-credentials"}}');var a=i(4848),r=i(8453),s=i(2585);const l={sidebar_position:4},o="Configuration Language",c={},d=[{value:"Deployment Scripts",id:"deployment-scripts",level:3},{value:"Flavors",id:"flavors",level:3},{value:"Flavor properties",id:"flavor-properties",level:3},{value:"Deployment Variables",id:"deployment-variables",level:3},{value:"Availability Zones",id:"availability-zones",level:3},{value:"ISV Contact Details",id:"isv-contact-details",level:3},{value:"Register Service templates",id:"register-service-templates",level:2},{value:"Service Template Registration Sequence",id:"service-template-registration-sequence",level:3}];function p(e){const n={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"configuration-language",children:"Configuration Language"})}),"\n",(0,a.jsx)(n.p,{children:"A native fully managed service is described using xpanse Service Description Language\n(XSDL)."}),"\n",(0,a.jsx)(n.p,{children:"XSDL is a YAML based description language which fully describes the service\nwith the details necessary to configure cloud management systems to offer the service as a native fully managed service\nand the way to deploy and manage full life-cycle of the service."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"components described in a service template",src:i(1664).A+"",width:"1202",height:"809"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Note: Examples of managed services described using XSDL for multiple clouds can be found in the"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(s.A,{name:"samples repository",url:"https://github.com/eclipse-xpanse/xpanse-samples/tree/main"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"deployment-scripts",children:"Deployment Scripts"}),"\n",(0,a.jsx)(n.p,{children:"In XSDL, the deployer can contain the script that must be executed for provisioning the managed service.\nCurrently, the only allowed script is Terraform."}),"\n",(0,a.jsx)(n.h3,{id:"flavors",children:"Flavors"}),"\n",(0,a.jsx)(n.p,{children:"For each managed service, we can define different flavors of it. For example, different sizes of the VM, etc. End user\ncan then select the flavor of their preference for the service while ordering."}),"\n",(0,a.jsx)(n.h3,{id:"flavor-properties",children:"Flavor properties"}),"\n",(0,a.jsx)(n.p,{children:"Flavors can have properties which can be simply declared and referred in the deployment script too with the same\nproperty names. Runtime will ensure that these variables are automatically available for the deployment scripts"}),"\n",(0,a.jsx)(n.h3,{id:"deployment-variables",children:"Deployment Variables"}),"\n",(0,a.jsxs)(n.p,{children:["As part of the XSDL, the managed service provider can define variables that can be either entered by the user or\navailable as defaults or variables that can be read for any other sources such as the environment variables. All possible types of variables are defined\nhere ",(0,a.jsx)(s.A,{name:"Deployment Variables",url:"https://github.com/eclipse-xpanse/xpanse/blob/main/modules/models/src/main/java/org/eclipse/xpanse/modules/models/servicetemplate/DeployVariable.java"}),"\nThe variables can then be used in the deployment scripts."]}),"\n",(0,a.jsx)(n.h3,{id:"availability-zones",children:"Availability Zones"}),"\n",(0,a.jsx)(n.p,{children:"OCL provides a way to define if the service supports deploying on availability zones which the end user wishes."}),"\n",(0,a.jsx)(n.p,{children:"Or even if the service needs the end user to select multiple availability zones, even that's possible. The availability zone information can be directly injected into deployment scripts."}),"\n",(0,a.jsx)(n.h3,{id:"isv-contact-details",children:"ISV Contact Details"}),"\n",(0,a.jsx)(n.p,{children:"Each ISV can provide their support contacts as part of OCL. This can then be used by end user or the CSP in case of issues with the service deployment or managing the service after deployment."}),"\n",(0,a.jsx)(n.h2,{id:"register-service-templates",children:"Register Service templates"}),"\n",(0,a.jsx)(n.p,{children:"xpanse provides different options to register service templates defined using XSDL:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"REST API on the xpanse runtime"}),"\n",(0,a.jsx)(n.li,{children:"xpanse UI"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"service-template-registration-sequence",children:"Service Template Registration Sequence"}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n    actor ISV\n    box Service Template Registration\n    participant Register Service API\n    participant Orchestrator\n    participant Database\n    end\n    box Service Review\n    participant Review Service API\n    participant CSP\n    end\n    box Service Template Configuration\n    participant Plugin\n    participant cloud management systems\n    end\n    ISV --\x3e> Register Service API: Register service template\n    Register Service API --\x3e> Orchestrator: Validate request.\n    Orchestrator --\x3e> Orchestrator: Check if service auto-approve is enabled\n     alt auto-approve enabled\n        Orchestrator --\x3e> Database: service approved and stored.\n    else auto-approve disabled\n        Orchestrator --\x3e> Database: service queued for approval and stored.\n        Orchestrator --\x3e> CSP: Review service request\n        alt service rejected by CSP\n            CSP --\x3e> Review Service API: Reject service\n            Review Service API --\x3e> Orchestrator: Update service status to rejected.\n        else service approved by CSP\n            CSP --\x3e> Review Service API: Review and approve service.\n            Review Service API --\x3e> Orchestrator: Approve service\n            critical create service in CSP's catalog\n                Orchestrator --\x3e> Plugin: configure service template\n                Plugin --\x3e> cloud management systems: configure service in all necessary systems\n            end\n        end\n    end"})]})}function v(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},2585:(e,n,i)=>{i.d(n,{A:()=>a});i(6540);var t=i(4848);function a(e){let{name:n,url:i,isOpenInNewTab:a=!0}=e;return(0,t.jsx)("a",{href:i,className:"link-text",target:a?"_blank":"_self",children:n})}},1664:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/service-template-components.excalidraw-752370cd74ae1114f886ac974ed6e23e.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(6540);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);