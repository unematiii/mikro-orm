(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27737],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51838:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(74034),o=n(79973),r=(n(67294),n(3905)),i={title:"Unit of Work and Transactions",sidebar_label:"Unit of Work"},s={unversionedId:"unit-of-work",id:"version-4.2/unit-of-work",isDocsHomePage:!1,title:"Unit of Work and Transactions",description:"MikroORM uses the Identity Map pattern to track objects. Whenever you fetch an object from",source:"@site/versioned_docs/version-4.2/unit-of-work.md",sourceDirName:".",slug:"/unit-of-work",permalink:"/docs/4.2/unit-of-work",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/unit-of-work.md",version:"4.2",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619805813,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"Unit of Work",frontMatter:{title:"Unit of Work and Transactions",sidebar_label:"Unit of Work"},sidebar:"version-4.2/docs",previous:{title:"Working with Entity Manager",permalink:"/docs/4.2/entity-manager"},next:{title:"Identity Map and Request Context",permalink:"/docs/4.2/identity-map"}},l=[{value:"Persisting Managed Entities",id:"persisting-managed-entities",children:[]},{value:"How MikroORM Detects Changes",id:"how-mikroorm-detects-changes",children:[]},{value:"Implicit Transactions",id:"implicit-transactions",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"MikroORM uses the Identity Map pattern to track objects. Whenever you fetch an object from\nthe database, MikroORM will keep a reference to this object inside its ",(0,r.kt)("inlineCode",{parentName:"p"},"UnitOfWork"),". "),(0,r.kt)("p",null,"This allows MikroORM room for optimizations. If you call the EntityManager and ask for an\nentity with a specific ID twice, it will return the same instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const authorRepository = orm.em.getRepository(Author);\nconst jon1 = await authorRepository.findOne(1);\nconst jon2 = await authorRepository.findOne(1);\n\n// identity map in action\nconsole.log(jon1 === jon2); // true\n")),(0,r.kt)("p",null,"Only one SELECT query will be fired against the database here. In the second ",(0,r.kt)("inlineCode",{parentName:"p"},"findOne()"),"\ncall MikroORM will check the identity map first and will skip the database round trip as\nit will find the entity already loaded."),(0,r.kt)("p",null,"The identity map being indexed by primary keys only allows shortcuts when you ask for objects\nby primary key. When you query by other properties, you will still get the same reference,\nbut two separate database calls will be made:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const authorRepository = orm.em.getRepository(Author);\nconst jon1 = await authorRepository.findOne({ name: 'Jon Snow' });\nconst jon2 = await authorRepository.findOne({ name: 'Jon Snow' });\n\n// identity map in action\nconsole.log(jon1 === jon2); // true\n")),(0,r.kt)("p",null,"MikroORM only knows objects by id, so a query for different criteria has to go to the database,\neven if it was executed just before. But instead of creating a second ",(0,r.kt)("inlineCode",{parentName:"p"},"Author")," object MikroORM\nfirst gets the primary key from the row and checks if it already has an object inside the\n",(0,r.kt)("inlineCode",{parentName:"p"},"UnitOfWork")," with that primary key. "),(0,r.kt)("h2",{id:"persisting-managed-entities"},"Persisting Managed Entities"),(0,r.kt)("p",null,"The identity map has a second use-case. When you call ",(0,r.kt)("inlineCode",{parentName:"p"},"em.flush()"),", MikroORM will\nask the identity map for all objects that are currently managed. This means you don't have to\ncall ",(0,r.kt)("inlineCode",{parentName:"p"},"em.persist()")," over and over again to pass known objects to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager"),". This is a NO-OP for known entities, but leads to much code written that is\nconfusing to other developers."),(0,r.kt)("p",null,"The following code WILL update your database with the changes made to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Author")," object,\neven if you did not call ",(0,r.kt)("inlineCode",{parentName:"p"},"em.persist()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const authorRepository = orm.em.getRepository(Author);\nconst jon = await authorRepository.findOne(1);\njon.email = 'foo@bar.com';\nawait authorRepository.flush(); // calling orm.em.flush() has same effect\n")),(0,r.kt)("h2",{id:"how-mikroorm-detects-changes"},"How MikroORM Detects Changes"),(0,r.kt)("p",null,'MikroORM is a data-mapper that tries to achieve persistence-ignorance (PI). This means you\nmap JS objects into a relational database that do not necessarily know about the database at\nall. A natural question would now be, "how does MikroORM even detect objects have changed?".'),(0,r.kt)("p",null,"For this MikroORM keeps a second map inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"UnitOfWork"),". Whenever you fetch an object\nfrom the database MikroORM will keep a copy of all the properties and associations inside\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"UnitOfWork"),". "),(0,r.kt)("p",null,"Now whenever you call ",(0,r.kt)("inlineCode",{parentName:"p"},"em.flush()")," MikroORM will iterate over all entities you\npreviously marked for persisting via ",(0,r.kt)("inlineCode",{parentName:"p"},"em.persist()"),". For each object it will\ncompare the original property and association values with the values that are currently set\non the object. If changes are detected then the object is queued for a UPDATE operation.\nOnly the fields that actually changed are updated."),(0,r.kt)("h2",{id:"implicit-transactions"},"Implicit Transactions"),(0,r.kt)("p",null,"First and most important implication of having Unit of Work is that it allows handling\ntransactions automatically. "),(0,r.kt)("p",null,"When you call ",(0,r.kt)("inlineCode",{parentName:"p"},"em.flush()"),", all computed changes are queried inside a database\ntransaction (if supported by given driver). This means that you can control the boundaries\nof transactions simply by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"em.persist()")," and once all your changes\nare ready, simply calling ",(0,r.kt)("inlineCode",{parentName:"p"},"flush()")," will run them inside a transaction. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also control the transaction boundaries manually via ",(0,r.kt)("inlineCode",{parentName:"p"},"em.transactional(cb)"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const user = await em.findOne(User, 1);\nuser.email = 'foo@bar.com';\nconst car = new Car();\nuser.cars.add(car);\n\n// thanks to bi-directional cascading we only need to persist user entity\n// flushing will create a transaction, insert new car and update user with new email\nawait em.persistAndFlush(user);\n")),(0,r.kt)("p",null,"You can find more information about transactions in ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.2/transactions"},"Transactions and concurrency"),"\npage."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/2.6/reference/unitofwork.html"},"doctrine internals docs"),"\nas the behaviour here is pretty much the same.")))}p.isMDXComponent=!0}}]);