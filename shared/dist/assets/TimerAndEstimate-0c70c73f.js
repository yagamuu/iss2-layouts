import{f as b,u as _}from"./runData-c9b3d3c0.js";import{k as x,c as l,d as h,o as C,a as v,b as i,t as p,m,n as f,p as S,q as g}from"./index-094a2e7a.js";const y=([t,n,r,e])=>{const o=[[t,r],[t,e],[n,r],[n,e]];return o.sort((s,a)=>s[0]===a[0]?s[1]-a[1]:s[0]-a[0]),[o[0],o[1],o[3],o[2],o[0]]},z=t=>{var e,o;const n=t.map(s=>y(s));n.sort((s,a)=>{var c,d;return!((c=s[0])!=null&&c[0])||!((d=a[0])!=null&&d[0])?0:s[0][0]-a[0][0]});const r=[[0,0]];for(const s of n){if(!((e=s[0])!=null&&e[0])&&((o=s[0])==null?void 0:o[0])!==0)throw new Error("first element of boxCorners is empty");const a=[s[0][0],0];r.push(a,...s,a)}return r.push([1920,0],[1920,1080],[0,1080],[0,0]),`${r.map(s=>s.map(a=>`${a}px`).join(" ")).join(",")}`};function T(){const t=x("timer","nodecg-speedcontrol"),n=l(()=>{if(!(t!=null&&t.data))return 0;const{milliseconds:e}=t.data;return b(Math.trunc(e/1e3))}),r=l(()=>{var o,s,a,c;if(!(t!=null&&t.data))return"stopped";const{runDataActiveRun:e}=_();if((o=e==null?void 0:e.data)!=null&&o.teams&&((a=(s=e==null?void 0:e.data)==null?void 0:s.teams)==null?void 0:a.length)===1){const d=e==null?void 0:e.data.teams[0].id,u=(c=t==null?void 0:t.data)==null?void 0:c.teamFinishTimes[d];if(u&&u.state==="forfeit")return"forfeit"}return t.data.state});return{timer:t,time:n,runState:r}}const I={class:"title"},$={class:"category"},B={class:"platform"},L=h({__name:"InfoBox",setup(t){const{runTitle:n,runCategory:r,runSystem:e}=_();return(o,s)=>(C(),v("div",null,[i("p",I,p(m(n)),1),i("p",$,p(m(r)),1),i("p",B,p(m(e)),1)]))}}),E=t=>(S("data-v-4a4bd1d0"),t=t(),g(),t),k={class:"timer"},w=E(()=>i("p",{class:"timer-label"},"予定タイム",-1)),j={class:"timer-time"},F=h({__name:"TimerAndEstimate",props:{double:{type:Boolean,default:!1}},setup(t){const n=t,{estimate:r}=_(),{time:e,runState:o}=T(),s=l(()=>n.double?"timer-top":"timer-left"),a=l(()=>n.double?"timer-bottom":"timer-right"),c=l(()=>o.value==="paused"?"pause":o.value==="forfeit"?"forfeit":o.value==="finished"?"complete":"");return(d,u)=>(C(),v("div",k,[i("div",{class:f([c.value,s.value])},p(m(e)),3),i("div",{class:f(a.value)},[w,i("p",j,p(m(r)),1)],2)]))}});const M=(t,n)=>{const r=t.__vccOpts||t;for(const[e,o]of n)r[e]=o;return r},N=M(F,[["__scopeId","data-v-4a4bd1d0"]]);export{N as T,L as _,z as c,T as u};
