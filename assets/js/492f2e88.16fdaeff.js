(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{1112:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),c=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=c(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=c(n),u=r,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||i;return n?a.a.createElement(m,s(s({ref:t},d),{},{components:n})):a.a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},366:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(8),i=(n(0),n(1112)),o={title:"Separating Concerns using Embeddables",sidebar_label:"Embeddables"},s={unversionedId:"embeddables",id:"version-4.1/embeddables",isDocsHomePage:!1,title:"Separating Concerns using Embeddables",description:"Support for embeddables was added in version 4.0",source:"@site/versioned_docs/version-4.1/embeddables.md",slug:"/embeddables",permalink:"/docs/4.1/embeddables",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.1/embeddables.md",version:"4.1",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1616490181,formattedLastUpdatedAt:"3/23/2021",sidebar_label:"Embeddables",sidebar:"version-4.1/docs",previous:{title:"Custom Types",permalink:"/docs/4.1/custom-types"},next:{title:"Defining Entities via EntitySchema",permalink:"/docs/4.1/entity-schema"}},l=[{value:"Initializing embeddables",id:"initializing-embeddables",children:[]},{value:"Column Prefixing",id:"column-prefixing",children:[]}],d={toc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Support for embeddables was added in version 4.0")),Object(i.b)("p",null,"Embeddables are classes which are not entities themselves, but are embedded in\nentities and can also be queried. You'll mostly want to use them to reduce\nduplication or separating concerns. Value objects such as date range or address\nare the primary use case for this feature."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Embeddables needs to be discovered just like regular entities, don't forget to\nadd them to the list of entities when initializing the ORM.")),Object(i.b)("p",null,"Embeddables can only contain properties with basic ",Object(i.b)("inlineCode",{parentName:"p"},"@Property()")," mapping."),Object(i.b)("p",null,"For the purposes of this tutorial, we will assume that you have a ",Object(i.b)("inlineCode",{parentName:"p"},"User")," class in\nyour application and you would like to store an address in the ",Object(i.b)("inlineCode",{parentName:"p"},"User")," class. We will\nmodel the ",Object(i.b)("inlineCode",{parentName:"p"},"Address")," class as an embeddable instead of simply adding the respective\ncolumns to the ",Object(i.b)("inlineCode",{parentName:"p"},"User")," class."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded()\n  address!: Address;\n\n}\n\n@Embeddable()\nexport class Address {\n  \n  @Property()\n  street!: string;\n\n  @Property()\n  postalCode!: string;\n\n  @Property()\n  city!: string;\n\n  @Property()\n  country!: string;\n\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"When using ReflectMetadataProvider, you might need to provide the class in decorator options:\n",Object(i.b)("inlineCode",{parentName:"p"},"@Embedded(() => Address)")," or ",Object(i.b)("inlineCode",{parentName:"p"},"@Embedded({ entity: () => Address })"),".")),Object(i.b)("p",null,"In terms of your database schema, MikroORM will automatically inline all columns from\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"Address")," class into the table of the ",Object(i.b)("inlineCode",{parentName:"p"},"User")," class, just as if you had declared\nthem directly there."),Object(i.b)("h2",{id:"initializing-embeddables"},"Initializing embeddables"),Object(i.b)("p",null,"In case all fields in the embeddable are nullable, you might want to initialize the\nembeddable, to avoid getting a null value instead of the embedded object."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Embedded()\naddress = new Address();\n")),Object(i.b)("h2",{id:"column-prefixing"},"Column Prefixing"),Object(i.b)("p",null,"By default, MikroORM names your columns by prefixing them, using the value object name."),Object(i.b)("p",null,"Following the example above, your columns would be named as ",Object(i.b)("inlineCode",{parentName:"p"},"address_street"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"address_postal_code"),"..."),Object(i.b)("p",null,"You can change this behaviour to meet your needs by changing the ",Object(i.b)("inlineCode",{parentName:"p"},"prefix")," attribute\nin the ",Object(i.b)("inlineCode",{parentName:"p"},"@Embedded()")," notation."),Object(i.b)("p",null,"The following example shows you how to set your prefix to ",Object(i.b)("inlineCode",{parentName:"p"},"myPrefix_"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded({ prefix: 'myPrefix_' })\n  address!: Address;\n\n}\n")),Object(i.b)("p",null,"To have MikroORM drop the prefix and use the value object's property name directly,\nset ",Object(i.b)("inlineCode",{parentName:"p"},"prefix: false"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded({ entity: () => Address, prefix: false })\n  address!: Address;\n\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",Object(i.b)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/tutorials/embeddables.html"},"doctrine tutorial"),"\nas the behaviour here is pretty much the same.")))}c.isMDXComponent=!0}}]);