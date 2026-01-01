const addBtn = document.getElementById("addBtn");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const darkBtn = document.getElementById("darkModeBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Afficher les tâches au chargement
tasks.forEach(task => createTask(task.text, task.done));

// Ajouter tâche
addBtn.addEventListener("click", () => {
    if (input.value.trim() === "") {
        alert("Écris une tâche !");
        return;
    }

    createTask(input.value, false);
    tasks.push({ text: input.value, done: false });
    saveTasks();
    input.value = "";
});

// Créer une tâche
function createTask(text, done) {
    const li = document.createElement("li");
    li.textContent = text;

    if (done) li.classList.add("done");

    // Marquer comme fait
    li.addEventListener("click", () => {
        li.classList.toggle("done");
        updateTasks();
    });

    // Supprimer
    const del = document.createElement("button");
    del.textContent = "❌";
    del.className = "delete";
    del.onclick = () => {
        li.remove();
        updateTasks();
    };

    li.appendChild(del);
    taskList.appendChild(li);
}

// Sauvegarder
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Mettre à jour après clic/suppression
function updateTasks() {
    tasks = [];
    document.querySelectorAll("li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent,
            done: li.classList.contains("done")
        });
    });
    saveTasks();
}

// 🌙 Mode sombre
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
