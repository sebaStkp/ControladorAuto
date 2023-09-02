import sumar from "./sumador";

const first = document.querySelector("#pos-ini");
const form = document.querySelector("#controlador-auto");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = first.value;


  div.innerHTML = "<p>" + "Pos: " + firstNumber + "</p>";
});
