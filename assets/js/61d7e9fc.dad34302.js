(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98486],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=i,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},172:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var n=r(74034),i=r(79973),o=(r(67294),r(3905)),a={id:"core.settings",title:"Interface: Settings",sidebar_label:"Settings",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/interfaces/core.settings",id:"version-4.5/api/interfaces/core.settings",isDocsHomePage:!1,title:"Interface: Settings",description:"core.Settings",source:"@site/versioned_docs/version-4.5/api/interfaces/core.settings.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.settings",permalink:"/docs/api/interfaces/core.settings",editUrl:null,version:"4.5",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619805813,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"Settings",frontMatter:{id:"core.settings",title:"Interface: Settings",sidebar_label:"Settings",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: SerializedPrimaryKeyOptions<T\\>",permalink:"/docs/api/interfaces/core.serializedprimarykeyoptions"},next:{title:"Interface: TransactionEventArgs",permalink:"/docs/api/interfaces/core.transactioneventargs"}},c=[{value:"Properties",id:"properties",children:[{value:"configPaths",id:"configpaths",children:[]},{value:"tsConfigPath",id:"tsconfigpath",children:[]},{value:"useTsNode",id:"usetsnode",children:[]}]}],p={toc:c};function l(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".Settings"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"configpaths"},"configPaths"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"configPaths"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L168"},"packages/core/src/utils/ConfigurationLoader.ts:168")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"tsconfigpath"},"tsConfigPath"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"tsConfigPath"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L167"},"packages/core/src/utils/ConfigurationLoader.ts:167")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usetsnode"},"useTsNode"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"useTsNode"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/ConfigurationLoader.ts#L166"},"packages/core/src/utils/ConfigurationLoader.ts:166")))}l.isMDXComponent=!0}}]);