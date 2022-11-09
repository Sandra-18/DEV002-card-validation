import validator from './validator.js';

let verificacion = document.getElementById("btnComprobar")  //este boton me acciona la funcion

verificacion.addEventListener("click", () => {
    let inputNumero = document.getElementById("claveTarjeta").value;
    let resumValidator = validator.isValid(inputNumero);
    let resunMaskify = validator.maskify(inputNumero);
    
    if (resumValidator) {
        document.getElementById("numeroDeTarjeta").innerHTML = resunMaskify;
        alert("valido");
    } else {
        alert("invalido");
    }
});