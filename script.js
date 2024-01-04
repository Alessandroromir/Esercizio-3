document.addEventListener('DOMContentLoaded', () => {

let image = document.getElementById('image');

function changeImage() {
    image.style.height = "100px";
    image.style.width = "100px";
}


image.addEventListener('click', changeImage);})
