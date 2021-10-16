// Identifico il bottone per lanciare i dadi
const btn = document.getElementById("button")

// Identifico le caselle dove inserire i risultati
const casellaGiocatore = document.getElementById("numero_giocatore")

const casellaComputer = document.getElementById("numero_computer")

const casellaVincitore = document.getElementById("risultato_vincitore")

btn.addEventListener("click", function () {

    // Parto azzerando le caselle
    casellaGiocatore.innerHTML = ""
    casellaComputer.innerHTML = ""
    casellaVincitore.innerHTML = ""

    // Creo generatore di numeri casuali da 1 a 6 per giocatore e computer
    const numeroRandomGiocatore = Math.random()

    const numeroRandomComputer = Math.random()

    // Assegno il numero casuale a entrambi
    const numeroGiocatore = Math.ceil(numeroRandomGiocatore * 6)

    casellaGiocatore.textContent += numeroGiocatore

    const numeroComputer = Math.ceil(numeroRandomComputer * 6)

    casellaComputer.textContent += numeroComputer

    // stabilisco variabile vincitore vuota

    let vincitore = ""

    // Creo la condizione che stabilisce chi tra i due ha vinto o se c'è un pareggio

    if (numeroGiocatore > numeroComputer) {
        vincitore = "Giocatore"
        // alert(`${vincitore} hai vinto!`)
        casellaVincitore.innerHTML += `<h4 class="text-center text-light"><span class="c_green">${vincitore}</span> ha vinto</h4>`
    } else if (numeroComputer > numeroGiocatore) {
        vincitore = "Computer"
        // alert(`${vincitore} hai vinto!`)
        casellaVincitore.innerHTML += `<h4 class="text-center text-light"><span class="c_green">${vincitore}</span> ha vinto</h4>`
    } else {
        vincitore = "E' un pareggio, ritirare il dado"
        // alert(vincitore)
        casellaVincitore.innerHTML += `<h4 class="text-center text-light">${vincitore}</h4>`
    }

})