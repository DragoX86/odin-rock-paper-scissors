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
    console.log(randomNumber)
    return console.log(computerAnswer);
}

getComputerChoice();