function game() {

    function computerPlay() {
        let outcome = Math.floor(Math.random() * 3);
        if (outcome == 0) {
            return "rock";
        } else if (outcome == 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    function capitalize(text) {
        text = text.toLowerCase()
        return text.charAt(0).toUpperCase() + text.slice(1);
    }


    function playRound(playerSelection, computerSelection) {

        if (computerScore < 5 && playerScore < 5) {

            // Both player and computer made the same move
            if (computerSelection == playerSelection) {
                results.innerText = "Tie!"

            // Computer beats player
            } else if (
                (computerSelection == "rock" && playerSelection == "scissors") ||
                (computerSelection == "scissors" && playerSelection == "paper") ||
                (computerSelection == "paper" && playerSelection == "rock")
            ) {
                results.innerText = `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
                computerScore++;

            // Player beats computer
            } else {
                results.innerText = `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
                playerScore++;
            }
            scores.innerText = `Your score: ${playerScore}
Computer score: ${computerScore}`;

            if (computerScore === 5 || playerScore === 5 ) {
                // Report winner and loser at the end
                let winner;
                let loser;
                
                if (playerScore == computerScore) {
                    results.innerText = "It's a tie!";
                    return;
                } else if (playerScore < computerScore) {
                    winner = "Computer";
                    loser = "You";
                } else {
                    winner = "You";
                    loser = "Computer";
                }
                results.innerText = `Winner: ${winner}
Loser: ${loser}`;
            }
        } else {
            return;
        }
    }


    // Start with scores of 0
    let playerScore = 0;
    let computerScore = 0;

    let playerSelection;
    let computerSelection;

    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    const scores = document.querySelector(".scores");
    const results = document.querySelector(".results");

    rockButton.addEventListener("click", function() { 
        playRound("rock", computerPlay()); 
    });
    paperButton.addEventListener("click", function () {
        playRound("paper", computerPlay());
    });
    scissorsButton.addEventListener("click", function() {
        playRound("scissors", computerPlay());
    });
}

game();