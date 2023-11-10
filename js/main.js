import { season } from "./dateActions.js";
import { random } from "./random.js";
import { fillArray } from "./arrayActions.js";
import { printArray } from "./arrayActions.js";
import { maxNumberArray } from "./arrayActions.js";
import { changeWindow } from "./changeWindow.js";
/**
 * Autor: Alvaro Fonseca Hernandez
 * GitHub:
 */

let nom, apel, ident, date, edad, angle, cosen;
let numArr = [];

document.addEventListener("DOMContentLoaded", function play() {
  nombre();
  identidad();
  birthday(date, edad);
  cos();
  fillArray(numArr);
  write();

  const windowButton = document.createElement("button");
  windowButton.innerText = "Abrir Ventana";
  document.body.appendChild(windowButton)
  windowButton.addEventListener("click", () => {
    window.open("/templates/newWindow.html", "", "resizable=no");
  });

  
  const repeatButton = document.createElement("button");
  repeatButton.innerText = "Repetir";
  document.body.appendChild(repeatButton)
  repeatButton.addEventListener("click", changeWindow)

});

const nombre = () => {
    nom = prompt("Introduce tu nombre");
    while (nom === "") {
        nom = prompt("No puede estar vacio. Introduce tu nombre");
      }
};

const identidad = () => {
  apel = prompt("Introduce tus apellidos");
  while (apel === "") {
      apel = prompt("No puede estar vacio. Introduce tus apellidos");
    }
  ident = nom + " " + apel;
};

const first = () => {
  let first = ident.toLowerCase().indexOf("a") + 1;
  return first;
};

const last = () => {
  let last = ident.toLowerCase().lastIndexOf("a") + 1;
  return last;
};

const identSplit = () => {
  return ident.substr(3, ident.length);
};

const upperIdent = () => {
  return ident.toUpperCase();
};

const birthday = () => {
  date = prompt("Introduzca su fecha de nacimiento (formato: AAAA-MM-DD)");
  while(date === ""){
    date = prompt("No puede estar vacio. Introduzca su fecha de nacimiento (formato: AAAA-MM-DD)");
  }
  date = new Date(date);
  let fechaActual = new Date();
  edad = Math.floor((fechaActual - date) / (1000 * 60 * 60 * 24 * 365));
};

const cos = () => {
    angle = prompt("Introduce un numero");
    while (angle === "") {
        angle = prompt("No puede estar vacio. Introduce un numero");
      }
  cosen = Math.cos(angle * (Math.PI / 180));
};

const write = () => {
  document.open();
  document.write(
    `<p>
     Buenos días, <b>${nom}</b><br>
     Tu nombre completo (nombre y apellidos) tiene <b>${
       ident.length
     }</b> caracteres, incluidos espacios<br>
     La <b>primera letra 'A'</b> de tu nombre esta en la posicion <b>${first()}</b><br>
     La <b>ultima letra 'A'</b> de tu nombre esta en la posicion <b>${last()}</b><br>
     Tu nombre <b>menos las tres primeras letras</b> es <b>${identSplit()}</b><br>
     Tu nombre <b>TODO EN MAYUSCULAS</b> es <b>${upperIdent()}</b><br>
     Tu edad es <b>${edad}</b> años<br>
     Naciste un feliz dia de <b>${season(date)}</b> del año <b>${date.getFullYear()}</b><br>
     El coseno de <b>${angle}</b> es <b>${cosen}</b><br>
     El numero mayor de la lista <b>${printArray(numArr)}</b> es <b>${maxNumberArray(numArr)}</b><br>
     Ejemplo de numero al azar entre 0 y 100: <b>${random()}</b><br>
     </p>`
  );
  document.close();
};
