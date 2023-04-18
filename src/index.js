import validator from "./validator.js";

const verificacion = document.getElementById("btnComprobar"); //este boton me acciona la funcion
const inputNumero = document.getElementById("claveTarjeta");
const numTarget = document.getElementById("numeroDeTarjeta");
verificacion.addEventListener("click", () => {
  let resumValidator = validator.isValid(inputNumero.value);
  if (resumValidator) {
    alert("valido");
  } else {
    alert("invalido");
  }
  document.getElementById("formularioDos").reset();
  numTarget.textContent = "#### #### #### ####"
});
inputNumero.addEventListener("input", () => {
  const regex = /^[^a-zA-Z]*$/;
  const resul = validator.maskify(inputNumero.value);
  if (!regex.test(resul)) {
    numTarget.textContent = "";
    inputNumero.value = "";
  } else {
    numTarget.textContent = resul;
  }
});
