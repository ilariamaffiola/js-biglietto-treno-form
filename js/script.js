//RECUPERO TUTTI GLI ELEMENTI DEL DOM E DICHIARO LE VARIABILI
//Recupero i campi form e della form stessa
const buttonGenerate = document.getElementById('button-generate');
const buttonDelete = document.getElementById('button-delete');
const nameField = document.getElementById('nome-field');
const surnameField = document.getElementById('surname-field');
const kilometerField = document.getElementById('kilometer-field');
const ageField = document.getElementById('age-field');
//recupero i segnaposti e il tipo di biglietto che dovrebbe servirmi dopo
const nome = document.getElementById('nome');
const surname = document.getElementById('surname');
const typeOfTicket = document.getElementById('type-ticket');
const costo = document.getElementById('balance');


//avvio l'evento click di buttonGenerate
buttonGenerate.addEventListener('click', function(event){
    //event è l'evento che si è verificato, in questo caso specifico il click. preventDefault è un metodo che previene il comportamento di default della form
    event.preventDefault();
    nome.innerHTML = nameField.value.trim();
    surname.innerHTML = surnameField.value.trim();
    
})
