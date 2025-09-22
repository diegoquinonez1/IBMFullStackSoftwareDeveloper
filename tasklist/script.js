function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('todoList');

    if (taskInput.value.trim() !== '') {
        const listItem = document.createElement('li');
        const textItem = document.createElement('span');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');

        textItem.textContent = taskInput.value;

        listItem.appendChild(textItem);

        editButton.textContent = 'Edit';
        editButton.onclick = EditTask.bind(null, listItem);
        listItem.appendChild(editButton);

        deleteButton.textContent = 'Delete';
        deleteButton.onclick = DeleteTask.bind(null, listItem);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function clearTasks() {
    const taskList = document.getElementById('todoList');
    taskList.innerHTML = '';
}

function EditTask(item) {
    const newTask = prompt('Edit your task:', item.firstChild.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        item.firstChild.textContent = newTask;
    }
}

function DeleteTask(item) {
    const taskList = document.getElementById('todoList');
    taskList.removeChild(item);
}