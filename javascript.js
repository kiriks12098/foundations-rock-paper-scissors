const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = options[Math.floor(Math.random()*3)];
    console.log(choice);
    return choice;
}

getComputerChoice()