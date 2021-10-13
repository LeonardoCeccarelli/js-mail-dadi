// Creo generatore di numeri casuali da 1 a 6 per giocatore e computer
const numeroRandomGiocatore = Math.random()

const numeroRandomComputer = Math.random()

// Assegno il numero casuale a entrambi
const numeroGiocatore = Math.ceil(numeroRandomGiocatore * 6)

console.log("Numero giocatore = " + numeroGiocatore);

const numeroComputer = Math.ceil(numeroRandomComputer * 6)

console.log("Numero Computer = " + numeroComputer);

// stabilisco variabile vincitore vuota

let vincitore = ""

// Creo la condizione che stabilisce chi tra i due ha vinto o se c'è un pareggio

if (numeroGiocatore > numeroComputer) {
    vincitore = "Giocatore"
    console.log(vincitore + " hai vinto");
} else if (numeroComputer > numeroGiocatore) {
    vincitore = "Computer"
    console.log(vincitore + " hai vinto");
} else {
    console.log("E' un pareggio, ritirare il dado");
}

