import posAuto from "./posicionAuto";

const first = document.querySelector("#pos-ini");
const form = document.querySelector("#controlador-auto");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = first.value;
  if (posAuto(firstNumber) == "Formato incorrecto" || firstNumber == "" ) 
  {
    event.preventDefault();
    alert("Ingresa la informacion con el formato establecido");
  }
  else{
    div.innerHTML = "<p>" + "Pos: " + posAuto(firstNumber) + "</p>";
  }
 
});
