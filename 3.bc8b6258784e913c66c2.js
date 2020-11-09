(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{13:function(e,r){},"1TIO":function(e){e.exports=JSON.parse('{"4001":{"standard":"EIP 1193","message":"User rejected the request."},"4100":{"standard":"EIP 1193","message":"The requested account and/or method has not been authorized by the user."},"4200":{"standard":"EIP 1193","message":"The requested method is not supported by this Ethereum provider."},"-32700":{"standard":"JSON RPC 2.0","message":"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{"standard":"JSON RPC 2.0","message":"The JSON sent is not a valid Request object."},"-32601":{"standard":"JSON RPC 2.0","message":"The method does not exist / is not available."},"-32602":{"standard":"JSON RPC 2.0","message":"Invalid method parameter(s)."},"-32603":{"standard":"JSON RPC 2.0","message":"Internal JSON-RPC error."},"-32000":{"standard":"EIP 1474","message":"Invalid input."},"-32001":{"standard":"EIP 1474","message":"Resource not found."},"-32002":{"standard":"EIP 1474","message":"Resource unavailable."},"-32003":{"standard":"EIP 1474","message":"Transaction rejected."},"-32004":{"standard":"EIP 1474","message":"Method not supported."}}')},J3L4:function(e,r,t){"use strict";t.r(r);var s=t("f4g2"),o=t.n(s),n=t("WPTD"),a=t.n(n),i=t("Rlsf"),c=t.n(i),d=t("EqmL"),u=t.n(d),p=t("cC/c"),g=t.n(p);r.default=function(e){var r=e.getAccounts,t=e.rpcUrl,s=r&&new c.a({getAccounts:r,signTransaction:e.signTransaction,processMessage:e.processMessage,processPersonalMessage:e.processPersonalMessage,signMessage:e.signMessage,signPersonalMessage:e.signPersonalMessage}),n=new a.a({rpcUrl:t.includes("http")?t:"https://".concat(t)}),i=new o.a;return i.addProvider(new u.a),i.addProvider(new g.a),s&&i.addProvider(s),i.addProvider(n),i.start(),i.on("error",console.error),i}},Lf5n:function(e,r,t){const s=t("N1pS");class o extends Error{constructor(e,r,t){if(!Number.isInteger(e))throw new Error('"code" must be an integer.');if(!r||"string"!=typeof r)throw new Error('"message" must be a nonempty string.');super(r),this.code=e,void 0!==t&&(this.data=t)}serialize(){const e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data),this.stack&&(e.stack=this.stack),e}toString(){return s(this.serialize(),n,2)}}function n(e,r){if("[Circular]"!==r)return r}e.exports={EthereumRpcError:o,EthereumProviderError:class extends o{constructor(e,r,t){if(!function(e){return Number.isInteger(e)&&e>=1e3&&e<=4999}(e))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,r,t)}}}},WPTD:function(e,r,t){(function(r){const s=t(r.browser?"7sdD":13),o=t("MCLT").inherits,n=t("xQaN"),a=t("Uu7K"),{ethErrors:i,serializeError:c}=t("z8+S");function d(e){this.rpcUrl=e.rpcUrl}e.exports=d,o(d,a),d.prototype.handleRequest=function(e,r,t){const o=this.rpcUrl,a=function(e){return{id:e.id,jsonrpc:e.jsonrpc,method:e.method,params:e.params}}(e),d=n(a);s({uri:o,method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(d),rejectUnauthorized:!1,timeout:2e4},(function(e,r,s){if(e)return t(c(e));switch(r.statusCode){case 405:return t(i.rpc.methodNotFound());case 504:return function(){let e="Gateway timeout. The request took too long to process. ";e+="This can happen when querying logs over too wide a block range.";const r=new Error("Gateway timeout. The request took too long to process. This can happen when querying logs over too wide a block range.");return t(c(r))}();case 429:return function(){const e=new Error("Too Many Requests");return t(c(e))}();default:if(200!=r.statusCode){const e=new Error("Unknown Error: "+r.body);return t(c(e))}}let o;try{o=JSON.parse(s)}catch(e){return console.error(e.stack),t(c(e))}if(o.error)return t(o.error);t(null,o.result)}))}}).call(this,t("8oxB"))},drvL:function(e){e.exports=JSON.parse('{"rpc":{"invalidInput":-32000,"resourceNotFound":-32001,"resourceUnavailable":-32002,"transactionRejected":-32003,"methodNotSupported":-32004,"parse":-32700,"invalidRequest":-32600,"methodNotFound":-32601,"invalidParams":-32602,"internal":-32603},"provider":{"userRejectedRequest":4001,"unauthorized":4100,"unsupportedMethod":4200}}')},rdiz:function(e,r,t){const s=t("1TIO"),o=t("drvL").rpc.internal,{EthereumRpcError:n}=t("Lf5n"),a="Unspecified server error.",i={code:o,message:c(o)};function c(e,r="Unspecified error message. This is a bug, please report it."){if(Number.isInteger(e)){const r=e.toString();if(s[r])return s[r].message;if(u(e))return a}return r}function d(e){if(!Number.isInteger(e))return!1;const r=e.toString();return!!s[r]||!!u(e)}function u(e){return e>=-32099&&e<=-32e3}function p(e){return e&&"object"==typeof e&&!Array.isArray(e)?Object.assign({},e):e}e.exports={getMessageFromCode:c,isValidCode:d,serializeError:function(e,r=i){if(!r||!Number.isInteger(r.code)||"string"!=typeof r.message)throw new Error("fallbackError must contain integer number code and string message.");if(e instanceof n)return e.serialize();const t={};return e&&d(e.code)?(t.code=e.code,e.message&&"string"==typeof e.message?(t.message=e.message,e.hasOwnProperty("data")&&(t.data=e.data)):(t.message=c(t.code),t.data={originalError:p(e)})):(t.code=r.code,t.message=e&&e.message?e.message:r.message,t.data={originalError:p(e)}),e&&e.stack&&(t.stack=e.stack),t},JSON_RPC_SERVER_ERROR_MESSAGE:a}},"z8+S":function(e,r,t){const{EthereumRpcError:s,EthereumProviderError:o}=t("Lf5n"),{serializeError:n,getMessageFromCode:a}=t("rdiz"),i=t("zUc0"),c=t("drvL");e.exports={ethErrors:i,EthereumRpcError:s,EthereumProviderError:o,serializeError:n,getMessageFromCode:a,ERROR_CODES:c}},zUc0:function(e,r,t){const{EthereumRpcError:s,EthereumProviderError:o}=t("Lf5n"),{getMessageFromCode:n}=t("rdiz"),a=t("drvL");function i(e,r){const[t,o]=d(r);return new s(e,t||n(e),o)}function c(e,r){const[t,s]=d(r);return new o(e,t||n(e),s)}function d(e){let r,t;return e&&("string"==typeof e?r=e:"object"!=typeof e||Array.isArray(e)||(r=e.message,t=e.data)),[r,t]}e.exports={rpc:{parse:e=>i(a.rpc.parse,e),invalidRequest:e=>i(a.rpc.invalidRequest,e),invalidParams:e=>i(a.rpc.invalidParams,e),methodNotFound:e=>i(a.rpc.methodNotFound,e),internal:e=>i(a.rpc.internal,e),server:e=>{if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum RPC Server errors must provide single object argument.");const{code:r}=e;if(!Number.isInteger(r)||r>-32005||r<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return i(r,e)},invalidInput:e=>i(a.rpc.invalidInput,e),resourceNotFound:e=>i(a.rpc.resourceNotFound,e),resourceUnavailable:e=>i(a.rpc.resourceUnavailable,e),transactionRejected:e=>i(a.rpc.transactionRejected,e),methodNotSupported:e=>i(a.rpc.methodNotSupported,e)},provider:{userRejectedRequest:e=>c(a.provider.userRejectedRequest,e),unauthorized:e=>c(a.provider.unauthorized,e),unsupportedMethod:e=>c(a.provider.unsupportedMethod,e),custom:e=>{if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum Provider custom errors must provide single object argument.");const{code:r,message:t,data:s}=e;if(!t||"string"!=typeof t)throw new Error('"message" must be a nonempty string');return new o(r,t,s)}}}}}]);