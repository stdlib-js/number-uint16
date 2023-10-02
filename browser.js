// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var S=String.fromCharCode,A=isNaN,I=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,t,n,a,o,f,s,l,p;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(u(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,A(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function O(r){var e,t,n;if(!F(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=V(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return j.apply(null,t)}var U=Object.prototype,N=U.toString,$=U.__defineGetter__,P=U.__defineSetter__,C=U.__lookupGetter__,G=U.__lookupSetter__,R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};function W(r,e,t){R(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}function L(r){return"number"==typeof r}function Z(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function H(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Z(i):Z(i)+r,n&&(r="-"+r)),r}var M=String.prototype.toLowerCase,X=String.prototype.toUpperCase;function Y(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!L(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=H(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=H(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===X.call(r.specifier)?X.call(t):M.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function q(r){return"string"==typeof r}var z=Math.abs,B=String.prototype.toLowerCase,D=String.prototype.toUpperCase,J=String.prototype.replace,K=/e\+(\d)$/,Q=/e-(\d)$/,rr=/^(\d+)$/,er=/^(\d+)e/,tr=/\.0$/,nr=/\.0*e/,ir=/(\..*[^0])0*e/;function ar(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!L(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":z(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=J.call(t,ir,"$1e"),t=J.call(t,nr,"e"),t=J.call(t,tr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=J.call(t,K,"e+0$1"),t=J.call(t,Q,"e-0$1"),r.alternate&&(t=J.call(t,rr,"$1."),t=J.call(t,er,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===D.call(r.specifier)?D.call(t):B.call(t)}function or(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function cr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+or(n):or(n)+r}var ur=String.fromCharCode,fr=isNaN,sr=Array.isArray;function lr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function pr(r){var e,t,n,i,a,o,c,u,f;if(!sr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(q(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=lr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,fr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,fr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Y(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!fr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=fr(a)?String(n.arg):ur(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=ar(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=H(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=cr(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var gr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function dr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function hr(r){var e,t,n,i;for(t=[],i=0,n=gr.exec(r);n;)(e=r.slice(i,gr.lastIndex-n[0].length)).length&&t.push(e),t.push(dr(n)),i=gr.lastIndex,n=gr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function yr(r){return"string"==typeof r}function vr(r){var e,t,n;if(!yr(r))throw new TypeError(vr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=hr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return pr.apply(null,t)}function wr(r){return r!=r}var br=Math.floor;function mr(r){return br(r)===r}function _r(r){return mr(r/2)}function Er(r){return _r(r>0?r-1:r+1)}var Sr=Number.POSITIVE_INFINITY,Ar=Number.NEGATIVE_INFINITY;function Ir(r){return r===Sr||r===Ar}var xr=Math.sqrt;function jr(r){return Math.abs(r)}var kr="function"==typeof Object.defineProperty?Object.defineProperty:null,Tr=Object.defineProperty,Vr=Object.prototype,Fr=Vr.toString,Or=Vr.__defineGetter__,Ur=Vr.__defineSetter__,Nr=Vr.__lookupGetter__,$r=Vr.__lookupSetter__,Pr=function(){try{return kr({},"x",{}),!0}catch(r){return!1}}()?Tr:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Fr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===Fr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(Nr.call(r,e)||$r.call(r,e)?(n=r.__proto__,r.__proto__=Vr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Or&&Or.call(r,e,t.get),o&&Ur&&Ur.call(r,e,t.set),r};function Cr(r,e,t){Pr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Gr(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var Rr,Wr=Gr(),Lr=Object.prototype.toString,Zr=Object.prototype.hasOwnProperty,Hr="function"==typeof Symbol?Symbol.toStringTag:"",Mr=Wr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return Lr.call(r);t=r[Hr],a=Hr,e=null!=(i=r)&&Zr.call(i,a);try{r[Hr]=void 0}catch(e){return Lr.call(r)}return n=Lr.call(r),e?r[Hr]=t:delete r[Hr],n}:function(r){return Lr.call(r)},Xr="function"==typeof Uint32Array,Yr="function"==typeof Uint32Array?Uint32Array:null,qr="function"==typeof Uint32Array?Uint32Array:void 0;Rr=function(){var r,e,t;if("function"!=typeof Yr)return!1;try{e=new Yr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Xr&&t instanceof Uint32Array||"[object Uint32Array]"===Mr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var zr,Br=Rr,Dr="function"==typeof Float64Array,Jr="function"==typeof Float64Array?Float64Array:null,Kr="function"==typeof Float64Array?Float64Array:void 0;zr=function(){var r,e,t;if("function"!=typeof Jr)return!1;try{e=new Jr([1,3.14,-3.14,NaN]),t=e,r=(Dr&&t instanceof Float64Array||"[object Float64Array]"===Mr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Kr:function(){throw new Error("not implemented")};var Qr,re=zr,ee="function"==typeof Uint8Array,te="function"==typeof Uint8Array?Uint8Array:null,ne="function"==typeof Uint8Array?Uint8Array:void 0;Qr=function(){var r,e,t;if("function"!=typeof te)return!1;try{e=new te(e=[1,3.14,-3.14,256,257]),t=e,r=(ee&&t instanceof Uint8Array||"[object Uint8Array]"===Mr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ne:function(){throw new Error("not implemented")};var ie,ae=Qr,oe="function"==typeof Uint16Array,ce="function"==typeof Uint16Array?Uint16Array:null,ue="function"==typeof Uint16Array?Uint16Array:void 0;ie=function(){var r,e,t;if("function"!=typeof ce)return!1;try{e=new ce(e=[1,3.14,-3.14,65536,65537]),t=e,r=(oe&&t instanceof Uint16Array||"[object Uint16Array]"===Mr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ue:function(){throw new Error("not implemented")};var fe,se={uint16:ie,uint8:ae};(fe=new se.uint16(1))[0]=4660;var le,pe,ge=52===new se.uint8(fe.buffer)[0];!0===ge?(le=1,pe=0):(le=0,pe=1);var de={HIGH:le,LOW:pe},he=new re(1),ye=new Br(he.buffer),ve=de.HIGH,we=de.LOW;function be(r,e,t,n){return he[0]=r,e[n]=ye[ve],e[n+t]=ye[we],e}function me(r){return be(r,[0,0],1,0)}Cr(me,"assign",be);var _e=!0===ge?0:1,Ee=new re(1),Se=new Br(Ee.buffer);function Ae(r,e){return Ee[0]=r,Se[_e]=e>>>0,Ee[0]}function Ie(r){return 0|r}var xe,je,ke=2147483647,Te=!0===ge?1:0,Ve=new re(1),Fe=new Br(Ve.buffer);function Oe(r){return Ve[0]=r,Fe[Te]}!0===ge?(xe=1,je=0):(xe=0,je=1);var Ue={HIGH:xe,LOW:je},Ne=new re(1),$e=new Br(Ne.buffer),Pe=Ue.HIGH,Ce=Ue.LOW;function Ge(r,e){return $e[Pe]=r,$e[Ce]=e,Ne[0]}var Re=[0,0];function We(r,e){var t,n;return me.assign(r,Re,1,0),t=Re[0],t&=ke,n=Oe(e),Ge(t|=n&=2147483648,Re[1])}var Le=!0===ge?1:0,Ze=new re(1),He=new Br(Ze.buffer);function Me(r,e){return Ze[0]=r,He[Le]=e>>>0,Ze[0]}var Xe=1023,Ye=1048576,qe=[1,1.5],ze=[0,.5849624872207642],Be=[0,1.350039202129749e-8];function De(r,e,t,n){return wr(r)||Ir(r)?(e[n]=r,e[n+t]=0,e):0!==r&&jr(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}Cr((function(r){return De(r,[0,0],1,0)}),"assign",De);var Je=[0,0],Ke=[0,0];function Qe(r,e){var t,n;return 0===e||0===r||wr(r)||Ir(r)?r:(De(r,Je,1,0),e+=Je[1],e+=function(r){var e=Oe(r);return(e=(2146435072&e)>>>20)-Xe|0}(r=Je[0]),e<-1074?We(0,r):e>1023?r<0?Ar:Sr:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,me.assign(r,Ke,1,0),t=Ke[0],t&=2148532223,n*Ge(t|=e+Xe<<20,Ke[1])))}var rt=1048575,et=1048576,tt=1083179008,nt=1e300,it=1e-300,at=[0,0],ot=[0,0];function ct(r,e){var t,n,i,a,o,c,u,f,s,l,p,g,d,h;if(wr(r)||wr(e))return NaN;if(me.assign(e,at,1,0),o=at[0],0===at[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return xr(r);if(-.5===e)return 1/xr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Ir(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:jr(r)<1==(e===Sr)?0:Sr}(r,e)}if(me.assign(r,at,1,0),a=at[0],0===at[1]){if(0===a)return function(r,e){return e===Ar?Sr:e===Sr?0:e>0?Er(e)?r:0:Er(e)?We(Sr,r):Sr}(r,e);if(1===r)return 1;if(-1===r&&Er(e))return-1;if(Ir(r))return r===Ar?ct(-0,-e):e<0?0:Sr}if(r<0&&!1===mr(e))return(r-r)/(r-r);if(i=jr(r),t=a&ke|0,n=o&ke|0,u=o>>>31|0,c=(c=a>>>31|0)&&Er(e)?-1:1,n>1105199104){if(n>1139802112)return function(r,e){return(Oe(r)&ke)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(t<1072693247)return 1===u?c*nt*nt:c*it*it;if(t>1072693248)return 0===u?c*nt*nt:c*it*it;p=function(r,e){var t,n,i,a,o,c;return t=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333))*1.4426950408889634)-((n=Ae(n=(a=1.4426950216293335*i)+o,0))-a),r[0]=n,r[1]=t,r}(ot,i)}else p=function(r,e,t){var n,i,a,o,c,u,f,s,l,p,g,d,h,y,v,w,b,m,_,E,S;return m=0,t<Ye&&(m-=53,t=Oe(e*=9007199254740992)),m+=(t>>20)-Xe|0,t=1072693248|(_=1048575&t|0),_<=235662?E=0:_<767610?E=1:(E=0,m+=1,t-=Ye),o=Ae(i=(w=(e=Me(e,t))-(f=qe[E]))*(b=1/(e+f)),0),n=524288+(t>>1|536870912),u=Me(0,n+=E<<18),v=(a=i*i)*a*(0===(S=a)?.5999999999999946:.5999999999999946+S*(.4285714285785502+S*(.33333332981837743+S*(.272728123808534+S*(.23066074577556175+.20697501780033842*S))))),u=Ae(u=3+(a=o*o)+(v+=(c=b*(w-o*u-o*(e-(u-f))))*(o+i)),0),h=(g=-7.028461650952758e-9*(l=Ae(l=(w=o*u)+(b=c*u+(v-(u-3-a))*i),0))+.9617966939259756*(b-(l-w))+Be[E])-((d=Ae(d=(p=.9617967009544373*l)+g+(s=ze[E])+(y=m),0))-y-s-p),r[0]=d,r[1]=h,r}(ot,i,t);if(g=(l=(e-(f=Ae(e,0)))*p[0]+e*p[1])+(s=f*p[0]),me.assign(g,at,1,0),d=Ie(at[0]),h=Ie(at[1]),d>=tt){if(0!=(d-tt|h))return c*nt*nt;if(l+8008566259537294e-32>g-s)return c*nt*nt}else if((d&ke)>=1083231232){if(0!=(d-3230714880|h))return c*it*it;if(l<=g-s)return c*it*it}return g=function(r,e,t){var n,i,a,o,c,u,f,s,l,p;return l=((s=r&ke|0)>>20)-Xe|0,f=0,s>1071644672&&(i=Me(0,((f=r+(et>>l+1)>>>0)&~(rt>>(l=((f&ke)>>20)-Xe|0)))>>>0),f=(f&rt|et)>>20-l>>>0,r<0&&(f=-f),e-=i),r=Ie(r=Oe(u=1-((u=(a=.6931471824645996*(i=Ae(i=t+e,0)))+(o=.6931471805599453*(t-(i-e))+-1.904654299957768e-9*i))*(n=u-(i=u*u)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((c=o-(u-a))+u*c)-u))),(r+=f<<20>>>0)>>20<=0?Qe(u,f):Me(u,r)}(d,s,l),c*g}function ut(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ft(r){return"number"==typeof r}var st=Gr();function lt(){return st&&"symbol"==typeof Symbol.toStringTag}var pt=Object.prototype.toString,gt=Object.prototype.hasOwnProperty,dt="function"==typeof Symbol?Symbol:void 0,ht="function"==typeof dt?dt.toStringTag:"",yt=lt()?function(r){var e,t,n,i,a;if(null==r)return pt.call(r);t=r[ht],a=ht,e=null!=(i=r)&&gt.call(i,a);try{r[ht]=void 0}catch(e){return pt.call(r)}return n=pt.call(r),e?r[ht]=t:delete r[ht],n}:function(r){return pt.call(r)},vt=Number,wt=vt.prototype.toString,bt=lt();function mt(r){return"object"==typeof r&&(r instanceof vt||(bt?function(r){try{return wt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===yt(r)))}function _t(r){return ft(r)||mt(r)}ut(_t,"isPrimitive",ft),ut(_t,"isObject",mt);var Et=Number.POSITIVE_INFINITY,St=vt.NEGATIVE_INFINITY,At=Math.floor;function It(r){return r<Et&&r>St&&At(e=r)===e;var e}function xt(r){return ft(r)&&It(r)}function jt(r){return mt(r)&&It(r.valueOf())}function kt(r){return xt(r)||jt(r)}function Tt(r){return xt(r)&&r>=0}function Vt(r){return jt(r)&&r.valueOf()>=0}function Ft(r){return Tt(r)||Vt(r)}function Ot(r){return"string"==typeof r}ut(kt,"isPrimitive",xt),ut(kt,"isObject",jt),ut(Ft,"isPrimitive",Tt),ut(Ft,"isObject",Vt);var Ut=String.prototype.valueOf,Nt=lt();function $t(r){return"object"==typeof r&&(r instanceof String||(Nt?function(r){try{return Ut.call(r),!0}catch(r){return!1}}(r):"[object String]"===yt(r)))}function Pt(r){return Ot(r)||$t(r)}ut(Pt,"isPrimitive",Ot),ut(Pt,"isObject",$t);var Ct=9007199254740991,Gt=void 0!==String.prototype.repeat,Rt=String.prototype.repeat,Wt=Gt?function(r,e){return Rt.call(r,e)}:function(r,e){var t,n;if(0===r.length||0===e)return"";for(t="",n=e;1==(1&n)&&(t+=r),0!=(n>>>=1);)r+=r;return t},Lt=Math.ceil;function Zt(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=Lt(n),Wt(t,n)+r)}var Ht={};W(Ht,"fromBinaryStringUint16",(function(r){var e,t;if(16!==r.length)throw new Error(vr("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,r));for(e=0,t=0;t<r.length;t++)"1"===r[t]&&(e+=ct(2,16-t-1));return e})),W(Ht,"toBinaryStringUint16",(function(r){var e;return e=function(r){var e,t,n="";for(e=16;r>0&&e;)n=(t=r/2)===(r=At(t))?"0"+n:"1"+n,e-=1;return n}(r),e=function(r,e,t){var n;if(!Ot(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Tt(e))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!Ot(n=t))throw new TypeError(O("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(e>Ct)throw new RangeError(O("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return Zt(r,e,n)}(e,16,"0"),e}));var Mt={};return W(Mt,"base",Ht),Mt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=e();
//# sourceMappingURL=browser.js.map
