"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[4013],{1460:(e,s,t)=>{t.d(s,{Z:()=>v});var a=t(7294),i=t(512),r=t(1170),n=t(7524),l=t(3692),c=t(5999),o=t(6550),d=t(8596);function m(e){const{pathname:s}=(0,o.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,s){return!(e.unlisted&&!(0,d.Mg)(e.permalink,s))}(e,s)))),[e,s])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var b=t(5893);function g(e){let{sidebar:s}=e;const t=m(s.items);return(0,b.jsx)("aside",{className:"col col--3",children:(0,b.jsxs)("nav",{className:(0,i.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,b.jsx)("div",{className:(0,i.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:s.title}),(0,b.jsx)("ul",{className:(0,i.Z)(u.sidebarItemList,"clean-list"),children:t.map((e=>(0,b.jsx)("li",{className:u.sidebarItem,children:(0,b.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=t(3102);function p(e){let{sidebar:s}=e;const t=m(s.items);return(0,b.jsx)("ul",{className:"menu__list",children:t.map((e=>(0,b.jsx)("li",{className:"menu__list-item",children:(0,b.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,b.jsx)(h.Zo,{component:p,props:e})}function x(e){let{sidebar:s}=e;const t=(0,n.i)();return s?.items.length?"mobile"===t?(0,b.jsx)(j,{sidebar:s}):(0,b.jsx)(g,{sidebar:s}):null}function v(e){const{sidebar:s,toc:t,children:a,...n}=e,l=s&&s.items.length>0;return(0,b.jsx)(r.Z,{...n,children:(0,b.jsx)("div",{className:"container margin-vert--lg",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)(x,{sidebar:s}),(0,b.jsx)("main",{className:(0,i.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:a}),t&&(0,b.jsx)("div",{className:"col col--2",children:t})]})})})}},1223:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});t(7294);var a=t(512),i=t(5999);const r=()=>(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var n=t(8264),l=t(5281),c=t(1460),o=t(3008),d=t(2503);const m={tag:"tag_Nnez"};var u=t(5893);function b(e){let{letterEntry:s}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(d.Z,{as:"h2",id:s.letter,children:s.letter}),(0,u.jsx)("ul",{className:"padding--none",children:s.tags.map((e=>(0,u.jsx)("li",{className:m.tag,children:(0,u.jsx)(o.Z,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function g(e){let{tags:s}=e;const t=function(e){const s={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);s[t]??=[],s[t].push(e)})),Object.entries(s).sort(((e,s)=>{let[t]=e,[a]=s;return t.localeCompare(a)})).map((e=>{let[s,t]=e;return{letter:s,tags:t.sort(((e,s)=>e.label.localeCompare(s.label)))}}))}(s);return(0,u.jsx)("section",{className:"margin-vert--lg",children:t.map((e=>(0,u.jsx)(b,{letterEntry:e},e.letter)))})}var h=t(197);function p(e){let{tags:s,sidebar:t}=e;const i=r();return(0,u.jsxs)(n.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage),children:[(0,u.jsx)(n.d,{title:i}),(0,u.jsx)(h.Z,{tag:"blog_tags_list"}),(0,u.jsxs)(c.Z,{sidebar:t,children:[(0,u.jsx)(d.Z,{as:"h1",children:i}),(0,u.jsx)(g,{tags:s})]})]})}},3008:(e,s,t)=>{t.d(s,{Z:()=>l});t(7294);var a=t(512),i=t(3692);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=t(5893);function l(e){let{permalink:s,label:t,count:l,description:c}=e;return(0,n.jsxs)(i.Z,{href:s,title:c,className:(0,a.Z)(r.tag,l?r.tagWithCount:r.tagRegular),children:[t,l&&(0,n.jsx)("span",{children:l})]})}}}]);