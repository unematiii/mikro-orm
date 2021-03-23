(window.webpackJsonp=window.webpackJsonp||[]).push([[795],{1112:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),o=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=o(a),d=r,O=m["".concat(b,".").concat(d)]||m[d]||s[d]||c;return a?n.a.createElement(O,p(p({ref:t},l),{},{components:a})):n.a.createElement(O,p({ref:t},l))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,b[1]=p;for(var l=2;l<c;l++)b[l]=a[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},868:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(8),c=(a(0),a(1112)),b={id:"core.filecacheadapter",title:"Class: FileCacheAdapter",sidebar_label:"FileCacheAdapter",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/core.filecacheadapter",id:"version-4.5/api/classes/core.filecacheadapter",isDocsHomePage:!1,title:"Class: FileCacheAdapter",description:"Class: FileCacheAdapter",source:"@site/versioned_docs/version-4.5/api/classes/core.filecacheadapter.md",slug:"/api/classes/core.filecacheadapter",permalink:"/docs/api/classes/core.filecacheadapter",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1616490181,formattedLastUpdatedAt:"3/23/2021",sidebar_label:"FileCacheAdapter",sidebar:"version-4.5/API",previous:{title:"Class: ExceptionConverter",permalink:"/docs/api/classes/core.exceptionconverter"},next:{title:"Class: ForeignKeyConstraintViolationException",permalink:"/docs/api/classes/core.foreignkeyconstraintviolationexception"}},i=[{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"VERSION",id:"version",children:[]}]},{value:"Methods",id:"methods",children:[{value:"clear",id:"clear",children:[]},{value:"get",id:"get",children:[]},{value:"getHash",id:"gethash",children:[]},{value:"path",id:"path",children:[]},{value:"set",id:"set",children:[]}]}],l={toc:i};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-filecacheadapter"},"Class: FileCacheAdapter"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".FileCacheAdapter"),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/api/interfaces/core.cacheadapter"},Object(c.b)("em",{parentName:"a"},"CacheAdapter")))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new FileCacheAdapter"),"(",Object(c.b)("inlineCode",{parentName:"p"},"options"),": { ",Object(c.b)("inlineCode",{parentName:"p"},"cacheDir"),": ",Object(c.b)("em",{parentName:"p"},"string"),"  }, ",Object(c.b)("inlineCode",{parentName:"p"},"baseDir"),": ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"pretty?"),": ",Object(c.b)("em",{parentName:"p"},"boolean"),"): ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.filecacheadapter"},Object(c.b)("em",{parentName:"a"},"FileCacheAdapter"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"object")),Object(c.b)("td",{parentName:"tr",align:"left"},"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"options.cacheDir")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string")),Object(c.b)("td",{parentName:"tr",align:"left"},"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"baseDir")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string")),Object(c.b)("td",{parentName:"tr",align:"left"},"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"pretty")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"boolean")),Object(c.b)("td",{parentName:"tr",align:"left"},"false")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.filecacheadapter"},Object(c.b)("em",{parentName:"a"},"FileCacheAdapter"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/FileCacheAdapter.ts#L9"},"packages/core/src/cache/FileCacheAdapter.ts:9")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"version"},"VERSION"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Private")," ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"VERSION"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/FileCacheAdapter.ts#L9"},"packages/core/src/cache/FileCacheAdapter.ts:9")),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"clear"},"clear"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"clear"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Clears all items stored in the cache."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Implementation of: ",Object(c.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.cacheadapter"},"CacheAdapter")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/FileCacheAdapter.ts#L51"},"packages/core/src/cache/FileCacheAdapter.ts:51")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"get"},"get"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"get"),"(",Object(c.b)("inlineCode",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(c.b)("p",null,"Gets the items under ",Object(c.b)("inlineCode",{parentName:"p"},"name")," key from the cache."),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(c.b)("p",null,"Implementation of: ",Object(c.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.cacheadapter"},"CacheAdapter")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/FileCacheAdapter.ts#L18"},"packages/core/src/cache/FileCacheAdapter.ts:18")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"gethash"},"getHash"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Private"),Object(c.b)("strong",{parentName:"p"},"getHash"),"(",Object(c.b)("inlineCode",{parentName:"p"},"origin"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"null")," ","|"," string",">"),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"origin")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"null")," ","|"," string",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/FileCacheAdapter.ts#L62"},"packages/core/src/cache/FileCacheAdapter.ts:62")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"path"},"path"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Private"),Object(c.b)("strong",{parentName:"p"},"path"),"(",Object(c.b)("inlineCode",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<string",">"),Object(c.b)("h4",{id:"parameters-3"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<string",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/FileCacheAdapter.ts#L57"},"packages/core/src/cache/FileCacheAdapter.ts:57")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"set"},"set"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"set"),"(",Object(c.b)("inlineCode",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"data"),": ",Object(c.b)("em",{parentName:"p"},"any"),", ",Object(c.b)("inlineCode",{parentName:"p"},"origin"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Sets the item to the cache. ",Object(c.b)("inlineCode",{parentName:"p"},"origin")," is used for cache invalidation and should reflect the change in data."),Object(c.b)("h4",{id:"parameters-4"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"any"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"origin")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Implementation of: ",Object(c.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.cacheadapter"},"CacheAdapter")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/FileCacheAdapter.ts#L38"},"packages/core/src/cache/FileCacheAdapter.ts:38")))}o.isMDXComponent=!0}}]);