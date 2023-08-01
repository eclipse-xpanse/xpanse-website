"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[6321],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6912:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={},o="UI",l={unversionedId:"ui",id:"ui",title:"UI",description:"Use Cases",source:"@site/docs/ui.md",sourceDirName:".",slug:"/ui",permalink:"/xpanse/docs/ui",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Service Deployment",permalink:"/xpanse/docs/service-deployment"}},s={},p=[{value:"Use Cases",id:"use-cases",level:3},{value:"For Service Providers",id:"for-service-providers",level:4},{value:"For End Users",id:"for-end-users",level:4},{value:"Development",id:"development",level:3},{value:"Requirements",id:"requirements",level:4},{value:"Access to UI",id:"access-to-ui",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ui"},"UI"),(0,i.kt)("h3",{id:"use-cases"},"Use Cases"),(0,i.kt)("p",null,"We also have a Xpanse UI which is a reference UI implementation to show how the Xpanse API can be used for the following purposes -"),(0,i.kt)("h4",{id:"for-service-providers"},"For Service Providers"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Register/update/delete services using the Xpanse service definition."),(0,i.kt)("li",{parentName:"ol"},"Display service catalog with all registered services.")),(0,i.kt)("h4",{id:"for-end-users"},"For End Users"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Order services available in the catalog."),(0,i.kt)("li",{parentName:"ol"},"Stop/Delete deployed services."),(0,i.kt)("li",{parentName:"ol"},"Monitor services deployed.")),(0,i.kt)("h3",{id:"development"},"Development"),(0,i.kt)("p",null,"Code for UI implementation is available in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-xpanse/xpanse-ui"},"here"),"."),(0,i.kt)("h4",{id:"requirements"},"Requirements"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Node.js and npm/yarn must be installed on the developer system."),(0,i.kt)("li",{parentName:"ol"},"Steps to start the application is described ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/eclipse-xpanse/xpanse-ui/blob/main/README.md"},"here")),(0,i.kt)("li",{parentName:"ol"},"Xpanse runtime to be available. Without which, the UI will start up but no functions are usable.")),(0,i.kt)("h3",{id:"access-to-ui"},"Access to UI"),(0,i.kt)("p",null,"As we still do not have authentication and authorization implemented in the project (it is on the roadmap), UI can be simply accessed using"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"username - ",(0,i.kt)("inlineCode",{parentName:"li"},"csp")," to get the cloud service provider view."),(0,i.kt)("li",{parentName:"ol"},"username - ",(0,i.kt)("inlineCode",{parentName:"li"},"user")," to get the end user view.")),(0,i.kt)("p",null,"Note - in both cases, enter any string as password. There is no validation available at the moment."))}d.isMDXComponent=!0}}]);