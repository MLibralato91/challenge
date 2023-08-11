// 1) Scrivere la funzione getResistenza(numero), che restituisce la resistenza di un intero passato come argomento.
// 2) Qual è il numero più resistente che riesci a trovare? 99988862 resistenza 9

function getResistenza(numero) {
  let resistenza = 0;

  while (numero >= 10) {
    let nuovoNumero = 1;
    const cifre = numero.toString().split("");

    // moltiplico ogni cifra tra di loro.
    for (let cifra of cifre) {
      nuovoNumero *= parseInt(cifra, 10);
    }

    numero = nuovoNumero;
    // una volta assegnato il nuovo valore del numero incremento la resistenza e ripeto il ciclo, se necessario.
    resistenza++;
  }

  return resistenza;
}

