(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{372:function(e,t,r){(function(t){e.exports=async function(){const e=await r.e(6).then(r.t.bind(null,101,7)),n=await Promise.all([r.e(1),r.e(2),r.e(3),r.e(5),r.e(36)]).then(r.t.bind(null,383,7)),s=await Promise.all([r.e(1),r.e(39)]).then(r.t.bind(null,26,7));return class extends e{constructor(e,r,n,s,i){super(e,i),this.network={spendingKey:t.from(r),viewingKey:t.from(n),address:t.from(s)}}create(e,t,r){return n.createSpendingKeyFromBuffer(this.network,e.toBuffer())}makeRandom(e){return n.createSpendingKey(this.network)}isPrivateKey(e){return!0}decodePrivateKey(e){return e}getAddressWith(e,t){switch(t||0){default:case 0:return n.convertSpendingKeyToAddress(e,this.network);case 1:return n.convertSpendingKeyToViewingKey(e,this.network)}}getWIFForAddress(e,t){return e}getWIFByType(e,t){return e}getAddressFormatNames(){return["Payment Address","Viewing Key"]}getAddressTitleNames(){return["Payment Address","Viewing Key"]}getWIFTitleNames(){return["Spending Key"]}getPublicKey(e,r){return t.allocUnsafe(0)}getPrivateKeyBuffer(e){return s.decode(e).slice(2)}havePrivateKey(e){return!0}isVanitygenPossible(e,t){return!1}shouldAddCoinList(){return!1}}}(),e.exports.__esModule=!0}).call(this,r(10).Buffer)}}]);