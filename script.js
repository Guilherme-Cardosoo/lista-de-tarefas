function addTask() {
    const input = document.getElementById("task_input");
    const taskText = input.value.trim();
    if (taskText === "") return;

    const task_list = document.getElementById("task_list");
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        span.classlist.toggle("completed", checkbox.checked);
    });

    const span = document.createElement("span");
    span.textContent = taskText;

    const actions = document.createElement("div");
    actions.className = "actions";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => li.remove();

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = () => {
        const newText = prompt("Edit task:", span.textContent);
        if (newText !== null) span.textContent = newText.trim();
    };

    actions.appendChild(deleteBtn);
    actions.appendChild(editBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(actions);
    task_list.appendChild(li);
    input.value = "";
}