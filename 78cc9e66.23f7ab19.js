(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{1086:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?o.a.createElement(f,l(l({ref:t},p),{},{components:r})):o.a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},541:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(1086)),i={slug:"mikro-orm-4-released",title:"MikroORM 4: Filling the Gaps",author:"Martin Ad\xe1mek",authorTitle:"Author of MikroORM",authorURL:"https://github.com/B4nan",authorImageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4",authorTwitter:"B4nan",tags:["typescript","javascript","node","sql"]},l={permalink:"/blog/mikro-orm-4-released",source:"@site/blog/2020-09-08-mikro-orm-4-released.md",description:"After 4 months of active development, I am thrilled to announce the release of MikroORM 4. When I started to work on v4, the goal was to make it relatively small release, mainly to drop support for TypeScript 3.6 and Node.js 8, and to split the project into multiple packages, so we can have more fine grained control over the dependencies (mainly because of ts-morph having TS as a runtime dependency).",date:"2020-09-08T00:00:00.000Z",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"node",permalink:"/blog/tags/node"},{label:"sql",permalink:"/blog/tags/sql"}],title:"MikroORM 4: Filling the Gaps",readingTime:12.695,truncated:!0,prevItem:{title:"MikroORM 4.1: Let\u2019s talk about performance",permalink:"/blog/mikro-orm-4-1-released"},nextItem:{title:"MikroORM 3: Knex.js, CLI, Schema Updates, Entity Generator and\xa0more\u2026",permalink:"/blog/mikro-orm-3-released"}},c=[],p={rightToc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"After 4 months of active development, I am thrilled to announce the release of ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://github.com/mikro-orm/mikro-orm"}),"MikroORM 4"),". When I started to work on v4, the goal was to make it relatively small release, mainly to drop support for TypeScript 3.6 and Node.js 8, and to split the project into multiple packages, so we can have more fine grained control over the dependencies (mainly because of ts-morph having TS as a runtime dependency)."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"But what a major release would that be, without having a bunch of new features as well, right?")))}s.isMDXComponent=!0}}]);