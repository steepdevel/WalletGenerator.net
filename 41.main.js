(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{255:function(n,e,t){"use strict";t.r(e),e.default=t.p+"9c55069b13acf7e97a17e954eaaef061.png"},256:function(n,e,t){"use strict";t.r(e),e.default=t.p+"5dc230bcf7ce9c9b7c3182d21583c256.png"},257:function(n,e,t){"use strict";t.r(e),e.default=t.p+"9fe64e15622f725919904733827261d9.png"},258:function(n,e,t){"use strict";t.r(e),e.default=t.p+"1bc901b7859a8ba8bd36477910b29707.png"},259:function(n,e,t){"use strict";t.r(e),e.default=t.p+"92cd79afeef21c8fb6ab160292e5e6a8.gif"},368:function(n,e,t){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function p(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},a=[],i=0;i<n.length;i++){var r=n[i],d=e.base?r[0]+e.base:r[0],l=t[d]||0,s="".concat(d," ").concat(l);t[d]=l+1;var c=p(s),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==c?(o[c].references++,o[c].updater(f)):o.push({identifier:s,updater:u(f,e),references:1}),a.push(s)}return a}function l(n){var e=document.createElement("style"),a=n.attributes||{};if(void 0===a.nonce){var i=t.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(n){e.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(e);else{var o=r(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var s,c=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function f(n,e,t,a){var i=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(n.styleSheet)n.styleSheet.cssText=c(e,i);else{var r=document.createTextNode(i),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(r,o[e]):n.appendChild(r)}}function x(n,e,t){var a=t.css,i=t.media,r=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var g=null,b=0;function u(n,e){var t,a,i;if(e.singleton){var r=b++;t=g||(g=l(e)),a=f.bind(null,t,r,!1),i=f.bind(null,t,r,!0)}else t=l(e),a=x.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<t.length;a++){var i=p(t[a]);o[i].references--}for(var r=d(n,e),l=0;l<t.length;l++){var s=p(t[l]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}t=r}}}},369:function(n,e,t){"use strict";t.r(e);var a=t(370),i=t.n(a),r=t(371),o=t.n(r),p=t(255),d=t(256),l=t(257),s=t(258),c=t(259),f=i()(!1),x=o()(p.default),g=o()(d.default),b=o()(l.default),u=o()(s.default),h=o()(c.default);f.push([n.i,".more {\n  background: url("+x+") no-repeat left center;\n  width: 17px;\n  height: 17px;\n  display: inline-block;\n  float: right;\n}\n.less {\n  background: url("+g+") no-repeat left center;\n  width: 17px;\n  height: 17px;\n  display: inline-block;\n  float: right;\n}\na {\n  position: relative;\n  z-index: 20;\n  text-decoration: none;\n  color: #d58424;\n}\n.right {\n  text-align: right;\n}\n.walletarea {\n  display: none;\n  border: 1px solid #bfbfbf;\n  background-color: #fff;\n}\nhr {\n  margin: 20px 0;\n  border-top: 1px dashed #008000;\n}\n.keyarea {\n  height: 110px;\n  text-align: left;\n  position: relative;\n  padding: 10px 25px 10px;\n}\n.keyarea .public {\n  float: left;\n}\n.keyarea .pubaddress {\n  display: inline-block;\n  height: 40px;\n  padding: 0 0 0 10px;\n  float: left;\n}\n.keyarea .privwif {\n  margin: 0;\n  float: right;\n  text-align: right;\n  padding: 0 20px 0 0;\n  position: relative;\n}\n.keyarea .label {\n  font-weight: bold;\n}\n.keyarea .output {\n  display: block;\n  font-family: monospace;\n  font-size: 1.25em;\n}\n.keyarea .qrcode_public {\n  display: inline-block;\n  float: left;\n}\n.keyarea .qrcode_private {\n  display: inline-block;\n  position: relative;\n  top: 28px;\n  float: right;\n}\n.pubkeyhex {\n  word-wrap: break-word;\n}\nhtml {\n  height: 100%;\n}\nbody {\n  font-family: Arial;\n  background-image: url("+b+");\n  height: 100%;\n}\n.faqs ol {\n  padding: 0 0 0 25px;\n}\n.faqs li {\n  padding: 3px 0;\n}\n.question {\n  padding: 10px 15px;\n  text-align: left;\n  cursor: pointer;\n}\n.question:hover,\n.expandable:hover {\n  color: #77777a;\n}\n.answer {\n  padding: 0 15px 10px 25px;\n  text-align: left;\n  display: none;\n  font-size: 80%;\n}\n.faq {\n  border: 0;\n  border-top: 1px solid #bfbfbf;\n}\n.unsure {\n  display: none;\n  color: #f00;\n  font-weight: bolder;\n  font-size: 150%;\n}\n#walletCommands {\n  display: visible;\n}\n#keyarea {\n  display: visible;\n}\n#faqZone {\n  text-align: left;\n  padding: 10px 30px 30px 30px;\n}\n.faqQuestion {\n  margin-left: 15px;\n}\n.faqAnswer {\n  margin-left: 30px;\n  display: none;\n}\n.faqListBullet {\n  padding: 0 5px 0px 15px;\n}\n.faqLink {\n  cursor: pointer;\n}\n#btcaddress,\n#btcprivwif,\n#detailaddress,\n#detailaddresscomp,\n#detailprivwif,\n#detailprivwifcomp {\n  font-family: monospace;\n  font-size: 1.25em;\n}\n#seedpoolarea {\n  display: none;\n}\n#seedpooldisplay {\n  font-family: monospace;\n  font-size: 1em;\n  width: 640px;\n  padding: 15px 5px;\n  word-wrap: break-word;\n  min-height: 98px;\n}\n.seedpoint {\n  width: 6px;\n  height: 6px;\n  display: block;\n  border-radius: 3px;\n  background-color: #80cf80;\n  position: absolute;\n  z-index: 10;\n}\n#seedSkipper {\n  font-size: 11px;\n  text-align: center;\n  line-height: 14px;\n}\n#skipMessage {\n  margin-top: 8px;\n}\n#generate #mousemovelimit {\n  font-size: 16px;\n  color: #fff;\n}\n#rightArea {\n  position: absolute;\n  right: 66px;\n  top: 62px;\n  width: 170px;\n}\n#progress-bar {\n  width: 170px;\n  background: #80cf80;\n  position: relative;\n  margin-bottom: 20px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n}\n#progress-bar-percentage {\n  background: #ffa247;\n  padding: 3px 0px;\n  text-align: center;\n  height: 18px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n}\n#progress-bar-percentage span {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  left: 0;\n}\n.nicerButton {\n  font-size: 14px;\n}\n#generate {\n  font-size: 13px;\n  text-align: left;\n  position: relative;\n  padding: 20px;\n  border: 1px solid #bfbfbf;\n  background-color: #fff;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  border-radius: 10px;\n}\n#generate span {\n  padding: 5px 5px 0 5px;\n}\n#generatekeyinput {\n  position: relative;\n  z-index: 20;\n}\n#generatelabelbitcoinaddress,\n#generatelabelmovemouse,\n#generatelabelkeypress {\n  font-size: 14px;\n  font-family: monospace;\n}\n#mousemovelimit {\n  font-size: 16px;\n  font-family: monospace;\n}\n.frontPageText {\n  position: relative;\n}\nh1 {\n  margin: 0px;\n  height: 91px;\n}\n#keyarea {\n  height: 250px;\n  border-bottom: 1px solid #bfbfbf;\n}\n#keyarea .pubaddress {\n  float: none;\n  display: block;\n  padding: 0;\n  height: auto;\n}\n#keyarea .label {\n  text-decoration: none;\n}\n#keyarea .privwif {\n  float: none;\n  text-align: right;\n  position: relative;\n  padding: 0;\n}\n#keyarea .qrcode_public {\n  float: none;\n  display: block;\n  padding: 13px 11px 11px 11px;\n}\n#keyarea .qrcode_private {\n  float: none;\n  display: block;\n  top: 0;\n  text-align: right;\n  padding: 13px 11px 11px 11px;\n}\n#keyarea .private {\n  width: 30%;\n  display: table-cell;\n}\n#keyarea .public {\n  width: 30%;\n  display: table-cell;\n}\n#singlearea {\n  font-size: 90%;\n  display: block;\n}\n#singlesecret {\n  color: #f00;\n  font-weight: bolder;\n  font-size: 200%;\n}\n#singleshare {\n  color: #008000;\n  font-weight: bolder;\n  font-size: 200%;\n}\n#singlelabelprivatekey {\n  color: #f00;\n}\n#singlelabelbitcoinaddress {\n  color: #008000;\n}\n#singlesafety {\n  text-align: left;\n  border-bottom: 1px solid #bfbfbf;\n  position: relative;\n  min-height: 500px;\n}\n#singlesafety p {\n  font-size: 13px;\n}\n.firstHalfSingleSafety,\n.secondHalfSingleSafety {\n  -webkit-box-sizing: border-box;\n/* Safari/Chrome, other WebKit */\n  -moz-box-sizing: border-box;\n/* Firefox, other Gecko */\n  box-sizing: border-box;\n/* Opera/IE 8+ */\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n}\n.firstHalfSingleSafety {\n  width: 50%;\n  padding: 10px 30px 10px 30px;\n}\n.secondHalfSingleSafety {\n  width: 50%;\n  padding: 20px;\n  text-align: center;\n  float: right;\n}\n.frontPageImage,\n.seedFrontPageImage {\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  border-radius: 10px;\n}\n.frontPageImage {\n  width: 100%;\n}\n.seedFrontPageImage {\n  max-height: 340px;\n}\n.currencyNameColumn {\n  min-width: 120px;\n}\n.securityChecklist {\n  background-color: #ffe6c9;\n  margin-top: 15px;\n  padding: 20px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  border-radius: 10px;\n  text-align: left;\n}\n.supportedCurrenciesChecklist {\n  background-color: #c2f2c3;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 20px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  border-radius: 10px;\n  text-align: left;\n}\n.supportedCurrenciesChecklist ul {\n  list-style-type: none;\n  padding-left: 14px;\n}\n#supportedcurrencies {\n  line-height: 20px;\n  padding: 12px 12px 0;\n  text-align: justify;\n}\n.frontPageInstructions {\n  padding: 5px;\n}\n.securityChecklist ul {\n  padding: 5px 0 0 20px;\n}\n.securityChecklist li {\n  padding-left: 5px;\n  margin-bottom: 10px;\n}\n.redText {\n  color: #f00;\n}\n.greenText {\n  color: #008000;\n}\n#coinLogo {\n  width: 55px;\n  height: 55px;\n  padding: 10px;\n  position: absolute;\n  top: 2px;\n  left: 10px;\n}\n#coinLogoImg {\n  width: 100%;\n  height: 100%;\n}\n.coinIcoin {\n  width: 64px;\n  height: 64px;\n  padding: 10px;\n  position: absolute;\n  top: 272px;\n  left: 48px;\n}\n#coinImg {\n  width: 100%;\n  height: 100%;\n}\n#main {\n  position: relative;\n  text-align: center;\n  margin: 0px auto;\n  width: 1005px;\n}\n#logo {\n  width: 578px;\n  height: 80px;\n}\n.backLogo {\n  float: right;\n  width: 50px;\n  height: 50px;\n}\n#paperarea {\n  min-height: 120px;\n  display: none;\n}\n#paperarea .keyarea {\n  border: 1px solid #bfbfbf;\n  border-top: 0;\n}\n#paperarea .keyarea.art {\n  display: block;\n  height: auto;\n  border: 0;\n  font-family: Ubuntu, Arial;\n  padding: 0;\n  margin: 0;\n}\n#paperarea .artwallet .papersvg {\n  width: 1004px;\n  height: 426px;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  left: 0;\n}\n#paperarea .artwallet .qrcode_public {\n  top: 263px;\n  left: 780px;\n  z-index: 100;\n  margin: 0;\n  float: none;\n  display: block;\n  position: absolute;\n  background-color: #fff;\n  padding: 5px 5px 2px 5px;\n}\n#paperarea .artwallet .qrcode_private {\n  top: 37px;\n  right: 446px;\n  z-index: 100;\n  margin: 0;\n  float: none;\n  display: block;\n  position: absolute;\n  background-color: #fff;\n  padding: 5px 5px 2px 5px;\n  -ms-transform: rotate(180deg);\n/* IE 9 */\n  -webkit-transform: rotate(180deg);\n/* Chrome, Safari, Opera */\n  transform: rotate(180deg);\n}\n.supportWalletGenerator {\n  margin: 30px;\n}\n.errorMsg {\n  color: #f00;\n  text-align: center !important;\n  width: 100% !important;\n  padding-top: 15px !important;\n}\n#paperarea .artwallet .btcaddress {\n  position: absolute;\n  bottom: 88px;\n  left: 874px;\n  z-index: 100;\n  font-size: 11px;\n  background-color: transparent;\n  font-weight: 100;\n  color: #000;\n  margin: 0;\n  width: 124px;\n  height: 32px;\n  text-align: center;\n  word-wrap: break-word;\n  font-family: Courier, monospace;\n  -ms-transform: rotate(-90deg);\n/* IE 9 */\n  -webkit-transform: rotate(-90deg);\n/* Chrome, Safari, Opera */\n  transform: rotate(-90deg);\n  font-family: Courier, monospace;\n}\n#paperarea .artwallet .btcprivwif {\n  position: absolute;\n  top: 86px;\n  right: 540px;\n  z-index: 100;\n  font-size: 11px;\n  background-color: transparent;\n  font-weight: 100;\n  color: #000;\n  margin: 0;\n  width: 124px;\n  height: 32px;\n  text-align: center;\n  word-wrap: break-word;\n  -ms-transform: rotate(90deg);\n/* IE 9 */\n  -webkit-transform: rotate(90deg);\n/* Chrome, Safari, Opera */\n  transform: rotate(90deg);\n  font-family: Courier, monospace;\n}\n#paperarea .artwallet .btcencryptedkey {\n  position: absolute;\n  top: 86px;\n  right: 540px;\n  z-index: 100;\n  font-size: 11px;\n  background-color: transparent;\n  font-weight: 100;\n  color: #000;\n  margin: 0;\n  width: 110px;\n  height: 32px;\n  text-align: center;\n  word-wrap: break-word;\n  -ms-transform: rotate(90deg);\n/* IE 9 */\n  -webkit-transform: rotate(90deg);\n/* Chrome, Safari, Opera */\n  transform: rotate(90deg);\n  font-family: Courier, monospace;\n}\n#suppliedPrivateKey {\n  width: 420px;\n}\n#papergenerate {\n  margin-left: 10px;\n  margin-right: 0px;\n}\n.displayNone {\n  display: none;\n}\n.redColor {\n  color: #f00;\n}\n.paperWalletText {\n  bottom: 8px;\n  height: 156px;\n  left: 339px;\n  padding: 15px 15px 17px 37px;\n  position: absolute;\n  width: 265px;\n  font-size: 10px;\n  color: #383838;\n  line-height: 15px;\n}\n.paperWalletText ul {\n  margin: 0px;\n  padding: 0px;\n}\n.paperWalletText li {\n  line-height: 13px;\n  margin-bottom: 5px;\n}\n.qrzone {\n  margin: 20px 0px 20px 20px;\n}\n#detaillabelenterprivatekey {\n  margin-right: 15px;\n}\n.qrcodeinputwrapper {\n  position: relative;\n  margin-right: 15px;\n}\n.qrcodeinputwrapper img {\n  position: absolute;\n  display: block;\n  top: 3px;\n  right: 20px;\n  width: 16px;\n  height: 16px;\n  background: url("+u+");\n  cursor: pointer;\n  padding: 0;\n}\n#bulkarea .body {\n  padding: 5px 0 0 0;\n}\n#bulkarea .format {\n  font-style: italic;\n  font-size: 90%;\n}\n#bulktextarea {\n  font-size: 90%;\n  width: 98%;\n  margin: 4px 0 0 0;\n}\n#brainarea .keyarea {\n  visibility: hidden;\n  min-height: 110px;\n}\n#detailarea span.qrinput {\n  position: relative;\n  padding: 10px;\n}\n#detailarea span.qrinput #detailprivkey {\n  width: 420px;\n  height: 20px;\n}\n#detailkeyarea {\n  padding: 10px;\n}\n#detailarea {\n  margin: 0;\n  text-align: left;\n}\n#detailarea .notes {\n  text-align: left;\n  font-size: 80%;\n  padding: 0 0 20px 0;\n}\n#detailarea .pubaddress {\n  width: 100%;\n}\n#detailarea .pubqr .item .label {\n  text-decoration: none;\n}\n#detailarea .pubqr .item {\n  float: left;\n  margin: 10px 0;\n  position: relative;\n}\n#detailarea .pubqr .item.right {\n  float: right;\n  position: relative;\n  top: 0;\n}\n#detailarea .privaddress {\n  width: 100%;\n}\n#detailarea .privqr .item .label {\n  text-decoration: none;\n}\n#detailarea .privqr .item {\n  float: left;\n  margin: 0;\n  position: relative;\n}\n#detailarea .privqr .item.right {\n  float: right;\n  position: relative;\n}\n#detailarea .item {\n  margin: 10px 0;\n  position: relative;\n  font-size: 90%;\n  padding: 1px 0;\n}\n#detailarea .item.clear {\n  clear: both;\n  padding-top: 10px;\n}\n#detailarea .label {\n  display: block;\n  font-weight: bold;\n}\n#detailarea .output {\n  display: block;\n  font-family: monospace;\n  font-size: 1.25em;\n}\n#detailarea [id^='detailqrcode'].left {\n  position: relative;\n  float: left;\n  margin: 0 10px 0 0;\n  padding: 13px 11px 11px 11px;\n}\n#detailarea [id^='detailqrcode'].right {\n  position: relative;\n  float: right;\n  margin: 0 10px 0 0;\n  padding: 13px 11px 11px 11px;\n}\n#detailpubkey {\n  width: 590px;\n}\n#detailbip38commands {\n  display: none;\n  padding-top: 5px;\n}\n#paperqrscanner {\n  position: absolute;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 5000;\n  vertical-align: middle;\n}\n#paperqrscanner.show {\n  display: block;\n}\n.englishjson {\n  text-align: center;\n  padding: 40px 0 20px 0;\n}\n.unittests {\n  text-align: center;\n}\n.unittests div {\n  width: 894px;\n  font-family: monospace;\n  text-align: left;\n  margin: auto;\n  padding: 5px;\n  border: 1px solid #000;\n}\n#testnet {\n  display: none;\n  background-color: Orange;\n  color: #000;\n  border-radius: 5px;\n  font-weight: bold;\n  padding: 10px 0;\n  margin: 0 auto 20px auto;\n}\n#busyblock {\n  position: fixed;\n  display: none;\n  background: url("+h+") #ccc no-repeat center;\n  opacity: 0.4;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 5000;\n}\n#busyblock.busy {\n  display: block;\n}\n.hide {\n  display: none;\n}\n.show {\n  display: block;\n}\n.dialog {\n  z-index: 6000;\n  position: relative;\n  background: #fff;\n  border: 2px solid #f7931a;\n  width: 600px;\n  margin: 150px auto;\n  padding: 1em;\n}\n.dialog-narrow {\n  width: 300px;\n}\n#currencyddl {\n  margin: 20px;\n  position: absolute;\n  right: 0;\n  top: 60px;\n  width: 320px;\n  font-size: 14px;\n}\n#currencyddl select {\n  font-size: 14px;\n}\n.banner {\n  font-size: 46px;\n  text-shadow: 1px 1px 3px #000;\n  color: #ff9547;\n  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);\n  text-align: left;\n  position: relative;\n}\n#donateqrcode {\n  padding: 8px;\n  position: absolute;\n  left: 550px;\n  margin: 25px;\n  border: #000 solid 1px;\n  background-color: #fff;\n}\n#donatelist {\n  padding: 20px;\n}\n#donatearea {\n  text-align: left;\n  padding: 15px 15px 120px 15px;\n  position: relative;\n}\n#donatearea .address {\n  font-family: 'Courier New', Courier, monospace;\n}\n/* IE8 */\n.qrcodetable {\n  border-width: 0px;\n  border-style: none;\n  border-color: #00f;\n  border-collapse: collapse;\n}\n.qrcodetddark {\n  border-width: 0px;\n  border-style: none;\n  border-color: #00f;\n  border-collapse: collapse;\n  padding: 0;\n  margin: 0;\n  width: 2px;\n  height: 2px;\n  background-color: #000;\n}\n.qrcodetdlight {\n  border-width: 0px;\n  border-style: none;\n  border-color: #00f;\n  border-collapse: collapse;\n  padding: 0;\n  margin: 0;\n  width: 2px;\n  height: 2px;\n  background-color: #fff;\n}\n@media screen {\n  #tagline {\n    margin: 0 0 15px 0;\n    font-style: italic;\n    text-align: left;\n  }\n  .menu {\n    text-align: left;\n  }\n  .menu .tab {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    display: inline-block;\n    background-color: #f5f5f5;\n    border: 1px solid #bfbfbf;\n    padding: 5px;\n    margin: 0 2px 0 0;\n    position: relative;\n    top: 1px;\n    z-index: 110;\n    cursor: pointer;\n  }\n  .menu .tab:hover {\n    color: #d58424;\n  }\n  .menu .tab.selected {\n    background-color: #fff;\n    border-bottom: 1px solid #fff;\n    cursor: default;\n  }\n  .menu .tab.selected:hover {\n    color: #000;\n  }\n  .pagebreak {\n    height: 50px;\n  }\n  .commands {\n    border-bottom: 1px solid #bfbfbf;\n    padding: 10px 2px;\n    margin-bottom: 0;\n    background-color: #fff;\n  }\n  .commands .row {\n    padding: 0 0;\n    text-align: left;\n  }\n  .commands .row.extra {\n    padding-top: 6px;\n  }\n  .commands span {\n    padding: 0 10px;\n  }\n  .commands span.print {\n    float: right;\n  }\n  .commands span.right {\n    float: right;\n  }\n  .expandable {\n    padding: 10px 15px;\n    text-align: left;\n    cursor: pointer;\n  }\n  #menu {\n    visibility: visible;\n    font-size: 90%;\n  }\n  #culturemenu {\n    text-align: right;\n    padding: 0 20px;\n    font-size: 14px;\n    margin-bottom: 35px;\n  }\n  #culturemenu span {\n    padding: 3px;\n  }\n  #culturemenu .selected {\n    text-decoration: none;\n    color: #000;\n  }\n  #braincommands .row .label {\n    width: 200px;\n    display: inline-block;\n  }\n  #braincommands .notes {\n    font-size: 80%;\n    display: block;\n    padding: 5px 10px;\n  }\n  #brainpassphrase {\n    width: 280px;\n  }\n  #brainpassphraseconfirm {\n    width: 280px;\n  }\n  #brainwarning,\n  #detailcommands {\n    padding: 10px 0;\n  }\n  #detailcommands span {\n    padding: 0 10px;\n  }\n  #detailprivkey {\n    width: 300px;\n  }\n  #detailprivkeypassphrase {\n    width: 250px;\n  }\n  .paper .commands {\n    border: 1px solid #bfbfbf;\n  }\n  #bulkstartindex {\n    width: 35px;\n  }\n  #bulklimit {\n    width: 45px;\n  }\n  .footer {\n    font-size: 90%;\n    clear: both;\n    width: 750px;\n    padding: 10px 0 10px 0;\n    margin: 50px auto auto auto;\n  }\n  .footer div span.item {\n    margin: 10px;\n  }\n  .footer .authorbtc {\n    float: left;\n    width: 470px;\n  }\n  .footer .authorbtc span.item {\n    text-align: left;\n    display: block;\n    padding: 0 20px;\n  }\n  .footer .authorbtc div {\n    position: relative;\n    z-index: 100;\n  }\n  .footer .authorpgp {\n    position: relative;\n  }\n  .footer .authorpgp span.item {\n    text-align: right;\n    display: block;\n    padding: 0 20px;\n  }\n  .footer .copyright {\n    font-size: 80%;\n    clear: both;\n    padding: 5px 0;\n  }\n  .footer .copyright span {\n    padding: 10px 2px;\n  }\n}\n@media print {\n  body {\n    -webkit-print-color-adjust: exact;\n    width: 1000px;\n    height: 450px;\n  }\n  #main {\n    width: auto;\n  }\n  #singlearea {\n    border: 0;\n  }\n  #singlesafety {\n    border: 0;\n  }\n  #paperarea .keyarea:first-child {\n    border-top: 1px solid #bfbfbf;\n  }\n  #paperarea .keyarea.art:first-child {\n    border: 0;\n  }\n  .pagebreak {\n    height: 1px;\n  }\n  .paper #logo {\n    display: none;\n  }\n  .menu,\n  .footer,\n  .commands,\n  #tagline,\n  #faqs,\n  #culturemenu {\n    display: none;\n  }\n  #detailprivwif {\n    width: 285px;\n    word-wrap: break-word;\n  }\n  #detailprivwifcomp {\n    width: 310px;\n    word-wrap: break-word;\n    text-align: right;\n  }\n  #detailarea .privqr .item.right {\n    width: 310px;\n  }\n  #detailarea .privqr .item {\n    width: 285px;\n  }\n  #detailarea .notes {\n    display: none;\n  }\n  #seedpoolarea {\n    display: none;\n  }\n  .faq {\n    display: none;\n  }\n  .banner {\n    display: none;\n  }\n  #currency {\n    display: none;\n  }\n  #paperarea .artwallet .btcaddress,\n  #paperarea .artwallet .btcprivwif {\n    z-index: 999;\n  }\n  .paperWalletText {\n    z-index: 999;\n  }\n  .dogeTag {\n    display: none;\n  }\n}\n",""]),e.default=f},370:function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",a=n[3];if(!a)return t;if(e&&"function"==typeof btoa){var i=(o=a,p=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(p),"/*# ".concat(d," */")),r=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[t].concat(r).concat([i]).join("\n")}var o,p,d;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,a){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(a)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);a&&i[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},371:function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},4:function(n,e,t){var a=t(368),i=t(369);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);n.exports=i.locals||{}}}]);