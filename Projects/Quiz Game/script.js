const prompt = require("prompt-sync")()

console.log("Welcome to the Computer Hardware Quiz!")

let correctAnswer = 0

const answer1 = prompt("What is the brain of the computer ? ")
const correct_answer = "CPU";

if (answer1.toUpperCase() === correct_answer) {
    console.log("You got it correct!")
    correctAnswer++
}else{
    console.log("You got it wrong")
}

const answer2 = prompt("What is the better a 3090ti or a 4060 ? ")
const correct_answer2 = "3090TI";

if (answer2.toUpperCase() === correct_answer2) {
    console.log("You got it correct!")
    correctAnswer++
}else{
    console.log("You got it wrong")
}

const answer3 = prompt("What is the recommend amount of RAM in 2026 ? ")
const correct_answer3 = "16GB";

if (answer3.toUpperCase() === correct_answer3) {
    console.log("You got it correct!")
    correctAnswer++
}else{
    console.log("You got it wrong")
}


console.log(`You got ${correctAnswer} questions correct!`)