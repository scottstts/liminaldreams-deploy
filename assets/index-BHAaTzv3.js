const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/boot-CZ-u0I1m.js","assets/preload-helper-CtdNp52X.js","assets/three-Cj2Sj7BB.js","assets/boot-WpYVckrK.css"])))=>i.map(i=>d[i]);
import{c as e,d as t,o as n,r,t as i}from"./preload-helper-CtdNp52X.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var a=matchMedia(`(pointer: coarse)`).matches&&!matchMedia(`(any-pointer: fine)`).matches,o=1300,s=class{el;fill;percent;onEnter=null;state=`loading`;isTouch;constructor(e,t){this.isTouch=t;let n=document.createElement(`section`);n.id=`gate`,n.setAttribute(`aria-label`,`Liminal Dreams`),n.innerHTML=`
      <div class="gate-sky" aria-hidden="true">
        <i class="cloud c1"></i><i class="cloud c2"></i><i class="cloud c3"></i><i class="cloud c4"></i>
        <i class="grain"></i>
      </div>
      <div class="gate-stage">
        <div class="threshold" aria-hidden="true">
          <div class="door"><i class="door-light"></i><i class="door-horizon"></i></div>
          <i class="door-floor"></i>
          <svg class="door-star" viewBox="0 0 24 24"><path d="M12 0l2.3 9.7L24 12l-9.7 2.3L12 24l-2.3-9.7L0 12l9.7-2.3Z"/></svg>
        </div>
        <h1 class="gate-title">Liminal Dreams</h1>
        <p class="gate-tag"><i></i>Happily lost<i></i></p>
        <div class="gate-status">
          <span class="gate-percent" aria-live="polite">0%</span>
          <span class="gate-enter">${this.isTouch?`Tap to enter`:`Click to enter`}</span>
        </div>
        <p class="gate-hints">${this.hints()}</p>
      </div>
      <div class="gate-error" role="alert" hidden></div>`,e.appendChild(n),this.el=n,this.fill=n.querySelector(`.door-light`),this.percent=n.querySelector(`.gate-percent`),n.addEventListener(`click`,this.handleEnter),n.addEventListener(`touchend`,this.handleEnter)}setProgress(e){let t=Math.min(1,Math.max(0,e));this.fill.style.transform=`scaleY(${t.toFixed(4)})`,this.percent.textContent=`${Math.round(t*100)}%`}ready(e){this.state===`loading`&&(this.onEnter=e,this.setProgress(1),this.state=`ready`,this.el.classList.add(`ready`))}showError(e,t){this.state=`error`,this.el.classList.remove(`ready`,`entering`),this.el.classList.add(`error`),this.el.style.display=``;let n=this.el.querySelector(`.gate-error`),i=e instanceof r?`Liminal Dreams needs a browser with WebGPU enabled, such as a recent Chrome, Edge or Safari.`:`Something interrupted the dream. Reloading usually brings it back.`,a=[[`Stage`,t.stage],[`Error`,t.error],[`Viewport`,t.viewport],[`Pixel ratio`,t.dpr],[`GPU`,t.gpu],[`Platform`,t.platform]];n.innerHTML=`
      <h2>This dream couldn’t open</h2>
      <p class="lead"></p>
      <dl>${a.map(()=>`<dt></dt><dd></dd>`).join(``)}</dl>
      <button type="button" class="glass">Reload</button>`,n.querySelector(`.lead`).textContent=i;let o=n.querySelectorAll(`dt, dd`);a.forEach(([e,t],n)=>{o[n*2].textContent=e,o[n*2+1].textContent=t}),n.querySelector(`button`).addEventListener(`click`,()=>location.reload()),n.hidden=!1}hints(){let e=e=>`<kbd>${e}</kbd>`;return this.isTouch?`<span>Joystick to move</span><span>Drag to look</span><span>‹ › to drift between dreams</span>`:`<span>${e(`W`)}${e(`A`)}${e(`S`)}${e(`D`)} move</span><span>Mouse look</span><span>${e(`←`)}${e(`→`)} drift between dreams</span><span>${e(`Esc`)} pause</span>`}handleEnter=e=>{this.state===`ready`&&this.onEnter&&(e.type===`touchend`&&e.preventDefault(),this.state=`entered`,this.onEnter(),this.el.classList.add(`entering`),setTimeout(()=>{this.state===`entered`&&(this.el.style.display=`none`)},o))}},c=document.getElementById(`app`);a&&document.body.classList.add(`touch`);var l=new s(c,a);n((e,t)=>l.showError(e,t)),t(`module-import`),i(async()=>{let{boot:e}=await import(`./boot-CZ-u0I1m.js`);return{boot:e}},__vite__mapDeps([0,1,2,3])).then(({boot:e})=>e(c,l,a)).catch(e);