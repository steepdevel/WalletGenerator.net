(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{170:function(e,t,n){e.exports=async function(){const e=await n.e(7).then(n.t.bind(null,105,7)),t=await Promise.all([n.e(0),n.e(10)]).then(n.t.bind(null,114,7)),a=await n.e(4).then(n.t.bind(null,61,7)),l=await Promise.all([n.e(11),n.e(8)]).then(n.t.bind(null,115,7));let s=null,d=0,r=null;let i=null,c=0,o=!1,u=null;const p=function(e,n,l){if(i=1,s=n=n||1,r=l,d=0,document.getElementById("paperkeyarea").innerHTML="",o){if(!e)return void alert(a.get("bip38alertpassphraserequired"));document.getElementById("busyblock").className="busy",t.BIP38GenerateIntermediatePointAsync(e,null,null,(function(e){u=e,document.getElementById("busyblock").className="",setTimeout(m,0)}))}else setTimeout(m,0)},m=function(){if(s>0){const e=document.getElementById("paperkeyarea");d++;const t=d,n=document.createElement("div");if(n.setAttribute("id","keyarea"+t),n.innerHTML=g(t),n.setAttribute("class","keyarea art"),e.innerHTML&&(t-1)%i==0&&t>=i){const e=document.createElement("div");e.setAttribute("class","pagebreak"),document.getElementById("paperkeyarea").appendChild(e),n.style.pageBreakBefore="always"}document.getElementById("paperkeyarea").appendChild(n),y(t),s--,setTimeout(m,0)}else setTimeout(r,0),r=null},y=function(e){if(o)t.BIP38GenerateECAddressAsync(u,!1,(function(t,n){b(e,t,n)}));else{const n=t.makeRandom(),a=t.getAddressWith(n,c),l=t.getWIFForAddress(n,c);b(e,a,l)}},g=function(t){return e.selectedCurrency.templateArtisticHtml(t,c)},b=function(e,t,n){const a={};a["qrcode_public"+e]=t,a["qrcode_private"+e]=n,l.showQrCode(a,l.sizeMultiplier.proportional(41,2.8)),document.getElementById("btcaddress"+e).innerHTML=t,document.getElementById("btcprivwif"+e).innerHTML=n},I=function(){const e=document.getElementById("paperencrypt");document.getElementById("paperkeyarea").style.fontSize="100%",e.checked&&(document.getElementById("paperkeyarea").style.fontSize="95%")},B={open:function(){document.getElementById("main").setAttribute("class","paper");document.getElementById("paperarea").style.display="block",i=1,document.getElementById("paperkeyarea").innerHTML||(document.getElementById("paperpassphrase").disabled=!0,document.getElementById("paperencrypt").checked=!1,o=!1,p(document.getElementById("paperpassphrase").value))},close:function(){document.getElementById("paperarea").style.display="none",document.getElementById("main").setAttribute("class","")},build:p,batch:m,generateNewWallet:y,testAndApplyVanityKey:function(){let e=document.getElementById("suppliedPrivateKey").value;if(e=e.trim(),document.getElementById("suppliedPrivateKey").value=e,t.isPrivateKey(e)){const n=t.decodePrivateKey(e),a=t.getAddressWith(n,c);e=t.getWIFForAddress(n,c),o?(document.getElementById("busyblock").className="busy",t.BIP38PrivateKeyToEncryptedKeyAsync(e,document.getElementById("paperpassphrase").value,!1,(function(e){document.getElementById("busyblock").className="",b(1,a,e)}))):b(1,a,e)}else alert(a.get("detailalertnotvalidprivatekey"))},templateArtisticHtml:g,showArtisticWallet:b,toggleEncrypt:function(e){document.getElementById("paperpassphrase").disabled=!e.checked,o=e.checked,I()},resetLimits:I};return Object.defineProperty(B,"publicMode",{enumerable:!0,get:()=>c,set:e=>{c=e}}),B}(),e.exports.__esModule=!0}}]);