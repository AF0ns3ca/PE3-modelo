// export const season = (date) => {
//     let dia = date.getDay;
//     let mes = date.getMonth;
  
//     if ((mes == 1 && dia >= 1) || mes == 2 || (mes == 3 && dia <= 20)) {
//       return "Invierno";
//     } else if ((mes == 3 && dia >= 21) || mes == 4 || (mes == 5 && dia <= 20)) {
//       return "Primavera";
//     } else if ((mes == 5 && dia >= 21) || mes == 6 || (mes == 7 && dia <= 20)) {
//       return "Verano";
//     } else if ((mes == 7 && dia >= 21) || mes == 8 || (mes == 9 && dia <= 20)) {
//       return "Otoño";
//     } else if ((mes == 9 && dia >= 21) || mes == 10 || (mes == 11 && dia <= 20)) {
//       return "Invierno";
//     } else {
//       return "Primavera";
//     }
//   };

  export const seasonV2 = (dia,mes) => {  
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