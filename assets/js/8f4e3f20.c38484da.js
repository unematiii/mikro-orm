(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89265],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},49490:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var n=r(74034),a=r(79973),l=(r(67294),r(3905)),i={id:"knex.knex-1.as",title:"Interface: As<TRecord, TResult>",sidebar_label:"As",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/knex.knex-1.as",id:"version-4.5/api/interfaces/knex.knex-1.as",isDocsHomePage:!1,title:"Interface: As<TRecord, TResult\\>",description:"knex.Knex.As",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.as.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.as",permalink:"/docs/api/interfaces/knex.knex-1.as",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1620216516,formattedLastUpdatedAt:"5/5/2021",sidebar_label:"As",frontMatter:{id:"knex.knex-1.as",title:"Interface: As<TRecord, TResult>",sidebar_label:"As",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: AlterTableBuilder",permalink:"/docs/api/interfaces/knex.knex-1.altertablebuilder"},next:{title:"Interface: AsymmetricAggregation<TRecord, TResult, TValue\\>",permalink:"/docs/api/interfaces/knex.knex-1.asymmetricaggregation"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Callable",id:"callable",children:[]}],s={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".As"),(0,l.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TRecord"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult"))))),(0,l.kt)("h2",{id:"callable"},"Callable"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"As"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"columnName"),": keyof TRecord): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnName")),(0,l.kt)("td",{parentName:"tr",align:"left"},"keyof TRecord")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:900"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"As"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"columnName"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnName")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:901"))}c.isMDXComponent=!0}}]);