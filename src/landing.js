


let comenzar = document.querySelector("#bienvenido");

comenzar.addEventListener("click", ()=>{
    let capNombre = document.querySelector("#registro").value;
    localStorage.setItem("Gauss",capNombre);
   
})
localStorage.clear();
























