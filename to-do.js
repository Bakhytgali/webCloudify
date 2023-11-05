
const todoList = document.querySelector(".todo-list");
const btnSuccess = document.querySelector(".btn-success");
const textField = document.querySelector("#textField");
const btnDanger = document.querySelector(".btn-danger");

btnSuccess.addEventListener("click", () => {
    if (textField.value !== '') {
        const listItem = document.createElement("li");
        listItem.textContent = textField.value;
        todoList.appendChild(listItem);
        textField.value = '';
    }
});

btnDanger.addEventListener("click", () => {
    const inputValue = textField.value;
    const items = todoList.querySelectorAll("li");

    items.forEach(item => {
        if (item.textContent === inputValue) {
            todoList.removeChild(item);
        }
    });
});