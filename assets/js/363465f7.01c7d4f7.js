(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{1110:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return j}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var m=b.a.createContext({}),d=function(e){var t=b.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=d(e.components);return b.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),i=d(a),O=r,j=i["".concat(l,".").concat(O)]||i[O]||s[O]||n;return a?b.a.createElement(j,c(c({ref:t},m),{},{components:a})):b.a.createElement(j,c({ref:t},m))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=O;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var m=2;m<n;m++)l[m]=a[m];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},285:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var r=a(3),b=a(8),n=(a(0),a(1110)),l={id:"knex.knex-1.select",title:"Interface: Select<TRecord, TResult>",sidebar_label:"Select",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/knex.knex-1.select",id:"version-4.5/api/interfaces/knex.knex-1.select",isDocsHomePage:!1,title:"Interface: Select<TRecord, TResult>",description:"Interface: Select",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.select.md",slug:"/api/interfaces/knex.knex-1.select",permalink:"/docs/api/interfaces/knex.knex-1.select",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1617439443,formattedLastUpdatedAt:"4/3/2021",sidebar_label:"Select",sidebar:"version-4.5/API",previous:{title:"Interface: SeederConfig<V>",permalink:"/docs/api/interfaces/knex.knex-1.seederconfig"},next:{title:"Interface: SocketConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.socketconnectionconfig"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],m={toc:p};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"interface-selecttrecord-tresult"},"Interface: Select<TRecord, TResult",">"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Select"),Object(n.b)("h2",{id:"type-parameters"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TRecord")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"object")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"any"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TResult")),Object(n.b)("td",{parentName:"tr",align:"left"},"-"),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.aliasquerybuilder"},Object(n.b)("em",{parentName:"a"},"AliasQueryBuilder")),"<TRecord, TResult",">")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnnamequerybuilder"},Object(n.b)("em",{parentName:"a"},"ColumnNameQueryBuilder")),"<TRecord, TResult",">"),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"Select")))),Object(n.b)("h2",{id:"callable"},"Callable"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"Select"),"(): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(n.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:970"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"Select"),"<TResult2, TInnerRecord, TInnerResult",">","(...",Object(n.b)("inlineCode",{parentName:"p"},"subQueryBuilders"),": readonly ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TInnerRecord, TInnerResult",">","[]): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TResult2")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, any",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TInnerRecord")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"any"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TInnerResult")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"any"))))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"...subQueryBuilders")),Object(n.b)("td",{parentName:"tr",align:"left"},"readonly ",Object(n.b)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TInnerRecord, TInnerResult",">","[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:971"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"Select"),"<TResult2, TInnerRecord, TInnerResult",">","(",Object(n.b)("inlineCode",{parentName:"p"},"subQueryBuilders"),": readonly ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TInnerRecord, TInnerResult",">","[]): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TResult2")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, any",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TInnerRecord")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"any"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TInnerResult")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"any"))))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"subQueryBuilders")),Object(n.b)("td",{parentName:"tr",align:"left"},"readonly ",Object(n.b)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TInnerRecord, TInnerResult",">","[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:975"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"Select"),"<AliasUT, TResult2",">","(...",Object(n.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#inferrablecolumndescriptor"},Object(n.b)("em",{parentName:"a"},"InferrableColumnDescriptor")),"<",Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(n.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(n.b)("em",{parentName:"td"},"base"),">",">","[]"),Object(n.b)("td",{parentName:"tr",align:"left"},"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TResult2")),Object(n.b)("td",{parentName:"tr",align:"left"},"-"),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, AddAliases<AddKey<SetBase<UnwrapArrayMember<TResult",">",", ",Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(n.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(n.b)("em",{parentName:"td"},"base"),">",">",", IncompatibleToAlt<ArrayMember<AliasUT",">",", string, never",">",">",", UnionToIntersection<IncompatibleToAlt<AliasUT ",Object(n.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(n.b)("em",{parentName:"td"},"extends")," ",Object(n.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.ref"},Object(n.b)("em",{parentName:"a"},"Ref")),"<any, TMapping",">"," ? TMapping : I : ",Object(n.b)("em",{parentName:"td"},"never"),", Dict<any",">",", {}",">",">",">",">")))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"...aliases")),Object(n.b)("td",{parentName:"tr",align:"left"},"AliasUT")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:918"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"Select"),"<AliasUT, TResult2",">","(",Object(n.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#inferrablecolumndescriptor"},Object(n.b)("em",{parentName:"a"},"InferrableColumnDescriptor")),"<",Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(n.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(n.b)("em",{parentName:"td"},"base"),">",">","[]"),Object(n.b)("td",{parentName:"tr",align:"left"},"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TResult2")),Object(n.b)("td",{parentName:"tr",align:"left"},"-"),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, AddAliases<AddKey<SetBase<UnwrapArrayMember<TResult",">",", ",Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(n.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(n.b)("em",{parentName:"td"},"base"),">",">",", IncompatibleToAlt<ArrayMember<AliasUT",">",", string, never",">",">",", UnionToIntersection<IncompatibleToAlt<AliasUT ",Object(n.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(n.b)("em",{parentName:"td"},"extends")," ",Object(n.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.ref"},Object(n.b)("em",{parentName:"a"},"Ref")),"<any, TMapping",">"," ? TMapping : I : ",Object(n.b)("em",{parentName:"td"},"never"),", Dict<any",">",", {}",">",">",">",">")))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"aliases")),Object(n.b)("td",{parentName:"tr",align:"left"},"AliasUT")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:929"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"Select"),"<AliasUT, TResult2",">","(...",Object(n.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(n.b)("td",{parentName:"tr",align:"left"},"(",Object(n.b)("em",{parentName:"td"},"string")," ","|"," ",Object(n.b)("em",{parentName:"td"},"Dict"),"<any",">",")[]"),Object(n.b)("td",{parentName:"tr",align:"left"},"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TResult2")),Object(n.b)("td",{parentName:"tr",align:"left"},"-"),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, AddAliases<AddKey<SetBase<UnwrapArrayMember<TResult",">",", ",Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(n.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(n.b)("em",{parentName:"td"},"base"),">",">",", IncompatibleToAlt<ArrayMember<AliasUT",">",", string, never",">",">",", UnionToIntersection<IncompatibleToAlt<AliasUT ",Object(n.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(n.b)("em",{parentName:"td"},"extends")," ",Object(n.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.ref"},Object(n.b)("em",{parentName:"a"},"Ref")),"<any, TMapping",">"," ? TMapping : I : ",Object(n.b)("em",{parentName:"td"},"never"),", Dict<any",">",", {}",">",">",">",">")))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"...aliases")),Object(n.b)("td",{parentName:"tr",align:"left"},"AliasUT")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:941"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"Select"),"<AliasUT, TResult2",">","(",Object(n.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("h4",{id:"type-parameters-6"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(n.b)("td",{parentName:"tr",align:"left"},"(",Object(n.b)("em",{parentName:"td"},"string")," ","|"," ",Object(n.b)("em",{parentName:"td"},"Dict"),"<any",">",")[]"),Object(n.b)("td",{parentName:"tr",align:"left"},"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TResult2")),Object(n.b)("td",{parentName:"tr",align:"left"},"-"),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, AddAliases<AddKey<SetBase<UnwrapArrayMember<TResult",">",", TRecord",">",", IncompatibleToAlt<ArrayMember<AliasUT",">",", string, never",">",">",", UnionToIntersection<IncompatibleToAlt<AliasUT ",Object(n.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(n.b)("em",{parentName:"td"},"extends")," ",Object(n.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.ref"},Object(n.b)("em",{parentName:"a"},"Ref")),"<any, TMapping",">"," ? TMapping : I : ",Object(n.b)("em",{parentName:"td"},"never"),", Dict<any",">",", {}",">",">",">",">")))),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"aliases")),Object(n.b)("td",{parentName:"tr",align:"left"},"AliasUT")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:953"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"Select"),"(",Object(n.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(n.b)("em",{parentName:"p"},"**): ["),"QueryBuilder",Object(n.b)("em",{parentName:"p"},"](/docs/api/classes/knex.knex-1.querybuilder)<TRecord, ArrayIfAlready<TResult, DeferredKeySelection<TRecord, string, "),"false",Object(n.b)("em",{parentName:"p"},", {}, "),"false*, {}, never",">",">",">"),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"columnName")),Object(n.b)("td",{parentName:"tr",align:"left"},"***")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, ArrayIfAlready<TResult, DeferredKeySelection<TRecord, string, ",Object(n.b)("em",{parentName:"p"},"false"),", {}, ",Object(n.b)("em",{parentName:"p"},"false"),", {}, never",">",">",">"),Object(n.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1434"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"Select"),"<ColNameUT, TResult2",">","(...",Object(n.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ColNameUT[]): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("h4",{id:"type-parameters-7"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"ColNameUT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string")," ","|"," ",Object(n.b)("em",{parentName:"td"},"number")," ","|"," ",Object(n.b)("em",{parentName:"td"},"symbol")),Object(n.b)("td",{parentName:"tr",align:"left"},"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TResult2")),Object(n.b)("td",{parentName:"tr",align:"left"},"-"),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"AddAliases"),"<AddKey<SetBase<UnwrapArrayMember<TResult",">",", ",Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(n.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(n.b)("em",{parentName:"td"},"base"),">",">",", ColNameUT & ",Object(n.b)("em",{parentName:"td"},"string"),">",", {}",">","[]")))),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"...columnNames")),Object(n.b)("td",{parentName:"tr",align:"left"},"readonly ColNameUT[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1440"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"Select"),"<ColNameUT, TResult2",">","(",Object(n.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ColNameUT[]): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("h4",{id:"type-parameters-8"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"ColNameUT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string")," ","|"," ",Object(n.b)("em",{parentName:"td"},"number")," ","|"," ",Object(n.b)("em",{parentName:"td"},"symbol")),Object(n.b)("td",{parentName:"tr",align:"left"},"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TResult2")),Object(n.b)("td",{parentName:"tr",align:"left"},"-"),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"AddAliases"),"<AddKey<SetBase<UnwrapArrayMember<TResult",">",", ",Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(n.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(n.b)("em",{parentName:"td"},"base"),">",">",", ColNameUT & ",Object(n.b)("em",{parentName:"td"},"string"),">",", {}",">","[]")))),Object(n.b)("h4",{id:"parameters-8"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"columnNames")),Object(n.b)("td",{parentName:"tr",align:"left"},"readonly ColNameUT[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1451"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"Select"),"<TResult2",">","(...",Object(n.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#columndescriptor"},Object(n.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("h4",{id:"type-parameters-9"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TResult2")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"AddAliases"),"<AddKey<SetBase<UnwrapArrayMember<TResult",">",", Partial<AnyOrUnknownToOther<TRecord, {}",">",">",">",", keyof TRecord & ",Object(n.b)("em",{parentName:"td"},"string"),">",", {}",">","[]")))),Object(n.b)("h4",{id:"parameters-9"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"...columnNames")),Object(n.b)("td",{parentName:"tr",align:"left"},"readonly ",Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#columndescriptor"},Object(n.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1462"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"Select"),"<TResult2",">","(",Object(n.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#columndescriptor"},Object(n.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("h4",{id:"type-parameters-10"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"TResult2")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"AddAliases"),"<AddKey<SetBase<UnwrapArrayMember<TResult",">",", Partial<AnyOrUnknownToOther<TRecord, {}",">",">",">",", keyof TRecord & ",Object(n.b)("em",{parentName:"td"},"string"),">",", {}",">","[]")))),Object(n.b)("h4",{id:"parameters-10"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"columnNames")),Object(n.b)("td",{parentName:"tr",align:"left"},"readonly ",Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#columndescriptor"},Object(n.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(n.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(n.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1474"))}d.isMDXComponent=!0}}]);