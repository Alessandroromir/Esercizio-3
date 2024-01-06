//dichiara le variabili

let btn = document.getElementById('btn')
let counter = document.getElementById('counter')


//definisci le funzioni

function onclick() {
    let content = counter.innerHTML
    let increase = parseInt(content) + 1;
    counter.innerHTML = increase

}



//esegui le funzioni

btn.addEventListener('click', onclick)