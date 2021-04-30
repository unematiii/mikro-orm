(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30033],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return s},kt:function(){return N}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},m=Object.keys(t);for(n=0;n<m.length;n++)a=m[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(t);for(n=0;n<m.length;n++)a=m[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),l=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=l(t.components);return n.createElement(o.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,m=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),k=l(a),N=r,c=k["".concat(o,".").concat(N)]||k[N]||g[N]||m;return a?n.createElement(c,p(p({ref:e},s),{},{components:a})):n.createElement(c,p({ref:e},s))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var m=a.length,p=new Array(m);p[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var l=2;l<m;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},39559:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return o},default:function(){return s}});var n=a(74034),r=a(79973),m=(a(67294),a(3905)),p={id:"core.mongonamingstrategy",title:"Class: MongoNamingStrategy",sidebar_label:"MongoNamingStrategy",custom_edit_url:null},i={unversionedId:"api/classes/core.mongonamingstrategy",id:"api/classes/core.mongonamingstrategy",isDocsHomePage:!1,title:"Class: MongoNamingStrategy",description:"core.MongoNamingStrategy",source:"@site/docs/api/classes/core.mongonamingstrategy.md",sourceDirName:"api/classes",slug:"/api/classes/core.mongonamingstrategy",permalink:"/docs/next/api/classes/core.mongonamingstrategy",editUrl:null,version:"current",sidebar_label:"MongoNamingStrategy",frontMatter:{id:"core.mongonamingstrategy",title:"Class: MongoNamingStrategy",sidebar_label:"MongoNamingStrategy",custom_edit_url:null},sidebar:"API",previous:{title:"Class: MikroORM<D\\>",permalink:"/docs/next/api/classes/core.mikroorm"},next:{title:"Class: NonUniqueFieldNameException",permalink:"/docs/next/api/classes/core.nonuniquefieldnameexception"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"classToMigrationName",id:"classtomigrationname",children:[]},{value:"classToTableName",id:"classtotablename",children:[]},{value:"columnNameToProperty",id:"columnnametoproperty",children:[]},{value:"getClassName",id:"getclassname",children:[]},{value:"indexName",id:"indexname",children:[]},{value:"joinColumnName",id:"joincolumnname",children:[]},{value:"joinKeyColumnName",id:"joinkeycolumnname",children:[]},{value:"joinTableName",id:"jointablename",children:[]},{value:"propertyToColumnName",id:"propertytocolumnname",children:[]},{value:"referenceColumnName",id:"referencecolumnname",children:[]}]}],l={toc:o};function s(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,m.kt)("wrapper",(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".MongoNamingStrategy"),(0,m.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("p",{parentName:"li"},(0,m.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.abstractnamingstrategy"},(0,m.kt)("em",{parentName:"a"},"AbstractNamingStrategy"))),(0,m.kt)("p",{parentName:"li"},"\u21b3 ",(0,m.kt)("strong",{parentName:"p"},"MongoNamingStrategy")))),(0,m.kt)("h2",{id:"constructors"},"Constructors"),(0,m.kt)("h3",{id:"constructor"},"constructor"),(0,m.kt)("p",null,"+"," ",(0,m.kt)("strong",{parentName:"p"},"new MongoNamingStrategy"),"(): ",(0,m.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.mongonamingstrategy"},(0,m.kt)("em",{parentName:"a"},"MongoNamingStrategy"))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.mongonamingstrategy"},(0,m.kt)("em",{parentName:"a"},"MongoNamingStrategy"))),(0,m.kt)("p",null,"Inherited from: ",(0,m.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("h2",{id:"methods"},"Methods"),(0,m.kt)("h3",{id:"classtomigrationname"},"classToMigrationName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"classToMigrationName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"timestamp"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Inherited from: ",(0,m.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L12"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:12")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"classtotablename"},"classToTableName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"classToTableName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"entityName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Overrides: ",(0,m.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/core/src/naming-strategy/MongoNamingStrategy.ts#L5"},"packages/core/src/naming-strategy/MongoNamingStrategy.ts:5")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"columnnametoproperty"},"columnNameToProperty"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"columnNameToProperty"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"columnName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"columnName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Inherited from: ",(0,m.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L32"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:32")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"getclassname"},"getClassName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"getClassName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"file"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"separator?"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"file")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string")),(0,m.kt)("td",{parentName:"tr",align:"left"},"-")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"separator")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string")),(0,m.kt)("td",{parentName:"tr",align:"left"},"'-'")))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Inherited from: ",(0,m.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L5"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:5")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"indexname"},"indexName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"indexName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"tableName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"columns"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"[], ",(0,m.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,m.kt)("inlineCode",{parentName:"p"},'"index"')," ","|"," ",(0,m.kt)("inlineCode",{parentName:"p"},'"unique"')," ","|"," ",(0,m.kt)("inlineCode",{parentName:"p"},'"primary"')," ","|"," ",(0,m.kt)("inlineCode",{parentName:"p"},'"foreign"')," ","|"," ",(0,m.kt)("inlineCode",{parentName:"p"},'"sequence"'),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"tableName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"columns")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"),"[]")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"type")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},'"index"')," ","|"," ",(0,m.kt)("inlineCode",{parentName:"td"},'"unique"')," ","|"," ",(0,m.kt)("inlineCode",{parentName:"td"},'"primary"')," ","|"," ",(0,m.kt)("inlineCode",{parentName:"td"},'"foreign"')," ","|"," ",(0,m.kt)("inlineCode",{parentName:"td"},'"sequence"'))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Inherited from: ",(0,m.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L16"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:16")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"joincolumnname"},"joinColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"joinColumnName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"propertyName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Overrides: ",(0,m.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/core/src/naming-strategy/MongoNamingStrategy.ts#L9"},"packages/core/src/naming-strategy/MongoNamingStrategy.ts:9")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"joinkeycolumnname"},"joinKeyColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"joinKeyColumnName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"referencedColumnName?"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"entityName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"referencedColumnName?")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Overrides: ",(0,m.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/core/src/naming-strategy/MongoNamingStrategy.ts#L13"},"packages/core/src/naming-strategy/MongoNamingStrategy.ts:13")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"jointablename"},"joinTableName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"joinTableName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"sourceEntity"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"targetEntity"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"propertyName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"sourceEntity")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"targetEntity")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Overrides: ",(0,m.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/core/src/naming-strategy/MongoNamingStrategy.ts#L17"},"packages/core/src/naming-strategy/MongoNamingStrategy.ts:17")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"propertytocolumnname"},"propertyToColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"propertyToColumnName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"propertyName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Overrides: ",(0,m.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/core/src/naming-strategy/MongoNamingStrategy.ts#L21"},"packages/core/src/naming-strategy/MongoNamingStrategy.ts:21")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"referencecolumnname"},"referenceColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"referenceColumnName"),"(): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Overrides: ",(0,m.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/core/src/naming-strategy/MongoNamingStrategy.ts#L25"},"packages/core/src/naming-strategy/MongoNamingStrategy.ts:25")))}s.isMDXComponent=!0}}]);