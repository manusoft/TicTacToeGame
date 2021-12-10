console.log("Welcome to the TicTacToe Game!");
//let BackgroungMusic = new Audio("music.mp3");
let turnMusic = new Audio("turn.wav");
let gameOverMusic = new Audio("gameOver.wav");
let turn = "X";
let gameOver = false;

//Function to change turn
const changeTurn = () => {
    return turn === "X" ? (turn = "O") : (turn = "X");
}

//Function to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            x = e[0];
            y = e[1];
            z = e[2];
            document.querySelectorAll(".box")[x].style.background = "rgb(67, 228, 137)";
            document.querySelectorAll(".box")[y].style.background = "rgb(67, 228, 137)";
            document.querySelectorAll(".box")[z].style.background = "rgb(67, 228, 137)";
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " wins!";
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "300px";
            gameOverMusic.play();
            gameOver = true;
        }
    })

}

//Game Logic
console.log(gameOver);
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxText");
    element.addEventListener("click", () => {
        if (!gameOver) {
            if (boxtext.innerHTML === "") {
                turnMusic.play();
                boxtext.innerHTML = turn;

                if (turn === "X") {
                    boxtext.style.color = "red";
                } else {
                    boxtext.style.color = "blue";
                }

                changeTurn();
                checkWin();

                if (!gameOver) {
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                }
            }
        }
    });

})

//Reset Button
reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxText");
    Array.from(boxtexts).forEach(element => {
        element.innerHTML = "";
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0";
    document.querySelectorAll(".box")[x].style.background = "#ffffff";
    document.querySelectorAll(".box")[y].style.background = "#ffffff";
    document.querySelectorAll(".box")[z].style.background = "#ffffff";
})


