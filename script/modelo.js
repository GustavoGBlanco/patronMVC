/*
 * Modelo
 * El modelo interactua con la base de datos falsa.
 * Cualquier interacción con la base de datos se hará en este archivo.
*/
import { datosMockeadosBaseDeDatos } from "./baseDeDatos.js";

const obtenerDatos = datosMockeadosBaseDeDatos;

//Devuelve un array de caracteres pertenecientes a una casa.
const obtenerCaracteres = (codigoCasa) => {
  switch (codigoCasa) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Array vacio
  }
};

export { obtenerDatos, obtenerCaracteres };
