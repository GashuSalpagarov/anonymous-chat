(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return S})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return U})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return A})),n.d(t,"k",(function(){return g})),n.d(t,"l",(function(){return W})),n.d(t,"m",(function(){return d})),n.d(t,"n",(function(){return M})),n.d(t,"o",(function(){return p})),n.d(t,"p",(function(){return G})),n.d(t,"q",(function(){return X})),n.d(t,"r",(function(){return R})),n.d(t,"s",(function(){return y})),n.d(t,"t",(function(){return F})),n.d(t,"u",(function(){return C})),n.d(t,"v",(function(){return b})),n.d(t,"w",(function(){return w})),n.d(t,"x",(function(){return v})),n.d(t,"y",(function(){return P})),n.d(t,"z",(function(){return I})),n.d(t,"A",(function(){return L})),n.d(t,"B",(function(){return B})),n.d(t,"C",(function(){return D})),n.d(t,"D",(function(){return J})),n.d(t,"E",(function(){return Y})),n.d(t,"F",(function(){return x})),n.d(t,"G",(function(){return $})),n.d(t,"H",(function(){return K})),n.d(t,"I",(function(){return Q})),n.d(t,"J",(function(){return O}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const l=i<e.length,u=l?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==u)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==u){const e=c<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},l=function(e){const t=o(e);return c.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&f(n)&&(e[n]=p(e[n],t[n]));return e}function f(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function b(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function y(){return"object"===typeof self&&self.self===self}function v(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function C(){return"object"===typeof indexedDB}function O(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class j extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=E,Object.setPrototypeOf(this,j.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?k(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new j(r,o,n);return a}}function k(e,t){return e.replace(T,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e){return JSON.parse(e)}function x(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=I(h(s[0])||""),n=I(h(s[1])||""),i=s[2],r=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:r,signature:i}},P=function(e){const t=N(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},R=function(e){const t=N(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function F(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function M(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(q(n)&&q(s)){if(!M(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function q(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class U{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=c^o&(a^c),i=1518500249):(r=o^a^c,i=1859775393):u<60?(r=o&a|c&(o|a),i=2400959708):(r=o^a^c,i=3395469782);const e=(s<<5|s>>>27)+r+l+i+n[u]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;while(r<t){if(0===s)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else while(r<t)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function W(e,t){const n=new V(e,t);return n.subscribe.bind(n)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=H(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function H(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(e,t,n,r){let i;if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i){const t=e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".";throw new Error(t)}};function G(e,t){return`${e} failed: ${t} argument `}function K(e,t,n,r){if((!r||n)&&"function"!==typeof n)throw new Error(G(e,t)+"must be a valid function.")}function Q(e,t,n,r){if((!r||n)&&("object"!==typeof n||null===n))throw new Error(G(e,t)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s>=55296&&s<=56319){const t=s-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},J=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},2979:function(e,t,n){"use strict";var r=n("7ded"),i=n("22e5"),s=n("51b0"),o=n("1fd5"),a=n("e691");const c="@firebase/database-compat",l="0.2.3",u=new a["b"]("@firebase/database-compat"),h=function(e){const t="FIREBASE WARNING: "+e;u.warn(t)},d=function(e,t,n,r){if((!r||void 0!==n)&&"boolean"!==typeof n)throw new Error(Object(o["p"])(e,t)+"must be a boolean.")},p=function(e,t,n){if(!n||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Object(o["p"])(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class f{constructor(e){this._delegate=e}cancel(e){Object(o["G"])("OnDisconnect.cancel",0,1,arguments.length),Object(o["H"])("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),t=>e(t)),t}remove(e){Object(o["G"])("OnDisconnect.remove",0,1,arguments.length),Object(o["H"])("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),t=>e(t)),t}set(e,t){Object(o["G"])("OnDisconnect.set",1,2,arguments.length),Object(o["H"])("OnDisconnect.set","onComplete",t,!0);const n=this._delegate.set(e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){Object(o["G"])("OnDisconnect.setWithPriority",2,3,arguments.length),Object(o["H"])("OnDisconnect.setWithPriority","onComplete",n,!0);const r=this._delegate.setWithPriority(e,t);return n&&r.then(()=>n(null),e=>n(e)),r}update(e,t){if(Object(o["G"])("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,h("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(o["H"])("OnDisconnect.update","onComplete",t,!0);const n=this._delegate.update(e);return t&&n.then(()=>t(null),e=>t(e)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return Object(o["G"])("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e,t){this._database=e,this._delegate=t}val(){return Object(o["G"])("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return Object(o["G"])("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return Object(o["G"])("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return Object(o["G"])("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return Object(o["G"])("DataSnapshot.child",0,1,arguments.length),e=String(e),Object(s["g"])("DataSnapshot.child","path",e,!1),new g(this._database,this._delegate.child(e))}hasChild(e){return Object(o["G"])("DataSnapshot.hasChild",1,1,arguments.length),Object(s["g"])("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return Object(o["G"])("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return Object(o["G"])("DataSnapshot.forEach",1,1,arguments.length),Object(o["H"])("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new g(this._database,t)))}hasChildren(){return Object(o["G"])("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return Object(o["G"])("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return Object(o["G"])("DataSnapshot.ref",0,0,arguments.length),new b(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class m{constructor(e,t){this.database=e,this._delegate=t}on(e,t,n,r){var i;Object(o["G"])("Query.on",2,4,arguments.length),Object(o["H"])("Query.on","callback",t,!1);const a=m.getCancelAndContextArgs_("Query.on",n,r),c=(e,n)=>{t.call(a.context,new g(this.database,e),n)};c.userCallback=t,c.context=a.context;const l=null===(i=a.cancel)||void 0===i?void 0:i.bind(a.context);switch(e){case"value":return Object(s["B"])(this._delegate,c,l),t;case"child_added":return Object(s["x"])(this._delegate,c,l),t;case"child_removed":return Object(s["A"])(this._delegate,c,l),t;case"child_changed":return Object(s["y"])(this._delegate,c,l),t;case"child_moved":return Object(s["z"])(this._delegate,c,l),t;default:throw new Error(Object(o["p"])("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,n){if(Object(o["G"])("Query.off",0,3,arguments.length),p("Query.off",e,!0),Object(o["H"])("Query.off","callback",t,!0),Object(o["I"])("Query.off","context",n,!0),t){const r=()=>{};r.userCallback=t,r.context=n,Object(s["w"])(this._delegate,e,r)}else Object(s["w"])(this._delegate,e)}get(){return Object(s["q"])(this._delegate).then(e=>new g(this.database,e))}once(e,t,n,r){Object(o["G"])("Query.once",1,4,arguments.length),Object(o["H"])("Query.once","callback",t,!0);const i=m.getCancelAndContextArgs_("Query.once",n,r),a=new o["a"],c=(e,n)=>{const r=new g(this.database,e);t&&t.call(i.context,r,n),a.resolve(r)};c.userCallback=t,c.context=i.context;const l=e=>{i.cancel&&i.cancel.call(i.context,e),a.reject(e)};switch(e){case"value":Object(s["B"])(this._delegate,c,l,{onlyOnce:!0});break;case"child_added":Object(s["x"])(this._delegate,c,l,{onlyOnce:!0});break;case"child_removed":Object(s["A"])(this._delegate,c,l,{onlyOnce:!0});break;case"child_changed":Object(s["y"])(this._delegate,c,l,{onlyOnce:!0});break;case"child_moved":Object(s["z"])(this._delegate,c,l,{onlyOnce:!0});break;default:throw new Error(Object(o["p"])("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return a.promise}limitToFirst(e){return Object(o["G"])("Query.limitToFirst",1,1,arguments.length),new m(this.database,Object(s["H"])(this._delegate,Object(s["u"])(e)))}limitToLast(e){return Object(o["G"])("Query.limitToLast",1,1,arguments.length),new m(this.database,Object(s["H"])(this._delegate,Object(s["v"])(e)))}orderByChild(e){return Object(o["G"])("Query.orderByChild",1,1,arguments.length),new m(this.database,Object(s["H"])(this._delegate,Object(s["C"])(e)))}orderByKey(){return Object(o["G"])("Query.orderByKey",0,0,arguments.length),new m(this.database,Object(s["H"])(this._delegate,Object(s["D"])()))}orderByPriority(){return Object(o["G"])("Query.orderByPriority",0,0,arguments.length),new m(this.database,Object(s["H"])(this._delegate,Object(s["E"])()))}orderByValue(){return Object(o["G"])("Query.orderByValue",0,0,arguments.length),new m(this.database,Object(s["H"])(this._delegate,Object(s["F"])()))}startAt(e=null,t){return Object(o["G"])("Query.startAt",0,2,arguments.length),new m(this.database,Object(s["H"])(this._delegate,Object(s["R"])(e,t)))}startAfter(e=null,t){return Object(o["G"])("Query.startAfter",0,2,arguments.length),new m(this.database,Object(s["H"])(this._delegate,Object(s["Q"])(e,t)))}endAt(e=null,t){return Object(o["G"])("Query.endAt",0,2,arguments.length),new m(this.database,Object(s["H"])(this._delegate,Object(s["l"])(e,t)))}endBefore(e=null,t){return Object(o["G"])("Query.endBefore",0,2,arguments.length),new m(this.database,Object(s["H"])(this._delegate,Object(s["m"])(e,t)))}equalTo(e,t){return Object(o["G"])("Query.equalTo",1,2,arguments.length),new m(this.database,Object(s["H"])(this._delegate,Object(s["n"])(e,t)))}toString(){return Object(o["G"])("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return Object(o["G"])("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(Object(o["G"])("Query.isEqual",1,1,arguments.length),!(e instanceof m)){const e="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(e)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,n){const r={cancel:void 0,context:void 0};if(t&&n)r.cancel=t,Object(o["H"])(e,"cancel",r.cancel,!0),r.context=n,Object(o["I"])(e,"context",r.context,!0);else if(t)if("object"===typeof t&&null!==t)r.context=t;else{if("function"!==typeof t)throw new Error(Object(o["p"])(e,"cancelOrContext")+" must either be a cancel callback or a context object.");r.cancel=t}return r}get ref(){return new b(this.database,new s["d"](this._delegate._repo,this._delegate._path))}}class b extends m{constructor(e,t){super(e,new s["b"](t._repo,t._path,new s["c"],!1)),this.database=e,this._delegate=t}getKey(){return Object(o["G"])("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return Object(o["G"])("Reference.child",1,1,arguments.length),"number"===typeof e&&(e=String(e)),new b(this.database,Object(s["i"])(this._delegate,e))}getParent(){Object(o["G"])("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new b(this.database,e):null}getRoot(){return Object(o["G"])("Reference.root",0,0,arguments.length),new b(this.database,this._delegate.root)}set(e,t){Object(o["G"])("Reference.set",1,2,arguments.length),Object(o["H"])("Reference.set","onComplete",t,!0);const n=Object(s["N"])(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}update(e,t){if(Object(o["G"])("Reference.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,h("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(s["h"])("Reference.update",this._delegate._path),Object(o["H"])("Reference.update","onComplete",t,!0);const n=Object(s["S"])(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){Object(o["G"])("Reference.setWithPriority",2,3,arguments.length),Object(o["H"])("Reference.setWithPriority","onComplete",n,!0);const r=Object(s["P"])(this._delegate,e,t);return n&&r.then(()=>n(null),e=>n(e)),r}remove(e){Object(o["G"])("Reference.remove",0,1,arguments.length),Object(o["H"])("Reference.remove","onComplete",e,!0);const t=Object(s["K"])(this._delegate);return e&&t.then(()=>e(null),t=>e(t)),t}transaction(e,t,n){Object(o["G"])("Reference.transaction",1,3,arguments.length),Object(o["H"])("Reference.transaction","transactionUpdate",e,!1),Object(o["H"])("Reference.transaction","onComplete",t,!0),d("Reference.transaction","applyLocally",n,!0);const r=Object(s["L"])(this._delegate,e,{applyLocally:n}).then(e=>new _(e.committed,new g(this.database,e.snapshot)));return t&&r.then(e=>t(null,e.committed,e.snapshot),e=>t(e,!1,null)),r}setPriority(e,t){Object(o["G"])("Reference.setPriority",1,2,arguments.length),Object(o["H"])("Reference.setPriority","onComplete",t,!0);const n=Object(s["O"])(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}push(e,t){Object(o["G"])("Reference.push",0,2,arguments.length),Object(o["H"])("Reference.push","onComplete",t,!0);const n=Object(s["G"])(this._delegate,e),r=n.then(e=>new b(this.database,e));t&&r.then(()=>t(null),e=>t(e));const i=new b(this.database,n);return i.then=r.then.bind(r),i.catch=r.catch.bind(r,void 0),i}onDisconnect(){return Object(s["h"])("Reference.onDisconnect",this._delegate._path),new f(new s["a"](this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:s["p"],forceLongPolling:s["o"]}}useEmulator(e,t,n={}){Object(s["j"])(this._delegate,e,t,n)}ref(e){if(Object(o["G"])("database.ref",0,1,arguments.length),e instanceof b){const t=Object(s["J"])(this._delegate,e.toString());return new b(this,t)}{const t=Object(s["I"])(this._delegate,e);return new b(this,t)}}refFromURL(e){const t="database.refFromURL";Object(o["G"])(t,1,1,arguments.length);const n=Object(s["J"])(this._delegate,e);return new b(this,n)}goOffline(){return Object(o["G"])("database.goOffline",0,0,arguments.length),Object(s["r"])(this._delegate)}goOnline(){return Object(o["G"])("database.goOnline",0,0,arguments.length),Object(s["s"])(this._delegate)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function v({app:e,url:t,version:n,customAuthImpl:r,namespace:o,nodeAdmin:a=!1}){Object(s["f"])(n);const c=new i["c"]("auth-internal",new i["b"]("database-standalone"));return c.setComponent(new i["a"]("auth-internal",()=>r,"PRIVATE")),{instance:new y(Object(s["e"])(e,c,void 0,t,a),e),namespace:o}}y.ServerValue={TIMESTAMP:Object(s["M"])(),increment:e=>Object(s["t"])(e)};var w=Object.freeze({__proto__:null,initStandalone:v});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=y.ServerValue;function O(e){e.INTERNAL.registerComponent(new i["a"]("database-compat",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:t});return new y(r,n)},"PUBLIC").setServiceProps({Reference:b,Query:m,Database:y,DataSnapshot:g,enableLogging:s["k"],INTERNAL:w,ServerValue:C}).setMultipleInstances(!0)),e.registerVersion(c,l)}O(r["a"])},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"4f60":function(e,t,n){"use strict";var r=n("7ded");n.d(t,"a",(function(){return r["a"]}));var i="firebase",s="9.9.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r["a"].registerVersion(i,s,"app-compat")},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return fa})),n.d(t,"b",(function(){return _a})),n.d(t,"c",(function(){return Mn})),n.d(t,"d",(function(){return ya})),n.d(t,"e",(function(){return fc})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return fo})),n.d(t,"h",(function(){return go})),n.d(t,"i",(function(){return Oa})),n.d(t,"j",(function(){return wc})),n.d(t,"k",(function(){return Ec})),n.d(t,"l",(function(){return Wa})),n.d(t,"m",(function(){return Ha})),n.d(t,"n",(function(){return cc})),n.d(t,"o",(function(){return vc})),n.d(t,"p",(function(){return yc})),n.d(t,"q",(function(){return xa})),n.d(t,"r",(function(){return Cc})),n.d(t,"s",(function(){return Oc})),n.d(t,"t",(function(){return Tc})),n.d(t,"u",(function(){return Ya})),n.d(t,"v",(function(){return Xa})),n.d(t,"w",(function(){return qa})),n.d(t,"x",(function(){return Da})),n.d(t,"y",(function(){return Fa})),n.d(t,"z",(function(){return La})),n.d(t,"A",(function(){return Ma})),n.d(t,"B",(function(){return Aa})),n.d(t,"C",(function(){return ec})),n.d(t,"D",(function(){return nc})),n.d(t,"E",(function(){return ic})),n.d(t,"F",(function(){return oc})),n.d(t,"G",(function(){return Ea})),n.d(t,"H",(function(){return lc})),n.d(t,"I",(function(){return wa})),n.d(t,"J",(function(){return Ca})),n.d(t,"K",(function(){return ja})),n.d(t,"L",(function(){return xc})),n.d(t,"M",(function(){return kc})),n.d(t,"N",(function(){return Sa})),n.d(t,"O",(function(){return ka})),n.d(t,"P",(function(){return Ta})),n.d(t,"Q",(function(){return Ka})),n.d(t,"R",(function(){return $a})),n.d(t,"S",(function(){return Ia}));var r=n("589b"),i=n("22e5"),s=n("1fd5"),o=n("e691");const a="@firebase/database",c="0.13.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="";function u(e){l=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(s["F"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(s["z"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(s["j"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},f=p("localStorage"),_=p("sessionStorage"),g=new o["b"]("@firebase/database"),m=function(){let e=1;return function(){return e++}}(),b=function(e){const t=Object(s["E"])(e),n=new s["d"];n.update(t);const r=n.digest();return s["g"].encodeByteArray(r)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=y.apply(null,r):t+="object"===typeof r?Object(s["F"])(r):r,t+=" "}return t};let v=null,w=!0;const C=function(e,t){Object(s["e"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=o["a"].VERBOSE,v=g.log.bind(g),t&&_.set("logging_enabled",!0)):"function"===typeof e?v=e:(v=null,_.remove("logging_enabled"))},O=function(...e){if(!0===w&&(w=!1,null===v&&!0===_.get("logging_enabled")&&C(!0)),v){const t=y.apply(null,e);v(t)}},E=function(e){return function(...t){O(e,...t)}},j=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);g.error(t)},S=function(...e){const t="FIREBASE FATAL ERROR: "+y(...e);throw g.error(t),new Error(t)},k=function(...e){const t="FIREBASE WARNING: "+y(...e);g.warn(t)},T=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},I=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},x=function(e){if(Object(s["w"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},N="[MIN_NAME]",P="[MAX_NAME]",R=function(e,t){if(e===t)return 0;if(e===N||t===P)return-1;if(t===N||e===P)return 1;{const n=$(e),r=$(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},A=function(e,t){return e===t?0:e<t?-1:1},D=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(s["F"])(t))},F=function(e){if("object"!==typeof e||null===e)return Object(s["F"])(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Object(s["F"])(t[r]),n+=":",n+=F(e[t[r]]);return n+="}",n},L=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function M(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const q=function(e){Object(s["e"])(!I(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,o,a,c,l;0===e?(o=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},B=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},U=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function W(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const V=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,z=2147483647,$=function(e){if(V.test(e)){const t=Number(e);if(t>=H&&t<=z)return t}return null},G=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw k("Exception was thrown by user callback.",e),t},Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Q=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(O("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",re="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",oe="p",ae="ac",ce="websocket",le="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let r;if(Object(s["e"])("string"===typeof t,"typeof type must == string"),Object(s["e"])("object"===typeof n,"typeof params must == object"),t===ce)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const i=[];return M(n,(e,t)=>{i.push(e+"="+t)}),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(s["j"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(s["m"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={},_e={};function ge(e){const t=e.toString();return fe[t]||(fe[t]=new pe),fe[t]}function me(e,t){const n=e.toString();return _e[n]||(_e[n]=t()),_e[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&G(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="start",ve="close",we="pLPCommand",Ce="pRTLPCB",Oe="id",Ee="pw",je="ser",Se="cb",ke="seg",Te="ts",Ie="d",xe="dframe",Ne=1870,Pe=30,Re=Ne-Pe,Ae=25e3,De=3e4;class Fe{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=E(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new be(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(De)),x(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Le((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=r;else{if(t!==ve)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[ye]="t",e[je]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Se]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[ne]=re);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fe.forceAllow_=!0}static forceDisallow(){Fe.forceDisallow_=!0}static isAvailable(){return!Object(s["w"])()&&(!!Fe.forceAllow_||!Fe.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!B()&&!U())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(s["F"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(s["h"])(t),r=L(n,Re);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(s["w"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[xe]="t",n[Oe]=e,n[Ee]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(s["F"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Le{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(s["w"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=m(),window[we+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=Le.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){O("frame writing exception"),i.stack&&O(i.stack),O(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||O("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Oe]=this.myID,e[Ee]=this.myPW,e[je]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Pe+n.length<=Ne))break;{const e=this.pendingSegs.shift();n=n+"&"+ke+r+"="+e.seg+"&"+Te+r+"="+e.ts+"&"+Ie+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Ae)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){Object(s["w"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{O("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=16384,qe=45e3;let Be=null;"undefined"!==typeof MozWebSocket?Be=MozWebSocket:"undefined"!==typeof WebSocket&&(Be=WebSocket);class Ue{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=E(this.connId),this.stats_=ge(t),this.connURL=Ue.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const o={};return o[ee]=Z,!Object(s["w"])()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(o[ne]=re),t&&(o[te]=t),n&&(o[se]=n),r&&(o[ae]=r),i&&(o[oe]=i),de(e,ce,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0);try{let t;if(Object(s["w"])()){const n=this.nodeAdmin?"AdminNode":"Node";t={headers:{"User-Agent":`Firebase/${Z}/${l}/${e.platform}/${n}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(t.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=Object({NODE_ENV:"production",BASE_URL:"/anonymous-chat/"}),i=0===this.connURL.indexOf("wss://")?r["HTTPS_PROXY"]||r["https_proxy"]:r["HTTP_PROXY"]||r["http_proxy"];i&&(t["proxy"]={origin:i})}this.mySock=new Be(this.connURL,[],t)}catch(r){this.log_("Error instantiating WebSocket.");const e=r.message||r.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Be&&!Ue.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(s["z"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(s["e"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(s["F"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=L(t,Me);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qe))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ue.responsesRequiredToBeHealthy=2,Ue.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fe,Ue]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ue&&Ue["isAvailable"]();let n=t&&!Ue.previouslyFailed();if(e.webSocketOnly&&(t||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ue];else{const e=this.transports_=[];for(const t of We.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);We.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}We.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ve=6e4,He=5e3,ze=10240,$e=102400,Ge="t",Ke="d",Qe="s",Ye="r",Je="e",Xe="o",Ze="a",et="n",tt="p",nt="h";class rt{constructor(e,t,n,r,i,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=E("c:"+this.id+":"),this.transportManager_=new We(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Q(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$e?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ze?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ge in e){const t=e[Ge];t===Ze?this.upgradeIfSecondaryHealthy_():t===Ye?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=D("t",e),n=D("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=D("t",e),n=D("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=D(Ge,e);if(Ke in e){const n=e[Ke];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Qe?this.onConnectionShutdown_(n):t===Ye?this.onReset_(n):t===Je?j("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):j("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Q(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ve))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Q(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(He))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(s["e"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){Object(s["e"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(s["v"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ot}getInitialEvent(e){return Object(s["e"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,ct=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new lt("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function ft(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function _t(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function mt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function bt(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof lt)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function vt(e,t){const n=ht(e),r=ht(t);if(null===n)return t;if(n===r)return vt(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){const n=gt(e,0),r=gt(t,0);for(let i=0;i<n.length&&i<r.length;i++){const e=R(n[i],r[i]);if(0!==e)return e}return n.length===r.length?0:n.length<r.length?-1:1}function Ct(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ot(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Et{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(s["D"])(this.parts_[n]);kt(this)}}function jt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(s["D"])(t),kt(e)}function St(e){const t=e.parts_.pop();e.byteLength_-=Object(s["D"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function kt(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+Tt(e))}function Tt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new It}getInitialEvent(e){return Object(s["e"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=1e3,Nt=3e5,Pt=3e4,Rt=1.3,At=3e4,Dt="server_kill",Ft=3;class Lt extends it{constructor(e,t,n,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Lt.nextPersistentConnectionId_++,this.log_=E("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xt,this.maxReconnectDelay_=Nt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(s["w"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");It.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Object(s["F"])(i)),Object(s["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new s["a"],n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Object(s["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(s["e"])(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},s="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(s,i,i=>{const s=i["d"],o=i["s"];Lt.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(s["j"])(e,"w")){const n=Object(s["C"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(s["r"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(s["y"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(s["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},s="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(s,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s["h"]=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(s["F"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):j("Unrecognized action received from server: "+Object(s["F"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(s["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>At&&(this.reconnectDelay_=xt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Rt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Lt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){Object(s["e"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?O("getToken() completed but was canceled"):(O("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new rt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{k(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dt)},i))}catch(j){this.log_("Failed to get token: "+j),o||(this.repoInfo_.nodeAdmin&&k(j),c())}}}interrupt(e){O("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){O("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(s["t"])(this.interruptReasons_)&&(this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>F(e)).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){O("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ft&&(this.reconnectDelay_=Pt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){O("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ft&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(s["w"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,Object(s["v"])()?e["framework.cordova"]=1:Object(s["x"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return Object(s["t"])(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0,Lt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Mt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Mt(N,e),r=new Mt(N,t);return 0!==this.compare(n,r)}minPost(){return Mt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt;class Ut extends qt{static get __EMPTY_NODE(){return Bt}static set __EMPTY_NODE(e){Bt=e}compare(e,t){return R(e.name,t.name)}isDefinedOn(e){throw Object(s["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Mt.MIN}maxPost(){return new Mt(P,Bt)}makePost(e,t){return Object(s["e"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Mt(e,Bt)}toString(){return".key"}}const Wt=new Ut;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(e=e,s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ht{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ht.RED,this.left=null!=r?r:$t.EMPTY_NODE,this.right=null!=i?i:$t.EMPTY_NODE}copy(e,t,n,r,i){return new Ht(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return $t.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return $t.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ht.RED=!0,Ht.BLACK=!1;class zt{copy(e,t,n,r,i){return this}insert(e,t,n){return new Ht(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $t{constructor(e,t=$t.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new $t(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new $t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e,t){return R(e.name,t.name)}function Kt(e,t){return R(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qt;function Yt(e){Qt=e}$t.EMPTY_NODE=new zt;const Jt=function(e){return"number"===typeof e?"number:"+q(e):"string:"+e},Xt=function(e){if(e.isLeafNode()){const t=e.val();Object(s["e"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(s["j"])(t,".sv"),"Priority must be a string or number.")}else Object(s["e"])(e===Qt||e.isEmpty(),"priority of unexpected type.");Object(s["e"])(e===Qt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zt,en,tn;class nn{constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(s["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xt(this.priorityNode_)}static set __childrenNodeConstructor(e){Zt=e}static get __childrenNodeConstructor(){return Zt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ht(e)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(s["e"])(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?q(this.value_):this.value_,this.lazyHash_=b(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:(Object(s["e"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=nn.VALUE_TYPE_ORDER.indexOf(t),i=nn.VALUE_TYPE_ORDER.indexOf(n);return Object(s["e"])(r>=0,"Unknown leaf type: "+t),Object(s["e"])(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function rn(e){en=e}function sn(e){tn=e}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class on extends qt{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?R(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Mt.MIN}maxPost(){return new Mt(P,new nn("[PRIORITY-POST]",tn))}makePost(e,t){const n=en(e);return new Mt(t,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new on,cn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){const t=e=>parseInt(Math.log(e)/cn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const un=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Ht(a,o.node,Ht.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=i(t,c),u=i(c+1,r);return o=e[c],a=n?n(o):o,new Ht(a,o.node,Ht.BLACK,l,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const l=i(s+1,a),u=e[s],h=n?n(u):u;c(new Ht(h,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Ht.BLACK):(a(r,Ht.BLACK),a(r,Ht.RED))}return s},o=new ln(e.length),a=s(o);return new $t(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;const dn={};class pn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(s["e"])(dn&&an,"ChildrenNode.ts has not been loaded"),hn=hn||new pn({".priority":dn},{".priority":an}),hn}get(e){const t=Object(s["C"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof $t?t:null}hasIndex(e){return Object(s["j"])(this.indexSet_,e.toString())}addIndex(e,t){Object(s["e"])(e!==Wt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Mt.Wrap);let o,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();o=r?un(n,e.getCompare()):dn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=o,new pn(u,l)}addToIndexes(e,t){const n=Object(s["A"])(this.indexes_,(n,r)=>{const i=Object(s["C"])(this.indexSet_,r);if(Object(s["e"])(i,"Missing index implementation for "+r),n===dn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Mt.Wrap);let s=r.getNext();while(s)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),un(n,i.getCompare())}return dn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Mt(e.name,r))),i.insert(e,e.node)}});return new pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(s["A"])(this.indexes_,n=>{if(n===dn)return n;{const r=t.get(e.name);return r?n.remove(new Mt(e.name,r)):n}});return new pn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class _n{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xt(this.priorityNode_),this.children_.isEmpty()&&Object(s["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new _n(new $t(Kt),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(e){return this.children_.isEmpty()?this:new _n(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?fn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(s["e"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Mt(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?fn:this.priorityNode_;return new _n(r,s,i)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{Object(s["e"])(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(pt(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(an,(s,o)=>{t[s]=o.val(e),n++,i&&_n.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1}),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jt(this.getPriority().val())+":"),this.forEachChild(an,(t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.lazyHash_=""===e?"":b(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Mt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Mt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Mt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Mt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Mt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mn?-1:0}withIndex(e){if(e===Wt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _n(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Wt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(an),n=t.getIterator(an);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Wt?null:this.indexMap_.get(e.toString())}}_n.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gn extends _n{constructor(){super(new $t(Kt),_n.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _n.EMPTY_NODE}isEmpty(){return!1}}const mn=new gn;Object.defineProperties(Mt,{MIN:{value:new Mt(N,_n.EMPTY_NODE)},MAX:{value:new Mt(P,mn)}}),Ut.__EMPTY_NODE=_n.EMPTY_NODE,nn.__childrenNodeConstructor=_n,Yt(mn),sn(mn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bn=!0;function yn(e,t=null){if(null===e)return _n.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(s["e"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new nn(n,yn(t))}if(e instanceof Array||!bn){let n=_n.EMPTY_NODE;return M(e,(t,r)=>{if(Object(s["j"])(e,t)&&"."!==t.substring(0,1)){const e=yn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(yn(t))}{const n=[];let r=!1;const i=e;if(M(i,(e,t)=>{if("."!==e.substring(0,1)){const i=yn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Mt(e,i)))}}),0===n.length)return _n.EMPTY_NODE;const s=un(n,Gt,e=>e.name,Kt);if(r){const e=un(n,an.getCompare());return new _n(s,yn(t),new pn({".priority":e},{".priority":an}))}return new _n(s,yn(t),pn.Default)}}rn(yn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn extends qt{constructor(e){super(),this.indexPath_=e,Object(s["e"])(!yt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?R(e.name,t.name):i}makePost(e,t){const n=yn(e),r=_n.EMPTY_NODE.updateChild(this.indexPath_,n);return new Mt(t,r)}maxPost(){const e=_n.EMPTY_NODE.updateChild(this.indexPath_,mn);return new Mt(P,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends qt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?R(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Mt.MIN}maxPost(){return Mt.MAX}makePost(e,t){const n=yn(e);return new Mt(t,n)}toString(){return".value"}}const Cn=new wn,On="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",En="-",jn="z",Sn=786,kn=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const o=new Array(8);for(i=7;i>=0;i--)o[i]=On.charAt(n%64),n=Math.floor(n/64);Object(s["e"])(0===n,"Cannot push at time == 0");let a=o.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=On.charAt(t[i]);return Object(s["e"])(20===a.length,"nextPushId: Length should be 20."),a}}(),Tn=function(e){if(e===""+z)return En;const t=$(e);if(null!=t)return""+(t+1);const n=new Array(e.length);for(let o=0;o<n.length;o++)n[o]=e.charAt(o);if(n.length<Sn)return n.push(En),n.join("");let r=n.length-1;while(r>=0&&n[r]===jn)r--;if(-1===r)return P;const i=n[r],s=On.charAt(On.indexOf(i)+1);return n[r]=s,n.slice(0,r+1).join("")},In=function(e){if(e===""+H)return N;const t=$(e);if(null!=t)return""+(t-1);const n=new Array(e.length);for(let r=0;r<n.length;r++)n[r]=e.charAt(r);return n[n.length-1]===En?1===n.length?""+z:(delete n[n.length-1],n.join("")):(n[n.length-1]=On.charAt(On.indexOf(n[n.length-1])-1),n.join("")+jn.repeat(Sn-n.length))};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xn(e){return{type:"value",snapshotNode:e}}function Nn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Pn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Rn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function An(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){Object(s["e"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Pn(t,a)):Object(s["e"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Nn(t,n)):o.trackChildChange(Rn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(an,(e,r)=>{t.hasChild(e)||n.trackChildChange(Pn(e,r))}),t.isLeafNode()||t.forEachChild(an,(t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Rn(t,r,i))}else n.trackChildChange(Nn(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_n.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.indexedFilter_=new Dn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fn.getStartPost_(e),this.endPost_=Fn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,s){return this.matches(new Mt(t,n))||(n=_n.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=_n.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(_n.EMPTY_NODE);const i=this;return t.forEachChild(an,(e,t)=>{i.matches(new Mt(e,t))||(r=r.updateImmediateChild(e,_n.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.rangedFilter_=new Fn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new Mt(t,n))||(n=_n.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=_n.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=_n.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,s;if(r=t.withIndex(this.index_),r=r.updatePriority(_n.EMPTY_NODE),this.reverse_){s=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else s=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const t=s.getNext();!a&&i(e,t)<=0&&(a=!0);const c=a&&o<this.limit_&&i(t,n)<=0;c?o++:r=r.updateImmediateChild(t.name,_n.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;Object(s["e"])(a.numChildren()===this.limit_,"");const c=new Mt(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=r.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(Rn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Pn(t,e));const n=a.updateImmediateChild(t,_n.EMPTY_NODE),r=null!=s&&this.rangedFilter_.matches(s);return r?(null!=i&&i.trackChildChange(Nn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(l,c)>=0?(null!=i&&(i.trackChildChange(Pn(l.name,l.node)),i.trackChildChange(Nn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,_n.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(s["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(s["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:N}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(s["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(s["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:P}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(s["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const e=new Mn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qn(e){return e.loadsAllData()?new Dn(e.getIndex()):e.hasLimit()?new Ln(e):new Fn(e)}function Bn(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function Un(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function Wn(e,t,n){const r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Vn(e,t,n){let r;if(e.index_===Wt)"string"===typeof t&&(t=Tn(t)),r=Wn(e,t,n);else{let i;i=null==n?P:Tn(n),r=Wn(e,t,i)}return r.startAfterSet_=!0,r}function Hn(e,t,n){const r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function zn(e,t,n){let r,i;return e.index_===Wt?("string"===typeof t&&(t=In(t)),i=Hn(e,t,n)):(r=null==n?N:In(n),i=Hn(e,t,r)),i.endBeforeSet_=!0,i}function $n(e,t){const n=e.copy();return n.index_=t,n}function Gn(e){const t={};if(e.isDefault())return t;let n;return e.index_===an?n="$priority":e.index_===Cn?n="$value":e.index_===Wt?n="$key":(Object(s["e"])(e.index_ instanceof vn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(s["F"])(n),e.startSet_&&(t["startAt"]=Object(s["F"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(s["F"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(s["F"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(s["F"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Kn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==an&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends it{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=E("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(s["e"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Qn.getListenId_(e,n),a={};this.listens_[o]=a;const c=Gn(e._queryParams);this.restRequest_(i+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),Object(s["C"])(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}})}unlisten(e,t){const n=Qn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Gn(e._queryParams),n=e._path.toString(),r=new s["a"];return this.restRequest_(n+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(s["B"])(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(s["z"])(a.responseText)}catch(e){k("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.rootNode_=_n.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){return{value:null,children:new Map}}function Xn(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ht(t);e.children.has(r)||e.children.set(r,Jn());const i=e.children.get(r);t=pt(t),Xn(i,t,n)}}function Zn(e,t){if(yt(t))return e.value=null,e.children.clear(),!0;if(null!==e.value){if(e.value.isLeafNode())return!1;{const n=e.value;return e.value=null,n.forEachChild(an,(t,n)=>{Xn(e,new lt(t),n)}),Zn(e,t)}}if(e.children.size>0){const n=ht(t);if(t=pt(t),e.children.has(n)){const r=Zn(e.children.get(n),t);r&&e.children.delete(n)}return 0===e.children.size}return!0}function er(e,t,n){null!==e.value?n(t,e.value):tr(e,(e,r)=>{const i=new lt(t.toString()+"/"+e);er(r,i,n)})}function tr(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&M(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=1e4,ir=3e4,sr=3e5;class or{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new nr(e);const n=rr+(ir-rr)*Math.random();Q(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;M(e,(e,r)=>{r>0&&Object(s["j"])(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),Q(this.reportStats_.bind(this),Math.floor(2*Math.random()*sr))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ar;function cr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ur(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(ar||(ar={}));class hr{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=ar.ACK_USER_WRITE,this.source=cr()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return Object(s["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new hr(ut(),t,this.revert)}}return Object(s["e"])(ht(this.path)===e,"operationForChild called for unrelated child."),new hr(pt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.source=e,this.path=t,this.type=ar.LISTEN_COMPLETE}operationForChild(e){return yt(this.path)?new dr(this.source,ut()):new dr(this.source,pt(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=ar.OVERWRITE}operationForChild(e){return yt(this.path)?new pr(this.source,ut(),this.snap.getImmediateChild(e)):new pr(this.source,pt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=ar.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new pr(this.source,ut(),t.value):new fr(this.source,ut(),t)}return Object(s["e"])(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fr(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mr(e,t,n,r){const i=[],s=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(An(t.childName,t.snapshotNode))}),br(e,i,"child_removed",t,r,n),br(e,i,"child_added",t,r,n),br(e,i,"child_moved",s,r,n),br(e,i,"child_changed",t,r,n),br(e,i,"value",t,r,n),i}function br(e,t,n,r,i,s){const o=r.filter(e=>e.type===n);o.sort((t,n)=>vr(e,t,n)),o.forEach(n=>{const r=yr(e,n,s);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function yr(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function vr(e,t,n){if(null==t.childName||null==n.childName)throw Object(s["f"])("Should only compare child_ events.");const r=new Mt(t.childName,t.snapshotNode),i=new Mt(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(e,t){return{eventCache:e,serverCache:t}}function Cr(e,t,n,r){return wr(new _r(t,n,r),e.serverCache)}function Or(e,t,n,r){return wr(e.eventCache,new _r(t,n,r))}function Er(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function jr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr;const kr=()=>(Sr||(Sr=new $t(A)),Sr);class Tr{constructor(e,t=kr()){this.value=e,this.children=t}static fromObject(e){let t=new Tr(null);return M(e,(e,n)=>{t=t.set(new lt(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(yt(e))return null;{const n=ht(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(pt(e),t);if(null!=i){const e=bt(new lt(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(yt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(pt(e)):new Tr(null)}}set(e,t){if(yt(e))return new Tr(t,this.children);{const n=ht(e),r=this.children.get(n)||new Tr(null),i=r.set(pt(e),t),s=this.children.insert(n,i);return new Tr(this.value,s)}}remove(e){if(yt(e))return this.children.isEmpty()?new Tr(null):new Tr(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const r=n.remove(pt(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Tr(null):new Tr(this.value,i)}return this}}get(e){if(yt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(pt(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ht(e),r=this.children.get(n)||new Tr(null),i=r.setTree(pt(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Tr(this.value,s)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(bt(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(yt(e))return null;{const r=ht(e),i=this.children.get(r);return i?i.findOnPath_(pt(e),bt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const r=ht(e),i=this.children.get(r);return i?i.foreachOnPath_(pt(e),bt(t,r),n):new Tr(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(bt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.writeTree_=e}static empty(){return new Ir(new Tr(null))}}function xr(e,t,n){if(yt(t))return new Ir(new Tr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=vt(i,t);return s=s.updateChild(o,n),new Ir(e.writeTree_.set(i,s))}{const r=new Tr(n),i=e.writeTree_.setTree(t,r);return new Ir(i)}}}function Nr(e,t,n){let r=e;return M(n,(e,n)=>{r=xr(r,bt(t,e),n)}),r}function Pr(e,t){if(yt(t))return Ir.empty();{const n=e.writeTree_.setTree(t,new Tr(null));return new Ir(n)}}function Rr(e,t){return null!=Ar(e,t)}function Ar(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(vt(n.path,t)):null}function Dr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,(e,n)=>{t.push(new Mt(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Mt(e,n.value))}),t}function Fr(e,t){if(yt(t))return e;{const n=Ar(e,t);return new Ir(null!=n?new Tr(n):e.writeTree_.subtree(t))}}function Lr(e){return e.writeTree_.isEmpty()}function Mr(e,t){return qr(ut(),e.writeTree_,t)}function qr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((t,i)=>{".priority"===t?(Object(s["e"])(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=qr(bt(e,t),i,n)}),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(bt(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(e,t){return li(t,e)}function Ur(e,t,n,r,i){Object(s["e"])(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=xr(e.visibleWrites,t,n)),e.lastWriteId=r}function Wr(e,t,n,r){Object(s["e"])(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Nr(e.visibleWrites,t,n),e.lastWriteId=r}function Vr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function Hr(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(s["e"])(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&zr(t,r.path)?i=!1:Ot(r.path,t.path)&&(o=!0)),a--}if(i){if(o)return $r(e),!0;if(r.snap)e.visibleWrites=Pr(e.visibleWrites,r.path);else{const t=r.children;M(t,t=>{e.visibleWrites=Pr(e.visibleWrites,bt(r.path,t))})}return!0}return!1}function zr(e,t){if(e.snap)return Ot(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ot(bt(e.path,n),t))return!0;return!1}function $r(e){e.visibleWrites=Kr(e.allWrites,Gr,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Gr(e){return e.visible}function Kr(e,t,n){let r=Ir.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const e=o.path;let t;if(o.snap)Ot(n,e)?(t=vt(n,e),r=xr(r,t,o.snap)):Ot(e,n)&&(t=vt(e,n),r=xr(r,ut(),o.snap.getChild(t)));else{if(!o.children)throw Object(s["f"])("WriteRecord should have .snap or .children");if(Ot(n,e))t=vt(n,e),r=Nr(r,t,o.children);else if(Ot(e,n))if(t=vt(e,n),yt(t))r=Nr(r,ut(),o.children);else{const e=Object(s["C"])(o.children,ht(t));if(e){const n=e.getChild(pt(t));r=xr(r,ut(),n)}}}}}return r}function Qr(e,t,n,r,i){if(r||i){const s=Fr(e.visibleWrites,t);if(!i&&Lr(s))return n;if(i||null!=n||Rr(s,ut())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ot(e.path,t)||Ot(t,e.path))},o=Kr(e.allWrites,s,t),a=n||_n.EMPTY_NODE;return Mr(o,a)}return null}{const r=Ar(e.visibleWrites,t);if(null!=r)return r;{const r=Fr(e.visibleWrites,t);if(Lr(r))return n;if(null!=n||Rr(r,ut())){const e=n||_n.EMPTY_NODE;return Mr(r,e)}return null}}}function Yr(e,t,n){let r=_n.EMPTY_NODE;const i=Ar(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(an,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){const i=Fr(e.visibleWrites,t);return n.forEachChild(an,(e,t)=>{const n=Mr(Fr(i,new lt(e)),t);r=r.updateImmediateChild(e,n)}),Dr(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}{const n=Fr(e.visibleWrites,t);return Dr(n).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}}function Jr(e,t,n,r,i){Object(s["e"])(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=bt(t,n);if(Rr(e.visibleWrites,o))return null;{const t=Fr(e.visibleWrites,o);return Lr(t)?i.getChild(n):Mr(t,i.getChild(n))}}function Xr(e,t,n,r){const i=bt(t,n),s=Ar(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n)){const t=Fr(e.visibleWrites,i);return Mr(t,r.getNode().getImmediateChild(n))}return null}function Zr(e,t){return Ar(e.visibleWrites,t)}function ei(e,t,n,r,i,s,o){let a;const c=Fr(e.visibleWrites,t),l=Ar(c,ut());if(null!=l)a=l;else{if(null==n)return[];a=Mr(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function ti(){return{visibleWrites:Ir.empty(),allWrites:[],lastWriteId:-1}}function ni(e,t,n,r){return Qr(e.writeTree,e.treePath,t,n,r)}function ri(e,t){return Yr(e.writeTree,e.treePath,t)}function ii(e,t,n,r){return Jr(e.writeTree,e.treePath,t,n,r)}function si(e,t){return Zr(e.writeTree,bt(e.treePath,t))}function oi(e,t,n,r,i,s){return ei(e.writeTree,e.treePath,t,n,r,i,s)}function ai(e,t,n){return Xr(e.writeTree,e.treePath,t,n)}function ci(e,t){return li(bt(e.treePath,t),e.writeTree)}function li(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(s["e"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(s["e"])(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Rn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Pn(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Nn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Object(s["f"])("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Rn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const di=new hi;class pi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new _r(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ai(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:jr(this.viewCache_),i=oi(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(e){return{filter:e}}function _i(e,t){Object(s["e"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(s["e"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function gi(e,t,n,r,i){const o=new ui;let a,c;if(n.type===ar.OVERWRITE){const l=n;l.source.fromUser?a=vi(e,t,l.path,l.snap,r,i,o):(Object(s["e"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!yt(l.path),a=yi(e,t,l.path,l.snap,r,i,c,o))}else if(n.type===ar.MERGE){const l=n;l.source.fromUser?a=Ci(e,t,l.path,l.children,r,i,o):(Object(s["e"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=Ei(e,t,l.path,l.children,r,i,c,o))}else if(n.type===ar.ACK_USER_WRITE){const s=n;a=s.revert?ki(e,t,s.path,r,i,o):ji(e,t,s.path,s.affectedTree,r,i,o)}else{if(n.type!==ar.LISTEN_COMPLETE)throw Object(s["f"])("Unknown operation type: "+n.type);a=Si(e,t,n.path,r,o)}const l=o.getChanges();return mi(t,a,l),{viewCache:a,changes:l}}function mi(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Er(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(xn(Er(t)))}}function bi(e,t,n,r,i,o){const a=t.eventCache;if(null!=si(r,n))return t;{let c,l;if(yt(n))if(Object(s["e"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=jr(t),i=n instanceof _n?n:_n.EMPTY_NODE,s=ri(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=ni(r,jr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ht(n);if(".priority"===u){Object(s["e"])(1===dt(n),"Can't have a priority with additional path components");const i=a.getNode();l=t.serverCache.getNode();const o=ii(r,n,i,l);c=null!=o?e.filter.updatePriority(i,o):a.getNode()}else{const s=pt(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=ii(r,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=ai(r,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,s,i,o):a.getNode()}}return Cr(t,c,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function yi(e,t,n,r,i,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(yt(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const i=pt(n),s=c.getNode().getImmediateChild(e),o=s.updateChild(i,r);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,i,di,null)}const h=Or(t,l,c.isFullyInitialized()||yt(n),u.filtersNodes()),d=new pi(i,h,s);return bi(e,h,n,i,d,a)}function vi(e,t,n,r,i,s,o){const a=t.eventCache;let c,l;const u=new pi(i,t,s);if(yt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,o),c=Cr(t,l,!0,e.filter.filtersNodes());else{const i=ht(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=Cr(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=pt(n),l=a.getNode().getImmediateChild(i);let h;if(yt(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===ft(s)&&e.getChild(mt(s)).isEmpty()?e:e.updateChild(s,r):_n.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,s,u,o);c=Cr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function wi(e,t){return e.eventCache.isCompleteForChild(t)}function Ci(e,t,n,r,i,s,o){let a=t;return r.foreach((r,c)=>{const l=bt(n,r);wi(t,ht(l))&&(a=vi(e,a,l,c,i,s,o))}),r.foreach((r,c)=>{const l=bt(n,r);wi(t,ht(l))||(a=vi(e,a,l,c,i,s,o))}),a}function Oi(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function Ei(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=yt(n)?r:new Tr(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=Oi(e,c,r);l=yi(e,l,new lt(n),u,i,s,o,a)}}),c.children.inorderTraversal((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=Oi(e,c,r);l=yi(e,l,new lt(n),u,i,s,o,a)}}),l}function ji(e,t,n,r,i,s,o){if(null!=si(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(yt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return yi(e,t,n,c.getNode().getChild(n),i,s,a,o);if(yt(n)){let r=new Tr(null);return c.getNode().forEachChild(Wt,(e,t)=>{r=r.set(new lt(e),t)}),Ei(e,t,n,r,i,s,a,o)}return t}{let l=new Tr(null);return r.foreach((e,t)=>{const r=bt(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))}),Ei(e,t,n,l,i,s,a,o)}}function Si(e,t,n,r,i){const s=t.serverCache,o=Or(t,s.getNode(),s.isFullyInitialized()||yt(n),s.isFiltered());return bi(e,o,n,r,di,i)}function ki(e,t,n,r,i,o){let a;if(null!=si(r,n))return t;{const c=new pi(r,t,i),l=t.eventCache.getNode();let u;if(yt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=ni(r,jr(t));else{const e=t.serverCache.getNode();Object(s["e"])(e instanceof _n,"serverChildren would be complete if leaf node"),n=ri(r,e)}n=n,u=e.filter.updateFullNode(l,n,o)}else{const i=ht(n);let s=ai(r,i,t.serverCache);null==s&&t.serverCache.isCompleteForChild(i)&&(s=l.getImmediateChild(i)),u=null!=s?e.filter.updateChild(l,i,s,pt(n),c,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,_n.EMPTY_NODE,pt(n),c,o):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=ni(r,jr(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=si(r,ut()),Cr(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Dn(n.getIndex()),i=qn(n);this.processor_=fi(i);const s=t.serverCache,o=t.eventCache,a=r.updateFullNode(_n.EMPTY_NODE,s.getNode(),null),c=i.updateFullNode(_n.EMPTY_NODE,o.getNode(),null),l=new _r(a,s.isFullyInitialized(),r.filtersNodes()),u=new _r(c,o.isFullyInitialized(),i.filtersNodes());this.viewCache_=wr(u,l),this.eventGenerator_=new gr(this.query_)}get query(){return this.query_}}function Ii(e){return e.viewCache_.serverCache.getNode()}function xi(e){return Er(e.viewCache_)}function Ni(e,t){const n=jr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function Pi(e){return 0===e.eventRegistrations_.length}function Ri(e,t){e.eventRegistrations_.push(t)}function Ai(e,t,n){const r=[];if(n){Object(s["e"])(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Di(e,t,n,r){t.type===ar.MERGE&&null!==t.source.queryId&&(Object(s["e"])(jr(e.viewCache_),"We should always have a full cache before handling merges"),Object(s["e"])(Er(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=gi(e.processor_,i,t,n,r);return _i(e.processor_,o.viewCache),Object(s["e"])(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Li(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Fi(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(an,(e,t)=>{r.push(Nn(e,t))})}return n.isFullyInitialized()&&r.push(xn(n.getNode())),Li(e,r,n.getNode(),t)}function Li(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return mr(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi,qi;class Bi{constructor(){this.views=new Map}}function Ui(e){Object(s["e"])(!Mi,"__referenceConstructor has already been defined"),Mi=e}function Wi(){return Object(s["e"])(Mi,"Reference.ts has not been loaded"),Mi}function Vi(e){return 0===e.views.size}function Hi(e,t,n,r){const i=t.source.queryId;if(null!==i){const o=e.views.get(i);return Object(s["e"])(null!=o,"SyncTree gave us an op for an invalid query."),Di(o,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(Di(s,t,n,r));return i}}function zi(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=ni(n,i?r:null),s=!1;e?s=!0:r instanceof _n?(e=ri(n,r),s=!1):(e=_n.EMPTY_NODE,s=!1);const o=wr(new _r(e,s,!1),new _r(r,i,!1));return new Ti(t,o)}return o}function $i(e,t,n,r,i,s){const o=zi(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),Ri(o,n),Fi(o,n)}function Gi(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=Xi(e);if("default"===i)for(const[c,l]of e.views.entries())o=o.concat(Ai(l,n,r)),Pi(l)&&(e.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const t=e.views.get(i);t&&(o=o.concat(Ai(t,n,r)),Pi(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Xi(e)&&s.push(new(Wi())(t._repo,t._path)),{removed:s,events:o}}function Ki(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Qi(e,t){let n=null;for(const r of e.views.values())n=n||Ni(r,t);return n}function Yi(e,t){const n=t._queryParams;if(n.loadsAllData())return Zi(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Ji(e,t){return null!=Yi(e,t)}function Xi(e){return null!=Zi(e)}function Zi(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(e){Object(s["e"])(!qi,"__referenceConstructor has already been defined"),qi=e}function ts(){return Object(s["e"])(qi,"Reference.ts has not been loaded"),qi}let ns=1;class rs{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Tr(null),this.pendingWriteTree_=ti(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function is(e,t,n,r,i){return Ur(e.pendingWriteTree_,t,n,r,i),i?ys(e,new pr(cr(),t,n)):[]}function ss(e,t,n,r){Wr(e.pendingWriteTree_,t,n,r);const i=Tr.fromObject(n);return ys(e,new fr(cr(),t,i))}function os(e,t,n=!1){const r=Vr(e.pendingWriteTree_,t),i=Hr(e.pendingWriteTree_,t);if(i){let t=new Tr(null);return null!=r.snap?t=t.set(ut(),!0):M(r.children,e=>{t=t.set(new lt(e),!0)}),ys(e,new hr(r.path,t,n))}return[]}function as(e,t,n){return ys(e,new pr(lr(),t,n))}function cs(e,t,n){const r=Tr.fromObject(n);return ys(e,new fr(lr(),t,r))}function ls(e,t){return ys(e,new dr(lr(),t))}function us(e,t,n){const r=js(e,n);if(r){const n=Ss(r),i=n.path,s=n.queryId,o=vt(i,t),a=new dr(ur(s),o);return ks(e,i,a)}return[]}function hs(e,t,n,r){const i=t._path,s=e.syncPointTree_.get(i);let o=[];if(s&&("default"===t._queryIdentifier||Ji(s,t))){const a=Gi(s,t,n,r);Vi(s)&&(e.syncPointTree_=e.syncPointTree_.remove(i));const c=a.removed;o=a.events;const l=-1!==c.findIndex(e=>e._queryParams.loadsAllData()),u=e.syncPointTree_.findOnPath(i,(e,t)=>Xi(t));if(l&&!u){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=Ts(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=Cs(e,r);e.listenProvider_.startListening(Is(i),Os(e,i),s.hashFn,s.onComplete)}}}if(!u&&c.length>0&&!r)if(l){const n=null;e.listenProvider_.stopListening(Is(t),n)}else c.forEach(t=>{const n=e.queryToTagMap.get(Es(t));e.listenProvider_.stopListening(Is(t),n)});xs(e,c)}return o}function ds(e,t){const{syncPoint:n,serverCache:r,writesCache:i,serverCacheComplete:s}=_s(t,e),o=zi(n,t,i,r,s);return n.views.has(t._queryIdentifier)||n.views.set(t._queryIdentifier,o),t._queryParams.loadsAllData()?null:Os(e,t)}function ps(e,t,n,r){const i=js(e,r);if(null!=i){const r=Ss(i),s=r.path,o=r.queryId,a=vt(s,t),c=new pr(ur(o),a,n);return ks(e,s,c)}return[]}function fs(e,t,n,r){const i=js(e,r);if(i){const r=Ss(i),s=r.path,o=r.queryId,a=vt(s,t),c=Tr.fromObject(n),l=new fr(ur(o),a,c);return ks(e,s,l)}return[]}function _s(e,t){const n=e._path;let r=null,i=!1;t.syncPointTree_.foreachOnPath(n,(e,t)=>{const s=vt(e,n);r=r||Qi(t,s),i=i||Xi(t)});let o,a=t.syncPointTree_.get(n);if(a?(i=i||Xi(a),r=r||Qi(a,ut())):(a=new Bi,t.syncPointTree_=t.syncPointTree_.set(n,a)),null!=r)o=!0;else{o=!1,r=_n.EMPTY_NODE;const e=t.syncPointTree_.subtree(n);e.foreachChild((e,t)=>{const n=Qi(t,ut());n&&(r=r.updateImmediateChild(e,n))})}const c=Ji(a,e);if(!c&&!e._queryParams.loadsAllData()){const n=Es(e);Object(s["e"])(!t.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=Ns();t.queryToTagMap.set(n,r),t.tagToQueryMap.set(r,n)}const l=Br(t.pendingWriteTree_,n);return{syncPoint:a,writesCache:l,serverCache:r,serverCacheComplete:o,foundAncestorDefaultView:i,viewAlreadyExists:c}}function gs(e,t,n){const{syncPoint:r,serverCache:i,writesCache:s,serverCacheComplete:o,viewAlreadyExists:a,foundAncestorDefaultView:c}=_s(t,e);let l=$i(r,t,n,s,i,o);if(!a&&!c){const n=Yi(r,t);l=l.concat(Ps(e,t,n))}return l}function ms(e,t,n){const r=!0,i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(e,n)=>{const r=vt(e,t),i=Qi(n,r);if(i)return i});return Qr(i,t,s,n,r)}function bs(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const i=vt(e,n);r=r||Qi(t,i)});let i=e.syncPointTree_.get(n);i?r=r||Qi(i,ut()):(i=new Bi,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=null!=r,o=s?new _r(r,!0,!1):null,a=Br(e.pendingWriteTree_,t._path),c=zi(i,t,a,s?o.getNode():_n.EMPTY_NODE,s);return xi(c)}function ys(e,t){return vs(t,e.syncPointTree_,null,Br(e.pendingWriteTree_,ut()))}function vs(e,t,n,r){if(yt(e.path))return ws(e,t,n,r);{const i=t.get(ut());null==n&&null!=i&&(n=Qi(i,ut()));let s=[];const o=ht(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=ci(r,o);s=s.concat(vs(a,c,e,t))}return i&&(s=s.concat(Hi(i,e,r,n))),s}}function ws(e,t,n,r){const i=t.get(ut());null==n&&null!=i&&(n=Qi(i,ut()));let s=[];return t.children.inorderTraversal((t,i)=>{const o=n?n.getImmediateChild(t):null,a=ci(r,t),c=e.operationForChild(t);c&&(s=s.concat(ws(c,i,o,a)))}),i&&(s=s.concat(Hi(i,e,r,n))),s}function Cs(e,t){const n=t.query,r=Os(e,n);return{hashFn:()=>{const e=Ii(t)||_n.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?us(e,n._path,r):ls(e,n._path);{const r=W(t,n);return hs(e,n,null,r)}}}}function Os(e,t){const n=Es(t);return e.queryToTagMap.get(n)}function Es(e){return e._path.toString()+"$"+e._queryIdentifier}function js(e,t){return e.tagToQueryMap.get(t)}function Ss(e){const t=e.indexOf("$");return Object(s["e"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function ks(e,t,n){const r=e.syncPointTree_.get(t);Object(s["e"])(r,"Missing sync point for query tag that we're tracking");const i=Br(e.pendingWriteTree_,t);return Hi(r,n,i,null)}function Ts(e){return e.fold((e,t,n)=>{if(t&&Xi(t)){const e=Zi(t);return[e]}{let e=[];return t&&(e=Ki(t)),M(n,(t,n)=>{e=e.concat(n)}),e}})}function Is(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(ts())(e._repo,e._path):e}function xs(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=Es(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function Ns(){return ns++}function Ps(e,t,n){const r=t._path,i=Os(e,t),o=Cs(e,n),a=e.listenProvider_.startListening(Is(t),i,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(r);if(i)Object(s["e"])(!Xi(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!yt(e)&&t&&Xi(t))return[Zi(t).query];{let e=[];return t&&(e=e.concat(Ki(t).map(e=>e.query))),M(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(Is(r),Os(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Rs(t)}node(){return this.node_}}class As{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=bt(this.path_,e);return new As(this.syncTree_,t)}node(){return ms(this.syncTree_,this.path_)}}const Ds=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Fs=function(e,t,n){return e&&"object"===typeof e?(Object(s["e"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Ls(e[".sv"],t,n):"object"===typeof e[".sv"]?Ms(e[".sv"],t):void Object(s["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ls=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(s["e"])(!1,"Unexpected server value: "+e)}},Ms=function(e,t,n){e.hasOwnProperty("increment")||Object(s["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&Object(s["e"])(!1,"Unexpected increment value: "+r);const i=t.node();if(Object(s["e"])(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i,a=o.getValue();return"number"!==typeof a?r:a+r},qs=function(e,t,n,r){return Us(t,new As(n,e),r)},Bs=function(e,t,n){return Us(e,new Rs(t),n)};function Us(e,t,n){const r=e.getPriority().val(),i=Fs(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Fs(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new nn(s,yn(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new nn(i))),r.forEachChild(an,(e,r)=>{const i=Us(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))}),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Vs(e,t){let n=t instanceof lt?t:new lt(t),r=e,i=ht(n);while(null!==i){const e=Object(s["C"])(r.node.children,i)||{children:{},childCount:0};r=new Ws(i,r,e),n=pt(n),i=ht(n)}return r}function Hs(e){return e.node.value}function zs(e,t){e.node.value=t,Xs(e)}function $s(e){return e.node.childCount>0}function Gs(e){return void 0===Hs(e)&&!$s(e)}function Ks(e,t){M(e.node.children,(n,r)=>{t(new Ws(n,e,r))})}function Qs(e,t,n,r){n&&!r&&t(e),Ks(e,e=>{Qs(e,t,!0,r)}),n&&r&&t(e)}function Ys(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Js(e){return new lt(null===e.parent?e.name:Js(e.parent)+"/"+e.name)}function Xs(e){null!==e.parent&&Zs(e.parent,e.name,e)}function Zs(e,t,n){const r=Gs(n),i=Object(s["j"])(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Xs(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Xs(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=/[\[\].#$\/\u0000-\u001F\u007F]/,to=/[\[\].#$\u0000-\u001F\u007F]/,no=10485760,ro=function(e){return"string"===typeof e&&0!==e.length&&!eo.test(e)},io=function(e){return"string"===typeof e&&0!==e.length&&!to.test(e)},so=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),io(e)},oo=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!I(e)||e&&"object"===typeof e&&Object(s["j"])(e,".sv")},ao=function(e,t,n,r){r&&void 0===t||co(Object(s["p"])(e,"value"),t,n)},co=function(e,t,n){const r=n instanceof lt?new Et(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Tt(r));if("function"===typeof t)throw new Error(e+"contains a function "+Tt(r)+" with contents = "+t.toString());if(I(t))throw new Error(e+"contains "+t.toString()+" "+Tt(r));if("string"===typeof t&&t.length>no/3&&Object(s["D"])(t)>no)throw new Error(e+"contains a string greater than "+no+" utf8 bytes "+Tt(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(M(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!ro(t)))throw new Error(e+" contains an invalid key ("+t+") "+Tt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');jt(r,t),co(e,s,r),St(r)}),n&&i)throw new Error(e+' contains ".value" child '+Tt(r)+" in addition to actual children.")}},lo=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=gt(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!ro(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(wt);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&Ot(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},uo=function(e,t,n,r){if(r&&void 0===t)return;const i=Object(s["p"])(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const o=[];M(t,(e,t)=>{const r=new lt(e);if(co(i,t,bt(n,r)),".priority"===ft(r)&&!oo(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(r)}),lo(i,o)},ho=function(e,t,n){if(!n||void 0!==t){if(I(t))throw new Error(Object(s["p"])(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!oo(t))throw new Error(Object(s["p"])(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},po=function(e,t,n,r){if((!r||void 0!==n)&&!ro(n))throw new Error(Object(s["p"])(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},fo=function(e,t,n,r){if((!r||void 0!==n)&&!io(n))throw new Error(Object(s["p"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},_o=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),fo(e,t,n,r)},go=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},mo=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!ro(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!so(n))throw new Error(Object(s["p"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yo(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||Ct(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function vo(e,t,n){yo(e,n),Co(e,e=>Ct(e,t))}function wo(e,t,n){yo(e,n),Co(e,e=>Ot(e,t)||Ot(t,e))}function Co(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(Oo(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Oo(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();v&&O("event: "+n.toString()),G(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="repo_interrupt",jo=25;class So{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jn(),this.transactionQueueTree_=new Ws,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ko(e,t,n){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||K())e.server_=new Qn(e.repoInfo_,(t,n,r,i)=>{xo(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>No(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(s["F"])(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Lt(e.repoInfo_,t,(t,n,r,i)=>{xo(e,t,n,r,i)},t=>{No(e,t)},t=>{Po(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=me(e.repoInfo_,()=>new or(e.stats_,e.server_)),e.infoData_=new Yn,e.infoSyncTree_=new rs({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=as(e.infoSyncTree_,t._path,o),setTimeout(()=>{i("ok")},0)),s},stopListening:()=>{}}),Ro(e,"connected",!1),e.serverSyncTree_=new rs({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{const s=i(n,r);wo(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function To(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function Io(e){return Ds({timestamp:To(e)})}function xo(e,t,n,r,i){e.dataUpdateCount++;const o=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=Object(s["A"])(n,e=>yn(e));a=fs(e.serverSyncTree_,o,t,i)}else{const t=yn(n);a=ps(e.serverSyncTree_,o,t,i)}else if(r){const t=Object(s["A"])(n,e=>yn(e));a=cs(e.serverSyncTree_,o,t)}else{const t=yn(n);a=as(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=Zo(e,o)),wo(e.eventQueue_,c,a)}function No(e,t){Ro(e,"connected",t),!1===t&&Mo(e)}function Po(e,t){M(t,(t,n)=>{Ro(e,t,n)})}function Ro(e,t,n){const r=new lt("/.info/"+t),i=yn(n);e.infoData_.updateSnapshot(r,i);const s=as(e.infoSyncTree_,r,i);wo(e.eventQueue_,r,s)}function Ao(e){return e.nextWriteId_++}function Do(e,t){const n=bs(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then(n=>{const r=yn(n).withIndex(t._queryParams.getIndex());if(t._queryParams.loadsAllData())as(e.serverSyncTree_,t._path,r);else{const n=ds(e.serverSyncTree_,t);ps(e.serverSyncTree_,t._path,r,n)}const i=hs(e.serverSyncTree_,t,null);return i.length>0&&Go(e,"unexpected cancel events in repoGetValue"),r},n=>(Go(e,"get for query "+Object(s["F"])(t)+" failed: "+n),Promise.reject(new Error(n))))}function Fo(e,t,n,r,i){Go(e,"set",{path:t.toString(),value:n,priority:r});const s=Io(e),o=yn(n,r),a=ms(e.serverSyncTree_,t),c=Bs(o,a,s),l=Ao(e),u=is(e.serverSyncTree_,t,c,l,!0);yo(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),(n,r)=>{const s="ok"===n;s||k("set at "+t+" failed: "+n);const o=os(e.serverSyncTree_,l,!s);wo(e.eventQueue_,t,o),Ko(e,i,n,r)});const h=sa(e,t);Zo(e,h),wo(e.eventQueue_,h,[])}function Lo(e,t,n,r){Go(e,"update",{path:t.toString(),value:n});let i=!0;const s=Io(e),o={};if(M(n,(n,r)=>{i=!1,o[n]=qs(bt(t,n),yn(r),e.serverSyncTree_,s)}),i)O("update() called with empty data.  Don't do anything."),Ko(e,r,"ok",void 0);else{const i=Ao(e),s=ss(e.serverSyncTree_,t,o,i);yo(e.eventQueue_,s),e.server_.merge(t.toString(),n,(n,s)=>{const o="ok"===n;o||k("update at "+t+" failed: "+n);const a=os(e.serverSyncTree_,i,!o),c=a.length>0?Zo(e,t):t;wo(e.eventQueue_,c,a),Ko(e,r,n,s)}),M(n,n=>{const r=sa(e,bt(t,n));Zo(e,r)}),wo(e.eventQueue_,t,[])}}function Mo(e){Go(e,"onDisconnectEvents");const t=Io(e),n=Jn();er(e.onDisconnect_,ut(),(r,i)=>{const s=qs(r,i,e.serverSyncTree_,t);Xn(n,r,s)});let r=[];er(n,ut(),(t,n)=>{r=r.concat(as(e.serverSyncTree_,t,n));const i=sa(e,t);Zo(e,i)}),e.onDisconnect_=Jn(),wo(e.eventQueue_,ut(),r)}function qo(e,t,n){e.server_.onDisconnectCancel(t.toString(),(r,i)=>{"ok"===r&&Zn(e.onDisconnect_,t),Ko(e,n,r,i)})}function Bo(e,t,n,r){const i=yn(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),(n,s)=>{"ok"===n&&Xn(e.onDisconnect_,t,i),Ko(e,r,n,s)})}function Uo(e,t,n,r,i){const s=yn(n,r);e.server_.onDisconnectPut(t.toString(),s.val(!0),(n,r)=>{"ok"===n&&Xn(e.onDisconnect_,t,s),Ko(e,i,n,r)})}function Wo(e,t,n,r){if(Object(s["t"])(n))return O("onDisconnect().update() called with empty data.  Don't do anything."),void Ko(e,r,"ok",void 0);e.server_.onDisconnectMerge(t.toString(),n,(i,s)=>{"ok"===i&&M(n,(n,r)=>{const i=yn(r);Xn(e.onDisconnect_,bt(t,n),i)}),Ko(e,r,i,s)})}function Vo(e,t,n){let r;r=".info"===ht(t._path)?gs(e.infoSyncTree_,t,n):gs(e.serverSyncTree_,t,n),vo(e.eventQueue_,t._path,r)}function Ho(e,t,n){let r;r=".info"===ht(t._path)?hs(e.infoSyncTree_,t,n):hs(e.serverSyncTree_,t,n),vo(e.eventQueue_,t._path,r)}function zo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Eo)}function $o(e){e.persistentConnection_&&e.persistentConnection_.resume(Eo)}function Go(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),O(n,...t)}function Ko(e,t,n,r){t&&G(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}})}function Qo(e,t,n,r,i,o){Go(e,"transaction on "+t);const a={path:t,update:n,onComplete:r,status:null,order:m(),applyLocally:o,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},c=Yo(e,t,void 0);a.currentInputSnapshot=c;const l=a.update(c.val());if(void 0===l)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{co("transaction failed: Data returned ",l,a.path),a.status=0;const n=Vs(e.transactionQueueTree_,t),r=Hs(n)||[];let i;if(r.push(a),zs(n,r),"object"===typeof l&&null!==l&&Object(s["j"])(l,".priority"))i=Object(s["C"])(l,".priority"),Object(s["e"])(oo(i),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{const n=ms(e.serverSyncTree_,t)||_n.EMPTY_NODE;i=n.getPriority().val()}const o=Io(e),u=yn(l,i),h=Bs(u,c,o);a.currentOutputSnapshotRaw=u,a.currentOutputSnapshotResolved=h,a.currentWriteId=Ao(e);const d=is(e.serverSyncTree_,t,h,a.currentWriteId,a.applyLocally);wo(e.eventQueue_,t,d),Jo(e,e.transactionQueueTree_)}}function Yo(e,t,n){return ms(e.serverSyncTree_,t,n)||_n.EMPTY_NODE}function Jo(e,t=e.transactionQueueTree_){if(t||ia(e,t),Hs(t)){const n=na(e,t);Object(s["e"])(n.length>0,"Sending zero length transaction queue");const r=n.every(e=>0===e.status);r&&Xo(e,Js(t),n)}else $s(t)&&Ks(t,t=>{Jo(e,t)})}function Xo(e,t,n){const r=n.map(e=>e.currentWriteId),i=Yo(e,t,r);let o=i;const a=i.hash();for(let u=0;u<n.length;u++){const e=n[u];Object(s["e"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=vt(t,e.path);o=o.updateChild(r,e.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,r=>{Go(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(os(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();ia(e,Vs(e.transactionQueueTree_,t)),Jo(e,e.transactionQueueTree_),wo(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)G(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{k("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Zo(e,t)}},a)}function Zo(e,t){const n=ta(e,t),r=Js(n),i=na(e,n);return ea(e,i,r),r}function ea(e,t,n){if(0===t.length)return;const r=[];let i=[];const o=t.filter(e=>0===e.status),a=o.map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const o=t[c],l=vt(n,o.path);let u,h=!1;if(Object(s["e"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,i=i.concat(os(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=jo)h=!0,u="maxretry",i=i.concat(os(e.serverSyncTree_,o.currentWriteId,!0));else{const n=Yo(e,o.path,a);o.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){co("transaction failed: Data returned ",r,o.path);let t=yn(r);const c="object"===typeof r&&null!=r&&Object(s["j"])(r,".priority");c||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,u=Io(e),h=Bs(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=Ao(e),a.splice(a.indexOf(l),1),i=i.concat(is(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),i=i.concat(os(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",i=i.concat(os(e.serverSyncTree_,o.currentWriteId,!0))}wo(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?r.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):r.push(()=>t[c].onComplete(new Error(u),!1,null))))}ia(e,e.transactionQueueTree_);for(let s=0;s<r.length;s++)G(r[s]);Jo(e,e.transactionQueueTree_)}function ta(e,t){let n,r=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Hs(r))r=Vs(r,n),t=pt(t),n=ht(t);return r}function na(e,t){const n=[];return ra(e,t,n),n.sort((e,t)=>e.order-t.order),n}function ra(e,t,n){const r=Hs(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ks(t,t=>{ra(e,t,n)})}function ia(e,t){const n=Hs(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,zs(t,n.length>0?n:void 0)}Ks(t,t=>{ia(e,t)})}function sa(e,t){const n=Js(ta(e,t)),r=Vs(e.transactionQueueTree_,t);return Ys(r,t=>{oa(e,t)}),oa(e,r),Qs(r,t=>{oa(e,t)}),n}function oa(e,t){const n=Hs(t);if(n){const r=[];let i=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(s["e"])(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(Object(s["e"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(os(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?zs(t,void 0):n.length=o+1,wo(e.eventQueue_,Js(t),i);for(let e=0;e<r.length;e++)G(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function ca(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):k(`Invalid query segment '${n}' in query '${e}'`)}return t}const la=function(e,t){const n=ua(e),r=n.namespace;"firebase.com"===n.domain&&S(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||S("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||T();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new lt(n.pathString)}},ua=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=aa(e.substring(u,h)));const d=ca(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ha{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(s["F"])(this.snapshot.exportVal())}}class da{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(s["e"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new s["a"];return qo(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){go("OnDisconnect.remove",this._path);const e=new s["a"];return Bo(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){go("OnDisconnect.set",this._path),ao("OnDisconnect.set",e,this._path,!1);const t=new s["a"];return Bo(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){go("OnDisconnect.setWithPriority",this._path),ao("OnDisconnect.setWithPriority",e,this._path,!1),ho("OnDisconnect.setWithPriority",t,!1);const n=new s["a"];return Uo(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){go("OnDisconnect.update",this._path),uo("OnDisconnect.update",e,this._path,!1);const t=new s["a"];return Wo(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return yt(this._path)?null:ft(this._path)}get ref(){return new ya(this._repo,this._path)}get _queryIdentifier(){const e=Kn(this._queryParams),t=F(e);return"{}"===t?"default":t}get _queryObject(){return Kn(this._queryParams)}isEqual(e){if(e=Object(s["q"])(e),!(e instanceof _a))return!1;const t=this._repo===e._repo,n=Ct(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+_t(this._path)}}function ga(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function ma(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Wt){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const n=e.getIndexStartName();if(n!==N)throw new Error(r);if("string"!==typeof t)throw new Error(i)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==P)throw new Error(r);if("string"!==typeof n)throw new Error(i)}}else if(e.getIndex()===an){if(null!=t&&!oo(t)||null!=n&&!oo(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Object(s["e"])(e.getIndex()instanceof vn||e.getIndex()===Cn,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function ba(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class ya extends _a{constructor(e,t){super(e,t,new Mn,!1)}get parent(){const e=mt(this._path);return null===e?null:new ya(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class va{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=Oa(this.ref,e);return new va(this._node.getChild(t),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new va(n,Oa(this.ref,t),an)))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wa(e,t){return e=Object(s["q"])(e),e._checkNotDeleted("ref"),void 0!==t?Oa(e._root,t):e._root}function Ca(e,t){e=Object(s["q"])(e),e._checkNotDeleted("refFromURL");const n=la(t,e._repo.repoInfo_.nodeAdmin);mo("refFromURL",n);const r=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||r.host===e._repo.repoInfo_.host||S("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),wa(e,n.path.toString())}function Oa(e,t){return e=Object(s["q"])(e),null===ht(e._path)?_o("child","path",t,!1):fo("child","path",t,!1),new ya(e._repo,bt(e._path,t))}function Ea(e,t){e=Object(s["q"])(e),go("push",e._path),ao("push",t,e._path,!0);const n=To(e._repo),r=kn(n),i=Oa(e,r),o=Oa(e,r);let a;return a=null!=t?Sa(o,t).then(()=>o):Promise.resolve(o),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function ja(e){return go("remove",e._path),Sa(e,null)}function Sa(e,t){e=Object(s["q"])(e),go("set",e._path),ao("set",t,e._path,!1);const n=new s["a"];return Fo(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function ka(e,t){e=Object(s["q"])(e),go("setPriority",e._path),ho("setPriority",t,!1);const n=new s["a"];return Fo(e._repo,bt(e._path,".priority"),t,null,n.wrapCallback(()=>{})),n.promise}function Ta(e,t,n){if(go("setWithPriority",e._path),ao("setWithPriority",t,e._path,!1),ho("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";const r=new s["a"];return Fo(e._repo,e._path,t,n,r.wrapCallback(()=>{})),r.promise}function Ia(e,t){uo("update",t,e._path,!1);const n=new s["a"];return Lo(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function xa(e){return e=Object(s["q"])(e),Do(e._repo,e).then(t=>new va(t,new ya(e._repo,e._path),e._queryParams.getIndex()))}class Na{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new ha("value",this,new va(e.snapshotNode,new ya(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new da(this,e,t):null}matches(e){return e instanceof Na&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Pa{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new da(this,e,t):null}createEvent(e,t){Object(s["e"])(null!=e.childName,"Child events should have a childName.");const n=Oa(new ya(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new ha(e.type,this,new va(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Pa&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Ra(e,t,n,r,i){let s;if("object"===typeof r&&(s=void 0,i=r),"function"===typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{Ho(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new pa(n,s||void 0),a="value"===t?new Na(o):new Pa(t,o);return Vo(e._repo,e,a),()=>Ho(e._repo,e,a)}function Aa(e,t,n,r){return Ra(e,"value",t,n,r)}function Da(e,t,n,r){return Ra(e,"child_added",t,n,r)}function Fa(e,t,n,r){return Ra(e,"child_changed",t,n,r)}function La(e,t,n,r){return Ra(e,"child_moved",t,n,r)}function Ma(e,t,n,r){return Ra(e,"child_removed",t,n,r)}function qa(e,t,n){let r=null;const i=n?new pa(n):null;"value"===t?r=new Na(i):t&&(r=new Pa(t,i)),Ho(e._repo,e,r)}class Ba{}class Ua extends Ba{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){ao("endAt",this._value,e._path,!0);const t=Hn(e._queryParams,this._value,this._key);if(ba(t),ma(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new _a(e._repo,e._path,t,e._orderByCalled)}}function Wa(e,t){return po("endAt","key",t,!0),new Ua(e,t)}class Va extends Ba{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){ao("endBefore",this._value,e._path,!1);const t=zn(e._queryParams,this._value,this._key);if(ba(t),ma(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new _a(e._repo,e._path,t,e._orderByCalled)}}function Ha(e,t){return po("endBefore","key",t,!0),new Va(e,t)}class za extends Ba{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){ao("startAt",this._value,e._path,!0);const t=Wn(e._queryParams,this._value,this._key);if(ba(t),ma(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new _a(e._repo,e._path,t,e._orderByCalled)}}function $a(e=null,t){return po("startAt","key",t,!0),new za(e,t)}class Ga extends Ba{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){ao("startAfter",this._value,e._path,!1);const t=Vn(e._queryParams,this._value,this._key);if(ba(t),ma(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new _a(e._repo,e._path,t,e._orderByCalled)}}function Ka(e,t){return po("startAfter","key",t,!0),new Ga(e,t)}class Qa extends Ba{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new _a(e._repo,e._path,Bn(e._queryParams,this._limit),e._orderByCalled)}}function Ya(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Qa(e)}class Ja extends Ba{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new _a(e._repo,e._path,Un(e._queryParams,this._limit),e._orderByCalled)}}function Xa(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Ja(e)}class Za extends Ba{constructor(e){super(),this._path=e}_apply(e){ga(e,"orderByChild");const t=new lt(this._path);if(yt(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new vn(t),r=$n(e._queryParams,n);return ma(r),new _a(e._repo,e._path,r,!0)}}function ec(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return fo("orderByChild","path",e,!1),new Za(e)}class tc extends Ba{_apply(e){ga(e,"orderByKey");const t=$n(e._queryParams,Wt);return ma(t),new _a(e._repo,e._path,t,!0)}}function nc(){return new tc}class rc extends Ba{_apply(e){ga(e,"orderByPriority");const t=$n(e._queryParams,an);return ma(t),new _a(e._repo,e._path,t,!0)}}function ic(){return new rc}class sc extends Ba{_apply(e){ga(e,"orderByValue");const t=$n(e._queryParams,Cn);return ma(t),new _a(e._repo,e._path,t,!0)}}function oc(){return new sc}class ac extends Ba{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(ao("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Ua(this._value,this._key)._apply(new za(this._value,this._key)._apply(e))}}function cc(e,t){return po("equalTo","key",t,!0),new ac(e,t)}function lc(e,...t){let n=Object(s["q"])(e);for(const r of t)n=r._apply(n);return n}Ui(ya),es(ya);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const uc="FIREBASE_DATABASE_EMULATOR_HOST",hc={};let dc=!1;function pc(e,t,n,r){e.repoInfo_=new ue(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function fc(t,n,r,i,s){let o=i||t.options.databaseURL;void 0===o&&(t.options.projectId||S("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),O("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=la(o,s),l=c.repoInfo,u=void 0;"undefined"!==typeof e&&Object({NODE_ENV:"production",BASE_URL:"/anonymous-chat/"})&&(u=Object({NODE_ENV:"production",BASE_URL:"/anonymous-chat/"})[uc]),u?(a=!0,o=`http://${u}?ns=${l.namespace}`,c=la(o,s),l=c.repoInfo):a=!c.repoInfo.secure;const h=s&&a?new X(X.OWNER):new J(t.name,t.options,n);mo("Invalid Firebase Database URL",c),yt(c.path)||S("Database URL must point to the root of a Firebase Database (not including a child path).");const d=gc(l,t,h,new Y(t.name,r));return new mc(d,t)}function _c(e,t){const n=hc[t];n&&n[e.key]===e||S(`Database ${t}(${e.repoInfo_}) has already been deleted.`),zo(e),delete n[e.key]}function gc(e,t,n,r){let i=hc[t.name];i||(i={},hc[t.name]=i);let s=i[e.toURLString()];return s&&S("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new So(e,dc,n,r),i[e.toURLString()]=s,s}class mc{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ko(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ya(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(_c(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&S("Cannot call "+e+" on a deleted database.")}}function bc(){We.IS_TRANSPORT_INITIALIZED&&k("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function yc(){bc(),Fe.forceDisallow()}function vc(){bc(),Ue.forceDisallow(),Fe.forceAllow()}function wc(e,t,n,r={}){e=Object(s["q"])(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&S("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let o=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&S('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new X(X.OWNER);else if(r.mockUserToken){const t="string"===typeof r.mockUserToken?r.mockUserToken:Object(s["k"])(r.mockUserToken,e.app.options.projectId);o=new X(t)}pc(i,t,n,o)}function Cc(e){e=Object(s["q"])(e),e._checkNotDeleted("goOffline"),zo(e._repo)}function Oc(e){e=Object(s["q"])(e),e._checkNotDeleted("goOnline"),$o(e._repo)}function Ec(e,t){C(e,t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(e){u(r["SDK_VERSION"]),Object(r["_registerComponent"])(new i["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return fc(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Object(r["registerVersion"])(a,c,e),Object(r["registerVersion"])(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc={".sv":"timestamp"};function kc(){return Sc}function Tc(e){return{".sv":{increment:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function xc(e,t,n){var r;if(e=Object(s["q"])(e),go("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const i=null===(r=null===n||void 0===n?void 0:n.applyLocally)||void 0===r||r,o=new s["a"],a=(t,n,r)=>{let i=null;t?o.reject(t):(i=new va(r,new ya(e._repo,e._path),an),o.resolve(new Ic(n,i)))},c=Aa(e,()=>{});return Qo(e._repo,e._path,t,a,c,i),o.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Lt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};jc()}).call(this,n("4362"))},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"FirebaseError",(function(){return s["c"]})),n.d(t,"SDK_VERSION",(function(){return be})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return se})),n.d(t,"_addComponent",(function(){return le})),n.d(t,"_addOrOverwriteComponent",(function(){return ue})),n.d(t,"_apps",(function(){return ae})),n.d(t,"_clearComponents",(function(){return fe})),n.d(t,"_components",(function(){return ce})),n.d(t,"_getProvider",(function(){return de})),n.d(t,"_registerComponent",(function(){return he})),n.d(t,"_removeServiceInstance",(function(){return pe})),n.d(t,"deleteApp",(function(){return Ce})),n.d(t,"getApp",(function(){return ve})),n.d(t,"getApps",(function(){return we})),n.d(t,"initializeApp",(function(){return ye})),n.d(t,"onLog",(function(){return Ee})),n.d(t,"registerVersion",(function(){return Oe})),n.d(t,"setLogLevel",(function(){return je}));var r=n("22e5"),i=n("e691"),s=n("1fd5");const o=(e,t)=>t.some(t=>e instanceof t);let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap,_=new WeakMap;function g(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(C(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),_.set(t,e),t}function m(e){if(d.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});d.set(e,t)}let b={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){b=e(b)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(O(this),t),C(h.get(this))}:function(...t){return C(e.apply(O(this),t))}:function(t,...n){const r=e.call(O(this),t,...n);return p.set(r,t.sort?t.sort():[t]),C(r)}}function w(e){return"function"===typeof e?v(e):(e instanceof IDBTransaction&&m(e),o(e,l())?new Proxy(e,b):e)}function C(e){if(e instanceof IDBRequest)return g(e);if(f.has(e))return f.get(e);const t=w(e);return t!==e&&(f.set(e,t),_.set(t,e)),t}const O=e=>_.get(e);function E(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=C(o);return r&&o.addEventListener("upgradeneeded",e=>{r(C(o.result),e.oldVersion,e.newVersion,C(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const j=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],k=new Map;function T(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!j.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return k.set(t,s),s}y(e=>({...e,get:(t,n,r)=>T(t,n)||e.get(t,n,r),has:(t,n)=>!!T(t,n)||e.has(t,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(x(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function x(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",P="0.7.29",R=new i["b"]("@firebase/app"),A="@firebase/app-compat",D="@firebase/analytics-compat",F="@firebase/analytics",L="@firebase/app-check-compat",M="@firebase/app-check",q="@firebase/auth",B="@firebase/auth-compat",U="@firebase/database",W="@firebase/database-compat",V="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",$="@firebase/installations-compat",G="@firebase/messaging",K="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.9.1",se="[DEFAULT]",oe={[N]:"fire-core",[A]:"fire-core-compat",[F]:"fire-analytics",[D]:"fire-analytics-compat",[M]:"fire-app-check",[L]:"fire-app-check-compat",[q]:"fire-auth",[B]:"fire-auth-compat",[U]:"fire-rtdb",[W]:"fire-rtdb-compat",[V]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[$]:"fire-iid-compat",[G]:"fire-fcm",[K]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){R.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return R.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())le(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function pe(e,t,n=se){de(e,t).clearInstance(n)}function fe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ge=new s["b"]("app","Firebase",_e);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=ie;function ye(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw ge.create("bad-app-name",{appName:String(i)});const o=ae.get(i);if(o){if(Object(s["n"])(e,o.options)&&Object(s["n"])(n,o.config))return o;throw ge.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of ce.values())a.addComponent(r);const c=new me(e,n,a);return ae.set(i,c),c}function ve(e=se){const t=ae.get(e);if(!t)throw ge.create("no-app",{appName:e});return t}function we(){return Array.from(ae.values())}async function Ce(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function Oe(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void R.warn(e.join(" "))}he(new r["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}function Ee(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");Object(i["d"])(e,t)}function je(e){Object(i["c"])(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="firebase-heartbeat-database",ke=1,Te="firebase-heartbeat-store";let Ie=null;function xe(){return Ie||(Ie=E(Se,ke,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Te)}}}).catch(e=>{throw ge.create("storage-open",{originalErrorMessage:e.message})})),Ie}async function Ne(e){var t;try{const t=await xe();return t.transaction(Te).objectStore(Te).get(Re(e))}catch(n){throw ge.create("storage-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message})}}async function Pe(e,t){var n;try{const n=await xe(),r=n.transaction(Te,"readwrite"),i=r.objectStore(Te);return await i.put(t,Re(e)),r.done}catch(r){throw ge.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=1024,De=2592e6;class Fe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qe(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Le();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=De}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Le(),{heartbeatsToSend:t,unsentEntries:n}=Me(this._heartbeatsCache.heartbeats),r=Object(s["i"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Le(){const e=new Date;return e.toISOString().substring(0,10)}function Me(e,t=Ae){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Be(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Be(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s["u"])()&&Object(s["J"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Pe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Pe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Be(e){return Object(s["i"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){he(new r["a"]("platform-logger",e=>new I(e),"PRIVATE")),he(new r["a"]("heartbeat",e=>new Fe(e),"PRIVATE")),Oe(N,P,e),Oe(N,P,"esm2017"),Oe("fire-js","")}Ue("")},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},"7a23":function(e,t,n){"use strict";n.d(t,"h",(function(){return ve})),n.d(t,"e",(function(){return r["J"]})),n.d(t,"j",(function(){return r["M"]})),n.d(t,"a",(function(){return hr})),n.d(t,"c",(function(){return Cr})),n.d(t,"d",(function(){return Tr})),n.d(t,"f",(function(){return an})),n.d(t,"g",(function(){return mr})),n.d(t,"i",(function(){return yn})),n.d(t,"l",(function(){return gn})),n.d(t,"b",(function(){return ds})),n.d(t,"k",(function(){return ss})),n.d(t,"m",(function(){return cs}));var r=n("9ff4");let i;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&f)>0,l=e=>(e.n&f)>0,u=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=f},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~f,i.n&=~f}t.length=n}},d=new WeakMap;let p=0,f=1;const _=30;let g;const m=Symbol(""),b=Symbol("");class y{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=g,t=w;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,w=!0,f=1<<++p,p<=_?u(this):v(this),this.fn()}finally{p<=_&&h(this),f=1<<--p,g=this.parent,w=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(v(this),this.onStop&&this.onStop(),this.active=!1)}}function v(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let w=!0;const C=[];function O(){C.push(w),w=!1}function E(){const e=C.pop();w=void 0===e||e}function j(e,t,n){if(w&&g){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;S(r,i)}}function S(e,t){let n=!1;p<=_?l(e)||(e.n|=f,n=!c(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function k(e,t,n,i,s,o){const c=d.get(e);if(!c)return;let l=[];if("clear"===t)l=[...c.values()];else if("length"===n&&Object(r["o"])(e))c.forEach((e,t)=>{("length"===t||t>=i)&&l.push(e)});else switch(void 0!==n&&l.push(c.get(n)),t){case"add":Object(r["o"])(e)?Object(r["t"])(n)&&l.push(c.get("length")):(l.push(c.get(m)),Object(r["u"])(e)&&l.push(c.get(b)));break;case"delete":Object(r["o"])(e)||(l.push(c.get(m)),Object(r["u"])(e)&&l.push(c.get(b)));break;case"set":Object(r["u"])(e)&&l.push(c.get(m));break}if(1===l.length)l[0]&&T(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);T(a(e))}}function T(e,t){const n=Object(r["o"])(e)?e:[...e];for(const r of n)r.computed&&I(r,t);for(const r of n)r.computed||I(r,t)}function I(e,t){(e!==g||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const x=Object(r["I"])("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>"arguments"!==e&&"caller"!==e).map(e=>Symbol[e]).filter(r["F"])),P=L(),R=L(!1,!0),A=L(!0),D=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Te(this);for(let t=0,i=this.length;t<i;t++)j(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Te)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){O();const n=Te(this)[t].apply(this,e);return E(),n}}),e}function L(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?me:ge:t?_e:fe).get(n))return n;const o=Object(r["o"])(n);if(!e&&o&&Object(r["k"])(D,i))return Reflect.get(D,i,s);const a=Reflect.get(n,i,s);return(Object(r["F"])(i)?N.has(i):x(i))?a:(e||j(n,"get",i),t?a:Ae(a)?o&&Object(r["t"])(i)?a:a.value:Object(r["w"])(a)?e?Ce(a):ve(a):a)}}const M=B(),q=B(!0);function B(e=!1){return function(t,n,i,s){let o=t[n];if(je(o)&&Ae(o)&&!Ae(i))return!1;if(!e&&!je(i)&&(Se(i)||(i=Te(i),o=Te(o)),!Object(r["o"])(t)&&Ae(o)&&!Ae(i)))return o.value=i,!0;const a=Object(r["o"])(t)&&Object(r["t"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,i,s);return t===Te(s)&&(a?Object(r["j"])(i,o)&&k(t,"set",n,i,o):k(t,"add",n,i)),c}}function U(e,t){const n=Object(r["k"])(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&k(e,"delete",t,void 0,i),s}function W(e,t){const n=Reflect.has(e,t);return Object(r["F"])(t)&&N.has(t)||j(e,"has",t),n}function V(e){return j(e,"iterate",Object(r["o"])(e)?"length":m),Reflect.ownKeys(e)}const H={get:P,set:M,deleteProperty:U,has:W,ownKeys:V},z={get:A,set(e,t){return!0},deleteProperty(e,t){return!0}},$=Object(r["h"])({},H,{get:R,set:q}),G=e=>e,K=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Te(e),s=Te(t);n||(t!==s&&j(i,"get",t),j(i,"get",s));const{has:o}=K(i),a=r?G:n?Ne:xe;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Y(e,t=!1){const n=this["__v_raw"],r=Te(n),i=Te(e);return t||(e!==i&&j(r,"has",e),j(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function J(e,t=!1){return e=e["__v_raw"],!t&&j(Te(e),"iterate",m),Reflect.get(e,"size",e)}function X(e){e=Te(e);const t=Te(this),n=K(t),r=n.has.call(t,e);return r||(t.add(e),k(t,"add",e,e)),this}function Z(e,t){t=Te(t);const n=Te(this),{has:i,get:s}=K(n);let o=i.call(n,e);o||(e=Te(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?Object(r["j"])(t,a)&&k(n,"set",e,t,a):k(n,"add",e,t),this}function ee(e){const t=Te(this),{has:n,get:r}=K(t);let i=n.call(t,e);i||(e=Te(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&k(t,"delete",e,void 0,s),o}function te(){const e=Te(this),t=0!==e.size,n=void 0,r=e.clear();return t&&k(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Te(s),a=t?G:e?Ne:xe;return!e&&j(o,"iterate",m),s.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function re(e,t,n){return function(...i){const s=this["__v_raw"],o=Te(s),a=Object(r["u"])(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...i),h=n?G:t?Ne:xe;return!t&&j(o,"iterate",l?b:m),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function se(){const e={get(e){return Q(this,e)},get size(){return J(this)},has:Y,add:X,set:Z,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return J(this)},has:Y,add:X,set:Z,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return J(this,!0)},has(e){return Y.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return J(this,!0)},has(e){return Y.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)}),[e,n,t,r]}const[oe,ae,ce,le]=se();function ue(e,t){const n=t?e?le:ce:e?ae:oe;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,s)}const he={get:ue(!1,!1)},de={get:ue(!1,!0)},pe={get:ue(!0,!1)};const fe=new WeakMap,_e=new WeakMap,ge=new WeakMap,me=new WeakMap;function be(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ye(e){return e["__v_skip"]||!Object.isExtensible(e)?0:be(Object(r["P"])(e))}function ve(e){return je(e)?e:Oe(e,!1,H,he,fe)}function we(e){return Oe(e,!1,$,de,_e)}function Ce(e){return Oe(e,!0,z,pe,ge)}function Oe(e,t,n,i,s){if(!Object(r["w"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=ye(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Ee(e){return je(e)?Ee(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function je(e){return!(!e||!e["__v_isReadonly"])}function Se(e){return!(!e||!e["__v_isShallow"])}function ke(e){return Ee(e)||je(e)}function Te(e){const t=e&&e["__v_raw"];return t?Te(t):e}function Ie(e){return Object(r["g"])(e,"__v_skip",!0),e}const xe=e=>Object(r["w"])(e)?ve(e):e,Ne=e=>Object(r["w"])(e)?Ce(e):e;function Pe(e){w&&g&&(e=Te(e),S(e.dep||(e.dep=a())))}function Re(e,t){e=Te(e),e.dep&&T(e.dep)}function Ae(e){return!(!e||!0!==e.__v_isRef)}function De(e){return Ae(e)?e.value:e}const Fe={get:(e,t,n)=>De(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ae(i)&&!Ae(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Le(e){return Ee(e)?e:new Proxy(e,Fe)}class Me{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new y(e,()=>{this._dirty||(this._dirty=!0,Re(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Te(this);return Pe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qe(e,t,n=!1){let i,s;const o=Object(r["q"])(e);o?(i=e,s=r["d"]):(i=e.get,s=e.set);const a=new Me(i,s,o||!s,n);return a}function Be(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){We(s,t,n)}return i}function Ue(e,t,n,i){if(Object(r["q"])(e)){const s=Be(e,t,n,i);return s&&Object(r["z"])(s)&&s.catch(e=>{We(e,t,n)}),s}const s=[];for(let r=0;r<e.length;r++)s.push(Ue(e[r],t,n,i));return s}function We(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void Be(o,null,10,[e,i,s])}Ve(e,n,i,r)}function Ve(e,t,n,r=!0){console.error(e)}let He=!1,ze=!1;const $e=[];let Ge=0;const Ke=[];let Qe=null,Ye=0;const Je=[];let Xe=null,Ze=0;const et=Promise.resolve();let tt=null,nt=null;function rt(e){const t=tt||et;return e?t.then(this?e.bind(this):e):t}function it(e){let t=Ge+1,n=$e.length;while(t<n){const r=t+n>>>1,i=pt($e[r]);i<e?t=r+1:n=r}return t}function st(e){$e.length&&$e.includes(e,He&&e.allowRecurse?Ge+1:Ge)||e===nt||(null==e.id?$e.push(e):$e.splice(it(e.id),0,e),ot())}function ot(){He||ze||(ze=!0,tt=et.then(ft))}function at(e){const t=$e.indexOf(e);t>Ge&&$e.splice(t,1)}function ct(e,t,n,i){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),ot()}function lt(e){ct(e,Qe,Ke,Ye)}function ut(e){ct(e,Xe,Je,Ze)}function ht(e,t=null){if(Ke.length){for(nt=t,Qe=[...new Set(Ke)],Ke.length=0,Ye=0;Ye<Qe.length;Ye++)Qe[Ye]();Qe=null,Ye=0,nt=null,ht(e,t)}}function dt(e){if(ht(),Je.length){const e=[...new Set(Je)];if(Je.length=0,Xe)return void Xe.push(...e);for(Xe=e,Xe.sort((e,t)=>pt(e)-pt(t)),Ze=0;Ze<Xe.length;Ze++)Xe[Ze]();Xe=null,Ze=0}}const pt=e=>null==e.id?1/0:e.id;function ft(e){ze=!1,He=!0,ht(e),$e.sort((e,t)=>pt(e)-pt(t));r["d"];try{for(Ge=0;Ge<$e.length;Ge++){const e=$e[Ge];e&&!1!==e.active&&Be(e,null,14)}}finally{Ge=0,$e.length=0,dt(e),He=!1,tt=null,($e.length||Ke.length||Je.length)&&ft(e)}}new Set;new Map;function _t(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r["b"];let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in i){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:o}=i[e]||r["b"];o&&(s=n.map(e=>e.trim())),t&&(s=n.map(r["O"]))}let c;let l=i[c=Object(r["N"])(t)]||i[c=Object(r["N"])(Object(r["e"])(t))];!l&&o&&(l=i[c=Object(r["N"])(Object(r["l"])(t))]),l&&Ue(l,e,6,s);const u=i[c+"Once"];if(u){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,Ue(u,e,6,s)}}function gt(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!Object(r["q"])(e)){const i=e=>{const n=gt(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return o||c?(Object(r["o"])(o)?o.forEach(e=>a[e]=null):Object(r["h"])(a,o),i.set(e,a),a):(i.set(e,null),null)}function mt(e,t){return!(!e||!Object(r["x"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let bt=null,yt=null;function vt(e){const t=bt;return bt=e,yt=e&&e.type.__scopeId||null,t}function wt(e,t=bt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&vr(-1);const i=vt(t),s=e(...n);return vt(i),r._d&&vr(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function Ct(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:l,emit:u,render:h,renderCache:d,data:p,setupState:f,ctx:_,inheritAttrs:g}=e;let m,b;const y=vt(e);try{if(4&n.shapeFlag){const e=s||i;m=Ar(h.call(e,e,d,o,f,p,_)),b=l}else{const e=t;0,m=Ar(e.length>1?e(o,{attrs:l,slots:c,emit:u}):e(o,null)),b=t.props?l:Ot(l)}}catch(w){_r.length=0,We(w,e,1),m=Ir(pr)}let v=m;if(b&&!1!==g){const e=Object.keys(b),{shapeFlag:t}=v;e.length&&7&t&&(a&&e.some(r["v"])&&(b=Et(b,a)),v=Pr(v,b))}return n.dirs&&(v=Pr(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),m=v,vt(y),m}const Ot=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["x"])(n))&&((t||(t={}))[n]=e[n]);return t},Et=(e,t)=>{const n={};for(const i in e)Object(r["v"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function jt(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||St(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?St(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!mt(l,n))return!0}}return!1}function St(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!mt(n,s))return!0}return!1}function kt({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Tt=e=>e.__isSuspense;function It(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):ut(e)}function xt(e,t){if(Wr){let n=Wr.provides;const r=Wr.parent&&Wr.parent.provides;r===n&&(n=Wr.provides=Object.create(r)),n[e]=t}else 0}function Nt(e,t,n=!1){const i=Wr||bt;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Object(r["q"])(t)?t.call(i.proxy):t}else 0}const Pt={};function Rt(e,t,n){return At(e,t,n)}function At(e,t,{immediate:n,deep:i,flush:s,onTrack:o,onTrigger:a}=r["b"]){const c=Wr;let l,u,h=!1,d=!1;if(Ae(e)?(l=()=>e.value,h=Se(e)):Ee(e)?(l=()=>e,i=!0):Object(r["o"])(e)?(d=!0,h=e.some(e=>Ee(e)||Se(e)),l=()=>e.map(e=>Ae(e)?e.value:Ee(e)?Lt(e):Object(r["q"])(e)?Be(e,c,2):void 0)):l=Object(r["q"])(e)?t?()=>Be(e,c,2):()=>{if(!c||!c.isUnmounted)return u&&u(),Ue(e,c,3,[p])}:r["d"],t&&i){const e=l;l=()=>Lt(e())}let p=e=>{u=m.onStop=()=>{Be(e,c,4)}};if(Qr)return p=r["d"],t?n&&Ue(t,c,3,[l(),d?[]:void 0,p]):l(),r["d"];let f=d?[]:Pt;const _=()=>{if(m.active)if(t){const e=m.run();(i||h||(d?e.some((e,t)=>Object(r["j"])(e,f[t])):Object(r["j"])(e,f)))&&(u&&u(),Ue(t,c,3,[e,f===Pt?void 0:f,p]),f=e)}else m.run()};let g;_.allowRecurse=!!t,g="sync"===s?_:"post"===s?()=>ir(_,c&&c.suspense):()=>lt(_);const m=new y(l,g);return t?n?_():f=m.run():"post"===s?ir(m.run.bind(m),c&&c.suspense):m.run(),()=>{m.stop(),c&&c.scope&&Object(r["L"])(c.scope.effects,m)}}function Dt(e,t,n){const i=this.proxy,s=Object(r["E"])(e)?e.includes(".")?Ft(i,e):()=>i[e]:e.bind(i,i);let o;Object(r["q"])(t)?o=t:(o=t.handler,n=t);const a=Wr;Hr(this);const c=At(s,o.bind(i),n);return a?Hr(a):zr(),c}function Ft(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Lt(e,t){if(!Object(r["w"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Ae(e))Lt(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)Lt(e[n],t);else if(Object(r["C"])(e)||Object(r["u"])(e))e.forEach(e=>{Lt(e,t)});else if(Object(r["y"])(e))for(const n in e)Lt(e[n],t);return e}function Mt(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return an(()=>{e.isMounted=!0}),un(()=>{e.isUnmounting=!0}),e}const qt=[Function,Array],Bt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qt,onEnter:qt,onAfterEnter:qt,onEnterCancelled:qt,onBeforeLeave:qt,onLeave:qt,onAfterLeave:qt,onLeaveCancelled:qt,onBeforeAppear:qt,onAppear:qt,onAfterAppear:qt,onAppearCancelled:qt},setup(e,{slots:t}){const n=Vr(),r=Mt();let i;return()=>{const s=t.default&&Gt(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==pr){0,o=t,e=!0;break}}const a=Te(e),{mode:c}=a;if(r.isLeaving)return Ht(o);const l=zt(o);if(!l)return Ht(o);const u=Vt(l,a,r,n);$t(l,u);const h=n.subTree,d=h&&zt(h);let p=!1;const{getTransitionKey:f}=l.type;if(f){const e=f();void 0===i?i=e:e!==i&&(i=e,p=!0)}if(d&&d.type!==pr&&(!Er(l,d)||p)){const e=Vt(d,a,r,n);if($t(d,e),"out-in"===c)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Ht(o);"in-out"===c&&l.type!==pr&&(e.delayLeave=(e,t,n)=>{const i=Wt(r,d);i[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return o}}},Ut=Bt;function Wt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Vt(e,t,n,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:p,onAfterLeave:f,onLeaveCancelled:_,onBeforeAppear:g,onAppear:m,onAfterAppear:b,onAppearCancelled:y}=t,v=String(e.key),w=Wt(n,e),C=(e,t)=>{e&&Ue(e,i,9,t)},O=(e,t)=>{const n=t[1];C(e,t),Object(r["o"])(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},E={mode:o,persisted:a,beforeEnter(t){let r=c;if(!n.isMounted){if(!s)return;r=g||c}t._leaveCb&&t._leaveCb(!0);const i=w[v];i&&Er(e,i)&&i.el._leaveCb&&i.el._leaveCb(),C(r,[t])},enter(e){let t=l,r=u,i=h;if(!n.isMounted){if(!s)return;t=m||l,r=b||u,i=y||h}let o=!1;const a=e._enterCb=t=>{o||(o=!0,C(t?i:r,[e]),E.delayedLeave&&E.delayedLeave(),e._enterCb=void 0)};t?O(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();C(d,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),C(n?_:f,[t]),t._leaveCb=void 0,w[i]===e&&delete w[i])};w[i]=e,p?O(p,[t,o]):o()},clone(e){return Vt(e,t,n,i)}};return E}function Ht(e){if(Qt(e))return e=Pr(e),e.children=null,e}function zt(e){return Qt(e)?e.children?e.children[0]:void 0:e}function $t(e,t){6&e.shapeFlag&&e.component?$t(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Gt(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===hr?(128&o.patchFlag&&i++,r=r.concat(Gt(o.children,t,a))):(t||o.type!==pr)&&r.push(null!=a?Pr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}const Kt=e=>!!e.type.__asyncLoader;const Qt=e=>e.type.__isKeepAlive;RegExp,RegExp;function Yt(e,t){return Object(r["o"])(e)?e.some(e=>Yt(e,t)):Object(r["E"])(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function Jt(e,t){Zt(e,"a",t)}function Xt(e,t){Zt(e,"da",t)}function Zt(e,t,n=Wr){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(rn(t,r,n),n){let e=n.parent;while(e&&e.parent)Qt(e.parent.vnode)&&en(r,t,n,e),e=e.parent}}function en(e,t,n,i){const s=rn(t,e,i,!0);hn(()=>{Object(r["L"])(i[t],s)},n)}function tn(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function nn(e){return 128&e.shapeFlag?e.ssContent:e}function rn(e,t,n=Wr,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;O(),Hr(n);const i=Ue(t,n,e,r);return zr(),E(),i});return r?i.unshift(s):i.push(s),s}}const sn=e=>(t,n=Wr)=>(!Qr||"sp"===e)&&rn(e,t,n),on=sn("bm"),an=sn("m"),cn=sn("bu"),ln=sn("u"),un=sn("bum"),hn=sn("um"),dn=sn("sp"),pn=sn("rtg"),fn=sn("rtc");function _n(e,t=Wr){rn("ec",e,t)}function gn(e,t){const n=bt;if(null===n)return e;const i=ni(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=r["b"]]=t[o];Object(r["q"])(e)&&(e={mounted:e,updated:e}),e.deep&&Lt(n),s.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function mn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(O(),Ue(c,n,8,[e.el,a,e,t]),E())}}const bn=Symbol();function yn(e,t,n,i){let s;const o=n&&n[i];if(Object(r["o"])(e)||Object(r["E"])(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if(Object(r["w"])(e))if(e[Symbol.iterator])s=Array.from(e,(e,n)=>t(e,n,void 0,o&&o[n]));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[i]=s),s}const vn=e=>e?$r(e)?ni(e)||e.proxy:vn(e.parent):null,wn=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>vn(e.parent),$root:e=>vn(e.root),$emit:e=>e.emit,$options:e=>Tn(e),$forceUpdate:e=>e.f||(e.f=()=>st(e.update)),$nextTick:e=>e.n||(e.n=rt.bind(e.proxy)),$watch:e=>Dt.bind(e)}),Cn={get({_:e},t){const{ctx:n,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:l}=e;let u;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=1,i[t];if(s!==r["b"]&&Object(r["k"])(s,t))return a[t]=2,s[t];if((u=e.propsOptions[0])&&Object(r["k"])(u,t))return a[t]=3,o[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=4,n[t];On&&(a[t]=0)}}const h=wn[t];let d,p;return h?("$attrs"===t&&j(e,"get",t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=4,n[t]):(p=l.config.globalProperties,Object(r["k"])(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;return s!==r["b"]&&Object(r["k"])(s,t)?(s[t]=n,!0):i!==r["b"]&&Object(r["k"])(i,t)?(i[t]=n,!0):!Object(r["k"])(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=o[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(wn,a)||Object(r["k"])(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:Object(r["k"])(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let On=!0;function En(e){const t=Tn(e),n=e.proxy,i=e.ctx;On=!1,t.beforeCreate&&Sn(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:c,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:f,updated:_,activated:g,deactivated:m,beforeDestroy:b,beforeUnmount:y,destroyed:v,unmounted:w,render:C,renderTracked:O,renderTriggered:E,errorCaptured:j,serverPrefetch:S,expose:k,inheritAttrs:T,components:I,directives:x,filters:N}=t,P=null;if(u&&jn(u,i,P,e.appContext.config.unwrapInjectedRef),a)for(const A in a){const e=a[A];Object(r["q"])(e)&&(i[A]=e.bind(n))}if(s){0;const t=s.call(n,n);0,Object(r["w"])(t)&&(e.data=ve(t))}if(On=!0,o)for(const A in o){const e=o[A],t=Object(r["q"])(e)?e.bind(n,n):Object(r["q"])(e.get)?e.get.bind(n,n):r["d"];0;const s=!Object(r["q"])(e)&&Object(r["q"])(e.set)?e.set.bind(n):r["d"],a=si({get:t,set:s});Object.defineProperty(i,A,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)kn(c[r],i,n,r);if(l){const e=Object(r["q"])(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{xt(t,e[t])})}function R(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&Sn(h,e,"c"),R(on,d),R(an,p),R(cn,f),R(ln,_),R(Jt,g),R(Xt,m),R(_n,j),R(fn,O),R(pn,E),R(un,y),R(hn,w),R(dn,S),Object(r["o"])(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});C&&e.render===r["d"]&&(e.render=C),null!=T&&(e.inheritAttrs=T),I&&(e.components=I),x&&(e.directives=x)}function jn(e,t,n=r["d"],i=!1){Object(r["o"])(e)&&(e=Rn(e));for(const s in e){const n=e[s];let o;o=Object(r["w"])(n)?"default"in n?Nt(n.from||s,n.default,!0):Nt(n.from||s):Nt(n),Ae(o)&&i?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Sn(e,t,n){Ue(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function kn(e,t,n,i){const s=i.includes(".")?Ft(n,i):()=>n[i];if(Object(r["E"])(e)){const n=t[e];Object(r["q"])(n)&&Rt(s,n)}else if(Object(r["q"])(e))Rt(s,e.bind(n));else if(Object(r["w"])(e))if(Object(r["o"])(e))e.forEach(e=>kn(e,t,n,i));else{const i=Object(r["q"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["q"])(i)&&Rt(s,i,e)}else 0}function Tn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>In(c,e,o,!0)),In(c,t,o)):c=t,s.set(t,c),c}function In(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&In(e,s,n,!0),i&&i.forEach(t=>In(e,t,n,!0));for(const o in t)if(r&&"expose"===o);else{const r=xn[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const xn={data:Nn,props:Dn,emits:Dn,methods:Dn,computed:Dn,beforeCreate:An,created:An,beforeMount:An,mounted:An,beforeUpdate:An,updated:An,beforeDestroy:An,beforeUnmount:An,destroyed:An,unmounted:An,activated:An,deactivated:An,errorCaptured:An,serverPrefetch:An,components:Dn,directives:Dn,watch:Fn,provide:Nn,inject:Pn};function Nn(e,t){return t?e?function(){return Object(r["h"])(Object(r["q"])(e)?e.call(this,this):e,Object(r["q"])(t)?t.call(this,this):t)}:t:e}function Pn(e,t){return Dn(Rn(e),Rn(t))}function Rn(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function An(e,t){return e?[...new Set([].concat(e,t))]:t}function Dn(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function Fn(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=An(e[r],t[r]);return n}function Ln(e,t,n,i=!1){const s={},o={};Object(r["g"])(o,jr,1),e.propsDefaults=Object.create(null),qn(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:we(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Mn(e,t,n,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=e,c=Te(s),[l]=e.propsOptions;let u=!1;if(!(i||a>0)||16&a){let i;qn(e,t,s,o)&&(u=!0);for(const o in c)t&&(Object(r["k"])(t,o)||(i=Object(r["l"])(o))!==o&&Object(r["k"])(t,i))||(l?!n||void 0===n[o]&&void 0===n[i]||(s[o]=Bn(l,c,o,void 0,e,!0)):delete s[o]);if(o!==c)for(const e in o)t&&Object(r["k"])(t,e)||(delete o[e],u=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];if(mt(e.emitsOptions,a))continue;const h=t[a];if(l)if(Object(r["k"])(o,a))h!==o[a]&&(o[a]=h,u=!0);else{const t=Object(r["e"])(a);s[t]=Bn(l,c,t,h,e,!1)}else h!==o[a]&&(o[a]=h,u=!0)}}u&&k(e,"set","$attrs")}function qn(e,t,n,i){const[s,o]=e.propsOptions;let a,c=!1;if(t)for(let l in t){if(Object(r["A"])(l))continue;const u=t[l];let h;s&&Object(r["k"])(s,h=Object(r["e"])(l))?o&&o.includes(h)?(a||(a={}))[h]=u:n[h]=u:mt(e.emitsOptions,l)||l in i&&u===i[l]||(i[l]=u,c=!0)}if(o){const t=Te(n),i=a||r["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=Bn(s,t,c,i[c],e,!Object(r["k"])(i,c))}}return c}function Bn(e,t,n,i,s,o){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&Object(r["q"])(e)){const{propsDefaults:r}=s;n in r?i=r[n]:(Hr(s),i=r[n]=e.call(null,t),zr())}else i=e}a[0]&&(o&&!e?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function Un(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!Object(r["q"])(e)){const i=e=>{l=!0;const[n,i]=Un(e,t,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!o&&!l)return i.set(e,r["a"]),r["a"];if(Object(r["o"])(o))for(let h=0;h<o.length;h++){0;const e=Object(r["e"])(o[h]);Wn(e)&&(a[e]=r["b"])}else if(o){0;for(const e in o){const t=Object(r["e"])(e);if(Wn(t)){const n=o[e],i=a[t]=Object(r["o"])(n)||Object(r["q"])(n)?{type:n}:n;if(i){const e=zn(Boolean,i.type),n=zn(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||Object(r["k"])(i,"default"))&&c.push(t)}}}}const u=[a,c];return i.set(e,u),u}function Wn(e){return"$"!==e[0]}function Vn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Hn(e,t){return Vn(e)===Vn(t)}function zn(e,t){return Object(r["o"])(t)?t.findIndex(t=>Hn(t,e)):Object(r["q"])(t)&&Hn(t,e)?0:-1}const $n=e=>"_"===e[0]||"$stable"===e,Gn=e=>Object(r["o"])(e)?e.map(Ar):[Ar(e)],Kn=(e,t,n)=>{if(t._n)return t;const r=wt((...e)=>Gn(t(...e)),n);return r._c=!1,r},Qn=(e,t,n)=>{const i=e._ctx;for(const s in e){if($n(s))continue;const n=e[s];if(Object(r["q"])(n))t[s]=Kn(s,n,i);else if(null!=n){0;const e=Gn(n);t[s]=()=>e}}},Yn=(e,t)=>{const n=Gn(t);e.slots.default=()=>n},Jn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Te(t),Object(r["g"])(t,"_",n)):Qn(t,e.slots={})}else e.slots={},t&&Yn(e,t);Object(r["g"])(e.slots,jr,1)},Xn=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,a=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?o=!1:(Object(r["h"])(s,t),n||1!==e||delete s._):(o=!t.$stable,Qn(t,s)),a=t}else t&&(Yn(e,t),a={default:1});if(o)for(const r in s)$n(r)||r in a||delete s[r]};function Zn(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let er=0;function tr(e,t){return function(n,i=null){Object(r["q"])(n)||(n=Object.assign({},n)),null==i||Object(r["w"])(i)||(i=null);const s=Zn(),o=new Set;let a=!1;const c=s.app={_uid:er++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:ai,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&Object(r["q"])(e.install)?(o.add(e),e.install(c,...t)):Object(r["q"])(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(r,o,l){if(!a){0;const u=Ir(n,i);return u.appContext=s,o&&t?t(u,r):e(u,r,l),a=!0,c._container=r,r.__vue_app__=c,ni(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function nr(e,t,n,i,s=!1){if(Object(r["o"])(e))return void e.forEach((e,o)=>nr(e,t&&(Object(r["o"])(t)?t[o]:t),n,i,s));if(Kt(i)&&!s)return;const o=4&i.shapeFlag?ni(i.component)||i.component.proxy:i.el,a=s?null:o,{i:c,r:l}=e;const u=t&&t.r,h=c.refs===r["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=u&&u!==l&&(Object(r["E"])(u)?(h[u]=null,Object(r["k"])(d,u)&&(d[u]=null)):Ae(u)&&(u.value=null)),Object(r["q"])(l))Be(l,c,12,[a,h]);else{const t=Object(r["E"])(l),i=Ae(l);if(t||i){const c=()=>{if(e.f){const n=t?h[l]:l.value;s?Object(r["o"])(n)&&Object(r["L"])(n,o):Object(r["o"])(n)?n.includes(o)||n.push(o):t?(h[l]=[o],Object(r["k"])(d,l)&&(d[l]=h[l])):(l.value=[o],e.k&&(h[e.k]=l.value))}else t?(h[l]=a,Object(r["k"])(d,l)&&(d[l]=a)):i&&(l.value=a,e.k&&(h[e.k]=a))};a?(c.id=-1,ir(c,n)):c()}else 0}}function rr(){}const ir=It;function sr(e){return or(e)}function or(e,t){rr();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:c,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:f=r["d"],cloneNode:_,insertStaticContent:g}=e,m=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Er(e,t)&&(r=K(e),V(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case dr:b(e,t,n,r);break;case pr:v(e,t,n,r);break;case fr:null==e&&w(t,n,r,o);break;case hr:R(e,t,n,r,i,s,o,a,c);break;default:1&h?S(e,t,n,r,i,s,o,a,c):6&h?A(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,Y)}null!=u&&i&&nr(u,e&&e.ref,s,t||e,!t)},b=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&u(n,t.children)}},v=(e,t,n,r)=>{null==e?i(t.el=l(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},C=({el:e,anchor:t},n,r)=>{let s;while(e&&e!==t)s=p(e),i(e,n,r),e=s;i(t,n,r)},j=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},S=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?k(t,n,r,i,s,o,a,c):x(e,t,i,s,o,a,c)},k=(e,t,n,s,c,l,u,d)=>{let p,f;const{type:g,props:m,shapeFlag:b,transition:y,patchFlag:v,dirs:w}=e;if(e.el&&void 0!==_&&-1===v)p=e.el=_(e.el);else{if(p=e.el=a(e.type,l,m&&m.is,m),8&b?h(p,e.children):16&b&&I(e.children,p,null,s,c,l&&"foreignObject"!==g,u,d),w&&mn(e,null,s,"created"),m){for(const t in m)"value"===t||Object(r["A"])(t)||o(p,t,null,m[t],l,e.children,s,c,G);"value"in m&&o(p,"value",null,m.value),(f=m.onVnodeBeforeMount)&&Mr(f,s,e)}T(p,e,e.scopeId,u,s)}w&&mn(e,null,s,"beforeMount");const C=(!c||c&&!c.pendingBranch)&&y&&!y.persisted;C&&y.beforeEnter(p),i(p,t,n),((f=m&&m.onVnodeMounted)||C||w)&&ir(()=>{f&&Mr(f,s,e),C&&y.enter(p),w&&mn(e,null,s,"mounted")},c)},T=(e,t,n,r,i)=>{if(n&&f(e,n),r)for(let s=0;s<r.length;s++)f(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;T(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},I=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?Dr(e[l]):Ar(e[l]);m(null,c,t,n,r,i,s,o,a)}},x=(e,t,n,i,s,a,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:d,dirs:p}=t;u|=16&e.patchFlag;const f=e.props||r["b"],_=t.props||r["b"];let g;n&&ar(n,!1),(g=_.onVnodeBeforeUpdate)&&Mr(g,n,t,e),p&&mn(t,e,n,"beforeUpdate"),n&&ar(n,!0);const m=s&&"foreignObject"!==t.type;if(d?N(e.dynamicChildren,d,l,n,i,m,a):c||q(e,t,l,null,n,i,m,a,!1),u>0){if(16&u)P(l,t,f,_,n,i,s);else if(2&u&&f.class!==_.class&&o(l,"class",null,_.class,s),4&u&&o(l,"style",f.style,_.style,s),8&u){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=f[a],u=_[a];u===c&&"value"!==a||o(l,a,c,u,s,e.children,n,i,G)}}1&u&&e.children!==t.children&&h(l,t.children)}else c||null!=d||P(l,t,f,_,n,i,s);((g=_.onVnodeUpdated)||p)&&ir(()=>{g&&Mr(g,n,t,e),p&&mn(t,e,n,"updated")},i)},N=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===hr||!Er(c,l)||70&c.shapeFlag)?d(c.el):n;m(c,l,u,null,r,i,s,o,!0)}},P=(e,t,n,i,s,a,c)=>{if(n!==i){for(const l in i){if(Object(r["A"])(l))continue;const u=i[l],h=n[l];u!==h&&"value"!==l&&o(e,l,h,u,c,t.children,s,a,G)}if(n!==r["b"])for(const l in n)Object(r["A"])(l)||l in i||o(e,l,n[l],null,c,t.children,s,a,G);"value"in i&&o(e,"value",n.value,i.value)}},R=(e,t,n,r,s,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:_}=t;_&&(l=l?l.concat(_):_),null==e?(i(h,n,r),i(d,n,r),I(t.children,n,d,s,o,a,l,u)):p>0&&64&p&&f&&e.dynamicChildren?(N(e.dynamicChildren,f,n,s,o,a,l),(null!=t.key||s&&t===s.subTree)&&cr(e,t,!0)):q(e,t,n,d,s,o,a,l,u)},A=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):D(t,n,r,i,s,o,c):F(e,t,c)},D=(e,t,n,r,i,s,o)=>{const a=e.component=Ur(e,r,i);if(Qt(e)&&(a.ctx.renderer=Y),Yr(a),a.asyncDep){if(i&&i.registerDep(a,L),!e.el){const e=a.subTree=Ir(pr);v(null,e,t,n)}}else L(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if(jt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void M(r,t,n);r.next=t,at(r.update),r.update()}else t.el=e.el,r.vnode=t},L=(e,t,n,i,s,o,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:c,parent:l,vnode:u}=e,h=n;0,ar(e,!1),n?(n.el=u.el,M(e,n,a)):n=u,i&&Object(r["n"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Mr(t,l,n,u),ar(e,!0);const p=Ct(e);0;const f=e.subTree;e.subTree=p,m(f,p,d(f.el),K(f),e,s,o),n.el=p.el,null===h&&kt(e,p.el),c&&ir(c,s),(t=n.props&&n.props.onVnodeUpdated)&&ir(()=>Mr(t,l,n,u),s)}else{let a;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,p=Kt(t);if(ar(e,!1),u&&Object(r["n"])(u),!p&&(a=l&&l.onVnodeBeforeMount)&&Mr(a,d,t),ar(e,!0),c&&X){const n=()=>{e.subTree=Ct(e),X(c,e.subTree,e,s,null)};p?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=Ct(e);0,m(null,r,n,i,e,s,o),t.el=r.el}if(h&&ir(h,s),!p&&(a=l&&l.onVnodeMounted)){const e=t;ir(()=>Mr(a,d,e),s)}(256&t.shapeFlag||d&&Kt(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&ir(e.a,s),e.isMounted=!0,t=n=i=null}},l=e.effect=new y(c,()=>st(u),e.scope),u=e.update=()=>l.run();u.id=e.uid,ar(e,!0),u()},M=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,Mn(e,t.props,r,n),Xn(e,t.children,n),O(),ht(void 0,e.update),E()},q=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void U(l,d,n,r,i,s,o,a,c);if(256&p)return void B(l,d,n,r,i,s,o,a,c)}8&f?(16&u&&G(l,i,s),d!==l&&h(n,d)):16&u?16&f?U(l,d,n,r,i,s,o,a,c):G(l,i,s,!0):(8&u&&h(n,""),16&f&&I(d,n,r,i,s,o,a,c))},B=(e,t,n,i,s,o,a,c,l)=>{e=e||r["a"],t=t||r["a"];const u=e.length,h=t.length,d=Math.min(u,h);let p;for(p=0;p<d;p++){const r=t[p]=l?Dr(t[p]):Ar(t[p]);m(e[p],r,n,null,s,o,a,c,l)}u>h?G(e,s,o,!0,!1,d):I(t,n,i,s,o,a,c,l,d)},U=(e,t,n,i,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,p=h-1;while(u<=d&&u<=p){const r=e[u],i=t[u]=l?Dr(t[u]):Ar(t[u]);if(!Er(r,i))break;m(r,i,n,null,s,o,a,c,l),u++}while(u<=d&&u<=p){const r=e[d],i=t[p]=l?Dr(t[p]):Ar(t[p]);if(!Er(r,i))break;m(r,i,n,null,s,o,a,c,l),d--,p--}if(u>d){if(u<=p){const e=p+1,r=e<h?t[e].el:i;while(u<=p)m(null,t[u]=l?Dr(t[u]):Ar(t[u]),n,r,s,o,a,c,l),u++}}else if(u>p)while(u<=d)V(e[u],s,o,!0),u++;else{const f=u,_=u,g=new Map;for(u=_;u<=p;u++){const e=t[u]=l?Dr(t[u]):Ar(t[u]);null!=e.key&&g.set(e.key,u)}let b,y=0;const v=p-_+1;let w=!1,C=0;const O=new Array(v);for(u=0;u<v;u++)O[u]=0;for(u=f;u<=d;u++){const r=e[u];if(y>=v){V(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(b=_;b<=p;b++)if(0===O[b-_]&&Er(r,t[b])){i=b;break}void 0===i?V(r,s,o,!0):(O[i-_]=u+1,i>=C?C=i:w=!0,m(r,t[i],n,null,s,o,a,c,l),y++)}const E=w?lr(O):r["a"];for(b=E.length-1,u=v-1;u>=0;u--){const e=_+u,r=t[e],d=e+1<h?t[e+1].el:i;0===O[u]?m(null,r,n,d,s,o,a,c,l):w&&(b<0||u!==E[b]?W(r,n,d,2):b--)}}},W=(e,t,n,r,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void W(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,Y);if(a===hr){i(o,t,n);for(let e=0;e<l.length;e++)W(l[e],t,n,r);return void i(e.anchor,t,n)}if(a===fr)return void C(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(o),i(o,t,n),ir(()=>c.enter(o),s);else{const{leave:e,delayLeave:r,afterLeave:s}=c,a=()=>i(o,t,n),l=()=>{e(o,()=>{a(),s&&s()})};r?r(o,a,l):l()}else i(o,t,n)},V=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&nr(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!Kt(e);let _;if(f&&(_=o&&o.onVnodeBeforeUnmount)&&Mr(_,t,e),6&u)$(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&mn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,Y,r):l&&(s!==hr||h>0&&64&h)?G(l,t,n,!1,!0):(s===hr&&384&h||!i&&16&u)&&G(c,t,n),r&&H(e)}(f&&(_=o&&o.onVnodeUnmounted)||p)&&ir(()=>{_&&Mr(_,t,e),p&&mn(e,null,t,"unmounted")},n)},H=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===hr)return void z(n,r);if(t===fr)return void j(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},z=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},$=(e,t,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:c}=e;i&&Object(r["n"])(i),s.stop(),o&&(o.active=!1,V(a,e,t,n)),c&&ir(c,t),ir(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)V(e[o],t,n,r,i)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Q=(e,t,n)=>{null==e?t._vnode&&V(t._vnode,null,null,!0):m(t._vnode||null,e,t,null,null,null,n),dt(),t._vnode=e},Y={p:m,um:V,m:W,r:H,mt:D,mc:I,pc:q,pbc:N,n:K,o:e};let J,X;return t&&([J,X]=t(Y)),{render:Q,hydrate:J,createApp:tr(Q,J)}}function ar({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function cr(e,t,n=!1){const i=e.children,s=t.children;if(Object(r["o"])(i)&&Object(r["o"])(s))for(let r=0;r<i.length;r++){const e=i[r];let t=s[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[r]=Dr(s[r]),t.el=e.el),n||cr(e,t))}}function lr(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const ur=e=>e.__isTeleport;const hr=Symbol(void 0),dr=Symbol(void 0),pr=Symbol(void 0),fr=Symbol(void 0),_r=[];let gr=null;function mr(e=!1){_r.push(gr=e?null:[])}function br(){_r.pop(),gr=_r[_r.length-1]||null}let yr=1;function vr(e){yr+=e}function wr(e){return e.dynamicChildren=yr>0?gr||r["a"]:null,br(),yr>0&&gr&&gr.push(e),e}function Cr(e,t,n,r,i,s){return wr(Tr(e,t,n,r,i,s,!0))}function Or(e){return!!e&&!0===e.__v_isVNode}function Er(e,t){return e.type===t.type&&e.key===t.key}const jr="__vInternal",Sr=({key:e})=>null!=e?e:null,kr=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(r["E"])(e)||Ae(e)||Object(r["q"])(e)?{i:bt,r:e,k:t,f:!!n}:e:null;function Tr(e,t=null,n=null,i=0,s=null,o=(e===hr?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Sr(t),ref:t&&kr(t),scopeId:yt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(Fr(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=Object(r["E"])(n)?8:16),yr>0&&!a&&gr&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&gr.push(l),l}const Ir=xr;function xr(e,t=null,n=null,i=0,s=null,o=!1){if(e&&e!==bn||(e=pr),Or(e)){const r=Pr(e,t,!0);return n&&Fr(r,n),yr>0&&!o&&gr&&(6&r.shapeFlag?gr[gr.indexOf(e)]=r:gr.push(r)),r.patchFlag|=-2,r}if(ii(e)&&(e=e.__vccOpts),t){t=Nr(t);let{class:e,style:n}=t;e&&!Object(r["E"])(e)&&(t.class=Object(r["J"])(e)),Object(r["w"])(n)&&(ke(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["K"])(n))}const a=Object(r["E"])(e)?1:Tt(e)?128:ur(e)?64:Object(r["w"])(e)?4:Object(r["q"])(e)?2:0;return Tr(e,t,n,i,s,a,o,!0)}function Nr(e){return e?ke(e)||jr in e?Object(r["h"])({},e):e:null}function Pr(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=e,c=t?Lr(i||{},t):i,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Sr(c),ref:t&&t.ref?n&&s?Object(r["o"])(s)?s.concat(kr(t)):[s,kr(t)]:kr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==hr?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pr(e.ssContent),ssFallback:e.ssFallback&&Pr(e.ssFallback),el:e.el,anchor:e.anchor};return l}function Rr(e=" ",t=0){return Ir(dr,null,e,t)}function Ar(e){return null==e||"boolean"===typeof e?Ir(pr):Object(r["o"])(e)?Ir(hr,null,e.slice()):"object"===typeof e?Dr(e):Ir(dr,null,String(e))}function Dr(e){return null===e.el||e.memo?e:Pr(e)}function Fr(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),Fr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||jr in t?3===r&&bt&&(1===bt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=bt}}else Object(r["q"])(t)?(t={default:t,_ctx:bt},n=32):(t=String(t),64&i?(n=16,t=[Rr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Lr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["J"])([t.class,i.class]));else if("style"===e)t.style=Object(r["K"])([t.style,i.style]);else if(Object(r["x"])(e)){const n=t[e],s=i[e];!s||n===s||Object(r["o"])(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function Mr(e,t,n,r=null){Ue(e,t,7,[n,r])}const qr=Zn();let Br=0;function Ur(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||qr,a={uid:Br++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Un(i,o),emitsOptions:gt(i,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=_t.bind(null,a),e.ce&&e.ce(a),a}let Wr=null;const Vr=()=>Wr||bt,Hr=e=>{Wr=e,e.scope.on()},zr=()=>{Wr&&Wr.scope.off(),Wr=null};function $r(e){return 4&e.vnode.shapeFlag}let Gr,Kr,Qr=!1;function Yr(e,t=!1){Qr=t;const{props:n,children:r}=e.vnode,i=$r(e);Ln(e,n,i,t),Jn(e,r);const s=i?Jr(e,t):void 0;return Qr=!1,s}function Jr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ie(new Proxy(e.ctx,Cn));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?ti(e):null;Hr(e),O();const s=Be(i,e,0,[e.props,n]);if(E(),zr(),Object(r["z"])(s)){if(s.then(zr,zr),t)return s.then(n=>{Xr(e,n,t)}).catch(t=>{We(t,e,0)});e.asyncDep=s}else Xr(e,s,t)}else Zr(e,t)}function Xr(e,t,n){Object(r["q"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["w"])(t)&&(e.setupState=Le(t)),Zr(e,n)}function Zr(e,t,n){const i=e.type;if(!e.render){if(!t&&Gr&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:o},s),a);i.render=Gr(t,c)}}e.render=i.render||r["d"],Kr&&Kr(e)}Hr(e),O(),En(e),E(),zr()}function ei(e){return new Proxy(e.attrs,{get(t,n){return j(e,"get","$attrs"),t[n]}})}function ti(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=ei(e))},slots:e.slots,emit:e.emit,expose:t}}function ni(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Le(Ie(e.exposed)),{get(t,n){return n in t?t[n]:n in wn?wn[n](e):void 0}}))}function ri(e,t=!0){return Object(r["q"])(e)?e.displayName||e.name:e.name||t&&e.__name}function ii(e){return Object(r["q"])(e)&&"__vccOpts"in e}const si=(e,t)=>qe(e,t,Qr);function oi(e,t,n){const i=arguments.length;return 2===i?Object(r["w"])(t)&&!Object(r["o"])(t)?Or(t)?Ir(e,null,[t]):Ir(e,t):Ir(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Or(n)&&(n=[n]),Ir(e,t,n))}Symbol("");const ai="3.2.37",ci="http://www.w3.org/2000/svg",li="undefined"!==typeof document?document:null,ui=li&&li.createElement("template"),hi={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?li.createElementNS(ci,e):li.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>li.createTextNode(e),createComment:e=>li.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>li.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{ui.innerHTML=r?`<svg>${e}</svg>`:e;const i=ui.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function di(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function pi(e,t,n){const i=e.style,s=Object(r["E"])(n);if(n&&!s){for(const e in n)_i(i,e,n[e]);if(t&&!Object(r["E"])(t))for(const e in t)null==n[e]&&_i(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const fi=/\s*!important$/;function _i(e,t,n){if(Object(r["o"])(n))n.forEach(n=>_i(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=bi(e,t);fi.test(n)?e.setProperty(Object(r["l"])(i),n.replace(fi,""),"important"):e[i]=n}}const gi=["Webkit","Moz","ms"],mi={};function bi(e,t){const n=mi[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return mi[t]=i;i=Object(r["f"])(i);for(let r=0;r<gi.length;r++){const n=gi[r]+i;if(n in e)return mi[t]=n}return t}const yi="http://www.w3.org/1999/xlink";function vi(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(yi,t.slice(6,t.length)):e.setAttributeNS(yi,t,n);else{const i=Object(r["D"])(t);null==n||i&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function wi(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=Object(r["m"])(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(l){0}c&&e.removeAttribute(t)}const[Ci,Oi]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Ei=0;const ji=Promise.resolve(),Si=()=>{Ei=0},ki=()=>Ei||(ji.then(Si),Ei=Ci());function Ti(e,t,n,r){e.addEventListener(t,n,r)}function Ii(e,t,n,r){e.removeEventListener(t,n,r)}function xi(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=Pi(t);if(r){const o=s[t]=Ri(r,i);Ti(e,n,o,a)}else o&&(Ii(e,n,o,a),s[t]=void 0)}}const Ni=/(?:Once|Passive|Capture)$/;function Pi(e){let t;if(Ni.test(e)){let n;t={};while(n=e.match(Ni))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Ri(e,t){const n=e=>{const r=e.timeStamp||Ci();(Oi||r>=n.attached-1)&&Ue(Ai(e,n.value),t,5,[e])};return n.value=e,n.attached=ki(),n}function Ai(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const Di=/^on[a-z]/,Fi=(e,t,n,i,s=!1,o,a,c,l)=>{"class"===t?di(e,i,s):"style"===t?pi(e,n,i):Object(r["x"])(t)?Object(r["v"])(t)||xi(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Li(e,t,i,s))?wi(e,t,i,o,a,c,l):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),vi(e,t,i,s))};function Li(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&Di.test(t)&&Object(r["q"])(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Di.test(t)||!Object(r["E"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Mi="transition",qi="animation",Bi=(e,{slots:t})=>oi(Ut,Hi(e),t);Bi.displayName="Transition";const Ui={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Wi=(Bi.props=Object(r["h"])({},Ut.props,Ui),(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),Vi=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function Hi(e){const t={};for(const r in e)r in Ui||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:p=n+"-leave-active",leaveToClass:f=n+"-leave-to"}=e,_=zi(s),g=_&&_[0],m=_&&_[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:v,onLeave:w,onLeaveCancelled:C,onBeforeAppear:O=b,onAppear:E=y,onAppearCancelled:j=v}=t,S=(e,t,n)=>{Ki(e,t?h:c),Ki(e,t?u:a),n&&n()},k=(e,t)=>{e._isLeaving=!1,Ki(e,d),Ki(e,f),Ki(e,p),t&&t()},T=e=>(t,n)=>{const r=e?E:y,s=()=>S(t,e,n);Wi(r,[t,s]),Qi(()=>{Ki(t,e?l:o),Gi(t,e?h:c),Vi(r)||Ji(t,i,g,s)})};return Object(r["h"])(t,{onBeforeEnter(e){Wi(b,[e]),Gi(e,o),Gi(e,a)},onBeforeAppear(e){Wi(O,[e]),Gi(e,l),Gi(e,u)},onEnter:T(!1),onAppear:T(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>k(e,t);Gi(e,d),ts(),Gi(e,p),Qi(()=>{e._isLeaving&&(Ki(e,d),Gi(e,f),Vi(w)||Ji(e,i,m,n))}),Wi(w,[e,n])},onEnterCancelled(e){S(e,!1),Wi(v,[e])},onAppearCancelled(e){S(e,!0),Wi(j,[e])},onLeaveCancelled(e){k(e),Wi(C,[e])}})}function zi(e){if(null==e)return null;if(Object(r["w"])(e))return[$i(e.enter),$i(e.leave)];{const t=$i(e);return[t,t]}}function $i(e){const t=Object(r["O"])(e);return t}function Gi(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function Ki(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Qi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Yi=0;function Ji(e,t,n,r){const i=e._endId=++Yi,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Xi(e,t);if(!o)return r();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),s()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),e.addEventListener(l,d)}function Xi(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(Mi+"Delay"),s=r(Mi+"Duration"),o=Zi(i,s),a=r(qi+"Delay"),c=r(qi+"Duration"),l=Zi(a,c);let u=null,h=0,d=0;t===Mi?o>0&&(u=Mi,h=o,d=s.length):t===qi?l>0&&(u=qi,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?Mi:qi:null,d=u?u===Mi?s.length:c.length:0);const p=u===Mi&&/\b(transform|all)(,|$)/.test(n[Mi+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:p}}function Zi(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>es(t)+es(e[n])))}function es(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ts(){return document.body.offsetHeight}new WeakMap,new WeakMap;const ns=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function rs(e){e.target.composing=!0}function is(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ss={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=ns(s);const o=i||s.props&&"number"===s.props.type;Ti(e,t?"change":"input",t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=Object(r["O"])(i)),e._assign(i)}),n&&Ti(e,"change",()=>{e.value=e.value.trim()}),t||(Ti(e,"compositionstart",rs),Ti(e,"compositionend",is),Ti(e,"change",is))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=ns(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&Object(r["O"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const os=["ctrl","shift","alt","meta"],as={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>os.some(n=>e[n+"Key"]&&!t.includes(n))},cs=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=as[t[e]];if(r&&r(n,t))return}return e(n,...r)};const ls=Object(r["h"])({patchProp:Fi},hi);let us;function hs(){return us||(us=sr(ls))}const ds=(...e)=>{const t=hs().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ps(e);if(!i)return;const s=t._component;Object(r["q"])(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function ps(e){if(Object(r["E"])(e)){const t=document.querySelector(e);return t}return e}},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("1fd5"),i=n("22e5"),s=n("589b"),o=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(s["_addComponent"])(e,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(e,t=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(s["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(s["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new r["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:u,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s["_DEFAULT_ENTRY_NAME"],!Object(r["j"])(t,e))throw l.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s["initializeApp"](i,o);if(Object(r["j"])(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function u(t){const i=t.name,a=i.replace("-compat","");if(s["_registerComponent"](t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw l.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&Object(r["o"])(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=u(a);function t(t){Object(r["o"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r["l"],ErrorFactory:r["b"],deepExtend:r["o"]}),e}const d=h(),p=new o["b"]("@firebase/app-compat"),f="@firebase/app-compat",_="0.1.30";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){Object(s["registerVersion"])(f,_,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(r["s"])()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const m=d;g()},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return X})),n.d(t,"f",(function(){return te})),n.d(t,"g",(function(){return se})),n.d(t,"h",(function(){return x})),n.d(t,"i",(function(){return ce})),n.d(t,"j",(function(){return re})),n.d(t,"k",(function(){return R})),n.d(t,"l",(function(){return ee})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return ie})),n.d(t,"o",(function(){return A})),n.d(t,"p",(function(){return Q})),n.d(t,"q",(function(){return M})),n.d(t,"r",(function(){return s})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return G})),n.d(t,"u",(function(){return D})),n.d(t,"v",(function(){return I})),n.d(t,"w",(function(){return U})),n.d(t,"x",(function(){return T})),n.d(t,"y",(function(){return $})),n.d(t,"z",(function(){return W})),n.d(t,"A",(function(){return K})),n.d(t,"B",(function(){return m})),n.d(t,"C",(function(){return F})),n.d(t,"D",(function(){return a})),n.d(t,"E",(function(){return q})),n.d(t,"F",(function(){return B})),n.d(t,"G",(function(){return y})),n.d(t,"H",(function(){return v})),n.d(t,"I",(function(){return r})),n.d(t,"J",(function(){return p})),n.d(t,"K",(function(){return l})),n.d(t,"L",(function(){return N})),n.d(t,"M",(function(){return w})),n.d(t,"N",(function(){return ne})),n.d(t,"O",(function(){return oe})),n.d(t,"P",(function(){return z}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function l(e){if(A(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=q(r)?d(r):l(r);if(i)for(const e in i)t[e]=i[e]}return t}return q(e)||U(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function p(e){let t="";if(q(e))t=e;else if(A(e))for(let n=0;n<e.length;n++){const r=p(e[n]);r&&(t+=r+" ")}else if(U(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const f="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",_="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",g=r(f),m=r(_);function b(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=y(e[r],t[r]);return n}function y(e,t){if(e===t)return!0;let n=L(e),r=L(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=B(e),r=B(t),n||r)return e===t;if(n=A(e),r=A(t),n||r)return!(!n||!r)&&b(e,t);if(n=U(e),r=U(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!y(e[n],t[n]))return!1}}return String(e)===String(t)}function v(e,t){return e.findIndex(e=>y(e,t))}const w=e=>q(e)?e:null==e?"":A(e)||U(e)&&(e.toString===V||!M(e.toString))?JSON.stringify(e,C,2):String(e),C=(e,t)=>t&&t.__v_isRef?C(e,t.value):D(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:F(t)?{[`Set(${t.size})`]:[...t.values()]}:!U(t)||A(t)||$(t)?t:String(t),O={},E=[],j=()=>{},S=()=>!1,k=/^on[^a-z]/,T=e=>k.test(e),I=e=>e.startsWith("onUpdate:"),x=Object.assign,N=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},P=Object.prototype.hasOwnProperty,R=(e,t)=>P.call(e,t),A=Array.isArray,D=e=>"[object Map]"===H(e),F=e=>"[object Set]"===H(e),L=e=>"[object Date]"===H(e),M=e=>"function"===typeof e,q=e=>"string"===typeof e,B=e=>"symbol"===typeof e,U=e=>null!==e&&"object"===typeof e,W=e=>U(e)&&M(e.then)&&M(e.catch),V=Object.prototype.toString,H=e=>V.call(e),z=e=>H(e).slice(8,-1),$=e=>"[object Object]"===H(e),G=e=>q(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Q=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Y=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},J=/-(\w)/g,X=Y(e=>e.replace(J,(e,t)=>t?t.toUpperCase():"")),Z=/\B([A-Z])/g,ee=Y(e=>e.replace(Z,"-$1").toLowerCase()),te=Y(e=>e.charAt(0).toUpperCase()+e.slice(1)),ne=Y(e=>e?"on"+te(e):""),re=(e,t)=>!Object.is(e,t),ie=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},se=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},oe=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ae;const ce=()=>ae||(ae="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===s(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var l=[];for(c=a;c<i.length;c++)l.push("..");return l=l.concat(s.slice(a)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){n=o+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===n+1?"":e.slice(t,r)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function u(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},ec26:function(e,t,n){"use strict";var r,i=new Uint8Array(16);function s(){if(!r&&(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function a(e){return"string"===typeof e&&o.test(e)}for(var c=a,l=[],u=0;u<256;++u)l.push((u+256).toString(16).substr(1));function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n}var d=h;function p(e,t,n){e=e||{};var r=e.random||(e.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return d(r)}t["a"]=p}}]);
//# sourceMappingURL=chunk-vendors.d391b5f4.js.map