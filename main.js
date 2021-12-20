const formElement = document.querySelector(".add-student-form")
const studentListElement = document.querySelector(".students-list")



formElement.addEventListener("submit", event => {
    event.preventDefault();


    const nameElement = document.querySelector("#nameInput")
    const LastnameElement = document.querySelector("#LastNameInput")
    const selectElement = document.querySelector("#interest")


    const newLiElement = document.createElement("Li")
    const newCardElement = document.createElement("div")
    const newCardBodyElement = document.createElement("div")
    const newWrapperElement = document.createElement("div")
    const newSupWrapperElement = document.createElement("div")
    const newPElement = document.createElement("p")
    const newIterestElement = document.createElement("p")
    const newDeleteButtonElement = document.createElement("button")


    newCardElement.classList.add("card")
    newCardBodyElement.classList.add("card-body")
    newWrapperElement.classList.add("justify-content-between")
    newWrapperElement.classList.add("d-flex")
    newPElement.classList.add("h2")
    newIterestElement.classList.add("h4")
    newDeleteButtonElement.classList.add("btn")
    newDeleteButtonElement.classList.add("btn-danger")


    newSupWrapperElement.appendChild(newPElement)
    newSupWrapperElement.appendChild(newIterestElement)

    newWrapperElement.appendChild(newSupWrapperElement)
    newWrapperElement.appendChild(newDeleteButtonElement)

    newCardBodyElement.appendChild(newWrapperElement)
    newCardElement.appendChild(newCardBodyElement)
    newLiElement.appendChild(newCardElement)


    studentListElement.prepend(newLiElement)


    newPElement.textContent = nameElement + " " + LastnameElement.value
    newIterestElement.textContent = selectElement.value
})
