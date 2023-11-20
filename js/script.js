function percentage(num){
    return (num * 100) / 10;
}

//Sezione index

//Seleziono btn da dom ed assegno a mia variabile
let btn = document.querySelector('#btn');
//Seleziono checkbox da dom ed assegno a mia variabile
let checkbox = document.querySelector('#cb');

//Dichiaro funzione abilitaBtn()
function abilitaBtn(){
    //Setto il bottone come disable
    btn.disabled = true;
    //Setto un ascoltatore che al click della checkbox mi controlla (segue commento)
    checkbox.addEventListener('click', () => {
    //Tramite if se la checkbox è flaggata o meno
    if (!checkbox.checked){
        //Mantengo il bottone come disable
        btn.disabled = true;
    }
    else{
        //Setto il bottone come attivo
        btn.disabled = false;
        //Setto un ascoltatore che al click mi porta alla pagina benchmark.html tramite window.location
        btn.addEventListener('click', () => {
            window.location = 'benchmark.html'
        })
    }
    })
}

// Verifico se la pagina corrente è quella desiderata
if (window.location.href.indexOf("index.html") > -1) {
    // Eseguo la funzione solo se la condizione è soddisfatta
    //Richiamo la  funzione abilitaBtn()
    abilitaBtn();
}

//Sezione benchmark

 //Seleziono div timer da dom ed assegno a mia variabile
 let timer = document.querySelector('#timer-number');

 //Dichiaro variabile d'inizio countdown
 let count = 60;
 let contatore;
 
 function startCountdown(){
     //Inserisco il countdown legandolo alla mia variabile timer
     timer.textContent = count;
     //Dichiaro costante animazione e richiamo da DOM il l'elemento circle figlio di svg
     const animazione = document.querySelector('svg > circle + circle');
     //Aggiungo classe animatable a costante animazione
     animazione.classList.add('animatable');
     //Setto uno stile ad animazione
     animazione.style.strokeDashoffset = 1;
   // Imposto setInterval ed assegno a mia variabile contatore
   contatore = setInterval(function () {
    // Inserisco il countdown legandolo alla mia variabile timer
    timer.textContent = count;
    // Avvio il countdown ed assegno a mia variabile varTime
    let varTime = count--;
    // Verifico che il valore di riferimento count è minore di 0
    if (count < 0) {
        // Pulisco il setInterval della variabile contatore
        clearInterval(contatore);
        // Richiamo la prossima domanda
        passaAllaDomandaSuccessiva();
    } else {
        const normalizedTime = (60 + varTime) / 60;
        // Assegno stile ad animazione
        animazione.style.strokeDashoffset = normalizedTime;
    }
}, 1000);
}

 if (window.location.href.indexOf("benchmark.html") > -1) {
    // Eseguo la funzione solo se la condizione è soddisfatta
    // Richiamo la funzione startCountdown()
    startCountdown(document.querySelector('.timer'));
}


const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does <b>CPU stand for?</b>",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, <b>which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?</b>",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat <b>is a Bell.</b>",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; <b>they were added later on in C++.</b>",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for <b>logos in the Wikimedia database?</b>",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, <b>what does CSS stand for?</b>",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the <b>mobile operating system Android 7.0?</b>",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, <b>what is the character limit for a Tweet?</b>",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created <b>as an alternative to Windows XP.</b>",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language <b>shares its name with an island in Indonesia?</b>",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];
/*
 let h2 = document.querySelector('#h2');
 let arrayDomande = [];
  function generaDomanda(){
    for (var k in questions){
      arrayDomande.push(questions[k].question);
    }
    let n = 0
        switch (arrayDomande[n]) {
            case arrayDomande[0]:
                h2.innerText = arrayDomande[n];
                //richiamo funzione genera risposte
                generaRisposte();
            break;
            case arrayDomande[1]:
                h2.innerText = arrayDomande[n];
                generaRisposte();
            break;
            case arrayDomande[2]:
                h2.innerText = arrayDomande[n];
                generaRisposte();
            break;
            case arrayDomande[3]:
                
                h2.innerText = arrayDomande[n];
            break;
            case arrayDomande[4]:
                
                h2.innerText = arrayDomande[n];
            break;
            case arrayDomande[5]:
                
                h2.innerText = arrayDomande[n];
            break;
            case arrayDomande[6]:
                
                h2.innerText = arrayDomande[n];
            break;
            case arrayDomande[7]:
                
                h2.innerText = arrayDomande[n];
            break;
            case arrayDomande[8]:
                
                h2.innerText = arrayDomande[n];
            break;
            case arrayDomande[9]:
                
                h2.innerText = arrayDomande[n];
            break;
        }
  }
  generaDomanda()

  let div = document.querySelector('#risposte');
  let arrayRisposte = [];
  function generaRisposte(){
    let span = document.createElement('span')
    div.appendChild(span);
    span.innerHTML = `<input type='radio'>` + arrayRisposte + `</input>`
    for(var j in questions){
      arrayRisposte.push(questions[j].type)
      console.log(questions[j].type)
    }
  }
  generaRisposte();



*/




