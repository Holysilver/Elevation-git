const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const changeColor = function() {
    box.style.backgroundColor = "#8e44ad"
}


const list = document.getElementById("myList")
const addItem = function() {
    const newItem = document.createElement("li")
    newItem.innerHTML = "A new one!"
    list.appendChild(newItem)
}

const box2 = document.getElementById("box2")
box2.onclick = function(){
    box2.innerHTML = "clicked"
}

box2.onmouseleave = function(){
    box2.innerHTML = "Click me!"
}

const box3 = document.createElement("div") // dynamically creating an element

box3.setAttribute("class", "box")
box3.onclick = function(){       // adding an event to the new element
    box3.innerHTML = "I'm alive!"
}

document.getElementById("some-id").appendChild(box3) // now the box will be on the page, and will react to a click!