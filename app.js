const gameHeading = document.querySelector(".gameHeading");
const rollDice = document.querySelector(".rollDice");
const playerOneHighestScore = document.querySelector("#playerOneHighestScore");
const playerOneScore = document.querySelector("#playerOneScore");
const firstPlayerCard = document.querySelector("#firstPlayerCard");
const secondPlayerCard = document.querySelector("#secondPlayerCard");
const playerTwoHighestScore = document.querySelector("#playerTwoHighestScore");
const playerTwoScore = document.querySelector("#playerTwoScore");
const gamewrapper = document.querySelector(".gameWrapper");
const secondpage = document.querySelector(".secondpage");

let currentPlayer = true; // Agar true hai to pehle wali hoga aur false hoga to dosra wala hoga

function rollthebtn() {
    const newRandmNum = Math.round(Math.random() * 5 + 1)
    rollDice.innerHTML = newRandmNum;
    if (currentPlayer === true) {
        playerOneScore.innerHTML = (Math.round(playerOneScore.innerHTML) + newRandmNum);
    } else {
        playerTwoScore.innerHTML = (Math.round(playerTwoScore.innerHTML) + newRandmNum);
    }
    if (newRandmNum == 1) {
        if (currentPlayer === true) {
            playerOneScore.innerHTML = 0;
        } else {
            playerTwoScore.innerHTML = 0;
        }
        currentPlayer = !currentPlayer;
        checkFirstTurn();
    }
}

function switchPlayer() {

    if (currentPlayer === true) {
        playerOneHighestScore.innerHTML = `${((playerOneScore.innerHTML * 1) + (playerOneHighestScore.innerHTML * 1))}`;
        if (playerOneHighestScore.innerHTML >= 10) {
            gameHeading.innerHTML = "Player 1 won the match";
            return false
        }
    } else {
        playerTwoHighestScore.innerHTML = `${((playerTwoScore.innerHTML * 1) + (playerTwoHighestScore.innerHTML * 1))}`;
        if (playerTwoHighestScore.innerHTML >= 10) {
            gameHeading.innerHTML = "Player 2 won the match";
            return false
        }
    }


    playerOneScore.innerHTML = 0;
    playerTwoScore.innerHTML = 0;

    currentPlayer = !currentPlayer;
    checkFirstTurn();
}



function checkFirstTurn() {
    if (currentPlayer === true) {
        gameHeading.innerHTML = "Player One Turns";
        firstPlayerCard.classList.add("currentTurn");
        secondPlayerCard.classList.remove("currentTurn");
    } else {
        gameHeading.innerHTML = "Player Two Turns";
        firstPlayerCard.classList.remove("currentTurn");
        secondPlayerCard.classList.add("currentTurn");
    }
}

checkFirstTurn();

function startGame() {
    gamewrapper.classList.remove("none");
    secondpage.classList.add("none");
}