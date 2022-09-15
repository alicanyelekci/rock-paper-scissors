const choices = ["rock", "paper", "scissors"];

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors")
        return console.log("Tie!");
    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper")
        return console.log("You win!");
    else if (playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors")
        return console.log("You lose!");
    else return alert("Error: Invalid entry!")
}

function getComputerChoice() {
    return choices[randomInt()];
}

function randomInt() {
    return Math.floor(Math.random() * 3);
}