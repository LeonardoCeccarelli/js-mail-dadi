// Chiedo all'utente di inserire una mail
const mailUtente = prompt("Per accedere, inserisci la tua e-mal")

// Creo array contente email già esistenti
const listaMailUtenti = ["mario.rossi@gmail.com", "giuseppe.verdi@gmail.com", "luigi.bianchi@gmail.com", "maria.ferrari@gmail.com"]

let mailEsistente = false

// Creo il ciclo che mi permette di verificare se l'email inserita dall'utente è già esistente oppure no
for (i = 0; i < listaMailUtenti.length; i++) {
    const mailCorrente = listaMailUtenti[i]

    // Creo la condizione che mi permette di verificare """"""""""""
    // Se esiste cambio variabile (true), altrimenti no (false)
    if (mailUtente.toLowerCase() === mailCorrente.toLowerCase()) {
        mailEsistente = true
    }
}

// Verifico email tramite variabile inserita precedentemente e invio i corrispettivi alert
if (!mailEsistente) {
    alert("Accesso negato, e-mail non esistente. Si prega di effettura la registrazione.")
} else {
    alert("E-mail trovata. Accesso eseguito con successo.")
}