import saludar from "./saludador.js"

const form = document.querySelector("#saludar-form");
const nombre_in = document.querySelector("#nombre");
const genero_in = document.querySelector("#genero");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_in.value;
  const genero = genero_in.value;

  div.innerHTML = "<p>" + saludar(nombre, genero) + "</p>";
});
