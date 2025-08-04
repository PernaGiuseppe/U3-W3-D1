// 1) Quali sono i tipi primitivi principali in TypeScript?

// 1) I tipi primitivi principali in TS sono: string (stringa), number (numeri), boolean (booleani), null (nullo), undefined (indefinito).

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

// 2)
const nome: string = 'Giuseppe'
const eta: number = 27
const learningTypeScript: boolean = true

// 3) Tipizza il parametro della seguente funzione:

const greet = (name: string) => {
  return 'Ciao ' + name
}

// 4) Specifica il tipo di ritorno della seguente funzione:

const sum = (a: number, b: number) => {
  return a + b
}
sum(1, 2)
console.log(sum) //3

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const prezzoIvato = (prezzo: number): number => {
  return (prezzo * 22) / 100 + prezzo
}

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const unioneStringhe = (index1: string, index2: string) => {
  return (index1 + index2).length
}

// 7) Cos'è un Type Union e come si scrive?

// Viene utilizzato per dare alla variabile diversi tipi di dato es:
const variabile: string | number = 'valore'
// si possono aggiungere più tipi di dati

// 8) Crea una variabile che possa contenere un numero, null o undefined.

let numero: number | null | undefined
numero = 1
numero = null
numero = undefined

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type GioniSettimana =
  | 'Lunedi'
  | 'Martedi'
  | 'Mercoledi'
  | 'Giovedi'
  | 'Venerdi'
  | 'Sabato'
  | 'Domenica'
let ieri: GioniSettimana = 'Domenica'
// let domani: GioniSettimana = 'Boh' // Errore

// 10) Tipizza il seguente array di numeri nei due modi possibili:

// const numbers = [1, 2, 3]
const numbers: number[] = [1, 2, 3]
const numers1: Array<Number> = [1, 2, 3]

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

const tuple: [string, string, string, number, number] = [
  'Aldo',
  'Giovanni',
  'Giacomo',
  1,
  2,
]

// 12) Qual è la differenza tra type e interface?

/* Entrambi sono utilizzati per definire la forma degli oggetti in TS, ma differiscono in alcuni elementi:
Type viene usato per i tipi primitivi e non, esembio le stringhe letterali, ma non è estendibile direttamente e non può essere usato per definire gli oggetti e le funzioni
Interface può essere esteso, quindi si possono implementare più elementi al suo interno (direttamente), e viene usato per gli oggetti e le funzioni
*/

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface DatiPersona {
  fistname: string
  lastname: string
  age: number
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface DatiAccesso {
  email: string
  numTelefono?: number | string
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

interface Studente {
  nome: string
  voto: number
}

const studenti: Studente[] = [
  { nome: 'Mario', voto: 8 },
  { nome: 'Francesco', voto: 7 },
  { nome: 'Elena', voto: 10 },
]

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo {
  marca: string
  modello: string
}
interface Auto extends Veicolo {
  cavalliVapore: number
  motore: string
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.

const laMiaAuto: Auto = {
  marca: 'Ford',
  modello: 'Fiesta',
  cavalliVapore: 100,
  motore: '1.0 EcoBoost',
}

// 18) Cosa sono i Generics in TypeScript?

// I Generics sono dei "type" che vengono passati come argomento, per rendere più versatile e riutilizzabile "interface"

// 19) È possibile avere più tipi generici in un'interfaccia?

// Si, è pobbile, e solitamente sono assegnati con la lettera maiuscola. es Adress<A>

// 20) Crea un'interfaccia generica per una risposta API.
interface APIrisposta<A> {
  risposta: boolean
  messaggio: string
  data?: A
}