// codice cambio colore stelle feedback
function cambiostella() {
    const stelleAttive = document.querySelectorAll(".stellina");

    stelleAttive.forEach((stella, index) => {
        stella.addEventListener("click", () => {
            illuminaStelle(stelleAttive, index);
        });
    });

    stelleAttive.forEach((stella, index) => {
        stella.addEventListener("click", (event) => {
            riduciStelle(stelleAttive, index);
        });
    });
}

function illuminaStelle(stelle, startIndex) {
    for (let i = startIndex; i >= 0; i--) {
        changeStarColor(stelle[i], "#00ffff");
    }
}

function riduciStelle(stelle, startIndex) {
    for (let i = startIndex + 1; i < stelle.length; i++) {
        changeStarColor(stelle[i], "#15206e");
    }
}

function changeStarColor(svgImage, newColor) {
    if (svgImage.tagName.toLowerCase() === "img") {
        svgImage.setAttribute("fill", newColor);
    } else {
        let pathElements = svgImage.querySelectorAll("path");
        pathElements.forEach(pathElement => {
            if (pathElement.hasAttribute("fill")) {
                pathElement.setAttribute("fill", newColor);
            }
        });
    }
}

cambiostella();

// codice Cerchio Result

if (window.location.href.indexOf("results.html") > -1) {
    // Eseguo la funzione solo se la condizione è soddisfatta
    //Richiamo la  funzione abilitaBtn()
    cerchioRisultato();
}

function cerchioRisultato() {
document.addEventListener('DOMContentLoaded', function() {
    let canvas = document.getElementById('doughnutChart');
    let ctx = canvas.getContext('2d');
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let radius = Math.min(canvas.width, canvas.height) / 2;

    // Dati del grafico
    let X1 = parseInt(params.get('percentageCorrect'));
    let Y1 = parseInt(params.get('percentageIncorrect'));
    const data = [X1, Y1];
    const colors = ['#00FFFF','#C2128D'];

    

    // Opzioni del grafico
    let cutoutPercentage = 0; // Imposta la percentuale di ritaglio a 0
    let innerRadiusPercentage = 70; // Imposta la percentuale del raggio interno

    // Calcola il raggio interno in base alla percentuale
    let innerRadius = (innerRadiusPercentage / 100) * radius;

    // Disegna la ciambella
    drawDoughnutChart(ctx, centerX, centerY, radius, innerRadius, cutoutPercentage, data, colors);
});

function drawDoughnutChart(ctx, x, y, outerRadius, innerRadius, cutoutPercentage, data, colors) {
    let total = data.reduce(function (acc, value) {
        return acc + value;
    }, 0);

    let startAngle = -Math.PI / 2;  
    let endAngle;

    for (let i = 0; i < data.length; i++) {
        let sliceAngle = (2 * Math.PI * data[i]) / total;

        // Calcola l'angolo finale del segmento
        endAngle = startAngle + sliceAngle;

        // Disegna la fetta
        ctx.beginPath();
        ctx.arc(x, y, outerRadius, startAngle, endAngle);
        ctx.arc(x, y, innerRadius, endAngle, startAngle, true); // Disegna il cerchio interno
        ctx.closePath();
        ctx.fillStyle = colors[i];
        ctx.fill();

        // Aggiorna l'angolo di partenza per il prossimo segmento
        startAngle = endAngle;
    }
}}

const results = [];
let index = 0;
let risposteCorretteDate = 0; // Aggiunto contatore delle risposte corrette

