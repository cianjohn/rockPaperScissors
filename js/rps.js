let options = ["rock", "paper", "scissors"];
let history = [];

// function for random integer between 0 and max
function randInt(max) {
    return Math.floor(Math.random()*max);
}

// outputs 1 of the three options at random
function randOption() {
    let i = randInt(3);
    return options[i];
}

// input pick for user
function userPick() {
    console.log(options);
 let i = parseInt(prompt("please input a number 0 to 2, to choose an option").trim());
 if ((i < 3) && (i >= 0)){
   return options[i];
 } else {
   console.log("not a valid input")
   userPick()
 }
 
}


// takes an input of user and computer choices and tells output
function winner(computerChoice, userChoice, userName) {
  if (userChoice === "rock") {
      if (computerChoice === "rock") {
        return ["draw", userChoice];
      } else if (computerChoice === "paper") {
        return ["Computer", computerChoice];
      } else {//scissors
        return [userName, userChoice];
      }
  } else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return [userName, userChoice];
      } else if (computerChoice === "paper") {
        return ["draw", userChoice];
      } else {//scissors
        return ["Computer", computerChoice];
      }
  } else {//scissors
      if (computerChoice === "rock") {
        return ["Computer", computerChoice];
      } else if (computerChoice === "paper") {
        return [userName, userChoice];
      } else {//scissors
        return ["draw", userChoice];
      }
  }
}

// mainflow control
function game(history, userName){
  let computerChoice = randOption();
  let userChoice = userPick();
  let result = winner(computerChoice, userChoice, userName)
  console.log(result)
  history.push(result)



  if (prompt("would you like to play again?").trim().charAt(0).toLowerCase()=="y"){
    game(history, userName);
  } else {
    console.log(history)
  }
}


function newGame(){
  let userName = prompt("please choose a name?").trim()
  let options = ["rock", "paper", "scissors"];
  let history = [];
  game(history, userName)

}


newGame()



// im logging the history so that when i want to implement the ai the previous moves are there

