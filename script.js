//dichiarare le variabili


let container= document.getElementById("container");

//dichiarare le funzioni

function changeColor() {
    container.style.backgroundColor = "red";

}


//eseguire le funzioni

container.addEventListener("mouseover", changeColor);