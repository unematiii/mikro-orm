(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),l=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=l(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=l(a),d=r,O=s["".concat(c,".").concat(d)]||s[d]||m[d]||b;return a?n.a.createElement(O,p(p({ref:t},o),{},{components:a})):n.a.createElement(O,p({ref:t},o))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},354:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),b=(a(0),a(1086)),c={id:"tsmorphmetadataprovider",title:"Class: TsMorphMetadataProvider",sidebar_label:"TsMorphMetadataProvider"},p={unversionedId:"api/classes/tsmorphmetadataprovider",id:"api/classes/tsmorphmetadataprovider",isDocsHomePage:!1,title:"Class: TsMorphMetadataProvider",description:"Hierarchy",source:"@site/docs/api/classes/tsmorphmetadataprovider.md",slug:"/api/classes/tsmorphmetadataprovider",permalink:"/docs/next/api/classes/tsmorphmetadataprovider",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/tsmorphmetadataprovider.md",version:"current",sidebar_label:"TsMorphMetadataProvider",sidebar:"API",previous:{title:"Class: TransactionEventBroadcaster",permalink:"/docs/next/api/classes/transactioneventbroadcaster"},next:{title:"Class: Type<JSType, DBType>",permalink:"/docs/next/api/classes/type"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"project",id:"project",children:[]},{value:"sources",id:"sources",children:[]}]},{value:"Methods",id:"methods",children:[{value:"extractType",id:"extracttype",children:[]},{value:"getExistingSourceFile",id:"getexistingsourcefile",children:[]},{value:"getSourceFile",id:"getsourcefile",children:[]},{value:"initProperties",id:"initproperties",children:[]},{value:"initPropertyType",id:"initpropertytype",children:[]},{value:"initSourceFiles",id:"initsourcefiles",children:[]},{value:"loadEntityMetadata",id:"loadentitymetadata",children:[]},{value:"processWrapper",id:"processwrapper",children:[]},{value:"readTypeFromSource",id:"readtypefromsource",children:[]},{value:"useCache",id:"usecache",children:[]}]}],o={rightToc:i};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"any"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"TsMorphMetadataProvider")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"project"},"project"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"project"),": any = new Project({ compilerOptions: { strictNullChecks: true, }, })"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/reflection/src/TsMorphMetadataProvider.ts#L6"}),"packages/reflection/src/TsMorphMetadataProvider.ts:6"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sources"},"sources"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("strong",{parentName:"p"},"sources"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/sourcefile"}),"SourceFile"),"[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/reflection/src/TsMorphMetadataProvider.ts#L12"}),"packages/reflection/src/TsMorphMetadataProvider.ts:12"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"extracttype"},"extractType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"extractType"),"(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),"): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/reflection/src/TsMorphMetadataProvider.ts#L49"}),"packages/reflection/src/TsMorphMetadataProvider.ts:49"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getexistingsourcefile"},"getExistingSourceFile"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getExistingSourceFile"),"(",Object(b.b)("inlineCode",{parentName:"p"},"path"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"ext?"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"validate?"),": boolean): Promise<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/sourcefile"}),"SourceFile"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/reflection/src/TsMorphMetadataProvider.ts#L26"}),"packages/reflection/src/TsMorphMetadataProvider.ts:26"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"path")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ext?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"validate")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/sourcefile"}),"SourceFile"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getsourcefile"},"getSourceFile"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getSourceFile"),"(",Object(b.b)("inlineCode",{parentName:"p"},"tsPath"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"validate"),": boolean): Promise<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/sourcefile"}),"SourceFile")," ","|"," undefined",">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/reflection/src/TsMorphMetadataProvider.ts#L100"}),"packages/reflection/src/TsMorphMetadataProvider.ts:100"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"tsPath")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"validate")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/sourcefile"}),"SourceFile")," ","|"," undefined",">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"initproperties"},"initProperties"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"initProperties"),"(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/entitymetadata"}),"EntityMetadata"),"): Promise<void",">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/reflection/src/TsMorphMetadataProvider.ts#L36"}),"packages/reflection/src/TsMorphMetadataProvider.ts:36"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/entitymetadata"}),"EntityMetadata"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise<void",">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"initpropertytype"},"initPropertyType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"initPropertyType"),"(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/entitymetadata"}),"EntityMetadata"),", ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),"): Promise<void",">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/reflection/src/TsMorphMetadataProvider.ts#L61"}),"packages/reflection/src/TsMorphMetadataProvider.ts:61"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/entitymetadata"}),"EntityMetadata"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise<void",">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"initsourcefiles"},"initSourceFiles"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"initSourceFiles"),"(): Promise<void",">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/reflection/src/TsMorphMetadataProvider.ts#L134"}),"packages/reflection/src/TsMorphMetadataProvider.ts:134"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise<void",">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"loadentitymetadata"},"loadEntityMetadata"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"loadEntityMetadata"),"(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/entitymetadata"}),"EntityMetadata"),", ",Object(b.b)("inlineCode",{parentName:"p"},"name"),": string): Promise<void",">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/reflection/src/TsMorphMetadataProvider.ts#L18"}),"packages/reflection/src/TsMorphMetadataProvider.ts:18"))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/entitymetadata"}),"EntityMetadata"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise<void",">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"processwrapper"},"processWrapper"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"processWrapper"),"(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),", ",Object(b.b)("inlineCode",{parentName:"p"},"wrapper"),": string): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/reflection/src/TsMorphMetadataProvider.ts#L114"}),"packages/reflection/src/TsMorphMetadataProvider.ts:114"))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"wrapper")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"readtypefromsource"},"readTypeFromSource"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"readTypeFromSource"),"(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/entitymetadata"}),"EntityMetadata"),", ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),"): Promise<{ optional?: boolean ; type: string  }",">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/reflection/src/TsMorphMetadataProvider.ts#L74"}),"packages/reflection/src/TsMorphMetadataProvider.ts:74"))),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/entitymetadata"}),"EntityMetadata"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise<{ optional?: boolean ; type: string  }",">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"usecache"},"useCache"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"useCache"),"(): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/reflection/src/TsMorphMetadataProvider.ts#L14"}),"packages/reflection/src/TsMorphMetadataProvider.ts:14"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"))}l.isMDXComponent=!0}}]);