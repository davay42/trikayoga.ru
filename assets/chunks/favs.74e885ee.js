import{u as se,h as S,i as G,j as F,k as ie,l as le,m as ue,n as ce,q as fe,s as U,v as I,x as T,y as pe,z as E,A as de,B as ve,C as me}from"./framework.f939aca5.js";function X(e){return le()?(ue(e),!0):!1}function j(e){return typeof e=="function"?e():se(e)}const ye=typeof window<"u",Y=()=>{};function ge(e,t){function r(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(o)})}return r}const Z=e=>e();function he(e=Z){const t=S(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...o)=>{t.value&&e(...o)};return{isActive:G(t),pause:r,resume:n,eventFilter:a}}function ee(...e){if(e.length!==1)return ce(...e);const t=e[0];return typeof t=="function"?G(fe(()=>({get:t,set:Y}))):S(t)}function _e(e,t=!0){U()?I(e):t?e():T(e)}function rt(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=ie(e),o=S(e);function l(i){if(arguments.length)return o.value=i,o.value;{const v=j(r);return o.value=o.value===v?j(n):v,o.value}}return a?l:[o,l]}var V=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,be=(e,t)=>{var r={};for(var n in e)we.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&V)for(var n of V(e))t.indexOf(n)<0&&Oe.call(e,n)&&(r[n]=e[n]);return r};function Pe(e,t,r={}){const n=r,{eventFilter:a=Z}=n,o=be(n,["eventFilter"]);return F(e,ge(a,t),o)}var Se=Object.defineProperty,$e=Object.defineProperties,Ee=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,je=(e,t)=>{for(var r in t||(t={}))te.call(t,r)&&R(e,r,t[r]);if(M)for(var r of M(t))re.call(t,r)&&R(e,r,t[r]);return e},Ae=(e,t)=>$e(e,Ee(t)),Ce=(e,t)=>{var r={};for(var n in e)te.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&M)for(var n of M(e))t.indexOf(n)<0&&re.call(e,n)&&(r[n]=e[n]);return r};function ke(e,t,r={}){const n=r,{eventFilter:a}=n,o=Ce(n,["eventFilter"]),{eventFilter:l,pause:i,resume:v,isActive:h}=he(a);return{stop:Pe(e,t,Ae(je({},o),{eventFilter:l})),pause:i,resume:v,isActive:h}}function ne(e){var t;const r=j(e);return(t=r==null?void 0:r.$el)!=null?t:r}const A=ye?window:void 0;function z(...e){let t,r,n,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,n,a]=e,t=A):[t,r,n,a]=e,!t)return Y;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],l=()=>{o.forEach(f=>f()),o.length=0},i=(f,p,_,g)=>(f.addEventListener(p,_,g),()=>f.removeEventListener(p,_,g)),v=F(()=>[ne(t),j(a)],([f,p])=>{l(),f&&o.push(...r.flatMap(_=>n.map(g=>i(f,_,g,p))))},{immediate:!0,flush:"post"}),h=()=>{v(),l()};return X(h),h}function De(){const e=S(!1);return U()&&I(()=>{e.value=!0}),e}function Le(e){const t=De();return E(()=>(t.value,!!e()))}function Ne(e,t={}){const{window:r=A}=t,n=Le(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=S(!1),l=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",i):a.removeListener(i))},i=()=>{n.value&&(l(),a=r.matchMedia(ee(e).value),o.value=!!(a!=null&&a.matches),a&&("addEventListener"in a?a.addEventListener("change",i):a.addListener(i)))};return de(i),X(()=>l()),o}const L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N="__vueuse_ssr_handlers__",Me=Fe();function Fe(){return N in L||(L[N]=L[N]||{}),L[N]}function ae(e,t){return Me[e]||t}function Ie(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Te=Object.defineProperty,x=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))Ve.call(t,r)&&J(e,r,t[r]);if(x)for(var r of x(t))Re.call(t,r)&&J(e,r,t[r]);return e};const ze={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},B="vueuse-storage";function oe(e,t,r,n={}){var a;const{flush:o="pre",deep:l=!0,listenToStorageChanges:i=!0,writeDefaults:v=!0,mergeDefaults:h=!1,shallow:f,window:p=A,eventFilter:_,onError:g=s=>{console.error(s)}}=n,m=(f?pe:S)(t);if(!r)try{r=ae("getDefaultStorage",()=>{var s;return(s=A)==null?void 0:s.localStorage})()}catch(s){g(s)}if(!r)return m;const y=j(t),C=Ie(y),b=(a=n.serializer)!=null?a:ze[C],{pause:k,resume:$}=ke(m,()=>c(m.value),{flush:o,deep:l,eventFilter:_});return p&&i&&(z(p,"storage",w),z(p,B,D)),w(),m;function c(s){try{if(s==null)r.removeItem(e);else{const u=b.write(s),d=r.getItem(e);d!==u&&(r.setItem(e,u),p&&p.dispatchEvent(new CustomEvent(B,{detail:{key:e,oldValue:d,newValue:u,storageArea:r}})))}}catch(u){g(u)}}function P(s){const u=s?s.newValue:r.getItem(e);if(u==null)return v&&y!==null&&r.setItem(e,b.write(y)),y;if(!s&&h){const d=b.read(u);return typeof h=="function"?h(d,y):C==="object"&&!Array.isArray(d)?W(W({},y),d):d}else return typeof u!="string"?u:b.read(u)}function D(s){w(s.detail)}function w(s){if(!(s&&s.storageArea!==r)){if(s&&s.key==null){m.value=y;return}if(!(s&&s.key!==e)){k();try{m.value=P(s)}catch(u){g(u)}finally{s?T($):$()}}}}}function xe(e){return Ne("(prefers-color-scheme: dark)",e)}var Je=Object.defineProperty,H=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?Je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,He=(e,t)=>{for(var r in t||(t={}))We.call(t,r)&&q(e,r,t[r]);if(H)for(var r of H(t))Be.call(t,r)&&q(e,r,t[r]);return e};function qe(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=A,storage:o,storageKey:l="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:v,emitAuto:h,disableTransition:f=!0}=e,p=He({auto:"",light:"light",dark:"dark"},e.modes||{}),_=xe({window:a}),g=E(()=>_.value?"dark":"light"),m=v||(l==null?ee(n):oe(l,n,o,{window:a,listenToStorageChanges:i})),y=E(()=>m.value==="auto"?g.value:m.value),C=ae("updateHTMLAttrs",(c,P,D)=>{const w=typeof c=="string"?a==null?void 0:a.document.querySelector(c):ne(c);if(!w)return;let s;if(f&&(s=a.document.createElement("style"),s.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),a.document.head.appendChild(s)),P==="class"){const u=D.split(/\s/g);Object.values(p).flatMap(d=>(d||"").split(/\s/g)).filter(Boolean).forEach(d=>{u.includes(d)?w.classList.add(d):w.classList.remove(d)})}else w.setAttribute(P,D);f&&(a.getComputedStyle(s).opacity,document.head.removeChild(s))});function b(c){var P;C(t,r,(P=p[c])!=null?P:c)}function k(c){e.onChanged?e.onChanged(c,b):b(c)}F(y,k,{flush:"post",immediate:!0}),_e(()=>k(y.value));const $=E({get(){return h?m.value:y.value},set(c){m.value=c}});try{return Object.assign($,{store:m,system:g,state:y})}catch{return $}}var Ke=Object.defineProperty,Qe=Object.defineProperties,Ge=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?Ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ye=(e,t)=>{for(var r in t||(t={}))Ue.call(t,r)&&Q(e,r,t[r]);if(K)for(var r of K(t))Xe.call(t,r)&&Q(e,r,t[r]);return e},Ze=(e,t)=>Qe(e,Ge(t));function nt(e={}){const{valueDark:t="dark",valueLight:r=""}=e,n=qe(Ze(Ye({},e),{onChanged:(o,l)=>{var i;e.onChanged?(i=e.onChanged)==null||i.call(e,o==="dark",l,o):l(o)},modes:{dark:t,light:r}}));return E({get(){return n.value==="dark"},set(o){const l=o?"dark":"light";n.system.value===l?n.value="auto":n.value=l}})}const O=oe("stars",{});function et(e){O.value[e]&&delete O.value[e]}function at(){const{frontmatter:e}=ve(),t=me();I(()=>{F([t,O.value],a=>{r()},{immediate:!0})});function r(){T(()=>{let a=document.location.hash,o=document.getElementById(a.slice(1));o&&o.scrollIntoView(),[...document.getElementsByClassName("num")].forEach(i=>{let v=t.path+"#"+i.id;O.value[v]?i.classList.add("fav"):i.classList.remove("fav"),i.addEventListener("click",n)})})}function n(a){let o=a.target.parentNode,l=o?o.innerHTML:"",i={title:e.value.title,description:e.value.description,stanza:a.target.innerText,link:t.path+"#"+a.target.id,content:l};O.value[i.link]?delete O.value[i.link]:O.value[i.link]=i}return{favs:O,mount:r,setFav:n,removeFav:et}}export{rt as a,oe as b,at as c,O as f,et as r,nt as u};
