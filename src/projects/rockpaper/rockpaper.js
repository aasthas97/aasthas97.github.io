var playerScore = 0;
var computerScore = 0;
let outcomeHistory = [];
let moveHistory = [];

function computerPlay(lastOutcome = 0, lastMove = undefined) {
  let moves = ["rock", "paper", "scissors"];
  if (lastOutcome == 0) {
    let move_picker = Math.floor(Math.random() * 3);
    var computerMove = moves[move_picker];
  } else if (lastOutcome == 1) {
    // computer lost the last time
    var filteredMoves = moves.filter((e) => e !== lastMove);
    console.log(filteredMoves);
    let move_picker = Math.floor(Math.random() * 2);
    var computerMove = filteredMoves[move_picker];
  } else if (lastOutcome == -1) {
    // computer won the last time
    var computerMove = lastMove;
  }

  return computerMove;
}

function playOneRound(playerMove) {
  if (outcomeHistory.length == 0) {
    // this is the first move
    var computerMove = computerPlay();
  } else {
    // this is not the first move
    let lastMove = moveHistory[moveHistory.length - 1];
    let lastOutcome = outcomeHistory[outcomeHistory.length - 1];
    var computerMove = computerPlay(lastOutcome, lastMove);
  }
  moveHistory.push(computerMove);

  let outcome, points;

  if (playerMove == computerMove) {
    // RR, SS, PP
    outcome = "It's a tie.";
    points = 0;
  } else if (playerMove == "rock") {
    // RS, RP
    if ((computerMove = "scissors")) {
      outcome = "Rock beats Scissors. You win.";
      points = 1;
    } else if (computerMove == "paper") {
      outcome = "Paper beats Rock. You lose.";
      points = -1;
    }
  } else if (playerMove == "paper") {
    // PR PS
    if (computerMove == "rock") {
      outcome = "Paper beats Rock. You win.";
      points = 1;
    } else if (computerMove == "scissors") {
      outcome = "Scissors beat Paper. You lose.";
      points = -1;
    }
  } else if (playerMove == "scissors") {
    // SP SR
    if (computerMove == "paper") {
      outcome = "Scissors beat Paper. You win.";
      points = 1;
    } else if (computerMove == "rock") {
      outcome = "Rock beats Scissors. You lose.";
      points = -1;
    }
  }

  outcomeHistory.push(points);
  displayOutcome(outcome);
  updateScore(points);
  checkGameEnd();
}

function displayOutcome(outcome) {
  const outcomeBoard = document.getElementById("outcome");
  outcomeBoard.innerText = outcome;
}

function updateScore(points) {
  if (points == 1) {
    playerScore++;
    let manScore = document.getElementById("manScore");
    manScore.innerText = playerScore;
  } else if (points == -1) {
    computerScore++;
    let compScore = document.getElementById("compScore");
    compScore.innerText = computerScore;
  }
  console.log(playerScore, computerScore);
}

function checkGameEnd() {
  const outcomeBoard = document.getElementById("outcome");
  if (playerScore == 5) {
    document.getElementById("weapons").remove();
    outcomeBoard.innerText = "GAME OVER. YOU WON.";
    document.getElementById("score").remove();
  } else if (computerScore == 5) {
    document.getElementById("weapons").remove();
    document.getElementById("score").remove();
    outcomeBoard.innerText = "GAME OVER. I WON.";
  }
}
