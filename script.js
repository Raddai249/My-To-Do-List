document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const list = document.getElementById("taskList");
  const counter = document.getElementById("counter");
  const darkBtn = document.getElementById("darkModeBtn");

  function updateCounter() {
    counter.textContent = list.children.length + " tâche(s)";
  }

  function save() {
    localStorage.setItem("tasks", list.innerHTML);
  }

  function load() {
    list.innerHTML = localStorage.getItem("tasks") || "";
    updateCounter();
  }

  addBtn.onclick = () => {
    const text = input.value.trim();
    if (!text) {
      alert("Écris une tâche !");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${text}</span>
      <button class="del">❌</button>
    `;

    li.querySelector(".del").onclick = () => {
      li.classList.add("remove");
      setTimeout(() => {
        li.remove();
        updateCounter();
        save();
      }, 300);
    };

    list.appendChild(li);
    input.value = "";
    updateCounter();
    save();
  };

  // MODE SOMBRE
  darkBtn.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  };

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  load();
});
