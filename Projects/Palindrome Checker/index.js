
const inputEl = document.getElementById("input")
const btnEl = document.getElementById("btn")
const resultTextEl = document.getElementById("result-text")

function reversString(str){
    return str.split("").reverse().join("")
}

function check(){

    const value = inputEl.value

    if (value === reversString(value)){
        resultTextEl.innerText = "Palindrome"
    }else{
        resultTextEl.innerText = ":("
    }

   inputEl.value = ""
}

btnEl.addEventListener("click", check)
