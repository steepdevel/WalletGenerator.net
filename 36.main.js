(window.webpackJsonp=window.webpackJsonp||[]).push([[36,43],{26:function(r,t,n){"use strict";var e=n(16),o=n(36);r.exports=o((function(r){var t=e("sha256").update(r).digest();return e("sha256").update(t).digest()}))},29:function(r,t,n){"use strict";var e=n(8).Buffer;r.exports=function(r){if(r.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),n=0;n<t.length;n++)t[n]=255;for(var o=0;o<r.length;o++){var i=r.charAt(o),f=i.charCodeAt(0);if(255!==t[f])throw new TypeError(i+" is ambiguous");t[f]=o}var a=r.length,h=r.charAt(0),s=Math.log(a)/Math.log(256),c=Math.log(256)/Math.log(a);function u(r){if("string"!=typeof r)throw new TypeError("Expected String");if(0===r.length)return e.alloc(0);var n=0;if(" "!==r[n]){for(var o=0,i=0;r[n]===h;)o++,n++;for(var f=(r.length-n)*s+1>>>0,c=new Uint8Array(f);r[n];){var u=t[r.charCodeAt(n)];if(255===u)return;for(var y=0,l=f-1;(0!==u||y<i)&&-1!==l;l--,y++)u+=a*c[l]>>>0,c[l]=u%256>>>0,u=u/256>>>0;if(0!==u)throw new Error("Non-zero carry");i=y,n++}if(" "!==r[n]){for(var g=f-i;g!==f&&0===c[g];)g++;var w=e.allocUnsafe(o+(f-g));w.fill(0,0,o);for(var v=o;g!==f;)w[v++]=c[g++];return w}}}return{encode:function(t){if((Array.isArray(t)||t instanceof Uint8Array)&&(t=e.from(t)),!e.isBuffer(t))throw new TypeError("Expected Buffer");if(0===t.length)return"";for(var n=0,o=0,i=0,f=t.length;i!==f&&0===t[i];)i++,n++;for(var s=(f-i)*c+1>>>0,u=new Uint8Array(s);i!==f;){for(var y=t[i],l=0,g=s-1;(0!==y||l<o)&&-1!==g;g--,l++)y+=256*u[g]>>>0,u[g]=y%a>>>0,y=y/a>>>0;if(0!==y)throw new Error("Non-zero carry");o=l,i++}for(var w=s-o;w!==s&&0===u[w];)w++;for(var v=h.repeat(n);w<s;++w)v+=r.charAt(u[w]);return v},decodeUnsafe:u,decode:function(r){var t=u(r);if(t)return t;throw new Error("Non-base"+a+" character")}}}},36:function(r,t,n){"use strict";var e=n(37),o=n(8).Buffer;r.exports=function(r){function t(t){var n=t.slice(0,-4),e=t.slice(-4),o=r(n);if(!(e[0]^o[0]|e[1]^o[1]|e[2]^o[2]|e[3]^o[3]))return n}return{encode:function(t){var n=r(t);return e.encode(o.concat([t,n],t.length+4))},decode:function(r){var n=t(e.decode(r));if(!n)throw new Error("Invalid checksum");return n},decodeUnsafe:function(r){var n=e.decodeUnsafe(r);if(n)return t(n)}}}},37:function(r,t,n){var e=n(29);r.exports=e("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},383:function(r,t,n){(function(t){const e=n(26),o=n(38),i=n(384),f=n(386);function a(r){return null!=r&&0==(240&r[0])}function h(r,n){if(!t.isBuffer(r))throw new Error("Invalid key instance");if(r.length<32)throw new Error("Invalid key length");const e=t.concat([r,t.alloc(32,0)]);return e[0]|=192,e[32]=n,f(e,{noPreprocess:!0,asBytes:!0})}r.exports={createSpendingKey:function(r){const n=r,i=o.randomBytes(32);i[0]&=15;const f=t.from(n.spendingKey);return e.encode(t.concat([f,i]))},createSpendingKeyFromBuffer:function(r,n){const o=r;n[0]&=15;const i=t.from(o.spendingKey);return e.encode(t.concat([i,n]))},convertSpendingKeyToViewingKey:function(r,n){if(!a(r))throw new Error("Invalid spending key");const o=n,i=e.decode(r),f=i.slice(0,2),s=i.slice(2);if(!f[0]===o.spendingKey[0]||f[1]!==o.spendingKey[1])throw new Error("Invalid spending key header");const c=h(s,0),u=h(s,1);u[0]&=248,u[31]&=127,u[31]|=64;const y=t.from(o.viewingKey),l=t.from(c),g=t.from(u),w=t.concat([y,l,g]),v=e.encode(w);if(97!==v.length)throw new Error("Invalid viewingKey length");return v},convertSpendingKeyToAddress:function(r,n){if(!a(r))throw new Error("Invalid spending key");const o=n,f=e.decode(r),s=f.slice(0,2),c=f.slice(2);if(!s[0]===o.spendingKey[0]||s[1]!==o.spendingKey[1])throw new Error("Invalid spending key header");const u=h(c,0),y=function(r){const t=h(r,1);return i.scalarMult.base(Uint8Array.from(t))}(c),l=t.from(o.address),g=t.from(u),w=t.from(y),v=t.concat([l,g,w]),p=e.encode(v);if(95!==p.length)throw new Error("Invalid address length");return p}}}).call(this,n(10).Buffer)},384:function(r,t,n){!function(r){"use strict";var t=function(r){var t,n=new Float64Array(16);if(r)for(t=0;t<r.length;t++)n[t]=r[t];return n},e=function(){throw new Error("no PRNG")},o=new Uint8Array(16),i=new Uint8Array(32);i[0]=9;var f=t(),a=t([1]),h=t([56129,1]),s=t([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),c=t([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),u=t([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),y=t([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),l=t([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function g(r,t,n,e){r[t]=n>>24&255,r[t+1]=n>>16&255,r[t+2]=n>>8&255,r[t+3]=255&n,r[t+4]=e>>24&255,r[t+5]=e>>16&255,r[t+6]=e>>8&255,r[t+7]=255&e}function w(r,t,n,e,o){var i,f=0;for(i=0;i<o;i++)f|=r[t+i]^n[e+i];return(1&f-1>>>8)-1}function v(r,t,n,e){return w(r,t,n,e,16)}function p(r,t,n,e){return w(r,t,n,e,32)}function d(r,t,n,e){!function(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,f=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,h=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,c=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,u=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,g=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,w=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,v=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,p=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,d=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,b=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,A=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,U=i,E=f,_=a,x=h,m=s,M=c,B=u,S=y,T=l,K=g,k=w,Y=v,L=p,I=d,z=b,R=A,C=0;C<20;C+=2)U^=(o=(L^=(o=(T^=(o=(m^=(o=U+L|0)<<7|o>>>25)+U|0)<<9|o>>>23)+m|0)<<13|o>>>19)+T|0)<<18|o>>>14,M^=(o=(E^=(o=(I^=(o=(K^=(o=M+E|0)<<7|o>>>25)+M|0)<<9|o>>>23)+K|0)<<13|o>>>19)+I|0)<<18|o>>>14,k^=(o=(B^=(o=(_^=(o=(z^=(o=k+B|0)<<7|o>>>25)+k|0)<<9|o>>>23)+z|0)<<13|o>>>19)+_|0)<<18|o>>>14,R^=(o=(Y^=(o=(S^=(o=(x^=(o=R+Y|0)<<7|o>>>25)+R|0)<<9|o>>>23)+x|0)<<13|o>>>19)+S|0)<<18|o>>>14,U^=(o=(x^=(o=(_^=(o=(E^=(o=U+x|0)<<7|o>>>25)+U|0)<<9|o>>>23)+E|0)<<13|o>>>19)+_|0)<<18|o>>>14,M^=(o=(m^=(o=(S^=(o=(B^=(o=M+m|0)<<7|o>>>25)+M|0)<<9|o>>>23)+B|0)<<13|o>>>19)+S|0)<<18|o>>>14,k^=(o=(K^=(o=(T^=(o=(Y^=(o=k+K|0)<<7|o>>>25)+k|0)<<9|o>>>23)+Y|0)<<13|o>>>19)+T|0)<<18|o>>>14,R^=(o=(z^=(o=(I^=(o=(L^=(o=R+z|0)<<7|o>>>25)+R|0)<<9|o>>>23)+L|0)<<13|o>>>19)+I|0)<<18|o>>>14;U=U+i|0,E=E+f|0,_=_+a|0,x=x+h|0,m=m+s|0,M=M+c|0,B=B+u|0,S=S+y|0,T=T+l|0,K=K+g|0,k=k+w|0,Y=Y+v|0,L=L+p|0,I=I+d|0,z=z+b|0,R=R+A|0,r[0]=U>>>0&255,r[1]=U>>>8&255,r[2]=U>>>16&255,r[3]=U>>>24&255,r[4]=E>>>0&255,r[5]=E>>>8&255,r[6]=E>>>16&255,r[7]=E>>>24&255,r[8]=_>>>0&255,r[9]=_>>>8&255,r[10]=_>>>16&255,r[11]=_>>>24&255,r[12]=x>>>0&255,r[13]=x>>>8&255,r[14]=x>>>16&255,r[15]=x>>>24&255,r[16]=m>>>0&255,r[17]=m>>>8&255,r[18]=m>>>16&255,r[19]=m>>>24&255,r[20]=M>>>0&255,r[21]=M>>>8&255,r[22]=M>>>16&255,r[23]=M>>>24&255,r[24]=B>>>0&255,r[25]=B>>>8&255,r[26]=B>>>16&255,r[27]=B>>>24&255,r[28]=S>>>0&255,r[29]=S>>>8&255,r[30]=S>>>16&255,r[31]=S>>>24&255,r[32]=T>>>0&255,r[33]=T>>>8&255,r[34]=T>>>16&255,r[35]=T>>>24&255,r[36]=K>>>0&255,r[37]=K>>>8&255,r[38]=K>>>16&255,r[39]=K>>>24&255,r[40]=k>>>0&255,r[41]=k>>>8&255,r[42]=k>>>16&255,r[43]=k>>>24&255,r[44]=Y>>>0&255,r[45]=Y>>>8&255,r[46]=Y>>>16&255,r[47]=Y>>>24&255,r[48]=L>>>0&255,r[49]=L>>>8&255,r[50]=L>>>16&255,r[51]=L>>>24&255,r[52]=I>>>0&255,r[53]=I>>>8&255,r[54]=I>>>16&255,r[55]=I>>>24&255,r[56]=z>>>0&255,r[57]=z>>>8&255,r[58]=z>>>16&255,r[59]=z>>>24&255,r[60]=R>>>0&255,r[61]=R>>>8&255,r[62]=R>>>16&255,r[63]=R>>>24&255}(r,t,n,e)}function b(r,t,n,e){!function(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,f=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,h=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,c=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,u=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,g=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,w=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,v=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,p=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,d=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,b=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,A=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,U=0;U<20;U+=2)i^=(o=(p^=(o=(l^=(o=(s^=(o=i+p|0)<<7|o>>>25)+i|0)<<9|o>>>23)+s|0)<<13|o>>>19)+l|0)<<18|o>>>14,c^=(o=(f^=(o=(d^=(o=(g^=(o=c+f|0)<<7|o>>>25)+c|0)<<9|o>>>23)+g|0)<<13|o>>>19)+d|0)<<18|o>>>14,w^=(o=(u^=(o=(a^=(o=(b^=(o=w+u|0)<<7|o>>>25)+w|0)<<9|o>>>23)+b|0)<<13|o>>>19)+a|0)<<18|o>>>14,A^=(o=(v^=(o=(y^=(o=(h^=(o=A+v|0)<<7|o>>>25)+A|0)<<9|o>>>23)+h|0)<<13|o>>>19)+y|0)<<18|o>>>14,i^=(o=(h^=(o=(a^=(o=(f^=(o=i+h|0)<<7|o>>>25)+i|0)<<9|o>>>23)+f|0)<<13|o>>>19)+a|0)<<18|o>>>14,c^=(o=(s^=(o=(y^=(o=(u^=(o=c+s|0)<<7|o>>>25)+c|0)<<9|o>>>23)+u|0)<<13|o>>>19)+y|0)<<18|o>>>14,w^=(o=(g^=(o=(l^=(o=(v^=(o=w+g|0)<<7|o>>>25)+w|0)<<9|o>>>23)+v|0)<<13|o>>>19)+l|0)<<18|o>>>14,A^=(o=(b^=(o=(d^=(o=(p^=(o=A+b|0)<<7|o>>>25)+A|0)<<9|o>>>23)+p|0)<<13|o>>>19)+d|0)<<18|o>>>14;r[0]=i>>>0&255,r[1]=i>>>8&255,r[2]=i>>>16&255,r[3]=i>>>24&255,r[4]=c>>>0&255,r[5]=c>>>8&255,r[6]=c>>>16&255,r[7]=c>>>24&255,r[8]=w>>>0&255,r[9]=w>>>8&255,r[10]=w>>>16&255,r[11]=w>>>24&255,r[12]=A>>>0&255,r[13]=A>>>8&255,r[14]=A>>>16&255,r[15]=A>>>24&255,r[16]=u>>>0&255,r[17]=u>>>8&255,r[18]=u>>>16&255,r[19]=u>>>24&255,r[20]=y>>>0&255,r[21]=y>>>8&255,r[22]=y>>>16&255,r[23]=y>>>24&255,r[24]=l>>>0&255,r[25]=l>>>8&255,r[26]=l>>>16&255,r[27]=l>>>24&255,r[28]=g>>>0&255,r[29]=g>>>8&255,r[30]=g>>>16&255,r[31]=g>>>24&255}(r,t,n,e)}var A=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function U(r,t,n,e,o,i,f){var a,h,s=new Uint8Array(16),c=new Uint8Array(64);for(h=0;h<16;h++)s[h]=0;for(h=0;h<8;h++)s[h]=i[h];for(;o>=64;){for(d(c,s,f,A),h=0;h<64;h++)r[t+h]=n[e+h]^c[h];for(a=1,h=8;h<16;h++)a=a+(255&s[h])|0,s[h]=255&a,a>>>=8;o-=64,t+=64,e+=64}if(o>0)for(d(c,s,f,A),h=0;h<o;h++)r[t+h]=n[e+h]^c[h];return 0}function E(r,t,n,e,o){var i,f,a=new Uint8Array(16),h=new Uint8Array(64);for(f=0;f<16;f++)a[f]=0;for(f=0;f<8;f++)a[f]=e[f];for(;n>=64;){for(d(h,a,o,A),f=0;f<64;f++)r[t+f]=h[f];for(i=1,f=8;f<16;f++)i=i+(255&a[f])|0,a[f]=255&i,i>>>=8;n-=64,t+=64}if(n>0)for(d(h,a,o,A),f=0;f<n;f++)r[t+f]=h[f];return 0}function _(r,t,n,e,o){var i=new Uint8Array(32);b(i,e,o,A);for(var f=new Uint8Array(8),a=0;a<8;a++)f[a]=e[a+16];return E(r,t,n,f,i)}function x(r,t,n,e,o,i,f){var a=new Uint8Array(32);b(a,i,f,A);for(var h=new Uint8Array(8),s=0;s<8;s++)h[s]=i[s+16];return U(r,t,n,e,o,h,a)}var m=function(r){var t,n,e,o,i,f,a,h;this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,t=255&r[0]|(255&r[1])<<8,this.r[0]=8191&t,n=255&r[2]|(255&r[3])<<8,this.r[1]=8191&(t>>>13|n<<3),e=255&r[4]|(255&r[5])<<8,this.r[2]=7939&(n>>>10|e<<6),o=255&r[6]|(255&r[7])<<8,this.r[3]=8191&(e>>>7|o<<9),i=255&r[8]|(255&r[9])<<8,this.r[4]=255&(o>>>4|i<<12),this.r[5]=i>>>1&8190,f=255&r[10]|(255&r[11])<<8,this.r[6]=8191&(i>>>14|f<<2),a=255&r[12]|(255&r[13])<<8,this.r[7]=8065&(f>>>11|a<<5),h=255&r[14]|(255&r[15])<<8,this.r[8]=8191&(a>>>8|h<<8),this.r[9]=h>>>5&127,this.pad[0]=255&r[16]|(255&r[17])<<8,this.pad[1]=255&r[18]|(255&r[19])<<8,this.pad[2]=255&r[20]|(255&r[21])<<8,this.pad[3]=255&r[22]|(255&r[23])<<8,this.pad[4]=255&r[24]|(255&r[25])<<8,this.pad[5]=255&r[26]|(255&r[27])<<8,this.pad[6]=255&r[28]|(255&r[29])<<8,this.pad[7]=255&r[30]|(255&r[31])<<8};function M(r,t,n,e,o,i){var f=new m(i);return f.update(n,e,o),f.finish(r,t),0}function B(r,t,n,e,o,i){var f=new Uint8Array(16);return M(f,0,n,e,o,i),v(r,t,f,0)}function S(r,t,n,e,o){var i;if(n<32)return-1;for(x(r,0,t,0,n,e,o),M(r,16,r,32,n-32,r),i=0;i<16;i++)r[i]=0;return 0}function T(r,t,n,e,o){var i,f=new Uint8Array(32);if(n<32)return-1;if(_(f,0,32,e,o),0!==B(t,16,t,32,n-32,f))return-1;for(x(r,0,t,0,n,e,o),i=0;i<32;i++)r[i]=0;return 0}function K(r,t){var n;for(n=0;n<16;n++)r[n]=0|t[n]}function k(r){var t,n,e=1;for(t=0;t<16;t++)n=r[t]+e+65535,e=Math.floor(n/65536),r[t]=n-65536*e;r[0]+=e-1+37*(e-1)}function Y(r,t,n){for(var e,o=~(n-1),i=0;i<16;i++)e=o&(r[i]^t[i]),r[i]^=e,t[i]^=e}function L(r,n){var e,o,i,f=t(),a=t();for(e=0;e<16;e++)a[e]=n[e];for(k(a),k(a),k(a),o=0;o<2;o++){for(f[0]=a[0]-65517,e=1;e<15;e++)f[e]=a[e]-65535-(f[e-1]>>16&1),f[e-1]&=65535;f[15]=a[15]-32767-(f[14]>>16&1),i=f[15]>>16&1,f[14]&=65535,Y(a,f,1-i)}for(e=0;e<16;e++)r[2*e]=255&a[e],r[2*e+1]=a[e]>>8}function I(r,t){var n=new Uint8Array(32),e=new Uint8Array(32);return L(n,r),L(e,t),p(n,0,e,0)}function z(r){var t=new Uint8Array(32);return L(t,r),1&t[0]}function R(r,t){var n;for(n=0;n<16;n++)r[n]=t[2*n]+(t[2*n+1]<<8);r[15]&=32767}function C(r,t,n){for(var e=0;e<16;e++)r[e]=t[e]+n[e]}function P(r,t,n){for(var e=0;e<16;e++)r[e]=t[e]-n[e]}function N(r,t,n){var e,o,i=0,f=0,a=0,h=0,s=0,c=0,u=0,y=0,l=0,g=0,w=0,v=0,p=0,d=0,b=0,A=0,U=0,E=0,_=0,x=0,m=0,M=0,B=0,S=0,T=0,K=0,k=0,Y=0,L=0,I=0,z=0,R=n[0],C=n[1],P=n[2],N=n[3],F=n[4],O=n[5],H=n[6],Z=n[7],G=n[8],j=n[9],V=n[10],D=n[11],J=n[12],X=n[13],q=n[14],Q=n[15];i+=(e=t[0])*R,f+=e*C,a+=e*P,h+=e*N,s+=e*F,c+=e*O,u+=e*H,y+=e*Z,l+=e*G,g+=e*j,w+=e*V,v+=e*D,p+=e*J,d+=e*X,b+=e*q,A+=e*Q,f+=(e=t[1])*R,a+=e*C,h+=e*P,s+=e*N,c+=e*F,u+=e*O,y+=e*H,l+=e*Z,g+=e*G,w+=e*j,v+=e*V,p+=e*D,d+=e*J,b+=e*X,A+=e*q,U+=e*Q,a+=(e=t[2])*R,h+=e*C,s+=e*P,c+=e*N,u+=e*F,y+=e*O,l+=e*H,g+=e*Z,w+=e*G,v+=e*j,p+=e*V,d+=e*D,b+=e*J,A+=e*X,U+=e*q,E+=e*Q,h+=(e=t[3])*R,s+=e*C,c+=e*P,u+=e*N,y+=e*F,l+=e*O,g+=e*H,w+=e*Z,v+=e*G,p+=e*j,d+=e*V,b+=e*D,A+=e*J,U+=e*X,E+=e*q,_+=e*Q,s+=(e=t[4])*R,c+=e*C,u+=e*P,y+=e*N,l+=e*F,g+=e*O,w+=e*H,v+=e*Z,p+=e*G,d+=e*j,b+=e*V,A+=e*D,U+=e*J,E+=e*X,_+=e*q,x+=e*Q,c+=(e=t[5])*R,u+=e*C,y+=e*P,l+=e*N,g+=e*F,w+=e*O,v+=e*H,p+=e*Z,d+=e*G,b+=e*j,A+=e*V,U+=e*D,E+=e*J,_+=e*X,x+=e*q,m+=e*Q,u+=(e=t[6])*R,y+=e*C,l+=e*P,g+=e*N,w+=e*F,v+=e*O,p+=e*H,d+=e*Z,b+=e*G,A+=e*j,U+=e*V,E+=e*D,_+=e*J,x+=e*X,m+=e*q,M+=e*Q,y+=(e=t[7])*R,l+=e*C,g+=e*P,w+=e*N,v+=e*F,p+=e*O,d+=e*H,b+=e*Z,A+=e*G,U+=e*j,E+=e*V,_+=e*D,x+=e*J,m+=e*X,M+=e*q,B+=e*Q,l+=(e=t[8])*R,g+=e*C,w+=e*P,v+=e*N,p+=e*F,d+=e*O,b+=e*H,A+=e*Z,U+=e*G,E+=e*j,_+=e*V,x+=e*D,m+=e*J,M+=e*X,B+=e*q,S+=e*Q,g+=(e=t[9])*R,w+=e*C,v+=e*P,p+=e*N,d+=e*F,b+=e*O,A+=e*H,U+=e*Z,E+=e*G,_+=e*j,x+=e*V,m+=e*D,M+=e*J,B+=e*X,S+=e*q,T+=e*Q,w+=(e=t[10])*R,v+=e*C,p+=e*P,d+=e*N,b+=e*F,A+=e*O,U+=e*H,E+=e*Z,_+=e*G,x+=e*j,m+=e*V,M+=e*D,B+=e*J,S+=e*X,T+=e*q,K+=e*Q,v+=(e=t[11])*R,p+=e*C,d+=e*P,b+=e*N,A+=e*F,U+=e*O,E+=e*H,_+=e*Z,x+=e*G,m+=e*j,M+=e*V,B+=e*D,S+=e*J,T+=e*X,K+=e*q,k+=e*Q,p+=(e=t[12])*R,d+=e*C,b+=e*P,A+=e*N,U+=e*F,E+=e*O,_+=e*H,x+=e*Z,m+=e*G,M+=e*j,B+=e*V,S+=e*D,T+=e*J,K+=e*X,k+=e*q,Y+=e*Q,d+=(e=t[13])*R,b+=e*C,A+=e*P,U+=e*N,E+=e*F,_+=e*O,x+=e*H,m+=e*Z,M+=e*G,B+=e*j,S+=e*V,T+=e*D,K+=e*J,k+=e*X,Y+=e*q,L+=e*Q,b+=(e=t[14])*R,A+=e*C,U+=e*P,E+=e*N,_+=e*F,x+=e*O,m+=e*H,M+=e*Z,B+=e*G,S+=e*j,T+=e*V,K+=e*D,k+=e*J,Y+=e*X,L+=e*q,I+=e*Q,A+=(e=t[15])*R,f+=38*(E+=e*P),a+=38*(_+=e*N),h+=38*(x+=e*F),s+=38*(m+=e*O),c+=38*(M+=e*H),u+=38*(B+=e*Z),y+=38*(S+=e*G),l+=38*(T+=e*j),g+=38*(K+=e*V),w+=38*(k+=e*D),v+=38*(Y+=e*J),p+=38*(L+=e*X),d+=38*(I+=e*q),b+=38*(z+=e*Q),i=(e=(i+=38*(U+=e*C))+(o=1)+65535)-65536*(o=Math.floor(e/65536)),f=(e=f+o+65535)-65536*(o=Math.floor(e/65536)),a=(e=a+o+65535)-65536*(o=Math.floor(e/65536)),h=(e=h+o+65535)-65536*(o=Math.floor(e/65536)),s=(e=s+o+65535)-65536*(o=Math.floor(e/65536)),c=(e=c+o+65535)-65536*(o=Math.floor(e/65536)),u=(e=u+o+65535)-65536*(o=Math.floor(e/65536)),y=(e=y+o+65535)-65536*(o=Math.floor(e/65536)),l=(e=l+o+65535)-65536*(o=Math.floor(e/65536)),g=(e=g+o+65535)-65536*(o=Math.floor(e/65536)),w=(e=w+o+65535)-65536*(o=Math.floor(e/65536)),v=(e=v+o+65535)-65536*(o=Math.floor(e/65536)),p=(e=p+o+65535)-65536*(o=Math.floor(e/65536)),d=(e=d+o+65535)-65536*(o=Math.floor(e/65536)),b=(e=b+o+65535)-65536*(o=Math.floor(e/65536)),A=(e=A+o+65535)-65536*(o=Math.floor(e/65536)),i=(e=(i+=o-1+37*(o-1))+(o=1)+65535)-65536*(o=Math.floor(e/65536)),f=(e=f+o+65535)-65536*(o=Math.floor(e/65536)),a=(e=a+o+65535)-65536*(o=Math.floor(e/65536)),h=(e=h+o+65535)-65536*(o=Math.floor(e/65536)),s=(e=s+o+65535)-65536*(o=Math.floor(e/65536)),c=(e=c+o+65535)-65536*(o=Math.floor(e/65536)),u=(e=u+o+65535)-65536*(o=Math.floor(e/65536)),y=(e=y+o+65535)-65536*(o=Math.floor(e/65536)),l=(e=l+o+65535)-65536*(o=Math.floor(e/65536)),g=(e=g+o+65535)-65536*(o=Math.floor(e/65536)),w=(e=w+o+65535)-65536*(o=Math.floor(e/65536)),v=(e=v+o+65535)-65536*(o=Math.floor(e/65536)),p=(e=p+o+65535)-65536*(o=Math.floor(e/65536)),d=(e=d+o+65535)-65536*(o=Math.floor(e/65536)),b=(e=b+o+65535)-65536*(o=Math.floor(e/65536)),A=(e=A+o+65535)-65536*(o=Math.floor(e/65536)),i+=o-1+37*(o-1),r[0]=i,r[1]=f,r[2]=a,r[3]=h,r[4]=s,r[5]=c,r[6]=u,r[7]=y,r[8]=l,r[9]=g,r[10]=w,r[11]=v,r[12]=p,r[13]=d,r[14]=b,r[15]=A}function F(r,t){N(r,t,t)}function O(r,n){var e,o=t();for(e=0;e<16;e++)o[e]=n[e];for(e=253;e>=0;e--)F(o,o),2!==e&&4!==e&&N(o,o,n);for(e=0;e<16;e++)r[e]=o[e]}function H(r,n){var e,o=t();for(e=0;e<16;e++)o[e]=n[e];for(e=250;e>=0;e--)F(o,o),1!==e&&N(o,o,n);for(e=0;e<16;e++)r[e]=o[e]}function Z(r,n,e){var o,i,f=new Uint8Array(32),a=new Float64Array(80),s=t(),c=t(),u=t(),y=t(),l=t(),g=t();for(i=0;i<31;i++)f[i]=n[i];for(f[31]=127&n[31]|64,f[0]&=248,R(a,e),i=0;i<16;i++)c[i]=a[i],y[i]=s[i]=u[i]=0;for(s[0]=y[0]=1,i=254;i>=0;--i)Y(s,c,o=f[i>>>3]>>>(7&i)&1),Y(u,y,o),C(l,s,u),P(s,s,u),C(u,c,y),P(c,c,y),F(y,l),F(g,s),N(s,u,s),N(u,c,l),C(l,s,u),P(s,s,u),F(c,s),P(u,y,g),N(s,u,h),C(s,s,y),N(u,u,s),N(s,y,g),N(y,c,a),F(c,l),Y(s,c,o),Y(u,y,o);for(i=0;i<16;i++)a[i+16]=s[i],a[i+32]=u[i],a[i+48]=c[i],a[i+64]=y[i];var w=a.subarray(32),v=a.subarray(16);return O(w,w),N(v,v,w),L(r,v),0}function G(r,t){return Z(r,t,i)}function j(r,t){return e(t,32),G(r,t)}function V(r,t,n){var e=new Uint8Array(32);return Z(e,n,t),b(r,o,e,A)}m.prototype.blocks=function(r,t,n){for(var e,o,i,f,a,h,s,c,u,y,l,g,w,v,p,d,b,A,U,E=this.fin?0:2048,_=this.h[0],x=this.h[1],m=this.h[2],M=this.h[3],B=this.h[4],S=this.h[5],T=this.h[6],K=this.h[7],k=this.h[8],Y=this.h[9],L=this.r[0],I=this.r[1],z=this.r[2],R=this.r[3],C=this.r[4],P=this.r[5],N=this.r[6],F=this.r[7],O=this.r[8],H=this.r[9];n>=16;)y=u=0,y+=(_+=8191&(e=255&r[t+0]|(255&r[t+1])<<8))*L,y+=(x+=8191&(e>>>13|(o=255&r[t+2]|(255&r[t+3])<<8)<<3))*(5*H),y+=(m+=8191&(o>>>10|(i=255&r[t+4]|(255&r[t+5])<<8)<<6))*(5*O),y+=(M+=8191&(i>>>7|(f=255&r[t+6]|(255&r[t+7])<<8)<<9))*(5*F),u=(y+=(B+=8191&(f>>>4|(a=255&r[t+8]|(255&r[t+9])<<8)<<12))*(5*N))>>>13,y&=8191,y+=(S+=a>>>1&8191)*(5*P),y+=(T+=8191&(a>>>14|(h=255&r[t+10]|(255&r[t+11])<<8)<<2))*(5*C),y+=(K+=8191&(h>>>11|(s=255&r[t+12]|(255&r[t+13])<<8)<<5))*(5*R),y+=(k+=8191&(s>>>8|(c=255&r[t+14]|(255&r[t+15])<<8)<<8))*(5*z),l=u+=(y+=(Y+=c>>>5|E)*(5*I))>>>13,l+=_*I,l+=x*L,l+=m*(5*H),l+=M*(5*O),u=(l+=B*(5*F))>>>13,l&=8191,l+=S*(5*N),l+=T*(5*P),l+=K*(5*C),l+=k*(5*R),u+=(l+=Y*(5*z))>>>13,l&=8191,g=u,g+=_*z,g+=x*I,g+=m*L,g+=M*(5*H),u=(g+=B*(5*O))>>>13,g&=8191,g+=S*(5*F),g+=T*(5*N),g+=K*(5*P),g+=k*(5*C),w=u+=(g+=Y*(5*R))>>>13,w+=_*R,w+=x*z,w+=m*I,w+=M*L,u=(w+=B*(5*H))>>>13,w&=8191,w+=S*(5*O),w+=T*(5*F),w+=K*(5*N),w+=k*(5*P),v=u+=(w+=Y*(5*C))>>>13,v+=_*C,v+=x*R,v+=m*z,v+=M*I,u=(v+=B*L)>>>13,v&=8191,v+=S*(5*H),v+=T*(5*O),v+=K*(5*F),v+=k*(5*N),p=u+=(v+=Y*(5*P))>>>13,p+=_*P,p+=x*C,p+=m*R,p+=M*z,u=(p+=B*I)>>>13,p&=8191,p+=S*L,p+=T*(5*H),p+=K*(5*O),p+=k*(5*F),d=u+=(p+=Y*(5*N))>>>13,d+=_*N,d+=x*P,d+=m*C,d+=M*R,u=(d+=B*z)>>>13,d&=8191,d+=S*I,d+=T*L,d+=K*(5*H),d+=k*(5*O),b=u+=(d+=Y*(5*F))>>>13,b+=_*F,b+=x*N,b+=m*P,b+=M*C,u=(b+=B*R)>>>13,b&=8191,b+=S*z,b+=T*I,b+=K*L,b+=k*(5*H),A=u+=(b+=Y*(5*O))>>>13,A+=_*O,A+=x*F,A+=m*N,A+=M*P,u=(A+=B*C)>>>13,A&=8191,A+=S*R,A+=T*z,A+=K*I,A+=k*L,U=u+=(A+=Y*(5*H))>>>13,U+=_*H,U+=x*O,U+=m*F,U+=M*N,u=(U+=B*P)>>>13,U&=8191,U+=S*C,U+=T*R,U+=K*z,U+=k*I,_=y=8191&(u=(u=((u+=(U+=Y*L)>>>13)<<2)+u|0)+(y&=8191)|0),x=l+=u>>>=13,m=g&=8191,M=w&=8191,B=v&=8191,S=p&=8191,T=d&=8191,K=b&=8191,k=A&=8191,Y=U&=8191,t+=16,n-=16;this.h[0]=_,this.h[1]=x,this.h[2]=m,this.h[3]=M,this.h[4]=B,this.h[5]=S,this.h[6]=T,this.h[7]=K,this.h[8]=k,this.h[9]=Y},m.prototype.finish=function(r,t){var n,e,o,i,f=new Uint16Array(10);if(this.leftover){for(i=this.leftover,this.buffer[i++]=1;i<16;i++)this.buffer[i]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(n=this.h[1]>>>13,this.h[1]&=8191,i=2;i<10;i++)this.h[i]+=n,n=this.h[i]>>>13,this.h[i]&=8191;for(this.h[0]+=5*n,n=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=n,n=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=n,f[0]=this.h[0]+5,n=f[0]>>>13,f[0]&=8191,i=1;i<10;i++)f[i]=this.h[i]+n,n=f[i]>>>13,f[i]&=8191;for(f[9]-=8192,e=(1^n)-1,i=0;i<10;i++)f[i]&=e;for(e=~e,i=0;i<10;i++)this.h[i]=this.h[i]&e|f[i];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),o=this.h[0]+this.pad[0],this.h[0]=65535&o,i=1;i<8;i++)o=(this.h[i]+this.pad[i]|0)+(o>>>16)|0,this.h[i]=65535&o;r[t+0]=this.h[0]>>>0&255,r[t+1]=this.h[0]>>>8&255,r[t+2]=this.h[1]>>>0&255,r[t+3]=this.h[1]>>>8&255,r[t+4]=this.h[2]>>>0&255,r[t+5]=this.h[2]>>>8&255,r[t+6]=this.h[3]>>>0&255,r[t+7]=this.h[3]>>>8&255,r[t+8]=this.h[4]>>>0&255,r[t+9]=this.h[4]>>>8&255,r[t+10]=this.h[5]>>>0&255,r[t+11]=this.h[5]>>>8&255,r[t+12]=this.h[6]>>>0&255,r[t+13]=this.h[6]>>>8&255,r[t+14]=this.h[7]>>>0&255,r[t+15]=this.h[7]>>>8&255},m.prototype.update=function(r,t,n){var e,o;if(this.leftover){for((o=16-this.leftover)>n&&(o=n),e=0;e<o;e++)this.buffer[this.leftover+e]=r[t+e];if(n-=o,t+=o,this.leftover+=o,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(n>=16&&(o=n-n%16,this.blocks(r,t,o),t+=o,n-=o),n){for(e=0;e<n;e++)this.buffer[this.leftover+e]=r[t+e];this.leftover+=n}};var D=S,J=T;var X=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function q(r,t,n,e){for(var o,i,f,a,h,s,c,u,y,l,g,w,v,p,d,b,A,U,E,_,x,m,M,B,S,T,K=new Int32Array(16),k=new Int32Array(16),Y=r[0],L=r[1],I=r[2],z=r[3],R=r[4],C=r[5],P=r[6],N=r[7],F=t[0],O=t[1],H=t[2],Z=t[3],G=t[4],j=t[5],V=t[6],D=t[7],J=0;e>=128;){for(E=0;E<16;E++)_=8*E+J,K[E]=n[_+0]<<24|n[_+1]<<16|n[_+2]<<8|n[_+3],k[E]=n[_+4]<<24|n[_+5]<<16|n[_+6]<<8|n[_+7];for(E=0;E<80;E++)if(o=Y,i=L,f=I,a=z,h=R,s=C,c=P,N,y=F,l=O,g=H,w=Z,v=G,p=j,d=V,D,M=65535&(m=D),B=m>>>16,S=65535&(x=N),T=x>>>16,M+=65535&(m=(G>>>14|R<<18)^(G>>>18|R<<14)^(R>>>9|G<<23)),B+=m>>>16,S+=65535&(x=(R>>>14|G<<18)^(R>>>18|G<<14)^(G>>>9|R<<23)),T+=x>>>16,M+=65535&(m=G&j^~G&V),B+=m>>>16,S+=65535&(x=R&C^~R&P),T+=x>>>16,M+=65535&(m=X[2*E+1]),B+=m>>>16,S+=65535&(x=X[2*E]),T+=x>>>16,x=K[E%16],B+=(m=k[E%16])>>>16,S+=65535&x,T+=x>>>16,S+=(B+=(M+=65535&m)>>>16)>>>16,M=65535&(m=U=65535&M|B<<16),B=m>>>16,S=65535&(x=A=65535&S|(T+=S>>>16)<<16),T=x>>>16,M+=65535&(m=(F>>>28|Y<<4)^(Y>>>2|F<<30)^(Y>>>7|F<<25)),B+=m>>>16,S+=65535&(x=(Y>>>28|F<<4)^(F>>>2|Y<<30)^(F>>>7|Y<<25)),T+=x>>>16,B+=(m=F&O^F&H^O&H)>>>16,S+=65535&(x=Y&L^Y&I^L&I),T+=x>>>16,u=65535&(S+=(B+=(M+=65535&m)>>>16)>>>16)|(T+=S>>>16)<<16,b=65535&M|B<<16,M=65535&(m=w),B=m>>>16,S=65535&(x=a),T=x>>>16,B+=(m=U)>>>16,S+=65535&(x=A),T+=x>>>16,L=o,I=i,z=f,R=a=65535&(S+=(B+=(M+=65535&m)>>>16)>>>16)|(T+=S>>>16)<<16,C=h,P=s,N=c,Y=u,O=y,H=l,Z=g,G=w=65535&M|B<<16,j=v,V=p,D=d,F=b,E%16==15)for(_=0;_<16;_++)x=K[_],M=65535&(m=k[_]),B=m>>>16,S=65535&x,T=x>>>16,x=K[(_+9)%16],M+=65535&(m=k[(_+9)%16]),B+=m>>>16,S+=65535&x,T+=x>>>16,A=K[(_+1)%16],M+=65535&(m=((U=k[(_+1)%16])>>>1|A<<31)^(U>>>8|A<<24)^(U>>>7|A<<25)),B+=m>>>16,S+=65535&(x=(A>>>1|U<<31)^(A>>>8|U<<24)^A>>>7),T+=x>>>16,A=K[(_+14)%16],B+=(m=((U=k[(_+14)%16])>>>19|A<<13)^(A>>>29|U<<3)^(U>>>6|A<<26))>>>16,S+=65535&(x=(A>>>19|U<<13)^(U>>>29|A<<3)^A>>>6),T+=x>>>16,T+=(S+=(B+=(M+=65535&m)>>>16)>>>16)>>>16,K[_]=65535&S|T<<16,k[_]=65535&M|B<<16;M=65535&(m=F),B=m>>>16,S=65535&(x=Y),T=x>>>16,x=r[0],B+=(m=t[0])>>>16,S+=65535&x,T+=x>>>16,T+=(S+=(B+=(M+=65535&m)>>>16)>>>16)>>>16,r[0]=Y=65535&S|T<<16,t[0]=F=65535&M|B<<16,M=65535&(m=O),B=m>>>16,S=65535&(x=L),T=x>>>16,x=r[1],B+=(m=t[1])>>>16,S+=65535&x,T+=x>>>16,T+=(S+=(B+=(M+=65535&m)>>>16)>>>16)>>>16,r[1]=L=65535&S|T<<16,t[1]=O=65535&M|B<<16,M=65535&(m=H),B=m>>>16,S=65535&(x=I),T=x>>>16,x=r[2],B+=(m=t[2])>>>16,S+=65535&x,T+=x>>>16,T+=(S+=(B+=(M+=65535&m)>>>16)>>>16)>>>16,r[2]=I=65535&S|T<<16,t[2]=H=65535&M|B<<16,M=65535&(m=Z),B=m>>>16,S=65535&(x=z),T=x>>>16,x=r[3],B+=(m=t[3])>>>16,S+=65535&x,T+=x>>>16,T+=(S+=(B+=(M+=65535&m)>>>16)>>>16)>>>16,r[3]=z=65535&S|T<<16,t[3]=Z=65535&M|B<<16,M=65535&(m=G),B=m>>>16,S=65535&(x=R),T=x>>>16,x=r[4],B+=(m=t[4])>>>16,S+=65535&x,T+=x>>>16,T+=(S+=(B+=(M+=65535&m)>>>16)>>>16)>>>16,r[4]=R=65535&S|T<<16,t[4]=G=65535&M|B<<16,M=65535&(m=j),B=m>>>16,S=65535&(x=C),T=x>>>16,x=r[5],B+=(m=t[5])>>>16,S+=65535&x,T+=x>>>16,T+=(S+=(B+=(M+=65535&m)>>>16)>>>16)>>>16,r[5]=C=65535&S|T<<16,t[5]=j=65535&M|B<<16,M=65535&(m=V),B=m>>>16,S=65535&(x=P),T=x>>>16,x=r[6],B+=(m=t[6])>>>16,S+=65535&x,T+=x>>>16,T+=(S+=(B+=(M+=65535&m)>>>16)>>>16)>>>16,r[6]=P=65535&S|T<<16,t[6]=V=65535&M|B<<16,M=65535&(m=D),B=m>>>16,S=65535&(x=N),T=x>>>16,x=r[7],B+=(m=t[7])>>>16,S+=65535&x,T+=x>>>16,T+=(S+=(B+=(M+=65535&m)>>>16)>>>16)>>>16,r[7]=N=65535&S|T<<16,t[7]=D=65535&M|B<<16,J+=128,e-=128}return e}function Q(r,t,n){var e,o=new Int32Array(8),i=new Int32Array(8),f=new Uint8Array(256),a=n;for(o[0]=1779033703,o[1]=3144134277,o[2]=1013904242,o[3]=2773480762,o[4]=1359893119,o[5]=2600822924,o[6]=528734635,o[7]=1541459225,i[0]=4089235720,i[1]=2227873595,i[2]=4271175723,i[3]=1595750129,i[4]=2917565137,i[5]=725511199,i[6]=4215389547,i[7]=327033209,q(o,i,t,n),n%=128,e=0;e<n;e++)f[e]=t[a-n+e];for(f[n]=128,f[(n=256-128*(n<112?1:0))-9]=0,g(f,n-8,a/536870912|0,a<<3),q(o,i,f,n),e=0;e<8;e++)g(r,8*e,o[e],i[e]);return 0}function W(r,n){var e=t(),o=t(),i=t(),f=t(),a=t(),h=t(),s=t(),u=t(),y=t();P(e,r[1],r[0]),P(y,n[1],n[0]),N(e,e,y),C(o,r[0],r[1]),C(y,n[0],n[1]),N(o,o,y),N(i,r[3],n[3]),N(i,i,c),N(f,r[2],n[2]),C(f,f,f),P(a,o,e),P(h,f,i),C(s,f,i),C(u,o,e),N(r[0],a,h),N(r[1],u,s),N(r[2],s,h),N(r[3],a,u)}function $(r,t,n){var e;for(e=0;e<4;e++)Y(r[e],t[e],n)}function rr(r,n){var e=t(),o=t(),i=t();O(i,n[2]),N(e,n[0],i),N(o,n[1],i),L(r,o),r[31]^=z(e)<<7}function tr(r,t,n){var e,o;for(K(r[0],f),K(r[1],a),K(r[2],a),K(r[3],f),o=255;o>=0;--o)$(r,t,e=n[o/8|0]>>(7&o)&1),W(t,r),W(r,r),$(r,t,e)}function nr(r,n){var e=[t(),t(),t(),t()];K(e[0],u),K(e[1],y),K(e[2],a),N(e[3],u,y),tr(r,e,n)}function er(r,n,o){var i,f=new Uint8Array(64),a=[t(),t(),t(),t()];for(o||e(n,32),Q(f,n,32),f[0]&=248,f[31]&=127,f[31]|=64,nr(a,f),rr(r,a),i=0;i<32;i++)n[i+32]=r[i];return 0}var or=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function ir(r,t){var n,e,o,i;for(e=63;e>=32;--e){for(n=0,o=e-32,i=e-12;o<i;++o)t[o]+=n-16*t[e]*or[o-(e-32)],n=Math.floor((t[o]+128)/256),t[o]-=256*n;t[o]+=n,t[e]=0}for(n=0,o=0;o<32;o++)t[o]+=n-(t[31]>>4)*or[o],n=t[o]>>8,t[o]&=255;for(o=0;o<32;o++)t[o]-=n*or[o];for(e=0;e<32;e++)t[e+1]+=t[e]>>8,r[e]=255&t[e]}function fr(r){var t,n=new Float64Array(64);for(t=0;t<64;t++)n[t]=r[t];for(t=0;t<64;t++)r[t]=0;ir(r,n)}function ar(r,n,e,o){var i,f,a=new Uint8Array(64),h=new Uint8Array(64),s=new Uint8Array(64),c=new Float64Array(64),u=[t(),t(),t(),t()];Q(a,o,32),a[0]&=248,a[31]&=127,a[31]|=64;var y=e+64;for(i=0;i<e;i++)r[64+i]=n[i];for(i=0;i<32;i++)r[32+i]=a[32+i];for(Q(s,r.subarray(32),e+32),fr(s),nr(u,s),rr(r,u),i=32;i<64;i++)r[i]=o[i];for(Q(h,r,e+64),fr(h),i=0;i<64;i++)c[i]=0;for(i=0;i<32;i++)c[i]=s[i];for(i=0;i<32;i++)for(f=0;f<32;f++)c[i+f]+=h[i]*a[f];return ir(r.subarray(32),c),y}function hr(r,n,e,o){var i,h=new Uint8Array(32),c=new Uint8Array(64),u=[t(),t(),t(),t()],y=[t(),t(),t(),t()];if(e<64)return-1;if(function(r,n){var e=t(),o=t(),i=t(),h=t(),c=t(),u=t(),y=t();return K(r[2],a),R(r[1],n),F(i,r[1]),N(h,i,s),P(i,i,r[2]),C(h,r[2],h),F(c,h),F(u,c),N(y,u,c),N(e,y,i),N(e,e,h),H(e,e),N(e,e,i),N(e,e,h),N(e,e,h),N(r[0],e,h),F(o,r[0]),N(o,o,h),I(o,i)&&N(r[0],r[0],l),F(o,r[0]),N(o,o,h),I(o,i)?-1:(z(r[0])===n[31]>>7&&P(r[0],f,r[0]),N(r[3],r[0],r[1]),0)}(y,o))return-1;for(i=0;i<e;i++)r[i]=n[i];for(i=0;i<32;i++)r[i+32]=o[i];if(Q(c,r,e),fr(c),tr(u,y,c),nr(y,n.subarray(32)),W(u,y),rr(h,u),e-=64,p(n,0,h,0)){for(i=0;i<e;i++)r[i]=0;return-1}for(i=0;i<e;i++)r[i]=n[i+64];return e}function sr(r,t){if(32!==r.length)throw new Error("bad key size");if(24!==t.length)throw new Error("bad nonce size")}function cr(){for(var r=0;r<arguments.length;r++)if(!(arguments[r]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function ur(r){for(var t=0;t<r.length;t++)r[t]=0}r.lowlevel={crypto_core_hsalsa20:b,crypto_stream_xor:x,crypto_stream:_,crypto_stream_salsa20_xor:U,crypto_stream_salsa20:E,crypto_onetimeauth:M,crypto_onetimeauth_verify:B,crypto_verify_16:v,crypto_verify_32:p,crypto_secretbox:S,crypto_secretbox_open:T,crypto_scalarmult:Z,crypto_scalarmult_base:G,crypto_box_beforenm:V,crypto_box_afternm:D,crypto_box:function(r,t,n,e,o,i){var f=new Uint8Array(32);return V(f,o,i),D(r,t,n,e,f)},crypto_box_open:function(r,t,n,e,o,i){var f=new Uint8Array(32);return V(f,o,i),J(r,t,n,e,f)},crypto_box_keypair:j,crypto_hash:Q,crypto_sign:ar,crypto_sign_keypair:er,crypto_sign_open:hr,crypto_secretbox_KEYBYTES:32,crypto_secretbox_NONCEBYTES:24,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:32,crypto_box_SECRETKEYBYTES:32,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:24,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64,gf:t,D:s,L:or,pack25519:L,unpack25519:R,M:N,A:C,S:F,Z:P,pow2523:H,add:W,set25519:K,modL:ir,scalarmult:tr,scalarbase:nr},r.randomBytes=function(r){var t=new Uint8Array(r);return e(t,r),t},r.secretbox=function(r,t,n){cr(r,t,n),sr(n,t);for(var e=new Uint8Array(32+r.length),o=new Uint8Array(e.length),i=0;i<r.length;i++)e[i+32]=r[i];return S(o,e,e.length,t,n),o.subarray(16)},r.secretbox.open=function(r,t,n){cr(r,t,n),sr(n,t);for(var e=new Uint8Array(16+r.length),o=new Uint8Array(e.length),i=0;i<r.length;i++)e[i+16]=r[i];return e.length<32||0!==T(o,e,e.length,t,n)?null:o.subarray(32)},r.secretbox.keyLength=32,r.secretbox.nonceLength=24,r.secretbox.overheadLength=16,r.scalarMult=function(r,t){if(cr(r,t),32!==r.length)throw new Error("bad n size");if(32!==t.length)throw new Error("bad p size");var n=new Uint8Array(32);return Z(n,r,t),n},r.scalarMult.base=function(r){if(cr(r),32!==r.length)throw new Error("bad n size");var t=new Uint8Array(32);return G(t,r),t},r.scalarMult.scalarLength=32,r.scalarMult.groupElementLength=32,r.box=function(t,n,e,o){var i=r.box.before(e,o);return r.secretbox(t,n,i)},r.box.before=function(r,t){cr(r,t),function(r,t){if(32!==r.length)throw new Error("bad public key size");if(32!==t.length)throw new Error("bad secret key size")}(r,t);var n=new Uint8Array(32);return V(n,r,t),n},r.box.after=r.secretbox,r.box.open=function(t,n,e,o){var i=r.box.before(e,o);return r.secretbox.open(t,n,i)},r.box.open.after=r.secretbox.open,r.box.keyPair=function(){var r=new Uint8Array(32),t=new Uint8Array(32);return j(r,t),{publicKey:r,secretKey:t}},r.box.keyPair.fromSecretKey=function(r){if(cr(r),32!==r.length)throw new Error("bad secret key size");var t=new Uint8Array(32);return G(t,r),{publicKey:t,secretKey:new Uint8Array(r)}},r.box.publicKeyLength=32,r.box.secretKeyLength=32,r.box.sharedKeyLength=32,r.box.nonceLength=24,r.box.overheadLength=r.secretbox.overheadLength,r.sign=function(r,t){if(cr(r,t),64!==t.length)throw new Error("bad secret key size");var n=new Uint8Array(64+r.length);return ar(n,r,r.length,t),n},r.sign.open=function(r,t){if(cr(r,t),32!==t.length)throw new Error("bad public key size");var n=new Uint8Array(r.length),e=hr(n,r,r.length,t);if(e<0)return null;for(var o=new Uint8Array(e),i=0;i<o.length;i++)o[i]=n[i];return o},r.sign.detached=function(t,n){for(var e=r.sign(t,n),o=new Uint8Array(64),i=0;i<o.length;i++)o[i]=e[i];return o},r.sign.detached.verify=function(r,t,n){if(cr(r,t,n),64!==t.length)throw new Error("bad signature size");if(32!==n.length)throw new Error("bad public key size");var e,o=new Uint8Array(64+r.length),i=new Uint8Array(64+r.length);for(e=0;e<64;e++)o[e]=t[e];for(e=0;e<r.length;e++)o[e+64]=r[e];return hr(i,o,o.length,n)>=0},r.sign.keyPair=function(){var r=new Uint8Array(32),t=new Uint8Array(64);return er(r,t),{publicKey:r,secretKey:t}},r.sign.keyPair.fromSecretKey=function(r){if(cr(r),64!==r.length)throw new Error("bad secret key size");for(var t=new Uint8Array(32),n=0;n<t.length;n++)t[n]=r[32+n];return{publicKey:t,secretKey:new Uint8Array(r)}},r.sign.keyPair.fromSeed=function(r){if(cr(r),32!==r.length)throw new Error("bad seed size");for(var t=new Uint8Array(32),n=new Uint8Array(64),e=0;e<32;e++)n[e]=r[e];return er(t,n,!0),{publicKey:t,secretKey:n}},r.sign.publicKeyLength=32,r.sign.secretKeyLength=64,r.sign.seedLength=32,r.sign.signatureLength=64,r.hash=function(r){cr(r);var t=new Uint8Array(64);return Q(t,r,r.length),t},r.hash.hashLength=64,r.verify=function(r,t){return cr(r,t),0!==r.length&&0!==t.length&&(r.length===t.length&&0===w(r,0,t,0,r.length))},r.setPRNG=function(r){e=r},function(){var t="undefined"!=typeof self?self.crypto||self.msCrypto:null;if(t&&t.getRandomValues){r.setPRNG((function(r,n){var e,o=new Uint8Array(n);for(e=0;e<n;e+=65536)t.getRandomValues(o.subarray(e,e+Math.min(n-e,65536)));for(e=0;e<n;e++)r[e]=o[e];ur(o)}))}else(t=n(385))&&t.randomBytes&&r.setPRNG((function(r,n){var e,o=t.randomBytes(n);for(e=0;e<n;e++)r[e]=o[e];ur(o)}))}()}(r.exports?r.exports:self.nacl=self.nacl||{})},385:function(r,t){},386:function(r,t,n){!function(){"use strict";const t={};t.bytesToHex=n(387).bytesToHex,t.convertString=n(388),r.exports=u;const e=[];function o(r){const t=Math.sqrt(r);for(let n=2;n<=t;n++)if(!(r%n))return!1;return!0}function i(r){return 4294967296*(r-(0|r))|0}let f=2,a=0;for(;a<64;)o(f)&&(e[a]=i(Math.pow(f,1/3)),a++),f++;const h=function(r){const t=[];for(let n=0,e=0;n<r.length;n++,e+=8)t[e>>>5]|=r[n]<<24-e%32;return t},s=[],c=function(r,t,n){let o=r[0],i=r[1],f=r[2],a=r[3],h=r[4],c=r[5],u=r[6],y=r[7];for(let r=0;r<64;r++){if(r<16)s[r]=0|t[n+r];else{const t=s[r-15],n=(t<<25|t>>>7)^(t<<14|t>>>18)^t>>>3,e=s[r-2],o=(e<<15|e>>>17)^(e<<13|e>>>19)^e>>>10;s[r]=n+s[r-7]+o+s[r-16]}const l=o&i^o&f^i&f,g=(o<<30|o>>>2)^(o<<19|o>>>13)^(o<<10|o>>>22),w=y+((h<<26|h>>>6)^(h<<21|h>>>11)^(h<<7|h>>>25))+(h&c^~h&u)+e[r]+s[r];y=u,u=c,c=h,h=a+w|0,a=f,f=i,i=o,o=w+(g+l)|0}r[0]=r[0]+o|0,r[1]=r[1]+i|0,r[2]=r[2]+f|0,r[3]=r[3]+a|0,r[4]=r[4]+h|0,r[5]=r[5]+c|0,r[6]=r[6]+u|0,r[7]=r[7]+y|0};function u(r,n){r.constructor===String&&(r=t.convertString.UTF8.stringToBytes(r));const e=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],o=n&&n.noPreprocess?h(r):function(r){const t=h(r),n=8*r.length;return t[n>>5]|=128<<24-n%32,t[15+(n+64>>9<<4)]=n,t}(r);for(let r=0;r<o.length;r+=16)c(e,o,r);const i=function(r){const t=[];for(let n=0;n<32*r.length;n+=8)t.push(r[n>>>5]>>>24-n%32&255);return t}(e);return n&&n.asBytes?i:n&&n.asString?t.convertString.bytesToString(i):t.bytesToHex(i)}u.x2=function(r,t){return u(u(r,{asBytes:!0}),t)}}()},387:function(r,t,n){!function(t){"use strict";var n={bytesToHex:function(r){return function(r){return r.map((function(r){return t=r.toString(16),n=2,t.length>n?t:Array(n-t.length+1).join("0")+t;var t,n})).join("")}(r)},hexToBytes:function(r){if(r.length%2==1)throw new Error("hexToBytes can't have a string with an odd number of characters.");return 0===r.indexOf("0x")&&(r=r.slice(2)),r.match(/../g).map((function(r){return parseInt(r,16)}))}};r.exports?r.exports=n:t.convertHex=n}(this)},388:function(r,t,n){!function(t){"use strict";var n={bytesToString:function(r){return r.map((function(r){return String.fromCharCode(r)})).join("")},stringToBytes:function(r){return r.split("").map((function(r){return r.charCodeAt(0)}))}};n.UTF8={bytesToString:function(r){return decodeURIComponent(escape(n.bytesToString(r)))},stringToBytes:function(r){return n.stringToBytes(unescape(encodeURIComponent(r)))}},r.exports?r.exports=n:t.convertString=n}(this)},41:function(r,t){},42:function(r,t){},43:function(r,t){},44:function(r,t){},57:function(r,t){},58:function(r,t){},60:function(r,t){},62:function(r,t){},63:function(r,t){},64:function(r,t){},67:function(r,t){},68:function(r,t){},69:function(r,t){}}]);