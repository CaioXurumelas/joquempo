const $stoneButton1 = document.querySelector(".button-stone-01")
const $paperButton1 = document.querySelector(".button-paper-01")
const $scissorsButton1 = document.querySelector(".button-scissors-01")

const $stoneButton2 = document.querySelector(".button-stone-02")
const $paperButton2 = document.querySelector(".button-paper-02")
const $scissorsButton2 = document.querySelector(".button-scissors-02")

const $fieldPlayer1 = document.querySelector(".field-01")
const $fieldPlayer2 = document.querySelector(".field-02")

const $winnerTitle = document.querySelector(".winner-title")

let movePlayer1 = ""
let movePlayer2 = ""

let gameResult = "null"

function verifyGame() {
    if (movePlayer1 == "stone" && movePlayer2 == "paper") {
        gameResult = 2
    } else if (movePlayer1 == "stone" && movePlayer2 == "scissors") {
        gameResult = 1
    } else if (movePlayer1 == "paper" && movePlayer2 == "stone") {
        gameResult = 1
    } else if (movePlayer1 == "paper" && movePlayer2 == "scissors") {
        gameResult = 2
    } else if (movePlayer1 == "scissors" && movePlayer2 == "stone") {
        gameResult = 2
    } else if (movePlayer1 == "scissors" && movePlayer2 == "paper") {
        gameResult = 1
    } else if (movePlayer1 == movePlayer2) {
        gameResult = 0
    }
}

function printGameResult() {
    if (gameResult == 0) {
        $winnerTitle.innerHTML = "Empatou!"
    } else if (gameResult == 1) {
        $winnerTitle.innerHTML = "Jogador 1 Ganhou!"
    } else if (gameResult == 2) {
        $winnerTitle.innerHTML = "Jogador 2 Ganhou!"
    }
}

$stoneButton1.addEventListener("click", function() {
    $fieldPlayer1.innerHTML = "<img class='move-image' src='./images/stone.png' alt=''>"
    movePlayer1 = "stone"
    verifyGame()
    printGameResult()
})

$paperButton1.addEventListener("click", function() {
    $fieldPlayer1.innerHTML = "<img class='move-image' src='./images/paper.png' alt=''>"
    movePlayer1 = "paper"
    verifyGame()
    printGameResult()
})

$scissorsButton1.addEventListener("click", function() {
    $fieldPlayer1.innerHTML = "<img class='move-image' src='./images/scissors.png' alt=''>"
    movePlayer1 = "scissors"
    verifyGame()
    printGameResult()
})

$stoneButton2.addEventListener("click", function() {
    $fieldPlayer2.innerHTML = "<img class='move-image' src='./images/stone.png' alt=''>"
    movePlayer2 = "stone"
    verifyGame()
    printGameResult()
})

$paperButton2.addEventListener("click", function() {
    $fieldPlayer2.innerHTML = "<img class='move-image' src='./images/paper.png' alt=''>"
    movePlayer2 = "paper"
    verifyGame()
    printGameResult()
})

$scissorsButton2.addEventListener("click", function() {
    $fieldPlayer2.innerHTML = "<img class='move-image' src='./images/scissors.png' alt=''>"
    movePlayer2 = "scissors"
    verifyGame()
    printGameResult()
})