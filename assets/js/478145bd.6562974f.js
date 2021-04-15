(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{1110:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),m=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=m(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),o=m(a),O=r,j=o["".concat(c,".").concat(O)]||o[O]||l[O]||b;return a?n.a.createElement(j,p(p({ref:t},s),{},{components:a})):n.a.createElement(j,p({ref:t},s))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=O;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<b;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},353:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(8),b=(a(0),a(1110)),c={id:"core.eventmanager",title:"Class: EventManager",sidebar_label:"EventManager",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/core.eventmanager",id:"version-4.5/api/classes/core.eventmanager",isDocsHomePage:!1,title:"Class: EventManager",description:"Class: EventManager",source:"@site/versioned_docs/version-4.5/api/classes/core.eventmanager.md",slug:"/api/classes/core.eventmanager",permalink:"/docs/api/classes/core.eventmanager",editUrl:null,version:"4.5",lastUpdatedBy:"Wybren Kortstra",lastUpdatedAt:1618467433,formattedLastUpdatedAt:"4/15/2021",sidebar_label:"EventManager",sidebar:"version-4.5/API",previous:{title:"Class: EnumArrayType<T>",permalink:"/docs/api/classes/core.enumarraytype"},next:{title:"Class: ExceptionConverter",permalink:"/docs/api/classes/core.exceptionconverter"}},i=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"entities",id:"entities",children:[]},{value:"listeners",id:"listeners",children:[]}]},{value:"Methods",id:"methods",children:[{value:"dispatchEvent",id:"dispatchevent",children:[]},{value:"getSubscribedEntities",id:"getsubscribedentities",children:[]},{value:"hasListeners",id:"haslisteners",children:[]},{value:"registerSubscriber",id:"registersubscriber",children:[]}]}],s={toc:i};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-eventmanager"},"Class: EventManager"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".EventManager"),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new EventManager"),"(",Object(b.b)("inlineCode",{parentName:"p"},"subscribers"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventsubscriber"},Object(b.b)("em",{parentName:"a"},"EventSubscriber")),"<any",">","[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.eventmanager"},Object(b.b)("em",{parentName:"a"},"EventManager"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"subscribers")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.eventsubscriber"},Object(b.b)("em",{parentName:"a"},"EventSubscriber")),"<any",">","[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.eventmanager"},Object(b.b)("em",{parentName:"a"},"EventManager"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventManager.ts#L9"},"packages/core/src/events/EventManager.ts:9")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"entities"},"entities"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"entities"),": ",Object(b.b)("em",{parentName:"p"},"Map"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventsubscriber"},Object(b.b)("em",{parentName:"a"},"EventSubscriber")),"<any",">",", string[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventManager.ts#L9"},"packages/core/src/events/EventManager.ts:9")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"listeners"},"listeners"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"listeners"),": ",Object(b.b)("em",{parentName:"p"},"Partial"),"<Record<",Object(b.b)("a",{parentName:"p",href:"/docs/api/enums/core.eventtype"},Object(b.b)("em",{parentName:"a"},"EventType")),", ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventsubscriber"},Object(b.b)("em",{parentName:"a"},"EventSubscriber")),"<any",">","[]",">",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventManager.ts#L8"},"packages/core/src/events/EventManager.ts:8")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"dispatchevent"},"dispatchEvent"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"dispatchEvent"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"event"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#transactioneventtype"},Object(b.b)("em",{parentName:"a"},"TransactionEventType")),", ",Object(b.b)("inlineCode",{parentName:"p"},"args"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.transactioneventargs"},Object(b.b)("em",{parentName:"a"},"TransactionEventArgs")),"): ",Object(b.b)("em",{parentName:"p"},"unknown")),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"event")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#transactioneventtype"},Object(b.b)("em",{parentName:"a"},"TransactionEventType")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.transactioneventargs"},Object(b.b)("em",{parentName:"a"},"TransactionEventArgs")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"unknown")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventManager.ts#L25"},"packages/core/src/events/EventManager.ts:25")),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"dispatchEvent"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"event"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/enums/core.eventtype#oninit"},Object(b.b)("em",{parentName:"a"},"onInit")),", ",Object(b.b)("inlineCode",{parentName:"p"},"args"),": ",Object(b.b)("em",{parentName:"p"},"Partial"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventargs"},Object(b.b)("em",{parentName:"a"},"EventArgs")),"<T",">",">","): ",Object(b.b)("em",{parentName:"p"},"unknown")),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"event")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/enums/core.eventtype#oninit"},Object(b.b)("em",{parentName:"a"},"onInit")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"Partial"),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.eventargs"},Object(b.b)("em",{parentName:"a"},"EventArgs")),"<T",">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"unknown")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventManager.ts#L26"},"packages/core/src/events/EventManager.ts:26")),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"dispatchEvent"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"event"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/enums/core.eventtype"},Object(b.b)("em",{parentName:"a"},"EventType")),", ",Object(b.b)("inlineCode",{parentName:"p"},"args"),": ",Object(b.b)("em",{parentName:"p"},"Partial"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.flusheventargs"},Object(b.b)("em",{parentName:"a"},"FlushEventArgs"))," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventargs"},Object(b.b)("em",{parentName:"a"},"EventArgs")),"<T",">",">","): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<unknown",">"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"event")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/enums/core.eventtype"},Object(b.b)("em",{parentName:"a"},"EventType")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"Partial"),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.flusheventargs"},Object(b.b)("em",{parentName:"a"},"FlushEventArgs"))," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.eventargs"},Object(b.b)("em",{parentName:"a"},"EventArgs")),"<T",">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<unknown",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventManager.ts#L27"},"packages/core/src/events/EventManager.ts:27")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getsubscribedentities"},"getSubscribedEntities"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getSubscribedEntities"),"(",Object(b.b)("inlineCode",{parentName:"p"},"listener"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventsubscriber"},Object(b.b)("em",{parentName:"a"},"EventSubscriber")),"<any",">","): ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"listener")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.eventsubscriber"},Object(b.b)("em",{parentName:"a"},"EventSubscriber")),"<any",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventManager.ts#L70"},"packages/core/src/events/EventManager.ts:70")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"haslisteners"},"hasListeners"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hasListeners"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"event"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/enums/core.eventtype"},Object(b.b)("em",{parentName:"a"},"EventType")),", ",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">","): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"event")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/enums/core.eventtype"},Object(b.b)("em",{parentName:"a"},"EventType")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventManager.ts#L51"},"packages/core/src/events/EventManager.ts:51")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"registersubscriber"},"registerSubscriber"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"registerSubscriber"),"(",Object(b.b)("inlineCode",{parentName:"p"},"subscriber"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventsubscriber"},Object(b.b)("em",{parentName:"a"},"EventSubscriber")),"<any",">","): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"subscriber")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.eventsubscriber"},Object(b.b)("em",{parentName:"a"},"EventSubscriber")),"<any",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventManager.ts#L15"},"packages/core/src/events/EventManager.ts:15")))}m.isMDXComponent=!0}}]);