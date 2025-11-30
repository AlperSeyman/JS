
// Counter
const countLabel = document.getElementById("countLabel")

// Buttons
const decreaseBtn = document.getElementById("decreaseBtn");
const resertBtn = document.getElementById("resertBtn");
const increaseBtn = document.getElementById("increaseBtn");

let count = 0;


// Functions
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
    if (count < 0) {
        count = 0;
        countLabel.textContent = count;
    }
}

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

resertBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}