// @ts-nocheck
const buttompannel = document.getElementById('#bulblecontainer');
const score =  document.querySelector('#score');
const hitNUmber = document.querySelector("#hit");
const mainbox =  document.querySelector('.panel');
let timer =60;
let scorevalue = 0;
let hitValue;
function scoreIncrease(){
   
   console.log(score);
}
function newHitNumber(){
  hitValue =  Math.floor(Math.random()*10)
  hitNUmber.textContent = hitValue;
}
function makeBubble(){
    let bubble = "";
for(let i= 0; i<=150; i++){
    let randomBubble = Math.floor(Math.random()*10);
    let color ="#"+`${Math.floor(Math.random()*16777215).toString(16)}`;
    bubble += `<div class="bubble" style="background-color:${color};">${randomBubble}</div>`
}
    buttompannel.innerHTML = bubble;
}
function runTimmer(){
 let timerInterval = setInterval(()=>{
    if(timer > 0){
        timer--;
        document.querySelector("#timerbox").textContent = timer;
    }else{
        buttompannel.innerHTML =`
        <img src="./6ob.gif" alt="" id="img">
        <h1 style="color: #fff">Your Score:${scorevalue}<h2>
        `;
        clearInterval(timerInterval);
    }
    },1000)
}
buttompannel.addEventListener("click", (e)=>{
    let bubleClick = Number(e.target.textContent);
    if(bubleClick === hitValue){
        scorevalue += 10;
        score.innerHTML = scorevalue;
        newHitNumber();
        makeBubble();
        return (scorevalue)
    }
})
newHitNumber()
runTimmer()
makeBubble();
