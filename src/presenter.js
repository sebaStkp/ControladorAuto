import posAuto from "./posicionAuto";
import comsAuto from "./comandos";
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
    div.innerHTML = "<p>" + "Pos: " + posAuto(posIni) + "</p>";
    div.innerHTML += "<p>" + "Comandos: " + comsAuto(comandos) + "</p>";
  } 
});
