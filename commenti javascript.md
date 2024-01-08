#commenti esercizio N 19#

LE TRE PARTI PRINCIPALI DEL CODICE
Dichiarazione delle Variabili:
let textFilter = document.getElementById('textFilter');
let text = document.getElementById('text');

Qui stai dichiarando due variabili, textFilter e text, ottenendo gli elementi corrispondenti dagli ID nell'HTML.

Definizione della Funzione textRemove:```javascript
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
   
   - `textRemove` è la funzione che viene chiamata quando l'utente inserisce del testo nell'input.
   - `inputText` contiene il testo inserito nell'input.
   - `paragraphText` contiene il testo del paragrafo.
   - `isCharNotInInput` è una funzione ausiliaria che restituisce `true` se un carattere non è presente nell'input.
   - `paragraphArray` è un array contenente ogni carattere del testo del paragrafo.
   - `filteredArray` è un array filtrato che contiene solo i caratteri non presenti nell'input.
   - `newParagraphText` è una stringa ottenuta unendo gli elementi di `filteredArray`.
   - Infine, il testo del paragrafo viene aggiornato con `newParagraphText`.

3. **Event Listener e Esecuzione della Funzione:**
   
javascript
   textFilter.addEventListener('input', textRemove);
   ``
   Questo codice ascolta l'evento di input sull'elemento textFilter. Quando l'utente inserisce del testo, la funzione textRemove` viene chiamata per aggiornare il testo del paragrafo di conseguenza.

In sintesi, il codice reagisce dinamicamente all'input dell'utente, filtrando il testo del paragrafo in base al testo inserito nell'input.