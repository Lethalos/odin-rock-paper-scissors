let computerSelection;
let playerSelection;

let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);

  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else if (choice == 2) {
    return "scissors";
  }
};

let playRound = (playerSelection, computerSelection) => {
  let selection = playerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    console.log("Draw!");
    return;
  }

  if (selection == "rock" && computerSelection == "scissors") {
    console.log(`You Win ${selection} beats ${computerSelection}`);
  } else if (selection == "rock" && computerSelection == "paper") {
    console.log(`You Lose ${computerSelection} beats ${selection}`);
  } else if (selection == "paper" && computerSelection == "rock") {
    console.log(`You Win ${selection} beats ${computerSelection}`);
  } else if (selection == "paper" && computerSelection == "scissors") {
    console.log(`You Lose ${computerSelection} beats ${selection}`);
  } else if (selection == "scissors" && computerSelection == "paper") {
    console.log(`You Win ${selection} beats ${computerSelection}`);
  } else if (selection == "scissors" && computerSelection == "rock") {
    console.log(`You Win ${computerSelection} beats ${selection}`);
  }
};

let game = () => {
  playerSelection = "rock";
  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
};

game();
