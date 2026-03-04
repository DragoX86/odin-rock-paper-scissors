/* test to see if script.js is linked to html 
console.log("Hello World, \"script.js\" was loaded successfully!");
*/

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    let computerAnswer;

    if (randomNumber < 33){
        computerAnswer = "rock";
    }
    else if (randomNumber > 33 && randomNumber < 67) {
        computerAnswer = "paper";
    }
    else {
        computerAnswer = "scissors";
    }

    return computerAnswer;
}


function getHumanChoice() {
    let humanInput = prompt("Please enter: rock, paper, or scissors").toLowerCase();

    if (humanInput == "rock" || humanInput == "paper" || humanInput == "scissors"){
        return humanInput;
    }
    else {
        return console.log( "\""+humanInput+"\" is an invalid value. Please refresh the page and try again.");
    }
}

function playRound(humanChoice, computerChoice) {
    // Lose conditions:
    if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore =+ 1;
        return console.log("You lose! Paper beats Rock");
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore =+ 1;
        return console.log("You lose! Scissors beats Paper");
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore =+ 1;
        return console.log("You lose! Rock beats Scissors");
    }
    // Win conditions:
    else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore =+ 1;
        return console.log("You Win! Paper beats Rock");
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore =+ 1;
        return console.log("You Win! Scissors beats Paper");
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore =+ 1;
        return console.log("You Win! Rock beats Scissors");
    }
    // Draw condition:
    else {
        return console.log("Draw! No points awarded");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);