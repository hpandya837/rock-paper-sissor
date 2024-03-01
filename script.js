let disName;
let disComName;
let computerValue = 0;
let userchoice
let humanRes;
let responseArray = [
  "Rock",
  "Paper",
  "Scissor", 
];

function display() {
  userchoice = document.getElementById("difSelector").value;
  disComName = document.getElementById("comName").value;
  document.getElementById("displayComputerName").textContent = "CPU Name";
  document.getElementById("displayComputerName1").textContent = disComName;

  disName = document.getElementById("plaName").value;
  document.getElementById("displayPlayerName").textContent = "Player Name";
  document.getElementById("displayPlayerName1").textContent = disName;

  document.getElementById("fullOne").classList.add("d-none");
  document.getElementById("gameDiv").classList.remove("d-none");

}

function responseNew() {
  let humanRes = document.getElementById("humanRes").value;
  // Incrementing computer value (by a value of one cuz the computer always wins)
  computerValue++;
  // Displaying computer value 
  document.getElementById("displayComputerName1").textContent = computerValue;
  
  if (humanRes === "Rock") {
    document.getElementById("resOne").textContent = "Paper"
    return "Paper";
  } else if (humanRes === "Paper") {
    document.getElementById("resOne").textContent = "Scissors"
    return "Scissors";
  } else if (humanRes === "Scissors") {
    document.getElementById("resOne").textContent = "Rock"
    return "Rock";
  } else {
    return "No Answer";
  }
}


function normal() {
  humanRes = document.getElementById("humanRes").value;
  let randomNumber = Math.floor(Math.random()*responseArray.length);
document.getElementById('resOne').textContent = responseArray[randomNumber];

if (userChoice === computerChoiceArray[randomNumber]) {
  document.getElementById("winnerChoice").innerText = "tie";
  
}
// Check if the user wins
else if (
  (userChoice === 'rock' && computerChoiceArray[randomNumber] === 'scissors') ||
  (userChoice === 'paper' && computerChoiceArray[randomNumber] === 'rock') ||
  (userChoice === 'scissors' && computerChoiceArray[randomNumber] === 'paper')
) {
  document.getElementById("winnerChoice").innerText = "win";
}
// If it's not a tie and the user didn't win, it's a lose
else {
  document.getElementById("winnerChoice").innerText = "lose";
}


}



