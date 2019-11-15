let respuesta1 = document.getElementById ('respuesta1');
/* let calificar1 = document.getElementById('calificar1'); */
/* calificacion */
/* let imgbien = document.getElementById('correcto');
let imgmal = document.getElementById('mal'); */

let enviar1 = document.getElementById ('enviar1');

let validar1 = document.getElementById ('validar1');

const calificar1 = () => {

    let valorRespuesta = respuesta1.value

    let respuestaCorrecta = "8";
   

    if (valorRespuesta === respuestaCorrecta) {
        validar1.innerHTML = "Bien!";
    } else {
        validar1.innerHTML = "Sigue intentando";
    }

    
    
}
enviar1.addEventListener('click', calificar1)

let respuesta2 = document.getElementById ('respuesta2');
let enviar2 = document.getElementById ('enviar2');
let validar2 = document.getElementById ('validar2');

const calificar2 = () => {

    let valorRespuesta = respuesta2.value
   

    let respuestaCorrecta = "3";
   

    if (valorRespuesta === respuestaCorrecta) {
        validar2.innerHTML = "Bien!";
    } else {
        validar2.innerHTML = "Sigue intentando";
    }

    
    
}
enviar2.addEventListener('click', calificar2)

let respuesta3 = document.getElementById ('respuesta3');
let enviar3 = document.getElementById ('enviar3');
let validar3 = document.getElementById ('validar3');

const calificar3 = () => {

    let valorRespuesta = respuesta3.value
   

    let respuestaCorrecta = "2";
   

    if (valorRespuesta === respuestaCorrecta) {
        validar3.innerHTML = "Bien!"; 
    } else {
        validar3.innerHTML = "Sigue intentando";
    }

    
    
}
enviar3.addEventListener('click', calificar3)
