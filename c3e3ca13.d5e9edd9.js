(window.webpackJsonp=window.webpackJsonp||[]).push([[563],{620:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),c=(n(0),n(804)),o={title:"Result cache"},i={unversionedId:"caching",id:"caching",isDocsHomePage:!1,title:"Result cache",description:"MikroORM have simple result caching mechanism. It works with those methods of",source:"@site/docs/caching.md",slug:"/caching",permalink:"/docs/next/caching",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/caching.md",version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1603662545,sidebar:"docs",previous:{title:"Using Query Builder",permalink:"/docs/next/query-builder"},next:{title:"Logging",permalink:"/docs/next/debugging"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"MikroORM have simple result caching mechanism. It works with those methods of\n",Object(c.b)("inlineCode",{parentName:"p"},"EntityManager"),": ",Object(c.b)("inlineCode",{parentName:"p"},"find()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"findOne()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"findAndCount()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"findOneOrFail()"),",\n",Object(c.b)("inlineCode",{parentName:"p"},"count()"),", as well as with ",Object(c.b)("inlineCode",{parentName:"p"},"QueryBuilder")," result methods (including ",Object(c.b)("inlineCode",{parentName:"p"},"execute"),"). "),Object(c.b)("p",null,"By default, in memory cache is used, that is shared for the whole ",Object(c.b)("inlineCode",{parentName:"p"},"MikroORM"),"\ninstance. Default expiration is 1 second."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const res = await em.find(Book, { author: { name: 'Jon Snow' } }, {\n  populate: ['author', 'tags'], \n  cache: 50, // set expiration to 50ms\n  // cache: ['cache-id', 50], // set custom cache id and expiration\n  // cache: true, // use default cache id and expiration\n});\n")),Object(c.b)("p",null,"Or with query builder:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const res = await em.createQueryBuilder(Book)\n  .where({ author: { name: 'Jon Snow' } })\n  .cache()\n  .getResultList();\n")),Object(c.b)("p",null,"We can change the default expiration as well as provide custom cache adapter in\nthe ORM configuration:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const orm = await MikroORM.init({\n  resultCache: {\n    adapter: MemoryCacheAdapter,\n    expiration: 1000, // 1s\n    options: {},\n  },\n  // ...\n});\n")),Object(c.b)("p",null,"Custom cache adapters need to implement ",Object(c.b)("inlineCode",{parentName:"p"},"CacheAdapter")," interface. "))}u.isMDXComponent=!0},804:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,b=s["".concat(o,".").concat(m)]||s[m]||d[m]||c;return n?a.a.createElement(b,i(i({ref:t},p),{},{components:n})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);