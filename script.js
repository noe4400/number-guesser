let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random()*9);
};

function getAbsoluteDistance(a,b){
  if((a < 0 || a >9)|| (b < 0 || b > 9)){
     alert("Number is out of range");
  }
  else{
    return Math.abs(a - b);
  }
  
}

function compareGuesses(user,computer,secret){
  const userResult = getAbsoluteDistance(secret - user);
  const computerResult = getAbsoluteDistance(secret - computer);
  if(userResult===computerResult || userResult < computerResult){
    return true;
  }else{
    return false;
  }
};

function updateScore(winner){
  if(winner==='human'){
    humanScore++;
  }
  else{
    computerScore++;
  }
};

function advanceRound(){
  currentRoundNumber++;
};
