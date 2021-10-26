const openBtn = document.querySelector(".js-open")
const modalBg = document.getElementById("modal-background")
const modalBox = document.getElementById("modal-box")
openBtn.addEventListener('click', function(event) {
    event.preventDefault()                     //This will make the button - if it's in a form or if it was a link instead of a button - to not do anything! It's going to tell the browser "hey don't do what it normally does we are going to do something different".
    modalBg.classList.add("active")
    modalBox.classList.add("active")
})

const closeBtns = document.querySelectorAll(".js-close")
closeBtns.forEach(node => {                             //Loop through each of these close buttons (close, accept). 
    node.addEventListener('click', function(e) {
        e.preventDefault()
        modalBg.classList.remove("active")              //Adding the active class so when we click they will show up!
        modalBox.classList.remove("active")
    })
})
