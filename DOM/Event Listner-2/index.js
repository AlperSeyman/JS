
const msg = document.getElementById("msg")
const button = document.querySelector("button")
const buttons = document.getElementById("buttons")

function showMsg(){
    console.log(msg.value)
    msg.value = ""
}
button.addEventListener("click", showMsg)


for (let i = 1; i <  5; i++){
    let button = document.createElement("button")
    button.id = "btn" + 1;
    button.innerText = "button " + i;
    button.addEventListener("click", showMsg);

    buttons.appendChild(button);
}