(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{371:function(e,s,t){e.exports=async function(){const e=await Promise.all([t.e(1),t.e(0),t.e(2),t.e(3),t.e(12)]).then(t.t.bind(null,82,7)),s=await Promise.all([t.e(0),t.e(19)]).then(t.t.bind(null,256,7)),{upperValue:n,lowerValue:r}=await Promise.all([t.e(0),t.e(23)]).then(t.t.bind(null,174,7));return class extends s{constructor(s,t,n,r){super(s,t,n,r,void 0,void 0,e.coins.ZEC)}getAddressFormatNames(){return["Compressed","Uncompressed"]}getAddressTitleNames(){return["Public Address Compressed","Public Address"]}isVanitygenPossible(s,t){if(!s)return!0;switch(t||0){default:case 0:case 1:return function(t){const o=e.address.toBase58Check(n,t).slice(0,2),i=e.address.toBase58Check(r,t).slice(0,2);return new RegExp(`^(?:${o}|${i})[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{0,34}$`).test(s)}(this.network.pubKeyHash)}}}}(),e.exports.__esModule=!0}}]);