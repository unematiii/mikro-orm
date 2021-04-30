(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44153],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12366:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),i={slug:"mikro-orm-4-released",title:"MikroORM 4: Filling the Gaps",author:"Martin Ad\xe1mek",authorTitle:"Author of MikroORM",authorURL:"https://github.com/B4nan",authorImageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4",authorTwitter:"B4nan",tags:["typescript","javascript","node","sql"]},l={permalink:"/blog/mikro-orm-4-released",source:"@site/blog/2020-09-08-mikro-orm-4-released.md",title:"MikroORM 4: Filling the Gaps",description:"After 4 months of active development, I am thrilled to announce the release of MikroORM 4. When I started to work on v4, the goal was to make it relatively small release, mainly to drop support for TypeScript 3.6 and Node.js 8, and to split the project into multiple packages, so we can have more fine grained control over the dependencies (mainly because of ts-morph having TS as a runtime dependency).",date:"2020-09-08T00:00:00.000Z",formattedDate:"September 8, 2020",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"node",permalink:"/blog/tags/node"},{label:"sql",permalink:"/blog/tags/sql"}],readingTime:12.695,truncated:!0,prevItem:{title:"MikroORM 4.1: Let\u2019s talk about performance",permalink:"/blog/mikro-orm-4-1-released"},nextItem:{title:"MikroORM 3: Knex.js, CLI, Schema Updates, Entity Generator and\xa0more\u2026",permalink:"/blog/mikro-orm-3-released"}},c=[],p={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After 4 months of active development, I am thrilled to announce the release of ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/mikro-orm/mikro-orm"},"MikroORM 4"),". When I started to work on v4, the goal was to make it relatively small release, mainly to drop support for TypeScript 3.6 and Node.js 8, and to split the project into multiple packages, so we can have more fine grained control over the dependencies (mainly because of ts-morph having TS as a runtime dependency)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"But what a major release would that be, without having a bunch of new features as well, right?")))}s.isMDXComponent=!0}}]);