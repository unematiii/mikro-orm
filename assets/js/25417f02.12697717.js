(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1254:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,m=s["".concat(b,".").concat(u)]||s[u]||d[u]||c;return a?n.a.createElement(m,l(l({ref:t},o),{},{components:a})):n.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var o=2;o<c;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},225:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),c=(a(0),a(1254)),b={id:"knex.knex.as",title:"Interface: As<TRecord, TResult>",sidebar_label:"As",hide_title:!0},l={unversionedId:"api/interfaces/knex.knex.as",id:"version-4.4/api/interfaces/knex.knex.as",isDocsHomePage:!1,title:"Interface: As<TRecord, TResult>",description:"Interface: As",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.as.md",slug:"/api/interfaces/knex.knex.as",permalink:"/docs/api/interfaces/knex.knex.as",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.as.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612171410,sidebar_label:"As",sidebar:"version-4.4/API",previous:{title:"Interface: AlterTableBuilder",permalink:"/docs/api/interfaces/knex.knex.altertablebuilder"},next:{title:"Interface: AsymmetricAggregation<TRecord, TResult, TValue>",permalink:"/docs/api/interfaces/knex.knex.asymmetricaggregation"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],o={toc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-astrecord-tresult"},"Interface: As<TRecord, TResult",">"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".As"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"TRecord"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"TResult"))))),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"As"))),Object(c.b)("h2",{id:"callable"},"Callable"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"As"),"(",Object(c.b)("inlineCode",{parentName:"p"},"columnName"),": keyof TRecord): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"columnName")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"keyof TRecord")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:899"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"As"),"(",Object(c.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"columnName")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:900"))}p.isMDXComponent=!0}}]);