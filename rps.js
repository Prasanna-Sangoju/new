let userScore = 0;
let compScore = 0;

const choices  = document.querySelectorAll(".choice");
const msg = document.querySelectorAll("#msg");

const gencompChoice =  () => {
      const options = ["rock","paper","scissors"];
      const randIdx =Math.floor(Math.random() * 3);
      return options[randIdx];
};

const drawGame =  () => {
    console.log("game was draw");
    msg.innerText = "Game was draw.Play again";
    msg.nbackgroundColor = "balck";
};

const showWinner = (userWin) => {
    if (userWin) {
        console.log("you win");
        msg.innerText = "You Win";
        msg.style.nbackgroundColor =  "green";
    }else {
        console.log("you lose");
        msg.innerText = "You lose";
        msg.nbackgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    console.log("user choice", userchoice);
    //Generate computer choice -> modular3r''
    const compChoice  =  gencompChoice();
    console.log("comp choice = ", compChoice);

    if(userchoice === compChoice) {
       //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock" ) {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userchoice === "paper")   {
            //rock,scissors
            compChoice === "scissors"  ? false : true;
        }else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
    }
};

choices.forEach((choice)=> {
    choice.addEventListener("click", () => {

        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});

