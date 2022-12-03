let count = 0
let countdis = document.getElementById("count")
let lbl = document.getElementById("saved-count")
let addButton = document.getElementById("increment-btn")
let saveButton = document.getElementById("save-btn")

addButton.addEventListener("click", () =>{
    count++
    countdis.innerText = count
})

saveButton.addEventListener("click", () =>{
    lbl.innerText += " " + count + " - "
    count = 0
    countdis.innerText = count
})






