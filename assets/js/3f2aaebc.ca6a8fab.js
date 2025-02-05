"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[3716],{5310:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"spring-profiles","title":"Spring Profiles","description":"To provide better flexibility and modularity, xpanse extensively uses spring profiles for different parts of the application.","source":"@site/docs/spring-profiles.mdx","sourceDirName":".","slug":"/spring-profiles","permalink":"/xpanse/docs/spring-profiles","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Service Template Reviews","permalink":"/xpanse/docs/service-template-reviews"},"next":{"title":"Supported Clouds","permalink":"/xpanse/docs/supported-clouds"}}');var s=t(4848),i=t(8453),o=t(7346);const d={sidebar_position:8},l="Spring Profiles",a={},c=[{value:"Configuration Properties",id:"configuration-properties",level:2},{value:"Activating Profiles",id:"activating-profiles",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"spring-profiles",children:"Spring Profiles"})}),"\n",(0,s.jsx)(n.p,{children:"To provide better flexibility and modularity, xpanse extensively uses spring profiles for different parts of the application.\nEach profile either enables a certain functionality or provides some default configuration."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"profile name"}),(0,s.jsx)(n.th,{children:"forbidden for prod"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nouth"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"to disable any auth for APIs."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"oauth"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"to enable oauth based auth for APIs."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zitadel"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"to use Zitadel as oauth provider."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zitadel-testbed"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"to use test instance of Zitadel."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zitadel-local"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"to use local instance of Zitadel."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tofu-maker"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"to use remote instance of OpenTofu for deployment."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"terraform-boot"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"to use remote instance of Terraform for deployment."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"local-docker-stack"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"to be used when local docker containers of all xpanse components."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dev"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"to be used in all local development environments."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"opentelemetry"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"to enable OTEL instrumentation and forwarding."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mysql"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"to enable MySQL database as persistence layer."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"test"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Used in tests for having dummy configuration values."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"agent-api"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Used when we want to deploy only the agent APIs. This is used for generating agent API schema and also to scale agent APIs independently."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"generate-openapi-doc"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Used only to generate API documentation for swagger-hub."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-properties",children:"Configuration Properties"}),"\n",(0,s.jsxs)(n.p,{children:["All profiles and the configuration properties that are part of it can be found at ",(0,s.jsx)(o.A,{name:"this place",url:"https://github.com/eclipse-xpanse/xpanse/tree/main/runtime/src/main/resources"}),".\nConfiguration values can be overridden with methods supported by Spring framework as described ",(0,s.jsx)(o.A,{name:"here",url:"https://docs.spring.io/spring-boot/reference/features/external-config.html"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"activating-profiles",children:"Activating Profiles"}),"\n",(0,s.jsx)(n.p,{children:"Spring provides multiple ways to activate profiles.\nThe list of profile names which we intend to activate can be passed as"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"VM argument."}),"\n",(0,s.jsx)(n.li,{children:"Program argument."}),"\n",(0,s.jsx)(n.li,{children:"Environment variable."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# VM argument\njava -Dspring.profiles.active=profile1,profile2 -jar xpanse-runtime-*-SNAPSHOT.jar\n# Program argument\njava -jar xpanse-runtime-*-SNAPSHOT.jar --spring.profiles.active=profile1,profile2\n# Environment variable\nexport SPRING_PROFILE_ACTIVE=profile1,profile2\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7346:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4848);function s(e){let{name:n,url:t,isOpenInNewTab:s=!0}=e;return(0,r.jsx)("a",{href:t,className:"link-text",target:s?"_blank":"_self",children:n})}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(6540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);