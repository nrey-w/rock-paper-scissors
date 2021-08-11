const PAPER = 'paper';
const ROCK = 'rock';
const SCISSORS = 'scissors';
const OPTIONS = [PAPER, ROCK, SCISSORS];
let playerCount = 0;
let computerCount = 0;
let round;
let index=1;
let result = document.querySelector("#answer");
let computerScore = document.querySelector("#computerScore");
let playerScore = document.querySelector("#playerScore");
let roundScore = document.querySelector("#round");


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

function playRound(computerSelection, playerSelection){

    if (playerSelection === computerSelection) {
        result.textContent = 'It is a tie!';
        console.log('It is a tie!');
        return 0;
    } 

    let winner = determineWinner(playerSelection, computerSelection);


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

    roundScore.textContent = index;
    let playerSelection = this.textContent.toLowerCase();
    let computerSelection = computerPlay();

       console.log(`----- Round ${index} -----`);
       console.log(`Player: ${playerSelection}`);
       console.log(`Computer: ${computerSelection}`);
       round = playRound(playerSelection, computerSelection);

       if (round === 0){
        
        } 
       else if (round) {
            ++playerCount; 
            index++;
        }
        else {
            ++computerCount;  
            index++;      
        }
        computerScore.textContent = computerCount;
        playerScore.textContent = playerCount;
        
        console.log(`Player: ${playerCount}`);
        console.log(`Computer: ${computerCount}`);

    if (index===3){
        result.textContent = gameOver(playerCount, computerCount, playerSelection);
    }

}

function gameOver(playerCount, computerCount, playerSelection){
    if (playerCount > computerCount){
        return 'You won the game!'
    }
    else if(playerCount < computerCount){
        return 'You lost the game!';
    }
    else if (!OPTIONS.includes(playerSelection.toLowerCase())){
        return 'Invalid input!';
    }
    else {
        return 'It is a tie game!';
    }
}

const buttons = document.querySelectorAll(".buttons");



buttons.forEach (button => {
    button.addEventListener("click", playGame);
});

