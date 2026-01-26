
const heightEl = document.getElementById("height")
const weightEl = document.getElementById("weight")
const calculateBtnEl = document.getElementById("btn")
const bmiResultEl = document.getElementById("bmi-result")
const weightConditionEl = document.getElementById("weight-condition")

calculateBtnEl.addEventListener("click", ()=>{



    const height = parseFloat(heightEl.value) / 100
    const weight = parseFloat(weightEl.value)

    const bmi = (weight / (Math.pow(height, 2))).toFixed(2);

    bmiResultEl.value = bmi

    if (bmi < 18.5){
        weightConditionEl.innerText = `Underweight`;
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        weightConditionEl.innerText = `Normal Weight`;
    }
    else if(bmi >= 25 && bmi <= 29.9){
        weightConditionEl.innerText = `Overweight`;
    }
    else{
        weightConditionEl.innerText = `Obesity`
    }


})


