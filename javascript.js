// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studenteModello = {
    nome: "giuseppe",
    cognome: "rossi",
    eta: "23"
}

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (const key in studenteModello) {
    console.log(key + " : " + studenteModello[key])
}

// Creare un array di oggetti di studenti.

var arrOggetti = [
    // indice [0]
    {
        nome: "giuseppe",
        cognome: "rossi",
        eta: "23"
    },
    // indice [1]
    {
        nome: "mario",
        cognome: "verdi",
        eta: "19"
    },
]

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (var i = 0; i < arrOggetti.length; i++ ) {
    console.log(arrOggetti[i].nome)
    console.log(arrOggetti[i].cognome)
}


// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nomeInserito = prompt("Inserisci il nome del nuovo studente")
var cognomeInserito = prompt("Inserisci il cognome del nuovo studente")
var etaInserita = prompt("Inserisci l'eta del nuovo studente")

var nuovoStudente = {
    nome : nomeInserito,
    cognome : cognomeInserito,
    eta: etaInserita
}

arrOggetti.push(nuovoStudente)

console.log(arrOggetti)