 comic.personajes.array.forEach(char => {
   const div = document.createElement('div');
   div.classList.add("card-personaje");
    div.innerHTML = `
    <a href="./personajes.html">
<h3>${char.nombre}</h3>
<p><img src="${char.foto}" alt="${char.nombre}"></p>
<p>strong>rol:</strong> ${char.rol}</p>
<p>char.descripcion}</p>
</a>
    `

   gridContainer.appendChild(div);







 });