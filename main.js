//Gloabl score keeping varibles

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let gameStatus = 0

//Use a random number generator to pick and return a random option from the array
function computerPlay(){

    const options = ["rock", "paper", "scissors"];
    let compPlay = options[Math.floor(Math.random()*options.length)];
    return compPlay;
}

//Determine a winner based on the player and computer selection
function playRound(playerSelection,computerSelection){

    if (playerSelection.toLowerCase() == "rock"){
        switch(computerSelection){
            case "rock":
            return "You Tie!";
            break;

            case "paper":
            return "You Lose!";
            break;

            case "scissors":
            return "You Win!";
            break;
        }
    }
    else if (playerSelection.toLowerCase() == "paper"){
        switch(computerSelection){
            case "rock":
            return "You Win!";
            break;

            case "paper":
            return "You Tie!";
            break;

            case "scissors":
            return "You Lose!";
            break;
        }
    }
    else if (playerSelection.toLowerCase() == "scissors"){
        switch(computerSelection){
            case "rock":
            return "You Lose!";
            break;

            case "paper":
            return "You Win!";
            break;

            case "scissors":
            return "You Tie!";
            break;
        }
    }else{
        return 0;
    }
}



function playGame(playerSelection){
    const computerSelection = computerPlay();
    const result = playRound(playerSelection,computerSelection);
    console.log(`Player:${playerSelection} \n Computer: ${computerSelection}`)
    console.log(result);

}

//Calling game() restarts the game, and sets the scores to 0
function game(){
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    gameStatus = 1;

    document.getElementById("paper").innerHTML = "<a href=\"javascript:playerSelect('paper');\"><img src=\"images/paper.png\" /></a>";
    document.getElementById("rock").innerHTML = "<a href=\"javascript:playerSelect('rock');\"><img src=\"images/rock.png\" /></a>";
    document.getElementById("scissors").innerHTML = "<a href=\"javascript:playerSelect('scissors');\"><img src=\"images/scissors.png\" /></a>";
    document.getElementById("playerScoreDisplay").innerHTML = playerScore;
    document.getElementById("computerScoreDisplay").innerHTML = computerScore;
    document.getElementById("tieScoreDisplay").innerHTML = tieScore;
    document.getElementById("title").innerHTML = "Choose your weapon";
}

//Check if either player score or computer score has reached 5
function gameOver(){
    if (playerScore == 5 || computerScore == 5){
        document.getElementById("paper").innerHTML = "Paper";
        document.getElementById("rock").innerHTML = "Rock";
        document.getElementById("scissors").innerHTML = "Scissors";
        
        return (playerScore == 5 ? 1 : 2)

    }
    else{
        return 0;
    }
}

function playerSelect(choice){


    const computerSelection = computerPlay();
    const playerSelection = choice;

    //Display computer and player selections
    const playerSelectionImage = `<img src=\"images/${playerSelection}.png\" />`;
    const computerSelectionImage = `<img src=\"images/${computerSelection}.png\" />`;
    console.log(playerSelectionImage);

    
    document.getElementById("player").innerHTML = playerSelectionImage;
    document.getElementById("computer").innerHTML = computerSelectionImage;
    
    //Get round winner based on selections and display winner message
    const result = playRound(playerSelection,computerSelection);
    document.getElementById("roundStatus").innerHTML = result;
    switch(result){
        case "You Win!":
        playerScore++;
        document.getElementById("playerScoreDisplay").innerHTML = playerScore;
        break;

        case "You Lose!":
        computerScore++;
        document.getElementById("computerScoreDisplay").innerHTML = computerScore;
        break;

        case "You Tie!":
        tieScore++;
        document.getElementById("tieScoreDisplay").innerHTML = tieScore;
        break;
    }

    //Check if the game is over and display winner if it is
    let status = gameOver();
    if (status == 1){
        document.getElementById("title").innerHTML = "Humans Win!";
        gameStatus = 0;
    }
    else if (status == 2){
        document.getElementById("title").innerHTML = "Computers Win :(";
        gameStatus = 0;
    }


}