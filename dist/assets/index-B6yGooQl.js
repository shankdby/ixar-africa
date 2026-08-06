(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Od(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ks={exports:{}},Ai={},qs={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vr=Symbol.for("react.element"),Ud=Symbol.for("react.portal"),Bd=Symbol.for("react.fragment"),$d=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),Wd=Symbol.for("react.provider"),Vd=Symbol.for("react.context"),Qd=Symbol.for("react.forward_ref"),Gd=Symbol.for("react.suspense"),Kd=Symbol.for("react.memo"),qd=Symbol.for("react.lazy"),zo=Symbol.iterator;function Xd(e){return e===null||typeof e!="object"?null:(e=zo&&e[zo]||e["@@iterator"],typeof e=="function"?e:null)}var Xs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ys=Object.assign,Js={};function Cn(e,t,n){this.props=e,this.context=t,this.refs=Js,this.updater=n||Xs}Cn.prototype.isReactComponent={};Cn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zs(){}Zs.prototype=Cn.prototype;function Ta(e,t,n){this.props=e,this.context=t,this.refs=Js,this.updater=n||Xs}var Fa=Ta.prototype=new Zs;Fa.constructor=Ta;Ys(Fa,Cn.prototype);Fa.isPureReactComponent=!0;var Ao=Array.isArray,eu=Object.prototype.hasOwnProperty,Pa={current:null},tu={key:!0,ref:!0,__self:!0,__source:!0};function nu(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)eu.call(t,r)&&!tu.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:vr,type:e,key:l,ref:o,props:i,_owner:Pa.current}}function Yd(e,t){return{$$typeof:vr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function za(e){return typeof e=="object"&&e!==null&&e.$$typeof===vr}function Jd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bo=/\/+/g;function il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jd(""+e.key):t.toString(36)}function Qr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case vr:case Ud:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+il(o,0):r,Ao(i)?(n="",e!=null&&(n=e.replace(bo,"$&/")+"/"),Qr(i,t,n,"",function(c){return c})):i!=null&&(za(i)&&(i=Yd(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bo,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ao(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+il(l,s);o+=Qr(l,t,n,u,i)}else if(u=Xd(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+il(l,s++),o+=Qr(l,t,n,u,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Tr(e,t,n){if(e==null)return e;var r=[],i=0;return Qr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Zd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Gr={transition:null},ef={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Gr,ReactCurrentOwner:Pa};function ru(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:Tr,forEach:function(e,t,n){Tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tr(e,function(){t++}),t},toArray:function(e){return Tr(e,function(t){return t})||[]},only:function(e){if(!za(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=Cn;b.Fragment=Bd;b.Profiler=Hd;b.PureComponent=Ta;b.StrictMode=$d;b.Suspense=Gd;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ef;b.act=ru;b.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ys({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Pa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)eu.call(t,u)&&!tu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:vr,type:e.type,key:i,ref:l,props:r,_owner:o}};b.createContext=function(e){return e={$$typeof:Vd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wd,_context:e},e.Consumer=e};b.createElement=nu;b.createFactory=function(e){var t=nu.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:Qd,render:e}};b.isValidElement=za;b.lazy=function(e){return{$$typeof:qd,_payload:{_status:-1,_result:e},_init:Zd}};b.memo=function(e,t){return{$$typeof:Kd,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=Gr.transition;Gr.transition={};try{e()}finally{Gr.transition=t}};b.unstable_act=ru;b.useCallback=function(e,t){return fe.current.useCallback(e,t)};b.useContext=function(e){return fe.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};b.useEffect=function(e,t){return fe.current.useEffect(e,t)};b.useId=function(){return fe.current.useId()};b.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};b.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return fe.current.useMemo(e,t)};b.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};b.useRef=function(e){return fe.current.useRef(e)};b.useState=function(e){return fe.current.useState(e)};b.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};b.useTransition=function(){return fe.current.useTransition()};b.version="18.3.1";qs.exports=b;var v=qs.exports;const iu=Od(v);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf=v,nf=Symbol.for("react.element"),rf=Symbol.for("react.fragment"),lf=Object.prototype.hasOwnProperty,af=tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,of={key:!0,ref:!0,__self:!0,__source:!0};function lu(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)lf.call(t,r)&&!of.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:nf,type:e,key:l,ref:o,props:i,_owner:af.current}}Ai.Fragment=rf;Ai.jsx=lu;Ai.jsxs=lu;Ks.exports=Ai;var a=Ks.exports,bl={},au={exports:{}},Ne={},ou={exports:{}},su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,P){var A=T.length;T.push(P);e:for(;0<A;){var K=A-1>>>1,Z=T[K];if(0<i(Z,P))T[K]=P,T[A]=Z,A=K;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var P=T[0],A=T.pop();if(A!==P){T[0]=A;e:for(var K=0,Z=T.length,Er=Z>>>1;K<Er;){var It=2*(K+1)-1,rl=T[It],Dt=It+1,Rr=T[Dt];if(0>i(rl,A))Dt<Z&&0>i(Rr,rl)?(T[K]=Rr,T[Dt]=A,K=Dt):(T[K]=rl,T[It]=A,K=It);else if(Dt<Z&&0>i(Rr,A))T[K]=Rr,T[Dt]=A,K=Dt;else break e}}return P}function i(T,P){var A=T.sortIndex-P.sortIndex;return A!==0?A:T.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],c=[],h=1,p=null,m=3,y=!1,w=!1,x=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=T)r(c),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(c)}}function k(T){if(x=!1,g(T),!w)if(n(u)!==null)w=!0,tl(S);else{var P=n(c);P!==null&&nl(k,P.startTime-T)}}function S(T,P){w=!1,x&&(x=!1,f(F),F=-1),y=!0;var A=m;try{for(g(P),p=n(u);p!==null&&(!(p.expirationTime>P)||T&&!xe());){var K=p.callback;if(typeof K=="function"){p.callback=null,m=p.priorityLevel;var Z=K(p.expirationTime<=P);P=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(u)&&r(u),g(P)}else r(u);p=n(u)}if(p!==null)var Er=!0;else{var It=n(c);It!==null&&nl(k,It.startTime-P),Er=!1}return Er}finally{p=null,m=A,y=!1}}var C=!1,E=null,F=-1,_=5,z=-1;function xe(){return!(e.unstable_now()-z<_)}function bt(){if(E!==null){var T=e.unstable_now();z=T;var P=!0;try{P=E(!0,T)}finally{P?ct():(C=!1,E=null)}}else C=!1}var ct;if(typeof d=="function")ct=function(){d(bt)};else if(typeof MessageChannel<"u"){var Pn=new MessageChannel,He=Pn.port2;Pn.port1.onmessage=bt,ct=function(){He.postMessage(null)}}else ct=function(){N(bt,0)};function tl(T){E=T,C||(C=!0,ct())}function nl(T,P){F=N(function(){T(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,tl(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var A=m;m=P;try{return T()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,P){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var A=m;m=T;try{return P()}finally{m=A}},e.unstable_scheduleCallback=function(T,P,A){var K=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?K+A:K):A=K,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=A+Z,T={id:h++,callback:P,priorityLevel:T,startTime:A,expirationTime:Z,sortIndex:-1},A>K?(T.sortIndex=A,t(c,T),n(u)===null&&T===n(c)&&(x?(f(F),F=-1):x=!0,nl(k,A-K))):(T.sortIndex=Z,t(u,T),w||y||(w=!0,tl(S))),T},e.unstable_shouldYield=xe,e.unstable_wrapCallback=function(T){var P=m;return function(){var A=m;m=P;try{return T.apply(this,arguments)}finally{m=A}}}})(su);ou.exports=su;var sf=ou.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf=v,Se=sf;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uu=new Set,Zn={};function qt(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(Zn[e]=t,e=0;e<t.length;e++)uu.add(t[e])}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Il=Object.prototype.hasOwnProperty,cf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Io={},Do={};function df(e){return Il.call(Do,e)?!0:Il.call(Io,e)?!1:cf.test(e)?Do[e]=!0:(Io[e]=!0,!1)}function ff(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pf(e,t,n,r){if(t===null||typeof t>"u"||ff(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Aa=/[\-:]([a-z])/g;function ba(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Aa,ba);le[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Aa,ba);le[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Aa,ba);le[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ia(e,t,n,r){var i=le.hasOwnProperty(t)?le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(pf(t,n,i,r)&&(n=null),r||i===null?df(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ut=uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fr=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),Da=Symbol.for("react.strict_mode"),Dl=Symbol.for("react.profiler"),cu=Symbol.for("react.provider"),du=Symbol.for("react.context"),La=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Ml=Symbol.for("react.suspense_list"),Ma=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),fu=Symbol.for("react.offscreen"),Lo=Symbol.iterator;function zn(e){return e===null||typeof e!="object"?null:(e=Lo&&e[Lo]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,ll;function Un(e){if(ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ll=t&&t[1]||""}return`
`+ll+e}var al=!1;function ol(e,t){if(!e||al)return"";al=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{al=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Un(e):""}function mf(e){switch(e.tag){case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return Un("Suspense");case 19:return Un("SuspenseList");case 0:case 2:case 15:return e=ol(e.type,!1),e;case 11:return e=ol(e.type.render,!1),e;case 1:return e=ol(e.type,!0),e;default:return""}}function _l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Jt:return"Portal";case Dl:return"Profiler";case Da:return"StrictMode";case Ll:return"Suspense";case Ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case du:return(e.displayName||"Context")+".Consumer";case cu:return(e._context.displayName||"Context")+".Provider";case La:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ma:return t=e.displayName||null,t!==null?t:_l(e.type)||"Memo";case pt:t=e._payload,e=e._init;try{return _l(e(t))}catch{}}return null}function hf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _l(t);case 8:return t===Da?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gf(e){var t=pu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pr(e){e._valueTracker||(e._valueTracker=gf(e))}function mu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ai(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ol(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hu(e,t){t=t.checked,t!=null&&Ia(e,"checked",t,!1)}function Ul(e,t){hu(e,t);var n=Rt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bl(e,t.type,Rt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _o(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bl(e,t,n){(t!=="number"||ai(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bn=Array.isArray;function dn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Bn(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rt(n)}}function gu(e,t){var n=Rt(t.value),r=Rt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Uo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zr,yu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zr=zr||document.createElement("div"),zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vf=["Webkit","ms","Moz","O"];Object.keys(Wn).forEach(function(e){vf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wn[t]=Wn[e]})});function xu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wn.hasOwnProperty(e)&&Wn[e]?(""+t).trim():t+"px"}function wu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var yf=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wl(e,t){if(t){if(yf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ql=null;function _a(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gl=null,fn=null,pn=null;function Bo(e){if(e=wr(e)){if(typeof Gl!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Mi(t),Gl(e.stateNode,e.type,t))}}function ku(e){fn?pn?pn.push(e):pn=[e]:fn=e}function ju(){if(fn){var e=fn,t=pn;if(pn=fn=null,Bo(e),t)for(e=0;e<t.length;e++)Bo(t[e])}}function Su(e,t){return e(t)}function Nu(){}var sl=!1;function Cu(e,t,n){if(sl)return e(t,n);sl=!0;try{return Su(e,t,n)}finally{sl=!1,(fn!==null||pn!==null)&&(Nu(),ju())}}function tr(e,t){var n=e.stateNode;if(n===null)return null;var r=Mi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Kl=!1;if(it)try{var An={};Object.defineProperty(An,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Kl=!1}function xf(e,t,n,r,i,l,o,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Vn=!1,oi=null,si=!1,ql=null,wf={onError:function(e){Vn=!0,oi=e}};function kf(e,t,n,r,i,l,o,s,u){Vn=!1,oi=null,xf.apply(wf,arguments)}function jf(e,t,n,r,i,l,o,s,u){if(kf.apply(this,arguments),Vn){if(Vn){var c=oi;Vn=!1,oi=null}else throw Error(j(198));si||(si=!0,ql=c)}}function Xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Eu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $o(e){if(Xt(e)!==e)throw Error(j(188))}function Sf(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return $o(i),e;if(l===r)return $o(i),t;l=l.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Ru(e){return e=Sf(e),e!==null?Tu(e):null}function Tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tu(e);if(t!==null)return t;e=e.sibling}return null}var Fu=Se.unstable_scheduleCallback,Ho=Se.unstable_cancelCallback,Nf=Se.unstable_shouldYield,Cf=Se.unstable_requestPaint,q=Se.unstable_now,Ef=Se.unstable_getCurrentPriorityLevel,Oa=Se.unstable_ImmediatePriority,Pu=Se.unstable_UserBlockingPriority,ui=Se.unstable_NormalPriority,Rf=Se.unstable_LowPriority,zu=Se.unstable_IdlePriority,bi=null,Ge=null;function Tf(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(bi,e,void 0,(e.current.flags&128)===128)}catch{}}var _e=Math.clz32?Math.clz32:zf,Ff=Math.log,Pf=Math.LN2;function zf(e){return e>>>=0,e===0?32:31-(Ff(e)/Pf|0)|0}var Ar=64,br=4194304;function $n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ci(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=$n(s):(l&=o,l!==0&&(r=$n(l)))}else o=n&~i,o!==0?r=$n(o):l!==0&&(r=$n(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_e(t),i=1<<n,r|=e[n],t&=~i;return r}function Af(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-_e(l),s=1<<o,u=i[o];u===-1?(!(s&n)||s&r)&&(i[o]=Af(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function Xl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Au(){var e=Ar;return Ar<<=1,!(Ar&4194240)&&(Ar=64),e}function ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_e(t),e[t]=n}function If(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-_e(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Ua(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_e(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function bu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Iu,Ba,Du,Lu,Mu,Yl=!1,Ir=[],xt=null,wt=null,kt=null,nr=new Map,rr=new Map,ht=[],Df="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wo(e,t){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function bn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=wr(t),t!==null&&Ba(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Lf(e,t,n,r,i){switch(t){case"focusin":return xt=bn(xt,e,t,n,r,i),!0;case"dragenter":return wt=bn(wt,e,t,n,r,i),!0;case"mouseover":return kt=bn(kt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return nr.set(l,bn(nr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,rr.set(l,bn(rr.get(l)||null,e,t,n,r,i)),!0}return!1}function _u(e){var t=_t(e.target);if(t!==null){var n=Xt(t);if(n!==null){if(t=n.tag,t===13){if(t=Eu(n),t!==null){e.blockedOn=t,Mu(e.priority,function(){Du(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ql=r,n.target.dispatchEvent(r),Ql=null}else return t=wr(n),t!==null&&Ba(t),e.blockedOn=n,!1;t.shift()}return!0}function Vo(e,t,n){Kr(e)&&n.delete(t)}function Mf(){Yl=!1,xt!==null&&Kr(xt)&&(xt=null),wt!==null&&Kr(wt)&&(wt=null),kt!==null&&Kr(kt)&&(kt=null),nr.forEach(Vo),rr.forEach(Vo)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,Yl||(Yl=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Mf)))}function ir(e){function t(i){return In(i,e)}if(0<Ir.length){In(Ir[0],e);for(var n=1;n<Ir.length;n++){var r=Ir[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xt!==null&&In(xt,e),wt!==null&&In(wt,e),kt!==null&&In(kt,e),nr.forEach(t),rr.forEach(t),n=0;n<ht.length;n++)r=ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ht.length&&(n=ht[0],n.blockedOn===null);)_u(n),n.blockedOn===null&&ht.shift()}var mn=ut.ReactCurrentBatchConfig,di=!0;function _f(e,t,n,r){var i=M,l=mn.transition;mn.transition=null;try{M=1,$a(e,t,n,r)}finally{M=i,mn.transition=l}}function Of(e,t,n,r){var i=M,l=mn.transition;mn.transition=null;try{M=4,$a(e,t,n,r)}finally{M=i,mn.transition=l}}function $a(e,t,n,r){if(di){var i=Jl(e,t,n,r);if(i===null)xl(e,t,r,fi,n),Wo(e,r);else if(Lf(i,e,t,n,r))r.stopPropagation();else if(Wo(e,r),t&4&&-1<Df.indexOf(e)){for(;i!==null;){var l=wr(i);if(l!==null&&Iu(l),l=Jl(e,t,n,r),l===null&&xl(e,t,r,fi,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else xl(e,t,r,null,n)}}var fi=null;function Jl(e,t,n,r){if(fi=null,e=_a(r),e=_t(e),e!==null)if(t=Xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Eu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fi=e,null}function Ou(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ef()){case Oa:return 1;case Pu:return 4;case ui:case Rf:return 16;case zu:return 536870912;default:return 16}default:return 16}}var vt=null,Ha=null,qr=null;function Uu(){if(qr)return qr;var e,t=Ha,n=t.length,r,i="value"in vt?vt.value:vt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return qr=i.slice(e,1<r?1-r:void 0)}function Xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function Qo(){return!1}function Ce(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Dr:Qo,this.isPropagationStopped=Qo,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=Ce(En),xr=Q({},En,{view:0,detail:0}),Uf=Ce(xr),cl,dl,Dn,Ii=Q({},xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Va,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dn&&(Dn&&e.type==="mousemove"?(cl=e.screenX-Dn.screenX,dl=e.screenY-Dn.screenY):dl=cl=0,Dn=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:dl}}),Go=Ce(Ii),Bf=Q({},Ii,{dataTransfer:0}),$f=Ce(Bf),Hf=Q({},xr,{relatedTarget:0}),fl=Ce(Hf),Wf=Q({},En,{animationName:0,elapsedTime:0,pseudoElement:0}),Vf=Ce(Wf),Qf=Q({},En,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gf=Ce(Qf),Kf=Q({},En,{data:0}),Ko=Ce(Kf),qf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yf[e])?!!t[e]:!1}function Va(){return Jf}var Zf=Q({},xr,{key:function(e){if(e.key){var t=qf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Va,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ep=Ce(Zf),tp=Q({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=Ce(tp),np=Q({},xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Va}),rp=Ce(np),ip=Q({},En,{propertyName:0,elapsedTime:0,pseudoElement:0}),lp=Ce(ip),ap=Q({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),op=Ce(ap),sp=[9,13,27,32],Qa=it&&"CompositionEvent"in window,Qn=null;it&&"documentMode"in document&&(Qn=document.documentMode);var up=it&&"TextEvent"in window&&!Qn,Bu=it&&(!Qa||Qn&&8<Qn&&11>=Qn),Xo=" ",Yo=!1;function $u(e,t){switch(e){case"keyup":return sp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var en=!1;function cp(e,t){switch(e){case"compositionend":return Hu(t);case"keypress":return t.which!==32?null:(Yo=!0,Xo);case"textInput":return e=t.data,e===Xo&&Yo?null:e;default:return null}}function dp(e,t){if(en)return e==="compositionend"||!Qa&&$u(e,t)?(e=Uu(),qr=Ha=vt=null,en=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bu&&t.locale!=="ko"?null:t.data;default:return null}}var fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fp[e.type]:t==="textarea"}function Wu(e,t,n,r){ku(r),t=pi(t,"onChange"),0<t.length&&(n=new Wa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,lr=null;function pp(e){tc(e,0)}function Di(e){var t=rn(e);if(mu(t))return e}function mp(e,t){if(e==="change")return t}var Vu=!1;if(it){var pl;if(it){var ml="oninput"in document;if(!ml){var Zo=document.createElement("div");Zo.setAttribute("oninput","return;"),ml=typeof Zo.oninput=="function"}pl=ml}else pl=!1;Vu=pl&&(!document.documentMode||9<document.documentMode)}function es(){Gn&&(Gn.detachEvent("onpropertychange",Qu),lr=Gn=null)}function Qu(e){if(e.propertyName==="value"&&Di(lr)){var t=[];Wu(t,lr,e,_a(e)),Cu(pp,t)}}function hp(e,t,n){e==="focusin"?(es(),Gn=t,lr=n,Gn.attachEvent("onpropertychange",Qu)):e==="focusout"&&es()}function gp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Di(lr)}function vp(e,t){if(e==="click")return Di(t)}function yp(e,t){if(e==="input"||e==="change")return Di(t)}function xp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:xp;function ar(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Il.call(t,i)||!Be(e[i],t[i]))return!1}return!0}function ts(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ns(e,t){var n=ts(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ts(n)}}function Gu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ku(){for(var e=window,t=ai();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ai(e.document)}return t}function Ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wp(e){var t=Ku(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gu(n.ownerDocument.documentElement,n)){if(r!==null&&Ga(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=ns(n,l);var o=ns(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kp=it&&"documentMode"in document&&11>=document.documentMode,tn=null,Zl=null,Kn=null,ea=!1;function rs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ea||tn==null||tn!==ai(r)||(r=tn,"selectionStart"in r&&Ga(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kn&&ar(Kn,r)||(Kn=r,r=pi(Zl,"onSelect"),0<r.length&&(t=new Wa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tn)))}function Lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nn={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionend:Lr("Transition","TransitionEnd")},hl={},qu={};it&&(qu=document.createElement("div").style,"AnimationEvent"in window||(delete nn.animationend.animation,delete nn.animationiteration.animation,delete nn.animationstart.animation),"TransitionEvent"in window||delete nn.transitionend.transition);function Li(e){if(hl[e])return hl[e];if(!nn[e])return e;var t=nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qu)return hl[e]=t[n];return e}var Xu=Li("animationend"),Yu=Li("animationiteration"),Ju=Li("animationstart"),Zu=Li("transitionend"),ec=new Map,is="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){ec.set(e,t),qt(t,[e])}for(var gl=0;gl<is.length;gl++){var vl=is[gl],jp=vl.toLowerCase(),Sp=vl[0].toUpperCase()+vl.slice(1);Pt(jp,"on"+Sp)}Pt(Xu,"onAnimationEnd");Pt(Yu,"onAnimationIteration");Pt(Ju,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(Zu,"onTransitionEnd");vn("onMouseEnter",["mouseout","mouseover"]);vn("onMouseLeave",["mouseout","mouseover"]);vn("onPointerEnter",["pointerout","pointerover"]);vn("onPointerLeave",["pointerout","pointerover"]);qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Np=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));function ls(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jf(r,t,void 0,e),e.currentTarget=null}function tc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==l&&i.isPropagationStopped())break e;ls(i,s,c),l=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,c=s.currentTarget,s=s.listener,u!==l&&i.isPropagationStopped())break e;ls(i,s,c),l=u}}}if(si)throw e=ql,si=!1,ql=null,e}function U(e,t){var n=t[la];n===void 0&&(n=t[la]=new Set);var r=e+"__bubble";n.has(r)||(nc(t,e,2,!1),n.add(r))}function yl(e,t,n){var r=0;t&&(r|=4),nc(n,e,r,t)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[Mr]){e[Mr]=!0,uu.forEach(function(n){n!=="selectionchange"&&(Np.has(n)||yl(n,!1,e),yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mr]||(t[Mr]=!0,yl("selectionchange",!1,t))}}function nc(e,t,n,r){switch(Ou(t)){case 1:var i=_f;break;case 4:i=Of;break;default:i=$a}n=i.bind(null,t,n,e),i=void 0,!Kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function xl(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;s!==null;){if(o=_t(s),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}s=s.parentNode}}r=r.return}Cu(function(){var c=l,h=_a(n),p=[];e:{var m=ec.get(e);if(m!==void 0){var y=Wa,w=e;switch(e){case"keypress":if(Xr(n)===0)break e;case"keydown":case"keyup":y=ep;break;case"focusin":w="focus",y=fl;break;case"focusout":w="blur",y=fl;break;case"beforeblur":case"afterblur":y=fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=$f;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=rp;break;case Xu:case Yu:case Ju:y=Vf;break;case Zu:y=lp;break;case"scroll":y=Uf;break;case"wheel":y=op;break;case"copy":case"cut":case"paste":y=Gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qo}var x=(t&4)!==0,N=!x&&e==="scroll",f=x?m!==null?m+"Capture":null:m;x=[];for(var d=c,g;d!==null;){g=d;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,f!==null&&(k=tr(d,f),k!=null&&x.push(sr(d,k,g)))),N)break;d=d.return}0<x.length&&(m=new y(m,w,null,n,h),p.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Ql&&(w=n.relatedTarget||n.fromElement)&&(_t(w)||w[lt]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?_t(w):null,w!==null&&(N=Xt(w),w!==N||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(x=Go,k="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=qo,k="onPointerLeave",f="onPointerEnter",d="pointer"),N=y==null?m:rn(y),g=w==null?m:rn(w),m=new x(k,d+"leave",y,n,h),m.target=N,m.relatedTarget=g,k=null,_t(h)===c&&(x=new x(f,d+"enter",w,n,h),x.target=g,x.relatedTarget=N,k=x),N=k,y&&w)t:{for(x=y,f=w,d=0,g=x;g;g=Yt(g))d++;for(g=0,k=f;k;k=Yt(k))g++;for(;0<d-g;)x=Yt(x),d--;for(;0<g-d;)f=Yt(f),g--;for(;d--;){if(x===f||f!==null&&x===f.alternate)break t;x=Yt(x),f=Yt(f)}x=null}else x=null;y!==null&&as(p,m,y,x,!1),w!==null&&N!==null&&as(p,N,w,x,!0)}}e:{if(m=c?rn(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var S=mp;else if(Jo(m))if(Vu)S=yp;else{S=gp;var C=hp}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=vp);if(S&&(S=S(e,c))){Wu(p,S,n,h);break e}C&&C(e,m,c),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Bl(m,"number",m.value)}switch(C=c?rn(c):window,e){case"focusin":(Jo(C)||C.contentEditable==="true")&&(tn=C,Zl=c,Kn=null);break;case"focusout":Kn=Zl=tn=null;break;case"mousedown":ea=!0;break;case"contextmenu":case"mouseup":case"dragend":ea=!1,rs(p,n,h);break;case"selectionchange":if(kp)break;case"keydown":case"keyup":rs(p,n,h)}var E;if(Qa)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else en?$u(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Bu&&n.locale!=="ko"&&(en||F!=="onCompositionStart"?F==="onCompositionEnd"&&en&&(E=Uu()):(vt=h,Ha="value"in vt?vt.value:vt.textContent,en=!0)),C=pi(c,F),0<C.length&&(F=new Ko(F,e,null,n,h),p.push({event:F,listeners:C}),E?F.data=E:(E=Hu(n),E!==null&&(F.data=E)))),(E=up?cp(e,n):dp(e,n))&&(c=pi(c,"onBeforeInput"),0<c.length&&(h=new Ko("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=E))}tc(p,t)})}function sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=tr(e,n),l!=null&&r.unshift(sr(e,l,i)),l=tr(e,t),l!=null&&r.push(sr(e,l,i))),e=e.return}return r}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function as(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=tr(n,l),u!=null&&o.unshift(sr(n,u,s))):i||(u=tr(n,l),u!=null&&o.push(sr(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Cp=/\r\n?/g,Ep=/\u0000|\uFFFD/g;function os(e){return(typeof e=="string"?e:""+e).replace(Cp,`
`).replace(Ep,"")}function _r(e,t,n){if(t=os(t),os(e)!==t&&n)throw Error(j(425))}function mi(){}var ta=null,na=null;function ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ia=typeof setTimeout=="function"?setTimeout:void 0,Rp=typeof clearTimeout=="function"?clearTimeout:void 0,ss=typeof Promise=="function"?Promise:void 0,Tp=typeof queueMicrotask=="function"?queueMicrotask:typeof ss<"u"?function(e){return ss.resolve(null).then(e).catch(Fp)}:ia;function Fp(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ir(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function us(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Rn,ur="__reactProps$"+Rn,lt="__reactContainer$"+Rn,la="__reactEvents$"+Rn,Pp="__reactListeners$"+Rn,zp="__reactHandles$"+Rn;function _t(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=us(e);e!==null;){if(n=e[Qe])return n;e=us(e)}return t}e=n,n=e.parentNode}return null}function wr(e){return e=e[Qe]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Mi(e){return e[ur]||null}var aa=[],ln=-1;function zt(e){return{current:e}}function B(e){0>ln||(e.current=aa[ln],aa[ln]=null,ln--)}function O(e,t){ln++,aa[ln]=e.current,e.current=t}var Tt={},ue=zt(Tt),ge=zt(!1),Ht=Tt;function yn(e,t){var n=e.type.contextTypes;if(!n)return Tt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function hi(){B(ge),B(ue)}function cs(e,t,n){if(ue.current!==Tt)throw Error(j(168));O(ue,t),O(ge,n)}function rc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,hf(e)||"Unknown",i));return Q({},n,r)}function gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tt,Ht=ue.current,O(ue,e),O(ge,ge.current),!0}function ds(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=rc(e,t,Ht),r.__reactInternalMemoizedMergedChildContext=e,B(ge),B(ue),O(ue,e)):B(ge),O(ge,n)}var et=null,_i=!1,kl=!1;function ic(e){et===null?et=[e]:et.push(e)}function Ap(e){_i=!0,ic(e)}function At(){if(!kl&&et!==null){kl=!0;var e=0,t=M;try{var n=et;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}et=null,_i=!1}catch(i){throw et!==null&&(et=et.slice(e+1)),Fu(Oa,At),i}finally{M=t,kl=!1}}return null}var an=[],on=0,vi=null,yi=0,Ee=[],Re=0,Wt=null,tt=1,nt="";function Lt(e,t){an[on++]=yi,an[on++]=vi,vi=e,yi=t}function lc(e,t,n){Ee[Re++]=tt,Ee[Re++]=nt,Ee[Re++]=Wt,Wt=e;var r=tt;e=nt;var i=32-_e(r)-1;r&=~(1<<i),n+=1;var l=32-_e(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,tt=1<<32-_e(t)+i|n<<i|r,nt=l+e}else tt=1<<l|n<<i|r,nt=e}function Ka(e){e.return!==null&&(Lt(e,1),lc(e,1,0))}function qa(e){for(;e===vi;)vi=an[--on],an[on]=null,yi=an[--on],an[on]=null;for(;e===Wt;)Wt=Ee[--Re],Ee[Re]=null,nt=Ee[--Re],Ee[Re]=null,tt=Ee[--Re],Ee[Re]=null}var je=null,ke=null,$=!1,Me=null;function ac(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,ke=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wt!==null?{id:tt,overflow:nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,ke=null,!0):!1;default:return!1}}function oa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sa(e){if($){var t=ke;if(t){var n=t;if(!fs(e,t)){if(oa(e))throw Error(j(418));t=jt(n.nextSibling);var r=je;t&&fs(e,t)?ac(r,n):(e.flags=e.flags&-4097|2,$=!1,je=e)}}else{if(oa(e))throw Error(j(418));e.flags=e.flags&-4097|2,$=!1,je=e}}}function ps(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Or(e){if(e!==je)return!1;if(!$)return ps(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ra(e.type,e.memoizedProps)),t&&(t=ke)){if(oa(e))throw oc(),Error(j(418));for(;t;)ac(e,t),t=jt(t.nextSibling)}if(ps(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=je?jt(e.stateNode.nextSibling):null;return!0}function oc(){for(var e=ke;e;)e=jt(e.nextSibling)}function xn(){ke=je=null,$=!1}function Xa(e){Me===null?Me=[e]:Me.push(e)}var bp=ut.ReactCurrentBatchConfig;function Ln(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Ur(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ms(e){var t=e._init;return t(e._payload)}function sc(e){function t(f,d){if(e){var g=f.deletions;g===null?(f.deletions=[d],f.flags|=16):g.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Et(f,d),f.index=0,f.sibling=null,f}function l(f,d,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<d?(f.flags|=2,d):g):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,g,k){return d===null||d.tag!==6?(d=Tl(g,f.mode,k),d.return=f,d):(d=i(d,g),d.return=f,d)}function u(f,d,g,k){var S=g.type;return S===Zt?h(f,d,g.props.children,k,g.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===pt&&ms(S)===d.type)?(k=i(d,g.props),k.ref=Ln(f,d,g),k.return=f,k):(k=ri(g.type,g.key,g.props,null,f.mode,k),k.ref=Ln(f,d,g),k.return=f,k)}function c(f,d,g,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Fl(g,f.mode,k),d.return=f,d):(d=i(d,g.children||[]),d.return=f,d)}function h(f,d,g,k,S){return d===null||d.tag!==7?(d=$t(g,f.mode,k,S),d.return=f,d):(d=i(d,g),d.return=f,d)}function p(f,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Tl(""+d,f.mode,g),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Fr:return g=ri(d.type,d.key,d.props,null,f.mode,g),g.ref=Ln(f,null,d),g.return=f,g;case Jt:return d=Fl(d,f.mode,g),d.return=f,d;case pt:var k=d._init;return p(f,k(d._payload),g)}if(Bn(d)||zn(d))return d=$t(d,f.mode,g,null),d.return=f,d;Ur(f,d)}return null}function m(f,d,g,k){var S=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:s(f,d,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fr:return g.key===S?u(f,d,g,k):null;case Jt:return g.key===S?c(f,d,g,k):null;case pt:return S=g._init,m(f,d,S(g._payload),k)}if(Bn(g)||zn(g))return S!==null?null:h(f,d,g,k,null);Ur(f,g)}return null}function y(f,d,g,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(g)||null,s(d,f,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Fr:return f=f.get(k.key===null?g:k.key)||null,u(d,f,k,S);case Jt:return f=f.get(k.key===null?g:k.key)||null,c(d,f,k,S);case pt:var C=k._init;return y(f,d,g,C(k._payload),S)}if(Bn(k)||zn(k))return f=f.get(g)||null,h(d,f,k,S,null);Ur(d,k)}return null}function w(f,d,g,k){for(var S=null,C=null,E=d,F=d=0,_=null;E!==null&&F<g.length;F++){E.index>F?(_=E,E=null):_=E.sibling;var z=m(f,E,g[F],k);if(z===null){E===null&&(E=_);break}e&&E&&z.alternate===null&&t(f,E),d=l(z,d,F),C===null?S=z:C.sibling=z,C=z,E=_}if(F===g.length)return n(f,E),$&&Lt(f,F),S;if(E===null){for(;F<g.length;F++)E=p(f,g[F],k),E!==null&&(d=l(E,d,F),C===null?S=E:C.sibling=E,C=E);return $&&Lt(f,F),S}for(E=r(f,E);F<g.length;F++)_=y(E,f,F,g[F],k),_!==null&&(e&&_.alternate!==null&&E.delete(_.key===null?F:_.key),d=l(_,d,F),C===null?S=_:C.sibling=_,C=_);return e&&E.forEach(function(xe){return t(f,xe)}),$&&Lt(f,F),S}function x(f,d,g,k){var S=zn(g);if(typeof S!="function")throw Error(j(150));if(g=S.call(g),g==null)throw Error(j(151));for(var C=S=null,E=d,F=d=0,_=null,z=g.next();E!==null&&!z.done;F++,z=g.next()){E.index>F?(_=E,E=null):_=E.sibling;var xe=m(f,E,z.value,k);if(xe===null){E===null&&(E=_);break}e&&E&&xe.alternate===null&&t(f,E),d=l(xe,d,F),C===null?S=xe:C.sibling=xe,C=xe,E=_}if(z.done)return n(f,E),$&&Lt(f,F),S;if(E===null){for(;!z.done;F++,z=g.next())z=p(f,z.value,k),z!==null&&(d=l(z,d,F),C===null?S=z:C.sibling=z,C=z);return $&&Lt(f,F),S}for(E=r(f,E);!z.done;F++,z=g.next())z=y(E,f,F,z.value,k),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?F:z.key),d=l(z,d,F),C===null?S=z:C.sibling=z,C=z);return e&&E.forEach(function(bt){return t(f,bt)}),$&&Lt(f,F),S}function N(f,d,g,k){if(typeof g=="object"&&g!==null&&g.type===Zt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Fr:e:{for(var S=g.key,C=d;C!==null;){if(C.key===S){if(S=g.type,S===Zt){if(C.tag===7){n(f,C.sibling),d=i(C,g.props.children),d.return=f,f=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===pt&&ms(S)===C.type){n(f,C.sibling),d=i(C,g.props),d.ref=Ln(f,C,g),d.return=f,f=d;break e}n(f,C);break}else t(f,C);C=C.sibling}g.type===Zt?(d=$t(g.props.children,f.mode,k,g.key),d.return=f,f=d):(k=ri(g.type,g.key,g.props,null,f.mode,k),k.ref=Ln(f,d,g),k.return=f,f=k)}return o(f);case Jt:e:{for(C=g.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(f,d.sibling),d=i(d,g.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Fl(g,f.mode,k),d.return=f,f=d}return o(f);case pt:return C=g._init,N(f,d,C(g._payload),k)}if(Bn(g))return w(f,d,g,k);if(zn(g))return x(f,d,g,k);Ur(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,g),d.return=f,f=d):(n(f,d),d=Tl(g,f.mode,k),d.return=f,f=d),o(f)):n(f,d)}return N}var wn=sc(!0),uc=sc(!1),xi=zt(null),wi=null,sn=null,Ya=null;function Ja(){Ya=sn=wi=null}function Za(e){var t=xi.current;B(xi),e._currentValue=t}function ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hn(e,t){wi=e,Ya=sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(Ya!==e)if(e={context:e,memoizedValue:t,next:null},sn===null){if(wi===null)throw Error(j(308));sn=e,wi.dependencies={lanes:0,firstContext:e}}else sn=sn.next=e;return t}var Ot=null;function eo(e){Ot===null?Ot=[e]:Ot.push(e)}function cc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,eo(t)):(n.next=i.next,i.next=n),t.interleaved=n,at(e,r)}function at(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function to(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function St(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,at(e,n)}return i=r.interleaved,i===null?(t.next=t,eo(r)):(t.next=i.next,i.next=t),r.interleaved=t,at(e,n)}function Yr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ua(e,n)}}function hs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ki(e,t,n,r){var i=e.updateQueue;mt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,o===null?l=c:o.next=c,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==o&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(l!==null){var p=i.baseState;o=0,h=c=u=null,s=l;do{var m=s.lane,y=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,x=s;switch(m=t,y=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){p=w.call(y,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,m=typeof w=="function"?w.call(y,p,m):w,m==null)break e;p=Q({},p,m);break e;case 2:mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=y,u=p):h=h.next=y,o|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Qt|=o,e.lanes=o,e.memoizedState=p}}function gs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var kr={},Ke=zt(kr),cr=zt(kr),dr=zt(kr);function Ut(e){if(e===kr)throw Error(j(174));return e}function no(e,t){switch(O(dr,t),O(cr,e),O(Ke,kr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hl(t,e)}B(Ke),O(Ke,t)}function kn(){B(Ke),B(cr),B(dr)}function fc(e){Ut(dr.current);var t=Ut(Ke.current),n=Hl(t,e.type);t!==n&&(O(cr,e),O(Ke,n))}function ro(e){cr.current===e&&(B(Ke),B(cr))}var H=zt(0);function ji(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jl=[];function io(){for(var e=0;e<jl.length;e++)jl[e]._workInProgressVersionPrimary=null;jl.length=0}var Jr=ut.ReactCurrentDispatcher,Sl=ut.ReactCurrentBatchConfig,Vt=0,W=null,Y=null,ee=null,Si=!1,qn=!1,fr=0,Ip=0;function ae(){throw Error(j(321))}function lo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function ao(e,t,n,r,i,l){if(Vt=l,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jr.current=e===null||e.memoizedState===null?_p:Op,e=n(r,i),qn){l=0;do{if(qn=!1,fr=0,25<=l)throw Error(j(301));l+=1,ee=Y=null,t.updateQueue=null,Jr.current=Up,e=n(r,i)}while(qn)}if(Jr.current=Ni,t=Y!==null&&Y.next!==null,Vt=0,ee=Y=W=null,Si=!1,t)throw Error(j(300));return e}function oo(){var e=fr!==0;return fr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?W.memoizedState=ee=e:ee=ee.next=e,ee}function ze(){if(Y===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=ee===null?W.memoizedState:ee.next;if(t!==null)ee=t,Y=e;else{if(e===null)throw Error(j(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},ee===null?W.memoizedState=ee=e:ee=ee.next=e}return ee}function pr(e,t){return typeof t=="function"?t(e):t}function Nl(e){var t=ze(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Y,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,u=null,c=l;do{var h=c.lane;if((Vt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=p,o=r):u=u.next=p,W.lanes|=h,Qt|=h}c=c.next}while(c!==null&&c!==l);u===null?o=r:u.next=s,Be(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,W.lanes|=l,Qt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cl(e){var t=ze(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Be(l,t.memoizedState)||(he=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function pc(){}function mc(e,t){var n=W,r=ze(),i=t(),l=!Be(r.memoizedState,i);if(l&&(r.memoizedState=i,he=!0),r=r.queue,so(vc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,mr(9,gc.bind(null,n,r,i,t),void 0,null),te===null)throw Error(j(349));Vt&30||hc(n,t,i)}return i}function hc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gc(e,t,n,r){t.value=n,t.getSnapshot=r,yc(t)&&xc(e)}function vc(e,t,n){return n(function(){yc(t)&&xc(e)})}function yc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function xc(e){var t=at(e,1);t!==null&&Oe(t,e,1,-1)}function vs(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:e},t.queue=e,e=e.dispatch=Mp.bind(null,W,e),[t.memoizedState,e]}function mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wc(){return ze().memoizedState}function Zr(e,t,n,r){var i=Ve();W.flags|=e,i.memoizedState=mr(1|t,n,void 0,r===void 0?null:r)}function Oi(e,t,n,r){var i=ze();r=r===void 0?null:r;var l=void 0;if(Y!==null){var o=Y.memoizedState;if(l=o.destroy,r!==null&&lo(r,o.deps)){i.memoizedState=mr(t,n,l,r);return}}W.flags|=e,i.memoizedState=mr(1|t,n,l,r)}function ys(e,t){return Zr(8390656,8,e,t)}function so(e,t){return Oi(2048,8,e,t)}function kc(e,t){return Oi(4,2,e,t)}function jc(e,t){return Oi(4,4,e,t)}function Sc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nc(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4,4,Sc.bind(null,t,e),n)}function uo(){}function Cc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ec(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rc(e,t,n){return Vt&21?(Be(n,t)||(n=Au(),W.lanes|=n,Qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function Dp(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Sl.transition;Sl.transition={};try{e(!1),t()}finally{M=n,Sl.transition=r}}function Tc(){return ze().memoizedState}function Lp(e,t,n){var r=Ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fc(e))Pc(t,n);else if(n=cc(e,t,n,r),n!==null){var i=de();Oe(n,e,r,i),zc(n,t,r)}}function Mp(e,t,n){var r=Ct(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))Pc(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,Be(s,o)){var u=t.interleaved;u===null?(i.next=i,eo(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=cc(e,t,i,r),n!==null&&(i=de(),Oe(n,e,r,i),zc(n,t,r))}}function Fc(e){var t=e.alternate;return e===W||t!==null&&t===W}function Pc(e,t){qn=Si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ua(e,n)}}var Ni={readContext:Pe,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},_p={readContext:Pe,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:ys,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zr(4194308,4,Sc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zr(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lp.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:vs,useDebugValue:uo,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=vs(!1),t=e[0];return e=Dp.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,i=Ve();if($){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),te===null)throw Error(j(349));Vt&30||hc(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,ys(vc.bind(null,r,l,e),[e]),r.flags|=2048,mr(9,gc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ve(),t=te.identifierPrefix;if($){var n=nt,r=tt;n=(r&~(1<<32-_e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ip++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Op={readContext:Pe,useCallback:Cc,useContext:Pe,useEffect:so,useImperativeHandle:Nc,useInsertionEffect:kc,useLayoutEffect:jc,useMemo:Ec,useReducer:Nl,useRef:wc,useState:function(){return Nl(pr)},useDebugValue:uo,useDeferredValue:function(e){var t=ze();return Rc(t,Y.memoizedState,e)},useTransition:function(){var e=Nl(pr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:mc,useId:Tc,unstable_isNewReconciler:!1},Up={readContext:Pe,useCallback:Cc,useContext:Pe,useEffect:so,useImperativeHandle:Nc,useInsertionEffect:kc,useLayoutEffect:jc,useMemo:Ec,useReducer:Cl,useRef:wc,useState:function(){return Cl(pr)},useDebugValue:uo,useDeferredValue:function(e){var t=ze();return Y===null?t.memoizedState=e:Rc(t,Y.memoizedState,e)},useTransition:function(){var e=Cl(pr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:mc,useId:Tc,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ca(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ui={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=Ct(e),l=rt(r,i);l.payload=t,n!=null&&(l.callback=n),t=St(e,l,i),t!==null&&(Oe(t,e,i,r),Yr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=Ct(e),l=rt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=St(e,l,i),t!==null&&(Oe(t,e,i,r),Yr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=Ct(e),i=rt(n,r);i.tag=2,t!=null&&(i.callback=t),t=St(e,i,r),t!==null&&(Oe(t,e,r,n),Yr(t,e,r))}};function xs(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!ar(n,r)||!ar(i,l):!0}function Ac(e,t,n){var r=!1,i=Tt,l=t.contextType;return typeof l=="object"&&l!==null?l=Pe(l):(i=ve(t)?Ht:ue.current,r=t.contextTypes,l=(r=r!=null)?yn(e,i):Tt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function ws(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ui.enqueueReplaceState(t,t.state,null)}function da(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},to(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Pe(l):(l=ve(t)?Ht:ue.current,i.context=yn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ca(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ui.enqueueReplaceState(i,i.state,null),ki(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jn(e,t){try{var n="",r=t;do n+=mf(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function El(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Bp=typeof WeakMap=="function"?WeakMap:Map;function bc(e,t,n){n=rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ei||(Ei=!0,ja=r),fa(e,t)},n}function Ic(e,t,n){n=rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){fa(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){fa(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ks(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=tm.bind(null,e,t,n),t.then(e,e))}function js(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ss(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=rt(-1,1),t.tag=2,St(n,t,1))),n.lanes|=1),e)}var $p=ut.ReactCurrentOwner,he=!1;function ce(e,t,n,r){t.child=e===null?uc(t,null,n,r):wn(t,e.child,n,r)}function Ns(e,t,n,r,i){n=n.render;var l=t.ref;return hn(t,i),r=ao(e,t,n,r,l,i),n=oo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ot(e,t,i)):($&&n&&Ka(t),t.flags|=1,ce(e,t,r,i),t.child)}function Cs(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!yo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Dc(e,t,l,r,i)):(e=ri(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(o,r)&&e.ref===t.ref)return ot(e,t,i)}return t.flags|=1,e=Et(l,r),e.ref=t.ref,e.return=t,t.child=e}function Dc(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(ar(l,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,ot(e,t,i)}return pa(e,t,n,r,i)}function Lc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(cn,we),we|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(cn,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,O(cn,we),we|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,O(cn,we),we|=r;return ce(e,t,i,n),t.child}function Mc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pa(e,t,n,r,i){var l=ve(n)?Ht:ue.current;return l=yn(t,l),hn(t,i),n=ao(e,t,n,r,l,i),r=oo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ot(e,t,i)):($&&r&&Ka(t),t.flags|=1,ce(e,t,n,i),t.child)}function Es(e,t,n,r,i){if(ve(n)){var l=!0;gi(t)}else l=!1;if(hn(t,i),t.stateNode===null)ei(e,t),Ac(t,n,r),da(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pe(c):(c=ve(n)?Ht:ue.current,c=yn(t,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==c)&&ws(t,o,r,c),mt=!1;var m=t.memoizedState;o.state=m,ki(t,r,o,i),u=t.memoizedState,s!==r||m!==u||ge.current||mt?(typeof h=="function"&&(ca(t,n,h,r),u=t.memoizedState),(s=mt||xs(t,n,s,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,dc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:De(t.type,s),o.props=c,p=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pe(u):(u=ve(n)?Ht:ue.current,u=yn(t,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||m!==u)&&ws(t,o,r,u),mt=!1,m=t.memoizedState,o.state=m,ki(t,r,o,i);var w=t.memoizedState;s!==p||m!==w||ge.current||mt?(typeof y=="function"&&(ca(t,n,y,r),w=t.memoizedState),(c=mt||xs(t,n,c,r,m,w,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ma(e,t,n,r,l,i)}function ma(e,t,n,r,i,l){Mc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ds(t,n,!1),ot(e,t,l);r=t.stateNode,$p.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=wn(t,e.child,null,l),t.child=wn(t,null,s,l)):ce(e,t,s,l),t.memoizedState=r.state,i&&ds(t,n,!0),t.child}function _c(e){var t=e.stateNode;t.pendingContext?cs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cs(e,t.context,!1),no(e,t.containerInfo)}function Rs(e,t,n,r,i){return xn(),Xa(i),t.flags|=256,ce(e,t,n,r),t.child}var ha={dehydrated:null,treeContext:null,retryLane:0};function ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function Oc(e,t,n){var r=t.pendingProps,i=H.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(H,i&1),e===null)return sa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Hi(o,r,0,null),e=$t(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ga(n),t.memoizedState=ha,e):co(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Hp(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Et(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=Et(s,l):(l=$t(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?ga(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=ha,r}return l=e.child,e=l.sibling,r=Et(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function co(e,t){return t=Hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Br(e,t,n,r){return r!==null&&Xa(r),wn(t,e.child,null,n),e=co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hp(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=El(Error(j(422))),Br(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Hi({mode:"visible",children:r.children},i,0,null),l=$t(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&wn(t,e.child,null,o),t.child.memoizedState=ga(o),t.memoizedState=ha,l);if(!(t.mode&1))return Br(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(j(419)),r=El(l,r,void 0),Br(e,t,o,r)}if(s=(o&e.childLanes)!==0,he||s){if(r=te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,at(e,i),Oe(r,e,i,-1))}return vo(),r=El(Error(j(421))),Br(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=nm.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ke=jt(i.nextSibling),je=t,$=!0,Me=null,e!==null&&(Ee[Re++]=tt,Ee[Re++]=nt,Ee[Re++]=Wt,tt=e.id,nt=e.overflow,Wt=t),t=co(t,r.children),t.flags|=4096,t)}function Ts(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ua(e.return,t,n)}function Rl(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Uc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ce(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ts(e,n,t);else if(e.tag===19)Ts(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ji(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Rl(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ji(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Rl(t,!0,n,null,l);break;case"together":Rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ei(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Et(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Et(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wp(e,t,n){switch(t.tag){case 3:_c(t),xn();break;case 5:fc(t);break;case 1:ve(t.type)&&gi(t);break;case 4:no(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;O(xi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Oc(e,t,n):(O(H,H.current&1),e=ot(e,t,n),e!==null?e.sibling:null);O(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Uc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Lc(e,t,n)}return ot(e,t,n)}var Bc,va,$c,Hc;Bc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};va=function(){};$c=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ut(Ke.current);var l=null;switch(n){case"input":i=Ol(e,i),r=Ol(e,r),l=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),l=[];break;case"textarea":i=$l(e,i),r=$l(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mi)}Wl(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&U("scroll",e),l||s===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Hc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vp(e,t,n){var r=t.pendingProps;switch(qa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ve(t.type)&&hi(),oe(t),null;case 3:return r=t.stateNode,kn(),B(ge),B(ue),io(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Or(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Ca(Me),Me=null))),va(e,t),oe(t),null;case 5:ro(t);var i=Ut(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)$c(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return oe(t),null}if(e=Ut(Ke.current),Or(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Qe]=t,r[ur]=l,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<Hn.length;i++)U(Hn[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Mo(r,l),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},U("invalid",r);break;case"textarea":Oo(r,l),U("invalid",r)}Wl(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&_r(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&_r(r.textContent,s,e),i=["children",""+s]):Zn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":Pr(r),_o(r,l,!0);break;case"textarea":Pr(r),Uo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=mi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Qe]=t,e[ur]=r,Bc(e,t,!1,!1),t.stateNode=e;e:{switch(o=Vl(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<Hn.length;i++)U(Hn[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":Mo(e,r),i=Ol(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),U("invalid",e);break;case"textarea":Oo(e,r),i=$l(e,r),U("invalid",e);break;default:i=r}Wl(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?wu(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&yu(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&er(e,u):typeof u=="number"&&er(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Zn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&U("scroll",e):u!=null&&Ia(e,l,u,o))}switch(n){case"input":Pr(e),_o(e,r,!1);break;case"textarea":Pr(e),Uo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?dn(e,!!r.multiple,l,!1):r.defaultValue!=null&&dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=mi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Hc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Ut(dr.current),Ut(Ke.current),Or(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(l=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:_r(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_r(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return oe(t),null;case 13:if(B(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&ke!==null&&t.mode&1&&!(t.flags&128))oc(),xn(),t.flags|=98560,l=!1;else if(l=Or(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(j(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(j(317));l[Qe]=t}else xn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),l=!1}else Me!==null&&(Ca(Me),Me=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?J===0&&(J=3):vo())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return kn(),va(e,t),e===null&&or(t.stateNode.containerInfo),oe(t),null;case 10:return Za(t.type._context),oe(t),null;case 17:return ve(t.type)&&hi(),oe(t),null;case 19:if(B(H),l=t.memoizedState,l===null)return oe(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Mn(l,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ji(e),o!==null){for(t.flags|=128,Mn(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(H,H.current&1|2),t.child}e=e.sibling}l.tail!==null&&q()>Sn&&(t.flags|=128,r=!0,Mn(l,!1),t.lanes=4194304)}else{if(!r)if(e=ji(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!$)return oe(t),null}else 2*q()-l.renderingStartTime>Sn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=q(),t.sibling=null,n=H.current,O(H,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return go(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Qp(e,t){switch(qa(t),t.tag){case 1:return ve(t.type)&&hi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(),B(ge),B(ue),io(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ro(t),null;case 13:if(B(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(H),null;case 4:return kn(),null;case 10:return Za(t.type._context),null;case 22:case 23:return go(),null;case 24:return null;default:return null}}var $r=!1,se=!1,Gp=typeof WeakSet=="function"?WeakSet:Set,R=null;function un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function ya(e,t,n){try{n()}catch(r){G(e,t,r)}}var Fs=!1;function Kp(e,t){if(ta=di,e=Ku(),Ga(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,c=0,h=0,p=e,m=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(s=o+i),p!==l||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break t;if(m===n&&++c===i&&(s=o),m===l&&++h===r&&(u=o),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(na={focusedElem:e,selectionRange:n},di=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,N=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:De(t.type,x),N);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(k){G(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return w=Fs,Fs=!1,w}function Xn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ya(t,n,l)}i=i.next}while(i!==r)}}function Bi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wc(e){var t=e.alternate;t!==null&&(e.alternate=null,Wc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[ur],delete t[la],delete t[Pp],delete t[zp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vc(e){return e.tag===5||e.tag===3||e.tag===4}function Ps(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mi));else if(r!==4&&(e=e.child,e!==null))for(wa(e,t,n),e=e.sibling;e!==null;)wa(e,t,n),e=e.sibling}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}var ne=null,Le=!1;function dt(e,t,n){for(n=n.child;n!==null;)Qc(e,t,n),n=n.sibling}function Qc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(bi,n)}catch{}switch(n.tag){case 5:se||un(n,t);case 6:var r=ne,i=Le;ne=null,dt(e,t,n),ne=r,Le=i,ne!==null&&(Le?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Le?(e=ne,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),ir(e)):wl(ne,n.stateNode));break;case 4:r=ne,i=Le,ne=n.stateNode.containerInfo,Le=!0,dt(e,t,n),ne=r,Le=i;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&ya(n,t,o),i=i.next}while(i!==r)}dt(e,t,n);break;case 1:if(!se&&(un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}dt(e,t,n);break;case 21:dt(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,dt(e,t,n),se=r):dt(e,t,n);break;default:dt(e,t,n)}}function zs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gp),t.forEach(function(r){var i=rm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ne=s.stateNode,Le=!1;break e;case 3:ne=s.stateNode.containerInfo,Le=!0;break e;case 4:ne=s.stateNode.containerInfo,Le=!0;break e}s=s.return}if(ne===null)throw Error(j(160));Qc(l,o,i),ne=null,Le=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){G(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gc(t,e),t=t.sibling}function Gc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),We(e),r&4){try{Xn(3,e,e.return),Bi(3,e)}catch(x){G(e,e.return,x)}try{Xn(5,e,e.return)}catch(x){G(e,e.return,x)}}break;case 1:be(t,e),We(e),r&512&&n!==null&&un(n,n.return);break;case 5:if(be(t,e),We(e),r&512&&n!==null&&un(n,n.return),e.flags&32){var i=e.stateNode;try{er(i,"")}catch(x){G(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&hu(i,l),Vl(s,o);var c=Vl(s,l);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?wu(i,p):h==="dangerouslySetInnerHTML"?yu(i,p):h==="children"?er(i,p):Ia(i,h,p,c)}switch(s){case"input":Ul(i,l);break;case"textarea":gu(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?dn(i,!!l.multiple,y,!1):m!==!!l.multiple&&(l.defaultValue!=null?dn(i,!!l.multiple,l.defaultValue,!0):dn(i,!!l.multiple,l.multiple?[]:"",!1))}i[ur]=l}catch(x){G(e,e.return,x)}}break;case 6:if(be(t,e),We(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){G(e,e.return,x)}}break;case 3:if(be(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ir(t.containerInfo)}catch(x){G(e,e.return,x)}break;case 4:be(t,e),We(e);break;case 13:be(t,e),We(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(mo=q())),r&4&&zs(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(se=(c=se)||h,be(t,e),se=c):be(t,e),We(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(R=e,h=e.child;h!==null;){for(p=R=h;R!==null;){switch(m=R,y=m.child,m.tag){case 0:case 11:case 14:case 15:Xn(4,m,m.return);break;case 1:un(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){G(r,n,x)}}break;case 5:un(m,m.return);break;case 22:if(m.memoizedState!==null){bs(p);continue}}y!==null?(y.return=m,R=y):bs(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=xu("display",o))}catch(x){G(e,e.return,x)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){G(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:be(t,e),We(e),r&4&&zs(e);break;case 21:break;default:be(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vc(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(er(i,""),r.flags&=-33);var l=Ps(e);ka(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Ps(e);wa(e,s,o);break;default:throw Error(j(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qp(e,t,n){R=e,Kc(e)}function Kc(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$r;if(!o){var s=i.alternate,u=s!==null&&s.memoizedState!==null||se;s=$r;var c=se;if($r=o,(se=u)&&!c)for(R=i;R!==null;)o=R,u=o.child,o.tag===22&&o.memoizedState!==null?Is(i):u!==null?(u.return=o,R=u):Is(i);for(;l!==null;)R=l,Kc(l),l=l.sibling;R=i,$r=s,se=c}As(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,R=l):As(e)}}function As(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Bi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:De(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&gs(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gs(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ir(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}se||t.flags&512&&xa(t)}catch(m){G(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function bs(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Is(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bi(4,t)}catch(u){G(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){G(t,i,u)}}var l=t.return;try{xa(t)}catch(u){G(t,l,u)}break;case 5:var o=t.return;try{xa(t)}catch(u){G(t,o,u)}}}catch(u){G(t,t.return,u)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var Xp=Math.ceil,Ci=ut.ReactCurrentDispatcher,fo=ut.ReactCurrentOwner,Fe=ut.ReactCurrentBatchConfig,L=0,te=null,X=null,ie=0,we=0,cn=zt(0),J=0,hr=null,Qt=0,$i=0,po=0,Yn=null,me=null,mo=0,Sn=1/0,Ze=null,Ei=!1,ja=null,Nt=null,Hr=!1,yt=null,Ri=0,Jn=0,Sa=null,ti=-1,ni=0;function de(){return L&6?q():ti!==-1?ti:ti=q()}function Ct(e){return e.mode&1?L&2&&ie!==0?ie&-ie:bp.transition!==null?(ni===0&&(ni=Au()),ni):(e=M,e!==0||(e=window.event,e=e===void 0?16:Ou(e.type)),e):1}function Oe(e,t,n,r){if(50<Jn)throw Jn=0,Sa=null,Error(j(185));yr(e,n,r),(!(L&2)||e!==te)&&(e===te&&(!(L&2)&&($i|=n),J===4&&gt(e,ie)),ye(e,r),n===1&&L===0&&!(t.mode&1)&&(Sn=q()+500,_i&&At()))}function ye(e,t){var n=e.callbackNode;bf(e,t);var r=ci(e,e===te?ie:0);if(r===0)n!==null&&Ho(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ho(n),t===1)e.tag===0?Ap(Ds.bind(null,e)):ic(Ds.bind(null,e)),Tp(function(){!(L&6)&&At()}),n=null;else{switch(bu(r)){case 1:n=Oa;break;case 4:n=Pu;break;case 16:n=ui;break;case 536870912:n=zu;break;default:n=ui}n=nd(n,qc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qc(e,t){if(ti=-1,ni=0,L&6)throw Error(j(327));var n=e.callbackNode;if(gn()&&e.callbackNode!==n)return null;var r=ci(e,e===te?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ti(e,r);else{t=r;var i=L;L|=2;var l=Yc();(te!==e||ie!==t)&&(Ze=null,Sn=q()+500,Bt(e,t));do try{Zp();break}catch(s){Xc(e,s)}while(!0);Ja(),Ci.current=l,L=i,X!==null?t=0:(te=null,ie=0,t=J)}if(t!==0){if(t===2&&(i=Xl(e),i!==0&&(r=i,t=Na(e,i))),t===1)throw n=hr,Bt(e,0),gt(e,r),ye(e,q()),n;if(t===6)gt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Yp(i)&&(t=Ti(e,r),t===2&&(l=Xl(e),l!==0&&(r=l,t=Na(e,l))),t===1))throw n=hr,Bt(e,0),gt(e,r),ye(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Mt(e,me,Ze);break;case 3:if(gt(e,r),(r&130023424)===r&&(t=mo+500-q(),10<t)){if(ci(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ia(Mt.bind(null,e,me,Ze),t);break}Mt(e,me,Ze);break;case 4:if(gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-_e(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xp(r/1960))-r,10<r){e.timeoutHandle=ia(Mt.bind(null,e,me,Ze),r);break}Mt(e,me,Ze);break;case 5:Mt(e,me,Ze);break;default:throw Error(j(329))}}}return ye(e,q()),e.callbackNode===n?qc.bind(null,e):null}function Na(e,t){var n=Yn;return e.current.memoizedState.isDehydrated&&(Bt(e,t).flags|=256),e=Ti(e,t),e!==2&&(t=me,me=n,t!==null&&Ca(t)),e}function Ca(e){me===null?me=e:me.push.apply(me,e)}function Yp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Be(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gt(e,t){for(t&=~po,t&=~$i,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_e(t),r=1<<n;e[n]=-1,t&=~r}}function Ds(e){if(L&6)throw Error(j(327));gn();var t=ci(e,0);if(!(t&1))return ye(e,q()),null;var n=Ti(e,t);if(e.tag!==0&&n===2){var r=Xl(e);r!==0&&(t=r,n=Na(e,r))}if(n===1)throw n=hr,Bt(e,0),gt(e,t),ye(e,q()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,me,Ze),ye(e,q()),null}function ho(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(Sn=q()+500,_i&&At())}}function Gt(e){yt!==null&&yt.tag===0&&!(L&6)&&gn();var t=L;L|=1;var n=Fe.transition,r=M;try{if(Fe.transition=null,M=1,e)return e()}finally{M=r,Fe.transition=n,L=t,!(L&6)&&At()}}function go(){we=cn.current,B(cn)}function Bt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rp(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(qa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hi();break;case 3:kn(),B(ge),B(ue),io();break;case 5:ro(r);break;case 4:kn();break;case 13:B(H);break;case 19:B(H);break;case 10:Za(r.type._context);break;case 22:case 23:go()}n=n.return}if(te=e,X=e=Et(e.current,null),ie=we=t,J=0,hr=null,po=$i=Qt=0,me=Yn=null,Ot!==null){for(t=0;t<Ot.length;t++)if(n=Ot[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Ot=null}return e}function Xc(e,t){do{var n=X;try{if(Ja(),Jr.current=Ni,Si){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Si=!1}if(Vt=0,ee=Y=W=null,qn=!1,fr=0,fo.current=null,n===null||n.return===null){J=1,hr=t,X=null;break}e:{var l=e,o=n.return,s=n,u=t;if(t=ie,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=js(o);if(y!==null){y.flags&=-257,Ss(y,o,s,l,t),y.mode&1&&ks(l,c,t),t=y,u=c;var w=t.updateQueue;if(w===null){var x=new Set;x.add(u),t.updateQueue=x}else w.add(u);break e}else{if(!(t&1)){ks(l,c,t),vo();break e}u=Error(j(426))}}else if($&&s.mode&1){var N=js(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Ss(N,o,s,l,t),Xa(jn(u,s));break e}}l=u=jn(u,s),J!==4&&(J=2),Yn===null?Yn=[l]:Yn.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=bc(l,u,t);hs(l,f);break e;case 1:s=u;var d=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Nt===null||!Nt.has(g)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=Ic(l,s,t);hs(l,k);break e}}l=l.return}while(l!==null)}Zc(n)}catch(S){t=S,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function Yc(){var e=Ci.current;return Ci.current=Ni,e===null?Ni:e}function vo(){(J===0||J===3||J===2)&&(J=4),te===null||!(Qt&268435455)&&!($i&268435455)||gt(te,ie)}function Ti(e,t){var n=L;L|=2;var r=Yc();(te!==e||ie!==t)&&(Ze=null,Bt(e,t));do try{Jp();break}catch(i){Xc(e,i)}while(!0);if(Ja(),L=n,Ci.current=r,X!==null)throw Error(j(261));return te=null,ie=0,J}function Jp(){for(;X!==null;)Jc(X)}function Zp(){for(;X!==null&&!Nf();)Jc(X)}function Jc(e){var t=td(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?Zc(e):X=t,fo.current=null}function Zc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,X=null;return}}else if(n=Vp(n,t,we),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);J===0&&(J=5)}function Mt(e,t,n){var r=M,i=Fe.transition;try{Fe.transition=null,M=1,em(e,t,n,r)}finally{Fe.transition=i,M=r}return null}function em(e,t,n,r){do gn();while(yt!==null);if(L&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(If(e,l),e===te&&(X=te=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hr||(Hr=!0,nd(ui,function(){return gn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Fe.transition,Fe.transition=null;var o=M;M=1;var s=L;L|=4,fo.current=null,Kp(e,n),Gc(n,e),wp(na),di=!!ta,na=ta=null,e.current=n,qp(n),Cf(),L=s,M=o,Fe.transition=l}else e.current=n;if(Hr&&(Hr=!1,yt=e,Ri=i),l=e.pendingLanes,l===0&&(Nt=null),Tf(n.stateNode),ye(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ei)throw Ei=!1,e=ja,ja=null,e;return Ri&1&&e.tag!==0&&gn(),l=e.pendingLanes,l&1?e===Sa?Jn++:(Jn=0,Sa=e):Jn=0,At(),null}function gn(){if(yt!==null){var e=bu(Ri),t=Fe.transition,n=M;try{if(Fe.transition=null,M=16>e?16:e,yt===null)var r=!1;else{if(e=yt,yt=null,Ri=0,L&6)throw Error(j(331));var i=L;for(L|=4,R=e.current;R!==null;){var l=R,o=l.child;if(R.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(R=c;R!==null;){var h=R;switch(h.tag){case 0:case 11:case 15:Xn(8,h,l)}var p=h.child;if(p!==null)p.return=h,R=p;else for(;R!==null;){h=R;var m=h.sibling,y=h.return;if(Wc(h),h===c){R=null;break}if(m!==null){m.return=y,R=m;break}R=y}}}var w=l.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var N=x.sibling;x.sibling=null,x=N}while(x!==null)}}R=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,R=o;else e:for(;R!==null;){if(l=R,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Xn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,R=f;break e}R=l.return}}var d=e.current;for(R=d;R!==null;){o=R;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,R=g;else e:for(o=d;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Bi(9,s)}}catch(S){G(s,s.return,S)}if(s===o){R=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,R=k;break e}R=s.return}}if(L=i,At(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(bi,e)}catch{}r=!0}return r}finally{M=n,Fe.transition=t}}return!1}function Ls(e,t,n){t=jn(n,t),t=bc(e,t,1),e=St(e,t,1),t=de(),e!==null&&(yr(e,1,t),ye(e,t))}function G(e,t,n){if(e.tag===3)Ls(e,e,n);else for(;t!==null;){if(t.tag===3){Ls(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=jn(n,e),e=Ic(t,e,1),t=St(t,e,1),e=de(),t!==null&&(yr(t,1,e),ye(t,e));break}}t=t.return}}function tm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(ie&n)===n&&(J===4||J===3&&(ie&130023424)===ie&&500>q()-mo?Bt(e,0):po|=n),ye(e,t)}function ed(e,t){t===0&&(e.mode&1?(t=br,br<<=1,!(br&130023424)&&(br=4194304)):t=1);var n=de();e=at(e,t),e!==null&&(yr(e,t,n),ye(e,n))}function nm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ed(e,n)}function rm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),ed(e,n)}var td;td=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,Wp(e,t,n);he=!!(e.flags&131072)}else he=!1,$&&t.flags&1048576&&lc(t,yi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ei(e,t),e=t.pendingProps;var i=yn(t,ue.current);hn(t,n),i=ao(null,t,r,e,i,n);var l=oo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(l=!0,gi(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,to(t),i.updater=Ui,t.stateNode=i,i._reactInternals=t,da(t,r,e,n),t=ma(null,t,r,!0,l,n)):(t.tag=0,$&&l&&Ka(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ei(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=lm(r),e=De(r,e),i){case 0:t=pa(null,t,r,e,n);break e;case 1:t=Es(null,t,r,e,n);break e;case 11:t=Ns(null,t,r,e,n);break e;case 14:t=Cs(null,t,r,De(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),pa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Es(e,t,r,i,n);case 3:e:{if(_c(t),e===null)throw Error(j(387));r=t.pendingProps,l=t.memoizedState,i=l.element,dc(e,t),ki(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=jn(Error(j(423)),t),t=Rs(e,t,r,n,i);break e}else if(r!==i){i=jn(Error(j(424)),t),t=Rs(e,t,r,n,i);break e}else for(ke=jt(t.stateNode.containerInfo.firstChild),je=t,$=!0,Me=null,n=uc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xn(),r===i){t=ot(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return fc(t),e===null&&sa(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,ra(r,i)?o=null:l!==null&&ra(r,l)&&(t.flags|=32),Mc(e,t),ce(e,t,o,n),t.child;case 6:return e===null&&sa(t),null;case 13:return Oc(e,t,n);case 4:return no(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Ns(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,O(xi,r._currentValue),r._currentValue=o,l!==null)if(Be(l.value,o)){if(l.children===i.children&&!ge.current){t=ot(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=rt(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),ua(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(j(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ua(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,hn(t,n),i=Pe(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=De(r,t.pendingProps),i=De(r.type,i),Cs(e,t,r,i,n);case 15:return Dc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),ei(e,t),t.tag=1,ve(r)?(e=!0,gi(t)):e=!1,hn(t,n),Ac(t,r,i),da(t,r,i,n),ma(null,t,r,!0,e,n);case 19:return Uc(e,t,n);case 22:return Lc(e,t,n)}throw Error(j(156,t.tag))};function nd(e,t){return Fu(e,t)}function im(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new im(e,t,n,r)}function yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lm(e){if(typeof e=="function")return yo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===La)return 11;if(e===Ma)return 14}return 2}function Et(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ri(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")yo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Zt:return $t(n.children,i,l,t);case Da:o=8,i|=8;break;case Dl:return e=Te(12,n,t,i|2),e.elementType=Dl,e.lanes=l,e;case Ll:return e=Te(13,n,t,i),e.elementType=Ll,e.lanes=l,e;case Ml:return e=Te(19,n,t,i),e.elementType=Ml,e.lanes=l,e;case fu:return Hi(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cu:o=10;break e;case du:o=9;break e;case La:o=11;break e;case Ma:o=14;break e;case pt:o=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Te(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function $t(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Hi(e,t,n,r){return e=Te(22,e,r,t),e.elementType=fu,e.lanes=n,e.stateNode={isHidden:!1},e}function Tl(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function Fl(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function am(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xo(e,t,n,r,i,l,o,s,u){return e=new am(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Te(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},to(l),e}function om(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rd(e){if(!e)return Tt;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(ve(n))return rc(e,n,t)}return t}function id(e,t,n,r,i,l,o,s,u){return e=xo(n,r,!0,e,i,l,o,s,u),e.context=rd(null),n=e.current,r=de(),i=Ct(n),l=rt(r,i),l.callback=t??null,St(n,l,i),e.current.lanes=i,yr(e,i,r),ye(e,r),e}function Wi(e,t,n,r){var i=t.current,l=de(),o=Ct(i);return n=rd(n),t.context===null?t.context=n:t.pendingContext=n,t=rt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=St(i,t,o),e!==null&&(Oe(e,i,o,l),Yr(e,i,o)),o}function Fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ms(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wo(e,t){Ms(e,t),(e=e.alternate)&&Ms(e,t)}function sm(){return null}var ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function ko(e){this._internalRoot=e}Vi.prototype.render=ko.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Wi(e,t,null,null)};Vi.prototype.unmount=ko.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gt(function(){Wi(null,e,null,null)}),t[lt]=null}};function Vi(e){this._internalRoot=e}Vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ht.length&&t!==0&&t<ht[n].priority;n++);ht.splice(n,0,e),n===0&&_u(e)}};function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _s(){}function um(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=Fi(o);l.call(c)}}var o=id(t,r,e,0,null,!1,!1,"",_s);return e._reactRootContainer=o,e[lt]=o.current,or(e.nodeType===8?e.parentNode:e),Gt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Fi(u);s.call(c)}}var u=xo(e,0,!1,null,null,!1,!1,"",_s);return e._reactRootContainer=u,e[lt]=u.current,or(e.nodeType===8?e.parentNode:e),Gt(function(){Wi(t,u,n,r)}),u}function Gi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var u=Fi(o);s.call(u)}}Wi(t,o,e,i)}else o=um(n,t,e,i,r);return Fi(o)}Iu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$n(t.pendingLanes);n!==0&&(Ua(t,n|1),ye(t,q()),!(L&6)&&(Sn=q()+500,At()))}break;case 13:Gt(function(){var r=at(e,1);if(r!==null){var i=de();Oe(r,e,1,i)}}),wo(e,1)}};Ba=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var n=de();Oe(t,e,134217728,n)}wo(e,134217728)}};Du=function(e){if(e.tag===13){var t=Ct(e),n=at(e,t);if(n!==null){var r=de();Oe(n,e,t,r)}wo(e,t)}};Lu=function(){return M};Mu=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Gl=function(e,t,n){switch(t){case"input":if(Ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Mi(r);if(!i)throw Error(j(90));mu(r),Ul(r,i)}}}break;case"textarea":gu(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}};Su=ho;Nu=Gt;var cm={usingClientEntryPoint:!1,Events:[wr,rn,Mi,ku,ju,ho]},_n={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dm={bundleType:_n.bundleType,version:_n.version,rendererPackageName:_n.rendererPackageName,rendererConfig:_n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ru(e),e===null?null:e.stateNode},findFiberByHostInstance:_n.findFiberByHostInstance||sm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{bi=Wr.inject(dm),Ge=Wr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cm;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jo(t))throw Error(j(200));return om(e,t,null,n)};Ne.createRoot=function(e,t){if(!jo(e))throw Error(j(299));var n=!1,r="",i=ld;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xo(e,1,!1,null,null,n,!1,r,i),e[lt]=t.current,or(e.nodeType===8?e.parentNode:e),new ko(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Ru(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Gt(e)};Ne.hydrate=function(e,t,n){if(!Qi(t))throw Error(j(200));return Gi(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!jo(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=ld;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=id(t,null,e,1,n??null,i,!1,l,o),e[lt]=t.current,or(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Vi(t)};Ne.render=function(e,t,n){if(!Qi(t))throw Error(j(200));return Gi(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Qi(e))throw Error(j(40));return e._reactRootContainer?(Gt(function(){Gi(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};Ne.unstable_batchedUpdates=ho;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qi(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Gi(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function ad(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ad)}catch(e){console.error(e)}}ad(),au.exports=Ne;var fm=au.exports,Os=fm;bl.createRoot=Os.createRoot,bl.hydrateRoot=Os.hydrateRoot;/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var So=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,od=/^[\\/]{2}/;function pm(e,t){return t+e.replace(/\\/g,"/")}var Us="popstate";function Bs(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function mm(e={}){function t(r,i){var c;let l=(c=i.state)==null?void 0:c.masked,{pathname:o,search:s,hash:u}=l||r.location;return Ea("",{pathname:o,search:s,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default",l?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,i){return typeof i=="string"?i:gr(i)}return gm(t,n,null,e)}function V(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qe(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hm(){return Math.random().toString(36).substring(2,10)}function $s(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Ea(e,t,n=null,r,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Tn(t):t,state:n,key:t&&t.key||r||hm(),mask:i}}function gr({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Tn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function gm(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s="POP",u=null,c=h();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function h(){return(o.state||{idx:null}).idx}function p(){s="POP";let N=h(),f=N==null?null:N-c;c=N,u&&u({action:s,location:x.location,delta:f})}function m(N,f){s="PUSH";let d=Bs(N)?N:Ea(x.location,N,f);c=h()+1;let g=$s(d,c),k=x.createHref(d.mask||d);try{o.pushState(g,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(k)}l&&u&&u({action:s,location:x.location,delta:1})}function y(N,f){s="REPLACE";let d=Bs(N)?N:Ea(x.location,N,f);c=h();let g=$s(d,c),k=x.createHref(d.mask||d);o.replaceState(g,"",k),l&&u&&u({action:s,location:x.location,delta:0})}function w(N){return vm(i,N)}let x={get action(){return s},get location(){return e(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Us,p),u=N,()=>{i.removeEventListener(Us,p),u=null}},createHref(N){return t(i,N)},createURL:w,encodeLocation(N){let f=w(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:y,go(N){return o.go(N)}};return x}function vm(e,t,n=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),V(r,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:gr(t);return i=i.replace(/ $/,"%20"),!n&&od.test(i)&&(i=r+i),new URL(i,r)}function sd(e,t,n="/"){return ym(e,t,n,!1)}function ym(e,t,n,r,i){let l=typeof t=="string"?Tn(t):t,o=st(l.pathname||"/",n);if(o==null)return null;let s=xm(e),u=null,c=Pm(o);for(let h=0;u==null&&h<s.length;++h)u=Fm(s[h],c,r);return u}function xm(e){let t=ud(e);return wm(t),t}function ud(e,t=[],n=[],r="",i=!1){let l=(o,s,u=i,c)=>{let h={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(r)&&u)return;V(h.relativePath.startsWith(r),`Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(r.length)}let p=Ue([r,h.relativePath]),m=n.concat(h);o.children&&o.children.length>0&&(V(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),ud(o.children,t,m,p,u)),!(o.path==null&&!o.index)&&t.push({path:p,score:Rm(p,o.index),routesMeta:m.map((y,w)=>{let[x,N]=fd(y.relativePath,y.caseSensitive,w===m.length-1);return{...y,matcher:x,compiledParams:N}})})};return e.forEach((o,s)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))l(o,s);else for(let c of cd(o.path))l(o,s,!0,c)}),t}function cd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=cd(r.join("/")),s=[];return s.push(...o.map(u=>u===""?l:[l,u].join("/"))),i&&s.push(...o),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function wm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Tm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var km=/^:[\w-]+$/,jm=3,Sm=2,Nm=1,Cm=10,Em=-2,Hs=e=>e==="*";function Rm(e,t){let n=e.split("/"),r=n.length;return n.some(Hs)&&(r+=Em),t&&(r+=Sm),n.filter(i=>!Hs(i)).reduce((i,l)=>i+(km.test(l)?jm:l===""?Nm:Cm),r)}function Tm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Fm(e,t,n=!1){let{routesMeta:r}=e,i={},l="/",o=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,h=l==="/"?t:t.slice(l.length)||"/",p={path:u.relativePath,caseSensitive:u.caseSensitive,end:c},m=u.matcher&&u.compiledParams?dd(p,h,u.matcher,u.compiledParams):Pi(p,h),y=u.route;if(!m&&c&&n&&!r[r.length-1].route.index&&(m=Pi({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:Ue([l,m.pathname]),pathnameBase:bm(Ue([l,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(l=Ue([l,m.pathnameBase]))}return o}function Pi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fd(e.path,e.caseSensitive,e.end);return dd(e,t,n,r)}function dd(e,t,n,r){let i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,{paramName:h,isOptional:p},m)=>{if(h==="*"){let w=s[m]||"";o=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const y=s[m];return p&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:o,pattern:e}}function fd(e,t=!1,n=!0){qe(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,u,c,h)=>{if(r.push({paramName:s,isOptional:u!=null}),u){let p=h.charAt(c+o.length);return p&&p!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Pm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return qe(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function st(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function zm(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Tn(e):e,l;return n?(n=md(n),n.startsWith("/")?l=Ws(n.substring(1),"/"):l=Ws(n,t)):l=t,{pathname:l,search:Im(r),hash:Dm(i)}}function Ws(e,t){let n=zi(t).split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pl(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Am(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function pd(e){let t=Am(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function No(e,t,n,r=!1){let i;typeof e=="string"?i=Tn(e):(i={...e},V(!i.pathname||!i.pathname.includes("?"),Pl("?","pathname","search",i)),V(!i.pathname||!i.pathname.includes("#"),Pl("#","pathname","hash",i)),V(!i.search||!i.search.includes("#"),Pl("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=n;else{let p=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}s=p>=0?t[p]:"/"}let u=zm(i,s),c=o&&o!=="/"&&o.endsWith("/"),h=(l||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}var md=e=>e.replace(/[\\/]{2,}/g,"/"),Ue=e=>md(e.join("/")),zi=e=>e.replace(/\/+$/,""),bm=e=>zi(e).replace(/^\/*/,"/"),Im=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Dm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Lm=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Mm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function _m(e){let t=e.map(n=>n.route.path).filter(Boolean);return Ue(t)||"/"}var hd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function gd(e,t){let n=e;if(typeof n!="string"||!So.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(hd)try{let l=new URL(window.location.href),o=od.test(n)?new URL(pm(n,l.protocol)):new URL(n),s=st(o.pathname,t);o.origin===l.origin&&s!=null?n=s+o.search+o.hash:i=!0}catch{qe(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var vd=["POST","PUT","PATCH","DELETE"];new Set(vd);var Om=["GET",...vd];new Set(Om);var Um=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Bm(e){try{return Um.includes(new URL(e).protocol)}catch{return!1}}var Fn=v.createContext(null);Fn.displayName="DataRouter";var Ki=v.createContext(null);Ki.displayName="DataRouterState";var yd=v.createContext(!1);function $m(){return v.useContext(yd)}var xd=v.createContext({isTransitioning:!1});xd.displayName="ViewTransition";var Hm=v.createContext(new Map);Hm.displayName="Fetchers";var Wm=v.createContext(null);Wm.displayName="Await";var Ae=v.createContext(null);Ae.displayName="Navigation";var jr=v.createContext(null);jr.displayName="Location";var Ye=v.createContext({outlet:null,matches:[],isDataRoute:!1});Ye.displayName="Route";var Co=v.createContext(null);Co.displayName="RouteError";var wd="REACT_ROUTER_ERROR",Vm="REDIRECT",Qm="ROUTE_ERROR_RESPONSE";function Gm(e){if(e.startsWith(`${wd}:${Vm}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Km(e){if(e.startsWith(`${wd}:${Qm}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Lm(t.status,t.statusText,t.data)}catch{}}function qm(e,{relative:t}={}){V(Sr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=v.useContext(Ae),{hash:i,pathname:l,search:o}=Nr(e,{relative:t}),s=l;return n!=="/"&&(s=l==="/"?n:Ue([n,l])),r.createHref({pathname:s,search:o,hash:i})}function Sr(){return v.useContext(jr)!=null}function Je(){return V(Sr(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(jr).location}var kd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jd(e){v.useContext(Ae).static||v.useLayoutEffect(e)}function Xm(){let{isDataRoute:e}=v.useContext(Ye);return e?uh():Ym()}function Ym(){V(Sr(),"useNavigate() may be used only in the context of a <Router> component.");let e=v.useContext(Fn),{basename:t,navigator:n}=v.useContext(Ae),{matches:r}=v.useContext(Ye),{pathname:i}=Je(),l=JSON.stringify(pd(r)),o=v.useRef(!1);return jd(()=>{o.current=!0}),v.useCallback((u,c={})=>{if(qe(o.current,kd),!o.current)return;if(typeof u=="number"){n.go(u);return}let h=No(u,JSON.parse(l),i,c.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Ue([t,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[t,n,l,i,e])}v.createContext(null);function Sd(){let{matches:e}=v.useContext(Ye),t=e[e.length-1];return(t==null?void 0:t.params)??{}}function Nr(e,{relative:t}={}){let{matches:n}=v.useContext(Ye),{pathname:r}=Je(),i=JSON.stringify(pd(n));return v.useMemo(()=>No(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function Jm(e,t){return Nd(e,t)}function Nd(e,t,n){var N;V(Sr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=v.useContext(Ae),{matches:i}=v.useContext(Ye),l=i[i.length-1],o=l?l.params:{},s=l?l.pathname:"/",u=l?l.pathnameBase:"/",c=l&&l.route;{let f=c&&c.path||"";Ed(s,!c||f.endsWith("*")||f.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${f==="/"?"*":`${f}/*`}">.`)}let h=Je(),p;if(t){let f=typeof t=="string"?Tn(t):t;V(u==="/"||((N=f.pathname)==null?void 0:N.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${f.pathname}" was given in the \`location\` prop.`),p=f}else p=h;let m=p.pathname||"/",y=m;if(u!=="/"){let f=u.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(f.length).join("/")}let w=n&&n.state.matches.length?n.state.matches.map(f=>Object.assign(f,{route:n.manifest[f.route.id]||f.route})):sd(e,{pathname:y});qe(c||w!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),qe(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=rh(w&&w.map(f=>Object.assign({},f,{params:Object.assign({},o,f.params),pathname:Ue([u,r.encodeLocation?r.encodeLocation(f.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:Ue([u,r.encodeLocation?r.encodeLocation(f.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathnameBase])})),i,n);return t&&x?v.createElement(jr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...p},navigationType:"POP"}},x):x}function Zm(){let e=sh(),t=Mm(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:l},"ErrorBoundary")," or"," ",v.createElement("code",{style:l},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:i},n):null,o)}var eh=v.createElement(Zm,null),Cd=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=Km(e.digest);n&&(e=n)}let t=e!==void 0?v.createElement(Ye.Provider,{value:this.props.routeContext},v.createElement(Co.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?v.createElement(th,{error:e},t):t}};Cd.contextType=yd;var zl=new WeakMap;function th({children:e,error:t}){let{basename:n}=v.useContext(Ae);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=Gm(t.digest);if(r){let i=zl.get(t);if(i)throw i;let l=gd(r.location,n),o=l.absoluteURL||l.to;if(Bm(o))throw new Error("Invalid redirect location");if(hd&&!zl.get(t))if(l.isExternal||r.reloadDocument)window.location.href=o;else{const s=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:r.replace}));throw zl.set(t,s),s}return v.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o}`})}}return e}function nh({routeContext:e,match:t,children:n}){let r=v.useContext(Fn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(Ye.Provider,{value:e},n)}function rh(e,t=[],n){let r=n==null?void 0:n.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,l=r==null?void 0:r.errors;if(l!=null){let h=i.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);V(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),i=i.slice(0,Math.min(i.length,h+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let h=0;h<i.length;h++){let p=i[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(s=h),p.route.id){let{loaderData:m,errors:y}=r,w=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!y||y[p.route.id]===void 0);if(p.route.lazy||w){n.isStatic&&(o=!0),s>=0?i=i.slice(0,s+1):i=[i[0]];break}}}}let u=n==null?void 0:n.onError,c=r&&u?(h,p)=>{var m,y;u(h,{location:r.location,params:((y=(m=r.matches)==null?void 0:m[0])==null?void 0:y.params)??{},pattern:_m(r.matches),errorInfo:p})}:void 0;return i.reduceRight((h,p,m)=>{let y,w=!1,x=null,N=null;r&&(y=l&&p.route.id?l[p.route.id]:void 0,x=p.route.errorElement||eh,o&&(s<0&&m===0?(Ed("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,N=null):s===m&&(w=!0,N=p.route.hydrateFallbackElement||null)));let f=t.concat(i.slice(0,m+1)),d=()=>{let g;return y?g=x:w?g=N:p.route.Component?g=v.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=h,v.createElement(nh,{match:p,routeContext:{outlet:h,matches:f,isDataRoute:r!=null},children:g})};return r&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?v.createElement(Cd,{location:r.location,revalidation:r.revalidation,component:x,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:c}):d()},null)}function Eo(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ih(e){let t=v.useContext(Fn);return V(t,Eo(e)),t}function lh(e){let t=v.useContext(Ki);return V(t,Eo(e)),t}function ah(e){let t=v.useContext(Ye);return V(t,Eo(e)),t}function Ro(e){let t=ah(e),n=t.matches[t.matches.length-1];return V(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function oh(){return Ro("useRouteId")}function sh(){var r;let e=v.useContext(Co),t=lh("useRouteError"),n=Ro("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function uh(){let{router:e}=ih("useNavigate"),t=Ro("useNavigate"),n=v.useRef(!1);return jd(()=>{n.current=!0}),v.useCallback(async(i,l={})=>{qe(n.current,kd),n.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...l}))},[e,t])}var Vs={};function Ed(e,t,n){!t&&!Vs[e]&&(Vs[e]=!0,qe(!1,n))}v.memo(ch);function ch({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:l}){return Nd(e,void 0,{manifest:t,state:r,isStatic:i,onError:l})}function Ie(e){V(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dh({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:l=!1,useTransitions:o}){V(!Sr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:s,navigator:i,static:l,useTransitions:o,future:{}}),[s,i,l,o]);typeof n=="string"&&(n=Tn(n));let{pathname:c="/",search:h="",hash:p="",state:m=null,key:y="default",mask:w}=n,x=v.useMemo(()=>{let N=st(c,s);return N==null?null:{location:{pathname:N,search:h,hash:p,state:m,key:y,mask:w},navigationType:r}},[s,c,h,p,m,y,r,w]);return qe(x!=null,`<Router basename="${s}"> is not able to match the URL "${c}${h}${p}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:v.createElement(Ae.Provider,{value:u},v.createElement(jr.Provider,{children:t,value:x}))}function fh({children:e,location:t}){return Jm(Ra(e),t)}function Ra(e,t=[]){let n=[];return v.Children.forEach(e,(r,i)=>{if(!v.isValidElement(r))return;let l=[...t,i];if(r.type===v.Fragment){n.push.apply(n,Ra(r.props.children,l));return}V(r.type===Ie,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),V(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ra(r.props.children,l)),n.push(o)}),n}var ii="get",li="application/x-www-form-urlencoded";function qi(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function ph(e){return qi(e)&&e.tagName.toLowerCase()==="button"}function mh(e){return qi(e)&&e.tagName.toLowerCase()==="form"}function hh(e){return qi(e)&&e.tagName.toLowerCase()==="input"}function gh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vh(e,t){return e.button===0&&(!t||t==="_self")&&!gh(e)}var Vr=null;function yh(){if(Vr===null)try{new FormData(document.createElement("form"),0),Vr=!1}catch{Vr=!0}return Vr}var xh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Al(e){return e!=null&&!xh.has(e)?(qe(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${li}"`),null):e}function wh(e,t){let n,r,i,l,o;if(mh(e)){let s=e.getAttribute("action");r=s?st(s,t):null,n=e.getAttribute("method")||ii,i=Al(e.getAttribute("enctype"))||li,l=new FormData(e)}else if(ph(e)||hh(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||s.getAttribute("action");if(r=u?st(u,t):null,n=e.getAttribute("formmethod")||s.getAttribute("method")||ii,i=Al(e.getAttribute("formenctype"))||Al(s.getAttribute("enctype"))||li,l=new FormData(s,e),!yh()){let{name:c,type:h,value:p}=e;if(h==="image"){let m=c?`${c}.`:"";l.append(`${m}x`,"0"),l.append(`${m}y`,"0")}else c&&l.append(c,p)}}else{if(qi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ii,r=null,i=li,o=e}return l&&i==="text/plain"&&(o=l,l=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:l,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function To(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rd(e,t,n,r){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname==="/"?i.pathname=`_root.${r}`:t&&st(i.pathname,t)==="/"?i.pathname=`${zi(t)}/_root.${r}`:i.pathname=`${zi(i.pathname)}.${r}`,i}async function kh(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jh(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Sh(e,t,n){let r=await Promise.all(e.map(async i=>{let l=t.routes[i.route.id];if(l){let o=await kh(l,n);return o.links?o.links():[]}return[]}));return Rh(r.flat(1).filter(jh).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Qs(e,t,n,r,i,l){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,s=(u,c)=>{var h;return n[c].pathname!==u.pathname||((h=n[c].route.path)==null?void 0:h.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return l==="assets"?t.filter((u,c)=>o(u,c)||s(u,c)):l==="data"?t.filter((u,c)=>{var p;let h=r.routes[u.route.id];if(!h||!h.hasLoader)return!1;if(o(u,c)||s(u,c))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function Nh(e,t,{includeHydrateFallback:n}={}){return Ch(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let l=[i.module];return i.clientActionModule&&(l=l.concat(i.clientActionModule)),i.clientLoaderModule&&(l=l.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(l=l.concat(i.hydrateFallbackModule)),i.imports&&(l=l.concat(i.imports)),l}).flat(1))}function Ch(e){return[...new Set(e)]}function Eh(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Rh(e,t){let n=new Set;return new Set(t),e.reduce((r,i)=>{let l=JSON.stringify(Eh(i));return n.has(l)||(n.add(l),r.push({key:l,link:i})),r},[])}function Fo(){let e=v.useContext(Fn);return To(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Th(){let e=v.useContext(Ki);return To(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Po=v.createContext(void 0);Po.displayName="FrameworkContext";function Xi(){let e=v.useContext(Po);return To(e,"You must render this element inside a <HydratedRouter> element"),e}function Fh(e,t){let n=v.useContext(Po),[r,i]=v.useState(!1),[l,o]=v.useState(!1),{onFocus:s,onBlur:u,onMouseEnter:c,onMouseLeave:h,onTouchStart:p}=t,m=v.useRef(null);v.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let x=f=>{f.forEach(d=>{o(d.isIntersecting)})},N=new IntersectionObserver(x,{threshold:.5});return m.current&&N.observe(m.current),()=>{N.disconnect()}}},[e]),v.useEffect(()=>{if(r){let x=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(x)}}},[r]);let y=()=>{i(!0)},w=()=>{i(!1),o(!1)};return n?e!=="intent"?[l,m,{}]:[l,m,{onFocus:On(s,y),onBlur:On(u,w),onMouseEnter:On(c,y),onMouseLeave:On(h,w),onTouchStart:On(p,y)}]:[!1,m,{}]}function On(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Ph({page:e,...t}){let n=$m(),{nonce:r}=Xi(),{router:i}=Fo(),l=v.useMemo(()=>sd(i.routes,e,i.basename),[i.routes,e,i.basename]);return l?(t.nonce==null&&r&&(t={...t,nonce:r}),n?v.createElement(Ah,{page:e,matches:l,...t}):v.createElement(bh,{page:e,matches:l,...t})):null}function zh(e){let{manifest:t,routeModules:n}=Xi(),[r,i]=v.useState([]);return v.useEffect(()=>{let l=!1;return Sh(e,t,n).then(o=>{l||i(o)}),()=>{l=!0}},[e,t,n]),r}function Ah({page:e,matches:t,...n}){let r=Je(),{future:i}=Xi(),{basename:l}=Fo(),o=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let s=Rd(e,l,i.v8_trailingSlashAwareDataRequests,"rsc"),u=!1,c=[];for(let h of t)typeof h.route.shouldRevalidate=="function"?u=!0:c.push(h.route.id);return u&&c.length>0&&s.searchParams.set("_routes",c.join(",")),[s.pathname+s.search]},[l,i.v8_trailingSlashAwareDataRequests,e,r,t]);return v.createElement(v.Fragment,null,o.map(s=>v.createElement("link",{key:s,rel:"prefetch",as:"fetch",href:s,...n})))}function bh({page:e,matches:t,...n}){let r=Je(),{future:i,manifest:l,routeModules:o}=Xi(),{basename:s}=Fo(),{loaderData:u,matches:c}=Th(),h=v.useMemo(()=>Qs(e,t,c,l,r,"data"),[e,t,c,l,r]),p=v.useMemo(()=>Qs(e,t,c,l,r,"assets"),[e,t,c,l,r]),m=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let x=new Set,N=!1;if(t.forEach(d=>{var k;let g=l.routes[d.route.id];!g||!g.hasLoader||(!h.some(S=>S.route.id===d.route.id)&&d.route.id in u&&((k=o[d.route.id])!=null&&k.shouldRevalidate)||g.hasClientLoader?N=!0:x.add(d.route.id))}),x.size===0)return[];let f=Rd(e,s,i.v8_trailingSlashAwareDataRequests,"data");return N&&x.size>0&&f.searchParams.set("_routes",t.filter(d=>x.has(d.route.id)).map(d=>d.route.id).join(",")),[f.pathname+f.search]},[s,i.v8_trailingSlashAwareDataRequests,u,r,l,h,t,e,o]),y=v.useMemo(()=>Nh(p,l),[p,l]),w=zh(p);return v.createElement(v.Fragment,null,m.map(x=>v.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),y.map(x=>v.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),w.map(({key:x,link:N})=>v.createElement("link",{key:x,nonce:n.nonce,...N,crossOrigin:N.crossOrigin??n.crossOrigin})))}function Ih(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Dh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dh&&(window.__reactRouterVersion="7.18.2")}catch{}function Lh({basename:e,children:t,useTransitions:n,window:r}){let i=v.useRef();i.current==null&&(i.current=mm({window:r,v5Compat:!0}));let l=i.current,[o,s]=v.useState({action:l.action,location:l.location}),u=v.useCallback(c=>{n===!1?s(c):v.startTransition(()=>s(c))},[n]);return v.useLayoutEffect(()=>l.listen(u),[l,u]),v.createElement(dh,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:l,useTransitions:n})}var I=v.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:l,replace:o,mask:s,state:u,target:c,to:h,preventScrollReset:p,viewTransition:m,defaultShouldRevalidate:y,...w},x){let{basename:N,navigator:f,useTransitions:d}=v.useContext(Ae),g=typeof h=="string"&&So.test(h),k=gd(h,N);h=k.to;let S=qm(h,{relative:i}),C=Je(),E=null;if(s){let He=No(s,[],C.mask?C.mask.pathname:"/",!0);N!=="/"&&(He.pathname=He.pathname==="/"?N:Ue([N,He.pathname])),E=f.createHref(He)}let[F,_,z]=Fh(r,w),xe=Oh(h,{replace:o,mask:s,state:u,target:c,preventScrollReset:p,relative:i,viewTransition:m,defaultShouldRevalidate:y,useTransitions:d});function bt(He){t&&t(He),He.defaultPrevented||xe(He)}let ct=!(k.isExternal||l),Pn=v.createElement("a",{...w,...z,href:(ct?E:void 0)||k.absoluteURL||S,onClick:ct?bt:t,ref:Ih(x,_),target:c,"data-discover":!g&&n==="render"?"true":void 0});return F&&!g?v.createElement(v.Fragment,null,Pn,v.createElement(Ph,{page:S})):Pn});I.displayName="Link";var ft=v.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:l,to:o,viewTransition:s,children:u,...c},h){let p=Nr(o,{relative:c.relative}),m=Je(),y=v.useContext(Ki),{navigator:w,basename:x}=v.useContext(Ae),N=y!=null&&Wh(p)&&s===!0,f=w.encodeLocation?w.encodeLocation(p).pathname:p.pathname,d=m.pathname,g=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(d=d.toLowerCase(),g=g?g.toLowerCase():null,f=f.toLowerCase()),g&&x&&(g=st(g,x)||g);const k=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let S=d===f||!i&&d.startsWith(f)&&d.charAt(k)==="/",C=g!=null&&(g===f||!i&&g.startsWith(f)&&g.charAt(f.length)==="/"),E={isActive:S,isPending:C,isTransitioning:N},F=S?t:void 0,_;typeof r=="function"?_=r(E):_=[r,S?"active":null,C?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let z=typeof l=="function"?l(E):l;return v.createElement(I,{...c,"aria-current":F,className:_,ref:h,style:z,to:o,viewTransition:s},typeof u=="function"?u(E):u)});ft.displayName="NavLink";var Mh=v.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:l,method:o=ii,action:s,onSubmit:u,relative:c,preventScrollReset:h,viewTransition:p,defaultShouldRevalidate:m,...y},w)=>{let{useTransitions:x}=v.useContext(Ae),N=$h(),f=Hh(s,{relative:c}),d=o.toLowerCase()==="get"?"get":"post",g=typeof s=="string"&&So.test(s),k=S=>{if(u&&u(S),S.defaultPrevented)return;S.preventDefault();let C=S.nativeEvent.submitter,E=(C==null?void 0:C.getAttribute("formmethod"))||o,F=()=>N(C||S.currentTarget,{fetcherKey:t,method:E,navigate:n,replace:i,state:l,relative:c,preventScrollReset:h,viewTransition:p,defaultShouldRevalidate:m});x&&n!==!1?v.startTransition(()=>F()):F()};return v.createElement("form",{ref:w,method:d,action:f,onSubmit:r?u:k,...y,"data-discover":!g&&e==="render"?"true":void 0})});Mh.displayName="Form";function _h(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Td(e){let t=v.useContext(Fn);return V(t,_h(e)),t}function Oh(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:l,relative:o,viewTransition:s,defaultShouldRevalidate:u,useTransitions:c}={}){let h=Xm(),p=Je(),m=Nr(e,{relative:o});return v.useCallback(y=>{if(vh(y,t)){y.preventDefault();let w=n!==void 0?n:gr(p)===gr(m),x=()=>h(e,{replace:w,mask:r,state:i,preventScrollReset:l,relative:o,viewTransition:s,defaultShouldRevalidate:u});c?v.startTransition(()=>x()):x()}},[p,h,m,n,r,i,t,e,l,o,s,u,c])}var Uh=0,Bh=()=>`__${String(++Uh)}__`;function $h(){let{router:e}=Td("useSubmit"),{basename:t}=v.useContext(Ae),n=oh(),r=e.fetch,i=e.navigate;return v.useCallback(async(l,o={})=>{let{action:s,method:u,encType:c,formData:h,body:p}=wh(l,t);if(o.navigate===!1){let m=o.fetcherKey||Bh();await r(m,n,o.action||s,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:h,body:p,formMethod:o.method||u,formEncType:o.encType||c,flushSync:o.flushSync})}else await i(o.action||s,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:h,body:p,formMethod:o.method||u,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,i,t,n])}function Hh(e,{relative:t}={}){let{basename:n}=v.useContext(Ae),r=v.useContext(Ye);V(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),l={...Nr(e||".",{relative:t})},o=Je();if(e==null){l.search=o.search;let s=new URLSearchParams(l.search),u=s.getAll("index");if(u.some(h=>h==="")){s.delete("index"),u.filter(p=>p).forEach(p=>s.append("index",p));let h=s.toString();l.search=h?`?${h}`:""}}return(!e||e===".")&&i.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Ue([n,l.pathname])),gr(l)}function Wh(e,{relative:t}={}){let n=v.useContext(xd);V(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Td("useViewTransitionState"),i=Nr(e,{relative:t});if(!n.isTransitioning)return!1;let l=st(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=st(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Pi(i.pathname,o)!=null||Pi(i.pathname,l)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),D=(e,t)=>{const n=v.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:s="",children:u,...c},h)=>v.createElement("svg",{ref:h,...Vh,width:i,height:i,stroke:r,strokeWidth:o?Number(l)*24/Number(i):l,className:["lucide",`lucide-${Qh(e)}`,s].join(" "),...c},[...t.map(([p,m])=>v.createElement(p,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=D("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=D("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=D("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=D("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=D("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=D("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=D("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=D("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=D("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=D("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=D("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=D("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=D("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=D("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=D("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=D("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=D("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=D("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=D("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=D("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=D("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=D("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=D("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=D("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=D("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=D("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=D("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=D("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=D("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=D("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h0",key:"q9eq1f"}],["path",{d:"M16 15h0",key:"pzrbjg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=D("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=D("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=D("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=D("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function ag({onOpenContact:e}){const[t,n]=v.useState(!1),[r,i]=v.useState(!1),[l,o]=v.useState(!1),[s,u]=v.useState(!1);return v.useEffect(()=>{const c=()=>{window.scrollY>30?n(!0):n(!1)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),a.jsxs("header",{className:`navbar-header ${t?"scrolled":""}`,children:[a.jsx("div",{className:"top-info-bar",children:a.jsxs("div",{className:"container top-info-container",children:[a.jsxs("div",{className:"top-left",children:[a.jsxs("span",{className:"top-badge",children:[a.jsx(Ji,{size:13})," Pan-African Network"]}),a.jsx("span",{className:"top-text",children:"South Africa | Nigeria | Ghana | Kenya | Uganda | Mozambique"})]}),a.jsxs("div",{className:"top-right",children:[a.jsxs("a",{href:"mailto:info@ixar-africa.com",className:"top-link",children:[a.jsx(Zi,{size:13})," info@ixar-africa.com"]}),a.jsxs("a",{href:"tel:+27110987654",className:"top-link",children:[a.jsx(el,{size:13})," +27 11 098 7654"]}),a.jsxs("span",{className:"cert-pill",children:[a.jsx(Kt,{size:13})," BARC & API Certified"]})]})]})}),a.jsxs("div",{className:"container nav-main-container",children:[a.jsxs(I,{to:"/",className:"brand-logo",children:[a.jsx("div",{className:"logo-icon-wrapper",children:a.jsx(Ft,{className:"shield-icon",size:24})}),a.jsxs("div",{className:"brand-text",children:[a.jsxs("div",{className:"brand-title",children:["IXAR ",a.jsx("span",{className:"brand-orange",children:"AFRICA"})]}),a.jsx("div",{className:"brand-subtitle",children:"NDT & Asset Integrity Engineering"})]})]}),a.jsxs("nav",{className:"desktop-nav",children:[a.jsx(ft,{to:"/",className:({isActive:c})=>c?"nav-link active":"nav-link",children:"Home"}),a.jsxs("div",{className:"dropdown-wrapper",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[a.jsxs(ft,{to:"/services",className:({isActive:c})=>c?"nav-link active":"nav-link",children:[a.jsx("span",{children:"NDT Services"}),a.jsx(Gs,{size:14})]}),l&&a.jsxs("div",{className:"dropdown-menu",children:[a.jsx(I,{to:"/services/aut",className:"dropdown-item",children:"Automated Ultrasonic (AUT)"}),a.jsx(I,{to:"/services/paut",className:"dropdown-item",children:"Phased Array Ultrasonic (PAUT)"}),a.jsx(I,{to:"/services/pect",className:"dropdown-item",children:"Pulse Eddy Current (PECT)"}),a.jsx(I,{to:"/services/tofd",className:"dropdown-item",children:"Time of Flight Diffraction (TOFD)"}),a.jsx(I,{to:"/services/mfl-tube",className:"dropdown-item",children:"Tube Inspection (MFL / RFT)"}),a.jsx(I,{to:"/services/radiography",className:"dropdown-item",children:"Digital Radiography (CR/DR)"}),a.jsx("div",{className:"dropdown-divider"}),a.jsx(I,{to:"/services",className:"dropdown-item view-all",children:"View All Services →"})]})]}),a.jsxs("div",{className:"dropdown-wrapper",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[a.jsxs(ft,{to:"/applications",className:({isActive:c})=>c?"nav-link active":"nav-link",children:[a.jsx("span",{children:"Applications"}),a.jsx(Gs,{size:14})]}),s&&a.jsxs("div",{className:"dropdown-menu",children:[a.jsx(I,{to:"/applications/oil-gas",className:"dropdown-item",children:"Oil & Gas (Pipelines & Tanks)"}),a.jsx(I,{to:"/applications/railways",className:"dropdown-item",children:"Railways USFD & Wheelsets"}),a.jsx(I,{to:"/applications/power-plants",className:"dropdown-item",children:"Power Plant Boilers & Turbines"}),a.jsx(I,{to:"/applications/mining",className:"dropdown-item",children:"Mining & Heavy Machinery"}),a.jsx("div",{className:"dropdown-divider"}),a.jsx(I,{to:"/applications",className:"dropdown-item view-all",children:"View All Applications →"})]})]}),a.jsx(ft,{to:"/training",className:({isActive:c})=>c?"nav-link active":"nav-link",children:"BARC Training"}),a.jsx(ft,{to:"/network",className:({isActive:c})=>c?"nav-link active":"nav-link",children:"African Network"}),a.jsx(ft,{to:"/estimator",className:({isActive:c})=>c?"nav-link active":"nav-link",children:"Estimator"}),a.jsx(ft,{to:"/case-studies",className:({isActive:c})=>c?"nav-link active":"nav-link",children:"Case Studies"})]}),a.jsxs("div",{className:"nav-actions",children:[a.jsxs("button",{onClick:()=>e(),className:"btn btn-primary btn-sm",children:[a.jsx("span",{children:"Request Proposal"}),a.jsx($e,{size:15})]}),a.jsx("button",{className:"mobile-toggle",onClick:()=>i(!r),children:r?a.jsx(_d,{size:24}):a.jsx(tg,{size:24})})]})]}),r&&a.jsxs("div",{className:"mobile-menu-dropdown",children:[a.jsxs("div",{className:"mobile-nav-links",children:[a.jsx(I,{to:"/",onClick:()=>i(!1),children:"Home"}),a.jsx(I,{to:"/services",onClick:()=>i(!1),children:"NDT Services Catalog"}),a.jsx(I,{to:"/applications",onClick:()=>i(!1),children:"Applications & Sectors"}),a.jsx(I,{to:"/training",onClick:()=>i(!1),children:"BARC Safety Training"}),a.jsx(I,{to:"/network",onClick:()=>i(!1),children:"African Network"}),a.jsx(I,{to:"/estimator",onClick:()=>i(!1),children:"Project Budget Estimator"}),a.jsx(I,{to:"/case-studies",onClick:()=>i(!1),children:"Case Studies"})]}),a.jsx("button",{onClick:()=>{i(!1),e()},className:"btn btn-primary btn-lg",style:{width:"100%",marginTop:"16px"},children:"Request RFP Proposal"})]}),a.jsx("style",{children:`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.25s ease;
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
        }
        .navbar-header.scrolled {
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
        }
        .top-info-bar {
          background: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
          font-size: 0.8rem;
          padding: 7px 0;
          color: var(--text-muted);
        }
        .top-info-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .top-left, .top-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .top-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: var(--primary-light);
          color: var(--primary-dark);
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.76rem;
        }
        .top-link {
          color: var(--text-muted);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 500;
        }
        .top-link:hover {
          color: var(--navy);
        }
        .cert-pill {
          color: #15803D;
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 700;
        }

        .nav-main-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          gap: 20px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-icon-wrapper {
          width: 44px;
          height: 44px;
          background: var(--navy);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }
        .brand-title {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.35rem;
          color: var(--navy);
          line-height: 1;
        }
        .brand-orange {
          color: var(--primary);
        }
        .brand-subtitle {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 2px;
          font-weight: 600;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }
        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 600;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 0;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--primary);
        }

        /* Dropdown */
        .dropdown-wrapper {
          position: relative;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 240px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 8px;
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: fadeIn 0.2s ease;
        }
        .dropdown-item {
          padding: 8px 12px;
          font-size: 0.86rem;
          color: var(--navy);
          text-decoration: none;
          font-weight: 600;
          border-radius: var(--radius-sm);
          transition: background 0.2s ease;
        }
        .dropdown-item:hover {
          background: #F8FAFC;
          color: var(--primary);
        }
        .dropdown-item.view-all {
          color: var(--primary);
          font-weight: 700;
        }
        .dropdown-divider {
          height: 1px;
          background: #E2E8F0;
          margin: 4px 0;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--navy);
          cursor: pointer;
        }

        .mobile-menu-dropdown {
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .mobile-nav-links a {
          color: var(--navy);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
          padding: 8px 0;
          border-bottom: 1px solid #F1F5F9;
        }

        @media (max-width: 1024px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: block; }
          .top-info-bar { display: none; }
        }
      `})]})}function og({onOpenContact:e}){return a.jsxs("footer",{className:"footer-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"footer-grid",children:[a.jsxs("div",{className:"footer-col brand-col",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx(Ft,{className:"brand-shield",size:28}),a.jsxs("div",{children:[a.jsxs("div",{className:"brand-name",children:["IXAR ",a.jsx("span",{className:"brand-orange",children:"AFRICA"})]}),a.jsx("div",{className:"brand-sub",children:"NDT & Asset Integrity Engineering"})]})]}),a.jsx("p",{className:"footer-bio",children:"Pan-African leader in Non-Destructive Testing (AUT, PAUT, TOFD, PECT, MFL, Railway USFD) backed by 55+ years of nuclear-grade testing precision and BARC certification."}),a.jsxs("div",{className:"footer-accred-row",children:[a.jsx("span",{className:"badge badge-orange",children:"BARC Certified"}),a.jsx("span",{className:"badge badge-navy",children:"API 653/510/570"}),a.jsx("span",{className:"badge badge-emerald",children:"ISO 9001:2015"})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsxs("h4",{className:"footer-col-title",children:[a.jsx(Ft,{size:16,color:"var(--primary)"})," Industrial NDT Services"]}),a.jsxs("ul",{className:"footer-links",children:[a.jsx("li",{children:a.jsx("a",{href:"#services",children:"Pulse Eddy Current Testing (PECT)"})}),a.jsx("li",{children:a.jsx("a",{href:"#services",children:"Tube Inspection (MFL / RFT)"})}),a.jsx("li",{children:a.jsx("a",{href:"#services",children:"Automated Ultrasonic (AUT)"})}),a.jsx("li",{children:a.jsx("a",{href:"#services",children:"Phased Array Ultrasonic (PAUT)"})}),a.jsx("li",{children:a.jsx("a",{href:"#services",children:"Railway USFD Flaw Detection"})}),a.jsx("li",{children:a.jsx("a",{href:"#services",children:"BARC Radiation Safety Training"})})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsxs("h4",{className:"footer-col-title",children:[a.jsx(Ji,{size:16,color:"var(--navy)"})," Standards & Compliance"]}),a.jsxs("ul",{className:"footer-links",children:[a.jsx("li",{children:a.jsx("a",{href:"#safety-quality",children:"BARC Radiation Safety Protocol"})}),a.jsx("li",{children:a.jsx("a",{href:"#safety-quality",children:"API 510 / 570 / 653 Tank Audits"})}),a.jsx("li",{children:a.jsx("a",{href:"#safety-quality",children:"ASNT Level III Procedure Qualification"})}),a.jsx("li",{children:a.jsx("a",{href:"#safety-quality",children:"SHEQ & ISO 45001 Safety Management"})}),a.jsx("li",{children:a.jsx("a",{href:"#certifications",children:"BARC Certificate Verifier Portal"})}),a.jsx("li",{children:a.jsx("a",{href:"#calculator",children:"NDT Project Cost Estimator"})})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsxs("h4",{className:"footer-col-title",children:[a.jsx(Nn,{size:16,color:"#16A34A"})," Pan-African Hubs"]}),a.jsxs("div",{className:"footer-contacts",children:[a.jsxs("div",{className:"f-contact-row",children:[a.jsx(Nn,{size:14,color:"var(--primary)"}),a.jsx("span",{children:"Johannesburg | Lagos | Takoradi | Nairobi | Maputo"})]}),a.jsxs("div",{className:"f-contact-row",children:[a.jsx(Zi,{size:14,color:"var(--navy)"}),a.jsx("a",{href:"mailto:info@ixar-africa.com",children:"info@ixar-africa.com"})]}),a.jsxs("div",{className:"f-contact-row",children:[a.jsx(el,{size:14,color:"#16A34A"}),a.jsx("a",{href:"tel:+27110987654",children:"+27 11 098 7654"})]})]}),a.jsxs("button",{onClick:()=>e(),className:"btn btn-primary btn-sm",style:{marginTop:"16px",width:"100%"},children:[a.jsx("span",{children:"Request Inspection RFP"}),a.jsx($e,{size:14})]})]})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("div",{children:["© ",new Date().getFullYear()," IXAR Africa (Pty) Ltd. All rights reserved. Pan-African Engineering Operations."]}),a.jsxs("div",{className:"footer-bottom-links",children:[a.jsx("a",{href:"#",children:"Privacy Policy"}),a.jsx("span",{children:"•"}),a.jsx("a",{href:"#",children:"Terms of Service"}),a.jsx("span",{children:"•"}),a.jsx("a",{href:"#certifications",children:"BARC Cert Portal"})]})]})]}),a.jsx("style",{children:`
        .footer-section {
          background: #0F172A;
          padding-top: 70px;
          padding-bottom: 36px;
          color: #94A3B8;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1.1fr;
          gap: 36px;
          margin-bottom: 50px;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .brand-shield {
          color: var(--primary);
        }
        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 900;
          color: #FFFFFF;
        }
        .brand-orange { color: var(--primary); }
        .brand-sub {
          font-size: 0.72rem;
          color: #94A3B8;
          text-transform: uppercase;
        }
        .footer-bio {
          font-size: 0.88rem;
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .footer-accred-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .footer-col-title {
          font-size: 1.05rem;
          color: #FFFFFF;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links a {
          color: #94A3B8;
          text-decoration: none;
          font-size: 0.88rem;
          transition: color 0.2s ease;
        }
        .footer-links a:hover {
          color: #FFFFFF;
        }

        .footer-contacts {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.88rem;
        }
        .f-contact-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .f-contact-row a {
          color: #94A3B8;
          text-decoration: none;
        }
        .f-contact-row a:hover { color: #FFFFFF; }

        .footer-bottom {
          border-top: 1px solid #1E293B;
          padding-top: 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          flex-wrap: wrap;
          gap: 14px;
        }
        .footer-bottom-links {
          display: flex;
          gap: 12px;
        }
        .footer-bottom-links a {
          color: #94A3B8;
          text-decoration: none;
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `})]})}function sg({isOpen:e,onClose:t,defaultScope:n}){const[r,i]=v.useState(!1),[l,o]=v.useState({name:"",email:"",phone:"",company:"",region:"South Africa",details:n?`Interested in: ${n}`:""});if(!e)return null;const s=c=>{c.preventDefault(),i(!0)},u=()=>{i(!1),t()};return a.jsxs("div",{className:"modal-backdrop",children:[a.jsxs("div",{className:"clean-card modal-content-card",children:[a.jsx("button",{onClick:t,className:"modal-close-btn",children:a.jsx(_d,{size:20})}),r?a.jsxs("div",{className:"modal-success-screen",children:[a.jsx("div",{className:"success-icon-wrapper",children:a.jsx(re,{size:48,color:"#16A34A"})}),a.jsx("h3",{className:"success-title",children:"Inquiry Sent Successfully!"}),a.jsxs("p",{className:"success-text",children:["Thank you, ",a.jsx("strong",{children:l.name}),". Our regional engineering desk in ",a.jsx("strong",{children:l.region})," has received your project inquiry."]}),a.jsxs("div",{className:"ref-pill",children:["Ref ID: IXAR-AFR-",Math.floor(1e5+Math.random()*9e5)]}),a.jsxs("p",{className:"sub-text",children:["A senior NDT engineer will respond to ",a.jsx("strong",{children:l.email})," within 2 business hours."]}),a.jsx("button",{onClick:u,className:"btn btn-outline btn-lg",style:{marginTop:"20px"},children:"Close Window"})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("div",{className:"modal-icon-badge",children:a.jsx(Ft,{size:22,color:"var(--primary)"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"modal-title",children:"Request Inspection Proposal"}),a.jsx("p",{className:"modal-subtitle",children:"Direct engineering desk inquiry for IXAR Africa."})]})]}),a.jsxs("form",{onSubmit:s,className:"modal-form",children:[a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Full Name *"}),a.jsx("input",{type:"text",required:!0,placeholder:"e.g. David Mensah",value:l.name,onChange:c=>o({...l,name:c.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Corporate Email *"}),a.jsx("input",{type:"email",required:!0,placeholder:"e.g. d.mensah@company.com",value:l.email,onChange:c=>o({...l,email:c.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Phone / WhatsApp *"}),a.jsx("input",{type:"text",required:!0,placeholder:"e.g. +27 82 123 4567",value:l.phone,onChange:c=>o({...l,phone:c.target.value})})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Company Name *"}),a.jsx("input",{type:"text",required:!0,placeholder:"e.g. Apex Energy Ltd",value:l.company,onChange:c=>o({...l,company:c.target.value})})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Primary African Region / Deployment Hub *"}),a.jsxs("select",{value:l.region,onChange:c=>o({...l,region:c.target.value}),className:"modal-select",children:[a.jsx("option",{value:"South Africa",children:"South Africa (Johannesburg / Cape Town)"}),a.jsx("option",{value:"Nigeria",children:"Nigeria (Lagos / Port Harcourt)"}),a.jsx("option",{value:"Ghana",children:"Ghana (Takoradi / Accra)"}),a.jsx("option",{value:"Kenya",children:"Kenya (Nairobi / Mombasa)"}),a.jsx("option",{value:"Uganda",children:"Uganda (Kampala)"}),a.jsx("option",{value:"Mozambique",children:"Mozambique (Maputo / Pemba)"}),a.jsx("option",{value:"Other Africa",children:"Other Pan-African Region"})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Inspection Scope / Technical Requirements *"}),a.jsx("textarea",{rows:"3",required:!0,placeholder:"Describe your NDT inspection requirements (e.g. Pipeline AUT, MFL Tube testing, USFD Rail Flaw Detection, API 653 Tank Floor Scanning).",value:l.details,onChange:c=>o({...l,details:c.target.value})})]}),a.jsxs("button",{type:"submit",className:"btn btn-primary btn-lg",style:{width:"100%"},children:[a.jsx("span",{children:"Send Proposal Inquiry to Engineering Desk"}),a.jsx(Id,{size:16})]})]})]})]}),a.jsx("style",{children:`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .modal-content-card {
          width: 100%;
          max-width: 620px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: var(--shadow-lg);
        }
        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }
        .modal-close-btn:hover { color: var(--navy); }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }
        .modal-icon-badge {
          width: 44px;
          height: 44px;
          background: var(--primary-light);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-title {
          font-size: 1.35rem;
          color: var(--navy);
        }
        .modal-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 14px;
        }
        .form-field label {
          font-size: 0.82rem;
          color: var(--navy);
          font-weight: 600;
        }
        .form-field input, .form-field textarea, .modal-select {
          padding: 11px 14px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-sm);
          color: var(--navy);
          font-size: 0.9rem;
          outline: none;
          font-weight: 500;
        }
        .form-field input:focus, .form-field textarea:focus, .modal-select:focus {
          border-color: var(--primary);
          background: #FFFFFF;
        }

        .modal-success-screen {
          text-align: center;
          padding: 24px 16px;
        }
        .success-icon-wrapper {
          margin-bottom: 14px;
        }
        .success-title {
          font-size: 1.5rem;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .success-text {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 14px;
        }
        .ref-pill {
          display: inline-block;
          background: #F0FDF4;
          color: #16A34A;
          border: 1px solid #BBF7D0;
          font-family: var(--font-mono);
          font-weight: 700;
          padding: 4px 14px;
          border-radius: 100px;
          margin-bottom: 14px;
          font-size: 0.85rem;
        }
        .sub-text {
          font-size: 0.84rem;
          color: var(--text-dim);
        }

        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr; }
        }
      `})]})}function ug(){const e=[{name:"BARC Radiation Safety",level:"Industrial Radiography Certified",icon:Kt},{name:"API Inspection",level:"API 510, 570 & 653 Compliant",icon:Dd},{name:"ASNT Level III",level:"Senior NDT Engineers Onsite",icon:Yi},{name:"ISO 9001:2015",level:"Global Quality Standard",icon:qh},{name:"SHEQ & ISO 45001",level:"Zero Harm Safety Compliance",icon:Cr}];return a.jsxs("section",{className:"competitor-bar-section",children:[a.jsx("div",{className:"container",children:a.jsxs("div",{className:"bar-grid",children:[a.jsxs("div",{className:"bar-intro",children:[a.jsxs("div",{className:"bar-tag",children:[a.jsx(Xh,{size:13})," COMPETITOR BENCHMARK CHAMPION"]}),a.jsx("h3",{className:"bar-title",children:"Surpassing African Industry Benchmarks"}),a.jsx("p",{className:"bar-desc",children:"Setting international precision standards across conventional and advanced NDT engineering."})]}),a.jsx("div",{className:"cert-badges-grid",children:e.map((t,n)=>{const r=t.icon;return a.jsxs("div",{className:"cert-card",children:[a.jsx("div",{className:"cert-icon",children:a.jsx(r,{size:18})}),a.jsxs("div",{children:[a.jsx("div",{className:"cert-name",children:t.name}),a.jsx("div",{className:"cert-level",children:t.level})]})]},n)})})]})}),a.jsx("style",{children:`
        .competitor-bar-section {
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
          padding: 36px 0;
        }
        .bar-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }
        .bar-tag {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--primary);
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
        }
        .bar-title {
          font-size: 1.35rem;
          color: var(--navy);
          margin-bottom: 4px;
        }
        .bar-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .cert-badges-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .cert-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.25s ease;
        }
        .cert-card:hover {
          border-color: var(--primary);
          background: #FFFFFF;
          box-shadow: var(--shadow-sm);
        }
        .cert-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cert-name {
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.2;
        }
        .cert-level {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .bar-grid { grid-template-columns: 1fr; }
          .cert-badges-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .cert-badges-grid { grid-template-columns: 1fr; }
        }
      `})]})}function Xe({label:e,aspect:t="16/9",height:n="320px",recommendedSize:r="1200 x 675 px"}){return a.jsxs("div",{className:"image-placeholder-frame",style:{minHeight:n,aspectRatio:t},children:[a.jsxs("div",{className:"placeholder-content",children:[a.jsx("div",{className:"placeholder-icon-box",children:a.jsx(Zh,{size:28})}),a.jsx("div",{className:"placeholder-label",children:e}),a.jsxs("div",{className:"placeholder-hint",children:[a.jsx(eg,{size:13}),a.jsxs("span",{children:["Image Placeholder (",r,")"]})]})]}),a.jsx("style",{children:`
        .image-placeholder-frame {
          width: 100%;
          background: #F1F5F9;
          border: 2px dashed #CBD5E1;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s ease;
        }
        .image-placeholder-frame:hover {
          border-color: var(--primary);
        }
        .placeholder-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
        }
        .placeholder-icon-box {
          width: 52px;
          height: 52px;
          background: #FFFFFF;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--navy);
          box-shadow: var(--shadow-sm);
          border: 1px solid #E2E8F0;
        }
        .placeholder-label {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--navy);
        }
        .placeholder-hint {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          background: #FFFFFF;
          padding: 4px 10px;
          border-radius: 100px;
          border: 1px solid #E2E8F0;
        }
      `})]})}function cg({onOpenContact:e}){return a.jsxs("div",{className:"page-wrapper",children:[a.jsx("section",{className:"hero-section",children:a.jsxs("div",{className:"container hero-container",children:[a.jsxs("div",{className:"hero-content",children:[a.jsxs("div",{className:"section-tag",children:[a.jsx(Gh,{size:14}),a.jsx("span",{children:"PAN-AFRICAN INDUSTRIAL NDT & ASSET INTEGRITY"})]}),a.jsxs("h1",{className:"hero-title",children:["Certified Testing. ",a.jsx("span",{className:"text-orange",children:"Proven Protection"})," Across Africa."]}),a.jsx("p",{className:"hero-subtitle",children:"Empowering Africa's Oil & Gas, Mining, Power Plants, and Railways with high-sensitivity Non-Destructive Testing (AUT, PAUT, TOFD, PECT, MFL, Railway USFD) backed by 55+ years of nuclear-grade precision and BARC certification."}),a.jsxs("div",{className:"hero-stats-grid",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("span",{className:"stat-num",children:"55+"}),a.jsx("span",{className:"stat-label",children:"Years Experience"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("span",{className:"stat-num",children:"12,000+"}),a.jsx("span",{className:"stat-label",children:"Projects Inspected"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("span",{className:"stat-num",children:"99.8%"}),a.jsx("span",{className:"stat-label",children:"Client Trust Rate"})]})]}),a.jsxs("div",{className:"hero-cta-group",children:[a.jsxs("button",{onClick:()=>e(),className:"btn btn-primary btn-lg",children:[a.jsx("span",{children:"Request Proposal"}),a.jsx(Kh,{size:18})]}),a.jsx(I,{to:"/services",className:"btn btn-outline btn-lg",children:a.jsx("span",{children:"Explore NDT Methods"})})]}),a.jsxs("div",{className:"hero-trust-list",children:[a.jsxs("span",{children:[a.jsx(re,{size:16,color:"var(--primary)"})," BARC Radiation Safety"]}),a.jsxs("span",{children:[a.jsx(re,{size:16,color:"var(--primary)"})," API & ASNT Level III Crew"]}),a.jsxs("span",{children:[a.jsx(re,{size:16,color:"var(--primary)"})," Rapid Onsite Deployment"]})]})]}),a.jsx("div",{className:"hero-image-container",children:a.jsx(Xe,{label:"Pipeline NDT & Field Inspection Operations",recommendedSize:"1200 x 675 px (Hero Field Photography)",height:"440px",aspect:"16/9"})})]})}),a.jsx(ug,{}),a.jsx("section",{className:"section gateway-section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-tag",children:"EXPLORE IXAR PORTAL"}),a.jsxs("h2",{className:"section-title",children:["Complete Engineering & ",a.jsx("span",{className:"text-orange",children:"Testing Capabilities"})]}),a.jsx("p",{className:"section-subtitle",children:"Navigate through dedicated sections detailing our specialized inspection methodologies, industry application sub-pages, and Pan-African operational network."})]}),a.jsxs("div",{className:"grid-3 gateway-grid",children:[a.jsxs(I,{to:"/services",className:"clean-card gateway-card",children:[a.jsx("div",{className:"gate-icon-box",children:a.jsx(Yi,{size:24})}),a.jsx("h3",{className:"gate-title",children:"NDT Services & Methodologies"}),a.jsx("p",{className:"gate-desc",children:"Explore AUT, PAUT, TOFD, PECT CUI screening, and digital radiography sub-pages."}),a.jsx("div",{className:"gate-link",children:"Browse All NDT Methods →"})]}),a.jsxs(I,{to:"/applications",className:"clean-card gateway-card",children:[a.jsx("div",{className:"gate-icon-box",children:a.jsx(Cr,{size:24})}),a.jsx("h3",{className:"gate-title",children:"Applications & Industry Sectors"}),a.jsx("p",{className:"gate-desc",children:"Oil & gas pipelines, refinery tanks, railway tracks (USFD), power plants, and mining."}),a.jsx("div",{className:"gate-link",children:"View Industry Sub-pages →"})]}),a.jsxs(I,{to:"/training",className:"clean-card gateway-card",children:[a.jsx("div",{className:"gate-icon-box",children:a.jsx(Kt,{size:24})}),a.jsx("h3",{className:"gate-title",children:"BARC Safety Training & Verifier"}),a.jsx("p",{className:"gate-desc",children:"Official BARC Radiation Safety course details & instant online certificate verification tool."}),a.jsx("div",{className:"gate-link",children:"Verify Credentials & Courses →"})]}),a.jsxs(I,{to:"/network",className:"clean-card gateway-card",children:[a.jsx("div",{className:"gate-icon-box",children:a.jsx(Ji,{size:24})}),a.jsx("h3",{className:"gate-title",children:"Pan-African Operations Network"}),a.jsx("p",{className:"gate-desc",children:"Regional hubs in South Africa, Nigeria, Ghana, Kenya, Uganda, and Mozambique."}),a.jsx("div",{className:"gate-link",children:"Explore African Network →"})]}),a.jsxs(I,{to:"/estimator",className:"clean-card gateway-card",children:[a.jsx("div",{className:"gate-icon-box",children:a.jsx(Pd,{size:24})}),a.jsx("h3",{className:"gate-title",children:"Project Budget Estimator"}),a.jsx("p",{className:"gate-desc",children:"Calculate indicative mobilization & inspection budget range for your project."}),a.jsx("div",{className:"gate-link",children:"Calculate Budget Estimate →"})]}),a.jsxs(I,{to:"/case-studies",className:"clean-card gateway-card",children:[a.jsx("div",{className:"gate-icon-box",children:a.jsx(Ad,{size:24})}),a.jsx("h3",{className:"gate-title",children:"African Case Studies"}),a.jsx("p",{className:"gate-desc",children:"Proven project achievements across pipelines, thermal power plants, and railway lines."}),a.jsx("div",{className:"gate-link",children:"Read Field Case Studies →"})]})]})]})}),a.jsx("style",{children:`
        .hero-section {
          padding-top: 175px;
          padding-bottom: 80px;
          background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
          border-bottom: 1px solid #E2E8F0;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 50px;
          align-items: center;
        }
        .hero-title {
          font-size: 3.3rem;
          line-height: 1.15;
          margin-bottom: 20px;
        }
        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 30px;
        }
        
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        .stat-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 16px;
          box-shadow: var(--shadow-sm);
        }
        .stat-num {
          font-family: var(--font-mono);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--navy);
          display: block;
        }
        .stat-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }
        .hero-trust-list {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 0.88rem;
          color: var(--text-muted);
          font-weight: 500;
          flex-wrap: wrap;
        }
        .hero-trust-list span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .gateway-section {
          background: #F8FAFC;
        }
        .gateway-card {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .gate-icon-box {
          width: 48px;
          height: 48px;
          background: var(--primary-light);
          border: 1px solid var(--primary-border);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          margin-bottom: 16px;
        }
        .gate-title {
          font-size: 1.25rem;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .gate-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 20px;
        }
        .gate-link {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--primary);
        }

        @media (max-width: 1024px) {
          .hero-container { grid-template-columns: 1fr; }
          .hero-title { font-size: 2.7rem; }
        }
      `})]})}function dg({onOpenContact:e}){const t=[{slug:"aut",title:"Automated Ultrasonic Testing (AUT)",category:"Advanced Ultrasonic",desc:"Computerized girth weld inspection for long-distance oil & gas pipelines during construction with full digital record traceability.",placeholderLabel:"AUT Pipeline Girth Weld Scanner Setup"},{slug:"paut",title:"Phased Array Ultrasonic Testing (PAUT)",category:"Advanced Ultrasonic",desc:"Multi-element probe array generating steered acoustic beams to map internal defects in thick structural welds & forged components.",placeholderLabel:"PAUT Multi-Element Probe & S-Scan Screen"},{slug:"pect",title:"Pulse Eddy Current Testing (PECT)",category:"Electromagnetic NDT",desc:"Screening technique for detecting Corrosion Under Insulation (CUI) on carbon steel piping & vessels without removing insulation.",placeholderLabel:"PECT Corrosion Under Insulation Screening"},{slug:"tofd",title:"Time of Flight Diffraction (TOFD)",category:"Advanced Ultrasonic",desc:"Diffracted wave technique providing accurate height sizing of cracks and lack of fusion in heavy wall pressure vessels.",placeholderLabel:"TOFD Diffraction Wave Scan Display"},{slug:"mfl-tube",title:"Tube Inspection (MFL / RFT / ECT)",category:"Tubular NDT",desc:"High-speed electromagnetic testing for detecting wall loss, internal pitting, grooving, and cracks in boiler & heat exchanger tubes.",placeholderLabel:"MFL Boiler & Exchanger Tube Probe Pass"},{slug:"radiography",title:"Digital & Computed Radiography (CR/DR)",category:"Radiographic NDT",desc:"Next-generation radiography utilizing phosphor imaging plates & flat panel detectors for instant defect analysis and zero chemical waste.",placeholderLabel:"Computed Radiography Imaging Plate Scanner"}];return a.jsxs("div",{className:"page-wrapper",style:{paddingTop:"150px"},children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-tag",children:"NDT SERVICES & METHODOLOGIES"}),a.jsxs("h2",{className:"section-title",children:["Advanced Non-Destructive ",a.jsx("span",{className:"text-orange",children:"Testing Catalog"})]}),a.jsx("p",{className:"section-subtitle",children:"Explore dedicated sub-pages for each advanced NDT method. Select any methodology below to view technical physics, code compliance, and application scope."})]}),a.jsx("div",{className:"grid-2 services-full-grid",children:t.map(n=>a.jsxs("div",{className:"clean-card service-overview-card",children:[a.jsxs("div",{className:"card-top-row",children:[a.jsx("span",{className:"badge badge-orange",children:n.category}),a.jsx(I,{to:`/services/${n.slug}`,className:"view-subpage-link",children:"Detailed Sub-page →"})]}),a.jsx("h3",{className:"card-title",children:n.title}),a.jsx("p",{className:"card-desc",children:n.desc}),a.jsx("div",{className:"card-placeholder-box",children:a.jsx(Xe,{label:n.placeholderLabel,recommendedSize:"800 x 450 px",height:"200px",aspect:"16/9"})}),a.jsxs("div",{className:"card-action-bar",children:[a.jsxs(I,{to:`/services/${n.slug}`,className:"btn btn-navy btn-sm",children:[a.jsx("span",{children:"View Technical Sub-Page"}),a.jsx($e,{size:14})]}),a.jsx("button",{onClick:()=>e(n.title),className:"btn btn-outline btn-sm",children:"Request RFP"})]})]},n.slug))})]}),a.jsx("style",{children:`
        .services-full-grid {
          margin-bottom: 90px;
        }
        .service-overview-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .view-subpage-link {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }
        .card-title {
          font-size: 1.35rem;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .card-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .card-placeholder-box {
          margin-bottom: 20px;
        }
        .card-action-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid #F1F5F9;
          padding-top: 16px;
        }
      `})]})}function fg({onOpenContact:e}){const{slug:t}=Sd(),n={aut:{title:"Automated Ultrasonic Testing (AUT)",category:"Advanced Ultrasonic Inspection",subtitle:"High-speed computerized girth weld inspection for long-distance oil & gas pipelines.",overview:"Automated Ultrasonic Testing (AUT) has replaced conventional radiography as the global standard for girth weld inspection during pipeline construction. Utilizing motorized band crawlers and multi-element probe arrays, AUT delivers instant zero-subjective defect sizing and full digital traceability.",advantages:["Rapid scan speeds (complete 36-inch pipe weld scan in under 3 minutes)","Precise flaw depth, height, and circumferential position measurement","Independent of weather conditions and zero radiation safety hazard","Immediate pass/fail determination based on ECA (Engineering Critical Assessment) acceptance criteria"],standards:["ASME Section V Article 4","API 1104 Appendix A","ISO 13588 / DNV-ST-F101"],placeholderMain:'AUT Motorized Scanner Band Mounted on 36" Pipe Weld',placeholderDetail:"AUT Sectorial Scan Data & Defect Depth Mapping Screen"},paut:{title:"Phased Array Ultrasonic Testing (PAUT)",category:"Advanced Ultrasonic Inspection",subtitle:"Multi-beam acoustic beam steering for complex geometry structural & vessel welds.",overview:"Phased Array Ultrasonic Testing (PAUT) utilizes multi-element piezoelectric transducers where each element is independently pulsed with computer-controlled phase timing. This allows sweeping acoustic beams across multiple angles simultaneously to inspect complex geometries.",advantages:["Real-time S-Scan (Sectorial) and E-Scan (Electronic) color display","High defect detection probability for cracks, lack of fusion, and volumetric flaws","Electronic beam focusing enhances signal-to-noise ratio in heavy-wall components","Fully digital raw A-scan data saved for life-cycle asset auditing"],standards:["ASME Code Case 2235 / Section V","API 620 / 650 / 653","BS EN ISO 18563"],placeholderMain:"PAUT Multi-Element Phased Array Probe on Pressure Vessel Weld",placeholderDetail:"Real-time PAUT Sectorial Scan & A-Scan Signal Waveform"},pect:{title:"Pulse Eddy Current Testing (PECT)",category:"Electromagnetic NDT",subtitle:"Non-invasive screening for Corrosion Under Insulation (CUI) on carbon steel assets.",overview:"Pulse Eddy Current Testing (PECT) is an advanced electromagnetic technique designed to measure wall thickness of carbon steel structures through thermal insulation, fireproofing, or protective coatings without needing to remove the insulation.",advantages:["Eliminates expensive insulation stripping and scaffolding costs","Capable of inspecting through insulation up to 150mm thick","Operates in-service at elevated surface temperatures up to 500°C","Rapid footprint screening of storage tanks, spheres, and piping"],standards:["ISO 20669","API RP 583 (CUI Management)","ASTM E3047"],placeholderMain:"PECT Probe Applied on Insulated Refinery Pipe Elbow",placeholderDetail:"PECT Wall Thickness Color Contour Map & CUI Hotspots"},tofd:{title:"Time of Flight Diffraction (TOFD)",category:"Advanced Ultrasonic Inspection",subtitle:"Diffracted wave physics for rapid sub-millimeter crack sizing accuracy.",overview:"Time of Flight Diffraction (TOFD) relies on the diffracted ultrasound waves originating from flaw tips rather than reflected amplitude signals. This makes TOFD exceptionally accurate for height sizing of cracks regardless of flaw orientation or surface tilt.",advantages:["Sub-millimeter crack height measurement accuracy","Fast linear scanning speed covering the entire weld volume in a single pass","Unaffected by weld mismatch or surface roughness","Combines seamlessly with PAUT for comprehensive ASME compliant inspections"],standards:["ASME Section V Article 4","BS EN ISO 10863","ASTM E2373"],placeholderMain:"TOFD Pitch-Catch Transmitter and Receiver Probe Pair",placeholderDetail:"TOFD D-Scan Grey-Scale Weld Longitudinal Image"},"mfl-tube":{title:"Tube Inspection (MFL / RFT / ECT)",category:"Tubular NDT Inspection",subtitle:"100% full-length tube inspection for heat exchangers, boilers & chillers.",overview:"Our tubular inspection service combines Magnetic Flux Leakage (MFL), Remote Field Testing (RFT), Near Field Testing (NFT), and Eddy Current Testing (ECT) to detect internal/external pitting, wall thinning, and circumferential cracking in heat exchanger tubes.",advantages:["High-speed motorized probe pusher (up to 2 meters/sec scan speed)","Inspects both ferromagnetic (steel) and non-ferromagnetic (copper/titanium) tubes","Accurate depth sizing of ID/OD pitting and baffle plate wear","Instant tube sheet color grid report indicating plugged or damaged tubes"],standards:["ASME Section V Article 8 / 17","ASTM E571 / E703","EPRI Guidelines"],placeholderMain:"Motorized Tube Probe Pusher at Heat Exchanger Tube Sheet",placeholderDetail:"Tubular MFL Signal Lissajous & Depth Sizing Display"},radiography:{title:"Digital & Computed Radiography (CR/DR)",category:"Radiographic NDT Inspection",subtitle:"High-definition digital radiography plates with zero chemical waste.",overview:"Digital Radiography replaces conventional film with reusable flexible phosphor imaging plates (CR) or flat panel detectors (DR). Images are scanned into high-resolution digital files instantly, reducing radiation exposure times by up to 80%.",advantages:["Instant digital contrast enhancement, digital zoom, and wall thickness measurement","80% reduction in source exposure time, improving site radiation safety","Zero chemical processing waste (eco-friendly zero film footprint)","Permanent DICONDE compliant digital archive"],standards:["ASME Section V Article 2","ISO 17636-2","BARC / AERB Radiation Norms"],placeholderMain:"Computed Radiography Imaging Plate Scanner & Flat Panel Unit",placeholderDetail:"High-Definition Digital Radiograph showing Weld Defect Contrast"}},r=n[t]||n.aut;return a.jsxs("div",{className:"page-wrapper",style:{paddingTop:"150px"},children:[a.jsxs("div",{className:"container",children:[a.jsxs(I,{to:"/services",className:"back-link",children:[a.jsx(Fd,{size:16}),a.jsx("span",{children:"Back to All NDT Services"})]}),a.jsxs("div",{className:"detail-header",children:[a.jsx("span",{className:"badge badge-orange",children:r.category}),a.jsx("h1",{className:"detail-title",children:r.title}),a.jsx("p",{className:"detail-subtitle",children:r.subtitle})]}),a.jsx("div",{className:"detail-hero-placeholder",children:a.jsx(Xe,{label:r.placeholderMain,recommendedSize:"1200 x 600 px (Technical Field Photo)",height:"380px",aspect:"16/9"})}),a.jsxs("div",{className:"grid-2 detail-content-grid",children:[a.jsxs("div",{className:"clean-card detail-card",children:[a.jsxs("h3",{className:"card-heading",children:[a.jsx(Yi,{size:18,color:"var(--primary)"})," Technical Operating Principle"]}),a.jsx("p",{className:"body-text",children:r.overview}),a.jsx("h4",{className:"sub-heading",children:"Code Compliance & Standards:"}),a.jsx("div",{className:"standards-list",children:r.standards.map((i,l)=>a.jsxs("span",{className:"std-pill",children:[a.jsx(Ad,{size:14})," ",i]},l))})]}),a.jsxs("div",{className:"clean-card detail-card",children:[a.jsxs("h3",{className:"card-heading",children:[a.jsx(Ft,{size:18,color:"var(--navy)"})," Key Advantages & Capabilities"]}),a.jsx("div",{className:"advantages-list",children:r.advantages.map((i,l)=>a.jsxs("div",{className:"adv-item",children:[a.jsx(re,{size:16,color:"var(--primary)"}),a.jsx("span",{children:i})]},l))}),a.jsx("div",{className:"sub-placeholder-box",children:a.jsx(Xe,{label:r.placeholderDetail,recommendedSize:"800 x 400 px (Scan Display Screenshot)",height:"180px",aspect:"16/9"})})]})]}),a.jsxs("div",{className:"clean-card detail-cta-box",children:[a.jsxs("div",{children:[a.jsxs("h3",{className:"cta-heading",children:["Require ",r.title," for Your Project?"]}),a.jsx("p",{className:"cta-sub",children:"Our Pan-African engineering crews can mobilize with certified equipment within 24 hours."})]}),a.jsxs("button",{onClick:()=>e(r.title),className:"btn btn-primary btn-lg",children:[a.jsx("span",{children:"Request Technical Scope & Proposal"}),a.jsx($e,{size:16})]})]})]}),a.jsx("style",{children:`
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .back-link:hover { color: var(--primary); }

        .detail-header {
          margin-bottom: 24px;
        }
        .detail-title {
          font-size: 2.5rem;
          color: var(--navy);
          margin: 8px 0;
        }
        .detail-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
        }

        .detail-hero-placeholder {
          margin-bottom: 40px;
        }

        .detail-content-grid {
          margin-bottom: 40px;
        }
        .detail-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .card-heading {
          font-size: 1.3rem;
          color: var(--navy);
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid #F1F5F9;
          padding-bottom: 12px;
        }
        .body-text {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
        }
        .sub-heading {
          font-size: 0.95rem;
          color: var(--navy);
          margin-top: 8px;
        }

        .standards-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .std-pill {
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.84rem;
          color: var(--navy);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .advantages-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .adv-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--text-main);
        }

        .sub-placeholder-box {
          margin-top: 14px;
        }

        .detail-cta-box {
          background: var(--navy-badge-bg);
          border-color: #CBD5E1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 32px;
          margin-bottom: 90px;
          flex-wrap: wrap;
          gap: 20px;
        }
        .cta-heading {
          font-size: 1.4rem;
          color: var(--navy);
          margin-bottom: 4px;
        }
        .cta-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
        }
      `})]})}function pg({onOpenContact:e}){const t=[{slug:"oil-gas",title:"Oil & Gas (Pipelines, Refineries & Storage Tanks)",icon:bd,desc:"Advanced NDT solutions for upstream deepwater pipelines, downstream refinery turnarounds, process piping, and API 653 storage tank floor scanning.",placeholderLabel:"Refinery API Storage Tank & Offshore Pipeline Inspection"},{slug:"railways",title:"Railways (USFD Track & Rolling Stock)",icon:Ld,desc:"Specialized ultrasonic flaw detection (USFD) for continuous rail tracks, thermit welds, locomotive solid/hollow axles, and wheelset overhauls.",placeholderLabel:"Ultrasonic Railway Track USFD Trolley & Axle NDT"},{slug:"power-plants",title:"Power Generation (Boilers & Turbines)",icon:Md,desc:"High-speed MFL tube testing for heat exchangers, boiler headers, steam line welds, and turbine rotor ultrasonic flaw evaluation.",placeholderLabel:"Power Plant Boiler Tube MFL & Heat Exchanger NDT"},{slug:"mining",title:"Mining & Heavy Infrastructure",icon:Cr,desc:"Structural steel weld testing, excavator boom fatigue inspection, conveyor structure NDT, and heavy mining component integrity.",placeholderLabel:"Heavy Mining Excavator & Structural Steel Weld Inspection"}];return a.jsxs("div",{className:"page-wrapper",style:{paddingTop:"150px"},children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-tag",children:"APPLICATIONS & INDUSTRY SECTORS"}),a.jsxs("h2",{className:"section-title",children:["Sector-Specific ",a.jsx("span",{className:"text-orange",children:"NDT Applications"})]}),a.jsx("p",{className:"section-subtitle",children:"Dedicated industry sub-pages outlining high-risk asset challenges across Africa, specialized field inspection crews, and code compliance."})]}),a.jsx("div",{className:"grid-2 sector-full-grid",children:t.map(n=>{const r=n.icon;return a.jsxs("div",{className:"clean-card sector-overview-card",children:[a.jsxs("div",{className:"card-top-row",children:[a.jsxs("span",{className:"badge badge-orange",children:[a.jsx(r,{size:13})," Industrial Sector"]}),a.jsx(I,{to:`/applications/${n.slug}`,className:"view-subpage-link",children:"Detailed Sector Sub-page →"})]}),a.jsx("h3",{className:"card-title",children:n.title}),a.jsx("p",{className:"card-desc",children:n.desc}),a.jsx("div",{className:"card-placeholder-box",children:a.jsx(Xe,{label:n.placeholderLabel,recommendedSize:"800 x 450 px",height:"200px",aspect:"16/9"})}),a.jsxs("div",{className:"card-action-bar",children:[a.jsxs(I,{to:`/applications/${n.slug}`,className:"btn btn-navy btn-sm",children:[a.jsx("span",{children:"View Sector Sub-Page"}),a.jsx($e,{size:14})]}),a.jsx("button",{onClick:()=>e(n.title),className:"btn btn-outline btn-sm",children:"Request Scope"})]})]},n.slug)})})]}),a.jsx("style",{children:`
        .sector-full-grid {
          margin-bottom: 90px;
        }
        .sector-overview-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .view-subpage-link {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }
        .card-title {
          font-size: 1.35rem;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .card-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .card-placeholder-box {
          margin-bottom: 20px;
        }
        .card-action-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid #F1F5F9;
          padding-top: 16px;
        }
      `})]})}function mg({onOpenContact:e}){const{slug:t}=Sd(),n={"oil-gas":{title:"Oil & Gas (Pipelines, Refineries & Storage Tanks)",icon:bd,subtitle:"Asset integrity solutions for upstream offshore rigs, midstream gas pipelines & downstream refineries.",overview:"Africa’s Oil & Gas infrastructure operates under demanding environmental conditions—from marine corrosion in West Africa offshore deepwater fields to high-temperature operating units in refineries. IXAR Africa provides complete API compliant asset integrity and advanced NDT screening.",applications:["Automated Ultrasonic Testing (AUT) for high-pressure gas & crude pipeline girth welds","API 653 Aboveground Storage Tank Floor MFL Scanning & Out-of-Roundness Audits","Pulse Eddy Current Testing (PECT) for Corrosion Under Insulation (CUI) on process lines","API 570 Process Piping Thickness surveys & Risk-Based Inspection (RBI) programs"],placeholderMain:"Offshore Gas Pipeline & Refinery Tank Inspection Field Setup",placeholderDetail:"API Tank Floor MFL Scanner & AUT Crawler Screenshot"},railways:{title:"Railways (USFD Track & Rolling Stock)",icon:Ld,subtitle:"Ultrasonic flaw detection for African continuous welded rails, joints & rolling stock wheelsets.",overview:"Rail network safety is paramount to prevent derailments and catastrophic track failures. IXAR Africa has been an industry leader in Railway Ultrasonic Flaw Detection (USFD), deploying specialist teams with rail trolleys and axle probes across African rail freight corridors.",applications:["Continuous Welded Rail (CWR) & joint bar ultrasonic flaw detection (USFD)","Alumino-thermic weld quality verification & transverse crack sizing","Locomotive solid & hollow axle fatigue crack ultrasonic testing","Rolling stock wheelset rim & bogie structural magnetic particle inspection"],placeholderMain:"Ultrasonic Railway Track USFD Trolley Scanning Rail Lines",placeholderDetail:"Railway Axle Ultrasonic Probe Test Display & Flaw Waveform"},"power-plants":{title:"Power Generation (Boilers & Turbines)",icon:Md,subtitle:"Rapid turnaround tube testing & turbine inspection for thermal, hydro & geothermal facilities.",overview:"Unplanned power plant boiler tube outages cause severe grid disruption. IXAR Africa provides emergency shutdown tube testing (MFL/RFT) and high-temperature NDT inspections to guarantee boiler availability and turbine rotor integrity.",applications:["100% full-length tube inspection of boilers, feedwater heaters, and condensers (MFL / RFT)","Steam pipe girth weld Phased Array Ultrasonic (PAUT) & TOFD inspections","Turbine rotor disk & blade root ultrasonic flaw sizing","Geothermal steam separator & pressure vessel API 510 evaluations"],placeholderMain:"Power Plant Boiler Header & Heat Exchanger Tube Sheet NDT",placeholderDetail:"Tube Sheet Color Grid Inspection Report & MFL Signal Map"},mining:{title:"Mining & Heavy Infrastructure",icon:Cr,subtitle:"Structural weld testing & heavy machinery fatigue inspection for African mine sites.",overview:"Mining equipment such as draglines, excavators, crushers, and conveyor structures operate under extreme cyclic loads. IXAR Africa performs routine non-destructive testing to detect fatigue cracks before structural failure occurs.",applications:["Excavator boom, arm, and chassis structural weld magnetic particle / ultrasonic NDT","Crusher shaft & mill trunnion ultrasonic fatigue crack evaluation","Mine shaft gantry & conveyor structural steel integrity audits","Thick plate weld Radiographic & Ultrasonic testing according to AWS D1.1"],placeholderMain:"Heavy Mining Dragline & Excavator Boom Weld NDT Setup",placeholderDetail:"Structural Steel Weld Ultrasonic Flaw Detection Screen"}},r=n[t]||n["oil-gas"],i=r.icon;return a.jsxs("div",{className:"page-wrapper",style:{paddingTop:"150px"},children:[a.jsxs("div",{className:"container",children:[a.jsxs(I,{to:"/applications",className:"back-link",children:[a.jsx(Fd,{size:16}),a.jsx("span",{children:"Back to All Industry Applications"})]}),a.jsxs("div",{className:"detail-header",children:[a.jsxs("span",{className:"badge badge-orange",children:[a.jsx(i,{size:13})," Industrial Sector Sub-Page"]}),a.jsx("h1",{className:"detail-title",children:r.title}),a.jsx("p",{className:"detail-subtitle",children:r.subtitle})]}),a.jsx("div",{className:"detail-hero-placeholder",children:a.jsx(Xe,{label:r.placeholderMain,recommendedSize:"1200 x 600 px (Sector Operations Field Photography)",height:"380px",aspect:"16/9"})}),a.jsxs("div",{className:"grid-2 detail-content-grid",children:[a.jsxs("div",{className:"clean-card detail-card",children:[a.jsxs("h3",{className:"card-heading",children:[a.jsx(Ft,{size:18,color:"var(--primary)"})," Industrial Sector Overview"]}),a.jsx("p",{className:"body-text",children:r.overview})]}),a.jsxs("div",{className:"clean-card detail-card",children:[a.jsxs("h3",{className:"card-heading",children:[a.jsx(re,{size:18,color:"var(--navy)"})," Primary Field Applications"]}),a.jsx("div",{className:"advantages-list",children:r.applications.map((l,o)=>a.jsxs("div",{className:"adv-item",children:[a.jsx(re,{size:16,color:"var(--primary)"}),a.jsx("span",{children:l})]},o))}),a.jsx("div",{className:"sub-placeholder-box",children:a.jsx(Xe,{label:r.placeholderDetail,recommendedSize:"800 x 400 px (Field Inspection Screenshot)",height:"180px",aspect:"16/9"})})]})]}),a.jsxs("div",{className:"clean-card detail-cta-box",children:[a.jsxs("div",{children:[a.jsxs("h3",{className:"cta-heading",children:["Need ",r.title," Inspection Services?"]}),a.jsx("p",{className:"cta-sub",children:"Mobilize certified IXAR crews to your site anywhere across Africa."})]}),a.jsxs("button",{onClick:()=>e(r.title),className:"btn btn-primary btn-lg",children:[a.jsx("span",{children:"Request Sector Inspection Proposal"}),a.jsx($e,{size:16})]})]})]}),a.jsx("style",{children:`
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .back-link:hover { color: var(--primary); }

        .detail-header {
          margin-bottom: 24px;
        }
        .detail-title {
          font-size: 2.3rem;
          color: var(--navy);
          margin: 8px 0;
        }
        .detail-subtitle {
          font-size: 1.1rem;
          color: var(--text-muted);
        }

        .detail-hero-placeholder {
          margin-bottom: 40px;
        }

        .detail-content-grid {
          margin-bottom: 40px;
        }
        .detail-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .card-heading {
          font-size: 1.3rem;
          color: var(--navy);
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid #F1F5F9;
          padding-bottom: 12px;
        }
        .body-text {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .advantages-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .adv-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--text-main);
        }

        .sub-placeholder-box {
          margin-top: 14px;
        }

        .detail-cta-box {
          background: var(--navy-badge-bg);
          border-color: #CBD5E1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 32px;
          margin-bottom: 90px;
          flex-wrap: wrap;
          gap: 20px;
        }
        .cta-heading {
          font-size: 1.4rem;
          color: var(--navy);
          margin-bottom: 4px;
        }
        .cta-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
        }
      `})]})}function hg(){const[e,t]=v.useState(""),[n,r]=v.useState(!1),[i,l]=v.useState(null),o={"BARC-2025-RT8912":{id:"BARC-2025-RT8912",type:"BARC Radiation Safety Course for Industrial Radiographers",holder:"Kwame Nkrumah",issuer:"Radiological Physics & Advisory Division, BARC (Bhabha Atomic Research Centre)",status:"VALID / VERIFIED",issueDate:"15 Jan 2025",expiryDate:"14 Jan 2030",accreditation:"RPAD / AERB Approved",region:"Takoradi Hub, Ghana"},"ASNT-IXAR-4492":{id:"ASNT-IXAR-4492",type:"ASNT Level III NDT Specialist (AUT & PAUT)",holder:"Johan Van Der Merwe",issuer:"IXAR NDT Quality Examination Board",status:"VALID / VERIFIED",issueDate:"10 Aug 2024",expiryDate:"09 Aug 2029",accreditation:"ASNT SNT-TC-1A / ISO 9712",region:"Johannesburg Hub, South Africa"}},s=u=>{if(u.preventDefault(),!e.trim())return;r(!0);const c=o[e.trim().toUpperCase()];l(c||{id:e.toUpperCase(),type:"IXAR Advanced NDT Inspection Certificate (AUT / PAUT)",holder:"Verified Field Inspector",issuer:"IXAR Pan-African Quality Assurance Board",status:"VALID / VERIFIED",issueDate:"02 Feb 2025",expiryDate:"01 Feb 2028",accreditation:"ISO 9001:2015 & BARC Compliant",region:"Pan-African Operations"})};return a.jsxs("section",{id:"certifications",className:"section verifier-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-tag",children:[a.jsx(Kt,{size:14})," BARC & NDT ACCREDITATION"]}),a.jsxs("h2",{className:"section-title",children:["Certificate ",a.jsx("span",{className:"text-orange",children:"Verification Portal"})]}),a.jsx("p",{className:"section-subtitle",children:"Verify the authenticity of BARC Radiation Safety Course certifications and ASNT Level II/III inspector credentials issued by IXAR."})]}),a.jsxs("div",{className:"clean-card verifier-card",children:[a.jsxs("form",{onSubmit:s,className:"search-form",children:[a.jsxs("div",{className:"search-input-wrapper",children:[a.jsx(ng,{size:18,className:"search-icon"}),a.jsx("input",{type:"text",placeholder:"Enter Cert ID (e.g. BARC-2025-RT8912 or ASNT-IXAR-4492)",value:e,onChange:u=>t(u.target.value),className:"cert-input"})]}),a.jsx("button",{type:"submit",className:"btn btn-primary",children:a.jsx("span",{children:"Verify Certificate"})})]}),a.jsxs("div",{className:"sample-cert-pills",children:[a.jsx("span",{children:"Try sample certs:"}),a.jsx("button",{onClick:()=>{t("BARC-2025-RT8912"),r(!0),l(o["BARC-2025-RT8912"])},className:"sample-pill",children:"BARC-2025-RT8912 (BARC Radiography)"}),a.jsx("button",{onClick:()=>{t("ASNT-IXAR-4492"),r(!0),l(o["ASNT-IXAR-4492"])},className:"sample-pill",children:"ASNT-IXAR-4492 (Level III PAUT)"})]}),n&&i&&a.jsxs("div",{className:"result-card",children:[a.jsxs("div",{className:"result-header",children:[a.jsxs("div",{className:"status-badge valid",children:[a.jsx(re,{size:16}),a.jsx("span",{children:i.status})]}),a.jsxs("div",{className:"cert-id-tag",children:["ID: ",i.id]})]}),a.jsxs("div",{className:"result-body-grid",children:[a.jsxs("div",{className:"res-item",children:[a.jsxs("span",{className:"res-label",children:[a.jsx(Yh,{size:14})," Course / Certification:"]}),a.jsx("strong",{className:"res-val",children:i.type})]}),a.jsxs("div",{className:"res-item",children:[a.jsxs("span",{className:"res-label",children:[a.jsx(lg,{size:14})," Certified Holder:"]}),a.jsx("strong",{className:"res-val",children:i.holder})]}),a.jsxs("div",{className:"res-item",children:[a.jsxs("span",{className:"res-label",children:[a.jsx(Kt,{size:14})," Issuing Authority:"]}),a.jsx("strong",{className:"res-val",children:i.issuer})]}),a.jsxs("div",{className:"res-item",children:[a.jsxs("span",{className:"res-label",children:[a.jsx(Dd,{size:14})," Global Standard:"]}),a.jsx("strong",{className:"res-val",children:i.accreditation})]}),a.jsxs("div",{className:"res-item",children:[a.jsxs("span",{className:"res-label",children:[a.jsx(zd,{size:14})," Issued & Expiry:"]}),a.jsxs("strong",{className:"res-val",children:[i.issueDate," — ",i.expiryDate]})]})]})]})]})]}),a.jsx("style",{children:`
        .verifier-section {
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
        }
        .verifier-card {
          max-width: 780px;
          margin: 0 auto;
          background: #FFFFFF;
        }
        .search-form {
          display: flex;
          gap: 12px;
          margin-bottom: 14px;
        }
        .search-input-wrapper {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
        }
        .search-icon {
          position: absolute;
          left: 16px;
          color: var(--text-muted);
        }
        .cert-input {
          width: 100%;
          padding: 12px 16px 12px 46px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          color: var(--navy);
          font-size: 0.95rem;
          font-family: var(--font-mono);
          outline: none;
          font-weight: 500;
        }
        .cert-input:focus {
          border-color: var(--primary);
        }

        .sample-cert-pills {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .sample-pill {
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          border-radius: 100px;
          padding: 4px 12px;
          color: var(--navy);
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .sample-pill:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .result-card {
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          border-radius: var(--radius-md);
          padding: 20px;
        }
        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #DCFCE7;
        }
        .status-badge.valid {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #16A34A;
          color: #FFFFFF;
          padding: 4px 12px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.8rem;
          font-family: var(--font-mono);
        }
        .cert-id-tag {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--navy);
          font-weight: 700;
        }

        .result-body-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .res-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .res-label {
          font-size: 0.76rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
        }
        .res-val {
          font-size: 0.92rem;
          color: var(--navy);
        }

        @media (max-width: 600px) {
          .search-form { flex-direction: column; }
          .result-body-grid { grid-template-columns: 1fr; }
        }
      `})]})}function gg({onOpenContact:e}){return a.jsxs("div",{className:"page-wrapper",style:{paddingTop:"150px"},children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-tag",children:[a.jsx(Kt,{size:14})," BARC & NDT ACCREDITATION"]}),a.jsxs("h2",{className:"section-title",children:["Radiation Safety ",a.jsx("span",{className:"text-orange",children:"Training & Certification"})]}),a.jsx("p",{className:"section-subtitle",children:"Industry-recognized training courses in collaboration with Radiological Physics & Advisory Division, Bhabha Atomic Research Centre (BARC), Mumbai."})]}),a.jsxs("div",{className:"grid-2 training-grid",style:{marginBottom:"50px"},children:[a.jsxs("div",{className:"clean-card course-card",children:[a.jsxs("div",{className:"course-badge",children:[a.jsx(Jh,{size:14})," BARC Collaborative Course"]}),a.jsx("h3",{className:"course-title",children:"Training Cum Certification Course on Radiation Safety for Industrial Radiographers"}),a.jsx("p",{className:"course-desc",children:"Mandatory qualification course for NDT radiographers operating industrial gamma radiography cameras and X-ray generators in compliance with AERB radiation safety rules."}),a.jsx("div",{className:"course-placeholder",children:a.jsx(Xe,{label:"BARC Training Center Classroom & Gamma Radiography Practical Lab",recommendedSize:"800 x 450 px",height:"220px",aspect:"16/9"})}),a.jsxs("div",{className:"course-features",children:[a.jsxs("div",{className:"c-feat",children:[a.jsx(re,{size:15,color:"var(--primary)"})," RPAD / BARC Advisory Division Curriculum"]}),a.jsxs("div",{className:"c-feat",children:[a.jsx(re,{size:15,color:"var(--primary)"})," Practical Exposure & Shielding Calculations"]}),a.jsxs("div",{className:"c-feat",children:[a.jsx(re,{size:15,color:"var(--primary)"})," Radiation Protection Officer (RPO) Path"]})]}),a.jsxs("button",{onClick:()=>e("BARC Training Course Registration"),className:"btn btn-primary btn-lg",style:{marginTop:"20px",width:"100%"},children:[a.jsx("span",{children:"Register for 2026 Batch"}),a.jsx($e,{size:16})]})]}),a.jsxs("div",{className:"clean-card course-card",children:[a.jsxs("div",{className:"course-badge",children:[a.jsx(ig,{size:14})," Level II & III Prep"]}),a.jsx("h3",{className:"course-title",children:"ASNT Level II / III Examination Preparation Courses"}),a.jsx("p",{className:"course-desc",children:"Advanced technical preparatory training for UT, PAUT, TOFD, MFL, and PT/MT methods following SNT-TC-1A and ISO 9712 guidelines."}),a.jsx("div",{className:"course-placeholder",children:a.jsx(Xe,{label:"Ultrasonic & Phased Array Calibration Practical Testing Room",recommendedSize:"800 x 450 px",height:"220px",aspect:"16/9"})}),a.jsxs("div",{className:"course-features",children:[a.jsxs("div",{className:"c-feat",children:[a.jsx(re,{size:15,color:"var(--primary)"})," Instructed by Senior ASNT Level III Specialists"]}),a.jsxs("div",{className:"c-feat",children:[a.jsx(re,{size:15,color:"var(--primary)"})," Calibration Block & Flawed Sample Scanning"]}),a.jsxs("div",{className:"c-feat",children:[a.jsx(re,{size:15,color:"var(--primary)"})," Procedure Qualification Record (PQR) Writing"]})]}),a.jsxs("button",{onClick:()=>e("ASNT Level II/III Training Enrollment"),className:"btn btn-navy btn-lg",style:{marginTop:"20px",width:"100%"},children:[a.jsx("span",{children:"Enroll in ASNT Course"}),a.jsx($e,{size:16})]})]})]}),a.jsx(hg,{})]}),a.jsx("style",{children:`
        .course-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .course-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--primary-light);
          color: var(--primary-dark);
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 700;
          width: fit-content;
          margin-bottom: 12px;
        }
        .course-title {
          font-size: 1.35rem;
          color: var(--navy);
          margin-bottom: 10px;
        }
        .course-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .course-placeholder {
          margin-bottom: 20px;
        }
        .course-features {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .c-feat {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--text-main);
          font-weight: 500;
        }
      `})]})}function vg({onOpenContact:e}){const[t,n]=v.useState("sa"),r={sa:{country:"South Africa",flag:"🇿🇦",hubs:"Johannesburg | Cape Town | Secunda",emailNode:"ZA-JNB-TECH-01 (Primary Regional Desk)",sectors:["Mining & Minerals","Power Generation (Eskom)","Railway Infrastructure","Refineries"],services:["USFD Railway Testing","AUT Girth Weld","API 653 Tank Floor Scanning","Tube Testing"],address:"IXAR Africa Engineering Park, Sandton, Johannesburg, South Africa",phone:"+27 11 098 7654",email:"southafrica@ixar-africa.com"},ng:{country:"Nigeria",flag:"🇳🇬",hubs:"Lagos | Port Harcourt | Warri",emailNode:"NG-LOS-TECH-02 (West Africa Desk)",sectors:["Offshore / Onshore Oil & Gas","Deepwater Pipelines","Petrochemical Plants"],services:["AUT Girth Weld Pipeline","PECT CUI Corrosion Screening","Phased Array Ultrasonic"],address:"Victoria Island Energy Center, Lagos, Nigeria",phone:"+234 1 890 4321",email:"nigeria@ixar-africa.com"},gh:{country:"Ghana",flag:"🇬🇭",hubs:"Takoradi | Accra",emailNode:"GH-ACC-TECH-03",sectors:["Gold Mining Facilities","Offshore Oil Fields (Jubilee)","Maritime Shipyards"],services:["Tube Inspection (MFL)","Structural Steel NDT","Radiation Safety BARC Course"],address:"Harbor Commercial Area, Takoradi, Ghana",phone:"+233 30 298 7654",email:"ghana@ixar-africa.com"},ke:{country:"Kenya & East Africa",flag:"🇰🇪",hubs:"Nairobi | Mombasa",emailNode:"KE-NBO-TECH-04 (East Africa Hub)",sectors:["Geothermal Power","Standard Gauge Railway (SGR)","Port Facilities"],services:["USFD Rail & Weld Inspection","Boiler Tube Testing","Asset Integrity Management"],address:"Kilimani Business District, Nairobi, Kenya",phone:"+254 20 789 0123",email:"kenya@ixar-africa.com"},mz:{country:"Mozambique",flag:"🇲🇿",hubs:"Pemba | Maputo",emailNode:"MZ-MPM-TECH-05",sectors:["LNG Deepwater Megaprojects","Coal Logistics Rail","Harbor Terminals"],services:["AUT Long-Distance Gas Pipelines","Computed Radiography","SHEQ Audits"],address:"Av. Julius Nyerere, Maputo, Mozambique",phone:"+258 21 456 789",email:"mozambique@ixar-africa.com"}};return a.jsxs("section",{id:"footprint",className:"section footprint-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-tag",children:[a.jsx(Ji,{size:14})," PAN-AFRICAN FOOTPRINT"]}),a.jsxs("h2",{className:"section-title",children:["Strategic Operations Across ",a.jsx("span",{className:"text-orange",children:"African Industrial Hubs"})]}),a.jsx("p",{className:"section-subtitle",children:"Local response teams, mobile NDT laboratories, and rapid deployment crews positioned to serve key industrial sectors across the continent."}),a.jsx("div",{className:"region-selector-bar",children:Object.keys(r).map(i=>a.jsxs("button",{className:`region-btn ${t===i?"active":""}`,onClick:()=>n(i),children:[a.jsx("span",{className:"flag-icon",children:r[i].flag}),a.jsx("span",{children:r[i].country})]},i))})]}),a.jsx("div",{className:"clean-card region-detail-card",children:a.jsxs("div",{className:"region-card-grid",children:[a.jsxs("div",{className:"region-info-left",children:[a.jsxs("div",{className:"region-title-group",children:[a.jsx("span",{className:"region-flag-large",children:r[t].flag}),a.jsxs("div",{children:[a.jsxs("h3",{className:"region-name",children:[r[t].country," Regional Hub"]}),a.jsxs("div",{className:"region-hubs",children:[a.jsx(Nn,{size:14})," ",r[t].hubs]})]})]}),a.jsxs("div",{className:"info-block",children:[a.jsxs("div",{className:"block-label",children:[a.jsx(rg,{size:14,color:"var(--primary)"})," Operations Desk"]}),a.jsx("div",{className:"block-val",children:r[t].emailNode})]}),a.jsxs("div",{className:"info-block",children:[a.jsxs("div",{className:"block-label",children:[a.jsx(Ft,{size:14,color:"var(--navy)"})," Primary Sectors Served"]}),a.jsx("div",{className:"tags-flex",children:r[t].sectors.map((i,l)=>a.jsx("span",{className:"sector-tag",children:i},l))})]})]}),a.jsxs("div",{className:"region-info-right",children:[a.jsxs("div",{className:"info-block",children:[a.jsxs("div",{className:"block-label",children:[a.jsx(re,{size:14,color:"#16A34A"})," Deployed Field Capabilities"]}),a.jsx("div",{className:"capabilities-list",children:r[t].services.map((i,l)=>a.jsxs("div",{className:"cap-item",children:[a.jsx(re,{size:15,color:"var(--primary)"}),a.jsx("span",{children:i})]},l))})]}),a.jsxs("div",{className:"contact-sub-card",children:[a.jsxs("div",{className:"contact-item",children:[a.jsx(Nn,{size:14})," ",r[t].address]}),a.jsxs("div",{className:"contact-item",children:[a.jsx(el,{size:14})," ",r[t].phone]}),a.jsxs("div",{className:"contact-item",children:[a.jsx(Zi,{size:14})," ",r[t].email]}),a.jsxs("button",{onClick:()=>e(`Regional Hub: ${r[t].country}`),className:"btn btn-primary btn-sm",style:{marginTop:"14px",width:"100%"},children:[a.jsx("span",{children:"Connect with Regional Engineering Office"}),a.jsx($e,{size:14})]})]})]})]})})]}),a.jsx("style",{children:`
        .footprint-section {
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
        }
        .region-selector-bar {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .region-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 100px;
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .region-btn:hover {
          color: var(--navy);
          border-color: #CBD5E1;
        }
        .region-btn.active {
          background: var(--navy);
          color: #FFFFFF;
          border-color: var(--navy);
        }
        .flag-icon {
          font-size: 1.1rem;
        }

        .region-detail-card {
          margin-top: 36px;
          background: #FFFFFF;
        }
        .region-card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
        }
        .region-title-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 18px;
          border-bottom: 1px solid #F1F5F9;
        }
        .region-flag-large {
          font-size: 2.8rem;
          line-height: 1;
        }
        .region-name {
          font-size: 1.5rem;
          color: var(--navy);
        }
        .region-hubs {
          color: var(--primary);
          font-size: 0.88rem;
          font-family: var(--font-mono);
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 2px;
          font-weight: 700;
        }

        .info-block {
          margin-bottom: 20px;
        }
        .block-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
        }
        .block-val {
          color: var(--navy);
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.95rem;
        }

        .tags-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .sector-tag {
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          padding: 5px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .capabilities-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cap-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--text-main);
          background: #F8FAFC;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          border: 1px solid #E2E8F0;
          font-weight: 500;
        }

        .contact-sub-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .contact-item {
          font-size: 0.85rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 900px) {
          .region-card-grid { grid-template-columns: 1fr; }
        }
      `})]})}function yg({onOpenContact:e}){return a.jsxs("div",{className:"page-wrapper",style:{paddingTop:"150px"},children:[a.jsxs("div",{className:"container",style:{marginBottom:"40px"},children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-tag",children:"PAN-AFRICAN OPERATIONS NETWORK"}),a.jsxs("h2",{className:"section-title",children:["Regional Hubs & ",a.jsx("span",{className:"text-orange",children:"Deployment Network"})]}),a.jsx("p",{className:"section-subtitle",children:"Providing rapid-response NDT engineering crews, mobile laboratories, and localized technical support across Southern, West, and East Africa."})]}),a.jsx(Xe,{label:"Pan-African Regional Hub Network & Operational Logistics Map",recommendedSize:"1200 x 500 px",height:"320px",aspect:"16/9"})]}),a.jsx(vg,{onOpenContact:e})]})}function xg({onOpenContact:e}){const[t,n]=v.useState("oilgas"),[r,i]=v.useState("aut"),[l,o]=v.useState("medium"),s={oilgas:{name:"Oil & Gas Offshore / Onshore Pipeline",base:4500},refinery:{name:"Refinery & Petrochem Storage",base:3800},power:{name:"Power Plant Boiler / Turbine",base:3200},railway:{name:"Railway USFD Track & Axle",base:2800},mining:{name:"Mining Heavy Equipment & Structural",base:2500}},u={aut:{name:"Automated Ultrasonic (AUT)",mult:1.5},paut:{name:"Phased Array (PAUT)",mult:1.4},pect:{name:"Pulse Eddy Current (PECT)",mult:1.3},mfl:{name:"Tube Inspection (MFL)",mult:1.25},usfd:{name:"USFD Railway Flaw Detection",mult:1.2},cr:{name:"Computed Radiography (CR/DR)",mult:1.1}},c={small:{label:"Small / Targeted Inspection (1-3 Days)",mult:1},medium:{label:"Medium Project (1-2 Weeks)",mult:2.2},large:{label:"Large Turnaround / Site-wide Shutdown",mult:4.5}},h=Math.round(s[t].base*u[r].mult*c[l].mult),p=Math.round(h*1.3);return a.jsxs("section",{id:"calculator",className:"section calculator-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-tag",children:[a.jsx(Pd,{size:14})," INSTANT NDT PROJECT ESTIMATOR"]}),a.jsxs("h2",{className:"section-title",children:["Estimate Your ",a.jsx("span",{className:"text-orange",children:"NDT Project Budget"})]}),a.jsx("p",{className:"section-subtitle",children:"Configure your sector, inspection methodology, and project scale for an instant indicative budget estimate for field mobilization."})]}),a.jsx("div",{className:"clean-card calc-main-card",children:a.jsxs("div",{className:"calc-grid",children:[a.jsxs("div",{className:"calc-controls",children:[a.jsxs("h3",{className:"calc-box-title",children:[a.jsx(Yi,{size:18,color:"var(--primary)"})," NDT Scope Parameters"]}),a.jsxs("div",{className:"control-group",children:[a.jsx("div",{className:"control-label",children:a.jsx("span",{children:"Industrial Sector:"})}),a.jsx("select",{value:t,onChange:m=>n(m.target.value),className:"calc-select",children:Object.keys(s).map(m=>a.jsx("option",{value:m,children:s[m].name},m))})]}),a.jsxs("div",{className:"control-group",children:[a.jsx("div",{className:"control-label",children:a.jsx("span",{children:"Primary NDT Inspection Technique:"})}),a.jsx("select",{value:r,onChange:m=>i(m.target.value),className:"calc-select",children:Object.keys(u).map(m=>a.jsx("option",{value:m,children:u[m].name},m))})]}),a.jsxs("div",{className:"control-group",children:[a.jsx("div",{className:"control-label",children:a.jsx("span",{children:"Project Scale & Duration:"})}),a.jsx("div",{className:"choice-grid column",children:Object.keys(c).map(m=>a.jsx("button",{className:`choice-btn ${l===m?"active":""}`,onClick:()=>o(m),children:c[m].label},m))})]})]}),a.jsxs("div",{className:"calc-summary-panel",children:[a.jsx("div",{className:"summary-badge",children:"ESTIMATED BUDGET RANGE"}),a.jsx("div",{className:"price-display",children:a.jsxs("div",{className:"price-amount",children:["$",h.toLocaleString()," - $",p.toLocaleString()]})}),a.jsx("div",{className:"billing-note",children:"Indicative mobilization & inspection cost range for African regional hub deployment."}),a.jsxs("div",{className:"summary-line-items",children:[a.jsxs("div",{className:"line-item",children:[a.jsx("span",{children:"Target Industry:"}),a.jsx("strong",{children:s[t].name})]}),a.jsxs("div",{className:"line-item",children:[a.jsx("span",{children:"Selected Method:"}),a.jsx("strong",{children:u[r].name})]}),a.jsxs("div",{className:"line-item",children:[a.jsx("span",{children:"Certified Crew:"}),a.jsx("strong",{children:"ASNT & BARC Level II / III"})]})]}),a.jsxs("button",{onClick:()=>e(`NDT Estimate: ${s[t].name} (${u[r].name}) - Est: $${h.toLocaleString()}-$${p.toLocaleString()}`),className:"btn btn-primary btn-lg",style:{width:"100%",marginTop:"20px"},children:[a.jsx("span",{children:"Request Formal Proposal"}),a.jsx($e,{size:16})]})]})]})})]}),a.jsx("style",{children:`
        .calculator-section {
          background: #FFFFFF;
        }
        .calc-main-card {
          margin-top: 10px;
          padding: 36px;
        }
        .calc-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 36px;
        }
        .calc-box-title {
          font-size: 1.25rem;
          color: var(--navy);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          padding-bottom: 14px;
          border-bottom: 1px solid #E2E8F0;
        }

        .control-group {
          margin-bottom: 20px;
        }
        .control-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: var(--navy);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .choice-grid.column {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .choice-btn {
          padding: 12px 16px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }
        .choice-btn:hover {
          border-color: #CBD5E1;
        }
        .choice-btn.active {
          background: var(--navy);
          color: #FFFFFF;
          border-color: var(--navy);
        }

        .calc-select {
          width: 100%;
          padding: 11px 14px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-sm);
          color: var(--navy);
          font-size: 0.92rem;
          outline: none;
          font-weight: 500;
        }

        /* Summary Panel */
        .calc-summary-panel {
          background: #F8FAFC;
          border-radius: var(--radius-lg);
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #E2E8F0;
        }
        .summary-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .price-display {
          display: flex;
          align-items: baseline;
          margin-bottom: 8px;
        }
        .price-amount {
          font-family: var(--font-mono);
          font-size: 2.1rem;
          font-weight: 900;
          color: var(--navy);
        }

        .billing-note {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .summary-line-items {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px solid #E2E8F0;
          padding-top: 16px;
        }
        .line-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .line-item strong {
          color: var(--navy);
        }

        @media (max-width: 900px) {
          .calc-grid { grid-template-columns: 1fr; }
          .calc-main-card { padding: 24px; }
        }
      `})]})}function wg({onOpenContact:e}){return a.jsx("div",{className:"page-wrapper",style:{paddingTop:"150px"},children:a.jsx(xg,{onOpenContact:e})})}function kg({onOpenContact:e}){const t=[{title:"AUT Pipeline Girth Weld Inspection",client:"Ace Pipeline Contracts & West Africa Offshore",location:"Takoradi / Chaara Offshore Corridor",date:"Feb 2023 - Jan 2024",highlight:"100% Zero Defect Tolerance Traceability",desc:"Deployed Automated Ultrasonic Testing (AUT) scanners on 36-inch high-pressure gas pipelines under stringent marine offshore environment with zero turnaround delays.",tag:"Oil & Gas"},{title:"USFD Testing of Rail Tracks & Axles",client:"East Coast & Southern African Railways",location:"Mozambique & South Africa Rail Networks",date:"April 2023 - July 2025",highlight:"Over 4,500 km Rail Inspected",desc:"High-sensitivity ultrasonic flaw detection deployed on critical rail tracks, thermit welds, and rolling stock wheelsets to ensure rail safety compliance.",tag:"Railways"},{title:"Thermal Power Plant Boiler Tube Testing",client:"600 MW Thermal Power Facility",location:"Secunda Hub, South Africa",date:"Nov 2024 - Feb 2025",highlight:"Magnetic Flux Leakage (MFL)",desc:"Emergency shutdown inspection of 12,000+ boiler tubes using MFL and Remote Field Testing (RFT) to locate wall loss and prevent boiler tube leaks.",tag:"Power Generation"},{title:"API 653 Aboveground Storage Tank Audit",client:"Major West African Refinery Complex",location:"Lagos / Takoradi Refinery Terminals",date:"Aug 2024 - Dec 2024",highlight:"Full Tank Floor MFL Mapping",desc:"Comprehensive out-of-service inspection using motorized MFL floor scanners, shell ultrasonic thickness mapping, and API 653 fitness-for-service reporting.",tag:"Refinery Integrity"}];return a.jsxs("section",{id:"case-studies",className:"section cases-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-tag",children:[a.jsx(Cr,{size:14})," PROVEN TRACK RECORD"]}),a.jsxs("h2",{className:"section-title",children:["Featured ",a.jsx("span",{className:"text-orange",children:"Pan-African Case Studies"})]}),a.jsx("p",{className:"section-subtitle",children:"Demonstrating our technical excellence, speed of deployment, and asset integrity compliance across major continental industrial projects."})]}),a.jsx("div",{className:"grid-2",children:t.map((n,r)=>a.jsxs("div",{className:"clean-card highlight-orange case-card",children:[a.jsxs("div",{className:"case-card-header",children:[a.jsx("span",{className:"badge badge-orange",children:n.tag}),a.jsxs("span",{className:"case-highlight",children:[a.jsx(Kt,{size:13})," ",n.highlight]})]}),a.jsx("h3",{className:"case-title",children:n.title}),a.jsxs("div",{className:"case-meta",children:[a.jsxs("span",{children:[a.jsx(Nn,{size:13,color:"var(--primary)"})," ",n.location]}),a.jsxs("span",{children:[a.jsx(zd,{size:13,color:"var(--text-muted)"})," ",n.date]})]}),a.jsx("p",{className:"case-desc",children:n.desc}),a.jsxs("div",{className:"case-footer",children:[a.jsxs("div",{className:"client-name",children:[a.jsx("strong",{children:"Client:"})," ",n.client]}),a.jsxs("button",{onClick:()=>e(`Case Study Inquiry: ${n.title}`),className:"btn btn-outline btn-sm",children:[a.jsx("span",{children:"View Technical Details"}),a.jsx($e,{size:14})]})]})]},r))})]}),a.jsx("style",{children:`
        .cases-section {
          background: #FFFFFF;
        }
        .case-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .case-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .case-highlight {
          font-size: 0.78rem;
          color: #15803D;
          font-weight: 700;
          font-family: var(--font-mono);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .case-title {
          font-size: 1.3rem;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .case-meta {
          display: flex;
          gap: 16px;
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 12px;
          font-weight: 500;
        }
        .case-meta span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .case-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .case-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #F1F5F9;
          padding-top: 14px;
        }
        .client-name {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .case-footer { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `})]})}function jg({onOpenContact:e}){return a.jsx("div",{className:"page-wrapper",style:{paddingTop:"150px"},children:a.jsx(kg,{onOpenContact:e})})}function Sg(){const[e,t]=iu.useState(!1),n=r=>{r.preventDefault(),t(!0)};return a.jsxs("div",{className:"page-wrapper",style:{paddingTop:"150px"},children:[a.jsxs("div",{className:"container",style:{marginBottom:"90px"},children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-tag",children:"CONNECT WITH IXAR ENGINEERING"}),a.jsxs("h2",{className:"section-title",children:["Request Inspection ",a.jsx("span",{className:"text-orange",children:"RFP & Proposal"})]}),a.jsx("p",{className:"section-subtitle",children:"Get in touch with our Pan-African regional engineering desk in South Africa, Nigeria, Ghana, Kenya, or Mozambique."})]}),a.jsxs("div",{className:"grid-2 contact-page-grid",children:[a.jsxs("div",{className:"clean-card contact-info-card",children:[a.jsxs("h3",{className:"card-heading",children:[a.jsx(Ft,{size:20,color:"var(--primary)"})," Operational Headquarters"]}),a.jsxs("div",{className:"contact-line-list",children:[a.jsxs("div",{className:"c-line",children:[a.jsx(Nn,{size:18,color:"var(--primary)"}),a.jsxs("div",{children:[a.jsx("strong",{children:"South Africa Headquarters:"}),a.jsx("p",{children:"IXAR Africa Tech Park, Sandton, Johannesburg"})]})]}),a.jsxs("div",{className:"c-line",children:[a.jsx(Zi,{size:18,color:"var(--navy)"}),a.jsxs("div",{children:[a.jsx("strong",{children:"Email Inquiry Desk:"}),a.jsx("p",{children:a.jsx("a",{href:"mailto:info@ixar-africa.com",children:"info@ixar-africa.com"})})]})]}),a.jsxs("div",{className:"c-line",children:[a.jsx(el,{size:18,color:"#16A34A"}),a.jsxs("div",{children:[a.jsx("strong",{children:"Telephone / WhatsApp Hotline:"}),a.jsx("p",{children:a.jsx("a",{href:"tel:+27110987654",children:"+27 11 098 7654"})})]})]})]}),a.jsxs("div",{className:"hub-hours-box",children:[a.jsx("strong",{children:"Emergency 24/7 Rapid Response Dispatch:"}),a.jsx("p",{children:"Mobile NDT crews ready to deploy for refinery turnarounds & railway outages."})]})]}),a.jsx("div",{className:"clean-card contact-form-card",children:e?a.jsxs("div",{className:"modal-success-screen",children:[a.jsx(re,{size:48,color:"#16A34A"}),a.jsx("h3",{className:"success-title",children:"Inquiry Submitted!"}),a.jsx("p",{className:"success-text",children:"Thank you. An IXAR NDT engineer will review your scope and contact you within 2 business hours."})]}):a.jsxs("form",{onSubmit:n,className:"page-form",children:[a.jsx("h3",{className:"form-heading",children:"Send Technical Inquiry"}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Full Name *"}),a.jsx("input",{type:"text",required:!0,placeholder:"e.g. David Mensah"})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Corporate Email *"}),a.jsx("input",{type:"email",required:!0,placeholder:"e.g. d.mensah@company.com"})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Phone / WhatsApp *"}),a.jsx("input",{type:"text",required:!0,placeholder:"e.g. +27 82 123 4567"})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"African Deployment Region *"}),a.jsxs("select",{className:"modal-select",children:[a.jsx("option",{children:"South Africa"}),a.jsx("option",{children:"Nigeria"}),a.jsx("option",{children:"Ghana"}),a.jsx("option",{children:"Kenya"}),a.jsx("option",{children:"Uganda"}),a.jsx("option",{children:"Mozambique"}),a.jsx("option",{children:"Other African Region"})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:"Project Technical Requirements *"}),a.jsx("textarea",{rows:"4",required:!0,placeholder:"Describe asset type, pipe diameter, wall thickness, or USFD track kilometers."})]}),a.jsxs("button",{type:"submit",className:"btn btn-primary btn-lg",style:{width:"100%"},children:[a.jsx("span",{children:"Submit Inquiry to Engineering Desk"}),a.jsx(Id,{size:16})]})]})})]})]}),a.jsx("style",{children:`
        .contact-page-grid {
          align-items: start;
        }
        .contact-info-card {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .card-heading {
          font-size: 1.3rem;
          color: var(--navy);
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid #F1F5F9;
          padding-bottom: 12px;
        }
        .contact-line-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .c-line {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.92rem;
        }
        .c-line strong {
          color: var(--navy);
          display: block;
        }
        .c-line p {
          color: var(--text-muted);
          margin-top: 2px;
        }
        .c-line a {
          color: var(--text-muted);
          text-decoration: none;
        }
        .c-line a:hover { color: var(--primary); }

        .hub-hours-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 16px;
          font-size: 0.88rem;
          color: var(--navy);
        }
        .hub-hours-box p {
          color: var(--text-muted);
          margin-top: 4px;
        }

        .form-heading {
          font-size: 1.3rem;
          color: var(--navy);
          margin-bottom: 16px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 14px;
        }
        .form-field label {
          font-size: 0.82rem;
          color: var(--navy);
          font-weight: 600;
        }
        .form-field input, .form-field textarea, .modal-select {
          padding: 11px 14px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-sm);
          color: var(--navy);
          font-size: 0.9rem;
          outline: none;
          font-weight: 500;
        }
        .form-field input:focus, .form-field textarea:focus, .modal-select:focus {
          border-color: var(--primary);
          background: #FFFFFF;
        }
      `})]})}function Ng(){const{pathname:e}=Je();return v.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function Cg(){const[e,t]=v.useState(!1),[n,r]=v.useState(""),i=(l="")=>{r(l),t(!0)};return a.jsxs(Lh,{children:[a.jsx(Ng,{}),a.jsxs("div",{className:"app-main-wrapper",children:[a.jsx(ag,{onOpenContact:i}),a.jsxs(fh,{children:[a.jsx(Ie,{path:"/",element:a.jsx(cg,{onOpenContact:i})}),a.jsx(Ie,{path:"/services",element:a.jsx(dg,{onOpenContact:i})}),a.jsx(Ie,{path:"/services/:slug",element:a.jsx(fg,{onOpenContact:i})}),a.jsx(Ie,{path:"/applications",element:a.jsx(pg,{onOpenContact:i})}),a.jsx(Ie,{path:"/applications/:slug",element:a.jsx(mg,{onOpenContact:i})}),a.jsx(Ie,{path:"/training",element:a.jsx(gg,{onOpenContact:i})}),a.jsx(Ie,{path:"/network",element:a.jsx(yg,{onOpenContact:i})}),a.jsx(Ie,{path:"/estimator",element:a.jsx(wg,{onOpenContact:i})}),a.jsx(Ie,{path:"/case-studies",element:a.jsx(jg,{onOpenContact:i})}),a.jsx(Ie,{path:"/contact",element:a.jsx(Sg,{})})]}),a.jsx(og,{onOpenContact:i}),a.jsx(sg,{isOpen:e,onClose:()=>t(!1),defaultScope:n})]})]})}bl.createRoot(document.getElementById("root")).render(a.jsx(iu.StrictMode,{children:a.jsx(Cg,{})}));
