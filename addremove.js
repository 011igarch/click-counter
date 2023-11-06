"use strict"

const KEY_ENTER = 13

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("addStudent") 
  const nameInput = document.getElementById("nameInput") 
  const studentsList = document.getElementById("students-list") 
  const agbInput = document.getElementById("agbInput") 

  const liElements = document.querySelectorAll(".list-group-item") 

  const removeLiElement = (liElement) => {
    liElement.remove()
  }

  for (const liElement of liElements) {
    liElement.addEventListener("click", () => {
      removeLiElement(liElement)
    })
  }
  
  addStudentButton.addEventListener("click", (event) => {
    event.preventDefault()
    const text = nameInput.value

    if (agbInput.checked === false) {
      alert("Bitte AGB lesen!")
      return
    }

    if (text === "") {
      return
    }

    const strongElement = document.createElement("strong")
    strongElement.appendChild(document.createTextNode(text))

    const liElement = document.createElement("li")
    liElement.appendChild(strongElement)
    liElement.classList.add("list-group-item")

    liElement.addEventListener("click", () => {
      removeLiElement(liElement)
    })

    studentsList.appendChild(liElement)

    nameInput.value = ""
  })

  nameInput.addEventListener("keydown", (event) => {
    if (event.keyCode === KEY_ENTER) {
      alert("Enter wurde gedrückt")
    }
  })
})