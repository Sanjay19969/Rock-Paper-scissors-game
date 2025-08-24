let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
let userChoice1 = document.querySelector("#user-score");
let compChoice1 = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
};

const drawGame = () => {
  console.log("Game was draw.");
  msg.innerText = "Game was draw. Play again";
  msg.style.backgroundColor = "rgb(8, 5, 12)";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userChoice1.innerText = userScore;
    msg.style.backgroundColor = "green";
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
  } else {
    compScore++;
    compChoice1.innerText = compScore;
    msg.style.backgroundColor = "red";
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
  }
};

const playGame = (userChoice) => {
  let userWin = true;

  //Generate computer choice
  const compChoice = genComputerChoice();

  if (userChoice === compChoice) {
    drawGame();
    return;
  } else {
    if (userChoice === "rock") {
      //paper, scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "paper" ? true : false;
    }
  }
  showWinner(userWin, userChoice, compChoice);
};

choices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    const userChoice = event.target.id;
    playGame(userChoice);
  });
});
