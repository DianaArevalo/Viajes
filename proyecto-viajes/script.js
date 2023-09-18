
import { barcelona, roma, paris, londres } from "./ciudades.js";


// Obtener los documentos del dom

let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio')

// Convert NodeList to an array
enlaces = Array.from(enlaces);

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // Remove 'active' class from all enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        // Add 'active' class to the clicked enlace
        this.classList.add('active');

        // Get the corresponding content
        let contenido = obtenerContenido(this.textContent);

        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;
    });
});

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
