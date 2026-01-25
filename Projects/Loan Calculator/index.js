
const loan_amountEl = document.getElementById("loan-amount")
const interest_rateEl = document.getElementById("interes-rate")
const months_to_payEl = document.getElementById("months-to-pay")
const paymentEl = document.querySelector(".payment")

loan_amountEl.addEventListener("input", calculateLoan)
interest_rateEl.addEventListener("input", calculateLoan)
months_to_payEl.addEventListener("input", calculateLoan)

calculateLoan()

function calculateLoan(){
    const loanAmount = parseFloat(loan_amountEl.value)
    const interestRate = parseFloat(interest_rateEl.value)
    const monthsToPay = parseFloat(months_to_payEl.value)

    const monthlyInterest = (interestRate / 100) / 12;

    const monthlyPayment = (
        (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, monthsToPay)) /
        (Math.pow(1 + monthlyInterest, monthsToPay) - 1)
    ).toFixed(2);

    paymentEl.innerHTML = `Monthly Payment: ${monthlyPayment}`

}