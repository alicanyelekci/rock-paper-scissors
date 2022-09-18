const choices = ["rock", "paper", "scissors"];

function game(rounds) {
    let player = 0;
    let computer = 0;

    for (let i = 1; i <= rounds; i++) {
        const playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        if (playerSelection == computerSelection) continue;

        playRound(playerSelection, computerSelection)

        if (playRound(playerSelection, computerSelection) == 1) player++;
        else if (playRound(playerSelection, computerSelection) == 0) computer++;
    }

    if (player > computer) console.log("You win!");
    else if (player < computer) console.log("You lose!");
    else console.log("Tie!");
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") return true;
    return false;
}

function getComputerChoice() {
    return choices[randomInt()];
}

function randomInt() {
    return Math.floor(Math.random() * 3);
}