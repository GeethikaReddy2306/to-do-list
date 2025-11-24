const input = document.getElementById('input');
const todo = document.getElementById('todo');
const list = document.getElementById("list");
const removeAll = document.getElementById('removeAll');
todo.addEventListener("submit", (e) => {
    e.preventDefault();
        const task = input.value.trim();
    if (task === "") return;
const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.textContent = "Delete";
    li.textContent = task + " ";
    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = "";  // clear input box
// delete this single task
        delBtn.addEventListener("click", () => {
        li.remove();
    });
});
removeAll.addEventListener("click", () => {
    list.innerHTML = "";
});
