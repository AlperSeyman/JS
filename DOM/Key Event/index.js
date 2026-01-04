// eventListener = Listen for specific events to create interactive
//                 web pages events: 2keydown', 'keyup'
//                 document.addEventListener(event, callback)


const myBox = document.getElementById("myBox")
const moveAmount = 10;
let x = 0;
let y = 0;


document.addEventListener("keydown", (event)=>{

    if(event.key.startsWith("Arrow")){

        switch (event.key) {
            case "ArrowUp":
                y = y - moveAmount;
                break;
            case "ArrowDown":
                y = y + moveAmount
                break;
            case "ArrowRight":
                x = x + moveAmount
                break;
            case "ArrowLeft":
                x = x - moveAmount
                break;
        }

        myBox.style.top = `${y}px`
        myBox.style.left = `${x}px`
    }
});

document.addEventListener('keydown', ()=>{
    myBox.textContent = "Opps!"
    myBox.style.backgroundColor = "tomato"
})

document.addEventListener('keyup', ()=>{
    myBox.textContent = "Hello";
    myBox.style.backgroundColor = "lightblue"
})