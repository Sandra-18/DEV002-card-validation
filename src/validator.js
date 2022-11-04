const validator = {

  isValid: function(){

    let valorDeInput = document.querySelector("#claveTarjeta").value;
    let arrayDeNumnero = Array.from(valorDeInput);
    let numerosInvertidos = arrayDeNumnero.reverse();

     for(let i = 1; i < numerosInvertidos.length; i= i+2){
         numerosInvertidos[i] = numerosInvertidos[i] * 2;
      if(numerosInvertidos[i] >= 10){
        numerosInvertidos[i] = numerosInvertidos[i] -9; 
      }
    }

    let sumaDeNumeros = 0;
    for(let s = 0; s < numerosInvertidos.length; s++){
    sumaDeNumeros += numerosInvertidos[s];
    }

      let almacenDeResultado = 0;

        sumaDeNumeros.split('').forEach(sumaDeNumeros => almacenDeResultado += parseInt (sumaDeNumeros));
        if(almacenDeResultado % 10 === 0){
            return alert("Número válido");
        }else{
            return alert("Número invalido");
        }
  },

  maskify: function(){
    
    let valorDeInput = document.querySelector("#claveTarjeta").value;
    let arrayDelValor = Array.from(valorDeInput);
    let resultadoDelValor = "";
   
    for(let i = 0; i < arrayDelValor.length; i++){
     if(i < 12){
        resultadoDelValor = resultadoDelValor + arrayDelValor[i]
      }else{
        resultadoDelValor = resultadoDelValor + "#"
        document.querySelector(".tarjetaValidacion #numeroDeTarjeta").innerHTML = resultadoDelValor;
      }
    }
  }
 };
 
export default validator
  




// 5529931622059431
// 2343423413213212
// 5555555555554444
// 371449635398431
   
    