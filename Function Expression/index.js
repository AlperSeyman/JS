// function expression = a way to define functions as values or variables.

// arrow function = a consie way to write  function expressions
//                  simple functions that you use only once
//                  (parameters) => some code


const hi = function(){
    console.log("Hello");
}

setTimeout(function(){
    console.log("set timeout function.")
}, 3000);

const numbers = [1, 2, 3, 4, 5, 6]

const square = numbers.map(function(element){
    return Math.pow(element, 2);
});

const cube = numbers.map(function(element){
    return Math.pow(element, 3);
});

const evenNums = numbers.filter(function(element){
    if (element % 2 === 0) {
        return element;
    }
});

const oddNums = numbers.filter(function(element){
    if (element % 2 === 1) {
        return element;
    }
});

const maxNum = numbers.reduce(function(accu, currentValue){
    if (currentValue > accu) {
        return currentValue;
    }
    else{
        return accu;
    }
})

console.log(square)
console.log(cube)
console.log(evenNums)
console.log(oddNums)
console.log(maxNum)


// arrow function

const hello = (name) => console.log(`Hello ${name}`);
hello("Tesla")

setTimeout( ()=> console.log("set timout 2 "), 3000)

const numbers2 = [11, 12, 13, 14, 15, 16, 17, 18]



const square2 = numbers2.map( (element)=>{
    return Math.pow(element, 2)
})

const cube2 = numbers2.map( (element)=>{
    return Math.pow(element, 3)
})

const evenNums2 = numbers2.filter( (element) => {
    if (element % 2 === 0) {
        return element;
    }
})

const oddNums2 = numbers2.filter( (element)=>{
    if (element % 2 === 1) {
        return element;
    }
})

const maxNum2 = numbers2.reduce( (accu, currentValue)=>{
    if (currentValue > accu) {
        return currentValue
    }
    else{
        return accu
    }
})


console.log(square2)
console.log(cube2)
console.log(evenNums2)
console.log(oddNums2)
console.log(maxNum2)