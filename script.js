const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    let inputValue = inputBox.value.trim();

    if (inputValue === '') {
        alert("Deberías escribir algo...")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");

        let img = document.createElement("img");
        img.src = "/tache.svg";
        img.width = 25;
        img.height = 25;

        span.appendChild(img);

        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN" || e.target.tagName === "IMG") {
        let li = e.target.closest("li");
        if (li) {
            listContainer.removeChild(li);
            saveData();
        }
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();