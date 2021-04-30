(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72601],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,d=m["".concat(s,".").concat(u)]||m[u]||k[u]||a;return n?r.createElement(d,p(p({ref:t},c),{},{components:n})):r.createElement(d,p({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},944:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var r=n(74034),i=n(79973),a=(n(67294),n(3905)),p={id:"knex.joinoptions",title:"Interface: JoinOptions",sidebar_label:"JoinOptions",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/knex.joinoptions",id:"version-4.5/api/interfaces/knex.joinoptions",isDocsHomePage:!1,title:"Interface: JoinOptions",description:"knex.JoinOptions",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.joinoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.joinoptions",permalink:"/docs/api/interfaces/knex.joinoptions",editUrl:null,version:"4.5",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619805813,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"JoinOptions",frontMatter:{id:"knex.joinoptions",title:"Interface: JoinOptions",sidebar_label:"JoinOptions",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: IsSame",permalink:"/docs/api/interfaces/knex.issame"},next:{title:"Interface: Knex<TRecord, TResult\\>",permalink:"/docs/api/interfaces/knex.knex-2"}},s=[{value:"Properties",id:"properties",children:[{value:"alias",id:"alias",children:[]},{value:"cond",id:"cond",children:[]},{value:"inverseAlias",id:"inversealias",children:[]},{value:"inverseJoinColumns",id:"inversejoincolumns",children:[]},{value:"joinColumns",id:"joincolumns",children:[]},{value:"ownerAlias",id:"owneralias",children:[]},{value:"path",id:"path",children:[]},{value:"primaryKeys",id:"primarykeys",children:[]},{value:"prop",id:"prop",children:[]},{value:"table",id:"table",children:[]},{value:"type",id:"type",children:[]}]}],l={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".JoinOptions"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"alias"},"alias"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"alias"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L19"},"packages/knex/src/typings.ts:19")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cond"},"cond"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"cond"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,a.kt)("em",{parentName:"a"},"Dictionary")),"<any",">"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L27"},"packages/knex/src/typings.ts:27")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inversealias"},"inverseAlias"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"inverseAlias"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L21"},"packages/knex/src/typings.ts:21")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inversejoincolumns"},"inverseJoinColumns"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"inverseJoinColumns"),": ",(0,a.kt)("em",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L23"},"packages/knex/src/typings.ts:23")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"joincolumns"},"joinColumns"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"joinColumns"),": ",(0,a.kt)("em",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L22"},"packages/knex/src/typings.ts:22")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"owneralias"},"ownerAlias"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ownerAlias"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L20"},"packages/knex/src/typings.ts:20")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"path"},"path"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"path"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L25"},"packages/knex/src/typings.ts:25")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"primarykeys"},"primaryKeys"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"primaryKeys"),": ",(0,a.kt)("em",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L24"},"packages/knex/src/typings.ts:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"prop"},"prop"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"prop"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,a.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L26"},"packages/knex/src/typings.ts:26")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"table"},"table"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"table"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L17"},"packages/knex/src/typings.ts:17")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("em",{parentName:"p"},"leftJoin")," ","|"," ",(0,a.kt)("em",{parentName:"p"},"innerJoin")," ","|"," ",(0,a.kt)("em",{parentName:"p"},"pivotJoin")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L18"},"packages/knex/src/typings.ts:18")))}c.isMDXComponent=!0}}]);