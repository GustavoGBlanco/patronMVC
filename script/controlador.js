/*
 * Controlador
 * Cerebro de la aplicación.
 * Maneja los ebventos del clic.
 * El controlador toma el evento, lo procesa y busca la información
 * correcta del modelo, en este caso, los miembros asociados con cada casa.
 * El controlador devuelve la información a la vista.
 * 
 * Se toma de base https://www.educative.io/blog/mvc-tutorial
*/
import { obtenerDatos, obtenerCaracteres } from "./modelo.js";

// Crea y retorna una etiqueta <option> de HTML
const crearOpcionesElementoSelect = (texto, valor) => {
  const elemento = document.createElement("option");
  elemento.textContent = texto;
  elemento.value = valor;
  return elemento;
};

// Crea y retorna una etiqueta <li> de HTML
const crearItemListaElementoSelect = (texto) => {
  const elemento = document.createElement("li");
  elemento.textContent = texto;
  return elemento;
};

// Busca el primer elemento del documento que coincida con el selector 'select' 
const elementoCasa = document.querySelector("select");

// Rellena la lista de casas
obtenerDatos.forEach((dato) => {
  elementoCasa.appendChild(crearOpcionesElementoSelect(dato.name, dato.code));
});

// Manejar el evento de cambio de casa
elementoCasa.addEventListener("change", (e) => {
  // El valor del destino del evento es el código de la casa
  const characteres = obtenerCaracteres(e.target.value);
  const ElementoCaracter = document.getElementById("characters");
  // Lista Vacia
  ElementoCaracter.innerHTML = "";
  // Agregar cada personaje a la lista
  characteres.forEach((caracter) => {
    ElementoCaracter.appendChild(crearItemListaElementoSelect(caracter));
  });
});