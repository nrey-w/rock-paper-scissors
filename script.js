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

function determineWinner(selection1, selection2){

    let winner;
    const pair1 = [PAPER, SCISSORS];
    const pair2 =[ROCK, PAPER];
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
    
    let playerSelectionLower = playerSelection.toLowerCase();
    if (playerSelectionLower === computerSelection) {
        return 'It is a tie!';
    } 

    let winner = determineWinner(playerSelectionLower, computerSelection);

    if (playerSelectionLower == winner) {
        console.log(`You Won! ${playerSelection} beats ${computerSelection}.`);
        return true;
    } else {
        console.log(`You Lost! ${computerSelection} beats ${playerSelection}.`);
        return false;
    }

}

function game(){

    let playerCount = 0;
    let computerCount = 0;
    let playerSelection;
    let computerSelection;
    let round;
 

    for (let index=1; index<=3; index++){

        playerSelection = prompt("Scissors, rock or paper?");
        if (playerSelection==null){
            if (confirm("Do you wish to play?")){
                continue;
            }
            else {
                break;
            }
        } else if (!OPTIONS.includes(playerSelection.toLowerCase())){
            alert("Invalid input!");
            continue;
            }

            

       //computerSelection = computerPlay();
       computerSelection = 'rock';
       console.log(`----- Round ${index} -----`);
       console.log(`Player: ${playerSelection}`);
       console.log(`Computer: ${computerSelection}`);
       round = playRound(playerSelection, computerSelection);
       console.log(round);
       if (round === 'It is a tie!'){
        index--;
        continue;
    } 
       else if (round){
            ++playerCount; 
        }
        else {
            ++computerCount;        
        }
        console.log(`Player: ${playerCount}`);
        console.log(`Computer: ${computerCount}`);

    }
    if (playerSelection === null){
        alert("Aborting the game!");
        return "Aborting the game!";
    }
    else {   
        return gameOver(playerCount, computerCount, playerSelection);
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

console.log(game());