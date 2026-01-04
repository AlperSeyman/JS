

const form = document.getElementById("form")

function onSubmit(event) {
    event.preventDefault()

    const inputValue = document.getElementById("input").value
    const selectValue = document.getElementById("select").value
    const checkboxValue = document.getElementById("checkbox").checked

    if (inputValue === '' || selectValue === '0') {
        alert('Please fill in the form')
        return;
    }

    console.log(inputValue, selectValue, checkboxValue)
}


function onSubmit2(event) {
    event.preventDefault()

    formData = new FormData(form)

    const inputValue = formData.get("input")
    const selectValue = formData.get("select")
    const checkboxValue = formData.get("checkbox")

    if (inputValue === '' || selectValue === '0') {
        alert('Please fill in the form')
        return;
    }

    console.log(inputValue, selectValue, checkboxValue)
}


// form.addEventListener("submit", onSubmit)
form.addEventListener("submit", onSubmit2)