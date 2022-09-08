function getComputerChoice() {
  choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "rock";
  else if (choice === 1) return "paper";
  else return "scissors";
}

function determineOutcome(playerSelection, computerSelection) {
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

function oneRound(playerSelection, playerWinCount, computerWinCount) {
  computerSelection = getComputerChoice();

  // Changing images of choices
  document.getElementById("you").src = `${playerSelection}.png`;
  document.getElementById("bot").src = `${computerSelection}_2.png`;

  outcome = determineOutcome(playerSelection, computerSelection);
  if (outcome == "You lose!") {
    document.querySelector(".instructions").textContent = "You lose this round";
    computerWinCount++;
    document.querySelector(".computer-score").textContent = computerWinCount;
  } else if (outcome == "You win!") {
    document.querySelector(".instructions").textContent = "You win this round";
    playerWinCount++;
    document.querySelector(".player-score").textContent = playerWinCount;
  } else {
    document.querySelector(".instructions").textContent = "It's a tie";
  }
}

// One round being played on every button click
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    playerSelection = btn.id;
    playerWinCount = document.querySelector(".player-score").textContent;

    computerWinCount = document.querySelector(".computer-score").textContent;
    oneRound(playerSelection, playerWinCount, computerWinCount);

    // Checking if the game is finished
    if (
      (Number(document.querySelector(".computer-score").textContent) == 3) |
      (Number(document.querySelector(".player-score").textContent) == 3)
    ) {
      if (Number(document.querySelector(".computer-score").textContent) == 3) {
        document.querySelector(".instructions").textContent = "Computer wins";
      } else if (
        Number(document.querySelector(".player-score").textContent) == 3
      ) {
        document.querySelector(".instructions").textContent = "Player wins";
      }

      // Removing the three buttons and adding play again button
      playAgainBtn = document.createElement("button");
      playAgainBtn.classList.add("playAgainBtn");
      playAgainBtn.textContent = "Play again";
      playAgainBtn.addEventListener("click", () => document.location.reload());

      document.querySelector(".buttons").appendChild(playAgainBtn);
      document.querySelector("#scissors").remove();
      document.querySelector("#rock").remove();
      document.querySelector("#paper").remove();
    }
  });
});
