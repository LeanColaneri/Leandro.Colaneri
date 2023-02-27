function crearBarra(id_Barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "H";
        id_Barra.appendChild(div);
    }
}

let VISION = document.getElementById("VISION");
crearBarra(VISION);
let SUPERFUERZA = document.getElementById("SUPERFUERZA");
crearBarra(SUPERFUERZA);
let VUELO = document.getElementById("VUELO");
crearBarra(VUELO);
let DURABILIDAD = document.getElementById("DURABILIDAD");
crearBarra(DURABILIDAD);
let SUPEROIDO = document.getElementById("SUPEROIDO");
crearBarra(SUPEROIDO);
let SUPERVELOCIDAD = document.getElementById("SUPERVELOCIDAD");
crearBarra(SUPERVELOCIDAD);
