"use strict";(self.webpackChunkagentgpt_documentation=self.webpackChunkagentgpt_documentation||[]).push([[577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>O,default:()=>D,frontMatter:()=>h,metadata:()=>E,toc:()=>x});var r=n(7462),o=n(7294),i=n(3905),c=n(6010),a=n(2802),l=n(9960),s=n(3919),p=n(5999);const m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return o.createElement(l.Z,{href:t,className:(0,c.Z)("card padding--lg",m.cardContainer)},n)}function u(e){let{href:t,icon:n,title:r,description:i}=e;return o.createElement(d,{href:t},o.createElement("h2",{className:(0,c.Z)("text--truncate",m.cardTitle),title:r},n," ",r),i&&o.createElement("p",{className:(0,c.Z)("text--truncate",m.cardDescription),title:i},i))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?o.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return o.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(y,{item:t});case"category":return o.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,a.jA)();return o.createElement(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return o.createElement(b,e);const r=(0,a.MN)(t);return o.createElement("section",{className:(0,c.Z)("row",n)},r.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(g,{item:e})))))}const h={sidebar_position:2,hide_table_of_contents:!0},O="\ud83d\udda5 Development",E={unversionedId:"development/index",id:"development/index",title:"\ud83d\udda5 Development",description:"",source:"@site/docs/development/index.md",sourceDirName:"development",slug:"/development/",permalink:"/development/",draft:!1,editUrl:"https://github.com/ZhangWei-KUMO/AgentGPT/tree/main/docs/docs/development/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 \u4ecb\u7ecd",permalink:"/"},next:{title:"\ud83d\udee0\ufe0f Setup",permalink:"/development/setup"}},w={},x=[],j={toc:x},k="wrapper";function D(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,r.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-development"},"\ud83d\udda5 Development"),(0,i.kt)(v,{mdxType:"DocCardList"}))}D.isMDXComponent=!0}}]);