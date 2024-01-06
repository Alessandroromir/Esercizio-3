//dichiara le variabili
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let list = document.getElementById('list')


//definisci le funzioni

function addText() {
    let newLi = document.createElement('li');
    let content = text.value
    newLi.appendChild(document.createTextNode(content));
    list.appendChild(newLi);
    text.value = "";


}



//esegui le funzioni

btn.addEventListener('click', addText)