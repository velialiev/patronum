"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[613],{66:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return f}});var a=n(5773),r=n(808),s=(n(7378),n(5318)),l=["components"],i={},u="status",o={unversionedId:"status/readme",id:"status/readme",title:"status",description:"Motivation",source:"@site/../src/status/readme.md",sourceDirName:"status",slug:"/status/",permalink:"/methods/status/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/status/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"spread",permalink:"/methods/spread/"},next:{title:"throttle",permalink:"/methods/throttle/"}},c={},f=[{value:"Motivation",id:"motivation",level:2},{value:"Formulae",id:"formulae",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Successful effect call changing status to &quot;done&quot;",id:"successful-effect-call-changing-status-to-done",level:3},{value:"Initial status",id:"initial-status",level:3},{value:"Clear (reset) status",id:"clear-reset-status",level:3}],p={toc:f};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"status"},"status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { status } from 'patronum/status';\n")),(0,s.kt)("h2",{id:"motivation"},"Motivation"),(0,s.kt)("p",null,"This method returns current status of effect as store with string enumeration.\nIt is useful to show correct state of process in UI."),(0,s.kt)("h2",{id:"formulae"},"Formulae"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"$status = status({ effect, defaultValue });\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"When ",(0,s.kt)("inlineCode",{parentName:"li"},"status")," is run, set ",(0,s.kt)("inlineCode",{parentName:"li"},"defaultValue")," value to ",(0,s.kt)("inlineCode",{parentName:"li"},"$status")),(0,s.kt)("li",{parentName:"ul"},"When ",(0,s.kt)("inlineCode",{parentName:"li"},"effect")," is called, set ",(0,s.kt)("inlineCode",{parentName:"li"},"pending")," status."),(0,s.kt)("li",{parentName:"ul"},"When ",(0,s.kt)("inlineCode",{parentName:"li"},"effect")," is succeeded, set ",(0,s.kt)("inlineCode",{parentName:"li"},"done")," status."),(0,s.kt)("li",{parentName:"ul"},"When ",(0,s.kt)("inlineCode",{parentName:"li"},"effect")," is failed, set ",(0,s.kt)("inlineCode",{parentName:"li"},"fail")," status.")),(0,s.kt)("h2",{id:"arguments"},"Arguments"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"effect")," ",(0,s.kt)("inlineCode",{parentName:"li"},"(Effect<P, R>)")," \u2014 any effect, that you need to watch status"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"defaultValue")," ",(0,s.kt)("inlineCode",{parentName:"li"},"('initial' | 'pending' | 'done' | 'fail')")," ",(0,s.kt)("em",{parentName:"li"},"optional")," \u2014 when ",(0,s.kt)("inlineCode",{parentName:"li"},"$status")," initializes, set initial value for it. By default value is ",(0,s.kt)("inlineCode",{parentName:"li"},'"initial"'))),(0,s.kt)("h2",{id:"returns"},"Returns"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"$status")," ",(0,s.kt)("inlineCode",{parentName:"li"},"(Store<'initial' | 'pending' | 'done' | 'fail'>)")," \u2014 Store that saves current state of the effects")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note: use can manually reset status, just use ",(0,s.kt)("inlineCode",{parentName:"p"},"$status.reset(event)"))),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("h3",{id:"successful-effect-call-changing-status-to-done"},'Successful effect call changing status to "done"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { createEvent, createEffect } from \'effector\';\nimport { status } from \'patronum/status\';\n\nconst effect = createEffect().use(() => Promise.resolve(null));\nconst $status = status({ effect });\n\n$status.watch((value) => console.log(`status: ${value}`));\n// => status: "initial"\n\neffect();\n// => status: "pending"\n// => status: "done"\n')),(0,s.kt)("h3",{id:"initial-status"},"Initial status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { createEvent, createEffect } from 'effector';\nimport { status } from 'patronum/status';\n\nconst effect = createEffect().use(() => Promise.resolve(null));\nconst $status = status({ effect, defaultValue: 'pending' });\n\n$status.watch((value) => console.log(`status: ${value}`));\n// => status: \"pending\"\n\neffect();\n// Nothing, because $status is already pending\n// => status: \"done\"\n")),(0,s.kt)("h3",{id:"clear-reset-status"},"Clear (reset) status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { createEvent, createEffect } from \'effector\';\nimport { status } from \'patronum/status\';\n\nconst reset = createEvent();\nconst effect = createEffect().use(\n  () => new Promise((resolve) => setTimeout(resolve, 100)),\n);\n\nconst $status = status({ effect });\n$status.reset(reset);\n\n$status.watch((value) => console.log(`status: ${value}`));\n// => status: "initial"\n\neffect();\n// => status: "pending"\n// => status: "done"\n\nreset();\n// => status: "initial"\n')))}m.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=o(n),m=r,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||s;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);