const generaDomanda = function (arr, indice) {
    const divRisposte = document.querySelector('.risposte'); // selezioniamo il div risposte

    // per ogni risposta sbagliata +1 creiamo un bottone
    for (let i=0; i<=arr[indice].incorrect_answers.length; i++) {
        const risposte = document.createElement('button');
        risposte.classList.add('sbagliata'); // aggiungiamo la classe sbagliata a tutti (che poi andremo a rimuovere)
        risposte.classList.add('bottoneRisposta'); // aggiungiamo la classe bottone per lo stile
        divRisposte.appendChild(risposte); // mettiamo ogni bottone dentro al div risposte

        risposte.addEventListener('click', function() {
            const risposteButtons = document.querySelectorAll('.bottoneRisposta');
            risposteButtons.forEach(button => button.classList.remove('selezionata'));

            risposte.classList.add('selezionata');
        });
    }

    results[index] = {};
    results[index].domanda = arr[indice].question;
    results[index].risposta_esatta = arr[indice].correct_answer;

    const domanda = document.getElementById('domanda');
    risposte = document.getElementsByClassName('bottoneRisposta');
    domanda.innerHTML = arr[indice].question;

    if(arr[indice].incorrect_answers.length == 3) {
        rispIndex = Math.floor(Math.random()*4);
        risposte[rispIndex].innerHTML = arr[indice].correct_answer;
        risposte[rispIndex].classList.remove('sbagliata');
        risposte[rispIndex].classList.add('corretta');

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
        rispIndex = Math.floor(Math.random()*2);
        risposte[rispIndex].innerHTML = arr[indice].correct_answer;
        risposte[rispIndex].classList.remove('sbagliata');
        risposte[rispIndex].classList.add('corretta');

        switch (rispIndex) {
            case 0:
                risposte[1].innerHTML = arr[indice].incorrect_answers[0];
                break;
            case 1:
                risposte[0].innerHTML = arr[indice].incorrect_answers[0];
                break;
        }
    }
    index = index + 1;
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('bottoneRisposta')) {
        passaAllaDomandaSuccessiva();
    }
});

function passaAllaDomandaSuccessiva() {
    const divRisposte = document.querySelector('.risposte');
    const risposteButtons = divRisposte.querySelectorAll('.bottoneRisposta');

    const rispostaSelezionata = Array.from(risposteButtons).find(button => button.classList.contains('selezionata'));

    if (!rispostaSelezionata) {
        return;
    }

    const rispostaData = rispostaSelezionata.innerHTML;

    results[index - 1].risposta_data = rispostaData;

    // Resettare il timer quando passi alla prossima domanda
    clearInterval(contatore);
    count = 60;

    if (index < questions.length) {
        divRisposte.innerHTML = '';
        generaDomanda(questions, index);
        // Avvia il timer per la nuova domanda
        startCountdown();
    } else if (index === questions.length) {
        mostraRisultato();
    }
}


if (window.location.href.indexOf("benchmark.html") > -1) {
    // Eseguo la funzione solo se la condizione è soddisfatta
    // Richiamo la funzione abilitaBtn()
    generaDomanda(questions, index);
}

let percentageCorrect;
let percentageIncorrect;

const params = new URLSearchParams(window.location.search);

function mostraRisultato() {
    let risposteCorretteDate = 0;
    let risposteSbagliate = 0;
    
    for (let i = 0; i < results.length; i++) {
        const isRispostaCorretta = results[i].risposta_data === results[i].risposta_esatta;

        if (isRispostaCorretta) {
            risposteCorretteDate++;
        } else {
            risposteSbagliate++;
        }
    }

    const numeroDomande = results.length;
    percentageCorrect = (risposteCorretteDate / numeroDomande) * 100;
    percentageIncorrect = (risposteSbagliate / numeroDomande) * 100;
    

    // Encode values in the URL
    const redirectURL = `results.html?correct=${risposteCorretteDate}&incorrect=${10 - risposteCorretteDate}&percentageCorrect=${percentageCorrect}&percentageIncorrect=${percentageIncorrect}`;

    console.log("Percentuale risposte corrette:", percentageCorrect.toFixed(2) + "%");
    console.log("Percentuale risposte sbagliate:", percentageIncorrect.toFixed(2) + "%");

    window.location = redirectURL;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#span1").innerHTML = params.get('correct');
    document.querySelector("#span2").innerHTML = params.get('incorrect');
    document.querySelector("#pCorrect").innerHTML = parseFloat(params.get('percentageCorrect')).toFixed(2) + "%";
    document.querySelector("#pWrong").innerHTML = parseFloat(params.get('percentageIncorrect')).toFixed(2) + "%";
   
});

let messageResult = document.querySelector("#passedResult")

if(parseInt(params.get('percentageCorrect'))>59) 
    {messageResult.innerHTML = "Congratulations!<br>You passed the exam."}

else 
    {messageResult.innerHTML = "Ritenta,<br> sarai più fortunato!";
    messageResult.style.color = "#ff00b7";
    document.querySelector("#display").style.visibility = "hidden"}