const t=new class{constructor(t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.initialState=t,this.score=0,this.state=[...this.initialState],this.status="idle"}moveLeft(){let t=[],e=!1;for(let e=3;e>=0;e--){let s=this.state[e].filter(t=>0!==t);for(let t=1;t<s.length;t++)s[t]===s[t-1]&&(s[t-1]*=2,delete s[t],this.score+=s[t-1]);let i=s.filter(t=>void 0!==t);for(let t=i.length;t<4;t++)i.push(0);t[e]=i}for(let s=0;s<=3;s++)for(let i=0;i<=3;i++)t[s][i]!==this.state[s][i]&&(e=!0);e&&(this.state=t,this.addCell()),this.checkLose(),this.checkWin()}moveRight(){let t=[],e=!1;for(let e=3;e>=0;e--){let s=this.state[e].filter(t=>0!==t);for(let t=s.length-1;t>=0;t--)s[t]===s[t-1]&&(s[t]*=2,s[t-1]=0,this.score+=s[t]);let i=s.filter(t=>0!==t);for(let t=i.length;t<4;t++)i.unshift(0);t[e]=i}for(let s=0;s<=3;s++)for(let i=0;i<=3;i++)t[s][i]!==this.state[s][i]&&(e=!0);e&&(this.state=t,this.addCell()),this.checkLose(),this.checkWin()}moveUp(){this.state=this.turn(this.state),this.moveLeft(),this.state=this.turn(this.state)}moveDown(){this.state=this.turn(this.state),this.moveRight(),this.state=this.turn(this.state)}getScore(){return this.score}getState(){return this.state}getStatus(){return this.status}start(){this.status="playing",this.addCell(),this.addCell()}restart(){this.status="idle",this.state=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.score=0}addCell(){let t=Math.random()>.1?2:4,e=0;do{let s=Math.round(3*Math.random()),i=Math.round(3*Math.random());0===this.state[s][i]&&(this.state[s][i]=t,e++)}while(e<1)}turn(t){let e=[];for(let s=0;s<=3;s++){let i=[t[0][s],t[1][s],t[2][s],t[3][s]];e.push(i)}return e}checkWin(){for(let t=0;t<=3;t++)for(let e=0;e<=3;e++)2048===this.state[t][e]&&this.win()}win(){this.status="win"}checkLose(){let t=0;for(let e=0;e<=3;e++)for(let s=0;s<=3;s++)0===this.state[e][s]&&t++;0===t&&this.lose()}lose(){this.status="lose"}},e=document.querySelector(".start"),s=document.querySelector(".game-score"),i=document.querySelector("tbody"),l=document.querySelector(".message-win"),r=document.querySelector(".message-start"),o=document.querySelector(".message-lose"),a=document.createElement("button"),h=document.querySelector(".controls");function n(){s.textContent=t.getScore();let e=[...i.querySelectorAll(".field-row")];for(let s=0;s<4;s++)for(let i=0;i<4;i++){let l=[...e[s].querySelectorAll(".field-cell")];if(0===t.getState()[s][i]&&(l[i].textContent=null,l[i].className="field-cell"),0!==t.getState()[s][i]){l[i].textContent=t.getState()[s][i];let e="field-cell--"+t.getState()[s][i];l[i].className="field-cell",l[i].classList.add(e)}}}a.classList.add("restart"),a.classList.add("button"),a.textContent="Restart",e.addEventListener("click",()=>{t.start(),n(),r.classList.add("hidden")}),a.addEventListener("click",()=>{r.classList.remove("hidden"),h.append(e),a.remove(),"win"===t.status&&l.classList.add("hidden"),"lose"===t.status&&o.classList.add("hidden"),t.restart(),n()}),document.addEventListener("keydown",s=>{"playing"===t.status&&("ArrowLeft"===s.key&&t.moveLeft(),"ArrowRight"===s.key&&t.moveRight(),"ArrowUp"===s.key&&t.moveUp(),"ArrowDown"===s.key&&t.moveDown(),n(),e&&(e.remove(),h.append(a)),"win"===t.status&&l.classList.remove("hidden"),"lose"===t.status&&o.classList.remove("hidden"))});
//# sourceMappingURL=index.76d7a1b8.js.map
