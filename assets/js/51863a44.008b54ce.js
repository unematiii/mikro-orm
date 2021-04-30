(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17448],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=s(a),d=r,u=k["".concat(o,".").concat(d)]||k[d]||m[d]||i;return a?n.createElement(u,l(l({ref:t},c),{},{components:a})):n.createElement(u,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},488:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return c}});var n=a(74034),r=a(79973),i=(a(67294),a(3905)),l={id:"knex",title:"Module: knex",sidebar_label:"knex",custom_edit_url:null},p={unversionedId:"api/modules/knex",id:"api/modules/knex",isDocsHomePage:!1,title:"Module: knex",description:"Table of contents",source:"@site/docs/api/modules/knex.md",sourceDirName:"api/modules",slug:"/api/modules/knex",permalink:"/docs/next/api/modules/knex",editUrl:null,version:"current",sidebar_label:"knex",frontMatter:{id:"knex",title:"Module: knex",sidebar_label:"knex",custom_edit_url:null},sidebar:"API",previous:{title:"Module: entity-generator",permalink:"/docs/next/api/modules/entity_generator"},next:{title:"Module: migrations",permalink:"/docs/next/api/modules/migrations"}},o=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Enumerations",id:"enumerations",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Interfaces",id:"interfaces",children:[]}]},{value:"References",id:"references",children:[{value:"SqlEntityManager",id:"sqlentitymanager",children:[]},{value:"SqlEntityRepository",id:"sqlentityrepository",children:[]}]},{value:"Type aliases",id:"type-aliases",children:[{value:"Field",id:"field",children:[]},{value:"KnexStringRef",id:"knexstringref",children:[]}]},{value:"Variables",id:"variables",children:[{value:"MonkeyPatchable",id:"monkeypatchable",children:[]}]}],s={toc:o};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"enumerations"},"Enumerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/enums/knex.querytype"},"QueryType"))),(0,i.kt)("h3",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/classes/knex.abstractsqlconnection"},"AbstractSqlConnection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/classes/knex.abstractsqldriver"},"AbstractSqlDriver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/classes/knex.abstractsqlplatform"},"AbstractSqlPlatform")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/classes/knex.entitymanager"},"EntityManager")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/classes/knex.entityrepository"},"EntityRepository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/classes/knex.querybuilder"},"QueryBuilder")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/classes/knex.schemacomparator"},"SchemaComparator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/classes/knex.schemagenerator"},"SchemaGenerator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/classes/knex.schemahelper"},"SchemaHelper"))),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.column"},"Column")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.columndifference"},"ColumnDifference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.foreignkey"},"ForeignKey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.icriterianode"},"ICriteriaNode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.iquerybuilder"},"IQueryBuilder")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.index"},"Index")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.joinoptions"},"JoinOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.schemadifference"},"SchemaDifference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.table"},"Table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.tabledifference"},"TableDifference"))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("h3",{id:"sqlentitymanager"},"SqlEntityManager"),(0,i.kt)("p",null,"Renames and exports: ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/knex.entitymanager"},"EntityManager")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sqlentityrepository"},"SqlEntityRepository"),(0,i.kt)("p",null,"Renames and exports: ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/knex.entityrepository"},"EntityRepository")),(0,i.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,i.kt)("h3",{id:"field"},"Field"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Field"),"<T",">",": ",(0,i.kt)("em",{parentName:"p"},"string")," ","|"," keyof T ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/knex#knexstringref"},(0,i.kt)("em",{parentName:"a"},"KnexStringRef"))," ","|"," Knex.QueryBuilder"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/knex/src/typings.ts#L16"},"packages/knex/src/typings.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"knexstringref"},"KnexStringRef"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"KnexStringRef"),": ",(0,i.kt)("em",{parentName:"p"},"Knex.Ref"),"<string, { ","[alias: string]",": ",(0,i.kt)("em",{parentName:"p"},"string"),";  }",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/knex/src/typings.ts#L12"},"packages/knex/src/typings.ts:12")),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"monkeypatchable"},"MonkeyPatchable"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"MonkeyPatchable"),": ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Client")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"MySqlDialect")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PostgresDialectTableCompiler")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"QueryExecutioner")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Sqlite3Dialect")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Sqlite3DialectTableCompiler")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TableCompiler")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2cfa4a2/packages/knex/src/MonkeyPatchable.ts#L20"},"packages/knex/src/MonkeyPatchable.ts:20")))}c.isMDXComponent=!0}}]);