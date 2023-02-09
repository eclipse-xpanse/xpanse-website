"use strict";(self.webpackChunkosc_website=self.webpackChunkosc_website||[]).push([[673],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),g=i,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:8},o="Plugin",s={unversionedId:"plugin",id:"plugin",title:"Plugin",description:"This section described how to develop an orchestrator plugin (and associated storage).",source:"@site/docs/plugin.md",sourceDirName:".",slug:"/plugin",permalink:"/xpanse/docs/plugin",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Resources",permalink:"/xpanse/docs/resources"},next:{title:"Contribute",permalink:"/xpanse/docs/contribute"}},c={},l=[{value:"Orchestrator",id:"orchestrator",level:2},{value:"Storage",id:"storage",level:2},{value:"Adding in OSC runtime",id:"adding-in-osc-runtime",level:2}],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plugin"},"Plugin"),(0,i.kt)("p",null,"This section described how to develop an orchestrator plugin (and associated storage)."),(0,i.kt)("h2",{id:"orchestrator"},"Orchestrator"),(0,i.kt)("p",null,"An orchestrator plugin is basically a class that implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.eclipse.xpanse.orchestrator.OrchestratorPlugin"),"\ninterface.\nIt must also be annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@Component")," so that the class is scanned and loaded into the spring context."),(0,i.kt)("p",null,"You can create a basic plugin Maven ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," containing the OSC Orchestrator and OclLoader:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>my-group</groupId>\n    <artifactId>my-plugin</artifactId>\n    <version>1.0-SNAPSHOT</version>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.eclipse.xpanse.modules</groupId>\n            <artifactId>orchestrator</artifactId>\n            <version>1.0.0-SNAPSHOT</version>\n        </dependency>\n        <dependency>\n            <groupId>org.eclipse.xpanse.modules</groupId>\n            <artifactId>ocl-loader</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n    </dependencies>\n\n</project>\n')),(0,i.kt)("p",null,"Then, you can create your plugin class in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/java")," folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class MyPlugin implements OrchestratorPlugin {\n\n    @Override\n    public void registerManagedService(Ocl ocl) {\n        // load the OCL and register the corresponding managed service (creating all required resources)\n    }\n\n    @Override\n    public void updateManagedService(String managedServiceName, Ocl ocl) {\n        // update an existing service with a new OCL descriptor\n    }\n\n    @Override\n    public void startManagedService(String managedServiceName) {\n        // start a registered service\n    }\n\n    @Override\n    public void stopManagedService(String managedServiceName) {\n        // stop a registered service\n    }\n\n    @Override\n    public void unregisterManagedService(String managedServiceName) {\n        // unregister (remove and destroy service resources)\n    }\n\n    // optional method, only needed if you want to execute code when the plugin is loaded\n    @Override\n    public void onRegister(ServiceRegistry serviceRegistry) {\n        // here you can interact with other services (via ServiceRegistry) in the OSC runtime\n    }\n}\n")),(0,i.kt)("h2",{id:"storage"},"Storage"),(0,i.kt)("p",null,"Most of the time, an orchestrator plugin needs a storage, especially to store the registered service."),(0,i.kt)("p",null,"This storage has to be persistent on the cloud infrastructure."),(0,i.kt)("p",null,"Creating an orchestrator storage is similar to the main orchestrator plugin, the only different is that you need to\nimplement ",(0,i.kt)("inlineCode",{parentName:"p"},"org.eclipse.xpanse.orchestrator.OrchestratorStorage")," interface instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"org.eclipse.xpanse.orchestrator.OrchestratorPlugin"),".\nIt must also be annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@Component")," so that the class is scanned and loaded into the spring context."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class MyStorage implements OrchestratorStorage {\n\n    @Override\n    public void store(String sid) {\n        // store a service ID\n    }\n\n    @Overrde\n    public void store(String sid, String pluginName, String key, String value) {\n        // store a service ID with associated key/value pair\n    }\n\n    @Override\n    public String getKey(String sid, String pluginName, String key) {\n        // get the key corresponding to the service id\n    }\n\n    @Override\n    public boolean exists(String sid) {\n        // return true if the service ID is present in the store, false else\n    }\n\n    @Override\n    public Set<String> services() {\n        // return the list of services (ID) present in the store \n    }\n\n    @Override\n    public void remove(String sid) {\n        // remove a service (ID) from the store\n    }\n}\n")),(0,i.kt)("h2",{id:"adding-in-osc-runtime"},"Adding in OSC runtime"),(0,i.kt)("p",null,"To ensure the plugin and storage implementations are correctly scanned and loaded, both the classes must also be\nadditionally annotated wit  ",(0,i.kt)("inlineCode",{parentName:"p"},"@Profile")," and with value with the plugin name."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'@Profile(value = "${pluginName})')))}u.isMDXComponent=!0}}]);