let disName;
let disComName;
let computerValue = 0;

function display() {
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
  // Incrementing computer value (not sure what it is supposed to do)
  computerValue++;
  // Displaying computer value (assuming it's supposed to be displayed somewhere)
  document.getElementById("displayComputerName1").textContent = computerValue;
  console.log("hello")
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

function test() {
    console.log("idiot")
}



