// 1) Quali sono i tipi primitivi principali in TypeScript?
// 1) I tipi primitivi principali in TS sono: string (stringa), number (numeri), boolean (booleani), null (nullo), undefined (indefinito).
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
// 2)
var nome = 'Giuseppe';
var eta = 27;
var learningTypeScript = true;
// 3) Tipizza il parametro della seguente funzione:
var greet = function (name) {
    return 'Ciao ' + name;
};
// 4) Specifica il tipo di ritorno della seguente funzione:
var sum = function (a, b) {
    return a + b;
};
sum(1, 2);
console.log(sum); //3
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var prezzoIvato = function (prezzo) {
    return (prezzo * 22) / 100 + prezzo;
};
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var unioneStringhe = function (index1, index2) {
    return (index1 + index2).length;
};
// 7) Cos'è un Type Union e come si scrive?
// Viene utilizzato per dare alla variabile diversi tipi di dato es:
var variabile = 'valore';
// si possono aggiungere più tipi di dati
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var numero;
numero = 1;
numero = null;
numero = undefined;
var ieri = 'Domenica';
// let domani: GioniSettimana = 'Boh' // Errore
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
var numers1 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
/*

*/
// 12) Qual è la differenza tra type e interface?
// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
// 17) Crea un oggetto che implementi l'interfaccia Auto.
// 18) Cosa sono i Generics in TypeScript?
// 19) È possibile avere più tipi generici in un'interfaccia?
// 20) Crea un'interfaccia generica per una risposta API.
