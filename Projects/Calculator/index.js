

const display = document.getElementById("display")

function appnedDisplay(input){
    display.value += input
    display.scrollLeft = display.scrollWidth
}

function clearDisplay(){
    display.value = ""
}

function backspace(){
    display.value = display.value.slice(0, -1);
}

function calculate(){

    const expression = display.value.match(/(\d+\.?\d*)|(\+|\-|\*|\/)/g);

    if (!expression){
        return;
    }

    for (let i=0; i < expression.length; i++){

        if(expression[i] == "*" || expression[i] == "/"){

            const leftNum = parseFloat(expression[i - 1])
            const rightNum = parseFloat(expression[i + 1])

            let result;
            const operator = expression[i]
            if(operator === "*"){
                result = leftNum * rightNum
            }else{
                result = leftNum / rightNum
            }
            expression.splice(i-1,3, result.toString());
            i--;
        }
    }

    let total = parseFloat(expression[0]);

    for (let i=1; i<expression.length; i+=2){

        const operator = expression[i]
        const nextNumber = parseFloat(expression[i + 1])

        if (operator === "+"){
            total = total + nextNumber
        }
        if(operator === "-"){
            total = total - nextNumber
        }
    }
    display.value = total
    if (total === Infinity || isNaN()){
        display.value = "Error"
    }else{
        display.value = total
    }
}
