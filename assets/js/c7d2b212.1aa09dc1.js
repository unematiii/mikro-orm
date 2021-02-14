(window.webpackJsonp=window.webpackJsonp||[]).push([[755],{1051:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,l(l({ref:t},s),{},{components:r})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},828:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(1051)),i={title:"Usage with Babel"},l={unversionedId:"usage-with-babel",id:"version-4.4/usage-with-babel",isDocsHomePage:!1,title:"Usage with Babel",description:"When compiling TS via babel, decorators are by default handled different implementation",source:"@site/versioned_docs/version-4.4/usage-with-babel.md",slug:"/usage-with-babel",permalink:"/docs/usage-with-babel",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/usage-with-babel.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1613330945,sidebar:"version-4.4/docs",previous:{title:"Usage with JavaScript",permalink:"/docs/usage-with-js"},next:{title:"Using Entity Constructors",permalink:"/docs/entity-constructors"}},c=[],s={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When compiling TS via babel, decorators are by default handled different implementation\nthan what ",Object(o.b)("inlineCode",{parentName:"p"},"tsc")," uses. To make the metadata extraction from decorators via Babel work,\nwe need to do use following plugins:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": [\n    "babel-plugin-transform-typescript-metadata",\n    ["@babel/plugin-proposal-decorators", { "legacy": true }],\n    ["@babel/plugin-proposal-class-properties", { "loose": true  }]\n  ]\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Make sure to install the plugins first: ",Object(o.b)("inlineCode",{parentName:"p"},"yarn add -D babel-plugin-transform-typescript-metadata @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties"))),Object(o.b)("p",null,"Lastly we need to set the ",Object(o.b)("inlineCode",{parentName:"p"},"BABEL_DECORATORS_COMPAT")," environment variable to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," to\nadjust the return value of decorators. "),Object(o.b)("p",null,"More information about this topic can be found here:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/840"},"https://github.com/mikro-orm/mikro-orm/issues/840")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://jonahallibonetech.medium.com/next-js-9-mikroorm-eb6f6e08e1a1"},"https://jonahallibonetech.medium.com/next-js-9-mikroorm-eb6f6e08e1a1"))))}p.isMDXComponent=!0}}]);