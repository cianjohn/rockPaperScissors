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
  function logHistory(computerChoice, userChoice, userName){
      history.push(winner(computerChoice, userChoice, userName))
      console.log(history)
  }

  let rock = document.querySelector("#Rock")
  rock.addEventListener("click", function(){logHistory(randOption(), rock.textContent.toLowerCase(), "cian")})
  let paper = document.querySelector("#Paper")
  paper.addEventListener("click", function(){logHistory(randOption(), paper.textContent.toLowerCase(), "cian")})
  let scissors = document.querySelector("#Scissors")
  scissors.addEventListener("click", function(){logHistory(randOption(), scissors.textContent.toLowerCase(), "cian")})
//   let inputOptions = [rock, paper, scissors]
//   for (item of inputOptions){
//       item.addEventListener("click", function(){logHistory(randOption(), item.textContent.toLowerCase(), "cian")})
//   }