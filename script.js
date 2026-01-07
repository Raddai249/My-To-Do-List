// Charger les tâches au démarrage
document.addEventListener("DOMContentLoaded", loadTasks);

function addTask(text = null, done = false) {
  const input = document.getElementById("taskInput");
  const taskText = text ?? input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  if (done) li.classList.add("done");

  // Marquer comme terminée
  li.addEventListener("click", () => {
    li.classList.toggle("done");
    saveTasks();
    updateCounter();
  });

  // Bouton supprimer
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = (e) => {
    e.stopPropagation(); // empêche le toggle done
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

// Compteur
function updateCounter() {
  const tasks = document.querySelectorAll("#taskList li");
  const done = document.querySelectorAll("#taskList li.done");
  document.getElementById("counter").textContent =
    `${done.length} / ${tasks.length} tâche(s) terminée(s)`;
}

// Sauvegarde
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push({
      text: li.firstChild.textContent,
      done: li.classList.contains("done")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Chargement
function loadTasks() {
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  saved.forEach(task => addTask(task.text, task.done));
}
