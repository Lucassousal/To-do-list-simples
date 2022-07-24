const form = document.getElementById('adicionar');
const tasklist = document.getElementById('lista');

form.onsubmit = function (e){
    e.preventDefault();
    const inputfild = document.getElementById('texto');
    addTask(inputfild.value);
    form.reset();
};

function addTask(description){
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement ('label')
    const taskDescripionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescripionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    tasklist.appendChild(taskContainer);

};
