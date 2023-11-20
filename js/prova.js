// Inizializzazione di un array per memorizzare i risultati delle domande
const results = [];
// Inizializzazione dell'indice per tracciare la domanda corrente
let index = 0;
// Contatore per tenere traccia delle risposte corrette date
let risposteCorretteDate = 0; // Aggiunto contatore delle risposte corrette

// Funzione per generare una nuova domanda
const generaDomanda = function (arr, indice) {
    // Seleziona il div delle risposte nel documento HTML
    const divRisposte = document.querySelector('.risposte'); // selezioniamo il div risposte

    // Crea bottoni per ogni risposta sbagliata
    for (let i = 0; i <= arr[indice].incorrect_answers.length; i++) {
        const risposte = document.createElement('button');
        // Aggiungi classi per lo stile (sbagliata e bottoneRisposta)
        risposte.classList.add('sbagliata');
        risposte.classList.add('bottoneRisposta');
        // Aggiungi il bottone al div delle risposte
        divRisposte.appendChild(risposte);

        // Aggiungi un listener per gestire il click su ogni bottone
        risposte.addEventListener('click', function () {
            const risposteButtons = document.querySelectorAll('.bottoneRisposta');
            // Rimuovi la classe 'selezionata' da tutti i bottoni
            risposteButtons.forEach(button => button.classList.remove('selezionata'));
            // Aggiungi la classe 'selezionata' solo al bottone cliccato
            risposte.classList.add('selezionata');
        });
    }

    // Registra la domanda corrente nell'array dei risultati
    results[index] = {};
    results[index].domanda = arr[indice].question;
    results[index].risposta_esatta = arr[indice].correct_answer;

    // Seleziona l'elemento HTML della domanda
    const domanda = document.getElementById('domanda');
    // Seleziona tutti gli elementi con classe 'bottoneRisposta'
    risposte = document.getElementsByClassName('bottoneRisposta');
    // Inserisci il testo della domanda nell'elemento HTML
    domanda.innerHTML = arr[indice].question;

    // Genera risposte casuali
    if (arr[indice].incorrect_answers.length == 3) {
        // Se ci sono 3 risposte sbagliate
        rispIndex = Math.floor(Math.random() * 4);
        risposte[rispIndex].innerHTML = arr[indice].correct_answer;
        risposte[rispIndex].classList.remove('sbagliata');
        risposte[rispIndex].classList.add('corretta');

        // Popola le risposte sbagliate in base all'indice della risposta corretta
        switch (rispIndex) {
            case 0:
                risposte[1].innerHTML = arr[indice].incorrect_answers[0];
                risposte[2].innerHTML = arr[indice].incorrect_answers[1];
                risposte[3].innerHTML = arr[indice].incorrect_answers[2];
                break;
            case 1:
                risposte[0].innerHTML = arr[indice].incorrect_answers[0];
                risposte[2].innerHTML = arr[indice].incorrect_answers[1];
                risposte[3].innerHTML = arr[indice].incorrect_answers[2];
                break;
            case 2:
                risposte[0].innerHTML = arr[indice].incorrect_answers[0];
                risposte[1].innerHTML = arr[indice].incorrect_answers[1];
                risposte[3].innerHTML = arr[indice].incorrect_answers[2];
                break;
            case 3:
                risposte[0].innerHTML = arr[indice].incorrect_answers[0];
                risposte[2].innerHTML = arr[indice].incorrect_answers[1];
                risposte[1].innerHTML = arr[indice].incorrect_answers[2];
                break;
        }
    } else {
        // Se ci sono 2 risposte sbagliate
        rispIndex = Math.floor(Math.random() * 2);
        risposte[rispIndex].innerHTML = arr[indice].correct_answer;
        risposte[rispIndex].classList.remove('sbagliata');
        risposte[rispIndex].classList.add('corretta');

        // Popola la risposta sbagliata rimanente
        switch (rispIndex) {
            case 0:
                risposte[1].innerHTML = arr[indice].incorrect_answers[0];
                break;
            case 1:
                risposte[0].innerHTML = arr[indice].incorrect_answers[0];
                break;
        }
    }
  
    index = index + 1;  // Incrementa l'indice per la prossima domanda
}


generaDomanda(questions, index);// Chiamata alla funzione per generare la prima domanda

// Aggiunge un listener per gestire il click su tutto il documento
document.addEventListener('click', function (event) {
    // Verifica se l'elemento cliccato ha la classe 'bottoneRisposta'
    if (event.target.classList.contains('bottoneRisposta')) {
        // Chiamata alla funzione per passare alla domanda successiva
        passaAllaDomandaSuccessiva();
    }
});

// Funzione per passare alla domanda successiva
function passaAllaDomandaSuccessiva() {
    // Se ci sono ancora domande da mostrare
    if (index < questions.length) {
        // Seleziona il div delle risposte e lo svuota
        const divRisposte = document.querySelector('.risposte');
        divRisposte.innerHTML = '';

        // Chiamata alla funzione per generare la nuova domanda
        generaDomanda(questions, index);
    } else if (index === questions.length) {
        // Chiamata alla funzione per mostrare il risultato finale
        mostraRisultato();
    }
}

// Funzione per mostrare il risultato finale
function mostraRisultato() {
    // Seleziona l'elemento con id 'contadomande'
    const contadomande = document.getElementById('contadomande');
    // Crea un nuovo div per mostrare il risultato
    const risultatoDiv = document.createElement('div');
    risultatoDiv.classList.add('risultato');

    // Conta le risposte corrette
    for (let i = 0; i < results.length; i++) {
        const isRispostaCorretta = results[i].risposta_data === results[i].risposta_esatta;

        // Incrementa il contatore delle risposte corrette
        if (isRispostaCorretta) {
            risposteCorretteDate++;
        }
    }

    // Aggiunge il risultato al div
    risultatoDiv.innerHTML = `<p>Risposte corrette: ${risposteCorretteDate} su ${results.length}</p>`;
    // Aggiunge il div risultato al div con id "contadomande"
    contadomande.appendChild(risultatoDiv);
}


