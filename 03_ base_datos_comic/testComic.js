const infoComic = document.querySelector(".info_comic");
const cardPersonajes = document.querySelector(".card_personajes");
const personaje = document.querySelector(".personaje");

infoComic.innerHTML = `
  <small>2025</small>
  <h1>Titulo del comic</h1>
  <p>Sinopsis</p>
  <p>Genero: Terror</p>
`;
comic.personajes.forEach((char) => {
  console.log(char.nombre);
  document.body.innerHTML +=<img src="${char.imagen}" width="200"/>;
});

// crear Elemelentos dinamicamente con javascript

const div = document.createElement("div");
div.classList.add("personaje");
div.innerHTML = `
  <img src="${char.imagen}" alt="" >
  <p>${char.nombre}</p>
  <p>${char.descripcion}</p>
`
console.log(div);