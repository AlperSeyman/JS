
// <li class="border rounded p-3 mb-1">
// <input type="checkbox" class="form-check-input">
// <div class="item-name">item</div>
// <i class="fs-3 bi bi-x text-danger delete-icon"></i>
// </li>

const shoppingList = document.querySelector(".shopping-list");
const shoppingForm = document.querySelector(".shopping-form")
const filterButtons = document.querySelectorAll(".filter-buttons button")

document.addEventListener("DOMContentLoaded", ()=>{

    loadItem()

    shoppingForm.addEventListener("submit", handleFormSubmit)

    for (let button of filterButtons) {
        button.addEventListener("click", handleFilterSelection)
    }
})

function saveToLS(){ // save to local storage

    const listItems = document.querySelectorAll("li");
    const list = [];

    for (let li of listItems){
        const id = li.getAttribute("item-id");
        const name = li.querySelector(".item-name").textContent;
        const completed = li.hasAttribute("item-completed");

        list.push({id, name, completed});
    }

    localStorage.setItem("shoppingItems", JSON.stringify(list))
}


function loadItem(){

    const items = JSON.parse(localStorage.getItem("shoppingItems") || "[]")

    shoppingList.innerHTML = ""

    for (let item of items) {
        const li = createListItem(item)
        shoppingList.appendChild(li)
    }
}


function generateId(){
    return Date.now().toString()
}

function addItem(input){
    const newItem = createListItem({
        id:generateId(),
        name:input.value,
        completed:false,
    });
    shoppingList.appendChild(newItem)

    input.value = "";

    updateFilterItems()

    saveToLS();
}

function handleFormSubmit(e){
    e.preventDefault()

    const input = document.getElementById("item_name")
    if (input.value.trim().length === 0){
        alert("Enter new item");
        return;
    }

    addItem(input)
}

function toogleCompleted(e){
    const li = e.target.parentElement;
    li.toggleAttribute("item-completed", e.target.checked);

    updateFilterItems();

    saveToLS();
}

function createListItem(item){

    // checkbox
    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("form-check-input");
    input.checked = item.completed;
    input.addEventListener("change", toogleCompleted)

    //  item
    const div = document.createElement("div");
    div.textContent = item.name;
    div.classList.add("item-name")
    div.addEventListener("click", openUpdateItem)
    div.addEventListener("blur", closeUpdateItem)
    div.addEventListener("keydown", (e)=>{
        if(e.key == "Enter"){
            e.preventDefault()
            closeUpdateItem(e)
        }
    })

    // delete icon
    const deleteIcon = document.createElement("i")
    deleteIcon.className = "fs-3 bi bi-x text-danger delete-icon";
    deleteIcon.addEventListener("click", deleteItem)

    // li
    const li = document.createElement("li");
    li.setAttribute("item-id", item.id)
    li.className = "border rounded p-3 mb-1";
    li.toggleAttribute("item-completed", item.completed);


    li.appendChild(input)
    li.appendChild(div)
    li.appendChild(deleteIcon)

    return li
}

function deleteItem(e){
    const li = e.target.parentElement
    shoppingList.removeChild(li)

    saveToLS()
}

function openUpdateItem(e){
    const li = e.target.parentElement
    if(li.hasAttribute("item-completed") == false){
        e.target.contentEditable = true
    }
}

function closeUpdateItem(e) {
    e.target.contentEditable = false
}


function handleFilterSelection(e){

    const filterBtn = e.target

    for (const button of filterButtons) {
        button.classList.add("btn-secondary")
        button.classList.remove("btn-primary")
    }

    filterBtn.classList.add("btn-primary")
    filterBtn.classList.remove("btn-secondary")

    filterItem(filterBtn.getAttribute("item-filter"))
}

function filterItem(filterType){

    const li_items = shoppingList.querySelectorAll("li")

    for (const li of li_items) {

        li.classList.remove("d-block")
        li.classList.remove("d-none")

        const completed = li.hasAttribute("item-completed")

        if(filterType == "completed"){
            // Show only completed items
            li.classList.toggle(completed ? "d-flex":"d-none")
        }else if(filterType == "incomplete"){
            // Show only  incomplete items
            li.classList.toggle(completed ? "d-none":"d-flex")
        }else{
            // Show all items.
            li.classList.toggle("d-flex")
        }
    }
}

function updateFilterItems(){
    const activeFilter = document.querySelector(".btn-primary[item-filter]");
    filterItem(activeFilter.getAttribute("item-filter"));
}