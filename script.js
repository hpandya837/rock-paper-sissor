// enter username prompt
window.onload = (event) => {
  let userName = prompt("Enter your name");

  if (userName === null) {
    userName = prompt('Please enter your name:')
  }

  if (!userName.trim()) {
    alert("Please enter a name!");
    userName = prompt("Enter your name");
  }
  document.getElementById("response-text").innerText = `${userName}`;
};

let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let totalRounds = 5; // Shows the total number of rounds

// variables
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('ComputerScore');
const winnerElement = document.getElementById('winner');
let roundsElement = document.getElementById('rounds');

//function to play game
function gameStart(playerChoice) {
  const options = ["rock", "paper", "scissors"];
  const computerChoice = options[Math.floor(Math.random() * 3)];
  if (playerChoice === "rock") {
    document.getElementById("chosenimg").src = "rockicon.png";
  }
  if (playerChoice === "paper") {
    document.getElementById("chosenimg").src = "scrollfinal.png";
  }
  if (playerChoice === "scissors") {
    document.getElementById("chosenimg").src = "shurikan.png";
  }

  if (computerChoice === "rock") {
    document.getElementById("computerimg").src = "rockicon.png";
  }
  if (computerChoice === "paper") {
    document.getElementById("computerimg").src = "scrollfinal.png";
  }
  if (computerChoice === "scissors") {
    document.getElementById("computerimg").src = "shurikan.png";
  }
  if (playerChoice === computerChoice) {
    winnerElement.textContent = "It's a tie!";
} else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
   
) {
    winnerElement.textContent = 'You win!';
    playerScore++; 

} else {
    winnerElement.textContent = 'You lose!';
    computerScore++;

}
playerScoreElement.textContent = playerScore;
computerScoreElement.textContent = computerScore;

// Adds the rounds
rounds++;

// Display rounds played
roundsElement.textContent = `Round ${rounds}`;

// Check if all rounds played
if (rounds === totalRounds) {
    endGame();
}

}

// ends the game after 5 rounds
function endGame() {

  document.getElementById('choices').style.display = 'none';

  roundsElement.textContent = `Total Rounds Played: ${rounds}`;

  // Announces the overall winner or loser
  let endMessage = '';
  if (playerScore > computerScore) {
      endMessage = "WINNER WINNER CHICKEN DINNER!"; 
  } else if (playerScore < computerScore) {
      endMessage = 'Just shy of victory, keep dreaming!';
  } else {
      endMessage = "Deadlocked, share the glory!";
  }

  // Display the final message
  winnerElement.textContent = endMessage;
}

// Reload the page
document.getElementById("reset").addEventListener("click", function() {

  location.reload();
})