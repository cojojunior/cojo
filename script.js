/* Function to Add Task to Saved List */
function addTask() {
    let taskInput = document.getElementById("taskInput").value.trim();
    let taskDate = document.getElementById("taskDate").value;
    let taskLocation = document.getElementById("taskLocation").value.trim();
    let taskDescription = document.getElementById("taskDescription").value.trim();

    if (taskInput === "" || taskDate === "" || taskLocation === "") {
        alert("Please fill in all required fields.");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `<strong>${taskInput}, ${taskDate}</strong> ,${taskLocation}` +
                   (taskDescription ? `<p>${taskDescription}</p>` : "") +
                   `<button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
    document.getElementById("savedTaskList").appendChild(li);

    // Clear input fields after adding task
    clearInputs();
}

/* Function to Move Task to Deleted Section */
function deleteTask(button) {
    let taskItem = button.parentElement;
    document.getElementById("deletedTaskList").appendChild(taskItem);
    button.remove();
    retractSections();
}

/* Function to Toggle Saved Tasks Section */
function toggleSavedTasks() {
    let savedTasks = document.getElementById("savedTasks");
    savedTasks.classList.toggle("hidden");
}

/* Function to Toggle Deleted Tasks Section */
function toggleDeletedTasks() {
    let deletedTasks = document.getElementById("deletedTasks");
    deletedTasks.classList.toggle("hidden");
}

/* Function to Clear Deleted Tasks */
function clearDeletedTasks() {
    document.getElementById("deletedTaskList").innerHTML = "";
    retractSections();
}

/* Function to Clear Inputs */
function clearInputs() {
    document.getElementById("taskInput").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("taskLocation").value = "";
    document.getElementById("taskDescription").value = "";
}

/* Function to Hide Saved and Deleted Sections */
function retractSections() {
    document.getElementById("savedTasks").classList.add("hidden");
    document.getElementById("deletedTasks").classList.add("hidden");
}
