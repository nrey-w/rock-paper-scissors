const PAPER = 'Paper';
const ROCK = 'Rock';
const SCISSORS = 'Scissors';
const OPTIONS = [PAPER, ROCK, SCISSORS];

let playerCount = 0;
let computerCount = 0;
let round;
let result = document.querySelector("#answer");
let computerScore = document.querySelector("#computerScore");
let playerScore = document.querySelector("#playerScore");
let sound = document.querySelector("#sound");



function generateRandomInt(max){
    return Math.floor(Math.random() * max);
}

function computerPlay(){
    let index = generateRandomInt(3);
    return OPTIONS[index];
}

function determineWinner(selection1, selection2){

    let winner;
    const pair1 = [PAPER, SCISSORS];
    const pair2 = [ROCK, PAPER];
    const pair3 = [SCISSORS, ROCK];

    if (pair1.includes(selection1) && pair1.includes(selection2)){
        winner = SCISSORS;
    } 
    else if (pair2.includes(selection1) && pair2.includes(selection2)){
        winner = PAPER;
    }
    else if (pair3.includes(selection1) && pair3.includes(selection2)){
        winner = ROCK;
    }
    return winner;

}

function playRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection) {
        result.textContent = 'It is a tie!';
        console.log('It is a tie!');
        return 0;
    } 
    console.log(playerSelection);
    let winner = determineWinner(playerSelection, computerSelection);
    console.log(playerSelection, winner);
    console.log(playerSelection === winner);


    if (playerSelection === winner) {
        console.log(`You Won! ${playerSelection} beats ${computerSelection}.`);
        result.textContent = `You Won! ${playerSelection} beats ${computerSelection}.`;
        return true;
    } else {
        console.log(`You Lost! ${computerSelection} beats ${playerSelection}.`);
        result.textContent = `You Lost! ${computerSelection} beats ${playerSelection}.`;
        return false;
    }

}

function playGame(e){

    playAudio();
    let playerSelection = this.getAttribute("text");
    let computerSelection = computerPlay();

       
       console.log(`Player: ${playerSelection}`);
       console.log(`Computer: ${computerSelection}`);
       roundResult = playRound(playerSelection, computerSelection);

       console.log(roundResult);
 
       if (roundResult === 0){
        
        } 
       else if (roundResult) {
            ++playerCount; 
        }
        else {
            ++computerCount;  
                
        }

        computerScore.textContent = computerCount;
        playerScore.textContent = playerCount;
        
        console.log(`Player: ${playerCount}`);
        console.log(`Computer: ${computerCount}`);

        if (playerCount >= 5 || computerCount >= 5 ){
            let  finalMessage = gameOver(playerCount, computerCount, playerSelection);
            result.textContent = finalMessage;

            let div = `<div id="inner">Game Over!!!  ${finalMessage}</div>`;
            document.body.innerHTML = div;
     
         }

}

function gameOver(playerCount, computerCount){
    buttons.forEach (button => {
        button.removeEventListener("click", playGame);
    });
    if (playerCount > computerCount){
        return 'You won the game!'
    }
    else if(playerCount < computerCount){
        return 'You lost the game!';
    }
    else {
        return 'It is a tie game!';
    }

}

function playAudio(){
    sound.currentTime = 0;
    sound.play();

}


const buttons = document.querySelectorAll(".button");

buttons.forEach (button => {

    button.addEventListener("click", playGame);
});

