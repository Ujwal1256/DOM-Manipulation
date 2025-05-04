// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const showAllTasksButton = document.getElementById('showAllTasks');
const showCompletedTasksButton = document.getElementById('showCompletedTasks');
const showIncompleteTasksButton = document.getElementById('showIncompleteTasks');

// Array to store tasks
let tasks = [];

// Add a new task when the button is clicked
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const newTask = { text: taskText, completed: false };
    tasks.push(newTask);
    renderTasks(tasks);
    taskInput.value = ''; // Clear the input field
  }
});

// Function to render tasks to the DOM
function renderTasks(taskArray) {
  // Clear the current task list
  taskList.innerHTML = '';

  // Use map() to create a list item for each task
  taskArray.map((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';

    // Task content with dynamic class for completed tasks
    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <button onclick="toggleTask(${index})">Toggle</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    // Append the task to the DOM
    taskList.appendChild(li);
  });
}

// Toggle the completed status of a task
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks(tasks);
}

// Delete a task from the list
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks(tasks);
}

// Filter and display completed tasks
showCompletedTasksButton.addEventListener('click', () => {
  const completedTasks = tasks.filter(task => task.completed);
  renderTasks(completedTasks);
});

// Filter and display incomplete tasks
showIncompleteTasksButton.addEventListener('click', () => {
  const incompleteTasks = tasks.filter(task => !task.completed);
  renderTasks(incompleteTasks);
});

// Display all tasks
showAllTasksButton.addEventListener('click', () => {
  renderTasks(tasks);
});
