(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2J1s":function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=0,o=[],a=function(e,n,t){var a={type:e,id:String(++r),date:new Date};n&&(a.message=n),t&&(a.data=t),function(e){for(var n=0;n<o.length;n++)try{o[n](e)}catch(t){console.error(t)}}(a)};"undefined"!=typeof window&&(window.__ledgerLogsListen=function(e){return o.push(e),function(){var n=o.indexOf(e);-1!==n&&(o[n]=o[o.length-1],o.pop())}})},"7W2i":function(e,n,t){var r=t("SksO");e.exports=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}},MV7B:function(e,n,t){"use strict";(function(n){var r=t("tnHP"),o=t("vY81"),a=r.BN,i=new a("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),s=function(){function e(t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),t=t||{};var o=[{name:"nonce",length:32,allowLess:!0,default:new n([])},{name:"gasPrice",length:32,allowLess:!0,default:new n([])},{name:"gasLimit",alias:"gas",length:32,allowLess:!0,default:new n([])},{name:"to",allowZero:!0,length:20,default:new n([])},{name:"value",length:32,allowLess:!0,default:new n([])},{name:"data",alias:"input",allowZero:!0,default:new n([])},{name:"v",allowZero:!0,default:new n([28])},{name:"r",length:32,allowZero:!0,allowLess:!0,default:new n([])},{name:"s",length:32,allowZero:!0,allowLess:!0,default:new n([])}];r.defineProperties(this,o,t),Object.defineProperty(this,"from",{enumerable:!0,configurable:!0,get:this.getSenderAddress.bind(this)});var a=r.bufferToInt(this.v),i=Math.floor((a-35)/2);i<0&&(i=0),this._chainId=i||t.chainId||0,this._homestead=!0}return e.prototype.toCreationAddress=function(){return""===this.to.toString("hex")},e.prototype.hash=function(e){void 0===e&&(e=!0);var n=void 0;if(e)n=this.raw;else if(this._chainId>0){var t=this.raw.slice();this.v=this._chainId,this.r=0,this.s=0,n=this.raw,this.raw=t}else n=this.raw.slice(0,6);return r.rlphash(n)},e.prototype.getChainId=function(){return this._chainId},e.prototype.getSenderAddress=function(){if(this._from)return this._from;var e=this.getSenderPublicKey();return this._from=r.publicToAddress(e),this._from},e.prototype.getSenderPublicKey=function(){if(!(this._senderPubKey&&this._senderPubKey.length||this.verifySignature()))throw new Error("Invalid Signature");return this._senderPubKey},e.prototype.verifySignature=function(){var e=this.hash(!1);if(this._homestead&&1===new a(this.s).cmp(i))return!1;try{var n=r.bufferToInt(this.v);this._chainId>0&&(n-=2*this._chainId+8),this._senderPubKey=r.ecrecover(e,n,this.r,this.s)}catch(t){return!1}return!!this._senderPubKey},e.prototype.sign=function(e){var n=this.hash(!1),t=r.ecsign(n,e);this._chainId>0&&(t.v+=2*this._chainId+8),Object.assign(this,t)},e.prototype.getDataFee=function(){for(var e=this.raw[5],n=new a(0),t=0;t<e.length;t++)n.iaddn(0===e[t]?o.txDataZeroGas.v:o.txDataNonZeroGas.v);return n},e.prototype.getBaseFee=function(){var e=this.getDataFee().iaddn(o.txGas.v);return this._homestead&&this.toCreationAddress()&&e.iaddn(o.txCreation.v),e},e.prototype.getUpfrontCost=function(){return new a(this.gasLimit).imul(new a(this.gasPrice)).iadd(new a(this.value))},e.prototype.validate=function(e){var n=[];return this.verifySignature()||n.push("Invalid Signature"),this.getBaseFee().cmp(new a(this.gasLimit))>0&&n.push(["gas limit is too low. Need at least "+this.getBaseFee()]),void 0===e||!1===e?0===n.length:n.join(" ")},e}();e.exports=s}).call(this,t("tjlA").Buffer)},Nsbk:function(e,n){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},PJYZ:function(e,n){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},PTSb:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"v1",function(){return v}),t.d(n,"v3",function(){return S}),t.d(n,"v4",function(){return C}),t.d(n,"v5",function(){return O}),t.d(n,"NIL",function(){return R}),t.d(n,"version",function(){return _}),t.d(n,"validate",function(){return s}),t.d(n,"stringify",function(){return l}),t.d(n,"parse",function(){return g});var o=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}for(var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,s=function(e){return"string"==typeof e&&i.test(e)},u=[],c=0;c<256;++c)u.push((c+256).toString(16).substr(1));var d,f,l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(u[e[n+0]]+u[e[n+1]]+u[e[n+2]]+u[e[n+3]]+"-"+u[e[n+4]]+u[e[n+5]]+"-"+u[e[n+6]]+u[e[n+7]]+"-"+u[e[n+8]]+u[e[n+9]]+"-"+u[e[n+10]]+u[e[n+11]]+u[e[n+12]]+u[e[n+13]]+u[e[n+14]]+u[e[n+15]]).toLowerCase();if(!s(t))throw TypeError("Stringified UUID is invalid");return t},p=0,h=0,v=function(e,n,t){var r=n&&t||0,o=n||new Array(16),i=(e=e||{}).node||d,s=void 0!==e.clockseq?e.clockseq:f;if(null==i||null==s){var u=e.random||(e.rng||a)();null==i&&(i=d=[1|u[0],u[1],u[2],u[3],u[4],u[5]]),null==s&&(s=f=16383&(u[6]<<8|u[7]))}var c=void 0!==e.msecs?e.msecs:Date.now(),v=void 0!==e.nsecs?e.nsecs:h+1,g=c-p+(v-h)/1e4;if(g<0&&void 0===e.clockseq&&(s=s+1&16383),(g<0||c>p)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=c,h=v,f=s;var m=(1e4*(268435455&(c+=122192928e5))+v)%4294967296;o[r++]=m>>>24&255,o[r++]=m>>>16&255,o[r++]=m>>>8&255,o[r++]=255&m;var y=c/4294967296*1e4&268435455;o[r++]=y>>>8&255,o[r++]=255&y,o[r++]=y>>>24&15|16,o[r++]=y>>>16&255,o[r++]=s>>>8|128,o[r++]=255&s;for(var b=0;b<6;++b)o[r+b]=i[b];return n||l(o)},g=function(e){if(!s(e))throw TypeError("Invalid UUID");var n,t=new Uint8Array(16);return t[0]=(n=parseInt(e.slice(0,8),16))>>>24,t[1]=n>>>16&255,t[2]=n>>>8&255,t[3]=255&n,t[4]=(n=parseInt(e.slice(9,13),16))>>>8,t[5]=255&n,t[6]=(n=parseInt(e.slice(14,18),16))>>>8,t[7]=255&n,t[8]=(n=parseInt(e.slice(19,23),16))>>>8,t[9]=255&n,t[10]=(n=parseInt(e.slice(24,36),16))/1099511627776&255,t[11]=n/4294967296&255,t[12]=n>>>24&255,t[13]=n>>>16&255,t[14]=n>>>8&255,t[15]=255&n,t},m=function(e,n,t){function r(e,r,o,a){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var n=[],t=0;t<e.length;++t)n.push(e.charCodeAt(t));return n}(e)),"string"==typeof r&&(r=g(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var i=new Uint8Array(16+e.length);if(i.set(r),i.set(e,r.length),(i=t(i))[6]=15&i[6]|n,i[8]=63&i[8]|128,o){a=a||0;for(var s=0;s<16;++s)o[a+s]=i[s];return o}return l(i)}try{r.name=e}catch(o){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r};function y(e){return 14+(e+64>>>9<<4)+1}function b(e,n){var t=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(t>>16)<<16|65535&t}function w(e,n,t,r,o,a){return b((i=b(b(n,e),b(r,a)))<<(s=o)|i>>>32-s,t);var i,s}function E(e,n,t,r,o,a,i){return w(n&t|~n&r,e,n,o,a,i)}function A(e,n,t,r,o,a,i){return w(n&r|t&~r,e,n,o,a,i)}function N(e,n,t,r,o,a,i){return w(n^t^r,e,n,o,a,i)}function T(e,n,t,r,o,a,i){return w(t^(n|~r),e,n,o,a,i)}var S=m("v3",48,function(e){if("string"==typeof e){var n=unescape(encodeURIComponent(e));e=new Uint8Array(n.length);for(var t=0;t<n.length;++t)e[t]=n.charCodeAt(t)}return function(e){for(var n=[],t=32*e.length,r="0123456789abcdef",o=0;o<t;o+=8){var a=e[o>>5]>>>o%32&255,i=parseInt(r.charAt(a>>>4&15)+r.charAt(15&a),16);n.push(i)}return n}(function(e,n){e[n>>5]|=128<<n%32,e[y(n)-1]=n;for(var t=1732584193,r=-271733879,o=-1732584194,a=271733878,i=0;i<e.length;i+=16){var s=t,u=r,c=o,d=a;t=E(t,r,o,a,e[i],7,-680876936),a=E(a,t,r,o,e[i+1],12,-389564586),o=E(o,a,t,r,e[i+2],17,606105819),r=E(r,o,a,t,e[i+3],22,-1044525330),t=E(t,r,o,a,e[i+4],7,-176418897),a=E(a,t,r,o,e[i+5],12,1200080426),o=E(o,a,t,r,e[i+6],17,-1473231341),r=E(r,o,a,t,e[i+7],22,-45705983),t=E(t,r,o,a,e[i+8],7,1770035416),a=E(a,t,r,o,e[i+9],12,-1958414417),o=E(o,a,t,r,e[i+10],17,-42063),r=E(r,o,a,t,e[i+11],22,-1990404162),t=E(t,r,o,a,e[i+12],7,1804603682),a=E(a,t,r,o,e[i+13],12,-40341101),o=E(o,a,t,r,e[i+14],17,-1502002290),t=A(t,r=E(r,o,a,t,e[i+15],22,1236535329),o,a,e[i+1],5,-165796510),a=A(a,t,r,o,e[i+6],9,-1069501632),o=A(o,a,t,r,e[i+11],14,643717713),r=A(r,o,a,t,e[i],20,-373897302),t=A(t,r,o,a,e[i+5],5,-701558691),a=A(a,t,r,o,e[i+10],9,38016083),o=A(o,a,t,r,e[i+15],14,-660478335),r=A(r,o,a,t,e[i+4],20,-405537848),t=A(t,r,o,a,e[i+9],5,568446438),a=A(a,t,r,o,e[i+14],9,-1019803690),o=A(o,a,t,r,e[i+3],14,-187363961),r=A(r,o,a,t,e[i+8],20,1163531501),t=A(t,r,o,a,e[i+13],5,-1444681467),a=A(a,t,r,o,e[i+2],9,-51403784),o=A(o,a,t,r,e[i+7],14,1735328473),t=N(t,r=A(r,o,a,t,e[i+12],20,-1926607734),o,a,e[i+5],4,-378558),a=N(a,t,r,o,e[i+8],11,-2022574463),o=N(o,a,t,r,e[i+11],16,1839030562),r=N(r,o,a,t,e[i+14],23,-35309556),t=N(t,r,o,a,e[i+1],4,-1530992060),a=N(a,t,r,o,e[i+4],11,1272893353),o=N(o,a,t,r,e[i+7],16,-155497632),r=N(r,o,a,t,e[i+10],23,-1094730640),t=N(t,r,o,a,e[i+13],4,681279174),a=N(a,t,r,o,e[i],11,-358537222),o=N(o,a,t,r,e[i+3],16,-722521979),r=N(r,o,a,t,e[i+6],23,76029189),t=N(t,r,o,a,e[i+9],4,-640364487),a=N(a,t,r,o,e[i+12],11,-421815835),o=N(o,a,t,r,e[i+15],16,530742520),t=T(t,r=N(r,o,a,t,e[i+2],23,-995338651),o,a,e[i],6,-198630844),a=T(a,t,r,o,e[i+7],10,1126891415),o=T(o,a,t,r,e[i+14],15,-1416354905),r=T(r,o,a,t,e[i+5],21,-57434055),t=T(t,r,o,a,e[i+12],6,1700485571),a=T(a,t,r,o,e[i+3],10,-1894986606),o=T(o,a,t,r,e[i+10],15,-1051523),r=T(r,o,a,t,e[i+1],21,-2054922799),t=T(t,r,o,a,e[i+8],6,1873313359),a=T(a,t,r,o,e[i+15],10,-30611744),o=T(o,a,t,r,e[i+6],15,-1560198380),r=T(r,o,a,t,e[i+13],21,1309151649),t=T(t,r,o,a,e[i+4],6,-145523070),a=T(a,t,r,o,e[i+11],10,-1120210379),o=T(o,a,t,r,e[i+2],15,718787259),r=T(r,o,a,t,e[i+9],21,-343485551),t=b(t,s),r=b(r,u),o=b(o,c),a=b(a,d)}return[t,r,o,a]}(function(e){if(0===e.length)return[];for(var n=8*e.length,t=new Uint32Array(y(n)),r=0;r<n;r+=8)t[r>>5]|=(255&e[r/8])<<r%32;return t}(e),8*e.length))}),C=function(e,n,t){var r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(var o=0;o<16;++o)n[t+o]=r[o];return n}return l(r)};function D(e,n,t,r){switch(e){case 0:return n&t^~n&r;case 1:return n^t^r;case 2:return n&t^n&r^t&r;case 3:return n^t^r}}function I(e,n){return e<<n|e>>>32-n}var O=m("v5",80,function(e){var n=[1518500249,1859775393,2400959708,3395469782],t=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var r=unescape(encodeURIComponent(e));e=[];for(var o=0;o<r.length;++o)e.push(r.charCodeAt(o))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var a=Math.ceil((e.length/4+2)/16),i=new Array(a),s=0;s<a;++s){for(var u=new Uint32Array(16),c=0;c<16;++c)u[c]=e[64*s+4*c]<<24|e[64*s+4*c+1]<<16|e[64*s+4*c+2]<<8|e[64*s+4*c+3];i[s]=u}i[a-1][14]=8*(e.length-1)/Math.pow(2,32),i[a-1][14]=Math.floor(i[a-1][14]),i[a-1][15]=8*(e.length-1)&4294967295;for(var d=0;d<a;++d){for(var f=new Uint32Array(80),l=0;l<16;++l)f[l]=i[d][l];for(var p=16;p<80;++p)f[p]=I(f[p-3]^f[p-8]^f[p-14]^f[p-16],1);for(var h=t[0],v=t[1],g=t[2],m=t[3],y=t[4],b=0;b<80;++b){var w=Math.floor(b/20),E=I(h,5)+D(w,v,g,m)+y+n[w]+f[b]>>>0;y=m,m=g,g=I(v,30)>>>0,v=h,h=E}t[0]=t[0]+h>>>0,t[1]=t[1]+v>>>0,t[2]=t[2]+g>>>0,t[3]=t[3]+m>>>0,t[4]=t[4]+y>>>0}return[t[0]>>24&255,t[0]>>16&255,t[0]>>8&255,255&t[0],t[1]>>24&255,t[1]>>16&255,t[1]>>8&255,255&t[1],t[2]>>24&255,t[2]>>16&255,t[2]>>8&255,255&t[2],t[3]>>24&255,t[3]>>16&255,t[3]>>8&255,255&t[3],t[4]>>24&255,t[4]>>16&255,t[4]>>8&255,255&t[4]]}),R="00000000-0000-0000-0000-000000000000",_=function(e){if(!s(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}},Q0pZ:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r='\n\t<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#1652F0"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M5.45508 20.0006C5.45508 28.0338 11.9673 34.546 20.0006 34.546C28.0338 34.546 34.546 28.0338 34.546 20.0006C34.546 11.9673 28.0338 5.45508 20.0006 5.45508C11.9673 5.45508 5.45508 11.9673 5.45508 20.0006ZM17.3137 15.3145C16.2091 15.3145 15.3137 16.2099 15.3137 17.3145V22.6882C15.3137 23.7928 16.2091 24.6882 17.3137 24.6882H22.6874C23.792 24.6882 24.6874 23.7928 24.6874 22.6882V17.3145C24.6874 16.2099 23.792 15.3145 22.6874 15.3145H17.3137Z" fill="white"/>\n\t</svg>\n'},QFga:function(e,n,t){"use strict";t.r(n),t.d(n,"generateAddresses",function(){return c}),t.d(n,"isValidPath",function(){return d});var r=t("ZDeM"),o=t("vUa2"),a=t.n(o),i=t("tjlA"),s=r.publicToAddress,u=r.toChecksumAddress;function c(e,n){var t=e.publicKey,r=e.chainCode,o=e.path,c=new a.a;c.publicKey=new i.Buffer(t,"hex"),c.chainCode=new i.Buffer(r,"hex");for(var d=[],f=n;f<5+n;f++){var l=c.deriveChild(f),p=s(l.publicKey,!0).toString("hex");d.push({dPath:"".concat(o,"/").concat(f),address:u("0x".concat(p))})}return d}function d(e){var n=e.split("/");if("m"!==n[0])return!1;if("44'"!==n[1])return!1;if(!["60'","1'","73799'","246'"].includes(n[2]))return!1;if(void 0===n[3]||"0'"===n[3])return!0;var t=Number(n[3].slice(0,-1));if(isNaN(t)||t<0||"'"!==n[3].slice(-1))return!1;if(void 0===n[4])return!0;var r=Number(n[4]);if(isNaN(r)||r<0)return!1;if(void 0===n[5])return!0;var o=Number(n[5]);return!(isNaN(o)||o<0)}},SksO:function(e,n){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(n,r)}e.exports=t},TqRt:function(e,n){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},W8MJ:function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},WkPL:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}},ZhPi:function(e,n,t){var r=t("WkPL");e.exports=function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}},a1gu:function(e,n,t){var r=t("cDf5"),o=t("PJYZ");e.exports=function(e,n){return!n||"object"!==r(n)&&"function"!=typeof n?o(e):n}},cDf5:function(e,n){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t},lSNA:function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},lwsE:function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},o0o1:function(e,n,t){e.exports=t("ls82")},vY81:function(e){e.exports=JSON.parse('{"genesisGasLimit":{"v":5000,"d":"Gas limit of the Genesis block."},"genesisDifficulty":{"v":17179869184,"d":"Difficulty of the Genesis block."},"genesisNonce":{"v":"0x0000000000000042","d":"the geneis nonce"},"genesisExtraData":{"v":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","d":"extra data "},"genesisHash":{"v":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","d":"genesis hash"},"genesisStateRoot":{"v":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544","d":"the genesis state root"},"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be."},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations."},"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be."},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations."},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},"maximumExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis."},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs."},"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed."},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack."},"tierStepGas":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them."},"expGas":{"v":10,"d":"Once per EXP instuction."},"expByteGas":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction."},"sha3Gas":{"v":30,"d":"Once per SHA3 operation."},"sha3WordGas":{"v":6,"d":"Once per word of the SHA3 operation\'s data."},"sloadGas":{"v":50,"d":"Once per SLOAD operation."},"sstoreSetGas":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero."},"sstoreResetGas":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero."},"sstoreRefundGas":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero."},"jumpdestGas":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},"logGas":{"v":375,"d":"Per LOG* operation."},"logDataGas":{"v":8,"d":"Per byte in a LOG* operation\'s data."},"logTopicGas":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},"createGas":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction."},"callGas":{"v":40,"d":"Once per CALL operation & message call transaction."},"callStipend":{"v":2300,"d":"Free gas given at beginning of call."},"callValueTransferGas":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero."},"callNewAccountGas":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior."},"suicideRefundGas":{"v":24000,"d":"Refunded following a suicide operation."},"memoryGas":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation."},"createDataGas":{"v":200,"d":""},"txGas":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions."},"txCreation":{"v":32000,"d":"the cost of creating a contract via tx"},"txDataZeroGas":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},"txDataNonZeroGas":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},"copyGas":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},"ecrecoverGas":{"v":3000,"d":""},"sha256Gas":{"v":60,"d":""},"sha256WordGas":{"v":12,"d":""},"ripemd160Gas":{"v":600,"d":""},"ripemd160WordGas":{"v":120,"d":""},"identityGas":{"v":15,"d":""},"identityWordGas":{"v":3,"d":""},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"ommerReward":{"v":"625000000000000000","d":"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},"niblingReward":{"v":"156250000000000000","d":"the amount a miner gets for inculding a uncle"},"homeSteadForkNumber":{"v":1150000,"d":"the block that the Homestead fork started at"},"homesteadRepriceForkNumber":{"v":2463000,"d":"the block that the Homestead Reprice (EIP150) fork started at"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"freeBlockPeriod":{"v":2}}')},wA6j:function(e,n,t){"use strict";t.r(n),t.d(n,"serializeError",function(){return u}),t.d(n,"deserializeError",function(){return s}),t.d(n,"createCustomErrorClass",function(){return i}),t.d(n,"addCustomErrorDeserializer",function(){return a}),t.d(n,"AccountNameRequiredError",function(){return d}),t.d(n,"AccountNotSupported",function(){return f}),t.d(n,"AmountRequired",function(){return l}),t.d(n,"BluetoothRequired",function(){return p}),t.d(n,"BtcUnmatchedApp",function(){return h}),t.d(n,"CantOpenDevice",function(){return v}),t.d(n,"CashAddrNotSupported",function(){return g}),t.d(n,"CurrencyNotSupported",function(){return m}),t.d(n,"DeviceAppVerifyNotSupported",function(){return y}),t.d(n,"DeviceGenuineSocketEarlyClose",function(){return b}),t.d(n,"DeviceNotGenuineError",function(){return w}),t.d(n,"DeviceOnDashboardExpected",function(){return E}),t.d(n,"DeviceOnDashboardUnexpected",function(){return A}),t.d(n,"DeviceInOSUExpected",function(){return N}),t.d(n,"DeviceHalted",function(){return T}),t.d(n,"DeviceNameInvalid",function(){return S}),t.d(n,"DeviceSocketFail",function(){return C}),t.d(n,"DeviceSocketNoBulkStatus",function(){return D}),t.d(n,"DisconnectedDevice",function(){return I}),t.d(n,"DisconnectedDeviceDuringOperation",function(){return O}),t.d(n,"EnpointConfigError",function(){return R}),t.d(n,"EthAppPleaseEnableContractData",function(){return _}),t.d(n,"FeeEstimationFailed",function(){return U}),t.d(n,"FirmwareNotRecognized",function(){return P}),t.d(n,"HardResetFail",function(){return L}),t.d(n,"InvalidXRPTag",function(){return x}),t.d(n,"InvalidAddress",function(){return k}),t.d(n,"InvalidAddressBecauseDestinationIsAlsoSource",function(){return G}),t.d(n,"LatestMCUInstalledError",function(){return F}),t.d(n,"UnknownMCU",function(){return M}),t.d(n,"LedgerAPIError",function(){return B}),t.d(n,"LedgerAPIErrorWithMessage",function(){return z}),t.d(n,"LedgerAPINotAvailable",function(){return q}),t.d(n,"ManagerAppAlreadyInstalledError",function(){return W}),t.d(n,"ManagerAppRelyOnBTCError",function(){return j}),t.d(n,"ManagerAppDepInstallRequired",function(){return H}),t.d(n,"ManagerAppDepUninstallRequired",function(){return V}),t.d(n,"ManagerDeviceLockedError",function(){return Z}),t.d(n,"ManagerFirmwareNotEnoughSpaceError",function(){return K}),t.d(n,"ManagerNotEnoughSpaceError",function(){return Y}),t.d(n,"ManagerUninstallBTCDep",function(){return J}),t.d(n,"NetworkDown",function(){return X}),t.d(n,"NoAddressesFound",function(){return Q}),t.d(n,"NotEnoughBalance",function(){return $}),t.d(n,"NotEnoughBalanceToDelegate",function(){return ee}),t.d(n,"NotEnoughBalanceInParentAccount",function(){return ne}),t.d(n,"NotEnoughSpendableBalance",function(){return te}),t.d(n,"NotEnoughBalanceBecauseDestinationNotCreated",function(){return re}),t.d(n,"NoAccessToCamera",function(){return oe}),t.d(n,"NotEnoughGas",function(){return ae}),t.d(n,"NotSupportedLegacyAddress",function(){return ie}),t.d(n,"GasLessThanEstimate",function(){return se}),t.d(n,"PasswordsDontMatchError",function(){return ue}),t.d(n,"PasswordIncorrectError",function(){return ce}),t.d(n,"RecommendSubAccountsToEmpty",function(){return de}),t.d(n,"RecommendUndelegation",function(){return fe}),t.d(n,"TimeoutTagged",function(){return le}),t.d(n,"UnexpectedBootloader",function(){return pe}),t.d(n,"MCUNotGenuineToDashboard",function(){return he}),t.d(n,"RecipientRequired",function(){return ve}),t.d(n,"UnavailableTezosOriginatedAccountReceive",function(){return ge}),t.d(n,"UnavailableTezosOriginatedAccountSend",function(){return me}),t.d(n,"UpdateFetchFileFail",function(){return ye}),t.d(n,"UpdateIncorrectHash",function(){return be}),t.d(n,"UpdateIncorrectSig",function(){return we}),t.d(n,"UpdateYourApp",function(){return Ee}),t.d(n,"UserRefusedDeviceNameChange",function(){return Ae}),t.d(n,"UserRefusedAddress",function(){return Ne}),t.d(n,"UserRefusedFirmwareUpdate",function(){return Te}),t.d(n,"UserRefusedAllowManager",function(){return Se}),t.d(n,"UserRefusedOnDevice",function(){return Ce}),t.d(n,"TransportOpenUserCancelled",function(){return De}),t.d(n,"TransportInterfaceNotAvailable",function(){return Ie}),t.d(n,"TransportRaceCondition",function(){return Oe}),t.d(n,"TransportWebUSBGestureRequired",function(){return Re}),t.d(n,"DeviceShouldStayInApp",function(){return _e}),t.d(n,"WebsocketConnectionError",function(){return Ue}),t.d(n,"WebsocketConnectionFailed",function(){return Pe}),t.d(n,"WrongDeviceForAccount",function(){return Le}),t.d(n,"WrongAppForCurrency",function(){return xe}),t.d(n,"ETHAddressNonEIP",function(){return ke}),t.d(n,"CantScanQRCode",function(){return Ge}),t.d(n,"FeeNotLoaded",function(){return Fe}),t.d(n,"FeeRequired",function(){return Me}),t.d(n,"FeeTooHigh",function(){return Be}),t.d(n,"SyncError",function(){return ze}),t.d(n,"PairingFailed",function(){return qe}),t.d(n,"GenuineCheckFailed",function(){return We}),t.d(n,"LedgerAPI4xx",function(){return je}),t.d(n,"LedgerAPI5xx",function(){return He}),t.d(n,"FirmwareOrAppUpdateRequired",function(){return Ve}),t.d(n,"NoDBPathGiven",function(){return Ze}),t.d(n,"DBWrongPassword",function(){return Ke}),t.d(n,"DBNotReset",function(){return Ye}),t.d(n,"TransportError",function(){return Je}),t.d(n,"StatusCodes",function(){return Xe}),t.d(n,"getAltStatusMessage",function(){return Qe}),t.d(n,"TransportStatusError",function(){return $e});var r={},o={},a=function(e,n){o[e]=n},i=function(e){var n=function(n,t){Object.assign(this,t),this.name=e,this.message=n||e,this.stack=(new Error).stack};return n.prototype=new Error,r[e]=n,n},s=function(e){if("object"==typeof e&&e){try{var n=JSON.parse(e.message);n.message&&n.name&&(e=n)}catch(f){}var t=void 0;if("string"==typeof e.name){var a=e.name,u=o[a];if(u)t=u(e);else{var c="Error"===a?Error:r[a];c||(console.warn("deserializing an unknown class '"+a+"'"),c=i(a)),t=Object.create(c.prototype);try{for(var d in e)e.hasOwnProperty(d)&&(t[d]=e[d])}catch(f){}}}else t=new Error(e.message);return!t.stack&&Error.captureStackTrace&&Error.captureStackTrace(t,s),t}return new Error(String(e))},u=function(e){return e?"object"==typeof e?c(e,[]):"function"==typeof e?"[Function: "+(e.name||"anonymous")+"]":e:e};function c(e,n){var t,r,o={};n.push(e);try{for(var a=function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}(Object.keys(e)),i=a.next();!i.done;i=a.next()){var s=i.value,u=e[s];"function"!=typeof u&&(o[s]=u&&"object"==typeof u?-1!==n.indexOf(e[s])?"[Circular]":c(e[s],n.slice(0)):u)}}catch(d){t={error:d}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}return"string"==typeof e.name&&(o.name=e.name),"string"==typeof e.message&&(o.message=e.message),"string"==typeof e.stack&&(o.stack=e.stack),o}var d=i("AccountNameRequired"),f=i("AccountNotSupported"),l=i("AmountRequired"),p=i("BluetoothRequired"),h=i("BtcUnmatchedApp"),v=i("CantOpenDevice"),g=i("CashAddrNotSupported"),m=i("CurrencyNotSupported"),y=i("DeviceAppVerifyNotSupported"),b=i("DeviceGenuineSocketEarlyClose"),w=i("DeviceNotGenuine"),E=i("DeviceOnDashboardExpected"),A=i("DeviceOnDashboardUnexpected"),N=i("DeviceInOSUExpected"),T=i("DeviceHalted"),S=i("DeviceNameInvalid"),C=i("DeviceSocketFail"),D=i("DeviceSocketNoBulkStatus"),I=i("DisconnectedDevice"),O=i("DisconnectedDeviceDuringOperation"),R=i("EnpointConfig"),_=i("EthAppPleaseEnableContractData"),U=i("FeeEstimationFailed"),P=i("FirmwareNotRecognized"),L=i("HardResetFail"),x=i("InvalidXRPTag"),k=i("InvalidAddress"),G=i("InvalidAddressBecauseDestinationIsAlsoSource"),F=i("LatestMCUInstalledError"),M=i("UnknownMCU"),B=i("LedgerAPIError"),z=i("LedgerAPIErrorWithMessage"),q=i("LedgerAPINotAvailable"),W=i("ManagerAppAlreadyInstalled"),j=i("ManagerAppRelyOnBTC"),H=i("ManagerAppDepInstallRequired"),V=i("ManagerAppDepUninstallRequired"),Z=i("ManagerDeviceLocked"),K=i("ManagerFirmwareNotEnoughSpace"),Y=i("ManagerNotEnoughSpace"),J=i("ManagerUninstallBTCDep"),X=i("NetworkDown"),Q=i("NoAddressesFound"),$=i("NotEnoughBalance"),ee=i("NotEnoughBalanceToDelegate"),ne=i("NotEnoughBalanceInParentAccount"),te=i("NotEnoughSpendableBalance"),re=i("NotEnoughBalanceBecauseDestinationNotCreated"),oe=i("NoAccessToCamera"),ae=i("NotEnoughGas"),ie=i("NotSupportedLegacyAddress"),se=i("GasLessThanEstimate"),ue=i("PasswordsDontMatch"),ce=i("PasswordIncorrect"),de=i("RecommendSubAccountsToEmpty"),fe=i("RecommendUndelegation"),le=i("TimeoutTagged"),pe=i("UnexpectedBootloader"),he=i("MCUNotGenuineToDashboard"),ve=i("RecipientRequired"),ge=i("UnavailableTezosOriginatedAccountReceive"),me=i("UnavailableTezosOriginatedAccountSend"),ye=i("UpdateFetchFileFail"),be=i("UpdateIncorrectHash"),we=i("UpdateIncorrectSig"),Ee=i("UpdateYourApp"),Ae=i("UserRefusedDeviceNameChange"),Ne=i("UserRefusedAddress"),Te=i("UserRefusedFirmwareUpdate"),Se=i("UserRefusedAllowManager"),Ce=i("UserRefusedOnDevice"),De=i("TransportOpenUserCancelled"),Ie=i("TransportInterfaceNotAvailable"),Oe=i("TransportRaceCondition"),Re=i("TransportWebUSBGestureRequired"),_e=i("DeviceShouldStayInApp"),Ue=i("WebsocketConnectionError"),Pe=i("WebsocketConnectionFailed"),Le=i("WrongDeviceForAccount"),xe=i("WrongAppForCurrency"),ke=i("ETHAddressNonEIP"),Ge=i("CantScanQRCode"),Fe=i("FeeNotLoaded"),Me=i("FeeRequired"),Be=i("FeeTooHigh"),ze=i("SyncError"),qe=i("PairingFailed"),We=i("GenuineCheckFailed"),je=i("LedgerAPI4xx"),He=i("LedgerAPI5xx"),Ve=i("FirmwareOrAppUpdateRequired"),Ze=i("NoDBPathGiven"),Ke=i("DBWrongPassword"),Ye=i("DBNotReset");function Je(e,n){this.name="TransportError",this.message=e,this.stack=(new Error).stack,this.id=n}Je.prototype=new Error,a("TransportError",function(e){return new Je(e.message,e.id)});var Xe={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,MISSING_CRITICAL_PARAMETER:26624,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586};function Qe(e){switch(e){case 26368:return"Incorrect length";case 26624:return"Missing critical parameter";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received"}if(28416<=e&&e<=28671)return"Internal error, please report"}function $e(e){this.name="TransportStatusError";var n=Object.keys(Xe).find(function(n){return Xe[n]===e})||"UNKNOWN_ERROR",t=Qe(e)||n,r=e.toString(16);this.message="Ledger device: "+t+" (0x"+r+")",this.stack=(new Error).stack,this.statusCode=e,this.statusText=n}$e.prototype=new Error,a("TransportStatusError",function(e){return new $e(e.statusCode)})},yXPU:function(e,n){function t(e,n,t,r,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void t(c)}s.done?n(u):Promise.resolve(u).then(r,o)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise(function(o,a){var i=e.apply(n,r);function s(e){t(i,o,a,s,u,"next",e)}function u(e){t(i,o,a,s,u,"throw",e)}s(void 0)})}}},zfVJ:function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return o});var r=function(e){var n=e.currentWallet,t=e.selectedWallet;return n?'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    We have detected that you already have\n    <b>'.concat(n,"</b>\n    installed. If you would prefer to use\n    <b>").concat(t,'</b>\n    instead, then click below to install.\n    </p>\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    <b>Tip:</b>\n    If you already have ').concat(t,' installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick="window.location.reload();">\n      Then refresh the page.\n    </span>\n    </p>\n    '):'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    You\'ll need to install <b>'.concat(t,'</b> to continue. Once you have it installed, go ahead and\n    <span\n    class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ').concat("Opera"===t?'<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>':"","\n    </p>\n    ")},o=function(e){var n=e.selectedWallet;return'\n  <p style="font-size: 0.889rem;">\n  Tap the button below to <b>Open '.concat(n,"</b>. Please access this site on ").concat(n,"'s in-app browser for a seamless experience.\n  </p>\n  ")}}}]);