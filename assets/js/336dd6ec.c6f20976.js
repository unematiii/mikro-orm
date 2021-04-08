(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(n),u=r,d=l["".concat(o,".").concat(u)]||l[u]||m[u]||i;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},273:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),i=(n(0),n(1110)),o={id:"core.assignoptions",title:"Interface: AssignOptions",sidebar_label:"AssignOptions",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/core.assignoptions",id:"api/interfaces/core.assignoptions",isDocsHomePage:!1,title:"Interface: AssignOptions",description:"Interface: AssignOptions",source:"@site/docs/api/interfaces/core.assignoptions.md",slug:"/api/interfaces/core.assignoptions",permalink:"/docs/next/api/interfaces/core.assignoptions",editUrl:null,version:"current",sidebar_label:"AssignOptions",sidebar:"API",previous:{title:"Class: TsMorphMetadataProvider",permalink:"/docs/next/api/classes/reflection.tsmorphmetadataprovider"},next:{title:"Interface: CacheAdapter",permalink:"/docs/next/api/interfaces/core.cacheadapter"}},s=[{value:"Properties",id:"properties",children:[{value:"convertCustomTypes",id:"convertcustomtypes",children:[]},{value:"em",id:"em",children:[]},{value:"merge",id:"merge",children:[]},{value:"mergeObjects",id:"mergeobjects",children:[]},{value:"onlyProperties",id:"onlyproperties",children:[]},{value:"updateNestedEntities",id:"updatenestedentities",children:[]}]}],p={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-assignoptions"},"Interface: AssignOptions"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".AssignOptions"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"convertCustomTypes"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d8c328a/packages/core/src/entity/EntityAssigner.ts#L188"},"packages/core/src/entity/EntityAssigner.ts:188")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"em"},"em"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"em"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},Object(i.b)("em",{parentName:"a"},"EntityManager")),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(i.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(i.b)("em",{parentName:"a"},"Connection")),">",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d8c328a/packages/core/src/entity/EntityAssigner.ts#L191"},"packages/core/src/entity/EntityAssigner.ts:191")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"merge"},"merge"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"merge"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d8c328a/packages/core/src/entity/EntityAssigner.ts#L190"},"packages/core/src/entity/EntityAssigner.ts:190")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"mergeobjects"},"mergeObjects"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"mergeObjects"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d8c328a/packages/core/src/entity/EntityAssigner.ts#L189"},"packages/core/src/entity/EntityAssigner.ts:189")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"onlyproperties"},"onlyProperties"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"onlyProperties"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d8c328a/packages/core/src/entity/EntityAssigner.ts#L187"},"packages/core/src/entity/EntityAssigner.ts:187")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"updatenestedentities"},"updateNestedEntities"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"updateNestedEntities"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d8c328a/packages/core/src/entity/EntityAssigner.ts#L186"},"packages/core/src/entity/EntityAssigner.ts:186")))}b.isMDXComponent=!0}}]);