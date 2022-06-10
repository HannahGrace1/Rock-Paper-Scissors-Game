let playerPoints=0;
let computerPoints=0;
  //Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

function computerPlay(computerSelection){
  let choices=['Rock','Paper','Scissors']
 let pick= choices[Math.floor(Math.random()*choices.length)];
  return pick
}


  
  //Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" 
  //Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
  //Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:


//At this point you should be using console.log() to display the results of each round and the winner at the end.
//Use prompt() to get input from the user.
  function singleRound(playerSelection,computerSelection){


    
    if (playerSelection === 'Paper'|| computerSelection === 'Rock') {
       playerPoints=+1
        return "You Win! Paper beats Rock";
    }
      
    else if (playerSelection === 'Paper'|| computerSelection=='Scissors') {
      computerPoints=+1
      return"Paper does not beat Scissors! You lose";
       
            }
      
      else if (playerSelection === 'Paper' || computerSelection ==='Paper') {
        computerPoints !== +1 && playerPoints !== +1
      return "Paper does not beat Paper! Tie Game!";
         
    }
    
      else if (playerSelection === 'Rock' || computerSelection ==='Paper') {
   computerPoints=+1
      return"Rock does not beat Paper! You lose";
         
    }
    
          else if (playerSelection === 'Rock' || computerSelection ==='Rock') {
            computerPoints !== +1 && playerPoints !== +1
      return"Rock does not beat Rock! Tie Game!";
            
    }
      else if (playerSelection === 'Rock' || computerSelection ==='Scissors') {
        playerPoints=+1
      return "Rock beats Scissors! You Win!";
    }
    
      else if (playerSelection === 'Scissors' || computerSelection ==='Paper') {
        playerPoints=+1
      return "Scissors Beats Paper! You Win!";
      }
    
      else if (playerSelection === 'Scissors' || computerSelection ==='Rock') {
       computerPoints=+1
      return "Scissors does not beat Rock! You lose!";
      
      }
      
      else if (playerSelection === 'Scissors' || computerSelection ==='Scissors') {
        computerPoints !== +1 && playerPoints !== +1
      return"Scissors does not beat Scissors! Tie Game!";
        }

      }
  


  
  
  //Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.





  function game(){
  
    
  for (let i = 0; i < 5; i++){

    
    if (playerPoints === +1)
    {console.log('1 point for player');i++
    return}
      
    else if (computerPoints === +1)
    {console.log('1 point for the computer');{ i++}
    return}
      
    else if (computerPoints !== +1 && playerPoints !== +1){ console.log('No one won this round. No points for either of you.');
   return}
    
    if (playerPoints > computerPoints){ i==5}
      console.log('Yay! Congrats! You won the game! ');
      return
    }
    if (computerPoints < playerPoints){ i==5}
      console.log('Sorry :/ You lost the game.');
      return
    }
do{ singleRound();
  } 
  while (playerPoints < 5 && computerPoints < 5);
  
  

function playAgain(){
  prompt('Do you want to play again?');
  if (prompt===Yes){
    
    game();
  }
  else if (prompt===No){
    return
  }
}


let playerSelection=['Rock','Paper','Scissors']
const computerSelection=computerPlay()
console.log('The computer chose:' + computerSelection);
prompt("Do you want to pick Rock, Paper, or Scissors?");
alert(singleRound(playerSelection,computerSelection));
computerPlay();
alert("player:" + playerPoints)
alert("and computer:" + computerPoints)
game();

//playAgain();

//get game to play 5 rounds and shut off 