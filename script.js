'use strict';


let diceRoll=document.querySelector(".btn--roll");
let diceImage=document.querySelector(".dice");
let player1=document.querySelector(".player--0");
let player2=document.querySelector(".player--1");
let currentScorePlayer1=document.querySelector("#current--0");
let currentScorePlayer2=document.querySelector("#current--1");
let currentScore1=Number(currentScorePlayer1.textContent);
let currentScore2=Number(currentScorePlayer2.textContent);
let holdButton=document.querySelector(".btn--hold");
let player1TotalScore=document.querySelector("#score--0")
let player2TotalScore=document.querySelector("#score--1")
let scorePlayer1=Number(player1TotalScore.textContent)
let scorePlayer2=Number(player2TotalScore.textContent)
let playAgain=document.querySelector(".btn--new");
let winner1=document.querySelector(".winner0");
let winner2=document.querySelector(".winner1");
let playing=true;

let diceRollFunc=function(){
    if(playing){
    diceImage.classList.remove("hidden");
    let diceNumber=Math.trunc(Math.random()*6)+1;
    let diceImageName=`dice-${diceNumber}.png`
    diceImage.setAttribute('src',diceImageName);
    if(player1.classList.contains('player--active')){
        currentScore1+=diceNumber;
        currentScorePlayer1.textContent=currentScore1;
    }
    else{
        currentScore2+=diceNumber;
        currentScorePlayer2.textContent=currentScore2;
    }
    if(diceNumber===1){
           if(player1.classList.contains('player--active')){
            currentScore1=0;
            currentScorePlayer1.textContent=currentScore1;
            player1.classList.remove('player--active');
            player2.classList.add('player--active');
           }
           else{
            currentScore2=0;
            currentScorePlayer2.textContent=currentScore2;
            player2.classList.remove('player--active');
            player1.classList.add('player--active');
        }
           }
    }
}


let holdButtonFunc=function(){
    if(playing){
   if(player1.classList.contains('player--active')){
   scorePlayer1+=currentScore1;
   if(scorePlayer1>=100){
       playing=false;
       winner1.textContent='🏆 Winner';
       currentScore1=0;
       player1TotalScore.textContent=scorePlayer1;
       currentScorePlayer1.textContent=0;
   }
   else{
   currentScore1=0;
   player1TotalScore.textContent=scorePlayer1;
   currentScorePlayer1.textContent=0;
   player1.classList.remove('player--active');
   player2.classList.add('player--active');
       }
   }
     else{
        scorePlayer2+=currentScore2;
        if(scorePlayer2>=100){
            playing=false;
            winner2.textContent='🏆 Winner';
            player2.classList
            currentScore2=0;
    player2TotalScore.textContent=scorePlayer2;
    currentScorePlayer2.textContent=0;

        }
        else{
    currentScore2=0;
    player2TotalScore.textContent=scorePlayer2;
    currentScorePlayer2.textContent=0;
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
     }
   }
}
}


let playAgainFunc=function(){
    playing=true;
    currentScore1=0;
    scorePlayer1=0;
    currentScore2=0;
    scorePlayer2=0;
    currentScorePlayer1.textContent=0;
    currentScorePlayer2.textContent=0;
    player1TotalScore.textContent=0;
    player2TotalScore.textContent=0;
    winner1.textContent="";
    winner2.textContent="";
    if(player2.classList.contains('player--active')) {
        player1.classList.add('player--active');
    player2.classList.remove('player--active');
     }
     else{
        player1.classList.add('player--active');
     }

}


diceRoll.addEventListener("click",diceRollFunc)
holdButton.addEventListener("click",holdButtonFunc)
playAgain.addEventListener("click",playAgainFunc)
