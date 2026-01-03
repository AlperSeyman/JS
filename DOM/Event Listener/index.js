
// eventListener = Listen for specific events to create interactive
//                 web pages events: 'click', 'mouseover', 'mouseout'
//                 .addEvenetListener(event, callback);
//                 .addEvenetListener(event, anonymous function)
//                 .addEvenetListener(event, arrow function)


const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");



myButton.addEventListener("click", ()=>{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH";
})

myButton.addEventListener("mouseover", ()=>{
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it";
})


myButton.addEventListener("mouseout", ()=>{
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me";
})