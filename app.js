function getComputerChoice(){
  const compChoices = ['rock', 'paper', 'scissors'];
  const randomCompChoices = compChoices[Math.floor(Math.random() * compChoices.length)];
  return randomCompChoices;
}

function getHumanChoice(){
  let humanChoices = prompt("rock, paper, scissors");
  return humanChoices ? humanChoices.toLowerCase() : "";
}

function playGame(){
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
 if (humanChoice === computerChoice) {
  console.log(`It's a tie! Both chose ${humanChoice}.`);
  return;
 }

 if (
  (humanChoice === 'rock' && computerChoice === 'scissors') ||
  (humanChoice === 'paper' && computerChoice === 'rock') ||
  (humanChoice === 'scissors' && computerChoice === 'paper')
 ) {
  humanScore++;
  console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
 } else {
  computerScore++;
  console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`)
 }

 console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
}

for (let i = 1; i <=5; i++){
  console.log(`--Round ${i}--`);

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}

  console.log("====================");
  console.log("FINAL SCORE:");
  console.log(`You: ${humanScore} | Computer: ${computerScore}`);
  
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Game over! The computer wins.");
  } else {
    console.log("It's a tie overall! What a close game.");
  }
}

playGame();

 
