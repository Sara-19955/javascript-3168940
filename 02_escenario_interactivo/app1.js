// Selectores de Elementos
const perro = document.querySelector('.perro');
const contadorPerro = document.querySelector('.contador');

const mentita = document.querySelector('.mentita');
const contadorMentita = document.querySelector('.cont');

const logo = document.querySelector('.logo');
const contadorLogo = document.querySelector('.numero_contador_2');


// Puntaje
let scorePerro = 0;
let scoreMentita = 0;
let scoreLogo = 0;

// Manejar Clic
function manejarClic(item, contadorElement) {
    const animClass = item.classList.contains('perro') ? 'MoPerro' : 
                      item.classList.contains('mentita') ? 'MoMentita' : 
                      'salida';

    item.classList.add(animClass);

    setTimeout(function() {
        item.style.display = 'none';

        // Actualizar el puntaje
        if (contadorElement === contadorPerro) {
            scorePerro += 1;
            contadorElement.textContent = scorePerro;
        } else if (contadorElement === contadorMentita) {
            scoreMentita += 1;
            contadorElement.textContent = scoreMentita;
        } else if (contadorElement === contadorLogo) {
            scoreLogo += 1;
            contadorElement.textContent = scoreLogo;
        }

        reaparecerItem(item, animClass);
    }, 500);
}

// Reaparecer en posición aleatoria
function reaparecerItem(item, animClass) {
    setTimeout(function() {
        // Coordenadas aleatorias (ajustadas al rango del primer código)
        const top = Math.floor(Math.random() * 300) + 100;
        const left = Math.floor(Math.random() * 600) + 50;

        item.style.top = top + 'px';
        item.style.left = left + 'px';
        item.style.display = 'block';
        item.classList.remove(animClass);
        
        // Remover clases originales si existen (MoPerro/MoMentita)
        item.classList.remove('MoPerro');
        item.classList.remove('MoMentita');

    }, 800);
}

// Posicionar Inicial
function posicionarInicial(items) {
    // Tu código original solo aplicaba esto a arrays, lo envolvemos en un array para reutilizar la función
    const elements = Array.isArray(items) ? items : [items];

    elements.forEach(function(item) {
        const top = Math.floor(Math.random() * 300) + 100;
        const left = Math.floor(Math.random() * 600) + 50;
        item.style.top = top + 'px';
        item.style.left = left + 'px';
        item.style.display = 'block';
    });
}

// Event Listeners

// Perro
perro.addEventListener('click', function() {
    manejarClic(perro, contadorPerro);
    // cutFruit.play(); // Descomentar si usas sonido
});

// Mentita
mentita.addEventListener('click', function() {
    manejarClic(mentita, contadorMentita);
    // coinSound.play(); // Descomentar si usas sonido
});

// Logo
logo.addEventListener('click', function() {
    manejarClic(logo, contadorLogo);
    // fogoSound.play(); // Descomentar si usas sonido
});

// Inicialización de Posiciones
posicionarInicial(perro);
posicionarInicial(mentita);
posicionarInicial(logo);