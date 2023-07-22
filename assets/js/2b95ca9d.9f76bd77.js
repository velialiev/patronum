"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[817],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,h=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(2081),o=(n(9496),n(9613));const a={},i="snapshot",s={unversionedId:"snapshot/readme",id:"snapshot/readme",title:"snapshot",description:"patronum 1.7.0",source:"@site/../src/snapshot/readme.md",sourceDirName:"snapshot",slug:"/snapshot/",permalink:"/methods/snapshot/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/snapshot/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"reshape",permalink:"/methods/reshape/"},next:{title:"some",permalink:"/methods/some/"}},l={},p=[{value:"<code>result = snapshot({ source, clock, fn })</code>",id:"result--snapshot-source-clock-fn-",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Exact copy of store",id:"exact-copy-of-store",level:4},{value:"Exact copy on trigger",id:"exact-copy-on-trigger",level:4},{value:"Copy on trigger with transformation",id:"copy-on-trigger-with-transformation",level:4}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"snapshot"},"snapshot"),(0,o.kt)("admonition",{title:"since",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"patronum 1.7.0")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { snapshot } from 'patronum';\n// or\nimport { snapshot } from 'patronum/snapshot';\n")),(0,o.kt)("h2",{id:"result--snapshot-source-clock-fn-"},(0,o.kt)("inlineCode",{parentName:"h2"},"result = snapshot({ source, clock, fn })")),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"This method allows to copy any store on optional trigger unit.\nIt useful when you want to save previous state of store before some actions."),(0,o.kt)("h3",{id:"formulae"},"Formulae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"result = snapshot({ source, clock, fn });\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Call ",(0,o.kt)("inlineCode",{parentName:"li"},"fn")," with data from ",(0,o.kt)("inlineCode",{parentName:"li"},"source")," while ",(0,o.kt)("inlineCode",{parentName:"li"},"clock")," triggered, and create store with the value"),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"fn")," returns ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"),", the update will be skipped.")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"source")," (",(0,o.kt)("a",{parentName:"li",href:"https://effector.dev/docs/api/effector/store"},(0,o.kt)("em",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"em"},"Store"))),") \u2014 Source store, data from this unit passed to ",(0,o.kt)("inlineCode",{parentName:"li"},"fn")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"clock")," (",(0,o.kt)("a",{parentName:"li",href:"https://effector.dev/docs/api/effector/event"},(0,o.kt)("em",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"em"},"Event"))),", ",(0,o.kt)("a",{parentName:"li",href:"https://effector.dev/docs/api/effector/effect"},(0,o.kt)("em",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"em"},"Effect"))),", ",(0,o.kt)("a",{parentName:"li",href:"https://effector.dev/docs/api/effector/store"},(0,o.kt)("em",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"em"},"Store"))),") \u2014 Trigger unit"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"fn")," ",(0,o.kt)("inlineCode",{parentName:"li"},"((value: T) => U)")," \u2014 Transformation function")),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"result")," (",(0,o.kt)("a",{parentName:"li",href:"https://effector.dev/docs/api/effector/store"},(0,o.kt)("em",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"em"},"Store"))),") \u2014 Copied store")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h4",{id:"exact-copy-of-store"},"Exact copy of store"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from 'effector';\nimport { snapshot } from 'patronum/snapshot';\n\nconst $original = createStore<string>('Example');\n\nconst $copy = snapshot({ source: $original });\n")),(0,o.kt)("h4",{id:"exact-copy-on-trigger"},"Exact copy on trigger"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { restore, createEvent } from 'effector';\nimport { snapshot } from 'patronum/snapshot';\n\nconst changeText = createEvent<string>();\nconst createSnapshot = createEvent();\n\nconst $original = restore(changeText, 'Example');\n\nconst $snapshot = snapshot({\n  source: $original,\n  clock: createSnapshot,\n});\n\nchangeText('New text');\n\n// $original -> Store with \"New text\"\n// $snapshot -> Store with \"Example\"\n\ncreateSnapshot();\n\n// $original -> Store with \"New text\"\n// $snapshot -> Store with \"New text\"\n")),(0,o.kt)("h4",{id:"copy-on-trigger-with-transformation"},"Copy on trigger with transformation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { restore, createEvent } from \'effector\';\nimport { snapshot } from \'patronum/snapshot\';\n\nconst changeText = createEvent<string>();\nconst createSnapshot = createEvent();\n\nconst $original = restore(changeText, \'Example\');\n\nconst $lengthSnapshot = snapshot({\n  source: $original,\n  clock: createSnapshot,\n  fn: (text) => text.length,\n});\n\n// $original -> Store with "Example"\n// $lengthSnapshot -> Store with 7 (length of "Example")\n\nchangeText(\'New long text\');\n\n// $original -> Store with "New long text"\n// $lengthSnapshot -> Store with 7 (length of "Example")\n\ncreateSnapshot();\n\n// $original -> Store with "New long text"\n// $lengthSnapshot -> Store with 13 (length of "New long text")\n')))}m.isMDXComponent=!0}}]);