(window.webpackJsonp=window.webpackJsonp||[]).push([[946],{1018:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(8),r=(n(0),n(1048)),o={title:"EntityManager API"},l={unversionedId:"entity-manager-api",id:"version-4.3/entity-manager-api",isDocsHomePage:!1,title:"EntityManager API",description:"getDriver(): IDatabaseDriver",source:"@site/versioned_docs/version-4.3/entity-manager-api.md",slug:"/entity-manager-api",permalink:"/docs/4.3/entity-manager-api",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/entity-manager-api.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612899392,sidebar:"version-4.3/docs",previous:{title:"Read Replica Connections",permalink:"/docs/4.3/read-connections"},next:{title:"EntityRepository API",permalink:"/docs/4.3/repositories-api"}},b=[],c={toc:b};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h4",{id:"getdriver-idatabasedriver"},Object(r.b)("inlineCode",{parentName:"h4"},"getDriver(): IDatabaseDriver")),Object(r.b)("p",null,"Gets the Driver instance used by this EntityManager"),Object(r.b)("hr",null),Object(r.b)("h4",{id:"getconnectiontype-read--write-returntypedgetconnection"},Object(r.b)("inlineCode",{parentName:"h4"},"getConnection(type?: 'read' | 'write'): ReturnType<D['getConnection']>")),Object(r.b)("p",null,"Gets the Connection instance, by default returns write connection"),Object(r.b)("hr",null),Object(r.b)("h4",{id:"getrepositoryentityname-entitynamet-getrepositoryt-u"},Object(r.b)("inlineCode",{parentName:"h4"},"getRepository(entityName: EntityName<T>): GetRepository<T, U>")),Object(r.b)("p",null,"Returns ",Object(r.b)("inlineCode",{parentName:"p"},"EntityRepository")," for given entity, respects ",Object(r.b)("inlineCode",{parentName:"p"},"customRepository")," option of ",Object(r.b)("inlineCode",{parentName:"p"},"@Entity"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"entityRepository")," option of ",Object(r.b)("inlineCode",{parentName:"p"},"MikroORM.init()"),"."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"getvalidator-entityvalidator"},Object(r.b)("inlineCode",{parentName:"h4"},"getValidator(): EntityValidator")),Object(r.b)("p",null,"Gets EntityValidator instance"),Object(r.b)("hr",null),Object(r.b)("h4",{id:"findentityname-entitynamet-where-filterqueryt-options-findoptionst-p-promiseloadedt-p"},Object(r.b)("inlineCode",{parentName:"h4"},"find(entityName: EntityName<T>, where: FilterQuery<T>, options?: FindOptions<T, P>): Promise<Loaded<T, P>[]>")),Object(r.b)("p",null,"Finds all entities matching your ",Object(r.b)("inlineCode",{parentName:"p"},"where")," query. You can pass additional options via the ",Object(r.b)("inlineCode",{parentName:"p"},"options")," parameter."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"export interface FindOptions<T, P extends Populate<T> = Populate<T>> {\n  populate?: P;\n  orderBy?: QueryOrderMap;\n  limit?: number;\n  offset?: number;\n  refresh?: boolean;\n  convertCustomTypes?: boolean;\n  fields?: string[];\n  schema?: string;\n  flags?: QueryFlag[];\n  groupBy?: string | string[];\n  having?: QBFilterQuery<T>;\n  strategy?: LoadStrategy;\n  filters?: Dictionary<boolean | Dictionary> | string[] | boolean;\n}\n")),Object(r.b)("hr",null),Object(r.b)("h4",{id:"findentityname-entitynamet-where-filterqueryt-populate-p-orderby-queryordermap-limit-number-offset-number-promiseloadedt-p"},Object(r.b)("inlineCode",{parentName:"h4"},"find(entityName: EntityName<T>, where: FilterQuery<T>, populate?: P, orderBy?: QueryOrderMap, limit?: number, offset?: number): Promise<Loaded<T, P>[]>")),Object(r.b)("p",null,"Finds all entities matching your ",Object(r.b)("inlineCode",{parentName:"p"},"where")," query.\nSame as previous ",Object(r.b)("inlineCode",{parentName:"p"},"find")," method, just with dedicated parameters for ",Object(r.b)("inlineCode",{parentName:"p"},"populate"),", ",Object(r.b)("inlineCode",{parentName:"p"},"orderBy"),", ",Object(r.b)("inlineCode",{parentName:"p"},"limit"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"offset"),"."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"addfiltername-string-cond-filterqueryt--args-dictionary--filterqueryt-entityname-entitynamet-enabled-boolean-void"},Object(r.b)("inlineCode",{parentName:"h4"},"addFilter(name: string, cond: FilterQuery<T> | ((args: Dictionary) => FilterQuery<T>), entityName?: EntityName<T>[], enabled?: boolean): void")),Object(r.b)("hr",null),Object(r.b)("h4",{id:"setfilterparamsname-string-args-dictionary-void"},Object(r.b)("inlineCode",{parentName:"h4"},"setFilterParams(name: string, args: Dictionary): void")),Object(r.b)("hr",null),Object(r.b)("h4",{id:"getfilterparamst-extends-dictionary--dictionaryname-string-t"},Object(r.b)("inlineCode",{parentName:"h4"},"getFilterParams<T extends Dictionary = Dictionary>(name: string): T")),Object(r.b)("hr",null),Object(r.b)("h4",{id:"findandcountentityname-entitynamet-where-filterqueryt-options-findoptionst-p-promiseloadedt-p-number"},Object(r.b)("inlineCode",{parentName:"h4"},"findAndCount(entityName: EntityName<T>, where: FilterQuery<T>, options?: FindOptions<T, P>): Promise<[Loaded<T, P>[], number]>")),Object(r.b)("p",null,"Calls ",Object(r.b)("inlineCode",{parentName:"p"},"em.find()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"em.count()")," with the same arguments (where applicable) and returns the results as tuple\nwhere first element is the array of entities and the second is the count."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"findandcountentityname-entitynamet-where-filterqueryt-populate-p-orderby-queryordermap-limit-number-offset-number-promiseloadedt-p-number"},Object(r.b)("inlineCode",{parentName:"h4"},"findAndCount(entityName: EntityName<T>, where: FilterQuery<T>, populate?: P, orderBy?: QueryOrderMap, limit?: number, offset?: number): Promise<[Loaded<T, P>[], number]>")),Object(r.b)("p",null,"Calls ",Object(r.b)("inlineCode",{parentName:"p"},"em.find()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"em.count()")," with the same arguments (where applicable) and returns the results as tuple\nwhere first element is the array of entities and the second is the count."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"findoneentityname-entitynamet-where-filterqueryt-options-findoneoptionst-p-promiseloadedt-p--null"},Object(r.b)("inlineCode",{parentName:"h4"},"findOne(entityName: EntityName<T>, where: FilterQuery<T>, options?: FindOneOptions<T, P>): Promise<Loaded<T, P> | null>")),Object(r.b)("p",null,"Finds first entity matching your ",Object(r.b)("inlineCode",{parentName:"p"},"where")," query."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"findoneentityname-entitynamet-where-filterqueryt-populate-p-orderby-queryordermap-promiseloadedt-p--null"},Object(r.b)("inlineCode",{parentName:"h4"},"findOne(entityName: EntityName<T>, where: FilterQuery<T>, populate?: P, orderBy?: QueryOrderMap): Promise<Loaded<T, P> | null>")),Object(r.b)("p",null,"Finds first entity matching your ",Object(r.b)("inlineCode",{parentName:"p"},"where")," query."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"findoneorfailentityname-entitynamet-where-filterqueryt-options-findoneorfailoptionst-p-promiseloadedt-p"},Object(r.b)("inlineCode",{parentName:"h4"},"findOneOrFail(entityName: EntityName<T>, where: FilterQuery<T>, options?: FindOneOrFailOptions<T, P>): Promise<Loaded<T, P>>")),Object(r.b)("p",null,"Finds first entity matching your ",Object(r.b)("inlineCode",{parentName:"p"},"where")," query. If nothing found, it will throw an error.\nYou can override the factory for creating this method via ",Object(r.b)("inlineCode",{parentName:"p"},"options.failHandler")," locally\nor via ",Object(r.b)("inlineCode",{parentName:"p"},"Configuration.findOneOrFailHandler")," globally."),Object(r.b)("p",null,"Finds first entity matching your ",Object(r.b)("inlineCode",{parentName:"p"},"where")," query. If nothing found, it will throw an error."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"findoneorfailentityname-entitynamet-where-filterqueryt-populate-p-orderby-queryordermap-promiseloadedt-p"},Object(r.b)("inlineCode",{parentName:"h4"},"findOneOrFail(entityName: EntityName<T>, where: FilterQuery<T>, populate?: P, orderBy?: QueryOrderMap): Promise<Loaded<T, P>>")),Object(r.b)("p",null,"You can override the factory for creating this method via ",Object(r.b)("inlineCode",{parentName:"p"},"options.failHandler")," locally\nor via ",Object(r.b)("inlineCode",{parentName:"p"},"Configuration.findOneOrFailHandler")," globally."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"transactionalcb-em-dtypeof-entitymanagertype--promiset-ctx-any-promiset"},Object(r.b)("inlineCode",{parentName:"h4"},"transactional(cb: (em: D[typeof EntityManagerType]) => Promise<T>, ctx?: any): Promise<T>")),Object(r.b)("p",null,"Runs your callback wrapped inside a database transaction."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"beginctx-transaction-promisevoid"},Object(r.b)("inlineCode",{parentName:"h4"},"begin(ctx?: Transaction): Promise<void>")),Object(r.b)("p",null,"Starts new transaction bound to this EntityManager. Use ",Object(r.b)("inlineCode",{parentName:"p"},"ctx")," parameter to provide the parent when nesting transactions."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"commit-promisevoid"},Object(r.b)("inlineCode",{parentName:"h4"},"commit(): Promise<void>")),Object(r.b)("p",null,"Commits the transaction bound to this EntityManager. Flushes before doing the actual commit query."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"rollback-promisevoid"},Object(r.b)("inlineCode",{parentName:"h4"},"rollback(): Promise<void>")),Object(r.b)("p",null,"Rollbacks the transaction bound to this EntityManager."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"lockentity-anyentity-lockmode-lockmode-lockversion-number--date-promisevoid"},Object(r.b)("inlineCode",{parentName:"h4"},"lock(entity: AnyEntity, lockMode: LockMode, lockVersion?: number | Date): Promise<void>")),Object(r.b)("p",null,"Runs your callback wrapped inside a database transaction."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"nativeinsertentity-t-promiseprimaryt"},Object(r.b)("inlineCode",{parentName:"h4"},"nativeInsert(entity: T): Promise<Primary<T>>")),Object(r.b)("p",null,"Fires native insert query. Calling this has no side effects on the context (identity map)."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"nativeinsertentityname-entitynamet-data-entitydatat-promiseprimaryt"},Object(r.b)("inlineCode",{parentName:"h4"},"nativeInsert(entityName: EntityName<T>, data: EntityData<T>): Promise<Primary<T>>")),Object(r.b)("p",null,"Fires native insert query. Calling this has no side effects on the context (identity map)."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"nativeupdateentityname-entitynamet-where-filterqueryt-data-entitydatat-options-updateoptionst-promisenumber"},Object(r.b)("inlineCode",{parentName:"h4"},"nativeUpdate(entityName: EntityName<T>, where: FilterQuery<T>, data: EntityData<T>, options?: UpdateOptions<T>): Promise<number>")),Object(r.b)("p",null,"Fires native update query. Calling this has no side effects on the context (identity map)."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"nativedeleteentityname-entitynamet-where-filterqueryt-options-deleteoptionst-promisenumber"},Object(r.b)("inlineCode",{parentName:"h4"},"nativeDelete(entityName: EntityName<T>, where: FilterQuery<T>, options?: DeleteOptions<T>): Promise<number>")),Object(r.b)("p",null,"Fires native delete query. Calling this has no side effects on the context (identity map)."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"mapentityname-entitynamet-result-entitydatat-t"},Object(r.b)("inlineCode",{parentName:"h4"},"map(entityName: EntityName<T>, result: EntityData<T>): T")),Object(r.b)("p",null,"Maps raw DB result to entity, adding it to current Identity Map. Equivalent to\n",Object(r.b)("inlineCode",{parentName:"p"},"driver.mapResult()")," followed by ",Object(r.b)("inlineCode",{parentName:"p"},"em.merge()"),"."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"mergeentity-t-refresh-boolean-t"},Object(r.b)("inlineCode",{parentName:"h4"},"merge(entity: T, refresh?: boolean): T")),Object(r.b)("p",null,"Merges given entity to this EntityManager so it becomes managed. You can force refreshing of existing entities\nvia second parameter. By default it will return already loaded entities without modifying them."),Object(r.b)("p",null,"This is useful when you want to work with cached entities. "),Object(r.b)("hr",null),Object(r.b)("h4",{id:"mergeentityname-entitynamet-data-entitydatat-refresh-boolean-convertcustomtypes-boolean-t"},Object(r.b)("inlineCode",{parentName:"h4"},"merge(entityName: EntityName<T>, data: EntityData<T>, refresh?: boolean, convertCustomTypes?: boolean): T")),Object(r.b)("p",null,"Merges given entity to this EntityManager so it becomes managed. You can force refreshing of existing entities\nvia second parameter. By default it will return already loaded entities without modifying them."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"createentityname-entitynamet-data-entitydatat-newt-p"},Object(r.b)("inlineCode",{parentName:"h4"},"create(entityName: EntityName<T>, data: EntityData<T>): New<T, P>")),Object(r.b)("p",null,"Creates new instance of given entity and populates it with given data"),Object(r.b)("hr",null),Object(r.b)("h4",{id:"assignentity-t-data-entitydatat-options-assignoptions-t"},Object(r.b)("inlineCode",{parentName:"h4"},"assign(entity: T, data: EntityData<T>, options?: AssignOptions): T")),Object(r.b)("p",null,"Shortcut for ",Object(r.b)("inlineCode",{parentName:"p"},"wrap(entity).assign(data, { em })")),Object(r.b)("hr",null),Object(r.b)("h4",{id:"getreferenceentityname-entitynamet-id-primaryt-wrapped-boolean-convertcustomtypes-boolean-t--referencet"},Object(r.b)("inlineCode",{parentName:"h4"},"getReference(entityName: EntityName<T>, id: Primary<T>, wrapped?: boolean, convertCustomTypes?: boolean): T | Reference<T>")),Object(r.b)("p",null,"Gets a reference to the entity identified by the given type and identifier without actually loading it, if the entity is not yet loaded"),Object(r.b)("hr",null),Object(r.b)("h4",{id:"countentityname-entitynamet-where-filterqueryt-options-countoptionst-promisenumber"},Object(r.b)("inlineCode",{parentName:"h4"},"count(entityName: EntityName<T>, where?: FilterQuery<T>, options?: CountOptions<T>): Promise<number>")),Object(r.b)("p",null,"Returns total number of entities matching your ",Object(r.b)("inlineCode",{parentName:"p"},"where")," query."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"persistentity-anyentity--referenceanyentity--anyentity--referenceanyentity-this"},Object(r.b)("inlineCode",{parentName:"h4"},"persist(entity: AnyEntity | Reference<AnyEntity> | (AnyEntity | Reference<AnyEntity>)[]): this")),Object(r.b)("p",null,"Tells the EntityManager to make an instance managed and persistent.\nThe entity will be entered into the database at or before transaction commit or as a result of the flush operation."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"persistandflushentity-anyentity--referenceanyentity--anyentity--referenceanyentity-promisevoid"},Object(r.b)("inlineCode",{parentName:"h4"},"persistAndFlush(entity: AnyEntity | Reference<AnyEntity> | (AnyEntity | Reference<AnyEntity>)[]): Promise<void>")),Object(r.b)("p",null,"Persists your entity immediately, flushing all not yet persisted changes to the database too.\nEquivalent to ",Object(r.b)("inlineCode",{parentName:"p"},"em.persist(e).flush()"),"."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"persistlaterentity-anyentity--anyentity-void"},Object(r.b)("inlineCode",{parentName:"h4"},"persistLater(entity: AnyEntity | AnyEntity[]): void")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"deprecated, use ",Object(r.b)("inlineCode",{parentName:"p"},"persist()"))),Object(r.b)("p",null,"Tells the EntityManager to make an instance managed and persistent.\nThe entity will be entered into the database at or before transaction commit or as a result of the flush operation."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"removeentity-t--referencet--t--referencet-this"},Object(r.b)("inlineCode",{parentName:"h4"},"remove(entity: T | Reference<T> | (T | Reference<T>)[]): this")),Object(r.b)("p",null,"Marks entity for removal.\nA removed entity will be removed from the database at or before transaction commit or as a result of the flush operation."),Object(r.b)("p",null,"This method fires ",Object(r.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(r.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks.  "),Object(r.b)("p",null,"To remove entities by condition, use ",Object(r.b)("inlineCode",{parentName:"p"},"em.nativeDelete()"),"."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"removeandflushentity-anyentity--referenceanyentity-promisevoid"},Object(r.b)("inlineCode",{parentName:"h4"},"removeAndFlush(entity: AnyEntity | Reference<AnyEntity>): Promise<void>")),Object(r.b)("p",null,"Removes an entity instance immediately, flushing all not yet persisted changes to the database too.\nEquivalent to ",Object(r.b)("inlineCode",{parentName:"p"},"em.remove(e).flush()")),Object(r.b)("p",null,"This method fires ",Object(r.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(r.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks.  "),Object(r.b)("hr",null),Object(r.b)("h4",{id:"removelaterentity-anyentity-void"},Object(r.b)("inlineCode",{parentName:"h4"},"removeLater(entity: AnyEntity): void")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"deprecated use ",Object(r.b)("inlineCode",{parentName:"p"},"remove()"))),Object(r.b)("p",null,"Marks entity for removal.\nA removed entity will be removed from the database at or before transaction commit or as a result of the flush operation."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"flush-promisevoid"},Object(r.b)("inlineCode",{parentName:"h4"},"flush(): Promise<void>")),Object(r.b)("p",null,"Flushes all changes to objects that have been queued up to now to the database.\nThis effectively synchronizes the in-memory state of managed objects with the database."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"clear-void"},Object(r.b)("inlineCode",{parentName:"h4"},"clear(): void")),Object(r.b)("p",null,"Clears the EntityManager. All entities that are currently managed by this EntityManager become detached."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"canpopulateentityname-entitynamet-property-string-boolean"},Object(r.b)("inlineCode",{parentName:"h4"},"canPopulate(entityName: EntityName<T>, property: string): boolean")),Object(r.b)("p",null,"Checks whether given property can be populated on the entity."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"populateentities-t--t-populate-p-where-filterqueryt-orderby-queryordermap-refresh-boolean-validate-boolean-promiseloadedt-p--loadedt-p"},Object(r.b)("inlineCode",{parentName:"h4"},"populate(entities: T | T[], populate: P, where?: FilterQuery<T>, orderBy?: QueryOrderMap, refresh?: boolean, validate?: boolean): Promise<Loaded<T, P> | Loaded<T, P>[]>")),Object(r.b)("p",null,"Populate existing entities. Supports nested (conditional) populating."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"forkclear-boolean-usecontext-boolean-dtypeof-entitymanagertype"},Object(r.b)("inlineCode",{parentName:"h4"},"fork(clear?: boolean, useContext?: boolean): D[typeof EntityManagerType]")),Object(r.b)("p",null,"Returns new EntityManager instance with its own identity map"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"@param clear do we want clear identity map? defaults to true\n@param useContext use request context? should be used only for top level request scope EM, defaults to false\n")),Object(r.b)("hr",null),Object(r.b)("h4",{id:"getunitofwork-unitofwork"},Object(r.b)("inlineCode",{parentName:"h4"},"getUnitOfWork(): UnitOfWork")),Object(r.b)("p",null,"Gets the UnitOfWork used by the EntityManager to coordinate operations."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"getentityfactory-entityfactory"},Object(r.b)("inlineCode",{parentName:"h4"},"getEntityFactory(): EntityFactory")),Object(r.b)("p",null,"Gets the EntityFactory used by the EntityManager."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"geteventmanager-eventmanager"},Object(r.b)("inlineCode",{parentName:"h4"},"getEventManager(): EventManager")),Object(r.b)("hr",null),Object(r.b)("h4",{id:"isintransaction-boolean"},Object(r.b)("inlineCode",{parentName:"h4"},"isInTransaction(): boolean")),Object(r.b)("p",null,"Checks whether this EntityManager is currently operating inside a database transaction."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"gettransactioncontextt-extends-transaction--transaction-t--undefined"},Object(r.b)("inlineCode",{parentName:"h4"},"getTransactionContext<T extends Transaction = Transaction>(): T | undefined")),Object(r.b)("p",null,"Gets the transaction context (driver dependent object used to make sure queries are executed on same connection)."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"getmetadata-metadatastorage"},Object(r.b)("inlineCode",{parentName:"h4"},"getMetadata(): MetadataStorage")),Object(r.b)("p",null,"Gets the MetadataStorage."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"getcomparator-entitycomparator"},Object(r.b)("inlineCode",{parentName:"h4"},"getComparator(): EntityComparator")),Object(r.b)("hr",null))}d.isMDXComponent=!0},1048:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=d(n),m=i,y=s["".concat(o,".").concat(m)]||s[m]||p[m]||r;return n?a.a.createElement(y,l(l({ref:t},c),{},{components:n})):a.a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);