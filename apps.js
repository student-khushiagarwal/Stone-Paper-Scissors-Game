let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScoreDisplay = document.querySelector(".user-score");
let compScoreDislay = document.querySelector(".comp-score");

const genCompChoice = () => {
    const compChoices = ["rock", "paper", "scissors"];
    const compIdx = Math.floor(Math.random() * 3);
    return compChoices[compIdx];
}

drawGame = () => {
    msg.innerText = "game was draw!";
    msg.style.backgroundColor = "#8d99ae";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScoreDisplay.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#81b29a";
    }else{
        compScore++;
        compScoreDislay.innerText = compScore;
        msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#e07a5f";
    }
}

const playGame = (userChoice) => {
    // console.log("userChoice =",userChoice);
    // generate computer choice;
    const compChoice = genCompChoice();
    // console.log("compChoice =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    }) 
})