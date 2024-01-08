//dichiara le variabili
let box = document.getElementById('box');



//definisci le funzioni
function changeColor() {
    box.style.backgroundColor = "blue";


}


//esegui le funzioni

box.addEventListener('mouseout', changeColor);