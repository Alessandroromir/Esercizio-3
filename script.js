let btn = document.getElementsByClassName('btn')[0];


function change () {

    btn.style.color = 'aqua';
    btn.style.backgroundColor = 'black';
}

btn.addEventListener('click', change);