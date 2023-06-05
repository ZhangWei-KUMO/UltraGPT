"use strict";(self.webpackChunkaotugpt_documentation=self.webpackChunkaotugpt_documentation||[]).push([[186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,k=s["".concat(i,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},o="\ud83d\udee0\ufe0f \u8bbe\u7f6e",p={unversionedId:"development/setup",id:"development/setup",title:"\ud83d\udee0\ufe0f \u8bbe\u7f6e",description:"\u4ee5\u4e0b\u6587\u6863\u5c06\u5e2e\u52a9\u60a8\u8bbe\u7f6e AgentGPT \u7684\u672c\u5730\u5b89\u88c5\u3002",source:"@site/docs/development/setup.md",sourceDirName:"development",slug:"/development/setup",permalink:"/AgentGPT/development/setup",draft:!1,editUrl:"https://github.com/ZhangWei-KUMO/AgentGPT/tree/main/docs/docs/development/setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udda5  \u5f00\u53d1",permalink:"/AgentGPT/development/"},next:{title:"\ud83c\udf0e \u7ffb\u8bd1",permalink:"/AgentGPT/development/translations"}},i={},c=[{value:"\u6280\u672f\u6808",id:"\u6280\u672f\u6808",level:2},{value:"\u4ea4\u4e92\u5f0f\u8bbe\u7f6e",id:"\u4ea4\u4e92\u5f0f\u8bbe\u7f6e",level:2},{value:"ENV",id:"env",level:2},{value:"\u4f7f\u7528 Docker",id:"\u4f7f\u7528-docker",level:2},{value:"\u5728 Docker \u5916\u5f00\u53d1",id:"\u5728-docker-\u5916\u5f00\u53d1",level:2},{value:"\u8fd0\u884c\u7ad9\u70b9",id:"\u8fd0\u884c\u7ad9\u70b9",level:2},{value:"\u95ee\u9898 / \u5176\u4ed6\u5e2e\u52a9",id:"\u95ee\u9898--\u5176\u4ed6\u5e2e\u52a9",level:2}],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-\u8bbe\u7f6e"},"\ud83d\udee0\ufe0f \u8bbe\u7f6e"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u6587\u6863\u5c06\u5e2e\u52a9\u60a8\u8bbe\u7f6e AgentGPT \u7684\u672c\u5730\u5b89\u88c5\u3002"),(0,a.kt)("h2",{id:"\u6280\u672f\u6808"},"\u6280\u672f\u6808"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc85 \u524d\u7aef\uff1aNextJS + Typescript"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc0d \u540e\u7aef\uff1aFastAPI + Python"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udcda \u6570\u636e\u5e93\uff1a\u901a\u8fc7 Docker \u8fd0\u884c\u7684 MySQL\uff0c\u4e5f\u53ef\u4ee5\u5728\u672c\u5730\u8fd0\u884c SQLite\u3002")),(0,a.kt)("h2",{id:"\u4ea4\u4e92\u5f0f\u8bbe\u7f6e"},"\u4ea4\u4e92\u5f0f\u8bbe\u7f6e"),(0,a.kt)("p",null,"\u6211\u4eec\u6700\u8fd1\u63a8\u51fa\u4e86\u4e00\u4e2a\u4ea4\u4e92\u5f0f\u8bbe\u7f6e\u5de5\u5177\uff0c\u5b83\u5c06\u6307\u5bfc\u60a8\u521b\u5efa ENV \u5e76\u8fd0\u884c AgentGPT\u3002\u53ea\u9700\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/ZhangWei-KUMO/AgentGPT && cd AgentGPT\n./setup.sh\n")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Windows\uff0c\u5219\u53ef\u4ee5\u5728\u4e0b\u8f7d\u5b58\u50a8\u5e93\u540e\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd cli\nnpm install\nnpm run start\n")),(0,a.kt)("p",null,"\u6309\u7167\u8fd9\u79cd\u65b9\u5f0f\uff0c\u60a8\u53ef\u4ee5\u5ffd\u7565\u4e0b\u9762\u7684\u6587\u672c\u3002"),(0,a.kt)("h2",{id:"env"},"ENV"),(0,a.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u786e\u4fdd\u6b63\u786e\u914d\u7f6e\u4e86 ENV\u3002\u4e3a\u6b64\uff0c\u8bf7\u5c06 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reworkd/AgentGPT/blob/main/.env.example"},".env.example")," \u6587\u4ef6\u590d\u5236\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"./next/")," \u76ee\u5f55\u4e2d\uff0c\u5c06\u5176\u91cd\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," \u5e76\u6839\u636e\u9700\u8981\u66f4\u65b0\u503c\u3002\u8bf7\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u60a8\u9700\u8981\u4f7f\u7528\u81ea\u5df1\u7684\u503c\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"li"},"OPENAI_API_KEY"),"\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"li",href:"/faq"},"FAQ")),(0,a.kt)("li",{parentName:"ul"},"DB ENV \u503c\u53d6\u81ea ",(0,a.kt)("inlineCode",{parentName:"li"},"./docker-compose.yml")," \u4e2d\u7684\u5b9a\u4e49")),(0,a.kt)("h2",{id:"\u4f7f\u7528-docker"},"\u4f7f\u7528 Docker"),(0,a.kt)("p",null,"Docker \u6784\u5efa\u975e\u5e38\u7b80\u5355\uff0c\u5e94\u8be5\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002\u8bf7\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"\u4ed6\u4eec\u7684\u7f51\u7ad9")," \u786e\u4fdd\u5df2\u5b89\u88c5 Docker\u3002\u5b8c\u6210\u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up --build\n")),(0,a.kt)("p",null,"\u8fd9\u5c06\u4e3a\u524d\u7aef\u3001\u540e\u7aef\u548c\u6570\u636e\u5e93\u542f\u52a8\u4e00\u4e2a\u5bb9\u5668\u3002"),(0,a.kt)("h2",{id:"\u5728-docker-\u5916\u5f00\u53d1"},"\u5728 Docker \u5916\u5f00\u53d1"),(0,a.kt)("p",null,"\u5728 Docker \u4e4b\u5916\uff0c\u60a8\u53ea\u9700\u8981\u914d\u7f6e\u60a8\u7684 ENV\u3002\u6b64\u5916\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.sh")," \u6765\u6b65\u5165 ENV \u914d\u7f6e\uff0c\u5e76\u66f4\u65b0\u60a8\u7684 Prisma \u914d\u7f6e\u4ee5\u6307\u5411\u672c\u5730 SQLite \u5b9e\u4f8b\u3002"),(0,a.kt)("p",null,"\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u8bbe\u7f6e Next.js \u9879\u76ee\u3002\u5728\u542f\u7528 Python \u540e\u7aef\u65f6\uff0c\u6211\u4eec\u5c06\u6dfb\u52a0\u5176\u4ed6\u8bf4\u660e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"// Frontend\ncd ./next\nnpm install\nnpm run dev\n")),(0,a.kt)("p",null,"\u5728\u53e6\u4e00\u4e2a\u7a97\u53e3\u4e2d\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u52a8\u540e\u7aef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"// Backend. \u786e\u4fdd\u60a8\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\ncd ./platform\npoetry install\npoetry run python -m agent_backend\n")),(0,a.kt)("h2",{id:"\u8fd0\u884c\u7ad9\u70b9"},"\u8fd0\u884c\u7ad9\u70b9"),(0,a.kt)("p",null,"\u5728\u672c\u5730\u6784\u5efa AgentGPT \u540e\uff0c\u60a8\u53ef\u4ee5\u5728 Web \u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee http://localhost:3000/\u3002"),(0,a.kt)("h2",{id:"\u95ee\u9898--\u5176\u4ed6\u5e2e\u52a9"},"\u95ee\u9898 / \u5176\u4ed6\u5e2e\u52a9"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4ecd\u7136\u9047\u5230\u95ee\u9898\uff0c\u60a8\u53ef\u4ee5\u9075\u5faa @CybrCo \u7684\u65e7\u6307\u5357\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://snapdragon-writer-867.notion.site/How-to-Install-AgentGPT-Locally-9b96b2314c9b491397976249fd121023"},"\u5982\u4f55\u5728\u672c\u5730\u5b89\u88c5 AgentGPT")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4ecd\u7136\u9047\u5230\u95ee\u9898\uff0c\u8bf7\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reworkd/AgentGPT/issues"},"GitHub \u4e0a\u63d0\u4ea4\u95ee\u9898")," \u6216\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/jdSBAnmdnY"},"discord")," \u4e0a\u8054\u7cfb\u56e2\u961f\u3002"))}d.isMDXComponent=!0}}]);