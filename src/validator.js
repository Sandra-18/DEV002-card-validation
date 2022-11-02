
   
    const validator = {
      isValid: function(){
  
          let cardNumber = "5529931622059431";
          console.log(cardNumber);
          const almacenDeNumeros = Array.from(cardNumber);
          console.log(almacenDeNumeros);
          let numerosInvertidos = almacenDeNumeros.reverse();
          console.log(almacenDeNumeros);
          for(let i = 1; i < numerosInvertidos.length; i= i+2){
          console.log(numerosInvertidos);
           numerosInvertidos[i] = numerosInvertidos[i] * 2;
           console.log(numerosInvertidos);
           if(numerosInvertidos[i] >= 10){
             numerosInvertidos[i] = numerosInvertidos[i] -9; 
            }
          }

          let sumaDeNumeros = 0;
          for(let s = 0; s < numerosInvertidos.length; s++){
           sumaDeNumeros += numerosInvertidos[s];
           console.log(sumaDeNumeros);
          }
          let almacenDeResultado = 0;
          sumaDeNumeros.split('').forEach(sumaDeNumeros => almacenDeResultado  += parseInt (sumaDeNumeros)); //transformar los string en enteros
          console.log(almacenDeResultado);
            if(almacenDeResultado % 10 === 0){
             return console.log(true);
            }else{
              return console.log(false);
            }
        }
    };


    





    export default validator

   
    