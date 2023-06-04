function saveTaskList() {
    var taskList = document.getElementById("taskList").innerHTML;
    localStorage.setItem("taskList", taskList);
  }
  
  function loadTaskList() {
    var taskList = localStorage.getItem("taskList");
    if (taskList) {
      document.getElementById("taskList").innerHTML = taskList;
      attachDeleteListeners();
    }
  }
 
  window.addEventListener("load", loadTaskList);
  
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
  
  function deleteTask(li) {
    li.remove();
    saveTaskList();
  }
 
  function attachDeleteListeners() {
    var deleteBtns = document.getElementsByClassName("delete-btn");
    for (var i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].onclick = function() {
        deleteTask(this.parentElement);
      };
    }
  }
  
  
