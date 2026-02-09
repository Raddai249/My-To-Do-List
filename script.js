const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");

let count = 0;

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Écris une tâche !");
    return;
  }

  // créer li
  const li = document.createElement("li");

  // texte de la tâche
  const span = document.createElement("span");
  span.textContent = taskText;

 deleteBtn.onclick = () => {
  li.classList.add("remove");

  setTimeout(() => {
    li.remove();
    saveTasks();
    updateCounter();
  }, 300);
};


// Activer / désactiver le mode sombre
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Sauvegarde du thème
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    darkModeBtn.textContent = "☀️ Mode clair";
  } else {
    localStorage.setItem("theme", "light");
    darkModeBtn.textContent = "🌙 Mode sombre";
  }
});

// Charger le thème au rechargement
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  darkModeBtn.textContent = "☀️ Mode clair";
}

