let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');
let button7 = document.getElementById('button7');
let button8 = document.getElementById('button8');

let imgbien = document.getElementById('imgbien');
let imgmal = document.getElementById('imgmal');
// butoon1
const showbutton1 = () => {
    document.getElementById('imgmal').classList.remove('d-none');
  }
   button1.addEventListener('click', showbutton1);

// button2

   const showbutton2 = () => {
    document.getElementById('imgbien').classList.remove('d-none');
  }
   button2.addEventListener('click', showbutton2);

// button3
const showbutton3 = () => {
    document.getEventById('imgmal').classList.remove('d-none');
}
  button3.addEventListener('click', showbutton3);

// butoon4