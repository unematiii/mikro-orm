(window.webpackJsonp=window.webpackJsonp||[]).push([[935],{1008:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(8),a=(r(0),r(1110)),c={id:"core.edge",title:"Interface: Edge",sidebar_label:"Edge",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/core.edge",id:"version-4.5/api/interfaces/core.edge",isDocsHomePage:!1,title:"Interface: Edge",description:"Interface: Edge",source:"@site/versioned_docs/version-4.5/api/interfaces/core.edge.md",slug:"/api/interfaces/core.edge",permalink:"/docs/api/interfaces/core.edge",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1617439443,formattedLastUpdatedAt:"4/3/2021",sidebar_label:"Edge",sidebar:"version-4.5/API",previous:{title:"Interface: DeleteOptions<T>",permalink:"/docs/api/interfaces/core.deleteoptions"},next:{title:"Interface: EntityProperty<T>",permalink:"/docs/api/interfaces/core.entityproperty"}},p=[{value:"Properties",id:"properties",children:[{value:"from",id:"from",children:[]},{value:"to",id:"to",children:[]},{value:"weight",id:"weight",children:[]}]}],l={toc:p};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-edge"},"Interface: Edge"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".Edge"),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"from"},"from"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"from"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L17"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:17")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"to"},"to"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"to"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L18"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:18")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"weight"},"weight"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"weight"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L19"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:19")))}b.isMDXComponent=!0},1110:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),d=n,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||a;return r?o.a.createElement(f,i(i({ref:t},l),{},{components:r})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);