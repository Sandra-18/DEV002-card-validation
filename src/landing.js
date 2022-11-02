function comenzar (){
    let valorInput = document.querySelector("#registro").value;
    localStorage.setItem("Gauss",valorInput);
    
        if(valorInput === ""){
            return
        }
    }
    localStorage.clear();