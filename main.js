let scorePlayer = 0;
let scoreComputer = 0;
let buttons = document.querySelectorAll('.playerSelect');

const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');
const container = document.querySelector('.container');
const endGame = document.querySelector('.endGame');
const playerAction = document.querySelector('#playerAction');
const computerAction = document.querySelector('#computerAction');
const result = document.querySelector('.result');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const roundStatus = playRound(button.id, computerPlay());
        switch (roundStatus){
            case "You Win":
                scorePlayer++;
                break;
            case "You Lose":
                scoreComputer++;
                break;
        }
        result.textContent=`This round: ${roundStatus}`;
        playerScoreDisplay.textContent =scorePlayer;
        computerScoreDisplay.textContent =scoreComputer;
        gameStatus();
 
    });
})

//return random rock, paper or scissors
function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    const compPlay = options[Math.floor(Math.random()*options.length)];
    return compPlay;
}

//return a string that declares the winner
function playRound(playerSelection, computerSelection){
    playerAction.setAttribute('src', `images/${playerSelection}.png`);
    computerAction.setAttribute('src', `images/${computerSelection}.png`);

  
    if (playerSelection == "Rock"){
        switch (computerSelection){
            case "Rock":
                return "Tie";
                break;

            case "Paper":
                return "You Lose";
                break;

            case "Scissors":
                return "You Win";
                break;
        }
    }else if (playerSelection == "Paper"){
        switch (computerSelection){
            case "Rock":
                return "You Win";
                break;

            case "Paper":
                return "Tie";
                break;

            case "Scissors":
                return "You Lose";
                break;
        }
    }else if (playerSelection == "Scissors"){
        switch (computerSelection){
            case "Rock":
                return "You Lose";
                break;

            case "Paper":
                return "You Win";
                break;

            case "Scissors":
                return "Tie";
                break;
        }
    }
}

function game(){
    scorePlayer = 0;
    scoreComputer = 0;

    playerScoreDisplay.textContent =scorePlayer;
    computerScoreDisplay.textContent =scoreComputer;

    container.setAttribute('style', 'display: flex;');
    endGame.setAttribute('style', 'display: none;');
}

//start game and play 5 rouds
function gameStatus(){
    if (scorePlayer >= 5){
        container.setAttribute('style', 'display: none;');
        endGame.setAttribute('style', 'display: flex;');
        endGame.textContent = "Game Over: You Win";
    }else if (scoreComputer >= 5){
        container.setAttribute('style', 'display: none;');
        endGame.setAttribute('style', 'display: flex;');
        endGame.textContent = "Game Over: You Lose";
    } 

}
