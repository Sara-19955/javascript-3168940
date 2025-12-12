// ==============================
// Importamos la base de datos del proyecto
// (Aquí vienen los personajes, capítulos, banners, etc.)
// ==============================
import { comic } from "./bs.js";


// ==============================
// 1. MOSTRAR INFORMACIÓN DEL COMIC EN EL INICIO
// Aquí buscamos el contenedor donde va la sinopsis
// y lo llenamos automáticamente con los datos del comic
// ==============================
const info_comic = document.querySelector("#inicio");

info_comic.innerHTML = `
    <div class="sinopsis">
        <h1>${comic.nombreComic}</h1>
        <p>${comic.sinopsis}</p>
        <p class="genero">${comic.genero}</p>
        <small>${comic.year}</small>
    </div>
`;


// ==============================
// 2. CONTENEDORES DONDE VAN LOS PERSONAJES Y LOS CAPÍTULOS
// Estos divs se llenan automáticamente mediante JS
// ==============================
const grupo_personajes = document.querySelector(".grupo_personajes");
const capitulos = document.querySelector(".capitulos");


// ==============================
// 3. FUNCIÓN PARA CREAR UNA CARD DE PERSONAJE
// Cada personaje del archivo bs.js se convierte en una card
// que lleva a personajes.html?id=ID
// ==============================
function crear_card_personaje(char) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <a href="./personajes.html?id=${char.id}">
      <h3>${char.nombre}</h3>

      <!-- Contenedor de la imagen del personaje -->
      <div class="container_img">
        <img src="${char.imagen}" alt="${char.nombre}" class="img_personajes">
      </div>

      <p class="parrafo_cards">${char.descripcion}</p>
      <p class="subtext">${char.subtexto}</p>
    </a>
  `;

  return card;
}


// ==============================
// 4. FUNCIÓN PARA RENDERIZAR TODOS LOS PERSONAJES
// Recorremos la lista y agregamos cada tarjeta al contenedor
// ==============================
function renderpersonajes(lista, contenedor) {
  lista.forEach((char) => {
    const card = crear_card_personaje(char);
    contenedor.appendChild(card);
  });
}

// Aquí mostramos los personajes en pantalla
renderpersonajes(comic.personajes, grupo_personajes);


// ==============================
// 5. FUNCIÓN PARA CREAR UNA CARD DE CAPÍTULO
// Esto genera cada capítulo con su portada y resumen
// ==============================
function crear_cpitulos(char) {
  const cap = document.createElement("div");
  cap.classList.add("capitulo");

  cap.innerHTML = `
    <a href="./capitulos.html?id=${char.id}">
      <h2>${char.nombre}</h2>

      <!-- Imagen del capítulo -->
      <img src="${char.portada}" alt="${char.portada}" class="img_caps">

      <p class="resumen">${char.descripcion}</p>
    </a>
  `;

  return cap;
}


// ==============================
// 6. FUNCIÓN PARA RENDERIZAR TODOS LOS CAPÍTULOS
// ==============================
function render_caps(lista, contendor) {
  lista.forEach((char) => {
    const cap = crear_cpitulos(char);
    contendor.appendChild(cap);
  });
}

// Aquí mostramos todos los capítulos
render_caps(comic.capitulos, capitulos);


// ==============================
// 7. BANNER CAMBIANTE (SLIDER AUTOMÁTICO)
// Cambia la imagen del banner cada 5 segundos
// con efecto de desvanecimiento (fade)
// ==============================
const header = document.getElementById("header");
let indice = 0;

setInterval(() => {
  // Activa el fade-out (desaparecer)
  header.classList.add("fade-out");

  setTimeout(() => {
    // Cambia a la siguiente imagen del array "banners"
    indice = (indice + 1) % comic.banners.length;
    header.style.backgroundImage = `url("${comic.banners[indice]}")`;

    // Quita el fade-out para hacer fade-in (aparecer)
    header.classList.remove("fade-out");
  }, 250); // Tiempo que tarda la transición
}, 5000); // Cada 5 segundos cambia
