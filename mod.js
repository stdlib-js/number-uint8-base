// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,d=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,d,"e"),t=l.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,g,"e-0$1"),r.alternate&&(t=l.call(t,v,"$1."),t=l.call(t,y,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,S=Array.isArray;function E(r){return r!=r}function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,c,f,s,l,p,g,v,y;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)c+=t;else{if(e=void 0!==t.precision,!(t=_(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,E(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,g=t.width,v=t.padRight,y=void 0,(y=g-p.length)<0?p:p=v?p+m(y):m(y)+p)),c+=t.arg||"",f+=1}return c}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function O(r){var e,n,t,i;for(n=[],i=0,t=j.exec(r);t;)(e=r.slice(i,j.lastIndex-t[0].length)).length&&n.push(e),n.push(I(t)),i=j.lastIndex,t=j.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function x(r){var e,n;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[O(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,T=F.toString,k=F.__defineGetter__,V=F.__defineSetter__,N=F.__lookupGetter__,P=F.__lookupSetter__;var $=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===T.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(N.call(r,e)||P.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&k&&k.call(r,e,n.get),o&&V&&V.call(r,e,n.set),r};function G(r,e,n){$(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function H(r){return r!=r}var R=Math.floor;function W(r){return R(r)===r}function C(r){return W(r/2)}function L(r){return C(r>0?r-1:r+1)}var M=Number.POSITIVE_INFINITY,Z=Number,B=Z.NEGATIVE_INFINITY;function q(r){return r===M||r===B}var X=Math.sqrt;function Y(r){return Math.abs(r)}function z(r,e,n){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return D&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;var rr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof rr?rr.toStringTag:"";var nr=J()?function(r){var e,n,t,i,a;if(null==r)return K.call(r);n=r[er],a=er,e=null!=(i=r)&&Q.call(i,a);try{r[er]=void 0}catch(e){return K.call(r)}return t=K.call(r),e?r[er]=n:delete r[er],t}:function(r){return K.call(r)},tr="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var ar,or="function"==typeof Uint32Array?Uint32Array:void 0;ar=function(){var r,e,n;if("function"!=typeof ir)return!1;try{e=new ir(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(tr&&n instanceof Uint32Array||"[object Uint32Array]"===nr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur=ar,cr="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var sr,lr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,e,n;if("function"!=typeof fr)return!1;try{e=new fr([1,3.14,-3.14,NaN]),n=e,r=(cr&&n instanceof Float64Array||"[object Float64Array]"===nr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr=sr,gr="function"==typeof Uint8Array;var vr="function"==typeof Uint8Array?Uint8Array:null;var yr,hr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,e,n;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,256,257]),n=e,r=(gr&&n instanceof Uint8Array||"[object Uint8Array]"===nr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var dr=yr,wr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null;var mr,Ar="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,e,n;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,65536,65537]),n=e,r=(wr&&n instanceof Uint16Array||"[object Uint16Array]"===nr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var Sr,Er={uint16:mr,uint8:dr};(Sr=new Er.uint16(1))[0]=4660;var _r,Ur,jr=52===new Er.uint8(Sr.buffer)[0];!0===jr?(_r=1,Ur=0):(_r=0,Ur=1);var Ir={HIGH:_r,LOW:Ur},Or=new pr(1),xr=new ur(Or.buffer),Fr=Ir.HIGH,Tr=Ir.LOW;function kr(r,e,n,t){return Or[0]=r,e[t]=xr[Fr],e[t+n]=xr[Tr],e}function Vr(r){return kr(r,[0,0],1,0)}z(Vr,"assign",kr);var Nr=!0===jr?0:1,Pr=new pr(1),$r=new ur(Pr.buffer);function Gr(r,e){return Pr[0]=r,$r[Nr]=e>>>0,Pr[0]}function Hr(r){return 0|r}var Rr,Wr,Cr=2147483647,Lr=2147483648,Mr=!0===jr?1:0,Zr=new pr(1),Br=new ur(Zr.buffer);function qr(r){return Zr[0]=r,Br[Mr]}!0===jr?(Rr=1,Wr=0):(Rr=0,Wr=1);var Xr={HIGH:Rr,LOW:Wr},Yr=new pr(1),zr=new ur(Yr.buffer),Dr=Xr.HIGH,Jr=Xr.LOW;function Kr(r,e){return zr[Dr]=r,zr[Jr]=e,Yr[0]}var Qr=[0,0];function re(r,e){var n,t;return Vr.assign(r,Qr,1,0),n=Qr[0],n&=Cr,t=qr(e),Kr(n|=t&=Lr,Qr[1])}var ee=1072693247,ne=1e300,te=1e-300;var ie=!0===jr?1:0,ae=new pr(1),oe=new ur(ae.buffer);function ue(r,e){return ae[0]=r,oe[ie]=e>>>0,ae[0]}var ce=1023;var fe=1048575,se=1048576,le=1072693248,pe=536870912,ge=524288,ve=20,ye=9007199254740992,he=.9617966939259756,de=.9617967009544373,we=-7.028461650952758e-9,be=[1,1.5],me=[0,.5849624872207642],Ae=[0,1.350039202129749e-8];var Se=1.4426950408889634,Ee=1.4426950216293335,_e=1.9259629911266175e-8;var Ue=1023,je=-1023,Ie=-1074,Oe=22250738585072014e-324,xe=4503599627370496;function Fe(r,e,n,t){return H(r)||q(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Y(r)<Oe?(e[t]=r*xe,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}z((function(r){return Fe(r,[0,0],1,0)}),"assign",Fe);var Te=2146435072;var ke=2220446049250313e-31,Ve=2148532223,Ne=[0,0],Pe=[0,0];function $e(r,e){var n,t;return 0===e||0===r||H(r)||q(r)?r:(Fe(r,Ne,1,0),r=Ne[0],e+=Ne[1],e+=function(r){var e=qr(r);return(e=(e&Te)>>>20)-ce|0}(r),e<Ie?re(0,r):e>Ue?r<0?B:M:(e<=je?(e+=52,t=ke):t=1,Vr.assign(r,Pe,1,0),n=Pe[0],n&=Ve,t*Kr(n|=e+ce<<20,Pe[1])))}var Ge=.6931471805599453,He=1048575;var Re=1048576,We=1071644672,Ce=20,Le=.6931471824645996,Me=-1.904654299957768e-9;var Ze=1072693247,Be=1105199104,qe=1139802112,Xe=1083179008,Ye=1072693248,ze=1083231232,De=3230714880,Je=31,Ke=1e300,Qe=1e-300,rn=8008566259537294e-32,en=[0,0],nn=[0,0];function tn(r,e){var n,t,i,a,o,u,c,f,s,l,p,g,v,y;if(H(r)||H(e))return NaN;if(Vr.assign(e,en,1,0),o=en[0],0===en[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return X(r);if(-.5===e)return 1/X(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(q(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Y(r)<1==(e===M)?0:M}(r,e)}if(Vr.assign(r,en,1,0),a=en[0],0===en[1]){if(0===a)return function(r,e){return e===B?M:e===M?0:e>0?L(e)?r:0:L(e)?re(M,r):M}(r,e);if(1===r)return 1;if(-1===r&&L(e))return-1;if(q(r))return r===B?tn(-0,-e):e<0?0:M}if(r<0&&!1===W(e))return(r-r)/(r-r);if(i=Y(r),n=a&Cr|0,t=o&Cr|0,c=o>>>Je|0,u=(u=a>>>Je|0)&&L(e)?-1:1,t>Be){if(t>qe)return function(r,e){return(qr(r)&Cr)<=ee?e<0?ne*ne:te*te:e>0?ne*ne:te*te}(r,e);if(n<Ze)return 1===c?u*Ke*Ke:u*Qe*Qe;if(n>Ye)return 0===c?u*Ke*Ke:u*Qe*Qe;p=function(r,e){var n,t,i,a,o,u,c;return a=(i=e-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),n=(u=i*_e-a*Se)-((t=Gr(t=(o=Ee*i)+u,0))-o),r[0]=t,r[1]=n,r}(nn,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,g,v,y,h,d,w,b,m,A,S,E;return m=0,n<se&&(m-=53,n=qr(e*=ye)),m+=(n>>ve)-ce|0,n=(A=n&fe|0)|le|0,A<=235662?S=0:A<767610?S=1:(S=0,m+=1,n-=se),o=Gr(i=(w=(e=ue(e,n))-(f=be[S]))*(b=1/(e+f)),0),t=(n>>1|pe)+ge,c=ue(0,t+=S<<18),d=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Gr(c=3+(a=o*o)+(d+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),l=Gr(l=(w=o*c)+(b=u*c+(d-(c-3-a))*i),0),p=de*l,y=(g=we*l+(b-(l-w))*he+Ae[S])-((v=Gr(v=p+g+(s=me[S])+(h=m),0))-h-s-p),r[0]=v,r[1]=y,r}(nn,i,n);if(g=(l=(e-(f=Gr(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Vr.assign(g,en,1,0),v=Hr(en[0]),y=Hr(en[1]),v>=Xe){if(0!=(v-Xe|y))return u*Ke*Ke;if(l+rn>g-s)return u*Ke*Ke}else if((v&Cr)>=ze){if(0!=(v-De|y))return u*Qe*Qe;if(l<=g-s)return u*Qe*Qe}return g=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&Cr|0)>>Ce)-ce|0,f=0,s>We&&(i=ue(0,((f=r+(Re>>l+1)>>>0)&~(He>>(l=((f&Cr)>>Ce)-ce|0)))>>>0),f=(f&He|Re)>>Ce-l>>>0,r<0&&(f=-f),e-=i),r=Hr(r=qr(c=1-((c=(a=(i=Gr(i=n+e,0))*Le)+(o=(n-(i-e))*Ge+i*Me))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<Ce>>>0)>>Ce<=0?$e(c,f):ue(c,r)}(v,s,l),u*g}function an(r){var e,n;if(8!==r.length)throw new Error(x("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,r));for(e=0,n=0;n<r.length;n++)"1"===r[n]&&(e+=tn(2,8-n-1));return e}function on(r){return"number"==typeof r}var un=Z.prototype.toString;var cn=J();function fn(r){return"object"==typeof r&&(r instanceof Z||(cn?function(r){try{return un.call(r),!0}catch(r){return!1}}(r):"[object Number]"===nr(r)))}function sn(r){return on(r)||fn(r)}function ln(r){return r<M&&r>B&&W(r)}function pn(r){return on(r)&&ln(r)}function gn(r){return fn(r)&&ln(r.valueOf())}function vn(r){return pn(r)||gn(r)}function yn(r){return pn(r)&&r>=0}function hn(r){return gn(r)&&r.valueOf()>=0}function dn(r){return yn(r)||hn(r)}function wn(r){return"string"==typeof r}z(sn,"isPrimitive",on),z(sn,"isObject",fn),z(vn,"isPrimitive",pn),z(vn,"isObject",gn),z(dn,"isPrimitive",yn),z(dn,"isObject",hn);var bn=String.prototype.valueOf;var mn=J();function An(r){return"object"==typeof r&&(r instanceof String||(mn?function(r){try{return bn.call(r),!0}catch(r){return!1}}(r):"[object String]"===nr(r)))}function Sn(r){return wn(r)||An(r)}z(Sn,"isPrimitive",wn),z(Sn,"isObject",An);var En=9007199254740991,_n=void 0!==String.prototype.repeat;var Un=String.prototype.repeat;var jn=_n?function(r,e){return Un.call(r,e)}:function(r,e){var n,t;if(0===r.length||0===e)return"";for(n="",t=e;1==(1&t)&&(n+=r),0!=(t>>>=1);)r+=r;return n},In=Math.ceil;function On(r,e,n){var t;if(!wn(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));if(!yn(e))throw new TypeError(x("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!wn(t=n))throw new TypeError(x("invalid argument. Third argument must be a string. Value: `%s`.",t));if(0===t.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else t=" ";if(e>En)throw new RangeError(x("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return function(r,e,n){var t=(e-r.length)/n.length;return t<=0?r:(t=In(t),jn(n,t)+r)}(r,e,t)}var xn=8;function Fn(r){var e;return e=function(r){var e,n,t="";for(e=xn;r>0&&e;)t=(n=r/2)===(r=R(n))?"0"+t:"1"+t,e-=1;return t}(r),e=On(e,8,"0")}var Tn={};G(Tn,"fromBinaryStringUint8",an),G(Tn,"toBinaryStringUint8",Fn);export{Tn as default,an as fromBinaryStringUint8,Fn as toBinaryStringUint8};
//# sourceMappingURL=mod.js.map
