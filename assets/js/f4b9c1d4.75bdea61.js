"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[5303],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>f});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),d=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=i,f=p["".concat(o,".").concat(h)]||p[h]||u[h]||r;return a?t.createElement(f,l(l({ref:n},c),{},{components:a})):t.createElement(f,l({ref:n},c))}));function f(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5649:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=a(7462),i=(a(7294),a(3905));const r={},l="Credentials Concept",s={unversionedId:"credentials-concept",id:"credentials-concept",title:"Credentials Concept",description:"Since Xpanse runtime integrates with multiple cloud APIs, there is a need to define how and which credentials are used",source:"@site/docs/credentials-concept.md",sourceDirName:".",slug:"/credentials-concept",permalink:"/xpanse/docs/credentials-concept",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication and Authorization",permalink:"/xpanse/docs/authentication-authorization"},next:{title:"Database",permalink:"/xpanse/docs/database"}},o={},d=[{value:"Authentication Capabilities",id:"authentication-capabilities",level:2},{value:"Credential Configuration",id:"credential-configuration",level:3},{value:"Credential Variable Value Sources",id:"credential-variable-value-sources",level:2},{value:"Deployment Variables",id:"deployment-variables",level:3},{value:"Xpanse User Specific Credentials",id:"xpanse-user-specific-credentials",level:3},{value:"OS Environment Variables",id:"os-environment-variables",level:3},{value:"Credentials &quot;Joining&quot;",id:"credentials-joining",level:2},{value:"Service Deployment",id:"service-deployment",level:3},{value:"Service Monitoring",id:"service-monitoring",level:3},{value:"Credentials Cache",id:"credentials-cache",level:2},{value:"Multiple Credentials Found",id:"multiple-credentials-found",level:2}],c={toc:d},p="wrapper";function u(e){let{components:n,...a}=e;return(0,i.kt)(p,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"credentials-concept"},"Credentials Concept"),(0,i.kt)("p",null,"Since Xpanse runtime integrates with multiple cloud APIs, there is a need to define how and which credentials are used\nby Xpanse for each of the cloud provider."),(0,i.kt)("h2",{id:"authentication-capabilities"},"Authentication Capabilities"),(0,i.kt)("p",null,"Each CSP allows different ways for its clients to authenticate itself and consume its API. For example, the same CSP\nmight support username/password, API key, Oauth2 etc., as possible ways to connect to its API."),(0,i.kt)("p",null,"While Xpanse plugins are responsible for integrating wih the CSP APIs, it might not have implemented all possible ways\nto authenticate itself to the CSP API."),(0,i.kt)("p",null,"Every Xpanse Plugin will define the authentication methods it supports to connect to its underlying CSP. This\nconfiguration is added and exposed by implementing\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-xpanse/xpanse/blob/main/modules/credential/src/main/java/org/eclipse/xpanse/modules/credential/AuthenticationCapabilities.java"},"AuthenticationCapabilities"),"\ninterface by the corresponding plugin."),(0,i.kt)("p",null,"The same information is also then made available to consumers via the REST API\nmethod ",(0,i.kt)("a",{parentName:"p",href:"https://eclipse-xpanse.github.io/xpanse-website/docs/api/#tag/Credentials-Management/operation/getCredentialDefinitionsByCsp"},"getCredentialCapabilitiesByCsp"),"\nin the CredentialsApi which returns all credential types defined and supported by the plugin."),(0,i.kt)("p",null,"This list is enhanced as and when Xpanse plugin for a specific CSP adds integration for new authentication methods\nsupported by the CSP APIs."),(0,i.kt)("h3",{id:"credential-configuration"},"Credential Configuration"),(0,i.kt)("p",null,"Each credential configuration defined by a plugin contains the following the information"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Credential Type - username/password, API key, Oauth2 etc."),(0,i.kt)("li",{parentName:"ol"},"Variables that must be filled with values for the plugin use the credential to connect to CSP.")),(0,i.kt)("h2",{id:"credential-variable-value-sources"},"Credential Variable Value Sources"),(0,i.kt)("p",null,"After a plugin has defined the credential possibilities and its respective variable names, values for these variable\nnames must be provided and this is possible to be done from different sources."),(0,i.kt)("p",null,"This is necessary to allow combinations where some credential variable values are fixed for an environment and some can\nbe different for each user. For example, in case of Openstack plugin, the Identity URL, Project might be fixed for each\nenvironment but the username and password can vary for each Xpanse user."),(0,i.kt)("h3",{id:"deployment-variables"},"Deployment Variables"),(0,i.kt)("p",null,"Credential variables can be passed as part of the deployment variables during service ordering. If credential type is\nnot passed, then we simply use the first available credential definition of the CSP and try to find values for its\nvariables from deployment variables."),(0,i.kt)("p",null,"This credential value source is only used for service deployment use case."),(0,i.kt)("p",null,"Note - We might in future change credential configuration to a separate section in the Xpanse service description. This\nis to be discussed."),(0,i.kt)("h3",{id:"xpanse-user-specific-credentials"},"Xpanse User Specific Credentials"),(0,i.kt)("p",null,"A credential for combination of a specific CSP, ",(0,i.kt)("inlineCode",{parentName:"p"},"CredentialType")," and a specific Xpanse user can be added using\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://eclipse-xpanse.github.io/xpanse-website/docs/api/#tag/Credentials-Management/operation/addCredential"},"addCredential"),"\nAPI method. This means, for all services ordered by a Xpanse user or for monitoring services which are ordered by this\nspecific Xpanse user, this added credential will be used."),(0,i.kt)("p",null,"This exact request body definition for each of the CSP and Credential Type can be found\nusing ",(0,i.kt)("a",{parentName:"p",href:"https://eclipse-xpanse.github.io/xpanse-website/docs/api/#tag/Services-Available/operation/getCredentialOpenApi"},"getCredentialOpenApi"),".\nThis method provides a link to OpenAPI definition and sample request for adding credentials for each CSP."),(0,i.kt)("p",null,"Credential variable values sent from this API is stored directly into ",(0,i.kt)("a",{parentName:"p",href:"#credentials-cache"},"CredentialsCache")),(0,i.kt)("h3",{id:"os-environment-variables"},"OS Environment Variables"),(0,i.kt)("p",null,"Based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"CredentialDefinition")," configured in the Plugins, the Xpanse runtime can be started by injecting default\ncredential configuration variables as OS environment variables to the runtime. If values for all credential variables\nare not available from other sources, then the runtime will search for credential variables from OS environment\nvariables."),(0,i.kt)("p",null,"Please note that the variables from OS environment values are read as-is. It is therefore necessary to keep credential\nvariable names unique even between two different credential types of the same CSP."),(0,i.kt)("h2",{id:"credentials-joining"},'Credentials "Joining"'),(0,i.kt)("p",null,"As described in the above sections, for each credential type, a certain set of variables are defined. Values for ",(0,i.kt)("strong",{parentName:"p"},"all"),"\nof these variables are needed for the credential to be valid."),(0,i.kt)("p",null,"We join credential variable values from all the sources mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"#credential-value-sources"},"above sections")," to\nget the final credential variable values that will be used for connecting to the CSP."),(0,i.kt)("p",null,"Credentials values are read from different values and ",(0,i.kt)("strong",{parentName:"p"},"joined")," into one single set of all required credential variable\nvalues of\na given type."),(0,i.kt)("p",null,"If value of a credential variable is available in multiple sources then the value coming from the source of higher\npriority is used."),(0,i.kt)("h3",{id:"service-deployment"},"Service Deployment"),(0,i.kt)("p",null,"During the service deployment, all the values for the variables defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CredentialDefinition")," is derived from\ndifferent sources in priority sequence provided below -"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"CredentialType and variables from deploy variables."),(0,i.kt)("p",{parentName:"li"},"As part of the registering services, the service\nprovider can define the service such that the end user can provide the values for the required credential variables\ndefined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CredentialDefinition")," while ordering the service.)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Credentials available in the ",(0,i.kt)("a",{parentName:"p",href:"#credentials-cache"},"CredentialsCache"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Credential variable values from OS environment variables."))),(0,i.kt)("mermaid",{value:"sequenceDiagram\n    Consumer --\x3e> API: Order Service\n    API --\x3e> CredentialsManager: Get Credentials\n    critical Calculate Credentials\n        CredentialsManager --\x3e> API: Get Credential variables from deployment variables\n        CredentialsManager --\x3e> CredentialsCache: Get credential variable values from credentials cache\n        CredentialsManager --\x3e> OS: Get credential variable values from OS environment variables\n        CredentialsManager --\x3e> CredentialsManager: Combine credential variable values from all sources based on priorities for the\n        CredentialsManager --\x3e> CredentialsManager: Validate if values for all variables in CredentialDefinition is available\n        CredentialsManager --\x3e> API: Returns credentials\n        break when complete credential definition is not found\n            CredentialsManager --\x3e> API: Throw error.\n            API --\x3e Consumer: Reject request.\n        end\n    end\n    API --\x3e> CSP: Request service deployment"}),(0,i.kt)("h3",{id:"service-monitoring"},"Service Monitoring"),(0,i.kt)("p",null,"During the service monitoring, all the values for the variables defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CredentialDefinition")," is derived from\ndifferent sources in priority sequence provided below -"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Credentials available in the ",(0,i.kt)("a",{parentName:"li",href:"#credentials-cache"},"CredentialsCache"),"."),(0,i.kt)("li",{parentName:"ol"},"credential variables from OS environment variables.")),(0,i.kt)("mermaid",{value:"sequenceDiagram\n    Consumer --\x3e> API: Get Service Metrics\n    API --\x3e> CredentialsManager: Get Credentials\n    critical Calculate Credentials\n        CredentialsManager --\x3e> CredentialsCache: Get credential variable values from credentials cache\n        CredentialsManager --\x3e> OS: Get credentials variable values from OS environment variables\n        CredentialsManager --\x3e> CredentialsManager: Combine credential variable values from all sources based on priorities\n        CredentialsManager --\x3e> CredentialsManager: Validate if values for all variables in CredentialDefinition is available\n        break Full credential configuration is not found\n            CredentialsManager --\x3e> API: Throw Error\n        end\n        CredentialsManager --\x3e> API: Credentials found and returned\n    end\n    API --\x3e> CSP: Get metrics from CSP using credentials\n    CSP --\x3e> API: Metrics data\n    API --\x3e> Consumer: Forward metrics data"}),(0,i.kt)("h2",{id:"credentials-cache"},"Credentials Cache"),(0,i.kt)("p",null,"Credentials cache is the credential store in Xpanse runtime which stores all credential data."),(0,i.kt)("p",null,"Credentials provided by the ",(0,i.kt)("a",{parentName:"p",href:"#adding-xpanse-user-specific-credentials"},"API")," are stored as in-memory cache map. This is\nsafe since no data is stored in the disk and the map is also not exposed outside the application."),(0,i.kt)("p",null,"Credentials are evicted from cache after the provided expiry time or by default after 1 hour."),(0,i.kt)("h2",{id:"multiple-credentials-found"},"Multiple Credentials Found"),(0,i.kt)("p",null,"When multiple credentials are found in the credentials cache for the same Xpanse user, credential type and CSP, then we\nsimply use the first available credential."))}u.isMDXComponent=!0}}]);