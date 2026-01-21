

const imgContainerEl = document.querySelector(".image-container")

const prevBtnEl = document.getElementById("prev")
const nextBtnEl = document.getElementById("next")

let x = 0


function updateGallery(){
    imgContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`

    setTimeout(()=>{
        x = x - 45;
        updateGallery();
    }, 5000)
}

prevBtnEl.addEventListener("click", ()=>{
    x = x + 45;
    updateGallery()
})

nextBtnEl.addEventListener("click", ()=>{
    x = x -45;
    updateGallery()
})

updateGallery()




