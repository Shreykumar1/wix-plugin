var W=Object.defineProperty,q=(e,t,i)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,j=(e,t)=>()=>(e&&(t=e(e=0)),t),P=(e,t)=>{for(var i in t)W(e,i,{get:t[i],enumerable:!0})},b=(e,t,i)=>q(e,typeof t!="symbol"?t+"":t,i),w={},S={};P(S,{EventDefinition:()=>g,SERVICE_PLUGIN_ERROR_TYPE:()=>T,ServicePluginDefinition:()=>R});function g(e,t=!1,i=r=>r){return()=>({__type:"event-definition",type:e,isDomainEvent:t,transformations:i})}function R(e,t){return{__type:"service-plugin-definition",componentType:e,methods:t}}var T,$=j(()=>{T="wix_spi_error"});$();var J=e=>{switch(e){case"get":case"GET":return"GET";case"post":case"POST":return"POST";case"put":case"PUT":return"PUT";case"delete":case"DELETE":return"DELETE";case"patch":case"PATCH":return"PATCH";case"head":case"HEAD":return"HEAD";case"options":case"OPTIONS":return"OPTIONS";default:throw new Error(`Unknown method: ${e}`)}},M=e=>t=>async i=>{let r,n=a=>{if(r=e(i)(a),r.url===void 0)throw new Error("Url was not successfully created for this request, please reach out to support channels for assistance.");let{method:d,url:l,params:p}=r;return{...r,method:J(d),url:l,data:r.data,params:p}};try{let a=await t.request(n);if(r===void 0)throw new Error("Request options were not created for this request, please reach out to support channels for assistance.");let d=Array.isArray(r.transformResponse)?r.transformResponse:[r.transformResponse],l=a.data;return d.forEach(p=>{p&&(l=p(a.data,a.headers))}),l}catch(a){throw typeof a=="object"&&a!==null&&"response"in a&&typeof a.response=="object"&&a.response!==null&&"data"in a.response?a.response.data:a}},H=e=>e.__isAmbassador?!0:!!e().__isAmbassador,O="__metadata",m="www.wixapis.com",D=class extends Error{constructor(e,t){super(e),b(this,"message"),b(this,"response"),this.message=e,this.response=t}async details(){let e=await this.response.json();return I(this.response.status,e==null?void 0:e.message,e==null?void 0:e.details,{requestId:this.response.headers.get("X-Wix-Request-Id"),details:e})}},I=(e,t,i,r)=>({details:{...!(i!=null&&i.validationError)&&{applicationError:{description:t,code:e,data:r}},...i},message:t}),k=e=>e!=null&&e.method&&["post","put","patch"].includes(e.method.toLocaleLowerCase())&&e.body?{"Content-Type":"application/json"}:{},U=e=>e&&typeof e=="object"&&!Array.isArray(e),L=e=>e.__type==="host";function N(e,t){return e.create(t)}var G="x-wix-bi-gateway";function z(e,t){return{[G]:K({environment:"js-sdk","package-name":e.packageName??(t==null?void 0:t.PACKAGE_NAME),"method-fqn":e.methodFqn,entity:e.entityFqdn})}}function K(e){return Object.entries(e).filter(([t,i])=>!!i).map(([t,i])=>`${t}=${i}`).join(",")}function ee(e,t){return{...e,...Object.fromEntries(t.map(i=>[i,(...r)=>{let n=F();if(!n)throw new Error("Wix context is not available. Make sure to initialize the Wix context before using SDK modules");return n.initWixModules(e)[i].apply(void 0,r)}]))}}function F(){let e=typeof $wixContext<"u"&&$wixContext.initWixModules?$wixContext.initWixModules:typeof globalThis.__wix_context__<"u"&&globalThis.__wix_context__.initWixModules?globalThis.__wix_context__.initWixModules:void 0;if(e)return{initWixModules(r,n){return _(()=>e(r,n))},fetchWithAuth(){throw new Error("fetchWithAuth is not available in this context")},graphql(){throw new Error("graphql is not available in this context")}};let t=typeof $wixContext<"u"?$wixContext.client:typeof w.client<"u"?w.client:typeof globalThis.__wix_context__<"u"?globalThis.__wix_context__.client:void 0,i=typeof $wixContext<"u"?$wixContext.elevatedClient:typeof w.elevatedClient<"u"?w.elevatedClient:typeof globalThis.__wix_context__<"u"?globalThis.__wix_context__.elevatedClient:void 0;if(!(!t&&!i))return{initWixModules(r,n){if(n){if(!i)throw new Error("An elevated client is required to use elevated modules. Make sure to initialize the Wix context with an elevated client before using elevated SDK modules");return _(()=>i.use(r))}if(!t)throw new Error("Wix context is not available. Make sure to initialize the Wix context before using SDK modules");return _(()=>t.use(r))},fetchWithAuth:(r,n)=>{if(!t)throw new Error("Wix context is not available. Make sure to initialize the Wix context before using SDK modules");return t.fetchWithAuth(r,n)},async graphql(r,n,a){if(!t)throw new Error("Wix context is not available. Make sure to initialize the Wix context before using SDK modules");return t.graphql(r,n,a)}}}function _(e){let t=globalThis.__wix_context__,i={client:w.client,elevatedClient:w.elevatedClient},r;globalThis.__wix_context__=void 0,w.client=void 0,w.elevatedClient=void 0,typeof $wixContext<"u"&&(r={client:$wixContext==null?void 0:$wixContext.client,elevatedClient:$wixContext==null?void 0:$wixContext.elevatedClient},delete $wixContext.client,delete $wixContext.elevatedClient);try{return e()}finally{globalThis.__wix_context__=t,w.client=i.client,w.elevatedClient=i.elevatedClient,typeof $wixContext<"u"&&($wixContext.client=r.client,$wixContext.elevatedClient=r.elevatedClient)}}function V(e,t,i,r,n,a){return _(()=>e({request:async d=>{var h,s;let l=d({host:(a==null?void 0:a.HTTPHost)||m}),p=l;p.method==="GET"&&((h=p.fallback)!=null&&h.length)&&p.params.toString().length>4e3&&(p=l.fallback[0]);let f=`https://${(a==null?void 0:a.HTTPHost)??m}${p.url}`;p.params&&p.params.toString()&&(f+=`?${p.params.toString()}`);try{let o=z(l,t),u=await i(f,{method:p.method,...p.data&&{body:JSON.stringify(p.data)},headers:{...o}});if(u.status!==200){let c=null;try{c=await u.json()}catch{}throw B(u.status,c==null?void 0:c.message,c==null?void 0:c.details,{requestId:u.headers.get("X-Wix-Request-Id"),details:c})}return{data:await u.json(),headers:u.headers,status:u.status,statusText:u.statusText}}catch(o){throw(s=o.message)!=null&&s.includes("fetch is not defined")&&console.error("Node.js v18+ is required"),o}},fetchWithAuth:i,wixAPIFetch:r,getActiveToken:n}))}var B=(e,t,i,r)=>({response:{data:{details:{...!(i!=null&&i.validationError)&&{applicationError:{description:t,code:e,data:r}},...i},message:t},status:e}});$();function A(){return{emit(e,...t){for(let i=0,r=this.events[e]||[],n=r.length;i<n;i++)r[i](...t)},events:{},on(e,t){var i;return((i=this.events)[e]||(i[e]=[])).push(t),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(n=>t!==n)}}}}var X=e=>e.__type==="event-definition";function C(e,t,i,r){let n;if(e.isDomainEvent){let d=i,{deletedEvent:l,actionEvent:p,createdEvent:f,updatedEvent:h,...s}=d,o={...r,...s};l?l!=null&&l.deletedEntity?n={entity:l==null?void 0:l.deletedEntity,metadata:o}:n={metadata:o}:p?n={data:p.body,metadata:o}:n={entity:(f==null?void 0:f.entity)??(h==null?void 0:h.currentEntity),metadata:o}}else n={data:i,metadata:r};let a=e.transformations??(d=>d);return t(a(n))}function Q(e){let t=new Map,i=A(),r={...i,getRegisteredEvents:()=>t,async process(n,a={expectedEvents:[]}){let{eventType:d,identity:l,instanceId:p,payload:f}=await this.parseJWT(n),h=[...a.expectedEvents,...Array.from(t.keys()).map(o=>({type:o}))];if(h.length>0&&!h.some(({type:o})=>o===d))throw new Error(`Unexpected event type: ${d}. Expected one of: ${h.map(o=>o.type).join(", ")}`);let s=t.get(d)??[];return await Promise.all(s.map(({eventDefinition:o,handler:u})=>C(o,u,f,{instanceId:p,identity:l}))),{instanceId:p,eventType:d,payload:f,identity:l}},async processRequest(n,a){let d=await n.text();return this.process(d,a)},async parseJWT(n){if(!e.decodeJWT)throw new Error("decodeJWT is not supported by the authentication strategy");let{decoded:a,valid:d}=await e.decodeJWT(n);if(!d)throw new Error("JWT is not valid");if(typeof a.data!="string")throw new Error(`Unexpected type of JWT data: expected string, got ${typeof a.data}`);let l=JSON.parse(a.data),p=l.eventType,f=l.instanceId,h=l.identity?JSON.parse(l.identity):void 0,s=JSON.parse(l.data);return{instanceId:f,eventType:p,payload:s,identity:h}},async parseRequest(n){let a=await n.text();return this.parseJWT(a)},async executeHandlers(n){let a=Array.from(t.keys()).map(l=>({type:l}));if(a.length>0&&!a.some(({type:l})=>l===n.eventType))throw new Error(`Unexpected event type: ${n.eventType}. Expected one of: ${a.map(l=>l.type).join(", ")}`);let d=t.get(n.eventType)??[];await Promise.all(d.map(({eventDefinition:l,handler:p})=>C(l,p,n.payload,{instanceId:n.instanceId,identity:n.identity})))},apps:{AppInstalled:g("AppInstalled")(),AppRemoved:g("AppRemoved")()}};return{initModule(n){return a=>{let d=t.get(n.type)??[];d.push({eventDefinition:n,handler:a}),t.set(n.type,d),i.emit("registered",n)}},client:r}}var Y=e=>e.__type==="service-plugin-definition";function Z(e){let t=new Map,i=A(),r={...i,getRegisteredServicePlugins:()=>t,async parseJWT(n){if(!e.decodeJWT)throw new Error("decodeJWT is not supported by the authentication strategy");let{decoded:a,valid:d}=await e.decodeJWT(n,!0);if(!d)throw new Error("JWT is not valid");if(typeof a.data!="object"||a.data===null||!("metadata"in a.data)||typeof a.data.metadata!="object"||a.data.metadata===null||!("appExtensionType"in a.data.metadata)||typeof a.data.metadata.appExtensionType!="string")throw new Error("Unexpected JWT data: expected object with metadata.appExtensionType string");return a.data},async process(n){let a=await this.parseJWT(n.body);return this.executeHandler(a,n.url)},async parseRequest(n){let a=await n.text();return this.parseJWT(a)},async processRequest(n){let a=n.url,d=await n.text(),l=await this.process({url:a,body:d});return Response.json(l)},async executeHandler(n,a){let d=n.metadata.appExtensionType.toLowerCase(),l=t.get(d)??[];if(l.length===0)throw new Error(`No service plugin implementations found for component type ${d}`);if(l.length>1)throw new Error(`Multiple service plugin implementations found for component type ${d}. This is currently not supported`);let{implementation:p,servicePluginDefinition:f}=l[0],h=f.methods.find(o=>a.endsWith(o.primaryHttpMappingPath));if(!h)throw new Error("Unexpect request: request url did not match any method: "+a);let s=p[h.name];if(!s)throw new Error(`Got request for service plugin method ${h.name} but no implementation was provided. Available methods: ${Object.keys(p).join(", ")}`);return h.transformations.toREST(await s(h.transformations.fromREST(n)))}};return{initModule(n){return a=>{let d=t.get(n.componentType.toLowerCase())??[];d.push({servicePluginDefinition:n,implementation:a}),t.set(n.componentType.toLowerCase(),d),i.emit("registered",n)}},client:r}}function te(e){let t=e.headers||{Authorization:""},i=e.auth||{getAuthHeaders:s=>Promise.resolve({headers:{}})},r=i.getAuthHeaders.bind(void 0,e.host);i.getAuthHeaders=r;let{client:n,initModule:a}=Z(i),{client:d,initModule:l}=Q(i),p=async(s,o)=>{var y,x;let u=await r(),c=k(o);return fetch(s,{...o,headers:{...c,...t,...u==null?void 0:u.headers,...o==null?void 0:o.headers,...(x=(y=e.host)==null?void 0:y.essentials)==null?void 0:x.passThroughHeaders}})},f=(s,o)=>{var u;if(X(s))return l(s);if(Y(s))return a(s);if(L(s)&&e.host)return N(s,e.host);if(typeof s=="function"){if("__type"in s&&s.__type===T)return s;let c=((u=e.host)==null?void 0:u.apiBaseUrl)??m;return V(_(()=>H(s))?M(s):s,o??{},p,(y,x)=>{let v=new URL(y,`https://${c}`);return v.host=c,v.protocol="https",p(v.toString(),x)},i.getActiveToken,{HTTPHost:c})}else return U(s)?Object.fromEntries(Object.entries(s).map(([c,y])=>[c,f(y,s[O])])):s},h=s=>{for(let o in s)t[o]=s[o]};return{...e.modules?f(e.modules):{},auth:i,setHeaders:h,use:f,enableContext(s,o={elevated:!1}){s==="global"?globalThis.__wix_context__!=null?o.elevated?globalThis.__wix_context__.elevatedClient=this:globalThis.__wix_context__.client=this:o.elevated?globalThis.__wix_context__={elevatedClient:this}:globalThis.__wix_context__={client:this}:o.elevated?w.elevatedClient=this:w.client=this},fetch:(s,o)=>{var y;let u=((y=e.host)==null?void 0:y.apiBaseUrl)??m,c=new URL(s,`https://${u}`);return c.host=u,c.protocol="https",p(c.toString(),o)},fetchWithAuth:async(s,o)=>{if(typeof s=="string"||s instanceof URL)return fetch(s,{...o,headers:{...o==null?void 0:o.headers,...(await r()).headers}});for(let[u,c]of Object.entries((await r()).headers))s.headers.set(u,c);return fetch(s,o)},async graphql(s,o,u={apiVersion:"alpha"}){var E;let c=((E=e==null?void 0:e.host)==null?void 0:E.apiBaseUrl)??m,y=await p(`https://${c}/graphql/${u.apiVersion}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:s,variables:o})});if(y.status!==200)throw new D(`GraphQL request failed with status ${y.status}`,y);let{data:x,errors:v}=await y.json();return{data:x??{},errors:v}},webhooks:d,servicePlugins:n}}export{te as $,ee as a,w};
//# sourceMappingURL=chunk-RVHPVWYH-DIandYsq.js.map