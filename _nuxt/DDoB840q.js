import{_ as A}from"./YxSHZR55.js";import{_ as S}from"./BPxdfxIU.js";import{D as y,s as C,n as g,q as r,v as i,z as p,r as V,x as P,E as I,o as N,c as B,b as o,w as s,a,A as u,_ as $,p as k,e as D}from"./Cykx3Bfw.js";import{V as E}from"./D3jn1yn2.js";import{V as M,a as R}from"./CYHTfspN.js";import{_ as j}from"./DlAUqK2U.js";import"./Cva26kno.js";import"./3VhkF2pp.js";const l=n=>(k("data-v-e0f1eccb"),n=n(),D(),n),q={class:"cover-wrapper"},z=l(()=>a("h1",{class:"text-h1 text-center"},"Martin Kaller",-1)),G=l(()=>a("h1",{class:"text-lg-h2 text-h3 font-weight-thin text-center"}," LANDSCAPE PHOTOGRAPHY ",-1)),H=["src"],L=l(()=>a("div",{class:"cover-spacer"},null,-1)),O=y({__name:"index",async setup(n){let t,c;const d=C(),h=g(),m=r(()=>h.byName("portfolio")),{data:f}=([t,c]=i(()=>p(`/api/albums/${m.value._id}/photos`,"$pqtWcjQkdb")),t=await t,c(),t),_=r(()=>d.byIds(f.value));V(P());const x=r(()=>_.value.filter(e=>e.width>e.height));return r(()=>_.value.filter(e=>e.width<e.height)),I(()=>0,"$cmRBlMwAGX"),[t,c]=i(()=>p("/api/posts","$P8rApiifAs")),t=await t,c(),(e,F)=>{const v=A,w=S,b=$;return N(),B("div",null,[o(b,{name:"default"},{header:s(()=>[a("div",q,[o(E,{fluid:"",class:"title fill-height text-white"},{default:s(()=>[o(M,{align:"center",justify:"center"},{default:s(()=>[o(R,{class:"d-flex flex-column"},{default:s(()=>[z,G]),_:1})]),_:1})]),_:1}),a("img",{src:u(x)[0].paths.h1080,class:"cover"},null,8,H)]),L]),default:s(()=>[o(w,null,{default:s(()=>[o(v,{photos:u(_)},null,8,["photos"])]),_:1})]),_:1})])}}}),Z=j(O,[["__scopeId","data-v-e0f1eccb"]]);export{Z as default};