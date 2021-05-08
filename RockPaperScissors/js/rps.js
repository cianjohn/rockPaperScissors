let options = ["rock", "paper", "scissors"];
let winners = [];

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
 return options[i];
}
let i = prompt("hi")
// console.log(userPick());