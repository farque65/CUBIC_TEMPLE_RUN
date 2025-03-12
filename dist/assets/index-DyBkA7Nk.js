var zg=Object.defineProperty;var Fg=(u,e,n)=>e in u?zg(u,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):u[e]=n;var Ct=(u,e,n)=>Fg(u,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Ap(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Bu={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah;function kg(){if(ah)return Qe;ah=1;var u=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function _(z,N,J){this.props=z,this.context=N,this.refs=y,this.updater=J||M}_.prototype.isReactComponent={},_.prototype.setState=function(z,N){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,N,"setState")},_.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function C(){}C.prototype=_.prototype;function D(z,N,J){this.props=z,this.context=N,this.refs=y,this.updater=J||M}var A=D.prototype=new C;A.constructor=D,b(A,_.prototype),A.isPureReactComponent=!0;var I=Array.isArray,P=Object.prototype.hasOwnProperty,G={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function E(z,N,J){var ue,de={},H=null,Le=null;if(N!=null)for(ue in N.ref!==void 0&&(Le=N.ref),N.key!==void 0&&(H=""+N.key),N)P.call(N,ue)&&!W.hasOwnProperty(ue)&&(de[ue]=N[ue]);var ye=arguments.length-2;if(ye===1)de.children=J;else if(1<ye){for(var Me=Array(ye),we=0;we<ye;we++)Me[we]=arguments[we+2];de.children=Me}if(z&&z.defaultProps)for(ue in ye=z.defaultProps,ye)de[ue]===void 0&&(de[ue]=ye[ue]);return{$$typeof:u,type:z,key:H,ref:Le,props:de,_owner:G.current}}function F(z,N){return{$$typeof:u,type:z.type,key:N,ref:z.ref,props:z.props,_owner:z._owner}}function Y(z){return typeof z=="object"&&z!==null&&z.$$typeof===u}function fe(z){var N={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(J){return N[J]})}var me=/\/+/g;function q(z,N){return typeof z=="object"&&z!==null&&z.key!=null?fe(""+z.key):N.toString(36)}function V(z,N,J,ue,de){var H=typeof z;(H==="undefined"||H==="boolean")&&(z=null);var Le=!1;if(z===null)Le=!0;else switch(H){case"string":case"number":Le=!0;break;case"object":switch(z.$$typeof){case u:case e:Le=!0}}if(Le)return Le=z,de=de(Le),z=ue===""?"."+q(Le,0):ue,I(de)?(J="",z!=null&&(J=z.replace(me,"$&/")+"/"),V(de,N,J,"",function(we){return we})):de!=null&&(Y(de)&&(de=F(de,J+(!de.key||Le&&Le.key===de.key?"":(""+de.key).replace(me,"$&/")+"/")+z)),N.push(de)),1;if(Le=0,ue=ue===""?".":ue+":",I(z))for(var ye=0;ye<z.length;ye++){H=z[ye];var Me=ue+q(H,ye);Le+=V(H,N,J,Me,de)}else if(Me=v(z),typeof Me=="function")for(z=Me.call(z),ye=0;!(H=z.next()).done;)H=H.value,Me=ue+q(H,ye++),Le+=V(H,N,J,Me,de);else if(H==="object")throw N=String(z),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return Le}function ne(z,N,J){if(z==null)return z;var ue=[],de=0;return V(z,ue,"","",function(H){return N.call(J,H,de++)}),ue}function ce(z){if(z._status===-1){var N=z._result;N=N(),N.then(function(J){(z._status===0||z._status===-1)&&(z._status=1,z._result=J)},function(J){(z._status===0||z._status===-1)&&(z._status=2,z._result=J)}),z._status===-1&&(z._status=0,z._result=N)}if(z._status===1)return z._result.default;throw z._result}var ae={current:null},O={transition:null},ee={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:O,ReactCurrentOwner:G};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Qe.Children={map:ne,forEach:function(z,N,J){ne(z,function(){N.apply(this,arguments)},J)},count:function(z){var N=0;return ne(z,function(){N++}),N},toArray:function(z){return ne(z,function(N){return N})||[]},only:function(z){if(!Y(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},Qe.Component=_,Qe.Fragment=n,Qe.Profiler=o,Qe.PureComponent=D,Qe.StrictMode=s,Qe.Suspense=m,Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,Qe.act=Z,Qe.cloneElement=function(z,N,J){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var ue=b({},z.props),de=z.key,H=z.ref,Le=z._owner;if(N!=null){if(N.ref!==void 0&&(H=N.ref,Le=G.current),N.key!==void 0&&(de=""+N.key),z.type&&z.type.defaultProps)var ye=z.type.defaultProps;for(Me in N)P.call(N,Me)&&!W.hasOwnProperty(Me)&&(ue[Me]=N[Me]===void 0&&ye!==void 0?ye[Me]:N[Me])}var Me=arguments.length-2;if(Me===1)ue.children=J;else if(1<Me){ye=Array(Me);for(var we=0;we<Me;we++)ye[we]=arguments[we+2];ue.children=ye}return{$$typeof:u,type:z.type,key:de,ref:H,props:ue,_owner:Le}},Qe.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:l,_context:z},z.Consumer=z},Qe.createElement=E,Qe.createFactory=function(z){var N=E.bind(null,z);return N.type=z,N},Qe.createRef=function(){return{current:null}},Qe.forwardRef=function(z){return{$$typeof:c,render:z}},Qe.isValidElement=Y,Qe.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:ce}},Qe.memo=function(z,N){return{$$typeof:p,type:z,compare:N===void 0?null:N}},Qe.startTransition=function(z){var N=O.transition;O.transition={};try{z()}finally{O.transition=N}},Qe.unstable_act=Z,Qe.useCallback=function(z,N){return ae.current.useCallback(z,N)},Qe.useContext=function(z){return ae.current.useContext(z)},Qe.useDebugValue=function(){},Qe.useDeferredValue=function(z){return ae.current.useDeferredValue(z)},Qe.useEffect=function(z,N){return ae.current.useEffect(z,N)},Qe.useId=function(){return ae.current.useId()},Qe.useImperativeHandle=function(z,N,J){return ae.current.useImperativeHandle(z,N,J)},Qe.useInsertionEffect=function(z,N){return ae.current.useInsertionEffect(z,N)},Qe.useLayoutEffect=function(z,N){return ae.current.useLayoutEffect(z,N)},Qe.useMemo=function(z,N){return ae.current.useMemo(z,N)},Qe.useReducer=function(z,N,J){return ae.current.useReducer(z,N,J)},Qe.useRef=function(z){return ae.current.useRef(z)},Qe.useState=function(z){return ae.current.useState(z)},Qe.useSyncExternalStore=function(z,N,J){return ae.current.useSyncExternalStore(z,N,J)},Qe.useTransition=function(){return ae.current.useTransition()},Qe.version="18.3.1",Qe}var lh;function Dc(){return lh||(lh=1,Bu.exports=kg()),Bu.exports}var Yt=Dc();const Ug=Ap(Yt);var Da={},Vu={exports:{}},yn={},Gu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function Og(){return uh||(uh=1,function(u){function e(O,ee){var Z=O.length;O.push(ee);e:for(;0<Z;){var z=Z-1>>>1,N=O[z];if(0<o(N,ee))O[z]=ee,O[Z]=N,Z=z;else break e}}function n(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var ee=O[0],Z=O.pop();if(Z!==ee){O[0]=Z;e:for(var z=0,N=O.length,J=N>>>1;z<J;){var ue=2*(z+1)-1,de=O[ue],H=ue+1,Le=O[H];if(0>o(de,Z))H<N&&0>o(Le,de)?(O[z]=Le,O[H]=Z,z=H):(O[z]=de,O[ue]=Z,z=ue);else if(H<N&&0>o(Le,Z))O[z]=Le,O[H]=Z,z=H;else break e}}return ee}function o(O,ee){var Z=O.sortIndex-ee.sortIndex;return Z!==0?Z:O.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;u.unstable_now=function(){return l.now()}}else{var d=Date,c=d.now();u.unstable_now=function(){return d.now()-c}}var m=[],p=[],g=1,x=null,v=3,M=!1,b=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(O){for(var ee=n(p);ee!==null;){if(ee.callback===null)s(p);else if(ee.startTime<=O)s(p),ee.sortIndex=ee.expirationTime,e(m,ee);else break;ee=n(p)}}function I(O){if(y=!1,A(O),!b)if(n(m)!==null)b=!0,ce(P);else{var ee=n(p);ee!==null&&ae(I,ee.startTime-O)}}function P(O,ee){b=!1,y&&(y=!1,C(E),E=-1),M=!0;var Z=v;try{for(A(ee),x=n(m);x!==null&&(!(x.expirationTime>ee)||O&&!fe());){var z=x.callback;if(typeof z=="function"){x.callback=null,v=x.priorityLevel;var N=z(x.expirationTime<=ee);ee=u.unstable_now(),typeof N=="function"?x.callback=N:x===n(m)&&s(m),A(ee)}else s(m);x=n(m)}if(x!==null)var J=!0;else{var ue=n(p);ue!==null&&ae(I,ue.startTime-ee),J=!1}return J}finally{x=null,v=Z,M=!1}}var G=!1,W=null,E=-1,F=5,Y=-1;function fe(){return!(u.unstable_now()-Y<F)}function me(){if(W!==null){var O=u.unstable_now();Y=O;var ee=!0;try{ee=W(!0,O)}finally{ee?q():(G=!1,W=null)}}else G=!1}var q;if(typeof D=="function")q=function(){D(me)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,ne=V.port2;V.port1.onmessage=me,q=function(){ne.postMessage(null)}}else q=function(){_(me,0)};function ce(O){W=O,G||(G=!0,q())}function ae(O,ee){E=_(function(){O(u.unstable_now())},ee)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(O){O.callback=null},u.unstable_continueExecution=function(){b||M||(b=!0,ce(P))},u.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<O?Math.floor(1e3/O):5},u.unstable_getCurrentPriorityLevel=function(){return v},u.unstable_getFirstCallbackNode=function(){return n(m)},u.unstable_next=function(O){switch(v){case 1:case 2:case 3:var ee=3;break;default:ee=v}var Z=v;v=ee;try{return O()}finally{v=Z}},u.unstable_pauseExecution=function(){},u.unstable_requestPaint=function(){},u.unstable_runWithPriority=function(O,ee){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=v;v=O;try{return ee()}finally{v=Z}},u.unstable_scheduleCallback=function(O,ee,Z){var z=u.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?z+Z:z):Z=z,O){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Z+N,O={id:g++,callback:ee,priorityLevel:O,startTime:Z,expirationTime:N,sortIndex:-1},Z>z?(O.sortIndex=Z,e(p,O),n(m)===null&&O===n(p)&&(y?(C(E),E=-1):y=!0,ae(I,Z-z))):(O.sortIndex=N,e(m,O),b||M||(b=!0,ce(P))),O},u.unstable_shouldYield=fe,u.unstable_wrapCallback=function(O){var ee=v;return function(){var Z=v;v=ee;try{return O.apply(this,arguments)}finally{v=Z}}}}(Wu)),Wu}var ch;function Bg(){return ch||(ch=1,Gu.exports=Og()),Gu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function Vg(){if(fh)return yn;fh=1;var u=Dc(),e=Bg();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)s.add(i[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function v(t){return m.call(x,t)?!0:m.call(g,t)?!1:p.test(t)?x[t]=!0:(g[t]=!0,!1)}function M(t,i,r,a){if(r!==null&&r.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b(t,i,r,a){if(i===null||typeof i>"u"||M(t,i,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function y(t,i,r,a,f,h,S){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=f,this.mustUseProperty=r,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=S}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new y(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new y(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new y(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new y(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new y(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new y(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new y(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new y(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new y(t,5,!1,t.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(C,D);_[i]=new y(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(C,D);_[i]=new y(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(C,D);_[i]=new y(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new y(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new y(t,1,!1,t.toLowerCase(),null,!0,!0)});function A(t,i,r,a){var f=_.hasOwnProperty(i)?_[i]:null;(f!==null?f.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,r,f,a)&&(r=null),a||f===null?v(i)&&(r===null?t.removeAttribute(i):t.setAttribute(i,""+r)):f.mustUseProperty?t[f.propertyName]=r===null?f.type===3?!1:"":r:(i=f.attributeName,a=f.attributeNamespace,r===null?t.removeAttribute(i):(f=f.type,r=f===3||f===4&&r===!0?"":""+r,a?t.setAttributeNS(a,i,r):t.setAttribute(i,r))))}var I=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),G=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),fe=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),O=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,z;function N(t){if(z===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);z=i&&i[1]||""}return`
`+z+t}var J=!1;function ue(t,i){if(!t||J)return"";J=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var a=Q}Reflect.construct(t,[],i)}else{try{i.call()}catch(Q){a=Q}t.call(i.prototype)}else{try{throw Error()}catch(Q){a=Q}t()}}catch(Q){if(Q&&a&&typeof Q.stack=="string"){for(var f=Q.stack.split(`
`),h=a.stack.split(`
`),S=f.length-1,L=h.length-1;1<=S&&0<=L&&f[S]!==h[L];)L--;for(;1<=S&&0<=L;S--,L--)if(f[S]!==h[L]){if(S!==1||L!==1)do if(S--,L--,0>L||f[S]!==h[L]){var k=`
`+f[S].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=S&&0<=L);break}}}finally{J=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?N(t):""}function de(t){switch(t.tag){case 5:return N(t.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return t=ue(t.type,!1),t;case 11:return t=ue(t.type.render,!1),t;case 1:return t=ue(t.type,!0),t;default:return""}}function H(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case W:return"Fragment";case G:return"Portal";case F:return"Profiler";case E:return"StrictMode";case q:return"Suspense";case V:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fe:return(t.displayName||"Context")+".Consumer";case Y:return(t._context.displayName||"Context")+".Provider";case me:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ne:return i=t.displayName||null,i!==null?i:H(t.type)||"Memo";case ce:i=t._payload,t=t._init;try{return H(t(i))}catch{}}return null}function Le(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Me(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function we(t){var i=Me(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,h=r.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(t,i,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function lt(t){t._valueTracker||(t._valueTracker=we(t))}function qe(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),a="";return t&&(a=Me(t)?t.checked?"true":"false":t.value),t=a,t!==r?(i.setValue(t),!0):!1}function Ge(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dt(t,i){var r=i.checked;return Z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function on(t,i){var r=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;r=ye(i.value!=null?i.value:r),t._wrapperState={initialChecked:a,initialValue:r,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function It(t,i){i=i.checked,i!=null&&A(t,"checked",i,!1)}function Kt(t,i){It(t,i);var r=ye(i.value),a=i.type;if(r!=null)a==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?rt(t,i.type,r):i.hasOwnProperty("defaultValue")&&rt(t,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function wt(t,i,r){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,r||i===t.value||(t.value=i),t.defaultValue=i}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function rt(t,i,r){(i!=="number"||Ge(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var an=Array.isArray;function Bt(t,i,r,a){if(t=t.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<t.length;r++)f=i.hasOwnProperty("$"+t[r].value),t[r].selected!==f&&(t[r].selected=f),f&&a&&(t[r].defaultSelected=!0)}else{for(r=""+ye(r),i=null,f=0;f<t.length;f++){if(t[f].value===r){t[f].selected=!0,a&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function R(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return Z({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function w(t,i){var r=i.value;if(r==null){if(r=i.children,i=i.defaultValue,r!=null){if(i!=null)throw Error(n(92));if(an(r)){if(1<r.length)throw Error(n(93));r=r[0]}i=r}i==null&&(i=""),r=i}t._wrapperState={initialValue:ye(r)}}function se(t,i){var r=ye(i.value),a=ye(i.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),i.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),a!=null&&(t.defaultValue=""+a)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Se(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ce(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Se(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xe,be=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,r,a,f){MSApp.execUnsafeLocalFunction(function(){return t(i,r,a,f)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Xe=Xe||document.createElement("div"),Xe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Xe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function le(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var Fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(Fe).forEach(function(t){He.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Fe[i]=Fe[t]})});function Ie(t,i,r){return i==null||typeof i=="boolean"||i===""?"":r||typeof i!="number"||i===0||Fe.hasOwnProperty(t)&&Fe[t]?(""+i).trim():i+"px"}function Oe(t,i){t=t.style;for(var r in i)if(i.hasOwnProperty(r)){var a=r.indexOf("--")===0,f=Ie(r,i[r],a);r==="float"&&(r="cssFloat"),a?t.setProperty(r,f):t[r]=f}}var ke=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tt(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ct(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function B(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ie=null,ge=null,Te=null;function ze(t){if(t=Ks(t)){if(typeof ie!="function")throw Error(n(280));var i=t.stateNode;i&&(i=qo(i),ie(t.stateNode,t.type,i))}}function st(t){ge?Te?Te.push(t):Te=[t]:ge=t}function bt(){if(ge){var t=ge,i=Te;if(Te=ge=null,ze(t),i)for(t=0;t<i.length;t++)ze(i[t])}}function Nt(t,i){return t(i)}function ii(){}var ft=!1;function Nn(t,i,r){if(ft)return t(i,r);ft=!0;try{return Nt(t,i,r)}finally{ft=!1,(ge!==null||Te!==null)&&(ii(),bt())}}function Vt(t,i){var r=t.stateNode;if(r===null)return null;var a=qo(r);if(a===null)return null;r=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(n(231,i,typeof r));return r}var Or=!1;if(c)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){Or=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Or=!1}function sl(t,i,r,a,f,h,S,L,k){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(r,Q)}catch(pe){this.onError(pe)}}var or=!1,T=null,K=!1,re=null,j={onError:function(t){or=!0,T=t}};function oe(t,i,r,a,f,h,S,L,k){or=!1,T=null,sl.apply(j,arguments)}function Ue(t,i,r,a,f,h,S,L,k){if(oe.apply(this,arguments),or){if(or){var Q=T;or=!1,T=null}else throw Error(n(198));K||(K=!0,re=Q)}}function We(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function $e(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ze(t){if(We(t)!==t)throw Error(n(188))}function it(t){var i=t.alternate;if(!i){if(i=We(t),i===null)throw Error(n(188));return i!==t?null:t}for(var r=t,a=i;;){var f=r.return;if(f===null)break;var h=f.alternate;if(h===null){if(a=f.return,a!==null){r=a;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===r)return Ze(f),t;if(h===a)return Ze(f),i;h=h.sibling}throw Error(n(188))}if(r.return!==a.return)r=f,a=h;else{for(var S=!1,L=f.child;L;){if(L===r){S=!0,r=f,a=h;break}if(L===a){S=!0,a=f,r=h;break}L=L.sibling}if(!S){for(L=h.child;L;){if(L===r){S=!0,r=h,a=f;break}if(L===a){S=!0,a=h,r=f;break}L=L.sibling}if(!S)throw Error(n(189))}}if(r.alternate!==a)throw Error(n(190))}if(r.tag!==3)throw Error(n(188));return r.stateNode.current===r?t:i}function Je(t){return t=it(t),t!==null?et(t):null}function et(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=et(t);if(i!==null)return i;t=t.sibling}return null}var xt=e.unstable_scheduleCallback,Qt=e.unstable_cancelCallback,Xn=e.unstable_shouldYield,hi=e.unstable_requestPaint,Ye=e.unstable_now,nt=e.unstable_getCurrentPriorityLevel,ar=e.unstable_ImmediatePriority,At=e.unstable_UserBlockingPriority,zn=e.unstable_NormalPriority,Lo=e.unstable_LowPriority,Pi=e.unstable_IdlePriority,Ri=null,dt=null;function pi(t){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Ri,t,void 0,(t.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:ol,un=Math.log,Ds=Math.LN2;function ol(t){return t>>>=0,t===0?32:31-(un(t)/Ds|0)|0}var lr=64,Po=4194304;function Is(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ro(t,i){var r=t.pendingLanes;if(r===0)return 0;var a=0,f=t.suspendedLanes,h=t.pingedLanes,S=r&268435455;if(S!==0){var L=S&~f;L!==0?a=Is(L):(h&=S,h!==0&&(a=Is(h)))}else S=r&~f,S!==0?a=Is(S):h!==0&&(a=Is(h));if(a===0)return 0;if(i!==0&&i!==a&&(i&f)===0&&(f=a&-a,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((a&4)!==0&&(a|=r&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)r=31-ln(i),f=1<<r,a|=t[r],i&=~f;return a}function em(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tm(t,i){for(var r=t.suspendedLanes,a=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var S=31-ln(h),L=1<<S,k=f[S];k===-1?((L&r)===0||(L&a)!==0)&&(f[S]=em(L,i)):k<=i&&(t.expiredLanes|=L),h&=~L}}function al(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kc(){var t=lr;return lr<<=1,(lr&4194240)===0&&(lr=64),t}function ll(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function Ns(t,i,r){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ln(i),t[i]=r}function nm(t,i){var r=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<r;){var f=31-ln(r),h=1<<f;i[f]=0,a[f]=-1,t[f]=-1,r&=~h}}function ul(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var a=31-ln(r),f=1<<a;f&i|t[a]&i&&(t[a]|=i),r&=~f}}var ut=0;function Uc(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Oc,cl,Bc,Vc,Gc,fl=!1,Do=[],Di=null,Ii=null,Ni=null,zs=new Map,Fs=new Map,zi=[],im="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wc(t,i){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Ni=null;break;case"pointerover":case"pointerout":zs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fs.delete(i.pointerId)}}function ks(t,i,r,a,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:r,eventSystemFlags:a,nativeEvent:h,targetContainers:[f]},i!==null&&(i=Ks(i),i!==null&&cl(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function rm(t,i,r,a,f){switch(i){case"focusin":return Di=ks(Di,t,i,r,a,f),!0;case"dragenter":return Ii=ks(Ii,t,i,r,a,f),!0;case"mouseover":return Ni=ks(Ni,t,i,r,a,f),!0;case"pointerover":var h=f.pointerId;return zs.set(h,ks(zs.get(h)||null,t,i,r,a,f)),!0;case"gotpointercapture":return h=f.pointerId,Fs.set(h,ks(Fs.get(h)||null,t,i,r,a,f)),!0}return!1}function Hc(t){var i=ur(t.target);if(i!==null){var r=We(i);if(r!==null){if(i=r.tag,i===13){if(i=$e(r),i!==null){t.blockedOn=i,Gc(t.priority,function(){Bc(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Io(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=hl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var a=new r.constructor(r.type,r);Et=a,r.target.dispatchEvent(a),Et=null}else return i=Ks(r),i!==null&&cl(i),t.blockedOn=r,!1;i.shift()}return!0}function Xc(t,i,r){Io(t)&&r.delete(i)}function sm(){fl=!1,Di!==null&&Io(Di)&&(Di=null),Ii!==null&&Io(Ii)&&(Ii=null),Ni!==null&&Io(Ni)&&(Ni=null),zs.forEach(Xc),Fs.forEach(Xc)}function Us(t,i){t.blockedOn===i&&(t.blockedOn=null,fl||(fl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,sm)))}function Os(t){function i(f){return Us(f,t)}if(0<Do.length){Us(Do[0],t);for(var r=1;r<Do.length;r++){var a=Do[r];a.blockedOn===t&&(a.blockedOn=null)}}for(Di!==null&&Us(Di,t),Ii!==null&&Us(Ii,t),Ni!==null&&Us(Ni,t),zs.forEach(i),Fs.forEach(i),r=0;r<zi.length;r++)a=zi[r],a.blockedOn===t&&(a.blockedOn=null);for(;0<zi.length&&(r=zi[0],r.blockedOn===null);)Hc(r),r.blockedOn===null&&zi.shift()}var Br=I.ReactCurrentBatchConfig,No=!0;function om(t,i,r,a){var f=ut,h=Br.transition;Br.transition=null;try{ut=1,dl(t,i,r,a)}finally{ut=f,Br.transition=h}}function am(t,i,r,a){var f=ut,h=Br.transition;Br.transition=null;try{ut=4,dl(t,i,r,a)}finally{ut=f,Br.transition=h}}function dl(t,i,r,a){if(No){var f=hl(t,i,r,a);if(f===null)Pl(t,i,a,zo,r),Wc(t,a);else if(rm(f,t,i,r,a))a.stopPropagation();else if(Wc(t,a),i&4&&-1<im.indexOf(t)){for(;f!==null;){var h=Ks(f);if(h!==null&&Oc(h),h=hl(t,i,r,a),h===null&&Pl(t,i,a,zo,r),h===f)break;f=h}f!==null&&a.stopPropagation()}else Pl(t,i,a,null,r)}}var zo=null;function hl(t,i,r,a){if(zo=null,t=B(a),t=ur(t),t!==null)if(i=We(t),i===null)t=null;else if(r=i.tag,r===13){if(t=$e(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return zo=t,null}function jc(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nt()){case ar:return 1;case At:return 4;case zn:case Lo:return 16;case Pi:return 536870912;default:return 16}default:return 16}}var Fi=null,pl=null,Fo=null;function qc(){if(Fo)return Fo;var t,i=pl,r=i.length,a,f="value"in Fi?Fi.value:Fi.textContent,h=f.length;for(t=0;t<r&&i[t]===f[t];t++);var S=r-t;for(a=1;a<=S&&i[r-a]===f[h-a];a++);return Fo=f.slice(t,1<a?1-a:void 0)}function ko(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Uo(){return!0}function Yc(){return!1}function Sn(t){function i(r,a,f,h,S){this._reactName=r,this._targetInst=f,this.type=a,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(r=t[L],this[L]=r?r(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Uo:Yc,this.isPropagationStopped=Yc,this}return Z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),i}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Sn(Vr),Bs=Z({},Vr,{view:0,detail:0}),lm=Sn(Bs),gl,_l,Vs,Oo=Z({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(gl=t.screenX-Vs.screenX,_l=t.screenY-Vs.screenY):_l=gl=0,Vs=t),gl)},movementY:function(t){return"movementY"in t?t.movementY:_l}}),$c=Sn(Oo),um=Z({},Oo,{dataTransfer:0}),cm=Sn(um),fm=Z({},Bs,{relatedTarget:0}),vl=Sn(fm),dm=Z({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),hm=Sn(dm),pm=Z({},Vr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mm=Sn(pm),gm=Z({},Vr,{data:0}),Zc=Sn(gm),_m={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ym(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=xm[t])?!!i[t]:!1}function xl(){return ym}var Sm=Z({},Bs,{key:function(t){if(t.key){var i=_m[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xl,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mm=Sn(Sm),wm=Z({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kc=Sn(wm),Em=Z({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xl}),Tm=Sn(Em),Cm=Z({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bm=Sn(Cm),Am=Z({},Oo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lm=Sn(Am),Pm=[9,13,27,32],yl=c&&"CompositionEvent"in window,Gs=null;c&&"documentMode"in document&&(Gs=document.documentMode);var Rm=c&&"TextEvent"in window&&!Gs,Qc=c&&(!yl||Gs&&8<Gs&&11>=Gs),Jc=" ",ef=!1;function tf(t,i){switch(t){case"keyup":return Pm.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function Dm(t,i){switch(t){case"compositionend":return nf(i);case"keypress":return i.which!==32?null:(ef=!0,Jc);case"textInput":return t=i.data,t===Jc&&ef?null:t;default:return null}}function Im(t,i){if(Gr)return t==="compositionend"||!yl&&tf(t,i)?(t=qc(),Fo=pl=Fi=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Qc&&i.locale!=="ko"?null:i.data;default:return null}}var Nm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Nm[t.type]:i==="textarea"}function sf(t,i,r,a){st(a),i=Ho(i,"onChange"),0<i.length&&(r=new ml("onChange","change",null,r,a),t.push({event:r,listeners:i}))}var Ws=null,Hs=null;function zm(t){wf(t,0)}function Bo(t){var i=qr(t);if(qe(i))return t}function Fm(t,i){if(t==="change")return i}var of=!1;if(c){var Sl;if(c){var Ml="oninput"in document;if(!Ml){var af=document.createElement("div");af.setAttribute("oninput","return;"),Ml=typeof af.oninput=="function"}Sl=Ml}else Sl=!1;of=Sl&&(!document.documentMode||9<document.documentMode)}function lf(){Ws&&(Ws.detachEvent("onpropertychange",uf),Hs=Ws=null)}function uf(t){if(t.propertyName==="value"&&Bo(Hs)){var i=[];sf(i,Hs,t,B(t)),Nn(zm,i)}}function km(t,i,r){t==="focusin"?(lf(),Ws=i,Hs=r,Ws.attachEvent("onpropertychange",uf)):t==="focusout"&&lf()}function Um(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bo(Hs)}function Om(t,i){if(t==="click")return Bo(i)}function Bm(t,i){if(t==="input"||t==="change")return Bo(i)}function Vm(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var jn=typeof Object.is=="function"?Object.is:Vm;function Xs(t,i){if(jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),a=Object.keys(i);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var f=r[a];if(!m.call(i,f)||!jn(t[f],i[f]))return!1}return!0}function cf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ff(t,i){var r=cf(t);t=0;for(var a;r;){if(r.nodeType===3){if(a=t+r.textContent.length,t<=i&&a>=i)return{node:r,offset:i-t};t=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cf(r)}}function df(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?df(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function hf(){for(var t=window,i=Ge();i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=Ge(t.document)}return i}function wl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Gm(t){var i=hf(),r=t.focusedElem,a=t.selectionRange;if(i!==r&&r&&r.ownerDocument&&df(r.ownerDocument.documentElement,r)){if(a!==null&&wl(r)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in r)r.selectionStart=i,r.selectionEnd=Math.min(t,r.value.length);else if(t=(i=r.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=r.textContent.length,h=Math.min(a.start,f);a=a.end===void 0?h:Math.min(a.end,f),!t.extend&&h>a&&(f=a,a=h,h=f),f=ff(r,h);var S=ff(r,a);f&&S&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==S.node||t.focusOffset!==S.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(S.node,S.offset)):(i.setEnd(S.node,S.offset),t.addRange(i)))}}for(i=[],t=r;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<i.length;r++)t=i[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Wm=c&&"documentMode"in document&&11>=document.documentMode,Wr=null,El=null,js=null,Tl=!1;function pf(t,i,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Tl||Wr==null||Wr!==Ge(a)||(a=Wr,"selectionStart"in a&&wl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),js&&Xs(js,a)||(js=a,a=Ho(El,"onSelect"),0<a.length&&(i=new ml("onSelect","select",null,i,r),t.push({event:i,listeners:a}),i.target=Wr)))}function Vo(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var Hr={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},Cl={},mf={};c&&(mf=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function Go(t){if(Cl[t])return Cl[t];if(!Hr[t])return t;var i=Hr[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in mf)return Cl[t]=i[r];return t}var gf=Go("animationend"),_f=Go("animationiteration"),vf=Go("animationstart"),xf=Go("transitionend"),yf=new Map,Sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(t,i){yf.set(t,i),l(i,[t])}for(var bl=0;bl<Sf.length;bl++){var Al=Sf[bl],Hm=Al.toLowerCase(),Xm=Al[0].toUpperCase()+Al.slice(1);ki(Hm,"on"+Xm)}ki(gf,"onAnimationEnd"),ki(_f,"onAnimationIteration"),ki(vf,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(xf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jm=new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));function Mf(t,i,r){var a=t.type||"unknown-event";t.currentTarget=r,Ue(a,i,void 0,t),t.currentTarget=null}function wf(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var a=t[r],f=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var S=a.length-1;0<=S;S--){var L=a[S],k=L.instance,Q=L.currentTarget;if(L=L.listener,k!==h&&f.isPropagationStopped())break e;Mf(f,L,Q),h=k}else for(S=0;S<a.length;S++){if(L=a[S],k=L.instance,Q=L.currentTarget,L=L.listener,k!==h&&f.isPropagationStopped())break e;Mf(f,L,Q),h=k}}}if(K)throw t=re,K=!1,re=null,t}function mt(t,i){var r=i[Fl];r===void 0&&(r=i[Fl]=new Set);var a=t+"__bubble";r.has(a)||(Ef(i,t,2,!1),r.add(a))}function Ll(t,i,r){var a=0;i&&(a|=4),Ef(r,t,a,i)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function Ys(t){if(!t[Wo]){t[Wo]=!0,s.forEach(function(r){r!=="selectionchange"&&(jm.has(r)||Ll(r,!1,t),Ll(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Wo]||(i[Wo]=!0,Ll("selectionchange",!1,i))}}function Ef(t,i,r,a){switch(jc(i)){case 1:var f=om;break;case 4:f=am;break;default:f=dl}r=f.bind(null,i,r,t),f=void 0,!Or||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),a?f!==void 0?t.addEventListener(i,r,{capture:!0,passive:f}):t.addEventListener(i,r,!0):f!==void 0?t.addEventListener(i,r,{passive:f}):t.addEventListener(i,r,!1)}function Pl(t,i,r,a,f){var h=a;if((i&1)===0&&(i&2)===0&&a!==null)e:for(;;){if(a===null)return;var S=a.tag;if(S===3||S===4){var L=a.stateNode.containerInfo;if(L===f||L.nodeType===8&&L.parentNode===f)break;if(S===4)for(S=a.return;S!==null;){var k=S.tag;if((k===3||k===4)&&(k=S.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;S=S.return}for(;L!==null;){if(S=ur(L),S===null)return;if(k=S.tag,k===5||k===6){a=h=S;continue e}L=L.parentNode}}a=a.return}Nn(function(){var Q=h,pe=B(r),_e=[];e:{var he=yf.get(t);if(he!==void 0){var Ae=ml,Re=t;switch(t){case"keypress":if(ko(r)===0)break e;case"keydown":case"keyup":Ae=Mm;break;case"focusin":Re="focus",Ae=vl;break;case"focusout":Re="blur",Ae=vl;break;case"beforeblur":case"afterblur":Ae=vl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ae=$c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ae=cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ae=Tm;break;case gf:case _f:case vf:Ae=hm;break;case xf:Ae=bm;break;case"scroll":Ae=lm;break;case"wheel":Ae=Lm;break;case"copy":case"cut":case"paste":Ae=mm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ae=Kc}var De=(i&4)!==0,Lt=!De&&t==="scroll",X=De?he!==null?he+"Capture":null:he;De=[];for(var U=Q,$;U!==null;){$=U;var xe=$.stateNode;if($.tag===5&&xe!==null&&($=xe,X!==null&&(xe=Vt(U,X),xe!=null&&De.push($s(U,xe,$)))),Lt)break;U=U.return}0<De.length&&(he=new Ae(he,Re,null,r,pe),_e.push({event:he,listeners:De}))}}if((i&7)===0){e:{if(he=t==="mouseover"||t==="pointerover",Ae=t==="mouseout"||t==="pointerout",he&&r!==Et&&(Re=r.relatedTarget||r.fromElement)&&(ur(Re)||Re[mi]))break e;if((Ae||he)&&(he=pe.window===pe?pe:(he=pe.ownerDocument)?he.defaultView||he.parentWindow:window,Ae?(Re=r.relatedTarget||r.toElement,Ae=Q,Re=Re?ur(Re):null,Re!==null&&(Lt=We(Re),Re!==Lt||Re.tag!==5&&Re.tag!==6)&&(Re=null)):(Ae=null,Re=Q),Ae!==Re)){if(De=$c,xe="onMouseLeave",X="onMouseEnter",U="mouse",(t==="pointerout"||t==="pointerover")&&(De=Kc,xe="onPointerLeave",X="onPointerEnter",U="pointer"),Lt=Ae==null?he:qr(Ae),$=Re==null?he:qr(Re),he=new De(xe,U+"leave",Ae,r,pe),he.target=Lt,he.relatedTarget=$,xe=null,ur(pe)===Q&&(De=new De(X,U+"enter",Re,r,pe),De.target=$,De.relatedTarget=Lt,xe=De),Lt=xe,Ae&&Re)t:{for(De=Ae,X=Re,U=0,$=De;$;$=Xr($))U++;for($=0,xe=X;xe;xe=Xr(xe))$++;for(;0<U-$;)De=Xr(De),U--;for(;0<$-U;)X=Xr(X),$--;for(;U--;){if(De===X||X!==null&&De===X.alternate)break t;De=Xr(De),X=Xr(X)}De=null}else De=null;Ae!==null&&Tf(_e,he,Ae,De,!1),Re!==null&&Lt!==null&&Tf(_e,Lt,Re,De,!0)}}e:{if(he=Q?qr(Q):window,Ae=he.nodeName&&he.nodeName.toLowerCase(),Ae==="select"||Ae==="input"&&he.type==="file")var Ne=Fm;else if(rf(he))if(of)Ne=Bm;else{Ne=Um;var Be=km}else(Ae=he.nodeName)&&Ae.toLowerCase()==="input"&&(he.type==="checkbox"||he.type==="radio")&&(Ne=Om);if(Ne&&(Ne=Ne(t,Q))){sf(_e,Ne,r,pe);break e}Be&&Be(t,he,Q),t==="focusout"&&(Be=he._wrapperState)&&Be.controlled&&he.type==="number"&&rt(he,"number",he.value)}switch(Be=Q?qr(Q):window,t){case"focusin":(rf(Be)||Be.contentEditable==="true")&&(Wr=Be,El=Q,js=null);break;case"focusout":js=El=Wr=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,pf(_e,r,pe);break;case"selectionchange":if(Wm)break;case"keydown":case"keyup":pf(_e,r,pe)}var Ve;if(yl)e:{switch(t){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else Gr?tf(t,r)&&(je="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(je="onCompositionStart");je&&(Qc&&r.locale!=="ko"&&(Gr||je!=="onCompositionStart"?je==="onCompositionEnd"&&Gr&&(Ve=qc()):(Fi=pe,pl="value"in Fi?Fi.value:Fi.textContent,Gr=!0)),Be=Ho(Q,je),0<Be.length&&(je=new Zc(je,t,null,r,pe),_e.push({event:je,listeners:Be}),Ve?je.data=Ve:(Ve=nf(r),Ve!==null&&(je.data=Ve)))),(Ve=Rm?Dm(t,r):Im(t,r))&&(Q=Ho(Q,"onBeforeInput"),0<Q.length&&(pe=new Zc("onBeforeInput","beforeinput",null,r,pe),_e.push({event:pe,listeners:Q}),pe.data=Ve))}wf(_e,i)})}function $s(t,i,r){return{instance:t,listener:i,currentTarget:r}}function Ho(t,i){for(var r=i+"Capture",a=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=Vt(t,r),h!=null&&a.unshift($s(t,h,f)),h=Vt(t,i),h!=null&&a.push($s(t,h,f))),t=t.return}return a}function Xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tf(t,i,r,a,f){for(var h=i._reactName,S=[];r!==null&&r!==a;){var L=r,k=L.alternate,Q=L.stateNode;if(k!==null&&k===a)break;L.tag===5&&Q!==null&&(L=Q,f?(k=Vt(r,h),k!=null&&S.unshift($s(r,k,L))):f||(k=Vt(r,h),k!=null&&S.push($s(r,k,L)))),r=r.return}S.length!==0&&t.push({event:i,listeners:S})}var qm=/\r\n?/g,Ym=/\u0000|\uFFFD/g;function Cf(t){return(typeof t=="string"?t:""+t).replace(qm,`
`).replace(Ym,"")}function Xo(t,i,r){if(i=Cf(i),Cf(t)!==i&&r)throw Error(n(425))}function jo(){}var Rl=null,Dl=null;function Il(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,$m=typeof clearTimeout=="function"?clearTimeout:void 0,bf=typeof Promise=="function"?Promise:void 0,Zm=typeof queueMicrotask=="function"?queueMicrotask:typeof bf<"u"?function(t){return bf.resolve(null).then(t).catch(Km)}:Nl;function Km(t){setTimeout(function(){throw t})}function zl(t,i){var r=i,a=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(a===0){t.removeChild(f),Os(i);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=f}while(r);Os(i)}function Ui(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Af(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(i===0)return t;i--}else r==="/$"&&i++}t=t.previousSibling}return null}var jr=Math.random().toString(36).slice(2),ri="__reactFiber$"+jr,Zs="__reactProps$"+jr,mi="__reactContainer$"+jr,Fl="__reactEvents$"+jr,Qm="__reactListeners$"+jr,Jm="__reactHandles$"+jr;function ur(t){var i=t[ri];if(i)return i;for(var r=t.parentNode;r;){if(i=r[mi]||r[ri]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=Af(t);t!==null;){if(r=t[ri])return r;t=Af(t)}return i}t=r,r=t.parentNode}return null}function Ks(t){return t=t[ri]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function qo(t){return t[Zs]||null}var kl=[],Yr=-1;function Oi(t){return{current:t}}function gt(t){0>Yr||(t.current=kl[Yr],kl[Yr]=null,Yr--)}function ht(t,i){Yr++,kl[Yr]=t.current,t.current=i}var Bi={},Jt=Oi(Bi),mn=Oi(!1),cr=Bi;function $r(t,i){var r=t.type.contextTypes;if(!r)return Bi;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in r)f[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function gn(t){return t=t.childContextTypes,t!=null}function Yo(){gt(mn),gt(Jt)}function Lf(t,i,r){if(Jt.current!==Bi)throw Error(n(168));ht(Jt,i),ht(mn,r)}function Pf(t,i,r){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var f in a)if(!(f in i))throw Error(n(108,Le(t)||"Unknown",f));return Z({},r,a)}function $o(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bi,cr=Jt.current,ht(Jt,t),ht(mn,mn.current),!0}function Rf(t,i,r){var a=t.stateNode;if(!a)throw Error(n(169));r?(t=Pf(t,i,cr),a.__reactInternalMemoizedMergedChildContext=t,gt(mn),gt(Jt),ht(Jt,t)):gt(mn),ht(mn,r)}var gi=null,Zo=!1,Ul=!1;function Df(t){gi===null?gi=[t]:gi.push(t)}function eg(t){Zo=!0,Df(t)}function Vi(){if(!Ul&&gi!==null){Ul=!0;var t=0,i=ut;try{var r=gi;for(ut=1;t<r.length;t++){var a=r[t];do a=a(!0);while(a!==null)}gi=null,Zo=!1}catch(f){throw gi!==null&&(gi=gi.slice(t+1)),xt(ar,Vi),f}finally{ut=i,Ul=!1}}return null}var Zr=[],Kr=0,Ko=null,Qo=0,Fn=[],kn=0,fr=null,_i=1,vi="";function dr(t,i){Zr[Kr++]=Qo,Zr[Kr++]=Ko,Ko=t,Qo=i}function If(t,i,r){Fn[kn++]=_i,Fn[kn++]=vi,Fn[kn++]=fr,fr=t;var a=_i;t=vi;var f=32-ln(a)-1;a&=~(1<<f),r+=1;var h=32-ln(i)+f;if(30<h){var S=f-f%5;h=(a&(1<<S)-1).toString(32),a>>=S,f-=S,_i=1<<32-ln(i)+f|r<<f|a,vi=h+t}else _i=1<<h|r<<f|a,vi=t}function Ol(t){t.return!==null&&(dr(t,1),If(t,1,0))}function Bl(t){for(;t===Ko;)Ko=Zr[--Kr],Zr[Kr]=null,Qo=Zr[--Kr],Zr[Kr]=null;for(;t===fr;)fr=Fn[--kn],Fn[kn]=null,vi=Fn[--kn],Fn[kn]=null,_i=Fn[--kn],Fn[kn]=null}var Mn=null,wn=null,vt=!1,qn=null;function Nf(t,i){var r=Vn(5,null,null,0);r.elementType="DELETED",r.stateNode=i,r.return=t,i=t.deletions,i===null?(t.deletions=[r],t.flags|=16):i.push(r)}function zf(t,i){switch(t.tag){case 5:var r=t.type;return i=i.nodeType!==1||r.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Mn=t,wn=Ui(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Mn=t,wn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(r=fr!==null?{id:_i,overflow:vi}:null,t.memoizedState={dehydrated:i,treeContext:r,retryLane:1073741824},r=Vn(18,null,null,0),r.stateNode=i,r.return=t,t.child=r,Mn=t,wn=null,!0):!1;default:return!1}}function Vl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gl(t){if(vt){var i=wn;if(i){var r=i;if(!zf(t,i)){if(Vl(t))throw Error(n(418));i=Ui(r.nextSibling);var a=Mn;i&&zf(t,i)?Nf(a,r):(t.flags=t.flags&-4097|2,vt=!1,Mn=t)}}else{if(Vl(t))throw Error(n(418));t.flags=t.flags&-4097|2,vt=!1,Mn=t}}}function Ff(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function Jo(t){if(t!==Mn)return!1;if(!vt)return Ff(t),vt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Il(t.type,t.memoizedProps)),i&&(i=wn)){if(Vl(t))throw kf(),Error(n(418));for(;i;)Nf(t,i),i=Ui(i.nextSibling)}if(Ff(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(i===0){wn=Ui(t.nextSibling);break e}i--}else r!=="$"&&r!=="$!"&&r!=="$?"||i++}t=t.nextSibling}wn=null}}else wn=Mn?Ui(t.stateNode.nextSibling):null;return!0}function kf(){for(var t=wn;t;)t=Ui(t.nextSibling)}function Qr(){wn=Mn=null,vt=!1}function Wl(t){qn===null?qn=[t]:qn.push(t)}var tg=I.ReactCurrentBatchConfig;function Qs(t,i,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(n(309));var a=r.stateNode}if(!a)throw Error(n(147,t));var f=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(S){var L=f.refs;S===null?delete L[h]:L[h]=S},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!r._owner)throw Error(n(290,t))}return t}function ea(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Uf(t){var i=t._init;return i(t._payload)}function Of(t){function i(X,U){if(t){var $=X.deletions;$===null?(X.deletions=[U],X.flags|=16):$.push(U)}}function r(X,U){if(!t)return null;for(;U!==null;)i(X,U),U=U.sibling;return null}function a(X,U){for(X=new Map;U!==null;)U.key!==null?X.set(U.key,U):X.set(U.index,U),U=U.sibling;return X}function f(X,U){return X=$i(X,U),X.index=0,X.sibling=null,X}function h(X,U,$){return X.index=$,t?($=X.alternate,$!==null?($=$.index,$<U?(X.flags|=2,U):$):(X.flags|=2,U)):(X.flags|=1048576,U)}function S(X){return t&&X.alternate===null&&(X.flags|=2),X}function L(X,U,$,xe){return U===null||U.tag!==6?(U=Nu($,X.mode,xe),U.return=X,U):(U=f(U,$),U.return=X,U)}function k(X,U,$,xe){var Ne=$.type;return Ne===W?pe(X,U,$.props.children,xe,$.key):U!==null&&(U.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===ce&&Uf(Ne)===U.type)?(xe=f(U,$.props),xe.ref=Qs(X,U,$),xe.return=X,xe):(xe=Ea($.type,$.key,$.props,null,X.mode,xe),xe.ref=Qs(X,U,$),xe.return=X,xe)}function Q(X,U,$,xe){return U===null||U.tag!==4||U.stateNode.containerInfo!==$.containerInfo||U.stateNode.implementation!==$.implementation?(U=zu($,X.mode,xe),U.return=X,U):(U=f(U,$.children||[]),U.return=X,U)}function pe(X,U,$,xe,Ne){return U===null||U.tag!==7?(U=yr($,X.mode,xe,Ne),U.return=X,U):(U=f(U,$),U.return=X,U)}function _e(X,U,$){if(typeof U=="string"&&U!==""||typeof U=="number")return U=Nu(""+U,X.mode,$),U.return=X,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case P:return $=Ea(U.type,U.key,U.props,null,X.mode,$),$.ref=Qs(X,null,U),$.return=X,$;case G:return U=zu(U,X.mode,$),U.return=X,U;case ce:var xe=U._init;return _e(X,xe(U._payload),$)}if(an(U)||ee(U))return U=yr(U,X.mode,$,null),U.return=X,U;ea(X,U)}return null}function he(X,U,$,xe){var Ne=U!==null?U.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Ne!==null?null:L(X,U,""+$,xe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case P:return $.key===Ne?k(X,U,$,xe):null;case G:return $.key===Ne?Q(X,U,$,xe):null;case ce:return Ne=$._init,he(X,U,Ne($._payload),xe)}if(an($)||ee($))return Ne!==null?null:pe(X,U,$,xe,null);ea(X,$)}return null}function Ae(X,U,$,xe,Ne){if(typeof xe=="string"&&xe!==""||typeof xe=="number")return X=X.get($)||null,L(U,X,""+xe,Ne);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case P:return X=X.get(xe.key===null?$:xe.key)||null,k(U,X,xe,Ne);case G:return X=X.get(xe.key===null?$:xe.key)||null,Q(U,X,xe,Ne);case ce:var Be=xe._init;return Ae(X,U,$,Be(xe._payload),Ne)}if(an(xe)||ee(xe))return X=X.get($)||null,pe(U,X,xe,Ne,null);ea(U,xe)}return null}function Re(X,U,$,xe){for(var Ne=null,Be=null,Ve=U,je=U=0,Ht=null;Ve!==null&&je<$.length;je++){Ve.index>je?(Ht=Ve,Ve=null):Ht=Ve.sibling;var at=he(X,Ve,$[je],xe);if(at===null){Ve===null&&(Ve=Ht);break}t&&Ve&&at.alternate===null&&i(X,Ve),U=h(at,U,je),Be===null?Ne=at:Be.sibling=at,Be=at,Ve=Ht}if(je===$.length)return r(X,Ve),vt&&dr(X,je),Ne;if(Ve===null){for(;je<$.length;je++)Ve=_e(X,$[je],xe),Ve!==null&&(U=h(Ve,U,je),Be===null?Ne=Ve:Be.sibling=Ve,Be=Ve);return vt&&dr(X,je),Ne}for(Ve=a(X,Ve);je<$.length;je++)Ht=Ae(Ve,X,je,$[je],xe),Ht!==null&&(t&&Ht.alternate!==null&&Ve.delete(Ht.key===null?je:Ht.key),U=h(Ht,U,je),Be===null?Ne=Ht:Be.sibling=Ht,Be=Ht);return t&&Ve.forEach(function(Zi){return i(X,Zi)}),vt&&dr(X,je),Ne}function De(X,U,$,xe){var Ne=ee($);if(typeof Ne!="function")throw Error(n(150));if($=Ne.call($),$==null)throw Error(n(151));for(var Be=Ne=null,Ve=U,je=U=0,Ht=null,at=$.next();Ve!==null&&!at.done;je++,at=$.next()){Ve.index>je?(Ht=Ve,Ve=null):Ht=Ve.sibling;var Zi=he(X,Ve,at.value,xe);if(Zi===null){Ve===null&&(Ve=Ht);break}t&&Ve&&Zi.alternate===null&&i(X,Ve),U=h(Zi,U,je),Be===null?Ne=Zi:Be.sibling=Zi,Be=Zi,Ve=Ht}if(at.done)return r(X,Ve),vt&&dr(X,je),Ne;if(Ve===null){for(;!at.done;je++,at=$.next())at=_e(X,at.value,xe),at!==null&&(U=h(at,U,je),Be===null?Ne=at:Be.sibling=at,Be=at);return vt&&dr(X,je),Ne}for(Ve=a(X,Ve);!at.done;je++,at=$.next())at=Ae(Ve,X,je,at.value,xe),at!==null&&(t&&at.alternate!==null&&Ve.delete(at.key===null?je:at.key),U=h(at,U,je),Be===null?Ne=at:Be.sibling=at,Be=at);return t&&Ve.forEach(function(Ng){return i(X,Ng)}),vt&&dr(X,je),Ne}function Lt(X,U,$,xe){if(typeof $=="object"&&$!==null&&$.type===W&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case P:e:{for(var Ne=$.key,Be=U;Be!==null;){if(Be.key===Ne){if(Ne=$.type,Ne===W){if(Be.tag===7){r(X,Be.sibling),U=f(Be,$.props.children),U.return=X,X=U;break e}}else if(Be.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===ce&&Uf(Ne)===Be.type){r(X,Be.sibling),U=f(Be,$.props),U.ref=Qs(X,Be,$),U.return=X,X=U;break e}r(X,Be);break}else i(X,Be);Be=Be.sibling}$.type===W?(U=yr($.props.children,X.mode,xe,$.key),U.return=X,X=U):(xe=Ea($.type,$.key,$.props,null,X.mode,xe),xe.ref=Qs(X,U,$),xe.return=X,X=xe)}return S(X);case G:e:{for(Be=$.key;U!==null;){if(U.key===Be)if(U.tag===4&&U.stateNode.containerInfo===$.containerInfo&&U.stateNode.implementation===$.implementation){r(X,U.sibling),U=f(U,$.children||[]),U.return=X,X=U;break e}else{r(X,U);break}else i(X,U);U=U.sibling}U=zu($,X.mode,xe),U.return=X,X=U}return S(X);case ce:return Be=$._init,Lt(X,U,Be($._payload),xe)}if(an($))return Re(X,U,$,xe);if(ee($))return De(X,U,$,xe);ea(X,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,U!==null&&U.tag===6?(r(X,U.sibling),U=f(U,$),U.return=X,X=U):(r(X,U),U=Nu($,X.mode,xe),U.return=X,X=U),S(X)):r(X,U)}return Lt}var Jr=Of(!0),Bf=Of(!1),ta=Oi(null),na=null,es=null,Hl=null;function Xl(){Hl=es=na=null}function jl(t){var i=ta.current;gt(ta),t._currentValue=i}function ql(t,i,r){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===r)break;t=t.return}}function ts(t,i){na=t,Hl=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(_n=!0),t.firstContext=null)}function Un(t){var i=t._currentValue;if(Hl!==t)if(t={context:t,memoizedValue:i,next:null},es===null){if(na===null)throw Error(n(308));es=t,na.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return i}var hr=null;function Yl(t){hr===null?hr=[t]:hr.push(t)}function Vf(t,i,r,a){var f=i.interleaved;return f===null?(r.next=r,Yl(i)):(r.next=f.next,f.next=r),i.interleaved=r,xi(t,a)}function xi(t,i){t.lanes|=i;var r=t.alternate;for(r!==null&&(r.lanes|=i),r=t,t=t.return;t!==null;)t.childLanes|=i,r=t.alternate,r!==null&&(r.childLanes|=i),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Gi=!1;function $l(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Wi(t,i,r){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(ot&2)!==0){var f=a.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),a.pending=i,xi(t,r)}return f=a.interleaved,f===null?(i.next=i,Yl(a)):(i.next=f.next,f.next=i),a.interleaved=i,xi(t,r)}function ia(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,r|=a,i.lanes=r,ul(t,r)}}function Wf(t,i){var r=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var f=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var S={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};h===null?f=h=S:h=h.next=S,r=r.next}while(r!==null);h===null?f=h=i:h=h.next=i}else f=h=i;r={baseState:a.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}function ra(t,i,r,a){var f=t.updateQueue;Gi=!1;var h=f.firstBaseUpdate,S=f.lastBaseUpdate,L=f.shared.pending;if(L!==null){f.shared.pending=null;var k=L,Q=k.next;k.next=null,S===null?h=Q:S.next=Q,S=k;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,L=pe.lastBaseUpdate,L!==S&&(L===null?pe.firstBaseUpdate=Q:L.next=Q,pe.lastBaseUpdate=k))}if(h!==null){var _e=f.baseState;S=0,pe=Q=k=null,L=h;do{var he=L.lane,Ae=L.eventTime;if((a&he)===he){pe!==null&&(pe=pe.next={eventTime:Ae,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Re=t,De=L;switch(he=i,Ae=r,De.tag){case 1:if(Re=De.payload,typeof Re=="function"){_e=Re.call(Ae,_e,he);break e}_e=Re;break e;case 3:Re.flags=Re.flags&-65537|128;case 0:if(Re=De.payload,he=typeof Re=="function"?Re.call(Ae,_e,he):Re,he==null)break e;_e=Z({},_e,he);break e;case 2:Gi=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,he=f.effects,he===null?f.effects=[L]:he.push(L))}else Ae={eventTime:Ae,lane:he,tag:L.tag,payload:L.payload,callback:L.callback,next:null},pe===null?(Q=pe=Ae,k=_e):pe=pe.next=Ae,S|=he;if(L=L.next,L===null){if(L=f.shared.pending,L===null)break;he=L,L=he.next,he.next=null,f.lastBaseUpdate=he,f.shared.pending=null}}while(!0);if(pe===null&&(k=_e),f.baseState=k,f.firstBaseUpdate=Q,f.lastBaseUpdate=pe,i=f.shared.interleaved,i!==null){f=i;do S|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);gr|=S,t.lanes=S,t.memoizedState=_e}}function Hf(t,i,r){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],f=a.callback;if(f!==null){if(a.callback=null,a=r,typeof f!="function")throw Error(n(191,f));f.call(a)}}}var Js={},si=Oi(Js),eo=Oi(Js),to=Oi(Js);function pr(t){if(t===Js)throw Error(n(174));return t}function Zl(t,i){switch(ht(to,i),ht(eo,t),ht(si,Js),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ce(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ce(i,t)}gt(si),ht(si,i)}function ns(){gt(si),gt(eo),gt(to)}function Xf(t){pr(to.current);var i=pr(si.current),r=Ce(i,t.type);i!==r&&(ht(eo,t),ht(si,r))}function Kl(t){eo.current===t&&(gt(si),gt(eo))}var yt=Oi(0);function sa(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ql=[];function Jl(){for(var t=0;t<Ql.length;t++)Ql[t]._workInProgressVersionPrimary=null;Ql.length=0}var oa=I.ReactCurrentDispatcher,eu=I.ReactCurrentBatchConfig,mr=0,St=null,zt=null,Gt=null,aa=!1,no=!1,io=0,ng=0;function en(){throw Error(n(321))}function tu(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!jn(t[r],i[r]))return!1;return!0}function nu(t,i,r,a,f,h){if(mr=h,St=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,oa.current=t===null||t.memoizedState===null?og:ag,t=r(a,f),no){h=0;do{if(no=!1,io=0,25<=h)throw Error(n(301));h+=1,Gt=zt=null,i.updateQueue=null,oa.current=lg,t=r(a,f)}while(no)}if(oa.current=ca,i=zt!==null&&zt.next!==null,mr=0,Gt=zt=St=null,aa=!1,i)throw Error(n(300));return t}function iu(){var t=io!==0;return io=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?St.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function On(){if(zt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var i=Gt===null?St.memoizedState:Gt.next;if(i!==null)Gt=i,zt=t;else{if(t===null)throw Error(n(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Gt===null?St.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function ro(t,i){return typeof i=="function"?i(t):i}function ru(t){var i=On(),r=i.queue;if(r===null)throw Error(n(311));r.lastRenderedReducer=t;var a=zt,f=a.baseQueue,h=r.pending;if(h!==null){if(f!==null){var S=f.next;f.next=h.next,h.next=S}a.baseQueue=f=h,r.pending=null}if(f!==null){h=f.next,a=a.baseState;var L=S=null,k=null,Q=h;do{var pe=Q.lane;if((mr&pe)===pe)k!==null&&(k=k.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),a=Q.hasEagerState?Q.eagerState:t(a,Q.action);else{var _e={lane:pe,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};k===null?(L=k=_e,S=a):k=k.next=_e,St.lanes|=pe,gr|=pe}Q=Q.next}while(Q!==null&&Q!==h);k===null?S=a:k.next=L,jn(a,i.memoizedState)||(_n=!0),i.memoizedState=a,i.baseState=S,i.baseQueue=k,r.lastRenderedState=a}if(t=r.interleaved,t!==null){f=t;do h=f.lane,St.lanes|=h,gr|=h,f=f.next;while(f!==t)}else f===null&&(r.lanes=0);return[i.memoizedState,r.dispatch]}function su(t){var i=On(),r=i.queue;if(r===null)throw Error(n(311));r.lastRenderedReducer=t;var a=r.dispatch,f=r.pending,h=i.memoizedState;if(f!==null){r.pending=null;var S=f=f.next;do h=t(h,S.action),S=S.next;while(S!==f);jn(h,i.memoizedState)||(_n=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),r.lastRenderedState=h}return[h,a]}function jf(){}function qf(t,i){var r=St,a=On(),f=i(),h=!jn(a.memoizedState,f);if(h&&(a.memoizedState=f,_n=!0),a=a.queue,ou(Zf.bind(null,r,a,t),[t]),a.getSnapshot!==i||h||Gt!==null&&Gt.memoizedState.tag&1){if(r.flags|=2048,so(9,$f.bind(null,r,a,f,i),void 0,null),Wt===null)throw Error(n(349));(mr&30)!==0||Yf(r,i,f)}return f}function Yf(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=St.updateQueue,i===null?(i={lastEffect:null,stores:null},St.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function $f(t,i,r,a){i.value=r,i.getSnapshot=a,Kf(i)&&Qf(t)}function Zf(t,i,r){return r(function(){Kf(i)&&Qf(t)})}function Kf(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!jn(t,r)}catch{return!0}}function Qf(t){var i=xi(t,1);i!==null&&Kn(i,t,1,-1)}function Jf(t){var i=oi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:t},i.queue=t,t=t.dispatch=sg.bind(null,St,t),[i.memoizedState,t]}function so(t,i,r,a){return t={tag:t,create:i,destroy:r,deps:a,next:null},i=St.updateQueue,i===null?(i={lastEffect:null,stores:null},St.updateQueue=i,i.lastEffect=t.next=t):(r=i.lastEffect,r===null?i.lastEffect=t.next=t:(a=r.next,r.next=t,t.next=a,i.lastEffect=t)),t}function ed(){return On().memoizedState}function la(t,i,r,a){var f=oi();St.flags|=t,f.memoizedState=so(1|i,r,void 0,a===void 0?null:a)}function ua(t,i,r,a){var f=On();a=a===void 0?null:a;var h=void 0;if(zt!==null){var S=zt.memoizedState;if(h=S.destroy,a!==null&&tu(a,S.deps)){f.memoizedState=so(i,r,h,a);return}}St.flags|=t,f.memoizedState=so(1|i,r,h,a)}function td(t,i){return la(8390656,8,t,i)}function ou(t,i){return ua(2048,8,t,i)}function nd(t,i){return ua(4,2,t,i)}function id(t,i){return ua(4,4,t,i)}function rd(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function sd(t,i,r){return r=r!=null?r.concat([t]):null,ua(4,4,rd.bind(null,i,t),r)}function au(){}function od(t,i){var r=On();i=i===void 0?null:i;var a=r.memoizedState;return a!==null&&i!==null&&tu(i,a[1])?a[0]:(r.memoizedState=[t,i],t)}function ad(t,i){var r=On();i=i===void 0?null:i;var a=r.memoizedState;return a!==null&&i!==null&&tu(i,a[1])?a[0]:(t=t(),r.memoizedState=[t,i],t)}function ld(t,i,r){return(mr&21)===0?(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=r):(jn(r,i)||(r=kc(),St.lanes|=r,gr|=r,t.baseState=!0),i)}function ig(t,i){var r=ut;ut=r!==0&&4>r?r:4,t(!0);var a=eu.transition;eu.transition={};try{t(!1),i()}finally{ut=r,eu.transition=a}}function ud(){return On().memoizedState}function rg(t,i,r){var a=qi(t);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},cd(t))fd(i,r);else if(r=Vf(t,i,r,a),r!==null){var f=fn();Kn(r,t,a,f),dd(r,i,a)}}function sg(t,i,r){var a=qi(t),f={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(cd(t))fd(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,L=h(S,r);if(f.hasEagerState=!0,f.eagerState=L,jn(L,S)){var k=i.interleaved;k===null?(f.next=f,Yl(i)):(f.next=k.next,k.next=f),i.interleaved=f;return}}catch{}finally{}r=Vf(t,i,f,a),r!==null&&(f=fn(),Kn(r,t,a,f),dd(r,i,a))}}function cd(t){var i=t.alternate;return t===St||i!==null&&i===St}function fd(t,i){no=aa=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function dd(t,i,r){if((r&4194240)!==0){var a=i.lanes;a&=t.pendingLanes,r|=a,i.lanes=r,ul(t,r)}}var ca={readContext:Un,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},og={readContext:Un,useCallback:function(t,i){return oi().memoizedState=[t,i===void 0?null:i],t},useContext:Un,useEffect:td,useImperativeHandle:function(t,i,r){return r=r!=null?r.concat([t]):null,la(4194308,4,rd.bind(null,i,t),r)},useLayoutEffect:function(t,i){return la(4194308,4,t,i)},useInsertionEffect:function(t,i){return la(4,2,t,i)},useMemo:function(t,i){var r=oi();return i=i===void 0?null:i,t=t(),r.memoizedState=[t,i],t},useReducer:function(t,i,r){var a=oi();return i=r!==void 0?r(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=rg.bind(null,St,t),[a.memoizedState,t]},useRef:function(t){var i=oi();return t={current:t},i.memoizedState=t},useState:Jf,useDebugValue:au,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=Jf(!1),i=t[0];return t=ig.bind(null,t[1]),oi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,r){var a=St,f=oi();if(vt){if(r===void 0)throw Error(n(407));r=r()}else{if(r=i(),Wt===null)throw Error(n(349));(mr&30)!==0||Yf(a,i,r)}f.memoizedState=r;var h={value:r,getSnapshot:i};return f.queue=h,td(Zf.bind(null,a,h,t),[t]),a.flags|=2048,so(9,$f.bind(null,a,h,r,i),void 0,null),r},useId:function(){var t=oi(),i=Wt.identifierPrefix;if(vt){var r=vi,a=_i;r=(a&~(1<<32-ln(a)-1)).toString(32)+r,i=":"+i+"R"+r,r=io++,0<r&&(i+="H"+r.toString(32)),i+=":"}else r=ng++,i=":"+i+"r"+r.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},ag={readContext:Un,useCallback:od,useContext:Un,useEffect:ou,useImperativeHandle:sd,useInsertionEffect:nd,useLayoutEffect:id,useMemo:ad,useReducer:ru,useRef:ed,useState:function(){return ru(ro)},useDebugValue:au,useDeferredValue:function(t){var i=On();return ld(i,zt.memoizedState,t)},useTransition:function(){var t=ru(ro)[0],i=On().memoizedState;return[t,i]},useMutableSource:jf,useSyncExternalStore:qf,useId:ud,unstable_isNewReconciler:!1},lg={readContext:Un,useCallback:od,useContext:Un,useEffect:ou,useImperativeHandle:sd,useInsertionEffect:nd,useLayoutEffect:id,useMemo:ad,useReducer:su,useRef:ed,useState:function(){return su(ro)},useDebugValue:au,useDeferredValue:function(t){var i=On();return zt===null?i.memoizedState=t:ld(i,zt.memoizedState,t)},useTransition:function(){var t=su(ro)[0],i=On().memoizedState;return[t,i]},useMutableSource:jf,useSyncExternalStore:qf,useId:ud,unstable_isNewReconciler:!1};function Yn(t,i){if(t&&t.defaultProps){i=Z({},i),t=t.defaultProps;for(var r in t)i[r]===void 0&&(i[r]=t[r]);return i}return i}function lu(t,i,r,a){i=t.memoizedState,r=r(a,i),r=r==null?i:Z({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var fa={isMounted:function(t){return(t=t._reactInternals)?We(t)===t:!1},enqueueSetState:function(t,i,r){t=t._reactInternals;var a=fn(),f=qi(t),h=yi(a,f);h.payload=i,r!=null&&(h.callback=r),i=Wi(t,h,f),i!==null&&(Kn(i,t,f,a),ia(i,t,f))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var a=fn(),f=qi(t),h=yi(a,f);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=Wi(t,h,f),i!==null&&(Kn(i,t,f,a),ia(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=fn(),a=qi(t),f=yi(r,a);f.tag=2,i!=null&&(f.callback=i),i=Wi(t,f,a),i!==null&&(Kn(i,t,a,r),ia(i,t,a))}};function hd(t,i,r,a,f,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,S):i.prototype&&i.prototype.isPureReactComponent?!Xs(r,a)||!Xs(f,h):!0}function pd(t,i,r){var a=!1,f=Bi,h=i.contextType;return typeof h=="object"&&h!==null?h=Un(h):(f=gn(i)?cr:Jt.current,a=i.contextTypes,h=(a=a!=null)?$r(t,f):Bi),i=new i(r,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fa,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function md(t,i,r,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,a),i.state!==t&&fa.enqueueReplaceState(i,i.state,null)}function uu(t,i,r,a){var f=t.stateNode;f.props=r,f.state=t.memoizedState,f.refs={},$l(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=Un(h):(h=gn(i)?cr:Jt.current,f.context=$r(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(lu(t,i,h,r),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&fa.enqueueReplaceState(f,f.state,null),ra(t,r,f,a),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function is(t,i){try{var r="",a=i;do r+=de(a),a=a.return;while(a);var f=r}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function cu(t,i,r){return{value:t,source:null,stack:r??null,digest:i??null}}function fu(t,i){try{console.error(i.value)}catch(r){setTimeout(function(){throw r})}}var ug=typeof WeakMap=="function"?WeakMap:Map;function gd(t,i,r){r=yi(-1,r),r.tag=3,r.payload={element:null};var a=i.value;return r.callback=function(){va||(va=!0,Cu=a),fu(t,i)},r}function _d(t,i,r){r=yi(-1,r),r.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var f=i.value;r.payload=function(){return a(f)},r.callback=function(){fu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(r.callback=function(){fu(t,i),typeof a!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})}),r}function vd(t,i,r){var a=t.pingCache;if(a===null){a=t.pingCache=new ug;var f=new Set;a.set(i,f)}else f=a.get(i),f===void 0&&(f=new Set,a.set(i,f));f.has(r)||(f.add(r),t=wg.bind(null,t,i,r),i.then(t,t))}function xd(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function yd(t,i,r,a,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(i=yi(-1,1),i.tag=2,Wi(r,i,1))),r.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var cg=I.ReactCurrentOwner,_n=!1;function cn(t,i,r,a){i.child=t===null?Bf(i,null,r,a):Jr(i,t.child,r,a)}function Sd(t,i,r,a,f){r=r.render;var h=i.ref;return ts(i,f),a=nu(t,i,r,a,h,f),r=iu(),t!==null&&!_n?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Si(t,i,f)):(vt&&r&&Ol(i),i.flags|=1,cn(t,i,a,f),i.child)}function Md(t,i,r,a,f){if(t===null){var h=r.type;return typeof h=="function"&&!Iu(h)&&h.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(i.tag=15,i.type=h,wd(t,i,h,a,f)):(t=Ea(r.type,null,a,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var S=h.memoizedProps;if(r=r.compare,r=r!==null?r:Xs,r(S,a)&&t.ref===i.ref)return Si(t,i,f)}return i.flags|=1,t=$i(h,a),t.ref=i.ref,t.return=i,i.child=t}function wd(t,i,r,a,f){if(t!==null){var h=t.memoizedProps;if(Xs(h,a)&&t.ref===i.ref)if(_n=!1,i.pendingProps=a=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(_n=!0);else return i.lanes=t.lanes,Si(t,i,f)}return du(t,i,r,a,f)}function Ed(t,i,r){var a=i.pendingProps,f=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(ss,En),En|=r;else{if((r&1073741824)===0)return t=h!==null?h.baseLanes|r:r,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,ht(ss,En),En|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:r,ht(ss,En),En|=a}else h!==null?(a=h.baseLanes|r,i.memoizedState=null):a=r,ht(ss,En),En|=a;return cn(t,i,f,r),i.child}function Td(t,i){var r=i.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(i.flags|=512,i.flags|=2097152)}function du(t,i,r,a,f){var h=gn(r)?cr:Jt.current;return h=$r(i,h),ts(i,f),r=nu(t,i,r,a,h,f),a=iu(),t!==null&&!_n?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Si(t,i,f)):(vt&&a&&Ol(i),i.flags|=1,cn(t,i,r,f),i.child)}function Cd(t,i,r,a,f){if(gn(r)){var h=!0;$o(i)}else h=!1;if(ts(i,f),i.stateNode===null)ha(t,i),pd(i,r,a),uu(i,r,a,f),a=!0;else if(t===null){var S=i.stateNode,L=i.memoizedProps;S.props=L;var k=S.context,Q=r.contextType;typeof Q=="object"&&Q!==null?Q=Un(Q):(Q=gn(r)?cr:Jt.current,Q=$r(i,Q));var pe=r.getDerivedStateFromProps,_e=typeof pe=="function"||typeof S.getSnapshotBeforeUpdate=="function";_e||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(L!==a||k!==Q)&&md(i,S,a,Q),Gi=!1;var he=i.memoizedState;S.state=he,ra(i,a,S,f),k=i.memoizedState,L!==a||he!==k||mn.current||Gi?(typeof pe=="function"&&(lu(i,r,pe,a),k=i.memoizedState),(L=Gi||hd(i,r,L,a,he,k,Q))?(_e||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(i.flags|=4194308)):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=k),S.props=a,S.state=k,S.context=Q,a=L):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{S=i.stateNode,Gf(t,i),L=i.memoizedProps,Q=i.type===i.elementType?L:Yn(i.type,L),S.props=Q,_e=i.pendingProps,he=S.context,k=r.contextType,typeof k=="object"&&k!==null?k=Un(k):(k=gn(r)?cr:Jt.current,k=$r(i,k));var Ae=r.getDerivedStateFromProps;(pe=typeof Ae=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(L!==_e||he!==k)&&md(i,S,a,k),Gi=!1,he=i.memoizedState,S.state=he,ra(i,a,S,f);var Re=i.memoizedState;L!==_e||he!==Re||mn.current||Gi?(typeof Ae=="function"&&(lu(i,r,Ae,a),Re=i.memoizedState),(Q=Gi||hd(i,r,Q,a,he,Re,k)||!1)?(pe||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(a,Re,k),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(a,Re,k)),typeof S.componentDidUpdate=="function"&&(i.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof S.componentDidUpdate!="function"||L===t.memoizedProps&&he===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&he===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=Re),S.props=a,S.state=Re,S.context=k,a=Q):(typeof S.componentDidUpdate!="function"||L===t.memoizedProps&&he===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&he===t.memoizedState||(i.flags|=1024),a=!1)}return hu(t,i,r,a,h,f)}function hu(t,i,r,a,f,h){Td(t,i);var S=(i.flags&128)!==0;if(!a&&!S)return f&&Rf(i,r,!1),Si(t,i,h);a=i.stateNode,cg.current=i;var L=S&&typeof r.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&S?(i.child=Jr(i,t.child,null,h),i.child=Jr(i,null,L,h)):cn(t,i,L,h),i.memoizedState=a.state,f&&Rf(i,r,!0),i.child}function bd(t){var i=t.stateNode;i.pendingContext?Lf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Lf(t,i.context,!1),Zl(t,i.containerInfo)}function Ad(t,i,r,a,f){return Qr(),Wl(f),i.flags|=256,cn(t,i,r,a),i.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ld(t,i,r){var a=i.pendingProps,f=yt.current,h=!1,S=(i.flags&128)!==0,L;if((L=S)||(L=t!==null&&t.memoizedState===null?!1:(f&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),ht(yt,f&1),t===null)return Gl(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(S=a.children,t=a.fallback,h?(a=i.mode,h=i.child,S={mode:"hidden",children:S},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=S):h=Ta(S,a,0,null),t=yr(t,a,r,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=mu(r),i.memoizedState=pu,t):gu(i,S));if(f=t.memoizedState,f!==null&&(L=f.dehydrated,L!==null))return fg(t,i,S,a,L,f,r);if(h){h=a.fallback,S=i.mode,f=t.child,L=f.sibling;var k={mode:"hidden",children:a.children};return(S&1)===0&&i.child!==f?(a=i.child,a.childLanes=0,a.pendingProps=k,i.deletions=null):(a=$i(f,k),a.subtreeFlags=f.subtreeFlags&14680064),L!==null?h=$i(L,h):(h=yr(h,S,r,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,S=t.child.memoizedState,S=S===null?mu(r):{baseLanes:S.baseLanes|r,cachePool:null,transitions:S.transitions},h.memoizedState=S,h.childLanes=t.childLanes&~r,i.memoizedState=pu,a}return h=t.child,t=h.sibling,a=$i(h,{mode:"visible",children:a.children}),(i.mode&1)===0&&(a.lanes=r),a.return=i,a.sibling=null,t!==null&&(r=i.deletions,r===null?(i.deletions=[t],i.flags|=16):r.push(t)),i.child=a,i.memoizedState=null,a}function gu(t,i){return i=Ta({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function da(t,i,r,a){return a!==null&&Wl(a),Jr(i,t.child,null,r),t=gu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function fg(t,i,r,a,f,h,S){if(r)return i.flags&256?(i.flags&=-257,a=cu(Error(n(422))),da(t,i,S,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,f=i.mode,a=Ta({mode:"visible",children:a.children},f,0,null),h=yr(h,f,S,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,(i.mode&1)!==0&&Jr(i,t.child,null,S),i.child.memoizedState=mu(S),i.memoizedState=pu,h);if((i.mode&1)===0)return da(t,i,S,null);if(f.data==="$!"){if(a=f.nextSibling&&f.nextSibling.dataset,a)var L=a.dgst;return a=L,h=Error(n(419)),a=cu(h,a,void 0),da(t,i,S,a)}if(L=(S&t.childLanes)!==0,_n||L){if(a=Wt,a!==null){switch(S&-S){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(a.suspendedLanes|S))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,xi(t,f),Kn(a,t,f,-1))}return Du(),a=cu(Error(n(421))),da(t,i,S,a)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=Eg.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,wn=Ui(f.nextSibling),Mn=i,vt=!0,qn=null,t!==null&&(Fn[kn++]=_i,Fn[kn++]=vi,Fn[kn++]=fr,_i=t.id,vi=t.overflow,fr=i),i=gu(i,a.children),i.flags|=4096,i)}function Pd(t,i,r){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),ql(t.return,i,r)}function _u(t,i,r,a,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=r,h.tailMode=f)}function Rd(t,i,r){var a=i.pendingProps,f=a.revealOrder,h=a.tail;if(cn(t,i,a.children,r),a=yt.current,(a&2)!==0)a=a&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pd(t,r,i);else if(t.tag===19)Pd(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(ht(yt,a),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(r=i.child,f=null;r!==null;)t=r.alternate,t!==null&&sa(t)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),_u(i,!1,f,r,h);break;case"backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&sa(t)===null){i.child=f;break}t=f.sibling,f.sibling=r,r=f,f=t}_u(i,!0,r,null,h);break;case"together":_u(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ha(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Si(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),gr|=i.lanes,(r&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,r=$i(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=$i(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function dg(t,i,r){switch(i.tag){case 3:bd(i),Qr();break;case 5:Xf(i);break;case 1:gn(i.type)&&$o(i);break;case 4:Zl(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,f=i.memoizedProps.value;ht(ta,a._currentValue),a._currentValue=f;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(ht(yt,yt.current&1),i.flags|=128,null):(r&i.child.childLanes)!==0?Ld(t,i,r):(ht(yt,yt.current&1),t=Si(t,i,r),t!==null?t.sibling:null);ht(yt,yt.current&1);break;case 19:if(a=(r&i.childLanes)!==0,(t.flags&128)!==0){if(a)return Rd(t,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ht(yt,yt.current),a)break;return null;case 22:case 23:return i.lanes=0,Ed(t,i,r)}return Si(t,i,r)}var Dd,vu,Id,Nd;Dd=function(t,i){for(var r=i.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},vu=function(){},Id=function(t,i,r,a){var f=t.memoizedProps;if(f!==a){t=i.stateNode,pr(si.current);var h=null;switch(r){case"input":f=Dt(t,f),a=Dt(t,a),h=[];break;case"select":f=Z({},f,{value:void 0}),a=Z({},a,{value:void 0}),h=[];break;case"textarea":f=R(t,f),a=R(t,a),h=[];break;default:typeof f.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=jo)}tt(r,a);var S;r=null;for(Q in f)if(!a.hasOwnProperty(Q)&&f.hasOwnProperty(Q)&&f[Q]!=null)if(Q==="style"){var L=f[Q];for(S in L)L.hasOwnProperty(S)&&(r||(r={}),r[S]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?h||(h=[]):(h=h||[]).push(Q,null));for(Q in a){var k=a[Q];if(L=f!=null?f[Q]:void 0,a.hasOwnProperty(Q)&&k!==L&&(k!=null||L!=null))if(Q==="style")if(L){for(S in L)!L.hasOwnProperty(S)||k&&k.hasOwnProperty(S)||(r||(r={}),r[S]="");for(S in k)k.hasOwnProperty(S)&&L[S]!==k[S]&&(r||(r={}),r[S]=k[S])}else r||(h||(h=[]),h.push(Q,r)),r=k;else Q==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,L=L?L.__html:void 0,k!=null&&L!==k&&(h=h||[]).push(Q,k)):Q==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(Q,""+k):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(k!=null&&Q==="onScroll"&&mt("scroll",t),h||L===k||(h=[])):(h=h||[]).push(Q,k))}r&&(h=h||[]).push("style",r);var Q=h;(i.updateQueue=Q)&&(i.flags|=4)}},Nd=function(t,i,r,a){r!==a&&(i.flags|=4)};function oo(t,i){if(!vt)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function tn(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,a=0;if(i)for(var f=t.child;f!==null;)r|=f.lanes|f.childLanes,a|=f.subtreeFlags&14680064,a|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)r|=f.lanes|f.childLanes,a|=f.subtreeFlags,a|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=a,t.childLanes=r,i}function hg(t,i,r){var a=i.pendingProps;switch(Bl(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(i),null;case 1:return gn(i.type)&&Yo(),tn(i),null;case 3:return a=i.stateNode,ns(),gt(mn),gt(Jt),Jl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Jo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,qn!==null&&(Lu(qn),qn=null))),vu(t,i),tn(i),null;case 5:Kl(i);var f=pr(to.current);if(r=i.type,t!==null&&i.stateNode!=null)Id(t,i,r,a,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return tn(i),null}if(t=pr(si.current),Jo(i)){a=i.stateNode,r=i.type;var h=i.memoizedProps;switch(a[ri]=i,a[Zs]=h,t=(i.mode&1)!==0,r){case"dialog":mt("cancel",a),mt("close",a);break;case"iframe":case"object":case"embed":mt("load",a);break;case"video":case"audio":for(f=0;f<qs.length;f++)mt(qs[f],a);break;case"source":mt("error",a);break;case"img":case"image":case"link":mt("error",a),mt("load",a);break;case"details":mt("toggle",a);break;case"input":on(a,h),mt("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},mt("invalid",a);break;case"textarea":w(a,h),mt("invalid",a)}tt(r,h),f=null;for(var S in h)if(h.hasOwnProperty(S)){var L=h[S];S==="children"?typeof L=="string"?a.textContent!==L&&(h.suppressHydrationWarning!==!0&&Xo(a.textContent,L,t),f=["children",L]):typeof L=="number"&&a.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&Xo(a.textContent,L,t),f=["children",""+L]):o.hasOwnProperty(S)&&L!=null&&S==="onScroll"&&mt("scroll",a)}switch(r){case"input":lt(a),wt(a,h,!0);break;case"textarea":lt(a),ve(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=jo)}a=f,i.updateQueue=a,a!==null&&(i.flags|=4)}else{S=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Se(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=S.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=S.createElement(r,{is:a.is}):(t=S.createElement(r),r==="select"&&(S=t,a.multiple?S.multiple=!0:a.size&&(S.size=a.size))):t=S.createElementNS(t,r),t[ri]=i,t[Zs]=a,Dd(t,i,!1,!1),i.stateNode=t;e:{switch(S=ct(r,a),r){case"dialog":mt("cancel",t),mt("close",t),f=a;break;case"iframe":case"object":case"embed":mt("load",t),f=a;break;case"video":case"audio":for(f=0;f<qs.length;f++)mt(qs[f],t);f=a;break;case"source":mt("error",t),f=a;break;case"img":case"image":case"link":mt("error",t),mt("load",t),f=a;break;case"details":mt("toggle",t),f=a;break;case"input":on(t,a),f=Dt(t,a),mt("invalid",t);break;case"option":f=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},f=Z({},a,{value:void 0}),mt("invalid",t);break;case"textarea":w(t,a),f=R(t,a),mt("invalid",t);break;default:f=a}tt(r,f),L=f;for(h in L)if(L.hasOwnProperty(h)){var k=L[h];h==="style"?Oe(t,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&be(t,k)):h==="children"?typeof k=="string"?(r!=="textarea"||k!=="")&&le(t,k):typeof k=="number"&&le(t,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?k!=null&&h==="onScroll"&&mt("scroll",t):k!=null&&A(t,h,k,S))}switch(r){case"input":lt(t),wt(t,a,!1);break;case"textarea":lt(t),ve(t);break;case"option":a.value!=null&&t.setAttribute("value",""+ye(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Bt(t,!!a.multiple,h,!1):a.defaultValue!=null&&Bt(t,!!a.multiple,a.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=jo)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return tn(i),null;case 6:if(t&&i.stateNode!=null)Nd(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(r=pr(to.current),pr(si.current),Jo(i)){if(a=i.stateNode,r=i.memoizedProps,a[ri]=i,(h=a.nodeValue!==r)&&(t=Mn,t!==null))switch(t.tag){case 3:Xo(a.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xo(a.nodeValue,r,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[ri]=i,i.stateNode=a}return tn(i),null;case 13:if(gt(yt),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&wn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)kf(),Qr(),i.flags|=98560,h=!1;else if(h=Jo(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ri]=i}else Qr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),h=!1}else qn!==null&&(Lu(qn),qn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=r,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(yt.current&1)!==0?Ft===0&&(Ft=3):Du())),i.updateQueue!==null&&(i.flags|=4),tn(i),null);case 4:return ns(),vu(t,i),t===null&&Ys(i.stateNode.containerInfo),tn(i),null;case 10:return jl(i.type._context),tn(i),null;case 17:return gn(i.type)&&Yo(),tn(i),null;case 19:if(gt(yt),h=i.memoizedState,h===null)return tn(i),null;if(a=(i.flags&128)!==0,S=h.rendering,S===null)if(a)oo(h,!1);else{if(Ft!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(S=sa(t),S!==null){for(i.flags|=128,oo(h,!1),a=S.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=r,r=i.child;r!==null;)h=r,t=a,h.flags&=14680066,S=h.alternate,S===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=S.childLanes,h.lanes=S.lanes,h.child=S.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=S.memoizedProps,h.memoizedState=S.memoizedState,h.updateQueue=S.updateQueue,h.type=S.type,t=S.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ht(yt,yt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Ye()>os&&(i.flags|=128,a=!0,oo(h,!1),i.lanes=4194304)}else{if(!a)if(t=sa(S),t!==null){if(i.flags|=128,a=!0,r=t.updateQueue,r!==null&&(i.updateQueue=r,i.flags|=4),oo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!S.alternate&&!vt)return tn(i),null}else 2*Ye()-h.renderingStartTime>os&&r!==1073741824&&(i.flags|=128,a=!0,oo(h,!1),i.lanes=4194304);h.isBackwards?(S.sibling=i.child,i.child=S):(r=h.last,r!==null?r.sibling=S:i.child=S,h.last=S)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ye(),i.sibling=null,r=yt.current,ht(yt,a?r&1|2:r&1),i):(tn(i),null);case 22:case 23:return Ru(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&(i.mode&1)!==0?(En&1073741824)!==0&&(tn(i),i.subtreeFlags&6&&(i.flags|=8192)):tn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function pg(t,i){switch(Bl(i),i.tag){case 1:return gn(i.type)&&Yo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ns(),gt(mn),gt(Jt),Jl(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Kl(i),null;case 13:if(gt(yt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Qr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return gt(yt),null;case 4:return ns(),null;case 10:return jl(i.type._context),null;case 22:case 23:return Ru(),null;case 24:return null;default:return null}}var pa=!1,nn=!1,mg=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function rs(t,i){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){Tt(t,i,a)}else r.current=null}function xu(t,i,r){try{r()}catch(a){Tt(t,i,a)}}var zd=!1;function gg(t,i){if(Rl=No,t=hf(),wl(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var f=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var S=0,L=-1,k=-1,Q=0,pe=0,_e=t,he=null;t:for(;;){for(var Ae;_e!==r||f!==0&&_e.nodeType!==3||(L=S+f),_e!==h||a!==0&&_e.nodeType!==3||(k=S+a),_e.nodeType===3&&(S+=_e.nodeValue.length),(Ae=_e.firstChild)!==null;)he=_e,_e=Ae;for(;;){if(_e===t)break t;if(he===r&&++Q===f&&(L=S),he===h&&++pe===a&&(k=S),(Ae=_e.nextSibling)!==null)break;_e=he,he=_e.parentNode}_e=Ae}r=L===-1||k===-1?null:{start:L,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(Dl={focusedElem:t,selectionRange:r},No=!1,Pe=i;Pe!==null;)if(i=Pe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Pe=t;else for(;Pe!==null;){i=Pe;try{var Re=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Re!==null){var De=Re.memoizedProps,Lt=Re.memoizedState,X=i.stateNode,U=X.getSnapshotBeforeUpdate(i.elementType===i.type?De:Yn(i.type,De),Lt);X.__reactInternalSnapshotBeforeUpdate=U}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(xe){Tt(i,i.return,xe)}if(t=i.sibling,t!==null){t.return=i.return,Pe=t;break}Pe=i.return}return Re=zd,zd=!1,Re}function ao(t,i,r){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var f=a=a.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&xu(i,r,h)}f=f.next}while(f!==a)}}function ma(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.create;r.destroy=a()}r=r.next}while(r!==i)}}function yu(t){var i=t.ref;if(i!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof i=="function"?i(t):i.current=t}}function Fd(t){var i=t.alternate;i!==null&&(t.alternate=null,Fd(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ri],delete i[Zs],delete i[Fl],delete i[Qm],delete i[Jm])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kd(t){return t.tag===5||t.tag===3||t.tag===4}function Ud(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Su(t,i,r){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?r.nodeType===8?r.parentNode.insertBefore(t,i):r.insertBefore(t,i):(r.nodeType===8?(i=r.parentNode,i.insertBefore(t,r)):(i=r,i.appendChild(t)),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=jo));else if(a!==4&&(t=t.child,t!==null))for(Su(t,i,r),t=t.sibling;t!==null;)Su(t,i,r),t=t.sibling}function Mu(t,i,r){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Mu(t,i,r),t=t.sibling;t!==null;)Mu(t,i,r),t=t.sibling}var jt=null,$n=!1;function Hi(t,i,r){for(r=r.child;r!==null;)Od(t,i,r),r=r.sibling}function Od(t,i,r){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Ri,r)}catch{}switch(r.tag){case 5:nn||rs(r,i);case 6:var a=jt,f=$n;jt=null,Hi(t,i,r),jt=a,$n=f,jt!==null&&($n?(t=jt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):jt.removeChild(r.stateNode));break;case 18:jt!==null&&($n?(t=jt,r=r.stateNode,t.nodeType===8?zl(t.parentNode,r):t.nodeType===1&&zl(t,r),Os(t)):zl(jt,r.stateNode));break;case 4:a=jt,f=$n,jt=r.stateNode.containerInfo,$n=!0,Hi(t,i,r),jt=a,$n=f;break;case 0:case 11:case 14:case 15:if(!nn&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){f=a=a.next;do{var h=f,S=h.destroy;h=h.tag,S!==void 0&&((h&2)!==0||(h&4)!==0)&&xu(r,i,S),f=f.next}while(f!==a)}Hi(t,i,r);break;case 1:if(!nn&&(rs(r,i),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(L){Tt(r,i,L)}Hi(t,i,r);break;case 21:Hi(t,i,r);break;case 22:r.mode&1?(nn=(a=nn)||r.memoizedState!==null,Hi(t,i,r),nn=a):Hi(t,i,r);break;default:Hi(t,i,r)}}function Bd(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new mg),i.forEach(function(a){var f=Tg.bind(null,t,a);r.has(a)||(r.add(a),a.then(f,f))})}}function Zn(t,i){var r=i.deletions;if(r!==null)for(var a=0;a<r.length;a++){var f=r[a];try{var h=t,S=i,L=S;e:for(;L!==null;){switch(L.tag){case 5:jt=L.stateNode,$n=!1;break e;case 3:jt=L.stateNode.containerInfo,$n=!0;break e;case 4:jt=L.stateNode.containerInfo,$n=!0;break e}L=L.return}if(jt===null)throw Error(n(160));Od(h,S,f),jt=null,$n=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(Q){Tt(f,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Vd(i,t),i=i.sibling}function Vd(t,i){var r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(i,t),ai(t),a&4){try{ao(3,t,t.return),ma(3,t)}catch(De){Tt(t,t.return,De)}try{ao(5,t,t.return)}catch(De){Tt(t,t.return,De)}}break;case 1:Zn(i,t),ai(t),a&512&&r!==null&&rs(r,r.return);break;case 5:if(Zn(i,t),ai(t),a&512&&r!==null&&rs(r,r.return),t.flags&32){var f=t.stateNode;try{le(f,"")}catch(De){Tt(t,t.return,De)}}if(a&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,S=r!==null?r.memoizedProps:h,L=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&It(f,h),ct(L,S);var Q=ct(L,h);for(S=0;S<k.length;S+=2){var pe=k[S],_e=k[S+1];pe==="style"?Oe(f,_e):pe==="dangerouslySetInnerHTML"?be(f,_e):pe==="children"?le(f,_e):A(f,pe,_e,Q)}switch(L){case"input":Kt(f,h);break;case"textarea":se(f,h);break;case"select":var he=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Ae=h.value;Ae!=null?Bt(f,!!h.multiple,Ae,!1):he!==!!h.multiple&&(h.defaultValue!=null?Bt(f,!!h.multiple,h.defaultValue,!0):Bt(f,!!h.multiple,h.multiple?[]:"",!1))}f[Zs]=h}catch(De){Tt(t,t.return,De)}}break;case 6:if(Zn(i,t),ai(t),a&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(De){Tt(t,t.return,De)}}break;case 3:if(Zn(i,t),ai(t),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Os(i.containerInfo)}catch(De){Tt(t,t.return,De)}break;case 4:Zn(i,t),ai(t);break;case 13:Zn(i,t),ai(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(Tu=Ye())),a&4&&Bd(t);break;case 22:if(pe=r!==null&&r.memoizedState!==null,t.mode&1?(nn=(Q=nn)||pe,Zn(i,t),nn=Q):Zn(i,t),ai(t),a&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!pe&&(t.mode&1)!==0)for(Pe=t,pe=t.child;pe!==null;){for(_e=Pe=pe;Pe!==null;){switch(he=Pe,Ae=he.child,he.tag){case 0:case 11:case 14:case 15:ao(4,he,he.return);break;case 1:rs(he,he.return);var Re=he.stateNode;if(typeof Re.componentWillUnmount=="function"){a=he,r=he.return;try{i=a,Re.props=i.memoizedProps,Re.state=i.memoizedState,Re.componentWillUnmount()}catch(De){Tt(a,r,De)}}break;case 5:rs(he,he.return);break;case 22:if(he.memoizedState!==null){Hd(_e);continue}}Ae!==null?(Ae.return=he,Pe=Ae):Hd(_e)}pe=pe.sibling}e:for(pe=null,_e=t;;){if(_e.tag===5){if(pe===null){pe=_e;try{f=_e.stateNode,Q?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=_e.stateNode,k=_e.memoizedProps.style,S=k!=null&&k.hasOwnProperty("display")?k.display:null,L.style.display=Ie("display",S))}catch(De){Tt(t,t.return,De)}}}else if(_e.tag===6){if(pe===null)try{_e.stateNode.nodeValue=Q?"":_e.memoizedProps}catch(De){Tt(t,t.return,De)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===t)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===t)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===t)break e;pe===_e&&(pe=null),_e=_e.return}pe===_e&&(pe=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:Zn(i,t),ai(t),a&4&&Bd(t);break;case 21:break;default:Zn(i,t),ai(t)}}function ai(t){var i=t.flags;if(i&2){try{e:{for(var r=t.return;r!==null;){if(kd(r)){var a=r;break e}r=r.return}throw Error(n(160))}switch(a.tag){case 5:var f=a.stateNode;a.flags&32&&(le(f,""),a.flags&=-33);var h=Ud(t);Mu(t,h,f);break;case 3:case 4:var S=a.stateNode.containerInfo,L=Ud(t);Su(t,L,S);break;default:throw Error(n(161))}}catch(k){Tt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function _g(t,i,r){Pe=t,Gd(t)}function Gd(t,i,r){for(var a=(t.mode&1)!==0;Pe!==null;){var f=Pe,h=f.child;if(f.tag===22&&a){var S=f.memoizedState!==null||pa;if(!S){var L=f.alternate,k=L!==null&&L.memoizedState!==null||nn;L=pa;var Q=nn;if(pa=S,(nn=k)&&!Q)for(Pe=f;Pe!==null;)S=Pe,k=S.child,S.tag===22&&S.memoizedState!==null?Xd(f):k!==null?(k.return=S,Pe=k):Xd(f);for(;h!==null;)Pe=h,Gd(h),h=h.sibling;Pe=f,pa=L,nn=Q}Wd(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Pe=h):Wd(t)}}function Wd(t){for(;Pe!==null;){var i=Pe;if((i.flags&8772)!==0){var r=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:nn||ma(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!nn)if(r===null)a.componentDidMount();else{var f=i.elementType===i.type?r.memoizedProps:Yn(i.type,r.memoizedProps);a.componentDidUpdate(f,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Hf(i,h,a);break;case 3:var S=i.updateQueue;if(S!==null){if(r=null,i.child!==null)switch(i.child.tag){case 5:r=i.child.stateNode;break;case 1:r=i.child.stateNode}Hf(i,S,r)}break;case 5:var L=i.stateNode;if(r===null&&i.flags&4){r=L;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&r.focus();break;case"img":k.src&&(r.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var pe=Q.memoizedState;if(pe!==null){var _e=pe.dehydrated;_e!==null&&Os(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}nn||i.flags&512&&yu(i)}catch(he){Tt(i,i.return,he)}}if(i===t){Pe=null;break}if(r=i.sibling,r!==null){r.return=i.return,Pe=r;break}Pe=i.return}}function Hd(t){for(;Pe!==null;){var i=Pe;if(i===t){Pe=null;break}var r=i.sibling;if(r!==null){r.return=i.return,Pe=r;break}Pe=i.return}}function Xd(t){for(;Pe!==null;){var i=Pe;try{switch(i.tag){case 0:case 11:case 15:var r=i.return;try{ma(4,i)}catch(k){Tt(i,r,k)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var f=i.return;try{a.componentDidMount()}catch(k){Tt(i,f,k)}}var h=i.return;try{yu(i)}catch(k){Tt(i,h,k)}break;case 5:var S=i.return;try{yu(i)}catch(k){Tt(i,S,k)}}}catch(k){Tt(i,i.return,k)}if(i===t){Pe=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Pe=L;break}Pe=i.return}}var vg=Math.ceil,ga=I.ReactCurrentDispatcher,wu=I.ReactCurrentOwner,Bn=I.ReactCurrentBatchConfig,ot=0,Wt=null,Pt=null,qt=0,En=0,ss=Oi(0),Ft=0,lo=null,gr=0,_a=0,Eu=0,uo=null,vn=null,Tu=0,os=1/0,Mi=null,va=!1,Cu=null,Xi=null,xa=!1,ji=null,ya=0,co=0,bu=null,Sa=-1,Ma=0;function fn(){return(ot&6)!==0?Ye():Sa!==-1?Sa:Sa=Ye()}function qi(t){return(t.mode&1)===0?1:(ot&2)!==0&&qt!==0?qt&-qt:tg.transition!==null?(Ma===0&&(Ma=kc()),Ma):(t=ut,t!==0||(t=window.event,t=t===void 0?16:jc(t.type)),t)}function Kn(t,i,r,a){if(50<co)throw co=0,bu=null,Error(n(185));Ns(t,r,a),((ot&2)===0||t!==Wt)&&(t===Wt&&((ot&2)===0&&(_a|=r),Ft===4&&Yi(t,qt)),xn(t,a),r===1&&ot===0&&(i.mode&1)===0&&(os=Ye()+500,Zo&&Vi()))}function xn(t,i){var r=t.callbackNode;tm(t,i);var a=Ro(t,t===Wt?qt:0);if(a===0)r!==null&&Qt(r),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(r!=null&&Qt(r),i===1)t.tag===0?eg(qd.bind(null,t)):Df(qd.bind(null,t)),Zm(function(){(ot&6)===0&&Vi()}),r=null;else{switch(Uc(a)){case 1:r=ar;break;case 4:r=At;break;case 16:r=zn;break;case 536870912:r=Pi;break;default:r=zn}r=th(r,jd.bind(null,t))}t.callbackPriority=i,t.callbackNode=r}}function jd(t,i){if(Sa=-1,Ma=0,(ot&6)!==0)throw Error(n(327));var r=t.callbackNode;if(as()&&t.callbackNode!==r)return null;var a=Ro(t,t===Wt?qt:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||i)i=wa(t,a);else{i=a;var f=ot;ot|=2;var h=$d();(Wt!==t||qt!==i)&&(Mi=null,os=Ye()+500,vr(t,i));do try{Sg();break}catch(L){Yd(t,L)}while(!0);Xl(),ga.current=h,ot=f,Pt!==null?i=0:(Wt=null,qt=0,i=Ft)}if(i!==0){if(i===2&&(f=al(t),f!==0&&(a=f,i=Au(t,f))),i===1)throw r=lo,vr(t,0),Yi(t,a),xn(t,Ye()),r;if(i===6)Yi(t,a);else{if(f=t.current.alternate,(a&30)===0&&!xg(f)&&(i=wa(t,a),i===2&&(h=al(t),h!==0&&(a=h,i=Au(t,h))),i===1))throw r=lo,vr(t,0),Yi(t,a),xn(t,Ye()),r;switch(t.finishedWork=f,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:xr(t,vn,Mi);break;case 3:if(Yi(t,a),(a&130023424)===a&&(i=Tu+500-Ye(),10<i)){if(Ro(t,0)!==0)break;if(f=t.suspendedLanes,(f&a)!==a){fn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Nl(xr.bind(null,t,vn,Mi),i);break}xr(t,vn,Mi);break;case 4:if(Yi(t,a),(a&4194240)===a)break;for(i=t.eventTimes,f=-1;0<a;){var S=31-ln(a);h=1<<S,S=i[S],S>f&&(f=S),a&=~h}if(a=f,a=Ye()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*vg(a/1960))-a,10<a){t.timeoutHandle=Nl(xr.bind(null,t,vn,Mi),a);break}xr(t,vn,Mi);break;case 5:xr(t,vn,Mi);break;default:throw Error(n(329))}}}return xn(t,Ye()),t.callbackNode===r?jd.bind(null,t):null}function Au(t,i){var r=uo;return t.current.memoizedState.isDehydrated&&(vr(t,i).flags|=256),t=wa(t,i),t!==2&&(i=vn,vn=r,i!==null&&Lu(i)),t}function Lu(t){vn===null?vn=t:vn.push.apply(vn,t)}function xg(t){for(var i=t;;){if(i.flags&16384){var r=i.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var f=r[a],h=f.getSnapshot;f=f.value;try{if(!jn(h(),f))return!1}catch{return!1}}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Yi(t,i){for(i&=~Eu,i&=~_a,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var r=31-ln(i),a=1<<r;t[r]=-1,i&=~a}}function qd(t){if((ot&6)!==0)throw Error(n(327));as();var i=Ro(t,0);if((i&1)===0)return xn(t,Ye()),null;var r=wa(t,i);if(t.tag!==0&&r===2){var a=al(t);a!==0&&(i=a,r=Au(t,a))}if(r===1)throw r=lo,vr(t,0),Yi(t,i),xn(t,Ye()),r;if(r===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,xr(t,vn,Mi),xn(t,Ye()),null}function Pu(t,i){var r=ot;ot|=1;try{return t(i)}finally{ot=r,ot===0&&(os=Ye()+500,Zo&&Vi())}}function _r(t){ji!==null&&ji.tag===0&&(ot&6)===0&&as();var i=ot;ot|=1;var r=Bn.transition,a=ut;try{if(Bn.transition=null,ut=1,t)return t()}finally{ut=a,Bn.transition=r,ot=i,(ot&6)===0&&Vi()}}function Ru(){En=ss.current,gt(ss)}function vr(t,i){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,$m(r)),Pt!==null)for(r=Pt.return;r!==null;){var a=r;switch(Bl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Yo();break;case 3:ns(),gt(mn),gt(Jt),Jl();break;case 5:Kl(a);break;case 4:ns();break;case 13:gt(yt);break;case 19:gt(yt);break;case 10:jl(a.type._context);break;case 22:case 23:Ru()}r=r.return}if(Wt=t,Pt=t=$i(t.current,null),qt=En=i,Ft=0,lo=null,Eu=_a=gr=0,vn=uo=null,hr!==null){for(i=0;i<hr.length;i++)if(r=hr[i],a=r.interleaved,a!==null){r.interleaved=null;var f=a.next,h=r.pending;if(h!==null){var S=h.next;h.next=f,a.next=S}r.pending=a}hr=null}return t}function Yd(t,i){do{var r=Pt;try{if(Xl(),oa.current=ca,aa){for(var a=St.memoizedState;a!==null;){var f=a.queue;f!==null&&(f.pending=null),a=a.next}aa=!1}if(mr=0,Gt=zt=St=null,no=!1,io=0,wu.current=null,r===null||r.return===null){Ft=1,lo=i,Pt=null;break}e:{var h=t,S=r.return,L=r,k=i;if(i=qt,L.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var Q=k,pe=L,_e=pe.tag;if((pe.mode&1)===0&&(_e===0||_e===11||_e===15)){var he=pe.alternate;he?(pe.updateQueue=he.updateQueue,pe.memoizedState=he.memoizedState,pe.lanes=he.lanes):(pe.updateQueue=null,pe.memoizedState=null)}var Ae=xd(S);if(Ae!==null){Ae.flags&=-257,yd(Ae,S,L,h,i),Ae.mode&1&&vd(h,Q,i),i=Ae,k=Q;var Re=i.updateQueue;if(Re===null){var De=new Set;De.add(k),i.updateQueue=De}else Re.add(k);break e}else{if((i&1)===0){vd(h,Q,i),Du();break e}k=Error(n(426))}}else if(vt&&L.mode&1){var Lt=xd(S);if(Lt!==null){(Lt.flags&65536)===0&&(Lt.flags|=256),yd(Lt,S,L,h,i),Wl(is(k,L));break e}}h=k=is(k,L),Ft!==4&&(Ft=2),uo===null?uo=[h]:uo.push(h),h=S;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var X=gd(h,k,i);Wf(h,X);break e;case 1:L=k;var U=h.type,$=h.stateNode;if((h.flags&128)===0&&(typeof U.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Xi===null||!Xi.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var xe=_d(h,L,i);Wf(h,xe);break e}}h=h.return}while(h!==null)}Kd(r)}catch(Ne){i=Ne,Pt===r&&r!==null&&(Pt=r=r.return);continue}break}while(!0)}function $d(){var t=ga.current;return ga.current=ca,t===null?ca:t}function Du(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Wt===null||(gr&268435455)===0&&(_a&268435455)===0||Yi(Wt,qt)}function wa(t,i){var r=ot;ot|=2;var a=$d();(Wt!==t||qt!==i)&&(Mi=null,vr(t,i));do try{yg();break}catch(f){Yd(t,f)}while(!0);if(Xl(),ot=r,ga.current=a,Pt!==null)throw Error(n(261));return Wt=null,qt=0,Ft}function yg(){for(;Pt!==null;)Zd(Pt)}function Sg(){for(;Pt!==null&&!Xn();)Zd(Pt)}function Zd(t){var i=eh(t.alternate,t,En);t.memoizedProps=t.pendingProps,i===null?Kd(t):Pt=i,wu.current=null}function Kd(t){var i=t;do{var r=i.alternate;if(t=i.return,(i.flags&32768)===0){if(r=hg(r,i,En),r!==null){Pt=r;return}}else{if(r=pg(r,i),r!==null){r.flags&=32767,Pt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Pt=null;return}}if(i=i.sibling,i!==null){Pt=i;return}Pt=i=t}while(i!==null);Ft===0&&(Ft=5)}function xr(t,i,r){var a=ut,f=Bn.transition;try{Bn.transition=null,ut=1,Mg(t,i,r,a)}finally{Bn.transition=f,ut=a}return null}function Mg(t,i,r,a){do as();while(ji!==null);if((ot&6)!==0)throw Error(n(327));r=t.finishedWork;var f=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=r.lanes|r.childLanes;if(nm(t,h),t===Wt&&(Pt=Wt=null,qt=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||xa||(xa=!0,th(zn,function(){return as(),null})),h=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||h){h=Bn.transition,Bn.transition=null;var S=ut;ut=1;var L=ot;ot|=4,wu.current=null,gg(t,r),Vd(r,t),Gm(Dl),No=!!Rl,Dl=Rl=null,t.current=r,_g(r),hi(),ot=L,ut=S,Bn.transition=h}else t.current=r;if(xa&&(xa=!1,ji=t,ya=f),h=t.pendingLanes,h===0&&(Xi=null),pi(r.stateNode),xn(t,Ye()),i!==null)for(a=t.onRecoverableError,r=0;r<i.length;r++)f=i[r],a(f.value,{componentStack:f.stack,digest:f.digest});if(va)throw va=!1,t=Cu,Cu=null,t;return(ya&1)!==0&&t.tag!==0&&as(),h=t.pendingLanes,(h&1)!==0?t===bu?co++:(co=0,bu=t):co=0,Vi(),null}function as(){if(ji!==null){var t=Uc(ya),i=Bn.transition,r=ut;try{if(Bn.transition=null,ut=16>t?16:t,ji===null)var a=!1;else{if(t=ji,ji=null,ya=0,(ot&6)!==0)throw Error(n(331));var f=ot;for(ot|=4,Pe=t.current;Pe!==null;){var h=Pe,S=h.child;if((Pe.flags&16)!==0){var L=h.deletions;if(L!==null){for(var k=0;k<L.length;k++){var Q=L[k];for(Pe=Q;Pe!==null;){var pe=Pe;switch(pe.tag){case 0:case 11:case 15:ao(8,pe,h)}var _e=pe.child;if(_e!==null)_e.return=pe,Pe=_e;else for(;Pe!==null;){pe=Pe;var he=pe.sibling,Ae=pe.return;if(Fd(pe),pe===Q){Pe=null;break}if(he!==null){he.return=Ae,Pe=he;break}Pe=Ae}}}var Re=h.alternate;if(Re!==null){var De=Re.child;if(De!==null){Re.child=null;do{var Lt=De.sibling;De.sibling=null,De=Lt}while(De!==null)}}Pe=h}}if((h.subtreeFlags&2064)!==0&&S!==null)S.return=h,Pe=S;else e:for(;Pe!==null;){if(h=Pe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:ao(9,h,h.return)}var X=h.sibling;if(X!==null){X.return=h.return,Pe=X;break e}Pe=h.return}}var U=t.current;for(Pe=U;Pe!==null;){S=Pe;var $=S.child;if((S.subtreeFlags&2064)!==0&&$!==null)$.return=S,Pe=$;else e:for(S=U;Pe!==null;){if(L=Pe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:ma(9,L)}}catch(Ne){Tt(L,L.return,Ne)}if(L===S){Pe=null;break e}var xe=L.sibling;if(xe!==null){xe.return=L.return,Pe=xe;break e}Pe=L.return}}if(ot=f,Vi(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Ri,t)}catch{}a=!0}return a}finally{ut=r,Bn.transition=i}}return!1}function Qd(t,i,r){i=is(r,i),i=gd(t,i,1),t=Wi(t,i,1),i=fn(),t!==null&&(Ns(t,1,i),xn(t,i))}function Tt(t,i,r){if(t.tag===3)Qd(t,t,r);else for(;i!==null;){if(i.tag===3){Qd(i,t,r);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xi===null||!Xi.has(a))){t=is(r,t),t=_d(i,t,1),i=Wi(i,t,1),t=fn(),i!==null&&(Ns(i,1,t),xn(i,t));break}}i=i.return}}function wg(t,i,r){var a=t.pingCache;a!==null&&a.delete(i),i=fn(),t.pingedLanes|=t.suspendedLanes&r,Wt===t&&(qt&r)===r&&(Ft===4||Ft===3&&(qt&130023424)===qt&&500>Ye()-Tu?vr(t,0):Eu|=r),xn(t,i)}function Jd(t,i){i===0&&((t.mode&1)===0?i=1:(i=Po,Po<<=1,(Po&130023424)===0&&(Po=4194304)));var r=fn();t=xi(t,i),t!==null&&(Ns(t,i,r),xn(t,r))}function Eg(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),Jd(t,r)}function Tg(t,i){var r=0;switch(t.tag){case 13:var a=t.stateNode,f=t.memoizedState;f!==null&&(r=f.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),Jd(t,r)}var eh;eh=function(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps||mn.current)_n=!0;else{if((t.lanes&r)===0&&(i.flags&128)===0)return _n=!1,dg(t,i,r);_n=(t.flags&131072)!==0}else _n=!1,vt&&(i.flags&1048576)!==0&&If(i,Qo,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;ha(t,i),t=i.pendingProps;var f=$r(i,Jt.current);ts(i,r),f=nu(null,i,a,t,f,r);var h=iu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,gn(a)?(h=!0,$o(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,$l(i),f.updater=fa,i.stateNode=f,f._reactInternals=i,uu(i,a,t,r),i=hu(null,i,a,!0,h,r)):(i.tag=0,vt&&h&&Ol(i),cn(null,i,f,r),i=i.child),i;case 16:a=i.elementType;e:{switch(ha(t,i),t=i.pendingProps,f=a._init,a=f(a._payload),i.type=a,f=i.tag=bg(a),t=Yn(a,t),f){case 0:i=du(null,i,a,t,r);break e;case 1:i=Cd(null,i,a,t,r);break e;case 11:i=Sd(null,i,a,t,r);break e;case 14:i=Md(null,i,a,Yn(a.type,t),r);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,f=i.pendingProps,f=i.elementType===a?f:Yn(a,f),du(t,i,a,f,r);case 1:return a=i.type,f=i.pendingProps,f=i.elementType===a?f:Yn(a,f),Cd(t,i,a,f,r);case 3:e:{if(bd(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,f=h.element,Gf(t,i),ra(i,a,null,r);var S=i.memoizedState;if(a=S.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=is(Error(n(423)),i),i=Ad(t,i,a,r,f);break e}else if(a!==f){f=is(Error(n(424)),i),i=Ad(t,i,a,r,f);break e}else for(wn=Ui(i.stateNode.containerInfo.firstChild),Mn=i,vt=!0,qn=null,r=Bf(i,null,a,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Qr(),a===f){i=Si(t,i,r);break e}cn(t,i,a,r)}i=i.child}return i;case 5:return Xf(i),t===null&&Gl(i),a=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,S=f.children,Il(a,f)?S=null:h!==null&&Il(a,h)&&(i.flags|=32),Td(t,i),cn(t,i,S,r),i.child;case 6:return t===null&&Gl(i),null;case 13:return Ld(t,i,r);case 4:return Zl(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=Jr(i,null,a,r):cn(t,i,a,r),i.child;case 11:return a=i.type,f=i.pendingProps,f=i.elementType===a?f:Yn(a,f),Sd(t,i,a,f,r);case 7:return cn(t,i,i.pendingProps,r),i.child;case 8:return cn(t,i,i.pendingProps.children,r),i.child;case 12:return cn(t,i,i.pendingProps.children,r),i.child;case 10:e:{if(a=i.type._context,f=i.pendingProps,h=i.memoizedProps,S=f.value,ht(ta,a._currentValue),a._currentValue=S,h!==null)if(jn(h.value,S)){if(h.children===f.children&&!mn.current){i=Si(t,i,r);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){S=h.child;for(var k=L.firstContext;k!==null;){if(k.context===a){if(h.tag===1){k=yi(-1,r&-r),k.tag=2;var Q=h.updateQueue;if(Q!==null){Q=Q.shared;var pe=Q.pending;pe===null?k.next=k:(k.next=pe.next,pe.next=k),Q.pending=k}}h.lanes|=r,k=h.alternate,k!==null&&(k.lanes|=r),ql(h.return,r,i),L.lanes|=r;break}k=k.next}}else if(h.tag===10)S=h.type===i.type?null:h.child;else if(h.tag===18){if(S=h.return,S===null)throw Error(n(341));S.lanes|=r,L=S.alternate,L!==null&&(L.lanes|=r),ql(S,r,i),S=h.sibling}else S=h.child;if(S!==null)S.return=h;else for(S=h;S!==null;){if(S===i){S=null;break}if(h=S.sibling,h!==null){h.return=S.return,S=h;break}S=S.return}h=S}cn(t,i,f.children,r),i=i.child}return i;case 9:return f=i.type,a=i.pendingProps.children,ts(i,r),f=Un(f),a=a(f),i.flags|=1,cn(t,i,a,r),i.child;case 14:return a=i.type,f=Yn(a,i.pendingProps),f=Yn(a.type,f),Md(t,i,a,f,r);case 15:return wd(t,i,i.type,i.pendingProps,r);case 17:return a=i.type,f=i.pendingProps,f=i.elementType===a?f:Yn(a,f),ha(t,i),i.tag=1,gn(a)?(t=!0,$o(i)):t=!1,ts(i,r),pd(i,a,f),uu(i,a,f,r),hu(null,i,a,!0,t,r);case 19:return Rd(t,i,r);case 22:return Ed(t,i,r)}throw Error(n(156,i.tag))};function th(t,i){return xt(t,i)}function Cg(t,i,r,a){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,i,r,a){return new Cg(t,i,r,a)}function Iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bg(t){if(typeof t=="function")return Iu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===me)return 11;if(t===ne)return 14}return 2}function $i(t,i){var r=t.alternate;return r===null?(r=Vn(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Ea(t,i,r,a,f,h){var S=2;if(a=t,typeof t=="function")Iu(t)&&(S=1);else if(typeof t=="string")S=5;else e:switch(t){case W:return yr(r.children,f,h,i);case E:S=8,f|=8;break;case F:return t=Vn(12,r,i,f|2),t.elementType=F,t.lanes=h,t;case q:return t=Vn(13,r,i,f),t.elementType=q,t.lanes=h,t;case V:return t=Vn(19,r,i,f),t.elementType=V,t.lanes=h,t;case ae:return Ta(r,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y:S=10;break e;case fe:S=9;break e;case me:S=11;break e;case ne:S=14;break e;case ce:S=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Vn(S,r,i,f),i.elementType=t,i.type=a,i.lanes=h,i}function yr(t,i,r,a){return t=Vn(7,t,a,i),t.lanes=r,t}function Ta(t,i,r,a){return t=Vn(22,t,a,i),t.elementType=ae,t.lanes=r,t.stateNode={isHidden:!1},t}function Nu(t,i,r){return t=Vn(6,t,null,i),t.lanes=r,t}function zu(t,i,r){return i=Vn(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Ag(t,i,r,a,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=a,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Fu(t,i,r,a,f,h,S,L,k){return t=new Ag(t,i,r,L,k),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Vn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},$l(h),t}function Lg(t,i,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:a==null?null:""+a,children:t,containerInfo:i,implementation:r}}function nh(t){if(!t)return Bi;t=t._reactInternals;e:{if(We(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(gn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var r=t.type;if(gn(r))return Pf(t,r,i)}return i}function ih(t,i,r,a,f,h,S,L,k){return t=Fu(r,a,!0,t,f,h,S,L,k),t.context=nh(null),r=t.current,a=fn(),f=qi(r),h=yi(a,f),h.callback=i??null,Wi(r,h,f),t.current.lanes=f,Ns(t,f,a),xn(t,a),t}function Ca(t,i,r,a){var f=i.current,h=fn(),S=qi(f);return r=nh(r),i.context===null?i.context=r:i.pendingContext=r,i=yi(h,S),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=Wi(f,i,S),t!==null&&(Kn(t,f,S,h),ia(t,f,S)),S}function ba(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rh(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function ku(t,i){rh(t,i),(t=t.alternate)&&rh(t,i)}function Pg(){return null}var sh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uu(t){this._internalRoot=t}Aa.prototype.render=Uu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ca(t,i,null,null)},Aa.prototype.unmount=Uu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;_r(function(){Ca(null,t,null,null)}),i[mi]=null}};function Aa(t){this._internalRoot=t}Aa.prototype.unstable_scheduleHydration=function(t){if(t){var i=Vc();t={blockedOn:null,target:t,priority:i};for(var r=0;r<zi.length&&i!==0&&i<zi[r].priority;r++);zi.splice(r,0,t),r===0&&Hc(t)}};function Ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function La(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function oh(){}function Rg(t,i,r,a,f){if(f){if(typeof a=="function"){var h=a;a=function(){var Q=ba(S);h.call(Q)}}var S=ih(i,a,t,0,null,!1,!1,"",oh);return t._reactRootContainer=S,t[mi]=S.current,Ys(t.nodeType===8?t.parentNode:t),_r(),S}for(;f=t.lastChild;)t.removeChild(f);if(typeof a=="function"){var L=a;a=function(){var Q=ba(k);L.call(Q)}}var k=Fu(t,0,!1,null,null,!1,!1,"",oh);return t._reactRootContainer=k,t[mi]=k.current,Ys(t.nodeType===8?t.parentNode:t),_r(function(){Ca(i,k,r,a)}),k}function Pa(t,i,r,a,f){var h=r._reactRootContainer;if(h){var S=h;if(typeof f=="function"){var L=f;f=function(){var k=ba(S);L.call(k)}}Ca(i,S,t,f)}else S=Rg(r,i,t,f,a);return ba(S)}Oc=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var r=Is(i.pendingLanes);r!==0&&(ul(i,r|1),xn(i,Ye()),(ot&6)===0&&(os=Ye()+500,Vi()))}break;case 13:_r(function(){var a=xi(t,1);if(a!==null){var f=fn();Kn(a,t,1,f)}}),ku(t,1)}},cl=function(t){if(t.tag===13){var i=xi(t,134217728);if(i!==null){var r=fn();Kn(i,t,134217728,r)}ku(t,134217728)}},Bc=function(t){if(t.tag===13){var i=qi(t),r=xi(t,i);if(r!==null){var a=fn();Kn(r,t,i,a)}ku(t,i)}},Vc=function(){return ut},Gc=function(t,i){var r=ut;try{return ut=t,i()}finally{ut=r}},ie=function(t,i,r){switch(i){case"input":if(Kt(t,r),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<r.length;i++){var a=r[i];if(a!==t&&a.form===t.form){var f=qo(a);if(!f)throw Error(n(90));qe(a),Kt(a,f)}}}break;case"textarea":se(t,r);break;case"select":i=r.value,i!=null&&Bt(t,!!r.multiple,i,!1)}},Nt=Pu,ii=_r;var Dg={usingClientEntryPoint:!1,Events:[Ks,qr,qo,st,bt,Pu]},fo={findFiberByHostInstance:ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ig={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Je(t),t===null?null:t.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||Pg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{Ri=Ra.inject(Ig),dt=Ra}catch{}}return yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dg,yn.createPortal=function(t,i){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ou(i))throw Error(n(200));return Lg(t,i,null,r)},yn.createRoot=function(t,i){if(!Ou(t))throw Error(n(299));var r=!1,a="",f=sh;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Fu(t,1,!1,null,null,r,!1,a,f),t[mi]=i.current,Ys(t.nodeType===8?t.parentNode:t),new Uu(i)},yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Je(i),t=t===null?null:t.stateNode,t},yn.flushSync=function(t){return _r(t)},yn.hydrate=function(t,i,r){if(!La(i))throw Error(n(200));return Pa(null,t,i,!0,r)},yn.hydrateRoot=function(t,i,r){if(!Ou(t))throw Error(n(405));var a=r!=null&&r.hydratedSources||null,f=!1,h="",S=sh;if(r!=null&&(r.unstable_strictMode===!0&&(f=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(S=r.onRecoverableError)),i=ih(i,null,t,1,r??null,f,!1,h,S),t[mi]=i.current,Ys(t),a)for(t=0;t<a.length;t++)r=a[t],f=r._getVersion,f=f(r._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[r,f]:i.mutableSourceEagerHydrationData.push(r,f);return new Aa(i)},yn.render=function(t,i,r){if(!La(i))throw Error(n(200));return Pa(null,t,i,!1,r)},yn.unmountComponentAtNode=function(t){if(!La(t))throw Error(n(40));return t._reactRootContainer?(_r(function(){Pa(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1},yn.unstable_batchedUpdates=Pu,yn.unstable_renderSubtreeIntoContainer=function(t,i,r,a){if(!La(r))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Pa(t,i,r,!1,a)},yn.version="18.3.1-next-f1338f8080-20240426",yn}var dh;function Gg(){if(dh)return Vu.exports;dh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(e){console.error(e)}}return u(),Vu.exports=Vg(),Vu.exports}var hh;function Wg(){if(hh)return Da;hh=1;var u=Gg();return Da.createRoot=u.createRoot,Da.hydrateRoot=u.hydrateRoot,Da}var Hg=Wg();const Xg=Ap(Hg);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ic="149",jg=0,ph=1,qg=2,Lp=1,Yg=2,So=3,rr=0,Rn=1,tr=2,ir=0,Es=1,mh=2,gh=3,_h=4,$g=5,Ms=100,Zg=101,Kg=102,vh=103,xh=104,Qg=200,Jg=201,e0=202,t0=203,Pp=204,Rp=205,n0=206,i0=207,r0=208,s0=209,o0=210,a0=0,l0=1,u0=2,Ec=3,c0=4,f0=5,d0=6,h0=7,Dp=0,p0=1,m0=2,Li=0,g0=1,_0=2,v0=3,x0=4,y0=5,Ip=300,Cs=301,bs=302,Tc=303,Cc=304,tl=306,bc=1e3,ti=1001,Ac=1002,pn=1003,yh=1004,Hu=1005,Wn=1006,S0=1007,wo=1008,Ir=1009,M0=1010,w0=1011,Np=1012,E0=1013,br=1014,Ar=1015,Eo=1016,T0=1017,C0=1018,Ts=1020,b0=1021,ni=1023,A0=1024,L0=1025,Lr=1026,As=1027,P0=1028,R0=1029,D0=1030,I0=1031,N0=1033,Xu=33776,ju=33777,qu=33778,Yu=33779,Sh=35840,Mh=35841,wh=35842,Eh=35843,z0=36196,Th=37492,Ch=37496,bh=37808,Ah=37809,Lh=37810,Ph=37811,Rh=37812,Dh=37813,Ih=37814,Nh=37815,zh=37816,Fh=37817,kh=37818,Uh=37819,Oh=37820,Bh=37821,$u=36492,F0=36283,Vh=36284,Gh=36285,Wh=36286,Nr=3e3,_t=3001,k0=3200,U0=3201,O0=0,B0=1,li="srgb",To="srgb-linear",Zu=7680,V0=519,Hh=35044,Xh="300 es",Lc=1035;class Ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=Math.PI/180,jh=180/Math.PI;function Co(){const u=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(rn[u&255]+rn[u>>8&255]+rn[u>>16&255]+rn[u>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[n&63|128]+rn[n>>8&255]+"-"+rn[n>>16&255]+rn[n>>24&255]+rn[s&255]+rn[s>>8&255]+rn[s>>16&255]+rn[s>>24&255]).toLowerCase()}function An(u,e,n){return Math.max(e,Math.min(n,u))}function G0(u,e){return(u%e+e)%e}function Qu(u,e,n){return(1-n)*u+n*e}function qh(u){return(u&u-1)===0&&u!==0}function Pc(u){return Math.pow(2,Math.floor(Math.log(u)/Math.LN2))}function Ia(u,e){switch(e.constructor){case Float32Array:return u;case Uint16Array:return u/65535;case Uint8Array:return u/255;case Int16Array:return Math.max(u/32767,-1);case Int8Array:return Math.max(u/127,-1);default:throw new Error("Invalid component type.")}}function Tn(u,e){switch(e.constructor){case Float32Array:return u;case Uint16Array:return Math.round(u*65535);case Uint8Array:return Math.round(u*255);case Int16Array:return Math.round(u*32767);case Int8Array:return Math.round(u*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,n=0){pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,o=e.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),o=Math.sin(n),l=this.x-e.x,d=this.y-e.y;return this.x=l*s-d*o+e.x,this.y=l*o+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ln{constructor(){Ln.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,s,o,l,d,c,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=c,g[3]=n,g[4]=l,g[5]=m,g[6]=s,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,o=n.elements,l=this.elements,d=s[0],c=s[3],m=s[6],p=s[1],g=s[4],x=s[7],v=s[2],M=s[5],b=s[8],y=o[0],_=o[3],C=o[6],D=o[1],A=o[4],I=o[7],P=o[2],G=o[5],W=o[8];return l[0]=d*y+c*D+m*P,l[3]=d*_+c*A+m*G,l[6]=d*C+c*I+m*W,l[1]=p*y+g*D+x*P,l[4]=p*_+g*A+x*G,l[7]=p*C+g*I+x*W,l[2]=v*y+M*D+b*P,l[5]=v*_+M*A+b*G,l[8]=v*C+M*I+b*W,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],o=e[2],l=e[3],d=e[4],c=e[5],m=e[6],p=e[7],g=e[8];return n*d*g-n*c*p-s*l*g+s*c*m+o*l*p-o*d*m}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],l=e[3],d=e[4],c=e[5],m=e[6],p=e[7],g=e[8],x=g*d-c*p,v=c*m-g*l,M=p*l-d*m,b=n*x+s*v+o*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/b;return e[0]=x*y,e[1]=(o*p-g*s)*y,e[2]=(c*s-o*d)*y,e[3]=v*y,e[4]=(g*n-o*m)*y,e[5]=(o*l-c*n)*y,e[6]=M*y,e[7]=(s*m-p*n)*y,e[8]=(d*n-s*l)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,o,l,d,c){const m=Math.cos(l),p=Math.sin(l);return this.set(s*m,s*p,-s*(m*d+p*c)+d+e,-o*p,o*m,-o*(-p*d+m*c)+c+n,0,0,1),this}scale(e,n){return this.premultiply(Ju.makeScale(e,n)),this}rotate(e){return this.premultiply(Ju.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ju.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ju=new Ln;function zp(u){for(let e=u.length-1;e>=0;--e)if(u[e]>=65535)return!0;return!1}function el(u){return document.createElementNS("http://www.w3.org/1999/xhtml",u)}function Pr(u){return u<.04045?u*.0773993808:Math.pow(u*.9478672986+.0521327014,2.4)}function Qa(u){return u<.0031308?u*12.92:1.055*Math.pow(u,.41666)-.055}const ec={[li]:{[To]:Pr},[To]:{[li]:Qa}},dn={legacyMode:!0,get workingColorSpace(){return To},set workingColorSpace(u){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(u,e,n){if(this.legacyMode||e===n||!e||!n)return u;if(ec[e]&&ec[e][n]!==void 0){const s=ec[e][n];return u.r=s(u.r),u.g=s(u.g),u.b=s(u.b),u}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(u,e){return this.convert(u,this.workingColorSpace,e)},toWorkingColorSpace:function(u,e){return this.convert(u,e,this.workingColorSpace)}},Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kt={r:0,g:0,b:0},Qn={h:0,s:0,l:0},Na={h:0,s:0,l:0};function tc(u,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?u+(e-u)*6*n:n<1/2?e:n<2/3?u+(e-u)*6*(2/3-n):u}function za(u,e){return e.r=u.r,e.g=u.g,e.b=u.b,e}class Mt{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&s===void 0?this.set(e):this.setRGB(e,n,s)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dn.toWorkingColorSpace(this,n),this}setRGB(e,n,s,o=dn.workingColorSpace){return this.r=e,this.g=n,this.b=s,dn.toWorkingColorSpace(this,o),this}setHSL(e,n,s,o=dn.workingColorSpace){if(e=G0(e,1),n=An(n,0,1),s=An(s,0,1),n===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+n):s+n-s*n,d=2*s-l;this.r=tc(d,l,e+1/3),this.g=tc(d,l,e),this.b=tc(d,l,e-1/3)}return dn.toWorkingColorSpace(this,o),this}setStyle(e,n=li){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],c=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(l[1],10))/255,this.g=Math.min(255,parseInt(l[2],10))/255,this.b=Math.min(255,parseInt(l[3],10))/255,dn.toWorkingColorSpace(this,n),s(l[4]),this;if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(l[1],10))/100,this.g=Math.min(100,parseInt(l[2],10))/100,this.b=Math.min(100,parseInt(l[3],10))/100,dn.toWorkingColorSpace(this,n),s(l[4]),this;break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const m=parseFloat(l[1])/360,p=parseFloat(l[2])/100,g=parseFloat(l[3])/100;return s(l[4]),this.setHSL(m,p,g,n)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.r=parseInt(l.charAt(0)+l.charAt(0),16)/255,this.g=parseInt(l.charAt(1)+l.charAt(1),16)/255,this.b=parseInt(l.charAt(2)+l.charAt(2),16)/255,dn.toWorkingColorSpace(this,n),this;if(d===6)return this.r=parseInt(l.charAt(0)+l.charAt(1),16)/255,this.g=parseInt(l.charAt(2)+l.charAt(3),16)/255,this.b=parseInt(l.charAt(4)+l.charAt(5),16)/255,dn.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=li){const s=Fp[e.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return dn.fromWorkingColorSpace(za(this,kt),e),An(kt.r*255,0,255)<<16^An(kt.g*255,0,255)<<8^An(kt.b*255,0,255)<<0}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=dn.workingColorSpace){dn.fromWorkingColorSpace(za(this,kt),n);const s=kt.r,o=kt.g,l=kt.b,d=Math.max(s,o,l),c=Math.min(s,o,l);let m,p;const g=(c+d)/2;if(c===d)m=0,p=0;else{const x=d-c;switch(p=g<=.5?x/(d+c):x/(2-d-c),d){case s:m=(o-l)/x+(o<l?6:0);break;case o:m=(l-s)/x+2;break;case l:m=(s-o)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=dn.workingColorSpace){return dn.fromWorkingColorSpace(za(this,kt),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=li){return dn.fromWorkingColorSpace(za(this,kt),e),e!==li?`color(${e} ${kt.r} ${kt.g} ${kt.b})`:`rgb(${kt.r*255|0},${kt.g*255|0},${kt.b*255|0})`}offsetHSL(e,n,s){return this.getHSL(Qn),Qn.h+=e,Qn.s+=n,Qn.l+=s,this.setHSL(Qn.h,Qn.s,Qn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(Qn),e.getHSL(Na);const s=Qu(Qn.h,Na.h,n),o=Qu(Qn.s,Na.s,n),l=Qu(Qn.l,Na.l,n);return this.setHSL(s,o,l),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Mt.NAMES=Fp;let ls;class kp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=el("canvas")),ls.width=e.width,ls.height=e.height;const s=ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ls}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=el("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=Pr(l[d]/255)*255;return s.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Pr(n[s]/255)*255):n[s]=Pr(n[s]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Up{constructor(e=null){this.isSource=!0,this.uuid=Co(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,c=o.length;d<c;d++)o[d].isDataTexture?l.push(nc(o[d].image)):l.push(nc(o[d]))}else l=nc(o);s.url=l}return n||(e.images[this.uuid]=s),s}}function nc(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap?kp.getDataURL(u):u.data?{data:Array.from(u.data),width:u.width,height:u.height,type:u.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let W0=0;class Dn extends Ps{constructor(e=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,s=ti,o=ti,l=Wn,d=wo,c=ni,m=Ir,p=Dn.DEFAULT_ANISOTROPY,g=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Co(),this.name="",this.source=new Up(e),this.mipmaps=[],this.mapping=n,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=m,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ln,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ip)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bc:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bc:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Ip;Dn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,n=0,s=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,o){return this.x=e,this.y=n,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*n+d[4]*s+d[8]*o+d[12]*l,this.y=d[1]*n+d[5]*s+d[9]*o+d[13]*l,this.z=d[2]*n+d[6]*s+d[10]*o+d[14]*l,this.w=d[3]*n+d[7]*s+d[11]*o+d[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,o,l;const m=e.elements,p=m[0],g=m[4],x=m[8],v=m[1],M=m[5],b=m[9],y=m[2],_=m[6],C=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-y)<.01&&Math.abs(b-_)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+y)<.1&&Math.abs(b+_)<.1&&Math.abs(p+M+C-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(p+1)/2,I=(M+1)/2,P=(C+1)/2,G=(g+v)/4,W=(x+y)/4,E=(b+_)/4;return A>I&&A>P?A<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(A),o=G/s,l=W/s):I>P?I<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(I),s=G/o,l=E/o):P<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(P),s=W/l,o=E/l),this.set(s,o,l,n),this}let D=Math.sqrt((_-b)*(_-b)+(x-y)*(x-y)+(v-g)*(v-g));return Math.abs(D)<.001&&(D=1),this.x=(_-b)/D,this.y=(x-y)/D,this.z=(v-g)/D,this.w=Math.acos((p+M+C-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zr extends Ps{constructor(e=1,n=1,s={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n);const o={width:e,height:n,depth:1};this.texture=new Dn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps!==void 0?s.generateMipmaps:!1,this.texture.internalFormat=s.internalFormat!==void 0?s.internalFormat:null,this.texture.minFilter=s.minFilter!==void 0?s.minFilter:Wn,this.depthBuffer=s.depthBuffer!==void 0?s.depthBuffer:!0,this.stencilBuffer=s.stencilBuffer!==void 0?s.stencilBuffer:!1,this.depthTexture=s.depthTexture!==void 0?s.depthTexture:null,this.samples=s.samples!==void 0?s.samples:0}setSize(e,n,s=1){(this.width!==e||this.height!==n||this.depth!==s)&&(this.width=e,this.height=n,this.depth=s,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Up(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Op extends Dn{constructor(e=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class H0 extends Dn{constructor(e=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bo{constructor(e=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=o}static slerpFlat(e,n,s,o,l,d,c){let m=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];const v=l[d+0],M=l[d+1],b=l[d+2],y=l[d+3];if(c===0){e[n+0]=m,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(c===1){e[n+0]=v,e[n+1]=M,e[n+2]=b,e[n+3]=y;return}if(x!==y||m!==v||p!==M||g!==b){let _=1-c;const C=m*v+p*M+g*b+x*y,D=C>=0?1:-1,A=1-C*C;if(A>Number.EPSILON){const P=Math.sqrt(A),G=Math.atan2(P,C*D);_=Math.sin(_*G)/P,c=Math.sin(c*G)/P}const I=c*D;if(m=m*_+v*I,p=p*_+M*I,g=g*_+b*I,x=x*_+y*I,_===1-c){const P=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=P,p*=P,g*=P,x*=P}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=x}static multiplyQuaternionsFlat(e,n,s,o,l,d){const c=s[o],m=s[o+1],p=s[o+2],g=s[o+3],x=l[d],v=l[d+1],M=l[d+2],b=l[d+3];return e[n]=c*b+g*x+m*M-p*v,e[n+1]=m*b+g*v+p*x-c*M,e[n+2]=p*b+g*M+c*v-m*x,e[n+3]=g*b-c*x-m*v-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,o){return this._x=e,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const s=e._x,o=e._y,l=e._z,d=e._order,c=Math.cos,m=Math.sin,p=c(s/2),g=c(o/2),x=c(l/2),v=m(s/2),M=m(o/2),b=m(l/2);switch(d){case"XYZ":this._x=v*g*x+p*M*b,this._y=p*M*x-v*g*b,this._z=p*g*b+v*M*x,this._w=p*g*x-v*M*b;break;case"YXZ":this._x=v*g*x+p*M*b,this._y=p*M*x-v*g*b,this._z=p*g*b-v*M*x,this._w=p*g*x+v*M*b;break;case"ZXY":this._x=v*g*x-p*M*b,this._y=p*M*x+v*g*b,this._z=p*g*b+v*M*x,this._w=p*g*x-v*M*b;break;case"ZYX":this._x=v*g*x-p*M*b,this._y=p*M*x+v*g*b,this._z=p*g*b-v*M*x,this._w=p*g*x+v*M*b;break;case"YZX":this._x=v*g*x+p*M*b,this._y=p*M*x+v*g*b,this._z=p*g*b-v*M*x,this._w=p*g*x-v*M*b;break;case"XZY":this._x=v*g*x-p*M*b,this._y=p*M*x-v*g*b,this._z=p*g*b+v*M*x,this._w=p*g*x+v*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],o=n[4],l=n[8],d=n[1],c=n[5],m=n[9],p=n[2],g=n[6],x=n[10],v=s+c+x;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-m)*M,this._y=(l-p)*M,this._z=(d-o)*M}else if(s>c&&s>x){const M=2*Math.sqrt(1+s-c-x);this._w=(g-m)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(l+p)/M}else if(c>x){const M=2*Math.sqrt(1+c-s-x);this._w=(l-p)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-s-c);this._w=(d-o)/M,this._x=(l+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,o=e._y,l=e._z,d=e._w,c=n._x,m=n._y,p=n._z,g=n._w;return this._x=s*g+d*c+o*p-l*m,this._y=o*g+d*m+l*c-s*p,this._z=l*g+d*p+s*m-o*c,this._w=d*g-s*c-o*m-l*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,d=this._w;let c=d*e._w+s*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=d,this._x=s,this._y=o,this._z=l,this;const m=1-c*c;if(m<=Number.EPSILON){const M=1-n;return this._w=M*d+n*this._w,this._x=M*s+n*this._x,this._y=M*o+n*this._y,this._z=M*l+n*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(m),g=Math.atan2(p,c),x=Math.sin((1-n)*g)/p,v=Math.sin(n*g)/p;return this._w=d*x+this._w*v,this._x=s*x+this._x*v,this._y=o*x+this._y*v,this._z=l*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=Math.random(),n=Math.sqrt(1-e),s=Math.sqrt(e),o=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(n*Math.cos(o),s*Math.sin(l),s*Math.cos(l),n*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,n=0,s=0){te.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*s+l[6]*o,this.y=l[1]*n+l[4]*s+l[7]*o,this.z=l[2]*n+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,l=e.elements,d=1/(l[3]*n+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*s+l[8]*o+l[12])*d,this.y=(l[1]*n+l[5]*s+l[9]*o+l[13])*d,this.z=(l[2]*n+l[6]*s+l[10]*o+l[14])*d,this}applyQuaternion(e){const n=this.x,s=this.y,o=this.z,l=e.x,d=e.y,c=e.z,m=e.w,p=m*n+d*o-c*s,g=m*s+c*n-l*o,x=m*o+l*s-d*n,v=-l*n-d*s-c*o;return this.x=p*m+v*-l+g*-c-x*-d,this.y=g*m+v*-d+x*-l-p*-c,this.z=x*m+v*-c+p*-d-g*-l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*s+l[8]*o,this.y=l[1]*n+l[5]*s+l[9]*o,this.z=l[2]*n+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,o=e.y,l=e.z,d=n.x,c=n.y,m=n.z;return this.x=o*m-l*c,this.y=l*d-s*m,this.z=s*c-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(An(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return n*n+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const o=Math.sin(n)*e;return this.x=o*Math.sin(s),this.y=Math.cos(n)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(n),this.y=s*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new te,Yh=new bo;class Ao{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,s=1/0,o=1/0,l=-1/0,d=-1/0,c=-1/0;for(let m=0,p=e.length;m<p;m+=3){const g=e[m],x=e[m+1],v=e[m+2];g<n&&(n=g),x<s&&(s=x),v<o&&(o=v),g>l&&(l=g),x>d&&(d=x),v>c&&(c=v)}return this.min.set(n,s,o),this.max.set(l,d,c),this}setFromBufferAttribute(e){let n=1/0,s=1/0,o=1/0,l=-1/0,d=-1/0,c=-1/0;for(let m=0,p=e.count;m<p;m++){const g=e.getX(m),x=e.getY(m),v=e.getZ(m);g<n&&(n=g),x<s&&(s=x),v<o&&(o=v),g>l&&(l=g),x>d&&(d=x),v>c&&(c=v)}return this.min.set(n,s,o),this.max.set(l,d,c),this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=Sr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0)if(n&&s.attributes!=null&&s.attributes.position!==void 0){const l=s.attributes.position;for(let d=0,c=l.count;d<c;d++)Sr.fromBufferAttribute(l,d).applyMatrix4(e.matrixWorld),this.expandByPoint(Sr)}else s.boundingBox===null&&s.computeBoundingBox(),rc.copy(s.boundingBox),rc.applyMatrix4(e.matrixWorld),this.union(rc);const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sr),Sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),Fa.subVectors(this.max,ho),us.subVectors(e.a,ho),cs.subVectors(e.b,ho),fs.subVectors(e.c,ho),Ki.subVectors(cs,us),Qi.subVectors(fs,cs),Mr.subVectors(us,fs);let n=[0,-Ki.z,Ki.y,0,-Qi.z,Qi.y,0,-Mr.z,Mr.y,Ki.z,0,-Ki.x,Qi.z,0,-Qi.x,Mr.z,0,-Mr.x,-Ki.y,Ki.x,0,-Qi.y,Qi.x,0,-Mr.y,Mr.x,0];return!sc(n,us,cs,fs,Fa)||(n=[1,0,0,0,1,0,0,0,1],!sc(n,us,cs,fs,Fa))?!1:(ka.crossVectors(Ki,Qi),n=[ka.x,ka.y,ka.z],sc(n,us,cs,fs,Fa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Sr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Sr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new te,new te,new te,new te,new te,new te,new te,new te],Sr=new te,rc=new Ao,us=new te,cs=new te,fs=new te,Ki=new te,Qi=new te,Mr=new te,ho=new te,Fa=new te,ka=new te,wr=new te;function sc(u,e,n,s,o){for(let l=0,d=u.length-3;l<=d;l+=3){wr.fromArray(u,l);const c=o.x*Math.abs(wr.x)+o.y*Math.abs(wr.y)+o.z*Math.abs(wr.z),m=e.dot(wr),p=n.dot(wr),g=s.dot(wr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>c)return!1}return!0}const X0=new Ao,po=new te,oc=new te;class Nc{constructor(e=new te,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):X0.setFromPoints(e).getCenter(s);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);const n=po.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(po,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add(oc)),this.expandByPoint(po.copy(e.center).sub(oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new te,ac=new te,Ua=new te,Ji=new te,lc=new te,Oa=new te,uc=new te;class j0{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(s).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.direction).multiplyScalar(n).add(this.origin),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,s,o){ac.copy(e).add(n).multiplyScalar(.5),Ua.copy(n).sub(e).normalize(),Ji.copy(this.origin).sub(ac);const l=e.distanceTo(n)*.5,d=-this.direction.dot(Ua),c=Ji.dot(this.direction),m=-Ji.dot(Ua),p=Ji.lengthSq(),g=Math.abs(1-d*d);let x,v,M,b;if(g>0)if(x=d*m-c,v=d*c-m,b=l*g,x>=0)if(v>=-b)if(v<=b){const y=1/g;x*=y,v*=y,M=x*(x+d*v+2*c)+v*(d*x+v+2*m)+p}else v=l,x=Math.max(0,-(d*v+c)),M=-x*x+v*(v+2*m)+p;else v=-l,x=Math.max(0,-(d*v+c)),M=-x*x+v*(v+2*m)+p;else v<=-b?(x=Math.max(0,-(-d*l+c)),v=x>0?-l:Math.min(Math.max(-l,-m),l),M=-x*x+v*(v+2*m)+p):v<=b?(x=0,v=Math.min(Math.max(-l,-m),l),M=v*(v+2*m)+p):(x=Math.max(0,-(d*l+c)),v=x>0?l:Math.min(Math.max(-l,-m),l),M=-x*x+v*(v+2*m)+p);else v=d>0?-l:l,x=Math.max(0,-(d*v+c)),M=-x*x+v*(v+2*m)+p;return s&&s.copy(this.direction).multiplyScalar(x).add(this.origin),o&&o.copy(Ua).multiplyScalar(v).add(ac),M}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);const s=Ei.dot(this.direction),o=Ei.dot(Ei)-s*s,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),c=s-d,m=s+d;return c<0&&m<0?null:c<0?this.at(m,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,o,l,d,c,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),g>=0?(l=(e.min.y-v.y)*g,d=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,d=(e.min.y-v.y)*g),s>d||l>o||((l>s||isNaN(s))&&(s=l),(d<o||isNaN(o))&&(o=d),x>=0?(c=(e.min.z-v.z)*x,m=(e.max.z-v.z)*x):(c=(e.max.z-v.z)*x,m=(e.min.z-v.z)*x),s>m||c>o)||((c>s||s!==s)&&(s=c),(m<o||o!==o)&&(o=m),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,s,o,l){lc.subVectors(n,e),Oa.subVectors(s,e),uc.crossVectors(lc,Oa);let d=this.direction.dot(uc),c;if(d>0){if(o)return null;c=1}else if(d<0)c=-1,d=-d;else return null;Ji.subVectors(this.origin,e);const m=c*this.direction.dot(Oa.crossVectors(Ji,Oa));if(m<0)return null;const p=c*this.direction.dot(lc.cross(Ji));if(p<0||m+p>d)return null;const g=-c*Ji.dot(uc);return g<0?null:this.at(g/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,s,o,l,d,c,m,p,g,x,v,M,b,y,_){const C=this.elements;return C[0]=e,C[4]=n,C[8]=s,C[12]=o,C[1]=l,C[5]=d,C[9]=c,C[13]=m,C[2]=p,C[6]=g,C[10]=x,C[14]=v,C[3]=M,C[7]=b,C[11]=y,C[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,s=e.elements,o=1/ds.setFromMatrixColumn(e,0).length(),l=1/ds.setFromMatrixColumn(e,1).length(),d=1/ds.setFromMatrixColumn(e,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*l,n[5]=s[5]*l,n[6]=s[6]*l,n[7]=0,n[8]=s[8]*d,n[9]=s[9]*d,n[10]=s[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,o=e.y,l=e.z,d=Math.cos(s),c=Math.sin(s),m=Math.cos(o),p=Math.sin(o),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const v=d*g,M=d*x,b=c*g,y=c*x;n[0]=m*g,n[4]=-m*x,n[8]=p,n[1]=M+b*p,n[5]=v-y*p,n[9]=-c*m,n[2]=y-v*p,n[6]=b+M*p,n[10]=d*m}else if(e.order==="YXZ"){const v=m*g,M=m*x,b=p*g,y=p*x;n[0]=v+y*c,n[4]=b*c-M,n[8]=d*p,n[1]=d*x,n[5]=d*g,n[9]=-c,n[2]=M*c-b,n[6]=y+v*c,n[10]=d*m}else if(e.order==="ZXY"){const v=m*g,M=m*x,b=p*g,y=p*x;n[0]=v-y*c,n[4]=-d*x,n[8]=b+M*c,n[1]=M+b*c,n[5]=d*g,n[9]=y-v*c,n[2]=-d*p,n[6]=c,n[10]=d*m}else if(e.order==="ZYX"){const v=d*g,M=d*x,b=c*g,y=c*x;n[0]=m*g,n[4]=b*p-M,n[8]=v*p+y,n[1]=m*x,n[5]=y*p+v,n[9]=M*p-b,n[2]=-p,n[6]=c*m,n[10]=d*m}else if(e.order==="YZX"){const v=d*m,M=d*p,b=c*m,y=c*p;n[0]=m*g,n[4]=y-v*x,n[8]=b*x+M,n[1]=x,n[5]=d*g,n[9]=-c*g,n[2]=-p*g,n[6]=M*x+b,n[10]=v-y*x}else if(e.order==="XZY"){const v=d*m,M=d*p,b=c*m,y=c*p;n[0]=m*g,n[4]=-x,n[8]=p*g,n[1]=v*x+y,n[5]=d*g,n[9]=M*x-b,n[2]=b*x-M,n[6]=c*g,n[10]=y*x+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(q0,e,Y0)}lookAt(e,n,s){const o=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),er.crossVectors(s,Cn),er.lengthSq()===0&&(Math.abs(s.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),er.crossVectors(s,Cn)),er.normalize(),Ba.crossVectors(Cn,er),o[0]=er.x,o[4]=Ba.x,o[8]=Cn.x,o[1]=er.y,o[5]=Ba.y,o[9]=Cn.y,o[2]=er.z,o[6]=Ba.z,o[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,o=n.elements,l=this.elements,d=s[0],c=s[4],m=s[8],p=s[12],g=s[1],x=s[5],v=s[9],M=s[13],b=s[2],y=s[6],_=s[10],C=s[14],D=s[3],A=s[7],I=s[11],P=s[15],G=o[0],W=o[4],E=o[8],F=o[12],Y=o[1],fe=o[5],me=o[9],q=o[13],V=o[2],ne=o[6],ce=o[10],ae=o[14],O=o[3],ee=o[7],Z=o[11],z=o[15];return l[0]=d*G+c*Y+m*V+p*O,l[4]=d*W+c*fe+m*ne+p*ee,l[8]=d*E+c*me+m*ce+p*Z,l[12]=d*F+c*q+m*ae+p*z,l[1]=g*G+x*Y+v*V+M*O,l[5]=g*W+x*fe+v*ne+M*ee,l[9]=g*E+x*me+v*ce+M*Z,l[13]=g*F+x*q+v*ae+M*z,l[2]=b*G+y*Y+_*V+C*O,l[6]=b*W+y*fe+_*ne+C*ee,l[10]=b*E+y*me+_*ce+C*Z,l[14]=b*F+y*q+_*ae+C*z,l[3]=D*G+A*Y+I*V+P*O,l[7]=D*W+A*fe+I*ne+P*ee,l[11]=D*E+A*me+I*ce+P*Z,l[15]=D*F+A*q+I*ae+P*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],o=e[8],l=e[12],d=e[1],c=e[5],m=e[9],p=e[13],g=e[2],x=e[6],v=e[10],M=e[14],b=e[3],y=e[7],_=e[11],C=e[15];return b*(+l*m*x-o*p*x-l*c*v+s*p*v+o*c*M-s*m*M)+y*(+n*m*M-n*p*v+l*d*v-o*d*M+o*p*g-l*m*g)+_*(+n*p*x-n*c*M-l*d*x+s*d*M+l*c*g-s*p*g)+C*(-o*c*g-n*m*x+n*c*v+o*d*x-s*d*v+s*m*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],l=e[3],d=e[4],c=e[5],m=e[6],p=e[7],g=e[8],x=e[9],v=e[10],M=e[11],b=e[12],y=e[13],_=e[14],C=e[15],D=x*_*p-y*v*p+y*m*M-c*_*M-x*m*C+c*v*C,A=b*v*p-g*_*p-b*m*M+d*_*M+g*m*C-d*v*C,I=g*y*p-b*x*p+b*c*M-d*y*M-g*c*C+d*x*C,P=b*x*m-g*y*m-b*c*v+d*y*v+g*c*_-d*x*_,G=n*D+s*A+o*I+l*P;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/G;return e[0]=D*W,e[1]=(y*v*l-x*_*l-y*o*M+s*_*M+x*o*C-s*v*C)*W,e[2]=(c*_*l-y*m*l+y*o*p-s*_*p-c*o*C+s*m*C)*W,e[3]=(x*m*l-c*v*l-x*o*p+s*v*p+c*o*M-s*m*M)*W,e[4]=A*W,e[5]=(g*_*l-b*v*l+b*o*M-n*_*M-g*o*C+n*v*C)*W,e[6]=(b*m*l-d*_*l-b*o*p+n*_*p+d*o*C-n*m*C)*W,e[7]=(d*v*l-g*m*l+g*o*p-n*v*p-d*o*M+n*m*M)*W,e[8]=I*W,e[9]=(b*x*l-g*y*l-b*s*M+n*y*M+g*s*C-n*x*C)*W,e[10]=(d*y*l-b*c*l+b*s*p-n*y*p-d*s*C+n*c*C)*W,e[11]=(g*c*l-d*x*l-g*s*p+n*x*p+d*s*M-n*c*M)*W,e[12]=P*W,e[13]=(g*y*o-b*x*o+b*s*v-n*y*v-g*s*_+n*x*_)*W,e[14]=(b*c*o-d*y*o-b*s*m+n*y*m+d*s*_-n*c*_)*W,e[15]=(d*x*o-g*c*o+g*s*m-n*x*m-d*s*v+n*c*v)*W,this}scale(e){const n=this.elements,s=e.x,o=e.y,l=e.z;return n[0]*=s,n[4]*=o,n[8]*=l,n[1]*=s,n[5]*=o,n[9]*=l,n[2]*=s,n[6]*=o,n[10]*=l,n[3]*=s,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(e,n,s){return this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),o=Math.sin(n),l=1-s,d=e.x,c=e.y,m=e.z,p=l*d,g=l*c;return this.set(p*d+s,p*c-o*m,p*m+o*c,0,p*c+o*m,g*c+s,g*m-o*d,0,p*m-o*c,g*m+o*d,l*m*m+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,o,l,d){return this.set(1,s,l,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,s){const o=this.elements,l=n._x,d=n._y,c=n._z,m=n._w,p=l+l,g=d+d,x=c+c,v=l*p,M=l*g,b=l*x,y=d*g,_=d*x,C=c*x,D=m*p,A=m*g,I=m*x,P=s.x,G=s.y,W=s.z;return o[0]=(1-(y+C))*P,o[1]=(M+I)*P,o[2]=(b-A)*P,o[3]=0,o[4]=(M-I)*G,o[5]=(1-(v+C))*G,o[6]=(_+D)*G,o[7]=0,o[8]=(b+A)*W,o[9]=(_-D)*W,o[10]=(1-(v+y))*W,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,s){const o=this.elements;let l=ds.set(o[0],o[1],o[2]).length();const d=ds.set(o[4],o[5],o[6]).length(),c=ds.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],Jn.copy(this);const p=1/l,g=1/d,x=1/c;return Jn.elements[0]*=p,Jn.elements[1]*=p,Jn.elements[2]*=p,Jn.elements[4]*=g,Jn.elements[5]*=g,Jn.elements[6]*=g,Jn.elements[8]*=x,Jn.elements[9]*=x,Jn.elements[10]*=x,n.setFromRotationMatrix(Jn),s.x=l,s.y=d,s.z=c,this}makePerspective(e,n,s,o,l,d){const c=this.elements,m=2*l/(n-e),p=2*l/(s-o),g=(n+e)/(n-e),x=(s+o)/(s-o),v=-(d+l)/(d-l),M=-2*d*l/(d-l);return c[0]=m,c[4]=0,c[8]=g,c[12]=0,c[1]=0,c[5]=p,c[9]=x,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,s,o,l,d){const c=this.elements,m=1/(n-e),p=1/(s-o),g=1/(d-l),x=(n+e)*m,v=(s+o)*p,M=(d+l)*g;return c[0]=2*m,c[4]=0,c[8]=0,c[12]=-x,c[1]=0,c[5]=2*p,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=-2*g,c[14]=-M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}}const ds=new te,Jn=new Zt,q0=new te(0,0,0),Y0=new te(1,1,1),er=new te,Ba=new te,Cn=new te,$h=new Zt,Zh=new bo;class nl{constructor(e=0,n=0,s=0,o=nl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,o=this._order){return this._x=e,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const o=e.elements,l=o[0],d=o[4],c=o[8],m=o[1],p=o[5],g=o[9],x=o[2],v=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(An(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-An(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(An(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-An(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(An(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-An(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return $h.makeRotationFromQuaternion(e),this.setFromRotationMatrix($h,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nl.DEFAULT_ORDER="XYZ";class Bp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $0=0;const Kh=new te,hs=new bo,Ti=new Zt,Va=new te,mo=new te,Z0=new te,K0=new bo,Qh=new te(1,0,0),Jh=new te(0,1,0),ep=new te(0,0,1),Q0={type:"added"},tp={type:"removed"};class In extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new te,n=new nl,s=new bo,o=new te(1,1,1);function l(){s.setFromEuler(n,!1)}function d(){n.setFromQuaternion(s,void 0,!1)}n._onChange(l),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Ln}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Qh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(ep,e)}translateOnAxis(e,n){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?Va.copy(e):Va.set(e,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(mo,Va,this.up):Ti.lookAt(Va,mo,this.up),this.quaternion.setFromRotationMatrix(Ti),o&&(Ti.extractRotation(o.matrixWorld),hs.setFromRotationMatrix(Ti),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Q0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(tp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const d=this.children[s].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n){let s=[];this[e]===n&&s.push(this);for(let o=0,l=this.children.length;o<l;o++){const d=this.children[o].getObjectsByProperty(e,n);d.length>0&&(s=s.concat(d))}return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,Z0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,K0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++){const l=n[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const o=this.children;for(let l=0,d=o.length;l<d;l++){const c=o[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function l(c,m){return c[m.uuid]===void 0&&(c[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const m=c.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];l(e.shapes,x)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let m=0,p=this.material.length;m<p;m++)c.push(l(e.materials,this.material[m]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const m=this.animations[c];o.animations.push(l(e.animations,m))}}if(n){const c=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),x=d(e.shapes),v=d(e.skeletons),M=d(e.animations),b=d(e.nodes);c.length>0&&(s.geometries=c),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=o,s;function d(c){const m=[];for(const p in c){const g=c[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}In.DEFAULT_UP=new te(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new te,Ci=new te,cc=new te,bi=new te,ps=new te,ms=new te,np=new te,fc=new te,dc=new te,hc=new te;class Ai{constructor(e=new te,n=new te,s=new te){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,o){o.subVectors(s,n),ei.subVectors(e,n),o.cross(ei);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,s,o,l){ei.subVectors(o,n),Ci.subVectors(s,n),cc.subVectors(e,n);const d=ei.dot(ei),c=ei.dot(Ci),m=ei.dot(cc),p=Ci.dot(Ci),g=Ci.dot(cc),x=d*p-c*c;if(x===0)return l.set(-2,-1,-1);const v=1/x,M=(p*m-c*g)*v,b=(d*g-c*m)*v;return l.set(1-M-b,b,M)}static containsPoint(e,n,s,o){return this.getBarycoord(e,n,s,o,bi),bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,n,s,o,l,d,c,m){return this.getBarycoord(e,n,s,o,bi),m.set(0,0),m.addScaledVector(l,bi.x),m.addScaledVector(d,bi.y),m.addScaledVector(c,bi.z),m}static isFrontFacing(e,n,s,o){return ei.subVectors(s,n),Ci.subVectors(e,n),ei.cross(Ci).dot(o)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,o){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,s,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ei.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ai.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,s,o,l){return Ai.getUV(e,this.a,this.b,this.c,n,s,o,l)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,o=this.b,l=this.c;let d,c;ps.subVectors(o,s),ms.subVectors(l,s),fc.subVectors(e,s);const m=ps.dot(fc),p=ms.dot(fc);if(m<=0&&p<=0)return n.copy(s);dc.subVectors(e,o);const g=ps.dot(dc),x=ms.dot(dc);if(g>=0&&x<=g)return n.copy(o);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return d=m/(m-g),n.copy(s).addScaledVector(ps,d);hc.subVectors(e,l);const M=ps.dot(hc),b=ms.dot(hc);if(b>=0&&M<=b)return n.copy(l);const y=M*p-m*b;if(y<=0&&p>=0&&b<=0)return c=p/(p-b),n.copy(s).addScaledVector(ms,c);const _=g*b-M*x;if(_<=0&&x-g>=0&&M-b>=0)return np.subVectors(l,o),c=(x-g)/(x-g+(M-b)),n.copy(o).addScaledVector(np,c);const C=1/(_+y+v);return d=y*C,c=v*C,n.copy(s).addScaledVector(ps,d).addScaledVector(ms,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let J0=0;class il extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=Es,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Pp,this.blendDst=Rp,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zu,this.stencilZFail=Zu,this.stencilZPass=Zu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const o=this[n];if(o===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(s.blending=this.blending),this.side!==rr&&(s.side=this.side),this.vertexColors&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=this.transparent),s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.stencilWrite=this.stencilWrite,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(s.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(s.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(s.wireframe=this.wireframe),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=this.flatShading),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const d=[];for(const c in l){const m=l[c];delete m.metadata,d.push(m)}return d}if(n){const l=o(e.textures),d=o(e.images);l.length>0&&(s.textures=l),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=n[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fr extends il{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new te,Ga=new pt;class fi{constructor(e,n,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=Hh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Ga.fromBufferAttribute(this,n),Ga.applyMatrix3(e),this.setXY(n,Ga.x,Ga.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ia(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ia(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ia(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ia(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),s=Tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,o){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),s=Tn(s,this.array),o=Tn(o,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,n,s,o,l){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),s=Tn(s,this.array),o=Tn(o,this.array),l=Tn(l,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Vp extends fi{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class Gp extends fi{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class Rr extends fi{constructor(e,n,s){super(new Float32Array(e),n,s)}}let e_=0;const Gn=new Zt,pc=new In,gs=new te,bn=new Ao,go=new Ao,Xt=new te;class Ur extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zp(e)?Gp:Vp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new Ln().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,s){return Gn.makeTranslation(e,n,s),this.applyMatrix4(Gn),this}scale(e,n,s){return Gn.makeScale(e,n,s),this.applyMatrix4(Gn),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const n=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Rr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const l=n[s];bn.setFromBufferAttribute(l),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new te,1/0);return}if(e){const s=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let l=0,d=n.length;l<d;l++){const c=n[l];go.setFromBufferAttribute(c),this.morphTargetsRelative?(Xt.addVectors(bn.min,go.min),bn.expandByPoint(Xt),Xt.addVectors(bn.max,go.max),bn.expandByPoint(Xt)):(bn.expandByPoint(go.min),bn.expandByPoint(go.max))}bn.getCenter(s);let o=0;for(let l=0,d=e.count;l<d;l++)Xt.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(Xt));if(n)for(let l=0,d=n.length;l<d;l++){const c=n[l],m=this.morphTargetsRelative;for(let p=0,g=c.count;p<g;p++)Xt.fromBufferAttribute(c,p),m&&(gs.fromBufferAttribute(e,p),Xt.add(gs)),o=Math.max(o,s.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,o=n.position.array,l=n.normal.array,d=n.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*c),4));const m=this.getAttribute("tangent").array,p=[],g=[];for(let Y=0;Y<c;Y++)p[Y]=new te,g[Y]=new te;const x=new te,v=new te,M=new te,b=new pt,y=new pt,_=new pt,C=new te,D=new te;function A(Y,fe,me){x.fromArray(o,Y*3),v.fromArray(o,fe*3),M.fromArray(o,me*3),b.fromArray(d,Y*2),y.fromArray(d,fe*2),_.fromArray(d,me*2),v.sub(x),M.sub(x),y.sub(b),_.sub(b);const q=1/(y.x*_.y-_.x*y.y);isFinite(q)&&(C.copy(v).multiplyScalar(_.y).addScaledVector(M,-y.y).multiplyScalar(q),D.copy(M).multiplyScalar(y.x).addScaledVector(v,-_.x).multiplyScalar(q),p[Y].add(C),p[fe].add(C),p[me].add(C),g[Y].add(D),g[fe].add(D),g[me].add(D))}let I=this.groups;I.length===0&&(I=[{start:0,count:s.length}]);for(let Y=0,fe=I.length;Y<fe;++Y){const me=I[Y],q=me.start,V=me.count;for(let ne=q,ce=q+V;ne<ce;ne+=3)A(s[ne+0],s[ne+1],s[ne+2])}const P=new te,G=new te,W=new te,E=new te;function F(Y){W.fromArray(l,Y*3),E.copy(W);const fe=p[Y];P.copy(fe),P.sub(W.multiplyScalar(W.dot(fe))).normalize(),G.crossVectors(E,fe);const q=G.dot(g[Y])<0?-1:1;m[Y*4]=P.x,m[Y*4+1]=P.y,m[Y*4+2]=P.z,m[Y*4+3]=q}for(let Y=0,fe=I.length;Y<fe;++Y){const me=I[Y],q=me.start,V=me.count;for(let ne=q,ce=q+V;ne<ce;ne+=3)F(s[ne+0]),F(s[ne+1]),F(s[ne+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const o=new te,l=new te,d=new te,c=new te,m=new te,p=new te,g=new te,x=new te;if(e)for(let v=0,M=e.count;v<M;v+=3){const b=e.getX(v+0),y=e.getX(v+1),_=e.getX(v+2);o.fromBufferAttribute(n,b),l.fromBufferAttribute(n,y),d.fromBufferAttribute(n,_),g.subVectors(d,l),x.subVectors(o,l),g.cross(x),c.fromBufferAttribute(s,b),m.fromBufferAttribute(s,y),p.fromBufferAttribute(s,_),c.add(g),m.add(g),p.add(g),s.setXYZ(b,c.x,c.y,c.z),s.setXYZ(y,m.x,m.y,m.z),s.setXYZ(_,p.x,p.y,p.z)}else for(let v=0,M=n.count;v<M;v+=3)o.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),d.fromBufferAttribute(n,v+2),g.subVectors(d,l),x.subVectors(o,l),g.cross(x),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(c,m){const p=c.array,g=c.itemSize,x=c.normalized,v=new p.constructor(m.length*g);let M=0,b=0;for(let y=0,_=m.length;y<_;y++){c.isInterleavedBufferAttribute?M=m[y]*c.data.stride+c.offset:M=m[y]*g;for(let C=0;C<g;C++)v[b++]=p[M++]}return new fi(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ur,s=this.index.array,o=this.attributes;for(const c in o){const m=o[c],p=e(m,s);n.setAttribute(c,p)}const l=this.morphAttributes;for(const c in l){const m=[],p=l[c];for(let g=0,x=p.length;g<x;g++){const v=p[g],M=e(v,s);m.push(M)}n.morphAttributes[c]=m}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let c=0,m=d.length;c<m;c++){const p=d[c];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const M=p[x];g.push(M.toJSON(e.data))}g.length>0&&(o[m]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(n));const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const l=e.morphAttributes;for(const p in l){const g=[],x=l[p];for(let v=0,M=x.length;v<M;v++)g.push(x[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ip=new Zt,_s=new j0,mc=new Nc,_o=new te,vo=new te,xo=new te,gc=new te,Wa=new te,Ha=new pt,Xa=new pt,ja=new pt,_c=new te,qa=new te;class Pn extends In{constructor(e=new Ur,n=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,n){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,d=s.morphTargetsRelative;n.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){Wa.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const g=c[m],x=l[m];g!==0&&(gc.fromBufferAttribute(x,e),d?Wa.addScaledVector(gc,g):Wa.addScaledVector(gc.sub(n),g))}n.add(Wa)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const s=this.geometry,o=this.material,l=this.matrixWorld;if(o===void 0||(s.boundingSphere===null&&s.computeBoundingSphere(),mc.copy(s.boundingSphere),mc.applyMatrix4(l),e.ray.intersectsSphere(mc)===!1)||(ip.copy(l).invert(),_s.copy(e.ray).applyMatrix4(ip),s.boundingBox!==null&&_s.intersectsBox(s.boundingBox)===!1))return;let d;const c=s.index,m=s.attributes.position,p=s.attributes.uv,g=s.attributes.uv2,x=s.groups,v=s.drawRange;if(c!==null)if(Array.isArray(o))for(let M=0,b=x.length;M<b;M++){const y=x[M],_=o[y.materialIndex],C=Math.max(y.start,v.start),D=Math.min(c.count,Math.min(y.start+y.count,v.start+v.count));for(let A=C,I=D;A<I;A+=3){const P=c.getX(A),G=c.getX(A+1),W=c.getX(A+2);d=Ya(this,_,e,_s,p,g,P,G,W),d&&(d.faceIndex=Math.floor(A/3),d.face.materialIndex=y.materialIndex,n.push(d))}}else{const M=Math.max(0,v.start),b=Math.min(c.count,v.start+v.count);for(let y=M,_=b;y<_;y+=3){const C=c.getX(y),D=c.getX(y+1),A=c.getX(y+2);d=Ya(this,o,e,_s,p,g,C,D,A),d&&(d.faceIndex=Math.floor(y/3),n.push(d))}}else if(m!==void 0)if(Array.isArray(o))for(let M=0,b=x.length;M<b;M++){const y=x[M],_=o[y.materialIndex],C=Math.max(y.start,v.start),D=Math.min(m.count,Math.min(y.start+y.count,v.start+v.count));for(let A=C,I=D;A<I;A+=3){const P=A,G=A+1,W=A+2;d=Ya(this,_,e,_s,p,g,P,G,W),d&&(d.faceIndex=Math.floor(A/3),d.face.materialIndex=y.materialIndex,n.push(d))}}else{const M=Math.max(0,v.start),b=Math.min(m.count,v.start+v.count);for(let y=M,_=b;y<_;y+=3){const C=y,D=y+1,A=y+2;d=Ya(this,o,e,_s,p,g,C,D,A),d&&(d.faceIndex=Math.floor(y/3),n.push(d))}}}}function t_(u,e,n,s,o,l,d,c){let m;if(e.side===Rn?m=s.intersectTriangle(d,l,o,!0,c):m=s.intersectTriangle(o,l,d,e.side===rr,c),m===null)return null;qa.copy(c),qa.applyMatrix4(u.matrixWorld);const p=n.ray.origin.distanceTo(qa);return p<n.near||p>n.far?null:{distance:p,point:qa.clone(),object:u}}function Ya(u,e,n,s,o,l,d,c,m){u.getVertexPosition(d,_o),u.getVertexPosition(c,vo),u.getVertexPosition(m,xo);const p=t_(u,e,n,s,_o,vo,xo,_c);if(p){o&&(Ha.fromBufferAttribute(o,d),Xa.fromBufferAttribute(o,c),ja.fromBufferAttribute(o,m),p.uv=Ai.getUV(_c,_o,vo,xo,Ha,Xa,ja,new pt)),l&&(Ha.fromBufferAttribute(l,d),Xa.fromBufferAttribute(l,c),ja.fromBufferAttribute(l,m),p.uv2=Ai.getUV(_c,_o,vo,xo,Ha,Xa,ja,new pt));const g={a:d,b:c,c:m,normal:new te,materialIndex:0};Ai.getNormal(_o,vo,xo,g.normal),p.face=g}return p}class di extends Ur{constructor(e=1,n=1,s=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:o,heightSegments:l,depthSegments:d};const c=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const m=[],p=[],g=[],x=[];let v=0,M=0;b("z","y","x",-1,-1,s,n,e,d,l,0),b("z","y","x",1,-1,s,n,-e,d,l,1),b("x","z","y",1,1,e,s,n,o,d,2),b("x","z","y",1,-1,e,s,-n,o,d,3),b("x","y","z",1,-1,e,n,s,o,l,4),b("x","y","z",-1,-1,e,n,-s,o,l,5),this.setIndex(m),this.setAttribute("position",new Rr(p,3)),this.setAttribute("normal",new Rr(g,3)),this.setAttribute("uv",new Rr(x,2));function b(y,_,C,D,A,I,P,G,W,E,F){const Y=I/W,fe=P/E,me=I/2,q=P/2,V=G/2,ne=W+1,ce=E+1;let ae=0,O=0;const ee=new te;for(let Z=0;Z<ce;Z++){const z=Z*fe-q;for(let N=0;N<ne;N++){const J=N*Y-me;ee[y]=J*D,ee[_]=z*A,ee[C]=V,p.push(ee.x,ee.y,ee.z),ee[y]=0,ee[_]=0,ee[C]=G>0?1:-1,g.push(ee.x,ee.y,ee.z),x.push(N/W),x.push(1-Z/E),ae+=1}}for(let Z=0;Z<E;Z++)for(let z=0;z<W;z++){const N=v+z+ne*Z,J=v+z+ne*(Z+1),ue=v+(z+1)+ne*(Z+1),de=v+(z+1)+ne*Z;m.push(N,J,de),m.push(J,ue,de),O+=6}c.addGroup(M,O,F),M+=O,v+=ae}}static fromJSON(e){return new di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(u){const e={};for(const n in u){e[n]={};for(const s in u[n]){const o=u[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?e[n][s]=o.clone():Array.isArray(o)?e[n][s]=o.slice():e[n][s]=o}}return e}function hn(u){const e={};for(let n=0;n<u.length;n++){const s=Ls(u[n]);for(const o in s)e[o]=s[o]}return e}function n_(u){const e=[];for(let n=0;n<u.length;n++)e.push(u[n].clone());return e}function Wp(u){return u.getRenderTarget()===null&&u.outputEncoding===_t?li:To}const i_={clone:Ls,merge:hn};var r_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends il{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r_,this.fragmentShader=s_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=n_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class Hp extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Hn extends Hp{constructor(e=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jh*2*Math.atan(Math.tan(Ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,s,o,l,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ku*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;l+=d.offsetX*o/m,n-=d.offsetY*s/p,o*=d.width/m,s*=d.height/p}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-s,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vs=-90,xs=1;class o_ extends In{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s;const o=new Hn(vs,xs,e,n);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(1,0,0),this.add(o);const l=new Hn(vs,xs,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(-1,0,0),this.add(l);const d=new Hn(vs,xs,e,n);d.layers=this.layers,d.up.set(0,0,-1),d.lookAt(0,1,0),this.add(d);const c=new Hn(vs,xs,e,n);c.layers=this.layers,c.up.set(0,0,1),c.lookAt(0,-1,0),this.add(c);const m=new Hn(vs,xs,e,n);m.layers=this.layers,m.up.set(0,1,0),m.lookAt(0,0,1),this.add(m);const p=new Hn(vs,xs,e,n);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,-1),this.add(p)}update(e,n){this.parent===null&&this.updateMatrixWorld();const s=this.renderTarget,[o,l,d,c,m,p]=this.children,g=e.getRenderTarget(),x=e.toneMapping,v=e.xr.enabled;e.toneMapping=Li,e.xr.enabled=!1;const M=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0),e.render(n,o),e.setRenderTarget(s,1),e.render(n,l),e.setRenderTarget(s,2),e.render(n,d),e.setRenderTarget(s,3),e.render(n,c),e.setRenderTarget(s,4),e.render(n,m),s.texture.generateMipmaps=M,e.setRenderTarget(s,5),e.render(n,p),e.setRenderTarget(g),e.toneMapping=x,e.xr.enabled=v,s.texture.needsPMREMUpdate=!0}}class Xp extends Dn{constructor(e,n,s,o,l,d,c,m,p,g){e=e!==void 0?e:[],n=n!==void 0?n:Cs,super(e,n,s,o,l,d,c,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class a_ extends zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new Xp(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new di(5,5,5),l=new kr({name:"CubemapFromEquirect",uniforms:Ls(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Rn,blending:ir});l.uniforms.tEquirect.value=n;const d=new Pn(o,l),c=n.minFilter;return n.minFilter===wo&&(n.minFilter=Wn),new o_(1,10,this).update(e,d),n.minFilter=c,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,s,o){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,s,o);e.setRenderTarget(l)}}const vc=new te,l_=new te,u_=new Ln;class Er{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,o){return this.normal.set(e,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const o=vc.subVectors(s,n).cross(l_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const s=e.delta(vc),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(s).multiplyScalar(l).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||u_.getNormalMatrix(e),o=this.coplanarPoint(vc).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Nc,$a=new te;class jp{constructor(e=new Er,n=new Er,s=new Er,o=new Er,l=new Er,d=new Er){this.planes=[e,n,s,o,l,d]}set(e,n,s,o,l,d){const c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(s),c[3].copy(o),c[4].copy(l),c[5].copy(d),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e){const n=this.planes,s=e.elements,o=s[0],l=s[1],d=s[2],c=s[3],m=s[4],p=s[5],g=s[6],x=s[7],v=s[8],M=s[9],b=s[10],y=s[11],_=s[12],C=s[13],D=s[14],A=s[15];return n[0].setComponents(c-o,x-m,y-v,A-_).normalize(),n[1].setComponents(c+o,x+m,y+v,A+_).normalize(),n[2].setComponents(c+l,x+p,y+M,A+C).normalize(),n[3].setComponents(c-l,x-p,y-M,A-C).normalize(),n[4].setComponents(c-d,x-g,y-b,A-D).normalize(),n[5].setComponents(c+d,x+g,y+b,A+D).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSprite(e){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const n=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if($a.x=o.normal.x>0?e.max.x:e.min.x,$a.y=o.normal.y>0?e.max.y:e.min.y,$a.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qp(){let u=null,e=!1,n=null,s=null;function o(l,d){n(l,d),s=u.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(s=u.requestAnimationFrame(o),e=!0)},stop:function(){u.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){u=l}}}function c_(u,e){const n=e.isWebGL2,s=new WeakMap;function o(p,g){const x=p.array,v=p.usage,M=u.createBuffer();u.bindBuffer(g,M),u.bufferData(g,x,v),p.onUploadCallback();let b;if(x instanceof Float32Array)b=5126;else if(x instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(n)b=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=5123;else if(x instanceof Int16Array)b=5122;else if(x instanceof Uint32Array)b=5125;else if(x instanceof Int32Array)b=5124;else if(x instanceof Int8Array)b=5120;else if(x instanceof Uint8Array)b=5121;else if(x instanceof Uint8ClampedArray)b=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:M,type:b,bytesPerElement:x.BYTES_PER_ELEMENT,version:p.version}}function l(p,g,x){const v=g.array,M=g.updateRange;u.bindBuffer(x,p),M.count===-1?u.bufferSubData(x,0,v):(n?u.bufferSubData(x,M.offset*v.BYTES_PER_ELEMENT,v,M.offset,M.count):u.bufferSubData(x,M.offset*v.BYTES_PER_ELEMENT,v.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),s.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=s.get(p);g&&(u.deleteBuffer(g.buffer),s.delete(p))}function m(p,g){if(p.isGLBufferAttribute){const v=s.get(p);(!v||v.version<p.version)&&s.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const x=s.get(p);x===void 0?s.set(p,o(p,g)):x.version<p.version&&(l(x.buffer,p,g),x.version=p.version)}return{get:d,remove:c,update:m}}class zc extends Ur{constructor(e=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:o};const l=e/2,d=n/2,c=Math.floor(s),m=Math.floor(o),p=c+1,g=m+1,x=e/c,v=n/m,M=[],b=[],y=[],_=[];for(let C=0;C<g;C++){const D=C*v-d;for(let A=0;A<p;A++){const I=A*x-l;b.push(I,-D,0),y.push(0,0,1),_.push(A/c),_.push(1-C/m)}}for(let C=0;C<m;C++)for(let D=0;D<c;D++){const A=D+p*C,I=D+p*(C+1),P=D+1+p*(C+1),G=D+1+p*C;M.push(A,I,G),M.push(I,P,G)}this.setIndex(M),this.setAttribute("position",new Rr(b,3)),this.setAttribute("normal",new Rr(y,3)),this.setAttribute("uv",new Rr(_,2))}static fromJSON(e){return new zc(e.width,e.height,e.widthSegments,e.heightSegments)}}var f_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,d_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,p_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,g_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,__="vec3 transformed = vec3( position );",v_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,y_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,P_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,R_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,D_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k_="gl_FragColor = linearToOutputTexel( gl_FragColor );",U_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,B_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Z_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ev=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,tv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ov=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,av=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_v=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,wv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ev=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Tv=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Pv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Rv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Fv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gv=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$v=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ex=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,tx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,nx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ix=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,rx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,sx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ox=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ax=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_x=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ax=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Px=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ox=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Vx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ke={alphamap_fragment:f_,alphamap_pars_fragment:d_,alphatest_fragment:h_,alphatest_pars_fragment:p_,aomap_fragment:m_,aomap_pars_fragment:g_,begin_vertex:__,beginnormal_vertex:v_,bsdfs:x_,iridescence_fragment:y_,bumpmap_pars_fragment:S_,clipping_planes_fragment:M_,clipping_planes_pars_fragment:w_,clipping_planes_pars_vertex:E_,clipping_planes_vertex:T_,color_fragment:C_,color_pars_fragment:b_,color_pars_vertex:A_,color_vertex:L_,common:P_,cube_uv_reflection_fragment:R_,defaultnormal_vertex:D_,displacementmap_pars_vertex:I_,displacementmap_vertex:N_,emissivemap_fragment:z_,emissivemap_pars_fragment:F_,encodings_fragment:k_,encodings_pars_fragment:U_,envmap_fragment:O_,envmap_common_pars_fragment:B_,envmap_pars_fragment:V_,envmap_pars_vertex:G_,envmap_physical_pars_fragment:ev,envmap_vertex:W_,fog_vertex:H_,fog_pars_vertex:X_,fog_fragment:j_,fog_pars_fragment:q_,gradientmap_pars_fragment:Y_,lightmap_fragment:$_,lightmap_pars_fragment:Z_,lights_lambert_fragment:K_,lights_lambert_pars_fragment:Q_,lights_pars_begin:J_,lights_toon_fragment:tv,lights_toon_pars_fragment:nv,lights_phong_fragment:iv,lights_phong_pars_fragment:rv,lights_physical_fragment:sv,lights_physical_pars_fragment:ov,lights_fragment_begin:av,lights_fragment_maps:lv,lights_fragment_end:uv,logdepthbuf_fragment:cv,logdepthbuf_pars_fragment:fv,logdepthbuf_pars_vertex:dv,logdepthbuf_vertex:hv,map_fragment:pv,map_pars_fragment:mv,map_particle_fragment:gv,map_particle_pars_fragment:_v,metalnessmap_fragment:vv,metalnessmap_pars_fragment:xv,morphcolor_vertex:yv,morphnormal_vertex:Sv,morphtarget_pars_vertex:Mv,morphtarget_vertex:wv,normal_fragment_begin:Ev,normal_fragment_maps:Tv,normal_pars_fragment:Cv,normal_pars_vertex:bv,normal_vertex:Av,normalmap_pars_fragment:Lv,clearcoat_normal_fragment_begin:Pv,clearcoat_normal_fragment_maps:Rv,clearcoat_pars_fragment:Dv,iridescence_pars_fragment:Iv,output_fragment:Nv,packing:zv,premultiplied_alpha_fragment:Fv,project_vertex:kv,dithering_fragment:Uv,dithering_pars_fragment:Ov,roughnessmap_fragment:Bv,roughnessmap_pars_fragment:Vv,shadowmap_pars_fragment:Gv,shadowmap_pars_vertex:Wv,shadowmap_vertex:Hv,shadowmask_pars_fragment:Xv,skinbase_vertex:jv,skinning_pars_vertex:qv,skinning_vertex:Yv,skinnormal_vertex:$v,specularmap_fragment:Zv,specularmap_pars_fragment:Kv,tonemapping_fragment:Qv,tonemapping_pars_fragment:Jv,transmission_fragment:ex,transmission_pars_fragment:tx,uv_pars_fragment:nx,uv_pars_vertex:ix,uv_vertex:rx,uv2_pars_fragment:sx,uv2_pars_vertex:ox,uv2_vertex:ax,worldpos_vertex:lx,background_vert:ux,background_frag:cx,backgroundCube_vert:fx,backgroundCube_frag:dx,cube_vert:hx,cube_frag:px,depth_vert:mx,depth_frag:gx,distanceRGBA_vert:_x,distanceRGBA_frag:vx,equirect_vert:xx,equirect_frag:yx,linedashed_vert:Sx,linedashed_frag:Mx,meshbasic_vert:wx,meshbasic_frag:Ex,meshlambert_vert:Tx,meshlambert_frag:Cx,meshmatcap_vert:bx,meshmatcap_frag:Ax,meshnormal_vert:Lx,meshnormal_frag:Px,meshphong_vert:Rx,meshphong_frag:Dx,meshphysical_vert:Ix,meshphysical_frag:Nx,meshtoon_vert:zx,meshtoon_frag:Fx,points_vert:kx,points_frag:Ux,shadow_vert:Ox,shadow_frag:Bx,sprite_vert:Vx,sprite_frag:Gx},Ee={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ln},uv2Transform:{value:new Ln},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ln}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ln}}},ui={basic:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:hn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:hn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:hn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:hn([Ee.points,Ee.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:hn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:hn([Ee.common,Ee.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:hn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:hn([Ee.sprite,Ee.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ln},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:hn([Ee.common,Ee.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:hn([Ee.lights,Ee.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ui.physical={uniforms:hn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new pt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Za={r:0,b:0,g:0};function Wx(u,e,n,s,o,l,d){const c=new Mt(0);let m=l===!0?0:1,p,g,x=null,v=0,M=null;function b(_,C){let D=!1,A=C.isScene===!0?C.background:null;A&&A.isTexture&&(A=(C.backgroundBlurriness>0?n:e).get(A));const I=u.xr,P=I.getSession&&I.getSession();P&&P.environmentBlendMode==="additive"&&(A=null),A===null?y(c,m):A&&A.isColor&&(y(A,1),D=!0),(u.autoClear||D)&&u.clear(u.autoClearColor,u.autoClearDepth,u.autoClearStencil),A&&(A.isCubeTexture||A.mapping===tl)?(g===void 0&&(g=new Pn(new di(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:Ls(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,W,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),g.material.uniforms.envMap.value=A,g.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.toneMapped=A.encoding!==_t,(x!==A||v!==A.version||M!==u.toneMapping)&&(g.material.needsUpdate=!0,x=A,v=A.version,M=u.toneMapping),g.layers.enableAll(),_.unshift(g,g.geometry,g.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new Pn(new zc(2,2),new kr({name:"BackgroundMaterial",uniforms:Ls(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=A.encoding!==_t,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(x!==A||v!==A.version||M!==u.toneMapping)&&(p.material.needsUpdate=!0,x=A,v=A.version,M=u.toneMapping),p.layers.enableAll(),_.unshift(p,p.geometry,p.material,0,0,null))}function y(_,C){_.getRGB(Za,Wp(u)),s.buffers.color.setClear(Za.r,Za.g,Za.b,C,d)}return{getClearColor:function(){return c},setClearColor:function(_,C=1){c.set(_),m=C,y(c,m)},getClearAlpha:function(){return m},setClearAlpha:function(_){m=_,y(c,m)},render:b}}function Hx(u,e,n,s){const o=u.getParameter(34921),l=s.isWebGL2?null:e.get("OES_vertex_array_object"),d=s.isWebGL2||l!==null,c={},m=_(null);let p=m,g=!1;function x(V,ne,ce,ae,O){let ee=!1;if(d){const Z=y(ae,ce,ne);p!==Z&&(p=Z,M(p.object)),ee=C(V,ae,ce,O),ee&&D(V,ae,ce,O)}else{const Z=ne.wireframe===!0;(p.geometry!==ae.id||p.program!==ce.id||p.wireframe!==Z)&&(p.geometry=ae.id,p.program=ce.id,p.wireframe=Z,ee=!0)}O!==null&&n.update(O,34963),(ee||g)&&(g=!1,E(V,ne,ce,ae),O!==null&&u.bindBuffer(34963,n.get(O).buffer))}function v(){return s.isWebGL2?u.createVertexArray():l.createVertexArrayOES()}function M(V){return s.isWebGL2?u.bindVertexArray(V):l.bindVertexArrayOES(V)}function b(V){return s.isWebGL2?u.deleteVertexArray(V):l.deleteVertexArrayOES(V)}function y(V,ne,ce){const ae=ce.wireframe===!0;let O=c[V.id];O===void 0&&(O={},c[V.id]=O);let ee=O[ne.id];ee===void 0&&(ee={},O[ne.id]=ee);let Z=ee[ae];return Z===void 0&&(Z=_(v()),ee[ae]=Z),Z}function _(V){const ne=[],ce=[],ae=[];for(let O=0;O<o;O++)ne[O]=0,ce[O]=0,ae[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:ce,attributeDivisors:ae,object:V,attributes:{},index:null}}function C(V,ne,ce,ae){const O=p.attributes,ee=ne.attributes;let Z=0;const z=ce.getAttributes();for(const N in z)if(z[N].location>=0){const ue=O[N];let de=ee[N];if(de===void 0&&(N==="instanceMatrix"&&V.instanceMatrix&&(de=V.instanceMatrix),N==="instanceColor"&&V.instanceColor&&(de=V.instanceColor)),ue===void 0||ue.attribute!==de||de&&ue.data!==de.data)return!0;Z++}return p.attributesNum!==Z||p.index!==ae}function D(V,ne,ce,ae){const O={},ee=ne.attributes;let Z=0;const z=ce.getAttributes();for(const N in z)if(z[N].location>=0){let ue=ee[N];ue===void 0&&(N==="instanceMatrix"&&V.instanceMatrix&&(ue=V.instanceMatrix),N==="instanceColor"&&V.instanceColor&&(ue=V.instanceColor));const de={};de.attribute=ue,ue&&ue.data&&(de.data=ue.data),O[N]=de,Z++}p.attributes=O,p.attributesNum=Z,p.index=ae}function A(){const V=p.newAttributes;for(let ne=0,ce=V.length;ne<ce;ne++)V[ne]=0}function I(V){P(V,0)}function P(V,ne){const ce=p.newAttributes,ae=p.enabledAttributes,O=p.attributeDivisors;ce[V]=1,ae[V]===0&&(u.enableVertexAttribArray(V),ae[V]=1),O[V]!==ne&&((s.isWebGL2?u:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,ne),O[V]=ne)}function G(){const V=p.newAttributes,ne=p.enabledAttributes;for(let ce=0,ae=ne.length;ce<ae;ce++)ne[ce]!==V[ce]&&(u.disableVertexAttribArray(ce),ne[ce]=0)}function W(V,ne,ce,ae,O,ee){s.isWebGL2===!0&&(ce===5124||ce===5125)?u.vertexAttribIPointer(V,ne,ce,O,ee):u.vertexAttribPointer(V,ne,ce,ae,O,ee)}function E(V,ne,ce,ae){if(s.isWebGL2===!1&&(V.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const O=ae.attributes,ee=ce.getAttributes(),Z=ne.defaultAttributeValues;for(const z in ee){const N=ee[z];if(N.location>=0){let J=O[z];if(J===void 0&&(z==="instanceMatrix"&&V.instanceMatrix&&(J=V.instanceMatrix),z==="instanceColor"&&V.instanceColor&&(J=V.instanceColor)),J!==void 0){const ue=J.normalized,de=J.itemSize,H=n.get(J);if(H===void 0)continue;const Le=H.buffer,ye=H.type,Me=H.bytesPerElement;if(J.isInterleavedBufferAttribute){const we=J.data,lt=we.stride,qe=J.offset;if(we.isInstancedInterleavedBuffer){for(let Ge=0;Ge<N.locationSize;Ge++)P(N.location+Ge,we.meshPerAttribute);V.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Ge=0;Ge<N.locationSize;Ge++)I(N.location+Ge);u.bindBuffer(34962,Le);for(let Ge=0;Ge<N.locationSize;Ge++)W(N.location+Ge,de/N.locationSize,ye,ue,lt*Me,(qe+de/N.locationSize*Ge)*Me)}else{if(J.isInstancedBufferAttribute){for(let we=0;we<N.locationSize;we++)P(N.location+we,J.meshPerAttribute);V.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let we=0;we<N.locationSize;we++)I(N.location+we);u.bindBuffer(34962,Le);for(let we=0;we<N.locationSize;we++)W(N.location+we,de/N.locationSize,ye,ue,de*Me,de/N.locationSize*we*Me)}}else if(Z!==void 0){const ue=Z[z];if(ue!==void 0)switch(ue.length){case 2:u.vertexAttrib2fv(N.location,ue);break;case 3:u.vertexAttrib3fv(N.location,ue);break;case 4:u.vertexAttrib4fv(N.location,ue);break;default:u.vertexAttrib1fv(N.location,ue)}}}}G()}function F(){me();for(const V in c){const ne=c[V];for(const ce in ne){const ae=ne[ce];for(const O in ae)b(ae[O].object),delete ae[O];delete ne[ce]}delete c[V]}}function Y(V){if(c[V.id]===void 0)return;const ne=c[V.id];for(const ce in ne){const ae=ne[ce];for(const O in ae)b(ae[O].object),delete ae[O];delete ne[ce]}delete c[V.id]}function fe(V){for(const ne in c){const ce=c[ne];if(ce[V.id]===void 0)continue;const ae=ce[V.id];for(const O in ae)b(ae[O].object),delete ae[O];delete ce[V.id]}}function me(){q(),g=!0,p!==m&&(p=m,M(p.object))}function q(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:x,reset:me,resetDefaultState:q,dispose:F,releaseStatesOfGeometry:Y,releaseStatesOfProgram:fe,initAttributes:A,enableAttribute:I,disableUnusedAttributes:G}}function Xx(u,e,n,s){const o=s.isWebGL2;let l;function d(p){l=p}function c(p,g){u.drawArrays(l,p,g),n.update(g,l,1)}function m(p,g,x){if(x===0)return;let v,M;if(o)v=u,M="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[M](l,p,g,x),n.update(g,l,x)}this.setMode=d,this.render=c,this.renderInstances=m}function jx(u,e,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");s=u.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(W){if(W==="highp"){if(u.getShaderPrecisionFormat(35633,36338).precision>0&&u.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";W="mediump"}return W==="mediump"&&u.getShaderPrecisionFormat(35633,36337).precision>0&&u.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&u instanceof WebGL2RenderingContext;let c=n.precision!==void 0?n.precision:"highp";const m=l(c);m!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",m,"instead."),c=m);const p=d||e.has("WEBGL_draw_buffers"),g=n.logarithmicDepthBuffer===!0,x=u.getParameter(34930),v=u.getParameter(35660),M=u.getParameter(3379),b=u.getParameter(34076),y=u.getParameter(34921),_=u.getParameter(36347),C=u.getParameter(36348),D=u.getParameter(36349),A=v>0,I=d||e.has("OES_texture_float"),P=A&&I,G=d?u.getParameter(36183):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:o,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:g,maxTextures:x,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:_,maxVaryings:C,maxFragmentUniforms:D,vertexTextures:A,floatFragmentTextures:I,floatVertexTextures:P,maxSamples:G}}function qx(u){const e=this;let n=null,s=0,o=!1,l=!1;const d=new Er,c=new Ln,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const M=x.length!==0||v||s!==0||o;return o=v,s=x.length,M},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,v){n=g(x,v,0)},this.setState=function(x,v,M){const b=x.clippingPlanes,y=x.clipIntersection,_=x.clipShadows,C=u.get(x);if(!o||b===null||b.length===0||l&&!_)l?g(null):p();else{const D=l?0:s,A=D*4;let I=C.clippingState||null;m.value=I,I=g(b,v,A,M);for(let P=0;P!==A;++P)I[P]=n[P];C.clippingState=I,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,v,M,b){const y=x!==null?x.length:0;let _=null;if(y!==0){if(_=m.value,b!==!0||_===null){const C=M+y*4,D=v.matrixWorldInverse;c.getNormalMatrix(D),(_===null||_.length<C)&&(_=new Float32Array(C));for(let A=0,I=M;A!==y;++A,I+=4)d.copy(x[A]).applyMatrix4(D,c),d.normal.toArray(_,I),_[I+3]=d.constant}m.value=_,m.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function Yx(u){let e=new WeakMap;function n(d,c){return c===Tc?d.mapping=Cs:c===Cc&&(d.mapping=bs),d}function s(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const c=d.mapping;if(c===Tc||c===Cc)if(e.has(d)){const m=e.get(d).texture;return n(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new a_(m.height/2);return p.fromEquirectangularTexture(u,d),e.set(d,p),d.addEventListener("dispose",o),n(p.texture,d.mapping)}else return null}}return d}function o(d){const c=d.target;c.removeEventListener("dispose",o);const m=e.get(c);m!==void 0&&(e.delete(c),m.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class $x extends Hp{constructor(e=-1,n=1,s=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,d=s+e,c=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,d=l+p*this.view.width,c-=g*this.view.offsetY,m=c-g*this.view.height}this.projectionMatrix.makeOrthographic(l,d,c,m,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ws=4,rp=[.125,.215,.35,.446,.526,.582],Cr=20,xc=new $x,sp=new Mt;let yc=null;const Tr=(1+Math.sqrt(5))/2,Ss=1/Tr,op=[new te(1,1,1),new te(-1,1,1),new te(1,1,-1),new te(-1,1,-1),new te(0,Tr,Ss),new te(0,Tr,-Ss),new te(Ss,0,Tr),new te(-Ss,0,Tr),new te(Tr,Ss,0),new te(-Tr,Ss,0)];class ap{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,s=.1,o=100){yc=this._renderer.getRenderTarget(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yc),e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Cs||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yc=this._renderer.getRenderTarget();const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Eo,format:ni,encoding:Nr,depthBuffer:!1},o=lp(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(e,n,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zx(l)),this._blurMaterial=Kx(l,e,n)}return o}_compileMaterial(e){const n=new Pn(this._lodPlanes[0],e);this._renderer.compile(n,xc)}_sceneToCubeUV(e,n,s,o){const c=new Hn(90,1,n,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,v=g.toneMapping;g.getClearColor(sp),g.toneMapping=Li,g.autoClear=!1;const M=new Fr({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),b=new Pn(new di,M);let y=!1;const _=e.background;_?_.isColor&&(M.color.copy(_),e.background=null,y=!0):(M.color.copy(sp),y=!0);for(let C=0;C<6;C++){const D=C%3;D===0?(c.up.set(0,m[C],0),c.lookAt(p[C],0,0)):D===1?(c.up.set(0,0,m[C]),c.lookAt(0,p[C],0)):(c.up.set(0,m[C],0),c.lookAt(0,0,p[C]));const A=this._cubeSize;Ka(o,D*A,C>2?A:0,A,A),g.setRenderTarget(o),y&&g.render(b,c),g.render(e,c)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=v,g.autoClear=x,e.background=_}_textureToCubeUV(e,n){const s=this._renderer,o=e.mapping===Cs||e.mapping===bs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=up());const l=o?this._cubemapMaterial:this._equirectMaterial,d=new Pn(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const m=this._cubeSize;Ka(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(d,xc)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),d=op[(o-1)%op.length];this._blur(e,o-1,o,l,d)}n.autoClear=s}_blur(e,n,s,o,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,s,o,"latitudinal",l),this._halfBlur(d,e,s,s,o,"longitudinal",l)}_halfBlur(e,n,s,o,l,d,c){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Pn(this._lodPlanes[o],p),v=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Cr-1),y=l/b,_=isFinite(l)?1+Math.floor(g*y):Cr;_>Cr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Cr}`);const C=[];let D=0;for(let W=0;W<Cr;++W){const E=W/y,F=Math.exp(-E*E/2);C.push(F),W===0?D+=F:W<_&&(D+=2*F)}for(let W=0;W<C.length;W++)C[W]=C[W]/D;v.envMap.value=e.texture,v.samples.value=_,v.weights.value=C,v.latitudinal.value=d==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:A}=this;v.dTheta.value=b,v.mipInt.value=A-s;const I=this._sizeLods[o],P=3*I*(o>A-ws?o-A+ws:0),G=4*(this._cubeSize-I);Ka(n,P,G,3*I,2*I),m.setRenderTarget(n),m.render(x,xc)}}function Zx(u){const e=[],n=[],s=[];let o=u;const l=u-ws+1+rp.length;for(let d=0;d<l;d++){const c=Math.pow(2,o);n.push(c);let m=1/c;d>u-ws?m=rp[d-u+ws-1]:d===0&&(m=0),s.push(m);const p=1/(c-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,b=6,y=3,_=2,C=1,D=new Float32Array(y*b*M),A=new Float32Array(_*b*M),I=new Float32Array(C*b*M);for(let G=0;G<M;G++){const W=G%3*2/3-1,E=G>2?0:-1,F=[W,E,0,W+2/3,E,0,W+2/3,E+1,0,W,E,0,W+2/3,E+1,0,W,E+1,0];D.set(F,y*b*G),A.set(v,_*b*G);const Y=[G,G,G,G,G,G];I.set(Y,C*b*G)}const P=new Ur;P.setAttribute("position",new fi(D,y)),P.setAttribute("uv",new fi(A,_)),P.setAttribute("faceIndex",new fi(I,C)),e.push(P),o>ws&&o--}return{lodPlanes:e,sizeLods:n,sigmas:s}}function lp(u,e,n){const s=new zr(u,e,n);return s.texture.mapping=tl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ka(u,e,n,s,o){u.viewport.set(e,n,s,o),u.scissor.set(e,n,s,o)}function Kx(u,e,n){const s=new Float32Array(Cr),o=new te(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${u}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function up(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function cp(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qx(u){let e=new WeakMap,n=null;function s(c){if(c&&c.isTexture){const m=c.mapping,p=m===Tc||m===Cc,g=m===Cs||m===bs;if(p||g)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let x=e.get(c);return n===null&&(n=new ap(u)),x=p?n.fromEquirectangular(c,x):n.fromCubemap(c,x),e.set(c,x),x.texture}else{if(e.has(c))return e.get(c).texture;{const x=c.image;if(p&&x&&x.height>0||g&&x&&o(x)){n===null&&(n=new ap(u));const v=p?n.fromEquirectangular(c):n.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",l),v.texture}else return null}}}return c}function o(c){let m=0;const p=6;for(let g=0;g<p;g++)c[g]!==void 0&&m++;return m===p}function l(c){const m=c.target;m.removeEventListener("dispose",l);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Jx(u){const e={};function n(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=u.getExtension("WEBGL_depth_texture")||u.getExtension("MOZ_WEBGL_depth_texture")||u.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=u.getExtension("EXT_texture_filter_anisotropic")||u.getExtension("MOZ_EXT_texture_filter_anisotropic")||u.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=u.getExtension("WEBGL_compressed_texture_s3tc")||u.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=u.getExtension("WEBGL_compressed_texture_pvrtc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=u.getExtension(s)}return e[s]=o,o}return{has:function(s){return n(s)!==null},init:function(s){s.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(s){const o=n(s);return o===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function ey(u,e,n,s){const o={},l=new WeakMap;function d(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",d),delete o[v.id];const M=l.get(v);M&&(e.remove(M),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function c(x,v){return o[v.id]===!0||(v.addEventListener("dispose",d),o[v.id]=!0,n.memory.geometries++),v}function m(x){const v=x.attributes;for(const b in v)e.update(v[b],34962);const M=x.morphAttributes;for(const b in M){const y=M[b];for(let _=0,C=y.length;_<C;_++)e.update(y[_],34962)}}function p(x){const v=[],M=x.index,b=x.attributes.position;let y=0;if(M!==null){const D=M.array;y=M.version;for(let A=0,I=D.length;A<I;A+=3){const P=D[A+0],G=D[A+1],W=D[A+2];v.push(P,G,G,W,W,P)}}else{const D=b.array;y=b.version;for(let A=0,I=D.length/3-1;A<I;A+=3){const P=A+0,G=A+1,W=A+2;v.push(P,G,G,W,W,P)}}const _=new(zp(v)?Gp:Vp)(v,1);_.version=y;const C=l.get(x);C&&e.remove(C),l.set(x,_)}function g(x){const v=l.get(x);if(v){const M=x.index;M!==null&&v.version<M.version&&p(x)}else p(x);return l.get(x)}return{get:c,update:m,getWireframeAttribute:g}}function ty(u,e,n,s){const o=s.isWebGL2;let l;function d(v){l=v}let c,m;function p(v){c=v.type,m=v.bytesPerElement}function g(v,M){u.drawElements(l,M,c,v*m),n.update(M,l,1)}function x(v,M,b){if(b===0)return;let y,_;if(o)y=u,_="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](l,M,c,v*m,b),n.update(M,l,b)}this.setMode=d,this.setIndex=p,this.render=g,this.renderInstances=x}function ny(u){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,d,c){switch(n.calls++,d){case 4:n.triangles+=c*(l/3);break;case 1:n.lines+=c*(l/2);break;case 3:n.lines+=c*(l-1);break;case 2:n.lines+=c*l;break;case 0:n.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:s}}function iy(u,e){return u[0]-e[0]}function ry(u,e){return Math.abs(e[1])-Math.abs(u[1])}function sy(u,e,n){const s={},o=new Float32Array(8),l=new WeakMap,d=new $t,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function m(p,g,x,v){const M=p.morphTargetInfluences;if(e.isWebGL2===!0){const y=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,_=y!==void 0?y.length:0;let C=l.get(g);if(C===void 0||C.count!==_){let ce=function(){V.dispose(),l.delete(g),g.removeEventListener("dispose",ce)};var b=ce;C!==void 0&&C.texture.dispose();const I=g.morphAttributes.position!==void 0,P=g.morphAttributes.normal!==void 0,G=g.morphAttributes.color!==void 0,W=g.morphAttributes.position||[],E=g.morphAttributes.normal||[],F=g.morphAttributes.color||[];let Y=0;I===!0&&(Y=1),P===!0&&(Y=2),G===!0&&(Y=3);let fe=g.attributes.position.count*Y,me=1;fe>e.maxTextureSize&&(me=Math.ceil(fe/e.maxTextureSize),fe=e.maxTextureSize);const q=new Float32Array(fe*me*4*_),V=new Op(q,fe,me,_);V.type=Ar,V.needsUpdate=!0;const ne=Y*4;for(let ae=0;ae<_;ae++){const O=W[ae],ee=E[ae],Z=F[ae],z=fe*me*4*ae;for(let N=0;N<O.count;N++){const J=N*ne;I===!0&&(d.fromBufferAttribute(O,N),q[z+J+0]=d.x,q[z+J+1]=d.y,q[z+J+2]=d.z,q[z+J+3]=0),P===!0&&(d.fromBufferAttribute(ee,N),q[z+J+4]=d.x,q[z+J+5]=d.y,q[z+J+6]=d.z,q[z+J+7]=0),G===!0&&(d.fromBufferAttribute(Z,N),q[z+J+8]=d.x,q[z+J+9]=d.y,q[z+J+10]=d.z,q[z+J+11]=Z.itemSize===4?d.w:1)}}C={count:_,texture:V,size:new pt(fe,me)},l.set(g,C),g.addEventListener("dispose",ce)}let D=0;for(let I=0;I<M.length;I++)D+=M[I];const A=g.morphTargetsRelative?1:1-D;v.getUniforms().setValue(u,"morphTargetBaseInfluence",A),v.getUniforms().setValue(u,"morphTargetInfluences",M),v.getUniforms().setValue(u,"morphTargetsTexture",C.texture,n),v.getUniforms().setValue(u,"morphTargetsTextureSize",C.size)}else{const y=M===void 0?0:M.length;let _=s[g.id];if(_===void 0||_.length!==y){_=[];for(let P=0;P<y;P++)_[P]=[P,0];s[g.id]=_}for(let P=0;P<y;P++){const G=_[P];G[0]=P,G[1]=M[P]}_.sort(ry);for(let P=0;P<8;P++)P<y&&_[P][1]?(c[P][0]=_[P][0],c[P][1]=_[P][1]):(c[P][0]=Number.MAX_SAFE_INTEGER,c[P][1]=0);c.sort(iy);const C=g.morphAttributes.position,D=g.morphAttributes.normal;let A=0;for(let P=0;P<8;P++){const G=c[P],W=G[0],E=G[1];W!==Number.MAX_SAFE_INTEGER&&E?(C&&g.getAttribute("morphTarget"+P)!==C[W]&&g.setAttribute("morphTarget"+P,C[W]),D&&g.getAttribute("morphNormal"+P)!==D[W]&&g.setAttribute("morphNormal"+P,D[W]),o[P]=E,A+=E):(C&&g.hasAttribute("morphTarget"+P)===!0&&g.deleteAttribute("morphTarget"+P),D&&g.hasAttribute("morphNormal"+P)===!0&&g.deleteAttribute("morphNormal"+P),o[P]=0)}const I=g.morphTargetsRelative?1:1-A;v.getUniforms().setValue(u,"morphTargetBaseInfluence",I),v.getUniforms().setValue(u,"morphTargetInfluences",o)}}return{update:m}}function oy(u,e,n,s){let o=new WeakMap;function l(m){const p=s.render.frame,g=m.geometry,x=e.get(m,g);return o.get(x)!==p&&(e.update(x),o.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",c)===!1&&m.addEventListener("dispose",c),n.update(m.instanceMatrix,34962),m.instanceColor!==null&&n.update(m.instanceColor,34962)),x}function d(){o=new WeakMap}function c(m){const p=m.target;p.removeEventListener("dispose",c),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:d}}const Yp=new Dn,$p=new Op,Zp=new H0,Kp=new Xp,fp=[],dp=[],hp=new Float32Array(16),pp=new Float32Array(9),mp=new Float32Array(4);function Rs(u,e,n){const s=u[0];if(s<=0||s>0)return u;const o=e*n;let l=fp[o];if(l===void 0&&(l=new Float32Array(o),fp[o]=l),e!==0){s.toArray(l,0);for(let d=1,c=0;d!==e;++d)c+=n,u[d].toArray(l,c)}return l}function Ut(u,e){if(u.length!==e.length)return!1;for(let n=0,s=u.length;n<s;n++)if(u[n]!==e[n])return!1;return!0}function Ot(u,e){for(let n=0,s=e.length;n<s;n++)u[n]=e[n]}function rl(u,e){let n=dp[e];n===void 0&&(n=new Int32Array(e),dp[e]=n);for(let s=0;s!==e;++s)n[s]=u.allocateTextureUnit();return n}function ay(u,e){const n=this.cache;n[0]!==e&&(u.uniform1f(this.addr,e),n[0]=e)}function ly(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(u.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;u.uniform2fv(this.addr,e),Ot(n,e)}}function uy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(u.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(u.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;u.uniform3fv(this.addr,e),Ot(n,e)}}function cy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(u.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;u.uniform4fv(this.addr,e),Ot(n,e)}}function fy(u,e){const n=this.cache,s=e.elements;if(s===void 0){if(Ut(n,e))return;u.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,s))return;mp.set(s),u.uniformMatrix2fv(this.addr,!1,mp),Ot(n,s)}}function dy(u,e){const n=this.cache,s=e.elements;if(s===void 0){if(Ut(n,e))return;u.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,s))return;pp.set(s),u.uniformMatrix3fv(this.addr,!1,pp),Ot(n,s)}}function hy(u,e){const n=this.cache,s=e.elements;if(s===void 0){if(Ut(n,e))return;u.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,s))return;hp.set(s),u.uniformMatrix4fv(this.addr,!1,hp),Ot(n,s)}}function py(u,e){const n=this.cache;n[0]!==e&&(u.uniform1i(this.addr,e),n[0]=e)}function my(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(u.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;u.uniform2iv(this.addr,e),Ot(n,e)}}function gy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(u.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;u.uniform3iv(this.addr,e),Ot(n,e)}}function _y(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(u.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;u.uniform4iv(this.addr,e),Ot(n,e)}}function vy(u,e){const n=this.cache;n[0]!==e&&(u.uniform1ui(this.addr,e),n[0]=e)}function xy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(u.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;u.uniform2uiv(this.addr,e),Ot(n,e)}}function yy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(u.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;u.uniform3uiv(this.addr,e),Ot(n,e)}}function Sy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(u.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;u.uniform4uiv(this.addr,e),Ot(n,e)}}function My(u,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(u.uniform1i(this.addr,o),s[0]=o),n.setTexture2D(e||Yp,o)}function wy(u,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(u.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(e||Zp,o)}function Ey(u,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(u.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(e||Kp,o)}function Ty(u,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(u.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(e||$p,o)}function Cy(u){switch(u){case 5126:return ay;case 35664:return ly;case 35665:return uy;case 35666:return cy;case 35674:return fy;case 35675:return dy;case 35676:return hy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return _y;case 5125:return vy;case 36294:return xy;case 36295:return yy;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return Ty}}function by(u,e){u.uniform1fv(this.addr,e)}function Ay(u,e){const n=Rs(e,this.size,2);u.uniform2fv(this.addr,n)}function Ly(u,e){const n=Rs(e,this.size,3);u.uniform3fv(this.addr,n)}function Py(u,e){const n=Rs(e,this.size,4);u.uniform4fv(this.addr,n)}function Ry(u,e){const n=Rs(e,this.size,4);u.uniformMatrix2fv(this.addr,!1,n)}function Dy(u,e){const n=Rs(e,this.size,9);u.uniformMatrix3fv(this.addr,!1,n)}function Iy(u,e){const n=Rs(e,this.size,16);u.uniformMatrix4fv(this.addr,!1,n)}function Ny(u,e){u.uniform1iv(this.addr,e)}function zy(u,e){u.uniform2iv(this.addr,e)}function Fy(u,e){u.uniform3iv(this.addr,e)}function ky(u,e){u.uniform4iv(this.addr,e)}function Uy(u,e){u.uniform1uiv(this.addr,e)}function Oy(u,e){u.uniform2uiv(this.addr,e)}function By(u,e){u.uniform3uiv(this.addr,e)}function Vy(u,e){u.uniform4uiv(this.addr,e)}function Gy(u,e,n){const s=this.cache,o=e.length,l=rl(n,o);Ut(s,l)||(u.uniform1iv(this.addr,l),Ot(s,l));for(let d=0;d!==o;++d)n.setTexture2D(e[d]||Yp,l[d])}function Wy(u,e,n){const s=this.cache,o=e.length,l=rl(n,o);Ut(s,l)||(u.uniform1iv(this.addr,l),Ot(s,l));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||Zp,l[d])}function Hy(u,e,n){const s=this.cache,o=e.length,l=rl(n,o);Ut(s,l)||(u.uniform1iv(this.addr,l),Ot(s,l));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||Kp,l[d])}function Xy(u,e,n){const s=this.cache,o=e.length,l=rl(n,o);Ut(s,l)||(u.uniform1iv(this.addr,l),Ot(s,l));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||$p,l[d])}function jy(u){switch(u){case 5126:return by;case 35664:return Ay;case 35665:return Ly;case 35666:return Py;case 35674:return Ry;case 35675:return Dy;case 35676:return Iy;case 5124:case 35670:return Ny;case 35667:case 35671:return zy;case 35668:case 35672:return Fy;case 35669:case 35673:return ky;case 5125:return Uy;case 36294:return Oy;case 36295:return By;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Xy}}class qy{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.setValue=Cy(n.type)}}class Yy{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.size=n.size,this.setValue=jy(n.type)}}class $y{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const c=o[l];c.setValue(e,n[c.id],s)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function gp(u,e){u.seq.push(e),u.map[e.id]=e}function Zy(u,e,n){const s=u.name,o=s.length;for(Sc.lastIndex=0;;){const l=Sc.exec(s),d=Sc.lastIndex;let c=l[1];const m=l[2]==="]",p=l[3];if(m&&(c=c|0),p===void 0||p==="["&&d+2===o){gp(n,p===void 0?new qy(c,u,e):new Yy(c,u,e));break}else{let x=n.map[c];x===void 0&&(x=new $y(c),gp(n,x)),n=x}}}class Ja{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,35718);for(let o=0;o<s;++o){const l=e.getActiveUniform(n,o),d=e.getUniformLocation(n,l.name);Zy(l,d,this)}}setValue(e,n,s,o){const l=this.map[n];l!==void 0&&l.setValue(e,s,o)}setOptional(e,n,s){const o=n[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,n,s,o){for(let l=0,d=n.length;l!==d;++l){const c=n[l],m=s[c.id];m.needsUpdate!==!1&&c.setValue(e,m.value,o)}}static seqWithValue(e,n){const s=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in n&&s.push(d)}return s}}function _p(u,e,n){const s=u.createShader(e);return u.shaderSource(s,n),u.compileShader(s),s}let Ky=0;function Qy(u,e){const n=u.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let d=o;d<l;d++){const c=d+1;s.push(`${c===e?">":" "} ${c}: ${n[d]}`)}return s.join(`
`)}function Jy(u){switch(u){case Nr:return["Linear","( value )"];case _t:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",u),["Linear","( value )"]}}function vp(u,e,n){const s=u.getShaderParameter(e,35713),o=u.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const d=parseInt(l[1]);return n.toUpperCase()+`

`+o+`

`+Qy(u.getShaderSource(e),d)}else return o}function eS(u,e){const n=Jy(e);return"vec4 "+u+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function tS(u,e){let n;switch(e){case g0:n="Linear";break;case _0:n="Reinhard";break;case v0:n="OptimizedCineon";break;case x0:n="ACESFilmic";break;case y0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+u+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function nS(u){return[u.extensionDerivatives||u.envMapCubeUVHeight||u.bumpMap||u.tangentSpaceNormalMap||u.clearcoatNormalMap||u.flatShading||u.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(u.extensionFragDepth||u.logarithmicDepthBuffer)&&u.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",u.extensionDrawBuffers&&u.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(u.extensionShaderTextureLOD||u.envMap||u.transmission)&&u.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mo).join(`
`)}function iS(u){const e=[];for(const n in u){const s=u[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function rS(u,e){const n={},s=u.getProgramParameter(e,35721);for(let o=0;o<s;o++){const l=u.getActiveAttrib(e,o),d=l.name;let c=1;l.type===35674&&(c=2),l.type===35675&&(c=3),l.type===35676&&(c=4),n[d]={type:l.type,location:u.getAttribLocation(e,d),locationSize:c}}return n}function Mo(u){return u!==""}function xp(u,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return u.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yp(u,e){return u.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(u){return u.replace(sS,oS)}function oS(u,e){const n=Ke[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Rc(n)}const aS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(u){return u.replace(aS,lS)}function lS(u,e,n,s){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Mp(u){let e="precision "+u.precision+` float;
precision `+u.precision+" int;";return u.precision==="highp"?e+=`
#define HIGH_PRECISION`:u.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:u.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uS(u){let e="SHADOWMAP_TYPE_BASIC";return u.shadowMapType===Lp?e="SHADOWMAP_TYPE_PCF":u.shadowMapType===Yg?e="SHADOWMAP_TYPE_PCF_SOFT":u.shadowMapType===So&&(e="SHADOWMAP_TYPE_VSM"),e}function cS(u){let e="ENVMAP_TYPE_CUBE";if(u.envMap)switch(u.envMapMode){case Cs:case bs:e="ENVMAP_TYPE_CUBE";break;case tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fS(u){let e="ENVMAP_MODE_REFLECTION";if(u.envMap)switch(u.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function dS(u){let e="ENVMAP_BLENDING_NONE";if(u.envMap)switch(u.combine){case Dp:e="ENVMAP_BLENDING_MULTIPLY";break;case p0:e="ENVMAP_BLENDING_MIX";break;case m0:e="ENVMAP_BLENDING_ADD";break}return e}function hS(u){const e=u.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:s,maxMip:n}}function pS(u,e,n,s){const o=u.getContext(),l=n.defines;let d=n.vertexShader,c=n.fragmentShader;const m=uS(n),p=cS(n),g=fS(n),x=dS(n),v=hS(n),M=n.isWebGL2?"":nS(n),b=iS(l),y=o.createProgram();let _,C,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=[b].filter(Mo).join(`
`),_.length>0&&(_+=`
`),C=[M,b].filter(Mo).join(`
`),C.length>0&&(C+=`
`)):(_=[Mp(n),"#define SHADER_NAME "+n.shaderName,b,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),C=[M,Mp(n),"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Li?"#define TONE_MAPPING":"",n.toneMapping!==Li?Ke.tonemapping_pars_fragment:"",n.toneMapping!==Li?tS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.encodings_pars_fragment,eS("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Mo).join(`
`)),d=Rc(d),d=xp(d,n),d=yp(d,n),c=Rc(c),c=xp(c,n),c=yp(c,n),d=Sp(d),c=Sp(c),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,C=["#define varying in",n.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const A=D+_+d,I=D+C+c,P=_p(o,35633,A),G=_p(o,35632,I);if(o.attachShader(y,P),o.attachShader(y,G),n.index0AttributeName!==void 0?o.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y),u.debug.checkShaderErrors){const F=o.getProgramInfoLog(y).trim(),Y=o.getShaderInfoLog(P).trim(),fe=o.getShaderInfoLog(G).trim();let me=!0,q=!0;if(o.getProgramParameter(y,35714)===!1){me=!1;const V=vp(o,P,"vertex"),ne=vp(o,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,35715)+`

Program Info Log: `+F+`
`+V+`
`+ne)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(Y===""||fe==="")&&(q=!1);q&&(this.diagnostics={runnable:me,programLog:F,vertexShader:{log:Y,prefix:_},fragmentShader:{log:fe,prefix:C}})}o.deleteShader(P),o.deleteShader(G);let W;this.getUniforms=function(){return W===void 0&&(W=new Ja(o,y)),W};let E;return this.getAttributes=function(){return E===void 0&&(E=rS(o,y)),E},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=Ky++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=G,this}let mS=0;class gS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new _S(e),n.set(e,s)),s}}class _S{constructor(e){this.id=mS++,this.code=e,this.usedTimes=0}}function vS(u,e,n,s,o,l,d){const c=new Bp,m=new gS,p=[],g=o.isWebGL2,x=o.logarithmicDepthBuffer,v=o.vertexTextures;let M=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E,F,Y,fe,me){const q=fe.fog,V=me.geometry,ne=E.isMeshStandardMaterial?fe.environment:null,ce=(E.isMeshStandardMaterial?n:e).get(E.envMap||ne),ae=ce&&ce.mapping===tl?ce.image.height:null,O=b[E.type];E.precision!==null&&(M=o.getMaxPrecision(E.precision),M!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",M,"instead."));const ee=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Z=ee!==void 0?ee.length:0;let z=0;V.morphAttributes.position!==void 0&&(z=1),V.morphAttributes.normal!==void 0&&(z=2),V.morphAttributes.color!==void 0&&(z=3);let N,J,ue,de;if(O){const lt=ui[O];N=lt.vertexShader,J=lt.fragmentShader}else N=E.vertexShader,J=E.fragmentShader,m.update(E),ue=m.getVertexShaderID(E),de=m.getFragmentShaderID(E);const H=u.getRenderTarget(),Le=E.alphaTest>0,ye=E.clearcoat>0,Me=E.iridescence>0;return{isWebGL2:g,shaderID:O,shaderName:E.type,vertexShader:N,fragmentShader:J,defines:E.defines,customVertexShaderID:ue,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:M,instancing:me.isInstancedMesh===!0,instancingColor:me.isInstancedMesh===!0&&me.instanceColor!==null,supportsVertexTextures:v,outputEncoding:H===null?u.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Nr,map:!!E.map,matcap:!!E.matcap,envMap:!!ce,envMapMode:ce&&ce.mapping,envMapCubeUVHeight:ae,lightMap:!!E.lightMap,aoMap:!!E.aoMap,emissiveMap:!!E.emissiveMap,bumpMap:!!E.bumpMap,normalMap:!!E.normalMap,objectSpaceNormalMap:E.normalMapType===B0,tangentSpaceNormalMap:E.normalMapType===O0,decodeVideoTexture:!!E.map&&E.map.isVideoTexture===!0&&E.map.encoding===_t,clearcoat:ye,clearcoatMap:ye&&!!E.clearcoatMap,clearcoatRoughnessMap:ye&&!!E.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!E.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!E.iridescenceMap,iridescenceThicknessMap:Me&&!!E.iridescenceThicknessMap,displacementMap:!!E.displacementMap,roughnessMap:!!E.roughnessMap,metalnessMap:!!E.metalnessMap,specularMap:!!E.specularMap,specularIntensityMap:!!E.specularIntensityMap,specularColorMap:!!E.specularColorMap,opaque:E.transparent===!1&&E.blending===Es,alphaMap:!!E.alphaMap,alphaTest:Le,gradientMap:!!E.gradientMap,sheen:E.sheen>0,sheenColorMap:!!E.sheenColorMap,sheenRoughnessMap:!!E.sheenRoughnessMap,transmission:E.transmission>0,transmissionMap:!!E.transmissionMap,thicknessMap:!!E.thicknessMap,combine:E.combine,vertexTangents:!!E.normalMap&&!!V.attributes.tangent,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUvs:!!E.map||!!E.bumpMap||!!E.normalMap||!!E.specularMap||!!E.alphaMap||!!E.emissiveMap||!!E.roughnessMap||!!E.metalnessMap||!!E.clearcoatMap||!!E.clearcoatRoughnessMap||!!E.clearcoatNormalMap||!!E.iridescenceMap||!!E.iridescenceThicknessMap||!!E.displacementMap||!!E.transmissionMap||!!E.thicknessMap||!!E.specularIntensityMap||!!E.specularColorMap||!!E.sheenColorMap||!!E.sheenRoughnessMap,uvsVertexOnly:!(E.map||E.bumpMap||E.normalMap||E.specularMap||E.alphaMap||E.emissiveMap||E.roughnessMap||E.metalnessMap||E.clearcoatNormalMap||E.iridescenceMap||E.iridescenceThicknessMap||E.transmission>0||E.transmissionMap||E.thicknessMap||E.specularIntensityMap||E.specularColorMap||E.sheen>0||E.sheenColorMap||E.sheenRoughnessMap)&&!!E.displacementMap,fog:!!q,useFog:E.fog===!0,fogExp2:q&&q.isFogExp2,flatShading:!!E.flatShading,sizeAttenuation:E.sizeAttenuation,logarithmicDepthBuffer:x,skinning:me.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:z,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:E.dithering,shadowMapEnabled:u.shadowMap.enabled&&Y.length>0,shadowMapType:u.shadowMap.type,toneMapping:E.toneMapped?u.toneMapping:Li,physicallyCorrectLights:u.physicallyCorrectLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===tr,flipSided:E.side===Rn,useDepthPacking:!!E.depthPacking,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:E.extensions&&E.extensions.derivatives,extensionFragDepth:E.extensions&&E.extensions.fragDepth,extensionDrawBuffers:E.extensions&&E.extensions.drawBuffers,extensionShaderTextureLOD:E.extensions&&E.extensions.shaderTextureLOD,rendererExtensionFragDepth:g||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||s.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function _(E){const F=[];if(E.shaderID?F.push(E.shaderID):(F.push(E.customVertexShaderID),F.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)F.push(Y),F.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(C(F,E),D(F,E),F.push(u.outputEncoding)),F.push(E.customProgramCacheKey),F.join()}function C(E,F){E.push(F.precision),E.push(F.outputEncoding),E.push(F.envMapMode),E.push(F.envMapCubeUVHeight),E.push(F.combine),E.push(F.vertexUvs),E.push(F.fogExp2),E.push(F.sizeAttenuation),E.push(F.morphTargetsCount),E.push(F.morphAttributeCount),E.push(F.numDirLights),E.push(F.numPointLights),E.push(F.numSpotLights),E.push(F.numSpotLightMaps),E.push(F.numHemiLights),E.push(F.numRectAreaLights),E.push(F.numDirLightShadows),E.push(F.numPointLightShadows),E.push(F.numSpotLightShadows),E.push(F.numSpotLightShadowsWithMaps),E.push(F.shadowMapType),E.push(F.toneMapping),E.push(F.numClippingPlanes),E.push(F.numClipIntersection),E.push(F.depthPacking)}function D(E,F){c.disableAll(),F.isWebGL2&&c.enable(0),F.supportsVertexTextures&&c.enable(1),F.instancing&&c.enable(2),F.instancingColor&&c.enable(3),F.map&&c.enable(4),F.matcap&&c.enable(5),F.envMap&&c.enable(6),F.lightMap&&c.enable(7),F.aoMap&&c.enable(8),F.emissiveMap&&c.enable(9),F.bumpMap&&c.enable(10),F.normalMap&&c.enable(11),F.objectSpaceNormalMap&&c.enable(12),F.tangentSpaceNormalMap&&c.enable(13),F.clearcoat&&c.enable(14),F.clearcoatMap&&c.enable(15),F.clearcoatRoughnessMap&&c.enable(16),F.clearcoatNormalMap&&c.enable(17),F.iridescence&&c.enable(18),F.iridescenceMap&&c.enable(19),F.iridescenceThicknessMap&&c.enable(20),F.displacementMap&&c.enable(21),F.specularMap&&c.enable(22),F.roughnessMap&&c.enable(23),F.metalnessMap&&c.enable(24),F.gradientMap&&c.enable(25),F.alphaMap&&c.enable(26),F.alphaTest&&c.enable(27),F.vertexColors&&c.enable(28),F.vertexAlphas&&c.enable(29),F.vertexUvs&&c.enable(30),F.vertexTangents&&c.enable(31),F.uvsVertexOnly&&c.enable(32),E.push(c.mask),c.disableAll(),F.fog&&c.enable(0),F.useFog&&c.enable(1),F.flatShading&&c.enable(2),F.logarithmicDepthBuffer&&c.enable(3),F.skinning&&c.enable(4),F.morphTargets&&c.enable(5),F.morphNormals&&c.enable(6),F.morphColors&&c.enable(7),F.premultipliedAlpha&&c.enable(8),F.shadowMapEnabled&&c.enable(9),F.physicallyCorrectLights&&c.enable(10),F.doubleSided&&c.enable(11),F.flipSided&&c.enable(12),F.useDepthPacking&&c.enable(13),F.dithering&&c.enable(14),F.specularIntensityMap&&c.enable(15),F.specularColorMap&&c.enable(16),F.transmission&&c.enable(17),F.transmissionMap&&c.enable(18),F.thicknessMap&&c.enable(19),F.sheen&&c.enable(20),F.sheenColorMap&&c.enable(21),F.sheenRoughnessMap&&c.enable(22),F.decodeVideoTexture&&c.enable(23),F.opaque&&c.enable(24),E.push(c.mask)}function A(E){const F=b[E.type];let Y;if(F){const fe=ui[F];Y=i_.clone(fe.uniforms)}else Y=E.uniforms;return Y}function I(E,F){let Y;for(let fe=0,me=p.length;fe<me;fe++){const q=p[fe];if(q.cacheKey===F){Y=q,++Y.usedTimes;break}}return Y===void 0&&(Y=new pS(u,F,E,l),p.push(Y)),Y}function P(E){if(--E.usedTimes===0){const F=p.indexOf(E);p[F]=p[p.length-1],p.pop(),E.destroy()}}function G(E){m.remove(E)}function W(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:A,acquireProgram:I,releaseProgram:P,releaseShaderCache:G,programs:p,dispose:W}}function xS(){let u=new WeakMap;function e(l){let d=u.get(l);return d===void 0&&(d={},u.set(l,d)),d}function n(l){u.delete(l)}function s(l,d,c){u.get(l)[d]=c}function o(){u=new WeakMap}return{get:e,remove:n,update:s,dispose:o}}function yS(u,e){return u.groupOrder!==e.groupOrder?u.groupOrder-e.groupOrder:u.renderOrder!==e.renderOrder?u.renderOrder-e.renderOrder:u.material.id!==e.material.id?u.material.id-e.material.id:u.z!==e.z?u.z-e.z:u.id-e.id}function wp(u,e){return u.groupOrder!==e.groupOrder?u.groupOrder-e.groupOrder:u.renderOrder!==e.renderOrder?u.renderOrder-e.renderOrder:u.z!==e.z?e.z-u.z:u.id-e.id}function Ep(){const u=[];let e=0;const n=[],s=[],o=[];function l(){e=0,n.length=0,s.length=0,o.length=0}function d(x,v,M,b,y,_){let C=u[e];return C===void 0?(C={id:x.id,object:x,geometry:v,material:M,groupOrder:b,renderOrder:x.renderOrder,z:y,group:_},u[e]=C):(C.id=x.id,C.object=x,C.geometry=v,C.material=M,C.groupOrder=b,C.renderOrder=x.renderOrder,C.z=y,C.group=_),e++,C}function c(x,v,M,b,y,_){const C=d(x,v,M,b,y,_);M.transmission>0?s.push(C):M.transparent===!0?o.push(C):n.push(C)}function m(x,v,M,b,y,_){const C=d(x,v,M,b,y,_);M.transmission>0?s.unshift(C):M.transparent===!0?o.unshift(C):n.unshift(C)}function p(x,v){n.length>1&&n.sort(x||yS),s.length>1&&s.sort(v||wp),o.length>1&&o.sort(v||wp)}function g(){for(let x=e,v=u.length;x<v;x++){const M=u[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:s,transparent:o,init:l,push:c,unshift:m,finish:g,sort:p}}function SS(){let u=new WeakMap;function e(s,o){const l=u.get(s);let d;return l===void 0?(d=new Ep,u.set(s,[d])):o>=l.length?(d=new Ep,l.push(d)):d=l[o],d}function n(){u=new WeakMap}return{get:e,dispose:n}}function MS(){const u={};return{get:function(e){if(u[e.id]!==void 0)return u[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new Mt};break;case"SpotLight":n={position:new te,direction:new te,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":n={color:new Mt,position:new te,halfWidth:new te,halfHeight:new te};break}return u[e.id]=n,n}}}function wS(){const u={};return{get:function(e){if(u[e.id]!==void 0)return u[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return u[e.id]=n,n}}}let ES=0;function TS(u,e){return(e.castShadow?2:0)-(u.castShadow?2:0)+(e.map?1:0)-(u.map?1:0)}function CS(u,e){const n=new MS,s=wS(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let g=0;g<9;g++)o.probe.push(new te);const l=new te,d=new Zt,c=new Zt;function m(g,x){let v=0,M=0,b=0;for(let fe=0;fe<9;fe++)o.probe[fe].set(0,0,0);let y=0,_=0,C=0,D=0,A=0,I=0,P=0,G=0,W=0,E=0;g.sort(TS);const F=x!==!0?Math.PI:1;for(let fe=0,me=g.length;fe<me;fe++){const q=g[fe],V=q.color,ne=q.intensity,ce=q.distance,ae=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)v+=V.r*ne*F,M+=V.g*ne*F,b+=V.b*ne*F;else if(q.isLightProbe)for(let O=0;O<9;O++)o.probe[O].addScaledVector(q.sh.coefficients[O],ne);else if(q.isDirectionalLight){const O=n.get(q);if(O.color.copy(q.color).multiplyScalar(q.intensity*F),q.castShadow){const ee=q.shadow,Z=s.get(q);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,o.directionalShadow[y]=Z,o.directionalShadowMap[y]=ae,o.directionalShadowMatrix[y]=q.shadow.matrix,I++}o.directional[y]=O,y++}else if(q.isSpotLight){const O=n.get(q);O.position.setFromMatrixPosition(q.matrixWorld),O.color.copy(V).multiplyScalar(ne*F),O.distance=ce,O.coneCos=Math.cos(q.angle),O.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),O.decay=q.decay,o.spot[C]=O;const ee=q.shadow;if(q.map&&(o.spotLightMap[W]=q.map,W++,ee.updateMatrices(q),q.castShadow&&E++),o.spotLightMatrix[C]=ee.matrix,q.castShadow){const Z=s.get(q);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,o.spotShadow[C]=Z,o.spotShadowMap[C]=ae,G++}C++}else if(q.isRectAreaLight){const O=n.get(q);O.color.copy(V).multiplyScalar(ne),O.halfWidth.set(q.width*.5,0,0),O.halfHeight.set(0,q.height*.5,0),o.rectArea[D]=O,D++}else if(q.isPointLight){const O=n.get(q);if(O.color.copy(q.color).multiplyScalar(q.intensity*F),O.distance=q.distance,O.decay=q.decay,q.castShadow){const ee=q.shadow,Z=s.get(q);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,Z.shadowCameraNear=ee.camera.near,Z.shadowCameraFar=ee.camera.far,o.pointShadow[_]=Z,o.pointShadowMap[_]=ae,o.pointShadowMatrix[_]=q.shadow.matrix,P++}o.point[_]=O,_++}else if(q.isHemisphereLight){const O=n.get(q);O.skyColor.copy(q.color).multiplyScalar(ne*F),O.groundColor.copy(q.groundColor).multiplyScalar(ne*F),o.hemi[A]=O,A++}}D>0&&(e.isWebGL2||u.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ee.LTC_FLOAT_1,o.rectAreaLTC2=Ee.LTC_FLOAT_2):u.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Ee.LTC_HALF_1,o.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=M,o.ambient[2]=b;const Y=o.hash;(Y.directionalLength!==y||Y.pointLength!==_||Y.spotLength!==C||Y.rectAreaLength!==D||Y.hemiLength!==A||Y.numDirectionalShadows!==I||Y.numPointShadows!==P||Y.numSpotShadows!==G||Y.numSpotMaps!==W)&&(o.directional.length=y,o.spot.length=C,o.rectArea.length=D,o.point.length=_,o.hemi.length=A,o.directionalShadow.length=I,o.directionalShadowMap.length=I,o.pointShadow.length=P,o.pointShadowMap.length=P,o.spotShadow.length=G,o.spotShadowMap.length=G,o.directionalShadowMatrix.length=I,o.pointShadowMatrix.length=P,o.spotLightMatrix.length=G+W-E,o.spotLightMap.length=W,o.numSpotLightShadowsWithMaps=E,Y.directionalLength=y,Y.pointLength=_,Y.spotLength=C,Y.rectAreaLength=D,Y.hemiLength=A,Y.numDirectionalShadows=I,Y.numPointShadows=P,Y.numSpotShadows=G,Y.numSpotMaps=W,o.version=ES++)}function p(g,x){let v=0,M=0,b=0,y=0,_=0;const C=x.matrixWorldInverse;for(let D=0,A=g.length;D<A;D++){const I=g[D];if(I.isDirectionalLight){const P=o.directional[v];P.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(C),v++}else if(I.isSpotLight){const P=o.spot[b];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(C),P.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(C),b++}else if(I.isRectAreaLight){const P=o.rectArea[y];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(C),c.identity(),d.copy(I.matrixWorld),d.premultiply(C),c.extractRotation(d),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),y++}else if(I.isPointLight){const P=o.point[M];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(C),M++}else if(I.isHemisphereLight){const P=o.hemi[_];P.direction.setFromMatrixPosition(I.matrixWorld),P.direction.transformDirection(C),_++}}}return{setup:m,setupView:p,state:o}}function Tp(u,e){const n=new CS(u,e),s=[],o=[];function l(){s.length=0,o.length=0}function d(x){s.push(x)}function c(x){o.push(x)}function m(x){n.setup(s,x)}function p(x){n.setupView(s,x)}return{init:l,state:{lightsArray:s,shadowsArray:o,lights:n},setupLights:m,setupLightsView:p,pushLight:d,pushShadow:c}}function bS(u,e){let n=new WeakMap;function s(l,d=0){const c=n.get(l);let m;return c===void 0?(m=new Tp(u,e),n.set(l,[m])):d>=c.length?(m=new Tp(u,e),c.push(m)):m=c[d],m}function o(){n=new WeakMap}return{get:s,dispose:o}}class AS extends il{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LS extends il{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new te,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DS(u,e,n){let s=new jp;const o=new pt,l=new pt,d=new $t,c=new AS({depthPacking:U0}),m=new LS,p={},g=n.maxTextureSize,x={[rr]:Rn,[Rn]:rr,[tr]:tr},v=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:PS,fragmentShader:RS}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ur;b.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Pn(b,v),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lp,this.render=function(I,P,G){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;const W=u.getRenderTarget(),E=u.getActiveCubeFace(),F=u.getActiveMipmapLevel(),Y=u.state;Y.setBlending(ir),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);for(let fe=0,me=I.length;fe<me;fe++){const q=I[fe],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ne=V.getFrameExtents();if(o.multiply(ne),l.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/ne.x),o.x=l.x*ne.x,V.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/ne.y),o.y=l.y*ne.y,V.mapSize.y=l.y)),V.map===null){const ae=this.type!==So?{minFilter:pn,magFilter:pn}:{};V.map=new zr(o.x,o.y,ae),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}u.setRenderTarget(V.map),u.clear();const ce=V.getViewportCount();for(let ae=0;ae<ce;ae++){const O=V.getViewport(ae);d.set(l.x*O.x,l.y*O.y,l.x*O.z,l.y*O.w),Y.viewport(d),V.updateMatrices(q,ae),s=V.getFrustum(),A(P,G,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===So&&C(V,G),V.needsUpdate=!1}_.needsUpdate=!1,u.setRenderTarget(W,E,F)};function C(I,P){const G=e.update(y);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new zr(o.x,o.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,u.setRenderTarget(I.mapPass),u.clear(),u.renderBufferDirect(P,null,G,v,y,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,u.setRenderTarget(I.map),u.clear(),u.renderBufferDirect(P,null,G,M,y,null)}function D(I,P,G,W,E,F){let Y=null;const fe=G.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(fe!==void 0)Y=fe;else if(Y=G.isPointLight===!0?m:c,u.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const me=Y.uuid,q=P.uuid;let V=p[me];V===void 0&&(V={},p[me]=V);let ne=V[q];ne===void 0&&(ne=Y.clone(),V[q]=ne),Y=ne}return Y.visible=P.visible,Y.wireframe=P.wireframe,F===So?Y.side=P.shadowSide!==null?P.shadowSide:P.side:Y.side=P.shadowSide!==null?P.shadowSide:x[P.side],Y.alphaMap=P.alphaMap,Y.alphaTest=P.alphaTest,Y.map=P.map,Y.clipShadows=P.clipShadows,Y.clippingPlanes=P.clippingPlanes,Y.clipIntersection=P.clipIntersection,Y.displacementMap=P.displacementMap,Y.displacementScale=P.displacementScale,Y.displacementBias=P.displacementBias,Y.wireframeLinewidth=P.wireframeLinewidth,Y.linewidth=P.linewidth,G.isPointLight===!0&&Y.isMeshDistanceMaterial===!0&&(Y.referencePosition.setFromMatrixPosition(G.matrixWorld),Y.nearDistance=W,Y.farDistance=E),Y}function A(I,P,G,W,E){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&E===So)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,I.matrixWorld);const fe=e.update(I),me=I.material;if(Array.isArray(me)){const q=fe.groups;for(let V=0,ne=q.length;V<ne;V++){const ce=q[V],ae=me[ce.materialIndex];if(ae&&ae.visible){const O=D(I,ae,W,G.near,G.far,E);u.renderBufferDirect(G,null,fe,O,I,ce)}}}else if(me.visible){const q=D(I,me,W,G.near,G.far,E);u.renderBufferDirect(G,null,fe,q,I,null)}}const Y=I.children;for(let fe=0,me=Y.length;fe<me;fe++)A(Y[fe],P,G,W,E)}}function IS(u,e,n){const s=n.isWebGL2;function o(){let B=!1;const ie=new $t;let ge=null;const Te=new $t(0,0,0,0);return{setMask:function(ze){ge!==ze&&!B&&(u.colorMask(ze,ze,ze,ze),ge=ze)},setLocked:function(ze){B=ze},setClear:function(ze,st,bt,Nt,ii){ii===!0&&(ze*=Nt,st*=Nt,bt*=Nt),ie.set(ze,st,bt,Nt),Te.equals(ie)===!1&&(u.clearColor(ze,st,bt,Nt),Te.copy(ie))},reset:function(){B=!1,ge=null,Te.set(-1,0,0,0)}}}function l(){let B=!1,ie=null,ge=null,Te=null;return{setTest:function(ze){ze?Le(2929):ye(2929)},setMask:function(ze){ie!==ze&&!B&&(u.depthMask(ze),ie=ze)},setFunc:function(ze){if(ge!==ze){switch(ze){case a0:u.depthFunc(512);break;case l0:u.depthFunc(519);break;case u0:u.depthFunc(513);break;case Ec:u.depthFunc(515);break;case c0:u.depthFunc(514);break;case f0:u.depthFunc(518);break;case d0:u.depthFunc(516);break;case h0:u.depthFunc(517);break;default:u.depthFunc(515)}ge=ze}},setLocked:function(ze){B=ze},setClear:function(ze){Te!==ze&&(u.clearDepth(ze),Te=ze)},reset:function(){B=!1,ie=null,ge=null,Te=null}}}function d(){let B=!1,ie=null,ge=null,Te=null,ze=null,st=null,bt=null,Nt=null,ii=null;return{setTest:function(ft){B||(ft?Le(2960):ye(2960))},setMask:function(ft){ie!==ft&&!B&&(u.stencilMask(ft),ie=ft)},setFunc:function(ft,Nn,Vt){(ge!==ft||Te!==Nn||ze!==Vt)&&(u.stencilFunc(ft,Nn,Vt),ge=ft,Te=Nn,ze=Vt)},setOp:function(ft,Nn,Vt){(st!==ft||bt!==Nn||Nt!==Vt)&&(u.stencilOp(ft,Nn,Vt),st=ft,bt=Nn,Nt=Vt)},setLocked:function(ft){B=ft},setClear:function(ft){ii!==ft&&(u.clearStencil(ft),ii=ft)},reset:function(){B=!1,ie=null,ge=null,Te=null,ze=null,st=null,bt=null,Nt=null,ii=null}}}const c=new o,m=new l,p=new d,g=new WeakMap,x=new WeakMap;let v={},M={},b=new WeakMap,y=[],_=null,C=!1,D=null,A=null,I=null,P=null,G=null,W=null,E=null,F=!1,Y=null,fe=null,me=null,q=null,V=null;const ne=u.getParameter(35661);let ce=!1,ae=0;const O=u.getParameter(7938);O.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(O)[1]),ce=ae>=1):O.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),ce=ae>=2);let ee=null,Z={};const z=u.getParameter(3088),N=u.getParameter(2978),J=new $t().fromArray(z),ue=new $t().fromArray(N);function de(B,ie,ge){const Te=new Uint8Array(4),ze=u.createTexture();u.bindTexture(B,ze),u.texParameteri(B,10241,9728),u.texParameteri(B,10240,9728);for(let st=0;st<ge;st++)u.texImage2D(ie+st,0,6408,1,1,0,6408,5121,Te);return ze}const H={};H[3553]=de(3553,3553,1),H[34067]=de(34067,34069,6),c.setClear(0,0,0,1),m.setClear(1),p.setClear(0),Le(2929),m.setFunc(Ec),It(!1),Kt(ph),Le(2884),Dt(ir);function Le(B){v[B]!==!0&&(u.enable(B),v[B]=!0)}function ye(B){v[B]!==!1&&(u.disable(B),v[B]=!1)}function Me(B,ie){return M[B]!==ie?(u.bindFramebuffer(B,ie),M[B]=ie,s&&(B===36009&&(M[36160]=ie),B===36160&&(M[36009]=ie)),!0):!1}function we(B,ie){let ge=y,Te=!1;if(B)if(ge=b.get(ie),ge===void 0&&(ge=[],b.set(ie,ge)),B.isWebGLMultipleRenderTargets){const ze=B.texture;if(ge.length!==ze.length||ge[0]!==36064){for(let st=0,bt=ze.length;st<bt;st++)ge[st]=36064+st;ge.length=ze.length,Te=!0}}else ge[0]!==36064&&(ge[0]=36064,Te=!0);else ge[0]!==1029&&(ge[0]=1029,Te=!0);Te&&(n.isWebGL2?u.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function lt(B){return _!==B?(u.useProgram(B),_=B,!0):!1}const qe={[Ms]:32774,[Zg]:32778,[Kg]:32779};if(s)qe[vh]=32775,qe[xh]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(qe[vh]=B.MIN_EXT,qe[xh]=B.MAX_EXT)}const Ge={[Qg]:0,[Jg]:1,[e0]:768,[Pp]:770,[o0]:776,[r0]:774,[n0]:772,[t0]:769,[Rp]:771,[s0]:775,[i0]:773};function Dt(B,ie,ge,Te,ze,st,bt,Nt){if(B===ir){C===!0&&(ye(3042),C=!1);return}if(C===!1&&(Le(3042),C=!0),B!==$g){if(B!==D||Nt!==F){if((A!==Ms||G!==Ms)&&(u.blendEquation(32774),A=Ms,G=Ms),Nt)switch(B){case Es:u.blendFuncSeparate(1,771,1,771);break;case mh:u.blendFunc(1,1);break;case gh:u.blendFuncSeparate(0,769,0,1);break;case _h:u.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Es:u.blendFuncSeparate(770,771,1,771);break;case mh:u.blendFunc(770,1);break;case gh:u.blendFuncSeparate(0,769,0,1);break;case _h:u.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}I=null,P=null,W=null,E=null,D=B,F=Nt}return}ze=ze||ie,st=st||ge,bt=bt||Te,(ie!==A||ze!==G)&&(u.blendEquationSeparate(qe[ie],qe[ze]),A=ie,G=ze),(ge!==I||Te!==P||st!==W||bt!==E)&&(u.blendFuncSeparate(Ge[ge],Ge[Te],Ge[st],Ge[bt]),I=ge,P=Te,W=st,E=bt),D=B,F=!1}function on(B,ie){B.side===tr?ye(2884):Le(2884);let ge=B.side===Rn;ie&&(ge=!ge),It(ge),B.blending===Es&&B.transparent===!1?Dt(ir):Dt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),m.setFunc(B.depthFunc),m.setTest(B.depthTest),m.setMask(B.depthWrite),c.setMask(B.colorWrite);const Te=B.stencilWrite;p.setTest(Te),Te&&(p.setMask(B.stencilWriteMask),p.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),p.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),rt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Le(32926):ye(32926)}function It(B){Y!==B&&(B?u.frontFace(2304):u.frontFace(2305),Y=B)}function Kt(B){B!==jg?(Le(2884),B!==fe&&(B===ph?u.cullFace(1029):B===qg?u.cullFace(1028):u.cullFace(1032))):ye(2884),fe=B}function wt(B){B!==me&&(ce&&u.lineWidth(B),me=B)}function rt(B,ie,ge){B?(Le(32823),(q!==ie||V!==ge)&&(u.polygonOffset(ie,ge),q=ie,V=ge)):ye(32823)}function an(B){B?Le(3089):ye(3089)}function Bt(B){B===void 0&&(B=33984+ne-1),ee!==B&&(u.activeTexture(B),ee=B)}function R(B,ie,ge){ge===void 0&&(ee===null?ge=33984+ne-1:ge=ee);let Te=Z[ge];Te===void 0&&(Te={type:void 0,texture:void 0},Z[ge]=Te),(Te.type!==B||Te.texture!==ie)&&(ee!==ge&&(u.activeTexture(ge),ee=ge),u.bindTexture(B,ie||H[B]),Te.type=B,Te.texture=ie)}function w(){const B=Z[ee];B!==void 0&&B.type!==void 0&&(u.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function se(){try{u.compressedTexImage2D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{u.compressedTexImage3D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{u.texSubImage2D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{u.texSubImage3D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xe(){try{u.compressedTexSubImage2D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{u.compressedTexSubImage3D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{u.texStorage2D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{u.texStorage3D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{u.texImage2D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{u.texImage3D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(B){J.equals(B)===!1&&(u.scissor(B.x,B.y,B.z,B.w),J.copy(B))}function ke(B){ue.equals(B)===!1&&(u.viewport(B.x,B.y,B.z,B.w),ue.copy(B))}function tt(B,ie){let ge=x.get(ie);ge===void 0&&(ge=new WeakMap,x.set(ie,ge));let Te=ge.get(B);Te===void 0&&(Te=u.getUniformBlockIndex(ie,B.name),ge.set(B,Te))}function ct(B,ie){const Te=x.get(ie).get(B);g.get(ie)!==Te&&(u.uniformBlockBinding(ie,Te,B.__bindingPointIndex),g.set(ie,Te))}function Et(){u.disable(3042),u.disable(2884),u.disable(2929),u.disable(32823),u.disable(3089),u.disable(2960),u.disable(32926),u.blendEquation(32774),u.blendFunc(1,0),u.blendFuncSeparate(1,0,1,0),u.colorMask(!0,!0,!0,!0),u.clearColor(0,0,0,0),u.depthMask(!0),u.depthFunc(513),u.clearDepth(1),u.stencilMask(4294967295),u.stencilFunc(519,0,4294967295),u.stencilOp(7680,7680,7680),u.clearStencil(0),u.cullFace(1029),u.frontFace(2305),u.polygonOffset(0,0),u.activeTexture(33984),u.bindFramebuffer(36160,null),s===!0&&(u.bindFramebuffer(36009,null),u.bindFramebuffer(36008,null)),u.useProgram(null),u.lineWidth(1),u.scissor(0,0,u.canvas.width,u.canvas.height),u.viewport(0,0,u.canvas.width,u.canvas.height),v={},ee=null,Z={},M={},b=new WeakMap,y=[],_=null,C=!1,D=null,A=null,I=null,P=null,G=null,W=null,E=null,F=!1,Y=null,fe=null,me=null,q=null,V=null,J.set(0,0,u.canvas.width,u.canvas.height),ue.set(0,0,u.canvas.width,u.canvas.height),c.reset(),m.reset(),p.reset()}return{buffers:{color:c,depth:m,stencil:p},enable:Le,disable:ye,bindFramebuffer:Me,drawBuffers:we,useProgram:lt,setBlending:Dt,setMaterial:on,setFlipSided:It,setCullFace:Kt,setLineWidth:wt,setPolygonOffset:rt,setScissorTest:an,activeTexture:Bt,bindTexture:R,unbindTexture:w,compressedTexImage2D:se,compressedTexImage3D:ve,texImage2D:He,texImage3D:Ie,updateUBOMapping:tt,uniformBlockBinding:ct,texStorage2D:le,texStorage3D:Fe,texSubImage2D:Se,texSubImage3D:Ce,compressedTexSubImage2D:Xe,compressedTexSubImage3D:be,scissor:Oe,viewport:ke,reset:Et}}function NS(u,e,n,s,o,l,d){const c=o.isWebGL2,m=o.maxTextures,p=o.maxCubemapSize,g=o.maxTextureSize,x=o.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),b=new WeakMap;let y;const _=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(R,w){return C?new OffscreenCanvas(R,w):el("canvas")}function A(R,w,se,ve){let Se=1;if((R.width>ve||R.height>ve)&&(Se=ve/Math.max(R.width,R.height)),Se<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const Ce=w?Pc:Math.floor,Xe=Ce(Se*R.width),be=Ce(Se*R.height);y===void 0&&(y=D(Xe,be));const le=se?D(Xe,be):y;return le.width=Xe,le.height=be,le.getContext("2d").drawImage(R,0,0,Xe,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Xe+"x"+be+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function I(R){return qh(R.width)&&qh(R.height)}function P(R){return c?!1:R.wrapS!==ti||R.wrapT!==ti||R.minFilter!==pn&&R.minFilter!==Wn}function G(R,w){return R.generateMipmaps&&w&&R.minFilter!==pn&&R.minFilter!==Wn}function W(R){u.generateMipmap(R)}function E(R,w,se,ve,Se=!1){if(c===!1)return w;if(R!==null){if(u[R]!==void 0)return u[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ce=w;return w===6403&&(se===5126&&(Ce=33326),se===5131&&(Ce=33325),se===5121&&(Ce=33321)),w===33319&&(se===5126&&(Ce=33328),se===5131&&(Ce=33327),se===5121&&(Ce=33323)),w===6408&&(se===5126&&(Ce=34836),se===5131&&(Ce=34842),se===5121&&(Ce=ve===_t&&Se===!1?35907:32856),se===32819&&(Ce=32854),se===32820&&(Ce=32855)),(Ce===33325||Ce===33326||Ce===33327||Ce===33328||Ce===34842||Ce===34836)&&e.get("EXT_color_buffer_float"),Ce}function F(R,w,se){return G(R,se)===!0||R.isFramebufferTexture&&R.minFilter!==pn&&R.minFilter!==Wn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function Y(R){return R===pn||R===yh||R===Hu?9728:9729}function fe(R){const w=R.target;w.removeEventListener("dispose",fe),q(w),w.isVideoTexture&&b.delete(w)}function me(R){const w=R.target;w.removeEventListener("dispose",me),ne(w)}function q(R){const w=s.get(R);if(w.__webglInit===void 0)return;const se=R.source,ve=_.get(se);if(ve){const Se=ve[w.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&V(R),Object.keys(ve).length===0&&_.delete(se)}s.remove(R)}function V(R){const w=s.get(R);u.deleteTexture(w.__webglTexture);const se=R.source,ve=_.get(se);delete ve[w.__cacheKey],d.memory.textures--}function ne(R){const w=R.texture,se=s.get(R),ve=s.get(w);if(ve.__webglTexture!==void 0&&(u.deleteTexture(ve.__webglTexture),d.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++)u.deleteFramebuffer(se.__webglFramebuffer[Se]),se.__webglDepthbuffer&&u.deleteRenderbuffer(se.__webglDepthbuffer[Se]);else{if(u.deleteFramebuffer(se.__webglFramebuffer),se.__webglDepthbuffer&&u.deleteRenderbuffer(se.__webglDepthbuffer),se.__webglMultisampledFramebuffer&&u.deleteFramebuffer(se.__webglMultisampledFramebuffer),se.__webglColorRenderbuffer)for(let Se=0;Se<se.__webglColorRenderbuffer.length;Se++)se.__webglColorRenderbuffer[Se]&&u.deleteRenderbuffer(se.__webglColorRenderbuffer[Se]);se.__webglDepthRenderbuffer&&u.deleteRenderbuffer(se.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Se=0,Ce=w.length;Se<Ce;Se++){const Xe=s.get(w[Se]);Xe.__webglTexture&&(u.deleteTexture(Xe.__webglTexture),d.memory.textures--),s.remove(w[Se])}s.remove(w),s.remove(R)}let ce=0;function ae(){ce=0}function O(){const R=ce;return R>=m&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+m),ce+=1,R}function ee(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.encoding),w.join()}function Z(R,w){const se=s.get(R);if(R.isVideoTexture&&an(R),R.isRenderTargetTexture===!1&&R.version>0&&se.__version!==R.version){const ve=R.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(se,R,w);return}}n.bindTexture(3553,se.__webglTexture,33984+w)}function z(R,w){const se=s.get(R);if(R.version>0&&se.__version!==R.version){ye(se,R,w);return}n.bindTexture(35866,se.__webglTexture,33984+w)}function N(R,w){const se=s.get(R);if(R.version>0&&se.__version!==R.version){ye(se,R,w);return}n.bindTexture(32879,se.__webglTexture,33984+w)}function J(R,w){const se=s.get(R);if(R.version>0&&se.__version!==R.version){Me(se,R,w);return}n.bindTexture(34067,se.__webglTexture,33984+w)}const ue={[bc]:10497,[ti]:33071,[Ac]:33648},de={[pn]:9728,[yh]:9984,[Hu]:9986,[Wn]:9729,[S0]:9985,[wo]:9987};function H(R,w,se){if(se?(u.texParameteri(R,10242,ue[w.wrapS]),u.texParameteri(R,10243,ue[w.wrapT]),(R===32879||R===35866)&&u.texParameteri(R,32882,ue[w.wrapR]),u.texParameteri(R,10240,de[w.magFilter]),u.texParameteri(R,10241,de[w.minFilter])):(u.texParameteri(R,10242,33071),u.texParameteri(R,10243,33071),(R===32879||R===35866)&&u.texParameteri(R,32882,33071),(w.wrapS!==ti||w.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),u.texParameteri(R,10240,Y(w.magFilter)),u.texParameteri(R,10241,Y(w.minFilter)),w.minFilter!==pn&&w.minFilter!==Wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===pn||w.minFilter!==Hu&&w.minFilter!==wo||w.type===Ar&&e.has("OES_texture_float_linear")===!1||c===!1&&w.type===Eo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||s.get(w).__currentAnisotropy)&&(u.texParameterf(R,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy)}}function Le(R,w){let se=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",fe));const ve=w.source;let Se=_.get(ve);Se===void 0&&(Se={},_.set(ve,Se));const Ce=ee(w);if(Ce!==R.__cacheKey){Se[Ce]===void 0&&(Se[Ce]={texture:u.createTexture(),usedTimes:0},d.memory.textures++,se=!0),Se[Ce].usedTimes++;const Xe=Se[R.__cacheKey];Xe!==void 0&&(Se[R.__cacheKey].usedTimes--,Xe.usedTimes===0&&V(w)),R.__cacheKey=Ce,R.__webglTexture=Se[Ce].texture}return se}function ye(R,w,se){let ve=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ve=35866),w.isData3DTexture&&(ve=32879);const Se=Le(R,w),Ce=w.source;n.bindTexture(ve,R.__webglTexture,33984+se);const Xe=s.get(Ce);if(Ce.version!==Xe.__version||Se===!0){n.activeTexture(33984+se),u.pixelStorei(37440,w.flipY),u.pixelStorei(37441,w.premultiplyAlpha),u.pixelStorei(3317,w.unpackAlignment),u.pixelStorei(37443,0);const be=P(w)&&I(w.image)===!1;let le=A(w.image,be,!1,g);le=Bt(w,le);const Fe=I(le)||c,He=l.convert(w.format,w.encoding);let Ie=l.convert(w.type),Oe=E(w.internalFormat,He,Ie,w.encoding,w.isVideoTexture);H(ve,w,Fe);let ke;const tt=w.mipmaps,ct=c&&w.isVideoTexture!==!0,Et=Xe.__version===void 0||Se===!0,B=F(w,le,Fe);if(w.isDepthTexture)Oe=6402,c?w.type===Ar?Oe=36012:w.type===br?Oe=33190:w.type===Ts?Oe=35056:Oe=33189:w.type===Ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Lr&&Oe===6402&&w.type!==Np&&w.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=br,Ie=l.convert(w.type)),w.format===As&&Oe===6402&&(Oe=34041,w.type!==Ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ts,Ie=l.convert(w.type))),Et&&(ct?n.texStorage2D(3553,1,Oe,le.width,le.height):n.texImage2D(3553,0,Oe,le.width,le.height,0,He,Ie,null));else if(w.isDataTexture)if(tt.length>0&&Fe){ct&&Et&&n.texStorage2D(3553,B,Oe,tt[0].width,tt[0].height);for(let ie=0,ge=tt.length;ie<ge;ie++)ke=tt[ie],ct?n.texSubImage2D(3553,ie,0,0,ke.width,ke.height,He,Ie,ke.data):n.texImage2D(3553,ie,Oe,ke.width,ke.height,0,He,Ie,ke.data);w.generateMipmaps=!1}else ct?(Et&&n.texStorage2D(3553,B,Oe,le.width,le.height),n.texSubImage2D(3553,0,0,0,le.width,le.height,He,Ie,le.data)):n.texImage2D(3553,0,Oe,le.width,le.height,0,He,Ie,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ct&&Et&&n.texStorage3D(35866,B,Oe,tt[0].width,tt[0].height,le.depth);for(let ie=0,ge=tt.length;ie<ge;ie++)ke=tt[ie],w.format!==ni?He!==null?ct?n.compressedTexSubImage3D(35866,ie,0,0,0,ke.width,ke.height,le.depth,He,ke.data,0,0):n.compressedTexImage3D(35866,ie,Oe,ke.width,ke.height,le.depth,0,ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?n.texSubImage3D(35866,ie,0,0,0,ke.width,ke.height,le.depth,He,Ie,ke.data):n.texImage3D(35866,ie,Oe,ke.width,ke.height,le.depth,0,He,Ie,ke.data)}else{ct&&Et&&n.texStorage2D(3553,B,Oe,tt[0].width,tt[0].height);for(let ie=0,ge=tt.length;ie<ge;ie++)ke=tt[ie],w.format!==ni?He!==null?ct?n.compressedTexSubImage2D(3553,ie,0,0,ke.width,ke.height,He,ke.data):n.compressedTexImage2D(3553,ie,Oe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?n.texSubImage2D(3553,ie,0,0,ke.width,ke.height,He,Ie,ke.data):n.texImage2D(3553,ie,Oe,ke.width,ke.height,0,He,Ie,ke.data)}else if(w.isDataArrayTexture)ct?(Et&&n.texStorage3D(35866,B,Oe,le.width,le.height,le.depth),n.texSubImage3D(35866,0,0,0,0,le.width,le.height,le.depth,He,Ie,le.data)):n.texImage3D(35866,0,Oe,le.width,le.height,le.depth,0,He,Ie,le.data);else if(w.isData3DTexture)ct?(Et&&n.texStorage3D(32879,B,Oe,le.width,le.height,le.depth),n.texSubImage3D(32879,0,0,0,0,le.width,le.height,le.depth,He,Ie,le.data)):n.texImage3D(32879,0,Oe,le.width,le.height,le.depth,0,He,Ie,le.data);else if(w.isFramebufferTexture){if(Et)if(ct)n.texStorage2D(3553,B,Oe,le.width,le.height);else{let ie=le.width,ge=le.height;for(let Te=0;Te<B;Te++)n.texImage2D(3553,Te,Oe,ie,ge,0,He,Ie,null),ie>>=1,ge>>=1}}else if(tt.length>0&&Fe){ct&&Et&&n.texStorage2D(3553,B,Oe,tt[0].width,tt[0].height);for(let ie=0,ge=tt.length;ie<ge;ie++)ke=tt[ie],ct?n.texSubImage2D(3553,ie,0,0,He,Ie,ke):n.texImage2D(3553,ie,Oe,He,Ie,ke);w.generateMipmaps=!1}else ct?(Et&&n.texStorage2D(3553,B,Oe,le.width,le.height),n.texSubImage2D(3553,0,0,0,He,Ie,le)):n.texImage2D(3553,0,Oe,He,Ie,le);G(w,Fe)&&W(ve),Xe.__version=Ce.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Me(R,w,se){if(w.image.length!==6)return;const ve=Le(R,w),Se=w.source;n.bindTexture(34067,R.__webglTexture,33984+se);const Ce=s.get(Se);if(Se.version!==Ce.__version||ve===!0){n.activeTexture(33984+se),u.pixelStorei(37440,w.flipY),u.pixelStorei(37441,w.premultiplyAlpha),u.pixelStorei(3317,w.unpackAlignment),u.pixelStorei(37443,0);const Xe=w.isCompressedTexture||w.image[0].isCompressedTexture,be=w.image[0]&&w.image[0].isDataTexture,le=[];for(let ie=0;ie<6;ie++)!Xe&&!be?le[ie]=A(w.image[ie],!1,!0,p):le[ie]=be?w.image[ie].image:w.image[ie],le[ie]=Bt(w,le[ie]);const Fe=le[0],He=I(Fe)||c,Ie=l.convert(w.format,w.encoding),Oe=l.convert(w.type),ke=E(w.internalFormat,Ie,Oe,w.encoding),tt=c&&w.isVideoTexture!==!0,ct=Ce.__version===void 0||ve===!0;let Et=F(w,Fe,He);H(34067,w,He);let B;if(Xe){tt&&ct&&n.texStorage2D(34067,Et,ke,Fe.width,Fe.height);for(let ie=0;ie<6;ie++){B=le[ie].mipmaps;for(let ge=0;ge<B.length;ge++){const Te=B[ge];w.format!==ni?Ie!==null?tt?n.compressedTexSubImage2D(34069+ie,ge,0,0,Te.width,Te.height,Ie,Te.data):n.compressedTexImage2D(34069+ie,ge,ke,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?n.texSubImage2D(34069+ie,ge,0,0,Te.width,Te.height,Ie,Oe,Te.data):n.texImage2D(34069+ie,ge,ke,Te.width,Te.height,0,Ie,Oe,Te.data)}}}else{B=w.mipmaps,tt&&ct&&(B.length>0&&Et++,n.texStorage2D(34067,Et,ke,le[0].width,le[0].height));for(let ie=0;ie<6;ie++)if(be){tt?n.texSubImage2D(34069+ie,0,0,0,le[ie].width,le[ie].height,Ie,Oe,le[ie].data):n.texImage2D(34069+ie,0,ke,le[ie].width,le[ie].height,0,Ie,Oe,le[ie].data);for(let ge=0;ge<B.length;ge++){const ze=B[ge].image[ie].image;tt?n.texSubImage2D(34069+ie,ge+1,0,0,ze.width,ze.height,Ie,Oe,ze.data):n.texImage2D(34069+ie,ge+1,ke,ze.width,ze.height,0,Ie,Oe,ze.data)}}else{tt?n.texSubImage2D(34069+ie,0,0,0,Ie,Oe,le[ie]):n.texImage2D(34069+ie,0,ke,Ie,Oe,le[ie]);for(let ge=0;ge<B.length;ge++){const Te=B[ge];tt?n.texSubImage2D(34069+ie,ge+1,0,0,Ie,Oe,Te.image[ie]):n.texImage2D(34069+ie,ge+1,ke,Ie,Oe,Te.image[ie])}}}G(w,He)&&W(34067),Ce.__version=Se.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function we(R,w,se,ve,Se){const Ce=l.convert(se.format,se.encoding),Xe=l.convert(se.type),be=E(se.internalFormat,Ce,Xe,se.encoding);s.get(w).__hasExternalTextures||(Se===32879||Se===35866?n.texImage3D(Se,0,be,w.width,w.height,w.depth,0,Ce,Xe,null):n.texImage2D(Se,0,be,w.width,w.height,0,Ce,Xe,null)),n.bindFramebuffer(36160,R),rt(w)?v.framebufferTexture2DMultisampleEXT(36160,ve,Se,s.get(se).__webglTexture,0,wt(w)):(Se===3553||Se>=34069&&Se<=34074)&&u.framebufferTexture2D(36160,ve,Se,s.get(se).__webglTexture,0),n.bindFramebuffer(36160,null)}function lt(R,w,se){if(u.bindRenderbuffer(36161,R),w.depthBuffer&&!w.stencilBuffer){let ve=33189;if(se||rt(w)){const Se=w.depthTexture;Se&&Se.isDepthTexture&&(Se.type===Ar?ve=36012:Se.type===br&&(ve=33190));const Ce=wt(w);rt(w)?v.renderbufferStorageMultisampleEXT(36161,Ce,ve,w.width,w.height):u.renderbufferStorageMultisample(36161,Ce,ve,w.width,w.height)}else u.renderbufferStorage(36161,ve,w.width,w.height);u.framebufferRenderbuffer(36160,36096,36161,R)}else if(w.depthBuffer&&w.stencilBuffer){const ve=wt(w);se&&rt(w)===!1?u.renderbufferStorageMultisample(36161,ve,35056,w.width,w.height):rt(w)?v.renderbufferStorageMultisampleEXT(36161,ve,35056,w.width,w.height):u.renderbufferStorage(36161,34041,w.width,w.height),u.framebufferRenderbuffer(36160,33306,36161,R)}else{const ve=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Se=0;Se<ve.length;Se++){const Ce=ve[Se],Xe=l.convert(Ce.format,Ce.encoding),be=l.convert(Ce.type),le=E(Ce.internalFormat,Xe,be,Ce.encoding),Fe=wt(w);se&&rt(w)===!1?u.renderbufferStorageMultisample(36161,Fe,le,w.width,w.height):rt(w)?v.renderbufferStorageMultisampleEXT(36161,Fe,le,w.width,w.height):u.renderbufferStorage(36161,le,w.width,w.height)}}u.bindRenderbuffer(36161,null)}function qe(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);const ve=s.get(w.depthTexture).__webglTexture,Se=wt(w);if(w.depthTexture.format===Lr)rt(w)?v.framebufferTexture2DMultisampleEXT(36160,36096,3553,ve,0,Se):u.framebufferTexture2D(36160,36096,3553,ve,0);else if(w.depthTexture.format===As)rt(w)?v.framebufferTexture2DMultisampleEXT(36160,33306,3553,ve,0,Se):u.framebufferTexture2D(36160,33306,3553,ve,0);else throw new Error("Unknown depthTexture format")}function Ge(R){const w=s.get(R),se=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");qe(w.__webglFramebuffer,R)}else if(se){w.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)n.bindFramebuffer(36160,w.__webglFramebuffer[ve]),w.__webglDepthbuffer[ve]=u.createRenderbuffer(),lt(w.__webglDepthbuffer[ve],R,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=u.createRenderbuffer(),lt(w.__webglDepthbuffer,R,!1);n.bindFramebuffer(36160,null)}function Dt(R,w,se){const ve=s.get(R);w!==void 0&&we(ve.__webglFramebuffer,R,R.texture,36064,3553),se!==void 0&&Ge(R)}function on(R){const w=R.texture,se=s.get(R),ve=s.get(w);R.addEventListener("dispose",me),R.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=u.createTexture()),ve.__version=w.version,d.memory.textures++);const Se=R.isWebGLCubeRenderTarget===!0,Ce=R.isWebGLMultipleRenderTargets===!0,Xe=I(R)||c;if(Se){se.__webglFramebuffer=[];for(let be=0;be<6;be++)se.__webglFramebuffer[be]=u.createFramebuffer()}else{if(se.__webglFramebuffer=u.createFramebuffer(),Ce)if(o.drawBuffers){const be=R.texture;for(let le=0,Fe=be.length;le<Fe;le++){const He=s.get(be[le]);He.__webglTexture===void 0&&(He.__webglTexture=u.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&R.samples>0&&rt(R)===!1){const be=Ce?w:[w];se.__webglMultisampledFramebuffer=u.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,se.__webglMultisampledFramebuffer);for(let le=0;le<be.length;le++){const Fe=be[le];se.__webglColorRenderbuffer[le]=u.createRenderbuffer(),u.bindRenderbuffer(36161,se.__webglColorRenderbuffer[le]);const He=l.convert(Fe.format,Fe.encoding),Ie=l.convert(Fe.type),Oe=E(Fe.internalFormat,He,Ie,Fe.encoding,R.isXRRenderTarget===!0),ke=wt(R);u.renderbufferStorageMultisample(36161,ke,Oe,R.width,R.height),u.framebufferRenderbuffer(36160,36064+le,36161,se.__webglColorRenderbuffer[le])}u.bindRenderbuffer(36161,null),R.depthBuffer&&(se.__webglDepthRenderbuffer=u.createRenderbuffer(),lt(se.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(36160,null)}}if(Se){n.bindTexture(34067,ve.__webglTexture),H(34067,w,Xe);for(let be=0;be<6;be++)we(se.__webglFramebuffer[be],R,w,36064,34069+be);G(w,Xe)&&W(34067),n.unbindTexture()}else if(Ce){const be=R.texture;for(let le=0,Fe=be.length;le<Fe;le++){const He=be[le],Ie=s.get(He);n.bindTexture(3553,Ie.__webglTexture),H(3553,He,Xe),we(se.__webglFramebuffer,R,He,36064+le,3553),G(He,Xe)&&W(3553)}n.unbindTexture()}else{let be=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(c?be=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(be,ve.__webglTexture),H(be,w,Xe),we(se.__webglFramebuffer,R,w,36064,be),G(w,Xe)&&W(be),n.unbindTexture()}R.depthBuffer&&Ge(R)}function It(R){const w=I(R)||c,se=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ve=0,Se=se.length;ve<Se;ve++){const Ce=se[ve];if(G(Ce,w)){const Xe=R.isWebGLCubeRenderTarget?34067:3553,be=s.get(Ce).__webglTexture;n.bindTexture(Xe,be),W(Xe),n.unbindTexture()}}}function Kt(R){if(c&&R.samples>0&&rt(R)===!1){const w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],se=R.width,ve=R.height;let Se=16384;const Ce=[],Xe=R.stencilBuffer?33306:36096,be=s.get(R),le=R.isWebGLMultipleRenderTargets===!0;if(le)for(let Fe=0;Fe<w.length;Fe++)n.bindFramebuffer(36160,be.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+Fe,36161,null),n.bindFramebuffer(36160,be.__webglFramebuffer),u.framebufferTexture2D(36009,36064+Fe,3553,null,0);n.bindFramebuffer(36008,be.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,be.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){Ce.push(36064+Fe),R.depthBuffer&&Ce.push(Xe);const He=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(He===!1&&(R.depthBuffer&&(Se|=256),R.stencilBuffer&&(Se|=1024)),le&&u.framebufferRenderbuffer(36008,36064,36161,be.__webglColorRenderbuffer[Fe]),He===!0&&(u.invalidateFramebuffer(36008,[Xe]),u.invalidateFramebuffer(36009,[Xe])),le){const Ie=s.get(w[Fe]).__webglTexture;u.framebufferTexture2D(36009,36064,3553,Ie,0)}u.blitFramebuffer(0,0,se,ve,0,0,se,ve,Se,9728),M&&u.invalidateFramebuffer(36008,Ce)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),le)for(let Fe=0;Fe<w.length;Fe++){n.bindFramebuffer(36160,be.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+Fe,36161,be.__webglColorRenderbuffer[Fe]);const He=s.get(w[Fe]).__webglTexture;n.bindFramebuffer(36160,be.__webglFramebuffer),u.framebufferTexture2D(36009,36064+Fe,3553,He,0)}n.bindFramebuffer(36009,be.__webglMultisampledFramebuffer)}}function wt(R){return Math.min(x,R.samples)}function rt(R){const w=s.get(R);return c&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function an(R){const w=d.render.frame;b.get(R)!==w&&(b.set(R,w),R.update())}function Bt(R,w){const se=R.encoding,ve=R.format,Se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Lc||se!==Nr&&(se===_t?c===!1?e.has("EXT_sRGB")===!0&&ve===ni?(R.format=Lc,R.minFilter=Wn,R.generateMipmaps=!1):w=kp.sRGBToLinear(w):(ve!==ni||Se!==Ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",se)),w}this.allocateTextureUnit=O,this.resetTextureUnits=ae,this.setTexture2D=Z,this.setTexture2DArray=z,this.setTexture3D=N,this.setTextureCube=J,this.rebindTextures=Dt,this.setupRenderTarget=on,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=we,this.useMultisampledRTT=rt}function zS(u,e,n){const s=n.isWebGL2;function o(l,d=null){let c;if(l===Ir)return 5121;if(l===T0)return 32819;if(l===C0)return 32820;if(l===M0)return 5120;if(l===w0)return 5122;if(l===Np)return 5123;if(l===E0)return 5124;if(l===br)return 5125;if(l===Ar)return 5126;if(l===Eo)return s?5131:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===b0)return 6406;if(l===ni)return 6408;if(l===A0)return 6409;if(l===L0)return 6410;if(l===Lr)return 6402;if(l===As)return 34041;if(l===Lc)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===P0)return 6403;if(l===R0)return 36244;if(l===D0)return 33319;if(l===I0)return 33320;if(l===N0)return 36249;if(l===Xu||l===ju||l===qu||l===Yu)if(d===_t)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===Xu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===ju)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===qu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===Xu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===ju)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===qu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Yu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Sh||l===Mh||l===wh||l===Eh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===Sh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Mh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===wh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Eh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===z0)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Th||l===Ch)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===Th)return d===_t?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===Ch)return d===_t?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===bh||l===Ah||l===Lh||l===Ph||l===Rh||l===Dh||l===Ih||l===Nh||l===zh||l===Fh||l===kh||l===Uh||l===Oh||l===Bh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===bh)return d===_t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Ah)return d===_t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Lh)return d===_t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Ph)return d===_t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Rh)return d===_t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Dh)return d===_t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Ih)return d===_t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Nh)return d===_t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===zh)return d===_t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Fh)return d===_t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===kh)return d===_t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Uh)return d===_t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===Oh)return d===_t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Bh)return d===_t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===$u)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===$u)return d===_t?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(l===F0||l===Vh||l===Gh||l===Wh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===$u)return c.COMPRESSED_RED_RGTC1_EXT;if(l===Vh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===Gh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===Wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Ts?s?34042:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):u[l]!==void 0?u[l]:null}return{convert:o}}class FS extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nr extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kS={type:"move"};class Mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let o=null,l=null,d=null;const c=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const y of e.hand.values()){const _=n.getJointPose(y,s),C=this._getHandJoint(p,y);_!==null&&(C.matrix.fromArray(_.transform.matrix),C.matrix.decompose(C.position,C.rotation,C.scale),C.jointRadius=_.radius),C.visible=_!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),M=.02,b=.005;p.inputState.pinching&&v>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,s),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1));c!==null&&(o=n.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(kS)))}return c!==null&&(c.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new nr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}class US extends Dn{constructor(e,n,s,o,l,d,c,m,p,g){if(g=g!==void 0?g:Lr,g!==Lr&&g!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Lr&&(s=br),s===void 0&&g===As&&(s=Ts),super(null,o,l,d,c,m,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:pn,this.minFilter=m!==void 0?m:pn,this.flipY=!1,this.generateMipmaps=!1}}class OS extends Ps{constructor(e,n){super();const s=this;let o=null,l=1,d=null,c="local-floor",m=1,p=null,g=null,x=null,v=null,M=null,b=null;const y=n.getContextAttributes();let _=null,C=null;const D=[],A=[],I=new Set,P=new Map,G=new Hn;G.layers.enable(1),G.viewport=new $t;const W=new Hn;W.layers.enable(2),W.viewport=new $t;const E=[G,W],F=new FS;F.layers.enable(1),F.layers.enable(2);let Y=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let J=D[N];return J===void 0&&(J=new Mc,D[N]=J),J.getTargetRaySpace()},this.getControllerGrip=function(N){let J=D[N];return J===void 0&&(J=new Mc,D[N]=J),J.getGripSpace()},this.getHand=function(N){let J=D[N];return J===void 0&&(J=new Mc,D[N]=J),J.getHandSpace()};function me(N){const J=A.indexOf(N.inputSource);if(J===-1)return;const ue=D[J];ue!==void 0&&ue.dispatchEvent({type:N.type,data:N.inputSource})}function q(){o.removeEventListener("select",me),o.removeEventListener("selectstart",me),o.removeEventListener("selectend",me),o.removeEventListener("squeeze",me),o.removeEventListener("squeezestart",me),o.removeEventListener("squeezeend",me),o.removeEventListener("end",q),o.removeEventListener("inputsourceschange",V);for(let N=0;N<D.length;N++){const J=A[N];J!==null&&(A[N]=null,D[N].disconnect(J))}Y=null,fe=null,e.setRenderTarget(_),M=null,v=null,x=null,o=null,C=null,z.stop(),s.isPresenting=!1,s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){l=N,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){c=N,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(N){p=N},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return x},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(N){if(o=N,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",me),o.addEventListener("selectstart",me),o.addEventListener("selectend",me),o.addEventListener("squeeze",me),o.addEventListener("squeezestart",me),o.addEventListener("squeezeend",me),o.addEventListener("end",q),o.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await n.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:o.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,n,J),o.updateRenderState({baseLayer:M}),C=new zr(M.framebufferWidth,M.framebufferHeight,{format:ni,type:Ir,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let J=null,ue=null,de=null;y.depth&&(de=y.stencil?35056:33190,J=y.stencil?As:Lr,ue=y.stencil?Ts:br);const H={colorFormat:32856,depthFormat:de,scaleFactor:l};x=new XRWebGLBinding(o,n),v=x.createProjectionLayer(H),o.updateRenderState({layers:[v]}),C=new zr(v.textureWidth,v.textureHeight,{format:ni,type:Ir,depthTexture:new US(v.textureWidth,v.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const Le=e.properties.get(C);Le.__ignoreDepthValues=v.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await o.requestReferenceSpace(c),z.setContext(o),z.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}};function V(N){for(let J=0;J<N.removed.length;J++){const ue=N.removed[J],de=A.indexOf(ue);de>=0&&(A[de]=null,D[de].disconnect(ue))}for(let J=0;J<N.added.length;J++){const ue=N.added[J];let de=A.indexOf(ue);if(de===-1){for(let Le=0;Le<D.length;Le++)if(Le>=A.length){A.push(ue),de=Le;break}else if(A[Le]===null){A[Le]=ue,de=Le;break}if(de===-1)break}const H=D[de];H&&H.connect(ue)}}const ne=new te,ce=new te;function ae(N,J,ue){ne.setFromMatrixPosition(J.matrixWorld),ce.setFromMatrixPosition(ue.matrixWorld);const de=ne.distanceTo(ce),H=J.projectionMatrix.elements,Le=ue.projectionMatrix.elements,ye=H[14]/(H[10]-1),Me=H[14]/(H[10]+1),we=(H[9]+1)/H[5],lt=(H[9]-1)/H[5],qe=(H[8]-1)/H[0],Ge=(Le[8]+1)/Le[0],Dt=ye*qe,on=ye*Ge,It=de/(-qe+Ge),Kt=It*-qe;J.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Kt),N.translateZ(It),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const wt=ye+It,rt=Me+It,an=Dt-Kt,Bt=on+(de-Kt),R=we*Me/rt*wt,w=lt*Me/rt*wt;N.projectionMatrix.makePerspective(an,Bt,R,w,wt,rt)}function O(N,J){J===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(J.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(o===null)return;F.near=W.near=G.near=N.near,F.far=W.far=G.far=N.far,(Y!==F.near||fe!==F.far)&&(o.updateRenderState({depthNear:F.near,depthFar:F.far}),Y=F.near,fe=F.far);const J=N.parent,ue=F.cameras;O(F,J);for(let H=0;H<ue.length;H++)O(ue[H],J);F.matrixWorld.decompose(F.position,F.quaternion,F.scale),N.matrix.copy(F.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const de=N.children;for(let H=0,Le=de.length;H<Le;H++)de[H].updateMatrixWorld(!0);ue.length===2?ae(F,G,W):F.projectionMatrix.copy(G.projectionMatrix)},this.getCamera=function(){return F},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(N){m=N,v!==null&&(v.fixedFoveation=N),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=N)},this.getPlanes=function(){return I};let ee=null;function Z(N,J){if(g=J.getViewerPose(p||d),b=J,g!==null){const ue=g.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let de=!1;ue.length!==F.cameras.length&&(F.cameras.length=0,de=!0);for(let H=0;H<ue.length;H++){const Le=ue[H];let ye=null;if(M!==null)ye=M.getViewport(Le);else{const we=x.getViewSubImage(v,Le);ye=we.viewport,H===0&&(e.setRenderTargetTextures(C,we.colorTexture,v.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(C))}let Me=E[H];Me===void 0&&(Me=new Hn,Me.layers.enable(H),Me.viewport=new $t,E[H]=Me),Me.matrix.fromArray(Le.transform.matrix),Me.projectionMatrix.fromArray(Le.projectionMatrix),Me.viewport.set(ye.x,ye.y,ye.width,ye.height),H===0&&F.matrix.copy(Me.matrix),de===!0&&F.cameras.push(Me)}}for(let ue=0;ue<D.length;ue++){const de=A[ue],H=D[ue];de!==null&&H!==void 0&&H.update(de,J,p||d)}if(ee&&ee(N,J),J.detectedPlanes){s.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let ue=null;for(const de of I)J.detectedPlanes.has(de)||(ue===null&&(ue=[]),ue.push(de));if(ue!==null)for(const de of ue)I.delete(de),P.delete(de),s.dispatchEvent({type:"planeremoved",data:de});for(const de of J.detectedPlanes)if(!I.has(de))I.add(de),P.set(de,J.lastChangedTime),s.dispatchEvent({type:"planeadded",data:de});else{const H=P.get(de);de.lastChangedTime>H&&(P.set(de,de.lastChangedTime),s.dispatchEvent({type:"planechanged",data:de}))}}b=null}const z=new qp;z.setAnimationLoop(Z),this.setAnimationLoop=function(N){ee=N},this.dispose=function(){}}}function BS(u,e){function n(y,_){_.color.getRGB(y.fogColor.value,Wp(u)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function s(y,_,C,D,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(y,_):_.isMeshToonMaterial?(o(y,_),g(y,_)):_.isMeshPhongMaterial?(o(y,_),p(y,_)):_.isMeshStandardMaterial?(o(y,_),x(y,_),_.isMeshPhysicalMaterial&&v(y,_,A)):_.isMeshMatcapMaterial?(o(y,_),M(y,_)):_.isMeshDepthMaterial?o(y,_):_.isMeshDistanceMaterial?(o(y,_),b(y,_)):_.isMeshNormalMaterial?o(y,_):_.isLineBasicMaterial?(l(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?c(y,_,C,D):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map),_.alphaMap&&(y.alphaMap.value=_.alphaMap),_.bumpMap&&(y.bumpMap.value=_.bumpMap,y.bumpScale.value=_.bumpScale,_.side===Rn&&(y.bumpScale.value*=-1)),_.displacementMap&&(y.displacementMap.value=_.displacementMap,y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap),_.normalMap&&(y.normalMap.value=_.normalMap,y.normalScale.value.copy(_.normalScale),_.side===Rn&&y.normalScale.value.negate()),_.specularMap&&(y.specularMap.value=_.specularMap),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const C=e.get(_).envMap;if(C&&(y.envMap.value=C,y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap){y.lightMap.value=_.lightMap;const I=u.physicallyCorrectLights!==!0?Math.PI:1;y.lightMapIntensity.value=_.lightMapIntensity*I}_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity);let D;_.map?D=_.map:_.specularMap?D=_.specularMap:_.displacementMap?D=_.displacementMap:_.normalMap?D=_.normalMap:_.bumpMap?D=_.bumpMap:_.roughnessMap?D=_.roughnessMap:_.metalnessMap?D=_.metalnessMap:_.alphaMap?D=_.alphaMap:_.emissiveMap?D=_.emissiveMap:_.clearcoatMap?D=_.clearcoatMap:_.clearcoatNormalMap?D=_.clearcoatNormalMap:_.clearcoatRoughnessMap?D=_.clearcoatRoughnessMap:_.iridescenceMap?D=_.iridescenceMap:_.iridescenceThicknessMap?D=_.iridescenceThicknessMap:_.specularIntensityMap?D=_.specularIntensityMap:_.specularColorMap?D=_.specularColorMap:_.transmissionMap?D=_.transmissionMap:_.thicknessMap?D=_.thicknessMap:_.sheenColorMap?D=_.sheenColorMap:_.sheenRoughnessMap&&(D=_.sheenRoughnessMap),D!==void 0&&(D.isWebGLRenderTarget&&(D=D.texture),D.matrixAutoUpdate===!0&&D.updateMatrix(),y.uvTransform.value.copy(D.matrix));let A;_.aoMap?A=_.aoMap:_.lightMap&&(A=_.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),y.uv2Transform.value.copy(A.matrix))}function l(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function c(y,_,C,D){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*C,y.scale.value=D*.5,_.map&&(y.map.value=_.map),_.alphaMap&&(y.alphaMap.value=_.alphaMap),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);let A;_.map?A=_.map:_.alphaMap&&(A=_.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),y.uvTransform.value.copy(A.matrix))}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map),_.alphaMap&&(y.alphaMap.value=_.alphaMap),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);let C;_.map?C=_.map:_.alphaMap&&(C=_.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),y.uvTransform.value.copy(C.matrix))}function p(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.roughness.value=_.roughness,y.metalness.value=_.metalness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap),e.get(_).envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function v(y,_,C){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap)),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),y.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===Rn&&y.clearcoatNormalScale.value.negate())),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap)),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap)}function M(y,_){_.matcap&&(y.matcap.value=_.matcap)}function b(y,_){y.referencePosition.value.copy(_.referencePosition),y.nearDistance.value=_.nearDistance,y.farDistance.value=_.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function VS(u,e,n,s){let o={},l={},d=[];const c=n.isWebGL2?u.getParameter(35375):0;function m(D,A){const I=A.program;s.uniformBlockBinding(D,I)}function p(D,A){let I=o[D.id];I===void 0&&(b(D),I=g(D),o[D.id]=I,D.addEventListener("dispose",_));const P=A.program;s.updateUBOMapping(D,P);const G=e.render.frame;l[D.id]!==G&&(v(D),l[D.id]=G)}function g(D){const A=x();D.__bindingPointIndex=A;const I=u.createBuffer(),P=D.__size,G=D.usage;return u.bindBuffer(35345,I),u.bufferData(35345,P,G),u.bindBuffer(35345,null),u.bindBufferBase(35345,A,I),I}function x(){for(let D=0;D<c;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const A=o[D.id],I=D.uniforms,P=D.__cache;u.bindBuffer(35345,A);for(let G=0,W=I.length;G<W;G++){const E=I[G];if(M(E,G,P)===!0){const F=E.__offset,Y=Array.isArray(E.value)?E.value:[E.value];let fe=0;for(let me=0;me<Y.length;me++){const q=Y[me],V=y(q);typeof q=="number"?(E.__data[0]=q,u.bufferSubData(35345,F+fe,E.__data)):q.isMatrix3?(E.__data[0]=q.elements[0],E.__data[1]=q.elements[1],E.__data[2]=q.elements[2],E.__data[3]=q.elements[0],E.__data[4]=q.elements[3],E.__data[5]=q.elements[4],E.__data[6]=q.elements[5],E.__data[7]=q.elements[0],E.__data[8]=q.elements[6],E.__data[9]=q.elements[7],E.__data[10]=q.elements[8],E.__data[11]=q.elements[0]):(q.toArray(E.__data,fe),fe+=V.storage/Float32Array.BYTES_PER_ELEMENT)}u.bufferSubData(35345,F,E.__data)}}u.bindBuffer(35345,null)}function M(D,A,I){const P=D.value;if(I[A]===void 0){if(typeof P=="number")I[A]=P;else{const G=Array.isArray(P)?P:[P],W=[];for(let E=0;E<G.length;E++)W.push(G[E].clone());I[A]=W}return!0}else if(typeof P=="number"){if(I[A]!==P)return I[A]=P,!0}else{const G=Array.isArray(I[A])?I[A]:[I[A]],W=Array.isArray(P)?P:[P];for(let E=0;E<G.length;E++){const F=G[E];if(F.equals(W[E])===!1)return F.copy(W[E]),!0}}return!1}function b(D){const A=D.uniforms;let I=0;const P=16;let G=0;for(let W=0,E=A.length;W<E;W++){const F=A[W],Y={boundary:0,storage:0},fe=Array.isArray(F.value)?F.value:[F.value];for(let me=0,q=fe.length;me<q;me++){const V=fe[me],ne=y(V);Y.boundary+=ne.boundary,Y.storage+=ne.storage}if(F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=I,W>0){G=I%P;const me=P-G;G!==0&&me-Y.boundary<0&&(I+=P-G,F.__offset=I)}I+=Y.storage}return G=I%P,G>0&&(I+=P-G),D.__size=I,D.__cache={},this}function y(D){const A={boundary:0,storage:0};return typeof D=="number"?(A.boundary=4,A.storage=4):D.isVector2?(A.boundary=8,A.storage=8):D.isVector3||D.isColor?(A.boundary=16,A.storage=12):D.isVector4?(A.boundary=16,A.storage=16):D.isMatrix3?(A.boundary=48,A.storage=48):D.isMatrix4?(A.boundary=64,A.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),A}function _(D){const A=D.target;A.removeEventListener("dispose",_);const I=d.indexOf(A.__bindingPointIndex);d.splice(I,1),u.deleteBuffer(o[A.id]),delete o[A.id],delete l[A.id]}function C(){for(const D in o)u.deleteBuffer(o[D]);d=[],o={},l={}}return{bind:m,update:p,dispose:C}}function GS(){const u=el("canvas");return u.style.display="block",u}function Qp(u={}){this.isWebGLRenderer=!0;const e=u.canvas!==void 0?u.canvas:GS(),n=u.context!==void 0?u.context:null,s=u.depth!==void 0?u.depth:!0,o=u.stencil!==void 0?u.stencil:!0,l=u.antialias!==void 0?u.antialias:!1,d=u.premultipliedAlpha!==void 0?u.premultipliedAlpha:!0,c=u.preserveDrawingBuffer!==void 0?u.preserveDrawingBuffer:!1,m=u.powerPreference!==void 0?u.powerPreference:"default",p=u.failIfMajorPerformanceCaveat!==void 0?u.failIfMajorPerformanceCaveat:!1;let g;n!==null?g=n.getContextAttributes().alpha:g=u.alpha!==void 0?u.alpha:!1;let x=null,v=null;const M=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Nr,this.physicallyCorrectLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;const y=this;let _=!1,C=0,D=0,A=null,I=-1,P=null;const G=new $t,W=new $t;let E=null,F=e.width,Y=e.height,fe=1,me=null,q=null;const V=new $t(0,0,F,Y),ne=new $t(0,0,F,Y);let ce=!1;const ae=new jp;let O=!1,ee=!1,Z=null;const z=new Zt,N=new pt,J=new te,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return A===null?fe:1}let H=n;function Le(T,K){for(let re=0;re<T.length;re++){const j=T[re],oe=e.getContext(j,K);if(oe!==null)return oe}return null}try{const T={alpha:!0,depth:s,stencil:o,antialias:l,premultipliedAlpha:d,preserveDrawingBuffer:c,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ic}`),e.addEventListener("webglcontextlost",Oe,!1),e.addEventListener("webglcontextrestored",ke,!1),e.addEventListener("webglcontextcreationerror",tt,!1),H===null){const K=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&K.shift(),H=Le(K,T),H===null)throw Le(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ye,Me,we,lt,qe,Ge,Dt,on,It,Kt,wt,rt,an,Bt,R,w,se,ve,Se,Ce,Xe,be,le,Fe;function He(){ye=new Jx(H),Me=new jx(H,ye,u),ye.init(Me),be=new zS(H,ye,Me),we=new IS(H,ye,Me),lt=new ny,qe=new xS,Ge=new NS(H,ye,we,qe,Me,be,lt),Dt=new Yx(y),on=new Qx(y),It=new c_(H,Me),le=new Hx(H,ye,It,Me),Kt=new ey(H,It,lt,le),wt=new oy(H,Kt,It,lt),Se=new sy(H,Me,Ge),w=new qx(qe),rt=new vS(y,Dt,on,ye,Me,le,w),an=new BS(y,qe),Bt=new SS,R=new bS(ye,Me),ve=new Wx(y,Dt,on,we,wt,g,d),se=new DS(y,wt,Me),Fe=new VS(H,lt,Me,we),Ce=new Xx(H,ye,lt,Me),Xe=new ty(H,ye,lt,Me),lt.programs=rt.programs,y.capabilities=Me,y.extensions=ye,y.properties=qe,y.renderLists=Bt,y.shadowMap=se,y.state=we,y.info=lt}He();const Ie=new OS(y,H);this.xr=Ie,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(T){T!==void 0&&(fe=T,this.setSize(F,Y,!1))},this.getSize=function(T){return T.set(F,Y)},this.setSize=function(T,K,re){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,Y=K,e.width=Math.floor(T*fe),e.height=Math.floor(K*fe),re!==!1&&(e.style.width=T+"px",e.style.height=K+"px"),this.setViewport(0,0,T,K)},this.getDrawingBufferSize=function(T){return T.set(F*fe,Y*fe).floor()},this.setDrawingBufferSize=function(T,K,re){F=T,Y=K,fe=re,e.width=Math.floor(T*re),e.height=Math.floor(K*re),this.setViewport(0,0,T,K)},this.getCurrentViewport=function(T){return T.copy(G)},this.getViewport=function(T){return T.copy(V)},this.setViewport=function(T,K,re,j){T.isVector4?V.set(T.x,T.y,T.z,T.w):V.set(T,K,re,j),we.viewport(G.copy(V).multiplyScalar(fe).floor())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,K,re,j){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,K,re,j),we.scissor(W.copy(ne).multiplyScalar(fe).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(T){we.setScissorTest(ce=T)},this.setOpaqueSort=function(T){me=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(T=!0,K=!0,re=!0){let j=0;T&&(j|=16384),K&&(j|=256),re&&(j|=1024),H.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",ke,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Bt.dispose(),R.dispose(),qe.dispose(),Dt.dispose(),on.dispose(),wt.dispose(),le.dispose(),Fe.dispose(),rt.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Te),Ie.removeEventListener("sessionend",ze),Z&&(Z.dispose(),Z=null),st.stop()};function Oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const T=lt.autoReset,K=se.enabled,re=se.autoUpdate,j=se.needsUpdate,oe=se.type;He(),lt.autoReset=T,se.enabled=K,se.autoUpdate=re,se.needsUpdate=j,se.type=oe}function tt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ct(T){const K=T.target;K.removeEventListener("dispose",ct),Et(K)}function Et(T){B(T),qe.remove(T)}function B(T){const K=qe.get(T).programs;K!==void 0&&(K.forEach(function(re){rt.releaseProgram(re)}),T.isShaderMaterial&&rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,K,re,j,oe,Ue){K===null&&(K=ue);const We=oe.isMesh&&oe.matrixWorld.determinant()<0,$e=sr(T,K,re,j,oe);we.setMaterial(j,We);let Ze=re.index,it=1;j.wireframe===!0&&(Ze=Kt.getWireframeAttribute(re),it=2);const Je=re.drawRange,et=re.attributes.position;let xt=Je.start*it,Qt=(Je.start+Je.count)*it;Ue!==null&&(xt=Math.max(xt,Ue.start*it),Qt=Math.min(Qt,(Ue.start+Ue.count)*it)),Ze!==null?(xt=Math.max(xt,0),Qt=Math.min(Qt,Ze.count)):et!=null&&(xt=Math.max(xt,0),Qt=Math.min(Qt,et.count));const Xn=Qt-xt;if(Xn<0||Xn===1/0)return;le.setup(oe,j,$e,re,Ze);let hi,Ye=Ce;if(Ze!==null&&(hi=It.get(Ze),Ye=Xe,Ye.setIndex(hi)),oe.isMesh)j.wireframe===!0?(we.setLineWidth(j.wireframeLinewidth*de()),Ye.setMode(1)):Ye.setMode(4);else if(oe.isLine){let nt=j.linewidth;nt===void 0&&(nt=1),we.setLineWidth(nt*de()),oe.isLineSegments?Ye.setMode(1):oe.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else oe.isPoints?Ye.setMode(0):oe.isSprite&&Ye.setMode(4);if(oe.isInstancedMesh)Ye.renderInstances(xt,Xn,oe.count);else if(re.isInstancedBufferGeometry){const nt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ar=Math.min(re.instanceCount,nt);Ye.renderInstances(xt,Xn,ar)}else Ye.render(xt,Xn)},this.compile=function(T,K){function re(j,oe,Ue){j.transparent===!0&&j.side===tr&&j.forceSinglePass===!1?(j.side=Rn,j.needsUpdate=!0,Vt(j,oe,Ue),j.side=rr,j.needsUpdate=!0,Vt(j,oe,Ue),j.side=tr):Vt(j,oe,Ue)}v=R.get(T),v.init(),b.push(v),T.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights(y.physicallyCorrectLights),T.traverse(function(j){const oe=j.material;if(oe)if(Array.isArray(oe))for(let Ue=0;Ue<oe.length;Ue++){const We=oe[Ue];re(We,T,j)}else re(oe,T,j)}),b.pop(),v=null};let ie=null;function ge(T){ie&&ie(T)}function Te(){st.stop()}function ze(){st.start()}const st=new qp;st.setAnimationLoop(ge),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(T){ie=T,Ie.setAnimationLoop(T),T===null?st.stop():st.start()},Ie.addEventListener("sessionstart",Te),Ie.addEventListener("sessionend",ze),this.render=function(T,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(K),K=Ie.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,K,A),v=R.get(T,b.length),v.init(),b.push(v),z.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ae.setFromProjectionMatrix(z),ee=this.localClippingEnabled,O=w.init(this.clippingPlanes,ee),x=Bt.get(T,M.length),x.init(),M.push(x),bt(T,K,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(me,q),O===!0&&w.beginShadows();const re=v.state.shadowsArray;if(se.render(re,T,K),O===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(x,T),v.setupLights(y.physicallyCorrectLights),K.isArrayCamera){const j=K.cameras;for(let oe=0,Ue=j.length;oe<Ue;oe++){const We=j[oe];Nt(x,T,We,We.viewport)}}else Nt(x,T,K);A!==null&&(Ge.updateMultisampleRenderTarget(A),Ge.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(y,T,K),le.resetDefaultState(),I=-1,P=null,b.pop(),b.length>0?v=b[b.length-1]:v=null,M.pop(),M.length>0?x=M[M.length-1]:x=null};function bt(T,K,re,j){if(T.visible===!1)return;if(T.layers.test(K.layers)){if(T.isGroup)re=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(K);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ae.intersectsSprite(T)){j&&J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(z);const We=wt.update(T),$e=T.material;$e.visible&&x.push(T,We,$e,re,J.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==lt.render.frame&&(T.skeleton.update(),T.skeleton.frame=lt.render.frame),!T.frustumCulled||ae.intersectsObject(T))){j&&J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(z);const We=wt.update(T),$e=T.material;if(Array.isArray($e)){const Ze=We.groups;for(let it=0,Je=Ze.length;it<Je;it++){const et=Ze[it],xt=$e[et.materialIndex];xt&&xt.visible&&x.push(T,We,xt,re,J.z,et)}}else $e.visible&&x.push(T,We,$e,re,J.z,null)}}const Ue=T.children;for(let We=0,$e=Ue.length;We<$e;We++)bt(Ue[We],K,re,j)}function Nt(T,K,re,j){const oe=T.opaque,Ue=T.transmissive,We=T.transparent;v.setupLightsView(re),O===!0&&w.setGlobalState(y.clippingPlanes,re),Ue.length>0&&ii(oe,K,re),j&&we.viewport(G.copy(j)),oe.length>0&&ft(oe,K,re),Ue.length>0&&ft(Ue,K,re),We.length>0&&ft(We,K,re),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ii(T,K,re){const j=Me.isWebGL2;Z===null&&(Z=new zr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Eo:Ir,minFilter:wo,samples:j&&l===!0?4:0})),y.getDrawingBufferSize(N),j?Z.setSize(N.x,N.y):Z.setSize(Pc(N.x),Pc(N.y));const oe=y.getRenderTarget();y.setRenderTarget(Z),y.clear();const Ue=y.toneMapping;y.toneMapping=Li,ft(T,K,re),y.toneMapping=Ue,Ge.updateMultisampleRenderTarget(Z),Ge.updateRenderTargetMipmap(Z),y.setRenderTarget(oe)}function ft(T,K,re){const j=K.isScene===!0?K.overrideMaterial:null;for(let oe=0,Ue=T.length;oe<Ue;oe++){const We=T[oe],$e=We.object,Ze=We.geometry,it=j===null?We.material:j,Je=We.group;$e.layers.test(re.layers)&&Nn($e,K,re,Ze,it,Je)}}function Nn(T,K,re,j,oe,Ue){T.onBeforeRender(y,K,re,j,oe,Ue),T.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),oe.onBeforeRender(y,K,re,j,T,Ue),oe.transparent===!0&&oe.side===tr&&oe.forceSinglePass===!1?(oe.side=Rn,oe.needsUpdate=!0,y.renderBufferDirect(re,K,j,oe,T,Ue),oe.side=rr,oe.needsUpdate=!0,y.renderBufferDirect(re,K,j,oe,T,Ue),oe.side=tr):y.renderBufferDirect(re,K,j,oe,T,Ue),T.onAfterRender(y,K,re,j,oe,Ue)}function Vt(T,K,re){K.isScene!==!0&&(K=ue);const j=qe.get(T),oe=v.state.lights,Ue=v.state.shadowsArray,We=oe.state.version,$e=rt.getParameters(T,oe.state,Ue,K,re),Ze=rt.getProgramCacheKey($e);let it=j.programs;j.environment=T.isMeshStandardMaterial?K.environment:null,j.fog=K.fog,j.envMap=(T.isMeshStandardMaterial?on:Dt).get(T.envMap||j.environment),it===void 0&&(T.addEventListener("dispose",ct),it=new Map,j.programs=it);let Je=it.get(Ze);if(Je!==void 0){if(j.currentProgram===Je&&j.lightsStateVersion===We)return Or(T,$e),Je}else $e.uniforms=rt.getUniforms(T),T.onBuild(re,$e,y),T.onBeforeCompile($e,y),Je=rt.acquireProgram($e,Ze),it.set(Ze,Je),j.uniforms=$e.uniforms;const et=j.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(et.clippingPlanes=w.uniform),Or(T,$e),j.needsLights=or(T),j.lightsStateVersion=We,j.needsLights&&(et.ambientLightColor.value=oe.state.ambient,et.lightProbe.value=oe.state.probe,et.directionalLights.value=oe.state.directional,et.directionalLightShadows.value=oe.state.directionalShadow,et.spotLights.value=oe.state.spot,et.spotLightShadows.value=oe.state.spotShadow,et.rectAreaLights.value=oe.state.rectArea,et.ltc_1.value=oe.state.rectAreaLTC1,et.ltc_2.value=oe.state.rectAreaLTC2,et.pointLights.value=oe.state.point,et.pointLightShadows.value=oe.state.pointShadow,et.hemisphereLights.value=oe.state.hemi,et.directionalShadowMap.value=oe.state.directionalShadowMap,et.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,et.spotShadowMap.value=oe.state.spotShadowMap,et.spotLightMatrix.value=oe.state.spotLightMatrix,et.spotLightMap.value=oe.state.spotLightMap,et.pointShadowMap.value=oe.state.pointShadowMap,et.pointShadowMatrix.value=oe.state.pointShadowMatrix);const xt=Je.getUniforms(),Qt=Ja.seqWithValue(xt.seq,et);return j.currentProgram=Je,j.uniformsList=Qt,Je}function Or(T,K){const re=qe.get(T);re.outputEncoding=K.outputEncoding,re.instancing=K.instancing,re.skinning=K.skinning,re.morphTargets=K.morphTargets,re.morphNormals=K.morphNormals,re.morphColors=K.morphColors,re.morphTargetsCount=K.morphTargetsCount,re.numClippingPlanes=K.numClippingPlanes,re.numIntersection=K.numClipIntersection,re.vertexAlphas=K.vertexAlphas,re.vertexTangents=K.vertexTangents,re.toneMapping=K.toneMapping}function sr(T,K,re,j,oe){K.isScene!==!0&&(K=ue),Ge.resetTextureUnits();const Ue=K.fog,We=j.isMeshStandardMaterial?K.environment:null,$e=A===null?y.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:Nr,Ze=(j.isMeshStandardMaterial?on:Dt).get(j.envMap||We),it=j.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Je=!!j.normalMap&&!!re.attributes.tangent,et=!!re.morphAttributes.position,xt=!!re.morphAttributes.normal,Qt=!!re.morphAttributes.color,Xn=j.toneMapped?y.toneMapping:Li,hi=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ye=hi!==void 0?hi.length:0,nt=qe.get(j),ar=v.state.lights;if(O===!0&&(ee===!0||T!==P)){const un=T===P&&j.id===I;w.setState(j,T,un)}let At=!1;j.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==ar.state.version||nt.outputEncoding!==$e||oe.isInstancedMesh&&nt.instancing===!1||!oe.isInstancedMesh&&nt.instancing===!0||oe.isSkinnedMesh&&nt.skinning===!1||!oe.isSkinnedMesh&&nt.skinning===!0||nt.envMap!==Ze||j.fog===!0&&nt.fog!==Ue||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==w.numPlanes||nt.numIntersection!==w.numIntersection)||nt.vertexAlphas!==it||nt.vertexTangents!==Je||nt.morphTargets!==et||nt.morphNormals!==xt||nt.morphColors!==Qt||nt.toneMapping!==Xn||Me.isWebGL2===!0&&nt.morphTargetsCount!==Ye)&&(At=!0):(At=!0,nt.__version=j.version);let zn=nt.currentProgram;At===!0&&(zn=Vt(j,K,oe));let Lo=!1,Pi=!1,Ri=!1;const dt=zn.getUniforms(),pi=nt.uniforms;if(we.useProgram(zn.program)&&(Lo=!0,Pi=!0,Ri=!0),j.id!==I&&(I=j.id,Pi=!0),Lo||P!==T){if(dt.setValue(H,"projectionMatrix",T.projectionMatrix),Me.logarithmicDepthBuffer&&dt.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),P!==T&&(P=T,Pi=!0,Ri=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){const un=dt.map.cameraPosition;un!==void 0&&un.setValue(H,J.setFromMatrixPosition(T.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&dt.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||oe.isSkinnedMesh)&&dt.setValue(H,"viewMatrix",T.matrixWorldInverse)}if(oe.isSkinnedMesh){dt.setOptional(H,oe,"bindMatrix"),dt.setOptional(H,oe,"bindMatrixInverse");const un=oe.skeleton;un&&(Me.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),dt.setValue(H,"boneTexture",un.boneTexture,Ge),dt.setValue(H,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ln=re.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0&&Me.isWebGL2===!0)&&Se.update(oe,re,j,zn),(Pi||nt.receiveShadow!==oe.receiveShadow)&&(nt.receiveShadow=oe.receiveShadow,dt.setValue(H,"receiveShadow",oe.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(pi.envMap.value=Ze,pi.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),Pi&&(dt.setValue(H,"toneMappingExposure",y.toneMappingExposure),nt.needsLights&&sl(pi,Ri),Ue&&j.fog===!0&&an.refreshFogUniforms(pi,Ue),an.refreshMaterialUniforms(pi,j,fe,Y,Z),Ja.upload(H,nt.uniformsList,pi,Ge)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ja.upload(H,nt.uniformsList,pi,Ge),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&dt.setValue(H,"center",oe.center),dt.setValue(H,"modelViewMatrix",oe.modelViewMatrix),dt.setValue(H,"normalMatrix",oe.normalMatrix),dt.setValue(H,"modelMatrix",oe.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const un=j.uniformsGroups;for(let Ds=0,ol=un.length;Ds<ol;Ds++)if(Me.isWebGL2){const lr=un[Ds];Fe.update(lr,zn),Fe.bind(lr,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function sl(T,K){T.ambientLightColor.needsUpdate=K,T.lightProbe.needsUpdate=K,T.directionalLights.needsUpdate=K,T.directionalLightShadows.needsUpdate=K,T.pointLights.needsUpdate=K,T.pointLightShadows.needsUpdate=K,T.spotLights.needsUpdate=K,T.spotLightShadows.needsUpdate=K,T.rectAreaLights.needsUpdate=K,T.hemisphereLights.needsUpdate=K}function or(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,K,re){qe.get(T.texture).__webglTexture=K,qe.get(T.depthTexture).__webglTexture=re;const j=qe.get(T);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=re===void 0,j.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,K){const re=qe.get(T);re.__webglFramebuffer=K,re.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(T,K=0,re=0){A=T,C=K,D=re;let j=!0,oe=null,Ue=!1,We=!1;if(T){const Ze=qe.get(T);Ze.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(36160,null),j=!1):Ze.__webglFramebuffer===void 0?Ge.setupRenderTarget(T):Ze.__hasExternalTextures&&Ge.rebindTextures(T,qe.get(T.texture).__webglTexture,qe.get(T.depthTexture).__webglTexture);const it=T.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(We=!0);const Je=qe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(oe=Je[K],Ue=!0):Me.isWebGL2&&T.samples>0&&Ge.useMultisampledRTT(T)===!1?oe=qe.get(T).__webglMultisampledFramebuffer:oe=Je,G.copy(T.viewport),W.copy(T.scissor),E=T.scissorTest}else G.copy(V).multiplyScalar(fe).floor(),W.copy(ne).multiplyScalar(fe).floor(),E=ce;if(we.bindFramebuffer(36160,oe)&&Me.drawBuffers&&j&&we.drawBuffers(T,oe),we.viewport(G),we.scissor(W),we.setScissorTest(E),Ue){const Ze=qe.get(T.texture);H.framebufferTexture2D(36160,36064,34069+K,Ze.__webglTexture,re)}else if(We){const Ze=qe.get(T.texture),it=K||0;H.framebufferTextureLayer(36160,36064,Ze.__webglTexture,re||0,it)}I=-1},this.readRenderTargetPixels=function(T,K,re,j,oe,Ue,We){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=qe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&We!==void 0&&($e=$e[We]),$e){we.bindFramebuffer(36160,$e);try{const Ze=T.texture,it=Ze.format,Je=Ze.type;if(it!==ni&&be.convert(it)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const et=Je===Eo&&(ye.has("EXT_color_buffer_half_float")||Me.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Je!==Ir&&be.convert(Je)!==H.getParameter(35738)&&!(Je===Ar&&(Me.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=T.width-j&&re>=0&&re<=T.height-oe&&H.readPixels(K,re,j,oe,be.convert(it),be.convert(Je),Ue)}finally{const Ze=A!==null?qe.get(A).__webglFramebuffer:null;we.bindFramebuffer(36160,Ze)}}},this.copyFramebufferToTexture=function(T,K,re=0){const j=Math.pow(2,-re),oe=Math.floor(K.image.width*j),Ue=Math.floor(K.image.height*j);Ge.setTexture2D(K,0),H.copyTexSubImage2D(3553,re,0,0,T.x,T.y,oe,Ue),we.unbindTexture()},this.copyTextureToTexture=function(T,K,re,j=0){const oe=K.image.width,Ue=K.image.height,We=be.convert(re.format),$e=be.convert(re.type);Ge.setTexture2D(re,0),H.pixelStorei(37440,re.flipY),H.pixelStorei(37441,re.premultiplyAlpha),H.pixelStorei(3317,re.unpackAlignment),K.isDataTexture?H.texSubImage2D(3553,j,T.x,T.y,oe,Ue,We,$e,K.image.data):K.isCompressedTexture?H.compressedTexSubImage2D(3553,j,T.x,T.y,K.mipmaps[0].width,K.mipmaps[0].height,We,K.mipmaps[0].data):H.texSubImage2D(3553,j,T.x,T.y,We,$e,K.image),j===0&&re.generateMipmaps&&H.generateMipmap(3553),we.unbindTexture()},this.copyTextureToTexture3D=function(T,K,re,j,oe=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=T.max.x-T.min.x+1,We=T.max.y-T.min.y+1,$e=T.max.z-T.min.z+1,Ze=be.convert(j.format),it=be.convert(j.type);let Je;if(j.isData3DTexture)Ge.setTexture3D(j,0),Je=32879;else if(j.isDataArrayTexture)Ge.setTexture2DArray(j,0),Je=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,j.flipY),H.pixelStorei(37441,j.premultiplyAlpha),H.pixelStorei(3317,j.unpackAlignment);const et=H.getParameter(3314),xt=H.getParameter(32878),Qt=H.getParameter(3316),Xn=H.getParameter(3315),hi=H.getParameter(32877),Ye=re.isCompressedTexture?re.mipmaps[0]:re.image;H.pixelStorei(3314,Ye.width),H.pixelStorei(32878,Ye.height),H.pixelStorei(3316,T.min.x),H.pixelStorei(3315,T.min.y),H.pixelStorei(32877,T.min.z),re.isDataTexture||re.isData3DTexture?H.texSubImage3D(Je,oe,K.x,K.y,K.z,Ue,We,$e,Ze,it,Ye.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Je,oe,K.x,K.y,K.z,Ue,We,$e,Ze,Ye.data)):H.texSubImage3D(Je,oe,K.x,K.y,K.z,Ue,We,$e,Ze,it,Ye),H.pixelStorei(3314,et),H.pixelStorei(32878,xt),H.pixelStorei(3316,Qt),H.pixelStorei(3315,Xn),H.pixelStorei(32877,hi),oe===0&&j.generateMipmaps&&H.generateMipmap(Je),we.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ge.setTextureCube(T,0):T.isData3DTexture?Ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ge.setTexture2DArray(T,0):Ge.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){C=0,D=0,A=null,we.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class WS extends Qp{}WS.prototype.isWebGL1Renderer=!0;class HS extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);class Dr{constructor(e,n){Ct(this,"min");Ct(this,"max");const s=e||new te(0,0,0);this.min=new te(s.x-n/2,s.y-n/2,s.z-n/2),this.max=new te(s.x+n/2,s.y+n/2,s.z+n/2)}intersects(e){return this.min.x<=e.max.x&&this.max.x>=e.min.x&&this.min.y<=e.max.y&&this.max.y>=e.min.y&&this.min.z<=e.max.z&&this.max.z>=e.min.z}}class XS{constructor(e){Ct(this,"mesh");Ct(this,"aabb");Ct(this,"velocityY",0);Ct(this,"isJumping",!1);Ct(this,"isSliding",!1);this.mesh=new nr;const n=new di(1,2,1),s=new Fr({color:16724787}),o=new Pn(n,s);o.position.y=1,this.mesh.add(o),this.mesh.position.y=.375,this.aabb=new Dr(this.mesh.position,1),e.add(this.mesh)}update(){this.isJumping?(this.mesh.position.y+=this.velocityY,this.velocityY-=.01,this.mesh.position.y<=.375&&(this.mesh.position.y=.375,this.isJumping=!1,this.velocityY=0)):this.isSliding?this.mesh.position.y=0:this.mesh.position.y=.375,this.updateAABB()}updateAABB(){this.aabb=new Dr(this.mesh.position,1)}jump(){!this.isJumping&&!this.isSliding&&(this.velocityY=.2,this.isJumping=!0)}slide(){this.isJumping||(this.isSliding=!0,setTimeout(()=>this.isSliding=!1,300))}moveLeft(){this.mesh.position.x=Math.max(-1,this.mesh.position.x-1)}moveRight(){this.mesh.position.x=Math.min(1,this.mesh.position.x+1)}reset(){this.mesh.position.set(0,.375,0),this.velocityY=0,this.isJumping=!1,this.isSliding=!1}}class jS{constructor(e){Ct(this,"scene");Ct(this,"segments",[]);Ct(this,"pool",[]);Ct(this,"initialized",!1);this.scene=e}generateInitial(){if(!this.initialized){for(let e=0;e<20;e++)this.spawnSegment(-e*3);this.initialized=!0}}spawnSegment(e){let n;this.pool.length>0?(n=this.pool.pop(),n&&n.mesh?(n.mesh.position.set(0,0,e),this.scene.children.includes(n.mesh)||this.scene.add(n.mesh)):n=this.createNewSegment(e)):n=this.createNewSegment(e),this.segments.push({mesh:n.mesh,aabb:new Dr(n.mesh.position,3)})}createNewSegment(e){const n=new nr,s=new Pn(new di(3,.2,3),new Fr({color:6710886})),o=new Pn(new di(3,.2,3),new Fr({color:52224}));return o.position.y=.2,n.add(s,o),n.position.set(0,0,e),this.scene.add(n),{mesh:n,aabb:new Dr(n.position,3)}}update(e,n){this.segments.forEach(s=>{s.mesh.position.z+=e}),this.segments=this.segments.filter(s=>s.mesh.position.z>10?(this.scene.remove(s.mesh),this.pool.push(s),!1):!0),this.segments.length>0&&n<this.segments[this.segments.length-1].mesh.position.z-20&&this.spawnSegment(this.segments[this.segments.length-1].mesh.position.z-3)}reset(){this.segments.forEach((e,n)=>{e.mesh.position.set(0,0,-n*3),e.aabb=new Dr(e.mesh.position,3)})}}class qS{constructor(e){Ct(this,"scene");Ct(this,"obstacles",[]);Ct(this,"pool",[]);this.scene=e}spawn(e){let n;if(this.pool.length>0)n=this.pool.pop(),n.mesh.position.set(0,.5,e);else{n=new nr;const s=new Fr({color:9127187}),o=new Pn(new di(1,1,1),s);n.add(o),n.position.set(0,.5,e),this.scene.add(n)}this.obstacles.push({mesh:n,aabb:new Dr(n.position,1)})}update(e){this.obstacles.forEach(n=>{n.mesh.position.z+=e}),this.obstacles=this.obstacles.filter(n=>n.mesh.position.z>10?(this.scene.remove(n.mesh),this.pool.push(n),!1):!0),Math.random()<.01&&this.spawn(this.obstacles.length?this.obstacles[this.obstacles.length-1].mesh.position.z-10:-10)}reset(){this.obstacles.forEach(e=>this.scene.remove(e.mesh)),this.pool.push(...this.obstacles),this.obstacles=[],this.spawn(-10)}}class YS{constructor(e){Ct(this,"scene");Ct(this,"coins",[]);Ct(this,"pool",[]);this.scene=e}spawnCoin(e){let n;if(this.pool.length>0)n=this.pool.pop(),n.mesh.position.set(0,.5,e);else{n=new nr;const s=new Fr({color:16776960}),o=new Pn(new di(.5,.5,.5),s);n.add(o),n.position.set(0,.5,e),this.scene.add(n)}this.coins.push({mesh:n,aabb:new Dr(n.position,.5)})}update(e){this.coins.forEach(n=>{n.mesh.position.z+=e}),this.coins=this.coins.filter(n=>n.mesh.position.z>10?(this.scene.remove(n.mesh),this.pool.push(n),!1):!0),Math.random()<.01&&this.spawnCoin(this.coins.length?this.coins[this.coins.length-1].mesh.position.z-5:-5)}reset(){this.coins.forEach(e=>this.scene.remove(e.mesh)),this.pool.push(...this.coins),this.coins=[],this.spawnCoin(-5)}}class $S{constructor(e,n,s,o){Ct(this,"player");Ct(this,"path");Ct(this,"obstacles");Ct(this,"collectibles");this.player=e,this.path=n,this.obstacles=s,this.collectibles=o}check(){this.player.updateAABB();for(const e of this.obstacles.obstacles)if(this.player.aabb.intersects(e.aabb)&&!this.player.isSliding)return"gameOver";for(let e=this.collectibles.coins.length-1;e>=0;e--){const n=this.collectibles.coins[e];if(this.player.aabb.intersects(n.aabb))return this.collectibles.coins.splice(e,1),this.scene.remove(n.mesh),this.collectibles.pool.push(n),"coin"}if(!this.player.isJumping){let e=!1;for(const n of this.path.segments)if(this.player.aabb.intersects(n.aabb)){e=!0;break}if(!e)return"gameOver"}return"running"}get scene(){return this.collectibles.scene}}var wc={exports:{}},yo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function ZS(){if(Cp)return yo;Cp=1;var u=Dc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(c,m,p){var g,x={},v=null,M=null;p!==void 0&&(v=""+p),m.key!==void 0&&(v=""+m.key),m.ref!==void 0&&(M=m.ref);for(g in m)s.call(m,g)&&!l.hasOwnProperty(g)&&(x[g]=m[g]);if(c&&c.defaultProps)for(g in m=c.defaultProps,m)x[g]===void 0&&(x[g]=m[g]);return{$$typeof:e,type:c,key:v,ref:M,props:x,_owner:o.current}}return yo.Fragment=n,yo.jsx=d,yo.jsxs=d,yo}var bp;function KS(){return bp||(bp=1,wc.exports=ZS()),wc.exports}var Jp=KS();const sn=Jp.jsx,ci=Jp.jsxs,QS=({score:u,coins:e,gameState:n})=>ci("div",{className:"absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center text-white pointer-events-none",children:[ci("div",{className:"flex flex-col items-center mt-4",children:[ci("div",{className:"text-lg md:text-2xl",children:["Score: ",u]}),ci("div",{className:"text-lg md:text-2xl",children:["Coins: ",e]})]}),n==="waiting"&&sn("div",{className:"text-xl md:text-3xl",children:"Swipe to Start"})]}),JS=({score:u,onReplay:e,onShowQR:n})=>{const s=Yt.useRef(null),o=Yt.useRef(null);return Yt.useEffect(()=>{const l=p=>{p.preventDefault(),e()},d=p=>{p.preventDefault(),n()},c=s.current,m=o.current;return c&&c.addEventListener("touchend",l,{passive:!1}),m&&m.addEventListener("touchend",d,{passive:!1}),()=>{c&&c.removeEventListener("touchend",l),m&&m.removeEventListener("touchend",d)}},[e,n]),ci("div",{className:"absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 text-white",children:[sn("h1",{className:"text-2xl md:text-4xl mb-4",children:"Game Over"}),ci("div",{className:"text-lg md:text-2xl mb-4",children:["Score: ",u]}),ci("div",{className:"flex flex-col md:flex-row gap-4",children:[sn("button",{ref:s,onClick:e,className:"px-4 py-2 md:px-6 md:py-3 text-lg md:text-xl bg-cyan-500 hover:bg-cyan-600 rounded pointer-events-auto touch-none",children:"Replay"}),sn("button",{ref:o,onClick:n,className:"px-4 py-2 md:px-6 md:py-3 text-lg md:text-xl bg-green-500 hover:bg-green-600 rounded pointer-events-auto touch-none",children:"Show QR Code"})]})]})},eM=({onClose:u})=>{const e=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent("https://cubic-temple-run.vercel.app/")}`;return sn("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:ci("div",{className:"bg-white p-6 rounded-lg shadow-lg flex flex-col items-center",children:[sn("h2",{className:"text-xl md:text-2xl mb-4 text-black",children:"Scan to Play"}),sn("img",{src:e,alt:"QR Code",className:"w-32 h-32 md:w-40 md:h-40 mb-4"}),sn("button",{onClick:u,className:"px-4 py-2 text-lg bg-red-500 hover:bg-red-600 text-white rounded",children:"Close"})]})})},tM=()=>{const u=Yt.useRef(null),[e,n]=Yt.useState("waiting"),[s,o]=Yt.useState(0),[l,d]=Yt.useState(0),[c,m]=Yt.useState(!1),p=Yt.useRef(null),g=Yt.useRef(null),x=Yt.useRef(null),v=Yt.useRef(null),M=Yt.useRef(null),b=Yt.useRef(.1),y=Yt.useRef(0);Yt.useEffect(()=>{var q;const D=new HS,A=new Hn(75,window.innerWidth/window.innerHeight,.1,1e3);A.position.set(0,5,5),A.lookAt(0,0,0);const I=new Qp({antialias:!0});I.setSize(window.innerWidth,window.innerHeight),I.setPixelRatio(window.devicePixelRatio),(q=u.current)==null||q.appendChild(I.domElement),p.current=new XS(D),g.current=new jS(D),x.current=new qS(D),v.current=new YS(D),M.current=new $S(p.current,g.current,x.current,v.current),g.current.generateInitial(),x.current.spawn(-10),v.current.spawnCoin(-5);const P=()=>{const V=window.innerWidth,ne=window.innerHeight;I.setSize(V,ne),A.aspect=V/ne,A.updateProjectionMatrix()};window.addEventListener("resize",P);let G=0,W=0;const E=50,F=V=>{V.preventDefault();const ne=V.touches[0];G=ne.clientX,W=ne.clientY},Y=V=>{V.preventDefault();const ne=V.changedTouches[0],ce=ne.clientX-G,ae=ne.clientY-W,O=Math.abs(ce),ee=Math.abs(ae);O<E&&ee<E||(e==="waiting"&&n("running"),e==="running"&&p.current&&(O>ee?ce>0?p.current.moveRight():p.current.moveLeft():ae>0?p.current.slide():p.current.jump()))};window.addEventListener("touchstart",F),window.addEventListener("touchend",Y);const fe=V=>{if(e==="waiting"&&V.key==="ArrowUp"&&n("running"),e==="running"&&p.current)switch(V.key){case"ArrowLeft":p.current.moveLeft();break;case"ArrowRight":p.current.moveRight();break;case"ArrowUp":p.current.jump();break;case"ArrowDown":p.current.slide();break}};window.addEventListener("keydown",fe);const me=()=>{var V,ne,ce,ae,O,ee,Z;if(requestAnimationFrame(me),e==="running"){y.current+=b.current,o(Math.floor(y.current*10)),(V=p.current)==null||V.update(),(ce=g.current)==null||ce.update(b.current,((ne=p.current)==null?void 0:ne.mesh.position.z)||0),(ae=x.current)==null||ae.update(b.current),(O=v.current)==null||O.update(b.current);const z=(ee=M.current)==null?void 0:ee.check();z==="gameOver"?n("gameOver"):z==="coin"&&d(N=>N+1),A.position.z=(((Z=p.current)==null?void 0:Z.mesh.position.z)||0)+5}I.render(D,A)};return me(),()=>{var V;window.removeEventListener("resize",P),window.removeEventListener("touchstart",F),window.removeEventListener("touchend",Y),window.removeEventListener("keydown",fe),(V=u.current)==null||V.removeChild(I.domElement)}},[e]);const _=()=>{var D,A,I,P;n("waiting"),o(0),d(0),b.current=.1,y.current=0,(D=p.current)==null||D.reset(),(A=g.current)==null||A.reset(),(I=x.current)==null||I.reset(),(P=v.current)==null||P.reset()},C=()=>{m(D=>!D)};return ci("div",{className:"w-full h-full flex flex-col",children:[sn("h1",{className:"text-3xl md:text-4xl text-white text-center py-2 bg-gray-800",children:"Temple Run Cube"}),ci("div",{ref:u,className:"relative flex-1",children:[e!=="gameOver"&&sn(QS,{score:s,coins:l,gameState:e}),e==="gameOver"&&sn(JS,{score:s,onReplay:_,onShowQR:C}),c&&sn(eM,{onClose:C})]})]})};function nM(){return sn("div",{className:"w-screen h-screen",children:sn(tM,{})})}Xg.createRoot(document.getElementById("root")).render(sn(Ug.StrictMode,{children:sn(nM,{})}));
