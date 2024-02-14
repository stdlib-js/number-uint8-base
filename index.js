// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,b,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,v,"$1."),n=p.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function S(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function A(r,t,e){var n=t-r.length;return n<0?r:r=e?r+S(n):S(n)+r}var E=String.fromCharCode,_=isNaN,j=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,e,n,o,a,f,l,s,p;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(o=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,e,n,i;for(e=[],i=0,n=O.exec(r);n;)(t=r.slice(i,O.lastIndex-n[0].length)).length&&e.push(t),e.push(I(n)),i=O.lastIndex,n=O.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function F(r){return"string"==typeof r}function k(r){var t,e;if(!F(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[x(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return U.apply(null,t)}var V=Object.prototype,N=V.toString,P=V.__defineGetter__,$=V.__defineSetter__,G=V.__lookupGetter__,H=V.__lookupSetter__,R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(G.call(r,t)||H.call(r,t)?(n=r.__proto__,r.__proto__=V,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,t,e.get),a&&$&&$.call(r,t,e.set),r};function W(r,t,e){R(r,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}function C(r){return r!=r}var L=Math.floor;function M(r){return L(r)===r}function Z(r){return M(r/2)}function q(r){return Z(r>0?r-1:r+1)}var B=Number.POSITIVE_INFINITY,X=Number,Y=X.NEGATIVE_INFINITY;function z(r){return r===B||r===Y}var D=Math.sqrt;function J(r){return Math.abs(r)}function K(r,t,e){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Q(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var rr=Q(),tr=Object.prototype.toString,er=Object.prototype.hasOwnProperty;function nr(r,t){return null!=r&&er.call(r,t)}var ir,or="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof or?or.toStringTag:"",ur=rr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return tr.call(r);e=r[ar],t=nr(r,ar);try{r[ar]=void 0}catch(t){return tr.call(r)}return n=tr.call(r),t?r[ar]=e:delete r[ar],n}:function(r){return tr.call(r)},cr="function"==typeof Uint32Array,fr="function"==typeof Uint32Array?Uint32Array:null,lr="function"==typeof Uint32Array?Uint32Array:void 0;ir=function(){var r,t,e;if("function"!=typeof fr)return!1;try{t=new fr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(cr&&e instanceof Uint32Array||"[object Uint32Array]"===ur(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var sr,pr=ir,gr="function"==typeof Float64Array,yr="function"==typeof Float64Array?Float64Array:null,vr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,t,e;if("function"!=typeof yr)return!1;try{t=new yr([1,3.14,-3.14,NaN]),e=t,r=(gr&&e instanceof Float64Array||"[object Float64Array]"===ur(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var dr,hr=sr,br="function"==typeof Uint8Array,wr="function"==typeof Uint8Array?Uint8Array:null,mr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,t,e;if("function"!=typeof wr)return!1;try{t=new wr(t=[1,3.14,-3.14,256,257]),e=t,r=(br&&e instanceof Uint8Array||"[object Uint8Array]"===ur(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Sr,Ar=dr,Er="function"==typeof Uint16Array,_r="function"==typeof Uint16Array?Uint16Array:null,jr="function"==typeof Uint16Array?Uint16Array:void 0;Sr=function(){var r,t,e;if("function"!=typeof _r)return!1;try{t=new _r(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Er&&e instanceof Uint16Array||"[object Uint16Array]"===ur(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var Tr,Ur={uint16:Sr,uint8:Ar};(Tr=new Ur.uint16(1))[0]=4660;var Or,Ir,xr=52===new Ur.uint8(Tr.buffer)[0];!0===xr?(Or=1,Ir=0):(Or=0,Ir=1);var Fr={HIGH:Or,LOW:Ir},kr=new hr(1),Vr=new pr(kr.buffer),Nr=Fr.HIGH,Pr=Fr.LOW;function $r(r,t,e,n){return kr[0]=r,t[n]=Vr[Nr],t[n+e]=Vr[Pr],t}function Gr(r){return $r(r,[0,0],1,0)}K(Gr,"assign",$r);var Hr=!0===xr?0:1,Rr=new hr(1),Wr=new pr(Rr.buffer);function Cr(r,t){return Rr[0]=r,Wr[Hr]=t>>>0,Rr[0]}function Lr(r){return 0|r}var Mr,Zr,qr=2147483647,Br=!0===xr?1:0,Xr=new hr(1),Yr=new pr(Xr.buffer);function zr(r){return Xr[0]=r,Yr[Br]}!0===xr?(Mr=1,Zr=0):(Mr=0,Zr=1);var Dr={HIGH:Mr,LOW:Zr},Jr=new hr(1),Kr=new pr(Jr.buffer),Qr=Dr.HIGH,rt=Dr.LOW;function tt(r,t){return Kr[Qr]=r,Kr[rt]=t,Jr[0]}var et=[0,0];function nt(r,t){var e,n;return Gr.assign(r,et,1,0),e=et[0],e&=qr,n=zr(t),tt(e|=n&=2147483648,et[1])}var it=!0===xr?1:0,ot=new hr(1),at=new pr(ot.buffer);function ut(r,t){return ot[0]=r,at[it]=t>>>0,ot[0]}var ct=1023,ft=1048576,lt=[1,1.5],st=[0,.5849624872207642],pt=[0,1.350039202129749e-8];function gt(r,t,e,n){return C(r)||z(r)?(t[n]=r,t[n+e]=0,t):0!==r&&J(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}K((function(r){return gt(r,[0,0],1,0)}),"assign",gt);var yt=[0,0],vt=[0,0];function dt(r,t){var e,n;return 0===t||0===r||C(r)||z(r)?r:(gt(r,yt,1,0),t+=yt[1],t+=function(r){var t=zr(r);return(t=(2146435072&t)>>>20)-ct|0}(r=yt[0]),t<-1074?nt(0,r):t>1023?r<0?Y:B:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,Gr.assign(r,vt,1,0),e=vt[0],e&=2148532223,n*tt(e|=t+ct<<20,vt[1])))}var ht=1048575,bt=1048576,wt=1083179008,mt=1e300,St=1e-300,At=[0,0],Et=[0,0];function _t(r,t){var e,n,i,o,a,u,c,f,l,s,p,g,y,v;if(C(r)||C(t))return NaN;if(Gr.assign(t,At,1,0),a=At[0],0===At[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return D(r);if(-.5===t)return 1/D(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(z(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:J(r)<1==(t===B)?0:B}(r,t)}if(Gr.assign(r,At,1,0),o=At[0],0===At[1]){if(0===o)return function(r,t){return t===Y?B:t===B?0:t>0?q(t)?r:0:q(t)?nt(B,r):B}(r,t);if(1===r)return 1;if(-1===r&&q(t))return-1;if(z(r))return r===Y?_t(-0,-t):t<0?0:B}if(r<0&&!1===M(t))return(r-r)/(r-r);if(i=J(r),e=o&qr|0,n=a&qr|0,c=a>>>31|0,u=(u=o>>>31|0)&&q(t)?-1:1,n>1105199104){if(n>1139802112)return function(r,t){return(zr(r)&qr)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(e<1072693247)return 1===c?u*mt*mt:u*St*St;if(e>1072693248)return 0===c?u*mt*mt:u*St*St;p=function(r,t){var e,n,i,o,a,u;return e=(a=1.9259629911266175e-8*(i=t-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=Cr(n=(o=1.4426950216293335*i)+a,0))-o),r[0]=n,r[1]=e,r}(Et,i)}else p=function(r,t,e){var n,i,o,a,u,c,f,l,s,p,g,y,v,d,h,b,w,m,S,A,E;return m=0,e<ft&&(m-=53,e=zr(t*=9007199254740992)),m+=(e>>20)-ct|0,e=1072693248|(S=1048575&e|0),S<=235662?A=0:S<767610?A=1:(A=0,m+=1,e-=ft),a=Cr(i=(b=(t=ut(t,e))-(f=lt[A]))*(w=1/(t+f)),0),n=524288+(e>>1|536870912),c=ut(0,n+=A<<18),h=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Cr(c=3+(o=a*a)+(h+=(u=w*(b-a*c-a*(t-(c-f))))*(a+i)),0),v=(g=-7.028461650952758e-9*(s=Cr(s=(b=a*c)+(w=u*c+(h-(c-3-o))*i),0))+.9617966939259756*(w-(s-b))+pt[A])-((y=Cr(y=(p=.9617967009544373*s)+g+(l=st[A])+(d=m),0))-d-l-p),r[0]=y,r[1]=v,r}(Et,i,e);if(g=(s=(t-(f=Cr(t,0)))*p[0]+t*p[1])+(l=f*p[0]),Gr.assign(g,At,1,0),y=Lr(At[0]),v=Lr(At[1]),y>=wt){if(0!=(y-wt|v))return u*mt*mt;if(s+8008566259537294e-32>g-l)return u*mt*mt}else if((y&qr)>=1083231232){if(0!=(y-3230714880|v))return u*St*St;if(s<=g-l)return u*St*St}return g=function(r,t,e){var n,i,o,a,u,c,f,l,s,p;return s=((l=r&qr|0)>>20)-ct|0,f=0,l>1071644672&&(i=ut(0,((f=r+(bt>>s+1)>>>0)&~(ht>>(s=((f&qr)>>20)-ct|0)))>>>0),f=(f&ht|bt)>>20-s>>>0,r<0&&(f=-f),t-=i),r=Lr(r=zr(c=1-((c=(o=.6931471824645996*(i=Cr(i=e+t,0)))+(a=.6931471805599453*(e-(i-t))+-1.904654299957768e-9*i))*(n=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?dt(c,f):ut(c,r)}(y,l,s),u*g}function jt(r,t,e){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Tt(r,t,e){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Ut(r,t,e){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Ot(r){return"number"==typeof r}var It=Q();function xt(){return It&&"symbol"==typeof Symbol.toStringTag}var Ft=Object.prototype.toString,kt="function"==typeof Symbol?Symbol:void 0,Vt="function"==typeof kt?kt.toStringTag:"",Nt=xt()?function(r){var t,e,n;if(null==r)return Ft.call(r);e=r[Vt],t=nr(r,Vt);try{r[Vt]=void 0}catch(t){return Ft.call(r)}return n=Ft.call(r),t?r[Vt]=e:delete r[Vt],n}:function(r){return Ft.call(r)},Pt=X.prototype.toString,$t=xt();function Gt(r){return"object"==typeof r&&(r instanceof X||($t?function(r){try{return Pt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Nt(r)))}function Ht(r){return Ot(r)||Gt(r)}function Rt(r){return r<B&&r>Y&&M(r)}function Wt(r){return Ot(r)&&Rt(r)}function Ct(r){return Gt(r)&&Rt(r.valueOf())}function Lt(r){return Wt(r)||Ct(r)}function Mt(r){return Wt(r)&&r>=0}function Zt(r){return Ct(r)&&r.valueOf()>=0}function qt(r){return Mt(r)||Zt(r)}function Bt(r){return"string"==typeof r}Ut(Ht,"isPrimitive",Ot),Ut(Ht,"isObject",Gt),Tt(Lt,"isPrimitive",Wt),Tt(Lt,"isObject",Ct),jt(qt,"isPrimitive",Mt),jt(qt,"isObject",Zt);var Xt=Q();function Yt(){return Xt&&"symbol"==typeof Symbol.toStringTag}var zt=Object.prototype.toString,Dt="function"==typeof Symbol?Symbol:void 0,Jt="function"==typeof Dt?Dt.toStringTag:"",Kt=Yt()?function(r){var t,e,n;if(null==r)return zt.call(r);e=r[Jt],t=nr(r,Jt);try{r[Jt]=void 0}catch(t){return zt.call(r)}return n=zt.call(r),t?r[Jt]=e:delete r[Jt],n}:function(r){return zt.call(r)},Qt=String.prototype.valueOf,re=Yt();function te(r){return"object"==typeof r&&(r instanceof String||(re?function(r){try{return Qt.call(r),!0}catch(r){return!1}}(r):"[object String]"===Kt(r)))}function ee(r){return Bt(r)||te(r)}jt(ee,"isPrimitive",Bt),jt(ee,"isObject",te);var ne=9007199254740991,ie=void 0!==String.prototype.repeat,oe=String.prototype.repeat,ae=ie?function(r,t){return oe.call(r,t)}:function(r,t){var e,n;if(0===r.length||0===t)return"";for(e="",n=t;1==(1&n)&&(e+=r),0!=(n>>>=1);)r+=r;return e},ue=Math.ceil;function ce(r,t,e){var n=(t-r.length)/e.length;return n<=0?r:(n=ue(n),ae(e,n)+r)}var fe=Math.floor,le={};return W(le,"fromBinaryStringUint8",(function(r){var t,e;if(8!==r.length)throw new Error(k("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,r));for(t=0,e=0;e<r.length;e++)"1"===r[e]&&(t+=_t(2,8-e-1));return t})),W(le,"toBinaryStringUint8",(function(r){var t;return t=function(r){var t,e,n="";for(t=8;r>0&&t;)n=(e=r/2)===(r=fe(e))?"0"+n:"1"+n,t-=1;return n}(r),t=function(r,t,e){var n;if(!Bt(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Mt(t))throw new TypeError(k("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!Bt(n=e))throw new TypeError(k("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(t>ne)throw new RangeError(k("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return ce(r,t,n)}(t,8,"0"),t})),le},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=t();
//# sourceMappingURL=index.js.map
