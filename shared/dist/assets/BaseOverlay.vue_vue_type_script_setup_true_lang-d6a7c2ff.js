import{d as s,z as _,c,o as l,b as i,e as a,t as g,A as m,B as v,k as h}from"./timer-c5614273.js";const S=a("p",{class:"footer-description"}," 本イベントは、RTA in Japanのチャンネル貸出システムを利用した外部のRTAイベントです。 ",-1),$={class:"footer-time"},f=s({__name:"TheFooter",setup(r){const t=_(new Date),n=c(()=>{const e=t.value.getFullYear().toString(),o=(t.value.getMonth()+1).toString(),u=t.value.getDate().toString(),p=t.value.getHours().toString().padStart(2,"0"),d=t.value.getMinutes().toString().padStart(2,"0");return`${e}/${o}/${u} ${p}:${d}`});return setInterval(()=>{t.value=new Date},1e3),(e,o)=>(l(),i("footer",null,[S,a("p",$,g(n.value),1)]))}}),y={class:"container-inner"},b=s({__name:"BaseOverlay",props:{clipPath:{},backgroundUrl:{}},setup(r){const t=r,n=c(()=>{const e=t.clipPath?`polygon(${t.clipPath})`:"",o=t.backgroundUrl?`url(${t.backgroundUrl})`:void 0;return{clipPath:e,backgroundImage:o}});return(e,o)=>(l(),i("div",null,[a("div",{id:"container",style:v(n.value)},[a("div",y,[m(e.$slots,"default")])],4),h(f)]))}});export{b as _};
