const choices = ["rock", "paper", "scissors"];

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function game(rounds) {
    for (let i = 1; i <= rounds; i++) {
        playRound(playerSelection, computerSelection)
        if ()
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors")
        return 0;
    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper")
        return 1;
    else if (playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors")
        return -1;
    else return alert("Error: Invalid entry!")
}

function getComputerChoice() {
    return choices[randomInt()];
}

function randomInt() {
    return Math.floor(Math.random() * 3);
}