import{V as ft,_ as dt}from"./DGVyKgpR.js";import{V as ze,a as ge}from"./LPd-5NFw.js";import{V as vt}from"./D82teUOT.js";import{c as ee,p as Le,f as ye,d as he,e as Be,g as Me,h as mt,i as gt,u as yt,j as ht,k as pt,l as bt,M as wt,n as le,o as xt}from"./v8dFxkyg.js";import{a0 as Ue,a1 as Ye,q as x,r as V,x as de,o as D,y as te,w as p,b as m,a as W,t as G,A as O,E as J,a2 as Y,a3 as Oe,h as F,a4 as j,a5 as _t,W as Ce,T as $,a6 as Re,f as Pe,a7 as Ge,a8 as St,a9 as Ae,U as Xe,aa as Fe,S as B,ab as Et,L as ne,R as kt,ac as Je,M as Ot,ad as Ct,ae as Pt,G as At,H as Ke,Q as Qe,I as Tt,J as Vt,af as Lt,j as Bt,ag as Mt,N as Ze,V as et,O as Rt,F as _e,ah as Ft,ai as Nt,aj as Ht,ak as se,d as X,_ as Se,u as It,al as Dt,s as $t,v as Wt,c as Q,z as qt,C as Ne}from"./CLMUWmIf.js";import{_ as jt}from"./HI6Edqsr.js";import{g as zt,B as pe,a as He,n as Ut,b as Yt,s as Gt,f as Xt}from"./DmRohq2Y.js";import{m as Jt,u as tt}from"./CjIYZQ7C.js";import{m as Kt,u as Qt}from"./CddjjbIM.js";import{V as ce}from"./CxBiSCxO.js";import{d as Zt}from"./P4nmuCoM.js";import{V as en}from"./CknD_dRn.js";import"./BXzPKwvg.js";import"./DlAUqK2U.js";import"./vaaiXzWb.js";const re=new WeakMap;function tn(e,n){Object.keys(n).forEach(t=>{if(Ue(t)){const o=Ye(t),r=re.get(e);if(n[t]==null)r==null||r.forEach(a=>{const[i,l]=a;i===o&&(e.removeEventListener(o,l),r.delete(a))});else if(!r||![...r].some(a=>a[0]===o&&a[1]===n[t])){e.addEventListener(o,n[t]);const a=r||new Set;a.add([o,n[t]]),re.has(e)||re.set(e,a)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function nn(e,n){Object.keys(n).forEach(t=>{if(Ue(t)){const o=Ye(t),r=re.get(e);r==null||r.forEach(a=>{const[i,l]=a;i===o&&(e.removeEventListener(o,l),r.delete(a))})}else e.removeAttribute(t)})}function nt(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function on(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?an(e):Te(e))return e;e=e.parentElement}return document.scrollingElement}function ue(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Te(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Te(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function an(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function rn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const ln={class:"white--text text-h4 ma-0"},sn={__name:"LocationHeader",props:["location"],setup(e){const n=e,t=x(()=>n.location);return V(de()),(o,r)=>{const a=dt;return D(),te(ee,{dark:"",class:"pa-4 mx-2",style:{height:"48px"}},{default:p(()=>[m(ze,{class:"align-center"},{default:p(()=>[W("p",ln,G(O(t).title),1),m(vt),m(a,null,{default:p(()=>[m(ft,{modelValue:O(t).rating,"onUpdate:modelValue":r[0]||(r[0]=i=>O(t).rating=i),color:"red","half-increments":"","background-color":"grey","empty-icon":"mdi-heart-outline","half-icon":"mdi-heart-half-full","full-icon":"mdi-heart",class:"mx-3",readonly:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},cn=sn;function be(e,n){return{x:e.x+n.x,y:e.y+n.y}}function un(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ie(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,r=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,a=t==="top"?0:t==="bottom"?n.height:t;return be({x:r,y:a},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,r=t==="left"?0:t==="right"?n.width:t,a=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return be({x:r,y:a},n)}return be({x:n.width/2,y:n.height/2},n)}const ot={static:vn,connected:gn},fn=J({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in ot},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function dn(e,n){const t=V({}),o=V();Y&&Oe(()=>!!(n.isActive.value&&e.locationStrategy),a=>{var i,l;F(()=>e.locationStrategy,a),j(()=>{window.removeEventListener("resize",r),o.value=void 0}),window.addEventListener("resize",r,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(i=e.locationStrategy(n,e,t))==null?void 0:i.updateLocation:o.value=(l=ot[e.locationStrategy](n,e,t))==null?void 0:l.updateLocation});function r(a){var i;(i=o.value)==null||i.call(o,a)}return{contentStyles:t,updateLocation:o}}function vn(){}function mn(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=Ut(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function gn(e,n,t){(Array.isArray(e.target.value)||rn(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:r,preferredOrigin:a}=_t(()=>{const u=Le(n.location,e.isRtl.value),c=n.origin==="overlap"?u:n.origin==="auto"?ye(u):Le(n.origin,e.isRtl.value);return u.side===c.side&&u.align===he(c).align?{preferredAnchor:Be(u),preferredOrigin:Be(c)}:{preferredAnchor:u,preferredOrigin:c}}),[i,l,v,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(u=>x(()=>{const c=parseFloat(n[u]);return isNaN(c)?1/0:c})),g=x(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const u=n.offset.split(" ").map(parseFloat);return u.length<2&&u.push(0),u}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let d=!1;const b=new ResizeObserver(()=>{d&&w()});F([e.target,e.contentEl],(u,c)=>{let[_,L]=u,[C,S]=c;C&&!Array.isArray(C)&&b.unobserve(C),_&&!Array.isArray(_)&&b.observe(_),S&&b.unobserve(S),L&&b.observe(L)},{immediate:!0}),j(()=>{b.disconnect()});function w(){if(d=!1,requestAnimationFrame(()=>d=!0),!e.target.value||!e.contentEl.value)return;const u=zt(e.target.value),c=mn(e.contentEl.value,e.isRtl.value),_=ue(e.contentEl.value),L=12;_.length||(_.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(c.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),c.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const C=_.reduce((P,E)=>{const y=E.getBoundingClientRect(),h=new pe({x:E===document.documentElement?0:y.x,y:E===document.documentElement?0:y.y,width:E.clientWidth,height:E.clientHeight});return P?new pe({x:Math.max(P.left,h.left),y:Math.max(P.top,h.top),width:Math.min(P.right,h.right)-Math.max(P.left,h.left),height:Math.min(P.bottom,h.bottom)-Math.max(P.top,h.top)}):h},void 0);C.x+=L,C.y+=L,C.width-=L*2,C.height-=L*2;let S={anchor:r.value,origin:a.value};function z(P){const E=new pe(c),y=Ie(P.anchor,u),h=Ie(P.origin,E);let{x:H,y:R}=un(y,h);switch(P.anchor.side){case"top":R-=g.value[0];break;case"bottom":R+=g.value[0];break;case"left":H-=g.value[0];break;case"right":H+=g.value[0];break}switch(P.anchor.align){case"top":R-=g.value[1];break;case"bottom":R+=g.value[1];break;case"left":H-=g.value[1];break;case"right":H+=g.value[1];break}return E.x+=H,E.y+=R,E.width=Math.min(E.width,v.value),E.height=Math.min(E.height,f.value),{overflows:He(E,C),x:H,y:R}}let N=0,A=0;const s={x:0,y:0},M={x:!1,y:!1};let ve=-1;for(;!(ve++>10);){const{x:P,y:E,overflows:y}=z(S);N+=P,A+=E,c.x+=P,c.y+=E;{const h=Me(S.anchor),H=y.x.before||y.x.after,R=y.y.before||y.y.after;let K=!1;if(["x","y"].forEach(T=>{if(T==="x"&&H&&!M.x||T==="y"&&R&&!M.y){const I={anchor:{...S.anchor},origin:{...S.origin}},oe=T==="x"?h==="y"?he:ye:h==="y"?ye:he;I.anchor=oe(I.anchor),I.origin=oe(I.origin);const{overflows:U}=z(I);(U[T].before<=y[T].before&&U[T].after<=y[T].after||U[T].before+U[T].after<(y[T].before+y[T].after)/2)&&(S=I,K=M[T]=!0)}}),K)continue}y.x.before&&(N+=y.x.before,c.x+=y.x.before),y.x.after&&(N-=y.x.after,c.x-=y.x.after),y.y.before&&(A+=y.y.before,c.y+=y.y.before),y.y.after&&(A-=y.y.after,c.y-=y.y.after);{const h=He(c,C);s.x=C.width-h.x.before-h.x.after,s.y=C.height-h.y.before-h.y.after,N+=h.x.before,c.x+=h.x.before,A+=h.y.before,c.y+=h.y.before}break}const me=Me(S.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${S.anchor.side} ${S.anchor.align}`,transformOrigin:`${S.origin.side} ${S.origin.align}`,top:$(we(A)),left:e.isRtl.value?void 0:$(we(N)),right:e.isRtl.value?$(we(-N)):void 0,minWidth:$(me==="y"?Math.min(i.value,u.width):i.value),maxWidth:$(De(Re(s.x,i.value===1/0?0:i.value,v.value))),maxHeight:$(De(Re(s.y,l.value===1/0?0:l.value,f.value)))}),{available:s,contentBox:c}}return F(()=>[r.value,a.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>w()),Ce(()=>{const u=w();if(!u)return;const{available:c,contentBox:_}=u;_.height>c.y&&requestAnimationFrame(()=>{w(),requestAnimationFrame(()=>{w()})})}),{updateLocation:w}}function we(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function De(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let Ee=!0;const fe=[];function yn(e){!Ee||fe.length?(fe.push(e),ke()):(Ee=!1,e(),ke())}let $e=-1;function ke(){cancelAnimationFrame($e),$e=requestAnimationFrame(()=>{const e=fe.shift();e&&e(),fe.length?ke():Ee=!0})}const ie={none:null,close:bn,block:wn,reposition:xn},hn=J({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ie}},"VOverlay-scroll-strategies");function pn(e,n){if(!Y)return;let t;Pe(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Ge(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=ie[e.scrollStrategy])==null||o.call(ie,n,e,t)}))}),j(()=>{t==null||t.stop()})}function bn(e){function n(t){e.isActive.value=!1}at(e.targetEl.value??e.contentEl.value,n)}function wn(e,n){var i;const t=(i=e.root.value)==null?void 0:i.offsetParent,o=[...new Set([...ue(e.targetEl.value,n.contained?t:void 0),...ue(e.contentEl.value,n.contained?t:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,a=(l=>Te(l)&&l)(t||document.documentElement);a&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((l,v)=>{l.style.setProperty("--v-body-scroll-x",$(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",$(-l.scrollTop)),l!==document.documentElement&&l.style.setProperty("--v-scrollbar-offset",$(r)),l.classList.add("v-overlay-scroll-blocked")}),j(()=>{o.forEach((l,v)=>{const f=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),g=parseFloat(l.style.getPropertyValue("--v-body-scroll-y")),d=l.style.scrollBehavior;l.style.scrollBehavior="auto",l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-f,l.scrollTop=-g,l.style.scrollBehavior=d}),a&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function xn(e,n,t){let o=!1,r=-1,a=-1;function i(l){yn(()=>{var g,d;const v=performance.now();(d=(g=e.updateLocation).value)==null||d.call(g,l),o=(performance.now()-v)/(1e3/60)>2})}a=(typeof requestIdleCallback>"u"?l=>l():requestIdleCallback)(()=>{t.run(()=>{at(e.targetEl.value??e.contentEl.value,l=>{o?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{i(l)})})):i(l)})})}),j(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(a),cancelAnimationFrame(r)})}function at(e,n){const t=[document,...ue(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),j(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const _n=Symbol.for("vuetify:v-menu"),Sn=J({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function En(e,n){let t=()=>{};function o(i){t==null||t();const l=Number(i?e.openDelay:e.closeDelay);return new Promise(v=>{t=St(l,()=>{n==null||n(i),v(i)})})}function r(){return o(!0)}function a(){return o(!1)}return{clearDelay:t,runOpenDelay:r,runCloseDelay:a}}const kn=J({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Sn()},"VOverlay-activator");function On(e,n){let{isActive:t,isTop:o}=n;const r=Ae("useActivator"),a=V();let i=!1,l=!1,v=!0;const f=x(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),g=x(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!f.value),{runOpenDelay:d,runCloseDelay:b}=En(e,s=>{s===(e.openOnHover&&i||f.value&&l)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==s&&(v=!0),t.value=s)}),w=V(),u={onClick:s=>{s.stopPropagation(),a.value=s.currentTarget||s.target,t.value||(w.value=[s.clientX,s.clientY]),t.value=!t.value},onMouseenter:s=>{var M;(M=s.sourceCapabilities)!=null&&M.firesTouchEvents||(i=!0,a.value=s.currentTarget||s.target,d())},onMouseleave:s=>{i=!1,b()},onFocus:s=>{Et(s.target,":focus-visible")!==!1&&(l=!0,s.stopPropagation(),a.value=s.currentTarget||s.target,d())},onBlur:s=>{l=!1,s.stopPropagation(),b()}},c=x(()=>{const s={};return g.value&&(s.onClick=u.onClick),e.openOnHover&&(s.onMouseenter=u.onMouseenter,s.onMouseleave=u.onMouseleave),f.value&&(s.onFocus=u.onFocus,s.onBlur=u.onBlur),s}),_=x(()=>{const s={};if(e.openOnHover&&(s.onMouseenter=()=>{i=!0,d()},s.onMouseleave=()=>{i=!1,b()}),f.value&&(s.onFocusin=()=>{l=!0,d()},s.onFocusout=()=>{l=!1,b()}),e.closeOnContentClick){const M=Xe(_n,null);s.onClick=()=>{t.value=!1,M==null||M.closeParents()}}return s}),L=x(()=>{const s={};return e.openOnHover&&(s.onMouseenter=()=>{v&&(i=!0,v=!1,d())},s.onMouseleave=()=>{i=!1,b()}),s});F(o,s=>{s&&(e.openOnHover&&!i&&(!f.value||!l)||f.value&&!l&&(!e.openOnHover||!i))&&(t.value=!1)}),F(t,s=>{s||setTimeout(()=>{w.value=void 0})},{flush:"post"});const C=V();Pe(()=>{C.value&&Ce(()=>{a.value=Fe(C.value)})});const S=V(),z=x(()=>e.target==="cursor"&&w.value?w.value:S.value?Fe(S.value):rt(e.target,r)||a.value),N=x(()=>Array.isArray(z.value)?void 0:z.value);let A;return F(()=>!!e.activator,s=>{s&&Y?(A=Ge(),A.run(()=>{Cn(e,r,{activatorEl:a,activatorEvents:c})})):A&&A.stop()},{flush:"post",immediate:!0}),j(()=>{A==null||A.stop()}),{activatorEl:a,activatorRef:C,target:z,targetEl:N,targetRef:S,activatorEvents:c,contentEvents:_,scrimEvents:L}}function Cn(e,n,t){let{activatorEl:o,activatorEvents:r}=t;F(()=>e.activator,(v,f)=>{if(f&&v!==f){const g=l(f);g&&i(g)}v&&Ce(()=>a())},{immediate:!0}),F(()=>e.activatorProps,()=>{a()}),j(()=>{i()});function a(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;v&&tn(v,B(r.value,f))}function i(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;v&&nn(v,B(r.value,f))}function l(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const f=rt(v,n);return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:void 0,o.value}}function rt(e,n){var o,r;if(!e)return;let t;if(e==="parent"){let a=(r=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:r.parentNode;for(;a!=null&&a.hasAttribute("data-no-activator");)a=a.parentNode;t=a}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Pn(){if(!Y)return ne(!1);const{ssr:e}=de();if(e){const n=ne(!1);return kt(()=>{n.value=!0}),n}else return ne(!0)}function it(){const n=Ae("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const We=Symbol.for("vuetify:stack"),Z=Je([]);function An(e,n,t){const o=Ae("useStack"),r=!t,a=Xe(We,void 0),i=Je({activeChildren:new Set});Ot(We,i);const l=ne(+n.value);Oe(e,()=>{var d;const g=(d=Z.at(-1))==null?void 0:d[1];l.value=g?g+10:+n.value,r&&Z.push([o.uid,l.value]),a==null||a.activeChildren.add(o.uid),j(()=>{if(r){const b=Ct(Z).findIndex(w=>w[0]===o.uid);Z.splice(b,1)}a==null||a.activeChildren.delete(o.uid)})});const v=ne(!0);r&&Pe(()=>{var d;const g=((d=Z.at(-1))==null?void 0:d[0])===o.uid;setTimeout(()=>v.value=g)});const f=x(()=>!i.activeChildren.size);return{globalTop:Pt(v),localTop:f,stackStyles:x(()=>({zIndex:l.value}))}}function Tn(e){return{teleportTarget:x(()=>{const t=e.value;if(t===!0||!Y)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let r=o.querySelector(":scope > .v-overlay-container");return r||(r=document.createElement("div"),r.className="v-overlay-container",o.appendChild(r)),r})}}function Vn(){return!0}function lt(e,n,t){if(!e||st(e,t)===!1)return!1;const o=nt(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const r=(typeof t.value=="object"&&t.value.include||(()=>[]))();return r.push(n),!r.some(a=>a==null?void 0:a.contains(e.target))}function st(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Vn)(e)}function Ln(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&lt(e,n,t)&&setTimeout(()=>{st(e,t)&&o&&o(e)},0)}function qe(e,n){const t=nt(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Bn={mounted(e,n){const t=r=>Ln(r,e,n),o=r=>{e._clickOutside.lastMousedownWasOutside=lt(r,e,n)};qe(e,r=>{r.addEventListener("click",t,!0),r.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(qe(e,t=>{var a;if(!t||!((a=e._clickOutside)!=null&&a[n.instance.$.uid]))return;const{onClick:o,onMousedown:r}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",r,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Mn(e){const{modelValue:n,color:t,...o}=e;return m(Ft,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&m("div",B({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const ct=J({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...kn(),...Jt(),...mt(),...Kt(),...fn(),...hn(),...At(),...gt()},"VOverlay"),je=Ke()({name:"VOverlay",directives:{ClickOutside:Bn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...ct()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:r}=n;const a=Qe(e,"modelValue"),i=x({get:()=>a.value,set:k=>{k&&e.disabled||(a.value=k)}}),{teleportTarget:l}=Tn(x(()=>e.attach||e.contained)),{themeClasses:v}=Tt(e),{rtlClasses:f,isRtl:g}=Vt(),{hasContent:d,onAfterLeave:b}=Qt(e,i),w=yt(x(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:u,localTop:c,stackStyles:_}=An(i,Lt(e,"zIndex"),e._disableGlobalStack),{activatorEl:L,activatorRef:C,target:S,targetEl:z,targetRef:N,activatorEvents:A,contentEvents:s,scrimEvents:M}=On(e,{isActive:i,isTop:c}),{dimensionStyles:ve}=ht(e),me=Pn(),{scopeId:P}=it();F(()=>e.disabled,k=>{k&&(i.value=!1)});const E=V(),y=V(),h=V(),{contentStyles:H,updateLocation:R}=dn(e,{isRtl:g,contentEl:h,target:S,isActive:i});pn(e,{root:E,contentEl:h,targetEl:z,isActive:i,updateLocation:R});function K(k){r("click:outside",k),e.persistent?ae():i.value=!1}function T(k){return i.value&&u.value&&(!e.scrim||k.target===y.value)}Y&&F(i,k=>{k?window.addEventListener("keydown",I):window.removeEventListener("keydown",I)},{immediate:!0}),Bt(()=>{Y&&window.removeEventListener("keydown",I)});function I(k){var q,Ve;k.key==="Escape"&&u.value&&(e.persistent?ae():(i.value=!1,(q=h.value)!=null&&q.contains(document.activeElement)&&((Ve=L.value)==null||Ve.focus())))}const oe=pt();Oe(()=>e.closeOnBack,()=>{bt(oe,k=>{u.value&&i.value?(k(!1),e.persistent?ae():i.value=!1):k()})});const U=V();F(()=>i.value&&(e.absolute||e.contained)&&l.value==null,k=>{if(k){const q=on(E.value);q&&q!==document.scrollingElement&&(U.value=q.scrollTop)}});function ae(){e.noClickAnimation||h.value&&Yt(h.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Gt})}function ut(){b(),r("afterLeave")}return tt(()=>{var k;return m(_e,null,[(k=t.activator)==null?void 0:k.call(t,{isActive:i.value,props:B({ref:C,targetRef:N},A.value,e.activatorProps)}),me.value&&d.value&&m(Mt,{disabled:!l.value,to:l.value},{default:()=>[m("div",B({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},v.value,f.value,e.class],style:[_.value,{"--v-overlay-opacity":e.opacity,top:$(U.value)},e.style],ref:E},P,o),[m(Mn,B({color:w,modelValue:i.value&&!!e.scrim,ref:y},M.value),null),m(wt,{appear:!0,persisted:!0,transition:e.transition,target:S.value,onAfterLeave:ut},{default:()=>{var q;return[Ze(m("div",B({ref:h,class:["v-overlay__content",e.contentClass],style:[ve.value,H.value]},s.value,e.contentProps),[(q=t.default)==null?void 0:q.call(t,{isActive:i})]),[[et,i.value],[Rt("click-outside"),{handler:K,closeConditional:T,include:()=>[L.value]}]])]}})])]})])}),{activatorEl:L,scrimEl:y,target:S,animateClick:ae,contentEl:h,globalTop:u,localTop:c,updateLocation:R}}}),Rn=J({id:String,text:String,...Nt(ct({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),xe=Ke()({name:"VTooltip",props:Rn(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=Qe(e,"modelValue"),{scopeId:r}=it(),a=Ht(),i=x(()=>e.id||`v-tooltip-${a}`),l=V(),v=x(()=>e.location.split(" ").length>1?e.location:e.location+" center"),f=x(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),g=x(()=>e.transition?e.transition:o.value?"scale-transition":"fade-transition"),d=x(()=>B({"aria-describedby":i.value},e.activatorProps));return tt(()=>{const b=je.filterProps(e);return m(je,B({ref:l,class:["v-tooltip",e.class],style:e.style,id:i.value},b,{modelValue:o.value,"onUpdate:modelValue":w=>o.value=w,transition:g.value,absolute:!0,location:v.value,origin:f.value,persistent:!0,role:"tooltip",activatorProps:d.value,_disableGlobalStack:!0},r),{activator:t.activator,default:function(){var _;for(var w=arguments.length,u=new Array(w),c=0;c<w;c++)u[c]=arguments[c];return((_=t.default)==null?void 0:_.call(t,...u))??e.text}})}),Xt({},l)}}),Fn={class:"title px-3 pt-3 ma-0"},Nn={class:"body-1 px-3 pt-3 ma-0"},Hn={class:"d-flex px-3 py-3 ma-0"},In=W("span",null,"Copy link to clipboard",-1),Dn={__name:"LocationText",props:["location"],setup(e){const n=e,t=x(()=>n.location),o=V(de());return(r,a)=>(D(),te(ee,{dark:""},{default:p(()=>[W("p",Fn,G(O(t).title),1),W("p",Nn,G(O(t).description),1),W("div",Hn,[m(xe,{bottom:""},{activator:p(({on:i})=>[O(o).xlAndUp?Ze((D(),te(ce,B({key:0},se(i),{href:"https://www.google.com/maps/search/?api=1&query="+O(t).title,height:"36px",class:"mr-2 pa-1",color:"success",target:"_blank"}),{default:p(()=>[X(" Open in maps "),m(le,{class:"pa-0"},{default:p(()=>[X("mdi-google-maps")]),_:1})]),_:2},1040,["href"])),[[et,!O(o).smAndDown]]):Se("",!0)]),default:p(()=>[W("span",null,"Open "+G(O(t).title)+" in google maps",1)]),_:1}),O(t).googlealbum?(D(),te(xe,{key:0,bottom:""},{activator:p(({on:i})=>[m(ce,B(se(i),{height:"36px",class:"mr-2 pa-1",color:"warning",href:O(t).googlealbum,target:"_blank"}),{default:p(()=>[X(" Show album "),m(le,{class:"pa-0"},{default:p(()=>[X("mdi-google-photos")]),_:1})]),_:2},1040,["href"])]),default:p(()=>[W("span",null,"Open album of trip to "+G(O(t).name)+" in google photos",1)]),_:1})):Se("",!0),m(xe,{right:""},{activator:p(({on:i})=>[]),default:p(()=>[In]),_:1})])]),_:1}))}},$n=Dn,Wn={key:0,class:"pa-0 align-center pb-3 d-flex"},qn=["src"],jn=W("h1",null,"History",-1),io={__name:"[location]",async setup(e){let n,t;const o=It(),r=Dt(),a=x(()=>r.byName(o.params.location)),i=$t(),{data:l}=([n,t]=Wt(()=>qt(()=>`/api/locations/${a.value._id}/photos`,"$3huIvaaVbS")),n=await n,t(),n),v=x(()=>i.byIds(l.value)),f=V(de()),g=x(()=>{const d=new Set;return v.value.forEach(b=>{const w=b.date.split("T")[0];d.add(w)}),Array.from(d).map(b=>new Date(b)).sort((b,w)=>w.getTime()-b.getTime())});return(d,b)=>{const w=cn,u=jt,c=$n;return D(),Q("div",null,[m(en,null,{default:p(()=>[O(f).xlAndUp?Se("",!0):(D(),Q("div",Wn,[m(ce,B({height:"48px",class:"pa-0",to:d.localePath("/locations/")},se(d.on)),{default:p(()=>[m(le,{class:"pa-0"},{default:p(()=>[X("mdi-arrow-left")]),_:1})]),_:1},16,["to"]),m(ge,{class:"pa-0 ma-0"},{default:p(()=>[m(w,{location:O(a),style:{height:"48px"}},null,8,["location"])]),_:1}),m(ce,B(se(d.on),{onClick:b[0]||(b[0]=_=>d.openInMaps()),height:"48px",class:"pa-0",color:"primary"}),{default:p(()=>[m(le,{class:"pa-0"},{default:p(()=>[X("mdi-google-maps")]),_:1})]),_:1},16)])),m(ze,{ref:"sidebar"},{default:p(()=>[m(ge,{xl:"8",order:"2","order-xl":"1"},{default:p(()=>[W("div",null,[m(ee,{dark:"",class:"pa-2"},{default:p(()=>[m(u,{photos:O(v),cols:O(f).xlAndUp?4:3},null,8,["photos","cols"])]),_:1})])]),_:1}),m(ge,{cols:"12",xl:"4",order:"1","order-xl":"2"},{default:p(()=>[m(c,{location:O(a)},null,8,["location"]),(D(!0),Q(_e,null,Ne(O(a).youtube,_=>(D(),te(ee,{dark:"",class:"my-4",key:_},{default:p(()=>[m(xt,{"aspect-ratio":16/9,class:"pa-2"},{default:p(()=>[W("iframe",{width:"100%",height:"100%",src:_,frameborder:"0",allow:"",allowfullscreen:""},null,8,qn)]),_:2},1024)]),_:2},1024))),128)),m(ee,null,{default:p(()=>[jn,(D(!0),Q(_e,null,Ne(O(g),_=>(D(),Q("p",{key:_},G(("dateToString"in d?d.dateToString:O(Zt))(_)),1))),128))]),_:1})]),_:1})]),_:1},512)]),_:1})])}}};export{io as default};