(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=i(a),j=n,s=m["".concat(c,".").concat(j)]||m[j]||O[j]||b;return a?r.a.createElement(s,p(p({ref:t},l),{},{components:a})):r.a.createElement(s,p({ref:t},l))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<b;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},665:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return i}));var n=a(3),r=a(7),b=(a(0),a(1086)),c={id:"changesetcomputer",title:"Class: ChangeSetComputer",sidebar_label:"ChangeSetComputer"},p={unversionedId:"api/classes/changesetcomputer",id:"api/classes/changesetcomputer",isDocsHomePage:!1,title:"Class: ChangeSetComputer",description:"Hierarchy",source:"@site/docs/api/classes/changesetcomputer.md",slug:"/api/classes/changesetcomputer",permalink:"/docs/next/api/classes/changesetcomputer",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/changesetcomputer.md",version:"current",sidebar_label:"ChangeSetComputer",sidebar:"API",previous:{title:"Class: ChangeSet<T, T>",permalink:"/docs/next/api/classes/changeset"},next:{title:"Class: ChangeSetPersister",permalink:"/docs/next/api/classes/changesetpersister"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"collectionUpdates",id:"collectionupdates",children:[]},{value:"comparator",id:"comparator",children:[]},{value:"config",id:"config",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"platform",id:"platform",children:[]},{value:"removeStack",id:"removestack",children:[]},{value:"validator",id:"validator",children:[]}]},{value:"Methods",id:"methods",children:[{value:"computeChangeSet",id:"computechangeset",children:[]},{value:"computePayload",id:"computepayload",children:[]},{value:"processProperty",id:"processproperty",children:[]},{value:"processToMany",id:"processtomany",children:[]},{value:"processToOne",id:"processtoone",children:[]}]}],l={rightToc:o};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"ChangeSetComputer"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new ChangeSetComputer"),"(",Object(b.b)("inlineCode",{parentName:"p"},"validator"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/entityvalidator"}),"EntityValidator"),", ",Object(b.b)("inlineCode",{parentName:"p"},"collectionUpdates"),": Set<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/collection"}),"Collection"),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),">",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"removeStack"),": Set<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),">",", ",Object(b.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/metadatastorage"}),"MetadataStorage"),", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/platform"}),"Platform"),", ",Object(b.b)("inlineCode",{parentName:"p"},"config"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/configuration"}),"Configuration"),"): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/changesetcomputer"}),"ChangeSetComputer")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/core/src/unit-of-work/ChangeSetComputer.ts#L12"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:12"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"validator")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/entityvalidator"}),"EntityValidator"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"collectionUpdates")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/collection"}),"Collection"),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),">",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"removeStack")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"metadata")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/metadatastorage"}),"MetadataStorage"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/platform"}),"Platform"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/configuration"}),"Configuration"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/changesetcomputer"}),"ChangeSetComputer")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"collectionupdates"},"collectionUpdates"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"collectionUpdates"),": Set<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/collection"}),"Collection"),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),">",">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/core/src/unit-of-work/ChangeSetComputer.ts#L15"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:15"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"comparator"},"comparator"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"comparator"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/entitycomparator"}),"EntityComparator")," = new EntityComparator(this.metadata, this.platform)"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/core/src/unit-of-work/ChangeSetComputer.ts#L12"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:12"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"config"},"config"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"config"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/configuration"}),"Configuration")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/core/src/unit-of-work/ChangeSetComputer.ts#L19"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:19"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"metadata"},"metadata"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"metadata"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/metadatastorage"}),"MetadataStorage")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/core/src/unit-of-work/ChangeSetComputer.ts#L17"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:17"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"platform"},"platform"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"platform"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/platform"}),"Platform")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/core/src/unit-of-work/ChangeSetComputer.ts#L18"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:18"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"removestack"},"removeStack"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"removeStack"),": Set<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/core/src/unit-of-work/ChangeSetComputer.ts#L16"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:16"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"validator"},"validator"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"validator"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/entityvalidator"}),"EntityValidator")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/core/src/unit-of-work/ChangeSetComputer.ts#L14"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:14"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"computechangeset"},"computeChangeSet"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"computeChangeSet"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/changeset"}),"ChangeSet"),"<T",">"," ","|"," null"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/core/src/unit-of-work/ChangeSetComputer.ts#L21"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:21"))),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),"<T",">")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/changeset"}),"ChangeSet"),"<T",">"," ","|"," null"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"computepayload"},"computePayload"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"computePayload"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#entitydata"}),"EntityData"),"<T",">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/core/src/unit-of-work/ChangeSetComputer.ts#L50"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:50"))),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),"<T",">")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#entitydata"}),"EntityData"),"<T",">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"processproperty"},"processProperty"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"processProperty"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"changeSet"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/changeset"}),"ChangeSet"),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),"<T",">","): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/core/src/unit-of-work/ChangeSetComputer.ts#L63"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:63"))),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),"<T",">")))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"changeSet")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/changeset"}),"ChangeSet"),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),"<T",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"processtomany"},"processToMany"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"processToMany"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"changeSet"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/changeset"}),"ChangeSet"),"<T",">","): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/core/src/unit-of-work/ChangeSetComputer.ts#L83"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:83"))),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),"<T",">")))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"changeSet")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/changeset"}),"ChangeSet"),"<T",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"processtoone"},"processToOne"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"processToOne"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"changeSet"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/changeset"}),"ChangeSet"),"<T",">","): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b6e19ff/packages/core/src/unit-of-work/ChangeSetComputer.ts#L73"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:73"))),Object(b.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),"<T",">")))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"changeSet")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/changeset"}),"ChangeSet"),"<T",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"))}i.isMDXComponent=!0}}]);