// .reduce() = reduce the elements of an array to a single value


const price = [5, 13, 38, 23, 44, 3, 7, 19]

const total = price.reduce(sum)
const high_price = price.reduce(findHighestPrice)

console.log(high_price)

function sum(accumulator, currentValue){
    return accumulator + currentValue
}

function findHighestPrice(max, currentValue){
    if(currentValue > max){
        return currentValue
    }
    else{
        return max
    }
}