import  validator from './validator.js';

    const btnAccionador = document.querySelector("#btnComprobar");
    let formulario = document.querySelector("#formularioDos");
    let numeroDeTarjeta = document.querySelector(".tarjetaValidacion #numeroDeTarjeta");
  
    btnAccionador.addEventListener("click", ()=>{
        validator.isValid();
       
    })

      
    formulario.claveTarjeta.addEventListener("keyup", (e)=>{ 
        let contenido = e.target.value;   
        formulario.claveTarjeta.value = contenido
        
        //expresiones regulares con ciertas funciones
            .replace(/\s/g, '') 
            .replace(/\D/g, '')
           //  .replace(/([0-9]{4})/g, '$1 ')
            .trim();      
            numeroDeTarjeta.textContent = contenido;
            validator.maskify();
            if(contenido === ""){
                numeroDeTarjeta.textContent = "#### #### #### ####";
            }
           
    })  


