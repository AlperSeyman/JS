// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. documnet.getElementById()         --> ELEMENT OR NULL
// 2. document.getElementsByClassName() --> HTML COLLECTION
// 3. document.getElementsByTagName()   --> HTML COLLECTION
// 4. document.querySelector()          --> FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()       --> NODELIST

// 1. documnet.getElementById() --> ELEMENT OR NULL
// const myHeading = document.getElementById("my-heading");




// 2. document.getElementsByClassName() --> HTML COLLECTION
// const fruits = document.getElementsByClassName("fruits")




// 3. document.getElementsByTagName() --> HTML COLLECTION
// const h4Elements = document.getElementsByTagName("h4")
// const liElements = document.getElementsByTagName("li")


// for (let h4Element of h4Elements) {
//     h4Element.style.backgroundColor = "yellow";
// }

// for (let liElement of liElements) {
//     liElement.style.backgroundColor = "lightgreen"
// }

// Array.from(h4Elements).forEach((h4Element) => {
//     h4Element.style.backgroundColor = "red"
// })


// Array.from(liElements).forEach((liElement) => {
//     liElement.style.backgroundColor = "blue"
// })


// 4. document.querySelector() --> FIRST ELEMENT OR NULL
// const element = document.querySelector(".fruits")



// 5. document.querySelectorAll() --> NODELIST
const foods = document.querySelectorAll("li")
foods.forEach((food) =>{
    food.style.backgroundColor = "yellow"
})