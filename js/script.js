let content = document.querySelector("#game")
let currentUser = "cian" //set to cian for test
let options = ["rock", "paper", "scissors"];
let history = [];
let computerWins = 0
let userWins = 0



function showframe1(){
  let frame1 = `
  <h1 id="title">Rock Paper Scissors</h1>
  <img id="logo" src="rps.svg" style="width:300px;">
  <div class="col align-self-center" id="frame1">
<form id="nameInput" class=".">
  <div class="form-group" id="frame1">
      <label for="inputName" style="font-size:32px;">Please input a username:</label>
      <input name="inputName" id="inputName" class="form-control" type="text" placeholder="username..." aria-label="input field for name">
  </div>
  <div class="form-row" style="padding-top: 2% ;"> 
    <button style=" border-color:transparent; background-color:rgb(0, 174, 255); font-size:22px; width:300px; align-self:center;" onclick="showframe2()"class="btn btn-primary" id="play">play</button>  
  </div>
</form>
</div>
<img id="logo" src="rps.svg" style="width:300px; transform: scaleX(-1);">
`
  content.innerHTML = frame1
}
function showframe2(){
  currentUser = document.querySelector("#inputName").value
  resetframe()
}
function resetframe(){
  let frame2 = `<div class="col align-self-center">
  <div class="row" >
    <div class="col" id="computerCard">
    <div class="card">
      <div class="card-body">
        <h3 class="card-text">computer</h3>
      </div>
      <img src="https://lh3.googleusercontent.com/proxy/T0efBA09vF11MhHIDl8tI-6I8fO6Km36G90rgTMwHfOh556VUWHHSCMuhgbKb6IA9bQbsnQlmkicX0cVj_4QDvHU" class="card-img-top" alt="...">
      <div class="card-body">
        <h6 class="card-text">wins: ${computerWins}</h6>
      </div>
    </div>

  </div>
    <div class="col" id="playerCard">
      <div class="card">
        <div class="card-body">
          <h3 class="card-text">${currentUser}</h3>
        </div>
        <img  src="https://i.pinimg.com/originals/85/65/50/856550aa773911d00b76b24aaa4bc467.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h6 class="card-text">wins: ${userWins}</h6>
      </div>
      </div>

    </div>
  </div>
  <div class="row" style="margin-top: 2%;">
    <div class="col">
      <button onclick="logHistory(randOption(), 'rock', '${currentUser}'); resetframe()" class="btn btn-primary" id="Rock">Rock</button>
      </div>
      <div class="col">
      <button onclick="logHistory(randOption(), 'paper', '${currentUser}'); resetframe()" class="btn btn-primary" id="Paper">Paper</button>
      </div>
      <div class="col">
      <button onclick="logHistory(randOption(), 'scissors', '${currentUser}'); resetframe()" class="btn btn-primary" id="Scissors">Scissors</button>
      </div>
  </div>
</div>`
  content.innerHTML = frame2
}

function showframe2(){
  currentUser = document.querySelector("#inputName").value
  resetframe()
}

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
    let result = winner(computerChoice, userChoice, userName)
    history.push(result)
    if (result[0] == "Computer"){
      computerWins++
    } else if (result[0] == userName){
      userWins++
    }
    console.log(history)

}
showframe1()