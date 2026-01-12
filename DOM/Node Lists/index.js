// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes


let buttons = document.querySelectorAll(".myButtons")


// ADD HTML/CSS PROPERTIES

// buttons.forEach((button) =>{
//     button.style.backgroundColor = "green";
//     button.textContent += " Be happy"
// })



// CLICK event listener

// buttons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{

//         if(e.target.style.backgroundColor === "tomato")
//             e.target.style.backgroundColor = "blue";
//         else{
//             e.target.style.backgroundColor = "tomato";
//         }
//     })
// })



// MOUSEOVER + MOUSEOUT event listener

// buttons.forEach((button) =>{
//     button.addEventListener("mouseover", (e) =>{
//         e.target.style.backgroundColor = "hsl(205, 100%, 40%)"
//     })
// })

// buttons.forEach((button) =>{
//     button.addEventListener("mouseout", (e) =>{
//         e.target.style.backgroundColor = "hsl(205, 100%, 60%)"
//     })
// })



// ADD AN ELEMENT

const bodyEl = document.querySelector("body")

const newButton = document.createElement("button")
newButton.textContent = "Button 5" // Step 2
newButton.classList = "myButtons"  // Step 3
bodyEl.appendChild(newButton)      // Step 4