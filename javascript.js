const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = options[Math.floor(Math.random()*3)];
    console.log(choice);
    return choice;
}

function getWinner(computer, player) {
    if (computer === player) {
        console.log("It's a tie!");
        return;
    } else if (computer === "rock") {
        if (player === "paper") {
            console.log("You win!");
        }
        else {
            console.log("You lose!");
        }
    } else if (computer === "paper") {
        if (player === "scissors") {
            console.log("You win!");
        } else {
            console.log("You lose!");
        }
    } else if (computer === "scissors") {
        if (player === "rock") {
            console.log("You win!");
        } else {
            console.log("You lose!")
        }
    }
}


let computerChoice = getComputerChoice();
let playerChoice = prompt("Make a choice - Rock, Paper, or Scissors: ");

getWinner(computerChoice, playerChoice.toLowerCase());