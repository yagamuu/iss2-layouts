import{p as d,c as r,q as p,u as _,d as m,r as f,i as g,o as h,j as y,w as v,e as o,s as c,n as B,t as b,l as w,m as C}from"./timer-c5614273.js";import{_ as x}from"./BaseOverlay.vue_vue_type_script_setup_true_lang-d6a7c2ff.js";function L(){const s=d("timekeeping","nodecg-timekeeper"),t=r(()=>!(s!=null&&s.data)||s.data.time.rawInSecond<=0?"00:00":s.data.time.display),e=r(()=>{var a;return((a=s==null?void 0:s.data)==null?void 0:a.status)||"finished"});return{timekeeping:s,time:t,status:e}}function P(){const s=p("prLayoutBg","iss2-layouts"),{runDataActiveRun:t}=_(),e=r(()=>{const a=s==null?void 0:s.value.find(i=>{var n;return((n=t==null?void 0:t.data)==null?void 0:n.customData.prLayoutBg)===i.base});return(a==null?void 0:a.url)??""});return{prLayoutBg:s,selectedPrLayoutBgUrl:e}}const R="/bundles/iss2-layouts/shared/dist/assets/pr_bg-f22b8b2a.png",S=o("img",{src:R,class:"main_image"},null,-1),k={class:"information"},D=["src"],H=m({__name:"main",setup(s){const{time:t,status:e}=L(),{selectedPrLayoutBgUrl:a}=P(),i=r(()=>e.value==="paused"?"pause":t.value==="00:00"?"complete":"");return f(t,(n,u)=>{n==="00:00"&&u!=="00:00"&&nodecg.playSound("pr-finish")}),g({title:"PR"}),(n,u)=>(h(),y(x,null,{default:v(()=>[S,o("div",k,[o("img",{src:c(a)},null,8,D),o("div",{class:B([i.value,"time"])},b(c(t)),3)])]),_:1}))}});const l=w(H),U=C();l.use(U);l.mount("#app");
