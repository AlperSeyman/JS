// classList = Element property in JavaScript used to interact
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements.
//             across your webpage.

// add()
// remove()
// toggle(remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

const myH1 = document.getElementById("myH1")
const myButton = document.getElementById("myButton")

// add()
// myButton.classList.add("enabled")

// remove()
// myButton.classList.remove("enabled")


// myButton.addEventListener("mouseover", (e) =>{
//     e.target.classList.add("hover");
// })
// myButton.addEventListener("mouseout", (e) =>{
//     e.target.classList.remove("hover");
// })



// toggle(remove if present, Add if not)
// myButton.addEventListener("mouseover", (e)=>{
//     e.target.classList.toggle("hover")
// })
// myButton.addEventListener("mouseout", (e)=>{
//     e.target.classList.toggle("hover")
// })


// replace(oldClass, newClass)
// myButton.addEventListener("click", (e)=>{
//     // contains()
//     if (e.target.classList.contains("enabled")){
//        e.target.classList.replace("enabled", "disabled")
//     }else{
//         e.target.classList.replace("disabled", "enabled")
//     }
// })

let buttons = document.querySelectorAll(".myButtons")

buttons.forEach((button) => {
    button.classList.add("enabled")
});

buttons.forEach((button)=>{
    button.addEventListener("mouseover", (e)=>{
        e.target.classList.toggle("hover")
    })
})
buttons.forEach((button)=>{
    button.addEventListener("mouseout", (e)=>{
        e.target.classList.toggle("hover")
    })
})
buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{

        if (e.target.classList.contains("enabled")) {
            e.target.classList.replace("enabled", "disabled")
        }else{
            e.target.classList.replace("disabled", "enabled")
        }

    })
})