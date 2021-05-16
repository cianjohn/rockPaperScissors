let content = document.querySelector("#game")
let currentUser = "cian" //set to cian for test
let options = ["rock", "paper", "scissors"];
let history = [];
let computerWins = 0
let userWins = 0



function showframe1(){
  let frame1 = `<div class="col align-self-center">
<form id="nameInput" class=".">
  <div class="form-group">
      <label for="inputName">Please input a username:</label>
      <input name="inputName" id="inputName" class="form-control" type="text" placeholder="username..." aria-label="input field for name">
  </div>
  <div class="form-row" style="padding-top: 2% ;">
      <div class="col-3" id="playbtn">
        <button onclick="showframe2()"class="btn btn-primary" id="play">play</button>
      </div>
  </div>
</form>
</div>
`
  content.innerHTML = frame1
}

function showframe2(){
  // currentUser = document.querySelector("#inputName").value
  let frame2 = `<div class="col align-self-center">
  <div class="row" >
    <div class="col">
    <div class="card">
      <div class="card-body">
        <h3 class="card-text">computer</h3>
      </div>
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h6 class="card-text">wins: ${computerWins}</h6>
      </div>
    </div>

  </div>
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h3 class="card-text">${currentUser}</h3>
        </div>
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <h6 class="card-text">wins: ${userWins}</h6>
      </div>
      </div>

    </div>
  </div>
  <div class="row" style="margin-top: 2%;">
    <div class="col">
      <button onclick="logHistory(randOption(), 'rock', '${currentUser}'); showframe2()" class="btn btn-primary" id="Rock">Rock</button>
      </div>
      <div class="col">
      <button onclick="logHistory(randOption(), 'paper', '${currentUser}'); showframe2()" class="btn btn-primary" id="Paper">Paper</button>
      </div>
      <div class="col">
      <button onclick="logHistory(randOption(), 'scissors', '${currentUser}'); showframe2()" class="btn btn-primary" id="Scissors">Scissors</button>
      </div>
  </div>
</div>`
  content.innerHTML = frame2
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
showframe2()