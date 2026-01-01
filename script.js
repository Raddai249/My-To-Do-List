function filterTasks(type) {
  const tasks = document.querySelectorAll("#taskList li");

  tasks.forEach(task => {
    if (type === "all") task.style.display = "flex";
    if (type === "active")
      task.style.display = task.classList.contains("done") ? "none" : "flex";
    if (type === "done")
      task.style.display = task.classList.contains("done") ? "flex" : "none";
  });
}
