//dichiara le variabili
let btn=document.getElementById("btn")
let img1=document.getElementById("img1");
let img2=document.getElementById("img2");


//definisci le funzioni

function showHide() {
    if ((img1.style.display != "none")
       && (img2.style.display != "none"))  {
        img1.style.display="none";
        img2.style.display="none";
        
    } else{
        img1.style.display="block";
        img2.style.display="block";


    }
        
    


}




//esegui le funzioni

btn.addEventListener("click",showHide);


