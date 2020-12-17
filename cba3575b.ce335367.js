(window.webpackJsonp=window.webpackJsonp||[]).push([[786],{1086:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},O=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(n),O=r,u=l["".concat(b,".").concat(O)]||l[O]||m[O]||a;return n?i.a.createElement(u,o(o({ref:t},p),{},{components:n})):i.a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,b=new Array(a);b[0]=O;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var p=2;p<a;p++)b[p]=n[p];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},856:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(1086)),b={id:"joinoptions",title:"Interface: JoinOptions",sidebar_label:"JoinOptions"},o={unversionedId:"api/interfaces/joinoptions",id:"version-4.3/api/interfaces/joinoptions",isDocsHomePage:!1,title:"Interface: JoinOptions",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/interfaces/joinoptions.md",slug:"/api/interfaces/joinoptions",permalink:"/docs/api/interfaces/joinoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/interfaces/joinoptions.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1608226300,sidebar_label:"JoinOptions",sidebar:"version-4.3/API",previous:{title:"Interface: IsSame",permalink:"/docs/api/interfaces/issame"},next:{title:"Interface: LoadedCollection<T, P, O>",permalink:"/docs/api/interfaces/loadedcollection"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"alias",id:"alias",children:[]},{value:"cond",id:"cond",children:[]},{value:"inverseAlias",id:"inversealias",children:[]},{value:"inverseJoinColumns",id:"inversejoincolumns",children:[]},{value:"joinColumns",id:"joincolumns",children:[]},{value:"ownerAlias",id:"owneralias",children:[]},{value:"path",id:"path",children:[]},{value:"primaryKeys",id:"primarykeys",children:[]},{value:"prop",id:"prop",children:[]},{value:"table",id:"table",children:[]},{value:"type",id:"type",children:[]}]}],p={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"JoinOptions"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"alias"},"alias"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"alias"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L19"}),"packages/knex/src/typings.ts:19"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"cond"},"cond"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"cond"),": ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#dictionary"}),"Dictionary")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L27"}),"packages/knex/src/typings.ts:27"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"inversealias"},"inverseAlias"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"inverseAlias"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L21"}),"packages/knex/src/typings.ts:21"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"inversejoincolumns"},"inverseJoinColumns"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"inverseJoinColumns"),": string[]"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L23"}),"packages/knex/src/typings.ts:23"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"joincolumns"},"joinColumns"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"joinColumns"),": string[]"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L22"}),"packages/knex/src/typings.ts:22"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"owneralias"},"ownerAlias"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"ownerAlias"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L20"}),"packages/knex/src/typings.ts:20"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"path"},"path"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"path"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L25"}),"packages/knex/src/typings.ts:25"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"primarykeys"},"primaryKeys"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"primaryKeys"),": string[]"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L24"}),"packages/knex/src/typings.ts:24"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"prop"},"prop"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"prop"),": EntityProperty"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L26"}),"packages/knex/src/typings.ts:26"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"table"},"table"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"table"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L17"}),"packages/knex/src/typings.ts:17"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"type"},"type"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"type"),": ",'"',"leftJoin",'"'," ","|"," ",'"',"innerJoin",'"'," ","|"," ",'"',"pivotJoin",'"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L18"}),"packages/knex/src/typings.ts:18"))))}s.isMDXComponent=!0}}]);