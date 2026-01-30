
let items = [];

const itemsEl = document.getElementById("items")
const inputEl = document.getElementById("itemInput")
const storageKey = "items"

function renderItems(){
    itemsEl.innerHTML = null

    for(const [idx,item] of Object.entries(items)){

        const container = document.createElement("div");

        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.gap = "15px";
        container.style.marginBottom = "10px";

        const text = document.createElement("p");
        text.style.margin = "0";
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.addEventListener("click", ()=>{
            removeItem(idx)
        })

        container.appendChild(text)
        container.appendChild(button)

        itemsEl.appendChild(container)
    }
}

function addItem(){
    const value = inputEl.value
    if (!value){
        alert("You cannot add an empty item")
        return
    }
    items.push(value)
    renderItems()
    inputEl.value = ""
    saveItems()
}

function loadItems(){
    const oldItem = localStorage.getItem(storageKey)
    let items = []
    if (oldItem){
        items = JSON.parse(oldItem)
    }
    renderItems()
}


function saveItems(){
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringItems)
}

function removeItem(idx){
    items.splice(idx, 1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)