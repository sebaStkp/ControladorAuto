import posAuto from "./posicionAuto";
import {comsAuto,ejecutarComando} from "./comandos";
import auto from "./auto";

const posicionInicial = document.querySelector("#pos-ini");
const comandosAuto = document.querySelector("#coms-auto");
const form = document.querySelector("#controlador-auto");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const posIni = posicionInicial.value;
  const comandos = comandosAuto.value;
  if (posAuto(posIni) == "Formato incorrecto" || comsAuto(comandos) == "Formato incorrecto") 
  {
    event.preventDefault();
    alert("Ingresa la informacion con el formato establecido");
  }
  else{
    const automovil = new auto(posAuto(posIni));
    var coordenada = automovil.getPosX + "," + automovil.getPosY;
    div.innerHTML = "<p>" + "Pos: " + posAuto(posIni) + "</p>";
    div.innerHTML += "<p>" + "Comandos: " + comsAuto(comandos) + "</p>";
    coordenada += ejecutarComando(comsAuto(comandos),automovil);
    div.innerHTML += "<p>" + "Pos final: " + coordenada + "</p>";
  } 

});
