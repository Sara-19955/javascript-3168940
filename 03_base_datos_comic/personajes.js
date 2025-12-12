// Configuración ESmodules 2611

import { comic } from "./bs.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// comparar el id con los personajes del comic
const personaje = comic.personajes.find((char) => char.id === id);
console.log("el id el personaje es " + id);

const personajes_container = document.querySelector(".personajes_container");

// condicional para devolver al inicio
if (!id || !personaje) {
  window.location.href = "index.html";
}

personajes_container.innerHTML = `
  <div class="card ${personaje.clase || ""}">
    <button class="salir-btn">X</button>

    <img src="${personaje.imagen}" class="card-img">
    <h2 class="card-title">${personaje.nombre}</h2>
    <p class="card-desc">${personaje.descripcion}</p>
    <p class="card-subtext">${personaje.subtexto}</p>

    <div class="nav-buttons">
      <button class="back-btn">← Atrás</button>
      <button class="next-btn">Siguiente →</button>
    </div>
  </div>
`;// BOTÓN SALIR
document.querySelector(".salir-btn").addEventListener("click", () => {
  window.location.href = "./index.html";
});

// CLIC FUERA DE LA CARD → SALIR
document.addEventListener("click", (e) => {
  const card = document.querySelector(".card");
  
  // Si el clic NO está dentro de la card ni es el botón salir
  if (!card.contains(e.target) && !e.target.classList.contains("salir-btn")) {
    window.location.href = "./index.html";
  }
});

// BOTÓN ATRÁS
document.querySelector(".back-btn").addEventListener("click", () => {
  const prevId = id - 1;

  if (prevId >= 1) {
    window.location.search = `?id=${prevId}`;
  }
});

// BOTÓN SIGUIENTE
document.querySelector(".next-btn").addEventListener("click", () => {
  const nextId = id + 1;

  if (nextId <= comic.personajes.length) {
    window.location.search = `?id=${nextId}`;
  }
});
