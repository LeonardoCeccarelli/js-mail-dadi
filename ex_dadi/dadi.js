// Identifico il bottone per lanciare i dadi
const btnSubmit = document.getElementById("btn_submit")

btnSubmit.addEventListener("click", function () {

    // Creo generatore di numeri casuali da 1 a 6 per giocatore e computer
    const numeroRandomGiocatore = Math.random()

    const numeroRandomComputer = Math.random()

    // Assegno il numero casuale a entrambi
    const numeroGiocatore = Math.ceil(numeroRandomGiocatore * 6)

    alert("Numero giocatore = " + numeroGiocatore)

    const numeroComputer = Math.ceil(numeroRandomComputer * 6)

    alert("Numero computer = " + numeroComputer)

    // stabilisco variabile vincitore vuota

    let vincitore = ""

    // Creo la condizione che stabilisce chi tra i due ha vinto o se c'è un pareggio

    if (numeroGiocatore > numeroComputer) {
        vincitore = "Giocatore"
        alert(`${vincitore} hai vinto`)
    } else if (numeroComputer > numeroGiocatore) {
        vincitore = "Computer"
        alert(`${vincitore} hai vinto`)
    } else {
        vincitore = "E' un pareggio, ritirare il dado"
        alert(`E' un pareggio, ritirare il dado`)
    }

})