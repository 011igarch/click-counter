"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const buttonKlick = document.getElementById("button-click")
  const buttonReset = document.getElementById("button-reset")

  // Variante 1 unschöne
  // const counterHeading = document.getElementById("counter-heading")
  
  // buttonKlick.addEventListener("click", () => {
    //   const currentCounter = parseInt(counterHeading.innerText.split(": ")[1], 10)
    
    //   counterHeading.innerText = `Anzahl Klicks: ${currentCounter + 1}`
    // })

    // Variante 2 gut
    // const counterNumber = document.getElementById("counter-number")
    
    // buttonKlick.addEventListener("click", () => {
    //   const currentCounter = parseInt(counterNumber.innerText, 10)
      
    //   counterNumber.innerText = currentCounter + 1
    // })
    
    // buttonReset.addEventListener("click", () => {
    //   counterNumber.innerText = "0"
    // })
    
    // Variante 3 sehr elegant -> da Variable let als Arbeitsspeicher dient
    const counterNumber = document.getElementById("counter-number")

    let currentCounter = parseInt(counterNumber.innerText, 10)

    buttonKlick.addEventListener("click", () => {
      currentCounter++
      counterNumber.innerText = currentCounter
    })

    buttonReset.addEventListener("click", () => {
      currentCounter = 0
      counterNumber.innerText = currentCounter
    })
})