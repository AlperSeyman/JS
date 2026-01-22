

const searchBarContainerEl = document.querySelector('.search-bar-container')
const magnifierEl = document.querySelector('.mangifier')

magnifierEl.addEventListener('click', ()=>{
    searchBarContainerEl.classList.toggle("active")
})