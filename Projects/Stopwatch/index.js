

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunnig = false;


function start(){

    if(isRunnig != true){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunnig = true;
    }

}

function stop(){

    if(isRunnig == true){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime
        isRunnig = false;
    }

}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    display.textContent = "00:00:00:00";
    isRunnig = false;
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    // Math for time units
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    // FIX: Format strings to always show 2 digits
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
