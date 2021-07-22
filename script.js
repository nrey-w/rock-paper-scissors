const PAPER = 'paper';
const ROCK = 'rock';
const SCISSORS = 'scissors';
const OPTIONS = [PAPER, ROCK, SCISSORS];


function generateRandomInt(max){
    return Math.floor(Math.random() * max);
}

function computerPlay(){
    let index = generateRandomInt(3);
    return OPTIONS[index];
}

const computerSelection = computerPlay();
const playerSelection = "rock";

function playRound(playerSelection, computerSelection){
    
    let playerSelectionLower = playerSelection.toLowerCase();
    if (playerSelection==computerSelection) {
        return 'It is a tie!';
    } 

    let winner = getWinner (playerSelectionLower, computerSelection);

    if (playerSelectionLower == winner) {
        return `You Won! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You Lost! ${computerSelection} beats ${playerSelection}.`;
    }


}


function getWinner(first, second){
    let winner;
    const pair1 = [PAPER, SCISSORS];
    const pair2 =[ROCK, PAPER];
    const pair3 = [SCISSORS, ROCK];

    if (pair1.includes(first) && pair1.includes(second)){
        winner = SCISSORS;
    } 
    else if (pair2.includes(first) && pair2.includes(second)){
        winner = PAPER;
    }
    else if (pair3.includes(first) && pair3.includes(second)){
        winner = ROCK;
    }
    return winner;
}



console.log(playRound(playerSelection, computerSelection));