const options = ["rock", "paper", "scissors"];
let score = 0;

function getComputerChoice() {
    let choice = options[Math.floor(Math.random()*3)];
    // console.log(choice);
    return choice;
}

function getWinner(computer, player) {
    if (computer === player) {
        return ("It's a tie!");
    } else if (computer === "rock") {
        if (player === "paper") {
            win();
            return ("You win! Paper beats rock!");
        }
        else {
            return ("You lose! Rock beats scissors!");
        }
    } else if (computer === "paper") {
        if (player === "scissors") {
            win();
            return ("You win! Scissors beats paper!");
        } else {
            return ("You lose! Paper beats rock!");
        }
    } else if (computer === "scissors") {
        if (player === "rock") {
            win();
            return ("You win! Rock beats scissors!");
        } else {
            return ("You lose! Paper beats rock!")
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Make a choice - Rock, Paper, or Scissors: ");

        let winner = getWinner(computerChoice, playerChoice.toLowerCase());

        console.log(winner);
        console.log(`Your score is ${score}`);
    }
}

function win() {
    score++;
}

game()
