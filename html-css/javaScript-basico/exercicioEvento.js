const circulo = document.querySelector('.circulo');

function moveMouse(evento){
    circulo.style.top = evento.y + "px";
    circulo.style.left = evento.x + "px";
}

window.addEventListener('mousemove', moveMouse);