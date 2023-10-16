"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[9782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:9},i="Service Deployment",s={unversionedId:"service-deployment",id:"service-deployment",title:"Service Deployment",description:"Xpanse aims to unify the service deployment on any cloud by re-using already available cloud infrastructure management tools such",source:"@site/docs/service-deployment.md",sourceDirName:".",slug:"/service-deployment",permalink:"/xpanse/docs/service-deployment",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Supported Clouds",permalink:"/xpanse/docs/supported-clouds"},next:{title:"UI",permalink:"/xpanse/docs/ui"}},l={},p=[{value:"Asynchronous Processing",id:"asynchronous-processing",level:2},{value:"Terraform",id:"terraform",level:2},{value:"Terraform Boot",id:"terraform-boot",level:3},{value:"Script Validation",id:"script-validation",level:3},{value:"Script Execution",id:"script-execution",level:3},{value:"Reading Script Output",id:"reading-script-output",level:3},{value:"Capturing Service Details",id:"capturing-service-details",level:3},{value:"Version Configuration For Terraform Providers",id:"version-configuration-for-terraform-providers",level:3},{value:"The Version Key Of The Terraform Providers",id:"the-version-key-of-the-terraform-providers",level:4},{value:"How To Configure The Version of Terraform Providers",id:"how-to-configure-the-version-of-terraform-providers",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"service-deployment"},"Service Deployment"),(0,o.kt)("p",null,"Xpanse aims to unify the service deployment on any cloud by re-using already available cloud infrastructure management tools such\nas Terraform, Pulumi, etc., in the market."),(0,o.kt)("p",null,"Service Deployment involves the following tasks"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The service provider must provide the script that must be executed to create the cloud resources\nrequired for running the service. The script must be provided as part of the service template."),(0,o.kt)("li",{parentName:"ol"},"Install the software and configurations needed for running the service.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: At the moment, only Terraform is supported by Xpanse for service deployment. We plan to add support for other\ndeployment tools in the upcoming releases.")),(0,o.kt)("h2",{id:"asynchronous-processing"},"Asynchronous Processing"),(0,o.kt)("p",null,"Since a service deployment can take longer depending on the complexity of the service and the resources required for it,\nthe entire deployment process is implemented to run asynchronously."),(0,o.kt)("p",null,"After the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," or the ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy")," request is submitted, the runtime validates the request and the client receives an\naccepted/rejected message synchronously. After this, the runtime hands over the deployment request to another thread which executes the deployment independently."),(0,o.kt)("p",null,"The clients can then fetch the status of the deployment using ",(0,o.kt)("inlineCode",{parentName:"p"},"getDeployedServiceDetailsById")," service."),(0,o.kt)("h2",{id:"terraform"},"Terraform"),(0,o.kt)("p",null,"Terraform script that must be executed must be passed as is, in the service definition when the service is registered.\nYou can find examples of how the script can look like in\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-xpanse/xpanse/tree/main/samples"},"samples'")," folder."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Terraform")," binaries must be installed on the system where runtime is running. Or use our docker image, which\ncontains all required software installed.")),(0,o.kt)("h3",{id:"terraform-boot"},"Terraform Boot"),(0,o.kt)("p",null,"To offload the service deployment tasks from the Xpanse's main runtime engine, we created a project called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-xpanse/terraform-boot"},"terraform-boot"),".\nWe used this application for all our Terraform related tasks."),(0,o.kt)("h3",{id:"script-validation"},"Script Validation"),(0,o.kt)("p",null,"As part of the service registration process, Xpanse validates the syntax of the Terraform script provided. The service\nis registered only when the script validation is successful."),(0,o.kt)("p",null,"We use the Terraform ",(0,o.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/cli/commands/validate"},"validate")," feature to achieve\nthis."),(0,o.kt)("h3",{id:"script-execution"},"Script Execution"),(0,o.kt)("p",null,"When the customer orders the service, the following happens"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Generate a unique ID for the service requested. This is based on UUID."),(0,o.kt)("li",{parentName:"ol"},"Create a folder with this ID as the name."),(0,o.kt)("li",{parentName:"ol"},"From the runtime, call the start the Terraform process outside the JVM to do the following",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Inside the folder, the runtime will then create a Terraform workspace."),(0,o.kt)("li",{parentName:"ul"},"Execute the Terraform scripts")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: To avoid dependency on the filesystem, the state ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform.tfstate")," file contents are copied to the database at\nthe end of the service deployment. We reuse this later when the customer requests to destroy the service.")),(0,o.kt)("h3",{id:"reading-script-output"},"Reading Script Output"),(0,o.kt)("p",null,"After the runtime starts the Terraform script as a system command, it then starts to listen to ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," of\nthe job to gather all output generated from the script."),(0,o.kt)("h3",{id:"capturing-service-details"},"Capturing Service Details"),(0,o.kt)("p",null,"For any service ordered by the customer, it is important to return the details of the ordered service. Such as the IPs,\ncredentials, etc. which the customer must use to start consuming the service."),(0,o.kt)("p",null,"We use the\nTerraform ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," ",(0,o.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/tutorials/configuration-language/outputs"},"feature")," to get\nsuch information from the service deployment. So it is important to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," section to the scripts. The same\nis also used by the Xpanse UI for displaying the service details."),(0,o.kt)("h3",{id:"version-configuration-for-terraform-providers"},"Version Configuration For Terraform Providers"),(0,o.kt)("p",null,"Xpanse currently uses Terraform to orchestrate resources on cloud providers, but versions of\nTerraform for cloud providers are in constant iteration. In order to configure the Terraform version\nof the cloud providers more conveniently and quickly, you can configure the Terraform version of the\ncloud providers in\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-xpanse/xpanse/blob/main/runtime/src/main/resources/application.properties"},"xpanse configuration file"),"."),(0,o.kt)("h4",{id:"the-version-key-of-the-terraform-providers"},"The Version Key Of The Terraform Providers"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Terraform Providers"),(0,o.kt)("th",{parentName:"tr",align:null},"key"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AWS"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"terraform.provider.aws.version"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HuaweiCloud"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"terraform.provider.huaweicloud.version"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OpenStack"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"terraform.provider.openstack.version"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FlexibleEngine"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"terraform.provider.flexibleengine.version"))))),(0,o.kt)("h4",{id:"how-to-configure-the-version-of-terraform-providers"},"How To Configure The Version of Terraform Providers"),(0,o.kt)("p",null,"For how to configure the version value of Terraform Providers, please refer to the chapter of\n",(0,o.kt)("inlineCode",{parentName:"p"},"Version Constraints")," in ",(0,o.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/language/providers/requirements#version-constraints"},"https://developer.hashicorp.com/terraform/language/providers/requirements#version-constraints")),(0,o.kt)("p",null,"The following are some examples, please refer to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"terraform.provider.aws.version=~> 4.0\nterraform.provider.openstack.version=>= 1.48.0\nterraform.provider.flexibleengine.version=>= 1.30.0\nterraform.provider.huaweicloud.version=~> 1.51.0\n")))}d.isMDXComponent=!0}}]);