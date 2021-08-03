let p1Score=0;
let p2Score=0;
let isGameOver=false;
const btn1=document.querySelector("#p1Button");
const btn2=document.querySelector("#p2Button");
const span1=document.querySelector("#p1Display");
const span2=document.querySelector("#p2Display");
const sel=document.querySelector("#playto");
const resetBtn=document.querySelector("#reset");

let winningScore=5;

sel.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    reset();
});

btn1.addEventListener("click",()=>{
    if(!isGameOver){
        p1Score++;
        if(p1Score===winningScore){
            isGameOver=true;
            span1.classList.add('winner');
            span2.classList.add('loser');
        }
        span1.textContent=p1Score;
    }
});

btn2.addEventListener("click",()=>{
    if(!isGameOver){
        p2Score++;
        if(p2Score===winningScore){
            isGameOver=true;
            span2.classList.add('winner');
            span1.classList.add('loser');
        }
        span2.textContent=p2Score;
    }
});
function reset(){
    p1Score=0;
    p2Score=0;
    span1.textContent=p1Score;
    span2.textContent=p2Score;
    isGameOver=false;
    span1.classList.remove('winner','loser');
    span2.classList.remove('winner','loser');
}
resetBtn.addEventListener("click",reset);




