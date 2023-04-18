const validator = {
  isValid: function (creditCardNumber) {
    let arrayDeNumero = Array.from(creditCardNumber)
    let numerosInvertidos = arrayDeNumero.reverse();
    let impar = [];
    let numPar = [];

    for (let i = 0; i < numerosInvertidos.length; i++) {
      if ((i + 1) % 2 == 0) {                              //capturando las posiciones pares ¿donde estan los impares?
        let resultadoxDos = numerosInvertidos[i] * 2;      //esos numeros posicion par * 2
        if (resultadoxDos >= 10) {
          let resulDosDigitos = resultadoxDos - 9;
          numPar.push(resulDosDigitos);
        } else {
          let segundoResultado = resultadoxDos;
          numPar.push(segundoResultado);
        } 
      } else {
        impar.push(parseInt(numerosInvertidos[i]));       
      }
    }
    let unionVectores = [...numPar, ...impar]              
    const valorInicial = 0;                                   //si no se provee valor inicial lanza typeError
    const suma = unionVectores.reduce(
      (valorAnterior, valorActual) => (valorAnterior) + (valorActual),
      valorInicial
      );

      if (suma % 10 === 0) {
            return true;
          } else {
            return false;
          }
    },
    maskify: function(creditCardNumber){
      return creditCardNumber.slice(4) + creditCardNumber.slice(0,4).replace(/./g, "#")

    }
};
export default validator

// 5529931622059431
// 2343423413213212
// 5555555555554444
// 371449635398431