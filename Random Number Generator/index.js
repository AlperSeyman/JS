
// Button
const myButton = document.getElementById("myButton")


// Random Number
const myLabel = document.getElementById("myLabel")

const min = 1;
const max = 6;
let randomNum;


// Function
myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;    
}