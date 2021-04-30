(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60074],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13925:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=t(74034),a=t(79973),i=(t(67294),t(3905)),o={id:"knex.knex-1.foreignconstraintbuilder",title:"Interface: ForeignConstraintBuilder",sidebar_label:"ForeignConstraintBuilder",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/interfaces/knex.knex-1.foreignconstraintbuilder",id:"version-4.5/api/interfaces/knex.knex-1.foreignconstraintbuilder",isDocsHomePage:!1,title:"Interface: ForeignConstraintBuilder",description:"knex.Knex.ForeignConstraintBuilder",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.foreignconstraintbuilder.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.foreignconstraintbuilder",permalink:"/docs/api/interfaces/knex.knex-1.foreignconstraintbuilder",editUrl:null,version:"4.5",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619805813,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"ForeignConstraintBuilder",frontMatter:{id:"knex.knex-1.foreignconstraintbuilder",title:"Interface: ForeignConstraintBuilder",sidebar_label:"ForeignConstraintBuilder",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: EnumOptions",permalink:"/docs/api/interfaces/knex.knex-1.enumoptions"},next:{title:"Interface: FunctionHelper",permalink:"/docs/api/interfaces/knex.knex-1.functionhelper"}},c=[{value:"Methods",id:"methods",children:[{value:"references",id:"references",children:[]}]}],s={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".ForeignConstraintBuilder"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"references"},"references"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"references"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"columnName"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.referencingcolumnbuilder"},(0,i.kt)("em",{parentName:"a"},"ReferencingColumnBuilder"))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"columnName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.referencingcolumnbuilder"},(0,i.kt)("em",{parentName:"a"},"ReferencingColumnBuilder"))),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1822"))}u.isMDXComponent=!0}}]);