!function(){"use strict";var e={913:function(){try{self["workbox:core:6.6.0"]&&_()}catch(e){}},550:function(){try{self["workbox:expiration:6.6.0"]&&_()}catch(e){}},977:function(){try{self["workbox:precaching:6.6.0"]&&_()}catch(e){}},80:function(){try{self["workbox:routing:6.6.0"]&&_()}catch(e){}},873:function(){try{self["workbox:strategies:6.6.0"]&&_()}catch(e){}}},t={};function s(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}},n=!0;try{e[a](i,i.exports,s),n=!1}finally{n&&delete t[a]}return i.exports}!function(){var e,t,a;let r,i,n,o,c,l;s(913);let h=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class u extends Error{constructor(e,t){super(h(e,t)),this.name=e,this.details=t}}let d=new Set,f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},p=e=>[f.prefix,e,f.suffix].filter(e=>e&&e.length>0).join("-"),g=e=>e||p(f.precache),w=e=>e||p(f.runtime);function m(e,t){let s=new URL(e);for(let e of t)s.searchParams.delete(e);return s.href}async function y(e,t,s,a){let r=m(t.url,s);if(t.url===r)return e.match(t,a);let i=Object.assign(Object.assign({},a),{ignoreSearch:!0});for(let n of(await e.keys(t,i)))if(r===m(n.url,s))return e.match(n,a)}function b(e){e.then(()=>{})}class x{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}async function E(){for(let e of d)await e()}let v=e=>new URL(String(e),location.href).href.replace(RegExp(`^${location.origin}`),"");function R(e){return new Promise(t=>setTimeout(t,e))}function C(e,t){let s=t();return e.waitUntil(s),s}async function T(e,t){let s=null;if(e.url&&(s=new URL(e.url).origin),s!==self.location.origin)throw new u("cross-origin-copy-response",{origin:s});let a=e.clone(),i={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},n=t?t(i):i,o=!function(){if(void 0===r){let e=new Response("");if("body"in e)try{new Response(e.body),r=!0}catch(e){r=!1}r=!1}return r}()?await a.blob():a.body;return new Response(o,n)}let k=(e,t)=>t.some(t=>e instanceof t),D=new WeakMap,L=new WeakMap,S=new WeakMap,U=new WeakMap,N=new WeakMap,P={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return L.get(e);if("objectStoreNames"===t)return e.objectStoreNames||S.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return A(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function A(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,s)=>{let a=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(A(e.result)),a()},i=()=>{s(e.error),a()};e.addEventListener("success",r),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&D.set(t,e)}).catch(()=>{}),N.set(t,e),t}(e);if(U.has(e))return U.get(e);let s="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(I(this),e),A(D.get(this))}:function(...e){return A(t.apply(I(this),e))}:function(e,...s){let a=t.call(I(this),e,...s);return S.set(a,e.sort?e.sort():[e]),A(a)}:(t instanceof IDBTransaction&&function(e){if(L.has(e))return;let t=new Promise((t,s)=>{let a=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),a()},i=()=>{s(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)});L.set(e,t)}(t),k(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,P):t;return s!==e&&(U.set(e,s),N.set(s,e)),s}let I=e=>N.get(e),M=["get","getKey","getAll","getAllKeys","count"],q=["put","add","delete","clear"],K=new Map;function O(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(K.get(t))return K.get(t);let s=t.replace(/FromIndex$/,""),a=t!==s,r=q.includes(s);if(!(s in(a?IDBIndex:IDBObjectStore).prototype)||!(r||M.includes(s)))return;let i=async function(e,...t){let i=this.transaction(e,r?"readwrite":"readonly"),n=i.store;return a&&(n=n.index(t.shift())),(await Promise.all([n[s](...t),r&&i.done]))[0]};return K.set(t,i),i}P={...l=P,get:(e,t,s)=>O(e,t)||l.get(e,t,s),has:(e,t)=>!!O(e,t)||l.has(e,t)},s(550);let W="cache-entries",j=e=>{let t=new URL(e,location.href);return t.hash="",t.href};class B{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){let t=e.createObjectStore(W,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){let s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",e=>t(e.oldVersion,e)),A(s).then(()=>void 0)}(this._cacheName)}async setTimestamp(e,t){let s={url:e=j(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},a=(await this.getDb()).transaction(W,"readwrite",{durability:"relaxed"});await a.store.put(s),await a.done}async getTimestamp(e){let t=await this.getDb(),s=await t.get(W,this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){let s=await this.getDb(),a=await s.transaction(W).store.index("timestamp").openCursor(null,"prev"),r=[],i=0;for(;a;){let s=a.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&i>=t?r.push(a.value):i++),a=await a.continue()}let n=[];for(let e of r)await s.delete(W,e.id),n.push(e.url);return n}_getId(e){return this._cacheName+"|"+j(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:a,blocking:r,terminated:i}={}){let n=indexedDB.open(e,1),o=A(n);return a&&n.addEventListener("upgradeneeded",e=>{a(A(n.result),e.oldVersion,e.newVersion,A(n.transaction),e)}),s&&n.addEventListener("blocked",e=>s(e.oldVersion,e.newVersion,e)),o.then(e=>{i&&e.addEventListener("close",()=>i()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}("workbox-expiration",0,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class H{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new B(e)}async expireEntries(){if(this._isRunning){this._rerunRequested=!0;return}this._isRunning=!0;let e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(let e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,b(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(!this._maxAgeSeconds)return!1;{let t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class F{constructor(e={}){if(this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:a})=>{if(!a)return null;let r=this._isResponseDateFresh(a),i=this._getCacheExpiration(s);b(i.expireEntries());let n=i.updateTimestamp(t.url);if(e)try{e.waitUntil(n)}catch(e){}return r?a:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{let s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError){var t;t=()=>this.deleteCacheAndMetadata(),d.add(t)}}_getCacheExpiration(e){if(e===w())throw new u("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new H(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;let t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;let t=new Date(e.headers.get("date")).getTime();return isNaN(t)?null:t}async deleteCacheAndMetadata(){for(let[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}function $(e){return"string"==typeof e?new Request(e):e}s(873);class G{constructor(e,t){for(let s of(this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new x,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map,this._plugins))this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){let{event:t}=this,s=$(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){let e=await t.preloadResponse;if(e)return e}let a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(let e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new u("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}let r=s.clone();try{let e;for(let a of(e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions),this.iterateCallbacks("fetchDidSucceed")))e=await a({event:t,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){let t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){let t;let s=$(e),{cacheName:a,matchOptions:r}=this._strategy,i=await this.getCacheKey(s,"read"),n=Object.assign(Object.assign({},r),{cacheName:a});for(let e of(t=await caches.match(i,n),this.iterateCallbacks("cachedResponseWillBeUsed")))t=await e({cacheName:a,matchOptions:r,cachedResponse:t,request:i,event:this.event})||void 0;return t}async cachePut(e,t){let s=$(e);await R(0);let a=await this.getCacheKey(s,"write");if(!t)throw new u("cache-put-with-no-response",{url:v(a.url)});let r=await this._ensureResponseSafeToCache(t);if(!r)return!1;let{cacheName:i,matchOptions:n}=this._strategy,o=await self.caches.open(i),c=this.hasCallback("cacheDidUpdate"),l=c?await y(o,a.clone(),["__WB_REVISION__"],n):null;try{await o.put(a,c?r.clone():r)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await E(),e}for(let e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:i,oldResponse:l,newResponse:r.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){let s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(let e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=$(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(let t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(let s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(let t of this._strategy.plugins)if("function"==typeof t[e]){let s=this._pluginStateMap.get(t),a=a=>{let r=Object.assign(Object.assign({},a),{state:s});return t[e](r)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(let e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return!s&&t&&200!==t.status&&(t=void 0),t}}class Q{constructor(e={}){this.cacheName=w(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){let[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});let t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a=new G(this,{event:t,request:s,params:"params"in e?e.params:void 0}),r=this._getResponse(a,s,t),i=this._awaitComplete(r,a,s,t);return[r,i]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(!(a=await this._handle(t,e))||"error"===a.type)throw new u("no-response",{url:t.url})}catch(r){if(r instanceof Error){for(let i of e.iterateCallbacks("handlerDidError"))if(a=await i({error:r,event:s,request:t}))break}if(a);else throw r}for(let r of e.iterateCallbacks("handlerWillRespond"))a=await r({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let r,i;try{r=await e}catch(e){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:r}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:r,error:i}),t.destroy(),i)throw i}}class V extends Q{async _handle(e,t){let s,a=await t.cacheMatch(e);if(!a)try{a=await t.fetchAndCachePut(e)}catch(e){e instanceof Error&&(s=e)}if(!a)throw new u("no-response",{url:e.url,error:s});return a}}let J={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class z extends Q{constructor(e={}){super(e),this.plugins.some(e=>"cacheWillUpdate"in e)||this.plugins.unshift(J),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let s;let a=[],r=[];if(this._networkTimeoutSeconds){let{id:i,promise:n}=this._getTimeoutPromise({request:e,logs:a,handler:t});s=i,r.push(n)}let i=this._getNetworkPromise({timeoutId:s,request:e,logs:a,handler:t});r.push(i);let n=await t.waitUntil((async()=>await t.waitUntil(Promise.race(r))||await i)());if(!n)throw new u("no-response",{url:e.url});return n}_getTimeoutPromise({request:e,logs:t,handler:s}){let a;return{promise:new Promise(t=>{a=setTimeout(async()=>{t(await s.cacheMatch(e))},1e3*this._networkTimeoutSeconds)}),id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:a}){let r,i;try{i=await a.fetchAndCachePut(t)}catch(e){e instanceof Error&&(r=e)}return e&&clearTimeout(e),(r||!i)&&(i=await a.cacheMatch(t)),i}}class X extends Q{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let s,a;try{let a=[t.fetch(e)];if(this._networkTimeoutSeconds){let e=R(1e3*this._networkTimeoutSeconds);a.push(e)}if(!(s=await Promise.race(a)))throw Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(e){e instanceof Error&&(a=e)}if(!s)throw new u("no-response",{url:e.url,error:a});return s}}class Y extends Q{constructor(e={}){super(e),this.plugins.some(e=>"cacheWillUpdate"in e)||this.plugins.unshift(J)}async _handle(e,t){let s;let a=t.fetchAndCachePut(e).catch(()=>{});t.waitUntil(a);let r=await t.cacheMatch(e);if(r);else try{r=await a}catch(e){e instanceof Error&&(s=e)}if(!r)throw new u("no-response",{url:e.url,error:s});return r}}s(80);let Z=e=>e&&"object"==typeof e?e:{handle:e};class ee{constructor(e,t,s="GET"){this.handler=Z(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=Z(e)}}class et extends ee{constructor(e,t,s){super(({url:t})=>{let s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class es{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{let{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){let{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(t=>{"string"==typeof t&&(t=[t]);let s=new Request(...t);return this.handleRequest({request:s,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){let s;let a=new URL(e.url,location.href);if(!a.protocol.startsWith("http"))return;let r=a.origin===location.origin,{params:i,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:a}),o=n&&n.handler,c=e.method;if(!o&&this._defaultHandlerMap.has(c)&&(o=this._defaultHandlerMap.get(c)),!o)return;try{s=o.handle({url:a,request:e,event:t,params:i})}catch(e){s=Promise.reject(e)}let l=n&&n.catchHandler;return s instanceof Promise&&(this._catchHandler||l)&&(s=s.catch(async s=>{if(l)try{return await l.handle({url:a,request:e,event:t,params:i})}catch(e){e instanceof Error&&(s=e)}if(this._catchHandler)return this._catchHandler.handle({url:a,request:e,event:t});throw s})),s}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){for(let r of this._routes.get(s.method)||[]){let i;let n=r.match({url:e,sameOrigin:t,request:s,event:a});if(n)return Array.isArray(i=n)&&0===i.length?i=void 0:n.constructor===Object&&0===Object.keys(n).length?i=void 0:"boolean"==typeof n&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,Z(e))}setCatchHandler(e){this._catchHandler=Z(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new u("unregister-route-but-not-found-with-method",{method:e.method});let t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new u("unregister-route-route-not-registered")}}let ea=()=>(o||((o=new es).addFetchListener(),o.addCacheListener()),o);function er(e,t,s){let a;if("string"==typeof e){let r=new URL(e,location.href);a=new ee(({url:e})=>e.href===r.href,t,s)}else if(e instanceof RegExp)a=new et(e,t,s);else if("function"==typeof e)a=new ee(e,t,s);else if(e instanceof ee)a=e;else throw new u("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return ea().registerRoute(a),a}s(977);class ei{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){let e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class en{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{let s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}class eo extends Q{constructor(e={}){e.cacheName=g(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(eo.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;let a=t.params||{};if(this._fallbackToNetwork){let r=a.integrity,i=e.integrity,n=!i||i===r;s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||r:void 0})),r&&n&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}else throw new u("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();let s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new u("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(let[s,a]of this.plugins.entries())a!==eo.copyRedirectedCacheableResponsesPlugin&&(a===eo.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(eo.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}eo.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},eo.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await T(e):e};class ec{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new eo({cacheName:g(e),plugins:[...t,new en({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){let t=[];for(let s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);let{cacheKey:e,url:a}=function(e){if(!e)throw new u("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){let t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}let{revision:t,url:s}=e;if(!s)throw new u("add-to-cache-list-unexpected-type",{entry:e});if(!t){let e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}let a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:r.href}}(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new u("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new u("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0&&console.warn(`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`)}}install(e){return C(e,async()=>{let t=new ei;for(let[s,a]of(this.strategy.plugins.push(t),this._urlsToCacheKeys)){let t=this._cacheKeysToIntegrities.get(a),r=this._urlsToCacheModes.get(s),i=new Request(s,{integrity:t,cache:r,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:a},request:i,event:e}))}let{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}})}activate(e){return C(e,async()=>{let e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(let r of t)s.has(r.url)||(await e.delete(r),a.push(r.url));return{deletedURLs:a}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){let t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){let t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){let t=this.getCacheKeyForURL(e);if(!t)throw new u("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let el=()=>(c||(c=new ec),c);class eh extends ee{constructor(e,t){super(({request:s})=>{let a=e.getURLsToCacheKeys();for(let r of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:r}={}){let i=new URL(e,location.href);i.hash="",yield i.href;let n=function(e,t=[]){for(let s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(i,t);if(yield n.href,s&&n.pathname.endsWith("/")){let e=new URL(n.href);e.pathname+=s,yield e.href}if(a){let e=new URL(n.href);e.pathname+=".html",yield e.href}if(r)for(let e of r({url:i}))yield e.href}(s.url,t)){let t=a.get(r);if(t){let s=e.getIntegrityForCacheKey(t);return{cacheKey:t,integrity:s}}}},e.strategy)}}let eu="-precache-",ed=async(e,t=eu)=>{let s=(await self.caches.keys()).filter(s=>s.includes(t)&&s.includes(self.registration.scope)&&s!==e);return await Promise.all(s.map(e=>self.caches.delete(e))),s};function ef(e){return el().matchPrecache(e)}self.skipWaiting(),self.addEventListener("activate",()=>self.clients.claim());let ep=[{'revision':'68167c49d4631f359f902b825c98b500','url':'/_next/app-build-manifest.json'},{'revision':'2ec694eb52ae4f523f265a46bae4d768','url':'/_next/static/9rM1FvdzWRseygvpOKkMD/_buildManifest.js'},{'revision':'b6652df95db52feb4daf4eca35380933','url':'/_next/static/9rM1FvdzWRseygvpOKkMD/_ssgManifest.js'},{'revision':'9rM1FvdzWRseygvpOKkMD','url':'/_next/static/chunks/173-bf14e6a25d4a457e.js'},{'revision':'9rM1FvdzWRseygvpOKkMD','url':'/_next/static/chunks/23-651a0b5fb4c2373b.js'},{'revision':'9rM1FvdzWRseygvpOKkMD','url':'/_next/static/chunks/app/_not-found/page-27fb495d875210fd.js'},{'revision':'9rM1FvdzWRseygvpOKkMD','url':'/_next/static/chunks/app/layout-c6c666d7e37c177e.js'},{'revision':'9rM1FvdzWRseygvpOKkMD','url':'/_next/static/chunks/app/page-b980a5cd2ec2c1ad.js'},{'revision':'9rM1FvdzWRseygvpOKkMD','url':'/_next/static/chunks/fd9d1056-6184565b3c21c232.js'},{'revision':'9rM1FvdzWRseygvpOKkMD','url':'/_next/static/chunks/framework-f66176bb897dc684.js'},{'revision':'9rM1FvdzWRseygvpOKkMD','url':'/_next/static/chunks/main-app-b18c7a4c40f215f7.js'},{'revision':'9rM1FvdzWRseygvpOKkMD','url':'/_next/static/chunks/main-fb26ef8530fbffaf.js'},{'revision':'9rM1FvdzWRseygvpOKkMD','url':'/_next/static/chunks/pages/_app-6a626577ffa902a4.js'},{'revision':'9rM1FvdzWRseygvpOKkMD','url':'/_next/static/chunks/pages/_error-1be831200e60c5c0.js'},{'revision':'79330112775102f91e1010318bae2bd3','url':'/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js'},{'revision':'9rM1FvdzWRseygvpOKkMD','url':'/_next/static/chunks/webpack-be8c90fe7e0eb3f5.js'},{'revision':'aebed55157b5fefd','url':'/_next/static/css/aebed55157b5fefd.css'},{'revision':'befd9c0fdfa3d8a645d5f95717ed6420','url':'/_next/static/media/26a46d62cd723877-s.woff2'},{'revision':'43828e14271c77b87e3ed582dbff9f74','url':'/_next/static/media/55c55f0601d81cf3-s.woff2'},{'revision':'f0b86e7c24f455280b8df606b89af891','url':'/_next/static/media/581909926a08bbc8-s.woff2'},{'revision':'621a07228c8ccbfd647918f1021b4868','url':'/_next/static/media/6d93bde91c0c2823-s.woff2'},{'revision':'e360c61c5bd8d90639fd4503c829c2dc','url':'/_next/static/media/97e0cb1ae144a2a9-s.woff2'},{'revision':'d4fe31e6a2aebc06b8d6e558c9141119','url':'/_next/static/media/a34f9d1faa5f3315-s.p.woff2'},{'revision':'d54db44de5ccb18886ece2fda72bdfe0','url':'/_next/static/media/df0a9ae256c0569c-s.woff2'},{'revision':'76cfac0512673f292b7ab03447e9d3b2','url':'/icons/icon-192x192.png'},{'revision':'eaa6a8230a2708c7a9552d94ef9e5664','url':'/icons/icon-512x512.png'},{'revision':'0cbae2cc3c1c7ac5059252b11daf0a01','url':'/manifest.json'},{'revision':'8e061864f388b47f33a1c3780831193e','url':'/next.svg'},{'revision':'628817e666b791ba2e63d845d98f3de3','url':'/service-worker.js'},{'revision':'2de84617ccba6fd0e7e86262fafcfba6','url':'/sw.js'},{'revision':'61c6b19abff40ea7acd577be818f3976','url':'/vercel.svg'}];ep.push({url:"/fallback",revision:"1234567890"}),el().precache(ep),e=void 0,er(new eh(el(),e)),self.addEventListener("activate",e=>{let t=g();e.waitUntil(ed(t).then(e=>{}))}),er("/",new z({cacheName:"start-url",plugins:[new F({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),er(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new V({cacheName:"google-fonts",plugins:[new F({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),er(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new Y({cacheName:"static-font-assets",plugins:[new F({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),er(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new X({cacheName:"static-image-assets",plugins:[new F({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),er(/\.(?:js)$/i,new Y({cacheName:"static-js-assets",plugins:[new F({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),er(/\.(?:css|less)$/i,new Y({cacheName:"static-style-assets",plugins:[new F({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),er(/\.(?:json|xml|csv)$/i,new z({cacheName:"static-data-assets",plugins:[new F({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),er(/\/api\/.*$/i,new z({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new F({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),er(/.*/i,new z({cacheName:"others",networkTimeoutSeconds:10,plugins:[new F({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),t=new Y,ea().setDefaultHandler(t),a=e=>{let{event:t}=e;switch(t.request.destination){case"document":return ef("/fallback");case"image":return ef("/static/images/fallback.png");default:return Response.error()}},ea().setCatchHandler(a)}()}();