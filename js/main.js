/**
 * Autor:
 * GitHub:
 */

let nom, apel, ident, date, edad, angle, cosen;
let numArr = [];

document.addEventListener("DOMContentLoaded", function play() {
  nombre();
  identidad();
  birthday();
  cos();
  emptyArr(numArr);
  fillArray(numArr);
  write();

  const windowButton = document.createElement("button");
  windowButton.innerText = "Abrir Ventana";
  document.body.appendChild(windowButton)
  windowButton.addEventListener("click", () => {});

  
  const repeatButton = document.createElement("button");
  repeatButton.innerText = "Repetir";
  document.body.appendChild(repeatButton)
  repeatButton.addEventListener("click", play);

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

const season = () => {
  let dia = date.getDay;
  let mes = date.getMonth;

  if ((mes == 1 && dia >= 1) || mes == 2 || (mes == 3 && dia <= 20)) {
    return "Invierno";
  } else if ((mes == 3 && dia >= 21) || mes == 4 || (mes == 5 && dia <= 20)) {
    return "Primavera";
  } else if ((mes == 5 && dia >= 21) || mes == 6 || (mes == 7 && dia <= 20)) {
    return "Verano";
  } else if ((mes == 7 && dia >= 21) || mes == 8 || (mes == 9 && dia <= 20)) {
    return "Otoño";
  } else if ((mes == 9 && dia >= 21) || mes == 10 || (mes == 11 && dia <= 20)) {
    return "Invierno";
  } else {
    return "Primavera";
  }
};

const cos = () => {
    angle = prompt("Introduce un numero");
    while (angle === "") {
        angle = prompt("No puede estar vacio. Introduce un numero");
      }
  cosen = Math.cos(angle * (Math.PI / 180));
};

const higher = () => {
    let maximo = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
      if (numArr[i] > maximo) {
        console.log("numero actual " + numArr[i]);
        maximo = numArr[i];
        console.log("maximo actual " + maximo);
      }
    }
    return maximo;
  };

const emptyArr = (vector) => {
    vector.splice(0, vector.length);
};

const fillArray = (vector) => {
    for (let i = 0; i < 6; i++) {
      vector.push(random());
    }
  };

const printArrays = (vector) => {
  let vectorCompleto = "[";

  for (let i = 0; i < vector.length; i++) {
    vectorCompleto += vector[i];
    if (i < vector.length - 1) {
      vectorCompleto += ", ";
    }
  }

  vectorCompleto += "]";

  return vectorCompleto;
};

const random = () => {
  return Math.floor(Math.random() * 100) + 1;
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
     Naciste un feliz dia de <b>${season()}</b> del año <b>${date.getFullYear()}</b><br>
     El coseno de <b>${angle}</b> es <b>${cosen}</b><br>
     El numero mayor de la lista <b>${printArrays(numArr)}</b> es <b>${higher()}</b><br>
     Ejemplo de numero al azar entre 0 y 100: <b>${random()}</b><br>
     </p>`
  );
  document.close();
};
