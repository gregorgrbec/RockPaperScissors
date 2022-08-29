function getComputerChoice() {
  choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "Rock";
  else if (choice === 1) return "Paper";
  else return "Scissors";
}

function determineOutcome(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  //   Player chooses rock
  if ((playerSelection == "rock") & (computerSelection == "rock")) {
    return "It's a tie!";
  } else if ((playerSelection == "rock") & (computerSelection == "paper")) {
    return "You lose!";
  } else if ((playerSelection == "rock") & (computerSelection == "scissors")) {
    return "You win!";
  }
  //   Player chooses paper
  else if ((playerSelection == "paper") & (computerSelection == "paper")) {
    return "It's a tie!";
  } else if ((playerSelection == "paper") & (computerSelection == "scissors")) {
    return "You lose!";
  } else if ((playerSelection == "paper") & (computerSelection == "rock")) {
    return "You win!";
  }

  //   Player chooses scissors
  else if (
    (playerSelection == "scissors") &
    (computerSelection == "scissors")
  ) {
    return "It's a tie!";
  } else if ((playerSelection == "scissors") & (computerSelection == "rock")) {
    return "You lose!";
  } else if ((playerSelection == "scissors") & (computerSelection == "paper")) {
    return "You win!";
  }
}

function game() {
  playerWinCount = 0;
  computerWinCount = 0;

  while ((playerWinCount != 3) & (computerWinCount != 3)) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Write 'rock', 'paper' or 'scissors'");

    outcome = determineOutcome(playerSelection, computerSelection);
    console.log(outcome);
    if (outcome == "You lose!") {
      computerWinCount += 1;
    } else if (outcome == "You win!") {
      playerWinCount += 1;
    }
    console.log("Computer wins: ", computerWinCount);
    console.log("Player wins: ", playerWinCount);

    if (computerWinCount == 3) console.log("Computer wins this game");
    else if (playerWinCount == 3) console.log("Player wins this game");
  }
}

game();
