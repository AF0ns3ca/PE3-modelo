/**
 * Autor:
 * GitHub:
 */

let nom, apel, ident, date, edad, angle, cosen;

document.addEventListener("DOMContentLoaded", function () {
  nombre();
  identidad();
  birthday();
  cos();
  write();
});

const nombre = () => {
  nom = prompt("Introduce tu nombre");
  let empty = true;
  while (empty) {
    if (nom !== "") {
      empty = false;
    } else {
      nom = prompt("No puede estar vacio. Introduce tu nombre");
    }
  }
};

const identidad = () => {
  apel = prompt("Introduce tus apellidos");
  let empty = true;
  while (empty) {
    if (apel !== "") {
      empty = false;
    } else {
      apel = prompt("No puede estar vacio. Introduce tus apellidos");
    }
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
  date = new Date(date);
  let fechaActual = new Date();
  edad = Math.floor((fechaActual - date) / (1000 * 60 * 60 * 24 * 365));
};

const season = () => {
let dia = date.getDay;
let mes = date.getMonth;

if ((mes == 1 && dia >= 1) || (mes == 2) || (mes == 3 && dia <= 20)) {
    return "Invierno";
} else if ((mes == 3 && dia >= 21) || (mes == 4) || (mes == 5 && dia <= 20)) {
    return "Primavera";
} else if ((mes == 5 && dia >= 21) || (mes == 6) || (mes == 7 && dia <= 20)) {
    return "Verano";
} else if ((mes == 7 && dia >= 21) || (mes == 8) || (mes == 9 && dia <= 20)) {
    return "Otoño";
} else if ((mes == 9 && dia >= 21) || (mes == 10) || (mes == 11 && dia <= 20)) {
    return "Invierno";
} else {
    return "Primavera";
}
};

const cos = () => {
  angle = prompt("Introduce un numero");
  let empty = true;
  while (empty) {
    if (angle !== "") {
      empty = false;
    } else {
        cosen = prompt("No puede estar vacio. Introduce un numero");
    }
  }

  cosen = Math.cos(angle * (Math.PI / 180));

}

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
     Naciste un feliz dia de <b>${season()}</b> del año <b>${date.getFullYear()}</b><br>
     El coseno de <b>${angle}</b> es <b>${cosen}</b>
     </p>`
  );
  document.close();
};
