const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete-btn");


addBtn.addEventListener("click", function () {
  const task = todoInput.value.trim();
  if (task !== "") {
    const todoItem = createTodoItem(task);
    todoList.appendChild(todoItem);
    todoInput.value = "";
  }
});

deleteBtn.addEventListener("click", function () {
  const checkedItems = todoList.querySelectorAll('.todo-item input[type="checkbox"]:checked');
  checkedItems.forEach(function (item) {
    const todoItem = item.parentNode;
    todoItem.remove();
  });
});

function createTodoItem(task) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const label = document.createElement("label");
  label.textContent = task;
  todoItem.appendChild(checkbox);
  todoItem.appendChild(label);
  return todoItem;
}

