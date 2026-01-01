function updateCounter() {
  const tasks = document.querySelectorAll("#taskList li");
  const done = document.querySelectorAll("#taskList li.done");
  document.getElementById("counter").textContent =
    (tasks.length - done.length) + " tâche(s) restante(s)";
}
