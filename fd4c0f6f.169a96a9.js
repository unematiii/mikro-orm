(window.webpackJsonp=window.webpackJsonp||[]).push([[998],{1068:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),a=(r(0),r(1086)),c={id:"highlighter",title:"Interface: Highlighter",sidebar_label:"Highlighter"},o={unversionedId:"api/interfaces/highlighter",id:"version-4.3/api/interfaces/highlighter",isDocsHomePage:!1,title:"Interface: Highlighter",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/interfaces/highlighter.md",slug:"/api/interfaces/highlighter",permalink:"/docs/api/interfaces/highlighter",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/interfaces/highlighter.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1608226300,sidebar_label:"Highlighter",sidebar:"version-4.3/API",previous:{title:"Interface: ForeignKey",permalink:"/docs/api/interfaces/foreignkey"},next:{title:"Interface: HydratorConstructor",permalink:"/docs/api/interfaces/hydratorconstructor"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implemented by",id:"implemented-by",children:[]},{value:"Methods",id:"methods",children:[{value:"highlight",id:"highlight",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Highlighter"))),Object(a.b)("h2",{id:"implemented-by"},"Implemented by"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/classes/nullhighlighter"}),"NullHighlighter"))),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"highlight"},"highlight"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"highlight"),"(",Object(a.b)("inlineCode",{parentName:"p"},"text"),": string): string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/typings.ts#L416"}),"packages/core/src/typings.ts:416"))),Object(a.b)("h4",{id:"parameters"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"text")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," string"))}p.isMDXComponent=!0},1086:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,d=s["".concat(c,".").concat(u)]||s[u]||h[u]||a;return r?i.a.createElement(d,o(o({ref:t},b),{},{components:r})):i.a.createElement(d,o({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<a;b++)c[b]=r[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);