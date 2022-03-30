const $stoneButton1 = document.querySelector(".button-stone-01")
const $paperButton1 = document.querySelector(".button-paper-01")
const $scissorsButton1 = document.querySelector(".button-scissors-01")

const $stoneButton2 = document.querySelector(".button-stone-02")
const $paperButton2 = document.querySelector(".button-paper-02")
const $scissorsButton2 = document.querySelector(".button-scissors-02")

const $fieldPlayer1 = document.querySelector(".field-01")
const $fieldPlayer2 = document.querySelector(".field-02")

$stoneButton1.addEventListener("click", function() {
    $fieldPlayer1.innerHTML = "<img class='move-image' src='./images/stone.png' alt=''>"
})

$paperButton1.addEventListener("click", function() {
    $fieldPlayer1.innerHTML = "<img class='move-image' src='./images/paper.png' alt=''>"
})

$scissorsButton1.addEventListener("click", function() {
    $fieldPlayer1.innerHTML = "<img class='move-image' src='./images/scissors.png' alt=''>"
})

$stoneButton2.addEventListener("click", function() {
    $fieldPlayer2.innerHTML = "<img class='move-image' src='./images/stone.png' alt=''>"
})

$paperButton2.addEventListener("click", function() {
    $fieldPlayer2.innerHTML = "<img class='move-image' src='./images/paper.png' alt=''>"
})

$scissorsButton2.addEventListener("click", function() {
    $fieldPlayer2.innerHTML = "<img class='move-image' src='./images/scissors.png' alt=''>"
})