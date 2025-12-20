// function expression = a way to define functions as values or variables.

const hi = function(){
    console.log("Hello");
}

setTimeout(function(){
    console.log("tesla")
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

const maxNum = numbers.reduce(function(max, currentValue){
    if (currentValue > max) {
        return currentValue;
    }
    else{
        return max;
    }
})

console.log(square)
console.log(cube)
console.log(evenNums)
console.log(oddNums)
console.log(maxNum)