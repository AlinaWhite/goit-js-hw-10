import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-BbbuE1sJ.js";const c=document.querySelector("#datetime-picker"),r=document.querySelector("button[data-start]"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");r.addEventListener("click",b);let i,u;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=Date.now()?(r.disabled=!0,y.error({backgroundColor:"tomato",message:"Please choose a date in the future",messageColor:"white",messageSize:"20",position:"topRight",close:!0,displayMode:2})):(r.disabled=!1,i=t[0])}};h(c,D);function b(){u=setInterval(k,1e3),r.disabled=!0,c.disabled=!0}function M(t){const{days:o,hours:e,minutes:a,seconds:s}=q(t);!o&&!e&&!a&&!s&&(clearInterval(u),c.disabled=!1),p.textContent=n(o),S.textContent=n(e),g.textContent=n(a),C.textContent=n(s)}function k(){const t=new Date().getTime(),e=new Date(i).getTime()-t;M(e)}function n(t){return t.toString().padStart(2,"0")}function q(t){const d=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:l,minutes:m,seconds:f}}
//# sourceMappingURL=1-timer.js.map