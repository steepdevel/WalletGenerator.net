(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{375:function(e,n){const o="123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",t=o.length,r=[...o].reduce((e,n,o)=>(e[n]=o,e),{});n.int_to_base58=n.encode=function(e){let n,r="";for(function(e){if("number"!=typeof e||isNaN(e)||e<0||e>Number.MAX_SAFE_INTEGER||Math.floor(e)!==e)throw new Error("Value passed is not a non-negative safe integer.")}(e=Number(e));e>=t;)n=e%t,r=o[n]+r,e=Math.floor(e/t);return o[e]+r},n.base58_to_int=n.decode=function(e){return function(e){if("string"!=typeof e)throw new Error("Value passed is not a string.")}(e),[...e].reverse().reduce((e,n,o)=>(function(e){if(void 0===r[e])throw new Error("Value passed is not a valid Base58 string.")}(n),e+r[n]*Math.pow(t,o)),0)}}}]);