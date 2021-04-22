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
var studenti = {
    'studente1': ["andrea", "valeri"],
    'studente2': ["mario", "rossi"],
    'studente3': ["filippo", "filippetto"],
}
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (const key in studenti) {
    console.log(key + " : " + studenti[key])
}


// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var nuovoStudente = {
    novita1: [],
}
for (var i = 0; i < 3; i++) {
    var aggiunta = prompt("Aggiungi i dati del nuovo studente, inserendo prima il nome, poi il cognome ed infine l'eta")
    nuovoStudente.novita1.push(aggiunta)
}
    

console.log(nuovoStudente)