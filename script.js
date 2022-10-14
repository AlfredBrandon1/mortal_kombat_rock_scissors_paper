const selectHide = document.getElementById('select');
const x = document.createElement("IMG");
const gameBox = document.getElementById('main-game-box');
const inputName = document.getElementById('input-name');
const inputNameSubmit = document.getElementById('input-name-submit');
const imageDeploy = document.getElementById('image-deploy');
let computerChoice = Math.random();
let userChoice = ['rock','scissor','paper'];
const player = document.getElementById("player").value;
let computerScore = 0;
let userScore = 0;

start();
document.getElementById('audio').play();

/* after clicking the start in homepage */
function start () {  
    gameBox.style.visibility = 'hidden';
    selectHide.style.visibility = 'hidden';
    imageDeploy.style.visibility = 'hidden';
};

function afterInputName (){
    gameBox.style.visibility = 'visible'; 
    selectHide.style.visibility = 'visible';
}

/* after clicking select figher button */
function fighterSelected () {  
    gameBox.style.visibility = 'visible'; 
    inputName.style.display = 'none';
    imageDeploy.style.visibility = 'visible';
    document.getElementById('roundSound').play();
};

document.getElementById('deploy-fighter-heading').innerHTML = player.value;

// INPUT NAME function and event listener
document.getElementById("input-name-submit").addEventListener("click", function () {
    inputName.style.display = 'none';
    gameBox.style.visibility = 'hidden';
    selectHide.style.visibility = ' visible';
    document.getElementById('deploy-fighter-heading').innerHTML = document.getElementById("player").value;
 
});

//SELECT FIGHTER START functions and eventlisteners
document.getElementById("fighter1").addEventListener("click", function () {  
    x.setAttribute("src", "./images/liu-kang.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';  
        fighterSelected();
});

document.getElementById("fighter2").addEventListener("click", function () {
    x.setAttribute("src", "./images/kung-lao.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';
        fighterSelected();
});

document.getElementById("fighter3").addEventListener("click", function () {
    x.setAttribute("src", "./images/raiden.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';
        fighterSelected();
});

document.getElementById("fighter4").addEventListener("click", function () {
    x.setAttribute("src", "./images/scorpion.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';
        fighterSelected();
});

document.getElementById("fighter5").addEventListener("click", function () {
    x.setAttribute("src", "./images/milena.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';
        fighterSelected();
});

document.getElementById("fighter6").addEventListener("click", function () {
    x.setAttribute("src", "./images/sonya.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';
        fighterSelected();
});

document.getElementById("fighter7").addEventListener("click", function () {
    x.setAttribute("src", "./images/sub-zero.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';
        fighterSelected();
});

document.getElementById("fighter8").addEventListener("click", function () {
    x.setAttribute("src", "./images/jax.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';
        fighterSelected();
});
//SELECT FIGHTER END

//COMPUTER choice randomizer
function compchoice ()
{
    if (computerChoice < 0.34){  
        return computerChoice = "rock";
    } 
    else if(computerChoice < 0.68 && computerChoice >= 0.34){
        return computerChoice = "paper";
    }
    else if (computerChoice >= 0.68){
        return computerChoice = "scissor";
    }
};

//COMPARE choice of user and computer
function compare (choice1, choice2){
    if (computerChoice === "rock" || "paper" || "scissor"){
        if (choice1 === choice2){
            return "DRAW!!";
        }

        else if (choice1 === "rock"){
            if (choice2 === "scissor")
            {   
                userScore ++
                return "YOU WIN!";
            }
            else if (choice2 === "paper")
            {
                computerScore +=0.5
                return "YOU LOSE!";
            }
        }
        else if (choice1 === "scissor")
        {
            if (choice2 === "rock")
            {   
                userScore ++
                return "YOU WIN!";
            }
            else if (choice2 === "paper")
            {   
                computerScore +=0.5
                return "YOU LOSE!";
            }
        }
        else if (choice1 === "paper")
        {
            if (choice2 === "rock")
            {   
                userScore ++
                return "YOU WIN!";
            }
            else if (choice2 === "scissor")
            {   
                computerScore +=0.5
                return "YOU LOSE!";
                
            }
        }
    }
};

//ROCK BUTTON function
document.getElementById('rock').addEventListener('click',function(){
  userChoice = 'rock';
  computerChoice = Math.random();  
  compchoice();
  compare(userChoice, computerChoice);

  //get user name
  const player = document.getElementById("player").value ;
  // display user choice and score
  document.getElementById("result-user").innerHTML = `${player} : ${userChoice}<br> Score : ${userScore}/5`;
  //display result
  document.getElementById("win-lose").innerHTML = compare(userChoice, computerChoice);
  //display computer choice and score
  document.getElementById("result-boss").innerHTML = ` BOSS : ${computerChoice} <br> Score:  ${computerScore}/5 `
  //perform the game-over function
  gameOver()
});

//SCISSOR BUTTON function
document.getElementById('scissor').addEventListener('click',function(){

    userChoice = "scissor";
    computerChoice = Math.random();  
    compchoice();
    compare(userChoice, computerChoice);
  
    //get user name
    const player = document.getElementById("player").value ;
    // display user choice and score
    document.getElementById("result-user").innerHTML = `${player} : ${userChoice}<br> Score : ${userScore}/5`;
    //display result
    document.getElementById("win-lose").innerHTML = compare(userChoice, computerChoice);
    //display computer choice and score
    document.getElementById("result-boss").innerHTML = ` BOSS : ${computerChoice} <br> Score:  ${computerScore}/5 `
    //perform the game-over function
    gameOver()
});

//PAPER BUTTON function
document.getElementById('paper').addEventListener('click',function(){
    userChoice = "paper";
    computerChoice = Math.random();  
    compchoice();
    compare(userChoice, computerChoice);
  
    //get user name
    const player = document.getElementById("player").value ;
    // display user choice and score
    document.getElementById("result-user").innerHTML = `${player} : ${userChoice}<br> Score : ${userScore}/5`;
    //display result
    document.getElementById("win-lose").innerHTML = compare(userChoice, computerChoice);
    //display computer choice and score
    document.getElementById("result-boss").innerHTML = ` BOSS : ${computerChoice} <br> Score:  ${computerScore}/5 `
    //perform the game-over function
    gameOver()
});

//HOME BUTTON function
document.getElementById('home').addEventListener('click', function(){
    location.href = 'index.html'
});

//GAME OVER function
function gameOver (){
    if(computerScore >= 6)
    {
    alert('GAME OVER! DEFEAT!')
      location.href ='game-start.html'
    }
    else if(userScore >= 6)
    {
    alert('GAME OVER! WIN!')
      location.href ='game-start.html'
    }
}

