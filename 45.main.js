(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{413:function(e,s,t){e.exports=async function(){const e=await Promise.all([t.e(0),t.e(19)]).then(t.t.bind(null,304,7)),s=await Promise.all([t.e(0),t.e(1),t.e(3),t.e(2),t.e(12)]).then(t.t.bind(null,200,7)),r=await Promise.all([t.e(0),t.e(1),t.e(38),t.e(44)]).then(t.t.bind(null,421,7)),d=await Promise.all([t.e(0),t.e(26)]).then(t.t.bind(null,249,7));return class extends e{constructor(e,t,r,d){super(e,t,r,d,void 0,void 0,s.coins.BCH)}getAddressWith(e,t){const d=e.compressed;try{let n;switch(t||0){case 0:return e.compressed=!0,s.ECPair.prototype.getAddress.call(e);case 1:return e.compressed=!1,s.ECPair.prototype.getAddress.call(e);case 2:return n=this.getAddressWith(e,0),r.toCashAddress(n).split(":")[1];case 3:return n=this.getAddressWith(e,1),r.toCashAddress(n).split(":")[1]}return this.getAddressWith(e,0)}finally{e.compressed=d}}getWIFWith(e,s){const t=e.compressed;try{switch(s){case 1:case 3:e.compressed=!1;break;default:e.compressed=!0}return e.toWIF()}finally{e.compressed=t}}getAddressFormatNames(){return["Compressed","Uncompressed","CashAddress (Compressed)","CashAddress (Uncompressed)"]}getAddressTitleNames(){return["Public Address Compressed","Public Address","CashAddress (Compressed)","CashAddress (Uncompressed)"]}isVanitygenPossible(e,s){switch(s||0){default:case 0:case 1:return function(s){const t=d.bitcoinB58Leading[s];return new RegExp(`^${t}[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$`).test(e)}(this.network.pubKeyHash);case 2:case 3:return/^(?:bitcoincash:)?q[abcdefghijklmnopqrstuvwxyz234567]{0,41}$/.test(e)}}testVanitygenMatch(e,s,t){return e=e.replace(/^bitcoincash:/,""),(s=s.replace(/^bitcoincash:/,"")).startsWith(e)}}}(),e.exports.__esModule=!0}}]);