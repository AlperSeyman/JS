



function rollDice(){

    const numberOfDice = document.getElementById('numberOfDice').value;
    const diceResult = document.getElementById('diceResult')
    const diceImages = document.getElementById('diceImages')
    const allDice = [];
    const allImage = [];

    for(let i = 0; i < numberOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        allDice.push(value)
        allImage.push(`<img src="dice_images/${value}.jpg">`);
    }
    diceResult.textContent = `dice: ${allDice.join(', ')}`
    diceImages.innerHTML = allImage.join('');


}