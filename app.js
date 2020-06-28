// call all task form localStorage for show 1st
showNotes()

// if user add a note, add it localStorage
// add event lisente in #add-btn for gating text form #add-text
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function () {
    let addTextHeading = document.getElementById("add-text-heading")
    let addText = document.getElementById('add-text')

    // gating value form localStorage
    let notes = localStorage.getItem("notes")
    let noteObj = []
    if (notes == null) {
        noteObj = []
    }
    else {
        noteObj = JSON.parse(notes)
    }
    let myObj = {
        title: addTextHeading.value,
        value: addText.value
    }

    noteObj.push(myObj)
    localStorage.setItem("notes", JSON.stringify(noteObj))
    addTextHeading.value = ""
    addText.value = ""
    showNotes()
})

// function that get data form localStorage and show note carts
function showNotes() {
    let notes = localStorage.getItem("notes")
    let noteObj = []
    if (notes == null) {
        noteObj = []
    }
    else {
        noteObj = JSON.parse(notes)
    }
    html = ''
    noteObj.forEach((note, index) => {
        html += ` 
        <div  class="card cart m-2" style="width: 22.48rem;">
            <div class="card-body cart">
                <h4 class="card-title ">${note.title}</h4>
                <hr>
                <p class="card-text">${note.value}</p>
                <a id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete</a>
            </div>
        </div>`

    });
    //  getting the cart container and update it's HTML
    const noteContainer = document.getElementById("note-container")
    if (noteObj.length != 0) {
        noteContainer.innerHTML = html
    }
    else {
        noteContainer.innerHTML = `&nbsp &nbsp No Task added. Please try Add Note button`
    }
}

// delete test cart by clicking delete button 

function deleteNote(id) {
    let notes = localStorage.getItem("notes")
    let noteObj = [];
    if (notes == null) {
        noteObj = []
    }
    else {
        noteObj = JSON.parse(notes)
    }
    noteObj.splice(id, 1)

    localStorage.setItem("notes", JSON.stringify(noteObj))
    showNotes()
}

// search cart by search 

let searchText = document.getElementById("searchText");
searchText.addEventListener("input", function () {
    let inputText = searchText.value.toLowerCase()
    let carts = document.getElementsByClassName("cart")

    Array.from(carts).forEach(cart => {
        let cartText = cart.querySelectorAll("P")[0]
        cartText = cartText.innerText;
        // console.log(cartText);
        if (cartText.includes(inputText)) {
            cart.style.display = "block"
        }
        else {
            cart.style.display = "none"
        }
    });

})


