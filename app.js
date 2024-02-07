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
const headingofsecondpage = document.querySelector(".headingofsecondpage");
const btnofsecondpage = document.querySelector(".btn-of-second-page");

let currentPlayer = true; // true for player one, false for player two

function rollTheBtn() {
    const newRandomNum = Math.round(Math.random() * 5 + 1);
    rollDice.innerHTML = newRandomNum;

    const currentPlayerScore = currentPlayer ? playerOneScore : playerTwoScore;
    currentPlayerScore.innerHTML = parseInt(currentPlayerScore.innerHTML) + newRandomNum;

    if (newRandomNum === 1) {
        currentPlayerScore.innerHTML = 0;
        currentPlayer = !currentPlayer;
        checkFirstTurn();
    }
}

function switchPlayer() {
    const currentPlayerScore = currentPlayer ? playerOneScore : playerTwoScore;
    const currentPlayerHighestScore = currentPlayer ? playerOneHighestScore : playerTwoHighestScore;

    currentPlayerHighestScore.innerHTML = `${parseInt(currentPlayerScore.innerHTML) + parseInt(currentPlayerHighestScore.innerHTML)}`;

    if (currentPlayerHighestScore.innerHTML >= 50) {
        btnofsecondpage.innerHTML = "Restart The Match";
        headingofsecondpage.innerHTML = currentPlayer ? "Player 1 Won The Match" : "Player 2 Won The Match";
        gamewrapper.classList.add("none");
        secondpage.classList.remove("none");
        playerOneHighestScore.innerHTML = 0;
        playerTwoHighestScore.innerHTML = 0;
        playerOneScore.innerHTML = 0;
        playerTwoScore.innerHTML = 0;
        rollDice.innerHTML = 0;
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

function startGame() {
    gamewrapper.classList.remove("none");
    secondpage.classList.add("none");
}

checkFirstTurn();
