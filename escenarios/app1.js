const perro = document.querySelector('.perro');
const contador = document.querySelector('.contador');
const mentita = document.querySelector('.mentita');
const cont = document.querySelector('.cont');

let count = 0;
let puntos = 0;

perro.addEventListener('click', () => {
    perro.classList.add('MoPerro');
    count++;
    contador.textContent = count;
});

perro.addEventListener('animationend', () => {
    perro.classList.remove('MoPerro');
    
})

mentita.addEventListener('click', () => {
    mentita.classList.add('MoMentita');
    puntos++;
    cont.textContent = puntos;
})

mentita.addEventListener('animationend', () => {
    mentita.classList.remove('MoMentita');
});

const logo = document.querySelector('.logo');
const numero_contador_2 = document.querySelector('.numero_contador_2');

let contador2 = 0;
logo.addEventListener('click', () => {
    contador2++;
    numero_contador_2.textContent = contador2;
});