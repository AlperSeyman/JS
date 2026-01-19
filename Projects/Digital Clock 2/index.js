
// Hour
const hourEl = document.getElementById("hour")
// Minute
const minuteEl = document.getElementById("minute")
// Second
const secondEl = document.getElementById("second")
// Merdiem
const merdiemEl = document.getElementById("ampm")

function updateClock(){

    const currentDate = new Date()
    let hours = currentDate.getHours()
    if (hours >= 12){
        merdiemEl.textContent = "PM"
    }else{
        merdiemEl.textContent = "AM"
    }

    hours = hours % 12 || 12
    hours = hours.toString().padStart(2, 0);
    hourEl.textContent = hours

    minuteEl.textContent = currentDate.getMinutes().toString().padStart(2, 0);
    secondEl.textContent = currentDate.getSeconds().toString().padStart(2, 0);
}

updateClock()
setInterval(updateClock, 1000)