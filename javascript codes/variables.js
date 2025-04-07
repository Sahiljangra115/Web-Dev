// Simple To-Do List Application

// Selecting elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage
window.onload = function() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTaskToDOM(task.text, task.completed));
};

// Function to add task
function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    addTaskToDOM(taskText, false);
    saveTask(taskText, false);
    taskInput.value = "";
}

// Function to add task to DOM
function addTaskToDOM(text, completed) {
    let li = document.createElement("li");
    li.textContent = text;

    if (completed) {
        li.classList.add("completed");
    }

    let completeButton = document.createElement("button");
    completeButton.textContent = "✔";
    completeButton.onclick = function() {
        li.classList.toggle("completed");
        updateTask(text);
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "✖";
    deleteButton.onclick = function() {
        li.remove();
        removeTask(text);
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

// Function to save task
function saveTask(text, completed) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text, completed });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to update task status
function updateTask(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(task => task.text === text ? { text, completed: !task.completed } : task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to remove task
function removeTask(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.text !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Event listener for adding tasks
addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});