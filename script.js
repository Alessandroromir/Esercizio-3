//dichiara le variabili
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");



//definisci le funzioni
function changeImg1() {
    img1.style.width = "100px";
    img1.style.height = "100px";


}



//esegui le funzioni
img2.addEventListener('mouseover', changeImg1);

