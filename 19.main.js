(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{256:function(e,t,r){(function(t){e.exports=async function(){const e=await Promise.all([r.e(1),r.e(2),r.e(3),r.e(5),r.e(21)]).then(r.t.bind(null,82,7)),s=await Promise.all([r.e(1),r.e(22)]).then(r.t.bind(null,109,7)),n=await Promise.all([r.e(9),r.e(13),r.e(28)]).then(r.t.bind(null,20,7)),i=await Promise.all([r.e(2),r.e(17)]).then(r.t.bind(null,40,7)),c=await r.e(6).then(r.t.bind(null,101,7)),o=await r.e(48).then(r.t.bind(null,174,7));return class extends c{constructor(t,r,s,n,i,c,o=e.coins.BTC){super(t,n),this.network={messagePrefix:"Bitcoin Signed Message:\n",bech32:c,bip32:{public:76067358,private:76066276},pubKeyHash:65535&r,scriptHash:i||5,wif:s,coin:o}}create(t,r,s){return s=Object.assign({},s||{},{network:this.network}),new e.ECPair(t,r,s)}makeRandom(t){return t=Object.assign({},t||{},{network:this.network}),e.ECPair.makeRandom(t)}isPrivateKey(r){try{return s.decode(r),!0}catch(e){}const c=function(e){if(32!==e.length)return!1;const t=n.fromByteArrayUnsigned(i.curves.secp256k1.curve.n.toArray()),r=n.fromByteArrayUnsigned(e);return t.compareTo(r)>0};if(c(t.from(r,"hex")))return!0;if(c(t.from(r,"base64")))return!0;if(/^S[1-9A-HJ-NP-Za-km-z]{29}$/.test(r)){if(0===e.crypto.sha256(r+"?")[0])return!0}return!1}decodePrivateKey(r){if(!this.isPrivateKey(r))return null;try{return e.ECPair.fromWIF(r,this.network)}catch(e){}function s(e){try{const s=t.from(r,e).toString("hex");if(64===s.length)return this.create(n.fromHex(s),null,{compressed:!0})}catch(e){}}const i=s("hex");if(i)return i;const c=s("base64");if(c)return c;if(/^S[1-9A-HJ-NP-Za-km-z]{29}$/.test(r)){const t=e.crypto.sha256(r).toString("hex");return this.create(n.fromHex(t),null,{compressed:!0})}}getAddressWith(t,r){const s=t.compressed;try{switch(r||0){default:case 0:return t.compressed=!0,e.ECPair.prototype.getAddress.call(t);case 1:return t.compressed=!1,e.ECPair.prototype.getAddress.call(t);case 2:if(t.network.bech32){const r=t.Q.getEncoded(!0),s=e.script.witnessPubKeyHash.output.encode(e.crypto.hash160(r));return e.address.toBech32(e.script.compile(s).slice(2,22),0,t.network.bech32)}return this.getAddressWith(t,0);case 3:if(t.network.bech32){const r=t.Q.getEncoded(!0),s=e.script.witnessPubKeyHash.output.encode(e.crypto.hash160(r)),n=e.crypto.hash160(s);return e.address.toBase58Check(n,t.network.scriptHash)}return this.getAddressWith(t,0)}}finally{t.compressed=s}}getWIFForAddress(e,t){const r=e.compressed;try{switch(t){case 1:e.compressed=!1;break;default:e.compressed=!0}return e.toWIF()}finally{e.compressed=r}}getWIFByType(e,t){const r=e.compressed;try{switch(t){case 0:e.compressed=!0;break;case 1:e.compressed=!1}return e.toWIF()}finally{e.compressed=r}}getAddressFormatNames(){return this.network.bech32?["Compressed","Uncompressed","SegWit","SegWit (P2SH-wrapped)"]:["Compressed","Uncompressed"]}getAddressTitleNames(){return this.network.bech32?["Public Address Compressed","Public Address","SegWit Address","SegWit Address (P2SH-wrapped)"]:["Public Address Compressed","Public Address"]}getWIFTitleNames(){return["Private Key WIF Compressed<br />52 characters Base58","Private Key WIF<br />51 characters Base58"]}getPublicKey(e,t){return e.Q.getEncoded(t)}getPrivateKeyBuffer(e){return e.d.toBuffer()}havePrivateKey(e){return!!e.d}isVanitygenPossible(e,t){if(!e)return!0;function r(t){const r=o.bitcoinB58Leading[t];return new RegExp(`^${r}[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{0,34}$`).test(e)}const s=this;switch(t||0){default:case 0:case 1:return r(this.network.pubKeyHash);case 2:return!!this.network.bech32&&(e=e.toLowerCase(),new RegExp(`^${s.network.bech32}(1(q([abcdefghijklmnopqrstuvwxyz234567]{0,38})?)?)?$`).test(e));case 3:return!!this.network.bech32&&r(this.network.scriptHash)}}}}(),e.exports.__esModule=!0}).call(this,r(10).Buffer)}}]);