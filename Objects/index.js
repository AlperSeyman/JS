// objects = A collection of related properties and/or methods
//           Can represent real world objects (people, products, places)
//           object = {key:value,
//                     function()}


const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: ()=>console.log("Hi! I am Spongebob!"),
    sayBye: ()=>console.log("Goodbye!")
}


const fruits = [{name:"apple", color:"red", calories:95},
                {name:"orange", color:"orange", calories:45},
                {name:"banana", color:"yellow", calories:105},
                {name:"coconut", color:"white", calories:159},
                {name:"pineapple", color:"yellow", calories:37}]

// ---------- forEach() ----------

fruits.forEach((fruit)=>{
    console.log(fruit)
})

// ---------- map() ----------
const fruitsName = fruits.map((fruit)=>{
    return fruit.name
})
const fruitsColors = fruits.map((fruit)=>{
    return fruit.color
})
const fruitsCalories = fruits.map((fruit)=>{
    return fruit.calories
})

// ---------- filter() ----------
const yellowFruits = fruits.filter((fruit)=>{
    if (fruit.color === "yellow"){
        return fruit
    }
})
const lowCalFruits = fruits.filter((fruit)=>{
    if (fruit.calories < 100) {
        return fruit
    }
})
const highCalFruits = fruits.filter((fruit)=>{
    if (fruit.calories > 100) {
        return fruit
    }
})

// ---------- reduce() ----------
const maxCalFruit = fruits.reduce((max, currentFruit)=>{
    if (currentFruit.calories > max.calories) {
        return currentFruit
    }else{
        return max
    }
})

const minCalFruit = fruits.reduce((min, currentFruit)=>{
    if (currentFruit.calories < min.calories) {
        return currentFruit
    }
    else{
        return min
    }
})

console.log(maxCalFruit)
console.log(minCalFruit)