"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[485],{9663:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var a=n(5773),r=n(808),l=(n(7378),n(5318)),i=["components"],o={},u="delay",m={unversionedId:"delay/readme",id:"delay/readme",title:"delay",description:"delay({ source, timeout: number, target })",source:"@site/../src/delay/readme.md",sourceDirName:"delay",slug:"/delay/",permalink:"/methods/delay/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/delay/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"debug",permalink:"/methods/debug/"},next:{title:"either (experimental)",permalink:"/methods/either/"}},d={},c=[{value:"<code>delay({ source, timeout: number, target })</code>",id:"delay-source-timeout-number-target-",level:2},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"<code>delay({ source, timeout: Function, target })</code>",id:"delay-source-timeout-function-target-",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae-1",level:3},{value:"Arguments",id:"arguments-1",level:3},{value:"Example",id:"example-1",level:3},{value:"<code>delay({ source, timeout: Store&lt;T&gt;, target })</code>",id:"delay-source-timeout-storet-target-",level:2},{value:"Motivation",id:"motivation-1",level:3},{value:"Formulae",id:"formulae-2",level:3},{value:"Arguments",id:"arguments-2",level:3},{value:"Example",id:"example-2",level:3}],p={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"delay"},"delay"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { delay } from 'patronum/delay';\n")),(0,l.kt)("h2",{id:"delay-source-timeout-number-target-"},(0,l.kt)("inlineCode",{parentName:"h2"},"delay({ source, timeout: number, target })")),(0,l.kt)("h3",{id:"formulae"},"Formulae"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"target = delay({ source, timeout: number, target });\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When ",(0,l.kt)("inlineCode",{parentName:"li"},"source")," is triggered, wait for ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),", then trigger ",(0,l.kt)("inlineCode",{parentName:"li"},"target")," with payload of the ",(0,l.kt)("inlineCode",{parentName:"li"},"source"))),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"source")," ",(0,l.kt)("inlineCode",{parentName:"li"},"(Event<T>")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Store<T>")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Effect<T>)")," \u2014 Source unit, data from this unit used to trigger ",(0,l.kt)("inlineCode",{parentName:"li"},"target")," with."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," ",(0,l.kt)("inlineCode",{parentName:"li"},"(number)")," \u2014 time to wait before trigger ",(0,l.kt)("inlineCode",{parentName:"li"},"event")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"target")," ",(0,l.kt)("inlineCode",{parentName:"li"},"(Event<T>")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Store<T>")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Effect<T"),">)` \u2014 Optional. Target unit, that should be called after delay.")),(0,l.kt)("h3",{id:"returns"},"Returns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"event")," ",(0,l.kt)("inlineCode",{parentName:"li"},"(Event<T>)")," \u2014 New event, that triggered after delay")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { createEvent } from 'effector';\nimport { delay } from 'patronum/delay';\n\nconst trigger = createEvent<string>(); // createStore or createEffect\nconst delayed = delay({ source: trigger, timeout: 300 });\n\ndelayed.watch((payload) => console.info('triggered', payload));\n\ntrigger('hello');\n// after 300ms\n// => triggered hello\n")),(0,l.kt)("h2",{id:"delay-source-timeout-function-target-"},(0,l.kt)("inlineCode",{parentName:"h2"},"delay({ source, timeout: Function, target })")),(0,l.kt)("h3",{id:"motivation"},"Motivation"),(0,l.kt)("p",null,"This overload allows to calculate timeout from payload of ",(0,l.kt)("inlineCode",{parentName:"p"},"source"),".\nIt is useful when you know that calculations requires more time if you have more data for payload."),(0,l.kt)("h3",{id:"formulae-1"},"Formulae"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"target = delay({ source, timeout: Function, target });\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When ",(0,l.kt)("inlineCode",{parentName:"li"},"source")," is triggered, call ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," with payload to get the timeout for delay, then trigger ",(0,l.kt)("inlineCode",{parentName:"li"},"target")," with payload of the ",(0,l.kt)("inlineCode",{parentName:"li"},"source"))),(0,l.kt)("h3",{id:"arguments-1"},"Arguments"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"source")," ",(0,l.kt)("inlineCode",{parentName:"li"},"(Event<T>")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Store<T>")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Effect<T>)")," \u2014 Source unit, data from this unit used to trigger ",(0,l.kt)("inlineCode",{parentName:"li"},"target")," with."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," ",(0,l.kt)("inlineCode",{parentName:"li"},"((payload: T) => number)")," \u2014 Calculate delay for each ",(0,l.kt)("inlineCode",{parentName:"li"},"source")," call. Receives the payload of ",(0,l.kt)("inlineCode",{parentName:"li"},"source")," as argument. Should return ",(0,l.kt)("inlineCode",{parentName:"li"},"number")," \u2014 delay in milliseconds."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"target")," ",(0,l.kt)("inlineCode",{parentName:"li"},"(Event<T>")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Store<T>")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Effect<T"),">)` \u2014 Optional. Target unit, that should be called after delay.")),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { createEvent, createStore } from 'effector';\nimport { delay } from 'patronum/delay';\n\nconst update = createEvent<string>();\nconst logDelayed = createEvent<string>();\nconst $data = createStore('');\n\ndelay({\n  source: $data,\n  timeout: (string) => string.length * 100,\n  target: logDelayed,\n});\n\nlogDelayed.watch((data) => console.log('log', data));\n\nupdate('Hello');\n// after 500ms\n// => log Hello\n\nupdate('!');\n// after 100ms\n// => log !\n")),(0,l.kt)("h2",{id:"delay-source-timeout-storet-target-"},(0,l.kt)("inlineCode",{parentName:"h2"},"delay({ source, timeout: Store<T>, target })")),(0,l.kt)("h3",{id:"motivation-1"},"Motivation"),(0,l.kt)("p",null,"This overload allows you to read timeout from another store.\nIt is useful when you writing music editor and need dynamic delay for your events."),(0,l.kt)("h3",{id:"formulae-2"},"Formulae"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"target = delay({ source, timeout: $store, target });\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When ",(0,l.kt)("inlineCode",{parentName:"li"},"source")," is triggered, read timeout from ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," store, then trigger ",(0,l.kt)("inlineCode",{parentName:"li"},"target")," with payload of the ",(0,l.kt)("inlineCode",{parentName:"li"},"source"))),(0,l.kt)("h3",{id:"arguments-2"},"Arguments"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"source")," ",(0,l.kt)("inlineCode",{parentName:"li"},"(Event<T>")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Store<T>")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Effect<T>)")," \u2014 Source unit, data from this unit used to trigger ",(0,l.kt)("inlineCode",{parentName:"li"},"target")," with."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," ",(0,l.kt)("inlineCode",{parentName:"li"},"(Store<number>)")," \u2014 Store with number \u2014 delay in milliseconds."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"target")," ",(0,l.kt)("inlineCode",{parentName:"li"},"(Event<T>")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Store<T>")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Effect<T"),">)` \u2014 Optional. Target unit, that should be called after delay.")),(0,l.kt)("h3",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { createEvent, createStore } from 'effector';\nimport { delay } from 'patronum/delay';\n\nconst update = createEvent<string>();\nconst $timeout = createStore(500);\n\nconst logDelayed = delay({\n  source: update,\n  timeout: $timeout,\n});\n\nlogDelayed.watch((data) => console.log('log', data));\n\nupdate('Hello');\n// after 500ms\n// => log Hello\n")))}s.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),m=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=m(n),s=r,g=p["".concat(u,".").concat(s)]||p[s]||c[s]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);