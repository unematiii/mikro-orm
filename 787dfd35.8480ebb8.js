(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),o=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=o(a),m=n,j=s["".concat(c,".").concat(m)]||s[m]||O[m]||r;return a?b.a.createElement(j,i(i({ref:t},l),{},{components:a})):b.a.createElement(j,i({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<r;l++)c[l]=a[l];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},539:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var n=a(3),b=a(7),r=(a(0),a(1086)),c={id:"baseentity",title:"Class: BaseEntity<T, PK, P>",sidebar_label:"BaseEntity"},i={unversionedId:"api/classes/baseentity",id:"version-4.3/api/classes/baseentity",isDocsHomePage:!1,title:"Class: BaseEntity<T, PK, P>",description:"Type parameters",source:"@site/versioned_docs/version-4.3/api/classes/baseentity.md",slug:"/api/classes/baseentity",permalink:"/docs/api/classes/baseentity",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/baseentity.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1608226300,sidebar_label:"BaseEntity",sidebar:"version-4.3/API",previous:{title:"Class: ArrayType<T>",permalink:"/docs/api/classes/arraytype"},next:{title:"Class: BigIntType",permalink:"/docs/api/classes/biginttype"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"init",id:"init",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"populated",id:"populated",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"toObject",id:"toobject",children:[]},{value:"toReference",id:"toreference",children:[]}]}],l={rightToc:p};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"type-parameters"},"Type parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api#anyentity"}),"AnyEntity"),"<","T>"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"PK")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"keyof T"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"P")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api#populate"}),"Populate"),"<","T> ","|"," unknown"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unknown")))),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"BaseEntity"))),Object(r.b)("h2",{id:"implements"},"Implements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/interfaces/iwrappedentity"}),"IWrappedEntity"),"<","T, PK, P>")),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new BaseEntity"),"(): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/baseentity"}),"BaseEntity")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/BaseEntity.ts#L5"}),"packages/core/src/entity/BaseEntity.ts:5"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/baseentity"}),"BaseEntity")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"assign"},"assign"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"assign"),"(",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>, ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/assignoptions"}),"AssignOptions"),"): T"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/BaseEntity.ts#L31"}),"packages/core/src/entity/BaseEntity.ts:31"))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/assignoptions"}),"AssignOptions"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"init"},"init"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"init"),"(",Object(r.b)("inlineCode",{parentName:"p"},"populated?"),": boolean): Promise","<","T>"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/BaseEntity.ts#L35"}),"packages/core/src/entity/BaseEntity.ts:35"))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"populated")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Promise","<","T>"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isinitialized"},"isInitialized"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isInitialized"),"(): boolean"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Implementation of ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/interfaces/iwrappedentity"}),"IWrappedEntity"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/BaseEntity.ts#L11"}),"packages/core/src/entity/BaseEntity.ts:11"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"populated"},"populated"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"populated"),"(",Object(r.b)("inlineCode",{parentName:"p"},"populated?"),": boolean): void"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Implementation of ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/interfaces/iwrappedentity"}),"IWrappedEntity"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/BaseEntity.ts#L15"}),"packages/core/src/entity/BaseEntity.ts:15"))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"populated")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," void"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"tojson"},"toJSON"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toJSON"),"(...",Object(r.b)("inlineCode",{parentName:"p"},"args"),": any[]): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api#dictionary"}),"Dictionary")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Implementation of ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/interfaces/iwrappedentity"}),"IWrappedEntity"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/BaseEntity.ts#L27"}),"packages/core/src/entity/BaseEntity.ts:27"))),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"...args")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api#dictionary"}),"Dictionary")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"toobject"},"toObject"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toObject"),"(",Object(r.b)("inlineCode",{parentName:"p"},"ignoreFields?"),": string[]): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api#dictionary"}),"Dictionary")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Implementation of ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/interfaces/iwrappedentity"}),"IWrappedEntity"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/BaseEntity.ts#L23"}),"packages/core/src/entity/BaseEntity.ts:23"))),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ignoreFields")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api#dictionary"}),"Dictionary")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"toreference"},"toReference"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toReference"),"(): any"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Implementation of ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/interfaces/iwrappedentity"}),"IWrappedEntity"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/BaseEntity.ts#L19"}),"packages/core/src/entity/BaseEntity.ts:19"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," any"))}o.isMDXComponent=!0}}]);