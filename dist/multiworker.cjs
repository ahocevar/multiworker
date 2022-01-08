"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var r=Worker,o={exports:{}};!function(e,r){var o,s="undefined"!=typeof self?self:t,i=function(){function t(){this.fetch=!1,this.DOMException=s.DOMException}return t.prototype=s,new t}();o=i,function(t){var e="URLSearchParams"in o,r="Symbol"in o&&"iterator"in Symbol,s="FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in o,n="ArrayBuffer"in o;if(n)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],h=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1};function u(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function c(t){return"string"!=typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function p(t){this.map={},t instanceof p?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function l(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function y(t){var e=new FileReader,r=l(e);return e.readAsArrayBuffer(t),r}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(t){var r;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:s&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:e&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n&&s&&(r=t)&&DataView.prototype.isPrototypeOf(r)?(this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n&&(ArrayBuffer.prototype.isPrototypeOf(t)||h(t))?this._bodyArrayBuffer=b(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var t,e,r,o=f(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=l(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}p.prototype.append=function(t,e){t=u(t),e=c(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},p.prototype.delete=function(t){delete this.map[u(t)]},p.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},p.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},p.prototype.set=function(t,e){this.map[u(t)]=c(e)},p.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},p.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),d(t)},p.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),d(t)},p.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),d(t)},r&&(p.prototype[Symbol.iterator]=p.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(t,e){var r,o,s=(e=e||{}).body;if(t instanceof g){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new p(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,s||null==t._bodyInit||(s=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new p(e.headers)),this.method=(r=e.method||this.method||"GET",o=r.toUpperCase(),w.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&s)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(s)}function m(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),s=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(s))}})),e}function v(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new p(e.headers),this.url=e.url||"",this._initBody(t)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},_.call(g.prototype),_.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];v.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},t.DOMException=o.DOMException;try{new t.DOMException}catch(A){t.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function x(e,r){return new Promise((function(o,i){var n=new g(e,r);if(n.signal&&n.signal.aborted)return i(new t.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function h(){a.abort()}a.onload=function(){var t,e,r={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new p,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var s=r.join(":").trim();e.append(o,s)}})),e)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var s="response"in a?a.response:a.responseText;o(new v(s,r))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.onabort=function(){i(new t.DOMException("Aborted","AbortError"))},a.open(n.method,n.url,!0),"include"===n.credentials?a.withCredentials=!0:"omit"===n.credentials&&(a.withCredentials=!1),"responseType"in a&&s&&(a.responseType="blob"),n.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),n.signal&&(n.signal.addEventListener("abort",h),a.onreadystatechange=function(){4===a.readyState&&n.signal.removeEventListener("abort",h)}),a.send(void 0===n._bodyInit?null:n._bodyInit)}))}x.polyfill=!0,o.fetch||(o.fetch=x,o.Headers=p,o.Request=g,o.Response=v),t.Headers=p,t.Request=g,t.Response=v,t.fetch=x,Object.defineProperty(t,"__esModule",{value:!0})}({}),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var n=i;(r=n.fetch).default=n.fetch,r.fetch=n.fetch,r.Headers=n.Headers,r.Request=n.Request,r.Response=n.Response,e.exports=r}(o,o.exports);var s=e(o.exports);function i(t){return`(${t.toString()})();`}function n(){}let a=0;class h{constructor(){this.id=a++,this.done=!1}}class u{constructor(t,e,r){this.event=r,this.done=!!e.done,this.instance=t}}var c=i((()=>{!function(){let t;function e(...e){t.done=e.shift();const r=Array.isArray(e[e.length-1])?e.pop():void 0;postMessage({args:e,post:t},r)}globalThis.return=e.bind(this,!0),globalThis.post=e.bind(this,!1),globalThis.addEventListener("message",(e=>{t=e.data.post,globalThis.receive.apply(e,e.data.args)}),!1)}();
/* @preserve __MultiWorker_placeholder__ */}));const d=new WeakMap;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{}});module.exports=class{constructor(t,e){var r,o;"string"==typeof t||"function"==typeof t?(e=e||{}).worker=t:e=t,"string"!=typeof(t=void 0!==e.worker?e.worker:e)||/^!?\(?\s*function\s*\([^)]*\)\s*\{/.test(t)?setTimeout((()=>{this.worker="function"==typeof t?i(t):t,this._init()})):(o=t=>{this.worker=t,this._init()},s(r=t).then((t=>t.text())).then(o).catch((()=>{r.startsWith("file://")&&(r=r.substr(7)),Promise.resolve().then((function(){return p})).then((t=>{t.readFile(r,"utf8",((t,e)=>{if(t)throw t;o(e)}))})).catch((t=>{throw t}))}))),this.callback=e.callback||n,this.threads=e.threads||1,this.dependencies=e.dependencies||[],this._initProperties()}post(...t){const e=Array.isArray(t[t.length-1])?t.pop():void 0,r="function"==typeof t[t.length-1]?t.pop():this.callback;return this._process(t,r,e),this}terminate(t=!1,e){return"function"==typeof t&&(e=t,t=!1),t||this.ready&&!this.processCount?(this.workerList.forEach((t=>t.terminate())),this._initProperties(),this.threads=0,delete this.terminateWhenFree,"function"==typeof e&&e()):this.terminateWhenFree=e||!0,this}_init(){this.ready=!0,this._initThreads(),this._processQueue()}_process(t,e,r){const o=this._availableWorker,s=new h(r),i={args:t,post:s};this.ready&&o?(this._inProgressData[s.id]={cb:e,worker:o},o.postMessage(i,r),d.set(o,!0),this.processCount++):this.queue.push([t,e,r])}_initProperties(){this.ready=!1,this.workerList=[],this.queue=[],this.processCount=0,this._inProgressData={}}_initThreads(){let t=this.threads;for(;t--;){const t=new r(this._blobUrl);t.addEventListener("message",this.constructor._defaultMessageEvent.bind(this),!1),this.workerList.push(t)}}static _defaultMessageEvent(t){const{post:e}=t.data,{cb:r}=this._inProgressData[e.id],o=new u(this,e,t);e.done&&this._processFinished(e.id),r.apply(o,t.data.args),e.done&&this._processQueue()}_processFinished(t){this.processCount--;const{worker:e}=this._inProgressData[t];return d.set(e,!1),delete this._inProgressData[t],this}_processQueue(){if(this.queue.length&&this.processCount<this.threads){const t=this.queue.shift();this._process(...t),this._processQueue()}else this.terminateWhenFree&&!this.processCount&&this.terminate(!0,this.terminateWhenFree);return this}get _availableWorker(){const t=this.workerList;for(let e=0,r=t.length;e<r;e++)if(!d.get(t[e]))return t[e];return!1}get _workerString(){return c.replace("/* @preserve __MultiWorker_placeholder__ */",this._dependencyString+this.worker)}get _blobUrl(){return this._blobUrlCached||(this._blobUrlCached="undefined"==typeof Blob?`data:text/javascript;base64,${Buffer.from(this._workerString,"binary").toString("base64")}`:URL.createObjectURL(new Blob([this._workerString],{type:"application/javascript"}))),this._blobUrlCached}get _dependencyString(){return this.dependencies.reduce(((t,e)=>`${t+e.toString()};`),"")}};
//# sourceMappingURL=multiworker.cjs.map
