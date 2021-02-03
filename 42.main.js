(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{19:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},254:function(t,e,r){"use strict";
/**
 * @license
 * https://github.com/ealmansi/cashaddrjs
 * Copyright (c) 2017-2020 Emilio Almansi
 * Distributed under the MIT software license, see the accompanying
 * file LICENSE or http://www.opensource.org/licenses/mit-license.php.
 */function n(t){var e=new Error;this.name=e.name="ValidationError",this.message=e.message=t,this.stack=e.stack}n.prototype=Object.create(Error.prototype),t.exports={ValidationError:n,validate:function(t,e){if(!t)throw new n(e)}}},382:function(t,e,r){
/***
 * @license
 * https://github.com/ealmansi/bchaddrjs
 * Copyright (c) 2018-2020 Emilio Almansi
 * Distributed under the MIT software license, see the accompanying
 * file LICENSE or http://www.opensource.org/licenses/mit-license.php.
 */
var n=r(77),o=r(383),i=r(10).Buffer,a={Legacy:"legacy",Bitpay:"bitpay",Cashaddr:"cashaddr"},s={Mainnet:"mainnet",Testnet:"testnet"},u={};function p(t){return c(t).format}function f(t){return c(t).network}function l(t){return c(t).type}u.P2PKH="p2pkh",u.P2SH="p2sh";var h={};function c(t){try{return function(t){try{var e=n.decode(t);if(21!==e.length)throw new y;var r=e[0],o=Array.prototype.slice.call(e,1);switch(r){case h[a.Legacy][s.Mainnet][u.P2PKH]:return{hash:o,format:a.Legacy,network:s.Mainnet,type:u.P2PKH};case h[a.Legacy][s.Mainnet][u.P2SH]:return{hash:o,format:a.Legacy,network:s.Mainnet,type:u.P2SH};case h[a.Legacy][s.Testnet][u.P2PKH]:return{hash:o,format:a.Legacy,network:s.Testnet,type:u.P2PKH};case h[a.Legacy][s.Testnet][u.P2SH]:return{hash:o,format:a.Legacy,network:s.Testnet,type:u.P2SH};case h[a.Bitpay][s.Mainnet][u.P2PKH]:return{hash:o,format:a.Bitpay,network:s.Mainnet,type:u.P2PKH};case h[a.Bitpay][s.Mainnet][u.P2SH]:return{hash:o,format:a.Bitpay,network:s.Mainnet,type:u.P2SH}}}catch(t){}throw new y}(t)}catch(t){}try{return function(t){if(-1!==t.indexOf(":"))try{return v(t)}catch(t){}else for(var e=["bitcoincash","bchtest","bchreg"],r=0;r<e.length;++r)try{return v(e[r]+":"+t)}catch(t){}throw new y}(t)}catch(t){}throw new y}h[a.Legacy]={},h[a.Legacy][s.Mainnet]={},h[a.Legacy][s.Mainnet][u.P2PKH]=0,h[a.Legacy][s.Mainnet][u.P2SH]=5,h[a.Legacy][s.Testnet]={},h[a.Legacy][s.Testnet][u.P2PKH]=111,h[a.Legacy][s.Testnet][u.P2SH]=196,h[a.Bitpay]={},h[a.Bitpay][s.Mainnet]={},h[a.Bitpay][s.Mainnet][u.P2PKH]=28,h[a.Bitpay][s.Mainnet][u.P2SH]=40,h[a.Bitpay][s.Testnet]={},h[a.Bitpay][s.Testnet][u.P2PKH]=111,h[a.Bitpay][s.Testnet][u.P2SH]=196;function v(t){try{var e=o.decode(t),r=Array.prototype.slice.call(e.hash,0),n="P2PKH"===e.type?u.P2PKH:u.P2SH;switch(e.prefix){case"bitcoincash":return{hash:r,format:a.Cashaddr,network:s.Mainnet,type:n};case"bchtest":case"bchreg":return{hash:r,format:a.Cashaddr,network:s.Testnet,type:n}}}catch(t){}throw new y}function y(){var t=new Error;this.name=t.name="InvalidAddressError",this.message=t.message="Received an invalid Bitcoin Cash address as input.",this.stack=t.stack}y.prototype=Object.create(Error.prototype),t.exports={Format:a,Network:s,Type:u,isValidAddress:function(t){try{return c(t),!0}catch(t){return!1}},detectAddressFormat:p,detectAddressNetwork:f,detectAddressType:l,toLegacyAddress:function(t){var e=c(t);return e.format===a.Legacy?t:function(t){var e=h[a.Legacy][t.network][t.type],r=i.alloc(1+t.hash.length);return r[0]=e,r.set(t.hash,1),n.encode(r)}(e)},toBitpayAddress:function(t){var e=c(t);return e.format===a.Bitpay?t:function(t){var e=h[a.Bitpay][t.network][t.type],r=i.alloc(1+t.hash.length);return r[0]=e,r.set(t.hash,1),n.encode(r)}(e)},toCashAddress:function(t){return function(t){var e=t.network===s.Mainnet?"bitcoincash":"bchtest",r=t.type===u.P2PKH?"P2PKH":"P2SH",n=new Uint8Array(t.hash);return o.encode(e,r,n)}(c(t))},isLegacyAddress:function(t){return p(t)===a.Legacy},isBitpayAddress:function(t){return p(t)===a.Bitpay},isCashAddress:function(t){return p(t)===a.Cashaddr},isMainnetAddress:function(t){return f(t)===s.Mainnet},isTestnetAddress:function(t){return f(t)===s.Testnet},isP2PKHAddress:function(t){return l(t)===u.P2PKH},isP2SHAddress:function(t){return l(t)===u.P2SH},InvalidAddressError:y}},383:function(t,e,r){"use strict";
/**
 * @license
 * https://github.com/ealmansi/cashaddrjs
 * Copyright (c) 2017-2020 Emilio Almansi
 * Distributed under the MIT software license, see the accompanying
 * file LICENSE or http://www.opensource.org/licenses/mit-license.php.
 */var n=r(384),o=r(385),i=r(386),a=r(254),s=a.validate;var u=a.ValidationError,p=["bitcoincash","bchtest","bchreg"];function f(t){for(var e=new Uint8Array(t.length),r=0;r<t.length;++r)e[r]=31&t[r].charCodeAt(0);return e}function l(t,e){var r=new Uint8Array(t.length+e.length);return r.set(t),r.set(e,t.length),r}function h(t){for(var e=[656907472481,522768456162,0xf33e5fb3c4,748107326120,130178868336],r=o(1),n=0;n<t.length;++n){var i=t[n],a=r.shiftRight(35);r=r.and(34359738367).shiftLeft(5).xor(i);for(var s=0;s<e.length;++s)a.shiftRight(s).and(1).equals(1)&&(r=r.xor(e[s]))}return r.xor(1)}function c(t){return t===t.toLowerCase()||t===t.toUpperCase()}t.exports={encode:function(t,e,r){s("string"==typeof t&&function(t){return c(t)&&-1!==p.indexOf(t.toLowerCase())}(t),"Invalid prefix: "+t+"."),s("string"==typeof e,"Invalid type: "+e+"."),s(r instanceof Uint8Array,"Invalid hash: "+r+".");var o,a=l(f(t),new Uint8Array(1)),v=function(t){switch(t){case"P2PKH":return 0;case"P2SH":return 8;default:throw new u("Invalid type: "+t+".")}}(e)+function(t){switch(8*t.length){case 160:return 0;case 192:return 1;case 224:return 2;case 256:return 3;case 320:return 4;case 384:return 5;case 448:return 6;case 512:return 7;default:throw new u("Invalid hash size: "+t.length+".")}}(r),y=(o=l(new Uint8Array([v]),r),i(o,8,5)),g=l(l(a,y),new Uint8Array(8)),d=l(y,function(t){for(var e=new Uint8Array(8),r=0;r<8;++r)e[7-r]=t.and(31).toJSNumber(),t=t.shiftRight(5);return e}(h(g)));return t+":"+n.encode(d)},decode:function(t){s("string"==typeof t&&c(t),"Invalid address: "+t+".");var e=t.toLowerCase().split(":");s(2===e.length,"Missing prefix: "+t+".");var r=e[0],o=n.decode(e[1]);s(function(t,e){var r=l(f(t),new Uint8Array(1));return h(l(r,e)).equals(0)}(r,o),"Invalid checksum: "+t+".");var a,p=(a=o.subarray(0,-8),i(a,5,8,!0)),v=p[0],y=p.subarray(1);return s(function(t){switch(7&t){case 0:return 160;case 1:return 192;case 2:return 224;case 3:return 256;case 4:return 320;case 5:return 384;case 6:return 448;case 7:return 512}}(v)===8*y.length,"Invalid hash size: "+t+"."),{prefix:r,type:function(t){switch(120&t){case 0:return"P2PKH";case 8:return"P2SH";default:throw new u("Invalid address type in version byte: "+t+".")}}(v),hash:y}},ValidationError:u}},384:function(t,e,r){"use strict";
/**
 * @license
 * https://github.com/ealmansi/cashaddrjs
 * Copyright (c) 2017-2020 Emilio Almansi
 * Distributed under the MIT software license, see the accompanying
 * file LICENSE or http://www.opensource.org/licenses/mit-license.php.
 */var n=r(254).validate,o={q:0,p:1,z:2,r:3,y:4,9:5,x:6,8:7,g:8,f:9,2:10,t:11,v:12,d:13,w:14,0:15,s:16,3:17,j:18,n:19,5:20,4:21,k:22,h:23,c:24,e:25,6:26,m:27,u:28,a:29,7:30,l:31};t.exports={encode:function(t){n(t instanceof Uint8Array,"Invalid data: "+t+".");for(var e="",r=0;r<t.length;++r){var o=t[r];n(0<=o&&o<32,"Invalid value: "+o+"."),e+="qpzry9x8gf2tvdw0s3jn54khce6mua7l"[o]}return e},decode:function(t){n("string"==typeof t,"Invalid base32-encoded string: "+t+".");for(var e=new Uint8Array(t.length),r=0;r<t.length;++r){var i=t[r];n(i in o,"Invalid value: "+i+"."),e[r]=o[i]}return e}}},385:function(t,e,r){(function(t){var r,n=function(t){"use strict";var e=1e7,r=9007199254740992,o=f(r),i=Math.log(r);function a(t,e){return void 0===t?a[0]:void 0!==e?10==+e?V(t):Z(t,e):V(t)}function s(t,e){this.value=t,this.sign=e,this.isSmall=!1}function u(t){this.value=t,this.sign=t<0,this.isSmall=!0}function p(t){return-r<t&&t<r}function f(t){return t<1e7?[t]:t<1e14?[t%1e7,Math.floor(t/1e7)]:[t%1e7,Math.floor(t/1e7)%1e7,Math.floor(t/1e14)]}function l(t){h(t);var r=t.length;if(r<4&&H(t,o)<0)switch(r){case 0:return 0;case 1:return t[0];case 2:return t[0]+t[1]*e;default:return t[0]+(t[1]+t[2]*e)*e}return t}function h(t){for(var e=t.length;0===t[--e];);t.length=e+1}function c(t){for(var e=new Array(t),r=-1;++r<t;)e[r]=0;return e}function v(t){return t>0?Math.floor(t):Math.ceil(t)}function y(t,r){var n,o,i=t.length,a=r.length,s=new Array(i),u=0,p=e;for(o=0;o<a;o++)u=(n=t[o]+r[o]+u)>=p?1:0,s[o]=n-u*p;for(;o<i;)u=(n=t[o]+u)===p?1:0,s[o++]=n-u*p;return u>0&&s.push(u),s}function g(t,e){return t.length>=e.length?y(t,e):y(e,t)}function d(t,r){var n,o,i=t.length,a=new Array(i),s=e;for(o=0;o<i;o++)n=t[o]-s+r,r=Math.floor(n/s),a[o]=n-r*s,r+=1;for(;r>0;)a[o++]=r%s,r=Math.floor(r/s);return a}function w(t,e){var r,n,o=t.length,i=e.length,a=new Array(o),s=0;for(r=0;r<i;r++)(n=t[r]-s-e[r])<0?(n+=1e7,s=1):s=0,a[r]=n;for(r=i;r<o;r++){if(!((n=t[r]-s)<0)){a[r++]=n;break}n+=1e7,a[r]=n}for(;r<o;r++)a[r]=t[r];return h(a),a}function m(t,e,r){var n,o,i=t.length,a=new Array(i),p=-e;for(n=0;n<i;n++)o=t[n]+p,p=Math.floor(o/1e7),o%=1e7,a[n]=o<0?o+1e7:o;return"number"==typeof(a=l(a))?(r&&(a=-a),new u(a)):new s(a,r)}function b(t,e){var r,n,o,i,a=t.length,s=e.length,u=c(a+s);for(o=0;o<a;++o){i=t[o];for(var p=0;p<s;++p)r=i*e[p]+u[o+p],n=Math.floor(r/1e7),u[o+p]=r-1e7*n,u[o+p+1]+=n}return h(u),u}function P(t,r){var n,o,i=t.length,a=new Array(i),s=e,u=0;for(o=0;o<i;o++)n=t[o]*r+u,u=Math.floor(n/s),a[o]=n-u*s;for(;u>0;)a[o++]=u%s,u=Math.floor(u/s);return a}function M(t,e){for(var r=[];e-- >0;)r.push(0);return r.concat(t)}function S(t,r,n){return new s(t<e?P(r,t):b(r,f(t)),n)}function A(t){var e,r,n,o,i=t.length,a=c(i+i);for(n=0;n<i;n++){r=0-(o=t[n])*o;for(var s=n;s<i;s++)e=o*t[s]*2+a[n+s]+r,r=Math.floor(e/1e7),a[n+s]=e-1e7*r;a[n+i]=r}return h(a),a}function E(t,e){var r,n,o,i,a=t.length,s=c(a);for(o=0,r=a-1;r>=0;--r)o=(i=1e7*o+t[r])-(n=v(i/e))*e,s[r]=0|n;return[s,0|o]}function q(t,r){var n,o,i=V(r),p=t.value,y=i.value;if(0===y)throw new Error("Cannot divide by zero");if(t.isSmall)return i.isSmall?[new u(v(p/y)),new u(p%y)]:[a[0],t];if(i.isSmall){if(1===y)return[t,a[0]];if(-1==y)return[t.negate(),a[0]];var g=Math.abs(y);if(g<e){o=l((n=E(p,g))[0]);var d=n[1];return t.sign&&(d=-d),"number"==typeof o?(t.sign!==i.sign&&(o=-o),[new u(o),new u(d)]):[new s(o,t.sign!==i.sign),new u(d)]}y=f(g)}var m=H(p,y);if(-1===m)return[a[0],t];if(0===m)return[a[t.sign===i.sign?1:-1],a[0]];o=(n=p.length+y.length<=200?function(t,r){var n,o,i,a,s,u,p,f=t.length,h=r.length,v=e,y=c(r.length),g=r[h-1],d=Math.ceil(v/(2*g)),w=P(t,d),m=P(r,d);for(w.length<=f&&w.push(0),m.push(0),g=m[h-1],o=f-h;o>=0;o--){for(n=v-1,w[o+h]!==g&&(n=Math.floor((w[o+h]*v+w[o+h-1])/g)),i=0,a=0,u=m.length,s=0;s<u;s++)i+=n*m[s],p=Math.floor(i/v),a+=w[o+s]-(i-p*v),i=p,a<0?(w[o+s]=a+v,a=-1):(w[o+s]=a,a=0);for(;0!==a;){for(n-=1,i=0,s=0;s<u;s++)(i+=w[o+s]-v+m[s])<0?(w[o+s]=i+v,i=0):(w[o+s]=i,i=1);a+=i}y[o]=n}return w=E(w,d)[0],[l(y),l(w)]}(p,y):function(t,e){for(var r,n,o,i,a,s=t.length,u=e.length,p=[],f=[];s;)if(f.unshift(t[--s]),h(f),H(f,e)<0)p.push(0);else{o=1e7*f[(n=f.length)-1]+f[n-2],i=1e7*e[u-1]+e[u-2],n>u&&(o=1e7*(o+1)),r=Math.ceil(o/i);do{if(H(a=P(e,r),f)<=0)break;r--}while(r);p.push(r),f=w(f,a)}return p.reverse(),[l(p),l(f)]}(p,y))[0];var b=t.sign!==i.sign,M=n[1],S=t.sign;return"number"==typeof o?(b&&(o=-o),o=new u(o)):o=new s(o,b),"number"==typeof M?(S&&(M=-M),M=new u(M)):M=new s(M,S),[o,M]}function H(t,e){if(t.length!==e.length)return t.length>e.length?1:-1;for(var r=t.length-1;r>=0;r--)if(t[r]!==e[r])return t[r]>e[r]?1:-1;return 0}function L(t){var e=t.abs();return!e.isUnit()&&(!!(e.equals(2)||e.equals(3)||e.equals(5))||!(e.isEven()||e.isDivisibleBy(3)||e.isDivisibleBy(5))&&(!!e.lesser(49)||void 0))}function x(t,e){for(var r,o,i,s=t.prev(),u=s,p=0;u.isEven();)u=u.divide(2),p++;t:for(o=0;o<e.length;o++)if(!t.lesser(e[o])&&!(i=n(e[o]).modPow(u,t)).equals(a[1])&&!i.equals(s)){for(r=p-1;0!=r;r--){if((i=i.square().mod(t)).isUnit())return!1;if(i.equals(s))continue t}return!1}return!0}s.prototype=Object.create(a.prototype),u.prototype=Object.create(a.prototype),s.prototype.add=function(t){var e=V(t);if(this.sign!==e.sign)return this.subtract(e.negate());var r=this.value,n=e.value;return e.isSmall?new s(d(r,Math.abs(n)),this.sign):new s(g(r,n),this.sign)},s.prototype.plus=s.prototype.add,u.prototype.add=function(t){var e=V(t),r=this.value;if(r<0!==e.sign)return this.subtract(e.negate());var n=e.value;if(e.isSmall){if(p(r+n))return new u(r+n);n=f(Math.abs(n))}return new s(d(n,Math.abs(r)),r<0)},u.prototype.plus=u.prototype.add,s.prototype.subtract=function(t){var e=V(t);if(this.sign!==e.sign)return this.add(e.negate());var r=this.value,n=e.value;return e.isSmall?m(r,Math.abs(n),this.sign):function(t,e,r){var n;return H(t,e)>=0?n=w(t,e):(n=w(e,t),r=!r),"number"==typeof(n=l(n))?(r&&(n=-n),new u(n)):new s(n,r)}(r,n,this.sign)},s.prototype.minus=s.prototype.subtract,u.prototype.subtract=function(t){var e=V(t),r=this.value;if(r<0!==e.sign)return this.add(e.negate());var n=e.value;return e.isSmall?new u(r-n):m(n,Math.abs(r),r>=0)},u.prototype.minus=u.prototype.subtract,s.prototype.negate=function(){return new s(this.value,!this.sign)},u.prototype.negate=function(){var t=this.sign,e=new u(-this.value);return e.sign=!t,e},s.prototype.abs=function(){return new s(this.value,!1)},u.prototype.abs=function(){return new u(Math.abs(this.value))},s.prototype.multiply=function(t){var r,n,o,i=V(t),u=this.value,p=i.value,l=this.sign!==i.sign;if(i.isSmall){if(0===p)return a[0];if(1===p)return this;if(-1===p)return this.negate();if((r=Math.abs(p))<e)return new s(P(u,r),l);p=f(r)}return n=u.length,o=p.length,new s(-.012*n-.012*o+15e-6*n*o>0?function t(e,r){var n=Math.max(e.length,r.length);if(n<=30)return b(e,r);n=Math.ceil(n/2);var o=e.slice(n),i=e.slice(0,n),a=r.slice(n),s=r.slice(0,n),u=t(i,s),p=t(o,a),f=t(g(i,o),g(s,a)),l=g(g(u,M(w(w(f,u),p),n)),M(p,2*n));return h(l),l}(u,p):b(u,p),l)},s.prototype.times=s.prototype.multiply,u.prototype._multiplyBySmall=function(t){return p(t.value*this.value)?new u(t.value*this.value):S(Math.abs(t.value),f(Math.abs(this.value)),this.sign!==t.sign)},s.prototype._multiplyBySmall=function(t){return 0===t.value?a[0]:1===t.value?this:-1===t.value?this.negate():S(Math.abs(t.value),this.value,this.sign!==t.sign)},u.prototype.multiply=function(t){return V(t)._multiplyBySmall(this)},u.prototype.times=u.prototype.multiply,s.prototype.square=function(){return new s(A(this.value),!1)},u.prototype.square=function(){var t=this.value*this.value;return p(t)?new u(t):new s(A(f(Math.abs(this.value))),!1)},s.prototype.divmod=function(t){var e=q(this,t);return{quotient:e[0],remainder:e[1]}},u.prototype.divmod=s.prototype.divmod,s.prototype.divide=function(t){return q(this,t)[0]},u.prototype.over=u.prototype.divide=s.prototype.over=s.prototype.divide,s.prototype.mod=function(t){return q(this,t)[1]},u.prototype.remainder=u.prototype.mod=s.prototype.remainder=s.prototype.mod,s.prototype.pow=function(t){var e,r,n,o=V(t),i=this.value,s=o.value;if(0===s)return a[1];if(0===i)return a[0];if(1===i)return a[1];if(-1===i)return o.isEven()?a[1]:a[-1];if(o.sign)return a[0];if(!o.isSmall)throw new Error("The exponent "+o.toString()+" is too large.");if(this.isSmall&&p(e=Math.pow(i,s)))return new u(v(e));for(r=this,n=a[1];!0&s&&(n=n.times(r),--s),0!==s;)s/=2,r=r.square();return n},u.prototype.pow=s.prototype.pow,s.prototype.modPow=function(t,e){if(t=V(t),(e=V(e)).isZero())throw new Error("Cannot take modPow with modulus 0");for(var r=a[1],n=this.mod(e);t.isPositive();){if(n.isZero())return a[0];t.isOdd()&&(r=r.multiply(n).mod(e)),t=t.divide(2),n=n.square().mod(e)}return r},u.prototype.modPow=s.prototype.modPow,s.prototype.compareAbs=function(t){var e=V(t),r=this.value,n=e.value;return e.isSmall?1:H(r,n)},u.prototype.compareAbs=function(t){var e=V(t),r=Math.abs(this.value),n=e.value;return e.isSmall?r===(n=Math.abs(n))?0:r>n?1:-1:-1},s.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var e=V(t),r=this.value,n=e.value;return this.sign!==e.sign?e.sign?1:-1:e.isSmall?this.sign?-1:1:H(r,n)*(this.sign?-1:1)},s.prototype.compareTo=s.prototype.compare,u.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var e=V(t),r=this.value,n=e.value;return e.isSmall?r==n?0:r>n?1:-1:r<0!==e.sign?r<0?-1:1:r<0?1:-1},u.prototype.compareTo=u.prototype.compare,s.prototype.equals=function(t){return 0===this.compare(t)},u.prototype.eq=u.prototype.equals=s.prototype.eq=s.prototype.equals,s.prototype.notEquals=function(t){return 0!==this.compare(t)},u.prototype.neq=u.prototype.notEquals=s.prototype.neq=s.prototype.notEquals,s.prototype.greater=function(t){return this.compare(t)>0},u.prototype.gt=u.prototype.greater=s.prototype.gt=s.prototype.greater,s.prototype.lesser=function(t){return this.compare(t)<0},u.prototype.lt=u.prototype.lesser=s.prototype.lt=s.prototype.lesser,s.prototype.greaterOrEquals=function(t){return this.compare(t)>=0},u.prototype.geq=u.prototype.greaterOrEquals=s.prototype.geq=s.prototype.greaterOrEquals,s.prototype.lesserOrEquals=function(t){return this.compare(t)<=0},u.prototype.leq=u.prototype.lesserOrEquals=s.prototype.leq=s.prototype.lesserOrEquals,s.prototype.isEven=function(){return 0==(1&this.value[0])},u.prototype.isEven=function(){return 0==(1&this.value)},s.prototype.isOdd=function(){return 1==(1&this.value[0])},u.prototype.isOdd=function(){return 1==(1&this.value)},s.prototype.isPositive=function(){return!this.sign},u.prototype.isPositive=function(){return this.value>0},s.prototype.isNegative=function(){return this.sign},u.prototype.isNegative=function(){return this.value<0},s.prototype.isUnit=function(){return!1},u.prototype.isUnit=function(){return 1===Math.abs(this.value)},s.prototype.isZero=function(){return!1},u.prototype.isZero=function(){return 0===this.value},s.prototype.isDivisibleBy=function(t){var e=V(t),r=e.value;return 0!==r&&(1===r||(2===r?this.isEven():this.mod(e).equals(a[0])))},u.prototype.isDivisibleBy=s.prototype.isDivisibleBy,s.prototype.isPrime=function(t){var e=L(this);if(void 0!==e)return e;var r=this.abs(),o=r.bitLength();if(o<=64)return x(r,[2,325,9375,28178,450775,9780504,1795265022]);for(var i=Math.log(2)*o,a=Math.ceil(!0===t?2*Math.pow(i,2):i),s=[],u=0;u<a;u++)s.push(n(u+2));return x(r,s)},u.prototype.isPrime=s.prototype.isPrime,s.prototype.isProbablePrime=function(t){var e=L(this);if(void 0!==e)return e;for(var r=this.abs(),o=void 0===t?5:t,i=[],a=0;a<o;a++)i.push(n.randBetween(2,r.minus(2)));return x(r,i)},u.prototype.isProbablePrime=s.prototype.isProbablePrime,s.prototype.modInv=function(t){for(var e,r,o,i=n.zero,a=n.one,s=V(t),u=this.abs();!u.equals(n.zero);)e=s.divide(u),r=i,o=s,i=a,s=u,a=r.subtract(e.multiply(a)),u=o.subtract(e.multiply(u));if(!s.equals(1))throw new Error(this.toString()+" and "+t.toString()+" are not co-prime");return-1===i.compare(0)&&(i=i.add(t)),this.isNegative()?i.negate():i},u.prototype.modInv=s.prototype.modInv,s.prototype.next=function(){var t=this.value;return this.sign?m(t,1,this.sign):new s(d(t,1),this.sign)},u.prototype.next=function(){var t=this.value;return t+1<r?new u(t+1):new s(o,!1)},s.prototype.prev=function(){var t=this.value;return this.sign?new s(d(t,1),!0):m(t,1,this.sign)},u.prototype.prev=function(){var t=this.value;return t-1>-r?new u(t-1):new s(o,!0)};for(var N=[1];2*N[N.length-1]<=e;)N.push(2*N[N.length-1]);var k=N.length,B=N[k-1];function O(t){return("number"==typeof t||"string"==typeof t)&&+Math.abs(t)<=e||t instanceof s&&t.value.length<=1}function I(t,e,r){e=V(e);for(var o=t.isNegative(),i=e.isNegative(),a=o?t.not():t,s=i?e.not():e,u=0,p=0,f=null,l=null,h=[];!a.isZero()||!s.isZero();)u=(f=q(a,B))[1].toJSNumber(),o&&(u=B-1-u),p=(l=q(s,B))[1].toJSNumber(),i&&(p=B-1-p),a=f[0],s=l[0],h.push(r(u,p));for(var c=0!==r(o?1:0,i?1:0)?n(-1):n(0),v=h.length-1;v>=0;v-=1)c=c.multiply(B).add(n(h[v]));return c}s.prototype.shiftLeft=function(t){if(!O(t))throw new Error(String(t)+" is too large for shifting.");if((t=+t)<0)return this.shiftRight(-t);var e=this;if(e.isZero())return e;for(;t>=k;)e=e.multiply(B),t-=k-1;return e.multiply(N[t])},u.prototype.shiftLeft=s.prototype.shiftLeft,s.prototype.shiftRight=function(t){var e;if(!O(t))throw new Error(String(t)+" is too large for shifting.");if((t=+t)<0)return this.shiftLeft(-t);for(var r=this;t>=k;){if(r.isZero()||r.isNegative()&&r.isUnit())return r;r=(e=q(r,B))[1].isNegative()?e[0].prev():e[0],t-=k-1}return(e=q(r,N[t]))[1].isNegative()?e[0].prev():e[0]},u.prototype.shiftRight=s.prototype.shiftRight,s.prototype.not=function(){return this.negate().prev()},u.prototype.not=s.prototype.not,s.prototype.and=function(t){return I(this,t,(function(t,e){return t&e}))},u.prototype.and=s.prototype.and,s.prototype.or=function(t){return I(this,t,(function(t,e){return t|e}))},u.prototype.or=s.prototype.or,s.prototype.xor=function(t){return I(this,t,(function(t,e){return t^e}))},u.prototype.xor=s.prototype.xor;function T(t){var r=t.value,n="number"==typeof r?r|1<<30:r[0]+r[1]*e|1073758208;return n&-n}function C(t,e){return t=V(t),e=V(e),t.greater(e)?t:e}function K(t,e){return t=V(t),e=V(e),t.lesser(e)?t:e}function U(t,e){if(t=V(t).abs(),e=V(e).abs(),t.equals(e))return t;if(t.isZero())return e;if(e.isZero())return t;for(var r,n,o=a[1];t.isEven()&&e.isEven();)r=Math.min(T(t),T(e)),t=t.divide(r),e=e.divide(r),o=o.multiply(r);for(;t.isEven();)t=t.divide(T(t));do{for(;e.isEven();)e=e.divide(T(e));t.greater(e)&&(n=e,e=t,t=n),e=e.subtract(t)}while(!e.isZero());return o.isUnit()?t:t.multiply(o)}s.prototype.bitLength=function(){var t=this;return t.compareTo(n(0))<0&&(t=t.negate().subtract(n(1))),0===t.compareTo(n(0))?n(0):n(function t(e,r){if(r.compareTo(e)<=0){var o=t(e,r.square(r)),i=o.p,a=o.e,s=i.multiply(r);return s.compareTo(e)<=0?{p:s,e:2*a+1}:{p:i,e:2*a}}return{p:n(1),e:0}}(t,n(2)).e).add(n(1))},u.prototype.bitLength=s.prototype.bitLength;var Z=function(t,e){for(var r=t.length,n=Math.abs(e),o=0;o<r;o++){if("-"!==(f=t[o].toLowerCase())&&/[a-z0-9]/.test(f)){if(/[0-9]/.test(f)&&+f>=n){if("1"===f&&1===n)continue;throw new Error(f+" is not a valid digit in base "+e+".")}if(f.charCodeAt(0)-87>=n)throw new Error(f+" is not a valid digit in base "+e+".")}}if(2<=e&&e<=36&&r<=i/Math.log(e)){var a=parseInt(t,e);if(isNaN(a))throw new Error(f+" is not a valid digit in base "+e+".");return new u(parseInt(t,e))}e=V(e);var s=[],p="-"===t[0];for(o=p?1:0;o<t.length;o++){var f,l=(f=t[o].toLowerCase()).charCodeAt(0);if(48<=l&&l<=57)s.push(V(f));else if(97<=l&&l<=122)s.push(V(f.charCodeAt(0)-87));else{if("<"!==f)throw new Error(f+" is not a valid character");var h=o;do{o++}while(">"!==t[o]);s.push(V(t.slice(h+1,o)))}}return j(s,e,p)};function j(t,e,r){var n,o=a[0],i=a[1];for(n=t.length-1;n>=0;n--)o=o.add(t[n].times(i)),i=i.times(e);return r?o.negate():o}function z(t){return t<=35?"0123456789abcdefghijklmnopqrstuvwxyz".charAt(t):"<"+t+">"}function J(t,e){if((e=n(e)).isZero()){if(t.isZero())return{value:[0],isNegative:!1};throw new Error("Cannot convert nonzero numbers to base 0.")}if(e.equals(-1)){if(t.isZero())return{value:[0],isNegative:!1};if(t.isNegative())return{value:[].concat.apply([],Array.apply(null,Array(-t)).map(Array.prototype.valueOf,[1,0])),isNegative:!1};var r=Array.apply(null,Array(+t-1)).map(Array.prototype.valueOf,[0,1]);return r.unshift([1]),{value:[].concat.apply([],r),isNegative:!1}}var o=!1;if(t.isNegative()&&e.isPositive()&&(o=!0,t=t.abs()),e.equals(1))return t.isZero()?{value:[0],isNegative:!1}:{value:Array.apply(null,Array(+t)).map(Number.prototype.valueOf,1),isNegative:o};for(var i,a=[],s=t;s.isNegative()||s.compareAbs(e)>=0;){i=s.divmod(e),s=i.quotient;var u=i.remainder;u.isNegative()&&(u=e.minus(u).abs(),s=s.next()),a.push(u.toJSNumber())}return a.push(s.toJSNumber()),{value:a.reverse(),isNegative:o}}function R(t,e){var r=J(t,e);return(r.isNegative?"-":"")+r.value.map(z).join("")}function D(t){if(p(+t)){var e=+t;if(e===v(e))return new u(e);throw new Error("Invalid integer: "+t)}var r="-"===t[0];r&&(t=t.slice(1));var n=t.split(/e/i);if(n.length>2)throw new Error("Invalid integer: "+n.join("e"));if(2===n.length){var o=n[1];if("+"===o[0]&&(o=o.slice(1)),(o=+o)!==v(o)||!p(o))throw new Error("Invalid integer: "+o+" is not a valid exponent.");var i=n[0],a=i.indexOf(".");if(a>=0&&(o-=i.length-a-1,i=i.slice(0,a)+i.slice(a+1)),o<0)throw new Error("Cannot include negative exponent part for integers");t=i+=new Array(o+1).join("0")}if(!/^([0-9][0-9]*)$/.test(t))throw new Error("Invalid integer: "+t);for(var f=[],l=t.length,c=l-7;l>0;)f.push(+t.slice(c,l)),(c-=7)<0&&(c=0),l-=7;return h(f),new s(f,r)}function V(t){return"number"==typeof t?function(t){if(p(t)){if(t!==v(t))throw new Error(t+" is not an integer.");return new u(t)}return D(t.toString())}(t):"string"==typeof t?D(t):t}s.prototype.toArray=function(t){return J(this,t)},u.prototype.toArray=function(t){return J(this,t)},s.prototype.toString=function(t){if(void 0===t&&(t=10),10!==t)return R(this,t);for(var e,r=this.value,n=r.length,o=String(r[--n]);--n>=0;)e=String(r[n]),o+="0000000".slice(e.length)+e;return(this.sign?"-":"")+o},u.prototype.toString=function(t){return void 0===t&&(t=10),10!=t?R(this,t):String(this.value)},s.prototype.toJSON=u.prototype.toJSON=function(){return this.toString()},s.prototype.valueOf=function(){return parseInt(this.toString(),10)},s.prototype.toJSNumber=s.prototype.valueOf,u.prototype.valueOf=function(){return this.value},u.prototype.toJSNumber=u.prototype.valueOf;for(var _=0;_<1e3;_++)a[_]=new u(_),_>0&&(a[-_]=new u(-_));return a.one=a[1],a.zero=a[0],a.minusOne=a[-1],a.max=C,a.min=K,a.gcd=U,a.lcm=function(t,e){return t=V(t).abs(),e=V(e).abs(),t.divide(U(t,e)).multiply(e)},a.isInstance=function(t){return t instanceof s||t instanceof u},a.randBetween=function(t,r){var n=K(t=V(t),r=V(r)),o=C(t,r).subtract(n).add(1);if(o.isSmall)return n.add(Math.floor(Math.random()*o));for(var i=[],a=!0,p=o.value.length-1;p>=0;p--){var f=a?o.value[p]:e,h=v(Math.random()*f);i.unshift(h),h<f&&(a=!1)}return i=l(i),n.add("number"==typeof i?new u(i):new s(i,!1))},a.fromArray=function(t,e,r){return j(t.map(V),V(e||10),r)},a}();t.hasOwnProperty("exports")&&(t.exports=n),void 0===(r=function(){return n}.apply(e,[]))||(t.exports=r)}).call(this,r(19)(t))},386:function(t,e,r){"use strict";var n=r(254).validate;t.exports=function(t,e,r,o){for(var i=o?Math.floor(t.length*e/r):Math.ceil(t.length*e/r),a=(1<<r)-1,s=new Uint8Array(i),u=0,p=0,f=0,l=0;l<t.length;++l){var h=t[l];for(n(0<=h&&h>>e==0,"Invalid value: "+h+"."),p=p<<e|h,f+=e;f>=r;)f-=r,s[u]=p>>f&a,++u}return o?n(f<e&&0==(p<<r-f&a),"Input cannot be converted to "+r+" bits without padding, but strict mode was used."):f>0&&(s[u]=p<<r-f&a,++u),s}}}]);