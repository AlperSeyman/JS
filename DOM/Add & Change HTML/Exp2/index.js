

const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen"

// document.getElementById("fruits").append(newListItem)
// document.getElementById("fruits").prepend(newListItem)

const banana = document.getElementById("banana")
document.getElementById("fruits").insertBefore(newListItem, banana)