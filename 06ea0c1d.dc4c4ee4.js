(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(1),i=r(6),a=(r(0),r(804)),o={id:"assignoptions",title:"Interface: AssignOptions",sidebar_label:"AssignOptions"},c={unversionedId:"api/interfaces/assignoptions",id:"version-4.2/api/interfaces/assignoptions",isDocsHomePage:!1,title:"Interface: AssignOptions",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/interfaces/assignoptions.md",slug:"/api/interfaces/assignoptions",permalink:"/docs/api/interfaces/assignoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/interfaces/assignoptions.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1603662545,sidebar_label:"AssignOptions",sidebar:"version-4.2/API",previous:{title:"Class: WrappedEntity<T, PK>",permalink:"/docs/api/classes/wrappedentity"},next:{title:"Interface: CacheAdapter",permalink:"/docs/api/interfaces/cacheadapter"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"convertCustomTypes",id:"convertcustomtypes",children:[]},{value:"em",id:"em",children:[]},{value:"merge",id:"merge",children:[]},{value:"mergeObjects",id:"mergeobjects",children:[]},{value:"onlyProperties",id:"onlyproperties",children:[]}]}],p={rightToc:s};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"AssignOptions"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"convertCustomTypes"),": boolean"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityAssigner.ts#L155"}),"packages/core/src/entity/EntityAssigner.ts:155"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"em"},"em"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"em"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/entitymanager"}),"EntityManager")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityAssigner.ts#L158"}),"packages/core/src/entity/EntityAssigner.ts:158"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"merge"},"merge"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"merge"),": boolean"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityAssigner.ts#L157"}),"packages/core/src/entity/EntityAssigner.ts:157"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"mergeobjects"},"mergeObjects"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"mergeObjects"),": boolean"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityAssigner.ts#L156"}),"packages/core/src/entity/EntityAssigner.ts:156"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"onlyproperties"},"onlyProperties"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"onlyProperties"),": boolean"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/EntityAssigner.ts#L154"}),"packages/core/src/entity/EntityAssigner.ts:154"))))}b.isMDXComponent=!0},804:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(r),u=n,O=l["".concat(o,".").concat(u)]||l[u]||m[u]||a;return r?i.a.createElement(O,c(c({ref:t},p),{},{components:r})):i.a.createElement(O,c({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);