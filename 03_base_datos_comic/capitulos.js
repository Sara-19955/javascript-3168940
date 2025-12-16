// Configuración ESmodules 2611

import { comic } from "./bs.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// Comparar el id con los capítulos del comic
const capitulo = comic.capitulos.find((cap) => cap.id === id);
console.log("El id del capítulo es " + id);

const capitulos_container = document.querySelector(".capitulos_container");

if (!id || !capitulo) {
  window.location.href = "index.html";
}
// Renderizar la card con las clases correctas
capitulos_container.innerHTML = `
  <div class="card">
   <button class="salir-btn">X</button>
    <img src="${capitulo.portada}" alt="${capitulo.nombre}" class="card-img">

    <h2 class="card-title">${capitulo.nombre}</h2>

    <p class="card-desc">${capitulo.descripcion}</p>

    <p class="card-subtext">${capitulo.subtexto}</p>
        <div class="nav-buttons">
      <button class="back-btn">← Atrás</button>
      <button class="next-btn">Siguiente →</button>
    </div>
  </div>

`
// BOTÓN SALIR
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
