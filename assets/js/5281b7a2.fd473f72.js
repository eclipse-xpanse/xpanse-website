"use strict";(self.webpackChunkosc_website=self.webpackChunkosc_website||[]).push([[927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=i,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:2},a="Architecture",s={unversionedId:"architecture",id:"architecture",title:"Architecture",description:"Open Services Cloud is a framework reshaping the cloud service ecosystem:",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/xpanse-website/docs/architecture",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/xpanse-website/docs/intro"},next:{title:"Configuration Language",permalink:"/xpanse-website/docs/ocl"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"Open Services Cloud is a framework reshaping the cloud service ecosystem:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the cloud users can find the same services across different cloud providers, exactly the same services provided by\nOpen Services Cloud."),(0,i.kt)("li",{parentName:"ul"},"the software vendors can easily create native and portable managed services for their software, including seamless and\nlow level integration with cloud provider services. In addition of software artifacts, software vendor describe the\nservice using the Open Services Cloud Configuration Language (OCL)."),(0,i.kt)("li",{parentName:"ul"},"the cloud providers can easily extend their services catalog by registering services described with the Open Services\nCloud Configuration Language (OCL).")),(0,i.kt)("p",null,"Open Services Cloud allows anyone to create managed services (not only the cloud provider), portable, and fully\nintegrated within the cloud provider infrastructure."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Open Services Cloud Architecture",src:r(9324).Z,title:"Open Services Cloud Architecture",width:"960",height:"540"})),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"ocl"},"OCL descriptor")," is a json fully describing the service. This descriptor is handled by the orchestrator.\nThe OCL descriptor can be wrapped as a terraform provider if needed. It's also possible to extend the OCL descriptor (\nusing extender)."),(0,i.kt)("p",null,"The orchestrator marshalls the OCL descriptor and constructs an execution graph interacting with the cloud provider."),(0,i.kt)("p",null,"The interaction logic with the cloud provider is delegated to orchestrator plugins. The orchestrator can use one or more\nplugins to deal with the underlying infrastructure services and create the service resources."),(0,i.kt)("p",null,"The orchestrator defines the following lifecycle for each service:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"a service is registered in the orchestrator (in a persistent store). During service registration, the orchestrator is\ncreating (thanks to the plugins) all resources needed for the service."),(0,i.kt)("li",{parentName:"ol"},"once registered, the orchestrator can start a service. If registration creates resources, the start phase actually\nstarts the service resources."),(0,i.kt)("li",{parentName:"ol"},"the orchestrator can stop a service, stopping the corresponding service resources, but not removing them."),(0,i.kt)("li",{parentName:"ol"},"the orchestrator can remove a service, destroying all associated resources.")),(0,i.kt)("p",null,"You can interact with the orchestrator with the OSC ",(0,i.kt)("a",{parentName:"p",href:"api"},"REST API"),"."),(0,i.kt)("p",null,"The OCL loader, orchestrator, plugins and API are all managed in the OSC ",(0,i.kt)("a",{parentName:"p",href:"runtime"},"runtime"),".\nThe ",(0,i.kt)("a",{parentName:"p",href:"runtime"},"runtime")," is the glue between all components."))}d.isMDXComponent=!0},9324:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/osc_architecture-581ba237e4d034542c4f3fbcc91aa5dd.png"}}]);