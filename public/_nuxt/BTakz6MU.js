import{_ as ve}from"./CwaJfqX-.js";import{_ as me}from"./CFqqdv3b.js";import{_ as fe}from"./Cubhm8el.js";import{_ as he}from"./B0CLX0g9.js";import{D as ne,E as X,G as _e,H as L,I as ge,J as ye,K as se,r as R,q as g,L as j,h as D,M as xe,b as a,N as ae,O as we,P as Ve,Q as Ce,R as be,F as H,S as $,T as F,U as Ie,V as ke,W as Pe,X as Se,s as Be,n as Te,v as q,z as K,x as Ae,Y as Ee,o as b,c as A,w as v,a as P,A as k,y as T,C as N,Z as Q,_ as J,$ as De,d as He,t as Re,p as $e,e as Ye}from"./w-K6hUYo.js";import{V as O}from"./DkdUzqZV.js";import{V as p,a as G}from"./Dq8kvWUj.js";import{m as ie,a as Xe,u as M}from"./Cvz029yK.js";import{u as Le,V as U,m as Me,a as We}from"./0LcEydV2.js";import{V as ze,a as Ne,M as Oe,m as pe,b as Y,c as Ge}from"./DAimvJTD.js";import{m as je,u as Fe}from"./DCSVnShj.js";import{u as Ue}from"./D230KFnZ.js";import{_ as qe}from"./DlAUqK2U.js";import"./Bw8qkP5M.js";import"./gJaYJJEb.js";import"./D3afzE0e.js";import"./CmWfk_zi.js";const Ke=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:i}=e,l=.5,s=16;e.offsetX=t-o,e.offsetY=i-n,Math.abs(e.offsetY)<l*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<l*Math.abs(e.offsetY)&&(e.up&&i<n-s&&e.up(e),e.down&&i>n+s&&e.down(e))};function Qe(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function Je(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),Ke(o)}function Ze(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function et(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Qe(t,o),touchend:t=>Je(t,o),touchmove:t=>Ze(t,o)}}function tt(e,o){var c;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,i=(t==null?void 0:t.options)??{passive:!0},l=(c=o.instance)==null?void 0:c.$.uid;if(!n||!l)return;const s=et(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[l]=s,ne(s).forEach(r=>{n.addEventListener(r,s[r],i)})}function ot(e,o){var l,s;const t=(l=o.value)!=null&&l.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const i=t._touchHandlers[n];ne(i).forEach(c=>{t.removeEventListener(c,i[c])}),delete t._touchHandlers[n]}const le={mounted:tt,unmounted:ot},ue=Symbol.for("vuetify:v-window"),re=Symbol.for("vuetify:v-window-group"),ce=X({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...ie(),...Xe(),..._e()},"VWindow"),Z=L()({name:"VWindow",directives:{Touch:le},props:ce(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=ge(e),{isRtl:i}=ye(),{t:l}=se(),s=Le(e,re),c=R(),r=g(()=>i.value?!e.reverse:e.reverse),f=j(!1),w=g(()=>{const d=e.direction==="vertical"?"y":"x",x=(r.value?!f.value:f.value)?"-reverse":"";return`v-window-${d}${x}-transition`}),_=j(0),y=R(void 0),I=g(()=>s.items.value.findIndex(d=>s.selected.value.includes(d.id)));D(I,(d,h)=>{const x=s.items.value.length,u=x-1;x<=2?f.value=d<h:d===u&&h===0?f.value=!0:d===0&&h===u?f.value=!1:f.value=d<h}),xe(ue,{transition:w,isReversed:f,transitionCount:_,transitionHeight:y,rootRef:c});const m=g(()=>e.continuous||I.value!==0),V=g(()=>e.continuous||I.value!==s.items.value.length-1);function C(){m.value&&s.prev()}function S(){V.value&&s.next()}const W=g(()=>{const d=[],h={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:s.prev,"aria-label":l("$vuetify.carousel.prev")};d.push(m.value?t.prev?t.prev({props:h}):a(U,h,null):a("div",null,null));const x={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:s.next,"aria-label":l("$vuetify.carousel.next")};return d.push(V.value?t.next?t.next({props:x}):a(U,x,null):a("div",null,null)),d}),z=g(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?C():S()},right:()=>{r.value?S():C()},start:h=>{let{originalEvent:x}=h;x.stopPropagation()}},...e.touch===!0?{}:e.touch});return M(()=>ae(a(e.tag,{ref:c,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var d,h;return[a("div",{class:"v-window__container",style:{height:y.value}},[(d=t.default)==null?void 0:d.call(t,{group:s}),e.showArrows!==!1&&a("div",{class:"v-window__controls"},[W.value])]),(h=t.additional)==null?void 0:h.call(t,{group:s})]}}),[[we("touch"),z.value]])),{group:s}}}),nt=X({color:String,cycle:Boolean,delimiterIcon:{type:Ve,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...ce({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),ee=L()({name:"VCarousel",props:nt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=Ce(e,"modelValue"),{t:i}=se(),l=R();let s=-1;D(n,r),D(()=>e.interval,r),D(()=>e.cycle,f=>{f?r():window.clearTimeout(s)}),be(c);function c(){!e.cycle||!l.value||(s=window.setTimeout(l.value.group.next,+e.interval>0?+e.interval:6e3))}function r(){window.clearTimeout(s),window.requestAnimationFrame(c)}return M(()=>{const f=Z.filterProps(e);return a(Z,$({ref:l},f,{modelValue:n.value,"onUpdate:modelValue":w=>n.value=w,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:F(e.height)},e.style]}),{default:t.default,additional:w=>{let{group:_}=w;return a(H,null,[!e.hideDelimiters&&a("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[_.items.value.length>0&&a(ze,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[_.items.value.map((y,I)=>{const m={id:`carousel-item-${y.id}`,"aria-label":i("$vuetify.carousel.ariaLabel.delimiter",I+1,_.items.value.length),class:["v-carousel__controls__item",_.isSelected(y.id)&&"v-btn--active"],onClick:()=>_.select(y.id,!0)};return t.item?t.item({props:m,item:y}):a(U,$(y,m),null)})]})]),e.progress&&a(Ne,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(_.getItemIndex(n.value)+1)/_.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),de=X({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ie(),...Me(),...je()},"VWindowItem"),te=L()({name:"VWindowItem",directives:{Touch:le},props:de(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=Ie(ue),i=We(e,re),{isBooted:l}=Ue();if(!n||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=j(!1),c=g(()=>l.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function r(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function f(){var m;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=F((m=n.rootRef.value)==null?void 0:m.clientHeight)),n.transitionCount.value+=1)}function w(){r()}function _(m){s.value&&Pe(()=>{!c.value||!s.value||!n||(n.transitionHeight.value=F(m.clientHeight))})}const y=g(()=>{const m=n.isReversed.value?e.reverseTransition:e.transition;return c.value?{name:typeof m!="string"?n.transition.value:m,onBeforeEnter:f,onAfterEnter:r,onEnterCancelled:w,onBeforeLeave:f,onAfterLeave:r,onLeaveCancelled:w,onEnter:_}:!1}),{hasContent:I}=Fe(e,i.isSelected);return M(()=>a(Oe,{transition:y.value,disabled:!l.value},{default:()=>{var m;return[ae(a("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[I.value&&((m=t.default)==null?void 0:m.call(t))]),[[ke,i.isSelected.value]])]}})),{groupItem:i}}}),st=X({...pe(),...de()},"VCarouselItem"),oe=L()({name:"VCarouselItem",inheritAttrs:!1,props:st(),setup(e,o){let{slots:t,attrs:n}=o;M(()=>{const i=Y.filterProps(e),l=te.filterProps(e);return a(te,$({class:"v-carousel-item"},l),{default:()=>[a(Y,$(n,i),t)]})})}}),B=e=>($e("data-v-052d566d"),e=e(),Ye(),e),at={class:"cover-wrapper"},it=B(()=>P("h1",{class:"text-h1 text-center"},"Martin Kaller",-1)),lt=B(()=>P("h1",{class:"text-lg-h2 text-h3 font-weight-thin text-center"}," LANDSCAPE PHOTOGRAPHY ",-1)),ut=B(()=>P("h1",{class:"text-h1 text-center"},"Martin Kaller",-1)),rt=B(()=>P("h1",{class:"text-lg-h2 text-h3 font-weight-thin text-center"}," LANDSCAPE PHOTOGRAPHY ",-1)),ct=B(()=>P("div",{class:"cover"},null,-1)),dt=B(()=>P("div",{class:"cover-spacer"},null,-1)),vt={class:"post-preview px-3",style:{height:"40vh"}},E="calc(100svh - 76px)",mt=Se({__name:"index",async setup(e){let o,t;const n=Be(),i=Te(),l=g(()=>i.byName("portfolio")),{data:s}=([o,t]=q(()=>K(`/api/albums/${l.value._id}/photos`,"$pqtWcjQkdb")),o=await o,t(),o),c=g(()=>n.byIds(s.value)),r=R(Ae()),f=g(()=>c.value.filter(C=>C.width>C.height)),w=g(()=>c.value.filter(C=>C.width<C.height)),{data:_,pending:y,error:I,refresh:m}=([o,t]=q(()=>K("/api/posts","$cmRBlMwAGX")),o=await o,t(),o),V=Ee(()=>0,"$P8rApiifAs");return(C,S)=>{const W=ve,z=me,d=fe,h=he,x=De;return b(),A("div",null,[a(x,{name:"default"},{header:v(()=>[P("div",at,[a(O,{fluid:"",class:"pa-0 mb-8 fill-height text-white"},{default:v(()=>[k(r).smAndDown?(b(),T(ee,{key:0,cycle:"","show-arrows":!1,height:E,"hide-delimiter-background":"","delimiter-icon":"mdi-minus",modelValue:k(V),"onUpdate:modelValue":S[0]||(S[0]=u=>Q(V)?V.value=u:null)},{default:v(()=>[(b(!0),A(H,null,N(k(w),u=>(b(),T(oe,{key:u._id},{default:v(()=>[a(Y,{src:u.paths.h1080,"lazy-src":u.paths.preview,height:E,cover:""},null,8,["src","lazy-src"])]),_:2},1024))),128)),a(O,{fluid:"",class:"title fill-height"},{default:v(()=>[a(p,{align:"center",justify:"center"},{default:v(()=>[a(G,{class:"d-flex flex-column"},{default:v(()=>[it,lt]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):J("",!0),k(r).mdAndUp?(b(),T(ee,{key:1,cycle:"","show-arrows":!1,height:E,"hide-delimiter-background":"","delimiter-icon":"mdi-minus",modelValue:k(V),"onUpdate:modelValue":S[1]||(S[1]=u=>Q(V)?V.value=u:null)},{default:v(()=>[(b(!0),A(H,null,N(k(f),u=>(b(),T(oe,{key:u._id},{default:v(()=>[a(Y,{src:u.paths.h1080,"lazy-src":u.paths.preview,height:E,cover:""},null,8,["src","lazy-src"])]),_:2},1024))),128)),a(O,{fluid:"",class:"title fill-height"},{default:v(()=>[a(p,{align:"center",justify:"center"},{default:v(()=>[a(G,{class:"d-flex flex-column"},{default:v(()=>[ut,rt]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):J("",!0)]),_:1}),ct]),dt]),default:v(()=>[a(h,null,{default:v(()=>[a(p,{class:"px-1"},{default:v(()=>[(b(!0),A(H,null,N(k(_).slice(0,2),u=>(b(),T(G,{cols:"12",lg:"6",key:u._id},{default:v(()=>[a(Ge,{class:"pa-5 mb-3",to:"/newsletter/"+u.link,elevation:"5"},{default:v(()=>[P("div",vt,[a(W,{post:u},null,8,["post"])]),a(z,{to:"/newsletter/"+u.link},{default:v(()=>[He(Re(u.link),1)]),_:2},1032,["to"])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1}),a(d,{photos:k(c)},null,8,["photos"])]),_:1})]),_:1})])}}}),Et=qe(mt,[["__scopeId","data-v-052d566d"]]);export{Et as default};
