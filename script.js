document.addEventListener("DOMContentLoaded",() => {
    let addButton = document.querySelector("#add");
    let addInput = document.querySelector("#item");

    addButton.addEventListener("click",function () {
        let newItem = document.getElementById("item").value;
        if (newItem) {
            addItemTodo(newItem);
            document.getElementById("item").value = "";
        }
    });

    addInput.addEventListener("keypress",function (e) {
        if (e.keyCode === 13) {
            let newItem = document.getElementById("item").value;
            if (newItem) {
                addItemTodo(newItem);
                document.getElementById("item").value = "";
            }
        }
    });
});


function addItemTodo(text) {
    let list = document.getElementById("todo");
    let item = document.createElement("li");
    let spanText = document.createElement("span");
    spanText.classList.add("decoration");
    spanText.innerHTML = text;

    let buttons = document.createElement("div");
    buttons.classList.add("buttons");

    let complete = document.createElement("button");
    complete.classList.add("complete");
    complete.innerHTML = "Completed";
    complete.addEventListener("click",completeItem);

    let remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML = "Remove";
    remove.addEventListener("click",removeItem);

    buttons.appendChild(complete);
    buttons.appendChild(remove);
    item.appendChild(spanText);
    item.appendChild(buttons);
    

    list.insertBefore(item, list.childNodes[0]);    
}

function completeItem () {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
    let text = document.querySelector(".decoration");
    let complete = this;

    if (complete.innerHTML === "Completed") {
        complete.innerHTML = "Do it";
        text.style.textDecoration = "line-through";
    }
    else {
        complete.innerHTML = "Completed";
        text.style.textDecoration = "none";
    }

    let target;
    if (id === 'todo') {
        target = document.getElementById("completed");
    }
    else {
        target = document.getElementById("todo");
    }

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

function removeItem () {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    parent.removeChild(item);
}