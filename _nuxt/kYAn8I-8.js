import{ac as l}from"./CPXz-x3s.js";class h{constructor(e){let{x:r,y:n,width:i,height:s}=e;this.x=r,this.y=n,this.width=i,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function y(t,e){return{x:{before:Math.max(0,e.left-t.left),after:Math.max(0,t.right-e.right)},y:{before:Math.max(0,e.top-t.top),after:Math.max(0,t.bottom-e.bottom)}}}function p(t){return Array.isArray(t)?new h({x:t[0],y:t[1],width:0,height:0}):t.getBoundingClientRect()}function w(t){const e=t.getBoundingClientRect(),r=getComputedStyle(t),n=r.transform;if(n){let i,s,o,a,f;if(n.startsWith("matrix3d("))i=n.slice(9,-1).split(/, /),s=+i[0],o=+i[5],a=+i[12],f=+i[13];else if(n.startsWith("matrix("))i=n.slice(7,-1).split(/, /),s=+i[0],o=+i[3],a=+i[4],f=+i[5];else return new h(e);const c=r.transformOrigin,d=e.x-a-(1-s)*parseFloat(c),u=e.y-f-(1-o)*parseFloat(c.slice(c.indexOf(" ")+1)),m=s?e.width/s:t.offsetWidth+1,g=o?e.height/o:t.offsetHeight+1;return new h({x:d,y:u,width:m,height:g})}else return new h(e)}function v(t,e,r){if(typeof t.animate>"u")return{finished:Promise.resolve()};let n;try{n=t.animate(e,r)}catch{return{finished:Promise.resolve()}}return typeof n.finished>"u"&&(n.finished=new Promise(i=>{n.onfinish=()=>{i(n)}})),n}const I="cubic-bezier(0.4, 0, 0.2, 1)";function b(){const e=l("useScopeId").vnode.scopeId;return{scopeId:e?{[e]:""}:void 0}}export{h as B,y as a,v as b,p as g,w as n,I as s,b as u};