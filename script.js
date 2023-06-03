// Function to save the task list in local storage
/*function saveTaskList() {
    var taskList = document.getElementById("taskList").innerHTML;
    localStorage.setItem("taskList", taskList);
  }
  
  // Function to load the task list from local storage
  function loadTaskList() {
    var taskList = localStorage.getItem("taskList");
    if (taskList) {
      document.getElementById("taskList").innerHTML = taskList;
      attachDeleteListeners();
    }
  }
  
  // Add event listener to the window to load the task list on page load
  window.addEventListener("load", loadTaskList);
  
  // Add task to the list
  // Add task to the list
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
      alert("Please enter a task.");
      return;
    }
  
    var li = document.createElement("li");
    
    var serialNumber = taskList.childElementCount + 1; // Get the serial number
    var serialNumberSpan = document.createElement("span");
    
    serialNumberSpan.innerText = serialNumber + ".";

    li.appendChild(serialNumberSpan);
    
    var taskSpan = document.createElement("span");
    taskSpan.innerText = taskInput.value;
    li.appendChild(taskSpan);
  
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
      deleteTask(li);
    };
    li.appendChild(deleteBtn);
  
    taskList.appendChild(li);
  
    saveTaskList();
  
    taskInput.value = "";
    
  }
  
  
  // Delete task from the list
  // Delete task from the list
function deleteTask(li) {
    var taskList = document.getElementById("taskList");
    var taskItems = taskList.getElementsByTagName("li");
    li.remove();
    saveTaskList();
  
    // Update serial numbers after deletion
    for (var i = 0; i < taskItems.length; i++) {
      var taskItem = taskItems[i];
      var serialNumberSpan = taskItem.querySelector(".serial-number");
      serialNumberSpan.innerText = i + 1 + ".";
    }
  }
  
  
  // Attach delete listeners to existing tasks
  function attachDeleteListeners() {
    var deleteBtns = document.getElementsByClassName("delete-btn");
    for (var i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].onclick = function() {
        deleteTask(this.parentElement);
      };
    }
  }
  */

// Function to save the task list in local storage
//localStorage.removeItem("taskList");
function saveTaskList() {
    var taskList = document.getElementById("taskList").innerHTML;
    localStorage.setItem("taskList", taskList);
  }
  
  // Function to load the task list from local storage
  function loadTaskList() {
    var taskList = localStorage.getItem("taskList");
    if (taskList) {
      document.getElementById("taskList").innerHTML = taskList;
      attachDeleteListeners();
    }
  }
  
  // Add event listener to the window to load the task list on page load
  window.addEventListener("load", loadTaskList);
  
  // Add task to the list
  function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
      alert("Please enter a task.");
      return;
    }
  
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.innerText = taskInput.value;
    li.appendChild(span);
  
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
      deleteTask(li);
    };
    li.appendChild(deleteBtn);
  
    taskList.appendChild(li);
  
    saveTaskList();
  
    taskInput.value = "";
  }
  
  // Delete task from the list
  function deleteTask(li) {
    li.remove();
    saveTaskList();
  }
  
  // Attach delete listeners to existing tasks
  function attachDeleteListeners() {
    var deleteBtns = document.getElementsByClassName("delete-btn");
    for (var i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].onclick = function() {
        deleteTask(this.parentElement);
      };
    }
  }
  
  