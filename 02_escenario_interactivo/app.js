const animables = document.querySelectorAll('.dib, .gaz'); 
const targets = document.querySelectorAll('.poste-deluz, .cuervo-negro, .basura-cubo, .zim-zim');
const zimTarget = document.querySelector('.zim-zim');

const counters = {
    'poste-deluz': { count: 0, element: document.querySelector('.count-poste') },
    'cuervo-negro': { count: 0, element: document.querySelector('.count-cuervo') },
    'basura-cubo': { count: 0, element: document.querySelector('.count-basura') },
    'zim-zim': { count: 0, element: document.querySelector('.count-invaderzim') }
};

let ZIM_TARGET_TOP = 0; 
let ZIM_TARGET_LEFT = 0; 
const ANIMABLE_WIDTH = 70; 

function calculateZimPosition() {
    const zimRect = zimTarget.getBoundingClientRect();
    const containerRect = document.querySelector('.game-container').getBoundingClientRect();
    
    ZIM_TARGET_TOP = (zimRect.top - containerRect.top) - 10;
    ZIM_TARGET_LEFT = (zimRect.left - containerRect.left) + (zimRect.width / 2) - (ANIMABLE_WIDTH / 2);
}

window.addEventListener('load', calculateZimPosition);
window.addEventListener('resize', calculateZimPosition); 

function setAnimablePosition(top, left) {
    animables.forEach(animable => {
        animable.style.left = `${left}px`;
        animable.style.top = `${top}px`;
        animable.style.right = 'auto';
        animable.style.bottom = 'auto';
    });
}

function moveAnimables(target) {
    let newTop;
    let newLeft;

    if (target.classList.contains('zim-zim')) {
        newTop = ZIM_TARGET_TOP;
        newLeft = ZIM_TARGET_LEFT;
    } else {
        newTop = target.offsetTop;
        newLeft = target.offsetLeft;
    }
    
    setAnimablePosition(newTop, newLeft);
}

function updateCounter(target) {
    const targetKey = Object.keys(counters).find(key => target.classList.contains(key));

    if (targetKey && counters[targetKey]) {
        counters[targetKey].count += 1;
        counters[targetKey].element.textContent = counters[targetKey].count;
    }
}

targets.forEach(target => {
    target.addEventListener('click', () => {
        moveAnimables(target);
        updateCounter(target);
    });
});