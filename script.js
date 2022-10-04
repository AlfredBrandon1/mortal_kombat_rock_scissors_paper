//const rollDice = () => Math.round(Math.random() * (6 - 1) +1);
const roll = document.getElementById('roll');
const selectHide = document.getElementById('select');
const x = document.createElement("IMG");
const gameBox = document.getElementById('main-game-box');
const inputName = document.getElementById('input-name');
const inputNameSubmit = document.getElementById('input-name-submit');
const imageDeploy = document.getElementById('image-deploy');
let computerChoice = Math.random();
let userChoice = ['rock','scissors','paper'];
const player = document.getElementById("player").value;

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

/* function and event listener for : INPUT NAME */
document.getElementById("input-name-submit").addEventListener("click", function () {
    inputName.style.display = 'none';
    gameBox.style.visibility = 'hidden';
    selectHide.style.visibility = ' visible';
    document.getElementById('deploy-fighter-heading').innerHTML = document.getElementById("player").value;
 
});

/* fighter select */
document.getElementById("fighter1").addEventListener("click", function () {  
    x.setAttribute("src", "images/liu-kang.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';  
        fighterSelected();
});

document.getElementById("fighter2").addEventListener("click", function () {
    x.setAttribute("src", "images/kung-lao.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';
        fighterSelected();
});

document.getElementById("fighter3").addEventListener("click", function () {
    x.setAttribute("src", "images/raiden.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';
        fighterSelected();
});

document.getElementById("fighter4").addEventListener("click", function () {
    x.setAttribute("src", "images/scorpion.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';
        fighterSelected();
});

document.getElementById("fighter5").addEventListener("click", function () {
    x.setAttribute("src", "images/milena.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';
        fighterSelected();
});

document.getElementById("fighter6").addEventListener("click", function () {
    x.setAttribute("src", "images/sonya.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';
        fighterSelected();
});

document.getElementById("fighter7").addEventListener("click", function () {
    x.setAttribute("src", "images/sub-zero.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';
        fighterSelected();
});

document.getElementById("fighter8").addEventListener("click", function () {
    x.setAttribute("src", "images/jax.webp");
        document.getElementById('deploy-fighter').appendChild(x);
        selectHide.style.display = 'none';
        fighterSelected();
});

//REVEAL fighting GIF
 document.getElementById("roll").addEventListener("click", function () {
    const fight = document.createElement('IMG');
    fight.setAttribute("src", "images/fight.gif"); //gif
    roll.style.visibility = 'hidden';
        document.getElementById('gif').appendChild(fight);
});

//COMPUTER choice randomizer
function compchoice ()
{
    if (computerChoice <= 0.34){  
        return computerChoice = "rock";
    } 
    else if(computerChoice <= 0.679999999999999 && computerChoice >= 0.35){
        return computerChoice = "paper";
    }
    if (computerChoice >= 0.68999999999999999999){
        return computerChoice = "scissors";
    }

};

//COMPARE choice of user and computer
function compare (choice1, choice2){
    if (computerChoice === "rock" || "paper" || "scissors"){
        if (choice1 === choice2){
            return "DRAW!!";
        }

        else if (choice1 === "rock"){
            if (choice2 === "scissors")
            {
                return "YOU WIN!";
            }
            else if (choice2 === "paper")
            {
                return "YOU LOSE!";
            }
        }
        if (choice1 === "scissors")
        {
            if (choice2 === "rock")
            {
                return "YOU WIN!";
            }
            else if (choice2 === "paper")
            {
                return "YOU LOSE!";
            }
        }
        else if (choice1 === "paper")
        {
            if (choice2 === "rock")
            {
                return "YOU WIN!";
            }
            else if (choice2 === "scissors")
            {
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
    
  const player = document.getElementById("player").value ;

  // display the result on the page
  document.getElementById("result-box").innerHTML = `<p>${player} = ${userChoice}</p> <p>BOSS = ${computerChoice}</p> `;
  document.getElementById("win-lose").innerHTML = compare(userChoice, computerChoice);
});

//SCISSORS BUTTON function
document.getElementById('scissors').addEventListener('click',function(){

    userChoice = "scissors";
    computerChoice = Math.random();  
    compchoice();
    compare(userChoice, computerChoice);
    
    const player = document.getElementById("player").value;
    // display the result on the page
    document.getElementById("result-box").innerHTML = `<p>${player} = ${userChoice}</p> <p>BOSS = ${computerChoice}</p> `;
    document.getElementById("win-lose").innerHTML = compare(userChoice, computerChoice);
});

//PAPER BUTTON function
document.getElementById('paper').addEventListener('click',function(){

    userChoice = "paper";
    computerChoice = Math.random();  
    compchoice();
    compare(userChoice, computerChoice);
    
    const player = document.getElementById("player").value;
    // display the result on the page
    document.getElementById("result-box").innerHTML = `<p>${player} = ${userChoice}</p> <p>BOSS = ${computerChoice}</p> `;
    document.getElementById("win-lose").innerHTML = compare(userChoice, computerChoice);
});

document.getElementById('home').addEventListener('click', function(){
    location.href = 'index.html'
});

/* const startTimer=document.querySelector('.start');
startTimer.addEventListener('click',()=>{
  let timeleft = 60;
  let downloadTimer = setInterval(countDown, 1000);
  function countDown(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("result-box").innerHTML = "Finished";
    } else {
      document.getElementById("result-box").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
  }
});
 */
