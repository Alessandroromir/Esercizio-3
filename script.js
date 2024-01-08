//dichiara le variabili
let textFilter = document.getElementById('textFilter');
let text = document.getElementById('text');


//definisci le funzioni

function textRemove() {
    let inputText = textFilter.value;
    let paragraphText = text.innerText;

    function isCharNotInInput(char) {
      return inputText.indexOf(char) === -1;
    }

    let paragraphArray = paragraphText.split('');
    let filteredArray = paragraphArray.filter(isCharNotInInput);
    let newParagraphText = filteredArray.join('');

    text.innerText = newParagraphText;
  }




//esegui le funzioni

textFilter.addEventListener('input', textRemove);



