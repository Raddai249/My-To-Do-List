document.addEventListener("DOMContentLoaded", loadTasks);

function addTask(text = null, done = false) {
  const input = document.getElementById("taskInput");
  const taskText = text ?? input.value.trim();

  if (taskText === "") {
    alert("Écris une tâche !");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  if (done) span.classList.add("done");

  span.onclick = () => {
    span.classList.toggle("done");
    saveTasks();
    updateCounter();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
    updateCounter();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
  saveTasks();
  updateCounter();
}

function updateCounter() {
  const total = document.querySelectorAll("#taskList li").length;
  const done = document.querySelectorAll(".done").length;
  document.getElementById("counter").textContent =
    `${done} / ${total} tâche(s) terminée(s)`;
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push({
      text: li.querySelector("span").textContent,
      done: li.querySelector("span").classList.contains("done")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  saved.forEach(task => addTask(task.text, task.done));
}
