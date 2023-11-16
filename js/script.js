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
if (window.location.href.indexOf("welcome.html") > -1) {
    // Eseguo la funzione solo se la condizione è soddisfatta
    //Richiamo la  funzione abilitaBtn()
    abilitaBtn();
}

//Sezione benchmark

 //Seleziono div timer da dom ed assegno a mia variabile
let timer = document.querySelector('#timer-number');

//Dichiaro variabile d'inizio countdown
let count = 10;

function startCountdown(){
    //Inserisco il countdown legandolo alla mia variabile timer
    timer.textContent = count;
    //Imposto setInterval ed assegno a mia variabile contatore
    let contatore = setInterval(function() {
        //Inserisco il countdown legandolo alla mia variabile timer
        timer.textContent = count;
        //Avvio il countdown
        count--
        //Verifico che il valore di riferimento count è minore di 0
        if (count < 0) {
            //Pulisco il setInterval della variabile contatore
            clearInterval(contatore);
            
            //Carico domande
            /*
            
            funzione()
            */
        
        }
}, 1000);
}
startCountdown();

    
/* 
    //Imposto setInterval ed assegno a mia variabile contatore
    let contatore = setInterval(function(){
        //Inserisco il countdown legandolo alla mia variabile timer
        timer.textContent = count;
        //Avvio il countdown
        count--
        //Verifico che il valore di riferimento count è minore di 0
        if (count < 0) {
            //Pulisco il setInterval della variabile contatore
            clearInterval(contatore);
            
            //Carico domande
            /*
            
            funzione()
        
        
        }
        //Dichiaro la velocità di countdown
    }, 1000);
};
    
 */

































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