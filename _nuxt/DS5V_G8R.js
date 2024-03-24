import{m as q,u as U,a as se}from"./3VhkF2pp.js";import{I as P,a2 as O,q as c,r as le,a6 as V,Z as $,a1 as D,R as T,a5 as F,a7 as X,aP as ue,S as ie,k as re,l as ce,j as ve,K as de,L as W,N as me,aa as ye,b as z,a9 as pe}from"./Cykx3Bfw.js";import{u as fe}from"./CMko7mZ0.js";const M=Symbol.for("vuetify:layout"),Y=Symbol.for("vuetify:layout-item"),Z=1e3,ge=P({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),ze=P({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function he(){const e=O(M);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Me(e){const s=O(M);if(!s)throw new Error("[Vuetify] Could not find injected layout");const o=e.id??`layout-item-${ie()}`,u=D("useLayoutItem");X(Y,{id:o});const n=T(!1);re(()=>n.value=!0),ce(()=>n.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:r}=s.register(u,{...e,active:c(()=>n.value?!1:e.active.value),id:o});return ve(()=>s.unregister(o)),{layoutItemStyles:i,layoutRect:s.layoutRect,layoutItemScrimStyles:r}}const Ie=(e,s,o,u)=>{let n={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...n}}];for(const r of e){const y=s.get(r),f=o.get(r),g=u.get(r);if(!y||!f||!g)continue;const I={...n,[y.value]:parseInt(n[y.value],10)+(g.value?parseInt(f.value,10):0)};i.push({id:r,layer:I}),n=I}return i};function be(e){const s=O(M,null),o=c(()=>s?s.rootZIndex.value-100:Z),u=le([]),n=V(new Map),i=V(new Map),r=V(new Map),y=V(new Map),f=V(new Map),{resizeRef:g,contentRect:I}=fe(),G=c(()=>{const a=new Map,d=e.overlaps??[];for(const t of d.filter(v=>v.includes(":"))){const[v,l]=t.split(":");if(!u.value.includes(v)||!u.value.includes(l))continue;const p=n.get(v),h=n.get(l),w=i.get(v),L=i.get(l);!p||!h||!w||!L||(a.set(l,{position:p.value,amount:parseInt(w.value,10)}),a.set(v,{position:h.value,amount:-parseInt(L.value,10)}))}return a}),b=c(()=>{const a=[...new Set([...r.values()].map(t=>t.value))].sort((t,v)=>t-v),d=[];for(const t of a){const v=u.value.filter(l=>{var p;return((p=r.get(l))==null?void 0:p.value)===t});d.push(...v)}return Ie(d,n,i,y)}),E=c(()=>!Array.from(f.values()).some(a=>a.value)),S=c(()=>b.value[b.value.length-1].layer),J=c(()=>({"--v-layout-left":$(S.value.left),"--v-layout-right":$(S.value.right),"--v-layout-top":$(S.value.top),"--v-layout-bottom":$(S.value.bottom),...E.value?void 0:{transition:"none"}})),x=c(()=>b.value.slice(1).map((a,d)=>{let{id:t}=a;const{layer:v}=b.value[d],l=i.get(t),p=n.get(t);return{id:t,...v,size:Number(l.value),position:p.value}})),H=a=>x.value.find(d=>d.id===a),A=D("createLayout"),N=T(!1);F(()=>{N.value=!0}),X(M,{register:(a,d)=>{let{id:t,order:v,position:l,layoutSize:p,elementSize:h,active:w,disableTransitions:L,absolute:te}=d;r.set(t,v),n.set(t,l),i.set(t,p),y.set(t,w),L&&f.set(t,L);const _=ue(Y,A==null?void 0:A.vnode).indexOf(a);_>-1?u.value.splice(_,0,t):u.value.push(t);const j=c(()=>x.value.findIndex(R=>R.id===t)),C=c(()=>o.value+b.value.length*2-j.value*2),oe=c(()=>{const R=l.value==="left"||l.value==="right",B=l.value==="right",ne=l.value==="bottom",K={[l.value]:0,zIndex:C.value,transform:`translate${R?"X":"Y"}(${(w.value?0:-110)*(B||ne?-1:1)}%)`,position:te.value||o.value!==Z?"absolute":"fixed",...E.value?void 0:{transition:"none"}};if(!N.value)return K;const m=x.value[j.value];if(!m)throw new Error(`[Vuetify] Could not find layout item "${t}"`);const k=G.value.get(t);return k&&(m[k.position]+=k.amount),{...K,height:R?`calc(100% - ${m.top}px - ${m.bottom}px)`:h.value?`${h.value}px`:void 0,left:B?void 0:`${m.left}px`,right:B?`${m.right}px`:void 0,top:l.value!=="bottom"?`${m.top}px`:void 0,bottom:l.value!=="top"?`${m.bottom}px`:void 0,width:R?h.value?`${h.value}px`:void 0:`calc(100% - ${m.left}px - ${m.right}px)`}}),ae=c(()=>({zIndex:C.value-1}));return{layoutItemStyles:oe,layoutItemScrimStyles:ae,zIndex:C}},unregister:a=>{r.delete(a),n.delete(a),i.delete(a),y.delete(a),f.delete(a),u.value=u.value.filter(d=>d!==a)},mainRect:S,mainStyles:J,getLayoutItem:H,items:x,layoutRect:I,rootZIndex:o});const Q=c(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ee=c(()=>({zIndex:s?o.value:void 0,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:Q,layoutStyles:ee,getLayoutItem:H,items:x,layoutRect:I,layoutRef:g}}const Se=P({...q(),...ge({fullHeight:!0}),...de()},"VApp"),Pe=W()({name:"VApp",props:Se(),setup(e,s){let{slots:o}=s;const u=me(e),{layoutClasses:n,getLayoutItem:i,items:r,layoutRef:y}=be(e),{rtlClasses:f}=ye();return U(()=>{var g;return z("div",{ref:y,class:["v-application",u.themeClasses.value,n.value,f.value,e.class],style:[e.style]},[z("div",{class:"v-application__wrap"},[(g=o.default)==null?void 0:g.call(o)])])}),{getLayoutItem:i,items:r,theme:u}}});function xe(){const e=T(!1);return F(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:c(()=>e.value?void 0:{transition:"none !important"}),isBooted:pe(e)}}const we=P({scrollable:Boolean,...q(),...se({tag:"main"})},"VMain"),Ae=W()({name:"VMain",props:we(),setup(e,s){let{slots:o}=s;const{mainStyles:u}=he(),{ssrBootStyles:n}=xe();return U(()=>z(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[u.value,n.value,e.style]},{default:()=>{var i,r;return[e.scrollable?z("div",{class:"v-main__scroller"},[(i=o.default)==null?void 0:i.call(o)]):(r=o.default)==null?void 0:r.call(o)]}})),{}}});export{Pe as V,Ae as a,ze as m,Me as u};