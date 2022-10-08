let computerSelection;
let playerSelection;

let computerScore = 0;
let playerScore = 0;

let gameButtons = document.querySelectorAll(".game-btn");
let roundResult = document.querySelector(".round-result");
let score = document.querySelector(".score");
let gameResult = document.querySelector(".game-result");

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);

  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else if (choice == 2) {
    return "scissors";
  }
};

const checkScore = (playerScore, computerScore) => {
  if (playerScore >= 5) {
    gameResult.innerText = `Player Wins! 🎉 game is over`;
    gameButtons.forEach((btn) => {
      btn.disabled = true;
    });
  } else if (computerScore >= 5) {
    gameResult.innerText = `Computer Wins 😞 game is over`;
    gameButtons.forEach((btn) => {
      btn.disabled = true;
    });
  }
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    roundResult.innerText = "Draw! 📍";
    score.innerText = `👦 Player: ${playerScore} 🤖 Computer: ${computerScore}`;
    return;
  }

  if (playerSelection == "rock" && computerSelection == "scissors") {
    roundResult.innerText = `You Win! 👊 beats ✌`;
    playerScore++;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    roundResult.innerText = `You Lose ✋ beats 👊`;
    computerScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    roundResult.innerText = `You Win! ✋ beats 👊`;
    playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    roundResult.innerText = `You Lose ✌ beats ✋`;
    computerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    roundResult.innerText = `You Win! ✌ beats ✋`;
    playerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    roundResult.innerText = `You Lose 👊 beats ✌`;
    computerScore++;
  }

  score.innerText = `👦 Player: ${playerScore} 🤖 Computer: ${computerScore}`;
  checkScore(playerScore, computerScore);
};

gameButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    playerSelection = btn.innerText.split(" ")[0].toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  })
);
