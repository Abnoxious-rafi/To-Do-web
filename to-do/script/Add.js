const inputbox = document.getElementById("input_box");
const contain = document.getElementById("list_container");

function addtask() {
    if (inputbox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        contain.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}

contain.addEventListener("click", function (s) {
    if (s.target.tagName === "LI") { s.target.classList.toggle("checked"); savedata(); }
    else if (s.target.tagName === "SPAN") { s.target.parentElement.remove(); savedata(); }
}, false);

function savedata() {
    localStorage.setItem("data", contain.innerHTML);
}

function showdata() {
    contain.innerHTML = localStorage.getElementById("data");
}
showdata();