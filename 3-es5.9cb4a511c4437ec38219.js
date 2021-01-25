!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,o=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return t}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&d(e,r)}function a(e){var r=c();return function(){var t,n=f(e);if(r){var o=f(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return s(this,t)}}function s(e,r){return!r||"object"!=typeof r&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function i(e){var r="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return u(e,arguments,f(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),d(n,e)})(e)}function u(e,r,t){return(u=c()?Reflect.construct:function(e,r,t){var n=[null];n.push.apply(n,r);var o=new(Function.bind.apply(e,n));return t&&d(o,t.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function d(e,r){return(d=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{14:function(e,r){},"1TIO":function(e){e.exports=JSON.parse('{"4001":{"standard":"EIP 1193","message":"User rejected the request."},"4100":{"standard":"EIP 1193","message":"The requested account and/or method has not been authorized by the user."},"4200":{"standard":"EIP 1193","message":"The requested method is not supported by this Ethereum provider."},"-32700":{"standard":"JSON RPC 2.0","message":"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{"standard":"JSON RPC 2.0","message":"The JSON sent is not a valid Request object."},"-32601":{"standard":"JSON RPC 2.0","message":"The method does not exist / is not available."},"-32602":{"standard":"JSON RPC 2.0","message":"Invalid method parameter(s)."},"-32603":{"standard":"JSON RPC 2.0","message":"Internal JSON-RPC error."},"-32000":{"standard":"EIP 1474","message":"Invalid input."},"-32001":{"standard":"EIP 1474","message":"Resource not found."},"-32002":{"standard":"EIP 1474","message":"Resource unavailable."},"-32003":{"standard":"EIP 1474","message":"Transaction rejected."},"-32004":{"standard":"EIP 1474","message":"Method not supported."}}')},Lf5n:function(e,r,s){var u=s("N1pS"),c=function(e){o(f,e);var r,s,i,c=a(f);function f(e,r,n){var o;if(t(this,f),!Number.isInteger(e))throw new Error('"code" must be an integer.');if(!r||"string"!=typeof r)throw new Error('"message" must be a nonempty string.');return(o=c.call(this,r)).code=e,void 0!==n&&(o.data=n),o}return r=f,(s=[{key:"serialize",value:function(){var e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data),this.stack&&(e.stack=this.stack),e}},{key:"toString",value:function(){return u(this.serialize(),d,2)}}])&&n(r.prototype,s),i&&n(r,i),f}(i(Error));function d(e,r){if("[Circular]"!==r)return r}e.exports={EthereumRpcError:c,EthereumProviderError:function(e){o(n,e);var r=a(n);function n(e,o,a){if(t(this,n),!function(e){return Number.isInteger(e)&&e>=1e3&&e<=4999}(e))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');return r.call(this,e,o,a)}return n}(c)}},WPTD:function(e,r,t){(function(r){var n=t(r.browser?"7sdD":14),o=t("MCLT").inherits,a=t("xQaN"),s=t("Uu7K"),i=t("z8+S"),u=i.ethErrors,c=i.serializeError;function d(e){this.rpcUrl=e.rpcUrl}e.exports=d,o(d,s),d.prototype.handleRequest=function(e,r,t){var o=this.rpcUrl,s=function(e){return{id:e.id,jsonrpc:e.jsonrpc,method:e.method,params:e.params}}(e),i=a(s);n({uri:o,method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(i),rejectUnauthorized:!1,timeout:2e4},function(e,r,n){if(e)return t(c(e));switch(r.statusCode){case 405:return t(u.rpc.methodNotFound());case 504:return function(){var e=new Error("Gateway timeout. The request took too long to process. This can happen when querying logs over too wide a block range.");return t(c(e))}();case 429:return function(){var e=new Error("Too Many Requests");return t(c(e))}();default:if(200!=r.statusCode){var o=new Error("Unknown Error: "+r.body);return t(c(o))}}var a;try{a=JSON.parse(n)}catch(e){return console.error(e.stack),t(c(e))}if(a.error)return t(a.error);t(null,a.result)})}}).call(this,t("8oxB"))},ZdnY:function(e,r,t){"use strict";t.r(r),t("ls82");var n=t("hWsi"),o=(t("kB5k"),t("/TMw"),t("M39V"),t("f4g2")),a=t.n(o),s=t("WPTD"),i=t.n(s),u=t("Rlsf"),c=t.n(u),d=t("EqmL"),f=t.n(d),p=t("cC/c"),l=t.n(p);r.default=function(e){var r=e.getAccounts,t=e.signTransaction,o=e.rpcUrl,s=e.processMessage,u=e.processPersonalMessage,d=e.signMessage,p=e.signPersonalMessage,h=Object(n.e)(n.a).blockPollingInterval,g=r&&new c.a({getAccounts:r,signTransaction:t,processMessage:s,processPersonalMessage:u,signMessage:d,signPersonalMessage:p}),m=new i.a({rpcUrl:o.includes("http")?o:"https://".concat(o)}),v=new a.a({pollingInterval:h});return v.addProvider(new f.a),v.addProvider(new l.a),g&&v.addProvider(g),v.addProvider(m),v.start(),v.on("error",console.error),v}},drvL:function(e){e.exports=JSON.parse('{"rpc":{"invalidInput":-32000,"resourceNotFound":-32001,"resourceUnavailable":-32002,"transactionRejected":-32003,"methodNotSupported":-32004,"parse":-32700,"invalidRequest":-32600,"methodNotFound":-32601,"invalidParams":-32602,"internal":-32603},"provider":{"userRejectedRequest":4001,"unauthorized":4100,"unsupportedMethod":4200}}')},rdiz:function(e,r,t){var n=t("1TIO"),o=t("drvL").rpc.internal,a=t("Lf5n").EthereumRpcError,s={code:o,message:i(o)};function i(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Unspecified error message. This is a bug, please report it.";if(Number.isInteger(e)){var t=e.toString();if(n[t])return n[t].message;if(c(e))return"Unspecified server error."}return r}function u(e){if(!Number.isInteger(e))return!1;var r=e.toString();return!!n[r]||!!c(e)}function c(e){return e>=-32099&&e<=-32e3}function d(e){return e&&"object"==typeof e&&!Array.isArray(e)?Object.assign({},e):e}e.exports={getMessageFromCode:i,isValidCode:u,serializeError:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;if(!r||!Number.isInteger(r.code)||"string"!=typeof r.message)throw new Error("fallbackError must contain integer number code and string message.");if(e instanceof a)return e.serialize();var t={};return e&&u(e.code)?(t.code=e.code,e.message&&"string"==typeof e.message?(t.message=e.message,e.hasOwnProperty("data")&&(t.data=e.data)):(t.message=i(t.code),t.data={originalError:d(e)})):(t.code=r.code,t.message=e&&e.message?e.message:r.message,t.data={originalError:d(e)}),e&&e.stack&&(t.stack=e.stack),t},JSON_RPC_SERVER_ERROR_MESSAGE:"Unspecified server error."}},"z8+S":function(e,r,t){var n=t("Lf5n"),o=n.EthereumRpcError,a=n.EthereumProviderError,s=t("rdiz"),i=s.serializeError,u=s.getMessageFromCode,c=t("zUc0"),d=t("drvL");e.exports={ethErrors:c,EthereumRpcError:o,EthereumProviderError:a,serializeError:i,getMessageFromCode:u,ERROR_CODES:d}},zUc0:function(r,t,n){var o=n("Lf5n"),a=o.EthereumRpcError,s=o.EthereumProviderError,i=n("rdiz").getMessageFromCode,u=n("drvL");function c(r,t){var n=e(f(t),2),o=n[0],s=n[1];return new a(r,o||i(r),s)}function d(r,t){var n=e(f(t),2),o=n[0],a=n[1];return new s(r,o||i(r),a)}function f(e){var r,t;return e&&("string"==typeof e?r=e:"object"!=typeof e||Array.isArray(e)||(r=e.message,t=e.data)),[r,t]}r.exports={rpc:{parse:function(e){return c(u.rpc.parse,e)},invalidRequest:function(e){return c(u.rpc.invalidRequest,e)},invalidParams:function(e){return c(u.rpc.invalidParams,e)},methodNotFound:function(e){return c(u.rpc.methodNotFound,e)},internal:function(e){return c(u.rpc.internal,e)},server:function(e){if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum RPC Server errors must provide single object argument.");var r=e.code;if(!Number.isInteger(r)||r>-32005||r<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return c(r,e)},invalidInput:function(e){return c(u.rpc.invalidInput,e)},resourceNotFound:function(e){return c(u.rpc.resourceNotFound,e)},resourceUnavailable:function(e){return c(u.rpc.resourceUnavailable,e)},transactionRejected:function(e){return c(u.rpc.transactionRejected,e)},methodNotSupported:function(e){return c(u.rpc.methodNotSupported,e)}},provider:{userRejectedRequest:function(e){return d(u.provider.userRejectedRequest,e)},unauthorized:function(e){return d(u.provider.unauthorized,e)},unsupportedMethod:function(e){return d(u.provider.unsupportedMethod,e)},custom:function(e){if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum Provider custom errors must provide single object argument.");var r=e.code,t=e.message,n=e.data;if(!t||"string"!=typeof t)throw new Error('"message" must be a nonempty string');return new s(r,t,n)}}}}}])}();