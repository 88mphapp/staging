(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{edIQ:function(e,n,r){"use strict";r.r(n);var t=r("Q0pZ");function o(e,n,r,t,o,a,c){try{var i=e[a](c),u=i.value}catch(s){return void r(s)}i.done?n(u):Promise.resolve(u).then(t,o)}n.default=function(e){var n,a,c=e.rpcUrl,i=e.appName,u=e.appLogoUrl,s=e.networkId,p=e.preferred;return{name:e.label||"Coinbase Wallet",svg:e.svg||t.a,iconSrc:e.iconSrc,wallet:(n=regeneratorRuntime.mark(function e(n){var t,o,a,p,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.getBalance,o=n.getAddress,a=n.getNetwork,e.next=3,Promise.all([r.e(8),r.e(3),r.e(11),r.e(26)]).then(r.t.bind(null,"Py8h",7));case 3:return p=new(0,e.sent.default)({appName:i,appLogoUrl:u}),d=p.makeWeb3Provider(c,s),e.abrupt("return",{provider:d,interface:{name:"Coinbase Wallet",connect:function(){return new Promise(function(e,n){d.enable().then(function(n){return e(n)}).catch(function(){return n({message:"This dapp needs access to your account information."})})})},disconnect:function(){d.disconnect()},address:{get:function(){return o(d)}},network:{get:function(){return a(d)}},balance:{get:function(){return t(d)}}}});case 8:case"end":return e.stop()}},e)}),a=function(){var e=this,r=arguments;return new Promise(function(t,a){var c=n.apply(e,r);function i(e){o(c,t,a,i,u,"next",e)}function u(e){o(c,t,a,i,u,"throw",e)}i(void 0)})},function(e){return a.apply(this,arguments)}),type:"sdk",desktop:!0,preferred:p}}}}]);