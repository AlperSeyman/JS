// destructuring = extract values from arrays and objects, then assign
//                 them to variables in a conveient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring

// ----------- Example 1 -----------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a,b] = [b,a];


// ----------- Example 2 -----------
// SWAP 2 ELEMENTS IN ARRAY

const colors1 = ["red", "green", "blue", "black", "white"];
[colors1[0], colors1[4]] = [colors1[4], colors1[0]]


// ----------- Example 3 -----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors2 = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors2;

console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extraColors)


// ----------- Example 4 -----------
// EXTRACT VALUES FROM OBJECTS and DESTRUCTURE IN FUNCTION PARAMETERS

const person1 = {
    firstName:"Spongebob",
    lastName:"SquarePants",
    age:30,
    job:"Fry Cook",
}

const person2 = {
    firstName:"Patrick",
    lastName:"Star",
    age:34,
}

const {firstName, lastName, age, job="Unemployed"} = person2;
console.log(firstName)
console.log(lastName)
console.log(age)
console.log(job)

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`)
    console.log(`age: ${age}`)
    console.log(`job: ${job}`)
}

displayPerson(person2)