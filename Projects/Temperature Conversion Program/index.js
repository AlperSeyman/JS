

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const resultTemp = document.getElementById("resultTemp");
let temp;

function convert(){

    if(toFahrenheit.checked){ // .checked = return true of false
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        resultTemp.textContent = temp.toFixed(1) + "°F";
    } 
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp-32) * 9 / 5;
        resultTemp.textContent = temp.toFixed(1) + "°C";
    }
    else{
        resultTemp.textContent = "Select a unit";
    }

}