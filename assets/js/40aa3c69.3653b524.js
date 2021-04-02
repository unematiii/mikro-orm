(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{1110:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(r),u=a,d=l["".concat(o,".").concat(u)]||l[u]||m[u]||c;return r?n.a.createElement(d,i(i({ref:t},b),{},{components:r})):n.a.createElement(d,i({ref:t},b))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},332:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(8),c=(r(0),r(1110)),o={id:"core.countoptions",title:"Interface: CountOptions<T>",sidebar_label:"CountOptions",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/core.countoptions",id:"version-4.5/api/interfaces/core.countoptions",isDocsHomePage:!1,title:"Interface: CountOptions<T>",description:"Interface: CountOptions",source:"@site/versioned_docs/version-4.5/api/interfaces/core.countoptions.md",slug:"/api/interfaces/core.countoptions",permalink:"/docs/api/interfaces/core.countoptions",editUrl:null,version:"4.5",lastUpdatedBy:"Roderik van der Veer",lastUpdatedAt:1617376636,formattedLastUpdatedAt:"4/2/2021",sidebar_label:"CountOptions",sidebar:"version-4.5/API",previous:{title:"Interface: ConnectionOptions",permalink:"/docs/api/interfaces/core.connectionoptions"},next:{title:"Interface: DeleteOptions<T>",permalink:"/docs/api/interfaces/core.deleteoptions"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Properties",id:"properties",children:[{value:"cache",id:"cache",children:[]},{value:"filters",id:"filters",children:[]},{value:"groupBy",id:"groupby",children:[]},{value:"having",id:"having",children:[]},{value:"schema",id:"schema",children:[]}]}],b={toc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-countoptionst"},"Interface: CountOptions<T",">"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".CountOptions"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"T"))))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"cache"},"cache"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"cache"),": ",Object(c.b)("em",{parentName:"p"},"number")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")," ","|"," ","[",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("em",{parentName:"p"},"number"),"]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/drivers/IDatabaseDriver.ts#L114"},"packages/core/src/drivers/IDatabaseDriver.ts:114")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"filters"},"filters"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"filters"),": ",Object(c.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<boolean ","|"," ",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<any",">",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/drivers/IDatabaseDriver.ts#L110"},"packages/core/src/drivers/IDatabaseDriver.ts:110")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"groupby"},"groupBy"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"groupBy"),": ",Object(c.b)("em",{parentName:"p"},"string")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string"),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/drivers/IDatabaseDriver.ts#L112"},"packages/core/src/drivers/IDatabaseDriver.ts:112")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"having"},"having"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"having"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core#filterquery"},Object(c.b)("em",{parentName:"a"},"FilterQuery")),"<T",">"," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core#filterquery"},Object(c.b)("em",{parentName:"a"},"FilterQuery")),"<T",">"," & ",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<any",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/drivers/IDatabaseDriver.ts#L113"},"packages/core/src/drivers/IDatabaseDriver.ts:113")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"schema"},"schema"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"schema"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/drivers/IDatabaseDriver.ts#L111"},"packages/core/src/drivers/IDatabaseDriver.ts:111")))}s.isMDXComponent=!0}}]);