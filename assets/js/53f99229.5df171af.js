(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22807],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=p(n),k=a,u=f["".concat(s,".").concat(k)]||f[k]||m[k]||i;return n?r.createElement(u,c(c({ref:t},l),{},{components:n})):r.createElement(u,c({ref:t},l))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14370:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return o},toc:function(){return s},default:function(){return l}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),c={id:"knex.schemadifference",title:"Interface: SchemaDifference",sidebar_label:"SchemaDifference",custom_edit_url:null},o={unversionedId:"api/interfaces/knex.schemadifference",id:"api/interfaces/knex.schemadifference",isDocsHomePage:!1,title:"Interface: SchemaDifference",description:"knex.SchemaDifference",source:"@site/docs/api/interfaces/knex.schemadifference.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.schemadifference",permalink:"/docs/next/api/interfaces/knex.schemadifference",editUrl:null,version:"current",sidebar_label:"SchemaDifference",frontMatter:{id:"knex.schemadifference",title:"Interface: SchemaDifference",sidebar_label:"SchemaDifference",custom_edit_url:null},sidebar:"API",previous:{title:"Interface: JoinOptions",permalink:"/docs/next/api/interfaces/knex.joinoptions"},next:{title:"Interface: Table",permalink:"/docs/next/api/interfaces/knex.table"}},s=[{value:"Properties",id:"properties",children:[{value:"changedTables",id:"changedtables",children:[]},{value:"fromSchema",id:"fromschema",children:[]},{value:"newNamespaces",id:"newnamespaces",children:[]},{value:"newTables",id:"newtables",children:[]},{value:"orphanedForeignKeys",id:"orphanedforeignkeys",children:[]},{value:"removedNamespaces",id:"removednamespaces",children:[]},{value:"removedTables",id:"removedtables",children:[]}]}],p={toc:s};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".SchemaDifference"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"changedtables"},"changedTables"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"changedTables"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},(0,i.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.tabledifference"},(0,i.kt)("em",{parentName:"a"},"TableDifference")),">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/knex/src/typings.ts#L96"},"packages/knex/src/typings.ts:96")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fromschema"},"fromSchema"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"fromSchema"),": ",(0,i.kt)("em",{parentName:"p"},"DatabaseSchema")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/knex/src/typings.ts#L100"},"packages/knex/src/typings.ts:100")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"newnamespaces"},"newNamespaces"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"newNamespaces"),": ",(0,i.kt)("em",{parentName:"p"},"Set"),"<string",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/knex/src/typings.ts#L94"},"packages/knex/src/typings.ts:94")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"newtables"},"newTables"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"newTables"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},(0,i.kt)("em",{parentName:"a"},"Dictionary")),"<DatabaseTable",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/knex/src/typings.ts#L95"},"packages/knex/src/typings.ts:95")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"orphanedforeignkeys"},"orphanedForeignKeys"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"orphanedForeignKeys"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.foreignkey"},(0,i.kt)("em",{parentName:"a"},"ForeignKey")),"[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/knex/src/typings.ts#L99"},"packages/knex/src/typings.ts:99")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removednamespaces"},"removedNamespaces"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"removedNamespaces"),": ",(0,i.kt)("em",{parentName:"p"},"Set"),"<string",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/knex/src/typings.ts#L98"},"packages/knex/src/typings.ts:98")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removedtables"},"removedTables"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"removedTables"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},(0,i.kt)("em",{parentName:"a"},"Dictionary")),"<DatabaseTable",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/knex/src/typings.ts#L97"},"packages/knex/src/typings.ts:97")))}l.isMDXComponent=!0}}]);