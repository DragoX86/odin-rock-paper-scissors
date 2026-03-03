/* test to see if script.js is linked to html 
console.log("Hello World, \"script.js\" was loaded successfully!");
*/

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
        computerAnswer = "scissor";
    }

    return computerAnswer;
}
getComputerChoice()

function getHumanChoice() {
    let humanInput = prompt("Please enter: rock, paper, or scissor").toLowerCase();

    if (humanInput == "rock" || humanInput == "paper" || humanInput == "scissor"){
        return humanInput;
    }
    else {
        return console.log( "\""+humanInput+"\" is an invalid value. Please refresh the page and try again.");
    }
}
getHumanChoice();