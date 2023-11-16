//Seleziono btn da dom
let btn = document.querySelector('#btn');
//Seleziono checkbox da dom
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
    }
    })
}

// Verifica se la pagina corrente è quella desiderata
if (window.location.href.indexOf("index.html") > -1) {
    // Esegui la funzione solo se la condizione è soddisfatta
    //Richiamo la funzione abilitaBtn()
    abilitaBtn();
}


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
}
