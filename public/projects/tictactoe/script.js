let board;
let moveNumber;
const result = document.getElementById("result");

function reset(){
    board = ["", "", "", "", "", "", "", "", ""]
    moveNumber = 0;
    result.textContent = "";

    let cell = document.getElementsByClassName("game-box");
    for(let i=0; i<cell.length; i++){
        cell[i].addEventListener("click", humanPlay);
        cell[i].innerHTML="";
    }
}

function checkWin(){
    // A win is only possible from the 5th move. No need to check before that
    // columns
    if (moveNumber > 3){
       for (let i=0; i<3; i++){
        if (board[i].length != 0 && (board[i] == board[i+3] && board[i] == board[i+6])){
            return true;
        }
       }
       // rows
       for (const i of [0, 3, 6]){
        if (board[i].length != 0 && (board[i] == board[i+1] && board[i] == board[i+2])){
            return true;
        }
       }
       // diagonals
       if (board[4].length != 0 && (board[0] == board[4] && board[0] == board[8])){
        return true;
       }
       if (board[4].length != 0 && (board[2] == board[4] && board[2] == board[6])){
        return true;
       }
    }
    return false;
}


function computerPlay(){
    // generate random number
    let available = [];
    for (let i=0;i<board.length;i++){
        if(board[i].length == 0){
            available.push(i);
        }
    }
    var computerMove = available[Math.floor(Math.random()*available.length)];
    board[computerMove] = "o";
    var boardCell = document.getElementById(computerMove.toString());
    boardCell.removeEventListener("click", humanPlay);
    boardCell.innerHTML = "<h1>o</h1>";

    if (checkWin() == true){
        result.textContent = "Computer wins.";
        return;
    }
    moveNumber+=1;    
}

function humanPlay(){
    console.log(`MOVE ${moveNumber}. HUMAN PLAYS.`);
    let cellId = Number(this.id);

    board[cellId] = "x";
    this.removeEventListener("click", humanPlay);
    this.innerHTML = "<h1>x</h1>";

    if (checkWin() == true){
        result.textContent = "Human wins.";
        return;
    }

    moveNumber += 1;
    if (moveNumber == 9){
        result.textContent = "It's a draw.";
        return;
    }
    computerPlay();
}

reset();

// TODO
// 1. Ask if user wants to play again before resetting