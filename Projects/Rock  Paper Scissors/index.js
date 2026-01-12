

const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const playerScoreEl = document.getElementById("playerScore")
const computerScoreEl = document.getElementById("computerScore")

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = ""

    if (playerChoice == computerChoice){
        result = "IT IS A TIE!"
    }else{
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOST";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOST"
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOST"
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`
    resultDisplay.textContent = result

    resultDisplay.classList.remove("greenText", "redText")
    if(resultDisplay.textContent === "YOU WIN"){
        playerScore++;
        playerScoreEl.textContent = playerScore
        resultDisplay.classList.add("greenText")
    }
    if(resultDisplay.textContent === "YOU LOST"){
        computerScore++;
        computerScoreEl.textContent = computerScore
        resultDisplay.classList.add("redText")
    }
}