const validator = {
  isValid: function (creditCardNumber) {
    console.log("entro a isvalid" + creditCardNumber);
    let arrayDeNumero = Array.from(creditCardNumber)
    // let arrayDeNumero = creditCardNumber.split("");
    console.log("este es el array" + arrayDeNumero);
    let numerosInvertidos = arrayDeNumero.reverse();
    console.log("numero invertido " + numerosInvertidos);
    for (let index = 1; index < numerosInvertidos.length; index = index + 2) {
      numerosInvertidos[index] = numerosInvertidos[index] * 2;
      console.log("digito por dos " + numerosInvertidos[index]);
      if (numerosInvertidos[index] >= 10) {
        numerosInvertidos[index] = numerosInvertidos[index] - 9;
        console.log("suma dos digitos " + numerosInvertidos[index]);
      }else{
        numerosInvertidos[index] = numerosInvertidos[index]
        console.log("digitox2-10 " + numerosInvertidos[index]);
      }
    }
    console.log("numparmulti " + numerosInvertidos);
    let sumaTotal = numerosInvertidos.reduce((a,b)=>{
      let primerDigito = parseInt(a);
      let segundoDigito = parseInt(b);
      return primerDigito + segundoDigito;
    })
    console.log("sumatotal " + sumaTotal);
   
      if (sumaTotal % 10 === 0) {
        return true;
      } else {
        return false;
      }
  }
  // ,
  // maskify: function(creditCardNumber){
    
  //   let arrayDelValor = Array.from(creditCardNumber);
  //   let resultadoDelValor = "";
  //   for(let i = 0; i < arrayDelValor.length; i++){
  //    if(i < arrayDelValor.length-4){
  //     resultadoDelValor =  resultadoDelValor + "#"     
  //     }else{
  //       resultadoDelValor = resultadoDelValor + arrayDelValor[i] 
  //     }
  //     return resultadoDelValor;
  //   }
  // }
};
export default validator

// 5529931622059431
// 2343423413213212
// 5555555555554444
// 371449635398431

