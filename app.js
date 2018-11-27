/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

"use strict";


$('.popup .close').on('click', function() {
    $(this).parent().fadeOut();
  });

let scores,roundScore,activePlayer,gamePlaying;

newGame();





document.querySelector(".btn-roll").addEventListener("click",function(){

    if(gamePlaying){

        let dice = Math.floor(Math.random() * 6)+ 1;

    //  Display png according to random number.
        let diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = ("dice-")+ dice + ".png";

    // Update the round score if rolled number is NOT a 1

    if(dice !== 1){
        // ADD SCORE
        roundScore+=dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore
        
    }else{
        //  Change to next Player
        nextPlayer()

    }
    
    }
    // Make the dice variable use a random number between one and six
    
});

document.querySelector(".btn-hold").addEventListener("click",function(){
    if(gamePlaying){
         //  Add Currect Score to Global Score
      scores[activePlayer] += roundScore;
      // Update the UI DOM Manipulation
      document.querySelector("#score-" + activePlayer).textContent =scores[activePlayer];
      let input = document.querySelector
      // Check if player won
        if (scores[activePlayer] >= 20){
            document.querySelector("#name-"+ activePlayer).textContent = "Winner!";
            document.querySelector(".dice").style.display="none";
            document.querySelector(".player-"+ activePlayer +"-panel").classList.add("winner")
            document.querySelector(".player-"+ activePlayer +"-panel").classList.remove("active")
            gamePlaying = false;
          }else{
    //  Change to next Player
            nextPlayer()
        }
    }
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 :activePlayer = 0;
    roundScore = 0;

    document.getElementById("current-0").textContent = "0"
    document.getElementById("current-1").textContent = "0"

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display="none";
}

document.querySelector(".btn-new").addEventListener("click",newGame)

   


function newGame(){
    scores =[0,0];
 roundScore = 0;
 activePlayer = 0;
 gamePlaying = true;

 document.querySelector(".dice").style.display="none";

document.getElementById("score-0").textContent = "0"
document.getElementById("score-1").textContent = "0"
document.getElementById("current-0").textContent = "0"
document.getElementById("current-1").textContent = "0"
document.querySelector("#name-0").textContent = "Player 1";
document.querySelector("#name-1").textContent = "Player 2";
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

document.querySelector(".player-0-panel").classList.add("active");

}