(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{1052:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),m=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=m(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=m(r),O=n,d=l["".concat(b,".").concat(O)]||l[O]||s[O]||o;return r?a.a.createElement(d,c(c({ref:t},i),{},{components:r})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,b=new Array(o);b[0]=O;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<o;i++)b[i]=r[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},348:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(8),o=(r(0),r(1052)),b={id:"core.onetooneoptions",title:"Interface: OneToOneOptions<T, O>",sidebar_label:"OneToOneOptions",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/core.onetooneoptions",id:"api/interfaces/core.onetooneoptions",isDocsHomePage:!1,title:"Interface: OneToOneOptions<T, O>",description:"Interface: OneToOneOptions",source:"@site/docs/api/interfaces/core.onetooneoptions.md",slug:"/api/interfaces/core.onetooneoptions",permalink:"/docs/next/api/interfaces/core.onetooneoptions",editUrl:null,version:"current",sidebar_label:"OneToOneOptions",sidebar:"API",previous:{title:"Interface: Node",permalink:"/docs/next/api/interfaces/core.node"},next:{title:"Interface: PoolConfig",permalink:"/docs/next/api/interfaces/core.poolconfig"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"cascade",id:"cascade",children:[]},{value:"columnType",id:"columntype",children:[]},{value:"comment",id:"comment",children:[]},{value:"customType",id:"customtype",children:[]},{value:"default",id:"default",children:[]},{value:"defaultRaw",id:"defaultraw",children:[]},{value:"eager",id:"eager",children:[]},{value:"entity",id:"entity",children:[]},{value:"fieldName",id:"fieldname",children:[]},{value:"fieldNames",id:"fieldnames",children:[]},{value:"formula",id:"formula",children:[]},{value:"hidden",id:"hidden",children:[]},{value:"index",id:"index",children:[]},{value:"inverseJoinColumn",id:"inversejoincolumn",children:[]},{value:"inverseJoinColumns",id:"inversejoincolumns",children:[]},{value:"inversedBy",id:"inversedby",children:[]},{value:"joinColumn",id:"joincolumn",children:[]},{value:"joinColumns",id:"joincolumns",children:[]},{value:"lazy",id:"lazy",children:[]},{value:"length",id:"length",children:[]},{value:"mapToPk",id:"maptopk",children:[]},{value:"mappedBy",id:"mappedby",children:[]},{value:"name",id:"name",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"onCreate",id:"oncreate",children:[]},{value:"onDelete",id:"ondelete",children:[]},{value:"onUpdate",id:"onupdate",children:[]},{value:"onUpdateIntegrity",id:"onupdateintegrity",children:[]},{value:"orphanRemoval",id:"orphanremoval",children:[]},{value:"owner",id:"owner",children:[]},{value:"persist",id:"persist",children:[]},{value:"primary",id:"primary",children:[]},{value:"referenceColumnName",id:"referencecolumnname",children:[]},{value:"serializedName",id:"serializedname",children:[]},{value:"serializedPrimaryKey",id:"serializedprimarykey",children:[]},{value:"serializer",id:"serializer",children:[]},{value:"strategy",id:"strategy",children:[]},{value:"type",id:"type",children:[]},{value:"unique",id:"unique",children:[]},{value:"unsigned",id:"unsigned",children:[]},{value:"version",id:"version",children:[]},{value:"wrappedReference",id:"wrappedreference",children:[]}]}],i={toc:p};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-onetooneoptionst-o"},"Interface: OneToOneOptions<T, O",">"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".OneToOneOptions"),Object(o.b)("h2",{id:"type-parameters"},"Type parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"T"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"O"))))),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Partial"),"<Omit<",Object(o.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#onetomanyoptions"},Object(o.b)("em",{parentName:"a"},"OneToManyOptions")),"<T, O",">",", ",Object(o.b)("em",{parentName:"p"},"orderBy"),">",">"),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("strong",{parentName:"p"},"OneToOneOptions")))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"cascade"},"cascade"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"cascade"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/docs/next/api/enums/core.cascade"},Object(o.b)("em",{parentName:"a"},"Cascade")),"[]"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L67"},"packages/core/src/decorators/Property.ts:67")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"columntype"},"columnType"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"columnType"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L42"},"packages/core/src/decorators/Property.ts:42")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"comment"},"comment"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"comment"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L62"},"packages/core/src/decorators/Property.ts:62")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"customtype"},"customType"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"customType"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},Object(o.b)("em",{parentName:"a"},"Type")),"<any, any",">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L41"},"packages/core/src/decorators/Property.ts:41")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"default"},"default"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"default"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"null")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")," ","|"," ",Object(o.b)("em",{parentName:"p"},"number")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(o.b)("em",{parentName:"p"},"number"),"[]"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L47"},"packages/core/src/decorators/Property.ts:47")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"defaultraw"},"defaultRaw"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"defaultRaw"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L48"},"packages/core/src/decorators/Property.ts:48")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"eager"},"eager"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"eager"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L68"},"packages/core/src/decorators/Property.ts:68")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"entity"},"entity"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"entity"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")," & () => ",Object(o.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#entityname"},Object(o.b)("em",{parentName:"a"},"EntityName")),"<T",">"," ","|"," () => ",Object(o.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#entityname"},Object(o.b)("em",{parentName:"a"},"EntityName")),"<T",">"," & ",Object(o.b)("em",{parentName:"p"},"string")," ","|"," () => ",Object(o.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#entityname"},Object(o.b)("em",{parentName:"a"},"EntityName")),"<T",">"," & () => ",Object(o.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#entityname"},Object(o.b)("em",{parentName:"a"},"EntityName")),"<T",">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L66"},"packages/core/src/decorators/Property.ts:66")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"fieldname"},"fieldName"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"fieldName"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L39"},"packages/core/src/decorators/Property.ts:39")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"fieldnames"},"fieldNames"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"fieldNames"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string"),"[]"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L40"},"packages/core/src/decorators/Property.ts:40")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"formula"},"formula"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"formula"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")," ","|"," (",Object(o.b)("inlineCode",{parentName:"p"},"alias"),": ",Object(o.b)("em",{parentName:"p"},"string"),") => ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L49"},"packages/core/src/decorators/Property.ts:49")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"hidden"},"hidden"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"hidden"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L53"},"packages/core/src/decorators/Property.ts:53")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"index"},"index"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"index"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L55"},"packages/core/src/decorators/Property.ts:55")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"inversejoincolumn"},"inverseJoinColumn"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"inverseJoinColumn"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/OneToMany.ts#L46"},"packages/core/src/decorators/OneToMany.ts:46")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"inversejoincolumns"},"inverseJoinColumns"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"inverseJoinColumns"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string"),"[]"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/OneToMany.ts#L47"},"packages/core/src/decorators/OneToMany.ts:47")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"inversedby"},"inversedBy"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"inversedBy"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")," & keyof T ","|"," (",Object(o.b)("inlineCode",{parentName:"p"},"e"),": T) => ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/OneToOne.ts#L15"},"packages/core/src/decorators/OneToOne.ts:15")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"joincolumn"},"joinColumn"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"joinColumn"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/OneToMany.ts#L44"},"packages/core/src/decorators/OneToMany.ts:44")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"joincolumns"},"joinColumns"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"joinColumns"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string"),"[]"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/OneToMany.ts#L45"},"packages/core/src/decorators/OneToMany.ts:45")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"lazy"},"lazy"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"lazy"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L57"},"packages/core/src/decorators/Property.ts:57")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"length"},"length"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"length"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"number")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L44"},"packages/core/src/decorators/Property.ts:44")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"maptopk"},"mapToPk"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"mapToPk"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/OneToOne.ts#L18"},"packages/core/src/decorators/OneToOne.ts:18")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"mappedby"},"mappedBy"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"mappedBy"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")," & keyof T ","|"," (",Object(o.b)("inlineCode",{parentName:"p"},"e"),": T) => ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/OneToMany.ts#L49"},"packages/core/src/decorators/OneToMany.ts:49")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"name"},"name"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"name"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L38"},"packages/core/src/decorators/Property.ts:38")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"nullable"},"nullable"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"nullable"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L50"},"packages/core/src/decorators/Property.ts:50")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"oncreate"},"onCreate"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"onCreate"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(o.b)("inlineCode",{parentName:"p"},"entity"),": O) => ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L45"},"packages/core/src/decorators/Property.ts:45")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"ondelete"},"onDelete"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"onDelete"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/OneToOne.ts#L19"},"packages/core/src/decorators/OneToOne.ts:19")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"onupdate"},"onUpdate"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"onUpdate"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(o.b)("inlineCode",{parentName:"p"},"entity"),": O) => ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L46"},"packages/core/src/decorators/Property.ts:46")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"onupdateintegrity"},"onUpdateIntegrity"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"onUpdateIntegrity"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/OneToOne.ts#L20"},"packages/core/src/decorators/OneToOne.ts:20")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"orphanremoval"},"orphanRemoval"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"orphanRemoval"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/OneToMany.ts#L42"},"packages/core/src/decorators/OneToMany.ts:42")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"owner"},"owner"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"owner"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/OneToOne.ts#L14"},"packages/core/src/decorators/OneToOne.ts:14")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"persist"},"persist"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"persist"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L52"},"packages/core/src/decorators/Property.ts:52")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"primary"},"primary"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"primary"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/OneToOne.ts#L17"},"packages/core/src/decorators/OneToOne.ts:17")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"referencecolumnname"},"referenceColumnName"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"referenceColumnName"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/OneToMany.ts#L48"},"packages/core/src/decorators/OneToMany.ts:48")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"serializedname"},"serializedName"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"serializedName"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L61"},"packages/core/src/decorators/Property.ts:61")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"serializedprimarykey"},"serializedPrimaryKey"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"serializedPrimaryKey"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L59"},"packages/core/src/decorators/Property.ts:59")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"serializer"},"serializer"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"serializer"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(o.b)("inlineCode",{parentName:"p"},"value"),": ",Object(o.b)("em",{parentName:"p"},"any"),") => ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L60"},"packages/core/src/decorators/Property.ts:60")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"strategy"},"strategy"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"strategy"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/docs/next/api/enums/core.loadstrategy#select_in"},Object(o.b)("em",{parentName:"a"},"SELECT","_","IN"))," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/docs/next/api/enums/core.loadstrategy#joined"},Object(o.b)("em",{parentName:"a"},"JOINED"))),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L69"},"packages/core/src/decorators/Property.ts:69")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"type"},"type"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"type"),": ",Object(o.b)("em",{parentName:"p"},"unknown")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L43"},"packages/core/src/decorators/Property.ts:43")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"unique"},"unique"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"unique"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L56"},"packages/core/src/decorators/Property.ts:56")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"unsigned"},"unsigned"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"unsigned"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L51"},"packages/core/src/decorators/Property.ts:51")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"version"},"version"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"version"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/Property.ts#L54"},"packages/core/src/decorators/Property.ts:54")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"wrappedreference"},"wrappedReference"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"wrappedReference"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/8e9fe39/packages/core/src/decorators/OneToOne.ts#L16"},"packages/core/src/decorators/OneToOne.ts:16")))}m.isMDXComponent=!0}}]);