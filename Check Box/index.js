


const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");

// Button
const mySubmit = document.getElementById("mySubmit")


const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")


mySubmit.onclick = function(){

    if (myCheckBox.checked) { // .checked = return true or false
        subResult.textContent = `You are subscribed`;
        if(visaBtn.checked){
            paymentResult.textContent = `You are paying with Visa`;
        }   
        else if(masterCardBtn.checked){
            paymentResult.textContent = `You are paying with MasterCard`;
        } 
        else if(payPalBtn.checked){
            paymentResult.textContent = `You are paying with PayPal`;
        } 
        else{
            paymentResult.textContent = `You must select a payment method`;
        }
    }
    else{
        subResult.textContent = `You are NOT subscribed`;
    }

    
}
