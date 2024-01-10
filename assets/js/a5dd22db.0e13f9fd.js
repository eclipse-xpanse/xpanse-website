"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[1311],{5439:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(5893),s=t(1151),o=t(6367);const i={sidebar_position:8},a="Service Deployment",c={id:"service-deployment",title:"Service Deployment",description:"Xpanse aims to unify the service deployment on any cloud by re-using already available cloud infrastructure management tools such",source:"@site/docs/service-deployment.mdx",sourceDirName:".",slug:"/service-deployment",permalink:"/xpanse/docs/service-deployment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Runtime",permalink:"/xpanse/docs/runtime"},next:{title:"Supported Clouds",permalink:"/xpanse/docs/supported-clouds"}},d={},l=[{value:"Asynchronous Processing",id:"asynchronous-processing",level:2},{value:"Terraform",id:"terraform",level:2},{value:"Terraform Boot",id:"terraform-boot",level:3},{value:"Script Validation",id:"script-validation",level:3},{value:"Script Execution",id:"script-execution",level:3},{value:"Reading Script Output",id:"reading-script-output",level:3},{value:"Capturing Service Details",id:"capturing-service-details",level:3},{value:"Version Configuration For Terraform Providers",id:"version-configuration-for-terraform-providers",level:3},{value:"The Version Key Of The Terraform Providers",id:"the-version-key-of-the-terraform-providers",level:4},{value:"How To Configure The Version of Terraform Providers",id:"how-to-configure-the-version-of-terraform-providers",level:4}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"service-deployment",children:"Service Deployment"}),"\n",(0,n.jsx)(r.p,{children:"Xpanse aims to unify the service deployment on any cloud by re-using already available cloud infrastructure management tools such\nas Terraform, Pulumi, etc., in the market."}),"\n",(0,n.jsx)(r.p,{children:"Service Deployment involves the following tasks"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"The service provider must provide the script that must be executed to create the cloud resources\nrequired for running the service. The script must be provided as part of the service template."}),"\n",(0,n.jsx)(r.li,{children:"Install the software and configurations needed for running the service."}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Note: At the moment, only Terraform is supported by Xpanse for service deployment. We plan to add support for other\ndeployment tools in the upcoming releases."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"asynchronous-processing",children:"Asynchronous Processing"}),"\n",(0,n.jsx)(r.p,{children:"Since a service deployment can take longer depending on the complexity of the service and the resources required for it,\nthe entire deployment process is implemented to run asynchronously."}),"\n",(0,n.jsxs)(r.p,{children:["After the ",(0,n.jsx)(r.code,{children:"deploy"})," or the ",(0,n.jsx)(r.code,{children:"destroy"})," request is submitted, the runtime validates the request and the client receives an\naccepted/rejected message synchronously. After this, the runtime hands over the deployment request to another thread which executes the deployment independently."]}),"\n",(0,n.jsxs)(r.p,{children:["The clients can then fetch the status of the deployment using ",(0,n.jsx)(r.code,{children:"getDeployedServiceDetailsById"})," service."]}),"\n",(0,n.jsx)(r.h2,{id:"terraform",children:"Terraform"}),"\n",(0,n.jsxs)(r.p,{children:["Terraform script that must be executed must be passed as is, in the service definition when the service is registered.\nYou can find examples of how the script can look like in\nthe ",(0,n.jsx)(o.Z,{name:"samples",url:"https://github.com/eclipse-xpanse/xpanse/tree/main/samples"})," folder."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Terraform"})," binaries must be installed on the system where runtime is running. Or use our docker image, which\ncontains all required software installed."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"terraform-boot",children:"Terraform Boot"}),"\n",(0,n.jsxs)(r.p,{children:["To offload the service deployment tasks from the Xpanse's main runtime engine, we created a project called ",(0,n.jsx)(o.Z,{name:"terraform-boot",url:"https://github.com/eclipse-xpanse/terraform-boot"}),".\nWe used this application for all our Terraform related tasks."]}),"\n",(0,n.jsx)(r.h3,{id:"script-validation",children:"Script Validation"}),"\n",(0,n.jsx)(r.p,{children:"As part of the service registration process, Xpanse validates the syntax of the Terraform script provided. The service\nis registered only when the script validation is successful."}),"\n",(0,n.jsxs)(r.p,{children:["We use the Terraform ",(0,n.jsx)(o.Z,{name:"validate",url:"https://developer.hashicorp.com/terraform/cli/commands/validate"})," feature to achieve\nthis."]}),"\n",(0,n.jsx)(r.h3,{id:"script-execution",children:"Script Execution"}),"\n",(0,n.jsx)(r.p,{children:"When the customer orders the service, the following happens"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Generate a unique ID for the service requested. This is based on UUID."}),"\n",(0,n.jsx)(r.li,{children:"Create a folder with this ID as the name."}),"\n",(0,n.jsxs)(r.li,{children:["From the runtime, call the start the Terraform process outside the JVM to do the following","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Inside the folder, the runtime will then create a Terraform workspace."}),"\n",(0,n.jsx)(r.li,{children:"Execute the Terraform scripts"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Note: To avoid dependency on the filesystem, the state ",(0,n.jsx)(r.code,{children:"terraform.tfstate"})," file contents are copied to the database at\nthe end of the service deployment. We reuse this later when the customer requests to destroy the service."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"reading-script-output",children:"Reading Script Output"}),"\n",(0,n.jsxs)(r.p,{children:["After the runtime starts the Terraform script as a system command, it then starts to listen to ",(0,n.jsx)(r.code,{children:"stdout"})," and ",(0,n.jsx)(r.code,{children:"stderr"})," of\nthe job to gather all output generated from the script."]}),"\n",(0,n.jsx)(r.h3,{id:"capturing-service-details",children:"Capturing Service Details"}),"\n",(0,n.jsx)(r.p,{children:"For any service ordered by the customer, it is important to return the details of the ordered service. Such as the IPs,\ncredentials, etc. which the customer must use to start consuming the service."}),"\n",(0,n.jsxs)(r.p,{children:["We use the\nTerraform ",(0,n.jsx)(r.code,{children:"output"})," ",(0,n.jsx)(o.Z,{name:"feature",url:"https://developer.hashicorp.com/terraform/tutorials/configuration-language/outputs"})," to get\nsuch information from the service deployment. So it is important to add the ",(0,n.jsx)(r.code,{children:"output"})," section to the scripts. The same\nis also used by the Xpanse UI for displaying the service details."]}),"\n",(0,n.jsx)(r.h3,{id:"version-configuration-for-terraform-providers",children:"Version Configuration For Terraform Providers"}),"\n",(0,n.jsxs)(r.p,{children:["Xpanse currently uses Terraform to orchestrate resources on cloud providers, but versions of\nTerraform for cloud providers are in constant iteration. In order to configure the Terraform version\nof the cloud providers more conveniently and quickly, you can configure the Terraform version of the\ncloud providers in\nthe ",(0,n.jsx)(o.Z,{name:"xpanse configuration file",url:"https://github.com/eclipse-xpanse/xpanse/blob/main/runtime/src/main/resources/application.properties"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"the-version-key-of-the-terraform-providers",children:"The Version Key Of The Terraform Providers"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Terraform Providers"}),(0,n.jsx)(r.th,{children:"key"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"AWS"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"terraform.provider.aws.version"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"HuaweiCloud"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"terraform.provider.huaweicloud.version"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"OpenStack"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"terraform.provider.openstack.version"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"FlexibleEngine"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"terraform.provider.flexibleengine.version"})})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"how-to-configure-the-version-of-terraform-providers",children:"How To Configure The Version of Terraform Providers"}),"\n",(0,n.jsxs)(r.p,{children:["For how to configure the version value of Terraform Providers, please refer to the chapter of\n",(0,n.jsx)(r.code,{children:"Version Constraints"})," in ",(0,n.jsx)(r.a,{href:"https://developer.hashicorp.com/terraform/language/providers/requirements#version-constraints",children:"https://developer.hashicorp.com/terraform/language/providers/requirements#version-constraints"})]}),"\n",(0,n.jsx)(r.p,{children:"The following are some examples, please refer to"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-properties",children:"terraform.provider.aws.version=~> 4.0\nterraform.provider.openstack.version=>= 1.48.0\nterraform.provider.flexibleengine.version=>= 1.30.0\nterraform.provider.huaweicloud.version=~> 1.51.0\n"})})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},6367:(e,r,t)=>{t.d(r,{Z:()=>s});t(7294);var n=t(5893);function s(e){let{name:r,url:t,isOpenInNewTab:s=!0}=e;return(0,n.jsx)("a",{href:t,className:"link-text",target:s?"_blank":"_self",children:r})}},1151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>i});var n=t(7294);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);