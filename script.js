function computerPlay() {
    let outcome = Math.floor(Math.random() * 3);
    if (outcome == 0) {
        return "Rock";
    } else if (outcome == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function capitalize(text) {
    text = text.toLowerCase()
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function playRound(playerSelection, computerSelection) {

    // Initialize to lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Both player and computer made the same move
    if (computerSelection == playerSelection) {
        return 0;

    // Computer beats player
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        return -1;

    // Player beats computer
    } else {
        return 1;
    }
}

function game() {
    let playerSelection;
    let computerSelection;

    // Start with scores of 0
    let playerScore = 0;
    let computerScore = 0;

    // Valid moves
    const validMoves = new Set(["rock", "paper", "scissors"])

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Your move: (Rock, Paper or Scissors?)")

        // Check for valid move
        if (!validMoves.has(playerSelection)) {
            console.log("Invalid move!");
            continue;
        }

        // Play the round
        computerSelection = computerPlay();
        let outcome = playRound(playerSelection, computerSelection);
        switch(outcome) {
            case -1:
                console.log(`You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
                computerScore++;
                break;
            case 1:
                console.log(`You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
                playerScore++;
                break;
            case 0:
                console.log("Tie!");
                break;
        }
    }

    // Report winner and loser at the end
    let winner;
    let loser;
    console.log(`Your score: ${playerScore}
Computer score: ${computerScore}`
    )
    if (playerScore == computerScore) {
        console.log("It's a tie!");
        return;
    } else if (playerScore < computerScore) {
        winner = "Computer";
        loser = "You";
    } else {
        winner = "You";
        loser = "Computer";
    }
    console.log(`Winner: ${winner}
Loser: ${loser}`
    );
}

game();