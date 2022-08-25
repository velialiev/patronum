"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[945],{8040:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var n=r(2685),a=r(1244),o=(r(7378),r(5318)),i=["components"],l={},s="format",m={unversionedId:"format/readme",id:"format/readme",title:"format",description:"patronum 1.7.0",source:"@site/../src/format/readme.md",sourceDirName:"format",slug:"/format/",permalink:"/methods/format/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/format/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"every",permalink:"/methods/every/"},next:{title:"inFlight",permalink:"/methods/in-flight/"}},p={},u=[{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example with stores with strings",id:"example-with-stores-with-strings",level:3},{value:"Example with stores with arrays",id:"example-with-stores-with-arrays",level:3}],c={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"format"},"format"),(0,o.kt)("admonition",{title:"since",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"patronum 1.7.0")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { format } from 'patronum';\n// or\nimport { format } from 'patronum/format';\n")),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Sometimes you need to combine several stores into one string, but without ",(0,o.kt)("inlineCode",{parentName:"p"},"format")," you need to write boring ",(0,o.kt)("inlineCode",{parentName:"p"},"combine")," with combinator-function."),(0,o.kt)("h3",{id:"formulae"},"Formulae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"$string = format`parts${$store}`;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on each ",(0,o.kt)("inlineCode",{parentName:"li"},"$store")," change recalculate template and update ",(0,o.kt)("inlineCode",{parentName:"li"},"$string"))),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"format")," should be called as ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates"},"tagged template literal function")),(0,o.kt)("p",null,"Each part of template literal will be converted to string by ",(0,o.kt)("inlineCode",{parentName:"p"},"String(argument)"),",\nthat's why format supports ",(0,o.kt)("inlineCode",{parentName:"p"},"Store<boolean | string | number>"),", but also you can pass list of values, and raw values."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,"Method always returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Store<string>")),(0,o.kt)("h3",{id:"example-with-stores-with-strings"},"Example with stores with strings"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from 'effector';\nimport { format } from 'patronum';\n\nconst $firstName = createStore('John');\nconst $lastName = createStore('Doe');\n\nconst $fullName = format`${$firstName} ${$lastName}`;\n$fullName.watch(console.log);\n// => John Doe\n")),(0,o.kt)("h3",{id:"example-with-stores-with-arrays"},"Example with stores with arrays"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from 'effector';\nimport { format } from 'patronum';\n\nconst $list = createStore(['First', 'Second', 'Third']);\n\nconst $string = format`We have: \"${list}\"`;\n$string.watch(console.log);\n// => We have: \"First, Second, Third\"\n")))}f.isMDXComponent=!0},5318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(r),f=a,d=c["".concat(s,".").concat(f)]||c[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);