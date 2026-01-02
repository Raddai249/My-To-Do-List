function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Écris une tâche !");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Marquer comme terminée
  li.addEventListener("click", () => {
    li.classList.toggle("done");
    saveTasks();
    updateCounter();
  });

  // Bouton supprimer
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
    updateCounter();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
  saveTasks();
  updateCounter();
}
function filterTasks(type) {
  const tasks = document.querySelectorAll("#taskList li");

  tasks.forEach(task => {
    task.style.display = ""; // reset

    if (type === "active" && task.classList.contains("done")) {
      task.style.display = "none";
    }

    if (type === "done" && !task.classList.contains("done")) {
      task.style.display = "none";
    }
  });
}
