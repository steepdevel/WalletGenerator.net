(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{414:function(e,t,r){(function(t){e.exports=async function(){const e=(await Promise.all([r.e(1),r.e(3),r.e(2),r.e(5),r.e(32)]).then(r.t.bind(null,307,7))).default,s=await r.e(9).then(r.t.bind(null,238,7));return class extends s{constructor(e,t){super(e,t)}create(t,r,s){return t?e.fromPrivateKey(t.toBuffer()):e.fromPublicKey(r,!0)}makeRandom(t){return e.generate()}isPrivateKey(e){return(e=(""+e).toLowerCase()).startsWith("0x")&&(e=e.slice(2)),/^[0-9a-f]{64}$/.test(e)}decodePrivateKey(r){return(r=(""+r).toLowerCase()).startsWith("0x")&&(r=r.slice(2)),e.fromPrivateKey(t.from(r,"hex"))}getAddressWith(e,t){return e.getChecksumAddressString()}getWIFForAddress(e,t){return"0x"+e.getPrivateKey().toString("hex")}getWIFByType(e,t){return"0x"+e.getPrivateKey().toString("hex")}getAddressFormatNames(){return["Normal"]}getAddressTitleNames(){return["Public Address"]}getWIFTitleNames(){return["Private Key"]}getPublicKey(e,t){return e.getPublicKey()}getPrivateKeyBuffer(e){return e.getPrivateKey()}havePrivateKey(e){return!!e.getPrivateKey()}isVanitygenPossible(e,t){return/^(?:0[Xx])?[0-9a-fA-F]{0,40}$/.test(e)}testVanitygenMatch(e,t,r){return e=e.toLowerCase().replace(/^0[Xx]/,""),(t=t.toLowerCase().replace(/^0[Xx]/,"")).startsWith(e)}}}(),e.exports.__esModule=!0}).call(this,r(10).Buffer)}}]);