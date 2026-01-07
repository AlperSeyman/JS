

const inputEl = document.getElementById("dark-mode")
const bodyEl = document.querySelector("body")

function updatedBody(){

    if (inputEl.checked) {
        bodyEl.style.background = "black";
    }else{
        bodyEl.style.background = "white";
    }
}

inputEl.addEventListener("input",updatedBody)