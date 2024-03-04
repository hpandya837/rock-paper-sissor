let disName;
let disComName;
let computerValue = 0;
let userValue = 0;
let difficulty;

// Added response array for easy maintenance of choices
const responseArray = ["Rock", "Paper", "Scissors"];

function display() {
    difficulty = document.getElementById("difSelector").value; // Store selected difficulty
    disComName = document.getElementById("comName").value; // Get CPU name
    document.getElementById("displayComputerName").textContent = "CPU Name"; // Set initial CPU name display
    document.getElementById("displayComputerName1").textContent = disComName; // Set actual CPU name display

    disName = document.getElementById("plaName").value; // Get player name
    document.getElementById("displayPlayerName").textContent = "Player Name"; // Set initial player name display
    document.getElementById("displayPlayerName1").textContent = disName; // Set actual player name display

    document.getElementById("fullOne").classList.add("d-none"); // Hide intro section
    document.getElementById("gameDiv").classList.remove("hide"); // Show game section
}

function normal() {
  let humanRes = document.getElementById("humanRes").value.toLowerCase();
  let randomNumber = Math.floor(Math.random() * responseArray.length);
  document.getElementById("resOne").textContent = responseArray[randomNumber];

  // Corrected evaluation logic
  if (humanRes === responseArray[randomNumber]) {
    document.getElementById("winnerChoice").innerText = "tie";
  } else if (
    (humanRes === "rock" && responseArray[randomNumber] === "scissors") ||
    (humanRes === "paper" && responseArray[randomNumber] === "rock") ||
    (humanRes === "scissors" && responseArray[randomNumber] === "paper")
  ) {
    document.getElementById("winnerChoice").innerText = "win";
    userValue++; // Increment user score only if they win
  } else {
    document.getElementById("winnerChoice").innerText = "lose";
    computerValue++; // Increment computer score only if they win
  }

  // Update scores only if there's a winner (not on a tie)
  if (document.getElementById("winnerChoice").innerText !== "tie") {
    document.getElementById("displayPlayerName1").textContent = disName + " (" + userValue + ")";
    document.getElementById("displayComputerName1").textContent = disComName + " (" + computerValue + ")";
  }
}