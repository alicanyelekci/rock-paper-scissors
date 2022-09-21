const choices = ["rock", "paper", "scissors"];
let player = 0;
let computer = 0;

const rock = document.querySelector("#rock-button");
const paper = document.querySelector("#paper-button");
const scissors = document.querySelector("#scissors-button");

rock.addEventListener('click', () => playRound("rock", getComputerChoice()));
paper.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissors.addEventListener('click', () => playRound("scissors", getComputerChoice()));

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") player++;
    else if (playerSelection === computerSelection);
    else computer++;

    updateScoreBoard(player, computer)

    if (player === 5) {
        alert(`You Win!, Player = ${player} - Computer = ${computer}`);
        resetGame();
    }
    else if (computer === 5) {
        alert(`Computer Won!, Player = ${player} - Computer = ${computer}`);
        resetGame();
    }
}

function resetGame() {
    player = 0;
    computer = 0;
    document.getElementById("scoreboard").innerText = `Player = ${player} - Computer = ${computer}`;
}

function updateScoreBoard(player, computer) {
    document.getElementById("scoreboard").innerText = `Player = ${player} - Computer = ${computer}`;
}

function getComputerChoice() {
    return choices[randomOfThree()];
}

function randomOfThree() {
    return Math.floor(Math.random() * 3);
}