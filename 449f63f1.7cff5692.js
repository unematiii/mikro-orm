(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(a),j=n,s=m["".concat(c,".").concat(j)]||m[j]||O[j]||b;return a?r.a.createElement(s,o(o({ref:t},l),{},{components:a})):r.a.createElement(s,o({ref:t},l))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<b;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},329:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),b=(a(0),a(1086)),c={id:"mongoentitymanager",title:"Class: MongoEntityManager<D>",sidebar_label:"MongoEntityManager"},o={unversionedId:"api/classes/mongoentitymanager",id:"api/classes/mongoentitymanager",isDocsHomePage:!1,title:"Class: MongoEntityManager<D>",description:"inheritdoc",source:"@site/docs/api/classes/mongoentitymanager.md",slug:"/api/classes/mongoentitymanager",permalink:"/docs/next/api/classes/mongoentitymanager",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/mongoentitymanager.md",version:"current",sidebar_label:"MongoEntityManager",sidebar:"API",previous:{title:"Class: MongoDriver",permalink:"/docs/next/api/classes/mongodriver"},next:{title:"Class: MongoEntityRepository<T>",permalink:"/docs/next/api/classes/mongoentityrepository"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"aggregate",id:"aggregate",children:[]},{value:"getCollection",id:"getcollection",children:[]},{value:"getRepository",id:"getrepository",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"inheritdoc"))," "),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"D")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/mongodriver"}),"MongoDriver")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MongoDriver")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"any"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"MongoEntityManager")))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"aggregate"},"aggregate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"aggregate"),"(",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#entityname"}),"EntityName"),"<any",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"pipeline"),": any[]): Promise<any[]",">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/mongodb/src/MongoEntityManager.ts#L14"}),"packages/mongodb/src/MongoEntityManager.ts:14"))),Object(b.b)("p",null,"Shortcut to driver's aggregate method. Available in MongoDriver only."),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#entityname"}),"EntityName"),"<any",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"pipeline")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise<any[]",">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getcollection"},"getCollection"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getCollection"),"(",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#entityname"}),"EntityName"),"<any",">","): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/collection"}),"Collection")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/mongodb/src/MongoEntityManager.ts#L19"}),"packages/mongodb/src/MongoEntityManager.ts:19"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#entityname"}),"EntityName"),"<any",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/collection"}),"Collection")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getrepository"},"getRepository"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getRepository"),"<T, U",">","(",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#entityname"}),"EntityName"),"<T",">","): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#getrepository"}),"GetRepository"),"<T, U",">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/mongodb/src/MongoEntityManager.ts#L23"}),"packages/mongodb/src/MongoEntityManager.ts:23"))),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),"<T",">"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"U")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/entityrepository"}),"EntityRepository"),"<T",">"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MongoEntityRepository<T","\\",">")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#entityname"}),"EntityName"),"<T",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#getrepository"}),"GetRepository"),"<T, U",">"))}p.isMDXComponent=!0}}]);