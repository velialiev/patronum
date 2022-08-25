"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[900],{3258:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(2685),a=n(1244),o=(n(7378),n(5318)),l=["components"],i={},s="equals (experimental)",u={unversionedId:"equals/readme",id:"equals/readme",title:"equals (experimental)",description:"patronum 1.8.3",source:"@site/../src/equals/readme.md",sourceDirName:"equals",slug:"/equals/",permalink:"/methods/equals/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/equals/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"empty (experimental)",permalink:"/methods/empty/"},next:{title:"every",permalink:"/methods/every/"}},c={},p=[{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Composition",id:"composition",level:3},{value:"Alternative",id:"alternative",level:3}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"equals-experimental"},"equals (experimental)"),(0,o.kt)("admonition",{title:"since",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"patronum 1.8.3")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { equals } from 'patronum';\n// or\nimport { equals } from 'patronum/equals';\n")),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"The method allows to compare store value with another value wrote as literal or contained in another store."),(0,o.kt)("h3",{id:"formulae"},"Formulae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"$isEquals = equals(first, second);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$isEquals")," will be store with ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," if value in ",(0,o.kt)("inlineCode",{parentName:"li"},"first")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"second")," is equals by comparing them with ",(0,o.kt)("inlineCode",{parentName:"li"},"==="))),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"first: Store<T> | T")," \u2014 A value or the store to compare with ",(0,o.kt)("inlineCode",{parentName:"li"},"second")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"second: Store<T> | T")," \u2014 A value or the store to be compared with ",(0,o.kt)("inlineCode",{parentName:"li"},"first"))),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$isEquals: Store<boolean>")," \u2014 The store contains ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," if values is equals")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const $first = createStore('foo bar');\nconst $isEquals = equals($first, 'foo bar');\n\nconsole.assert(true === $isEquals.getState());\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://share.effector.dev/UtAWVd9r"},"Try it")),(0,o.kt)("h3",{id:"composition"},"Composition"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"equals")," operator can be composed with any other method of patronum:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const $account = createStore<Account | null>(null);\nconst $authorized = not(equals($account, null));\n// $authorized contains `true` only when $account contains not `null`\n")),(0,o.kt)("h3",{id:"alternative"},"Alternative"),(0,o.kt)("p",null,"Compare to literal value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from 'effector';\nconst $first = createStore('foo bar');\nconst $isEquals = $first.map((first) => first === 'foo bar');\n\nconsole.assert(true === $isEquals.getState());\n")),(0,o.kt)("p",null,"Compare to another store:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore, combine } from 'effector';\nconst $first = createStore('foo bar');\nconst $second = createStore('foo bar');\nconst $isEquals = combine($first, $second, (first, second) => first === second);\n\nconsole.assert(true === $isEquals.getState());\n")))}f.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);