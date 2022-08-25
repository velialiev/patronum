"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[549],{734:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(2685),a=n(1244),o=(n(7378),n(5318)),i=["components"],l={},s="either (experimental)",u={unversionedId:"either/readme",id:"either/readme",title:"either (experimental)",description:"patronum 1.8.3",source:"@site/../src/either/readme.md",sourceDirName:"either",slug:"/either/",permalink:"/methods/either/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/either/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"delay",permalink:"/methods/delay/"},next:{title:"empty (experimental)",permalink:"/methods/empty/"}},m={},p=[{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Object form arguments",id:"object-form-arguments",level:3},{value:"Example",id:"example",level:3},{value:"Select just one argument",id:"select-just-one-argument",level:3},{value:"Alternative",id:"alternative",level:3}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"either-experimental"},"either (experimental)"),(0,o.kt)("admonition",{title:"since",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"patronum 1.8.3")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { either } from 'patronum';\n// or\nimport { either } from 'patronum/either';\n")),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"The method select one or other value based on condition.\nYou can think about it as a ternary operator ",(0,o.kt)("inlineCode",{parentName:"p"},"a ? b : c"),"."),(0,o.kt)("h3",{id:"formulae"},"Formulae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"$result = either($filter, then, other);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$result")," store contains value of ",(0,o.kt)("inlineCode",{parentName:"li"},"then")," if ",(0,o.kt)("inlineCode",{parentName:"li"},"$filter")," store contains ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$result")," store contains value of ",(0,o.kt)("inlineCode",{parentName:"li"},"other")," if ",(0,o.kt)("inlineCode",{parentName:"li"},"$filter")," store contains ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"$filter: Store<boolean>")," \u2014 The store contains condition how to select between ",(0,o.kt)("inlineCode",{parentName:"li"},"then")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"other")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"then: Store<Then> | Then")," \u2014 First value can be a Store, and returned when ",(0,o.kt)("inlineCode",{parentName:"li"},"$filter")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"other: Store<Other> | Other")," \u2014 Second value can be a Store too, returned only when ",(0,o.kt)("inlineCode",{parentName:"li"},"$filter")," if ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Then")," \u2014 Generic type argument. Required only to distinguish this type from ",(0,o.kt)("inlineCode",{parentName:"li"},"Other")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Other")," \u2014 Generic type argument used for the alternative value when ",(0,o.kt)("inlineCode",{parentName:"li"},"$filter")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$result: Store<Then | Other>")," \u2014 Store contains one of the value depends on ",(0,o.kt)("inlineCode",{parentName:"li"},"$filter")," value")),(0,o.kt)("h3",{id:"object-form-arguments"},"Object form arguments"),(0,o.kt)("p",null,"For some cases it is useful to add names for each argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"$result = either({\n  filter,\n  then,\n  other,\n});\n")),(0,o.kt)("p",null,"Types, descriptions, and usage the same as for positional arguments."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const $showLatest = createStore(false);\nconst $latestTweets = createStore<Tweet[]>([]);\nconst $recommendedTweets = createStore<Tweet[]>([]);\n\nexport const $tweets = either($showLatest, $latestTweets, $recommendedTweets);\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://share.effector.dev/NGmPTxSG"},"Try it")),(0,o.kt)("h3",{id:"select-just-one-argument"},"Select just one argument"),(0,o.kt)("p",null,"Sometimes we want to write an inverted expression, like this imperative code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"if (!active) {\n  return another;\n}\nreturn null;\n")),(0,o.kt)("p",null,"We can write exactly ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," as is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const $result = either($active, null, $another); // Store<null | Another>\n")),(0,o.kt)("p",null,"We may want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"not")," for condition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { either, not } from 'patronum';\n\nconst $result = either(not($active), $another, null);\n")),(0,o.kt)("h3",{id:"alternative"},"Alternative"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore, combine } from 'effector';\nconst $showLatest = createStore(false);\nconst $latestTweets = createStore<Tweet[]>([]);\nconst $recommendedTweets = createStore<Tweet[]>([]);\n\nexport const $tweets = combine(\n  $showLatest,\n  $latestTweets,\n  $recommendedTweets,\n  (showLatest, latestTweets, recommendedTweets) =>\n    showLatest ? latestTweets : recommendedTweets,\n);\n")))}d.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);