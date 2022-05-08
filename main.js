function test(){
    console.log("It worked");
}

function computerPlay(){
    //returns random rock paper or scissors
    const options = ["rock", "paper", "scissors"];
    let compPlay = options[Math.floor(Math.random()*options.length)];
    return compPlay;
}

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

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
  
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Rock, paper, or scissors?");
        const computerSelection = computerPlay();
        const result = playRound(playerSelection,computerSelection);
        console.log(`Player:${playerSelection} \n Computer: ${computerSelection}`)
        console.log(result);
        switch(result){
            case "You Win!":
            playerScore++;
            document.getElementById("playerScoreDisplay").textContent = playerScore;
            
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
        console.log(`Score is ${playerScore} - ${computerScore} - ${tieScore}`);

    }
}