let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');

let bien = document.getElementById('bien');
let mal = document.getElementById('mal');

const showbien = () => {
    document.getElementById('bien').classList.remove('d-none');

}

button3.addEventListener('click', showbien);

const showmal = () => {
    document.getElementById('mal').classList.remove('d-none');

}

button1.addEventListener('click', showmal);
button2.addEventListener('click', showmal);
button4.addEventListener('click', showmal);

