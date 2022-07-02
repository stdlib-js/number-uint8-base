// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,i=e.toString,u=e.__defineGetter__,a=e.__defineSetter__,o=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(o.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,n,t.get),y&&a&&a.call(r,n,t.set),r},l=n()?c:v,y=l;var g=function(r,n,t){y(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})};var m=function(r){return r!=r},p=Math.floor,s=p;var b=function(r){return s(r)===r},w=b;var h=function(r){return w(r/2)};var d=function(r){return h(r>0?r-1:r+1)},A=Number.POSITIVE_INFINITY,_=Number,j=_.NEGATIVE_INFINITY,U=A,O=j;var S=function(r){return r===U||r===O},E=Math.sqrt;var P=function(r){return Math.abs(r)};var T=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var I=function(){return T&&"symbol"==typeof Symbol.toStringTag},F=Object.prototype.toString,N=F;var V=function(r){return N.call(r)},H=Object.prototype.hasOwnProperty;var G=function(r,n){return null!=r&&H.call(r,n)},x="function"==typeof Symbol?Symbol.toStringTag:"",B=G,L=x,M=F;var W=V,R=function(r){var n,t,e;if(null==r)return M.call(r);t=r[L],n=B(r,L);try{r[L]=void 0}catch(n){return M.call(r)}return e=M.call(r),n?r[L]=t:delete r[L],e},k=I()?R:W,q=k,Y="function"==typeof Uint32Array;var C="function"==typeof Uint32Array?Uint32Array:null,z=function(r){return Y&&r instanceof Uint32Array||"[object Uint32Array]"===q(r)},D=C;var J=function(){var r,n;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,4294967296,4294967297]),r=z(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var K="function"==typeof Uint32Array?Uint32Array:void 0,Q=function(){throw new Error("not implemented")},X=J()?K:Q,Z=k,$="function"==typeof Float64Array;var rr="function"==typeof Float64Array?Float64Array:null,nr=function(r){return $&&r instanceof Float64Array||"[object Float64Array]"===Z(r)},tr=rr;var er=function(){var r,n;if("function"!=typeof tr)return!1;try{n=new tr([1,3.14,-3.14,NaN]),r=nr(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var ir="function"==typeof Float64Array?Float64Array:void 0,ur=function(){throw new Error("not implemented")},ar=er()?ir:ur,or=k,fr="function"==typeof Uint8Array;var cr="function"==typeof Uint8Array?Uint8Array:null,vr=function(r){return fr&&r instanceof Uint8Array||"[object Uint8Array]"===or(r)},lr=cr;var yr=function(){var r,n;if("function"!=typeof lr)return!1;try{n=new lr(n=[1,3.14,-3.14,256,257]),r=vr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var gr="function"==typeof Uint8Array?Uint8Array:void 0,mr=function(){throw new Error("not implemented")},pr=yr()?gr:mr,sr=k,br="function"==typeof Uint16Array;var wr="function"==typeof Uint16Array?Uint16Array:null,hr=function(r){return br&&r instanceof Uint16Array||"[object Uint16Array]"===sr(r)},dr=wr;var Ar=function(){var r,n;if("function"!=typeof dr)return!1;try{n=new dr(n=[1,3.14,-3.14,65536,65537]),r=hr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var _r,jr="function"==typeof Uint16Array?Uint16Array:void 0,Ur=function(){throw new Error("not implemented")},Or={uint16:Ar()?jr:Ur,uint8:pr};(_r=new Or.uint16(1))[0]=4660;var Sr,Er,Pr=52===new Or.uint8(_r.buffer)[0];!0===Pr?(Sr=1,Er=0):(Sr=0,Er=1);var Tr=X,Ir={HIGH:Sr,LOW:Er},Fr=new ar(1),Nr=new Tr(Fr.buffer),Vr=Ir.HIGH,Hr=Ir.LOW;var Gr=function(r,n){return Fr[0]=n,r[0]=Nr[Vr],r[1]=Nr[Hr],r};var xr=function(r,n){return 1===arguments.length?Gr([0,0],r):Gr(r,n)},Br=X,Lr=!0===Pr?0:1,Mr=new ar(1),Wr=new Br(Mr.buffer);var Rr=function(r,n){return Mr[0]=r,Wr[Lr]=n>>>0,Mr[0]},kr=Rr;var qr=function(r){return 0|r},Yr=X,Cr=!0===Pr?1:0,zr=new ar(1),Dr=new Yr(zr.buffer);var Jr,Kr,Qr=function(r){return zr[0]=r,Dr[Cr]};!0===Pr?(Jr=1,Kr=0):(Jr=0,Kr=1);var Xr=X,Zr={HIGH:Jr,LOW:Kr},$r=new ar(1),rn=new Xr($r.buffer),nn=Zr.HIGH,tn=Zr.LOW;var en=function(r,n){return rn[nn]=r,rn[tn]=n,$r[0]},un=en,an=xr,on=Qr,fn=un,cn=[0,0];var vn=function(r,n){var t,e;return an(cn,r),t=cn[0],t&=2147483647,e=on(n),fn(t|=e&=2147483648,cn[1])},ln=d,yn=vn,gn=j,mn=A;var pn=function(r,n){return n===gn?mn:n===mn?0:n>0?ln(n)?r:0:ln(n)?yn(mn,r):mn},sn=Qr;var bn=function(r,n){return(2147483647&sn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},wn=P,hn=A;var dn=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:wn(r)<1==(n===hn)?0:hn},An=X,_n=!0===Pr?1:0,jn=new ar(1),Un=new An(jn.buffer);var On=function(r,n){return jn[0]=r,Un[_n]=n>>>0,jn[0]};var Sn=Qr,En=kr,Pn=On,Tn=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},In=[1,1.5],Fn=[0,.5849624872207642],Nn=[0,1.350039202129749e-8];var Vn=kr,Hn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Gn=S,xn=m,Bn=P;var Ln=function(r,n){return xn(n)||Gn(n)?(r[0]=n,r[1]=0,r):0!==n&&Bn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Mn=Qr;var Wn=function(r){var n=Mn(r);return(n=(2146435072&n)>>>20)-1023|0},Rn=A,kn=j,qn=m,Yn=S,Cn=vn,zn=function(r,n){return 1===arguments.length?Ln([0,0],r):Ln(r,n)},Dn=Wn,Jn=xr,Kn=un,Qn=[0,0],Xn=[0,0];var Zn=function(r,n){var t,e;return 0===n||0===r||qn(r)||Yn(r)?r:(zn(Qn,r),n+=Qn[1],(n+=Dn(r=Qn[0]))<-1074?Cn(0,r):n>1023?r<0?kn:Rn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Jn(Xn,r),t=Xn[0],t&=2148532223,e*Kn(t|=n+1023<<20,Xn[1])))};var $n=Qr,rt=On,nt=kr,tt=qr,et=Zn,it=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var ut=m,at=d,ot=S,ft=b,ct=E,vt=P,lt=xr,yt=kr,gt=qr,mt=j,pt=A,st=pn,bt=bn,wt=dn,ht=function(r,n,t){var e,i,u,a,o,f,c,v,l,y,g,m,p,s,b,w,h,d,A,_;return d=0,t<1048576&&(d-=53,t=Sn(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(A=1048575&t|0),A<=235662?_=0:A<767610?_=1:(_=0,d+=1,t-=1048576),e=524288+(t>>1|536870912),o=(h=1/((n=Pn(n,t))+(c=In[_])))*((w=n-c)-(a=En(i=w*h,0))*(f=Pn(0,e+=_<<18))-a*(n-(f-c))),b=(u=i*i)*u*Tn(u),f=En(f=3+(u=a*a)+(b+=o*(a+i)),0),p=(g=-7.028461650952758e-9*(l=En(l=(w=a*f)+(h=o*f+(b-(f-3-u))*i),0))+.9617966939259756*(h-(l-w))+Nn[_])-((m=En(m=(y=.9617967009544373*l)+g+(v=Fn[_])+(s=d),0))-s-v-y),r[0]=m,r[1]=p,r},dt=function(r,n){var t,e,i,u,a;return t=(a=1.9259629911266175e-8*(i=n-1)-1.4426950408889634*(i*i*Hn(i)))-((e=Vn(e=(u=1.4426950216293335*i)+a,0))-u),r[0]=e,r[1]=t,r},At=function(r,n,t){var e,i,u,a,o,f,c,v,l,y;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=u=rt(0,e)),f=(o=.6931471805599453*(t-((u=nt(u=t+n,0))-n))+-1.904654299957768e-9*u)-((c=(a=.6931471824645996*u)+o)-a),i=c-(u=c*c)*it(u),r=$n(c=1-(c*i/(i-2)-(f+c*f)-c)),r=tt(r),c=(r+=v<<20>>>0)>>20<=0?et(c,v):rt(c,r)},_t=1e300,jt=1e-300,Ut=[0,0],Ot=[0,0];var St=function r(n,t){var e,i,u,a,o,f,c,v,l,y,g,m,p,s;if(ut(n)||ut(t))return NaN;if(lt(Ut,t),o=Ut[0],0===Ut[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return ct(n);if(-.5===t)return 1/ct(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(ot(t))return wt(n,t)}if(lt(Ut,n),a=Ut[0],0===Ut[1]){if(0===a)return st(n,t);if(1===n)return 1;if(-1===n&&at(t))return-1;if(ot(n))return n===mt?r(-0,-t):t<0?0:pt}if(n<0&&!1===ft(t))return(n-n)/(n-n);if(u=vt(n),e=2147483647&a|0,i=2147483647&o|0,c=o>>>31|0,f=(f=a>>>31|0)&&at(t)?-1:1,i>1105199104){if(i>1139802112)return bt(n,t);if(e<1072693247)return 1===c?f*_t*_t:f*jt*jt;if(e>1072693248)return 0===c?f*_t*_t:f*jt*jt;g=dt(Ot,u)}else g=ht(Ot,u,e);if(y=(t-(v=yt(t,0)))*g[0]+t*g[1],l=v*g[0],lt(Ut,m=y+l),p=gt(Ut[0]),s=gt(Ut[1]),p>=1083179008){if(0!=(p-1083179008|s))return f*_t*_t;if(y+8008566259537294e-32>m-l)return f*_t*_t}else if((2147483647&p)>=1083231232){if(0!=(p-3230714880|s))return f*jt*jt;if(y<=m-l)return f*jt*jt}return f*(m=At(p,l,y))},Et=St;var Pt=function(r){var n,t;if(8!==r.length)throw new Error("invalid argument. Input string must have a length equal to 8. Value: `"+r+"`.");for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=Et(2,8-t-1));return n},Tt=l;var It=function(r,n,t){Tt(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var Ft=function(r){return"number"==typeof r},Nt=_.prototype.toString;var Vt=k,Ht=_,Gt=function(r){try{return Nt.call(r),!0}catch(r){return!1}},xt=I();var Bt=function(r){return"object"==typeof r&&(r instanceof Ht||(xt?Gt(r):"[object Number]"===Vt(r)))},Lt=Ft,Mt=Bt;var Wt=It,Rt=function(r){return Lt(r)||Mt(r)},kt=Bt;Wt(Rt,"isPrimitive",Ft),Wt(Rt,"isObject",kt);var qt=A,Yt=j,Ct=b;var zt=function(r){return r<qt&&r>Yt&&Ct(r)},Dt=Rt.isPrimitive,Jt=zt;var Kt=function(r){return Dt(r)&&Jt(r)},Qt=Rt.isObject,Xt=zt;var Zt=function(r){return Qt(r)&&Xt(r.valueOf())},$t=Kt,re=Zt;var ne=It,te=function(r){return $t(r)||re(r)},ee=Zt;ne(te,"isPrimitive",Kt),ne(te,"isObject",ee);var ie=te.isPrimitive;var ue=function(r){return ie(r)&&r>=0},ae=te.isObject;var oe=function(r){return ae(r)&&r.valueOf()>=0},fe=ue,ce=oe;var ve=It,le=function(r){return fe(r)||ce(r)},ye=oe;ve(le,"isPrimitive",ue),ve(le,"isObject",ye);var ge=le;var me=function(r){return"string"==typeof r},pe=String.prototype.valueOf;var se=k,be=function(r){try{return pe.call(r),!0}catch(r){return!1}},we=I();var he=function(r){return"object"==typeof r&&(r instanceof String||(we?be(r):"[object String]"===se(r)))},de=me,Ae=he;var _e=It,je=function(r){return de(r)||Ae(r)},Ue=he;_e(je,"isPrimitive",me),_e(je,"isObject",Ue);var Oe=je,Se=ge.isPrimitive,Ee=Oe.isPrimitive;var Pe=function(r,n){var t,e;if(!Ee(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Se(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(0===r.length||0===n)return"";if(r.length*n>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",e=n;1==(1&e)&&(t+=r),0!==(e>>>=1);)r+=r;return t},Te=Math.ceil,Ie=ge.isPrimitive,Fe=Oe.isPrimitive,Ne=Pe,Ve=Te;var He=p;var Ge=function(r,n,t){var e,i;if(!Fe(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Ie(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(arguments.length>2){if(!Fe(i=t))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+i+"`.");if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(n>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(e=(n-r.length)/i.length)<=0?r:(e=Ve(e),Ne(i,e)+r)},xe=function(r){var n,t,e="";for(n=8;r>0&&n;)e=(t=r/2)===(r=He(t))?"0"+e:"1"+e,n-=1;return e};var Be=function(r){var n;return n=xe(r),n=Ge(n,8,"0")},Le={};g(Le,"fromBinaryStringUint8",Pt),g(Le,"toBinaryStringUint8",Be);export{Le as default,Pt as fromBinaryStringUint8,Be as toBinaryStringUint8};
//# sourceMappingURL=mod.js.map
