

const imgContainerEl = document.querySelector(".image-container")

const prevBtnEl = document.getElementById("prev")
const nextBtnEl = document.getElementById("next")

let x = 0
let timer;

function updateGallery(){
    imgContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`

    timer = setTimeout(()=>{
        x = x - 45;
        updateGallery();
    }, 5000)
}

prevBtnEl.addEventListener("click", ()=>{
    x = x + 45;
    clearTimeout(timer)
    updateGallery()
})

nextBtnEl.addEventListener("click", ()=>{
    x = x -45;
    clearTimeout(timer)
    updateGallery()
})

updateGallery()




