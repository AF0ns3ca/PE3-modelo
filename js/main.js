// import { season } from "./dateActions.js";
import { seasonV2 } from "./dateActions.js";
import { random } from "./random.js";
import { fillArray } from "./arrayActions.js";
import { printArray } from "./arrayActions.js";
import { maxNumberArray } from "./arrayActions.js";
import { changeWindow } from "./changeWindow.js";
/**
 * Autor: Alvaro Fonseca Hernandez
 * GitHub: https://github.com/AF0ns3ca/PE3-modelo.git
 */

let nom, apel, ident, edad, angle, cosen, dia, mes, anio;
// let date;
let numArr = [];

const nombre = () => {
  nom = prompt("Introduce tu nombre");
  while (nom === "" || !isNaN(nom)) {
    nom = prompt("No puede estar vacio. Introduce tu nombre");
  }
};

const identidad = () => {
  apel = prompt("Introduce tus apellidos");
  while (apel === "" || !isNaN(apel)) {
    apel = prompt("No puede estar vacio. Introduce tus apellidos");
  }
  ident = nom + " " + apel;
};

const first = () => {
  if (ident.toLowerCase().includes("a")) {
    let first = ident.toLowerCase().indexOf("a") + 1;
    return first;
  } else {
    return "ESTE NOMBRE NO TIENE LETRA A";
  }
};

const last = () => {
  if (ident.toLowerCase().includes("a")) {
    let last = ident.toLowerCase().lastIndexOf("a") + 1;
    return last;
  } else {
    return "ESTE NOMBRE NO TIENE LETRA A";
  }
};

const identSplit = () => {
  return ident.substr(3, ident.length);
};

const upperIdent = () => {
  return ident.toUpperCase();
};

// const birthday = () => {
//   date = prompt("Introduzca su fecha de nacimiento (formato: AAAA-MM-DD)");
//   while (date === "") {
//     date = prompt(
//       "No puede estar vacio. Introduzca su fecha de nacimiento (formato: AAAA-MM-DD)"
//     );
//   }
//   date = new Date(date);
//   let fechaActual = new Date();
//   edad = Math.floor((fechaActual - date) / (1000 * 60 * 60 * 24 * 365));
// };

const birthdayV2 = () => {
  let fechaActual = new Date();
  dia = prompt("Introduzca su dia de nacimiento");

  while (
    dia === "" ||
    isNaN(dia) ||
    parseFloat(dia) < 1 ||
    parseFloat(dia) > 31
  ) {
    dia = prompt("Introduzca un dia de nacimiento valido");
  }

  mes = prompt("Introduzca su mes de nacimiento") - 1;
  while (
    mes === "" ||
    isNaN(mes) ||
    parseFloat(mes) < 1 ||
    parseFloat(mes) > 12
  ) {
    mes = prompt("Introduzca un mes de nacimiento valido");
  }

  anio = prompt("Introduzca su año de nacimiento");
  while (anio === "" || isNaN(anio) || anio > fechaActual.getFullYear()) {
    anio = prompt("Introduzca su año de nacimiento");
  }

  console.log(dia, mes, anio);
  edad = fechaActual.getFullYear() - anio;
  console.log(edad);
};

const cos = () => {
  angle = prompt("Introduce un numero para hacer su COSENO");
  while (angle === "" || isNaN(angle)) {
    angle = prompt("No puede estar vacio. Introduce un numero");
  }
  cosen = Math.cos(angle * (Math.PI / 180));
};

const write = () => {
  document.open();
  document.write(
    `<h1>Práctica 3 - DWEC</h1>
    <hr>
    <p>
     Buenos días, <b>${nom}</b><br>
     Tu nombre completo (nombre y apellidos) tiene <b>${
       ident.length
     }</b> caracteres, incluidos espacios<br>
     La <b>primera letra 'A'</b> de tu nombre esta en la posicion <b>${first()}</b><br>
     La <b>ultima letra 'A'</b> de tu nombre esta en la posicion <b>${last()}</b><br>
     Tu nombre <b>menos las tres primeras letras</b> es <b>${identSplit()}</b><br>
     Tu nombre <b>TODO EN MAYUSCULAS</b> es <b>${upperIdent()}</b><br>
     Tu edad es <b>${edad}</b> años<br>
     Naciste un feliz dia de <b>${seasonV2(
       dia,
       mes
     )}</b> del año <b>${anio}</b><br> 
     El coseno de <b>${angle}</b> es <b>${cosen}</b><br>
     El numero mayor de la lista <b>${printArray(
       numArr
     )}</b> es <b>${maxNumberArray(numArr)}</b><br>
     Ejemplo de numero al azar entre 0 y 100: <b>${random()}</b><br>
     </p>`
  );
  document.close();
};

document.addEventListener("DOMContentLoaded", function() {
  nombre();
  identidad();
  // birthday();
  birthdayV2();
  cos();
  fillArray(numArr);
  write();

  const windowButton = document.createElement("button");
  windowButton.innerText = "Abrir Ventana";
  document.body.appendChild(windowButton);
  windowButton.addEventListener("click", () => {
    window.open("/templates/newWindow.html", "", "resizable=no");
  });

  const repeatButton = document.createElement("button");
  repeatButton.innerText = "Reiniciar";
  document.body.appendChild(repeatButton);
  repeatButton.addEventListener("click", changeWindow);
});
