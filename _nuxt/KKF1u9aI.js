import{_ as de}from"./MY-ziTvQ.js";import{_ as ve}from"./BXzPKwvg.js";import{_ as me}from"./HI6Edqsr.js";import{_ as he}from"./kl3Q2Bi-.js";import{D as oe,E as Y,G as fe,H as X,I as _e,J as ge,K as ne,r as R,q as g,L as j,h as E,M as ye,b as a,N as se,O as xe,P as we,Q as Ve,R as Ce,F as D,S as $,T as p,U as be,V as Ie,W as ke,X as Pe,s as Se,n as Be,v as U,z as q,x as Te,Y as Ae,o as I,c as A,w as v,a as P,A as y,y as T,C as z,Z as K,_ as Q,$ as Ee,d as De,t as Re,p as $e,e as He}from"./CLMUWmIf.js";import{V as N}from"./CknD_dRn.js";import{V as O,a as G}from"./LPd-5NFw.js";import{m as ae,a as Ye,u as L}from"./CjIYZQ7C.js";import{u as Xe,V as F,m as Le,a as Me}from"./CxBiSCxO.js";import{V as We,a as ze,M as Ne,m as Oe,b as H,c as Ge}from"./v8dFxkyg.js";import{m as je,u as pe}from"./CddjjbIM.js";import{u as Fe}from"./IZdjIABi.js";import{_ as Ue}from"./DlAUqK2U.js";import"./B6pqqAW0.js";import"./P4nmuCoM.js";import"./D82teUOT.js";import"./vaaiXzWb.js";const qe=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:i}=e,u=.5,s=16;e.offsetX=t-o,e.offsetY=i-n,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&i<n-s&&e.up(e),e.down&&i>n+s&&e.down(e))};function Ke(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function Qe(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),qe(o)}function Je(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function Ze(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Ke(t,o),touchend:t=>Qe(t,o),touchmove:t=>Je(t,o)}}function et(e,o){var c;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,i=(t==null?void 0:t.options)??{passive:!0},u=(c=o.instance)==null?void 0:c.$.uid;if(!n||!u)return;const s=Ze(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[u]=s,oe(s).forEach(l=>{n.addEventListener(l,s[l],i)})}function tt(e,o){var u,s;const t=(u=o.value)!=null&&u.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const i=t._touchHandlers[n];oe(i).forEach(c=>{t.removeEventListener(c,i[c])}),delete t._touchHandlers[n]}const ie={mounted:et,unmounted:tt},le=Symbol.for("vuetify:v-window"),ue=Symbol.for("vuetify:v-window-group"),re=Y({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...ae(),...Ye(),...fe()},"VWindow"),J=X()({name:"VWindow",directives:{Touch:ie},props:re(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=_e(e),{isRtl:i}=ge(),{t:u}=ne(),s=Xe(e,ue),c=R(),l=g(()=>i.value?!e.reverse:e.reverse),h=j(!1),V=g(()=>{const d=e.direction==="vertical"?"y":"x",w=(l.value?!h.value:h.value)?"-reverse":"";return`v-window-${d}${w}-transition`}),_=j(0),x=R(void 0),k=g(()=>s.items.value.findIndex(d=>s.selected.value.includes(d.id)));E(k,(d,f)=>{const w=s.items.value.length,r=w-1;w<=2?h.value=d<f:d===r&&f===0?h.value=!0:d===0&&f===r?h.value=!1:h.value=d<f}),ye(le,{transition:V,isReversed:h,transitionCount:_,transitionHeight:x,rootRef:c});const m=g(()=>e.continuous||k.value!==0),C=g(()=>e.continuous||k.value!==s.items.value.length-1);function b(){m.value&&s.prev()}function S(){C.value&&s.next()}const M=g(()=>{const d=[],f={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${l.value?"right":"left"}`,onClick:s.prev,"aria-label":u("$vuetify.carousel.prev")};d.push(m.value?t.prev?t.prev({props:f}):a(F,f,null):a("div",null,null));const w={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${l.value?"left":"right"}`,onClick:s.next,"aria-label":u("$vuetify.carousel.next")};return d.push(C.value?t.next?t.next({props:w}):a(F,w,null):a("div",null,null)),d}),W=g(()=>e.touch===!1?e.touch:{...{left:()=>{l.value?b():S()},right:()=>{l.value?S():b()},start:f=>{let{originalEvent:w}=f;w.stopPropagation()}},...e.touch===!0?{}:e.touch});return L(()=>se(a(e.tag,{ref:c,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var d,f;return[a("div",{class:"v-window__container",style:{height:x.value}},[(d=t.default)==null?void 0:d.call(t,{group:s}),e.showArrows!==!1&&a("div",{class:"v-window__controls"},[M.value])]),(f=t.additional)==null?void 0:f.call(t,{group:s})]}}),[[xe("touch"),W.value]])),{group:s}}}),ot=Y({color:String,cycle:Boolean,delimiterIcon:{type:we,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...re({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),Z=X()({name:"VCarousel",props:ot(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=Ve(e,"modelValue"),{t:i}=ne(),u=R();let s=-1;E(n,l),E(()=>e.interval,l),E(()=>e.cycle,h=>{h?l():window.clearTimeout(s)}),Ce(c);function c(){!e.cycle||!u.value||(s=window.setTimeout(u.value.group.next,+e.interval>0?+e.interval:6e3))}function l(){window.clearTimeout(s),window.requestAnimationFrame(c)}return L(()=>{const h=J.filterProps(e);return a(J,$({ref:u},h,{modelValue:n.value,"onUpdate:modelValue":V=>n.value=V,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:p(e.height)},e.style]}),{default:t.default,additional:V=>{let{group:_}=V;return a(D,null,[!e.hideDelimiters&&a("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[_.items.value.length>0&&a(We,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[_.items.value.map((x,k)=>{const m={id:`carousel-item-${x.id}`,"aria-label":i("$vuetify.carousel.ariaLabel.delimiter",k+1,_.items.value.length),class:["v-carousel__controls__item",_.isSelected(x.id)&&"v-btn--active"],onClick:()=>_.select(x.id,!0)};return t.item?t.item({props:m,item:x}):a(F,$(x,m),null)})]})]),e.progress&&a(ze,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(_.getItemIndex(n.value)+1)/_.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),ce=Y({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ae(),...Le(),...je()},"VWindowItem"),ee=X()({name:"VWindowItem",directives:{Touch:ie},props:ce(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=be(le),i=Me(e,ue),{isBooted:u}=Fe();if(!n||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=j(!1),c=g(()=>u.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function l(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function h(){var m;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=p((m=n.rootRef.value)==null?void 0:m.clientHeight)),n.transitionCount.value+=1)}function V(){l()}function _(m){s.value&&ke(()=>{!c.value||!s.value||!n||(n.transitionHeight.value=p(m.clientHeight))})}const x=g(()=>{const m=n.isReversed.value?e.reverseTransition:e.transition;return c.value?{name:typeof m!="string"?n.transition.value:m,onBeforeEnter:h,onAfterEnter:l,onEnterCancelled:V,onBeforeLeave:h,onAfterLeave:l,onLeaveCancelled:V,onEnter:_}:!1}),{hasContent:k}=pe(e,i.isSelected);return L(()=>a(Ne,{transition:x.value,disabled:!u.value},{default:()=>{var m;return[se(a("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[k.value&&((m=t.default)==null?void 0:m.call(t))]),[[Ie,i.isSelected.value]])]}})),{groupItem:i}}}),nt=Y({...Oe(),...ce()},"VCarouselItem"),te=X()({name:"VCarouselItem",inheritAttrs:!1,props:nt(),setup(e,o){let{slots:t,attrs:n}=o;L(()=>{const i=H.filterProps(e),u=ee.filterProps(e);return a(ee,$({class:"v-carousel-item"},u),{default:()=>[a(H,$(n,i),t)]})})}}),B=e=>($e("data-v-fb7cf1a9"),e=e(),He(),e),st={class:"cover-wrapper"},at=B(()=>P("h1",{class:"text-h1 text-center"},"Martin Kaller",-1)),it=B(()=>P("h1",{class:"text-lg-h2 text-h3 font-weight-thin text-center"}," LANDSCAPE PHOTOGRAPHY ",-1)),lt=B(()=>P("h1",{class:"text-h1 text-center"},"Martin Kaller",-1)),ut=B(()=>P("h1",{class:"text-lg-h2 text-h3 font-weight-thin text-center"}," LANDSCAPE PHOTOGRAPHY ",-1)),rt=B(()=>P("div",{class:"cover"},null,-1)),ct=B(()=>P("div",{class:"cover-spacer"},null,-1)),dt={class:"post-preview px-3",style:{height:"40vh"}},vt=Pe({__name:"index",async setup(e){let o,t;const n=Se(),i=Be(),u=g(()=>i.byName("portfolio")),{data:s}=([o,t]=U(()=>q(`/api/albums/${u.value._id}/photos`,"$pqtWcjQkdb")),o=await o,t(),o),c=g(()=>n.byIds(s.value)),l=R(Te()),h=g(()=>c.value.filter(b=>b.width>b.height)),V=g(()=>c.value.filter(b=>b.width<b.height)),{data:_,pending:x,error:k,refresh:m}=([o,t]=U(()=>q("/api/posts","$cmRBlMwAGX")),o=await o,t(),o),C=Ae(()=>0,"$P8rApiifAs");return(b,S)=>{const M=de,W=ve,d=me,f=he,w=Ee;return I(),A("div",null,[a(w,{name:"default"},{header:v(()=>[P("div",st,[a(N,{fluid:"",class:"pa-0 mb-8 fill-height text-white"},{default:v(()=>[y(l).smAndDown?(I(),T(Z,{key:0,cycle:"","show-arrows":!1,height:y(l).height-74,"hide-delimiter-background":"","delimiter-icon":"mdi-minus",modelValue:y(C),"onUpdate:modelValue":S[0]||(S[0]=r=>K(C)?C.value=r:null)},{default:v(()=>[(I(!0),A(D,null,z(y(V),r=>(I(),T(te,{key:r._id},{default:v(()=>[a(H,{src:r.paths.h1080,"lazy-src":r.paths.preview,height:y(l).height-74,cover:""},null,8,["src","lazy-src","height"])]),_:2},1024))),128)),a(N,{fluid:"",class:"title fill-height"},{default:v(()=>[a(O,{align:"center",justify:"center"},{default:v(()=>[a(G,{class:"d-flex flex-column"},{default:v(()=>[at,it]),_:1})]),_:1})]),_:1})]),_:1},8,["height","modelValue"])):Q("",!0),y(l).mdAndUp?(I(),T(Z,{key:1,cycle:"","show-arrows":!1,height:y(l).height-74,"hide-delimiter-background":"","delimiter-icon":"mdi-minus",modelValue:y(C),"onUpdate:modelValue":S[1]||(S[1]=r=>K(C)?C.value=r:null)},{default:v(()=>[(I(!0),A(D,null,z(y(h),r=>(I(),T(te,{key:r._id},{default:v(()=>[a(H,{src:r.paths.h1080,"lazy-src":r.paths.preview,height:y(l).height-74,cover:""},null,8,["src","lazy-src","height"])]),_:2},1024))),128)),a(N,{fluid:"",class:"title fill-height"},{default:v(()=>[a(O,{align:"center",justify:"center"},{default:v(()=>[a(G,{class:"d-flex flex-column"},{default:v(()=>[lt,ut]),_:1})]),_:1})]),_:1})]),_:1},8,["height","modelValue"])):Q("",!0)]),_:1}),rt]),ct]),default:v(()=>[a(f,null,{default:v(()=>[a(O,{class:"px-1"},{default:v(()=>[(I(!0),A(D,null,z(y(_).slice(0,2),r=>(I(),T(G,{cols:"12",lg:"6",key:r._id},{default:v(()=>[a(Ge,{class:"pa-5 mb-3",to:"/newsletter/"+r.link,elevation:"5"},{default:v(()=>[P("div",dt,[a(M,{post:r},null,8,["post"])]),a(W,{to:"/newsletter/"+r.link},{default:v(()=>[De(Re(r.link),1)]),_:2},1032,["to"])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1}),a(d,{photos:y(c)},null,8,["photos"])]),_:1})]),_:1})])}}}),At=Ue(vt,[["__scopeId","data-v-fb7cf1a9"]]);export{At as default};