

/*

// Minimal Button 01

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListner("click", function() {
    console.log("Button clicked from addEventListener")
})


// Minimal Button 02

let inputButton = document.getElementById("input-btn");

inputButton.addEventListener( "click", saveLead() )

function saveLead() {
    console.log("Button clicked!")
}

*/


// Array Collector

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = " ";
    renderLeads()
})


/*
for (let i = 0; i < myLeads.length; i++) {
    ulEl.textContent += myLeads[i] + " "
}



for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // create element
    // set text content
    // append to ul
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
}



for (let i=0; i < myLeads.length; i++) {

    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)

} 

*/

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>"
    }
     ulEl.innerHTML = listItems
}

