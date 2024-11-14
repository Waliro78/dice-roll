
"use strict";

let player1Name = prompt("Please Enter Your name as Player1");
let player2Name = prompt("Please Enter Your name as Player2");
const playerOneName = document.querySelector('.player-1');
const playerTwoName = document.querySelector('.player-2');
const addPlayerOneName = document.querySelector('.addPlayerOneName');
const addPlayerTwoName = document.querySelector('.addPlayerTwoName');


addPlayerOneName.addEventListener('click',function(){
    playerOneName.innerHTML = player1Name
});

addPlayerTwoName.addEventListener('click',function(){
    playerTwoName.innerHTML = player2Name
});

const rollDiceButton = document.querySelector(".roll-dice");
const holdScore = document.querySelector(".hold-score");
const newGame = document.querySelector('.new-gamebtn');

//variable declaration
let score1, score2, totalScore1Ele,totalScore2Ele, playing;


let image = document.querySelector(".image");
image.classList.add("hidden");
const paraEle0 = document.querySelector('.celebrate-0').classList.add('hidden');
const paraEle1 = document.querySelector('.celebrate-1').classList.add('hidden');
let currentScore = 0;
let activePlayer = 0; 
let totalScores = [0,0];
playing = true;

//initialze the values
const initailze = function(){
    playing = true;
    score1 = document.querySelector('.score-0').textContent = 0;
    score2 = document.querySelector('.score-1').textContent = 0;
    totalScore1Ele = document.querySelector(".totalScore-0").textContent = 0;
    totalScore2Ele = document.querySelector(".totalScore-1").textContent = 0;
    document.querySelector(`.section-${activePlayer}`).classList.remove('winner');
    document.querySelector(`.celebrate-${activePlayer}`).classList.add('hidden');
    document.querySelector(`.totalScore-${activePlayer}`).classList.add('active');


    currentScore = 0;
    image.classList.add("hidden");
}
initailze();

let totalSum  = 0;

const switchPlayer = function(){
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.score-${activePlayer}`).textContent = 0;
    document.querySelector(`.totalScore-${activePlayer}`).classList.toggle('active');
    currentScore = 0;
    
}

//rolling dice functionality
rollDiceButton.addEventListener("click",function(){
    if(playing){

        let dice = Math.trunc((Math.random()*6) + 1);
        
        image.src =`./dice-image/dice-${dice}.jpg`;
        image.classList.remove("hidden");
        

            
        //check if 1 is rolled
        if(dice !== 1){
            currentScore  += dice;
            //score1.textContent = currentScore;
            document.querySelector(`.score-${activePlayer}`).textContent = currentScore;
           

        }else{
            //switch player using tenary operator 
            document.querySelector(`.totalScore-${activePlayer}`).classList.toggle('active');
            switchPlayer(); 
           

        }
    }
})

//hold the score
 holdScore.addEventListener('click', function(){
    if(playing){
        document.querySelector(`.totalScore-${activePlayer}`).classList.toggle('active');
        let totalNumber = Number(document.querySelector(`.totalScore-${activePlayer}`).textContent);
        let currentPlayerScore = Number(document.querySelector(`.score-${activePlayer}`).textContent );
        let finalScore = totalNumber += currentPlayerScore;
        
        
        document.querySelector(`.totalScore-${activePlayer}`).textContent = finalScore;
        totalScores[activePlayer] = finalScore;
        console.log(totalScores[activePlayer]);
        
        //2 check if player's score is >= 100
        if(totalScores[activePlayer] >= 100){ 
            
           //game ends
            playing = false; 
            document.querySelector(`.section-${activePlayer}`).classList.add('winner');
            document.querySelector(`.section-${activePlayer}`);
            document.querySelector(`.celebrate-${activePlayer}`).classList.remove('hidden');

            image.classList.add("hidden");
            
           
            
        } else{
            //switch to the next player
            totalScores[0] = totalNumber += currentPlayerScore;
            
            switchPlayer();
        

        }
        
    }
})

// Resetting the game 
newGame.addEventListener('click', initailze)