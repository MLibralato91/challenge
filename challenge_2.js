// 1) Scrivere la funzione getFrequente(array) che restituisce il numero più frequente in un array di interi passato come argomento.
// 2) Scrivere la funzione getFrequenti(array, k) che restituisce un array contenente i primi k numeri più frequenti in un array di interi passato come argomento.



function getFrequente(array) {
  const frenquenteMap = new Map();

  // conta le occorrenze dei valori dell'array.
  for (const num of array) {
    if (frenquenteMap.has(num)) {
      frenquenteMap.set(num, frenquenteMap.get(num) + 1);
    } else {
      frenquenteMap.set(num, 1);
    }
  }

  let numeroFrequente;
  let maxFrequenza = 0;

  frenquenteMap.forEach((frequency, num) => {
    if (frequency > maxFrequenza) {
      maxFrequenza = frequency;
      numeroFrequente = num;
    }
  });

  return numeroFrequente;
}

function getFrequenti(array, k) {
  const frequenteMap = new Map();


  for (const num of array) {
    if (frequenteMap.has(num)) {
      frequenteMap.set(num, frequenteMap.get(num) + 1);
    } else {
      frequenteMap.set(num, 1);
    }
  }

  // creo un array di array dalla Map.
  const arrayFrequenti = Array.from(frequenteMap)

  // ordino l'array dal più grande al più piccolo.
  const frequentiOrdinati = arrayFrequenti.sort((a, b) => b[1] - a[1]);

  // in base alla k che passiamo alla funziona seleziona i primi k più frequenti.
  const piuFrequenti = frequentiOrdinati.slice(0, k)

  // mappo l'array assegnando solamente i numeri più frequenti.
  const arrayFinale = piuFrequenti.map(elemento => elemento[0]);

  return arrayFinale;
}

