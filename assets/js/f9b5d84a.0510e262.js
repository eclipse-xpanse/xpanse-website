"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[2157],{669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var i=n(5893),a=n(1151),s=n(6367);const o={sidebar_position:8},r="Request Audit",d={id:"request-audit",title:"Request Audit",description:"All API calls to Xpanse can be audited and tracked. The implementation of audit functionality is CSP plugin specific.",source:"@site/docs/request-audit.mdx",sourceDirName:".",slug:"/request-audit",permalink:"/xpanse/docs/request-audit",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Policies",permalink:"/xpanse/docs/policies"},next:{title:"Runtime",permalink:"/xpanse/docs/runtime"}},c={},u=[{value:"Extracting CSP Data",id:"extracting-csp-data",level:2},{value:"Configure Audit for API Methods",id:"configure-audit-for-api-methods",level:3}];function l(e){const t={h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"request-audit",children:"Request Audit"}),"\n",(0,i.jsx)(t.p,{children:"All API calls to Xpanse can be audited and tracked. The implementation of audit functionality is CSP plugin specific.\nThe plugins can decide what they want to do with the audit data. For example, the data can be forwarded to any cloud tracking services or to any logging services or can even be simply ignored."}),"\n",(0,i.jsx)(t.h2,{id:"extracting-csp-data",children:"Extracting CSP Data"}),"\n",(0,i.jsx)(t.p,{children:"If Xpanse is running with just one CSP plugin activated, then all services are by default audited by the logic implemented by that specific CSP plugin."}),"\n",(0,i.jsx)(t.p,{children:"if more than one CSP is activated in the Xpanse runtime, then we extract the CSP name from the request URI or the request body and then forward the audit request to the corresponding CSP plugin."}),"\n",(0,i.jsx)(t.h3,{id:"configure-audit-for-api-methods",children:"Configure Audit for API Methods"}),"\n",(0,i.jsxs)(t.p,{children:["Developers who write API (controller) methods must annotate these API methods with the ",(0,i.jsx)(s.Z,{name:"AuditApiRequest",url:"https://github.com/eclipse-xpanse/xpanse/blob/main/modules/api/src/main/java/org/eclipse/xpanse/api/config/AuditApiRequest.java"})," annotation.\nThe annotation must also be provided with the information on how the CSP value can be extracted from the method's input data."]}),"\n",(0,i.jsxs)(t.p,{children:["All logic to extract CSP information from request data can be found ",(0,i.jsx)(s.Z,{name:"here",url:"https://github.com/eclipse-xpanse/xpanse/blob/main/modules/api/src/main/java/org/eclipse/xpanse/api/config/GetCspInfoFromRequest.java"}),". This must be extended if there are any new request data models."]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},6367:(e,t,n)=>{n.d(t,{Z:()=>a});n(7294);var i=n(5893);function a(e){let{name:t,url:n,isOpenInNewTab:a=!0}=e;return(0,i.jsx)("a",{href:n,className:"link-text",target:a?"_blank":"_self",children:t})}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(7294);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);