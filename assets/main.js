const options = ["rock", "paper", "scissors"];
const resultOutput = document.querySelector(".resultOutput");
const replayButton = document.querySelector(".replayOutput");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

let userPoints = 0;
let computerPoints = 0;
let rounds = 0;

function restartGame() {
  const replayButton = document.querySelector(".replayOutput");
  replayButton.addEventListener("click", restartGame);
  resultOutput.innerHTML = "";
  replayButton.innerHTML = "";
  //
  scissorsButton.style.pointerEvents = "auto";
  paperButton.style.pointerEvents = "auto";
  rockButton.style.pointerEvents = "auto";
}

const generateComputerPick = () => {
  const randomPick = Math.floor(Math.random() * options.length);
  const computerPick = options[randomPick];
  return computerPick;
};

const pickRock = () => {
  replayButton.innerHTML = `<a href="#" class="button-1" onclick="restartGame()">Replay</a>`;

  rockButton.style.pointerEvents = "none";
  paperButton.style.pointerEvents = "none";
  scissorsButton.style.pointerEvents = "none";

  const userPickRock = "rock";
  let computerPick = generateComputerPick();

  rounds++;

  if (userPickRock === computerPick) {
    let result = `<span>Round ${rounds}</span>
    <span class="scoreboardr">Player: ${userPoints} VS ${computerPoints}</span>
    <p>You picked: ${userPickRock}</p>
      <p>AI picked: ${computerPick}</p>
      <p>It's a draw!</p>`;
    resultOutput.innerHTML = result;
  } else if (computerPick === "paper") {
    computerPoints++;
    let result = `<span>Round ${rounds}</span>
    <span class="scoreboardr">Player: ${userPoints} VS ${computerPoints}</span>
    <p>You picked: ${userPickRock}</p>
      <p>AI picked: ${computerPick}</p>
      <p>You Lose!</p>`;
    resultOutput.innerHTML = result;
  } else if (computerPick === "scissors") {
    userPoints++;
    let result = `<span>Round ${rounds}</span>
    <span class="scoreboardr">Player: ${userPoints} VS ${computerPoints}</span>
    <p>You picked: ${userPickRock}</p>
      <p>AI picked: ${computerPick}</p>
      <p>You Win!</p>`;
    resultOutput.innerHTML = result;
  } else {
    console.log("An error happened");
  }
};

const pickPaper = () => {
  replayButton.innerHTML = `<a href="#" class="button-1" onclick="restartGame()">Replay</a>`;

  rockButton.style.pointerEvents = "none";
  paperButton.style.pointerEvents = "none";
  scissorsButton.style.pointerEvents = "none";

  const userPickRock = "paper";
  let computerPick = generateComputerPick();

  rounds++;

  if (userPickRock === computerPick) {
    let result = `
    <span>Round ${rounds}</span>
    <span class="scoreboardr">Player: ${userPoints} VS ${computerPoints}</span>
    <p>You picked: ${userPickRock}</p>
        <p>AI picked: ${computerPick}</p>
        <p>It's a draw!</p>`;
    resultOutput.innerHTML = result;
  } else if (computerPick === "scissors") {
    computerPoints++;
    let result = `<span>Round ${rounds}</span>
    <span class="scoreboardr">Player: ${userPoints} VS ${computerPoints}</span>
    <p>You picked: ${userPickRock}</p>
        <p>AI picked: ${computerPick}</p>
        <p>You Lose!</p>`;
    resultOutput.innerHTML = result;
  } else if (computerPick === "rock") {
    userPoints++;
    let result = `<span>Round ${rounds}</span>
    <span class="scoreboardr">Player: ${userPoints} VS ${computerPoints}</span>
    <p>You picked: ${userPickRock}</p>
        <p>AI picked: ${computerPick}</p>
        <p>You Win!</p>`;
    resultOutput.innerHTML = result;
  } else {
    console.log("An error happened");
  }
};

const pickScissors = () => {
  replayButton.innerHTML = `<a href="#" class="button-1" onclick="restartGame()">Replay</a>`;

  rockButton.style.pointerEvents = "none";
  paperButton.style.pointerEvents = "none";
  scissorsButton.style.pointerEvents = "none";

  const userPickRock = "scissors";
  let computerPick = generateComputerPick();

  rounds++;

  if (userPickRock === computerPick) {
    let result = `<span>Round ${rounds}</span>
    <span class="scoreboardr">Player: ${userPoints} VS ${computerPoints}</span>
    <p>You picked: ${userPickRock}</p>
          <p>AI picked: ${computerPick}</p>
          <p>It's a draw!</p>`;
    resultOutput.innerHTML = result;
  } else if (computerPick === "rock") {
    computerPoints++;
    let result = `<span>Round ${rounds}</span>
    <span class="scoreboardr">Player: ${userPoints} VS ${computerPoints}</span>
    <p>You picked: ${userPickRock}</p>
          <p>AI picked: ${computerPick}</p>
          <p>You Lose!</p>`;
    resultOutput.innerHTML = result;
  } else if (computerPick === "paper") {
    userPoints++;
    let result = `<span>Round ${rounds}</span>
    <span class="scoreboardr">Player: ${userPoints} VS ${computerPoints}</span>
    <p>You picked: ${userPickRock}</p>
          <p>AI picked: ${computerPick}</p>
          <p>You Win!</p>`;
    resultOutput.innerHTML = result;
  } else {
    console.log("An error happened");
  }
};
