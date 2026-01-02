// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript


// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


// ------------ .firstElementChild ------------

// const elemet = document.getElementById("fruits")
// const firstChild = elemet.firstElementChild;
// firstChild.style.backgroundColor = "blue"

// const ulElements = document.querySelectorAll("ul")
// ulElements.forEach((ulElement) =>{
//     const firstChild = ulElement.firstElementChild
//     firstChild.style.backgroundColor = "blue"
// })



// ------------ lastElementChild ------------

// const element = document.getElementById("vegetables")
// const lastChild = element.lastElementChild
// lastChild.style.backgroundColor = "yellow"


// const ulElements = document.querySelectorAll("ul")
// ulElements.forEach((ulElement) =>{
//     const lastChild = ulElement.lastElementChild
//     lastChild.style.backgroundColor = "yellow"
// })


// ------------ .nextElementSibling ------------

// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "blue"




// ------------ .previousElementSibling ------------

// const element = document.getElementById("desserts");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow";



// ------------ .parentElement ------------

// const element = document.getElementById("ice-cream")
// const parent = element.parentElement
// parent.style.backgroundColor = "blue";



// ------------ .children ------------

const element = document.getElementById("fruits")
const children = element.children;

Array.from(children).forEach((child)=>{
    child.style.backgroundColor = "yellow";
})