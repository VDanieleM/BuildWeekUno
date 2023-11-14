
// seleziono btn da dom
let btn = document.querySelector('.btnCeles');
// seleziono checkbox da dom
let nomeForm = document.querySelector('#cb');
console.log(nomeForm);
/* cbCheck()
function cbCheck(){
    if (nomeForm.cb.checked){
        alert("CheckBox spuntato");
    }
    else{
        alert("CheckBox non spuntato");
    }
}
 */

/* function abilitaBtn(){
    if (checkbox.checked){
        alert("CheckBox spuntato");
    }
    else{
        alert("CheckBox non spuntato");
    }
}
abilitaBtn() */

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
