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
 
 function startCountdown(){
     //Inserisco il countdown legandolo alla mia variabile timer
     timer.textContent = count;
     //Dichiaro costante animazione e richiamo da DOM il l'elemento circle figlio di svg
     const animazione = document.querySelector('svg > circle + circle');
     //Aggiungo classe animatable a costante animazione
     animazione.classList.add('animatable');
     //Setto uno stile ad animazione
     animazione.style.strokeDashoffset = 1;
     //Imposto setInterval ed assegno a mia variabile contatore
     let contatore = setInterval(function() {
         //Inserisco il countdown legandolo alla mia variabile timer
         timer.textContent = count;
         //Avvio il countdown
         let varTime = count--;
         //Verifico che il valore di riferimento count è minore di 0
           if (count < 0) {
             //Pulisco il setInterval della variabile contatore
             clearInterval(contatore);
         }else{ 
             
             const normalizedTime = (60 + varTime) / 60;
             //Assegno stile ad animazione
             animazione.style.strokeDashoffset = normalizedTime;
             //Inserisco il countdown legandolo alla mia variabile timer
             timer.textContent = count;
             //Rimuovo classe aggiunta ad animazione
             animazione.classList.remove('animatable');
             //Carico domande
             
         
         }
 }, 1000);
 }

if (window.location.href.indexOf("benchmark.html") > -1) {
    // Eseguo la funzione solo se la condizione è soddisfatta
    //Richiamo la  funzione startCountdown()
    startCountdown(document.querySelector('.timer'));
}


const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
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
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
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
        "What is the code name for the mobile operating system Android 7.0?",
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
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

 let h2 = document.querySelector('#h2');
 let arrayDomande = [];
  function generaDomande(){
    for (var k in questions){
        arrayDomande.push(questions[k].question);
    }
    let n = 0
        switch (arrayDomande[n]) {
            case arrayDomande[0]:
                h2.innerText = arrayDomande[n];
                //richiamo funzione genera risposte
                //generaRisposte();
            break;
            case arrayDomande[1]:
                
                h2.innerText = arrayDomande[n];
            break;
            case arrayDomande[2]:
                
                h2.innerText = arrayDomande[n];
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
  generaDomande()

  let div = document.querySelector('#risposte');
  function generaRisposte(){
        let span = document.createElement('span')
        div.appendChild(span);
        span.innerHTML = `<input type='radio'>` + `</input>`
  }
  generaRisposte();










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
        changeStarColor(stelle[i], "#0B113B");
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
    var canvas = document.getElementById('doughnutChart');
    var ctx = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = Math.min(canvas.width, canvas.height) / 2;

    // Dati del grafico
    var data = [40, 60];
    var colors = ['#C2128D', '#00FFFF'];

    // Opzioni del grafico
    var cutoutPercentage = 0; // Imposta la percentuale di ritaglio a 0
    var innerRadiusPercentage = 70; // Imposta la percentuale del raggio interno

    // Calcola il raggio interno in base alla percentuale
    var innerRadius = (innerRadiusPercentage / 100) * radius;

    // Disegna la ciambella
    drawDoughnutChart(ctx, centerX, centerY, radius, innerRadius, cutoutPercentage, data, colors);
});

function drawDoughnutChart(ctx, x, y, outerRadius, innerRadius, cutoutPercentage, data, colors) {
    var total = data.reduce(function (acc, value) {
        return acc + value;
    }, 0);

    var startAngle = -Math.PI / 2;  
    var endAngle;

    for (var i = 0; i < data.length; i++) {
        var sliceAngle = (2 * Math.PI * data[i]) / total;

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
