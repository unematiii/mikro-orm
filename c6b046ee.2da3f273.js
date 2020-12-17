(window.webpackJsonp=window.webpackJsonp||[]).push([[769],{1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return m}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),O=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},j=function(e){var t=O(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),j=O(a),d=r,m=j["".concat(c,".").concat(d)]||j[d]||o[d]||n;return a?b.a.createElement(m,p(p({ref:t},i),{},{components:a})):b.a.createElement(m,p({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<n;i++)c[i]=a[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},839:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return O}));var r=a(3),b=a(7),n=(a(0),a(1086)),c={id:"objecthydrator",title:"Class: ObjectHydrator",sidebar_label:"ObjectHydrator"},p={unversionedId:"api/classes/objecthydrator",id:"version-4.2/api/classes/objecthydrator",isDocsHomePage:!1,title:"Class: ObjectHydrator",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/objecthydrator.md",slug:"/api/classes/objecthydrator",permalink:"/docs/4.2/api/classes/objecthydrator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/objecthydrator.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1608226300,sidebar_label:"ObjectHydrator",sidebar:"version-4.2/API",previous:{title:"Class: ObjectCriteriaNode",permalink:"/docs/4.2/api/classes/objectcriterianode"},next:{title:"Class: OptimisticLockError<T>",permalink:"/docs/4.2/api/classes/optimisticlockerror"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"metadata",id:"metadata",children:[]},{value:"platform",id:"platform",children:[]}]},{value:"Methods",id:"methods",children:[{value:"createCollectionItemMapper",id:"createcollectionitemmapper",children:[]},{value:"getEntityHydrator",id:"getentityhydrator",children:[]},{value:"getProperties",id:"getproperties",children:[]},{value:"hydrate",id:"hydrate",children:[]},{value:"hydrateProperty",id:"hydrateproperty",children:[]},{value:"hydrateReference",id:"hydratereference",children:[]}]},{value:"Object literals",id:"object-literals",children:[{value:"hydrators",id:"hydrators",children:[]}]}],i={rightToc:l};function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/hydrator"}),"Hydrator")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"ObjectHydrator")))),Object(n.b)("h2",{id:"implements"},"Implements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.2/api/interfaces/ihydrator"}),"IHydrator"))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new ObjectHydrator"),"(",Object(n.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/metadatastorage"}),"MetadataStorage"),", ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/platform"}),"Platform"),"): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/objecthydrator"}),"ObjectHydrator")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/hydrator"}),"Hydrator"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/hydrator#constructor"}),"constructor"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/hydration/Hydrator.ts#L7"}),"packages/core/src/hydration/Hydrator.ts:7"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"metadata")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/classes/metadatastorage"}),"MetadataStorage"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/classes/platform"}),"Platform"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/objecthydrator"}),"ObjectHydrator")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"metadata"},"metadata"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/metadatastorage"}),"MetadataStorage")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/hydrator"}),"Hydrator"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/hydrator#metadata"}),"metadata"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/hydration/Hydrator.ts#L9"}),"packages/core/src/hydration/Hydrator.ts:9"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"platform"},"platform"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/platform"}),"Platform")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/hydrator"}),"Hydrator"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/hydrator#platform"}),"platform"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/hydration/Hydrator.ts#L10"}),"packages/core/src/hydration/Hydrator.ts:10"))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"createcollectionitemmapper"},"createCollectionItemMapper"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"createCollectionItemMapper"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/entityproperty"}),"EntityProperty"),"): string[]"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/hydration/ObjectHydrator.ts#L140"}),"packages/core/src/hydration/ObjectHydrator.ts:140"))),Object(n.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/entityproperty"}),"EntityProperty"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string[]"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getentityhydrator"},"getEntityHydrator"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"getEntityHydrator"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(n.b)("inlineCode",{parentName:"p"},"type"),": ",'"',"full",'"'," ","|"," ",'"',"returning",'"'," ","|"," ",'"',"reference",'"',"): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#entityhydrator"}),"EntityHydrator"),"<","T>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/hydration/ObjectHydrator.ts#L38"}),"packages/core/src/hydration/ObjectHydrator.ts:38"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"internal"))," Highly performance-sensitive method."),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"type")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"full",'"'," ","|"," ",'"',"returning",'"'," ","|"," ",'"',"reference",'"')))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#entityhydrator"}),"EntityHydrator"),"<","T>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getproperties"},"getProperties"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected"),Object(n.b)("strong",{parentName:"p"},"getProperties"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(n.b)("inlineCode",{parentName:"p"},"type"),": ",'"',"full",'"'," ","|"," ",'"',"returning",'"'," ","|"," ",'"',"reference",'"',"): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>[]"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/hydrator"}),"Hydrator"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/hydrator#getproperties"}),"getProperties"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/hydration/Hydrator.ts#L32"}),"packages/core/src/hydration/Hydrator.ts:32"))),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"type")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"full",'"'," ","|"," ",'"',"returning",'"'," ","|"," ",'"',"reference",'"')))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>[]"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"hydrate"},"hydrate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"hydrate"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>, ",Object(n.b)("inlineCode",{parentName:"p"},"factory"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entityfactory"}),"EntityFactory"),", ",Object(n.b)("inlineCode",{parentName:"p"},"type"),": ",'"',"full",'"'," ","|"," ",'"',"returning",'"'," ","|"," ",'"',"reference",'"',", ",Object(n.b)("inlineCode",{parentName:"p"},"newEntity?"),": boolean, ",Object(n.b)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": boolean): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Implementation of ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/interfaces/ihydrator"}),"IHydrator"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/hydrator"}),"Hydrator"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/hydrator#hydrate"}),"hydrate"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/hydration/ObjectHydrator.ts#L22"}),"packages/core/src/hydration/ObjectHydrator.ts:22"))),Object(n.b)("p",null,"Hydrates the whole entity. This process handles custom type conversions, creating missing Collection instances,\nmapping FKs to entity instances, as well as merging those entities."),Object(n.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"factory")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entityfactory"}),"EntityFactory")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"type")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"full",'"'," ","|"," ",'"',"returning",'"'," ","|"," ",'"',"reference",'"'),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"newEntity")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"convertCustomTypes")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"hydrateproperty"},"hydrateProperty"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected"),Object(n.b)("strong",{parentName:"p"},"hydrateProperty"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/entityproperty"}),"EntityProperty"),", ",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>, ",Object(n.b)("inlineCode",{parentName:"p"},"factory"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entityfactory"}),"EntityFactory"),", ",Object(n.b)("inlineCode",{parentName:"p"},"newEntity?"),": boolean, ",Object(n.b)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": boolean): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/hydrator"}),"Hydrator"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/hydrator#hydrateproperty"}),"hydrateProperty"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/hydration/Hydrator.ts#L45"}),"packages/core/src/hydration/Hydrator.ts:45"))),Object(n.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/entityproperty"}),"EntityProperty"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"factory")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entityfactory"}),"EntityFactory"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"newEntity?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"convertCustomTypes?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"hydratereference"},"hydrateReference"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"hydrateReference"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>, ",Object(n.b)("inlineCode",{parentName:"p"},"factory"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entityfactory"}),"EntityFactory"),", ",Object(n.b)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": boolean): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Implementation of ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/interfaces/ihydrator"}),"IHydrator"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/hydrator"}),"Hydrator"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/hydrator#hydratereference"}),"hydrateReference"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/hydration/ObjectHydrator.ts#L30"}),"packages/core/src/hydration/ObjectHydrator.ts:30"))),Object(n.b)("p",null,"Hydrates primary keys only"),Object(n.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"factory")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entityfactory"}),"EntityFactory")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"convertCustomTypes")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("h2",{id:"object-literals"},"Object literals"),Object(n.b)("h3",{id:"hydrators"},"hydrators"),Object(n.b)("p",null,"\u25aa ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"hydrators"),": object"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/hydration/ObjectHydrator.ts#L13"}),"packages/core/src/hydration/ObjectHydrator.ts:13"))),Object(n.b)("h4",{id:"properties-1"},"Properties:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"full")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Map","<","string, ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#entityhydrator"}),"EntityHydrator"),"<","any>>"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"new Map","<","string, EntityHydrator","<","any>>()")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"reference")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Map","<","string, ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#entityhydrator"}),"EntityHydrator"),"<","any>>"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"new Map","<","string, EntityHydrator","<","any>>()")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"returning")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Map","<","string, ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#entityhydrator"}),"EntityHydrator"),"<","any>>"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"new Map","<","string, EntityHydrator","<","any>>()")))))}O.isMDXComponent=!0}}]);