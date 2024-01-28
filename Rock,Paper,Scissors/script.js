// Display an alert popup message
alert("Hello, this is an alert!");

// Ask the user if they want to play and store the result in the 'welcome' variable
let welcome = confirm("Do you really want to play this rock, paper, scissors game?");

// Check if the user accepted the game invitation
if (welcome) {
  // User wants to play, so proceed with the game logic

  // Get the player's choice from user input
  let playerChoice = prompt("Enter your choice for rock, paper, or scissors game");

  // Array of computer choices
  let computerChoices = ["rock", "paper", "scissors"];

  // Generate a random index to select a computer choice
  let randomIndex = Math.floor(Math.random() * computerChoices.length);

  // Get the computer's choice using the random index
  let computerChoice = computerChoices[randomIndex];

  // Display the computer's choice in the console
  console.log("Computer's choice:", computerChoice);

  // Variable to store the game result
  let result;

  // Check the game result based on player and computer choices
  if (playerChoice === computerChoice) {
    result = "It's a tie game!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "Player wins!";
  } else {
    result = "Computer wins!";
  }

  // Display the game result in an alert popup
  alert(result);

  // Display the game result in the console
  console.log("Result:", result);
} else {
  // User canceled, display a message
  alert("Sorry, I think you have changed your mind. See you again next time!");
}
